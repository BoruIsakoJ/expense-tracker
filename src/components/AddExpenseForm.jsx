import React,{useState} from 'react'

function AddExpenseForm({onAddExpense}) {

    const [formData, setFormData] = useState({
        expense: '',
        description: '',
        category: '',
        amount: '',
        date: ''
      });

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        onAddExpense({...formData, amount: Number(formData.amount)})
        setFormData({ expense: '', description: '', category: '', amount: '', date: '' });
    }
    return (
        <aside>
            <h2>Add Expense</h2>
            <h3>Enter your expense details below</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Enter expense name' id='name' name='expense' value={formData.expense} onChange={handleChange} required/>
                </div>
                <div>
                    <input type='text' placeholder='Enter expense description' id='description' name='description' value={formData.description} onChange={handleChange}  required/>
                </div>
                <div>
                    <input type='text' placeholder='Enter expense category' id='category' name='category' value={formData.category}  onChange={handleChange}  required/>
                </div>
                <div>
                    <input type='number' placeholder='Enter amount' id='amount' name='amount' value={formData.amount} onChange={handleChange}  required/>
                </div>
                <div>
                    <input type='date' id='date' name='date'  onChange={handleChange} value={formData.date} required/>
                </div>
                <div>
                    <button id='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </aside>
    )
}

export default AddExpenseForm