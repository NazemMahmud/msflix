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

import {Container, Form, Row, Col, Button} from "react-bootstrap";

function TvSearch(props) {
    const [formData, setFormData] = useState({
        "query": "",
    });
    console.log("mt props: ", props);

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <h3> TV Search </h3>
            {/*For TV Search*/}
            <Row>
                <Col>
                    <Form onSubmit={onFormSubmit}>
                        {/*query field string type*/}
                        <Form.Group as={Row} className="mb-3" controlId="query">
                            <Form.Label column sm="2">
                                Query String:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control required />
                            </Col>
                        </Form.Group>

                        {/*language optional field string type*/}
                        <Form.Group as={Row} className="mb-3" controlId="language">
                            <Form.Label column sm="2">  Language:   </Form.Label>
                            <Col sm="10">
                                <Form.Control  />
                            </Col>
                        </Form.Group>

                        {/*page optional field int type*/}
                        <Form.Group as={Row} className="mb-3" controlId="page">
                            <Form.Label column sm="2">  Page:   </Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" />
                            </Col>
                        </Form.Group>

                        {/*include_adult optional field boolean type*/}
                        <Form.Group as={Row} className="mb-3" controlId="include_adult">
                            <Form.Label column sm="2">  Include Adult:   </Form.Label>
                            <Col sm="10">
                                {/*<Form.Control type="number" />*/}
                                <Form.Check
                                    inline
                                    label="Yes" name="include_adult" type="radio"
                                    id="inline-radio-1" value="true"
                                />
                                <Form.Check
                                    inline
                                    label="No" name="include_adult"
                                    type="radio" id="inline-radio-2"
                                    value="false"
                                />
                            </Col>
                        </Form.Group>

                        {/*first_air_date_year optional field int type*/}
                        <Form.Group as={Row} className="mb-3" controlId="first_air_date_year">
                            <Form.Label column sm="2">  First Air Date Year:   </Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" />
                            </Col>
                        </Form.Group>

                        <Button variant="dark" type="submit" className="float-end">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(TvSearch);