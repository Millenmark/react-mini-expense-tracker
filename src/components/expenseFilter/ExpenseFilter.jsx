import React from 'react'
import './ExpenseFilterStyle.css'

const ExpensesFilter = ({filterChangeHandler, filteredYear}) => {

  const years = (limit = 5) => {
    const list = []
    const yearNow = new Date().getFullYear()

    for (let x = 0; x < 5; x++){
      list.push((yearNow - x).toString())
    }
    return list
  }

  const listOfYear = years()

  const dropdownChangeHandler = (e) => {
    filterChangeHandler(e.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filteredYear} onChange={dropdownChangeHandler}>
          {
            listOfYear.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter