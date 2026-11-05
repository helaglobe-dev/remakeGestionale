import { _ as $e } from "./ClyIuovc.js";
import {
  E as De,
  u as Ee,
  F as _e,
  r as p,
  G as he,
  k as Ie,
  o as Ne,
  J as N,
  y as g,
  C as s,
  z as m,
  x as O,
  K as q,
  B as i,
  A as E,
  L as o,
  N as ae,
  M as G,
  Q as Ce,
  R as ze,
  D as w,
  n as Se,
  e as Ae,
  P as Te,
} from "./CYsiv7Qj.js";
import "./B_hTT4u_.js";
import { $ as z } from "./BvG7V8Ak.js";
import { V as Fe } from "./MIubIMrV.js";
import { V as ke, a as V } from "./Bj0ZT2dB.js";
import { V as re } from "./BrCrqdgZ.js";
import { V as ge } from "./Da5kZyhM.js";
import { V as xe } from "./Bx6RXzqb.js";
import { V as le } from "./DCAzZvgN.js";
import { V as Be } from "./CZzf1ihi.js";
import { V as Re, a as Pe, b as be, c as Ve } from "./CxBYvc7u.js";
import { V as Me, a as Ue, c as je } from "./sbneMOUU.js";
import { V as A, a as J } from "./B_W9U9Wp.js";
import { V as Ye } from "./B51noTYL.js";
import { V as Le } from "./BqujDEEl.js";
import { V as Ke } from "./Dlfzj7mx.js";
import { x as K } from "./D16A7lth.js";
import { u as Oe } from "./LKQL6vAN.js";
import { V as Ge } from "./ss-1h9Hv.js";
import { V as qe } from "./Cv1q1CuH.js";
import "./B5S3s6V6.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./D3DeQzvF.js";
import "./CCBmAzgz.js";
import "./fKsYyVgl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
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
  Je = { key: 2, class: "pb-10", style: { color: "red" } },
  Qe = { class: "d-flex justify-center" },
  Ze = { class: "d-flex justify-center" },
  et = { class: "d-flex justify-center" },
  tt = { class: "d-flex justify-center" },
  at = { class: "d-flex justify-center" },
  lt = { class: "d-flex justify-center" },
  ot = { class: "d-flex" },
  nt = { key: 0, class: "d-flex justify-center" },
  st = { key: 0, class: "d-flex justify-center" },
  it = { class: "d-flex justify-center" },
  rt = { style: { display: "flex" } },
  ut = {
    __name: "DialogInsModActInvoice",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      tranches: Array,
      banks: Array,
      pname: String,
      aryclients: Array,
    },
    emits: ["close"],
    setup(oe, { emit: T }) {
      const { data: y } = De(),
        _ = Ee(),
        F = _e(),
        ne = Se(),
        we = T,
        x = oe,
        S = p(!0),
        B = p(0),
        b = p(!1),
        R = p(!1),
        $ = he("snackbar"),
        P = p(!1),
        I = p(null),
        M = new Date().getFullYear(),
        W = p(M),
        ue = [
          { value: 1, label: "Gen" },
          { value: 2, label: "Feb" },
          { value: 3, label: "Mar" },
          { value: 4, label: "Apr" },
          { value: 5, label: "Mag" },
          { value: 6, label: "Giu" },
          { value: 7, label: "Lug" },
          { value: 8, label: "Ago" },
          { value: 9, label: "Set" },
          { value: 10, label: "Ott" },
          { value: 11, label: "Nov" },
          { value: 12, label: "Dic" },
        ],
        X = Ie(() => {
          if (!I.value) return "";
          const [a, e] = I.value.split("-");
          return `${e}-${a}`;
        });
      function H(a) {
        (I.value = `${W.value}-${String(a).padStart(2, "0")}`), (P.value = !1);
      }
      const D = p({ value: 22, label: "22%" }),
        U = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        k = p("30"),
        de = [
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
        j = p(0),
        l = p({ id: 0, payed: "N" }),
        h = p([(a) => !!a || "Campo obbligatorio"]),
        ce = [
          { label: "Pagata", value: "P" },
          { label: "Non pagata", value: "N" },
        ];
      function se(a) {
        if (a.key === ".") {
          a.preventDefault();
          const e = a.target,
            t = e.selectionStart,
            n = e.selectionEnd,
            d = e.value;
          (e.value = d.substring(0, t) + "," + d.substring(n)),
            e.setSelectionRange(t + 1, t + 1),
            e.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      const pe = () => {
        const a = x.tranches.find(
          (e) => e.value === l.value.payment_tranche_id,
        );
        a && ((k.value = a.paymenttype), Q());
      };
      function Y() {
        D.value.value != null &&
          (l.value.taxable == null ||
          l.value.taxable == 0 ||
          l.value.taxable == null
            ? (l.value.vat = 0)
            : (l.value.vat = (l.value.taxable * D.value.value) / 100));
      }
      const me = async () => {
        if (
          ((S.value = !1),
          l.value.payment_date != "" && l.value.payment_date != null)
        ) {
          const u = new Date(l.value.payment_date),
            c = u.getFullYear(),
            r = String(u.getMonth() + 1).padStart(2, "0"),
            v = String(u.getDate()).padStart(2, "0");
          l.value.payment_date = `${c}-${r}-${v}`;
        } else l.value.payment_date = null;
        const a = new Date(l.value.invoicedate),
          e = a.getFullYear(),
          t = String(a.getMonth() + 1).padStart(2, "0"),
          n = String(a.getDate()).padStart(2, "0");
        if (((l.value.invoicedate = `${e}-${t}-${n}`), I.value)) {
          const [u, c] = I.value.split("-");
          l.value.meseannoanticipo = `${c}-${u}`;
        } else l.value.meseannoanticipo = null;
        if (l.value.paymentduedate != "" && l.value.paymentduedate != null) {
          const u = new Date(l.value.paymentduedate),
            c = u.getFullYear(),
            r = String(u.getMonth() + 1).padStart(2, "0"),
            v = String(u.getDate()).padStart(2, "0");
          l.value.paymentduedate = `${c}-${r}-${v}`;
        } else l.value.paymentduedate = null;
        (l.value.anticipobancario = l.value.anticipobancario == !0 ? 1 : 0),
          (l.value.anticipobancario == !1 || l.value.anticipobancario == 0) &&
            ((l.value.percentualeanticipo = 0),
            (l.value.meseannoanticipo = null)),
          (l.value.project_id = F.query.id);
        let d = { invoice: l.value };
        await z(ne.public.apiBaseurl + "invoice/activecreateedit", {
          method: "POST",
          body: d,
        })
          .then(() => {
            x.idrec == 0
              ? ($.value = {
                  text: "Creazione invoice completata",
                  type: "success",
                  show: !0,
                })
              : ($.value = {
                  text: "Modifica invoice completata",
                  type: "success",
                  show: !0,
                }),
              L(),
              (S.value = !0);
          })
          .catch((u) => {
            let c = JSON.parse(u.data).errors.title;
            console.log("catcherr", u.data),
              ($.value = { text: c, type: "danger", show: !0 }),
              (S.value = !0);
          });
      };
      function L() {
        _.replace({ query: { id: j.value } }), we("close");
      }
      const ve = (a) => {
          a.target.tagName !== "TEXTAREA" && (a.preventDefault(), save());
        },
        fe = async () => {
          const { data: a } = await z(
            ne.public.apiBaseurl + "invoice/trancheget/" + F.query.trancheid,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: n }) {
                console.log("Errore nella request:", n),
                  ($.value = {
                    text: "Errore: " + n,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: n }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  ($.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: n }) {
                console.log(t._data.data),
                  (l.value.project_id = parseInt(t._data.data.project_id)),
                  (l.value.payment_tranche_id = parseInt(F.query.trancheid)),
                  (l.value.taxable = t._data.data.total),
                  (l.value.payed = t._data.data.payed),
                  (l.value.invoicedate = t._data.data.previewdate),
                  (l.value.paymentduedate = t._data.data.paymentdate),
                  (B.value = t._data.data.hasinvoice),
                  (k.value = ie(l.value.invoicedate, l.value.paymentduedate)),
                  Y();
              },
            },
          );
        };
      function Q() {
        if (k.value != null)
          if (l.value.invoicedate == null || l.value.invoicedate == null)
            l.value.paymentduedate = null;
          else {
            const a = new Date(l.value.invoicedate);
            if (k.value.endsWith("fm")) {
              const e = parseInt(k.value, 10) / 30;
              a.setDate(1), a.setMonth(a.getMonth() + e + 1), a.setDate(0);
            } else a.setDate(a.getDate() + parseInt(k.value));
            l.value.paymentduedate = a;
          }
      }
      function ie(a, e) {
        const t = [
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
        for (const n of t) {
          const d = new Date(a);
          if (n !== null) {
            if (n.endsWith("fm")) {
              const u = parseInt(n, 10) / 30;
              d.setDate(1), d.setMonth(d.getMonth() + u + 1), d.setDate(0);
            } else d.setDate(d.getDate() + parseInt(n));
            if (new Date(d).toDateString() === new Date(e).toDateString())
              return n;
          }
        }
        return null;
      }
      const f = async () => {
        if (x.idrec > 0) {
          const { data: a } = await z(
            ne.public.apiBaseurl + "invoice/activeget/" + x.idrec,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: n }) {
                console.log("Errore nella request:", n),
                  ($.value = {
                    text: "Errore: " + n,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: n }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  ($.value = {
                    text: "Errore caricamento invoicee",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: n }) {
                l.value = t._data.data;
                const d = l.value.meseannoanticipo;
                if (d) {
                  const [r, v] = d.split("-");
                  I.value = `${v}-${r}`;
                } else I.value = null;
                l.value.anticipobancario = l.value.anticipobancario == 1;
                let u = (l.value.vat / l.value.taxable) * 100;
                const c = U.find((r) => r.value === u);
                (D.value = c || U[0]),
                  (k.value = ie(l.value.invoicedate, l.value.paymentduedate));
              },
            },
          );
        }
      };
      return (
        Ne(async () => {
          (b.value = !0),
            await f(),
            (j.value = F.query.id),
            F.query.trancheid != null &&
              F.query.trancheid != 0 &&
              F.query.trancheid != null &&
              (await fe());
        }),
        (a, e) => (
          g(),
          N(
            Ke,
            {
              class: "modaldialog",
              onAfterLeave: L,
              modelValue: o(b),
              "onUpdate:modelValue":
                e[28] || (e[28] = (t) => (G(b) ? (b.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: s(() => [
                m("div", We, [
                  oe.idrec == 0
                    ? (g(),
                      O(
                        "h2",
                        Xe,
                        "Nuova fattura attiva del progetto " + E(x.pname),
                        1,
                      ))
                    : q("", !0),
                  oe.idrec > 0
                    ? (g(),
                      O(
                        "h2",
                        He,
                        "Modifica fattura attiva del progetto " + E(x.pname),
                        1,
                      ))
                    : q("", !0),
                  o(B) == 1
                    ? (g(),
                      O(
                        "h4",
                        Je,
                        " Attenzione esiste già una fattura per questa tranche ",
                      ))
                    : q("", !0),
                  i(
                    Fe,
                    {
                      modelValue: o(R),
                      "onUpdate:modelValue":
                        e[27] || (e[27] = (t) => (G(R) ? (R.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown: ae(ve, ["enter"]),
                    },
                    {
                      default: s(() => [
                        i(ke, null, {
                          default: s(() => [
                            i(
                              V,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  i(
                                    re,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = ae(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: o(l).invoicenumber,
                                      "onUpdate:modelValue":
                                        e[1] ||
                                        (e[1] = (t) =>
                                          (o(l).invoicenumber = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Numero Fattura*",
                                      density: "compact",
                                      rules: o(h),
                                      readonly: o(y).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", Qe, [
                                    i(
                                      ge,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        rules: o(h),
                                        modelValue: o(l).invoicedate,
                                        "onUpdate:modelValue": [
                                          e[2] ||
                                            (e[2] = (t) =>
                                              (o(l).invoicedate = t)),
                                          e[3] || (e[3] = (t) => Q()),
                                        ],
                                        label: "Data fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: o(y).hasinvoice == 0,
                                      },
                                      null,
                                      8,
                                      ["rules", "modelValue", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  i(
                                    xe,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[4] ||
                                          (e[4] = ae(
                                            (t) => t.preventDefault(),
                                            ["enter"],
                                          )),
                                        se,
                                      ],
                                      modelValue: o(l).taxable,
                                      "onUpdate:modelValue": [
                                        e[5] ||
                                          (e[5] = (t) => (o(l).taxable = t)),
                                        e[6] || (e[6] = (t) => Y()),
                                      ],
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Imponibile",
                                      "decimal-separator": ",",
                                      density: "compact",
                                      readonly: o(y).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  i(
                                    le,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: o(D),
                                      "onUpdate:modelValue": [
                                        e[7] ||
                                          (e[7] = (t) =>
                                            G(D) ? (D.value = t) : null),
                                        e[8] || (e[8] = (t) => Y()),
                                      ],
                                      label: "% Iva*",
                                      "return-object": "",
                                      items: U,
                                      readonly: o(y).hasinvoice == 0,
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
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  i(
                                    xe,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[9] ||
                                          (e[9] = ae(
                                            (t) => t.preventDefault(),
                                            ["enter"],
                                          )),
                                        se,
                                      ],
                                      modelValue: o(l).vat,
                                      "onUpdate:modelValue":
                                        e[10] ||
                                        (e[10] = (t) => (o(l).vat = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Iva",
                                      "decimal-separator": ",",
                                      density: "compact",
                                      readonly:
                                        o(y).hasinvoice == 0 ||
                                        o(D).value != null,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", Ze, [
                                    i(
                                      le,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: o(l).payment_tranche_id,
                                        "onUpdate:modelValue": [
                                          e[11] ||
                                            (e[11] = (t) =>
                                              (o(l).payment_tranche_id = t)),
                                          e[12] || (e[12] = (t) => pe()),
                                        ],
                                        label: "Tranche",
                                        items: x.tranches,
                                        readonly: o(y).hasinvoice == 0,
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "items", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", et, [
                                    i(
                                      le,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        modelValue: o(l).bank_id,
                                        "onUpdate:modelValue":
                                          e[13] ||
                                          (e[13] = (t) => (o(l).bank_id = t)),
                                        label: "Banca",
                                        items: x.banks,
                                        autocomplete: "off",
                                        density: "compact",
                                        readonly: o(y).hasinvoice == 0,
                                      },
                                      null,
                                      8,
                                      ["modelValue", "items", "readonly"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  i(
                                    le,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: o(k),
                                      "onUpdate:modelValue": [
                                        e[14] ||
                                          (e[14] = (t) =>
                                            G(k) ? (k.value = t) : null),
                                        e[15] || (e[15] = (t) => Q()),
                                      ],
                                      label: "Tipo pagamento*",
                                      items: de,
                                      readonly: o(y).hasinvoice == 0,
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
                            i(
                              V,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", tt, [
                                    i(
                                      ge,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: o(l).paymentduedate,
                                        "onUpdate:modelValue":
                                          e[16] ||
                                          (e[16] = (t) =>
                                            (o(l).paymentduedate = t)),
                                        rules: o(h),
                                        label: "Data previsto pagamento*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly:
                                          o(y).hasinvoice == 0 || o(k) != null,
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
                            i(
                              V,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", at, [
                                    i(
                                      ge,
                                      {
                                        "item-title": "label",
                                        "item-value": "value",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: o(l).payment_date,
                                        "onUpdate:modelValue":
                                          e[17] ||
                                          (e[17] = (t) =>
                                            (o(l).payment_date = t)),
                                        label: "Data effettiva pagamento",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: o(y).hasinvoice == 0,
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
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", lt, [
                                    i(
                                      le,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: o(l).payed,
                                        "onUpdate:modelValue":
                                          e[18] ||
                                          (e[18] = (t) => (o(l).payed = t)),
                                        label: "Pagata*",
                                        rules: o(h),
                                        items: ce,
                                        density: "compact",
                                        readonly: o(y).hasinvoice == 0,
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
                            i(
                              V,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", ot, [
                                    i(
                                      Be,
                                      {
                                        color: "green",
                                        baseColor: "red",
                                        density: "compact",
                                        modelValue: o(l).anticipobancario,
                                        "onUpdate:modelValue":
                                          e[19] ||
                                          (e[19] = (t) =>
                                            (o(l).anticipobancario = t)),
                                        readonly: o(y).hasinvoice == 0,
                                        label:
                                          "Anticipo Bancario: " +
                                          (o(l).anticipobancario == !0
                                            ? "SI"
                                            : "NO"),
                                        inset: "",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "readonly", "label"],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  o(l).anticipobancario == !0
                                    ? (g(),
                                      O("div", nt, [
                                        i(
                                          re,
                                          {
                                            density: "compact",
                                            modelValue:
                                              o(l).percentualeanticipo,
                                            "onUpdate:modelValue":
                                              e[20] ||
                                              (e[20] = (t) =>
                                                (o(l).percentualeanticipo = t)),
                                            readonly: o(y).hasinvoice == 0,
                                            label: "Percentuale Anticipo",
                                            class: "mt-0",
                                            autocomplete: "off",
                                            onKeydown:
                                              e[21] ||
                                              (e[21] = ae(
                                                (t) => t.preventDefault(),
                                                ["enter"],
                                              )),
                                            variant: "outlined",
                                            "persistent-hint": "",
                                          },
                                          null,
                                          8,
                                          ["modelValue", "readonly"],
                                        ),
                                      ]))
                                    : q("", !0),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  o(l).anticipobancario == !0
                                    ? (g(),
                                      O("div", st, [
                                        i(
                                          re,
                                          {
                                            density: "compact",
                                            variant: "outlined",
                                            modelValue: o(X),
                                            "onUpdate:modelValue":
                                              e[25] ||
                                              (e[25] = (t) =>
                                                G(X) ? (X.value = t) : null),
                                            label: "Mese-Anno",
                                            placeholder: "MM-YYYY",
                                            readonly: "",
                                          },
                                          {
                                            default: s(() => [
                                              i(
                                                Re,
                                                {
                                                  modelValue: o(P),
                                                  "onUpdate:modelValue":
                                                    e[24] ||
                                                    (e[24] = (t) =>
                                                      G(P)
                                                        ? (P.value = t)
                                                        : null),
                                                  activator: "parent",
                                                  "close-on-content-click": !1,
                                                },
                                                {
                                                  default: s(() => [
                                                    i(
                                                      Me,
                                                      { width: "320" },
                                                      {
                                                        default: s(() => [
                                                          i(
                                                            Ue,
                                                            {
                                                              class:
                                                                "d-flex align-center justify-space-between",
                                                            },
                                                            {
                                                              default: s(() => [
                                                                i(A, {
                                                                  icon: "mdi-chevron-left",
                                                                  variant:
                                                                    "text",
                                                                  onClick:
                                                                    e[22] ||
                                                                    (e[22] = (
                                                                      t,
                                                                    ) =>
                                                                      W.value--),
                                                                }),
                                                                m(
                                                                  "span",
                                                                  null,
                                                                  E(o(W)),
                                                                  1,
                                                                ),
                                                                i(A, {
                                                                  icon: "mdi-chevron-right",
                                                                  variant:
                                                                    "text",
                                                                  onClick:
                                                                    e[23] ||
                                                                    (e[23] = (
                                                                      t,
                                                                    ) =>
                                                                      W.value++),
                                                                }),
                                                              ]),
                                                              _: 1,
                                                            },
                                                          ),
                                                          i(je, null, {
                                                            default: s(() => [
                                                              i(
                                                                ke,
                                                                { dense: "" },
                                                                {
                                                                  default: s(
                                                                    () => [
                                                                      (g(),
                                                                      O(
                                                                        Ce,
                                                                        null,
                                                                        ze(
                                                                          ue,
                                                                          (t) =>
                                                                            i(
                                                                              V,
                                                                              {
                                                                                key: t.value,
                                                                                cols: "4",
                                                                              },
                                                                              {
                                                                                default:
                                                                                  s(
                                                                                    () => [
                                                                                      i(
                                                                                        A,
                                                                                        {
                                                                                          block:
                                                                                            "",
                                                                                          variant:
                                                                                            "text",
                                                                                          onClick:
                                                                                            (
                                                                                              n,
                                                                                            ) =>
                                                                                              H(
                                                                                                t.value,
                                                                                              ),
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            s(
                                                                                              () => [
                                                                                                w(
                                                                                                  E(
                                                                                                    t.label,
                                                                                                  ),
                                                                                                  1,
                                                                                                ),
                                                                                              ],
                                                                                            ),
                                                                                          _: 2,
                                                                                        },
                                                                                        1032,
                                                                                        [
                                                                                          "onClick",
                                                                                        ],
                                                                                      ),
                                                                                    ],
                                                                                  ),
                                                                                _: 2,
                                                                              },
                                                                              1024,
                                                                            ),
                                                                        ),
                                                                        64,
                                                                      )),
                                                                    ],
                                                                  ),
                                                                  _: 1,
                                                                },
                                                              ),
                                                            ]),
                                                            _: 1,
                                                          }),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ["modelValue"],
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["modelValue"],
                                        ),
                                      ]))
                                    : q("", !0),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              V,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: s(() => [
                                  m("div", it, [
                                    i(
                                      Ye,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: o(l).note,
                                        "onUpdate:modelValue":
                                          e[26] ||
                                          (e[26] = (t) => (o(l).note = t)),
                                        label: "Note",
                                        density: "compact",
                                        readonly: o(y).hasinvoice == 0,
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
                  e[31] || (e[31] = m("br", null, null, -1)),
                  m("div", rt, [
                    i(
                      A,
                      { class: "", onClick: L, color: "red" },
                      {
                        default: s(() => [
                          ...(e[29] || (e[29] = [w(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    i(Le),
                    o(y).hasinvoice == 1
                      ? (g(),
                        N(
                          A,
                          {
                            key: 0,
                            onClick: me,
                            disabled: !o(R) || !o(S),
                            color: "green",
                          },
                          {
                            default: s(() => [
                              ...(e[30] || (e[30] = [w("Salva", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["disabled"],
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
  dt = { class: "pl-10 pr-10" },
  ct = { class: "divcenterpage" },
  pt = { class: "pb-4 pageh3", style: { display: "inline", float: "left" } },
  mt = { style: { display: "inline", float: "right" } },
  vt = ["title"],
  ft = { class: "mt-4" },
  Wt = {
    __name: "activeinvoices",
    setup(oe) {
      const T = Se(),
        y = Ee(),
        _ = _e(),
        { status: F, signIn: ne, signOut: we, data: x } = De(),
        S = p([]),
        B = p(""),
        b = he("snackbar"),
        R = p(!1),
        $ = p(0),
        P = p(0),
        I = p(!0);
      p(!1);
      const M = p([]),
        W = p(!1),
        ue = [
          { title: "Cliente", key: "cliente", sortable: !0 },
          {
            title: "Numero F.",
            key: "invoicenumber",
            sortable: !0,
            align: "left",
          },
          { title: "Data F.", key: "invoicedate", sortable: !0, align: "left" },
          { title: "Totale", key: "total", sortable: !0, align: "left" },
          {
            title: "Data Scadenza",
            key: "paymentduedate",
            sortable: !0,
            align: "left",
          },
          { title: "Pagamento", key: "payed", sortable: !0, align: "left" },
          { title: "Banca", key: "bank_id" },
          { title: "Anticipo Bancario", key: "anticipobancario" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        X = [
          { title: "Progetto", key: "project_id" },
          { title: "Cliente", key: "cliente" },
          { title: "Tranche", key: "payment_tranche_id" },
          { title: "Numero F.", key: "invoicenumber" },
          { title: "Data F.", key: "invoicedate" },
          { title: "Imponibile", key: "taxable" },
          { title: "Iva", key: "vat" },
          { title: "Totale", key: "total" },
          { title: "Data Scadenza", key: "paymentduedate" },
          { title: "Pagata", key: "payed" },
          { title: "Data Pagamento", key: "payment_date" },
          { title: "Banca", key: "bank_id" },
          { title: "Anticipo Bancario", key: "anticipobancario" },
          { title: "Note", key: "note" },
        ],
        H = p([]),
        D = p([]),
        U = p([]),
        k = p([]);
      Oe({
        title: "Fatture Attive",
        meta: [{ name: "description", content: "Fatture Attive" }],
      });
      const de = ({ item: f }) => {
        const a = new Date(),
          e =
            a.getFullYear() +
            "-" +
            String(a.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(a.getDate()).padStart(2, "0");
        return f.payed == "N" && f.paymentduedate < e
          ? { class: "row-orange-ai" }
          : {};
      };
      function j(f) {
        (P.value = parseInt(f)), (R.value = !0);
      }
      const l = async () => {
          (R.value = !1), await Y();
        },
        h = p(""),
        ce = async (f) => {
          const { data: a } = await z(
            T.public.apiBaseurl + "invoice/activedelete/" + f,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: n }) {
                console.log("Errore nella request:", n);
              },
              onResponseError({ request: e, response: t, options: n }) {
                b.value = {
                  text: "Errore cancellazione invoice",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: t, options: n }) {
                (b.value = {
                  text: "Fattura eliminata",
                  type: "success",
                  show: !0,
                }),
                  Y();
              },
            },
          );
        },
        se = async () => {
          M.value = [];
          const { data: f } = await z(T.public.apiBaseurl + "client/list/", {
            onRequest({ request: a, options: e }) {},
            onRequestError({ request: a, options: e, error: t }) {
              console.log("Errore nella request:", t),
                (b.value = { text: "Errore: " + t, type: "danger", show: !0 });
            },
            onResponseError({ request: a, response: e, options: t }) {
              console.log(
                "Errore nella response: " + e._data.error.messages[0],
              ),
                (b.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: a, response: e, options: t }) {
              e._data.data.forEach((n) => {
                M.value[n.id] = n.name;
              });
            },
          });
        };
      function pe() {
        const f = S.value.map((u) => {
            const c = {};
            return (
              X.forEach((r) => {
                if (
                  r.title == "Data Scadenza" ||
                  r.title == "Data F." ||
                  r.title == "Data Pagamento"
                ) {
                  let v = u[r.key];
                  if (v != null && v !== "" && v !== "0000-00-00") {
                    v = String(v).trim();
                    let ye;
                    if (v.includes("-")) {
                      const C = v.split("-");
                      if (C.length === 3) {
                        const Z = Number(C[0]),
                          ee = Number(C[1]),
                          te = Number(C[2]);
                        !isNaN(Z) &&
                          !isNaN(ee) &&
                          !isNaN(te) &&
                          (ye = new Date(Z, ee - 1, te));
                      }
                    } else if (v.includes("/")) {
                      const C = v.split("/");
                      if (C.length === 3) {
                        const Z = Number(C[0]),
                          ee = Number(C[1]),
                          te = Number(C[2]);
                        !isNaN(te) &&
                          !isNaN(ee) &&
                          !isNaN(Z) &&
                          (ye = new Date(te, ee - 1, Z));
                      }
                    }
                    c[r.title] = ye ?? "";
                  } else c[r.title] = "";
                } else
                  r.title == "Tranche"
                    ? (c[r.title] = u[r.key] ? D.value[u[r.key]] : "")
                    : r.title == "Progetto"
                      ? (c[r.title] = h.value)
                      : r.title == "Banca"
                        ? (c[r.title] = u[r.key] ? H.value[u[r.key]] : "")
                        : r.title == "Pagata"
                          ? (c[r.title] = u[r.key] == "N" ? "No" : "Si")
                          : r.title == "Anticipo Bancario"
                            ? (c[r.title] = u[r.key] == 1 ? "Si" : "No")
                            : (c[r.title] = u[r.key] ?? "");
              }),
              c
            );
          }),
          a = K.utils.json_to_sheet(f),
          e = K.utils.decode_range(a["!ref"]);
        a["!cols"] = [
          { wch: 60 },
          { wch: 20 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 15 },
          { wch: 60 },
        ];
        for (let u = e.s.c; u <= e.e.c; u++) {
          const c = K.utils.encode_cell({ r: 0, c: u });
          a[c] && (a[c].s = { font: { bold: !0 } });
        }
        const t = X.map((u) => u.title),
          n = ["Data Scadenza", "Data F.", "Data Pagamento"];
        for (const u of n) {
          const c = t.indexOf(u);
          if (c >= 0)
            for (let r = 1; r <= e.e.r; r++) {
              const v = K.utils.encode_cell({ r, c });
              a[v] &&
                a[v].v instanceof Date &&
                ((a[v].t = "d"), (a[v].z = "dd/mm/yyyy"));
            }
        }
        const d = K.utils.book_new();
        K.utils.book_append_sheet(d, a, "Fatture Attive"),
          K.writeFile(d, "export-fatture-attive-progetto-" + h.value + ".xlsx");
      }
      const Y = async () => {
          S.value = [];
          const { data: f } = await z(
            T.public.apiBaseurl + "invoice/activelist/" + _.query.id,
            {
              onRequest({ request: a, options: e }) {},
              onRequestError({ request: a, options: e, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: a, response: e, options: t }) {
                b.value = {
                  text: "Errore caricamento fatture",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: a, response: e, options: t }) {
                e._data.data.forEach((n) => {
                  console.log(n),
                    (n.cliente = M.value[n.cliente]),
                    S.value.push(n);
                });
              },
            },
          );
        },
        me = () => {
          $.value = x.value.id;
        };
      function L() {
        W.value = window.innerWidth <= 960;
      }
      const ve = async () => {
        (U.value = []), (H.value = []);
        const { data: f } = await z(T.public.apiBaseurl + "bank/list/", {
          onRequest({ request: a, options: e }) {},
          onRequestError({ request: a, options: e, error: t }) {
            console.log("Errore nella request:", t),
              (b.value = { text: "Errore: " + t, type: "danger", show: !0 });
          },
          onResponseError({ request: a, response: e, options: t }) {
            console.log("Errore nella response: " + e._data.error.messages[0]),
              (b.value = {
                text: "Errore caricamento banche",
                type: "danger",
                show: !0,
              });
          },
          onResponse({ request: a, response: e, options: t }) {
            e._data.data.forEach((n) => {
              U.value.push({ label: n.name, value: n.id }),
                (H.value[n.id] = n.name);
            });
          },
        });
      };
      function fe() {
        y.push("/tasks?id=" + _.query.id);
      }
      const Q = async () => {
          let f = [];
          (f.A = "Anticipo"),
            (f.I = "Intermedio"),
            (f.S = "Saldo"),
            (k.value = []),
            (D.value = []);
          const { data: a } = await z(
            T.public.apiBaseurl + "invoice/tranchelist/" + _.query.id,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: n }) {
                console.log("Errore nella request:", n),
                  (b.value = {
                    text: "Errore: " + n,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: n }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (b.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: n }) {
                t._data.data.forEach((d) => {
                  let u =
                      d.sponsor && d.sponsor != 0
                        ? " - " + M.value[d.sponsor]
                        : "",
                    c =
                      f[d.type] +
                      " " +
                      new Date(d.previewdate).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }) +
                      u;
                  k.value.push({
                    label: c,
                    value: d.id,
                    paymenttype: d.paymenttype,
                  }),
                    (D.value[d.id] = c);
                });
              },
            },
          );
        },
        ie = async () => {
          const { data: f } = await z(
            T.public.apiBaseurl + "project/get/" + _.query.id,
            {
              onRequest({ request: a, options: e }) {},
              onRequestError({ request: a, options: e, error: t }) {
                console.log("Errore nella request:", t),
                  (b.value = {
                    text: "Errore: " + t,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: a, response: e, options: t }) {
                console.log(
                  "Errore nella response: " + e._data.error.messages[0],
                ),
                  (b.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: a, response: e, options: t }) {
                h.value = "[" + e._data.data.code + "] " + e._data.data.name;
              },
            },
          );
        };
      return (
        Ne(async () => {
          _.query.id == null
            ? y.push("/")
            : (L(),
              window.addEventListener("resize", L),
              await se(),
              await ie(),
              await ve(),
              await Q(),
              me(),
              await Y(),
              _.query.trancheid != null &&
                _.query.trancheid != 0 &&
                _.query.trancheid != null &&
                j(0));
        }),
        Ae(() => {
          window.removeEventListener("resize", L);
        }),
        (f, a) => {
          const e = $e,
            t = ut;
          return (
            g(),
            O("div", dt, [
              m("div", ct, [
                a[16] || (a[16] = m("br", null, null, -1)),
                m("h3", pt, "Fatture attive del progetto " + E(o(h)), 1),
                m("div", mt, [
                  o(x).hasinvoice == 1
                    ? (g(),
                      N(
                        A,
                        {
                          key: 0,
                          onClick: a[0] || (a[0] = (n) => j(0)),
                          color: "green",
                        },
                        {
                          default: s(() => [
                            i(J, null, {
                              default: s(() => [
                                ...(a[3] || (a[3] = [w("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            a[4] || (a[4] = w("Registra Fattura", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : q("", !0),
                  i(
                    A,
                    { class: "ml-3", color: "primary", onClick: pe },
                    {
                      default: s(() => [
                        i(
                          J,
                          { class: "mr-3" },
                          {
                            default: s(() => [
                              ...(a[5] || (a[5] = [w("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        a[6] || (a[6] = w(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  i(
                    A,
                    {
                      onClick: a[1] || (a[1] = (n) => fe()),
                      color: "orange",
                      class: "ml-4",
                    },
                    {
                      default: s(() => [
                        i(J, null, {
                          default: s(() => [
                            ...(a[7] || (a[7] = [w("mdi-arrow-left", -1)])),
                          ]),
                          _: 1,
                        }),
                        a[8] || (a[8] = w("Torna al progetto", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                a[17] ||
                  (a[17] = m("div", { style: { clear: "both" } }, null, -1)),
                i(
                  Ge,
                  {
                    density: "compact",
                    items: o(S),
                    headers: ue,
                    search: o(B),
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
                    "row-props": de,
                  },
                  {
                    top: s(() => [
                      i(
                        re,
                        {
                          modelValue: o(B),
                          "onUpdate:modelValue":
                            a[2] ||
                            (a[2] = (n) => (G(B) ? (B.value = n) : null)),
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
                    "item.cliente": s(({ item: n }) => [
                      m("span", { title: n.id }, E(n.cliente), 9, vt),
                    ]),
                    "item.bank_id": s(({ item: n }) => [
                      m("span", null, E(o(H)[n.bank_id]), 1),
                    ]),
                    "item.anticipobancario": s(({ item: n }) => [
                      m("span", null, [
                        n.anticipobancario == 1
                          ? (g(),
                            N(
                              J,
                              {
                                key: 0,
                                class: "me-2",
                                size: "large",
                                color: "red",
                                title: "CR",
                              },
                              {
                                default: s(() => [
                                  ...(a[9] ||
                                    (a[9] = [w("mdi-check-bold", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : q("", !0),
                      ]),
                    ]),
                    "item.total": s(({ item: n }) => [
                      m(
                        "span",
                        null,
                        E(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(n.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.vat": s(({ item: n }) => [
                      m(
                        "span",
                        null,
                        E(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(n.vat),
                        ),
                        1,
                      ),
                    ]),
                    "item.invoicedate": s(({ item: n }) => [
                      m(
                        "span",
                        null,
                        E(new Date(n.invoicedate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentduedate": s(({ item: n }) => [
                      m(
                        "span",
                        null,
                        E(
                          new Date(n.paymentduedate).toLocaleDateString(
                            "it-IT",
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.payed": s(({ item: n }) => [
                      n.payed == "P"
                        ? (g(),
                          N(
                            qe,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: s(() => [
                                ...(a[10] || (a[10] = [w(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : q("", !0),
                      n.payed == "N"
                        ? (g(),
                          N(
                            qe,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: s(() => [
                                ...(a[11] || (a[11] = [w(" Non pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : q("", !0),
                    ]),
                    "item.actions": s(({ item: n }) => [
                      i(
                        Re,
                        { "offset-y": "" },
                        {
                          activator: s(({ props: d }) => [
                            i(
                              A,
                              Te(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                d,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: s(() => [
                            m("div", ft, [
                              i(
                                Pe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: s(() => [
                                    o(x).hasinvoice == 1
                                      ? (g(),
                                        N(
                                          be,
                                          {
                                            key: 0,
                                            onClick: (d) => j(n.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: s(() => [
                                              i(
                                                J,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: s(() => [
                                                    ...(a[12] ||
                                                      (a[12] = [
                                                        w("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: s(() => [
                                              i(
                                                Ve,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: s(() => [
                                                    ...(a[13] ||
                                                      (a[13] = [
                                                        w("Modifica", -1),
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
                                        N(
                                          be,
                                          {
                                            key: 1,
                                            onClick: (d) => j(n.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: s(() => [
                                              i(
                                                J,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: s(() => [
                                                    ...(a[14] ||
                                                      (a[14] = [
                                                        w("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: s(() => [
                                              i(
                                                Ve,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: s(() => [
                                                    ...(a[15] ||
                                                      (a[15] = [
                                                        w("Visualizza", -1),
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
                                    o(x).hasinvoice == 1
                                      ? (g(),
                                        N(
                                          be,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: s(() => [
                                              i(
                                                Ve,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: s(() => [
                                                    i(
                                                      e,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (d) =>
                                                          ce(n.id),
                                                        iconadelete: o(I),
                                                        color: "red",
                                                        text: "Vuoi veramente eliminare  la fattura selezionata?",
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
                o(R)
                  ? (g(),
                    N(
                      t,
                      {
                        key: 0,
                        pname: o(h),
                        aryclients: o(M),
                        tranches: o(k),
                        banks: o(U),
                        dialoginsmod: o(R),
                        idrec: o(P),
                        onClose: l,
                      },
                      null,
                      8,
                      [
                        "pname",
                        "aryclients",
                        "tranches",
                        "banks",
                        "dialoginsmod",
                        "idrec",
                      ],
                    ))
                  : q("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Wt as default };
