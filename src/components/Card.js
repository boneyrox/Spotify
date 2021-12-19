import React from 'react';

export default function Card({ item, key }) {

    return (
        <div className="flex flex-col h-18 w-30 m-2 justify-center items-center cursor-pointer   " style={{
            display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }} >

            <img
                className="h-32 w-32 rounded-md m-1 bg-black shadow-lg hover:opacity-50 transition-opacity duration-500 ease-out"
                src={item.images ? item.images[0].url : item.icons[0].url}
                alt=""
            />
            <div className="text-center w-30">
                <p className="itemsList__name h-5 font-sm font-semibold text-clip hover:underline  ">{item.name}</p>
            </div>

        </div>)
}