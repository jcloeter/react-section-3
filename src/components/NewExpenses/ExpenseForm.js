import React, { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

// import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //showForm(true)=we see form
  // const [showForm, setShowForm] = useState(true);

  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = function (e) {
    console.log(e.target.value);
    setEnteredDate(e.target.value);
  };

  const cancelButtonHandler = function () {
    console.log("canceled :/");
    // changeFormVisibility(false);
  };

  // const addNewHandler = function () {
  //   changeFormVisibility(true);
  // };

  // const changeFormVisibility = function (bool) {
  //   setShowForm(bool);
  // };

  const submitHandler = function (e) {
    e.preventDefault();
    console.log("");
    console.log(`in expenseForm the date is being entered as ${enteredDate}`);
    console.log(
      `in expenseForm the date is being entered as ${new Date(enteredDate)}`
    );
    const expenseData = {
      date: new Date(enteredDate),
      title: enteredTitle,
      amount: enteredAmount,
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    // changeFormVisibility(false);
    // ExpenseItem(expenseData);
  };

  // if (!showForm) {
  //   return (
  //     <button onClick={addNewHandler} type="button">
  //       Add New Expense
  //     </button>
  //   );
  // }

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
        <button type="button" onClick={cancelButtonHandler}>
          Cancel
        </button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//Start here in the morning: fix some things from the last lecture first
