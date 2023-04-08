import './ExpenseSectionStyle.css'
import { ExpenseItem, Card, ExpenseFilter } from '../../components'
import React, {useState} from 'react'

const ExpenseSection = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card>
      <ExpenseFilter filteredYear={filteredYear} filterChangeHandler={filterChangeHandler}/>
      {
        expenses.map(expense => (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      }
    </Card>
  )
}

export default ExpenseSection