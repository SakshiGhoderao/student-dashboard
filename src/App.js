import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App(){
  return (
    <BrowserRouter>

      <div className="app">
        <Sidebar />

        <div className="main">
          <Navbar />
        
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;