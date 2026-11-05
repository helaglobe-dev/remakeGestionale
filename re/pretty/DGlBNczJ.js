import {
  x as S,
  y as V,
  a2 as D,
  z as b,
  b9 as B,
  K as N,
  a3 as m,
  P as w,
  N as C,
  O as j,
  ba as v,
  k as p,
  a4 as T,
} from "./CYsiv7Qj.js";
var L = {
  name: "Toggle",
  emits: ["input", "update:modelValue", "change"],
  props: {
    value: {
      validator: function (e) {
        return (n) =>
          ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
      },
      required: !1,
    },
    modelValue: {
      validator: function (e) {
        return (n) =>
          ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
      },
      required: !1,
    },
    id: { type: [String, Number], required: !1, default: "toggle" },
    name: { type: [String, Number], required: !1, default: "toggle" },
    disabled: { type: Boolean, required: !1, default: !1 },
    required: { type: Boolean, required: !1, default: !1 },
    falseValue: { type: [String, Number, Boolean], required: !1, default: !1 },
    trueValue: { type: [String, Number, Boolean], required: !1, default: !0 },
    onLabel: { type: [String, Object], required: !1, default: "" },
    offLabel: { type: [String, Object], required: !1, default: "" },
    classes: { type: Object, required: !1, default: () => ({}) },
    labelledby: { type: String, required: !1 },
    describedby: { type: String, required: !1 },
    aria: { required: !1, type: Object, default: () => ({}) },
  },
  setup(e, n) {
    const l = (function (d, c, r) {
        const {
            value: s,
            modelValue: u,
            falseValue: t,
            trueValue: a,
            disabled: g,
          } = v(d),
          i = u && u.value !== void 0 ? u : s,
          o = p(() => i.value === a.value),
          h = (f) => {
            c.emit("input", f),
              c.emit("update:modelValue", f),
              c.emit("change", f);
          },
          k = () => {
            h(a.value);
          },
          y = () => {
            h(t.value);
          };
        return (
          [null, void 0, !1, 0, "0", "off"].indexOf(i.value) !== -1 &&
            [t.value, a.value].indexOf(i.value) === -1 &&
            y(),
          [!0, 1, "1", "on"].indexOf(i.value) !== -1 &&
            [t.value, a.value].indexOf(i.value) === -1 &&
            k(),
          {
            externalValue: i,
            checked: o,
            update: h,
            check: k,
            uncheck: y,
            handleInput: (f) => {
              h(f.target.checked ? a.value : t.value);
            },
            handleClick: () => {
              g.value || (o.value ? y() : k());
            },
          }
        );
      })(e, n),
      O = (function (d, c, r) {
        const { trueValue: s, falseValue: u, onLabel: t, offLabel: a } = v(d),
          g = r.checked,
          i = r.update;
        return {
          label: p(() => {
            let o = g.value ? t.value : a.value;
            return o || (o = "&nbsp;"), o;
          }),
          toggle: () => {
            i(g.value ? u.value : s.value);
          },
          on: () => {
            i(s.value);
          },
          off: () => {
            i(u.value);
          },
        };
      })(e, 0, { checked: l.checked, update: l.update }),
      q = (function (d, c, r) {
        const s = v(d),
          u = s.disabled,
          t = r.checked,
          a = p(() => ({
            container: "toggle-container",
            toggle: "toggle",
            toggleOn: "toggle-on",
            toggleOff: "toggle-off",
            toggleOnDisabled: "toggle-on-disabled",
            toggleOffDisabled: "toggle-off-disabled",
            handle: "toggle-handle",
            handleOn: "toggle-handle-on",
            handleOff: "toggle-handle-off",
            handleOnDisabled: "toggle-handle-on-disabled",
            handleOffDisabled: "toggle-handle-off-disabled",
            label: "toggle-label",
            ...s.classes.value,
          }));
        return {
          classList: p(() => ({
            container: a.value.container,
            toggle: [
              a.value.toggle,
              u.value
                ? t.value
                  ? a.value.toggleOnDisabled
                  : a.value.toggleOffDisabled
                : t.value
                  ? a.value.toggleOn
                  : a.value.toggleOff,
            ],
            handle: [
              a.value.handle,
              u.value
                ? t.value
                  ? a.value.handleOnDisabled
                  : a.value.handleOffDisabled
                : t.value
                  ? a.value.handleOn
                  : a.value.handleOff,
            ],
            label: a.value.label,
          })),
        };
      })(e, 0, { checked: l.checked }),
      x = (function (d, c, r) {
        const { disabled: s } = v(d),
          u = r.check,
          t = r.uncheck,
          a = r.checked;
        return {
          handleSpace: () => {
            s.value || (a.value ? t() : u());
          },
        };
      })(e, 0, { check: l.check, uncheck: l.uncheck, checked: l.checked });
    return { ...l, ...q, ...O, ...x };
  },
};
const z = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"],
  K = ["id", "name", "value", "checked", "disabled"],
  M = ["innerHTML"],
  H = ["checked"];
(L.render = function (e, n, l, O, q, x) {
  return (
    V(),
    S(
      "div",
      w(
        {
          class: e.classList.container,
          tabindex: l.disabled ? void 0 : 0,
          "aria-checked": e.checked,
          "aria-describedby": l.describedby,
          "aria-labelledby": l.labelledby,
          role: "switch",
        },
        l.aria,
        {
          onKeypress:
            n[1] ||
            (n[1] = C(
              j((...d) => e.handleSpace && e.handleSpace(...d), ["prevent"]),
              ["space"],
            )),
        },
      ),
      [
        D(
          b(
            "input",
            {
              type: "checkbox",
              id: l.id,
              name: l.name,
              value: l.trueValue,
              checked: e.checked,
              disabled: l.disabled,
            },
            null,
            8,
            K,
          ),
          [[T, !1]],
        ),
        b(
          "div",
          {
            class: m(e.classList.toggle),
            onClick:
              n[0] || (n[0] = (...d) => e.handleClick && e.handleClick(...d)),
          },
          [
            b("span", { class: m(e.classList.handle) }, null, 2),
            B(
              e.$slots,
              "label",
              { checked: e.checked, classList: e.classList },
              () => [
                b(
                  "span",
                  { class: m(e.classList.label), innerHTML: e.label },
                  null,
                  10,
                  M,
                ),
              ],
            ),
            l.required
              ? (V(),
                S(
                  "input",
                  {
                    key: 0,
                    type: "checkbox",
                    style: {
                      appearance: "none",
                      height: "1px",
                      margin: "0",
                      padding: "0",
                      fontSize: "0",
                      background: "transparent",
                      position: "absolute",
                      width: "100%",
                      bottom: "0",
                      outline: "none",
                    },
                    checked: e.checked,
                    "aria-hidden": "true",
                    tabindex: "-1",
                    required: "",
                  },
                  null,
                  8,
                  H,
                ))
              : N("v-if", !0),
          ],
          2,
        ),
      ],
      16,
      z,
    )
  );
}),
  (L.__file = "src/Toggle.vue");
export { L as b };
