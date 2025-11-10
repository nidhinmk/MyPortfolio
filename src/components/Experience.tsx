import type { Experience as ExperienceType } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Professional Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="leading-relaxed">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
