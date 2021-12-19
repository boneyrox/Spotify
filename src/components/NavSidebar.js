/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import React, { useState } from "react";
import { FaHeadphones, FaBars, FaSearch, FaPlayCircle, FaAlignLeft } from "react-icons/fa";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";


const logo = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FSpotify_logo_horizontal_black.jpg&f=1&nofb=1'
export const NavSidebar = () => {
    // const history = useHistory();
    const location = { pathname: 'void' }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Sidebar Overlay */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"
                    }`}
            />



            <button
                className="btn-menu"
                onClick={() => setIsSidebarOpen(true)}
                type="button"
                style={{ position: 'fixed', left: '1vh', top: '1vh' }}
            >
                <FaBars />
            </button>


            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                    }`}
                style={{ backgroundColor: '#574fd8' }}
            >
                <div className="flex items-center justify-center mt-10 text-center py-6">
                    {/* <span className="mx-2 text-2xl font-semibold text-black">
                        Ourbank
                    </span> */}
                    <img className=' place-items-center ' src={logo} alt="" />
                </div>

                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        // history.push(itemId);
                    }}
                    items={[
                        {
                            title: "Discover",
                            itemId: "/discover",
                            elemBefore: () => <FaHeadphones className="text-lg text-white-100" />
                            // Optional
                        },
                        {
                            title: "Search",
                            itemId: "/search",
                            elemBefore: () => <FaSearch className="text-lg text-white-900" />

                        },
                        {
                            title: "Playlists",
                            itemId: "/playlists",
                            elemBefore: () => <FaPlayCircle className="text-lg text-white-900" />


                        },
                        {
                            title: "Charts",
                            itemId: "/charts",
                            elemBefore: () => <FaAlignLeft className="text-lg text-white-900" />


                        }
                    ]}
                />


            </div>
        </>
    );
};
