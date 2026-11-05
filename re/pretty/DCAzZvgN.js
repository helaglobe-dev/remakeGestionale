import {
  u as Ie,
  j as De,
  k as Ae,
  l as Fe,
  i as Pe,
  n as Re,
  o as Me,
  h as Ee,
  V as J,
} from "./Cv1q1CuH.js";
import { u as Le, g as Te, V as Q } from "./BrCrqdgZ.js";
import { e as _e, f as Be, a as Y, x as Ne, i as ze } from "./B_W9U9Wp.js";
import { u as Ke, V as Oe, a as Ue, b as G, d as $e } from "./CxBYvc7u.js";
import {
  U as qe,
  V as He,
  aJ as We,
  r as L,
  s as w,
  Y as q,
  k as y,
  aM as je,
  as as T,
  a1 as X,
  b3 as Je,
  W as Qe,
  $ as Ye,
  bA as Ge,
  B as f,
  z as I,
  be as Xe,
  Q as H,
  P as b,
  bR as Ze,
  I as el,
  a3 as ll,
  D as al,
  bS as Z,
  bT as ee,
} from "./CYsiv7Qj.js";
import { a as tl, b as ul } from "./D3DeQzvF.js";
const nl = He(
    {
      autoSelectFirst: { type: [Boolean, String] },
      clearOnSelect: Boolean,
      search: String,
      ...Pe({ filterKeys: ["title"] }),
      ...Fe(),
      ...Ye(Te({ modelValue: null, role: "combobox" }), [
        "validationValue",
        "dirty",
        "appendInnerIcon",
      ]),
    },
    "VAutocomplete",
  ),
  dl = qe()({
    name: "VAutocomplete",
    props: nl(),
    emits: {
      "update:focused": (l) => !0,
      "update:search": (l) => !0,
      "update:modelValue": (l) => !0,
      "update:menu": (l) => !0,
    },
    setup(l, le) {
      let { slots: i } = le;
      const { t: ae } = We(),
        p = L(),
        g = w(!1),
        h = w(!0),
        _ = w(!1),
        W = L(),
        B = L(),
        o = w(-1),
        S = w(null),
        { items: N, transformIn: te, transformOut: ue } = Ke(l),
        { textColorClasses: ne, textColorStyles: oe } = _e(
          () => p.value?.color,
        ),
        r = q(l, "search", ""),
        a = q(
          l,
          "modelValue",
          [],
          (e) => te(e === null ? [null] : Ge(e)),
          (e) => {
            const u = ue(e);
            return l.multiple ? u : (u[0] ?? null);
          },
        ),
        se = y(() =>
          typeof l.counterValue == "function"
            ? l.counterValue(a.value)
            : typeof l.counterValue == "number"
              ? l.counterValue
              : a.value.length,
        ),
        x = Le(l),
        { filteredItems: z, getMatches: ie } = Ie(
          l,
          N,
          () => S.value ?? (h.value ? "" : r.value),
        ),
        k = y(() =>
          l.hideSelected && S.value === null
            ? z.value.filter((e) => !a.value.some((u) => u.value === e.value))
            : z.value,
        ),
        j = je(
          () => l.closableChips && !x.isReadonly.value && !x.isDisabled.value,
        ),
        R = y(() => !!(l.chips || i.chip)),
        D = y(() => R.value || !!i.selection),
        re = y(() => a.value.map((e) => e.props.value)),
        A = y(() =>
          k.value.find((e) => e.type === "item" && !e.props.disabled),
        ),
        K = y(
          () =>
            (l.autoSelectFirst === !0 ||
              (l.autoSelectFirst === "exact" && r.value === A.value?.title)) &&
            k.value.length > 0 &&
            !h.value &&
            !_.value,
        ),
        M = y(
          () =>
            (l.hideNoData && !k.value.length) ||
            x.isReadonly.value ||
            x.isDisabled.value,
        ),
        O = q(l, "menu"),
        c = y({
          get: () => O.value,
          set: (e) => {
            (O.value && !e && W.value?.ΨopenChildren.size) ||
              (e && M.value) ||
              (O.value = e);
          },
        }),
        { menuId: ce, ariaExpanded: ve, ariaControls: de } = De(l, c),
        U = L(),
        fe = Ae(U, p);
      function me(e) {
        l.openOnClear && (c.value = !0), (r.value = "");
      }
      function pe() {
        M.value || (c.value = !0);
      }
      function he(e) {
        M.value ||
          (g.value && (e.preventDefault(), e.stopPropagation()),
          (c.value = !c.value));
      }
      function ge(e) {
        (Z(e) || e.key === "Backspace") && p.value?.focus();
      }
      function Ve(e) {
        if (x.isReadonly.value) return;
        const u = p.value?.selectionStart,
          v = a.value.length;
        if (
          (["Enter", "ArrowDown", "ArrowUp"].includes(e.key) &&
            e.preventDefault(),
          ["Enter", "ArrowDown"].includes(e.key) && (c.value = !0),
          ["Escape"].includes(e.key) && (c.value = !1),
          K.value &&
            ["Enter", "Tab"].includes(e.key) &&
            A.value &&
            !a.value.some((n) => {
              let { value: d } = n;
              return d === A.value.value;
            }) &&
            C(A.value),
          e.key === "ArrowDown" && K.value && U.value?.focus("next"),
          ["Backspace", "Delete"].includes(e.key))
        ) {
          if (!l.multiple && D.value && a.value.length > 0 && !r.value)
            return C(a.value[0], !1);
          if (~o.value) {
            e.preventDefault();
            const n = o.value;
            C(a.value[o.value], !1), (o.value = n >= v - 1 ? v - 2 : n);
          } else e.key === "Backspace" && !r.value && (o.value = v - 1);
          return;
        }
        if (l.multiple)
          if (e.key === "ArrowLeft") {
            if (o.value < 0 && u && u > 0) return;
            const n = o.value > -1 ? o.value - 1 : v - 1;
            if (a.value[n]) o.value = n;
            else {
              const d = r.value?.length ?? null;
              (o.value = -1), p.value?.setSelectionRange(d, d);
            }
          } else if (e.key === "ArrowRight") {
            if (o.value < 0) return;
            const n = o.value + 1;
            a.value[n]
              ? (o.value = n)
              : ((o.value = -1), p.value?.setSelectionRange(0, 0));
          } else ~o.value && Z(e) && (o.value = -1);
      }
      function ye(e) {
        if (ee(p.value, ":autofill") || ee(p.value, ":-webkit-autofill")) {
          const u = N.value.find((v) => v.title === e.target.value);
          u && C(u);
        }
      }
      function be() {
        l.eager && B.value?.calculateVisibleItems();
      }
      function ke() {
        g.value && ((h.value = !0), p.value?.focus()), (S.value = null);
      }
      function Ce(e) {
        (g.value = !0),
          setTimeout(() => {
            _.value = !0;
          });
      }
      function Se(e) {
        _.value = !1;
      }
      function xe(e) {
        (e == null || (e === "" && !l.multiple && !D.value)) && (a.value = []);
      }
      const $ = w(!1);
      function C(e) {
        let u =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (!(!e || e.props.disabled))
          if (l.multiple) {
            const v = a.value.findIndex((d) =>
                (l.valueComparator || ze)(d.value, e.value),
              ),
              n = u ?? !~v;
            if (~v) {
              const d = n ? [...a.value, e] : [...a.value];
              d.splice(v, 1), (a.value = d);
            } else n && (a.value = [...a.value, e]);
            l.clearOnSelect && (r.value = "");
          } else {
            const v = u !== !1;
            (a.value = v ? [e] : []),
              (S.value = h.value ? "" : (r.value ?? "")),
              (r.value = v && !D.value ? e.title : ""),
              X(() => {
                (c.value = !1), (h.value = !0);
              });
          }
      }
      return (
        T(g, (e, u) => {
          e !== u &&
            (e
              ? (($.value = !0),
                (r.value =
                  l.multiple || D.value
                    ? ""
                    : String(a.value.at(-1)?.props.title ?? "")),
                (h.value = !0),
                X(() => ($.value = !1)))
              : (!l.multiple && r.value == null && (a.value = []),
                (c.value = !1),
                !h.value && r.value && (S.value = r.value),
                (r.value = ""),
                (o.value = -1)));
        }),
        T(r, (e) => {
          !g.value || $.value || (e && (c.value = !0), (h.value = !e));
        }),
        T(c, (e) => {
          if (!l.hideSelected && e && a.value.length && h.value) {
            const u = k.value.findIndex((v) =>
              a.value.some((n) => v.value === n.value),
            );
            Je &&
              window.requestAnimationFrame(() => {
                u >= 0 && B.value?.scrollToIndex(u);
              });
          }
          e && (S.value = null);
        }),
        T(N, (e, u) => {
          c.value || (g.value && !u.length && e.length && (c.value = !0));
        }),
        Qe(() => {
          const e = !!(
              !l.hideNoData ||
              k.value.length ||
              i["prepend-item"] ||
              i["append-item"] ||
              i["no-data"]
            ),
            u = a.value.length > 0,
            v = Q.filterProps(l);
          return f(
            Q,
            b({ ref: p }, v, {
              modelValue: r.value,
              "onUpdate:modelValue": [(n) => (r.value = n), xe],
              focused: g.value,
              "onUpdate:focused": (n) => (g.value = n),
              validationValue: a.externalValue,
              counterValue: se.value,
              dirty: u,
              onChange: ye,
              class: [
                "v-autocomplete",
                `v-autocomplete--${l.multiple ? "multiple" : "single"}`,
                {
                  "v-autocomplete--active-menu": c.value,
                  "v-autocomplete--chips": !!l.chips,
                  "v-autocomplete--selection-slot": !!D.value,
                  "v-autocomplete--selecting-index": o.value > -1,
                },
                l.class,
              ],
              style: l.style,
              readonly: x.isReadonly.value,
              placeholder: u ? void 0 : l.placeholder,
              "onClick:clear": me,
              "onMousedown:control": pe,
              onKeydown: Ve,
              "aria-expanded": ve.value,
              "aria-controls": de.value,
            }),
            {
              ...i,
              default: (n) => {
                let { id: d } = n;
                return I(H, null, [
                  f(
                    Oe,
                    b(
                      {
                        id: ce.value,
                        ref: W,
                        modelValue: c.value,
                        "onUpdate:modelValue": (s) => (c.value = s),
                        activator: "parent",
                        contentClass: "v-autocomplete__content",
                        disabled: M.value,
                        eager: l.eager,
                        maxHeight: 310,
                        openOnClick: !1,
                        closeOnContentClick: !1,
                        onAfterEnter: be,
                        onAfterLeave: ke,
                      },
                      l.menuProps,
                    ),
                    {
                      default: () => [
                        e &&
                          f(
                            Ue,
                            b(
                              {
                                ref: U,
                                filterable: !0,
                                selected: re.value,
                                selectStrategy: l.multiple
                                  ? "independent"
                                  : "single-independent",
                                onMousedown: (s) => s.preventDefault(),
                                onKeydown: ge,
                                onFocusin: Ce,
                                onFocusout: Se,
                                tabindex: "-1",
                                selectable: !0,
                                "aria-live": "polite",
                                "aria-labelledby": `${d.value}-label`,
                                "aria-multiselectable": l.multiple,
                                color: l.itemColor ?? l.color,
                              },
                              fe,
                              l.listProps,
                            ),
                            {
                              default: () => [
                                i["prepend-item"]?.(),
                                !k.value.length &&
                                  !l.hideNoData &&
                                  (i["no-data"]?.() ??
                                    f(
                                      G,
                                      {
                                        key: "no-data",
                                        title: ae(l.noDataText),
                                      },
                                      null,
                                    )),
                                f(
                                  Re,
                                  {
                                    ref: B,
                                    renderless: !0,
                                    items: k.value,
                                    itemKey: "value",
                                  },
                                  {
                                    default: (s) => {
                                      let { item: t, index: V, itemRef: E } = s;
                                      const F = b(t.props, {
                                        ref: E,
                                        key: t.value,
                                        active:
                                          K.value && t === A.value
                                            ? !0
                                            : void 0,
                                        onClick: () => C(t, null),
                                        "aria-posinset": V + 1,
                                        "aria-setsize": k.value.length,
                                      });
                                      return t.type === "divider"
                                        ? (i.divider?.({
                                            props: t.raw,
                                            index: V,
                                          }) ??
                                            f(
                                              tl,
                                              b(t.props, {
                                                key: `divider-${V}`,
                                              }),
                                              null,
                                            ))
                                        : t.type === "subheader"
                                          ? (i.subheader?.({
                                              props: t.raw,
                                              index: V,
                                            }) ??
                                            f(
                                              $e,
                                              b(t.props, {
                                                key: `subheader-${V}`,
                                              }),
                                              null,
                                            ))
                                          : (i.item?.({
                                              item: t,
                                              index: V,
                                              props: F,
                                            }) ??
                                            f(G, b(F, { role: "option" }), {
                                              prepend: (P) => {
                                                let { isSelected: m } = P;
                                                return I(H, null, [
                                                  l.multiple && !l.hideSelected
                                                    ? f(
                                                        Ee,
                                                        {
                                                          key: t.value,
                                                          modelValue: m,
                                                          ripple: !1,
                                                          tabindex: "-1",
                                                          "aria-hidden": !0,
                                                          onClick: (we) =>
                                                            we.preventDefault(),
                                                        },
                                                        null,
                                                      )
                                                    : void 0,
                                                  t.props.prependAvatar &&
                                                    f(
                                                      ul,
                                                      {
                                                        image:
                                                          t.props.prependAvatar,
                                                      },
                                                      null,
                                                    ),
                                                  t.props.prependIcon &&
                                                    f(
                                                      Y,
                                                      {
                                                        icon: t.props
                                                          .prependIcon,
                                                      },
                                                      null,
                                                    ),
                                                ]);
                                              },
                                              title: () =>
                                                h.value
                                                  ? t.title
                                                  : Me(
                                                      "v-autocomplete",
                                                      t.title,
                                                      ie(t)?.title,
                                                    ),
                                            }));
                                    },
                                  },
                                ),
                                i["append-item"]?.(),
                              ],
                            },
                          ),
                      ],
                    },
                  ),
                  a.value.map((s, t) => {
                    function V(m) {
                      m.stopPropagation(), m.preventDefault(), C(s, !1);
                    }
                    const E = b(J.filterProps(s.props), {
                        "onClick:close": V,
                        onKeydown(m) {
                          (m.key !== "Enter" && m.key !== " ") ||
                            (m.preventDefault(), m.stopPropagation(), V(m));
                        },
                        onMousedown(m) {
                          m.preventDefault(), m.stopPropagation();
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0,
                      }),
                      F = R.value ? !!i.chip : !!i.selection,
                      P = F
                        ? Ze(
                            R.value
                              ? i.chip({ item: s, index: t, props: E })
                              : i.selection({ item: s, index: t }),
                          )
                        : void 0;
                    if (!(F && !P))
                      return I(
                        "div",
                        {
                          key: s.value,
                          class: ll([
                            "v-autocomplete__selection",
                            t === o.value && [
                              "v-autocomplete__selection--selected",
                              ne.value,
                            ],
                          ]),
                          style: el(t === o.value ? oe.value : {}),
                        },
                        [
                          R.value
                            ? i.chip
                              ? f(
                                  Ne,
                                  {
                                    key: "chip-defaults",
                                    defaults: {
                                      VChip: {
                                        closable: j.value,
                                        size: "small",
                                        text: s.title,
                                      },
                                    },
                                  },
                                  { default: () => [P] },
                                )
                              : f(
                                  J,
                                  b(
                                    {
                                      key: "chip",
                                      closable: j.value,
                                      size: "small",
                                      text: s.title,
                                      disabled: s.props.disabled,
                                    },
                                    E,
                                  ),
                                  null,
                                )
                            : (P ??
                              I(
                                "span",
                                { class: "v-autocomplete__selection-text" },
                                [
                                  s.title,
                                  l.multiple &&
                                    t < a.value.length - 1 &&
                                    I(
                                      "span",
                                      {
                                        class:
                                          "v-autocomplete__selection-comma",
                                      },
                                      [al(",")],
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
                  var n = arguments.length, d = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  d[s] = arguments[s];
                return I(H, null, [
                  i["append-inner"]?.(...d),
                  l.menuIcon
                    ? f(
                        Y,
                        {
                          class: "v-autocomplete__menu-icon",
                          color: p.value?.fieldIconColor,
                          icon: l.menuIcon,
                          onMousedown: he,
                          onClick: Xe,
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
        Be(
          {
            isFocused: g,
            isPristine: h,
            menu: c,
            search: r,
            filteredItems: z,
            select: C,
          },
          p,
        )
      );
    },
  });
export { dl as V };
