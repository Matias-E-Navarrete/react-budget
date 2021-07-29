import React, { useState, useEffect } from 'react'
import { AddBudget } from "./components/budget/AddBudget";
import { AddExpense } from './components/expenses/AddExpense';
import { ExpenseList } from "./components/expenses/ExpenseList";
import { BudgetControl } from "./components/budget/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0);
  const [leftOver, setLeftOver] = useState(0)
  const [showbudget, setShowBudget] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createexpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createexpense) {
      setExpenses([
        ...expenses,
        expense
      ])

      const budgetLeftOver = leftOver - expense.price;
      setLeftOver(budgetLeftOver);

      setCreateExpense(false);
    }

  }, [expense, setExpense, leftOver, setLeftOver, setCreateExpense, createexpense, expenses])

  return (
    <>
      <div className="container">
        <header>
          <h1>Budget</h1>
        </header>
        <div className="contenido-principal contenido">
          {
            showbudget ?
              (<AddBudget setBudget={setBudget} setLeftOver={setLeftOver} setShowBudget={setShowBudget} />)
              :
              (
                <div className="row">
                  <div className="one-half column">
                    <AddExpense setExpense={setExpense} setCreateExpense={setCreateExpense} />
                  </div>
                  <div className="one-half column">
                    <ExpenseList
                      expenses={expenses}
                    />
                    <BudgetControl budget={budget} leftOver={leftOver} />
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </>
  );
}

export default App;
