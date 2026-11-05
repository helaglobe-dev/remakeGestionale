import {
  U as X,
  V as H,
  Y as R,
  r as se,
  bF as ye,
  ch as be,
  aJ as oe,
  k as w,
  W as Z,
  z as M,
  Q as q,
  B as x,
  P as N,
  ay as ce,
  a3 as ie,
  _ as de,
  I as Le,
  bP as Ee,
  bd as ee,
  bA as G,
  s as re,
  aM as K,
  as as he,
  D as Re,
  $ as j,
  ci as Oe,
  aO as Ie,
  ca as Ue,
  a2 as je,
  aL as He,
  cj as Je,
  bI as ze,
  a_ as Ke,
  bN as qe,
} from "./CYsiv7Qj.js";
import {
  i as Qe,
  V as $,
  x as ke,
  g as Ge,
  M as pe,
  f as Xe,
} from "./B_W9U9Wp.js";
import { V as De } from "./BqujDEEl.js";
import { V as Ze } from "./hzFhMs-m.js";
import { I as xe, h as et, V as Ve, g as tt, e as at } from "./BrCrqdgZ.js";
import { V as Pe, m as nt } from "./D-XDfEUK.js";
import { V as lt } from "./CxBYvc7u.js";
const Te = H(
    {
      modelValue: null,
      color: String,
      cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" },
      okText: { type: String, default: "$vuetify.confirmEdit.ok" },
      disabled: { type: [Boolean, Array], default: void 0 },
      hideActions: Boolean,
    },
    "VConfirmEdit",
  ),
  we = X()({
    name: "VConfirmEdit",
    props: Te(),
    emits: {
      cancel: () => !0,
      save: (e) => !0,
      "update:modelValue": (e) => !0,
    },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const t = R(e, "modelValue"),
        s = se();
      ye(() => {
        s.value = structuredClone(be(t.value));
      });
      const { t: c } = oe(),
        u = w(() => Qe(t.value, s.value));
      function r(n) {
        return typeof e.disabled == "boolean"
          ? e.disabled
          : Array.isArray(e.disabled)
            ? e.disabled.includes(n)
            : u.value;
      }
      const k = w(() => r("save")),
        d = w(() => r("cancel"));
      function y() {
        (t.value = s.value), v("save", s.value);
      }
      function b() {
        (s.value = structuredClone(be(t.value))), v("cancel");
      }
      function A(n) {
        return M(q, null, [
          x(
            $,
            N(
              {
                disabled: d.value,
                variant: "text",
                color: e.color,
                onClick: b,
                text: c(e.cancelText),
              },
              n,
            ),
            null,
          ),
          x(
            $,
            N(
              {
                disabled: k.value,
                variant: "text",
                color: e.color,
                onClick: y,
                text: c(e.okText),
              },
              n,
            ),
            null,
          ),
        ]);
      }
      let Y = !1;
      return (
        Z(() =>
          M(q, null, [
            o.default?.({
              model: s,
              save: y,
              cancel: b,
              isPristine: u.value,
              get actions() {
                return (Y = !0), A;
              },
            }),
            !e.hideActions && !Y && A(),
          ]),
        ),
        { save: y, cancel: b, isPristine: u }
      );
    },
  }),
  $e = H(
    {
      active: { type: [String, Array], default: void 0 },
      controlHeight: [Number, String],
      controlVariant: { type: String, default: "docked" },
      noMonthPicker: Boolean,
      disabled: { type: [Boolean, String, Array], default: null },
      nextIcon: { type: de, default: "$next" },
      prevIcon: { type: de, default: "$prev" },
      modeIcon: { type: de, default: "$subgroup" },
      text: String,
      monthText: String,
      yearText: String,
      viewMode: { type: String, default: "month" },
    },
    "VDatePickerControls",
  ),
  Me = X()({
    name: "VDatePickerControls",
    props: $e(),
    emits: {
      "click:year": () => !0,
      "click:month": () => !0,
      "click:prev": () => !0,
      "click:next": () => !0,
      "click:prev-year": () => !0,
      "click:next-year": () => !0,
    },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const { t } = oe(),
        s = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("text")
            : !!e.disabled,
        ),
        c = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("mode")
            : !!e.disabled,
        ),
        u = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("prev-month")
            : !!e.disabled,
        ),
        r = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("next-month")
            : !!e.disabled,
        ),
        k = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("prev-year")
            : !!e.disabled,
        ),
        d = w(() =>
          Array.isArray(e.disabled)
            ? e.disabled.includes("next-year")
            : !!e.disabled,
        );
      function y() {
        v("click:prev");
      }
      function b() {
        v("click:next");
      }
      function A() {
        v("click:prev-year");
      }
      function Y() {
        v("click:next-year");
      }
      function n() {
        v("click:year");
      }
      function m() {
        v("click:month");
      }
      return (
        Z(() => {
          const l = { VBtn: { density: "comfortable", variant: "text" } },
            D = x(
              $,
              {
                "data-testid": "prev-month",
                disabled: u.value,
                icon: e.prevIcon,
                "aria-label": t("$vuetify.datePicker.ariaLabel.previousMonth"),
                onClick: y,
              },
              null,
            ),
            C = x(
              $,
              {
                "data-testid": "next-month",
                disabled: r.value,
                icon: e.nextIcon,
                "aria-label": t("$vuetify.datePicker.ariaLabel.nextMonth"),
                onClick: b,
              },
              null,
            ),
            S = x(
              $,
              {
                "data-testid": "prev-year",
                disabled: k.value,
                icon: e.prevIcon,
                "aria-label": t("$vuetify.datePicker.ariaLabel.previousYear"),
                onClick: A,
              },
              null,
            ),
            _ = x(
              $,
              {
                "data-testid": "next-year",
                disabled: d.value,
                icon: e.nextIcon,
                "aria-label": t("$vuetify.datePicker.ariaLabel.nextYear"),
                onClick: Y,
              },
              null,
            ),
            i = x(
              $,
              {
                class: "v-date-picker-controls__only-month-btn",
                "data-testid": "month-btn",
                density: "default",
                disabled: s.value,
                text: e.monthText,
                appendIcon: e.modeIcon,
                rounded: !0,
                "aria-label": t("$vuetify.datePicker.ariaLabel.selectMonth"),
                onClick: m,
              },
              null,
            ),
            V = x(
              $,
              {
                class: "v-date-picker-controls__only-year-btn",
                "data-testid": "year-btn",
                density: "default",
                disabled: c.value,
                text: e.yearText,
                appendIcon: e.modeIcon,
                rounded: !0,
                "aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
                onClick: n,
              },
              null,
            ),
            P = x(
              $,
              {
                class: "v-date-picker-controls__year-btn",
                "data-testid": "year-btn",
                density: "default",
                disabled: c.value,
                text: e.text,
                appendIcon: e.modeIcon,
                rounded: !0,
                "aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
                onClick: n,
              },
              null,
            ),
            p = M(q, null, [
              x(
                $,
                {
                  class: "v-date-picker-controls__month-btn",
                  "data-testid": "month-btn",
                  height: "36",
                  disabled: s.value,
                  text: e.text,
                  rounded: !0,
                  "aria-label": t("$vuetify.datePicker.ariaLabel.selectMonth"),
                  onClick: m,
                },
                null,
              ),
              x(
                $,
                {
                  class: "v-date-picker-controls__mode-btn",
                  "data-testid": "year-btn",
                  disabled: c.value,
                  icon: e.modeIcon,
                  "aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
                  onClick: n,
                },
                null,
              ),
            ]),
            F = {
              viewMode: e.viewMode,
              disabled: Array.isArray(e.disabled) ? e.disabled : [],
              monthYearText: e.text ?? "",
              monthText: e.monthText ?? "",
              yearText: e.yearText ?? "",
              openMonths: m,
              openYears: n,
              prevMonth: y,
              nextMonth: b,
              prevYear: A,
              nextYear: Y,
            },
            J = M(q, null, [
              e.noMonthPicker ? P : p,
              x(De, null, null),
              M("div", { class: "v-date-picker-controls__month" }, [D, C]),
            ]),
            te = M(q, null, [
              M("div", { class: "v-date-picker-controls__month" }, [D, i, C]),
              x(De, null, null),
              M("div", { class: "v-date-picker-controls__year" }, [S, V, _]),
            ]);
          return x(
            ke,
            { defaults: l },
            {
              default: () => [
                M(
                  "div",
                  {
                    class: ie([
                      "v-date-picker-controls",
                      `v-date-picker-controls--variant-${e.controlVariant}`,
                    ]),
                    style: {
                      "--v-date-picker-controls-height": ce(e.controlHeight),
                    },
                  },
                  [
                    o.default?.(F) ??
                      M(q, null, [
                        e.controlVariant === "modal" && J,
                        e.controlVariant === "docked" && te,
                      ]),
                  ],
                ),
              ],
            },
          );
        }),
        {}
      );
    },
  }),
  rt = H(
    {
      appendIcon: de,
      color: String,
      header: String,
      transition: String,
      onClick: Ee(),
    },
    "VDatePickerHeader",
  ),
  Se = X()({
    name: "VDatePickerHeader",
    props: rt(),
    emits: { click: () => !0, "click:append": () => !0 },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const { backgroundColorClasses: t, backgroundColorStyles: s } = Ge(
        () => e.color,
      );
      function c() {
        v("click");
      }
      function u() {
        v("click:append");
      }
      return (
        Z(() => {
          const r = !!(o.default || e.header),
            k = !!(o.append || e.appendIcon);
          return M(
            "div",
            {
              class: ie([
                "v-date-picker-header",
                { "v-date-picker-header--clickable": !!e.onClick },
                t.value,
              ]),
              style: Le(s.value),
              onClick: c,
            },
            [
              o.prepend &&
                M(
                  "div",
                  { key: "prepend", class: "v-date-picker-header__prepend" },
                  [o.prepend()],
                ),
              r &&
                x(
                  pe,
                  { key: "content", name: e.transition },
                  {
                    default: () => [
                      M(
                        "div",
                        {
                          key: e.header,
                          class: "v-date-picker-header__content",
                        },
                        [o.default?.() ?? e.header],
                      ),
                    ],
                  },
                ),
              k &&
                M("div", { class: "v-date-picker-header__append" }, [
                  o.append
                    ? x(
                        ke,
                        {
                          key: "append-defaults",
                          disabled: !e.appendIcon,
                          defaults: {
                            VBtn: { icon: e.appendIcon, variant: "text" },
                          },
                        },
                        { default: () => [o.append?.()] },
                      )
                    : x(
                        $,
                        {
                          key: "append-btn",
                          icon: e.appendIcon,
                          variant: "text",
                          onClick: u,
                        },
                        null,
                      ),
                ]),
            ],
          );
        }),
        {}
      );
    },
  }),
  it = H(
    {
      allowedDates: [Array, Function],
      disabled: { type: Boolean, default: null },
      displayValue: null,
      modelValue: Array,
      month: [Number, String],
      max: null,
      min: null,
      showAdjacentMonths: Boolean,
      year: [Number, String],
      weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
      weeksInMonth: { type: String, default: "dynamic" },
      firstDayOfWeek: { type: [Number, String], default: void 0 },
      firstDayOfYear: { type: [Number, String], default: void 0 },
      weekdayFormat: String,
    },
    "calendar",
  );
