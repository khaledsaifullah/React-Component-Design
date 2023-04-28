import React, { Component } from 'react';
import './FindServicePage.css';

import {Form, Input, Icon, Collapse   } from 'antd';
import 'antd/dist/antd.css';

import { PlusSquareOutlined , MinusSquareOutlined , CheckOutlined    } from '@ant-design/icons';

import headerbannerten from './images/header-ten.jpg';
import findserviceicon from './images/find-service-icon.png';


import baecicon from './images/baecicon.png';
import bcsiricon from './images/bcsiricon.png';
import nmsticon from './images/nmsticon.png';
import bansdocicon from './images/bansdocicon.png';
import baeraicon from './images/baeraicon.png';
import nibicon from './images/nibicon.png';


import organizationtitleicon from './images/organization-card-title-icon.png';
import bycomponentcardtitleicon from './images/bycomponent-card-title-icon.png';
import byseekercardtitleicon from './images/byseeker-card-title-icon.png';
import arrownavicon from './images/arrow-nav-icon.png';
import findtypeheretofiltericon from './images/find-type-hereto-filtericon.png';


import iconone from './images/icon-one.png';
import icontwo from './images/icon-two.png';
import iconthree from './images/icon-three.png';
import iconfour from './images/icon-four.png';
import iconfive from './images/icon-five.png';
import iconsix from './images/icon-six.png';
import iconseven from './images/icon-seven.png';
import iconeight from './images/icon-eight.png';
import iconnine from './images/icon-nine.png';





const { Panel } = Collapse;
function callback(key) {
	console.log(key);
}

class PageOneContent extends Component {
	state = {
		expandIconPosition: 'right',
	};
	render() {
		const { expandIconPosition } = this.state;

        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerten} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content grant-find-service">
				    <div className="grantfellowship-icon"><img src={findserviceicon} alt="icon" /></div>
					<h3> Find Services </h3>
				 </div>
				 <div className="find-service-content">
					 <div className="find-service-leftpart">
							 <Collapse
								 defaultActiveKey={['1']}
								 onChange={callback}
								 expandIconPosition={expandIconPosition}
								 expandIcon={({ isActive }) => isActive ? <PlusSquareOutlined  /> : <MinusSquareOutlined  />}
							 >
							 <Panel header={<span><span  className="find-service-title-icon"><img src={organizationtitleicon} alt="icon" /></span>BY ORGANIZATION</span>} key="1" className="by-organization-header">

