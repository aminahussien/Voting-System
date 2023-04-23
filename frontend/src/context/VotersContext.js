import { createContext,useReducer } from 'react'
export const VotersContext = createContext()

export const votersReducer = (state,action)=>{
    switch(action.type){
        case 'SHOW_VOTERS':
            return {
                voters:action.payload
            }
        default:
            return state
    }
}

export const VotersContextContextProvider =({ children })=>{
    const[state,dispatch]=useReducer(votersReducer,{
        voters:null
    })

    
    return(
        <VotersContext.Provider value={{...state,dispatch}}>
            { children }
        </VotersContext.Provider>
    )
}