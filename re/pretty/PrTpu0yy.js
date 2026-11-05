import {
  u as Mt,
  F as zt,
  E as Gt,
  r as d,
  G as Ut,
  k as u,
  o as $t,
  e as jt,
  x as _,
  K as T,
  a2 as qt,
  z as t,
  B as s,
  C as o,
  a4 as Ht,
  n as Kt,
  y,
  L as a,
  D as b,
  A as l,
} from "./CYsiv7Qj.js";
import { x as D } from "./D16A7lth.js";
import { u as Yt } from "./LKQL6vAN.js";
import { $ as Wt } from "./BvG7V8Ak.js";
import { V as ct, a as w } from "./Bj0ZT2dB.js";
import { V as I, a as Xt, c as Jt } from "./sbneMOUU.js";
import { V as Zt, a as vt, b as ft, c as pt } from "./BDyySH-u.js";
import { V as Qt } from "./DCAzZvgN.js";
import { V as te, a as X, b as ee } from "./B_W9U9Wp.js";
import { V as mt } from "./Cv1q1CuH.js";
import { V as gt } from "./ss-1h9Hv.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BrCrqdgZ.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const oe = { class: "pl-10 pr-10" },
  le = { key: 0, class: "divcenterpage" },
  se = { style: { display: "inline", float: "left" } },
  ae = { style: { display: "inline", float: "left" } },
  ne = { class: "text-h6 font-weight-bold" },
  ie = { class: "text-h6 font-weight-bold" },
  re = { class: "text-h6 font-weight-bold" },
  ue = { class: "text-h6 font-weight-bold" },
  de = { style: { float: "right" } },
  ce = { class: "d-flex align-center justify-space-between w-100 pr-2" },
  ve = { class: "d-flex align-center" },
  fe = { class: "d-flex align-center ga-6" },
  pe = { class: "text-right" },
  me = { class: "text-body-2 font-weight-bold" },
  ge = { class: "text-right" },
  be = { class: "text-body-2 font-weight-bold" },
  _e = { key: 0 },
  ye = { class: "riga-totali" },
  xe = { key: 0 },
  he = { class: "riga-totali" },
  Te = { key: 0 },
  we = { class: "d-flex align-center justify-space-between w-100 pr-2" },
  Ie = { class: "d-flex align-center" },
  Ve = { class: "d-flex align-center ga-6" },
  Ce = { class: "text-right" },
  Ee = { class: "text-body-2 font-weight-bold" },
  Oe = { class: "text-right" },
  ke = { class: "text-body-2 font-weight-bold" },
  Ae = { key: 0 },
  Se = { class: "riga-totali" },
  Fe = { key: 0 },
  Ne = { class: "d-flex align-center justify-space-between w-100 pr-2" },
  Le = { class: "d-flex align-center" },
  Pe = { class: "d-flex align-center ga-6" },
  Re = { class: "text-right" },
  Be = { class: "text-body-2 font-weight-bold" },
  De = { class: "text-right" },
  Me = { class: "text-body-2 font-weight-bold" },
  ze = { key: 0 },
  Ge = { class: "riga-totali" },
  Ue = { key: 0 },
  $e = { class: "text-h6 font-weight-bold" },
  je = { class: "text-h6 font-weight-bold" },
  qe = { class: "text-h6 font-weight-bold" },
  He = { style: { "text-align": "center" }, class: "mt-8" },
  yo = {
    __name: "budget",
    setup(Ke) {
      const Vt = Kt();
      Mt(), zt();
      const { status: Ye, signIn: We, signOut: Xe, data: Je } = Gt(),
        Ct = d([]),
        Et = Ut("snackbar"),
        Ot = d(!1),
        J = d([
          { title: "Voce", key: "nome", sortable: !0 },
          { title: "Valore Budget", key: "costo", sortable: !0 },
          { title: "Valore Attuale", key: "costo_effettivo", sortable: !0 },
          { title: "MOL", key: "mol", sortable: !0 },
          { title: "%", key: "percent", sortable: !0 },
        ]),
        Z = d(null);
      d([
        { label: "Tutti", value: 0 },
        { label: "Aperti", value: 1 },
        { label: "Chiusi", value: 2 },
      ]);
      const bt = d(["V", "F", "P"]),
        A = d([]),
        S = d([]),
        F = d([]);
      d(
        localStorage.getItem("hgfiltrokpiopen") != "null" &&
          localStorage.getItem("hgfiltrokpiopen") != null
          ? parseInt(localStorage.getItem("hgfiltrokpiopen"))
          : 1,
      );
      const N = d(parseInt(new Date().getFullYear())),
        kt = u(() => {
          const r = new Date().getFullYear();
          return Array.from({ length: r + 1 - 2023 + 1 }, (e, n) => 2023 + n);
        }),
        V = d(0),
        O = d(0),
        M = d(0),
        At = d(0);
      d([]), d([]), d([]), d([]);
      const z = d(!0);
      Yt({
        title: "Budget",
        meta: [{ name: "description", content: "Budget" }],
      });
      const i = (r) =>
          new Intl.NumberFormat("it-IT", {
            style: "currency",
            useGrouping: !0,
            currency: "EUR",
          }).format(Number(r)),
        p = (r) =>
          new Intl.NumberFormat("it-IT", { useGrouping: !0 }).format(r);
      function G(r) {
        return Number(r.costo) - Number(r.costo_effettivo);
      }
      function Q(r) {
        const e = Number(r.costo);
        return e !== 0 ? (G(r) / e) * 100 : null;
      }
      const x = u(() => A.value.reduce((r, e) => r + Number(e.costo), 0)),
        U = u(() => A.value.reduce((r, e) => r + Number(e.costo_effettivo), 0)),
        $ = u(() => x.value - U.value),
        h = u(() => (x.value !== 0 ? ($.value / x.value) * 100 : null)),
        C = u(() => S.value.reduce((r, e) => r + Number(e.costo), 0)),
        tt = u(() =>
          S.value.reduce((r, e) => r + Number(e.costo_effettivo), 0),
        ),
        j = u(() => C.value - tt.value),
        L = u(() => (C.value !== 0 ? (j.value / C.value) * 100 : null)),
        E = u(() => F.value.reduce((r, e) => r + Number(e.costo), 0)),
        et = u(() =>
          F.value.reduce((r, e) => r + Number(e.costo_effettivo), 0),
        ),
        q = u(() => E.value - et.value),
        P = u(() => (E.value !== 0 ? (q.value / E.value) * 100 : null)),
        R = u(() => V.value - O.value - At.value),
        _t = u(() => (V.value !== 0 ? (R.value / V.value) * 100 : 0)),
        k = u(() => O.value + x.value),
        ot = u(() => M.value + U.value),
        lt = u(() => k.value - ot.value),
        st = u(() => (k.value !== 0 ? (lt.value / k.value) * 100 : null)),
        at = u(() => E.value + C.value + x.value + O.value),
        H = u(() => V.value - at.value),
        yt = u(() => (H.value !== 0 ? R.value / H.value : 0));
      function St() {
        const r = [],
          e = [],
          n = { font: { bold: !0, sz: 14 } },
          Ft = {
            font: { bold: !0, sz: 12, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "00506E" } },
          },
          Nt = { font: { bold: !0 }, fill: { fgColor: { rgb: "F5F5F5" } } },
          Lt = { font: { bold: !0 }, fill: { fgColor: { rgb: "ECEFF1" } } },
          Pt = { font: { bold: !0 } },
          c = (m) => r.push(m),
          Rt = () => r.length;
        c([`Budget ${N.value}`]),
          c([]),
          c(["Ricavi presunti", V.value]),
          c(["Costi passanti presunti", O.value]),
          c(["Costi passanti effettivi", M.value]),
          c(["MDC netto", R.value]),
          c(["MDC %", _t.value / 100]),
          c([]);
        const it = (m, K, rt, ut, dt, B, Y = !1) => {
          const v = Rt();
          return (
            c([m]),
            e.push({ s: { r: v, c: 0 }, e: { r: v, c: 4 } }),
            c(["Voce", "Valore Budget", "Valore Attuale", "MOL", "%"]),
            K.forEach((g) => {
              const W = Number(g.costo),
                Tt = Number(g.costo_effettivo),
                wt = W - Tt,
                It = W !== 0 ? (wt / W) * 100 : null;
              c([g.nome, W, Tt, wt, It !== null ? It / 100 : ""]);
            }),
            c([
              `TOTALE ${m.toUpperCase()}`,
              rt,
              ut,
              dt,
              B !== null ? B / 100 : "",
            ]),
            Y &&
              c([
                "TOTALE COSTI VARIABILI",
                k.value,
                ot.value,
                lt.value,
                st.value !== null ? st.value / 100 : "",
              ]),
            c([]),
            { titleRowIdx: v }
          );
        };
        it(
          "Costi Variabili di Gestione",
          A.value,
          x.value,
          U.value,
          $.value,
          h.value,
          !0,
        ),
          it("Costi Personale", S.value, C.value, tt.value, j.value, L.value),
          it("Costi Fissi", F.value, E.value, et.value, q.value, P.value),
          c(["Totale Costi Variabili e Fissi", at.value]),
          c(["Reddito Operativo", H.value]),
          c(["MDC Netto", R.value]),
          c(["Leva Operativa", yt.value]);
        const f = D.utils.aoa_to_sheet(r);
        (f["!merges"] = e),
          (f["!cols"] = [
            { wch: 40 },
            { wch: 18 },
            { wch: 18 },
            { wch: 18 },
            { wch: 12 },
          ]),
          f.A1 && (f.A1.s = n);
        const Bt = {
            "Ricavi presunti": "currency",
            "Costi passanti presunti": "currency",
            "Costi passanti effettivi": "currency",
            "MDC netto": "currency",
            "MDC %": "percent",
            "Totale Costi Variabili e Fissi": "currency",
            "Reddito Operativo": "currency",
            "MDC Netto": "currency",
            "Leva Operativa": "number",
          },
          Dt = { currency: "#,##0.00 €", percent: "0.0%", number: "0.00" };
        r.forEach((m, K) => {
          const rt = e.some((v) => v.s.r === K),
            ut = m[0] === "Voce",
            dt = typeof m[0] == "string" && m[0].startsWith("TOTALE"),
            B = Bt[m[0]],
            Y = B !== void 0;
          for (let v = 0; v < 5; v++) {
            const g = D.utils.encode_cell({ r: K, c: v });
            f[g] &&
              (rt
                ? (f[g].s = Ft)
                : ut
                  ? (f[g].s = Nt)
                  : dt
                    ? (f[g].s = Lt)
                    : Y && v === 0 && (f[g].s = Pt),
              v >= 1 &&
                v <= 3 &&
                typeof m[v] == "number" &&
                (f[g].z = "#,##0.00 €"),
              v === 4 && typeof m[v] == "number" && (f[g].z = "0.0%"),
              Y && v === 1 && typeof m[1] == "number" && (f[g].z = Dt[B]));
          }
        });
        const ht = D.utils.book_new();
        D.utils.book_append_sheet(ht, f, "Budget"),
          D.writeFile(ht, `budget_${N.value}.xlsx`);
      }
      const xt = async () => {
        (z.value = !0), (Ct.value = []);
        let r = { year: N.value };
        try {
          const { data: e, status: n } = await Wt(
            Vt.public.apiBaseurl + "invoice/budget",
            { method: "POST", body: r },
          );
          (A.value = e.V),
            (F.value = e.F),
            (S.value = e.P),
            (V.value =
              e.fatturato_acquisito != null
                ? parseFloat(e.fatturato_acquisito)
                : 0),
            (O.value =
              e.totalecostopreventivato != null
                ? parseFloat(e.totalecostopreventivato)
                : 0),
            (M.value =
              e.totalecostoeffettivo != null
                ? parseFloat(e.totalecostoeffettivo)
                : 0);
        } catch (e) {
          console.log(e);
          let n = JSON.parse(e.data).errors.title;
          console.log("catcherr", e.data),
            (Et.value = { text: n, type: "danger", show: !0 });
          return;
        }
        z.value = !1;
      };
      function nt() {
        Ot.value = window.innerWidth <= 960;
      }
      return (
        $t(async () => {
          nt(), window.addEventListener("resize", nt), await xt();
        }),
        jt(() => {
          window.removeEventListener("resize", nt);
        }),
        (r, e) => (
          y(),
          _("div", oe, [
            z.value
              ? T("", !0)
              : (y(),
                _("div", le, [
                  e[29] || (e[29] = t("br", null, null, -1)),
                  e[30] ||
                    (e[30] = t("h3", { class: "pb-4 pageh3" }, "Budget", -1)),
                  s(
                    ct,
                    { "no-gutters": "" },
                    {
                      default: o(() => [
                        s(
                          w,
                          { cols: "12", sm: "12", md: "12" },
                          {
                            default: o(() => [
                              t("div", se, [
                                s(
                                  Qt,
                                  {
                                    autocomplete: "off",
                                    class: "ma-2 mt-2 mr-4",
                                    density: "compact",
                                    modelValue: N.value,
                                    "onUpdate:modelValue": [
                                      e[0] || (e[0] = (n) => (N.value = n)),
                                      e[1] || (e[1] = (n) => xt()),
                                    ],
                                    "no-data-text": "Nessun risultato trovato",
                                    items: a(kt),
                                    style: { width: "300px" },
                                    label: "Anno",
                                    variant: "outlined",
                                    "hide-details": "",
                                  },
                                  null,
                                  8,
                                  ["modelValue", "items"],
                                ),
                              ]),
                              t("div", ae, [
                                s(
                                  te,
                                  {
                                    class: "ma-2",
                                    color: "primary",
                                    onClick: St,
                                  },
                                  {
                                    default: o(() => [
                                      s(
                                        X,
                                        { class: "mr-3" },
                                        {
                                          default: o(() => [
                                            ...(e[3] ||
                                              (e[3] = [b("mdi-export", -1)])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      e[4] || (e[4] = b(" XLS", -1)),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    I,
                    { class: "mt-4" },
                    {
                      default: o(() => [
                        s(
                          Xt,
                          {
                            style: {
                              "font-size": "14px",
                              "font-weight": "bold",
                            },
                          },
                          {
                            default: o(() => [
                              ...(e[5] ||
                                (e[5] = [
                                  b("TOTALE COSTI VARIABILI DI PRODUZIONE", -1),
                                ])),
                            ]),
                            _: 1,
                          },
                        ),
                        s(Jt, null, {
                          default: o(() => [
                            s(
                              ct,
                              { class: "mb-4", dense: "" },
                              {
                                default: o(() => [
                                  s(
                                    w,
                                    { cols: "12", md: "3" },
                                    {
                                      default: o(() => [
                                        s(
                                          I,
                                          {
                                            variant: "tonal",
                                            color: "green",
                                            class: "pa-3",
                                          },
                                          {
                                            default: o(() => [
                                              e[6] ||
                                                (e[6] = t(
                                                  "div",
                                                  {
                                                    class:
                                                      "text-caption font-weight-bold",
                                                  },
                                                  "RICAVI PRESUNTI",
                                                  -1,
                                                )),
                                              t("div", ne, l(i(V.value)), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  s(
                                    w,
                                    { cols: "12", md: "3" },
                                    {
                                      default: o(() => [
                                        s(
                                          I,
                                          {
                                            variant: "tonal",
                                            color: "blue",
                                            class: "pa-3",
                                          },
                                          {
                                            default: o(() => [
                                              e[7] ||
                                                (e[7] = t(
                                                  "div",
                                                  {
                                                    class:
                                                      "text-caption font-weight-bold",
                                                  },
                                                  "COSTI PASSANTI PRESUNTI",
                                                  -1,
                                                )),
                                              t("div", ie, l(i(O.value)), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  s(
                                    w,
                                    { cols: "12", md: "3" },
                                    {
                                      default: o(() => [
                                        s(
                                          I,
                                          {
                                            variant: "tonal",
                                            color: "orange",
                                            class: "pa-3",
                                          },
                                          {
                                            default: o(() => [
                                              e[8] ||
                                                (e[8] = t(
                                                  "div",
                                                  {
                                                    class:
                                                      "text-caption font-weight-bold",
                                                  },
                                                  "COSTI PASSANTI EFFETTIVI",
                                                  -1,
                                                )),
                                              t("div", re, l(i(M.value)), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  s(
                                    w,
                                    { cols: "12", md: "3" },
                                    {
                                      default: o(() => [
                                        s(
                                          I,
                                          {
                                            variant: "tonal",
                                            color: "darkgrey",
                                            class: "pa-3",
                                          },
                                          {
                                            default: o(() => [
                                              e[9] ||
                                                (e[9] = t(
                                                  "div",
                                                  {
                                                    class:
                                                      "text-caption font-weight-bold",
                                                  },
                                                  "MDC NETTO",
                                                  -1,
                                                )),
                                              t("div", ue, [
                                                b(l(i(a(R))) + " ", 1),
                                                t(
                                                  "div",
                                                  de,
                                                  l(p(a(_t))) + "%",
                                                  1,
                                                ),
                                              ]),
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
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                  ),
                  s(
                    Zt,
                    {
                      modelValue: bt.value,
                      "onUpdate:modelValue":
                        e[2] || (e[2] = (n) => (bt.value = n)),
                      multiple: "",
                      rounded: "0",
                      class: "no-radius mt-4 mb-4",
                    },
                    {
                      default: o(() => [
                        s(
                          vt,
                          { value: "V", rounded: "0", class: "no-radius" },
                          {
                            default: o(() => [
                              s(ft, null, {
                                default: o(() => [
                                  t("div", ce, [
                                    t("div", ve, [
                                      s(
                                        X,
                                        { color: "#00506e", class: "mr-3" },
                                        {
                                          default: o(() => [
                                            ...(e[10] ||
                                              (e[10] = [
                                                b("mdi-cog-outline", -1),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      e[11] ||
                                        (e[11] = t(
                                          "span",
                                          {
                                            class:
                                              "text-subtitle-1 font-weight-bold",
                                          },
                                          "COSTI VARIABILI DI GESTIONE",
                                          -1,
                                        )),
                                    ]),
                                    t("div", fe, [
                                      t("div", pe, [
                                        e[12] ||
                                          (e[12] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "BUDGET",
                                            -1,
                                          )),
                                        t("div", me, l(i(a(x))), 1),
                                      ]),
                                      t("div", ge, [
                                        e[13] ||
                                          (e[13] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "MOL",
                                            -1,
                                          )),
                                        t("div", be, l(i(a($))), 1),
                                      ]),
                                      s(
                                        mt,
                                        {
                                          label: "",
                                          color:
                                            a(h) >= 90
                                              ? "success"
                                              : a(h) >= 70
                                                ? "warning"
                                                : "error",
                                          size: "small",
                                          variant: "flat",
                                          class: "font-weight-bold",
                                        },
                                        {
                                          default: o(() => [
                                            b(l(p(a(h))) + "% ", 1),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["color"],
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _: 1,
                              }),
                              s(pt, null, {
                                default: o(() => [
                                  s(
                                    gt,
                                    {
                                      headers: J.value,
                                      items: A.value,
                                      "item-value": "id",
                                      ref_key: "dataTable",
                                      ref: Z,
                                      density: "comfortable",
                                      class: "excel-table kpitab",
                                      style: {
                                        "overflow-x": "auto",
                                        display: "block",
                                      },
                                      "items-per-page": -1,
                                      "hide-default-footer": "",
                                      "sort-by": [
                                        { key: "nome", order: "asc" },
                                      ],
                                    },
                                    {
                                      "item.costo": o(({ item: n }) => [
                                        t("span", null, l(i(n.costo)), 1),
                                      ]),
                                      "item.costo_effettivo": o(
                                        ({ item: n }) => [
                                          t(
                                            "span",
                                            null,
                                            l(i(n.costo_effettivo)),
                                            1,
                                          ),
                                        ],
                                      ),
                                      "item.mol": o(({ item: n }) => [
                                        t("span", null, l(i(G(n))), 1),
                                      ]),
                                      "item.percent": o(({ item: n }) => [
                                        n.costo != 0
                                          ? (y(),
                                            _("span", _e, l(p(Q(n))) + "%", 1))
                                          : T("", !0),
                                      ]),
                                      "body.append": o(() => [
                                        t("tr", ye, [
                                          e[14] ||
                                            (e[14] = t(
                                              "td",
                                              null,
                                              [
                                                t(
                                                  "strong",
                                                  null,
                                                  "TOTALE COSTI VARIABILI DI GESTIONE",
                                                ),
                                              ],
                                              -1,
                                            )),
                                          t("td", null, [
                                            t("strong", null, l(i(a(x))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(U))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a($))), 1),
                                          ]),
                                          t("td", null, [
                                            a(h) !== null
                                              ? (y(),
                                                _(
                                                  "strong",
                                                  xe,
                                                  l(p(a(h))) + "%",
                                                  1,
                                                ))
                                              : T("", !0),
                                          ]),
                                        ]),
                                        t("tr", he, [
                                          e[15] ||
                                            (e[15] = t(
                                              "td",
                                              null,
                                              [
                                                t(
                                                  "strong",
                                                  null,
                                                  "TOTALE COSTI VARIABILI",
                                                ),
                                              ],
                                              -1,
                                            )),
                                          t("td", null, [
                                            t("strong", null, l(i(a(k))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(ot))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(lt))), 1),
                                          ]),
                                          t("td", null, [
                                            a(k) != 0
                                              ? (y(),
                                                _(
                                                  "strong",
                                                  Te,
                                                  l(p(a(st))) + "%",
                                                  1,
                                                ))
                                              : T("", !0),
                                          ]),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["headers", "items"],
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          vt,
                          { value: "P", rounded: "0", class: "no-radius" },
                          {
                            default: o(() => [
                              s(ft, null, {
                                default: o(() => [
                                  t("div", we, [
                                    t("div", Ie, [
                                      s(
                                        X,
                                        { color: "#00506e", class: "mr-3" },
                                        {
                                          default: o(() => [
                                            ...(e[16] ||
                                              (e[16] = [
                                                b(
                                                  "mdi-account-group-outline",
                                                  -1,
                                                ),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      e[17] ||
                                        (e[17] = t(
                                          "span",
                                          {
                                            class:
                                              "text-subtitle-1 font-weight-bold",
                                          },
                                          "COSTI DEL PERSONALE",
                                          -1,
                                        )),
                                    ]),
                                    t("div", Ve, [
                                      t("div", Ce, [
                                        e[18] ||
                                          (e[18] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "BUDGET",
                                            -1,
                                          )),
                                        t("div", Ee, l(i(a(C))), 1),
                                      ]),
                                      t("div", Oe, [
                                        e[19] ||
                                          (e[19] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "MOL",
                                            -1,
                                          )),
                                        t("div", ke, l(i(a(j))), 1),
                                      ]),
                                      s(
                                        mt,
                                        {
                                          label: "",
                                          color:
                                            a(L) >= 90
                                              ? "success"
                                              : a(L) >= 70
                                                ? "warning"
                                                : "error",
                                          size: "small",
                                          variant: "flat",
                                          class: "font-weight-bold",
                                        },
                                        {
                                          default: o(() => [
                                            b(l(p(a(L))) + "% ", 1),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["color"],
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _: 1,
                              }),
                              s(pt, null, {
                                default: o(() => [
                                  s(
                                    gt,
                                    {
                                      headers: J.value,
                                      items: S.value,
                                      "item-value": "id",
                                      ref_key: "dataTable",
                                      ref: Z,
                                      density: "comfortable",
                                      class: "excel-table kpitab",
                                      style: {
                                        "overflow-x": "auto",
                                        display: "block",
                                      },
                                      "items-per-page": -1,
                                      "hide-default-footer": "",
                                      "sort-by": [
                                        { key: "nome", order: "asc" },
                                      ],
                                    },
                                    {
                                      "item.costo": o(({ item: n }) => [
                                        t("span", null, l(i(n.costo)), 1),
                                      ]),
                                      "item.costo_effettivo": o(
                                        ({ item: n }) => [
                                          t(
                                            "span",
                                            null,
                                            l(i(n.costo_effettivo)),
                                            1,
                                          ),
                                        ],
                                      ),
                                      "item.mol": o(({ item: n }) => [
                                        t("span", null, l(i(G(n))), 1),
                                      ]),
                                      "item.percent": o(({ item: n }) => [
                                        n.costo != 0
                                          ? (y(),
                                            _("span", Ae, l(p(Q(n))) + "%", 1))
                                          : T("", !0),
                                      ]),
                                      "body.append": o(() => [
                                        t("tr", Se, [
                                          e[20] ||
                                            (e[20] = t(
                                              "td",
                                              null,
                                              [
                                                t(
                                                  "strong",
                                                  null,
                                                  "TOTALE COSTI PERSONALE",
                                                ),
                                              ],
                                              -1,
                                            )),
                                          t("td", null, [
                                            t("strong", null, l(i(a(C))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(tt))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(j))), 1),
                                          ]),
                                          t("td", null, [
                                            a(h) !== null
                                              ? (y(),
                                                _(
                                                  "strong",
                                                  Fe,
                                                  l(p(a(L))) + "%",
                                                  1,
                                                ))
                                              : T("", !0),
                                          ]),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["headers", "items"],
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          vt,
                          { value: "F", rounded: "0", class: "no-radius" },
                          {
                            default: o(() => [
                              s(ft, null, {
                                default: o(() => [
                                  t("div", Ne, [
                                    t("div", Le, [
                                      s(
                                        X,
                                        { color: "#00506e", class: "mr-3" },
                                        {
                                          default: o(() => [
                                            ...(e[21] ||
                                              (e[21] = [
                                                b(
                                                  "mdi-office-building-outline",
                                                  -1,
                                                ),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      e[22] ||
                                        (e[22] = t(
                                          "span",
                                          {
                                            class:
                                              "text-subtitle-1 font-weight-bold",
                                          },
                                          "COSTI FISSI",
                                          -1,
                                        )),
                                    ]),
                                    t("div", Pe, [
                                      t("div", Re, [
                                        e[23] ||
                                          (e[23] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "BUDGET",
                                            -1,
                                          )),
                                        t("div", Be, l(i(a(E))), 1),
                                      ]),
                                      t("div", De, [
                                        e[24] ||
                                          (e[24] = t(
                                            "div",
                                            {
                                              class:
                                                "text-caption text-medium-emphasis",
                                            },
                                            "MOL",
                                            -1,
                                          )),
                                        t("div", Me, l(i(a(q))), 1),
                                      ]),
                                      s(
                                        mt,
                                        {
                                          label: "",
                                          color:
                                            a(P) >= 90
                                              ? "success"
                                              : a(P) >= 70
                                                ? "warning"
                                                : "error",
                                          size: "small",
                                          variant: "flat",
                                          class: "font-weight-bold",
                                        },
                                        {
                                          default: o(() => [
                                            b(l(p(a(P))) + "% ", 1),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["color"],
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _: 1,
                              }),
                              s(pt, null, {
                                default: o(() => [
                                  s(
                                    gt,
                                    {
                                      headers: J.value,
                                      items: F.value,
                                      "item-value": "id",
                                      ref_key: "dataTable",
                                      ref: Z,
                                      density: "comfortable",
                                      class: "excel-table kpitab",
                                      style: {
                                        "overflow-x": "auto",
                                        display: "block",
                                      },
                                      "items-per-page": -1,
                                      "hide-default-footer": "",
                                      "sort-by": [
                                        { key: "nome", order: "asc" },
                                      ],
                                    },
                                    {
                                      "item.costo": o(({ item: n }) => [
                                        t("span", null, l(i(n.costo)), 1),
                                      ]),
                                      "item.costo_effettivo": o(
                                        ({ item: n }) => [
                                          t(
                                            "span",
                                            null,
                                            l(i(n.costo_effettivo)),
                                            1,
                                          ),
                                        ],
                                      ),
                                      "item.mol": o(({ item: n }) => [
                                        t("span", null, l(i(G(n))), 1),
                                      ]),
                                      "item.percent": o(({ item: n }) => [
                                        n.costo != 0
                                          ? (y(),
                                            _("span", ze, l(p(Q(n))) + "%", 1))
                                          : T("", !0),
                                      ]),
                                      "body.append": o(() => [
                                        t("tr", Ge, [
                                          e[25] ||
                                            (e[25] = t(
                                              "td",
                                              null,
                                              [
                                                t(
                                                  "strong",
                                                  null,
                                                  "TOTALE COSTI FISSI",
                                                ),
                                              ],
                                              -1,
                                            )),
                                          t("td", null, [
                                            t("strong", null, l(i(a(E))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(et))), 1),
                                          ]),
                                          t("td", null, [
                                            t("strong", null, l(i(a(q))), 1),
                                          ]),
                                          t("td", null, [
                                            a(h) !== null
                                              ? (y(),
                                                _(
                                                  "strong",
                                                  Ue,
                                                  l(p(a(P))) + "%",
                                                  1,
                                                ))
                                              : T("", !0),
                                          ]),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["headers", "items"],
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
                  s(
                    ct,
                    { dense: "", align: "center" },
                    {
                      default: o(() => [
                        s(
                          w,
                          { cols: "12", sm: "4" },
                          {
                            default: o(() => [
                              s(
                                I,
                                {
                                  variant: "tonal",
                                  color: "#00506e",
                                  class: "pa-3",
                                },
                                {
                                  default: o(() => [
                                    e[26] ||
                                      (e[26] = t(
                                        "div",
                                        {
                                          class:
                                            "text-caption font-weight-bold",
                                        },
                                        "TOTALE COSTI VARIABILI E FISSI",
                                        -1,
                                      )),
                                    t("div", $e, l(i(a(at))), 1),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          w,
                          { cols: "12", sm: "4" },
                          {
                            default: o(() => [
                              s(
                                I,
                                {
                                  variant: "tonal",
                                  color: "#00506e",
                                  class: "pa-3",
                                },
                                {
                                  default: o(() => [
                                    e[27] ||
                                      (e[27] = t(
                                        "div",
                                        {
                                          class:
                                            "text-caption font-weight-bold",
                                        },
                                        "REDDITO OPERATIVO",
                                        -1,
                                      )),
                                    t("div", je, l(i(a(H))), 1),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        s(
                          w,
                          { cols: "12", sm: "4" },
                          {
                            default: o(() => [
                              s(
                                I,
                                {
                                  variant: "tonal",
                                  color: "#00506e",
                                  class: "pa-3",
                                },
                                {
                                  default: o(() => [
                                    e[28] ||
                                      (e[28] = t(
                                        "div",
                                        {
                                          class:
                                            "text-caption font-weight-bold",
                                        },
                                        "LEVA OPERATIVA",
                                        -1,
                                      )),
                                    t("div", qe, l(p(a(yt))), 1),
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
                ])),
            qt(
              t(
                "div",
                He,
                [s(ee, { indeterminate: "", color: "#00506e", size: "180" })],
                512,
              ),
              [[Ht, z.value]],
            ),
          ])
        )
      );
    },
  };
export { yo as default };
