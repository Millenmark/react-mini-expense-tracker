import './App.css'
import { ExpenseItem } from './components'

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
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
      <ExpenseItem/>
      <ExpenseItem/>
    </div>
  )
}

export default App
