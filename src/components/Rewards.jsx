import React from 'react';

const Rewards = () => {
  const rewards = [
    ' Sticker Pack - ₹500',
    ' T-shirt - ₹2000',
    ' Medal of Recognition - ₹5000',
    ' Certificate + Shoutout - ₹10000'
  ];

  return (
    <ul>
      {rewards.map((reward, index) => (
        <li key={index}>{reward}</li>
      ))}
    </ul>
  );
};

export default Rewards;
