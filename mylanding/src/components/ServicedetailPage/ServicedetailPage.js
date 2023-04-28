import React, { Component } from 'react';
import './ServicedetailPage.css';

import {Form, Input, Select, Button, Card, Row, Col, Tabs, Icon   } from 'antd';
import 'antd/dist/antd.css';
 
import headerbannerfive from './images/header-five.jpg';

import citizen from './images/citizen.png';


import filtericonsearch from './images/filter-icon-search.png';


import rearchicon from './images/rearch-icon.png';
import etsearchicon from './images/et-search.png';
import readmoreicon from './images/readmore-icon.png';
import leaficon from './images/leaf-icon.png';

import nmstlogoicontiny from './images/nmst-logo-tiny-icon.png';

import leaficonwhite from './images/leaf-icon-white.png';
import leaficonwhitelarge from './images/leaf-icon-white-large.png';

 
import tabtitlelogogranfellow from './images/tab-title-logo-granfellow.png';
import tabtitlelogoeticketig from './images/tab-title-logo-eticketig.png';
import tabtitlelogolicensngpermit from './images/tab-title-logo-licensngpermit.png';


const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Option } = Select;

  
class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerfive} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content">
				    <div className="grantfellowship-icon"><img src={nmstlogoicontiny} alt="icon" /></div>
					<div className="grantfellow-text-small ">National Museum of Science & Technology (NMST)</div>
					<h3 className="padding-top"> Special Research Grant </h3>
					<div  className="grant-fellowship-content-text">
						<p>
						Special Research Grant by the National Museum of Science & Technology (NMST) is Proactively visualize resource-leveling users rather than reliable portals. Synergistically revolutionize prospective deliverables through enterprise functionalities. Quickly scale optimal platforms through enabled technology. Seamlessly transform emerging.
						</p>
						<div  className="btn-link">
							<Button  className="applynow">Apply Now <img src={leaficonwhite} alt="icon" /> </Button>
						</div>
						<div  className="grantfellow-tiny-text">
							<p>Please make sure you have read all the requirements and other information here below</p>
						</div>
					</div>
				 </div>
				 
				 <div  className="service-content-area beforeapplying">
					<h3>BEFORE APPLYING</h3>
					<h4> The following eligibility requirements needs to met before the application </h4>
				 </div>
	             
				 <div  className="beforeapplying-content">
					   {/*start block*/} 
					   <div  className="beforeapplying-block">
							<div  className="beforeapplying-block-title">
								<h4>INSTRUCTIONS ON FORM FILL-UP</h4>
							</div>
							<div  className="beforeapplying-block-content">
							   <ul>
							      <li>1. Continually optimize professional services without client-focused services.</li>
								  <li>2. Dramatically reconceptualize pandemic architectures without turnkey e-services. </li>
								  <li>3. Completely actualize 2.0 e-business with enabled action items. </li>
							   </ul>
							</div>
					   </div>
					   {/*end block*/} 
					
					   {/*start block*/} 
					   <div  className="beforeapplying-block">
							<div  className="beforeapplying-block-title">
								<h4>REQUIRED DOCUMENTS </h4>
							</div>
							<div  className="beforeapplying-block-content">
							   <ul>
							      <li>1. The Document that is backing up your research initiative </li>
								  <li>2. An affirmation letter from the research authority. </li>
							   </ul>
							</div>
					   </div>
					   {/*end block*/} 
					
					   {/*start block*/} 
					   <div  className="beforeapplying-block">
							<div  className="beforeapplying-block-title">
								<h4>SERVICE DELIVERY DEADLINE </h4>
							</div>
							<div  className="beforeapplying-block-content">
							   <h4>1 Working Day </h4>
							   <ul>
							      <li>1. On each working day, applications received from 9am to 12pm will be completed the cycle within 3pm to 5pm that day. </li>
								  <li>2. On each working day, applications receied from 2pm to 5pm will be completed the cycle within 9am to 12pm on the next day. </li>
							   </ul>
							</div>
					   </div>
					   {/*end block*/} 
					
					   {/*start block*/} 
					   <div  className="beforeapplying-block">
							<div  className="beforeapplying-block-title">
								<h4>SERVICE FEE & PAYMENT METHOD </h4>
							</div>
							<div  className="beforeapplying-block-content">
							   <h4>৳50.00 </h4>
							   <ul>
							      <li>Payment can be done using Online Payment Gateway using this system. </li>
								  <li>For more details visit: <a href="#">Payment Options </a>	  </li>
							   </ul>
							</div>
					   </div>
					   {/*end block*/} 
					
					
				</div>
				 
				 
				 
				 
				 
				 
			    <div  className="btn-link large">
					<Button  className="applynow">Apply Now <img src={leaficonwhitelarge} alt="icon" /> </Button>
				</div>
				 
				 
				 
				 
				 
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





