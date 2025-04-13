import React from 'react'

function AddExpenseForm() {
    return (
        <aside>
            <h2>Add Expense</h2>
            <h3>Enter your expense details below</h3>
            <form >
                <div>
                    <input type='text' placeholder='Enter expense name' id='name' name='name'/>
                </div>
                <div>
                    <input type='text' placeholder='Enter expense description' id='description' name='description'/>
                </div>
                <div>
                    <input type='text' placeholder='Enter expense category' id='category' name='category'/>
                </div>
                <div>
                    <input type='number' placeholder='Enter amount' id='amount' name='amount'/>
                </div>
                <div>
                    <input type='date' id='date' name='date'/>
                </div>
                <div>
                    <button id='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </aside>
    )
}

export default AddExpenseForm