import type { Contact as ContactType } from '../types'
import { Phone, Mail, Linkedin } from 'lucide-react'

interface ContactProps {
  contact: ContactType
}

export default function Contact({ contact }: ContactProps) {
  return (
    <div className="mb-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-gray-800 font-medium">{contact.phone}</span>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-emerald-600" />
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Linkedin className="h-6 w-6 text-emerald-600" />
            </div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              {contact.linkedin}
            </a>
          </div>

          <div className="pt-4">
            <a 
              href={`mailto:${contact.email}`}
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
