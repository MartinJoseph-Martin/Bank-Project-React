import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { getTransactionType } from "../../redux/action/normalize.action";
import { Button, Alert } from 'react-bootstrap';
import { setTransaction } from "../../redux/action/transaction.action";


class AddTransaction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            t_type: "d",
            amount: null,
            acc_no: null,
            t_date: "",
            benf_acc_no: null,
            success:false
        }
        this.props.getTransactionType()
    }

    saveData = () => {

        var a = window.confirm("Confirm Transactyion")
        if (a) {
            this.props.addtransaction({ t_type: this.state.t_type, acc_no: this.state.acc_no, amount: this.state.amount, benef_acc_no: this.state.benf_acc_no })
            this.setState({success:true})
            setTimeout(()=>{
                this.setState({success:false})
            },2000)

        }

    }

    goBack = () => {
        this.props.history.go(-1)
    }

    render() {
        let { transactionTypeCollection } = this.props

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <b> Transaction Type </b> <br /><br /> <select name="t_type" onChange={(event) => this.setState({ t_type: event.target.value })}>
                    {
                        transactionTypeCollection.map(res => (
                            <option value={res.t_type} >{res.t_name}</option>

                        ))
                    }
                </select> <br />
              <b>  Account Number </b> <input type="number" onChange={(event) => this.setState({ acc_no: event.target.value })} />{this.state.acc_no}
               <b> Amount </b> <input type="number" onChange={(event) => this.setState({ amount: event.target.value })} />{this.state.amount} <br />

                {
                    this.state.t_type == 't' ?
                        <div>
                         <b>   Benef Account Number </b> <input type="number" onChange={(event) => this.setState({ benf_acc_no: event.target.value })} />{this.state.benf_acc_no} <br />
                        </div>
                        : <div></div>
                }


                <Button variant="dark" onClick={this.saveData}>Proceed</Button>
                <br /><br />

                {
                    this.state.success ? <Alert variant='success'>
                        Transaction successful
                    </Alert> : <div></div>
                }

                <br /><br />
                <Button variant='primary' onClick={this.goBack}>Back</Button>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactionTypeCollection: state.normalize.transactiontype
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtransaction: bindActionCreators(setTransaction, dispatch),
        getTransactionType: bindActionCreators(getTransactionType, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)