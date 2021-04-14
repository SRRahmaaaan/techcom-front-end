import { Link } from "react-router-dom"
import { FaHome, FaPlusCircle, FaUserPlus, FaTools, FaClipboardList} from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <aside className="sidebarContainer">
                <h2 className="heading pl-5">DASHBOARD</h2>
            <ul>
                <li>
                    <Link to="/"><FaHome className="sidebarIcon" />HOME</Link>
                </li>
                <li>
                    <Link to="/admin"><FaClipboardList className="sidebarIcon" />ORDER LIST</Link>
                </li>
                <li>
                    <Link to="/admin/addService"><FaPlusCircle className="sidebarIcon" />ADD SERVICE</Link>
                </li>
                <li>
                    <Link to="/admin/manageServices"><FaTools className="sidebarIcon"/>MANAGE SERVICES</Link>
                </li>
                <li>
                    <Link to="/admin/addAdmin"><FaUserPlus className="sidebarIcon" />ADD ADMIN</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
