import Name1 from "./Expenseitems";
import Card from '../UI/Card'
import './ExpenseItemDisplay.css'
function ExpenseItemDisplay(props){

    return(
        <Card className="expenses">
        <Name1 title = {props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></Name1>
        <Name1 title = {props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></Name1>
        <Name1 title = {props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></Name1>
        <Name1 title = {props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></Name1>
        </Card>
    );

}

export default ExpenseItemDisplay;