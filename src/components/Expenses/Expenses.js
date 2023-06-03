import React, { useState } from "react";
import "./Expenses.css";

import ExpensItem from "./ExpenseItem";
import CardExpense from "../UI/Card";
import ExpensesFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
    const [ filterOption, setFilterOption ] = useState("2022");

    const filterExpensHandler = option => {
        setFilterOption(option);
    }

    const filterExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterOption;
    });

    let contentExpenses = <p> No expenses found. </p>;

    if (filterExpenses.length > 0) {
        contentExpenses = filterExpenses.map((expense) => 
            <ExpensItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ); 
    }

    return (
        <div>
            <CardExpense className="expenses">
                <ExpensesFilter selected={filterOption} onChangeFilterExpens={filterExpensHandler}/>
                {contentExpenses}
            </CardExpense>
        </div>
    );
}

export default Expenses;