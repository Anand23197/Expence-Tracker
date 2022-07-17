import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
  const {expences} = useContext(AppContext);

  const calculate = ()=>{
  const total = expences.reduce((acc, curr)=>{
     return acc += curr.cost;
    },0)
    return total;
  }

  return (
    <div className='alert alert-primary'>
        ExpenseTotal Rs:{calculate()}
    </div>
  )
}

export default ExpenseTotal