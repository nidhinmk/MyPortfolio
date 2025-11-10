import { Award, CheckCircle2 } from 'lucide-react'

interface CertificationsProps {
  certifications: string[]
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-8 w-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900">Certifications & Training</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg border border-gray-200 hover:border-emerald-400 transition-all duration-200 hover:shadow-md"
            >
              <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium leading-relaxed">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
