import './App.css';
import React from 'react';
import Expense from './components/expenses/Expense';
import NewExpense from './components/newExpense/NewExpense';

const dummyExpenses = [
  { title: 'Car Insurance', amount: 294.95, date: new Date('01-02-2022'), id: '1' },
  { title: 'Water Bill', amount: 100, date: new Date('01-11-2021'), id: '2' },
  { title: 'Wifi Bill', amount: 80, date: new Date('02-02-2023'), id: '3' }
]


function App() {

  const[expenses,setExpenses] = React.useState(dummyExpenses)

  const getExpense = (params)=>{
           
    console.log('from App', params)
        setExpenses((prev)=>{
               
          return [...prev,params]
        })
  }
  
  
  return (
   
    <div className='app'>
      <NewExpense onAddExpense={getExpense}/>
      <Expense item={expenses} />
    </div>
   
  );
}  

export default App;


