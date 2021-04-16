import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"
import "./ManageService.css"

const SingleService = ({service}) => {
    const { content } = service
    const [none, setNone] = useState(false)
    const handleDelete = (id) => {
        fetch(`https://obscure-peak-79043.herokuapp.com/deleteService/${id}`, {
            method:"DELETE"
        })
        .then(response => response.json())
        .then(data => setNone(data))
    }
    return (
        <div className="single" style={{display: none && "none"}}>
            <p className="p-0 m-0">{content.name}</p>
            <FaTrash className="deleteIcon" onClick={() => handleDelete(service._id)} />
        </div>
    )
}

export default SingleService
