import React from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    // const [title,setTitle] = React.useState('')
    // const [amount,setAmount] = React.useState('')
    // const [date,setDate] = React.useState('')

    const [formVisible, setFormVisible] = React.useState(false)

    const [userInput, setUserInput] = React.useState({
        title: '',
        amount: '',
        date: ''
    })


    const titleChangeHandler = (e) => {

        // setTitle(e.target.value)

        setUserInput({
            ...userInput,
            title: e.target.value
        })
    }


    const dateChangeHandler = (e) => {

        // setDate(e.target.value)

        setUserInput({
            ...userInput,
            date: e.target.value
        })
    }


    const amountChangeHandler = (e) => {

        //   setAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value
        // })  

        //-----we can also update state like this when we add state or 
        // overwrite state in  prev state  
        // --this meathod is more accurate than above we add state or 
        // overwrite state with prev state

        setUserInput((prevState) => {
            return {
                ...prevState, amount: e.target.value
            }
        })
    }

    const handleSumit = (e) => {

        e.preventDefault();

        userInput.date = new Date(userInput.date)

        props.onSaveExpenseData(userInput)

        //---two way binding---
        // setAmount('')
        // setDate('')
        // setTitle('')

        e.target.reset()
        setFormVisible(false)
    }
      
    const handleForm =()=>{
        setFormVisible(true)
    }

    if (!formVisible) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{
                    padding: '10px',
                    color: 'rgba(109, 16, 171, 0.629)',
                    border: 'none',
                    borderRadius: '10px',
                    cursor:'pointer',
                    fontWeight:'bold'
                }}
h
                onClick={handleForm}
                
                >
                    Add Expense
                </button>
            </div>
        )
    }



    return (


        <form onSubmit={handleSumit}>

            <div className='new-expense-controls'>

                <div>
                    <div className='new-expense-control'>

                        <label >Title</label>
                        <br />
                        <input type="text"
                            // value={title}
                            onChange={titleChangeHandler} />

                    </div>

                    <div className='new-expense-control'>

                        <label >Amount</label>
                        <br />
                        <input type="number"
                            min='0.01'
                            step='0.01'
                            // value={amount}
                            onChange={amountChangeHandler}
                        />

                    </div>
                </div>


                <div>
                    <div className='new-expense-control'>

                        <label >Date</label>
                        <br />
                        <input type="date"
                            min='2019-01-01'
                            max='2024-12-31'
                            // value={date}
                            onChange={dateChangeHandler}

                        />
                    </div>
                </div>

            </div>

            <div className='new-expense-action'>
                 
                 <button 
                 style={{ cursor: 'pointer' }}
                 onClick={()=>setFormVisible(false)}
                 >
                 Cancel 
                 </button>

                <button style={{ cursor: 'pointer' }}
                    type='submit'>
                    Add Expense
                </button>

            </div>

        </form>


    )
}

export default ExpenseForm