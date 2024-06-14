const arr = []

export const Reducer=(state=arr,action)=>{
    if(action.type==="ADD"){
        state=[
            ...state,
            action.payload
        ]
    }
    return state
}