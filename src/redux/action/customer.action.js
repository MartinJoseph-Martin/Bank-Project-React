import axios from 'axios';

export const GET_CUSTOMER="getcustomer"
export const GET_CUSTOMER_ACCOUNT="getcustomeraccount"
export const GET_A_CUSTOMER_ACCOUNT="getacustomeraccount"
export const SET_CUSTOMER="setcustomer"
export const EDIT_CUSTOMER="editcustomer"
export const NOT_ADMIN="notadmin"
export const YES_ADMIN="YES_ADMIN"


export const getCustomer=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/customeraccount/customer',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_CUSTOMER,
                payload:data
            })
        })
    }
}

export const getCustomerAccount=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/customeraccount/account',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_CUSTOMER_ACCOUNT,
                payload:data
            })
        })
    }
}

export const getACustomerAccount=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/customeraccount/account/${id}`,{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_A_CUSTOMER_ACCOUNT,
                payload:data
            })
        })
    }
}

export const getACustomer=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/customeraccount/customer/${id}`,{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_CUSTOMER,
                payload:data
            })
        })
    }
}

export const setCustomer=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/customeraccount/newcustomer',data).then(response =>console.log(response));

    }
}

export const setOldCustomer=(data,id)=>{
    return (dispatch)=>{

        axios.post(`http://localhost:4000/customeraccount/oldcustomer/${id}`,data).then(response =>console.log(response));

    }
}


export const updateCustomer=(data)=>{
    return{
        type:EDIT_CUSTOMER,
        payload:data
    }
}

export const editCustomer=(data,id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/customeraccount/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'PUT',
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>{console.log(response)})
    }
}

export const deleteCustomer=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/customeraccount/customer/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(response=>{console.log(response)})
    }
}

export const deleteAccount=(id,acc)=>{
    return (dispatch)=>{

        axios.delete(`http://localhost:4000/customeraccount/account/${id}/${acc}`).then(response =>console.log(response));

    }
}

export const toggleAdmin=()=>{
    return{
        type:NOT_ADMIN
    }
}

export const admin=()=>{
    return{
        type:YES_ADMIN
    }
}
