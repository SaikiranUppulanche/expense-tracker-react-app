import React from "react";
const ExpenseForm = () => {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <form onChange={handleChange}>
        <label htmlFor="expenseTitle">Expense Title</label>
        <input type="text" name="expenseTitle" id="expenseTitle" />
        <label htmlFor="expenseAmount">Expense Amount</label>
        <input type="number" min="0" name="expenseAmount" id="expenseAmount" />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />
        <input type="button" value="Button" />
      </form>
    </div>
  );
};

export default ExpenseForm;
