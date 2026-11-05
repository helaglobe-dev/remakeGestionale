import { _ as ze } from "./ClyIuovc.js";
import {
  at as he,
  E as me,
  r as d,
  G as pe,
  o as ce,
  J as x,
  y as f,
  C as l,
  z as b,
  x as V,
  K as N,
  B as o,
  N as L,
  O as G,
  M as A,
  L as s,
  Q as D,
  R as W,
  D as c,
  A as k,
  n as fe,
  u as Ee,
  e as Re,
  P as Ue,
  I as ie,
  au as _e,
} from "./CYsiv7Qj.js";
import { $ as S } from "./BvG7V8Ak.js";
import { V as ve } from "./MIubIMrV.js";
import { V as T } from "./BrCrqdgZ.js";
import { V as $e, a as F } from "./Bj0ZT2dB.js";
import { V as ne } from "./DCAzZvgN.js";
import { a as ee, d as re, b as K, V as Pe, c as Z } from "./CxBYvc7u.js";
import { V as ue } from "./CZzf1ihi.js";
import { V as Ae } from "./D3DeQzvF.js";
import { a as J, V as z } from "./B_W9U9Wp.js";
import { V as be } from "./BqujDEEl.js";
import { V as te } from "./Dlfzj7mx.js";
import { u as Se } from "./LKQL6vAN.js";
import { V as Ne } from "./ss-1h9Hv.js";
import { V as de, a as Ie, d as Me } from "./sbneMOUU.js";
import "./Cv1q1CuH.js";
import "./fKsYyVgl.js";
import "./CCBmAzgz.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
const Be = he("/ts.png"),
  De = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Le = { key: 0, class: "pb-10 pageh2" },
  Te = { key: 1, class: "pb-10 pageh2" },
  Ke = { style: { display: "flex" } },
  Oe = {
    __name: "DialogInsModUser",
    props: { dialoginsmod: Boolean, idrec: Number, profiles: Array },
    emits: ["close"],
    setup(O, { emit: h }) {
      const { data: j } = me(),
        H = fe(),
        ae = h,
        I = O,
        E = d(!1),
        q = d(!1),
        y = pe("snackbar"),
        t = d({
          id: 0,
          firstname: "",
          lastname: "",
          email: "",
          role: { id: "U", label: "Utente" },
          hasprojects: !1,
          hasinvoice: !1,
          sendnotificationemail: !1,
          sendpresenzealert: !1,
          creanotifica: !0,
          activeuser: !0,
          usedindashboard: !0,
          viewdashboard: !1,
          viewkpi: !1,
          viewbudget: !1,
          cancreatemacro: !1,
          viewfic: !1,
        }),
        R = [
          { id: "S", label: "Super Amministratore" },
          { id: "A", label: "Amministratore" },
          { id: "U", label: "Utente" },
        ],
        U = d([(r) => !!r || "Campo obbligatorio"]);
      d([
        (r) =>
          (/^(100|[1-9]?[0-9])$/.test(r) && r > 0) ||
          "Must be a valid integer from 1 to 100",
      ]),
        d([
          (r) =>
            (/^[0-9]*$/.test(r) && r >= 256 && r <= 8192) ||
            "Must be a valid integer from 256 to 8192",
        ]),
        d([
          (r) =>
            (/^[0-9]*$/.test(r) && r >= 0 && r <= 8192) ||
            "Must be a valid integer from 0 to 8192",
        ]),
        d([
          (r) =>
            /^(10|[0-9])$/.test(r) || "Must be a valid integer from 0 to 10",
        ]);
      const M = d([
          (r) =>
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(r) || "Email non valida",
        ]),
        Q = async () => {
          let r = {
            id: t.value.id,
            firstname: t.value.firstname,
            lastname: t.value.lastname,
            email: t.value.email,
            acronym: t.value.acronym,
            role: t.value.role.id,
            userprofile_id: t.value.userprofile_id,
            hasprojects: t.value.hasprojects == !0 ? 1 : 0,
            activeuser: t.value.activeuser == !0 ? 1 : 0,
            usedindashboard: t.value.usedindashboard == !0 ? 1 : 0,
            viewdashboard: t.value.viewdashboard == !0 ? 1 : 0,
            hasinvoice: t.value.hasinvoice == !0 ? 1 : 0,
            sendpresenzealert: t.value.sendpresenzealert == !0 ? 1 : 0,
            creanotifica: t.value.creanotifica == !0 ? 1 : 0,
            viewkpi: t.value.viewkpi == !0 ? 1 : 0,
            cancreatemacro: t.value.cancreatemacro == !0 ? 1 : 0,
            viewbudget: t.value.viewbudget == !0 ? 1 : 0,
            viewfic: t.value.viewfic == !0 ? 1 : 0,
            sendnotificationemail: t.value.sendnotificationemail == !0 ? 1 : 0,
          };
          await S(H.public.apiBaseurl + "user/createedit", {
            method: "POST",
            body: r,
          })
            .then(() => {
              I.idrec == 0
                ? (y.value = {
                    text: "Creazione utente completata",
                    type: "success",
                    show: !0,
                  })
                : (y.value = {
                    text: "Modifica utente completata",
                    type: "success",
                    show: !0,
                  }),
                g();
            })
            .catch((i) => {
              let a = JSON.parse(i.data).errors.title;
              console.log("catcherr", i.data),
                (y.value = { text: a, type: "danger", show: !0 });
            });
        };
      function g() {
        ae("close");
      }
      const C = () => {
          if (I.idrec > 0) {
            const { data: r } = S(H.public.apiBaseurl + "user/get/" + I.idrec, {
              onRequest({ request: i, options: a }) {},
              onRequestError({ request: i, options: a, error: w }) {
                console.log("Errore nella request:", w),
                  (y.value = {
                    text: "Errore: " + w,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: i, response: a, options: w }) {
                console.log(
                  "Errore nella response: " + a._data.error.messages[0],
                ),
                  (y.value = {
                    text: "Errore caricamento utente",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: i, response: a, options: w }) {
                (t.value.id = a._data.data.id),
                  (t.value.userprofile_id = a._data.data.userprofile_id),
                  (t.value.firstname = a._data.data.firstname),
                  (t.value.lastname = a._data.data.lastname),
                  (t.value.acronym =
                    a._data.data.acronym != null
                      ? a._data.data.acronym
                      : a._data.data.firstname.substr(0, 1) +
                        a._data.data.lastname.substr(0, 1)),
                  (t.value.email = a._data.data.email),
                  (t.value.hasprojects = a._data.data.hasprojects == 1),
                  (t.value.activeuser = a._data.data.activeuser == 1),
                  (t.value.usedindashboard = a._data.data.usedindashboard == 1),
                  (t.value.viewdashboard = a._data.data.viewdashboard == 1),
                  (t.value.hasinvoice = a._data.data.hasinvoice == 1),
                  (t.value.sendnotificationemail =
                    a._data.data.sendnotificationemail == 1),
                  (t.value.sendpresenzealert =
                    a._data.data.sendpresenzealert == 1),
                  (t.value.creanotifica = a._data.data.creanotifica == 1),
                  (t.value.viewkpi = a._data.data.viewkpi == 1),
                  (t.value.cancreatemacro = a._data.data.cancreatemacro == 1),
                  (t.value.viewbudget = a._data.data.viewbudget == 1),
                  (t.value.viewfic = a._data.data.viewfic == 1),
                  (t.value.role = {
                    id: a._data.data.role,
                    label: R.filter(({ id: u }) => u === a._data.data.role)
                      .map(({ label: u }) => u)
                      .slice(0, 1)
                      .shift(),
                  });
              },
            });
          }
        },
        _ = [
          {
            title: "Account",
            items: [
              {
                key: "activeuser",
                label: "Utente attivo",
                icon: "mdi-account-check",
              },
              {
                key: "usedindashboard",
                label: "Appare in dashboard",
                icon: "mdi-view-dashboard-edit-outline",
              },
            ],
          },
          {
            title: "Permessi",
            items: [
              {
                key: "viewdashboard",
                label: "Visualizza dashboard",
                icon: "mdi-view-dashboard-outline",
              },
              {
                key: "hasprojects",
                label: "Può creare i progetti",
                icon: "mdi-briefcase-plus-outline",
              },
              {
                key: "hasinvoice",
                label: "Può gestire fatture e tranches",
                icon: "mdi-invoice-text-outline",
              },
              {
                key: "cancreatemacro",
                label: "Creazione macrovoci",
                icon: "mdi-format-list-group",
              },
              {
                key: "viewfic",
                label: "Visualizza Fatture in Cloud",
                icon: "-1",
              },
            ],
          },
        ],
        $ = [
          {
            title: "Visibilità dati",
            items: [
              {
                key: "viewkpi",
                label: "Visualizzazione KPI",
                icon: "mdi-chart-line",
              },
              {
                key: "viewbudget",
                label: "Visualizzazione budget",
                icon: "mdi-sack",
              },
            ],
          },
          {
            title: "Notifiche",
            items: [
              {
                key: "creanotifica",
                label: "Ricezione notifiche",
                icon: "mdi-bell",
              },
              {
                key: "sendnotificationemail",
                label: "Notifiche via email",
                icon: "mdi-email",
              },
              {
                key: "sendpresenzealert",
                label: "Alert inserimento presenze via email",
                icon: "mdi-email-alert",
              },
            ],
          },
        ];
      return (
        ce(() => {
          (E.value = !0), C();
        }),
        (r, i) => (
          f(),
          x(
            te,
            {
              class: "modaldialog",
              onAfterLeave: g,
              modelValue: s(E),
              "onUpdate:modelValue":
                i[14] || (i[14] = (a) => (A(E) ? (E.value = a) : null)),
              width: "auto",
              style: { "max-width": "800px", "min-width": "60%" },
              persistent: "",
            },
            {
              default: l(() => [
                b("div", De, [
                  O.idrec == 0 ? (f(), V("h2", Le, "Nuovo utente")) : N("", !0),
                  O.idrec > 0
                    ? (f(), V("h2", Te, "Modifica utente"))
                    : N("", !0),
                  o(
                    ve,
                    {
                      modelValue: s(q),
                      "onUpdate:modelValue":
                        i[12] || (i[12] = (a) => (A(q) ? (q.value = a) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        i[13] ||
                        (i[13] = L(
                          G(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: l(() => [
                        o(
                          T,
                          {
                            class: "mb-2",
                            autocomplete: "off",
                            onKeydown:
                              i[0] ||
                              (i[0] = L((a) => a.preventDefault(), ["enter"])),
                            modelValue: s(t).firstname,
                            "onUpdate:modelValue":
                              i[1] || (i[1] = (a) => (s(t).firstname = a)),
                            required: "",
                            density: "compact",
                            rules: s(U),
                            variant: "outlined",
                            "persistent-hint": "",
                            label: "Nome",
                          },
                          null,
                          8,
                          ["modelValue", "rules"],
                        ),
                        o(
                          T,
                          {
                            class: "mb-2",
                            autocomplete: "off",
                            onKeydown:
                              i[2] ||
                              (i[2] = L((a) => a.preventDefault(), ["enter"])),
                            modelValue: s(t).lastname,
                            "onUpdate:modelValue":
                              i[3] || (i[3] = (a) => (s(t).lastname = a)),
                            required: "",
                            rules: s(U),
                            density: "compact",
                            variant: "outlined",
                            "persistent-hint": "",
                            label: "Cognome",
                          },
                          null,
                          8,
                          ["modelValue", "rules"],
                        ),
                        o(
                          T,
                          {
                            class: "mb-2",
                            autocomplete: "off",
                            onKeydown:
                              i[4] ||
                              (i[4] = L((a) => a.preventDefault(), ["enter"])),
                            modelValue: s(t).email,
                            "onUpdate:modelValue":
                              i[5] || (i[5] = (a) => (s(t).email = a)),
                            required: "",
                            rules: s(M),
                            variant: "outlined",
                            density: "compact",
                            "persistent-hint": "",
                            label: "Email",
                          },
                          null,
                          8,
                          ["modelValue", "rules"],
                        ),
                        o($e, null, {
                          default: l(() => [
                            o(
                              F,
                              { cols: "4" },
                              {
                                default: l(() => [
                                  o(
                                    T,
                                    {
                                      class: "mb-2",
                                      autocomplete: "off",
                                      onKeydown:
                                        i[6] ||
                                        (i[6] = L(
                                          (a) => a.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: s(t).acronym,
                                      "onUpdate:modelValue":
                                        i[7] ||
                                        (i[7] = (a) => (s(t).acronym = a)),
                                      required: "",
                                      rules: s(U),
                                      density: "compact",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Sigla",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              F,
                              { cols: "4" },
                              {
                                default: l(() => [
                                  o(
                                    ne,
                                    {
                                      autocomplete: "off",
                                      class: "mb-2",
                                      modelValue: s(t).role,
                                      "onUpdate:modelValue":
                                        i[8] || (i[8] = (a) => (s(t).role = a)),
                                      items: R,
                                      label: "Ruolo",
                                      required: "",
                                      density: "compact",
                                      variant: "outlined",
                                      "item-title": "label",
                                      "item-value": "id",
                                      "return-object": "",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      disabled:
                                        I.idrec > 0 && I.idrec == s(j).id,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "disabled"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              F,
                              { cols: "4" },
                              {
                                default: l(() => [
                                  o(
                                    ne,
                                    {
                                      autocomplete: "off",
                                      class: "mb-2",
                                      modelValue: s(t).userprofile_id,
                                      "onUpdate:modelValue":
                                        i[9] ||
                                        (i[9] = (a) =>
                                          (s(t).userprofile_id = a)),
                                      items: O.profiles,
                                      label: "Profilo utente",
                                      required: "",
                                      density: "compact",
                                      variant: "outlined",
                                      "item-title": "profilename",
                                      "item-value": "id",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "items"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              F,
                              { cols: "6" },
                              {
                                default: l(() => [
                                  o(
                                    ee,
                                    { lines: "two" },
                                    {
                                      default: l(() => [
                                        (f(),
                                        V(
                                          D,
                                          null,
                                          W(
                                            _,
                                            (a, w) => (
                                              f(),
                                              V(
                                                D,
                                                { key: a.title },
                                                [
                                                  o(
                                                    re,
                                                    {
                                                      class:
                                                        "text-uppercase font-weight-bold mt-8",
                                                      style: {
                                                        "font-size": "16px",
                                                      },
                                                    },
                                                    {
                                                      default: l(() => [
                                                        c(k(a.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  ),
                                                  (f(!0),
                                                  V(
                                                    D,
                                                    null,
                                                    W(
                                                      a.items,
                                                      (u) => (
                                                        f(),
                                                        x(
                                                          K,
                                                          {
                                                            key: u.key,
                                                            title: u.label,
                                                            subtitle: u.hint,
                                                            onClick: (P) =>
                                                              (s(t)[u.key] =
                                                                !s(t)[u.key]),
                                                          },
                                                          {
                                                            prepend: l(() => [
                                                              u.icon === "-1"
                                                                ? (f(),
                                                                  x(
                                                                    Ae,
                                                                    {
                                                                      key: 0,
                                                                      src: Be,
                                                                      alt: u.label,
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      class:
                                                                        "mr-2",
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["alt"],
                                                                  ))
                                                                : u.icon
                                                                  ? (f(),
                                                                    x(
                                                                      J,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      {
                                                                        default:
                                                                          l(
                                                                            () => [
                                                                              c(
                                                                                k(
                                                                                  u.icon,
                                                                                ),
                                                                                1,
                                                                              ),
                                                                            ],
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024,
                                                                    ))
                                                                  : N("", !0),
                                                            ]),
                                                            append: l(() => [
                                                              o(
                                                                ue,
                                                                {
                                                                  modelValue:
                                                                    s(t)[u.key],
                                                                  "onUpdate:modelValue":
                                                                    (P) =>
                                                                      (s(t)[
                                                                        u.key
                                                                      ] = P),
                                                                  color:
                                                                    "green",
                                                                  "base-color":
                                                                    "red",
                                                                  density:
                                                                    "compact",
                                                                  "hide-details":
                                                                    "",
                                                                  inset: "",
                                                                  onClick:
                                                                    i[10] ||
                                                                    (i[10] =
                                                                      G(() => {}, [
                                                                        "stop",
                                                                      ])),
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                ],
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          [
                                                            "title",
                                                            "subtitle",
                                                            "onClick",
                                                          ],
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ],
                                                64,
                                              )
                                            ),
                                          ),
                                          64,
                                        )),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              F,
                              { cols: "6" },
                              {
                                default: l(() => [
                                  o(
                                    ee,
                                    { lines: "two" },
                                    {
                                      default: l(() => [
                                        (f(),
                                        V(
                                          D,
                                          null,
                                          W(
                                            $,
                                            (a, w) => (
                                              f(),
                                              V(
                                                D,
                                                { key: a.title },
                                                [
                                                  o(
                                                    re,
                                                    {
                                                      class:
                                                        "text-uppercase font-weight-bold mt-8",
                                                      style: {
                                                        "font-size": "16px",
                                                      },
                                                    },
                                                    {
                                                      default: l(() => [
                                                        c(k(a.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  ),
                                                  (f(!0),
                                                  V(
                                                    D,
                                                    null,
                                                    W(
                                                      a.items,
                                                      (u) => (
                                                        f(),
                                                        x(
                                                          K,
                                                          {
                                                            key: u.key,
                                                            title: u.label,
                                                            subtitle: u.hint,
                                                            "prepend-icon":
                                                              u.icon,
                                                            onClick: (P) =>
                                                              (s(t)[u.key] =
                                                                !s(t)[u.key]),
                                                          },
                                                          {
                                                            append: l(() => [
                                                              o(
                                                                ue,
                                                                {
                                                                  modelValue:
                                                                    s(t)[u.key],
                                                                  "onUpdate:modelValue":
                                                                    (P) =>
                                                                      (s(t)[
                                                                        u.key
                                                                      ] = P),
                                                                  color:
                                                                    "green",
                                                                  "base-color":
                                                                    "red",
                                                                  density:
                                                                    "compact",
                                                                  "hide-details":
                                                                    "",
                                                                  inset: "",
                                                                  onClick:
                                                                    i[11] ||
                                                                    (i[11] =
                                                                      G(() => {}, [
                                                                        "stop",
                                                                      ])),
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                ],
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          [
                                                            "title",
                                                            "subtitle",
                                                            "prepend-icon",
                                                            "onClick",
                                                          ],
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ],
                                                64,
                                              )
                                            ),
                                          ),
                                          64,
                                        )),
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
                    8,
                    ["modelValue"],
                  ),
                  i[17] || (i[17] = b("br", null, null, -1)),
                  b("div", Ke, [
                    o(
                      z,
                      { color: "red", class: "", onClick: g },
                      {
                        default: l(() => [
                          ...(i[15] || (i[15] = [c(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(be),
                    o(
                      z,
                      { color: "green", onClick: Q, disabled: !s(q) },
                      {
                        default: l(() => [
                          ...(i[16] || (i[16] = [c("Salva", -1)])),
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
  je = { class: "pl-10 pr-10" },
  Fe = { class: "divcenterpage" },
  Je = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  We = ["title"],
  Ze = { class: "mt-4" },
  Ge = { class: "pb-10 pageh2" },
  yt = {
    __name: "users",
    setup(O) {
      const h = fe(),
        j = Ee(),
        { status: H, signIn: ae, signOut: I, data: E } = me(),
        q = d([]),
        y = d(""),
        t = pe("snackbar"),
        R = d(!1),
        U = d(0),
        M = d(0),
        Q = d(!0),
        g = d(!1),
        C = d(""),
        _ = d(!1),
        $ = d(null),
        r = d(!1),
        i = d(""),
        a = d([]),
        w = d([]),
        u = d([
          (m) => !!m || "Password obbligatoria",
          (m) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9\W]{8,})$/.test(m) ||
            "La password deve contenere almeno 8 caratteri e almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola",
        ]),
        P = d(!1),
        ye = [
          { title: "Nome", key: "firstname", sortable: !0, align: "left" },
          { title: "Cognome", key: "lastname", sortable: !0, align: "left" },
          { title: "Sigla", key: "acronym", sortable: !0, align: "left" },
          { title: "Email", key: "email", sortable: !0, align: "left" },
          { title: "Ruolo", key: "descrole", sortable: !0, align: "center" },
          {
            title: "Profilo",
            key: "userprofile_id",
            sortable: !0,
            align: "center",
          },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      Se({
        title: "Utenti",
        meta: [{ name: "description", content: "Utenti" }],
      });
      function ge(m) {
        ($.value = m), (r.value = !0);
      }
      const we = async () => {
        let m = await S(h.public.apiBaseurl + "user/forceLogin/" + $.value.id, {
          method: "POST",
        });
        if (m.success) {
          const e = _e("auth.token");
          (e.value = m.data.user.token),
            j.push("/").then(() => {
              j.go(0);
            });
        }
      };
      function le(m) {
        (M.value = parseInt(m)), (R.value = !0);
      }
      function ke(m) {
        (M.value = parseInt(m.id)),
          (i.value = m.firstname + " " + m.lastname),
          (g.value = !0);
      }
      function Ve() {
        (R.value = !1), X();
      }
      function oe() {
        (g.value = !1), (C.value = "");
      }
      const xe = async () => {
          if (_.value) {
            const { data: m } = await S(
              h.public.apiBaseurl + "user/changePassword",
              {
                method: "POST",
                body: { id: M.value, password: C.value, rpassword: C.value },
                onRequest({ request: e, options: p }) {},
                onRequestError({ request: e, options: p, error: v }) {
                  console.log("Errore nella request:", v);
                },
                onResponseError({ request: e, response: p, options: v }) {
                  t.value = {
                    text: "Errore cambio password",
                    type: "danger",
                    show: !0,
                  };
                },
                onResponse({ request: e, response: p, options: v }) {
                  (t.value = {
                    text: "Password cambiata con successo",
                    type: "success",
                    show: !0,
                  }),
                    oe();
                },
              },
            );
          }
        },
        se = async (m) => {
          const { data: e } = await S(
            h.public.apiBaseurl + "user/delete/" + m,
            {
              onRequest({ request: p, options: v }) {},
              onRequestError({ request: p, options: v, error: n }) {
                console.log("Errore nella request:", n);
              },
              onResponseError({ request: p, response: v, options: n }) {
                t.value = {
                  text: "Errore cancellazione utente",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: p, response: v, options: n }) {
                (t.value = {
                  text: "Utente eliminato",
                  type: "success",
                  show: !0,
                }),
                  X();
              },
            },
          );
        },
        X = async () => {
          q.value = [];
          const { data: m } = await S(h.public.apiBaseurl + "user/list", {
            onRequest({ request: e, options: p }) {},
            onRequestError({ request: e, options: p, error: v }) {
              console.log("Errore nella request:", v);
            },
            onResponseError({ request: e, response: p, options: v }) {
              t.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: p, options: v }) {
              q.value = p._data.data;
            },
          });
        },
        qe = () => {
          U.value = E.value.id;
        };
      function Y() {
        P.value = window.innerWidth <= 960;
      }
      const Ce = async () => {
        (a.value = []), (w.value = []);
        const { data: m } = await S(h.public.apiBaseurl + "userprofile/list", {
          onRequest({ request: e, options: p }) {},
          onRequestError({ request: e, options: p, error: v }) {
            console.log("Errore nella request:", v);
          },
          onResponseError({ request: e, response: p, options: v }) {
            t.value = {
              text: "Errore caricamento profili professionali",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: e, response: p, options: v }) {
            (a.value = p._data.data),
              p._data.data.forEach((n) => {
                w.value[n.id] = n.profilename;
              });
          },
        });
      };
      return (
        ce(async () => {
          E.value.role != "S"
            ? j.push("/")
            : (Y(),
              window.addEventListener("resize", Y),
              await Ce(),
              await qe(),
              await X());
        }),
        Re(() => {
          window.removeEventListener("resize", Y);
        }),
        (m, e) => {
          const p = ze,
            v = Oe;
          return (
            f(),
            V("div", je, [
              b("div", Fe, [
                e[19] || (e[19] = b("br", null, null, -1)),
                e[20] ||
                  (e[20] = b(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Utenti",
                    -1,
                  )),
                b("div", Je, [
                  o(
                    z,
                    { onClick: e[0] || (e[0] = (n) => le(0)), color: "green" },
                    {
                      default: l(() => [
                        o(J, null, {
                          default: l(() => [
                            ...(e[11] || (e[11] = [c("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        e[12] || (e[12] = c("Crea utente", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                e[21] ||
                  (e[21] = b("div", { style: { clear: "both" } }, null, -1)),
                o(
                  Ne,
                  {
                    density: "compact",
                    items: s(q),
                    headers: ye,
                    search: s(y),
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
                  },
                  {
                    top: l(() => [
                      o(
                        T,
                        {
                          modelValue: s(y),
                          "onUpdate:modelValue":
                            e[1] ||
                            (e[1] = (n) => (A(y) ? (y.value = n) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca",
                          autocomplete: "off",
                          density: "compact",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.firstname": l(({ item: n }) => [
                      b(
                        "span",
                        {
                          style: ie(n.activeuser == 0 ? "color:red" : ""),
                          title: n.id,
                        },
                        k(n.firstname),
                        13,
                        We,
                      ),
                    ]),
                    "item.lastname": l(({ item: n }) => [
                      b(
                        "span",
                        { style: ie(n.activeuser == 0 ? "color:red" : "") },
                        k(n.lastname),
                        5,
                      ),
                    ]),
                    "item.userprofile_id": l(({ item: n }) => [
                      c(k(s(w)[n.userprofile_id]), 1),
                    ]),
                    "item.actions": l(({ item: n }) => [
                      o(
                        Pe,
                        { "offset-y": "" },
                        {
                          activator: l(({ props: B }) => [
                            o(
                              z,
                              Ue(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                B,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: l(() => [
                            b("div", Ze, [
                              o(
                                ee,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: l(() => [
                                    o(
                                      K,
                                      {
                                        onClick: (B) => le(n.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: l(() => [
                                          o(
                                            J,
                                            { style: { opacity: "1" } },
                                            {
                                              default: l(() => [
                                                ...(e[13] ||
                                                  (e[13] = [
                                                    c("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: l(() => [
                                          o(
                                            Z,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: l(() => [
                                                ...(e[14] ||
                                                  (e[14] = [
                                                    c("Modifica", -1),
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
                                    s(U) != n.id
                                      ? (f(),
                                        x(
                                          K,
                                          {
                                            key: 0,
                                            onClick: (B) => ge(n),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: l(() => [
                                              o(
                                                J,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: l(() => [
                                                    ...(e[15] ||
                                                      (e[15] = [
                                                        c(
                                                          "mdi-account-arrow-right",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: l(() => [
                                              o(
                                                Z,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    ...(e[16] ||
                                                      (e[16] = [
                                                        c("Impersona", -1),
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
                                      : N("", !0),
                                    o(
                                      K,
                                      {
                                        onClick: (B) => ke(n),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: l(() => [
                                          o(
                                            J,
                                            { style: { opacity: "1" } },
                                            {
                                              default: l(() => [
                                                ...(e[17] ||
                                                  (e[17] = [
                                                    c("mdi-lock-reset", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: l(() => [
                                          o(
                                            Z,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: l(() => [
                                                ...(e[18] ||
                                                  (e[18] = [
                                                    c("Forza la password", -1),
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
                                    s(U) != n.id
                                      ? (f(),
                                        x(
                                          K,
                                          { key: 1, dense: "", exact: "" },
                                          {
                                            default: l(() => [
                                              o(
                                                Z,
                                                {
                                                  onClick: (B) => se(n.id),
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: l(() => [
                                                    o(
                                                      p,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (B) =>
                                                          se(n.id),
                                                        iconadelete: s(Q),
                                                        color: "red",
                                                        text:
                                                          "Vuoi veramente eliminare questo utente " +
                                                          n.email +
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
                                        ))
                                      : N("", !0),
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
                  ["items", "search"],
                ),
                s(R)
                  ? (f(),
                    x(
                      v,
                      {
                        key: 0,
                        profiles: s(a),
                        dialoginsmod: s(R),
                        idrec: s(M),
                        onClose: Ve,
                      },
                      null,
                      8,
                      ["profiles", "dialoginsmod", "idrec"],
                    ))
                  : N("", !0),
              ]),
              s(g)
                ? (f(),
                  x(
                    te,
                    {
                      key: 0,
                      modelValue: s(g),
                      "onUpdate:modelValue":
                        e[7] || (e[7] = (n) => (A(g) ? (g.value = n) : null)),
                      "max-width": "500px",
                    },
                    {
                      default: l(() => [
                        o(
                          de,
                          { class: "pa-4" },
                          {
                            default: l(() => [
                              b(
                                "h2",
                                Ge,
                                "Forza cambio password di " + k(s(i)),
                                1,
                              ),
                              o(
                                ve,
                                {
                                  modelValue: s(_),
                                  "onUpdate:modelValue":
                                    e[3] ||
                                    (e[3] = (n) =>
                                      A(_) ? (_.value = n) : null),
                                  ref: "form",
                                  "lazy-validation": "",
                                  onKeydown:
                                    e[4] ||
                                    (e[4] = L(
                                      G(() => {}, ["prevent"]),
                                      ["enter"],
                                    )),
                                },
                                {
                                  default: l(() => [
                                    o(
                                      T,
                                      {
                                        class: "mb-2",
                                        modelValue: s(C),
                                        "onUpdate:modelValue":
                                          e[2] ||
                                          (e[2] = (n) =>
                                            A(C) ? (C.value = n) : null),
                                        variant: "outlined",
                                        "persistent-hint": "",
                                        label: "Nuova Password*",
                                        required: "",
                                        rules: s(u),
                                      },
                                      null,
                                      8,
                                      ["modelValue", "rules"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"],
                              ),
                              o(
                                z,
                                {
                                  disabled: !s(_),
                                  color: "green",
                                  onClick: e[5] || (e[5] = (n) => xe()),
                                  style: { width: "100%" },
                                },
                                {
                                  default: l(() => [
                                    ...(e[22] ||
                                      (e[22] = [c("Cambia Password", -1)])),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["disabled"],
                              ),
                              o(
                                z,
                                {
                                  class: "mt-2",
                                  onClick: e[6] || (e[6] = (n) => oe()),
                                  color: "red",
                                  style: { width: "100%" },
                                },
                                {
                                  default: l(() => [
                                    ...(e[23] || (e[23] = [c("Annulla", -1)])),
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
                    8,
                    ["modelValue"],
                  ))
                : N("", !0),
              o(
                te,
                {
                  modelValue: s(r),
                  "onUpdate:modelValue":
                    e[10] || (e[10] = (n) => (A(r) ? (r.value = n) : null)),
                  "max-width": "50%",
                },
                {
                  default: l(() => [
                    o(
                      de,
                      { class: "pa-2" },
                      {
                        default: l(() => [
                          o(
                            Ie,
                            { style: { "word-break": "break-word" } },
                            {
                              default: l(() => [
                                c(
                                  " Sei sicuro di voler impersonare l'utente " +
                                    k(s($).firstname) +
                                    " " +
                                    k(s($).lastname) +
                                    " [ID " +
                                    k(s($).id) +
                                    "]? ",
                                  1,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          o(Me, null, {
                            default: l(() => [
                              o(
                                z,
                                {
                                  variant: "elevated",
                                  dark: "",
                                  onClick:
                                    e[8] || (e[8] = (n) => (r.value = !1)),
                                  color: "red",
                                },
                                {
                                  default: l(() => [
                                    ...(e[24] || (e[24] = [c("Chiudi", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              o(be),
                              o(
                                z,
                                {
                                  variant: "elevated",
                                  dark: "",
                                  onClick: e[9] || (e[9] = (n) => we()),
                                  color: "green",
                                },
                                {
                                  default: l(() => [
                                    ...(e[25] ||
                                      (e[25] = [c("IMPERSONA", -1)])),
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
          );
        }
      );
    },
  };
export { yt as default };
