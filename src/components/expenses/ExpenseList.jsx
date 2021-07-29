import React from 'react';
import PropTypes from 'prop-types';
import { ExpenseItem } from './ExpenseItem';

export const ExpenseList = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      <h2> Listado de gastos </h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.uuid} expense={expense} />
      ))}
    </div>
  );
};

ExpenseList.proptype = {
  expenses: PropTypes.array.isRequired
}
