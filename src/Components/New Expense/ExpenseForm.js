import React, {useState} from 'react'
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [inputUser, setInputUser] =  useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
        
    // });

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);
    //   setInputUser({ ...inputUser,
    //     enteredTitle: event.target.value,
    //   })
    // setEnteredTitle((...prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); 
        // setInputUser({ ...inputUser,
        //     enteredAmount: event.target.value,
        //   })
    }
 
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value); 
        // setInputUser({ ...inputUser,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {  
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
     
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        
    };



  return (
    <form
    onSubmit={submitHandler}
    >
        <div className="new-expense-controls">
        <div className="new-expense-control">
            <label>Title</label>
            <input 
            type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler} 
            />
            </div>
      
        <div className="new-expense-control">
            <label>Amount</label>
            <input 
            type="number"  
            value={enteredAmount}
            min="0.01" 
            step="0.01" 
            onChange={amountChangeHandler}
            />
            </div>
            
      
        <div className="new-expense-control">
            <label>Date</label>
            <input
            type="date"  
            value={enteredDate}
            min="2019-01-01" 
            max="2022-12-31"  
            onChange={dateChangeHandler}
            />
            </div>
            
<div className='new-expense__actions'>
    <button 
    type='button'
    onClick={props.onCancel}
    >
   Cancel
    </button>
    <button 
    type='submit'
    >
    Add Expense
    </button>
</div>
        </div>
        </form>
    
  )
}

export default ExpenseForm