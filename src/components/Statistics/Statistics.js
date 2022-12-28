import './Statistics.modyle.css';
import PropTypes from 'prop-types';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default function Statistics({ title, stats }) {

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => <li
          className="item-statistics"
          style={{ backgroundColor: getRandomHexColor() }}
          key={stat.id}
        >
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>)}

      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired, label: PropTypes.string.isRequired })).isRequired,
};
