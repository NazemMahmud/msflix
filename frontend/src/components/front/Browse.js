import React, {useState, Fragment} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"

import FrontLayout from "./layout/default/FrontLayout";

function Browse() {
    // const [videoSource, setVideoFilePath] = useState(null);
    // const [flag, setFlag] = useState(false);
    // const videoSource = "https://www.youtube.com/watch?v=Fp9pNPdNwjI&ab_channel=MarvelEntertainment";
    // D:\Projects\python\msflix\frontend\src\components\front\Browse.js
    // const videoPath = "P:\\Video\\Movies\\Raya%20And%20The%20Last%20Dragon%20(2021)%20[720p]%20[BluRay]%20[YTS.MX]\\Raya.And.The.Last.Dragon.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4";
    // const videoSource = URL.createObjectURL(videoPath);
    const videoPath = "P:/Video/Movies/Raya%20And%20The%20Last%20Dragon%20(2021)%20[720p]%20[BluRay]%20[YTS.MX]/Raya.And.The.Last.Dragon.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4";
    // const videoPath = "D:\\downloads\\Overflow\\Watch Overflow Episode 1 [Uncensored] Online Free KissAnime.mp4";
    // const videoSource = URL.createObjectURL(videoPath);
    // if (videoSource) {
    //     setFlag(true);
    // }
    // const handleVideoUpload = (event) => {
    //     console.log("File !!: ", event.target.files[0]);
    //     setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    // };

    return (
        <Fragment>
            <FrontLayout>
                <Container>
                    {/*<input type="file" onChange={handleVideoUpload} />*/}
                    {/*Top sample video trailer*/}
                    <Row>
                        <Col>
                            {/*<ReactPlayer controls url={videoSource} width="100%" height="880px" />*/}
                            {/*(flag ? <ReactPlayer controls url={videoSource} width="100%" height="880px" /> : <p>No video</p>*/}
                            {/*<video width="320" height="240" controls>*/}
                            {/*    <source src="movie.mp4" type="video/mp4">*/}
                            {/*        <source src="movie.ogg" type="video/ogg">*/}
                            {/*            Your browser does not support the video tag.*/}
                            {/*</video>*/}

                        </Col>
                    </Row>
                    {/* for movies */}
                    <Row>
                        <Col>
                            <h1>Movies</h1>
                        </Col>
                    </Row>

                    {/* for TV */}
                    <Row>
                        <Col>
                            <h1>TV Dramas</h1>
                        </Col>
                    </Row>
                </Container>
            </FrontLayout>
        </Fragment>
    );
}

export default Browse;