import Image from "next/image";
import React from "react";
import html from '/public/html.png';
import css from "/public/css.png";
import javascript from "/public/javascript.png";
import reactImage from "/public/react.png";
import nextjs from "/public/nextjs.png";
import tailwind from "/public/tailwind.png";
import node from "/public/node.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Node JS",
      src: node,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-l text-center md:text-left py-16">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">
          Skills
        </h2>
        <p className="py-8 text-gray-800 dark:text-white">
         These are the languages that I have used in past projects and have also been studying while working on current projects
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {experience.map(({ id, title, src }) => (
            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
            <Image
              src={src}
              alt={title}
              className="rounded-md duration-200 
              hover:scale-110"
            />
            <h2 className="text-center text-gray-800 dark:text-white text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">
              {title}
            </h2>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience