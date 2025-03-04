
function Reducer(state,action){
    console.log(state,"state", action, "action");
    switch(action.type){
        case "INCREMENT_COUNTER":
        return{...state,counter: state.counter + 1};
        case "DECREMENT_COUNTER":
            return{...state,counter:state.counter-1};
            case "RESET_COUNTER":
                return {}
    }
}
export default Reducer;
