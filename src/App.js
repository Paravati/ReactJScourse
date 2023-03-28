import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id: "id1",
      title: "Oven",
      amount: 345.66,
      date: new Date(2022, 1, 1),
    },
    {
      id: "id2",
      title: "Car insurance",
      amount: 234.44,
      date: new Date(2023, 5, 12),
    },
    {
      id: "id3",
      title: "Cosmetics",
      amount: 77.5,
      date: new Date(2021, 6, 12),
    },
    {
      id: "id4",
      title: "gift for sb",
      amount: 100,
      date: new Date(2020, 7, 28),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseItemHandler = (expense) => {
    if (expense.title !== "") {
      setExpenses((prevExpenses) => {
        //in this way we will be able to get newest version of expenses
        return [expense, ...prevExpenses];
      });
    }
    console.log("in app js");
    console.log(expenses);
    console.log(expense);
    // newExpenseArray = { ...expenses, expense };
  };

  return (
    <div className="App">
      <NewExpense onAddingNewExpenseItem={addExpenseItemHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
