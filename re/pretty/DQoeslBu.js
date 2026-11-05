import { x as d } from "./D16A7lth.js";
import {
  u as oe,
  F as le,
  E as ae,
  r as l,
  G as ie,
  o as ne,
  e as se,
  x as ue,
  z as o,
  H as ce,
  B as m,
  C as n,
  n as me,
  y as pe,
  D as T,
  A as s,
  I as de,
} from "./CYsiv7Qj.js";
import { u as ve } from "./LKQL6vAN.js";
import { $ as q } from "./BvG7V8Ak.js";
import { V as O, a as H } from "./B_W9U9Wp.js";
import { V as ge, a as j } from "./Bj0ZT2dB.js";
import { V as fe } from "./ss-1h9Hv.js";
import { V as M } from "./DCAzZvgN.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BrCrqdgZ.js";
import "./Cv1q1CuH.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const ye = { class: "pl-10 pr-10" },
  be = { class: "divcenterpage" },
  ke = { style: { display: "inline", float: "right" } },
  we = ["onClick"],
  Ie = { style: { "background-color": "#8fbaca" } },
  Ke = {
    __name: "kpi",
    setup(he) {
      const S = me(),
        W = oe();
      le();
      const { status: Ee, signIn: Ce, signOut: xe, data: _e } = ae(),
        _ = l([]);
      l("");
      const g = ie("snackbar"),
        f = l(
          localStorage.getItem("hgfiltrokpicliente") != "null" &&
            localStorage.getItem("hgfiltrokpicliente") != null
            ? parseInt(localStorage.getItem("hgfiltrokpicliente"))
            : null,
        ),
        y = l(
          localStorage.getItem("hgfiltrokpiprogetto") != "null" &&
            localStorage.getItem("hgfiltrokpiprogetto") != null
            ? parseInt(localStorage.getItem("hgfiltrokpiprogetto"))
            : null,
        ),
        X = l(!1),
        J = l([
          {
            title: "Codice Progetto",
            key: "project_code",
            sortable: !0,
            sortRaw: (c, t) => {
              const e = (v) => ({
                  anno: Number(v.project_code.slice(-4)),
                  numero: Number(v.project_code.slice(2, -4)),
                }),
                r = e(c),
                a = e(t);
              return r.anno === a.anno ? r.numero - a.numero : r.anno - a.anno;
            },
          },
          { title: "Cliente", key: "client_name", sortable: !0 },
          { title: "Progetto", key: "project_name", sortable: !0 },
          { title: "Ricavi presunti", key: "ricavipresunti", sortable: !0 },
          { title: "Ricavi effettivi", key: "ricavi", sortable: !0 },
          { title: "Costi presunti", key: "costipresunti", sortable: !0 },
          { title: "Costi passanti effettivi", key: "costi", sortable: !0 },
          { title: "Primo Margine", key: "primomarg", sortable: !0 },
          { title: "Margine di Progetto", key: "margprog", sortable: !0 },
          { title: "Margine Commerciale", key: "margcomm", sortable: !0 },
          { title: "% di Margine", key: "margpercent", sortable: !0 },
        ]),
        Q = [
          { title: "Codice Progetto", key: "project_code" },
          { title: "Cliente", key: "client_name" },
          { title: "Progetto", key: "project_name" },
          { title: "Ricavi presunti", key: "ricavipresunti" },
          { title: "Ricavi effettivi", key: "ricavi" },
          { title: "Costi presunti", key: "costipresunti" },
          { title: "Costi passanti effettivi", key: "costi" },
          { title: "Primo Margine", key: "primomarg" },
          { title: "Margine di Progetto", key: "margprog" },
          { title: "Margine Commerciale", key: "margcomm" },
          { title: "% di Margine", key: "margpercent" },
        ],
        R = l(null),
        B = l(null),
        L = l(null),
        Y = l([
          { label: "Tutti", value: 0 },
          { label: "Aperti", value: 1 },
          { label: "Chiusi", value: 2 },
        ]),
        N = l(
          localStorage.getItem("hgfiltrokpiopen") != "null" &&
            localStorage.getItem("hgfiltrokpiopen") != null
            ? parseInt(localStorage.getItem("hgfiltrokpiopen"))
            : 1,
        );
      let b = null;
      const k = l(0),
        w = l(0),
        I = l(0),
        h = l(0),
        E = l(0),
        C = l(0),
        x = l(0),
        V = l([]),
        z = l([]),
        G = l([]),
        A = l([]),
        F = l([]),
        $ = l([]);
      ve({
        title: "Calcoli economici e KPI di Progetto",
        meta: [
          {
            name: "description",
            content: "Calcoli economici e KPI di Progetto",
          },
        ],
      });
      const Z = (c) => {
        if (!c) return;
        const t = W.resolve({ path: "/tasks/", query: { id: c } });
        window.open(t.href, "_blank");
      };
      function ee() {
        const c = _.value.map((u) => {
            const p = {};
            return (
              Q.forEach((i) => {
                p[i.title] = u[i.key] ?? "";
              }),
              p
            );
          }),
          t = {
            "Codice Progetto": "Totali",
            Cliente: "",
            Progetto: "",
            "Ricavi presunti": k.value,
            "Ricavi effettivi": I.value,
            "Costi presunti": w.value,
            "Costi passanti effettivi": h.value,
            "Primo Margine": E.value,
            "Margine di Progetto": C.value,
            "Margine Commerciale": x.value,
            "% di Margine": "",
          };
        c.push(t);
        const e = d.utils.json_to_sheet(c, { cellDates: !0 }),
          r = d.utils.decode_range(e["!ref"]);
        e["!cols"] = [
          { wch: 20 },
          { wch: 60 },
          { wch: 60 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
        ];
        const a = c.length;
        for (let u = r.s.c; u <= r.e.c; u++) {
          const p = d.utils.encode_cell({ r: 0, c: u }),
            i = d.utils.encode_cell({ r: a, c: u });
          e[p] && (e[p].s = { font: { bold: !0 } }),
            e[i] && (e[i].s = { font: { bold: !0 } });
        }
        for (let u = 1; u <= a; u++)
          for (let p = 2; p <= r.e.c; p++) {
            const i = d.utils.encode_cell({ r: u, c: p });
            e[i] &&
              typeof e[i].v == "number" &&
              ((e[i].t = "n"),
              p === r.e.c
                ? ((e[i].v = e[i].v / 100), (e[i].z = "0.00%"))
                : (e[i].z = "€ #,##0.00"));
          }
        const v = r.e.c;
        for (let u = 1; u <= a; u++) {
          const p = d.utils.encode_cell({ r: u, c: v }),
            i = e[p];
          if (i && typeof i.v == "number") {
            let P = "";
            i.v > 0.65
              ? (P = "C6EFCE")
              : i.v >= 0.31 && i.v <= 0.65
                ? (P = "FFEB9C")
                : (P = "FFC7CE"),
              (i.s = {
                fill: { fgColor: { rgb: P } },
                font: { bold: !0 },
                alignment: { horizontal: "center" },
              });
          }
        }
        const K = d.utils.book_new();
        return (
          d.utils.book_append_sheet(K, e, "Kpi"), d.writeFile(K, "kpi.xlsx"), {}
        );
      }
      const D = async () => {
        (k.value = 0),
          (w.value = 0),
          (I.value = 0),
          (h.value = 0),
          (E.value = 0),
          (C.value = 0),
          (x.value = 0),
          localStorage.setItem("hgfiltrokpicliente", f.value),
          localStorage.setItem("hgfiltrokpiprogetto", y.value),
          localStorage.setItem("hgfiltrokpiopen", N.value),
          (_.value = []);
        let c = {
          client: f.value != null ? f.value : 0,
          project: y.value != null ? y.value : 0,
          aperto: N.value,
        };
        try {
          const { data: t, status: e } = await q(
            S.public.apiBaseurl + "invoice/kpi",
            { method: "POST", body: c },
          );
          t.forEach((r) => {
            _.value.push({
              pid: r.project_id,
              project_code: r.project_code,
              client_name: r.client_name,
              project_name: r.project_name,
              ricavi: r.ricavi,
              costi: r.costi,
              primomarg: r.primomarg,
              margprog: r.margprog,
              margcomm: r.margcomm,
              margpercent: r.margpercent,
              ricavipresunti: r.ricavipresunti,
              costipresunti: r.costipresunti,
            }),
              (k.value = k.value + r.ricavipresunti),
              (w.value = w.value + r.costipresunti),
              (I.value = I.value + r.ricavi),
              (h.value = h.value + r.costi),
              (E.value = E.value + r.primomarg),
              (C.value = C.value + r.margprog),
              (x.value = x.value + r.margcomm);
          });
        } catch (t) {
          console.log(t);
          let e = JSON.parse(t.data).errors.title;
          console.log("catcherr", t.data),
            (g.value = { text: e, type: "danger", show: !0 });
          return;
        }
        (b = L.value.$el.querySelector(".v-table__wrapper")),
          (B.value.style.width = b.scrollWidth + 0 + "px"),
          R.value.addEventListener("scroll", () => {
            b.scrollLeft = R.value.scrollLeft;
          }),
          b.addEventListener("scroll", () => {
            R.value.scrollLeft = b.scrollLeft;
          });
      };
      function U() {
        X.value = window.innerWidth <= 960;
      }
      const te = async () => {
          (V.value = []), (z.value = []), (G.value = []), (A.value = []);
          const { data: c } = await q(S.public.apiBaseurl + "project/list/", {
            onRequest({ request: t, options: e }) {},
            onRequestError({ request: t, options: e, error: r }) {
              console.log("Errore nella request:", r),
                (g.value = { text: "Errore: " + r, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: e, options: r }) {
              console.log(
                "Errore nella response: " + e._data.error.messages[0],
              ),
                (g.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: e, options: r }) {
              e._data.data.forEach((a) => {
                let v = a.contractname ? a.contractname : a.name;
                V.value.push({ label: "[" + a.code + "] " + v, value: a.id }),
                  (z.value[a.id] = "[" + a.code + "] " + v),
                  (G.value[a.id] = v),
                  (A.value[a.id] = a.code);
              });
            },
          });
        },
        re = async () => {
          (F.value = []), ($.value = []);
          const { data: c } = await q(S.public.apiBaseurl + "client/list/", {
            onRequest({ request: t, options: e }) {},
            onRequestError({ request: t, options: e, error: r }) {
              console.log("Errore nella request:", r),
                (g.value = { text: "Errore: " + r, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: e, options: r }) {
              console.log(
                "Errore nella response: " + e._data.error.messages[0],
              ),
                (g.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: e, options: r }) {
              e._data.data.forEach((a) => {
                F.value.push({ label: a.name, value: a.id }),
                  ($.value[a.id] = a.name);
              });
            },
          });
        };
      return (
        ne(async () => {
          U(),
            window.addEventListener("resize", U),
            await te(),
            await re(),
            await D();
        }),
        se(() => {
          window.removeEventListener("resize", U);
        }),
        (c, t) => (
          pe(),
          ue("div", ye, [
            o("div", be, [
              t[12] || (t[12] = o("br", null, null, -1)),
              t[13] ||
                (t[13] = o(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Calcoli economici e KPI di Progetto",
                  -1,
                )),
              o("div", ke, [
                m(
                  O,
                  { color: "primary", onClick: ee },
                  {
                    default: n(() => [
                      m(
                        H,
                        { class: "mr-3" },
                        {
                          default: n(() => [
                            ...(t[4] || (t[4] = [T("mdi-export", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      t[5] || (t[5] = T(" XLS", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              t[14] ||
                (t[14] = ce(
                  '<div style="display:inline;float:right;margin-right:15px;"><div class="d-flex flex-wrap ga-4 align-center"> % Margine <div class="d-flex align-center"><div class="legend-box bg-green"></div><span class="ml-2"><b>&gt; 65%</b> Progetto in salute.</span></div><div class="d-flex align-center"><div class="legend-box bg-amber"></div><span class="ml-2"><b>31% - 64%</b> Performance accettabile ma da monitorare: il progetto si sta avvicinando a una situazione critica.</span></div><div class="d-flex align-center"><div class="legend-box bg-red"></div><span class="ml-2"><b>&lt; 30%</b> Progetto in perdita o a forte rischio: richiede intervento immediato.</span></div></div></div><div style="clear:both;"></div>',
                  2,
                )),
              m(
                ge,
                { "no-gutters": "" },
                {
                  default: n(() => [
                    m(
                      j,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: n(() => [
                          m(
                            M,
                            {
                              class: "ma-2",
                              density: "compact",
                              modelValue: f.value,
                              "onUpdate:modelValue":
                                t[0] || (t[0] = (e) => (f.value = e)),
                              items: F.value,
                              label: "Cliente",
                              variant: "outlined",
                              "item-title": "label",
                              "item-value": "value",
                              clearable: "",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              "return-object": !1,
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    m(
                      j,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: n(() => [
                          m(
                            M,
                            {
                              class: "ma-2",
                              density: "compact",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              modelValue: y.value,
                              "onUpdate:modelValue":
                                t[1] || (t[1] = (e) => (y.value = e)),
                              items: V.value,
                              label: "Progetto",
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
                    m(
                      j,
                      { cols: "12", sm: "12", md: "3" },
                      {
                        default: n(() => [
                          m(
                            M,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: N.value,
                              "onUpdate:modelValue":
                                t[2] || (t[2] = (e) => (N.value = e)),
                              items: Y.value,
                              label: "Tipo Progetto",
                              "no-data-text": "Nessun risultato trovato",
                              variant: "outlined",
                              "item-title": "label",
                              "item-value": "value",
                              "return-object": !1,
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    m(
                      j,
                      { cols: "12", sm: "12", md: "1" },
                      {
                        default: n(() => [
                          m(
                            O,
                            {
                              class: "ma-2",
                              onClick: t[3] || (t[3] = (e) => D()),
                            },
                            {
                              default: n(() => [
                                m(H, null, {
                                  default: n(() => [
                                    ...(t[6] ||
                                      (t[6] = [T("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                t[7] || (t[7] = T("Cerca", -1)),
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
                "div",
                { ref_key: "topScroll", ref: R, class: "top-scroll" },
                [
                  o(
                    "div",
                    {
                      ref_key: "topScrollContent",
                      ref: B,
                      class: "top-scroll-content",
                    },
                    null,
                    512,
                  ),
                ],
                512,
              ),
              m(
                fe,
                {
                  headers: J.value,
                  items: _.value,
                  "item-value": "id",
                  ref_key: "dataTable",
                  ref: L,
                  density: "comfortable",
                  class: "excel-table kpitab",
                  style: { "overflow-x": "auto", display: "block" },
                  "items-per-page": -1,
                  "hide-default-footer": "",
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
                  "sort-by": [{ key: "margpercent", order: "asc" }],
                },
                {
                  "item.project_code": n(({ item: e }) => [
                    o("span", null, [
                      o(
                        "span",
                        {
                          style: { cursor: "pointer" },
                          onClick: (r) => Z(e.pid),
                        },
                        s(e.project_code),
                        9,
                        we,
                      ),
                    ]),
                  ]),
                  "item.costi": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.costi)),
                      ),
                      1,
                    ),
                  ]),
                  "item.ricavi": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.ricavi)),
                      ),
                      1,
                    ),
                  ]),
                  "item.ricavipresunti": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.ricavipresunti)),
                      ),
                      1,
                    ),
                  ]),
                  "item.costipresunti": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.costipresunti)),
                      ),
                      1,
                    ),
                  ]),
                  "item.primomarg": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.primomarg)),
                      ),
                      1,
                    ),
                  ]),
                  "item.margprog": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.margprog)),
                      ),
                      1,
                    ),
                  ]),
                  "item.margcomm": n(({ item: e }) => [
                    o(
                      "span",
                      null,
                      s(
                        new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          useGrouping: !0,
                          currency: "EUR",
                        }).format(Number(e.margcomm)),
                      ),
                      1,
                    ),
                  ]),
                  "item.margpercent": n(({ item: e }) => [
                    o(
                      "div",
                      {
                        style: de({
                          backgroundColor:
                            e.margpercent <= 30.99
                              ? "#f76363"
                              : e.margpercent >= 31 && e.margpercent <= 64.99
                                ? "#fac314"
                                : "#72de72",
                        }),
                        class: "pa-2",
                      },
                      s(e.margpercent.toFixed(2)) + "% ",
                      5,
                    ),
                  ]),
                  tfoot: n(() => [
                    o("tr", Ie, [
                      t[8] ||
                        (t[8] = o(
                          "td",
                          null,
                          [o("strong", null, "Totali")],
                          -1,
                        )),
                      t[9] || (t[9] = o("td", null, null, -1)),
                      t[10] || (t[10] = o("td", null, null, -1)),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(k.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(I.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(w.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(h.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(E.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(C.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      o("td", null, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            }).format(x.value || 0),
                          ),
                          1,
                        ),
                      ]),
                      t[11] || (t[11] = o("td", null, null, -1)),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["headers", "items"],
              ),
            ]),
          ])
        )
      );
    },
  };
export { Ke as default };
