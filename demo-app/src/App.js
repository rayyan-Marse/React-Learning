import logo from './logo.svg';
import Name1 from './components/Expenseitems'
import ExpenseItemDisplay from './components/ExpenseItemsDisplay'
import './App.css';

function App() {

  const expenses =[{id:'el1',
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
date:new Date(2022,9,8)}]
  return (
    <div className="App">
    <ExpenseItemDisplay expenses={expenses}></ExpenseItemDisplay>
  
    </div>
  )
}

export default App;
