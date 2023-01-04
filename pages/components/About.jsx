import test from '/public/asdasd.png';
import Image from 'next/legacy/image';
import cognizant from '/public/cognizant.png'
import { useState } from "react";
import { useThemeContext } from '../context/themes';

const About = () => {
    return (
        <div className="mx-auto text-center md:text-left py-8">
            <div className="m-auto md:grid grid-cols-3 gap-6">
                <div className="col-span-2">
                <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-blue-500 font-bold">About</h2 >
                    <h2 className="py-4  text-gray-800 dark:text-white">Information About Me</h2>
                    <p className="py-2  text-gray-800 dark:text-white">I am an employee currently working for Cognizant Softvision in Makati city, Philippines. 
                        I have a background in several programming languages such as C, C++, C# and Java. 
                    </p>
                    <p className="py-2  text-gray-800 dark:text-white">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </p>
            </div>
            <div className='w-10/12 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center hover:scale-105 ease-in duration-300'>
          <Image src={cognizant} className='rounded-xl' alt='/' />
            </div>
            </div>
        </div>
    )
}

export default About
