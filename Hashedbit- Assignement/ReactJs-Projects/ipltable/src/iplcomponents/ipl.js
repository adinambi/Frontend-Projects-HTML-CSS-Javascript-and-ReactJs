import React, { useState, useEffect } from 'react';
import './ipl.css';  

const IplPointsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        // Sort by NRR in ascending order
        const sortedData = result.sort((a, b) => (a.NRR || 0) - (b.NRR || 0));
        setData(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="table-container loading">Loading...</div>;
  }

  if (error) {
    return <div className="table-container error">Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <h1 className="table-title">IPL 2022 Points Table</h1>
      <div className="table-wrapper">
        <table className="points-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
              <th>Last 5</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={index}>
                <td className="team-name">{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{typeof team.Tied === 'number' ? team.Tied : 0}</td>
                <td>{typeof team.NRR === 'number' ? team.NRR.toFixed(3) : '0.000'}</td>
                <td className="points">{team.Points}</td>
                <td>{team.Last5?.join(' ') || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IplPointsTable;