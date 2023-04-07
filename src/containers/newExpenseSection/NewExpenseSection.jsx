import './NewExpenseStyle.css'
import { ExpenseForm } from '../../components'
import React from 'react'


const NewExpenseSection = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm/>
    </div>
  )
}

export default NewExpenseSection