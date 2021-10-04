import axios from 'axios';

export const GET_Bank="getbank"



export const getBankBranches=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/bankdetails',{
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        method:'GET'
    })
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type:GET_Bank,
                payload:data
            })
        })
    }
}

export const setBankBranch=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/bankdetails/newbranch',data).then(response =>console.log(response));
        
    }
}

export const setBank=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/bankdetails/newbank',data).then(response =>console.log(response));
        
    }
}
