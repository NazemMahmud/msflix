import React, {useState, Fragment} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"

import styles from "./Browse.module.css";
import NavBar from "../../layout/default/navbar/NavBar";
import MovieLists from "./MovieLists";
import TvLists from "./TvLists";

function Browse() {
    /* const [videoSource, setVideoFilePath] = useState(null);
    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    }; */
    const [flag, setFlag] = useState(true);
    const videoSource = "https://www.youtube.com/watch?v=Fp9pNPdNwjI&ab_channel=MarvelEntertainment";
    // const videoPath = "P:\\Video\\Movies\\Raya%20And%20The%20Last%20Dragon%20(2021)%20[720p]%20[BluRay]%20[YTS.MX]\\Raya.And.The.Last.Dragon.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4";
    // const videoSource = URL.createObjectURL(videoPath);
    // const videoPath = "P:/Video/Movies/Raya And%20The%20Last%20Dragon%20(2021)%20[720p]%20[BluRay]%20[YTS.MX]/Raya.And.The.Last.Dragon.2021.720p.BluRay.x264.AAC-[YTS.MX].mp4";
    // const videoPath = "D:/downloads/Overflow/Watch%20Overflow%20Episode%201%20[Uncensored]%20Online%20Free%20KissAnime.mp4";
    // const videoPath = "D:/downloads/Overflow/Watch Overflow Episode 1 [Uncensored] Online Free KissAnime.mp4";
    // const reader = new FileReader();
    // const file = new File([], videoPath, {type: "video/mp4"});
    const banner = flag ?
                        <ReactPlayer controls url={videoSource} width="100%" height="1057px"
                                     className={styles.bannerPlayer} />
                                :
                                    <div className={styles.noBanner}>
                                        <h1 className={styles.noBannerHeading}>
                                            Video is corrupted :( <br /> Accio video
                                        </h1>
                                    </div>;
    return (
        <Fragment>
            <NavBar />
            <Container fluid className={styles.browseBody}>
                {/*<input type="file" onChange={handleVideoUpload} />*/}
                {/*Top sample video trailer*/}
                <Row>
                    <Col className={styles.banner}>
                        {/*This style is needed if video is from youtube*/}
                        {banner}

                        {/*<video width="320" height="240" controls src={videoPath}>
                            <source src={videoPath} type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                        </video>*/}
                    </Col>
                </Row>
                {/* for movies */}
                <div className={styles.sectionList}>
                    <Row>
                        <Col>
                            <MovieLists />
                        </Col>
                    </Row>
                </div>

                {/* for TV */}
                <div className={styles.sectionList}>
                    <Row>
                        <Col>
                            <TvLists />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default Browse;