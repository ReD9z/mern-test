import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Tasks, Auth } from '../views';
import HomeLayout from "../layouts/HomeLayout";
import EmptyLayout from "../layouts/EmptyLayout";

const Routes = () => (
    <Router>
        <Switch>
            <RouteWrapper exact path="/" component={Tasks} layout={HomeLayout} />
            <RouteWrapper exact path="/login" component={Auth} layout={EmptyLayout} />
        </Switch>
    </Router>
);

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        )} />
    )
}


export default Routes;
