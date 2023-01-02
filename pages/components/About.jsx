import test from '/public/asdasd.png';
import Image from 'next/legacy/image';
import { useState } from "react";

const About = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
        <div className="w-full md:h-screen p-2 flex items-center py-16 bg-white px-10 dark:bg-black">
            <div className="max-w-[1540px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className="py-4">Information About Me</h2>
                    <p className="py-2">I am an employee currently working for Cognizant Softvision in Makati city, Philippines. 
                        I have a background in several programming languages such as C, C++, C# and Java. 
                    </p>
                    <p className="py-2">I am an employee currently working for Cognizant Softvision in Makati city, Philippines. 
                        I have a background in several programming languages such as C, C++, C# and Java. 
                    </p>
            </div>
            {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={test} className='rounded-xl' alt='/' /> */}
            {/* </div> */}
            </div>
        </div>
        </div>
    )
}

export default About
