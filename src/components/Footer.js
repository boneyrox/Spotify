import React from "react";


function Footer() {
    return (
        <div className="flex flex-row flex-nowrap justify-between h-18 w-full">
            <div className="footer__left">
                <img
                    className="footer_albumLogo h-6"
                    src="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
                    alt=""
                />
                <div className="footer__songInfo">
                    <h4>Song</h4>
                    <p>Not Playing</p>
                </div>
            </div>
            <div className="footer__center">
                center
            </div>
            <div className="footer__right">
                volume controls
            </div>
        </div>
    );
}

export default Footer;
