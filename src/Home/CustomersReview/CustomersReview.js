import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

const CustomersReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://obscure-peak-79043.herokuapp.com/allReviews")
        .then(response => response.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="sectionContainer">
            <h3 className="mb-5 heading">WHAT OUR CLIENT SAY ABOUT OUR SERVICE</h3>
            <div className="row mx-auto" style={{width:"85%"}}>
                {
                    reviews.map((review) => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </section>
    )
}

export default CustomersReview
