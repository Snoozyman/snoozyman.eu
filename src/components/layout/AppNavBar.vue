<script setup lang="ts">
import { useRoute } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import { Moon, Sun } from "@lucide/vue";

const route = useRoute();
const { theme, toggle } = useTheme();

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#16171d]/80 backdrop-blur-sm"
  >
    <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
      <router-link
        to="/"
        class="text-lg font-semibold text-gray-900 dark:text-gray-100"
      >
        Snoozyman - Mikko Tuomikoski
      </router-link>

      <div class="flex items-center gap-1">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="
            route.path === link.path
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          "
        >
          {{ link.label }}
        </router-link>

        <button
          @click="toggle"
          class="ml-2 rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
        >
          <Moon v-if="theme === 'light'" class="h-5 w-5" />
          <Sun v-else class="h-5 w-5" />
        </button>
      </div>
    </div>
  </nav>
</template>
