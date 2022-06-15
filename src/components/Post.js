import React from 'react'
import pdf from "./pdf.png"

function Post() {
  return (

    <div className="feed">
		<a href="" style={{color: "black"}}><h2></h2></a>
		<h6>name</h6> <br/>
		  <h4>post.sub</h4>
		  <div id="wrapper"><p>post.body</p></div><br/><br/>
		  <a href="post.file" target=""><img src={pdf} style={{height:"40px" ,
		   width: "40px"}}/></a>
		  <a href="" id="" style={{borderRadius: "10px", border:"2px black solid", padding:"2px 4px", backgroundColor:" darkgray"}} >
            <span>likes</span>
		  <span style={{marginLeft:"10px"}}>upvote</span></a>
          <a href="" id="" style={{borderRadius: "10px", border:"2px black solid", padding:"2px 4px", backgroundColor: "darkgray", marginLeft: "70%", color: "red"}}>Delete</a>
		  </div>
        
  )
}

export default Post
