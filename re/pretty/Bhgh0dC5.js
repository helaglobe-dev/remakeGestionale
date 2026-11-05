import {
  t as B,
  u as P,
  h as I,
  v as N,
  w as x,
  a as w,
  x as O,
  b as _,
  y as M,
  n as T,
  d as A,
  m as F,
  z as R,
} from "./B_W9U9Wp.js";
import {
  U as j,
  V as D,
  Y as E,
  b2 as U,
  W,
  B as n,
  z as u,
  P as H,
  A as Y,
  I as $,
  a3 as q,
  ay as l,
  b5 as G,
  aB as J,
} from "./CYsiv7Qj.js";
import { u as K, m as L } from "./DzPBUvYZ.js";
const Q = D(
    {
      active: { type: Boolean, default: void 0 },
      activeColor: String,
      activeIcon: [String, Function, Object],
      activeVariant: String,
      baseVariant: { type: String, default: "tonal" },
      disabled: Boolean,
      height: [Number, String],
      width: [Number, String],
      hideOverlay: Boolean,
      icon: [String, Function, Object],
      iconColor: String,
      loading: Boolean,
      opacity: [Number, String],
      readonly: Boolean,
      rotate: [Number, String],
      size: { type: [Number, String], default: "default" },
      sizes: {
        type: Array,
        default: () => [
          ["x-small", 16],
          ["small", 24],
          ["default", 40],
          ["large", 48],
          ["x-large", 56],
        ],
      },
      text: { type: [String, Number, Boolean], default: void 0 },
      ...R(),
      ...J(),
      ...F(),
      ...L(),
      ...A(),
      ...T({ tag: "button" }),
      ...G(),
      ...M({ variant: "flat" }),
    },
    "VIconBtn",
  ),
  ae = j()({
    name: "VIconBtn",
    props: Q(),
    emits: { "update:active": (e) => !0 },
    setup(e, v) {
      let { attrs: b, slots: i } = v;
      const a = E(e, "active"),
        { themeClasses: m } = U(e),
        { borderClasses: g } = B(e),
        { elevationClasses: f } = P(e),
        { roundedClasses: y } = I(e),
        {
          colorClasses: S,
          colorStyles: h,
          variantClasses: z,
        } = N(() => ({
          color: (() => {
            if (!e.disabled)
              return a.value
                ? (e.activeColor ?? e.color ?? "surface-variant")
                : e.color;
          })(),
          variant:
            a.value === void 0
              ? e.variant
              : a.value
                ? (e.activeVariant ?? e.variant)
                : (e.baseVariant ?? e.variant),
        })),
        s = new Map(e.sizes);
      function V() {
        e.disabled ||
          e.readonly ||
          a.value === void 0 ||
          (e.tag === "a" && b.href) ||
          (a.value = !a.value);
      }
      return (
        W(() => {
          const o = a.value ? (e.activeIcon ?? e.icon) : e.icon,
            t = e.size,
            c = s.has(t) ? s.get(t) : t,
            C = e.height ?? c,
            k = e.width ?? c,
            { iconSize: r } = K(e, () => new Map(e.iconSizes).get(t)),
            d = {
              icon: o,
              size: r.value,
              color: e.iconColor,
              opacity: e.opacity,
            };
          return n(
            e.tag,
            {
              type: e.tag === "button" ? "button" : void 0,
              class: q([
                {
                  "v-icon-btn": !0,
                  "v-icon-btn--active": a.value,
                  "v-icon-btn--disabled": e.disabled,
                  "v-icon-btn--loading": e.loading,
                  "v-icon-btn--readonly": e.readonly,
                  [`v-icon-btn--${e.size}`]: !0,
                },
                m.value,
                S.value,
                g.value,
                f.value,
                y.value,
                z.value,
                e.class,
              ]),
              style: $([
                {
                  "--v-icon-btn-rotate": l(e.rotate, "deg"),
                  "--v-icon-btn-height": l(C),
                  "--v-icon-btn-width": l(k),
                },
                h.value,
                e.style,
              ]),
              tabindex: e.disabled || e.readonly ? -1 : 0,
              onClick: V,
            },
            {
              default: () => [
                x(!e.hideOverlay, "v-icon-btn"),
                u(
                  "div",
                  { class: "v-icon-btn__content", "data-no-activator": "" },
                  [
                    !i.default && o
                      ? n(w, H({ key: "content-icon" }, d), null)
                      : n(
                          O,
                          {
                            key: "content-defaults",
                            disabled: !o,
                            defaults: { VIcon: { ...d } },
                          },
                          { default: () => i.default?.() ?? Y(e.text) },
                        ),
                  ],
                ),
                !!e.loading &&
                  u("span", { key: "loader", class: "v-icon-btn__loader" }, [
                    i.loader?.() ??
                      n(
                        _,
                        {
                          color:
                            typeof e.loading == "boolean" ? void 0 : e.loading,
                          indeterminate: "disable-shrink",
                          width: "2",
                          size: r.value,
                        },
                        null,
                      ),
                  ]),
              ],
            },
          );
        }),
        {}
      );
    },
  });
export { ae as V };
