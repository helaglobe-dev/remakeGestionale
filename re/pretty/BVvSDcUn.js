import { _ as W } from "./ClyIuovc.js";
import {
  E as U,
  r as d,
  G as K,
  o as F,
  J,
  y as w,
  C as o,
  z as u,
  x as z,
  K as I,
  B as a,
  N as P,
  O as j,
  M as h,
  L as l,
  D as y,
  n as G,
  u as Q,
  e as X,
  P as Y,
  A as Z,
} from "./CYsiv7Qj.js";
import { $ as B } from "./BvG7V8Ak.js";
import { V as ee } from "./MIubIMrV.js";
import { V as te, a as oe } from "./Bj0ZT2dB.js";
import { V as H } from "./BrCrqdgZ.js";
import { V as R, a as S } from "./B_W9U9Wp.js";
import { V as ae } from "./BqujDEEl.js";
import { V as se } from "./Dlfzj7mx.js";
import { u as ne } from "./LKQL6vAN.js";
import { V as le } from "./ss-1h9Hv.js";
import { V as ie, a as re, b as A, c as O } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const ue = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  de = { key: 0, class: "pb-10 pageh2" },
  pe = { key: 1, class: "pb-10 pageh2" },
  ce = { style: { display: "flex" } },
  me = {
    __name: "DialogInsModBank",
    props: { dialoginsmod: Boolean, idrec: Number },
    emits: ["close"],
    setup(q, { emit: E }) {
      const { data: T } = U(),
        C = G(),
        L = E,
        V = q,
        v = d(!1),
        m = d(!1),
        i = K("snackbar"),
        p = d(""),
        b = d([(f) => !!f || "Campo obbligatorio"]),
        _ = async () => {
          let f = { id: V.idrec, bankname: p.value };
          await B(C.public.apiBaseurl + "bank/createedit", {
            method: "POST",
            body: f,
          })
            .then(() => {
              V.idrec == 0
                ? (i.value = {
                    text: "Creazione banca completata",
                    type: "success",
                    show: !0,
                  })
                : (i.value = {
                    text: "Modifica banca completata",
                    type: "success",
                    show: !0,
                  }),
                x();
            })
            .catch((e) => {
              let s = JSON.parse(e.data).errors.title;
              console.log("catcherr", e.data),
                (i.value = { text: s, type: "danger", show: !0 });
            });
        };
      function x() {
        L("close");
      }
      const D = async () => {
        if (V.idrec > 0) {
          const { data: f } = await B(
            C.public.apiBaseurl + "bank/get/" + V.idrec,
            {
              onRequest({ request: e, options: s }) {},
              onRequestError({ request: e, options: s, error: g }) {
                console.log("Errore nella request:", g),
                  (i.value = {
                    text: "Errore: " + g,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: s, options: g }) {
                console.log(
                  "Errore nella response: " + s._data.error.messages[0],
                ),
                  (i.value = {
                    text: "Errore caricamento banca",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: s, options: g }) {
                p.value = s._data.data.name;
              },
            },
          );
        }
      };
      return (
        F(async () => {
          (v.value = !0), await D();
        }),
        (f, e) => (
          w(),
          J(
            se,
            {
              class: "modaldialog",
              onAfterLeave: x,
              modelValue: l(v),
              "onUpdate:modelValue":
                e[4] || (e[4] = (s) => (h(v) ? (v.value = s) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                u("div", ue, [
                  q.idrec == 0 ? (w(), z("h2", de, "Nuova banca")) : I("", !0),
                  q.idrec > 0
                    ? (w(), z("h2", pe, "Modifica banca"))
                    : I("", !0),
                  a(
                    ee,
                    {
                      modelValue: l(m),
                      "onUpdate:modelValue":
                        e[2] || (e[2] = (s) => (h(m) ? (m.value = s) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[3] ||
                        (e[3] = P(
                          j(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: o(() => [
                        a(te, null, {
                          default: o(() => [
                            a(
                              oe,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  a(
                                    H,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = P(
                                          (s) => s.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(p),
                                      "onUpdate:modelValue":
                                        e[1] ||
                                        (e[1] = (s) =>
                                          h(p) ? (p.value = s) : null),
                                      required: "",
                                      rules: l(b),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Nome*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
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
                    8,
                    ["modelValue"],
                  ),
                  e[7] || (e[7] = u("br", null, null, -1)),
                  u("div", ce, [
                    a(
                      R,
                      { class: "", onClick: x, color: "red" },
                      {
                        default: o(() => [
                          ...(e[5] || (e[5] = [y(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    a(ae),
                    a(
                      R,
                      { onClick: _, disabled: !l(m), color: "green" },
                      {
                        default: o(() => [
                          ...(e[6] || (e[6] = [y("Salva", -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disabled"],
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"],
          )
        )
      );
    },
  },
  fe = { class: "pl-10 pr-10" },
  ve = { class: "divcenterpage" },
  be = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  ge = ["title"],
  ye = { class: "mt-4" },
  Pe = {
    __name: "banks",
    setup(q) {
      const E = G(),
        T = Q(),
        { status: C, signIn: L, signOut: V, data: v } = U(),
        m = d([]),
        i = d(""),
        p = K("snackbar"),
        b = d(!1),
        _ = d(0),
        x = d(!0),
        D = d(!1),
        f = [
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      ne({
        title: "Banche",
        meta: [{ name: "description", content: "Banche" }],
      });
      function e(k) {
        (_.value = parseInt(k)), (b.value = !0);
      }
      function s() {
        (b.value = !1), M();
      }
      function g(k) {
        const { data: t } = B(E.public.apiBaseurl + "bank/delete/" + k, {
          onRequest({ request: r, options: c }) {},
          onRequestError({ request: r, options: c, error: n }) {
            console.log("Errore nella request:", n);
          },
          onResponseError({ request: r, response: c, options: n }) {
            p.value = {
              text: "Errore cancellazione banca",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: r, response: c, options: n }) {
            (p.value = { text: "Banca eliminata", type: "success", show: !0 }),
              M();
          },
        });
      }
      const M = () => {
        const { data: k } = B(E.public.apiBaseurl + "bank/list", {
          onRequest({ request: t, options: r }) {},
          onRequestError({ request: t, options: r, error: c }) {
            console.log("Errore nella request:", c);
          },
          onResponseError({ request: t, response: r, options: c }) {
            p.value = {
              text: "Errore caricamento banche",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: t, response: r, options: c }) {
            (m.value = r._data.data), console.log(m.value);
          },
        });
      };
      function N() {
        D.value = window.innerWidth <= 960;
      }
      return (
        F(async () => {
          v.value.role != "S"
            ? T.push("/")
            : (N(), window.addEventListener("resize", N), M());
        }),
        X(() => {
          window.removeEventListener("resize", N);
        }),
        (k, t) => {
          const r = W,
            c = me;
          return (
            w(),
            z("div", fe, [
              u("div", ve, [
                t[6] || (t[6] = u("br", null, null, -1)),
                t[7] ||
                  (t[7] = u(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Banche",
                    -1,
                  )),
                u("div", be, [
                  a(
                    R,
                    { onClick: t[0] || (t[0] = (n) => e(0)), color: "green" },
                    {
                      default: o(() => [
                        a(S, null, {
                          default: o(() => [
                            ...(t[2] || (t[2] = [y("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        t[3] || (t[3] = y("Crea Banca", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[8] ||
                  (t[8] = u("div", { style: { clear: "both" } }, null, -1)),
                a(
                  le,
                  {
                    density: "compact",
                    items: l(m),
                    headers: f,
                    search: l(i),
                    "items-per-page": 15,
                    itemsPerPageOptions: [
                      { value: 10, title: "10" },
                      { value: 15, title: "15" },
                      { value: 25, title: "25" },
                      { value: 50, title: "50" },
                      { value: -1, title: "Tutti" },
                    ],
                    itemsPerPageText: "Elementi per pagina",
                    "no-data-text": "Nessun elemento disponibile",
                    pageText: "{0}-{1} di {2}",
                  },
                  {
                    top: o(() => [
                      a(
                        H,
                        {
                          modelValue: l(i),
                          "onUpdate:modelValue":
                            t[1] ||
                            (t[1] = (n) => (h(i) ? (i.value = n) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca",
                          density: "compact",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.name": o(({ item: n }) => [
                      u("span", { title: n.id }, Z(n.name), 9, ge),
                    ]),
                    "item.actions": o(({ item: n }) => [
                      a(
                        ie,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: $ }) => [
                            a(
                              R,
                              Y(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                $,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            u("div", ye, [
                              a(
                                re,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    a(
                                      A,
                                      {
                                        onClick: ($) => e(n.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          a(
                                            S,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(t[4] ||
                                                  (t[4] = [
                                                    y("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          a(
                                            O,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(t[5] ||
                                                  (t[5] = [y("Modifica", -1)])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick"],
                                    ),
                                    a(
                                      A,
                                      { dense: "", exact: "" },
                                      {
                                        default: o(() => [
                                          a(
                                            O,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: o(() => [
                                                a(
                                                  r,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: ($) => g(n.id),
                                                    iconadelete: l(x),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare la banca " +
                                                      n.name +
                                                      "?",
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "onDelete",
                                                    "iconadelete",
                                                    "text",
                                                  ],
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024,
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
                l(b)
                  ? (w(),
                    J(
                      c,
                      { key: 0, dialoginsmod: l(b), idrec: l(_), onClose: s },
                      null,
                      8,
                      ["dialoginsmod", "idrec"],
                    ))
                  : I("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Pe as default };
