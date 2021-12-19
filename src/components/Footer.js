import React from "react";


function Footer() {
    return (
        <div className="footer flex flex-row relative justify-start h-18 w-full  bottom-0 p-3  bg-purple-800" style={{ width: '100%' }} >
            <div className="flex  self-start w-1/4 ">
                <img
                    className="footer_albumLogo h-10 rounded-sm m-2"
                    src="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
                    alt=""
                />
                <div className="flex flex-col text-center font-thin font-white-800 ">
                    <h4>Song</h4>
                    <p>Not Playing</p>
                </div>
            </div>
            <div className="footer__center">
                center
            </div>
            <div className="self-end justify-end">
                volume controls
            </div>
        </div>
    );
}

export default Footer;
