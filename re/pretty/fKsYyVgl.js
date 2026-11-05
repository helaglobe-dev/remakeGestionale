import {
  c5 as Ve,
  c6 as De,
  V as q,
  bn as Ge,
  k as B,
  c7 as Qe,
  as as L,
  aN as V,
  ay as N,
  ax as pe,
  a1 as ie,
  r as _,
  b3 as H,
  bE as be,
  bF as we,
  c8 as Ie,
  c9 as Ze,
  bz as se,
  aQ as _e,
  ca as ke,
  bT as Je,
  P as z,
  aM as oe,
  bo as ye,
  bX as Z,
  s as K,
  bI as et,
  o as tt,
  bb as He,
  bO as nt,
  cb as ot,
  aP as at,
  b5 as rt,
  aB as it,
  U as st,
  $ as lt,
  Y as ct,
  b2 as ut,
  aL as ft,
  e as vt,
  b0 as dt,
  W as mt,
  z as J,
  B as ee,
  a2 as yt,
  a4 as gt,
  cc as ht,
  Q as bt,
  bx as wt,
} from "./CYsiv7Qj.js";
import {
  O as xe,
  P as ce,
  Q as ue,
  S as Oe,
  T as fe,
  i as ve,
  N as Et,
  U as St,
  W as Ae,
  X as Le,
  H as pt,
  G as kt,
  A as xt,
  g as Ot,
  B as At,
  Y as Lt,
  Z as Pt,
  k as Tt,
  M as Ct,
} from "./B_W9U9Wp.js";
const te = new WeakMap();
function Ft(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ve(n)) {
      const o = De(n),
        r = te.get(e);
      if (t[n] == null)
        r?.forEach((i) => {
          const [l, a] = i;
          l === o && (e.removeEventListener(o, a), r.delete(i));
        });
      else if (!r || ![...r].some((i) => i[0] === o && i[1] === t[n])) {
        e.addEventListener(o, t[n]);
        const i = r || new Set();
        i.add([o, t[n]]), te.has(e) || te.set(e, i);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Mt(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ve(n)) {
      const o = De(n),
        r = te.get(e);
      r?.forEach((i) => {
        const [l, a] = i;
        l === o && (e.removeEventListener(o, a), r.delete(i));
      });
    } else e.removeAttribute(n);
  });
}
function We(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document
    ? null
    : t;
}
function Bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Rt(e) : Ee(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ae(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Ee(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Ee(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e),
    n =
      t.overflowY === "scroll" ||
      (t.overflowY === "auto" && e.scrollHeight > e.clientHeight),
    o =
      t.overflowX === "scroll" ||
      (t.overflowX === "auto" && e.scrollWidth > e.clientWidth);
  return n || o;
}
function Rt(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Nt(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return !0;
    e = e.offsetParent;
  }
  return !1;
}
function de(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Vt(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pe(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: o } = e,
      r =
        o === "left"
          ? 0
          : o === "center"
            ? t.width / 2
            : o === "right"
              ? t.width
              : o,
      i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return de({ x: r, y: i }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: o } = e,
      r = n === "left" ? 0 : n === "right" ? t.width : n,
      i =
        o === "top"
          ? 0
          : o === "center"
            ? t.height / 2
            : o === "bottom"
              ? t.height
              : o;
    return de({ x: r, y: i }, t);
  }
  return de({ x: t.width / 2, y: t.height / 2 }, t);
}
const ze = { static: _t, connected: Wt },
  Dt = q(
    {
      locationStrategy: {
        type: [String, Function],
        default: "static",
        validator: (e) => typeof e == "function" || e in ze,
      },
      location: { type: String, default: "bottom" },
      origin: { type: String, default: "auto" },
      offset: [Number, String, Array],
      stickToTarget: Boolean,
      viewportMargin: { type: [Number, String], default: 12 },
    },
    "VOverlay-location-strategies",
  );
function It(e, t) {
  const n = _({}),
    o = _();
  H &&
    be(
      () => !!(t.isActive.value && e.locationStrategy),
      (a) => {
        L(() => e.locationStrategy, a),
          V(() => {
            window.removeEventListener("resize", r),
              visualViewport?.removeEventListener("resize", i),
              visualViewport?.removeEventListener("scroll", l),
              (o.value = void 0);
          }),
          window.addEventListener("resize", r, { passive: !0 }),
          visualViewport?.addEventListener("resize", i, { passive: !0 }),
          visualViewport?.addEventListener("scroll", l, { passive: !0 }),
          typeof e.locationStrategy == "function"
            ? (o.value = e.locationStrategy(t, e, n)?.updateLocation)
            : (o.value = ze[e.locationStrategy](t, e, n)?.updateLocation);
      },
    );
  function r(a) {
    o.value?.(a);
  }
  function i(a) {
    o.value?.(a);
  }
  function l(a) {
    o.value?.(a);
  }
  return { contentStyles: n, updateLocation: o };
}
function _t() {}
function Ht(e, t) {
  const n = pt(e);
  return (
    t
      ? (n.x += parseFloat(e.style.right || 0))
      : (n.x -= parseFloat(e.style.left || 0)),
    (n.y -= parseFloat(e.style.top || 0)),
    n
  );
}
function Wt(e, t, n) {
  (Array.isArray(e.target.value) || Nt(e.target.value)) &&
    Object.assign(n.value, {
      position: "fixed",
      top: 0,
      [e.isRtl.value ? "right" : "left"]: 0,
    });
  const { preferredAnchor: r, preferredOrigin: i } = Ge(() => {
      const f = xe(t.location, e.isRtl.value),
        d =
          t.origin === "overlap"
            ? f
            : t.origin === "auto"
              ? ce(f)
              : xe(t.origin, e.isRtl.value);
      return f.side === d.side && f.align === ue(d).align
        ? { preferredAnchor: Oe(f), preferredOrigin: Oe(d) }
        : { preferredAnchor: f, preferredOrigin: d };
    }),
    [l, a, u, v] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) =>
      B(() => {
        const d = parseFloat(t[f]);
        return isNaN(d) ? 1 / 0 : d;
      }),
    ),
    s = B(() => {
      if (Array.isArray(t.offset)) return t.offset;
      if (typeof t.offset == "string") {
        const f = t.offset.split(" ").map(parseFloat);
        return f.length < 2 && f.push(0), f;
      }
      return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
    });
  let E = !1,
    P = -1;
  const y = new Qe(4),
    S = new ResizeObserver(() => {
      if (!E) return;
      if (
        (requestAnimationFrame((d) => {
          d !== P && y.clear(),
            requestAnimationFrame((w) => {
              P = w;
            });
        }),
        y.isFull)
      ) {
        const d = y.values();
        if (ve(d.at(-1), d.at(-3)) && !ve(d.at(-1), d.at(-2))) return;
      }
      const f = C();
      f && y.push(f.flipped);
    });
  let h = new fe({ x: 0, y: 0, width: 0, height: 0 });
  L(
    e.target,
    (f, d) => {
      d && !Array.isArray(d) && S.unobserve(d),
        Array.isArray(f) ? ve(f, d) || C() : f && S.observe(f);
    },
    { immediate: !0 },
  ),
    L(
      e.contentEl,
      (f, d) => {
        d && S.unobserve(d), f && S.observe(f);
      },
      { immediate: !0 },
    ),
    V(() => {
      S.disconnect();
    });
  function C() {
    if (
      ((E = !1),
      requestAnimationFrame(() => (E = !0)),
      !e.target.value || !e.contentEl.value)
    )
      return;
    (Array.isArray(e.target.value) ||
      e.target.value.offsetParent ||
      e.target.value.getClientRects().length) &&
      (h = Et(e.target.value));
    const f = Ht(e.contentEl.value, e.isRtl.value),
      d = ae(e.contentEl.value),
      w = Number(t.viewportMargin);
    d.length ||
      (d.push(document.documentElement),
      (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
        ((f.x -= parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-x",
          ) || 0,
        )),
        (f.y -= parseFloat(
          document.documentElement.style.getPropertyValue(
            "--v-body-scroll-y",
          ) || 0,
        ))));
    const b = d.reduce(
      (p, O) => {
        const m = St(O);
        return p
          ? new fe({
              x: Math.max(p.left, m.left),
              y: Math.max(p.top, m.top),
              width: Math.min(p.right, m.right) - Math.max(p.left, m.left),
              height: Math.min(p.bottom, m.bottom) - Math.max(p.top, m.top),
            })
          : m;
      },
      void 0,
    );
    t.stickToTarget
      ? ((b.x += Math.min(w, h.x)),
        (b.y += Math.min(w, h.y)),
        (b.width = Math.max(b.width - w * 2, h.x + h.width - w)),
        (b.height = Math.max(b.height - w * 2, h.y + h.height - w)))
      : ((b.x += w), (b.y += w), (b.width -= w * 2), (b.height -= w * 2));
    let k = { anchor: r.value, origin: i.value };
    function D(p) {
      const O = new fe(f),
        m = Pe(p.anchor, h),
        A = Pe(p.origin, O);
      let { x: M, y: R } = Vt(m, A);
      switch (p.anchor.side) {
        case "top":
          R -= s.value[0];
          break;
        case "bottom":
          R += s.value[0];
          break;
        case "left":
          M -= s.value[0];
          break;
        case "right":
          M += s.value[0];
          break;
      }
      switch (p.anchor.align) {
        case "top":
          R -= s.value[1];
          break;
        case "bottom":
          R += s.value[1];
          break;
        case "left":
          M -= s.value[1];
          break;
        case "right":
          M += s.value[1];
          break;
      }
      return (
        (O.x += M),
        (O.y += R),
        (O.width = Math.min(O.width, u.value)),
        (O.height = Math.min(O.height, v.value)),
        { overflows: Le(O, b), x: M, y: R }
      );
    }
    let T = 0,
      c = 0;
    const F = { x: 0, y: 0 },
      $ = { x: !1, y: !1 };
    let le = -1;
    for (; !(le++ > 10); ) {
      const { x: p, y: O, overflows: m } = D(k);
      (T += p), (c += O), (f.x += p), (f.y += O);
      {
        const A = Ae(k.anchor),
          M = m.x.before || m.x.after,
          R = m.y.before || m.y.after;
        let X = !1;
        if (
          (["x", "y"].forEach((x) => {
            if ((x === "x" && M && !$.x) || (x === "y" && R && !$.y)) {
              const I = { anchor: { ...k.anchor }, origin: { ...k.origin } },
                G = x === "x" ? (A === "y" ? ue : ce) : A === "y" ? ce : ue;
              (I.anchor = G(I.anchor)), (I.origin = G(I.origin));
              const { overflows: W } = D(I);
              ((W[x].before <= m[x].before && W[x].after <= m[x].after) ||
                W[x].before + W[x].after < (m[x].before + m[x].after) / 2) &&
                ((k = I), (X = $[x] = !0));
            }
          }),
          X)
        )
          continue;
      }
      m.x.before && ((T += m.x.before), (f.x += m.x.before)),
        m.x.after && ((T -= m.x.after), (f.x -= m.x.after)),
        m.y.before && ((c += m.y.before), (f.y += m.y.before)),
        m.y.after && ((c -= m.y.after), (f.y -= m.y.after));
      {
        const A = Le(f, b);
        (F.x = b.width - A.x.before - A.x.after),
          (F.y = b.height - A.y.before - A.y.after),
          (T += A.x.before),
          (f.x += A.x.before),
          (c += A.y.before),
          (f.y += A.y.before);
      }
      break;
    }
    const Y = Ae(k.anchor);
    return (
      Object.assign(n.value, {
        "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`,
        transformOrigin: `${k.origin.side} ${k.origin.align}`,
        top: N(me(c)),
        left: e.isRtl.value ? void 0 : N(me(T)),
        right: e.isRtl.value ? N(me(-T)) : void 0,
        minWidth: N(Y === "y" ? Math.min(l.value, h.width) : l.value),
        maxWidth: N(Te(pe(F.x, l.value === 1 / 0 ? 0 : l.value, u.value))),
        maxHeight: N(Te(pe(F.y, a.value === 1 / 0 ? 0 : a.value, v.value))),
      }),
      { available: F, contentBox: f, flipped: $ }
    );
  }
  return (
    L(
      () => [
        r.value,
        i.value,
        t.offset,
        t.minWidth,
        t.minHeight,
        t.maxWidth,
        t.maxHeight,
      ],
      () => C(),
    ),
    ie(() => {
      const f = C();
      if (!f) return;
      const { available: d, contentBox: w } = f;
      w.height > d.y &&
        requestAnimationFrame(() => {
          C(),
            requestAnimationFrame(() => {
              C();
            });
        });
    }),
    { updateLocation: C }
  );
}
function me(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Te(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let ge = !0;
const re = [];
function zt(e) {
  !ge || re.length ? (re.push(e), he()) : ((ge = !1), e(), he());
}
let Ce = -1;
function he() {
  cancelAnimationFrame(Ce),
    (Ce = requestAnimationFrame(() => {
      const e = re.shift();
      e && e(), re.length ? he() : (ge = !0);
    }));
}
const qe = { none: null, close: jt, block: Kt, reposition: Yt },
  qt = q(
    {
      scrollStrategy: {
        type: [String, Function],
        default: "block",
        validator: (e) => typeof e == "function" || e in qe,
      },
    },
    "VOverlay-scroll-strategies",
  );
function $t(e, t) {
  if (!H) return;
  let n;
  we(async () => {
    n?.stop(),
      t.isActive.value &&
        e.scrollStrategy &&
        ((n = Ie()),
        await new Promise((o) => setTimeout(o)),
        n.active &&
          n.run(() => {
            typeof e.scrollStrategy == "function"
              ? e.scrollStrategy(t, e, n)
              : qe[e.scrollStrategy]?.(t, e, n);
          }));
  }),
    V(() => {
      n?.stop();
    });
}
function jt(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  $e(Se(e.target.value, e.contentEl.value), t);
}
function Kt(e, t) {
  const n = e.root.value?.offsetParent,
    o = Se(e.target.value, e.contentEl.value),
    r = [
      ...new Set([
        ...ae(o, t.contained ? n : void 0),
        ...ae(e.contentEl.value, t.contained ? n : void 0),
      ]),
    ].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")),
    i = window.innerWidth - document.documentElement.offsetWidth,
    l = ((a) => Ee(a) && a)(n || document.documentElement);
  l && e.root.value.classList.add("v-overlay--scroll-blocked"),
    r.forEach((a, u) => {
      a.style.setProperty("--v-body-scroll-x", N(-a.scrollLeft)),
        a.style.setProperty("--v-body-scroll-y", N(-a.scrollTop)),
        a !== document.documentElement &&
          a.style.setProperty("--v-scrollbar-offset", N(i)),
        a.classList.add("v-overlay-scroll-blocked");
    }),
    V(() => {
      r.forEach((a, u) => {
        const v = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),
          s = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),
          E = a.style.scrollBehavior;
        (a.style.scrollBehavior = "auto"),
          a.style.removeProperty("--v-body-scroll-x"),
          a.style.removeProperty("--v-body-scroll-y"),
          a.style.removeProperty("--v-scrollbar-offset"),
          a.classList.remove("v-overlay-scroll-blocked"),
          (a.scrollLeft = -v),
          (a.scrollTop = -s),
          (a.style.scrollBehavior = E);
      }),
        l && e.root.value.classList.remove("v-overlay--scroll-blocked");
    });
}
function Yt(e, t, n) {
  let o = !1,
    r = -1,
    i = -1;
  function l(a) {
    zt(() => {
      const u = performance.now();
      e.updateLocation.value?.(a),
        (o = (performance.now() - u) / (1e3 / 60) > 2);
    });
  }
  (i = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(
    () => {
      n.run(() => {
        $e(Se(e.target.value, e.contentEl.value), (a) => {
          o
            ? (cancelAnimationFrame(r),
              (r = requestAnimationFrame(() => {
                r = requestAnimationFrame(() => {
                  l(a);
                });
              })))
            : l(a);
        });
      });
    },
  )),
    V(() => {
      typeof cancelIdleCallback < "u" && cancelIdleCallback(i),
        cancelAnimationFrame(r);
    });
}
function Se(e, t) {
  return Array.isArray(e)
    ? document.elementsFromPoint(...e).find((n) => !t?.contains(n))
    : (e ?? t);
}
function $e(e, t) {
  const n = [document, ...ae(e)];
  n.forEach((o) => {
    o.addEventListener("scroll", t, { passive: !0 });
  }),
    V(() => {
      n.forEach((o) => {
        o.removeEventListener("scroll", t);
      });
    });
}
const Xt = Symbol.for("vuetify:v-menu"),
  Ut = q(
    { closeDelay: [Number, String], openDelay: [Number, String] },
    "delay",
  );
