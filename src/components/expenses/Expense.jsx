
import React from 'react';
import './Expense.css'
import Card from '../Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList'




function Expense(props) {


    const [selectedYear, setSelectedYear] = React.useState('2023')

    const filterYear = (data) => {

        setSelectedYear(data)
    }

    console.log(selectedYear)

    const filteredItem = props.item.filter((item) => {

        return item.date.getFullYear().toString() === selectedYear
    })

    // let expenseContent = <h1 style={{ color: '#9d4ad4a0', textAlign: 'center' }}>No Expenses</h1>

    // if (filteredItem.length > 0) {
    //     expenseContent = filteredItem.map((expense) =>
    //     (
    //         <ExpenseItems
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date} />
    //     )

    //     )
    // }



    return (
        <>

            <Card className="expenses">

                <ExpensesFilter
                    selectedYear={selectedYear}
                    onSelectYear={filterYear} />

                    <ExpenseList
                    filteredItem={filteredItem}
                    />
            </Card>


            {/* conditional rendering 3rd approach */}
            {/* {expenseContent} */}


            {/* conditional rendering 2nd approach */}

            {/* {filteredItem.length === 0 && <h1 style={{ color: '#9d4ad4a0', textAlign: 'center' }}>No Expenses</h1>} */}
            {/* {

                    filteredItem.map((expense) =>
                    (
                        <ExpenseItems
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    )

                    )
                } */}




            {/* conditional rendering 1st approach */}
            {/* {

                    filteredItem.length === 0
                        ?
                        <h1 style={{ color: '#9d4ad4a0', textAlign: 'center' }}>No Expenses</h1>
                        :
                        filteredItem.map((expense) =>
                        (
                            <ExpenseItems
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date} />
                        )

                        )
                } */}




        </>
    )
}

export default Expense