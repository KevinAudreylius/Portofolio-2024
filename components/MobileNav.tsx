import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    nav:boolean;
    closeNav: () => void;
}

const MobileNav = ({nav,closeNav}:Props) => {

    const navAnimation = nav?'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div 
    className={`fixed ${navAnimation} transfrom transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <div className='nav-link-mobile'><a href="#home">HOME</a></div>
            <div className='nav-link-mobile'><a href="#service">SERVICE</a></div>
            <div className='nav-link-mobile'><a href="#about">ABOUT</a></div>
            <div className='nav-link-mobile'><a href="#project">PROJECT</a></div>
            <div className='nav-link-mobile'><a href="#blog">BLOG</a></div>
            <div className='nav-link-mobile'><a href="#contact">CONTACT</a></div>
        </div>
        <div 
            onClick={closeNav} 
            className='absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] text-yellow-400'
        >
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNav