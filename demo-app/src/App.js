import logo from './logo.svg';
import Name1 from './components/Expenses/Expenseitems';
import ExpenseItemDisplay from './components/Expenses/ExpenseItemsDisplay';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import React ,{useState} from 'react';

const dummyArray =[{id:'el1',
title:'toilet paper',
amount:120,
date:new Date(2022,4,8)},
{id:'el2',
title:'ice cream',
amount:120,
date:new Date(2022,3,8)},
{id:'el3',
title:'choclate',
amount:120,
date:new Date(2022,10,8)},
{id:'el4',
title:'banna cream',
amount:120,
date:new Date(2022,9,8)}];

function App() {

  const [initialArray,setInitialArray] = useState(dummyArray);


const newExpense = expenseData =>{
  console.log(expenseData);
  console.log(initialArray);
  setInitialArray(previouseData => {
    console.log(previouseData);
    return [...previouseData,expenseData];
  });
}
  return (
    <div className="App">
      <NewExpense getNewExpense={newExpense}></NewExpense>
    <ExpenseItemDisplay expenses={initialArray}></ExpenseItemDisplay>
    </div>
  )
}

export default App;
