import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const handleClick = () => {
    setTitle("Updated!");
  };

  const handleAmount = () => {
    setAmount(100);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleAmount}>Update Amount</button>
      </div>
      <button onClick={handleClick}>UpdateTitle</button>
    </Card>
  );
};

export default ExpenseItem;
