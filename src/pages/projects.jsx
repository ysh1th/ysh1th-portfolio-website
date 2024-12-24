import { PROJECTS } from "../Content/index";


export default function Projects() {
  return (
    <div className="px-16 md:py-32">
    <section className="py-5 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-20">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              {/* {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg w-full h-40 object-cover"
                />
              ) : (
                <div className="bg-gray-200 h-52 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )} */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
              <div className="mt-7">
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300"
              >
                View Code
              </a>
            )}
            {/* GitHub Link (if available) */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
            )}
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

