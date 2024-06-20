import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Book Rental",
    amount: 25.6,
    date: new Date(2021, 6, 21),
  },
  {
    id: "e2",
    title: "Car rental",
    amount: 250.6,
    date: new Date(2021, 6, 21),
  },
  {
    id: "e3",
    title: "Accessory Rental",
    amount: 482.6,
    date: new Date(2021, 6, 21),
  },
  {
    id: "e4",
    title: "Room Rental",
    amount: 1200.6,
    date: new Date(2021, 6, 21),
  },
  {
    id: "e5",
    title: "Accessory Rental",
    amount: 150.6,
    date: new Date(2019, 4, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
