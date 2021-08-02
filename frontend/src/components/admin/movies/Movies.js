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
import MovieSearch from "./MovieSearch";
import TvSearch from "./TvSearch";

function Movies(props) {
    console.log("m props: ", props);
    const [searchType, setSearchType] = useState("");
    const [showmovies, setShowMovies] = useState(false);
    const [showtv, setShowTv] = useState(false);
    // setSearchType("");
    console.log("searchType: ", searchType);
    const handleChange = (event) => {
        console.log("event: ", event.target.value);
        setSearchType(event.target.value)
        // setOpen(false);
    };

    return (
        <Container>
            <h3> Movies </h3>
            <Row>
                <Col>
                    <Form>
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
            { (searchType === "movie") ? <MovieSearch/> :
                ( searchType === "series" ? <TvSearch /> : "" )
            }

        </Container>
    );
}

export default withRouter(Movies);