import {
  aQ as H,
  s as E,
  aP as q,
  bA as Le,
  bO as L,
  V as N,
  Y as ee,
  k as p,
  e as ve,
  bz as mt,
  as as le,
  bo as Q,
  aM as k,
  r as M,
  aY as Te,
  a1 as ae,
  U as F,
  W as X,
  B as A,
  aw as gt,
  a2 as Oe,
  z as x,
  a4 as yt,
  I as se,
  a3 as ie,
  aB as Y,
  _,
  b2 as Me,
  c0 as bt,
  Q as Se,
  A as pe,
  P as K,
  ay as oe,
  b5 as Be,
  bP as W,
  bF as ht,
  a_ as Ee,
  bQ as R,
  $ as fe,
  bm as ce,
  aZ as St,
  c1 as te,
  aL as pt,
  X as wt,
  c2 as kt,
  c3 as At,
  bX as Ct,
  c4 as It,
} from "./CYsiv7Qj.js";
import { f as Pt, k as Vt } from "./BrCrqdgZ.js";
import { u as Lt } from "./CCBmAzgz.js";
import {
  x as ne,
  M as Tt,
  n as J,
  R as we,
  J as Ot,
  t as xe,
  v as Mt,
  q as Re,
  B as Ne,
  u as _e,
  h as De,
  w as Bt,
  a as ke,
  y as je,
  K as Et,
  d as Fe,
  m as Ge,
  A as Ue,
  r as Ke,
  z as $e,
  e as xt,
  i as Rt,
  g as Nt,
  f as _t,
} from "./B_W9U9Wp.js";
import { b as Ae, a as Dt, c as jt } from "./D3DeQzvF.js";
import { a as Ft, b as Gt, c as Ce, V as Ie } from "./fKsYyVgl.js";
function Ut(e, n) {
  let i =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { leading: !0, trailing: !0 },
    a = 0,
    l = 0,
    t = !1,
    s = 0;
  function r() {
    clearTimeout(a), (t = !1), (s = 0);
  }
  const o = function () {
    for (var f = arguments.length, m = new Array(f), d = 0; d < f; d++)
      m[d] = arguments[d];
    clearTimeout(a);
    const g = Date.now();
    s || (s = g);
    const h = g - Math.max(s, l);
    function S() {
      (l = Date.now()), (a = setTimeout(r, n)), e(...m);
    }
    t
      ? h >= n
        ? S()
        : i.trailing && (a = setTimeout(S, n - h))
      : ((t = !0), i.leading && S());
  };
  return (o.clear = r), (o.immediate = e), o;
}
const de = Symbol.for("vuetify:list");
function ze() {
  let { filterable: e } =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : { filterable: !1 };
  const n = H(de, {
      filterable: !1,
      hasPrepend: E(!1),
      updateHasPrepend: () => null,
    }),
    i = {
      filterable: n.filterable || e,
      hasPrepend: E(!1),
      updateHasPrepend: (a) => {
        a && (i.hasPrepend.value = a);
      },
    };
  return q(de, i), n;
}
function He() {
  return H(de, null);
}
const me = (e) => {
    const n = {
      activate: (i) => {
        let { id: a, value: l, activated: t } = i;
        return (
          (a = L(a)),
          (e && !l && t.size === 1 && t.has(a)) || (l ? t.add(a) : t.delete(a)),
          t
        );
      },
      in: (i, a, l) => {
        let t = new Set();
        if (i != null)
          for (const s of Le(i))
            t = n.activate({
              id: s,
              value: !0,
              activated: new Set(t),
              children: a,
              parents: l,
            });
        return t;
      },
      out: (i) => Array.from(i),
    };
    return n;
  },
  Xe = (e) => {
    const n = me(e);
    return {
      activate: (a) => {
        let { activated: l, id: t, ...s } = a;
        t = L(t);
        const r = l.has(t) ? new Set([t]) : new Set();
        return n.activate({ ...s, id: t, activated: r });
      },
      in: (a, l, t) => {
        let s = new Set();
        if (a != null) {
          const r = Le(a);
          r.length && (s = n.in(r.slice(0, 1), l, t));
        }
        return s;
      },
      out: (a, l, t) => n.out(a, l, t),
    };
  },
  Kt = (e) => {
    const n = me(e);
    return {
      activate: (a) => {
        let { id: l, activated: t, children: s, ...r } = a;
        return (
          (l = L(l)),
          s.has(l) ? t : n.activate({ id: l, activated: t, children: s, ...r })
        );
      },
      in: n.in,
      out: n.out,
    };
  },
  $t = (e) => {
    const n = Xe(e);
    return {
      activate: (a) => {
        let { id: l, activated: t, children: s, ...r } = a;
        return (
          (l = L(l)),
          s.has(l) ? t : n.activate({ id: l, activated: t, children: s, ...r })
        );
      },
      in: n.in,
      out: n.out,
    };
  },
  zt = {
    open: (e) => {
      let { id: n, value: i, opened: a, parents: l } = e;
      if (i) {
        const t = new Set();
        t.add(n);
        let s = l.get(n);
        for (; s != null; ) t.add(s), (s = l.get(s));
        return t;
      } else return a.delete(n), a;
    },
    select: () => null,
  },
  Qe = {
    open: (e) => {
      let { id: n, value: i, opened: a, parents: l } = e;
      if (i) {
        let t = l.get(n);
        for (a.add(n); t != null && t !== n; ) a.add(t), (t = l.get(t));
        return a;
      } else a.delete(n);
      return a;
    },
    select: () => null,
  },
  Ht = {
    open: Qe.open,
    select: (e) => {
      let { id: n, value: i, opened: a, parents: l } = e;
      if (!i) return a;
      const t = [];
      let s = l.get(n);
      for (; s != null; ) t.push(s), (s = l.get(s));
      return new Set(t);
    },
  },
  ge = (e) => {
    const n = {
      select: (i) => {
        let { id: a, value: l, selected: t } = i;
        if (((a = L(a)), e && !l)) {
          const s = Array.from(t.entries()).reduce((r, o) => {
            let [f, m] = o;
            return m === "on" && r.push(f), r;
          }, []);
          if (s.length === 1 && s[0] === a) return t;
        }
        return t.set(a, l ? "on" : "off"), t;
      },
      in: (i, a, l, t) => {
        const s = new Map();
        for (const r of i || [])
          n.select({
            id: r,
            value: !0,
            selected: s,
            children: a,
            parents: l,
            disabled: t,
          });
        return s;
      },
      out: (i) => {
        const a = [];
        for (const [l, t] of i.entries()) t === "on" && a.push(l);
        return a;
      },
    };
    return n;
  },
  We = (e) => {
    const n = ge(e);
    return {
      select: (a) => {
        let { selected: l, id: t, ...s } = a;
        t = L(t);
        const r = l.has(t) ? new Map([[t, l.get(t)]]) : new Map();
        return n.select({ ...s, id: t, selected: r });
      },
      in: (a, l, t, s) =>
        a?.length ? n.in(a.slice(0, 1), l, t, s) : new Map(),
      out: (a, l, t) => n.out(a, l, t),
    };
  },
  Xt = (e) => {
    const n = ge(e);
    return {
      select: (a) => {
        let { id: l, selected: t, children: s, ...r } = a;
        return (
          (l = L(l)),
          s.has(l) ? t : n.select({ id: l, selected: t, children: s, ...r })
        );
      },
      in: n.in,
      out: n.out,
    };
  },
  Qt = (e) => {
    const n = We(e);
    return {
      select: (a) => {
        let { id: l, selected: t, children: s, ...r } = a;
        return (
          (l = L(l)),
          s.has(l) ? t : n.select({ id: l, selected: t, children: s, ...r })
        );
      },
      in: n.in,
      out: n.out,
    };
  },
  qe = (e) => {
    const n = {
      select: (i) => {
        let {
          id: a,
          value: l,
          selected: t,
          children: s,
          parents: r,
          disabled: o,
        } = i;
        a = L(a);
        const f = new Map(t),
          m = [a];
        for (; m.length; ) {
          const g = m.shift();
          o.has(g) || t.set(L(g), l ? "on" : "off"),
            s.has(g) && m.push(...s.get(g));
        }
        let d = L(r.get(a));
        for (; d; ) {
          let g = !0,
            h = !0;
          for (const S of s.get(d)) {
            const c = L(S);
            if (
              !o.has(c) &&
              (t.get(c) !== "on" && (g = !1),
              t.has(c) && t.get(c) !== "off" && (h = !1),
              !g && !h)
            )
              break;
          }
          t.set(d, g ? "on" : h ? "off" : "indeterminate"), (d = L(r.get(d)));
        }
        return e &&
          !l &&
          Array.from(t.entries()).reduce((h, S) => {
            let [c, w] = S;
            return w === "on" && h.push(c), h;
          }, []).length === 0
          ? f
          : t;
      },
      in: (i, a, l, t) => {
        let s = new Map();
        for (const r of i || [])
          s = n.select({
            id: r,
            value: !0,
            selected: s,
            children: a,
            parents: l,
            disabled: t,
          });
        return s;
      },
      out: (i, a) => {
        const l = [];
        for (const [t, s] of i.entries()) s === "on" && !a.has(t) && l.push(t);
        return l;
      },
    };
    return n;
  },
  Wt = (e) => {
    const n = qe(e);
    return {
      select: n.select,
      in: n.in,
      out: (a, l, t) => {
        const s = [];
        for (const [r, o] of a.entries())
          if (o === "on") {
            if (t.has(r)) {
              const f = t.get(r);
              if (a.get(f) === "on") continue;
            }
            s.push(r);
          }
        return s;
      },
    };
  },
  z = Symbol.for("vuetify:nested"),
  Ye = {
    id: E(),
    root: {
      itemsRegistration: M("render"),
      register: () => null,
      unregister: () => null,
      children: M(new Map()),
      parents: M(new Map()),
      disabled: M(new Set()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: M(!1),
      selectable: M(!1),
      opened: M(new Set()),
      activated: M(new Set()),
      selected: M(new Map()),
      selectedValues: M([]),
      getPath: () => [],
    },
  },
  qt = N(
    {
      activatable: Boolean,
      selectable: Boolean,
      activeStrategy: [String, Function, Object],
      selectStrategy: [String, Function, Object],
      openStrategy: [String, Object],
      opened: null,
      activated: null,
      selected: null,
      mandatory: Boolean,
      itemsRegistration: { type: String, default: "render" },
    },
    "nested",
  ),
  Yt = (e, n, i) => {
    let a = !1;
    const l = E(new Map()),
      t = E(new Map()),
      s = E(new Set()),
      r = ee(
        e,
        "opened",
        e.opened,
        (u) => new Set(Array.isArray(u) ? u.map((v) => L(v)) : u),
        (u) => [...u.values()],
      ),
      o = p(() => {
        if (typeof e.activeStrategy == "object") return e.activeStrategy;
        if (typeof e.activeStrategy == "function")
          return e.activeStrategy(e.mandatory);
        switch (e.activeStrategy) {
          case "leaf":
            return Kt(e.mandatory);
          case "single-leaf":
            return $t(e.mandatory);
          case "independent":
            return me(e.mandatory);
          case "single-independent":
          default:
            return Xe(e.mandatory);
        }
      }),
      f = p(() => {
        if (typeof e.selectStrategy == "object") return e.selectStrategy;
        if (typeof e.selectStrategy == "function")
          return e.selectStrategy(e.mandatory);
        switch (e.selectStrategy) {
          case "single-leaf":
            return Qt(e.mandatory);
          case "leaf":
            return Xt(e.mandatory);
          case "independent":
            return ge(e.mandatory);
          case "single-independent":
            return We(e.mandatory);
          case "trunk":
            return Wt(e.mandatory);
          case "classic":
          default:
            return qe(e.mandatory);
        }
      }),
      m = p(() => {
        if (typeof e.openStrategy == "object") return e.openStrategy;
        switch (e.openStrategy) {
          case "list":
            return Ht;
          case "single":
            return zt;
          case "multiple":
          default:
            return Qe;
        }
      }),
      d = ee(
        e,
        "activated",
        e.activated,
        (u) => o.value.in(u, l.value, t.value),
        (u) => o.value.out(u, l.value, t.value),
      ),
      g = ee(
        e,
        "selected",
        e.selected,
        (u) => f.value.in(u, l.value, t.value, s.value),
        (u) => f.value.out(u, l.value, t.value),
      );
    ve(() => {
      a = !0;
    });
    function h(u) {
      const v = [];
      let b = L(u);
      for (; b !== void 0; ) v.unshift(b), (b = t.value.get(b));
      return v;
    }
    const S = mt("nested"),
      c = new Set(),
      w = Ut(() => {
        ae(() => {
          (l.value = new Map(l.value)), (t.value = new Map(t.value));
        });
      }, 100);
    le(
      () => [n.value, Q(i)],
      () => {
        e.itemsRegistration === "props" && V();
      },
      { immediate: !0 },
    );
    function V() {
      const u = new Map(),
        v = new Map(),
        b = new Set(),
        y = Q(i) ? (O) => L(O.raw) : (O) => O.value,
        T = [...n.value];
      let G = 0;
      for (; G < T.length; ) {
        const O = T[G++],
          D = y(O);
        if (O.children) {
          const U = [];
          for (const j of O.children) {
            const B = y(j);
            u.set(B, D), U.push(B), T.push(j);
          }
          v.set(D, U);
        }
        O.props.disabled && b.add(D);
      }
      (l.value = v), (t.value = u), (s.value = b);
    }
    const C = {
      id: E(),
      root: {
        opened: r,
        activatable: k(() => e.activatable),
        selectable: k(() => e.selectable),
        activated: d,
        selected: g,
        selectedValues: p(() => {
          const u = [];
          for (const [v, b] of g.value.entries()) b === "on" && u.push(v);
          return u;
        }),
        itemsRegistration: k(() => e.itemsRegistration),
        register: (u, v, b, y) => {
          if (c.has(u)) {
            h(u).map(String).join(" -> "),
              h(v).concat(u).map(String).join(" -> ");
            return;
          } else c.add(u);
          v && u !== v && t.value.set(u, v),
            b && s.value.add(u),
            y && l.value.set(u, []),
            v != null && l.value.set(v, [...(l.value.get(v) || []), u]),
            w();
        },
        unregister: (u) => {
          if (a) return;
          c.delete(u), l.value.delete(u), s.value.delete(u);
          const v = t.value.get(u);
          if (v) {
            const b = l.value.get(v) ?? [];
            l.value.set(
              v,
              b.filter((y) => y !== u),
            );
          }
          t.value.delete(u), w();
        },
        open: (u, v, b) => {
          S.emit("click:open", { id: u, value: v, path: h(u), event: b });
          const y = m.value.open({
            id: u,
            value: v,
            opened: new Set(r.value),
            children: l.value,
            parents: t.value,
            event: b,
          });
          y && (r.value = y);
        },
        openOnSelect: (u, v, b) => {
          const y = m.value.select({
            id: u,
            value: v,
            selected: new Map(g.value),
            opened: new Set(r.value),
            children: l.value,
            parents: t.value,
            event: b,
          });
          y && (r.value = y);
        },
        select: (u, v, b) => {
          S.emit("click:select", { id: u, value: v, path: h(u), event: b });
          const y = f.value.select({
            id: u,
            value: v,
            selected: new Map(g.value),
            children: l.value,
            parents: t.value,
            disabled: s.value,
            event: b,
          });
          y && (g.value = y), C.root.openOnSelect(u, v, b);
        },
        activate: (u, v, b) => {
          if (!e.activatable) return C.root.select(u, !0, b);
          S.emit("click:activate", { id: u, value: v, path: h(u), event: b });
          const y = o.value.activate({
            id: u,
            value: v,
            activated: new Set(d.value),
            children: l.value,
            parents: t.value,
            event: b,
          });
          if (y.size !== d.value.size) d.value = y;
          else {
            for (const T of y)
              if (!d.value.has(T)) {
                d.value = y;
                return;
              }
            for (const T of d.value)
              if (!y.has(T)) {
                d.value = y;
                return;
              }
          }
        },
        children: l,
        parents: t,
        disabled: s,
        getPath: h,
      },
    };
    return q(z, C), C.root;
  },
  Je = (e, n, i) => {
    const a = H(z, Ye),
      l = Symbol("nested item"),
      t = p(() => {
        const r = L(Q(e));
        return r !== void 0 ? r : l;
      }),
      s = {
        ...a,
        id: t,
        open: (r, o) => a.root.open(t.value, r, o),
        openOnSelect: (r, o) => a.root.openOnSelect(t.value, r, o),
        isOpen: p(() => a.root.opened.value.has(t.value)),
        parent: p(() => a.root.parents.value.get(t.value)),
        activate: (r, o) => a.root.activate(t.value, r, o),
        isActivated: p(() => a.root.activated.value.has(t.value)),
        select: (r, o) => a.root.select(t.value, r, o),
        isSelected: p(() => a.root.selected.value.get(t.value) === "on"),
        isIndeterminate: p(
          () => a.root.selected.value.get(t.value) === "indeterminate",
        ),
        isLeaf: p(() => !a.root.children.value.get(t.value)),
        isGroupActivator: a.isGroupActivator,
      };
    return (
      Te(() => {
        a.isGroupActivator ||
          a.root.itemsRegistration.value === "props" ||
          ae(() => {
            a.root.register(t.value, a.id.value, Q(n), i);
          });
      }),
      ve(() => {
        a.isGroupActivator ||
          a.root.itemsRegistration.value === "props" ||
          a.root.unregister(t.value);
      }),
      le(t, (r, o) => {
        a.isGroupActivator ||
          a.root.itemsRegistration.value === "props" ||
          (a.root.unregister(o),
          ae(() => {
            a.root.register(r, a.id.value, Q(n), i);
          }));
      }),
      i && q(z, s),
      s
    );
  },
  Jt = () => {
    const e = H(z, Ye);
    q(z, { ...e, isGroupActivator: !0 });
  },
  Zt = gt({
    name: "VListGroupActivator",
    setup(e, n) {
      let { slots: i } = n;
      return Jt(), () => i.default?.();
    },
  }),
  ea = N(
    {
      activeColor: String,
      baseColor: String,
      color: String,
      collapseIcon: { type: _, default: "$collapse" },
      disabled: Boolean,
      expandIcon: { type: _, default: "$expand" },
      rawId: [String, Number],
      prependIcon: _,
      appendIcon: _,
      fluid: Boolean,
      subgroup: Boolean,
      title: String,
      value: null,
      ...Y(),
      ...J(),
    },
    "VListGroup",
  ),
  Pe = F()({
    name: "VListGroup",
    props: ea(),
    setup(e, n) {
      let { slots: i } = n;
      const {
          isOpen: a,
          open: l,
          id: t,
        } = Je(
          () => e.value,
          () => e.disabled,
          !0,
        ),
        s = p(() => `v-list-group--id-${String(e.rawId ?? t.value)}`),
        r = He(),
        { isBooted: o } = Lt(),
        f = H(z),
        m = k(() => f?.root?.itemsRegistration.value === "render");
      function d(c) {
        ["INPUT", "TEXTAREA"].includes(c.target?.tagName) || l(!a.value, c);
      }
      const g = p(() => ({
          onClick: d,
          class: "v-list-group__header",
          id: s.value,
        })),
        h = p(() => (a.value ? e.collapseIcon : e.expandIcon)),
        S = p(() => ({
          VListItem: {
            activeColor: e.activeColor,
            baseColor: e.baseColor,
            color: e.color,
            prependIcon: e.prependIcon || (e.subgroup && h.value),
            appendIcon: e.appendIcon || (!e.subgroup && h.value),
            title: e.title,
            value: e.value,
          },
        }));
      return (
        X(() =>
          A(
            e.tag,
            {
              class: ie([
                "v-list-group",
                {
                  "v-list-group--prepend": r?.hasPrepend.value,
                  "v-list-group--fluid": e.fluid,
                  "v-list-group--subgroup": e.subgroup,
                  "v-list-group--open": a.value,
                },
                e.class,
              ]),
              style: se(e.style),
            },
            {
              default: () => [
                i.activator &&
                  A(
                    ne,
                    { defaults: S.value },
                    {
                      default: () => [
                        A(Zt, null, {
                          default: () => [
                            i.activator({ props: g.value, isOpen: a.value }),
                          ],
                        }),
                      ],
                    },
                  ),
                A(
                  Tt,
                  { transition: { component: Pt }, disabled: !o.value },
                  {
                    default: () => [
                      m.value
                        ? Oe(
                            x(
                              "div",
                              {
                                class: "v-list-group__items",
                                role: "group",
                                "aria-labelledby": s.value,
                              },
                              [i.default?.()],
                            ),
                            [[yt, a.value]],
                          )
                        : a.value &&
                          x(
                            "div",
                            {
                              class: "v-list-group__items",
                              role: "group",
                              "aria-labelledby": s.value,
                            },
                            [i.default?.()],
                          ),
                    ],
                  },
                ),
              ],
            },
          ),
        ),
        { isOpen: a }
      );
    },
  }),
  ta = N({ opacity: [Number, String], ...Y(), ...J() }, "VListItemSubtitle"),
  aa = F()({
    name: "VListItemSubtitle",
    props: ta(),
    setup(e, n) {
      let { slots: i } = n;
      return (
        X(() =>
          A(
            e.tag,
            {
              class: ie(["v-list-item-subtitle", e.class]),
              style: se([
                { "--v-list-item-subtitle-opacity": e.opacity },
                e.style,
              ]),
            },
            i,
          ),
        ),
        {}
      );
    },
  }),
  na = Vt("v-list-item-title"),
  la = N(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: _,
      baseColor: String,
      disabled: Boolean,
      lines: [Boolean, String],
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: _,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      prependGap: [Number, String],
      subtitle: { type: [String, Number, Boolean], default: void 0 },
      title: { type: [String, Number, Boolean], default: void 0 },
      value: null,
      onClick: W(),
      onClickOnce: W(),
      ...$e(),
      ...Y(),
      ...Ke(),
      ...Ue(),
      ...Ge(),
      ...Fe(),
      ...Et(),
      ...J(),
      ...Be(),
      ...je({ variant: "text" }),
    },
    "VListItem",
  ),
  Ve = F()({
    name: "VListItem",
    directives: { vRipple: we },
    props: la(),
    emits: { click: (e) => !0 },
    setup(e, n) {
      let { attrs: i, slots: a, emit: l } = n;
      const t = Ot(e, i),
        s = p(() => (e.value === void 0 ? t.href.value : e.value)),
        {
          activate: r,
          isActivated: o,
          select: f,
          isOpen: m,
          isSelected: d,
          isIndeterminate: g,
          isGroupActivator: h,
          root: S,
          parent: c,
          openOnSelect: w,
          id: V,
        } = Je(s, () => e.disabled, !1),
        C = He(),
        u = p(
          () =>
            e.active !== !1 &&
            (e.active ||
              t.isActive?.value ||
              (S.activatable.value ? o.value : d.value)),
        ),
        v = k(() => e.link !== !1 && t.isLink.value),
        b = p(
          () =>
            !!C &&
            (S.selectable.value || S.activatable.value || e.value != null),
        ),
        y = p(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (e.link || t.isClickable.value || b.value),
        ),
        T = p(() =>
          C ? (v.value ? "link" : b.value ? "option" : "listitem") : void 0,
        ),
        G = p(() => {
          if (b.value)
            return S.activatable.value
              ? o.value
              : S.selectable.value
                ? d.value
                : u.value;
        }),
        O = k(() => e.rounded || e.nav),
        D = k(() => e.color ?? e.activeColor),
        U = k(() => ({
          color: u.value ? (D.value ?? e.baseColor) : e.baseColor,
          variant: e.variant,
        }));
      le(
        () => t.isActive?.value,
        (P) => {
          P && j();
        },
      ),
        Te(() => {
          t.isActive?.value && ae(() => j());
        });
      function j() {
        c.value != null && S.open(c.value, !0), w(!0);
      }
      const { themeClasses: B } = Me(e),
        { borderClasses: I } = xe(e),
        { colorClasses: Z, colorStyles: at, variantClasses: nt } = Mt(U),
        { densityClasses: lt } = Re(e),
        { dimensionStyles: st } = Ne(e),
        { elevationClasses: it } = _e(e),
        { roundedClasses: rt } = De(O),
        ut = k(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        ot = k(() =>
          e.ripple !== void 0 && e.ripple && C?.filterable
            ? { keys: ["Enter"] }
            : e.ripple,
        ),
        re = p(() => ({
          isActive: u.value,
          select: f,
          isOpen: m.value,
          isSelected: d.value,
          isIndeterminate: g.value,
        }));
      function ct(P) {
        l("click", P),
          !["INPUT", "TEXTAREA"].includes(P.target?.tagName) &&
            y.value &&
            (t.navigate?.(P),
            !h &&
              (S.activatable.value
                ? r(!o.value, P)
                : (S.selectable.value || (e.value != null && !v.value)) &&
                  f(!d.value, P)));
      }
      function dt(P) {
        const ue = P.target;
        ["INPUT", "TEXTAREA"].includes(ue.tagName) ||
          ((P.key === "Enter" || (P.key === " " && !C?.filterable)) &&
            (P.preventDefault(),
            P.stopPropagation(),
            P.target.dispatchEvent(new MouseEvent("click", P))));
      }
      return (
        X(() => {
          const P = v.value ? "a" : e.tag,
            ue = a.title || e.title != null,
            vt = a.subtitle || e.subtitle != null,
            ye = !!(e.appendAvatar || e.appendIcon),
            ft = !!(ye || a.append),
            be = !!(e.prependAvatar || e.prependIcon),
            he = !!(be || a.prepend);
          return (
            C?.updateHasPrepend(he),
            e.activeColor && bt("active-color", ["color", "base-color"]),
            Oe(
              A(
                P,
                K(t.linkProps, {
                  class: [
                    "v-list-item",
                    {
                      "v-list-item--active": u.value,
                      "v-list-item--disabled": e.disabled,
                      "v-list-item--link": y.value,
                      "v-list-item--nav": e.nav,
                      "v-list-item--slim": e.slim,
                      [`${e.activeClass}`]: e.activeClass && u.value,
                    },
                    B.value,
                    I.value,
                    Z.value,
                    lt.value,
                    it.value,
                    ut.value,
                    rt.value,
                    nt.value,
                    e.class,
                  ],
                  style: [
                    { "--v-list-prepend-gap": oe(e.prependGap) },
                    at.value,
                    st.value,
                    e.style,
                  ],
                  tabindex: y.value ? (C ? -2 : 0) : void 0,
                  "aria-selected": G.value,
                  role: T.value,
                  onClick: ct,
                  onKeydown: y.value && !v.value && dt,
                }),
                {
                  default: () => [
                    Bt(y.value || u.value, "v-list-item"),
                    he &&
                      x(
                        "div",
                        { key: "prepend", class: "v-list-item__prepend" },
                        [
                          a.prepend
                            ? A(
                                ne,
                                {
                                  key: "prepend-defaults",
                                  disabled: !be,
                                  defaults: {
                                    VAvatar: {
                                      density: e.density,
                                      image: e.prependAvatar,
                                    },
                                    VIcon: {
                                      density: e.density,
                                      icon: e.prependIcon,
                                    },
                                    VListItemAction: { start: !0 },
                                  },
                                },
                                { default: () => [a.prepend?.(re.value)] },
                              )
                            : x(Se, null, [
                                e.prependAvatar &&
                                  A(
                                    Ae,
                                    {
                                      key: "prepend-avatar",
                                      density: e.density,
                                      image: e.prependAvatar,
                                    },
                                    null,
                                  ),
                                e.prependIcon &&
                                  A(
                                    ke,
                                    {
                                      key: "prepend-icon",
                                      density: e.density,
                                      icon: e.prependIcon,
                                    },
                                    null,
                                  ),
                              ]),
                          x("div", { class: "v-list-item__spacer" }, null),
                        ],
                      ),
                    x(
                      "div",
                      {
                        class: "v-list-item__content",
                        "data-no-activator": "",
                      },
                      [
                        ue &&
                          A(
                            na,
                            { key: "title" },
                            {
                              default: () => [
                                a.title?.({ title: e.title }) ?? pe(e.title),
                              ],
                            },
                          ),
                        vt &&
                          A(
                            aa,
                            { key: "subtitle" },
                            {
                              default: () => [
                                a.subtitle?.({ subtitle: e.subtitle }) ??
                                  pe(e.subtitle),
                              ],
                            },
                          ),
                        a.default?.(re.value),
                      ],
                    ),
                    ft &&
                      x(
                        "div",
                        { key: "append", class: "v-list-item__append" },
                        [
                          a.append
                            ? A(
                                ne,
                                {
                                  key: "append-defaults",
                                  disabled: !ye,
                                  defaults: {
                                    VAvatar: {
                                      density: e.density,
                                      image: e.appendAvatar,
                                    },
                                    VIcon: {
                                      density: e.density,
                                      icon: e.appendIcon,
                                    },
                                    VListItemAction: { end: !0 },
                                  },
                                },
                                { default: () => [a.append?.(re.value)] },
                              )
                            : x(Se, null, [
                                e.appendIcon &&
                                  A(
                                    ke,
                                    {
                                      key: "append-icon",
                                      density: e.density,
                                      icon: e.appendIcon,
                                    },
                                    null,
                                  ),
                                e.appendAvatar &&
                                  A(
                                    Ae,
                                    {
                                      key: "append-avatar",
                                      density: e.density,
                                      image: e.appendAvatar,
                                    },
                                    null,
                                  ),
                              ]),
                          x("div", { class: "v-list-item__spacer" }, null),
                        ],
                      ),
                  ],
                },
              ),
              [[we, y.value && ot.value]],
            )
          );
        }),
        {
          activate: r,
          isActivated: o,
          isGroupActivator: h,
          isSelected: d,
          list: C,
          select: f,
          root: S,
          id: V,
          link: t,
        }
      );
    },
  }),
  sa = N(
    {
      color: String,
      inset: Boolean,
      sticky: Boolean,
      title: String,
      ...Y(),
      ...J(),
    },
    "VListSubheader",
  ),
  ia = F()({
    name: "VListSubheader",
    props: sa(),
    setup(e, n) {
      let { slots: i } = n;
      const { textColorClasses: a, textColorStyles: l } = xt(() => e.color);
      return (
        X(() => {
          const t = !!(i.default || e.title);
          return A(
            e.tag,
            {
              class: ie([
                "v-list-subheader",
                {
                  "v-list-subheader--inset": e.inset,
                  "v-list-subheader--sticky": e.sticky,
                },
                a.value,
                e.class,
              ]),
              style: se([{ textColorStyles: l }, e.style]),
            },
            {
              default: () => [
                t &&
                  x("div", { class: "v-list-subheader__text" }, [
                    i.default?.() ?? e.title,
                  ]),
              ],
            },
          );
        }),
        {}
      );
    },
  }),
  ra = N({ items: Array, returnObject: Boolean }, "VListChildren"),
  Ze = F()({
    name: "VListChildren",
    props: ra(),
    setup(e, n) {
      let { slots: i } = n;
      return (
        ze(),
        () =>
          i.default?.() ??
          e.items?.map((a) => {
            let { children: l, props: t, type: s, raw: r } = a;
            if (s === "divider")
              return i.divider?.({ props: t }) ?? A(Dt, t, null);
            if (s === "subheader")
              return i.subheader?.({ props: t }) ?? A(ia, t, null);
            const o = {
                subtitle: i.subtitle
                  ? (m) => i.subtitle?.({ ...m, item: r })
                  : void 0,
                prepend: i.prepend
                  ? (m) => i.prepend?.({ ...m, item: r })
                  : void 0,
                append: i.append
                  ? (m) => i.append?.({ ...m, item: r })
                  : void 0,
                title: i.title ? (m) => i.title?.({ ...m, item: r }) : void 0,
              },
              f = Pe.filterProps(t);
            return l
              ? A(
                  Pe,
                  K(f, {
                    value: e.returnObject ? r : t?.value,
                    rawId: t?.value,
                  }),
                  {
                    activator: (m) => {
                      let { props: d } = m;
                      const g = K(t, d, {
                        value: e.returnObject ? r : t.value,
                      });
                      return i.header ? i.header({ props: g }) : A(Ve, g, o);
                    },
                    default: () =>
                      A(Ze, { items: l, returnObject: e.returnObject }, i),
                  },
                )
              : i.item
                ? i.item({ props: t })
                : A(Ve, K(t, { value: e.returnObject ? r : t.value }), o);
          })
      );
    },
  }),
  ua = N(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: "title" },
      itemValue: { type: [String, Array, Function], default: "value" },
      itemChildren: {
        type: [Boolean, String, Array, Function],
        default: "children",
      },
      itemProps: { type: [Boolean, String, Array, Function], default: "props" },
      itemType: { type: [Boolean, String, Array, Function], default: "type" },
      returnObject: Boolean,
      valueComparator: Function,
    },
    "list-items",
  ),
  oa = new Set(["item", "divider", "subheader"]);
