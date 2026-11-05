import { _ as Ze } from "./CW0mRKDF.js";
import { x as ie } from "./lVf1Haco.js";
import { x as G } from "./D16A7lth.js";
import { s as he, e as ye, a as we, b as pe, V as Ke } from "./B_hTT4u_.js";
import {
  U as F,
  V as J,
  r as S,
  k,
  W as Q,
  B as i,
  z as E,
  I as ve,
  a3 as ne,
  Q as Pe,
  P as X,
  $ as Ie,
  b0 as et,
  b1 as Oe,
  b2 as tt,
  aL as at,
  aJ as ot,
  s as ue,
  as as nt,
  b3 as xe,
  a1 as Re,
  aM as W,
  a2 as We,
  ay as q,
  b4 as st,
  b5 as lt,
  aB as $e,
  aP as rt,
  aQ as ze,
  Y as Me,
  a4 as it,
  aZ as ut,
  a_ as dt,
  b6 as ct,
  u as ft,
  E as vt,
  G as mt,
  o as gt,
  x as bt,
  C as h,
  n as ht,
  y as yt,
  L as K,
  D as ee,
  A as wt,
} from "./CYsiv7Qj.js";
import { u as pt } from "./LKQL6vAN.js";
import { $ as oe } from "./BvG7V8Ak.js";
import { V as Se, a as te } from "./Bj0ZT2dB.js";
import { V as xt, c as ke } from "./sbneMOUU.js";
import { V as St } from "./ss-1h9Hv.js";
import { V as Te } from "./DCAzZvgN.js";
import {
  e as kt,
  g as Ye,
  V as U,
  f as Tt,
  j as Dt,
  k as Ct,
  l as Vt,
  n as Ae,
  o as _t,
  M as Et,
  p as Bt,
  q as Pt,
  r as It,
  a as Ot,
} from "./B_W9U9Wp.js";
import { g as Rt, u as Wt, m as $t, a as zt } from "./fKsYyVgl.js";
import { u as Mt } from "./CCBmAzgz.js";
import { e as De, f as Yt } from "./Cv1q1CuH.js";
import { a as At } from "./D3DeQzvF.js";
import { s as Ce, a as Ve, e as _e, b as Ee } from "./B5S3s6V6.js";
import { e as Be } from "./DRW0ieNg.js";
import { i as Ht } from "./BIFx5Ami.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BrCrqdgZ.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CxBYvc7u.js";
const me = Symbol.for("vuetify:v-tabs"),
  He = J(
    {
      fixed: Boolean,
      sliderColor: String,
      sliderTransition: String,
      sliderTransitionDuration: [String, Number],
      hideSlider: Boolean,
      inset: Boolean,
      direction: { type: String, default: "horizontal" },
      ...Ie(Dt({ selectedClass: "v-tab--selected", variant: "text" }), [
        "active",
        "block",
        "flat",
        "location",
        "position",
        "symbol",
      ]),
    },
    "VTab",
  ),
  de = F()({
    name: "VTab",
    props: He(),
    setup(e, n) {
      let { slots: s, attrs: t } = n;
      const { textColorClasses: c, textColorStyles: g } = kt(
          () => e.sliderColor,
        ),
        { backgroundColorClasses: u, backgroundColorStyles: T } = Ye(
          () => e.sliderColor,
        ),
        w = S(),
        p = S(),
        x = k(() => e.direction === "horizontal"),
        I = k(() => w.value?.group?.isSelected.value ?? !1);
      function b(V, R) {
        return { opacity: [0, 1] };
      }
      function A(V, R) {
        return e.direction === "vertical"
          ? { transform: ["scaleY(0)", "scaleY(1)"] }
          : { transform: ["scaleX(0)", "scaleX(1)"] };
      }
      function O(V, R) {
        const _ = R.getBoundingClientRect(),
          D = V.getBoundingClientRect(),
          f = x.value ? "x" : "y",
          m = x.value ? "X" : "Y",
          v = x.value ? "right" : "bottom",
          C = x.value ? "width" : "height",
          H = _[f],
          j = D[f],
          Y = H > j ? _[v] - D[v] : _[f] - D[f],
          L =
            Math.sign(Y) > 0
              ? x.value
                ? "right"
                : "bottom"
              : Math.sign(Y) < 0
                ? x.value
                  ? "left"
                  : "top"
                : "center",
          le =
            (Math.abs(Y) + (Math.sign(Y) < 0 ? _[C] : D[C])) /
              Math.max(_[C], D[C]) || 0,
          Z = _[C] / D[C] || 0,
          ae = 1.5;
        return {
          transform: [
            `translate${m}(${Y}px) scale${m}(${Z})`,
            `translate${m}(${Y / ae}px) scale${m}(${(le - 1) / ae + 1})`,
            "none",
          ],
          transformOrigin: Array(3).fill(L),
        };
      }
      function $(V) {
        let { value: R } = V;
        if (R) {
          const _ = w.value?.$el.parentElement?.querySelector(
              ".v-tab--selected .v-tab__slider",
            ),
            D = p.value;
          if (!_ || !D) return;
          const f = getComputedStyle(_).color,
            m =
              { fade: b, grow: A, shift: O }[e.sliderTransition ?? "shift"] ??
              O,
            v =
              Number(e.sliderTransitionDuration) ||
              ({ fade: 400, grow: 350, shift: 225 }[
                e.sliderTransition ?? "shift"
              ] ??
                225);
          Ct(
            D,
            { backgroundColor: [f, "currentcolor"], ...m(D, _) },
            { duration: v, easing: et },
          );
        }
      }
      return (
        Q(() => {
          const V = U.filterProps(e);
          return i(
            U,
            X(
              {
                symbol: me,
                ref: w,
                class: ["v-tab", e.class, I.value && e.inset ? u.value : []],
                style: [e.style, I.value && e.inset ? T.value : []],
                tabindex: I.value ? 0 : -1,
                role: "tab",
                "aria-selected": String(I.value),
                active: !1,
              },
              V,
              t,
              {
                block: e.fixed,
                maxWidth: e.fixed ? 300 : void 0,
                "onGroup:selected": $,
              },
            ),
            {
              ...s,
              default: () =>
                E(Pe, null, [
                  s.default?.() ?? e.text,
                  !e.hideSlider &&
                    E(
                      "div",
                      {
                        ref: p,
                        class: ne(["v-tab__slider", c.value]),
                        style: ve(g.value),
                      },
                      null,
                    ),
                ]),
            },
          );
        }),
        Tt({}, w)
      );
    },
  }),
  Lt = (e) => {
    const { touchstartX: n, touchendX: s, touchstartY: t, touchendY: c } = e,
      g = 0.5,
      u = 16;
    (e.offsetX = s - n),
      (e.offsetY = c - t),
      Math.abs(e.offsetY) < g * Math.abs(e.offsetX) &&
        (e.left && s < n - u && e.left(e), e.right && s > n + u && e.right(e)),
      Math.abs(e.offsetX) < g * Math.abs(e.offsetY) &&
        (e.up && c < t - u && e.up(e), e.down && c > t + u && e.down(e));
  };
