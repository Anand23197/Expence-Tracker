import { createContext, useReducer } from "react"

const intialState = {
    budget : 2000,
     expences:[
        {id: 12, name : 'shopping', cost : 40},
        {id: 13, name : 'holiday', cost : 40},
        {id: 14, name : 'car service', cost : 40},
    ]
}
 
const AppReducer = (state, action) =>{
    switch(action.type){
        case "ADD_EXPENCE":
             return {...state, expences:[...state.expences, action.payload]};
        case "DEL_EXPENCE":
             const expences = state.expences.filter((expences)=> action.payload !== expences.id);
             return {...state, expences: expences};
        default :
        return state;
    }
}

export const AppContext = createContext();
export const AppProvider = (props) =>{
      const[state, dispatch] = useReducer(AppReducer, intialState);
    return(
       <AppContext.Provider
        value={{
            budget: state.budget,
            expences:state.expences,
            dispatch,
        }}
        >
            {props.children}
       </AppContext.Provider>
    )
}



 