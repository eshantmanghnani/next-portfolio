import React from "react";
import { MdExpandMore } from "react-icons/md";
import stroop from '/public/stroop.png';
import vault from "/public/vault.png";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Stroop! (Mobile Game)",
      imageSrc: stroop,
      url: "stroop",
    },
    {
      id: 2,
      title: "Vault (Hillarys App Store)",
      imageSrc: vault,
      url: "vault",
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
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-gray-800 dark:text-white text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;