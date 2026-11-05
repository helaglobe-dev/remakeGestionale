import { k as n } from "./BrCrqdgZ.js";
import { g as k, x as v } from "./B_W9U9Wp.js";
import { V as r, m } from "./B6Tli9r0.js";
import {
  U as u,
  V as h,
  W as V,
  B as i,
  z as t,
  I as p,
  a3 as P,
  P as f,
} from "./CYsiv7Qj.js";
const g = n("v-picker-title"),
  y = h(
    {
      bgColor: String,
      divided: Boolean,
      landscape: Boolean,
      title: String,
      hideHeader: Boolean,
      hideTitle: Boolean,
      ...m(),
    },
    "VPicker",
  ),
  b = u()({
    name: "VPicker",
    props: y(),
    setup(e, s) {
      let { slots: a } = s;
      const { backgroundColorClasses: l, backgroundColorStyles: o } = k(
        () => e.color,
      );
      return (
        V(() => {
          const c = r.filterProps(e),
            d = !e.hideTitle && !!(e.title || a.title);
          return i(
            r,
            f(c, {
              color: e.bgColor,
              class: [
                "v-picker",
                {
                  "v-picker--divided": e.divided,
                  "v-picker--landscape": e.landscape,
                  "v-picker--with-actions": !!a.actions,
                },
                e.class,
              ],
              style: e.style,
            }),
            {
              default: () => [
                !e.hideHeader &&
                  t(
                    "div",
                    {
                      key: "header",
                      class: P(["v-picker__header-wrapper", l.value]),
                      style: p([o.value]),
                    },
                    [
                      d &&
                        i(
                          g,
                          { key: "picker-title" },
                          { default: () => [a.title?.() ?? e.title] },
                        ),
                      a.header &&
                        t("div", { class: "v-picker__header" }, [a.header()]),
                    ],
                  ),
                t("div", { class: "v-picker__body" }, [a.default?.()]),
                a.actions &&
                  i(
                    v,
                    { defaults: { VBtn: { slim: !0, variant: "text" } } },
                    {
                      default: () => [
                        t("div", { class: "v-picker__actions" }, [a.actions()]),
                      ],
                    },
                  ),
              ],
            },
          );
        }),
        {}
      );
    },
  });
export { b as V, y as m };
