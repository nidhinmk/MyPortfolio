import type { Education as EducationType } from '../types'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-200 hover:shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-gray-700 font-medium">{edu.institution}</p>
              </div>
              <div className="text-sm text-gray-600 mt-3 md:mt-0 md:text-right bg-white px-4 py-2 rounded-lg shadow-sm">
                {edu.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
