import React from 'react';
import PropTypes from 'prop-types';

import { budgetObserver } from '../../helpers/helpers';

export const BudgetControl = ({ budget, leftOver }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {budget}</div>
      <div className={budgetObserver(budget, leftOver)}>Restante: $ {leftOver}</div>
    </>
  );
};

BudgetControl.proptype = {
  budget: PropTypes.number.isRequired,
  leftOver: PropTypes.number.isRequired,
};
