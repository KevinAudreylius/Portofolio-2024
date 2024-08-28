import React from 'react'
import ExperienceSlider from './ExperienceSlider'

const Experiences = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]'>
        <h1 className='heading'>
            My <span className='text-yellow-400'>Experiences</span>
        </h1>
        <div className='pt-[3rem] pb-[2rem] w-[80%] mx-auto'></div>
        <ExperienceSlider />
    </div>
  )
}

export default Experiences