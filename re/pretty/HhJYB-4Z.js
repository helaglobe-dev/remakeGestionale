import { _ as ae } from "./ClyIuovc.js";
import {
  E as Q,
  r as l,
  G as X,
  o as ee,
  J as _,
  y as k,
  C as n,
  z as m,
  x as H,
  K as B,
  B as s,
  N as se,
  O as re,
  M as v,
  L as a,
  I as Z,
  A as te,
  S as ne,
  T as ie,
  D as G,
  n as oe,
  u as ue,
  k as de,
  e as ce,
} from "./CYsiv7Qj.js";
import { $ } from "./BvG7V8Ak.js";
import { V as me } from "./MIubIMrV.js";
import { V as pe, a as A } from "./Bj0ZT2dB.js";
import { V as L } from "./DCAzZvgN.js";
import { V as ve } from "./CZzf1ihi.js";
import { V as P } from "./BrCrqdgZ.js";
import { V as ye } from "./B51noTYL.js";
import { b as fe } from "./CxBYvc7u.js";
import { V as j, a as W } from "./B_W9U9Wp.js";
import { V as ge } from "./BqujDEEl.js";
import { V as be } from "./Dlfzj7mx.js";
import { u as Ve } from "./LKQL6vAN.js";
import { V as we } from "./ss-1h9Hv.js";
import { V as he } from "./hzFhMs-m.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./Cv1q1CuH.js";
import "./fKsYyVgl.js";
import "./CCBmAzgz.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const xe = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "500px",
      "max-width": "800px",
      margin: "auto",
      overflow: "auto",
    },
  },
  ke = { key: 0, class: "pb-10 pageh2" },
  Ce = { key: 1, class: "pb-10 pageh2" },
  Ee = { class: "d-flex align-center ga-2" },
  qe = { style: { display: "flex" } },
  Me = {
    __name: "DialogInsModHoliday",
    props: { dialoginsmod: Boolean, idrec: Number },
    emits: ["close"],
    setup(J, { emit: F }) {
      const { data: K } = Q(),
        I = oe(),
        Y = F,
        f = J,
        y = l(!1),
        w = l("F"),
        D = [
          { name: "Festività", id: "F" },
          { name: "Chiusura", id: "C" },
          { name: "Meeting", id: "M" },
          { name: "Formazione", id: "Z" },
        ],
        h = l(null),
        g = l(null),
        q = l(null),
        x = l(null),
        z = l(null),
        b = l(!1),
        N = l(!1),
        C = X("snackbar"),
        U = l([(i) => !!i || "Campo obbligatorio"]),
        M = l([]),
        O = async () => {
          let i = {};
          f.idrec > 0 && (i.id = f.idrec),
            (i.color = h.value.color),
            (i.type = w.value),
            (i.ricorrente = y.value == !0 ? 1 : 0),
            (i.giornomese = q.value),
            (i.day = x.value),
            (i.daya = z.value),
            (i.description = g.value);
          let e = { Holiday: i };
          await $(I.public.apiBaseurl + "holiday/createedit", {
            method: "POST",
            body: e,
          })
            .then(() => {
              f.idrec == 0
                ? (C.value = {
                    text: "Creazione completata",
                    type: "success",
                    show: !0,
                  })
                : (C.value = {
                    text: "Modifica completata",
                    type: "success",
                    show: !0,
                  }),
                S();
            })
            .catch((t) => {
              let u = JSON.parse(t.data).errors.title;
              console.log("catcherr", t.data),
                (C.value = { text: u, type: "danger", show: !0 });
            });
        };
      function S() {
        Y("close");
      }
      const R = async () => {
          M.value = [];
          const { data: i } = await $(
            I.public.apiBaseurl + "projectcolor/list",
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: u }) {
                console.log("Errore nella request:", u);
              },
              onResponseError({ request: e, response: t, options: u }) {
                C.value = {
                  text: "Errore caricamento colori",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: t, options: u }) {
                t._data.data.forEach((d) => {
                  let p = d.Projectcolor;
                  M.value.push({
                    name: p.id,
                    value: p.name != "" && p.name != null ? p.name : p.color,
                    color: p.color,
                  });
                });
              },
            },
          );
        },
        T = async () => {
          if (f.idrec > 0) {
            const { data: i } = await $(
              I.public.apiBaseurl + "holiday/get/" + f.idrec,
              {
                onRequest({ request: e, options: t }) {},
                onRequestError({ request: e, options: t, error: u }) {
                  console.log("Errore nella request:", u),
                    (C.value = {
                      text: "Errore: " + u,
                      type: "danger",
                      show: !0,
                    });
                },
                onResponseError({ request: e, response: t, options: u }) {
                  console.log(
                    "Errore nella response: " + t._data.error.messages[0],
                  ),
                    (C.value = {
                      text: "Errore caricamento festività/chiusura",
                      type: "danger",
                      show: !0,
                    });
                },
                onResponse({ request: e, response: t, options: u }) {
                  let d = t._data.data;
                  d.day.substr(0, 4) == "0000"
                    ? ((y.value = !0),
                      (q.value = d.day.substr(8, 2) + "-" + d.day.substr(5, 2)))
                    : (x.value =
                        d.day.substr(8, 2) +
                        "-" +
                        d.day.substr(5, 2) +
                        "-" +
                        d.day.substr(0, 4)),
                    (w.value = d.type),
                    (h.value = d.color
                      ? M.value.find((p) => p.color === d.color)
                      : M.value[0]),
                    (g.value = d.description);
                },
              },
            );
          }
        };
      return (
        ee(async () => {
          (b.value = !0), await R(), await T();
        }),
        (i, e) => (
          k(),
          _(
            be,
            {
              class: "modaldialog",
              onAfterLeave: S,
              modelValue: a(b),
              "onUpdate:modelValue":
                e[9] || (e[9] = (t) => (v(b) ? (b.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: n(() => [
                m("div", xe, [
                  f.idrec == 0 ? (k(), H("h2", ke, "Nuovo evento")) : B("", !0),
                  f.idrec > 0
                    ? (k(), H("h2", Ce, "Modifica evento"))
                    : B("", !0),
                  s(
                    me,
                    {
                      modelValue: a(N),
                      "onUpdate:modelValue":
                        e[7] || (e[7] = (t) => (v(N) ? (N.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[8] ||
                        (e[8] = se(
                          re(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: n(() => [
                        s(pe, null, {
                          default: n(() => [
                            s(
                              A,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  s(
                                    L,
                                    {
                                      class: "",
                                      modelValue: a(w),
                                      "onUpdate:modelValue":
                                        e[0] ||
                                        (e[0] = (t) =>
                                          v(w) ? (w.value = t) : null),
                                      items: D,
                                      "item-title": "name",
                                      "item-value": "id",
                                      required: "",
                                      "hide-details": "",
                                      rules: a(U),
                                      label: "Tipo",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      "no-data-text":
                                        "Nessun risultato trovato",
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
                              A,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  s(
                                    ve,
                                    {
                                      color: "green",
                                      baseColor: "red",
                                      modelValue: a(y),
                                      "onUpdate:modelValue":
                                        e[1] ||
                                        (e[1] = (t) =>
                                          v(y) ? (y.value = t) : null),
                                      label: "Ricorrente",
                                      "hide-details": "",
                                      inset: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(y) == !0
                              ? (k(),
                                _(
                                  A,
                                  { key: 0, cols: "12", sm: "12" },
                                  {
                                    default: n(() => [
                                      s(
                                        P,
                                        {
                                          class: "mb-2",
                                          modelValue: a(q),
                                          "onUpdate:modelValue":
                                            e[2] ||
                                            (e[2] = (t) =>
                                              v(q) ? (q.value = t) : null),
                                          variant: "outlined",
                                          rules: a(U),
                                          label: "Giorno-Mese*",
                                          hint: "GG-MM",
                                          "hide-details": "auto",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : B("", !0),
                            a(y) == !1
                              ? (k(),
                                _(
                                  A,
                                  { key: 1, cols: "12", sm: "12" },
                                  {
                                    default: n(() => [
                                      s(
                                        P,
                                        {
                                          class: "mb-2",
                                          modelValue: a(x),
                                          "onUpdate:modelValue":
                                            e[3] ||
                                            (e[3] = (t) =>
                                              v(x) ? (x.value = t) : null),
                                          variant: "outlined",
                                          rules: a(U),
                                          label:
                                            f.idrec == 0
                                              ? "Da Giorno*"
                                              : "Giorno*",
                                          hint: "GG-MM-AAAA",
                                          "hide-details": "auto",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules", "label"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : B("", !0),
                            f.idrec == 0 && a(y) == !1
                              ? (k(),
                                _(
                                  A,
                                  { key: 2, cols: "12", sm: "12" },
                                  {
                                    default: n(() => [
                                      s(
                                        P,
                                        {
                                          class: "mb-2",
                                          modelValue: a(z),
                                          "onUpdate:modelValue":
                                            e[4] ||
                                            (e[4] = (t) =>
                                              v(z) ? (z.value = t) : null),
                                          variant: "outlined",
                                          label: "A Giorno (se più giorni)",
                                          hint: "GG-MM-AAAA",
                                          "hide-details": "auto",
                                        },
                                        null,
                                        8,
                                        ["modelValue"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : B("", !0),
                            s(
                              A,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  s(
                                    ye,
                                    {
                                      class: "mb-2",
                                      modelValue: a(g),
                                      "onUpdate:modelValue":
                                        e[5] ||
                                        (e[5] = (t) =>
                                          v(g) ? (g.value = t) : null),
                                      variant: "outlined",
                                      rules: a(U),
                                      label: "Descrizione*",
                                      "hide-details": "auto",
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
                              A,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  s(
                                    L,
                                    {
                                      autocomplete: "off",
                                      modelValue: a(h),
                                      "onUpdate:modelValue":
                                        e[6] ||
                                        (e[6] = (t) =>
                                          v(h) ? (h.value = t) : null),
                                      items: a(M),
                                      "item-title": "value",
                                      "item-value": "name",
                                      label: "Colore",
                                      variant: "outlined",
                                      density: "compact",
                                      "return-object": "",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                    },
                                    {
                                      item: n(({ props: t, item: u }) => [
                                        s(
                                          fe,
                                          ne(ie(t)),
                                          {
                                            prepend: n(() => [
                                              m(
                                                "div",
                                                {
                                                  class: "color-box",
                                                  style: Z({
                                                    backgroundColor:
                                                      u.raw.color,
                                                  }),
                                                },
                                                null,
                                                4,
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1040,
                                        ),
                                      ]),
                                      selection: n(({ item: t }) => [
                                        m("div", Ee, [
                                          m(
                                            "div",
                                            {
                                              class: "color-box",
                                              style: Z({
                                                backgroundColor: t.raw.color,
                                              }),
                                            },
                                            null,
                                            4,
                                          ),
                                          m("span", null, te(t.raw.value), 1),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue", "items"],
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
                  e[12] || (e[12] = m("br", null, null, -1)),
                  m("div", qe, [
                    s(
                      j,
                      { class: "", onClick: S, color: "red" },
                      {
                        default: n(() => [
                          ...(e[10] || (e[10] = [G(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    s(ge),
                    s(
                      j,
                      { onClick: O, disabled: !a(N), color: "green" },
                      {
                        default: n(() => [
                          ...(e[11] || (e[11] = [G("Salva", -1)])),
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
  Re = { class: "pl-10 pr-10" },
  Ae = { class: "divcenterpage" },
  Be = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  De = { style: { display: "inline", float: "right" } },
  tt = {
    __name: "holidays",
    setup(J) {
      const F = oe(),
        K = ue(),
        { status: I, signIn: Y, signOut: f, data: y } = Q(),
        w = l([]),
        D = l(""),
        h = X("snackbar"),
        g = l(!1),
        q = l(0),
        x = l(0);
      l(null), l([]), l([]);
      const z = l(!0),
        b = l(new Date().getFullYear()),
        N = de(() => {
          const E = new Date().getFullYear();
          return Array.from({ length: E + 5 - 2023 + 1 }, (o, V) => 2023 + V);
        });
      l([]);
      const C = l([]),
        U = l([]),
        M = l(!1);
      l(null);
      const O = l(null);
      l(null);
      const S = [
          { title: "Giorno", key: "day", sortable: !0, align: "left" },
          { title: "Anno", key: "year", sortable: !0, align: "left" },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          { title: "Colore", key: "color", sortable: !0, align: "left" },
          {
            title: "Descrizione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        R = l([]);
      Ve({
        title: "Eventi in calendario",
        meta: [{ name: "description", content: "Eventi in calendario" }],
      });
      const T = l([{ key: "day", order: "asc" }]);
      function i(E) {
        (x.value = parseInt(E)), (g.value = !0);
      }
      function e() {
        (g.value = !1), (x.value = 0), u();
      }
      function t(E) {
        const { data: o } = $(F.public.apiBaseurl + "holiday/delete/" + E, {
          onRequest({ request: V, options: c }) {},
          onRequestError({ request: V, options: c, error: r }) {
            console.log("Errore nella request:", r);
          },
          onResponseError({ request: V, response: c, options: r }) {
            h.value = {
              text: "Errore cancellazione",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: V, response: c, options: r }) {
            (h.value = {
              text: "Evento cancellato",
              type: "success",
              show: !0,
            }),
              u();
          },
        });
      }
      const u = async () => {
          (w.value = []), (C.value = []), (U.value = []), (O.value = b.value);
          let E = { year: b.value };
          try {
            const { data: o, status: V } = await $(
              F.public.apiBaseurl + "holiday/list",
              { method: "POST", body: E },
            );
            o.forEach((c) => {
              w.value.push({
                id: c.id,
                day: c.day.substr(5, 5),
                description: c.description,
                year: c.day.substr(0, 4) != "0000" ? c.day.substr(0, 4) : "-",
                type: R.value[c.type],
                color: c.color,
              });
            });
          } catch (o) {
            console.log(o);
            let V = JSON.parse(o.data).errors.title;
            console.log("catcherr", o.data),
              (h.value = { text: V, type: "danger", show: !0 });
            return;
          }
        },
        d = () => {
          q.value = y.value.id;
        };
      function p() {
        M.value = window.innerWidth <= 960;
      }
      return (
        ee(async () => {
          y.value.role != "S"
            ? K.push("/")
            : ((R.value.C = "Chiusura"),
              (R.value.F = "Festività"),
              (R.value.M = "Meeting"),
              (R.value.Z = "Formazione"),
              p(),
              window.addEventListener("resize", p),
              d(),
              u());
        }),
        ce(() => {
          window.removeEventListener("resize", p);
        }),
        (E, o) => {
          const V = ae,
            c = Me;
          return (
            k(),
            H("div", Re, [
              m("div", Ae, [
                o[8] || (o[8] = m("br", null, null, -1)),
                o[9] ||
                  (o[9] = m(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Eventi in calendario",
                    -1,
                  )),
                m("div", Be, [
                  s(
                    j,
                    { onClick: o[0] || (o[0] = (r) => i(0)), color: "green" },
                    {
                      default: n(() => [
                        s(W, null, {
                          default: n(() => [
                            ...(o[5] || (o[5] = [G("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        o[6] || (o[6] = G("Nuovo evento", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                m("div", De, [
                  s(
                    L,
                    {
                      autocomplete: "off",
                      class: "ma-2 mt-0 mr-4",
                      style: { width: "130px" },
                      density: "compact",
                      modelValue: a(b),
                      "onUpdate:modelValue": [
                        o[1] || (o[1] = (r) => (v(b) ? (b.value = r) : null)),
                        o[2] || (o[2] = (r) => u()),
                      ],
                      items: a(N),
                      label: "Anno",
                      "no-data-text": "Nessun risultato trovato",
                      variant: "outlined",
                    },
                    null,
                    8,
                    ["modelValue", "items"],
                  ),
                ]),
                o[10] ||
                  (o[10] = m("div", { style: { clear: "both" } }, null, -1)),
                s(
                  we,
                  {
                    density: "compact",
                    items: a(w),
                    headers: S,
                    search: a(D),
                    "items-per-page": 30,
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
                    "sort-by": a(T),
                    "onUpdate:sortBy":
                      o[4] || (o[4] = (r) => (v(T) ? (T.value = r) : null)),
                  },
                  {
                    top: n(() => [
                      s(
                        P,
                        {
                          modelValue: a(D),
                          "onUpdate:modelValue":
                            o[3] ||
                            (o[3] = (r) => (v(D) ? (D.value = r) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca nei risultati",
                          autocomplete: "off",
                          density: "compact",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.color": n(({ item: r }) => [
                      r.color != "" && r.color != null
                        ? (k(),
                          _(
                            he,
                            {
                              key: 0,
                              color: r.color,
                              content: r.color,
                              height: "20px",
                              width: "150px",
                              inline: "",
                            },
                            null,
                            8,
                            ["color", "content"],
                          ))
                        : B("", !0),
                    ]),
                    "item.day": n(({ item: r }) => [
                      G(te(r.day.substr(3, 2) + "/" + r.day.substr(0, 2)), 1),
                    ]),
                    "item.actions": n(({ item: r }) => [
                      s(
                        W,
                        {
                          class: "me-2",
                          size: "large",
                          onClick: (le) => i(r.id),
                        },
                        {
                          default: n(() => [
                            ...(o[7] || (o[7] = [G("mdi-pencil", -1)])),
                          ]),
                          _: 1,
                        },
                        8,
                        ["onClick"],
                      ),
                      s(
                        V,
                        {
                          onDelete: (le) => t(r.id),
                          iconadelete: a(z),
                          color: "red",
                          text: "Vuoi veramente eliminare questa festività/chiusura?",
                        },
                        null,
                        8,
                        ["onDelete", "iconadelete"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search", "sort-by"],
                ),
                a(g)
                  ? (k(),
                    _(
                      c,
                      { key: 0, dialoginsmod: a(g), idrec: a(x), onClose: e },
                      null,
                      8,
                      ["dialoginsmod", "idrec"],
                    ))
                  : B("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { tt as default };
