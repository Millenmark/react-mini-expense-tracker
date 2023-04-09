import './ExpenseItemStyle.css'
import React, {useState} from 'react'

const ExpenseItem = ({title, amount, date}) => {
  // const [newTitle, setNewTitle] = useState(title)
  
  date = date?.toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})

  const toCurrency = (value, currencySymbol = "USD", local = "en-US") => {
    return value?.toLocaleString(local, {style: "currency", currency: currencySymbol})
  }

  // const clickHandler = () => {
  //   setNewTitle('updated')
  // }

  return (
    <div className='expense-item'>
      <div className="expense-item__title">
        <h2>{title}</h2>
        <div className='expense-item__date'>{date}</div>
      </div>
      <div className='expense-item__description'>
        <div className='expense-item__price'>{toCurrency(parseFloat(amount))}</div>
      </div>
      {/* <button 
        type='button' 
        onClick={clickHandler}
      >Change Title</button> */}
    </div>
  )
}

export default ExpenseItem