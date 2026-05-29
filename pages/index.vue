<template>
  <div>
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center pt-16 bg-slate-950 overflow-hidden">
      <!-- Background glow -->
      <div class="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0A66C2]/10 blur-[120px] pointer-events-none" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <!-- LinkedIn API badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#378FE9] text-sm font-medium mb-8">
          <LinkedInIcon class="w-4 h-4" />
          Built on the LinkedIn API
        </div>

        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Build, engage, and grow<br class="hidden md:block" />
          <span class="text-[#0A66C2]">your LinkedIn communities</span><br class="hidden md:block" />
          — at scale.
        </h1>

        <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Linkport gives community managers the tools to schedule posts, analyze audience behavior,
          and automate engagement — all powered directly by the LinkedIn API.
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
          <h2 class="section-title mb-4">Everything your community needs</h2>
          <p class="section-subtitle">Designed for LinkedIn community managers who want to move faster without sacrificing quality.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Post Scheduling"
            description="Plan and schedule LinkedIn posts weeks in advance. Set optimal posting times and let Linkport handle delivery."
            icon="calendar"
          />
          <FeatureCard
            title="Audience Analytics"
            description="Understand who follows you, where they're from, and what content resonates. Drill down by industry, seniority, and region."
            icon="chart"
          />
          <FeatureCard
            title="Audience Insights"
            description="Go beyond vanity metrics. See growth trends, follower quality, and track your community health score over time."
            icon="users"
          />
          <FeatureCard
            title="Engagement Automation"
            description="Automate routine engagement tasks — comment monitoring, first-response workflows, and follow-up sequences. [automation rules placeholder]"
            icon="bolt"
          />
        </div>
      </div>
    </section>

    <!-- INTEGRATIONS TEASER -->
    <section id="integrations" class="py-24 bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p class="section-label mb-3">Integrations</p>
        <h2 class="section-title mb-4">Powered by LinkedIn API</h2>
        <p class="section-subtitle mb-12">
          Linkport connects natively to LinkedIn. More integrations coming — [Zapier, Slack, HubSpot placeholders].
        </p>

        <div class="flex flex-wrap items-center justify-center gap-8">
          <!-- LinkedIn — primary integration -->
          <div class="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-[#0A66C2]/40 shadow-lg">
            <LinkedInIcon class="w-12 h-12 text-[#0A66C2]" />
            <span class="text-white font-semibold">LinkedIn API</span>
            <span class="text-xs text-[#378FE9] font-medium">Connected</span>
          </div>

          <!-- Placeholder integrations -->
          <div v-for="integration in placeholderIntegrations" :key="integration" class="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-slate-800 opacity-50">
            <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 text-lg font-bold">
              {{ integration[0] }}
            </div>
            <span class="text-slate-500 font-medium text-sm">{{ integration }}</span>
            <span class="text-xs text-slate-600">Coming soon</span>
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
          <p class="section-subtitle">Start free. Scale as your community grows.</p>
          <p class="mt-2 text-amber-400 text-sm">[Placeholder pricing — final pricing TBD before launch]</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Free"
            price="$0"
            period="/ month"
            description="Perfect for individuals managing a single LinkedIn presence."
            :features="['1 LinkedIn account', 'Up to 10 scheduled posts/month', 'Basic analytics', 'Community overview']"
            cta="Get started free"
            ctaLink="/dashboard"
          />
          <PricingCard
            name="Pro"
            price="$29"
            period="/ month"
            description="For professional community managers who need more reach and insights."
            :features="['Up to 3 LinkedIn accounts', 'Unlimited scheduled posts', 'Advanced analytics', 'Audience insights', 'Priority support']"
            cta="Start Pro trial"
            ctaLink="/dashboard"
            :featured="true"
          />
          <PricingCard
            name="Business"
            price="$99"
            period="/ month"
            description="For agencies and teams managing multiple LinkedIn communities."
            :features="['Unlimited LinkedIn accounts', 'Team collaboration', 'Custom analytics dashboards', 'Automation rules', 'Dedicated support', 'API access [placeholder]']"
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
            question="How does Linkport connect to LinkedIn?"
            answer="Linkport uses the official LinkedIn API with OAuth 2.0. You authorize Linkport to access your LinkedIn profile and page data — we never store your password. [OAuth flow placeholder — Round 3 implementation]"
          />
          <FaqItem
            question="Is Linkport approved by LinkedIn?"
            answer="We are currently in the LinkedIn API review process to obtain full community management permissions. During this period, the app is available in beta with limited functionality. Full approval is expected before the public launch."
          />
          <FaqItem
            question="What data does Linkport collect from LinkedIn?"
            answer="With your authorization, Linkport reads your profile data, follower counts, post impressions, and engagement metrics. We use this data exclusively to display your analytics and schedule your content. See our Privacy Policy for full details."
          />
          <FaqItem
            question="Can I cancel or delete my data at any time?"
            answer="Yes. You can disconnect your LinkedIn account at any time from the dashboard settings. To request full deletion of all your data, visit our Data Deletion page or email privacy@kaxtus.com."
          />
          <FaqItem
            question="What happens after the free trial?"
            answer="The Free plan is permanently free — no credit card required. If you upgrade to Pro or Business, you'll be billed monthly and can cancel anytime. [Billing system placeholder — Stripe integration TBD]"
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
        <h2 class="section-title mb-6">Ready to grow your LinkedIn community?</h2>
        <p class="section-subtitle mb-10">
          Join the beta and get early access to Linkport's full feature set — free during our API review period.
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
  title: "Linkport — LinkedIn Community Management at Scale",
  description:
    "Build, engage, and grow your LinkedIn communities — at scale. Linkport helps community managers schedule posts, analyze audience insights, and automate engagement.",
});

const placeholderIntegrations = ["Zapier", "Slack", "HubSpot", "Notion"];
</script>
