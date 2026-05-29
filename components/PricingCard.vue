<template>
  <div
    class="relative flex flex-col rounded-2xl p-8 border transition-all duration-300"
    :class="featured
      ? 'bg-[#0A66C2]/10 border-[#0A66C2]/50 shadow-xl shadow-[#0A66C2]/10'
      : 'bg-slate-900 border-slate-800 hover:border-slate-700'"
  >
    <!-- Featured badge -->
    <div v-if="featured" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
      <span class="px-4 py-1 rounded-full bg-[#0A66C2] text-white text-xs font-semibold">Most popular</span>
    </div>

    <div class="mb-6">
      <h3 class="text-lg font-bold text-white mb-1">{{ name }}</h3>
      <p class="text-slate-400 text-sm">{{ description }}</p>
    </div>

    <div class="mb-6">
      <span class="text-4xl font-display font-bold text-white">{{ price }}</span>
      <span class="text-slate-400 ml-1">{{ period }}</span>
    </div>

    <ul class="flex-1 space-y-3 mb-8">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3 text-sm text-slate-300">
        <svg class="w-4 h-4 text-[#0A66C2] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        {{ feature }}
      </li>
    </ul>

    <NuxtLink
      :to="ctaLink"
      :class="featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'"
    >
      {{ cta }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  featured?: boolean;
}>();
</script>
