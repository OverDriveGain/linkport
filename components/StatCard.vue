<template>
  <div class="card">
    <p class="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">{{ label }}</p>
    <p class="text-white text-2xl font-bold font-display mb-2">{{ value }}</p>
    <div class="flex items-center gap-1">
      <span class="text-xs font-semibold" :class="positive ? 'text-emerald-400' : 'text-red-400'">
        {{ change }}
      </span>
      <span class="text-slate-500 text-xs">{{ changeLabel }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
  change: string;
  changeLabel: string;
  positive: boolean;
}>();
</script>
