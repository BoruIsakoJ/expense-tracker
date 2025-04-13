import React from 'react'

function Table() {
  return (
    <div className='table-container'>
        <form className='table-form'>
            <input type='text' placeholder='Search expenses'/>
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
                <tr>
                    <td>Ugali Matumbo</td>
                    <td>Monday's Lunch</td>
                    <td>Food</td>
                    <td>200</td>
                    <td>10-04-2025</td>
                </tr>
                <tr>
                    <td>KPLC tokens</td>
                    <td>Power tokens</td>
                    <td>Energy</td>
                    <td>1000</td>
                    <td>12-04-2025</td>
                </tr>
                <tr>
                    <td>Buy shoes</td>
                    <td>Add to my shoe collection</td>
                    <td>Clothes</td>
                    <td>2500</td>
                    <td>14-04-2025</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table