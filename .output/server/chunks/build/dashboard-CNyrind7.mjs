import { _ as __nuxt_component_0$1 } from './nuxt-link-Bojkr02_.mjs';
import { mergeProps, defineComponent, computed, unref, withCtx, createVNode, createBlock, createTextVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { b as useRoute } from './server.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-64 bg-slate-900 border-r border-slate-800 flex flex-col min-h-screen flex-shrink-0" }, _attrs))}><div class="p-5 border-b border-slate-800">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-xs"${_scopeId}> L </div><span class="font-display font-bold text-white"${_scopeId}>linkport</span>`);
      } else {
        return [
          createVNode("div", { class: "w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-xs" }, " L "),
          createVNode("span", { class: "font-display font-bold text-white" }, "linkport")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="flex-1 p-4 space-y-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: ["flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors", _ctx.$route.path === "/dashboard" ? "bg-[#0A66C2]/20 text-[#378FE9]" : "text-slate-400 hover:text-white hover:bg-slate-800"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${_scopeId}></path></svg> Stats Overview `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5 flex-shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            })
          ])),
          createTextVNode(" Stats Overview ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard/analytics",
    class: ["flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors", _ctx.$route.path === "/dashboard/analytics" ? "bg-[#0A66C2]/20 text-[#378FE9]" : "text-slate-400 hover:text-white hover:bg-slate-800"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"${_scopeId}></path></svg> Analytics `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5 flex-shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            })
          ])),
          createTextVNode(" Analytics ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard/community",
    class: ["flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors", _ctx.$route.path === "/dashboard/community" ? "bg-[#0A66C2]/20 text-[#378FE9]" : "text-slate-400 hover:text-white hover:bg-slate-800"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg> Community `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5 flex-shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            })
          ])),
          createTextVNode(" Community ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard/scheduler",
    class: ["flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors", _ctx.$route.path === "/dashboard/scheduler" ? "bg-[#0A66C2]/20 text-[#378FE9]" : "text-slate-400 hover:text-white hover:bg-slate-800"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> Scheduler `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5 flex-shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            })
          ])),
          createTextVNode(" Scheduler ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="p-4 border-t border-slate-800"><div class="flex items-center gap-3 px-3 py-2"><div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#6366F1] flex items-center justify-center text-white text-xs font-bold"> U </div><div class="flex-1 min-w-0"><p class="text-sm font-medium text-white truncate">User [placeholder]</p><p class="text-xs text-slate-400 truncate">user@example.com</p></div></div></div></aside>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardTopbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const pageTitle = computed(() => {
      var _a;
      const map = {
        "/dashboard": "Stats Overview",
        "/dashboard/analytics": "Analytics",
        "/dashboard/community": "Community",
        "/dashboard/scheduler": "Scheduler"
      };
      return (_a = map[route.path]) != null ? _a : "Dashboard";
    });
    const pageSubtitle = computed(() => {
      var _a;
      const map = {
        "/dashboard": "Your LinkedIn presence at a glance",
        "/dashboard/analytics": "Post performance and audience insights",
        "/dashboard/community": "Manage your community members",
        "/dashboard/scheduler": "Plan and schedule your content"
      };
      return (_a = map[route.path]) != null ? _a : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between" }, _attrs))}><div><h1 class="text-white font-semibold">${ssrInterpolate(unref(pageTitle))}</h1><p class="text-slate-400 text-xs mt-0.5">${ssrInterpolate(unref(pageSubtitle))}</p></div><div class="flex items-center gap-3"><span class="placeholder-badge">Placeholder data \u2014 real LinkedIn API in Round 3</span><div class="w-8 h-8 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center"><svg class="w-4 h-4 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardTopbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardSidebar = __nuxt_component_0;
  const _component_DashboardTopbar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 flex" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardSidebar, null, null, _parent));
  _push(`<div class="flex-1 flex flex-col min-w-0">`);
  _push(ssrRenderComponent(_component_DashboardTopbar, null, null, _parent));
  _push(`<main class="flex-1 p-6 overflow-auto">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-CNyrind7.mjs.map
