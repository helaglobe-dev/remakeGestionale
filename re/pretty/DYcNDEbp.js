import { V as st } from "./B_hTT4u_.js";
import {
  r,
  u as ot,
  E as nt,
  G as it,
  k as B,
  o as rt,
  x as D,
  z as u,
  B as i,
  K as V,
  J as j,
  C as d,
  av as ve,
  R as le,
  n as ut,
  y as f,
  L as Ve,
  D as T,
  I as M,
  A as b,
  Q as dt,
} from "./CYsiv7Qj.js";
import { u as vt } from "./LKQL6vAN.js";
import { $ as F } from "./BvG7V8Ak.js";
import { V as Oe, a as C } from "./Bj0ZT2dB.js";
import { V as ce } from "./ss-1h9Hv.js";
import { V as Te } from "./Dlfzj7mx.js";
import { V as J } from "./DCAzZvgN.js";
import { V as P, b as Ce } from "./B_W9U9Wp.js";
import { V as $e, a as Ke, c as ct, d as mt } from "./sbneMOUU.js";
import { V as Ne } from "./BqujDEEl.js";
import { V as ft } from "./CBVsQd7J.js";
import { s as Ee, a as pt, e as yt, b as Pe } from "./B5S3s6V6.js";
import { e as Ae } from "./DRW0ieNg.js";
import { i as gt } from "./BIFx5Ami.js";
import "./BrCrqdgZ.js";
import "./Cv1q1CuH.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
const wt = { class: "pl-10 pr-10" },
  kt = { class: "divcenterpage" },
  Dt = { key: 0, class: "pa-10 text-center" },
  bt = { key: 1, style: { "max-height": "300px", overflow: "auto" } },
  St = { key: 2, class: "pa-10 text-center" },
  ht = ["onClick"],
  xt = { key: 1 },
  Vt = { key: 0, class: "text-start" },
  Ot = ["title"],
  Tt = ["title"],
  Ct = { key: 1, class: "text-start" },
  $t = { key: 0, class: "text-start" },
  Kt = { key: 1, class: "text-start" },
  Nt = { class: "text-start" },
  Et = { style: { display: "flex" }, class: "pa-2" },
  na = {
    __name: "works",
    setup(Pt) {
      const ze = r([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [Ee(new Date()), Ae(new Date())] },
          {
            label: "Mese precedente",
            value: [Ee(Pe(new Date(), 1)), Ae(Pe(new Date(), 1))],
          },
          { label: "Anno corrente", value: [pt(new Date()), yt(new Date())] },
        ]),
        A = ut();
      ot();
      const { status: At, signIn: zt, signOut: Lt, data: _t } = nt(),
        K = it("snackbar"),
        c = r([]),
        U = r([]),
        W = r([]),
        H = r([]),
        Y = r([]),
        G = r([]),
        m = r(null),
        Q = r(1),
        Le = r([
          { id: 1, name: "Approvato" },
          { id: 2, name: "Approvato/Confermato/In discussione" },
        ]),
        x = r(1),
        _e = r([
          { id: 1, name: "Giorno" },
          { id: 2, name: "Settimana" },
          { id: 3, name: "Mese" },
        ]),
        h = r(!1),
        se = r(!1),
        y = r([]),
        me = r({}),
        z = r([]),
        k = r(null),
        N = r([]),
        O = r([]),
        oe = r([]),
        X = r(!1),
        I = r([]),
        L = r({}),
        E = r(!1),
        Z = r(!1),
        ne = r(!1),
        ee = r(!1),
        fe = r([]),
        te = r(!1),
        pe = r([]);
      vt({
        title: "Carichi di lavoro",
        meta: [{ name: "description", content: "Carichi di lavoro" }],
      });
      function Fe() {
        X.value = !0;
      }
      function ye() {
        X.value = !1;
      }
      const Ie = async (l, e) => {
        (oe.value = []),
          (await Ue(l, e)).forEach((a) => {
            oe.value.push(a.date);
          });
      };
      function ie(l) {
        const e = new Date(l),
          t = e.getFullYear(),
          a = String(e.getMonth() + 1).padStart(2, "0"),
          s = String(e.getDate()).padStart(2, "0");
        return `${t}-${a}-${s}`;
      }
      function Re() {
        (n.value = JSON.parse(JSON.stringify(me.value))),
          (h.value = !1),
          (m.value = null),
          (c.value = null);
      }
      const qe = async () => {
          let l = { task_id: m.value, user_id: c.value };
          try {
            const { data: e, status: t } = await F(
              A.public.apiBaseurl + "task/changeassegnatario",
              { method: "POST", body: l },
            );
            (K.value = {
              text: "Task assegnato con successo",
              type: "success",
              show: !0,
            }),
              (h.value = !1),
              (m.value = null),
              (c.value = null),
              await de(),
              await xe(),
              ye();
            return;
          } catch (e) {
            console.log(e);
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (K.value = { text: t, type: "danger", show: !0 });
            return;
          }
        },
        ge = (l, e, t) => {
          const [a, s] = e.split(" -> ");
          let o = new Date(a);
          const g = new Date(s);
          let v = 0;
          for (; o <= g; ) {
            const p = ie(o),
              w = o.getDay(),
              $ = L.value?.[t]?.[p] ?? 0;
            w !== 0 && w !== 6 && (v += (480 - $) / 60),
              o.setDate(o.getDate() + 1);
          }
          return v <= 0 ? "-" : `${((l / v) * 100).toFixed(0)}%`;
        };
      function re(l, e, t, a, s, o) {
        const g = new Date(s),
          v = new Date(o);
        let p = 0,
          w = 0;
        for (let S = new Date(g); S <= v; S.setDate(S.getDate() + 1))
          (p += l[S.toISOString().slice(0, 10)]
            ? l[S.toISOString().slice(0, 10)]
            : 0),
            e?.[t]?.[S.toISOString().slice(0, 10)] < 480 && w++;
        let $ = [];
        if (w > 0) {
          let S = p / w;
          for (let _ = new Date(g); _ <= v; _.setDate(_.getDate() + 1))
            e?.[t]?.[_.toISOString().slice(0, 10)] < 480
              ? ($[_.toISOString().slice(0, 10)] = S)
              : ($[_.toISOString().slice(0, 10)] = 0);
        } else
          for (let S = new Date(g); S <= v; S.setDate(S.getDate() + 1))
            $[S.toISOString().slice(0, 10)] = 0;
        return $;
      }
      function Be() {
        (me.value = JSON.parse(JSON.stringify(n.value))),
          (L.value = JSON.parse(JSON.stringify(I.value))),
          (h.value = !0);
        const l = G.value.find((e) => e.id === m.value);
        if (x.value == 1) {
          let e = re(
            z.value[m.value],
            L.value,
            c.value,
            O.value,
            l.startdate,
            l.enddate,
          );
          O.value.forEach((t) => {
            let a = e[t] || 0;
            y.value[m.value] == c.value ||
              (y.value[m.value] == 0
                ? (n.value[c.value][t] = n.value[c.value][t] + a)
                : (n.value[y.value[m.value]] != null &&
                    (n.value[y.value[m.value]][t] =
                      n.value[y.value[m.value]][t] - z.value[m.value][t]),
                  n.value[c.value] != null &&
                    (n.value[c.value][t] = n.value[c.value][t] + a)));
          });
        } else
          x.value == 2
            ? R.value.forEach((e) => {
                if (e.key != "name") {
                  let t = re(
                      z.value[m.value],
                      L.value,
                      c.value,
                      O.value,
                      l.startdate,
                      l.enddate,
                    ),
                    a = je(t),
                    s = a[e.rawKey] != null ? a[e.rawKey] : 0;
                  y.value[m.value] == c.value ||
                    (y.value[m.value] == 0
                      ? (n.value[c.value][e.rawKey] =
                          n.value[c.value][e.rawKey] + s)
                      : (n.value[y.value[m.value]] != null &&
                          (n.value[y.value[m.value]][e.rawKey] =
                            n.value[y.value[m.value]][e.rawKey] - s),
                        n.value[c.value] != null &&
                          (n.value[c.value][e.rawKey] =
                            n.value[c.value][e.rawKey] + s)));
                }
              })
            : x.value == 3 &&
              q.value.forEach((e) => {
                if (e.key != "name") {
                  let t = re(
                      z.value[m.value],
                      L.value,
                      c.value,
                      O.value,
                      l.startdate,
                      l.enddate,
                    ),
                    a = Me(t),
                    s = a[e.rawKey] != null ? a[e.rawKey] : 0;
                  y.value[m.value] == c.value ||
                    (y.value[m.value] == 0
                      ? (n.value[c.value][e.rawKey] =
                          n.value[c.value][e.rawKey] + s)
                      : (n.value[y.value[m.value]] != null &&
                          (n.value[y.value[m.value]][e.rawKey] =
                            n.value[y.value[m.value]][e.rawKey] - s),
                        n.value[c.value] != null &&
                          (n.value[c.value][e.rawKey] =
                            n.value[c.value][e.rawKey] + s)));
                }
              });
      }
      function je(l) {
        const e = {};
        return (
          Object.keys(l).forEach((t) => {
            const a = new Date(t),
              s = a.getDay() || 7,
              o = new Date(a);
            o.setDate(a.getDate() - s + 1);
            const g = new Date(o);
            g.setDate(o.getDate() + 6);
            const v = (w) => w.toISOString().slice(0, 10),
              p = `${v(o)} -> ${v(g)}`;
            e[p] || (e[p] = 0), (e[p] += l[t]);
          }),
          e
        );
      }
      function Me(l) {
        const e = {};
        return (
          Object.keys(l).forEach((t) => {
            const [a, s] = t.split("-"),
              o = `${a}-${s}-01`,
              g = new Date(a, Number(s), 0),
              v = `${a}-${s}-${String(g.getDate()).padStart(2, "0")}`,
              p = `${o} -> ${v}`;
            e[p] || (e[p] = 0), (e[p] += l[t]);
          }),
          e
        );
      }
      const ue = (l, e) => {
          const t = n.value?.[l]?.[e] || 0,
            s = (480 - (I.value?.[l]?.[e] || 0)) / 60;
          return s <= 0 ? "-" : ((t / s) * 100).toFixed(0);
        },
        we = (l, e) => {
          const t = n.value?.[l]?.[e] || 0,
            s = (480 - (L.value?.[l]?.[e] || 0)) / 60;
          return s <= 0 ? null : ((t / s) * 100).toFixed(0);
        },
        Je = (l, e) => I.value?.[l]?.[e] === 480,
        ae = (l, e, t) => {
          const [a, s] = e.split(" -> ");
          let o = new Date(a);
          const g = new Date(s);
          let v = 0;
          for (; o <= g; ) {
            const p = ie(o),
              w = o.getDay(),
              $ = I.value?.[t]?.[p] ?? 0;
            w !== 0 && w !== 6 && (v += (480 - $) / 60),
              o.setDate(o.getDate() + 1);
          }
          return v <= 0 ? "-" : `${((l / v) * 100).toFixed(0)}%`;
        },
        Ue = async (l, e) => {
          let t = { start: l, end: e };
          try {
            const { data: a, status: s } = await F(
              A.public.apiBaseurl + "holiday/isholidaydate/1",
              { method: "POST", body: t },
            );
            return a;
          } catch (a) {
            console.log(a);
            let s = JSON.parse(a.data).errors.title;
            return (
              console.log("catcherr", a.data),
              (K.value = { text: s, type: "danger", show: !0 }),
              !1
            );
          }
        },
        We = async () => {
          if (!k.value || k.value.length !== 2) {
            O.value = [];
            return;
          }
          const [l, e] = k.value,
            t = [];
          let a = new Date(l);
          const s = new Date(e);
          for (; a <= s; ) {
            const o = a.getDay(),
              g = oe.value;
            o !== 0 &&
              o !== 6 &&
              !g.includes(ie(a)) &&
              t.push(a.toLocaleDateString("fr-CA")),
              a.setDate(a.getDate() + 1);
          }
          O.value = t;
        },
        ke = B(() => [
          { title: "Dipendente", key: "name" },
          ...O.value.map((l) => ({ title: Xe(l), key: l, align: "start" })),
        ]),
        R = B(() => {
          const l = [
            ...new Set(
              Object.values(n.value || {}).flatMap((e) => Object.keys(e)),
            ),
          ].sort();
          return [
            { title: "Dipendente", key: "name" },
            ...l.map((e, t) => {
              const [a, s] = e.split(" -> ");
              return {
                title: `${De(a)}-${De(s)}`,
                key: `week_${t}`,
                align: "start",
                rawKey: e,
              };
            }),
          ];
        });
      function De(l) {
        return new Date(l).toLocaleDateString("it-IT", {
          day: "2-digit",
          month: "2-digit",
        });
      }
      const q = B(() => {
        const l = Object.keys(n.value?.[Object.keys(n.value)[0]] || {});
        return [
          { title: "Dipendente", key: "name" },
          ...l.map((e, t) => {
            const [a, s] = e.split(" -> ");
            return {
              title: `${He(a)}`,
              key: `month_${t}`,
              align: "start",
              class: "month-header",
              rawKey: e,
            };
          }),
        ];
      });
      function He(l) {
        return new Date(l).toLocaleDateString("it-IT", {
          month: "short",
          year: "numeric",
        });
      }
      const Ye = B(() =>
          Object.keys(n.value || {}).map((l) => {
            const e = { id: l, name: H.value[l] };
            return (
              R.value.forEach((t) => {
                t.rawKey && (e[t.key] = n.value[l]?.[t.rawKey] || 0);
              }),
              e
            );
          }),
        ),
        Ge = B(() =>
          Object.keys(n.value || {}).map((l) => {
            const e = { id: l, name: H.value[l] };
            return (
              q.value.forEach((t) => {
                t.rawKey && (e[t.key] = n.value[l]?.[t.rawKey] || 0);
              }),
              e
            );
          }),
        );
      function be(l, e, t) {
        let a = "grey";
        const s = parseFloat(l);
        return (
          isNaN(s) || s === 0
            ? (a = "grey")
            : s < 50
              ? (a = "green")
              : s <= 80
                ? (a = "orange")
                : (a = "red"),
          {
            width: "24px",
            height: "24px",
            color: a,
            borderRadius: "4px",
            margin: "auto",
            fontWeight: "bold",
          }
        );
      }
      function Qe(l, e) {
        let t = ae(l, e),
          a = "grey";
        const s = parseFloat(t);
        return (
          isNaN(s) || s === 0
            ? (a = "grey")
            : s < 50
              ? (a = "green")
              : s <= 80
                ? (a = "orange")
                : (a = "red"),
          {
            width: "24px",
            height: "24px",
            color: a,
            borderRadius: "4px",
            margin: "auto",
            fontWeight: "bold",
          }
        );
      }
      function Se(l, e) {
        let t = ue(l, e),
          a = "grey";
        return (
          t === 0
            ? (a = "grey")
            : t < 50
              ? (a = "green")
              : t <= 80
                ? (a = "orange")
                : (a = "red"),
          {
            width: "24px",
            height: "24px",
            color: a,
            borderRadius: "4px",
            margin: "auto",
            fontWeight: "bold",
          }
        );
      }
      function Xe(l) {
        const e = new Date(l).toLocaleDateString("it-IT", {
          weekday: "short",
          day: "2-digit",
          month: "2-digit",
        });
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      const he = r([]),
        n = r({});
      function Ze() {
        const l = N.value.map((e) => {
          const t = { id: e.id, name: e.name };
          return (
            O.value.forEach((a) => {
              t[a] = "";
            }),
            t
          );
        });
        he.value = l;
      }
      async function de() {
        if (
          ((E.value = !0), (ee.value = !0), !k.value || N.value.length === 0)
        ) {
          (E.value = !1), (ee.value = !1);
          return;
        }
        await Ie(
          k.value[0].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          k.value[1].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        ),
          (h.value = !1),
          (m.value = null),
          (c.value = null),
          x.value == 1 && (await We()),
          await at(),
          Ze(),
          Q.value == 2 ? ((se.value = !0), await xe()) : (se.value = !1),
          (ee.value = !1),
          (E.value = !1);
      }
      const et = async () => {
          (U.value = []), (H.value = []), (W.value = []);
          const { data: l } = await F(A.public.apiBaseurl + "user/list", {
            onRequest({ request: e, options: t }) {},
            onRequestError({ request: e, options: t, error: a }) {
              console.log("Errore nella request:", a);
            },
            onResponseError({ request: e, response: t, options: a }) {
              K.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: t, options: a }) {
              t._data.data.forEach((o) => {
                o.activeuser == 1 &&
                  U.value.push({
                    id: o.id,
                    name: o.firstname + " " + o.lastname,
                  }),
                  (H.value[o.id] = o.firstname + " " + o.lastname),
                  (W.value[o.id] = o.acronym);
              });
            },
          });
        },
        tt = async () => {
          Y.value = [];
          const { data: l } = await F(
            A.public.apiBaseurl + "userprofile/list",
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: a }) {
                console.log("Errore nella request:", a);
              },
              onResponseError({ request: e, response: t, options: a }) {
                K.value = {
                  text: "Errore caricamento profili",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: t, options: a }) {
                t._data.data.forEach((o) => {
                  Y.value[o.id] = o.code;
                });
              },
            },
          );
        },
        xe = async () => {
          if (
            ((Z.value = !0),
            (ne.value = !0),
            (G.value = []),
            (y.value = []),
            (z.value = []),
            !k.value || N.value.length === 0)
          )
            return;
          let l = k.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            e = k.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = { from: l, to: e };
          try {
            const { data: a, status: s } = await F(
              A.public.apiBaseurl + "task/listsimulation",
              { method: "POST", body: t },
            );
            a.forEach((o) => {
              (z.value[o.Task.id] = o.Task.carico),
                (y.value[o.Task.id] = o.Task.user_id);
              const g = o.Project,
                v = o.Task;
              let p = "",
                w = "";
              W.value[v.user_id] != null
                ? (p = W.value[v.user_id])
                : (p = "Non assegnato"),
                Y.value[v.userprofile_id] != null
                  ? (w = Y.value[v.userprofile_id])
                  : (w = "No profilo"),
                G.value.push({
                  id: v.id,
                  name:
                    g.code +
                    " - " +
                    g.name +
                    " - " +
                    v.shortname?.trim() +
                    " [" +
                    w +
                    "]  [" +
                    p +
                    "] || " +
                    new Date(v.startdate).toLocaleDateString("it-IT") +
                    " - " +
                    new Date(v.enddate).toLocaleDateString("it-IT") +
                    " || " +
                    v.hours +
                    "h",
                  startdate: v.startdate,
                  enddate: v.enddate,
                }),
                (Z.value = !1),
                (ne.value = !1);
            });
          } catch (a) {
            console.log(a);
            let s = JSON.parse(a.data).errors.title;
            console.log("catcherr", a.data),
              (K.value = { text: s, type: "danger", show: !0 });
            return;
          }
        },
        at = async () => {
          if (!k.value || N.value.length === 0) return;
          let l = k.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            e = k.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = {
              stato: Q.value,
              user: N.value,
              from: l,
              to: e,
              periodo: x.value,
            };
          try {
            const { data: a, status: s } = await F(
              A.public.apiBaseurl + "task/getcarico",
              { method: "POST", body: t },
            );
            (n.value = a.presenze), (I.value = a.holiday), (fe.value = a.tasks);
          } catch (a) {
            console.log(a);
            let s = JSON.parse(a.data).errors.title;
            console.log("catcherr", a.data),
              (K.value = { text: s, type: "danger", show: !0 });
            return;
          }
        };
      function lt(l) {
        (te.value = !0), (pe.value = fe.value[l]);
      }
      return (
        rt(async () => {
          await et(), await tt();
        }),
        (l, e) => (
          f(),
          D("div", wt, [
            u("div", kt, [
              e[28] || (e[28] = u("br", null, null, -1)),
              e[29] ||
                (e[29] = u(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Carichi di lavoro",
                  -1,
                )),
              e[30] ||
                (e[30] = u("div", { style: { clear: "both" } }, null, -1)),
              i(
                Oe,
                { "no-gutters": "" },
                {
                  default: d(() => [
                    i(
                      C,
                      { cols: "12", sm: "12", md: "4" },
                      {
                        default: d(() => [
                          i(
                            J,
                            {
                              autocomplete: "off",
                              modelValue: N.value,
                              "onUpdate:modelValue":
                                e[0] || (e[0] = (t) => (N.value = t)),
                              items: U.value,
                              density: "compact",
                              "item-title": "name",
                              variant: "outlined",
                              "return-object": "",
                              label: "Dipendenti*",
                              multiple: "",
                              chips: "",
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
                    i(
                      C,
                      { cols: "12", sm: "12", md: "3" },
                      {
                        default: d(() => [
                          i(
                            J,
                            {
                              autocomplete: "off",
                              modelValue: Q.value,
                              "onUpdate:modelValue":
                                e[1] || (e[1] = (t) => (Q.value = t)),
                              items: Le.value,
                              density: "compact",
                              "item-title": "name",
                              variant: "outlined",
                              "item-value": "id",
                              label: "Stato progetto*",
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
                    i(
                      C,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: d(() => [
                          i(
                            Ve(st),
                            {
                              class: "pa-2 pl-0 mt-2 ml-2",
                              "format-locale": Ve(gt),
                              modelValue: k.value,
                              "onUpdate:modelValue":
                                e[2] || (e[2] = (t) => (k.value = t)),
                              "preset-dates": ze.value,
                              range: "",
                              "multi-calendars": "",
                              "enable-time-picker": !1,
                              format: "dd/M/yyyy",
                              "select-text": "Seleziona",
                              "cancel-text": "Annulla",
                              placeholder: "Seleziona periodo*",
                            },
                            null,
                            8,
                            ["format-locale", "modelValue", "preset-dates"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      C,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: d(() => [
                          i(
                            J,
                            {
                              autocomplete: "off",
                              modelValue: x.value,
                              "onUpdate:modelValue": [
                                e[3] || (e[3] = (t) => (x.value = t)),
                                e[4] || (e[4] = (t) => de()),
                              ],
                              items: _e.value,
                              density: "compact",
                              "item-title": "name",
                              variant: "outlined",
                              "item-value": "id",
                              label: "Tipologia*",
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
                    i(
                      C,
                      { cols: "12", sm: "12", md: "1" },
                      {
                        default: d(() => [
                          i(
                            P,
                            {
                              class: "mt-4 ml-2",
                              color: "primary",
                              onClick: e[5] || (e[5] = (t) => de()),
                              disabled: ee.value,
                            },
                            {
                              default: d(() => [
                                ...(e[16] || (e[16] = [T("Aggiorna", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["disabled"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              Z.value
                ? (f(),
                  D("div", Dt, [
                    i(Ce, {
                      indeterminate: "",
                      color: "#00516E",
                      size: "50",
                      width: "4",
                    }),
                  ]))
                : V("", !0),
              !Z.value && se.value
                ? (f(),
                  D("div", bt, [
                    e[20] || (e[20] = u("h4", null, "Simulatore", -1)),
                    i(
                      Oe,
                      { "no-gutters": "" },
                      {
                        default: d(() => [
                          i(
                            C,
                            { cols: "12", sm: "12", md: "6" },
                            {
                              default: d(() => [
                                i(
                                  J,
                                  {
                                    autocomplete: "off",
                                    modelValue: m.value,
                                    "onUpdate:modelValue":
                                      e[6] || (e[6] = (t) => (m.value = t)),
                                    items: G.value,
                                    "item-title": "name",
                                    "item-value": "id",
                                    required: "",
                                    density: "compact",
                                    label: "Task",
                                    "persistent-hint": "",
                                    clearable: "",
                                    variant: "outlined",
                                    disabled: h.value,
                                    "no-data-text": "Nessun risultato trovato",
                                  },
                                  null,
                                  8,
                                  ["modelValue", "items", "disabled"],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          i(
                            C,
                            { cols: "12", sm: "12", md: "4" },
                            {
                              default: d(() => [
                                i(
                                  J,
                                  {
                                    autocomplete: "off",
                                    modelValue: c.value,
                                    "onUpdate:modelValue":
                                      e[7] || (e[7] = (t) => (c.value = t)),
                                    items: U.value,
                                    density: "compact",
                                    "item-title": "name",
                                    "item-value": "id",
                                    variant: "outlined",
                                    label: "Dipendenti",
                                    clearable: "",
                                    disabled: h.value,
                                    "no-data-text": "Nessun risultato trovato",
                                    class: "ml-2",
                                  },
                                  null,
                                  8,
                                  ["modelValue", "items", "disabled"],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          h.value
                            ? (f(),
                              j(
                                C,
                                { key: 1, cols: "12", sm: "12", md: "2" },
                                {
                                  default: d(() => [
                                    i(
                                      P,
                                      {
                                        class: "ml-2",
                                        color: "red",
                                        onClick: e[9] || (e[9] = (t) => Re()),
                                      },
                                      {
                                        default: d(() => [
                                          ...(e[18] ||
                                            (e[18] = [T("Cancella", -1)])),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    i(
                                      P,
                                      {
                                        class: "ml-2",
                                        color: "green",
                                        onClick: e[10] || (e[10] = (t) => Fe()),
                                      },
                                      {
                                        default: d(() => [
                                          ...(e[19] ||
                                            (e[19] = [T("Accetta", -1)])),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ))
                            : (f(),
                              j(
                                C,
                                { key: 0, cols: "12", sm: "12", md: "2" },
                                {
                                  default: d(() => [
                                    i(
                                      P,
                                      {
                                        class: "ml-2",
                                        color: "primary",
                                        onClick: e[8] || (e[8] = (t) => Be()),
                                        disabled: ne.value,
                                      },
                                      {
                                        default: d(() => [
                                          ...(e[17] ||
                                            (e[17] = [T("Simula", -1)])),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["disabled"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                              )),
                        ]),
                        _: 1,
                      },
                    ),
                  ]))
                : V("", !0),
              E.value
                ? (f(),
                  D("div", St, [
                    i(Ce, {
                      indeterminate: "",
                      color: "#00516E",
                      size: "100",
                      width: "8",
                    }),
                  ]))
                : V("", !0),
              !E.value && ke.value.length > 1 && x.value == 1
                ? (f(),
                  j(
                    ce,
                    {
                      key: 3,
                      headers: ke.value,
                      items: he.value,
                      class: "mt-4",
                      "item-value": "id",
                      style: { "overflow-x": "auto", display: "block" },
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
                    ve(
                      {
                        "item.name": d(({ item: t }) => [
                          h.value
                            ? (f(), D("span", xt, b(t.name), 1))
                            : (f(),
                              D(
                                "span",
                                {
                                  key: 0,
                                  style: { cursor: "pointer" },
                                  onClick: (a) => lt(t.id),
                                  title: "Dettaglio Task",
                                },
                                b(t.name),
                                9,
                                ht,
                              )),
                        ]),
                        _: 2,
                      },
                      [
                        le(O.value, (t) => ({
                          name: `item.${t}`,
                          fn: d(({ item: a }) => [
                            Je(a.id, t)
                              ? (f(),
                                D("div", Ct, [
                                  ...(e[21] ||
                                    (e[21] = [u("div", null, "-", -1)])),
                                ]))
                              : (f(),
                                D("div", Vt, [
                                  h.value
                                    ? V("", !0)
                                    : (f(),
                                      D(
                                        "div",
                                        {
                                          key: 0,
                                          style: M(Se(a.id, t)),
                                          class: "cell-box",
                                          title: `${ue(a.id, t) ?? 0}%`,
                                        },
                                        b(ue(a.id, t) ?? 0) + "% ",
                                        13,
                                        Ot,
                                      )),
                                  h.value
                                    ? (f(),
                                      D(
                                        "div",
                                        {
                                          key: 1,
                                          style: M(Se(a.id, t)),
                                          class: "cell-box",
                                          title: `${we(a.id, t) ?? 0}%`,
                                        },
                                        b(we(a.id, t) ?? 0) + "% ",
                                        13,
                                        Tt,
                                      ))
                                    : V("", !0),
                                ])),
                          ]),
                        })),
                      ],
                    ),
                    1032,
                    ["headers", "items"],
                  ))
                : V("", !0),
              !E.value && R.value.length > 1 && x.value == 2
                ? (f(),
                  j(
                    ce,
                    {
                      key: 4,
                      headers: R.value,
                      items: Ye.value,
                      class: "mt-4",
                      "item-value": "id",
                      style: { "overflow-x": "auto", display: "block" },
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
                    ve({ _: 2 }, [
                      le(R.value.slice(1), (t) => ({
                        name: `item.${t.key}`,
                        fn: d(({ item: a }) => [
                          h.value
                            ? V("", !0)
                            : (f(),
                              D("div", $t, [
                                u(
                                  "div",
                                  {
                                    class: "cell-box",
                                    style: M(
                                      be(
                                        ae(a[t.key], t.rawKey, a.id),
                                        a[t.key],
                                        t.rawKey,
                                      ),
                                    ),
                                  },
                                  b(ae(a[t.key], t.rawKey, a.id)),
                                  5,
                                ),
                              ])),
                          h.value
                            ? (f(),
                              D("div", Kt, [
                                u(
                                  "div",
                                  {
                                    class: "cell-box",
                                    style: M(
                                      be(
                                        ge(a[t.key], t.rawKey, a.id),
                                        a[t.key],
                                        t.rawKey,
                                      ),
                                    ),
                                  },
                                  b(ge(a[t.key], t.rawKey, a.id)),
                                  5,
                                ),
                              ]))
                            : V("", !0),
                        ]),
                      })),
                    ]),
                    1032,
                    ["headers", "items"],
                  ))
                : V("", !0),
              !E.value && q.value.length > 1 && x.value == 3
                ? (f(),
                  j(
                    ce,
                    {
                      key: 5,
                      headers: q.value,
                      items: Ge.value,
                      class: "mt-4 month-header",
                      "item-value": "id",
                      style: { "overflow-x": "auto", display: "block" },
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
                    ve({ _: 2 }, [
                      le(q.value.slice(1), (t) => ({
                        name: `item.${t.key}`,
                        fn: d(({ item: a }) => [
                          u("div", Nt, [
                            u(
                              "div",
                              {
                                class: "cell-box",
                                style: M(Qe(a[t.key], t.rawKey)),
                              },
                              b(ae(a[t.key], t.rawKey, a.id)),
                              5,
                            ),
                          ]),
                        ]),
                      })),
                    ]),
                    1032,
                    ["headers", "items"],
                  ))
                : V("", !0),
              i(
                Te,
                {
                  modelValue: X.value,
                  "onUpdate:modelValue":
                    e[13] || (e[13] = (t) => (X.value = t)),
                  "max-width": "800",
                  persistent: "",
                },
                {
                  default: d(() => [
                    i(
                      $e,
                      { class: "pa-2" },
                      {
                        default: d(() => [
                          i(Ke, null, {
                            default: d(() => [
                              ...(e[22] ||
                                (e[22] = [
                                  T(
                                    "Confermi il cambio dell'assegnazione del task?",
                                    -1,
                                  ),
                                ])),
                            ]),
                            _: 1,
                          }),
                          u("div", Et, [
                            i(
                              P,
                              {
                                color: "red",
                                onClick: e[11] || (e[11] = (t) => ye()),
                              },
                              {
                                default: d(() => [
                                  ...(e[23] || (e[23] = [T("Annulla", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                            i(Ne),
                            i(
                              P,
                              {
                                color: "green",
                                onClick: e[12] || (e[12] = (t) => qe()),
                              },
                              {
                                default: d(() => [
                                  ...(e[24] || (e[24] = [T("Accetta", -1)])),
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
                8,
                ["modelValue"],
              ),
              i(
                Te,
                {
                  modelValue: te.value,
                  "onUpdate:modelValue":
                    e[15] || (e[15] = (t) => (te.value = t)),
                  "max-width": "1000",
                  persistent: "",
                },
                {
                  default: d(() => [
                    i(
                      $e,
                      { class: "pa-2" },
                      {
                        default: d(() => [
                          i(Ke, null, {
                            default: d(() => [
                              ...(e[25] ||
                                (e[25] = [
                                  T(
                                    "Lista dei task che contribuiscono al calcolo",
                                    -1,
                                  ),
                                ])),
                            ]),
                            _: 1,
                          }),
                          i(ct, null, {
                            default: d(() => [
                              i(ft, null, {
                                default: d(() => [
                                  e[26] ||
                                    (e[26] = u(
                                      "thead",
                                      null,
                                      [
                                        u("tr", null, [
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Progetto"),
                                          ]),
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Nome Task"),
                                          ]),
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Data Inizio"),
                                          ]),
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Data Fine"),
                                          ]),
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Ore"),
                                          ]),
                                          u("th", { class: "text-left" }, [
                                            u("b", null, "Carico"),
                                          ]),
                                        ]),
                                      ],
                                      -1,
                                    )),
                                  u("tbody", null, [
                                    (f(!0),
                                    D(
                                      dt,
                                      null,
                                      le(
                                        pe.value,
                                        (t) => (
                                          f(),
                                          D("tr", { key: t.Task.id }, [
                                            u(
                                              "td",
                                              null,
                                              "[" +
                                                b(t.Project.code) +
                                                "] " +
                                                b(t.Project.name),
                                              1,
                                            ),
                                            u(
                                              "td",
                                              null,
                                              b(t.Task.shortname),
                                              1,
                                            ),
                                            u(
                                              "td",
                                              null,
                                              b(
                                                new Date(
                                                  t.Task.startdate,
                                                ).toLocaleDateString("it-IT", {
                                                  day: "2-digit",
                                                  month: "2-digit",
                                                  year: "numeric",
                                                }),
                                              ),
                                              1,
                                            ),
                                            u(
                                              "td",
                                              null,
                                              b(
                                                new Date(
                                                  t.Task.enddate,
                                                ).toLocaleDateString("it-IT", {
                                                  day: "2-digit",
                                                  month: "2-digit",
                                                  year: "numeric",
                                                }),
                                              ),
                                              1,
                                            ),
                                            u("td", null, b(t.Task.hours), 1),
                                            u(
                                              "td",
                                              null,
                                              b(
                                                Object.values(t.Task.carico)[0],
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
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }),
                          i(mt, null, {
                            default: d(() => [
                              i(Ne),
                              i(
                                P,
                                {
                                  color: "#A5161E",
                                  onClick:
                                    e[14] || (e[14] = (t) => (te.value = !1)),
                                },
                                {
                                  default: d(() => [
                                    ...(e[27] || (e[27] = [T("Chiudi", -1)])),
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
            ]),
          ])
        )
      );
    },
  };
export { na as default };
