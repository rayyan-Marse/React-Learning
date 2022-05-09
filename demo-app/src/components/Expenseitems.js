import './Expenseitems.css'
import ExpenseDate  from './ExpenseDate';
import Card from './Card'
function Name1(props){
    
    return (<Card className="expense-item">
        <div className="expense-item__description">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>

    </Card>);
}

export default Name1;