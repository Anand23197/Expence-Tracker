import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Reamaining = () => {

  const {budget, expences} = useContext(AppContext);

  const calculate = ()=>{
    const total = expences.reduce((acc, curr)=>{
       return acc += curr.cost;
      },0)
      return total;
    }

  
  return (
    <div className='alert alert-success'>
        Reamaining Rs: {budget - calculate()}
    </div>
  )
}

export default Reamaining