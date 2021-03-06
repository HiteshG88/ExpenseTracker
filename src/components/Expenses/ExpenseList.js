import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  // default case: if there are no expenses in given year return no expenses.
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Expenses!!</h2>;
  }

  return (
    <ul className='expenses-list'>
      {/* if there are expenses then: */}
      {/* map the filtered year expenses array */}
      {props.items.map((expense) => (
        <ExpenseItem
          // it is important to add a key->with unique {id} to help react understand the uniqueness of an item.
          // else react will add the item in expense array and will revaluate all the items in expense array. this will be a performance hit.
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
