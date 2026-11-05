import { _ as Fe } from "./ClyIuovc.js";
import { _ as he } from "./BHW_PPbD.js";
import {
  r as p,
  u as Pe,
  F as Ce,
  E as Re,
  G as Te,
  o as ze,
  e as je,
  x as Ae,
  z as c,
  B as o,
  J as b,
  K as q,
  L as i,
  C as a,
  M as D,
  n as Be,
  y as v,
  D as m,
  N as ie,
  O as ue,
  A as w,
  P as Me,
} from "./CYsiv7Qj.js";
import { x as k } from "./D16A7lth.js";
import { V as Le } from "./B_hTT4u_.js";
import { u as $e } from "./LKQL6vAN.js";
import { $ as _ } from "./BvG7V8Ak.js";
import { V as z, a as F } from "./B_W9U9Wp.js";
import { V as Oe, a as h } from "./Bj0ZT2dB.js";
import { V as Ue } from "./ss-1h9Hv.js";
import { V as Xe } from "./Dlfzj7mx.js";
import { V as G } from "./DCAzZvgN.js";
import { V as Ke, a as Ge, b as Y, c as J } from "./CxBYvc7u.js";
import { V as ae } from "./Cv1q1CuH.js";
import { V as Ye } from "./BrCrqdgZ.js";
import { V as Je, c as He, d as We } from "./sbneMOUU.js";
import { V as Qe } from "./BqujDEEl.js";
import { s as pe, a as Ze, e as et, b as de } from "./B5S3s6V6.js";
import { e as ce } from "./DRW0ieNg.js";
import { i as tt } from "./BIFx5Ami.js";
import "./MIubIMrV.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./B51noTYL.js";
import "./D3DeQzvF.js";
import "./Bx6RXzqb.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./fKsYyVgl.js";
import "./CCBmAzgz.js";
const at = { class: "pl-10 pr-10" },
  ot = { class: "divcenterpage" },
  lt = { style: { display: "inline", float: "right" } },
  st = ["onClick", "onKeyup"],
  nt = ["title"],
  rt = { class: "mt-4" },
  Kt = {
    __name: "adminpassiveinvoices",
    setup(it) {
      const E = p(
          localStorage.getItem("hgfiltropidata") != "null" &&
            localStorage.getItem("hgfiltropidata") != null
            ? localStorage
                .getItem("hgfiltropidata")
                .split(",")
                .map((r) => new Date(r))
            : [
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() - 1,
                  new Date().getDate(),
                ),
                new Date(),
              ],
        ),
        me = p([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [pe(new Date()), ce(new Date())] },
          {
            label: "Mese precedente",
            value: [pe(de(new Date(), 1)), ce(de(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Ze(new Date()), et(new Date())] },
        ]),
        H = p("F"),
        oe = [
          { text: "Fattura", value: "F" },
          { text: "Notula", value: "N" },
          { text: "Scontrino", value: "S" },
          { text: "F24", value: "X" },
          { text: "Altro", value: "A" },
        ],
        P = p(!1),
        I = Be();
      Pe();
      const le = Ce(),
        { status: ut, signIn: pt, signOut: dt, data: S } = Re(),
        j = p([]),
        A = p(""),
        y = Te("snackbar"),
        B = p(!1),
        fe = p(0),
        se = p(0),
        ge = p(!0),
        ne = p(0),
        x = p(
          localStorage.getItem("hgfiltropisupplier") != "null" &&
            localStorage.getItem("hgfiltropisupplier") != null
            ? parseInt(localStorage.getItem("hgfiltropisupplier"))
            : null,
        ),
        V = p(
          localStorage.getItem("hgfiltropiproject") != "null" &&
            localStorage.getItem("hgfiltropiproject") != null
            ? parseInt(localStorage.getItem("hgfiltropiproject"))
            : null,
        ),
        ye = [
          { value: null, label: "Tutte" },
          { value: "P", label: "Pagate" },
          { value: "N", label: "Da Pagare" },
        ],
        N = p(
          localStorage.getItem("hgfiltropipay") != "null" &&
            localStorage.getItem("hgfiltropipay") != null
            ? parseInt(localStorage.getItem("hgfiltropipay"))
            : null,
        ),
        ve = p(!1),
        be = [
          { title: "Fornitore", key: "supplier_id", sortable: !0 },
          { title: "Documento", key: "documenttype", sortable: !0 },
          { title: "Progetti", key: "projects", sortable: !1 },
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
        M = [
          { title: "Documento", key: "documenttype" },
          { title: "Fornitore", key: "supplier_id" },
          { title: "Progetto", key: "project_id" },
          { title: "Task", key: "task_id" },
          { title: "Numero F.", key: "invoicenumber" },
          { title: "Data F.", key: "invoicedate" },
          { title: "Imponibile", key: "taxable" },
          { title: "Totale", key: "total" },
          { title: "Iva", key: "vat" },
          { title: "Data Scadenza", key: "paymentduedate" },
          { title: "Banca", key: "bank_id" },
          { title: "Iban", key: "iban" },
          { title: "Causale", key: "causale" },
          { title: "Tipo", key: "type" },
          { title: "Data Pagamento", key: "payment_date" },
          { title: "Pagata", key: "payed" },
          { title: "Note", key: "note" },
        ],
        W = p([]),
        Q = p([]),
        Z = p([]),
        L = p([]),
        $ = p([]),
        O = p([]),
        ee = p([]);
      $e({
        title: "Fatture Passive",
        meta: [{ name: "description", content: "Fatture Passive" }],
      });
      const we = ({ item: r }) =>
        r.payed == "P"
          ? { class: "row-ok-pi" }
          : r.payed == "D"
            ? { class: "row-error-pi" }
            : r.payed == "N"
              ? { class: "row-grey-pi" }
              : {};
      function C(r, e) {
        (se.value = parseInt(r)), (B.value = !0), (ne.value = e);
      }
      const ke = async () => {
        (B.value = !1), await U(), await re();
      };
      p("");
      function xe() {
        P.value = !0;
      }
      function Ve(r) {
        if (r == null || r === "" || r === "0000-00-00") return "";
        r = String(r).trim();
        let e;
        if (r.includes("-")) {
          if (
            ((e = r.split("-").map(Number)), e.length === 3 && !e.some(isNaN))
          )
            return new Date(e[0], e[1] - 1, e[2]);
        } else if (
          r.includes("/") &&
          ((e = r.split("/").map(Number)), e.length === 3 && !e.some(isNaN))
        )
          return new Date(e[2], e[1] - 1, e[0]);
        return "";
      }
      function De() {
        const r = ["Data Scadenza", "Data F.", "Data Pagamento"],
          e = [],
          l = [],
          s = (u) =>
            u == "F"
              ? "Fattura"
              : u == "N"
                ? "Notula"
                : u == "X"
                  ? "F24"
                  : u == "S"
                    ? "Scontrino"
                    : "Altro";
        j.value.forEach((u) => {
          const g = {};
          M.forEach((n) => {
            n.title == "Progetto" || n.title == "Task"
              ? (g[n.title] = "")
              : n.title == "Documento"
                ? (g[n.title] = s(u[n.key]))
                : r.includes(n.title)
                  ? (g[n.title] = Ve(u[n.key]))
                  : n.title == "Banca"
                    ? (g[n.title] = u[n.key] ? W.value[u[n.key]] : "")
                    : n.title == "Pagata"
                      ? (g[n.title] = u[n.key] == "N" ? "No" : "Si")
                      : (g[n.title] = u[n.key] ?? "");
          }),
            e.push(g),
            (u.tasks || []).forEach((n) => {
              const f = {};
              M.forEach((_e) => {
                f[_e.title] = "";
              }),
                (f.Progetto = n.project_id
                  ? ($.value[n.project_id] ?? "")
                  : ""),
                (f.Task = n.task_id ? (Q.value[n.task_id] ?? "") : "");
              const X = parseFloat(n.taxable),
                K = parseFloat(n.vat);
              (f.Imponibile = isNaN(X) ? "" : X),
                (f.Iva = isNaN(K) ? "" : K),
                (f.Totale = isNaN(X) ? "" : X + (isNaN(K) ? 0 : K)),
                l.push(e.length),
                e.push(f);
            });
        });
        const t = k.utils.json_to_sheet(e, {
            cellDates: !0,
            header: M.map((u) => u.title),
          }),
          d = k.utils.decode_range(t["!ref"]);
        t["!cols"] = [
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
        for (let u = d.s.c; u <= d.e.c; u++) {
          const g = k.utils.encode_cell({ r: 0, c: u });
          t[g] && (t[g].s = { font: { bold: !0 } });
        }
        const R = M.map((u) => u.title);
        r.forEach((u) => {
          const g = R.indexOf(u);
          if (!(g < 0))
            for (let n = 1; n <= d.e.r; n++) {
              const f = k.utils.encode_cell({ r: n, c: g });
              t[f] &&
                t[f].v instanceof Date &&
                ((t[f].t = "d"), (t[f].z = "dd/mm/yyyy"));
            }
        }),
          l.forEach((u) => {
            const g = u + 1;
            for (let n = d.s.c; n <= d.e.c; n++) {
              const f = k.utils.encode_cell({ r: g, c: n });
              t[f] || (t[f] = { t: "s", v: "" }),
                (t[f].s = {
                  font: { italic: !0, color: { rgb: "555555" } },
                  fill: { patternType: "solid", fgColor: { rgb: "F2F2F2" } },
                });
            }
          });
        const T = k.utils.book_new();
        k.utils.book_append_sheet(T, t, "Fatture Passive"),
          k.writeFile(T, "export-fatture-passive.xlsx");
      }
      const Ee = async (r) => {
          const { data: e } = await _(
            I.public.apiBaseurl + "invoice/passivedelete/" + r,
            {
              onRequest({ request: l, options: s }) {},
              onRequestError({ request: l, options: s, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: l, response: s, options: t }) {
                y.value = {
                  text: "Errore cancellazione invoice",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: l, response: s, options: t }) {
                (y.value = {
                  text: "Fattura eliminata",
                  type: "success",
                  show: !0,
                }),
                  U();
              },
            },
          );
        },
        U = async () => {
          localStorage.setItem(
            "hgfiltropisupplier",
            x.value != null ? x.value : null,
          ),
            localStorage.setItem("hgfiltropidata", E.value),
            localStorage.setItem(
              "hgfiltropiproject",
              V.value != null ? V.value : null,
            ),
            localStorage.setItem(
              "hgfiltropipay",
              N.value != null ? N.value : null,
            ),
            (j.value = []);
          let r = E.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            e = E.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            l = {
              supplier: x.value != null ? x.value : 0,
              project: V.value != null ? V.value : 0,
              from: r,
              to: e,
              filtropay: N.value,
            };
          try {
            const { data: s, status: t } = await _(
              I.public.apiBaseurl + "invoice/passivelist",
              { method: "POST", body: l },
            );
            s.forEach((d) => {
              (d.supplier_id = ee.value[d.supplier_id]), j.value.push(d);
            });
          } catch (s) {
            console.log(s);
            let t = JSON.parse(s.data).errors.title;
            console.log("catcherr", s.data),
              (y.value = { text: t, type: "danger", show: !0 });
            return;
          }
        },
        Ie = () => {
          fe.value = S.value.id;
        };
      function te() {
        ve.value = window.innerWidth <= 960;
      }
      const Se = async () => {
          (Z.value = []), (W.value = []);
          const { data: r } = await _(I.public.apiBaseurl + "bank/list/", {
            onRequest({ request: e, options: l }) {},
            onRequestError({ request: e, options: l, error: s }) {
              console.log("Errore nella request:", s),
                (y.value = { text: "Errore: " + s, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: l, options: s }) {
              console.log(
                "Errore nella response: " + l._data.error.messages[0],
              ),
                (y.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: l, options: s }) {
              l._data.data.forEach((t) => {
                Z.value.push({ label: t.name, value: t.id }),
                  (W.value[t.id] = t.name);
              });
            },
          });
        },
        Ne = async () => {
          (L.value = []), ($.value = []);
          const { data: r } = await _(I.public.apiBaseurl + "project/list/", {
            onRequest({ request: e, options: l }) {},
            onRequestError({ request: e, options: l, error: s }) {
              console.log("Errore nella request:", s),
                (y.value = { text: "Errore: " + s, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: l, options: s }) {
              console.log(
                "Errore nella response: " + l._data.error.messages[0],
              ),
                (y.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: l, options: s }) {
              l._data.data.forEach((t) => {
                L.value.push({
                  label: "[" + t.code + "] " + t.name,
                  value: t.id,
                }),
                  ($.value[t.id] = "[" + t.code + "] " + t.name);
              });
            },
          });
        },
        re = async () => {
          Q.value = [];
          const { data: r } = await _(I.public.apiBaseurl + "task/list/", {
            onRequest({ request: e, options: l }) {},
            onRequestError({ request: e, options: l, error: s }) {
              console.log("Errore nella request:", s),
                (y.value = { text: "Errore: " + s, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: l, options: s }) {
              console.log(
                "Errore nella response: " + l._data.error.messages[0],
              ),
                (y.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: l, options: s }) {
              l._data.data.forEach((t) => {
                Q.value[t.id] = t.shortname;
              });
            },
          });
        },
        qe = async () => {
          (O.value = []), (ee.value = []);
          const { data: r } = await _(I.public.apiBaseurl + "supplier/list/", {
            onRequest({ request: e, options: l }) {},
            onRequestError({ request: e, options: l, error: s }) {
              console.log("Errore nella request:", s),
                (y.value = { text: "Errore: " + s, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: l, options: s }) {
              console.log(
                "Errore nella response: " + l._data.error.messages[0],
              ),
                (y.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: l, options: s }) {
              l._data.data.forEach((t) => {
                O.value.push({ label: t.name, value: t.id, iban: t.iban }),
                  (ee.value[t.id] = t.name);
              });
            },
          });
        };
      return (
        ze(async () => {
          te(),
            window.addEventListener("resize", te),
            await Ne(),
            await re(),
            await qe(),
            await Se(),
            Ie(),
            await U(),
            le.query.id != null && C(le.query.id);
        }),
        je(() => {
          window.removeEventListener("resize", te);
        }),
        (r, e) => {
          const l = Fe,
            s = he;
          return (
            v(),
            Ae("div", at, [
              c("div", ot, [
                e[31] || (e[31] = c("br", null, null, -1)),
                e[32] ||
                  (e[32] = c(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Fatture passive",
                    -1,
                  )),
                c("div", lt, [
                  i(S).hasinvoice == 1
                    ? (v(),
                      b(
                        z,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => C(0)),
                          color: "green",
                        },
                        {
                          default: a(() => [
                            o(F, null, {
                              default: a(() => [
                                ...(e[10] || (e[10] = [m("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[11] || (e[11] = m("Registra Fattura", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : q("", !0),
                  o(
                    z,
                    { class: "ml-3", color: "primary", onClick: De },
                    {
                      default: a(() => [
                        o(
                          F,
                          { class: "mr-3" },
                          {
                            default: a(() => [
                              ...(e[12] || (e[12] = [m("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[13] || (e[13] = m(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[33] ||
                  (e[33] = c("div", { style: { clear: "both" } }, null, -1)),
                o(
                  Oe,
                  { "no-gutters": "" },
                  {
                    default: a(() => [
                      o(
                        h,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: a(() => [
                            e[14] ||
                              (e[14] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Tipo Documento",
                                -1,
                              )),
                            o(
                              G,
                              {
                                class: "ma-2",
                                density: "compact",
                                modelValue: i(H),
                                "onUpdate:modelValue":
                                  e[1] ||
                                  (e[1] = (t) => (D(H) ? (H.value = t) : null)),
                                items: oe,
                                variant: "outlined",
                                "item-title": "text",
                                "item-value": "value",
                                autocomplete: "off",
                                clearable: "",
                                "no-data-text": "Nessun risultato trovato",
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
                        h,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: a(() => [
                            e[15] ||
                              (e[15] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Fornitore",
                                -1,
                              )),
                            o(
                              G,
                              {
                                class: "ma-2",
                                density: "compact",
                                modelValue: i(x),
                                "onUpdate:modelValue":
                                  e[2] ||
                                  (e[2] = (t) => (D(x) ? (x.value = t) : null)),
                                items: i(O),
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
                        h,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: a(() => [
                            e[16] ||
                              (e[16] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Progetto",
                                -1,
                              )),
                            o(
                              G,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: i(V),
                                "onUpdate:modelValue":
                                  e[3] ||
                                  (e[3] = (t) => (D(V) ? (V.value = t) : null)),
                                items: i(L),
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
                      o(
                        h,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: a(() => [
                            e[17] ||
                              (e[17] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Tipo",
                                -1,
                              )),
                            o(
                              G,
                              {
                                "no-data-text": "Nessun risultato trovato",
                                class: "ma-2",
                                autocomplete: "off",
                                variant: "outlined",
                                "item-title": "label",
                                "item-value": "value",
                                modelValue: i(N),
                                "onUpdate:modelValue":
                                  e[4] ||
                                  (e[4] = (t) => (D(N) ? (N.value = t) : null)),
                                items: ye,
                                readonly: i(S).hasinvoice == 0,
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
                        h,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: a(() => [
                            e[18] ||
                              (e[18] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Data Scadenza",
                                -1,
                              )),
                            o(
                              i(Le),
                              {
                                modelValue: i(E),
                                "onUpdate:modelValue":
                                  e[5] ||
                                  (e[5] = (t) => (D(E) ? (E.value = t) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": i(tt),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": i(me),
                                clearable: !1,
                              },
                              {
                                "preset-date-range-button": a(
                                  ({ label: t, value: d, presetDate: R }) => [
                                    c(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (T) => R(d),
                                        onKeyup: [
                                          ie(
                                            ue((T) => R(d), ["prevent"]),
                                            ["enter"],
                                          ),
                                          ie(
                                            ue((T) => R(d), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      w(t),
                                      41,
                                      st,
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
                        h,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: a(() => [
                            o(
                              z,
                              {
                                class: "ma-2 mt-8",
                                onClick: e[6] || (e[6] = (t) => U()),
                              },
                              {
                                default: a(() => [
                                  o(F, null, {
                                    default: a(() => [
                                      ...(e[19] ||
                                        (e[19] = [m("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  e[20] || (e[20] = m("Cerca", -1)),
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
                  Ue,
                  {
                    density: "compact",
                    items: i(j),
                    headers: be,
                    search: i(A),
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
                    "row-props": we,
                  },
                  {
                    top: a(() => [
                      o(
                        Ye,
                        {
                          modelValue: i(A),
                          "onUpdate:modelValue":
                            e[7] ||
                            (e[7] = (t) => (D(A) ? (A.value = t) : null)),
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
                    "item.project_id": a(({ item: t }) => [
                      c("span", null, w(i($)[t.project_id]), 1),
                    ]),
                    "item.total": a(({ item: t }) => [
                      c(
                        "span",
                        null,
                        w(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.vat": a(({ item: t }) => [
                      c(
                        "span",
                        null,
                        w(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.vat),
                        ),
                        1,
                      ),
                    ]),
                    "item.supplier_id": a(({ item: t }) => [
                      c("span", { title: t.id }, w(t.supplier_id), 9, nt),
                    ]),
                    "item.invoicedate": a(({ item: t }) => [
                      c(
                        "span",
                        null,
                        w(new Date(t.invoicedate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentduedate": a(({ item: t }) => [
                      c(
                        "span",
                        null,
                        w(
                          new Date(t.paymentduedate).toLocaleDateString(
                            "it-IT",
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.payed": a(({ item: t }) => [
                      t.payed == "P"
                        ? (v(),
                          b(
                            ae,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                              title:
                                t.payment_date != "0000-00-00"
                                  ? "Pagata il " +
                                    new Date(t.payment_date).toLocaleDateString(
                                      "it-IT",
                                    )
                                  : "",
                            },
                            {
                              default: a(() => [
                                ...(e[21] || (e[21] = [m(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["title"],
                          ))
                        : q("", !0),
                      t.payed == "N"
                        ? (v(),
                          b(
                            ae,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: a(() => [
                                ...(e[22] || (e[22] = [m(" Da Pagare ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : q("", !0),
                    ]),
                    "item.documenttype": a(({ item: t }) => [
                      o(
                        ae,
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
                          default: a(() => [
                            m(
                              w(
                                oe.find((d) => d.value === t.documenttype).text,
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
                    "item.actions": a(({ item: t }) => [
                      o(
                        Ke,
                        { "offset-y": "" },
                        {
                          activator: a(({ props: d }) => [
                            o(
                              z,
                              Me(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                d,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: a(() => [
                            c("div", rt, [
                              o(
                                Ge,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: a(() => [
                                    i(S).hasinvoice == 1
                                      ? (v(),
                                        b(
                                          Y,
                                          {
                                            key: 0,
                                            onClick: (d) => C(t.id, 0),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              o(
                                                F,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(e[23] ||
                                                      (e[23] = [
                                                        m("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              o(
                                                J,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(e[24] ||
                                                      (e[24] = [
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
                                      : q("", !0),
                                    i(S).hasinvoice == 1
                                      ? (v(),
                                        b(
                                          Y,
                                          {
                                            key: 1,
                                            onClick: (d) => C(t.id, 1),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              o(
                                                F,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(e[25] ||
                                                      (e[25] = [
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
                                            default: a(() => [
                                              o(
                                                J,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(e[26] ||
                                                      (e[26] = [
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
                                      : (v(),
                                        b(
                                          Y,
                                          {
                                            key: 2,
                                            onClick: (d) => C(t.id, 0),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              o(
                                                F,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(e[27] ||
                                                      (e[27] = [
                                                        m("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              o(
                                                J,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(e[28] ||
                                                      (e[28] = [
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
                                    i(S).hasinvoice == 1
                                      ? (v(),
                                        b(
                                          Y,
                                          { key: 3, dense: "", exact: "" },
                                          {
                                            default: a(() => [
                                              o(
                                                J,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    o(
                                                      l,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (d) =>
                                                          Ee(t.id),
                                                        iconadelete: i(ge),
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
                o(
                  Xe,
                  {
                    modelValue: i(P),
                    "onUpdate:modelValue":
                      e[9] || (e[9] = (t) => (D(P) ? (P.value = t) : null)),
                    "max-width": "400",
                    persistent: "",
                  },
                  {
                    default: a(() => [
                      o(
                        Je,
                        { class: "pa-2" },
                        {
                          default: a(() => [
                            o(He, null, {
                              default: a(() => [
                                ...(e[29] ||
                                  (e[29] = [
                                    c("b", null, "Attenzione", -1),
                                    c("br", null, null, -1),
                                    m(
                                      " Il totale delle fatture per il task selezionato è diverso dal totale presente nel task.",
                                      -1,
                                    ),
                                    c("br", null, null, -1),
                                    m("Se necessario controlla il task", -1),
                                  ])),
                              ]),
                              _: 1,
                            }),
                            o(We, null, {
                              default: a(() => [
                                o(Qe),
                                o(
                                  z,
                                  {
                                    color: "#A5161E",
                                    onClick:
                                      e[8] || (e[8] = (t) => (P.value = !1)),
                                  },
                                  {
                                    default: a(() => [
                                      ...(e[30] || (e[30] = [m("Chiudi", -1)])),
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
                i(B)
                  ? (v(),
                    b(
                      s,
                      {
                        key: 0,
                        clone: i(ne),
                        onAlertprice: xe,
                        suppliers: i(O),
                        projects: i(L),
                        banks: i(Z),
                        dialoginsmod: i(B),
                        idrec: i(se),
                        onClose: ke,
                      },
                      null,
                      8,
                      [
                        "clone",
                        "suppliers",
                        "projects",
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
export { Kt as default };
