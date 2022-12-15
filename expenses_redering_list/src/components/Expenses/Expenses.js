import React, { useState } from "react";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const selectedYearExpensesHandler = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={selectedYearExpensesHandler}/>
        <ExpensesList items={selectedYearExpensesHandler} />
      </Card>
    </div>
  );
};

export default Expenses;
