import React from 'react'
import { useState } from 'react'

function Right({trending, search}) {
		const [word,setword]= useState("")

		const go=(e)=>{
			e.preventDefault()
			if(!word){
				return
			}
			search(word)
			setword("")
		}
  return (
    <div className="right" style={{	height: "50vh"}}>
		<ul><form onSubmit={go}>
			<li className="sub" id="trend" onClick={trending}><label style={{cursor: "pointer"}} >Trending</label></li>
			<div className="search">
			<li className="sub" >Search</li>
			  <input type="text" id="srch"  value={word} onChange={(e)=>setword(e.target.value)} name="srch" />
             </div>

			<li className="sub"><label  style={{cursor: "pointer"}}>My Posts</label></li>
			<li className="sub"><label  style={{cursor: "pointer"}}>Edit Profile</label></li>
			
			</form>

		</ul>
	</div>

  )
}

export default Right
