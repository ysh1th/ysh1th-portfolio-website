import { PROJECTS } from "../Content";
import Profile from '../assets/Profile.png'

export default function Projects() {
  return (
    <div className="border-b border-b-background pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img src={Profile} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>
              <p className="mb-4 text-font-context">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 rounded px-2 py-1 text-sm font-medium text-font-context bg-amber-100">
                    {tech}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};