import React from "react";
import { connect, connectAdvanced } from "react-redux";
import {bindActionCreators} from 'redux'
import { Button ,Table} from 'react-bootstrap';
import { deleteCustomer, editCustomer, getACustomer, getACustomerAccount, getCustomer, updateCustomer } from "../../redux/action/customer.action";

class ViewCustomer extends React.Component{

    constructor(props){
        super(props)
        this.data={}
        this.style={height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid',width:'100px'}
        if(this.props.isadmin)this.props.getCustomerData()
    }

    editData=(id)=>{
        this.data=this.props.customerCollection[id]
        this.props.updateCustomerData(this.data)
        this.props.history.push('/addcus')
    }

    deleteData=(id)=>{
        this.props.deleteCustomer(id);
        setTimeout(()=>{
            this.props.getCustomerData()
        },200
        )
        
    }
    viewAccounts=()=>{
        this.props.getACustomerAccount(this.props.customerCollection[0].cust_id)
        this.props.history.push('/account')
    }
    makeTransaction=()=>{
        this.props.history.push('/addtrans')
    }
    viewTransaction=()=>{
        this.props.getACustomerAccount(this.props.customerCollection[0].cust_id)
        this.props.history.push('/previoustransaction')
    }
    addAccount=()=>{
        this.props.history.push('/addacc')
    }

    goBack=()=>{
        this.props.history.go(-1)
    }

    render(){
        let{customerCollection,deleteCustomer}=this.props
        return(
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',width:'80%',marginLeft:'10%'}}>
                {
                    this.props.isadmin?
                    <Table striped bordered hover variant='warning'>
                        <thead>
                    <tr>
                        <th style={this.style}>Customer Id</th>
                        <th style={this.style}>name</th>
                        <th style={this.style}>place</th>
                        <th style={this.style}>phone</th>
                        <th style={this.style}>mail</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    customerCollection.map((res,key)=>(
                        <tr>
                            <td style={this.style}>{res.cust_id}</td>
                            <td style={this.style}>{res.cust_name}</td>
                            <td style={this.style}>{res.place}</td>
                            <td style={this.style}>{res.phone}</td>
                            <td style={this.style}>{res.mail}</td>
                            <td><Button  variant="warning" onClick={()=>this.editData(key)}>Edit Data</Button></td>
                            <td><Button  variant="danger" onClick={()=>this.deleteData(res.cust_id)}>Delete Data</Button></td>
                        </tr>
                    ))
                }
                </tbody>
                </Table>:
                <div style={{borderStyle:'solid',padding:'20px',textAlign:'center',backgroundColor:'cyan'}}>
                    <b>Coustomer ID :</b> {customerCollection[0].cust_id} <br /><br />
                    <b>Coustomer Name :</b> {customerCollection[0].cust_name} <br /><br />
                    <b> Place :</b> {customerCollection[0].place} <br /><br />
                    <b>Phone :</b> {customerCollection[0].phone} <br /><br />
                    <b>mail :</b> {customerCollection[0].mail} <br /><br />
                </div>
                }
                {
                    this.props.isadmin? <div><Button variant='primary' onClick={this.goBack}>Back</Button></div>:
                    <div>
                        <br /><br /><br /><br />
                        <Button variant="primary" onClick={this.viewAccounts}>View accounts</Button>
                        <Button onClick={this.makeTransaction}>make Transaction</Button>
                        <Button onClick={this.viewTransaction}>View Transactions</Button>
                        <Button onClick={this.addAccount}>Add Account</Button>
                    </div>
                }
            </div>
        )
    }
}
 
const mapStateToProps=(state)=>{
    return {
    customerCollection:state.customer.customer,
    isadmin:state.customer.admin
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getCustomerData:bindActionCreators(getCustomer,dispatch),
        getSingleCustomer:bindActionCreators(getACustomer,dispatch),
        deleteCustomer:bindActionCreators(deleteCustomer,dispatch),
        editCustomerData:bindActionCreators(editCustomer,dispatch),
        updateCustomerData:bindActionCreators(updateCustomer,dispatch),
        getACustomerAccount:bindActionCreators(getACustomerAccount,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomer)