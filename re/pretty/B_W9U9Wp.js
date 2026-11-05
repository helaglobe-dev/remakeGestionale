import {
  bl as Y,
  bm as Z,
  U as z,
  V as C,
  ba as bt,
  aZ as Oe,
  bn as ze,
  bo as O,
  bp as Re,
  bq as yt,
  aV as pt,
  br as Ct,
  bs as W,
  ay as p,
  s as ke,
  bf as kt,
  bt as St,
  W as D,
  b5 as H,
  aB as G,
  _ as me,
  bu as wt,
  bv as xt,
  B as w,
  I,
  a3 as P,
  k as h,
  M as ge,
  b6 as he,
  bw as _t,
  bx as We,
  P as K,
  by as Pt,
  h as Vt,
  aM as f,
  z as S,
  Q as Bt,
  bz as ne,
  X as Et,
  aP as Ae,
  aQ as Rt,
  e as De,
  as as Se,
  bb as be,
  Y as Me,
  o as Lt,
  bg as It,
  bA as Nt,
  bB as Tt,
  L as $t,
  a$ as Ot,
  bC as Le,
  b3 as zt,
  a1 as Fe,
  aN as He,
  r as we,
  bD as Wt,
  aL as Ge,
  ax as Q,
  b2 as ae,
  bE as At,
  az as je,
  bF as ye,
  b4 as Dt,
  a2 as Mt,
  A as Ft,
} from "./CYsiv7Qj.js";
const qe = ["top", "bottom"],
  Ht = ["start", "end", "left", "right"];
