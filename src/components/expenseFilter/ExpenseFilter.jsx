import React from 'react'
import './ExpenseFilterStyle.css'
import { years } from '../../generalFunctions'

const ExpensesFilter = ({filterChangeHandler, filteredYear}) => {

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