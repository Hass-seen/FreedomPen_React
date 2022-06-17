import React from 'react'
import pdf from "./pdf.png"

function Post({post ,like, delet,}) {
  return (

    <div className="feed">
		<a href="" style={{color: "black"}}><h2>{post.Name}</h2></a>
		<h6>{post.email}</h6> <br/>
		  <h4>{post.sub}</h4>
		  <div id="wrapper"><p>{post.body}</p></div><br/>
		  <a href={post.file} target=""><img src={pdf} style={{height:"40px" ,
		   width: "40px"}}/></a>
		  <span  style={{borderRadius: "10px", border:"2px black solid", cursor:"pointer", width:"fit-content",
		   padding:"2px 4px", backgroundColor:" darkgray"}} >
            <span>{post.likes}</span>
		  <span style={{marginLeft:"10px"}} onClick={()=>like(post.id)}>upvote</span></span>
          <span style={{borderRadius: "10px", border:"2px black solid",
		   padding:"2px 4px", cursor:"pointer", backgroundColor: "darkgray",width:"fit-content", marginLeft: "70%",
		    color: "red", marginBottom:"2%"}} onClick={()=>delet(post.id)}>Delete</span>
		  </div>
        
  )
}

export default Post
