import { _ as Te } from "./ClyIuovc.js";
import {
  E as Ne,
  u as qe,
  F as Ie,
  r as c,
  G as je,
  o as Pe,
  J as D,
  y,
  C as o,
  z as m,
  x as pe,
  K as x,
  B as r,
  N as ne,
  M as O,
  L as l,
  D as v,
  A as I,
  n as ze,
  e as _e,
  O as Ve,
  P as $e,
} from "./CYsiv7Qj.js";
import { $ as C } from "./BvG7V8Ak.js";
import { V as Ae } from "./MIubIMrV.js";
import { V as Re, a as V } from "./Bj0ZT2dB.js";
import { V as W } from "./DCAzZvgN.js";
import { V as ke } from "./Bx6RXzqb.js";
import { V as De } from "./Da5kZyhM.js";
import { V as xe } from "./B51noTYL.js";
import { V as Y, a as J } from "./B_W9U9Wp.js";
import { V as Ce } from "./BqujDEEl.js";
import { V as Me } from "./Dlfzj7mx.js";
import { x as L } from "./D16A7lth.js";
import { V as Ue } from "./B_hTT4u_.js";
import { u as Fe } from "./LKQL6vAN.js";
import { V as Be } from "./ss-1h9Hv.js";
import { V as Le, a as Oe, b as ue, c as de } from "./CxBYvc7u.js";
import { V as oe } from "./Cv1q1CuH.js";
import { V as Ye } from "./BrCrqdgZ.js";
import { s as Ee, a as Ke, e as Ge, b as Se } from "./B5S3s6V6.js";
import { e as he } from "./DRW0ieNg.js";
import { i as Je } from "./BIFx5Ami.js";
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
const We = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Xe = { key: 0, class: "pb-10 pageh2" },
  He = { key: 1, class: "pb-10 pageh2" },
  Qe = { class: "d-flex justify-center" },
  Ze = { class: "d-flex justify-center" },
  et = { class: "d-flex justify-center" },
  tt = { class: "d-flex justify-center" },
  at = { class: "d-flex justify-center" },
  lt = { style: { display: "flex" } },
  ot = {
    __name: "DialogInsModAdminPayTranche",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      projects: Array,
      aryclients: Array,
      arypclients: Array,
      arysponsorptype: Array,
    },
    emits: ["close"],
    setup(se, { emit: z }) {
      const { data: k } = Ne(),
        R = qe(),
        ce = Ie(),
        M = ze(),
        we = z,
        E = se,
        X = c(!0),
        b = c("30"),
        S = [
          { value: null, label: "Personalizzata" },
          { value: "0", label: "Data fattura" },
          { value: "30", label: "30 gg" },
          { value: "30fm", label: "30 gg f.m." },
          { value: "45", label: "45 gg" },
          { value: "60", label: "60 gg" },
          { value: "60fm", label: "60 gg f.m." },
          { value: "75", label: "75 gg" },
          { value: "90", label: "90 gg" },
          { value: "90fm", label: "90 gg f.m." },
          { value: "120", label: "120 gg" },
        ],
        T = c([]),
        h = c(!1),
        j = c(!1),
        N = je("snackbar"),
        H = c(0),
        Q = c(0),
        P = c([]),
        _ = c([]),
        s = c({
          id: 0,
          type: "A",
          percent: 0,
          total: 0,
          previewdate: "",
          paymentdate: "",
          payed: "N",
          description: "",
          note: "",
          sponsor_id: null,
        }),
        w = c({ value: 22, label: "22%" }),
        U = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        $ = c([(n) => !!n || "Campo obbligatorio"]),
        K = c(null),
        me = [
          { label: "Anticipo", value: "A" },
          { label: "Intermedio", value: "I" },
          { label: "Saldo", value: "S" },
        ],
        Z = c(null),
        ve = (n) => {
          n.target.tagName !== "TEXTAREA" && (n.preventDefault(), save());
        };
      function F() {
        w.value.value != null &&
          (s.value.total == null || s.value.total == 0 || s.value.total == null
            ? (s.value.vat = 0)
            : (s.value.vat = (s.value.total * w.value.value) / 100));
      }
      function fe() {
        K.value == "a" && R.push({ path: "/scadenziario", query: {} }),
          K.value == "fa" &&
            R.push({ path: "/scadenziariofattureattive", query: {} });
      }
      function ye() {
        R.push({
          path: "/adminactiveinvoices",
          query: {
            trancheid: E.idrec,
            projectid: s.value.project_id,
            sc: K.value,
          },
        });
      }
      const ge = async () => {
        X.value = !1;
        const n = new Date(s.value.previewdate),
          e = n.getFullYear(),
          a = String(n.getMonth() + 1).padStart(2, "0"),
          i = String(n.getDate()).padStart(2, "0");
        s.value.previewdate = `${e}-${a}-${i}`;
        const u = new Date(s.value.paymentdate),
          d = u.getFullYear(),
          g = String(u.getMonth() + 1).padStart(2, "0"),
          ae = String(u.getDate()).padStart(2, "0");
        s.value.paymentdate = `${d}-${g}-${ae}`;
        let q = { tranche: s.value };
        await C(M.public.apiBaseurl + "invoice/tranchecreateedit", {
          method: "POST",
          body: q,
        })
          .then(() => {
            E.idrec == 0
              ? (N.value = {
                  text: "Creazione tranche completata",
                  type: "success",
                  show: !0,
                })
              : (N.value = {
                  text: "Modifica tranche completata",
                  type: "success",
                  show: !0,
                }),
              ee(),
              (X.value = !0);
          })
          .catch((A) => {
            let B = JSON.parse(A.data).errors.title;
            console.log("catcherr", A.data),
              (N.value = { text: B, type: "danger", show: !0 }),
              (X.value = !0);
          });
      };
      function ee() {
        we("close"), fe();
      }
      const te = async () => {
        if (E.idrec > 0) {
          const { data: n } = await C(
            M.public.apiBaseurl + "invoice/trancheget/" + E.idrec,
            {
              onRequestError({ request: i, options: u, error: d }) {
                console.log("Errore nella request:", d),
                  (N.value = {
                    text: "Errore: " + d,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: i, response: u, options: d }) {
                console.log(
                  "Errore nella response: " + u._data.error.messages[0],
                ),
                  (N.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
            },
          );
          s.value = n;
          const e = (s.value.vat / s.value.total) * 100,
            a = U.find((i) => i.value === e);
          (w.value = a || U[0]),
            (b.value = be(s.value.previewdate, s.value.paymentdate)),
            s.value.sponsor_id == 0 && (s.value.sponsor_id = null),
            await ie(1);
        }
      };
      function G() {
        (b.value =
          s.value.sponsor_id == null
            ? Z.value
            : E.arysponsorptype[_.value[s.value.sponsor_id]]),
          p();
      }
      function re(n) {
        if (n.key === ".") {
          n.preventDefault();
          const e = n.target,
            a = e.selectionStart,
            i = e.selectionEnd,
            u = e.value;
          (e.value = u.substring(0, a) + "," + u.substring(i)),
            e.setSelectionRange(a + 1, a + 1),
            e.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      function be(n, e) {
        const a = [
          null,
          "0",
          "30",
          "30fm",
          "45",
          "60",
          "60fm",
          "75",
          "90",
          "90fm",
          "120",
        ];
        for (const i of a) {
          const u = new Date(n);
          if (i !== null) {
            if (i.endsWith("fm")) {
              const d = parseInt(i, 10) / 30;
              u.setDate(1), u.setMonth(u.getMonth() + d + 1), u.setDate(0);
            } else u.setDate(u.getDate() + parseInt(i));
            if (new Date(u).toDateString() === new Date(e).toDateString())
              return i;
          }
        }
        return null;
      }
      const ie = async (n) => {
          E.idrec == 0 && (s.value.sponsor_id = null), await t(n), await f();
        },
        f = async () => {
          (P.value = []), (_.value = []);
          const { data: n } = await C(
            M.public.apiBaseurl + "project/getsponsors/" + s.value.project_id,
            {
              onRequest({ request: e, options: a }) {},
              onRequestError({ request: e, options: a, error: i }) {
                console.log("Errore nella request:", i),
                  (N.value = {
                    text: "Errore: " + i,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: a, options: i }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (N.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: a, options: i }) {
                a._data.data.forEach((d) => {
                  P.value.push({
                    label: E.aryclients[d.client_id],
                    value: d.id,
                  }),
                    (_.value[d.id] = d.client_id);
                });
              },
            },
          );
        },
        t = async (n) => {
          const { data: e } = await C(
            M.public.apiBaseurl +
              "project/gettotalproject/" +
              s.value.project_id,
            {
              onRequest({ request: a, options: i }) {},
              onRequestError({ request: a, options: i, error: u }) {
                console.log("Errore nella request:", u),
                  (N.value = {
                    text: "Errore: " + u,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: a, response: i, options: u }) {
                console.log(
                  "Errore nella response: " + i._data.error.messages[0],
                ),
                  (N.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: a, response: i, options: u }) {
                (H.value = i._data.data.totalep),
                  (Q.value = i._data.data.newtotaleproposta),
                  n != 1 &&
                    ((b.value = i._data.data.paymenttype),
                    (Z.value = i._data.data.paymenttype));
              },
            },
          );
        };
      function p() {
        if (b.value != null)
          if (s.value.previewdate == null || s.value.previewdate == null)
            s.value.paymentdate = null;
          else {
            const n = new Date(s.value.previewdate);
            if (b.value.endsWith("fm")) {
              const e = parseInt(b.value, 10) / 30;
              n.setDate(1), n.setMonth(n.getMonth() + e + 1), n.setDate(0);
            } else n.setDate(n.getDate() + parseInt(b.value));
            s.value.paymentdate = n;
          }
      }
      return (
        Pe(async () => {
          (h.value = !0),
            (K.value = ce.query.sc),
            await te(),
            E.projects.forEach((n) => {
              E.idrec == 0
                ? n.status == "A" &&
                  n.openstatus == "A" &&
                  E.idrec == 0 &&
                  T.value.push({ label: n.label, value: n.value })
                : T.value.push({ label: n.label, value: n.value });
            });
        }),
        (n, e) => (
          y(),
          D(
            Me,
            {
              class: "modaldialog",
              onAfterLeave: ee,
              modelValue: l(h),
              "onUpdate:modelValue":
                e[21] || (e[21] = (a) => (O(h) ? (h.value = a) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                m("div", We, [
                  se.idrec == 0
                    ? (y(), pe("h2", Xe, "Nuova tranche di pagamento"))
                    : x("", !0),
                  se.idrec > 0
                    ? (y(), pe("h2", He, "Modifica tranche di pagamento"))
                    : x("", !0),
                  r(
                    Ae,
                    {
                      modelValue: l(j),
                      "onUpdate:modelValue":
                        e[19] || (e[19] = (a) => (O(j) ? (j.value = a) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown: ne(ve, ["enter"]),
                    },
                    {
                      default: o(() => [
                        r(Re, null, {
                          default: o(() => [
                            r(
                              V,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    W,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(s).project_id,
                                      "onUpdate:modelValue": [
                                        e[0] ||
                                          (e[0] = (a) => (l(s).project_id = a)),
                                        e[1] || (e[1] = (a) => ie(0)),
                                      ],
                                      label: "Progetto*",
                                      rules: l($),
                                      items: l(T),
                                      readonly: l(k).hasinvoice == 0,
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
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    W,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(s).sponsor_id,
                                      "onUpdate:modelValue": [
                                        e[2] ||
                                          (e[2] = (a) => (l(s).sponsor_id = a)),
                                        e[3] || (e[3] = (a) => G()),
                                      ],
                                      label: "Sponsor",
                                      items: l(P),
                                      clearable: "",
                                      disabled: l(P).length == 0,
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "items", "disabled"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  m("div", Qe, [
                                    r(
                                      W,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(s).type,
                                        "onUpdate:modelValue":
                                          e[4] ||
                                          (e[4] = (a) => (l(s).type = a)),
                                        label: "Tipo*",
                                        rules: l($),
                                        items: me,
                                        density: "compact",
                                        readonly: l(k).hasinvoice == 0,
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
                            l(s).project_id > 0
                              ? (y(),
                                D(
                                  V,
                                  {
                                    key: 0,
                                    cols: "12",
                                    sm: "12",
                                    class: "pt-0 pb-5 mt-0",
                                  },
                                  {
                                    default: o(() => [
                                      e[22] ||
                                        (e[22] = m(
                                          "b",
                                          null,
                                          "Totale Progetto:",
                                          -1,
                                        )),
                                      v(
                                        " " +
                                          I(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(l(Q) != 0 ? l(Q) : l(H)),
                                          ) +
                                          " ",
                                        1,
                                      ),
                                      e[23] ||
                                        (e[23] = m(
                                          "b",
                                          null,
                                          "Cliente Progetto:",
                                          -1,
                                        )),
                                      v(
                                        " " + I(E.arypclients[l(s).project_id]),
                                        1,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : x("", !0),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    ke,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[5] ||
                                          (e[5] = ne(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        re,
                                      ],
                                      modelValue: l(s).total,
                                      "onUpdate:modelValue": [
                                        e[6] ||
                                          (e[6] = (a) => (l(s).total = a)),
                                        e[7] || (e[7] = (a) => F()),
                                      ],
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Imponibile",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly: l(k).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    W,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(w),
                                      "onUpdate:modelValue": [
                                        e[8] ||
                                          (e[8] = (a) =>
                                            O(w) ? (w.value = a) : null),
                                        e[9] || (e[9] = (a) => F()),
                                      ],
                                      label: "% Iva*",
                                      items: U,
                                      readonly: l(k).hasinvoice == 0,
                                      density: "compact",
                                      "return-object": "",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    ke,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[10] ||
                                          (e[10] = ne(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        re,
                                      ],
                                      modelValue: l(s).vat,
                                      "onUpdate:modelValue":
                                        e[11] ||
                                        (e[11] = (a) => (l(s).vat = a)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Iva",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly:
                                        l(k).hasinvoice == 0 ||
                                        l(w).value != null,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  m("div", Ze, [
                                    r(
                                      De,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(s).previewdate,
                                        "onUpdate:modelValue": [
                                          e[12] ||
                                            (e[12] = (a) =>
                                              (l(s).previewdate = a)),
                                          e[13] || (e[13] = (a) => p()),
                                        ],
                                        label: "Data prev. emissione fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        rules: l($),
                                        readonly: l(k).hasinvoice == 0,
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
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  r(
                                    W,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(b),
                                      "onUpdate:modelValue": [
                                        e[14] ||
                                          (e[14] = (a) =>
                                            O(b) ? (b.value = a) : null),
                                        e[15] || (e[15] = (a) => p()),
                                      ],
                                      label: "Tipo pagamento*",
                                      items: S,
                                      readonly: l(k).hasinvoice == 0,
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            r(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  m("div", et, [
                                    r(
                                      De,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(s).paymentdate,
                                        "onUpdate:modelValue":
                                          e[16] ||
                                          (e[16] = (a) =>
                                            (l(s).paymentdate = a)),
                                        label: "Data prev. pagamento fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        rules: l($),
                                        readonly:
                                          l(k).hasinvoice == 0 || l(b) != null,
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
                            r(
                              V,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  m("div", tt, [
                                    r(
                                      xe,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(s).description,
                                        "onUpdate:modelValue":
                                          e[17] ||
                                          (e[17] = (a) =>
                                            (l(s).description = a)),
                                        label: "Milestone",
                                        density: "compact",
                                        readonly: l(k).hasinvoice == 0,
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
                            r(
                              V,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: o(() => [
                                  m("div", at, [
                                    r(
                                      xe,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(s).note,
                                        "onUpdate:modelValue":
                                          e[18] ||
                                          (e[18] = (a) => (l(s).note = a)),
                                        label: "Note",
                                        density: "compact",
                                        readonly: l(k).hasinvoice == 0,
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
                  e[27] || (e[27] = m("br", null, null, -1)),
                  m("div", lt, [
                    r(
                      Y,
                      { class: "", onClick: ee, color: "red" },
                      {
                        default: o(() => [
                          ...(e[24] || (e[24] = [v(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    r(Ce),
                    l(k).hasinvoice == 1 && E.idrec > 0
                      ? (y(),
                        D(
                          Y,
                          {
                            key: 0,
                            onClick: e[20] || (e[20] = (a) => ye()),
                            class: "mr-4",
                            color: "blue",
                          },
                          {
                            default: o(() => [
                              ...(e[25] || (e[25] = [v("GENERA FATTURA", -1)])),
                            ]),
                            _: 1,
                          },
                        ))
                      : x("", !0),
                    l(k).hasinvoice == 1
                      ? (y(),
                        D(
                          Y,
                          {
                            key: 1,
                            onClick: ge,
                            disabled: !l(j) || !l(X),
                            color: "green",
                          },
                          {
                            default: o(() => [
                              ...(e[26] || (e[26] = [v("Salva", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["disabled"],
                        ))
                      : x("", !0),
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
  nt = { class: "pl-10 pr-10" },
  st = { class: "divcenterpage" },
  rt = { style: { display: "inline", float: "right" } },
  it = ["onClick", "onKeyup"],
  ut = ["title"],
  dt = { key: 0 },
  pt = { class: "mt-4" },
  Yt = {
    __name: "adminpaymenttranches",
    setup(se) {
      const z = c(
          localStorage.getItem("hgfiltrotrdata") != "null" &&
            localStorage.getItem("hgfiltrotrdata") != null
            ? localStorage
                .getItem("hgfiltrotrdata")
                .split(",")
                .map((f) => new Date(f))
            : [
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() - 1,
                  new Date().getDate(),
                ),
                new Date(),
              ],
        ),
        k = c([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [Ee(new Date()), he(new Date())] },
          {
            label: "Mese precedente",
            value: [Ee(Se(new Date(), 1)), he(Se(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Ke(new Date()), Ge(new Date())] },
        ]),
        R = ze(),
        ce = qe(),
        M = Ie(),
        { status: we, signIn: E, signOut: X, data: b } = Ne(),
        S = c([]),
        T = c(""),
        h = je("snackbar"),
        j = c(!1),
        N = c(0),
        H = c(0),
        Q = c(!0),
        P = c([]),
        _ = c([]),
        s = c([]),
        w = c(
          localStorage.getItem("hgfiltrotrproject") != "null" &&
            localStorage.getItem("hgfiltrotrproject") != null
            ? parseInt(localStorage.getItem("hgfiltrotrproject"))
            : null,
        );
      c(!1);
      const U = c([]),
        $ = c([]),
        K = c(!1),
        me = [
          { title: "Progetto", key: "project_id", sortable: !1 },
          { title: "Cliente", key: "cliente", sortable: !0 },
          { title: "Sponsor", key: "sp", sortable: !0 },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          {
            title: "Milestone",
            key: "description",
            sortable: !0,
            align: "left",
          },
          {
            title: "Data Prev. Emissione",
            key: "previewdate",
            sortable: !0,
            align: "left",
          },
          {
            title: "Emessa Fattura",
            key: "emessa",
            sortable: !0,
            align: "left",
          },
          {
            title: "Data Prev. Pagamento",
            key: "paymentdate",
            sortable: !0,
            align: "left",
          },
          { title: "Imponibile", key: "total", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        Z = [
          { title: "Progetto", key: "project_id" },
          { title: "Cliente", key: "cliente" },
          { title: "Sponsor", key: "sp" },
          { title: "Tipo", key: "type" },
          { title: "Milestone", key: "description" },
          { title: "Data Prev. Emissione", key: "previewdate" },
          { title: "Data Prev. Pagamento", key: "paymentdate" },
          {
            title: "Emessa Fattura",
            key: "emessa",
            sortable: !0,
            align: "left",
          },
          {
            title: "Data Emissione Fattura",
            key: "invoicedate",
            sortable: !0,
            align: "left",
          },
          { title: "Imponibile", key: "total" },
          { title: "IVA", key: "vat" },
          { title: "Note", key: "description" },
        ];
      Fe({
        title: "Tranche di pagamento",
        meta: [{ name: "description", content: "Tranche di pagamento" }],
      });
      const ve = ({ item: f }) => {
        const t = new Date(),
          p =
            t.getFullYear() +
            "-" +
            String(t.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(t.getDate()).padStart(2, "0");
        return f.payed == "N" && f.paymentdate < p ? {} : {};
      };
      function F(f) {
        (H.value = parseInt(f)), (j.value = !0);
      }
      const fe = async () => {
        (j.value = !1), await G();
      };
      function ye() {
        const f = S.value.map((i) => {
            const u = {};
            return (
              Z.forEach((d) => {
                if (d.title == "Progetto")
                  u[d.title] = i[d.key] ? _.value[i[d.key]] : "";
                else if (
                  d.title == "Data Prev. Emissione" ||
                  d.title == "Data Prev. Pagamento" ||
                  d.title == "Data Emissione Fattura"
                ) {
                  let g = i[d.key];
                  if (g != null && g !== "" && g !== "0000-00-00") {
                    g = String(g).trim();
                    let ae;
                    if (g.includes("-")) {
                      const q = g.split("-");
                      if (q.length === 3) {
                        const A = Number(q[0]),
                          B = Number(q[1]),
                          le = Number(q[2]);
                        !isNaN(A) &&
                          !isNaN(B) &&
                          !isNaN(le) &&
                          (ae = new Date(A, B - 1, le));
                      }
                    } else if (g.includes("/")) {
                      const q = g.split("/");
                      if (q.length === 3) {
                        const A = Number(q[0]),
                          B = Number(q[1]),
                          le = Number(q[2]);
                        !isNaN(le) &&
                          !isNaN(B) &&
                          !isNaN(A) &&
                          (ae = new Date(le, B - 1, A));
                      }
                    }
                    u[d.title] = ae ?? "";
                  } else u[d.title] = "";
                } else
                  d.title == "Tipo"
                    ? (u[d.title] =
                        i[d.key] == "A"
                          ? "Anticipo"
                          : i[d.key] == "S"
                            ? "Saldo"
                            : "Intermedia")
                    : d.title == "Emessa Fattura"
                      ? (u[d.title] = i[d.key] == 0 ? "No" : "Si")
                      : d.title == "Pagata"
                        ? (u[d.title] = i[d.key] == "N" ? "No" : "Si")
                        : (u[d.title] = i[d.key] ?? "");
              }),
              u
            );
          }),
          t = L.utils.json_to_sheet(f),
          p = L.utils.decode_range(t["!ref"]);
        t["!cols"] = [
          { wch: 60 },
          { wch: 15 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
        ];
        for (let i = p.s.c; i <= p.e.c; i++) {
          const u = L.utils.encode_cell({ r: 0, c: i });
          t[u] && (t[u].s = { font: { bold: !0 } });
        }
        const n = Z.map((i) => i.title),
          e = ["Data Prev. Emissione ", "Data Prev. Pagamento"];
        for (const i of e) {
          const u = n.indexOf(i);
          if (u >= 0)
            for (let d = 1; d <= p.e.r; d++) {
              const g = L.utils.encode_cell({ r: d, c: u });
              t[g] &&
                t[g].v instanceof Date &&
                ((t[g].t = "d"), (t[g].z = "dd/mm/yyyy"));
            }
        }
        const a = L.utils.book_new();
        L.utils.book_append_sheet(a, t, "Tranches"),
          L.writeFile(a, "export-tranches.xlsx");
      }
      const ge = async (f) => {
          const { data: t } = await C(
            R.public.apiBaseurl + "invoice/tranchedelete/" + f,
            {
              onRequest({ request: p, options: n }) {},
              onRequestError({ request: p, options: n, error: e }) {
                console.log("Errore nella request:", e);
              },
              onResponseError({ request: p, response: n, options: e }) {
                h.value = {
                  text: "Errore cancellazione tranche",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: p, response: n, options: e }) {
                (h.value = {
                  text: "Tranche eliminata",
                  type: "success",
                  show: !0,
                }),
                  G();
              },
            },
          );
        },
        ee = () => {
          N.value = b.value.id;
        };
      function te() {
        K.value = window.innerWidth <= 960;
      }
      const G = async () => {
          localStorage.setItem("hgfiltrotrdata", z.value),
            localStorage.setItem(
              "hgfiltrotrproject",
              w.value != null ? w.value : null,
            ),
            (S.value = []);
          let f = z.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = z.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            p = { project: w.value != null ? w.value : 0, from: f, to: t };
          try {
            const { data: n, status: e } = await C(
              R.public.apiBaseurl + "invoice/tranchelist",
              { method: "POST", body: p },
            );
            S.value = n;
            for (let a = 0; a < S.value.length; a++)
              (S.value[a].cliente = s.value[S.value[a].client_id]),
                (S.value[a].sp =
                  s.value[S.value[a].sponsor] != null
                    ? s.value[S.value[a].sponsor]
                    : "");
          } catch (n) {
            console.log(n);
            let e = JSON.parse(n.data).errors.title;
            console.log("catcherr", n.data),
              (h.value = { text: e, type: "danger", show: !0 });
            return;
          }
        },
        re = async () => {
          (P.value = []), (U.value = []), (_.value = []);
          const { data: f } = await C(R.public.apiBaseurl + "project/list/", {
            onRequest({ request: t, options: p }) {},
            onRequestError({ request: t, options: p, error: n }) {
              console.log("Errore nella request:", n),
                (h.value = { text: "Errore: " + n, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: p, options: n }) {
              console.log(
                "Errore nella response: " + p._data.error.messages[0],
              ),
                (h.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: p, options: n }) {
              p._data.data.forEach((e) => {
                let a =
                  e.contractname != null && e.contractname != ""
                    ? e.contractname
                    : e.name;
                P.value.push({
                  label: "[" + e.code + "] " + a,
                  value: e.id,
                  status: e.status,
                  openstatus: e.openstatus,
                  client: e.clientname,
                }),
                  (_.value[e.id] = "[" + e.code + "] " + a),
                  (U.value[e.id] = e.clientname);
              });
            },
          });
        },
        be = async () => {
          (s.value = []), ($.value = []);
          const { data: f } = C(R.public.apiBaseurl + "client/list", {
            onRequest({ request: t, options: p }) {},
            onRequestError({ request: t, options: p, error: n }) {
              console.log("Errore nella request:", n);
            },
            onResponseError({ request: t, response: p, options: n }) {
              h.value = {
                text: "Errore caricamento clienti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: p, options: n }) {
              p._data.data.forEach((e) => {
                (s.value[e.id] = e.name), ($.value[e.id] = e.paymenttype);
              });
            },
          });
        };
      function ie(f, t) {
        const p = ce.resolve({
          path: "/adminactiveinvoices",
          query: { trancheid: f, projectid: t },
        });
        window.open(p.href, "_blank");
      }
      return (
        Pe(async () => {
          te(),
            window.addEventListener("resize", te),
            await be(),
            await re(),
            ee(),
            await G(),
            M.query.id != null && F(M.query.id);
        }),
        _e(() => {
          window.removeEventListener("resize", te);
        }),
        (f, t) => {
          const p = Te,
            n = ot;
          return (
            y(),
            pe("div", nt, [
              m("div", st, [
                t[24] || (t[24] = m("br", null, null, -1)),
                t[25] ||
                  (t[25] = m(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Tranche di pagamento",
                    -1,
                  )),
                m("div", rt, [
                  l(b).hasinvoice == 1
                    ? (y(),
                      D(
                        Y,
                        {
                          key: 0,
                          onClick: t[0] || (t[0] = (e) => F(0)),
                          color: "green",
                        },
                        {
                          default: o(() => [
                            r(J, null, {
                              default: o(() => [
                                ...(t[5] || (t[5] = [v("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            t[6] || (t[6] = v("Nuova Tranche", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : x("", !0),
                  r(
                    Y,
                    { class: "ml-3", color: "primary", onClick: ye },
                    {
                      default: o(() => [
                        r(
                          J,
                          { class: "mr-3" },
                          {
                            default: o(() => [
                              ...(t[7] || (t[7] = [v("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        t[8] || (t[8] = v(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[26] ||
                  (t[26] = m("div", { style: { clear: "both" } }, null, -1)),
                r(
                  Re,
                  { "no-gutters": "" },
                  {
                    default: o(() => [
                      r(
                        V,
                        { cols: "12", sm: "12", md: "6" },
                        {
                          default: o(() => [
                            t[9] ||
                              (t[9] = m(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Progetto",
                                -1,
                              )),
                            r(
                              W,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: l(w),
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = (e) => (O(w) ? (w.value = e) : null)),
                                items: l(P),
                                variant: "outlined",
                                "item-title": "label",
                                "item-value": "value",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      r(
                        V,
                        { cols: "12", sm: "12", md: "5" },
                        {
                          default: o(() => [
                            t[10] ||
                              (t[10] = m(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Data Scadenza",
                                -1,
                              )),
                            r(
                              l(Ue),
                              {
                                modelValue: l(z),
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = (e) => (O(z) ? (z.value = e) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": l(Je),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": l(k),
                                clearable: !1,
                              },
                              {
                                "preset-date-range-button": o(
                                  ({ label: e, value: a, presetDate: i }) => [
                                    m(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (u) => i(a),
                                        onKeyup: [
                                          ne(
                                            Ve((u) => i(a), ["prevent"]),
                                            ["enter"],
                                          ),
                                          ne(
                                            Ve((u) => i(a), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      I(e),
                                      41,
                                      it,
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
                      r(
                        V,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: o(() => [
                            r(
                              Y,
                              {
                                class: "ma-2 mt-8",
                                onClick: t[3] || (t[3] = (e) => G()),
                              },
                              {
                                default: o(() => [
                                  r(J, null, {
                                    default: o(() => [
                                      ...(t[11] ||
                                        (t[11] = [v("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  t[12] || (t[12] = v("Cerca", -1)),
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
                r(
                  Be,
                  {
                    density: "compact",
                    items: l(S),
                    headers: me,
                    search: l(T),
                    "items-per-page": -1,
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
                    "row-props": ve,
                  },
                  {
                    top: o(() => [
                      r(
                        Ye,
                        {
                          modelValue: l(T),
                          "onUpdate:modelValue":
                            t[4] ||
                            (t[4] = (e) => (O(T) ? (T.value = e) : null)),
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
                    "item.project_id": o(({ item: e }) => [
                      m("span", { title: e.id }, I(l(_)[e.project_id]), 9, ut),
                    ]),
                    "item.sponsor": o(({ item: e }) => [
                      m("span", null, I(l(s)[e.sponsor]), 1),
                    ]),
                    "item.client_id": o(({ item: e }) => [
                      m("span", null, I(l(s)[e.client_id]), 1),
                    ]),
                    "item.total": o(({ item: e }) => [
                      m(
                        "span",
                        null,
                        I(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.percent": o(({ item: e }) => [
                      m(
                        "span",
                        null,
                        I(
                          new Intl.NumberFormat("it-IT", {
                            useGrouping: !0,
                          }).format(e.percent),
                        ) + "%",
                        1,
                      ),
                    ]),
                    "item.previewdate": o(({ item: e }) => [
                      m(
                        "span",
                        null,
                        I(new Date(e.previewdate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentdate": o(({ item: e }) => [
                      m(
                        "span",
                        null,
                        I(new Date(e.paymentdate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.emessa": o(({ item: e }) => [
                      e.invoicedate != null
                        ? (y(),
                          pe(
                            "span",
                            dt,
                            I(
                              new Date(e.invoicedate).toLocaleDateString(
                                "it-IT",
                              ),
                            ),
                            1,
                          ))
                        : x("", !0),
                    ]),
                    "item.type": o(({ item: e }) => [
                      e.type == "A"
                        ? (y(),
                          D(
                            oe,
                            {
                              key: 0,
                              label: "",
                              color: "grey",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(t[13] || (t[13] = [v(" Anticipo ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : x("", !0),
                      e.type == "I"
                        ? (y(),
                          D(
                            oe,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(t[14] || (t[14] = [v(" Intermedia ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : x("", !0),
                      e.type == "S"
                        ? (y(),
                          D(
                            oe,
                            {
                              key: 2,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(t[15] || (t[15] = [v(" Saldo ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : x("", !0),
                    ]),
                    "item.payed": o(({ item: e }) => [
                      e.payed == "P"
                        ? (y(),
                          D(
                            oe,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(t[16] || (t[16] = [v(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : x("", !0),
                      e.payed == "N"
                        ? (y(),
                          D(
                            oe,
                            {
                              key: 1,
                              label: "",
                              color: "red",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: o(() => [
                                ...(t[17] || (t[17] = [v(" Non Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : x("", !0),
                    ]),
                    "item.actions": o(({ item: e }) => [
                      r(
                        Le,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: a }) => [
                            r(
                              Y,
                              $e(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                a,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            m("div", pt, [
                              r(
                                Oe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    l(b).hasinvoice == 1
                                      ? (y(),
                                        D(
                                          ue,
                                          {
                                            key: 0,
                                            onClick: (a) => F(e.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              r(
                                                J,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(t[18] ||
                                                      (t[18] = [
                                                        v("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              r(
                                                de,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(t[19] ||
                                                      (t[19] = [
                                                        v("Modifica", -1),
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
                                      : (y(),
                                        D(
                                          ue,
                                          {
                                            key: 1,
                                            onClick: (a) => F(e.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              r(
                                                J,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(t[20] ||
                                                      (t[20] = [
                                                        v("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              r(
                                                de,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(t[21] ||
                                                      (t[21] = [
                                                        v("Visualizza", -1),
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
                                    r(
                                      ue,
                                      {
                                        onClick: (a) => ie(e.id, e.project_id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          r(
                                            J,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(t[22] ||
                                                  (t[22] = [
                                                    v(
                                                      "mdi-invoice-text-plus-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          r(
                                            de,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(t[23] ||
                                                  (t[23] = [
                                                    v("Genera Fattura", -1),
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
                                    l(b).hasinvoice == 1
                                      ? (y(),
                                        D(
                                          ue,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: o(() => [
                                              r(
                                                de,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    r(
                                                      p,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (a) =>
                                                          ge(e.id),
                                                        iconadelete: l(Q),
                                                        color: "red",
                                                        text: "Vuoi veramente eliminare  la tranche selezionata?",
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
                                      : x("", !0),
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
                l(j)
                  ? (y(),
                    D(
                      n,
                      {
                        key: 0,
                        aryclients: l(s),
                        projects: l(P),
                        dialoginsmod: l(j),
                        idrec: l(H),
                        onClose: fe,
                        arypclients: l(U),
                        arysponsorptype: l($),
                      },
                      null,
                      8,
                      [
                        "aryclients",
                        "projects",
                        "dialoginsmod",
                        "idrec",
                        "arypclients",
                        "arysponsorptype",
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
export { Yt as default };
