import { _ as xe } from "./ClyIuovc.js";
import { _ as qe } from "./DjF9DnSE.js";
import {
  r as d,
  u as Ee,
  F as Ve,
  E as Ne,
  G as Se,
  o as Ie,
  e as _e,
  x as he,
  z as m,
  B as r,
  J as k,
  K as S,
  L as s,
  C as a,
  n as Re,
  y as w,
  D as y,
  M as O,
  N as te,
  O as ae,
  A as D,
  P as Ce,
} from "./CYsiv7Qj.js";
import { x as E } from "./D16A7lth.js";
import { V as ze } from "./B_hTT4u_.js";
import { u as Pe } from "./LKQL6vAN.js";
import { $ as I } from "./BvG7V8Ak.js";
import { V as U, a as _ } from "./B_W9U9Wp.js";
import { V as je, a as K } from "./Bj0ZT2dB.js";
import { V as Ae } from "./ss-1h9Hv.js";
import { V as oe } from "./DCAzZvgN.js";
import { V as Be, a as Fe, b as W, c as Q } from "./CxBYvc7u.js";
import { V as le } from "./Cv1q1CuH.js";
import { V as Te } from "./BrCrqdgZ.js";
import { s as ne, a as Me, e as Le, b as ie } from "./B5S3s6V6.js";
import { e as re } from "./DRW0ieNg.js";
import { i as $e } from "./BIFx5Ami.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./MIubIMrV.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./Bx6RXzqb.js";
import "./CZzf1ihi.js";
import "./B51noTYL.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Oe = { class: "pl-10 pr-10" },
  Ue = { class: "divcenterpage" },
  Ke = { style: { display: "inline", float: "right" } },
  Ye = ["onClick", "onKeyup"],
  Ge = ["title"],
  He = { class: "mt-4" },
  Pt = {
    __name: "adminactiveinvoices",
    setup(Je) {
      const V = d(
          localStorage.getItem("hgfiltroaidata") != "null" &&
            localStorage.getItem("hgfiltroaidata") != null
            ? localStorage
                .getItem("hgfiltroaidata")
                .split(",")
                .map((u) => new Date(u))
            : [
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() - 1,
                  new Date().getDate(),
                ),
                new Date(),
              ],
        ),
        se = d([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [ne(new Date()), re(new Date())] },
          {
            label: "Mese precedente",
            value: [ne(ie(new Date(), 1)), re(ie(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Me(new Date()), Le(new Date())] },
        ]),
        N = Re();
      Ee();
      const b = Ve(),
        { status: Xe, signIn: We, signOut: Qe, data: P } = Ne(),
        j = d([]),
        A = d(""),
        g = Se("snackbar"),
        B = d(!1),
        ue = d(0),
        Z = d(0),
        ce = d(!0),
        x = d(
          localStorage.getItem("hgfiltroaicliente") != "null" &&
            localStorage.getItem("hgfiltroaicliente") != null
            ? parseInt(localStorage.getItem("hgfiltroaicliente"))
            : null,
        ),
        q = d(
          localStorage.getItem("hgfiltroaiproject") != "null" &&
            localStorage.getItem("hgfiltroaiproject") != null
            ? parseInt(localStorage.getItem("hgfiltroaiproject"))
            : null,
        ),
        de = d(!1),
        pe = [
          { title: "Cliente", key: "cliente", sortable: !0 },
          { title: "Progetto", key: "project_id", sortable: !1 },
          {
            title: "Numero F.",
            key: "invoicenumber",
            sortable: !0,
            align: "left",
          },
          { title: "Data F.", key: "invoicedate", sortable: !0, align: "left" },
          { title: "Totale", key: "total" },
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
        ee = [
          { title: "Cliente", key: "cliente" },
          { title: "Progetto", key: "project_id" },
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
        Y = d([]),
        F = d([]),
        G = d([]),
        T = d([]),
        M = d([]),
        H = d([]),
        L = d([]);
      Pe({
        title: "Fatture Attive",
        meta: [{ name: "description", content: "Fatture Attive" }],
      });
      const me = ({ item: u }) => {
        const e = new Date(),
          o =
            e.getFullYear() +
            "-" +
            String(e.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(e.getDate()).padStart(2, "0");
        return u.payed == "N" && u.paymentduedate < o
          ? { class: "row-orange-ai" }
          : {};
      };
      function h(u) {
        (Z.value = parseInt(u)), (B.value = !0);
      }
      const fe = async () => {
        (B.value = !1), await $();
      };
      d("");
      function ye() {
        const u = j.value.map((i) => {
            const p = {};
            return (
              ee.forEach((n) => {
                if (n.title == "Progetto")
                  p[n.title] = i[n.key] ? M.value[i[n.key]] : "";
                else if (
                  n.title == "Data Scadenza" ||
                  n.title == "Data F." ||
                  n.title == "Data Pagamento"
                ) {
                  let f = i[n.key];
                  if (f != null && f !== "" && f !== "0000-00-00") {
                    f = String(f).trim();
                    let X;
                    if (f.includes("-")) {
                      const v = f.split("-");
                      if (v.length === 3) {
                        const R = Number(v[0]),
                          C = Number(v[1]),
                          z = Number(v[2]);
                        !isNaN(R) &&
                          !isNaN(C) &&
                          !isNaN(z) &&
                          (X = new Date(R, C - 1, z));
                      }
                    } else if (f.includes("/")) {
                      const v = f.split("/");
                      if (v.length === 3) {
                        const R = Number(v[0]),
                          C = Number(v[1]),
                          z = Number(v[2]);
                        !isNaN(z) &&
                          !isNaN(C) &&
                          !isNaN(R) &&
                          (X = new Date(z, C - 1, R));
                      }
                    }
                    p[n.title] = X ?? "";
                  } else p[n.title] = "";
                } else
                  n.title == "Tranche"
                    ? (p[n.title] = i[n.key] ? G.value[i[n.key]] : "")
                    : n.title == "Banca"
                      ? (p[n.title] = i[n.key] ? F.value[i[n.key]] : "")
                      : n.title == "Pagata"
                        ? (p[n.title] = i[n.key] == "N" ? "No" : "Si")
                        : n.title == "Anticipo Bancario"
                          ? (p[n.title] = i[n.key] == 1 ? "Si" : "No")
                          : (p[n.title] = i[n.key] ?? "");
              }),
              p
            );
          }),
          e = E.utils.json_to_sheet(u),
          o = E.utils.decode_range(e["!ref"]);
        e["!cols"] = [
          { wch: 60 },
          { wch: 60 },
          { wch: 30 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 30 },
          { wch: 15 },
          { wch: 60 },
        ];
        for (let i = o.s.c; i <= o.e.c; i++) {
          const p = E.utils.encode_cell({ r: 0, c: i });
          e[p] && (e[p].s = { font: { bold: !0 } });
        }
        const l = ee.map((i) => i.title),
          t = ["Data Scadenza", "Data F.", "Data Pagamento"];
        for (const i of t) {
          const p = l.indexOf(i);
          if (p >= 0)
            for (let n = 1; n <= o.e.r; n++) {
              const f = E.utils.encode_cell({ r: n, c: p });
              e[f] &&
                e[f].v instanceof Date &&
                ((e[f].t = "d"), (e[f].z = "dd/mm/yyyy"));
            }
        }
        const c = E.utils.book_new();
        E.utils.book_append_sheet(c, e, "Fatture Attive"),
          E.writeFile(c, "export-fatture-attive.xlsx");
      }
      const ge = async (u) => {
          const { data: e } = await I(
            N.public.apiBaseurl + "invoice/activedelete/" + u,
            {
              onRequest({ request: o, options: l }) {},
              onRequestError({ request: o, options: l, error: t }) {
                console.log("Errore nella request:", t);
              },
              onResponseError({ request: o, response: l, options: t }) {
                g.value = {
                  text: "Errore cancellazione invoice",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: o, response: l, options: t }) {
                (g.value = {
                  text: "Fattura eliminata",
                  type: "success",
                  show: !0,
                }),
                  $();
              },
            },
          );
        },
        $ = async () => {
          localStorage.setItem(
            "hgfiltroaicliente",
            x.value != null ? x.value : null,
          ),
            localStorage.setItem("hgfiltroaidata", V.value),
            localStorage.setItem(
              "hgfiltroaiproject",
              q.value != null ? q.value : null,
            ),
            (j.value = []);
          let u = V.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            e = V.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            o = {
              client: x.value != null ? x.value : 0,
              project: q.value != null ? q.value : 0,
              from: u,
              to: e,
            };
          try {
            const { data: l, status: t } = await I(
              N.public.apiBaseurl + "invoice/activelist",
              { method: "POST", body: o },
            );
            l.forEach((c) => {
              (c.cliente = L.value[c.cliente]), j.value.push(c);
            });
          } catch (l) {
            console.log(l);
            let t = JSON.parse(l.data).errors.title;
            console.log("catcherr", l.data),
              (g.value = { text: t, type: "danger", show: !0 });
            return;
          }
        },
        ve = () => {
          ue.value = P.value.id;
        };
      function J() {
        de.value = window.innerWidth <= 960;
      }
      const we = async () => {
          (F.value = []), (Y.value = []);
          const { data: u } = await I(N.public.apiBaseurl + "bank/list/", {
            onRequest({ request: e, options: o }) {},
            onRequestError({ request: e, options: o, error: l }) {
              console.log("Errore nella request:", l),
                (g.value = { text: "Errore: " + l, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: o, options: l }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (g.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: o, options: l }) {
              o._data.data.forEach((t) => {
                Y.value.push({ label: t.name, value: t.id }),
                  (F.value[t.id] = t.name);
              });
            },
          });
        },
        be = async () => {
          let u = [];
          (u.A = "Anticipo"),
            (u.I = "Intermedio"),
            (u.S = "Saldo"),
            (G.value = []);
          const { data: e } = await I(
            N.public.apiBaseurl + "invoice/tranchelist/",
            {
              onRequest({ request: o, options: l }) {},
              onRequestError({ request: o, options: l, error: t }) {
                console.log("Errore nella request:", t),
                  (g.value = {
                    text: "Errore: " + t,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: o, response: l, options: t }) {
                console.log(
                  "Errore nella response: " + l._data.error.messages[0],
                ),
                  (g.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: o, response: l, options: t }) {
                l._data.data.forEach((c) => {
                  let i =
                    u[c.type] +
                    " " +
                    new Date(c.previewdate).toLocaleDateString("it-IT", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    });
                  G.value[c.id] = i;
                });
              },
            },
          );
        },
        ke = async () => {
          (T.value = []), (M.value = []);
          const { data: u } = await I(N.public.apiBaseurl + "project/list/", {
            onRequest({ request: e, options: o }) {},
            onRequestError({ request: e, options: o, error: l }) {
              console.log("Errore nella request:", l),
                (g.value = { text: "Errore: " + l, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: o, options: l }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (g.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: o, options: l }) {
              o._data.data.forEach((t) => {
                T.value.push({
                  label: "[" + t.code + "] " + t.name,
                  value: t.id,
                  paymenttype: t.paymenttype,
                }),
                  (M.value[t.id] = "[" + t.code + "] " + t.name);
              });
            },
          });
        },
        De = async () => {
          (H.value = []), (L.value = []);
          const { data: u } = await I(N.public.apiBaseurl + "client/list/", {
            onRequest({ request: e, options: o }) {},
            onRequestError({ request: e, options: o, error: l }) {
              console.log("Errore nella request:", l),
                (g.value = { text: "Errore: " + l, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: o, options: l }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (g.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: o, options: l }) {
              o._data.data.forEach((t) => {
                H.value.push({ label: t.name, value: t.id }),
                  (L.value[t.id] = t.name);
              });
            },
          });
        };
      return (
        Ie(async () => {
          J(),
            window.addEventListener("resize", J),
            await be(),
            await ke(),
            await De(),
            await we(),
            ve(),
            await $(),
            b.query.id != null && h(b.query.id),
            b.query.trancheid != null &&
              b.query.projectid != null &&
              b.query.trancheid != 0 &&
              b.query.projectid != 0 &&
              b.query.trancheid != null &&
              b.query.projectid != null &&
              h(0);
        }),
        _e(() => {
          window.removeEventListener("resize", J);
        }),
        (u, e) => {
          const o = xe,
            l = qe;
          return (
            w(),
            he("div", Oe, [
              m("div", Ue, [
                e[22] || (e[22] = m("br", null, null, -1)),
                e[23] ||
                  (e[23] = m(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Fatture attive",
                    -1,
                  )),
                m("div", Ke, [
                  s(P).hasinvoice == 1
                    ? (w(),
                      k(
                        U,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => h(0)),
                          color: "green",
                        },
                        {
                          default: a(() => [
                            r(_, null, {
                              default: a(() => [
                                ...(e[6] || (e[6] = [y("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[7] || (e[7] = y("Registra Fattura", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : S("", !0),
                  r(
                    U,
                    { class: "ml-3", color: "primary", onClick: ye },
                    {
                      default: a(() => [
                        r(
                          _,
                          { class: "mr-3" },
                          {
                            default: a(() => [
                              ...(e[8] || (e[8] = [y("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[9] || (e[9] = y(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[24] ||
                  (e[24] = m("div", { style: { clear: "both" } }, null, -1)),
                r(
                  je,
                  { "no-gutters": "" },
                  {
                    default: a(() => [
                      r(
                        K,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: a(() => [
                            e[10] ||
                              (e[10] = m(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Cliente",
                                -1,
                              )),
                            r(
                              oe,
                              {
                                class: "ma-2",
                                density: "compact",
                                modelValue: s(x),
                                "onUpdate:modelValue":
                                  e[1] ||
                                  (e[1] = (t) => (O(x) ? (x.value = t) : null)),
                                items: s(H),
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
                      r(
                        K,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: a(() => [
                            e[11] ||
                              (e[11] = m(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Progetto",
                                -1,
                              )),
                            r(
                              oe,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: s(q),
                                "onUpdate:modelValue":
                                  e[2] ||
                                  (e[2] = (t) => (O(q) ? (q.value = t) : null)),
                                items: s(T),
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
                        K,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: a(() => [
                            e[12] ||
                              (e[12] = m(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Data Scadenza",
                                -1,
                              )),
                            r(
                              s(ze),
                              {
                                modelValue: s(V),
                                "onUpdate:modelValue":
                                  e[3] ||
                                  (e[3] = (t) => (O(V) ? (V.value = t) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": s($e),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": s(se),
                                clearable: !1,
                              },
                              {
                                "preset-date-range-button": a(
                                  ({ label: t, value: c, presetDate: i }) => [
                                    m(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (p) => i(c),
                                        onKeyup: [
                                          te(
                                            ae((p) => i(c), ["prevent"]),
                                            ["enter"],
                                          ),
                                          te(
                                            ae((p) => i(c), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      D(t),
                                      41,
                                      Ye,
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
                        K,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: a(() => [
                            r(
                              U,
                              {
                                class: "ma-2 mt-8",
                                onClick: e[4] || (e[4] = (t) => $()),
                              },
                              {
                                default: a(() => [
                                  r(_, null, {
                                    default: a(() => [
                                      ...(e[13] ||
                                        (e[13] = [y("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  e[14] || (e[14] = y("Cerca", -1)),
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
                  Ae,
                  {
                    density: "compact",
                    items: s(j),
                    headers: pe,
                    search: s(A),
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
                    "row-props": me,
                  },
                  {
                    top: a(() => [
                      r(
                        Te,
                        {
                          modelValue: s(A),
                          "onUpdate:modelValue":
                            e[5] ||
                            (e[5] = (t) => (O(A) ? (A.value = t) : null)),
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
                      m("span", null, D(s(M)[t.project_id]), 1),
                    ]),
                    "item.total": a(({ item: t }) => [
                      m(
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
                    "item.vat": a(({ item: t }) => [
                      m(
                        "span",
                        null,
                        D(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(t.vat),
                        ),
                        1,
                      ),
                    ]),
                    "item.cliente": a(({ item: t }) => [
                      m("span", { title: t.id }, D(t.cliente), 9, Ge),
                    ]),
                    "item.invoicedate": a(({ item: t }) => [
                      m(
                        "span",
                        null,
                        D(new Date(t.invoicedate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentduedate": a(({ item: t }) => [
                      m(
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
                    "item.payed": a(({ item: t }) => [
                      t.payed == "P"
                        ? (w(),
                          k(
                            le,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: a(() => [
                                ...(e[15] || (e[15] = [y(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : S("", !0),
                      t.payed == "N"
                        ? (w(),
                          k(
                            le,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: a(() => [
                                ...(e[16] || (e[16] = [y(" Non pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : S("", !0),
                    ]),
                    "item.bank_id": a(({ item: t }) => [
                      m("span", null, D(s(F)[t.bank_id]), 1),
                    ]),
                    "item.anticipobancario": a(({ item: t }) => [
                      m("span", null, [
                        t.anticipobancario == 1
                          ? (w(),
                            k(
                              _,
                              {
                                key: 0,
                                class: "me-2",
                                size: "large",
                                color: "red",
                                title: "Anticipo Bancario",
                              },
                              {
                                default: a(() => [
                                  ...(e[17] ||
                                    (e[17] = [y("mdi-check-bold", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : S("", !0),
                      ]),
                    ]),
                    "item.actions": a(({ item: t }) => [
                      r(
                        Be,
                        { "offset-y": "" },
                        {
                          activator: a(({ props: c }) => [
                            r(
                              U,
                              Ce(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                c,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: a(() => [
                            m("div", He, [
                              r(
                                Fe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: a(() => [
                                    s(P).hasinvoice == 1
                                      ? (w(),
                                        k(
                                          W,
                                          {
                                            key: 0,
                                            onClick: (c) => h(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              r(
                                                _,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(e[18] ||
                                                      (e[18] = [
                                                        y("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              r(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(e[19] ||
                                                      (e[19] = [
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
                                      : (w(),
                                        k(
                                          W,
                                          {
                                            key: 1,
                                            onClick: (c) => h(t.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              r(
                                                _,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(e[20] ||
                                                      (e[20] = [
                                                        y("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              r(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(e[21] ||
                                                      (e[21] = [
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
                                    s(P).hasinvoice == 1
                                      ? (w(),
                                        k(
                                          W,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: a(() => [
                                              r(
                                                Q,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    r(
                                                      o,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (c) =>
                                                          ge(t.id),
                                                        iconadelete: s(ce),
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
                                      : S("", !0),
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
                s(B)
                  ? (w(),
                    k(
                      l,
                      {
                        key: 0,
                        aryclients: s(L),
                        projects: s(T),
                        banks: s(Y),
                        dialoginsmod: s(B),
                        idrec: s(Z),
                        onClose: fe,
                      },
                      null,
                      8,
                      [
                        "aryclients",
                        "projects",
                        "banks",
                        "dialoginsmod",
                        "idrec",
                      ],
                    ))
                  : S("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { Pt as default };
