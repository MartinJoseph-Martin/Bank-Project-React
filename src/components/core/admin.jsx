import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { admin } from "../../redux/action/customer.action";

class Admin extends React.Component{

    viewCustomer=()=>{
        this.props.admin()
        this.props.history.push('/viewcus')
    }
    viewCustomerAccount=()=>{
        this.props.admin()
        this.props.history.push('/account')
    }
    viewTransactions=()=>{
        this.props.history.push('/viewtrans')
    }
    viewBranches=()=>{
        this.props.history.push('/viewbank')
        
    }
    addBranch=()=>{
        this.props.history.push('/addbank')

    }

    render(){
        return(
            <div style={{marginLeft:'25%'}}>
             <Button variant="primary" style={{width:'700px',height:'75px'}} onClick={this.viewCustomer}>View Customers</Button><br />
             <Button variant="primary" style={{width:'700px',height:'75px'}} onClick={this.viewCustomerAccount}>View Customers Account</Button><br />
             <Button variant="primary" style={{width:'700px',height:'75px'}} onClick={this.viewTransactions}>View All Transactions</Button><br />
             <Button variant="primary" style={{width:'700px',height:'75px'}} onClick={this.viewBranches}>View Bank Branches</Button><br />
             <Button variant="primary" style={{width:'700px',height:'75px'}} onClick={this.addBranch}>Add Bank Branch</Button><br />

             </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        admin:bindActionCreators(admin,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Admin)
