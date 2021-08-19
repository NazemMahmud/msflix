import React, {Fragment} from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import frontStyles from "./video.module.css";

function TvLists() {

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

    const tvData = [];
    for(var i=0; i<8; i++) {
        tvData.push( <div className={frontStyles.slider}>
                <img src="https://image.tmdb.org/t/p/w500/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
                     className={frontStyles.listImgWidth} alt=""/>
                </div>
        );
    }
    return(
        <Fragment>
            <div>
                <div className={frontStyles.videoList}>
                    <h3 className={frontStyles.listHeading}>
                        Tv Series
                        <span className={frontStyles.explore}> Explore All </span>
                        <span>
                            <svg width="24" height="18" viewBox="0 0 24 24">
                                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                            </svg>
                        </span>
                    </h3>
                    <Slide {...properties}>
                        { tvData }
                    </Slide>
                </div>
            </div>
        </Fragment>

    )
}

export default TvLists;
