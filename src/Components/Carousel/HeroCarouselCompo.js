import React from "react";
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { NextArrow, PrevArrow } from "./ArrowCompo";


function HeroCarousel() {

    const image = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1654067732011_fnb_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1653635818524_superweb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1651492562825_restaurant.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1654251422405_compartmentno6_web.jpg"
    ];


    const settings = {
        arrow: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }


    const settingsSm = {
        fade: true,
        centerPadding: '0px',
        arrows: false,
        autoplay:false
    };


    const settingsMd = {
        centerPadding: '150px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    const settingsLg = {
        centerPadding: '250px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <>
            <div>
                <div className="md:hidden">
                    <Slider {...settings} {...settingsSm}>
                        {
                            image.map((ig) => (
                                <div className="h-40">
                                    <img className="h-full w-full p-2 rounded-lg" src={ig} alt="IMG" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="hidden md:block lg:hidden">
                    <Slider {...settingsMd} {...settings}>
                        {
                            image.map((ig) => (
                                <div className="h-60">
                                    <img className="h-full w-full p-2 rounded-lg" src={ig} alt="IMG" />
                                </div>
                            ))
                        }

                    </Slider>
                </div>
                <div className="hidden lg:block">
                    <Slider {...settingsLg} {...settings}>
                        {
                            image.map((ig) => (
                                <div className="h-80">
                                    <img className="h-full w-full p-4 rounded-xl" src={ig} alt="IMG" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
}
export default HeroCarousel;