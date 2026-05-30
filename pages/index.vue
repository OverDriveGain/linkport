<template>
  <div>
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center pt-16 bg-slate-950 overflow-hidden">
      <!-- Background glow -->
      <div class="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0A66C2]/10 blur-[120px] pointer-events-none" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <!-- Multi-platform badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#378FE9] text-sm font-medium mb-8">
          <LinkedInIcon class="w-4 h-4" />
          LinkedIn integration live — more platforms coming
        </div>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          One workspace for every<br class="hidden md:block" />
          <span class="text-[#0A66C2]">community you run</span><br class="hidden md:block" />
          — across every platform.
        </h1>

        <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          Build, engage, and grow communities across every platform you publish on.
          Assembr gives community managers a unified workspace for LinkedIn, Slack, Discord, and more.
        </p>

        <!-- Subhero — sets expectations for reviewers -->
        <p class="text-base text-slate-500 max-w-xl mx-auto mb-10">
          Starting with LinkedIn — full multi-platform suite coming through the year.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/dashboard" class="btn-primary text-base px-8 py-4">
            Try the dashboard
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink to="#pricing" class="btn-secondary text-base px-8 py-4">
            See pricing
          </NuxtLink>
        </div>

        <!-- Hero stats (placeholder) -->
        <div class="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">12k+</div>
            <div class="text-xs text-slate-400 mt-1">Posts scheduled [placeholder]</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">340+</div>
            <div class="text-xs text-slate-400 mt-1">Communities managed [placeholder]</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">3.2x</div>
            <div class="text-xs text-slate-400 mt-1">Avg engagement lift [placeholder]</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-label mb-3">Features</p>
          <h2 class="section-title mb-4">Built for communities that span platforms</h2>
          <p class="section-subtitle">Designed for community managers who want to move faster without sacrificing quality — wherever your audience lives.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Unified Content Scheduler"
            description="Plan and schedule content across your platforms weeks in advance. Set optimal posting times and let Assembr handle delivery."
            icon="calendar"
          />
          <FeatureCard
            title="Cross-Platform Analytics"
            description="Understand who follows you across your platforms, where they're from, and what content resonates. Unified reporting, one view."
            icon="chart"
          />
          <FeatureCard
            title="Cohort & Audience Insights"
            description="Go beyond vanity metrics. See growth trends, audience quality, and track your community health score over time — per platform."
            icon="users"
          />
          <FeatureCard
            title="Engagement Automation"
            description="Automate routine engagement tasks across your platforms — comment monitoring, first-response workflows, and follow-up sequences."
            icon="bolt"
          />
        </div>
      </div>
    </section>

    <!-- INTEGRATIONS — promoted to full section -->
    <section id="integrations" class="py-24 bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-label mb-3">Integrations</p>
          <h2 class="section-title mb-4">Connect your platforms</h2>
          <p class="section-subtitle mb-4">
            Assembr integrates directly with each platform via its official API. LinkedIn is live today — Slack, Discord, X, and Reddit are in active development.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          <!-- LinkedIn — LIVE, prominent -->
          <div class="col-span-2 md:col-span-1 flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-[#0A66C2]/50 shadow-lg shadow-[#0A66C2]/10 relative">
            <div class="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span class="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE
              </span>
            </div>
            <LinkedInIcon class="w-10 h-10 text-[#0A66C2]" />
            <span class="text-white font-semibold text-sm text-center">LinkedIn</span>
            <span class="text-xs text-[#378FE9] font-medium text-center">Integration #1 — Active</span>
          </div>

          <!-- Slack -->
          <div v-for="integration in upcomingIntegrations" :key="integration.name"
            class="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-slate-800 relative">
            <div class="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span class="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-500 text-xs font-medium">
                {{ integration.eta }}
              </span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 text-base font-bold">
              {{ integration.initial }}
            </div>
            <span class="text-slate-400 font-medium text-sm text-center">{{ integration.name }}</span>
            <span class="text-xs text-slate-600 text-center">Coming soon</span>
          </div>
        </div>

        <!-- LinkedIn screenshot/mockup area -->
        <div class="mt-16 max-w-4xl mx-auto rounded-2xl bg-slate-900 border border-[#0A66C2]/20 overflow-hidden shadow-2xl shadow-black/40">
          <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-slate-600"></div>
              <div class="w-3 h-3 rounded-full bg-slate-600"></div>
              <div class="w-3 h-3 rounded-full bg-slate-600"></div>
            </div>
            <div class="flex-1 text-center">
              <span class="text-slate-400 text-xs">assembr.io / dashboard — LinkedIn overview</span>
            </div>
            <div class="flex items-center gap-1.5 text-xs text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Live
            </div>
          </div>
          <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-slate-800 rounded-xl p-4">
              <p class="text-slate-400 text-xs mb-1">Followers</p>
              <p class="text-white font-bold text-xl">4,821</p>
              <p class="text-emerald-400 text-xs mt-1">+127 this month</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-4">
              <p class="text-slate-400 text-xs mb-1">Profile Views</p>
              <p class="text-white font-bold text-xl">9,340</p>
              <p class="text-emerald-400 text-xs mt-1">+18% vs last month</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-4">
              <p class="text-slate-400 text-xs mb-1">Impressions</p>
              <p class="text-white font-bold text-xl">41.2k</p>
              <p class="text-emerald-400 text-xs mt-1">+3.1k this week</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-4">
              <p class="text-slate-400 text-xs mb-1">Engagement</p>
              <p class="text-white font-bold text-xl">3.8%</p>
              <p class="text-slate-400 text-xs mt-1">rate</p>
            </div>
          </div>
          <div class="px-6 pb-6">
            <div class="bg-slate-800/60 rounded-xl p-4">
              <p class="text-slate-300 text-xs font-medium mb-3">Top posts — last 30 days</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-400 truncate max-w-xs">How we grew our LinkedIn community to 5,000 followers in 3 months...</span>
                  <span class="text-slate-300 ml-4 flex-shrink-0">12.4k impressions</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-400 truncate max-w-xs">Thread: The 7 LinkedIn posting habits that separate 1% creators...</span>
                  <span class="text-slate-300 ml-4 flex-shrink-0">9.8k impressions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-label mb-3">Pricing</p>
          <h2 class="section-title mb-4">Simple, transparent pricing</h2>
          <p class="section-subtitle">Start with one platform. Scale across your whole community stack.</p>
          <p class="mt-2 text-amber-400 text-sm">[Placeholder pricing — final pricing TBD before launch]</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Free"
            price="$0"
            period="/ month"
            description="Perfect for individuals managing a single platform and one community."
            :features="['1 platform, 1 community', 'Up to 10 scheduled posts/month', 'Basic analytics', 'Community overview']"
            cta="Get started free"
            ctaLink="/dashboard"
          />
          <PricingCard
            name="Pro"
            price="$29"
            period="/ month"
            description="For community managers who need multi-platform reach and deeper insights."
            :features="['3 platforms, unlimited communities', 'Unlimited scheduled posts', 'Advanced cross-platform analytics', 'Cohort & audience insights', 'Priority support']"
            cta="Start Pro trial"
            ctaLink="/dashboard"
            :featured="true"
          />
          <PricingCard
            name="Business"
            price="$99"
            period="/ month"
            description="For agencies and teams running communities at scale across every platform."
            :features="['All platforms, unlimited communities', 'Team seats & collaboration', 'Advanced analytics dashboards', 'Engagement automation', 'Dedicated support', 'API access [placeholder]']"
            cta="Contact us"
            ctaLink="mailto:info@kaxtus.com"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-24 bg-slate-900/30">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-label mb-3">FAQ</p>
          <h2 class="section-title mb-4">Frequently asked questions</h2>
        </div>

        <div class="space-y-4">
          <FaqItem
            question="Which platforms does Assembr support?"
            answer="LinkedIn is live today, with full API integration. Slack, Discord, X (Twitter), and Reddit are in active development and scheduled to ship through 2026. Each platform is clearly marked in the integrations section with its expected availability."
          />
          <FaqItem
            question="How does Assembr connect to LinkedIn?"
            answer="Assembr uses the official LinkedIn API with OAuth 2.0. You authorize Assembr to access your LinkedIn profile and page data — we never store your password. LinkedIn integration is active and available today."
          />
          <FaqItem
            question="Is Assembr approved by LinkedIn?"
            answer="We are currently in the LinkedIn API review process to obtain full community management permissions. During this period, the app is available in beta with limited functionality. Full approval is expected before the public launch."
          />
          <FaqItem
            question="What data does Assembr collect from my platforms?"
            answer="With your authorization, Assembr reads your profile data, follower counts, post impressions, and engagement metrics from each connected platform. We use this data exclusively to display your analytics and schedule your content. See our Privacy Policy for full details."
          />
          <FaqItem
            question="Can I cancel or delete my data at any time?"
            answer="Yes. You can disconnect any platform account at any time from your dashboard settings. To request full deletion of all your data across all platforms, visit our Data Deletion page or email privacy@kaxtus.com."
          />
          <FaqItem
            question="Is my data stored securely?"
            answer="Yes. All data is encrypted in transit (TLS 1.3) and at rest. Our infrastructure runs in Germany (Berlin), meaning your data is subject to GDPR protections. See our Security page for more."
          />
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-24 bg-slate-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="section-title mb-6">Ready to manage all your communities in one place?</h2>
        <p class="section-subtitle mb-10">
          Join the beta and get early access to Assembr's full feature set — free during our review period. LinkedIn integration is live today.
        </p>
        <NuxtLink to="/dashboard" class="btn-primary text-base px-8 py-4">
          Access the dashboard
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Assembr — Multi-Platform Community Management",
  description:
    "Build, engage, and grow communities across every platform you publish on. Assembr is the unified workspace for community managers — LinkedIn, Slack, Discord, and more.",
});

const upcomingIntegrations = [
  { name: "Slack", initial: "Sl", eta: "Q3 2026" },
  { name: "Discord", initial: "Di", eta: "Q3 2026" },
  { name: "X / Twitter", initial: "X", eta: "Q4 2026" },
  { name: "Reddit", initial: "Re", eta: "Q4 2026" },
  { name: "Facebook Groups", initial: "Fb", eta: "TBA" },
];
</script>
