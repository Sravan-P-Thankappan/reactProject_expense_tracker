import React from 'react'

import ExpenseDate from './ExpenseDate'
import './ExpenseItems.css'
import Card from '../Card'


function ExpenseItems(props) {

    const [title, setTitle] = React.useState(props.title)

   



    return (

        <>
            <Card className='expense_container'>

                <div className='expense_description'>
                    <div>
                        <ExpenseDate date={props.date} />
                    </div>
                    <h1>{title}</h1>
                </div>

                <div className='wrapper'
                    style={{ width: '15%', paddingTop: '10px' }}>

                    <div className='expense_price' >
                        <div>{props.amount}</div>
                    </div>

                </div>

            </Card>

        </>
    )
}

export default ExpenseItems