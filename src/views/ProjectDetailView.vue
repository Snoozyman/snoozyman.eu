<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug)

useHead({
  title: () => project ? `${project.title} — snoozyman` : '404 — snoozyman',
  meta: () => project ? [
    { name: 'description', content: project.description },
    { property: 'og:title', content: `${project.title} — snoozyman` },
    { property: 'og:description', content: project.description },
    { property: 'og:url', content: `https://snoozyman.eu/projects/${project.slug}` },
  ] : [],
})
</script>

<template>
  <main class="mx-auto max-w-3xl px-6 py-16">
    <router-link
      to="/projects"
      class="mb-8 inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      &larr; Back to projects
    </router-link>

    <template v-if="project">
      <h1
        class="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100"
      >
        {{ project.title }}
      </h1>

      <div class="mb-6 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-md bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 text-sm font-medium text-purple-700 dark:text-purple-300"
        >
          {{ tag }}
        </span>
      </div>

      <p
        v-if="project.longDescription"
        class="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        {{ project.longDescription }}
      </p>

      <div v-if="project.highlights?.length" class="mb-8">
        <h2
          class="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          Highlights
        </h2>
        <ul class="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
          <li v-for="item in project.highlights" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="flex gap-4">
        <a
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-gray-900 dark:bg-gray-100 px-4 py-2 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-700 dark:hover:bg-gray-300"
        >
          View on GitHub
        </a>
        <a
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Live Site
        </a>
      </div>
    </template>

    <div v-else class="py-20 text-center">
      <p class="text-gray-500 dark:text-gray-400">
        Project not found.
      </p>
      <router-link
        to="/projects"
        class="mt-4 inline-block text-sm text-purple-600 dark:text-purple-400 hover:underline"
      >
        &larr; Back to projects
      </router-link>
    </div>
  </main>
</template>
