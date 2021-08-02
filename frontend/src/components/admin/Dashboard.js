import React from "react";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

function Dashboard(props) {
    console.log("m props: ", props);
    return (
        <Container>
            <h1>Dashboard</h1>
        </Container>
    );
}

export default withRouter(Dashboard);