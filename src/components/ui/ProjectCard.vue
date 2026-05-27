<script setup lang="ts">
import type { Project } from '../../types'

defineProps<{ project: Project }>()
</script>

<template>
  <router-link
    :to="`/projects/${project.slug}`"
    class="group block rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6 transition-all hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3
          class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
        >
          {{ project.title }}
        </h3>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
      >
        {{ tag }}
      </span>
    </div>
  </router-link>
</template>
