import './ExpenseFormStyle.css'
import React, {useState} from 'react'

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })



  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: e.target.value}
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: e.target.value}
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredDate: e.target.value}
    })
  }


  return (
    <>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input 
              type="text" 
              name="" 
              id="" 
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input 
              type="number" 
              name="" 
              id="" 
              min="0.01" 
              step="0.01" 
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input 
              type="date" 
              name="" 
              id="" 
              min="2019-01-01" 
              max="2025-12-31" 
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm