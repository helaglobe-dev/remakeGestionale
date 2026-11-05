import { x as f } from "./D16A7lth.js";
import {
  u as me,
  F as fe,
  E as ye,
  r as u,
  G as ve,
  k as E,
  o as ge,
  e as be,
  x as y,
  z as n,
  B as s,
  C as c,
  L as i,
  M as N,
  n as _e,
  y as v,
  D as V,
  A as g,
  Q as Y,
  R as L,
  K as ke,
  I as we,
} from "./CYsiv7Qj.js";
import { u as he } from "./LKQL6vAN.js";
import { $ as z } from "./BvG7V8Ak.js";
import { V as H, a as ee } from "./B_W9U9Wp.js";
import { V as Ee, a as R } from "./Bj0ZT2dB.js";
import { V as Ve } from "./ss-1h9Hv.js";
import { V as xe } from "./Dlfzj7mx.js";
import { V as F } from "./DCAzZvgN.js";
import { V as Se, c as Ce, d as Ne } from "./sbneMOUU.js";
import { V as Re } from "./BqujDEEl.js";
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
const $e = { class: "pl-10 pr-10" },
  Te = { class: "divcenterpage" },
  je = { style: { display: "inline", float: "right" } },
  ze = { style: { "background-color": "#8fbaca" } },
  Fe = { style: { "font-size": "smaller", color: "#00516E" } },
  Pe = { style: { "background-color": "#8fbaca" } },
  Ie = { style: { "font-size": "smaller", color: "#00516E" } },
  qe = { class: "cell-with-corner" },
  De = {
    style: { color: "#00516E", "font-weight": "bold", "font-style": "italic" },
  },
  Ae = ["onClick"],
  Ue = ["innerHTML"],
  mt = {
    __name: "scadenziariofattureattive_old",
    setup(Be) {
      const $ = _e();
      me(), fe();
      const { status: Me, signIn: Oe, signOut: Ye, data: Le } = ye(),
        P = u([]),
        I = u([]),
        te = u(""),
        h = ve("snackbar");
      u(!1), u(0);
      const b = u(null),
        _ = u(null),
        k = u(new Date().getFullYear()),
        w = u(new Date().getFullYear()),
        K = E(() => {
          const a = new Date().getFullYear();
          return Array.from({ length: a + 2 - 2023 + 1 }, (e, t) => 2023 + t);
        }),
        q = u(null),
        x = u(!1);
      u(new Date().getFullYear()),
        u(String(new Date().getMonth() + 1).padStart(2, "0"));
      const oe = u(!1),
        ae = E(() => [
          { title: "Cliente", key: "client_id" },
          { title: "Progetto", key: "project_id" },
          ...p.value.map((a) => ({ title: a.title, key: a.key, align: "end" })),
        ]),
        D = E(() => {
          const a = {};
          return (
            p.value.forEach((e) => {
              a[e.key] = 0;
            }),
            S.value.forEach((e) => {
              p.value.forEach((t) => {
                a[t.key] += Number(e[t.key] || 0);
              });
            }),
            a
          );
        }),
        J = E(() => {
          const a = {};
          return (
            p.value.forEach((e) => {
              a[e.key] = 0;
            }),
            S.value.forEach((e) => {
              p.value.forEach((t) => {
                a[t.key] += Number(e[t.key + "_tranche"] || 0);
              });
            }),
            a
          );
        }),
        S = E(() => {
          const a = {};
          return (
            P.value.forEach((e) => {
              const t = `${e.client_id}_${e.project_id}`;
              a[t] ||
                (a[t] = { client_id: e.client_id, project_id: e.project_id });
              const o = `${e.anno}-${String(e.mese).padStart(2, "0")}`;
              (a[t][o] = e.totale),
                (a[t][o + "_colore"] = e.colore),
                (a[t][o + "_note"] = e.note);
            }),
            I.value.forEach((e) => {
              const t = `${e.client_id}_${e.project_id}`;
              a[t] ||
                (a[t] = { client_id: e.client_id, project_id: e.project_id });
              const o = `${e.anno}-${String(e.mese).padStart(2, "0")}`;
              a[t][o + "_tranche"] = e.totale + e.totale_vat;
            }),
            Object.values(a)
          );
        }),
        A = u([]),
        T = u([]),
        U = u([]),
        j = u([]);
      he({
        title: "Scadenziario Fatture Pagate",
        meta: [{ name: "description", content: "Scadenziario Fatture Pagate" }],
      });
      function le(a, e) {
        const t = new Date(),
          o = t.getFullYear(),
          l = t.getMonth() + 1,
          C =
            Number(e.key.substr(0, 4)) < o ||
            (Number(e.key.substr(0, 4)) === o &&
              Number(e.key.substr(5, 2)) < l);
        return a[e.key + "_colore"] == "#62be62"
          ? { color: "#62be62" }
          : C && a[e.key + "_colore"] == "#eb7c2a"
            ? { color: "#eb7c2a" }
            : C && a[e.key + "_colore"] == "#ea261a"
              ? { color: "#ea261a" }
              : { color: "#000000" };
      }
      const X = (a) =>
        new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "EUR",
        }).format(a || 0);
      function ne() {
        const a = ["Cliente", "Progetto", ...p.value.map((r) => r.title)],
          e = S.value.map((r) => {
            const d = {};
            return (
              (d.Cliente = j.value[r.client_id] || ""),
              (d.Progetto = T.value[r.project_id] || ""),
              p.value.forEach((m) => {
                d[m.title] = r[m.key] || 0;
              }),
              d
            );
          }),
          t = { Cliente: "Totali", Progetto: "" };
        p.value.forEach((r) => {
          t[r.title] = D.value[r.key] || 0;
        }),
          e.push(t);
        const o = f.utils.json_to_sheet(e, { header: a });
        o["!cols"] = [
          { wch: 40 },
          { wch: 40 },
          ...p.value.map(() => ({ wch: 15 })),
        ];
        const l = f.utils.decode_range(o["!ref"]);
        for (let r = l.s.c; r <= l.e.c; r++) {
          const d = f.utils.encode_cell({ r: 0, c: r });
          o[d] && (o[d].s = { font: { bold: !0 } });
        }
        for (let r = 1; r <= e.length; r++)
          for (let d = 2; d <= l.e.c; d++) {
            const m = f.utils.encode_cell({ r, c: d });
            o[m] &&
              typeof o[m].v == "number" &&
              ((o[m].t = "n"), (o[m].z = "€ #,##0.00"));
          }
        const C = e.length;
        for (let r = l.s.c; r <= l.e.c; r++) {
          const d = f.utils.encode_cell({ r: C, c: r });
          o[d] && (o[d].s = { font: { bold: !0 } });
        }
        S.value.forEach((r, d) => {
          p.value.forEach((m, pe) => {
            const Z = m.key + "_note",
              M = r[Z];
            if ((console.log("NOTE CHECK:", Z, M), M)) {
              const O = f.utils.encode_cell({ r: d + 1, c: pe + 2 });
              o[O] || (o[O] = { t: "s", v: "" }),
                (o[O].c = [
                  {
                    a: "Sistema",
                    t: M.replace(
                      /<hr>/g,
                      `

`,
                    ),
                  },
                ]);
            }
          });
        });
        const W = f.utils.book_new();
        f.utils.book_append_sheet(W, o, "ScadenziarioFattureAttive"),
          f.writeFile(W, "ScadenziarioFattureAttive.xlsx");
      }
      function re(a) {
        (q.value = a), (x.value = !0);
      }
      function se() {
        (q.value = null), (x.value = !1);
      }
      const ie = ({ item: a }) =>
          a.payed == "P"
            ? { class: "row-ok-sca" }
            : a.payed == "N"
              ? { class: "row-grey-sca" }
              : {},
        ue = async () => {
          await G(), await Q();
        },
        G = async () => {
          I.value = [];
          let a = {
            client: b.value != null ? b.value : 0,
            project: _.value != null ? _.value : 0,
            anno_da: k.value,
            anno_a: w.value,
            spostate: 1,
          };
          try {
            const { data: e, status: t } = await z(
              $.public.apiBaseurl + "invoice/scadenziario",
              { method: "POST", body: a },
            );
            e.forEach((o) => {
              o.sponsor_client_id
                ? ((o.client_id = o.sponsor_client_id), (o.issponsor = "SI"))
                : (o.issponsor = "NO"),
                I.value.push(o);
            });
          } catch (e) {
            console.log(e);
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (h.value = { text: t, type: "danger", show: !0 });
            return;
          }
        },
        Q = async () => {
          P.value = [];
          let a = {
            client: b.value != null ? b.value : 0,
            project: _.value != null ? _.value : 0,
            anno_da: k.value,
            anno_a: w.value,
          };
          try {
            const { data: e, status: t } = await z(
              $.public.apiBaseurl + "invoice/scadenziariofattureattive",
              { method: "POST", body: a },
            );
            e.forEach((o) => {
              P.value = e;
            });
          } catch (e) {
            console.log(e);
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (h.value = { text: t, type: "danger", show: !0 });
            return;
          }
        };
      function B() {
        oe.value = window.innerWidth <= 960;
      }
      const ce = async () => {
          (A.value = []), (T.value = []);
          const { data: a } = await z($.public.apiBaseurl + "project/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: o }) {
              console.log("Errore nella request:", o),
                (h.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: o }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (h.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: o }) {
              t._data.data.forEach((l) => {
                A.value.push({
                  label: "[" + l.code + "] " + l.name,
                  value: l.id,
                }),
                  (T.value[l.id] = "[" + l.code + "] " + l.name);
              });
            },
          });
        },
        de = async () => {
          (U.value = []), (j.value = []);
          const { data: a } = await z($.public.apiBaseurl + "client/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: o }) {
              console.log("Errore nella request:", o),
                (h.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: o }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (h.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: o }) {
              t._data.data.forEach((l) => {
                U.value.push({ label: l.name, value: l.id }),
                  (j.value[l.id] = l.name);
              });
            },
          });
        },
        p = E(() => {
          const a = [],
            e = k.value - 1;
          a.push({ key: `${e}-12`, title: `12/${e}` });
          for (let o = k.value; o <= w.value; o++)
            for (let l = 1; l <= 12; l++)
              a.push({
                key: `${o}-${String(l).padStart(2, "0")}`,
                title: `${String(l).padStart(2, "0")}/${o}`,
              });
          const t = w.value + 1;
          return a.push({ key: `${t}-01`, title: `01/${t}` }), a;
        });
      return (
        ge(async () => {
          B(),
            window.addEventListener("resize", B),
            await ce(),
            await de(),
            await G(),
            await Q();
        }),
        be(() => {
          window.removeEventListener("resize", B);
        }),
        (a, e) => (
          v(),
          y("div", $e, [
            n("div", Te, [
              e[17] || (e[17] = n("br", null, null, -1)),
              e[18] ||
                (e[18] = n(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Scadenziario Fatture Pagate",
                  -1,
                )),
              n("div", je, [
                s(
                  H,
                  { color: "primary", onClick: ne },
                  {
                    default: c(() => [
                      s(
                        ee,
                        { class: "mr-3" },
                        {
                          default: c(() => [
                            ...(e[7] || (e[7] = [V("mdi-export", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      e[8] || (e[8] = V(" XLS", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              e[19] ||
                (e[19] = n("div", { style: { clear: "both" } }, null, -1)),
              s(
                Ee,
                { "no-gutters": "" },
                {
                  default: c(() => [
                    s(
                      R,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: c(() => [
                          s(
                            F,
                            {
                              class: "ma-2",
                              density: "compact",
                              modelValue: i(b),
                              "onUpdate:modelValue":
                                e[0] ||
                                (e[0] = (t) => (N(b) ? (b.value = t) : null)),
                              items: i(U),
                              label: "Cliente",
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
                    s(
                      R,
                      { cols: "12", sm: "12", md: "3" },
                      {
                        default: c(() => [
                          s(
                            F,
                            {
                              class: "ma-2",
                              density: "compact",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              modelValue: i(_),
                              "onUpdate:modelValue":
                                e[1] ||
                                (e[1] = (t) => (N(_) ? (_.value = t) : null)),
                              items: i(A),
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
                    s(
                      R,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: c(() => [
                          s(
                            F,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: i(k),
                              "onUpdate:modelValue":
                                e[2] ||
                                (e[2] = (t) => (N(k) ? (k.value = t) : null)),
                              items: i(K),
                              label: "Da Anno",
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
                    s(
                      R,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: c(() => [
                          s(
                            F,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: i(w),
                              "onUpdate:modelValue":
                                e[3] ||
                                (e[3] = (t) => (N(w) ? (w.value = t) : null)),
                              items: i(K),
                              label: "Da Anno",
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
                    s(
                      R,
                      { cols: "12", sm: "12", md: "1" },
                      {
                        default: c(() => [
                          s(
                            H,
                            {
                              class: "ma-2",
                              onClick: e[4] || (e[4] = (t) => ue()),
                            },
                            {
                              default: c(() => [
                                s(ee, null, {
                                  default: c(() => [
                                    ...(e[9] ||
                                      (e[9] = [V("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                e[10] || (e[10] = V("Cerca", -1)),
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
              s(
                Ve,
                {
                  density: "comfortable",
                  class: "excel-table",
                  items: i(S),
                  headers: i(ae),
                  search: i(te),
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
                  "row-props": ie,
                },
                {
                  tfoot: c(() => [
                    n("tr", ze, [
                      e[12] ||
                        (e[12] = n(
                          "td",
                          null,
                          [n("strong", null, "Totali")],
                          -1,
                        )),
                      e[13] || (e[13] = n("td", null, null, -1)),
                      (v(!0),
                      y(
                        Y,
                        null,
                        L(
                          i(p),
                          (t) => (
                            v(),
                            y("td", { key: t.key, class: "text-end" }, [
                              n(
                                "b",
                                null,
                                g(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(i(D)[t.key] || 0),
                                ),
                                1,
                              ),
                              e[11] || (e[11] = n("br", null, null, -1)),
                              n(
                                "b",
                                Fe,
                                g(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(i(J)[t.key] || 0),
                                ),
                                1,
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  "body.prepend": c(() => [
                    n("tr", Pe, [
                      e[15] ||
                        (e[15] = n(
                          "td",
                          null,
                          [n("strong", null, "Totali")],
                          -1,
                        )),
                      e[16] || (e[16] = n("td", null, null, -1)),
                      (v(!0),
                      y(
                        Y,
                        null,
                        L(
                          i(p),
                          (t) => (
                            v(),
                            y("td", { key: t.key, class: "text-end" }, [
                              n(
                                "b",
                                null,
                                g(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(i(D)[t.key] || 0),
                                ),
                                1,
                              ),
                              e[14] || (e[14] = n("br", null, null, -1)),
                              n(
                                "b",
                                Ie,
                                g(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(i(J)[t.key] || 0),
                                ),
                                1,
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  item: c(({ item: t, columns: o }) => [
                    n("tr", null, [
                      n("td", null, g(i(j)[t.client_id]), 1),
                      n("td", null, g(i(T)[t.project_id]), 1),
                      (v(!0),
                      y(
                        Y,
                        null,
                        L(
                          o.slice(2),
                          (l) => (
                            v(),
                            y("td", { key: l.key, class: "text-end" }, [
                              n("div", qe, [
                                n(
                                  "span",
                                  { style: we(le(t, l)) },
                                  [
                                    V(g(t[l.key] ? X(t[l.key]) : "") + " ", 1),
                                    n(
                                      "small",
                                      De,
                                      g(
                                        t[l.key + "_tranche"]
                                          ? X(t[l.key + "_tranche"])
                                          : "",
                                      ),
                                      1,
                                    ),
                                  ],
                                  4,
                                ),
                                t[l.key + "_note"]
                                  ? (v(),
                                    y(
                                      "span",
                                      {
                                        key: 0,
                                        onClick: (C) => re(t[l.key + "_note"]),
                                        class: "corner-flag",
                                      },
                                      null,
                                      8,
                                      Ae,
                                    ))
                                  : ke("", !0),
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["items", "headers", "search"],
              ),
            ]),
            s(
              xe,
              {
                modelValue: i(x),
                "onUpdate:modelValue":
                  e[6] || (e[6] = (t) => (N(x) ? (x.value = t) : null)),
                "max-width": "800",
                persistent: "",
              },
              {
                default: c(() => [
                  s(
                    Se,
                    { class: "pa-2" },
                    {
                      default: c(() => [
                        s(Ce, null, {
                          default: c(() => [
                            n("div", { innerHTML: i(q) }, null, 8, Ue),
                          ]),
                          _: 1,
                        }),
                        s(Ne, null, {
                          default: c(() => [
                            s(Re),
                            s(
                              H,
                              {
                                color: "#A5161E",
                                onClick: e[5] || (e[5] = (t) => se()),
                              },
                              {
                                default: c(() => [
                                  ...(e[20] || (e[20] = [V("Chiudi", -1)])),
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
export { mt as default };
