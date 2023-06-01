import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterData) => {
        const expensData = {
            ...enterData,
            id: Math.random().toString()
        }

        props.onAddExpense(expensData);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;