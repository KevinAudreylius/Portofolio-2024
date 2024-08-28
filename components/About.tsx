import { ArrowDownCircleIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const About = () => {
  return <div id='about' className='bg-[#121121] pb-[1rem] pt-[4rem] md:pt-[8rem]'>
    <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
            <h1 className='text-[20px] font-bold uppercase text-[#9D59EF] mb-[1rem]'>
                ABOUT ME
            </h1>    
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                KEVIN <span className='text-yellow-400'>AUDREYLIUS</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
                <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                <p className='text-[19px] text-slate-300 w-[80%]'>
                    I'm a sophomore majoring in Computer Science. I’m interested to collaborate on new opportunities and bring fresh ideas to life. With a strong passion for coding, I'm always excited to learn and challenges myself to the next obstacle!
                </p>
            </div>
            <div className='flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center space-x-6 sm:space-x-6'>
            <button className='flex-row items-center space-x-2'>
                    <SocialIcon url='https://www.linkedin.com/in/kevin-audreylius/' target="_blank" className=' w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#9D59EF] '/>
            </button>
            <button className='flex-row items-center space-x-2'>
                    <SocialIcon url='https://www.instagram.com/k_kevin_audreylius/' target="_blank" className=' w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#9D59EF] '/>
            </button>
            <button className='flex-row items-center space-x-2'>
                    <SocialIcon url='https://github.com/KevinAudreylius' target="_blank" className=' w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#9D59EF] '/>
            </button>
            </div>
        </div>   
        <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
            <Image src="/images/Pasfoto.jpg" alt='user' layout='fill' objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain' />
        <div className='absolute w-[100%] h-[100%] z-[10] bg-[#9D59EF] top-[-2rem] right-[-2rem]'> 
        </div>
        </div>   
    </div>
  </div>;
};

export default About;