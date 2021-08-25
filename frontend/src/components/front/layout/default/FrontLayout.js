import React, {useState, Fragment, useRef, useEffect} from "react";
import {Nav, Container, Navbar } from "react-bootstrap";

import NavBar from "./navbar/NavBar";

function FrontLayout(props) {

    return (
        <Fragment>
            <NavBar />
            <div> {props.children} </div>
        </Fragment>
    );
}

export default FrontLayout;