import React from 'react'


export const Left = ({user}) => {
  return (
    <div className="left" >
		<img src={user.pic} className="pfp" />
	 
        <div className="personal">
        	<div className="status">
        		<h6>Name :</h6>
         <p>{user.name}</p>
         <h6>Status :</h6>
         <p>{user.status}</p>

         <h5>Field of covrage: </h5>
         <p>{user.field}</p>
          </div>

          <div className="bio">
         <h6>Biography :</h6>
         <p>{user.bio} </p>
          </div>
         </div>


	</div>
  )
}
export default Left