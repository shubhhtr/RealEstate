import React from 'react'

function Type({setProType}) {
  
  return (
    <div className="dropdown">
      <select className="btn" onChange={(event)=>setProType(event.target.value)}>
        <option className="" value="all" >All Types</option>
        <option className="" value="house">House</option>
        <option className="" value="plot">Plot</option>
        <option className="" value="flat">Flat</option>
      </select>
    </div>
  )
}

export default Type;