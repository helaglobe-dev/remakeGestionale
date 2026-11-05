import { _ as tt } from "./ClyIuovc.js";
import {
  aw as ie,
  V as q,
  s as se,
  r as M,
  k as p,
  ax as Q,
  ay as A,
  az as at,
  as as he,
  o as Ke,
  W as G,
  z as u,
  I as O,
  a3 as N,
  aA as lt,
  aB as oe,
  aC as nt,
  aD as je,
  aE as ot,
  aF as Se,
  aG as ge,
  aH as Ce,
  aI as ve,
  aJ as qe,
  B as v,
  S as rt,
  T as st,
  aK as Be,
  aL as pe,
  aM as j,
  aN as it,
  aO as ct,
  a1 as ut,
  aP as dt,
  U as Re,
  aQ as Ue,
  aR as ft,
  a2 as De,
  a4 as vt,
  Y as Ve,
  Q as Ge,
  P as be,
  aS as mt,
  aT as Te,
  aU as We,
  aV as Le,
  _ as ht,
  aW as bt,
  aX as gt,
  aY as pt,
  aZ as kt,
  a_ as yt,
  u as wt,
  F as St,
  E as Ct,
  G as Vt,
  e as xt,
  x as Pt,
  C as L,
  M as me,
  L as J,
  n as _t,
  y as Et,
  D as ae,
} from "./CYsiv7Qj.js";
import { u as Rt } from "./LKQL6vAN.js";
import { $ as we } from "./BvG7V8Ak.js";
import { V as Fe, a as Lt, b as Me, c as Ne } from "./CxBYvc7u.js";
import { V as zt } from "./ss-1h9Hv.js";
import { V as Bt, d as Dt } from "./sbneMOUU.js";
import {
  V as le,
  m as Tt,
  d as Ft,
  R as Ie,
  u as Mt,
  e as Nt,
  g as xe,
  h as It,
  f as At,
  i as $t,
  a as Pe,
} from "./B_W9U9Wp.js";
import {
  u as Ht,
  c as Ot,
  d as Kt,
  a as Ae,
  b as jt,
  m as qt,
  e as Ut,
  V as $e,
} from "./BrCrqdgZ.js";
import { V as He, m as Gt } from "./D-XDfEUK.js";
import { V as Wt } from "./hzFhMs-m.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./D3DeQzvF.js";
import "./CCBmAzgz.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./B6Tli9r0.js";
const Xt = q(
    {
      color: { type: Object },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      height: { type: [Number, String], default: 150 },
      width: { type: [Number, String], default: 300 },
      ...oe(),
    },
    "VColorPickerCanvas",
  ),
  Yt = ie({
    name: "VColorPickerCanvas",
    props: Xt(),
    emits: { "update:color": (e) => !0, "update:position": (e) => !0 },
    setup(e, t) {
      let { emit: a } = t;
      const r = se(!1),
        n = M(),
        d = se(parseFloat(e.width)),
        l = se(parseFloat(e.height)),
        o = M({ x: 0, y: 0 }),
        f = p({
          get: () => o.value,
          set(m) {
            if (!n.value) return;
            const { x: g, y: S } = m;
            (o.value = m),
              a("update:color", {
                h: e.color?.h ?? 0,
                s: Q(g, 0, d.value) / d.value,
                v: 1 - Q(S, 0, l.value) / l.value,
                a: e.color?.a ?? 1,
              });
          },
        }),
        k = p(() => {
          const { x: m, y: g } = f.value,
            S = parseInt(e.dotSize, 10) / 2;
          return {
            width: A(e.dotSize),
            height: A(e.dotSize),
            transform: `translate(${A(m - S)}, ${A(g - S)})`,
          };
        }),
        { resizeRef: h } = at((m) => {
          if (!h.el?.offsetParent) return;
          const { width: g, height: S } = m[0].contentRect;
          (d.value = g), (l.value = S);
        });
      function y(m, g, S) {
        const { left: R, top: T, width: z, height: _ } = S;
        f.value = { x: Q(m - R, 0, z), y: Q(g - T, 0, _) };
      }
      function b(m) {
        m.type === "mousedown" && m.preventDefault(),
          !e.disabled &&
            (x(m),
            window.addEventListener("mousemove", x),
            window.addEventListener("mouseup", w),
            window.addEventListener("touchmove", x),
            window.addEventListener("touchend", w));
      }
      function x(m) {
        if (e.disabled || !n.value) return;
        r.value = !0;
        const g = lt(m);
        y(g.clientX, g.clientY, n.value.getBoundingClientRect());
      }
      function w() {
        window.removeEventListener("mousemove", x),
          window.removeEventListener("mouseup", w),
          window.removeEventListener("touchmove", x),
          window.removeEventListener("touchend", w);
      }
      function I() {
        if (!n.value) return;
        const m = n.value,
          g = m.getContext("2d");
        if (!g) return;
        const S = g.createLinearGradient(0, 0, m.width, 0);
        S.addColorStop(0, "hsla(0, 0%, 100%, 1)"),
          S.addColorStop(1, `hsla(${e.color?.h ?? 0}, 100%, 50%, 1)`),
          (g.fillStyle = S),
          g.fillRect(0, 0, m.width, m.height);
        const R = g.createLinearGradient(0, 0, 0, m.height);
        R.addColorStop(0, "hsla(0, 0%, 0%, 0)"),
          R.addColorStop(1, "hsla(0, 0%, 0%, 1)"),
          (g.fillStyle = R),
          g.fillRect(0, 0, m.width, m.height);
      }
      return (
        he(() => e.color?.h, I, { immediate: !0 }),
        he(
          () => [d.value, l.value],
          (m, g) => {
            I(),
              (o.value = {
                x: (f.value.x * m[0]) / g[0],
                y: (f.value.y * m[1]) / g[1],
              });
          },
          { flush: "post" },
        ),
        he(
          () => e.color,
          () => {
            if (r.value) {
              r.value = !1;
              return;
            }
            o.value = e.color
              ? { x: e.color.s * d.value, y: (1 - e.color.v) * l.value }
              : { x: 0, y: 0 };
          },
          { deep: !0, immediate: !0 },
        ),
        Ke(() => I()),
        G(() =>
          u(
            "div",
            {
              ref: h,
              class: N(["v-color-picker-canvas", e.class]),
              style: O(e.style),
              onMousedown: b,
              onTouchstartPassive: b,
            },
            [
              u("canvas", { ref: n, width: d.value, height: l.value }, null),
              e.color &&
                u(
                  "div",
                  {
                    class: N([
                      "v-color-picker-canvas__dot",
                      { "v-color-picker-canvas__dot--disabled": e.disabled },
                    ]),
                    style: O(k.value),
                  },
                  null,
                ),
            ],
          ),
        ),
        {}
      );
    },
  });
