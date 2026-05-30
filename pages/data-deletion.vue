<template>
  <div class="pt-16">
    <!-- Hero -->
    <div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4">
      <p class="section-label mb-3">Your rights</p>
      <h1 class="font-display text-4xl font-bold text-white mb-3">Data Deletion Request</h1>
      <p class="text-slate-400 max-w-xl mx-auto">How to request deletion of all personal data Assembr holds about you.</p>
    </div>

    <!-- Body -->
    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-10">

      <section>
        <h2 class="text-white text-xl font-bold mb-4">Your right to erasure</h2>
        <p class="text-slate-400 leading-relaxed">
          Under the General Data Protection Regulation (GDPR), you have the right to request deletion of all personal data that Assembr holds about you. This includes your profile data from any connected platform (LinkedIn, Slack, Discord, X, Reddit, or others), usage history, and any analytics data associated with your account.
        </p>
        <p class="text-slate-400 leading-relaxed mt-4">
          This page also serves as Assembr's required <strong class="text-slate-300">data deletion callback URL</strong> for platform API review processes — including the LinkedIn API app review — in accordance with each platform's data deletion requirements for OAuth applications.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">What gets deleted</h2>
        <ul class="space-y-3 text-slate-400 text-sm">
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Your profile information from all connected platforms (name, profile photo URL, headline)
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Your stored analytics data from all connected platforms (follower counts, impression history, engagement metrics)
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Your OAuth tokens and connected account credentials
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Any scheduled posts or drafts saved in Assembr, across all platforms
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Your account record and all associated metadata
          </li>
        </ul>
        <p class="text-slate-400 text-sm mt-4">
          Aggregated, anonymized statistics that cannot be linked back to you may be retained for service improvement purposes.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">How to request deletion</h2>

        <div class="card border-[#0A66C2]/30 bg-[#0A66C2]/5 text-center">
          <div class="w-12 h-12 rounded-xl bg-[#0A66C2]/20 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">Send a deletion request by email</h3>
          <p class="text-slate-400 text-sm mb-5 leading-relaxed">
            Email us with the subject line <strong class="text-slate-300">"Data Deletion Request"</strong> and include the email address or platform profile URL (LinkedIn, Slack, Discord, X, or Reddit) associated with your Assembr account.
          </p>
          <a href="mailto:privacy@kaxtus.com?subject=Data%20Deletion%20Request" class="btn-primary py-3 px-6">
            privacy@kaxtus.com
          </a>
          <p class="text-slate-500 text-xs mt-4">We will confirm receipt within 48 hours and complete deletion within 30 days.</p>
        </div>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">What happens after deletion</h2>
        <p class="text-slate-400 leading-relaxed">
          Once deletion is complete, you will receive a confirmation email. Your Assembr account will be deactivated and all associated personal data removed from our systems and backups within 30 days. This action is irreversible — if you wish to use Assembr again, you will need to create a new account.
        </p>
        <p class="text-slate-400 leading-relaxed mt-4">
          Note: Deleting your data from Assembr does not affect your accounts on any connected platform (LinkedIn, Slack, Discord, X, Reddit, or others) or any content you have posted there. To manage your data directly with each platform, visit that platform's own privacy settings.
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Data Deletion Request — Assembr",
  description: "How to request deletion of all personal data that Assembr holds about you, across all connected platforms. GDPR right to erasure. Contact privacy@kaxtus.com.",
  robots: "index,follow",
});
</script>
