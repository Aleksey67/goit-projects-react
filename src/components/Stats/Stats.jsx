import React from 'react';
import './Stats.css';
import PropTypes from 'prop-types';

const Stats = ({title, stats}) => {
  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      background: color,
    };
  };

  return (
    <section className="stats-section">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id} style={getRandomColor()}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{`${stat.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};


export default Stats;
