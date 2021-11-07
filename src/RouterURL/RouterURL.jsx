import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import User from '../components/User';
import MaterialTableCore from '../components/MaterialTableCore';

import HomePage from '../Pages/HomePage/HomePage';
import AddEditCustomer from '../Pages/Actions/CustomerActions/AddEditCustomer';

function RouterURL(props) {
    return (

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/Sign-In">
                <SignIn />
            </Route>
            <Route path="/Sign-Up">
                <SignUp />
            </Route>
            <Route path="/Customer-Action">
                <AddEditCustomer />
            </Route>
        </Switch>


    );
}

export default RouterURL;