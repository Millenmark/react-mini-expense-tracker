import './App.css'
import { ExpenseSection, NewExpenseSection } from './containers'
import {expenses} from './expenses'


function App() {
  const addExpenseHandler = expense => {
    console.log('in app.js')
    console.log(expense);
  }


  return (
    <div className="App">
      <NewExpenseSection addExpenseHandler={addExpenseHandler}/>
      <ExpenseSection expenses={expenses}/>
    </div>
  )
}

export default App
