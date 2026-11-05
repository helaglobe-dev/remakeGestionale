import { _ as ae } from "./ClyIuovc.js";
import {
  E as H,
  r as l,
  G as W,
  o as j,
  J as R,
  y as c,
  C as p,
  z as h,
  x as w,
  K as x,
  B as y,
  A as C,
  N as le,
  O as re,
  M as N,
  L as s,
  D as z,
  n as Q,
  u as ne,
  k as ie,
  e as ue,
} from "./CYsiv7Qj.js";
import { $ as B } from "./BvG7V8Ak.js";
import { V as de } from "./MIubIMrV.js";
import { V as ce, a as pe } from "./Bj0ZT2dB.js";
import { V as me } from "./Bx6RXzqb.js";
import { V as Y, a as G } from "./B_W9U9Wp.js";
import { V as ve } from "./BqujDEEl.js";
import { V as fe } from "./Dlfzj7mx.js";
import { u as ye } from "./LKQL6vAN.js";
import { V as ge } from "./DCAzZvgN.js";
import { V as be } from "./ss-1h9Hv.js";
import { V as Ve } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const he = {
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
  we = { key: 0, class: "pb-10 pageh2" },
  ke = { key: 1, class: "pb-10 pageh2" },
  _e = { style: { display: "flex" } },
  xe = {
    __name: "DialogInsModCost",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      seluser: String,
      selyear: Number,
      clone: Number,
      seluserid: Number,
    },
    emits: ["close"],
    setup(T, { emit: E }) {
      const { data: U } = H(),
        A = Q(),
        F = E,
        u = T,
        V = l(null),
        d = l(!1),
        g = l(!1),
        m = W("snackbar"),
        k = l([(n) => !!n || "Campo obbligatorio"]);
      function M(n) {
        if (n.key === ".") {
          n.preventDefault();
          const o = n.target,
            a = o.selectionStart,
            v = o.selectionEnd,
            f = o.value;
          (o.value = f.substring(0, a) + "," + f.substring(v)),
            o.setSelectionRange(a + 1, a + 1),
            o.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      const D = async () => {
        let n = {};
        u.idrec > 0 && (n.id = u.idrec),
          (n.hcost = V.value),
          (n.year = u.selyear),
          (n.user_id = u.seluserid);
        let o = { Cost: n };
        await B(A.public.apiBaseurl + "cost/savecost", {
          method: "POST",
          body: o,
        })
          .then(() => {
            u.idrec == 0
              ? (m.value = {
                  text: "Creazione costo orario completata",
                  type: "success",
                  show: !0,
                })
              : (m.value = {
                  text: "Modifica costo orario completata",
                  type: "success",
                  show: !0,
                }),
              _();
          })
          .catch((a) => {
            let v = JSON.parse(a.data).errors.title;
            console.log("catcherr", a.data),
              (m.value = { text: v, type: "danger", show: !0 });
          });
      };
      function _() {
        F("close");
      }
      const q = async () => {
        if (u.idrec > 0) {
          const { data: n } = await B(
            A.public.apiBaseurl + "cost/get/" + u.idrec,
            {
              onRequest({ request: o, options: a }) {},
              onRequestError({ request: o, options: a, error: v }) {
                console.log("Errore nella request:", v),
                  (m.value = {
                    text: "Errore: " + v,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: o, response: a, options: v }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (m.value = {
                    text: "Errore caricamento costo orario",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: o, response: a, options: v }) {
                let f = a._data.data;
                V.value = parseFloat(f.hcost);
              },
            },
          );
        }
      };
      return (
        j(async () => {
          (d.value = !0), await q();
        }),
        (n, o) => (
          c(),
          R(
            fe,
            {
              class: "modaldialog",
              onAfterLeave: _,
              modelValue: s(d),
              "onUpdate:modelValue":
                o[3] || (o[3] = (a) => (N(d) ? (d.value = a) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: p(() => [
                h("div", he, [
                  u.idrec == 0
                    ? (c(),
                      w(
                        "h2",
                        we,
                        "Nuovo costo orario di " +
                          C(u.seluser) +
                          " per l'anno " +
                          C(u.selyear),
                        1,
                      ))
                    : x("", !0),
                  u.idrec > 0
                    ? (c(),
                      w(
                        "h2",
                        ke,
                        "Modifica costo orario di " +
                          C(u.seluser) +
                          " per l'anno " +
                          C(u.selyear),
                        1,
                      ))
                    : x("", !0),
                  y(
                    de,
                    {
                      modelValue: s(g),
                      "onUpdate:modelValue":
                        o[1] || (o[1] = (a) => (N(g) ? (g.value = a) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        o[2] ||
                        (o[2] = le(
                          re(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: p(() => [
                        y(ce, null, {
                          default: p(() => [
                            y(
                              pe,
                              { cols: "12", sm: "12" },
                              {
                                default: p(() => [
                                  y(
                                    me,
                                    {
                                      class: "mb-2",
                                      modelValue: s(V),
                                      "onUpdate:modelValue":
                                        o[0] ||
                                        (o[0] = (a) =>
                                          N(V) ? (V.value = a) : null),
                                      variant: "outlined",
                                      rules: s(k),
                                      label: "Costo orario*",
                                      "decimal-separator": ",",
                                      onKeydown: M,
                                      precision: 2,
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
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"],
                  ),
                  o[6] || (o[6] = h("br", null, null, -1)),
                  h("div", _e, [
                    y(
                      Y,
                      { class: "", onClick: _, color: "red" },
                      {
                        default: p(() => [
                          ...(o[4] || (o[4] = [z(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    y(ve),
                    y(
                      Y,
                      { onClick: D, disabled: !s(g), color: "green" },
                      {
                        default: p(() => [
                          ...(o[5] || (o[5] = [z("Salva", -1)])),
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
  Ce = { class: "pl-10 pr-10" },
  Ee = { class: "divcenterpage" },
  qe = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Re = { key: 0 },
  Ne = { key: 1 },
  Be = { key: 0 },
  De = { key: 1 },
  Ze = {
    __name: "costs",
    setup(T) {
      const E = Q(),
        U = ne(),
        { status: A, signIn: F, signOut: u, data: V } = H(),
        d = l([]),
        g = l(""),
        m = W("snackbar"),
        k = l(!1),
        M = l(0),
        D = l(0),
        _ = l(null),
        q = l([]),
        n = l([]),
        o = l(!0),
        a = l(parseInt(new Date().getFullYear())),
        v = ie(() => {
          const b = new Date().getFullYear();
          return Array.from({ length: b + 1 - 2023 + 1 }, (t, i) => 2023 + i);
        });
      l([]);
      const f = l([]),
        S = l([]),
        X = l(!1),
        P = l(null),
        $ = l(null),
        K = l(null),
        Z = [
          { title: "Utente", key: "value", sortable: !0, align: "left" },
          { title: "Anno", key: "year", sortable: !0, align: "left" },
          { title: "Costo", key: "hcost", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      ye({
        title: "Costi Orari",
        meta: [{ name: "description", content: "v" }],
      });
      function L(b, t, i, r) {
        (D.value = parseInt(b)),
          (P.value = t),
          (K.value = i),
          ($.value = r),
          (k.value = !0);
      }
      function ee() {
        (k.value = !1), I();
      }
      function te(b) {
        const { data: t } = B(E.public.apiBaseurl + "cost/delete/" + b, {
          onRequest({ request: i, options: r }) {},
          onRequestError({ request: i, options: r, error: e }) {
            console.log("Errore nella request:", e);
          },
          onResponseError({ request: i, response: r, options: e }) {
            m.value = {
              text: "Errore cancellazione utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: i, response: r, options: e }) {
            (m.value = { text: "Utente eliminato", type: "success", show: !0 }),
              I();
          },
        });
      }
      const oe = () => {
          (q.value = []), (n.value = []);
          const { data: b } = B(E.public.apiBaseurl + "user/list", {
            onRequest({ request: t, options: i }) {},
            onRequestError({ request: t, options: i, error: r }) {
              console.log("Errore nella request:", r);
            },
            onResponseError({ request: t, response: i, options: r }) {
              m.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: i, options: r }) {
              i._data.data.forEach((e) => {
                q.value.push({
                  id: e.id,
                  value: e.firstname + " " + e.lastname,
                }),
                  (n.value[e.id] = e.firstname + " " + e.lastname);
              }),
                console.log("aryusers.value", n.value);
            },
          });
        },
        I = async () => {
          (d.value = []), (f.value = []), (S.value = []), ($.value = a.value);
          let b = { user_id: _.value ? _.value.id : 0, year: a.value };
          try {
            const { data: t, status: i } = await B(
              E.public.apiBaseurl + "cost/list",
              { method: "POST", body: b },
            );
            t.forEach((r) => {
              (d.value[r.user_id] = r.hcost),
                (f.value[r.user_id] = r.year),
                (S.value[r.user_id] = r.id);
            });
          } catch (t) {
            console.log(t);
            let i = JSON.parse(t.data).errors.title;
            console.log("catcherr", t.data),
              (m.value = { text: i, type: "danger", show: !0 });
            return;
          }
        },
        se = () => {
          M.value = V.value.id;
        };
      function O() {
        X.value = window.innerWidth <= 960;
      }
      return (
        j(async () => {
          V.value.role != "S"
            ? U.push("/")
            : (oe(), O(), window.addEventListener("resize", O), se(), I());
        }),
        ue(() => {
          window.removeEventListener("resize", O);
        }),
        (b, t) => {
          const i = ae,
            r = xe;
          return (
            c(),
            w("div", Ce, [
              h("div", Ee, [
                t[5] || (t[5] = h("br", null, null, -1)),
                t[6] ||
                  (t[6] = h(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Costi Orari",
                    -1,
                  )),
                h("div", qe, [
                  y(
                    ge,
                    {
                      autocomplete: "off",
                      class: "ma-2 mt-0 mr-4",
                      density: "compact",
                      modelValue: s(a),
                      "onUpdate:modelValue": [
                        t[0] || (t[0] = (e) => (N(a) ? (a.value = e) : null)),
                        t[1] || (t[1] = (e) => I()),
                      ],
                      "no-data-text": "Nessun risultato trovato",
                      items: s(v),
                      style: { width: "130px" },
                      label: "Anno",
                      variant: "outlined",
                    },
                    null,
                    8,
                    ["modelValue", "items"],
                  ),
                ]),
                t[7] ||
                  (t[7] = h("div", { style: { clear: "both" } }, null, -1)),
                y(
                  be,
                  {
                    density: "compact",
                    items: s(q),
                    headers: Z,
                    search: s(g),
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
                    top: p(() => [
                      y(
                        Ve,
                        {
                          modelValue: s(g),
                          "onUpdate:modelValue":
                            t[2] ||
                            (t[2] = (e) => (N(g) ? (g.value = e) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca nei risultati",
                          density: "compact",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.year": p(({ item: e }) => [
                      s(f)[e.id] != null
                        ? (c(), w("span", Re, C(s(f)[e.id]), 1))
                        : (c(), w("span", Ne, "-")),
                    ]),
                    "item.hcost": p(({ item: e }) => [
                      s(d)[e.id] != null
                        ? (c(),
                          w(
                            "span",
                            Be,
                            C(
                              new Intl.NumberFormat("it-IT", {
                                style: "currency",
                                useGrouping: !0,
                                currency: "EUR",
                              }).format(s(d)[e.id]),
                            ),
                            1,
                          ))
                        : (c(), w("span", De, "-")),
                    ]),
                    "item.actions": p(({ item: e }) => [
                      s(d)[e.id] != null
                        ? (c(),
                          R(
                            G,
                            {
                              key: 0,
                              class: "me-2",
                              size: "large",
                              onClick: (J) =>
                                L(s(S)[e.id], e.value, e.id, s(f)[e.id]),
                            },
                            {
                              default: p(() => [
                                ...(t[3] || (t[3] = [z("mdi-pencil", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"],
                          ))
                        : x("", !0),
                      s(d)[e.id] == null
                        ? (c(),
                          R(
                            G,
                            {
                              key: 1,
                              class: "me-2",
                              size: "large",
                              onClick: (J) => L(0, e.value, e.id, s($)),
                            },
                            {
                              default: p(() => [
                                ...(t[4] || (t[4] = [z("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"],
                          ))
                        : x("", !0),
                      s(d)[e.id] != null
                        ? (c(),
                          R(
                            i,
                            {
                              key: 2,
                              onDelete: (J) => te(s(S)[e.id]),
                              iconadelete: s(o),
                              color: "red",
                              text: "Vuoi veramente eliminare questo costo orario?",
                            },
                            null,
                            8,
                            ["onDelete", "iconadelete"],
                          ))
                        : x("", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
                s(k)
                  ? (c(),
                    R(
                      r,
                      {
                        key: 0,
                        dialoginsmod: s(k),
                        idrec: s(D),
                        seluser: s(P),
                        seluserid: s(K),
                        selyear: s($),
                        onClose: ee,
                      },
                      null,
                      8,
                      [
                        "dialoginsmod",
                        "idrec",
                        "seluser",
                        "seluserid",
                        "selyear",
                      ],
                    ))
                  : x("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Ze as default };
