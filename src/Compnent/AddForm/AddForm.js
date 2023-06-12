
import React,{useState} from "react"
import Layout from "../Layout/Layout";
import Button from "../Buttonss/Button";



const AddFrom=({addusers,closes})=>{


const [name,setname]=useState('');
const [age,setage]=useState('');
const [address,setaddress]=useState('');
const [phone,setphone]=useState('');
const [type,settype]=useState('');





  const onsubmitss=(e)=>{
    e.preventDefault()

    addusers({
      id:Math.round(Math.random()*100),
      name,
      age,
      address,
      phone,
      type,
    });
    setname("");
    setage('');
    setaddress('');
    setphone('')
    settype ('');
    closes('')
    };

return(
  <form onSubmit={onsubmitss} >
<Layout.kaser>
    <label for="name">name: *</label>
    <input type="text" placeholder="name" id="name" value={name} onChange={(e)=>setname(e.target.value)} />
    </Layout.kaser>

    <Layout.kaser>
    <label for="age">age: *</label>
    <input type="text" placeholder="age" id="age" value={age} onChange={(e)=>setage(e.target.value)}  />
    </Layout.kaser>

    <Layout.kaser>
    <label for="address">address: *</label>
    <input type="text" placeholder="address" id="address" value={address} onChange={(e)=>setaddress(e.target.value)}  />
    </Layout.kaser>

    <Layout.kaser>
    <label for="phone">phone: *</label>
    <input type="text" placeholder="phone" id="phone" value={phone} onChange={(e)=>setphone(e.target.value)}  />
    </Layout.kaser>

    <Layout.kaser>
    <label for="type">type: *</label>
    <input type="text" placeholder="type" id="type" value={type} onChange={(e)=>settype(e.target.value)}  />
    </Layout.kaser>

<div>
  <Button type="submit" >save</Button>
  <Button type="reset" >reset</Button>
</div>
  </form>
)


}



export default AddFrom






















































