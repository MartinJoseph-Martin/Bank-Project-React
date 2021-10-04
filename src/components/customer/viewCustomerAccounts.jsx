import React from "react";
import { connect, connectAdvanced } from "react-redux";
import {bindActionCreators} from 'redux'
import { deleteAccount, getCustomerAccount } from "../../redux/action/customer.action";
import { Button ,Table} from 'react-bootstrap';

class ViewCustomerAccounts extends React.Component{

    constructor(props){
        super(props)
        this.data={}
        this.style={height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid',width:'100px'}
        if(this.props.isadmin)this.props.getCustomerAccountData()
    }

    deleteAccount=(id,acc)=>{
        this.props.deleteAccount(id,acc)
        setTimeout(()=>{
            this.props.getCustomerAccountData()
        },100)
    }
    
    goBack=()=>{
        this.props.history.go(-1)
    }

    render(){
        let{customerCollection,deleteCustomer}=this.props
        return(
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'40px',width:'80%',marginLeft:'10%'}}>
                {
                    this.props.isadmin?
                    <Table striped bordered hover variant='info'>
                        <thead>
                    <tr>
                        <th style={this.style}>Cust_id</th>
                        <th style={this.style}>name</th>
                        <th style={this.style}>Bank Name</th>
                        <th style={this.style}>IFSC</th>
                        <th style={this.style}>BRANCH</th>
                        <th style={this.style}>ACC_NO</th>
                        <th style={this.style}>Account Type</th>
                        <th style={this.style}>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    customerCollection.map((res,key)=>(
                        <tr>
                            <td style={this.style}>{res.cust_id}</td>
                            <td style={this.style}>{res.cust_name}</td>
                            <td style={this.style}>{res.bank_name}</td>
                            <td style={this.style}>{res.ifsc_code}</td>
                            <td style={this.style}>{res.branch}</td>
                            <td style={this.style}>{res.acc_no}</td>
                            <td style={this.style}>{res.account_type}</td>
                            <td style={this.style}>{res.acc_balance}</td>
                            <td ><Button variant="danger" onClick={()=>this.deleteAccount(res.cust_id,res.acc_no)}>delete</Button></td>
                            
                            
                        </tr>
                    ))
                }
                </tbody>
                </Table> :
                <div style={{display:"flex",flexDirection:'row'}}>
                    {
                        customerCollection.map((res,key)=>(
                            <div style={{backgroundColor:'cyan',borderStyle:'solid',padding:'30px',marginRight:'30px'}}>
                                <h2>Account{key+1}</h2> <br />
                                <b>Bank Name:</b>{res.bank_name} <br />
                                <b>Branch Name:</b>{res.branch} <br />
                                <b>IFSC Code :</b>{res.ifsc_code} <br />
                                <b>Account Number:</b>{res.acc_no} <br />
                                <b>Balance:</b>{res.acc_balance} <br /><br />
                            </div>
                        ))
                    }
                </div>
                }
                <br />
                <Button variant='primary' onClick={this.goBack}>Back</Button>
            </div>
        )
    }
}
 
const mapStateToProps=(state)=>{
    return {
    customerCollection:state.customer.account,
    isadmin:state.customer.admin

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getCustomerAccountData:bindActionCreators(getCustomerAccount,dispatch),
        deleteAccount:bindActionCreators(deleteAccount,dispatch)
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomerAccounts)