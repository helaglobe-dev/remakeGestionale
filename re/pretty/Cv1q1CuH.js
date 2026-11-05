import {
  b as gl,
  h as Le,
  i as yl,
  u as bl,
  j as pl,
  g as kl,
  V as Ke,
} from "./BrCrqdgZ.js";
import {
  V as H,
  b5 as ze,
  aB as he,
  _ as q,
  U as oe,
  Y as me,
  X as Me,
  aM as x,
  aZ as Xe,
  W as ue,
  z as I,
  I as xe,
  a3 as Z,
  aP as Sl,
  aN as Oe,
  s as O,
  r as ve,
  Z as Cl,
  P as L,
  B as V,
  a2 as Fe,
  Q as ne,
  aQ as Vl,
  k as F,
  bA as ye,
  a1 as De,
  bT as Be,
  $ as Ye,
  bN as Il,
  aL as wl,
  bI as Ze,
  az as Ve,
  bW as xl,
  b3 as Ie,
  as as ae,
  bX as Pl,
  b2 as Je,
  aJ as qe,
  a4 as Al,
  A as Tl,
  bP as He,
  bF as _e,
  bY as Fl,
  ax as Pe,
  bQ as el,
  bz as Bl,
  bE as _l,
  o as Rl,
  ay as Ce,
  bo as zl,
  bZ as Ml,
  bR as Ol,
  D as Dl,
  bS as $e,
  L as be,
} from "./CYsiv7Qj.js";
import {
  r as ll,
  i as ke,
  R as we,
  a as te,
  q as tl,
  e as El,
  g as Ll,
  C as nl,
  n as Ee,
  l as al,
  y as ol,
  t as Kl,
  u as Hl,
  h as $l,
  I as Gl,
  o as Ge,
  J as Ul,
  v as Nl,
  w as Wl,
  x as pe,
  D as jl,
  K as Ql,
  d as Xl,
  p as Yl,
  m as Zl,
  z as Jl,
  B as ql,
  A as et,
  f as lt,
  G as tt,
} from "./B_W9U9Wp.js";
import {
  u as nt,
  m as at,
  V as ot,
  a as st,
  b as Ue,
  d as it,
} from "./CxBYvc7u.js";
import { b as Re, c as ut, a as rt } from "./D3DeQzvF.js";
import { g as ct } from "./fKsYyVgl.js";
const sl = Symbol.for("vuetify:selection-control-group"),
  il = H(
    {
      color: String,
      disabled: { type: Boolean, default: null },
      defaultsTarget: String,
      error: Boolean,
      id: String,
      inline: Boolean,
      falseIcon: q,
      trueIcon: q,
      ripple: { type: [Boolean, Object], default: !0 },
      multiple: { type: Boolean, default: null },
      name: String,
      readonly: { type: Boolean, default: null },
      modelValue: null,
      type: String,
      valueComparator: { type: Function, default: ke },
      ...he(),
      ...ll(),
      ...ze(),
    },
    "SelectionControlGroup",
  ),
  dt = H(
    { ...il({ defaultsTarget: "VSelectionControl" }) },
    "VSelectionControlGroup",
  ),
  $t = oe()({
    name: "VSelectionControlGroup",
    props: dt(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: a } = n;
      const l = me(e, "modelValue"),
        t = Me(),
        d = x(() => e.id || `v-selection-control-group-${t}`),
        u = x(() => e.name || d.value),
        s = new Set();
      return (
        Sl(sl, {
          modelValue: l,
          forceUpdate: () => {
            s.forEach((i) => i());
          },
          onForceUpdate: (i) => {
            s.add(i),
              Oe(() => {
                s.delete(i);
              });
          },
        }),
        Xe({
          [e.defaultsTarget]: {
            color: x(() => e.color),
            disabled: x(() => e.disabled),
            density: x(() => e.density),
            error: x(() => e.error),
            inline: x(() => e.inline),
            modelValue: l,
            multiple: x(
              () =>
                !!e.multiple || (e.multiple == null && Array.isArray(l.value)),
            ),
            name: u,
            falseIcon: x(() => e.falseIcon),
            trueIcon: x(() => e.trueIcon),
            readonly: x(() => e.readonly),
            ripple: x(() => e.ripple),
            type: x(() => e.type),
            valueComparator: x(() => e.valueComparator),
          },
        }),
        ue(() =>
          I(
            "div",
            {
              class: Z([
                "v-selection-control-group",
                { "v-selection-control-group--inline": e.inline },
                e.class,
              ]),
              style: xe(e.style),
              role: e.type === "radio" ? "radiogroup" : void 0,
            },
            [a.default?.()],
          ),
        ),
        {}
      );
    },
  }),
  ul = H(
    {
      label: String,
      baseColor: String,
      trueValue: null,
      falseValue: null,
      value: null,
      ...he(),
      ...il(),
    },
    "VSelectionControl",
  );
function ft(e) {
  const n = Vl(sl, void 0),
    { densityClasses: a } = tl(e),
    l = me(e, "modelValue"),
    t = F(() =>
      e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0,
    ),
    d = F(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
    u = F(() => !!e.multiple || (e.multiple == null && Array.isArray(l.value))),
    s = F({
      get() {
        const f = n ? n.modelValue.value : l.value;
        return u.value
          ? ye(f).some((p) => e.valueComparator(p, t.value))
          : e.valueComparator(f, t.value);
      },
      set(f) {
        if (e.readonly) return;
        const p = f ? t.value : d.value;
        let h = p;
        u.value &&
          (h = f
            ? [...ye(l.value), p]
            : ye(l.value).filter((C) => !e.valueComparator(C, t.value))),
          n ? (n.modelValue.value = h) : (l.value = h);
      },
    }),
    { textColorClasses: i, textColorStyles: v } = El(() => {
      if (!(e.error || e.disabled)) return s.value ? e.color : e.baseColor;
    }),
    { backgroundColorClasses: m, backgroundColorStyles: b } = Ll(() =>
      s.value && !e.error && !e.disabled ? e.color : e.baseColor,
    ),
    g = F(() => (s.value ? e.trueIcon : e.falseIcon));
  return {
    group: n,
    densityClasses: a,
    trueValue: t,
    falseValue: d,
    model: s,
    textColorClasses: i,
    textColorStyles: v,
    backgroundColorClasses: m,
    backgroundColorStyles: b,
    icon: g,
  };
}
const Ne = oe()({
    name: "VSelectionControl",
    directives: { vRipple: we },
    inheritAttrs: !1,
    props: ul(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { attrs: a, slots: l } = n;
      const {
          group: t,
          densityClasses: d,
          icon: u,
          model: s,
          textColorClasses: i,
          textColorStyles: v,
          backgroundColorClasses: m,
          backgroundColorStyles: b,
          trueValue: g,
        } = ft(e),
        f = Me(),
        p = O(!1),
        h = O(!1),
        C = ve(),
        y = x(() => e.id || `input-${f}`),
        R = x(() => !e.disabled && !e.readonly);
      t?.onForceUpdate(() => {
        C.value && (C.value.checked = s.value);
      });
      function K(k) {
        R.value &&
          ((p.value = !0),
          Be(k.target, ":focus-visible") !== !1 && (h.value = !0));
      }
      function A() {
        (p.value = !1), (h.value = !1);
      }
      function Q(k) {
        k.stopPropagation();
      }
      function $(k) {
        if (!R.value) {
          C.value && (C.value.checked = s.value);
          return;
        }
        e.readonly && t && De(() => t.forceUpdate()),
          (s.value = k.target.checked);
      }
      return (
        ue(() => {
          const k = l.label
              ? l.label({ label: e.label, props: { for: y.value } })
              : e.label,
            [B, G] = Cl(a),
            D = I(
              "input",
              L(
                {
                  ref: C,
                  checked: s.value,
                  disabled: !!e.disabled,
                  id: y.value,
                  onBlur: A,
                  onFocus: K,
                  onInput: $,
                  "aria-disabled": !!e.disabled,
                  "aria-label": e.label,
                  type: e.type,
                  value: g.value,
                  name: e.name,
                  "aria-checked": e.type === "checkbox" ? s.value : void 0,
                },
                G,
              ),
              null,
            );
          return I(
            "div",
            L(
              {
                class: [
                  "v-selection-control",
                  {
                    "v-selection-control--dirty": s.value,
                    "v-selection-control--disabled": e.disabled,
                    "v-selection-control--error": e.error,
                    "v-selection-control--focused": p.value,
                    "v-selection-control--focus-visible": h.value,
                    "v-selection-control--inline": e.inline,
                  },
                  d.value,
                  e.class,
                ],
              },
              B,
              { style: e.style },
            ),
            [
              I(
                "div",
                {
                  class: Z(["v-selection-control__wrapper", i.value]),
                  style: xe(v.value),
                },
                [
                  l.default?.({
                    backgroundColorClasses: m,
                    backgroundColorStyles: b,
                  }),
                  Fe(
                    I("div", { class: Z(["v-selection-control__input"]) }, [
                      l.input?.({
                        model: s,
                        textColorClasses: i,
                        textColorStyles: v,
                        backgroundColorClasses: m,
                        backgroundColorStyles: b,
                        inputNode: D,
                        icon: u.value,
                        props: { onFocus: K, onBlur: A, id: y.value },
                      }) ??
                        I(ne, null, [
                          u.value &&
                            V(te, { key: "icon", icon: u.value }, null),
                          D,
                        ]),
                    ]),
                    [
                      [
                        we,
                        !e.disabled && !e.readonly && e.ripple,
                        null,
                        { center: !0, circle: !0 },
                      ],
                    ],
                  ),
                ],
              ),
              k && V(gl, { for: y.value, onClick: Q }, { default: () => [k] }),
            ],
          );
        }),
        { isFocused: p, input: C }
      );
    },
  }),
  vt = H(
    {
      indeterminate: Boolean,
      indeterminateIcon: { type: q, default: "$checkboxIndeterminate" },
      ...ul({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }),
    },
    "VCheckboxBtn",
  ),
  mt = oe()({
    name: "VCheckboxBtn",
    props: vt(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:indeterminate": (e) => !0,
    },
    setup(e, n) {
      let { slots: a } = n;
      const l = me(e, "indeterminate"),
        t = me(e, "modelValue");
      function d(i) {
        l.value && (l.value = !1);
      }
      const u = x(() => (l.value ? e.indeterminateIcon : e.falseIcon)),
        s = x(() => (l.value ? e.indeterminateIcon : e.trueIcon));
      return (
        ue(() => {
          const i = Ye(Ne.filterProps(e), ["modelValue"]);
          return V(
            Ne,
            L(i, {
              modelValue: t.value,
              "onUpdate:modelValue": [(v) => (t.value = v), d],
              class: ["v-checkbox-btn", e.class],
              style: e.style,
              type: "checkbox",
              falseIcon: u.value,
              trueIcon: s.value,
              "aria-checked": l.value ? "mixed" : void 0,
            }),
            a,
          );
        }),
        {}
      );
    },
  });
function ht(e) {
  let {
    selectedElement: n,
    containerElement: a,
    isRtl: l,
    isHorizontal: t,
  } = e;
  const d = Se(t, a),
    u = rl(t, l, a),
    s = Se(t, n),
    i = cl(t, n),
    v = s * 0.4;
  return u > i ? i - v : u + d < i + s ? i - d + s + v : u;
}
function gt(e) {
  let { selectedElement: n, containerElement: a, isHorizontal: l } = e;
  const t = Se(l, a),
    d = cl(l, n),
    u = Se(l, n);
  return d - t / 2 + u / 2;
}
function We(e, n) {
  return n?.[e ? "scrollWidth" : "scrollHeight"] || 0;
}
function yt(e, n) {
  return n?.[e ? "clientWidth" : "clientHeight"] || 0;
}
function rl(e, n, a) {
  if (!a) return 0;
  const { scrollLeft: l, offsetWidth: t, scrollWidth: d } = a;
  return e ? (n ? d - t + l : l) : a.scrollTop;
}
function Se(e, n) {
  return n?.[e ? "offsetWidth" : "offsetHeight"] || 0;
}
function cl(e, n) {
  return n?.[e ? "offsetLeft" : "offsetTop"] || 0;
}
const dl = Symbol.for("vuetify:v-slide-group"),
  fl = H(
    {
      centerActive: Boolean,
      scrollToActive: { type: Boolean, default: !0 },
      contentClass: null,
      direction: { type: String, default: "horizontal" },
      symbol: { type: null, default: dl },
      nextIcon: { type: q, default: "$next" },
      prevIcon: { type: q, default: "$prev" },
      showArrows: {
        type: [Boolean, String],
        validator: (e) =>
          typeof e == "boolean" ||
          ["always", "desktop", "mobile", "never"].includes(e),
      },
      ...he(),
      ...Il({ mobile: null }),
      ...Ee(),
      ...nl({ selectedClass: "v-slide-group-item--active" }),
    },
    "VSlideGroup",
  ),
  je = oe()({
    name: "VSlideGroup",
    props: fl(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: a } = n;
      const { isRtl: l } = wl(),
        { displayClasses: t, mobile: d } = Ze(e),
        u = al(e, e.symbol),
        s = O(!1),
        i = O(0),
        v = O(0),
        m = O(0),
        b = F(() => e.direction === "horizontal"),
        { resizeRef: g, contentRect: f } = Ve(),
        { resizeRef: p, contentRect: h } = Ve(),
        C = xl(),
        y = F(() => ({
          container: g.el,
          duration: 200,
          easing: "easeOutQuart",
        })),
        R = F(() =>
          u.selected.value.length
            ? u.items.value.findIndex((r) => r.id === u.selected.value[0])
            : -1,
        ),
        K = F(() =>
          u.selected.value.length
            ? u.items.value.findIndex(
                (r) => r.id === u.selected.value[u.selected.value.length - 1],
              )
            : -1,
        );
      if (Ie) {
        let r = -1;
        ae(
          () => [u.selected.value, f.value, h.value, b.value],
          () => {
            cancelAnimationFrame(r),
              (r = requestAnimationFrame(() => {
                if (f.value && h.value) {
                  const c = b.value ? "width" : "height";
                  (v.value = f.value[c]),
                    (m.value = h.value[c]),
                    (s.value = v.value + 1 < m.value);
                }
                if (e.scrollToActive && R.value >= 0 && p.el) {
                  const c = p.el.children[K.value];
                  Q(c, e.centerActive);
                }
              }));
          },
        );
      }
      const A = O(!1);
      function Q(r, c) {
        let o = 0;
        c
          ? (o = gt({
              containerElement: g.el,
              isHorizontal: b.value,
              selectedElement: r,
            }))
          : (o = ht({
              containerElement: g.el,
              isHorizontal: b.value,
              isRtl: l.value,
              selectedElement: r,
            })),
          $(o);
      }
      function $(r) {
        if (!Ie || !g.el) return;
        const c = Se(b.value, g.el),
          o = rl(b.value, l.value, g.el);
        if (!(We(b.value, g.el) <= c || Math.abs(r - o) < 16)) {
          if (b.value && l.value && g.el) {
            const { scrollWidth: z, offsetWidth: N } = g.el;
            r = z - N - r;
          }
          b.value ? C.horizontal(r, y.value) : C(r, y.value);
        }
      }
      function k(r) {
        const { scrollTop: c, scrollLeft: o } = r.target;
        i.value = b.value ? o : c;
      }
      function B(r) {
        if (((A.value = !0), !(!s.value || !p.el))) {
          for (const c of r.composedPath())
            for (const o of p.el.children)
              if (o === c) {
                Q(o);
                return;
              }
        }
      }
      function G(r) {
        A.value = !1;
      }
      let D = !1;
      function ee(r) {
        !D &&
          !A.value &&
          !(r.relatedTarget && p.el?.contains(r.relatedTarget)) &&
          J(),
          (D = !1);
      }
      function E() {
        D = !0;
      }
      function se(r) {
        if (!p.el) return;
        function c(o) {
          r.preventDefault(), J(o);
        }
        b.value
          ? r.key === "ArrowRight"
            ? c(l.value ? "prev" : "next")
            : r.key === "ArrowLeft" && c(l.value ? "next" : "prev")
          : r.key === "ArrowDown"
            ? c("next")
            : r.key === "ArrowUp" && c("prev"),
          r.key === "Home" ? c("first") : r.key === "End" && c("last");
      }
      function Y(r, c) {
        if (!r) return;
        let o = r;
        do
          o =
            o?.[c === "next" ? "nextElementSibling" : "previousElementSibling"];
        while (o?.hasAttribute("disabled"));
        return o;
      }
      function J(r) {
        if (!p.el) return;
        let c;
        if (!r) c = Pl(p.el)[0];
        else if (r === "next") {
          if (((c = Y(p.el.querySelector(":focus"), r)), !c)) return J("first");
        } else if (r === "prev") {
          if (((c = Y(p.el.querySelector(":focus"), r)), !c)) return J("last");
        } else
          r === "first"
            ? ((c = p.el.firstElementChild),
              c?.hasAttribute("disabled") && (c = Y(c, "next")))
            : r === "last" &&
              ((c = p.el.lastElementChild),
              c?.hasAttribute("disabled") && (c = Y(c, "prev")));
        c && c.focus({ preventScroll: !0 });
      }
      function U(r) {
        const c = b.value && l.value ? -1 : 1,
          o = (r === "prev" ? -c : c) * v.value;
        let w = i.value + o;
        if (b.value && l.value && g.el) {
          const { scrollWidth: z, offsetWidth: N } = g.el;
          w += z - N;
        }
        $(w);
      }
      const ie = F(() => ({
          next: u.next,
          prev: u.prev,
          select: u.select,
          isSelected: u.isSelected,
        })),
        X = F(() => s.value || Math.abs(i.value) > 0),
        re = F(() => {
          switch (e.showArrows) {
            case "never":
              return !1;
            case "always":
              return !0;
            case "desktop":
              return !d.value;
            case !0:
              return X.value;
            case "mobile":
              return d.value || X.value;
            default:
              return !d.value && X.value;
          }
        }),
        S = F(() => Math.abs(i.value) > 1),
        P = F(() => {
          if (!g.value || !X.value) return !1;
          const r = We(b.value, g.el),
            c = yt(b.value, g.el);
          return r - c - Math.abs(i.value) > 1;
        });
      return (
        ue(() =>
          V(
            e.tag,
            {
              class: Z([
                "v-slide-group",
                {
                  "v-slide-group--vertical": !b.value,
                  "v-slide-group--has-affixes": re.value,
                  "v-slide-group--is-overflowing": s.value,
                },
                t.value,
                e.class,
              ]),
              style: xe(e.style),
              tabindex: A.value || u.selected.value.length ? -1 : 0,
              onFocus: ee,
            },
            {
              default: () => [
                re.value &&
                  I(
                    "div",
                    {
                      key: "prev",
                      class: Z([
                        "v-slide-group__prev",
                        { "v-slide-group__prev--disabled": !S.value },
                      ]),
                      onMousedown: E,
                      onClick: () => S.value && U("prev"),
                    },
                    [
                      a.prev?.(ie.value) ??
                        V(Le, null, {
                          default: () => [
                            V(
                              te,
                              { icon: l.value ? e.nextIcon : e.prevIcon },
                              null,
                            ),
                          ],
                        }),
                    ],
                  ),
                I(
                  "div",
                  {
                    key: "container",
                    ref: g,
                    class: Z(["v-slide-group__container", e.contentClass]),
                    onScroll: k,
                  },
                  [
                    I(
                      "div",
                      {
                        ref: p,
                        class: "v-slide-group__content",
                        onFocusin: B,
                        onFocusout: G,
                        onKeydown: se,
                      },
                      [a.default?.(ie.value)],
                    ),
                  ],
                ),
                re.value &&
                  I(
                    "div",
                    {
                      key: "next",
                      class: Z([
                        "v-slide-group__next",
                        { "v-slide-group__next--disabled": !P.value },
                      ]),
                      onMousedown: E,
                      onClick: () => P.value && U("next"),
                    },
                    [
                      a.next?.(ie.value) ??
                        V(Le, null, {
                          default: () => [
                            V(
                              te,
                              { icon: l.value ? e.prevIcon : e.nextIcon },
                              null,
                            ),
                          ],
                        }),
                    ],
                  ),
              ],
            },
          ),
        ),
        {
          selected: u.selected,
          scrollTo: U,
          scrollOffset: i,
          focus: J,
          hasPrev: S,
          hasNext: P,
        }
      );
    },
  }),
  vl = Symbol.for("vuetify:v-chip-group"),
  bt = H(
    {
      baseColor: String,
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: ke },
      ...fl({ scrollToActive: !1 }),
      ...he(),
      ...nl({ selectedClass: "v-chip--selected" }),
      ...Ee(),
      ...ze(),
      ...ol({ variant: "tonal" }),
    },
    "VChipGroup",
  );
oe()({
  name: "VChipGroup",
  props: bt(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, n) {
    let { slots: a } = n;
    const { themeClasses: l } = Je(e),
      { isSelected: t, select: d, next: u, prev: s, selected: i } = al(e, vl);
    return (
      Xe({
        VChip: {
          baseColor: x(() => e.baseColor),
          color: x(() => e.color),
          disabled: x(() => e.disabled),
          filter: x(() => e.filter),
          variant: x(() => e.variant),
        },
      }),
      ue(() => {
        const v = je.filterProps(e);
        return V(
          je,
          L(v, {
            class: [
              "v-chip-group",
              { "v-chip-group--column": e.column },
              l.value,
              e.class,
            ],
            style: e.style,
          }),
          {
            default: () => [
              a.default?.({
                isSelected: t,
                select: d,
                next: u,
                prev: s,
                selected: i.value,
              }),
            ],
          },
        );
      }),
      {}
    );
  },
});
const pt = H(
    {
      activeClass: String,
      appendAvatar: String,
      appendIcon: q,
      baseColor: String,
      closable: Boolean,
      closeIcon: { type: q, default: "$delete" },
      closeLabel: { type: String, default: "$vuetify.close" },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: q, default: "$complete" },
      label: Boolean,
      link: { type: Boolean, default: void 0 },
      pill: Boolean,
      prependAvatar: String,
      prependIcon: q,
      ripple: { type: [Boolean, Object], default: !0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      modelValue: { type: Boolean, default: !0 },
      onClick: He(),
      onClickOnce: He(),
      ...Jl(),
      ...he(),
      ...ll(),
      ...Zl(),
      ...Yl(),
      ...Xl(),
      ...Ql(),
      ...jl(),
      ...Ee({ tag: "span" }),
      ...ze(),
      ...ol({ variant: "tonal" }),
    },
    "VChip",
  ),
  Qe = oe()({
    name: "VChip",
    directives: { vRipple: we },
    props: pt(),
    emits: {
      "click:close": (e) => !0,
      "update:modelValue": (e) => !0,
      "group:selected": (e) => !0,
      click: (e) => !0,
    },
    setup(e, n) {
      let { attrs: a, emit: l, slots: t } = n;
      const { t: d } = qe(),
        { borderClasses: u } = Kl(e),
        { densityClasses: s } = tl(e),
        { elevationClasses: i } = Hl(e),
        { roundedClasses: v } = $l(e),
        { sizeClasses: m } = Gl(e),
        { themeClasses: b } = Je(e),
        g = me(e, "modelValue"),
        f = Ge(e, vl, !1),
        p = Ge(e, dl, !1),
        h = Ul(e, a),
        C = x(() => e.link !== !1 && h.isLink.value),
        y = F(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (!!f || e.link || h.isClickable.value),
        ),
        R = x(() => ({
          "aria-label": d(e.closeLabel),
          disabled: e.disabled,
          onClick(B) {
            B.preventDefault(),
              B.stopPropagation(),
              (g.value = !1),
              l("click:close", B);
          },
        }));
      ae(g, (B) => {
        B ? (f?.register(), p?.register()) : (f?.unregister(), p?.unregister());
      });
      const {
        colorClasses: K,
        colorStyles: A,
        variantClasses: Q,
      } = Nl(() => ({
        color:
          !f || f.isSelected.value ? (e.color ?? e.baseColor) : e.baseColor,
        variant: e.variant,
      }));
      function $(B) {
        l("click", B), y.value && (h.navigate?.(B), f?.toggle());
      }
      function k(B) {
        (B.key === "Enter" || B.key === " ") && (B.preventDefault(), $(B));
      }
      return () => {
        const B = h.isLink.value ? "a" : e.tag,
          G = !!(e.appendIcon || e.appendAvatar),
          D = !!(G || t.append),
          ee = !!(t.close || e.closable),
          E = !!(t.filter || e.filter) && f,
          se = !!(e.prependIcon || e.prependAvatar),
          Y = !!(se || t.prepend);
        return (
          g.value &&
          Fe(
            V(
              B,
              L(h.linkProps, {
                class: [
                  "v-chip",
                  {
                    "v-chip--disabled": e.disabled,
                    "v-chip--label": e.label,
                    "v-chip--link": y.value,
                    "v-chip--filter": E,
                    "v-chip--pill": e.pill,
                    [`${e.activeClass}`]: e.activeClass && h.isActive?.value,
                  },
                  b.value,
                  u.value,
                  K.value,
                  s.value,
                  i.value,
                  v.value,
                  m.value,
                  Q.value,
                  f?.selectedClass.value,
                  e.class,
                ],
                style: [A.value, e.style],
                disabled: e.disabled || void 0,
                draggable: e.draggable,
                tabindex: y.value ? 0 : void 0,
                onClick: $,
                onKeydown: y.value && !C.value && k,
              }),
              {
                default: () => [
                  Wl(y.value, "v-chip"),
                  E &&
                    V(
                      yl,
                      { key: "filter" },
                      {
                        default: () => [
                          Fe(
                            I("div", { class: "v-chip__filter" }, [
                              t.filter
                                ? V(
                                    pe,
                                    {
                                      key: "filter-defaults",
                                      disabled: !e.filterIcon,
                                      defaults: {
                                        VIcon: { icon: e.filterIcon },
                                      },
                                    },
                                    t.filter,
                                  )
                                : V(
                                    te,
                                    { key: "filter-icon", icon: e.filterIcon },
                                    null,
                                  ),
                            ]),
                            [[Al, f.isSelected.value]],
                          ),
                        ],
                      },
                    ),
                  Y &&
                    I("div", { key: "prepend", class: "v-chip__prepend" }, [
                      t.prepend
                        ? V(
                            pe,
                            {
                              key: "prepend-defaults",
                              disabled: !se,
                              defaults: {
                                VAvatar: { image: e.prependAvatar, start: !0 },
                                VIcon: { icon: e.prependIcon, start: !0 },
                              },
                            },
                            t.prepend,
                          )
                        : I(ne, null, [
                            e.prependIcon &&
                              V(
                                te,
                                {
                                  key: "prepend-icon",
                                  icon: e.prependIcon,
                                  start: !0,
                                },
                                null,
                              ),
                            e.prependAvatar &&
                              V(
                                Re,
                                {
                                  key: "prepend-avatar",
                                  image: e.prependAvatar,
                                  start: !0,
                                },
                                null,
                              ),
                          ]),
                    ]),
                  I(
                    "div",
                    { class: "v-chip__content", "data-no-activator": "" },
                    [
                      t.default?.({
                        isSelected: f?.isSelected.value,
                        selectedClass: f?.selectedClass.value,
                        select: f?.select,
                        toggle: f?.toggle,
                        value: f?.value.value,
                        disabled: e.disabled,
                      }) ?? Tl(e.text),
                    ],
                  ),
                  D &&
                    I("div", { key: "append", class: "v-chip__append" }, [
                      t.append
                        ? V(
                            pe,
                            {
                              key: "append-defaults",
                              disabled: !G,
                              defaults: {
                                VAvatar: { end: !0, image: e.appendAvatar },
                                VIcon: { end: !0, icon: e.appendIcon },
                              },
                            },
                            t.append,
                          )
                        : I(ne, null, [
                            e.appendIcon &&
                              V(
                                te,
                                {
                                  key: "append-icon",
                                  end: !0,
                                  icon: e.appendIcon,
                                },
                                null,
                              ),
                            e.appendAvatar &&
                              V(
                                Re,
                                {
                                  key: "append-avatar",
                                  end: !0,
                                  image: e.appendAvatar,
                                },
                                null,
                              ),
                          ]),
                    ]),
                  ee &&
                    I(
                      "button",
                      L(
                        {
                          key: "close",
                          class: "v-chip__close",
                          type: "button",
                          "data-testid": "close-chip",
                        },
                        R.value,
                      ),
                      [
                        t.close
                          ? V(
                              pe,
                              {
                                key: "close-defaults",
                                defaults: {
                                  VIcon: { icon: e.closeIcon, size: "x-small" },
                                },
                              },
                              t.close,
                            )
                          : V(
                              te,
                              {
                                key: "close-icon",
                                icon: e.closeIcon,
                                size: "x-small",
                              },
                              null,
                            ),
                      ],
                    ),
                ],
              },
            ),
            [[we, y.value && e.ripple, null]],
          )
        );
      };
    },
  }),
  kt = H({ renderless: Boolean, ...he() }, "VVirtualScrollItem"),
  St = oe()({
    name: "VVirtualScrollItem",
    inheritAttrs: !1,
    props: kt(),
    emits: { "update:height": (e) => !0 },
    setup(e, n) {
      let { attrs: a, emit: l, slots: t } = n;
      const { resizeRef: d, contentRect: u } = Ve(void 0, "border");
      ae(
        () => u.value?.height,
        (s) => {
          s != null && l("update:height", s);
        },
      ),
        ue(() =>
          e.renderless
            ? I(ne, null, [t.default?.({ itemRef: d })])
            : I(
                "div",
                L(
                  {
                    ref: d,
                    class: ["v-virtual-scroll__item", e.class],
                    style: e.style,
                  },
                  a,
                ),
                [t.default?.()],
              ),
        );
    },
  }),
  Ct = -1,
  Vt = 1,
  Ae = 100,
  It = H(
    {
      itemHeight: { type: [Number, String], default: null },
      itemKey: { type: [String, Array, Function], default: null },
      height: [Number, String],
    },
    "virtual",
  );
