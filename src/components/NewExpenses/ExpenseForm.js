import React, { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

// import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     setEnteredTitle: "d",
  //     setEnteredDate: "",
  //     setEnteredAmount: "",
  //   });

  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, setEnteredTitle: "Fuck" };
    // });

    // setUserInput({
    //   setEnteredTitle: e.target.value,
    //   ...userInput,
    // });
    // console.log(userInput);
    // console.log(setUserInput);
  };

  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   setEnteredAmount: e.target.value,
    //   ...userInput,
    // });
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   setEnteredDate: e.target.value,
    //   ...userInput,
    // });
  };

  const submitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      date: Date(enteredDate),
      title: enteredTitle,
      amount: enteredAmount,
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    // ExpenseItem(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      <div>Stuff to add: {enteredTitle + enteredAmount + enteredDate}</div>
    </form>
  );
};

export default ExpenseForm;

//Start here in the morning: fix some things from the last lecture first
