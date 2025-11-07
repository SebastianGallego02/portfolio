// Tipos globales del proyecto

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  id: string
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design'
  icon?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
}

export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
}

export interface ThemeConfig {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
}

