import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");
  const yearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = props.item.filter(item => item.date.getFullYear().toString() === yearFilter);
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onChangeFilter={yearFilterChangeHandler}
        ></ExpensesFilter> 
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
