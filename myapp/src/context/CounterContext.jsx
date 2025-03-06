import { useReducer } from "react";

function Reducer(state,action){
    switch (action.type){
        case "INCREMENT_COUNTER":
            return{...state,counter: state.counter + 1};
            case "  DECREMENT_COUNTER":
                return{...state,counter:state.coumter-1};
                case "RESET_COUNTER":
                    return{...state,counter:1};
                    default:
                        return state;
    }
}

function CounterContextProvider({children}){
    const[state, dispatch]= useReducer(useReducer, InitialState);
return  <div>{children}</div>;
}

export default CounterContextProvider;