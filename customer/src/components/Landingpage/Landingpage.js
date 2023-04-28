import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';


import './Landingpage.css';

 
import searchicon from './images/searchicon.png';

import imageregular from './images/imageregular.png';
import imagestudent from './images/imagestudent.png';
import imagesenior from './images/imagesenior.png';
import imagekids from './images/imagekids.png';
import imagebuzzcut from './images/imagebuzzcut.png';
import imageprem from './images/imageprem.png';
import imagecolor from './images/imagecolor.png';
import imagefacial from './images/imagefacial.png';
import imageeyebrowwax from './images/imageeyebrowwax.png';
import imagethreading from './images/imagethreading.png';
import imageshave from './images/imageshave.png';
import imagetrim from './images/imagetrim.png';
 
class LandingPage  extends Component {
	 
	  state = {
		products: []
	  }
	  componentDidMount() {
		  const url = 'http://127.0.0.1:8000/api/Service/';
		  axios.get(url).then(result => {
			const products = result.data;
			this.setState({ products });
		  })
	  }
	 
	
	
	render() {

        return (
           <div className="landingpage-container">
		       
			   

			   <div className="seach-box">
					<div className="seach-form-content">
						<form>
						  <span className="searchicon">
							<img src={searchicon} alt="searchicon" />
						  </span>
						  <input type="text" name="search" placeholder="Search for a service" />
						</form>						
					</div>
					 
					<div className="seach-filter">
						<button>Hair</button>
						<button>Beard</button>
						<button>Face</button>
					</div>

					 

			   </div>
			   
			   
			   <div className="company-offer">
					<div className="company-offer-leftpart">Offer</div>
					<div className="company-offer-rightpart">Save upto 25% off on a haircut. Avail offer at the salon.</div>	
			   </div>
			   
			   <div className="company-service-name">
					<h4>Haircut</h4>
			   </div>
			   <div className="company-service">
				{
					this.state.products.map(product =>
					<div className="company-service-item"  key={product.ServiceId}>
						<div className="company-service-item-leftpart">
							<div className="company-service-item-top">
								<span className="company-service-item-name">{product.name}</span>
								<span className="company-service-item-divider">|</span> 
								<span className="company-service-item-amount">${product.price} </span>
							</div>			
							<div className="company-service-item-bottom">
								<Link to={location => `landingpageselection?serviceId=${product.ServiceId}`}>
										<button>Add</button>
								</Link>
								<Link to={location => `landingpageselection?serviceId=${product.ServiceId}`}>
										<button>Book Now</button>
								</Link>
							</div>			
						</div>
						<div className="company-service-item-rightpart">
							<span className="company-service-picture">
								<img src={product.img}  alt={product.name} />
							</span>
						</div>
					</div>
					)
					
				}
			

   			    </div>{/*end:service*/}
				
				
				
			    
			   




				
				
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				 
				 
				 
				 
		   
		   </div>

        )
    }

}

export default LandingPage;




