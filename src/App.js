import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";

function App() {
  const expenses = [
    {
      title: "Oven",
      amount: 345.66,
      date: new Date(2022, 1, 1),
    },
    {
      title: "Car insurance",
      amount: 234.44,
      date: new Date(2022, 5, 12),
    },
    {
      title: "Cosmetics",
      amount: 77.5,
      date: new Date(2022, 6, 12),
    },
    {
      title: "gift for sb",
      amount: 100,
      date: new Date(2022, 7, 28),
    },
  ];

  var newExpenseArray;

  const addExpenseItemHandler = (expense) => {
    console.log("in app js");
    console.log(expenses);
    console.log(expense);
    // newExpenseArray = { ...expenses, expense };
  };

  return (
    <div className="App">
      <NewExpense onAddingNewExpenseItem={addExpenseItemHandler} />
      <ExpensesFilter />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