function Jt(e, t) {
  if (t) {
    const { a, ...r } = e;
    return r;
  }
  return e;
}
function Qt(e, t) {
  if (t == null || typeof t == "string") {
    const a = e.a !== 1;
    if (t?.startsWith("rgb(")) {
      const { r: n, g: d, b: l, a: o } = Ce(e);
      return `rgb(${n} ${d} ${l}` + (a ? ` / ${o})` : ")");
    } else if (t?.startsWith("hsl(")) {
      const { h: n, s: d, l, a: o } = Se(e);
      return (
        `hsl(${n} ${Math.round(d * 100)} ${Math.round(l * 100)}` +
        (a ? ` / ${o})` : ")")
      );
    }
    const r = je(e);
    return e.a === 1 ? r.slice(0, 7) : r;
  }
  if (typeof t == "object") {
    let a;
    return (
      ve(t, ["r", "g", "b"])
        ? (a = Ce(e))
        : ve(t, ["h", "s", "l"])
          ? (a = Se(e))
          : ve(t, ["h", "s", "v"]) && (a = e),
      Jt(a, !ve(t, ["a"]) && e.a === 1)
    );
  }
  return e;
}
const ne = { h: 0, s: 0, v: 0, a: 1 },
  _e = {
    inputProps: { type: "number", min: 0 },
    inputs: [
      {
        label: "R",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.r),
        getColor: (e, t) => ({ ...e, r: Number(t) }),
        localeKey: "redInput",
      },
      {
        label: "G",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.g),
        getColor: (e, t) => ({ ...e, g: Number(t) }),
        localeKey: "greenInput",
      },
      {
        label: "B",
        max: 255,
        step: 1,
        getValue: (e) => Math.round(e.b),
        getColor: (e, t) => ({ ...e, b: Number(t) }),
        localeKey: "blueInput",
      },
      {
        label: "A",
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e;
          return t != null ? Math.round(t * 100) / 100 : 1;
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
        localeKey: "alphaInput",
      },
    ],
    to: Ce,
    from: ge,
  },
  Zt = { ..._e, inputs: _e.inputs?.slice(0, 3) },
  Ee = {
    inputProps: { type: "number", min: 0 },
    inputs: [
      {
        label: "H",
        max: 360,
        step: 1,
        getValue: (e) => Math.round(e.h),
        getColor: (e, t) => ({ ...e, h: Number(t) }),
        localeKey: "hueInput",
      },
      {
        label: "S",
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.s * 100) / 100,
        getColor: (e, t) => ({ ...e, s: Number(t) }),
        localeKey: "saturationInput",
      },
      {
        label: "L",
        max: 1,
        step: 0.01,
        getValue: (e) => Math.round(e.l * 100) / 100,
        getColor: (e, t) => ({ ...e, l: Number(t) }),
        localeKey: "lightnessInput",
      },
      {
        label: "A",
        max: 1,
        step: 0.01,
        getValue: (e) => {
          let { a: t } = e;
          return t != null ? Math.round(t * 100) / 100 : 1;
        },
        getColor: (e, t) => ({ ...e, a: Number(t) }),
        localeKey: "alphaInput",
      },
    ],
    to: Se,
    from: ot,
  },
  ea = { ...Ee, inputs: Ee.inputs.slice(0, 3) },
  Xe = {
    inputProps: { type: "text" },
    inputs: [
      {
        label: "HEXA",
        getValue: (e) => e,
        getColor: (e, t) => t,
        localeKey: "hexaInput",
      },
    ],
    to: je,
    from: nt,
  },
  ta = {
    ...Xe,
    inputs: [
      {
        label: "HEX",
        getValue: (e) => e.slice(0, 7),
        getColor: (e, t) => t,
        localeKey: "hexInput",
      },
    ],
  },
  Z = { rgb: Zt, rgba: _e, hsl: ea, hsla: Ee, hex: ta, hexa: Xe },
  aa = (e) => {
    let { label: t, ...a } = e;
    return u("div", { class: "v-color-picker-edit__input" }, [
      u("input", rt(st(a)), null),
      u("span", null, [t]),
    ]);
  },
  la = q(
    {
      color: Object,
      disabled: Boolean,
      mode: {
        type: String,
        default: "rgba",
        validator: (e) => Object.keys(Z).includes(e),
      },
      modes: {
        type: Array,
        default: () => Object.keys(Z),
        validator: (e) =>
          Array.isArray(e) && e.every((t) => Object.keys(Z).includes(t)),
      },
      ...oe(),
    },
    "VColorPickerEdit",
  ),
  na = ie({
    name: "VColorPickerEdit",
    props: la(),
    emits: { "update:color": (e) => !0, "update:mode": (e) => !0 },
    setup(e, t) {
      let { emit: a } = t;
      const { t: r } = qe(),
        n = p(() => e.modes.map((l) => ({ ...Z[l], name: l }))),
        d = p(() => {
          const l = n.value.find((f) => f.name === e.mode);
          if (!l) return [];
          const o = e.color ? l.to(e.color) : null;
          return l.inputs?.map((f) => {
            let { getValue: k, getColor: h, localeKey: y, ...b } = f;
            return {
              ...l.inputProps,
              ...b,
              ariaLabel: r(`$vuetify.colorPicker.ariaLabel.${y}`),
              disabled: e.disabled,
              value: o && k(o),
              onChange: (x) => {
                const w = x.target;
                w && a("update:color", l.from(h(o ?? l.to(ne), w.value)));
              },
            };
          });
        });
      return (
        G(() =>
          u(
            "div",
            { class: N(["v-color-picker-edit", e.class]), style: O(e.style) },
            [
              d.value?.map((l) => v(aa, l, null)),
              n.value.length > 1 &&
                v(
                  le,
                  {
                    icon: "$unfold",
                    size: "x-small",
                    variant: "plain",
                    "aria-label": r(
                      "$vuetify.colorPicker.ariaLabel.changeFormat",
                    ),
                    onClick: () => {
                      const l = n.value.findIndex((o) => o.name === e.mode);
                      a("update:mode", n.value[(l + 1) % n.value.length].name);
                    },
                  },
                  null,
                ),
            ],
          ),
        ),
        {}
      );
    },
  }),
  ze = Symbol.for("vuetify:v-slider");
