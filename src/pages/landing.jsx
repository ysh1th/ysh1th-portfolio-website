import { LAND_CONTENT } from "../Content";
import Profile from '../assets/Profile.png'

export default function Landing() {
  return (
    <div className="border-b border-background pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <hi className='pb-10 text-6xl font-extralight tracking-tight lg:text-7xl'>
              Yashwanth Karuparthi  
            </hi>
            <span className="text-3xl font-extralight tracking-tight">
              Computer Science student learning <br/> Machine Learning and Deep Learning
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {LAND_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[448px] lg:px-8 m">
          <div className="flex justify-end">
            <img src={Profile} alt="Yash1th" className="object-cover rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}