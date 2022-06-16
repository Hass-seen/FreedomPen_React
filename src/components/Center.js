import React from 'react'
import zoom from './zoom.png'
import refresh from './refresh.png'
import upload from './upload.png'
import pdf from './pdf.png'
import Post from './Post'

function Center({pop, posts}) {

  return (
    <div className="center" style={{ overflowX: "hidden"}}>
	<div>
		<div className="head" style={{width: "100%"}} >
<form>
			<ul >
				<li style={{cursor: "pointer"}}><img src={zoom} id="zoom"/></li>
				<li><label style={{cursor: "pointer"}}><img src={refresh} id="refresh"/></label></li>
				<li style={{cursor: "pointer"}} onClick={pop} ><img src={upload} id="upload"/></li>
			</ul>

</form>
	</div>
		<div className="posts">
       {posts.map((post)=>( <div key={post.id} className="feed">
		<a href="" style={{color: "black"}}><h2></h2></a>
		<h6>name</h6> <br/>
		  <h4>{post.sub}</h4>
		  <div id="wrapper"><p>{post.body}</p></div><br/><br/>
		  <a href={post.file} target=""><img src={pdf} style={{height:"40px" ,
		   width: "40px"}}/></a>
		  <a href="" id="" style={{borderRadius: "10px", border:"2px black solid", padding:"2px 4px", backgroundColor:" darkgray"}} >
            <span>likes</span>
		  <span style={{marginLeft:"10px"}}>upvote</span></a>
          <a href="" id="" style={{borderRadius: "10px", border:"2px black solid", padding:"2px 4px", backgroundColor: "darkgray", marginLeft: "70%", color: "red"}}>Delete</a>
		  </div>))}
  
   </div>

</div>
		
	</div>
  )
}

export default Center