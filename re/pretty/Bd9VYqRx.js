import {
  U as L,
  V as M,
  ct as p,
  W as A,
  B as f,
  z as d,
  I as O,
  a3 as $,
  aB as U,
  Y as j,
  b2 as G,
  r as P,
  s as S,
  aQ as H,
  cu as K,
  bE as Q,
  bF as W,
  as as x,
  o as q,
  cv as J,
  k as X,
  P as B,
  $ as Z,
  b5 as ee,
  aN as ae,
  a1 as te,
} from "./CYsiv7Qj.js";
import {
  B as se,
  n as ne,
  A as oe,
  $ as le,
  v as ie,
  h as re,
  w as ce,
  c as ue,
  x as me,
  f as ve,
  y as fe,
  d as de,
  a0 as ke,
  a1 as be,
} from "./B_W9U9Wp.js";
import { u as ye } from "./CCBmAzgz.js";
import { a as Ve, V as _, b as Pe } from "./fKsYyVgl.js";
const Se = M(
    { scrollable: Boolean, ...U(), ...oe(), ...ne({ tag: "main" }) },
    "VMain",
  ),
  Be = L()({
    name: "VMain",
    props: Se(),
    setup(e, n) {
      let { slots: s } = n;
      const { dimensionStyles: a } = se(e),
        { mainStyles: o } = p(),
        { ssrBootStyles: l } = ye();
      return (
        A(() =>
          f(
            e.tag,
            {
              class: $([
                "v-main",
                { "v-main--scrollable": e.scrollable },
                e.class,
              ]),
              style: O([o.value, l.value, a.value, e.style]),
            },
            {
              default: () => [
                e.scrollable
                  ? d("div", { class: "v-main__scroller" }, [s.default?.()])
                  : s.default?.(),
              ],
            },
          ),
        ),
        {}
      );
    },
  });
function ge(e) {
  const n = S(e());
  let s = -1;
  function a() {
    clearInterval(s);
  }
  function o() {
    a(), te(() => (n.value = e()));
  }
  function l(r) {
    const k = r ? getComputedStyle(r) : { transitionDuration: 0.2 },
      c = parseFloat(k.transitionDuration) * 1e3 || 200;
    if ((a(), n.value <= 0)) return;
    const b = performance.now();
    s = window.setInterval(() => {
      const y = performance.now() - b + c;
      (n.value = Math.max(e() - y, 0)), n.value <= 0 && a();
    }, c);
  }
  return ae(a), { clear: a, time: n, start: l, reset: o };
}
const we = M(
    {
      multiLine: Boolean,
      text: String,
      timer: [Boolean, String],
      timeout: { type: [Number, String], default: 5e3 },
      vertical: Boolean,
      ...be({ location: "bottom" }),
      ...ke(),
      ...de(),
      ...fe(),
      ...ee(),
      ...Z(Pe({ transition: "v-snackbar-transition" }), [
        "persistent",
        "noClickAnimation",
        "retainFocus",
        "captureFocus",
        "disableInitialFocus",
        "scrim",
        "scrollStrategy",
        "stickToTarget",
        "viewportMargin",
      ]),
    },
    "VSnackbar",
  ),
  _e = L()({
    name: "VSnackbar",
    props: we(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: s } = n;
      const a = j(e, "modelValue"),
        { positionClasses: o } = le(e),
        { scopeId: l } = Ve(),
        { themeClasses: r } = G(e),
        { colorClasses: k, colorStyles: c, variantClasses: b } = ie(e),
        { roundedClasses: y } = re(e),
        u = ge(() => Number(e.timeout)),
        g = P(),
        w = P(),
        m = S(!1),
        T = S(0),
        h = P(),
        D = H(K, void 0);
      Q(
        () => !!D,
        () => {
          const t = p();
          W(() => {
            h.value = t.mainStyles.value;
          });
        },
      ),
        x(a, v),
        x(() => e.timeout, v),
        q(() => {
          a.value && v();
        });
      let V = -1;
      function v() {
        u.reset(), window.clearTimeout(V);
        const t = Number(e.timeout);
        if (!a.value || t === -1) return;
        const i = J(w.value);
        u.start(i),
          (V = window.setTimeout(() => {
            a.value = !1;
          }, t));
      }
      function F() {
        u.reset(), window.clearTimeout(V);
      }
      function I() {
        (m.value = !0), F();
      }
      function C() {
        (m.value = !1), v();
      }
      function N(t) {
        T.value = t.touches[0].clientY;
      }
      function R(t) {
        Math.abs(T.value - t.changedTouches[0].clientY) > 50 && (a.value = !1);
      }
      function Y() {
        m.value && C();
      }
      const z = X(() =>
        e.location
          .split(" ")
          .reduce((t, i) => ((t[`v-snackbar--${i}`] = !0), t), {}),
      );
      return (
        A(() => {
          const t = _.filterProps(e),
            i = !!(s.default || s.text || e.text);
          return f(
            _,
            B(
              {
                ref: g,
                class: [
                  "v-snackbar",
                  {
                    "v-snackbar--active": a.value,
                    "v-snackbar--multi-line": e.multiLine && !e.vertical,
                    "v-snackbar--timer": !!e.timer,
                    "v-snackbar--vertical": e.vertical,
                  },
                  z.value,
                  o.value,
                  e.class,
                ],
                style: [h.value, e.style],
              },
              t,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (E) => (a.value = E),
                contentProps: B(
                  {
                    class: [
                      "v-snackbar__wrapper",
                      r.value,
                      k.value,
                      y.value,
                      b.value,
                    ],
                    style: [c.value],
                    onPointerenter: I,
                    onPointerleave: C,
                  },
                  t.contentProps,
                ),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: "none",
                _disableGlobalStack: !0,
                onTouchstartPassive: N,
                onTouchend: R,
                onAfterLeave: Y,
              },
              l,
            ),
            {
              default: () => [
                ce(!1, "v-snackbar"),
                e.timer &&
                  !m.value &&
                  d("div", { key: "timer", class: "v-snackbar__timer" }, [
                    f(
                      ue,
                      {
                        ref: w,
                        color: typeof e.timer == "string" ? e.timer : "info",
                        max: e.timeout,
                        modelValue: u.time.value,
                      },
                      null,
                    ),
                  ]),
                i &&
                  d(
                    "div",
                    {
                      key: "content",
                      class: "v-snackbar__content",
                      role: "status",
                      "aria-live": "polite",
                    },
                    [s.text?.() ?? e.text, s.default?.()],
                  ),
                s.actions &&
                  f(
                    me,
                    {
                      defaults: {
                        VBtn: { variant: "text", ripple: !1, slim: !0 },
                      },
                    },
                    {
                      default: () => [
                        d("div", { class: "v-snackbar__actions" }, [
                          s.actions({ isActive: a }),
                        ]),
                      ],
                    },
                  ),
              ],
              activator: s.activator,
            },
          );
        }),
        ve({}, g)
      );
    },
  });
export { _e as V, Be as a };
