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
  __name: "scheduler",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Scheduler \u2014 Assembr Dashboard",
      robots: "noindex,nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ComingSoonPanel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ComingSoonPanel, {
        title: "Post Scheduler",
        description: "Write, preview, and schedule content across your platforms with optimal timing suggestions. Manage drafts and publishing queues \u2014 per platform.",
        "planned-features": ["Drag-and-drop content calendar", "Optimal posting time suggestions per platform", "Draft editor for multi-platform content", "Recurring post templates", "Publish queue with status tracking"]
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/scheduler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=scheduler-9XeU3i0G.mjs.map
