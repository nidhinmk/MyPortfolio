import type { PortfolioData } from '../types'

interface HeaderProps {
  data: PortfolioData
}

export default function Header({ data }: HeaderProps) {
  return (
    <div className="mb-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">{data.name}</h1>
          <h2 className="text-xl text-gray-700 mb-4 font-medium">{data.title}</h2>
          <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {data.location}
          </p>
        </div>
      </div>
    </div>
  )
}
