import React, { useState } from "react";
import "./Expenses.css";

import CardExpense from "../UI/Card";
import ExpensesFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [ filterOption, setFilterOption ] = useState("2022");

    const filterExpensHandler = option => {
        setFilterOption(option);
    }

    const filterExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterOption;
    });

    return (
        <div>
            <CardExpense className="expenses">
                <ExpensesFilter selected={filterOption} onChangeFilterExpens={filterExpensHandler}/>
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList expenses={filterExpenses} />
            </CardExpense>
        </div>
    );
}

export default Expenses;