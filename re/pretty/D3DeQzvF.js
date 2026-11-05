import {
  B as de,
  A as ve,
  g as ge,
  h as p,
  G as me,
  d as ee,
  M as I,
  t as fe,
  v as ye,
  q as he,
  I as Se,
  w as be,
  a as _e,
  x as we,
  y as Ve,
  n as Pe,
  D as ke,
  r as Ce,
  z as Be,
  k as w,
  N as xe,
  H as ze,
  e as Te,
} from "./B_W9U9Wp.js";
import {
  U as B,
  V as x,
  W as A,
  z as y,
  I as C,
  a3 as b,
  aB as D,
  k as R,
  bz as Ie,
  s as k,
  r as Re,
  as as O,
  aY as Ae,
  bD as De,
  a1 as Ee,
  e as Oe,
  aM as te,
  a2 as j,
  B as g,
  Q as Ne,
  P as ae,
  ay as V,
  a4 as $e,
  b2 as ne,
  b5 as ie,
  _ as We,
  bx as H,
  b4 as L,
  b_ as Y,
  b$ as X,
  b0 as G,
} from "./CYsiv7Qj.js";
import { I as Q } from "./BrCrqdgZ.js";
function Fe(e) {
  return {
    aspectStyles: R(() => {
      const l = Number(e.aspectRatio);
      return l ? { paddingBottom: String((1 / l) * 100) + "%" } : void 0;
    }),
  };
}
const re = x(
    {
      aspectRatio: [String, Number],
      contentClass: null,
      inline: Boolean,
      ...D(),
      ...ve(),
    },
    "VResponsive",
  ),
  J = B()({
    name: "VResponsive",
    props: re(),
    setup(e, l) {
      let { slots: n } = l;
      const { aspectStyles: r } = Fe(e),
        { dimensionStyles: a } = de(e);
      return (
        A(() =>
          y(
            "div",
            {
              class: b([
                "v-responsive",
                { "v-responsive--inline": e.inline },
                e.class,
              ]),
              style: C([a.value, e.style]),
            },
            [
              y(
                "div",
                { class: "v-responsive__sizer", style: C(r.value) },
                null,
              ),
              n.additional?.(),
              n.default &&
                y(
                  "div",
                  { class: b(["v-responsive__content", e.contentClass]) },
                  [n.default()],
                ),
            ],
          ),
        ),
        {}
      );
    },
  }),
  Me = x(
    {
      absolute: Boolean,
      alt: String,
      cover: Boolean,
      color: String,
      draggable: { type: [Boolean, String], default: void 0 },
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({
          root: void 0,
          rootMargin: void 0,
          threshold: void 0,
        }),
      },
      sizes: String,
      src: { type: [String, Object], default: "" },
      crossorigin: String,
      referrerpolicy: String,
      srcset: String,
      position: String,
      ...re(),
      ...D(),
      ...ee(),
      ...me(),
    },
    "VImg",
  ),
  Ue = B()({
    name: "VImg",
    directives: { vIntersect: Q },
    props: Me(),
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, l) {
      let { emit: n, slots: r } = l;
      const { backgroundColorClasses: a, backgroundColorStyles: f } = ge(
          () => e.color,
        ),
        { roundedClasses: u } = p(e),
        d = Ie("VImg"),
        m = k(""),
        t = Re(),
        i = k(e.eager ? "loading" : "idle"),
        o = k(),
        v = k(),
        c = R(() =>
          e.src && typeof e.src == "object"
            ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0),
              }
            : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0),
              },
        ),
        S = R(() => c.value.aspect || o.value / v.value || 0);
      O(
        () => e.src,
        () => {
          _(i.value !== "idle");
        },
      ),
        O(S, (s, h) => {
          !s && h && t.value && P(t.value);
        }),
        Ae(() => _());
      function _(s) {
        if (!(e.eager && s) && !(De && !s && !e.eager)) {
          if (((i.value = "loading"), c.value.lazySrc)) {
            const h = new Image();
            (h.src = c.value.lazySrc), P(h, null);
          }
          c.value.src &&
            Ee(() => {
              n("loadstart", t.value?.currentSrc || c.value.src),
                setTimeout(() => {
                  if (!d.isUnmounted)
                    if (t.value?.complete) {
                      if ((t.value.naturalWidth || T(), i.value === "error"))
                        return;
                      S.value || P(t.value, null), i.value === "loading" && z();
                    } else S.value || P(t.value), $();
                });
            });
        }
      }
      function z() {
        d.isUnmounted ||
          ($(),
          P(t.value),
          (i.value = "loaded"),
          n("load", t.value?.currentSrc || c.value.src));
      }
      function T() {
        d.isUnmounted ||
          ((i.value = "error"), n("error", t.value?.currentSrc || c.value.src));
      }
      function $() {
        const s = t.value;
        s && (m.value = s.currentSrc || s.src);
      }
      let E = -1;
      Oe(() => {
        clearTimeout(E);
      });
      function P(s) {
        let h =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        const M = () => {
          if ((clearTimeout(E), d.isUnmounted)) return;
          const { naturalHeight: U, naturalWidth: q } = s;
          U || q
            ? ((o.value = q), (v.value = U))
            : !s.complete && i.value === "loading" && h != null
              ? (E = window.setTimeout(M, h))
              : (s.currentSrc.endsWith(".svg") ||
                  s.currentSrc.startsWith("data:image/svg+xml")) &&
                ((o.value = 1), (v.value = 1));
        };
        M();
      }
      const W = te(() => ({
          "v-img__img--cover": e.cover,
          "v-img__img--contain": !e.cover,
        })),
        se = () => {
          if (!c.value.src || i.value === "idle") return null;
          const s = y(
              "img",
              {
                class: b(["v-img__img", W.value]),
                style: { objectPosition: e.position },
                crossorigin: e.crossorigin,
                src: c.value.src,
                srcset: c.value.srcset,
                alt: e.alt,
                referrerpolicy: e.referrerpolicy,
                draggable: e.draggable,
                sizes: e.sizes,
                ref: t,
                onLoad: z,
                onError: T,
              },
              null,
            ),
            h = r.sources?.();
          return g(
            I,
            { transition: e.transition, appear: !0 },
            {
              default: () => [
                j(h ? y("picture", { class: "v-img__picture" }, [h, s]) : s, [
                  [$e, i.value === "loaded"],
                ]),
              ],
            },
          );
        },
        le = () =>
          g(
            I,
            { transition: e.transition },
            {
              default: () => [
                c.value.lazySrc &&
                  i.value !== "loaded" &&
                  y(
                    "img",
                    {
                      class: b(["v-img__img", "v-img__img--preload", W.value]),
                      style: { objectPosition: e.position },
                      crossorigin: e.crossorigin,
                      src: c.value.lazySrc,
                      alt: e.alt,
                      referrerpolicy: e.referrerpolicy,
                      draggable: e.draggable,
                    },
                    null,
                  ),
              ],
            },
          ),
        oe = () =>
          r.placeholder
            ? g(
                I,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    (i.value === "loading" ||
                      (i.value === "error" && !r.error)) &&
                      y("div", { class: "v-img__placeholder" }, [
                        r.placeholder(),
                      ]),
                  ],
                },
              )
            : null,
        ce = () =>
          r.error
            ? g(
                I,
                { transition: e.transition, appear: !0 },
                {
                  default: () => [
                    i.value === "error" &&
                      y("div", { class: "v-img__error" }, [r.error()]),
                  ],
                },
              )
            : null,
        ue = () =>
          e.gradient
            ? y(
                "div",
                {
                  class: "v-img__gradient",
                  style: { backgroundImage: `linear-gradient(${e.gradient})` },
                },
                null,
              )
            : null,
        F = k(!1);
      {
        const s = O(S, (h) => {
          h &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                F.value = !0;
              });
            }),
            s());
        });
      }
      return (
        A(() => {
          const s = J.filterProps(e);
          return j(
            g(
              J,
              ae(
                {
                  class: [
                    "v-img",
                    {
                      "v-img--absolute": e.absolute,
                      "v-img--booting": !F.value,
                    },
                    a.value,
                    u.value,
                    e.class,
                  ],
                  style: [
                    { width: V(e.width === "auto" ? o.value : e.width) },
                    f.value,
                    e.style,
                  ],
                },
                s,
                {
                  aspectRatio: S.value,
                  "aria-label": e.alt,
                  role: e.alt ? "img" : void 0,
                },
              ),
              {
                additional: () =>
                  y(Ne, null, [
                    g(se, null, null),
                    g(le, null, null),
                    g(ue, null, null),
                    g(oe, null, null),
                    g(ce, null, null),
                  ]),
                default: r.default,
              },
            ),
            [[Q, { handler: _, options: e.options }, null, { once: !0 }]],
          );
        }),
        { currentSrc: m, image: t, state: i, naturalWidth: o, naturalHeight: v }
      );
    },
  }),
  qe = x(
    {
      start: Boolean,
      end: Boolean,
      icon: We,
      image: String,
      text: String,
      ...Be(),
      ...D(),
      ...Ce(),
      ...ee(),
      ...ke(),
      ...Pe(),
      ...ie(),
      ...Ve({ variant: "flat" }),
    },
    "VAvatar",
  ),
  Qe = B()({
    name: "VAvatar",
    props: qe(),
    setup(e, l) {
      let { slots: n } = l;
      const { themeClasses: r } = ne(e),
        { borderClasses: a } = fe(e),
        { colorClasses: f, colorStyles: u, variantClasses: d } = ye(e),
        { densityClasses: m } = he(e),
        { roundedClasses: t } = p(e),
        { sizeClasses: i, sizeStyles: o } = Se(e);
      return (
        A(() =>
          g(
            e.tag,
            {
              class: b([
                "v-avatar",
                { "v-avatar--start": e.start, "v-avatar--end": e.end },
                r.value,
                a.value,
                f.value,
                m.value,
                t.value,
                i.value,
                d.value,
                e.class,
              ]),
              style: C([u.value, o.value, e.style]),
            },
            {
              default: () => [
                n.default
                  ? g(
                      we,
                      {
                        key: "content-defaults",
                        defaults: {
                          VImg: { cover: !0, src: e.image },
                          VIcon: { icon: e.icon },
                        },
                      },
                      { default: () => [n.default()] },
                    )
                  : e.image
                    ? g(
                        Ue,
                        { key: "image", src: e.image, alt: "", cover: !0 },
                        null,
                      )
                    : e.icon
                      ? g(_e, { key: "icon", icon: e.icon }, null)
                      : e.text,
                be(!1, "v-avatar"),
              ],
            },
          ),
        ),
        {}
      );
    },
  }),
  je = x({ target: [Object, Array] }, "v-dialog-transition"),
  N = new WeakMap(),
  Je = B()({
    name: "VDialogTransition",
    props: je(),
    setup(e, l) {
      let { slots: n } = l;
      const r = {
        onBeforeEnter(a) {
          (a.style.pointerEvents = "none"), (a.style.visibility = "hidden");
        },
        async onEnter(a, f) {
          await new Promise((v) => requestAnimationFrame(v)),
            await new Promise((v) => requestAnimationFrame(v)),
            (a.style.visibility = "");
          const u = Z(e.target, a),
            { x: d, y: m, sx: t, sy: i, speed: o } = u;
          if ((N.set(a, u), L()))
            w(a, [{ opacity: 0 }, {}], {
              duration: 125 * o,
              easing: X,
            }).finished.then(() => f());
          else {
            const v = w(
              a,
              [
                {
                  transform: `translate(${d}px, ${m}px) scale(${t}, ${i})`,
                  opacity: 0,
                },
                {},
              ],
              { duration: 225 * o, easing: X },
            );
            K(a)?.forEach((c) => {
              w(c, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], {
                duration: 450 * o,
                easing: G,
              });
            }),
              v.finished.then(() => f());
          }
        },
        onAfterEnter(a) {
          a.style.removeProperty("pointer-events");
        },
        onBeforeLeave(a) {
          a.style.pointerEvents = "none";
        },
        async onLeave(a, f) {
          await new Promise((v) => requestAnimationFrame(v));
          let u;
          !N.has(a) ||
          Array.isArray(e.target) ||
          e.target.offsetParent ||
          e.target.getClientRects().length
            ? (u = Z(e.target, a))
            : (u = N.get(a));
          const { x: d, y: m, sx: t, sy: i, speed: o } = u;
          L()
            ? w(a, [{}, { opacity: 0 }], {
                duration: 85 * o,
                easing: Y,
              }).finished.then(() => f())
            : (w(
                a,
                [
                  {},
                  {
                    transform: `translate(${d}px, ${m}px) scale(${t}, ${i})`,
                    opacity: 0,
                  },
                ],
                { duration: 125 * o, easing: Y },
              ).finished.then(() => f()),
              K(a)?.forEach((c) => {
                w(c, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                  duration: 250 * o,
                  easing: G,
                });
              }));
        },
        onAfterLeave(a) {
          a.style.removeProperty("pointer-events");
        },
      };
      return () =>
        e.target
          ? g(H, ae({ name: "dialog-transition" }, r, { css: !1 }), n)
          : g(H, { name: "dialog-transition" }, n);
    },
  });
