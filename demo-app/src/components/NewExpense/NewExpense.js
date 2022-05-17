import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{

    const onSaveExpenseData = (enterdExpenseData) =>{
        const expenseData = {
            ...enterdExpenseData,
            id:Math.random().toString()
        };

        console.log(expenseData);
        props.getNewExpense(expenseData);
    }
    return(<div className="new-expense">
        <ExpenseForm SaveExpenseData={onSaveExpenseData}></ExpenseForm>
    </div>);

}

export default NewExpense;