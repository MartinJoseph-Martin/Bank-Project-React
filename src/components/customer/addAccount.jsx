import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getBankBranches } from "../../redux/action/bankdetails.action";
import { editCustomer, setCustomer, setOldCustomer, updateCustomer } from "../../redux/action/customer.action";
import { getAccountTypes, getBankNames } from "../../redux/action/normalize.action";
import { Button } from 'react-bootstrap';


class AddAccount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            acc_typeid: null,
            b_id: 1,
            cust_id: null,
            new_cust: true
        }
        this.props.getAccountTypes()
        this.props.getBankBranches()
        this.props.getBankNames()
    }

    saveData = () => {
        var a=window.confirm("Do you want to continue")
        if(a){
            this.props.addoldCustomer(this.state, this.state.cust_id)
            this.goBack()
        }
    }

    goBack=()=>{
        this.props.history.go(-1)
    }

    
    render() {
        let { accountTypeCollection,  bankBranchCollection } = this.props
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              
                
                        <div>
                       <b> cust_id </b> <input type="number" onChange={(event) => this.setState({ cust_id: event.target.value })} />{this.state.cust_id} <br />

                            <br /> <b> account_type : </b> <br />
                            {
                                accountTypeCollection.map(res => (
                                    <span>
                                        <input type="radio" name="type" id="t" onChange={() => this.setState({ acc_typeid: res.account_typeid })} /> {res.account_type}
                                    </span>
                                ))
                            }
                            {this.state.acc_typeid} <br /> <br />

                           <b> Bank and Branch : </b> <select name="t_type" onChange={(event) => this.setState({ b_id: event.target.value })}>
                                {
                                    bankBranchCollection.map(res => (
                                        <option value={res.b_id} >{res.bank_name},{res.branch}</option>
                                    )
                                    )
                                }
                            </select>{this.state.b_id} <br /> <br />
                        </div>
                

                <Button variant="dark" onClick={this.saveData}>Add Account</Button> <br /> <br /> <br /> <br />
                <Button variant='primary' onClick={this.goBack}>Back</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accountTypeCollection: state.normalize.accounttypes,
        bankBranchCollection: state.bankBranches,
        banknameCollection: state.normalize.banknames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addoldCustomer: bindActionCreators(setOldCustomer, dispatch),
        getBankBranches: bindActionCreators(getBankBranches, dispatch),
        getBankNames: bindActionCreators(getBankNames, dispatch),
        getAccountTypes: bindActionCreators(getAccountTypes, dispatch),


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddAccount)