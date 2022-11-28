import React,{useState} from "react";
import { motion } from "framer-motion";
import useCollapse from 'react-collapsed'
import Card from "./Card";

const Experience = () => {
// const [Open,setOpen]=useState(false)
const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
const experience = [
  {
    // id: 1,
    name: "WEB DEVELOPER",
    title: "Gaius Networks (Filpped.ai), New York",
    desc: "IT Services and IT Consulting.",
    style: "bg-blue-400",
    one: "Data modelling",
    two: "Working on NLP engines",
    three: "Content Creation",
  },
  {
    // id: 2,
    name: "GOOGLE CROWDSOURCE INFLUENCER",
    // title: "The Entrepreneurship Network, Chennai",
    // desc: "The Entrepreneurship Network is an Edu-Tech company.",
    style: "bg-red-400",
    one: "Development Using Django Rest Framework",
    two: "Software Development in Python",
    three: "",
  },
  {
    // id: 3,
    name: "GOOGLE WOMEN TECHMAKER SCHOLAR 2021",
    // title: "Team Envision (Aaruush), Chennai ",
    // desc: " Team Envision is a Multidisciplinary technical team of Aaruush (National-Level Techno-management Fest at SRMIST) that aims to provide solutions to most campus and societal issues and problems.",
    style: "bg-green-400",
    one: "Qualified Internal Round Of Smart India Hackathon.",
    two: "Found solutions to campus-related issues through ideation (ideas are under implementation).",
    three: "Team management.",
  },
  {
    name: "OPEN SOURCE PROGRAMS",
    // title: "Sponsorship and Marketing (Aaruush), Chennai",
    // desc: "Identifying and developing sponsor marketing / promotional opportunities through research, creative thinking, and industry-standard campaigns.",
    style: "bg-yellow-400",
    one: "Cresting pipelines of potential sponsors and partners.",
    two: "Making proposals for sponsors and partners.",
    three: "Team management",
  },
  {
    name: "AMBASSADOR",
    // title: "Sponsorship and Marketing (Aaruush), Chennai",
    // desc: "Identifying and developing sponsor marketing / promotional opportunities through research, creative thinking, and industry-standard campaigns.",
    style: "bg-purple-400",
    one: "Cresting pipelines of potential sponsors and partners.",
    two: "Making proposals for sponsors and partners.",
    three: "Team management",
  }
  
];

  return (
    <div
      name="experience"
      className=" w-full  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {experience.map(({ item, index,name,style,one,two,three}) => {
          return<Card 
          key={index} item={item} name={name}  style={style} one={one} two={two} three={three}
          />
        })}
        </div>

      </div>
    </div>
  );
};

export default Experience;
