import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddExpenseForm from './components/AddExpenseForm'
import Table from './components/Table'
import expenseData from "./data/items"

function App() {
  const [expenses, setExpenses] = useState(expenseData)
  const [searchTerm, setSearchTerm] = useState("")

  function addExpense(newExpense){
    return setExpenses([...expenses,{...newExpense, id: expenses.length + 1}])
  }

  function handleSearch(e){
    setSearchTerm(e.target.value.toLowerCase())
  }

  const filteredExpenses = expenses.filter((expense) =>{
    return expense.expense.toLowerCase().includes(searchTerm) || expense.description.toLowerCase().includes(searchTerm)
  } )


  return (
    <>
      <Header />
      <div className='main-content'>
        <AddExpenseForm onAddExpense ={addExpense}/>
        <Table expenses={filteredExpenses} onSearch ={handleSearch}/>
      </div>
    </>
  )
}

export default App
