import React, {useState, Fragment, useEffect, useRef} from "react";
import classNames from 'classnames';
import { Slide } from "react-slideshow-image";
import {Button, Row, Col} from "react-bootstrap";
import 'react-slideshow-image/dist/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

import styles from "./video.module.css";

function MovieLists(props) {
    // componentDidMount(){
    //     $('.inner-repeat').each(function (){
    //         var next = $(this).next();
    //         if (!next.length) {
    //             next = $(this).siblings(':first');
    //         }
    //         next.children(':first-child').clone().appendTo($(this));
    //
    //         for (var i=0;i<2;i++) {
    //             next=next.next();
    //             if (!next.length) {
    //                 next = $(this).siblings(':first');
    //             }
    //             next.children(':first-child').clone().appendTo($(this));
    //         }
    //     })
    // }
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

    const genres = [
        {   id: 1, name: "Genre 1"},
        {   id: 2, name: "Genre 2"},
        {   id: 3, name: "Genre 3"},
    ];

    const totalSeasons = "3 seasons";
    const runTime = "2h 22m";
    console.log("Type: ", props.type);
    const midLineText = props.type === "movie" ? runTime : totalSeasons;

    const movieData = [];
    // {/*<div dangerouslySetInnerHTML={{__html: movieData[0].div}} />*/}
    for(let i=0; i<8; i++) {
        let genreData = [];
        for (let g=0; g<genres.length; g++) {
            const genre = <span>{ genres[g].name}</span>;
            genreData.push(genre);
            if (g < genres.length - 1){
                genreData.push(<span className={styles.separator} />);
            }
        }
        const div = <div className={styles.slideItem}>
                        <div className={styles.slider}>
                            <img src="https://image.tmdb.org/t/p/w500/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
                                 className={styles.listImgWidth} alt=""/>
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

                                    <button className={`${styles.detailsButton} ${styles.infoButtons}`}>
                                        <i className="fa fa-info-circle" />
                                    </button>
                                </Col>
                            </Row>

                            <p className={styles.duration}> {midLineText}</p>
                            <p className={styles.genres}>
                                {genreData}
                            </p>
                        </div>
                    </div>;
        movieData.push( div );
    }
    return(
        <Fragment>
            <div className={styles.videoList}>
                <h3 className={styles.listHeading}>
                    Movies
                    <span className={styles.explore}> Explore All </span>
                    <span>
                        <svg width="24" height="18" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                        </svg>
                    </span>
                </h3>
                <div>
                    <Slide {...properties}>
                        {/*<div className={styles.slideList} >*/}
                        { movieData }
                        {/*</div>*/}
                    </Slide>
                </div>
            </div>
            {/*<div className="col-md-12">
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
                data-type="multi"
                data-interval= "3000"
                style={{backgroundColor: 'transparent'}}>
                <div className="carousel-inner">
                    <div id="test" className="carousel-item inner-repeat active">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=1"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=2"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=3"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=4"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=5"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=6"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=7"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div id="test" className="carousel-item inner-repeat">
                        <div className="col-md-3">
                            <a href="#">
                                <img
                                    src="http://via.placeholder.com/250/000000&amp;text=8"
                                    class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
        </Fragment>

    )
}

export default MovieLists;
