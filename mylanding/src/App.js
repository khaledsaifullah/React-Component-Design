import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './Responsive.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import ComponentPage from './components/ComponentPage/ComponentPage.js';
import SeekerPage from './components/SeekerPage/SeekerPage.js';
import ServicePage from './components/ServicePage/ServicePage.js';
import OrganizationPage from './components/OrganizationPage/OrganizationPage.js';
import ServicedetailPage from './components/ServicedetailPage/ServicedetailPage.js';
import ServicedetailPageOverridden from './components/ServicedetailPageOverridden/ServicedetailPageOverridden.js';
import NovotheatreshowPage from './components/NovotheatreshowPage/NovotheatreshowPage.js';
import ServiceFormPage from './components/ServiceFormPage/ServiceFormPage.js';
import FindServicePage from './components/FindServicePage/FindServicePage.js';


class App extends Component {
    render() {

        return (
            <div className="App">
                <Header />
				{/*<LandingPage />*/}
				{/*<ComponentPage />*/}
				{/*<SeekerPage />*/}
				{/*<ServicePage />*/}
				{/*<OrganizationPage />*/}
				{/*<ServicedetailPage />*/}
				{/*<ServicedetailPageOverridden />*/}
				{/*<NovotheatreshowPage />*/}
				{/*<ServiceFormPage />*/}
				
				<div className="body-container">
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route path="/component-page" component={ComponentPage} />
							<Route path="/seeker-page" component={SeekerPage} />
							<Route path="/service-page" component={ServicePage} />
							<Route path="/organization-page" component={OrganizationPage} />
							<Route path="/service-details-page" component={ServicedetailPage} />
							<Route path="/service-detail-overridden-page" component={ServicedetailPageOverridden} />
							<Route path="/novo-theatre-show-page" component={NovotheatreshowPage} />
							<Route path="/service-form-page" component={ServiceFormPage} />
							<Route path="/find-service-page" component={FindServicePage} />
						</Switch>
				    </BrowserRouter>
					
				</div>
				
				
				<Footer />
            </div>
        )

    }

}

export default App;






