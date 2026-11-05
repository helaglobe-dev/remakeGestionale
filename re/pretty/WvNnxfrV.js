import { _ as ae } from "./ClyIuovc.js";
import {
  E as W,
  r,
  G as j,
  o as Q,
  J as R,
  y as c,
  C as d,
  z as b,
  x as h,
  K as x,
  B as m,
  A as _,
  N as ie,
  O as ne,
  M as P,
  L as s,
  D as E,
  n as X,
  u as ue,
  k as de,
  e as pe,
} from "./CYsiv7Qj.js";
import { $ as N } from "./BvG7V8Ak.js";
import { V as ce } from "./MIubIMrV.js";
import { V as me, a as fe } from "./Bj0ZT2dB.js";
import { V as ve } from "./Bx6RXzqb.js";
import { V as F, a as M } from "./B_W9U9Wp.js";
import { V as ye } from "./BqujDEEl.js";
import { V as ge } from "./Dlfzj7mx.js";
import { u as be } from "./LKQL6vAN.js";
import { V as Ve } from "./DCAzZvgN.js";
import { V as we } from "./ss-1h9Hv.js";
import { V as he } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./Cv1q1CuH.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const ke = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "500px",
      "max-width": "800px",
      margin: "auto",
      overflow: "auto",
    },
  },
  ze = { key: 0, class: "pb-10 pageh2" },
  xe = { key: 1, class: "pb-10 pageh2" },
  _e = { style: { display: "flex" } },
  Ee = {
    __name: "DialogInsModUpprice",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      selprofile: String,
      selyear: Number,
      clone: Number,
      selprofileid: Number,
    },
    emits: ["close"],
    setup(K, { emit: q }) {
      const { data: O } = W(),
        T = X(),
        L = q,
        u = K,
        V = r(null),
        p = r(!1),
        y = r(!1),
        f = j("snackbar"),
        k = r([(n) => !!n || "Campo obbligatorio"]),
        U = async () => {
          let n = {};
          u.idrec > 0 && (n.id = u.idrec),
            (n.hcost = V.value),
            (n.year = u.selyear),
            (n.user_id = u.selprofileid);
          let t = { Cost: n };
          await N(T.public.apiBaseurl + "upprice/savecost", {
            method: "POST",
            body: t,
          })
            .then(() => {
              u.idrec == 0
                ? (f.value = {
                    text: "Creazione prezzo orario completata",
                    type: "success",
                    show: !0,
                  })
                : (f.value = {
                    text: "Modifica prezzo orario completata",
                    type: "success",
                    show: !0,
                  }),
                z();
            })
            .catch((l) => {
              let v = JSON.parse(l.data).errors.title;
              console.log("catcherr", l.data),
                (f.value = { text: v, type: "danger", show: !0 });
            });
        };
      function B(n) {
        if (n.key === ".") {
          n.preventDefault();
          const t = n.target,
            l = t.selectionStart,
            v = t.selectionEnd,
            w = t.value;
          (t.value = w.substring(0, l) + "," + w.substring(v)),
            t.setSelectionRange(l + 1, l + 1),
            t.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      function z() {
        L("close");
      }
      const D = async () => {
        if (u.idrec > 0) {
          const { data: n } = await N(
            T.public.apiBaseurl + "upprice/get/" + u.idrec,
            {
              onRequest({ request: t, options: l }) {},
              onRequestError({ request: t, options: l, error: v }) {
                console.log("Errore nella request:", v),
                  (f.value = {
                    text: "Errore: " + v,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: t, response: l, options: v }) {
                console.log(
                  "Errore nella response: " + l._data.error.messages[0],
                ),
                  (f.value = {
                    text: "Errore caricamento prezzo orario",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: t, response: l, options: v }) {
                let w = l._data.data;
                V.value = parseFloat(w.hcost);
              },
            },
          );
        }
      };
      return (
        Q(async () => {
          (p.value = !0), await D();
        }),
        (n, t) => (
          c(),
          R(
            ge,
            {
              class: "modaldialog",
              onAfterLeave: z,
              modelValue: s(p),
              "onUpdate:modelValue":
                t[3] || (t[3] = (l) => (P(p) ? (p.value = l) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: d(() => [
                b("div", ke, [
                  u.idrec == 0
                    ? (c(),
                      h(
                        "h2",
                        ze,
                        "Nuovo prezzo orario di " +
                          _(u.selprofile) +
                          " per l'anno " +
                          _(u.selyear),
                        1,
                      ))
                    : x("", !0),
                  u.idrec > 0
                    ? (c(),
                      h(
                        "h2",
                        xe,
                        "Modifica prezzo orario di " +
                          _(u.selprofile) +
                          " per l'anno " +
                          _(u.selyear),
                        1,
                      ))
                    : x("", !0),
                  m(
                    ce,
                    {
                      modelValue: s(y),
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (l) => (P(y) ? (y.value = l) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        t[2] ||
                        (t[2] = ie(
                          ne(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: d(() => [
                        m(me, null, {
                          default: d(() => [
                            m(
                              fe,
                              { cols: "12", sm: "12" },
                              {
                                default: d(() => [
                                  m(
                                    ve,
                                    {
                                      class: "mb-2",
                                      modelValue: s(V),
                                      "onUpdate:modelValue":
                                        t[0] ||
                                        (t[0] = (l) =>
                                          P(V) ? (V.value = l) : null),
                                      variant: "outlined",
                                      rules: s(k),
                                      label: "Prezzo orario*",
                                      "decimal-separator": ",",
                                      onKeydown: B,
                                      precision: 2,
                                      "hide-details": "auto",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
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
                    8,
                    ["modelValue"],
                  ),
                  t[6] || (t[6] = b("br", null, null, -1)),
                  b("div", _e, [
                    m(
                      F,
                      { class: "", onClick: z, color: "red" },
                      {
                        default: d(() => [
                          ...(t[4] || (t[4] = [E(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    m(ye),
                    m(
                      F,
                      { onClick: U, disabled: !s(y), color: "green" },
                      {
                        default: d(() => [
                          ...(t[5] || (t[5] = [E("Salva", -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disabled"],
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"],
          )
        )
      );
    },
  },
  qe = { class: "pl-10 pr-10" },
  Ce = { class: "divcenterpage" },
  Re = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Pe = { style: { display: "inline", float: "right" } },
  Ne = { key: 0 },
  Be = { key: 1 },
  De = { key: 0 },
  $e = { key: 1 },
  to = {
    __name: "upprices",
    setup(K) {
      const q = X(),
        O = ue(),
        { status: T, signIn: L, signOut: u, data: V } = W(),
        p = r([]),
        y = r(""),
        f = j("snackbar"),
        k = r(!1),
        U = r(0),
        B = r(0),
        z = r(null),
        D = r([]),
        n = r([]),
        t = r(!0),
        l = r(new Date().getFullYear()),
        v = de(() => {
          const g = new Date().getFullYear();
          return Array.from({ length: g + 1 - 2023 + 1 }, (e, i) => 2023 + i);
        }),
        w = r([]),
        C = r([]),
        $ = r([]),
        Z = r(!1),
        J = r(null),
        S = r(null),
        Y = r(null),
        ee = [
          {
            title: "Profilo professionali",
            key: "name",
            sortable: !0,
            align: "left",
          },
          { title: "Anno", key: "year", sortable: !0, align: "left" },
          { title: "Prezzo", key: "hcost", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      be({
        title: "Prezzi Orari  Profili  Professionali",
        meta: [
          {
            name: "description",
            content: "Prezzi Orari Profili  Professionali",
          },
        ],
      });
      function oe() {
        O.push("/userprofiles");
      }
      function G(g, e, i, a) {
        (B.value = parseInt(g)),
          (J.value = e),
          (Y.value = i),
          (S.value = a),
          (k.value = !0);
      }
      function te() {
        (k.value = !1), I();
      }
      function se(g) {
        const { data: e } = N(q.public.apiBaseurl + "upprice/delete/" + g, {
          onRequest({ request: i, options: a }) {},
          onRequestError({ request: i, options: a, error: o }) {
            console.log("Errore nella request:", o);
          },
          onResponseError({ request: i, response: a, options: o }) {
            f.value = {
              text: "Errore cancellazione utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: i, response: a, options: o }) {
            (f.value = { text: "Utente eliminato", type: "success", show: !0 }),
              I();
          },
        });
      }
      const le = () => {
          (D.value = []), (w.value = []), (n.value = []);
          const { data: g } = N(q.public.apiBaseurl + "userprofile/list", {
            onRequest({ request: e, options: i }) {},
            onRequestError({ request: e, options: i, error: a }) {
              console.log("Errore nella request:", a);
            },
            onResponseError({ request: e, response: i, options: a }) {
              f.value = {
                text: "Errore caricamento profili",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: i, options: a }) {
              i._data.data.forEach((o) => {
                w.value.push({ name: o.profilename, id: o.id }),
                  D.value.push({ id: o.id, value: o.profilename }),
                  (n.value[o.id] = o.profilename);
              });
            },
          });
        },
        I = async () => {
          (p.value = []), (C.value = []), ($.value = []), (S.value = l.value);
          let g = { user_id: z.value ? z.value.id : 0, year: l.value };
          try {
            const { data: e, status: i } = await N(
              q.public.apiBaseurl + "upprice/list",
              { method: "POST", body: g },
            );
            e.forEach((a) => {
              (p.value[a.userprofile_id] = a.hcost),
                (C.value[a.userprofile_id] = a.year),
                ($.value[a.userprofile_id] = a.id);
            });
          } catch (e) {
            console.log(e);
            let i = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (f.value = { text: i, type: "danger", show: !0 });
            return;
          }
        },
        re = () => {
          U.value = V.value.id;
        };
      function A() {
        Z.value = window.innerWidth <= 960;
      }
      return (
        Q(async () => {
          V.value.role != "S"
            ? O.push("/")
            : (le(), A(), window.addEventListener("resize", A), re(), I());
        }),
        pe(() => {
          window.removeEventListener("resize", A);
        }),
        (g, e) => {
          const i = ae,
            a = Ee;
          return (
            c(),
            h("div", qe, [
              b("div", Ce, [
                e[8] || (e[8] = b("br", null, null, -1)),
                e[9] ||
                  (e[9] = b(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Prezzi Orari Profili Professionali",
                    -1,
                  )),
                b("div", Re, [
                  m(
                    F,
                    { onClick: e[0] || (e[0] = (o) => oe()) },
                    {
                      default: d(() => [
                        m(M, null, {
                          default: d(() => [
                            ...(e[4] || (e[4] = [E("mdi-arrow-left", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[5] || (e[5] = E("Torna ai profili", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                b("div", Pe, [
                  m(
                    Ve,
                    {
                      autocomplete: "off",
                      class: "ma-2 mt-0 mr-4",
                      style: { width: "130px" },
                      density: "compact",
                      modelValue: s(l),
                      "onUpdate:modelValue": [
                        e[1] || (e[1] = (o) => (P(l) ? (l.value = o) : null)),
                        e[2] || (e[2] = (o) => I()),
                      ],
                      items: s(v),
                      label: "Anno",
                      "no-data-text": "Nessun risultato trovato",
                      variant: "outlined",
                    },
                    null,
                    8,
                    ["modelValue", "items"],
                  ),
                ]),
                e[10] ||
                  (e[10] = b("div", { style: { clear: "both" } }, null, -1)),
                m(
                  we,
                  {
                    density: "compact",
                    items: s(w),
                    headers: ee,
                    search: s(y),
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
                  },
                  {
                    top: d(() => [
                      m(
                        he,
                        {
                          modelValue: s(y),
                          "onUpdate:modelValue":
                            e[3] ||
                            (e[3] = (o) => (P(y) ? (y.value = o) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca nei risultati",
                          autocomplete: "off",
                          density: "compact",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.year": d(({ item: o }) => [
                      s(C)[o.id] != null
                        ? (c(), h("span", Ne, _(s(C)[o.id]), 1))
                        : (c(), h("span", Be, "-")),
                    ]),
                    "item.hcost": d(({ item: o }) => [
                      s(p)[o.id] != null
                        ? (c(),
                          h(
                            "span",
                            De,
                            _(
                              new Intl.NumberFormat("it-IT", {
                                style: "currency",
                                useGrouping: !0,
                                currency: "EUR",
                              }).format(s(p)[o.id]),
                            ),
                            1,
                          ))
                        : (c(), h("span", $e, "-")),
                    ]),
                    "item.actions": d(({ item: o }) => [
                      s(p)[o.id] != null
                        ? (c(),
                          R(
                            M,
                            {
                              key: 0,
                              class: "me-2",
                              size: "large",
                              onClick: (H) =>
                                G(s($)[o.id], o.name, o.id, s(C)[o.id]),
                            },
                            {
                              default: d(() => [
                                ...(e[6] || (e[6] = [E("mdi-pencil", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"],
                          ))
                        : x("", !0),
                      s(p)[o.id] == null
                        ? (c(),
                          R(
                            M,
                            {
                              key: 1,
                              class: "me-2",
                              size: "large",
                              onClick: (H) => G(0, o.name, o.id, s(S)),
                            },
                            {
                              default: d(() => [
                                ...(e[7] || (e[7] = [E("mdi-plus", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"],
                          ))
                        : x("", !0),
                      s(p)[o.id] != null
                        ? (c(),
                          R(
                            i,
                            {
                              key: 2,
                              onDelete: (H) => se(s($)[o.id]),
                              iconadelete: s(t),
                              color: "red",
                              text: "Vuoi veramente eliminare questo prezzo orario?",
                            },
                            null,
                            8,
                            ["onDelete", "iconadelete"],
                          ))
                        : x("", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
                s(k)
                  ? (c(),
                    R(
                      a,
                      {
                        key: 0,
                        dialoginsmod: s(k),
                        idrec: s(B),
                        selprofile: s(J),
                        selprofileid: s(Y),
                        selyear: s(S),
                        onClose: te,
                      },
                      null,
                      8,
                      [
                        "dialoginsmod",
                        "idrec",
                        "selprofile",
                        "selprofileid",
                        "selyear",
                      ],
                    ))
                  : x("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { to as default };
