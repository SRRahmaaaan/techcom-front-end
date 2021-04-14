import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AdminForm from './AdminForm'

const MakeAdmin = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 m-0 p-0">
                    <AdminForm />
                </div>
            </section>
        </main>
    )
}

export default MakeAdmin
