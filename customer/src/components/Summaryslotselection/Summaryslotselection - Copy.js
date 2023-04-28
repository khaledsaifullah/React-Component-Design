import React, { Component } from 'react';

import { BrowserRouter as BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';


import './Summaryslotselection.css';

 
import searchicon from './images/searchicon.png';
import calendarsample from './images/calendarsample.png';
 

class Summaryslotselection  extends Component {

	constructor(props){
		super(props)
		this.state ={
		   counter : 1
		}
		this.Increment= this.Increment.bind(this);
		this.Decrement=this.Decrement.bind(this);
	 }
	 Increment(){
		this.setState({counter: this.state.counter + 1})
	 }
	 Decrement(){
		this.setState({counter : this.state.counter - 1})
	 }


    render() {

        return (
           <div className="summaryslotselection-container">
		        <div className="page-header-back">
					<span>&#60;</span>
					Summary
				</div>

	


	 


				
				<div className="company-summary">
					{/*start:summary-item*/}
					<div className="company-summary-item">
						<div className="company-summary-item-leftpart">
							<div className="company-summaryitem-top">
							Haircut | Regular
							</div>
							<div className="company-summaryitem-bottom">
							$39.15
							</div>
						</div>
						<div className="company-summary-item-rightpart">
					<div className='increment-decrement-box'> 
							<button onClick={this.Increment} className="incrementcount">+ </button>
							<div className='setcountdata'><input type="text" value={this.state.counter}/></div>
							<button onClick={this.Decrement} className="decrementcount">-</button>
					</div>

							<div className="company-summaryitem-rightbottom">
							$39.15
							</div>		
						</div>
						
					</div>
					{/*end:summary-item*/}
					
					
					
					{/*start:summary-item*/}
					<div className="company-summary-item">
						<div className="company-summary-item-leftpart">
							<div className="company-summaryitem-top">
							Haircut | Regular
							</div>
							<div className="company-summaryitem-bottom">
							$39.15
							</div>
						</div>
						<div className="company-summary-item-rightpart">
					<div className='increment-decrement-box'> 
							<button onClick={this.Increment} className="incrementcount">+ </button>
							<div className='setcountdata'><input type="text" value={this.state.counter}/></div>
							<button onClick={this.Decrement} className="decrementcount">-</button>
					</div>

							<div className="company-summaryitem-rightbottom">
							$39.15
							</div>		
						</div>
						
					</div>
					{/*end:summary-item*/}
					
					
					{/*start:Grand Total*/}
					<div className="company-summary-grandtotal">
						<div className="company-summary-grandtotal-leftpart">
							<span>Grand Total</span>
						</div>
						<div className="company-summary-grandtotal-rightpart">
							<div className="company-summary-grandtotal-top">
								$73.15
							</div>
							<div className="company-summary-grandtotal-bottom">
								+ Taxes
							</div>
						</div>
					</div>
					{/*end:Grand Total*/}
					
					
				</div>
				
				
				
			   <div className="company-date-heading">
					<h4>Date</h4>
			   </div>
			   <div className="company-calendar-section">
					<img src={calendarsample} alt="calendarsample" />
			   </div>
			   <div className="company-calendar-resultoutput">
					 June 07 | 1:00 PM
			   </div>
	   
		   
			   <div className="bookappointment-link">
					<Link to="/customerdetail" className="bookappointment-btn">
						Book Appointment
					</Link>
			   </div>
		   
		   
		   </div>

        )
    }

}

export default Summaryslotselection;