function Gt(e, t) {
  let [n, a] = e.split(" ");
  return (
    a || (a = Y(qe, n) ? "start" : Y(Ht, n) ? "top" : "center"),
    { side: Ie(n, t), align: Ie(a, t) }
  );
}
function Ie(e, t) {
  return e === "start"
    ? t
      ? "right"
      : "left"
    : e === "end"
      ? t
        ? "left"
        : "right"
      : e;
}
function $n(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.side],
    align: e.align,
  };
}
function On(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[e.align],
  };
}
function zn(e) {
  return { side: e.align, align: e.side };
}
function Wn(e) {
  return Y(qe, e.side) ? "y" : "x";
}
class N {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1,
      a = t instanceof Element,
      s = a ? 1 + (1 - n) / n : 1,
      { x: i, y: r, width: l, height: o } = a ? t.getBoundingClientRect() : t;
    (this.x = i * s),
      (this.y = r * s),
      (this.width = l * s),
      (this.height = o * s);
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function An(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right),
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom),
    },
  };
}
function Dn(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1,
      n = 1 + (1 - t) / t;
    return new N({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new N(e);
}
function Mn(e) {
  if (e === document.documentElement)
    if (visualViewport) {
      const t = document.body.currentCSSZoom ?? 1;
      return new N({
        x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
        y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
        width: (visualViewport.width * visualViewport.scale) / t,
        height: (visualViewport.height * visualViewport.scale) / t,
      });
    } else
      return new N({
        x: 0,
        y: 0,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
  else return new N(e);
}
function Fn(e) {
  const t = new N(e),
    n = getComputedStyle(e),
    a = n.transform;
  if (a) {
    let s, i, r, l, o;
    if (a.startsWith("matrix3d("))
      (s = a.slice(9, -1).split(/, /)),
        (i = Number(s[0])),
        (r = Number(s[5])),
        (l = Number(s[12])),
        (o = Number(s[13]));
    else if (a.startsWith("matrix("))
      (s = a.slice(7, -1).split(/, /)),
        (i = Number(s[0])),
        (r = Number(s[3])),
        (l = Number(s[4])),
        (o = Number(s[5]));
    else return new N(t);
    const c = n.transformOrigin,
      v = t.x - l - (1 - i) * parseFloat(c),
      m = t.y - o - (1 - r) * parseFloat(c.slice(c.indexOf(" ") + 1)),
      u = i ? t.width / i : e.offsetWidth + 1,
      g = r ? t.height / r : e.offsetHeight + 1;
    return new N({ x: v, y: m, width: u, height: g });
  } else return new N(t);
}
function Hn(e, t, n) {
  if (typeof e.animate > "u") return { finished: Promise.resolve() };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return (
    typeof a.finished > "u" &&
      (a.finished = new Promise((s) => {
        a.onfinish = () => {
          s(a);
        };
      })),
    a
  );
}
function jt(e, t, n, a) {
  if (!n || Z(e) || Z(t)) return;
  const s = n.get(e);
  if (s) s.set(t, a);
  else {
    const i = new WeakMap();
    i.set(t, a), n.set(e, i);
  }
}
function qt(e, t, n) {
  if (!n || Z(e) || Z(t)) return null;
  const a = n.get(e)?.get(t);
  if (typeof a == "boolean") return a;
  const s = n.get(t)?.get(e);
  return typeof s == "boolean" ? s : null;
}
function xe(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0
      ? arguments[2]
      : new WeakMap();
  if (e === t) return !0;
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return !1;
  const s = qt(e, t, n);
  return s || (jt(e, t, n, !0), a.every((i) => xe(e[i], t[i], n)));
}
const Ut = C(
    {
      defaults: Object,
      disabled: Boolean,
      reset: [Number, String],
      root: [Boolean, String],
      scoped: Boolean,
    },
    "VDefaultsProvider",
  ),
  le = z(!1)({
    name: "VDefaultsProvider",
    props: Ut(),
    setup(e, t) {
      let { slots: n } = t;
      const { defaults: a, disabled: s, reset: i, root: r, scoped: l } = bt(e);
      return (
        Oe(a, { reset: i, root: r, scoped: l, disabled: s }),
        () => n.default?.()
      );
    },
  });
function _e(e) {
  return ze(() => {
    const { class: t, style: n } = Xt(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function J(e) {
  const { colorClasses: t, colorStyles: n } = _e(() => ({ text: O(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function ue(e) {
  const { colorClasses: t, colorStyles: n } = _e(() => ({ background: O(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function Xt(e) {
  const t = O(e),
    n = [],
    a = {};
  if (t.background)
    if (Re(t.background)) {
      if (((a.backgroundColor = t.background), !t.text && yt(t.background))) {
        const s = pt(t.background);
        if (s.a == null || s.a === 1) {
          const i = Ct(s);
          (a.color = i), (a.caretColor = i);
        }
      }
    } else n.push(`bg-${t.background}`);
  return (
    t.text &&
      (Re(t.text)
        ? ((a.color = t.text), (a.caretColor = t.text))
        : n.push(`text-${t.text}`)),
    { class: n, style: a }
  );
}
const Yt = ["x-small", "small", "default", "large", "x-large"],
  Pe = C({ size: { type: [String, Number], default: "default" } }, "size");
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return ze(() => {
    const n = e.size;
    let a, s;
    return (
      Y(Yt, n)
        ? (a = `${t}--size-${n}`)
        : n && (s = { width: p(n), height: p(n) }),
      { sizeClasses: a, sizeStyles: s }
    );
  });
}
const j = C(
    { tag: { type: [String, Object, Function], default: "div" } },
    "tag",
  ),
  Zt = C(
    {
      color: String,
      disabled: Boolean,
      start: Boolean,
      end: Boolean,
      icon: me,
      opacity: [String, Number],
      ...G(),
      ...Pe(),
      ...j({ tag: "i" }),
      ...H(),
    },
    "VIcon",
  ),
  ce = z()({
    name: "VIcon",
    props: Zt(),
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const s = ke(),
        { themeClasses: i } = kt(),
        { iconData: r } = St(() => s.value || e.icon),
        { sizeClasses: l } = Ve(e),
        { textColorClasses: o, textColorStyles: c } = J(() => e.color);
      return (
        D(() => {
          const v = a.default?.();
          v &&
            (s.value = wt(v).filter(
              (u) =>
                u.type === xt && u.children && typeof u.children == "string",
            )[0]?.children);
          const m = !!(n.onClick || n.onClickOnce);
          return w(
            r.value.component,
            {
              tag: e.tag,
              icon: r.value.icon,
              class: P([
                "v-icon",
                "notranslate",
                i.value,
                l.value,
                o.value,
                {
                  "v-icon--clickable": m,
                  "v-icon--disabled": e.disabled,
                  "v-icon--start": e.start,
                  "v-icon--end": e.end,
                },
                e.class,
              ]),
              style: I([
                { "--v-icon-opacity": e.opacity },
                l.value
                  ? void 0
                  : {
                      fontSize: p(e.size),
                      height: p(e.size),
                      width: p(e.size),
                    },
                c.value,
                e.style,
              ]),
              role: m ? "button" : void 0,
              "aria-hidden": !m,
              tabindex: m ? (e.disabled ? -1 : 0) : void 0,
            },
            { default: () => [v] },
          );
        }),
        {}
      );
    },
  }),
  Kt = C(
    {
      height: [Number, String],
      maxHeight: [Number, String],
      maxWidth: [Number, String],
      minHeight: [Number, String],
      minWidth: [Number, String],
      width: [Number, String],
    },
    "dimension",
  );
function Qt(e) {
  return {
    dimensionStyles: h(() => {
      const n = {},
        a = p(e.height),
        s = p(e.maxHeight),
        i = p(e.maxWidth),
        r = p(e.minHeight),
        l = p(e.minWidth),
        o = p(e.width);
      return (
        a != null && (n.height = a),
        s != null && (n.maxHeight = s),
        i != null && (n.maxWidth = i),
        r != null && (n.minHeight = r),
        l != null && (n.minWidth = l),
        o != null && (n.width = o),
        n
      );
    }),
  };
}
const Be = C(
  {
    rounded: { type: [Boolean, Number, String], default: void 0 },
    tile: Boolean,
  },
  "rounded",
);
function Ee(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return {
    roundedClasses: h(() => {
      const a = ge(e) ? e.value : e.rounded,
        s = ge(e) ? !1 : e.tile,
        i = [];
      if (s || a === !1) i.push("rounded-0");
      else if (a === !0 || a === "") i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const r of String(a).split(" ")) i.push(`rounded-${r}`);
      return i;
    }),
  };
}
const Gn = C(
    {
      transition: {
        type: null,
        default: "fade-transition",
        validator: (e) => e !== !0,
      },
    },
    "transition",
  ),
  jn = (e, t) => {
    let { slots: n } = t;
    const { transition: a, disabled: s, group: i, ...r } = e,
      { component: l = i ? _t : We, ...o } = he(a) ? a : {};
    let c;
    return (
      he(a)
        ? (c = K(o, Pt({ disabled: s, group: i }), r))
        : (c = K({ name: s || !a ? "" : a }, r)),
      Vt(l, c, n)
    );
  },
  Ue = C({ border: [Boolean, Number, String] }, "border");
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return {
    borderClasses: h(() => {
      const a = e.border;
      return a === !0 || a === ""
        ? `${t}--border`
        : typeof a == "string" || a === 0
          ? String(a)
              .split(" ")
              .map((s) => `border-${s}`)
          : [];
    }),
  };
}
const Jt = [null, "default", "comfortable", "compact"],
  Ye = C(
    {
      density: {
        type: String,
        default: "default",
        validator: (e) => Jt.includes(e),
      },
    },
    "density",
  );
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return { densityClasses: f(() => `${t}--density-${e.density}`) };
}
const en = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function tn(e, t) {
  return S(Bt, null, [
    e && S("span", { key: "overlay", class: P(`${t}__overlay`) }, null),
    S("span", { key: "underlay", class: P(`${t}__underlay`) }, null),
  ]);
}
const Ke = C(
  {
    color: String,
    variant: {
      type: String,
      default: "elevated",
      validator: (e) => en.includes(e),
    },
  },
  "variant",
);
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  const n = f(() => {
      const { variant: i } = O(e);
      return `${t}--variant-${i}`;
    }),
    { colorClasses: a, colorStyles: s } = _e(() => {
      const { variant: i, color: r } = O(e);
      return { [["elevated", "flat"].includes(i) ? "background" : "text"]: r };
    });
  return { colorClasses: a, colorStyles: s, variantClasses: n };
}
const pe = Symbol("rippleStop"),
  an = 80;
function Ne(e, t) {
  (e.style.transform = t), (e.style.webkitTransform = t);
}
function Ce(e) {
  return e.constructor.name === "TouchEvent";
}
function Qe(e) {
  return e.constructor.name === "KeyboardEvent";
}
const sn = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = 0,
      s = 0;
    if (!Qe(e)) {
      const m = t.getBoundingClientRect(),
        u = Ce(e) ? e.touches[e.touches.length - 1] : e;
      (a = u.clientX - m.left), (s = u.clientY - m.top);
    }
    let i = 0,
      r = 0.3;
    t._ripple?.circle
      ? ((r = 0.15),
        (i = t.clientWidth / 2),
        (i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (s - i) ** 2) / 4))
      : (i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2);
    const l = `${(t.clientWidth - i * 2) / 2}px`,
      o = `${(t.clientHeight - i * 2) / 2}px`,
      c = n.center ? l : `${a - i}px`,
      v = n.center ? o : `${s - i}px`;
    return { radius: i, scale: r, x: c, y: v, centerX: l, centerY: o };
  },
  ee = {
    show(e, t) {
      let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!t?._ripple?.enabled) return;
      const a = document.createElement("span"),
        s = document.createElement("span");
      a.appendChild(s),
        (a.className = "v-ripple__container"),
        n.class && (a.className += ` ${n.class}`);
      const {
          radius: i,
          scale: r,
          x: l,
          y: o,
          centerX: c,
          centerY: v,
        } = sn(e, t, n),
        m = `${i * 2}px`;
      (s.className = "v-ripple__animation"),
        (s.style.width = m),
        (s.style.height = m),
        t.appendChild(a);
      const u = window.getComputedStyle(t);
      u &&
        u.position === "static" &&
        ((t.style.position = "relative"),
        (t.dataset.previousPosition = "static")),
        s.classList.add("v-ripple__animation--enter"),
        s.classList.add("v-ripple__animation--visible"),
        Ne(s, `translate(${l}, ${o}) scale3d(${r},${r},${r})`),
        (s.dataset.activated = String(performance.now())),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.classList.remove("v-ripple__animation--enter"),
              s.classList.add("v-ripple__animation--in"),
              Ne(s, `translate(${c}, ${v}) scale3d(1,1,1)`);
          });
        });
    },
    hide(e) {
      if (!e?._ripple?.enabled) return;
      const t = e.getElementsByClassName("v-ripple__animation");
      if (t.length === 0) return;
      const n = Array.from(t).findLast((i) => !i.dataset.isHiding);
      if (n) n.dataset.isHiding = "true";
      else return;
      const a = performance.now() - Number(n.dataset.activated),
        s = Math.max(250 - a, 0);
      setTimeout(() => {
        n.classList.remove("v-ripple__animation--in"),
          n.classList.add("v-ripple__animation--out"),
          setTimeout(() => {
            e.getElementsByClassName("v-ripple__animation").length === 1 &&
              e.dataset.previousPosition &&
              ((e.style.position = e.dataset.previousPosition),
              delete e.dataset.previousPosition),
              n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
          }, 300);
      }, s);
    },
  };
function Je(e) {
  return typeof e > "u" || !!e;
}
function M(e) {
  const t = {},
    n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[pe])) {
    if (((e[pe] = !0), Ce(e)))
      (n._ripple.touched = !0), (n._ripple.isTouch = !0);
    else if (n._ripple.isTouch) return;
    if (
      ((t.center = n._ripple.centered || Qe(e)),
      n._ripple.class && (t.class = n._ripple.class),
      Ce(e))
    ) {
      if (n._ripple.showTimerCommit) return;
      (n._ripple.showTimerCommit = () => {
        ee.show(e, n, t);
      }),
        (n._ripple.showTimer = window.setTimeout(() => {
          n?._ripple?.showTimerCommit &&
            (n._ripple.showTimerCommit(), (n._ripple.showTimerCommit = null));
        }, an));
    } else ee.show(e, n, t);
  }
}
function te(e) {
  e[pe] = !0;
}
function V(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (
      (window.clearTimeout(t._ripple.showTimer),
      e.type === "touchend" && t._ripple.showTimerCommit)
    ) {
      t._ripple.showTimerCommit(),
        (t._ripple.showTimerCommit = null),
        (t._ripple.showTimer = window.setTimeout(() => {
          V(e);
        }));
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }),
      ee.hide(t);
  }
}
function et(e) {
  const t = e.currentTarget;
  t?._ripple &&
    (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
    window.clearTimeout(t._ripple.showTimer));
}
let F = !1;
function rn(e, t) {
  !F && t.includes(e.key) && ((F = !0), M(e));
}
function tt(e) {
  (F = !1), V(e);
}
function nt(e) {
  F && ((F = !1), V(e));
}
function at(e, t, n) {
  const { value: a, modifiers: s } = t,
    i = Je(a);
  i || ee.hide(e),
    (e._ripple = e._ripple ?? {}),
    (e._ripple.enabled = i),
    (e._ripple.centered = s.center),
    (e._ripple.circle = s.circle);
  const r = he(a) ? a : {};
  r.class && (e._ripple.class = r.class);
  const l = r.keys ?? ["Enter", "Space"];
  if (((e._ripple.keyDownHandler = (o) => rn(o, l)), i && !n)) {
    if (s.stop) {
      e.addEventListener("touchstart", te, { passive: !0 }),
        e.addEventListener("mousedown", te);
      return;
    }
    e.addEventListener("touchstart", M, { passive: !0 }),
      e.addEventListener("touchend", V, { passive: !0 }),
      e.addEventListener("touchmove", et, { passive: !0 }),
      e.addEventListener("touchcancel", V),
      e.addEventListener("mousedown", M),
      e.addEventListener("mouseup", V),
      e.addEventListener("mouseleave", V),
      e.addEventListener("keydown", e._ripple.keyDownHandler),
      e.addEventListener("keyup", tt),
      e.addEventListener("blur", nt),
      e.addEventListener("dragstart", V, { passive: !0 });
  } else !i && n && st(e);
}
function st(e) {
  e.removeEventListener("touchstart", te),
    e.removeEventListener("mousedown", te),
    e.removeEventListener("touchstart", M),
    e.removeEventListener("touchend", V),
    e.removeEventListener("touchmove", et),
    e.removeEventListener("touchcancel", V),
    e.removeEventListener("mousedown", M),
    e.removeEventListener("mouseup", V),
    e.removeEventListener("mouseleave", V),
    e._ripple?.keyDownHandler &&
      e.removeEventListener("keydown", e._ripple.keyDownHandler),
    e.removeEventListener("keyup", tt),
    e.removeEventListener("blur", nt),
    e.removeEventListener("dragstart", V);
}
function on(e, t) {
  at(e, t, !1);
}
function ln(e) {
  st(e), delete e._ripple;
}
function un(e, t) {
  if (t.value === t.oldValue) return;
  const n = Je(t.oldValue);
  at(e, t, n);
}
const cn = { mounted: on, unmounted: ln, updated: un },
  de = Symbol("Forwarded refs");
function fe(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function qn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  return (
    (e[de] = n),
    new Proxy(e, {
      get(s, i) {
        if (Reflect.has(s, i)) return Reflect.get(s, i);
        if (
          !(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        ) {
          for (const r of n)
            if (r.value && Reflect.has(r.value, i)) {
              const l = Reflect.get(r.value, i);
              return typeof l == "function" ? l.bind(r.value) : l;
            }
        }
      },
      has(s, i) {
        if (Reflect.has(s, i)) return !0;
        if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
          return !1;
        for (const r of n) if (r.value && Reflect.has(r.value, i)) return !0;
        return !1;
      },
      set(s, i, r) {
        if (Reflect.has(s, i)) return Reflect.set(s, i, r);
        if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
          return !1;
        for (const l of n)
          if (l.value && Reflect.has(l.value, i))
            return Reflect.set(l.value, i, r);
        return !1;
      },
      getOwnPropertyDescriptor(s, i) {
        const r = Reflect.getOwnPropertyDescriptor(s, i);
        if (r) return r;
        if (
          !(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        ) {
          for (const l of n) {
            if (!l.value) continue;
            const o =
              fe(l.value, i) ??
              ("_" in l.value ? fe(l.value._?.setupState, i) : void 0);
            if (o) return o;
          }
          for (const l of n) {
            const o = l.value && l.value[de];
            if (!o) continue;
            const c = o.slice();
            for (; c.length; ) {
              const v = c.shift(),
                m = fe(v.value, i);
              if (m) return m;
              const u = v.value && v.value[de];
              u && c.push(...u);
            }
          }
        }
      },
    })
  );
}
const dn = C(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean,
    },
    "group",
  ),
  fn = C(
    { value: null, disabled: Boolean, selectedClass: String },
    "group-item",
  );
function vn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = ne("useGroupItem");
  if (!a)
    throw new Error(
      "[Vuetify] useGroupItem composable must be used inside a component setup function",
    );
  const s = Et();
  Ae(Symbol.for(`${t.description}:id`), s);
  const i = Rt(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(
      `[Vuetify] Could not find useGroup injection with symbol ${t.description}`,
    );
  }
  const r = f(() => e.value),
    l = h(() => !!(i.disabled.value || e.disabled));
  function o() {
    i?.register({ id: s, value: r, disabled: l }, a);
  }
  function c() {
    i?.unregister(s);
  }
  o(), De(() => c());
  const v = h(() => i.isSelected(s)),
    m = h(() => i.items.value[0].id === s),
    u = h(() => i.items.value[i.items.value.length - 1].id === s),
    g = h(() => v.value && [i.selectedClass.value, e.selectedClass]);
  return (
    Se(
      v,
      (y) => {
        a.emit("group:selected", { value: y });
      },
      { flush: "sync" },
    ),
    {
      id: s,
      isSelected: v,
      isFirst: m,
      isLast: u,
      toggle: () => i.select(s, !v.value),
      select: (y) => i.select(s, y),
      selectedClass: g,
      value: r,
      disabled: l,
      group: i,
      register: o,
      unregister: c,
    }
  );
}
function mn(e, t) {
  let n = !1;
  const a = be([]),
    s = Me(
      e,
      "modelValue",
      [],
      (u) => (u === void 0 ? [] : it(a, u === null ? [null] : Nt(u))),
      (u) => {
        const g = hn(a, u);
        return e.multiple ? g : g[0];
      },
    ),
    i = ne("useGroup");
  function r(u, g) {
    const y = u,
      d = Symbol.for(`${t.description}:id`),
      k = Tt(d, i?.vnode).indexOf(g);
    $t(y.value) === void 0 && ((y.value = k), (y.useIndexAsValue = !0)),
      k > -1 ? a.splice(k, 0, y) : a.push(y);
  }
  function l(u) {
    if (n) return;
    o();
    const g = a.findIndex((y) => y.id === u);
    a.splice(g, 1);
  }
  function o() {
    const u = a.find((g) => !g.disabled);
    u && e.mandatory === "force" && !s.value.length && (s.value = [u.id]);
  }
  Lt(() => {
    o();
  }),
    De(() => {
      n = !0;
    }),
    It(() => {
      for (let u = 0; u < a.length; u++)
        a[u].useIndexAsValue && (a[u].value = u);
    });
  function c(u, g) {
    const y = a.find((d) => d.id === u);
    if (!(g && y?.disabled))
      if (e.multiple) {
        const d = s.value.slice(),
          b = d.findIndex((E) => E === u),
          k = ~b;
        if (
          ((g = g ?? !k),
          (k && e.mandatory && d.length <= 1) ||
            (!k && e.max != null && d.length + 1 > e.max))
        )
          return;
        b < 0 && g ? d.push(u) : b >= 0 && !g && d.splice(b, 1), (s.value = d);
      } else {
        const d = s.value.includes(u);
        if ((e.mandatory && d) || (!d && !g)) return;
        s.value = (g ?? !d) ? [u] : [];
      }
  }
  function v(u) {
    if ((e.multiple, s.value.length)) {
      const g = s.value[0],
        y = a.findIndex((k) => k.id === g);
      let d = (y + u) % a.length,
        b = a[d];
      for (; b.disabled && d !== y; ) (d = (d + u) % a.length), (b = a[d]);
      if (b.disabled) return;
      s.value = [a[d].id];
    } else {
      const g = a.find((y) => !y.disabled);
      g && (s.value = [g.id]);
    }
  }
  const m = {
    register: r,
    unregister: l,
    selected: s,
    select: c,
    disabled: f(() => e.disabled),
    prev: () => v(a.length - 1),
    next: () => v(1),
    isSelected: (u) => s.value.includes(u),
    selectedClass: f(() => e.selectedClass),
    items: f(() => a),
    getItemIndex: (u) => gn(a, u),
  };
  return Ae(t, m), m;
}
function gn(e, t) {
  const n = it(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function it(e, t) {
  const n = [];
  return (
    t.forEach((a) => {
      const s = e.find((r) => xe(a, r.value)),
        i = e[a];
      s?.value !== void 0 ? n.push(s.id) : i?.useIndexAsValue && n.push(i.id);
    }),
    n
  );
}
function hn(e, t) {
  const n = [];
  return (
    t.forEach((a) => {
      const s = e.findIndex((i) => i.id === a);
      if (~s) {
        const i = e[s];
        n.push(i.value !== void 0 ? i.value : s);
      }
    }),
    n
  );
}
const rt = C(
  {
    elevation: {
      type: [Number, String],
      validator(e) {
        const t = parseInt(e);
        return !isNaN(t) && t >= 0 && t <= 24;
      },
    },
  },
  "elevation",
);
function ot(e) {
  return {
    elevationClasses: f(() => {
      const n = ge(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    }),
  };
}
function bn() {
  const e = ne("useRoute");
  return h(() => e?.proxy?.$route);
}
function Un() {
  return ne("useRouter")?.proxy?.$router;
}
function yn(e, t) {
  const n = Ot("RouterLink"),
    a = f(() => !!(e.href || e.to)),
    s = h(() => a?.value || Le(t, "click") || Le(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const m = f(() => e.href);
    return {
      isLink: a,
      isRouterLink: f(() => !1),
      isClickable: s,
      href: m,
      linkProps: be({ href: m }),
    };
  }
  const i = n.useLink({ to: f(() => e.to || ""), replace: f(() => e.replace) }),
    r = h(() => (e.to ? i : void 0)),
    l = bn(),
    o = h(() =>
      r.value
        ? e.exact
          ? l.value
            ? r.value.isExactActive?.value &&
              xe(r.value.route.value.query, l.value.query)
            : (r.value.isExactActive?.value ?? !1)
          : (r.value.isActive?.value ?? !1)
        : !1,
    ),
    c = h(() => (e.to ? r.value?.route.value.href : e.href)),
    v = f(() => !!e.to);
  return {
    isLink: a,
    isRouterLink: v,
    isClickable: s,
    isActive: o,
    route: r.value?.route,
    navigate: r.value?.navigate,
    href: c,
    linkProps: be({
      href: c,
      "aria-current": f(() => (o.value ? "page" : void 0)),
      "aria-disabled": f(() => (e.disabled && a.value ? "true" : void 0)),
      tabindex: f(() => (e.disabled && a.value ? "-1" : void 0)),
    }),
  };
}
const pn = C(
  { href: String, replace: Boolean, to: [String, Object], exact: Boolean },
  "router",
);
let ve = !1;
function Xn(e, t) {
  let n = !1,
    a,
    s;
  zt &&
    e?.beforeEach &&
    (Fe(() => {
      window.addEventListener("popstate", i),
        (a = e.beforeEach((r, l, o) => {
          ve ? (n ? t(o) : o()) : setTimeout(() => (n ? t(o) : o())), (ve = !0);
        })),
        (s = e?.afterEach(() => {
          ve = !1;
        }));
    }),
    He(() => {
      window.removeEventListener("popstate", i), a?.(), s?.();
    }));
  function i(r) {
    r.state?.replaced || ((n = !0), setTimeout(() => (n = !1)));
  }
}
function lt(e, t) {
  const n = we(),
    a = ke(!1);
  if (Wt) {
    const s = new IntersectionObserver((i) => {
      a.value = !!i.find((r) => r.isIntersecting);
    }, t);
    He(() => {
      s.disconnect();
    }),
      Se(
        n,
        (i, r) => {
          r && (s.unobserve(r), (a.value = !1)), i && s.observe(i);
        },
        { flush: "post" },
      );
  }
  return { intersectionRef: n, isIntersecting: a };
}
const Te = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  },
  ut = C({ location: String }, "location");
function ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Ge();
  return {
    locationStyles: h(() => {
      if (!e.location) return {};
      const { side: i, align: r } = Gt(
        e.location.split(" ").length > 1 ? e.location : `${e.location} center`,
        a.value,
      );
      function l(c) {
        return n ? n(c) : 0;
      }
      const o = {};
      return (
        i !== "center" &&
          (t ? (o[Te[i]] = `calc(100% - ${l(i)}px)`) : (o[i] = 0)),
        r !== "center"
          ? t
            ? (o[Te[r]] = `calc(100% - ${l(r)}px)`)
            : (o[r] = 0)
          : (i === "center"
              ? (o.top = o.left = "50%")
              : (o[
                  { top: "left", bottom: "left", left: "top", right: "top" }[i]
                ] = "50%"),
            (o.transform = {
              top: "translateX(-50%)",
              bottom: "translateX(-50%)",
              left: "translateY(-50%)",
              right: "translateY(-50%)",
              center: "translate(-50%, -50%)",
            }[i])),
        o
      );
    }),
  };
}
const Cn = C(
  {
    chunkCount: { type: [Number, String], default: null },
    chunkWidth: { type: [Number, String], default: null },
    chunkGap: { type: [Number, String], default: 4 },
  },
  "chunks",
);
function kn(e, t) {
  const n = f(() => !!e.chunkCount || !!e.chunkWidth),
    a = h(() => {
      const l = O(t);
      if (!l) return 0;
      if (!e.chunkCount) return Number(e.chunkWidth);
      const o = Number(e.chunkCount);
      return (l - Number(e.chunkGap) * (o - 1)) / o;
    }),
    s = f(() => Number(e.chunkGap)),
    i = h(() => {
      if (!n.value) return {};
      const l = p(s.value),
        o = p(a.value);
      return {
        maskRepeat: "repeat-x",
        maskImage: `linear-gradient(90deg, #000, #000 ${o}, transparent ${o}, transparent)`,
        maskSize: `calc(${o} + ${l}) 100%`,
      };
    });
  function r(l) {
    const o = O(t);
    if (!o) return l;
    const c = (100 * s.value) / o,
      v = (100 * (a.value + s.value)) / o,
      m = Math.floor((l + c) / v);
    return Q(0, m * v - c / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: i, snapValueToChunk: r };
}
const Sn = C(
    {
      absolute: Boolean,
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      bufferColor: String,
      bufferOpacity: [Number, String],
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      opacity: [Number, String],
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ...Cn(),
      ...G(),
      ...ut({ location: "top" }),
      ...Be(),
      ...j(),
      ...H(),
    },
    "VProgressLinear",
  ),
  wn = z()({
    name: "VProgressLinear",
    props: Sn(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { slots: n } = t;
      const a = we(),
        s = Me(e, "modelValue"),
        { isRtl: i, rtlClasses: r } = Ge(),
        { themeClasses: l } = ae(e),
        { locationStyles: o } = ct(e),
        { textColorClasses: c, textColorStyles: v } = J(() => e.color),
        { backgroundColorClasses: m, backgroundColorStyles: u } = ue(
          () => e.bgColor || e.color,
        ),
        { backgroundColorClasses: g, backgroundColorStyles: y } = ue(
          () => e.bufferColor || e.bgColor || e.color,
        ),
        { backgroundColorClasses: d, backgroundColorStyles: b } = ue(
          () => e.color,
        ),
        { roundedClasses: k } = Ee(e),
        { intersectionRef: E, isIntersecting: A } = lt(),
        R = h(() => parseFloat(e.max)),
        _ = h(() => parseFloat(e.height)),
        T = h(() => Q((parseFloat(e.bufferValue) / R.value) * 100, 0, 100)),
        L = h(() => Q((parseFloat(s.value) / R.value) * 100, 0, 100)),
        B = h(() => i.value !== e.reverse),
        se = h(() =>
          e.indeterminate ? "fade-transition" : "slide-x-transition",
        ),
        q = ke(0),
        { hasChunks: x, chunksMaskStyles: ie, snapValueToChunk: U } = kn(e, q);
      At(x, () => {
        const { resizeRef: $ } = je(
          (re) => (q.value = re[0].contentRect.width),
        );
        ye(() => ($.value = a.value));
      });
      const X = h(() => (x.value ? U(T.value) : T.value)),
        vt = h(() => (x.value ? U(L.value) : L.value));
      function mt($) {
        if (!E.value) return;
        const {
            left: re,
            right: gt,
            width: oe,
          } = E.value.getBoundingClientRect(),
          ht = B.value ? oe - $.clientX + (gt - oe) : $.clientX - re;
        s.value = Math.round((ht / oe) * R.value);
      }
      return (
        ye(() => {
          E.value = a.value;
        }),
        D(() =>
          w(
            e.tag,
            {
              ref: a,
              class: P([
                "v-progress-linear",
                {
                  "v-progress-linear--absolute": e.absolute,
                  "v-progress-linear--active": e.active && A.value,
                  "v-progress-linear--reverse": B.value,
                  "v-progress-linear--rounded": e.rounded,
                  "v-progress-linear--rounded-bar": e.roundedBar,
                  "v-progress-linear--striped": e.striped,
                  "v-progress-linear--clickable": e.clickable,
                },
                k.value,
                l.value,
                r.value,
                e.class,
              ]),
              style: I([
                {
                  bottom: e.location === "bottom" ? 0 : void 0,
                  top: e.location === "top" ? 0 : void 0,
                  height: e.active ? p(_.value) : 0,
                  "--v-progress-linear-height": p(_.value),
                  ...(e.absolute ? o.value : {}),
                },
                ie.value,
                e.style,
              ]),
              role: "progressbar",
              "aria-hidden": e.active ? "false" : "true",
              "aria-valuemin": "0",
              "aria-valuemax": e.max,
              "aria-valuenow": e.indeterminate
                ? void 0
                : Math.min(parseFloat(s.value), R.value),
              onClick: e.clickable && mt,
            },
            {
              default: () => [
                e.stream &&
                  S(
                    "div",
                    {
                      key: "stream",
                      class: P(["v-progress-linear__stream", c.value]),
                      style: {
                        ...v.value,
                        [B.value ? "left" : "right"]: p(-_.value),
                        borderTop: `${p(_.value / 2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${p(_.value / 4)})`,
                        width: p(100 - T.value, "%"),
                        "--v-progress-linear-stream-to": p(
                          _.value * (B.value ? 1 : -1),
                        ),
                      },
                    },
                    null,
                  ),
                S(
                  "div",
                  {
                    class: P(["v-progress-linear__background", m.value]),
                    style: I([
                      u.value,
                      {
                        opacity: parseFloat(e.bgOpacity),
                        width: e.stream ? 0 : void 0,
                      },
                    ]),
                  },
                  null,
                ),
                S(
                  "div",
                  {
                    class: P(["v-progress-linear__buffer", g.value]),
                    style: I([
                      y.value,
                      {
                        opacity: parseFloat(e.bufferOpacity),
                        width: p(X.value, "%"),
                      },
                    ]),
                  },
                  null,
                ),
                w(
                  We,
                  { name: se.value },
                  {
                    default: () => [
                      e.indeterminate
                        ? S(
                            "div",
                            { class: "v-progress-linear__indeterminate" },
                            [
                              ["long", "short"].map(($) =>
                                S(
                                  "div",
                                  {
                                    key: $,
                                    class: P([
                                      "v-progress-linear__indeterminate",
                                      $,
                                      d.value,
                                    ]),
                                    style: I(b.value),
                                  },
                                  null,
                                ),
                              ),
                            ],
                          )
                        : S(
                            "div",
                            {
                              class: P([
                                "v-progress-linear__determinate",
                                d.value,
                              ]),
                              style: I([b.value, { width: p(vt.value, "%") }]),
                            },
                            null,
                          ),
                    ],
                  },
                ),
                n.default &&
                  S("div", { class: "v-progress-linear__content" }, [
                    n.default({ value: L.value, buffer: T.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      );
    },
  }),
  xn = C({ loading: [Boolean, String] }, "loader");
function _n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return { loaderClasses: f(() => ({ [`${t}--loading`]: e.loading })) };
}
function Yn(e, t) {
  let { slots: n } = t;
  return S("div", { class: P(`${e.name}__loader`) }, [
    n.default?.({ color: e.color, isActive: e.active }) ||
      w(
        wn,
        {
          absolute: e.absolute,
          active: e.active,
          color: e.color,
          height: "2",
          indeterminate: !0,
        },
        null,
      ),
  ]);
}
const dt = C(
    {
      baseColor: String,
      divided: Boolean,
      direction: { type: String, default: "horizontal" },
      ...Ue(),
      ...G(),
      ...Ye(),
      ...rt(),
      ...Be(),
      ...j(),
      ...H(),
      ...Ke(),
    },
    "VBtnGroup",
  ),
  $e = z()({
    name: "VBtnGroup",
    props: dt(),
    setup(e, t) {
      let { slots: n } = t;
      const { themeClasses: a } = ae(e),
        { densityClasses: s } = Ze(e),
        { borderClasses: i } = Xe(e),
        { elevationClasses: r } = ot(e),
        { roundedClasses: l } = Ee(e);
      Oe({
        VBtn: {
          height: f(() => (e.direction === "horizontal" ? "auto" : null)),
          baseColor: f(() => e.baseColor),
          color: f(() => e.color),
          density: f(() => e.density),
          flat: !0,
          variant: f(() => e.variant),
        },
      }),
        D(() =>
          w(
            e.tag,
            {
              class: P([
                "v-btn-group",
                `v-btn-group--${e.direction}`,
                { "v-btn-group--divided": e.divided },
                a.value,
                i.value,
                s.value,
                r.value,
                l.value,
                e.class,
              ]),
              style: I(e.style),
            },
            n,
          ),
        );
    },
  }),
  ft = Symbol.for("vuetify:v-btn-toggle"),
  Pn = C({ ...dt(), ...dn() }, "VBtnToggle");
z()({
  name: "VBtnToggle",
  props: Pn(),
  emits: { "update:modelValue": (e) => !0 },
  setup(e, t) {
    let { slots: n } = t;
    const {
      isSelected: a,
      next: s,
      prev: i,
      select: r,
      selected: l,
    } = mn(e, ft);
    return (
      D(() => {
        const o = $e.filterProps(e);
        return w(
          $e,
          K({ class: ["v-btn-toggle", e.class] }, o, { style: e.style }),
          {
            default: () => [
              n.default?.({
                isSelected: a,
                next: s,
                prev: i,
                select: r,
                selected: l,
              }),
            ],
          },
        );
      }),
      { next: s, prev: i, select: r }
    );
  },
});
const Vn = C(
    {
      bgColor: String,
      color: String,
      indeterminate: [Boolean, String],
      rounded: Boolean,
      modelValue: { type: [Number, String], default: 0 },
      rotate: { type: [Number, String], default: 0 },
      width: { type: [Number, String], default: 4 },
      ...G(),
      ...Pe(),
      ...j({ tag: "div" }),
      ...H(),
    },
    "VProgressCircular",
  ),
  Bn = z()({
    name: "VProgressCircular",
    props: Vn(),
    setup(e, t) {
      let { slots: n } = t;
      const a = 20,
        s = 2 * Math.PI * a,
        i = we(),
        { themeClasses: r } = ae(e),
        { sizeClasses: l, sizeStyles: o } = Ve(e),
        { textColorClasses: c, textColorStyles: v } = J(() => e.color),
        { textColorClasses: m, textColorStyles: u } = J(() => e.bgColor),
        { intersectionRef: g, isIntersecting: y } = lt(),
        { resizeRef: d, contentRect: b } = je(),
        k = f(() => Q(parseFloat(e.modelValue), 0, 100)),
        E = f(() => Number(e.width)),
        A = f(() =>
          o.value
            ? Number(e.size)
            : b.value
              ? b.value.width
              : Math.max(E.value, 32),
        ),
        R = f(() => (a / (1 - E.value / A.value)) * 2),
        _ = f(() => (E.value / A.value) * R.value),
        T = f(() => {
          const B = ((100 - k.value) / 100) * s;
          return e.rounded && k.value > 0 && k.value < 100
            ? p(Math.min(s - 0.01, B + _.value))
            : p(B);
        }),
        L = h(() => {
          const B = Number(e.rotate);
          return e.rounded ? B + (_.value / 2 / s) * 360 : B;
        });
      return (
        ye(() => {
          (g.value = i.value), (d.value = i.value);
        }),
        D(() =>
          w(
            e.tag,
            {
              ref: i,
              class: P([
                "v-progress-circular",
                {
                  "v-progress-circular--indeterminate": !!e.indeterminate,
                  "v-progress-circular--visible": y.value,
                  "v-progress-circular--disable-shrink":
                    e.indeterminate &&
                    (e.indeterminate === "disable-shrink" || Dt()),
                },
                r.value,
                l.value,
                c.value,
                e.class,
              ]),
              style: I([o.value, v.value, e.style]),
              role: "progressbar",
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              "aria-valuenow": e.indeterminate ? void 0 : k.value,
            },
            {
              default: () => [
                S(
                  "svg",
                  {
                    style: {
                      transform: `rotate(calc(-90deg + ${L.value}deg))`,
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: `0 0 ${R.value} ${R.value}`,
                  },
                  [
                    S(
                      "circle",
                      {
                        class: P(["v-progress-circular__underlay", m.value]),
                        style: I(u.value),
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": _.value,
                        "stroke-dasharray": s,
                        "stroke-dashoffset": 0,
                      },
                      null,
                    ),
                    S(
                      "circle",
                      {
                        class: "v-progress-circular__overlay",
                        fill: "transparent",
                        cx: "50%",
                        cy: "50%",
                        r: a,
                        "stroke-width": _.value,
                        "stroke-dasharray": s,
                        "stroke-dashoffset": T.value,
                        "stroke-linecap": e.rounded ? "round" : void 0,
                      },
                      null,
                    ),
                  ],
                ),
                n.default &&
                  S("div", { class: "v-progress-circular__content" }, [
                    n.default({ value: k.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      );
    },
  }),
  En = ["static", "relative", "fixed", "absolute", "sticky"],
  Rn = C(
    { position: { type: String, validator: (e) => En.includes(e) } },
    "position",
  );
function Ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W();
  return {
    positionClasses: f(() => (e.position ? `${t}--${e.position}` : void 0)),
  };
}
function In(e, t) {
  Se(
    () => e.isActive?.value,
    (n) => {
      e.isLink.value &&
        n != null &&
        t &&
        Fe(() => {
          t(n);
        });
    },
    { immediate: !0 },
  );
}
const Nn = C(
    {
      active: { type: Boolean, default: void 0 },
      activeColor: String,
      baseColor: String,
      symbol: { type: null, default: ft },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: me,
      appendIcon: me,
      block: Boolean,
      readonly: Boolean,
      slim: Boolean,
      stacked: Boolean,
      spaced: String,
      ripple: { type: [Boolean, Object], default: !0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      ...Ue(),
      ...G(),
      ...Ye(),
      ...Kt(),
      ...rt(),
      ...fn(),
      ...xn(),
      ...ut(),
      ...Rn(),
      ...Be(),
      ...pn(),
      ...Pe(),
      ...j({ tag: "button" }),
      ...H(),
      ...Ke({ variant: "elevated" }),
    },
    "VBtn",
  ),
  Zn = z()({
    name: "VBtn",
    props: Nn(),
    emits: { "group:selected": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const { themeClasses: s } = ae(e),
        { borderClasses: i } = Xe(e),
        { densityClasses: r } = Ze(e),
        { dimensionStyles: l } = Qt(e),
        { elevationClasses: o } = ot(e),
        { loaderClasses: c } = _n(e),
        { locationStyles: v } = ct(e),
        { positionClasses: m } = Ln(e),
        { roundedClasses: u } = Ee(e),
        { sizeClasses: g, sizeStyles: y } = Ve(e),
        d = vn(e, e.symbol, !1),
        b = yn(e, n),
        k = h(() =>
          e.active !== void 0
            ? e.active
            : b.isRouterLink.value
              ? b.isActive?.value
              : d?.isSelected.value,
        ),
        E = f(() => (k.value ? (e.activeColor ?? e.color) : e.color)),
        A = h(() => ({
          color:
            (d?.isSelected.value && (!b.isLink.value || b.isActive?.value)) ||
            !d ||
            b.isActive?.value
              ? (E.value ?? e.baseColor)
              : e.baseColor,
          variant: e.variant,
        })),
        { colorClasses: R, colorStyles: _, variantClasses: T } = nn(A),
        L = h(() => d?.disabled.value || e.disabled),
        B = f(
          () => e.variant === "elevated" && !(e.disabled || e.flat || e.border),
        ),
        se = h(() => {
          if (!(e.value === void 0 || typeof e.value == "symbol"))
            return Object(e.value) === e.value
              ? JSON.stringify(e.value, null, 0)
              : e.value;
        });
      function q(x) {
        L.value ||
          (b.isLink.value &&
            (x.metaKey ||
              x.ctrlKey ||
              x.shiftKey ||
              x.button !== 0 ||
              n.target === "_blank")) ||
          (b.isRouterLink.value ? b.navigate?.(x) : d?.toggle());
      }
      return (
        In(b, d?.select),
        D(() => {
          const x = b.isLink.value ? "a" : e.tag,
            ie = !!(e.prependIcon || a.prepend),
            U = !!(e.appendIcon || a.append),
            X = !!(e.icon && e.icon !== !0);
          return Mt(
            w(
              x,
              K(b.linkProps, {
                type: x === "a" ? void 0 : "button",
                class: [
                  "v-btn",
                  d?.selectedClass.value,
                  {
                    "v-btn--active": k.value,
                    "v-btn--block": e.block,
                    "v-btn--disabled": L.value,
                    "v-btn--elevated": B.value,
                    "v-btn--flat": e.flat,
                    "v-btn--icon": !!e.icon,
                    "v-btn--loading": e.loading,
                    "v-btn--readonly": e.readonly,
                    "v-btn--slim": e.slim,
                    "v-btn--stacked": e.stacked,
                  },
                  e.spaced
                    ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`]
                    : [],
                  s.value,
                  i.value,
                  R.value,
                  r.value,
                  o.value,
                  c.value,
                  m.value,
                  u.value,
                  g.value,
                  T.value,
                  e.class,
                ],
                style: [_.value, l.value, v.value, y.value, e.style],
                "aria-busy": e.loading ? !0 : void 0,
                disabled: (L.value && x !== "a") || void 0,
                tabindex: e.loading || e.readonly ? -1 : void 0,
                onClick: q,
                value: se.value,
              }),
              {
                default: () => [
                  tn(!0, "v-btn"),
                  !e.icon &&
                    ie &&
                    S("span", { key: "prepend", class: "v-btn__prepend" }, [
                      a.prepend
                        ? w(
                            le,
                            {
                              key: "prepend-defaults",
                              disabled: !e.prependIcon,
                              defaults: { VIcon: { icon: e.prependIcon } },
                            },
                            a.prepend,
                          )
                        : w(
                            ce,
                            { key: "prepend-icon", icon: e.prependIcon },
                            null,
                          ),
                    ]),
                  S(
                    "span",
                    { class: "v-btn__content", "data-no-activator": "" },
                    [
                      !a.default && X
                        ? w(ce, { key: "content-icon", icon: e.icon }, null)
                        : w(
                            le,
                            {
                              key: "content-defaults",
                              disabled: !X,
                              defaults: { VIcon: { icon: e.icon } },
                            },
                            { default: () => [a.default?.() ?? Ft(e.text)] },
                          ),
                    ],
                  ),
                  !e.icon &&
                    U &&
                    S("span", { key: "append", class: "v-btn__append" }, [
                      a.append
                        ? w(
                            le,
                            {
                              key: "append-defaults",
                              disabled: !e.appendIcon,
                              defaults: { VIcon: { icon: e.appendIcon } },
                            },
                            a.append,
                          )
                        : w(
                            ce,
                            { key: "append-icon", icon: e.appendIcon },
                            null,
                          ),
                    ]),
                  !!e.loading &&
                    S("span", { key: "loader", class: "v-btn__loader" }, [
                      a.loader?.() ??
                        w(
                          Bn,
                          {
                            color:
                              typeof e.loading == "boolean"
                                ? void 0
                                : e.loading,
                            indeterminate: !0,
                            width: "2",
                          },
                          null,
                        ),
                    ]),
                ],
              },
            ),
            [[cn, !L.value && e.ripple, "", { center: !!e.icon }]],
          );
        }),
        { group: d }
      );
    },
  });
export {
  Ln as $,
  Kt as A,
  Qt as B,
  dn as C,
  Pe as D,
  xn as E,
  _n as F,
  Gn as G,
  Fn as H,
  Ve as I,
  yn as J,
  pn as K,
  Yn as L,
  jn as M,
  Dn as N,
  Gt as O,
  $n as P,
  On as Q,
  cn as R,
  zn as S,
  N as T,
  Mn as U,
  Zn as V,
  Wn as W,
  An as X,
  Un as Y,
  Xn as Z,
  ct as _,
  ce as a,
  Rn as a0,
  ut as a1,
  Ie as a2,
  Bn as b,
  wn as c,
  Be as d,
  J as e,
  qn as f,
  ue as g,
  Ee as h,
  xe as i,
  Nn as j,
  Hn as k,
  mn as l,
  rt as m,
  j as n,
  vn as o,
  fn as p,
  Ze as q,
  Ye as r,
  Xt as s,
  Xe as t,
  ot as u,
  nn as v,
  tn as w,
  le as x,
  Ke as y,
  Ue as z,
};
