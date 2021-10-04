import { Button,Table } from 'react-bootstrap';
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPreviousTransaction} from "../../redux/action/transaction.action";


class ViewPreviousTransaction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            acc_no: null,
            from: "",
            to: ""
        }
        this.style={height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid'}
    }
    getData = () => {
        this.props.getTransactionData(this.state.acc_no, this.state.from, this.state.to)
    }

    goBack=()=>{
        this.props.history.go(-1)
    }

    render() {
        let { transactionCollection } = this.props
        return (
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div >
                   <b> Account number: </b> <br /> <input type="number" style={{width:'200px'}} onChange={(event) => this.setState({ acc_no: event.target.value })} />{this.state.acc_no} <br />
                   <b> From Date </b> <br /> <input type="date" style={{width:'200px'}} onChange={(event) => this.setState({ from: event.target.value })} />{this.state.from} <br />
                   <b> To Date </b> <br /><input type="date" style={{width:'200px'}} onChange={(event) => this.setState({ to: event.target.value })} />{this.state.to} <br /><br />
                   
                    <Button variant="dark" onClick={this.getData}>View Transaction</Button> <br /><br />
                </div>
                {
                    transactionCollection[0]?
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
                        transactionCollection.map(res => (
                            <tr>
                                <td style={this.style}>{res.t_id}</td>
                                <td style={this.style}>{res.acc_no}</td>
                                <td style={this.style}>{res.amount}</td>
                                <td style={this.style}>{res.t_name}</td>
                                <td style={this.style}>{res.t_date.substring(0, 10)}</td>
                                <td style={this.style}>{res.benf_acc_no}</td>

                            </tr>
                        ))
                    }
                    </tbody>
                </Table> :
                <div></div>
                }
                <br /><br /><br />   <Button variant='primary' onClick={this.goBack}>Back</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactionCollection: state.transaction.previous
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getTransactionData: bindActionCreators(getPreviousTransaction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPreviousTransaction)