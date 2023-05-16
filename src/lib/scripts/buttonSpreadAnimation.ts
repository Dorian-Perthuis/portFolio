export class buttonSpread{
  //Attributs
  button : HTMLElement;
  start : DOMHighResTimeStamp | undefined = undefined;
  previousTimeStamp : DOMHighResTimeStamp | undefined = undefined;
  done = false;
  enterPoint : relativePoint = {x:0, y:0};
  leavePoint : relativePoint = {x:0, y:0};
  isEnterAnim :boolean = false;
  isLeaveAnim :boolean = false;
  //Settings
  speed: number;
  hoverColor : string;
  idleColor : string;

  //Constructor
  constructor(button:HTMLElement, speed:number|undefined = undefined, hoverColor:string|undefined = undefined, idleColor : string|undefined = undefined){
    this.button = button;
    this.speed = speed || 0.30;
    this.hoverColor = hoverColor || "hsla(354,81%,72%,1)";
    this.idleColor = idleColor || "rgba(250,245,255,1)";
    button.addEventListener("mouseenter",this.mouseEnter.bind(this));
    button.addEventListener("mouseleave",this.mouseLeave.bind(this));
  }

  //Methodes
  private mouseEnter(e : MouseEvent){
    if(!this.isEnterAnim){
      this.initEnterAnim(e)
      window.requestAnimationFrame(this.enterAnim.bind(this));
    }
  }
  
  private mouseLeave(e : MouseEvent){
    if(!this.isLeaveAnim){
      this.initLeaveAnim(e);
      window.requestAnimationFrame(this.leaveAnim.bind(this));
    }
  }

  //--------------Enter Animation--------------
  private initEnterAnim(e : MouseEvent){
    this.enterPoint = getMouseRelativePosition(e);
    this.isEnterAnim = true;
  }
  private enterAnim(timestamp : DOMHighResTimeStamp){
    if (this.start === undefined) {
      this.start = timestamp;
    }
    const elapsed = timestamp - this.start;
  
    if (this.previousTimeStamp !== timestamp) {
      const count = Math.min(this.speed * elapsed, 100);
      this.button.style.backgroundImage = `radial-gradient(circle at ${this.enterPoint.x}% ${this.enterPoint.y}%, ${this.hoverColor} 0px, ${this.hoverColor} ${count}%, transparent ${count}%)`;
      if (count === 100) this.done = true;
    }
  
    if (elapsed < 1000) { // Stop the animation after 1 seconds
      this.previousTimeStamp = timestamp;
      if (!this.done) {
        window.requestAnimationFrame(this.enterAnim);
      }
      else{
        this.endEnterAnim();
      }
    }else{
      this.endEnterAnim();
    }
  }
  
  private endEnterAnim(){
    this.done = false;
    this.isEnterAnim = false;
    this.start = undefined;
    this.previousTimeStamp = undefined;
  }
  //------------------------------------

  //--------------Leave Animation--------------
  private initLeaveAnim(e : MouseEvent){
    this.leavePoint = getMouseRelativePosition(e);
    this.isLeaveAnim = true;
  }

  private leaveAnim(timestamp : number){
    if (this.start === undefined) {
      this.start = timestamp;
    }
    const elapsed = timestamp - this.start;

    if (this.previousTimeStamp !== timestamp) {
      const count = Math.min(this.speed * elapsed, 100);
      this.button.style.backgroundImage = `radial-gradient(circle at ${this.leavePoint.x}% ${this.leavePoint.y}%, ${this.hoverColor} 0px, ${this.hoverColor} ${100-count}%, transparent ${100-count}%)`;
      if (count === 100) this.done = true;
    }

    if (elapsed < 1000) { // Stop the animation after 1 seconds
      this.previousTimeStamp = timestamp;
      if (!this.done) {
        window.requestAnimationFrame(this.leaveAnim);
      }
      else{
        this.endLeaveAnim();
      }
    }else{
      this.endLeaveAnim();
    }
  }

  private endLeaveAnim(){
    this.done = false;
    this.start = undefined;
    this.previousTimeStamp = undefined;
    this.isLeaveAnim = false;
  }
  //------------------------------------
}

interface relativePoint{ //Point's position relative to an Element in percentage
    x: number, //percentage
    y: number  //percentage
}

function getMouseRelativePosition(e : MouseEvent) : relativePoint{
    let rect : DOMRect = (<HTMLElement>e.target).getBoundingClientRect();
    
    return {   //relative position of the mouse in percentage
      x: ((e.clientX - rect.left)/rect.width*100),
      y: ((e.clientY - rect.top)/rect.height*100)
    }
  }
  
