import React from 'react';
import Card from "./Card";
import {projets} from './data';
const Body = () => {

    return (
        <div className="container mx-auto mt-24 md:ms-10">
            <div className="m-2">
                <h1 className="font-bold text-2xl">Tous mes projets :</h1>
                <hr/>
            </div>
            <div className="md:grid md:grid-cols-3">
                {projets.map((item,index)=> <Card projects={item} key={index}></Card>)}
            </div>
        </div>
    );
};

export default Body;