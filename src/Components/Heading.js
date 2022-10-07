import React from 'react'

function Heading() {
  return (
    <div className='heading' style={{display:"block"}} >
        <h1 style={{display: "inline", float: "left"}}>Search Properties to Rent</h1>
        <div className="heading-side" style={{float: "right"}}>
            <input type="search" value="Search Here" style={{display:"inline",float: "left", margin:"10px"}}/>
            <button type="button" className="btn btn-secondary float-end" style={{float: "right", margin:"5px"}}>Search</button>
        </div>
    </div>
  )
}

export default Heading