import './NewExpenseStyle.css'
import { ExpenseForm, Card } from '../../components'
import React from 'react'


const NewExpenseSection = () => {
  return (
    <Card>
      <div className='new-expense'>
        <ExpenseForm/>
      </div>
    </Card>
    
  )
}

export default NewExpenseSection