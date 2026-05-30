import { _ as _sfc_main$1 } from './ComingSoonPanel-BIBT2JBU.mjs';
import { defineComponent, useSSRContext } from 'vue';
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
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Analytics \u2014 Assembr Dashboard",
      robots: "noindex,nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ComingSoonPanel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ComingSoonPanel, {
        title: "Analytics",
        description: "Detailed post performance charts, reach breakdowns, and engagement trends by content type \u2014 across all your connected platforms.",
        "planned-features": ["Impressions over time", "Engagement rate by post type", "Follower growth chart", "Top-performing content tags", "Audience reach vs. organic reach split"]
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=analytics-D85vb556.mjs.map
