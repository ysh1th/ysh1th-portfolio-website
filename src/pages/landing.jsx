import { LAND_CONTENT } from "../Content";
import Profile from '../assets/Profile.png'

export default function Landing() {
  return (
    <div className="border-b border-background pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className='pb-7 text-6xl font-extrabold tracking-tight lg:text-4xl'>
              Hi, I'm <br />
              <span className="text-font-logo">
                Yashwanth Karuparthi
              </span>
            </h1>
            <span className="font-semibold max-w-xl">
              Computer Science student learning Machine Learning and Deep Learning
            </span>
            {/* <h1 className="text-lg font-bold pt-6">
              About
            </h1> */}
            <p className="my-2 max-w-xl pr-4 pt-6">
              {LAND_CONTENT}
            </p>
                        
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="flex w-full lg:w-[230px] lg:h-[410px] ">
            <img src={Profile} alt="Yash1th" className="object-cover rounded-2xl"/>
          </div>
        </div>

      </div>
    </div>
  );
}