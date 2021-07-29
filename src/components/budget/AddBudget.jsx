import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from '../error/Error';

export const AddBudget = ({ setBudget, setLeftOver, setShowBudget }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addBudget = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const createBudget = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(amount);
    setLeftOver(amount);
    setShowBudget(false);
  };

  return (
    <>
      <h2>Ingresá tu presupuesto</h2>

      {error ? <Error message="El valor ingresado no es correcto" /> : null}
      <form onSubmit={createBudget}>
        <input
          type="number"
          className="u-full-width"
          min="0"
          placeholder="Ingresá tu presupuesto"
          onChange={addBudget}
        />
        <button type="submit" className="button-primary u-full-width">
          Ingresar
        </button>
      </form>
    </>
  );
};

AddBudget.proptype = {
  setBudget: PropTypes.func.isRequired,
  setLeftOver: PropTypes.func.isRequired,
  setShowBudget: PropTypes.func.isRequired,
};
