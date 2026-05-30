<template>
  <div>
    <ComingSoonPanel
      title="Post Scheduler"
      description="Write, preview, and schedule content across your platforms with optimal timing suggestions. Manage drafts and publishing queues — per platform."
      :planned-features="['Drag-and-drop content calendar', 'Optimal posting time suggestions per platform', 'Draft editor for multi-platform content', 'Recurring post templates', 'Publish queue with status tracking']"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Scheduler — Assembr Dashboard",
  robots: "noindex,nofollow",
});
</script>