								 <div className="find-specific-service">
									 <ul>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baecicon} alt="icon" /> </label>
												 <span> Bangladesh Atomic Energy Commission (BAEC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bcsiricon} alt="icon" /> </label>
												 <span>Bangladesh Council of Scientific and Industrial Research (BCSIR) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank"  className="find-specific-service-active">
												 <label><img src={nmsticon} alt="icon" /> </label>
												 <span>National Museum of Science & Technology (NMST) </span>
											 </a>
										 </li>

										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bansdocicon} alt="icon" /> </label>
												 <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baeraicon} alt="icon" /> </label>
												 <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span>
											 </a>
										 </li>


										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={nibicon} alt="icon" /> </label>
												 <span> National Institute of Biotechnology (NIB) </span>
											 </a>
										 </li>
									 </ul>
								 </div>
							 </Panel>


							 <Panel header={<span><span  className="find-service-title-icon"><img src={bycomponentcardtitleicon} alt="icon" /></span>BY COMPONENTS </span>} key="2" className="by-component-header">
								 <div className="find-specific-service">
									 <ul>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baecicon} alt="icon" /> </label>
												 <span> Bangladesh Atomic Energy Commission (BAEC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bcsiricon} alt="icon" /> </label>
												 <span>Bangladesh Council of Scientific and Industrial Research (BCSIR) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank"  className="find-specific-service-active">
												 <label><img src={nmsticon} alt="icon" /> </label>
												 <span>National Museum of Science & Technology (NMST) </span>
											 </a>
										 </li>

										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bansdocicon} alt="icon" /> </label>
												 <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baeraicon} alt="icon" /> </label>
												 <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span>
											 </a>
										 </li>


										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={nibicon} alt="icon" /> </label>
												 <span> National Institute of Biotechnology (NIB) </span>
											 </a>
										 </li>
									 </ul>
								 </div>
							 </Panel>

							 <Panel header={<span><span  className="find-service-title-icon"><img src={byseekercardtitleicon} alt="icon" /></span>BY SEEKER </span>}  key="3"   className="by-seeker-header">
								 <div className="find-specific-service">
									 <ul>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baecicon} alt="icon" /> </label>
												 <span> Bangladesh Atomic Energy Commission (BAEC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bcsiricon} alt="icon" /> </label>
												 <span>Bangladesh Council of Scientific and Industrial Research (BCSIR) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank"  className="find-specific-service-active">
												 <label><img src={nmsticon} alt="icon" /> </label>
												 <span>National Museum of Science & Technology (NMST) </span>
											 </a>
										 </li>

										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={bansdocicon} alt="icon" /> </label>
												 <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span>
											 </a>
										 </li>
										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={baeraicon} alt="icon" /> </label>
												 <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span>
											 </a>
										 </li>


										 <li>
											 <a href="#"  target="_blank">
												 <label><img src={nibicon} alt="icon" /> </label>
												 <span> National Institute of Biotechnology (NIB) </span>
											 </a>
										 </li>
									 </ul>
								 </div>
							 </Panel>

						 </Collapse>
					 </div>

					 <div className="find-service-rightpart">
							<div  className="find-service-navigation">
								<span>By Organizations</span>
								<span><img src={arrownavicon} alt="icon" /> </span>
								<span>National Museum of Science & Technology (NMST)</span>
								<span><img src={arrownavicon} alt="icon" /> </span>
								<span><i>Choose the Service...</i> </span>
							</div>
							 <div  className="find-type-hereto-filter">
								 <Form.Item  name="find-type-hereto-filter" >
									 <span  className="findtypeheretofilter-icon"><img src={findtypeheretofiltericon} alt="icon" /> </span>
									 <Input placeholder="Type here to Filter..." />
								 </Form.Item>
							 </div>

						 	<div className="find-service-load-content">
								<div className="find-specific-loadservice">
									<ul>
										<li>
											<a href="#"  target="_blank">
												<label><img src={iconone} alt="icon" /> </label>
												<span>Special Research Grant  </span>
											</a>
										</li>
										<li>
											<a href="#"  target="_blank">
												<label><img src={icontwo} alt="icon" /> </label>
												<span>NST Fellowship Grant </span>
											</a>
										</li>
										<li>
											<a href="#"  target="_blank">
												<label><img src={iconthree} alt="icon" /> </label>
												<span>Grant Application for R&D Project </span>
											</a>
										</li>

										<li>
											<a href="#"  target="_blank">
												<label><img src={iconfour} alt="icon" /> </label>
												<span>Science Club Applications  </span>
											</a>
										</li>

										<li>
											<a href="#"  target="_blank">
												<label><img src={iconfive} alt="icon" /> </label>
												<span>Bangabanndhu Fellowship Program  </span>
											</a>
										</li>
										<li>
											<a href="#"  target="_blank">
												<label><img src={iconsix} alt="icon" /> </label>
												<span>Grants Application for Scientific Organizations & Institutions  </span>
											</a>
										</li>

										<li>
											<a href="#"  target="_blank">
												<label><img src={iconseven} alt="icon" /> </label>
												<span>E-Learning  </span>
											</a>
										</li>

										<li>
											<a href="#"  target="_blank">
												<label><img src={iconeight} alt="icon" /> </label>
												<span>Grants Application for Non-Govt. Secondary and Higher Education Institute  </span>
											</a>
										</li>

										<li>
											<a href="#"  target="_blank">
												<label><img src={iconnine} alt="icon" /> </label>
												<span>Internship/ Thesis Application  </span>
											</a>
										</li>





									</ul>
								</div>

							</div>



					 </div>

				 </div>


			</div>
    )
    }

}
export default PageOneContent;





