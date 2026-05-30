<template>
  <div class="pt-16">
    <!-- Hero -->
    <div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4">
      <p class="section-label mb-3">Legal</p>
      <h1 class="font-display text-4xl font-bold text-white mb-3">Privacy Policy</h1>
      <p class="text-slate-400 max-w-xl mx-auto">How Assembr collects, uses, and protects your data.</p>
      <p class="text-slate-500 text-sm mt-3">Last updated: May 30, 2026 [Placeholder — update before launch]</p>
    </div>

    <!-- Body -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">

      <section>
        <h2 class="text-white text-xl font-bold mb-4">1. Who We Are</h2>
        <p class="text-slate-400 leading-relaxed">
          Assembr is operated by <strong class="text-slate-300">Kaxtus</strong> [Placeholder — full legal entity name (GmbH/UG) and registration number TBD before launch]. Our contact email for privacy matters is
          <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a>.
          Our registered address is in Berlin, Germany [Placeholder — full address TBD].
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">2. What Data We Collect</h2>
        <p class="text-slate-400 leading-relaxed mb-4">
          When you connect a platform account via OAuth, we request and temporarily store data from that platform's API. The current live integration is LinkedIn; the following describes the data scope for each third-party platform we integrate with (LinkedIn is the current example):
        </p>
        <ul class="space-y-2 text-slate-400 text-sm list-disc list-inside leading-relaxed">
          <li>Your public profile information (name, headline, profile photo URL) from the connected platform</li>
          <li>Follower count and follower demographics (industry, seniority, location — aggregated, as provided by the platform API)</li>
          <li>Post impressions, engagement metrics, and reach data for your content on that platform</li>
          <li>Platform-specific account or page identifier used to associate your data with your Assembr account</li>
        </ul>
        <p class="text-slate-400 leading-relaxed mt-4">
          <strong class="text-slate-300">LinkedIn specifically:</strong> When you connect via LinkedIn OAuth 2.0, we access the data scopes you explicitly authorize. This is governed additionally by LinkedIn's own Privacy Policy and Developer Terms.
        </p>
        <p class="text-slate-400 leading-relaxed mt-4">
          We also collect standard web analytics data (pages visited, browser type, approximate geographic region) using privacy-respecting analytics tools. We do not use tracking cookies for advertising.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">3. Why We Collect It (Legal Basis)</h2>
        <p class="text-slate-400 leading-relaxed">
          We process your platform data on the legal basis of <strong class="text-slate-300">contractual necessity</strong> (Art. 6(1)(b) GDPR) — the data is required to provide the Assembr dashboard service you requested. We also rely on your explicit <strong class="text-slate-300">consent</strong> (Art. 6(1)(a) GDPR) when you authorize each platform's OAuth connection. You may withdraw consent at any time by disconnecting the relevant platform account from your dashboard.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">4. Third Parties</h2>
        <p class="text-slate-400 leading-relaxed">
          Your data is shared with the following third parties solely to operate the service:
        </p>
        <ul class="space-y-2 text-slate-400 text-sm list-disc list-inside mt-3 leading-relaxed">
          <li><strong class="text-slate-300">Third-party platforms we integrate with</strong> — data flows through each platform's official API (currently LinkedIn; Slack, Discord, X, and Reddit when those integrations ship). Your use of Assembr is additionally subject to each connected platform's own privacy policy and terms of service. LinkedIn Corporation specifically: your LinkedIn data is governed by LinkedIn's Privacy Policy.</li>
          <li><strong class="text-slate-300">Hosting provider</strong> — infrastructure in Germany [Hetzner — Placeholder, confirm provider]. Processes data as our data processor under a DPA.</li>
        </ul>
        <p class="text-slate-400 leading-relaxed mt-4">
          We do not sell your data. We do not share your data with advertisers.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">5. Data Retention</h2>
        <p class="text-slate-400 leading-relaxed">
          We retain your platform analytics data for up to <strong class="text-slate-300">12 months</strong> to power historical trend views in your dashboard. If you disconnect your account or request deletion, we delete your data within <strong class="text-slate-300">30 days</strong>. Aggregated, anonymized statistics may be retained indefinitely.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">6. Security</h2>
        <p class="text-slate-400 leading-relaxed">
          All data is transmitted over TLS 1.3. Stored data is encrypted at rest. OAuth tokens are stored encrypted and never exposed in client-side code. For our security disclosure policy, see the <NuxtLink to="/security" class="text-[#378FE9] hover:underline">Security page</NuxtLink>.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">7. Your Rights (GDPR)</h2>
        <p class="text-slate-400 leading-relaxed mb-4">Under GDPR, you have the right to:</p>
        <ul class="space-y-2 text-slate-400 text-sm list-disc list-inside leading-relaxed">
          <li><strong class="text-slate-300">Access</strong> — request a copy of all personal data we hold about you.</li>
          <li><strong class="text-slate-300">Rectification</strong> — request correction of inaccurate data.</li>
          <li><strong class="text-slate-300">Erasure</strong> — request deletion of your data ("right to be forgotten"). See <NuxtLink to="/data-deletion" class="text-[#378FE9] hover:underline">Data Deletion</NuxtLink>.</li>
          <li><strong class="text-slate-300">Portability</strong> — request your data in a structured, machine-readable format.</li>
          <li><strong class="text-slate-300">Objection</strong> — object to processing based on legitimate interests.</li>
          <li><strong class="text-slate-300">Withdraw consent</strong> — at any time, by disconnecting any platform account or emailing us.</li>
        </ul>
        <p class="text-slate-400 leading-relaxed mt-4">
          To exercise any of these rights, email <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Berlin Commissioner for Data Protection (BlnBDI).
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">8. Cookies</h2>
        <p class="text-slate-400 leading-relaxed">
          We use only essential cookies required to keep you logged in and maintain your session. No third-party advertising cookies. See our <NuxtLink to="/cookies" class="text-[#378FE9] hover:underline">Cookie Policy</NuxtLink> for details.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">9. International Transfers</h2>
        <p class="text-slate-400 leading-relaxed">
          Your data is stored and processed in Germany. Third-party platforms we integrate with (including LinkedIn Corporation, based in the United States) may process data in the US or other countries; such transfers are covered by each platform's own compliance measures (Standard Contractual Clauses or equivalent). We do not otherwise transfer your personal data outside the EU/EEA.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">10. Changes to This Policy</h2>
        <p class="text-slate-400 leading-relaxed">
          We may update this Privacy Policy. We will notify registered users by email of material changes at least 14 days before they take effect. The date at the top of this page reflects the most recent revision.
        </p>
      </section>

      <section>
        <h2 class="text-white text-xl font-bold mb-4">11. Governing Law</h2>
        <p class="text-slate-400 leading-relaxed">
          This policy is governed by the laws of the Federal Republic of Germany and the General Data Protection Regulation (GDPR). Disputes shall be subject to the exclusive jurisdiction of the courts of Berlin, Germany.
        </p>
      </section>

      <section class="card border-[#0A66C2]/30 bg-[#0A66C2]/5">
        <h2 class="text-white text-lg font-bold mb-2">Contact us about privacy</h2>
        <p class="text-slate-400 text-sm mb-3">For any questions, requests, or concerns regarding this policy or your data:</p>
        <a href="mailto:privacy@kaxtus.com" class="btn-primary text-sm py-2 px-4 inline-flex">
          privacy@kaxtus.com
        </a>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Privacy Policy — Assembr",
  description: "How Assembr collects, uses, and protects your personal data. GDPR-compliant. Governing law: Germany.",
  robots: "index,follow",
});
</script>
