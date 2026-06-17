import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "snoozyman-eu",
    title: "snoozyman.eu",
    description:
      "Personal portfolio built with Vue, TypeScript, and Tailwind CSS.",
    longDescription:
      "The site you are looking at. A static personal portfolio showcasing my work as a student software developer and cyber security enthusiast.",
    tags: ["Vue", "TypeScript", "Tailwind CSS", "Vite", "Bun"],
    highlights: [
      "Dark mode with system preference detection",
      "Responsive design",
      "Static site with Vite",
    ],
    links: {
      github: "https://github.com/snoozyman/snoozyman.eu",
    },
    featured: true,
  },
  {
    slug: "ktd-website",
    title: "Koh Tao Divers — Website",
    description: "A modern, responsive website for a dive school.",
    longDescription:
      "A complete redesign and rebuild of the Koh Tao Divers website using 11ty, Handlebars, and Netlify. The site features a clean, modern design with a focus on usability and performance, showcasing the dive school’s courses, services, and location.",
    tags: ["SSG", "11ty", "Netlify", "Handlebars", "Decap CMS"],
    highlights: [
      "Complete redesign and rebuild of the Koh Tao Divers website",
      "Clean, modern design with a focus on usability and performance",
      "Bilingual content support with Decap CMS",
      "Showcasing the dive school's courses, services, and location",
      "Built with 11ty and Handlebars, deployed on Netlify",
      "SEO optimization and responsive design",
    ],
    links: {
      live: "https://www.kohtaodivers.com/",
    },
  },
  {
    slug: "quefy",
    title: "Quefy",
    description: "Multi-user YouTube and Spotify audio streaming rooms.",
    longDescription:
      "Real-time collaborative audio streaming platform where users create rooms, share a code, and listen to music together. Features YouTube audio extraction via yt-dlp, Spotify Web Playback SDK integration, SSE-based real-time room state sync, PWA support, and a responsive UI built with Nuxt UI v4.",
    tags: [
      "Docker",
      "Nuxt",
      "Vue",
      "TypeScript",
      "Tailwind CSS",
      "Bun",
      "yt-dlp",
      "Spotify API",
      "PWA",
    ],
    highlights: [
      "Real-time room state sync via Server-Sent Events with polling fallback",
      "YouTube audio streaming with yt-dlp backend",
      "Spotify Web Playback SDK integration with Premium account support",
      "Progressive Web App with offline support",
      "Responsive dark-themed UI",
    ],
    links: {
      github: "https://github.com/Snoozyman/quefy",
    },
  },
  {
    slug: "ktd-booking",
    title: "Koh Tao Divers — Booking System",
    description:
      "A booking and admin system for a dive school built with Nuxt 4.",
    longDescription:
      "Full-featured booking platform for Koh Tao Divers, featuring course browsing, online booking with Stripe payments, an admin dashboard for managing bookings/courses/customers, bilingual content support, and SQLite-backed data storage via Drizzle ORM. Deployed on Cloudflare with Auth0 authentication.",
    tags: [
      "Nuxt",
      "Vue",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
      "Drizzle",
      "Auth0",
      "Stripe",
      "Cloudflare",
    ],
    highlights: [
      "Course browsing and online booking with Stripe payments",
      "Admin dashboard for managing bookings, courses, and customers",
      "Bilingual content support",
      "SQLite + Drizzle ORM on Cloudflare",
      "Auth0 authentication",
    ],
    links: {
      //github: "https://github.com/Snoozyman/ktd-booking",
    },
    featured: true,
  },
];
