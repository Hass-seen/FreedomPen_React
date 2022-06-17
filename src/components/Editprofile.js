import React from 'react'

function Editprofile() {
  return (
       <div className="stuff">
    
    
       <img src=""/>            
            
       <label style={{ borderRadius: "10px", backgroundColor: "white", padding: "2px", marginBottom: "4px", cursor: "pointer"}} > change image </label>    <br/>
       <label  className="red">Full name: </label>  
      <input type="text" style={{padding: "3px"}} id="fname" name="fname" />
    
      <label  className="red">Status:</label>  
      <input type="text" style={{padding: "3px"}} id="status" name="status" />
    
      <label className="red">Field of covrage:</label>  
      <textarea id="cov" name="cov"  rows="4" cols="50" style={{borderRadius: "10px", padding: "3px", width: "40%"}}></textarea><br/>
    
    
      <label className="red">Biofraphy</label>  
      <textarea id="bio" name="bio"  rows="4" cols="50" style={{borderRadius: "10px",padding: "3px", width: "40%"}}></textarea><br/>
    
      <input type="submit" name="go" value="Save"/>
    
    
    
    </div>
    


  )
}

export default Editprofile