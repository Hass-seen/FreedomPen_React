import React from 'react'

function Right() {
  return (
    <div className="right" style={{	height: "50vh"}}>
		<ul>
			<li className="sub" id="trend"><label style={{cursor: "pointer"}}>Treding</label></li>
			<input type="submit" name="tren" id="tren" style={{display: "none"}}/>
			<div className="search">
			<li className="sub" >Search</li>
			  <input type="text" id="srch" name="srch" />
             </div>

			<li className="sub"><label  style={{cursor: "pointer"}}>My Posts</label></li>
			<li className="sub"><label  style={{cursor: "pointer"}}>Edit Profile</label></li>
			
			

		</ul>
	</div>

  )
}

export default Right
