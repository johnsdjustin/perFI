import React, { useState, useEffect } from 'react';
import { StringMappingType } from 'typescript';
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

  const clearFormFields = () => {
    setExpense('');
    setCost('');
    setCategory('');
    setDate('');
  }

  const handleSubmit = (e: React.FormEvent): void => {
    console.log('Submitted');
    
    e.preventDefault();

    const newTrackedExpense = {
      expense,
      cost: parseFloat(cost), // TODO: Fix. This is rounding down instead of casting as float
      category,
      date,
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
            {/* <input type="text" value = {date} onChange = {(e) => setDate(e.target.value)}/> */}
            <input type = "date" value = {date} onChange = {(e) => setDate(e.target.value)}/>
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
