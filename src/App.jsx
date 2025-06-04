import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { useState } from "react";

import Login from "./authtication/Login";

import Calendar from "./Component/Calendar/Calendar";
import LandingPage from "./components/Landing/LandingPage.jsx";
import AdminDashboard from "./Component/AdminDashboard/AdminDashboard.jsx";
import ClientManagement from "./Component/Client/Client.jsx";
import UserManagement from "./Component/User/User.jsx";
import Invitations from "./Component/Invitations/Invitations.jsx";
import Projectmanagement from "./Component/Project/Project.jsx";
import ReportsAnalytics from "./Component/Report/Report.jsx";
import TaskPage from "./Component/Task/TaskPage.jsx";
import FileManager from "./Component/File/File.jsx";

import SettingsPage from "./Component/Settings/SettingsPage.jsx";
import HelpCenterPage from "./Component/Help/Help.jsx";



function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  // Hide navbar & sidebar completely on "/", "/login" and "/signup"
  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
     location.pathname === "/invitations";

  return (
    <>
      {/* Show Navbar only if layout is not hidden */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}

      {hideLayout ? (
        // For login, signup and landing page routes: no sidebar/navbar container, just routes
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
           {/* <Route path="/invitations" element={< Invitations/>} /> */}
         
          {/* Add other public routes here if needed */}
        </Routes>
      ) : (
        // For all other routes show sidebar + navbar + content
        <div className="main-content">
          <Sidebar collapsed={isSidebarCollapsed} menuItemClick={menusidebarcollaps} />

          <div className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
            <Routes>
              {/* Put all your protected or main app routes here */}
              <Route path="/dashboard" element={<AdminDashboard/>} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/client" element={<ClientManagement />} />
              {/* <Route path="/project" element={< ProjectCalendar/>} /> */}
              <Route path="/user" element={< UserManagement/>} />
              
               <Route path="/invitations" element={< Invitations/>} />
               <Route path="/project" element={< Projectmanagement/>} />
               <Route path="/report" element={< ReportsAnalytics/>} />
              <Route path="/task" element={<TaskPage/>} />

               <Route path="/file" element={<FileManager/>} />

              <Route path="/setting" element={<SettingsPage/>} />



              <Route path="/help" element={<HelpCenterPage/>} />

              
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
