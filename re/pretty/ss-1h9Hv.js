import {
  r as M,
  bH as yt,
  U as j,
  V as B,
  Y as z,
  aJ as Z,
  aL as ht,
  b2 as xt,
  bI as ue,
  s as Oe,
  aZ as be,
  az as pt,
  k as V,
  aO as te,
  aM as F,
  W as U,
  B as k,
  z as S,
  P as C,
  a3 as K,
  I as Ee,
  b5 as St,
  aB as Pt,
  _ as O,
  aR as we,
  a1 as ke,
  as as xe,
  bz as Ae,
  ax as ge,
  aQ as Q,
  aP as J,
  $ as pe,
  bJ as wt,
  ay as A,
  bF as kt,
  ab as It,
  bK as Vt,
  bA as ae,
  bm as Dt,
  bL as oe,
  bM as le,
  b6 as Tt,
  bN as Se,
  Q as q,
  bo as _t,
  D as Ie,
  bO as ne,
  bP as me,
  O as re,
  A as Ft,
  a_ as ye,
  bQ as se,
  ba as Ct,
} from "./CYsiv7Qj.js";
import {
  V as G,
  y as Bt,
  n as Ot,
  D as Et,
  d as At,
  m as Lt,
  r as de,
  z as Rt,
  i as Le,
  E as Nt,
  F as $t,
  g as Ht,
  L as Mt,
  a as Ve,
} from "./B_W9U9Wp.js";
import { a as Re, V as Gt, h as ie, u as zt, i as jt } from "./Cv1q1CuH.js";
import { g as De } from "./BwyU5rju.js";
import { m as Wt, V as Te } from "./CBVsQd7J.js";
import { a as Kt } from "./D3DeQzvF.js";
function qt() {
  const e = M([]);
  yt(() => (e.value = []));
  function t(a, l) {
    e.value[l] = a;
  }
  return { refs: e, updateRef: t };
}
const Ut = B(
    {
      activeColor: String,
      start: { type: [Number, String], default: 1 },
      modelValue: { type: Number, default: (e) => e.start },
      disabled: Boolean,
      length: {
        type: [Number, String],
        default: 1,
        validator: (e) => e % 1 === 0,
      },
      totalVisible: [Number, String],
      firstIcon: { type: O, default: "$first" },
      prevIcon: { type: O, default: "$prev" },
      nextIcon: { type: O, default: "$next" },
      lastIcon: { type: O, default: "$last" },
      ariaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.root",
      },
      pageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.page",
      },
      currentPageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.currentPage",
      },
      firstAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.first",
      },
      previousAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.previous",
      },
      nextAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.next",
      },
      lastAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.last",
      },
      ellipsis: { type: String, default: "..." },
      showFirstLastPage: Boolean,
      ...Rt(),
      ...Pt(),
      ...de(),
      ...Lt(),
      ...At(),
      ...Et(),
      ...Ot({ tag: "nav" }),
      ...St(),
      ...Bt({ variant: "text" }),
    },
    "VPagination",
  ),
  _e = j()({
    name: "VPagination",
    props: Ut(),
    emits: {
      "update:modelValue": (e) => !0,
      first: (e) => !0,
      prev: (e) => !0,
      next: (e) => !0,
      last: (e) => !0,
    },
    setup(e, t) {
      let { slots: a, emit: l } = t;
      const n = z(e, "modelValue"),
        { t: r, n: s } = Z(),
        { isRtl: d } = ht(),
        { themeClasses: o } = xt(e),
        { width: u } = ue(),
        g = Oe(-1);
      be(void 0, { scoped: !0 });
      const { resizeRef: b } = pt((h) => {
          if (!h.length) return;
          const { target: x, contentRect: c } = h[0],
            w = x.querySelector(".v-pagination__list > *");
          if (!w) return;
          const T = c.width,
            N = w.offsetWidth + parseFloat(getComputedStyle(w).marginRight) * 2;
          g.value = m(T, N);
        }),
        i = V(() => parseInt(e.length, 10)),
        f = V(() => parseInt(e.start, 10)),
        p = V(() =>
          e.totalVisible != null
            ? parseInt(e.totalVisible, 10)
            : g.value >= 0
              ? g.value
              : m(u.value, 58),
        );
      function m(h, x) {
        const c = e.showFirstLastPage ? 5 : 3;
        return Math.max(0, Math.floor(Number(((h - x * c) / x).toFixed(2))));
      }
      const v = V(() => {
        if (i.value <= 0 || isNaN(i.value) || i.value > Number.MAX_SAFE_INTEGER)
          return [];
        if (p.value <= 0) return [];
        if (p.value === 1) return [n.value];
        if (i.value <= p.value) return te(i.value, f.value);
        const h = p.value % 2 === 0,
          x = h ? p.value / 2 : Math.floor(p.value / 2),
          c = h ? x : x + 1,
          w = i.value - x;
        if (c - n.value >= 0)
          return [
            ...te(Math.max(1, p.value - 1), f.value),
            e.ellipsis,
            i.value,
          ];
        if (n.value - w >= (h ? 1 : 0)) {
          const T = p.value - 1,
            N = i.value - T + f.value;
          return [f.value, e.ellipsis, ...te(T, N)];
        } else {
          const T = Math.max(1, p.value - 2),
            N = T === 1 ? n.value : n.value - Math.ceil(T / 2) + f.value;
          return [f.value, e.ellipsis, ...te(T, N), e.ellipsis, i.value];
        }
      });
      function D(h, x, c) {
        h.preventDefault(), (n.value = x), c && l(c, x);
      }
      const { refs: y, updateRef: I } = qt();
      be({
        VPaginationBtn: {
          color: F(() => e.color),
          border: F(() => e.border),
          density: F(() => e.density),
          size: F(() => e.size),
          variant: F(() => e.variant),
          rounded: F(() => e.rounded),
          elevation: F(() => e.elevation),
        },
      });
      const _ = V(() =>
          v.value.map((h, x) => {
            const c = (w) => I(w, x);
            if (typeof h == "string")
              return {
                isActive: !1,
                key: `ellipsis-${x}`,
                page: h,
                props: { ref: c, ellipsis: !0, icon: !0, disabled: !0 },
              };
            {
              const w = h === n.value;
              return {
                isActive: w,
                key: h,
                page: s(h),
                props: {
                  ref: c,
                  ellipsis: !1,
                  icon: !0,
                  disabled: !!e.disabled || Number(e.length) < 2,
                  color: w ? e.activeColor : e.color,
                  "aria-current": w,
                  "aria-label": r(
                    w ? e.currentPageAriaLabel : e.pageAriaLabel,
                    h,
                  ),
                  onClick: (T) => D(T, h),
                },
              };
            }
          }),
        ),
        P = V(() => {
          const h = !!e.disabled || n.value <= f.value,
            x = !!e.disabled || n.value >= f.value + i.value - 1;
          return {
            first: e.showFirstLastPage
              ? {
                  icon: d.value ? e.lastIcon : e.firstIcon,
                  onClick: (c) => D(c, f.value, "first"),
                  disabled: h,
                  "aria-label": r(e.firstAriaLabel),
                  "aria-disabled": h,
                }
              : void 0,
            prev: {
              icon: d.value ? e.nextIcon : e.prevIcon,
              onClick: (c) => D(c, n.value - 1, "prev"),
              disabled: h,
              "aria-label": r(e.previousAriaLabel),
              "aria-disabled": h,
            },
            next: {
              icon: d.value ? e.prevIcon : e.nextIcon,
              onClick: (c) => D(c, n.value + 1, "next"),
              disabled: x,
              "aria-label": r(e.nextAriaLabel),
              "aria-disabled": x,
            },
            last: e.showFirstLastPage
              ? {
                  icon: d.value ? e.firstIcon : e.lastIcon,
                  onClick: (c) => D(c, f.value + i.value - 1, "last"),
                  disabled: x,
                  "aria-label": r(e.lastAriaLabel),
                  "aria-disabled": x,
                }
              : void 0,
          };
        });
      function E() {
        const h = n.value - f.value;
        y.value[h]?.$el.focus();
      }
      function R(h) {
        h.key === we.left && !e.disabled && n.value > Number(e.start)
          ? ((n.value = n.value - 1), ke(E))
          : h.key === we.right &&
            !e.disabled &&
            n.value < f.value + i.value - 1 &&
            ((n.value = n.value + 1), ke(E));
      }
      return (
        U(() =>
          k(
            e.tag,
            {
              ref: b,
              class: K(["v-pagination", o.value, e.class]),
              style: Ee(e.style),
              role: "navigation",
              "aria-label": r(e.ariaLabel),
              onKeydown: R,
              "data-test": "v-pagination-root",
            },
            {
              default: () => [
                S("ul", { class: "v-pagination__list" }, [
                  e.showFirstLastPage &&
                    S(
                      "li",
                      {
                        key: "first",
                        class: "v-pagination__first",
                        "data-test": "v-pagination-first",
                      },
                      [
                        a.first
                          ? a.first(P.value.first)
                          : k(
                              G,
                              C({ _as: "VPaginationBtn" }, P.value.first),
                              null,
                            ),
                      ],
                    ),
                  S(
                    "li",
                    {
                      key: "prev",
                      class: "v-pagination__prev",
                      "data-test": "v-pagination-prev",
                    },
                    [
                      a.prev
                        ? a.prev(P.value.prev)
                        : k(
                            G,
                            C({ _as: "VPaginationBtn" }, P.value.prev),
                            null,
                          ),
                    ],
                  ),
                  _.value.map((h, x) =>
                    S(
                      "li",
                      {
                        key: h.key,
                        class: K([
                          "v-pagination__item",
                          { "v-pagination__item--is-active": h.isActive },
                        ]),
                        "data-test": "v-pagination-item",
                      },
                      [
                        a.item
                          ? a.item(h)
                          : k(G, C({ _as: "VPaginationBtn" }, h.props), {
                              default: () => [h.page],
                            }),
                      ],
                    ),
                  ),
                  S(
                    "li",
                    {
                      key: "next",
                      class: "v-pagination__next",
                      "data-test": "v-pagination-next",
                    },
                    [
                      a.next
                        ? a.next(P.value.next)
                        : k(
                            G,
                            C({ _as: "VPaginationBtn" }, P.value.next),
                            null,
                          ),
                    ],
                  ),
                  e.showFirstLastPage &&
                    S(
                      "li",
                      {
                        key: "last",
                        class: "v-pagination__last",
                        "data-test": "v-pagination-last",
                      },
                      [
                        a.last
                          ? a.last(P.value.last)
                          : k(
                              G,
                              C({ _as: "VPaginationBtn" }, P.value.last),
                              null,
                            ),
                      ],
                    ),
                ]),
              ],
            },
          ),
        ),
        {}
      );
    },
  }),
  Qt = B(
    {
      page: { type: [Number, String], default: 1 },
      itemsPerPage: { type: [Number, String], default: 10 },
    },
    "DataTable-paginate",
  ),
  Ne = Symbol.for("vuetify:data-table-pagination");
