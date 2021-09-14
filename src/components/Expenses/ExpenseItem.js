import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props);
  const [title, setTitle] = useState(props.title);

  const buttonHandler = () => {
    // props.title = title;
    setTitle("youre retarded");
  };
  return (
    //Normally the expense-item class would not have been applied, but we fixed it in Card
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={buttonHandler}>Click ; )</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
