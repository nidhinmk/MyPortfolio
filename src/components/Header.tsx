import type { PortfolioData } from '../types'
import { Card, CardContent } from './ui/card'

interface HeaderProps {
  data: PortfolioData
}

export default function Header({ data }: HeaderProps) {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>
          <p className="text-lg text-gray-500">{data.location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
