import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { admin } from "../../redux/action/customer.action";

class Head extends React.Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "rgb(41, 39, 39)", color: "white", textAlign: 'center', fontSize: '50px' , padding:'5px'}}>
                  <h1 ><b>BANK BANG</b></h1>
                  <h6>Make Your Banking Easier</h6>
                </div>
                
                <Navbar bg="dark" variant="dark" style={{ marginTop: '0' }}>
                    <Container>
                        <Navbar.Brand><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><b>Home</b></Link></Navbar.Brand>
                        {this.props.isadmin ?
                            <Nav className="me-auto">
                                <Nav.Link><Link style={{ color: 'white', textDecoration: 'none' }} to='/login'><b>User Login</b></Link></Nav.Link>
                                <Nav.Link><Link to="/addcus" style={{ color: 'white', textDecoration: 'none' }}><b>User Registration</b></Link></Nav.Link>
                                <Nav.Link><Link to='/admin' style={{ color: 'white', textDecoration: 'none' }}><b>Admin</b></Link></Nav.Link>
                            </Nav> :
                            <Nav className="me-auto">
                            <Nav.Link ><Link style={{ color: 'white', textDecoration: 'none',textAlign:'left' }} to='/' ><b>Logout</b></Link></Nav.Link>
                           
                             </Nav>
                        }
                    </Container>
                </Navbar>

                <br /><br /><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isadmin: state.customer.admin
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        admin:bindActionCreators(admin,dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Head)

