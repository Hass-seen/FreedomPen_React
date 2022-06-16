import React from 'react'
import pdf  from "./pdf.png";
import { useState } from 'react';

function Poster({onadd, pop}) {
    const [sub, setsub]= useState("");
    const [body, setbody]= useState("");
    const [file, setfile]= useState("");
  

   const onsubmit=(e)=>{
    e.preventDefault()
    if(!sub || !body){
        alert('pleas fill both subject and body inputs')
        return
    }
    onadd({sub, body, file})
    setsub('')
    setbody('')
   }



  return (
    <div className="poster"> 
        <form onSubmit={onsubmit}>
	      <h4>Subject:</h4>
	      <input type="text" name="subject" id="sub" rows="4" value={sub} onChange={(e)=>setsub(e.target.value)} cols="50" required/> <br/>
	       <h4>Body:</h4>
	       <textarea id="postbody" name="body"  rows="4" cols="50" value={body} onChange={(e)=>setbody(e.target.value)} style={{width: "100%"}} required></textarea><br/>
	          <input type="file" id="file" name="pdf" accept=".pdf" style={{display: "none"}} />
            <label style={{ cursor: "pointer", borderRadius: "10px"}}  > <img src={pdf} style={{height: "30px", width: "30px"}}/> </label> <br/><br/>
	       <input type="submit" name="pos" value="post"/> <h6 id="alert">pleas fill both inputs*</h6> <label id="cancle" onClick={pop}>Cancle</label>

        </form>
    </div>
  )
}

export default Poster