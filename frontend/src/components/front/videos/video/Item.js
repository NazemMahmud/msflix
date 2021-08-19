import React, {useState, Fragment, useEffect, useRef} from "react";
import classNames from 'classnames';
import { Slide } from "react-slideshow-image";

import {Button, Row, Col, Container} from "react-bootstrap";
import 'react-slideshow-image/dist/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import styles from "./item.module.css";

// import styles from "./video.module.css";
import { data as info } from "./data"

function Item(props) {
    /**
     * API call get Video Info
     * 1. Trailer: pop up
     * 2. poster image left: banner image top
     * 3. Movie name, release year, runtime, film rating (imdb rating, rotten tomatoes)
     * 4. Genres
     * 5. Directors
     * 6. Writers
     * 7. Video Info:
     * 8. Audio Info
     * 9. Video Description
     * 10. Tags
     * 11. Slider for cast and crew
     * @type {string}
     */
    // console.log("Info: ", info);
    const [data, setData] = useState(info.data);
    useEffect(() => {
        console.log("data: ", info.data);
        // let mounted = true;
        // if (mounted) {
        //     setData(info.data);
        //     console.log("set data: ", data);
        // }
        // return () => mounted = false;
    });


    const buttonClasses = classNames('styles.mTop', 'styles.infoButtons');
    const path = props.match.path.split("/");

    const videoId = path[1] === "movies" ? props.match.params.movieId : props.match.params.seriesId;
    const uId = props.match.params.uid;
    /**
     * Slider properties
     * @type {{duration: number, nextArrow: *, prevArrow: *, slidesToScroll: number, slidesToShow: number, indicators: boolean, autoplay: boolean}}
     */
    // const properties = {
    //     duration: 3000,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     autoplay: false,
    //     indicators: false,
    //     prevArrow: <button className="nav default-nav" style={{"background": "transparent"}} data-type="prev" aria-label="Previous Slide">
    //         <svg width="24" height="24" viewBox="0 0 24 24">
    //             <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
    //         </svg>
    //     </button>,
    //     nextArrow: <button className="nav default-nav" style={{"background": "transparent"}} data-type="next" aria-label="Next Slide">
    //         <svg width="24" height="24" viewBox="0 0 24 24">
    //             <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
    //         </svg>
    //     </button>
    // };

    const genres = [];

    const totalSeasons = "3 seasons";
    const runTime = "2h 22m";
    const midLineText = props.type === "movie" ? runTime : totalSeasons;

    const videoItemLists = [];
    // for(let i=0; i<8; i++) {
    //     let genreData = [];
    //     for (let g=0; g<genres.length; g++) {
    //         const genre = <span>{ genres[g].name}</span>;
    //         genreData.push(genre);
    //         if (g < genres.length - 1){
    //             genreData.push(<span className={styles.separator} />);
    //         }
    //     }
        // const div = <div className={styles.slideItem}>
        //     <div className={styles.slider}>
        //         <img src="https://image.tmdb.org/t/p/w500/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
        //              className={styles.listImgWidth} alt=""/>
        //     </div>
        //     <div className={styles.sliderInfo}>
        //         <Row>
        //             <Col className={styles.mTop}>
        //                 <button className={`${styles.playButton} ${styles.infoButtons}`}>
        //                     <i className="fa fa-play" />
        //                 </button>
        //                 <button className={`${styles.plusButton} ${styles.infoButtons}`}>
        //                     <i className="fa fa-plus" />
        //                 </button>
        //
        //                 <button className={`${styles.detailsButton} ${styles.infoButtons}`}>
        //                     <i className="fa fa-info-circle" />
        //                 </button>
        //             </Col>
        //         </Row>
        //
        //         <p className={styles.duration}> {midLineText}</p>
        //         <p className={styles.genres}>
        //             {genreData}
        //         </p>
        //     </div>
        // </div>;
        // videoItemLists.push( div );
    // }
    return(
        <Fragment>
            <div className={styles.info}>
                {/*Banner Image */}
                <Row>
                    <Col>
                        <div className={styles.bannerImage} style={{backgroundImage: `url(${data.images.poster})`}}></div>
                    </Col>
                </Row>

                {/*Thumb and Other Info*/}
                <Row className={styles.itemContainer}>
                    {/*Thumb Image*/}
                    <Col md="3" lg="3" className={styles.thumbContainer}>
                        <img className={styles.thumb} src={data.images.thumb} alt="Banner Image"/>
                    </Col>
                    {/*Information*/}
                    <Col md="9" lg="9">
                        <div className={styles.infoSectionOne}>
                            <Col>
                                <div className={styles.titleSection}>
                                    <h3 className={styles.title}> Black Widow</h3>
                                </div>
                                <div className={styles.infoOneSubOne}>
                                    <span className={styles.releaseYear}>2021</span>
                                    <span className={styles.runTime}>134 mins</span>
                                    <span className={styles.filmRating}>PG-13</span>
                                </div>
                            </Col>
                            <Col></Col>
                        </div>
                        <Row></Row>
                    </Col>
                </Row>
            </div>

        </Fragment>

    )
}

export default Item;
