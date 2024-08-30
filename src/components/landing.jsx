import Subject from '../assets/Subject.png'

export default function Landing() {
  return (

    // <div className="border-b border-neutral-900 pb-4 lg:py-8">
    //   <div className="flex flex-col lg:flex-row">
    //     <div className="lg:w-1/2 flex flex-col items-start lg:pr-8">
    //         <h1 className="text-6xl mt-16 pb-8">
    //           Hi, I'm
    //           <br />
    //           Yashwanth Karuparthi
    //         </h1>
    //         <p className="my-2 max-w-xl font-light tracking-tighter">
    //         I am an undergraduate computer science engineering student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build. I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry.
    //         </p>
    //     </div>
    //     <div className="lg:w-1/2 flex justify-center lg:pl-8">
    //         <img src={Subject} alt="Yashwanth Karuparthi" />
    //     </div>
    //   </div>
    // </div>


<section className="h-full">
  <div className="px-16 container mx-auto h-full flex flex-col lg:flex-row items-start justify-between lg:pt-28 lg:pb-24">
    <div className="flex flex-col lg:text-left space-y-4 pt-8 lg:pt-8">
      <h1 className="text-6xl font-semibold">
        Hi, I'm <br /> <span>Yashwanth Karuparthi</span>
      </h1>
      <p className="my-2 max-w-xl font-light tracking-tighter">
        I am an undergraduate computer science engineering student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build. I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry.
      </p>
    </div>
    <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      <img src={Subject} alt="Yashwanth" className="object-cover" />
    </div>
  </div>
</section>
  );
}