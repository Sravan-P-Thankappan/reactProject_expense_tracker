import './App.css';
import React, { useState } from 'react';
import Expense from './pages/Expense';
import NewExpense from './pages/NewExpense';




function App() {
  const [newData,setNewData] = useState({})
  const getExpense = (params)=>{
     
    setNewData({...newData,...params})
  }
  
  console.log('from app')
  console.log(newData)

  return (
   
    <div className='app'>
      <NewExpense onGetNewExpense = {getExpense}/>
      <Expense newExpense = {newData}/>
    </div>
   
  );
}  

export default App;


