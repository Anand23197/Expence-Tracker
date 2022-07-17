import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';


const AddExpence = () => {
    const [cost, setCost] = useState("");
    const [name, setName] = useState("");
    const {dispatch} = useContext(AppContext); 

    function submit(e){
        e.preventDefault(); 
        const newData = {
            id : uuidv4(),
            name : name,
            cost : parseInt(cost)
        }
     dispatch({type : "ADD_EXPENCE", payload : newData}); 
    }
  return (
    <form onSubmit={submit}>
        <div className='row'>
            <div className='col-sm'>
                <label>Name</label>
                <input type="text"
                 placeholder='Enter Name...'
                 onInput={(e)=>setName(e.target.value)}
                 className='form-control mt-2'/> 
            </div>
            <div className='col-sm'>
                <label>Cost</label>
                <input type="number" 
                placeholder='Enter Cost...'
                onInput={(e)=>setCost(e.target.value)}
                className='form-control mt-2'/> 
            </div>
        </div>
        <div className='row'>
            <div className='col-sm'>
            <button type='submit' className='btn btn-success mt-3 width'>Save</button>
            </div>
        </div>
       
    </form>
  )
}

export default AddExpence