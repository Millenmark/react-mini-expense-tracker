import './ExpenseItemStyle.css'
import React from 'react'

const ExpenseItem = ({title, amount, date}) => {
  
  date = date?.toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})

  const toCurrency = (value, currencySymbol = "USD", local = "en-US") => {
    return value?.toLocaleString(local, {style: "currency", currency: currencySymbol})
  }

  return (
    <div className='expense-item'>
      <div className="expense-item__title">
        <h2>{title}</h2>
        <div className='expense-item__date'>{date}</div>
      </div>
      <div className='expense-item__description'>
        <div className='expense-item__price'>{toCurrency(amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseItem