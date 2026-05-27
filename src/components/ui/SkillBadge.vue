<script setup lang="ts">
import type { Skill } from '../../types'

defineProps<{ skill: Skill }>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:border-purple-300 dark:hover:border-purple-600"
  >
    {{ skill.name }}
  </span>
</template>
