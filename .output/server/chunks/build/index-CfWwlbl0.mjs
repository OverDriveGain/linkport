import { defineComponent, withCtx, createTextVNode, createBlock, openBlock, createVNode, mergeProps, toDisplayString, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Bojkr02_.mjs';
import { a as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LinkedInIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card group hover:border-[#0A66C2]/40 transition-all duration-300 hover:-translate-y-1" }, _attrs))}><div class="w-10 h-10 rounded-xl bg-[#0A66C2]/15 flex items-center justify-center mb-4 group-hover:bg-[#0A66C2]/25 transition-colors">`);
      if (_ctx.icon === "calendar") {
        _push(`<svg class="w-5 h-5 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`);
      } else if (_ctx.icon === "chart") {
        _push(`<svg class="w-5 h-5 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`);
      } else if (_ctx.icon === "users") {
        _push(`<svg class="w-5 h-5 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`);
      } else if (_ctx.icon === "bolt") {
        _push(`<svg class="w-5 h-5 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="text-white font-semibold text-lg mb-2">${ssrInterpolate(_ctx.title)}</h3><p class="text-slate-400 text-sm leading-relaxed">${ssrInterpolate(_ctx.description)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    price: {},
    period: {},
    description: {},
    features: {},
    cta: {},
    ctaLink: {},
    featured: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex flex-col rounded-2xl p-8 border transition-all duration-300", _ctx.featured ? "bg-[#0A66C2]/10 border-[#0A66C2]/50 shadow-xl shadow-[#0A66C2]/10" : "bg-slate-900 border-slate-800 hover:border-slate-700"]
      }, _attrs))}>`);
      if (_ctx.featured) {
        _push(`<div class="absolute -top-3.5 left-1/2 -translate-x-1/2"><span class="px-4 py-1 rounded-full bg-[#0A66C2] text-white text-xs font-semibold">Most popular</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-6"><h3 class="text-lg font-bold text-white mb-1">${ssrInterpolate(_ctx.name)}</h3><p class="text-slate-400 text-sm">${ssrInterpolate(_ctx.description)}</p></div><div class="mb-6"><span class="text-4xl font-display font-bold text-white">${ssrInterpolate(_ctx.price)}</span><span class="text-slate-400 ml-1">${ssrInterpolate(_ctx.period)}</span></div><ul class="flex-1 space-y-3 mb-8"><!--[-->`);
      ssrRenderList(_ctx.features, (feature) => {
        _push(`<li class="flex items-start gap-3 text-sm text-slate-300"><svg class="w-4 h-4 text-[#0A66C2] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> ${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.ctaLink,
        class: _ctx.featured ? "btn-primary justify-center" : "btn-secondary justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.cta)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.cta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FaqItem",
  __ssrInlineRender: true,
  props: {
    question: {},
    answer: {}
  },
  setup(__props) {
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card cursor-pointer select-none" }, _attrs))}><div class="flex items-start justify-between gap-4"><h3 class="text-white font-medium text-base leading-snug">${ssrInterpolate(_ctx.question)}</h3><svg class="${ssrRenderClass([unref(open) ? "rotate-180" : "", "w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>`);
      if (unref(open)) {
        _push(`<div class="mt-4 text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">${ssrInterpolate(_ctx.answer)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Linkport \u2014 LinkedIn Community Management at Scale",
      description: "Build, engage, and grow your LinkedIn communities \u2014 at scale. Linkport helps community managers schedule posts, analyze audience insights, and automate engagement."
    });
    const placeholderIntegrations = ["Zapier", "Slack", "HubSpot", "Notion"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LinkedInIcon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FeatureCard = _sfc_main$3;
      const _component_PricingCard = _sfc_main$2;
      const _component_FaqItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-screen flex items-center pt-16 bg-slate-950 overflow-hidden"><div class="absolute inset-0 bg-gradient-hero pointer-events-none"></div><div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0A66C2]/10 blur-[120px] pointer-events-none"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#378FE9] text-sm font-medium mb-8">`);
      _push(ssrRenderComponent(_component_LinkedInIcon, { class: "w-4 h-4" }, null, _parent));
      _push(` Built on the LinkedIn API </div><h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"> Build, engage, and grow<br class="hidden md:block"><span class="text-[#0A66C2]">your LinkedIn communities</span><br class="hidden md:block"> \u2014 at scale. </h1><p class="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"> Linkport gives community managers the tools to schedule posts, analyze audience behavior, and automate engagement \u2014 all powered directly by the LinkedIn API. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "btn-primary text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Try the dashboard <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Try the dashboard "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#pricing",
        class: "btn-secondary text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See pricing `);
          } else {
            return [
              createTextVNode(" See pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"><div class="text-center"><div class="text-2xl font-bold text-white">12k+</div><div class="text-xs text-slate-400 mt-1">Posts scheduled [placeholder]</div></div><div class="text-center"><div class="text-2xl font-bold text-white">340+</div><div class="text-xs text-slate-400 mt-1">Communities managed [placeholder]</div></div><div class="text-center"><div class="text-2xl font-bold text-white">3.2x</div><div class="text-xs text-slate-400 mt-1">Avg engagement lift [placeholder]</div></div></div></div></section><section id="features" class="py-24 bg-slate-950"><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="text-center mb-16"><p class="section-label mb-3">Features</p><h2 class="section-title mb-4">Everything your community needs</h2><p class="section-subtitle">Designed for LinkedIn community managers who want to move faster without sacrificing quality.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`);
      _push(ssrRenderComponent(_component_FeatureCard, {
        title: "Post Scheduling",
        description: "Plan and schedule LinkedIn posts weeks in advance. Set optimal posting times and let Linkport handle delivery.",
        icon: "calendar"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FeatureCard, {
        title: "Audience Analytics",
        description: "Understand who follows you, where they're from, and what content resonates. Drill down by industry, seniority, and region.",
        icon: "chart"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FeatureCard, {
        title: "Audience Insights",
        description: "Go beyond vanity metrics. See growth trends, follower quality, and track your community health score over time.",
        icon: "users"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FeatureCard, {
        title: "Engagement Automation",
        description: "Automate routine engagement tasks \u2014 comment monitoring, first-response workflows, and follow-up sequences. [automation rules placeholder]",
        icon: "bolt"
      }, null, _parent));
      _push(`</div></div></section><section id="integrations" class="py-24 bg-slate-900/50"><div class="max-w-7xl mx-auto px-4 sm:px-6 text-center"><p class="section-label mb-3">Integrations</p><h2 class="section-title mb-4">Powered by LinkedIn API</h2><p class="section-subtitle mb-12"> Linkport connects natively to LinkedIn. More integrations coming \u2014 [Zapier, Slack, HubSpot placeholders]. </p><div class="flex flex-wrap items-center justify-center gap-8"><div class="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-[#0A66C2]/40 shadow-lg">`);
      _push(ssrRenderComponent(_component_LinkedInIcon, { class: "w-12 h-12 text-[#0A66C2]" }, null, _parent));
      _push(`<span class="text-white font-semibold">LinkedIn API</span><span class="text-xs text-[#378FE9] font-medium">Connected</span></div><!--[-->`);
      ssrRenderList(placeholderIntegrations, (integration) => {
        _push(`<div class="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900 border border-slate-800 opacity-50"><div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 text-lg font-bold">${ssrInterpolate(integration[0])}</div><span class="text-slate-500 font-medium text-sm">${ssrInterpolate(integration)}</span><span class="text-xs text-slate-600">Coming soon</span></div>`);
      });
      _push(`<!--]--></div></div></section><section id="pricing" class="py-24 bg-slate-950"><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="text-center mb-16"><p class="section-label mb-3">Pricing</p><h2 class="section-title mb-4">Simple, transparent pricing</h2><p class="section-subtitle">Start free. Scale as your community grows.</p><p class="mt-2 text-amber-400 text-sm">[Placeholder pricing \u2014 final pricing TBD before launch]</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">`);
      _push(ssrRenderComponent(_component_PricingCard, {
        name: "Free",
        price: "$0",
        period: "/ month",
        description: "Perfect for individuals managing a single LinkedIn presence.",
        features: ["1 LinkedIn account", "Up to 10 scheduled posts/month", "Basic analytics", "Community overview"],
        cta: "Get started free",
        ctaLink: "/dashboard"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PricingCard, {
        name: "Pro",
        price: "$29",
        period: "/ month",
        description: "For professional community managers who need more reach and insights.",
        features: ["Up to 3 LinkedIn accounts", "Unlimited scheduled posts", "Advanced analytics", "Audience insights", "Priority support"],
        cta: "Start Pro trial",
        ctaLink: "/dashboard",
        featured: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_PricingCard, {
        name: "Business",
        price: "$99",
        period: "/ month",
        description: "For agencies and teams managing multiple LinkedIn communities.",
        features: ["Unlimited LinkedIn accounts", "Team collaboration", "Custom analytics dashboards", "Automation rules", "Dedicated support", "API access [placeholder]"],
        cta: "Contact us",
        ctaLink: "mailto:info@kaxtus.com"
      }, null, _parent));
      _push(`</div></div></section><section id="faq" class="py-24 bg-slate-900/30"><div class="max-w-3xl mx-auto px-4 sm:px-6"><div class="text-center mb-16"><p class="section-label mb-3">FAQ</p><h2 class="section-title mb-4">Frequently asked questions</h2></div><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "How does Linkport connect to LinkedIn?",
        answer: "Linkport uses the official LinkedIn API with OAuth 2.0. You authorize Linkport to access your LinkedIn profile and page data \u2014 we never store your password. [OAuth flow placeholder \u2014 Round 3 implementation]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "Is Linkport approved by LinkedIn?",
        answer: "We are currently in the LinkedIn API review process to obtain full community management permissions. During this period, the app is available in beta with limited functionality. Full approval is expected before the public launch."
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "What data does Linkport collect from LinkedIn?",
        answer: "With your authorization, Linkport reads your profile data, follower counts, post impressions, and engagement metrics. We use this data exclusively to display your analytics and schedule your content. See our Privacy Policy for full details."
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "Can I cancel or delete my data at any time?",
        answer: "Yes. You can disconnect your LinkedIn account at any time from the dashboard settings. To request full deletion of all your data, visit our Data Deletion page or email privacy@kaxtus.com."
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "What happens after the free trial?",
        answer: "The Free plan is permanently free \u2014 no credit card required. If you upgrade to Pro or Business, you'll be billed monthly and can cancel anytime. [Billing system placeholder \u2014 Stripe integration TBD]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FaqItem, {
        question: "Is my data stored securely?",
        answer: "Yes. All data is encrypted in transit (TLS 1.3) and at rest. Our infrastructure runs in Germany (Berlin), meaning your data is subject to GDPR protections. See our Security page for more."
      }, null, _parent));
      _push(`</div></div></section><section class="py-24 bg-slate-950"><div class="max-w-3xl mx-auto px-4 sm:px-6 text-center"><h2 class="section-title mb-6">Ready to grow your LinkedIn community?</h2><p class="section-subtitle mb-10"> Join the beta and get early access to Linkport&#39;s full feature set \u2014 free during our API review period. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "btn-primary text-base px-8 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Access the dashboard <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Access the dashboard "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CfWwlbl0.mjs.map
