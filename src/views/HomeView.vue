<script setup lang="ts">
import { useHead } from '@unhead/vue'
import BrandIcon from '../components/ui/BrandIcon.vue'
import {
  GraduationCap,
  Code,
  Shield,
  ArrowRight,
  Mail,
} from '@lucide/vue'
import { projects } from '../data/projects'
import { socialLinks } from '../data/social'

const featured = projects.filter((p) => p.featured)

useHead({
  title: 'snoozyman — software &amp; security',
  meta: [
    { name: 'description', content: 'Personal portfolio of Mikko Tuomikoski — student software developer and cyber security enthusiast based in Finland.' },
    { property: 'og:title', content: 'snoozyman — software & security' },
    { property: 'og:description', content: 'Personal portfolio of Mikko Tuomikoski — student software developer and cyber security enthusiast.' },
    { property: 'og:url', content: 'https://snoozyman.eu/' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <!-- Floating social sidebar -->
  <aside
    class="fixed left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
  >
    <div class="h-20 w-px bg-gray-300 dark:bg-gray-700" />
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      :aria-label="link.name"
    >
      <BrandIcon
        v-if="link.icon !== 'email'"
        :icon="link.icon"
        class="h-5 w-5"
      />
      <Mail v-else class="h-5 w-5" />
    </a>
    <div class="h-20 w-px bg-gray-300 dark:bg-gray-700" />
  </aside>

  <main class="mx-auto max-w-5xl px-6 py-16">
    <!-- Hero -->
    <section class="relative mb-32 overflow-hidden">
      <span
        class="absolute -top-16 right-[-4rem] select-none text-[18rem] font-black leading-none text-gray-100 dark:text-gray-800/40"
      >
        S
      </span>

      <div class="relative max-w-2xl">
        <p
          class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
        >
          Hello, I&rsquo;m
        </p>
        <h1
          class="text-6xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl lg:text-8xl"
        >
          Snoozyman
        </h1>
        <p
          class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl"
        >
          Student software developer and cyber security enthusiast. I build
          secure, performant software and explore the edges of systems.
        </p>
        <div class="mt-8 flex gap-4">
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-700 dark:hover:bg-gray-300"
          >
            View Projects
            <ArrowRight class="h-4 w-4" />
          </router-link>
          <router-link
            to="/about"
            class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            About Me
          </router-link>
        </div>
      </div>
    </section>

    <!-- At a glance -->
    <section class="mb-32">
      <div class="grid gap-6 sm:grid-cols-3">
        <div
          class="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6 transition-all hover:shadow-md"
        >
          <GraduationCap
            class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400"
          />
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Studying
          </h3>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            2nd year cybersecurity at Laurea University of Applied Sciences.
          </p>
        </div>

        <div
          class="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6 transition-all hover:shadow-md"
        >
          <Code
            class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400"
          />
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Building
          </h3>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            A dive school booking platform with Nuxt, Stripe, Auth0, and
            Cloudflare.
          </p>
        </div>

        <div
          class="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6 transition-all hover:shadow-md"
        >
          <Shield class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400" />
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">
            Securing
          </h3>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Pentesting, OWASP Top 10, cloud security, and low-level systems.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section v-if="featured.length" class="mb-24">
      <div class="mb-10 flex items-end justify-between">
        <div>
          <p
            class="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
          >
            Selected work
          </p>
          <h2
            class="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100"
          >
            Featured Projects
          </h2>
        </div>
        <router-link
          to="/projects"
          class="hidden text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors sm:inline-flex items-center gap-1"
        >
          All projects <ArrowRight class="h-3.5 w-3.5" />
        </router-link>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <router-link
          v-for="(project, i) in featured"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          :class="[
            i === 0
              ? 'sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6'
              : '',
            'group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6 transition-all hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700',
          ]"
        >
          <template v-if="i === 0">
            <div>
              <p
                class="text-xs font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400"
              >
                Featured
              </p>
              <h3
                class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              >
                {{ project.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {{ project.longDescription || project.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div
              class="mt-6 flex flex-col justify-between sm:mt-0 sm:border-l sm:border-gray-200 dark:sm:border-gray-800 sm:pl-6"
            >
              <div>
                <p
                  class="text-xs font-medium uppercase tracking-widest text-gray-400"
                >
                  Highlights
                </p>
                <ul
                  class="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <li
                    v-for="h in project.highlights"
                    :key="h"
                    class="flex items-start gap-2"
                  >
                    <span
                      class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"
                    />
                    {{ h }}
                  </li>
                </ul>
              </div>
              <span
                class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400"
              >
                View project <ArrowRight class="h-3.5 w-3.5" />
              </span>
            </div>
          </template>

          <template v-else>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
              >
                {{ tag }}
              </span>
            </div>
          </template>
        </router-link>
      </div>

      <div class="mt-8 text-center sm:hidden">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400"
        >
          All projects <ArrowRight class="h-3.5 w-3.5" />
        </router-link>
      </div>
    </section>
  </main>
</template>
