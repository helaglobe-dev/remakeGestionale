import { _ as Ee } from "./ClyIuovc.js";
import { _ as _e } from "./BHW_PPbD.js";
import { x as k } from "./D16A7lth.js";
import {
  u as qe,
  F as Ne,
  E as Ve,
  r as p,
  G as Re,
  o as Te,
  e as De,
  x as Fe,
  z as y,
  B as i,
  J as b,
  K as N,
  A as E,
  L as d,
  C as l,
  M as te,
  n as he,
  y as w,
  D as m,
  P as Ie,
} from "./CYsiv7Qj.js";
import { u as Pe } from "./LKQL6vAN.js";
import { $ as _ } from "./BvG7V8Ak.js";
import { V as h, a as V } from "./B_W9U9Wp.js";
import { V as Ce } from "./ss-1h9Hv.js";
import { V as ze } from "./Dlfzj7mx.js";
import { V as Se, a as Be, b as $, c as M } from "./CxBYvc7u.js";
import { V as H } from "./Cv1q1CuH.js";
import { V as je } from "./BrCrqdgZ.js";
import { V as Ae, c as Le, d as $e } from "./sbneMOUU.js";
import { V as Me } from "./BqujDEEl.js";
import "./MIubIMrV.js";
import "./Bj0ZT2dB.js";
import "./DCAzZvgN.js";
import "./D3DeQzvF.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./B51noTYL.js";
import "./Bx6RXzqb.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./fKsYyVgl.js";
import "./CCBmAzgz.js";
const Oe = { class: "pl-10 pr-10" },
  Ue = { class: "divcenterpage" },
  Xe = { class: "pb-4 pageh3", style: { display: "inline", float: "left" } },
  Ge = { style: { display: "inline", float: "right" } },
  Je = ["title"],
  He = { class: "mt-4" },
  Dt = {
    __name: "passiveinvoices",
    setup(Ke) {
      const x = he(),
        oe = qe(),
        R = Ne(),
        { status: We, signIn: Qe, signOut: Ye, data: T } = Ve(),
        I = p([]),
        P = p(""),
        v = Re("snackbar"),
        C = p(!1),
        ae = p(0),
        K = p(0),
        se = p(!0),
        O = p([]),
        U = p([]);
      p(!1);
      const D = p(!1),
        le = p(!1),
        W = p(0),
        re = [
          { title: "Fornitore", key: "supplier_id", sortable: !0 },
          { title: "Documento", key: "documenttype", sortable: !0 },
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
          { title: "Tipo", key: "type" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        z = p([]),
        S = p([]);
      p("F");
      const ne = [
          { text: "Fattura", value: "F" },
          { text: "Notula", value: "N" },
          { text: "Scontrino", value: "S" },
          { text: "F24", value: "X" },
          { text: "Altro", value: "A" },
        ],
        B = [
          { title: "Documento", key: "documenttype" },
          { title: "Fornitore", key: "supplier_id" },
          { title: "Progetto", key: "project_id" },
          { title: "Task", key: "task_id" },
          { title: "Numero F.", key: "invoicenumber" },
          { title: "Data F.", key: "invoicedate" },
          { title: "Imponibile", key: "taxable" },
          { title: "Iva", key: "vat" },
          { title: "Totale", key: "total" },
          { title: "Data Scadenza", key: "paymentduedate" },
          { title: "Banca", key: "bank_id" },
          { title: "Iban", key: "iban" },
          { title: "Causale", key: "causale" },
          { title: "Tipo", key: "type" },
          { title: "Data Pagamento", key: "payment_date" },
          { title: "Pagata", key: "payed" },
          { title: "Note", key: "note" },
        ];
      p([]), p([]);
      const X = p([]),
        Q = p([]);
      Pe({
        title: "Fatture Passive",
        meta: [{ name: "description", content: "Fatture Passive" }],
      });
      const ie = ({ item: n }) =>
        n.payed == "P"
          ? { class: "row-ok-pi" }
          : n.payed == "D"
            ? { class: "row-error-pi" }
            : n.payed == "N"
              ? { class: "row-grey-pi" }
              : {};
      function ue() {
        D.value = !0;
      }
      const pe = async () => {
        (X.value = []), (Q.value = []);
        const { data: n } = await _(x.public.apiBaseurl + "project/list/", {
          onRequest({ request: e, options: o }) {},
          onRequestError({ request: e, options: o, error: a }) {
            console.log("Errore nella request:", a),
              (v.value = { text: "Errore: " + a, type: "danger", show: !0 });
          },
          onResponseError({ request: e, response: o, options: a }) {
            console.log("Errore nella response: " + o._data.error.messages[0]),
              (v.value = {
                text: "Errore caricamento progetto",
                type: "danger",
                show: !0,
              });
          },
          onResponse({ request: e, response: o, options: a }) {
            o._data.data.forEach((t) => {
              X.value.push({
                label: "[" + t.code + "] " + t.name,
                value: t.id,
              }),
                (Q.value[t.id] = "[" + t.code + "] " + t.name);
            });
          },
        });
      };
      function ce(n) {
        if (n == null || n === "" || n === "0000-00-00") return "";
        n = String(n).trim();
        let e;
        if (n.includes("-")) {
          if (
            ((e = n.split("-").map(Number)), e.length === 3 && !e.some(isNaN))
          )
            return new Date(e[0], e[1] - 1, e[2]);
        } else if (
          n.includes("/") &&
          ((e = n.split("/").map(Number)), e.length === 3 && !e.some(isNaN))
        )
          return new Date(e[2], e[1] - 1, e[0]);
        return "";
      }
      function de() {
        const n = ["Data Scadenza", "Data F.", "Data Pagamento"],
          e = ["Imponibile", "Iva", "Totale"],
          o = [],
          a = [],
          t = {};
        S.value.forEach((r) => {
          t[r.value] = r.label;
        });
        const g = {};
        z.value.forEach((r) => {
          g[r.value] = r.label;
        });
        const be = (r) =>
          r == "F"
            ? "Fattura"
            : r == "N"
              ? "Notula"
              : r == "X"
                ? "F24"
                : r == "S"
                  ? "Scontrino"
                  : "Altro";
        I.value.forEach((r) => {
          const c = {};
          B.forEach((s) => {
            if (s.title == "Progetto" || s.title == "Task") c[s.title] = "";
            else if (s.title == "Documento") c[s.title] = be(r[s.key]);
            else if (n.includes(s.title)) c[s.title] = ce(r[s.key]);
            else if (e.includes(s.title)) {
              const u = parseFloat(r[s.key]);
              c[s.title] = isNaN(u) ? "" : u;
            } else
              s.title == "Banca"
                ? (c[s.title] = r[s.key] ? (g[r[s.key]] ?? "") : "")
                : s.title == "Pagata"
                  ? (c[s.title] = r[s.key] == "N" ? "No" : "Si")
                  : (c[s.title] = r[s.key] ?? "");
          }),
            o.push(c),
            (r.tasks || [])
              .filter((s) => s.project_id == R.query.id)
              .forEach((s) => {
                const u = {};
                B.forEach((xe) => {
                  u[xe.title] = "";
                }),
                  (u.Progetto = F.value),
                  (u.Task = s.task_id ? (t[s.task_id] ?? "") : "");
                const A = parseFloat(s.taxable),
                  L = parseFloat(s.vat);
                (u.Imponibile = isNaN(A) ? "" : A),
                  (u.Iva = isNaN(L) ? "" : L),
                  (u.Totale = isNaN(A) ? "" : A + (isNaN(L) ? 0 : L)),
                  a.push(o.length),
                  o.push(u);
              });
        });
        const f = k.utils.json_to_sheet(o, {
            cellDates: !0,
            header: B.map((r) => r.title),
          }),
          q = k.utils.decode_range(f["!ref"]),
          Z = B.map((r) => r.title);
        f["!cols"] = [
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 40 },
          { wch: 25 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
        ];
        for (let r = q.s.c; r <= q.e.c; r++) {
          const c = k.utils.encode_cell({ r: 0, c: r });
          f[c] && (f[c].s = { font: { bold: !0 } });
        }
        n.forEach((r) => {
          const c = Z.indexOf(r);
          if (!(c < 0))
            for (let s = 1; s <= q.e.r; s++) {
              const u = k.utils.encode_cell({ r: s, c });
              f[u] &&
                f[u].v instanceof Date &&
                ((f[u].t = "d"), (f[u].z = "dd/mm/yyyy"));
            }
        }),
          e.forEach((r) => {
            const c = Z.indexOf(r);
            if (!(c < 0))
              for (let s = 1; s <= q.e.r; s++) {
                const u = k.utils.encode_cell({ r: s, c });
                f[u] &&
                  typeof f[u].v == "number" &&
                  ((f[u].t = "n"), (f[u].z = '#,##0.00 "€"'));
              }
          }),
          a.forEach((r) => {
            const c = r + 1;
            for (let s = q.s.c; s <= q.e.c; s++) {
              const u = k.utils.encode_cell({ r: c, c: s });
              f[u] || (f[u] = { t: "s", v: "" }),
                (f[u].s = {
                  font: { italic: !0, color: { rgb: "555555" } },
                  fill: { patternType: "solid", fgColor: { rgb: "F2F2F2" } },
                });
            }
          });
        const ee = k.utils.book_new();
        k.utils.book_append_sheet(ee, f, "Fatture Passive"),
          k.writeFile(
            ee,
            "export-fatture-passive-progetto" + F.value + ".xlsx",
          );
      }
      function j(n, e) {
        (K.value = parseInt(n)), (C.value = !0), (W.value = e);
      }
      const me = async () => {
          (C.value = !1), await G(), await Y();
        },
        F = p(""),
        fe = async (n) => {
          const { data: e } = await _(
            x.public.apiBaseurl + "invoice/passivedelete/" + n,
            {
              onRequest({ request: o, options: a }) {},
              onRequestError({ request: o, options: a, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: o, response: a, options: t }) {
                v.value = {
                  text: "Errore cancellazione invoice",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: o, response: a, options: t }) {
                (v.value = {
                  text: "Fattura eliminata",
                  type: "success",
                  show: !0,
                }),
                  G();
              },
            },
          );
        },
        G = async () => {
          I.value = [];
          const { data: n } = await _(
            x.public.apiBaseurl + "invoice/passivelist/" + R.query.id,
            {
              onRequest({ request: e, options: o }) {},
              onRequestError({ request: e, options: o, error: a }) {
                console.log("Errore nella request:", a);
              },
              onResponseError({ request: e, response: o, options: a }) {
                v.value = {
                  text: "Errore caricamento fatture",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: o, options: a }) {
                o._data.data.forEach((t) => {
                  (t.supplier_id = O.value[t.supplier_id]), I.value.push(t);
                });
              },
            },
          );
        },
        ye = () => {
          ae.value = T.value.id;
        };
      function J() {
        le.value = window.innerWidth <= 960;
      }
      const ve = async () => {
          z.value = [];
          const { data: n } = await _(x.public.apiBaseurl + "bank/list/", {
            onRequest({ request: e, options: o }) {},
            onRequestError({ request: e, options: o, error: a }) {
              console.log("Errore nella request:", a),
                (v.value = { text: "Errore: " + a, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: o, options: a }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (v.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: o, options: a }) {
              o._data.data.forEach((t) => {
                z.value.push({ label: t.name, value: t.id });
              });
            },
          });
        },
        ge = async () => {
          (U.value = []), (O.value = []);
          const { data: n } = await _(x.public.apiBaseurl + "supplier/list/", {
            onRequest({ request: e, options: o }) {},
            onRequestError({ request: e, options: o, error: a }) {
              console.log("Errore nella request:", a),
                (v.value = { text: "Errore: " + a, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: o, options: a }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (v.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: o, options: a }) {
              o._data.data.forEach((t) => {
                U.value.push({ label: t.name, value: t.id, iban: t.iban }),
                  (O.value[t.id] = t.name);
              });
            },
          });
        };
      function ke() {
        oe.push("/tasks?id=" + R.query.id);
      }
      const we = async () => {
          const { data: n } = await _(
            x.public.apiBaseurl + "project/get/" + R.query.id,
            {
              onRequest({ request: e, options: o }) {},
              onRequestError({ request: e, options: o, error: a }) {
                console.log("Errore nella request:", a),
                  (v.value = {
                    text: "Errore: " + a,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: o, options: a }) {
                console.log(
                  "Errore nella response: " + o._data.error.messages[0],
                ),
                  (v.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: o, options: a }) {
                F.value = "[" + o._data.data.code + "] " + o._data.data.name;
              },
            },
          );
        },
        Y = async () => {
          S.value = [];
          let n = {
            project_id: R.query.id,
            alsodeleted: 0,
            externaltask: 1,
            esecutivi: 1,
          };
          try {
            const { data: e, status: o } = await _(
              x.public.apiBaseurl + "task/completelist",
              { method: "POST", body: n },
            );
            e.forEach((a) => {
              let t =
                a.Task.supplier_id != 0
                  ? " [" + a.Supplier.name + "]"
                  : a.Task.genericsupplier != "" &&
                      a.Task.genericsupplier != null
                    ? " [" + a.Task.genericsupplier + "]"
                    : "";
              S.value.push({
                label: a.Task.shortname + t,
                value: parseInt(a.Task.id),
              });
            });
          } catch (e) {
            console.log(e);
            let o = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (v.value = { text: o, type: "danger", show: !0 });
            return;
          }
        };
      return (
        Te(async () => {
          J(),
            window.addEventListener("resize", J),
            await ge(),
            await we(),
            await Y(),
            await ve(),
            ye(),
            await G(),
            await pe();
        }),
        De(() => {
          window.removeEventListener("resize", J);
        }),
        (n, e) => {
          const o = Ee,
            a = _e;
          return (
            w(),
            Fe("div", Oe, [
              y("div", Ue, [
                e[21] || (e[21] = y("br", null, null, -1)),
                y("h3", Xe, "Fatture passive del progetto " + E(d(F)), 1),
                y("div", Ge, [
                  d(T).hasinvoice == 1
                    ? (w(),
                      b(
                        h,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => j(0)),
                          color: "green",
                        },
                        {
                          default: l(() => [
                            i(V, null, {
                              default: l(() => [
                                ...(e[5] || (e[5] = [m("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[6] || (e[6] = m("Registra Fattura", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : N("", !0),
                  i(
                    h,
                    { class: "ml-3", color: "primary", onClick: de },
                    {
                      default: l(() => [
                        i(
                          V,
                          { class: "mr-3" },
                          {
                            default: l(() => [
                              ...(e[7] || (e[7] = [m("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[8] || (e[8] = m(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  i(
                    h,
                    {
                      onClick: e[1] || (e[1] = (t) => ke()),
                      color: "orange",
                      class: "ml-4",
                    },
                    {
                      default: l(() => [
                        i(V, null, {
                          default: l(() => [
                            ...(e[9] || (e[9] = [m("mdi-arrow-left", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[10] || (e[10] = m("Torna al progetto", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[22] ||
                  (e[22] = y("div", { style: { clear: "both" } }, null, -1)),
                i(
                  Ce,
                  {
                    "row-props": ie,
                    density: "compact",
                    items: d(I),
                    headers: re,
                    search: d(P),
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
                  },
                  {
                    top: l(() => [
                      i(
                        je,
                        {
                          modelValue: d(P),
                          "onUpdate:modelValue":
                            e[2] ||
                            (e[2] = (t) => (te(P) ? (P.value = t) : null)),
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
                    "item.total": l(({ item: t }) => [
                      y(
                        "span",
                        null,
                        E(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.vat": l(({ item: t }) => [
                      y(
                        "span",
                        null,
                        E(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.vat),
                        ),
                        1,
                      ),
                    ]),
                    "item.invoicedate": l(({ item: t }) => [
                      y(
                        "span",
                        null,
                        E(new Date(t.invoicedate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentduedate": l(({ item: t }) => [
                      y(
                        "span",
                        null,
                        E(
                          new Date(t.paymentduedate).toLocaleDateString(
                            "it-IT",
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.supplier_id": l(({ item: t }) => [
                      y("span", { title: t.id }, E(t.supplier_id), 9, Je),
                    ]),
                    "item.documenttype": l(({ item: t }) => [
                      i(
                        H,
                        {
                          label: "",
                          size: "x-small",
                          color:
                            t.documenttype == "F"
                              ? "green"
                              : t.documenttype == "N"
                                ? "orange"
                                : t.documenttype == "X"
                                  ? "blue"
                                  : t.documenttype == "S"
                                    ? "grey"
                                    : "purple",
                          variant: "flat",
                        },
                        {
                          default: l(() => [
                            m(
                              E(
                                ne.find((g) => g.value === t.documenttype).text,
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
                    "item.payed": l(({ item: t }) => [
                      t.payed == "P"
                        ? (w(),
                          b(
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
                                ...(e[11] || (e[11] = [m(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : N("", !0),
                      t.payed == "N"
                        ? (w(),
                          b(
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
                                ...(e[12] || (e[12] = [m(" Da Pagare ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : N("", !0),
                    ]),
                    "item.actions": l(({ item: t }) => [
                      i(
                        Se,
                        { "offset-y": "" },
                        {
                          activator: l(({ props: g }) => [
                            i(
                              h,
                              Ie(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                g,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: l(() => [
                            y("div", He, [
                              i(
                                Be,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: l(() => [
                                    d(T).hasinvoice == 1
                                      ? (w(),
                                        b(
                                          $,
                                          {
                                            key: 0,
                                            onClick: (g) => j(t.id, 0),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              i(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[13] ||
                                                      (e[13] = [
                                                        m("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              i(
                                                M,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[14] ||
                                                      (e[14] = [
                                                        m("Modifica", -1),
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
                                      : N("", !0),
                                    d(T).hasinvoice == 1
                                      ? (w(),
                                        b(
                                          $,
                                          {
                                            key: 1,
                                            onClick: (g) => j(t.id, 1),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              i(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[15] ||
                                                      (e[15] = [
                                                        m(
                                                          "mdi-content-copy",
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
                                                M,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[16] ||
                                                      (e[16] = [
                                                        m("Duplica", -1),
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
                                      : (w(),
                                        b(
                                          $,
                                          {
                                            key: 2,
                                            onClick: (g) => j(t.id, 0),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              i(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[17] ||
                                                      (e[17] = [
                                                        m("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              i(
                                                M,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[18] ||
                                                      (e[18] = [
                                                        m("Visualizza", -1),
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
                                    d(T).hasinvoice == 1
                                      ? (w(),
                                        b(
                                          $,
                                          { key: 3, dense: "", exact: "" },
                                          {
                                            default: l(() => [
                                              i(
                                                M,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    i(
                                                      o,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (g) =>
                                                          fe(t.id),
                                                        iconadelete: d(se),
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
                                      : N("", !0),
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
                i(
                  ze,
                  {
                    modelValue: d(D),
                    "onUpdate:modelValue":
                      e[4] || (e[4] = (t) => (te(D) ? (D.value = t) : null)),
                    "max-width": "400",
                    persistent: "",
                  },
                  {
                    default: l(() => [
                      i(
                        Ae,
                        { class: "pa-2" },
                        {
                          default: l(() => [
                            i(Le, null, {
                              default: l(() => [
                                ...(e[19] ||
                                  (e[19] = [
                                    y("b", null, "Attenzione", -1),
                                    y("br", null, null, -1),
                                    m(
                                      " Il totale delle fatture per il task selezionato è diverso dal totale presente nel task.",
                                      -1,
                                    ),
                                    y("br", null, null, -1),
                                    m("Se necessario controlla il task", -1),
                                  ])),
                              ]),
                              _: 1,
                            }),
                            i($e, null, {
                              default: l(() => [
                                i(Me),
                                i(
                                  h,
                                  {
                                    color: "#A5161E",
                                    onClick:
                                      e[3] || (e[3] = (t) => (D.value = !1)),
                                  },
                                  {
                                    default: l(() => [
                                      ...(e[20] || (e[20] = [m("Chiudi", -1)])),
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
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"],
                ),
                d(C)
                  ? (w(),
                    b(
                      a,
                      {
                        key: 0,
                        clone: d(W),
                        onAlertprice: ue,
                        projects: d(X),
                        pname: d(F),
                        tasks: d(S),
                        suppliers: d(U),
                        banks: d(z),
                        dialoginsmod: d(C),
                        idrec: d(K),
                        onClose: me,
                      },
                      null,
                      8,
                      [
                        "clone",
                        "projects",
                        "pname",
                        "tasks",
                        "suppliers",
                        "banks",
                        "dialoginsmod",
                        "idrec",
                      ],
                    ))
                  : N("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Dt as default };
