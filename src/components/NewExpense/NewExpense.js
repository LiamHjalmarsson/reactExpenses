import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

    const [ addExpenseForm, setAddExpenseForm ] = useState(false);

    const saveExpenseDataHandler = (enterData) => {
        const expensData = {
            ...enterData,
            id: Math.random().toString()
        }

        props.onAddExpense(expensData);
    }

    const showAddFormExpense = () => {
        setAddExpenseForm(true);
    }

    const cancelHandler = () => {
        setAddExpenseForm(false);
    }

    return (
        <div className="new-expense">
            { !addExpenseForm && <button onClick={showAddFormExpense}> Add new Expense </button>}
            { addExpenseForm && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler}/>}
        </div>
    )
}

export default NewExpense;