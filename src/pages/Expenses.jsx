import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const userEmail = localStorage.getItem("email");

  const databaseUrl = `https://expense-tracker-98be4-default-rtdb.firebaseio.com/${userEmail}/ExpenseData.json`;

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const res = await fetch(databaseUrl);
        const data = await res.json();

        if (res.ok) {
          const expenseArr = [];

          for (const key in data) {
            const expenseObj = data[key];
            expenseArr.push(expenseObj);
          }

          setExpenses(expenseArr);
        } else {
          const e = data.error.message;
          throw new Error(e);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchExpenseData();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      const res = await fetch(databaseUrl, {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setExpenses((prev) => [...prev, expense]);
      } else {
        let errorMsg = data.error.message;
        throw new Error(errorMsg);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
