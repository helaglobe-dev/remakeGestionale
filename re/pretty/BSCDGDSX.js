import { a as S, V as c, b as h } from "./fKsYyVgl.js";
import { f as O } from "./B_W9U9Wp.js";
import {
  U as x,
  V as F,
  Y as I,
  X as T,
  aM as u,
  r as k,
  k as i,
  P as d,
  W as p,
  B,
  $ as R,
} from "./CYsiv7Qj.js";
const w = F(
    {
      id: String,
      interactive: Boolean,
      text: String,
      ...R(
        h({
          closeOnBack: !1,
          location: "end",
          locationStrategy: "connected",
          eager: !0,
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: "auto",
          scrim: !1,
          scrollStrategy: "reposition",
          transition: null,
        }),
        ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"],
      ),
    },
    "VTooltip",
  ),
  U = x()({
    name: "VTooltip",
    props: w(),
    emits: { "update:modelValue": (t) => !0 },
    setup(t, v) {
      let { slots: n } = v;
      const a = I(t, "modelValue"),
        { scopeId: m } = S(),
        f = T(),
        r = u(() => t.id || `v-tooltip-${f}`),
        l = k(),
        g = i(() =>
          t.location.split(" ").length > 1
            ? t.location
            : t.location + " center",
        ),
        V = i(() =>
          t.origin === "auto" ||
          t.origin === "overlap" ||
          t.origin.split(" ").length > 1 ||
          t.location.split(" ").length > 1
            ? t.origin
            : t.origin + " center",
        ),
        P = u(() =>
          t.transition != null
            ? t.transition
            : a.value
              ? "scale-transition"
              : "fade-transition",
        ),
        b = i(() => d({ "aria-describedby": r.value }, t.activatorProps));
      return (
        p(() => {
          const y = c.filterProps(t);
          return B(
            c,
            d(
              {
                ref: l,
                class: [
                  "v-tooltip",
                  { "v-tooltip--interactive": t.interactive },
                  t.class,
                ],
                style: t.style,
                id: r.value,
              },
              y,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (e) => (a.value = e),
                transition: P.value,
                absolute: !0,
                location: g.value,
                origin: V.value,
                role: "tooltip",
                activatorProps: b.value,
                _disableGlobalStack: !0,
              },
              m,
            ),
            {
              activator: n.activator,
              default: function () {
                for (
                  var e = arguments.length, s = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  s[o] = arguments[o];
                return n.default?.(...s) ?? t.text;
              },
            },
          );
        }),
        O({}, l)
      );
    },
  });
export { U as V };
