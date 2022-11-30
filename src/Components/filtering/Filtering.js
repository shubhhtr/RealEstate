import React from 'react';
import PriceRange from './Price';
import Location from './Location';
import Type from './Type';


function Filter({setProType}) {

  const sty={
    display:"flex",
    marginTop:"100px",
    width:"fit-content",
    margin:"auto",
    border:"1px solid black",
    borderRadius:"5px",
    padding:"5px"
    }

  return (
    <div className='filter-cover' style={sty}>
    <PriceRange />
    <Location />
    <Type setProType={setProType} />
    <button type="button" className="btn btn-secondary float-end" >Search</button>
    </div>
  )
}

export default Filter