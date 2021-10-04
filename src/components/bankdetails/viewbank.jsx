import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import { getBankBranches } from "../../redux/action/bankdetails.action";
import { Button ,Table} from 'react-bootstrap';



class ViewBank extends React.Component{

    constructor(props){
        super(props)
        this.style={height:'25px',borderWidth:"2px", borderColor:"#aaaaaa", borderStyle:'solid',width:'100px',height:'50px'}
        this.props.getBankData()
    }

    goBack=()=>{
        this.props.history.go(-1)
    }

    render(){
        let{bankCollection}=this.props
        return(
            <div style={{display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',width:'60%',marginLeft:'20%'}}>
                <Table striped bordered hover variant='dark'> 
                <thead>
                    <tr style={{height:'25px'}}>
                        <th style={this.style}>Bank Name  </th>
                        <th style={this.style}>Ifsc code  </th>
                        <th style={this.style}>Branch   </th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    bankCollection.map(res=>(
                        <tr style={{height:'25px'}}>
                            <td style={this.style}>{res.bank_name}</td>
                            <td style={this.style}>{res.ifsc_code}</td>
                            <td style={this.style}>{res.branch}</td>
                            
                        </tr>
                    ))
                }
                </tbody>
                </Table>
                <Button variant='primary' onClick={this.goBack}>Back</Button>
            </div>
        )
    }
}
 
const mapStateToProps=(state)=>{
    return {
    bankCollection:state.bankBranches
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getBankData:bindActionCreators(getBankBranches,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewBank)