import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Merchantechsupport.css';


class Merchantechsupport  extends Component {

    render() {

        return (
           <div className="merchantechsupport-container">
                <div class="marchant-header-back">
                    <span>&lt;</span>
                    <span>Technical Support </span>
                </div>                

                <div className="marchant-technicalsupport-form">
                    <form>
                        <div className="form-row">
                            <label>Type your query</label>
                            <textarea  name="typeyourquery"> </textarea>                            
                        </div>
                        <div className="form-row form-row-submit">
                            {/*end:<input type="submit" value="Send"  />*/}
                            <Link to="/merchantechappointment" className="form-submitlink-techsupport">Next</Link>
                        </div>
                        <div className="form-row">
                            <div className="form-ortext">OR</div>
                        </div>
                        
                        <div className="form-row callclient-support">
                            <p>Call Client Support at  </p>
                            <p>+1 (437) 228-7263 (Nikhil Pawar)  </p>
                        </div>



                    </form>
                 </div>


		   </div>

        )
    }

}

export default Merchantechsupport;





