<script setup lang="ts">
import { socialLinks } from '../../data/social'
import BrandIcon from '../ui/BrandIcon.vue'
import { Mail } from '@lucide/vue'
</script>

<template>
  <footer
    class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b23]"
  >
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} snoozyman. All rights reserved.
      </p>

      <div class="flex gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <BrandIcon v-if="link.icon !== 'email'" :icon="link.icon" class="h-4 w-4" />
          <Mail v-else class="h-4 w-4" />
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>
