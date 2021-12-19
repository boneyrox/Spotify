import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaPlayCircle, FaFastForward, FaFastBackward, FaVolumeUp, FaHeart, FaRandom, FaRetweet } from 'react-icons/fa';



function Footer() {
    return (
        <div className="footer flex flex-nowrap flex-row relative justify-between h-18 w-full shadow-md  bottom-0 p-3  " style={{ width: '100%' }} >
            <div className="flex  self-start w-64 m-2 mr-5">
                <img
                    className="footer_albumLogo h-10 rounded-sm m-2"
                    src="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
                    alt=""
                />
                <div className="flex flex-col justify-center text-center font-thin font-white-800  ">
                    <p className="text-sm font-semibold ">Not Playing</p>
                </div>
            </div>
            <div className="m-2 ml-5 lg:w-2/6 md:w-1/6 sm:w-64 flex justify-start">
                {/* play-pause, prev-next icons */}
                <div className="flex flex-row justify-center items-center">
                    <FaFastBackward className="text-lg m-1 cursor-pointer" />
                    <FaPlayCircle className="text-3xl m-1 cursor-pointer" />
                    <FaFastForward className="text-lg m-1 cursor-pointer" />
                    {/* add single horizontal line for seek  */}
                    <div className="w-full  border-2 rounded-md ml-10" ></div>


                </div>
            </div>
            <div className="flex m-4 w-64 justify-center self-end">
                {/* volume, heart, shuffle icons */}
                <FaHeart className="text-lg m-2 cursor-pointer" />
                <FaRandom className="text-lg m-2 cursor-pointer" />
                <FaRetweet className="text-lg m-2 cursor-pointer" />
                <FaVolumeUp className="text-lg m-2 cursor-pointer" />
            </div>
        </div>
    );
}

export default Footer;