function Nt(e, n) {
  const s = e.changedTouches[0];
  (n.touchstartX = s.clientX),
    (n.touchstartY = s.clientY),
    n.start?.({ originalEvent: e, ...n });
}
function jt(e, n) {
  const s = e.changedTouches[0];
  (n.touchendX = s.clientX),
    (n.touchendY = s.clientY),
    n.end?.({ originalEvent: e, ...n }),
    Lt(n);
}
function Gt(e, n) {
  const s = e.changedTouches[0];
  (n.touchmoveX = s.clientX),
    (n.touchmoveY = s.clientY),
    n.move?.({ originalEvent: e, ...n });
}
function Xt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end,
  };
  return {
    touchstart: (s) => Nt(s, n),
    touchend: (s) => jt(s, n),
    touchmove: (s) => Gt(s, n),
  };
}
function qt(e, n) {
  const s = n.value,
    t = s?.parent ? e.parentElement : e,
    c = s?.options ?? { passive: !0 },
    g = n.instance?.$.uid;
  if (!t || g === void 0) return;
  const u = Xt(n.value);
  (t._touchHandlers = t._touchHandlers ?? Object.create(null)),
    (t._touchHandlers[g] = u),
    Oe(u).forEach((T) => {
      t.addEventListener(T, u[T], c);
    });
}
function Ut(e, n) {
  const s = n.value?.parent ? e.parentElement : e,
    t = n.instance?.$.uid;
  if (!s?._touchHandlers || t === void 0) return;
  const c = s._touchHandlers[t];
  Oe(c).forEach((g) => {
    s.removeEventListener(g, c[g]);
  }),
    delete s._touchHandlers[t];
}
const ce = { mounted: qt, unmounted: Ut },
  Le = Symbol.for("vuetify:v-window"),
  Ne = Symbol.for("vuetify:v-window-group"),
  je = J(
    {
      continuous: Boolean,
      nextIcon: { type: [Boolean, String, Function, Object], default: "$next" },
      prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" },
      reverse: Boolean,
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == "boolean" || e === "hover",
      },
      verticalArrows: [Boolean, String],
      touch: { type: [Object, Boolean], default: void 0 },
      direction: { type: String, default: "horizontal" },
      modelValue: null,
      disabled: Boolean,
      selectedClass: { type: String, default: "v-window-item--active" },
      mandatory: { type: [Boolean, String], default: "force" },
      crossfade: Boolean,
      transitionDuration: Number,
      ...$e(),
      ...Ae(),
      ...lt(),
    },
    "VWindow",
  ),
  fe = F()({
    name: "VWindow",
    directives: { vTouch: ce },
    props: je(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: s } = n;
      const { themeClasses: t } = tt(e),
        { isRtl: c } = at(),
        { t: g } = ot(),
        u = Vt(e, Ne),
        T = S(),
        w = k(() => (c.value ? !e.reverse : e.reverse)),
        p = ue(!1),
        x = k(() => {
          if (e.crossfade) return "v-window-crossfade-transition";
          const f = e.direction === "vertical" ? "y" : "x",
            v = (w.value ? !p.value : p.value) ? "-reverse" : "";
          return `v-window-${f}${v}-transition`;
        }),
        I = ue(0),
        b = S(void 0),
        A = k(() =>
          u.items.value.findIndex((f) => u.selected.value.includes(f.id)),
        );
      nt(
        A,
        (f, m) => {
          let v;
          const C = { left: 0, top: 0 };
          xe &&
            m >= 0 &&
            ((v = Rt(T.value)),
            (C.left = v?.scrollLeft),
            (C.top = v?.scrollTop));
          const H = u.items.value.length,
            j = H - 1;
          H <= 2
            ? (p.value = f < m)
            : f === j && m === 0
              ? (p.value = !1)
              : f === 0 && m === j
                ? (p.value = !0)
                : (p.value = f < m),
            Re(() => {
              if (!xe || !v) return;
              v.scrollTop !== C.top &&
                v.scrollTo({ ...C, behavior: "instant" }),
                requestAnimationFrame(() => {
                  if (!v) return;
                  v.scrollTop !== C.top &&
                    v.scrollTo({ ...C, behavior: "instant" });
                });
            });
        },
        { flush: "sync" },
      ),
        rt(Le, {
          transition: x,
          isReversed: p,
          transitionCount: I,
          transitionHeight: b,
          rootRef: T,
        });
      const O = W(() => e.continuous || A.value !== 0),
        $ = W(() => e.continuous || A.value !== u.items.value.length - 1);
      function V() {
        O.value && u.prev();
      }
      function R() {
        $.value && u.next();
      }
      const _ = k(() => {
          const f = [],
            m = {
              icon: c.value ? e.nextIcon : e.prevIcon,
              class: `v-window__${w.value ? "right" : "left"}`,
              onClick: u.prev,
              "aria-label": g("$vuetify.carousel.prev"),
            };
          f.push(
            O.value
              ? s.prev
                ? s.prev({ props: m })
                : i(U, m, null)
              : E("div", null, null),
          );
          const v = {
            icon: c.value ? e.prevIcon : e.nextIcon,
            class: `v-window__${w.value ? "left" : "right"}`,
            onClick: u.next,
            "aria-label": g("$vuetify.carousel.next"),
          };
          return (
            f.push(
              $.value
                ? s.next
                  ? s.next({ props: v })
                  : i(U, v, null)
                : E("div", null, null),
            ),
            f
          );
        }),
        D = k(() =>
          e.touch === !1
            ? e.touch
            : {
                ...{
                  left: () => {
                    w.value ? V() : R();
                  },
                  right: () => {
                    w.value ? R() : V();
                  },
                  start: (m) => {
                    let { originalEvent: v } = m;
                    v.stopPropagation();
                  },
                },
                ...(e.touch === !0 ? {} : e.touch),
              },
        );
      return (
        Q(() =>
          We(
            i(
              e.tag,
              {
                ref: T,
                class: ne([
                  "v-window",
                  {
                    "v-window--show-arrows-on-hover": e.showArrows === "hover",
                    "v-window--vertical-arrows": !!e.verticalArrows,
                    "v-window--crossfade": !!e.crossfade,
                  },
                  t.value,
                  e.class,
                ]),
                style: ve([
                  e.style,
                  {
                    "--v-window-transition-duration": st()
                      ? null
                      : q(e.transitionDuration, "ms"),
                  },
                ]),
              },
              {
                default: () => [
                  E(
                    "div",
                    {
                      class: "v-window__container",
                      style: { height: b.value },
                    },
                    [
                      s.default?.({ group: u }),
                      e.showArrows !== !1 &&
                        E(
                          "div",
                          {
                            class: ne([
                              "v-window__controls",
                              {
                                "v-window__controls--left":
                                  e.verticalArrows === "left" ||
                                  e.verticalArrows === !0,
                              },
                              {
                                "v-window__controls--right":
                                  e.verticalArrows === "right",
                              },
                            ]),
                          },
                          [_.value],
                        ),
                    ],
                  ),
                  s.additional?.({ group: u }),
                ],
              },
            ),
            [[ce, D.value]],
          ),
        ),
        { group: u }
      );
    },
  }),
  Ft = J(
    {
      ...Ie(je(), [
        "continuous",
        "nextIcon",
        "prevIcon",
        "showArrows",
        "touch",
        "mandatory",
      ]),
    },
    "VTabsWindow",
  ),
  Jt = F()({
    name: "VTabsWindow",
    props: Ft(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: s } = n;
      const t = ze(me, null),
        c = Me(e, "modelValue"),
        g = k({
          get() {
            return c.value != null || !t
              ? c.value
              : t.items.value.find((u) => t.selected.value.includes(u.id))
                  ?.value;
          },
          set(u) {
            c.value = u;
          },
        });
      return (
        Q(() => {
          const u = fe.filterProps(e);
          return i(
            fe,
            X({ _as: "VTabsWindow" }, u, {
              modelValue: g.value,
              "onUpdate:modelValue": (T) => (g.value = T),
              class: ["v-tabs-window", e.class],
              style: e.style,
              mandatory: !1,
              touch: !1,
            }),
            s,
          );
        }),
        {}
      );
    },
  }),
  Ge = J(
    {
      reverseTransition: { type: [Boolean, String], default: void 0 },
      transition: { type: [Boolean, String], default: void 0 },
      ...$e(),
      ...Bt(),
      ...$t(),
    },
    "VWindowItem",
  ),
  se = F()({
    name: "VWindowItem",
    directives: { vTouch: ce },
    props: Ge(),
    emits: { "group:selected": (e) => !0 },
    setup(e, n) {
      let { slots: s } = n;
      const t = ze(Le),
        c = _t(e, Ne),
        { isBooted: g } = Mt();
      if (!t || !c)
        throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
      const u = ue(!1),
        T = k(
          () =>
            g.value &&
            (t.isReversed.value
              ? e.reverseTransition !== !1
              : e.transition !== !1),
        );
      function w() {
        !u.value ||
          !t ||
          ((u.value = !1),
          t.transitionCount.value > 0 &&
            ((t.transitionCount.value -= 1),
            t.transitionCount.value === 0 &&
              (t.transitionHeight.value = void 0)));
      }
      function p() {
        u.value ||
          !t ||
          ((u.value = !0),
          t.transitionCount.value === 0 &&
            (t.transitionHeight.value = q(t.rootRef.value?.clientHeight)),
          (t.transitionCount.value += 1));
      }
      function x() {
        w();
      }
      function I(O) {
        u.value &&
          Re(() => {
            !T.value ||
              !u.value ||
              !t ||
              (t.transitionHeight.value = q(O.clientHeight));
          });
      }
      const b = k(() => {
          const O = t.isReversed.value ? e.reverseTransition : e.transition;
          return T.value
            ? {
                name: typeof O != "string" ? t.transition.value : O,
                onBeforeEnter: p,
                onAfterEnter: w,
                onEnterCancelled: x,
                onBeforeLeave: p,
                onAfterLeave: w,
                onLeaveCancelled: x,
                onEnter: I,
              }
            : !1;
        }),
        { hasContent: A } = Wt(e, c.isSelected);
      return (
        Q(() =>
          i(
            Et,
            { transition: b.value, disabled: !g.value },
            {
              default: () => [
                We(
                  E(
                    "div",
                    {
                      class: ne([
                        "v-window-item",
                        c.selectedClass.value,
                        e.class,
                      ]),
                      style: ve(e.style),
                    },
                    [A.value && s.default?.()],
                  ),
                  [[it, c.isSelected.value]],
                ),
              ],
            },
          ),
        ),
        { groupItem: c }
      );
    },
  }),
  Qt = J({ ...Ge() }, "VTabsWindowItem"),
  Zt = F()({
    name: "VTabsWindowItem",
    props: Qt(),
    setup(e, n) {
      let { slots: s } = n;
      return (
        Q(() => {
          const t = se.filterProps(e);
          return i(
            se,
            X({ _as: "VTabsWindowItem" }, t, {
              class: ["v-tabs-window-item", e.class],
              style: e.style,
            }),
            s,
          );
        }),
        {}
      );
    },
  });
