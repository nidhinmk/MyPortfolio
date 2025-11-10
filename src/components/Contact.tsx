import type { Contact as ContactType } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Phone, Mail, Linkedin } from 'lucide-react'

interface ContactProps {
  contact: ContactType
}

export default function Contact({ contact }: ContactProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">{contact.phone}</span>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Linkedin className="h-5 w-5 text-gray-500" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {contact.linkedin}
            </a>
          </div>

          <div className="pt-4">
            <Button asChild className="w-full">
              <a href={`mailto:${contact.email}`}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
