const colors = [
    'bg-blue-600',
    'bg-green-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-yellow-500',
    'bg-indigo-600',
    'bg-teal-600'
  ]
  
  const SkillBadge = ({ skill }) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
      <span
        className={`text-sm px-3 py-1 rounded-full text-white font-medium ${randomColor} hover:scale-105 transition-transform shadow`}
      >
        {skill}
      </span>
    )
  }
  
  export default SkillBadge
  