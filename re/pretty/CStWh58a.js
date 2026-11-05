import {
  E as Ie,
  r as m,
  G as we,
  k as z,
  o as le,
  J as R,
  y as T,
  C as e,
  z as q,
  B as l,
  N as at,
  O as Me,
  M as J,
  L as n,
  K as L,
  D as i,
  A as _,
  n as Le,
  V as ae,
  s as W,
  ax as Ne,
  as as j,
  e as Se,
  U as se,
  Y as $e,
  aM as K,
  bE as te,
  bF as Ve,
  cq as xe,
  W as ue,
  P as Z,
  cr as Ce,
  $ as Fe,
  b2 as Oe,
  az as ot,
  I as nt,
  a3 as Ue,
  ay as Ye,
  b5 as We,
  aB as qe,
  c7 as it,
  aN as rt,
  aL as st,
  bI as ut,
  a1 as dt,
  cb as vt,
  aZ as ct,
  bx as ft,
  Q as be,
  bN as mt,
  u as pt,
  F as gt,
  aP as yt,
  aS as wt,
  a2 as bt,
  x as me,
  R as ht,
  b9 as kt,
  a4 as St,
  cs as Vt,
} from "./CYsiv7Qj.js";
import { z as xt } from "./CE7JQOIN.js";
import { $ as ie } from "./BvG7V8Ak.js";
import { V as Ct } from "./MIubIMrV.js";
import { V as Tt } from "./CvNP7w2k.js";
import { V as Be } from "./BrCrqdgZ.js";
import {
  c as Bt,
  V as X,
  j as Et,
  g as he,
  t as Xe,
  u as Ze,
  h as _e,
  n as je,
  d as Ke,
  m as Ge,
  z as Je,
  Y as Pt,
  a2 as Ht,
  x as At,
  a as P,
} from "./B_W9U9Wp.js";
import { V as re } from "./BqujDEEl.js";
import { V as ke } from "./Dlfzj7mx.js";
import { _ as Rt } from "./DNHpBbj1.js";
import { u as zt } from "./LKQL6vAN.js";
import { V as Dt, a as It } from "./Bd9VYqRx.js";
import { a as Mt, d as Lt, e as Nt, f as $t, h as Ft } from "./fKsYyVgl.js";
import { u as Qe } from "./CCBmAzgz.js";
import { V as Ot, a as Ut, b as Ee } from "./D3DeQzvF.js";
import {
  a as pe,
  b as w,
  c as C,
  f as ge,
  V as ye,
  e as Yt,
} from "./CxBYvc7u.js";
import { V as Pe, m as Wt } from "./BToCrXXm.js";
import { V as qt } from "./hzFhMs-m.js";
import { V as He, a as Ae, d as Re, b as Xt, c as Zt } from "./sbneMOUU.js";
import "./92s3wAHG.js";
import "./DzPBUvYZ.js";
const _t = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
    },
  },
  jt = { style: { display: "flex" } },
  Kt = {
    __name: "DialogResetPassword",
    props: { dialoguploadfile: Boolean },
    emits: ["close"],
    setup(a, { emit: B }) {
      const { data: g } = Ie(),
        M = Le(),
        o = B,
        s = m(!1),
        u = m(!1),
        c = we("snackbar"),
        V = m(""),
        p = m(""),
        H = m("");
      m("");
      const f = m(!1),
        y = m(!1),
        D = m([
          (S) => !!S || "Password obbligatoria",
          (S) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              S,
            ) ||
            `La password deve contenere almeno 8 caratteri e almeno un numero, una lettera maiuscola, una minuscola e un carattere speciale tra i seguenti !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
        ]),
        x = z(() => [
          (S) => !!S || "La conferma password è obbligatoria",
          (S) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              S,
            ) ||
            `La password deve contenere almeno 8 caratteri e almeno un numero, una lettera maiuscola, una minuscola e un carattere speciale tra i seguenti !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
          (S) => S === H.value || "Confirm Password is different from Password",
        ]),
        b = z(() => {
          switch (xt(H.value).score) {
            case 4:
              return { color: "light-blue", value: 100 };
            case 3:
              return { color: "light-green", value: 75 };
            case 2:
              return { color: "yellow", value: 50 };
            case 1:
              return { color: "orange", value: 25 };
            default:
              return { color: "red", value: 5 };
          }
        });
      le(() => {
        s.value = !0;
      });
      const $ = async () => {
        V.value = "";
        let S = { password: H.value, rpassword: p.value };
        try {
          await ie(M.public.apiBaseurl + "user/changePassword", {
            method: "POST",
            body: S,
          });
          const d = we("snackbar");
          (d.value = {
            text: "Password modificata",
            type: "success",
            show: !0,
          }),
            F();
        } catch (d) {
          console.log("ERR", d.response),
            typeof d.response._data == "string" &&
              (d.response._data = JSON.parse(d.response._data)),
            d.response._data.errors
              ? (c.value = {
                  text:
                    "Errore nella modifica della password: " +
                    d.response._data.errors.detail,
                  type: "red",
                  show: !0,
                })
              : (c.value = {
                  text:
                    "Errore nella modifica della password: " +
                    d.response._data.detail[0].msg,
                  type: "red",
                  show: !0,
                });
        }
      };
      function F() {
        o("close");
      }
      return (S, d) => (
        T(),
        R(
          ke,
          {
            class: "modaldialog",
            onAfterLeave: F,
            modelValue: n(s),
            "onUpdate:modelValue":
              d[6] || (d[6] = (I) => (J(s) ? (s.value = I) : null)),
            width: "auto",
            style: { "max-width": "800px", "min-width": "60%" },
            persistent: "",
          },
          {
            default: e(() => [
              q("div", _t, [
                d[10] ||
                  (d[10] = q(
                    "h3",
                    { class: "pageh2 mb-4" },
                    "Cambia password",
                    -1,
                  )),
                l(
                  Ct,
                  {
                    modelValue: n(u),
                    "onUpdate:modelValue":
                      d[4] || (d[4] = (I) => (J(u) ? (u.value = I) : null)),
                    ref: "form",
                    "lazy-validation": "",
                    onKeydown:
                      d[5] ||
                      (d[5] = at(
                        Me(() => {}, ["prevent"]),
                        ["enter"],
                      )),
                  },
                  {
                    default: e(() => [
                      n(V) != ""
                        ? (T(),
                          R(
                            Tt,
                            {
                              key: 0,
                              outlined: "",
                              color: "error",
                              style: {
                                "border-radius": "12px",
                                "margin-bottom": "20px",
                              },
                            },
                            { default: e(() => [i(_(n(V)), 1)]), _: 1 },
                          ))
                        : L("", !0),
                      l(
                        Be,
                        {
                          class: "mb-8",
                          variant: "outlined",
                          "persistent-hint": "",
                          label: "Password",
                          modelValue: n(H),
                          "onUpdate:modelValue":
                            d[0] ||
                            (d[0] = (I) => (J(H) ? (H.value = I) : null)),
                          required: "",
                          rules: n(D),
                          "prepend-inner-icon": n(f)
                            ? "mdi-eye"
                            : "mdi-eye-off",
                          type: n(f) ? "text" : "password",
                          "onClick:prependInner":
                            d[1] || (d[1] = (I) => (f.value = !n(f))),
                        },
                        null,
                        8,
                        ["modelValue", "rules", "prepend-inner-icon", "type"],
                      ),
                      n(b).value >= 0 && n(b).value <= 100
                        ? (T(),
                          R(
                            Bt,
                            {
                              key: 1,
                              class: "mb-3 mt-3",
                              color: n(b).color,
                              value: n(b).value,
                            },
                            null,
                            8,
                            ["color", "value"],
                          ))
                        : L("", !0),
                      l(
                        Be,
                        {
                          class: "mb-8",
                          variant: "outlined",
                          "persistent-hint": "",
                          label: "Conferma la Password",
                          modelValue: n(p),
                          "onUpdate:modelValue":
                            d[2] ||
                            (d[2] = (I) => (J(p) ? (p.value = I) : null)),
                          required: "",
                          rules: n(x),
                          "prepend-inner-icon": n(y)
                            ? "mdi-eye"
                            : "mdi-eye-off",
                          type: n(y) ? "text" : "password",
                          "onClick:prependInner":
                            d[3] || (d[3] = (I) => (y.value = !n(y))),
                        },
                        null,
                        8,
                        ["modelValue", "rules", "prepend-inner-icon", "type"],
                      ),
                      d[9] || (d[9] = q("br", null, null, -1)),
                      q("div", jt, [
                        l(
                          X,
                          { class: "", onClick: F, color: "red" },
                          {
                            default: e(() => [
                              ...(d[7] || (d[7] = [i("Annulla", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        l(re),
                        l(
                          X,
                          { onClick: $, disabled: !n(u), color: "green" },
                          {
                            default: e(() => [
                              ...(d[8] || (d[8] = [i("Modifica", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["disabled"],
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"],
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue"],
        )
      );
    },
  },
  Gt = ae(
    {
      scrollTarget: { type: String },
      scrollThreshold: { type: [String, Number], default: 300 },
    },
    "scroll",
  );
function Jt(a) {
  let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: g, layoutSize: M } = B;
  let o = 0,
    s = 0;
  const u = m(null),
    c = W(0),
    V = W(0),
    p = W(0),
    H = W(!1),
    f = W(!1),
    y = W(!1),
    D = W(!1),
    x = W(!0),
    b = z(() => Number(a.scrollThreshold)),
    $ = z(() => Ne((b.value - c.value) / b.value || 0));
  function F(A) {
    const r = "window" in A ? window.innerHeight : A.clientHeight,
      v =
        "window" in A ? document.documentElement.scrollHeight : A.scrollHeight;
    return { clientHeight: r, scrollHeight: v };
  }
  function S() {
    const A = u.value;
    if (!A) return;
    const { clientHeight: r, scrollHeight: v } = F(A),
      h = v - r,
      E = M?.value || 0,
      O = b.value + E;
    x.value = h > O;
  }
  function d() {
    S();
  }
  function I() {
    const A = u.value;
    if (!A || (g && !g.value)) return;
    (o = c.value), (c.value = "window" in A ? A.pageYOffset : A.scrollTop);
    const r =
      A instanceof Window
        ? document.documentElement.scrollHeight
        : A.scrollHeight;
    s !== r && (r > s && S(), (s = r)),
      (f.value = c.value < o),
      (p.value = Math.abs(c.value - b.value));
    const { clientHeight: v, scrollHeight: h } = F(A),
      E = c.value + v >= h - 5;
    !f.value && E && c.value >= b.value && x.value && (D.value = !0);
    const O = Math.abs(c.value - o) > 100,
      U = c.value <= 5;
    ((f.value && o - c.value > 1 && !E) || (O && c.value < b.value) || U) &&
      (D.value = !1),
      (y.value = E);
  }
  return (
    j(f, () => {
      V.value = V.value || c.value;
    }),
    j(H, () => {
      V.value = 0;
    }),
    le(() => {
      j(
        () => a.scrollTarget,
        (A) => {
          const r = A ? document.querySelector(A) : window;
          r &&
            r !== u.value &&
            (u.value?.removeEventListener("scroll", I),
            (u.value = r),
            u.value.addEventListener("scroll", I, { passive: !0 }),
            Promise.resolve().then(() => {
              S();
            }));
        },
        { immediate: !0 },
      ),
        window.addEventListener("resize", d, { passive: !0 });
    }),
    Se(() => {
      u.value?.removeEventListener("scroll", I),
        window.removeEventListener("resize", d);
    }),
    g && j(g, I, { immediate: !0 }),
    {
      scrollThreshold: b,
      currentScroll: c,
      currentThreshold: p,
      isScrollActive: H,
      scrollRatio: $,
      isScrollingUp: f,
      savedScroll: V,
      isAtBottom: y,
      reachedBottomWhileScrollingDown: D,
      hasEnoughScrollableSpace: x,
    }
  );
}
const Qt = ae(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: {
        type: String,
        default: "top",
        validator: (a) => ["top", "bottom"].includes(a),
      },
      ...Wt(),
      ...Ce(),
      ...Gt(),
      height: { type: [Number, String], default: 64 },
    },
    "VAppBar",
  ),
  el = se()({
    name: "VAppBar",
    props: Qt(),
    emits: { "update:modelValue": (a) => !0 },
    setup(a, B) {
      let { slots: g } = B;
      const M = m(),
        o = $e(a, "modelValue"),
        s = z(() => {
          const r = new Set(a.scrollBehavior?.split(" ") ?? []);
          return {
            hide: r.has("hide"),
            fullyHide: r.has("fully-hide"),
            inverted: r.has("inverted"),
            collapse: r.has("collapse"),
            elevate: r.has("elevate"),
            fadeImage: r.has("fade-image"),
          };
        }),
        u = z(() => {
          const r = s.value;
          return (
            r.hide ||
            r.fullyHide ||
            r.inverted ||
            r.collapse ||
            r.elevate ||
            r.fadeImage ||
            !o.value
          );
        }),
        c = z(() => {
          const r = M.value?.contentHeight ?? 0,
            v = M.value?.extensionHeight ?? 0;
          return r + v;
        }),
        {
          currentScroll: V,
          scrollThreshold: p,
          isScrollingUp: H,
          scrollRatio: f,
          isAtBottom: y,
          reachedBottomWhileScrollingDown: D,
          hasEnoughScrollableSpace: x,
        } = Jt(a, { canScroll: u, layoutSize: c }),
        b = K(() => s.value.hide || s.value.fullyHide),
        $ = z(
          () =>
            a.collapse ||
            (s.value.collapse &&
              (s.value.inverted ? f.value > 0 : f.value === 0)),
        ),
        F = z(
          () =>
            a.flat ||
            (s.value.fullyHide && !o.value) ||
            (s.value.elevate &&
              (s.value.inverted ? V.value > 0 : V.value === 0)),
        ),
        S = z(() =>
          s.value.fadeImage
            ? s.value.inverted
              ? 1 - f.value
              : f.value
            : void 0,
        ),
        d = z(() => {
          if (s.value.hide && s.value.inverted) return 0;
          const r = M.value?.contentHeight ?? 0,
            v = M.value?.extensionHeight ?? 0;
          return b.value
            ? V.value < p.value || s.value.fullyHide
              ? r + v
              : r
            : r + v;
        });
      te(
        () => !!a.scrollBehavior,
        () => {
          Ve(() => {
            if (!b.value) {
              o.value = !0;
              return;
            }
            if (s.value.inverted) {
              o.value = V.value > p.value;
              return;
            }
            if (!x.value) {
              o.value = !0;
              return;
            }
            if (D.value) {
              o.value = !1;
              return;
            }
            o.value = (H.value && !y.value) || V.value < p.value;
          });
        },
      );
      const { ssrBootStyles: I } = Qe(),
        { layoutItemStyles: A } = xe({
          id: a.name,
          order: z(() => parseInt(a.order, 10)),
          position: K(() => a.location),
          layoutSize: d,
          elementSize: W(void 0),
          active: o,
          absolute: K(() => a.absolute),
        });
      return (
        ue(() => {
          const r = Pe.filterProps(a);
          return l(
            Pe,
            Z(
              {
                ref: M,
                class: [
                  "v-app-bar",
                  { "v-app-bar--bottom": a.location === "bottom" },
                  a.class,
                ],
                style: [
                  {
                    ...A.value,
                    "--v-toolbar-image-opacity": S.value,
                    height: void 0,
                    ...I.value,
                  },
                  a.style,
                ],
              },
              r,
              { collapse: $.value, flat: F.value },
            ),
            g,
          );
        }),
        {}
      );
    },
  }),
  tl = ae(
    { ...Fe(Et({ icon: "$menu", variant: "text" }), ["spaced"]) },
    "VAppBarNavIcon",
  ),
  ll = se()({
    name: "VAppBarNavIcon",
    props: tl(),
    setup(a, B) {
      let { slots: g } = B;
      return ue(() => l(X, Z(a, { class: ["v-app-bar-nav-icon"] }), g)), {};
    },
  }),
  al = ae(
    {
      app: Boolean,
      color: String,
      height: { type: [Number, String], default: "auto" },
      ...Je(),
      ...qe(),
      ...Ge(),
      ...Ce(),
      ...Ke(),
      ...je({ tag: "footer" }),
      ...We(),
    },
    "VFooter",
  ),
  ol = se()({
    name: "VFooter",
    props: al(),
    setup(a, B) {
      let { slots: g } = B;
      const M = m(),
        { themeClasses: o } = Oe(a),
        { backgroundColorClasses: s, backgroundColorStyles: u } = he(
          () => a.color,
        ),
        { borderClasses: c } = Xe(a),
        { elevationClasses: V } = Ze(a),
        { roundedClasses: p } = _e(a),
        H = W(32),
        { resizeRef: f } = ot((D) => {
          D.length && (H.value = D[0].target.clientHeight);
        }),
        y = z(() => (a.height === "auto" ? H.value : parseInt(a.height, 10)));
      return (
        te(
          () => a.app,
          () => {
            const D = xe({
              id: a.name,
              order: z(() => parseInt(a.order, 10)),
              position: K(() => "bottom"),
              layoutSize: y,
              elementSize: z(() => (a.height === "auto" ? void 0 : y.value)),
              active: K(() => a.app),
              absolute: K(() => a.absolute),
            });
            Ve(() => {
              M.value = D.layoutItemStyles.value;
            });
          },
        ),
        ue(() =>
          l(
            a.tag,
            {
              ref: f,
              class: Ue([
                "v-footer",
                o.value,
                s.value,
                c.value,
                V.value,
                p.value,
                a.class,
              ]),
              style: nt([
                u.value,
                a.app ? M.value : { height: Ye(a.height) },
                a.style,
              ]),
            },
            g,
          ),
        ),
        {}
      );
    },
  });
function nl(a) {
  let { rootEl: B, isSticky: g, layoutItemStyles: M } = a;
  const o = W(!1),
    s = W(0),
    u = z(() => {
      const p = typeof o.value == "boolean" ? "top" : o.value;
      return [
        g.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0,
        o.value ? { [p]: Ye(s.value) } : { top: M.value.top },
      ];
    });
  le(() => {
    j(
      g,
      (p) => {
        p
          ? window.addEventListener("scroll", V, { passive: !0 })
          : window.removeEventListener("scroll", V);
      },
      { immediate: !0 },
    );
  }),
    Se(() => {
      window.removeEventListener("scroll", V);
    });
  let c = 0;
  function V() {
    const p = c > window.scrollY ? "up" : "down",
      H = B.value.getBoundingClientRect(),
      f = parseFloat(M.value.top ?? 0),
      y = window.scrollY - Math.max(0, s.value - f),
      D = H.height + Math.max(s.value, f) - window.scrollY - window.innerHeight,
      x =
        parseFloat(
          getComputedStyle(B.value).getPropertyValue("--v-body-scroll-y"),
        ) || 0;
    H.height < window.innerHeight - f
      ? ((o.value = "top"), (s.value = f))
      : (p === "up" && o.value === "bottom") ||
          (p === "down" && o.value === "top")
        ? ((s.value = window.scrollY + H.top - x), (o.value = !0))
        : p === "down" && D <= 0
          ? ((s.value = 0), (o.value = "bottom"))
          : p === "up" &&
            y <= 0 &&
            (x
              ? o.value !== "top" && ((s.value = -y + x + f), (o.value = "top"))
              : ((s.value = H.top + y), (o.value = "top"))),
      (c = window.scrollY);
  }
  return { isStuck: o, stickyStyles: u };
}
const il = 100,
  rl = 20;
function ze(a) {
  return (a < 0 ? -1 : 1) * Math.sqrt(Math.abs(a)) * 1.41421356237;
}
function De(a) {
  if (a.length < 2) return 0;
  if (a.length === 2)
    return a[1].t === a[0].t ? 0 : (a[1].d - a[0].d) / (a[1].t - a[0].t);
  let B = 0;
  for (let g = a.length - 1; g > 0; g--) {
    if (a[g].t === a[g - 1].t) continue;
    const M = ze(B),
      o = (a[g].d - a[g - 1].d) / (a[g].t - a[g - 1].t);
    (B += (o - M) * Math.abs(o)), g === a.length - 1 && (B *= 0.5);
  }
  return ze(B) * 1e3;
}
function sl() {
  const a = {};
  function B(o) {
    Array.from(o.changedTouches).forEach((s) => {
      (a[s.identifier] ?? (a[s.identifier] = new it(rl))).push([
        o.timeStamp,
        s,
      ]);
    });
  }
  function g(o) {
    Array.from(o.changedTouches).forEach((s) => {
      delete a[s.identifier];
    });
  }
  function M(o) {
    const s = a[o]?.values().reverse();
    if (!s) throw new Error(`No samples for touch id ${o}`);
    const u = s[0],
      c = [],
      V = [];
    for (const p of s) {
      if (u[0] - p[0] > il) break;
      c.push({ t: p[0], d: p[1].clientX }),
        V.push({ t: p[0], d: p[1].clientY });
    }
    return {
      x: De(c),
      y: De(V),
      get direction() {
        const { x: p, y: H } = this,
          [f, y] = [Math.abs(p), Math.abs(H)];
        return f > y && p >= 0
          ? "right"
          : f > y && p <= 0
            ? "left"
            : y > f && H >= 0
              ? "down"
              : y > f && H <= 0
                ? "up"
                : ul();
      },
    };
  }
  return { addMovement: B, endTouch: g, getVelocity: M };
}
function ul() {
  throw new Error();
}
function dl(a) {
  let {
    el: B,
    isActive: g,
    isTemporary: M,
    width: o,
    touchless: s,
    position: u,
  } = a;
  le(() => {
    window.addEventListener("touchstart", S, { passive: !0 }),
      window.addEventListener("touchmove", d, { passive: !1 }),
      window.addEventListener("touchend", I, { passive: !0 });
  }),
    Se(() => {
      window.removeEventListener("touchstart", S),
        window.removeEventListener("touchmove", d),
        window.removeEventListener("touchend", I);
    });
  const c = z(() => ["left", "right"].includes(u.value)),
    { addMovement: V, endTouch: p, getVelocity: H } = sl();
  let f = !1;
  const y = W(!1),
    D = W(0),
    x = W(0);
  let b;
  function $(r, v) {
    return (
      (u.value === "left"
        ? r
        : u.value === "right"
          ? document.documentElement.clientWidth - r
          : u.value === "top"
            ? r
            : u.value === "bottom"
              ? document.documentElement.clientHeight - r
              : ee()) - (v ? o.value : 0)
    );
  }
  function F(r) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const h =
      u.value === "left"
        ? (r - x.value) / o.value
        : u.value === "right"
          ? (document.documentElement.clientWidth - r - x.value) / o.value
          : u.value === "top"
            ? (r - x.value) / o.value
            : u.value === "bottom"
              ? (document.documentElement.clientHeight - r - x.value) / o.value
              : ee();
    return v ? Ne(h) : h;
  }
  function S(r) {
    if (s.value) return;
    const v = r.changedTouches[0].clientX,
      h = r.changedTouches[0].clientY,
      E = 25,
      O =
        u.value === "left"
          ? v < E
          : u.value === "right"
            ? v > document.documentElement.clientWidth - E
            : u.value === "top"
              ? h < E
              : u.value === "bottom"
                ? h > document.documentElement.clientHeight - E
                : ee(),
      U =
        g.value &&
        (u.value === "left"
          ? v < o.value
          : u.value === "right"
            ? v > document.documentElement.clientWidth - o.value
            : u.value === "top"
              ? h < o.value
              : u.value === "bottom"
                ? h > document.documentElement.clientHeight - o.value
                : ee());
    (O || U || (g.value && M.value)) &&
      ((b = [v, h]),
      (x.value = $(c.value ? v : h, g.value)),
      (D.value = F(c.value ? v : h)),
      (f = x.value > -20 && x.value < 80),
      p(r),
      V(r));
  }
  function d(r) {
    const v = r.changedTouches[0].clientX,
      h = r.changedTouches[0].clientY;
    if (f) {
      if (!r.cancelable) {
        f = !1;
        return;
      }
      const O = Math.abs(v - b[0]),
        U = Math.abs(h - b[1]);
      (c.value ? O > U && O > 3 : U > O && U > 3)
        ? ((y.value = !0), (f = !1))
        : (c.value ? U : O) > 3 && (f = !1);
    }
    if (!y.value) return;
    r.preventDefault(), V(r);
    const E = F(c.value ? v : h, !1);
    (D.value = Math.max(0, Math.min(1, E))),
      E > 1
        ? (x.value = $(c.value ? v : h, !0))
        : E < 0 && (x.value = $(c.value ? v : h, !1));
  }
  function I(r) {
    if (((f = !1), !y.value)) return;
    V(r), (y.value = !1);
    const v = H(r.changedTouches[0].identifier),
      h = Math.abs(v.x),
      E = Math.abs(v.y);
    (c.value ? h > E && h > 400 : E > h && E > 3)
      ? (g.value =
          v.direction ===
          ({ left: "right", right: "left", top: "down", bottom: "up" }[
            u.value
          ] || ee()))
      : (g.value = D.value > 0.5);
  }
  const A = z(() =>
    y.value
      ? {
          transform:
            u.value === "left"
              ? `translateX(calc(-100% + ${D.value * o.value}px))`
              : u.value === "right"
                ? `translateX(calc(100% - ${D.value * o.value}px))`
                : u.value === "top"
                  ? `translateY(calc(-100% + ${D.value * o.value}px))`
                  : u.value === "bottom"
                    ? `translateY(calc(100% - ${D.value * o.value}px))`
                    : ee(),
          transition: "none",
        }
      : void 0,
  );
  return (
    te(y, () => {
      const r = B.value?.style.transform ?? null,
        v = B.value?.style.transition ?? null;
      Ve(() => {
        B.value?.style.setProperty("transform", A.value?.transform || "none"),
          B.value?.style.setProperty("transition", A.value?.transition || null);
      }),
        rt(() => {
          B.value?.style.setProperty("transform", r),
            B.value?.style.setProperty("transition", v);
        });
    }),
    { isDragging: y, dragProgress: D, dragStyles: A }
  );
}
function ee() {
  throw new Error();
}
const vl = ["start", "end", "left", "right", "top", "bottom"],
  cl = ae(
    {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: { type: Boolean, default: null },
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [Boolean, String], default: !0 },
      image: String,
      temporary: Boolean,
      persistent: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: {
        type: String,
        default: "start",
        validator: (a) => vl.includes(a),
      },
      sticky: Boolean,
      ...Je(),
      ...qe(),
      ...$t(),
      ...mt({ mobile: null }),
      ...Ge(),
      ...Ce(),
      ...Ke(),
      ...Fe(Ft(), ["disableInitialFocus"]),
      ...je({ tag: "nav" }),
      ...We(),
    },
    "VNavigationDrawer",
  ),
  fl = se()({
    name: "VNavigationDrawer",
    props: cl(),
    emits: { "update:modelValue": (a) => !0, "update:rail": (a) => !0 },
    setup(a, B) {
      let { attrs: g, emit: M, slots: o } = B;
      const { isRtl: s } = st(),
        { themeClasses: u } = Oe(a),
        { borderClasses: c } = Xe(a),
        { backgroundColorClasses: V, backgroundColorStyles: p } = he(
          () => a.color,
        ),
        { elevationClasses: H } = Ze(a),
        { displayClasses: f, mobile: y } = ut(a),
        { roundedClasses: D } = _e(a),
        x = Pt(),
        b = $e(a, "modelValue", null, (Y) => !!Y),
        { ssrBootStyles: $ } = Qe(),
        { scopeId: F } = Mt(),
        S = m(),
        d = W(!1),
        { runOpenDelay: I, runCloseDelay: A } = Nt(a, (Y) => {
          d.value = Y;
        }),
        r = z(() =>
          a.rail && a.expandOnHover && d.value
            ? Number(a.width)
            : Number(a.rail ? a.railWidth : a.width),
        ),
        v = z(() => Ht(a.location, s.value)),
        h = K(() => a.persistent),
        E = z(() => !a.permanent && (y.value || a.temporary)),
        O = z(() => a.sticky && !E.value && v.value !== "bottom");
      Lt(a, { isActive: b, localTop: E, contentEl: S }),
        te(
          () => a.expandOnHover && a.rail != null,
          () => {
            j(d, (Y) => M("update:rail", !Y));
          },
        ),
        te(
          () => !a.disableResizeWatcher,
          () => {
            j(E, (Y) => !a.permanent && dt(() => (b.value = !Y)));
          },
        ),
        te(
          () => !a.disableRouteWatcher && !!x,
          () => {
            j(x.currentRoute, () => E.value && (b.value = !1));
          },
        ),
        j(
          () => a.permanent,
          (Y) => {
            Y && (b.value = !0);
          },
        ),
        a.modelValue == null && !E.value && (b.value = a.permanent || !y.value);
      const { isDragging: U, dragProgress: Q } = dl({
          el: S,
          isActive: b,
          isTemporary: E,
          width: r,
          touchless: K(() => a.touchless),
          position: v,
        }),
        de = z(() => {
          const Y = E.value
            ? 0
            : a.rail && a.expandOnHover
              ? Number(a.railWidth)
              : r.value;
          return U.value ? Y * Q.value : Y;
        }),
        { layoutItemStyles: oe, layoutItemScrimStyles: ve } = xe({
          id: a.name,
          order: z(() => parseInt(a.order, 10)),
          position: v,
          layoutSize: de,
          elementSize: r,
          active: vt(b),
          disableTransitions: K(() => U.value),
          absolute: z(
            () => a.absolute || (O.value && typeof G.value != "string"),
          ),
        }),
        { isStuck: G, stickyStyles: ce } = nl({
          rootEl: S,
          isSticky: O,
          layoutItemStyles: oe,
        }),
        ne = he(() => (typeof a.scrim == "string" ? a.scrim : null)),
        fe = z(() => ({
          ...(U.value
            ? { opacity: Q.value * 0.2, transition: "none" }
            : void 0),
          ...ve.value,
        }));
      return (
        ct({ VList: { bgColor: "transparent" } }),
        ue(() => {
          const Y = o.image || a.image;
          return q(be, null, [
            l(
              a.tag,
              Z(
                {
                  ref: S,
                  onMouseenter: I,
                  onMouseleave: A,
                  class: [
                    "v-navigation-drawer",
                    `v-navigation-drawer--${v.value}`,
                    {
                      "v-navigation-drawer--expand-on-hover": a.expandOnHover,
                      "v-navigation-drawer--floating": a.floating,
                      "v-navigation-drawer--is-hovering": d.value,
                      "v-navigation-drawer--rail": a.rail,
                      "v-navigation-drawer--temporary": E.value,
                      "v-navigation-drawer--persistent": h.value,
                      "v-navigation-drawer--active": b.value,
                      "v-navigation-drawer--sticky": O.value,
                    },
                    u.value,
                    V.value,
                    c.value,
                    f.value,
                    H.value,
                    D.value,
                    a.class,
                  ],
                  style: [p.value, oe.value, $.value, ce.value, a.style],
                  inert: !b.value,
                },
                F,
                g,
              ),
              {
                default: () => [
                  Y &&
                    q(
                      "div",
                      { key: "image", class: "v-navigation-drawer__img" },
                      [
                        o.image
                          ? l(
                              At,
                              {
                                key: "image-defaults",
                                disabled: !a.image,
                                defaults: {
                                  VImg: {
                                    alt: "",
                                    cover: !0,
                                    height: "inherit",
                                    src: a.image,
                                  },
                                },
                              },
                              o.image,
                            )
                          : l(
                              Ot,
                              {
                                key: "image-img",
                                alt: "",
                                cover: !0,
                                height: "inherit",
                                src: a.image,
                              },
                              null,
                            ),
                      ],
                    ),
                  o.prepend &&
                    q("div", { class: "v-navigation-drawer__prepend" }, [
                      o.prepend?.(),
                    ]),
                  q("div", { class: "v-navigation-drawer__content" }, [
                    o.default?.(),
                  ]),
                  o.append &&
                    q("div", { class: "v-navigation-drawer__append" }, [
                      o.append?.(),
                    ]),
                ],
              },
            ),
            l(
              ft,
              { name: "fade-transition" },
              {
                default: () => [
                  E.value &&
                    (U.value || b.value) &&
                    !!a.scrim &&
                    q(
                      "div",
                      Z(
                        {
                          class: [
                            "v-navigation-drawer__scrim",
                            ne.backgroundColorClasses.value,
                          ],
                          style: [fe.value, ne.backgroundColorStyles.value],
                          onClick: () => {
                            h.value || (b.value = !1);
                          },
                        },
                        F,
                      ),
                      null,
                    ),
                ],
              },
            ),
          ]);
        }),
        { isStuck: G }
      );
    },
  }),
  ml = { class: "capitalizepar", style: { display: "inline-block" } },
  pl = ["src"],
  gl = { class: "caption white--text" },
  yl = { class: "mt-4" },
  $l = {
    __name: "default",
    setup(a) {
      const { status: B, signIn: g, signOut: M, data: o } = Ie(),
        s = pt();
      gt();
      const u = Le(),
        c = m(!0),
        V = m(!1);
      m(!1), m(!1), m(!1);
      const p = m(""),
        H = m("");
      m(!1);
      const f = m(!1),
        y = m(!1),
        D = m(!1);
      m(""), m(!0), m(!0), m(""), m(!1);
      const x = we("snackbar", () => ({ text: "", type: "success", show: !1 })),
        b = m(5e3);
      m(""), m("");
      const $ = m(null),
        F = m(!1),
        S = m(""),
        d = z(() =>
          [...I.value]
            .sort((N, t) => new Date(t.created) - new Date(N.created))
            .sort((N, t) => Number(N.readon) - Number(t.readon)),
        ),
        I = m([]),
        A = z(() => I.value.filter((N) => !N.readon)),
        r = m(null),
        v = m(!1),
        h = m(null);
      async function E(N) {
        (r.value = N),
          (v.value = !0),
          N.readon ||
            (await ie(u.public.apiBaseurl + "notification/markAsRead", {
              method: "POST",
              body: { id: N.id },
            }),
            clearTimeout(h.value),
            G());
      }
      const O = m(!1),
        U = () => {
          O.value = window.scrollY > 300;
        },
        Q = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
      function de() {
        o.value.role == "S" &&
          window.open(
            u.public.backEndurl + "Manuale-Helaproject.pdf",
            "_blank",
          ),
          o.value.role == "A" &&
            window.open(
              u.public.backEndurl + "Manuale-Helaproject-Ruolo-Admin.pdf",
              "_blank",
            ),
          o.value.role == "U" &&
            window.open(
              u.public.backEndurl + "Manuale-Helaproject-Ruolo-Utente.pdf",
              "_blank",
            );
      }
      function oe() {
        I.value.forEach(async (N) => {
          N.readon ||
            ((N.readon = !0),
            await ie(u.public.apiBaseurl + "notification/markAsRead", {
              method: "POST",
              body: { id: N.id },
            }));
        }),
          clearTimeout(h.value),
          G();
      }
      function ve() {
        s.push("/notification-center");
      }
      const G = () => {
        ie(u.public.apiBaseurl + "notification/getMyNotifications", {})
          .then((N) => {
            I.value = N.data;
          })
          .catch((N) => {
            console.error("Error fetching notifications:", N);
          }),
          (h.value = setTimeout(() => {
            G();
          }, 9e4));
      };
      function ce() {
        clearTimeout(h.value), G();
      }
      yt("refreshNotifications", ce),
        le(() => {
          window.addEventListener("scroll", U),
            (S.value = o.value._image),
            clearTimeout(h.value),
            G();
        });
      function ne() {
        (F.value = !0), (H.value = p.value);
      }
      async function fe() {
        F.value = !1;
      }
      async function Y() {
        s.push("/login"), await M({ redirect: !1 });
      }
      function et() {
        s.push("/profile");
      }
      function tt(N) {
        N && (s.push("/" + N), (v.value = !1));
      }
      return (
        wt(() => {
          clearTimeout(h.value), window.removeEventListener("scroll", U);
        }),
        zt({}),
        (N, t) => {
          const lt = Kt;
          return (
            T(),
            R(Vt, null, {
              default: e(() => [
                l(
                  Dt,
                  {
                    color:
                      n(x).type == "danger"
                        ? "red"
                        : n(x).type == "success"
                          ? "green"
                          : "orange",
                    top: "",
                    modelValue: n(x).show,
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (k) => (n(x).show = k)),
                    timeout: n(b),
                  },
                  {
                    actions: e(() => [
                      l(
                        X,
                        {
                          color: "#1B1B1B",
                          onClick:
                            t[0] || (t[0] = (k) => (n(x).value.show = !1)),
                        },
                        {
                          default: e(() => [
                            l(
                              P,
                              { class: "navicon" },
                              {
                                default: e(() => [
                                  ...(t[13] || (t[13] = [i("mdi-close", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    default: e(() => [q("span", ml, _(n(x).text), 1)]),
                    _: 1,
                  },
                  8,
                  ["color", "modelValue", "timeout"],
                ),
                l(
                  fl,
                  {
                    modelValue: n(c),
                    "onUpdate:modelValue":
                      t[2] || (t[2] = (k) => (J(c) ? (c.value = k) : null)),
                    "mini-variant": n(V),
                    clipped: n(y),
                    fixed: "",
                    app: "",
                  },
                  {
                    default: e(() => [
                      t[64] ||
                        (t[64] = q(
                          "img",
                          {
                            src: Rt,
                            style: {
                              "text-align": "center",
                              width: "auto",
                              margin: "20px",
                            },
                          },
                          null,
                          -1,
                        )),
                      l(
                        pe,
                        { style: { "margin-bottom": "50px" } },
                        {
                          default: e(() => [
                            l(
                              w,
                              { to: "/" },
                              {
                                prepend: e(() => [
                                  l(
                                    P,
                                    { style: { opacity: "1" } },
                                    {
                                      default: e(() => [
                                        ...(t[14] ||
                                          (t[14] = [
                                            i("mdi-view-dashboard-outline", -1),
                                          ])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                default: e(() => [
                                  l(C, null, {
                                    default: e(() => [
                                      ...(t[15] ||
                                        (t[15] = [i("Dashboard", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                            n(o)?.role == "S" || n(o)?.cancreatemacro == 1
                              ? (T(),
                                R(
                                  ge,
                                  {
                                    key: 0,
                                    value: "Amministrazione",
                                    class: "nuovoindent",
                                  },
                                  {
                                    activator: e(({ props: k }) => [
                                      l(
                                        w,
                                        Z(k, {
                                          "prepend-icon":
                                            "mdi-head-cog-outline",
                                          title: "Amministrazione",
                                        }),
                                        null,
                                        16,
                                      ),
                                    ]),
                                    default: e(() => [
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 0, to: "/activities" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[16] ||
                                                        (t[16] = [
                                                          i(
                                                            "mdi-file-document-outline",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[17] ||
                                                      (t[17] = [
                                                        i(
                                                          "Definizione Attività",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S" ||
                                      n(o)?.cancreatemacro == 1
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 1, to: "/macrovoices" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[18] ||
                                                        (t[18] = [
                                                          i(
                                                            "mdi-format-list-group",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[19] ||
                                                      (t[19] = [
                                                        i(
                                                          "Definizione Macrovoci",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 2, to: "/colors" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[20] ||
                                                        (t[20] = [
                                                          i("mdi-palette", -1),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[21] ||
                                                      (t[21] = [
                                                        i(
                                                          "Definizione Colori",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 3, to: "/holidays" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[22] ||
                                                        (t[22] = [
                                                          i(
                                                            "mdi-calendar-account",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[23] ||
                                                      (t[23] = [
                                                        i(
                                                          "Gestione calendario",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 4, to: "/targets" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[24] ||
                                                        (t[24] = [
                                                          i(
                                                            "mdi-medal-outline",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[25] ||
                                                      (t[25] = [
                                                        i("Target annui", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 5, to: "/userprofiles" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[26] ||
                                                        (t[26] = [
                                                          i(
                                                            "mdi-clipboard-account",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[27] ||
                                                      (t[27] = [
                                                        i(
                                                          "Profili professionali",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 6, to: "/users" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[28] ||
                                                        (t[28] = [
                                                          i(
                                                            "mdi-account-multiple-outline",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[29] ||
                                                      (t[29] = [
                                                        i("Utenti", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            n(o)?.role == "S" || n(o)?.role == "A"
                              ? (T(),
                                R(
                                  ge,
                                  {
                                    key: 1,
                                    value: "Dipendenti",
                                    class: "nuovoindent",
                                  },
                                  {
                                    activator: e(({ props: k }) => [
                                      l(
                                        w,
                                        Z(k, {
                                          "prepend-icon": "mdi-account-tie",
                                          title: "Dipendenti",
                                        }),
                                        null,
                                        16,
                                      ),
                                    ]),
                                    default: e(() => [
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 0, to: "/costs" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[30] ||
                                                        (t[30] = [
                                                          i(
                                                            "mdi-currency-eur",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[31] ||
                                                      (t[31] = [
                                                        i("Costi Orari", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S" || n(o)?.role == "A"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 1, to: "/works" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[32] ||
                                                        (t[32] = [
                                                          i(
                                                            "mdi-briefcase-account-outline",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[33] ||
                                                      (t[33] = [
                                                        i(
                                                          "Carichi di lavoro",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                      n(o)?.role == "S"
                                        ? (T(),
                                          R(
                                            w,
                                            { key: 2, to: "/hours" },
                                            {
                                              prepend: e(() => [
                                                l(
                                                  P,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: e(() => [
                                                      ...(t[34] ||
                                                        (t[34] = [
                                                          i(
                                                            "mdi-clock-outline",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: e(() => [
                                                l(C, null, {
                                                  default: e(() => [
                                                    ...(t[35] ||
                                                      (t[35] = [
                                                        i(
                                                          "Imputazione ore",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                          ))
                                        : L("", !0),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            l(
                              w,
                              { to: "/projects" },
                              {
                                prepend: e(() => [
                                  l(
                                    P,
                                    { style: { opacity: "1" } },
                                    {
                                      default: e(() => [
                                        ...(t[36] ||
                                          (t[36] = [
                                            i(
                                              "mdi-briefcase-search-outline",
                                              -1,
                                            ),
                                          ])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                default: e(() => [
                                  l(C, null, {
                                    default: e(() => [
                                      ...(t[37] ||
                                        (t[37] = [i("Progetti", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              w,
                              { to: "/histories" },
                              {
                                prepend: e(() => [
                                  l(
                                    P,
                                    { style: { opacity: "1" } },
                                    {
                                      default: e(() => [
                                        ...(t[38] ||
                                          (t[38] = [
                                            i(
                                              "mdi-clipboard-text-clock-outline",
                                              -1,
                                            ),
                                          ])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                default: e(() => [
                                  l(C, null, {
                                    default: e(() => [
                                      ...(t[39] ||
                                        (t[39] = [i("Storici", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                            n(o)?.role == "S" || n(o)?.role == "A"
                              ? (T(),
                                R(
                                  w,
                                  { key: 2, to: "/clients" },
                                  {
                                    prepend: e(() => [
                                      l(
                                        P,
                                        { style: { opacity: "1" } },
                                        {
                                          default: e(() => [
                                            ...(t[40] ||
                                              (t[40] = [
                                                i("mdi-handshake-outline", -1),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[41] ||
                                            (t[41] = [i("Clienti", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            n(o)?.role == "S" || n(o)?.role == "A"
                              ? (T(),
                                R(
                                  w,
                                  { key: 3, to: "/suppliers" },
                                  {
                                    prepend: e(() => [
                                      l(
                                        P,
                                        { style: { opacity: "1" } },
                                        {
                                          default: e(() => [
                                            ...(t[42] ||
                                              (t[42] = [
                                                i(
                                                  "mdi-home-import-outline",
                                                  -1,
                                                ),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[43] ||
                                            (t[43] = [i("Fornitori", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            l(
                              w,
                              { to: "/todolist" },
                              {
                                prepend: e(() => [
                                  l(
                                    P,
                                    { style: { opacity: "1" } },
                                    {
                                      default: e(() => [
                                        ...(t[44] ||
                                          (t[44] = [
                                            i("mdi-clipboard-list-outline", -1),
                                          ])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                default: e(() => [
                                  l(C, null, {
                                    default: e(() => [
                                      ...(t[45] ||
                                        (t[45] = [
                                          i("Calendario/To Do List", -1),
                                        ])),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                            n(o)?.hasinvoice == 1
                              ? (T(),
                                R(
                                  ge,
                                  {
                                    key: 4,
                                    value: "Valori Economici",
                                    class: "nuovoindent",
                                  },
                                  {
                                    activator: e(({ props: k }) => [
                                      l(
                                        w,
                                        Z(k, {
                                          "prepend-icon": "mdi-currency-eur",
                                          title: "Valori Economici",
                                        }),
                                        null,
                                        16,
                                      ),
                                    ]),
                                    default: e(() => [
                                      l(
                                        w,
                                        { to: "/scadenziario" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[46] ||
                                                    (t[46] = [
                                                      i(
                                                        "mdi-calendar-multiselect-outline",
                                                        -1,
                                                      ),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[47] ||
                                                  (t[47] = [
                                                    i("Scad. Attivo", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      l(
                                        w,
                                        { to: "/scadenziariofattureattive" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[48] ||
                                                    (t[48] = [
                                                      i(
                                                        "mdi-calendar-multiselect-outline",
                                                        -1,
                                                      ),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[49] ||
                                                  (t[49] = [
                                                    i("Scad. Fat. Pagate", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      l(
                                        w,
                                        { to: "/banks" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[50] ||
                                                    (t[50] = [
                                                      i("mdi-bank", -1),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[51] ||
                                                  (t[51] = [i("Banche", -1)])),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      l(
                                        w,
                                        { to: "/adminactiveinvoices" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[52] ||
                                                    (t[52] = [
                                                      i(
                                                        "mdi-invoice-text-plus-outline",
                                                        -1,
                                                      ),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[53] ||
                                                  (t[53] = [
                                                    i("Fatture Attive", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      l(
                                        w,
                                        { to: "/adminpassiveinvoices" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[54] ||
                                                    (t[54] = [
                                                      i(
                                                        "mdi-invoice-text-minus-outline",
                                                        -1,
                                                      ),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[55] ||
                                                  (t[55] = [
                                                    i("Fatture Passive", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      l(
                                        w,
                                        { to: "/adminpaymenttranches" },
                                        {
                                          prepend: e(() => [
                                            l(
                                              P,
                                              { style: { opacity: "1" } },
                                              {
                                                default: e(() => [
                                                  ...(t[56] ||
                                                    (t[56] = [
                                                      i(
                                                        "mdi-invoice-text-clock-outline",
                                                        -1,
                                                      ),
                                                    ])),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]),
                                          default: e(() => [
                                            l(C, null, {
                                              default: e(() => [
                                                ...(t[57] ||
                                                  (t[57] = [
                                                    i("Tranche pagamento", -1),
                                                  ])),
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
                                ))
                              : L("", !0),
                            n(o)?.viewkpi == 1
                              ? (T(),
                                R(
                                  w,
                                  { key: 5, to: "/kpi" },
                                  {
                                    prepend: e(() => [
                                      l(
                                        P,
                                        { style: { opacity: "1" } },
                                        {
                                          default: e(() => [
                                            ...(t[58] ||
                                              (t[58] = [
                                                i("mdi-chart-line", -1),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[59] ||
                                            (t[59] = [i("Kpi", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            n(o)?.viewbudget == 1
                              ? (T(),
                                R(
                                  w,
                                  { key: 6, to: "/budget" },
                                  {
                                    prepend: e(() => [
                                      l(
                                        P,
                                        { style: { opacity: "1" } },
                                        {
                                          default: e(() => [
                                            ...(t[60] ||
                                              (t[60] = [i("mdi-sack", -1)])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[61] ||
                                            (t[61] = [i("Budget", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : L("", !0),
                            l(
                              w,
                              { onClick: de },
                              {
                                prepend: e(() => [
                                  l(
                                    P,
                                    { style: { opacity: "1" } },
                                    {
                                      default: e(() => [
                                        ...(t[62] ||
                                          (t[62] = [
                                            i(
                                              "mdi-book-information-variant",
                                              -1,
                                            ),
                                          ])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                default: e(() => [
                                  l(C, null, {
                                    default: e(() => [
                                      ...(t[63] ||
                                        (t[63] = [i("Manuale", -1)])),
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
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "mini-variant", "clipped"],
                ),
                l(
                  el,
                  { color: "#00516E" },
                  {
                    default: e(() => [
                      l(ll, {
                        variant: "text",
                        onClick:
                          t[3] ||
                          (t[3] = Me((k) => (c.value = !n(c)), ["stop"])),
                      }),
                      l(re),
                      l(
                        ye,
                        { "offset-y": "" },
                        {
                          activator: e(({ props: k }) => [
                            l(
                              X,
                              Z(k, { icon: "", variant: "text" }),
                              {
                                default: e(() => [
                                  l(P, null, {
                                    default: e(() => [
                                      ...(t[65] ||
                                        (t[65] = [
                                          i("mdi mdi-bell-outline", -1),
                                        ])),
                                    ]),
                                    _: 1,
                                  }),
                                  n(A).length > 0
                                    ? (T(),
                                      R(qt, {
                                        key: 0,
                                        color: "red",
                                        content: " ",
                                        style: {
                                          zoom: "0.5",
                                          "margin-bottom": "40px",
                                        },
                                        overlap: "",
                                      }))
                                    : L("", !0),
                                ]),
                                _: 1,
                              },
                              16,
                            ),
                          ]),
                          default: e(() => [
                            l(pe, null, {
                              default: e(() => [
                                (T(!0),
                                me(
                                  be,
                                  null,
                                  ht(
                                    n(d).slice(0, 10),
                                    (k) => (
                                      T(),
                                      R(
                                        w,
                                        {
                                          key: k.id,
                                          onClick: (Te) => E(k),
                                          class: "notification-item",
                                        },
                                        {
                                          default: e(() => [
                                            l(
                                              C,
                                              {
                                                class: Ue({
                                                  "font-weight-bold": !k.readon,
                                                }),
                                              },
                                              {
                                                default: e(() => [
                                                  i(
                                                    _(
                                                      k.title.substring(0, 50) +
                                                        (k.title.length > 50
                                                          ? "..."
                                                          : ""),
                                                    ),
                                                    1,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["class"],
                                            ),
                                            l(
                                              Yt,
                                              {
                                                class:
                                                  "grey--text text--darken-1",
                                              },
                                              {
                                                default: e(() => [
                                                  i(
                                                    _(
                                                      new Date(
                                                        k.created,
                                                      ).toLocaleDateString(
                                                        "it-IT",
                                                        {
                                                          year: "numeric",
                                                          month: "2-digit",
                                                          day: "2-digit",
                                                          hour: "2-digit",
                                                          minute: "2-digit",
                                                          second: "2-digit",
                                                        },
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["onClick"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                                n(d).length > 0
                                  ? (T(), R(Ut, { key: 0 }))
                                  : L("", !0),
                                l(
                                  w,
                                  { onClick: oe },
                                  {
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[66] ||
                                            (t[66] = [i("Tutte lette", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                l(
                                  w,
                                  { onClick: ve },
                                  {
                                    default: e(() => [
                                      l(C, null, {
                                        default: e(() => [
                                          ...(t[67] ||
                                            (t[67] = [
                                              i("Centro notifiche", -1),
                                            ])),
                                        ]),
                                        _: 1,
                                      }),
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
                      ),
                      l(
                        ye,
                        { "offset-y": "" },
                        {
                          activator: e(({ props: k }) => [
                            l(
                              X,
                              Z(
                                {
                                  style: {
                                    height: "auto",
                                    "min-width": "0",
                                    padding: "3px",
                                    "margin-right": "5px",
                                  },
                                },
                                k,
                              ),
                              {
                                default: e(() => [
                                  n(S) != null &&
                                  (n($) == null || n($) == null || n($) == !0)
                                    ? (T(),
                                      me(
                                        be,
                                        { key: 0 },
                                        [
                                          n($) == null || n($) == null
                                            ? (T(),
                                              me(
                                                "img",
                                                {
                                                  key: 0,
                                                  src: n(S),
                                                  onLoad:
                                                    t[4] ||
                                                    (t[4] = (Te) =>
                                                      ($.value = !0)),
                                                  onError:
                                                    t[5] ||
                                                    (t[5] = (Te) =>
                                                      ($.value = !1)),
                                                },
                                                null,
                                                40,
                                                pl,
                                              ))
                                            : L("", !0),
                                          n($)
                                            ? (T(),
                                              R(
                                                Ee,
                                                {
                                                  key: 1,
                                                  size: "48",
                                                  image: n(S),
                                                },
                                                null,
                                                8,
                                                ["image"],
                                              ))
                                            : L("", !0),
                                        ],
                                        64,
                                      ))
                                    : (T(),
                                      R(
                                        Ee,
                                        {
                                          key: 1,
                                          size: "48",
                                          style: {
                                            "border-radius": "50%",
                                            "background-color": "#fff",
                                          },
                                        },
                                        {
                                          default: e(() => [
                                            q(
                                              "span",
                                              gl,
                                              _(
                                                n(o).firstname.charAt(0) +
                                                  n(o).lastname.charAt(0),
                                              ),
                                              1,
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                      )),
                                ]),
                                _: 1,
                              },
                              16,
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        ye,
                        { "offset-y": "" },
                        {
                          activator: e(({ props: k }) => [
                            l(
                              X,
                              Z(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                k,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: e(() => [
                            q("div", yl, [
                              l(
                                pe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#00516E",
                                },
                                {
                                  default: e(() => [
                                    l(
                                      w,
                                      { onClick: et, dense: "", exact: "" },
                                      {
                                        prepend: e(() => [
                                          l(
                                            P,
                                            { style: { opacity: "1" } },
                                            {
                                              default: e(() => [
                                                ...(t[68] ||
                                                  (t[68] = [
                                                    i(
                                                      "mdi-account-cog-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: e(() => [
                                          l(
                                            C,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: e(() => [
                                                ...(t[69] ||
                                                  (t[69] = [
                                                    i("Il mio profilo", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    l(
                                      w,
                                      { onClick: ne, dense: "", exact: "" },
                                      {
                                        prepend: e(() => [
                                          l(
                                            P,
                                            { style: { opacity: "1" } },
                                            {
                                              default: e(() => [
                                                ...(t[70] ||
                                                  (t[70] = [
                                                    i("mdi-lock", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: e(() => [
                                          l(
                                            C,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: e(() => [
                                                ...(t[71] ||
                                                  (t[71] = [
                                                    i("Cambia password", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    l(
                                      w,
                                      {
                                        onClick:
                                          t[6] ||
                                          (t[6] = (k) => (f.value = !0)),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: e(() => [
                                          l(
                                            P,
                                            { style: { opacity: "1" } },
                                            {
                                              default: e(() => [
                                                ...(t[72] ||
                                                  (t[72] = [
                                                    i("mdi-logout", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: e(() => [
                                          l(
                                            C,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: e(() => [
                                                ...(t[73] ||
                                                  (t[73] = [i("Esci", -1)])),
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
                            ]),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                l(
                  ke,
                  {
                    modelValue: n(f),
                    "onUpdate:modelValue":
                      t[9] || (t[9] = (k) => (J(f) ? (f.value = k) : null)),
                    "max-width": "500px",
                  },
                  {
                    default: e(() => [
                      l(
                        He,
                        { class: "pa-2" },
                        {
                          default: e(() => [
                            l(Ae, null, {
                              default: e(() => [
                                ...(t[74] ||
                                  (t[74] = [
                                    i("Sei sicuro di voler uscire?", -1),
                                  ])),
                              ]),
                              _: 1,
                            }),
                            l(Re, null, {
                              default: e(() => [
                                l(
                                  X,
                                  {
                                    variant: "elevated",
                                    onClick:
                                      t[7] || (t[7] = (k) => (f.value = !1)),
                                    color: "red",
                                  },
                                  {
                                    default: e(() => [
                                      ...(t[75] ||
                                        (t[75] = [i("Annulla", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                l(re),
                                l(
                                  X,
                                  {
                                    variant: "elevated",
                                    color: "green",
                                    onClick: t[8] || (t[8] = (k) => Y()),
                                  },
                                  {
                                    default: e(() => [
                                      ...(t[76] || (t[76] = [i("ESCI", -1)])),
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
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"],
                ),
                l(
                  ke,
                  {
                    modelValue: n(v),
                    "onUpdate:modelValue":
                      t[12] || (t[12] = (k) => (J(v) ? (v.value = k) : null)),
                    "max-width": "600",
                  },
                  {
                    default: e(() => [
                      l(He, null, {
                        default: e(() => [
                          l(
                            Ae,
                            { class: "headline" },
                            { default: e(() => [i(_(n(r)?.title), 1)]), _: 1 },
                          ),
                          l(
                            Xt,
                            { class: "grey--text text--darken-1" },
                            {
                              default: e(() => [
                                i(
                                  _(
                                    new Date(n(r)?.created).toLocaleDateString(
                                      "it-IT",
                                      {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                      },
                                    ),
                                  ),
                                  1,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          l(
                            Zt,
                            {
                              class: "ql-editor",
                              innerHTML:
                                n(r)?.content ||
                                "Dettagli completi della notifica",
                            },
                            null,
                            8,
                            ["innerHTML"],
                          ),
                          l(Re, null, {
                            default: e(() => [
                              n(r)?.link
                                ? (T(),
                                  R(
                                    X,
                                    {
                                      key: 0,
                                      color: "primary",
                                      class: "mb-4",
                                      onClick:
                                        t[10] || (t[10] = (k) => tt(n(r).link)),
                                    },
                                    {
                                      default: e(() => [
                                        i(_(N.$gettext("VAI")), 1),
                                      ]),
                                      _: 1,
                                    },
                                  ))
                                : L("", !0),
                              l(re),
                              l(
                                X,
                                {
                                  color: "red",
                                  onClick:
                                    t[11] || (t[11] = (k) => (v.value = !1)),
                                },
                                {
                                  default: e(() => [
                                    ...(t[77] || (t[77] = [i("Chiudi", -1)])),
                                  ]),
                                  _: 1,
                                },
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
                  8,
                  ["modelValue"],
                ),
                l(It, null, {
                  default: e(() => [kt(N.$slots, "default")]),
                  _: 3,
                }),
                l(
                  ol,
                  { absolute: !n(D), app: "" },
                  {
                    default: e(() => [
                      q(
                        "span",
                        null,
                        "© " + _(new Date().getFullYear()) + " Helaglobe",
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["absolute"],
                ),
                n(F)
                  ? (T(),
                    R(
                      lt,
                      { key: 0, dialogResetpassword: n(F), onClose: fe },
                      null,
                      8,
                      ["dialogResetpassword"],
                    ))
                  : L("", !0),
                bt(
                  l(
                    X,
                    {
                      icon: "mdi-arrow-up",
                      color: "#00516E",
                      class: "scroll-top-btn",
                      onClick: Q,
                    },
                    null,
                    512,
                  ),
                  [[St, n(O)]],
                ),
              ]),
              _: 3,
            })
          );
        }
      );
    },
  };
export { $l as default };
