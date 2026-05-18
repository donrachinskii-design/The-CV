import React from 'react';
import './Stats.css';

function Stats({ items }) {
  return (
    <div className="stats">
      {items.map((item, index) => (
        <div key={index} className="stat-item">
          <div className="stat-number">{item.number}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
