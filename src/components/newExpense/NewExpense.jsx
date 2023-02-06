
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


function NewExpense(props) {
    
    const onSaveExpenseDataHndler = (enteredData)=>{
            
        const expenseData = {
            ...enteredData,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return (

        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData={onSaveExpenseDataHndler}/>
        </div>
    )
}

export default NewExpense