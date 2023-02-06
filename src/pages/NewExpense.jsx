
import React from 'react'
import NewExpenseComponent from "../components/newExpense/NewExpense";

function NewExpense(props) {
  const addNewExpense = (data)=>{
     
    props.onGetNewExpense(data)
     
  }
  return (
    <div className='new-expense-page'>
        <NewExpenseComponent onAddExpense= {addNewExpense}/>
    </div>
  )
}

export default NewExpense