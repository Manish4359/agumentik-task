import { combineReducers } from 'redux'
import adminReducer from "./admin.reducer"

const rootReducer = combineReducers({
    adminReducer:adminReducer
})

export default  rootReducer


