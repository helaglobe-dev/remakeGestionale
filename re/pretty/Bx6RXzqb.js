import { u as me, V as Z, g as fe } from "./BrCrqdgZ.js";
import {
  aN as q,
  U as pe,
  V as ge,
  r as be,
  k as h,
  s as H,
  aJ as Ne,
  Y as we,
  ax as R,
  as as K,
  aM as A,
  o as he,
  W as xe,
  z as x,
  B as g,
  Q as B,
  P as Pe,
  $ as Ve,
  a1 as M,
  ck as De,
  cl as Ie,
} from "./CYsiv7Qj.js";
import { V as ee, x as ne, f as Se } from "./B_W9U9Wp.js";
import { a as L } from "./D3DeQzvF.js";
const Fe = 50,
  ye = 500;
function Ee(n) {
  let { toggleUpDown: $ } = n,
    i = -1,
    w = -1;
  q(c);
  function y(r) {
    c(),
      D(r),
      window.addEventListener("pointerup", c),
      document.addEventListener("blur", c),
      (i = window.setTimeout(() => {
        w = window.setInterval(() => D(r), Fe);
      }, ye));
  }
  function c() {
    window.clearTimeout(i),
      window.clearInterval(w),
      window.removeEventListener("pointerup", c),
      document.removeEventListener("blur", c);
  }
  q(c);
  function D(r) {
    $(r === "up");
  }
  return { holdStart: y, holdStop: c };
}
const ke = ge(
    {
      controlVariant: { type: String, default: "default" },
      inset: Boolean,
      hideInput: Boolean,
      modelValue: { type: Number, default: null },
      min: { type: Number, default: Number.MIN_SAFE_INTEGER },
      max: { type: Number, default: Number.MAX_SAFE_INTEGER },
      step: { type: Number, default: 1 },
      precision: { type: Number, default: 0 },
      minFractionDigits: { type: Number, default: null },
      decimalSeparator: {
        type: String,
        validator: (n) => !n || n.length === 1,
      },
      ...Ve(fe(), ["modelValue", "validationValue"]),
    },
    "VNumberInput",
  ),
  Be = pe()({
    name: "VNumberInput",
    props: { ...ke() },
    emits: { "update:focused": (n) => !0, "update:modelValue": (n) => !0 },
    setup(n, $) {
      let { slots: i } = $;
      const w = be(),
        { holdStart: y, holdStop: c } = Ee({ toggleUpDown: z }),
        D = me(n),
        r = h(() => D.isDisabled.value || D.isReadonly.value),
        E = H(n.focused),
        { decimalSeparator: te } = Ne(),
        l = h(() => n.decimalSeparator?.[0] || te.value);
      function P(e) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : n.precision,
          d =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        const v = t == null ? String(e) : e.toFixed(t);
        if (E.value && d) return Number(v).toString().replace(".", l.value);
        if (
          n.minFractionDigits === null ||
          (t !== null && t < n.minFractionDigits)
        )
          return v.replace(".", l.value);
        let [V, s] = v.split(".");
        return (
          (s = (s ?? "")
            .padEnd(n.minFractionDigits, "0")
            .replace(
              new RegExp(`(?<=\\d{${n.minFractionDigits}})0+$`, "g"),
              "",
            )),
          [V, s].filter(Boolean).join(l.value)
        );
      }
      const a = we(
          n,
          "modelValue",
          null,
          (e) => e ?? null,
          (e) => (e == null ? (e ?? null) : R(Number(e), n.min, n.max)),
        ),
        b = H(null),
        I = H(null);
      K(
        a,
        (e) => {
          (E.value &&
            !r.value &&
            Number(b.value?.replace(l.value, ".")) === e) ||
            (e == null
              ? ((b.value = null), (I.value = null))
              : isNaN(e) ||
                ((b.value = P(e)),
                (I.value = Number(b.value.replace(l.value, ".")))));
        },
        { immediate: !0 },
      );
      const u = h({
          get: () => b.value,
          set(e) {
            if (e === null || e === "") {
              (a.value = null), (b.value = null), (I.value = null);
              return;
            }
            const t = Number(e.replace(l.value, "."));
            isNaN(t) ||
              ((b.value = e),
              (I.value = t),
              t <= n.max && t >= n.min && (a.value = t));
          },
        }),
        ae = h(() => {
          if (I.value === null) return !1;
          const e = Number(b.value?.replace(l.value, "."));
          return e !== R(e, n.min, n.max);
        }),
        U = h(() => (r.value ? !1 : (a.value ?? 0) + n.step <= n.max)),
        _ = h(() => (r.value ? !1 : (a.value ?? 0) - n.step >= n.min)),
        o = h(() => (n.hideInput ? "stacked" : n.controlVariant)),
        G = A(() => (o.value === "split" ? "$plus" : "$collapse")),
        W = A(() => (o.value === "split" ? "$minus" : "$expand")),
        k = A(() => (o.value === "split" ? "default" : "small")),
        T = A(() => (o.value === "stacked" ? "auto" : "100%")),
        le = {
          props: {
            onClick: C,
            onPointerup: N,
            onPointerdown: j,
            onPointercancel: N,
          },
        },
        ue = {
          props: {
            onClick: C,
            onPointerup: N,
            onPointerdown: J,
            onPointercancel: N,
          },
        };
      K(
        () => n.precision,
        () => Q(),
      ),
        K(
          () => n.minFractionDigits,
          () => Q(),
        ),
        he(() => {
          O();
        });
      function Y(e) {
        if (e == null) return 0;
        const t = e.toString(),
          d = t.indexOf(".");
        return ~d ? t.length - d : 0;
      }
      function z() {
        let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        if (r.value) return;
        if (a.value == null) {
          u.value = P(R(0, n.min, n.max));
          return;
        }
        let t = Math.max(Y(a.value), Y(n.step));
        n.precision != null && (t = Math.max(t, n.precision)),
          e
            ? U.value && (u.value = P(a.value + n.step, t))
            : _.value && (u.value = P(a.value - n.step, t));
      }
      function ie(e) {
        if (!e.data) return;
        const t = e.target,
          { value: d, selectionStart: v, selectionEnd: V } = t ?? {},
          s = d ? d.slice(0, v) + e.data + d.slice(V) : e.data,
          m = De(s, n.precision, l.value);
        if (
          (new RegExp(`^-?\\d*${Ie(l.value)}?\\d*$`).test(s) ||
            (e.preventDefault(), (t.value = m), M(() => (u.value = m))),
          n.precision != null)
        ) {
          if (s.split(l.value)[1]?.length > n.precision) {
            e.preventDefault(), (t.value = m), M(() => (u.value = m));
            const S = (v ?? 0) + e.data.length;
            t.setSelectionRange(S, S);
          }
          n.precision === 0 &&
            s.endsWith(l.value) &&
            (e.preventDefault(), (t.value = m), M(() => (u.value = m)));
        }
      }
      async function re(e) {
        [
          "Enter",
          "ArrowLeft",
          "ArrowRight",
          "Backspace",
          "Delete",
          "Tab",
        ].includes(e.key) ||
          e.ctrlKey ||
          (["ArrowDown", "ArrowUp"].includes(e.key) &&
            (e.preventDefault(),
            e.stopPropagation(),
            O(),
            await M(),
            e.key === "ArrowDown" ? z(!1) : z()));
      }
      function C(e) {
        e.stopPropagation();
      }
      function N(e) {
        e.currentTarget?.releasePointerCapture(e.pointerId),
          e.preventDefault(),
          c();
      }
      function j(e) {
        e.currentTarget?.setPointerCapture(e.pointerId),
          e.preventDefault(),
          e.stopPropagation(),
          y("up");
      }
      function J(e) {
        e.currentTarget?.setPointerCapture(e.pointerId),
          e.preventDefault(),
          e.stopPropagation(),
          y("down");
      }
      function O() {
        if (r.value || !w.value) return;
        const e = w.value.value,
          t = Number(e.replace(l.value, "."));
        e && !isNaN(t) ? (u.value = P(R(t, n.min, n.max))) : (u.value = null);
      }
      function Q() {
        r.value ||
          (u.value =
            a.value !== null && !isNaN(a.value)
              ? P(a.value, n.precision, !1)
              : null);
      }
      function oe() {
        if (!r.value) {
          if (a.value === null || isNaN(a.value)) {
            u.value = null;
            return;
          }
          u.value = a.value.toString().replace(".", l.value);
        }
      }
      function se() {
        oe();
      }
      function ce() {
        O();
      }
      return (
        xe(() => {
          const { modelValue: e, type: t, ...d } = Z.filterProps(n);
          function v() {
            return i.increment
              ? g(
                  ne,
                  {
                    key: "increment-defaults",
                    defaults: {
                      VBtn: {
                        disabled: !U.value,
                        height: T.value,
                        size: k.value,
                        icon: G.value,
                        variant: "text",
                      },
                    },
                  },
                  { default: () => [i.increment(le)] },
                )
              : g(
                  ee,
                  {
                    "aria-hidden": "true",
                    "data-testid": "increment",
                    disabled: !U.value,
                    height: T.value,
                    icon: G.value,
                    key: "increment-btn",
                    onClick: C,
                    onPointerdown: j,
                    onPointerup: N,
                    onPointercancel: N,
                    size: k.value,
                    variant: "text",
                    tabindex: "-1",
                  },
                  null,
                );
          }
          function V() {
            return i.decrement
              ? g(
                  ne,
                  {
                    key: "decrement-defaults",
                    defaults: {
                      VBtn: {
                        disabled: !_.value,
                        height: T.value,
                        size: k.value,
                        icon: W.value,
                        variant: "text",
                      },
                    },
                  },
                  { default: () => [i.decrement(ue)] },
                )
              : g(
                  ee,
                  {
                    "aria-hidden": "true",
                    "data-testid": "decrement",
                    disabled: !_.value,
                    height: T.value,
                    icon: W.value,
                    key: "decrement-btn",
                    onClick: C,
                    onPointerdown: J,
                    onPointerup: N,
                    onPointercancel: N,
                    size: k.value,
                    variant: "text",
                    tabindex: "-1",
                  },
                  null,
                );
          }
          function s() {
            return x("div", { class: "v-number-input__control" }, [
              V(),
              g(L, { vertical: o.value !== "stacked" }, null),
              v(),
            ]);
          }
          function m() {
            return !n.hideInput && !n.inset
              ? g(L, { vertical: !0 }, null)
              : void 0;
          }
          const S =
              o.value === "split"
                ? x("div", { class: "v-number-input__control" }, [
                    g(L, { vertical: !0 }, null),
                    v(),
                  ])
                : n.reverse || o.value === "hidden"
                  ? void 0
                  : x(B, null, [m(), s()]),
            de = i["append-inner"] || S,
            X =
              o.value === "split"
                ? x("div", { class: "v-number-input__control" }, [
                    V(),
                    g(L, { vertical: !0 }, null),
                  ])
                : n.reverse && o.value !== "hidden"
                  ? x(B, null, [s(), m()])
                  : void 0,
            ve = i["prepend-inner"] || X;
          return g(
            Z,
            Pe({ ref: w }, d, {
              modelValue: u.value,
              "onUpdate:modelValue": (f) => (u.value = f),
              focused: E.value,
              "onUpdate:focused": (f) => (E.value = f),
              validationValue: a.value,
              error: ae.value || void 0,
              onBeforeinput: ie,
              onFocus: se,
              onBlur: ce,
              onKeydown: re,
              class: [
                "v-number-input",
                {
                  "v-number-input--default": o.value === "default",
                  "v-number-input--hide-input": n.hideInput,
                  "v-number-input--inset": n.inset,
                  "v-number-input--reverse": n.reverse,
                  "v-number-input--split": o.value === "split",
                  "v-number-input--stacked": o.value === "stacked",
                },
                n.class,
              ],
              style: n.style,
              inputmode: "decimal",
            }),
            {
              ...i,
              "append-inner": de
                ? function () {
                    for (
                      var f = arguments.length, F = new Array(f), p = 0;
                      p < f;
                      p++
                    )
                      F[p] = arguments[p];
                    return x(B, null, [i["append-inner"]?.(...F), S]);
                  }
                : void 0,
              "prepend-inner": ve
                ? function () {
                    for (
                      var f = arguments.length, F = new Array(f), p = 0;
                      p < f;
                      p++
                    )
                      F[p] = arguments[p];
                    return x(B, null, [X, i["prepend-inner"]?.(...F)]);
                  }
                : void 0,
            },
          );
        }),
        Se({}, w)
      );
    },
  });
export { Be as V };
