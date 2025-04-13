import React from 'react'

function Table({ expenses, onSearch }) {
    return (
        <div className='table-container'>
            <form className='table-form'>
                <input type='text' placeholder='Search expenses' onChange={onSearch} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((exp) => (
                        <tr key={exp.id}>
                            <td>{exp.expense}</td>
                            <td>{exp.description}</td>
                            <td>{exp.category}</td>
                            <td>{exp.amount}</td>
                            <td>{exp.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table