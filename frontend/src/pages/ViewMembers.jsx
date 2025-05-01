import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="view-members-container">
      <h2>Team Members</h2>
      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member._id}>
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              className="member-img"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/members/${member._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
