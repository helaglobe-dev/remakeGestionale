import { _ as re } from "./ClyIuovc.js";
import {
  E as W,
  r as a,
  G as j,
  o as Q,
  J as N,
  y as c,
  C as d,
  z as b,
  x as h,
  K as _,
  B as m,
  A as C,
  N as ne,
  O as ie,
  M as B,
  L as s,
  D as E,
  n as X,
  u as ue,
  k as de,
  e as pe,
} from "./CYsiv7Qj.js";
import { $ as D } from "./BvG7V8Ak.js";
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
  xe = { key: 0, class: "pb-10 pageh2" },
  _e = { key: 1, class: "pb-10 pageh2" },
  Ce = { style: { display: "flex" } },
  Ee = {
    __name: "DialogInsModUpcost",
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
        V = a(null),
        p = a(!1),
        y = a(!1),
        f = j("snackbar"),
        k = a([(i) => !!i || "Campo obbligatorio"]);
      function U(i) {
        if (i.key === ".") {
          i.preventDefault();
          const t = i.target,
            l = t.selectionStart,
            v = t.selectionEnd,
            w = t.value;
          (t.value = w.substring(0, l) + "," + w.substring(v)),
            t.setSelectionRange(l + 1, l + 1),
            t.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      const P = async () => {
        let i = {};
        u.idrec > 0 && (i.id = u.idrec),
          (i.hcost = V.value),
          (i.year = u.selyear),
          (i.user_id = u.selprofileid);
        let t = { Cost: i };
        await D(T.public.apiBaseurl + "upcost/savecost", {
          method: "POST",
          body: t,
        })
          .then(() => {
            u.idrec == 0
              ? (f.value = {
                  text: "Creazione costo orario completata",
                  type: "success",
                  show: !0,
                })
              : (f.value = {
                  text: "Modifica costo orario completata",
                  type: "success",
                  show: !0,
                }),
              x();
          })
          .catch((l) => {
            let v = JSON.parse(l.data).errors.title;
            console.log("catcherr", l.data),
              (f.value = { text: v, type: "danger", show: !0 });
          });
      };
      function x() {
        L("close");
      }
      const $ = async () => {
        if (u.idrec > 0) {
          const { data: i } = await D(
            T.public.apiBaseurl + "upcost/get/" + u.idrec,
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
                    text: "Errore caricamento costo orario",
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
          (p.value = !0), await $();
        }),
        (i, t) => (
          c(),
          N(
            ge,
            {
              class: "modaldialog",
              onAfterLeave: x,
              modelValue: s(p),
              "onUpdate:modelValue":
                t[3] || (t[3] = (l) => (B(p) ? (p.value = l) : null)),
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
                        xe,
                        "Nuovo costo orario di " +
                          C(u.selprofile) +
                          " per l'anno " +
                          C(u.selyear),
                        1,
                      ))
                    : _("", !0),
                  u.idrec > 0
                    ? (c(),
                      h(
                        "h2",
                        _e,
                        "Modifica costo orario di " +
                          C(u.selprofile) +
                          " per l'anno " +
                          C(u.selyear),
                        1,
                      ))
                    : _("", !0),
                  m(
                    ce,
                    {
                      modelValue: s(y),
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (l) => (B(y) ? (y.value = l) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        t[2] ||
                        (t[2] = ne(
                          ie(() => {}, ["prevent"]),
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
                                          B(V) ? (V.value = l) : null),
                                      variant: "outlined",
                                      rules: s(k),
                                      label: "Costo orario*",
                                      "decimal-separator": ",",
                                      onKeydown: U,
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
                  b("div", Ce, [
                    m(
                      F,
                      { class: "", onClick: x, color: "red" },
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
                      { onClick: P, disabled: !s(y), color: "green" },
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
  Re = { class: "divcenterpage" },
  Ne = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Be = { style: { display: "inline", float: "right" } },
  De = { key: 0 },
  Pe = { key: 1 },
  $e = { key: 0 },
  Se = { key: 1 },
  to = {
    __name: "upcosts",
    setup(K) {
      const q = X(),
        O = ue(),
        { status: T, signIn: L, signOut: u, data: V } = W(),
        p = a([]),
        y = a(""),
        f = j("snackbar"),
        k = a(!1),
        U = a(0),
        P = a(0),
        x = a(null),
        $ = a([]),
        i = a([]),
        t = a(!0),
        l = a(new Date().getFullYear()),
        v = de(() => {
          const g = new Date().getFullYear();
          return Array.from({ length: g + 1 - 2023 + 1 }, (e, n) => 2023 + n);
        }),
        w = a([]),
        R = a([]),
        S = a([]),
        Z = a(!1),
        J = a(null),
        z = a(null),
        Y = a(null),
        ee = [
          {
            title: "Profilo professionali",
            key: "name",
            sortable: !0,
            align: "left",
          },
          { title: "Anno", key: "year", sortable: !0, align: "left" },
          { title: "Costo", key: "hcost", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      be({
        title: "Costi Orari Profili Professionali",
        meta: [
          { name: "description", content: "Costi Orari Profili Professionali" },
        ],
      });
      function oe() {
        O.push("/userprofiles");
      }
      function G(g, e, n, r) {
        (P.value = parseInt(g)),
          (J.value = e),
          (Y.value = n),
          (z.value = r),
          (k.value = !0);
      }
      function te() {
        (k.value = !1), I();
      }
      function se(g) {
        const { data: e } = D(q.public.apiBaseurl + "upcost/delete/" + g, {
          onRequest({ request: n, options: r }) {},
          onRequestError({ request: n, options: r, error: o }) {
            console.log("Errore nella request:", o);
          },
          onResponseError({ request: n, response: r, options: o }) {
            f.value = {
              text: "Errore cancellazione utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: n, response: r, options: o }) {
            (f.value = { text: "Utente eliminato", type: "success", show: !0 }),
              I();
          },
        });
      }
      const le = () => {
          ($.value = []), (w.value = []), (i.value = []);
          const { data: g } = D(q.public.apiBaseurl + "userprofile/list", {
            onRequest({ request: e, options: n }) {},
            onRequestError({ request: e, options: n, error: r }) {
              console.log("Errore nella request:", r);
            },
            onResponseError({ request: e, response: n, options: r }) {
              f.value = {
                text: "Errore caricamento profili",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: n, options: r }) {
              n._data.data.forEach((o) => {
                w.value.push({ name: o.profilename, id: o.id }),
                  $.value.push({ id: o.id, value: o.profilename }),
                  (i.value[o.id] = o.profilename);
              });
            },
          });
        },
        I = async () => {
          (p.value = []), (R.value = []), (S.value = []), (z.value = l.value);
          let g = { user_id: x.value ? x.value.id : 0, year: l.value };
          try {
            const { data: e, status: n } = await D(
              q.public.apiBaseurl + "upcost/list",
              { method: "POST", body: g },
            );
            e.forEach((r) => {
              (p.value[r.userprofile_id] = r.hcost),
                (R.value[r.userprofile_id] = r.year),
                (S.value[r.userprofile_id] = r.id);
            });
          } catch (e) {
            console.log(e);
            let n = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (f.value = { text: n, type: "danger", show: !0 });
            return;
          }
        },
        ae = () => {
          U.value = V.value.id;
        };
      function A() {
        Z.value = window.innerWidth <= 960;
      }
      return (
        Q(async () => {
          V.value.role != "S"
            ? O.push("/")
            : (le(), A(), window.addEventListener("resize", A), ae(), I());
        }),
        pe(() => {
          window.removeEventListener("resize", A);
        }),
        (g, e) => {
          const n = re,
            r = Ee;
          return (
            c(),
            h("div", qe, [
              b("div", Re, [
                e[8] || (e[8] = b("br", null, null, -1)),
                e[9] ||
                  (e[9] = b(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Costi Orari Profili Professionali",
                    -1,
                  )),
                b("div", Ne, [
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
                b("div", Be, [
                  m(
                    Ve,
                    {
                      autocomplete: "off",
                      class: "ma-2 mt-0 mr-4",
                      style: { width: "130px" },
                      density: "compact",
                      modelValue: s(l),
                      "onUpdate:modelValue": [
                        e[1] || (e[1] = (o) => (B(l) ? (l.value = o) : null)),
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
                            (e[3] = (o) => (B(y) ? (y.value = o) : null)),
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
                      s(R)[o.id] != null
                        ? (c(), h("span", De, C(s(R)[o.id]), 1))
                        : (c(), h("span", Pe, "-")),
                    ]),
                    "item.hcost": d(({ item: o }) => [
                      s(p)[o.id] != null
                        ? (c(),
                          h(
                            "span",
                            $e,
                            C(
                              new Intl.NumberFormat("it-IT", {
                                style: "currency",
                                useGrouping: !0,
                                currency: "EUR",
                              }).format(s(p)[o.id]),
                            ),
                            1,
                          ))
                        : (c(), h("span", Se, "-")),
                    ]),
                    "item.actions": d(({ item: o }) => [
                      s(p)[o.id] != null
                        ? (c(),
                          N(
                            M,
                            {
                              key: 0,
                              class: "me-2",
                              size: "large",
                              onClick: (H) =>
                                G(s(S)[o.id], o.name, o.id, s(R)[o.id]),
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
                        : _("", !0),
                      s(p)[o.id] == null
                        ? (c(),
                          N(
                            M,
                            {
                              key: 1,
                              class: "me-2",
                              size: "large",
                              onClick: (H) => G(0, o.name, o.id, s(z)),
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
                        : _("", !0),
                      s(p)[o.id] != null
                        ? (c(),
                          N(
                            n,
                            {
                              key: 2,
                              onDelete: (H) => se(s(S)[o.id]),
                              iconadelete: s(t),
                              color: "red",
                              text: "Vuoi veramente eliminare questo prezzo orario?",
                            },
                            null,
                            8,
                            ["onDelete", "iconadelete"],
                          ))
                        : _("", !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "search"],
                ),
                s(k)
                  ? (c(),
                    N(
                      r,
                      {
                        key: 0,
                        dialoginsmod: s(k),
                        idrec: s(P),
                        selprofile: s(J),
                        selprofileid: s(Y),
                        selyear: s(z),
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
                  : _("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { to as default };
