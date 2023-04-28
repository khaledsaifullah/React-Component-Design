import React, { Component } from 'react';
import './OrganizationPage.css';

import {Form, Input, Select, Button, Card, Row, Col, Tabs, Icon   } from 'antd';
import 'antd/dist/antd.css';
 
import headerbannerfive from './images/header-five.jpg';

import citizen from './images/citizen.png';


import filtericonsearch from './images/filter-icon-search.png';


import rearchicon from './images/rearch-icon.png';
import etsearchicon from './images/et-search.png';
import readmoreicon from './images/readmore-icon.png';
import leaficon from './images/leaf-icon.png';

import nmstlogoicon from './images/nmst-logo-icon.png';

 
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
				    <div className="grantfellowship-icon"><img src={nmstlogoicon} alt="NMST" /></div>
					<h3>National Museum of Science & Technology (NMST) </h3>
					<div  className="grant-fellowship-content-text">
						<p>National Museum of Science and Technology (NMST) in Dhaka, Bangladesh was founded on April 26, 1965 by the Pakistani government and became a part of Bangladesh's Ministry of Science and Technology following the Bangladesh Liberation War. It was first based in the Dhaka Public Library, and moved a number of times before its permanent home was completed in 1981. The NMST serves as Bangladesh's only science museum and 
						organizes science education activities at a national level.	</p>
					</div>
				 </div>
				 
				 <div  className="service-content-area">
					<h3>SERVICES</h3>
					<h4>All the services under each component can be availed individually </h4>
					<div  className="service-tab-content">
						<Tabs onChange={callback} type="card">
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogogranfellow} alt="logo" /> </span><span className="tab-title-name">Grants/Fellowship</span></span>}  key="1">
							  <div className="service-tab-title">
								<h4>National Museum of Science & Technology (NMST)</h4>
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
									    <div class="tabdata-text-small">National Museum of Science &amp; Technology (NMST) </div>
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
									    <div class="tabdata-text-small">National Museum of Science &amp; Technology (NMST) </div>
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
							
							
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> <img src={tabtitlelogoeticketig} alt="logo" /> </span><span className="tab-title-name"> E-Ticketing</span></span>}  key="2">
							  Content of Tab Pane 2
							</TabPane>
							<TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> <img src={tabtitlelogolicensngpermit} alt="logo" /> </span><span className="tab-title-name"> E-Ticketing</span></span>}  key="3">
							  Content of Tab Pane 3
							</TabPane>
							 
						</Tabs>
						
					</div>

				 </div>
				 
				 
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





