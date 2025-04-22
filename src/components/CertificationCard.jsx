import { FaExternalLinkAlt } from 'react-icons/fa'

const CertificationCard = ({ title, platform, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-secondary p-5 rounded shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{platform}</p>
      <span className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300">
        View Certificate <FaExternalLinkAlt className="ml-2 text-xs" />
      </span>
    </a>
  )
}

export default CertificationCard
