import { x as I } from "./D16A7lth.js";
import {
  u as le,
  F as ne,
  E as re,
  r as i,
  G as ae,
  k as se,
  o as ue,
  e as ce,
  x as _,
  z as o,
  B as c,
  C as a,
  L as l,
  M as V,
  n as ie,
  y as g,
  D as E,
  A as s,
  K as v,
  I as f,
} from "./CYsiv7Qj.js";
import { u as de } from "./LKQL6vAN.js";
import { $ as M } from "./BvG7V8Ak.js";
import { V as B, a as K } from "./B_W9U9Wp.js";
import { V as pe, a as $ } from "./Bj0ZT2dB.js";
import { V as _e } from "./ss-1h9Hv.js";
import { V as ge } from "./Dlfzj7mx.js";
import { V as L } from "./DCAzZvgN.js";
import { V as ye } from "./BrCrqdgZ.js";
import { V as me, c as ve, d as fe } from "./sbneMOUU.js";
import { V as be } from "./BqujDEEl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./Cv1q1CuH.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const ke = { class: "pl-10 pr-10" },
  we = { class: "divcenterpage" },
  he = { style: { display: "inline", float: "right" } },
  xe = { class: "text-end" },
  Ie = { class: "text-end" },
  Ee = { class: "text-end" },
  Ce = { class: "text-end" },
  Re = { class: "text-end" },
  Fe = { class: "text-end" },
  Ne = { class: "text-end" },
  Ve = { class: "text-end" },
  Te = { class: "text-end" },
  Ge = { class: "text-end" },
  Ue = { class: "text-end" },
  Pe = { class: "text-end" },
  $e = { class: "text-end" },
  Se = { class: "text-end" },
  Ae = { class: "text-end" },
  qe = { class: "cell-with-corner text-end" },
  je = ["onClick"],
  De = { class: "cell-with-corner text-end" },
  ze = ["onClick"],
  Me = { class: "cell-with-corner text-end" },
  Be = ["onClick"],
  Le = { class: "cell-with-corner text-end" },
  Oe = ["onClick"],
  Ye = { class: "cell-with-corner text-end" },
  Ke = ["onClick"],
  Xe = { class: "cell-with-corner text-end" },
  He = ["onClick"],
  Je = { class: "cell-with-corner text-end" },
  We = ["onClick"],
  Qe = { class: "cell-with-corner text-end" },
  Ze = ["onClick"],
  et = { class: "cell-with-corner text-end" },
  tt = ["onClick"],
  ot = { class: "cell-with-corner text-end" },
  lt = ["onClick"],
  nt = { class: "cell-with-corner text-end" },
  rt = ["onClick"],
  at = { class: "cell-with-corner text-end" },
  st = ["onClick"],
  ut = { class: "cell-with-corner text-end" },
  ct = ["onClick"],
  it = { class: "cell-with-corner text-end" },
  dt = ["onClick"],
  qt = {
    __name: "scadenziariopassivo",
    setup(pt) {
      const S = ie();
      le(), ne();
      const { status: _t, signIn: gt, signOut: yt, data: mt } = re(),
        x = i([]),
        T = i(""),
        C = ae("snackbar");
      i(!1), i(0);
      const R = i(null),
        F = i(null),
        u = i(new Date().getFullYear()),
        X = se(() => {
          const d = new Date().getFullYear();
          return Array.from({ length: d + 2 - 2023 + 1 }, (n, e) => 2023 + e);
        }),
        A = i(null),
        N = i(!1),
        b = i(new Date().getFullYear()),
        k = i(String(new Date().getMonth() + 1).padStart(2, "0")),
        H = i(!1),
        J = [
          { title: "Fornitore", key: "supplier_id", sortable: !0 },
          { title: "Progetto", key: "project_id", sortable: !0 },
          { title: "Anno", key: "anno", sortable: !0, align: "end" },
          { title: "Dic Prec.", key: "dicp", sortable: !0, align: "end" },
          { title: "Gen", key: "gen", sortable: !0, align: "end" },
          { title: "Feb", key: "feb", sortable: !0, align: "end" },
          { title: "Mar", key: "mar", sortable: !0, align: "end" },
          { title: "Apr", key: "apr", sortable: !0, align: "end" },
          { title: "Mag", key: "mag", sortable: !0, align: "end" },
          { title: "Giu", key: "giu", sortable: !0, align: "end" },
          { title: "Lug", key: "lug", sortable: !0, align: "end" },
          { title: "Ago", key: "ago", sortable: !0, align: "end" },
          { title: "Set", key: "set", sortable: !0, align: "end" },
          { title: "Ott", key: "ott", sortable: !0, align: "end" },
          { title: "Nov", key: "nov", sortable: !0, align: "end" },
          { title: "Dic", key: "dic", sortable: !0, align: "end" },
          { title: "Gen Succ.", key: "genn", sortable: !0, align: "end" },
        ],
        O = [
          { title: "Fornitore", key: "supplier_id", sortable: !0 },
          { title: "Progetto", key: "project_id", sortable: !0 },
          { title: "Anno", key: "anno", sortable: !0, align: "left" },
          { title: "Dic Prec.", key: "dicp", sortable: !0, align: "left" },
          { title: "Gen", key: "gen", sortable: !0, align: "left" },
          { title: "Feb", key: "feb", sortable: !0, align: "left" },
          { title: "Mar", key: "mar", sortable: !0, align: "left" },
          { title: "Apr", key: "apr", sortable: !0, align: "left" },
          { title: "Mag", key: "mag", sortable: !0, align: "left" },
          { title: "Giu", key: "giu", sortable: !0, align: "left" },
          { title: "Lug", key: "lug", sortable: !0, align: "left" },
          { title: "Ago", key: "ago", sortable: !0, align: "left" },
          { title: "Set", key: "set", sortable: !0, align: "left" },
          { title: "Ott", key: "ott", sortable: !0, align: "left" },
          { title: "Nov", key: "nov", sortable: !0, align: "left" },
          { title: "Dic", key: "dic", sortable: !0, align: "left" },
          { title: "Gen Succ.", key: "genn", sortable: !0, align: "left" },
        ],
        q = i([]),
        G = i([]),
        j = i([]),
        U = i([]);
      de({
        title: "Scadenziario Passivo",
        meta: [{ name: "description", content: "Scadenziario Passivo" }],
      });
      const W = ({ item: d }) =>
          d.payed == "P" ? {} : d.payed == "N" ? {} : {},
        r = i([]);
      function Q() {
        const d = x.value.map((h) => {
            const w = {};
            return (
              O.forEach((p) => {
                p.title == "Fornitore"
                  ? (w[p.title] = h[p.key] ? U.value[h[p.key]] : "")
                  : p.title == "Progetto"
                    ? (w[p.title] = h[p.key] ? G.value[h[p.key]] : "")
                    : p.title == "Anno"
                      ? (w[p.title] = u.value)
                      : (w[p.title] = h[p.key] ?? "");
              }),
              w
            );
          }),
          n = I.utils.json_to_sheet(d),
          e = [
            "dicp",
            "gen",
            "feb",
            "mar",
            "apr",
            "mag",
            "giu",
            "lug",
            "ago",
            "set",
            "ott",
            "nov",
            "dic",
            "genn",
          ];
        d.forEach((h, w) => {
          O.forEach((p, oe) => {
            if (e.includes(p.key)) {
              const P = I.utils.encode_cell({ r: w + 1, c: oe }),
                z = `${p.key}_note`;
              console.log("Processing cell:", P, "Value:", x.value[w][z]),
                n[P] || (n[P] = { t: "s", v: "" }),
                x.value[w][z] &&
                  (n[P].c = [
                    {
                      a: "Sistema",
                      t: x.value[w][z].replace(
                        /<hr style="border: 1px solid #ccc; margin: 5px 0;">/g,
                        `

`,
                      ),
                    },
                  ]);
            }
          });
        });
        const t = I.utils.decode_range(n["!ref"]);
        n["!cols"] = [
          { wch: 60 },
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
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
        ];
        for (let h = t.s.c; h <= t.e.c; h++) {
          const w = I.utils.encode_cell({ r: 0, c: h });
          n[w] && (n[w].s = { font: { bold: !0 } });
        }
        const m = I.utils.book_new();
        I.utils.book_append_sheet(m, n, "Scadenziario Passivo"),
          I.writeFile(m, "export-scadenziario-passivo.xlsx");
      }
      function y(d) {
        (A.value = d), (N.value = !0);
      }
      function Z() {
        (A.value = null), (N.value = !1);
      }
      const Y = async () => {
        x.value = [];
        let d = {
          supplier: R.value != null ? R.value : 0,
          project: F.value != null ? F.value : 0,
          anno: u.value,
        };
        console.log(d),
          (r.value.dicp = 0),
          (r.value.gen = 0),
          (r.value.feb = 0),
          (r.value.mar = 0),
          (r.value.apr = 0),
          (r.value.mag = 0),
          (r.value.giu = 0),
          (r.value.lug = 0),
          (r.value.ago = 0),
          (r.value.set = 0),
          (r.value.ott = 0),
          (r.value.nov = 0),
          (r.value.dic = 0),
          (r.value.genn = 0);
        try {
          const { data: n, status: e } = await M(
            S.public.apiBaseurl + "invoice/scadenziariopassivo",
            { method: "POST", body: d },
          );
          n.forEach((t) => {
            x.value.push({
              supplier_id: t.Passcost.supplier_id,
              project_id: t.Passcost.project_id,
              anno: t[0].anno,
              gen: t[0].gen_totale,
              feb: t[0].feb_totale,
              mar: t[0].mar_totale,
              apr: t[0].apr_totale,
              mag: t[0].mag_totale,
              giu: t[0].giu_totale,
              lug: t[0].lug_totale,
              ago: t[0].ago_totale,
              set: t[0].set_totale,
              ott: t[0].ott_totale,
              nov: t[0].nov_totale,
              dic: t[0].dic_totale,
              dicp: t[0].dic_prev_totale,
              genn: t[0].gen_next_totale,
              gen_colore: t[0].gen_colore,
              feb_colore: t[0].feb_colore,
              mar_colore: t[0].mar_colore,
              apr_colore: t[0].apr_colore,
              mag_colore: t[0].mag_colore,
              giu_colore: t[0].giu_colore,
              lug_colore: t[0].lug_colore,
              ago_colore: t[0].ago_colore,
              set_colore: t[0].set_colore,
              ott_colore: t[0].ott_colore,
              nov_colore: t[0].nov_colore,
              dic_colore: t[0].dic_colore,
              dicp_colore: t[0].dic_prev_colore,
              genn_colore: t[0].gen_next_colore,
              gen_note: t[0].gen_note,
              feb_note: t[0].feb_note,
              mar_note: t[0].mar_note,
              apr_note: t[0].apr_note,
              mag_note: t[0].mag_note,
              giu_note: t[0].giu_note,
              lug_note: t[0].lug_note,
              ago_note: t[0].ago_note,
              set_note: t[0].set_note,
              ott_note: t[0].ott_note,
              nov_note: t[0].nov_note,
              dic_note: t[0].dic_note,
              dicp_note: t[0].dic_prev_note,
              genn_note: t[0].gen_next_note,
            }),
              (r.value.dicp = r.value.dicp + t[0].dic_prev_totale),
              (r.value.gen = r.value.gen + t[0].gen_totale),
              (r.value.feb = r.value.feb + t[0].feb_totale),
              (r.value.mar = r.value.mar + t[0].mar_totale),
              (r.value.apr = r.value.apr + t[0].apr_totale),
              (r.value.mag = r.value.mag + t[0].mag_totale),
              (r.value.giu = r.value.giu + t[0].giu_totale),
              (r.value.lug = r.value.lug + t[0].lug_totale),
              (r.value.ago = r.value.ago + t[0].ago_totale),
              (r.value.set = r.value.set + t[0].set_totale),
              (r.value.ott = r.value.ott + t[0].ott_totale),
              (r.value.nov = r.value.nov + t[0].nov_totale),
              (r.value.dic = r.value.dic + t[0].dic_totale),
              (r.value.genn = r.value.genn + t[0].gen_next_totale);
          });
        } catch (n) {
          console.log(n);
          let e = JSON.parse(n.data).errors.title;
          console.log("catcherr", n.data),
            (C.value = { text: e, type: "danger", show: !0 });
          return;
        }
      };
      function D() {
        H.value = window.innerWidth <= 960;
      }
      const ee = async () => {
          (q.value = []), (G.value = []);
          const { data: d } = await M(S.public.apiBaseurl + "project/list/", {
            onRequest({ request: n, options: e }) {},
            onRequestError({ request: n, options: e, error: t }) {
              console.log("Errore nella request:", t),
                (C.value = { text: "Errore: " + t, type: "danger", show: !0 });
            },
            onResponseError({ request: n, response: e, options: t }) {
              console.log(
                "Errore nella response: " + e._data.error.messages[0],
              ),
                (C.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: n, response: e, options: t }) {
              e._data.data.forEach((m) => {
                q.value.push({
                  label: "[" + m.code + "] " + m.name,
                  value: m.id,
                }),
                  (G.value[m.id] = "[" + m.code + "] " + m.name);
              });
            },
          });
        },
        te = async () => {
          (j.value = []), (U.value = []);
          const { data: d } = await M(S.public.apiBaseurl + "supplier/list/", {
            onRequest({ request: n, options: e }) {},
            onRequestError({ request: n, options: e, error: t }) {
              console.log("Errore nella request:", t),
                (C.value = { text: "Errore: " + t, type: "danger", show: !0 });
            },
            onResponseError({ request: n, response: e, options: t }) {
              console.log(
                "Errore nella response: " + e._data.error.messages[0],
              ),
                (C.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: n, response: e, options: t }) {
              e._data.data.forEach((m) => {
                j.value.push({ label: m.name, value: m.id }),
                  (U.value[m.id] = m.name);
              });
            },
          });
        };
      return (
        ue(async () => {
          D(),
            window.addEventListener("resize", D),
            await ee(),
            await te(),
            await Y();
        }),
        ce(() => {
          window.removeEventListener("resize", D);
        }),
        (d, n) => (
          g(),
          _("div", ke, [
            o("div", we, [
              n[15] || (n[15] = o("br", null, null, -1)),
              n[16] ||
                (n[16] = o(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Scadenziario Passivo",
                  -1,
                )),
              o("div", he, [
                c(
                  B,
                  { color: "primary", onClick: Q },
                  {
                    default: a(() => [
                      c(
                        K,
                        { class: "mr-3" },
                        {
                          default: a(() => [
                            ...(n[8] || (n[8] = [E("mdi-export", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      n[9] || (n[9] = E(" XLS", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              n[17] ||
                (n[17] = o("div", { style: { clear: "both" } }, null, -1)),
              c(
                pe,
                { "no-gutters": "" },
                {
                  default: a(() => [
                    c(
                      $,
                      { cols: "12", sm: "12", md: "5" },
                      {
                        default: a(() => [
                          c(
                            L,
                            {
                              class: "ma-2",
                              density: "compact",
                              modelValue: l(R),
                              "onUpdate:modelValue":
                                n[0] ||
                                (n[0] = (e) => (V(R) ? (R.value = e) : null)),
                              items: l(j),
                              label: "Fornitore",
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
                    c(
                      $,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: a(() => [
                          c(
                            L,
                            {
                              class: "ma-2",
                              density: "compact",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              modelValue: l(F),
                              "onUpdate:modelValue":
                                n[1] ||
                                (n[1] = (e) => (V(F) ? (F.value = e) : null)),
                              items: l(q),
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
                    c(
                      $,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: a(() => [
                          c(
                            L,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "130px" },
                              density: "compact",
                              modelValue: l(u),
                              "onUpdate:modelValue": [
                                n[2] ||
                                  (n[2] = (e) => (V(u) ? (u.value = e) : null)),
                                n[3] || (n[3] = (e) => d.getcosts()),
                              ],
                              items: l(X),
                              label: "Anno",
                              "no-data-text": "Nessun risultato trovato",
                              variant: "outlined",
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    c(
                      $,
                      { cols: "12", sm: "12", md: "1" },
                      {
                        default: a(() => [
                          c(
                            B,
                            {
                              class: "ma-2",
                              onClick: n[4] || (n[4] = (e) => Y()),
                            },
                            {
                              default: a(() => [
                                c(K, null, {
                                  default: a(() => [
                                    ...(n[10] ||
                                      (n[10] = [E("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                n[11] || (n[11] = E("Cerca", -1)),
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
              c(
                _e,
                {
                  density: "comfortable",
                  class: "excel-table",
                  items: l(x),
                  headers: J,
                  search: l(T),
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
                  "row-props": W,
                },
                {
                  "header.dicp": a(({ column: e }) => [
                    o("span", null, " Dic. " + s(l(u) - 1), 1),
                  ]),
                  "header.genn": a(({ column: e }) => [
                    o("span", null, " Gen. " + s(l(u) + 1), 1),
                  ]),
                  tfoot: a(() => [
                    o("tr", null, [
                      n[12] ||
                        (n[12] = o(
                          "td",
                          { class: "pt-2 pb-2" },
                          [o("strong", null, "Totali")],
                          -1,
                        )),
                      n[13] || (n[13] = o("td", null, null, -1)),
                      n[14] || (n[14] = o("td", null, null, -1)),
                      o("td", xe, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).dicp),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ie, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).gen),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ee, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).feb),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ce, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).mar),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Re, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).apr),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Fe, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).mag),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ne, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).giu),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ve, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).lug),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Te, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).ago),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ge, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).set),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Ue, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).ott),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Pe, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).nov),
                          ),
                          1,
                        ),
                      ]),
                      o("td", $e, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).dic),
                          ),
                          1,
                        ),
                      ]),
                      o("td", Se, [
                        o(
                          "b",
                          null,
                          s(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(l(r).genn),
                          ),
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                  top: a(() => [
                    c(
                      ye,
                      {
                        modelValue: l(T),
                        "onUpdate:modelValue":
                          n[5] || (n[5] = (e) => (V(T) ? (T.value = e) : null)),
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
                  "item.anno": a(({ item: e }) => [
                    o("div", Ae, [o("span", null, s(l(u)), 1)]),
                  ]),
                  "item.project_id": a(({ item: e }) => [
                    o("span", null, s(l(G)[e.project_id]), 1),
                  ]),
                  "item.dicp": a(({ item: e }) => [
                    o("div", qe, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) - 1 + "-12" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.dicp_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.dicp),
                        ),
                        5,
                      ),
                      e.dicp_note != " - " &&
                      e.dicp_note != "" &&
                      e.dicp_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.dicp_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            je,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.gen": a(({ item: e }) => [
                    o("div", De, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-01" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.gen_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.gen),
                        ),
                        5,
                      ),
                      e.gen_note != " - " &&
                      e.gen_note != "" &&
                      e.gen_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.gen_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            ze,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.feb": a(({ item: e }) => [
                    o("div", Me, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-02" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.feb_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.feb),
                        ),
                        5,
                      ),
                      e.feb_note != " - " &&
                      e.feb_note != "" &&
                      e.feb_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.feb_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            Be,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.mar": a(({ item: e }) => [
                    o("div", Le, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-03" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.mar_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.mar),
                        ),
                        5,
                      ),
                      e.mar_note != " - " &&
                      e.mar_note != "" &&
                      e.mar_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.mar_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            Oe,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.apr": a(({ item: e }) => [
                    o("div", Ye, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-04" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.apr_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.apr),
                        ),
                        5,
                      ),
                      e.apr_note != " - " &&
                      e.apr_note != "" &&
                      e.apr_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.apr_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            Ke,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.mag": a(({ item: e }) => [
                    o("div", Xe, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-05" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.mag_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.mag),
                        ),
                        5,
                      ),
                      e.mag_note != " - " &&
                      e.mag_note != "" &&
                      e.mag_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.mag_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            He,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.giu": a(({ item: e }) => [
                    o("div", Je, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-06" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.giu_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.giu),
                        ),
                        5,
                      ),
                      e.giu_note != " - " &&
                      e.giu_note != "" &&
                      e.giu_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.giu_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            We,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.lug": a(({ item: e }) => [
                    o("div", Qe, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-07" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.lug_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.lug),
                        ),
                        5,
                      ),
                      e.lug_note != " - " &&
                      e.lug_note != "" &&
                      e.lug_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.lug_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            Ze,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.ago": a(({ item: e }) => [
                    o("div", et, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-08" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.ago_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.ago),
                        ),
                        5,
                      ),
                      e.ago_note != " - " &&
                      e.ago_note != "" &&
                      e.ago_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.ago_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            tt,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.set": a(({ item: e }) => [
                    o("div", ot, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-09" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.set_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.set),
                        ),
                        5,
                      ),
                      e.set_note != " - " &&
                      e.set_note != "" &&
                      e.set_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.set_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            lt,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.ott": a(({ item: e }) => [
                    o("div", nt, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-10" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.ott_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.ott),
                        ),
                        5,
                      ),
                      e.ott_note != " - " &&
                      e.ott_note != "" &&
                      e.ott_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.ott_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            rt,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.nov": a(({ item: e }) => [
                    o("div", at, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-11" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.nov_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.nov),
                        ),
                        5,
                      ),
                      e.nov_note != " - " &&
                      e.nov_note != "" &&
                      e.nov_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.nov_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            st,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.dic": a(({ item: e }) => [
                    o("div", ut, [
                      o(
                        "span",
                        {
                          style: f(
                            l(u) + "-12" >= l(b) + "-" + l(k)
                              ? ""
                              : "color:" + e.dic_colore,
                          ),
                        },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.dic),
                        ),
                        5,
                      ),
                      e.dic_note != " - " &&
                      e.dic_note != "" &&
                      e.dic_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.dic_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            ct,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.genn": a(({ item: e }) => [
                    o("div", it, [
                      o(
                        "span",
                        { style: f("color:" + e.genn_colore) },
                        s(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.genn),
                        ),
                        5,
                      ),
                      e.genn_note != " - " &&
                      e.genn_note != "" &&
                      e.genn_note != null
                        ? (g(),
                          _(
                            "span",
                            {
                              key: 0,
                              onClick: (t) => y(e.genn_note),
                              style: { cursor: "pointer" },
                              class: "corner-flag",
                            },
                            null,
                            8,
                            dt,
                          ))
                        : v("", !0),
                    ]),
                  ]),
                  "item.supplier_id": a(({ item: e }) => [
                    o("span", null, s(l(U)[e.supplier_id]), 1),
                  ]),
                  _: 1,
                },
                8,
                ["items", "search"],
              ),
            ]),
            c(
              ge,
              {
                modelValue: l(N),
                "onUpdate:modelValue":
                  n[7] || (n[7] = (e) => (V(N) ? (N.value = e) : null)),
                "max-width": "800",
                persistent: "",
              },
              {
                default: a(() => [
                  c(
                    me,
                    { class: "pa-2" },
                    {
                      default: a(() => [
                        c(ve, null, {
                          default: a(() => [E(s(l(A)), 1)]),
                          _: 1,
                        }),
                        c(fe, null, {
                          default: a(() => [
                            c(be),
                            c(
                              B,
                              {
                                color: "#A5161E",
                                onClick: n[6] || (n[6] = (e) => Z()),
                              },
                              {
                                default: a(() => [
                                  ...(n[18] || (n[18] = [E("Chiudi", -1)])),
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
          ])
        )
      );
    },
  };
export { qt as default };
