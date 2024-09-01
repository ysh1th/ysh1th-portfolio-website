import Profile from '../assets/Profile.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

export default function Landing() {
  return (

<div className="min-h-screen pt-32 bg-background">
  <div className="px-16 container mx-auto h-full flex flex-col justify-between lg:pb-10">
    {/* Header, paragraphs and image row */}
    <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="flex flex-col lg:text-left space-y-4 pt-9 lg:pt-2">
      <h1 className="text-5xl font-semibold">
        Hi, I'm <br /> <span className='text-font-logo font-extrabold tracking-1.2px'>Yashwanth Karuparthi</span>
      </h1>
      <p className='text-xl'>
        Transforming ideas into reality through Machine Learning and Data Science
      </p>
      <h1 className='text-2xl font-bold pt-14'>
        About
      </h1>
      <p className="text-80px max-w-2xl text-font-context tracking-1px">
        I am an undergraduate computer science engineering student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build. I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry.
      </p>
    </div>
    <div className="w-[298px] h-[298px] xl:w-[348px] xl:h-[348px]">
      <img src={Profile} alt="Yashwanth" className="object-cover rounded-2xl" />
    </div>
    </div>
    {/* Line row */}
    <div className="flex justify-center">
      {/* line */}
      <div className="w-[3cm] h-[1px] bg-black my-10"></div>
    </div>
    <div className="flex text-80px max-w-2xl text-font-context tracking-1px">
      find me on
    </div>
    
    {/* Social media row */}
    <div className="flex space-x-4 mt-4">
      <a href="https://github.com/ysh1th" className='text-2xl'>
        <FaGithub className='dark:text-white'></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/yashwanth-karuparthi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUvoxaJ4WQQ6bTMfk4L7Q8w%3D%3D" className='text-2xl'>
      <FaLinkedin className='dark:text-white'></FaLinkedin>
      </a>
      <a href="https://x.com/Yashwanth_Kar" className='text-2xl'>
        <RiTwitterXLine className='dark:text-white'></RiTwitterXLine>
      </a>
      <a href="https://www.instagram.com/yashwanth_k7?igsh=MXIwMmp4NGpwb2xvMQ%3D%3D&utm_source=qr" className='text-2xl'>
        <FaInstagram className='dark:text-white'></FaInstagram>
      </a>
    </div>
  </div>
</div>
  );
}
