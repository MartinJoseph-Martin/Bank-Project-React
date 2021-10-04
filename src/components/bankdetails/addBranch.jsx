import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { setBank, setBankBranch } from "../../redux/action/bankdetails.action";
import { getBankNames } from "../../redux/action/normalize.action";
import { Button,Alert } from 'react-bootstrap';



class AddBankBranch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bank_nameid: 1,
            ifsc_code: "",
            branch: "",
            new_bank: false,
            bank_name: "",
            success:false
        }
        this.props.getBankNames()
    }

    saveData = () => {
        var a = window.confirm("Do you want to add Branch")
        if (a) {
            this.props.addBankBranch(this.state)
            this.setState({success:true})
            setTimeout(()=>{
                this.setState({success:false})
            },2000)
            this.clearForm()
        }
    }
    clearForm=()=>{
        this.setState({
            bank_nameid: 1,
            ifsc_code: "",
            branch: "",
            new_bank: false,
            bank_name: "",
        })
    }
    addBank = () => {
        this.props.addNewBank({ bank_name: this.state.bank_name })
        setTimeout(() => {
            this.setState({ new_bank: false })
        }, 100)
    }

    goBack = () => {
        this.props.history.go(-1)
    }

    render() {
        let { banknameCollection } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginBottom:'100px' }}>
                {this.state.new_bank ? <div>
                    Bank Name  <input type="text " onChange={(event) => this.setState({ bank_name: event.target.value })} />
                    <Button variant="dark" onClick={this.addBank}>ADD</Button>
                </div> :
                    <div>
                        Bank Name <br /> <select style={{ width: '300px' }} name="t_type" onChange={(event) => this.setState({ bank_nameid: event.target.value })}>
                            {
                                banknameCollection.map(res => (
                                    <option value={res.bank_nameid} >{res.bank_name}</option>
                                )
                                )
                            }
                        </select> {this.state.bank_nameid}<br />

                        IFSC CODE <br /> <input type="text" style={{ width: '300px' }} onChange={(event) => this.setState({ ifsc_code: event.target.value })} />{this.state.ifsc_code} <br />

                        BRANCH <br /> <input type="text" style={{ width: '300px' }} onChange={(event) => this.setState({ branch: event.target.value })} />{this.state.branch} <br />

                        <Button variant="dark" onClick={this.saveData}>save</Button><Button variant="dark" onClick={() => this.setState({ new_bank: true })}>Add New Bank</Button>
                    </div>
                }

                {

                    this.state.success ? <Alert variant='success'>
                        Branch Added
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
        banknameCollection: state.normalize.banknames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBankBranch: bindActionCreators(setBankBranch, dispatch),
        getBankNames: bindActionCreators(getBankNames, dispatch),
        addNewBank: bindActionCreators(setBank, dispatch)

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddBankBranch)