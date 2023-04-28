import React, { Component } from 'react';
import './SeekerPage.css';

import {Form, Input, Select, Button, Card, Row, Col, Tabs  } from 'antd';
import 'antd/dist/antd.css';
 
import headerbannerthree from './images/header-three.jpg';

import grantfellowicon from './images/grant-fellow-icon.png';


import filtericonsearch from './images/filter-icon-search.png';


import rearchicon from './images/rearch-icon.png';
import etsearchicon from './images/et-search.png';
import readmoreicon from './images/readmore-icon.png';
import leaficon from './images/leaf-icon.png';


import tabtitlelogonmst from './images/tab-title-logo-nmst.png';
import tabtitlelogobansdoc from './images/tab-title-logo-bansdoc.png';
import tabtitlelogomost from './images/tab-title-logo-most.png';
import tabtitlelogobcsir from './images/tab-title-logo-bcsir.png';
import tabtitlelogobricm from './images/tab-title-logo-bricm.png';


 import citizen from './images/citizen.png';

 
 
 

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Option } = Select;

  
class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerthree} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content">
				    <div className="grantfellowship-icon"><img src={citizen} alt="citizen" /></div>
					<h3>Services for Citizen </h3>
					<div  className="grant-fellowship-content-text">
						<p>All the services that are targeted to all the general citizen of Bangladesh can be found here in this page. The services targetted to general citizen are mostly low cost services that can be availed by any citizen of Bangladesh.</p>
					</div>
				 </div>
				 
				 <div  className="service-content-area">
					<h3>SERVICES</h3>
					<h4> The service can be availed from the following ogranizations with their own varities </h4>
					<div  className="service-tab-content">
						<Tabs onChange={callback} type="card">
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> </span><span className="tab-title-name">All</span></span>}  key="1">
							  <div className="service-tab-title">
								<h4>National Museum of Science & Technology (NMST) </h4>
							  </div>
							  <div className="service-tab-filter">
								<Row gutter={[16, 16]}>
									<Col xs={12} md={10}>
										<div className="filter-block-input">
											<Form.Item name="licence_number " >
												<Input placeholder="Type the Service to Filter... " />
											</Form.Item>		
										</div>
									</Col>
									<Col xs={12} md={10}>
										<div className="serviceseeker-block-input">
											<Form.Item  name="gender">
												<Select placeholder="Choose your type" >
													<Option value={"Male"}>Male </Option>
													<Option value={"Female"}>Female</Option>
												</Select>
											</Form.Item>	
										</div>
									</Col>
									<Col xs={12} md={4}>
										<div className="serviceseeker-btn">
											<Button><img src={filtericonsearch} alt="filtericonsearch" /> Filter</Button>
										</div>
									</Col>
								</Row>		
							  </div>
							  
							  <div  className="tab-data-content">
								<div  className="tab-data-row">
									<div  className="tabdata-picture">
										<div  className="tabdata-picture-box"><img src={rearchicon} alt="rearchicon" /> </div>
									</div>
									<div  className="tabdata-text">
										<div className="tabdata-text-small">National Museum of Science & Technology (NMST) </div>
										<h3>Special Research Grant</h3>
										<p>Special Research Grant by the Bangladesh Atomic Energy Commission (BAEC)
										is Proactively visualize resource-leveling users rather than reliable portals. 
										Synergistically revolutionize prospective deliverables through enterprise 
										functionalities. Quickly scale optimal platforms through enabled technology. 
										Seamlessly transform emerging.</p>	
									</div>
									<div  className="tabdata-btn">
										<Button  className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
										<Button  className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
									</div>
								</div>

								<div  className="tab-data-row">
									<div  className="tabdata-picture">
										<div  className="tabdata-picture-box"><img src={etsearchicon} alt="rearchicon" /> </div>
									</div>
									<div  className="tabdata-text">
									    <div className="tabdata-text-small">National Museum of Science & Technology (NMST) </div>
										<h3>Grant Application for R&D Project </h3>
										<p>Grant Application for R&D Project sanctioned by the Bangladesh Atomic Energy Commission (BAEC) is Proactively visualize resource-leveling users rather than reliable portals.</p>	
									</div>
									<div  className="tabdata-btn">
										<Button  className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
										<Button  className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
									</div>
								</div>



							  </div>
							  
							  
							  
							</TabPane>
							
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogonmst} alt="logo" /></span><span className="tab-title-name">NMST</span></span>} key="2">
							  Content of Tab Pane 2
							</TabPane>
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobansdoc} alt="logo" /></span><span className="tab-title-name">BANSDOC</span></span>} key="3">
							  Content of Tab Pane 3
							</TabPane>
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogomost} alt="logo" /></span><span className="tab-title-name">MoST</span></span>} key="4">
							  Content of Tab Pane 4
							</TabPane>
							
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobcsir} alt="logo" /></span><span className="tab-title-name">BCSIR</span></span>} key="5">
							  Content of Tab Pane 5
							</TabPane>
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobricm} alt="logo" /></span><span className="tab-title-name">BRiCM</span></span>} key="6">
							  Content of Tab Pane 6
							</TabPane>
						</Tabs>
					</div>

				 </div>
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





