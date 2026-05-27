<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '404 — Page Not Found',
  meta: [
    { name: 'description', content: 'This page does not exist.' },
  ],
})
</script>

<template>
  <main class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
    <p class="text-8xl font-black text-gray-200 dark:text-gray-800">404</p>
    <h1 class="-mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Page not found
    </h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      That URL doesn&rsquo;t lead anywhere.
    </p>
    <router-link
      to="/"
      class="mt-8 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-700"
    >
      Go home
    </router-link>
  </main>
</template>
