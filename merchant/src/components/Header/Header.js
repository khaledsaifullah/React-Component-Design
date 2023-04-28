import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Header.css';

import companylogo from './images/companylogo.png';
import mobilebar from './images/mobilebar.png';
import mobilemenu from './images/mobilemenu.png';
import listarrow from './images/listarrow.png';


class MyHeader  extends Component {


    render() {

const handleHeadermenu = (e) => {
	if(document.getElementsByClassName("header-mobilemenu-content")[0].className.length==25){
			document.getElementsByClassName("header-mobilemenu-content")[0].classList.add('show');
			document.getElementsByClassName("App")[0].classList.add('overlay');
		}
		else if(document.getElementsByClassName("header-mobilemenu-content")[0].className.length>25){
		document.getElementsByClassName("header-mobilemenu-content")[0].classList.remove('show')  ; 
		document.getElementsByClassName("App")[0].classList.remove('overlay');      
		}
};


        return (
            <header  className="header-container">				
				<div className="header-inner-section"> 
					<div className="header-leftpart">
					<Link to="/"><img src={companylogo} alt="companylogo" /></Link>
					</div>
					<div className="header-middlepart">DUKE</div>
					<div className="header-rightpart">
					  <span className="header-mobilemenu">
						<a href="javascript:void(0);" className="mobilemenu" onClick={handleHeadermenu}><img src={mobilemenu} alt="mobilemenu" /></a>
					  </span>

					</div>

					<div className="header-mobilemenu-content">
						<div className="header-mobilemenu-content-inner">
						    <div className="header-mobilemenu-link">
								<Link to="/merchanviewshopdetail">View shop details <img src={listarrow} alt="listarrow" /></Link>
								<Link to="/merchantechappointment">Technical support <img src={listarrow} alt="listarrow" /></Link>
							</div>
							<a href="javascript:void(0);" className="logoutlink-header" >Logout</a>
						</div>
					</div>


				</div>
            </header>



        )
    }

}

export default MyHeader;




