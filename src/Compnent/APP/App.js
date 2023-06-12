
import React,{useState} from "react"
import Cart from "../Cart/Cart"
import Largs from "../Largs/Largs"
import Button from "../Buttonss/Button"
import Modal from "../Modal/Modal"
import AddFrom from "../AddForm/AddForm";
import "./App.css"


const App=()=>{

const [modules,setmodules]=useState(false)

const [filterss,setfilterss]=useState("")
  const [toggle,settoggle]=useState(false)
const [names,setnames]=useState([
  {
    id:1000,
    type:"boy",
    name:"tarek",
    age:27,
    address:"Helwan",
    phone:"01144134096",
  },

  {
    id:2000,
    type:"girl",
    name:"nada",
    age:23,
    address:"cairo",
    phone:"01034174106",
  },

  {
    id:3000,
    type:"boy",
    name:"abbady",
    age:20,
    address:"Egypt",
    phone:"01554930006",
  },

  {
    id:4000,
    type:"girl",
    name:"sara",
    age:15,
    address:"read",
    phone:"01233104576",
  },

])

const addusers=(data)=>{
  setnames((tese)=>[...tese,data])
}

const nam=(e,idxclick)=>{
  // const nca=names.filter((e,id)=>e.id!==idxclick)
  // setnames(nca)
  setnames((tese)=>{
    return tese.filter((e,id)=>e.id !== idxclick)
  })

}

const dad=()=>{
  settoggle(!toggle)
}


const kas =(name)=>{
  setfilterss(name)
}


const baq=()=>{
  if(filterss.length !== 0){
    return names.filter((e)=>e.name.includes(filterss))
  }

  return names

}


return(
  <div>

  <h1 className="nas" >this is names</h1>
<div>

</div>
<div>
<div className="nas">
  <Button onClick={dad} >{toggle?"show":"hidn"}</Button>
  <Button onClick={()=>setmodules(true)} >test</Button>
</div>
</div>


  <div className={toggle?"show":"hidn"} >
  <div className="nams">
  <Largs kas={kas} />
  </div>

  <Cart vax={baq()}  has={nam}  />
  <Modal show={modules} closes={()=>setmodules(false)}>
    <AddFrom addusers={addusers}  closes={()=>setmodules(false)} />  
  </Modal>
  </div>
  
  </div>
)
}
export default App



























































