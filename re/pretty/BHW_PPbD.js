import {
  E as ve,
  u as fe,
  F as ye,
  r as v,
  G as be,
  o as Ve,
  J as P,
  y as g,
  C as i,
  z as p,
  x as S,
  K as R,
  B as s,
  N,
  M as Q,
  L as l,
  Q as ge,
  R as xe,
  D as A,
  n as _e,
} from "./CYsiv7Qj.js";
import { $ as Y } from "./BvG7V8Ak.js";
import { V as ke } from "./MIubIMrV.js";
import { V as K, a as d } from "./Bj0ZT2dB.js";
import { V as b } from "./DCAzZvgN.js";
import { V as Z } from "./BrCrqdgZ.js";
import { V as M } from "./Da5kZyhM.js";
import { V as H } from "./B51noTYL.js";
import { a as he } from "./D3DeQzvF.js";
import { V as q } from "./Bx6RXzqb.js";
import { a as W, V as z } from "./B_W9U9Wp.js";
import { V as Ne } from "./BqujDEEl.js";
import { V as Ue } from "./Dlfzj7mx.js";
const je = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  De = { key: 0, class: "pb-10 pageh2" },
  Se = { key: 1, class: "pb-10 pageh2" },
  Re = { key: 2, class: "pb-10 pageh2" },
  Ae = { class: "d-flex justify-center" },
  $e = { class: "d-flex justify-center" },
  Ce = { class: "d-flex justify-center" },
  Te = { class: "d-flex justify-center" },
  Be = { class: "d-flex justify-center" },
  Ee = { class: "d-flex justify-center" },
  Ie = { class: "d-flex justify-center" },
  Fe = { class: "d-flex justify-center" },
  we = { class: "d-flex justify-center" },
  Pe = { class: "d-flex justify-center" },
  Ye = { class: "d-flex justify-center" },
  Ke = { class: "d-flex justify-center" },
  Me = { style: { display: "flex" } },
  at = {
    __name: "DialogInsModAdminPasInvoice",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      tranches: Array,
      banks: Array,
      pname: String,
      suppliers: Array,
      projects: Array,
      clone: Number,
    },
    emits: ["close", "alertprice"],
    setup(x, { emit: ee }) {
      const { data: r } = ve();
      fe(), ye();
      const $ = _e(),
        O = ee,
        f = x;
      v("F");
      const te = [
          { text: "Fattura", value: "F" },
          { text: "Notula", value: "N" },
          { text: "Scontrino", value: "S" },
          { text: "F24", value: "X" },
          { text: "Altro", value: "A" },
        ],
        U = v(!0),
        C = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        T = v([]),
        j = v(!1),
        D = v(!1),
        _ = be("snackbar"),
        ae = v({ value: 22, label: "22%" }),
        a = v({ id: 0, project_id: null, payed: "N", type: null }),
        V = v([(o) => !!o || "Campo obbligatorio"]),
        le = [
          { value: null, label: "" },
          { value: "B", label: "Bloccato" },
          { value: "D", label: "Differibile" },
          { value: "U", label: "Urgente" },
        ],
        oe = v(0),
        J = () => ({
          project_id: null,
          task_id: null,
          totale: 0,
          ivapercent: { value: 22, label: "22%" },
          vat: 0,
          taxable: 0,
        }),
        y = v(Array.from({ length: f.idrec > 0 ? 0 : 1 }, J)),
        se = () => {
          y.value.push(J());
        },
        ne = (o) => {
          let t = { ...y.value[o] };
          console.log(t), y.value.push(t);
        },
        ie = (o) => {
          y.value.splice(o, 1);
        },
        ue = (o) => {
          if (
            !o ||
            ((o = o.replace(/\s+/g, "").toUpperCase()), !/^[A-Z0-9]+$/.test(o))
          )
            return !1;
          let u = (o.slice(4) + o.slice(0, 4))
            .split("")
            .map((n) => (isNaN(n) ? n.charCodeAt(0) - 55 : n))
            .join("");
          for (; u.length > 2; ) {
            const n = u.slice(0, 9);
            u = (parseInt(n, 10) % 97) + u.slice(n.length);
          }
          return parseInt(u, 10) % 97 === 1;
        },
        de = v([
          (o) => !o || !/\s/.test(o) || "Non inserire spazi nell'IBAN",
          (o) => !o || ue(o) || "IBAN non valido",
        ]),
        re = (o) => {
          o.target.tagName !== "TEXTAREA" && (o.preventDefault(), save());
        },
        L = [
          { label: "Pagata", value: "P" },
          { label: "Da Pagare", value: "N" },
        ];
      function B(o) {
        if (o.key === ".") {
          o.preventDefault();
          const t = o.target,
            e = t.selectionStart,
            u = t.selectionEnd,
            n = t.value;
          (t.value = n.substring(0, e) + "," + n.substring(u)),
            t.setSelectionRange(e + 1, e + 1),
            t.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      const ce = async () => {
          U.value = !1;
          let o = 0,
            t = 0;
          if (
            (y.value.forEach((m) => {
              (o = o + m.taxable), (t = t + m.vat);
            }),
            (a.value.vat = t),
            (a.value.taxable = o),
            f.clone == 1 && (a.value.id = 0),
            (a.value.task_id == null ||
              a.value.task_id == "" ||
              a.value.task_id == null) &&
              (a.value.task_id = 0),
            (a.value.bank_id == null ||
              a.value.bank_id == "" ||
              a.value.bank_id == null) &&
              (a.value.bank_id = 0),
            a.value.payment_date != "" && a.value.payment_date != null)
          ) {
            const m = new Date(a.value.payment_date),
              h = m.getFullYear(),
              F = String(m.getMonth() + 1).padStart(2, "0"),
              w = String(m.getDate()).padStart(2, "0");
            a.value.payment_date = `${h}-${F}-${w}`;
          } else a.value.payment_date = null;
          const e = new Date(a.value.invoicedate),
            u = e.getFullYear(),
            n = String(e.getMonth() + 1).padStart(2, "0"),
            k = String(e.getDate()).padStart(2, "0");
          if (
            ((a.value.invoicedate = `${u}-${n}-${k}`),
            a.value.paymentduedate != "" && a.value.paymentduedate != null)
          ) {
            const m = new Date(a.value.paymentduedate),
              h = m.getFullYear(),
              F = String(m.getMonth() + 1).padStart(2, "0"),
              w = String(m.getDate()).padStart(2, "0");
            a.value.paymentduedate = `${h}-${F}-${w}`;
          } else a.value.paymentduedate = null;
          let c = { invoice: a.value, rows: y.value };
          try {
            (
              await Y($.public.apiBaseurl + "invoice/passivecreateedit", {
                method: "POST",
                body: c,
              })
            ).data.flagprice == !0 && O("alertprice"),
              f.idrec == 0
                ? (_.value = {
                    text: "Creazione fattura completata",
                    type: "success",
                    show: !0,
                  })
                : (_.value = {
                    text: "Modifica invfatturaoice completata",
                    type: "success",
                    show: !0,
                  }),
              E(),
              (U.value = !0);
          } catch (m) {
            let h = JSON.parse(m.data).errors.title;
            console.log("catcherr", m.data),
              (_.value = { text: h, type: "danger", show: !0 }),
              (U.value = !0);
            return;
          }
        },
        X = v(null);
      function E() {
        O("close");
      }
      function I(o) {
        o.ivapercent.value != null &&
          (o.taxable == null || o.taxable == 0 || o.taxable == null
            ? (o.vat = 0)
            : (o.vat = (o.taxable * o.ivapercent.value) / 100)),
          (o.totale = (o.taxable || 0) + (o.vat || 0));
      }
      const pe = async () => {
        if (f.idrec > 0) {
          const { data: o } = await Y(
            $.public.apiBaseurl + "invoice/passiveget/" + f.idrec,
            {
              onRequest({ request: t, options: e }) {},
              onRequestError({ request: t, options: e, error: u }) {
                console.log("Errore nella request:", u),
                  (_.value = {
                    text: "Errore: " + u,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: t, response: e, options: u }) {
                console.log(
                  "Errore nella response: " + e._data.error.messages[0],
                ),
                  (_.value = {
                    text: "Errore caricamento invoicee",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse: async ({ request: t, response: e, options: u }) => {
                (a.value = e._data.data),
                  (X.value =
                    a.value.task_id == 0 ? null : parseInt(a.value.task_id)),
                  (a.value.bank_id =
                    a.value.bank_id == 0 ? null : a.value.bank_id);
                let n = (a.value.vat / a.value.taxable) * 100;
                const k = C.find((c) => c.value === n);
                (ae.value = k || C[0]),
                  (oe.value = a.value.taxable + a.value.vat),
                  (a.value.iban = f.suppliers.find(
                    (c) => c.value === a.value.supplier_id,
                  )?.iban);
                for (const c of a.value.rows)
                  y.value.push({
                    id: c.id,
                    project_id: c.project_id,
                    task_id: c.task_id,
                    taxable: c.taxable,
                    vat: c.vat,
                    ivapercent: (c.vat / c.taxable) * 100,
                    totale: c.taxable + c.vat,
                  }),
                    await G(c.project_id);
              },
            },
          );
        }
      };
      function me() {
        a.value.iban = f.suppliers.find(
          (o) => o.value === a.value.supplier_id,
        )?.iban;
      }
      const G = async (o) => {
        T.value[o] = [];
        let t = {
          project_id: o,
          alsodeleted: 0,
          externaltask: 1,
          esecutivi: 1,
        };
        try {
          const { data: e, status: u } = await Y(
            $.public.apiBaseurl + "task/completelist",
            { method: "POST", body: t },
          );
          e.forEach((n) => {
            let k =
              n.Task.supplier_id != 0
                ? " [" + n.Supplier.name + "]"
                : n.Task.genericsupplier != "" && n.Task.genericsupplier != null
                  ? " [" + n.Task.genericsupplier + "]"
                  : "";
            T.value[o].push({
              label: n.Task.shortname + k,
              value: parseInt(n.Task.id),
            });
          }),
            (a.value.task_id = X.value);
        } catch (e) {
          console.log(e);
          let u = JSON.parse(e.data).errors.title;
          console.log("catcherr", e.data),
            (_.value = { text: u, type: "danger", show: !0 });
          return;
        }
      };
      return (
        Ve(async () => {
          (j.value = !0), await pe();
        }),
        (o, t) => (
          g(),
          P(
            Ue,
            {
              class: "modaldialog",
              onAfterLeave: E,
              modelValue: l(j),
              "onUpdate:modelValue":
                t[18] || (t[18] = (e) => (Q(j) ? (j.value = e) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: i(() => [
                p("div", je, [
                  x.idrec == 0
                    ? (g(), S("h2", De, "Nuova fattura passiva"))
                    : R("", !0),
                  x.idrec > 0 && x.clone == 0
                    ? (g(), S("h2", Se, "Modifica fattura passiva"))
                    : R("", !0),
                  x.idrec > 0 && x.clone == 1
                    ? (g(), S("h2", Re, "Duplica fattura passiva"))
                    : R("", !0),
                  s(
                    ke,
                    {
                      modelValue: l(D),
                      "onUpdate:modelValue":
                        t[17] || (t[17] = (e) => (Q(D) ? (D.value = e) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown: N(re, ["enter"]),
                    },
                    {
                      default: i(() => [
                        s(K, null, {
                          default: i(() => [
                            s(
                              d,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Ae, [
                                    s(
                                      b,
                                      {
                                        density: "compact",
                                        modelValue: l(a).documenttype,
                                        "onUpdate:modelValue":
                                          t[0] ||
                                          (t[0] = (e) =>
                                            (l(a).documenttype = e)),
                                        items: te,
                                        label: "Tipo Documento*",
                                        variant: "outlined",
                                        rules: l(V),
                                        readonly: l(r).hasinvoice == 0,
                                        "item-title": "text",
                                        "item-value": "value",
                                        autocomplete: "off",
                                        "no-data-text":
                                          "Nessun risultato trovato",
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
                            s(
                              d,
                              { cols: "12", sm: "8", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", $e, [
                                    s(
                                      b,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(a).supplier_id,
                                        "onUpdate:modelValue": [
                                          t[1] ||
                                            (t[1] = (e) =>
                                              (l(a).supplier_id = e)),
                                          t[2] || (t[2] = (e) => me()),
                                        ],
                                        label: "Fornitore*",
                                        rules: l(V),
                                        items: f.suppliers,
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  s(
                                    Z,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        t[3] ||
                                        (t[3] = N(
                                          (e) => e.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).invoicenumber,
                                      "onUpdate:modelValue":
                                        t[4] ||
                                        (t[4] = (e) =>
                                          (l(a).invoicenumber = e)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Numero*",
                                      density: "compact",
                                      rules: l(V),
                                      readonly: l(r).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Ce, [
                                    s(
                                      M,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        rules: l(V),
                                        modelValue: l(a).invoicedate,
                                        "onUpdate:modelValue":
                                          t[5] ||
                                          (t[5] = (e) =>
                                            (l(a).invoicedate = e)),
                                        label: "Data*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Te, [
                                    s(
                                      M,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(a).paymentduedate,
                                        "onUpdate:modelValue":
                                          t[6] ||
                                          (t[6] = (e) =>
                                            (l(a).paymentduedate = e)),
                                        label: "Data scadenza pagamento*",
                                        density: "compact",
                                        rules: l(V),
                                        "input-format": "dd/mm/YY",
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Be, [
                                    s(
                                      M,
                                      {
                                        "item-title": "label",
                                        "item-value": "value",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(a).payment_date,
                                        "onUpdate:modelValue":
                                          t[7] ||
                                          (t[7] = (e) =>
                                            (l(a).payment_date = e)),
                                        label: "Data effettiva pagamento",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Ee, [
                                    s(
                                      b,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        modelValue: l(a).bank_id,
                                        "onUpdate:modelValue":
                                          t[8] ||
                                          (t[8] = (e) => (l(a).bank_id = e)),
                                        label: "Banca",
                                        items: f.banks,
                                        autocomplete: "off",
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Ie, [
                                    s(
                                      b,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: l(a).payed,
                                        "onUpdate:modelValue":
                                          t[9] ||
                                          (t[9] = (e) => (l(a).payed = e)),
                                        label: "Pagata*",
                                        rules: l(V),
                                        items: L,
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Fe, [
                                    s(
                                      Z,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(a).iban,
                                        "onUpdate:modelValue":
                                          t[10] ||
                                          (t[10] = (e) => (l(a).iban = e)),
                                        label: "Iban",
                                        rules: l(de),
                                        items: L,
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", we, [
                                    s(
                                      b,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: l(a).type,
                                        "onUpdate:modelValue":
                                          t[11] ||
                                          (t[11] = (e) => (l(a).type = e)),
                                        label: "Tipo",
                                        items: le,
                                        readonly: l(r).hasinvoice == 0,
                                        density: "compact",
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
                            s(
                              d,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Pe, [
                                    s(
                                      H,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(a).causale,
                                        "onUpdate:modelValue":
                                          t[12] ||
                                          (t[12] = (e) => (l(a).causale = e)),
                                        label: "Causale",
                                        density: "compact",
                                        rows: "2",
                                        readonly: l(r).hasinvoice == 0,
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
                            s(
                              d,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  p("div", Ye, [
                                    s(
                                      H,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(a).note,
                                        "onUpdate:modelValue":
                                          t[13] ||
                                          (t[13] = (e) => (l(a).note = e)),
                                        label: "Note",
                                        rows: "2",
                                        density: "compact",
                                        readonly: l(r).hasinvoice == 0,
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
                        s(he),
                        t[23] ||
                          (t[23] = p(
                            "h4",
                            { class: "mt-4" },
                            "Righe documento",
                            -1,
                          )),
                        (g(!0),
                        S(
                          ge,
                          null,
                          xe(
                            l(y),
                            (e, u) => (
                              g(),
                              P(
                                K,
                                { key: u, class: "mt-0" },
                                {
                                  default: i(() => [
                                    s(
                                      d,
                                      { cols: "2" },
                                      {
                                        default: i(() => [
                                          s(
                                            b,
                                            {
                                              "no-data-text":
                                                "Nessun risultato trovato",
                                              "item-title": "label",
                                              "item-value": "value",
                                              variant: "outlined",
                                              autocomplete: "off",
                                              modelValue: e.project_id,
                                              "onUpdate:modelValue": [
                                                (n) => (e.project_id = n),
                                                (n) => G(e.project_id),
                                              ],
                                              label: "Progetto*",
                                              rules: l(V),
                                              items: f.projects,
                                              readonly: l(r).hasinvoice == 0,
                                              density: "compact",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "rules",
                                              "items",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "2" },
                                      {
                                        default: i(() => [
                                          p("div", Ke, [
                                            s(
                                              b,
                                              {
                                                "no-data-text":
                                                  "Nessun risultato trovato",
                                                "item-title": "label",
                                                "item-value": "value",
                                                variant: "outlined",
                                                autocomplete: "off",
                                                modelValue: e.task_id,
                                                "onUpdate:modelValue": (n) =>
                                                  (e.task_id = n),
                                                label: "Task",
                                                clearable: "",
                                                items: l(T)[e.project_id],
                                                disabled:
                                                  e.project_id == 0 ||
                                                  e.project_id == null,
                                                readonly: l(r).hasinvoice == 0,
                                                density: "compact",
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "items",
                                                "disabled",
                                                "readonly",
                                              ],
                                            ),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "12", sm: "2" },
                                      {
                                        default: i(() => [
                                          s(
                                            q,
                                            {
                                              class: "mt-0",
                                              autocomplete: "off",
                                              onKeydown: [
                                                t[14] ||
                                                  (t[14] = N(
                                                    (n) => n.preventDefault(),
                                                    ["enter"],
                                                  )),
                                                B,
                                              ],
                                              modelValue: e.taxable,
                                              "onUpdate:modelValue": [
                                                (n) => (e.taxable = n),
                                                (n) => I(e),
                                              ],
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              precision: 2,
                                              label: "Imponibile",
                                              "decimal-separator": ",",
                                              density: "compact",
                                              readonly: l(r).hasinvoice == 0,
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "12", sm: "1" },
                                      {
                                        default: i(() => [
                                          s(
                                            b,
                                            {
                                              "no-data-text":
                                                "Nessun risultato trovato",
                                              "item-title": "label",
                                              "item-value": "value",
                                              variant: "outlined",
                                              autocomplete: "off",
                                              modelValue: e.ivapercent,
                                              "onUpdate:modelValue": [
                                                (n) => (e.ivapercent = n),
                                                (n) => I(e),
                                              ],
                                              label: "% Iva*",
                                              "return-object": "",
                                              items: C,
                                              readonly: l(r).hasinvoice == 0,
                                              density: "compact",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "12", sm: "2" },
                                      {
                                        default: i(() => [
                                          s(
                                            q,
                                            {
                                              class: "mt-0",
                                              autocomplete: "off",
                                              onKeydown: [
                                                t[15] ||
                                                  (t[15] = N(
                                                    (n) => n.preventDefault(),
                                                    ["enter"],
                                                  )),
                                                B,
                                              ],
                                              modelValue: e.vat,
                                              "onUpdate:modelValue": [
                                                (n) => (e.vat = n),
                                                (n) => I(e),
                                              ],
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              precision: 2,
                                              label: "Iva",
                                              "decimal-separator": ",",
                                              density: "compact",
                                              readonly:
                                                l(r).hasinvoice == 0 ||
                                                e.ivapercent.value != null,
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "12", sm: "2" },
                                      {
                                        default: i(() => [
                                          s(
                                            q,
                                            {
                                              class: "mt-0",
                                              autocomplete: "off",
                                              onKeydown: [
                                                t[16] ||
                                                  (t[16] = N(
                                                    (n) => n.preventDefault(),
                                                    ["enter"],
                                                  )),
                                                B,
                                              ],
                                              modelValue: e.totale,
                                              "onUpdate:modelValue": (n) =>
                                                (e.totale = n),
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              precision: 2,
                                              label: "Totale",
                                              "decimal-separator": ",",
                                              density: "compact",
                                              readonly: !0,
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    s(
                                      d,
                                      { cols: "1" },
                                      {
                                        default: i(() => [
                                          s(
                                            W,
                                            {
                                              class: "mt-2 mr-3",
                                              color: "error",
                                              title: "Rimuovi Riga",
                                              onClick: (n) => ie(u),
                                            },
                                            {
                                              default: i(() => [
                                                ...(t[19] ||
                                                  (t[19] = [
                                                    A("mdi-delete", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["onClick"],
                                          ),
                                          s(
                                            W,
                                            {
                                              class: "mt-2",
                                              color: "black",
                                              title: "Duplica Riga",
                                              onClick: (n) => ne(u),
                                            },
                                            {
                                              default: i(() => [
                                                ...(t[20] ||
                                                  (t[20] = [
                                                    A("mdi-content-copy", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["onClick"],
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
                              )
                            ),
                          ),
                          128,
                        )),
                        s(K, null, {
                          default: i(() => [
                            s(
                              d,
                              { class: "text-center" },
                              {
                                default: i(() => [
                                  s(z, {
                                    icon: "mdi-plus",
                                    color: "primary",
                                    title: "Aggiungi Riga",
                                    onClick: se,
                                  }),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        t[24] || (t[24] = p("br", null, null, -1)),
                        p("div", Me, [
                          s(
                            z,
                            { class: "", onClick: E, color: "red" },
                            {
                              default: i(() => [
                                ...(t[21] || (t[21] = [A(" Annulla ", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          s(Ne),
                          l(r).hasinvoice == 1
                            ? (g(),
                              P(
                                z,
                                {
                                  key: 0,
                                  onClick: ce,
                                  disabled: !l(D) || !l(U),
                                  color: "green",
                                },
                                {
                                  default: i(() => [
                                    ...(t[22] || (t[22] = [A("Salva", -1)])),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["disabled"],
                              ))
                            : R("", !0),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"],
                  ),
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
  };
export { at as _ };
