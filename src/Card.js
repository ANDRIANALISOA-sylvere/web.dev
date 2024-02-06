import React from 'react';
import {FaGithub} from "react-icons/fa6";
import {FaLink} from "react-icons/fa";
import Fond from "./images/restaurant.jpg"

const Card = ({projects}) => {
    return (
        <div className="card">
            <div>
                <img src={projects.Img ? projects.Img : Fond} alt="" className="img_card"/>
            </div>
            <div className="card-body mt-3">
                <div className="card-body-head">
                    <h1 className="font-bold text-2xl">{projects.titre}</h1>
                    <div className="card-footer">
                        {projects.url_github && <a href={projects.url_github}><FaGithub className="m-1"></FaGithub></a>}
                        {projects.url_deployement && <a href={projects.url_deployement}><FaLink className="m-1"></FaLink></a>}
                    </div>
                </div>
                <div className="badge_list">
                    {projects.tech && projects.tech.map((item,index)=> <span className="badge" key={index}>{item}</span>)}
                </div>
            </div>
        </div>
    );
};

export default Card;