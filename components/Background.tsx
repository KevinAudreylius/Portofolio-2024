import { CodeBracketSquareIcon, CommandLineIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';

const Background = () => {
  return  <div id='service' className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
    <p className='heading'>
     MY <span className='text-yellow-400'>SERVICE</span>
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div data-aos="fade-right">
            <div className='bg-red-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-slate-100'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    FRONTEND
                </h1>
                <p className='text-[15px] text-slate-100 font-normal'>
                I have experience in creating various types of websites using HTML, CSS, and JavaScript. In addition, I have worked on several projects that involve responsive design  and front-end frameworks like React.
                </p>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
            <div className='bg-orange-600 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-slate-100'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    BACKEND
                </h1>
                <p className='text-[15px] text-slate-100 font-normal'>
                I also possess experience in backend development using Python and Golang. In my projects, I integrated web applications with APIs and databases, ensuring seamless connectivity and functionality.
                </p>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
            <div className='bg-yellow-500 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]'>
                <PaintBrushIcon className='w-[6rem] h-[6rem] mx-auto text-slate-100'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    UI/UX DESIGN
                </h1>
                <p className='text-[15px] text-slate-100 font-normal'>
                I also enjoy designing websites and have participated in UI/UX competition. Through these experiences, I have developed a skill for creating intuitive and visually appealing interfaces, also stay updated with the latest trends.
                </p>
            </div>
        </div>
    </div>
  </div>;
};

export default Background;