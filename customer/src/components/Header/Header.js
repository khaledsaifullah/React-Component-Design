import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Header.css';

import companylogo from './images/companylogo.png';
import mobilebar from './images/mobilebar.png';
import carticon from './images/carticon.png';


class MyHeader  extends Component {

    render() {
        return (
            <header  className="header-container">				
				<div className="header-inner-section"> 
					<div className="header-leftpart">
					<Link to="/"><img src={companylogo} alt="companylogo" /></Link>
					</div>
					<div className="header-middlepart">DUKE</div>
					<div className="header-rightpart">
					  <span className="header-carticon">
						<span className="header-carticon-amount"></span>	
						<img src={carticon} alt="carticon" /> 
					  </span>

					</div>
				</div>
				
            </header>



        )
    }

}

export default MyHeader;




