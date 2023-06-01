import React, { useState } from "react";
import "./Expenses.css";

import ExpensItem from "./ExpenseItem";
import CardExpense from "../UI/Card";
import ExpensesFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
    const [filterOption, setFilterOption] = useState("2022");

    const filterExpensHandler = option => {
        setFilterOption(option);
    }

    return (
        <div>
            <CardExpense className="expenses">
                <ExpensesFilter selected={filterOption} onChangeFilterExpens={filterExpensHandler}/>
                {props.expenses.map((expense) => 
                    <ExpensItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                )}
            </CardExpense>
        </div>
    );
}

export default Expenses;