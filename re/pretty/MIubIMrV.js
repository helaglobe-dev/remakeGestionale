import {
  U as d,
  V as p,
  r as v,
  W as b,
  aB as V,
  z as y,
  I as F,
  a3 as h,
} from "./CYsiv7Qj.js";
import { l as R, n as P } from "./BrCrqdgZ.js";
import { f as k } from "./B_W9U9Wp.js";
const z = p({ ...V(), ...P() }, "VForm"),
  D = d()({
    name: "VForm",
    props: z(),
    emits: { "update:modelValue": (a) => !0, submit: (a) => !0 },
    setup(a, n) {
      let { slots: m, emit: l } = n;
      const o = R(a),
        r = v();
      function i(s) {
        s.preventDefault(), o.reset();
      }
      function f(s) {
        const t = s,
          e = o.validate();
        (t.then = e.then.bind(e)),
          (t.catch = e.catch.bind(e)),
          (t.finally = e.finally.bind(e)),
          l("submit", t),
          t.defaultPrevented ||
            e.then((u) => {
              let { valid: c } = u;
              c && r.value?.submit();
            }),
          t.preventDefault();
      }
      return (
        b(() =>
          y(
            "form",
            {
              ref: r,
              class: h(["v-form", a.class]),
              style: F(a.style),
              novalidate: !0,
              onReset: i,
              onSubmit: f,
            },
            [m.default?.(o)],
          ),
        ),
        k(o, r)
      );
    },
  });
export { D as V };
