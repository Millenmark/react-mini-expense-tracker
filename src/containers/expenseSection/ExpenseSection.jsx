import './ExpenseSectionStyle.css'
import { ExpenseItem, Card, ExpenseFilter, ExpenseChart } from '../../components'
import React, {useState} from 'react'

const ExpenseSection = ({expenses}) => {
  const yearNow = new Date().getFullYear().toString()
  
  const [filteredYear, setFilteredYear] = useState(yearNow)

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  console.log(filteredExpenses);

  return (
    <Card>
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseFilter filteredYear={filteredYear} filterChangeHandler={filterChangeHandler}/>
      {
        filteredExpenses.length === 0 
        ? (<p className='not-found'>No expenses found.</p>) 
        : (
          filteredExpenses.map(expense => (
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )
      }
    </Card>
  )
}

export default ExpenseSection