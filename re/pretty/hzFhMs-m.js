import {
  U as C,
  V as k,
  aJ as y,
  bf as N,
  W as S,
  co as V,
  B as o,
  z as s,
  a2 as P,
  a4 as h,
  P as l,
  b5 as x,
  aB as T,
  _,
} from "./CYsiv7Qj.js";
import {
  g as R,
  h as w,
  e as A,
  _ as D,
  B as L,
  M as I,
  a as M,
  A as W,
  G as X,
  n as Y,
  d as $,
  a1 as z,
} from "./B_W9U9Wp.js";
const F = k(
    {
      bordered: Boolean,
      color: String,
      content: [Number, String],
      dot: Boolean,
      floating: Boolean,
      icon: _,
      inline: Boolean,
      label: { type: String, default: "$vuetify.badge" },
      max: [Number, String],
      modelValue: { type: Boolean, default: !0 },
      offsetX: [Number, String],
      offsetY: [Number, String],
      textColor: String,
      ...T(),
      ...z({ location: "top end" }),
      ...$(),
      ...Y(),
      ...x(),
      ...X({ transition: "scale-rotate-transition" }),
      ...W(),
    },
    "VBadge",
  ),
  U = C()({
    name: "VBadge",
    inheritAttrs: !1,
    props: F(),
    setup(e, t) {
      const { backgroundColorClasses: i, backgroundColorStyles: r } = R(
          () => e.color,
        ),
        { roundedClasses: d } = w(e),
        { t: u } = y(),
        { textColorClasses: c, textColorStyles: m } = A(() => e.textColor),
        { themeClasses: g } = N(),
        { locationStyles: b } = D(
          e,
          !0,
          (a) =>
            (e.floating ? (e.dot ? 2 : 4) : e.dot ? 8 : 12) +
            (["top", "bottom"].includes(a)
              ? Number(e.offsetY ?? 0)
              : ["left", "right"].includes(a)
                ? Number(e.offsetX ?? 0)
                : 0),
        ),
        { dimensionStyles: f } = L(e);
      return (
        S(() => {
          const a = Number(e.content),
            n =
              !e.max || isNaN(a)
                ? e.content
                : a <= Number(e.max)
                  ? a
                  : `${e.max}+`,
            [v, B] = V(t.attrs, [
              "aria-atomic",
              "aria-label",
              "aria-live",
              "role",
              "title",
            ]);
          return o(
            e.tag,
            l(
              {
                class: [
                  "v-badge",
                  {
                    "v-badge--bordered": e.bordered,
                    "v-badge--dot": e.dot,
                    "v-badge--floating": e.floating,
                    "v-badge--inline": e.inline,
                  },
                  e.class,
                ],
              },
              B,
              { style: e.style },
            ),
            {
              default: () => [
                s("div", { class: "v-badge__wrapper" }, [
                  t.slots.default?.(),
                  o(
                    I,
                    { transition: e.transition },
                    {
                      default: () => [
                        P(
                          s(
                            "span",
                            l(
                              {
                                class: [
                                  "v-badge__badge",
                                  g.value,
                                  i.value,
                                  d.value,
                                  c.value,
                                ],
                                style: [
                                  r.value,
                                  m.value,
                                  f.value,
                                  e.inline ? {} : b.value,
                                ],
                                "aria-atomic": "true",
                                "aria-label": u(e.label, a),
                                "aria-live": "polite",
                                role: "status",
                              },
                              v,
                            ),
                            [
                              e.dot
                                ? void 0
                                : t.slots.badge
                                  ? t.slots.badge?.()
                                  : e.icon
                                    ? o(M, { icon: e.icon }, null)
                                    : n,
                            ],
                          ),
                          [[h, e.modelValue]],
                        ),
                      ],
                    },
                  ),
                ]),
              ],
            },
          );
        }),
        {}
      );
    },
  });
export { U as V };
