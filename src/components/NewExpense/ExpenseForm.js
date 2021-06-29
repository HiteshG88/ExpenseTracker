import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  // capture the new title, amount and date, in newTitle, newAmount and newDate using useState.
  const titleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent from whole page from reloading on form-submit.
    event.preventDefault();

    // store the newTitle, newAmount and newDate into expenseData to pass
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    // pass the newExpenseData to parent -> NewExpenseData
    props.onSubmitExpenseData(expenseData);

    // set the title, amount and data to empty string again
    setNewTitle("");
    setNewDate("");
    setNewAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newTitle} onChange={titleHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newAmount}
            onChange={amountHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
