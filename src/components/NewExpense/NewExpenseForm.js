import React, { useState } from "react";
import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {
    const [ userInput, setUserInput ] = useState(
        {
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        }
    );

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: Number(event.target.value)
            }
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let expensData = {
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
            title: userInput.enteredTitle,
        };
    
        props.onSaveExpenseData(expensData);

        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
    };
    

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={2023 - 12 - 31} value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;