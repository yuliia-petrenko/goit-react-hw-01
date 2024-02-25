// import React from 'react';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={css.row} key={item.id}>
              <td className={css.textType}>{item.type}</td>
              <td className={css.textRow}>{item.amount}</td>
              <td className={css.textRow}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;