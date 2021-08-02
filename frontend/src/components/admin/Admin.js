import React from "react";
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import styles from "./admin.module.css";
import Header from "./Header";

import Movies from "./movies/Movies";
import Dashboard from "./Dashboard";

function Admin(props) {
    /**
     * path => build <Route> paths, i.e, relative to the parent route
     * url =>  build relative links.
     */
    let {path, url} = useRouteMatch();
    console.log("path: ", path);
    console.log("url: ", url);
    console.log("props: ", props);

    return (
        <React.Fragment>
            <Header />

            <Switch>
                <Route path={`${path}/movies`}>
                    <Movies/>
                </Route>
                <Route exact path={path}>
                    <Dashboard />
                </Route>
            </Switch>

        </React.Fragment>
    );
};

export default Admin;