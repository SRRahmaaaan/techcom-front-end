import React from 'react'
import "./BookingList.css"

const BookingCard = ({service}) => {
    const {newOrder, status} = service
    return (
        <div className="col-md-6">
            <div className="booking-card mb-3">
                <div className="image-box">
                    <img src={newOrder.imageURL} className="img-fluid" alt="serviceLogo" />
                    <p className="status">{ status }</p>
                </div>
                <div className="desc-box text-center">
                    <h4 style={{color:'#F37121'}}>{ newOrder.content.name }</h4>
                    <p className="text-justify">{ newOrder.content.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BookingCard
