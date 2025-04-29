import React, { useEffect, useState } from 'react';

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPricingPlans = async () => {
    try {
      setLoading(true);
      setError('');
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Simulated pricing plans data
      const fetchedPlans = [
        { id: 1, name: 'Basic', price: '$9.99/mo', features: ['Feature A', 'Feature B'] },
        { id: 2, name: 'Pro', price: '$19.99/mo', features: ['Feature A', 'Feature B', 'Feature C'] },
        { id: 3, name: 'Enterprise', price: 'Contact Us', features: ['All Features', 'Dedicated Support'] },
      ];
      setPlans(fetchedPlans);
    } catch (err) {
      console.error('Failed to fetch pricing plans:', err);
      setError('Failed to load pricing plans. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  if (loading) {
    return <div>Loading pricing plans...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <h1>Pricing</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {plans.map((plan) => (
          <div key={plan.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button style={{ marginTop: '1rem' }}>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}