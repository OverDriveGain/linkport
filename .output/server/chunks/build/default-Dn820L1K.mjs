import { _ as __nuxt_component_0$1 } from './nuxt-link-Bojkr02_.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
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
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-sm group-hover:bg-[#004182] transition-colors"${_scopeId}> A </div><span class="font-display font-bold text-white text-lg tracking-tight"${_scopeId}>assembr</span>`);
      } else {
        return [
          createVNode("div", { class: "w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-sm group-hover:bg-[#004182] transition-colors" }, " A "),
          createVNode("span", { class: "font-display font-bold text-white text-lg tracking-tight" }, "assembr")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="hidden md:flex items-center gap-8 text-sm font-medium">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#features",
    class: "text-slate-400 hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Features`);
      } else {
        return [
          createTextVNode("Features")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#integrations",
    class: "text-slate-400 hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Integrations`);
      } else {
        return [
          createTextVNode("Integrations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#pricing",
    class: "text-slate-400 hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#faq",
    class: "text-slate-400 hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="flex items-center gap-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: "hidden sm:inline-flex text-sm text-slate-400 hover:text-white transition-colors font-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sign in `);
      } else {
        return [
          createTextVNode(" Sign in ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: "btn-primary text-sm py-2 px-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get started `);
      } else {
        return [
          createTextVNode(" Get started ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-950 border-t border-slate-800 mt-24" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10"><div class="md:col-span-1"><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center font-display font-bold text-white text-sm"> A </div><span class="font-display font-bold text-white text-lg">assembr</span></div><p class="text-slate-400 text-sm leading-relaxed"> One workspace for every community you run \u2014 across every platform you publish on. </p></div><div><h4 class="text-white font-semibold text-sm mb-4">Product</h4><ul class="space-y-2 text-sm text-slate-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#features",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Features`);
          } else {
            return [
              createTextVNode("Features")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#pricing",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard`);
          } else {
            return [
              createTextVNode("Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="text-white font-semibold text-sm mb-4">Company</h4><ul class="space-y-2 text-sm text-slate-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/security",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Security`);
          } else {
            return [
              createTextVNode("Security")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="text-white font-semibold text-sm mb-4">Legal</h4><ul class="space-y-2 text-sm text-slate-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "hover:text-white transition-colors"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookies",
        class: "hover:text-white transition-colors"
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/data-deletion",
        class: "hover:text-white transition-colors"
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
      _push(`</li></ul></div></div><div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Kaxtus. All rights reserved. [Placeholder \u2014 legal entity name TBD]</p><p class="text-xs">Integrates with LinkedIn API and other platforms. Not affiliated with LinkedIn Corporation.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNav = __nuxt_component_0;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Dn820L1K.mjs.map
