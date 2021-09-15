import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <li className="expenses-list">
      {props.items.map((exp, i) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        );
      })}
    </li>
  );
};

export default ExpensesList;
