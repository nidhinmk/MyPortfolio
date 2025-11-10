import type { Experience as ExperienceType } from '../types'

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-emerald-500 pl-6 pb-6 last:pb-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-lg text-emerald-600 font-semibold">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="font-medium">{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <span className="text-emerald-500 mt-1.5 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
