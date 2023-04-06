import './ExpenseItemStyle.css'
import React from 'react'

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return (
    <div className='expense-item max-width'>
      <div className="expense-item__title">
        <h2>{expenseTitle}</h2>
        <div className='expense-item__date'>{expenseDate.toISOString()}</div>
      </div>
      <div className='expense-item__description'>
        <div className='expense-item__price'>Amount</div>
      </div>
    </div>
  )
}

export default ExpenseItem