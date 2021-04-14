import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import OrderList from "../OrderList/OrderList"

const Admin = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 p-0 m-0">
                    <OrderList />
                </div>
            </section>
        </main>
    )
}

export default Admin
