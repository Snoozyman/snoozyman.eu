<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { socialLinks } from '../data/social'
import BrandIcon from '../components/ui/BrandIcon.vue'
import { Mail, ArrowRight } from '@lucide/vue'

useHead({
  title: 'Contact — snoozyman',
  meta: [
    { name: 'description', content: 'Get in touch with Mikko Tuomikoski — GitHub, LinkedIn, or email.' },
    { property: 'og:title', content: 'Contact — snoozyman' },
    { property: 'og:description', content: 'Get in touch with Mikko Tuomikoski.' },
    { property: 'og:url', content: 'https://snoozyman.eu/contact' },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-3xl px-6 py-16 text-center">
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
      Get in Touch
    </h1>
    <p class="mb-10 text-gray-600 dark:text-gray-400">
      Whether you want to collaborate, have a question, or just say hi.
    </p>

    <div class="mx-auto grid max-w-md gap-4">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] px-6 py-4 transition-all hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700"
      >
        <div class="flex items-center gap-3">
          <BrandIcon
            v-if="link.icon !== 'email'"
            :icon="link.icon"
            class="h-5 w-5 text-gray-600 dark:text-gray-400"
          />
          <Mail v-else class="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <span class="font-medium text-gray-900 dark:text-gray-100">
            {{ link.name }}
          </span>
        </div>
        <ArrowRight class="h-4 w-4 text-gray-400" />
      </a>
    </div>
  </main>
</template>
