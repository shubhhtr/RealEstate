import React, {useState} from 'react'

function Location() {

  const [city,setCity]=useState("");

  return (
    <div className="dropdown">
      <select className="btn">
  <option className="">All Location</option>
  <option className="">Delhi</option>
  <option className="">Mumbai</option>
  <option className="">Chennai</option>
  <option className="">Kolkata</option>
</select>
    </div>
  )
}

export default Location