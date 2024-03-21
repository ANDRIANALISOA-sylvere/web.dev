import React from "react";
import font from "./images/font.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Auteur = () => {
  return (
    <div className="auteur">
      <div className="container mx-auto mt-5 flex justify-start">
        <div className="p-2 ms-12 mr-3">
          <img src={font} alt="" className="md:rounded-full h-20" />
        </div>
        <div className="icone">
          <h1 className="font-bold text-white text-lg md:text-3xl mt-1">
            Joséphin Sylvère
          </h1>
          <div className="mt-4 md:mt-8 flex justify-start gap-2 md:gap-4">
            <span>
              <FaGithub></FaGithub>
            </span>
            <span>
              <FaFacebook></FaFacebook>
            </span>
            <span>
              <FaLinkedin></FaLinkedin>
            </span>
            <span>
              <FaInstagram></FaInstagram>
            </span>
            <span>
              <FaWhatsapp></FaWhatsapp>
            </span>
            <span>
              <FaTelegram></FaTelegram>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auteur;
