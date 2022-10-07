import React from 'react'
import details from '../Entries/entry'

function Data({image,price,location,type,title,features}) {
  return (
    <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt="..." style={{height:"175px"}} />
      <div className="card-body">
        <h6 className="price"><b>Price:</b> {price} Lakhs</h6>
        <h6 className="location"><b>Location:</b> {location}</h6>
        <h6 className="type"><b>Type:</b> {type}</h6>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{features}</p>
      </div>
    </div>
  </div>
  )
}

function DataCover({proType}){
  console.log(proType);
  const ittirate= details.map(
    (data)=>{ 
      if(data.type===proType){
        
      }
      return (
         <Data 
            image={data.image}
            price={data.price}
            location={data.location}
            type={data.type}
            title={data.title}
            features={data.features}
        />
      )
    }
  )

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{width:"90%", margin:"auto", marginTop:"30px"}}>
            {ittirate}
        </div>   
    )
}

export default DataCover