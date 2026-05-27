<script setup lang="ts">
import AppNavBar from './components/layout/AppNavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-[#16171d] text-gray-900 dark:text-gray-100 transition-colors">
    <AppNavBar />
    <div class="flex-1"><router-view /></div>
    <AppFooter />
  </div>
</template>
