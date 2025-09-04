import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/api/accounts/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message || 'Registration failed');
  };

  return (
    <form onSubmit={handleSubmit}
    style={{
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
      <h2 style={{ margin: 0, fontSize: '3rem' }}>Register</h2>
      <input style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} name="username" placeholder="Username" onChange={handleChange} required />
      <input style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit" style={{ padding: '10px 32px', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', border: 'none' }}>Sign Up</button>
      <div>{message}</div>
    </form>
  );
}

export default Register;