function K(e) {
  const l = e.querySelector(
    ":scope > .v-card, :scope > .v-sheet, :scope > .v-list",
  )?.children;
  return l && [...l];
}
function Z(e, l) {
  const n = xe(e),
    r = ze(l),
    [a, f] = getComputedStyle(l)
      .transformOrigin.split(" ")
      .map((T) => parseFloat(T)),
    [u, d] = getComputedStyle(l)
      .getPropertyValue("--v-overlay-anchor-origin")
      .split(" ");
  let m = n.left + n.width / 2;
  u === "left" || d === "left"
    ? (m -= n.width / 2)
    : (u === "right" || d === "right") && (m += n.width / 2);
  let t = n.top + n.height / 2;
  u === "top" || d === "top"
    ? (t -= n.height / 2)
    : (u === "bottom" || d === "bottom") && (t += n.height / 2);
  const i = n.width / r.width,
    o = n.height / r.height,
    v = Math.max(1, i, o),
    c = i / v || 0,
    S = o / v || 0,
    _ = (r.width * r.height) / (window.innerWidth * window.innerHeight),
    z = _ > 0.12 ? Math.min(1.5, (_ - 0.12) * 10 + 1) : 1;
  return { x: m - (a + r.left), y: t - (f + r.top), sx: c, sy: S, speed: z };
}
const He = ["dotted", "dashed", "solid", "double"],
  Le = x(
    {
      color: String,
      contentOffset: [Number, String, Array],
      gradient: Boolean,
      inset: Boolean,
      length: [Number, String],
      opacity: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      variant: {
        type: String,
        default: "solid",
        validator: (e) => He.includes(e),
      },
      ...D(),
      ...ie(),
    },
    "VDivider",
  ),
  Ke = B()({
    name: "VDivider",
    props: Le(),
    setup(e, l) {
      let { attrs: n, slots: r } = l;
      const { themeClasses: a } = ne(e),
        { textColorClasses: f, textColorStyles: u } = Te(() => e.color),
        d = R(() => {
          const t = {};
          return (
            e.length && (t[e.vertical ? "height" : "width"] = V(e.length)),
            e.thickness &&
              (t[e.vertical ? "borderRightWidth" : "borderTopWidth"] = V(
                e.thickness,
              )),
            t
          );
        }),
        m = te(() => {
          const t = Array.isArray(e.contentOffset)
              ? e.contentOffset[0]
              : e.contentOffset,
            i = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
          return {
            marginBlock: e.vertical && t ? V(t) : void 0,
            marginInline: !e.vertical && t ? V(t) : void 0,
            transform: i
              ? `translate${e.vertical ? "X" : "Y"}(${V(i)})`
              : void 0,
          };
        });
      return (
        A(() => {
          const t = y(
            "hr",
            {
              class: b([
                {
                  "v-divider": !0,
                  "v-divider--gradient": e.gradient && !r.default,
                  "v-divider--inset": e.inset,
                  "v-divider--vertical": e.vertical,
                },
                a.value,
                f.value,
                e.class,
              ]),
              style: C([
                d.value,
                u.value,
                { "--v-border-opacity": e.opacity },
                { "border-style": e.variant },
                e.style,
              ]),
              "aria-orientation":
                !n.role || n.role === "separator"
                  ? e.vertical
                    ? "vertical"
                    : "horizontal"
                  : void 0,
              role: `${n.role || "separator"}`,
            },
            null,
          );
          return r.default
            ? y(
                "div",
                {
                  class: b([
                    "v-divider__wrapper",
                    {
                      "v-divider__wrapper--gradient": e.gradient,
                      "v-divider__wrapper--inset": e.inset,
                      "v-divider__wrapper--vertical": e.vertical,
                    },
                  ]),
                },
                [
                  t,
                  y("div", { class: "v-divider__content", style: C(m.value) }, [
                    r.default(),
                  ]),
                  t,
                ],
              )
            : t;
        }),
        {}
      );
    },
  });
export { Ue as V, Ke as a, Qe as b, Je as c };
