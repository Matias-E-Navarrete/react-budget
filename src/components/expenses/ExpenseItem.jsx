import React from 'react';
import PropTypes from 'prop-types';

export const ExpenseItem = ({ expense }) => {
  return (
    <li className="gastos">
      <p>
        {expense.name}
        <span className="gasto">$ {expense.price}</span>
      </p>
    </li>
  );
};

ExpenseItem.proptype = {
  expense: PropTypes.object,
};
