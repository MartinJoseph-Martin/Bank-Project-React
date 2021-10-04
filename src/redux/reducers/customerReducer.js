import { EDIT_CUSTOMER, GET_CUSTOMER, GET_CUSTOMER_ACCOUNT,NOT_ADMIN, YES_ADMIN,GET_A_CUSTOMER_ACCOUNT } from "../action/customer.action";


export const customerReducer=(state={customer:[],account:[],editData:{},admin:true},action)=>{
    let{type,payload}=action;
    switch(type){
        case GET_CUSTOMER:
            return {...state,customer:payload};
        case GET_CUSTOMER_ACCOUNT:
            return {...state,account:payload};
        case GET_A_CUSTOMER_ACCOUNT:
            return{...state,account:payload}
        case EDIT_CUSTOMER:
            console.log(state.editData)
            return{...state,editData:payload}
        case NOT_ADMIN:
            return{...state,admin:false}
        case YES_ADMIN:
            return{...state,admin:true}
        default:
            return state
    }
}