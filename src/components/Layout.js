import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";



// import logo image from a https ur
const logo = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FSpotify_logo_horizontal_black.jpg&f=1&nofb=1'

export const DashboardLayout = ({ children }) => {
    return (
        <BodyWrapper>
            <div className="flex h-screen bg-white">
                <NavSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">

                    <div className='header_main m-0 flex justify-center items-center shadow-sm h-64' >

                        <h1 className="text-6xl text-white indent-9 tracking-widest font-bold " >PLAY.   RESUME.</h1>

                    </div>



                    <main className="flex flex-col justify-between items-baseline h-screen w-screen overflow-auto " >


                        {children}


                    </main>
                </div>
            </div>
        </BodyWrapper>
    );
};
