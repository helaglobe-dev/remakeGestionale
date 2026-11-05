import { _ as Re } from "./ClyIuovc.js";
import {
  E as ke,
  u as Ee,
  F as xe,
  r as p,
  G as qe,
  o as De,
  J as q,
  y as g,
  C as l,
  z as u,
  x as ie,
  K as D,
  B as i,
  A as R,
  N as ye,
  M as J,
  L as o,
  D as c,
  n as Ne,
  k as Se,
  e as Te,
  P as Ie,
} from "./CYsiv7Qj.js";
import { $ as P } from "./BvG7V8Ak.js";
import { V as he } from "./MIubIMrV.js";
import { V as Pe, a as N } from "./Bj0ZT2dB.js";
import { V as ne } from "./DCAzZvgN.js";
import { V as be } from "./Bx6RXzqb.js";
import { V as we } from "./Da5kZyhM.js";
import { V as Ve } from "./B51noTYL.js";
import { V as C, a as U } from "./B_W9U9Wp.js";
import { V as $e } from "./BqujDEEl.js";
import { V as ze } from "./Dlfzj7mx.js";
import { x as z } from "./D16A7lth.js";
import { u as Ce } from "./LKQL6vAN.js";
import { V as _e } from "./ss-1h9Hv.js";
import { V as Ae, a as Me, b as se, c as re } from "./CxBYvc7u.js";
import { V as H } from "./Cv1q1CuH.js";
import { V as je } from "./BrCrqdgZ.js";
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
const Ue = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Fe = { key: 0, class: "pb-10 pageh2" },
  Be = { key: 1, class: "pb-10 pageh2" },
  Le = { class: "d-flex justify-center" },
  Ye = { class: "d-flex justify-center" },
  Ge = { class: "d-flex justify-center" },
  Ke = { class: "d-flex justify-center" },
  Oe = { class: "d-flex justify-center" },
  We = { style: { display: "flex" } },
  Xe = {
    __name: "DialogInsModPayTranche",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      pname: String,
      aryclients: Array,
      ptype: String,
    },
    emits: ["close"],
    setup(Q, { emit: _ }) {
      const { data: k } = ke(),
        F = Ee(),
        Z = xe(),
        B = Ne(),
        ge = _,
        E = Q,
        b = p(!1),
        S = p(!1),
        y = qe("snackbar"),
        T = p([]),
        n = p({
          id: 0,
          type: "A",
          percent: 0,
          total: 0,
          previewdate: "",
          paymentdate: "",
          payed: "N",
          description: "",
          note: "",
        }),
        A = p(0),
        ee = p(0),
        M = p(!0),
        w = p({ value: 22, label: "22%" }),
        L = [
          { value: null, label: "Personalizzata" },
          { value: 0, label: "0%" },
          { value: 4, label: "4%" },
          { value: 10, label: "10%" },
          { value: 20, label: "20%" },
          { value: 22, label: "22%" },
        ],
        x = p("30"),
        te = [
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
        j = p([(r) => !!r || "Campo obbligatorio"]),
        ae = p(null),
        ue = [
          { label: "Anticipo", value: "A" },
          { label: "Intermedio", value: "I" },
          { label: "Saldo", value: "S" },
        ],
        Y = (r) => {
          r.target.tagName !== "TEXTAREA" && (r.preventDefault(), save());
        };
      function oe(r) {
        if (r.key === ".") {
          r.preventDefault();
          const e = r.target,
            t = e.selectionStart,
            s = e.selectionEnd,
            a = e.value;
          (e.value = a.substring(0, t) + "," + a.substring(s)),
            e.setSelectionRange(t + 1, t + 1),
            e.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      function I() {
        if (x.value != null)
          if (n.value.previewdate == null || n.value.previewdate == null)
            n.value.paymentdate = null;
          else {
            const r = new Date(n.value.previewdate);
            if (x.value.endsWith("fm")) {
              const e = parseInt(x.value, 10) / 30;
              r.setDate(1), r.setMonth(r.getMonth() + e + 1), r.setDate(0);
            } else r.setDate(r.getDate() + parseInt(x.value));
            n.value.paymentdate = r;
          }
      }
      function le() {
        w.value.value != null &&
          (n.value.total == null || n.value.total == 0 || n.value.total == null
            ? (n.value.vat = 0)
            : (n.value.vat = (n.value.total * w.value.value) / 100));
      }
      function de() {
        const r = F.resolve({
          path: "/adminactiveinvoices",
          query: { trancheid: E.idrec, projectid: n.value.project_id },
        });
        window.open(r.href, "_blank");
      }
      const pe = async () => {
        M.value = !1;
        const r = new Date(n.value.previewdate),
          e = r.getFullYear(),
          t = String(r.getMonth() + 1).padStart(2, "0"),
          s = String(r.getDate()).padStart(2, "0");
        n.value.previewdate = `${e}-${t}-${s}`;
        const a = new Date(n.value.paymentdate),
          m = a.getFullYear(),
          v = String(a.getMonth() + 1).padStart(2, "0"),
          V = String(a.getDate()).padStart(2, "0");
        (n.value.paymentdate = `${m}-${v}-${V}`),
          (n.value.sponsor_id = n.value.sponsor_id
            ? n.value.sponsor_id.value
            : 0),
          (n.value.project_id = Z.query.id);
        let d = { tranche: n.value };
        await P(B.public.apiBaseurl + "invoice/tranchecreateedit", {
          method: "POST",
          body: d,
        })
          .then(() => {
            E.idrec == 0
              ? (y.value = {
                  text: "Creazione tranche completata",
                  type: "success",
                  show: !0,
                })
              : (y.value = {
                  text: "Modifica tranche completata",
                  type: "success",
                  show: !0,
                }),
              (M.value = !0),
              $();
          })
          .catch((f) => {
            let K = JSON.parse(f.data).errors.title;
            console.log("catcherr", f.data),
              (y.value = { text: K, type: "danger", show: !0 }),
              (M.value = !0);
          });
      };
      function $() {
        ge("close");
      }
      const ce = async () => {
        if (E.idrec > 0) {
          const { data: r } = await P(
            B.public.apiBaseurl + "invoice/trancheget/" + E.idrec,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: s }) {
                console.log("Errore nella request:", s),
                  (y.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: s }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: s }) {
                (n.value = t._data.data),
                  n.value.sponsor_id == 0 && (n.value.sponsor_id = null);
                let a = (n.value.vat / n.value.total) * 100;
                const m = L.find((v) => v.value === a);
                (w.value = m || L[0]),
                  (x.value = G(n.value.previewdate, n.value.paymentdate));
              },
            },
          );
        } else x.value = E.ptype;
      };
      function G(r, e) {
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
        for (const s of t) {
          const a = new Date(r);
          if (s !== null) {
            if (s.endsWith("fm")) {
              const m = parseInt(s, 10) / 30;
              a.setDate(1), a.setMonth(a.getMonth() + m + 1), a.setDate(0);
            } else a.setDate(a.getDate() + parseInt(s));
            if (new Date(a).toDateString() === new Date(e).toDateString())
              return s;
          }
        }
        return null;
      }
      const me = async () => {
          T.value = [];
          const { data: r } = await P(
            B.public.apiBaseurl + "project/getsponsors/" + Z.query.id,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: s }) {
                console.log("Errore nella request:", s),
                  (y.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: s }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: s }) {
                t._data.data.forEach((m) => {
                  T.value.push({
                    label: E.aryclients[m.client_id],
                    value: m.id,
                    paymenttype: m.paymenttype,
                  });
                });
              },
            },
          );
        },
        ve = async () => {
          const { data: r } = await P(
            B.public.apiBaseurl + "project/gettotalproject/" + Z.query.id,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: s }) {
                console.log("Errore nella request:", s),
                  (y.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: s }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento tranche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: s }) {
                (ee.value = t._data.data.totalep),
                  (A.value = t._data.data.newtotaleproposta);
              },
            },
          );
        };
      function fe() {
        (x.value =
          n.value.sponsor_id == null
            ? ae.value
            : n.value.sponsor_id.paymenttype),
          I();
      }
      return (
        De(async () => {
          (b.value = !0), await ve(), await me(), await ce();
        }),
        (r, e) => (
          g(),
          q(
            ze,
            {
              class: "modaldialog",
              onAfterLeave: $,
              modelValue: o(b),
              "onUpdate:modelValue":
                e[19] || (e[19] = (t) => (J(b) ? (b.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: l(() => [
                u("div", Ue, [
                  Q.idrec == 0
                    ? (g(),
                      ie(
                        "h2",
                        Fe,
                        "Nuova tranche di pagamento del progetto " + R(E.pname),
                        1,
                      ))
                    : D("", !0),
                  Q.idrec > 0
                    ? (g(),
                      ie(
                        "h2",
                        Be,
                        "Modifica tranche di pagamento del progetto " +
                          R(E.pname),
                        1,
                      ))
                    : D("", !0),
                  i(
                    he,
                    {
                      modelValue: o(S),
                      "onUpdate:modelValue":
                        e[17] || (e[17] = (t) => (J(S) ? (S.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown: ye(Y, ["enter"]),
                    },
                    {
                      default: l(() => [
                        i(Pe, null, {
                          default: l(() => [
                            i(
                              N,
                              { cols: "12", sm: "12", class: "pt-0 pb-5 mt-0" },
                              {
                                default: l(() => [
                                  e[20] ||
                                    (e[20] = u(
                                      "b",
                                      null,
                                      "Totale Progetto:",
                                      -1,
                                    )),
                                  c(
                                    " " +
                                      R(
                                        new Intl.NumberFormat("it-IT", {
                                          style: "currency",
                                          useGrouping: !0,
                                          currency: "EUR",
                                        }).format(o(A) != 0 ? o(A) : o(ee)),
                                      ),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            i(
                              N,
                              { cols: "12", sm: "8", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  i(
                                    ne,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: o(n).sponsor_id,
                                      "onUpdate:modelValue": [
                                        e[0] ||
                                          (e[0] = (t) => (o(n).sponsor_id = t)),
                                        e[1] || (e[1] = (t) => fe()),
                                      ],
                                      label: "Sponsor",
                                      items: o(T),
                                      clearable: "",
                                      "return-object": "",
                                      disabled: o(T).length == 0,
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
                            i(
                              N,
                              { cols: "12", sm: "4", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  u("div", Le, [
                                    i(
                                      ne,
                                      {
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                        "item-title": "label",
                                        "item-value": "value",
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: o(n).type,
                                        "onUpdate:modelValue":
                                          e[2] ||
                                          (e[2] = (t) => (o(n).type = t)),
                                        label: "Tipo*",
                                        rules: o(j),
                                        items: ue,
                                        density: "compact",
                                        readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  i(
                                    be,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[3] ||
                                          (e[3] = ye(
                                            (t) => t.preventDefault(),
                                            ["enter"],
                                          )),
                                        oe,
                                      ],
                                      modelValue: o(n).total,
                                      "onUpdate:modelValue": [
                                        e[4] ||
                                          (e[4] = (t) => (o(n).total = t)),
                                        e[5] || (e[5] = (t) => le()),
                                      ],
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Imponibile",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  i(
                                    ne,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: o(w),
                                      "onUpdate:modelValue": [
                                        e[6] ||
                                          (e[6] = (t) =>
                                            J(w) ? (w.value = t) : null),
                                        e[7] || (e[7] = (t) => le()),
                                      ],
                                      label: "% Iva*",
                                      "return-object": "",
                                      items: L,
                                      readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  i(
                                    be,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown: [
                                        e[8] ||
                                          (e[8] = ye(
                                            (t) => t.preventDefault(),
                                            ["enter"],
                                          )),
                                        oe,
                                      ],
                                      modelValue: o(n).vat,
                                      "onUpdate:modelValue":
                                        e[9] || (e[9] = (t) => (o(n).vat = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      precision: 2,
                                      label: "Iva",
                                      density: "compact",
                                      "decimal-separator": ",",
                                      readonly:
                                        o(k).hasinvoice == 0 ||
                                        o(w).value != null,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  u("div", Ye, [
                                    i(
                                      we,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: o(n).previewdate,
                                        "onUpdate:modelValue": [
                                          e[10] ||
                                            (e[10] = (t) =>
                                              (o(n).previewdate = t)),
                                          e[11] || (e[11] = (t) => I()),
                                        ],
                                        label: "Data prev. emissione fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        rules: o(j),
                                        readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  i(
                                    ne,
                                    {
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "label",
                                      "item-value": "value",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      modelValue: o(x),
                                      "onUpdate:modelValue": [
                                        e[12] ||
                                          (e[12] = (t) =>
                                            J(x) ? (x.value = t) : null),
                                        e[13] || (e[13] = (t) => I()),
                                      ],
                                      label: "Tipo pagamento*",
                                      items: te,
                                      readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "2", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  u("div", Ge, [
                                    i(
                                      we,
                                      {
                                        variant: "outlined",
                                        autocomplete: "off",
                                        modelValue: o(n).paymentdate,
                                        "onUpdate:modelValue":
                                          e[14] ||
                                          (e[14] = (t) =>
                                            (o(n).paymentdate = t)),
                                        label: "Data prev. pagamento fattura*",
                                        density: "compact",
                                        "input-format": "dd/mm/YY",
                                        rules: o(j),
                                        readonly:
                                          o(k).hasinvoice == 0 || o(x) != null,
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
                              N,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  u("div", Ke, [
                                    i(
                                      Ve,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: o(n).description,
                                        "onUpdate:modelValue":
                                          e[15] ||
                                          (e[15] = (t) =>
                                            (o(n).description = t)),
                                        label: "Milestone",
                                        density: "compact",
                                        readonly: o(k).hasinvoice == 0,
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
                              N,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: l(() => [
                                  u("div", Oe, [
                                    i(
                                      Ve,
                                      {
                                        autocomplete: "off",
                                        variant: "outlined",
                                        modelValue: o(n).note,
                                        "onUpdate:modelValue":
                                          e[16] ||
                                          (e[16] = (t) => (o(n).note = t)),
                                        label: "Note",
                                        density: "compact",
                                        readonly: o(k).hasinvoice == 0,
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
                  e[24] || (e[24] = u("br", null, null, -1)),
                  u("div", We, [
                    i(
                      C,
                      { class: "", onClick: $, color: "red" },
                      {
                        default: l(() => [
                          ...(e[21] || (e[21] = [c(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    i($e),
                    o(k).hasinvoice == 1 && E.idrec > 0
                      ? (g(),
                        q(
                          C,
                          {
                            key: 0,
                            onClick: e[18] || (e[18] = (t) => de()),
                            class: "mr-4",
                            color: "blue",
                          },
                          {
                            default: l(() => [
                              ...(e[22] || (e[22] = [c("GENERA FATTURA", -1)])),
                            ]),
                            _: 1,
                          },
                        ))
                      : D("", !0),
                    o(k).hasinvoice == 1
                      ? (g(),
                        q(
                          C,
                          {
                            key: 1,
                            onClick: pe,
                            disabled: !o(S) || !o(M),
                            color: "green",
                          },
                          {
                            default: l(() => [
                              ...(e[23] || (e[23] = [c("Salva", -1)])),
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
  },
  He = { class: "pl-10 pr-10" },
  Je = { class: "divcenterpage" },
  Qe = { class: "pb-4 pageh3", style: { display: "inline", float: "left" } },
  Ze = { style: { display: "inline", float: "right" } },
  et = ["title"],
  tt = { key: 0 },
  at = { class: "mt-4" },
  ot = { class: "font-weight-bold", style: { "text-align": "right" } },
  $t = {
    __name: "paymenttranches",
    setup(Q) {
      const _ = Ne(),
        k = Ee(),
        F = xe(),
        { status: Z, signIn: B, signOut: ge, data: E } = ke(),
        b = p([]),
        S = p(""),
        y = qe("snackbar"),
        T = p(!1),
        n = p(0),
        A = p(0),
        ee = p(!0),
        M = Se(() => b.value.reduce((r, e) => r + (e.total || 0), 0));
      p(!1);
      const w = p([]),
        L = p(!1),
        x = [
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
          { title: "Imponibile", key: "total", sortable: !0, align: "end" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        te = p(0),
        j = [
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
          { title: "Note", key: "note" },
        ],
        ae = p("");
      Ce({
        title: "Tranche di pagamento",
        meta: [{ name: "description", content: "Tranche di pagamento" }],
      });
      const ue = ({ item: r }) => {
        const e = new Date(),
          t =
            e.getFullYear() +
            "-" +
            String(e.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(e.getDate()).padStart(2, "0");
        return r.payed == "N" && r.paymentdate < t ? {} : {};
      };
      function Y(r) {
        (A.value = parseInt(r)), (T.value = !0);
      }
      const oe = async () => {
          (T.value = !1), await G();
        },
        I = p("");
      function le() {
        const r = b.value.map((v) => {
            const V = {};
            return (
              j.forEach((d) => {
                if (d.title == "Progetto") V[d.title] = I.value;
                else if (
                  d.title == "Data Prev. Emissione " ||
                  d.title == "Data Prev. Pagamento" ||
                  d.title == "Data Emissione Fattura"
                ) {
                  let f = v[d.key];
                  if (f != null && f !== "" && f !== "0000-00-00") {
                    f = String(f).trim();
                    let K;
                    if (f.includes("-")) {
                      const h = f.split("-");
                      if (h.length === 3) {
                        const O = Number(h[0]),
                          W = Number(h[1]),
                          X = Number(h[2]);
                        !isNaN(O) &&
                          !isNaN(W) &&
                          !isNaN(X) &&
                          (K = new Date(O, W - 1, X));
                      }
                    } else if (f.includes("/")) {
                      const h = f.split("/");
                      if (h.length === 3) {
                        const O = Number(h[0]),
                          W = Number(h[1]),
                          X = Number(h[2]);
                        !isNaN(X) &&
                          !isNaN(W) &&
                          !isNaN(O) &&
                          (K = new Date(X, W - 1, O));
                      }
                    }
                    V[d.title] = K ?? "";
                  } else V[d.title] = "";
                } else
                  d.title == "Tipo"
                    ? (V[d.title] =
                        v[d.key] == "A"
                          ? "Anticipo"
                          : v[d.key] == "S"
                            ? "Saldo"
                            : "Intermedia")
                    : d.title == "Emessa Fattura"
                      ? (V[d.title] = v[d.key] == 0 ? "No" : "Si")
                      : d.title == "Pagata"
                        ? (V[d.title] = v[d.key] == "N" ? "No" : "Si")
                        : (V[d.title] = v[d.key] ?? "");
              }),
              V
            );
          }),
          e = z.utils.json_to_sheet(r),
          t = z.utils.decode_range(e["!ref"]);
        e["!cols"] = [
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
          { wch: 15 },
          { wch: 60 },
        ];
        for (let v = t.s.c; v <= t.e.c; v++) {
          const V = z.utils.encode_cell({ r: 0, c: v });
          e[V] && (e[V].s = { font: { bold: !0 } });
        }
        const s = j.map((v) => v.title),
          a = ["Data Prev. Emissione ", "Data Prev. Pagamento"];
        for (const v of a) {
          const V = s.indexOf(v);
          if (V >= 0)
            for (let d = 1; d <= t.e.r; d++) {
              const f = z.utils.encode_cell({ r: d, c: V });
              e[f] &&
                e[f].v instanceof Date &&
                ((e[f].t = "d"), (e[f].z = "dd/mm/yyyy"));
            }
        }
        const m = z.utils.book_new();
        z.utils.book_append_sheet(m, e, "Tranches"),
          z.writeFile(m, "export-tranches-progetto-" + I.value + ".xlsx");
      }
      const de = async (r) => {
          const { data: e } = await P(
            _.public.apiBaseurl + "invoice/tranchedelete/" + r,
            {
              onRequest({ request: t, options: s }) {},
              onRequestError({ request: t, options: s, error: a }) {
                console.log("Errore nella request:", a);
              },
              onResponseError({ request: t, response: s, options: a }) {
                y.value = {
                  text: "Errore cancellazione tranche",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: t, response: s, options: a }) {
                (y.value = {
                  text: "Tranche eliminata",
                  type: "success",
                  show: !0,
                }),
                  G();
              },
            },
          );
        },
        pe = () => {
          n.value = E.value.id;
        };
      function $() {
        L.value = window.innerWidth <= 960;
      }
      function ce() {
        k.push("/tasks?id=" + F.query.id);
      }
      const G = async () => {
          b.value = [];
          const { data: r } = await P(
            _.public.apiBaseurl + "invoice/tranchelist/" + F.query.id,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: s }) {
                console.log("Errore nella request:", s),
                  (y.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: s }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: s }) {
                b.value = t._data.data;
                for (let a = 0; a < b.value.length; a++)
                  (b.value[a].cliente = w.value[b.value[a].client_id]),
                    (b.value[a].sp =
                      w.value[b.value[a].sponsor] != null
                        ? w.value[b.value[a].sponsor]
                        : "");
              },
            },
          );
        },
        me = async () => {
          const { data: r } = await P(
            _.public.apiBaseurl + "project/get/" + F.query.id,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: s }) {
                console.log("Errore nella request:", s),
                  (y.value = {
                    text: "Errore: " + s,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: s }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: s }) {
                (I.value = "[" + t._data.data.code + "] " + t._data.data.name),
                  (te.value = t._data.data.id),
                  (ae.value = t._data.data.paymenttype);
              },
            },
          );
        },
        ve = async () => {
          w.value = [];
          const { data: r } = P(_.public.apiBaseurl + "client/list", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: s }) {
              console.log("Errore nella request:", s);
            },
            onResponseError({ request: e, response: t, options: s }) {
              y.value = {
                text: "Errore caricamento clienti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: t, options: s }) {
              t._data.data.forEach((a) => {
                w.value[a.id] = a.name;
              });
            },
          });
        };
      function fe(r) {
        const e = k.resolve({
          path: "/activeinvoices",
          query: { trancheid: r, id: te.value },
        });
        window.open(e.href, "_blank");
      }
      return (
        De(async () => {
          $(),
            window.addEventListener("resize", $),
            await ve(),
            await me(),
            pe(),
            await G();
        }),
        Te(() => {
          window.removeEventListener("resize", $);
        }),
        (r, e) => {
          const t = Re,
            s = Xe;
          return (
            g(),
            ie("div", He, [
              u("div", Je, [
                e[28] || (e[28] = u("br", null, null, -1)),
                u("h3", Qe, "Tranche di pagamento del progetto " + R(o(I)), 1),
                u("div", Ze, [
                  o(E).hasinvoice == 1
                    ? (g(),
                      q(
                        C,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (a) => Y(0)),
                          color: "green",
                        },
                        {
                          default: l(() => [
                            i(U, null, {
                              default: l(() => [
                                ...(e[3] || (e[3] = [c("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[4] || (e[4] = c("Nuova Tranche", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : D("", !0),
                  i(
                    C,
                    { class: "ml-3", color: "primary", onClick: le },
                    {
                      default: l(() => [
                        i(
                          U,
                          { class: "mr-3" },
                          {
                            default: l(() => [
                              ...(e[5] || (e[5] = [c("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[6] || (e[6] = c(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  i(
                    C,
                    {
                      onClick: e[1] || (e[1] = (a) => ce()),
                      color: "orange",
                      class: "ml-4",
                    },
                    {
                      default: l(() => [
                        i(U, null, {
                          default: l(() => [
                            ...(e[7] || (e[7] = [c("mdi-arrow-left", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[8] || (e[8] = c("Torna al progetto", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[29] ||
                  (e[29] = u("div", { style: { clear: "both" } }, null, -1)),
                i(
                  _e,
                  {
                    density: "compact",
                    items: o(b),
                    headers: x,
                    search: o(S),
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
                    "row-props": ue,
                  },
                  {
                    top: l(() => [
                      i(
                        je,
                        {
                          modelValue: o(S),
                          "onUpdate:modelValue":
                            e[2] ||
                            (e[2] = (a) => (J(S) ? (S.value = a) : null)),
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
                    "item.sponsor": l(({ item: a }) => [
                      u("span", null, R(o(w)[a.sponsor]), 1),
                    ]),
                    "item.client_id": l(({ item: a }) => [
                      u("span", { title: a.id }, R(o(w)[a.client_id]), 9, et),
                    ]),
                    "item.total": l(({ item: a }) => [
                      u(
                        "span",
                        null,
                        R(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(a.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.previewdate": l(({ item: a }) => [
                      u(
                        "span",
                        null,
                        R(new Date(a.previewdate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentdate": l(({ item: a }) => [
                      u(
                        "span",
                        null,
                        R(new Date(a.paymentdate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.emessa": l(({ item: a }) => [
                      a.invoicedate != null
                        ? (g(),
                          ie(
                            "span",
                            tt,
                            R(
                              new Date(a.invoicedate).toLocaleDateString(
                                "it-IT",
                              ),
                            ),
                            1,
                          ))
                        : D("", !0),
                    ]),
                    "item.type": l(({ item: a }) => [
                      a.type == "A"
                        ? (g(),
                          q(
                            H,
                            {
                              key: 0,
                              label: "",
                              color: "grey",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[9] || (e[9] = [c(" Anticipo ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : D("", !0),
                      a.type == "I"
                        ? (g(),
                          q(
                            H,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[10] || (e[10] = [c(" Intermedia ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : D("", !0),
                      a.type == "S"
                        ? (g(),
                          q(
                            H,
                            {
                              key: 2,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[11] || (e[11] = [c(" Saldo ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : D("", !0),
                    ]),
                    "item.payed": l(({ item: a }) => [
                      a.payed == "P"
                        ? (g(),
                          q(
                            H,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[12] || (e[12] = [c(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : D("", !0),
                      a.payed == "N"
                        ? (g(),
                          q(
                            H,
                            {
                              key: 1,
                              label: "",
                              color: "red",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: l(() => [
                                ...(e[13] || (e[13] = [c(" Non Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : D("", !0),
                    ]),
                    "item.actions": l(({ item: a }) => [
                      i(
                        Ae,
                        { "offset-y": "" },
                        {
                          activator: l(({ props: m }) => [
                            i(
                              C,
                              Ie(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                m,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: l(() => [
                            u("div", at, [
                              i(
                                Me,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: l(() => [
                                    o(E).hasinvoice == 1
                                      ? (g(),
                                        q(
                                          se,
                                          {
                                            key: 0,
                                            onClick: (m) => Y(a.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              i(
                                                U,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[14] ||
                                                      (e[14] = [
                                                        c("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              i(
                                                re,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[15] ||
                                                      (e[15] = [
                                                        c("Modifica", -1),
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
                                        q(
                                          se,
                                          {
                                            key: 1,
                                            onClick: (m) => Y(a.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              i(
                                                U,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[16] ||
                                                      (e[16] = [
                                                        c("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              i(
                                                re,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[17] ||
                                                      (e[17] = [
                                                        c("Visualizza", -1),
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
                                    i(
                                      se,
                                      {
                                        onClick: (m) => fe(a.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: l(() => [
                                          i(
                                            U,
                                            { style: { opacity: "1" } },
                                            {
                                              default: l(() => [
                                                ...(e[18] ||
                                                  (e[18] = [
                                                    c(
                                                      "mdi-invoice-text-plus-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: l(() => [
                                          i(
                                            re,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: l(() => [
                                                ...(e[19] ||
                                                  (e[19] = [
                                                    c("Genera Fattura", -1),
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
                                    o(E).hasinvoice == 1
                                      ? (g(),
                                        q(
                                          se,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: l(() => [
                                              i(
                                                re,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    i(
                                                      t,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (m) =>
                                                          de(a.id),
                                                        iconadelete: o(ee),
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
                                      : D("", !0),
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
                    tfoot: l(() => [
                      u("tr", null, [
                        e[20] ||
                          (e[20] = u(
                            "td",
                            {
                              class: "font-weight-bold",
                              style: { height: "40px" },
                            },
                            "Totale",
                            -1,
                          )),
                        e[21] || (e[21] = u("td", null, null, -1)),
                        e[22] || (e[22] = u("td", null, null, -1)),
                        e[23] || (e[23] = u("td", null, null, -1)),
                        e[24] || (e[24] = u("td", null, null, -1)),
                        e[25] || (e[25] = u("td", null, null, -1)),
                        e[26] || (e[26] = u("td", null, null, -1)),
                        u(
                          "td",
                          ot,
                          R(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(o(M)),
                          ),
                          1,
                        ),
                        e[27] || (e[27] = u("td", null, null, -1)),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
                o(T)
                  ? (g(),
                    q(
                      s,
                      {
                        key: 0,
                        ptype: o(ae),
                        aryclients: o(w),
                        pname: o(I),
                        dialoginsmod: o(T),
                        idrec: o(A),
                        onClose: oe,
                      },
                      null,
                      8,
                      ["ptype", "aryclients", "pname", "dialoginsmod", "idrec"],
                    ))
                  : D("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { $t as default };