function oa(e, t, a) {
  const r = a === "vertical",
    n = t.getBoundingClientRect(),
    d = "touches" in e ? e.touches[0] : e;
  return r
    ? d.clientY - (n.top + n.height / 2)
    : d.clientX - (n.left + n.width / 2);
}
function ra(e, t) {
  return "touches" in e && e.touches.length
    ? e.touches[0][t]
    : "changedTouches" in e && e.changedTouches.length
      ? e.changedTouches[0][t]
      : e[t];
}
const sa = q(
    {
      disabled: { type: Boolean, default: null },
      error: Boolean,
      readonly: { type: Boolean, default: null },
      max: { type: [Number, String], default: 100 },
      min: { type: [Number, String], default: 0 },
      step: { type: [Number, String], default: 0 },
      thumbColor: String,
      thumbLabel: {
        type: [Boolean, String],
        default: void 0,
        validator: (e) => typeof e == "boolean" || e === "always",
      },
      thumbSize: { type: [Number, String], default: 20 },
      showTicks: {
        type: [Boolean, String],
        default: !1,
        validator: (e) => typeof e == "boolean" || e === "always",
      },
      ticks: { type: [Array, Object] },
      tickSize: { type: [Number, String], default: 2 },
      color: String,
      trackColor: String,
      trackFillColor: String,
      trackSize: { type: [Number, String], default: 4 },
      direction: {
        type: String,
        default: "horizontal",
        validator: (e) => ["vertical", "horizontal"].includes(e),
      },
      reverse: Boolean,
      noKeyboard: Boolean,
      ...Ft(),
      ...Tt({ elevation: 2 }),
      ripple: { type: Boolean, default: !0 },
    },
    "Slider",
  ),
  ia = (e) => {
    const t = p(() => parseFloat(e.min)),
      a = p(() => parseFloat(e.max)),
      r = p(() => (Number(e.step) > 0 ? parseFloat(e.step) : 0)),
      n = p(() => Math.max(Be(r.value), Be(t.value)));
    function d(l) {
      if (((l = parseFloat(l)), r.value <= 0)) return l;
      const o = Q(l, t.value, a.value),
        f = t.value % r.value;
      let k = Math.round((o - f) / r.value) * r.value + f;
      return (
        o > k && k + r.value > a.value && (k = a.value),
        parseFloat(Math.min(k, a.value).toFixed(n.value))
      );
    }
    return { min: t, max: a, step: r, decimals: n, roundValue: d };
  },
  ca = (e) => {
    let {
      props: t,
      steps: a,
      onSliderStart: r,
      onSliderMove: n,
      onSliderEnd: d,
      getActiveThumb: l,
    } = e;
    const o = Ht(t),
      { isRtl: f } = pe(),
      k = j(() => t.reverse),
      h = p(() => t.direction === "vertical"),
      y = p(() => h.value !== k.value),
      { min: b, max: x, step: w, decimals: I, roundValue: m } = a,
      g = p(() => parseInt(t.thumbSize, 10)),
      S = p(() => parseInt(t.tickSize, 10)),
      R = p(() => parseInt(t.trackSize, 10)),
      T = p(() => (x.value - b.value) / w.value),
      z = p(() =>
        t.error || o.isDisabled.value ? void 0 : (t.thumbColor ?? t.color),
      ),
      _ = p(() => (t.error || o.isDisabled.value ? void 0 : t.thumbColor)),
      s = p(() =>
        t.error || o.isDisabled.value ? void 0 : (t.trackColor ?? t.color),
      ),
      E = p(() =>
        t.error || o.isDisabled.value ? void 0 : (t.trackFillColor ?? t.color),
      ),
      i = se(!1),
      C = se(0),
      B = M(),
      P = M();
    function H(c) {
      const V = B.value?.$el;
      if (!V) return;
      const Y = t.direction === "vertical",
        de = Y ? "top" : "left",
        fe = Y ? "height" : "width",
        Je = Y ? "clientY" : "clientX",
        { [de]: Qe, [fe]: Ze } = V.getBoundingClientRect(),
        et = ra(c, Je);
      let ye = Q((et - Qe - C.value) / Ze) || 0;
      return (
        (Y ? y.value : y.value !== f.value) && (ye = 1 - ye),
        m(b.value + ye * (x.value - b.value))
      );
    }
    const K = (c) => {
        const V = H(c);
        V != null && d({ value: V }), (i.value = !1), (C.value = 0);
      },
      re = (c) => {
        const V = H(c);
        (P.value = l(c)),
          P.value &&
            ((i.value = !0),
            P.value.contains(c.target)
              ? (C.value = oa(c, P.value, t.direction))
              : ((C.value = 0), V != null && n({ value: V })),
            V != null && r({ value: V }),
            ut(() => P.value?.focus()));
      },
      W = { passive: !0, capture: !0 };
    function $(c) {
      const V = H(c);
      V != null && n({ value: V });
    }
    function U(c) {
      c.stopPropagation(),
        c.preventDefault(),
        K(c),
        window.removeEventListener("mousemove", $, W),
        window.removeEventListener("mouseup", U);
    }
    function ee(c) {
      K(c),
        window.removeEventListener("touchmove", $, W),
        c.target?.removeEventListener("touchend", ee);
    }
    function X(c) {
      re(c),
        window.addEventListener("touchmove", $, W),
        c.target?.addEventListener("touchend", ee, { passive: !1 });
    }
    function ke(c) {
      c.button === 0 &&
        (c.preventDefault(),
        re(c),
        window.addEventListener("mousemove", $, W),
        window.addEventListener("mouseup", U, { passive: !1 }));
    }
    it(() => {
      window.removeEventListener("touchmove", $),
        window.removeEventListener("mousemove", $),
        window.removeEventListener("mouseup", U);
    });
    const te = (c) => {
        const V = ((c - b.value) / (x.value - b.value)) * 100;
        return Q(isNaN(V) ? 0 : V, 0, 100);
      },
      ce = j(() => t.showTicks),
      ue = p(() =>
        ce.value
          ? t.ticks
            ? Array.isArray(t.ticks)
              ? t.ticks.map((c) => ({
                  value: c,
                  position: te(c),
                  label: c.toString(),
                }))
              : Object.keys(t.ticks).map((c) => ({
                  value: parseFloat(c),
                  position: te(parseFloat(c)),
                  label: t.ticks[c],
                }))
            : T.value !== 1 / 0
              ? ct(T.value + 1).map((c) => {
                  const V = b.value + c * w.value;
                  return { value: V, position: te(V) };
                })
              : []
          : [],
      ),
      F = p(() =>
        ue.value.some((c) => {
          let { label: V } = c;
          return !!V;
        }),
      ),
      D = {
        activeThumbRef: P,
        color: j(() => t.color),
        decimals: I,
        disabled: o.isDisabled,
        direction: j(() => t.direction),
        elevation: j(() => t.elevation),
        hasLabels: F,
        isReversed: k,
        indexFromEnd: y,
        min: b,
        max: x,
        mousePressed: i,
        noKeyboard: j(() => t.noKeyboard),
        numTicks: T,
        onSliderMousedown: ke,
        onSliderTouchstart: X,
        parsedTicks: ue,
        parseMouseMove: H,
        position: te,
        readonly: o.isReadonly,
        rounded: j(() => t.rounded),
        roundValue: m,
        showTicks: ce,
        startOffset: C,
        step: w,
        thumbSize: g,
        thumbColor: z,
        thumbLabelColor: _,
        thumbLabel: j(() => t.thumbLabel),
        ticks: j(() => t.ticks),
        tickSize: S,
        trackColor: s,
        trackContainerRef: B,
        trackFillColor: E,
        trackSize: R,
        vertical: h,
      };
    return dt(ze, D), D;
  },
  ua = q(
    {
      focused: Boolean,
      max: { type: Number, required: !0 },
      min: { type: Number, required: !0 },
      modelValue: { type: Number, required: !0 },
      position: { type: Number, required: !0 },
      ripple: { type: [Boolean, Object], default: !0 },
      name: String,
      noKeyboard: Boolean,
      ...oe(),
    },
    "VSliderThumb",
  ),
  da = Re()({
    name: "VSliderThumb",
    directives: { vRipple: Ie },
    props: ua(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: a, emit: r } = t;
      const n = Ue(ze),
        { isRtl: d, rtlClasses: l } = pe();
      if (!n)
        throw new Error(
          "[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider",
        );
      const {
          min: o,
          max: f,
          thumbColor: k,
          thumbLabelColor: h,
          step: y,
          disabled: b,
          thumbSize: x,
          thumbLabel: w,
          direction: I,
          isReversed: m,
          vertical: g,
          readonly: S,
          elevation: R,
          mousePressed: T,
          decimals: z,
          indexFromEnd: _,
        } = n,
        s = p(() => (b.value ? void 0 : R.value)),
        { elevationClasses: E } = Mt(s),
        { textColorClasses: i, textColorStyles: C } = Nt(k),
        { backgroundColorClasses: B, backgroundColorStyles: P } = xe(h),
        {
          pageup: H,
          pagedown: K,
          end: re,
          home: W,
          left: $,
          right: U,
          down: ee,
          up: X,
        } = ft,
        ke = [H, K, re, W, $, U, ee, X],
        te = p(() => (y.value ? [1, 2, 3] : [1, 5, 10]));
      function ce(F, D) {
        if (e.noKeyboard || b.value || !ke.includes(F.key)) return;
        F.preventDefault();
        const c = y.value || 0.1,
          V = (f.value - o.value) / c;
        if ([$, U, ee, X].includes(F.key)) {
          const de = (g.value
              ? [d.value ? $ : U, m.value ? ee : X]
              : _.value !== d.value
                ? [$, X]
                : [U, X]
            ).includes(F.key)
              ? 1
              : -1,
            fe = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
          de === -1 && D === f.value && !fe && !Number.isInteger(V)
            ? (D = D - (V % 1) * c)
            : (D = D + de * c * te.value[fe]);
        } else if (F.key === W) D = o.value;
        else if (F.key === re) D = f.value;
        else {
          const Y = F.key === K ? 1 : -1;
          D = D - Y * c * (V > 100 ? V / 10 : 10);
        }
        return Math.max(e.min, Math.min(e.max, D));
      }
      function ue(F) {
        const D = ce(F, e.modelValue);
        D != null && r("update:modelValue", D);
      }
      return (
        G(() => {
          const F = A(_.value ? 100 - e.position : e.position, "%");
          return u(
            "div",
            {
              class: N([
                "v-slider-thumb",
                {
                  "v-slider-thumb--focused": e.focused,
                  "v-slider-thumb--pressed": e.focused && T.value,
                },
                e.class,
                l.value,
              ]),
              style: O([
                {
                  "--v-slider-thumb-position": F,
                  "--v-slider-thumb-size": A(x.value),
                },
                e.style,
              ]),
              role: "slider",
              tabindex: b.value ? -1 : 0,
              "aria-label": e.name,
              "aria-valuemin": o.value,
              "aria-valuemax": f.value,
              "aria-valuenow": e.modelValue,
              "aria-readonly": !!S.value,
              "aria-orientation": I.value,
              onKeydown: S.value ? void 0 : ue,
            },
            [
              u(
                "div",
                {
                  class: N(["v-slider-thumb__surface", i.value, E.value]),
                  style: O(C.value),
                },
                null,
              ),
              De(
                u(
                  "div",
                  {
                    class: N(["v-slider-thumb__ripple", i.value]),
                    style: O(C.value),
                  },
                  null,
                ),
                [[Ie, e.ripple, null, { circle: !0, center: !0 }]],
              ),
              v(
                Ot,
                { origin: "bottom center" },
                {
                  default: () => [
                    De(
                      u("div", { class: "v-slider-thumb__label-container" }, [
                        u(
                          "div",
                          {
                            class: N(["v-slider-thumb__label", B.value]),
                            style: O(P.value),
                          },
                          [
                            u("div", null, [
                              a["thumb-label"]?.({
                                modelValue: e.modelValue,
                              }) ?? e.modelValue.toFixed(y.value ? z.value : 1),
                            ]),
                            u(
                              "div",
                              { class: "v-slider-thumb__label-wedge" },
                              null,
                            ),
                          ],
                        ),
                      ]),
                      [[vt, (w.value && e.focused) || w.value === "always"]],
                    ),
                  ],
                },
              ),
            ],
          );
        }),
        {}
      );
    },
  }),
  fa = q(
    {
      start: { type: Number, required: !0 },
      stop: { type: Number, required: !0 },
      ...oe(),
    },
    "VSliderTrack",
  ),
  va = Re()({
    name: "VSliderTrack",
    props: fa(),
    emits: {},
    setup(e, t) {
      let { slots: a } = t;
      const r = Ue(ze);
      if (!r)
        throw new Error(
          "[Vuetify] v-slider-track must be inside v-slider or v-range-slider",
        );
      const {
          color: n,
          parsedTicks: d,
          rounded: l,
          showTicks: o,
          tickSize: f,
          trackColor: k,
          trackFillColor: h,
          trackSize: y,
          vertical: b,
          min: x,
          max: w,
          indexFromEnd: I,
        } = r,
        { roundedClasses: m } = It(l),
        { backgroundColorClasses: g, backgroundColorStyles: S } = xe(h),
        { backgroundColorClasses: R, backgroundColorStyles: T } = xe(k),
        z = p(
          () =>
            `inset-${b.value ? "block" : "inline"}-${I.value ? "end" : "start"}`,
        ),
        _ = p(() => (b.value ? "height" : "width")),
        s = p(() => ({ [z.value]: "0%", [_.value]: "100%" })),
        E = p(() => e.stop - e.start),
        i = p(() => ({
          [z.value]: A(e.start, "%"),
          [_.value]: A(E.value, "%"),
        })),
        C = p(() =>
          o.value
            ? (b.value ? d.value.slice().reverse() : d.value).map((P, H) => {
                const K =
                  P.value !== x.value && P.value !== w.value
                    ? A(P.position, "%")
                    : void 0;
                return u(
                  "div",
                  {
                    key: P.value,
                    class: N([
                      "v-slider-track__tick",
                      {
                        "v-slider-track__tick--filled":
                          P.position >= e.start && P.position <= e.stop,
                        "v-slider-track__tick--first": P.value === x.value,
                        "v-slider-track__tick--last": P.value === w.value,
                      },
                    ]),
                    style: { [z.value]: K },
                  },
                  [
                    (P.label || a["tick-label"]) &&
                      u("div", { class: "v-slider-track__tick-label" }, [
                        a["tick-label"]?.({ tick: P, index: H }) ?? P.label,
                      ]),
                  ],
                );
              })
            : [],
        );
      return (
        G(() =>
          u(
            "div",
            {
              class: N(["v-slider-track", m.value, e.class]),
              style: O([
                {
                  "--v-slider-track-size": A(y.value),
                  "--v-slider-tick-size": A(f.value),
                },
                e.style,
              ]),
            },
            [
              u(
                "div",
                {
                  class: N([
                    "v-slider-track__background",
                    R.value,
                    {
                      "v-slider-track__background--opacity":
                        !!n.value || !h.value,
                    },
                  ]),
                  style: { ...s.value, ...T.value },
                },
                null,
              ),
              u(
                "div",
                {
                  class: N(["v-slider-track__fill", g.value]),
                  style: { ...i.value, ...S.value },
                },
                null,
              ),
              o.value &&
                u(
                  "div",
                  {
                    class: N([
                      "v-slider-track__ticks",
                      {
                        "v-slider-track__ticks--always-show":
                          o.value === "always",
                      },
                    ]),
                  },
                  [C.value],
                ),
            ],
          ),
        ),
        {}
      );
    },
  }),
  ma = q(
    {
      ...Ut(),
      ...sa(),
      ...qt(),
      modelValue: { type: [Number, String], default: 0 },
    },
    "VSlider",
  ),
  Oe = Re()({
    name: "VSlider",
    props: ma(),
    emits: {
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      start: (e) => !0,
      end: (e) => !0,
    },
    setup(e, t) {
      let { slots: a, emit: r } = t;
      const n = M(),
        d = M(),
        { rtlClasses: l } = pe(),
        o = ia(e),
        f = Ve(e, "modelValue", void 0, (i) => o.roundValue(i ?? o.min.value)),
        {
          min: k,
          max: h,
          mousePressed: y,
          roundValue: b,
          onSliderMousedown: x,
          onSliderTouchstart: w,
          trackContainerRef: I,
          position: m,
          hasLabels: g,
          disabled: S,
          readonly: R,
          noKeyboard: T,
        } = ca({
          props: e,
          steps: o,
          onSliderStart: () => {
            !S.value && !R.value && r("start", f.value);
          },
          onSliderEnd: (i) => {
            let { value: C } = i;
            const B = b(C);
            !S.value && !R.value && (f.value = B), r("end", B);
          },
          onSliderMove: (i) => {
            let { value: C } = i;
            !S.value && !R.value && (f.value = b(C));
          },
          getActiveThumb: () => n.value?.$el,
        }),
        { isFocused: z, focus: _, blur: s } = Kt(e),
        E = p(() => m(f.value));
      return (
        G(() => {
          const i = Ae.filterProps(e),
            C = !!(e.label || a.label || a.prepend);
          return v(
            Ae,
            be(
              {
                ref: d,
                class: [
                  "v-slider",
                  {
                    "v-slider--has-labels": !!a["tick-label"] || g.value,
                    "v-slider--focused": z.value,
                    "v-slider--pressed": y.value,
                    "v-slider--disabled": S.value,
                  },
                  l.value,
                  e.class,
                ],
                style: e.style,
              },
              i,
              { focused: z.value },
            ),
            {
              ...a,
              prepend: C
                ? (B) =>
                    u(Ge, null, [
                      a.label?.(B) ??
                        (e.label
                          ? v(
                              jt,
                              {
                                id: B.id.value,
                                class: "v-slider__label",
                                text: e.label,
                              },
                              null,
                            )
                          : void 0),
                      a.prepend?.(B),
                    ])
                : void 0,
              default: (B) => {
                let { id: P, messagesId: H } = B;
                return u(
                  "div",
                  {
                    class: "v-slider__container",
                    onMousedown: R.value ? void 0 : x,
                    onTouchstartPassive: R.value ? void 0 : w,
                  },
                  [
                    u(
                      "input",
                      {
                        id: P.value,
                        name: e.name || P.value,
                        disabled: S.value,
                        readonly: R.value,
                        tabindex: "-1",
                        value: f.value,
                      },
                      null,
                    ),
                    v(
                      va,
                      { ref: I, start: 0, stop: E.value },
                      { "tick-label": a["tick-label"] },
                    ),
                    v(
                      da,
                      {
                        ref: n,
                        "aria-describedby": H.value,
                        focused: z.value,
                        noKeyboard: T.value,
                        min: k.value,
                        max: h.value,
                        modelValue: f.value,
                        "onUpdate:modelValue": (K) => (f.value = K),
                        position: E.value,
                        elevation: e.elevation,
                        onFocus: _,
                        onBlur: s,
                        ripple: e.ripple,
                        name: e.name,
                      },
                      { "thumb-label": a["thumb-label"] },
                    ),
                  ],
                );
              },
            },
          );
        }),
        At({ focus: () => n.value?.$el.focus() }, d)
      );
    },
  }),
  Ye = q(
    {
      color: { type: Object },
      disabled: Boolean,
      hideAlpha: Boolean,
      hideEyeDropper: Boolean,
      eyeDropperIcon: { type: ht, default: "$eyeDropper" },
      ...oe(),
    },
    "VColorPickerPreview",
  ),
  ha = ie({
    name: "VColorPickerPreview",
    props: Ye(),
    emits: { "update:color": (e) => !0 },
    setup(e, t) {
      let { emit: a } = t;
      const { t: r } = qe(),
        n = new AbortController();
      mt(() => n.abort());
      async function d() {
        if (!Te || e.disabled) return;
        const l = new window.EyeDropper();
        try {
          const o = await l.open({ signal: n.signal }),
            f = ge(Le(o.sRGBHex));
          a("update:color", { ...(e.color ?? ne), ...f });
        } catch {}
      }
      return (
        G(() =>
          u(
            "div",
            {
              class: N([
                "v-color-picker-preview",
                { "v-color-picker-preview--hide-alpha": e.hideAlpha },
                e.class,
              ]),
              style: O(e.style),
            },
            [
              Te &&
                !e.hideEyeDropper &&
                u(
                  "div",
                  {
                    class: "v-color-picker-preview__eye-dropper",
                    key: "eyeDropper",
                  },
                  [
                    v(
                      le,
                      {
                        "aria-label": r(
                          "$vuetify.colorPicker.ariaLabel.eyedropper",
                        ),
                        density: "comfortable",
                        disabled: e.disabled,
                        icon: e.eyeDropperIcon,
                        variant: "plain",
                        onClick: d,
                      },
                      null,
                    ),
                  ],
                ),
              u("div", { class: "v-color-picker-preview__dot" }, [
                u("div", { style: { background: We(e.color ?? ne) } }, null),
              ]),
              u("div", { class: "v-color-picker-preview__sliders" }, [
                v(
                  Oe,
                  {
                    class:
                      "v-color-picker-preview__track v-color-picker-preview__hue",
                    name: r("$vuetify.colorPicker.ariaLabel.hueSlider"),
                    modelValue: e.color?.h,
                    "onUpdate:modelValue": (l) =>
                      a("update:color", { ...(e.color ?? ne), h: l }),
                    step: 1,
                    min: 0,
                    max: 360,
                    disabled: e.disabled,
                    thumbSize: 14,
                    trackSize: 8,
                    trackFillColor: "white",
                    hideDetails: !0,
                  },
                  null,
                ),
                !e.hideAlpha &&
                  v(
                    Oe,
                    {
                      class:
                        "v-color-picker-preview__track v-color-picker-preview__alpha",
                      name: r("$vuetify.colorPicker.ariaLabel.alphaSlider"),
                      modelValue: e.color?.a ?? 1,
                      "onUpdate:modelValue": (l) =>
                        a("update:color", { ...(e.color ?? ne), a: l }),
                      step: 0.01,
                      min: 0,
                      max: 1,
                      disabled: e.disabled,
                      thumbSize: 14,
                      trackSize: 8,
                      trackFillColor: "white",
                      hideDetails: !0,
                    },
                    null,
                  ),
              ]),
            ],
          ),
        ),
        {}
      );
    },
  }),
  ba = {
    base: "#f44336",
    lighten5: "#ffebee",
    lighten4: "#ffcdd2",
    lighten3: "#ef9a9a",
    lighten2: "#e57373",
    lighten1: "#ef5350",
    darken1: "#e53935",
    darken2: "#d32f2f",
    darken3: "#c62828",
    darken4: "#b71c1c",
    accent1: "#ff8a80",
    accent2: "#ff5252",
    accent3: "#ff1744",
    accent4: "#d50000",
  },
  ga = {
    base: "#e91e63",
    lighten5: "#fce4ec",
    lighten4: "#f8bbd0",
    lighten3: "#f48fb1",
    lighten2: "#f06292",
    lighten1: "#ec407a",
    darken1: "#d81b60",
    darken2: "#c2185b",
    darken3: "#ad1457",
    darken4: "#880e4f",
    accent1: "#ff80ab",
    accent2: "#ff4081",
    accent3: "#f50057",
    accent4: "#c51162",
  },
  pa = {
    base: "#9c27b0",
    lighten5: "#f3e5f5",
    lighten4: "#e1bee7",
    lighten3: "#ce93d8",
    lighten2: "#ba68c8",
    lighten1: "#ab47bc",
    darken1: "#8e24aa",
    darken2: "#7b1fa2",
    darken3: "#6a1b9a",
    darken4: "#4a148c",
    accent1: "#ea80fc",
    accent2: "#e040fb",
    accent3: "#d500f9",
    accent4: "#aa00ff",
  },
  ka = {
    base: "#673ab7",
    lighten5: "#ede7f6",
    lighten4: "#d1c4e9",
    lighten3: "#b39ddb",
    lighten2: "#9575cd",
    lighten1: "#7e57c2",
    darken1: "#5e35b1",
    darken2: "#512da8",
    darken3: "#4527a0",
    darken4: "#311b92",
    accent1: "#b388ff",
    accent2: "#7c4dff",
    accent3: "#651fff",
    accent4: "#6200ea",
  },
  ya = {
    base: "#3f51b5",
    lighten5: "#e8eaf6",
    lighten4: "#c5cae9",
    lighten3: "#9fa8da",
    lighten2: "#7986cb",
    lighten1: "#5c6bc0",
    darken1: "#3949ab",
    darken2: "#303f9f",
    darken3: "#283593",
    darken4: "#1a237e",
    accent1: "#8c9eff",
    accent2: "#536dfe",
    accent3: "#3d5afe",
    accent4: "#304ffe",
  },
  wa = {
    base: "#2196f3",
    lighten5: "#e3f2fd",
    lighten4: "#bbdefb",
    lighten3: "#90caf9",
    lighten2: "#64b5f6",
    lighten1: "#42a5f5",
    darken1: "#1e88e5",
    darken2: "#1976d2",
    darken3: "#1565c0",
    darken4: "#0d47a1",
    accent1: "#82b1ff",
    accent2: "#448aff",
    accent3: "#2979ff",
    accent4: "#2962ff",
  },
  Sa = {
    base: "#03a9f4",
    lighten5: "#e1f5fe",
    lighten4: "#b3e5fc",
    lighten3: "#81d4fa",
    lighten2: "#4fc3f7",
    lighten1: "#29b6f6",
    darken1: "#039be5",
    darken2: "#0288d1",
    darken3: "#0277bd",
    darken4: "#01579b",
    accent1: "#80d8ff",
    accent2: "#40c4ff",
    accent3: "#00b0ff",
    accent4: "#0091ea",
  },
  Ca = {
    base: "#00bcd4",
    lighten5: "#e0f7fa",
    lighten4: "#b2ebf2",
    lighten3: "#80deea",
    lighten2: "#4dd0e1",
    lighten1: "#26c6da",
    darken1: "#00acc1",
    darken2: "#0097a7",
    darken3: "#00838f",
    darken4: "#006064",
    accent1: "#84ffff",
    accent2: "#18ffff",
    accent3: "#00e5ff",
    accent4: "#00b8d4",
  },
  Va = {
    base: "#009688",
    lighten5: "#e0f2f1",
    lighten4: "#b2dfdb",
    lighten3: "#80cbc4",
    lighten2: "#4db6ac",
    lighten1: "#26a69a",
    darken1: "#00897b",
    darken2: "#00796b",
    darken3: "#00695c",
    darken4: "#004d40",
    accent1: "#a7ffeb",
    accent2: "#64ffda",
    accent3: "#1de9b6",
    accent4: "#00bfa5",
  },
  xa = {
    base: "#4caf50",
    lighten5: "#e8f5e9",
    lighten4: "#c8e6c9",
    lighten3: "#a5d6a7",
    lighten2: "#81c784",
    lighten1: "#66bb6a",
    darken1: "#43a047",
    darken2: "#388e3c",
    darken3: "#2e7d32",
    darken4: "#1b5e20",
    accent1: "#b9f6ca",
    accent2: "#69f0ae",
    accent3: "#00e676",
    accent4: "#00c853",
  },
  Pa = {
    base: "#8bc34a",
    lighten5: "#f1f8e9",
    lighten4: "#dcedc8",
    lighten3: "#c5e1a5",
    lighten2: "#aed581",
    lighten1: "#9ccc65",
    darken1: "#7cb342",
    darken2: "#689f38",
    darken3: "#558b2f",
    darken4: "#33691e",
    accent1: "#ccff90",
    accent2: "#b2ff59",
    accent3: "#76ff03",
    accent4: "#64dd17",
  },
  _a = {
    base: "#cddc39",
    lighten5: "#f9fbe7",
    lighten4: "#f0f4c3",
    lighten3: "#e6ee9c",
    lighten2: "#dce775",
    lighten1: "#d4e157",
    darken1: "#c0ca33",
    darken2: "#afb42b",
    darken3: "#9e9d24",
    darken4: "#827717",
    accent1: "#f4ff81",
    accent2: "#eeff41",
    accent3: "#c6ff00",
    accent4: "#aeea00",
  },
  Ea = {
    base: "#ffeb3b",
    lighten5: "#fffde7",
    lighten4: "#fff9c4",
    lighten3: "#fff59d",
    lighten2: "#fff176",
    lighten1: "#ffee58",
    darken1: "#fdd835",
    darken2: "#fbc02d",
    darken3: "#f9a825",
    darken4: "#f57f17",
    accent1: "#ffff8d",
    accent2: "#ffff00",
    accent3: "#ffea00",
    accent4: "#ffd600",
  },
  Ra = {
    base: "#ffc107",
    lighten5: "#fff8e1",
    lighten4: "#ffecb3",
    lighten3: "#ffe082",
    lighten2: "#ffd54f",
    lighten1: "#ffca28",
    darken1: "#ffb300",
    darken2: "#ffa000",
    darken3: "#ff8f00",
    darken4: "#ff6f00",
    accent1: "#ffe57f",
    accent2: "#ffd740",
    accent3: "#ffc400",
    accent4: "#ffab00",
  },
  La = {
    base: "#ff9800",
    lighten5: "#fff3e0",
    lighten4: "#ffe0b2",
    lighten3: "#ffcc80",
    lighten2: "#ffb74d",
    lighten1: "#ffa726",
    darken1: "#fb8c00",
    darken2: "#f57c00",
    darken3: "#ef6c00",
    darken4: "#e65100",
    accent1: "#ffd180",
    accent2: "#ffab40",
    accent3: "#ff9100",
    accent4: "#ff6d00",
  },
  za = {
    base: "#ff5722",
    lighten5: "#fbe9e7",
    lighten4: "#ffccbc",
    lighten3: "#ffab91",
    lighten2: "#ff8a65",
    lighten1: "#ff7043",
    darken1: "#f4511e",
    darken2: "#e64a19",
    darken3: "#d84315",
    darken4: "#bf360c",
    accent1: "#ff9e80",
    accent2: "#ff6e40",
    accent3: "#ff3d00",
    accent4: "#dd2c00",
  },
  Ba = {
    base: "#795548",
    lighten5: "#efebe9",
    lighten4: "#d7ccc8",
    lighten3: "#bcaaa4",
    lighten2: "#a1887f",
    lighten1: "#8d6e63",
    darken1: "#6d4c41",
    darken2: "#5d4037",
    darken3: "#4e342e",
    darken4: "#3e2723",
  },
  Da = {
    base: "#607d8b",
    lighten5: "#eceff1",
    lighten4: "#cfd8dc",
    lighten3: "#b0bec5",
    lighten2: "#90a4ae",
    lighten1: "#78909c",
    darken1: "#546e7a",
    darken2: "#455a64",
    darken3: "#37474f",
    darken4: "#263238",
  },
  Ta = {
    base: "#9e9e9e",
    lighten5: "#fafafa",
    lighten4: "#f5f5f5",
    lighten3: "#eeeeee",
    lighten2: "#e0e0e0",
    lighten1: "#bdbdbd",
    darken1: "#757575",
    darken2: "#616161",
    darken3: "#424242",
    darken4: "#212121",
  },
  Fa = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" },
  Ma = {
    red: ba,
    pink: ga,
    purple: pa,
    deepPurple: ka,
    indigo: ya,
    blue: wa,
    lightBlue: Sa,
    cyan: Ca,
    teal: Va,
    green: xa,
    lightGreen: Pa,
    lime: _a,
    yellow: Ea,
    amber: Ra,
    orange: La,
    deepOrange: za,
    brown: Ba,
    blueGrey: Da,
    grey: Ta,
    shades: Fa,
  },
  Na = q(
    {
      swatches: { type: Array, default: () => Ia(Ma) },
      disabled: Boolean,
      color: Object,
      maxHeight: [Number, String],
      ...oe(),
    },
    "VColorPickerSwatches",
  );
