import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(){
    return (
        <div className="sidebar">
            <h2 className="logo">Student</h2>

            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;