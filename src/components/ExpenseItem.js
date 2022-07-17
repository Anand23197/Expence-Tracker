import React, {useContext} from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'


const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
   const itemDelete = ()=>{
         const id = props.id;
        dispatch({type: "DEL_EXPENCE", payload : id}); 
   }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span>
            Rs.{props.cost}
            </span>
         <TiDeleteOutline size='2em' onClick={itemDelete}></TiDeleteOutline>
        </div>
        
    </li>
  )
}

export default ExpenseItem