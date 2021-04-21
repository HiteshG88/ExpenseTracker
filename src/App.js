import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const submitNewDataHandler = (newExpenseData) => {
    console.log("in App.js");
    console.log(newExpenseData);
  };

  return (
    <div className='App'>
      {/* <h1>Hello world!</h1> */}
      <NewExpense onSubmitNewData={submitNewDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
