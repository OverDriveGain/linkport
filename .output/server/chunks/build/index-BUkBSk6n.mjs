import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatCard",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    change: {},
    changeLabel: {},
    positive: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><p class="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">${ssrInterpolate(_ctx.label)}</p><p class="text-white text-2xl font-bold font-display mb-2">${ssrInterpolate(_ctx.value)}</p><div class="flex items-center gap-1"><span class="${ssrRenderClass([_ctx.positive ? "text-emerald-400" : "text-red-400", "text-xs font-semibold"])}">${ssrInterpolate(_ctx.change)}</span><span class="text-slate-500 text-xs">${ssrInterpolate(_ctx.changeLabel)}</span></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopPostRow",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors" }, _attrs))}><div class="flex-1 min-w-0"><p class="text-slate-200 text-sm leading-snug line-clamp-2">${ssrInterpolate(_ctx.post.excerpt)}</p><p class="text-slate-500 text-xs mt-1.5">${ssrInterpolate(_ctx.post.date)}</p></div><div class="flex items-center gap-4 flex-shrink-0 text-xs text-slate-400"><div class="text-center"><div class="text-white font-semibold">${ssrInterpolate(_ctx.post.impressions)}</div><div>impressions</div></div><div class="text-center"><div class="text-white font-semibold">${ssrInterpolate(_ctx.post.likes)}</div><div>likes</div></div><div class="text-center"><div class="text-white font-semibold">${ssrInterpolate(_ctx.post.comments)}</div><div>comments</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopPostRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Dashboard \u2014 Linkport",
      description: "Your LinkedIn community stats at a glance.",
      robots: "noindex,nofollow"
    });
    const topPosts = [
      {
        id: 1,
        excerpt: "How we grew our LinkedIn community to 5,000 followers in 3 months without paid ads \u2014 here's the exact playbook...",
        impressions: "12,400",
        likes: "341",
        comments: "87",
        date: "May 22, 2026"
      },
      {
        id: 2,
        excerpt: "Thread: The 7 LinkedIn posting habits that separate 1% creators from the rest. Save this for later.",
        impressions: "9,800",
        likes: "298",
        comments: "54",
        date: "May 18, 2026"
      },
      {
        id: 3,
        excerpt: "Our Q1 community report is live. Key insight: posting at 7am Tuesday beats any other time slot by 2.3x.",
        impressions: "7,200",
        likes: "211",
        comments: "39",
        date: "May 12, 2026"
      },
      {
        id: 4,
        excerpt: "We analyzed 1,000 viral LinkedIn posts so you don't have to. The pattern is surprisingly simple.",
        impressions: "6,100",
        likes: "189",
        comments: "31",
        date: "May 8, 2026"
      },
      {
        id: 5,
        excerpt: "LinkedIn just changed their algorithm (again). Here's what's working right now based on our data.",
        impressions: "5,300",
        likes: "156",
        comments: "28",
        date: "May 3, 2026"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StatCard = _sfc_main$2;
      const _component_TopPostRow = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 p-4 rounded-xl bg-amber-900/30 border border-amber-700/40 flex items-start gap-3"><svg class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div><p class="text-amber-300 font-medium text-sm">This is a placeholder dashboard</p><p class="text-amber-400/70 text-xs mt-1">All numbers below are mock data. Real LinkedIn API integration is planned for Round 3. Connect your LinkedIn account to see live stats.</p></div></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">`);
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Followers",
        value: "4,821",
        change: "+127",
        "change-label": "this month",
        positive: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Profile Views",
        value: "9,340",
        change: "+18%",
        "change-label": "vs last month",
        positive: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Post Impressions",
        value: "41,200",
        change: "+3,100",
        "change-label": "this week",
        positive: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Engagement Rate",
        value: "3.8%",
        change: "-0.2%",
        "change-label": "vs last week",
        positive: false
      }, null, _parent));
      _push(`</div><div class="card"><h2 class="text-white font-semibold text-base mb-4 flex items-center justify-between"> Top Posts \u2014 Last 30 Days <span class="placeholder-badge">Placeholder data</span></h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(topPosts, (post) => {
        _push(ssrRenderComponent(_component_TopPostRow, {
          key: post.id,
          post
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BUkBSk6n.mjs.map
