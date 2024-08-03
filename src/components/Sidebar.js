import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/80" alt="Profile" />
        <h3>Hi, Pranav</h3>
        <p>1234567</p>
      </div>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <span className="icon">📚</span>
            <span className="text">My Courses</span>
          </Link>
        </li>
        <li>
          <Link to="/assignment">
            <span className="icon">📝</span>
            <span className="text">Assignments</span>
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <span className="icon">📅</span>
            <span className="text">Time Table</span>
          </Link>
        </li>
        <li>
          <Link to="/forum">
            <span className="icon">💬</span>
            <span className="text">Forum</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <span className="icon">⚙️</span>
            <span className="text">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;