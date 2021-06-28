import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  // default year => 2021
  const [filteredYear, selectFilteredYear] = useState("2021");

  // getting year from ExpensesFilter.js through state lifting.
  const selectFilterHandler = (year) => {
    selectFilteredYear(year);
  };

  // making an year specific array, by filtering acc. to year
  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onSelectFilter={selectFilterHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
