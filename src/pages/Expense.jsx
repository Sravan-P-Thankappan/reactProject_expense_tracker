
import ExpenseItems from '../components/expenses/ExpenseItems';
import './Expense.css'
import Card from '../components/Card';
function Expense(props) {
     

    const expenses = [
        { title: 'Car Insurance', amount: 294.95, date: new Date(), id: 1 },
        { title: 'Water Bill', amount: 100, date: new Date(), id: 2 },
        { title: 'Wifi Bill', amount: 80, date: new Date(), id: 3 }
    ]

    
    
 

    return (
        <>

            <Card className="expenses">
                <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
                <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
                <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            </Card>




        </>
    )
}

export default Expense