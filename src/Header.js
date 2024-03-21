import React from "react";
import Logo from "./images/bee-705412_640.webp";

const Header = () => {
  return (
    <div className="header">
      <div className="custom-shape-divider-top-1706720690">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <nav>
        <div className="brand m-5">
          <h3 className="font-bold text-white text-lg md:text-3xl mt-1">
            Dev.web
          </h3>
        </div>
        <div className="btn_login mt-6 md:mt-8">
          <span className="m-2 text-white border-2 border-white rounded-full md:h-8 px-4 py-2 hover:bg-white hover:text-black font-bold transition ease-out duration-500">
            Me contacter
          </span>
        </div>
      </nav>
      <header className="grid md:grid-cols-2 heading">
        <div className="text_heading mt-5 md:mt-14">
          <h1 className="text-4xl md:text-7xl uppercase opacity-30 text-white">
            Web Solution
          </h1>
          <br />
          <span className="text-xl text-white">
            Explorer l'univers captivant de mes projets et <br />
            laissez-vous emporter par la passion.
          </span>
          <br />
          <button className="mt-5 text-white border-2 ms-2 border-white rounded-full md:h-12 px-4 py-2 hover:bg-white hover:text-black font-bold transition ease-out duration-500 hover:scale-125">
            Voir mes projets ...
          </button>
        </div>
        <div className="img_heading hidden md:block">
          <img src={Logo} className="h-80" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
