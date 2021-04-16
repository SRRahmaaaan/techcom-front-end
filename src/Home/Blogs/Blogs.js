import React from 'react'
import maintenance from  "../../images/maintenance.jpg"
import hates from  "../../images/hates.jpg"
import protect from  "../../images/protect.jpg"
import basic from  "../../images/basic.jpg"
import place from  "../../images/places.jpg"
import clean from  "../../images/clean.jpg"
import Blog from './Blog'


const Blogs = () => {
    const blogsData = [
        {
            title: "COMPUTER MAINTENANCE",
            image: maintenance
        },
        {
            title: "WHY YOUR COMPUTER HATES YOU",
            image: hates
        },
        {
            title: "HOW TO PROTECT YOUR NETWORK",
            image: protect
        },
        {
            title: "BASIC COMPUTER PROBLEM SOLUTION",
            image: basic
        },
        {
            title: "WHY YOU NEED TO KEEP YOU PC IN A COOL PLACE",
            image: place
        },
        {
            title: "EASY TIPS TO CLEAN YOUR PC",
            image: clean
        }
    ]
    return (
        <section className="sectionContainer" id="blogs">
            <h3 className="heading mb-5">OUR LATEST BLOGS</h3>
            <div className="row" style={{width:"90%", margin:"auto"}}>
                {
                    blogsData.map((blog) => <Blog key={blog.title} blog={blog} />)
                }
            </div>
        </section>
    )
}

export default Blogs
