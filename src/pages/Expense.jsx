
import React from 'react';
import ExpenseItems from '../components/expenses/ExpenseItems';
import './Expense.css'
import Card from '../components/Card';
import ExpensesFilter from '../components/expenses/ExpenseFilter';

const dummyExpenses = [
    { title: 'Car Insurance', amount: 294.95, date: new Date(), id: 1 },
    { title: 'Water Bill', amount: 100, date: new Date(), id: 2 },
    { title: 'Wifi Bill', amount: 80, date: new Date(), id: 3 }
]


function Expense(props) {

    const [selectedYear, setSelectedYear] = React.useState('2020')

    const[expenses,setExpenses] = React.useState(dummyExpenses)
    
    // const add = ()=>{
    //      setExpenses((prev)=>{
    //         return [...prev,props.newExpense]
    //     })
    // }
    
    // React.useEffect(()=>{
    //    add()  
     
    // },[])
  

    const filterYear = (data) => {

        setSelectedYear(data)
    }

   


    return (
        <>

            <Card className="expenses">

                <ExpensesFilter selectedYear={selectedYear} onSelectYear={filterYear} />

                {
                    expenses.map((expense)=>
                    (
                        <ExpenseItems
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    )

                 )
                }

            </Card>

        </>
    )
}

export default Expense