import React from "react";

import { Carousel } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { admin} from "../../redux/action/customer.action";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'


class Home extends React.Component {

    constructor(props){
        super(props)
        this.props.admin()
    }

    render() {
        return (
            <>
            <div style={{height:'400px'}}>
                <Carousel style={{margin:'0px'}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                            height='400px'
                        />
                        <Carousel.Caption>
                            <h3>NET BANKING</h3>
                            <p>Welcome to the new world of net banking</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            height='400px'
                        />

                        <Carousel.Caption>
                            <h3>OPEN BANKING</h3>
                            <p>Do your banking with your faviourite bank</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                            height='400px'
                        />

                        <Carousel.Caption>
                            <h3>SECURE BANKING</h3>
                            <p>Create accounts and make transaction in a secure way.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

        admin:bindActionCreators(admin,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Home)

