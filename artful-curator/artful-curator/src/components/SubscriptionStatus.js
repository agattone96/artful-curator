// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/components/SubscriptionStatus.js
import React from 'react';

const SubscriptionStatus = ({ isActive }) => (
  <div>
    Status: {isActive ? "Active" : "Inactive"}
  </div>
);

export default SubscriptionStatus;