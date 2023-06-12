
import React from "react";
// import style from "./Cart.module.css"
import CartList from "../CartList/CartList";



const Cart=({vax,has})=>{
console.log(vax)
  const bas=vax.map(({id,...other})=>{

  return  <CartList id={id} {...other} key={id} has={has} />
})
  
  return(
    <div>{bas}</div>
  )


}

export default Cart

















































