import "./ExpenseDate.css";

const ExpenseDate = function (props) {
  // console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // console.log("m: " + month, " d: " + day);
  const year = props.date.getFullYear();
  // const year = 2020;
  // console.log("m: " + month, " d: " + day, " y " + year);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
