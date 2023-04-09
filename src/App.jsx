import './App.css'
import { ExpenseSection, NewExpenseSection } from './containers'
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
      <ExpenseSection expenses={expenses}/>
    </div>
  )
}

export default App
