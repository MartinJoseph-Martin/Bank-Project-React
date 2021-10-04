import React from "react";
import "./footer.css";

class Footer extends React.Component{

    render(){
        return(
            <div className="main-footer" style={{marginTop:"30px"}}>
            <div className="container">
              <div className="row">
                {/* Column1 */}
                <div className="col">
                <h6>Contact Us</h6>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h6>Terms and Conditions</h6>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h6>Privacy Policy</h6>
                </div>
                
              </div>
              <hr />
              <div className="row">
                <p >
                  &copy;{new Date().getFullYear()} MARTY SOFTWARES | All rights reserved 
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default Footer