import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return <div id='home' className="h-[100vh] bg-[url('/images/banner.jpg')] bg-cover bg-center" >
    <Particle />
    <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
            <h1 className='text-[35px] md:text-[40px] text-white font-bold'>
            HI, I'M <span className='text-yellow-400'>KEVIN AUDREYLIUS!</span> 
            </h1>
            <TextEffect />
            <p className='"mt-[2rem] text-[19px] text-[#ffffff99]'>
                Welcome to my creative portofolio. This website will help you to explore my work, discover my journey, and let's create something amazing together.
            </p>
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                <a href="https://github.com/KevinAudreylius/portofolio-2024/blob/asset/CV%20.pdf" target="_blank" rel="noopener noreferrer">
                    <button className='px-[1.8rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#9D59EF] text-black flex items-center space-x-2'>
                        <p> View CV </p>
                        <ArrowDownTrayIcon className='w-[2rem] h-[1.7rem] text-black'/>
                    </button>
                </a>
                {/* <button className='flex items-center space-x-2'>
                    <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#9D59EF] '/>
                    <p className='text-[20px] font-semibold text-white'> Watch The Video</p>
                </button> */}
            </div>
        </div>
        <div className='w-[500px] hidden bg-[#9C27B0] relative lg:flex items-center rounded-full h-[500px]'>
            <Image src="/images/profile.JPG" alt='user' layout='fill' className='object-cover rounded-full'/>
        </div>
    </div>
  </div>
};

export default Hero;