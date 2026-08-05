import AdminSidebar from "./AdminSidebar.jsx"
import AdminNavbar from "./AdminNavbar.jsx"
import {Outlet} from "react-router-dom"
import "./AdminLayout.css";

const AdminLayout=()=>{
    return (
        <div className="admin-layout">
            <AdminSidebar/>
            <div className="admin-main">
                 <AdminNavbar/> 
                 <Outlet/> 
                
            </div>
        </div>
    )
};

export default AdminLayout;