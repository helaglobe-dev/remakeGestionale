import { _ as re, V as ie } from "./z75WVF1S.js";
import {
  r as o,
  u as ue,
  E as de,
  G as me,
  o as ve,
  e as pe,
  x as I,
  J as c,
  K as V,
  z as k,
  L as N,
  C as t,
  B as l,
  n as fe,
  y as d,
  D as s,
  A as F,
  P as ce,
  a$ as ge,
  O as ye,
} from "./CYsiv7Qj.js";
import { u as Ve } from "./LKQL6vAN.js";
import { $ as H } from "./BvG7V8Ak.js";
import { V as L, a as B } from "./Bj0ZT2dB.js";
import { V as P, a as U } from "./BToCrXXm.js";
import { V as i, a as m } from "./B_W9U9Wp.js";
import { V as ke } from "./DCAzZvgN.js";
import { V as G, a as Ce, b as S, c as z } from "./CxBYvc7u.js";
import { V as we } from "./B6Tli9r0.js";
import { V as be, c as xe, d as _e } from "./sbneMOUU.js";
import "./ClyIuovc.js";
import "./BqujDEEl.js";
import "./BrCrqdgZ.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./D3DeQzvF.js";
import "./B_hTT4u_.js";
import "./B5S3s6V6.js";
import "./MIubIMrV.js";
import "./Bhgh0dC5.js";
import "./DzPBUvYZ.js";
import "./BwyU5rju.js";
import "./Cv1q1CuH.js";
import "./CCBmAzgz.js";
const Ee = { class: "pl-10 pr-10" },
  $e = { class: "pt-4 pb-4", style: { float: "right" } },
  Me = { class: "divcenterpage" },
  Te = { class: "v-event-draggable" },
  Le = ["onMousedown"],
  Be = ["innerHTML"],
  rt = {
    __name: "calendar",
    setup(Se) {
      const v = o(null),
        R = fe();
      ue();
      const { status: ze, signIn: Re, signOut: qe, data: C } = de();
      o([]), o("");
      const q = me("snackbar"),
        w = o(!1);
      o(null),
        o(0),
        o(0),
        o(!0),
        o(null),
        o([]),
        o(0),
        o(null),
        o({ code: "A", name: "Aperto" });
      const A = o(0),
        x = o([]),
        O = o([]),
        g = o(null),
        J = o(!1),
        b = o(""),
        _ = o([]);
      o([]), o([]);
      const K = o(null);
      o(null);
      const D = o(null),
        W = o(null),
        j = o(null);
      o(null), o("");
      const p = o("week"),
        Q = o({
          month: "Mese",
          week: "Settimana",
          day: "Giorno",
          "4day": "4 Days",
        }),
        f = o({}),
        X = o(null),
        E = o(!1);
      Ve({
        title: "Calendario Attività",
        meta: [{ name: "description", content: "Calendario Attività" }],
      });
      function $(n = 0) {
        n == 1 && (f.value = null), (w.value = !0);
      }
      function Y() {
        (w.value = !1), T();
      }
      function M() {
        J.value = window.innerWidth <= 960;
      }
      function Z(n) {
        (D.value = n), (W.value = n.start), (j.value = n.end);
      }
      function h(n) {
        const e = parseInt(n.color.substring(1), 16),
          r = (e >> 16) & 255,
          a = (e >> 8) & 255,
          y = (e >> 0) & 255;
        return n === K.value
          ? `rgba(${r}, ${a}, ${y}, 0.7)`
          : n === D.value
            ? `rgba(${r}, ${a}, ${y}, 0.7)`
            : n.color;
      }
      const T = async () => {
          _.value = [];
          let n = { user_id: g.value == null ? C.value.id : g.value };
          try {
            const { data: e, status: r } = await H(
              R.public.apiBaseurl + "hour/list",
              { method: "POST", body: n },
            );
            console.log("d", e),
              e.forEach((a) => {
                _.value.push({
                  name: a.description,
                  color: a.color,
                  start: a.startdate,
                  end: a.enddate,
                  id: a.id,
                });
              });
          } catch (e) {
            console.log(e);
            let r = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (q.value = { text: r, type: "danger", show: !0 });
            return;
          }
        },
        ee = async () => {
          (x.value = []), (O.value = []);
          const { data: n } = await H(R.public.apiBaseurl + "user/list", {
            onRequest({ request: e, options: r }) {},
            onRequestError({ request: e, options: r, error: a }) {
              console.log("Errore nella request:", a);
            },
            onResponseError({ request: e, response: r, options: a }) {
              q.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: r, options: a }) {
              r._data.data.forEach((u) => {
                (O.value[u.id] =
                  "[" +
                  u.firstname.substr(0, 1) +
                  u.lastname.substr(0, 1) +
                  "]"),
                  x.value.push({
                    id: u.id,
                    name: u.firstname + " " + u.lastname,
                  });
              });
            },
          });
        };
      function te(n, { date: e }) {
        (b.value = e), (p.value = "day");
      }
      function le() {
        b.value = "";
      }
      function oe() {
        v.value.prev();
      }
      function ae() {
        v.value.next();
      }
      const ne = async () => {
        await T(), A.value++;
      };
      function se(n, { event: e }) {
        console.log("EVENTMOD", e), (f.value = e), $(), n.stopPropagation();
      }
      return (
        ve(async () => {
          (g.value = C.value.id),
            await ee(),
            await T(),
            v.value.checkChange(),
            M(),
            window.addEventListener("resize", M);
        }),
        pe(() => {
          window.removeEventListener("resize", M);
        }),
        (n, e) => {
          const r = re;
          return (
            d(),
            I("div", Ee, [
              N(C).role == "S"
                ? (d(),
                  c(
                    L,
                    { key: 0, class: "mt-2" },
                    {
                      default: t(() => [
                        l(
                          B,
                          { cols: "12", md: "12" },
                          {
                            default: t(() => [
                              k("div", $e, [
                                l(
                                  i,
                                  {
                                    class: "me-4",
                                    color: "grey-darken-2",
                                    variant: "outlined",
                                    onClick: e[0] || (e[0] = (a) => $(1)),
                                  },
                                  {
                                    default: t(() => [
                                      l(m, null, {
                                        default: t(() => [
                                          ...(e[10] ||
                                            (e[10] = [s("mdi-plus", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                      e[11] ||
                                        (e[11] = s("Report mie ore ", -1)),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ))
                : V("", !0),
              N(C).role == "S"
                ? (d(),
                  c(
                    L,
                    { key: 1, class: "mt-0" },
                    {
                      default: t(() => [
                        l(
                          B,
                          { cols: "12", md: "12" },
                          {
                            default: t(() => [
                              l(
                                ke,
                                {
                                  autocomplete: "off",
                                  class: "mb-2",
                                  modelValue: g.value,
                                  "onUpdate:modelValue": [
                                    e[1] || (e[1] = (a) => (g.value = a)),
                                    e[2] || (e[2] = (a) => ne()),
                                  ],
                                  items: x.value,
                                  "item-title": "name",
                                  "item-value": "id",
                                  required: "",
                                  label: "Visualizza report come utente",
                                  variant: "outlined",
                                  "no-data-text": "Nessun risultato trovato",
                                  density: "compact",
                                },
                                null,
                                8,
                                ["modelValue", "items"],
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ))
                : V("", !0),
              k("div", Me, [
                l(
                  P,
                  { flat: "" },
                  {
                    default: t(() => [
                      l(
                        i,
                        {
                          class: "me-4",
                          color: "grey-darken-2",
                          variant: "outlined",
                          onClick: le,
                        },
                        {
                          default: t(() => [
                            ...(e[12] || (e[12] = [s(" Oggi ", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        i,
                        {
                          color: "grey-darken-2",
                          size: "small",
                          variant: "text",
                          icon: "",
                          onClick: oe,
                        },
                        {
                          default: t(() => [
                            l(
                              m,
                              { size: "small" },
                              {
                                default: t(() => [
                                  ...(e[13] ||
                                    (e[13] = [s(" mdi-chevron-left ", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        i,
                        {
                          color: "grey-darken-2",
                          size: "small",
                          variant: "text",
                          icon: "",
                          onClick: ae,
                        },
                        {
                          default: t(() => [
                            l(
                              m,
                              { size: "small" },
                              {
                                default: t(() => [
                                  ...(e[14] ||
                                    (e[14] = [s(" mdi-chevron-right ", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      v.value
                        ? (d(),
                          c(
                            U,
                            {
                              key: 0,
                              style: { "text-transform": "uppercase" },
                            },
                            {
                              default: t(() => [s(F(v.value.title), 1)]),
                              _: 1,
                            },
                          ))
                        : V("", !0),
                      l(
                        G,
                        { location: "bottom end" },
                        {
                          activator: t(({ props: a }) => [
                            l(
                              i,
                              ce(
                                { color: "grey-darken-2", variant: "outlined" },
                                a,
                              ),
                              {
                                default: t(() => [
                                  k("span", null, F(Q.value[p.value]), 1),
                                  l(
                                    m,
                                    { end: "" },
                                    {
                                      default: t(() => [
                                        ...(e[15] ||
                                          (e[15] = [s(" mdi-menu-down ", -1)])),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                              16,
                            ),
                          ]),
                          default: t(() => [
                            l(Ce, null, {
                              default: t(() => [
                                l(
                                  S,
                                  {
                                    onClick:
                                      e[3] || (e[3] = (a) => (p.value = "day")),
                                  },
                                  {
                                    default: t(() => [
                                      l(z, null, {
                                        default: t(() => [
                                          ...(e[16] ||
                                            (e[16] = [s("Giorno", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                l(
                                  S,
                                  {
                                    onClick:
                                      e[4] ||
                                      (e[4] = (a) => (p.value = "week")),
                                  },
                                  {
                                    default: t(() => [
                                      l(z, null, {
                                        default: t(() => [
                                          ...(e[17] ||
                                            (e[17] = [s("Settimana", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                l(
                                  S,
                                  {
                                    onClick:
                                      e[5] ||
                                      (e[5] = (a) => (p.value = "month")),
                                  },
                                  {
                                    default: t(() => [
                                      l(z, null, {
                                        default: t(() => [
                                          ...(e[18] ||
                                            (e[18] = [s("Mese", -1)])),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                l(
                  L,
                  { class: "fill-height mt-10" },
                  {
                    default: t(() => [
                      l(B, null, {
                        default: t(() => [
                          l(
                            we,
                            { height: "100vh" },
                            {
                              default: t(() => [
                                (d(),
                                c(
                                  ie,
                                  {
                                    ref_key: "calendar",
                                    ref: v,
                                    modelValue: b.value,
                                    "onUpdate:modelValue":
                                      e[6] || (e[6] = (a) => (b.value = a)),
                                    "event-color": h,
                                    "event-ripple": !1,
                                    events: _.value,
                                    color: "primary",
                                    weekdays: [1, 2, 3, 4, 5, 6, 0],
                                    type: p.value,
                                    "onClick:event": se,
                                    "onClick:more": te,
                                    locale: "it",
                                    key: A.value,
                                  },
                                  {
                                    event: t(
                                      ({
                                        event: a,
                                        timed: y,
                                        eventSummary: u,
                                      }) => [
                                        k("div", Te, [(d(), c(ge(u)))]),
                                        y
                                          ? (d(),
                                            I(
                                              "div",
                                              {
                                                key: 0,
                                                class: "v-event-drag-bottom",
                                                onMousedown: ye(
                                                  (Ae) => Z(a),
                                                  ["stop"],
                                                ),
                                              },
                                              null,
                                              40,
                                              Le,
                                            ))
                                          : V("", !0),
                                      ],
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue", "events", "type"],
                                )),
                                l(
                                  G,
                                  {
                                    modelValue: E.value,
                                    "onUpdate:modelValue":
                                      e[9] || (e[9] = (a) => (E.value = a)),
                                    activator: X.value,
                                    "close-on-content-click": !1,
                                    location: "end",
                                  },
                                  {
                                    default: t(() => [
                                      l(
                                        be,
                                        {
                                          color: "grey-lighten-4",
                                          "min-width": "350px",
                                          flat: "",
                                        },
                                        {
                                          default: t(() => [
                                            l(
                                              P,
                                              {
                                                color: f.value.color,
                                                dark: "",
                                              },
                                              {
                                                default: t(() => [
                                                  l(
                                                    i,
                                                    { icon: "" },
                                                    {
                                                      default: t(() => [
                                                        l(
                                                          m,
                                                          {
                                                            onClick:
                                                              e[7] ||
                                                              (e[7] = (a) =>
                                                                $()),
                                                          },
                                                          {
                                                            default: t(() => [
                                                              ...(e[19] ||
                                                                (e[19] = [
                                                                  s(
                                                                    "mdi-pencil",
                                                                    -1,
                                                                  ),
                                                                ])),
                                                            ]),
                                                            _: 1,
                                                          },
                                                        ),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  l(
                                                    U,
                                                    { innerHTML: f.value.name },
                                                    null,
                                                    8,
                                                    ["innerHTML"],
                                                  ),
                                                  l(
                                                    i,
                                                    { icon: "" },
                                                    {
                                                      default: t(() => [
                                                        l(m, null, {
                                                          default: t(() => [
                                                            ...(e[20] ||
                                                              (e[20] = [
                                                                s(
                                                                  "mdi-delete-outline",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        }),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  l(
                                                    i,
                                                    { icon: "" },
                                                    {
                                                      default: t(() => [
                                                        l(m, null, {
                                                          default: t(() => [
                                                            ...(e[21] ||
                                                              (e[21] = [
                                                                s(
                                                                  "mdi-dots-vertical",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        }),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ["color"],
                                            ),
                                            l(xe, null, {
                                              default: t(() => [
                                                k(
                                                  "span",
                                                  {
                                                    innerHTML: f.value.details,
                                                  },
                                                  null,
                                                  8,
                                                  Be,
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            l(_e, null, {
                                              default: t(() => [
                                                l(
                                                  i,
                                                  {
                                                    color: "red",
                                                    variant: "text",
                                                    onClick:
                                                      e[8] ||
                                                      (e[8] = (a) =>
                                                        (E.value = !1)),
                                                  },
                                                  {
                                                    default: t(() => [
                                                      ...(e[22] ||
                                                        (e[22] = [
                                                          s(" Chiudi ", -1),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue", "activator"],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              w.value
                ? (d(),
                  c(
                    r,
                    {
                      key: 2,
                      dialoginsmod: w.value,
                      attivita: f.value,
                      onClose: Y,
                    },
                    null,
                    8,
                    ["dialoginsmod", "attivita"],
                  ))
                : V("", !0),
            ])
          );
        }
      );
    },
  };
export { rt as default };
