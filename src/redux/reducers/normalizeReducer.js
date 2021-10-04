import { GET_ACCOUNT_TYPES, GET_Bank_NAMES, GET_TRANSACTION_TYPE } from "../action/normalize.action";


export const normalizeReducer=(state={transactiontype:[],banknames:[],accounttypes:[]},action)=>{
    let{type,payload}=action;
    switch(type){
        case GET_TRANSACTION_TYPE:
            return {...state,transactiontype:payload};
        case GET_Bank_NAMES:
            return {...state,banknames:payload};
        case GET_ACCOUNT_TYPES:
            return {...state,accounttypes:payload}
        default:
            return state
    }
}