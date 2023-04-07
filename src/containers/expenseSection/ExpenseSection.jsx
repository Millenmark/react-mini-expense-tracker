import './ExpenseSectionStyle.css'
import { ExpenseItem, Card } from '../../components'
import { expenses } from '../../expenses'
import React from 'react'

const ExpenseSection = () => {
  return (
    <Card>
      {
        expenses.map(expense => (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  )
}

export default ExpenseSection