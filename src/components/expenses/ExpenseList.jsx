import React from 'react'
import ExpenseItems from './ExpenseItems'

function ExpenseList(props) {

  if(props.filteredItem.length===0)

  return (
    <h1 style={{ color: '#9d4ad4a0', textAlign: 'center' }}>No Expenses</h1>
  )


  return (
       
       <>

       {
        props.filteredItem.map((expense)=>{
            return (
                <ExpenseItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
            )
        })
       }
          
       </>

  )
}

export default ExpenseList