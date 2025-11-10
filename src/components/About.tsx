import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface AboutProps {
  summary: string
}

export default function About({ summary }: AboutProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">About</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-gray max-w-none">
          {summary.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
