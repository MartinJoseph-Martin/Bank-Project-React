import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import { Button , Table} from 'react-bootstrap';
import { getTransaction,getOnesTransaction } from "../../redux/action/transaction.action";


class ViewTransaction extends React.Component{

    constructor(props){
        super(props)
        this.state={
            acc_no:null,
            all:true
        }
        this.style={height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}
        this.props.getTransactionData()
    }

    getData=()=>{
        this.props.getdata(this.state.acc_no)
        this.setState({all:false})
    }

    goBack=()=>{
        this.props.history.go(-1)
    }

    render(){
        let{transactionCollection}=this.props
        return(
            <>
      
           
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',width:'80%',marginLeft:'10%'}}>
              <b>Account Number</b> <input type="number" onChange={(e)=>this.setState({acc_no:e.target.value})} />
              <div> <Button variant="dark" onClick={this.getData}>Get</Button> <Button variant="dark" onClick={this.props.getTransactionData}>Get All Transaction</Button> </div> <br />

                <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th style={this.style}>TransactionID</th>
                        <th style={this.style}>Acc_no</th>
                        <th style={this.style}>Amount</th>
                        <th style={this.style}>TransactionType</th>
                        <th style={this.style}>TransactionDate</th>
                        <th style={this.style}>benfACC</th>
                    </tr>
                </thead>
                <tbody>
                {
                    transactionCollection.map(res=>(
                        <tr>
                            <td style={this.style}>{res.t_id}</td>
                            <td style={this.style}>{res.acc_no}</td>
                            <td style={this.style}>{res.amount}</td>
                            <td style={this.style}>{res.t_name}</td>
                            <td style={this.style}>{res.t_date.substring(0,10)}</td>
                            <td style={this.style}>{res.benef_acc_no}</td>
                            
                        </tr>
                    ))
                }
                </tbody>
                </Table>
                <Button variant="primary" onClick={this.goBack}>Back</Button>
            </div>
            </>
        )
    }
}
 
const mapStateToProps=(state)=>{
     return {
     transactionCollection:state.transaction.transaction
     }
}

const mapDispatchToProps=(dispatch)=>{
     return {
       
        getTransactionData:bindActionCreators(getTransaction,dispatch),
        getdata:bindActionCreators(getOnesTransaction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewTransaction)