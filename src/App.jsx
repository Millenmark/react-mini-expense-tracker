import './App.css'
import { ExpenseSection, NewExpenseSection, ChartSection } from './containers'
import {initialExpenses} from './expenses'
import { useState } from 'react'


function App() {
  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div className="App">
      <NewExpenseSection addExpenseHandler={addExpenseHandler}/>
      <ChartSection/>
      <ExpenseSection expenses={expenses}/>
    </div>
  )
}

export default App
