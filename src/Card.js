import React from 'react';
import fond from "./images/restaurant.webp";
import {FaGithub} from "react-icons/fa6";
import {FaLink} from "react-icons/fa";

const Card = ({projects}) => {
    return (
        <div className="card">
            <div>
                <img src={fond} alt="" className="img_card"/>
            </div>
            <div className="card-body mt-3">
                <div className="card-body-head">
                    <h1 className="font-bold text-2xl">{projects}</h1>
                    <div className="card-footer">
                        <FaGithub className="m-1"></FaGithub>
                        <FaLink className="m-1"></FaLink>
                    </div>
                </div>
                <div className="badge_list">
                    <span className="badge">React</span>
                    <span className="badge">Sass</span>
                    <span className="badge">Tailwind</span>
                    <span className="badge">Laravel</span>
                </div>
            </div>
        </div>
    );
};

export default Card;