function ot(e) {
  const a = ee(),
    v = R(e, "modelValue", [], (n) => G(n).map((m) => a.date(m))),
    o = w(() =>
      e.displayValue
        ? a.date(e.displayValue)
        : v.value.length > 0
          ? a.date(v.value[0])
          : e.min
            ? a.date(e.min)
            : Array.isArray(e.allowedDates)
              ? a.date(e.allowedDates[0])
              : a.date(),
    ),
    t = R(
      e,
      "year",
      void 0,
      (n) => {
        const m = n != null ? Number(n) : a.getYear(o.value);
        return a.startOfYear(a.setYear(a.date(), m));
      },
      (n) => a.getYear(n),
    ),
    s = R(
      e,
      "month",
      void 0,
      (n) => {
        const m = n != null ? Number(n) : a.getMonth(o.value),
          l = a.setYear(a.startOfMonth(a.date()), a.getYear(t.value));
        return a.setMonth(l, m);
      },
      (n) => a.getMonth(n),
    ),
    c = w(() => {
      const n = a.toJsDate(a.startOfWeek(a.date(), e.firstDayOfWeek)).getDay();
      return a
        .getWeekdays(e.firstDayOfWeek, e.weekdayFormat)
        .filter((m, l) => e.weekdays.includes((l + n) % 7));
    }),
    u = w(() => {
      const n = a.getWeekArray(s.value, e.firstDayOfWeek),
        m = n.flat(),
        l = 42;
      if (e.weeksInMonth === "static" && m.length < l) {
        const D = m[m.length - 1];
        let C = [];
        for (let S = 1; S <= l - m.length; S++)
          C.push(a.addDays(D, S)), S % 7 === 0 && (n.push(C), (C = []));
      }
      return n;
    });
  function r(n, m) {
    return n
      .filter((l) => e.weekdays.includes(a.toJsDate(l).getDay()))
      .map((l, D) => {
        const C = a.toISO(l),
          S = !a.isSameMonth(l, s.value),
          _ = a.isSameDay(l, a.startOfMonth(s.value)),
          i = a.isSameDay(l, a.endOfMonth(s.value)),
          V = a.isSameDay(l, s.value),
          P = e.weekdays.length;
        return {
          date: l,
          formatted: a.format(l, "keyboardDate"),
          isAdjacent: S,
          isDisabled: Y(l),
          isEnd: i,
          isHidden: S && !e.showAdjacentMonths,
          isSame: V,
          isSelected: v.value.some((p) => a.isSameDay(l, p)),
          isStart: _,
          isToday: a.isSameDay(l, m),
          isWeekEnd: D % P === P - 1,
          isWeekStart: D % P === 0,
          isoDate: C,
          localized: a.format(l, "dayOfMonth"),
          month: a.getMonth(l),
          year: a.getYear(l),
        };
      });
  }
  const k = w(() => {
      const n = a.startOfWeek(o.value, e.firstDayOfWeek),
        m = [];
      for (let D = 0; D <= 6; D++) m.push(a.addDays(n, D));
      const l = a.date();
      return r(m, l);
    }),
    d = w(() => {
      const n = u.value.flat(),
        m = a.date();
      return r(n, m);
    }),
    y = w(() =>
      u.value.map((n) =>
        n.length ? a.getWeek(n[0], e.firstDayOfWeek, e.firstDayOfYear) : null,
      ),
    ),
    { minDate: b, maxDate: A } = ge(e);
  function Y(n) {
    if (e.disabled) return !0;
    const m = a.date(n);
    return (b.value && a.isBefore(a.endOfDay(m), b.value)) ||
      (A.value && a.isAfter(m, A.value))
      ? !0
      : Array.isArray(e.allowedDates) && e.allowedDates.length > 0
        ? !e.allowedDates.some((l) => a.isSameDay(a.date(l), m))
        : typeof e.allowedDates == "function"
          ? !e.allowedDates(m)
          : !1;
  }
  return {
    displayValue: o,
    daysInMonth: d,
    daysInWeek: k,
    genDays: r,
    model: v,
    weeksInMonth: u,
    weekdayLabels: c,
    weekNumbers: y,
  };
}
function ge(e) {
  const a = ee(),
    v = w(() => {
      if (!e.min) return null;
      const c = a.date(e.min);
      return a.isValid(c) ? c : null;
    }),
    o = w(() => {
      if (!e.max) return null;
      const c = a.date(e.max);
      return a.isValid(c) ? c : null;
    });
  function t(c) {
    return v.value && a.isBefore(c, v.value)
      ? v.value
      : o.value && a.isAfter(c, o.value)
        ? o.value
        : c;
  }
  function s(c) {
    return (
      (!v.value || a.isAfter(c, v.value)) &&
      (!o.value || a.isBefore(c, o.value))
    );
  }
  return { minDate: v, maxDate: o, clampDate: t, isInAllowedRange: s };
}
const Fe = H(
    {
      color: String,
      hideWeekdays: Boolean,
      multiple: [Boolean, Number, String],
      showWeek: Boolean,
      transition: { type: String, default: "picker-transition" },
      reverseTransition: { type: String, default: "picker-reverse-transition" },
      events: { type: [Array, Function, Object], default: () => null },
      eventColor: {
        type: [Array, Function, Object, String],
        default: () => null,
      },
      ...j(it(), ["displayValue"]),
    },
    "VDatePickerMonth",
  ),
  Ae = X()({
    name: "VDatePickerMonth",
    props: Fe(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:month": (e) => !0,
      "update:year": (e) => !0,
    },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const t = se(),
        { t: s } = oe(),
        { daysInMonth: c, model: u, weekNumbers: r, weekdayLabels: k } = ot(e),
        d = ee(),
        y = re(),
        b = re(),
        A = re(!1),
        Y = K(() => (A.value ? e.reverseTransition : e.transition));
      e.multiple === "range" &&
        u.value.length > 0 &&
        ((y.value = u.value[0]),
        u.value.length > 1 && (b.value = u.value[u.value.length - 1]));
      const n = w(() => {
        const i = ["number", "string"].includes(typeof e.multiple)
          ? Number(e.multiple)
          : 1 / 0;
        return u.value.length >= i;
      });
      he(c, (i, V) => {
        V && (A.value = d.isBefore(i[0].date, V[0].date));
      });
      function m(i) {
        const V = d.startOfDay(i);
        if (
          (u.value.length === 0
            ? (y.value = void 0)
            : u.value.length === 1 &&
              ((y.value = u.value[0]), (b.value = void 0)),
          !y.value)
        )
          (y.value = V), (u.value = [y.value]);
        else if (b.value)
          (y.value = i), (b.value = void 0), (u.value = [y.value]);
        else {
          if (d.isSameDay(V, y.value)) {
            (y.value = void 0), (u.value = []);
            return;
          } else
            d.isBefore(V, y.value)
              ? ((b.value = d.endOfDay(y.value)), (y.value = V))
              : (b.value = d.endOfDay(V));
          u.value = Oe(d, y.value, b.value);
        }
      }
      function l(i) {
        const V = d.format(i.date, "fullDateWithWeekday"),
          P = i.isToday ? "currentDate" : "selectDate";
        return s(`$vuetify.datePicker.ariaLabel.${P}`, V);
      }
      function D(i) {
        const V = u.value.findIndex((P) => d.isSameDay(P, i));
        if (V === -1) u.value = [...u.value, i];
        else {
          const P = [...u.value];
          P.splice(V, 1), (u.value = P);
        }
      }
      function C(i) {
        e.multiple === "range" ? m(i) : e.multiple ? D(i) : (u.value = [i]);
      }
      function S(i) {
        const { events: V, eventColor: P } = e;
        let p,
          F = [];
        if (
          (Array.isArray(V)
            ? (p = V.includes(i))
            : V instanceof Function
              ? (p = V(i) || !1)
              : V
                ? (p = V[i] || !1)
                : (p = !1),
          p)
        )
          p !== !0
            ? (F = G(p))
            : typeof P == "string"
              ? (F = [P])
              : typeof P == "function"
                ? (F = G(P(i)))
                : Array.isArray(P)
                  ? (F = P)
                  : typeof P == "object" && P !== null && (F = G(P[i]));
        else return [];
        return F.length
          ? F.filter(Boolean).map((J) =>
              typeof J == "string" ? J : "surface-variant",
            )
          : ["surface-variant"];
      }
      function _(i) {
        const V = S(i);
        return V.length
          ? M("div", { class: "v-date-picker-month__events" }, [
              V.map((P) => x(Ze, { dot: !0, color: P }, null)),
            ])
          : null;
      }
      Z(() =>
        M(
          "div",
          {
            class: "v-date-picker-month",
            style: { "--v-date-picker-days-in-week": e.weekdays.length },
          },
          [
            e.showWeek &&
              M("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [
                !e.hideWeekdays &&
                  M(
                    "div",
                    {
                      key: "hide-week-days",
                      class: "v-date-picker-month__day",
                    },
                    [Re(" ")],
                  ),
                r.value.map((i) =>
                  M(
                    "div",
                    {
                      class: ie([
                        "v-date-picker-month__day",
                        "v-date-picker-month__day--adjacent",
                      ]),
                    },
                    [i],
                  ),
                ),
              ]),
            x(
              pe,
              { name: Y.value },
              {
                default: () => [
                  M(
                    "div",
                    {
                      ref: t,
                      key: c.value[0].date?.toString(),
                      class: "v-date-picker-month__days",
                    },
                    [
                      !e.hideWeekdays &&
                        k.value.map((i) =>
                          M(
                            "div",
                            {
                              class: ie([
                                "v-date-picker-month__day",
                                "v-date-picker-month__weekday",
                              ]),
                            },
                            [i],
                          ),
                        ),
                      c.value.map((i, V) => {
                        const P = {
                          props: {
                            class: "v-date-picker-month__day-btn",
                            color: i.isSelected || i.isToday ? e.color : void 0,
                            disabled: i.isDisabled,
                            icon: !0,
                            ripple: !1,
                            variant: i.isSelected
                              ? "flat"
                              : i.isToday
                                ? "outlined"
                                : "text",
                            "aria-label": l(i),
                            "aria-current": i.isToday ? "date" : void 0,
                            onClick: () => C(i.date),
                          },
                          item: i,
                          i: V,
                        };
                        return (
                          n.value && !i.isSelected && (i.isDisabled = !0),
                          M(
                            "div",
                            {
                              class: ie([
                                "v-date-picker-month__day",
                                {
                                  "v-date-picker-month__day--adjacent":
                                    i.isAdjacent,
                                  "v-date-picker-month__day--hide-adjacent":
                                    i.isHidden,
                                  "v-date-picker-month__day--selected":
                                    i.isSelected,
                                  "v-date-picker-month__day--week-end":
                                    i.isWeekEnd,
                                  "v-date-picker-month__day--week-start":
                                    i.isWeekStart,
                                },
                              ]),
                              "data-v-date": i.isDisabled ? void 0 : i.isoDate,
                            },
                            [
                              (e.showAdjacentMonths || !i.isAdjacent) &&
                                (o.day?.(P) ??
                                  x($, P.props, {
                                    default: () => [i.localized, _(i.isoDate)],
                                  })),
                            ],
                          )
                        );
                      }),
                    ],
                  ),
                ],
              },
            ),
          ],
        ),
      );
    },
  }),
  Be = H(
    {
      color: String,
      height: [String, Number],
      min: null,
      max: null,
      modelValue: Number,
      year: Number,
      allowedMonths: [Array, Function],
    },
    "VDatePickerMonths",
  ),
  Ce = X()({
    name: "VDatePickerMonths",
    props: Be(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const t = ee(),
        s = R(e, "modelValue"),
        c = w(() => {
          let r = t.startOfYear(t.date());
          return (
            e.year && (r = t.setYear(r, e.year)),
            Ie(12).map((k) => {
              const d = t.format(r, "monthShort"),
                y = t.format(r, "month"),
                b = !!(
                  !u(k) ||
                  (e.min && t.isAfter(t.startOfMonth(t.date(e.min)), r)) ||
                  (e.max && t.isAfter(r, t.startOfMonth(t.date(e.max))))
                );
              return (
                (r = t.getNextMonth(r)),
                { isDisabled: b, text: d, label: y, value: k }
              );
            })
          );
        });
      ye(() => {
        s.value = s.value ?? t.getMonth(t.date());
      });
      function u(r) {
        return Array.isArray(e.allowedMonths) && e.allowedMonths.length
          ? e.allowedMonths.includes(r)
          : typeof e.allowedMonths == "function"
            ? e.allowedMonths(r)
            : !0;
      }
      return (
        Z(() =>
          M(
            "div",
            { class: "v-date-picker-months", style: { height: ce(e.height) } },
            [
              M("div", { class: "v-date-picker-months__content" }, [
                c.value.map((r, k) => {
                  const d = {
                    active: s.value === k,
                    ariaLabel: r.label,
                    color: s.value === k ? e.color : void 0,
                    disabled: r.isDisabled,
                    rounded: !0,
                    text: r.text,
                    variant: s.value === r.value ? "flat" : "text",
                    onClick: () => y(k),
                  };
                  function y(b) {
                    if (s.value === b) {
                      v("update:modelValue", s.value);
                      return;
                    }
                    s.value = b;
                  }
                  return (
                    o.month?.({ month: r, i: k, props: d }) ??
                    x($, N({ key: "month" }, d), null)
                  );
                }),
              ]),
            ],
          ),
        ),
        {}
      );
    },
  }),
  Ne = H(
    {
      color: String,
      height: [String, Number],
      min: null,
      max: null,
      modelValue: Number,
      allowedYears: [Array, Function],
    },
    "VDatePickerYears",
  ),
  Ye = X()({
    name: "VDatePickerYears",
    props: Ne(),
    directives: { vIntersect: xe },
    emits: { "update:modelValue": (e) => !0 },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const t = ee(),
        s = R(e, "modelValue"),
        c = w(() => {
          const d = t.getYear(t.date());
          let y = d - 100,
            b = d + 52;
          e.min && (y = t.getYear(t.date(e.min))),
            e.max && (b = t.getYear(t.date(e.max)));
          let A = t.startOfYear(t.date());
          return (
            (A = t.setYear(A, y)),
            Ie(b - y + 1, y).map((Y) => {
              const n = t.format(A, "year");
              return (
                (A = t.setYear(A, t.getYear(A) + 1)),
                { text: n, value: Y, isDisabled: !k(Y) }
              );
            })
          );
        });
      ye(() => {
        s.value = s.value ?? t.getYear(t.date());
      });
      const u = Ue();
      function r() {
        u.el?.focus(), u.el?.scrollIntoView({ block: "center" });
      }
      function k(d) {
        return Array.isArray(e.allowedYears) && e.allowedYears.length
          ? e.allowedYears.includes(d)
          : typeof e.allowedYears == "function"
            ? e.allowedYears(d)
            : !0;
      }
      return (
        Z(() =>
          je(
            M(
              "div",
              { class: "v-date-picker-years", style: { height: ce(e.height) } },
              [
                M("div", { class: "v-date-picker-years__content" }, [
                  c.value.map((d, y) => {
                    const b = {
                      ref: s.value === d.value ? u : void 0,
                      active: s.value === d.value,
                      color: s.value === d.value ? e.color : void 0,
                      rounded: !0,
                      text: d.text,
                      disabled: d.isDisabled,
                      variant: s.value === d.value ? "flat" : "text",
                      onClick: () => {
                        if (s.value === d.value) {
                          v("update:modelValue", s.value);
                          return;
                        }
                        s.value = d.value;
                      },
                    };
                    return (
                      o.year?.({ year: d, i: y, props: b }) ??
                      x($, N({ key: "month" }, b), null)
                    );
                  }),
                ]),
              ],
            ),
            [[xe, { handler: r }, null, { once: !0 }]],
          ),
        ),
        {}
      );
    },
  }),
  We = H(
    {
      header: { type: String, default: "$vuetify.datePicker.header" },
      headerColor: String,
      headerDateFormat: { type: String, default: "normalDateWithWeekday" },
      landscapeHeaderWidth: [Number, String],
      ...j($e(), ["active", "monthText", "yearText"]),
      ...Fe({ weeksInMonth: "static" }),
      ...j(Be(), ["modelValue"]),
      ...j(Ne(), ["modelValue"]),
      ...nt({ title: "$vuetify.datePicker.title" }),
      modelValue: null,
    },
    "VDatePicker",
  ),
  _e = X()({
    name: "VDatePicker",
    props: We(),
    emits: {
      "update:modelValue": (e) => !0,
      "update:month": (e) => !0,
      "update:year": (e) => !0,
      "update:viewMode": (e) => !0,
    },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const t = ee(),
        { t: s } = oe(),
        { rtlClasses: c } = He(),
        u = R(
          e,
          "modelValue",
          void 0,
          (f) => G(f).map((g) => t.date(g)),
          (f) => (e.multiple ? f : f[0]),
        ),
        r = R(e, "viewMode"),
        { minDate: k, maxDate: d, clampDate: y } = ge(e),
        b = w(() => {
          const f = t.date(),
            g = u.value?.[0] ? t.date(u.value[0]) : y(f);
          return g && t.isValid(g) ? g : f;
        }),
        A = K(() => e.headerColor ?? e.color),
        Y = R(e, "month"),
        n = w({
          get: () => Number(Y.value ?? t.getMonth(t.startOfMonth(b.value))),
          set: (f) => (Y.value = f),
        }),
        m = R(e, "year"),
        l = w({
          get: () =>
            Number(
              m.value ?? t.getYear(t.startOfYear(t.setMonth(b.value, n.value))),
            ),
          set: (f) => (m.value = f),
        }),
        D = re(!1),
        C = w(() => {
          if (e.multiple && u.value.length > 1)
            return s("$vuetify.datePicker.itemsSelected", u.value.length);
          const f =
            u.value[0] && t.isValid(u.value[0])
              ? t.format(t.date(u.value[0]), e.headerDateFormat)
              : s(e.header);
          return e.landscape && f.split(" ").length === 3
            ? f.replace(
                " ",
                `
`,
              )
            : f;
        }),
        S = K(() => {
          let f = t.date();
          return (
            (f = t.setDate(f, 1)),
            (f = t.setMonth(f, n.value)),
            (f = t.setYear(f, l.value)),
            f
          );
        }),
        _ = K(() => t.format(S.value, "monthAndYear")),
        i = K(() => t.format(S.value, "monthShort")),
        V = K(() => t.format(S.value, "year")),
        P = K(
          () => `date-picker-header${D.value ? "-reverse" : ""}-transition`,
        ),
        p = w(() => {
          if (e.disabled) return !0;
          const f = [];
          if (r.value !== "month")
            f.push("prev-month", "next-month", "prev-year", "next-year");
          else {
            let g = t.date();
            if (
              ((g = t.startOfMonth(g)),
              (g = t.setMonth(g, n.value)),
              (g = t.setYear(g, l.value)),
              k.value)
            ) {
              const O = t.addDays(t.startOfMonth(g), -1),
                B = t.addDays(t.startOfYear(g), -1);
              t.isAfter(k.value, O) && f.push("prev-month"),
                t.isAfter(k.value, B) && f.push("prev-year");
            }
            if (d.value) {
              const O = t.addDays(t.endOfMonth(g), 1),
                B = t.addDays(t.endOfYear(g), 1);
              t.isAfter(O, d.value) && f.push("next-month"),
                t.isAfter(B, d.value) && f.push("next-year");
            }
          }
          return f;
        }),
        F = w(() => e.allowedYears || fe),
        J = w(() => e.allowedMonths || ve);
      function te(f, g) {
        const O = e.allowedDates;
        if (typeof O != "function") return !0;
        const B = 1 + Je(t, f, g);
        for (let I = 0; I < B; I++) if (O(t.addDays(f, I))) return !0;
        return !1;
      }
      function fe(f) {
        if (typeof e.allowedDates == "function") {
          const g = t.parseISO(`${f}-01-01`);
          return te(g, t.endOfYear(g));
        }
        if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
          for (const g of e.allowedDates)
            if (t.getYear(t.date(g)) === f) return !0;
          return !1;
        }
        return !0;
      }
      function ve(f) {
        if (typeof e.allowedDates == "function") {
          const g = String(f + 1).padStart(2, "0"),
            O = t.parseISO(`${l.value}-${g}-01`);
          return te(O, t.endOfMonth(O));
        }
        if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
          for (const g of e.allowedDates)
            if (t.getYear(t.date(g)) === l.value && t.getMonth(t.date(g)) === f)
              return !0;
          return !1;
        }
        return !0;
      }
      function me() {
        n.value < 11 ? n.value++ : (l.value++, (n.value = 0), L()), z();
      }
      function ue() {
        n.value > 0 ? n.value-- : (l.value--, (n.value = 11), L()), z();
      }
      function h() {
        if ((l.value++, d.value)) {
          const f = String(n.value + 1).padStart(2, "0"),
            g = t.parseISO(`${l.value}-${f}-01`);
          t.isAfter(g, d.value) && (n.value = t.getMonth(d.value));
        }
        L();
      }
      function T() {
        if ((l.value--, k.value)) {
          const f = String(n.value + 1).padStart(2, "0"),
            g = t.endOfMonth(t.parseISO(`${l.value}-${f}-01`));
          t.isAfter(k.value, g) && (n.value = t.getMonth(k.value));
        }
        L();
      }
      function U() {
        r.value = "month";
      }
      function ae() {
        r.value = r.value === "months" ? "month" : "months";
      }
      function W() {
        r.value = r.value === "year" ? "month" : "year";
      }
      function z() {
        r.value === "months" && ae();
      }
      function L() {
        r.value === "year" && W();
      }
      return (
        he(u, (f, g) => {
          const O = G(g),
            B = G(f);
          if (!B.length) return;
          const I = t.date(O[O.length - 1]),
            ne = t.date(B[B.length - 1]);
          if (t.isSameDay(I, ne)) return;
          const le = t.getMonth(ne),
            E = t.getYear(ne);
          le !== n.value && ((n.value = le), z()),
            E !== l.value && ((l.value = E), L()),
            (D.value = t.isBefore(I, ne));
        }),
        Z(() => {
          const f = Pe.filterProps(e),
            g = j(Me.filterProps(e), ["viewMode"]),
            O = Se.filterProps(e),
            B = Ae.filterProps(e),
            I = j(Ce.filterProps(e), ["modelValue"]),
            ne = j(Ye.filterProps(e), ["modelValue"]),
            le = { color: A.value, header: C.value, transition: P.value };
          return x(
            Pe,
            N(f, {
              color: A.value,
              class: [
                "v-date-picker",
                `v-date-picker--${r.value}`,
                { "v-date-picker--show-week": e.showWeek },
                c.value,
                e.class,
              ],
              style: [
                {
                  "--v-date-picker-landscape-header-width": ce(
                    e.landscapeHeaderWidth,
                  ),
                },
                e.style,
              ],
            }),
            {
              title: () =>
                o.title?.() ??
                M("div", { class: "v-date-picker__title" }, [s(e.title)]),
              header: () =>
                o.header
                  ? x(
                      ke,
                      { defaults: { VDatePickerHeader: { ...le } } },
                      { default: () => [o.header?.(le)] },
                    )
                  : x(
                      Se,
                      N({ key: "header" }, O, le, {
                        onClick: r.value !== "month" ? U : void 0,
                      }),
                      { prepend: o.prepend, append: o.append },
                    ),
              default: () =>
                M(q, null, [
                  x(
                    Me,
                    N(g, {
                      disabled: p.value,
                      viewMode: r.value,
                      text: _.value,
                      monthText: i.value,
                      yearText: V.value,
                      "onClick:next": me,
                      "onClick:prev": ue,
                      "onClick:nextYear": h,
                      "onClick:prevYear": T,
                      "onClick:month": ae,
                      "onClick:year": W,
                    }),
                    { default: o.controls },
                  ),
                  x(
                    et,
                    { hideOnLeave: !0 },
                    {
                      default: () => [
                        r.value === "months"
                          ? x(
                              Ce,
                              N({ key: "date-picker-months" }, I, {
                                modelValue: n.value,
                                "onUpdate:modelValue": [
                                  (E) => (n.value = E),
                                  z,
                                ],
                                min: k.value,
                                max: d.value,
                                year: l.value,
                                allowedMonths: J.value,
                              }),
                              { month: o.month },
                            )
                          : r.value === "year"
                            ? x(
                                Ye,
                                N({ key: "date-picker-years" }, ne, {
                                  modelValue: l.value,
                                  "onUpdate:modelValue": [
                                    (E) => (l.value = E),
                                    L,
                                  ],
                                  min: k.value,
                                  max: d.value,
                                  allowedYears: F.value,
                                }),
                                { year: o.year },
                              )
                            : x(
                                Ae,
                                N({ key: "date-picker-month" }, B, {
                                  modelValue: u.value,
                                  "onUpdate:modelValue": (E) => (u.value = E),
                                  month: n.value,
                                  "onUpdate:month": [(E) => (n.value = E), z],
                                  year: l.value,
                                  "onUpdate:year": [(E) => (l.value = E), L],
                                  min: k.value,
                                  max: d.value,
                                }),
                                { day: o.day },
                              ),
                      ],
                    },
                  ),
                ]),
              actions: o.actions,
            },
          );
        }),
        {}
      );
    },
  });
