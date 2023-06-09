import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let initial_Expenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 300,
    date: new Date(2023, 5, 31)
  },
  {
    id: 2,
    title: "Food",
    amount: 500,
    date: new Date(2023, 4, 28)
  },
  {
    id: 3,
    title: "Household",
    amount: 700,
    date: new Date(2023, 3, 27)
  },
  {
    id: 4,
    title: "Dogs",
    amount: 230,
    date: new Date(2023, 2, 11)
  }
];

const App = () => {

  const [expenses, setExpenses ] = useState(initial_Expenses);

  const addExpensHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={ addExpensHandler } />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
