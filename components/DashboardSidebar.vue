<template>
  <aside class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col min-h-screen flex-shrink-0">
    <!-- Logo -->
    <div class="p-5 border-b border-slate-800">
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-xs">
          L
        </div>
        <span class="font-display font-bold text-white">linkport</span>
      </NuxtLink>
    </div>

    <!-- Nav -->
    <nav class="flex-1 p-4 space-y-1">
      <NuxtLink
        to="/dashboard"
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
        :class="$route.path === '/dashboard' ? 'bg-[#0A66C2]/20 text-[#378FE9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Stats Overview
      </NuxtLink>

      <NuxtLink
        to="/dashboard/analytics"
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
        :class="$route.path === '/dashboard/analytics' ? 'bg-[#0A66C2]/20 text-[#378FE9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Analytics
      </NuxtLink>

      <NuxtLink
        to="/dashboard/community"
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
        :class="$route.path === '/dashboard/community' ? 'bg-[#0A66C2]/20 text-[#378FE9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Community
      </NuxtLink>

      <NuxtLink
        to="/dashboard/scheduler"
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
        :class="$route.path === '/dashboard/scheduler' ? 'bg-[#0A66C2]/20 text-[#378FE9]' : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Scheduler
      </NuxtLink>
    </nav>

    <!-- User section -->
    <div class="p-4 border-t border-slate-800">
      <div class="flex items-center gap-3 px-3 py-2">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#6366F1] flex items-center justify-center text-white text-xs font-bold">
          U
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-white truncate">User [placeholder]</p>
          <p class="text-xs text-slate-400 truncate">user@example.com</p>
        </div>
      </div>
    </div>
  </aside>
</template>
