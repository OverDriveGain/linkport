<template>
  <div>
    <!-- Placeholder notice -->
    <div class="mb-6 p-4 rounded-xl bg-amber-900/30 border border-amber-700/40 flex items-start gap-3">
      <svg class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p class="text-amber-300 font-medium text-sm">This is a placeholder dashboard</p>
        <p class="text-amber-400/70 text-xs mt-1">All numbers below are mock data. Real LinkedIn API integration is planned for Round 3. Connect your LinkedIn account to see live stats.</p>
      </div>
    </div>

    <!-- Stat cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        label="Followers"
        value="4,821"
        change="+127"
        change-label="this month"
        positive
      />
      <StatCard
        label="Profile Views"
        value="9,340"
        change="+18%"
        change-label="vs last month"
        positive
      />
      <StatCard
        label="Post Impressions"
        value="41,200"
        change="+3,100"
        change-label="this week"
        positive
      />
      <StatCard
        label="Engagement Rate"
        value="3.8%"
        change="-0.2%"
        change-label="vs last week"
        :positive="false"
      />
    </div>

    <!-- Top posts -->
    <div class="card">
      <h2 class="text-white font-semibold text-base mb-4 flex items-center justify-between">
        Top Posts — Last 30 Days
        <span class="placeholder-badge">Placeholder data</span>
      </h2>
      <div class="space-y-3">
        <TopPostRow
          v-for="post in topPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Dashboard — Linkport",
  description: "Your LinkedIn community stats at a glance.",
  robots: "noindex,nofollow",
});

const topPosts = [
  {
    id: 1,
    excerpt: "How we grew our LinkedIn community to 5,000 followers in 3 months without paid ads — here's the exact playbook...",
    impressions: "12,400",
    likes: "341",
    comments: "87",
    date: "May 22, 2026",
  },
  {
    id: 2,
    excerpt: "Thread: The 7 LinkedIn posting habits that separate 1% creators from the rest. Save this for later.",
    impressions: "9,800",
    likes: "298",
    comments: "54",
    date: "May 18, 2026",
  },
  {
    id: 3,
    excerpt: "Our Q1 community report is live. Key insight: posting at 7am Tuesday beats any other time slot by 2.3x.",
    impressions: "7,200",
    likes: "211",
    comments: "39",
    date: "May 12, 2026",
  },
  {
    id: 4,
    excerpt: "We analyzed 1,000 viral LinkedIn posts so you don't have to. The pattern is surprisingly simple.",
    impressions: "6,100",
    likes: "189",
    comments: "31",
    date: "May 8, 2026",
  },
  {
    id: 5,
    excerpt: "LinkedIn just changed their algorithm (again). Here's what's working right now based on our data.",
    impressions: "5,300",
    likes: "156",
    comments: "28",
    date: "May 3, 2026",
  },
];
</script>
