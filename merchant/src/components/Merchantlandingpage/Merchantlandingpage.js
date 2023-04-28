import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Merchantlandingpage.css';


import calendarsamplemrchant from './images/calendarsamplemrchant.png';
import addusericon from './images/addusericon.png';

class Merchantlandingpage  extends Component {

    render() {

        return (
           <div className="merchantlandingpage-container">
                <div className="adduser-floatbox">
                    <Link to="/merchantechsupport"><img src={addusericon} alt="addusericon" /></Link>
                </div>                
                <div className="merchantlanding-calender"><img src={calendarsamplemrchant} alt="calendarsamplemrchant" /> </div>
                
                <div className="merchantlanding-calender-result">
                    <div className="merchantlanding-calender-datetime">Today | Wed, 15 Jun</div>
                    <div className="merchantlanding-calender-upnext">
                        <Link to="/landingpageselection"><button>Up next</button></Link>
                    </div>
                    <div className="merchantlanding-calender-content">
                        {/*start:merchantlanding calender item*/}
                        <div className="merchantlanding-calender-item">
                            <div className="merchantlanding-calender-itemleftpart">
                                <h5>1:00 PM</h5>
                                <p>1 hours</p>
                            </div>    
                            <div className="merchantlanding-calender-itemrightpart">
                                   <h3>Jane Doe</h3>
                                   <p>+1 xxx xxx xxxx </p>
                                   <p>Service: Lorem ipsum dolor sit amet, consectetur adipiscing e</p>  
                            </div>    
                        </div>
                        {/*end:merchantlanding calender item*/}



                        {/*start:merchantlanding calender item*/}
                        <div className="merchantlanding-calender-item">
                            <div className="merchantlanding-calender-itemleftpart">
                                <h5>1:00 PM</h5>
                                <p>1 hours</p>
                            </div>    
                            <div className="merchantlanding-calender-itemrightpart">
                                   <h3>Jane Doe</h3>
                                   <p>+1 xxx xxx xxxx </p>
                                   <p>Service: Lorem ipsum dolor sit amet, consectetur adipiscing e</p>  
                            </div>    
                        </div>
                        {/*end:merchantlanding calender item*/}



                        {/*start:merchantlanding calender item*/}
                        <div className="merchantlanding-calender-item">
                            <div className="merchantlanding-calender-itemleftpart">
                                <h5>1:00 PM</h5>
                                <p>1 hours</p>
                            </div>    
                            <div className="merchantlanding-calender-itemrightpart">
                                   <h3>Jane Doe</h3>
                                   <p>+1 xxx xxx xxxx </p>
                                   <p>Service: Lorem ipsum dolor sit amet, consectetur adipiscing e</p>  
                            </div>    
                        </div>
                        {/*end:merchantlanding calender item*/}

                        <div className="merchantlanding-calender-datetime">Today | Wed, 15 Jun</div>                     
                        {/*start:merchantlanding calender item*/}
                        <div className="merchantlanding-calender-item">
                            <div className="merchantlanding-calender-itemleftpart">
                                <h5>1:00 PM</h5>
                                <p>1 hours</p>
                            </div>    
                            <div className="merchantlanding-calender-itemrightpart">
                                   <h3>Jane Doe</h3>
                                   <p>+1 xxx xxx xxxx </p>
                                   <p>Service: Lorem ipsum dolor sit amet, consectetur adipiscing e</p>  
                            </div>    
                        </div>
                        {/*end:merchantlanding calender item*/}





                    
                    </div>
                    {/*end:*/}


				</div>	




		   </div>

        )
    }

}

export default Merchantlandingpage;





