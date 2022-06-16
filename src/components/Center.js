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
       {posts.map((post)=>(<Post key={post.id} post={post}/> ))}
  
   </div>

</div>
		
	</div>
  )
}

export default Center