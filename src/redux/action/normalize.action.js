export const GET_Bank_NAMES="getbanknames"
export const GET_TRANSACTION_TYPE="gettransactiontype"
export const GET_ACCOUNT_TYPES="getaccounttypes"



export const getBankNames=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/bankdetails/bankname',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_Bank_NAMES,
                payload:data
            })
        })
    }
}

export const getTransactionType=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/transaction/transactiontype',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_TRANSACTION_TYPE,
                payload:data
            })
        })
    }
}


export const getAccountTypes=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/customeraccount/accounttype',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_ACCOUNT_TYPES,
                payload:data
            })
        })
    }
}