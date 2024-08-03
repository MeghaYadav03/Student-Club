import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Forum from './components/Forum'; // Import Forum component
import Calendar from './components/Calendar';
import Assignment from './components/Assignment';
import Resources from './components/Resources';
import './App.css';
import MyCourses from './components/MyCourses';

function AppContent() {
  const [completedUnits, setCompletedUnits] = useState({});
  const [events, setEvents] = useState([]); // Initialize events state

  const courses = {
    'Python': ['Introduction', 'Data Types', 'Control Flow', 'Functions', 'Modules'],
    'React': ['JSX', 'Components', 'State', 'Props', 'Lifecycle Methods'],
    'JavaScript': ['Syntax', 'DOM Manipulation', 'ES6', 'Asynchronous Programming', 'APIs'],
    'HTML': ['Elements', 'Attributes', 'Forms', 'Media', 'Semantics'],
    'CSS': ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Animations'],
    'C++': ['Syntax', 'OOP', 'STL', 'Memory Management', 'Concurrency']
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home courses={courses} completedUnits={completedUnits} events={events} />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/calendar" element={<Calendar events={events} setEvents={setEvents} />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/courses" element={<MyCourses courses={courses} completedUnits={completedUnits} setCompletedUnits={setCompletedUnits} />} />
          <Route path="*" element={<Navigate to="/signin" />} /> {/* Redirect to SignIn for unknown routes */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;