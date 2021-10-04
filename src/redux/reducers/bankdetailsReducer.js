import { GET_Bank} from "../action/bankdetails.action";



export const bankDetailsReducer=(state=[],action)=>{
    let{type,payload}=action;
    switch(type){
        case GET_Bank:
            return payload;
        default:
            return state
    }
}