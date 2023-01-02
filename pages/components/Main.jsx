import React from 'react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import test from '/public/asdasd.png';
import Image from 'next/legacy/image';
import { useState } from "react";

const Main = () => {
 const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">eshantmanghnani</h1>
            <ul className="flex items-center">
              <li><button onClick={() => setDarkMode(!darkMode)}>
               {darkMode ? (
                <BsFillSunFill size="2rem" fill="white" />
                 ) : (
                  <BsFillMoonStarsFill size="2rem" />
                   )}
                </button></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href ="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Eshant Manghnani</h2>
            <h3 className="text-2xl py-2 dark:text-white">Junior Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Java developer currently working for Cognizant Softivision
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a
              href='https://www.instagram.com/eshantmanghnani/?hl=en'
              target='_blank'
              rel='noreferrer'
            >
            <AiFillInstagram />
            </a>
            <a
              href='https://ph.linkedin.com/in/eshant-manghnani-94b8b3137'
              target='_blank'
              rel='noreferrer'
            >
            <AiFillLinkedin />
            </a>
            <a
              href='https://github.com/eshantmanghnani'
              target='_blank'
              rel='noreferrer'
            >
            <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image src={test} layout="fill" objectFit="cover"/>
          </div>
        </section>
      </main>
    </div>
    )
}

export default Main
