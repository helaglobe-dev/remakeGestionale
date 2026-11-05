import { x as y } from "./D16A7lth.js";
import {
  u as xe,
  F as we,
  E as Ee,
  r,
  G as Ve,
  k as C,
  o as Se,
  e as Ce,
  x as g,
  z as n,
  B as u,
  H as Ne,
  C as c,
  L as h,
  n as Pe,
  a1 as ae,
  y as f,
  D as x,
  A as b,
  J as Te,
  K as O,
  Q as H,
  R as K,
  I as Re,
} from "./CYsiv7Qj.js";
import { u as $e } from "./LKQL6vAN.js";
import { $ as J } from "./BvG7V8Ak.js";
import { V as W, a as X } from "./B_W9U9Wp.js";
import { V as je, a as N } from "./Bj0ZT2dB.js";
import { V as Fe } from "./ss-1h9Hv.js";
import { V as qe } from "./Dlfzj7mx.js";
import { V as j } from "./DCAzZvgN.js";
import { V as Le, c as De, d as ze } from "./sbneMOUU.js";
import { V as Ie } from "./BqujDEEl.js";
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
const Ae = { class: "pl-10 pr-10" },
  Be = { class: "divcenterpage" },
  Me = { style: { display: "inline", float: "right" } },
  Ue = { style: { "background-color": "#8fbaca" } },
  Ye = { style: { "background-color": "#8fbaca" } },
  Oe = ["onClick"],
  He = { class: "cell-with-corner", style: { display: "block" } },
  Ke = {
    key: 0,
    style: {
      color: "#00516E",
      "font-weight": "bold",
      "font-size": "small",
      "font-style": "italic",
      float: "right",
      display: "inline-block",
      width: "100%",
      "text-align": "right",
    },
  },
  Je = ["onClick"],
  We = ["innerHTML"],
  xt = {
    __name: "scadenziariofattureattive",
    setup(Xe) {
      const F = Pe(),
        ne = xe();
      we();
      const { status: Ge, signIn: Qe, signOut: Ze, data: et } = Ee();
      r([]);
      const q = r([]),
        se = r(""),
        w = Ve("snackbar");
      r(!1), r(0);
      const P = r(null),
        T = r(null),
        E = r(new Date().getFullYear()),
        V = r(new Date().getFullYear()),
        G = C(() => {
          const l = new Date().getFullYear();
          return Array.from({ length: l + 2 - 2023 + 1 }, (e, t) => 2023 + t);
        }),
        L = r(null),
        R = r(!1),
        re = r(new Date().getFullYear()),
        ie = r(String(new Date().getMonth() + 1).padStart(2, "0")),
        ue = r(!1),
        ce = C(() => [
          { title: "Destinatario", key: "client_id" },
          { title: "Sponsor", key: "issponsor" },
          {
            title: "Codice Progetto",
            key: "code",
            sortable: !0,
            sortRaw: (l, e) => {
              const t = (i) => ({
                  anno: Number(i.code.slice(-4)),
                  numero: Number(i.code.slice(2, -4)),
                }),
                o = t(l),
                a = t(e);
              return o.anno === a.anno ? o.numero - a.numero : o.anno - a.anno;
            },
          },
          { title: "Progetto", key: "project_id" },
          ...p.value.map((l) => ({ title: l.title, key: l.key, align: "end" })),
        ]),
        _ = r(null),
        Q = r(null),
        Z = r(null);
      let m = null;
      const D = C(() => {
        const l = {};
        return (
          p.value.forEach((e) => {
            l[e.key] = 0;
          }),
          S.value.forEach((e) => {
            p.value.forEach((t) => {
              l[t.key] += Number(e[t.key] + e[t.key + "_tranche"] || 0);
            });
          }),
          l
        );
      });
      C(() => {
        const l = {};
        return (
          p.value.forEach((e) => {
            l[e.key] = 0;
          }),
          S.value.forEach((e) => {
            p.value.forEach((t) => {
              l[t.key] += Number(e[t.key + "_tranche"] || 0);
            });
          }),
          l
        );
      });
      const S = C(() => {
          const l = {};
          return (
            q.value.forEach((e) => {
              const t = `${e.client_id}_${e.project_id}`;
              l[t] ||
                (l[t] = {
                  client_id: M.value[e.client_id],
                  issponsor: e.issponsor,
                  pid: e.project_id,
                  code: A.value[e.project_id] || "",
                  project_id: I.value[e.project_id],
                });
              const o = `${e.anno}-${String(e.mese).padStart(2, "0")}`;
              (l[t][o] = e.totale_fattura),
                (l[t][o + "_tranche"] = e.totale_tranche + e.vat_tranche);
              const a = e.stati.split(",").map((k) => k.trim());
              let i;
              e.scaduta == !0
                ? (i = "#f54336")
                : a.every((k) => k === "P")
                  ? (i = "#62be62")
                  : a.every((k) => k === "N")
                    ? (i = "#000000")
                    : a.includes("P")
                      ? (i = "#eb7c2a")
                      : (i = "#000000"),
                (l[t][o + "_colore"] = i),
                (l[t][o + "_note"] = e.note),
                (l[t][o + "_tipo"] = e.tipo_importo);
            }),
            Object.values(l)
          );
        }),
        de = (l) => {
          if (!l) return;
          const e = ne.resolve({ path: "/tasks/", query: { id: l } });
          window.open(e.href, "_blank");
        },
        z = r([]),
        ee = r([]),
        I = r([]),
        A = r([]),
        B = r([]),
        M = r([]);
      $e({
        title: "Scadenziario Fatture Pagate",
        meta: [{ name: "description", content: "Scadenziario Fatture Pagate" }],
      });
      function pe(l, e) {
        const t = new Date(),
          o = t.getFullYear(),
          a = t.getMonth() + 1,
          i =
            Number(e.key.substr(0, 4)) < o ||
            (Number(e.key.substr(0, 4)) === o &&
              Number(e.key.substr(5, 2)) < a);
        return l[e.key + "_colore"] == "#62be62"
          ? { color: "#62be62" }
          : (i && l[e.key + "_colore"] == "#eb7c2a") ||
              (i && l[e.key + "_colore"] == "#000000") ||
              l[e.key + "_colore"] == "#f54336"
            ? { color: "#f54336" }
            : l[e.key + "_colore"] == "#eb7c2a"
              ? { color: "#eb7c2a" }
              : l[e.key + "_colore"] == "#000000"
                ? { color: "#000000" }
                : { color: "#000000" };
      }
      const te = (l) =>
        new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "EUR",
        }).format(l || 0);
      function ve() {
        const l = [
            "Destinatario",
            "Sponsor",
            "Codice Progetto",
            "Progetto",
            ...p.value.map((s) => s.title),
          ],
          e = S.value.map((s) => {
            const d = {};
            return (
              (d.Destinatario = s.client_id || ""),
              (d.Sponsor = s.issponsor || ""),
              (d["Codice Progetto"] = s.code || ""),
              (d.Progetto = s.project_id || ""),
              p.value.forEach((v) => {
                d[v.title] = s[v.key] + s[v.key + "_tranche"] || "";
              }),
              d
            );
          }),
          t = {
            Destinatario: "Totali",
            Sponsor: "",
            "Codice Progetto": "",
            Progetto: "",
          };
        p.value.forEach((s) => {
          t[s.title] = D.value[s.key] || 0;
        }),
          e.push(t);
        const o = y.utils.json_to_sheet(e, { header: l });
        o["!cols"] = [
          { wch: 40 },
          { wch: 20 },
          { wch: 20 },
          { wch: 40 },
          ...p.value.map(() => ({ wch: 15 })),
        ];
        const a = y.utils.decode_range(o["!ref"]);
        for (let s = a.s.c; s <= a.e.c; s++) {
          const d = y.utils.encode_cell({ r: 0, c: s });
          o[d] && (o[d].s = { font: { bold: !0 } });
        }
        for (let s = 1; s <= e.length; s++)
          for (let d = 2; d <= a.e.c; d++) {
            const v = y.utils.encode_cell({ r: s, c: d });
            o[v] &&
              typeof o[v].v == "number" &&
              ((o[v].t = "n"), (o[v].z = "€ #,##0.00"));
          }
        const i = e.length;
        for (let s = a.s.c; s <= a.e.c; s++) {
          const d = y.utils.encode_cell({ r: i, c: s });
          o[d] && (o[d].s = { font: { bold: !0 } });
        }
        S.value.forEach((s, d) => {
          p.value.forEach((v, he) => {
            const le = v.key + "_note";
            let $ = s[le];
            if ((console.log("NOTE CHECK:", le, $), $)) {
              const Y = y.utils.encode_cell({ r: d + 1, c: he + 4 });
              o[Y] || (o[Y] = { t: "s", v: "" }),
                $ != "" &&
                  (o[Y].c = [
                    {
                      a: "Sistema",
                      t: $.replace(
                        /<hr>/g,
                        `

`,
                      ),
                      hidden: !0,
                    },
                  ]);
            }
          });
        });
        const k = y.utils.book_new();
        y.utils.book_append_sheet(k, o, "ScadenziarioFattureAttive"),
          y.writeFile(k, "ScadenziarioFattureAttive.xlsx");
      }
      function fe(l) {
        (L.value = l), (R.value = !0);
      }
      function me() {
        (L.value = null), (R.value = !1);
      }
      const ye = ({ item: l }) =>
          l.payed == "P" ? {} : l.payed == "N" ? {} : {},
        oe = async () => {
          const l = [],
            e = E.value - 1;
          l.push({ key: `${e}-12`, title: `12/${e}` });
          for (let o = E.value; o <= V.value; o++)
            for (let a = 1; a <= 12; a++)
              l.push({
                key: `${o}-${String(a).padStart(2, "0")}`,
                title: `${String(a).padStart(2, "0")}/${o}`,
              });
          const t = V.value + 1;
          l.push({ key: `${t}-01`, title: `01/${t}` }),
            (p.value = l),
            await ge();
        },
        ge = async () => {
          q.value = [];
          let l = {
            client: P.value != null ? P.value : 0,
            project: T.value != null ? T.value : 0,
            anno_da: E.value,
            anno_a: V.value,
            spostate: 1,
          };
          try {
            const { data: e, status: t } = await J(
              F.public.apiBaseurl + "invoice/scadenziariofa",
              { method: "POST", body: l },
            );
            e.forEach((o) => {
              o.sponsor_client_id
                ? ((o.client_id = o.sponsor_client_id), (o.issponsor = "SI"))
                : (o.issponsor = "NO"),
                q.value.push(o);
            });
          } catch (e) {
            console.log(e);
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (w.value = { text: t, type: "danger", show: !0 });
            return;
          }
          await ae(),
            (m = Z.value.$el.querySelector(".v-table__wrapper")),
            (Q.value.style.width = m.scrollWidth + 630 + "px"),
            _e(),
            _.value.addEventListener("scroll", () => {
              m.scrollLeft = _.value.scrollLeft;
            }),
            m.addEventListener("scroll", () => {
              _.value.scrollLeft = m.scrollLeft;
            });
        };
      function U() {
        ue.value = window.innerWidth <= 960;
      }
      const ke = async () => {
          (z.value = []), (ee.value = []), (I.value = []), (A.value = []);
          const { data: l } = await J(F.public.apiBaseurl + "project/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: o }) {
              console.log("Errore nella request:", o),
                (w.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: o }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (w.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: o }) {
              t._data.data.forEach((a) => {
                let i = a.contractname ? a.contractname : a.name;
                z.value.push({ label: "[" + a.code + "] " + i, value: a.id }),
                  (ee.value[a.id] = "[" + a.code + "] " + i),
                  (I.value[a.id] = i),
                  (A.value[a.id] = a.code);
              });
            },
          });
        },
        be = async () => {
          (B.value = []), (M.value = []);
          const { data: l } = await J(F.public.apiBaseurl + "client/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: o }) {
              console.log("Errore nella request:", o),
                (w.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: o }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (w.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: o }) {
              t._data.data.forEach((a) => {
                B.value.push({ label: a.name, value: a.id }),
                  (M.value[a.id] = a.name);
              });
            },
          });
        },
        p = r([]);
      function _e() {
        ae(() => {
          if (!m) return;
          const l = `${re.value}-${ie.value}`,
            e = p.value.findIndex((i) => i.key === l);
          if (e === -1) return;
          const o = m.querySelector("table")?.querySelectorAll("thead th");
          if (!o || !o[e + 4]) return;
          const a = o[e + 4];
          (m.scrollLeft = a.offsetLeft - 600),
            _.value && (_.value.scrollLeft = m.scrollLeft);
        });
      }
      return (
        Se(async () => {
          U(),
            window.addEventListener("resize", U),
            await ke(),
            await be(),
            await oe();
        }),
        Ce(() => {
          window.removeEventListener("resize", U);
        }),
        (l, e) => (
          f(),
          g("div", Ae, [
            n("div", Be, [
              e[20] || (e[20] = n("br", null, null, -1)),
              e[21] ||
                (e[21] = n(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Scadenziario Fatture Pagate",
                  -1,
                )),
              n("div", Me, [
                u(
                  W,
                  { color: "primary", onClick: ve },
                  {
                    default: c(() => [
                      u(
                        X,
                        { class: "mr-3" },
                        {
                          default: c(() => [
                            ...(e[7] || (e[7] = [x("mdi-export", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      e[8] || (e[8] = x(" XLS", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              e[22] ||
                (e[22] = Ne(
                  '<div style="display:inline;float:right;margin-right:15px;"><div class="d-flex flex-wrap ga-4 align-center"><div class="d-flex align-center"><div class="legend-box" style="background-color:#00516e;"></div><span class="font-italic ml-2" style="color:#00516e;">Tranche</span></div><div class="d-flex align-center"><div class="legend-box bg-green"></div><span class="ml-2">Fattura pagata</span></div><div class="d-flex align-center"><div class="legend-box bg-black"></div><span class="ml-2">Fattura con scadenza futura</span></div><div class="d-flex align-center"><div class="legend-box bg-red"></div><span class="ml-2">Fattura scaduta e non ancora pagata</span></div><div class="d-flex align-center"><div class="legend-box bg-orange"></div><span class="ml-2">Più fatture non tutte pagate</span></div></div></div><div style="clear:both;"></div>',
                  2,
                )),
              u(
                je,
                { "no-gutters": "" },
                {
                  default: c(() => [
                    u(
                      N,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: c(() => [
                          u(
                            j,
                            {
                              class: "ma-2",
                              density: "compact",
                              modelValue: P.value,
                              "onUpdate:modelValue":
                                e[0] || (e[0] = (t) => (P.value = t)),
                              items: B.value,
                              label: "Destinatario",
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
                    u(
                      N,
                      { cols: "12", sm: "12", md: "3" },
                      {
                        default: c(() => [
                          u(
                            j,
                            {
                              class: "ma-2",
                              density: "compact",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              modelValue: T.value,
                              "onUpdate:modelValue":
                                e[1] || (e[1] = (t) => (T.value = t)),
                              items: z.value,
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
                    u(
                      N,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: c(() => [
                          u(
                            j,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: E.value,
                              "onUpdate:modelValue":
                                e[2] || (e[2] = (t) => (E.value = t)),
                              items: h(G),
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
                    u(
                      N,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: c(() => [
                          u(
                            j,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: V.value,
                              "onUpdate:modelValue":
                                e[3] || (e[3] = (t) => (V.value = t)),
                              items: h(G),
                              label: "A Anno",
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
                    u(
                      N,
                      { cols: "12", sm: "12", md: "1" },
                      {
                        default: c(() => [
                          u(
                            W,
                            {
                              class: "ma-2",
                              onClick: e[4] || (e[4] = (t) => oe()),
                            },
                            {
                              default: c(() => [
                                u(X, null, {
                                  default: c(() => [
                                    ...(e[9] ||
                                      (e[9] = [x("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                e[10] || (e[10] = x("Cerca", -1)),
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
              n(
                "div",
                { ref_key: "topScroll", ref: _, class: "top-scroll" },
                [
                  n(
                    "div",
                    {
                      ref_key: "topScrollContent",
                      ref: Q,
                      class: "top-scroll-content",
                    },
                    null,
                    512,
                  ),
                ],
                512,
              ),
              u(
                Fe,
                {
                  ref_key: "dataTable",
                  ref: Z,
                  density: "comfortable",
                  class: "excel-table scad",
                  items: h(S),
                  headers: h(ce),
                  search: se.value,
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
                  "row-props": ye,
                  "sort-by": [{ key: "client_id", order: "asc" }],
                },
                {
                  tfoot: c(() => [
                    n("tr", Ue, [
                      e[11] ||
                        (e[11] = n(
                          "td",
                          null,
                          [n("strong", null, "Totali")],
                          -1,
                        )),
                      e[12] || (e[12] = n("td", null, null, -1)),
                      e[13] || (e[13] = n("td", null, null, -1)),
                      e[14] || (e[14] = n("td", null, null, -1)),
                      (f(!0),
                      g(
                        H,
                        null,
                        K(
                          p.value,
                          (t) => (
                            f(),
                            g("td", { key: t.key, class: "text-end" }, [
                              n(
                                "b",
                                null,
                                b(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(h(D)[t.key] || 0),
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
                    n("tr", Ye, [
                      e[15] ||
                        (e[15] = n(
                          "td",
                          null,
                          [n("strong", null, "Totali")],
                          -1,
                        )),
                      e[16] || (e[16] = n("td", null, null, -1)),
                      e[17] || (e[17] = n("td", null, null, -1)),
                      e[18] || (e[18] = n("td", null, null, -1)),
                      (f(!0),
                      g(
                        H,
                        null,
                        K(
                          p.value,
                          (t) => (
                            f(),
                            g("td", { key: t.key, class: "text-end" }, [
                              n(
                                "b",
                                null,
                                b(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(h(D)[t.key] || 0),
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
                      n("td", null, b(t.client_id), 1),
                      n("td", null, [
                        t.issponsor === "SI"
                          ? (f(),
                            Te(
                              X,
                              { key: 0 },
                              {
                                default: c(() => [
                                  ...(e[19] || (e[19] = [x("mdi-check", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : O("", !0),
                      ]),
                      n("td", null, [
                        n(
                          "span",
                          {
                            style: { cursor: "pointer" },
                            onClick: (a) => de(t.pid),
                          },
                          b(t.code),
                          9,
                          Oe,
                        ),
                      ]),
                      n("td", null, b(t.project_id), 1),
                      (f(!0),
                      g(
                        H,
                        null,
                        K(
                          o.slice(4),
                          (a) => (
                            f(),
                            g("td", { key: a.key, class: "text-end" }, [
                              n("div", He, [
                                n(
                                  "div",
                                  {
                                    style: Re([
                                      pe(t, a),
                                      {
                                        float: "right",
                                        display: "inline-block",
                                        width: "100%",
                                        "text-align": "right",
                                      },
                                    ]),
                                  },
                                  b(t[a.key] > 0 ? te(t[a.key]) : ""),
                                  5,
                                ),
                                t[a.key + "_tranche"] > 0
                                  ? (f(),
                                    g(
                                      "div",
                                      Ke,
                                      b(
                                        t[a.key + "_tranche"]
                                          ? te(t[a.key + "_tranche"])
                                          : "",
                                      ),
                                      1,
                                    ))
                                  : O("", !0),
                                t[a.key + "_note"]
                                  ? (f(),
                                    g(
                                      "span",
                                      {
                                        key: 1,
                                        onClick: (i) => fe(t[a.key + "_note"]),
                                        class: "corner-flag",
                                      },
                                      null,
                                      8,
                                      Je,
                                    ))
                                  : O("", !0),
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
            u(
              qe,
              {
                modelValue: R.value,
                "onUpdate:modelValue": e[6] || (e[6] = (t) => (R.value = t)),
                "max-width": "800",
                persistent: "",
              },
              {
                default: c(() => [
                  u(
                    Le,
                    { class: "pa-2" },
                    {
                      default: c(() => [
                        u(De, null, {
                          default: c(() => [
                            n("div", { innerHTML: L.value }, null, 8, We),
                          ]),
                          _: 1,
                        }),
                        u(ze, null, {
                          default: c(() => [
                            u(Ie),
                            u(
                              W,
                              {
                                color: "#A5161E",
                                onClick: e[5] || (e[5] = (t) => me()),
                              },
                              {
                                default: c(() => [
                                  ...(e[23] || (e[23] = [x("Chiudi", -1)])),
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
export { xt as default };
