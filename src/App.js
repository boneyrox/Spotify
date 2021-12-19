import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { SpotifyApiContext } from "react-spotify-api";
import { DashboardLayout } from "./components/Layout";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";



import "react-spotify-auth/dist/index.css";
import "./styles/main.bundle.css";
import "./App.css";

function App() {
    const [token, setToken] = React.useState(Cookies.get('spotifyAuthToken'));

    const [data, setData] = useState({ featuredPlaylists: {}, newReleases: {}, categories: {} });

    const callApi = async () => {

        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        };
        // get all featured playlists, new releases, and categories from spotify and store in state
        let featuredPlaylists = axios.get('https://api.spotify.com/v1/browse/featured-playlists', { headers });
        let newReleases = axios.get('https://api.spotify.com/v1/browse/new-releases', { headers });
        let categories = axios.get('https://api.spotify.com/v1/browse/categories', { headers });


        axios.all([featuredPlaylists, newReleases, categories]).then(axios.spread((res1, res2, res3) => {
            // setdata to state with all data
            setData({ featuredPlaylists: res1.data, newReleases: res2.data, categories: res3.data });


        })).catch(err => {
            console.log('err', err)
            // if error then spotify auth token is invalid
            // remove token from cookies and revalidate
            localStorage.removeItem("spotifyAuthToken");
            setToken(null);
        })


    }


    useEffect(() => {
        if (token) {
            callApi();
        }

    });
    return (
        <div className="App">
            <DashboardLayout>
                <div className={`flex items-center ${token ? 'self-center' : 'justify-start'}`}>
                    <div className="row">
                        <div className="col-md-12">
                            {!token ? (
                                <div className="flex flex-col justify-self-start" >
                                    {/* <SpotifyApiContext.Provider value={token}> */}
                                    {/* Your Spotify Code here */}
                                    {/* <p>You are authorized with token: {token}</p> */}
                                    {data.featuredPlaylists.playlists && data.newReleases && data.categories ? (
                                        <div>
                                            <ItemsList items={data.featuredPlaylists.playlists.items} type="Featured Playlists" />
                                            <ItemsList items={data.newReleases.albums.items} type="New Releases" />
                                            <ItemsList items={data.categories.categories.items} type="Categories" />
                                        </div>

                                    ) : (
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    )}

                                    {/* </SpotifyApiContext.Provider> */}
                                </div>
                            ) : (
                                // Display the login page
                                <div className="flex flex-col w-full h-full justify-center  items-center bg-grey-300 " >
                                    <h1 className="text-6xl font-bold text-purple text-center mt-5 mb-5 p-4" >Login to continue...</h1>
                                    <SpotifyAuth
                                        redirectUri="http://localhost:3000"
                                        clientID="8727f35b55f04a62b8d39810d41192dd"
                                        localStorage={true}
                                        // noCookie={true}
                                        scopes={[Scopes.userReadPrivate, "user-read-email"]} // either style will work
                                        onAccessToken={(token) => setToken(token)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* // a fixed music player at the bottom of the page with play and pause buttons */}
                {/* stick to bottom of page */}
                <div className="flex justify-between w-full self-end">
                    <Footer />
                </div>
            </DashboardLayout>
        </div>
    );
}

export default App;
