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
  __name: "community",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Community \u2014 Assembr Dashboard",
      robots: "noindex,nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ComingSoonPanel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ComingSoonPanel, {
        title: "Community",
        description: "A unified list of your community members across all connected platforms, their seniority, industry, and engagement history.",
        "planned-features": ["Follower list with filters (industry, seniority, location)", "Engagement history per follower", "Community health score", "Churn detection", "Top advocates leaderboard"]
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/community.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=community-C1i3NIgx.mjs.map
