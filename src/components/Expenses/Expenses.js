import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const yearChangedHandler = (newYear) => {
    setEnteredYear(newYear);
    console.log("From expenses", newYear);
  };
  return (
    <div>
      <ExpenseFilter
        selected={enteredYear}
        onSelectYear={yearChangedHandler}
      ></ExpenseFilter>
      <div className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default Expenses;
