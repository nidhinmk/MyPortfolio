import portfolioData from '../myInfo.json'
import type { PortfolioData } from './types'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const data: PortfolioData = portfolioData as PortfolioData

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-teal-900 via-slate-800 to-teal-950 rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-white/20 backdrop-blur-sm">
          <Header data={data} />
          <About summary={data.summary} />
          <Skills topSkills={data.top_skills} technologies={data.technologies} />
          <Projects projects={data.projects} />
          <Certifications certifications={data.certifications} />
          <Experience experience={data.experience} />
          <Education education={data.education} />
          <Contact contact={data.contact} />
        </div>
      </div>
    </div>
  )
}

export default App
