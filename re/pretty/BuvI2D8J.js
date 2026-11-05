import { _ as Ve } from "./ClyIuovc.js";
import {
  E as me,
  u as ce,
  F as fe,
  r as u,
  G as ve,
  o as ye,
  J as x,
  y as g,
  C as l,
  z as d,
  x as X,
  K as k,
  B as o,
  N as A,
  O as oe,
  M as T,
  L as n,
  D as f,
  n as ge,
  e as we,
  A as G,
  P as xe,
} from "./CYsiv7Qj.js";
import { $ as M } from "./BvG7V8Ak.js";
import { V as ke } from "./MIubIMrV.js";
import { V as be, a as b } from "./Bj0ZT2dB.js";
import { V as B } from "./DCAzZvgN.js";
import { V as De } from "./61Go5SWW.js";
import { V as Ee } from "./Da5kZyhM.js";
import { V as ie } from "./Bx6RXzqb.js";
import { V as re } from "./B51noTYL.js";
import { V as $, a as U } from "./B_W9U9Wp.js";
import { V as Ce } from "./BqujDEEl.js";
import { V as Pe } from "./Dlfzj7mx.js";
import { x as _ } from "./D16A7lth.js";
import { V as qe } from "./B_hTT4u_.js";
import { u as Ne } from "./LKQL6vAN.js";
import { V as Ie } from "./ss-1h9Hv.js";
import { V as Se, a as Te, b as te, c as ae } from "./CxBYvc7u.js";
import { V as le } from "./Cv1q1CuH.js";
import { V as ze } from "./BrCrqdgZ.js";
import { s as ue, a as Re, e as _e, b as de } from "./B5S3s6V6.js";
import { e as pe } from "./DRW0ieNg.js";
import { i as $e } from "./BIFx5Ami.js";
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
const Me = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Fe = { key: 0, class: "pb-10 pageh2" },
  Ue = { key: 1, class: "pb-10 pageh2" },
  Ae = { class: "d-flex justify-center" },
  Be = { class: "d-flex justify-center" },
  Le = { class: "d-flex justify-center" },
  je = { class: "d-flex justify-center" },
  Oe = { class: "d-flex justify-center" },
  Ke = { style: { display: "flex" } },
  Ye = {
    __name: "DialogInsModAdminPasscost",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      projects: Array,
      suppliers: Array,
    },
    emits: ["close"],
    setup(L, { emit: D }) {
      const { data: H } = me();
      ce(), fe();
      const E = ge(),
        W = D,
        C = L,
        P = u(!1),
        q = u(!1),
        N = ve("snackbar"),
        se = [
          { label: "Fissi", value: "F" },
          { label: "Variabili", value: "V" },
          { label: "Personale", value: "P" },
        ],
        j = u([]),
        w = u({ value: 22, label: "22%" }),
        z = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        i = u({
          id: 0,
          type: "F",
          payment_date: "",
          payed: "N",
          description: "",
          note: "",
          tag: "",
        }),
        I = u([(V) => !!V || "Campo obbligatorio"]),
        R = [
          { label: "Pagata", value: "P" },
          { label: "Non pagata", value: "N" },
        ];
      function O() {
        w.value.value != null &&
          (i.value.taxable == null ||
          i.value.taxable == 0 ||
          i.value.taxable == null
            ? (i.value.vat = 0)
            : (i.value.vat = (i.value.taxable * w.value.value) / 100));
      }
      const K = async () => {
        const V = new Date(i.value.payment_date),
          a = V.getFullYear(),
          s = String(V.getMonth() + 1).padStart(2, "0"),
          v = String(V.getDate()).padStart(2, "0");
        i.value.payment_date = `${a}-${s}-${v}`;
        let S = { passcost: i.value };
        await M(E.public.apiBaseurl + "passcost/createedit", {
          method: "POST",
          body: S,
        })
          .then(() => {
            C.idrec == 0
              ? (N.value = {
                  text: "Creazione costo completata",
                  type: "success",
                  show: !0,
                })
              : (N.value = {
                  text: "Modifica costo completata",
                  type: "success",
                  show: !0,
                }),
              F();
          })
          .catch((Y) => {
            let Z = JSON.parse(Y.data).errors.title;
            console.log("catcherr", Y.data),
              (N.value = { text: Z, type: "danger", show: !0 });
          });
      };
      function F() {
        W("close");
      }
      const h = async () => {
          if (C.idrec > 0) {
            const { data: V } = await M(
              E.public.apiBaseurl + "passcost/get/" + C.idrec,
              {
                onRequest({ request: a, options: s }) {},
                onRequestError({ request: a, options: s, error: v }) {
                  console.log("Errore nella request:", v),
                    (N.value = {
                      text: "Errore: " + v,
                      type: "danger",
                      show: !0,
                    });
                },
                onResponseError({ request: a, response: s, options: v }) {
                  console.log(
                    "Errore nella response: " + s._data.error.messages[0],
                  ),
                    (N.value = {
                      text: "Errore caricamento passcost",
                      type: "danger",
                      show: !0,
                    });
                },
                onResponse({ request: a, response: s, options: v }) {
                  i.value = s._data.data;
                },
              },
            );
          }
        },
        Q = async () => {
          j.value = [];
          const { data: V } = await M(
            E.public.apiBaseurl + "passcost/listtag",
            {
              onRequest({ request: a, options: s }) {},
              onRequestError({ request: a, options: s, error: v }) {
                console.log("Errore nella request:", v),
                  (N.value = {
                    text: "Errore: " + v,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: a, response: s, options: v }) {
                console.log(
                  "Errore nella response: " + s._data.error.messages[0],
                ),
                  (N.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: a, response: s, options: v }) {
                s._data.data.forEach((S) => {
                  console.log(S), j.value.push({ label: S, value: S });
                });
              },
            },
          );
        };
      return (
        ye(async () => {
          (P.value = !0), await Q(), await h();
        }),
        (V, a) => (
          g(),
          x(
            Pe,
            {
              class: "modaldialog",
              onAfterLeave: F,
              modelValue: n(P),
              "onUpdate:modelValue":
                a[15] || (a[15] = (s) => (T(P) ? (P.value = s) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: l(() => [
                d("div", Me, [
                  L.idrec == 0 ? (g(), X("h2", Fe, "Nuovo costo")) : k("", !0),
                  L.idrec > 0
                    ? (g(), X("h2", Ue, "Modifica costo"))
                    : k("", !0),
                  o(
                    ke,
                    {
                      modelValue: n(q),
                      "onUpdate:modelValue":
                        a[13] || (a[13] = (s) => (T(q) ? (q.value = s) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        a[14] ||
                        (a[14] = A(
                          oe(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: l(() => [
                        o(be, null, {
                          default: l(() => [
                            o(
                              b,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  o(
                                    B,
                                    {
                                      density: "compact",
                                      autocomplete: "off",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      modelValue: n(i).type,
                                      "onUpdate:modelValue":
                                        a[0] || (a[0] = (s) => (n(i).type = s)),
                                      items: se,
                                      label: "Tipo",
                                      variant: "outlined",
                                      "item-title": "label",
                                      "item-value": "value",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  d("div", Ae, [
                                    o(
                                      De,
                                      {
                                        density: "compact",
                                        modelValue: n(i).tag,
                                        "onUpdate:modelValue":
                                          a[1] ||
                                          (a[1] = (s) => (n(i).tag = s)),
                                        items: n(j),
                                        label: "Tag",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        clearable: "",
                                        "return-object": !1,
                                        autocomplete: "off",
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "items"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  d("div", Be, [
                                    o(
                                      Ee,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: n(i).payment_date,
                                        "onUpdate:modelValue":
                                          a[2] ||
                                          (a[2] = (s) =>
                                            (n(i).payment_date = s)),
                                        label: "Data",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  o(
                                    ie,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        a[3] ||
                                          (a[3] = A(
                                            (s) => s.preventDefault(),
                                            ["enter"],
                                          )),
                                        V.onKeydown,
                                      ],
                                      modelValue: n(i).taxable,
                                      "onUpdate:modelValue": [
                                        a[4] ||
                                          (a[4] = (s) => (n(i).taxable = s)),
                                        a[5] || (a[5] = (s) => O()),
                                      ],
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Imponibile",
                                      "decimal-separator": ",",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "onKeydown"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  o(
                                    B,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: n(w),
                                      "onUpdate:modelValue": [
                                        a[6] ||
                                          (a[6] = (s) =>
                                            T(w) ? (w.value = s) : null),
                                        a[7] || (a[7] = (s) => O()),
                                      ],
                                      label: "% Iva*",
                                      "return-object": "",
                                      items: z,
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  o(
                                    ie,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        a[8] ||
                                          (a[8] = A(
                                            (s) => s.preventDefault(),
                                            ["enter"],
                                          )),
                                        V.onKeydown,
                                      ],
                                      modelValue: n(i).vat,
                                      "onUpdate:modelValue":
                                        a[9] || (a[9] = (s) => (n(i).vat = s)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Iva",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly: n(w).value != null,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "onKeydown", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  d("div", Le, [
                                    o(
                                      B,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: n(i).payed,
                                        "onUpdate:modelValue":
                                          a[10] ||
                                          (a[10] = (s) => (n(i).payed = s)),
                                        label: "Pagata*",
                                        rules: n(I),
                                        items: R,
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "rules"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  d("div", je, [
                                    o(
                                      re,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: n(i).description,
                                        "onUpdate:modelValue":
                                          a[11] ||
                                          (a[11] = (s) =>
                                            (n(i).description = s)),
                                        label: "Descrizione",
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              b,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  d("div", Oe, [
                                    o(
                                      re,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: n(i).note,
                                        "onUpdate:modelValue":
                                          a[12] ||
                                          (a[12] = (s) => (n(i).note = s)),
                                        label: "Note",
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
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
                  a[18] || (a[18] = d("br", null, null, -1)),
                  d("div", Ke, [
                    o(
                      $,
                      { class: "", onClick: F, color: "red" },
                      {
                        default: l(() => [
                          ...(a[16] || (a[16] = [f(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(Ce),
                    n(H).hasinvoice == 1
                      ? (g(),
                        x(
                          $,
                          {
                            key: 0,
                            onClick: K,
                            readonly: !n(q),
                            color: "green",
                          },
                          {
                            default: l(() => [
                              ...(a[17] || (a[17] = [f("Salva", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["readonly"],
                        ))
                      : k("", !0),
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
  Je = { class: "pl-10 pr-10" },
  Ge = { class: "divcenterpage" },
  Xe = { style: { display: "inline", float: "right" } },
  He = ["onClick", "onKeyup"],
  We = { key: 0 },
  he = { class: "mt-4" },
  zt = {
    __name: "adminpasscost",
    setup(L) {
      const D = u(
          localStorage.getItem("hgfiltrocpdata") != "null" &&
            localStorage.getItem("hgfiltrocpdata") != null
            ? localStorage
                .getItem("hgfiltrocpdata")
                .split(",")
                .map((y) => new Date(y))
            : [
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() - 1,
                  new Date().getDate(),
                ),
                new Date(),
              ],
        ),
        H = u([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [ue(new Date()), pe(new Date())] },
          {
            label: "Mese precedente",
            value: [ue(de(new Date(), 1)), pe(de(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Re(new Date()), _e(new Date())] },
        ]),
        E = u(""),
        W = [
          { label: "Tutti", value: "" },
          { label: "Fissi", value: "F" },
          { label: "Variabili", value: "V" },
          { label: "Personale", value: "P" },
        ],
        C = u(""),
        P = u([]),
        q = ge();
      ce(), fe();
      const { status: N, signIn: se, signOut: j, data: w } = me(),
        z = u([]),
        i = u(""),
        I = ve("snackbar"),
        R = u(!1),
        O = u(0),
        K = u(0),
        F = u(!0);
      u(!1);
      const h = u(!1),
        Q = [
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          {
            title: "Descrizione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Tag", key: "tag", sortable: !0, align: "left" },
          { title: "Imponibile", key: "taxable", sortable: !0, align: "left" },
          { title: "Pagato", key: "payed", sortable: !0, align: "left" },
          {
            title: "Data Pagamento",
            key: "payment_date",
            sortable: !0,
            align: "left",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        V = [
          { title: "Tipo", key: "type" },
          { title: "Tag", key: "tag" },
          { title: "Imponibile", key: "taxable" },
          { title: "IVA", key: "vat" },
          { title: "Pagato", key: "payed" },
          { title: "Data Pagamento", key: "payment_date" },
          { title: "Descrizione", key: "description" },
          { title: "Note", key: "note" },
        ];
      Ne({ title: "Costi", meta: [{ name: "description", content: "Costi" }] });
      function a(y) {
        (K.value = parseInt(y)), (R.value = !0);
      }
      const s = async () => {
          (R.value = !1), await J();
        },
        v = async () => {
          P.value = [];
          const { data: y } = await M(
            q.public.apiBaseurl + "passcost/listtag",
            {
              onRequest({ request: e, options: m }) {},
              onRequestError({ request: e, options: m, error: r }) {
                console.log("Errore nella request:", r),
                  (I.value = {
                    text: "Errore: " + r,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: m, options: r }) {
                console.log(
                  "Errore nella response: " + m._data.error.messages[0],
                ),
                  (I.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: m, options: r }) {
                m._data.data.forEach((t) => {
                  console.log(t), P.value.push({ label: t, value: t });
                });
              },
            },
          );
        };
      function S() {
        const y = z.value.map((t) => {
            const c = {};
            return (
              V.forEach((p) => {
                p.title == "Data Pagamento"
                  ? (c[p.title] =
                      t[p.key] && t[p.key] !== "0000-00-00"
                        ? new Date(t[p.key]).toLocaleDateString("it-IT")
                        : "")
                  : p.title == "Pagato"
                    ? (c[p.title] = t[p.key] == "N" ? "No" : "Si")
                    : p.title == "Tipo"
                      ? (c[p.title] =
                          t[p.key] == "F"
                            ? "Fisso"
                            : t[p.key] == "V"
                              ? "Variabile"
                              : "Personale")
                      : (c[p.title] = t[p.key] ?? "");
              }),
              c
            );
          }),
          e = _.utils.json_to_sheet(y),
          m = _.utils.decode_range(e["!ref"]);
        e["!cols"] = [
          { wch: 20 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
        ];
        for (let t = m.s.c; t <= m.e.c; t++) {
          const c = _.utils.encode_cell({ r: 0, c: t });
          e[c] && (e[c].s = { font: { bold: !0 } });
        }
        const r = _.utils.book_new();
        _.utils.book_append_sheet(r, e, "Costi"),
          _.writeFile(r, "export-costi.xlsx");
      }
      const Y = async (y) => {
          const { data: e } = await M(
            q.public.apiBaseurl + "passcost/delete/" + y,
            {
              onRequest({ request: m, options: r }) {},
              onRequestError({ request: m, options: r, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: m, response: r, options: t }) {
                I.value = {
                  text: "Errore cancellazione tranche",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: m, response: r, options: t }) {
                (I.value = {
                  text: "Costo eliminato",
                  type: "success",
                  show: !0,
                }),
                  J();
              },
            },
          );
        },
        Z = () => {
          O.value = w.value.id;
        };
      function ee() {
        h.value = window.innerWidth <= 960;
      }
      const J = async () => {
        localStorage.setItem("hgfiltrocpdata", D.value), (z.value = []);
        let y = D.value[0].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          e = D.value[1].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          m = { from: y, to: e, tag: C.value, type: E.value };
        console.log(m);
        try {
          const { data: r, status: t } = await M(
            q.public.apiBaseurl + "passcost/list",
            { method: "POST", body: m },
          );
          z.value = r;
        } catch (r) {
          console.log(r);
          let t = JSON.parse(r.data).errors.title;
          console.log("catcherr", r.data),
            (I.value = { text: t, type: "danger", show: !0 });
          return;
        }
      };
      return (
        ye(async () => {
          ee(),
            window.addEventListener("resize", ee),
            await v(),
            Z(),
            await J();
        }),
        we(() => {
          window.removeEventListener("resize", ee);
        }),
        (y, e) => {
          const m = Ve,
            r = Ye;
          return (
            g(),
            X("div", Je, [
              d("div", Ge, [
                e[21] || (e[21] = d("br", null, null, -1)),
                e[22] ||
                  (e[22] = d(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Costi",
                    -1,
                  )),
                d("div", Xe, [
                  n(w).hasinvoice == 1
                    ? (g(),
                      x(
                        $,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => a(0)),
                          color: "green",
                        },
                        {
                          default: l(() => [
                            o(U, null, {
                              default: l(() => [
                                ...(e[6] || (e[6] = [f("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[7] || (e[7] = f("Nuovo Costo", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : k("", !0),
                  o(
                    $,
                    { class: "ml-3", color: "primary", onClick: S },
                    {
                      default: l(() => [
                        o(
                          U,
                          { class: "mr-3" },
                          {
                            default: l(() => [
                              ...(e[8] || (e[8] = [f("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[9] || (e[9] = f(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[23] ||
                  (e[23] = d("div", { style: { clear: "both" } }, null, -1)),
                o(
                  be,
                  { "no-gutters": "" },
                  {
                    default: l(() => [
                      o(
                        b,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: l(() => [
                            e[10] ||
                              (e[10] = d(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Tipo",
                                -1,
                              )),
                            o(
                              B,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: n(E),
                                "onUpdate:modelValue":
                                  e[1] ||
                                  (e[1] = (t) => (T(E) ? (E.value = t) : null)),
                                items: W,
                                variant: "outlined",
                                "item-title": "label",
                                "item-value": "value",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      o(
                        b,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: l(() => [
                            e[11] ||
                              (e[11] = d(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Tag",
                                -1,
                              )),
                            o(
                              B,
                              {
                                class: "ma-2",
                                density: "compact",
                                modelValue: n(C),
                                "onUpdate:modelValue":
                                  e[2] ||
                                  (e[2] = (t) => (T(C) ? (C.value = t) : null)),
                                items: n(P),
                                variant: "outlined",
                                "item-title": "label",
                                "item-value": "value",
                                clearable: "",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      o(
                        b,
                        { cols: "12", sm: "12", md: "5" },
                        {
                          default: l(() => [
                            e[12] ||
                              (e[12] = d(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Data",
                                -1,
                              )),
                            o(
                              n(qe),
                              {
                                modelValue: n(D),
                                "onUpdate:modelValue":
                                  e[3] ||
                                  (e[3] = (t) => (T(D) ? (D.value = t) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": n($e),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": n(H),
                                clearable: !1,
                              },
                              {
                                "preset-date-range-button": l(
                                  ({ label: t, value: c, presetDate: p }) => [
                                    d(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (ne) => p(c),
                                        onKeyup: [
                                          A(
                                            oe((ne) => p(c), ["prevent"]),
                                            ["enter"],
                                          ),
                                          A(
                                            oe((ne) => p(c), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      G(t),
                                      41,
                                      He,
                                    ),
                                  ],
                                ),
                                _: 1,
                              },
                              8,
                              ["modelValue", "format-locale", "preset-dates"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      o(
                        b,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: l(() => [
                            o(
                              $,
                              {
                                class: "ma-2 mt-8",
                                onClick: e[4] || (e[4] = (t) => J()),
                              },
                              {
                                default: l(() => [
                                  o(U, null, {
                                    default: l(() => [
                                      ...(e[13] ||
                                        (e[13] = [f("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  e[14] || (e[14] = f("Cerca", -1)),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                o(
                  Ie,
                  {
                    density: "compact",
                    items: n(z),
                    headers: Q,
                    search: n(i),
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
                    top: l(() => [
                      o(
                        ze,
                        {
                          modelValue: n(i),
                          "onUpdate:modelValue":
                            e[5] ||
                            (e[5] = (t) => (T(i) ? (i.value = t) : null)),
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
                    "item.type": l(({ item: t }) => [
                      o(
                        le,
                        {
                          color:
                            t.type == "F"
                              ? "purple"
                              : t.type == "P"
                                ? "blue"
                                : "orange",
                          variant: "elevated",
                          label: "",
                          size: "small",
                          class: "pa-3 mr-3",
                        },
                        {
                          default: l(() => [
                            f(
                              G(
                                t.type == "F"
                                  ? "FIsso"
                                  : t.type == "P"
                                    ? "Personale"
                                    : "Variabile",
                              ),
                              1,
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["color"],
                      ),
                    ]),
                    "item.taxable": l(({ item: t }) => [
                      d(
                        "span",
                        null,
                        G(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.taxable),
                        ),
                        1,
                      ),
                    ]),
                    "item.payment_date": l(({ item: t }) => [
                      t.payment_date !== null &&
                      t.payment_date !== void 0 &&
                      t.payment_date !== ""
                        ? (g(),
                          X(
                            "span",
                            We,
                            G(
                              new Date(t.payment_date).toLocaleDateString(
                                "it-IT",
                              ),
                            ),
                            1,
                          ))
                        : k("", !0),
                    ]),
                    "item.payed": l(({ item: t }) => [
                      t.payed == "P"
                        ? (g(),
                          x(
                            le,
                            {
                              key: 0,
                              color: "green",
                              label: "",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[15] || (e[15] = [f(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : k("", !0),
                      t.payed == "N"
                        ? (g(),
                          x(
                            le,
                            {
                              key: 1,
                              color: "red",
                              label: "",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[16] || (e[16] = [f(" Non Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : k("", !0),
                    ]),
                    "item.actions": l(({ item: t }) => [
                      o(
                        Se,
                        { "offset-y": "" },
                        {
                          activator: l(({ props: c }) => [
                            o(
                              $,
                              xe(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                c,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: l(() => [
                            d("div", he, [
                              o(
                                Te,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: l(() => [
                                    n(w).hasinvoice == 1
                                      ? (g(),
                                        x(
                                          te,
                                          {
                                            key: 0,
                                            onClick: (c) => a(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              o(
                                                U,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[17] ||
                                                      (e[17] = [
                                                        f("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              o(
                                                ae,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[18] ||
                                                      (e[18] = [
                                                        f("Modifica", -1),
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
                                      : (g(),
                                        x(
                                          te,
                                          {
                                            key: 1,
                                            onClick: (c) => a(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              o(
                                                U,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[19] ||
                                                      (e[19] = [
                                                        f("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              o(
                                                ae,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[20] ||
                                                      (e[20] = [
                                                        f("Visualizza", -1),
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
                                    n(w).hasinvoice == 1
                                      ? (g(),
                                        x(
                                          te,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: l(() => [
                                              o(
                                                ae,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    o(
                                                      m,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (c) =>
                                                          Y(t.id),
                                                        iconadelete: n(F),
                                                        color: "red",
                                                        text: "Vuoi veramente eliminare  il costo selezionato?",
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
                                      : k("", !0),
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
                n(R)
                  ? (g(),
                    x(
                      r,
                      {
                        key: 0,
                        projects: y.projects,
                        dialoginsmod: n(R),
                        idrec: n(K),
                        onClose: s,
                        suppliers: y.suppliers,
                      },
                      null,
                      8,
                      ["projects", "dialoginsmod", "idrec", "suppliers"],
                    ))
                  : k("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { zt as default };
