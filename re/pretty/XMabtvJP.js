import { x as v } from "./D16A7lth.js";
import {
  u as Ee,
  F as Ve,
  E as Se,
  r as i,
  G as Ce,
  k as D,
  o as $e,
  e as Te,
  x as k,
  z as s,
  B as u,
  H as Ne,
  C as c,
  L as w,
  n as Re,
  a1 as ne,
  y as g,
  D as E,
  A as V,
  J as je,
  K as se,
  Q as J,
  R as W,
  I as Pe,
} from "./CYsiv7Qj.js";
import { u as qe } from "./LKQL6vAN.js";
import { $ as X } from "./BvG7V8Ak.js";
import { V as G, a as Q } from "./B_W9U9Wp.js";
import { V as Le, a as N } from "./Bj0ZT2dB.js";
import { V as De } from "./ss-1h9Hv.js";
import { V as Ie } from "./Dlfzj7mx.js";
import { V as I } from "./DCAzZvgN.js";
import { V as ze, c as Ae, d as Fe } from "./sbneMOUU.js";
import { V as Be } from "./BqujDEEl.js";
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
const Me = { class: "pl-10 pr-10" },
  Ue = { class: "divcenterpage" },
  Ye = { style: { display: "inline", float: "right" } },
  Oe = { style: { "background-color": "#8fbaca" } },
  He = { style: { "background-color": "#8fbaca" } },
  Ke = ["onClick"],
  Je = { class: "cell-with-corner" },
  We = ["onClick"],
  Xe = ["innerHTML"],
  wt = {
    __name: "scadenziario",
    setup(Ge) {
      const z = Re(),
        re = Ee();
      Ve();
      const { status: Qe, signIn: Ze, signOut: et, data: tt } = Se(),
        A = i([]),
        ie = i(""),
        S = Ce("snackbar");
      i(!1), i(0);
      const R = i(null),
        j = i(null),
        C = i(new Date().getFullYear()),
        $ = i(new Date().getFullYear()),
        Z = D(() => {
          const l = new Date().getFullYear();
          return Array.from({ length: l + 2 - 2023 + 1 }, (e, t) => 2023 + t);
        }),
        F = i(null),
        P = i(!1),
        ue = i(new Date().getFullYear()),
        ce = i(String(new Date().getMonth() + 1).padStart(2, "0")),
        de = i(!1),
        pe = D(() => [
          { title: "Destinatario", key: "client_id" },
          { title: "Sponsor", key: "issponsor" },
          {
            title: "Codice Progetto",
            key: "code",
            sortable: !0,
            sortRaw: (l, e) => {
              const t = (r) => ({
                  anno: Number(r.code.slice(-4)),
                  numero: Number(r.code.slice(2, -4)),
                }),
                n = t(l),
                o = t(e);
              return n.anno === o.anno ? n.numero - o.numero : n.anno - o.anno;
            },
          },
          { title: "Progetto", key: "project_id" },
          ...m.value.map((l) => ({ title: l.title, key: l.key, align: "end" })),
        ]),
        _ = i(null),
        ee = i(null),
        te = i(null);
      let f = null;
      const B = D(() => {
        const l = {};
        return (
          m.value.forEach((e) => {
            l[e.key] = 0;
          }),
          q.value.forEach((e) => {
            m.value.forEach((t) => {
              l[t.key] += Number(e[t.key] || 0);
            });
          }),
          l
        );
      });
      function me(l, e) {
        const t = new Date(),
          n = t.getFullYear(),
          o = t.getMonth() + 1,
          r =
            Number(e.key.substr(0, 4)) < n ||
            (Number(e.key.substr(0, 4)) === n &&
              Number(e.key.substr(5, 2)) < o);
        return l[e.key + "_colore"] == "#62be62"
          ? { color: "#62be62" }
          : r && l[e.key + "_colore"] == "#eb7c2a"
            ? { color: "#eb7c2a" }
            : r && l[e.key + "_colore"] == "#ea261a"
              ? { color: "#ea261a" }
              : { color: "#000000" };
      }
      const q = D(() => {
          const l = {};
          return (
            A.value.forEach((e) => {
              const t = `${e.client_id}_${e.project_id}`;
              l[t] ||
                (l[t] = {
                  client_id: H.value[e.client_id],
                  issponsor: e.issponsor,
                  pid: e.project_id,
                  code: Y.value[e.project_id] || "",
                  project_id: U.value[e.project_id],
                });
              const n = `${e.anno}-${String(e.mese).padStart(2, "0")}`;
              (l[t][n] = e.totale),
                (l[t][n + "_colore"] = e.colore),
                (l[t][n + "_note"] = e.note);
            }),
            Object.values(l)
          );
        }),
        M = i([]),
        oe = i([]),
        U = i([]),
        Y = i([]),
        O = i([]),
        H = i([]);
      qe({
        title: "Scadenziario Attivo",
        meta: [{ name: "description", content: "Scadenziario Attivo" }],
      });
      const ve = (l) => {
          if (!l) return;
          const e = re.resolve({ path: "/tasks/", query: { id: l } });
          window.open(e.href, "_blank");
        },
        fe = (l) =>
          new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(l || 0);
      function ye() {
        const l = [
            "Destinatario",
            "Sponsor",
            "Codice Progetto",
            "Progetto",
            ...m.value.map((a) => a.title),
          ],
          e = [],
          t = {};
        q.value.forEach((a, p) => {
          const d = {};
          (d.Destinatario = a.client_id || ""),
            (d.Sponsor = a.issponsor || ""),
            (d["Codice Progetto"] = a.code || ""),
            (d.Progetto = a.project_id || ""),
            m.value.forEach((y, T) => {
              d[y.title] = a[y.key] || "";
              const x = `${y.key}_note`;
              if (a[x]) {
                const L = a[x].match(/\| Tipo:\s*([\s\S]*)$/);
                a[x] = L ? "Tipo:" + L[1].trim() : "";
                const h = p + 1,
                  we = T + 4;
                t[`${h}-${we}`] = a[x];
              }
            }),
            e.push(d);
        });
        const n = {
          Destinatario: "Totali",
          Sponsor: "",
          "Codice Progetto": "",
          Progetto: "",
        };
        m.value.forEach((a) => {
          n[a.title] = B.value[a.key] || 0;
        }),
          e.push(n);
        const o = v.utils.json_to_sheet(e, { header: l });
        o["!cols"] = [
          { wch: 40 },
          { wch: 20 },
          { wch: 20 },
          { wch: 40 },
          ...m.value.map(() => ({ wch: 15 })),
        ];
        const r = v.utils.decode_range(o["!ref"]);
        for (let a = r.s.c; a <= r.e.c; a++) {
          const p = v.utils.encode_cell({ r: 0, c: a });
          o[p] && (o[p].s = { font: { bold: !0 } });
        }
        const b = e.length;
        for (let a = r.s.c; a <= r.e.c; a++) {
          const p = v.utils.encode_cell({ r: b, c: a });
          o[p] && (o[p].s = { font: { bold: !0 } });
        }
        for (let a = 1; a <= e.length; a++)
          for (let p = 2; p <= r.e.c; p++) {
            const d = v.utils.encode_cell({ r: a, c: p });
            o[d] &&
              typeof o[d].v == "number" &&
              ((o[d].t = "n"), (o[d].z = "€ #,##0.00"));
          }
        q.value.forEach((a, p) => {
          m.value.forEach((d, y) => {
            const T = `${d.key}_colore`;
            if (a[T]) {
              const x = p + 1,
                L = y + 4,
                h = v.utils.encode_cell({ r: x, c: L });
              o[h] || (o[h] = { t: "n", v: a[d.key] || "" }),
                (o[h].s = {
                  ...(o[h].s || {}),
                  fill: {
                    patternType: "solid",
                    fgColor: {
                      rgb: a[T] == "#62be62" ? a[T].replace("#", "") : "EEEEEE",
                    },
                  },
                });
            }
          });
        }),
          Object.keys(t).forEach((a) => {
            const [p, d] = a.split("-").map(Number),
              y = v.utils.encode_cell({ r: p, c: d });
            o[y] || (o[y] = { t: "s", v: "" }),
              (o[y].c = [
                {
                  a: "Sistema",
                  t: t[a].replace(
                    /<hr.*?>/g,
                    `

`,
                  ),
                  hidden: !0,
                },
              ]);
          });
        const ae = v.utils.book_new();
        v.utils.book_append_sheet(ae, o, "Scadenziario"),
          v.writeFile(ae, "scadenziario.xlsx");
      }
      function ge(l) {
        (F.value = l), (P.value = !0);
      }
      function be() {
        (F.value = null), (P.value = !1);
      }
      const ke = ({ item: l }) =>
          l.payed == "P"
            ? { class: "row-ok-sc" }
            : l.payed == "N"
              ? { class: "row-grey-sc" }
              : {},
        le = async () => {
          const l = [],
            e = C.value - 1;
          l.push({ key: `${e}-12`, title: `12/${e}` });
          for (let o = C.value; o <= $.value; o++)
            for (let r = 1; r <= 12; r++)
              l.push({
                key: `${o}-${String(r).padStart(2, "0")}`,
                title: `${String(r).padStart(2, "0")}/${o}`,
              });
          const t = $.value + 1;
          l.push({ key: `${t}-01`, title: `01/${t}` }),
            (m.value = l),
            (A.value = []);
          let n = {
            client: R.value != null ? R.value : 0,
            project: j.value != null ? j.value : 0,
            anno_da: C.value,
            anno_a: $.value,
          };
          try {
            const { data: o, status: r } = await X(
              z.public.apiBaseurl + "invoice/scadenziario",
              { method: "POST", body: n },
            );
            o.forEach((b) => {
              b.sponsor_client_id
                ? ((b.client_id = b.sponsor_client_id), (b.issponsor = "SI"))
                : (b.issponsor = "NO"),
                A.value.push(b);
            });
          } catch (o) {
            console.log(o);
            let r = JSON.parse(o.data).errors.title;
            console.log("catcherr", o.data),
              (S.value = { text: r, type: "danger", show: !0 });
            return;
          }
          await ne(),
            (f = te.value.$el.querySelector(".v-table__wrapper")),
            (ee.value.style.width = f.scrollWidth + 630 + "px"),
            he(),
            _.value.addEventListener("scroll", () => {
              f.scrollLeft = _.value.scrollLeft;
            }),
            f.addEventListener("scroll", () => {
              _.value.scrollLeft = f.scrollLeft;
            });
        };
      function K() {
        de.value = window.innerWidth <= 960;
      }
      const _e = async () => {
          (M.value = []), (oe.value = []), (U.value = []), (Y.value = []);
          const { data: l } = await X(z.public.apiBaseurl + "project/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: n }) {
              console.log("Errore nella request:", n),
                (S.value = { text: "Errore: " + n, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: n }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (S.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: n }) {
              t._data.data.forEach((o) => {
                let r = o.contractname ? o.contractname : o.name;
                M.value.push({ label: "[" + o.code + "] " + r, value: o.id }),
                  (oe.value[o.id] = "[" + o.code + "] " + r),
                  (U.value[o.id] = r),
                  (Y.value[o.id] = o.code);
              });
            },
          });
        },
        xe = async () => {
          (O.value = []), (H.value = []);
          const { data: l } = await X(z.public.apiBaseurl + "client/list/", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: n }) {
              console.log("Errore nella request:", n),
                (S.value = { text: "Errore: " + n, type: "danger", show: !0 });
            },
            onResponseError({ request: e, response: t, options: n }) {
              console.log(
                "Errore nella response: " + t._data.error.messages[0],
              ),
                (S.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: e, response: t, options: n }) {
              t._data.data.forEach((o) => {
                O.value.push({ label: o.name, value: o.id }),
                  (H.value[o.id] = o.name);
              });
            },
          });
        };
      function he() {
        ne(() => {
          if (!f) return;
          const l = `${ue.value}-${ce.value}`,
            e = m.value.findIndex((r) => r.key === l);
          if (e === -1) return;
          const n = f.querySelector("table")?.querySelectorAll("thead th");
          if (!n || !n[e + 4]) return;
          const o = n[e + 4];
          (f.scrollLeft = o.offsetLeft - 600),
            _.value && (_.value.scrollLeft = f.scrollLeft);
        });
      }
      const m = i([]);
      return (
        $e(async () => {
          K(),
            window.addEventListener("resize", K),
            await _e(),
            await xe(),
            await le();
        }),
        Te(() => {
          window.removeEventListener("resize", K);
        }),
        (l, e) => (
          g(),
          k("div", Me, [
            s("div", Ue, [
              e[20] || (e[20] = s("br", null, null, -1)),
              e[21] ||
                (e[21] = s(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Scadenziario Attivo",
                  -1,
                )),
              s("div", Ye, [
                u(
                  G,
                  { color: "primary", onClick: ye },
                  {
                    default: c(() => [
                      u(
                        Q,
                        { class: "mr-3" },
                        {
                          default: c(() => [
                            ...(e[7] || (e[7] = [E("mdi-export", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      e[8] || (e[8] = E(" XLS", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              e[22] ||
                (e[22] = Ne(
                  '<div style="display:inline;float:right;margin-right:15px;"><div class="d-flex flex-wrap ga-4 align-center"><div class="d-flex align-center"><div class="legend-box bg-green"></div><span class="ml-2">Tranche con fattura emessa</span></div><div class="d-flex align-center"><div class="legend-box bg-black"></div><span class="ml-2">Tranche con fattura non emessa</span></div></div></div><div style="clear:both;"></div>',
                  2,
                )),
              u(
                Le,
                { "no-gutters": "" },
                {
                  default: c(() => [
                    u(
                      N,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: c(() => [
                          u(
                            I,
                            {
                              class: "ma-2",
                              density: "compact",
                              modelValue: R.value,
                              "onUpdate:modelValue":
                                e[0] || (e[0] = (t) => (R.value = t)),
                              items: O.value,
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
                            I,
                            {
                              class: "ma-2",
                              density: "compact",
                              autocomplete: "off",
                              "no-data-text": "Nessun risultato trovato",
                              modelValue: j.value,
                              "onUpdate:modelValue":
                                e[1] || (e[1] = (t) => (j.value = t)),
                              items: M.value,
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
                            I,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: C.value,
                              "onUpdate:modelValue":
                                e[2] || (e[2] = (t) => (C.value = t)),
                              items: w(Z),
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
                            I,
                            {
                              autocomplete: "off",
                              class: "ma-2 mr-4",
                              style: { width: "90%" },
                              density: "compact",
                              modelValue: $.value,
                              "onUpdate:modelValue":
                                e[3] || (e[3] = (t) => ($.value = t)),
                              items: w(Z),
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
                            G,
                            {
                              class: "ma-2",
                              onClick: e[4] || (e[4] = (t) => le()),
                            },
                            {
                              default: c(() => [
                                u(Q, null, {
                                  default: c(() => [
                                    ...(e[9] ||
                                      (e[9] = [E("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                e[10] || (e[10] = E("Cerca", -1)),
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
                "div",
                { ref_key: "topScroll", ref: _, class: "top-scroll" },
                [
                  s(
                    "div",
                    {
                      ref_key: "topScrollContent",
                      ref: ee,
                      class: "top-scroll-content",
                    },
                    null,
                    512,
                  ),
                ],
                512,
              ),
              u(
                De,
                {
                  ref_key: "dataTable",
                  ref: te,
                  density: "comfortable",
                  class: "excel-table scad",
                  items: w(q),
                  headers: w(pe),
                  search: ie.value,
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
                  "row-props": ke,
                  "sort-by": [{ key: "client_id", order: "asc" }],
                },
                {
                  tfoot: c(() => [
                    s("tr", Oe, [
                      e[11] ||
                        (e[11] = s(
                          "td",
                          null,
                          [s("strong", null, "Totali")],
                          -1,
                        )),
                      e[12] || (e[12] = s("td", null, null, -1)),
                      e[13] || (e[13] = s("td", null, null, -1)),
                      e[14] || (e[14] = s("td", null, null, -1)),
                      (g(!0),
                      k(
                        J,
                        null,
                        W(
                          m.value,
                          (t) => (
                            g(),
                            k("td", { key: t.key, class: "text-end" }, [
                              s(
                                "b",
                                null,
                                V(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(w(B)[t.key] || 0),
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
                    s("tr", He, [
                      e[15] ||
                        (e[15] = s(
                          "td",
                          null,
                          [s("strong", null, "Totali")],
                          -1,
                        )),
                      e[16] || (e[16] = s("td", null, null, -1)),
                      e[17] || (e[17] = s("td", null, null, -1)),
                      e[18] || (e[18] = s("td", null, null, -1)),
                      (g(!0),
                      k(
                        J,
                        null,
                        W(
                          m.value,
                          (t) => (
                            g(),
                            k("td", { key: t.key, class: "text-end" }, [
                              s(
                                "b",
                                null,
                                V(
                                  new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "EUR",
                                  }).format(w(B)[t.key] || 0),
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
                  item: c(({ item: t, columns: n }) => [
                    s("tr", null, [
                      s("td", null, V(t.client_id), 1),
                      s("td", null, [
                        t.issponsor === "SI"
                          ? (g(),
                            je(
                              Q,
                              { key: 0 },
                              {
                                default: c(() => [
                                  ...(e[19] || (e[19] = [E("mdi-check", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : se("", !0),
                      ]),
                      s("td", null, [
                        s(
                          "span",
                          {
                            style: { cursor: "pointer" },
                            onClick: (o) => ve(t.pid),
                          },
                          V(t.code),
                          9,
                          Ke,
                        ),
                      ]),
                      s("td", null, V(t.project_id), 1),
                      (g(!0),
                      k(
                        J,
                        null,
                        W(
                          n.slice(4),
                          (o) => (
                            g(),
                            k("td", { key: o.key, class: "text-end" }, [
                              s("div", Je, [
                                s(
                                  "span",
                                  { style: Pe(me(t, o)) },
                                  V(t[o.key] ? fe(t[o.key]) : ""),
                                  5,
                                ),
                                t[o.key + "_note"]
                                  ? (g(),
                                    k(
                                      "span",
                                      {
                                        key: 0,
                                        onClick: (r) => ge(t[o.key + "_note"]),
                                        class: "corner-flag",
                                      },
                                      null,
                                      8,
                                      We,
                                    ))
                                  : se("", !0),
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
              Ie,
              {
                modelValue: P.value,
                "onUpdate:modelValue": e[6] || (e[6] = (t) => (P.value = t)),
                "max-width": "800",
                persistent: "",
              },
              {
                default: c(() => [
                  u(
                    ze,
                    { class: "pa-2" },
                    {
                      default: c(() => [
                        u(Ae, null, {
                          default: c(() => [
                            s("div", { innerHTML: F.value }, null, 8, Xe),
                          ]),
                          _: 1,
                        }),
                        u(Fe, null, {
                          default: c(() => [
                            u(Be),
                            u(
                              G,
                              {
                                color: "#A5161E",
                                onClick: e[5] || (e[5] = (t) => be()),
                              },
                              {
                                default: c(() => [
                                  ...(e[23] || (e[23] = [E("Chiudi", -1)])),
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
export { wt as default };
