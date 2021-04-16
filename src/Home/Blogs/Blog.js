import React from 'react'
import "./Blogs.css"

const Blog = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className="blog-card">
                <div className="imgbx">
                    <img src={blog.image} alt="blogImage"/>
                </div>
                <div className="blog-content">
                    <h4 style={{color:"#F37121"}}>{ blog.title }</h4>
                    <p>BY : ADMIN</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit eveniet tempore laboriosam nihil natus tenetur unde rem maxime. Repudiandae numquam reprehenderit eos assumenda. Incidunt aliquam delectus inventore. Animi architecto.</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
