import types from './admin.types'
const INITIAL_STATE={
    admin:null
}

const adminReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){

        case types.SET_CURRENT_ADMIN:
            return {
                ...state,
            admin: action.payload
            }
        default:
        return state
    }
}


export default adminReducer


