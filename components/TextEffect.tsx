import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer',
        1500,
        'Progammer',
        1500,
        'Student',
        1500
      ]}

      speed={50}
      className='text-[2rem] md:text-[3rem] text-purple-500 font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;