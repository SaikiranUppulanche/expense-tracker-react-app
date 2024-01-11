import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date().toLocaleString();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 8000;
  const locationOfExpenditure = "Mumbai";

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>
          {expenseTitle} in {locationOfExpenditure}
        </h2>
        <div className="expense-item__price">₹ {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