class Q {
  constructor(a, v) {
    (this.order = a), (this.separator = v);
  }
  get format() {
    return this.order
      .split("")
      .map((a) => `${a}${a}`)
      .join(this.separator)
      .replace("yy", "yyyy");
  }
  static canBeParsed(a) {
    if (typeof a != "string") return !1;
    const v = a.toLowerCase();
    return (
      ["y", "m", "d"].every((o) => v.includes(o)) &&
      ["/", "-", "."].some((o) => a.includes(o))
    );
  }
  static parse(a) {
    if (!Q.canBeParsed(a))
      throw new Error(`[${a}] cannot be parsed into date format specification`);
    const v = a
        .toLowerCase()
        .split("")
        .filter((t, s, c) => "dmy".includes(t) && c.indexOf(t) === s)
        .join(""),
      o = ["/", "-", "."].find((t) => a.includes(t));
    return new Q(v, o);
  }
}
const ut = H(
  { inputFormat: { type: String, validator: (e) => !e || Q.canBeParsed(e) } },
  "date-format",
);
function dt(e, a) {
  const v = ee();
  function o() {
    const r = a.value ?? "en-US",
      k = Intl.DateTimeFormat(r, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(v.toJsDate(v.parseISO("1999-12-07")))
        .replace(/(07)|(٠٧)|(٢٩)|(۱۶)|(০৭)/, "dd")
        .replace(/(12)|(١٢)|(٠٨)|(۰۹)|(১২)/, "mm")
        .replace(/(1999)|(2542)|(١٩٩٩)|(١٤٢٠)|(۱۳۷۸)|(১৯৯৯)/, "yyyy")
        .replace(/[^ymd\-/.]/g, "")
        .replace(/\.$/, "");
    return Q.canBeParsed(k) ? k : "mm/dd/yyyy";
  }
  const t = K(() =>
    Q.canBeParsed(e.inputFormat) ? Q.parse(e.inputFormat) : Q.parse(o()),
  );
  function s(r) {
    function k(D) {
      const C = D.trim().split(t.value.separator);
      return {
        y: Number(C[t.value.order.indexOf("y")]),
        m: Number(C[t.value.order.indexOf("m")]),
        d: Number(C[t.value.order.indexOf("d")]),
      };
    }
    function d(D) {
      const { y: C, m: S, d: _ } = D;
      return !C || !S || !_ || S < 1 || S > 12 || _ < 1 || _ > 31
        ? null
        : { year: y(C), month: S, day: _ };
    }
    function y(D) {
      const C = v.getYear(v.date());
      if (D > 100 || C % 100 >= 50) return D;
      const S = ~~(C / 100) * 100;
      return D < 50 ? S + D : S - 100 + D;
    }
    const b = k(r),
      A = d(b);
    if (!A) return null;
    const { year: Y, month: n, day: m } = A,
      l = (D) => String(D).padStart(2, "0");
    return v.parseISO(`${Y}-${l(n)}-${l(m)}`);
  }
  function c(r) {
    return !!s(r);
  }
  function u(r) {
    const k = v.toISO(r).split("T")[0].split("-");
    return t.value.order
      .split("")
      .map((d) => k["ymd".indexOf(d)])
      .join(t.value.separator);
  }
  return {
    isValid: c,
    parseDate: s,
    formatDate: u,
    parserFormat: K(() => t.value.format),
  };
}
const st = H(
    {
      displayFormat: { type: [Function, String], default: void 0 },
      location: { type: String, default: "bottom start" },
      menu: Boolean,
      updateOn: { type: Array, default: () => ["blur", "enter"] },
      ...ut(),
      ...qe({ mobile: null }),
      ...at(),
      ...Te({ hideActions: !0 }),
      ...tt({ prependIcon: "$calendar" }),
      ...j(We({ hideHeader: !0, showAdjacentMonths: !0 }), [
        "location",
        "rounded",
        "height",
        "minHeight",
        "maxHeight",
      ]),
    },
    "VDateInput",
  ),
  gt = X()({
    name: "VDateInput",
    props: st(),
    emits: {
      save: (e) => !0,
      cancel: () => !0,
      "update:focused": (e) => !0,
      "update:modelValue": (e) => !0,
      "update:menu": (e) => !0,
    },
    setup(e, a) {
      let { emit: v, slots: o } = a;
      const { t, current: s } = oe(),
        c = ee(),
        { isValid: u, parseDate: r, formatDate: k, parserFormat: d } = dt(e, s),
        { mobile: y } = ze(e),
        { clampDate: b, isInAllowedRange: A } = ge(e),
        Y = () => (e.multiple ? [] : null),
        n = R(
          e,
          "modelValue",
          Y(),
          (h) =>
            Array.isArray(h) ? h.map((T) => c.toJsDate(T)) : h && c.toJsDate(h),
          (h) => (Array.isArray(h) ? h.map((T) => c.date(T)) : h && c.date(h)),
        ),
        m = R(e, "menu"),
        l = re(!1),
        D = re(e.focused),
        C = se(),
        S = se(["save"]);
      function _(h) {
        return typeof e.displayFormat == "function"
          ? e.displayFormat(h)
          : e.displayFormat
            ? c.format(h, e.displayFormat ?? "keyboardDate")
            : k(h);
      }
      const i = w(() => {
          const h = G(n.value);
          if (!h.length) return null;
          if (e.multiple === !0)
            return t("$vuetify.datePicker.itemsSelected", h.length);
          if (e.multiple === "range") {
            const T = h[0],
              U = h[h.length - 1];
            return !c.isValid(T) || !c.isValid(U)
              ? ""
              : `${_(c.date(T))} - ${_(c.date(U))}`;
          }
          return c.isValid(n.value) ? _(c.date(n.value)) : "";
        }),
        V = w(() => {
          if (y.value) return l.value ? "text" : "none";
        }),
        P = w(() => !e.disabled && !e.readonly),
        p = w(() =>
          e.updateOn.length ? !(y.value && l.value) && e.readonly : !0,
        );
      he(m, (h) => {
        h || ((l.value = !1), (S.value = ["save"]));
      });
      function F(h) {
        h.key === "Enter" &&
          ((!m.value || !D.value) && (m.value = !0),
          e.updateOn.includes("enter") && !e.readonly && ue(h.target));
      }
      function J(h) {
        h.preventDefault(),
          h.stopPropagation(),
          m.value && y.value ? (l.value = !0) : (m.value = !0);
      }
      function te() {
        v("cancel"), (m.value = !1), (l.value = !1);
      }
      function fe(h) {
        v("save", h), (m.value = !1);
      }
      function ve(h) {
        h == null && (n.value = Y());
      }
      function me(h) {
        e.updateOn.includes("blur") && !e.readonly && ue(h.target),
          y.value && l.value && !D.value && ((m.value = !1), (l.value = !1));
      }
      function ue(h) {
        let { value: T } = h;
        if (!T.trim()) n.value = Y();
        else if (!e.multiple) u(T) && (n.value = b(r(T)));
        else {
          const U = T.trim().split(/\D+-\D+|[^\d\-/.]+/);
          if (U.every(u))
            if (e.multiple === "range") {
              const [ae, W] = U.map(r)
                .map(b)
                .toSorted((z, L) => (c.isAfter(z, L) ? 1 : -1));
              n.value = Oe(c, ae, W);
            } else n.value = U.map(r).filter(A);
        }
      }
      return (
        Z(() => {
          const h = we.filterProps(e),
            T = _e.filterProps(
              j(e, [
                "active",
                "bgColor",
                "color",
                "location",
                "rounded",
                "maxWidth",
                "minWidth",
                "width",
              ]),
            ),
            U = Ke(o, ["title", "header", "day", "month", "year"]),
            ae = Ve.filterProps(j(e, ["placeholder"]));
          return x(
            Ve,
            N({ ref: C }, ae, {
              class: e.class,
              style: e.style,
              modelValue: i.value,
              inputmode: V.value,
              placeholder: e.placeholder ?? d.value,
              readonly: p.value,
              onKeydown: P.value ? F : void 0,
              focused: m.value || D.value,
              onBlur: me,
              validationValue: n.value,
              "onClick:control": P.value ? J : void 0,
              "onClick:prepend": P.value ? J : void 0,
              "onUpdate:modelValue": ve,
              "onUpdate:focused": (W) => (D.value = W),
            }),
            {
              ...o,
              default: () =>
                M(q, null, [
                  x(
                    lt,
                    {
                      modelValue: m.value,
                      "onUpdate:modelValue": (W) => (m.value = W),
                      activator: "parent",
                      minWidth: "0",
                      eager: D.value,
                      location: e.location,
                      closeOnContentClick: !1,
                      openOnClick: !1,
                    },
                    {
                      default: () => [
                        x(
                          we,
                          N(h, {
                            modelValue: n.value,
                            "onUpdate:modelValue": (W) => (n.value = W),
                            disabled: S.value,
                            onSave: fe,
                            onCancel: te,
                          }),
                          {
                            default: (W) => {
                              let {
                                actions: z,
                                model: L,
                                save: f,
                                cancel: g,
                                isPristine: O,
                              } = W;
                              function B(I) {
                                e.hideActions
                                  ? ((n.value = I),
                                    e.multiple || (m.value = !1))
                                  : (L.value = I),
                                  v("save", I),
                                  (S.value = []);
                              }
                              return x(
                                _e,
                                N(T, {
                                  modelValue: e.hideActions ? n.value : L.value,
                                  "onUpdate:modelValue": (I) => B(I),
                                  onMousedown: (I) => I.preventDefault(),
                                }),
                                {
                                  ...U,
                                  actions: e.hideActions
                                    ? void 0
                                    : () =>
                                        o.actions?.({
                                          save: f,
                                          cancel: g,
                                          isPristine: O,
                                        }) ?? z(),
                                },
                              );
                            },
                          },
                        ),
                      ],
                    },
                  ),
                  o.default?.(),
                ]),
            },
          );
        }),
        Xe({}, C)
      );
    },
  });
export { gt as V };
