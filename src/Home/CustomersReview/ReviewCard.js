import React from 'react'
import userPicture from "../../images/user.png"
import "./Review.css"

const ReviewCard = ({review}) => {
    return (
            <div className="review-card">
                <div className="d-flex mb-2">
                    <img src={userPicture} alt="userPicture"/>
                    <div className="mt-1">
                        <h6 className="m-0" style={{color:'#F37121'}}>{ review.name }</h6>
                        <p>{review.designation}</p>
                    </div>
                </div>
                <p>{ review.comment}</p>
            </div>
    )
}

export default ReviewCard
