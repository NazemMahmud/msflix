import React, {useState, Fragment, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { Slide } from "react-slideshow-image";
import {Button, Row, Col} from "react-bootstrap";
import 'react-slideshow-image/dist/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

import styles from "./video.module.css";
import {data as infoData } from "./video/data"

function Lists(props) {
    const buttonClasses = classNames('styles.mTop', 'styles.infoButtons');
    /**
     * Slider properties
     * @type {{duration: number, nextArrow: *, prevArrow: *, slidesToScroll: number, slidesToShow: number, indicators: boolean, autoplay: boolean}}
     */
    const properties = {
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        indicators: false,
        prevArrow: <button className="nav default-nav" style={{"background": "transparent"}} data-type="prev" aria-label="Previous Slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
            </svg>
        </button>,
        nextArrow: <button className="nav default-nav" style={{"background": "transparent"}} data-type="next" aria-label="Next Slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
            </svg>
        </button>
    };
    console.log("Info: ", infoData);
    const genres = [
        {   id: 1, name: "Genre 1"},
        {   id: 2, name: "Genre 2"},
        {   id: 3, name: "Genre 3"},
    ];

    const videos = [
        { id: 111, uid: "1234567892", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 211, uid: "123456789s", name: "Black Widow", type: "series", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 311, uid: "123456789h", name: "Black Widow", type: "series", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 411, uid: "123456789r", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 511, uid: "123456789d", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 611, uid: "123456789c", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 711, uid: "123456789b", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
        { id: 811, uid: "123456789a", name: "Black Widow", type: "movie", image_path: "https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" },
    ];

    const totalSeasons = "3 seasons";
    const runTime = "2h 22m";
    const midLineText = props.type === "movie" ? runTime : totalSeasons;

    const videoItemLists = [];
    for(let i=0; i<videos.length; i++) {
        let genreData = [];
        for (let g=0; g<genres.length; g++) {
            const genre = <span>{ genres[g].name}</span>;
            genreData.push(genre);
            if (g < genres.length - 1){
                genreData.push(<span className={styles.separator} />);
            }
        }
        const infoLinkName = videos[i].type === "movie" ? `/movies/${videos[i].id}/${videos[i].uid}` :
            `/series/${videos[i].id}/${videos[i].uid}`;
        const div = <div className={styles.slideItem} key={videos[i].id}>
            <div className={styles.slider}>
                <img src={videos[i].image_path}
                     className={styles.sliderImage} alt={videos[i].name}/>
            </div>
            <div className={styles.sliderInfo}>
                <Row>
                    <Col className={styles.mTop}>
                        <button className={`${styles.playButton} ${styles.infoButtons}`}>
                            <i className="fa fa-play" />
                        </button>
                        <button className={`${styles.plusButton} ${styles.infoButtons}`}>
                            <i className="fa fa-plus" />
                        </button>
                        <Link to={infoLinkName}>
                            <button className={`${styles.detailsButton} ${styles.infoButtons}`}>
                                <i className="fa fa-info-circle" />
                            </button>
                        </Link>
                    </Col>
                </Row>

                <p className={styles.duration}> {midLineText}</p>
                <p className={styles.genres}>
                    {genreData}
                </p>
            </div>
        </div>;
        videoItemLists.push( div );
    }
    return(
        <Fragment>
            <div className={styles.videoList}>
                <h3 className={styles.listHeading}>
                    {props.type === "movie" ? "Movies" : "Tv Series" }
                    <span className={styles.explore}> Explore All </span>
                    <span>
                        <svg width="24" height="18" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                        </svg>
                    </span>
                </h3>
                <div>
                    <Slide {...properties}>
                        { videoItemLists }
                    </Slide>
                </div>
            </div>
        </Fragment>

    )
}

export default Lists;
