import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import MyCourses from './components/MyCourses';
import Forum from './components/Forum';
import Calendar from './components/Calendar';
import Assignment from './components/Assignment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/assignment" element={<Assignment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;