import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComingSoonPanel",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    plannedFeatures: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-[400px] py-16 text-center" }, _attrs))}><div class="w-16 h-16 rounded-2xl bg-[#0A66C2]/15 flex items-center justify-center mb-6"><svg class="w-8 h-8 text-[#378FE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><div class="placeholder-badge mb-4">Coming soon \u2014 Round 3 implementation</div><h2 class="text-white font-display font-bold text-2xl mb-3">${ssrInterpolate(_ctx.title)}</h2><p class="text-slate-400 text-base max-w-md mb-8 leading-relaxed">${ssrInterpolate(_ctx.description)}</p><div class="card max-w-md w-full text-left"><h3 class="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-wide">Planned features</h3><ul class="space-y-2"><!--[-->`);
      ssrRenderList(_ctx.plannedFeatures, (feature) => {
        _push(`<li class="flex items-center gap-2 text-sm text-slate-400"><div class="w-1.5 h-1.5 rounded-full bg-[#0A66C2] flex-shrink-0"></div> ${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComingSoonPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ComingSoonPanel-BIBT2JBU.mjs.map
