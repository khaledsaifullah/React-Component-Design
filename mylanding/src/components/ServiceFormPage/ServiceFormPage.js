import React, { Component } from 'react';
import './ServiceFormPage.css';

import {Form, Input, Select, Button, Card, Row, Col, Tabs, Icon, Collapse    } from 'antd';
import 'antd/dist/antd.css';
 
import { PlusCircleOutlined, MinusCircleOutlined, CheckOutlined    } from '@ant-design/icons';
 
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



 
const { Option } = Select;



const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}


  
class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerfive} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content">
				    <div className="grantfellowship-icon"><img src={nmstlogoicontiny} alt="icon" /></div>
					<div className="grantfellow-text-small"> National Museum of Science & Technology (NMST) </div>
					<h3 className="padding-top"> Special Research Grant </h3>
				 </div>
				 
				 <div  className="prerequisite-instruction">
				       <div  className="collapse-prerequisite">
					   <Collapse bordered={false} 
							defaultActiveKey={['1']}
							expandIcon={({ isActive }) => isActive ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
							className="site-collapse-custom-collapse"
						  >
							<Panel header="PRE-REQUISITES & INSTRUCTIONS" key="1">
							  <div  className="prerequisite-content">
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
							  </div>
							  
							  <div  className="prerequisite-content">
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
							  
							</Panel>
							
							<Panel header="This is panel header 2" key="2">
							  <p>2222222222</p>
							</Panel>
							<Panel header="This is panel header 3" key="3">
							  <p>333333333333</p>
							</Panel>					   
					   </Collapse>
					   </div>
					   
					   
					  {/*start:stepof block*/} 
					  <div  className="stepof-prerequisite"> 
						<div  className="stepof-prerequisite-header">
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"><CheckOutlined /></span>
								<span className="stepof-check-number">Part 1 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"> </span>
								<span className="stepof-check-number">Part 2 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"> </span>
								<span className="stepof-check-number">Part 3 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"> </span>
								<span className="stepof-check-number">Part 4 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"> </span>
								<span className="stepof-check-number">Part 5 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						    <a className="stepof-check-link" href="javascript:void(0)">
								<span className="stepof-check-icon"> </span>
								<span className="stepof-check-number">Part 1 </span>
								<span className="stepof-check-name">General Info. </span>
							</a>
						</div>
						
						<div  className="stepof-prerequisite-body">
						   	<Form layout="vertical">
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="House & Raod No." name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="Village" name="village_name " >
											<Input />
										</Form.Item>		
									</Col>
								</Row>
								
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="Post Office" name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="Upazila/Thana " name="gender">
											<Select >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
								</Row>
								
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="District" name="gender">
											<Select >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="Division" name="gender">
											<Select >
												<Option value={"Male"}>Male </Option>
												<Option value={"Female"}>Female</Option>
											</Select>
										</Form.Item>
									</Col>
								</Row>
								
								 
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="Telephone" name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="Fax" name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
								</Row>
								
								 
								<Row gutter={[16, 16]}>
									<Col xs={24} md={12}>
										<Form.Item label="Mobile" name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
									<Col xs={24} md={12}>
										<Form.Item label="E-mail" name="house_road_number" >
											<Input />
										</Form.Item>		
									</Col>
								</Row>
								
								 
								
								
								
					       </Form>
						</div>
					  </div>
					  {/*end: stepof block*/} 
					  
					  
				</div>
				 
				 
				 
				 
				 
				 
				 
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





