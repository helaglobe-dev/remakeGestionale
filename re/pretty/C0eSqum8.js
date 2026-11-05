import { _ as ae } from "./ClyIuovc.js";
import {
  u as J,
  F as G,
  E as H,
  r as p,
  G as W,
  o as Q,
  J as X,
  y as q,
  C as s,
  z as f,
  x as $,
  K as B,
  B as o,
  N as C,
  O as ne,
  M as P,
  L as a,
  D as d,
  n as Y,
  e as re,
  P as ue,
  A as O,
} from "./CYsiv7Qj.js";
import { $ as T } from "./BvG7V8Ak.js";
import { V as de } from "./MIubIMrV.js";
import { V as pe, a as E } from "./Bj0ZT2dB.js";
import { V as h } from "./BrCrqdgZ.js";
import { V as me } from "./DCAzZvgN.js";
import { V as j } from "./B51noTYL.js";
import { V as D, a as z } from "./B_W9U9Wp.js";
import { V as ce } from "./BqujDEEl.js";
import { V as fe } from "./Dlfzj7mx.js";
import { u as ve } from "./LKQL6vAN.js";
import { V as ye } from "./ss-1h9Hv.js";
import { V as ge, a as be, b as L, c as S } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./Cv1q1CuH.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Ve = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  xe = { key: 0, class: "pb-10 pageh2" },
  we = { key: 1, class: "pb-10 pageh2" },
  ke = { key: 2, class: "pb-10 pageh2" },
  qe = { style: { display: "flex" } },
  Ae = {
    __name: "DialogInsModActivity",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      clone: Number,
      types: Array,
    },
    emits: ["close"],
    setup(F, { emit: N }) {
      const R = Y();
      J(), G();
      const { status: Z, signIn: ee, signOut: te, data: K } = H(),
        w = N,
        r = F,
        g = p(!1),
        v = p(!1),
        b = W("snackbar"),
        n = p({ id: 0, openstatus: !0, type: "N" });
      p(null);
      const V = p([(x) => !!x || "Campo obbligatorio"]),
        I = async () => {
          n.value.status = "A";
          let x = { Activity: n.value };
          await T(R.public.apiBaseurl + "activity/createedit", {
            method: "POST",
            body: x,
          })
            .then(() => {
              r.idrec == 0
                ? (b.value = {
                    text: "Creazione attività completata",
                    type: "success",
                    show: !0,
                  })
                : (b.value = {
                    text: "Modifica attività completata",
                    type: "success",
                    show: !0,
                  }),
                A();
            })
            .catch((e) => {
              let l = JSON.parse(e.data).errors.title;
              console.log("catcherr", e.data),
                (b.value = { text: l, type: "danger", show: !0 });
            });
        };
      function A() {
        w("close");
      }
      const M = async () => {
        if (r.idrec > 0) {
          const { data: x } = await T(
            R.public.apiBaseurl + "activity/get/" + r.idrec,
            {
              onRequest({ request: e, options: l }) {},
              onRequestError({ request: e, options: l, error: k }) {
                console.log("Errore nella request:", k),
                  (b.value = {
                    text: "Errore: " + k,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: l, options: k }) {
                console.log(
                  "Errore nella response: " + l._data.error.messages[0],
                ),
                  (b.value = {
                    text: "Errore caricamento attività",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: l, options: k }) {
                (n.value = l._data.data), r.clone == 1 && (n.value.id = 0);
              },
            },
          );
        }
      };
      return (
        Q(async () => {
          (g.value = !0), await M();
        }),
        (x, e) => (
          q(),
          X(
            fe,
            {
              class: "modaldialog",
              onAfterLeave: A,
              modelValue: a(g),
              "onUpdate:modelValue":
                e[11] || (e[11] = (l) => (P(g) ? (g.value = l) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: s(() => [
                f("div", Ve, [
                  r.idrec == 0
                    ? (q(), $("h2", xe, "Nuova Attività"))
                    : B("", !0),
                  r.idrec > 0 && r.clone == 0
                    ? (q(), $("h2", we, "Modifica Attività"))
                    : B("", !0),
                  r.idrec > 0 && r.clone == 1
                    ? (q(), $("h2", ke, "Duplica Attività"))
                    : B("", !0),
                  o(
                    de,
                    {
                      modelValue: a(v),
                      "onUpdate:modelValue":
                        e[9] || (e[9] = (l) => (P(v) ? (v.value = l) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[10] ||
                        (e[10] = C(
                          ne(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: s(() => [
                        o(pe, null, {
                          default: s(() => [
                            o(
                              E,
                              { cols: "12", sm: "12" },
                              {
                                default: s(() => [
                                  o(
                                    h,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = C(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(n).name,
                                      "onUpdate:modelValue":
                                        e[1] || (e[1] = (l) => (a(n).name = l)),
                                      required: "",
                                      rules: a(V),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome attività*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              E,
                              { cols: "12", sm: "12" },
                              {
                                default: s(() => [
                                  o(
                                    h,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[2] ||
                                        (e[2] = C(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(n).acronimo,
                                      "onUpdate:modelValue":
                                        e[3] ||
                                        (e[3] = (l) => (a(n).acronimo = l)),
                                      required: "",
                                      rules: a(V),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Acronimo*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              E,
                              { cols: "12", sm: "12" },
                              {
                                default: s(() => [
                                  o(
                                    me,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: a(n).type,
                                      "onUpdate:modelValue":
                                        e[4] || (e[4] = (l) => (a(n).type = l)),
                                      label: "Tipo*",
                                      rules: a(V),
                                      items: r.types,
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "items"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              E,
                              { cols: "12", sm: "12" },
                              {
                                default: s(() => [
                                  o(
                                    j,
                                    {
                                      class: "mb-2",
                                      onKeydown:
                                        e[5] ||
                                        (e[5] = C(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(n).description,
                                      "onUpdate:modelValue":
                                        e[6] ||
                                        (e[6] = (l) => (a(n).description = l)),
                                      required: "",
                                      rules: a(V),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Descrizione*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              E,
                              { cols: "12", sm: "12" },
                              {
                                default: s(() => [
                                  o(
                                    j,
                                    {
                                      class: "mb-2",
                                      onKeydown:
                                        e[7] ||
                                        (e[7] = C(
                                          (l) => l.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(n).notes,
                                      "onUpdate:modelValue":
                                        e[8] ||
                                        (e[8] = (l) => (a(n).notes = l)),
                                      required: "",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Note",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
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
                  e[14] || (e[14] = f("br", null, null, -1)),
                  f("div", qe, [
                    o(
                      D,
                      { class: "", onClick: A, color: "red" },
                      {
                        default: s(() => [
                          ...(e[12] || (e[12] = [d(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(ce),
                    o(
                      D,
                      { onClick: I, disabled: !a(v), color: "green" },
                      {
                        default: s(() => [
                          ...(e[13] || (e[13] = [d("Salva", -1)])),
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
  De = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Ne = ["title"],
  Re = { class: "mt-4" },
  Xe = {
    __name: "activities",
    setup(F) {
      const N = Y(),
        R = J();
      G();
      const { status: Z, signIn: ee, signOut: te, data: K } = H(),
        w = p([]),
        r = p(""),
        g = W("snackbar"),
        v = p(!1),
        b = p(0),
        n = p(!0),
        V = p(0),
        I = [
          { value: "N", label: "Normale" },
          { value: "F", label: "Ferie/Permessi" },
        ],
        A = p(!1),
        M = [
          { title: "Acronimo", key: "acronimo", sortable: !0, align: "left" },
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          {
            title: "Descrizione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        x = [
          { title: "ID", key: "id", sortable: !0, width: 30 },
          { title: "Acronimo", key: "acronimo", sortable: !0, align: "left" },
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          {
            title: "Descrizione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          { title: "Note", key: "note", sortable: !0, align: "left" },
        ];
      ve({
        title: "Attività",
        meta: [{ name: "description", content: "Attività" }],
      });
      function e(y, t) {
        (b.value = parseInt(y)), (V.value = t), (v.value = !0);
      }
      function l() {
        (v.value = !1), (V.value = 0), U();
      }
      function k() {
        const y = [],
          t = x.map((c) => c.title);
        y.push(t.join(","));
        for (const c of w.value) {
          const le = x.map((se) => {
            const ie = c[se.key];
            return `"${String(ie ?? "").replace(/"/g, '""')}"`;
          });
          y.push(le.join(","));
        }
        const u = new Blob(
            [
              y.join(`
`),
            ],
            { type: "text/csv;charset=utf-8;" },
          ),
          m = URL.createObjectURL(u),
          i = document.createElement("a");
        (i.href = m),
          i.setAttribute("download", "exportattivita.csv"),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i);
      }
      function oe(y) {
        const { data: t } = T(N.public.apiBaseurl + "activity/delete/" + y, {
          onRequest({ request: u, options: m }) {},
          onRequestError({ request: u, options: m, error: i }) {
            console.log("Errore nella request:", i);
          },
          onResponseError({ request: u, response: m, options: i }) {
            g.value = {
              text: "Errore cancellazione attività",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: u, response: m, options: i }) {
            (g.value = {
              text: "Attività eliminata",
              type: "success",
              show: !0,
            }),
              U();
          },
        });
      }
      const U = async () => {
        w.value = [];
        const { data: y } = await T(N.public.apiBaseurl + "activity/list", {
          onRequest({ request: t, options: u }) {},
          onRequestError({ request: t, options: u, error: m }) {
            console.log("Errore nella request:", m);
          },
          onResponseError({ request: t, response: u, options: m }) {
            g.value = {
              text: "Errore caricamento attività",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: t, response: u, options: m }) {
            u._data.data.forEach((i) => {
              let c = i.Activity;
              w.value.push(c);
            });
          },
        });
      };
      function _() {
        A.value = window.innerWidth <= 960;
      }
      return (
        Q(async () => {
          K.value.role != "S"
            ? R.push("/")
            : (_(), window.addEventListener("resize", _), await U());
        }),
        re(() => {
          window.removeEventListener("resize", _);
        }),
        (y, t) => {
          const u = ae,
            m = Ae;
          return (
            q(),
            $("div", Ce, [
              f("div", Ee, [
                t[11] || (t[11] = f("br", null, null, -1)),
                t[12] ||
                  (t[12] = f(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Definizione Attività",
                    -1,
                  )),
                f("div", De, [
                  o(
                    D,
                    {
                      onClick: t[0] || (t[0] = (i) => e(0, 0)),
                      color: "green",
                    },
                    {
                      default: s(() => [
                        o(z, null, {
                          default: s(() => [
                            ...(t[2] || (t[2] = [d("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        t[3] || (t[3] = d("Crea attività", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  t[6] || (t[6] = d()),
                  o(
                    D,
                    { class: "ml-2", color: "primary", onClick: k },
                    {
                      default: s(() => [
                        o(
                          z,
                          { class: "mr-3" },
                          {
                            default: s(() => [
                              ...(t[4] || (t[4] = [d("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        t[5] || (t[5] = d(" CSV", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[13] ||
                  (t[13] = f("div", { style: { clear: "both" } }, null, -1)),
                o(
                  ye,
                  {
                    density: "compact",
                    items: a(w),
                    headers: M,
                    search: a(r),
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
                    top: s(() => [
                      o(
                        h,
                        {
                          modelValue: a(r),
                          "onUpdate:modelValue":
                            t[1] ||
                            (t[1] = (i) => (P(r) ? (r.value = i) : null)),
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
                    "item.acronimo": s(({ item: i }) => [
                      f("span", { title: i.id }, O(i.acronimo), 9, Ne),
                    ]),
                    "item.type": s(({ item: i }) => [
                      d(
                        O(
                          i.type == "N"
                            ? "Normale"
                            : i.type == "F"
                              ? "Ferie/Permessi"
                              : i.type,
                        ),
                        1,
                      ),
                    ]),
                    "item.actions": s(({ item: i }) => [
                      o(
                        ge,
                        { "offset-y": "" },
                        {
                          activator: s(({ props: c }) => [
                            o(
                              D,
                              ue(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                c,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: s(() => [
                            f("div", Re, [
                              o(
                                be,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: s(() => [
                                    o(
                                      L,
                                      {
                                        onClick: (c) => e(i.id, 0),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: s(() => [
                                          o(
                                            z,
                                            { style: { opacity: "1" } },
                                            {
                                              default: s(() => [
                                                ...(t[7] ||
                                                  (t[7] = [
                                                    d("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: s(() => [
                                          o(
                                            S,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: s(() => [
                                                ...(t[8] ||
                                                  (t[8] = [d("Modifica", -1)])),
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
                                    o(
                                      L,
                                      {
                                        onClick: (c) => e(i.id, 1),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: s(() => [
                                          o(
                                            z,
                                            { style: { opacity: "1" } },
                                            {
                                              default: s(() => [
                                                ...(t[9] ||
                                                  (t[9] = [
                                                    d("mdi-content-copy", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: s(() => [
                                          o(
                                            S,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: s(() => [
                                                ...(t[10] ||
                                                  (t[10] = [d("Duplica", -1)])),
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
                                    o(
                                      L,
                                      { dense: "", exact: "" },
                                      {
                                        default: s(() => [
                                          o(
                                            S,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: s(() => [
                                                o(
                                                  u,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (c) => oe(i.id),
                                                    iconadelete: a(n),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare questa attività " +
                                                      i.name +
                                                      " [" +
                                                      i.code +
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
                a(v)
                  ? (q(),
                    X(
                      m,
                      {
                        key: 0,
                        clone: a(V),
                        types: I,
                        dialoginsmod: a(v),
                        idrec: a(b),
                        onClose: l,
                      },
                      null,
                      8,
                      ["clone", "dialoginsmod", "idrec"],
                    ))
                  : B("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Xe as default };
