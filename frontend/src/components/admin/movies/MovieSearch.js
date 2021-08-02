import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import {Container, Form, Row, Col} from "react-bootstrap";

function MovieSearch(props) {
    console.log("mm props: ", props);
    const handleChange = (event) => {
        console.log("event: ", event.target.value);
        // setSearchType(event.target.value)
        // setOpen(false);
    };

    return (
        <Container>
            <h3> Movies </h3>

            {/*For Movie Search*/}
            <Row>
                <Col> Movie Section </Col>
                <Col>
                    <Form>
                        {/*query field string type*/}
                        {/*language optional field string type*/}
                        {/*page optional field int type*/}
                        {/*include_adult optional field boolean type*/}
                        {/*region optional field string type*/}
                        {/*year optional field int type*/}
                        {/*primary_release_year optional field int type*/}
                        <div key={`inline-radio`} className="mb-3">
                            <Form.Check
                                inline
                                label="movie"
                                name="type"
                                type="radio"
                                id="inline-radio-1"
                                value="movie"
                                onChange={handleChange}
                            />
                            <Form.Check
                                inline
                                label="series"
                                name="type"
                                type="radio"
                                id="inline-radio-2"
                                value="series"
                                onChange={handleChange}
                            />
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(MovieSearch);