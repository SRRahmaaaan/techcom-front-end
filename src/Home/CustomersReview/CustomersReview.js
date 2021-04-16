import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

const CustomersReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/allReviews")
        .then(response => response.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="sectionContainer">
            <h3>WHAT OUR CLIENT SAY ABOUT OUR SERVICE</h3>
            <div className="row w-100">
                {
                    reviews.map((review) => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </section>
    )
}

export default CustomersReview
