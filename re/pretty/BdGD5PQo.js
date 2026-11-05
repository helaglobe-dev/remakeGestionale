import { _ as Ce } from "./CW0mRKDF.js";
import { x as P } from "./lVf1Haco.js";
import { x as k } from "./D16A7lth.js";
import { s as U, e as F, a as Y, b as J, V as Se } from "./B_hTT4u_.js";
import {
  r as u,
  k as m,
  u as _e,
  E as Oe,
  G as Ve,
  o as ze,
  x as X,
  z as g,
  B as l,
  C as n,
  n as Ne,
  y as V,
  L,
  D as b,
  J as M,
  K,
  Q as Ee,
  R as Te,
  A as Q,
} from "./CYsiv7Qj.js";
import { u as Le } from "./LKQL6vAN.js";
import { $ as j } from "./BvG7V8Ak.js";
import { V as q, a as x } from "./Bj0ZT2dB.js";
import { V as je } from "./ss-1h9Hv.js";
import { V as Z } from "./DCAzZvgN.js";
import { V as W, a as Ae } from "./B_W9U9Wp.js";
import { V as ee, a as te, b as Re, c as ae } from "./sbneMOUU.js";
import { V as Ge } from "./Cv1q1CuH.js";
import { s as re, a as oe, e as le, b as ne } from "./B5S3s6V6.js";
import { e as ie } from "./DRW0ieNg.js";
import { i as Ie } from "./BIFx5Ami.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BrCrqdgZ.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./D3DeQzvF.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./fKsYyVgl.js";
const Me = { class: "pl-10 pr-10" },
  qe = { class: "divcenterpage" },
  We = { class: "dipendenti-toggle" },
  yt = {
    __name: "hours",
    setup(He) {
      const se = u([
          { label: "Oggi", value: [new Date(), new Date()] },
          {
            label: "Ieri",
            value: [
              new Date().setDate(new Date().getDate() - 1),
              new Date().setDate(new Date().getDate() - 1),
            ],
          },
          {
            label: "Settimana precendente",
            value: [
              U(Y(new Date(), 7), { weekStartsOn: 1 }),
              F(Y(new Date(), 7), { weekStartsOn: 1 }),
            ],
          },
          {
            label: "Settimana corrente",
            value: [
              U(new Date(), { weekStartsOn: 1 }),
              F(new Date(), { weekStartsOn: 1 }),
            ],
          },
          { label: "Mese corrente", value: [re(new Date()), ie(new Date())] },
          {
            label: "Mese precedente",
            value: [re(ne(new Date(), 1)), ie(ne(new Date(), 1))],
          },
          { label: "Anno corrente", value: [oe(new Date()), le(new Date())] },
          {
            label: "Anno precedente",
            value: [oe(J(new Date(), 1)), le(J(new Date(), 1))],
          },
        ]),
        D = u([]);
      m(() => D.value.map((e) => e.name));
      const H = m(() =>
        _.value ? E.value.filter((e) => e.project_id == _.value) : E.value,
      );
      m(() => [
        {
          name: "Giorni lavorativi",
          data: s.value.map((e) => Number(e.lavorativi)),
        },
        {
          name: "Giorni lavorati",
          data: s.value.map((e) => Number(e.lavorati)),
        },
        { name: "Ferie", data: s.value.map((e) => Number(e.ferie)) },
        {
          name: "Straordinari",
          data: s.value.map((e) => Number(e.straordinari)),
        },
        { name: "Mancanze", data: s.value.map((e) => Number(e.mancanze)) },
      ]),
        m(() => ({
          chart: {
            type: "bar",
            height: 500,
            toolbar: { show: !0 },
            events: {
              xAxisLabelClick: function (e, t, o) {
                const a = s.value[o.labelIndex];
                a && z(a.name);
              },
            },
          },
          plotOptions: {
            bar: {
              horizontal: !1,
              columnWidth: "35%",
              borderRadius: 0,
              dataLabels: { position: "top" },
            },
          },
          dataLabels: {
            enabled: !0,
            enabledOnSeries: [0, 1, 2, 3, 4],
            offsetY: -8,
            style: {
              fontSize: "10px",
              fontWeight: 600,
              colors: ["#64748b", "#2563eb", "#16a34a", "#d97706", "#7c3aed"],
            },
            background: {
              enabled: !0,
              foreColor: "#ffffff",
              borderRadius: 3,
              padding: 3,
              opacity: 0.95,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            },
            formatter: function (e) {
              return e > 0 ? e : "";
            },
          },
          xaxis: {
            categories: s.value.map((e) =>
              e.name
                .trim()
                .split(/\s+/)
                .map((t) => t[0].toUpperCase())
                .join(""),
            ),
            title: { text: "Dipendenti" },
          },
          yaxis: { title: { text: "Giorni" }, min: 0 },
          colors: [
            "#94a3b8",
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#8b5cf6",
            "#ef4444",
          ],
          legend: { position: "top" },
          tooltip: {
            x: {
              formatter: function (e, { dataPointIndex: t }) {
                return s.value[t]?.name ?? "";
              },
            },
            y: {
              formatter: function (e) {
                return e + " gg";
              },
            },
          },
          grid: { borderColor: "#e5e7eb" },
        })),
        m(() => [
          {
            name: "Giorni lavorativi",
            data: s.value.map((e) => Number(e.lavorativi)),
          },
          {
            name: "Giorni lavorati",
            data: s.value.map((e) => Number(e.lavorati)),
          },
          { name: "Ferie", data: s.value.map((e) => Number(e.ferie)) },
          {
            name: "Straordinari",
            data: s.value.map((e) => Number(e.straordinari)),
          },
          { name: "Mancanze", data: s.value.map((e) => Number(e.mancanze)) },
        ]);
      const ue = m(() => [
        {
          name: "Giorni lavorati",
          type: "column",
          data: s.value.map((e) => Number(e.lavorati)),
        },
        {
          name: "Ferie",
          type: "column",
          data: s.value.map((e) => Number(e.ferie)),
        },
        {
          name: "Straordinari",
          type: "column",
          data: s.value.map((e) => Number(e.straordinari)),
        },
        {
          name: "Mancanze",
          type: "column",
          data: s.value.map((e) => Number(e.mancanze)),
        },
        {
          name: "Giorni lavorativi",
          type: "line",
          data: s.value.map((e) => Number(e.lavorativi)),
        },
      ]);
      m(() => ({
        chart: {
          type: "line",
          height: 500,
          toolbar: { show: !0 },
          events: {
            xAxisLabelClick: function (e, t, o) {
              const a = s.value[o.labelIndex];
              a && z(a.name);
            },
          },
        },
        stroke: { curve: "straight", width: 3 },
        markers: {
          size: 7,
          strokeWidth: 2,
          strokeColors: "#fff",
          hover: { size: 10 },
        },
        xaxis: {
          categories: s.value.map((e) =>
            e.name
              .trim()
              .split(/\s+/)
              .map((t) => t[0].toUpperCase())
              .join(""),
          ),
          title: { text: "Dipendenti" },
        },
        yaxis: { min: 0, title: { text: "Giorni" } },
        colors: [
          "#94a3b8",
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
        ],
        dataLabels: {
          enabled: !0,
          offsetY: -8,
          style: {
            fontSize: "11px",
            fontWeight: 600,
            colors: [
              "#94a3b8",
              "#3b82f6",
              "#22c55e",
              "#f59e0b",
              "#8b5cf6",
              "#ef4444",
            ],
          },
          background: { enabled: !1 },
          formatter: function (e) {
            return e;
          },
        },
        legend: { position: "top" },
        tooltip: { y: { formatter: (e) => `${e} gg` } },
        grid: { borderColor: "#e5e7eb" },
      }));
      const de = m(() => ({
          chart: {
            type: "line",
            height: 500,
            stacked: !0,
            toolbar: { show: !0 },
            events: {
              xAxisLabelClick: function (e, t, o) {
                const a = s.value[o.labelIndex];
                a && z(a.name);
              },
            },
          },
          plotOptions: { bar: { columnWidth: "45%", borderRadius: 0 } },
          stroke: { width: [0, 0, 0, 0, 3], curve: "straight" },
          markers: {
            size: [0, 0, 0, 0, 6],
            strokeWidth: 2,
            strokeColors: "#fff",
          },
          xaxis: {
            categories: s.value.map((e) =>
              e.name
                .trim()
                .split(/\s+/)
                .map((t) => t[0].toUpperCase())
                .join(""),
            ),
            title: { text: "Dipendenti" },
          },
          yaxis: { title: { text: "Giorni" }, min: 0 },
          colors: ["#22c55e", "#f59e0b", "#8b5cf6", "#ef4444", "#1d4ed8"],
          dataLabels: {
            enabled: !0,
            enabledOnSeries: [0, 1, 2, 3],
            style: { fontSize: "10px", fontWeight: 600, colors: ["#1f2937"] },
            background: {
              enabled: !0,
              foreColor: "#ffffff",
              borderRadius: 2,
              padding: 2,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            },
            formatter: (e) => (e > 0 ? e : ""),
          },
          legend: { position: "top" },
          tooltip: {
            shared: !0,
            intersect: !1,
            y: { formatter: (e) => `${e} gg` },
          },
          grid: { borderColor: "#e5e7eb" },
        })),
        y = u(new Set());
      function z(e) {
        const t = new Set(y.value);
        t.has(e) ? t.delete(e) : t.add(e), (y.value = t);
      }
      function ce() {
        y.value = new Set();
      }
      const s = m(() => D.value.filter((e) => !y.value.has(e.name))),
        N = Ne();
      _e();
      const { status: Be, signIn: $e, signOut: Pe, data: Ue } = Oe(),
        C = Ve("snackbar"),
        S = u([]),
        B = u([]),
        A = u([]),
        E = u([]),
        v = u([
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            new Date().getDate(),
          ),
          new Date(),
        ]),
        h = u(null),
        _ = u(null),
        R = u([]),
        G = u([]),
        me = [
          { title: "Nome", key: "user", sortable: !0, align: "left" },
          { title: "Progetto", key: "project", sortable: !1, align: "left" },
          { title: "Task", key: "task_id", sortable: !0, align: "left" },
          { title: "Data/Ora", key: "date", sortable: !0, align: "left" },
          { title: "Durata", key: "duration", sortable: !0, align: "left" },
        ],
        pe = [
          { title: "Nome", key: "user", sortable: !0, align: "left" },
          { title: "Progetto", key: "project", sortable: !0, align: "left" },
          { title: "Task", key: "task_id", sortable: !0, align: "left" },
          { title: "Data/Ora", key: "date", sortable: !0, align: "left" },
          { title: "Durata", key: "duration", sortable: !0, align: "left" },
        ],
        T = u([]);
      function fe(e, t, o) {
        let a = e[o],
          i = t[o];
        return (
          o === "date" &&
            ((a = new Date(a).getTime()), (i = new Date(i).getTime())),
          typeof a == "number" && typeof i == "number"
            ? a - i
            : String(a ?? "").localeCompare(String(i ?? ""), "it", {
                numeric: !0,
                sensitivity: "base",
              })
        );
      }
      function ve() {
        const e = [...H.value];
        return T.value.length
          ? e.sort((t, o) => {
              for (const { key: a, order: i } of T.value) {
                const r = fe(t, o, a);
                if (r !== 0) return i === "desc" ? -r : r;
              }
              return 0;
            })
          : e;
      }
      const O = u({ categories: [], series: [] }),
        ge = (e) => {
          const t = {};
          e.forEach((c) => {
            const f = c.Hour.user_id,
              w = c.Hour.startdate.substring(0, 10),
              I = Number(c.Hour._ore || 0);
            t[w] || (t[w] = {}), t[w][f] || (t[w][f] = 0), (t[w][f] += I);
          });
          const o = [],
            a = new Date(v.value[0]),
            i = new Date(v.value[1]),
            r = new Date(a);
          for (; r <= i; ) {
            const c = r.toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            o.push(c), r.setDate(r.getDate() + 1);
          }
          const d = S.value
            .filter((c) => h.value?.includes(c.id))
            .map((c) => ({
              name: c.name,
              data: o.map((f) => t[f]?.[c.id] ?? 0),
            }));
          O.value = { categories: o, series: d };
        },
        be = m(
          () => Array.isArray(O.value.series) && O.value.series.length > 0,
        ),
        ye = m(() => ({
          chart: {
            type: "line",
            height: 450,
            toolbar: { show: !0 },
            zoom: { enabled: !0 },
          },
          stroke: { curve: "straight", width: 3 },
          markers: {
            size: 5,
            strokeWidth: 2,
            strokeColors: "#fff",
            hover: { size: 8 },
          },
          xaxis: {
            categories: O.value.categories,
            title: { text: "Giorno" },
            labels: {
              formatter: (e) =>
                new Date(e).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
            },
          },
          yaxis: {
            min: 0,
            max: 12,
            title: { text: "Ore" },
            labels: { formatter: (e) => `${e}h` },
          },
          annotations: {
            yaxis: [
              {
                y: 8,
                borderColor: "#6b7280",
                borderWidth: 5,
                strokeDashArray: 0,
                label: {
                  borderColor: "#6b7280",
                  style: {
                    color: "#fff",
                    background: "#6b7280",
                    fontSize: "12px",
                    fontWeight: 600,
                  },
                  text: "8h giornaliere",
                },
              },
            ],
          },
          dataLabels: { enabled: !1 },
          legend: { position: "top" },
          tooltip: {
            y: {
              formatter: (e) => {
                if (e === null) return "-";
                const t = Math.floor(e),
                  o = Math.round((e - t) * 60);
                return `${t}h ${o}m`;
              },
            },
          },
          grid: { borderColor: "#e5e7eb" },
        }));
      Le({
        title: "Imputazione Ore",
        meta: [{ name: "description", content: "Imputazione Ore" }],
      });
      const he = async () => {
          (R.value = []), (G.value = []);
          const { data: e } = await j(N.public.apiBaseurl + "project/list/", {
            onRequest({ request: t, options: o }) {},
            onRequestError({ request: t, options: o, error: a }) {
              console.log("Errore nella request:", a),
                (C.value = { text: "Errore: " + a, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: o, options: a }) {
              console.log(
                "Errore nella response: " + o._data.error.messages[0],
              ),
                (C.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: o, options: a }) {
              o._data.data.forEach((r) => {
                (r.title = "[" + r.code + "] - " + r.name),
                  R.value.push({ id: r.id, name: r.title }),
                  (G.value[r.id] = r.title);
              });
            },
          });
        },
        we = async () => {
          (S.value = []), (B.value = []), (A.value = []);
          const { data: e } = await j(N.public.apiBaseurl + "user/list", {
            onRequest({ request: t, options: o }) {},
            onRequestError({ request: t, options: o, error: a }) {
              console.log("Errore nella request:", a);
            },
            onResponseError({ request: t, response: o, options: a }) {
              C.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: o, options: a }) {
              o._data.data.forEach((r) => {
                r.activeuser == 1 &&
                  S.value.push({
                    id: r.id,
                    name: r.firstname + " " + r.lastname,
                  }),
                  (B.value[r.id] = r.acronym),
                  (A.value[r.id] = r.firstname + " " + r.lastname);
              });
            },
          });
        },
        xe = async () => {
          D.value = [];
          let e = v.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = v.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            o = { from: e, to: t, user_id: h.value, project_id: _.value };
          try {
            const { data: a, status1: i } = await j(
              N.public.apiBaseurl + "hour/getStatisticheDipendenti",
              { method: "POST", body: o },
            );
            D.value = a;
          } catch (a) {
            console.log(a);
            let i = "Errore sconosciuto";
            try {
              i = JSON.parse(a.data)?.errors?.title ?? i;
            } catch {
              console.log("Impossibile leggere il dettaglio errore:", a);
            }
            C.value = { text: i, type: "danger", show: !0 };
            return;
          }
        },
        $ = async () => {
          await ke(), await xe();
        },
        ke = async () => {
          E.value = [];
          let e = v.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = v.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            o = { from: e, to: t, user_id: h.value, project_id: 0 };
          try {
            const { data: a, status: i } = await j(
              N.public.apiBaseurl + "hour/getuserhours",
              { method: "POST", body: o },
            );
            ge(a),
              a.forEach((r) => {
                let p = "0H 0m 0s",
                  d = new Date(r.Hour.startdate),
                  c = new Date(r.Hour.enddate),
                  f = Math.floor((c - d) / 1e3);
                if (f >= 0) {
                  let w = Math.floor(f / 3600);
                  f %= 3600;
                  let I = Math.floor(f / 60);
                  p = `${w}H ${I}m`;
                }
                E.value.push({
                  id: r.Hour.id,
                  user: A.value[r.Hour.user_id],
                  date: r.Hour.startdate,
                  duration: p,
                  project_id: r.Task.project_id,
                  project: G.value[r.Task.project_id],
                  task_id: r.Task.shortname,
                });
              });
          } catch (a) {
            console.log(a);
            let i = "Errore sconosciuto";
            try {
              i = JSON.parse(a.data)?.errors?.title ?? i;
            } catch {
              console.log("Impossibile leggere il dettaglio errore:", a);
            }
            C.value = { text: i, type: "danger", show: !0 };
            return;
          }
        };
      function De() {
        const t = ve().map((r) => {
            const p = {};
            return (
              pe.forEach((d) => {
                d.title == "Data/Ora"
                  ? (p[d.title] =
                      r[d.key] && r[d.key] !== "0000-00-00"
                        ? new Date(r[d.key]).toLocaleDateString("it-IT") +
                          ", " +
                          new Date(r[d.key]).toLocaleTimeString("it-IT")
                        : "")
                  : (p[d.title] = r[d.key] ?? "");
              }),
              p
            );
          }),
          o = k.utils.json_to_sheet(t),
          a = k.utils.decode_range(o["!ref"]);
        o["!cols"] = [
          { wch: 30 },
          { wch: 60 },
          { wch: 60 },
          { wch: 20 },
          { wch: 20 },
        ];
        for (let r = a.s.c; r <= a.e.c; r++) {
          const p = k.utils.encode_cell({ r: 0, c: r });
          o[p] && (o[p].s = { font: { bold: !0 } });
        }
        const i = k.utils.book_new();
        k.utils.book_append_sheet(i, o, "Imputazione Ore"),
          k.writeFile(i, "export-imputazione-ore.xlsx");
      }
      return (
        ze(async () => {
          (h.value = []),
            await we(),
            S.value.forEach((e) => {
              h.value.push(e.id);
            }),
            await he(),
            await $();
        }),
        (e, t) => {
          const o = Ce;
          return (
            V(),
            X("div", Me, [
              g("div", qe, [
                t[14] || (t[14] = g("br", null, null, -1)),
                t[15] ||
                  (t[15] = g(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Imputazione ore",
                    -1,
                  )),
                t[16] ||
                  (t[16] = g("div", { style: { clear: "both" } }, null, -1)),
                l(
                  q,
                  { "no-gutters": "" },
                  {
                    default: n(() => [
                      l(
                        x,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: n(() => [
                            l(
                              Z,
                              {
                                autocomplete: "off",
                                modelValue: h.value,
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (a) => (h.value = a)),
                                items: S.value,
                                density: "compact",
                                "item-title": "name",
                                "item-value": "id",
                                variant: "outlined",
                                label: "Dipendenti",
                                multiple: "",
                                clearable: "",
                                "no-data-text": "Nessun risultato trovato",
                                class: "mt-4",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        x,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: n(() => [
                            l(
                              L(Se),
                              {
                                class: "pa-2 pl-0 mt-2 ml-2",
                                "format-locale": L(Ie),
                                modelValue: v.value,
                                "onUpdate:modelValue":
                                  t[1] || (t[1] = (a) => (v.value = a)),
                                "preset-dates": se.value,
                                clearable: !1,
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                placeholder: "Seleziona periodo",
                              },
                              null,
                              8,
                              ["format-locale", "modelValue", "preset-dates"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        x,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: n(() => [
                            l(
                              W,
                              {
                                class: "mt-4 ml-2",
                                color: "primary",
                                onClick: t[2] || (t[2] = (a) => $()),
                              },
                              {
                                default: n(() => [
                                  ...(t[5] || (t[5] = [b("Cerca", -1)])),
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
                l(q, null, {
                  default: n(() => [
                    l(x, null, {
                      default: n(() => [
                        l(
                          ee,
                          { class: "mt-4" },
                          {
                            default: n(() => [
                              l(te, null, {
                                default: n(() => [
                                  ...(t[6] ||
                                    (t[6] = [b(" Ore giornaliere ", -1)])),
                                ]),
                                _: 1,
                              }),
                              l(Re, null, {
                                default: n(() => [
                                  ...(t[7] ||
                                    (t[7] = [
                                      b(
                                        " Ore registrate dai dipendenti rispetto alle 8 ore giornaliere ",
                                        -1,
                                      ),
                                    ])),
                                ]),
                                _: 1,
                              }),
                              l(ae, null, {
                                default: n(() => [
                                  l(o, null, {
                                    fallback: n(() => [
                                      ...(t[8] ||
                                        (t[8] = [
                                          g(
                                            "div",
                                            {
                                              style: {
                                                height: "450px",
                                                display: "flex",
                                                "align-items": "center",
                                                "justify-content": "center",
                                              },
                                            },
                                            " Caricamento grafico... ",
                                            -1,
                                          ),
                                        ])),
                                    ]),
                                    default: n(() => [
                                      be.value
                                        ? (V(),
                                          M(
                                            L(P),
                                            {
                                              key: 0,
                                              type: "line",
                                              height: "450",
                                              options: ye.value,
                                              series: O.value.series,
                                            },
                                            null,
                                            8,
                                            ["options", "series"],
                                          ))
                                        : K("", !0),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    }),
                    l(x, null, {
                      default: n(() => [
                        l(ee, null, {
                          default: n(() => [
                            l(te, null, {
                              default: n(() => [
                                ...(t[9] ||
                                  (t[9] = [
                                    b(
                                      "Giorni lavorativi vs Giorni lavorati",
                                      -1,
                                    ),
                                  ])),
                              ]),
                              _: 1,
                            }),
                            l(ae, null, {
                              default: n(() => [
                                l(o, null, {
                                  fallback: n(() => [
                                    ...(t[10] ||
                                      (t[10] = [
                                        g(
                                          "div",
                                          {
                                            style: {
                                              height: "500px",
                                              display: "flex",
                                              "align-items": "center",
                                              "justify-content": "center",
                                            },
                                          },
                                          " Caricamento grafico... ",
                                          -1,
                                        ),
                                      ])),
                                  ]),
                                  default: n(() => [
                                    l(
                                      L(P),
                                      {
                                        type: "line",
                                        height: "500",
                                        options: de.value,
                                        series: ue.value,
                                      },
                                      null,
                                      8,
                                      ["options", "series"],
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                g("div", We, [
                                  (V(!0),
                                  X(
                                    Ee,
                                    null,
                                    Te(
                                      D.value,
                                      (a) => (
                                        V(),
                                        M(
                                          Ge,
                                          {
                                            size: "small",
                                            class: "ml-1",
                                            key: a.name,
                                            label: "",
                                            variant: y.value.has(a.name)
                                              ? "outlined"
                                              : "flat",
                                            color: y.value.has(a.name)
                                              ? "grey"
                                              : "#00516e",
                                            onClick: (i) => z(a.name),
                                          },
                                          {
                                            default: n(() => [
                                              b(Q(a.sigla ?? a.name), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["variant", "color", "onClick"],
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                  y.value.size
                                    ? (V(),
                                      M(
                                        W,
                                        {
                                          key: 0,
                                          size: "x-small",
                                          onClick: ce,
                                          color: "green",
                                          class: "ml-4",
                                        },
                                        {
                                          default: n(() => [
                                            ...(t[11] ||
                                              (t[11] = [
                                                b(" Mostra tutti ", -1),
                                              ])),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : K("", !0),
                                ]),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(q, null, {
                  default: n(() => [
                    l(
                      x,
                      { cols: "10" },
                      {
                        default: n(() => [
                          l(
                            Z,
                            {
                              autocomplete: "off",
                              modelValue: _.value,
                              "onUpdate:modelValue":
                                t[3] || (t[3] = (a) => (_.value = a)),
                              items: R.value,
                              density: "compact",
                              "item-title": "name",
                              variant: "outlined",
                              "item-value": "id",
                              label: "Progetto",
                              clearable: "",
                              "no-data-text": "Nessun risultato trovato",
                              class: "mt-4 ml-2",
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    l(
                      x,
                      { style: { "text-align": "right" } },
                      {
                        default: n(() => [
                          l(
                            W,
                            {
                              class: "mt-4 ml-2 mr-3",
                              color: "primary",
                              onClick: De,
                            },
                            {
                              default: n(() => [
                                l(
                                  Ae,
                                  { class: "mr-3" },
                                  {
                                    default: n(() => [
                                      ...(t[12] ||
                                        (t[12] = [b("mdi-export", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                t[13] || (t[13] = b(" XLS", -1)),
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
                l(
                  je,
                  {
                    headers: me,
                    items: H.value,
                    class: "mt-4",
                    "item-value": "id",
                    style: { "overflow-x": "auto", display: "block" },
                    "sort-by": T.value,
                    "onUpdate:sortBy": t[4] || (t[4] = (a) => (T.value = a)),
                    "items-per-page": 50,
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
                    "item.date": n(({ item: a }) => [
                      g(
                        "span",
                        null,
                        Q(
                          new Date(a.date).toLocaleString("it-IT", {
                            dateStyle: "short",
                            timeStyle: "short",
                          }),
                        ),
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "sort-by"],
                ),
              ]),
            ])
          );
        }
      );
    },
  };
export { yt as default };
