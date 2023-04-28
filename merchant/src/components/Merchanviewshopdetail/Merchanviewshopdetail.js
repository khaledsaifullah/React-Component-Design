import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Merchanviewshopdetail.css';


class Merchanviewshopdetail  extends Component {

    render() {

        return (
           <div className="merchanviewshopdetail-container">
                <div class="marchant-header-back">
                    <span>&lt;</span>
                    <span>Shop Details </span>
                </div>                

                <div className="marchant-viewshopdetail-form">
                    <form>
                        <div className="form-row">
                            <label>Shop Name </label>
                            <input type="text" name="shopname" placeholder="Duke Barber Shop" />
                        </div>
                        <div className="form-row">
                            <label>Contact Number </label>
                            <input type="tel" name="contactnumber" placeholder="+1 (416) 519-7046" />
                        </div>
                        <div className="form-row">
                            <label>Address </label>
                            <textarea  name="typeyourquery">
                               750 Spadina Ave, #3, Toronto, ON M5S 2T1
                            </textarea>                            
                        </div>
                        <div className="form-row form-row-submit">
                            {/*:<input type="submit" value="Save"  />*/}
                            <Link to="/" className="form-submitlink-techsupport">Save</Link>
                        </div>
                       
                         



                    </form>
                 </div>


		   </div>

        )
    }

}

export default Merchanviewshopdetail;





