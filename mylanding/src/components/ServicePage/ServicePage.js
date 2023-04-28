import React, { Component } from 'react';
import './ServicePage.css';

import {Form, Input, Select, Button, Card, Row, Col, Tabs   } from 'antd';
import 'antd/dist/antd.css';
 
import headerbannerfour from './images/header-four.jpg';

import citizen from './images/citizen.png';


import filtericonsearch from './images/filter-icon-search.png';


import rearchicon from './images/rearch-icon.png';
import etsearchicon from './images/et-search.png';
import readmoreicon from './images/readmore-icon.png';
import leaficon from './images/leaf-icon.png';


import specialresearchgranticon from './images/special-research-grant.png';

import baecicon from './images/baec-icon.png';
import baeraicon from './images/baera-icon.png';
import bnsdocicon from './images/bnsdoc-icon.png';
import nmsticon from './images/nmst-icon.png';

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Option } = Select;

  
class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerfour} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content">
				    <div className="grantfellowship-icon"><img src={specialresearchgranticon} alt="icon" /></div>
					<h3>Special Research Grant </h3>
					<div  className="grant-fellowship-content-text">
						<p>Monotonectally enhance intuitive best practices before wireless bandwidth. Authoritatively architect dynamic manufactured products through sticky sources. Interactively aggregate integrated opportunities via fully researched total linkage.</p>
					</div>
				 </div>
				 
				 <div  className="service-content-area">
					<h3>AFFILIATED ORGANIZATIONS</h3>
					<h4>The service can be availed from the following ogranizations with their own varities</h4>
					<div  className="affiliated-org-content">
						 <div  className="affiliated-org-heading">
							<div className="serch-filter-input">
								<Form.Item name="licence_number " >
									<Input placeholder="Type Organization to Filter..." />
								</Form.Item>		
							</div>
							<div className="serviceseeker-btn">		
								<Button><img src={filtericonsearch} alt="filtericonsearch" /> Filter</Button>
							</div>
						 </div>
						 <div  className="affiliated-org-body">
							<div  className="affiliated-org-body-inner">	
								<div className="affiliated-block">
									<ul>
										<li><a href="#"  target="_blank">
										   <label><img src={baecicon} alt="icon" /> </label>
										   <span> Bangladesh Atomic Energy Commission (BAEC) </span> 			
										</a></li>
									</ul>
								</div>	
								<div className="affiliated-block">
									<ul>
										<li><a href="#"  target="_blank">
										   <label><img src={bnsdocicon} alt="icon" /> </label>
										   <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span> 			
										</a></li>
									</ul>
								</div>	
								<div className="affiliated-block">
									<ul>
										<li><a href="#"  target="_blank">
										   <label><img src={nmsticon} alt="icon" /> </label>
										   <span>National Museum of Science & Technology (NMST) </span> 			
										</a></li>
									</ul>
								</div>	
								<div className="affiliated-block">
									<ul>
										<li><a href="#"  target="_blank">
										   <label><img src={baeraicon} alt="icon" /> </label>
										   <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span> 			
										</a></li>
									</ul>
								</div>	
								 	
							</div>
							
						 </div>
					</div>

				 </div>
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





