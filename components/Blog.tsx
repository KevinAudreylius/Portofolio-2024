import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';

const Blog = () => {
  return <div id='blog' className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
    <h1 className='heading'>
        MY
        <span className='text-yellow-400'> BLOG</span>
    </h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
        <div>
            <a href='https://medium.com/@kevinlius4504/mau-jadi-augmented-reality-ar-developer-yuk-ketahui-tipsnya-disini-cf0c6db926d2' target='_blank' rel='noopener noreferrer'>
                <div className='w-[100%] relative h-[400px]'>
                    <Image src="/images/blog1.png" alt='blog' layout='fill' className='object-cover' />
                </div>
            
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#9D59EF] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        July 19,2024
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#9D59EF]' />
                            <p className='text-white'>By Kevin Audreylius</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#9D59EF]' />
                            <p className='text-white'>Comments(1)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>Augmented Reality Developer</p>
                </div>
            </a>
        </div>
        <div>
            <div className='w-[100%] relative h-[400px]'>
                <Image src="/images/soon.jpeg" alt='blog' layout='fill' className='object-cover' />
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                <div className='w-fit px-[2rem] py-[1rem] bg-[#9D59EF] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                    - soon -
                </div>
                <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                    <div className='flex items-center space-x-3'>
                        <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#9D59EF]' />
                        <p className='text-white'>By Kevin Audreylius</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#9D59EF]' />
                        <p className='text-white'>Comments(0)</p>
                    </div>
                </div>
                <p className='mt-[1rem] text-white text-[18px] font-semibold'>Coming Soon...</p>
            </div>
        </div>
    </div>
  </div>;

};

export default Blog;