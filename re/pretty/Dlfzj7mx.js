import { a as h, b as x, V as u } from "./fKsYyVgl.js";
import { f as E, x as b } from "./B_W9U9Wp.js";
import {
  U as y,
  V as D,
  Y as w,
  r as A,
  as as F,
  a1 as I,
  W as L,
  $ as S,
  P as l,
  B as f,
} from "./CYsiv7Qj.js";
import { c as B } from "./D3DeQzvF.js";
const W = D(
    {
      fullscreen: Boolean,
      scrollable: Boolean,
      ...S(
        x({
          captureFocus: !0,
          origin: "center center",
          scrollStrategy: "block",
          transition: { component: B },
          zIndex: 2400,
          retainFocus: !0,
        }),
        ["disableInitialFocus"],
      ),
    },
    "VDialog",
  ),
  U = y()({
    name: "VDialog",
    props: W(),
    emits: {
      "update:modelValue": (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(e, d) {
      let { emit: i, slots: s } = d;
      const r = w(e, "modelValue"),
        { scopeId: m } = h(),
        t = A();
      function v() {
        i("afterEnter"),
          (e.scrim || e.retainFocus) &&
            t.value?.contentEl &&
            !t.value.contentEl.contains(document.activeElement) &&
            t.value.contentEl.focus({ preventScroll: !0 });
      }
      function g() {
        i("afterLeave");
      }
      return (
        F(r, async (n) => {
          n || (await I(), t.value.activatorEl?.focus({ preventScroll: !0 }));
        }),
        L(() => {
          const n = u.filterProps(e),
            V = l({ "aria-haspopup": "dialog" }, e.activatorProps),
            P = l({ tabindex: -1 }, e.contentProps);
          return f(
            u,
            l(
              {
                ref: t,
                class: [
                  "v-dialog",
                  {
                    "v-dialog--fullscreen": e.fullscreen,
                    "v-dialog--scrollable": e.scrollable,
                  },
                  e.class,
                ],
                style: e.style,
              },
              n,
              {
                modelValue: r.value,
                "onUpdate:modelValue": (a) => (r.value = a),
                "aria-modal": "true",
                activatorProps: V,
                contentProps: P,
                height: e.fullscreen ? void 0 : e.height,
                width: e.fullscreen ? void 0 : e.width,
                maxHeight: e.fullscreen ? void 0 : e.maxHeight,
                maxWidth: e.fullscreen ? void 0 : e.maxWidth,
                role: "dialog",
                onAfterEnter: v,
                onAfterLeave: g,
              },
              m,
            ),
            {
              activator: s.activator,
              default: function () {
                for (
                  var a = arguments.length, c = new Array(a), o = 0;
                  o < a;
                  o++
                )
                  c[o] = arguments[o];
                return f(
                  b,
                  { root: "VDialog" },
                  { default: () => [s.default?.(...c)] },
                );
              },
            },
          );
        }),
        E({}, t)
      );
    },
  });
export { U as V };