function Jt(e) {
  const t = z(e, "page", void 0, (l) => Number(l ?? 1)),
    a = z(e, "itemsPerPage", void 0, (l) => Number(l ?? 10));
  return { page: t, itemsPerPage: a };
}
function Xt(e) {
  const { page: t, itemsPerPage: a, itemsLength: l } = e,
    n = V(() => (a.value === -1 ? 0 : a.value * (t.value - 1))),
    r = V(() =>
      a.value === -1 ? l.value : Math.min(l.value, n.value + a.value),
    ),
    s = V(() =>
      a.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / a.value),
    );
  xe([t, s], () => {
    t.value > s.value && (t.value = s.value);
  });
  function d(i) {
    (a.value = i), (t.value = 1);
  }
  function o() {
    t.value = ge(t.value + 1, 1, s.value);
  }
  function u() {
    t.value = ge(t.value - 1, 1, s.value);
  }
  function g(i) {
    t.value = ge(i, 1, s.value);
  }
  const b = {
    page: t,
    itemsPerPage: a,
    startIndex: n,
    stopIndex: r,
    pageCount: s,
    itemsLength: l,
    nextPage: o,
    prevPage: u,
    setPage: g,
    setItemsPerPage: d,
  };
  return J(Ne, b), b;
}
function Yt() {
  const e = Q(Ne);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Zt(e) {
  const t = Ae("usePaginatedItems"),
    { items: a, startIndex: l, stopIndex: n, itemsPerPage: r } = e,
    s = V(() => (r.value <= 0 ? a.value : a.value.slice(l.value, n.value)));
  return (
    xe(
      s,
      (d) => {
        t.emit("update:currentItems", d);
      },
      { immediate: !0 },
    ),
    { paginatedItems: s }
  );
}
const $e = B(
    {
      color: String,
      prevIcon: { type: O, default: "$prev" },
      nextIcon: { type: O, default: "$next" },
      firstIcon: { type: O, default: "$first" },
      lastIcon: { type: O, default: "$last" },
      itemsPerPageText: {
        type: String,
        default: "$vuetify.dataFooter.itemsPerPageText",
      },
      pageText: { type: String, default: "$vuetify.dataFooter.pageText" },
      firstPageLabel: {
        type: String,
        default: "$vuetify.dataFooter.firstPage",
      },
      prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" },
      nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" },
      lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" },
      itemsPerPageOptions: {
        type: Array,
        default: () => [
          { value: 10, title: "10" },
          { value: 25, title: "25" },
          { value: 50, title: "50" },
          { value: 100, title: "100" },
          { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
        ],
      },
      showCurrentPage: Boolean,
    },
    "VDataTableFooter",
  ),
  Fe = j()({
    name: "VDataTableFooter",
    props: $e(),
    setup(e, t) {
      let { slots: a } = t;
      const { t: l } = Z(),
        {
          page: n,
          pageCount: r,
          startIndex: s,
          stopIndex: d,
          itemsLength: o,
          itemsPerPage: u,
          setItemsPerPage: g,
        } = Yt(),
        b = V(() =>
          e.itemsPerPageOptions.map((i) =>
            typeof i == "number"
              ? {
                  value: i,
                  title:
                    i === -1
                      ? l("$vuetify.dataFooter.itemsPerPageAll")
                      : String(i),
                }
              : { ...i, title: isNaN(Number(i.title)) ? l(i.title) : i.title },
          ),
        );
      return (
        U(() => {
          const i = _e.filterProps(e);
          return S("div", { class: "v-data-table-footer" }, [
            a.prepend?.(),
            S("div", { class: "v-data-table-footer__items-per-page" }, [
              S("span", null, [l(e.itemsPerPageText)]),
              k(
                Re,
                {
                  items: b.value,
                  itemColor: e.color,
                  modelValue: u.value,
                  "onUpdate:modelValue": (f) => g(Number(f)),
                  density: "compact",
                  variant: "outlined",
                  "aria-label": l(e.itemsPerPageText),
                  hideDetails: !0,
                },
                null,
              ),
            ]),
            S("div", { class: "v-data-table-footer__info" }, [
              S("div", null, [
                l(e.pageText, o.value ? s.value + 1 : 0, d.value, o.value),
              ]),
            ]),
            S("div", { class: "v-data-table-footer__pagination" }, [
              k(
                _e,
                C(
                  {
                    modelValue: n.value,
                    "onUpdate:modelValue": (f) => (n.value = f),
                    density: "comfortable",
                    firstAriaLabel: e.firstPageLabel,
                    lastAriaLabel: e.lastPageLabel,
                    length: r.value,
                    nextAriaLabel: e.nextPageLabel,
                    previousAriaLabel: e.prevPageLabel,
                    rounded: !0,
                    showFirstLastPage: !0,
                    totalVisible: e.showCurrentPage ? 1 : 0,
                    variant: "plain",
                  },
                  pe(i, ["color"]),
                ),
                null,
              ),
            ]),
          ]);
        }),
        {}
      );
    },
  }),
  Y = wt(
    {
      align: { type: String, default: "start" },
      fixed: { type: [Boolean, String], default: !1 },
      fixedOffset: [Number, String],
      fixedEndOffset: [Number, String],
      height: [Number, String],
      lastFixed: Boolean,
      firstFixedEnd: Boolean,
      noPadding: Boolean,
      indent: [Number, String],
      empty: Boolean,
      tag: String,
      width: [Number, String],
      maxWidth: [Number, String],
      nowrap: Boolean,
    },
    (e, t) => {
      let { slots: a } = t;
      const l = e.tag ?? "td",
        n = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
      return k(
        l,
        {
          class: K([
            "v-data-table__td",
            {
              "v-data-table-column--fixed": n === "start",
              "v-data-table-column--fixed-end": n === "end",
              "v-data-table-column--last-fixed": e.lastFixed,
              "v-data-table-column--first-fixed-end": e.firstFixedEnd,
              "v-data-table-column--no-padding": e.noPadding,
              "v-data-table-column--nowrap": e.nowrap,
              "v-data-table-column--empty": e.empty,
            },
            `v-data-table-column--align-${e.align}`,
          ]),
          style: {
            height: A(e.height),
            width: A(e.width),
            maxWidth: A(e.maxWidth),
            left: n === "start" ? A(e.fixedOffset || null) : void 0,
            right: n === "end" ? A(e.fixedEndOffset || null) : void 0,
            paddingInlineStart: e.indent ? A(e.indent) : void 0,
          },
        },
        { default: () => [a.default?.()] },
      );
    },
  ),
  ea = B({ headers: Array }, "DataTable-header"),
  He = Symbol.for("vuetify:data-table-headers"),
  Me = { title: "", sortable: !1 },
  ta = { ...Me, width: 48 };
function aa() {
  const t = (
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  ).map((a) => ({ element: a, priority: 0 }));
  return {
    enqueue: (a, l) => {
      let n = !1;
      for (let r = 0; r < t.length; r++)
        if (t[r].priority > l) {
          t.splice(r, 0, { element: a, priority: l }), (n = !0);
          break;
        }
      n || t.push({ element: a, priority: l });
    },
    size: () => t.length,
    count: () => {
      let a = 0;
      if (!t.length) return 0;
      const l = Math.floor(t[0].priority);
      for (let n = 0; n < t.length; n++)
        Math.floor(t[n].priority) === l && (a += 1);
      return a;
    },
    dequeue: () => t.shift(),
  };
}
function he(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const a of e.children) he(a, t);
  return t;
}
function Ge(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set();
  for (const a of e) a.key && t.add(a.key), a.children && Ge(a.children, t);
  return t;
}
function la(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Me;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return ta;
  }
}
function Pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((a) => Pe(a, t + 1))) : t;
}
function na(e) {
  let t = !1;
  function a(r, s) {
    let d =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (r)
      if (
        (d !== "none" && (r.fixed = d),
        r.fixed === !0 && (r.fixed = "start"),
        r.fixed === s)
      )
        if (r.children)
          if (s === "start")
            for (let o = r.children.length - 1; o >= 0; o--)
              a(r.children[o], s, s);
          else
            for (let o = 0; o < r.children.length; o++) a(r.children[o], s, s);
        else
          !t && s === "start"
            ? (r.lastFixed = !0)
            : !t && s === "end"
              ? (r.firstFixedEnd = !0)
              : isNaN(Number(r.width))
                ? Vt(
                    `Multiple fixed columns should have a static width (key: ${r.key})`,
                  )
                : (r.minWidth = Math.max(
                    Number(r.width) || 0,
                    Number(r.minWidth) || 0,
                  )),
            (t = !0);
      else if (r.children)
        if (s === "start")
          for (let o = r.children.length - 1; o >= 0; o--) a(r.children[o], s);
        else for (let o = 0; o < r.children.length; o++) a(r.children[o], s);
      else t = !1;
  }
  for (let r = e.length - 1; r >= 0; r--) a(e[r], "start");
  for (let r = 0; r < e.length; r++) a(e[r], "end");
  let l = 0;
  for (let r = 0; r < e.length; r++) l = ze(e[r], l);
  let n = 0;
  for (let r = e.length - 1; r >= 0; r--) n = je(e[r], n);
}
function ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const a of e.children) t = ze(a, t);
  } else
    e.fixed &&
      e.fixed !== "end" &&
      ((e.fixedOffset = t), (t += parseFloat(e.width || "0") || 0));
  return t;
}
function je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const a of e.children) t = je(a, t);
  } else
    e.fixed === "end" &&
      ((e.fixedEndOffset = t), (t += parseFloat(e.width || "0") || 0));
  return t;
}
function ra(e, t) {
  const a = [];
  let l = 0;
  const n = aa(e);
  for (; n.size() > 0; ) {
    let s = n.count();
    const d = [];
    let o = 1;
    for (; s > 0; ) {
      const { element: u, priority: g } = n.dequeue(),
        b = t - l - Pe(u);
      if (
        (d.push({
          ...u,
          rowspan: b ?? 1,
          colspan: u.children ? he(u).length : 1,
        }),
        u.children)
      )
        for (const i of u.children) {
          const f = (g % 1) + o / Math.pow(10, l + 2);
          n.enqueue(i, l + b + f);
        }
      (o += 1), (s -= 1);
    }
    (l += 1), a.push(d);
  }
  return { columns: e.map((s) => he(s)).flat(), headers: a };
}
function We(e) {
  const t = [];
  for (const a of e) {
    const l = { ...la(a), ...a },
      n = l.key ?? (typeof l.value == "string" ? l.value : null),
      r = l.value ?? n ?? null,
      s = {
        ...l,
        key: n,
        value: r,
        sortable: l.sortable ?? (l.key != null || !!l.sort),
        children: l.children ? We(l.children) : void 0,
      };
    t.push(s);
  }
  return t;
}
function sa(e, t) {
  const a = M([]),
    l = M([]),
    n = M({}),
    r = M({}),
    s = M({});
  kt(() => {
    const u = (
        e.headers ||
        Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: It(m) }))
      ).slice(),
      g = Ge(u);
    t?.groupBy?.value.length &&
      !g.has("data-table-group") &&
      u.unshift({ key: "data-table-group", title: "Group" }),
      t?.showSelect?.value &&
        !g.has("data-table-select") &&
        u.unshift({ key: "data-table-select" }),
      t?.showExpand?.value &&
        !g.has("data-table-expand") &&
        u.push({ key: "data-table-expand" });
    const b = We(u);
    na(b);
    const i = Math.max(...b.map((m) => Pe(m))) + 1,
      f = ra(b, i);
    (a.value = f.headers), (l.value = f.columns);
    const p = f.headers.flat(1);
    for (const m of p)
      m.key &&
        (m.sortable &&
          (m.sort && (n.value[m.key] = m.sort),
          m.sortRaw && (r.value[m.key] = m.sortRaw)),
        m.filter && (s.value[m.key] = m.filter));
  });
  const d = {
    headers: a,
    columns: l,
    sortFunctions: n,
    sortRawFunctions: r,
    filterFunctions: s,
  };
  return J(He, d), d;
}
function ce() {
  const e = Q(He);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const oa = {
    showSelectAll: !1,
    allSelected: () => [],
    select: (e) => {
      let { items: t, value: a } = e;
      return new Set(a ? [t[0]?.value] : []);
    },
    selectAll: (e) => {
      let { selected: t } = e;
      return t;
    },
  },
  Ke = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { currentPage: t } = e;
      return t;
    },
    select: (e) => {
      let { items: t, value: a, selected: l } = e;
      for (const n of t) a ? l.add(n.value) : l.delete(n.value);
      return l;
    },
    selectAll: (e) => {
      let { value: t, currentPage: a, selected: l } = e;
      return Ke.select({ items: a, value: t, selected: l });
    },
  },
  ia = {
    showSelectAll: !0,
    allSelected: (e) => {
      let { allItems: t } = e;
      return t;
    },
    select: (e) => {
      let { items: t, value: a, selected: l } = e;
      for (const n of t) a ? l.add(n.value) : l.delete(n.value);
      return l;
    },
    selectAll: (e) => {
      let { value: t, allItems: a } = e;
      return new Set(t ? a.map((l) => l.value) : []);
    },
  },
  ua = B(
    {
      showSelect: Boolean,
      selectStrategy: { type: [String, Object], default: "page" },
      modelValue: { type: Array, default: () => [] },
      valueComparator: Function,
    },
    "DataTable-select",
  ),
  qe = Symbol.for("vuetify:data-table-selection");
