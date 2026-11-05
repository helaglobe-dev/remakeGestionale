import {
  U as re,
  V as se,
  Y as ce,
  k as b,
  r as x,
  s as de,
  bI as fe,
  bF as ve,
  o as me,
  as as c,
  e as xe,
  W as ge,
  Z as he,
  B as A,
  z as u,
  Q as B,
  P as M,
  a2 as p,
  cn as we,
  a3 as ye,
  ay as z,
  a1 as F,
  ax as Ve,
  bU as be,
} from "./CYsiv7Qj.js";
import {
  I as W,
  d as Fe,
  j as Ce,
  a as $,
  o as O,
  p as Pe,
  q as Ie,
  r as ke,
  m as Ne,
  s as Re,
} from "./BrCrqdgZ.js";
import { f as Se } from "./B_W9U9Wp.js";
const He = se(
    {
      autoGrow: Boolean,
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      noResize: Boolean,
      rows: {
        type: [Number, String],
        default: 5,
        validator: (e) => !isNaN(parseFloat(e)),
      },
      maxHeight: {
        type: [Number, String],
        validator: (e) => !isNaN(parseFloat(e)),
      },
      maxRows: {
        type: [Number, String],
        validator: (e) => !isNaN(parseFloat(e)),
      },
      suffix: String,
      modelModifiers: Object,
      ...Re(),
      ...Ne(),
      ...ke(),
    },
    "VTextarea",
  ),
  ze = re()({
    name: "VTextarea",
    directives: { vIntersect: W },
    inheritAttrs: !1,
    props: He(),
    emits: {
      "click:control": (e) => !0,
      "mousedown:control": (e) => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:rows": (e) => !0,
    },
    setup(e, j) {
      let { attrs: C, emit: P, slots: d } = j;
      const l = ce(e, "modelValue"),
        { isFocused: g, focus: q, blur: Q } = Fe(e),
        { onIntersect: Y } = Ie(e),
        Z = b(() =>
          typeof e.counterValue == "function"
            ? e.counterValue(l.value)
            : (l.value || "").toString().length,
        ),
        J = b(() => {
          if (C.maxlength) return C.maxlength;
          if (
            !(
              !e.counter ||
              (typeof e.counter != "number" && typeof e.counter != "string")
            )
          )
            return e.counter;
        }),
        T = x(),
        w = x(),
        U = de(""),
        f = x(),
        I = x(0),
        { platform: K } = fe(),
        y = Ce(e),
        L = b(() => e.persistentPlaceholder || g.value || e.active);
      function k() {
        y.isSuppressing.value && y.update(),
          f.value !== document.activeElement && f.value?.focus(),
          g.value || q();
      }
      function X(t) {
        k(), P("click:control", t);
      }
      function ee(t) {
        P("mousedown:control", t);
      }
      function te(t) {
        t.stopPropagation(),
          k(),
          F(() => {
            (l.value = ""), be(e["onClick:clear"], t);
          });
      }
      function ae(t) {
        const a = t.target;
        if (!e.modelModifiers?.trim) {
          l.value = a.value;
          return;
        }
        const n = a.value,
          m = a.selectionStart,
          r = a.selectionEnd;
        (l.value = n),
          F(() => {
            let s = 0;
            n.trimStart().length === a.value.length &&
              (s = n.length - a.value.length),
              m != null && (a.selectionStart = m - s),
              r != null && (a.selectionEnd = r - s);
          });
      }
      const v = x(),
        h = x(Number(e.rows)),
        N = b(() => ["plain", "underlined"].includes(e.variant));
      ve(() => {
        e.autoGrow || (h.value = Number(e.rows));
      });
      function i() {
        F(() => {
          if (!f.value) return;
          if (K.value.firefox) {
            I.value = 12;
            return;
          }
          const { offsetWidth: t, clientWidth: a } = f.value;
          I.value = Math.max(0, t - a);
        }),
          e.autoGrow &&
            F(() => {
              if (!v.value || !w.value) return;
              const t = getComputedStyle(v.value),
                a = getComputedStyle(w.value.$el),
                n =
                  parseFloat(t.getPropertyValue("--v-field-padding-top")) +
                  parseFloat(t.getPropertyValue("--v-input-padding-top")) +
                  parseFloat(t.getPropertyValue("--v-field-padding-bottom")),
                m = v.value.scrollHeight,
                r = parseFloat(t.lineHeight),
                s = Math.max(
                  parseFloat(e.rows) * r + n,
                  parseFloat(a.getPropertyValue("--v-input-control-height")),
                ),
                R = e.maxHeight
                  ? parseFloat(e.maxHeight)
                  : parseFloat(e.maxRows) * r + n || 1 / 0,
                o = Ve(m ?? 0, s, R);
              (h.value = Math.floor((o - n) / r)), (U.value = z(o));
            });
      }
      me(i),
        c(l, i),
        c(() => e.rows, i),
        c(() => e.maxHeight, i),
        c(() => e.maxRows, i),
        c(() => e.density, i),
        c(h, (t) => {
          P("update:rows", t);
        });
      let V;
      return (
        c(v, (t) => {
          t
            ? ((V = new ResizeObserver(i)), V.observe(v.value))
            : V?.disconnect();
        }),
        xe(() => {
          V?.disconnect();
        }),
        ge(() => {
          const t = !!(d.counter || e.counter || e.counterValue),
            a = !!(t || d.details),
            [n, m] = he(C),
            { modelValue: r, ...s } = $.filterProps(e),
            R = { ...O.filterProps(e), "onClick:clear": te };
          return A(
            $,
            M(
              {
                ref: T,
                modelValue: l.value,
                "onUpdate:modelValue": (o) => (l.value = o),
                class: [
                  "v-textarea v-text-field",
                  {
                    "v-textarea--prefixed": e.prefix,
                    "v-textarea--suffixed": e.suffix,
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-textarea--auto-grow": e.autoGrow,
                    "v-textarea--no-resize": e.noResize || e.autoGrow,
                    "v-input--plain-underlined": N.value,
                  },
                  e.class,
                ],
                style: [
                  {
                    "--v-textarea-max-height": e.maxHeight
                      ? z(e.maxHeight)
                      : void 0,
                    "--v-textarea-scroll-bar-width": z(I.value),
                  },
                  e.style,
                ],
              },
              n,
              s,
              { centerAffix: h.value === 1 && !N.value, focused: g.value },
            ),
            {
              ...d,
              default: (o) => {
                let {
                  id: S,
                  isDisabled: _,
                  isDirty: D,
                  isReadonly: le,
                  isValid: ne,
                  hasDetails: oe,
                } = o;
                return A(
                  O,
                  M(
                    {
                      ref: w,
                      style: { "--v-textarea-control-height": U.value },
                      onClick: X,
                      onMousedown: ee,
                      "onClick:prependInner": e["onClick:prependInner"],
                      "onClick:appendInner": e["onClick:appendInner"],
                    },
                    R,
                    {
                      id: S.value,
                      active: L.value || D.value,
                      labelId: `${S.value}-label`,
                      centerAffix: h.value === 1 && !N.value,
                      dirty: D.value || e.dirty,
                      disabled: _.value,
                      focused: g.value,
                      details: oe.value,
                      error: ne.value === !1,
                    },
                  ),
                  {
                    ...d,
                    default: (ue) => {
                      let {
                        props: { class: G, ...E },
                        controlRef: ie,
                      } = ue;
                      return u(B, null, [
                        e.prefix &&
                          u("span", { class: "v-text-field__prefix" }, [
                            e.prefix,
                          ]),
                        p(
                          u(
                            "textarea",
                            M(
                              {
                                ref: (H) => (f.value = ie.value = H),
                                class: G,
                                value: l.value,
                                onInput: ae,
                                autofocus: e.autofocus,
                                readonly: le.value,
                                disabled: _.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: y.fieldName.value,
                                autocomplete: y.fieldAutocomplete.value,
                                onFocus: k,
                                onBlur: Q,
                                "aria-labelledby": `${S.value}-label`,
                              },
                              E,
                              m,
                            ),
                            null,
                          ),
                          [[W, { handler: Y }, null, { once: !0 }]],
                        ),
                        e.autoGrow &&
                          p(
                            u(
                              "textarea",
                              {
                                class: ye([G, "v-textarea__sizer"]),
                                id: `${E.id}-sizer`,
                                "onUpdate:modelValue": (H) => (l.value = H),
                                ref: v,
                                readonly: !0,
                                "aria-hidden": "true",
                              },
                              null,
                            ),
                            [[we, l.value]],
                          ),
                        e.suffix &&
                          u("span", { class: "v-text-field__suffix" }, [
                            e.suffix,
                          ]),
                      ]);
                    },
                  },
                );
              },
              details: a
                ? (o) =>
                    u(B, null, [
                      d.details?.(o),
                      t &&
                        u(B, null, [
                          u("span", null, null),
                          A(
                            Pe,
                            {
                              active: e.persistentCounter || g.value,
                              value: Z.value,
                              max: J.value,
                              disabled: e.disabled,
                            },
                            d.counter,
                          ),
                        ]),
                    ])
                : void 0,
            },
          );
        }),
        Se({}, T, w, f)
      );
    },
  });
export { ze as V };
