import { _ as re } from "./B3TT-sRk.js";
import "./B_hTT4u_.js";
import {
  r as n,
  u as ie,
  E as ue,
  G as de,
  o as ce,
  e as me,
  x as w,
  z as r,
  B as l,
  J as f,
  K as g,
  D as i,
  L as u,
  C as a,
  n as pe,
  y as m,
  M as q,
  Q as P,
  R as $,
  I as fe,
  A as k,
} from "./CYsiv7Qj.js";
import { u as ge } from "./LKQL6vAN.js";
import { $ as I } from "./BvG7V8Ak.js";
import { V as z, a as C } from "./B_W9U9Wp.js";
import { V as U, a as x } from "./Bj0ZT2dB.js";
import { V as B } from "./DCAzZvgN.js";
import { V as ve } from "./sbneMOUU.js";
import { V as H } from "./Cv1q1CuH.js";
import { V as be } from "./BqujDEEl.js";
import { s as T, a as ye, e as we, b as K } from "./B5S3s6V6.js";
import { e as Y } from "./DRW0ieNg.js";
import "./MIubIMrV.js";
import "./BrCrqdgZ.js";
import "./61Go5SWW.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./CZzf1ihi.js";
import "./Bx6RXzqb.js";
import "./B51noTYL.js";
import "./Dlfzj7mx.js";
const ke = { class: "pl-10 pr-10" },
  Ce = { class: "divcenterpage" },
  xe = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Ve = { class: "ml-1 mb-2" },
  De = { class: "d-flex align-center justify-space-between mb-2" },
  je = { class: "text-subtitle-2 font-weight-medium" },
  Ae = { class: "text-body-2 text-medium-emphasis mb-3" },
  Se = { class: "d-flex align-center" },
  Ee = { key: 2 },
  rt = {
    __name: "kanprojects",
    setup(Re) {
      const M = n([
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate(),
        ),
        new Date(),
      ]);
      n([
        { label: "Oggi", value: [new Date(), new Date()] },
        { label: "Mese corrente", value: [T(new Date()), Y(new Date())] },
        {
          label: "Mese precedente",
          value: [T(K(new Date(), 1)), Y(K(new Date(), 1))],
        },
        { label: "Anno corrente", value: [ye(new Date()), we(new Date())] },
      ]);
      const D = pe(),
        J = ie(),
        { status: Fe, signIn: he, signOut: qe, data: O } = ue(),
        j = n([]);
      n("");
      const A = de("snackbar"),
        V = n(!1),
        G = n(0),
        L = n(0);
      n(!0);
      const v = n(null),
        S = n([]),
        E = n(0),
        N = [
          { code: "H", name: "On Hold", color: "#fcf6de" },
          { code: "S", name: "Da sviluppare", color: "#F2F6FA" },
          { code: "I", name: "In discussione", color: "#E4F5FF" },
          {
            code: "C",
            name: "Confermato – in attesa di contratto",
            color: "#eeccff",
          },
          { code: "A", name: "Approvato  / Siglato", color: "aliceblue" },
        ],
        p = n([
          { code: "H", name: "On Hold", color: "#fcf6de" },
          { code: "S", name: "Da sviluppare", color: "#F2F6FA" },
          { code: "I", name: "In discussione", color: "#E4F5FF" },
          {
            code: "C",
            name: "Confermato – in attesa di contratto",
            color: "#eeccff",
          },
          { code: "A", name: "Approvato  / Siglato", color: "aliceblue" },
        ]),
        Q = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
        ];
      n([]);
      const b = n({ code: "A", name: "Aperto" }),
        R = n([]),
        W = n(!1),
        _ = [
          { title: "ID", key: "id", sortable: !0, width: 30 },
          { title: "Codice", key: "code", sortable: !0, align: "left" },
          { title: "Nome", key: "name", sortable: !0, align: "left" },
          { title: "Inizio", key: "startdate", sortable: !0, align: "left" },
          { title: "Fine", key: "enddate", sortable: !0, align: "left" },
          { title: "Codice", key: "code", sortable: !0, align: "left" },
          { title: "Cliente", key: "cliente", sortable: !0, align: "left" },
          { title: "Stato", key: "status", sortable: !0, align: "left" },
          { title: "Aperto", key: "openstatus", sortable: !0, align: "left" },
        ];
      ge({
        title: "Progetti Kanban",
        meta: [{ name: "description", content: "Progetti Kanban" }],
      });
      function X(d) {
        J.push("/tasks?id=" + d);
      }
      function Z(d, e) {
        (L.value = parseInt(d)), (E.value = e), (V.value = !0);
      }
      function ee() {
        (V.value = !1), (E.value = 0), F();
      }
      function te() {
        const d = [],
          e = _.map((c) => c.title);
        d.push(e.join(","));
        for (const c of activities.value) {
          const y = _.map((ne) => {
            const se = c[ne.key];
            return `"${String(se ?? "").replace(/"/g, '""')}"`;
          });
          d.push(y.join(","));
        }
        const s = new Blob(
            [
              d.join(`
`),
            ],
            { type: "text/csv;charset=utf-8;" },
          ),
          t = URL.createObjectURL(s),
          o = document.createElement("a");
        (o.href = t),
          o.setAttribute("download", "exportprogetti.csv"),
          document.body.appendChild(o),
          o.click(),
          document.body.removeChild(o);
      }
      const oe = async () => {
          R.value = [];
          const { data: d } = await I(D.public.apiBaseurl + "user/list", {
            onRequest({ request: e, options: s }) {},
            onRequestError({ request: e, options: s, error: t }) {
              console.log("Errore nella request:", t);
            },
            onResponseError({ request: e, response: s, options: t }) {
              A.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: s, options: t }) {
              s._data.data.forEach((c) => {
                R.value.push({
                  id: c.id,
                  name: c.firstname + " " + c.lastname,
                });
              });
            },
          });
        },
        F = async () => {
          j.value = [];
          let d = M.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            e = M.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            s = {
              client: v.value != null ? v.value.id : 0,
              status: p.value != null ? p.value.code : 0,
              openstatus: b.value != null ? b.value.code : 0,
              from: d,
              to: e,
            };
          try {
            const { data: t, status: o } = await I(
              D.public.apiBaseurl + "project/completelist",
              { method: "POST", body: s },
            );
            console.log(t),
              t.forEach((c) => {
                let y = c.Project;
                (y.cliente = c.Client.name),
                  (y.color = c.Projectcolor.color),
                  j.value.push(y);
              });
          } catch (t) {
            console.log(t);
            let o = JSON.parse(t.data).errors.title;
            console.log("catcherr", t.data),
              (A.value = { text: o, type: "danger", show: !0 });
            return;
          }
        },
        ae = async () => {
          G.value = O.value.id;
        };
      function h() {
        W.value = window.innerWidth <= 960;
      }
      const le = async () => {
        const { data: d } = await I(D.public.apiBaseurl + "client/list", {
          onRequest({ request: e, options: s }) {},
          onRequestError({ request: e, options: s, error: t }) {
            console.log("Errore nella request:", t);
          },
          onResponseError({ request: e, response: s, options: t }) {
            A.value = {
              text: "Errore caricamento clienti",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: e, response: s, options: t }) {
            S.value = s._data.data;
          },
        });
      };
      return (
        ce(async () => {
          h(),
            window.addEventListener("resize", h),
            await ae(),
            await oe(),
            await F(),
            await le();
        }),
        me(() => {
          window.removeEventListener("resize", h);
        }),
        (d, e) => {
          const s = re;
          return (
            m(),
            w("div", ke, [
              r("div", Ce, [
                e[18] || (e[18] = r("br", null, null, -1)),
                e[19] ||
                  (e[19] = r(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Progetti",
                    -1,
                  )),
                r("div", xe, [
                  u(O).hasprojects == 1
                    ? (m(),
                      f(
                        z,
                        {
                          key: 0,
                          onClick: e[0] || (e[0] = (t) => Z(0, 0)),
                          color: "green",
                        },
                        {
                          default: a(() => [
                            l(C, null, {
                              default: a(() => [
                                ...(e[5] || (e[5] = [i("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            }),
                            e[6] || (e[6] = i("Crea progetto", -1)),
                          ]),
                          _: 1,
                        },
                      ))
                    : g("", !0),
                  e[9] || (e[9] = i()),
                  l(
                    z,
                    { class: "ml-2", color: "primary", onClick: te },
                    {
                      default: a(() => [
                        l(
                          C,
                          { class: "mr-3" },
                          {
                            default: a(() => [
                              ...(e[7] || (e[7] = [i("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        e[8] || (e[8] = i(" CSV", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[20] ||
                  (e[20] = r("div", { style: { clear: "both" } }, null, -1)),
                l(
                  U,
                  { "no-gutters": "" },
                  {
                    default: a(() => [
                      l(
                        x,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: a(() => [
                            l(
                              B,
                              {
                                autocomplete: "off",
                                class: "ma-2",
                                density: "compact",
                                modelValue: u(v),
                                "onUpdate:modelValue":
                                  e[1] ||
                                  (e[1] = (t) => (q(v) ? (v.value = t) : null)),
                                items: u(S),
                                label: "Clienti",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "id",
                                "return-object": "",
                                clearable: "",
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
                      l(
                        x,
                        { cols: "12", sm: "12", md: "5" },
                        {
                          default: a(() => [
                            l(
                              B,
                              {
                                class: "ma-2",
                                density: "compact",
                                multiple: "",
                                chips: "",
                                autocomplete: "off",
                                modelValue: u(p),
                                "onUpdate:modelValue":
                                  e[2] ||
                                  (e[2] = (t) => (q(p) ? (p.value = t) : null)),
                                items: N,
                                "return-object": "",
                                label: "Stato",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "code",
                                "no-data-text": "Nessun risultato trovato",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        x,
                        { cols: "12", sm: "12", md: "2" },
                        {
                          default: a(() => [
                            l(
                              B,
                              {
                                autocomplete: "off",
                                class: "ma-2",
                                density: "compact",
                                modelValue: u(b),
                                "onUpdate:modelValue":
                                  e[3] ||
                                  (e[3] = (t) => (q(b) ? (b.value = t) : null)),
                                items: Q,
                                label: "Stato apertura",
                                variant: "outlined",
                                "item-title": "name",
                                "item-value": "code",
                                "return-object": "",
                                clearable: "",
                                "no-data-text": "Nessun risultato trovato",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        x,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: a(() => [
                            l(
                              z,
                              {
                                class: "ma-2",
                                onClick: e[4] || (e[4] = (t) => F()),
                              },
                              {
                                default: a(() => [
                                  l(C, null, {
                                    default: a(() => [
                                      ...(e[10] ||
                                        (e[10] = [i("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  e[11] || (e[11] = i("Cerca", -1)),
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
                l(U, null, {
                  default: a(() => [
                    (m(!0),
                    w(
                      P,
                      null,
                      $(
                        u(p),
                        (t) => (
                          m(),
                          f(
                            x,
                            { key: t.code },
                            {
                              default: a(() => [
                                r(
                                  "div",
                                  {
                                    style: fe(
                                      "background-color: " +
                                        t.color +
                                        ";border-radius: 10px;padding: 15px; height: 100%;",
                                    ),
                                  },
                                  [
                                    r("h3", Ve, k(t.name), 1),
                                    (m(!0),
                                    w(
                                      P,
                                      null,
                                      $(
                                        u(j),
                                        (o) => (
                                          m(),
                                          w("div", { key: o.id }, [
                                            o.status == t.code
                                              ? (m(),
                                                f(
                                                  ve,
                                                  {
                                                    key: 0,
                                                    rounded: "lg",
                                                    elevation: "2",
                                                    class: "pa-3 mb-3",
                                                  },
                                                  {
                                                    default: a(() => [
                                                      r("div", De, [
                                                        r("div", je, [
                                                          l(
                                                            C,
                                                            {
                                                              size: "20",
                                                              color: o.color,
                                                              style: {
                                                                border:
                                                                  "1px solid #ccc",
                                                                "border-radius":
                                                                  "50%",
                                                              },
                                                            },
                                                            {
                                                              default: a(() => [
                                                                ...(e[12] ||
                                                                  (e[12] = [
                                                                    i(
                                                                      "mdi-circle",
                                                                      -1,
                                                                    ),
                                                                  ])),
                                                              ]),
                                                              _: 1,
                                                            },
                                                            8,
                                                            ["color"],
                                                          ),
                                                          i(
                                                            " [" +
                                                              k(o.code) +
                                                              "]",
                                                            1,
                                                          ),
                                                          e[13] ||
                                                            (e[13] = r(
                                                              "br",
                                                              null,
                                                              null,
                                                              -1,
                                                            )),
                                                          i(k(o.name), 1),
                                                        ]),
                                                        l(
                                                          C,
                                                          {
                                                            size: "18",
                                                            onClick: (c) =>
                                                              X(o.id),
                                                          },
                                                          {
                                                            default: a(() => [
                                                              ...(e[14] ||
                                                                (e[14] = [
                                                                  i(
                                                                    " mdi-open-in-new ",
                                                                    -1,
                                                                  ),
                                                                ])),
                                                            ]),
                                                            _: 1,
                                                          },
                                                          8,
                                                          ["onClick"],
                                                        ),
                                                      ]),
                                                      r(
                                                        "div",
                                                        Ae,
                                                        k(o.description),
                                                        1,
                                                      ),
                                                      r("div", Se, [
                                                        o.openstatus == "A"
                                                          ? (m(),
                                                            f(
                                                              H,
                                                              {
                                                                key: 0,
                                                                size: "x-small",
                                                                color: "green",
                                                                variant:
                                                                  "tonal",
                                                                class: "mr-2",
                                                              },
                                                              {
                                                                default: a(
                                                                  () => [
                                                                    ...(e[15] ||
                                                                      (e[15] = [
                                                                        i(
                                                                          " Aperto ",
                                                                          -1,
                                                                        ),
                                                                      ])),
                                                                  ],
                                                                ),
                                                                _: 1,
                                                              },
                                                            ))
                                                          : g("", !0),
                                                        o.openstatus == "C"
                                                          ? (m(),
                                                            f(
                                                              H,
                                                              {
                                                                key: 1,
                                                                size: "x-small",
                                                                color:
                                                                  "warning",
                                                                variant:
                                                                  "tonal",
                                                                class: "mr-2",
                                                              },
                                                              {
                                                                default: a(
                                                                  () => [
                                                                    ...(e[16] ||
                                                                      (e[16] = [
                                                                        i(
                                                                          " Chiuso ",
                                                                          -1,
                                                                        ),
                                                                      ])),
                                                                  ],
                                                                ),
                                                                _: 1,
                                                              },
                                                            ))
                                                          : g("", !0),
                                                        l(be),
                                                        o.enddate != null
                                                          ? (m(),
                                                            w(
                                                              "span",
                                                              Ee,
                                                              "Scadenza: " +
                                                                k(
                                                                  new Date(
                                                                    o.enddate,
                                                                  ).toLocaleDateString(
                                                                    "it-IT",
                                                                    {
                                                                      year: "numeric",
                                                                      month:
                                                                        "2-digit",
                                                                      day: "2-digit",
                                                                    },
                                                                  ),
                                                                ),
                                                              1,
                                                            ))
                                                          : g("", !0),
                                                      ]),
                                                      e[17] ||
                                                        (e[17] = r(
                                                          "div",
                                                          {
                                                            class:
                                                              "d-flex align-center text-caption",
                                                          },
                                                          null,
                                                          -1,
                                                        )),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ))
                                              : g("", !0),
                                          ])
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  4,
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                }),
                u(V)
                  ? (m(),
                    f(
                      s,
                      {
                        key: 0,
                        stati: N,
                        users: u(R),
                        clone: u(E),
                        clients: u(S),
                        dialoginsmod: u(V),
                        idrec: u(L),
                        onClose: ee,
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
export { rt as default };
