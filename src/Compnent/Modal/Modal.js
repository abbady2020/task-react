import React,{Fragment} from "react";
import ReactDom from "react-dom"

import style from "./Modal.module.css"



const Back=({clasos,show})=>{
  return(
<div className={`${style.back} ${show?style.backk:null} `} onClick={clasos} >

</div>
  )
}





const Overly=({show,children})=>{
  return(
<div className={`${style.overly} ${show?style.overlyy:null} `}>
{children}
</div>
  )
}


const Modal=({show,closes,children})=>{

return(
  
  <Fragment>
  
    {ReactDom.createPortal(<Fragment> <Back clasos={closes} show={show} /> <Overly show={show}> {children}</Overly> </Fragment>,document.getElementById("modal"))}
  </Fragment>
)

}

export default Modal



























