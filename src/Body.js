import React from 'react';
import img4 from "./images/e71d1184f754c23781814ed2c3d8abe5.jpeg";
import {FaGithub} from "react-icons/fa6";
import {FaLink} from "react-icons/fa";

const Body = () => {
    return (
        <div className="container mx-auto mt-24">
            <div className="m-2">
                <h1 className="font-bold text-2xl">Tous mes projets :</h1>
                <hr/>
            </div>
            <div className="grid grid-cols-3">
                <div className="card">
                    <div>
                        <img src={img4} alt="" className="img_card"/>
                    </div>
                    <div className="card-body">
                        <h1 className="font-bold text-2xl">Movie_App</h1>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Dolorem, earum expedita iste laborum modi
                            molestiae nam necessitatibus repellat sed voluptatibus.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="m-1">
                            <a href="https://github.com" target="_blank"><FaGithub></FaGithub></a>
                        </div>
                        <div className="m-1">
                            <a href=""><FaLink></FaLink></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={img4} alt="" className="img_card"/>
                    </div>
                    <div className="card-body">
                        <h1 className="font-bold text-2xl">Movie_App</h1>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Dolorem, earum expedita iste laborum modi
                            molestiae nam necessitatibus repellat sed voluptatibus.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="m-1">
                            <a href="https://github.com" target="_blank"><FaGithub></FaGithub></a>
                        </div>
                        <div className="m-1">
                            <a href=""><FaLink></FaLink></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={img4} alt="" className="img_card"/>
                    </div>
                    <div className="card-body">
                        <h1 className="font-bold text-2xl">Movie_App</h1>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Dolorem, earum expedita iste laborum modi
                            molestiae nam necessitatibus repellat sed voluptatibus.
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="m-1">
                            <a href="https://github.com" target="_blank"><FaGithub></FaGithub></a>
                        </div>
                        <div className="m-1">
                            <a href=""><FaLink></FaLink></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;