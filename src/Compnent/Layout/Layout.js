
import React from "react"
import style from "./Layout.module.css"




const Layout=(props)=>{
return(
  <form onSubmit={props.onSubmit} >{props.children}</form>
)
}




const kaser=(props)=>{

return(
  <div className={style.baf}>{props.children}</div>
)
}

Layout.kaser=kaser


export default Layout




























