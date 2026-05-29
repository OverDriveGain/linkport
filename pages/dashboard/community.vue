<template>
  <div>
    <ComingSoonPanel
      title="Community"
      description="A full list of your community members, their seniority, industry, and engagement history. Round 3 wires this to real LinkedIn follower data."
      :planned-features="['Follower list with filters (industry, seniority, location)', 'Engagement history per follower', 'Community health score', 'Churn detection', 'Top advocates leaderboard']"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Community — Linkport Dashboard",
  robots: "noindex,nofollow",
});
</script>
