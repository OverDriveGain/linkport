import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Security \u2014 Assembr",
      description: "How Assembr protects your data and how to responsibly disclose security vulnerabilities.",
      robots: "index,follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16" }, _attrs))}><div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4"><p class="section-label mb-3">Trust &amp; Safety</p><h1 class="font-display text-4xl font-bold text-white mb-3">Security</h1><p class="text-slate-400 max-w-xl mx-auto">How we protect your data and how to report security vulnerabilities.</p></div><div class="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-10"><section><h2 class="text-white text-xl font-bold mb-4">Our security practices</h2><div class="space-y-4"><div class="flex items-start gap-4"><div class="w-8 h-8 rounded-lg bg-[#0A66C2]/15 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div><div><h3 class="text-white font-semibold mb-1">Encryption in transit and at rest</h3><p class="text-slate-400 text-sm leading-relaxed">All data transmitted between your browser and Assembr is encrypted using TLS 1.3. Data stored on our servers is encrypted at rest using AES-256.</p></div></div><div class="flex items-start gap-4"><div class="w-8 h-8 rounded-lg bg-[#0A66C2]/15 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><div><h3 class="text-white font-semibold mb-1">OAuth \u2014 no password storage</h3><p class="text-slate-400 text-sm leading-relaxed">Assembr uses each platform&#39;s OAuth 2.0 \u2014 we never see or store your passwords. OAuth tokens from LinkedIn and all future integrations are stored encrypted and rotated regularly.</p></div></div><div class="flex items-start gap-4"><div class="w-8 h-8 rounded-lg bg-[#0A66C2]/15 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><div><h3 class="text-white font-semibold mb-1">Infrastructure in Germany</h3><p class="text-slate-400 text-sm leading-relaxed">Our servers are located in Germany (Berlin region), subject to GDPR and German data protection law. [Hosting provider: Hetzner \u2014 Placeholder, confirm before launch].</p></div></div><div class="flex items-start gap-4"><div class="w-8 h-8 rounded-lg bg-[#0A66C2]/15 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg></div><div><h3 class="text-white font-semibold mb-1">Principle of minimal access</h3><p class="text-slate-400 text-sm leading-relaxed">Assembr requests only the API scopes strictly required per platform to display your analytics and schedule your content. For LinkedIn specifically, we do not request write access beyond post scheduling. Scopes are reviewed and minimized for each platform integration.</p></div></div></div></section><section><h2 class="text-white text-xl font-bold mb-4">Responsible disclosure</h2><p class="text-slate-400 leading-relaxed mb-4"> If you discover a security vulnerability in Assembr, we ask that you disclose it to us responsibly. Please do not publicly disclose the vulnerability until we have had a reasonable opportunity to investigate and address it. </p><p class="text-slate-400 leading-relaxed mb-6"> We commit to acknowledging your report within <strong class="text-slate-300">72 hours</strong> and providing a resolution timeline within <strong class="text-slate-300">14 days</strong> for critical issues. </p><div class="card border-[#0A66C2]/30 bg-[#0A66C2]/5"><h3 class="text-white font-semibold mb-3">Report a security issue</h3><p class="text-slate-400 text-sm mb-4">Please include: a description of the vulnerability, steps to reproduce, affected component, and your contact information.</p><a href="mailto:security@kaxtus.com" class="btn-primary text-sm py-2 px-4 inline-flex"> security@kaxtus.com </a><p class="text-slate-500 text-xs mt-3">PGP key available on request. [Key fingerprint placeholder \u2014 TBD]</p></div></section><section><h2 class="text-white text-xl font-bold mb-4">Bug bounty</h2><p class="text-slate-400 leading-relaxed"> Assembr does not currently operate a formal bug bounty program. We appreciate responsible disclosure and will publicly acknowledge researchers who report valid vulnerabilities (with their permission). [Bug bounty program placeholder \u2014 may be introduced post-launch]. </p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=security-DnHkv7uK.mjs.map
