import {React} from "react";
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props)=>{

    // 1.This is first way using state with multiple values
    const [enterTitle,setEnterdTitle] = useState('');
    const [enterAmount,setEnterdAmount] = useState('');
    const [enterDate,setEnterdDate] = useState('');

    // const [userInput ,setUserInput] = useState({
    //     enterdTitle:'',
    //     enterdAmount:'',
    //     enterddDte:''
    // });
    
    const titleChangeHandler = (event)=>{
        console.log(event.target.value);
        setEnterdTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle:event.target.value
        // });

        // 2 second method using state 2 type

        // setUserInput((previouse)=>{
        //     return { 
        //         ...previouse,
        //         enterddDte:event.target.value
        //     }

        // });



    }

    const amountChangeHandler = (event)=>{
       setEnterdAmount(event.target.value);
    //    setUserInput({
    //        ...userInput,
    //        enterdAmount:event.target.value
    //    });
    }

    const dateChangeHandler = (event)=>{
        setEnterdDate (event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterddDte:event.target.value
        // });
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("form submitted");

        const expenseData = {
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        };
        console.log(expenseData);
        props.SaveExpenseData(expenseData);
        // setEnterdTitle('');
        // setEnterdAmount('');
        // setEnterdDate('');


    }
        return(<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterAmount} min="0.01" step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={enterDate}  max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>);
}

export default ExpenseForm;