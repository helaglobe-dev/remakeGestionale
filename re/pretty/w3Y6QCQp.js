import { _ as se } from "./ClyIuovc.js";
import {
  u as j,
  F,
  E as J,
  r as u,
  G,
  o as H,
  J as W,
  y as q,
  C as t,
  z as m,
  x as z,
  K as h,
  B as s,
  N as S,
  O as ae,
  M as A,
  L as l,
  D as d,
  n as Q,
  e as ne,
  P as le,
  A as ie,
} from "./CYsiv7Qj.js";
import { $ } from "./BvG7V8Ak.js";
import { V as re } from "./MIubIMrV.js";
import { V as ue, a as K } from "./Bj0ZT2dB.js";
import { V as O } from "./BrCrqdgZ.js";
import { V as M, a as _ } from "./B_W9U9Wp.js";
import { V as ce } from "./BqujDEEl.js";
import { V as de } from "./Dlfzj7mx.js";
import { u as pe } from "./LKQL6vAN.js";
import { V as me } from "./ss-1h9Hv.js";
import { V as ve, a as fe, b as T, c as U } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const ge = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  ye = { key: 0, class: "pb-10 pageh2" },
  be = { key: 1, class: "pb-10 pageh2" },
  Ve = { key: 2, class: "pb-10 pageh2" },
  xe = { style: { display: "flex" } },
  we = {
    __name: "DialogInsModMacrovoice",
    props: { dialoginsmod: Boolean, idrec: Number, clone: Number },
    emits: ["close"],
    setup(P, { emit: E }) {
      const R = Q();
      j(), F();
      const { status: X, signIn: Y, signOut: Z, data: B } = J(),
        x = E,
        i = P,
        b = u(!1),
        v = u(!1),
        V = G("snackbar"),
        f = u({ id: 0, name: "", status: "A" });
      u(null);
      const w = u([(g) => !!g || "Campo obbligatorio"]),
        N = async () => {
          let g = { Macrovoice: f.value };
          await $(R.public.apiBaseurl + "macrovoice/createedit", {
            method: "POST",
            body: g,
          })
            .then(() => {
              i.idrec == 0
                ? (V.value = {
                    text: "Creazione macrovoce completata",
                    type: "success",
                    show: !0,
                  })
                : (V.value = {
                    text: "Modifica macrovoce completata",
                    type: "success",
                    show: !0,
                  }),
                C();
            })
            .catch((o) => {
              let n = JSON.parse(o.data).errors.title;
              console.log("catcherr", o.data),
                (V.value = { text: n, type: "danger", show: !0 });
            });
        };
      function C() {
        x("close");
      }
      const D = async () => {
        if (i.idrec > 0) {
          const { data: g } = await $(
            R.public.apiBaseurl + "macrovoice/get/" + i.idrec,
            {
              onRequest({ request: o, options: n }) {},
              onRequestError({ request: o, options: n, error: k }) {
                console.log("Errore nella request:", k),
                  (V.value = {
                    text: "Errore: " + k,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: o, response: n, options: k }) {
                console.log(
                  "Errore nella response: " + n._data.error.messages[0],
                ),
                  (V.value = {
                    text: "Errore caricamento macrovoce",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: o, response: n, options: k }) {
                (f.value = n._data.data), i.clone == 1 && (f.value.id = 0);
              },
            },
          );
        }
      };
      return (
        H(async () => {
          (b.value = !0), await D();
        }),
        (g, o) => (
          q(),
          W(
            de,
            {
              class: "modaldialog",
              onAfterLeave: C,
              modelValue: l(b),
              "onUpdate:modelValue":
                o[6] || (o[6] = (n) => (A(b) ? (b.value = n) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: t(() => [
                m("div", ge, [
                  i.idrec == 0
                    ? (q(), z("h2", ye, "Nuova Macrovoce"))
                    : h("", !0),
                  i.idrec > 0 && i.clone == 0
                    ? (q(), z("h2", be, "Modifica Macrovoce"))
                    : h("", !0),
                  i.idrec > 0 && i.clone == 1
                    ? (q(), z("h2", Ve, "Duplica Macrovoce"))
                    : h("", !0),
                  s(
                    re,
                    {
                      modelValue: l(v),
                      "onUpdate:modelValue":
                        o[4] || (o[4] = (n) => (A(v) ? (v.value = n) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        o[5] ||
                        (o[5] = S(
                          ae(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: t(() => [
                        s(ue, null, {
                          default: t(() => [
                            s(
                              K,
                              { cols: "12", sm: "12" },
                              {
                                default: t(() => [
                                  s(
                                    O,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        o[0] ||
                                        (o[0] = S(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(f).name,
                                      "onUpdate:modelValue":
                                        o[1] || (o[1] = (n) => (l(f).name = n)),
                                      required: "",
                                      rules: l(w),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome macrovoce*",
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
                              K,
                              { cols: "12", sm: "12" },
                              {
                                default: t(() => [
                                  s(
                                    O,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        o[2] ||
                                        (o[2] = S(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(f).description,
                                      "onUpdate:modelValue":
                                        o[3] ||
                                        (o[3] = (n) => (l(f).description = n)),
                                      required: "",
                                      rules: l(w),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label:
                                        "Descrizione / criterio di aggregazione*",
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
                  o[9] || (o[9] = m("br", null, null, -1)),
                  m("div", xe, [
                    s(
                      M,
                      { class: "", onClick: C, color: "red" },
                      {
                        default: t(() => [
                          ...(o[7] || (o[7] = [d(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    s(ce),
                    s(
                      M,
                      { onClick: N, disabled: !l(v), color: "green" },
                      {
                        default: t(() => [
                          ...(o[8] || (o[8] = [d("Salva", -1)])),
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
  ke = { class: "pl-10 pr-10" },
  qe = { class: "divcenterpage" },
  Ce = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Me = ["title"],
  Ee = { class: "mt-4" },
  Je = {
    __name: "macrovoices",
    setup(P) {
      const E = Q(),
        R = j();
      F();
      const { status: X, signIn: Y, signOut: Z, data: B } = J(),
        x = u([]),
        i = u(""),
        b = G("snackbar"),
        v = u(!1),
        V = u(0),
        f = u(!0),
        w = u(0),
        N = u(!1),
        C = [
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          {
            title: "Descrizione / criterio di aggregazione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        D = [
          { title: "ID", key: "id" },
          { title: "Nome", key: "name" },
          {
            title: "Descrizione / criterio di aggregazione",
            key: "description",
          },
        ];
      pe({
        title: "Macrovoci",
        meta: [{ name: "description", content: "Macrovoci" }],
      });
      function g(y, e) {
        (V.value = parseInt(y)), (w.value = e), (v.value = !0);
      }
      function o() {
        (v.value = !1), (w.value = 0), I();
      }
      function n() {
        const y = [],
          e = D.map((p) => p.title);
        y.push(e.join(","));
        for (const p of x.value) {
          const ee = D.map((oe) => {
            const te = p[oe.key];
            return `"${String(te ?? "").replace(/"/g, '""')}"`;
          });
          y.push(ee.join(","));
        }
        const r = new Blob(
            [
              y.join(`
`),
            ],
            { type: "text/csv;charset=utf-8;" },
          ),
          c = URL.createObjectURL(r),
          a = document.createElement("a");
        (a.href = c),
          a.setAttribute("download", "exportmacrovoci.csv"),
          document.body.appendChild(a),
          a.click(),
          document.body.removeChild(a);
      }
      function k(y) {
        const { data: e } = $(E.public.apiBaseurl + "macrovoice/delete/" + y, {
          onRequest({ request: r, options: c }) {},
          onRequestError({ request: r, options: c, error: a }) {
            console.log("Errore nella request:", a);
          },
          onResponseError({ request: r, response: c, options: a }) {
            b.value = {
              text: "Errore cancellazione macrovoce",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: r, response: c, options: a }) {
            (b.value = {
              text: "Macrovoce eliminata",
              type: "success",
              show: !0,
            }),
              I();
          },
        });
      }
      const I = async () => {
        x.value = [];
        const { data: y } = await $(E.public.apiBaseurl + "macrovoice/list", {
          onRequest({ request: e, options: r }) {},
          onRequestError({ request: e, options: r, error: c }) {
            console.log("Errore nella request:", c);
          },
          onResponseError({ request: e, response: r, options: c }) {
            b.value = {
              text: "Errore caricamento attività",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: e, response: r, options: c }) {
            r._data.data.forEach((a) => {
              let p = a.Macrovoice;
              x.value.push(p);
            });
          },
        });
      };
      function L() {
        N.value = window.innerWidth <= 960;
      }
      return (
        H(async () => {
          B.value.role != "S" && B.value.cancreatemacro != 1
            ? R.push("/")
            : (L(), window.addEventListener("resize", L), await I());
        }),
        ne(() => {
          window.removeEventListener("resize", L);
        }),
        (y, e) => {
          const r = se,
            c = we;
          return (
            q(),
            z("div", ke, [
              m("div", qe, [
                e[11] || (e[11] = m("br", null, null, -1)),
                e[12] ||
                  (e[12] = m(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Definizione Macrovoci",
                    -1,
                  )),
                m("div", Ce, [
                  s(
                    M,
                    {
                      onClick: e[0] || (e[0] = (a) => g(0, 0)),
                      color: "green",
                    },
                    {
                      default: t(() => [
                        s(_, null, {
                          default: t(() => [
                            ...(e[2] || (e[2] = [d("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[3] || (e[3] = d("Crea macrovoce", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  e[6] || (e[6] = d()),
                  s(
                    M,
                    { class: "ml-2", color: "primary", onClick: n },
                    {
                      default: t(() => [
                        s(
                          _,
                          { class: "mr-3" },
                          {
                            default: t(() => [
                              ...(e[4] || (e[4] = [d("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[5] || (e[5] = d(" CSV", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[13] ||
                  (e[13] = m("div", { style: { clear: "both" } }, null, -1)),
                s(
                  me,
                  {
                    density: "compact",
                    items: l(x),
                    headers: C,
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
                    top: t(() => [
                      s(
                        O,
                        {
                          modelValue: l(i),
                          "onUpdate:modelValue":
                            e[1] ||
                            (e[1] = (a) => (A(i) ? (i.value = a) : null)),
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
                    "item.name": t(({ item: a }) => [
                      m("span", { title: a.id }, ie(a.name), 9, Me),
                    ]),
                    "item.actions": t(({ item: a }) => [
                      s(
                        ve,
                        { "offset-y": "" },
                        {
                          activator: t(({ props: p }) => [
                            s(
                              M,
                              le(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                p,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: t(() => [
                            m("div", Ee, [
                              s(
                                fe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: t(() => [
                                    s(
                                      T,
                                      {
                                        onClick: (p) => g(a.id, 0),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: t(() => [
                                          s(
                                            _,
                                            { style: { opacity: "1" } },
                                            {
                                              default: t(() => [
                                                ...(e[7] ||
                                                  (e[7] = [
                                                    d("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: t(() => [
                                          s(
                                            U,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: t(() => [
                                                ...(e[8] ||
                                                  (e[8] = [d("Modifica", -1)])),
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
                                      T,
                                      {
                                        onClick: (p) => g(a.id, 1),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: t(() => [
                                          s(
                                            _,
                                            { style: { opacity: "1" } },
                                            {
                                              default: t(() => [
                                                ...(e[9] ||
                                                  (e[9] = [
                                                    d("mdi-content-copy", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: t(() => [
                                          s(
                                            U,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: t(() => [
                                                ...(e[10] ||
                                                  (e[10] = [d("Duplica", -1)])),
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
                                      T,
                                      { dense: "", exact: "" },
                                      {
                                        default: t(() => [
                                          s(
                                            U,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: t(() => [
                                                s(
                                                  r,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (p) => k(a.id),
                                                    iconadelete: l(f),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare questa macrovoce " +
                                                      a.name +
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
                l(v)
                  ? (q(),
                    W(
                      c,
                      {
                        key: 0,
                        clone: l(w),
                        dialoginsmod: l(v),
                        idrec: l(V),
                        onClose: o,
                      },
                      null,
                      8,
                      ["clone", "dialoginsmod", "idrec"],
                    ))
                  : h("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Je as default };
