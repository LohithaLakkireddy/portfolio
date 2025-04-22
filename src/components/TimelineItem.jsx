const TimelineItem = ({ institution, period, qualification, score }) => {
    return (
      <div className="relative">
        <div className="absolute -left-3 w-6 h-6 bg-accent rounded-full border-4 border-primary"></div>
        <div className="bg-secondary p-4 rounded shadow-lg ml-4">
          <h3 className="text-xl font-semibold text-white">{institution}</h3>
          <p className="text-sm text-gray-400">{period}</p>
          <p className="text-sm text-gray-300 mt-2">{qualification}</p>
          {score && (
            <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
                {score.split('\n').map((line, idx) => (
                <li key={idx}>{line}</li>
                ))}
            </ul>
            )}
        </div>
      </div>
    )
  }
  
  export default TimelineItem
  