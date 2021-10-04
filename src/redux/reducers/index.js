
import { combineReducers } from 'redux'
import { bankDetailsReducer } from './bankdetailsReducer'
import { customerReducer } from './customerReducer'
import { normalizeReducer } from './normalizeReducer'
import { transactionReducer } from './transactionReducer'



export const rootReducer=combineReducers({
        customer:customerReducer,
        transaction:transactionReducer,
        bankBranches:bankDetailsReducer,
        normalize:normalizeReducer
})