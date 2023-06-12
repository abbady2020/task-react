import React from "react";
import style from "./Button.module.css"


const Button=(props)=>{

return   <button onClick={props.onClick} type={`${props.type ? props.type : "button"}`}  >{props.children}</button>

}
export default Button

























