import {
  U as c,
  V as r,
  aZ as Q,
  W as o,
  B as n,
  I as b,
  a3 as f,
  aB as u,
  z as d,
  Q as P,
  A as S,
  _ as g,
  b2 as U,
  s as W,
  as as Z,
  b5 as $,
  a2 as G,
  P as X,
} from "./CYsiv7Qj.js";
import {
  n as m,
  a as h,
  x as I,
  r as T,
  R as x,
  t as Y,
  v as ee,
  q as ae,
  B as te,
  u as ne,
  F as se,
  _ as le,
  $ as de,
  h as ie,
  J as ce,
  y as re,
  K as oe,
  d as ue,
  a0 as me,
  a1 as ve,
  E as ye,
  m as ge,
  A as be,
  z as fe,
  w as ke,
  L as Ce,
} from "./B_W9U9Wp.js";
import { k as Ve } from "./BrCrqdgZ.js";
import { b as B, V as pe } from "./D3DeQzvF.js";
const Ie = r({ ...u(), ...m() }, "VCardActions"),
  Ae = c()({
    name: "VCardActions",
    props: Ie(),
    setup(e, s) {
      let { slots: t } = s;
      return (
        Q({ VBtn: { slim: !0, variant: "text" } }),
        o(() =>
          n(
            e.tag,
            { class: f(["v-card-actions", e.class]), style: b(e.style) },
            t,
          ),
        ),
        {}
      );
    },
  }),
  Pe = r({ opacity: [Number, String], ...u(), ...m() }, "VCardSubtitle"),
  Se = c()({
    name: "VCardSubtitle",
    props: Pe(),
    setup(e, s) {
      let { slots: t } = s;
      return (
        o(() =>
          n(
            e.tag,
            {
              class: f(["v-card-subtitle", e.class]),
              style: b([{ "--v-card-subtitle-opacity": e.opacity }, e.style]),
            },
            t,
          ),
        ),
        {}
      );
    },
  }),
  he = Ve("v-card-title"),
  xe = r(
    {
      appendAvatar: String,
      appendIcon: g,
      prependAvatar: String,
      prependIcon: g,
      subtitle: { type: [String, Number, Boolean], default: void 0 },
      title: { type: [String, Number, Boolean], default: void 0 },
      ...u(),
      ...T(),
      ...m(),
    },
    "VCardItem",
  ),
  Be = c()({
    name: "VCardItem",
    props: xe(),
    setup(e, s) {
      let { slots: t } = s;
      return (
        o(() => {
          const a = !!(e.prependAvatar || e.prependIcon),
            k = !!(a || t.prepend),
            v = !!(e.appendAvatar || e.appendIcon),
            C = !!(v || t.append),
            V = !!(e.title != null || t.title),
            p = !!(e.subtitle != null || t.subtitle);
          return n(
            e.tag,
            { class: f(["v-card-item", e.class]), style: b(e.style) },
            {
              default: () => [
                k &&
                  d("div", { key: "prepend", class: "v-card-item__prepend" }, [
                    t.prepend
                      ? n(
                          I,
                          {
                            key: "prepend-defaults",
                            disabled: !a,
                            defaults: {
                              VAvatar: {
                                density: e.density,
                                image: e.prependAvatar,
                              },
                              VIcon: {
                                density: e.density,
                                icon: e.prependIcon,
                              },
                            },
                          },
                          t.prepend,
                        )
                      : d(P, null, [
                          e.prependAvatar &&
                            n(
                              B,
                              {
                                key: "prepend-avatar",
                                density: e.density,
                                image: e.prependAvatar,
                              },
                              null,
                            ),
                          e.prependIcon &&
                            n(
                              h,
                              {
                                key: "prepend-icon",
                                density: e.density,
                                icon: e.prependIcon,
                              },
                              null,
                            ),
                        ]),
                  ]),
                d("div", { class: "v-card-item__content" }, [
                  V &&
                    n(
                      he,
                      { key: "title" },
                      { default: () => [t.title?.() ?? S(e.title)] },
                    ),
                  p &&
                    n(
                      Se,
                      { key: "subtitle" },
                      { default: () => [t.subtitle?.() ?? S(e.subtitle)] },
                    ),
                  t.default?.(),
                ]),
                C &&
                  d("div", { key: "append", class: "v-card-item__append" }, [
                    t.append
                      ? n(
                          I,
                          {
                            key: "append-defaults",
                            disabled: !v,
                            defaults: {
                              VAvatar: {
                                density: e.density,
                                image: e.appendAvatar,
                              },
                              VIcon: { density: e.density, icon: e.appendIcon },
                            },
                          },
                          t.append,
                        )
                      : d(P, null, [
                          e.appendIcon &&
                            n(
                              h,
                              {
                                key: "append-icon",
                                density: e.density,
                                icon: e.appendIcon,
                              },
                              null,
                            ),
                          e.appendAvatar &&
                            n(
                              B,
                              {
                                key: "append-avatar",
                                density: e.density,
                                image: e.appendAvatar,
                              },
                              null,
                            ),
                        ]),
                  ]),
              ],
            },
          );
        }),
        {}
      );
    },
  }),
  Te = r({ opacity: [Number, String], ...u(), ...m() }, "VCardText"),
  _e = c()({
    name: "VCardText",
    props: Te(),
    setup(e, s) {
      let { slots: t } = s;
      return (
        o(() =>
          n(
            e.tag,
            {
              class: f(["v-card-text", e.class]),
              style: b([{ "--v-card-text-opacity": e.opacity }, e.style]),
            },
            t,
          ),
        ),
        {}
      );
    },
  }),
  Le = r(
    {
      appendAvatar: String,
      appendIcon: g,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: g,
      ripple: { type: [Boolean, Object], default: !0 },
      subtitle: { type: [String, Number, Boolean], default: void 0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      title: { type: [String, Number, Boolean], default: void 0 },
      ...fe(),
      ...u(),
      ...T(),
      ...be(),
      ...ge(),
      ...ye(),
      ...ve(),
      ...me(),
      ...ue(),
      ...oe(),
      ...m(),
      ...$(),
      ...re({ variant: "elevated" }),
    },
    "VCard",
  ),
  ze = c()({
    name: "VCard",
    directives: { vRipple: x },
    props: Le(),
    setup(e, s) {
      let { attrs: t, slots: a } = s;
      const { themeClasses: k } = U(e),
        { borderClasses: v } = Y(e),
        { colorClasses: C, colorStyles: V, variantClasses: p } = ee(e),
        { densityClasses: _ } = ae(e),
        { dimensionStyles: L } = te(e),
        { elevationClasses: N } = ne(e),
        { loaderClasses: D } = se(e),
        { locationStyles: R } = le(e),
        { positionClasses: w } = de(e),
        { roundedClasses: z } = ie(e),
        y = ce(e, t),
        A = W(void 0);
      return (
        Z(
          () => e.loading,
          (i, l) => {
            A.value =
              !i && typeof l == "string"
                ? l
                : typeof i == "boolean"
                  ? void 0
                  : i;
          },
          { immediate: !0 },
        ),
        o(() => {
          const i = e.link !== !1 && y.isLink.value,
            l = !e.disabled && e.link !== !1 && (e.link || y.isClickable.value),
            F = i ? "a" : e.tag,
            E = !!(a.title || e.title != null),
            M = !!(a.subtitle || e.subtitle != null),
            O = E || M,
            j = !!(a.append || e.appendAvatar || e.appendIcon),
            q = !!(a.prepend || e.prependAvatar || e.prependIcon),
            H = !!(a.image || e.image),
            J = O || q || j,
            K = !!(a.text || e.text != null);
          return G(
            n(
              F,
              X(y.linkProps, {
                class: [
                  "v-card",
                  {
                    "v-card--disabled": e.disabled,
                    "v-card--flat": e.flat,
                    "v-card--hover": e.hover && !(e.disabled || e.flat),
                    "v-card--link": l,
                  },
                  k.value,
                  v.value,
                  C.value,
                  _.value,
                  N.value,
                  D.value,
                  w.value,
                  z.value,
                  p.value,
                  e.class,
                ],
                style: [V.value, L.value, R.value, e.style],
                onClick: l && y.navigate,
                tabindex: e.disabled ? -1 : void 0,
              }),
              {
                default: () => [
                  H &&
                    d("div", { key: "image", class: "v-card__image" }, [
                      a.image
                        ? n(
                            I,
                            {
                              key: "image-defaults",
                              disabled: !e.image,
                              defaults: { VImg: { cover: !0, src: e.image } },
                            },
                            a.image,
                          )
                        : n(
                            pe,
                            { key: "image-img", cover: !0, src: e.image },
                            null,
                          ),
                    ]),
                  n(
                    Ce,
                    { name: "v-card", active: !!e.loading, color: A.value },
                    { default: a.loader },
                  ),
                  J &&
                    n(
                      Be,
                      {
                        key: "item",
                        prependAvatar: e.prependAvatar,
                        prependIcon: e.prependIcon,
                        title: e.title,
                        subtitle: e.subtitle,
                        appendAvatar: e.appendAvatar,
                        appendIcon: e.appendIcon,
                      },
                      {
                        default: a.item,
                        prepend: a.prepend,
                        title: a.title,
                        subtitle: a.subtitle,
                        append: a.append,
                      },
                    ),
                  K &&
                    n(
                      _e,
                      { key: "text" },
                      { default: () => [a.text?.() ?? e.text] },
                    ),
                  a.default?.(),
                  a.actions && n(Ae, null, { default: a.actions }),
                  ke(l, "v-card"),
                ],
              },
            ),
            [[x, l && e.ripple]],
          );
        }),
        {}
      );
    },
  });
export { ze as V, he as a, Se as b, _e as c, Ae as d };
