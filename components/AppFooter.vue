<template>
  <footer class="bg-slate-950 border-t border-slate-800 mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-sm">
              L
            </div>
            <span class="font-display font-bold text-white text-lg">linkport</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            Build, engage, and grow your LinkedIn communities — at scale.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Product</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/#features" class="hover:text-white transition-colors">Features</NuxtLink></li>
            <li><NuxtLink to="/#pricing" class="hover:text-white transition-colors">Pricing</NuxtLink></li>
            <li><NuxtLink to="/dashboard" class="hover:text-white transition-colors">Dashboard</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/security" class="hover:text-white transition-colors">Security</NuxtLink></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Legal</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookie Policy</NuxtLink></li>
            <li><NuxtLink to="/data-deletion" class="hover:text-white transition-colors">Data Deletion</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} Kaxtus. All rights reserved. [Placeholder — legal entity name TBD]</p>
        <p class="text-xs">Powered by LinkedIn API. Not affiliated with LinkedIn Corporation.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// intentionally empty
</script>
