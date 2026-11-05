import { _ as Te } from "./ClyIuovc.js";
import { _ as qe } from "./B3TT-sRk.js";
import {
  r as p,
  u as Le,
  E as $e,
  G as Me,
  k as ie,
  o as Oe,
  as as Be,
  e as Fe,
  x as P,
  z as k,
  B as a,
  J as v,
  K as g,
  D as c,
  L as u,
  C as o,
  M as w,
  n as Ue,
  y as f,
  P as J,
  A as y,
  N as ue,
  O as ce,
} from "./CYsiv7Qj.js";
import { x as _ } from "./D16A7lth.js";
import { V as He } from "./B_hTT4u_.js";
import { u as Ke } from "./LKQL6vAN.js";
import { $ as G } from "./BvG7V8Ak.js";
import { V as T, a as V } from "./B_W9U9Wp.js";
import { V as de, a as D } from "./Bj0ZT2dB.js";
import { V as Je } from "./ss-1h9Hv.js";
import { V as Ge } from "./Dlfzj7mx.js";
import { V as X } from "./DCAzZvgN.js";
import { b as q, c as L, V as Xe, a as Ye } from "./CxBYvc7u.js";
import { V as N, a as We } from "./Cv1q1CuH.js";
import { V as Qe } from "./BSCDGDSX.js";
import { V as Ze } from "./BrCrqdgZ.js";
import { V as et, c as tt, d as ot } from "./sbneMOUU.js";
import { V as lt } from "./BqujDEEl.js";
import { s as pe, a as at, e as rt, b as me } from "./B5S3s6V6.js";
import { e as fe } from "./DRW0ieNg.js";
import { i as nt } from "./BIFx5Ami.js";
import "./MIubIMrV.js";
import "./61Go5SWW.js";
import "./D3DeQzvF.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./CZzf1ihi.js";
import "./Bx6RXzqb.js";
import "./B51noTYL.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./fKsYyVgl.js";
import "./CCBmAzgz.js";
const st = { class: "pl-10 pr-10" },
  it = { class: "divcenterpage" },
  ut = { style: { display: "inline", float: "right" } },
  ct = ["onClick", "onKeyup"],
  dt = { key: 0 },
  pt = { key: 0 },
  mt = { key: 0 },
  ft = ["title"],
  gt = { key: 0 },
  yt = ["title"],
  vt = ["title"],
  kt = { class: "mt-4" },
  no = {
    __name: "projects",
    setup(wt) {
      const b = p(
          localStorage.getItem("hgfiltroprogetticreazione") != "null" &&
            localStorage.getItem("hgfiltroprogetticreazione") != null
            ? localStorage
                .getItem("hgfiltroprogetticreazione")
                .split(",")
                .map((s) => new Date(s))
            : [],
        ),
        ge = p([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [pe(new Date()), fe(new Date())] },
          {
            label: "Mese precedente",
            value: [pe(me(new Date(), 1)), fe(me(new Date(), 1))],
          },
          { label: "Anno corrente", value: [at(new Date()), rt(new Date())] },
        ]),
        $ = Ue(),
        ye = Le(),
        { status: bt, signIn: Vt, signOut: St, data: A } = $e(),
        Y = p([]),
        M = p(""),
        R = Me("snackbar"),
        O = p(!1),
        ve = p(0),
        oe = p(0),
        ke = p(!0),
        S = p(
          localStorage.getItem("hgfiltroprogetticliente") != "null" &&
            localStorage.getItem("hgfiltroprogetticliente") != null
            ? parseInt(localStorage.getItem("hgfiltroprogetticliente"))
            : null,
        ),
        W = p([]),
        Q = p(0),
        Z = [
          { code: "A", name: "Approvato / Siglato", color: "#157244" },
          {
            code: "C",
            name: "Confermato – in attesa di contratto",
            color: "#6bc498",
          },
          { code: "S", name: "Da sviluppare", color: "orange" },
          { code: "I", name: "In discussione", color: "#9eefea" },
          { code: "L", name: "Lead", color: "#dddddd" },
          { code: "H", name: "On Hold", color: "#994eb7" },
          { code: "R", name: "Rifiutato", color: "red" },
          { code: "D", name: "Eliminato", color: "darkred" },
        ],
        we = [
          { code: "A", name: "Approvato / Siglato", disabled: !0 },
          { code: "C", name: "Confermato – in attesa di contratto" },
        ],
        be = [
          { code: "A", name: "Approvato / Siglato", disabled: !0 },
          { code: "C", name: "Confermato – in attesa di contratto" },
          { code: "S", name: "Da sviluppare" },
          { code: "I", name: "In discussione" },
          { code: "L", name: "Lead" },
          { code: "H", name: "On Hold" },
          { code: "R", name: "Rifiutato" },
        ],
        C = p(
          localStorage.getItem("hgfiltroprogettistato") != "" &&
            localStorage.getItem("hgfiltroprogettistato") != null
            ? localStorage.getItem("hgfiltroprogettistato").split(",")
            : [],
        ),
        Ve = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
        ],
        I = p(
          localStorage.getItem("hgfiltroprogettiapertura") != "null" &&
            localStorage.getItem("hgfiltroprogettiapertura") != null
            ? localStorage.getItem("hgfiltroprogettiapertura")
            : null,
        ),
        B = p([]),
        Se = p(!1),
        j = p(
          localStorage.getItem("hgfiltroprogettiresponsabile") != "null" &&
            localStorage.getItem("hgfiltroprogettiresponsabile") != null
            ? parseInt(localStorage.getItem("hgfiltroprogettiresponsabile"))
            : null,
        ),
        F = p([
          "color",
          "code",
          "name",
          "cliente",
          "created",
          "startdate",
          "enddate",
          "_totaleprogetto",
          "successpercent",
          "statuscoded",
          "openstatus",
        ]),
        Ce = ie(() =>
          ae.filter((s) => le.includes(s.key) || F.value.includes(s.key)),
        ),
        le = ["actions"],
        ae = [
          { title: "ID", key: "id", sortable: !0, width: 30 },
          {
            title: "Colore",
            key: "color",
            sortable: !1,
            align: "left",
            width: 30,
          },
          { title: "Codice", key: "code", sortable: !0, align: "left" },
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          { title: "Nome a contratto", key: "contractname", sortable: !0 },
          { title: "Descrizione", key: "description", sortable: !1 },
          { title: "Cliente", key: "cliente", sortable: !0, align: "left" },
          { title: "Resp.", key: "ownername", sortable: !0, align: "left" },
          { title: "Creazione", key: "created", sortable: !0, align: "left" },
          { title: "Inizio", key: "startdate", sortable: !0, align: "left" },
          { title: "Fine", key: "enddate", sortable: !0, align: "left" },
          {
            title: "Totale",
            key: "_totaleprogetto",
            sortable: !0,
            align: "left",
          },
          {
            title: "% Succ.",
            key: "successpercent",
            sortable: !0,
            align: "left",
          },
          { title: "Stato", key: "statuscoded", sortable: !0, align: "left" },
          { title: "Aperto", key: "openstatus", sortable: !0, align: "left" },
          { title: "Note", key: "note" },
          { title: "Note Addendum", key: "noteaddendum" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        Ie = [
          { title: "ID", key: "id" },
          { title: "Colore", key: "color" },
          { title: "Codice", key: "code" },
          { title: "Nome", key: "name" },
          { title: "Nome a contratto", key: "contractname" },
          { title: "Descrizione", key: "description" },
          { title: "Tipo", key: "typecoded" },
          { title: "Creazione", key: "created" },
          { title: "Inizio", key: "startdate" },
          { title: "Fine", key: "enddate" },
          { title: "Cliente", key: "cliente" },
          { title: "Resp.", key: "ownername" },
          { title: "Stato", key: "statuscoded" },
          { title: "Aperto", key: "openstatuscoded" },
          { title: "Note", key: "note" },
          { title: "Note Addendum", key: "noteaddendum" },
          { title: "Totale proposta", key: "totaleproposta" },
          { title: "Incremento", key: "incrementoproposta" },
          { title: "Tipo incremento", key: "tipoincrementoproposta" },
          { title: "Sconto", key: "scontoproposta" },
          { title: "Tipo sconto", key: "tiposcontoproposta" },
          { title: "Note Incremento", key: "noteincremento" },
          { title: "Note Sconto", key: "notesconto" },
          { title: "Costo", key: "costoproposta" },
          { title: "Costo reale", key: "costopropostareal" },
          { title: "Tot. proposta attuale", key: "totalepropostamodified" },
          { title: "Costo proposta attuale", key: "costopropostamodified" },
          { title: "Nuovo totale proposta", key: "newtotaleproposta" },
          { title: "Progetto Interno", key: "internalproject" },
          { title: "Perc. di successo", key: "successpercent" },
          { title: "Perc. di split", key: "splitpercent" },
          { title: "Anno Split", key: "splityear" },
          { title: "Perc. di split anno succ.", key: "splitpercent1" },
          { title: "Anno Split succ.", key: "splityear1" },
        ],
        he = {
          code: (s, t) => {
            const n = (l) => {
                const d = String(l ?? "").match(/^PR(\d+)(\d{4})$/);
                return d ? { numero: Number(d[1]), anno: Number(d[2]) } : null;
              },
              i = n(s),
              e = n(t);
            return !i || !e
              ? String(s ?? "").localeCompare(String(t ?? ""), "it", {
                  numeric: !0,
                  sensitivity: "base",
                })
              : i.anno - e.anno || i.numero - e.numero;
          },
        },
        ee = p(null),
        E = p(!1),
        U = p([]),
        h = p([{ key: "cliente", order: "asc" }]),
        re = ie(() => Y.value);
      function xe(s, t, n) {
        let i = s[n],
          e = t[n];
        if (
          (n === "date" &&
            ((i = new Date(i).getTime()), (e = new Date(e).getTime())),
          typeof i == "number" && typeof e == "number")
        )
          return i - e;
        if (n === "code") {
          const l = (m) => {
              const z = String(m ?? "").match(/^PR(\d+)(\d{4})$/);
              return z ? { number: Number(z[1]), year: Number(z[2]) } : null;
            },
            d = l(i),
            r = l(e);
          if (d && r) return d.year - r.year || d.number - r.number;
        }
        return String(i ?? "").localeCompare(String(e ?? ""), "it", {
          numeric: !0,
          sensitivity: "base",
        });
      }
      function Pe() {
        const s = [...re.value];
        return h.value.length
          ? s.sort((t, n) => {
              for (const { key: i, order: e } of h.value) {
                const l = xe(t, n, i);
                if (l !== 0) return e === "desc" ? -l : l;
              }
              return 0;
            })
          : s;
      }
      Ke({
        title: "Progetti",
        meta: [{ name: "description", content: "Progetti" }],
      });
      function De(s) {
        (ee.value = s), (E.value = !0);
      }
      function je() {
        (ee.value = null), (E.value = !1);
      }
      function ne(s, t) {
        (oe.value = parseInt(s)), (Q.value = t), (O.value = !0);
      }
      function ze() {
        (O.value = !1), (Q.value = 0), H();
      }
      function _e(s) {
        ye.push("/tasks?id=" + s);
      }
      function se(s) {
        const { data: t } = G($.public.apiBaseurl + "project/delete/" + s, {
          onRequest({ request: n, options: i }) {},
          onRequestError({ request: n, options: i, error: e }) {
            console.log("Errore nella request:", e);
          },
          onResponseError({ request: n, response: i, options: e }) {
            R.value = {
              text: "Errore cancellazione progetto",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: n, response: i, options: e }) {
            (R.value = {
              text: "Progetto eliminato",
              type: "success",
              show: !0,
            }),
              H();
          },
        });
      }
      function Ne() {
        const t = Pe().map((l) => {
            const d = {};
            return (
              Ie.forEach((r) => {
                r.title == "Inizio" ||
                r.title == "Fine" ||
                r.title == "Creazione"
                  ? (d[r.title] =
                      l[r.key] && l[r.key] !== "0000-00-00"
                        ? new Date(l[r.key]).toLocaleDateString("it-IT")
                        : "")
                  : (d[r.title] = l[r.key] ?? "");
              }),
              d
            );
          }),
          n = _.utils.json_to_sheet(t),
          i = _.utils.decode_range(n["!ref"]);
        n["!cols"] = [
          { wch: 10 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 40 },
          { wch: 40 },
          { wch: 25 },
          { wch: 15 },
          { wch: 15 },
          { wch: 40 },
          { wch: 35 },
          { wch: 30 },
          { wch: 10 },
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 30 },
          { wch: 30 },
          { wch: 15 },
          { wch: 15 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 20 },
          { wch: 20 },
        ];
        for (let l = i.s.c; l <= i.e.c; l++) {
          const d = _.utils.encode_cell({ r: 0, c: l });
          n[d] && (n[d].s = { font: { bold: !0 } });
        }
        const e = _.utils.book_new();
        _.utils.book_append_sheet(e, n, "Progetti"),
          _.writeFile(e, "export-progetti.xlsx");
      }
      const Ae = async () => {
          (B.value = []), (U.value = []);
          const { data: s } = await G($.public.apiBaseurl + "user/list", {
            onRequest({ request: t, options: n }) {},
            onRequestError({ request: t, options: n, error: i }) {
              console.log("Errore nella request:", i);
            },
            onResponseError({ request: t, response: n, options: i }) {
              R.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: n, options: i }) {
              n._data.data.forEach((l) => {
                (U.value[l.id] = l.firstname + " " + l.lastname),
                  B.value.push({
                    id: l.id,
                    name: l.firstname + " " + l.lastname,
                    disabled: l.activeuser != 1,
                  });
              });
            },
          });
        },
        H = async () => {
          let s = A.value.role,
            t = A.value.id;
          (Y.value = []),
            localStorage.setItem(
              "hgfiltroprogetticliente",
              S.value != null ? S.value : null,
            ),
            localStorage.setItem(
              "hgfiltroprogettistato",
              C.value != null ? C.value : null,
            ),
            localStorage.setItem(
              "hgfiltroprogettiapertura",
              I.value != null ? I.value : null,
            ),
            localStorage.setItem(
              "hgfiltroprogettiresponsabile",
              j.value != null ? j.value : null,
            );
          let n = null,
            i = null;
          b.value != null && b.value.length > 0
            ? (localStorage.setItem("hgfiltroprogetticreazione", b.value),
              (n = b.value[0].toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })),
              (i = b.value[1].toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })))
            : localStorage.setItem("hgfiltroprogetticreazione", null);
          let e = {
            client: S.value != null ? S.value : 0,
            status: C.value != null ? C.value : [],
            openstatus: I.value != null ? I.value : 0,
            responsabile: j.value,
            from: n,
            to: i,
          };
          try {
            const { data: l, status: d } = await G(
              $.public.apiBaseurl + "project/completelist",
              { method: "POST", body: e },
            );
            l.forEach((r) => {
              let m = r.Project;
              (m.cliente = r.Client.name),
                (m.color = r.Projectcolor.color),
                (m.statuscoded = Z.filter(
                  ({ code: x }) => x === r.Project.status,
                )
                  .map(({ name: x }) => x)
                  .slice(0, 1)
                  .shift()),
                (m.openstatuscoded = r.Project.openstatus == "A" ? "Si" : "No"),
                (m.typecoded =
                  r.Project.type == "N"
                    ? "Normale"
                    : r.Project.type == "A"
                      ? "Amministrativo"
                      : r.Project.type == "F"
                        ? "Ferie/Permessi/Malattia"
                        : ""),
                (m.internalproject =
                  r.Project.internalproject == 1 ? "Si" : "No"),
                (m.tipoincrementoproposta =
                  r.Project.tipoincrementoproposta == "V"
                    ? "Valore"
                    : "Percentuale"),
                (m.tiposcontoproposta =
                  r.Project.tiposcontoproposta == "V"
                    ? "Valore"
                    : "Percentuale"),
                (m.tipoincrementopropostacr =
                  r.Project.tipoincrementopropostacr == "V"
                    ? "Valore"
                    : "Percentuale"),
                (m.tiposcontopropostacr =
                  r.Project.tiposcontopropostacr == "V"
                    ? "Valore"
                    : "Percentuale"),
                (m.successpercent =
                  r.Project.status == "I" ? r.Project.successpercent : 0),
                (m.startdate =
                  r.Project.startdate != null ? r.Project.startdate : ""),
                (m.enddate =
                  r.Project.enddate != null ? r.Project.enddate : "");
              let z = [],
                K = "";
              r?.Projectuser.forEach((x) => {
                z.push(x.user_id),
                  (K =
                    K == ""
                      ? U.value[x.user_id]
                      : K + ", " + U.value[x.user_id]);
              }),
                (m.ownername = K),
                s == "S" || s == "A" || z.includes(t) == !0
                  ? (m.caneditproject = !0)
                  : (m.caneditproject = !1),
                Y.value.push(m);
            });
          } catch (l) {
            console.log(l);
            let d = JSON.parse(l.data).errors.title;
            console.log("catcherr", l.data),
              (R.value = { text: d, type: "danger", show: !0 });
            return;
          }
        },
        Re = async () => {
          ve.value = A.value.id;
        };
      function te() {
        Se.value = window.innerWidth <= 960;
      }
      const Ee = async () => {
        const { data: s } = await G($.public.apiBaseurl + "client/list", {
          onRequest({ request: t, options: n }) {},
          onRequestError({ request: t, options: n, error: i }) {
            console.log("Errore nella request:", i);
          },
          onResponseError({ request: t, response: n, options: i }) {
            R.value = {
              text: "Errore caricamento clienti",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: t, response: n, options: i }) {
            W.value = n._data.data;
          },
        });
      };
      return (
        Oe(async () => {
          te(),
            window.addEventListener("resize", te),
            await Re(),
            await Ae(),
            await Ee(),
            await H();
          const s = localStorage.getItem("hgfiltroordinamentoprogetti");
          s && (h.value = JSON.parse(s));
        }),
        Be(
          () => h.value,
          (s) => {
            localStorage.setItem(
              "hgfiltroordinamentoprogetti",
              JSON.stringify(s),
            );
          },
          { deep: !0 },
        ),
        Fe(() => {
          window.removeEventListener("resize", te);
        }),
        (s, t) => {
          const n = Te,
            i = qe;
          return (
            f(),
            P("div", st, [
              k("div", it, [
                t[32] || (t[32] = k("br", null, null, -1)),
                t[33] ||
                  (t[33] = k(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Progetti",
                    -1,
                  )),
                k("div", ut, [
                  u(A).hasprojects == 1
                    ? (f(),
                      v(
                        T,
                        {
                          key: 0,
                          onClick: t[0] || (t[0] = (e) => ne(0, 0)),
                          color: "green",
                        },
                        {
                          default: o(() => [
                            a(V, null, {
                              default: o(() => [
                                ...(t[12] || (t[12] = [c("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            t[13] || (t[13] = c("Crea progetto", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : g("", !0),
                  t[16] || (t[16] = c()),
                  a(
                    T,
                    { class: "mr-3", color: "primary", onClick: Ne },
                    {
                      default: o(() => [
                        a(
                          V,
                          { class: "mr-3" },
                          {
                            default: o(() => [
                              ...(t[14] || (t[14] = [c("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        t[15] || (t[15] = c(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[34] ||
                  (t[34] = k("div", { style: { clear: "both" } }, null, -1)),
                a(
                  de,
                  { "no-gutters": "" },
                  {
                    default: o(() => [
                      a(
                        D,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: o(() => [
                            a(
                              X,
                              {
                                class: "ma-2",
                                density: "compact",
                                modelValue: u(S),
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = (e) => (w(S) ? (S.value = e) : null)),
                                items: u(W),
                                label: "Clienti",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "id",
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
                      a(
                        D,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: o(() => [
                            a(
                              X,
                              {
                                class: "ma-2",
                                density: "compact",
                                multiple: "",
                                chips: "",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: u(C),
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = (e) => (w(C) ? (C.value = e) : null)),
                                items: Z,
                                label: "Stato",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "code",
                                clearable: "",
                              },
                              {
                                chip: o(({ item: e, props: l }) => [
                                  a(
                                    N,
                                    J(l, {
                                      color: e.raw.color,
                                      variant: "elevated",
                                      label: "",
                                      size: "small",
                                    }),
                                    {
                                      default: o(() => [c(y(e.raw.name), 1)]),
                                      _: 2,
                                    },
                                    1040,
                                    ["color"],
                                  ),
                                ]),
                                item: o(({ item: e, props: l }) => [
                                  a(
                                    q,
                                    J(l, { title: "" }),
                                    {
                                      prepend: o(() => [
                                        a(
                                          N,
                                          {
                                            color: e.raw.color,
                                            variant: "elevated",
                                            label: "",
                                            size: "x-small",
                                            class: "mr-2",
                                          },
                                          {
                                            default: o(() => [
                                              c(y(e.raw.code), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["color"],
                                        ),
                                      ]),
                                      default: o(() => [
                                        a(
                                          L,
                                          null,
                                          {
                                            default: o(() => [
                                              c(y(e.raw.name), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1024,
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1040,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      a(
                        D,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: o(() => [
                            a(
                              X,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                modelValue: u(I),
                                "onUpdate:modelValue":
                                  t[3] ||
                                  (t[3] = (e) => (w(I) ? (I.value = e) : null)),
                                items: Ve,
                                "no-data-text": "Nessun risultato trovato",
                                label: "Stato apertura",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "code",
                                clearable: "",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      a(
                        D,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: o(() => [
                            a(
                              X,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                modelValue: u(j),
                                "onUpdate:modelValue":
                                  t[4] ||
                                  (t[4] = (e) => (w(j) ? (j.value = e) : null)),
                                items: u(B),
                                "no-data-text": "Nessun risultato trovato",
                                label: "Responsabile di Progetto",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "id",
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
                      a(
                        D,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: o(() => [
                            a(
                              u(He),
                              {
                                modelValue: u(b),
                                "onUpdate:modelValue":
                                  t[5] ||
                                  (t[5] = (e) => (w(b) ? (b.value = e) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": u(nt),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": u(ge),
                                clearable: !0,
                                placeholder: "Data Creazione Progetto",
                              },
                              {
                                "preset-date-range-button": o(
                                  ({ label: e, value: l, presetDate: d }) => [
                                    k(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (r) => d(l),
                                        onKeyup: [
                                          ue(
                                            ce((r) => d(l), ["prevent"]),
                                            ["enter"],
                                          ),
                                          ue(
                                            ce((r) => d(l), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      y(e),
                                      41,
                                      ct,
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
                      a(
                        D,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: o(() => [
                            a(
                              T,
                              {
                                class: "ma-2",
                                onClick: t[6] || (t[6] = (e) => H()),
                              },
                              {
                                default: o(() => [
                                  a(V, null, {
                                    default: o(() => [
                                      ...(t[17] ||
                                        (t[17] = [c("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  t[18] || (t[18] = c("Cerca", -1)),
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
                a(
                  de,
                  { "no-gutters": "" },
                  {
                    default: o(() => [
                      a(D, null, {
                        default: o(() => [
                          a(
                            We,
                            {
                              density: "compact",
                              autocomplete: "off",
                              variant: "outlined",
                              modelValue: u(F),
                              "onUpdate:modelValue":
                                t[7] ||
                                (t[7] = (e) => (w(F) ? (F.value = e) : null)),
                              items: ae.filter((e) => !le.includes(e.key)),
                              "item-title": "title",
                              "item-value": "key",
                              label: "Colonne visibili",
                              multiple: "",
                              chips: "",
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
                a(
                  Je,
                  {
                    density: "compact",
                    items: u(re),
                    headers: u(Ce),
                    search: u(M),
                    "items-per-page": 25,
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
                    "sort-by": u(h),
                    "onUpdate:sortBy":
                      t[9] || (t[9] = (e) => (w(h) ? (h.value = e) : null)),
                    "custom-key-sort": he,
                  },
                  {
                    top: o(() => [
                      a(
                        Ze,
                        {
                          density: "compact",
                          modelValue: u(M),
                          "onUpdate:modelValue":
                            t[8] ||
                            (t[8] = (e) => (w(M) ? (M.value = e) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca nei risultati",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.name": o(({ item: e }) => [
                      c(y(e.name) + " ", 1),
                      e.internalproject == "Si"
                        ? (f(),
                          v(
                            N,
                            {
                              key: 0,
                              label: "",
                              size: "x-small",
                              variant: "outlined",
                              style: { color: "grey" },
                            },
                            {
                              default: o(() => [
                                ...(t[19] || (t[19] = [c("Interno", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : g("", !0),
                      e.type == "A"
                        ? (f(),
                          v(
                            N,
                            {
                              key: 1,
                              label: "",
                              size: "x-small",
                              variant: "outlined",
                              style: { color: "blue", "margin-left": "5px" },
                            },
                            {
                              default: o(() => [
                                ...(t[20] || (t[20] = [c("Ammin.", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : g("", !0),
                      e.type == "F"
                        ? (f(),
                          v(
                            N,
                            {
                              key: 2,
                              label: "",
                              size: "x-small",
                              variant: "outlined",
                              style: { color: "green", "margin-left": "5px" },
                            },
                            {
                              default: o(() => [
                                ...(t[21] || (t[21] = [c("Ferie", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : g("", !0),
                    ]),
                    "item.startdate": o(({ item: e }) => [
                      e.startdate != ""
                        ? (f(),
                          P(
                            "span",
                            dt,
                            y(
                              new Date(e.startdate).toLocaleDateString("it-IT"),
                            ),
                            1,
                          ))
                        : g("", !0),
                    ]),
                    "item.created": o(({ item: e }) => [
                      e.created != ""
                        ? (f(),
                          P(
                            "span",
                            pt,
                            y(new Date(e.created).toLocaleDateString("it-IT")),
                            1,
                          ))
                        : g("", !0),
                    ]),
                    "item.enddate": o(({ item: e }) => [
                      e.enddate != ""
                        ? (f(),
                          P(
                            "span",
                            mt,
                            y(new Date(e.enddate).toLocaleDateString("it-IT")),
                            1,
                          ))
                        : g("", !0),
                    ]),
                    "item.code": o(({ item: e }) => [
                      k("span", { title: e.id }, y(e.code), 9, ft),
                      (e.status == "I" || e.status == "H") &&
                      new Date(
                        new Date(e.startdate).setMonth(
                          new Date(e.startdate).getMonth() + 3,
                        ),
                      ) < new Date()
                        ? (f(),
                          v(
                            Qe,
                            { key: 0, interactive: "" },
                            {
                              activator: o(({ props: l }) => [
                                a(
                                  V,
                                  J({ style: { color: "orange" } }, l),
                                  {
                                    default: o(() => [
                                      ...(t[22] ||
                                        (t[22] = [c("mdi-alert-outline", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                  16,
                                ),
                              ]),
                              default: o(() => [
                                t[23] ||
                                  (t[23] = k(
                                    "div",
                                    null,
                                    " Progetto da attenzionare: sono passati oltre 3 mesi dall'inizio del progetto e risulta in Discussione/Hold ",
                                    -1,
                                  )),
                              ]),
                              _: 1,
                            },
                          ))
                        : g("", !0),
                    ]),
                    "item.color": o(({ item: e }) => [
                      a(
                        N,
                        {
                          class: "ma-2",
                          variant: "elevated",
                          size: "x-small",
                          label: "",
                          color: e.color,
                        },
                        null,
                        8,
                        ["color"],
                      ),
                    ]),
                    "item._totaleprogetto": o(({ item: e }) => [
                      c(
                        y(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(
                            e.newtotaleproposta != 0
                              ? e.newtotaleproposta
                              : e._totaleprogetto,
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.successpercent": o(({ item: e }) => [
                      e.status == "I"
                        ? (f(),
                          P(
                            "span",
                            gt,
                            y(
                              new Intl.NumberFormat("it-IT", {
                                useGrouping: !0,
                              }).format(e.successpercent),
                            ) + " %",
                            1,
                          ))
                        : g("", !0),
                    ]),
                    "item.statuscoded": o(({ item: e }) => [
                      e.status == "D"
                        ? (f(),
                          P(
                            "span",
                            {
                              key: 0,
                              class: "me-2",
                              style: { color: "red" },
                              title: e.statuscoded,
                            },
                            y(e.status),
                            9,
                            yt,
                          ))
                        : (f(),
                          P(
                            "span",
                            {
                              key: 1,
                              class: "me-2",
                              size: "large",
                              title: e.statuscoded,
                            },
                            y(e.status),
                            9,
                            vt,
                          )),
                    ]),
                    "item.openstatus": o(({ item: e }) => [
                      e.openstatus == "A"
                        ? (f(),
                          v(
                            V,
                            {
                              key: 0,
                              class: "me-2",
                              size: "large",
                              color: "green",
                              title: "Aperto",
                            },
                            {
                              default: o(() => [
                                ...(t[24] ||
                                  (t[24] = [c("mdi-check-bold", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : g("", !0),
                    ]),
                    "item.actions": o(({ item: e }) => [
                      a(
                        Xe,
                        { "offset-y": "" },
                        {
                          activator: o(({ props: l }) => [
                            a(
                              T,
                              J(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                l,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: o(() => [
                            k("div", kt, [
                              a(
                                Ye,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: o(() => [
                                    e.note != null && e.note != ""
                                      ? (f(),
                                        v(
                                          q,
                                          {
                                            key: 0,
                                            onClick: (l) => De(e.note),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              a(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(t[25] ||
                                                      (t[25] = [
                                                        c(
                                                          "mdi-information-outline",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              a(
                                                L,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(t[26] ||
                                                      (t[26] = [
                                                        c("Info", -1),
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
                                      : g("", !0),
                                    a(
                                      q,
                                      {
                                        onClick: (l) => _e(e.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: o(() => [
                                          a(
                                            V,
                                            { style: { opacity: "1" } },
                                            {
                                              default: o(() => [
                                                ...(t[27] ||
                                                  (t[27] = [
                                                    c(
                                                      "mdi-text-box-search-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: o(() => [
                                          a(
                                            L,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: o(() => [
                                                ...(t[28] ||
                                                  (t[28] = [
                                                    c("Dettagli", -1),
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
                                    ),
                                    u(A)?.hasprojects == 1
                                      ? (f(),
                                        v(
                                          q,
                                          {
                                            key: 1,
                                            onClick: (l) => ne(e.id, 1),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: o(() => [
                                              a(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: o(() => [
                                                    ...(t[29] ||
                                                      (t[29] = [
                                                        c(
                                                          "mdi-content-copy",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: o(() => [
                                              a(
                                                L,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    ...(t[30] ||
                                                      (t[30] = [
                                                        c("Duplica", -1),
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
                                      : g("", !0),
                                    e.caneditproject
                                      ? (f(),
                                        v(
                                          q,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: o(() => [
                                              a(
                                                L,
                                                {
                                                  onClick: (l) => se(e.id),
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: o(() => [
                                                    a(
                                                      n,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (l) =>
                                                          se(e.id),
                                                        iconadelete: u(ke),
                                                        color: "red",
                                                        text:
                                                          "Vuoi veramente eliminare il progetto " +
                                                          e.name +
                                                          " [" +
                                                          e.code +
                                                          "]?",
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "onDelete",
                                                        "iconadelete",
                                                        "text",
                                                      ],
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["onClick"],
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024,
                                        ))
                                      : g("", !0),
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
                  ["items", "headers", "search", "sort-by"],
                ),
                a(
                  Ge,
                  {
                    modelValue: u(E),
                    "onUpdate:modelValue":
                      t[11] || (t[11] = (e) => (w(E) ? (E.value = e) : null)),
                    "max-width": "400",
                    persistent: "",
                  },
                  {
                    default: o(() => [
                      a(
                        et,
                        { class: "pa-2" },
                        {
                          default: o(() => [
                            a(tt, null, {
                              default: o(() => [c(y(u(ee)), 1)]),
                              _: 1,
                            }),
                            a(ot, null, {
                              default: o(() => [
                                a(lt),
                                a(
                                  T,
                                  {
                                    color: "#A5161E",
                                    onClick: t[10] || (t[10] = (e) => je()),
                                  },
                                  {
                                    default: o(() => [
                                      ...(t[31] || (t[31] = [c("Chiudi", -1)])),
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
                u(O)
                  ? (f(),
                    v(
                      i,
                      {
                        key: 0,
                        stati: Z,
                        statiuser: be,
                        statiadmin: we,
                        users: u(B),
                        clone: u(Q),
                        clients: u(W),
                        dialoginsmod: u(O),
                        idrec: u(oe),
                        onClose: ze,
                      },
                      null,
                      8,
                      ["users", "clone", "clients", "dialoginsmod", "idrec"],
                    ))
                  : g("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { no as default };
