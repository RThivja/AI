
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`admin-panel ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="img/logo.jpeg" alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <span>PINEAPPLEAI</span>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="" className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>Dashboard</Link>
          </li>
          <li className="menu-item dropdown">
            <span onClick={toggleDropdown} className="dropdown-toggle">Home</span>
            {dropdownOpen && (
              <div className="dropdown">
                <Link to="/carousel" className="menu-item">Carousel</Link>
                <Link to="" className="menu-item">About</Link>
                <Link to="" className="menu-item">Projects</Link>
                <Link to="" className="menu-item">Team</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="" className={`menu-item ${location.pathname === '/form-elements' ? 'active' : ''}`}>Form Elements</Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <header className="navbar">
          <button onClick={toggleSidebar} className="toggle-sidebar-btn">
            ☰
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search products" />
          </div>
          
          <div className="navbar-right">
            <div className="messages">
              <span>✉️</span>
            </div>
            <div className="notifications">
              <span>🔔</span>
            </div>
            <div className="profile">
              <img src="img/team-3.jpg" alt="Profile" className="profile-pic" />
              <span>Admin</span>
            </div>
          </div>
        </header>
        <div className="dashboard-content">
        <p1>Welcome to AdminPanel</p1>
          {children} {/* Render children components here */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
