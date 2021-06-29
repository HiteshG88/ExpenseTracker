import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseDataHandler = (expenseData) => {
    // copy the expenseData from ExpenseForm to newExpenseData and set an id
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };

    // pass the newExpenseData to parent -> App
    props.onSaveExpenseData(newExpenseData);

    // after Add-expense submit close the form.
    setIsEditing(false);
  };

  const setIsEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // if (isEditing === true) {
  //   return <button onClick={setIsEditingHandler}>Add Expense</button>;
  // }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={setIsEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
