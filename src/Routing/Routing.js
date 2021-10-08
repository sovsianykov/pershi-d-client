import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

import Navigation from "../components/Navigation/Navigation";

import Layout from "../components/Layout/Layout";
import Homeworks from "../pages/Homeworks/Homeworks";
import Finances from "../pages/Finances/Finances";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Routing = () => {
    return (
        <Router>
            <Header/>
            <Navigation/>
             <Layout>
                 <Switch>
                     <Route exact path='/' component={ Home } />
                     <Route path='/homeworks' component={ Homeworks } />
                     <Route path='/finances' component={ Finances } />
                 </Switch>
             </Layout>
            <Footer/>
        </Router>
    );
};

export default Routing;
