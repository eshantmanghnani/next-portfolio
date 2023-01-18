import React from "react";
import { MdExpandMore } from "react-icons/md";
import stroop from '../../public/stroop.png';
import vault from "../../public/vault.png";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Stroop! (Mobile Game)",
      imageSrc: stroop,
      url: "stroop",
      description: "This is a mobile application that I had worked on during my free time in University using Unity (C#). This application was a game that simply tested a user's concentration and cognitive ability using the Stroop effect. The goal was for a user to select colors that did not match their text and leave the colors that did match their text. I had also implemented a leaderboard using Facebook APIs as well as Playfab" 
    },
    {
      id: 2,
      title: "Vault (Hillarys App Store)",
      imageSrc: vault,
      url: "vault",
      description: "This is an application I had worked on during my internship with Hillarys Blinds in Nottingham. I had worked on implementing the download function for the apps that were hosted on Firebase as well as implementing a cache where commands sent by an API would be stored in the application until a user refreshed their application. This helped save costs on our Firebase membership as we were only using minimal commands instead of sending one every time a user needed to update."
    },
    // {
    //   id: 3,
    //   title: "use state explained",
    //   imageSrc: javascript,
    //   url: "use-state-hook",
    // },
    // {
    //   id: 4,
    //   title: "react parallax scroll",
    //   imageSrc: reactImage,
    //   url: "react-parallax",
    // },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-l text-center md:text-left py-16">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">
          Projects I have worked on
        </h2>
        <p className="py-10 text-gray-800 dark:text-white">
          Some projects I have worked on in my free time, during university as well as projects I've worked on during my internship.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url, description }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden hover:scale-110 rounded-md duration-200">
                <Image
                  src={imageSrc}
                  alt={title}
                />
                <h2 className="text-center text-gray-800 dark:text-white text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
                <p className=" text-gray-800 dark:text-white text-base my-4 duration-200 px-2">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;