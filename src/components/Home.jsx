import React,{useEffect,useState} from "react";

import Profile from "../assets/shalini.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import  '../css/Button.css'


const Home = () => {
 

  const [state] = useState({
    title: "Hi, I'm Shalini",

  });

  return (
    <div
      name="home"
      className="h-screen w-full "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            {state.title}
          </h2>
          <h3 className="text-2xl sm:text-5xl font-bold ">
           <Typewriter options={{autoStart: true, loop: true, delay: 40, strings:["WEB Developer"],}} />
          </h3>

          <a id="button" className=" mx-auto mt-10">
            
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link
             to="projects"
             smooth
             duration={500}
             className=" mx-auto font-bold font-mono"
            >
            Projects<span><MdOutlineKeyboardArrowRight/></span>
            </Link>
            
          </a>
        
        </div>

        <div className=" h-[500px]">
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
