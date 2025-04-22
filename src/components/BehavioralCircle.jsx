const BehavioralCircle = ({ name, level }) => {
    const radius = 45
    const stroke = 8
    const normalizedRadius = radius - stroke * 0.5
    const circumference = 2 * Math.PI * normalizedRadius
    const strokeDashoffset = circumference - (level / 100) * circumference
  
    return (
      <div className="flex flex-col items-center space-y-2 text-center">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#334155"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#38bdf8"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="text-sm text-white font-semibold">{name}</span>
        <span className="text-xs text-accent font-medium">{level}%</span>
      </div>
    )
  }
  
  export default BehavioralCircle
  