import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, features, techStack, github, live }) => {
  return (
    <div className="bg-secondary rounded-lg shadow hover:shadow-lg transition-all p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-3">{description}</p>

        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mb-4">
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-accent text-black font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Optional Links */}
      <div className="flex gap-4 mt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            className="text-accent hover:text-blue-400 text-xl"
            title="View on GitHub"
          >
            <FaGithub />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            className="text-accent hover:text-blue-400 text-xl"
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
