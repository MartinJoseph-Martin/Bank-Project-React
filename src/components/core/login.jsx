import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getACustomer, toggleAdmin } from "../../redux/action/customer.action";
import { Button } from 'react-bootstrap';

class Login extends React.Component{

    constructor(props){
        super()
        this.state={
            cust_id:null,
            password:null,
            error:""
        }
    }
    login=()=>{
        this.props.getACustomerData(this.state.cust_id)
        setTimeout(()=>{
            if(this.props.customerCollection.length!=0){
            if(this.state.password==this.props.customerCollection[0].password){
                this.setState({error:""})
                this.props.notAdmin()
                this.props.history.push('/viewcus')
                
            }
            else{
                this.setState({error:"invalid cust id or password"})
            }
        }
            else{
                this.setState({error:"invalid cust id or password"})
            }
        },100)
        
    }
    adminAccess=()=>{
        this.props.history.push('/admin')
    }
    render(){
        return(
            
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'230px'}}>
           <b> cust ID</b> <input type="number" style={{width:'300px'}} onChange={(event)=>this.setState({cust_id:event.target.value})} /> 
           <b> Password</b>  <input type="password" style={{width:'300px'}} onChange={(event)=>this.setState({password:event.target.value})}/> 
            <div style={{color:'red'}}> {this.state.error} </div>
            <Button variant="dark" style={{width:'300px'}} onClick={this.login}>login</Button><br /><br />
            

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
        getACustomerData:bindActionCreators(getACustomer,dispatch),
        notAdmin:bindActionCreators(toggleAdmin,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)