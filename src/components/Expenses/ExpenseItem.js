import React, { useState } from "react";

import "./ExpensItem.css";
import ExpenseItemDate from "./ExpensItemDate";
import CardExpense from "../UI/Card";

const ExpensItem = (props) => {
  const [ title, setTitle ] = useState(props.title);

  const clickHandler = (event) => {
    setTitle("Updated");
  }

  return (
    <CardExpense className="expense-item">
      <ExpenseItemDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </CardExpense>
  );
}

export default ExpensItem;