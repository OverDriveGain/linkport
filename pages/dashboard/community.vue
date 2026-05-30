<template>
  <div>
    <ComingSoonPanel
      title="Community"
      description="A unified list of your community members across all connected platforms, their seniority, industry, and engagement history."
      :planned-features="['Follower list with filters (industry, seniority, location)', 'Engagement history per follower', 'Community health score', 'Churn detection', 'Top advocates leaderboard']"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Community — Assembr Dashboard",
  robots: "noindex,nofollow",
});
</script>
