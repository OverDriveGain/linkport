<template>
  <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
    <div class="flex-1 min-w-0">
      <p class="text-slate-200 text-sm leading-snug line-clamp-2">{{ post.excerpt }}</p>
      <p class="text-slate-500 text-xs mt-1.5">{{ post.date }}</p>
    </div>
    <div class="flex items-center gap-4 flex-shrink-0 text-xs text-slate-400">
      <div class="text-center">
        <div class="text-white font-semibold">{{ post.impressions }}</div>
        <div>impressions</div>
      </div>
      <div class="text-center">
        <div class="text-white font-semibold">{{ post.likes }}</div>
        <div>likes</div>
      </div>
      <div class="text-center">
        <div class="text-white font-semibold">{{ post.comments }}</div>
        <div>comments</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    excerpt: string;
    impressions: string;
    likes: string;
    comments: string;
    date: string;
  };
}>();
</script>
