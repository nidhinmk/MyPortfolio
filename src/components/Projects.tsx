import type { Project } from '../types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200 hover:border-emerald-400 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 ml-4 p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                  aria-label="View project on GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-gray-700">
                      <span className="text-emerald-600 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-emerald-200">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors duration-200"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
