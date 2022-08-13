import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

// Goal:
// Make a table of expenses
// Add and remove from the list
// Keep a running tally of the total expenses

function App() {

  interface TrackedExpense {
    expense: string;
    cost: number;
    category: string;
    date: string; // TODO: Convert to date string
  }

  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [trackedExpenses, setTrackedExpenses] = useState([] as TrackedExpense[]);

  /**
   * Clears the form field state properties. This is typically called on form submit
   */
  const clearFormFields = () => {
    setExpense('');
    setCost('');
    setCategory('');
    setDate('');
  }

  /**
   * Formats date input before it gets added to the table
   * 
   * 8/13/2022 - TODO: Write unit test for this after integrating JEST
   * @param dateInput 
   * @returns 
   */
  const formatDateForTable = (date: Date): string => {
    
    const month = date.toLocaleString('default', {month: 'long'});
    const day = date.getDate();
    const year = date.getFullYear();
    const formatted = `${month} ${day}, ${year}`;

    return formatted;
  }

  const handleDateChange = (e: ChangeEvent): void => {
    const dateInput = (e.target as HTMLInputElement).value;

    setDate(dateInput);
  }

  const handleSubmit = (e: React.FormEvent): void => {    
    e.preventDefault();

    const dateOb = new Date(date);
    const formattedDate = formatDateForTable(dateOb);

    const newTrackedExpense = {
      expense,
      cost: parseFloat(cost),
      category,
      date: formattedDate,
    }

    setTrackedExpenses(oldTrackExpenses => [...oldTrackExpenses, newTrackedExpense]);
    clearFormFields();
  }

  return (
    <div className="App">
      <table className='TableContainer'>
        <tr className = "TableHeader">
          <th>Expense</th>
          <th>Cost</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
        {
          trackedExpenses.map((trackedExpense, i) => (
            <tr key={i}>
              <td>{trackedExpense.expense}</td>
              <td>{trackedExpense.cost}</td>
              <td>{trackedExpense.category}</td>
              <td>{trackedExpense.date}</td>
            </tr>
          ))
        }
      </table>
      <form onSubmit={handleSubmit} className="FormContainer">
        <div className='FormInputContainer'>
          <label className='FormInput'>
            Expense
            <input type="text" value = {expense} onChange = {(e) => setExpense(e.target.value)}/>
          </label>
          <label className='FormInput'>
            Cost
            <input type="text" value = {cost} onChange = {(e) => setCost(e.target.value)}/>
          </label>
          <label className='FormInput'>
            Category
            <input type="text" value = {category} onChange = {(e) => setCategory(e.target.value)}/>
          </label>
          <label className='FormInput'>
            Date
            <input type = "date" value = {date} onChange = {(e) => handleDateChange(e)}/>
          </label>
        </div>
        <div className = "ButtonContainer">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
