import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExperienceItem from './ExperienceItem';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ExperienceSlider = () => {
  return <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
        >
            <a href="https://bncc.net/" target="_blank" rel="noopener noreferrer"><ExperienceItem image="/images/BNCC.png" name="Bina Nusantara Computer Club" role="Activist" jobdesc="In the BNCC organization, I actively engaged in a series of activities and successfully completed all activist projects within BNCC. I also had the opportunity to contribute to Technoscape, one of BNCC's biggest event. This experience was incredibly rewarding, providing me with valuable skills and insights that have significantly enriched my personal and professional growth" /></a>
            <a href="https://member.bncc.net/" target="_blank" rel="noopener noreferrer"><ExperienceItem image="/images/LnT.png" name="BNCC Learning & Training" role="Front End Developer" jobdesc='I enrolled in BNCC’s Learning and Training course for several months, focusing on front-end development. Throughout the course, I completed both midterm and final projects using HTML, CSS, and JavaScript. This hands-on experience has greatly enhanced my proficiency in front-end development. ' /></a>
            <a href="https://www.instagram.com/mavis.thelabel/" target="_blank" rel="noopener noreferrer"><ExperienceItem image="/images/mavis.png" name="Mavis The Label" role="Social Media Content Designer" jobdesc='I have experience working at Mavis Store as a Social Media Content Designer. In this role, my responsibilities included planning and designing the Instagram feed and staying updated with the latest trends. This position allowed me to develop and implement engaging content strategies while keeping the brand’s social media presence fresh and relevant.'/></a>
    </Carousel>;
};

export default ExperienceSlider;