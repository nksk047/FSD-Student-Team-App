import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Student Team Members App</h2>
      <p>Manage your team members efficiently.</p>
      <div className="buttons">
        <Link to="/add">
          <button>Add Member</button>
        </Link>
        <Link to="/members">
          <button>View Members</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
