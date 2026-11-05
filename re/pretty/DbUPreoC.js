import { _ as se } from "./ClyIuovc.js";
import {
  u as Y,
  F as j,
  E as G,
  r as d,
  G as J,
  o as H,
  J as W,
  y as R,
  C as o,
  z as v,
  x as N,
  K as $,
  B as s,
  N as _,
  O as le,
  M as O,
  L as n,
  D as i,
  n as Q,
  e as ne,
  P as re,
  A as z,
} from "./CYsiv7Qj.js";
import { $ as h } from "./BvG7V8Ak.js";
import { V as ie } from "./MIubIMrV.js";
import { V as ue, a as A } from "./Bj0ZT2dB.js";
import { V as U } from "./Bx6RXzqb.js";
import { V as T, a as M } from "./B_W9U9Wp.js";
import { V as de } from "./BqujDEEl.js";
import { V as pe } from "./Dlfzj7mx.js";
import { u as me } from "./LKQL6vAN.js";
import { V as ce } from "./ss-1h9Hv.js";
import { V as fe, a as ge, b as L, c as K } from "./CxBYvc7u.js";
import { V as ve } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const ye = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  be = { key: 0, class: "pb-10 pageh2" },
  Ve = { key: 1, class: "pb-10 pageh2" },
  we = { key: 2, class: "pb-10 pageh2" },
  xe = { style: { display: "flex" } },
  ke = {
    __name: "DialogInsModYeartarget",
    props: { dialoginsmod: Boolean, idrec: Number, clone: Number },
    emits: ["close"],
    setup(P, { emit: D }) {
      const I = Q();
      Y(), j();
      const { status: X, signIn: Z, signOut: ee, data: F } = G(),
        k = D,
        r = P,
        V = d(!1),
        y = d(!1),
        w = J("snackbar"),
        p = d({ id: 0, value: 0, soglia: 0 });
      d(null);
      const x = d([(m) => !!m || "Campo obbligatorio"]),
        B = async () => {
          let m = { Yeartarget: p.value };
          await h(I.public.apiBaseurl + "yeartarget/createedit", {
            method: "POST",
            body: m,
          })
            .then(() => {
              r.idrec == 0
                ? (w.value = {
                    text: "Creazione valore completata",
                    type: "success",
                    show: !0,
                  })
                : (w.value = {
                    text: "Modifica valore completata",
                    type: "success",
                    show: !0,
                  }),
                C();
            })
            .catch((e) => {
              let a = JSON.parse(e.data).errors.title;
              console.log("catcherr", e.data),
                (w.value = { text: a, type: "danger", show: !0 });
            });
        };
      function C() {
        k("close");
      }
      const S = async () => {
        if (r.idrec > 0) {
          const { data: m } = await h(
            I.public.apiBaseurl + "yeartarget/get/" + r.idrec,
            {
              onRequest({ request: e, options: a }) {},
              onRequestError({ request: e, options: a, error: f }) {
                console.log("Errore nella request:", f),
                  (w.value = {
                    text: "Errore: " + f,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: a, options: f }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (w.value = {
                    text: "Errore caricamento valore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: a, options: f }) {
                (p.value = a._data.data), r.clone == 1 && (p.value.id = 0);
              },
            },
          );
        }
      };
      function E(m) {
        if (m.key === ".") {
          m.preventDefault();
          const e = m.target,
            a = e.selectionStart,
            f = e.selectionEnd,
            q = e.value;
          (e.value = q.substring(0, a) + "," + q.substring(f)),
            e.setSelectionRange(a + 1, a + 1),
            e.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      return (
        H(async () => {
          (V.value = !0), await S();
        }),
        (m, e) => (
          R(),
          W(
            pe,
            {
              class: "modaldialog",
              onAfterLeave: C,
              modelValue: n(V),
              "onUpdate:modelValue":
                e[8] || (e[8] = (a) => (O(V) ? (V.value = a) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                v("div", ye, [
                  r.idrec == 0 ? (R(), N("h2", be, "Nuova Target")) : $("", !0),
                  r.idrec > 0 && r.clone == 0
                    ? (R(), N("h2", Ve, "Modifica Target"))
                    : $("", !0),
                  r.idrec > 0 && r.clone == 1
                    ? (R(), N("h2", we, "Duplica Target"))
                    : $("", !0),
                  s(
                    ie,
                    {
                      modelValue: n(y),
                      "onUpdate:modelValue":
                        e[6] || (e[6] = (a) => (O(y) ? (y.value = a) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[7] ||
                        (e[7] = _(
                          le(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: o(() => [
                        s(ue, null, {
                          default: o(() => [
                            s(
                              A,
                              { cols: "12", sm: "12" },
                              {
                                default: o(() => [
                                  s(
                                    U,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = _(
                                          (a) => a.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: n(p).year,
                                      "onUpdate:modelValue":
                                        e[1] || (e[1] = (a) => (n(p).year = a)),
                                      required: "",
                                      rules: n(x),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Anno*",
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
                                default: o(() => [
                                  s(
                                    U,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[2] ||
                                          (e[2] = _(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        E,
                                      ],
                                      modelValue: n(p).value,
                                      "onUpdate:modelValue":
                                        e[3] ||
                                        (e[3] = (a) => (n(p).value = a)),
                                      required: "",
                                      rules: n(x),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Valore*",
                                      "decimal-separator": ",",
                                      precision: 2,
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
                                default: o(() => [
                                  s(
                                    U,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[4] ||
                                          (e[4] = _(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        E,
                                      ],
                                      modelValue: n(p).soglia,
                                      "onUpdate:modelValue":
                                        e[5] ||
                                        (e[5] = (a) => (n(p).soglia = a)),
                                      required: "",
                                      rules: n(x),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Soglia Margine*",
                                      "decimal-separator": ",",
                                      precision: 2,
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
                  e[11] || (e[11] = v("br", null, null, -1)),
                  v("div", xe, [
                    s(
                      T,
                      { class: "", onClick: C, color: "red" },
                      {
                        default: o(() => [
                          ...(e[9] || (e[9] = [i(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    s(de),
                    s(
                      T,
                      { onClick: B, disabled: !n(y), color: "green" },
                      {
                        default: o(() => [
                          ...(e[10] || (e[10] = [i("Salva", -1)])),
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
  Ee = { class: "pl-10 pr-10" },
  qe = { class: "divcenterpage" },
  Re = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Ce = ["title"],
  Te = { class: "mt-4" },
  Je = {
    __name: "targets",
    setup(P) {
      const D = Q(),
        I = Y();
      j();
      const { status: X, signIn: Z, signOut: ee, data: F } = G(),
        k = d([]),
        r = d(""),
        V = J("snackbar"),
        y = d(!1),
        w = d(0),
        p = d(!0),
        x = d(0),
        B = d(!1),
        C = [
          { title: "Anno", key: "year", sortable: !0, align: "left" },
          { title: "Valore", key: "value", sortable: !0, align: "left" },
          {
            title: "Soglia Margine",
            key: "soglia",
            sortable: !0,
            align: "left",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        S = [
          { title: "ID", key: "id" },
          { title: "Anno", key: "year" },
          { title: "Valore", key: "value" },
          { title: "Soglia Margine", key: "soglia" },
        ];
      me({
        title: "Target Annui",
        meta: [{ name: "description", content: "Target Annui" }],
      });
      function E(b, t) {
        (w.value = parseInt(b)), (x.value = t), (y.value = !0);
      }
      function m() {
        (y.value = !1), (x.value = 0), f();
      }
      function e() {
        const b = [],
          t = S.map((g) => g.title);
        b.push(t.join(","));
        for (const g of k.value) {
          const te = S.map((oe) => {
            const ae = g[oe.key];
            return `"${String(ae ?? "").replace(/"/g, '""')}"`;
          });
          b.push(te.join(","));
        }
        const u = new Blob(
            [
              b.join(`
`),
            ],
            { type: "text/csv;charset=utf-8;" },
          ),
          c = URL.createObjectURL(u),
          l = document.createElement("a");
        (l.href = c),
          l.setAttribute("download", "exporttargetannui.csv"),
          document.body.appendChild(l),
          l.click(),
          document.body.removeChild(l);
      }
      function a(b) {
        const { data: t } = h(D.public.apiBaseurl + "yeartarget/delete/" + b, {
          onRequest({ request: u, options: c }) {},
          onRequestError({ request: u, options: c, error: l }) {
            console.log("Errore nella request:", l);
          },
          onResponseError({ request: u, response: c, options: l }) {
            V.value = {
              text: "Errore cancellazione taget",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: u, response: c, options: l }) {
            (V.value = { text: "Target eliminato", type: "success", show: !0 }),
              f();
          },
        });
      }
      const f = async () => {
        k.value = [];
        const { data: b } = await h(D.public.apiBaseurl + "yeartarget/list", {
          onRequest({ request: t, options: u }) {},
          onRequestError({ request: t, options: u, error: c }) {
            console.log("Errore nella request:", c);
          },
          onResponseError({ request: t, response: u, options: c }) {
            V.value = {
              text: "Errore caricamento target",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: t, response: u, options: c }) {
            u._data.data.forEach((l) => {
              let g = l.Yeartarget;
              k.value.push(g);
            });
          },
        });
      };
      function q() {
        B.value = window.innerWidth <= 960;
      }
      return (
        H(async () => {
          F.value.role != "S"
            ? I.push("/")
            : (q(), window.addEventListener("resize", q), await f());
        }),
        ne(() => {
          window.removeEventListener("resize", q);
        }),
        (b, t) => {
          const u = se,
            c = ke;
          return (
            R(),
            N("div", Ee, [
              v("div", qe, [
                t[11] || (t[11] = v("br", null, null, -1)),
                t[12] ||
                  (t[12] = v(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Definizione Target annui",
                    -1,
                  )),
                v("div", Re, [
                  s(
                    T,
                    {
                      onClick: t[0] || (t[0] = (l) => E(0, 0)),
                      color: "green",
                    },
                    {
                      default: o(() => [
                        s(M, null, {
                          default: o(() => [
                            ...(t[2] || (t[2] = [i("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        t[3] || (t[3] = i("Crea target", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  t[6] || (t[6] = i()),
                  s(
                    T,
                    { class: "ml-2", color: "primary", onClick: e },
                    {
                      default: o(() => [
                        s(
                          M,
                          { class: "mr-3" },
                          {
                            default: o(() => [
                              ...(t[4] || (t[4] = [i("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        t[5] || (t[5] = i(" CSV", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[13] ||
                  (t[13] = v("div", { style: { clear: "both" } }, null, -1)),
                s(
                  ce,
                  {
                    density: "compact",
                    items: n(k),
                    headers: C,
                    search: n(r),
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
                        ve,
                        {
                          modelValue: n(r),
                          "onUpdate:modelValue":
                            t[1] ||
                            (t[1] = (l) => (O(r) ? (r.value = l) : null)),
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
                    "item.year": o(({ item: l }) => [
                      v("span", { title: l.id }, z(l.year), 9, Ce),
                    ]),
                    "item.value": o(({ item: l }) => [
                      i(
                        z(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(l.value),
                        ),
                        1,
                      ),
                    ]),
                    "item.soglia": o(({ item: l }) => [
                      i(
                        z(
                          new Intl.NumberFormat("it-IT", {
                            useGrouping: !0,
                          }).format(l.soglia),
                        ),
                        1,
                      ),
                    ]),
                    "item.actions": o(({ item: l }) => [
                      s(
                        fe,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: g }) => [
                            s(
                              T,
                              re(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                g,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            v("div", Te, [
                              s(
                                ge,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    s(
                                      L,
                                      {
                                        onClick: (g) => E(l.id, 0),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          s(
                                            M,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(t[7] ||
                                                  (t[7] = [
                                                    i("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          s(
                                            K,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(t[8] ||
                                                  (t[8] = [i("Modifica", -1)])),
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
                                      L,
                                      {
                                        onClick: (g) => E(l.id, 1),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          s(
                                            M,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(t[9] ||
                                                  (t[9] = [
                                                    i("mdi-content-copy", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          s(
                                            K,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(t[10] ||
                                                  (t[10] = [i("Duplica", -1)])),
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
                                      L,
                                      { dense: "", exact: "" },
                                      {
                                        default: o(() => [
                                          s(
                                            K,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: o(() => [
                                                s(
                                                  u,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (g) => a(l.id),
                                                    iconadelete: n(p),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare questo target " +
                                                      new Intl.NumberFormat(
                                                        "it-IT",
                                                        {
                                                          style: "currency",
                                                          useGrouping: !0,
                                                          currency: "EUR",
                                                        },
                                                      ).format(l.value) +
                                                      " [" +
                                                      l.year +
                                                      "]?",
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
                n(y)
                  ? (R(),
                    W(
                      c,
                      {
                        key: 0,
                        clone: n(x),
                        dialoginsmod: n(y),
                        idrec: n(w),
                        onClose: m,
                      },
                      null,
                      8,
                      ["clone", "dialoginsmod", "idrec"],
                    ))
                  : $("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Je as default };
