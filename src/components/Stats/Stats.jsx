import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const getRandomColor = () => {
  const colors = ['red', 'green', 'blue'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return {
    background: color,
  };
};

const Stats = ({ title, stats }) => {
  return (
    <section className={styles['stats-section']}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles['stat-list']}>
        {stats.map(stat => {
          return (
            <li className={styles.item} key={stat.id} style={getRandomColor()}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{`${stat.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Stats;
