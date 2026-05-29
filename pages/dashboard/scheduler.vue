<template>
  <div>
    <ComingSoonPanel
      title="Post Scheduler"
      description="Write, preview, and schedule LinkedIn posts with optimal timing suggestions. Drafts are saved locally until publishing is wired to the LinkedIn API."
      :planned-features="['Drag-and-drop content calendar', 'Optimal posting time suggestions', 'Draft editor with LinkedIn formatting', 'Recurring post templates', 'Publish queue with status tracking']"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Scheduler — Linkport Dashboard",
  robots: "noindex,nofollow",
});
</script>
