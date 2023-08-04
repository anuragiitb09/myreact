import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'anurag' && password === '1234') {
      setLoggedIn(true);
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, Admin!</h2>
        <button onClick={handleLogout}>Logout</button>
        <Link to="/other-page">Go to Other Page</Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'white' }}>
      <div style={{ background: '#00df9a', padding: '20px', borderRadius: '5px', textAlign: 'center', border: '2px solid #00bf8f', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: 'black', marginBottom: '20px' }}><strong>Admin Login</strong></h2>
        {wrongPassword && <p style={{ color: 'red', marginBottom: '10px' }}>Wrong password/username. Please try again.</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <button onClick={handleLogin} style={{ background: 'white', color: '#00df9a', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        <Link to="/Hero" style={{ color: 'white', display: 'block', marginTop: '10px' }}>ContactUs</Link>
      </div>
    </div>
  );
};

export default Login;
