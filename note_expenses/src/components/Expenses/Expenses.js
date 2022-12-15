import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

export default function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  const selectedItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={yearSelected}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={selectedItems}/>
        <ExpensesList items={selectedItems}/>
      </Card>
    </div>
  );
}
