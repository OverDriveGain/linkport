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
  __name: "data-deletion",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Data Deletion Request \u2014 Assembr",
      description: "How to request deletion of all personal data that Assembr holds about you, across all connected platforms. GDPR right to erasure. Contact privacy@kaxtus.com.",
      robots: "index,follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16" }, _attrs))}><div class="bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 py-16 text-center px-4"><p class="section-label mb-3">Your rights</p><h1 class="font-display text-4xl font-bold text-white mb-3">Data Deletion Request</h1><p class="text-slate-400 max-w-xl mx-auto">How to request deletion of all personal data Assembr holds about you.</p></div><div class="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-10"><section><h2 class="text-white text-xl font-bold mb-4">Your right to erasure</h2><p class="text-slate-400 leading-relaxed"> Under the General Data Protection Regulation (GDPR), you have the right to request deletion of all personal data that Assembr holds about you. This includes your profile data from any connected platform (LinkedIn, Slack, Discord, X, Reddit, or others), usage history, and any analytics data associated with your account. </p><p class="text-slate-400 leading-relaxed mt-4"> This page also serves as Assembr&#39;s required <strong class="text-slate-300">data deletion callback URL</strong> for platform API review processes \u2014 including the LinkedIn API app review \u2014 in accordance with each platform&#39;s data deletion requirements for OAuth applications. </p></section><section><h2 class="text-white text-xl font-bold mb-4">What gets deleted</h2><ul class="space-y-3 text-slate-400 text-sm"><li class="flex items-start gap-3"><svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Your profile information from all connected platforms (name, profile photo URL, headline) </li><li class="flex items-start gap-3"><svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Your stored analytics data from all connected platforms (follower counts, impression history, engagement metrics) </li><li class="flex items-start gap-3"><svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Your OAuth tokens and connected account credentials </li><li class="flex items-start gap-3"><svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Any scheduled posts or drafts saved in Assembr, across all platforms </li><li class="flex items-start gap-3"><svg class="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Your account record and all associated metadata </li></ul><p class="text-slate-400 text-sm mt-4"> Aggregated, anonymized statistics that cannot be linked back to you may be retained for service improvement purposes. </p></section><section><h2 class="text-white text-xl font-bold mb-4">How to request deletion</h2><div class="card border-[#0A66C2]/30 bg-[#0A66C2]/5 text-center"><div class="w-12 h-12 rounded-xl bg-[#0A66C2]/20 flex items-center justify-center mx-auto mb-4"><svg class="w-6 h-6 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><h3 class="text-white font-semibold text-lg mb-2">Send a deletion request by email</h3><p class="text-slate-400 text-sm mb-5 leading-relaxed"> Email us with the subject line <strong class="text-slate-300">&quot;Data Deletion Request&quot;</strong> and include the email address or platform profile URL (LinkedIn, Slack, Discord, X, or Reddit) associated with your Assembr account. </p><a href="mailto:privacy@kaxtus.com?subject=Data%20Deletion%20Request" class="btn-primary py-3 px-6"> privacy@kaxtus.com </a><p class="text-slate-500 text-xs mt-4">We will confirm receipt within 48 hours and complete deletion within 30 days.</p></div></section><section><h2 class="text-white text-xl font-bold mb-4">What happens after deletion</h2><p class="text-slate-400 leading-relaxed"> Once deletion is complete, you will receive a confirmation email. Your Assembr account will be deactivated and all associated personal data removed from our systems and backups within 30 days. This action is irreversible \u2014 if you wish to use Assembr again, you will need to create a new account. </p><p class="text-slate-400 leading-relaxed mt-4"> Note: Deleting your data from Assembr does not affect your accounts on any connected platform (LinkedIn, Slack, Discord, X, Reddit, or others) or any content you have posted there. To manage your data directly with each platform, visit that platform&#39;s own privacy settings. </p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data-deletion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=data-deletion-D1rF5t27.mjs.map
