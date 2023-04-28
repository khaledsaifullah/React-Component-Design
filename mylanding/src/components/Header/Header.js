import React, { Component } from 'react';
import { Form, Select } from 'antd';

import './Header.css';
import companylogo from './images/companylogo.png';
 
 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}




class MyHeader  extends Component {


    render() {
        return (
            <header  className="header-container">
			    <div  className="header-top-content"> 
					<div className="header-top-content-body"> 
						<div  className="header-top-left"> 
						Everything is theoretically impossible until it is done
						</div>
						<div  className="header-top-right">
							<div  className="header-language">
								<Form.Item name="language-code">
									<Select defaultValue="English" style={{ width: 110 }} bordered={false}>
									  <Option value="english">English</Option>
									  <Option value="bengali">Bengali</Option>
									  <Option value="uk">UK</Option>
									</Select>
								</Form.Item>
							</div>
							<div  className="header-login-code">
								<a href="#">Login</a>
							</div>
						</div>
					</div>
				</div>
				<div  className="header-bottom-content">
					<div className="header-bottom-content-body">
						<div className="company-logo">
							<a href="#">
								<div className="company-logo-inner">
									<div className="company-logo-inner-left"><img src={companylogo} alt="companylogo" /></div>
									<div  className="company-logo-inner-right">
										<h1>Ministry of Sciene & Technology</h1>
										<h2>Government of the People’s Republic of Bangladesh</h2>
										<h1 className="hide">MoST</h1>
										<h2 className="hide">GoB</h2>
									</div>
								</div>
							</a>
						</div>


						<div   className="main-menu main-menu-desktop">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>


						<div className="left-menu">
							<input type="checkbox" value="" id="show-menu"/>
							<div id="show-menu" className="show-menu" htmlFor="show-menu">
								<div   className="main-menu">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">About Us</a></li>
										<li><a href="#">Services</a></li>
										<li><a href="#">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>



					</div>
				</div>
            </header>



        )
    }

}

export default MyHeader;




