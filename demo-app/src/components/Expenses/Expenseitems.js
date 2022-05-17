import './Expenseitems.css'
import React,{useState} from 'react';
import ExpenseDate  from './ExpenseDate';
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card'
function Name1(props){

    const [title,setTitle] = useState(props.title);
    const clickHandler = ()=>{
                //   console.log('clicked ');
               // this.props.title = 'rayyan shaih';
                // title ='updated'
                title =='updated record'?setTitle('title'):setTitle('updated record');
                
            
    };
    return (
        <div>
   
    
    <Card className="expense-item">
        <div className="expense-item__description">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}> Change Tile</button>

    </Card>
    
    </div>
    );
}

export default Name1;