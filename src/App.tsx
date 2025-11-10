import portfolioData from '../myInfo.json'
import type { PortfolioData } from './types'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const data: PortfolioData = portfolioData as PortfolioData

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header data={data} />
        <About summary={data.summary} />
        <Skills topSkills={data.top_skills} technologies={data.technologies} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Contact contact={data.contact} />
      </div>
    </div>
  )
}

export default App
