import { k as D } from "./BrCrqdgZ.js";
import {
  v as L,
  q as w,
  B as F,
  u as R,
  _ as E,
  $ as M,
  h as N,
  e as O,
  w as j,
  a as q,
  x as c,
  V as J,
  y as U,
  n as Y,
  d as p,
  a0 as G,
  a1 as H,
  m as K,
  A as Q,
  r as W,
} from "./B_W9U9Wp.js";
import {
  U as X,
  V as Z,
  Y as ee,
  aM as u,
  b2 as ae,
  aJ as te,
  B as t,
  z as l,
  I as d,
  a3 as v,
  P as m,
  b5 as le,
  aB as se,
  _ as oe,
} from "./CYsiv7Qj.js";
import { u as ne, m as ie } from "./DzPBUvYZ.js";
const re = D("v-alert-title"),
  ce = ["success", "info", "warning", "error"],
  ue = Z(
    {
      border: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" ||
          ["top", "end", "bottom", "start"].includes(e),
      },
      borderColor: String,
      closable: Boolean,
      closeIcon: { type: oe, default: "$close" },
      closeLabel: { type: String, default: "$vuetify.close" },
      icon: { type: [Boolean, String, Function, Object], default: null },
      modelValue: { type: Boolean, default: !0 },
      prominent: Boolean,
      title: String,
      text: String,
      type: { type: String, validator: (e) => ce.includes(e) },
      ...se(),
      ...W(),
      ...Q(),
      ...K(),
      ...ie(),
      ...H(),
      ...G(),
      ...p(),
      ...Y(),
      ...le(),
      ...U({ variant: "flat" }),
    },
    "VAlert",
  ),
  fe = X()({
    name: "VAlert",
    props: ue(),
    emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0 },
    setup(e, y) {
      let { emit: f, slots: a } = y;
      const n = ee(e, "modelValue"),
        s = u(() => {
          if (e.icon !== !1) return e.type ? (e.icon ?? `$${e.type}`) : e.icon;
        }),
        { iconSize: k } = ne(e, () => (e.prominent ? 44 : void 0)),
        { themeClasses: b } = ae(e),
        {
          colorClasses: P,
          colorStyles: V,
          variantClasses: C,
        } = L(() => ({ color: e.color ?? e.type, variant: e.variant })),
        { densityClasses: S } = w(e),
        { dimensionStyles: g } = F(e),
        { elevationClasses: x } = R(e),
        { locationStyles: _ } = E(e),
        { positionClasses: B } = M(e),
        { roundedClasses: z } = N(e),
        { textColorClasses: I, textColorStyles: h } = O(() => e.borderColor),
        { t: A } = te(),
        i = u(() => ({
          "aria-label": A(e.closeLabel),
          onClick(o) {
            (n.value = !1), f("click:close", o);
          },
        }));
      return () => {
        const o = !!(a.prepend || s.value),
          T = !!(a.title || e.title),
          $ = !!(a.close || e.closable),
          r = {
            density: e.density,
            icon: s.value,
            size: e.iconSize || e.prominent ? k.value : void 0,
          };
        return (
          n.value &&
          t(
            e.tag,
            {
              class: v([
                "v-alert",
                e.border && {
                  "v-alert--border": !!e.border,
                  [`v-alert--border-${e.border === !0 ? "start" : e.border}`]:
                    !0,
                },
                { "v-alert--prominent": e.prominent },
                b.value,
                P.value,
                S.value,
                x.value,
                B.value,
                z.value,
                C.value,
                e.class,
              ]),
              style: d([V.value, g.value, _.value, e.style]),
              role: "alert",
            },
            {
              default: () => [
                j(!1, "v-alert"),
                e.border &&
                  l(
                    "div",
                    {
                      key: "border",
                      class: v(["v-alert__border", I.value]),
                      style: d(h.value),
                    },
                    null,
                  ),
                o &&
                  l("div", { key: "prepend", class: "v-alert__prepend" }, [
                    a.prepend
                      ? t(
                          c,
                          {
                            key: "prepend-defaults",
                            disabled: !s.value,
                            defaults: { VIcon: { ...r } },
                          },
                          a.prepend,
                        )
                      : t(q, m({ key: "prepend-icon" }, r), null),
                  ]),
                l("div", { class: "v-alert__content" }, [
                  T &&
                    t(
                      re,
                      { key: "title" },
                      { default: () => [a.title?.() ?? e.title] },
                    ),
                  a.text?.() ?? e.text,
                  a.default?.(),
                ]),
                a.append &&
                  l("div", { key: "append", class: "v-alert__append" }, [
                    a.append(),
                  ]),
                $ &&
                  l("div", { key: "close", class: "v-alert__close" }, [
                    a.close
                      ? t(
                          c,
                          {
                            key: "close-defaults",
                            defaults: {
                              VBtn: {
                                icon: e.closeIcon,
                                size: "x-small",
                                variant: "text",
                              },
                            },
                          },
                          { default: () => [a.close?.({ props: i.value })] },
                        )
                      : t(
                          J,
                          m(
                            {
                              key: "close-btn",
                              icon: e.closeIcon,
                              size: "x-small",
                              variant: "text",
                            },
                            i.value,
                          ),
                          null,
                        ),
                  ]),
              ],
            },
          )
        );
      };
    },
  });
export { fe as V };