function $(e, n) {
  const i = R(n, e.itemTitle, n),
    a = R(n, e.itemValue, i),
    l = R(n, e.itemChildren),
    t =
      e.itemProps === !0
        ? typeof n == "object" && n != null && !Array.isArray(n)
          ? "children" in n
            ? fe(n, ["children"])
            : n
          : void 0
        : R(n, e.itemProps);
  let s = R(n, e.itemType, "item");
  oa.has(s) || (s = "item");
  const r = { title: i, value: a, ...t };
  return {
    type: s,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: s === "item" && Array.isArray(l) ? et(e, l) : void 0,
    raw: n,
  };
}
$.neededProps = [
  "itemTitle",
  "itemValue",
  "itemChildren",
  "itemProps",
  "itemType",
];
function et(e, n) {
  const i = Ee(e, $.neededProps),
    a = [];
  for (const l of n) a.push($(i, l));
  return a;
}
function wa(e) {
  const n = p(() => et(e, e.items)),
    i = p(() => n.value.some((r) => r.value === null)),
    a = E(new Map()),
    l = E([]);
  ht(() => {
    const r = n.value,
      o = new Map(),
      f = [];
    for (let m = 0; m < r.length; m++) {
      const d = r[m];
      if (ce(d.value) || d.value === null) {
        let g = o.get(d.value);
        g || ((g = []), o.set(d.value, g)), g.push(d);
      } else f.push(d);
    }
    (a.value = o), (l.value = f);
  });
  function t(r) {
    const o = a.value,
      f = n.value,
      m = l.value,
      d = i.value,
      g = e.returnObject,
      h = !!e.valueComparator,
      S = e.valueComparator || Rt,
      c = Ee(e, $.neededProps),
      w = [];
    e: for (const V of r) {
      if (!d && V === null) continue;
      if (g && typeof V == "string") {
        w.push($(c, V));
        continue;
      }
      const C = o.get(V);
      if (h || !C) {
        for (const u of h ? f : m)
          if (S(V, u.value)) {
            w.push(u);
            continue e;
          }
        w.push($(c, V));
        continue;
      }
      w.push(...C);
    }
    return w;
  }
  function s(r) {
    return e.returnObject
      ? r.map((o) => {
          let { raw: f } = o;
          return f;
        })
      : r.map((o) => {
          let { value: f } = o;
          return f;
        });
  }
  return { items: n, transformIn: t, transformOut: s };
}
const ca = new Set(["item", "divider", "subheader"]);
function da(e, n) {
  const i = ce(n) ? n : R(n, e.itemTitle),
    a = ce(n) ? n : R(n, e.itemValue, void 0),
    l = R(n, e.itemChildren),
    t = e.itemProps === !0 ? fe(n, ["children"]) : R(n, e.itemProps);
  let s = R(n, e.itemType, "item");
  ca.has(s) || (s = "item");
  const r = { title: i, value: a, ...t };
  return {
    type: s,
    title: r.title,
    value: r.value,
    props: r,
    children: s === "item" && l ? tt(e, l) : void 0,
    raw: n,
  };
}
function tt(e, n) {
  const i = [];
  for (const a of n) i.push(da(e, a));
  return i;
}
function va(e) {
  return { items: p(() => tt(e, e.items)) };
}
const fa = N(
    {
      baseColor: String,
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      filterable: Boolean,
      expandIcon: _,
      collapseIcon: _,
      lines: { type: [Boolean, String], default: "one" },
      slim: Boolean,
      prependGap: [Number, String],
      indent: [Number, String],
      nav: Boolean,
      "onClick:open": W(),
      "onClick:select": W(),
      "onUpdate:opened": W(),
      ...qt({ selectStrategy: "single-leaf", openStrategy: "list" }),
      ...$e(),
      ...Y(),
      ...Ke(),
      ...Ue(),
      ...Ge(),
      ...ua(),
      ...Fe(),
      ...J(),
      ...Be(),
      ...je({ variant: "text" }),
    },
    "VList",
  ),
  ka = F()({
    name: "VList",
    props: fa(),
    emits: {
      "update:selected": (e) => !0,
      "update:activated": (e) => !0,
      "update:opened": (e) => !0,
      "click:open": (e) => !0,
      "click:activate": (e) => !0,
      "click:select": (e) => !0,
    },
    setup(e, n) {
      let { slots: i } = n;
      const { items: a } = va(e),
        { themeClasses: l } = Me(e),
        { backgroundColorClasses: t, backgroundColorStyles: s } = Nt(
          () => e.bgColor,
        ),
        { borderClasses: r } = xe(e),
        { densityClasses: o } = Re(e),
        { dimensionStyles: f } = Ne(e),
        { elevationClasses: m } = _e(e),
        { roundedClasses: d } = De(e),
        {
          children: g,
          open: h,
          parents: S,
          select: c,
          getPath: w,
        } = Yt(e, a, () => e.returnObject),
        V = k(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        C = k(() => e.activeColor),
        u = k(() => e.baseColor),
        v = k(() => e.color),
        b = k(() => e.selectable || e.activatable);
      ze({ filterable: e.filterable }),
        St({
          VListGroup: {
            activeColor: C,
            baseColor: u,
            color: v,
            expandIcon: k(() => e.expandIcon),
            collapseIcon: k(() => e.collapseIcon),
          },
          VListItem: {
            activeClass: k(() => e.activeClass),
            activeColor: C,
            baseColor: u,
            color: v,
            density: k(() => e.density),
            disabled: k(() => e.disabled),
            lines: k(() => e.lines),
            nav: k(() => e.nav),
            slim: k(() => e.slim),
            variant: k(() => e.variant),
          },
        });
      const y = E(!1),
        T = M();
      function G(I) {
        y.value = !0;
      }
      function O(I) {
        y.value = !1;
      }
      function D(I) {
        !y.value &&
          !(I.relatedTarget && T.value?.contains(I.relatedTarget)) &&
          B();
      }
      function U(I) {
        const Z = I.target;
        if (
          !(
            !T.value ||
            (Z.tagName === "INPUT" && ["Home", "End"].includes(I.key)) ||
            Z.tagName === "TEXTAREA"
          )
        ) {
          if (I.key === "ArrowDown") B("next");
          else if (I.key === "ArrowUp") B("prev");
          else if (I.key === "Home") B("first");
          else if (I.key === "End") B("last");
          else return;
          I.preventDefault();
        }
      }
      function j(I) {
        y.value = !0;
      }
      function B(I) {
        if (T.value) return te(T.value, I);
      }
      return (
        X(() => {
          const I =
            e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0);
          return A(
            e.tag,
            {
              ref: T,
              class: ie([
                "v-list",
                {
                  "v-list--disabled": e.disabled,
                  "v-list--nav": e.nav,
                  "v-list--slim": e.slim,
                },
                l.value,
                t.value,
                r.value,
                o.value,
                m.value,
                V.value,
                d.value,
                e.class,
              ]),
              style: se([
                {
                  "--v-list-indent": oe(I),
                  "--v-list-group-prepend": I ? "0px" : void 0,
                  "--v-list-prepend-gap": oe(e.prependGap),
                },
                s.value,
                f.value,
                e.style,
              ]),
              tabindex: e.disabled ? -1 : 0,
              role: b.value ? "listbox" : "list",
              "aria-activedescendant": void 0,
              onFocusin: G,
              onFocusout: O,
              onFocus: D,
              onKeydown: U,
              onMousedown: j,
            },
            {
              default: () => [
                A(Ze, { items: a.value, returnObject: e.returnObject }, i),
              ],
            },
          );
        }),
        { open: h, select: c, focus: B, children: g, parents: S, getPath: w }
      );
    },
  }),
  ma = N(
    {
      id: String,
      submenu: Boolean,
      ...fe(
        Gt({
          captureFocus: !0,
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: "connected",
          location: void 0,
          openDelay: 300,
          scrim: !1,
          scrollStrategy: "reposition",
          transition: { component: jt },
        }),
        ["absolute"],
      ),
    },
    "VMenu",
  ),
  Aa = F()({
    name: "VMenu",
    props: ma(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, n) {
      let { slots: i } = n;
      const a = ee(e, "modelValue"),
        { scopeId: l } = Ft(),
        { isRtl: t } = pt(),
        s = wt(),
        r = k(() => e.id || `v-menu-${s}`),
        o = M(),
        f = H(Ce, null),
        m = E(new Set());
      q(Ce, {
        register() {
          m.value.add(s);
        },
        unregister() {
          m.value.delete(s);
        },
        closeParents(c) {
          setTimeout(() => {
            !m.value.size &&
              !e.persistent &&
              (c == null ||
                (o.value?.contentEl && !It(c, o.value.contentEl))) &&
              ((a.value = !1), f?.closeParents());
          }, 40);
        },
      }),
        ve(() => f?.unregister()),
        kt(() => (a.value = !1)),
        le(
          a,
          (c) => {
            c ? f?.register() : f?.unregister();
          },
          { immediate: !0 },
        );
      function d(c) {
        f?.closeParents(c);
      }
      function g(c) {
        if (!e.disabled)
          if (
            c.key === "Tab" ||
            (c.key === "Enter" && !e.closeOnContentClick)
          ) {
            if (
              c.key === "Enter" &&
              (c.target instanceof HTMLTextAreaElement ||
                (c.target instanceof HTMLInputElement &&
                  c.target.closest("form")))
            )
              return;
            c.key === "Enter" && c.preventDefault(),
              !At(
                Ct(o.value?.contentEl, !1),
                c.shiftKey ? "prev" : "next",
                (V) => V.tabIndex >= 0,
              ) &&
                !e.retainFocus &&
                ((a.value = !1), o.value?.activatorEl?.focus());
          } else
            e.submenu &&
              c.key === (t.value ? "ArrowRight" : "ArrowLeft") &&
              ((a.value = !1), o.value?.activatorEl?.focus());
      }
      function h(c) {
        if (e.disabled) return;
        const w = o.value?.contentEl;
        w && a.value
          ? c.key === "ArrowDown"
            ? (c.preventDefault(), c.stopImmediatePropagation(), te(w, "next"))
            : c.key === "ArrowUp"
              ? (c.preventDefault(),
                c.stopImmediatePropagation(),
                te(w, "prev"))
              : e.submenu &&
                (c.key === (t.value ? "ArrowRight" : "ArrowLeft")
                  ? (a.value = !1)
                  : c.key === (t.value ? "ArrowLeft" : "ArrowRight") &&
                    (c.preventDefault(), te(w, "first")))
          : (e.submenu
              ? c.key === (t.value ? "ArrowLeft" : "ArrowRight")
              : ["ArrowDown", "ArrowUp"].includes(c.key)) &&
            ((a.value = !0),
            c.preventDefault(),
            setTimeout(() => setTimeout(() => h(c))));
      }
      const S = p(() =>
        K(
          {
            "aria-haspopup": "menu",
            "aria-expanded": String(a.value),
            "aria-controls": r.value,
            "aria-owns": r.value,
            onKeydown: h,
          },
          e.activatorProps,
        ),
      );
      return (
        X(() => {
          const c = Ie.filterProps(e);
          return A(
            Ie,
            K(
              {
                ref: o,
                id: r.value,
                class: ["v-menu", e.class],
                style: e.style,
              },
              c,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (w) => (a.value = w),
                absolute: !0,
                activatorProps: S.value,
                location: e.location ?? (e.submenu ? "end" : "bottom"),
                "onClick:outside": d,
                onKeydown: g,
              },
              l,
            ),
            {
              activator: i.activator,
              default: function () {
                for (
                  var w = arguments.length, V = new Array(w), C = 0;
                  C < w;
                  C++
                )
                  V[C] = arguments[C];
                return A(
                  ne,
                  { root: "VMenu" },
                  { default: () => [i.default?.(...V)] },
                );
              },
            },
          );
        }),
        _t({ id: r, ΨopenChildren: m }, o)
      );
    },
  });
export {
  Aa as V,
  ka as a,
  Ve as b,
  na as c,
  ia as d,
  aa as e,
  Pe as f,
  ua as m,
  $ as t,
  wa as u,
};
