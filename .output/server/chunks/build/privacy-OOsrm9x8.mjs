import { _ as __nuxt_component_0 } from './nuxt-link-Bojkr02_.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Privacy Policy \u2014 Linkport",
      description: "How Linkport collects, uses, and protects your personal data. GDPR-compliant. Governing law: Germany.",
      robots: "index,follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16" }, _attrs))}><div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4"><p class="section-label mb-3">Legal</p><h1 class="font-display text-4xl font-bold text-white mb-3">Privacy Policy</h1><p class="text-slate-400 max-w-xl mx-auto">How Linkport collects, uses, and protects your data.</p><p class="text-slate-500 text-sm mt-3">Last updated: May 30, 2026 [Placeholder \u2014 update before launch]</p></div><div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12"><section><h2 class="text-white text-xl font-bold mb-4">1. Who We Are</h2><p class="text-slate-400 leading-relaxed"> Linkport is operated by <strong class="text-slate-300">Kaxtus</strong> [Placeholder \u2014 full legal entity name (GmbH/UG) and registration number TBD before launch]. Our contact email for privacy matters is <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a>. Our registered address is in Berlin, Germany [Placeholder \u2014 full address TBD]. </p></section><section><h2 class="text-white text-xl font-bold mb-4">2. What Data We Collect</h2><p class="text-slate-400 leading-relaxed mb-4"> When you connect your LinkedIn account via OAuth, we request and temporarily store the following LinkedIn API data: </p><ul class="space-y-2 text-slate-400 text-sm list-disc list-inside leading-relaxed"><li>Your LinkedIn profile information (name, headline, profile photo URL)</li><li>Follower count and follower demographics (industry, seniority, location \u2014 aggregated)</li><li>Post impressions, engagement metrics, and reach data for your LinkedIn posts</li><li>LinkedIn Page or Profile ID used to associate your data with your account</li></ul><p class="text-slate-400 leading-relaxed mt-4"> We also collect standard web analytics data (pages visited, browser type, approximate geographic region) using privacy-respecting analytics tools. We do not use tracking cookies for advertising. </p></section><section><h2 class="text-white text-xl font-bold mb-4">3. Why We Collect It (Legal Basis)</h2><p class="text-slate-400 leading-relaxed"> We process your LinkedIn data on the legal basis of <strong class="text-slate-300">contractual necessity</strong> (Art. 6(1)(b) GDPR) \u2014 the data is required to provide the Linkport dashboard service you requested. We also rely on your explicit <strong class="text-slate-300">consent</strong> (Art. 6(1)(a) GDPR) when you authorize the LinkedIn OAuth connection. You may withdraw consent at any time by disconnecting your LinkedIn account. </p></section><section><h2 class="text-white text-xl font-bold mb-4">4. Third Parties</h2><p class="text-slate-400 leading-relaxed"> Your data is shared with the following third parties solely to operate the service: </p><ul class="space-y-2 text-slate-400 text-sm list-disc list-inside mt-3 leading-relaxed"><li><strong class="text-slate-300">LinkedIn Corporation</strong> \u2014 via the LinkedIn API. Your use of Linkport is additionally subject to LinkedIn&#39;s own privacy policy and terms of service.</li><li><strong class="text-slate-300">Hosting provider</strong> \u2014 infrastructure in Germany [Hetzner \u2014 Placeholder, confirm provider]. Processes data as our data processor under a DPA.</li></ul><p class="text-slate-400 leading-relaxed mt-4"> We do not sell your data. We do not share your data with advertisers. </p></section><section><h2 class="text-white text-xl font-bold mb-4">5. Data Retention</h2><p class="text-slate-400 leading-relaxed"> We retain your LinkedIn analytics data for up to <strong class="text-slate-300">12 months</strong> to power historical trend views in your dashboard. If you disconnect your account or request deletion, we delete your data within <strong class="text-slate-300">30 days</strong>. Aggregated, anonymized statistics may be retained indefinitely. </p></section><section><h2 class="text-white text-xl font-bold mb-4">6. Security</h2><p class="text-slate-400 leading-relaxed"> All data is transmitted over TLS 1.3. Stored data is encrypted at rest. OAuth tokens are stored encrypted and never exposed in client-side code. For our security disclosure policy, see the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/security",
        class: "text-[#378FE9] hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Security page`);
          } else {
            return [
              createTextVNode("Security page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></section><section><h2 class="text-white text-xl font-bold mb-4">7. Your Rights (GDPR)</h2><p class="text-slate-400 leading-relaxed mb-4">Under GDPR, you have the right to:</p><ul class="space-y-2 text-slate-400 text-sm list-disc list-inside leading-relaxed"><li><strong class="text-slate-300">Access</strong> \u2014 request a copy of all personal data we hold about you.</li><li><strong class="text-slate-300">Rectification</strong> \u2014 request correction of inaccurate data.</li><li><strong class="text-slate-300">Erasure</strong> \u2014 request deletion of your data (&quot;right to be forgotten&quot;). See `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/data-deletion",
        class: "text-[#378FE9] hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Data Deletion`);
          } else {
            return [
              createTextVNode("Data Deletion")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</li><li><strong class="text-slate-300">Portability</strong> \u2014 request your data in a structured, machine-readable format.</li><li><strong class="text-slate-300">Objection</strong> \u2014 object to processing based on legitimate interests.</li><li><strong class="text-slate-300">Withdraw consent</strong> \u2014 at any time, by disconnecting LinkedIn or emailing us.</li></ul><p class="text-slate-400 leading-relaxed mt-4"> To exercise any of these rights, email <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Berlin Commissioner for Data Protection (BlnBDI). </p></section><section><h2 class="text-white text-xl font-bold mb-4">8. Cookies</h2><p class="text-slate-400 leading-relaxed"> We use only essential cookies required to keep you logged in and maintain your session. No third-party advertising cookies. See our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookies",
        class: "text-[#378FE9] hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy`);
          } else {
            return [
              createTextVNode("Cookie Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` for details. </p></section><section><h2 class="text-white text-xl font-bold mb-4">9. International Transfers</h2><p class="text-slate-400 leading-relaxed"> Your data is stored and processed in Germany. LinkedIn Corporation is based in the United States; the LinkedIn API transfer is covered by LinkedIn&#39;s own compliance measures (Standard Contractual Clauses). We do not otherwise transfer your personal data outside the EU/EEA. </p></section><section><h2 class="text-white text-xl font-bold mb-4">10. Changes to This Policy</h2><p class="text-slate-400 leading-relaxed"> We may update this Privacy Policy. We will notify registered users by email of material changes at least 14 days before they take effect. The date at the top of this page reflects the most recent revision. </p></section><section><h2 class="text-white text-xl font-bold mb-4">11. Governing Law</h2><p class="text-slate-400 leading-relaxed"> This policy is governed by the laws of the Federal Republic of Germany and the General Data Protection Regulation (GDPR). Disputes shall be subject to the exclusive jurisdiction of the courts of Berlin, Germany. </p></section><section class="card border-[#0A66C2]/30 bg-[#0A66C2]/5"><h2 class="text-white text-lg font-bold mb-2">Contact us about privacy</h2><p class="text-slate-400 text-sm mb-3">For any questions, requests, or concerns regarding this policy or your data:</p><a href="mailto:privacy@kaxtus.com" class="btn-primary text-sm py-2 px-4 inline-flex"> privacy@kaxtus.com </a></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-OOsrm9x8.mjs.map
