import React from 'react'
import './Budget'
import ExpenseTotal from './ExpenseTotal'
import Budget from './Budget';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './ExpenseList';
import Reamaining from './Reamaining';
import AddExpence from './AddExpence';
import { AppProvider } from '../context/AppContext'
const App1 = () => {

  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget/>
        </div>
        <div className='col-sm'>
          <Reamaining/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expences</h3>
      <div className='row mt-3'>
         <div className='col-sm'>
        <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Expence</h3>
      <div className='row mt-3'>
         <div className='col-sm'>
          <AddExpence/>
        </div>
      </div>
    </div>
    </AppProvider>
  )
}


export default App1;
