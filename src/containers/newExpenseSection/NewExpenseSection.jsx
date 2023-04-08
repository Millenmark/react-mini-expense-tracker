import './NewExpenseStyle.css'
import { ExpenseForm, Card } from '../../components'
import React from 'react'
import { nanoid } from 'nanoid'


const NewExpenseSection = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    }
    console.log(expenseData);
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