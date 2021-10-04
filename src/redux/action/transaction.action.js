import axios from "axios"

export const GET_TRANSACTION="gettransaction"
export const SET_TRANSACTION="settransaction"
export const GET_PREVIOUS_TRANSACTION="getprevioustransaction"
export const GET_ONES_TRANSACTION="getonestransaction"



export const getTransaction=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/transaction',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_TRANSACTION,
                payload:data
            })
        })
    }
}


export const setTransaction=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/transaction',data).then(response =>console.log(response));

    }
}

// export const getPreviousTransaction=(id,from,to)=>{

//     return (dispatch)=>{
//         axios.get(`http://localhost:4000/transaction/previoustransaction/${id}/${from}/${to}`).then(data=>{
//             dispatch({
//                 type:GET_PREVIOUS_TRANSACTION,
//                 payload:JSON.parse(data)
//             })
//         })
//     }

// }

export const getPreviousTransaction=(id,from,to)=>{

    return (dispatch)=>{
        fetch(`http://localhost:4000/transaction/previoustransaction/${id}/${from}/${to}`
        ,{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_PREVIOUS_TRANSACTION,
                payload:data
            })
        })
    }

}

export const getOnesTransaction=(id)=>{

    return (dispatch)=>{
        fetch(`http://localhost:4000/transaction/onestransaction/${id}`
        ,{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_ONES_TRANSACTION,
                payload:data
            })
        })
    }

}

