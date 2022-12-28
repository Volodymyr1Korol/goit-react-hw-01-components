import '../TransactionHistory/TransactionHistory.modyle.css';
import PropTypes from 'prop-types';
export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="table">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, type: PropTypes.string.isRequired, amount: PropTypes.string.isRequired, currency: PropTypes.string.isRequired })).isRequired,
};
