type CounterState = {
    count:number;
    status:string;
}
type countStateUpdate = {
    type: `increment`|`decrement`| `reset`
}
type counterAction = countStateUpdate
export const initialState:CounterState = {
count:0,
status:`pending`
}

export const counterReducer = (state:CounterState, action:counterAction):CounterState =>{
    switch(action.type){
        case `increment`:
            return {...state, count: state.count + 1}
        case `decrement`:
            return {...state, count: state.count - 1}
        case `reset`:
            return {...state, count: state.count = 0}

            default:
                return state
    }
    
}