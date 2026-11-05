import { _ as me } from "./ClyIuovc.js";
import {
  E as le,
  u as ne,
  F as re,
  r as c,
  G as ie,
  o as ue,
  J as _,
  y as f,
  C as o,
  z as d,
  x as U,
  K as q,
  B as l,
  A as D,
  N as te,
  O as ye,
  M as Z,
  L as a,
  D as y,
  n as de,
  e as fe,
  P as ve,
} from "./CYsiv7Qj.js";
import { $ as I } from "./BvG7V8Ak.js";
import { V as ge } from "./MIubIMrV.js";
import { V as be, a as S } from "./Bj0ZT2dB.js";
import { V as oe } from "./DCAzZvgN.js";
import { V as Ve } from "./Bx6RXzqb.js";
import { V as ae } from "./Da5kZyhM.js";
import { V as we } from "./B51noTYL.js";
import { V as T, a as M } from "./B_W9U9Wp.js";
import { V as ke } from "./BqujDEEl.js";
import { V as xe } from "./Dlfzj7mx.js";
import { x as $ } from "./D16A7lth.js";
import { u as _e } from "./LKQL6vAN.js";
import { V as qe } from "./ss-1h9Hv.js";
import { V as Ee, a as De, b as W, c as Q } from "./CxBYvc7u.js";
import { V as se } from "./Cv1q1CuH.js";
import { V as Pe } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./fKsYyVgl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Re = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Ce = { key: 0, class: "pb-10 pageh2" },
  Ne = { key: 1, class: "pb-10 pageh2" },
  Se = { class: "d-flex justify-center" },
  $e = { class: "d-flex justify-center" },
  Ie = { class: "d-flex justify-center" },
  Te = { class: "d-flex justify-center" },
  ze = { class: "d-flex justify-center" },
  he = { style: { display: "flex" } },
  Be = {
    __name: "DialogInsModPasscost",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      projects: Array,
      suppliers: Array,
      pname: String,
    },
    emits: ["close"],
    setup(j, { emit: N }) {
      const { data: b } = le();
      ne();
      const z = re(),
        A = de(),
        ee = N,
        P = j,
        V = c(!1),
        w = c(!1),
        g = ie("snackbar");
      c(0), c(0);
      const n = c({
          id: 0,
          type: "A",
          percent: 0,
          total: 0,
          paymentduedate: "",
          payment_date: "",
          payed: "N",
          description: "",
          note: "",
        }),
        k = c([(v) => !!v || "Campo obbligatorio"]),
        Y = [
          { label: "Pagata", value: "P" },
          { label: "Non pagata", value: "N" },
        ],
        F = async () => {
          const v = new Date(n.value.paymentduedate),
            s = v.getFullYear(),
            r = String(v.getMonth() + 1).padStart(2, "0"),
            E = String(v.getDate()).padStart(2, "0");
          n.value.paymentduedate = `${s}-${r}-${E}`;
          const R = new Date(n.value.payment_date),
            O = R.getFullYear(),
            K = String(R.getMonth() + 1).padStart(2, "0"),
            C = String(R.getDate()).padStart(2, "0");
          (n.value.payment_date = `${O}-${K}-${C}`),
            (n.value.project_id = z.query.id);
          let G = { passcost: n.value };
          await I(A.public.apiBaseurl + "invoice/passcostcreateedit", {
            method: "POST",
            body: G,
          })
            .then(() => {
              P.idrec == 0
                ? (g.value = {
                    text: "Creazione passcost completata",
                    type: "success",
                    show: !0,
                  })
                : (g.value = {
                    text: "Modifica passcost completata",
                    type: "success",
                    show: !0,
                  }),
                h();
            })
            .catch((L) => {
              let J = JSON.parse(L.data).errors.title;
              console.log("catcherr", L.data),
                (g.value = { text: J, type: "danger", show: !0 });
            });
        };
      function h() {
        ee("close");
      }
      const B = async () => {
        if (P.idrec > 0) {
          const { data: v } = await I(
            A.public.apiBaseurl + "invoice/passcostget/" + P.idrec,
            {
              onRequest({ request: s, options: r }) {},
              onRequestError({ request: s, options: r, error: E }) {
                console.log("Errore nella request:", E),
                  (g.value = {
                    text: "Errore: " + E,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: s, response: r, options: E }) {
                console.log(
                  "Errore nella response: " + r._data.error.messages[0],
                ),
                  (g.value = {
                    text: "Errore caricamento passcost",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: s, response: r, options: E }) {
                n.value = r._data.data;
              },
            },
          );
        }
      };
      return (
        ue(async () => {
          (V.value = !0), await B();
        }),
        (v, s) => (
          f(),
          _(
            xe,
            {
              class: "modaldialog",
              onAfterLeave: h,
              modelValue: a(V),
              "onUpdate:modelValue":
                s[9] || (s[9] = (r) => (Z(V) ? (V.value = r) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                d("div", Re, [
                  j.idrec == 0
                    ? (f(),
                      U(
                        "h2",
                        Ce,
                        "Nuovo costo passante del progetto " + D(P.pname),
                        1,
                      ))
                    : q("", !0),
                  j.idrec > 0
                    ? (f(),
                      U(
                        "h2",
                        Ne,
                        "Modifica costo passante del progetto " + D(P.pname),
                        1,
                      ))
                    : q("", !0),
                  l(
                    ge,
                    {
                      modelValue: a(w),
                      "onUpdate:modelValue":
                        s[7] || (s[7] = (r) => (Z(w) ? (w.value = r) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        s[8] ||
                        (s[8] = te(
                          ye(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: o(() => [
                        l(be, null, {
                          default: o(() => [
                            l(
                              S,
                              { cols: "12", sm: "8", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  d("div", Se, [
                                    l(
                                      oe,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: a(n).supplier_id,
                                        "onUpdate:modelValue":
                                          s[0] ||
                                          (s[0] = (r) =>
                                            (a(n).supplier_id = r)),
                                        label: "Fornitore*",
                                        rules: a(k),
                                        items: P.suppliers,
                                        readonly: a(b).hasinvoice == 0,
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      [
                                        "modelValue",
                                        "rules",
                                        "items",
                                        "readonly",
                                      ],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              S,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  l(
                                    Ve,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        s[1] ||
                                        (s[1] = te(
                                          (r) => r.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(n).total,
                                      "onUpdate:modelValue":
                                        s[2] ||
                                        (s[2] = (r) => (a(n).total = r)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      rules: a(k),
                                      label: "Totale*",
                                      density: "compact",
                                      readonly: a(b).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              S,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  d("div", $e, [
                                    l(
                                      ae,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: a(n).paymentduedate,
                                        "onUpdate:modelValue":
                                          s[3] ||
                                          (s[3] = (r) =>
                                            (a(n).paymentduedate = r)),
                                        label: "Data previsto pagamento*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        rules: a(k),
                                        readonly: a(b).hasinvoice == 0,
                                      },
                                      null,
                                      8,
                                      ["modelValue", "rules", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              S,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  d("div", Ie, [
                                    l(
                                      oe,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: a(n).payed,
                                        "onUpdate:modelValue":
                                          s[4] ||
                                          (s[4] = (r) => (a(n).payed = r)),
                                        label: "Pagata*",
                                        rules: a(k),
                                        items: Y,
                                        readonly: a(b).hasinvoice == 0,
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "rules", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              S,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  d("div", Te, [
                                    l(
                                      ae,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: a(n).payment_date,
                                        "onUpdate:modelValue":
                                          s[5] ||
                                          (s[5] = (r) =>
                                            (a(n).payment_date = r)),
                                        label: "Data  pagamento",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: a(b).hasinvoice == 0,
                                      },
                                      null,
                                      8,
                                      ["modelValue", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              S,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  d("div", ze, [
                                    l(
                                      we,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: a(n).note,
                                        "onUpdate:modelValue":
                                          s[6] ||
                                          (s[6] = (r) => (a(n).note = r)),
                                        label: "Note",
                                        density: "compact",
                                        readonly: a(b).hasinvoice == 0,
                                      },
                                      null,
                                      8,
                                      ["modelValue", "readonly"],
                                    ),
                                  ]),
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
                  s[12] || (s[12] = d("br", null, null, -1)),
                  d("div", he, [
                    l(
                      T,
                      { class: "", onClick: h, color: "red" },
                      {
                        default: o(() => [
                          ...(s[10] || (s[10] = [y(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    l(ke),
                    a(b).hasinvoice == 1
                      ? (f(),
                        _(
                          T,
                          {
                            key: 0,
                            onClick: F,
                            readonly: !a(w),
                            color: "green",
                          },
                          {
                            default: o(() => [
                              ...(s[11] || (s[11] = [y("Salva", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["readonly"],
                        ))
                      : q("", !0),
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
  Me = { class: "pl-10 pr-10" },
  je = { class: "divcenterpage" },
  Fe = { class: "pb-4 pageh3", style: { display: "inline", float: "left" } },
  Le = { style: { display: "inline", float: "right" } },
  Ue = { key: 0 },
  Ae = { class: "mt-4" },
  Vt = {
    __name: "passcosts",
    setup(j) {
      const N = de(),
        b = ne(),
        z = re(),
        { status: A, signIn: ee, signOut: P, data: V } = le(),
        w = c([]),
        g = c(""),
        n = ie("snackbar"),
        k = c(!1),
        Y = c(0),
        F = c(0),
        h = c(!0),
        B = c([]),
        v = c([]);
      c(!1);
      const s = c(!1),
        r = [
          { title: "ID", key: "id", sortable: !0, width: 30 },
          {
            title: "Fornitore",
            key: "supplier_id",
            sortable: !0,
            align: "left",
          },
          {
            title: "Data Prevista",
            key: "paymentduedate",
            sortable: !0,
            align: "left",
          },
          { title: "Totale", key: "total", sortable: !0, align: "left" },
          { title: "Pagato", key: "payed", sortable: !0, align: "left" },
          {
            title: "Data Pagamento",
            key: "payment_date",
            sortable: !0,
            align: "left",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        E = [
          { title: "Progetto", key: "project_id" },
          { title: "Fornitore", key: "supplier_id" },
          { title: "Data Prevista", key: "paymentduedate" },
          { title: "Totale", key: "total" },
          { title: "Pagato", key: "payed" },
          { title: "Data Pagamento", key: "payment_date" },
          { title: "Note", key: "note" },
        ];
      _e({
        title: "Costi passanti",
        meta: [{ name: "description", content: "Costi passanti" }],
      });
      function R(x) {
        (F.value = parseInt(x)), (k.value = !0);
      }
      const O = async () => {
          (B.value = []), (v.value = []);
          const { data: x } = await I(N.public.apiBaseurl + "supplier/list/", {
            onRequest({ request: e, options: i }) {},
            onRequestError({ request: e, options: i, error: u }) {
              console.log("Errore nella request:", u),
                (n.value = { text: "Errore: " + u, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: i, options: u }) {
              console.log(
                "Errore nella response: " + i._data.error.messages[0],
              ),
                (n.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: i, options: u }) {
              i._data.data.forEach((t) => {
                B.value.push({ label: t.name, value: t.id }),
                  (v.value[t.id] = t.name);
              });
            },
          });
        },
        K = async () => {
          (k.value = !1), await H();
        },
        C = c("");
      function G() {
        const x = w.value.map((t) => {
            const m = {};
            return (
              E.forEach((p) => {
                p.title == "Fornitore"
                  ? (m[p.title] = t[p.key] ? v.value[t[p.key]] : "")
                  : p.title == "Progetto"
                    ? (m[p.title] = C.value)
                    : p.title == "Data Prevista" || p.title == "Data Pagamento"
                      ? (m[p.title] =
                          t[p.key] && t[p.key] !== "0000-00-00"
                            ? new Date(t[p.key]).toLocaleDateString("it-IT")
                            : "")
                      : p.title == "Pagato"
                        ? (m[p.title] = t[p.key] == "N" ? "No" : "Si")
                        : (m[p.title] = t[p.key] ?? "");
              }),
              m
            );
          }),
          e = $.utils.json_to_sheet(x),
          i = $.utils.decode_range(e["!ref"]);
        e["!cols"] = [
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
        ];
        for (let t = i.s.c; t <= i.e.c; t++) {
          const m = $.utils.encode_cell({ r: 0, c: t });
          e[m] && (e[m].s = { font: { bold: !0 } });
        }
        const u = $.utils.book_new();
        $.utils.book_append_sheet(u, e, "passcosts"),
          $.writeFile(u, "export-passcosts-progetto-" + C.value + ".xlsx");
      }
      const L = async (x) => {
          const { data: e } = await I(
            N.public.apiBaseurl + "invoice/passcostdelete/" + x,
            {
              onRequest({ request: i, options: u }) {},
              onRequestError({ request: i, options: u, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: i, response: u, options: t }) {
                n.value = {
                  text: "Errore cancellazione costi passanti",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: i, response: u, options: t }) {
                (n.value = {
                  text: "Costo passanti eliminato",
                  type: "success",
                  show: !0,
                }),
                  H();
              },
            },
          );
        },
        J = () => {
          Y.value = V.value.id;
        };
      function X() {
        s.value = window.innerWidth <= 960;
      }
      function pe() {
        b.push("/tasks?id=" + z.query.id);
      }
      const H = async () => {
          w.value = [];
          const { data: x } = await I(
            N.public.apiBaseurl + "invoice/passcostlist/" + z.query.id,
            {
              onRequest({ request: e, options: i }) {},
              onRequestError({ request: e, options: i, error: u }) {
                console.log("Errore nella request:", u),
                  (n.value = {
                    text: "Errore: " + u,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: i, options: u }) {
                console.log(
                  "Errore nella response: " + i._data.error.messages[0],
                ),
                  (n.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: i, options: u }) {
                w.value = i._data.data;
              },
            },
          );
        },
        ce = async () => {
          const { data: x } = await I(
            N.public.apiBaseurl + "project/get/" + z.query.id,
            {
              onRequest({ request: e, options: i }) {},
              onRequestError({ request: e, options: i, error: u }) {
                console.log("Errore nella request:", u),
                  (n.value = {
                    text: "Errore: " + u,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: i, options: u }) {
                console.log(
                  "Errore nella response: " + i._data.error.messages[0],
                ),
                  (n.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: i, options: u }) {
                C.value = "[" + i._data.data.code + "] " + i._data.data.name;
              },
            },
          );
        };
      return (
        ue(async () => {
          X(),
            window.addEventListener("resize", X),
            await ce(),
            await O(),
            J(),
            await H();
        }),
        fe(() => {
          window.removeEventListener("resize", X);
        }),
        (x, e) => {
          const i = me,
            u = Be;
          return (
            f(),
            U("div", Me, [
              d("div", je, [
                e[15] || (e[15] = d("br", null, null, -1)),
                d("h3", Fe, "Costi passanti del progetto " + D(a(C)), 1),
                d("div", Le, [
                  a(V).hasinvoice == 1
                    ? (f(),
                      _(
                        T,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => R(0)),
                          color: "green",
                        },
                        {
                          default: o(() => [
                            l(M, null, {
                              default: o(() => [
                                ...(e[3] || (e[3] = [y("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[4] || (e[4] = y("Nuovo Costo Passante", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : q("", !0),
                  l(
                    T,
                    { class: "ml-3", color: "primary", onClick: G },
                    {
                      default: o(() => [
                        l(
                          M,
                          { class: "mr-3" },
                          {
                            default: o(() => [
                              ...(e[5] || (e[5] = [y("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[6] || (e[6] = y(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  l(
                    T,
                    {
                      onClick: e[1] || (e[1] = (t) => pe()),
                      color: "orange",
                      class: "ml-4",
                    },
                    {
                      default: o(() => [
                        l(M, null, {
                          default: o(() => [
                            ...(e[7] || (e[7] = [y("mdi-arrow-left", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[8] || (e[8] = y("Torna al progetto", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[16] ||
                  (e[16] = d("div", { style: { clear: "both" } }, null, -1)),
                l(
                  qe,
                  {
                    density: "compact",
                    items: a(w),
                    headers: r,
                    search: a(g),
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
                      l(
                        Pe,
                        {
                          modelValue: a(g),
                          "onUpdate:modelValue":
                            e[2] ||
                            (e[2] = (t) => (Z(g) ? (g.value = t) : null)),
                          class: "pa-2",
                          density: "compact",
                          variant: "outlined",
                          label: "Cerca",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.total": o(({ item: t }) => [
                      d(
                        "span",
                        null,
                        D(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.percent": o(({ item: t }) => [
                      d(
                        "span",
                        null,
                        D(
                          new Intl.NumberFormat("it-IT", {
                            useGrouping: !0,
                          }).format(t.percent),
                        ) + "%",
                        1,
                      ),
                    ]),
                    "item.paymentduedate": o(({ item: t }) => [
                      d(
                        "span",
                        null,
                        D(
                          new Date(t.paymentduedate).toLocaleDateString(
                            "it-IT",
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.payment_date": o(({ item: t }) => [
                      t.payment_date !== null &&
                      t.payment_date !== void 0 &&
                      t.payment_date !== ""
                        ? (f(),
                          U(
                            "span",
                            Ue,
                            D(
                              new Date(t.payment_date).toLocaleDateString(
                                "it-IT",
                              ),
                            ),
                            1,
                          ))
                        : q("", !0),
                    ]),
                    "item.supplier_id": o(({ item: t }) => [
                      d("span", null, D(a(v)[t.supplier_id]), 1),
                    ]),
                    "item.payed": o(({ item: t }) => [
                      t.payed == "P"
                        ? (f(),
                          _(
                            se,
                            {
                              key: 0,
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(e[9] || (e[9] = [y(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : q("", !0),
                      t.payed == "N"
                        ? (f(),
                          _(
                            se,
                            {
                              key: 1,
                              color: "red",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(e[10] || (e[10] = [y(" Non Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : q("", !0),
                    ]),
                    "item.actions": o(({ item: t }) => [
                      l(
                        Ee,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: m }) => [
                            l(
                              T,
                              ve(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                m,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            d("div", Ae, [
                              l(
                                De,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    a(V).hasinvoice == 1
                                      ? (f(),
                                        _(
                                          W,
                                          {
                                            key: 0,
                                            onClick: (m) => R(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              l(
                                                M,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(e[11] ||
                                                      (e[11] = [
                                                        y("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              l(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(e[12] ||
                                                      (e[12] = [
                                                        y("Modifica", -1),
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
                                        ))
                                      : (f(),
                                        _(
                                          W,
                                          {
                                            key: 1,
                                            onClick: (m) => R(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              l(
                                                M,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(e[13] ||
                                                      (e[13] = [
                                                        y("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              l(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(e[14] ||
                                                      (e[14] = [
                                                        y("Visualizza", -1),
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
                                        )),
                                    a(V).hasinvoice == 1
                                      ? (f(),
                                        _(
                                          W,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: o(() => [
                                              l(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    l(
                                                      i,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (m) =>
                                                          L(t.id),
                                                        iconadelete: a(h),
                                                        color: "red",
                                                        text: "Vuoi veramente eliminare il costo passante selezionato?",
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "onDelete",
                                                        "iconadelete",
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
                                        ))
                                      : q("", !0),
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
                a(k)
                  ? (f(),
                    _(
                      u,
                      {
                        key: 0,
                        suppliers: a(B),
                        pname: a(C),
                        dialoginsmod: a(k),
                        idrec: a(F),
                        onClose: K,
                      },
                      null,
                      8,
                      ["suppliers", "pname", "dialoginsmod", "idrec"],
                    ))
                  : q("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Vt as default };
