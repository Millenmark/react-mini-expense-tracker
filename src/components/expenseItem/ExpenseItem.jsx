import './ExpenseItemStyle.css'
import React from 'react'

const ExpenseItem = ({title, amount, date}) => {
  return (
    <div className='expense-item container'>
      <div className="expense-item__title">
        <h2>{title}</h2>
        <div className='expense-item__date'>{date}</div>
      </div>
      <div className='expense-item__description'>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem