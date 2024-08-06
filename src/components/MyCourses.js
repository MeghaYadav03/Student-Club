import React, { useState } from 'react';
import './MyCourses.css';
import Sidebar from './Sidebar';

const MyCourses = ({ courses = {}, completedUnits = {}, setCompletedUnits }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCourses(prev =>
      checked ? [...prev, value] : prev.filter(course => course !== value)
    );
  };

  const handleUnitToggle = (course, unit) => {
    setCompletedUnits(prev => ({
      ...prev,
      [course]: {
        ...prev[course],
        [unit]: prev[course]?.[unit] === 'complete' ? 'not started' : prev[course]?.[unit] === 'ongoing' ? 'complete' : 'ongoing'
      }
    }));
  };

  const handleNextCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % selectedCourses.length);
  };

  const handlePrevCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + selectedCourses.length) % selectedCourses.length);
  };

  const currentCourse = selectedCourses[currentCourseIndex];

  return (
    <div className="my-courses">
      <Sidebar />
      <h1>My Courses</h1>
      <div className="course-options">
        {Object.keys(courses).map(course => (
          <label key={course}>
            <input
              type="checkbox"
              value={course}
              onChange={handleCourseChange}
            />
            {course}
          </label>
        ))}
      </div>
      {selectedCourses.length > 0 && (
        <div className="course-navigation">
          <button onClick={handlePrevCourse}>Prev</button>
          <button onClick={handleNextCourse}>Next</button>
        </div>
      )}
      <div className="selected-courses">
        {currentCourse && (
          <div key={currentCourse} className="course">
            <h2>{currentCourse}</h2>
            <table>
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {courses[currentCourse].map(unit => (
                  <tr key={unit}>
                    <td>{unit}</td>
                    <td>
                      <button
                        onClick={() => handleUnitToggle(currentCourse, unit)}
                        className={`status-button ${completedUnits[currentCourse]?.[unit]}`}
                      >
                        {completedUnits[currentCourse]?.[unit] === 'complete' ? 'Completed' : completedUnits[currentCourse]?.[unit] === 'ongoing' ? 'Ongoing' : 'Not Started'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;