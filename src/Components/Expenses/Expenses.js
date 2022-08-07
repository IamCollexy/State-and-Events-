import React, { useState } from 'react'
import ExpensesFilter from '../New Expense/ExpenseFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {

  const [year, setYear] = useState('2021');

  const yearChanger = (year) => 
  {
   return setYear(year);
  }
// To set filter so That expenses displayed is based on the year selected.
  const filteredYearlyExpenses = props.items.filter(expenses => 
    {
    return expenses.date.getFullYear().toString() === year 
  });


  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter 
      selected={year} 
      onChangeYear={yearChanger}
      />

  {/* Using Tenary Operator */}
    {/* { filteredYearlyExpenses.length === 0 ? 
    (<p style={{
      color: 'white',
    }}>
      No expense Found
      </p>
    ) : (  {filteredYearlyExpenses.map((expense) => (
  <ExpenseItem
  key={expense.id}
  title={expense.title}
  amount={expense.amount} 
  date={expense.date}  
  />
    ))}
    )
    */}
 

 {/* Using Short Circuit */}
 {/* {filteredYearlyExpenses.length === 0 && <p style={{
      color: 'white',
    }}>
      No expense Found
      </p>
} */}

{/* {filteredYearlyExpenses.map((expense) => (
  <ExpenseItem
  key={expense.id}
  title={expense.title}
  amount={expense.amount} 
  date={expense.date}  
  />
    ))} */}
   
 

      {/* Hard Coded ExpenseItems */}
      {/* <ExpenseItem 
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
      /> 
      <ExpenseItem 
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
      /> 
      <ExpenseItem 
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
      /> 
      <ExpenseItem 
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
      />  */}
  <ExpensesChart expenses={filteredYearlyExpenses}/>
      <ExpensesList List={filteredYearlyExpenses} />
    </Card>
    </div>
  )
}

export default Expenses