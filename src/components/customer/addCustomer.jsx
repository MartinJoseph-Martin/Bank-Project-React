import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getBankBranches } from "../../redux/action/bankdetails.action";
import { editCustomer, getCustomer, setCustomer, setOldCustomer, updateCustomer } from "../../redux/action/customer.action";
import { getAccountTypes, getBankNames } from "../../redux/action/normalize.action";
import { Button,Alert } from 'react-bootstrap';


class AddCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cust_name: this.props.editData.cust_name ? this.props.editData.cust_name : "",
            place: this.props.editData.place ? this.props.editData.place : "",
            phone: this.props.editData.phone ? this.props.editData.phone : null,
            mail: this.props.editData.mail ? this.props.editData.mail : "",
            password: this.props.editData.password ? this.props.editData.password : "",
            acc_typeid: null,
            b_id: 1,
            cust_id: null,
            new_cust: true,
            success:false
        }
        this.props.getAccountTypes()
        this.props.getBankBranches()
        this.props.getBankNames()
    }

    saveData = () => {
        var a=window.confirm("Do you want to continue")
        if(a){
            if (this.state.new_cust) {
                this.props.addnewCustomer({ cust_name: this.state.cust_name, place: this.state.place, phone: this.state.phone, mail: this.state.mail, password: this.state.password, acc_typeid: this.state.acc_typeid, b_id: this.state.b_id, acc_balance: 0, acc_status: 1 })
    
            }
            else {
                this.props.addoldCustomer(this.state, this.state.cust_id)
            }
            this.clearForm()
            setTimeout(()=>{
                this.props.getCustomer()
                this.setState({success:true})
            },200)
            setTimeout(()=>{
                this.setState({success:false})
            },4000)
        }

    }

    clearForm=()=>{
        this.setState({
            cust_name: "",
            place:  "",
            phone: '',
            mail:  "",
            password:  "",
            acc_typeid: null,
            b_id: 1,
            cust_id: null,
            new_cust: true
        })
    }

    editData = () => {
        this.props.editCustomer(this.state, this.props.editData.cust_id)
        this.props.updateCustomer({})
        this.props.history.push('/viewcus')
    }

    goBack = () => {
        this.props.history.go(-1)
    }

    render() {
        let { accountTypeCollection, editData, customerCollection, bankBranchCollection } = this.props
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {
                    this.state.new_cust ? <div>


                       <b> Name</b> <br /> <input type="text" value={this.state.cust_name} onChange={(event) => this.setState({ cust_name: event.target.value })} />{this.state.cust_name} <br />

                       <b> Place </b> <br /> <input type="text" value={this.state.place} onChange={(event) => this.setState({ place: event.target.value })} />{this.state.place} <br />

                       <b> Phone </b> <br /> <input type="number" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} />{this.state.phone} <br />

                       <b> mail </b> <br /> <input type="text" value={this.state.mail} onChange={(event) => this.setState({ mail: event.target.value })} />{this.state.mail} <br />

                       <b> password </b> <br /> <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} /> <br />
                    </div>
                        :
                        <div>
                            cust_id <input type="number" onChange={(event) => this.setState({ cust_id: event.target.value })} />{this.state.cust_id} <br />
                        </div>
                }


                {
                    editData.cust_id ? <div></div> :
                        <div>
                            <br /> <b> account_type : </b> 
                            {
                                accountTypeCollection.map(res => (
                                    <span>
                                        <input type="radio" name="type" id="t" onChange={() => this.setState({ acc_typeid: res.account_typeid })} /> {res.account_type}
                                    </span>
                                ))
                            }
                            {this.state.acc_typeid} <br /> <br />

                          <b>  Bank and Branch : </b>  <select name="t_type" onChange={(event) => this.setState({ b_id: event.target.value })}>
                                {
                                    bankBranchCollection.map(res => (
                                        <option value={res.b_id} >{res.bank_name},{res.branch}</option>
                                    )
                                    )
                                }
                            </select>{this.state.b_id} <br /> <br />
                        </div>
                }

                {
                    editData.cust_id ? <div><Button variant="dark" onClick={this.editData}>Update</Button> <Button variant='primary' onClick={this.goBack}>Back</Button></div> : <Button variant="dark" onClick={this.saveData}>save</Button>
                }
                {
                     
                        this.state.success ? <Alert variant='success'>
                            Account Created : Your customer ID {customerCollection[customerCollection.length-1].cust_id}
                        </Alert> : <div></div>
                    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accountTypeCollection: state.normalize.accounttypes,
        customerCollection: state.customer.customer,
        editData: state.customer.editData,
        bankBranchCollection: state.bankBranches,
        banknameCollection: state.normalize.banknames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addnewCustomer: bindActionCreators(setCustomer, dispatch),
        addoldCustomer: bindActionCreators(setOldCustomer, dispatch),
        getAccountTypes: bindActionCreators(getAccountTypes, dispatch),
        editCustomer: bindActionCreators(editCustomer, dispatch),
        updateCustomer: bindActionCreators(updateCustomer, dispatch),
        getBankBranches: bindActionCreators(getBankBranches, dispatch),
        getBankNames: bindActionCreators(getBankNames, dispatch),
        getCustomer:bindActionCreators(getCustomer,dispatch)


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)