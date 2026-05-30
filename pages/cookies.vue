<template>
  <div class="pt-16">
    <!-- Hero -->
    <div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4">
      <p class="section-label mb-3">Legal</p>
      <h1 class="font-display text-4xl font-bold text-white mb-3">Cookie Policy</h1>
      <p class="text-slate-400 max-w-xl mx-auto">What cookies Assembr uses and why.</p>
      <p class="text-slate-500 text-sm mt-3">Last updated: May 30, 2026 [Placeholder — update before launch]</p>
    </div>

    <!-- Body -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">

      <section>
        <h2 class="text-white text-xl font-bold mb-4">What are cookies?</h2>
        <p class="text-slate-400 leading-relaxed">
          Cookies are small text files stored in your browser when you visit a website. They help sites remember your preferences, keep you logged in, and understand how visitors use the service.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">Cookies we use</h2>

        <div class="space-y-4">
          <div class="card border-emerald-800/40">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-emerald-800/50 flex-shrink-0 flex items-center justify-center mt-0.5">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1">Essential cookies <span class="text-emerald-400 text-xs ml-2">Always active</span></h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  Required for the service to function. These include session cookies that keep you logged in during your visit, and security tokens that protect against CSRF attacks. These cookies cannot be disabled without breaking the service.
                </p>
                <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div class="bg-slate-800 rounded-lg p-2.5">
                    <span class="text-slate-300 font-mono">assembr_session</span>
                    <p class="text-slate-500 mt-1">Keeps you logged in. Expires when you close your browser or after 7 days.</p>
                  </div>
                  <div class="bg-slate-800 rounded-lg p-2.5">
                    <span class="text-slate-300 font-mono">csrf_token</span>
                    <p class="text-slate-500 mt-1">Protects form submissions. Session-scoped.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-amber-800/30 opacity-70">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-amber-900/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                <svg class="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1">Analytics cookies <span class="placeholder-badge ml-2">Opt-in — not yet active</span></h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  We plan to add privacy-first analytics (no third-party advertising cookies, no cross-site tracking). When implemented, we will ask for your consent before setting any analytics cookies. [Analytics provider TBD — considering Plausible or self-hosted Umami.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">No advertising cookies</h2>
        <p class="text-slate-400 leading-relaxed">
          Assembr does not use advertising cookies, retargeting pixels, or any third-party tracking for marketing purposes. We will never sell your cookie data or share it with advertising networks.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">Managing cookies</h2>
        <p class="text-slate-400 leading-relaxed">
          You can delete or block cookies in your browser settings at any time. Note that disabling essential cookies will prevent you from using the Assembr dashboard. For more on managing cookies, see your browser's documentation:
        </p>
        <ul class="mt-3 space-y-1 text-sm text-[#378FE9]">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="hover:underline">Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener" class="hover:underline">Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener" class="hover:underline">Safari</a></li>
        </ul>
      </section>

      <section class="card border-[#0A66C2]/30 bg-[#0A66C2]/5">
        <h2 class="text-white text-lg font-bold mb-2">Questions?</h2>
        <p class="text-slate-400 text-sm mb-3">Email us at <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a></p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Cookie Policy — Assembr",
  description: "What cookies Assembr uses and why. Essential cookies only; no advertising tracking.",
  robots: "index,follow",
});
</script>
