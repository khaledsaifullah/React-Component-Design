import React, { Component } from 'react';
import './NovotheatreshowPage.css';

import {Form, Input, Select, Button, Checkbox, Radio, Card, Row, Col, Tabs, Icon, DatePicker, Space,    } from 'antd';
import moment from 'moment';

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

import buyticketwhiteicon from './images/buyticket-white-icon.png';

import seatbooking from './images/seat-booking.png';

import dateicon from './images/date-icon.png';





const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Option } = Select;




const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = value =>
  `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    .endOf('week')
    .format(weekFormat)}`;
	
	
  
class PageOneContent extends Component {
    render() {
        return (
			<div className="pageone-content">
				 <div  className="header-banner"><img src={headerbannerfive} alt="headerbanner" /></div>
				 
				 <div  className="grant-fellowship-content">
				    <div className="grantfellowship-icon"><img src={nmstlogoicontiny} alt="icon" /></div>
					<div className="grantfellow-text-small box-shadow-none">Bangabandhu Sheikh Mujibur Rahman Novo Theatre</div>
					<h3 className="padding-top"> Planetarium Show: Journey to the Star </h3>
				 </div>
				 
	             
				 <div  className="ticket-page-content">
				   		<div  className="buy-ticket-block">
						<div  className="buyticket-block-title">BUY TICKET</div>
						<div  className="buyticket-block-content">
							<div  className="row-buyticket datepicker-icon">
							    <h6>Date</h6>
								<Space direction="vertical" size={12}>
									<span className="dateicon"> <img src={dateicon} alt="dateicon" /></span>
									<DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
								</Space>
							</div>
							<div  className="row-buyticket">
							    <h6>Show time</h6>
								<Form.Item name="show-time">
									<Select placeholder="3" >
										<Option value={"1"}>1 </Option>
										<Option value={"2"}>2</Option>
										<Option value={"3"}>3</Option>
									</Select>
								</Form.Item>
							</div>
							<div  className="row-buyticket">
								<h6>Number of Tickets</h6>
								<Form.Item name="number-of-tickets">
									<Select placeholder="02:30 PM - 03:00 PM" >
										<Option value={"2"}>02:30 PM - 03:00 PM </Option>
										<Option value={"3"}>02:30 PM - 03:00 PM</Option>
									</Select>
								</Form.Item>
							</div>
							
							<div  className="row-buyticket">
							   <span className="ticket-per-price">Price per Person: ৳100.00 + Online Charge: ৳10.00</span>
							</div>
							
							<div  className="row-buyticket row-buyticket-total">
							    <h6>Total Price</h6>
								<span className="ticket-total-amount"> ৳ 330.00 </span>
							</div>
							
							<div  className="row-buyticket">
							    <h6>Seats</h6>
								<div  className="seatbooking-seletion">
								<img src={seatbooking} alt="seatbooking" />
								</div>
							</div>
							
							<div  className="row-buyticket">
							    <h6>Your Name</h6>
								<Form.Item name="your-name" >
									<Input />
								</Form.Item>
							</div>
							<div  className="row-buyticket">
							    <h6>Your Mobile Number </h6>
								<Form.Item name="your-mobile-number" >
									<Input />
								</Form.Item>
							</div>
							<div  className="row-buyticket">
							    <h6>Your Email Address</h6>
								<Form.Item name="your-email-address" >
									<Input />
								</Form.Item>
							</div>
							<div  className="row-buyticket buyticket-checkbox">
								<span><Checkbox></Checkbox> </span>
								<span>I accept all the Terms & Conditions, Privacy Policy,
								Cancellation & Refund Policies </span> 
							</div>
							
							<div className="buyticket-submit-btn">
								 <Form.Item>
									<Button type="primary" htmlType="submit">
									 <img src={buyticketwhiteicon } alt="icon" /> Buy Ticket 
									</Button>
								 </Form.Item>
							</div>
							
						</div>
				   </div>

				   <div  className="ticket-text-content">
					   <p>The dazzling Journey to the Stars carries visitors through space and time to 
					   experience the life and death of the stars in our night sky, including our own 
					   nurturing Sun. </p>
					   <p>Tour familiar stellar formations, explore new celestial mysteries, 
					   and discover the fascinating story that connects us all to the stars. </p>
					   <h3>Terms & Conditions</h3>
					   <p>Continually leverage existing impactful platforms rather than mission-critical vortals. </p>
					   <p>1. Progressively develop go forward sources rather than focused benefits. <br/>
					    2. Conveniently initiate prospective users before functionalized benefits.  </p>
				   </div>
				   
				   
				   
				   
			    </div>
				
				<div  className="ticket-page-content display-flex-none">
				   <h3>Cancellation & Refund Policies </h3>
				   <p>Continually leverage existing impactful platforms rather than mission-critical vortals. Progressively develop go forward sources rather than focused benefits. Conveniently initiate prospective users before functionalized benefits.</p>
			    </div>
			 
			 
			 
			 
			 
			
			 
			 
			 
			 
		</div>
)
}

}
export default PageOneContent;





