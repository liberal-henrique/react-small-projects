import React, { useState } from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1e",
      title: "Car Insurance",
      date: new Date(2021, 2, 28),
      amount: 294.67,
    },
    {
      id: "2e",
      title: "Laundry Clothes",
      date: new Date(2021, 4, 16),
      amount: 50,
    },
    {
      id: "3e",
      title: "Laundry Clothes",
      date: new Date(2021, 4, 16),
      amount: 50,
    },
    {
      id: "4e",
      title: "Laundry Clothes",
      date: new Date(2021, 4, 16),
      amount: 50,
    },
    {
      id: "5e",
      title: "Laundry Clothes",
      date: new Date(2019, 4, 16),
      amount: 50,
    },
    {
      id: "6e",
      title: "Laundry Clothes",
      date: new Date(2022, 4, 16),
      amount: 50,
    },
    {
      id: "7e",
      title: "Laundry Clothes",
      date: new Date(2022, 4, 16),
      amount: 50,
    }
  ];

  const [list, setList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={list}/>
    </div>
  );
}

export default App;
