import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");
  const yearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = props.item.filter(item => item.date.getFullYear().toString === yearFilter);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onChangeFilter={yearFilterChangeHandler}
        ></ExpensesFilter>
        {filteredExpenses.map((item) => 
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        )}
      </Card>
    </div>
  );
}
export default Expenses;
