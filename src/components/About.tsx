interface AboutProps {
  summary: string
}

export default function About({ summary }: AboutProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
        <div className="prose prose-lg max-w-none">
          {summary.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
