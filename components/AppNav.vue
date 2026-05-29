<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-sm group-hover:bg-[#004182] transition-colors">
          L
        </div>
        <span class="font-display font-bold text-white text-lg tracking-tight">linkport</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <NuxtLink to="/#features" class="text-slate-400 hover:text-white transition-colors">Features</NuxtLink>
        <NuxtLink to="/#integrations" class="text-slate-400 hover:text-white transition-colors">Integrations</NuxtLink>
        <NuxtLink to="/#pricing" class="text-slate-400 hover:text-white transition-colors">Pricing</NuxtLink>
        <NuxtLink to="/#faq" class="text-slate-400 hover:text-white transition-colors">FAQ</NuxtLink>
      </nav>

      <!-- CTA -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/dashboard" class="hidden sm:inline-flex text-sm text-slate-400 hover:text-white transition-colors font-medium">
          Sign in
        </NuxtLink>
        <NuxtLink to="/dashboard" class="btn-primary text-sm py-2 px-4">
          Get started
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
