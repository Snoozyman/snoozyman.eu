import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'snoozyman-eu',
    title: 'snoozyman.eu',
    description: 'Personal portfolio built with Vue, TypeScript, and Tailwind CSS.',
    longDescription:
      'The site you are looking at. A static personal portfolio showcasing my work as a student software developer and cyber security enthusiast.',
    tags: ['Vue', 'TypeScript', 'Tailwind CSS', 'Vite', 'Bun'],
    highlights: [
      'Dark mode with system preference detection',
      'Responsive design',
      'Static site with Vite',
    ],
    links: {
      github: 'https://github.com/snoozyman/snoozyman.eu',
    },
    featured: true,
  },
  {
    slug: 'ktd-booking',
    title: 'Koh Tao Divers — Booking System',
    description:
      'A booking and admin system for a dive school built with Nuxt 4.',
    longDescription:
      'Full-featured booking platform for Koh Tao Divers, featuring course browsing, online booking with Stripe payments, an admin dashboard for managing bookings/courses/customers, bilingual content support, and SQLite-backed data storage via Drizzle ORM. Deployed on Cloudflare with Auth0 authentication.',
    tags: [
      'Nuxt',
      'Vue',
      'TypeScript',
      'Tailwind CSS',
      'SQLite',
      'Drizzle',
      'Auth0',
      'Stripe',
      'Cloudflare',
    ],
    highlights: [
      'Course browsing and online booking with Stripe payments',
      'Admin dashboard for managing bookings, courses, and customers',
      'Bilingual content support',
      'SQLite + Drizzle ORM on Cloudflare',
      'Auth0 authentication',
    ],
    links: {
      github: 'https://github.com/Snoozyman/ktd-booking',
    },
    featured: true,
  },
]
