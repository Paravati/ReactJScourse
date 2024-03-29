import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const { onSaveExpenseData } = props;
  const [addExpenseAccordionOpened, setAddExpenseAccordionOpened] =
    useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const addData = () => {
    console.log(enteredTitle);
    setAddExpenseAccordionOpened(true);
  };

  const closeAddExpenseAccordion = () => {
    setAddExpenseAccordionOpened(false);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // page is not reloading after submit

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    if (
      expenseData.title !== "" &&
      expenseData.amount !== undefined &&
      expenseData.date != "Invalid Date"
    ) {
      console.log(expenseData.date);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      onSaveExpenseData(expenseData);
      setAddExpenseAccordionOpened(false);
    }
  };

  if (addExpenseAccordionOpened) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={addData}>
            Add expense
          </button>
          <button type="button" onClick={closeAddExpenseAccordion}>
            Close
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__actions">
        <button type="submit" onClick={addData}>
          Add new expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
