import { d as X, a as k, c as Y, m as Z } from "./BrCrqdgZ.js";
import { F as $, x as j, a as q, L as G, b as J, f as K } from "./B_W9U9Wp.js";
import { b as g, m as ee } from "./Cv1q1CuH.js";
import {
  U as ae,
  V as te,
  Y as w,
  r as C,
  cm as le,
  aM as y,
  X as se,
  W as oe,
  Z as ne,
  B as l,
  P as b,
  z as n,
  I as S,
  a3 as P,
  Q as ie,
} from "./CYsiv7Qj.js";
const re = te(
    {
      indeterminate: Boolean,
      inset: Boolean,
      flat: Boolean,
      loading: { type: [Boolean, String], default: !1 },
      ...Z(),
      ...ee(),
    },
    "VSwitch",
  ),
  me = ae()({
    name: "VSwitch",
    inheritAttrs: !1,
    props: re(),
    emits: {
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:indeterminate": (e) => !0,
    },
    setup(e, _) {
      let { attrs: I, slots: a } = _;
      const i = w(e, "indeterminate"),
        s = w(e, "modelValue"),
        { loaderClasses: A } = $(e),
        { isFocused: x, focus: B, blur: F } = X(e),
        m = C(),
        v = C(),
        h = le && window.matchMedia("(forced-colors: active)").matches,
        z = y(() =>
          typeof e.loading == "string" && e.loading !== ""
            ? e.loading
            : e.color,
        ),
        M = se(),
        R = y(() => e.id || `switch-${M}`);
      function p() {
        i.value && (i.value = !1);
      }
      function D(r) {
        r.stopPropagation(), r.preventDefault(), m.value?.input?.click();
      }
      return (
        oe(() => {
          const [r, T] = ne(I),
            U = k.filterProps(e),
            L = g.filterProps(e);
          return l(
            k,
            b(
              {
                ref: v,
                class: [
                  "v-switch",
                  { "v-switch--flat": e.flat },
                  { "v-switch--inset": e.inset },
                  { "v-switch--indeterminate": i.value },
                  A.value,
                  e.class,
                ],
              },
              r,
              U,
              {
                modelValue: s.value,
                "onUpdate:modelValue": (u) => (s.value = u),
                id: R.value,
                focused: x.value,
                style: e.style,
              },
            ),
            {
              ...a,
              default: (u) => {
                let {
                  id: N,
                  messagesId: E,
                  isDisabled: H,
                  isReadonly: O,
                  isValid: V,
                } = u;
                const c = { model: s, isValid: V };
                return l(
                  g,
                  b(
                    { ref: m },
                    L,
                    {
                      modelValue: s.value,
                      "onUpdate:modelValue": [(o) => (s.value = o), p],
                      id: N.value,
                      "aria-describedby": E.value,
                      type: "checkbox",
                      "aria-checked": i.value ? "mixed" : void 0,
                      disabled: H.value,
                      readonly: O.value,
                      onFocus: B,
                      onBlur: F,
                    },
                    T,
                  ),
                  {
                    ...a,
                    default: (o) => {
                      let {
                        backgroundColorClasses: d,
                        backgroundColorStyles: t,
                      } = o;
                      return n(
                        "div",
                        {
                          class: P(["v-switch__track", h ? void 0 : d.value]),
                          style: S(t.value),
                          onClick: D,
                        },
                        [
                          a["track-true"] &&
                            n(
                              "div",
                              { key: "prepend", class: "v-switch__track-true" },
                              [a["track-true"](c)],
                            ),
                          a["track-false"] &&
                            n(
                              "div",
                              { key: "append", class: "v-switch__track-false" },
                              [a["track-false"](c)],
                            ),
                        ],
                      );
                    },
                    input: (o) => {
                      let {
                        inputNode: d,
                        icon: t,
                        backgroundColorClasses: Q,
                        backgroundColorStyles: W,
                      } = o;
                      return n(ie, null, [
                        d,
                        n(
                          "div",
                          {
                            class: P([
                              "v-switch__thumb",
                              { "v-switch__thumb--filled": t || e.loading },
                              e.inset || h ? void 0 : Q.value,
                            ]),
                            style: S(e.inset ? void 0 : W.value),
                          },
                          [
                            a.thumb
                              ? l(
                                  j,
                                  {
                                    defaults: {
                                      VIcon: { icon: t, size: "x-small" },
                                    },
                                  },
                                  {
                                    default: () => [a.thumb({ ...c, icon: t })],
                                  },
                                )
                              : l(Y, null, {
                                  default: () => [
                                    e.loading
                                      ? l(
                                          G,
                                          {
                                            name: "v-switch",
                                            active: !0,
                                            color:
                                              V.value === !1 ? void 0 : z.value,
                                          },
                                          {
                                            default: (f) =>
                                              a.loader
                                                ? a.loader(f)
                                                : l(
                                                    J,
                                                    {
                                                      active: f.isActive,
                                                      color: f.color,
                                                      indeterminate: !0,
                                                      size: "16",
                                                      width: "2",
                                                    },
                                                    null,
                                                  ),
                                          },
                                        )
                                      : t &&
                                        l(
                                          q,
                                          {
                                            key: String(t),
                                            icon: t,
                                            size: "x-small",
                                          },
                                          null,
                                        ),
                                  ],
                                }),
                          ],
                        ),
                      ]);
                    },
                  },
                );
              },
            },
          );
        }),
        K({}, v)
      );
    },
  });
export { me as V };
