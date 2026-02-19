import React from "react";
import Card from "../components/Card";

function Dashboard() {
    return (
        <div>

            <h1>Dashboard</h1>

            <div className="cards">
                <Card title="Courses" value="5" />
                <Card title="Completed" value="3" />
                <Card title="Pending" value="2" />
                <Card title="Attendance" value="85%" />

            </div>
        </div>
    );
}

export default Dashboard;