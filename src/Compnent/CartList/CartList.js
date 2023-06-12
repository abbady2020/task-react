
import React from "react";
import style from "./Cart.module.css"

const CartList=({name,age,address,phone,id,type,has})=>{

return(
  <div className="nas">
  <div className={style.nana} style={{backgroundColor:type==="boy"?"green":"pink"}}  >
    <div>name: {name}</div>
    <div>age: {age}</div>
    <div>address: {address}</div>
    <div>phone: {phone}</div>
    <div className={style.naw} onClick={(e)=>has(e,id)} >x</div>
  </div>
</div>
)


}

export default CartList
















