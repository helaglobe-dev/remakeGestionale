import { g, h as r } from "./Cv1q1CuH.js";
import { d as A, m as B, a as l } from "./BrCrqdgZ.js";
import { f as F } from "./B_W9U9Wp.js";
import {
  U as R,
  V as U,
  Y as $,
  r as w,
  W as D,
  $ as M,
  X as N,
  Z as W,
  B as u,
  P as d,
} from "./CYsiv7Qj.js";
const X = U({ ...B(), ...M(g(), ["inline"]) }, "VCheckbox"),
  z = R()({
    name: "VCheckbox",
    inheritAttrs: !1,
    props: X(),
    emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 },
    setup(e, c) {
      let { attrs: n, slots: a } = c;
      const s = $(e, "modelValue"),
        { isFocused: i, focus: m, blur: f } = A(e),
        t = w(),
        V = N();
      return (
        D(() => {
          const [p, b] = W(n),
            k = l.filterProps(e),
            v = r.filterProps(e);
          return u(
            l,
            d({ ref: t, class: ["v-checkbox", e.class] }, p, k, {
              modelValue: s.value,
              "onUpdate:modelValue": (o) => (s.value = o),
              id: e.id || `checkbox-${V}`,
              focused: i.value,
              style: e.style,
            }),
            {
              ...a,
              default: (o) => {
                let {
                  id: h,
                  messagesId: x,
                  isDisabled: P,
                  isReadonly: C,
                  isValid: y,
                } = o;
                return u(
                  r,
                  d(
                    v,
                    {
                      id: h.value,
                      "aria-describedby": x.value,
                      disabled: P.value,
                      readonly: C.value,
                    },
                    b,
                    {
                      error: y.value === !1,
                      modelValue: s.value,
                      "onUpdate:modelValue": (I) => (s.value = I),
                      onFocus: m,
                      onBlur: f,
                    },
                  ),
                  a,
                );
              },
            },
          );
        }),
        F({}, t)
      );
    },
  });
export { z as V };
