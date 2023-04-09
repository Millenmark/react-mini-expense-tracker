import './ExpenseFormStyle.css'
import React, {useState} from 'react'
import { years } from '../../generalFunctions'

const ExpenseForm = ({saveExpenseDataHandler}) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const minYear = years()[years().length - 1]
  const maxYear = years()[0]

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

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    saveExpenseDataHandler(expenseData)


    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="" 
              id="title" 
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              name="" 
              id="amount" 
              min="0.01" 
              step="0.01" 
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              name="" 
              id="date" 
              min={`${minYear}-01-01`} 
              max={`${maxYear}-12-31`}
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type='submit' >Add Expense</button>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm