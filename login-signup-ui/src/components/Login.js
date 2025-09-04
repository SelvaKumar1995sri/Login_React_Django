import React, { useState } from 'react';

function Login({ setPage }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/api/accounts/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    let msg = '';
    if (data.username) {
      msg = data.username;
    } else if (data.password) {
      msg = data.password;
    } else if (data.message) {
      msg = data.message;
    } else {
      msg = 'Login failed';
    }
    setMessage(msg);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '30px 40px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
            minWidth: '300px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 'bold' }}>{message}</div>
            {/* {(() => {
              const msg = (typeof message === 'string') ? message.trim().toLowerCase() : '';
              {console.log(msg)}
              if (msg === 'you are not register so sign in now') {
                return (
                  <>
                    <button
                      className="image-text-button"
                      style={{ fontSize: '1.2rem', padding: '10px 32px', borderRadius: '6px', fontWeight: 'bold', border: 'none', marginRight: '10px' }}
                      onClick={() => { setShowModal(false); setPage('signin'); }}
                    >
                      Sign Up
                    </button>
                    
                  </>
                );
              } else {
                return (
                  <button onClick={() => setShowModal(false)} style={{
                    padding: '8px 24px',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    border: 'none',
                    background: '#1976d2',
                    color: 'white',
                    cursor: 'pointer'
                  }}>OK</button>
                );
              }
            })()} */}
            {typeof message === "string" && message.toLowerCase().includes("password is wrong") ? (
              <button onClick={() => setShowModal(false)} style={{
                padding: '8px 24px',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '1rem',
                border: 'none',
                background: '#1976d2',
                color: 'white',
                cursor: 'pointer'
              }}>OK</button>
            ) : (
              <button
                className="image-text-button"
                style={{ padding: '8px 24px',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '1rem',
                border: 'none',
                background: '#1976d2',
                color: 'white',
                cursor: 'pointer' }}
                onClick={() => { setShowModal(false); setPage('signin'); }}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='login-form' style={{
          maxWidth: '400px',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: '5px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{ margin: 0, fontSize: '3rem' }}>Login</h2>
          <input style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} name="username" placeholder="Username" onChange={handleChange} required />
          <input style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" style={{ padding: '10px 32px', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', border: 'none' }}>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;