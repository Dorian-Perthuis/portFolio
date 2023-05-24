export interface Inset{
    top:number,
    right:number,
    bottom:number,
    left:number,
    metric?:string|undefined
  }

export interface size{
  height:number,
  width:number
}

export interface project{
  name:string,
  stack:string[],
  github_url:string,
  live_url:string,
  picture:string,
  description:string

}