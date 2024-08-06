import React, { useState, useEffect } from 'react';
import './Home.css';
import Sidebar from './Sidebar';
const Home = ({ courses = {}, completedUnits = {}, events = [] }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const calculateProgress = () => {
      const newProgress = {};
      Object.keys(courses).forEach(course => {
        const totalUnits = courses[course].length;
        const completedCount = Object.values(completedUnits[course] || {}).filter(status => status === 'complete').length;
        newProgress[course] = (completedCount / totalUnits) * 100;
      });
      setProgress(newProgress);
    };

    calculateProgress();
  }, [courses, completedUnits]);

  const getProgressClass = (percentage) => {
    if (percentage < 33) return 'low';
    if (percentage < 66) return 'medium';
    return 'high';
  };

  return (
    <div className="home">
      <Sidebar/>
      <div className="banner">
        <h1>Welcome Back, Pranav</h1>
        <img src="https://img.freepik.com/free-vector/cute-pastel-animal-twitter-header_23-2149278601.jpg" alt="Banner" />
      </div>
      <div className="content">
        <div className="progress-section">
          <h2>Course Progress</h2>
          {Object.keys(progress).map(course => (
            <div key={course} className="course-progress">
              <h3>{course}</h3>
              <div className="progress-bar">
                <div className={`progress ${getProgressClass(progress[course])}`} style={{ width: `${progress[course]}%` }}></div>
              </div>
              <p>{progress[course].toFixed(2)}% completed</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="reminders-section">
          <h2>Reminders</h2>
          <ul>
            {events.length > 0 ? (
              events.map((event, index) => (
                <li key={index}>
                  <p>{event.title}</p>
                  <p>{new Date(event.start).toLocaleString()}</p>
                </li>
              ))
            ) : (
              <p>No events available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;