import React from 'react';
import './RankTable.css'
const RankTable = () => {
  const data = [
    { name: 'John Doe', activities: 10, mail: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', activities: 15, mail: 'jane@example.com', phone: '987-654-3210' },
    { name: 'Rahul Gupta', activities: 20, mail: 'rahul@example.com', phone: '234-567-8901' },
    { name: 'Priya Patel', activities: 12, mail: 'priya@example.com', phone: '345-678-9012' },
    { name: 'Amit Singh', activities: 18, mail: 'amit@example.com', phone: '456-789-0123' },
    { name: 'Anjali Kumar', activities: 25, mail: 'anjali@example.com', phone: '567-890-1234' },
    { name: 'Suresh Sharma', activities: 22, mail: 'suresh@example.com', phone: '678-901-2345' },
    { name: 'Deepika Reddy', activities: 17, mail: 'deepika@example.com', phone: '789-012-3456' },
    { name: 'Vikram Verma', activities: 14, mail: 'vikram@example.com', phone: '890-123-4567' },
    { name: 'Neha Joshi', activities: 19, mail: 'neha@example.com', phone: '901-234-5678' },
    // Add 10 random Indian individuals here
  ];

  // Sort the data by activities participated
  const sortedData = data.sort((a, b) => b.activities - a.activities);

  const tableStyle = {
    width: '70%',
    margin: 'auto',
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'center',
    padding: '8px',
  };

  return (
    <section id="ranksec">
        <h1>Rank Table</h1>
        <br/>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Ranks</th>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Activities Participated</th>
          <th style={cellStyle}>Mail</th>
          <th style={cellStyle}>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((person, index) => (
          <tr key={index}>
            <td style={cellStyle}>{getSerialNumber(index)}</td>
            <td style={cellStyle}>{person.name}</td>
            <td style={cellStyle}>{person.activities}</td>
            <td style={cellStyle}>{person.mail}</td>
            <td style={cellStyle}>{person.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};

const getSerialNumber = (index) => {
  switch (index) {
    case 0:
      return '🥇 ';
    case 1:
      return '🥈 ';
    case 2:
      return '🥉 ';
    default:
      return index + 1;
  }
};

export default RankTable;
