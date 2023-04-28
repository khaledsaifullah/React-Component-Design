import React, { Component } from 'react';

import { BrowserRouter as BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';


import './Summaryslotselection.css';

 
import searchicon from './images/searchicon.png';
import calendarsample from './images/calendarsample.png';
 

class Summaryslotselection  extends Component {

    render() {
		/*start:increment decrement*/
		const incrementCount = document.getElementsByClassName("increment-count")[0];
		const decrementCount = document.getElementsByClassName("decrement-count")[0];
		var count = 0;

		const handleIncrement = (e) => {
			count++;
			document.getElementsByClassName("total-count")[0].innerHTML = count;
		};
		const handleDecrement = (e) => {
			count--;
			document.getElementsByClassName("total-count")[0].innerHTML = count;
		 };
		/*end:increment decrement*/



		

		 /*start:increment decrement*/
		 const incrementCount_1 = document.getElementsByClassName("increment-count_1")[0];
		 const decrementCount_1 = document.getElementsByClassName("decrement-count_1")[0];
		 var count_1 = 0;
 
		 const handleIncrement_1 = (e) => {
			count_1++;
			 document.getElementsByClassName("total-count-1")[0].innerHTML = count_1;
		 };
		 const handleDecrement_1 = (e) => {
			count_1--;
			 document.getElementsByClassName("total-count-1")[0].innerHTML = count_1;
		  };
		/*end:increment decrement*/
 




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
{/*start:increment decrement*/}
<div class="incrementdecrement-box">
        <div className="increment-count" onClick={handleIncrement}>
          <input type="text"   value="+" />
        </div>
        
		<div className="total-count">1</div>

        <div className="decrement-count" onClick={handleDecrement}>
          <input type="text"   value="-"  />
        </div>
</div>
{/*end:increment decrement*/}


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


{/*start:increment decrement*/}
<div class="incrementdecrement-box">
        <div className="increment-count increment-count_1" onClick={handleIncrement_1}>
          <input type="text"   value="+" />
        </div>
        
		<div className="total-count total-count-1">1</div>

        <div className="decrement-count decrement-count_1" onClick={handleDecrement_1}>
          <input type="text"   value="-"  />
        </div>
</div>
{/*end:increment decrement*/}	

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




