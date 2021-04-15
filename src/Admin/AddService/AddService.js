import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import ServiceForm from './ServiceForm'

const AddService = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 m-0 p-0">
                    <ServiceForm />
                </div>
            </section>
        </main>
    )
}

export default AddService
