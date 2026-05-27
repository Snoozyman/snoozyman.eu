export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  highlights?: string[]
  links: {
    github?: string
    live?: string
    demo?: string
  }
  image?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'platform' | 'cybersec'
  icon?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
