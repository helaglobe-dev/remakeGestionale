import {
  E as be,
  u as ge,
  F as Ve,
  r as v,
  k as xe,
  G as he,
  o as we,
  J as ee,
  y as V,
  C as i,
  z as m,
  x as q,
  K as D,
  B as o,
  L as l,
  N as k,
  M as E,
  A as ae,
  Q as _e,
  R as qe,
  D as W,
  n as De,
} from "./CYsiv7Qj.js";
import "./B_hTT4u_.js";
import { $ as R } from "./BvG7V8Ak.js";
import { V as Ee } from "./MIubIMrV.js";
import { V as te, a as c } from "./Bj0ZT2dB.js";
import { V as S } from "./DCAzZvgN.js";
import { V as Q } from "./BrCrqdgZ.js";
import { V as X } from "./Da5kZyhM.js";
import { V as le } from "./Bx6RXzqb.js";
import { V as Se } from "./CZzf1ihi.js";
import { V as je } from "./CxBYvc7u.js";
import { V as $e, a as ke, c as Re } from "./sbneMOUU.js";
import { V as N } from "./B_W9U9Wp.js";
import { V as Ne } from "./B51noTYL.js";
import { V as Ae } from "./BqujDEEl.js";
import { V as Me } from "./Dlfzj7mx.js";
const Ue = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Ie = { key: 0, class: "pb-10 pageh2" },
  Ce = { key: 1, class: "pb-10 pageh2" },
  ze = { key: 2, class: "pb-10", style: { color: "red" } },
  Ye = { class: "d-flex justify-center" },
  Be = { class: "d-flex justify-center" },
  Te = { class: "d-flex justify-center" },
  Fe = { class: "d-flex justify-center" },
  Ke = { class: "d-flex justify-center" },
  Pe = { class: "d-flex justify-center" },
  Le = { class: "d-flex" },
  Oe = { key: 0, class: "d-flex justify-center" },
  Ge = { key: 0, class: "d-flex justify-center" },
  Je = { class: "d-flex justify-center" },
  We = { style: { display: "flex" } },
  pa = {
    __name: "DialogInsModAdminActInvoice",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      banks: Array,
      pname: String,
      projects: Array,
      aryclients: Array,
    },
    emits: ["close"],
    setup(Y, { emit: oe }) {
      const { data: p } = be(),
        B = ge(),
        b = Ve(),
        j = De(),
        ne = oe,
        _ = Y,
        A = v(!1),
        x = v(null),
        se = new Date().getFullYear(),
        M = v(se),
        ie = [
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
        T = xe(() => {
          if (!x.value) return "";
          const [n, e] = x.value.split("-");
          return `${e}-${n}`;
        });
      function ue(n) {
        (x.value = `${M.value}-${String(n).padStart(2, "0")}`), (A.value = !1);
      }
      const U = v(!0),
        I = v(!1),
        C = v(!1),
        f = he("snackbar"),
        F = v([]),
        K = v(0),
        h = v({ value: 22, label: "22%" }),
        P = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        y = v("30"),
        re = [
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
        L = v(null),
        t = v({ id: 0, project_id: null, payed: "N", anticipobancario: !1 }),
        $ = v([(n) => !!n || "Campo obbligatorio"]),
        de = [
          { label: "Pagata", value: "P" },
          { label: "Non pagata", value: "N" },
        ];
      function H(n) {
        if (n.key === ".") {
          n.preventDefault();
          const e = n.target,
            a = e.selectionStart,
            s = e.selectionEnd,
            u = e.value;
          (e.value = u.substring(0, a) + "," + u.substring(s)),
            e.setSelectionRange(a + 1, a + 1),
            e.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      function ce() {
        L.value == "a" && B.push({ path: "/scadenziario", query: {} }),
          L.value == "fa" &&
            B.push({ path: "/scadenziariofattureattive", query: {} });
      }
      function z() {
        h.value.value != null &&
          (t.value.taxable == null ||
          t.value.taxable == 0 ||
          t.value.taxable == null
            ? (t.value.vat = 0)
            : (t.value.vat = (t.value.taxable * h.value.value) / 100));
      }
      function Z() {
        if (y.value != null)
          if (t.value.invoicedate == null || t.value.invoicedate == null)
            t.value.paymentduedate = null;
          else {
            const n = new Date(t.value.invoicedate);
            if (y.value.endsWith("fm")) {
              const e = parseInt(y.value, 10) / 30;
              n.setDate(1), n.setMonth(n.getMonth() + e + 1), n.setDate(0);
            } else n.setDate(n.getDate() + parseInt(y.value));
            t.value.paymentduedate = n;
          }
      }
      function O(n, e) {
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
        for (const s of a) {
          const u = new Date(n);
          if (s !== null) {
            if (s.endsWith("fm")) {
              const r = parseInt(s, 10) / 30;
              u.setDate(1), u.setMonth(u.getMonth() + r + 1), u.setDate(0);
            } else u.setDate(u.getDate() + parseInt(s));
            if (new Date(u).toDateString() === new Date(e).toDateString())
              return s;
          }
        }
        return null;
      }
      const pe = (n) => {
          n.target.tagName !== "TEXTAREA" && (n.preventDefault(), save());
        },
        ve = async () => {
          const { data: n } = await R(
            j.public.apiBaseurl + "invoice/trancheget/" + b.query.trancheid,
            {
              onRequest({ request: e, options: a }) {},
              onRequestError({ request: e, options: a, error: s }) {
                console.log("Errore nella request:", s),
                  (f.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: a, options: s }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (f.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: a, options: s }) {
                console.log(a._data.data),
                  (t.value.project_id = parseInt(a._data.data.project_id)),
                  (t.value.payment_tranche_id = parseInt(b.query.trancheid)),
                  (t.value.taxable = a._data.data.total),
                  (t.value.payed = a._data.data.payed),
                  (t.value.invoicedate = a._data.data.previewdate),
                  (t.value.paymentduedate = a._data.data.paymentdate),
                  (K.value = a._data.data.hasinvoice),
                  (y.value = O(t.value.invoicedate, t.value.paymentduedate)),
                  z();
              },
            },
          );
        },
        G = async (n = 0) => {
          if (
            (t.value.project_id != 0 && t.value.project_id != null) ||
            n != 0
          ) {
            let e = [];
            (e.A = "Anticipo"),
              (e.I = "Intermedio"),
              (e.S = "Saldo"),
              (F.value = []);
            const { data: a } = await R(
              j.public.apiBaseurl +
                "invoice/tranchelist/" +
                (n || t.value.project_id),
              {
                onRequest({ request: s, options: u }) {},
                onRequestError({ request: s, options: u, error: r }) {
                  console.log("Errore nella request:", r),
                    (f.value = {
                      text: "Errore: " + r,
                      type: "danger",
                      show: !0,
                    });
                },
                onResponseError({ request: s, response: u, options: r }) {
                  console.log(
                    "Errore nella response: " + u._data.error.messages[0],
                  ),
                    (f.value = {
                      text: "Errore caricamento banche",
                      type: "danger",
                      show: !0,
                    });
                },
                onResponse({ request: s, response: u, options: r }) {
                  u._data.data.forEach((d) => {
                    let g =
                        d.sponsor && d.sponsor != 0
                          ? " - " + _.aryclients[d.sponsor]
                          : "",
                      w =
                        e[d.type] +
                        " " +
                        new Date(d.previewdate).toLocaleDateString("it-IT", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }) +
                        g;
                    F.value.push({
                      label: w,
                      value: d.id,
                      paymenttype: d.paymenttype,
                    });
                  });
                },
              },
            );
          }
        },
        me = async () => {
          if (t.value.payment_tranche_id != null) {
            const { data: n } = await R(
              j.public.apiBaseurl +
                "invoice/trancheget/" +
                t.value.payment_tranche_id,
              {
                onRequest({ request: e, options: a }) {},
                onRequestError({ request: e, options: a, error: s }) {
                  console.log("Errore nella request:", s),
                    (f.value = {
                      text: "Errore: " + s,
                      type: "danger",
                      show: !0,
                    });
                },
                onResponseError({ request: e, response: a, options: s }) {
                  console.log(
                    "Errore nella response: " + a._data.error.messages[0],
                  ),
                    (f.value = {
                      text: "Errore caricamento tranche",
                      type: "danger",
                      show: !0,
                    });
                },
                onResponse({ request: e, response: a, options: s }) {
                  console.log(a._data.data),
                    (t.value.project_id = parseInt(a._data.data.project_id)),
                    (t.value.taxable = a._data.data.total),
                    (t.value.payed = a._data.data.payed),
                    (t.value.invoicedate = a._data.data.previewdate),
                    (t.value.paymentduedate = a._data.data.paymentdate),
                    (K.value = a._data.data.hasinvoice),
                    (y.value = O(t.value.invoicedate, t.value.paymentduedate)),
                    z();
                },
              },
            );
          }
        },
        fe = async () => {
          if (
            ((U.value = !1),
            t.value.payment_date != "" && t.value.payment_date != null)
          ) {
            const r = new Date(t.value.payment_date),
              d = r.getFullYear(),
              g = String(r.getMonth() + 1).padStart(2, "0"),
              w = String(r.getDate()).padStart(2, "0");
            t.value.payment_date = `${d}-${g}-${w}`;
          } else t.value.payment_date = null;
          const n = new Date(t.value.invoicedate),
            e = n.getFullYear(),
            a = String(n.getMonth() + 1).padStart(2, "0"),
            s = String(n.getDate()).padStart(2, "0");
          if (((t.value.invoicedate = `${e}-${a}-${s}`), x.value)) {
            const [r, d] = x.value.split("-");
            t.value.meseannoanticipo = `${d}-${r}`;
          } else t.value.meseannoanticipo = null;
          if (t.value.paymentduedate != "" && t.value.paymentduedate != null) {
            const r = new Date(t.value.paymentduedate),
              d = r.getFullYear(),
              g = String(r.getMonth() + 1).padStart(2, "0"),
              w = String(r.getDate()).padStart(2, "0");
            t.value.paymentduedate = `${d}-${g}-${w}`;
          } else t.value.paymentduedate = null;
          (t.value.anticipobancario = t.value.anticipobancario == !0 ? 1 : 0),
            (t.value.anticipobancario == !1 || t.value.anticipobancario == 0) &&
              ((t.value.percentualeanticipo = 0),
              (t.value.meseannoanticipo = null));
          let u = { invoice: t.value };
          await R(j.public.apiBaseurl + "invoice/activecreateedit", {
            method: "POST",
            body: u,
          })
            .then(() => {
              _.idrec == 0
                ? (f.value = {
                    text: "Creazione invoice completata",
                    type: "success",
                    show: !0,
                  })
                : (f.value = {
                    text: "Modifica invoice completata",
                    type: "success",
                    show: !0,
                  }),
                J(),
                (U.value = !0);
            })
            .catch((r) => {
              let d = JSON.parse(r.data).errors.title;
              console.log("catcherr", r.data),
                (f.value = { text: d, type: "danger", show: !0 }),
                (U.value = !0);
            });
        };
      function J() {
        B.replace({ query: {} }), ne("close"), ce();
      }
      const ye = async () => {
        if (_.idrec > 0) {
          const { data: n } = await R(
            j.public.apiBaseurl + "invoice/activeget/" + _.idrec,
            {
              onRequest({ request: e, options: a }) {},
              onRequestError({ request: e, options: a, error: s }) {
                console.log("Errore nella request:", s),
                  (f.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: a, options: s }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (f.value = {
                    text: "Errore caricamento invoicee",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: a, options: s }) {
                t.value = a._data.data;
                const u = t.value.meseannoanticipo;
                if (u) {
                  const [g, w] = u.split("-");
                  x.value = `${w}-${g}`;
                } else x.value = null;
                t.value.anticipobancario = t.value.anticipobancario == 1;
                let r = (t.value.vat / t.value.taxable) * 100;
                const d = P.find((g) => g.value === r);
                (h.value = d || P[0]),
                  (y.value = O(t.value.invoicedate, t.value.paymentduedate)),
                  G();
              },
            },
          );
        }
      };
      return (
        we(async () => {
          (I.value = !0),
            (L.value = b.query.sc),
            await ye(),
            b.query.trancheid != null &&
              b.query.projectid != null &&
              b.query.trancheid != 0 &&
              b.query.projectid != 0 &&
              b.query.trancheid != null &&
              b.query.projectid != null &&
              (await G(b.query.projectid), await ve());
        }),
        (n, e) => (
          V(),
          ee(
            Me,
            {
              class: "modaldialog",
              onAfterLeave: J,
              modelValue: l(I),
              "onUpdate:modelValue":
                e[30] || (e[30] = (a) => (E(I) ? (I.value = a) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: i(() => [
                m("div", Ue, [
                  Y.idrec == 0
                    ? (V(), q("h2", Ie, "Nuova fattura attiva"))
                    : D("", !0),
                  Y.idrec > 0
                    ? (V(), q("h2", Ce, "Modifica fattura attiva"))
                    : D("", !0),
                  l(K) == 1
                    ? (V(),
                      q(
                        "h4",
                        ze,
                        " Attenzione esiste già una fattura per questa tranche ",
                      ))
                    : D("", !0),
                  o(
                    Ee,
                    {
                      modelValue: l(C),
                      "onUpdate:modelValue":
                        e[29] || (e[29] = (a) => (E(C) ? (C.value = a) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown: k(pe, ["enter"]),
                    },
                    {
                      default: i(() => [
                        o(te, null, {
                          default: i(() => [
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    S,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(t).project_id,
                                      "onUpdate:modelValue": [
                                        e[0] ||
                                          (e[0] = (a) => (l(t).project_id = a)),
                                        e[1] || (e[1] = (a) => G()),
                                      ],
                                      label: "Progetto*",
                                      rules: l($),
                                      items: _.projects,
                                      readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    Q,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[2] ||
                                        (e[2] = k(
                                          (a) => a.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(t).invoicenumber,
                                      "onUpdate:modelValue":
                                        e[3] ||
                                        (e[3] = (a) =>
                                          (l(t).invoicenumber = a)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Numero Fattura*",
                                      density: "compact",
                                      rules: l($),
                                      readonly: l(p).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Ye, [
                                    o(
                                      X,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        rules: l($),
                                        "onUpdate:modelValue": [
                                          e[4] || (e[4] = (a) => Z()),
                                          e[5] ||
                                            (e[5] = (a) =>
                                              (l(t).invoicedate = a)),
                                        ],
                                        modelValue: l(t).invoicedate,
                                        label: "Data fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    le,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[6] ||
                                          (e[6] = k(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        H,
                                      ],
                                      modelValue: l(t).taxable,
                                      "onUpdate:modelValue": [
                                        e[7] ||
                                          (e[7] = (a) => (l(t).taxable = a)),
                                        e[8] || (e[8] = (a) => z()),
                                      ],
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Imponibile",
                                      "decimal-separator": ",",
                                      density: "compact",
                                      readonly: l(p).hasinvoice == 0,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    S,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(h),
                                      "onUpdate:modelValue": [
                                        e[9] ||
                                          (e[9] = (a) =>
                                            E(h) ? (h.value = a) : null),
                                        e[10] || (e[10] = (a) => z()),
                                      ],
                                      label: "% Iva*",
                                      "return-object": "",
                                      items: P,
                                      readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    le,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[11] ||
                                          (e[11] = k(
                                            (a) => a.preventDefault(),
                                            ["enter"],
                                          )),
                                        H,
                                      ],
                                      modelValue: l(t).vat,
                                      "onUpdate:modelValue":
                                        e[12] ||
                                        (e[12] = (a) => (l(t).vat = a)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Iva",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly:
                                        l(p).hasinvoice == 0 ||
                                        l(h).value != null,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Be, [
                                    o(
                                      S,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(t).payment_tranche_id,
                                        "onUpdate:modelValue": [
                                          e[13] ||
                                            (e[13] = (a) =>
                                              (l(t).payment_tranche_id = a)),
                                          e[14] || (e[14] = (a) => me()),
                                        ],
                                        label: "Tranche",
                                        items: l(F),
                                        readonly: l(p).hasinvoice == 0,
                                        density: "compact",
                                        clearable: "",
                                        disabled:
                                          l(t).project_id == 0 ||
                                          l(t).project_id == null,
                                      },
                                      null,
                                      8,
                                      [
                                        "modelValue",
                                        "items",
                                        "readonly",
                                        "disabled",
                                      ],
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Te, [
                                    o(
                                      S,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        modelValue: l(t).bank_id,
                                        "onUpdate:modelValue":
                                          e[15] ||
                                          (e[15] = (a) => (l(t).bank_id = a)),
                                        label: "Banca",
                                        items: _.banks,
                                        autocomplete: "off",
                                        density: "compact",
                                        readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  o(
                                    S,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: l(y),
                                      "onUpdate:modelValue": [
                                        e[16] ||
                                          (e[16] = (a) =>
                                            E(y) ? (y.value = a) : null),
                                        e[17] || (e[17] = (a) => Z()),
                                      ],
                                      label: "Tipo pagamento*",
                                      items: re,
                                      readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Fe, [
                                    o(
                                      X,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: l(t).paymentduedate,
                                        "onUpdate:modelValue":
                                          e[18] ||
                                          (e[18] = (a) =>
                                            (l(t).paymentduedate = a)),
                                        label: "Data previsto pagamento*",
                                        rules: l($),
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly:
                                          l(p).hasinvoice == 0 || l(y) != null,
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
                            o(
                              c,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Ke, [
                                    o(
                                      X,
                                      {
                                        "item-title": "label",
                                        "item-value": "value",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(t).payment_date,
                                        "onUpdate:modelValue":
                                          e[19] ||
                                          (e[19] = (a) =>
                                            (l(t).payment_date = a)),
                                        label: "Data effettiva pagamento",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Pe, [
                                    o(
                                      S,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "label",
                                        "item-value": "value",
                                        modelValue: l(t).payed,
                                        "onUpdate:modelValue":
                                          e[20] ||
                                          (e[20] = (a) => (l(t).payed = a)),
                                        label: "Pagata*",
                                        rules: l($),
                                        items: de,
                                        density: "compact",
                                        readonly: l(p).hasinvoice == 0,
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
                            o(
                              c,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Le, [
                                    o(
                                      Se,
                                      {
                                        color: "green",
                                        baseColor: "red",
                                        density: "compact",
                                        modelValue: l(t).anticipobancario,
                                        "onUpdate:modelValue":
                                          e[21] ||
                                          (e[21] = (a) =>
                                            (l(t).anticipobancario = a)),
                                        readonly: l(p).hasinvoice == 0,
                                        label:
                                          "Anticipo Bancario: " +
                                          (l(t).anticipobancario == !0
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
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  l(t).anticipobancario == !0
                                    ? (V(),
                                      q("div", Oe, [
                                        o(
                                          Q,
                                          {
                                            density: "compact",
                                            modelValue:
                                              l(t).percentualeanticipo,
                                            "onUpdate:modelValue":
                                              e[22] ||
                                              (e[22] = (a) =>
                                                (l(t).percentualeanticipo = a)),
                                            readonly: l(p).hasinvoice == 0,
                                            label: "Percentuale Anticipo",
                                            class: "mt-0",
                                            autocomplete: "off",
                                            onKeydown:
                                              e[23] ||
                                              (e[23] = k(
                                                (a) => a.preventDefault(),
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
                                    : D("", !0),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  l(t).anticipobancario == !0
                                    ? (V(),
                                      q("div", Ge, [
                                        o(
                                          Q,
                                          {
                                            density: "compact",
                                            variant: "outlined",
                                            modelValue: l(T),
                                            "onUpdate:modelValue":
                                              e[27] ||
                                              (e[27] = (a) =>
                                                E(T) ? (T.value = a) : null),
                                            label: "Mese-Anno",
                                            placeholder: "MM-YYYY",
                                            readonly: "",
                                          },
                                          {
                                            default: i(() => [
                                              o(
                                                je,
                                                {
                                                  modelValue: l(A),
                                                  "onUpdate:modelValue":
                                                    e[26] ||
                                                    (e[26] = (a) =>
                                                      E(A)
                                                        ? (A.value = a)
                                                        : null),
                                                  activator: "parent",
                                                  "close-on-content-click": !1,
                                                },
                                                {
                                                  default: i(() => [
                                                    o(
                                                      $e,
                                                      { width: "320" },
                                                      {
                                                        default: i(() => [
                                                          o(
                                                            ke,
                                                            {
                                                              class:
                                                                "d-flex align-center justify-space-between",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                o(N, {
                                                                  icon: "mdi-chevron-left",
                                                                  variant:
                                                                    "text",
                                                                  onClick:
                                                                    e[24] ||
                                                                    (e[24] = (
                                                                      a,
                                                                    ) =>
                                                                      M.value--),
                                                                }),
                                                                m(
                                                                  "span",
                                                                  null,
                                                                  ae(l(M)),
                                                                  1,
                                                                ),
                                                                o(N, {
                                                                  icon: "mdi-chevron-right",
                                                                  variant:
                                                                    "text",
                                                                  onClick:
                                                                    e[25] ||
                                                                    (e[25] = (
                                                                      a,
                                                                    ) =>
                                                                      M.value++),
                                                                }),
                                                              ]),
                                                              _: 1,
                                                            },
                                                          ),
                                                          o(Re, null, {
                                                            default: i(() => [
                                                              o(
                                                                te,
                                                                { dense: "" },
                                                                {
                                                                  default: i(
                                                                    () => [
                                                                      (V(),
                                                                      q(
                                                                        _e,
                                                                        null,
                                                                        qe(
                                                                          ie,
                                                                          (a) =>
                                                                            o(
                                                                              c,
                                                                              {
                                                                                key: a.value,
                                                                                cols: "4",
                                                                              },
                                                                              {
                                                                                default:
                                                                                  i(
                                                                                    () => [
                                                                                      o(
                                                                                        N,
                                                                                        {
                                                                                          block:
                                                                                            "",
                                                                                          variant:
                                                                                            "text",
                                                                                          onClick:
                                                                                            (
                                                                                              s,
                                                                                            ) =>
                                                                                              ue(
                                                                                                a.value,
                                                                                              ),
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            i(
                                                                                              () => [
                                                                                                W(
                                                                                                  ae(
                                                                                                    a.label,
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
                                    : D("", !0),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              c,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: i(() => [
                                  m("div", Je, [
                                    o(
                                      Ne,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: l(t).note,
                                        "onUpdate:modelValue":
                                          e[28] ||
                                          (e[28] = (a) => (l(t).note = a)),
                                        label: "Note",
                                        density: "compact",
                                        readonly: l(p).hasinvoice == 0,
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
                  e[33] || (e[33] = m("br", null, null, -1)),
                  m("div", We, [
                    o(
                      N,
                      { class: "", onClick: J, color: "red" },
                      {
                        default: i(() => [
                          ...(e[31] || (e[31] = [W(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(Ae),
                    l(p).hasinvoice == 1
                      ? (V(),
                        ee(
                          N,
                          {
                            key: 0,
                            onClick: fe,
                            disabled: !l(C) || !l(U),
                            color: "green",
                          },
                          {
                            default: i(() => [
                              ...(e[32] || (e[32] = [W("Salva", -1)])),
                            ]),
                            _: 1,
                          },
                          8,
                          ["disabled"],
                        ))
                      : D("", !0),
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
  };
export { pa as _ };
