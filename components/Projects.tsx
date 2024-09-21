import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return <div id='project' className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Pro<span className='text-yellow-400'>Ject</span>
        </h1> 
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div data-aos="fade-up">
                <a href="https://github.com/KevinAudreylius/Mid-Project-LnT" target="_blank" rel="noopener noreferrer">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/Project1.jpg" alt='portofolio' layout="fill" className='object-contain' />
                    </div>
                </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <a href="https://github.com/KevinAudreylius/Ngekos-Web-" target="_blank" rel="noopener noreferrer">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/Project2.png" alt='portofolio' layout="fill" className='object-contain' />
                    </div>
                </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <a href="https://github.com/KevinAudreylius/Jakarta-Convention-Center-JCC-" target="_blank" rel="noopener noreferrer">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/Project3.png" alt='portofolio' layout="fill" className='object-contain' />
                    </div>
                </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
                <a href="https://github.com/KevinAudreylius/Portofolio-2024" target="_blank" rel="noopener noreferrer">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/Project4.png" alt='portofolio' layout="fill" className='object-contain' />
                    </div>
                </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200">
              <a href="https://www.figma.com/proto/65LWOWsgzYoneLpMbMVuJY/Projek-Lomba-(Teman-Usaha)?page-id=0%3A1&node-id=421-1208&node-type=canvas&viewport=-2733%2C-69%2C0.13&t=mm9HZw1WS6tzN6zW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=421%3A1208" target="_blank" rel="noopener noreferrer">
                  <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                      <Image src="/images/project5.jpg" alt='portofolio' layout="fill" className='object-contain' />
                  </div>
              </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
              <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                  <Image src="/images/soon.jpeg" alt='portofolio' layout="fill" className='object-contain' />
              </div>
          </div>
        </div>
    </div>;
};

export default Projects;
