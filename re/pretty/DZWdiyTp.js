import { _ as ce } from "./ClyIuovc.js";
import {
  r as p,
  u as pe,
  E as ue,
  G as de,
  o as me,
  as as ge,
  e as fe,
  x as M,
  z as f,
  B as n,
  C as s,
  M as V,
  L as u,
  n as ye,
  y as $,
  D as m,
  N as U,
  O as F,
  A as k,
  P as ve,
  K as we,
} from "./CYsiv7Qj.js";
import { x as b } from "./D16A7lth.js";
import { V as ke } from "./B_hTT4u_.js";
import { u as be } from "./LKQL6vAN.js";
import { $ as x } from "./BvG7V8Ak.js";
import { V as R, a as T } from "./B_W9U9Wp.js";
import { V as he, a as I } from "./Bj0ZT2dB.js";
import { V as Se } from "./ss-1h9Hv.js";
import { V as H } from "./DCAzZvgN.js";
import { V as Pe, a as Ve, b as J, c as K } from "./CxBYvc7u.js";
import { V as xe } from "./BrCrqdgZ.js";
import { s as X, a as je, e as Ce, b as Y } from "./B5S3s6V6.js";
import { e as G } from "./DRW0ieNg.js";
import { i as _e } from "./BIFx5Ami.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./Cv1q1CuH.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Ie = { class: "pl-10 pr-10" },
  De = { class: "divcenterpage" },
  Ee = { style: { display: "inline", float: "right" } },
  qe = ["onClick", "onKeyup"],
  Ne = ["title"],
  Re = { key: 0 },
  Te = { class: "mt-4" },
  mt = {
    __name: "histories",
    setup(ze) {
      const g = p(
          localStorage.getItem("hgfiltroprogetticreazionestorico") != "null" &&
            localStorage.getItem("hgfiltroprogetticreazionestorico") != null
            ? localStorage
                .getItem("hgfiltroprogetticreazionestorico")
                .split(",")
                .map((c) => new Date(c))
            : [],
        ),
        W = p([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [X(new Date()), G(new Date())] },
          {
            label: "Mese precedente",
            value: [X(Y(new Date(), 1)), G(Y(new Date(), 1))],
          },
          { label: "Anno corrente", value: [je(new Date()), Ce(new Date())] },
        ]),
        h = ye(),
        Q = pe(),
        { status: Oe, signIn: Le, signOut: Ae, data: Be } = ue(),
        S = p([]),
        j = p(""),
        y = de("snackbar"),
        Z = p(!0),
        D = p([]),
        C = p([]),
        E = [
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
        z = p([]),
        ee = p(!1),
        te = [
          {
            title: "Codice Progetto",
            key: "code",
            sortable: !0,
            align: "left",
            sortRaw: (c, t) => {
              const r = (l) => ({
                  anno: Number(l.code.slice(-4)),
                  numero: Number(l.code.slice(2, -4)),
                }),
                e = r(c),
                o = r(t);
              return e.anno === o.anno ? e.numero - o.numero : e.anno - o.anno;
            },
          },
          { title: "Nome Progetto", key: "name", sortable: !0, align: "left" },
          { title: "Cliente", key: "cliente", sortable: !0, align: "left" },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          {
            title: "Vecchio Valore",
            key: "oldvaluecoded",
            sortable: !0,
            align: "left",
          },
          {
            title: "Nuovo Valore",
            key: "newvaluecoded",
            sortable: !0,
            align: "left",
          },
          {
            title: "Data/ora creazione",
            key: "created",
            sortable: !0,
            align: "left",
          },
          { title: "Utente", key: "user_id", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        oe = [
          { title: "ID Storico", key: "id" },
          { title: "Codice Progetto", key: "code" },
          { title: "Nome Progetto", key: "name" },
          { title: "Cliente", key: "cliente" },
          { title: "Tipo", key: "type" },
          { title: "Vecchio Valore", key: "oldvaluecoded" },
          { title: "Nuovo Valore", key: "newvaluecoded" },
          { title: "Data/ora creazione", key: "created" },
          { title: "Utente", key: "user_id" },
          { title: "Inizio P.", key: "startdate" },
          { title: "Fine  P.", key: "enddate" },
          { title: "Resp.", key: "ownername" },
          { title: "Stato", key: "statuscoded" },
          { title: "Aperto", key: "openstatuscoded" },
          { title: "Note", key: "note" },
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
        ],
        v = p(
          localStorage.getItem("hgfiltroprogettiprogettostorico") != "null" &&
            localStorage.getItem("hgfiltroprogettiprogettostorico") != null
            ? parseInt(localStorage.getItem("hgfiltroprogettiprogettostorico"))
            : null,
        ),
        q = p([]),
        O = p([]),
        _ = p([]),
        P = p([
          { key: "code", order: "asc" },
          { key: "created", order: "asc" },
        ]),
        L = {
          C: "Creazione Progetto",
          P: "Pulsante",
          O: "Cambio Owner/s",
          S: "Cambio Stato",
        },
        ae = [
          { value: "C", label: "Creazione Progetto" },
          { value: "P", label: "Pulsante" },
          { value: "O", label: "Cambio Owner/s" },
          { value: "S", label: "Cambio Stato" },
        ],
        w = p(
          localStorage.getItem("hgfiltroprogettitipostorico") != "null" &&
            localStorage.getItem("hgfiltroprogettitipostorico") != null
            ? localStorage.getItem("hgfiltroprogettitipostorico")
            : null,
        );
      be({
        title: "Storici Progetti",
        meta: [{ name: "description", content: "Storici Progetti" }],
      });
      function re(c, t) {
        Q.push("/tasks?id=" + c + "&storico=" + t);
      }
      function A(c) {
        const { data: t } = x(
          h.public.apiBaseurl + "projecthistory/delete/" + c,
          {
            onRequest({ request: r, options: e }) {},
            onRequestError({ request: r, options: e, error: o }) {
              console.log("Errore nella request:", o);
            },
            onResponseError({ request: r, response: e, options: o }) {
              y.value = {
                text: "Errore cancellazione storico progetto",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: r, response: e, options: o }) {
              (y.value = {
                text: "Storico progetto eliminato",
                type: "success",
                show: !0,
              }),
                getHistories();
            },
          },
        );
      }
      function le() {
        const c = S.value.map((o) => {
            const l = {};
            return (
              oe.forEach((a) => {
                a.title == "Inizio" || a.title == "Fine"
                  ? (l[a.title] =
                      o[a.key] && o[a.key] !== "0000-00-00"
                        ? new Date(o[a.key]).toLocaleDateString("it-IT")
                        : "")
                  : a.title == "Data/ora creazione"
                    ? (l[a.title] =
                        new Date(o[a.key]).toLocaleDateString("it-IT") +
                        " " +
                        new Date(o[a.key]).toLocaleTimeString("it-IT"))
                    : a.title == "Cliente"
                      ? (l[a.title] = C.value[o[a.key]])
                      : a.title == "Utente"
                        ? (l[a.title] = _.value[o[a.key]])
                        : a.title == "Tipo"
                          ? (l[a.title] = L[o[a.key]])
                          : (l[a.title] = o[a.key] ?? "");
              }),
              l
            );
          }),
          t = b.utils.json_to_sheet(c),
          r = b.utils.decode_range(t["!ref"]);
        t["!cols"] = [
          { wch: 10 },
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
          { wch: 20 },
          { wch: 40 },
          { wch: 40 },
          { wch: 20 },
          { wch: 35 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 30 },
          { wch: 15 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 25 },
          { wch: 25 },
          { wch: 25 },
          { wch: 15 },
          { wch: 15 },
        ];
        for (let o = r.s.c; o <= r.e.c; o++) {
          const l = b.utils.encode_cell({ r: 0, c: o });
          t[l] && (t[l].s = { font: { bold: !0 } });
        }
        const e = b.utils.book_new();
        b.utils.book_append_sheet(e, t, "Storico-Progetti"),
          b.writeFile(e, "export-Storico-Progetti.xlsx");
      }
      const se = async () => {
          (z.value = []), (_.value = []);
          const { data: c } = await x(h.public.apiBaseurl + "user/list", {
            onRequest({ request: t, options: r }) {},
            onRequestError({ request: t, options: r, error: e }) {
              console.log("Errore nella request:", e);
            },
            onResponseError({ request: t, response: r, options: e }) {
              y.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: r, options: e }) {
              r._data.data.forEach((l) => {
                (_.value[l.id] = l.firstname + " " + l.lastname),
                  z.value.push({
                    id: l.id,
                    name: l.firstname + " " + l.lastname,
                  });
              });
            },
          });
        },
        B = async () => {
          (S.value = []),
            localStorage.setItem(
              "hgfiltroprogettiprogettostorico",
              v.value != null ? v.value : null,
            ),
            localStorage.setItem(
              "hgfiltroprogettitipostorico",
              w.value != null ? w.value : null,
            );
          let c = null,
            t = null;
          g.value != null && g.value.length > 0
            ? (localStorage.setItem(
                "hgfiltroprogetticreazionestorico",
                g.value,
              ),
              (c = g.value[0].toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })),
              (t = g.value[1].toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })))
            : localStorage.setItem("hgfiltroprogetticreazionestorico", null);
          let r = {
            type: w.value != null ? w.value : 0,
            project: v.value != null ? v.value : 0,
            from: c,
            to: t,
          };
          try {
            const { data: e, status: o } = await x(
              h.public.apiBaseurl + "projecthistory/historieslist",
              { method: "POST", body: r },
            );
            e.forEach((l) => {
              let a = l.Projecthistory,
                i = JSON.parse(a.history);
              S.value.push({
                id: a.id,
                type: a.type,
                newvalue: a.newvalue,
                oldvalue: a.oldvalue,
                newvaluecoded:
                  a.type == "S"
                    ? E.filter(({ code: d }) => d === a.newvalue)
                        .map(({ name: d }) => d)
                        .slice(0, 1)
                        .shift()
                    : a.newvalue,
                oldvaluecoded:
                  a.type == "S"
                    ? E.filter(({ code: d }) => d === a.oldvalue)
                        .map(({ name: d }) => d)
                        .slice(0, 1)
                        .shift()
                    : a.oldvalue,
                created: a.created,
                user_id: a.user_id,
                project_id: a.project_id,
                code: i.Project.code,
                name: i.Project.name,
                cliente: i.Project.client_id,
                startdate: i.Project.startdate,
                enddate: i.Project.enddate,
                ownername: i.Project.ownersname.join(","),
                statuscoded: E.filter(({ code: d }) => d === i.Project.status)
                  .map(({ name: d }) => d)
                  .slice(0, 1)
                  .shift(),
                openstatuscoded: i.Project.openstatuscoded == "A" ? "Si" : "No",
                note: i.Project.note,
                totaleproposta: i.Project.totaleproposta,
                incrementoproposta: i.Project.incrementoproposta,
                tipoincrementoproposta:
                  i.Project.tipoincrementoproposta == "V"
                    ? "Valore"
                    : "Percentuale",
                scontoproposta: i.Project.scontoproposta,
                tiposcontoproposta:
                  i.Project.tiposcontoproposta == "V"
                    ? "Valore"
                    : "Percentuale",
                noteincremento: i.Project.noteincremento,
                notesconto: i.Project.notesconto,
                costoproposta: i.Project.costoproposta,
                costopropostareal: i.Project.costopropostareal,
                totalepropostamodified: i.Project.totalepropostamodified,
                costopropostamodified: i.Project.costopropostamodified,
                newtotaleproposta: i.Project.newtotaleproposta,
                internalproject: i.Project.internalproject == 1 ? "Si" : "No",
                successpercent: i.Project.successpercent,
              });
            }),
              console.log(S.value);
          } catch (e) {
            console.log(e);
            let o = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (y.value = { text: o, type: "danger", show: !0 });
            return;
          }
        };
      function N() {
        ee.value = window.innerWidth <= 960;
      }
      const ie = async () => {
          (D.value = []), (C.value = []);
          const { data: c } = await x(h.public.apiBaseurl + "client/list", {
            onRequest({ request: t, options: r }) {},
            onRequestError({ request: t, options: r, error: e }) {
              console.log("Errore nella request:", e);
            },
            onResponseError({ request: t, response: r, options: e }) {
              y.value = {
                text: "Errore caricamento clienti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: t, response: r, options: e }) {
              (D.value = r._data.data),
                D.value.forEach((o) => {
                  C.value[o.id] = o.name;
                });
            },
          });
        },
        ne = async () => {
          (q.value = []), (O.value = []);
          const { data: c } = await x(h.public.apiBaseurl + "project/list/", {
            onRequest({ request: t, options: r }) {},
            onRequestError({ request: t, options: r, error: e }) {
              console.log("Errore nella request:", e),
                (y.value = { text: "Errore: " + e, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: r, options: e }) {
              console.log(
                "Errore nella response: " + r._data.error.messages[0],
              ),
                (y.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: r, options: e }) {
              r._data.data.forEach((o) => {
                q.value.push({
                  label: "[" + o.code + "] " + o.name,
                  value: o.id,
                }),
                  (O.value[o.id] = "[" + o.code + "] " + o.name);
              });
            },
          });
        };
      return (
        me(async () => {
          N(),
            window.addEventListener("resize", N),
            await se(),
            await ne(),
            await ie(),
            await B();
          const c = localStorage.getItem("hgfiltroordinamentostoricoprogetti");
          c && (P.value = JSON.parse(c));
        }),
        ge(
          () => P.value,
          (c) => {
            localStorage.setItem(
              "hgfiltroordinamentostoricoprogetti",
              JSON.stringify(c),
            );
          },
          { deep: !0 },
        ),
        fe(() => {
          window.removeEventListener("resize", N);
        }),
        (c, t) => {
          const r = ce;
          return (
            $(),
            M("div", Ie, [
              f("div", De, [
                t[12] || (t[12] = f("br", null, null, -1)),
                t[13] ||
                  (t[13] = f(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Storici",
                    -1,
                  )),
                f("div", Ee, [
                  n(
                    R,
                    { class: "mr-3", color: "primary", onClick: le },
                    {
                      default: s(() => [
                        n(
                          T,
                          { class: "mr-3" },
                          {
                            default: s(() => [
                              ...(t[6] || (t[6] = [m("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        t[7] || (t[7] = m(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                t[14] ||
                  (t[14] = f("div", { style: { clear: "both" } }, null, -1)),
                n(
                  he,
                  { "no-gutters": "" },
                  {
                    default: s(() => [
                      n(
                        I,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: s(() => [
                            n(
                              H,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: u(v),
                                "onUpdate:modelValue":
                                  t[0] ||
                                  (t[0] = (e) => (V(v) ? (v.value = e) : null)),
                                items: u(q),
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
                      n(
                        I,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: s(() => [
                            n(
                              H,
                              {
                                class: "ma-2",
                                density: "compact",
                                autocomplete: "off",
                                "no-data-text": "Nessun risultato trovato",
                                modelValue: u(w),
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = (e) => (V(w) ? (w.value = e) : null)),
                                items: ae,
                                label: "Tipo",
                                variant: "outlined",
                                "item-title": "label",
                                "item-value": "value",
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
                      n(
                        I,
                        { cols: "12", sm: "12", md: "3" },
                        {
                          default: s(() => [
                            n(
                              u(ke),
                              {
                                modelValue: u(g),
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = (e) => (V(g) ? (g.value = e) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": u(_e),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": u(W),
                                clearable: !0,
                                placeholder: "Data Creazione Storico",
                              },
                              {
                                "preset-date-range-button": s(
                                  ({ label: e, value: o, presetDate: l }) => [
                                    f(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (a) => l(o),
                                        onKeyup: [
                                          U(
                                            F((a) => l(o), ["prevent"]),
                                            ["enter"],
                                          ),
                                          U(
                                            F((a) => l(o), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      k(e),
                                      41,
                                      qe,
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
                      n(
                        I,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: s(() => [
                            n(
                              R,
                              {
                                class: "ma-2",
                                onClick: t[3] || (t[3] = (e) => B()),
                              },
                              {
                                default: s(() => [
                                  n(T, null, {
                                    default: s(() => [
                                      ...(t[8] ||
                                        (t[8] = [m("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  t[9] || (t[9] = m("Cerca", -1)),
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
                  Se,
                  {
                    density: "compact",
                    items: u(S),
                    headers: te,
                    search: u(j),
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
                    "sort-by": u(P),
                    "onUpdate:sortBy":
                      t[5] || (t[5] = (e) => (V(P) ? (P.value = e) : null)),
                  },
                  {
                    top: s(() => [
                      n(
                        xe,
                        {
                          density: "compact",
                          modelValue: u(j),
                          "onUpdate:modelValue":
                            t[4] ||
                            (t[4] = (e) => (V(j) ? (j.value = e) : null)),
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
                    "item.code": s(({ item: e }) => [
                      f("span", { title: e.id }, k(e.code), 9, Ne),
                    ]),
                    "item.user_id": s(({ item: e }) => [
                      m(k(u(_)[e.user_id]), 1),
                    ]),
                    "item.cliente": s(({ item: e }) => [
                      e.cliente != 0
                        ? ($(), M("span", Re, k(u(C)[e.cliente]), 1))
                        : we("", !0),
                    ]),
                    "item.type": s(({ item: e }) => [m(k(L[e.type]), 1)]),
                    "item.created": s(({ item: e }) => [
                      m(
                        k(new Date(e.created).toLocaleDateString("it-IT")) +
                          " " +
                          k(new Date(e.created).toLocaleTimeString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.actions": s(({ item: e }) => [
                      n(
                        Pe,
                        { "offset-y": "" },
                        {
                          activator: s(({ props: o }) => [
                            n(
                              R,
                              ve(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                o,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: s(() => [
                            f("div", Te, [
                              n(
                                Ve,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: s(() => [
                                    n(
                                      J,
                                      {
                                        onClick: (o) => re(e.project_id, e.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: s(() => [
                                          n(
                                            T,
                                            { style: { opacity: "1" } },
                                            {
                                              default: s(() => [
                                                ...(t[10] ||
                                                  (t[10] = [
                                                    m(
                                                      "mdi-text-box-search-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: s(() => [
                                          n(
                                            K,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: s(() => [
                                                ...(t[11] ||
                                                  (t[11] = [
                                                    m("Dettagli", -1),
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
                                    n(
                                      J,
                                      { dense: "", exact: "" },
                                      {
                                        default: s(() => [
                                          n(
                                            K,
                                            {
                                              onClick: (o) => A(e.id),
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: s(() => [
                                                n(
                                                  r,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (o) => A(e.id),
                                                    iconadelete: u(Z),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare lo storico " +
                                                      e.id +
                                                      "?",
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
                                    ),
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
                  ["items", "search", "sort-by"],
                ),
              ]),
            ])
          );
        }
      );
    },
  };
export { mt as default };
