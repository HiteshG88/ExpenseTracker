import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseDataHandler = (saveExpenseData) => {
    const expenseData = {
      ...saveExpenseData,
      id: Math.random().toString(),
    };
    props.onSubmitNewData(expenseData);
    // console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
