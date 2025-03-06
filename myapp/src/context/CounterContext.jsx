import { createContext, useReducer } from "react";
export const NameCounterContext = createContext();

function Reducer(state,action){
    switch (action.type){
     case "INCREMENT_COUNTER":
        return{...state,counter: state.counter + 1};
     case "DECREMENT_COUNTER":
        return{...state,counter: state.counter - 1};
     case "RESET_COUNTER":
        return{...state,counter: 1};
     case "DARK_THEME":
       return{...state,theme: "dark"};
       case "LIGHT_THEME":
        return{...state,theme: "light"};
     default:
        return state;
    }
}
const InitialState={counter: 1, theme: "dark", theme: "light" };
function CounterContextProvider({children}){
    const[state, dispatch]= useReducer(Reducer, InitialState);
return  <NameCounterContext.Provider value={{state: state, dispatch: dispatch}}>{children}</NameCounterContext.Provider>;
}

export default CounterContextProvider;