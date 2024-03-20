import { useRef, useState } from "react";

const ExpenseForm = (props) => {
  const expenseRef = useRef();
  const descriptionRef = useRef();
  const [selectValue, setSelectValue] = useState("Food");

  const hanldeSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    const expense = {
      amount: expenseRef.current.value,
      description: descriptionRef.current.value,
      category: selectValue,
    };
    descriptionRef.current.value = "";
    expenseRef.current.value = "";
    setSelectValue("");

    props.onAddExpense(expense);
  };

  return (
    <form
      onSubmit={handleExpenseSubmit}
      className="m-5 p-5 bg-slate-500 rounded flex flex-row justify-evenly align-middle "
    >
      <label className=" text-3xl" htmlFor="expense">
        Expense:
      </label>
      <input
        className="mx-3 px-2 rounded "
        type="number"
        name="expense"
        id="expense"
        ref={expenseRef}
      />
      <label className=" text-3xl" htmlFor="description">
        Description:
      </label>
      <input
        className="mx-3 px-2 rounded "
        type="text"
        name="description"
        id="description"
        ref={descriptionRef}
      />
      <label className=" text-3xl" htmlFor="category">
        Category:
      </label>
      <select
        className="mx-3 px-2 rounded text-xl"
        name="category"
        id="category"
        onChange={hanldeSelectChange}
      >
        <option value="Food">Food</option>
        <option value="Fuel">Fuel</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button className="p-3 bg-slate-100 rounded text-stone-800 font-semibold ">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
