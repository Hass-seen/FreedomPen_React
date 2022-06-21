import React from 'react'
import { useState } from 'react'

function Editprofile({user,setuser, edit}) {

    const [picbase64,setpicbase64]= useState(user.pic)
    const [Name,setname]=useState(user.name)
    const [status, setstatus]= useState(user.status)
    const [field,setfield]= useState(user.field)
    const [Bio,setbio]= useState(user.bio)

    const onchange=(e)=>{
      const files= e.target.files
      const file=files[0]
      getbase64(file)
    }

    const onLoad=(filestring)=>{
      setpicbase64(filestring)
    }


    const getbase64=(file)=>{
      let reader= new FileReader()
      reader.readAsDataURL(file)
      reader.onload=()=>{
        onLoad(reader.result)
      }
    }

    const go=(e)=>{
     
      e.preventDefault()
      console.log(picbase64)
      setuser({...user, pic:picbase64, name:Name, bio:Bio, field:field,status:status})
      edit()
    }

  return (
       <div className="stuff">
    
    
       <img src={picbase64}/>            
       <input type="file" onChange={onchange} style={{display: "none"}} id="pfp" />
       <label htmlFor='pfp' style={{ borderRadius: "10px", backgroundColor: "white", padding: "2px", marginBottom: "4px", cursor: "pointer"}} > change image </label>    <br/>
       <label  className="red">Full name: </label>  
      <input type="text" style={{padding: "3px"}} value={Name}  onChange={(e)=>setname(e.target.value)} id="fname" name="fname" />
    
      <label  className="red">Status:</label>  
      <input type="text" style={{padding: "3px"}} id="status" value={status}  onChange={(e)=>setstatus(e.target.value)} name="status" />
    
      <label className="red">Field of covrage:</label>  
      <textarea id="cov" name="cov" value={field}  onChange={(e)=>setfield(e.target.value)}  rows="4" cols="50" style={{borderRadius: "10px", padding: "3px", width: "40%"}}></textarea><br/>
    
    
      <label className="red">Biofraphy</label>  
      <textarea id="bio" name="bio" value={Bio}  onChange={(e)=>setbio(e.target.value)}  rows="4" cols="50" style={{borderRadius: "10px",padding: "3px", width: "40%"}}></textarea><br/>
    
      <input type="submit" onClick={go} name="go" value="Save"/>
    
    
    
    </div>
    


  )
}

export default Editprofile