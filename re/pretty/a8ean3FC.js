import { _ as ee } from "./ClyIuovc.js";
import {
  E as J,
  r as n,
  G as H,
  o as W,
  J as j,
  y as q,
  C as o,
  z as a,
  x as M,
  K as T,
  B as s,
  N as I,
  O as te,
  M as h,
  L as r,
  D as u,
  n as Q,
  u as oe,
  e as se,
  P as le,
  A as K,
} from "./CYsiv7Qj.js";
import { $ as _ } from "./BvG7V8Ak.js";
import { V as ie } from "./MIubIMrV.js";
import { V as re, a as O } from "./Bj0ZT2dB.js";
import { V as L } from "./BrCrqdgZ.js";
import { V as x, a as P } from "./B_W9U9Wp.js";
import { V as ne } from "./BqujDEEl.js";
import { V as ae } from "./Dlfzj7mx.js";
import { u as ue } from "./LKQL6vAN.js";
import { V as de } from "./ss-1h9Hv.js";
import { V as pe, a as me, b as F, c as G } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const fe = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  ce = { key: 0, class: "pb-10 pageh2" },
  ve = { key: 1, class: "pb-10 pageh2" },
  ge = { style: { display: "flex" } },
  ye = {
    __name: "DialogInsModUserprofile",
    props: { dialoginsmod: Boolean, idrec: Number },
    emits: ["close"],
    setup(k, { emit: C }) {
      const { data: E } = J(),
        $ = Q(),
        S = C,
        R = k,
        v = n(!1),
        c = n(!1),
        d = H("snackbar"),
        p = n({ id: 0 }),
        g = n([(y) => !!y || "Campo obbligatorio"]),
        B = async () => {
          let y = { Userprofile: p.value };
          await _($.public.apiBaseurl + "userprofile/createedit", {
            method: "POST",
            body: y,
          })
            .then(() => {
              R.idrec == 0
                ? (d.value = {
                    text: "Creazione profilo utente completata",
                    type: "success",
                    show: !0,
                  })
                : (d.value = {
                    text: "Modifica profilo utente completata",
                    type: "success",
                    show: !0,
                  }),
                V();
            })
            .catch((t) => {
              let l = JSON.parse(t.data).errors.title;
              console.log("catcherr", t.data),
                (d.value = { text: l, type: "danger", show: !0 });
            });
        };
      function V() {
        S("close");
      }
      const D = async () => {
        if (R.idrec > 0) {
          const { data: y } = await _(
            $.public.apiBaseurl + "userprofile/get/" + R.idrec,
            {
              onRequest({ request: t, options: l }) {},
              onRequestError({ request: t, options: l, error: b }) {
                console.log("Errore nella request:", b),
                  (d.value = {
                    text: "Errore: " + b,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: t, response: l, options: b }) {
                console.log(
                  "Errore nella response: " + l._data.error.messages[0],
                ),
                  (d.value = {
                    text: "Errore caricamento profilo utente",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: t, response: l, options: b }) {
                p.value = l._data.data;
              },
            },
          );
        }
      };
      return (
        W(async () => {
          (v.value = !0), await D();
        }),
        (y, t) => (
          q(),
          j(
            ae,
            {
              class: "modaldialog",
              onAfterLeave: V,
              modelValue: r(v),
              "onUpdate:modelValue":
                t[6] || (t[6] = (l) => (h(v) ? (v.value = l) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                a("div", fe, [
                  k.idrec == 0
                    ? (q(), M("h2", ce, "Nuovo profilo utente"))
                    : T("", !0),
                  k.idrec > 0
                    ? (q(), M("h2", ve, "Modifica profilo utente"))
                    : T("", !0),
                  s(
                    ie,
                    {
                      modelValue: r(c),
                      "onUpdate:modelValue":
                        t[4] || (t[4] = (l) => (h(c) ? (c.value = l) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        t[5] ||
                        (t[5] = I(
                          te(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: o(() => [
                        s(re, null, {
                          default: o(() => [
                            s(
                              O,
                              { cols: "12", sm: "12" },
                              {
                                default: o(() => [
                                  s(
                                    L,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        t[0] ||
                                        (t[0] = I(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: r(p).profilename,
                                      "onUpdate:modelValue":
                                        t[1] ||
                                        (t[1] = (l) => (r(p).profilename = l)),
                                      required: "",
                                      rules: r(g),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome profilo*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            s(
                              O,
                              { cols: "12", sm: "12" },
                              {
                                default: o(() => [
                                  s(
                                    L,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        t[2] ||
                                        (t[2] = I(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: r(p).code,
                                      "onUpdate:modelValue":
                                        t[3] || (t[3] = (l) => (r(p).code = l)),
                                      required: "",
                                      rules: r(g),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Codice profilo*",
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
                  t[9] || (t[9] = a("br", null, null, -1)),
                  a("div", ge, [
                    s(
                      x,
                      { class: "", onClick: V, color: "red" },
                      {
                        default: o(() => [
                          ...(t[7] || (t[7] = [u(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    s(ne),
                    s(
                      x,
                      { onClick: B, disabled: !r(c), color: "green" },
                      {
                        default: o(() => [
                          ...(t[8] || (t[8] = [u("Salva", -1)])),
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
  Ve = { class: "pl-10 pr-10" },
  be = { class: "divcenterpage" },
  xe = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  we = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  qe = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  ke = ["title"],
  Ce = { class: "mt-4" },
  Fe = {
    __name: "userprofiles",
    setup(k) {
      const C = Q(),
        E = oe(),
        { status: $, signIn: S, signOut: R, data: v } = J(),
        c = n([]),
        d = n(""),
        p = H("snackbar"),
        g = n(!1),
        B = n(0),
        V = n(0),
        D = n(!0);
      n(""), n(!1);
      const y = n(!1),
        t = [
          { title: "Nome", key: "profilename", sortable: !0, align: "left" },
          { title: "Codice", key: "code", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      ue({
        title: "Profili professionali",
        meta: [{ name: "description", content: "Profili professionali" }],
      });
      function l() {
        E.push("/upprices");
      }
      function b() {
        E.push("/upcosts");
      }
      function A(w) {
        (V.value = parseInt(w)), (g.value = !0);
      }
      function X() {
        (g.value = !1), N();
      }
      function Y(w) {
        const { data: e } = _(C.public.apiBaseurl + "userprofile/delete/" + w, {
          onRequest({ request: m, options: f }) {},
          onRequestError({ request: m, options: f, error: i }) {
            console.log("Errore nella request:", i);
          },
          onResponseError({ request: m, response: f, options: i }) {
            p.value = {
              text: "Errore cancellazione profilo utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: m, response: f, options: i }) {
            (p.value = {
              text: "Profilo utente eliminato",
              type: "success",
              show: !0,
            }),
              N();
          },
        });
      }
      const N = () => {
          c.value = [];
          const { data: w } = _(C.public.apiBaseurl + "userprofile/list", {
            onRequest({ request: e, options: m }) {},
            onRequestError({ request: e, options: m, error: f }) {
              console.log("Errore nella request:", f);
            },
            onResponseError({ request: e, response: m, options: f }) {
              p.value = {
                text: "Errore caricamento profili professionali",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: m, options: f }) {
              c.value = m._data.data;
            },
          });
        },
        Z = () => {
          B.value = v.value.id;
        };
      function U() {
        y.value = window.innerWidth <= 960;
      }
      return (
        W(async () => {
          v.value.role != "S"
            ? E.push("/")
            : (U(), window.addEventListener("resize", U), Z(), N());
        }),
        se(() => {
          window.removeEventListener("resize", U);
        }),
        (w, e) => {
          const m = ee,
            f = ye;
          return (
            q(),
            M("div", Ve, [
              a("div", be, [
                e[12] || (e[12] = a("br", null, null, -1)),
                e[13] ||
                  (e[13] = a(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Profili Professionali",
                    -1,
                  )),
                a("div", xe, [
                  s(
                    x,
                    { onClick: e[0] || (e[0] = (i) => l()) },
                    {
                      default: o(() => [
                        s(P, null, {
                          default: o(() => [
                            ...(e[4] || (e[4] = [u("mdi-currency-eur", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[5] || (e[5] = u("Prezzi orari", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                a("div", we, [
                  s(
                    x,
                    { onClick: e[1] || (e[1] = (i) => b()) },
                    {
                      default: o(() => [
                        s(P, null, {
                          default: o(() => [
                            ...(e[6] || (e[6] = [u("mdi-currency-eur", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[7] || (e[7] = u("Costi orari", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                a("div", qe, [
                  s(
                    x,
                    { color: "green", onClick: e[2] || (e[2] = (i) => A(0)) },
                    {
                      default: o(() => [
                        s(P, null, {
                          default: o(() => [
                            ...(e[8] || (e[8] = [u("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[9] || (e[9] = u("Crea profilo utente", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[14] ||
                  (e[14] = a("div", { style: { clear: "both" } }, null, -1)),
                s(
                  de,
                  {
                    density: "compact",
                    items: r(c),
                    headers: t,
                    search: r(d),
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
                      s(
                        L,
                        {
                          modelValue: r(d),
                          "onUpdate:modelValue":
                            e[3] ||
                            (e[3] = (i) => (h(d) ? (d.value = i) : null)),
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
                    "item.profilename": o(({ item: i }) => [
                      a("span", { title: i.id }, K(i.profilename), 9, ke),
                    ]),
                    "item.price": o(({ item: i }) => [
                      u(
                        K(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(i.price),
                        ),
                        1,
                      ),
                    ]),
                    "item.actions": o(({ item: i }) => [
                      s(
                        pe,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: z }) => [
                            s(
                              x,
                              le(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                z,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            a("div", Ce, [
                              s(
                                me,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    s(
                                      F,
                                      {
                                        onClick: (z) => A(i.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          s(
                                            P,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(e[10] ||
                                                  (e[10] = [
                                                    u("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          s(
                                            G,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(e[11] ||
                                                  (e[11] = [
                                                    u("Modifica", -1),
                                                  ])),
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
                                    s(
                                      F,
                                      { dense: "", exact: "" },
                                      {
                                        default: o(() => [
                                          s(
                                            G,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: o(() => [
                                                s(
                                                  m,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (z) => Y(i.id),
                                                    iconadelete: r(D),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare il profilo professionale " +
                                                      i.profilename +
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
                r(g)
                  ? (q(),
                    j(
                      f,
                      { key: 0, dialoginsmod: r(g), idrec: r(V), onClose: X },
                      null,
                      8,
                      ["dialoginsmod", "idrec"],
                    ))
                  : T("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Fe as default };
