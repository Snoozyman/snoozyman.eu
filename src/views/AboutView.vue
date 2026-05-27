<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SkillBadge from '../components/ui/SkillBadge.vue'
import {
  Briefcase,
  Shield,
  Code,
  ArrowUpRight,
  GraduationCap,
  Languages,
  Heart,
} from '@lucide/vue'
import { skills, skillCategories } from '../data/skills'

useHead({
  title: 'About — snoozyman',
  meta: [
    { name: 'description', content: 'From physical security to cyber security — the story of Mikko Tuomikoski, a student developer and security enthusiast.' },
    { property: 'og:title', content: 'About — snoozyman' },
    { property: 'og:description', content: 'From physical security to cyber security — the story of Mikko Tuomikoski.' },
    { property: 'og:url', content: 'https://snoozyman.eu/about' },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-5xl px-6 py-16">
    <!-- Hero -->
    <section class="relative mb-32 overflow-hidden">
      <span
        class="absolute -top-20 right-[-3rem] select-none text-[16rem] font-black leading-none text-gray-100 dark:text-gray-800/40"
      >
        A
      </span>

      <div class="relative grid gap-10 sm:grid-cols-[1fr_auto]">
        <div class="max-w-2xl">
          <p
            class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
          >
            About
          </p>
          <h1
            class="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
          >
            From physical security
            <br />
            <span class="text-purple-600 dark:text-purple-400"
              >to cyber security</span
            >
          </h1>
        </div>
        <img
          src="/profile-square.jpg"
          alt="Profile photo"
          class="hidden h-32 w-32 rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-700 sm:block"
        />
      </div>
    </section>

    <!-- Story split -->
    <section class="mb-32 grid gap-12 sm:grid-cols-2">
      <div>
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300"
        >
          <Briefcase class="h-3.5 w-3.5" />
          Then
        </div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">
          8 years in private security
        </h2>
        <p class="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
          Before touching a line of code professionally, I spent eight years
          in private security with Securitas &mdash; mobile patrol, facility
          security at Olkiluoto nuclear power plant, and event security across
          Finland. That world taught me how to read situations, people, and
          vulnerabilities long before I ever stared at a packet capture.
        </p>
      </div>

      <div>
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300"
        >
          <Code class="h-3.5 w-3.5" />
          Now
        </div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">
          Studying cybersecurity at Laurea
        </h2>
        <p class="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
          I&rsquo;m in my second year at
          <strong class="text-gray-900 dark:text-gray-100"
            >Laurea University of Applied Sciences</strong
          >, pursuing a
          <strong class="text-gray-900 dark:text-gray-100"
            >Bachelor of Business Information Technology</strong
          >
          with a focus on cybersecurity. The programme covers network defense,
          ethical hacking, and software development.
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="mb-32">
      <div
        class="grid divide-y divide-gray-200 dark:divide-gray-800 rounded-xl border border-gray-200 dark:border-gray-800 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
      >
        <div class="p-8 text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            8+
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Years in security
          </p>
        </div>
        <div class="p-8 text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            2
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Years studying cybersecurity
          </p>
        </div>
        <div class="p-8 text-center">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            6
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Security roles across Finland
          </p>
        </div>
        <div class="p-8 text-center">
          <p
            class="text-3xl font-bold text-purple-600 dark:text-purple-400"
          >
            &infin;
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Things left to build &amp; break
          </p>
        </div>
      </div>
    </section>

    <!-- Work timeline -->
    <section class="mb-32">
      <div class="mb-10">
        <p
          class="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
        >
          Career
        </p>
        <h2 class="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Work History
        </h2>
      </div>

      <div
        class="flex gap-0 overflow-x-auto pb-4 sm:gap-4 sm:overflow-visible"
      >
        <div
          v-for="(job, i) in [
            {
              role: 'Website Admin',
              company: 'Koh Tao Divers Oy',
              location: 'Thailand',
              period: 'Jan 2025 &ndash; Present',
            },
            {
              role: 'Security Guard',
              company: 'Securitas Oy',
              location: 'Olkiluoto',
              period: 'Feb 2024 &ndash; Sep 2024',
            },
            {
              role: 'Mobile Patrol Guard',
              company: 'Securitas Oy',
              location: 'Helsinki',
              period: 'Jan 2022 &ndash; Dec 2023',
            },
            {
              role: 'Security Guard',
              company: 'Securitas Oy',
              location: 'Olkiluoto',
              period: 'Feb 2020 &ndash; Sep 2020',
            },
            {
              role: 'Mobile Patrol Guard',
              company: 'Securitas Oy',
              location: 'Pori',
              period: 'May 2017 &ndash; Dec 2021',
            },
            {
              role: 'Order Maintainer',
              company: 'Satakunnan Moniosaajat',
              location: 'Pori',
              period: 'May 2015 &ndash; May 2017',
            },
          ]"
          :key="job.role + job.period"
          class="relative flex min-w-[220px] flex-col items-center sm:min-w-0 sm:flex-1"
        >
          <p
            class="mb-2 whitespace-nowrap text-xs font-medium text-gray-400 dark:text-gray-500"
            v-html="job.period"
          />
          <div class="relative flex w-full items-center">
            <div
              v-if="i > 0"
              class="h-0.5 flex-1 bg-gray-200 dark:bg-gray-800"
            />
            <div
              class="z-10 h-4 w-4 shrink-0 rounded-full border-2 border-purple-500 bg-white dark:bg-[#16171d]"
            />
            <div
              v-if="i < 6 - 1"
              class="h-0.5 flex-1 bg-gray-200 dark:bg-gray-800"
            />
          </div>
          <div class="mt-3 text-center">
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              v-html="job.role"
            />
            <p
              class="text-xs text-gray-500 dark:text-gray-400"
              v-html="job.company"
            />
            <p class="text-xs text-gray-400 dark:text-gray-500">
              {{ job.location }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="mb-32">
      <div class="mb-10">
        <p
          class="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
        >
          Education
        </p>
        <h2 class="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Where I&rsquo;ve studied
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <div
          class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6"
        >
          <GraduationCap
            class="mb-3 h-6 w-6 text-purple-600 dark:text-purple-400"
          />
          <h3
            class="font-semibold text-gray-900 dark:text-gray-100"
          >
            Laurea University of Applied Sciences
          </h3>
          <p
            class="mt-1 text-sm font-medium text-purple-600 dark:text-purple-400"
          >
            BBA, Cyber Security &mdash; 2024&ndash;present
          </p>
          <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Cybersecurity studies combined with software development coursework
            in Python, NodeJS, and SQL.
          </p>
        </div>

        <div
          class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-6"
        >
          <GraduationCap
            class="mb-3 h-6 w-6 text-gray-400 dark:text-gray-500"
          />
          <h3
            class="font-semibold text-gray-900 dark:text-gray-100"
          >
            L&auml;nsi-Pori Lukio
          </h3>
          <p
            class="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            High School &mdash; 2010&ndash;2014
          </p>
          <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Student council president 2010&ndash;2011.
          </p>
        </div>
      </div>
    </section>

    <!-- Focus -->
    <section class="mb-32 grid gap-8 sm:grid-cols-2">
      <div
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-8"
      >
        <Shield class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Breaking things
        </h3>
        <p class="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
          Pentesting labs, OWASP Top 10, network scanning, exploit analysis.
          I spend time understanding how systems fail so I can help make them
          fail less.
        </p>
      </div>

      <div
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-8"
      >
        <Code class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Building things
        </h3>
        <p class="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
          TypeScript, Go, Rust, Vue, Nuxt, Tailwind. Full-stack apps, CLIs,
          and everything in between. Clean code, solid architecture, practical
          solutions.
        </p>
      </div>
    </section>

    <!-- Languages & Hobbies -->
    <section class="mb-32 grid gap-8 sm:grid-cols-2">
      <div
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-8"
      >
        <Languages
          class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400"
        />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Languages
        </h3>
        <ul class="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-green-500" />
            Finnish &mdash; Native
          </li>
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-green-500" />
            English &mdash; Excellent
          </li>
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-amber-500" />
            Swedish &mdash; Acceptable
          </li>
        </ul>
      </div>

      <div
        class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1b23] p-8"
      >
        <Heart class="mb-4 h-6 w-6 text-purple-600 dark:text-purple-400" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Outside work
        </h3>
        <p class="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
          Linux server administration, scuba diving, music, and scouting.
          When I&rsquo;m not in front of a screen I&rsquo;m usually underwater
          or in the woods.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-24">
      <div class="mb-10">
        <p
          class="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
        >
          Toolbox
        </p>
        <h2 class="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Skills &amp; Tools
        </h2>
      </div>

      <div v-for="cat in skillCategories" :key="cat.key" class="mb-8">
        <h3
          class="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          {{ cat.label }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge
            v-for="skill in skills.filter((s) => s.category === cat.key)"
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center">
      <p class="text-gray-500 dark:text-gray-400">
        Want to work together or just say hi?
      </p>
      <router-link
        to="/contact"
        class="mt-3 inline-flex items-center gap-1.5 text-lg font-semibold text-purple-600 dark:text-purple-400 hover:underline"
      >
        Get in touch
        <ArrowUpRight class="h-5 w-5" />
      </router-link>
    </section>
  </main>
</template>
