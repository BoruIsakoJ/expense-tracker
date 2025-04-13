import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddExpenseForm from './components/AddExpenseForm'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='main-content'>
        <AddExpenseForm />
        <Table />
      </div>

    </>
  )
}

export default App
