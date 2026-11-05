import {
  V as r,
  b5 as d,
  aB as i,
  U as n,
  b2 as m,
  W as v,
  B as b,
  z as t,
  ay as h,
  I as f,
  a3 as u,
} from "./CYsiv7Qj.js";
import { n as c, r as g, q as y } from "./B_W9U9Wp.js";
const x = r(
    {
      fixedHeader: Boolean,
      fixedFooter: Boolean,
      height: [Number, String],
      hover: Boolean,
      striped: {
        type: String,
        default: null,
        validator: (e) => ["even", "odd"].includes(e),
      },
      ...i(),
      ...g(),
      ...c(),
      ...d(),
    },
    "VTable",
  ),
  B = n()({
    name: "VTable",
    props: x(),
    setup(e, s) {
      let { slots: a, emit: T } = s;
      const { themeClasses: o } = m(e),
        { densityClasses: l } = y(e);
      return (
        v(() =>
          b(
            e.tag,
            {
              class: u([
                "v-table",
                {
                  "v-table--fixed-height": !!e.height,
                  "v-table--fixed-header": e.fixedHeader,
                  "v-table--fixed-footer": e.fixedFooter,
                  "v-table--has-top": !!a.top,
                  "v-table--has-bottom": !!a.bottom,
                  "v-table--hover": e.hover,
                  "v-table--striped-even": e.striped === "even",
                  "v-table--striped-odd": e.striped === "odd",
                },
                o.value,
                l.value,
                e.class,
              ]),
              style: f(e.style),
            },
            {
              default: () => [
                a.top?.(),
                a.default
                  ? t(
                      "div",
                      {
                        class: "v-table__wrapper",
                        style: { height: h(e.height) },
                      },
                      [t("table", null, [a.default()])],
                    )
                  : a.wrapper?.(),
                a.bottom?.(),
              ],
            },
          ),
        ),
        {}
      );
    },
  });
export { B as V, x as m };