function da(e, t) {
  let { allItems: a, currentPage: l } = t;
  const n = z(
      e,
      "modelValue",
      e.modelValue,
      (y) => {
        const I = e.valueComparator;
        return I
          ? new Set(
              ae(y).map((_) => a.value.find((P) => I(_, P.value))?.value ?? _),
            )
          : new Set(
              ae(y).map((_) =>
                Dt(_)
                  ? (a.value.find((P) => _ === P.value)?.value ?? _)
                  : (a.value.find((P) => Le(_, P.value))?.value ?? _),
              ),
            );
      },
      (y) => [...y.values()],
    ),
    r = V(() => a.value.filter((y) => y.selectable)),
    s = V(() => l.value.filter((y) => y.selectable)),
    d = V(() => {
      if (typeof e.selectStrategy == "object") return e.selectStrategy;
      switch (e.selectStrategy) {
        case "single":
          return oa;
        case "all":
          return ia;
        case "page":
        default:
          return Ke;
      }
    }),
    o = Oe(null);
  function u(y) {
    return ae(y).every((I) => n.value.has(I.value));
  }
  function g(y) {
    return ae(y).some((I) => n.value.has(I.value));
  }
  function b(y, I) {
    const _ = d.value.select({
      items: y,
      value: I,
      selected: new Set(n.value),
    });
    n.value = _;
  }
  function i(y, I, _) {
    const P = [];
    if (
      ((I = I ?? l.value.findIndex((E) => E.value === y.value)),
      e.selectStrategy !== "single" && _?.shiftKey && o.value !== null)
    ) {
      const [E, R] = [o.value, I].sort((h, x) => h - x);
      P.push(...l.value.slice(E, R + 1).filter((h) => h.selectable));
    } else P.push(y), (o.value = I);
    b(P, !u([y]));
  }
  function f(y) {
    const I = d.value.selectAll({
      value: y,
      allItems: r.value,
      currentPage: s.value,
      selected: new Set(n.value),
    });
    n.value = I;
  }
  const p = V(() => n.value.size > 0),
    m = V(() => {
      const y = d.value.allSelected({
        allItems: r.value,
        currentPage: s.value,
      });
      return !!y.length && u(y);
    }),
    v = F(() => d.value.showSelectAll),
    D = {
      toggleSelect: i,
      select: b,
      selectAll: f,
      isSelected: u,
      isSomeSelected: g,
      someSelected: p,
      allSelected: m,
      showSelectAll: v,
      lastSelectedIndex: o,
      selectStrategy: d,
    };
  return J(qe, D), D;
}
function fe() {
  const e = Q(qe);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const ca = B(
    {
      initialSortOrder: {
        type: String,
        default: "asc",
        validator: (e) => !e || ["asc", "desc"].includes(e),
      },
      sortBy: { type: Array, default: () => [] },
      customKeySort: Object,
      multiSort: { type: [Boolean, Object], default: !1 },
      mustSort: Boolean,
    },
    "DataTable-sort",
  ),
  Ue = Symbol.for("vuetify:data-table-sort");
function fa(e) {
  const t = F(() => e.initialSortOrder),
    a = z(e, "sortBy"),
    l = F(() => e.mustSort),
    n = F(() => e.multiSort);
  return { initialSortOrder: t, sortBy: a, multiSort: n, mustSort: l };
}
function va(e, t) {
  if (!Tt(e)) return { active: !!e };
  const { key: a, mode: l, modifier: n } = e,
    r = (n === "alt" && t?.altKey) || (n === "shift" && t?.shiftKey);
  return {
    active: !a || t?.ctrlKey || t?.metaKey || !1,
    mode: r ? (l === "append" ? "prepend" : "append") : l,
  };
}
function ga(e) {
  const {
      initialSortOrder: t,
      sortBy: a,
      mustSort: l,
      multiSort: n,
      page: r,
    } = e,
    s = (u, g) => {
      if (u.key == null) return;
      let b = a.value.map((m) => ({ ...m })) ?? [];
      const i = b.find((m) => m.key === u.key),
        f = t.value,
        p = t.value === "desc" ? "asc" : "desc";
      if (i)
        i.order === p
          ? l.value && b.length === 1
            ? (i.order = t.value)
            : (b = b.filter((m) => m.key !== u.key))
          : (i.order = p);
      else {
        const { active: m, mode: v } = va(n.value, g);
        m
          ? v === "prepend"
            ? b.unshift({ key: u.key, order: f })
            : b.push({ key: u.key, order: f })
          : (b = [{ key: u.key, order: f }]);
      }
      (a.value = b), r && (r.value = 1);
    };
  function d(u) {
    return !!a.value.find((g) => g.key === u.key);
  }
  const o = { sortBy: a, toggleSort: s, isSorted: d };
  return J(Ue, o), o;
}
function Qe() {
  const e = Q(Ue);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function ma(e, t, a, l) {
  const n = Z();
  return {
    sortedItems: V(() =>
      a.value.length
        ? ba(t.value, a.value, n.current.value, {
            transform: l?.transform,
            sortFunctions: { ...e.customKeySort, ...l?.sortFunctions?.value },
            sortRawFunctions: l?.sortRawFunctions?.value,
          })
        : t.value,
    ),
  };
}
function ba(e, t, a, l) {
  const n = new Intl.Collator(a, { sensitivity: "accent", usage: "sort" });
  return e
    .map((s) => [s, l?.transform ? l.transform(s) : s])
    .sort((s, d) => {
      for (let o = 0; o < t.length; o++) {
        let u = !1;
        const g = t[o].key,
          b = t[o].order ?? "asc";
        if (b === !1) continue;
        let i = oe(s[1], g),
          f = oe(d[1], g),
          p = s[0].raw,
          m = d[0].raw;
        if (
          (b === "desc" && (([i, f] = [f, i]), ([p, m] = [m, p])),
          l?.sortRawFunctions?.[g])
        ) {
          const v = l.sortRawFunctions[g](p, m);
          if (v == null) continue;
          if (((u = !0), v)) return v;
        }
        if (l?.sortFunctions?.[g]) {
          const v = l.sortFunctions[g](i, f);
          if (v == null) continue;
          if (((u = !0), v)) return v;
        }
        if (
          !u &&
          (i instanceof Date &&
            f instanceof Date &&
            ((i = i.getTime()), (f = f.getTime())),
          ([i, f] = [i, f].map((v) =>
            v != null ? v.toString().toLocaleLowerCase() : v,
          )),
          i !== f)
        )
          return le(i) && le(f)
            ? 0
            : le(i)
              ? -1
              : le(f)
                ? 1
                : !isNaN(i) && !isNaN(f)
                  ? Number(i) - Number(f)
                  : n.compare(i, f);
      }
      return 0;
    })
    .map((s) => {
      let [d] = s;
      return d;
    });
}
const Je = B(
    {
      color: String,
      disableSort: Boolean,
      fixedHeader: Boolean,
      multiSort: Boolean,
      initialSortOrder: String,
      sortAscIcon: { type: O, default: "$sortAsc" },
      sortDescIcon: { type: O, default: "$sortDesc" },
      headerProps: { type: Object },
      sticky: Boolean,
      ...de(),
      ...Se(),
      ...Nt(),
    },
    "VDataTableHeaders",
  ),
  Ce = j()({
    name: "VDataTableHeaders",
    props: Je(),
    setup(e, t) {
      let { slots: a } = t;
      const { t: l } = Z(),
        { toggleSort: n, sortBy: r, isSorted: s } = Qe(),
        {
          someSelected: d,
          allSelected: o,
          selectAll: u,
          showSelectAll: g,
        } = fe(),
        { columns: b, headers: i } = ce(),
        { loaderClasses: f } = $t(e);
      function p(x, c) {
        if (!(e.sticky || e.fixedHeader) && !x.fixed) return;
        const w =
          typeof x.fixed == "string" ? x.fixed : x.fixed ? "start" : "none";
        return {
          position: "sticky",
          left: w === "start" ? A(x.fixedOffset) : void 0,
          right: w === "end" ? A(x.fixedEndOffset) : void 0,
          top:
            e.sticky || e.fixedHeader
              ? `calc(var(--v-table-header-height) * ${c})`
              : void 0,
        };
      }
      function m(x, c) {
        x.key === "Enter" && !e.disableSort && n(c, x);
      }
      function v(x) {
        const c = r.value.find((w) => w.key === x.key);
        return (!c && e.initialSortOrder === "asc") || c?.order === "asc"
          ? e.sortAscIcon
          : e.sortDescIcon;
      }
      const { backgroundColorClasses: D, backgroundColorStyles: y } = Ht(
          () => e.color,
        ),
        { displayClasses: I, mobile: _ } = ue(e),
        P = V(() => ({
          headers: i.value,
          columns: b.value,
          toggleSort: n,
          isSorted: s,
          sortBy: r.value,
          someSelected: d.value,
          allSelected: o.value,
          selectAll: u,
          getSortIcon: v,
        })),
        E = V(() => [
          "v-data-table__th",
          { "v-data-table__th--sticky": e.sticky || e.fixedHeader },
          I.value,
          f.value,
        ]),
        R = (x) => {
          let { column: c, x: w, y: T } = x;
          const N =
              c.key === "data-table-select" || c.key === "data-table-expand",
            ee = c.key === "data-table-group" && c.width === 0 && !c.title,
            ve = C(e.headerProps ?? {}, c.headerProps ?? {});
          return k(
            Y,
            C(
              {
                tag: "th",
                align: c.align,
                class: [
                  {
                    "v-data-table__th--sortable": c.sortable && !e.disableSort,
                    "v-data-table__th--sorted": s(c),
                    "v-data-table__th--fixed": c.fixed,
                  },
                  ...E.value,
                ],
                style: {
                  width: A(c.width),
                  minWidth: A(c.minWidth),
                  maxWidth: A(c.maxWidth),
                  ...p(c, T),
                },
                colspan: c.colspan,
                rowspan: c.rowspan,
                fixed: c.fixed,
                nowrap: c.nowrap,
                lastFixed: c.lastFixed,
                firstFixedEnd: c.firstFixedEnd,
                noPadding: N,
                empty: ee,
                tabindex: c.sortable ? 0 : void 0,
                onClick: c.sortable ? ($) => n(c, $) : void 0,
                onKeydown: c.sortable ? ($) => m($, c) : void 0,
              },
              ve,
            ),
            {
              default: () => {
                const $ = `header.${c.key}`,
                  W = {
                    column: c,
                    selectAll: u,
                    isSorted: s,
                    toggleSort: n,
                    sortBy: r.value,
                    someSelected: d.value,
                    allSelected: o.value,
                    getSortIcon: v,
                  };
                return a[$]
                  ? a[$](W)
                  : ee
                    ? ""
                    : c.key === "data-table-select"
                      ? (a["header.data-table-select"]?.(W) ??
                        (g.value &&
                          k(
                            ie,
                            {
                              color: e.color,
                              density: e.density,
                              modelValue: o.value,
                              indeterminate: d.value && !o.value,
                              "onUpdate:modelValue": u,
                            },
                            null,
                          )))
                      : S("div", { class: "v-data-table-header__content" }, [
                          S("span", null, [c.title]),
                          c.sortable &&
                            !e.disableSort &&
                            k(
                              Ve,
                              {
                                key: "icon",
                                class: "v-data-table-header__sort-icon",
                                icon: v(c),
                              },
                              null,
                            ),
                          e.multiSort &&
                            s(c) &&
                            S(
                              "div",
                              {
                                key: "badge",
                                class: K([
                                  "v-data-table-header__sort-badge",
                                  ...D.value,
                                ]),
                                style: Ee(y.value),
                              },
                              [r.value.findIndex((X) => X.key === c.key) + 1],
                            ),
                        ]);
              },
            },
          );
        },
        h = () => {
          const x = V(() =>
              b.value.filter((w) => w?.sortable && !e.disableSort),
            ),
            c = b.value.find((w) => w.key === "data-table-select");
          return k(
            Y,
            C(
              { tag: "th", class: [...E.value], colspan: i.value.length + 1 },
              e.headerProps,
            ),
            {
              default: () => [
                S("div", { class: "v-data-table-header__content" }, [
                  k(
                    Re,
                    {
                      chips: !0,
                      color: e.color,
                      class: "v-data-table__td-sort-select",
                      clearable: !0,
                      density: "default",
                      items: x.value,
                      label: l("$vuetify.dataTable.sortBy"),
                      multiple: e.multiSort,
                      variant: "underlined",
                      "onClick:clear": () => (r.value = []),
                    },
                    {
                      append: c
                        ? () =>
                            k(
                              ie,
                              {
                                color: e.color,
                                density: "compact",
                                modelValue: o.value,
                                indeterminate: d.value && !o.value,
                                "onUpdate:modelValue": () => u(!o.value),
                              },
                              null,
                            )
                        : void 0,
                      chip: (w) =>
                        k(
                          Gt,
                          {
                            onClick: w.item.raw?.sortable
                              ? () => n(w.item.raw)
                              : void 0,
                            onMousedown: (T) => {
                              T.preventDefault(), T.stopPropagation();
                            },
                          },
                          {
                            default: () => [
                              w.item.title,
                              k(
                                Ve,
                                {
                                  class: K([
                                    "v-data-table__td-sort-icon",
                                    s(w.item.raw) &&
                                      "v-data-table__td-sort-icon-active",
                                  ]),
                                  icon: v(w.item.raw),
                                  size: "small",
                                },
                                null,
                              ),
                            ],
                          },
                        ),
                    },
                  ),
                ]),
              ],
            },
          );
        };
      U(() =>
        _.value
          ? S("tr", null, [k(h, null, null)])
          : S(q, null, [
              a.headers
                ? a.headers(P.value)
                : i.value.map((x, c) =>
                    S("tr", null, [
                      x.map((w, T) => k(R, { column: w, x: T, y: c }, null)),
                    ]),
                  ),
              e.loading &&
                S("tr", { class: "v-data-table-progress" }, [
                  S("th", { colspan: b.value.length }, [
                    k(
                      Mt,
                      {
                        name: "v-data-table-progress",
                        absolute: !0,
                        active: !0,
                        color:
                          typeof e.loading == "boolean" || e.loading === "true"
                            ? e.color
                            : e.loading,
                        indeterminate: !0,
                      },
                      { default: a.loader },
                    ),
                  ]),
                ]),
            ]),
      );
    },
  }),
  ya = B({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"),
  Xe = Symbol.for("vuetify:data-table-group");
function ha(e) {
  return { groupBy: z(e, "groupBy") };
}
function xa(e) {
  const { disableSort: t, groupBy: a, sortBy: l } = e,
    n = M(new Set()),
    r = V(() =>
      a.value
        .map((g) => ({ ...g, order: g.order ?? !1 }))
        .concat(t?.value ? [] : l.value),
    );
  function s(g) {
    return n.value.has(g.id);
  }
  function d(g) {
    const b = new Set(n.value);
    s(g) ? b.delete(g.id) : b.add(g.id), (n.value = b);
  }
  function o(g) {
    function b(i) {
      const f = [];
      for (const p of i.items)
        "type" in p && p.type === "group" ? f.push(...b(p)) : f.push(p);
      return [...new Set(f)];
    }
    return b({ items: g });
  }
  const u = {
    sortByWithGroups: r,
    toggleGroup: d,
    opened: n,
    groupBy: a,
    extractRows: o,
    isGroupOpen: s,
  };
  return J(Xe, u), u;
}
function Ye() {
  const e = Q(Xe);
  if (!e) throw new Error("Missing group!");
  return e;
}
function pa(e, t) {
  if (!e.length) return [];
  const a = new Map();
  for (const l of e) {
    const n = oe(l.raw, t);
    a.has(n) || a.set(n, []), a.get(n).push(l);
  }
  return a;
}
function Ze(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const n = pa(e, t[0]),
    r = [],
    s = t.slice(1);
  return (
    n.forEach((d, o) => {
      const u = t[0],
        g = `${l}_${u}_${o}`;
      r.push({
        depth: a,
        id: g,
        key: u,
        value: o,
        items: s.length ? Ze(d, s, a + 1, g) : d,
        type: "group",
      });
    }),
    r
  );
}
function et(e, t, a) {
  const l = [];
  for (const n of e)
    "type" in n && n.type === "group"
      ? (n.value != null && l.push(n),
        (t.has(n.id) || n.value == null) &&
          (l.push(...et(n.items, t, a)),
          a && l.push({ ...n, type: "group-summary" })))
      : l.push(n);
  return l;
}
function Sa(e, t, a, l) {
  return {
    flatItems: V(() => {
      if (!t.value.length) return e.value;
      const r = Ze(
        e.value,
        t.value.map((s) => s.key),
      );
      return et(r, a.value, _t(l));
    }),
  };
}
const tt = B(
    {
      item: { type: Object, required: !0 },
      groupCollapseIcon: { type: O, default: "$tableGroupCollapse" },
      groupExpandIcon: { type: O, default: "$tableGroupExpand" },
      ...de(),
    },
    "VDataTableGroupHeaderRow",
  ),
  Pa = j()({
    name: "VDataTableGroupHeaderRow",
    props: tt(),
    setup(e, t) {
      let { slots: a } = t;
      const { isGroupOpen: l, toggleGroup: n, extractRows: r } = Ye(),
        { isSelected: s, isSomeSelected: d, select: o } = fe(),
        { columns: u } = ce(),
        g = V(() => r([e.item])),
        b = F(
          () =>
            u.value.length -
            (u.value.some((i) => i.key === "data-table-select") ? 1 : 0),
        );
      return () =>
        S(
          "tr",
          {
            class: "v-data-table-group-header-row",
            style: { "--v-data-table-group-header-row-depth": e.item.depth },
          },
          [
            u.value.map((i) => {
              if (i.key === "data-table-group") {
                const f = l(e.item) ? e.groupCollapseIcon : e.groupExpandIcon,
                  p = () => n(e.item);
                return (
                  a["data-table-group"]?.({
                    item: e.item,
                    count: g.value.length,
                    props: { icon: f, onClick: p },
                  }) ??
                  k(
                    Y,
                    {
                      class: "v-data-table-group-header-row__column",
                      colspan: b.value,
                    },
                    {
                      default: () => [
                        k(
                          G,
                          {
                            size: "small",
                            variant: "text",
                            icon: f,
                            onClick: p,
                          },
                          null,
                        ),
                        S("span", null, [e.item.value]),
                        S("span", null, [Ie("("), g.value.length, Ie(")")]),
                      ],
                    },
                  )
                );
              } else if (i.key === "data-table-select") {
                const f = g.value.filter((D) => D.selectable),
                  p = f.length > 0 && s(f),
                  m = d(f) && !p,
                  v = (D) => o(f, D);
                return (
                  a["data-table-select"]?.({
                    props: {
                      modelValue: p,
                      indeterminate: m,
                      "onUpdate:modelValue": v,
                    },
                  }) ??
                  k(
                    Y,
                    { class: "v-data-table__td--select-row", noPadding: !0 },
                    {
                      default: () => [
                        k(
                          ie,
                          {
                            density: e.density,
                            disabled: f.length === 0,
                            modelValue: p,
                            indeterminate: m,
                            "onUpdate:modelValue": v,
                          },
                          null,
                        ),
                      ],
                    },
                  )
                );
              }
              return "";
            }),
          ],
        );
    },
  }),
  wa = B(
    {
      expandOnClick: Boolean,
      showExpand: Boolean,
      expanded: { type: Array, default: () => [] },
    },
    "DataTable-expand",
  ),
  at = Symbol.for("vuetify:datatable:expanded");
function ka(e) {
  const t = F(() => e.expandOnClick),
    a = z(
      e,
      "expanded",
      e.expanded,
      (d) => new Set(d),
      (d) => [...d.values()],
    );
  function l(d, o) {
    const u = new Set(a.value),
      g = ne(d.value);
    if (o) u.add(g);
    else {
      const b = [...a.value].find((i) => ne(i) === g);
      u.delete(b);
    }
    a.value = u;
  }
  function n(d) {
    const o = ne(d.value);
    return [...a.value].some((u) => ne(u) === o);
  }
  function r(d) {
    l(d, !n(d));
  }
  const s = {
    expand: l,
    expanded: a,
    expandOnClick: t,
    isExpanded: n,
    toggleExpand: r,
  };
  return J(at, s), s;
}
function lt() {
  const e = Q(at);
  if (!e) throw new Error("foo");
  return e;
}
const nt = B(
    {
      color: String,
      index: Number,
      item: Object,
      cellProps: [Object, Function],
      collapseIcon: { type: O, default: "$collapse" },
      expandIcon: { type: O, default: "$expand" },
      onClick: me(),
      onContextmenu: me(),
      onDblclick: me(),
      ...de(),
      ...Se(),
    },
    "VDataTableRow",
  ),
  Ia = j()({
    name: "VDataTableRow",
    props: nt(),
    setup(e, t) {
      let { slots: a } = t;
      const { displayClasses: l, mobile: n } = ue(e, "v-data-table__tr"),
        {
          isSelected: r,
          toggleSelect: s,
          someSelected: d,
          allSelected: o,
          selectAll: u,
        } = fe(),
        { isExpanded: g, toggleExpand: b } = lt(),
        { toggleSort: i, sortBy: f, isSorted: p } = Qe(),
        { columns: m } = ce();
      U(() =>
        S(
          "tr",
          {
            class: K([
              "v-data-table__tr",
              {
                "v-data-table__tr--clickable": !!(
                  e.onClick ||
                  e.onContextmenu ||
                  e.onDblclick
                ),
              },
              l.value,
            ]),
            onClick: e.onClick,
            onContextmenu: e.onContextmenu,
            onDblclick: e.onDblclick,
          },
          [
            e.item &&
              m.value.map((v, D) => {
                const y = e.item,
                  I = `item.${v.key}`,
                  _ = `header.${v.key}`,
                  P = {
                    index: e.index,
                    item: y.raw,
                    internalItem: y,
                    value: oe(y.columns, v.key),
                    column: v,
                    isSelected: r,
                    toggleSelect: s,
                    isExpanded: g,
                    toggleExpand: b,
                  },
                  E = {
                    column: v,
                    selectAll: u,
                    isSorted: p,
                    toggleSort: i,
                    sortBy: f.value,
                    someSelected: d.value,
                    allSelected: o.value,
                    getSortIcon: () => "",
                  },
                  R =
                    typeof e.cellProps == "function"
                      ? e.cellProps({
                          index: P.index,
                          item: P.item,
                          internalItem: P.internalItem,
                          value: P.value,
                          column: v,
                        })
                      : e.cellProps,
                  h =
                    typeof v.cellProps == "function"
                      ? v.cellProps({
                          index: P.index,
                          item: P.item,
                          internalItem: P.internalItem,
                          value: P.value,
                        })
                      : v.cellProps,
                  x =
                    v.key === "data-table-select" ||
                    v.key === "data-table-expand",
                  c = v.key === "data-table-group" && v.width === 0 && !v.title;
                return k(
                  Y,
                  C(
                    {
                      align: v.align,
                      indent: v.indent,
                      class: {
                        "v-data-table__td--expanded-row":
                          v.key === "data-table-expand",
                        "v-data-table__td--select-row":
                          v.key === "data-table-select",
                      },
                      fixed: v.fixed,
                      fixedOffset: v.fixedOffset,
                      fixedEndOffset: v.fixedEndOffset,
                      lastFixed: v.lastFixed,
                      firstFixedEnd: v.firstFixedEnd,
                      maxWidth: n.value ? void 0 : v.maxWidth,
                      noPadding: x,
                      empty: c,
                      nowrap: v.nowrap,
                      width: n.value ? void 0 : v.width,
                    },
                    R,
                    h,
                  ),
                  {
                    default: () => {
                      if (v.key === "data-table-select")
                        return (
                          a["item.data-table-select"]?.({
                            ...P,
                            props: {
                              color: e.color,
                              disabled: !y.selectable,
                              modelValue: r([y]),
                              onClick: re(() => s(y), ["stop"]),
                            },
                          }) ??
                          k(
                            ie,
                            {
                              color: e.color,
                              disabled: !y.selectable,
                              density: e.density,
                              modelValue: r([y]),
                              onClick: re((T) => s(y, e.index, T), ["stop"]),
                            },
                            null,
                          )
                        );
                      if (v.key === "data-table-expand")
                        return (
                          a["item.data-table-expand"]?.({
                            ...P,
                            props: {
                              icon: g(y) ? e.collapseIcon : e.expandIcon,
                              size: "small",
                              variant: "text",
                              onClick: re(() => b(y), ["stop"]),
                            },
                          }) ??
                          k(
                            G,
                            {
                              icon: g(y) ? e.collapseIcon : e.expandIcon,
                              size: "small",
                              variant: "text",
                              onClick: re(() => b(y), ["stop"]),
                            },
                            null,
                          )
                        );
                      if (a[I] && !n.value) return a[I](P);
                      const w = Ft(P.value);
                      return n.value
                        ? S(q, null, [
                            S("div", { class: "v-data-table__td-title" }, [
                              a[_]?.(E) ?? v.title,
                            ]),
                            S("div", { class: "v-data-table__td-value" }, [
                              a[I]?.(P) ?? w,
                            ]),
                          ])
                        : w;
                    },
                  },
                );
              }),
          ],
        ),
      );
    },
  }),
  rt = B(
    {
      color: String,
      loading: [Boolean, String],
      loadingText: {
        type: String,
        default: "$vuetify.dataIterator.loadingText",
      },
      hideNoData: Boolean,
      items: { type: Array, default: () => [] },
      noDataText: { type: String, default: "$vuetify.noDataText" },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      ...ye(nt(), ["collapseIcon", "expandIcon", "density"]),
      ...ye(tt(), ["groupCollapseIcon", "groupExpandIcon", "density"]),
      ...Se(),
    },
    "VDataTableRows",
  ),
  Be = j()({
    name: "VDataTableRows",
    inheritAttrs: !1,
    props: rt(),
    setup(e, t) {
      let { attrs: a, slots: l } = t;
      const { columns: n } = ce(),
        { expandOnClick: r, toggleExpand: s, isExpanded: d } = lt(),
        { isSelected: o, toggleSelect: u } = fe(),
        { toggleGroup: g, isGroupOpen: b } = Ye(),
        { t: i } = Z(),
        { mobile: f } = ue(e);
      return (
        U(() => {
          const p = ye(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
          return e.loading && (!e.items.length || l.loading)
            ? S("tr", { class: "v-data-table-rows-loading", key: "loading" }, [
                S("td", { colspan: n.value.length }, [
                  l.loading?.() ?? i(e.loadingText),
                ]),
              ])
            : !e.loading && !e.items.length && !e.hideNoData
              ? S(
                  "tr",
                  { class: "v-data-table-rows-no-data", key: "no-data" },
                  [
                    S("td", { colspan: n.value.length }, [
                      l["no-data"]?.() ?? i(e.noDataText),
                    ]),
                  ],
                )
              : S(q, null, [
                  e.items.map((m, v) => {
                    if (m.type === "group") {
                      const I = {
                        index: v,
                        item: m,
                        columns: n.value,
                        isExpanded: d,
                        toggleExpand: s,
                        isSelected: o,
                        toggleSelect: u,
                        toggleGroup: g,
                        isGroupOpen: b,
                      };
                      return l["group-header"]
                        ? l["group-header"](I)
                        : k(
                            Pa,
                            C(
                              { key: `group-header_${m.id}`, item: m },
                              De(a, ":groupHeader", () => I),
                              p,
                            ),
                            l,
                          );
                    }
                    if (m.type === "group-summary") {
                      const I = {
                        index: v,
                        item: m,
                        columns: n.value,
                        toggleGroup: g,
                      };
                      return l["group-summary"]?.(I) ?? "";
                    }
                    const D = {
                        index: v,
                        item: m.raw,
                        internalItem: m,
                        columns: n.value,
                        isExpanded: d,
                        toggleExpand: s,
                        isSelected: o,
                        toggleSelect: u,
                      },
                      y = {
                        ...D,
                        props: C(
                          {
                            key: `item_${m.key ?? m.index}`,
                            onClick: r.value
                              ? () => {
                                  s(m);
                                }
                              : void 0,
                            index: v,
                            item: m,
                            color: e.color,
                            cellProps: e.cellProps,
                            collapseIcon: e.collapseIcon,
                            expandIcon: e.expandIcon,
                            density: e.density,
                            mobile: f.value,
                          },
                          De(a, ":row", () => D),
                          typeof e.rowProps == "function"
                            ? e.rowProps({
                                item: D.item,
                                index: D.index,
                                internalItem: D.internalItem,
                              })
                            : e.rowProps,
                        ),
                      };
                    return S(q, { key: y.props.key }, [
                      l.item ? l.item(y) : k(Ia, y.props, l),
                      d(m) && l["expanded-row"]?.(D),
                    ]);
                  }),
                ]);
        }),
        {}
      );
    },
  }),
  Va = B(
    {
      items: { type: Array, default: () => [] },
      itemValue: { type: [String, Array, Function], default: "id" },
      itemSelectable: { type: [String, Array, Function], default: null },
      rowProps: [Object, Function],
      cellProps: [Object, Function],
      returnObject: Boolean,
    },
    "DataTable-items",
  );
function Da(e, t, a, l) {
  const n = e.returnObject ? t : se(t, e.itemValue),
    r = se(t, e.itemSelectable, !0),
    s = l.reduce(
      (d, o) => (o.key != null && (d[o.key] = se(t, o.value)), d),
      {},
    );
  return {
    type: "item",
    key: e.returnObject ? se(t, e.itemValue) : n,
    index: a,
    value: n,
    selectable: r,
    columns: s,
    raw: t,
  };
}
function Ta(e, t, a) {
  return t.map((l, n) => Da(e, l, n, a));
}
function _a(e, t) {
  return { items: V(() => Ta(e, e.items, t.value)) };
}
function Fa(e) {
  let { page: t, itemsPerPage: a, sortBy: l, groupBy: n, search: r } = e;
  const s = Ae("VDataTable"),
    d = () => ({
      page: t.value,
      itemsPerPage: a.value,
      sortBy: l.value,
      groupBy: n.value,
      search: r.value,
    });
  let o = null;
  xe(
    d,
    (u) => {
      Le(o, u) ||
        (o && o.search !== u.search && (t.value = 1),
        s.emit("update:options", u),
        (o = u));
    },
    { deep: !0, immediate: !0 },
  );
}
const Ca = B(
    {
      ...rt(),
      hideDefaultBody: Boolean,
      hideDefaultFooter: Boolean,
      hideDefaultHeader: Boolean,
      width: [String, Number],
      search: String,
      ...wa(),
      ...ya(),
      ...ea(),
      ...Va(),
      ...ua(),
      ...ca(),
      ...pe(Je(), ["multiSort", "initialSortOrder"]),
      ...Wt(),
    },
    "DataTable",
  ),
  Ba = B({ ...Qt(), ...Ca(), ...jt(), ...$e() }, "VDataTable"),
  $a = j()({
    name: "VDataTable",
    props: Ba(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:page": (e) => !0,
      "update:itemsPerPage": (e) => !0,
      "update:sortBy": (e) => !0,
      "update:options": (e) => !0,
      "update:groupBy": (e) => !0,
      "update:expanded": (e) => !0,
      "update:currentItems": (e) => !0,
    },
    setup(e, t) {
      let { attrs: a, slots: l } = t;
      const { groupBy: n } = ha(e),
        { initialSortOrder: r, sortBy: s, multiSort: d, mustSort: o } = fa(e),
        { page: u, itemsPerPage: g } = Jt(e),
        { disableSort: b } = Ct(e),
        {
          columns: i,
          headers: f,
          sortFunctions: p,
          sortRawFunctions: m,
          filterFunctions: v,
        } = sa(e, {
          groupBy: n,
          showSelect: F(() => e.showSelect),
          showExpand: F(() => e.showExpand),
        }),
        { items: D } = _a(e, i),
        y = F(() => e.search),
        { filteredItems: I } = zt(e, D, y, {
          transform: (H) => H.columns,
          customKeyFilter: v,
        }),
        { toggleSort: _ } = ga({
          initialSortOrder: r,
          sortBy: s,
          multiSort: d,
          mustSort: o,
          page: u,
        }),
        {
          sortByWithGroups: P,
          opened: E,
          extractRows: R,
          isGroupOpen: h,
          toggleGroup: x,
        } = xa({ groupBy: n, sortBy: s, disableSort: b }),
        { sortedItems: c } = ma(e, I, P, {
          transform: (H) => ({ ...H.raw, ...H.columns }),
          sortFunctions: p,
          sortRawFunctions: m,
        }),
        { flatItems: w } = Sa(c, n, E, () => !!l["group-summary"]),
        T = V(() => w.value.length),
        {
          startIndex: N,
          stopIndex: ee,
          pageCount: ve,
          setItemsPerPage: $,
        } = Xt({ page: u, itemsPerPage: g, itemsLength: T }),
        { paginatedItems: W } = Zt({
          items: w,
          startIndex: N,
          stopIndex: ee,
          itemsPerPage: g,
        }),
        X = V(() => R(W.value)),
        {
          isSelected: st,
          select: ot,
          selectAll: it,
          toggleSelect: ut,
          someSelected: dt,
          allSelected: ct,
        } = da(e, { allItems: D, currentPage: X }),
        { isExpanded: ft, toggleExpand: vt } = ka(e);
      Fa({ page: u, itemsPerPage: g, sortBy: s, groupBy: n, search: y }),
        be({
          VDataTableRows: {
            hideNoData: F(() => e.hideNoData),
            noDataText: F(() => e.noDataText),
            loading: F(() => e.loading),
            loadingText: F(() => e.loadingText),
          },
        });
      const L = V(() => ({
        page: u.value,
        itemsPerPage: g.value,
        sortBy: s.value,
        pageCount: ve.value,
        toggleSort: _,
        setItemsPerPage: $,
        someSelected: dt.value,
        allSelected: ct.value,
        isSelected: st,
        select: ot,
        selectAll: it,
        toggleSelect: ut,
        isExpanded: ft,
        toggleExpand: vt,
        isGroupOpen: h,
        toggleGroup: x,
        items: X.value.map((H) => H.raw),
        internalItems: X.value,
        groupedItems: W.value,
        columns: i.value,
        headers: f.value,
      }));
      return (
        U(() => {
          const H = Fe.filterProps(e),
            gt = Ce.filterProps(pe(e, ["multiSort"])),
            mt = Be.filterProps(e),
            bt = Te.filterProps(e);
          return k(
            Te,
            C(
              {
                class: [
                  "v-data-table",
                  {
                    "v-data-table--show-select": e.showSelect,
                    "v-data-table--loading": e.loading,
                  },
                  e.class,
                ],
                style: e.style,
              },
              bt,
              { fixedHeader: e.fixedHeader || e.sticky },
            ),
            {
              top: () => l.top?.(L.value),
              default: () =>
                l.default
                  ? l.default(L.value)
                  : S(q, null, [
                      l.colgroup?.(L.value),
                      !e.hideDefaultHeader &&
                        S("thead", { key: "thead" }, [
                          k(Ce, C(gt, { multiSort: !!e.multiSort }), l),
                        ]),
                      l.thead?.(L.value),
                      !e.hideDefaultBody &&
                        S("tbody", null, [
                          l["body.prepend"]?.(L.value),
                          l.body
                            ? l.body(L.value)
                            : k(Be, C(a, mt, { items: W.value }), l),
                          l["body.append"]?.(L.value),
                        ]),
                      l.tbody?.(L.value),
                      l.tfoot?.(L.value),
                    ]),
              bottom: () =>
                l.bottom
                  ? l.bottom(L.value)
                  : !e.hideDefaultFooter &&
                    S(q, null, [
                      k(Kt, null, null),
                      k(Fe, H, { prepend: l["footer.prepend"] }),
                    ]),
            },
          );
        }),
        {}
      );
    },
  });
export { $a as V };
