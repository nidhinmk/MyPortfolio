import type { Education as EducationType } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                {edu.duration}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
