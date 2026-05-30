<template>
  <div>
    <ComingSoonPanel
      title="Analytics"
      description="Detailed post performance charts, reach breakdowns, and engagement trends by content type — across all your connected platforms."
      :planned-features="['Impressions over time', 'Engagement rate by post type', 'Follower growth chart', 'Top-performing content tags', 'Audience reach vs. organic reach split']"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Analytics — Assembr Dashboard",
  robots: "noindex,nofollow",
});
</script>
