import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
         const {expences} = useContext(AppContext);
  return (
    <ul className='list-group'>
        {expences.map((expence)=>{
            return <ExpenseItem id={expence.id} name={expence.name} cost={expence.cost}/>
        })}
    </ul>
  )
}

export default ExpenseList