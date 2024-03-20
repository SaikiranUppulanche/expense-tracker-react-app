const ExpenseList = (props) => {
  return (
    <ul className="m-5 flex flex-col">
      {props.expenses.length > 0 && (
        <li className="mx-5 px-5 py-3 bg-slate-200 text-center rounded-xl grid grid-cols-3 gap-10 ">
          <span className="text-2xl mx-5 px-5">Expense Amount</span>
          <span className="text-2xl mx-5 px-5">Description</span>
          <span className="text-2xl mx-5 px-5">Category</span>
        </li>
      )}
      {props.expenses.map((expense) => (
        <li
          key={expense.description}
          className="mx-5 mt-5 px-5 py-3 text-center bg-slate-200 rounded-xl grid grid-cols-3 gap-4 "
        >
          <span className="text-2xl mx-5 px-5">{expense.amount}</span>
          <span className="text-2xl mx-5 px-5">{expense.description}</span>
          <span className="text-2xl mx-5 px-5">{expense.category}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
