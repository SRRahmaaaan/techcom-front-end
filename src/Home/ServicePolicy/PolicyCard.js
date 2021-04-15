import React from 'react'
import "./ServicePolicy.css"

const PolicyCard = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="box">
                <div className="imgbx">
                    <img className="img-fluid" src={data.image} alt="policyImage"/>
                </div>
                <div className="content">
                    <h5 style={{color:"#ED945E"}}>{ data.name}</h5>
                    <p>{ data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PolicyCard
