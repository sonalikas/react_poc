import React,{useState} from 'react'

function CreateUser()
{
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
 function makeUser(){
     let data ={name,age,address}
     console.log("called",data)
 }   
    return(
        <div><h1>create users</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name} />
        <br/> <br/>
        <input type="number" onChange={(e)=>setAge(e.target.value)} name="age" value={age} />
        <br/><br/>
        <input type="text" onChange={(e)=>setAddress(e.target.value)} name="addres" value={address} />
        <br/><br/>
       <button onClick={makeUser}>create user</button>
        </div>

    )
    
}
export default CreateUser