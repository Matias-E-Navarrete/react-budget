import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from '../error/Error';
const { v4: uuidv4 } = require('uuid');

export const AddExpense = ({ setExpense, setCreateExpense }) => {
  const [expensesname, setExpensesName] = useState('');
  const [expensesprice, setExpensesPrice] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    if (
      expensesname.length < 3 ||
      expensesname.trim() === '' ||
      expensesprice < 1 ||
      isNaN(expensesprice)
    ) {
      setError(true);
      return;
    }

    const expense = {
      uuid: uuidv4(),
      name: expensesname,
      price: expensesprice,
    };

    setExpense(expense);
    setCreateExpense(true);

    setExpensesName('');
    setExpensesPrice(0);
  };

  return (
    <>
      <form onSubmit={addExpense}>
        {error ? (
          <Error message="Corrija los datos para poder cargar el gasto" />
        ) : null}
        <h3>Ingresar gasto</h3>
        <div className="campo">
          <label>Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ingresá el gasto"
            value={expensesname}
            onChange={(e) => setExpensesName(e.target.value)}
          />
          <label>Precio</label>
          <input
            type="number"
            min="0"
            className="u-full-width"
            placeholder="Ingresá el precio"
            value={expensesprice}
            onChange={(e) => setExpensesPrice(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="button-primary u-full-width">
          + Agregar
        </button>
      </form>
    </>
  );
};

AddExpense.proptype = {
  setExpenses: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired
};
