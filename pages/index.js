import Head from 'next/head'
import About from './components/About';
import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import { useTheme } from 'next-themes'

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);
  if (!mounted) return <></>;
  return (
    <div className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Head>
        <title>Eshant Manghnani Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons  text-gray-800 dark:text-white">eshantmanghnani</h1>
            <ul className="flex items-center">
              <li><button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
               {resolvedTheme === 'dark' ? (
                <BsFillSunFill size="2rem" fill="white" />
               ) : (
                <BsFillMoonStarsFill size = "2rem" fill="black" />
               )}
                </button></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href ="#">Resume</a></li>
            </ul>
          </nav>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
