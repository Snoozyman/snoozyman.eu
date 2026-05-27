<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ProjectCard from '../components/ui/ProjectCard.vue'
import { projects } from '../data/projects'

useHead({
  title: 'Projects — snoozyman',
  meta: [
    { name: 'description', content: 'Things Mikko has built — web apps, tools, and experiments in software and security.' },
    { property: 'og:title', content: 'Projects — snoozyman' },
    { property: 'og:description', content: 'Things Mikko has built — web apps, tools, and experiments.' },
    { property: 'og:url', content: 'https://snoozyman.eu/projects' },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-5xl px-6 py-16">
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
      Projects
    </h1>
    <p class="mb-10 text-gray-600 dark:text-gray-400">
      Things I&rsquo;ve built in my spare time.
    </p>

    <div
      v-if="projects.length"
      class="grid gap-6 sm:grid-cols-2"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>

    <p v-else class="text-gray-500 dark:text-gray-400">
      No projects yet. Check back soon!
    </p>
  </main>
</template>
