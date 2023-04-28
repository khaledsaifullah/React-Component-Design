import React, { Component } from 'react';
import './LandingPage.css';


import {Form, Input,Button, Select, Card, Row, Col, Tabs  } from 'antd';
import 'antd/dist/antd.css';
 


import labman from './images/lab-man.jpg';

import headerbanner from './images/headerbanner.jpg';
import homebottomshed from './images/homebottomshed.png';


import grabiconone from './images/grab-icon-one.png';
import grabicontwo from './images/grab-icon-two.png';
import grabiconthree from './images/grab-icon-three.png';
import grabiconfour from './images/grab-icon-four.png';
import grabiconfive from './images/grab-icon-five.png';
import grabiconsix from './images/grab-icon-six.png';


import searchicon from './images/search-icon.png';
import searchbtnicon from './images/search-btn-icon.png';
import servicearrowlink from './images/service-arrow-link.png';


import readmoreicon from './images/readmore-icon.png';


import baecicon from './images/baec-icon.png';
import bcsiricon from './images/bcsir-icon.png';
import nmsticon from './images/nmst-icon.png';
import bnsdocicon from './images/bnsdoc-icon.png';
import baeraicon from './images/baera-icon.png';



import specialresearchicon from './images/special-research-icon.png';
import nstfellowshipgrant from './images/nst-fellowship-grant.png';
import booksearchicon from './images/book-search-icon.png';
import sciencebottol from './images/science-bottol.png';
import feathericon from './images/feather-icon.png';
import granappicon from './images/gran-app-icon.png';
import elearningicon from './images/e-learning-icon.png';


import citizenicon from './images/citizen-icon.png';
import studenticon from './images/student-icon.png';
import businessmanicon from './images/businessman-icon.png';
import researchericon from './images/researcher-icon.png';
import scientisticon from './images/scientist-icon.png';
import instituteorganizationicon from './images/institute-organization-icon.png';



import bgshapeone from './images/bgshapeone.png';
import bgshapetwo from './images/bgshapetwo.png';
import bgshapethree from './images/bgshapethree.png';
import bgshapefour from './images/bgshapefour.png';
import bgshapefive from './images/bgshapefive.png';
import bgshapesix from './images/bgshapesix.png';

import grantfellowshipicon from './images/grant-fellowship-icon.png';
import licensingpermiticon from './images/licensing-permit-icon.png';
import eticketingicon from './images/e-ticketing-icon.png';
import virtualgalleriesicon from './images/virtual-galleries-icon.png';
import researchshapeicon from './images/research-shape-icon.png';
import elearningshapeicon from './images/elearning-shape-icon.png';


import paginationbulet from './images/pagination-bulet.png';

import organizationtitleicon from './images/organization-card-title-icon.png';
import servicetitleicon from './images/service-card-title-icon.png';
import seekertitleicon from './images/seeker-card-title-icon.png';




const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const { Option } = Select;

 

class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner landing-banner ">
				   <img src={headerbanner} alt="headerbanner" />
					<div  className="header-homebottomshed">
