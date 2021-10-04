import { GET_PREVIOUS_TRANSACTION, GET_TRANSACTION,GET_ONES_TRANSACTION} from "../action/transaction.action";


export const transactionReducer=(state={transaction:[],previous:[]},action)=>{
    let{type,payload}=action;
    switch(type){
        case GET_TRANSACTION:
            return {...state,transaction:payload};   
        case GET_PREVIOUS_TRANSACTION:
            return {...state,previous:payload};
        case GET_ONES_TRANSACTION:
            return {...state,transaction:payload};
        default:
            return state
    }
}