import React from 'react';

export default function Card({ item, key }) {

    return (
        <div className="flex flex-col ">

            <img
                className="h-24 w-24 rounded-half m-1"
                src={item.images ? item.images[0].url : item.icons[0].url}
                alt=""
            />
            <div className="itemsList__info">
                <h4 className="itemsList__name h-4 ">{item.name}</h4>
            </div>

        </div>)
}