import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt'
import Deepak from '../../assets/DeepakProfile.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Deepak Maharana
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white mr-2'>
              I am a
            </span>
            <TypeAnimation
              sequence={[
                '',
                'Python Developer', 2000,   // type → wait 2s
                'Fullstack Developer', 2000,
                'Web Developer', 2000,
                'Coder', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>
          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am Deepak Maharana, a Computer Science & Engineering student at Ajay Binay Institute of Technology, Cuttack. My top skill is Python, which I use extensively in both web development (Django, SQLite) and AI/ML projects (NumPy, Pandas, Scikit-learn, OpenCV). Some of my key works include a Finance Tracker, a Face Detection System, and an E-commerce platform. I enjoy applying my Python expertise to build practical solutions that combine clean design with real-world functionality.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1lsw_FBnkjzkuL_YIykglHo8WCVBjpkWq/view?usp=drivesdk" target='_blank'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow:'0 0 2px #8245ec,0 0 2px #8245ec,0 0 40px #8245ec'
            }}
          >DOWNLOAD CV</a>
        </div>
        {/* Right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={Deepak} alt="Deepak Maharana" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About