function wt(e, n) {
  const a = Ze(),
    l = O(0);
  _e(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const t = O(0),
    d = O(
      Math.ceil((parseInt(e.height) || a.height.value) / (l.value || 16)) || 1,
    ),
    u = O(0),
    s = O(0),
    i = ve(),
    v = ve();
  let m = 0;
  const { resizeRef: b, contentRect: g } = Ve();
  _e(() => {
    b.value = i.value;
  });
  const f = F(() =>
      i.value === document.documentElement
        ? a.height.value
        : g.value?.height || parseInt(e.height) || 0,
    ),
    p = F(() => !!(i.value && v.value && f.value && l.value));
  let h = Array.from({ length: n.value.length }),
    C = Array.from({ length: n.value.length });
  const y = O(0);
  let R = -1;
  function K(S) {
    return h[S] || l.value;
  }
  const A = Fl(() => {
      const S = performance.now();
      C[0] = 0;
      const P = n.value.length;
      for (let r = 1; r <= P; r++) C[r] = (C[r - 1] || 0) + K(r - 1);
      y.value = Math.max(y.value, performance.now() - S);
    }, y),
    Q = ae(p, (S) => {
      S &&
        (Q(),
        (m = v.value.offsetTop),
        A.immediate(),
        U(),
        ~R &&
          De(() => {
            Ie &&
              window.requestAnimationFrame(() => {
                X(R), (R = -1);
              });
          }));
    });
  Oe(() => {
    A.clear();
  });
  function $(S, P) {
    const r = h[S],
      c = l.value;
    (l.value = c ? Math.min(l.value, P) : P),
      (r !== P || c !== l.value) && ((h[S] = P), A());
  }
  function k(S) {
    S = Pe(S, 0, n.value.length);
    const P = Math.floor(S),
      r = S % 1,
      c = P + 1,
      o = C[P] || 0,
      w = C[c] || o;
    return o + (w - o) * r;
  }
  function B(S) {
    return xt(C, S);
  }
  let G = 0,
    D = 0,
    ee = 0;
  ae(f, (S, P) => {
    U(),
      S < P &&
        requestAnimationFrame(() => {
          (D = 0), U();
        });
  });
  let E = -1;
  function se() {
    if (!i.value || !v.value) return;
    const S = i.value.scrollTop,
      P = performance.now();
    P - ee > 500
      ? ((D = Math.sign(S - G)), (m = v.value.offsetTop))
      : (D = S - G),
      (G = S),
      (ee = P),
      window.clearTimeout(E),
      (E = window.setTimeout(Y, 500)),
      U();
  }
  function Y() {
    !i.value || !v.value || ((D = 0), (ee = 0), window.clearTimeout(E), U());
  }
  let J = -1;
  function U() {
    cancelAnimationFrame(J), (J = requestAnimationFrame(ie));
  }
  function ie() {
    if (!i.value || !f.value || !l.value) return;
    const S = G - m,
      P = Math.sign(D),
      r = Math.max(0, S - Ae),
      c = Pe(B(r), 0, n.value.length),
      o = S + f.value + Ae,
      w = Pe(B(o) + 1, c + 1, n.value.length);
    if ((P !== Ct || c < t.value) && (P !== Vt || w > d.value)) {
      const z = k(t.value) - k(c),
        N = k(w) - k(d.value);
      Math.max(z, N) > Ae
        ? ((t.value = c), (d.value = w))
        : (c <= 0 && (t.value = c), w >= n.value.length && (d.value = w));
    }
    (u.value = k(t.value)), (s.value = k(n.value.length) - k(d.value));
  }
  function X(S) {
    const P = k(S);
    !i.value || (S && !P) ? (R = S) : (i.value.scrollTop = P);
  }
  const re = F(() =>
    n.value.slice(t.value, d.value).map((S, P) => {
      const r = P + t.value;
      return { raw: S, index: r, key: el(S, e.itemKey, r) };
    }),
  );
  return (
    ae(
      n,
      () => {
        (h = Array.from({ length: n.value.length })),
          (C = Array.from({ length: n.value.length })),
          A.immediate(),
          U();
      },
      { deep: 1 },
    ),
    {
      calculateVisibleItems: U,
      containerRef: i,
      markerRef: v,
      computedItems: re,
      paddingTop: u,
      paddingBottom: s,
      scrollToIndex: X,
      handleScroll: se,
      handleScrollend: Y,
      handleItemResize: $,
    }
  );
}
function xt(e, n) {
  let a = e.length - 1,
    l = 0,
    t = 0,
    d = null,
    u = -1;
  if (e[a] < n) return a;
  for (; l <= a; )
    if (((t = (l + a) >> 1), (d = e[t]), d > n)) a = t - 1;
    else if (d < n) (u = t), (l = t + 1);
    else return d === n ? t : l;
  return u;
}
const Pt = H(
    {
      items: { type: Array, default: () => [] },
      renderless: Boolean,
      ...It(),
      ...he(),
      ...et(),
    },
    "VVirtualScroll",
  ),
  At = oe()({
    name: "VVirtualScroll",
    props: Pt(),
    setup(e, n) {
      let { slots: a } = n;
      const l = Bl("VVirtualScroll"),
        { dimensionStyles: t } = ql(e),
        {
          calculateVisibleItems: d,
          containerRef: u,
          markerRef: s,
          handleScroll: i,
          handleScrollend: v,
          handleItemResize: m,
          scrollToIndex: b,
          paddingTop: g,
          paddingBottom: f,
          computedItems: p,
        } = wt(
          e,
          x(() => e.items),
        );
      return (
        _l(
          () => e.renderless,
          () => {
            function h() {
              const y = (
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1
              )
                ? "addEventListener"
                : "removeEventListener";
              u.value === document.documentElement
                ? (document[y]("scroll", i, { passive: !0 }),
                  document[y]("scrollend", v))
                : (u.value?.[y]("scroll", i, { passive: !0 }),
                  u.value?.[y]("scrollend", v));
            }
            Rl(() => {
              (u.value = ct(l.vnode.el, !0)), h(!0);
            }),
              Oe(h);
          },
        ),
        ue(() => {
          const h = p.value.map((C) =>
            V(
              St,
              {
                key: C.key,
                renderless: e.renderless,
                "onUpdate:height": (y) => m(C.index, y),
              },
              {
                default: (y) =>
                  a.default?.({ item: C.raw, index: C.index, ...y }),
              },
            ),
          );
          return e.renderless
            ? I(ne, null, [
                I(
                  "div",
                  {
                    ref: s,
                    class: "v-virtual-scroll__spacer",
                    style: { paddingTop: Ce(g.value) },
                  },
                  null,
                ),
                h,
                I(
                  "div",
                  {
                    class: "v-virtual-scroll__spacer",
                    style: { paddingBottom: Ce(f.value) },
                  },
                  null,
                ),
              ])
            : I(
                "div",
                {
                  ref: u,
                  class: Z(["v-virtual-scroll", e.class]),
                  onScrollPassive: i,
                  onScrollend: v,
                  style: xe([t.value, e.style]),
                },
                [
                  I(
                    "div",
                    {
                      ref: s,
                      class: "v-virtual-scroll__container",
                      style: {
                        paddingTop: Ce(g.value),
                        paddingBottom: Ce(f.value),
                      },
                    },
                    [h],
                  ),
                ],
              );
        }),
        { calculateVisibleItems: d, scrollToIndex: b }
      );
    },
  });
function Tt(e, n) {
  const a = O(!1);
  let l;
  function t(s) {
    cancelAnimationFrame(l),
      (a.value = !0),
      (l = requestAnimationFrame(() => {
        l = requestAnimationFrame(() => {
          a.value = !1;
        });
      }));
  }
  async function d() {
    await new Promise((s) => requestAnimationFrame(s)),
      await new Promise((s) => requestAnimationFrame(s)),
      await new Promise((s) => requestAnimationFrame(s)),
      await new Promise((s) => {
        if (a.value) {
          const i = ae(a, () => {
            i(), s();
          });
        } else s();
      });
  }
  async function u(s) {
    if (
      (s.key === "Tab" && n.value?.focus(),
      !["PageDown", "PageUp", "Home", "End"].includes(s.key))
    )
      return;
    const i = e.value?.$el;
    if (!i) return;
    (s.key === "Home" || s.key === "End") &&
      i.scrollTo({
        top: s.key === "Home" ? 0 : i.scrollHeight,
        behavior: "smooth",
      }),
      await d();
    const v = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (s.key === "PageDown" || s.key === "Home") {
      const m = i.getBoundingClientRect().top;
      for (const b of v)
        if (b.getBoundingClientRect().top >= m) {
          b.focus();
          break;
        }
    } else {
      const m = i.getBoundingClientRect().bottom;
      for (const b of [...v].reverse())
        if (b.getBoundingClientRect().bottom <= m) {
          b.focus();
          break;
        }
    }
  }
  return { onScrollPassive: t, onKeydown: u };
}
const Ft = H(
  {
    closeText: { type: String, default: "$vuetify.close" },
    openText: { type: String, default: "$vuetify.open" },
  },
  "autocomplete",
);
function Bt(e, n) {
  const a = Me(),
    l = F(() => `menu-${a}`),
    t = x(() => zl(n)),
    d = x(() => l.value);
  return { menuId: l, ariaExpanded: t, ariaControls: d };
}
const _t = H(
    {
      chips: Boolean,
      closableChips: Boolean,
      eager: Boolean,
      hideNoData: Boolean,
      hideSelected: Boolean,
      listProps: { type: Object },
      menu: Boolean,
      menuIcon: { type: q, default: "$dropdown" },
      menuProps: { type: Object },
      multiple: Boolean,
      noDataText: { type: String, default: "$vuetify.noDataText" },
      openOnClear: Boolean,
      itemColor: String,
      noAutoScroll: Boolean,
      ...Ft(),
      ...at({ itemChildren: !1 }),
    },
    "Select",
  ),
  Rt = H(
    {
      ..._t(),
      ...Ye(kl({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
      ...tt({ transition: { component: ut } }),
    },
    "VSelect",
  ),
  Gt = oe()({
    name: "VSelect",
    props: Rt(),
    emits: {
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:menu": (e) => !0,
    },
    setup(e, n) {
      let { slots: a } = n;
      const { t: l } = qe(),
        t = ve(),
        d = ve(),
        u = ve(),
        { items: s, transformIn: i, transformOut: v } = nt(e),
        m = me(
          e,
          "modelValue",
          [],
          (o) => i(o === null ? [null] : ye(o)),
          (o) => {
            const w = v(o);
            return e.multiple ? w : (w[0] ?? null);
          },
        ),
        b = F(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(m.value)
            : typeof e.counterValue == "number"
              ? e.counterValue
              : m.value.length,
        ),
        g = bl(e),
        f = pl(e),
        p = F(() => m.value.map((o) => o.value)),
        h = O(!1),
        C = x(
          () => e.closableChips && !g.isReadonly.value && !g.isDisabled.value,
        );
      let y = "",
        R = 0,
        K;
      const A = F(() =>
          e.hideSelected
            ? s.value.filter(
                (o) => !m.value.some((w) => (e.valueComparator || ke)(w, o)),
              )
            : s.value,
        ),
        Q = F(
          () =>
            (e.hideNoData && !A.value.length) ||
            g.isReadonly.value ||
            g.isDisabled.value,
        ),
        $ = me(e, "menu"),
        k = F({
          get: () => $.value,
          set: (o) => {
            ($.value && !o && d.value?.ΨopenChildren.size) ||
              (o && Q.value) ||
              ($.value = o);
          },
        }),
        { menuId: B, ariaExpanded: G, ariaControls: D } = Bt(e, k),
        ee = F(() => ({
          ...e.menuProps,
          activatorProps: {
            ...(e.menuProps?.activatorProps || {}),
            "aria-haspopup": "listbox",
          },
        })),
        E = ve(),
        se = Tt(E, t);
      function Y(o) {
        e.openOnClear && (k.value = !0);
      }
      function J() {
        Q.value || (k.value = !k.value);
      }
      function U(o) {
        $e(o) && ie(o);
      }
      function ie(o) {
        if (!o.key || g.isReadonly.value) return;
        ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(o.key) &&
          o.preventDefault(),
          ["Enter", "ArrowDown", " "].includes(o.key) && (k.value = !0),
          ["Escape", "Tab"].includes(o.key) && (k.value = !1),
          o.key === "Home"
            ? E.value?.focus("first")
            : o.key === "End" && E.value?.focus("last");
        const w = 1e3;
        if (!$e(o)) return;
        const z = performance.now();
        z - K > w && ((y = ""), (R = 0)), (y += o.key.toLowerCase()), (K = z);
        const N = A.value;
        function le() {
          let _ = W();
          return _ ||
            (y.at(-1) === y.at(-2) &&
              ((y = y.slice(0, -1)), R++, (_ = W()), _)) ||
            ((R = 0), (_ = W()), _)
            ? _
            : ((y = o.key.toLowerCase()), W());
        }
        function W() {
          for (let _ = R; _ < N.length; _++) {
            const de = N[_];
            if (de.title.toLowerCase().startsWith(y)) return [de, _];
          }
        }
        const ce = le();
        if (!ce) return;
        const [T, M] = ce;
        (R = M), E.value?.focus(M), e.multiple || (m.value = [T]);
      }
      function X(o) {
        let w =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (!o.props.disabled)
          if (e.multiple) {
            const z = m.value.findIndex((le) =>
                (e.valueComparator || ke)(le.value, o.value),
              ),
              N = w ?? !~z;
            if (~z) {
              const le = N ? [...m.value, o] : [...m.value];
              le.splice(z, 1), (m.value = le);
            } else N && (m.value = [...m.value, o]);
          } else {
            const z = w !== !1;
            (m.value = z ? [o] : []),
              De(() => {
                k.value = !1;
              });
          }
      }
      function re(o) {
        E.value?.$el.contains(o.relatedTarget) || (k.value = !1);
      }
      function S() {
        e.eager && u.value?.calculateVisibleItems();
      }
      function P() {
        h.value && t.value?.focus();
      }
      function r(o) {
        h.value = !0;
      }
      function c(o) {
        if (o == null) m.value = [];
        else if (Be(t.value, ":autofill") || Be(t.value, ":-webkit-autofill")) {
          const w = s.value.find((z) => z.title === o);
          w && X(w);
        } else t.value && (t.value.value = "");
      }
      return (
        ae(k, () => {
          if (!e.hideSelected && k.value && m.value.length) {
            const o = A.value.findIndex((w) =>
              m.value.some((z) => (e.valueComparator || ke)(z.value, w.value)),
            );
            Ie &&
              !e.noAutoScroll &&
              window.requestAnimationFrame(() => {
                o >= 0 && u.value?.scrollToIndex(o);
              });
          }
        }),
        ae(s, (o, w) => {
          k.value ||
            (h.value &&
              e.hideNoData &&
              !w.length &&
              o.length &&
              (k.value = !0));
        }),
        ue(() => {
          const o = !!(e.chips || a.chip),
            w = !!(
              !e.hideNoData ||
              A.value.length ||
              a["prepend-item"] ||
              a["append-item"] ||
              a["no-data"]
            ),
            z = m.value.length > 0,
            N = Ke.filterProps(e),
            le =
              z || (!h.value && e.label && !e.persistentPlaceholder)
                ? void 0
                : e.placeholder;
          return V(
            Ke,
            L({ ref: t }, N, {
              modelValue: m.value.map((W) => W.props.title).join(", "),
              name: void 0,
              "onUpdate:modelValue": c,
              focused: h.value,
              "onUpdate:focused": (W) => (h.value = W),
              validationValue: m.externalValue,
              counterValue: b.value,
              dirty: z,
              class: [
                "v-select",
                {
                  "v-select--active-menu": k.value,
                  "v-select--chips": !!e.chips,
                  [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
                  "v-select--selected": m.value.length,
                  "v-select--selection-slot": !!a.selection,
                },
                e.class,
              ],
              style: e.style,
              inputmode: "none",
              placeholder: le,
              "onClick:clear": Y,
              "onMousedown:control": J,
              onBlur: re,
              onKeydown: ie,
              "aria-expanded": G.value,
              "aria-controls": D.value,
            }),
            {
              ...a,
              default: (W) => {
                let { id: ce } = W;
                return I(ne, null, [
                  I(
                    "select",
                    {
                      hidden: !0,
                      multiple: e.multiple,
                      name: f.fieldName.value,
                    },
                    [
                      s.value.map((T) =>
                        I(
                          "option",
                          {
                            key: T.value,
                            value: T.value,
                            selected: p.value.includes(T.value),
                          },
                          null,
                        ),
                      ),
                    ],
                  ),
                  V(
                    ot,
                    L(
                      {
                        id: B.value,
                        ref: d,
                        modelValue: k.value,
                        "onUpdate:modelValue": (T) => (k.value = T),
                        activator: "parent",
                        contentClass: "v-select__content",
                        disabled: Q.value,
                        eager: e.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        transition: e.transition,
                        onAfterEnter: S,
                        onAfterLeave: P,
                      },
                      ee.value,
                    ),
                    {
                      default: () => [
                        w &&
                          V(
                            st,
                            L(
                              {
                                ref: E,
                                selected: p.value,
                                selectStrategy: e.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (T) => T.preventDefault(),
                                onKeydown: U,
                                onFocusin: r,
                                tabindex: "-1",
                                selectable: !0,
                                "aria-live": "polite",
                                "aria-labelledby": `${ce.value}-label`,
                                "aria-multiselectable": e.multiple,
                                color: e.itemColor ?? e.color,
                              },
                              se,
                              e.listProps,
                            ),
                            {
                              default: () => [
                                a["prepend-item"]?.(),
                                !A.value.length &&
                                  !e.hideNoData &&
                                  (a["no-data"]?.() ??
                                    V(
                                      Ue,
                                      {
                                        key: "no-data",
                                        title: l(e.noDataText),
                                      },
                                      null,
                                    )),
                                V(
                                  At,
                                  {
                                    ref: u,
                                    renderless: !0,
                                    items: A.value,
                                    itemKey: "value",
                                  },
                                  {
                                    default: (T) => {
                                      let {
                                        item: M,
                                        index: _,
                                        itemRef: de,
                                      } = T;
                                      const fe = Ml(M.props),
                                        ge = L(M.props, {
                                          ref: de,
                                          key: M.value,
                                          onClick: () => X(M, null),
                                          "aria-posinset": _ + 1,
                                          "aria-setsize": A.value.length,
                                        });
                                      return M.type === "divider"
                                        ? (a.divider?.({
                                            props: M.raw,
                                            index: _,
                                          }) ??
                                            V(
                                              rt,
                                              L(M.props, {
                                                key: `divider-${_}`,
                                              }),
                                              null,
                                            ))
                                        : M.type === "subheader"
                                          ? (a.subheader?.({
                                              props: M.raw,
                                              index: _,
                                            }) ??
                                            V(
                                              it,
                                              L(M.props, {
                                                key: `subheader-${_}`,
                                              }),
                                              null,
                                            ))
                                          : (a.item?.({
                                              item: M,
                                              index: _,
                                              props: ge,
                                            }) ??
                                            V(Ue, L(ge, { role: "option" }), {
                                              prepend: (j) => {
                                                let { isSelected: ml } = j;
                                                return I(ne, null, [
                                                  e.multiple && !e.hideSelected
                                                    ? V(
                                                        mt,
                                                        {
                                                          key: M.value,
                                                          modelValue: ml,
                                                          ripple: !1,
                                                          tabindex: "-1",
                                                          "aria-hidden": !0,
                                                          onClick: (hl) =>
                                                            hl.preventDefault(),
                                                        },
                                                        null,
                                                      )
                                                    : void 0,
                                                  fe.prependAvatar &&
                                                    V(
                                                      Re,
                                                      {
                                                        image: fe.prependAvatar,
                                                      },
                                                      null,
                                                    ),
                                                  fe.prependIcon &&
                                                    V(
                                                      te,
                                                      { icon: fe.prependIcon },
                                                      null,
                                                    ),
                                                ]);
                                              },
                                            }));
                                    },
                                  },
                                ),
                                a["append-item"]?.(),
                              ],
                            },
                          ),
                      ],
                    },
                  ),
                  m.value.map((T, M) => {
                    function _(j) {
                      j.stopPropagation(), j.preventDefault(), X(T, !1);
                    }
                    const de = L(Qe.filterProps(T.props), {
                        "onClick:close": _,
                        onKeydown(j) {
                          (j.key !== "Enter" && j.key !== " ") ||
                            (j.preventDefault(), j.stopPropagation(), _(j));
                        },
                        onMousedown(j) {
                          j.preventDefault(), j.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      }),
                      fe = o ? !!a.chip : !!a.selection,
                      ge = fe
                        ? Ol(
                            o
                              ? a.chip({ item: T, index: M, props: de })
                              : a.selection({ item: T, index: M }),
                          )
                        : void 0;
                    if (!(fe && !ge))
                      return I(
                        "div",
                        { key: T.value, class: "v-select__selection" },
                        [
                          o
                            ? a.chip
                              ? V(
                                  pe,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: C.value,
                                        size: "small",
                                        text: T.title,
                                      },
                                    },
                                  },
                                  { default: () => [ge] },
                                )
                              : V(
                                  Qe,
                                  L(
                                    {
                                      key: "chip",
                                      closable: C.value,
                                      size: "small",
                                      text: T.title,
                                      disabled: T.props.disabled,
                                    },
                                    de,
                                  ),
                                  null,
                                )
                            : (ge ??
                              I("span", { class: "v-select__selection-text" }, [
                                T.title,
                                e.multiple &&
                                  M < m.value.length - 1 &&
                                  I(
                                    "span",
                                    { class: "v-select__selection-comma" },
                                    [Dl(",")],
                                  ),
                              ])),
                        ],
                      );
                  }),
                ]);
              },
              "append-inner": function () {
                for (
                  var W = arguments.length, ce = new Array(W), T = 0;
                  T < W;
                  T++
                )
                  ce[T] = arguments[T];
                return I(ne, null, [
                  a["append-inner"]?.(...ce),
                  e.menuIcon
                    ? V(
                        te,
                        {
                          class: "v-select__menu-icon",
                          color: t.value?.fieldIconColor,
                          icon: e.menuIcon,
                          "aria-hidden": !0,
                        },
                        null,
                      )
                    : void 0,
                ]);
              },
            },
          );
        }),
        lt({ isFocused: h, menu: k, select: X }, t)
      );
    },
  }),
  zt = (e, n, a) => {
    if (e == null || n == null) return -1;
    if (!n.length) return 0;
    (e = e.toString().toLocaleLowerCase()),
      (n = n.toString().toLocaleLowerCase());
    const l = [];
    let t = e.indexOf(n);
    for (; ~t; ) l.push([t, t + n.length]), (t = e.indexOf(n, t + n.length));
    return l.length ? l : -1;
  };
function Te(e, n) {
  if (!(e == null || typeof e == "boolean" || e === -1))
    return typeof e == "number"
      ? [[e, e + n.length]]
      : Array.isArray(e[0])
        ? e
        : [e];
}
const Ut = H(
  {
    customFilter: Function,
    customKeyFilter: Object,
    filterKeys: [Array, String],
    filterMode: { type: String, default: "intersection" },
    noFilter: Boolean,
  },
  "filter",
);
function Mt(e, n, a) {
  const l = [],
    t = a?.default ?? zt,
    d = a?.filterKeys ? ye(a.filterKeys) : !1,
    u = Object.keys(a?.customKeyFilter ?? {}).length;
  if (!e?.length) return l;
  let s = null;
  e: for (let i = 0; i < e.length; i++) {
    const [v, m = v] = ye(e[i]),
      b = {},
      g = {};
    let f = -1;
    if ((n || u > 0) && !a?.noFilter) {
      let p = !1;
      if (typeof v == "object") {
        if (v.type === "divider" || v.type === "subheader") {
          s?.type === "divider" && v.type === "subheader" && l.push(s),
            (s = { index: i, matches: {}, type: v.type });
          continue;
        }
        const y = d || Object.keys(m);
        p = y.length === u;
        for (const R of y) {
          const K = el(m, R),
            A = a?.customKeyFilter?.[R];
          if (((f = A ? A(K, n, v) : t(K, n, v)), f !== -1 && f !== !1))
            A ? (b[R] = Te(f, n)) : (g[R] = Te(f, n));
          else if (a?.filterMode === "every") continue e;
        }
      } else (f = t(v, n, v)), f !== -1 && f !== !1 && (g.title = Te(f, n));
      const h = Object.keys(g).length,
        C = Object.keys(b).length;
      if (
        (!h && !C) ||
        (a?.filterMode === "union" && C !== u && !h) ||
        (a?.filterMode === "intersection" && (C !== u || (!h && u > 0 && !p)))
      )
        continue;
    }
    s && (l.push(s), (s = null)), l.push({ index: i, matches: { ...g, ...b } });
  }
  return l;
}
function Nt(e, n, a, l) {
  const t = O([]),
    d = O(new Map()),
    u = F(() => (l?.transform ? be(n).map((i) => [i, l.transform(i)]) : be(n)));
  _e(() => {
    const i = typeof a == "function" ? a() : be(a),
      v = typeof i != "string" && typeof i != "number" ? "" : String(i),
      m = Mt(u.value, v, {
        customKeyFilter: { ...e.customKeyFilter, ...be(l?.customKeyFilter) },
        default: e.customFilter,
        filterKeys: e.filterKeys,
        filterMode: e.filterMode,
        noFilter: e.noFilter,
      }),
      b = be(n),
      g = [],
      f = new Map();
    m.forEach((p) => {
      let { index: h, matches: C } = p;
      const y = b[h];
      g.push(y), f.set(y.value, C);
    }),
      (t.value = g),
      (d.value = f);
  });
  function s(i) {
    return d.value.get(i.value);
  }
  return { filteredItems: t, filteredMatches: d, getMatches: s };
}
function Wt(e, n, a) {
  return a == null || !a.length
    ? n
    : a.map((l, t) => {
        const d = t === 0 ? 0 : a[t - 1][1],
          u = [
            I("span", { class: Z(`${e}__unmask`) }, [n.slice(d, l[0])]),
            I("span", { class: Z(`${e}__mask`) }, [n.slice(l[0], l[1])]),
          ];
        return (
          t === a.length - 1 &&
            u.push(I("span", { class: Z(`${e}__unmask`) }, [n.slice(l[1])])),
          I(ne, null, [u])
        );
      });
}
export {
  Qe as V,
  Gt as a,
  Ne as b,
  $t as c,
  il as d,
  je as e,
  fl as f,
  vt as g,
  mt as h,
  Ut as i,
  Bt as j,
  Tt as k,
  _t as l,
  ul as m,
  At as n,
  Wt as o,
  Nt as u,
};
