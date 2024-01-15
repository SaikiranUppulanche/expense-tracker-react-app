import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">No Expenses Found.</h2>;
  }
  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {expenseContent}
        <h3 className="expenses-list__fallback ">
          Only single Expense here. Please add more...
        </h3>
      </ul>
    );
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
