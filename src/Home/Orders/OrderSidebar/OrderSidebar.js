import React from 'react'
import { Link } from "react-router-dom"
import { FaHome, FaCartPlus, FaFeatherAlt, FaClipboardList} from "react-icons/fa"

const OrderSidebar = () => {
    return (
        <aside className="sidebarContainer">
                <h2 className="heading pl-5">ORDERS</h2>
                <ul>
                    <li>
                        <Link to="/"><FaHome className="sidebarIcon" />HOME</Link>
                    </li>
                    <li>
                        <Link to="/orders"><FaCartPlus className="sidebarIcon" />Book</Link>
                    </li>
                    <li>
                        <Link to="/bookings"><FaClipboardList className="sidebarIcon" />Booking List</Link>
                    </li>
                    <li>
                        <Link to="/review"><FaFeatherAlt className="sidebarIcon"/>Write Your Review</Link>
                    </li>
                </ul>
        </aside>
    )
}

export default OrderSidebar
