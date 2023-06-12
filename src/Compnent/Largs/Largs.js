
import React,{useState} from "react";
import style from "./Largs.module.css"


const Largs=({kas})=>{

  const [filters,setfilters]=useState('')

   const nae=(e)=>{
    const name=e.target.value;
    setfilters(name)
    kas(name)
   }

return(
  <div>
    <input type="text" placeholder="names" value={filters} onChange={nae} />
  </div>
)

}
export default Largs
































