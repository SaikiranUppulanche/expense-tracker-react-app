import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }
  function handleAmountChange(event) {
    setEnteredAmount(event.target.value);
  }
  function handleDateChange(event) {
    setEnteredDate(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveNewExpense(obj);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expenseTitle">Expense Title</label>
          <input
            type="text"
            value={enteredTitle || ""}
            name="expenseTitle"
            id="expenseTitle"
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expenseAmount">Expense Amount</label>
          <input
            type="number"
            value={enteredAmount || ""}
            min="0.01"
            step="0.01"
            name="expenseAmount"
            id="expenseAmount"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={enteredDate || ""}
            min="2019-01-01"
            max="2024-12-31"
            name="date"
            id="date"
            onChange={handleDateChange}
          />
        </div>
        <div className="new_expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
