// import React from 'react';
// import Rewards from './Rewards';

// const Dashboard = ({ name }) => {
//   const referralCode = `${name.toLowerCase()}2025`;
//   const totalDonations = 12500; 

//   return (
//     <div className="dashboard">
//       <h2>Welcome, {name}!</h2>
//       <p><strong>Referral Code:</strong> {referralCode}</p>
//       <p><strong>Total Donations Raised:</strong> ₹{totalDonations}</p>

//       <h3>Rewards & Unlockables</h3>
//       <Rewards />
//     </div>
//   );
// };

// export default Dashboard;
// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rewards from './Rewards';

const Dashboard = ({ name }) => {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    const fetchInternData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/interns/${name}`);
        setInternData(res.data);
      } catch (error) {
        console.error('Error fetching intern data:', error);
      }
    };

    fetchInternData();
  }, [name]);

  if (!internData) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Welcome, {internData.name}!</h2>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{internData.totalDonations}</p>

      <h3>Rewards & Unlockables</h3>
      <Rewards />
    </div>
  );
};

export default Dashboard;
