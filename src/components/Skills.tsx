interface SkillsProps {
  topSkills: string[]
  technologies: string[]
}

export default function Skills({ topSkills, technologies }: SkillsProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {topSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
