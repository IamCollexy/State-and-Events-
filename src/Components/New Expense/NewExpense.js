import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

const [inputs, setInputs] = useState(false);

const saveExpenseDataHandle = (enteredExpenseData) => {
const expenseData = {
  ...enteredExpenseData,
  id: Math.random.toString()
};
props.onAddExpense(expenseData);
setInputs(false);
}

const startInputting = () => {
setInputs(true);
}

const stopInputting = () => {
setInputs(false);
}

  return   <div className="new-expense">
    {!inputs && <button 
    onClick={startInputting}
    >
    Add New Expense
    </button>
    }
   {inputs && <ExpenseForm 
   onSaveExpenseData={saveExpenseDataHandle}
   onCancel={stopInputting}
   />
}
    </div>
  
}

export default NewExpense