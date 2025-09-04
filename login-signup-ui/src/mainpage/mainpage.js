import React, { useState } from 'react';

const tabContents = [
  {
    label: 'Home',
    content: <div>Welcome to the Home tab!<br/>This is demo content for Home.</div>
  },
  {
    label: 'Dashboard',
    content: <div>This is the Dashboard tab.<br/>Demo dashboard content goes here.</div>
  },
  {
    label: 'Settings',
    content: <div>Settings tab content.<br/>Demo settings and options here.</div>
  }
];

function MainPage({ onLogout }) {
  const [activeTab, setActiveTab] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 32px',
        background: '#222',
        color: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {tabContents.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === idx ? '#8BF3F3' : 'white',
                fontWeight: activeTab === idx ? 'bold' : 'normal',
                fontSize: '1.1rem',
                borderBottom: activeTab === idx ? '3px solid #8BF3F3' : '3px solid transparent',
                padding: '8px 0',
                cursor: 'pointer',
                outline: 'none',
                transition: 'color 0.2s, border-bottom 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Right Side: Profile & Logout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* Profile Icon */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setProfileOpen((open) => !open)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                color: '#8BF3F3',
                backgroundColor: '#333',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }}
              aria-label="Profile"
            >
              <span role="img" aria-label="profile">👤</span>
            </button>
            {profileOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: 48,
                background: 'white',
                color: '#222',
                borderRadius: 8,
                boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
                minWidth: 140,
                zIndex: 10,
                padding: '8px 0'
              }}>
                <div style={{ padding: '10px 18px', cursor: 'pointer', fontWeight: 500 }} onClick={() => alert('Profile clicked!')}>Profile</div>
                <div style={{ padding: '10px 18px', cursor: 'pointer', fontWeight: 500 }} onClick={() => alert('Settings clicked!')}>Settings</div>
              </div>
            )}
          </div>
          {/* Logout Button */}
          <button
            onClick={onLogout}
            style={{
              background: '#d32f2f',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 22px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {/* Tab Content */}
      <div style={{ maxWidth: 900, margin: '40px auto', background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32, minHeight: 300 }}>
        {tabContents[activeTab].content}
      </div>
    </div>
  );
}

export default MainPage;