function Gt(e, t) {
  let n = () => {};
  function o(l, a) {
    n?.();
    const u = l ? e.openDelay : e.closeDelay,
      v = Math.max(a?.minDelay ?? 0, Number(u ?? 0));
    return new Promise((s) => {
      n = Ze(v, () => {
        t?.(l), s(l);
      });
    });
  }
  function r() {
    return o(!0);
  }
  function i(l) {
    return o(!1, l);
  }
  return { clearDelay: n, runOpenDelay: r, runCloseDelay: i };
}
const Qt = q(
  {
    target: [String, Object],
    activator: [String, Object],
    activatorProps: { type: Object, default: () => ({}) },
    openOnClick: { type: Boolean, default: void 0 },
    openOnHover: Boolean,
    openOnFocus: { type: Boolean, default: void 0 },
    closeOnContentClick: Boolean,
    ...Ut(),
  },
  "VOverlay-activator",
);
function Zt(e, t) {
  let { isActive: n, isTop: o, contentEl: r } = t;
  const i = se("useActivator"),
    l = _();
  let a = !1,
    u = !1,
    v = !0;
  const s = B(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
    E = B(
      () =>
        e.openOnClick || (e.openOnClick == null && !e.openOnHover && !s.value),
    ),
    { runOpenDelay: P, runCloseDelay: y } = Gt(e, (c) => {
      c === ((e.openOnHover && a) || (s.value && u)) &&
        !(e.openOnHover && n.value && !o.value) &&
        (n.value !== c && (v = !0), (n.value = c));
    }),
    S = _(),
    h = {
      onClick: (c) => {
        c.stopPropagation(),
          (l.value = c.currentTarget || c.target),
          n.value || (S.value = [c.clientX, c.clientY]),
          (n.value = !n.value);
      },
      onMouseenter: (c) => {
        (a = !0), (l.value = c.currentTarget || c.target), P();
      },
      onMouseleave: (c) => {
        (a = !1), y();
      },
      onFocus: (c) => {
        Je(c.target, ":focus-visible") !== !1 &&
          ((u = !0),
          c.stopPropagation(),
          (l.value = c.currentTarget || c.target),
          P());
      },
      onBlur: (c) => {
        (u = !1), c.stopPropagation(), y({ minDelay: 1 });
      },
    },
    C = B(() => {
      const c = {};
      return (
        E.value && (c.onClick = h.onClick),
        e.openOnHover &&
          ((c.onMouseenter = h.onMouseenter),
          (c.onMouseleave = h.onMouseleave)),
        s.value && ((c.onFocus = h.onFocus), (c.onBlur = h.onBlur)),
        c
      );
    }),
    f = B(() => {
      const c = {};
      if (
        (e.openOnHover &&
          ((c.onMouseenter = () => {
            (a = !0), P();
          }),
          (c.onMouseleave = () => {
            (a = !1), y();
          })),
        s.value &&
          ((c.onFocusin = (F) => {
            F.target.matches(":focus-visible") && ((u = !0), P());
          }),
          (c.onFocusout = () => {
            (u = !1), y({ minDelay: 1 });
          })),
        e.closeOnContentClick)
      ) {
        const F = _e(Xt, null);
        c.onClick = () => {
          (n.value = !1), F?.closeParents();
        };
      }
      return c;
    }),
    d = B(() => {
      const c = {};
      return (
        e.openOnHover &&
          ((c.onMouseenter = () => {
            v && ((a = !0), (v = !1), P());
          }),
          (c.onMouseleave = () => {
            (a = !1), y();
          })),
        c
      );
    });
  L(o, (c) => {
    c &&
      ((e.openOnHover && !a && (!s.value || !u)) ||
        (s.value && !u && (!e.openOnHover || !a))) &&
      !r.value?.contains(document.activeElement) &&
      (n.value = !1);
  }),
    L(
      n,
      (c) => {
        c ||
          setTimeout(() => {
            S.value = void 0;
          });
      },
      { flush: "post" },
    );
  const w = ke();
  we(() => {
    w.value &&
      ie(() => {
        l.value = w.el;
      });
  });
  const b = ke(),
    k = B(() =>
      e.target === "cursor" && S.value
        ? S.value
        : b.value
          ? b.el
          : je(e.target, i) || l.value,
    ),
    D = B(() => (Array.isArray(k.value) ? void 0 : k.value));
  let T;
  return (
    L(
      () => !!e.activator,
      (c) => {
        c && H
          ? ((T = Ie()),
            T.run(() => {
              Jt(e, i, { activatorEl: l, activatorEvents: C });
            }))
          : T && T.stop();
      },
      { flush: "post", immediate: !0 },
    ),
    V(() => {
      T?.stop();
    }),
    {
      activatorEl: l,
      activatorRef: w,
      target: k,
      targetEl: D,
      targetRef: b,
      activatorEvents: C,
      contentEvents: f,
      scrimEvents: d,
    }
  );
}
function Jt(e, t, n) {
  let { activatorEl: o, activatorEvents: r } = n;
  L(
    () => e.activator,
    (u, v) => {
      if (v && u !== v) {
        const s = a(v);
        s && l(s);
      }
      u && ie(() => i());
    },
    { immediate: !0 },
  ),
    L(
      () => e.activatorProps,
      () => {
        i();
      },
    ),
    V(() => {
      l();
    });
  function i() {
    let u =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(),
      v =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    u && Ft(u, z(r.value, v));
  }
  function l() {
    let u =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(),
      v =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : e.activatorProps;
    u && Mt(u, z(r.value, v));
  }
  function a() {
    let u =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : e.activator;
    const v = je(u, t);
    return (o.value = v?.nodeType === Node.ELEMENT_NODE ? v : void 0), o.value;
  }
}
function je(e, t) {
  if (!e) return;
  let n;
  if (e === "parent") {
    let o = t?.proxy?.$el?.parentNode;
    for (; o?.hasAttribute("data-no-activator"); ) o = o.parentNode;
    n = o;
  } else
    typeof e == "string"
      ? (n = document.querySelector(e))
      : "$el" in e
        ? (n = e.$el)
        : (n = e);
  return n;
}
const en = q(
    {
      retainFocus: Boolean,
      captureFocus: Boolean,
      disableInitialFocus: Boolean,
    },
    "focusTrap",
  ),
  ne = new Map();
let Fe = 0;
function Me(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(ne.values())
    .filter((v) => {
      let { isActive: s, contentEl: E } = v;
      return s.value && E.value?.contains(t);
    })
    .map((v) => v.contentEl.value);
  let o,
    r = t.parentElement;
  for (; r; ) {
    if (n.includes(r)) {
      o = r;
      break;
    }
    r = r.parentElement;
  }
  if (!o) return;
  const i = Z(o).filter((v) => v.tabIndex >= 0);
  if (!i.length) return;
  const l = document.activeElement;
  if (i.length === 1 && i[0].classList.contains("v-list") && i[0].contains(l)) {
    e.preventDefault();
    return;
  }
  const a = i[0],
    u = i[i.length - 1];
  e.shiftKey &&
    (l === a || (a.classList.contains("v-list") && a.contains(l))) &&
    (e.preventDefault(), u.focus()),
    !e.shiftKey &&
      (l === u || (u.classList.contains("v-list") && u.contains(l))) &&
      (e.preventDefault(), a.focus());
}
function tn(e, t) {
  let { isActive: n, localTop: o, activatorEl: r, contentEl: i } = t;
  const l = Symbol("trap");
  let a = !1,
    u = -1;
  async function v() {
    (a = !0),
      (u = window.setTimeout(() => {
        a = !1;
      }, 100));
  }
  async function s(y) {
    const S = y.relatedTarget,
      h = y.target;
    document.removeEventListener("pointerdown", v),
      document.removeEventListener("keydown", E),
      await ie(),
      n.value &&
        !a &&
        S !== h &&
        i.value &&
        ye(o) &&
        ![document, i.value].includes(h) &&
        !i.value.contains(h) &&
        Z(i.value)[0]?.focus();
  }
  function E(y) {
    if (
      y.key === "Tab" &&
      (document.removeEventListener("keydown", E),
      n.value && i.value && y.target && !i.value.contains(y.target))
    ) {
      const S = Z(document.documentElement);
      if (
        (y.shiftKey && y.target === S.at(0)) ||
        (!y.shiftKey && y.target === S.at(-1))
      ) {
        const h = Z(i.value);
        h.length > 0 && (y.preventDefault(), h[0].focus());
      }
    }
  }
  const P = oe(() => n.value && e.captureFocus && !e.disableInitialFocus);
  H &&
    (L(
      () => e.retainFocus,
      (y) => {
        y ? ne.set(l, { isActive: n, contentEl: i }) : ne.delete(l);
      },
      { immediate: !0 },
    ),
    L(
      P,
      (y) => {
        y
          ? (document.addEventListener("pointerdown", v),
            document.addEventListener("focusin", s, { once: !0 }),
            document.addEventListener("keydown", E))
          : (document.removeEventListener("pointerdown", v),
            document.removeEventListener("focusin", s),
            document.removeEventListener("keydown", E));
      },
      { immediate: !0 },
    ),
    Fe++ < 1 && document.addEventListener("keydown", Me)),
    V(() => {
      ne.delete(l),
        clearTimeout(u),
        document.removeEventListener("pointerdown", v),
        document.removeEventListener("focusin", s),
        document.removeEventListener("keydown", E),
        --Fe < 1 && document.removeEventListener("keydown", Me);
    });
}
function nn() {
  if (!H) return K(!1);
  const { ssr: e } = et();
  if (e) {
    const t = K(!1);
    return (
      tt(() => {
        t.value = !0;
      }),
      t
    );
  } else return K(!0);
}
const on = q({ eager: Boolean }, "lazy");
function an(e, t) {
  const n = K(!1),
    o = oe(() => n.value || e.eager || t.value);
  L(t, () => (n.value = !0));
  function r() {
    e.eager || (n.value = !1);
  }
  return { isBooted: n, hasContent: o, onAfterLeave: r };
}
function rn() {
  const t = se("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Be = Symbol.for("vuetify:stack"),
  U = He([]);
function sn(e, t, n) {
  const o = se("useStack"),
    r = !n,
    i = _e(Be, void 0),
    l = He({ activeChildren: new Set() });
  at(Be, l);
  const a = K(Number(ye(t)));
  be(e, () => {
    const s = U.at(-1)?.[1];
    (a.value = s ? s + 10 : Number(ye(t))),
      r && U.push([o.uid, a.value]),
      i?.activeChildren.add(o.uid),
      V(() => {
        if (r) {
          const E = nt(U).findIndex((P) => P[0] === o.uid);
          U.splice(E, 1);
        }
        i?.activeChildren.delete(o.uid);
      });
  });
  const u = K(!0);
  r &&
    we(() => {
      const s = U.at(-1)?.[0] === o.uid;
      setTimeout(() => (u.value = s));
    });
  const v = oe(() => !l.activeChildren.size);
  return {
    globalTop: ot(u),
    localTop: v,
    stackStyles: oe(() => ({ zIndex: a.value })),
  };
}
function ln(e) {
  return {
    teleportTarget: B(() => {
      const n = e();
      if (n === !0 || !H) return;
      const o =
        n === !1
          ? document.body
          : typeof n == "string"
            ? document.querySelector(n)
            : n;
      if (o == null) return;
      let r = [...o.children].find((i) => i.matches(".v-overlay-container"));
      return (
        r ||
          ((r = document.createElement("div")),
          (r.className = "v-overlay-container"),
          o.appendChild(r)),
        r
      );
    }),
  };
}
function cn() {
  return !0;
}
function Ke(e, t, n) {
  if (!e || Ye(e, n) === !1) return !1;
  const o = We(t);
  if (typeof ShadowRoot < "u" && o instanceof ShadowRoot && o.host === e.target)
    return !1;
  const r = ((typeof n.value == "object" && n.value.include) || (() => []))();
  return r.push(t), !r.some((i) => i?.contains(e.target));
}
function Ye(e, t) {
  return ((typeof t.value == "object" && t.value.closeConditional) || cn)(e);
}
function un(e, t, n) {
  const o = typeof n.value == "function" ? n.value : n.value.handler;
  (e.shadowTarget = e.target),
    t._clickOutside.lastMousedownWasOutside &&
      Ke(e, t, n) &&
      setTimeout(() => {
        Ye(e, n) && o && o(e);
      }, 0);
}
function Re(e, t) {
  const n = We(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Ne = {
  mounted(e, t) {
    const n = (r) => un(r, e, t),
      o = (r) => {
        e._clickOutside.lastMousedownWasOutside = Ke(r, e, t);
      };
    Re(e, (r) => {
      r.addEventListener("click", n, !0),
        r.addEventListener("mousedown", o, !0);
    }),
      e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }),
      (e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: o });
  },
  beforeUnmount(e, t) {
    e._clickOutside &&
      (Re(e, (n) => {
        if (!n || !e._clickOutside?.[t.instance.$.uid]) return;
        const { onClick: o, onMousedown: r } =
          e._clickOutside[t.instance.$.uid];
        n.removeEventListener("click", o, !0),
          n.removeEventListener("mousedown", r, !0);
      }),
      delete e._clickOutside[t.instance.$.uid]);
  },
};
function fn(e) {
  const { modelValue: t, color: n, ...o } = e;
  return ee(
    wt,
    { name: "fade-transition", appear: !0 },
    {
      default: () => [
        e.modelValue &&
          J(
            "div",
            z(
              {
                class: [
                  "v-overlay__scrim",
                  e.color.backgroundColorClasses.value,
                ],
                style: e.color.backgroundColorStyles.value,
              },
              o,
            ),
            null,
          ),
      ],
    },
  );
}
const vn = q(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      opacity: [Number, String],
      noClickAnimation: Boolean,
      modelValue: Boolean,
      persistent: Boolean,
      scrim: { type: [Boolean, String], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...Qt(),
      ...it(),
      ...xt(),
      ...on(),
      ...Dt(),
      ...qt(),
      ...en(),
      ...rt(),
      ...kt(),
    },
    "VOverlay",
  ),
  yn = st()({
    name: "VOverlay",
    directives: { vClickOutside: Ne },
    inheritAttrs: !1,
    props: {
      _disableGlobalStack: Boolean,
      ...lt(vn(), ["disableInitialFocus"]),
    },
    emits: {
      "click:outside": (e) => !0,
      "update:modelValue": (e) => !0,
      keydown: (e) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(e, t) {
      let { slots: n, attrs: o, emit: r } = t;
      const i = se("VOverlay"),
        l = _(),
        a = _(),
        u = _(),
        v = ct(e, "modelValue"),
        s = B({
          get: () => v.value,
          set: (g) => {
            (g && e.disabled) || (v.value = g);
          },
        }),
        { themeClasses: E } = ut(e),
        { rtlClasses: P, isRtl: y } = ft(),
        { hasContent: S, onAfterLeave: h } = an(e, s),
        C = Ot(() => (typeof e.scrim == "string" ? e.scrim : null)),
        {
          globalTop: f,
          localTop: d,
          stackStyles: w,
        } = sn(s, () => e.zIndex, e._disableGlobalStack),
        {
          activatorEl: b,
          activatorRef: k,
          target: D,
          targetEl: T,
          targetRef: c,
          activatorEvents: F,
          contentEvents: $,
          scrimEvents: le,
        } = Zt(e, { isActive: s, isTop: d, contentEl: u }),
        { teleportTarget: Y } = ln(() => {
          const g = e.attach || e.contained;
          if (g) return g;
          const j = b?.value?.getRootNode() || i.proxy?.$el?.getRootNode();
          return j instanceof ShadowRoot ? j : !1;
        }),
        { dimensionStyles: p } = At(e),
        O = nn(),
        { scopeId: m } = rn();
      L(
        () => e.disabled,
        (g) => {
          g && (s.value = !1);
        },
      );
      const { contentStyles: A, updateLocation: M } = It(e, {
        isRtl: y,
        contentEl: u,
        target: D,
        isActive: s,
      });
      $t(e, {
        root: l,
        contentEl: u,
        targetEl: T,
        target: D,
        isActive: s,
        updateLocation: M,
      });
      function R(g) {
        r("click:outside", g), e.persistent ? Q() : (s.value = !1);
      }
      function X(g) {
        return (
          s.value &&
          d.value &&
          (!e.scrim ||
            g.target === a.value ||
            (g instanceof MouseEvent && g.shadowTarget === a.value))
        );
      }
      tn(e, { isActive: s, localTop: d, contentEl: u, activatorEl: b }),
        H &&
          L(
            s,
            (g) => {
              g
                ? window.addEventListener("keydown", x)
                : window.removeEventListener("keydown", x);
            },
            { immediate: !0 },
          ),
        vt(() => {
          H && window.removeEventListener("keydown", x);
        });
      function x(g) {
        g.key === "Escape" &&
          f.value &&
          (u.value?.contains(document.activeElement) || r("keydown", g),
          e.persistent
            ? Q()
            : ((s.value = !1),
              u.value?.contains(document.activeElement) && b.value?.focus()));
      }
      function I(g) {
        (g.key === "Escape" && !f.value) || r("keydown", g);
      }
      const G = Lt();
      be(
        () => e.closeOnBack,
        () => {
          Pt(G, (g) => {
            f.value && s.value
              ? (g(!1), e.persistent ? Q() : (s.value = !1))
              : g();
          });
        },
      );
      const W = _();
      L(
        () => s.value && (e.absolute || e.contained) && Y.value == null,
        (g) => {
          if (g) {
            const j = Bt(l.value);
            j && j !== document.scrollingElement && (W.value = j.scrollTop);
          }
        },
      );
      function Q() {
        e.noClickAnimation ||
          (u.value &&
            Tt(
              u.value,
              [
                { transformOrigin: "center" },
                { transform: "scale(1.03)" },
                { transformOrigin: "center" },
              ],
              { duration: 150, easing: dt },
            ));
      }
      function Xe() {
        r("afterEnter");
      }
      function Ue() {
        h(), r("afterLeave");
      }
      return (
        mt(() =>
          J(bt, null, [
            n.activator?.({
              isActive: s.value,
              targetRef: c,
              props: z({ ref: k }, F.value, e.activatorProps),
            }),
            O.value &&
              S.value &&
              ee(
                ht,
                { disabled: !Y.value, to: Y.value },
                {
                  default: () => [
                    J(
                      "div",
                      z(
                        {
                          class: [
                            "v-overlay",
                            {
                              "v-overlay--absolute": e.absolute || e.contained,
                              "v-overlay--active": s.value,
                              "v-overlay--contained": e.contained,
                            },
                            E.value,
                            P.value,
                            e.class,
                          ],
                          style: [
                            w.value,
                            {
                              "--v-overlay-opacity": e.opacity,
                              top: N(W.value),
                            },
                            e.style,
                          ],
                          ref: l,
                          onKeydown: I,
                        },
                        m,
                        o,
                      ),
                      [
                        ee(
                          fn,
                          z(
                            {
                              color: C,
                              modelValue: s.value && !!e.scrim,
                              ref: a,
                            },
                            le.value,
                          ),
                          null,
                        ),
                        ee(
                          Ct,
                          {
                            appear: !0,
                            persisted: !0,
                            transition: e.transition,
                            target: D.value,
                            onAfterEnter: Xe,
                            onAfterLeave: Ue,
                          },
                          {
                            default: () => [
                              yt(
                                J(
                                  "div",
                                  z(
                                    {
                                      ref: u,
                                      class: [
                                        "v-overlay__content",
                                        e.contentClass,
                                      ],
                                      style: [p.value, A.value],
                                    },
                                    $.value,
                                    e.contentProps,
                                  ),
                                  [n.default?.({ isActive: s })],
                                ),
                                [
                                  [gt, s.value],
                                  [
                                    Ne,
                                    {
                                      handler: R,
                                      closeConditional: X,
                                      include: () => [b.value],
                                    },
                                  ],
                                ],
                              ),
                            ],
                          },
                        ),
                      ],
                    ),
                  ],
                },
              ),
          ]),
        ),
        {
          activatorEl: b,
          scrimEl: a,
          target: D,
          animateClick: Q,
          contentEl: u,
          rootEl: l,
          globalTop: f,
          localTop: d,
          updateLocation: M,
        }
      );
    },
  });
export {
  yn as V,
  rn as a,
  vn as b,
  Xt as c,
  tn as d,
  Gt as e,
  Ut as f,
  Bt as g,
  en as h,
  on as m,
  an as u,
};
