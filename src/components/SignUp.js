import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeYear, setCollegeYear] = useState('first');
  const [profilePicture, setProfilePicture] = useState(null);
  const [role, setRole] = useState('member');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      email,
      password,
      collegeYear,
      profilePicture,
      role,
    });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          College Year:
          <select
            value={collegeYear}
            onChange={(e) => setCollegeYear(e.target.value)}
            required
          >
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
            <option value="fourth">Fourth Year</option>
          </select>
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            onChange={handleProfilePictureChange}
            required
          />
        </label>
        <label>
          Role in Club:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="member">Member</option>
            <option value="core">Core</option>
            <option value="head">Head</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;