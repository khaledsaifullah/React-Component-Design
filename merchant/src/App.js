import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import './Responsive.css'; 


import Header from './components/Header/Header.js';
import Merchantlogin from './components/Merchantlogin/Merchantlogin.js';
import Merchantlandingpage from './components/Merchantlandingpage/Merchantlandingpage.js';
import Merchantechsupport from './components/Merchantechsupport/Merchantechsupport.js';
import Merchantechappointment from './components/Merchantechappointment/Merchantechappointment.js';
import Merchantsummary from './components/Merchantsummary/Merchantsummary.js';
import Merchantcustomerdetail from './components/Merchantcustomerdetail/Merchantcustomerdetail.js';
import Merchantconfirmation from './components/Merchantconfirmation/Merchantconfirmation.js';
import Merchanviewshopdetail from './components/Merchanviewshopdetail/Merchanviewshopdetail.js';



class App extends Component {
    render() {

        return (
            <div className="App"> 
				<Router>
				   <Header />
				   <div className="body-container">
                            <Route path="/" exact component={Merchantlogin} />
							<Route path="/merchantlandingpage/" component={Merchantlandingpage} />
							<Route path="/merchantechsupport/" component={Merchantechsupport} />
							<Route path="/merchantechappointment/" component={Merchantechappointment} />
							<Route path="/merchantsummary/" component={Merchantsummary} />

							<Route path="/merchantcustomerdetail/" component={Merchantcustomerdetail} />
							<Route path="/merchantconfirmation/" component={Merchantconfirmation} />
							<Route path="/merchanviewshopdetail/" component={Merchanviewshopdetail} />
				   
				   </div>	 
				</Router>

            </div>
        )

    }

}

export default App;


