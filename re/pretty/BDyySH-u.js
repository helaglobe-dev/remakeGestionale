import {
  V as m,
  aB as E,
  U as P,
  aQ as T,
  W as b,
  B as i,
  a2 as B,
  a4 as j,
  z as u,
  I as y,
  a3 as v,
  _ as k,
  k as f,
  aM as l,
  aP as N,
  b2 as F,
  aZ as M,
  b5 as O,
  a_ as Q,
} from "./CYsiv7Qj.js";
import { f as U } from "./BrCrqdgZ.js";
import { m as W, u as Z } from "./fKsYyVgl.js";
import {
  A as q,
  R as S,
  g as _,
  B as H,
  a as J,
  x as w,
  n as A,
  d as K,
  p as X,
  m as Y,
  o as ee,
  u as ae,
  h as ne,
  l as le,
  C as te,
} from "./B_W9U9Wp.js";
const x = Symbol.for("vuetify:v-expansion-panel"),
  R = m({ ...E(), ...W() }, "VExpansionPanelText"),
  C = P()({
    name: "VExpansionPanelText",
    props: R(),
    setup(e, c) {
      let { slots: n } = c;
      const a = T(x);
      if (!a)
        throw new Error(
          "[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel",
        );
      const { hasContent: s, onAfterLeave: d } = Z(e, a.isSelected);
      return (
        b(() =>
          i(
            U,
            { onAfterLeave: d },
            {
              default: () => [
                B(
                  u(
                    "div",
                    {
                      class: v(["v-expansion-panel-text", e.class]),
                      style: y(e.style),
                    },
                    [
                      n.default &&
                        s.value &&
                        u("div", { class: "v-expansion-panel-text__wrapper" }, [
                          n.default?.(),
                        ]),
                    ],
                  ),
                  [[j, a.isSelected.value]],
                ),
              ],
            },
          ),
        ),
        {}
      );
    },
  }),
  D = m(
    {
      color: String,
      expandIcon: { type: k, default: "$expand" },
      collapseIcon: { type: k, default: "$collapse" },
      hideActions: Boolean,
      focusable: Boolean,
      static: Boolean,
      ripple: { type: [Boolean, Object], default: !1 },
      readonly: Boolean,
      ...E(),
      ...q(),
    },
    "VExpansionPanelTitle",
  ),
  h = P()({
    name: "VExpansionPanelTitle",
    directives: { vRipple: S },
    props: D(),
    setup(e, c) {
      let { slots: n } = c;
      const a = T(x);
      if (!a)
        throw new Error(
          "[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel",
        );
      const { backgroundColorClasses: s, backgroundColorStyles: d } = _(
          () => e.color,
        ),
        { dimensionStyles: r } = H(e),
        p = f(() => ({
          collapseIcon: e.collapseIcon,
          disabled: a.disabled.value,
          expanded: a.isSelected.value,
          expandIcon: e.expandIcon,
          readonly: e.readonly,
        })),
        V = l(() => (a.isSelected.value ? e.collapseIcon : e.expandIcon));
      return (
        b(() =>
          B(
            u(
              "button",
              {
                class: v([
                  "v-expansion-panel-title",
                  {
                    "v-expansion-panel-title--active": a.isSelected.value,
                    "v-expansion-panel-title--focusable": e.focusable,
                    "v-expansion-panel-title--static": e.static,
                  },
                  s.value,
                  e.class,
                ]),
                style: y([d.value, r.value, e.style]),
                type: "button",
                tabindex: a.disabled.value ? -1 : void 0,
                disabled: a.disabled.value,
                "aria-expanded": a.isSelected.value,
                onClick: e.readonly ? void 0 : a.toggle,
              },
              [
                u("span", { class: "v-expansion-panel-title__overlay" }, null),
                n.default?.(p.value),
                !e.hideActions &&
                  i(
                    w,
                    { defaults: { VIcon: { icon: V.value } } },
                    {
                      default: () => [
                        u("span", { class: "v-expansion-panel-title__icon" }, [
                          n.actions?.(p.value) ?? i(J, null, null),
                        ]),
                      ],
                    },
                  ),
              ],
            ),
            [[S, e.ripple]],
          ),
        ),
        {}
      );
    },
  }),
  z = m(
    {
      title: String,
      text: String,
      bgColor: String,
      ...Y(),
      ...X(),
      ...K(),
      ...A(),
      ...D(),
      ...R(),
    },
    "VExpansionPanel",
  ),
  re = P()({
    name: "VExpansionPanel",
    props: z(),
    emits: { "group:selected": (e) => !0 },
    setup(e, c) {
      let { slots: n } = c;
      const a = ee(e, x),
        { backgroundColorClasses: s, backgroundColorStyles: d } = _(
          () => e.bgColor,
        ),
        { elevationClasses: r } = ae(e),
        { roundedClasses: p } = ne(e),
        V = l(() => a?.disabled.value || e.disabled),
        I = f(() =>
          a.group.items.value.reduce(
            (o, t, g) => (
              a.group.selected.value.includes(t.id) && o.push(g), o
            ),
            [],
          ),
        ),
        G = f(() => {
          const o = a.group.items.value.findIndex((t) => t.id === a.id);
          return !a.isSelected.value && I.value.some((t) => t - o === 1);
        }),
        L = f(() => {
          const o = a.group.items.value.findIndex((t) => t.id === a.id);
          return !a.isSelected.value && I.value.some((t) => t - o === -1);
        });
      return (
        N(x, a),
        b(() => {
          const o = !!(n.text || e.text),
            t = !!(n.title || e.title),
            g = h.filterProps(e),
            $ = C.filterProps(e);
          return i(
            e.tag,
            {
              class: v([
                "v-expansion-panel",
                {
                  "v-expansion-panel--active": a.isSelected.value,
                  "v-expansion-panel--before-active": G.value,
                  "v-expansion-panel--after-active": L.value,
                  "v-expansion-panel--disabled": V.value,
                },
                p.value,
                s.value,
                e.class,
              ]),
              style: y([d.value, e.style]),
            },
            {
              default: () => [
                u(
                  "div",
                  { class: v(["v-expansion-panel__shadow", ...r.value]) },
                  null,
                ),
                i(
                  w,
                  {
                    defaults: {
                      VExpansionPanelTitle: { ...g },
                      VExpansionPanelText: { ...$ },
                    },
                  },
                  {
                    default: () => [
                      t &&
                        i(
                          h,
                          { key: "title" },
                          { default: () => [n.title ? n.title() : e.title] },
                        ),
                      o &&
                        i(
                          C,
                          { key: "text" },
                          { default: () => [n.text ? n.text() : e.text] },
                        ),
                      n.default?.(),
                    ],
                  },
                ),
              ],
            },
          );
        }),
        { groupItem: a }
      );
    },
  }),
  se = ["default", "accordion", "inset", "popout"],
  oe = m(
    {
      flat: Boolean,
      ...te(),
      ...Q(z(), [
        "bgColor",
        "collapseIcon",
        "color",
        "eager",
        "elevation",
        "expandIcon",
        "focusable",
        "hideActions",
        "readonly",
        "ripple",
        "rounded",
        "tile",
        "static",
      ]),
      ...O(),
      ...E(),
      ...A(),
      variant: {
        type: String,
        default: "default",
        validator: (e) => se.includes(e),
      },
    },
    "VExpansionPanels",
  ),
  ve = P()({
    name: "VExpansionPanels",
    props: oe(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, c) {
      let { slots: n } = c;
      const { next: a, prev: s } = le(e, x),
        { themeClasses: d } = F(e),
        r = l(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
      return (
        M({
          VExpansionPanel: {
            bgColor: l(() => e.bgColor),
            collapseIcon: l(() => e.collapseIcon),
            color: l(() => e.color),
            eager: l(() => e.eager),
            elevation: l(() => e.elevation),
            expandIcon: l(() => e.expandIcon),
            focusable: l(() => e.focusable),
            hideActions: l(() => e.hideActions),
            readonly: l(() => e.readonly),
            ripple: l(() => e.ripple),
            rounded: l(() => e.rounded),
            static: l(() => e.static),
          },
        }),
        b(() =>
          i(
            e.tag,
            {
              class: v([
                "v-expansion-panels",
                {
                  "v-expansion-panels--flat": e.flat,
                  "v-expansion-panels--tile": e.tile,
                },
                d.value,
                r.value,
                e.class,
              ]),
              style: y(e.style),
            },
            { default: () => [n.default?.({ prev: s, next: a })] },
          ),
        ),
        { next: a, prev: s }
      );
    },
  });
export { ve as V, re as a, h as b, C as c };
