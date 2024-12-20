import React, { useState, useEffect } from 'react';
import './MyCourses.css';
import Sidebar from './Sidebar';

const coursesData = {
  Python: ['Introduction', 'Data Types', 'Control Flow', 'Functions', 'Modules'],
  HTML: ['Basics', 'Elements', 'Attributes', 'Forms', 'Media'],
  JavaScript: ['Syntax', 'DOM Manipulation', 'Events', 'ES6', 'Asynchronous JS'],
  Django: ['Introduction', 'Models', 'Views', 'Templates', 'Forms'],
  ReactJS: ['Components', 'State', 'Props', 'Lifecycle', 'Hooks']
};

const MyCourses = ({ setProgress }) => {
  const [selectedCourse, setSelectedCourse] = useState(Object.keys(coursesData)[0]);
  const [completedUnits, setCompletedUnits] = useState({});

  useEffect(() => {
    const calculateProgress = () => {
      const newProgress = {};
      Object.keys(coursesData).forEach(course => {
        const totalUnits = coursesData[course].length;
        const completedCount = Object.values(completedUnits[course] || {}).filter(status => status === 'complete').length;
        newProgress[course] = (completedCount / totalUnits) * 100;
      });
      setProgress(newProgress);
    };

    calculateProgress();
  }, [completedUnits, setProgress]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
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

  return (
    <div className="my-courses">
      <Sidebar />
      <div className="content">
        <div className="course-options">
          {Object.keys(coursesData).map(course => (
            <button
              key={course}
              onClick={() => handleCourseSelect(course)}
              className={selectedCourse === course ? 'selected' : ''}
            >
              {course}
            </button>
          ))}
        </div>
        {selectedCourse && (
          <div className="selected-course">
            <div className="course">
              <h2>{selectedCourse}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Unit</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {coursesData[selectedCourse].map(unit => (
                    <tr key={unit}>
                      <td>{unit}</td>
                      <td>
                        <button
                          onClick={() => handleUnitToggle(selectedCourse, unit)}
                          className={`status-button ${completedUnits[selectedCourse]?.[unit]}`}
                        >
                          {completedUnits[selectedCourse]?.[unit] === 'complete' ? 'Completed' : completedUnits[selectedCourse]?.[unit] === 'ongoing' ? 'Ongoing' : 'Not Started'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
