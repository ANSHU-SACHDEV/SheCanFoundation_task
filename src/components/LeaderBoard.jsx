import React, { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/leaderboard");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Intern Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {data.map((intern) => (
            <tr key={intern.rank}>
              <td>{intern.rank}</td>
              <td>{intern.name}</td>
              <td>{intern.code}</td>
              <td>{intern.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