function Ia(e) {
  return Object.keys(e).map((t) => {
    const a = e[t];
    return a.base
      ? [
          a.base,
          a.darken4,
          a.darken3,
          a.darken2,
          a.darken1,
          a.lighten1,
          a.lighten2,
          a.lighten3,
          a.lighten4,
          a.lighten5,
        ]
      : [a.black, a.white, a.transparent];
  });
}
const Aa = ie({
    name: "VColorPickerSwatches",
    props: Na(),
    emits: { "update:color": (e) => !0 },
    setup(e, t) {
      let { emit: a } = t;
      return (
        G(() =>
          u(
            "div",
            {
              class: N(["v-color-picker-swatches", e.class]),
              style: O([{ maxHeight: A(e.maxHeight) }, e.style]),
            },
            [
              u("div", null, [
                e.swatches.map((r) =>
                  u("div", { class: "v-color-picker-swatches__swatch" }, [
                    r.map((n) => {
                      const d = Le(n),
                        l = ge(d),
                        o = bt(d);
                      return u(
                        "div",
                        {
                          class: "v-color-picker-swatches__color",
                          onClick: () => l && a("update:color", l),
                        },
                        [
                          u("div", { style: { background: o } }, [
                            e.color && $t(e.color, l)
                              ? v(
                                  Pe,
                                  {
                                    size: "x-small",
                                    icon: "$success",
                                    color:
                                      gt(n, "#FFFFFF") > 2 ? "white" : "black",
                                  },
                                  null,
                                )
                              : void 0,
                          ]),
                        ],
                      );
                    }),
                  ]),
                ),
              ]),
            ],
          ),
        ),
        {}
      );
    },
  }),
  $a = q(
    {
      canvasHeight: { type: [String, Number], default: 150 },
      disabled: Boolean,
      dotSize: { type: [Number, String], default: 10 },
      hideCanvas: Boolean,
      hideSliders: Boolean,
      hideInputs: Boolean,
      mode: {
        type: String,
        default: "rgba",
        validator: (e) => Object.keys(Z).includes(e),
      },
      modes: {
        type: Array,
        default: () => Object.keys(Z),
        validator: (e) =>
          Array.isArray(e) && e.every((t) => Object.keys(Z).includes(t)),
      },
      showSwatches: Boolean,
      swatches: Array,
      swatchesMaxHeight: { type: [Number, String], default: 150 },
      modelValue: { type: [Object, String] },
      ...Gt({ hideHeader: !0 }),
      ...yt(Ye(), ["hideEyeDropper", "eyeDropperIcon"]),
    },
    "VColorPicker",
  ),
  Ha = ie({
    name: "VColorPicker",
    props: $a(),
    emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 },
    setup(e, t) {
      let { slots: a } = t;
      const r = Ve(e, "mode"),
        n = M(null),
        d = Ve(
          e,
          "modelValue",
          void 0,
          (h) => {
            if (h == null || h === "") return null;
            let y;
            try {
              y = ge(Le(h));
            } catch {
              return null;
            }
            return y;
          },
          (h) => (h ? Qt(h, e.modelValue) : null),
        ),
        l = p(() => (d.value ? { ...d.value, h: n.value ?? d.value.h } : null)),
        { rtlClasses: o } = pe();
      let f = !0;
      he(
        d,
        (h) => {
          if (!f) {
            f = !0;
            return;
          }
          h && (n.value = h.h);
        },
        { immediate: !0 },
      );
      const k = (h) => {
        (f = !1), (n.value = h.h), (d.value = h);
      };
      return (
        pt(() => {
          e.modes.includes(r.value) || (r.value = e.modes[0]);
        }),
        kt({
          VSlider: {
            color: void 0,
            trackColor: void 0,
            trackFillColor: void 0,
          },
        }),
        G(() => {
          const h = He.filterProps(e);
          return v(
            He,
            be(h, {
              class: ["v-color-picker", o.value, e.class],
              style: [
                {
                  "--v-color-picker-color-hsv": We({
                    ...(l.value ?? ne),
                    a: 1,
                  }),
                },
                e.style,
              ],
            }),
            {
              ...a,
              default: () =>
                u(Ge, null, [
                  !e.hideCanvas &&
                    v(
                      Yt,
                      {
                        key: "canvas",
                        color: l.value,
                        "onUpdate:color": k,
                        disabled: e.disabled,
                        dotSize: e.dotSize,
                        width: e.width,
                        height: e.canvasHeight,
                      },
                      null,
                    ),
                  (!e.hideSliders || !e.hideInputs) &&
                    u(
                      "div",
                      { key: "controls", class: "v-color-picker__controls" },
                      [
                        !e.hideSliders &&
                          v(
                            ha,
                            {
                              key: "preview",
                              color: l.value,
                              "onUpdate:color": k,
                              hideAlpha: !r.value.endsWith("a"),
                              disabled: e.disabled,
                              hideEyeDropper: e.hideEyeDropper,
                              eyeDropperIcon: e.eyeDropperIcon,
                            },
                            null,
                          ),
                        !e.hideInputs &&
                          v(
                            na,
                            {
                              key: "edit",
                              modes: e.modes,
                              mode: r.value,
                              "onUpdate:mode": (y) => (r.value = y),
                              color: l.value,
                              "onUpdate:color": k,
                              disabled: e.disabled,
                            },
                            null,
                          ),
                      ],
                    ),
                  e.showSwatches &&
                    v(
                      Aa,
                      {
                        key: "swatches",
                        color: l.value,
                        "onUpdate:color": k,
                        maxHeight: e.swatchesMaxHeight,
                        swatches: e.swatches,
                        disabled: e.disabled,
                      },
                      null,
                    ),
                ]),
            },
          );
        }),
        {}
      );
    },
  }),
  Oa = { class: "pl-10 pr-10" },
  Ka = { class: "divcenterpage" },
  ja = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  qa = { class: "mt-4" },
  fl = {
    __name: "colors",
    setup(e) {
      const t = _t(),
        a = wt();
      St();
      const { status: r, signIn: n, signOut: d, data: l } = Ct(),
        o = M([]),
        f = M(""),
        k = Vt("snackbar"),
        h = M(!0),
        y = M(!1),
        b = M("#CCC"),
        x = M(0),
        w = M(""),
        I = M(!1),
        m = [
          { title: "Colore", key: "color", sortable: !0, align: "left" },
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      Rt({
        title: "Attività",
        meta: [{ name: "description", content: "Attività" }],
      });
      const g = (_) => {
          (y.value = !0),
            (b.value = _.color),
            (w.value = _.name),
            (x.value = _.id);
        },
        S = async () => {
          let _ = {
            id: x.value,
            color: b.value,
            status: "A",
            name: w.value != "" ? w.value : b.value,
          };
          await we(t.public.apiBaseurl + "projectcolor/createedit", {
            method: "POST",
            body: _,
          })
            .then(() => {
              (k.value = {
                text: "Creazione colore completata",
                type: "success",
                show: !0,
              }),
                T(),
                (y.value = !1),
                (w.value = ""),
                (x.value = 0);
            })
            .catch((s) => {
              let E = JSON.parse(s.data).errors.title;
              console.log("catcherr", s.data),
                (k.value = { text: E, type: "danger", show: !0 });
            });
        };
      function R(_) {
        const { data: s } = we(
          t.public.apiBaseurl + "projectcolor/delete/" + _,
          {
            onRequest({ request: E, options: i }) {},
            onRequestError({ request: E, options: i, error: C }) {
              console.log("Errore nella request:", C);
            },
            onResponseError({ request: E, response: i, options: C }) {
              k.value = {
                text: "Errore cancellazione colore",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: E, response: i, options: C }) {
              (k.value = {
                text: "Colore eliminato",
                type: "success",
                show: !0,
              }),
                T();
            },
          },
        );
      }
      const T = async () => {
        o.value = [];
        const { data: _ } = await we(
          t.public.apiBaseurl + "projectcolor/list",
          {
            onRequest({ request: s, options: E }) {},
            onRequestError({ request: s, options: E, error: i }) {
              console.log("Errore nella request:", i);
            },
            onResponseError({ request: s, response: E, options: i }) {
              k.value = {
                text: "Errore caricamento colori",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: s, response: E, options: i }) {
              E._data.data.forEach((C) => {
                let B = C.Projectcolor;
                o.value.push(B);
              });
            },
          },
        );
      };
      function z() {
        I.value = window.innerWidth <= 960;
      }
      return (
        Ke(async () => {
          l.value.role != "S"
            ? a.push("/")
            : (z(), window.addEventListener("resize", z), await T());
        }),
        xt(() => {
          window.removeEventListener("resize", z);
        }),
        (_, s) => {
          const E = tt;
          return (
            Et(),
            Pt("div", Oa, [
              u("div", Ka, [
                s[11] || (s[11] = u("br", null, null, -1)),
                s[12] ||
                  (s[12] = u(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Definizione Colori Progetto",
                    -1,
                  )),
                u("div", ja, [
                  v(
                    Fe,
                    {
                      modelValue: J(y),
                      "onUpdate:modelValue":
                        s[3] || (s[3] = (i) => (me(y) ? (y.value = i) : null)),
                      "close-on-content-click": !1,
                      location: "bottom",
                    },
                    {
                      activator: L(({ props: i }) => [
                        v(
                          le,
                          be(i, { color: "green" }),
                          {
                            default: L(() => [
                              v(Pe, null, {
                                default: L(() => [
                                  ...(s[5] || (s[5] = [ae("mdi-plus", -1)])),
                                ]),
                                _: 1,
                              }),
                              s[6] || (s[6] = ae(" Crea colore ", -1)),
                            ]),
                            _: 1,
                          },
                          16,
                        ),
                      ]),
                      default: L(() => [
                        v(Bt, null, {
                          default: L(() => [
                            v(
                              Ha,
                              {
                                elevation: "0",
                                modelValue: J(b),
                                "onUpdate:modelValue":
                                  s[0] ||
                                  (s[0] = (i) =>
                                    me(b) ? (b.value = i) : null),
                                "hide-inputs": "",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                            v(
                              $e,
                              {
                                class: "ma-2",
                                modelValue: J(w),
                                "onUpdate:modelValue":
                                  s[1] ||
                                  (s[1] = (i) =>
                                    me(w) ? (w.value = i) : null),
                                variant: "outlined",
                                label: "Nome Colore",
                                density: "compact",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                            v(
                              Dt,
                              { class: "justify-end" },
                              {
                                default: L(() => [
                                  v(
                                    le,
                                    {
                                      variant: "text",
                                      onClick:
                                        s[2] || (s[2] = (i) => (y.value = !1)),
                                    },
                                    {
                                      default: L(() => [
                                        ...(s[7] ||
                                          (s[7] = [ae(" Annulla ", -1)])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  v(
                                    le,
                                    { color: "primary", onClick: S },
                                    {
                                      default: L(() => [
                                        ...(s[8] ||
                                          (s[8] = [ae(" Salva ", -1)])),
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
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"],
                  ),
                ]),
                s[13] ||
                  (s[13] = u("div", { style: { clear: "both" } }, null, -1)),
                v(
                  zt,
                  {
                    density: "compact",
                    items: J(o),
                    headers: m,
                    search: J(f),
                    "items-per-page": 15,
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
                    top: L(() => [
                      v(
                        $e,
                        {
                          modelValue: J(f),
                          "onUpdate:modelValue":
                            s[4] ||
                            (s[4] = (i) => (me(f) ? (f.value = i) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca",
                          density: "compact",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.color": L(({ item: i }) => [
                      v(
                        Wt,
                        {
                          title: i.id,
                          color: i.color,
                          content: i.color,
                          height: "20px",
                          width: "150px",
                          inline: "",
                        },
                        null,
                        8,
                        ["title", "color", "content"],
                      ),
                    ]),
                    "item.actions": L(({ item: i }) => [
                      v(
                        Fe,
                        { "offset-y": "" },
                        {
                          activator: L(({ props: C }) => [
                            v(
                              le,
                              be(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                C,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: L(() => [
                            u("div", qa, [
                              v(
                                Lt,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: L(() => [
                                    v(
                                      Me,
                                      {
                                        onClick: (C) => g(i),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: L(() => [
                                          v(
                                            Pe,
                                            { style: { opacity: "1" } },
                                            {
                                              default: L(() => [
                                                ...(s[9] ||
                                                  (s[9] = [
                                                    ae("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: L(() => [
                                          v(
                                            Ne,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: L(() => [
                                                ...(s[10] ||
                                                  (s[10] = [
                                                    ae("Modifica", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick"],
                                    ),
                                    v(
                                      Me,
                                      { dense: "", exact: "" },
                                      {
                                        default: L(() => [
                                          v(
                                            Ne,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: L(() => [
                                                v(
                                                  E,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (C) => R(i.id),
                                                    iconadelete: J(h),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare questa colore " +
                                                      i.color +
                                                      "?",
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "onDelete",
                                                    "iconadelete",
                                                    "text",
                                                  ],
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024,
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
              ]),
            ])
          );
        }
      );
    },
  };
export { fl as default };
