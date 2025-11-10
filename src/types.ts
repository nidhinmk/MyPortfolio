export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  highlights: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  contact: Contact;
  summary: string;
  top_skills: string[];
  technologies: string[];
  languages: Language[];
  certifications: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
