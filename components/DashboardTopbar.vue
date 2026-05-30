<template>
  <header class="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
    <div>
      <h1 class="text-white font-semibold">{{ pageTitle }}</h1>
      <p class="text-slate-400 text-xs mt-0.5">{{ pageSubtitle }}</p>
    </div>
    <div class="flex items-center gap-3">
      <span class="placeholder-badge">Placeholder data — real API integration coming</span>
      <div class="w-8 h-8 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center">
        <svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const pageTitle = computed(() => {
  const map: Record<string, string> = {
    "/dashboard": "Stats Overview",
    "/dashboard/analytics": "Analytics",
    "/dashboard/community": "Community",
    "/dashboard/scheduler": "Scheduler",
  };
  return map[route.path] ?? "Dashboard";
});

const pageSubtitle = computed(() => {
  const map: Record<string, string> = {
    "/dashboard": "Your platforms at a glance",
    "/dashboard/analytics": "Post performance and audience insights",
    "/dashboard/community": "Manage your community members",
    "/dashboard/scheduler": "Plan and schedule your content",
  };
  return map[route.path] ?? "";
});
</script>
