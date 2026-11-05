import {
  U as g,
  V as v,
  W as b,
  B as a,
  z as l,
  I as f,
  a3 as h,
  aB as y,
  b2 as N,
  aL as I,
  s as H,
  k as m,
  aZ as R,
  b5 as z,
  ay as o,
} from "./CYsiv7Qj.js";
import {
  n as x,
  g as E,
  t as D,
  u as w,
  h as U,
  d as $,
  m as F,
  z as L,
  x as u,
} from "./B_W9U9Wp.js";
import { f as W } from "./BrCrqdgZ.js";
import { V as Z } from "./D3DeQzvF.js";
const j = v({ text: String, ...y(), ...x() }, "VToolbarTitle"),
  q = g()({
    name: "VToolbarTitle",
    props: j(),
    setup(e, s) {
      let { slots: t } = s;
      return (
        b(() => {
          const n = !!(t.default || t.text || e.text);
          return a(
            e.tag,
            { class: h(["v-toolbar-title", e.class]), style: f(e.style) },
            {
              default: () => [
                n &&
                  l("div", { class: "v-toolbar-title__placeholder" }, [
                    t.text ? t.text() : e.text,
                    t.default?.(),
                  ]),
              ],
            },
          );
        }),
        {}
      );
    },
  }),
  A = [null, "prominent", "default", "comfortable", "compact"],
  G = v(
    {
      absolute: Boolean,
      collapse: Boolean,
      collapsePosition: { type: String, default: "start" },
      color: String,
      density: {
        type: String,
        default: "default",
        validator: (e) => A.includes(e),
      },
      extended: { type: Boolean, default: null },
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...L(),
      ...y(),
      ...F(),
      ...$(),
      ...x({ tag: "header" }),
      ...z(),
    },
    "VToolbar",
  ),
  Q = g()({
    name: "VToolbar",
    props: G(),
    setup(e, s) {
      let { slots: t } = s;
      const { backgroundColorClasses: n, backgroundColorStyles: T } = E(
          () => e.color,
        ),
        { borderClasses: V } = D(e),
        { elevationClasses: k } = w(e),
        { roundedClasses: B } = U(e),
        { themeClasses: C } = N(e),
        { rtlClasses: _ } = I(),
        i = H(e.extended === null ? !!t.extension?.() : e.extended),
        d = m(() =>
          parseInt(
            Number(e.height) +
              (e.density === "prominent" ? Number(e.height) : 0) -
              (e.density === "comfortable" ? 8 : 0) -
              (e.density === "compact" ? 16 : 0),
            10,
          ),
        ),
        r = m(() =>
          i.value
            ? parseInt(
                Number(e.extensionHeight) +
                  (e.density === "prominent" ? Number(e.extensionHeight) : 0) -
                  (e.density === "comfortable" ? 4 : 0) -
                  (e.density === "compact" ? 8 : 0),
                10,
              )
            : 0,
        );
      return (
        R({ VBtn: { variant: "text" } }),
        b(() => {
          const P = !!(e.title || t.title),
            S = !!(t.image || e.image),
            c = t.extension?.();
          return (
            (i.value = e.extended === null ? !!c : e.extended),
            a(
              e.tag,
              {
                class: h([
                  "v-toolbar",
                  `v-toolbar--collapse-${e.collapsePosition}`,
                  {
                    "v-toolbar--absolute": e.absolute,
                    "v-toolbar--collapse": e.collapse,
                    "v-toolbar--flat": e.flat,
                    "v-toolbar--floating": e.floating,
                    [`v-toolbar--density-${e.density}`]: !0,
                  },
                  n.value,
                  V.value,
                  k.value,
                  B.value,
                  C.value,
                  _.value,
                  e.class,
                ]),
                style: f([T.value, e.style]),
              },
              {
                default: () => [
                  S &&
                    l("div", { key: "image", class: "v-toolbar__image" }, [
                      t.image
                        ? a(
                            u,
                            {
                              key: "image-defaults",
                              disabled: !e.image,
                              defaults: { VImg: { cover: !0, src: e.image } },
                            },
                            t.image,
                          )
                        : a(
                            Z,
                            { key: "image-img", cover: !0, src: e.image },
                            null,
                          ),
                    ]),
                  a(
                    u,
                    { defaults: { VTabs: { height: o(d.value) } } },
                    {
                      default: () => [
                        l(
                          "div",
                          {
                            class: "v-toolbar__content",
                            style: { height: o(d.value) },
                          },
                          [
                            t.prepend &&
                              l("div", { class: "v-toolbar__prepend" }, [
                                t.prepend?.(),
                              ]),
                            P &&
                              a(
                                q,
                                { key: "title", text: e.title },
                                { text: t.title },
                              ),
                            t.default?.(),
                            t.append &&
                              l("div", { class: "v-toolbar__append" }, [
                                t.append?.(),
                              ]),
                          ],
                        ),
                      ],
                    },
                  ),
                  a(
                    u,
                    { defaults: { VTabs: { height: o(r.value) } } },
                    {
                      default: () => [
                        a(W, null, {
                          default: () => [
                            i.value &&
                              l(
                                "div",
                                {
                                  class: "v-toolbar__extension",
                                  style: { height: o(r.value) },
                                },
                                [c],
                              ),
                          ],
                        }),
                      ],
                    },
                  ),
                ],
              },
            )
          );
        }),
        { contentHeight: d, extensionHeight: r }
      );
    },
  });
export { Q as V, q as a, G as m };
