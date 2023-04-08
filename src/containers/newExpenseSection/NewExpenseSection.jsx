import './NewExpenseStyle.css'
import { ExpenseForm, Card } from '../../components'
import React from 'react'
import { nanoid } from 'nanoid'


const NewExpenseSection = ({addExpenseHandler}) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    }

    addExpenseHandler(expenseData)
    // console.log(expenseData);
  }

  return (
    <Card>
      <div className='new-expense'>
        <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler}/>
      </div>
    </Card>
    
  )
}

export default NewExpenseSection