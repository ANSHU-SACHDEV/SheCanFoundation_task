import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LeaderBoard from './components/leaderBoard';

import './index.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Intern Dashboard</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="*" element={<div>Page Not Found</div>} />

            <Route path="/" element={
              user ? (
                <Dashboard name={user} />
              ) : (
                <div className="auth-container">
                  <Login onLogin={setUser} />
                </div>
              )
            } />

            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
