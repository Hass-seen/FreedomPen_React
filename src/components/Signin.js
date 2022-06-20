import React from 'react'
import { useState } from 'react'

function Signin({setaccess, setuser}) {
    const [email, setemail]=useState()
    const [pass, setpass]= useState()

    const [users,setusers]= useState([{id:1, email:"user@user.com", password:"123", name:"Reporter Reportson",
    status:"...",field:"...", bio:"..." ,
    pic:"data:image/png;base64,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"} ])

    const login=(e)=>{
        e.preventDefault()
        var accountexist=false
        var temp={}
      users.forEach(function(user){
        if(user.email== email){
          accountexist=true;
          temp= user
        }
      })
       if(!accountexist){
        alert("account does not exist pleas signup first")
       }else if(pass!= temp.password){
        alert("incorect password")
       }else{
        setaccess(true)
        setuser(temp)
       }
       setemail("")
       setpass("")

      }

  return (
    <div className="signe-in" >
	<form onSubmit={login}>
  <label htmlFor="E-Mail" className="red">E-Mail</label>  
  <input type="text" id="E-Mail" name="E-Mail" value={email} onChange={(e)=>setemail(e.target.value)} required/>
  <label htmlFor="Password" className="red">Password</label>
  <input type="text" id="" name="Password" value={pass} onChange={(e)=>setpass(e.target.value)} required/>
  <input className="button" type="Submit" name="in"/>
  </form>
  </div>
  )
}

export default Signin