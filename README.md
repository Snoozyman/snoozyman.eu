# snoozyman.eu

Personal portfolio of Mikko Tuomikoski — student software developer & cyber security enthusiast.

Built with Vue 3, Vite, TypeScript, Tailwind CSS v4, and Bun.

## Stack

| Tool | Purpose |
|---|---|
| **Vue 3** + **Vue Router** | SPA with `<script setup>` SFCs |
| **Vite** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling with `@tailwindcss/vite` plugin |
| **@lucide/vue** | Icon components |
| **Bun** | Package manager & runtime |

## Development

```bash
bun install        # install dependencies
bun run dev        # start dev server (localhost:5173)
bun run build      # type-check + production build
bun run preview    # preview production build
```

## Project structure

```
src/
  views/          # Page-level components (Home, About, Projects, Contact)
  components/
    layout/       # AppNavBar, AppFooter
    ui/           # BrandIcon, ProjectCard, SkillBadge
  data/           # Static content (projects.ts, skills.ts, social.ts)
  router/         # Vue Router config
  composables/    # useTheme (dark mode toggle)
  types/          # TypeScript interfaces
public/           # Static assets (profile photos)
```

## Routes

| Path | View |
|---|---|
| `/` | Home — hero, at-a-glance stats, featured projects |
| `/about` | About — story, work timeline, education, skills |
| `/projects` | Projects — all project cards |
| `/projects/:slug` | Project detail |
| `/contact` | Contact — social links |
