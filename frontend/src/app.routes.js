import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Admin from "./components/admin/Admin";
import Home from "./components/Home";
import Browse from "./components/front/home/browse/Browse";
import VideoItem from "./components/front/videos/video/Item";

/**
 *
 * @param children => element inside Root tag
 * @param initialState => at starting = empty obj
 * @returns {*}
 * @constructor
 */
function Routes () {
    return (
        <Switch>
            <Route path="/admin" component={ Admin } />
            <Route path="/movies/:movieId/:uid" component={ VideoItem } />
            <Route path="/series/:seriesId/:uid" component={ VideoItem } />
            {/*<Route path="/login" component={Login} />*/}
            {/* {requireAuth(Dashboard)} */}
            {/*<Route path="/dashboard" component={() => <RequireAuth component={Dashboard} />} />*/}
            <Route exact path="/browse" component={Browse} />
            {/*<Route exact path="/" component={Home} />*/}
            {/*for temporary exact path redirect to browse*/}
            <Route exact path="/" >
                <Redirect to="/browse"/>
            </Route>
        </Switch>
    );
};

export default Routes;