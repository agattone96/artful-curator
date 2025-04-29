import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [upgrading, setUpgrading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError('');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = {
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        plan: 'Pro',
        lastLogin: '2025-04-27T14:32:00Z',
        avatar: 'https://via.placeholder.com/100',
        activities: [
          { id: 1, action: 'Uploaded new images', timestamp: '2025-04-27T15:00:00Z' },
          { id: 2, action: 'Updated account settings', timestamp: '2025-04-26T18:30:00Z' },
        ],
      };
      setUserData(data);
    } catch (err) {
      console.error('Failed to fetch user data:', err);
      setError('Failed to load dashboard. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = () => {
    setUpgrading(true);
    setTimeout(() => {
      setUserData((prev) => ({
        ...prev,
        plan: prev.plan === 'Pro' ? 'Enterprise' : 'Pro',
      }));
      setUpgrading(false);
    }, 1500);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Insert real logout logic here later
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div className="spinner" style={{ fontSize: '2rem' }}>🔄 Loading Dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>
        <p>{error}</p>
      </div>
    );
  }

  const getPlanBadge = (plan) => {
    const colors = {
      Basic: '#ccc',
      Pro: '#4CAF50',
      Enterprise: '#2196F3',
    };
    const bgColor = colors[plan] || '#777';
    return (
      <span style={{ backgroundColor: bgColor, color: 'white', padding: '0.25rem 0.5rem', borderRadius: '5px' }}>
        {plan}
      </span>
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {/* Profile Section */}
        <div style={{ flex: '1', minWidth: '250px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <img src={userData.avatar} alt="User Avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          <h2>{userData.username}</h2>
          <p>{userData.email}</p>
          <p><strong>Last Login:</strong><br />{new Date(userData.lastLogin).toLocaleString()}</p>
        </div>

        {/* Subscription Info */}
        <div style={{ flex: '1', minWidth: '250px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h2>Subscription</h2>
          <p><strong>Current Plan:</strong> {getPlanBadge(userData.plan)}</p>
          <button
            style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            onClick={handleUpgrade}
            disabled={upgrading}
          >
            {upgrading ? 'Updating...' : (userData.plan === 'Pro' ? 'Upgrade to Enterprise' : 'Downgrade to Pro')}
          </button>
        </div>

        {/* Activity Feed */}
        <div style={{ flex: '2', minWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
          <h2>Recent Activity</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {userData.activities.map((activity) => (
              <li key={activity.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                <strong>{activity.action}</strong>
                <div style={{ fontSize: '0.85rem', color: '#555' }}>{new Date(activity.timestamp).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          onClick={handleLogout}
          style={{ padding: '0.75rem 2rem', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}