import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Crypto from "../assets/food.jpg";
import Reg from "../assets/fest.jpg";
import Flipped from "../assets/portal.jpg";
import Bank from "../assets/bank.jpg";


const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Crypto,
    },
    {
      id: 2,
      src: Reg,
    },
    {
      id: 3,
      src: Flipped,
    },
    {
      id: 4,
      src: Bank,
    },
    
  ];

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div
      name="projects"
      className=" w-full  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-56"> */}
          <Slider {...settings}>
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" px-3 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-white hover:text-black hover:font-bold hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 bg-blue-500 hover:bg-white hover:text-black hover:font-bold duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          ))}
          </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Projects;
