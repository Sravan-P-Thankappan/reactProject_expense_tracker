import './ExpenseDate.css'
function ExpenseDate({ date }) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December']
    const month = months[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()

    return (

        <>

            <div className="date">
                <div className="month">month</div>
                <div className="year">year</div>
                <div className="day">day</div>
            </div>

        </>
    )
}

export default ExpenseDate