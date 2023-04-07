import './App.css'
import { ExpenseItem } from './components'

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 342.54,
      date: new Date(),
    },

    {
      id: 2,
      title: 'Car Insurance',
      amount: 342.54,
      date: new Date(),
    },

    {
      id: 3,
      title: 'Car Insurance',
      amount: 342.54,
      date: new Date(),
    },
  ]

  return (
    <div className="App">
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        />
      <ExpenseItem/>
    </div>
  )
}

export default App
