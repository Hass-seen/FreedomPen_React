import React from 'react'
import pfp from './pfp.png'

export const Left = () => {
  return (
    <div className="left" >
		<img src={pfp} className="pfp" />
	 
        <div className="personal">
        	<div className="status">
        		<h6>Name :</h6>
         <p>hassan</p>
         <h6>Status :</h6>
         <p>feeling good today</p>

         <h5>Field of covrage: </h5>
         <p>random stuff</p>
          </div>

          <div className="bio">
         <h6>Biography :</h6>
         <p>not sure whatr to write </p>
          </div>
         </div>


	</div>
  )
}
export default Left