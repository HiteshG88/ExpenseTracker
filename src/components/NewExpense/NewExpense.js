import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseDataHandler = (expenseData) => {
    // copy the expenseData from ExpenseForm to newExpenseData
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };

    // pass the newExpenseData to parent -> App
    props.onSaveExpenseData(newExpenseData);
  };

  const setIsEditingHandler = () => {
    setIsEditing(true);
  };

  // if (isEditing === true) {
  //   return <button onClick={setIsEditingHandler}>Add Expense</button>;
  // }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={setIsEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
