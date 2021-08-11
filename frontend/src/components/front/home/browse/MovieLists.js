import React, {useState, Fragment, useEffect, useRef} from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import styles from "./Browse.module.css";
import frontStyles from "../../front.module.css";

function MovieLists() {
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

    const movieData = [];
    // {/*<div dangerouslySetInnerHTML={{__html: movieData[0].div}} />*/}
    for(var i=0; i<8; i++) {
        movieData.push( <div className={styles.slider}>
                            <img src="https://image.tmdb.org/t/p/w500/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
                                     className={styles.listImgWidth} alt=""/>
                        </div>
        );
    }
    return(
        <Fragment>
            <div className={frontStyles.videoList}>
                <h3 className={frontStyles.listHeading}>
                    Movies
                    <span className={frontStyles.explore}> Explore All </span>
                    <span>
                        <svg width="24" height="18" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                        </svg>
                    </span>
                </h3>
                <Slide {...properties}>
                    { movieData }
                </Slide>
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
