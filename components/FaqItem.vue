<template>
  <div class="card cursor-pointer select-none" @click="open = !open">
    <div class="flex items-start justify-between gap-4">
      <h3 class="text-white font-medium text-base leading-snug">{{ question }}</h3>
      <svg
        class="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div v-if="open" class="mt-4 text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
      {{ answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string;
  answer: string;
}>();

const open = ref(false);
</script>
