import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { BsShare, BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import {
    WhatsappShareButton,
} from "react-share";

function lanuchRazorPay() {
    let options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: 100,
        currency: "INR",
        name: "Book-My-Show-Clone",
        description: "Movie Ticket Booking",
        image: "in.bmscdn.com/webin/common/icons/logo.svg",
        handler: () => { },
        theme: { color: "#B91C1C" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
}


function MoviePoster(props) {
    if (props.Mdetails.length == 0) {
        return (<></>);
    }

    const screen = ["2D,", "3D", "SCREEN X,", "3D,", "IMAX 2D,", "4DX 3D,", "IMAX 3D,", "4DX"];

    const lang = ["English", "Hindi,", "Kannada,", "Malayalam,", "Tamil,", "Telugu"];

    return (
        <>
            <div >
                <div className="w-full absolute">
                    <img className="w-full"
                        src={`https://image.tmdb.org/t/p/original${props.Mdetails.backdrop_path}`}
                        alt="" style={{ height: "32rem" }} />
                </div>
                <div className="w-full relative flex items-center" style={{ height: "32rem", backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)", fontFamily: "Sans-serif" }}>
                    <div className="flex w-full lg:w-[80%] m-auto flex-col md:flex-row">
                        <div className="md:w-80 w-full flex items-center">
                            <div className="p-4 md:w-full w-60 flex flex-col items-center">
                                <img className="w-full rounded-t-2xl shadow-2xl cursor-pointer"
                                    src={`https://image.tmdb.org/t/p/original${props.Mdetails.poster_path}`}
                                    alt="" />
                                <div className="w-full text-center text-white text-sm bg-black rounded-b-2xl py-1">In cinemas</div>
                            </div>
                            <div className="w-1/2 pr-2 md:hidden">
                                <div className="font-bold text-2xl text-white" >{props.Mdetails.title}</div>
                                <div className="flex items-center md:gap-3 gap-2 text-white">
                                    <FaHeart className="md:text-3xl text-xl text-red-700" />
                                    <div className="md:text-3xl text-base  font-bold">{(props.Mdetails.vote_average * 10).toPrecision(4)}%</div>
                                </div>
                                <div className="text-white inline-flex items-center md:text-base text-xs">{(props.Mdetails.vote_count / 1000).toPrecision(4)}K ratings<BiChevronRight /></div>
                            </div>
                        </div>
                        <div className="flex md:w-2/3 w-full text-white justify-between ">
                            <div className="flex flex-col w-full md:w-4/5 justify-center gap-4 pr-2 md:pl-0 pl-4">
                                <div className="lg:text-4xl font-bold md:text-2xl text-2xl md:block hidden" >{props.Mdetails.title}</div>
                                <div className="md:flex items-center md:gap-3 gap-2 hidden">
                                    <FaHeart className="md:text-3xl text-xl text-red-700" />
                                    <div className="md:text-3xl text-base  font-bold">{(props.Mdetails.vote_average * 10).toPrecision(4)}%</div>
                                    <div className="flex items-center md:text-base text-xs">{(props.Mdetails.vote_count / 1000).toPrecision(4)}K ratings<BiChevronRight /></div>
                                </div>
                                <div className="hidden md:flex justify-between items-center text-lg px-5 py-2 rounded-lg" style={{ backgroundColor: "#333333" }}>
                                    <div className="">
                                        <div className="font-bold">Add your rating & review
                                        </div>
                                        <div className="text-gray-300">Your ratings matter
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-white font-semibold px-2.5 py-1 rounded w-28" style={{ color: "#333333" }}>Rate now</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-black px-2 rounded-sm flex flex-nowrap md:text-base text-xs" style={{ backgroundColor: "#E5E5E5" }}>
                                        2D, 3D SCREEN X, 3D, IMAX 2D, 4DX 3D, IMAX 3D, 4DX
                                    </div>
                                    <div className="text-black px-2 rounded-sm md:text-base text-sm" style={{ backgroundColor: "#E5E5E5" }}>
                                        English, Hindi, Kannada, Malayalam, Tamil, Telugu
                                    </div>
                                </div>
                                <div className="md:text-base text-xs">
                                    {parseInt(props.Mdetails.runtime / 60)}h {props.Mdetails.runtime % 60}m • {props.Mdetails.genres.map((ind) => (ind.name + " "))} • UA • {props.Mdetails.release_date}
                                </div>
                                <div className="flex gap-6">
                                    <button className="bg-red-700 md:text-xl text-sm font-semibold md:px-8 md:py-3 px-3 py-1 md:rounded-lg rounded" onClick={lanuchRazorPay} >Book tickets</button>
                                    <WhatsappShareButton url={window.location.href} title={props.Mdetails.title}>
                                        <button className="flex items-center md:text-lg text-xs gap-3W px-3.5 py-2 rounded-md md:hidden gap-1" style={{ backgroundColor: "rgba(34, 34, 34, 0.8)" }}><BsWhatsapp className="md:text-2xl text-sm" /><div className="font-semibold">Share</div></button>
                                    </WhatsappShareButton>
                                </div>
                            </div>
                            <div>
                                <WhatsappShareButton url={window.location.href} title={props.Mdetails.title}>
                                    <button className="md:flex items-center text-base gap-3 px-3.5 py-2 rounded-md hidden" style={{ backgroundColor: "rgba(34, 34, 34, 0.8)" }}><BsWhatsapp className="text-xl font-bold" /><div className="font-semibold">Share</div></button>
                                </WhatsappShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MoviePoster;