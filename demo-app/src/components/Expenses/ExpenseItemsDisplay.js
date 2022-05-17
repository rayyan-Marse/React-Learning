import Name1 from "./Expenseitems";
import Card from '../UI/Card'
import './ExpenseItemDisplay.css'
import ExpensesFilter from "./ExpenseFilter";
import React,{useState} from 'react';
function ExpenseItemDisplay(props){

    const [filterYear ,setFilterYear] = useState('2021');

    const filterChangeHandler = selectedYear =>{
            console.log('change event handler');
            console.log(selectedYear);
            setFilterYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onFilterChangeHandler={filterChangeHandler}></ExpensesFilter>
            {props.expenses.map(ex => <Name1 title={ex.title} amount={ex.amount} date={ex.date}></Name1>)}
        {/* <Name1 title = {props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></Name1>
        <Name1 title = {props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></Name1>
        <Name1 title = {props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></Name1>
        <Name1 title = {props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></Name1> */}
        </Card>
    );

}

export default ExpenseItemDisplay;