<svg  viewBox="0 0 1366 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-2 0V44H1368V0C1268.46 9.4 985.761 28.2 651.238 28.2C316.716 28.2 76.3619 9.4 -2 0Z" fill="#F2F2F2"/>
</svg>

					</div>
				</div>
				 
				 
				 
				 <div className="search-portal-content">
					<h3>Welcome to the <br /> Ministry of Science Portal</h3>
					<div  className="search-content">
						<Form>
							<div  className="search-content-body">
								<div  className="search-content-left">
									<label>Content</label>
									<div  className="service-dropdown">
											<Form.Item name="language-code">
												<Select defaultValue="services" style={{ width: 175 }} bordered={false}>
												  <Option value="services">Services</Option>
												  <Option value="organizations">Organizations</Option>
												  <Option value="seeker">Seeker</Option>
												</Select>
											</Form.Item>
									</div>
								</div>
								<div  className="search-content-middle">
								    <label>Keyword</label>
									<Form.Item name="filter_name" >
										<Input placeholder="Type here to search..." />
									</Form.Item>
								</div>
								<div  className="search-content-right">
									<div  className="search-btn">
										<Form.Item>
											<Button type="primary" htmlType="submit">
											<img src={searchbtnicon} alt="searchicon" /> Serach</Button>
										</Form.Item>
									</div>
								</div>
							</div>
						</Form>
					  </div>
					  <div  className="search-note">Find your desired services or organizations and the services they provide </div>
					
				 </div>	
				 
				 
				 <div className="service-content">
					<h3>SERVICE COMPONENTS </h3>
					<h4>Services are sorted in components to let you find your desired service quickly</h4>
					<div className="service-content-slider">
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
									<img src={bgshapeone} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={grantfellowshipicon} alt="icon" />
								</span>
							</div>
							<label>Grants/Fellowship</label>
						</div>
						
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
									<img src={bgshapetwo} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={licensingpermiticon} alt="icon" />
								</span>
							</div>
							<label>Licensing/Permits</label>
						</div>
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
								<img src={bgshapethree} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={eticketingicon} alt="icon" />
								</span>
							</div>
							<label>E-Ticketing</label>
						</div>
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
								<img src={bgshapefour} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={virtualgalleriesicon} alt="icon" />
								</span>
							</div>	
							<label>Virtual Galleries</label>
						</div>
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
									<img src={bgshapefive} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={researchshapeicon} alt="icon" />
								</span>
							</div>
							<label>Research</label>
						</div>
						<div className="service-item">
							<div className="service-item-picture">
								<span  className="service-item-icon-shapebg">
									<img src={bgshapesix} alt="icon" />
								</span>
								<span  className="service-item-icon">
									<img src={elearningshapeicon} alt="icon" />
								</span>
							</div>
							<label>E-Learning</label>
						</div>
					</div>
					<img src={paginationbulet} alt="pagination-bulet" />
				 </div>
				 
				 
				 <div className="choose-service-content">
					<h3>CHOOSE YOUR DESIRED PATH </h3>
					<h4>You can find your desired service directly, or by the organization providing it </h4>
					<div className="choose-service-content-detail">
						<Card title="ORGANIZATIONS" className="filter-card organization-card">
						   <span  className="organization-card-title-icon">
								<img src={organizationtitleicon} alt="icon" />
						   </span>
						   <div className="filter-card-input">
								<Form.Item name="filter_name" >
									<Input placeholder="Type the Organization to Filter..." />
								</Form.Item>		
						   </div>
						   <div  className="filter-card-content">
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
								   <a href="#"  target="_blank">
								   <label><img src={nmsticon} alt="icon" /> </label>
								   <span>National Museum of Science & Technology (NMST) </span> 
								   </a>								   
								</li>
								<li>
								   <a href="#"  target="_blank">
								   <label><img src={bnsdocicon} alt="icon" /> </label>
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
								   <label><img src={baecicon} alt="icon" /> </label>
								   <span> Bangladesh Atomic Energy Commission (BAEC) </span> 
								   </a>									   
								</li>
								<li>
								   <label><img src={bcsiricon} alt="icon" /> </label>
								   <span>Bangladesh Council of Scientific and Industrial Research (BCSIR) </span> 			
								</li>
								<li>
								   <a href="#"  target="_blank">
								   <label><img src={nmsticon} alt="icon" /> </label>
								   <span>National Museum of Science & Technology (NMST) </span>
								   </a>									   
								</li>
								<li>
								   <a href="#"  target="_blank">
								   <label><img src={bnsdocicon} alt="icon" /> </label>
								   <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span> 			
								   </a>		
								</li>
								<li>
								   <a href="#"  target="_blank">
								   <label><img src={baeraicon} alt="icon" /> </label>
								   <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span> 			
								   </a>		
								</li>
								
								
							 </ul>
						   </div>
						</Card>
						<Card title="SERVICES" className="filter-card service-card">
						   <span  className="organization-card-title-icon">
								<img src={servicetitleicon} alt="icon" />
						   </span>
						   <div className="filter-card-input">
								<Form.Item name="filter_name" >
									<Input placeholder="Type the Service to Filter..."  />
								</Form.Item>		
						   </div>
						   <div  className="filter-card-content">
						      <ul>
								<li><a href="#"  target="_blank">
								   <label><img src={specialresearchicon} alt="icon" /> </label>
								   <span> Special Research Grant </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={nstfellowshipgrant} alt="icon" /> </label>
								   <span> NST Fellowship Grant </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={booksearchicon} alt="icon" /> </label>
								   <span> Grant Application for R&D Project </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={sciencebottol} alt="icon" /> </label>
								   <span> Science Club Applications  </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={feathericon} alt="icon" /> </label>
								   <span> Bangabanndhu Fellowship Program </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={granappicon} alt="icon" /> </label>
								   <span> Grants Application for Scientific Organizations & Institutions  </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={elearningicon} alt="icon" /> </label>
								   <span> E-Learning </span> 			
								</a>	</li>
								
								<li><a href="#"  target="_blank">
								   <label><img src={specialresearchicon} alt="icon" /> </label>
								   <span> Special Research Grant </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={nstfellowshipgrant} alt="icon" /> </label>
								   <span> NST Fellowship Grant </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={booksearchicon} alt="icon" /> </label>
								   <span> Grant Application for R&D Project </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={sciencebottol} alt="icon" /> </label>
								   <span> Science Club Applications  </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={feathericon} alt="icon" /> </label>
								   <span> Bangabanndhu Fellowship Program </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={granappicon} alt="icon" /> </label>
								   <span> Grants Application for Scientific Organizations & Institutions  </span> 			
								</a>	</li>
								<li><a href="#"  target="_blank">
								   <label><img src={elearningicon} alt="icon" /> </label>
								   <span> E-Learning </span> 			
								</a>	</li>
								
								
							</ul>
						   </div>
						</Card>
						<Card title="SEEKER" className="filter-card seeker-card">
						   <span  className="organization-card-title-icon">
								<img src={seekertitleicon} alt="icon" />
						   </span>
						   <div className="filter-card-input">
								<Form.Item name="filter_name" >
									<Input placeholder="Type the Seeker to Filter..."  />
								</Form.Item>		
						   </div>
						   <div  className="filter-card-content">
								<ul>
									<li><a href="#"  target="_blank">
									   <label><img src={citizenicon} alt="icon" /> </label>
									   <span>Citizen</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={studenticon} alt="icon" /> </label>
									   <span>Student</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={businessmanicon} alt="icon" /> </label>
									   <span>Businessman</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={researchericon} alt="icon" /> </label>
									   <span>Researcher</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={scientisticon} alt="icon" /> </label>
									   <span>Scientist</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={instituteorganizationicon} alt="icon" /> </label>
									   <span>Institute/Organization</span> 			
									</a></li>


									<li><a href="#"  target="_blank">
									   <label><img src={citizenicon} alt="icon" /> </label>
									   <span>Citizen</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={studenticon} alt="icon" /> </label>
									   <span>Student</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={businessmanicon} alt="icon" /> </label>
									   <span>Businessman</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={researchericon} alt="icon" /> </label>
									   <span>Researcher</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={scientisticon} alt="icon" /> </label>
									   <span>Scientist</span> 			
									</a></li>
									<li><a href="#"  target="_blank">
									   <label><img src={instituteorganizationicon} alt="icon" /> </label>
									   <span>Institute/Organization</span> 	</a>		
									</li>


								</ul>
						   </div>
						</Card>
					</div>
					<div  className="find-service-link">
					   <a href="#"><img src={searchicon} alt="searchicon" /> <span>Find Services</span> </a>
					</div>
				 </div>
				 
				 
				 <div  className="grab-service-quick">
					<div  className="grab-service-quick-body">
						<Row gutter={[16, 16]}>
							<Col  md={10} xs={24}>
								<h3>GRAB SERVICES QUICK </h3>
								<p>Services that are most recently availed by the <br />
								citizens might interest you too.</p>								
							</Col>
							<Col  md={14} xs={24}>
							    <div className="grab-service-item">
									<ul>
										<li>
										  <div><img src={grabiconone} alt="grabicon" /></div>
										  <label>Special Research Grant</label>
										</li>
										<li>
										  <div><img src={grabicontwo} alt="grabicon" /></div>
										  <label>Grants Application for <br/> Scientific Organizations...</label>
										</li>
										<li>
										  <div><img src={grabiconthree} alt="grabicon" /></div>
										  <label>Grants Application for <br/>  Non-Govt. Secondary...</label>
										</li>
										<li>
										  <div><img src={grabiconfour} alt="grabicon" /></div>
										  <label>Bangabandhu Fellowship  <br/> Program </label>
										</li>
										<li>
										  <div><img src={grabiconfive} alt="grabicon" /></div>
										  <label>Research Fellowship  <br/> Application </label>
										</li>
										<li>
										  <div><img src={grabiconsix} alt="grabicon" /></div>
										  <label>Application for Approval <br/> of Nomination of... </label>
										</li>
									</ul>
								</div>		
							</Col>
						</Row>	
					</div>
				 </div>

				 
				 <div  className="landing-home-content">
					<div  className="landing-home-content-body">
						<Row gutter={[16, 16]}>
							<Col xs={12} md={12}>
								<div className="landing-home-content-picture">
								<img src={labman} alt="labman"  />								
								</div>
							</Col>
							<Col xs={12} md={12}>
							    <div className="landing-home-content-rightpart">
									<div className="landing-home-text">
										<h4>Ministry of Science & <br /> Technology </h4>
										<p>Ministry of Science and Technology, Government of the People’s Republic of Bangladesh is promoting Science and Technology as stewardship of positive change in society and for balanced socio-economic upliftment, national well-being and thus to make Science and Technology a part of national culture. The use of Science and Technology as a means of sustainable use of Environment, Ecosystem and Resources contribute to world pool of knowledge in Science and Technology.</p>
									</div>
									<div  className="read-more-link">
									  <a href="#"><span>Read More</span> <img src={readmoreicon} alt="readmoreicon" /> </a>
									</div>
								</div>
							</Col>
						</Row>	
										
					
					</div>
				 </div>
				 
				 
				 
				 
				 
			</div>
    )
    }

}
export default PageOneContent;





