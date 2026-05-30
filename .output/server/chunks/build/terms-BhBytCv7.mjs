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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Terms of Service \u2014 Linkport",
      description: "The terms of service governing your use of Linkport. Governed by German law.",
      robots: "index,follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16" }, _attrs))}><div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4"><p class="section-label mb-3">Legal</p><h1 class="font-display text-4xl font-bold text-white mb-3">Terms of Service</h1><p class="text-slate-400 max-w-xl mx-auto">The agreement between you and Kaxtus for using Linkport.</p><p class="text-slate-500 text-sm mt-3">Last updated: May 30, 2026 [Placeholder \u2014 update before launch]</p></div><div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12"><section><h2 class="text-white text-xl font-bold mb-4">1. Service Description</h2><p class="text-slate-400 leading-relaxed"> Linkport is a web-based LinkedIn community management platform operated by <strong class="text-slate-300">Kaxtus</strong> [Placeholder \u2014 full legal entity TBD], based in Berlin, Germany. Linkport provides tools for scheduling LinkedIn posts, analyzing audience metrics, and managing community engagement \u2014 all powered through the official LinkedIn API. </p></section><section><h2 class="text-white text-xl font-bold mb-4">2. Account Terms</h2><p class="text-slate-400 leading-relaxed"> To use Linkport, you must have a valid LinkedIn account and authorize Linkport via LinkedIn&#39;s OAuth system. You are responsible for maintaining the confidentiality of your account credentials. You must be at least 18 years old. By connecting your LinkedIn account, you confirm that you have the right to authorize Linkport to access the associated LinkedIn profile or Page data. </p><p class="text-slate-400 leading-relaxed mt-4"> [Account registration and authentication system \u2014 Placeholder. Full authentication flow in Round 3.] </p></section><section><h2 class="text-white text-xl font-bold mb-4">3. Acceptable Use</h2><p class="text-slate-400 leading-relaxed mb-4">You agree not to use Linkport to:</p><ul class="space-y-2 text-slate-400 text-sm list-disc list-inside leading-relaxed"><li>Violate LinkedIn&#39;s Terms of Service, User Agreement, or API policies.</li><li>Post spam, misleading content, or conduct any coordinated inauthentic behavior on LinkedIn.</li><li>Harvest, scrape, or store LinkedIn data beyond what is permitted by the LinkedIn API terms.</li><li>Attempt to reverse-engineer, hack, or circumvent Linkport&#39;s security measures.</li><li>Use the service in any way that violates applicable laws, including data protection laws.</li></ul><p class="text-slate-400 leading-relaxed mt-4"> We reserve the right to suspend accounts found to be in violation of these terms without prior notice. </p></section><section><h2 class="text-white text-xl font-bold mb-4">4. LinkedIn API Compliance</h2><p class="text-slate-400 leading-relaxed"> Linkport&#39;s functionality depends on access to the LinkedIn API. LinkedIn may modify, restrict, or revoke API access at any time. We are not liable for any interruption to the service caused by LinkedIn&#39;s API availability or policy changes. Linkport is not affiliated with, endorsed by, or a partner of LinkedIn Corporation. </p></section><section><h2 class="text-white text-xl font-bold mb-4">5. Intellectual Property</h2><p class="text-slate-400 leading-relaxed"> Linkport and all associated software, design, trademarks, and content are owned by Kaxtus. You retain ownership of the content you post on LinkedIn through Linkport. By using Linkport, you grant us a limited license to process your content solely to deliver the service. </p></section><section><h2 class="text-white text-xl font-bold mb-4">6. Pricing and Billing</h2><p class="text-slate-400 leading-relaxed"> [Placeholder \u2014 Billing and payment processing (Stripe or equivalent) TBD before launch.] The Free plan is available without payment. Paid plans are billed monthly or annually. You may cancel at any time; cancellation takes effect at the end of the current billing period. No refunds for partial months unless required by German consumer protection law. </p></section><section><h2 class="text-white text-xl font-bold mb-4">7. Disclaimers</h2><p class="text-slate-400 leading-relaxed"> Linkport is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that the service will be uninterrupted or error-free. Analytics data displayed in the dashboard reflects data returned by the LinkedIn API and may have inherent delays or inaccuracies. We are not responsible for decisions made based on dashboard data. </p></section><section><h2 class="text-white text-xl font-bold mb-4">8. Limitation of Liability</h2><p class="text-slate-400 leading-relaxed"> To the maximum extent permitted by law, Kaxtus shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of Linkport. Our total liability to you in any calendar month shall not exceed the amount you paid us in that month (or \u20AC0 for free plan users). </p></section><section><h2 class="text-white text-xl font-bold mb-4">9. Termination</h2><p class="text-slate-400 leading-relaxed"> You may terminate your account at any time by disconnecting your LinkedIn account and emailing <a href="mailto:privacy@kaxtus.com" class="text-[#378FE9] hover:underline">privacy@kaxtus.com</a> requesting deletion. We may terminate or suspend your account for violation of these terms. Upon termination, your data will be deleted in accordance with our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-[#378FE9] hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></section><section><h2 class="text-white text-xl font-bold mb-4">10. Governing Law and Disputes</h2><p class="text-slate-400 leading-relaxed"> These Terms are governed by the laws of the Federal Republic of Germany. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts of Berlin, Germany. If you are a consumer in the EU, you retain any rights granted to you under mandatory consumer protection laws of your country of residence. </p></section><section><h2 class="text-white text-xl font-bold mb-4">11. Changes to These Terms</h2><p class="text-slate-400 leading-relaxed"> We may update these Terms. We will notify you via email at least 14 days before material changes take effect. Continued use of Linkport after the effective date constitutes acceptance of the revised Terms. </p></section><section class="card border-[#0A66C2]/30 bg-[#0A66C2]/5"><h2 class="text-white text-lg font-bold mb-2">Questions about these Terms?</h2><p class="text-slate-400 text-sm mb-3">Contact us at:</p><a href="mailto:privacy@kaxtus.com" class="btn-primary text-sm py-2 px-4 inline-flex"> privacy@kaxtus.com </a></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-BhBytCv7.mjs.map