function Kt(e) {
  return e ? e.map((n) => (ct(n) ? n : { text: n, value: n })) : [];
}
const ea = J(
    {
      alignTabs: { type: String, default: "start" },
      color: String,
      fixedTabs: Boolean,
      items: { type: Array, default: () => [] },
      stacked: Boolean,
      bgColor: String,
      grow: Boolean,
      height: { type: [Number, String], default: void 0 },
      hideSlider: Boolean,
      inset: Boolean,
      insetPadding: [String, Number],
      insetRadius: [String, Number],
      sliderColor: String,
      ...dt(He(), ["spaced", "sliderTransition", "sliderTransitionDuration"]),
      ...Yt({ mandatory: "force", selectedClass: "v-tab-item--selected" }),
      ...It(),
      ...Ae(),
    },
    "VTabs",
  ),
  ta = F()({
    name: "VTabs",
    props: ea(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { attrs: s, slots: t } = n;
      const c = Me(e, "modelValue"),
        g = k(() => Kt(e.items)),
        { densityClasses: u } = Pt(e),
        { backgroundColorClasses: T, backgroundColorStyles: w } = Ye(
          () => e.bgColor,
        ),
        { scopeId: p } = zt();
      return (
        ut({
          VTab: {
            color: W(e, "color"),
            direction: W(e, "direction"),
            stacked: W(e, "stacked"),
            fixed: W(e, "fixedTabs"),
            inset: W(e, "inset"),
            sliderColor: W(e, "sliderColor"),
            sliderTransition: W(e, "sliderTransition"),
            sliderTransitionDuration: W(e, "sliderTransitionDuration"),
            hideSlider: W(e, "hideSlider"),
          },
        }),
        Q(() => {
          const x = De.filterProps(e),
            I = !!(t.window || e.items.length > 0);
          return E(Pe, null, [
            i(
              De,
              X(
                x,
                {
                  modelValue: c.value,
                  "onUpdate:modelValue": (b) => (c.value = b),
                  class: [
                    "v-tabs",
                    `v-tabs--${e.direction}`,
                    `v-tabs--align-tabs-${e.alignTabs}`,
                    {
                      "v-tabs--fixed-tabs": e.fixedTabs,
                      "v-tabs--grow": e.grow,
                      "v-tabs--inset": e.inset,
                      "v-tabs--stacked": e.stacked,
                    },
                    u.value,
                    T.value,
                    e.class,
                  ],
                  style: [
                    {
                      "--v-tabs-height": q(e.height),
                      "--v-tabs-inset-padding": e.inset
                        ? q(e.insetPadding)
                        : void 0,
                      "--v-tabs-inset-radius": e.inset
                        ? q(e.insetRadius)
                        : void 0,
                    },
                    w.value,
                    e.style,
                  ],
                  role: "tablist",
                  symbol: me,
                },
                p,
                s,
              ),
              {
                default:
                  t.default ??
                  (() =>
                    g.value.map(
                      (b) =>
                        t.tab?.({ item: b }) ??
                        i(
                          de,
                          X(b, {
                            key: b.text,
                            value: b.value,
                            spaced: e.spaced,
                          }),
                          {
                            default: t[`tab.${b.value}`]
                              ? () => t[`tab.${b.value}`]?.({ item: b })
                              : void 0,
                          },
                        ),
                    )),
                prev: t.prev,
                next: t.next,
              },
            ),
            I &&
              i(
                Jt,
                X(
                  {
                    modelValue: c.value,
                    "onUpdate:modelValue": (b) => (c.value = b),
                    key: "tabs-window",
                  },
                  p,
                ),
                {
                  default: () => [
                    g.value.map(
                      (b) =>
                        t.item?.({ item: b }) ??
                        i(
                          Zt,
                          { value: b.value },
                          {
                            default: () => t[`item.${b.value}`]?.({ item: b }),
                          },
                        ),
                    ),
                    t.window?.(),
                  ],
                },
              ),
          ]);
        }),
        {}
      );
    },
  }),
  aa = { class: "pl-10 pr-10" },
  oa = { class: "divcenterpage" },
  Ea = {
    __name: "hourstab",
    setup(e) {
      const n = S([
          { label: "Oggi", value: [new Date(), new Date()] },
          {
            label: "Ieri",
            value: [
              new Date().setDate(new Date().getDate() - 1),
              new Date().setDate(new Date().getDate() - 1),
            ],
          },
          {
            label: "Settimana precendente",
            value: [
              he(we(new Date(), 7), { weekStartsOn: 1 }),
              ye(we(new Date(), 7), { weekStartsOn: 1 }),
            ],
          },
          {
            label: "Settimana corrente",
            value: [
              he(new Date(), { weekStartsOn: 1 }),
              ye(new Date(), { weekStartsOn: 1 }),
            ],
          },
          { label: "Mese corrente", value: [Ce(new Date()), Be(new Date())] },
          {
            label: "Mese precedente",
            value: [Ce(Ee(new Date(), 1)), Be(Ee(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Ve(new Date()), _e(new Date())] },
          {
            label: "Anno precedente",
            value: [Ve(pe(new Date(), 1)), _e(pe(new Date(), 1))],
          },
        ]),
        s = S("grafico1"),
        t = S([]),
        c = k(() => t.value.map((o) => o.name)),
        g = k(() =>
          v.value ? D.value.filter((o) => o.project_id == v.value) : D.value,
        ),
        u = k(() => [
          {
            name: "Giorni lavorativi",
            data: t.value.map((o) => Number(o.lavorativi)),
          },
          {
            name: "Giorni lavorati",
            data: t.value.map((o) => Number(o.lavorati)),
          },
          { name: "Ferie", data: t.value.map((o) => Number(o.ferie)) },
          {
            name: "Straordinari",
            data: t.value.map((o) => Number(o.straordinari)),
          },
          { name: "Mancanze", data: t.value.map((o) => Number(o.mancanze)) },
        ]),
        T = k(() => ({
          chart: { type: "bar", height: 500, toolbar: { show: !0 } },
          plotOptions: {
            bar: {
              horizontal: !1,
              columnWidth: "35%",
              borderRadius: 0,
              dataLabels: { position: "top" },
            },
          },
          dataLabels: {
            enabled: !0,
            enabledOnSeries: [0, 1, 2, 3, 4],
            offsetY: -8,
            style: {
              fontSize: "10px",
              fontWeight: 600,
              colors: ["#64748b", "#2563eb", "#16a34a", "#d97706", "#7c3aed"],
            },
            background: {
              enabled: !0,
              foreColor: "#ffffff",
              borderRadius: 3,
              padding: 3,
              opacity: 0.95,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            },
            formatter: function (o) {
              return o > 0 ? o : "";
            },
          },
          xaxis: {
            categories: c.value.map((o) =>
              o
                .trim()
                .split(/\s+/)
                .map((a) => a[0].toUpperCase())
                .join(""),
            ),
            title: { text: "Dipendenti" },
          },
          yaxis: { title: { text: "Giorni" }, min: 0 },
          colors: [
            "#94a3b8",
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#8b5cf6",
            "#ef4444",
          ],
          legend: { position: "top" },
          tooltip: {
            x: {
              formatter: function (o, { dataPointIndex: a }) {
                return c.value[a];
              },
            },
            y: {
              formatter: function (o) {
                return o + " gg";
              },
            },
          },
          grid: { borderColor: "#e5e7eb" },
        })),
        w = k(() => [
          {
            name: "Giorni lavorativi",
            data: t.value.map((o) => Number(o.lavorativi)),
          },
          {
            name: "Giorni lavorati",
            data: t.value.map((o) => Number(o.lavorati)),
          },
          { name: "Ferie", data: t.value.map((o) => Number(o.ferie)) },
          {
            name: "Straordinari",
            data: t.value.map((o) => Number(o.straordinari)),
          },
          { name: "Mancanze", data: t.value.map((o) => Number(o.mancanze)) },
        ]),
        p = k(() => ({
          chart: { type: "line", height: 500, toolbar: { show: !0 } },
          stroke: { curve: "straight", width: 3 },
          markers: {
            size: 7,
            strokeWidth: 2,
            strokeColors: "#fff",
            hover: { size: 10 },
          },
          xaxis: {
            categories: c.value.map((o) =>
              o
                .trim()
                .split(/\s+/)
                .map((a) => a[0].toUpperCase())
                .join(""),
            ),
            title: { text: "Dipendenti" },
          },
          yaxis: { min: 0, title: { text: "Giorni" } },
          colors: [
            "#94a3b8",
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#8b5cf6",
            "#ef4444",
          ],
          dataLabels: {
            enabled: !0,
            offsetY: -8,
            style: {
              fontSize: "11px",
              fontWeight: 600,
              colors: [
                "#94a3b8",
                "#3b82f6",
                "#22c55e",
                "#f59e0b",
                "#8b5cf6",
                "#ef4444",
              ],
            },
            background: { enabled: !1 },
            formatter: function (o) {
              return o;
            },
          },
          legend: { position: "top" },
          tooltip: { y: { formatter: (o) => `${o} gg` } },
          grid: { borderColor: "#e5e7eb" },
        })),
        x = ht();
      ft();
      const { status: I, signIn: b, signOut: A, data: O } = vt(),
        $ = mt("snackbar"),
        V = S([]),
        R = S([]),
        _ = S([]),
        D = S([]),
        f = S([
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            new Date().getDate(),
          ),
          new Date(),
        ]),
        m = S(null),
        v = S(null),
        C = S([]),
        H = S([]),
        j = [
          { title: "Nome", key: "user", sortable: !0, align: "left" },
          { title: "Progetto", key: "project", sortable: !1, align: "left" },
          { title: "Task", key: "task_id", sortable: !0, align: "left" },
          { title: "Data/Ora", key: "date", sortable: !0, align: "left" },
          { title: "Durata", key: "duration", sortable: !0, align: "left" },
        ],
        Y = [
          { title: "Nome", key: "user", sortable: !0, align: "left" },
          { title: "Progetto", key: "project", sortable: !0, align: "left" },
          { title: "Task", key: "task_id", sortable: !0, align: "left" },
          { title: "Data/Ora", key: "date", sortable: !0, align: "left" },
          { title: "Durata", key: "duration", sortable: !0, align: "left" },
        ],
        L = S([]);
      function ge(o, a, d) {
        let l = o[d],
          y = a[d];
        return (
          d === "date" &&
            ((l = new Date(l).getTime()), (y = new Date(y).getTime())),
          typeof l == "number" && typeof y == "number"
            ? l - y
            : String(l ?? "").localeCompare(String(y ?? ""), "it", {
                numeric: !0,
                sensitivity: "base",
              })
        );
      }
      function le() {
        const o = [...g.value];
        return L.value.length
          ? o.sort((a, d) => {
              for (const { key: l, order: y } of L.value) {
                const r = ge(a, d, l);
                if (r !== 0) return y === "desc" ? -r : r;
              }
              return 0;
            })
          : o;
      }
      const Z = S([]),
        ae = (o) => {
          const a = {};
          o.forEach((P) => {
            const M = P.Hour.user_id,
              N = P.Hour.startdate.substring(0, 10),
              re = Number(P.Hour._ore || 0);
            a[N] || (a[N] = {}), a[N][M] || (a[N][M] = 0), (a[N][M] += re);
          });
          const d = [],
            l = new Date(f.value[0]),
            y = new Date(f.value[1]),
            r = new Date(l);
          for (; r <= y; ) {
            const P = r.toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            d.push(P), r.setDate(r.getDate() + 1);
          }
          const B = V.value
            .filter((P) => m.value?.includes(P.id))
            .map((P) => ({
              name: P.name,
              data: d.map((M) => a[M]?.[P.id] ?? 0),
            }));
          Z.value = { categories: d, series: B };
        },
        Xe = k(() => ({
          chart: {
            type: "line",
            height: 450,
            toolbar: { show: !0 },
            zoom: { enabled: !0 },
          },
          stroke: { curve: "straight", width: 3 },
          markers: {
            size: 5,
            strokeWidth: 2,
            strokeColors: "#fff",
            hover: { size: 8 },
          },
          xaxis: {
            categories: Z.value.categories,
            title: { text: "Giorno" },
            labels: {
              formatter: (o) =>
                new Date(o).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
            },
          },
          yaxis: {
            min: 0,
            max: 12,
            title: { text: "Ore" },
            labels: { formatter: (o) => `${o}h` },
          },
          annotations: {
            yaxis: [
              {
                y: 8,
                borderColor: "#6b7280",
                borderWidth: 5,
                strokeDashArray: 0,
                label: {
                  borderColor: "#6b7280",
                  style: {
                    color: "#fff",
                    background: "#6b7280",
                    fontSize: "12px",
                    fontWeight: 600,
                  },
                  text: "8h giornaliere",
                },
              },
            ],
          },
          dataLabels: { enabled: !1 },
          legend: { position: "top" },
          tooltip: {
            y: {
              formatter: (o) => {
                if (o === null) return "-";
                const a = Math.floor(o),
                  d = Math.round((o - a) * 60);
                return `${a}h ${d}m`;
              },
            },
          },
          grid: { borderColor: "#e5e7eb" },
        }));
      pt({
        title: "Imputazione Ore",
        meta: [{ name: "description", content: "Imputazione Ore" }],
      });
      const qe = async () => {
          (C.value = []), (H.value = []);
          const { data: o } = await oe(x.public.apiBaseurl + "project/list/", {
            onRequest({ request: a, options: d }) {},
            onRequestError({ request: a, options: d, error: l }) {
              console.log("Errore nella request:", l),
                ($.value = { text: "Errore: " + l, type: "danger", show: !0 });
            },
            onResponseError({ request: a, response: d, options: l }) {
              console.log(
                "Errore nella response: " + d._data.error.messages[0],
              ),
                ($.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: a, response: d, options: l }) {
              d._data.data.forEach((r) => {
                (r.title = "[" + r.code + "] - " + r.name),
                  C.value.push({ id: r.id, name: r.title }),
                  (H.value[r.id] = r.title);
              });
            },
          });
        },
        Ue = async () => {
          (V.value = []), (R.value = []), (_.value = []);
          const { data: o } = await oe(x.public.apiBaseurl + "user/list", {
            onRequest({ request: a, options: d }) {},
            onRequestError({ request: a, options: d, error: l }) {
              console.log("Errore nella request:", l);
            },
            onResponseError({ request: a, response: d, options: l }) {
              $.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: a, response: d, options: l }) {
              d._data.data.forEach((r) => {
                r.activeuser == 1 &&
                  V.value.push({
                    id: r.id,
                    name: r.firstname + " " + r.lastname,
                  }),
                  (R.value[r.id] = r.acronym),
                  (_.value[r.id] = r.firstname + " " + r.lastname);
              });
            },
          });
        },
        Fe = async () => {
          t.value = [];
          let o = f.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            a = f.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            d = { from: o, to: a, user_id: m.value, project_id: v.value };
          try {
            const { data: l, status1: y } = await oe(
              x.public.apiBaseurl + "hour/getStatisticheDipendenti",
              { method: "POST", body: d },
            );
            t.value = l;
          } catch (l) {
            console.log(l);
            let y = JSON.parse(l.data).errors.title;
            console.log("catcherr", l.data),
              ($.value = { text: y, type: "danger", show: !0 });
            return;
          }
        },
        be = async () => {
          await Je(), await Fe();
        },
        Je = async () => {
          D.value = [];
          let o = f.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            a = f.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            d = { from: o, to: a, user_id: m.value, project_id: 0 };
          try {
            const { data: l, status: y } = await oe(
              x.public.apiBaseurl + "hour/getuserhours",
              { method: "POST", body: d },
            );
            ae(l),
              l.forEach((r) => {
                let z = "0H 0m 0s",
                  B = new Date(r.Hour.startdate),
                  P = new Date(r.Hour.enddate),
                  M = Math.floor((P - B) / 1e3);
                if (M >= 0) {
                  let N = Math.floor(M / 3600);
                  M %= 3600;
                  let re = Math.floor(M / 60);
                  z = `${N}H ${re}m`;
                }
                D.value.push({
                  id: r.Hour.id,
                  user: _.value[r.Hour.user_id],
                  date: r.Hour.startdate,
                  duration: z,
                  project_id: r.Task.project_id,
                  project: H.value[r.Task.project_id],
                  task_id: r.Task.shortname,
                });
              });
          } catch (l) {
            console.log(l);
            let y = JSON.parse(l.data).errors.title;
            console.log("catcherr", l.data),
              ($.value = { text: y, type: "danger", show: !0 });
            return;
          }
        };
      function Qe() {
        const a = le().map((r) => {
            const z = {};
            return (
              Y.forEach((B) => {
                B.title == "Data/Ora"
                  ? (z[B.title] =
                      r[B.key] && r[B.key] !== "0000-00-00"
                        ? new Date(r[B.key]).toLocaleDateString("it-IT") +
                          ", " +
                          new Date(r[B.key]).toLocaleTimeString("it-IT")
                        : "")
                  : (z[B.title] = r[B.key] ?? "");
              }),
              z
            );
          }),
          d = G.utils.json_to_sheet(a),
          l = G.utils.decode_range(d["!ref"]);
        d["!cols"] = [
          { wch: 30 },
          { wch: 60 },
          { wch: 60 },
          { wch: 20 },
          { wch: 20 },
        ];
        for (let r = l.s.c; r <= l.e.c; r++) {
          const z = G.utils.encode_cell({ r: 0, c: r });
          d[z] && (d[z].s = { font: { bold: !0 } });
        }
        const y = G.utils.book_new();
        G.utils.book_append_sheet(y, d, "Imputazione Ore"),
          G.writeFile(y, "export-imputazione-ore.xlsx");
      }
      return (
        gt(async () => {
          (m.value = []),
            await Ue(),
            V.value.forEach((o) => {
              m.value.push(o.id);
            }),
            await qe(),
            await be();
        }),
        (o, a) => {
          const d = Ze;
          return (
            yt(),
            bt("div", aa, [
              E("div", oa, [
                a[12] || (a[12] = E("br", null, null, -1)),
                a[13] ||
                  (a[13] = E(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Imputazione ore",
                    -1,
                  )),
                a[14] ||
                  (a[14] = E("div", { style: { clear: "both" } }, null, -1)),
                i(
                  Se,
                  { "no-gutters": "" },
                  {
                    default: h(() => [
                      i(
                        te,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: h(() => [
                            i(
                              Te,
                              {
                                autocomplete: "off",
                                modelValue: m.value,
                                "onUpdate:modelValue":
                                  a[0] || (a[0] = (l) => (m.value = l)),
                                items: V.value,
                                density: "compact",
                                "item-title": "name",
                                "item-value": "id",
                                variant: "outlined",
                                label: "Dipendenti",
                                multiple: "",
                                clearable: "",
                                "no-data-text": "Nessun risultato trovato",
                                class: "mt-4",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      i(
                        te,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: h(() => [
                            i(
                              K(Ke),
                              {
                                class: "pa-2 pl-0 mt-2 ml-2",
                                "format-locale": K(Ht),
                                modelValue: f.value,
                                "onUpdate:modelValue":
                                  a[1] || (a[1] = (l) => (f.value = l)),
                                "preset-dates": n.value,
                                clearable: !1,
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                placeholder: "Seleziona periodo",
                              },
                              null,
                              8,
                              ["format-locale", "modelValue", "preset-dates"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      i(
                        te,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: h(() => [
                            i(
                              U,
                              {
                                class: "mt-4 ml-2",
                                color: "primary",
                                onClick: a[2] || (a[2] = (l) => be()),
                              },
                              {
                                default: h(() => [
                                  ...(a[7] || (a[7] = [ee("Cerca", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                i(
                  xt,
                  { class: "mt-4" },
                  {
                    default: h(() => [
                      i(
                        ta,
                        {
                          modelValue: s.value,
                          "onUpdate:modelValue":
                            a[3] || (a[3] = (l) => (s.value = l)),
                          color: "primary",
                        },
                        {
                          default: h(() => [
                            i(
                              de,
                              { value: "grafico1" },
                              {
                                default: h(() => [
                                  ...(a[8] ||
                                    (a[8] = [ee(" Ore giornaliere ", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              de,
                              { value: "grafico2" },
                              {
                                default: h(() => [
                                  ...(a[9] ||
                                    (a[9] = [
                                      ee(" Giorni lavorativi vs lavorati ", -1),
                                    ])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"],
                      ),
                      i(At),
                      i(
                        fe,
                        {
                          modelValue: s.value,
                          "onUpdate:modelValue":
                            a[4] || (a[4] = (l) => (s.value = l)),
                        },
                        {
                          default: h(() => [
                            i(
                              se,
                              { value: "grafico1" },
                              {
                                default: h(() => [
                                  i(ke, null, {
                                    default: h(() => [
                                      i(
                                        K(ie),
                                        {
                                          type: "line",
                                          height: "450",
                                          options: Xe.value,
                                          series: Z.value.series,
                                        },
                                        null,
                                        8,
                                        ["options", "series"],
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              se,
                              { value: "grafico2" },
                              {
                                default: h(() => [
                                  i(ke, null, {
                                    default: h(() => [
                                      i(d, null, {
                                        default: h(() => [
                                          i(
                                            K(ie),
                                            {
                                              type: "line",
                                              height: "350",
                                              options: T.value,
                                              series: u.value,
                                            },
                                            null,
                                            8,
                                            ["options", "series"],
                                          ),
                                        ]),
                                        _: 1,
                                      }),
                                      i(d, null, {
                                        default: h(() => [
                                          i(
                                            K(ie),
                                            {
                                              type: "line",
                                              height: "350",
                                              options: p.value,
                                              series: w.value,
                                            },
                                            null,
                                            8,
                                            ["options", "series"],
                                          ),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    _: 1,
                  },
                ),
                i(Se, null, {
                  default: h(() => [
                    i(
                      te,
                      { cols: "10" },
                      {
                        default: h(() => [
                          i(
                            Te,
                            {
                              autocomplete: "off",
                              modelValue: v.value,
                              "onUpdate:modelValue":
                                a[5] || (a[5] = (l) => (v.value = l)),
                              items: C.value,
                              density: "compact",
                              "item-title": "name",
                              variant: "outlined",
                              "item-value": "id",
                              label: "Progetto",
                              clearable: "",
                              "no-data-text": "Nessun risultato trovato",
                              class: "mt-4 ml-2",
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      te,
                      { style: { "text-align": "right" } },
                      {
                        default: h(() => [
                          i(
                            U,
                            {
                              class: "mt-4 ml-2 mr-3",
                              color: "primary",
                              onClick: Qe,
                            },
                            {
                              default: h(() => [
                                i(
                                  Ot,
                                  { class: "mr-3" },
                                  {
                                    default: h(() => [
                                      ...(a[10] ||
                                        (a[10] = [ee("mdi-export", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                a[11] || (a[11] = ee(" XLS", -1)),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
                i(
                  St,
                  {
                    headers: j,
                    items: g.value,
                    class: "mt-4",
                    "item-value": "id",
                    style: { "overflow-x": "auto", display: "block" },
                    "sort-by": L.value,
                    "onUpdate:sortBy": a[6] || (a[6] = (l) => (L.value = l)),
                    "items-per-page": 50,
                    itemsPerPageOptions: [
                      { value: 10, title: "10" },
                      { value: 15, title: "15" },
                      { value: 25, title: "25" },
                      { value: 50, title: "50" },
                      { value: -1, title: "Tutti" },
                    ],
                    itemsPerPageText: "Elementi per pagina",
                    "no-data-text": "Nessun elemento disponibile",
                    pageText: "{0}-{1} di {2}",
                  },
                  {
                    "item.date": h(({ item: l }) => [
                      E(
                        "span",
                        null,
                        wt(
                          new Date(l.date).toLocaleString("it-IT", {
                            dateStyle: "short",
                            timeStyle: "short",
                          }),
                        ),
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "sort-by"],
                ),
              ]),
            ])
          );
        }
      );
    },
  };
export { Ea as default };
