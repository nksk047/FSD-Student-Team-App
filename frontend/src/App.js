import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <Router>
      <div>
        <header style={{ textAlign: 'center', padding: '20px', background: '#eee' }}>
          <h1>Student Team Members</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/add">Add Member</Link> |{" "}
            <Link to="/members">View Members</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/members" element={<ViewMembers />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
