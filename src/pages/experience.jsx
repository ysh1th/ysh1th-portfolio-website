import { EXPERIENCES } from "../Content";


export default function Experience() {
  return (
    <div className="border-b border-background pb-4 pt-16">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-500">
                {experience.duration}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} - {" "}
                <span className="text-sm text-font-context">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-font-context">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-amber-100 px-2 py-1 text-sm font-medium text-font-context">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}