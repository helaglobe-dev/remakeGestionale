import {
  u as Re,
  j as Ae,
  k as Me,
  n as Te,
  o as Ee,
  h as _e,
  V as X,
  l as Be,
  i as Le,
} from "./Cv1q1CuH.js";
import { u as Ne, V as Z, g as Ke } from "./BrCrqdgZ.js";
import { e as Oe, i as ee, a as le, x as ze, f as Ue } from "./B_W9U9Wp.js";
import {
  u as $e,
  t as M,
  V as je,
  a as qe,
  b as ae,
  d as He,
} from "./CxBYvc7u.js";
import {
  U as We,
  V as Je,
  aJ as Qe,
  r as O,
  s as S,
  Y as te,
  bA as Ye,
  aM as Ge,
  k as g,
  a1 as T,
  as as E,
  b3 as Xe,
  W as Ze,
  B as d,
  z as I,
  be as el,
  Q as H,
  P as C,
  bR as ll,
  I as al,
  a3 as tl,
  D as ul,
  $ as nl,
  cl as ol,
  bS as ue,
  cp as il,
} from "./CYsiv7Qj.js";
import { a as sl, b as rl } from "./D3DeQzvF.js";
const cl = Je(
    {
      alwaysFilter: Boolean,
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: { type: Boolean, default: !0 },
      delimiters: Array,
      ...Le({ filterKeys: ["title"] }),
      ...Be({ hideNoData: !0, returnObject: !0 }),
      ...nl(Ke({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
    },
    "VCombobox",
  ),
  gl = We()({
    name: "VCombobox",
    props: cl(),
    emits: {
      "update:focused": (l) => !0,
      "update:modelValue": (l) => !0,
      "update:search": (l) => !0,
      "update:menu": (l) => !0,
    },
    setup(l, ne) {
      let { emit: oe, slots: s } = ne;
      const { t: ie } = Qe(),
        m = O(),
        p = S(!1),
        y = S(!0),
        z = S(!1),
        W = O(),
        _ = O(),
        i = S(-1);
      let B = !1;
      const { items: J, transformIn: se, transformOut: re } = $e(l),
        { textColorClasses: ce, textColorStyles: ve } = Oe(
          () => m.value?.color,
        ),
        u = te(
          l,
          "modelValue",
          [],
          (e) => se(Ye(e)),
          (e) => {
            const a = re(e);
            return l.multiple ? a : (a[0] ?? null);
          },
        ),
        D = Ne(l),
        Q = Ge(
          () => l.closableChips && !D.isReadonly.value && !D.isDisabled.value,
        ),
        L = g(() => !!(l.chips || s.chip)),
        x = g(() => L.value || !!s.selection),
        h = S(!l.multiple && !x.value ? (u.value[0]?.title ?? "") : ""),
        F = S(null),
        c = g({
          get: () => h.value,
          set: async (e) => {
            if (
              ((h.value = e ?? ""),
              e === null || (e === "" && !l.multiple && !x.value)
                ? (u.value = [])
                : !l.multiple &&
                  !x.value &&
                  ((u.value = [M(l, e)]), T(() => _.value?.scrollToIndex(0))),
              e && l.multiple && l.delimiters?.length)
            ) {
              const a = Y(e);
              a.length > 1 && (G(a), (h.value = ""));
            }
            e || (i.value = -1), (y.value = !e);
          },
        }),
        de = g(() =>
          typeof l.counterValue == "function"
            ? l.counterValue(u.value)
            : typeof l.counterValue == "number"
              ? l.counterValue
              : l.multiple
                ? u.value.length
                : c.value.length,
        ),
        { filteredItems: U, getMatches: fe } = Re(
          l,
          J,
          () => F.value ?? (l.alwaysFilter || !y.value ? c.value : ""),
        ),
        w = g(() =>
          l.hideSelected && F.value === null
            ? U.value.filter((e) => !u.value.some((a) => a.value === e.value))
            : U.value,
        ),
        N = g(
          () =>
            (l.hideNoData && !w.value.length) ||
            D.isReadonly.value ||
            D.isDisabled.value,
        ),
        $ = te(l, "menu"),
        r = g({
          get: () => $.value,
          set: (e) => {
            ($.value && !e && W.value?.ΨopenChildren.size) ||
              (e && N.value) ||
              ($.value = e);
          },
        }),
        { menuId: me, ariaExpanded: he, ariaControls: be } = Ae(l, r);
      E(h, (e) => {
        B ? T(() => (B = !1)) : p.value && !r.value && (r.value = !0),
          oe("update:search", e);
      }),
        E(u, (e) => {
          !l.multiple && !x.value && (h.value = e[0]?.title ?? "");
        });
      const ge = g(() => u.value.map((e) => e.value)),
        P = g(() =>
          w.value.find((e) => e.type === "item" && !e.props.disabled),
        ),
        j = g(
          () =>
            (l.autoSelectFirst === !0 ||
              (l.autoSelectFirst === "exact" && c.value === P.value?.title)) &&
            w.value.length > 0 &&
            !y.value &&
            !z.value,
        ),
        q = O(),
        pe = Me(q, m);
      function ye(e) {
        (B = !0), T(() => (B = !1)), l.openOnClear && (r.value = !0);
      }
      function xe() {
        N.value || (r.value = !0);
      }
      function Ve(e) {
        N.value ||
          (p.value && (e.preventDefault(), e.stopPropagation()),
          (r.value = !r.value));
      }
      function ke(e) {
        (ue(e) || e.key === "Backspace") && m.value?.focus();
      }
      function Ce(e) {
        if (il(e) || D.isReadonly.value) return;
        const a = m.value?.selectionStart,
          v = u.value.length;
        if (
          (["Enter", "ArrowDown", "ArrowUp"].includes(e.key) &&
            e.preventDefault(),
          ["Enter", "ArrowDown"].includes(e.key) && (r.value = !0),
          ["Escape"].includes(e.key) && (r.value = !1),
          j.value &&
            ["Enter", "Tab"].includes(e.key) &&
            P.value &&
            !u.value.some((t) => {
              let { value: V } = t;
              return V === P.value.value;
            }) &&
            b(P.value),
          e.key === "ArrowDown" && j.value && q.value?.focus("next"),
          e.key === "Enter" &&
            c.value &&
            (b(M(l, c.value), !0, !0), x.value && (h.value = "")),
          ["Backspace", "Delete"].includes(e.key))
        ) {
          if (!l.multiple && x.value && u.value.length > 0 && !c.value)
            return b(u.value[0], !1);
          if (~i.value) {
            e.preventDefault();
            const t = i.value;
            b(u.value[i.value], !1), (i.value = t >= v - 1 ? v - 2 : t);
          } else e.key === "Backspace" && !c.value && (i.value = v - 1);
          return;
        }
        if (l.multiple)
          if (e.key === "ArrowLeft") {
            if (i.value < 0 && a && a > 0) return;
            const t = i.value > -1 ? i.value - 1 : v - 1;
            u.value[t]
              ? (i.value = t)
              : ((i.value = -1),
                m.value?.setSelectionRange(c.value.length, c.value.length));
          } else if (e.key === "ArrowRight") {
            if (i.value < 0) return;
            const t = i.value + 1;
            u.value[t]
              ? (i.value = t)
              : ((i.value = -1), m.value?.setSelectionRange(0, 0));
          } else ~i.value && ue(e) && (i.value = -1);
      }
      function we(e) {
        const a = e?.clipboardData?.getData("Text") ?? "",
          v = Y(a);
        v.length > 1 && l.multiple && (e.preventDefault(), G(v));
      }
      function De() {
        l.eager && _.value?.calculateVisibleItems();
      }
      function Se() {
        p.value && m.value?.focus(), (y.value = !0), (F.value = null);
      }
      function b(e) {
        let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
          v =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        if (!(!e || e.props.disabled))
          if (l.multiple) {
            const t = u.value.findIndex((n) =>
                (l.valueComparator || ee)(n.value, e.value),
              ),
              V = a ?? !~t;
            if (~t) {
              const n = V ? [...u.value, e] : [...u.value];
              n.splice(t, 1), (u.value = n);
            } else V && (u.value = [...u.value, e]);
            l.clearOnSelect && (c.value = "");
          } else {
            const t = a !== !1;
            (u.value = t ? [e] : []),
              (!y.value || l.alwaysFilter) && h.value && (F.value = h.value),
              (h.value = t && !x.value ? e.title : ""),
              T(() => {
                (r.value = v), (y.value = !0);
              });
          }
      }
      function Y(e) {
        const v = [
          `
`,
          ...(l.delimiters ?? []),
        ]
          .map(ol)
          .join("|");
        return e.split(new RegExp(`(?:${v})+`));
      }
      async function G(e) {
        for (let a of e) (a = a.trim()), a && (b(M(l, a)), await T());
      }
      function Ie(e) {
        (p.value = !0),
          setTimeout(() => {
            z.value = !0;
          });
      }
      function Fe(e) {
        z.value = !1;
      }
      return (
        E(p, (e, a) => {
          if (!(e || e === a) && ((i.value = -1), (r.value = !1), c.value)) {
            if (l.multiple) {
              b(M(l, c.value));
              return;
            }
            if (!x.value) return;
            u.value.some((v) => {
              let { title: t } = v;
              return t === c.value;
            })
              ? (h.value = "")
              : b(M(l, c.value));
          }
        }),
        E(r, (e) => {
          if (!l.hideSelected && e && u.value.length && y.value) {
            const a = w.value.findIndex((v) =>
              u.value.some((t) => (l.valueComparator || ee)(t.value, v.value)),
            );
            Xe &&
              window.requestAnimationFrame(() => {
                a >= 0 && _.value?.scrollToIndex(a);
              });
          }
          e && (F.value = null);
        }),
        E(J, (e, a) => {
          r.value || (p.value && !a.length && e.length && (r.value = !0));
        }),
        Ze(() => {
          const e = !!(
              !l.hideNoData ||
              w.value.length ||
              s["prepend-item"] ||
              s["append-item"] ||
              s["no-data"]
            ),
            a = u.value.length > 0,
            v = Z.filterProps(l);
          return d(
            Z,
            C({ ref: m }, v, {
              modelValue: c.value,
              "onUpdate:modelValue": (t) => (c.value = t),
              focused: p.value,
              "onUpdate:focused": (t) => (p.value = t),
              validationValue: u.externalValue,
              counterValue: de.value,
              dirty: a,
              class: [
                "v-combobox",
                {
                  "v-combobox--active-menu": r.value,
                  "v-combobox--chips": !!l.chips,
                  "v-combobox--selection-slot": !!x.value,
                  "v-combobox--selecting-index": i.value > -1,
                  [`v-combobox--${l.multiple ? "multiple" : "single"}`]: !0,
                },
                l.class,
              ],
              style: l.style,
              readonly: D.isReadonly.value,
              placeholder: a ? void 0 : l.placeholder,
              "onClick:clear": ye,
              "onMousedown:control": xe,
              onKeydown: Ce,
              onPaste: we,
              "aria-expanded": he.value,
              "aria-controls": be.value,
            }),
            {
              ...s,
              default: (t) => {
                let { id: V } = t;
                return I(H, null, [
                  d(
                    je,
                    C(
                      {
                        id: me.value,
                        ref: W,
                        modelValue: r.value,
                        "onUpdate:modelValue": (n) => (r.value = n),
                        activator: "parent",
                        contentClass: "v-combobox__content",
                        disabled: N.value,
                        eager: l.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        onAfterEnter: De,
                        onAfterLeave: Se,
                      },
                      l.menuProps,
                    ),
                    {
                      default: () => [
                        e &&
                          d(
                            qe,
                            C(
                              {
                                ref: q,
                                filterable: !0,
                                selected: ge.value,
                                selectStrategy: l.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (n) => n.preventDefault(),
                                selectable: !0,
                                onKeydown: ke,
                                onFocusin: Ie,
                                onFocusout: Fe,
                                tabindex: "-1",
                                "aria-live": "polite",
                                "aria-labelledby": `${V.value}-label`,
                                "aria-multiselectable": l.multiple,
                                color: l.itemColor ?? l.color,
                              },
                              pe,
                              l.listProps,
                            ),
                            {
                              default: () => [
                                s["prepend-item"]?.(),
                                !w.value.length &&
                                  !l.hideNoData &&
                                  (s["no-data"]?.() ??
                                    d(
                                      ae,
                                      {
                                        key: "no-data",
                                        title: ie(l.noDataText),
                                      },
                                      null,
                                    )),
                                d(
                                  Te,
                                  {
                                    ref: _,
                                    renderless: !0,
                                    items: w.value,
                                    itemKey: "value",
                                  },
                                  {
                                    default: (n) => {
                                      let { item: o, index: k, itemRef: K } = n;
                                      const R = C(o.props, {
                                        ref: K,
                                        key: o.value,
                                        active:
                                          j.value && o === P.value
                                            ? !0
                                            : void 0,
                                        onClick: () => b(o, null),
                                        "aria-posinset": k + 1,
                                        "aria-setsize": w.value.length,
                                      });
                                      return o.type === "divider"
                                        ? (s.divider?.({
                                            props: o.raw,
                                            index: k,
                                          }) ??
                                            d(
                                              sl,
                                              C(o.props, {
                                                key: `divider-${k}`,
                                              }),
                                              null,
                                            ))
                                        : o.type === "subheader"
                                          ? (s.subheader?.({
                                              props: o.raw,
                                              index: k,
                                            }) ??
                                            d(
                                              He,
                                              C(o.props, {
                                                key: `subheader-${k}`,
                                              }),
                                              null,
                                            ))
                                          : (s.item?.({
                                              item: o,
                                              index: k,
                                              props: R,
                                            }) ??
                                            d(ae, C(R, { role: "option" }), {
                                              prepend: (A) => {
                                                let { isSelected: f } = A;
                                                return I(H, null, [
                                                  l.multiple && !l.hideSelected
                                                    ? d(
                                                        _e,
                                                        {
                                                          key: o.value,
                                                          modelValue: f,
                                                          ripple: !1,
                                                          tabindex: "-1",
                                                          "aria-hidden": !0,
                                                          onClick: (Pe) =>
                                                            Pe.preventDefault(),
                                                        },
                                                        null,
                                                      )
                                                    : void 0,
                                                  o.props.prependAvatar &&
                                                    d(
                                                      rl,
                                                      {
                                                        image:
                                                          o.props.prependAvatar,
                                                      },
                                                      null,
                                                    ),
                                                  o.props.prependIcon &&
                                                    d(
                                                      le,
                                                      {
                                                        icon: o.props
                                                          .prependIcon,
                                                      },
                                                      null,
                                                    ),
                                                ]);
                                              },
                                              title: () =>
                                                y.value
                                                  ? o.title
                                                  : Ee(
                                                      "v-combobox",
                                                      o.title,
                                                      fe(o)?.title,
                                                    ),
                                            }));
                                    },
                                  },
                                ),
                                s["append-item"]?.(),
                              ],
                            },
                          ),
                      ],
                    },
                  ),
                  u.value.map((n, o) => {
                    function k(f) {
                      f.stopPropagation(), f.preventDefault(), b(n, !1);
                    }
                    const K = C(X.filterProps(n.props), {
                        "onClick:close": k,
                        onKeydown(f) {
                          (f.key !== "Enter" && f.key !== " ") ||
                            (f.preventDefault(), f.stopPropagation(), k(f));
                        },
                        onMousedown(f) {
                          f.preventDefault(), f.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      }),
                      R = L.value ? !!s.chip : !!s.selection,
                      A = R
                        ? ll(
                            L.value
                              ? s.chip({ item: n, index: o, props: K })
                              : s.selection({ item: n, index: o }),
                          )
                        : void 0;
                    if (!(R && !A))
                      return I(
                        "div",
                        {
                          key: n.value,
                          class: tl([
                            "v-combobox__selection",
                            o === i.value && [
                              "v-combobox__selection--selected",
                              ce.value,
                            ],
                          ]),
                          style: al(o === i.value ? ve.value : {}),
                        },
                        [
                          L.value
                            ? s.chip
                              ? d(
                                  ze,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: Q.value,
                                        size: "small",
                                        text: n.title,
                                      },
                                    },
                                  },
                                  { default: () => [A] },
                                )
                              : d(
                                  X,
                                  C(
                                    {
                                      key: "chip",
                                      closable: Q.value,
                                      size: "small",
                                      text: n.title,
                                      disabled: n.props.disabled,
                                    },
                                    K,
                                  ),
                                  null,
                                )
                            : (A ??
                              I(
                                "span",
                                { class: "v-combobox__selection-text" },
                                [
                                  n.title,
                                  l.multiple &&
                                    o < u.value.length - 1 &&
                                    I(
                                      "span",
                                      { class: "v-combobox__selection-comma" },
                                      [ul(",")],
                                    ),
                                ],
                              )),
                        ],
                      );
                  }),
                ]);
              },
              "append-inner": function () {
                for (
                  var t = arguments.length, V = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  V[n] = arguments[n];
                return I(H, null, [
                  s["append-inner"]?.(...V),
                  (!l.hideNoData || l.items.length) && l.menuIcon
                    ? d(
                        le,
                        {
                          class: "v-combobox__menu-icon",
                          color: m.value?.fieldIconColor,
                          icon: l.menuIcon,
                          onMousedown: Ve,
                          onClick: el,
                          "aria-hidden": !0,
                          tabindex: "-1",
                        },
                        null,
                      )
                    : void 0,
                ]);
              },
            },
          );
        }),
        Ue(
          {
            isFocused: p,
            isPristine: y,
            menu: r,
            search: c,
            selectionIndex: i,
            filteredItems: U,
            select: b,
          },
          m,
        )
      );
    },
  });
export { gl as V };
