import { _ as Nt } from "./ClyIuovc.js";
import {
  E as Vt,
  r as $,
  G as Rt,
  k as V,
  o as Oe,
  a1 as ut,
  as as We,
  J as le,
  y as ae,
  C as q,
  z as _,
  B as P,
  D as ue,
  K as he,
  L as G,
  M as je,
  N as Ge,
  O as Ot,
  x as Wt,
  Q as Ht,
  R as At,
  I as He,
  A as Ze,
  n as Bt,
  bb as Ut,
  V as Ae,
  bc as Yt,
  bd as Pt,
  s as Lt,
  aw as Be,
  W as Ie,
  a2 as _e,
  a3 as dt,
  ay as me,
  P as Z,
  be as ct,
  bf as qt,
  U as $t,
  bg as zt,
} from "./CYsiv7Qj.js";
import { V as Me } from "./B_hTT4u_.js";
import { $ as ve } from "./BvG7V8Ak.js";
import { V as jt } from "./MIubIMrV.js";
import { V as Xe, a as re } from "./Bj0ZT2dB.js";
import { V as Ke } from "./DCAzZvgN.js";
import { a as Je, V as Fe, s as Gt, R as Qe, f as Zt } from "./B_W9U9Wp.js";
import { V as Xt } from "./BqujDEEl.js";
import { V as Kt } from "./Dlfzj7mx.js";
import { V as ft } from "./Bhgh0dC5.js";
import { g as J } from "./BwyU5rju.js";
const Jt = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
      "min-height": "600px",
    },
  },
  Qt = { class: "pb-10 pageh2" },
  en = { style: { float: "right" } },
  tn = { style: { display: "flex" } },
  ca = {
    __name: "DialogInsModRapportino",
    props: {
      dialoginsmod: Boolean,
      attivita: Object,
      client_id: Number,
      project_id: Number,
      task_id: Number,
      seldate: String,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: a } = Vt(),
        n = Bt(),
        r = t,
        s = e,
        o = $([]),
        p = $(null),
        d = $(!1),
        y = $(!1),
        w = Rt("snackbar"),
        E = $([]),
        O = $(!0),
        Y = $([(m) => !!m || "Campo obbligatorio"]),
        x = $([]);
      $("");
      const R = $({}),
        k = V(() => Object.keys(R.value).length > 0),
        S = () => ({
          datei: s.seldate != null ? new Date(s.seldate) : new Date(),
          dateff: { hours: u().substr(0, 2), minutes: u().substr(3, 2) },
          datefi: {
            hours: u(new Date(Date.now() - 3600 * 1e3)).substr(0, 2),
            minutes: u(new Date(Date.now() - 3600 * 1e3)).substr(3, 2),
          },
          task_id: s.task_id != null ? s.task_id : null,
          activity_id: null,
        }),
        T = $(null),
        A = () => {
          T.value.push(S());
        },
        C = (m) => {
          let c = { ...T.value[m] };
          T.value.push(c);
        },
        i = (m) => {
          T.value.splice(m, 1);
        },
        l = async () => {
          y.value = !1;
          let m = {
            id: s.attivita != null ? s.attivita.id : 0,
            tasks: T.value,
          };
          await ve(n.public.apiBaseurl + "hour/createedit", {
            method: "POST",
            body: m,
          })
            .then(() => {
              s.idrec == 0
                ? (w.value = {
                    text: "Creazione report ore completato",
                    type: "success",
                    show: !0,
                  })
                : (w.value = {
                    text: "Modifica report ore completato",
                    type: "success",
                    show: !0,
                  }),
                v();
            })
            .catch((c) => {
              let f = JSON.parse(c.data).errors.title;
              console.log("catcherr", c.data),
                (w.value = { text: f, type: "danger", show: !0 });
            });
        };
      function v() {
        r("close");
      }
      function b(m) {
        return m.toLocaleDateString("it-IT");
      }
      function I(m) {
        return m.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      const W = async () => {
          (E.value = []),
            (await ve(n.public.apiBaseurl + "task/listall")).data.forEach(
              (f) => {
                let h =
                    f.Userprofile.id != null
                      ? " [" + f.Userprofile.code + "]"
                      : "",
                  F =
                    o.value[f.Project.client_id] != null
                      ? " - " + o.value[f.Project.client_id]
                      : "";
                E.value.push({
                  id: Number(f.Task.id),
                  shortname:
                    f.Project.code +
                    F +
                    " - " +
                    f.Project.name +
                    " - " +
                    f.Task.shortname +
                    h,
                  type: f.Project.type,
                });
              },
            );
        },
        B = async () => {
          o.value = [];
          const { data: m } = ve(n.public.apiBaseurl + "client/list", {
            onRequest({ request: c, options: f }) {},
            onRequestError({ request: c, options: f, error: h }) {
              console.log("Errore nella request:", h);
            },
            onResponseError({ request: c, response: f, options: h }) {
              w.value = {
                text: "Errore caricamento clienti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: c, response: f, options: h }) {
              f._data.data.forEach((F) => {
                o.value[F.id] = F.name;
              });
            },
          });
        },
        j = async () => {
          const { data: m } = await ve(
            n.public.apiBaseurl + "hour/delete/" + s.attivita.id,
            {
              onRequest({ request: c, options: f }) {},
              onRequestError({ request: c, options: f, error: h }) {
                console.log("Errore nella request:", h),
                  (w.value = {
                    text: "Errore: " + h,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: c, response: f, options: h }) {
                console.log(
                  "Errore nella response: " + f._data.error.messages[0],
                ),
                  (w.value = {
                    text: "Errore cancellazione report ore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: c, response: f, options: h }) {
                v();
              },
            },
          );
        },
        M = async () => {
          T.value = null;
          const { data: m } = await ve(
            n.public.apiBaseurl + "hour/get/" + s.attivita.id,
            {
              onRequest({ request: c, options: f }) {},
              onRequestError({ request: c, options: f, error: h }) {
                console.log("Errore nella request:", h),
                  (w.value = {
                    text: "Errore: " + h,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: c, response: f, options: h }) {
                console.log(
                  "Errore nella response: " + f._data.error.messages[0],
                ),
                  (w.value = {
                    text: "Errore caricamento report ore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: c, response: f, options: h }) {
                let F = f._data.data,
                  N = () => ({
                    datei: new Date(F.startdate),
                    dateff: {
                      hours: new Date(F.enddate).getHours(),
                      minutes: new Date(F.enddate).getMinutes(),
                    },
                    datefi: {
                      hours: new Date(F.startdate).getHours(),
                      minutes: new Date(F.startdate).getMinutes(),
                    },
                    task_id: Number(F.task_id),
                    error: "",
                    activity_id: F.activity_id == 0 ? null : F.activity_id,
                  });
                E.value.some((H) => H.id === Number(F.task_id)) ||
                  E.value.push({
                    id: F.task_id,
                    shortname: F.name + " [NON ASSEGNATO]",
                  }),
                  (T.value = Array.from({ length: 1 }, N));
              },
            },
          );
        };
      function u(m = new Date()) {
        const c = new Date(m),
          f = m.getMinutes(),
          h = Math.round(f / 15) * 15;
        return (
          h === 60
            ? c.setHours(m.getHours() + 1, 0, 0, 0)
            : c.setMinutes(h, 0, 0),
          c.toTimeString().slice(0, 5)
        );
      }
      const g = async () => {
        (p.value = null), (x.value = []);
        const { data: m } = await ve(n.public.apiBaseurl + "activity/list", {
          onRequest({ request: c, options: f }) {},
          onRequestError({ request: c, options: f, error: h }) {
            console.log("Errore nella request:", h);
          },
          onResponseError({ request: c, response: f, options: h }) {
            w.value = {
              text: "Errore caricamento attività",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: c, response: f, options: h }) {
            f._data.data.forEach((N) => {
              x.value.push({
                id: N.Activity.id,
                name: N.Activity.name,
                type: N.Activity.type,
              });
            });
          },
        });
      };
      function D(m, c) {
        let f = E.value.find((h) => h.id == m);
        if (f && f.type == "F") {
          let h = x.value.find((F) => F.type == "F");
          T.value[c].activity_id = h.id;
        }
      }
      return (
        Oe(async () => {
          (d.value = !0),
            await W(),
            await g(),
            await B(),
            s.attivita != null && s.attivita != null
              ? await M()
              : ((T.value = Array.from({ length: 1 }, S)),
                await ut(),
                s.task_id != null && D(s.task_id, 0));
        }),
        We(
          T,
          (m) => {
            (R.value = {}),
              m.forEach((f, h) => {
                if (!f.datefi || !f.dateff) return;
                const F =
                    Number(f.datefi.hours) * 60 + Number(f.datefi.minutes),
                  N = Number(f.dateff.hours) * 60 + Number(f.dateff.minutes);
                if (N < F) {
                  R.value[h] = "Ora fine minore di ora inizio";
                  return;
                }
                const U = x.value.find((H) => H.id === f.activity_id);
                U &&
                  U.type === "F" &&
                  N - F > 480 &&
                  (R.value[h] =
                    "Per questa attività non è possibile registrare più di 8 ore");
              });
            const c = {};
            m.forEach((f) => {
              const h = x.value.find((z) => z.id === f.activity_id);
              if (!h || h.type !== "F" || !f.datei || !f.datefi || !f.dateff)
                return;
              const F = f.datei.toISOString().substring(0, 10),
                N = Number(f.datefi.hours) * 60 + Number(f.datefi.minutes),
                H = Number(f.dateff.hours) * 60 + Number(f.dateff.minutes) - N;
              H <= 0 || (c[F] = (c[F] || 0) + H);
            }),
              Object.entries(c).forEach(([f, h]) => {
                h <= 480 ||
                  m.forEach((F, N) => {
                    const U = x.value.find((H) => H.id === F.activity_id);
                    U &&
                      U.type === "F" &&
                      F.datei.toISOString().substring(0, 10) === f &&
                      (R.value[N] =
                        "Per questa data il totale delle ore dell'attività supera 8 ore");
                  });
              });
          },
          { deep: !0 },
        ),
        (m, c) => {
          const f = Nt;
          return (
            ae(),
            le(
              Kt,
              {
                class: "modaldialog",
                onAfterLeave: v,
                modelValue: G(d),
                "onUpdate:modelValue":
                  c[4] || (c[4] = (h) => (je(d) ? (d.value = h) : null)),
                width: "auto",
                style: { "max-width": "90%" },
                persistent: "",
              },
              {
                default: q(() => [
                  _("div", Jt, [
                    _("h2", Qt, [
                      c[5] || (c[5] = ue("Report Ore ", -1)),
                      _("div", en, [
                        s.attivita != null
                          ? (ae(),
                            le(
                              f,
                              {
                                key: 0,
                                onDelete: c[0] || (c[0] = (h) => j()),
                                iconadelete: G(O),
                                color: "red",
                                text: "Vuoi veramente eliminare questo report ore?",
                              },
                              null,
                              8,
                              ["iconadelete"],
                            ))
                          : he("", !0),
                      ]),
                    ]),
                    P(
                      jt,
                      {
                        onKeydown:
                          c[2] ||
                          (c[2] = Ge(
                            Ot(() => {}, ["prevent"]),
                            ["enter"],
                          )),
                        modelValue: G(y),
                        "onUpdate:modelValue":
                          c[3] ||
                          (c[3] = (h) => (je(y) ? (y.value = h) : null)),
                        ref: "form",
                        "lazy-validation": "",
                      },
                      {
                        default: q(() => [
                          (ae(!0),
                          Wt(
                            Ht,
                            null,
                            At(
                              G(T),
                              (h, F) => (
                                ae(),
                                le(
                                  Xe,
                                  { key: F, class: "mt-0" },
                                  {
                                    default: q(() => [
                                      P(
                                        re,
                                        { cols: "12", sm: "4" },
                                        {
                                          default: q(() => [
                                            c[6] ||
                                              (c[6] = _(
                                                "b",
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                "Data",
                                                -1,
                                              )),
                                            P(
                                              G(Me),
                                              {
                                                "text-input": {
                                                  format: "dd/MM/yyyy",
                                                },
                                                modelValue: h.datei,
                                                "onUpdate:modelValue": (N) =>
                                                  (h.datei = N),
                                                format: b,
                                                locale: "it",
                                                "select-text": "Seleziona",
                                                "cancel-text": "Annulla",
                                                minutesIncrement: "15",
                                                minutesGridIncrement: "15",
                                                onKeydown:
                                                  c[1] ||
                                                  (c[1] = Ge(
                                                    (N) => N.preventDefault(),
                                                    ["enter"],
                                                  )),
                                                enableTimePicker: !1,
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
                                        1024,
                                      ),
                                      P(
                                        re,
                                        { cols: "12", sm: "4" },
                                        {
                                          default: q(() => [
                                            c[7] ||
                                              (c[7] = _(
                                                "b",
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                "Ora Inizio",
                                                -1,
                                              )),
                                            P(
                                              G(Me),
                                              {
                                                "time-picker": "",
                                                "text-input": {
                                                  format: "HH:mm",
                                                },
                                                modelValue: h.datefi,
                                                "onUpdate:modelValue": (N) =>
                                                  (h.datefi = N),
                                                format: I,
                                                locale: "it",
                                                "select-text": "Seleziona",
                                                "cancel-text": "Annulla",
                                                minutesIncrement: "15",
                                                minutesGridIncrement: "15",
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
                                        1024,
                                      ),
                                      P(
                                        re,
                                        { cols: "12", sm: "4" },
                                        {
                                          default: q(() => [
                                            c[8] ||
                                              (c[8] = _(
                                                "b",
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                "Ora Fine",
                                                -1,
                                              )),
                                            P(
                                              G(Me),
                                              {
                                                "time-picker": "",
                                                "text-input": {
                                                  format: "HH:mm",
                                                },
                                                modelValue: h.dateff,
                                                "onUpdate:modelValue": (N) =>
                                                  (h.dateff = N),
                                                format: I,
                                                locale: "it",
                                                "select-text": "Seleziona",
                                                "cancel-text": "Annulla",
                                                minutesIncrement: "15",
                                                minutesGridIncrement: "15",
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
                                        1024,
                                      ),
                                      P(
                                        re,
                                        {
                                          cols: "12",
                                          sm: s.attivita == null ? "8" : "9",
                                          class: "mb-0 pb-0",
                                        },
                                        {
                                          default: q(() => [
                                            G(E).length
                                              ? (ae(),
                                                le(
                                                  Ke,
                                                  {
                                                    key: 0,
                                                    autocomplete: "off",
                                                    class: "mb-2",
                                                    modelValue: h.task_id,
                                                    "onUpdate:modelValue": [
                                                      (N) => (h.task_id = N),
                                                      (N) => D(h.task_id, F),
                                                    ],
                                                    items: G(E),
                                                    "item-title": "shortname",
                                                    "item-value": "id",
                                                    required: "",
                                                    rules: G(Y),
                                                    density: "compact",
                                                    label: "Task*",
                                                    "persistent-hint": "",
                                                    variant: "outlined",
                                                    clearable: "",
                                                    "no-data-text":
                                                      "Nessun risultato trovato",
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "onUpdate:modelValue",
                                                    "items",
                                                    "rules",
                                                  ],
                                                ))
                                              : he("", !0),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["sm"],
                                      ),
                                      P(
                                        re,
                                        {
                                          cols: "12",
                                          sm: "3",
                                          class: "mb-0 pb-0",
                                        },
                                        {
                                          default: q(() => [
                                            P(
                                              Ke,
                                              {
                                                autocomplete: "off",
                                                class: "mb-2",
                                                modelValue: h.activity_id,
                                                "onUpdate:modelValue": (N) =>
                                                  (h.activity_id = N),
                                                items: G(x),
                                                "item-title": "name",
                                                "item-value": "id",
                                                density: "compact",
                                                label: "Nome attività",
                                                "persistent-hint": "",
                                                variant: "outlined",
                                                clearable: "",
                                                "no-data-text":
                                                  "Nessun risultato trovato",
                                              },
                                              {
                                                selection: q(({ item: N }) => [
                                                  _(
                                                    "span",
                                                    {
                                                      style: He({
                                                        color:
                                                          N.raw.type === "F"
                                                            ? "green"
                                                            : "inherit",
                                                        fontWeight:
                                                          N.raw.type === "F"
                                                            ? "bold"
                                                            : "inherit",
                                                      }),
                                                    },
                                                    Ze(N.raw.name),
                                                    5,
                                                  ),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              [
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "items",
                                              ],
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024,
                                      ),
                                      s.attivita == null
                                        ? (ae(),
                                          le(
                                            re,
                                            {
                                              key: 0,
                                              cols: "1",
                                              class: "mb-0 pb-0",
                                            },
                                            {
                                              default: q(() => [
                                                P(
                                                  Je,
                                                  {
                                                    class: "mt-2 mr-3",
                                                    color: "error",
                                                    title: "Rimuovi Riga",
                                                    onClick: (N) => i(F),
                                                  },
                                                  {
                                                    default: q(() => [
                                                      ...(c[9] ||
                                                        (c[9] = [
                                                          ue("mdi-delete", -1),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  ["onClick"],
                                                ),
                                                P(
                                                  Je,
                                                  {
                                                    class: "mt-2",
                                                    color: "black",
                                                    title: "Duplica Riga",
                                                    onClick: (N) => C(F),
                                                  },
                                                  {
                                                    default: q(() => [
                                                      ...(c[10] ||
                                                        (c[10] = [
                                                          ue(
                                                            "mdi-content-copy",
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
                                              _: 2,
                                            },
                                            1024,
                                          ))
                                        : he("", !0),
                                      G(R)[F]
                                        ? (ae(),
                                          le(
                                            re,
                                            {
                                              key: 1,
                                              cols: "12",
                                              sm: "12",
                                              style: {
                                                color: "red",
                                                "font-weight": "bold",
                                              },
                                            },
                                            {
                                              default: q(() => [
                                                ue(Ze(G(R)[F]), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1024,
                                          ))
                                        : he("", !0),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                          s.attivita == null
                            ? (ae(),
                              le(
                                Xe,
                                { key: 0, style: { margin: "60px" } },
                                {
                                  default: q(() => [
                                    P(
                                      re,
                                      { class: "text-center" },
                                      {
                                        default: q(() => [
                                          P(Fe, {
                                            icon: "mdi-plus",
                                            color: "primary",
                                            title: "Aggiungi Riga",
                                            onClick: A,
                                          }),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ))
                            : he("", !0),
                          _("div", tn, [
                            P(
                              Fe,
                              { class: "", onClick: v, color: "red" },
                              {
                                default: q(() => [
                                  ...(c[11] || (c[11] = [ue(" Annulla ", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                            P(Xt),
                            P(
                              Fe,
                              {
                                onClick: l,
                                disabled: !G(y) || G(k),
                                color: "green",
                              },
                              {
                                default: q(() => [
                                  ...(c[12] || (c[12] = [ue("Salva", -1)])),
                                ]),
                                _: 1,
                              },
                              8,
                              ["disabled"],
                            ),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"],
                    ),
                    c[13] || (c[13] = _("br", null, null, -1)),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            )
          );
        }
      );
    },
  };
function nn(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
const vt =
    /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,
  mt = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,
  an = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  rn = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  on = 28,
  sn = 31,
  Ue = 12,
  yt = 1,
  Ee = 1,
  oe = 7,
  et = 60,
  ln = 59,
  un = 1440,
  dn = 24,
  cn = 23,
  fn = 0,
  vn = 1e4,
  mn = 100,
  yn = 100,
  gn = 1e4;
function hn(e, t, a) {
  const n = X(e);
  return wt(n, t[0], bt), Q(n), a && fe(n, a, n.hasTime), n;
}
function pn(e, t, a) {
  const n = X(e);
  return wt(n, t[t.length - 1]), Q(n), a && fe(n, a, n.hasTime), n;
}
function gt(e) {
  const t = X(e);
  return (t.day = Ee), xe(t), Q(t), t;
}
function ht(e) {
  const t = X(e);
  return (t.day = Pe(t.year, t.month)), xe(t), Q(t), t;
}
function ye(e) {
  return isFinite(parseInt(e));
}
function kn(e) {
  return (
    (typeof e == "number" && isFinite(e)) ||
    !!mt.exec(e) ||
    (typeof e == "object" && isFinite(e.hour) && isFinite(e.minute))
  );
}
function tt(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = mt.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : !1;
  } else
    return typeof e == "object"
      ? typeof e.hour != "number" || typeof e.minute != "number"
        ? !1
        : e.hour * 60 + e.minute
      : !1;
}
function ge(e) {
  return (
    (typeof e == "number" && isFinite(e)) ||
    (typeof e == "string" && !!vt.exec(e)) ||
    e instanceof Date
  );
}
function te(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    a = arguments.length > 2 ? arguments[2] : void 0;
  if (
    (typeof e == "number" && isFinite(e) && (e = new Date(e)),
    e instanceof Date)
  ) {
    const s = Ye(e);
    return a && fe(s, a, s.hasTime), s;
  }
  if (typeof e != "string") {
    if (t)
      throw new Error(
        `${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`,
      );
    return null;
  }
  const n = vt.exec(e);
  if (!n) {
    if (t)
      throw new Error(
        `${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`,
      );
    return null;
  }
  const r = {
    date: e,
    time: "",
    year: parseInt(n[1]),
    month: parseInt(n[2]),
    day: parseInt(n[4]) || 1,
    hour: parseInt(n[6]) || 0,
    minute: parseInt(n[8]) || 0,
    weekday: 0,
    hasDay: !!n[4],
    hasTime: !!(n[6] && n[8]),
    past: !1,
    present: !1,
    future: !1,
  };
  return xe(r), Q(r), a && fe(r, a, r.hasTime), r;
}
function Ye(e) {
  return Q({
    date: "",
    time: "",
    year: e.getFullYear(),
    month: e.getMonth() + 1,
    day: e.getDate(),
    weekday: e.getDay(),
    hour: e.getHours(),
    minute: e.getMinutes(),
    hasDay: !0,
    hasTime: !0,
    past: !1,
    present: !0,
    future: !1,
  });
}
function L(e) {
  return e.year * vn + e.month * mn + e.day;
}
function Ne(e) {
  return e.hour * yn + e.minute;
}
function ie(e) {
  return L(e) * gn + Ne(e);
}
function fe(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    n = L(t),
    r = L(e),
    s = n === r;
  return (
    e.hasTime && a && s && ((n = Ne(t)), (r = Ne(e)), (s = n === r)),
    (e.past = r < n),
    (e.present = s),
    (e.future = r > n),
    e
  );
}
function nt(e) {
  return e instanceof Date || (typeof e == "number" && isFinite(e));
}
function at(e, t, a) {
  return (
    e.hasTime !== t &&
      ((e.hasTime = t),
      t || ((e.hour = cn), (e.minute = ln), (e.time = kt(e)))),
    e
  );
}
function pt(e, t, a) {
  return (
    (e.hasTime = !0),
    (e.hour = 0),
    (e.minute = 0),
    Ve(e, t),
    Q(e),
    a && fe(e, a, !0),
    e
  );
}
function xe(e) {
  return (e.weekday = bn(e)), e;
}
function Q(e) {
  return (e.time = kt(e)), (e.date = wn(e)), e;
}
function bn(e) {
  if (e.hasDay) {
    const t = Math.floor,
      a = e.day,
      n = ((e.month + 9) % Ue) + 1,
      r = t(e.year / 100),
      s = (e.year % 100) - (e.month <= 2 ? 1 : 0);
    return (
      (((a + t(2.6 * n - 0.2) - 2 * r + s + t(s / 4) + t(r / 4)) % 7) + 7) % 7
    );
  }
  return e.weekday;
}
function Pe(e, t) {
  return nn(e) ? rn[t] : an[t];
}
function X(e) {
  if (e == null) return null;
  const {
    date: t,
    time: a,
    year: n,
    month: r,
    day: s,
    weekday: o,
    hour: p,
    minute: d,
    hasDay: y,
    hasTime: w,
    past: E,
    present: O,
    future: Y,
  } = e;
  return {
    date: t,
    time: a,
    year: n,
    month: r,
    day: s,
    weekday: o,
    hour: p,
    minute: d,
    hasDay: y,
    hasTime: w,
    past: E,
    present: O,
    future: Y,
  };
}
function ce(e, t) {
  let a = String(e);
  for (; a.length < t; ) a = "0" + a;
  return a;
}
function wn(e) {
  let t = `${ce(e.year, 4)}-${ce(e.month, 2)}`;
  return e.hasDay && (t += `-${ce(e.day, 2)}`), t;
}
function kt(e) {
  return e.hasTime ? `${ce(e.hour, 2)}:${ce(e.minute, 2)}` : "";
}
function Ve(e, t) {
  for (e.minute += t; e.minute >= et; )
    (e.minute -= et), e.hour++, e.hour >= dn && (se(e), (e.hour = fn));
  return e;
}
function se(e) {
  return (
    e.day++,
    (e.weekday = (e.weekday + 1) % oe),
    e.day > on &&
      e.day > Pe(e.year, e.month) &&
      ((e.day = Ee), e.month++, e.month > Ue && ((e.month = yt), e.year++)),
    e
  );
}
function bt(e) {
  return (
    e.day--,
    (e.weekday = (e.weekday + 6) % oe),
    e.day < Ee &&
      (e.month--,
      e.month < yt && (e.year--, (e.month = Ue)),
      (e.day = Pe(e.year, e.month))),
    e
  );
}
function de(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : se,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --a >= 0; ) t(e);
  return e;
}
function Dn(e, t) {
  const a = (t.year - e.year) * 525600,
    n = (t.month - e.month) * 43800,
    r = (t.day - e.day) * 1440,
    s = (t.hour - e.hour) * 60,
    o = t.minute - e.minute;
  return a + n + r + s + o;
}
function wt(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : se,
    n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --n >= 0; ) a(e);
  return e;
}
function _n(e) {
  const t = [1, 1, 1, 1, 1, 1, 1],
    a = [0, 0, 0, 0, 0, 0, 0];
  for (let n = 0; n < e.length; n++) a[e[n]] = 1;
  for (let n = 0; n < oe; n++) {
    let r = 1;
    for (let s = 1; s < oe; s++) {
      const o = (n + s) % oe;
      if (a[o]) break;
      r++;
    }
    t[n] = a[n] * r;
  }
  return t;
}
function Re(e) {
  const t = `${ce(e.hour, 2)}:${ce(e.minute, 2)}`,
    a = e.date;
  return new Date(`${a}T${t}:00+00:00`);
}
function Se(e, t, a, n) {
  let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42,
    s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const o = L(t),
    p = [];
  let d = X(e),
    y = 0,
    w = y === o;
  if (o < L(e)) throw new Error("End date is earlier than start date.");
  for (; (!w || p.length < s) && p.length < r; ) {
    if (((y = L(d)), (w = w || y === o), n[d.weekday] === 0)) {
      d = se(d);
      continue;
    }
    const E = X(d);
    Q(E), fe(E, a), p.push(E), (d = de(d, se, n[d.weekday]));
  }
  if (!p.length)
    throw new Error(
      "No dates found using specified start date, end date, and weekdays.",
    );
  return p;
}
function Sn(e, t, a, n, r) {
  const s = [];
  for (let o = 0; o < n; o++) {
    const p = t + o * a,
      d = X(e);
    s.push(pt(d, p, r));
  }
  return s;
}
function ke(e, t) {
  const a = (n, r) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u"
    ? a
    : (n, r) => {
        try {
          return new Intl.DateTimeFormat(e || void 0, t(n, r)).format(Re(n));
        } catch {
          return "";
        }
      };
}
function Tn(e) {
  if ((typeof e == "string" && (e = e.split(",")), Array.isArray(e))) {
    const t = e.map((r) => parseInt(r));
    if (t.length > oe || t.length === 0) return !1;
    const a = {};
    let n = !1;
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      if (!isFinite(s) || s < 0 || s >= oe) return !1;
      if (r > 0) {
        const o = s - t[r - 1];
        if (o < 0) {
          if (n) return !1;
          n = !0;
        } else if (o === 0) return !1;
      }
      if (a[s]) return !1;
      a[s] = !0;
    }
    return !0;
  }
  return !1;
}
function In(e) {
  const t = Ut({
      now: te("0000-00-00 00:00", !0),
      today: te("0000-00-00", !0),
    }),
    a = V(() => (e.now && ge(e.now) ? te(e.now, !0) : null));
  function n() {
    (t.now.present = t.today.present = !0),
      (t.now.past = t.today.past = !1),
      (t.now.future = t.today.future = !1);
  }
  function r() {
    return Ye(new Date());
  }
  function s(d, y) {
    d.date !== y.date &&
      ((y.year = d.year),
      (y.month = d.month),
      (y.day = d.day),
      (y.weekday = d.weekday),
      (y.date = d.date));
  }
  function o(d, y) {
    d.time !== y.time &&
      ((y.hour = d.hour), (y.minute = d.minute), (y.time = d.time));
  }
  function p() {
    const d = a.value || r();
    s(d, t.now), o(d, t.now), s(d, t.today);
  }
  return (
    We(a, p),
    p(),
    n(),
    {
      times: t,
      parsedNow: a,
      updateTimes: p,
      setPresent: n,
      getNow: r,
      updateDay: s,
      updateTime: o,
    }
  );
}
const Ce = Ae(
  {
    start: {
      type: [String, Number, Date],
      validate: ge,
      default: () => Ye(new Date()).date,
    },
    end: { type: [String, Number, Date], validate: ge },
    weekdays: {
      type: [Array, String],
      default: () => [0, 1, 2, 3, 4, 5, 6],
      validate: Tn,
    },
    firstDayOfWeek: [Number, String],
    firstDayOfYear: [Number, String],
    weekdayFormat: { type: Function, default: null },
    dayFormat: { type: Function, default: null },
    locale: String,
    now: { type: String, validator: ge },
    type: { type: String, default: "month" },
  },
  "VCalendar-base",
);
function Le(e) {
  const { times: t, updateTimes: a } = In({ now: e.now }),
    n = Yt(e),
    r = Pt(),
    s = V(() => (e.type === "month" ? gt(te(e.start, !0)) : te(e.start, !0))),
    o = V(() => {
      const C = s.value,
        i = (e.end && te(e.end)) || C,
        l = ie(i) < ie(C) ? C : i;
      return e.type === "month" ? ht(l) : l;
    }),
    p = V(() => (ge(e.modelValue) ? te(e.modelValue, !0) : s.value || t.today)),
    d = V(() => {
      const C = Array.isArray(e.weekdays)
          ? e.weekdays
          : (e.weekdays || "").split(",").map((l) => parseInt(l, 10)),
        i = r.toJsDate(r.startOfWeek(r.date(), e.firstDayOfWeek)).getDay();
      return [
        ...C.toSorted().filter((l) => l >= i),
        ...C.toSorted().filter((l) => l < i),
      ];
    }),
    y = V(() => {
      const C = p.value,
        i = parseInt(String(e.categoryDays)) || 1;
      switch (e.type) {
        case "day":
          return [C.weekday];
        case "4day":
          return [
            C.weekday,
            (C.weekday + 1) % 7,
            (C.weekday + 2) % 7,
            (C.weekday + 3) % 7,
          ];
        case "category":
          return Array.from({ length: i }, (l, v) => (C.weekday + v) % 7);
        default:
          return d.value;
      }
    }),
    w = V(() => _n(d.value)),
    E = V(() => Se(s.value, o.value, t.today, w.value)),
    O = V(() =>
      e.dayFormat
        ? e.dayFormat
        : ke(n.current.value, () => ({ timeZone: "UTC", day: "numeric" })),
    ),
    Y = V(() =>
      e.weekdayFormat
        ? e.weekdayFormat
        : ke(n.current.value, (C, i) => ({
            timeZone: "UTC",
            weekday: i ? "short" : "long",
          })),
    );
  function x(C) {
    return Gt(C);
  }
  function R(C) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      "v-present": C.present,
      "v-past": C.past,
      "v-future": C.future,
      "v-outside": i,
    };
  }
  function k(C) {
    return r.getWeek(r.date(C.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function S(C) {
    return hn(C, d.value, t.today);
  }
  function T(C) {
    return pn(C, d.value, t.today);
  }
  function A(C) {
    return ke(n.current.value, () => C);
  }
  return {
    times: t,
    locale: n,
    parsedValue: p,
    parsedWeekdays: d,
    effectiveWeekdays: y,
    weekdaySkips: w,
    parsedStart: s,
    parsedEnd: o,
    days: E,
    dayFormatter: O,
    weekdayFormatter: Y,
    getColorProps: x,
    getRelativeClasses: R,
    getWeekNumber: k,
    getStartOfWeek: S,
    getEndOfWeek: T,
    getFormatter: A,
    updateTimes: a,
  };
}
const Dt = Ae(
  {
    maxDays: { type: Number, default: 7 },
    intervalHeight: { type: [Number, String], default: 48, validate: ye },
    intervalWidth: { type: [Number, String], default: 60, validate: ye },
    intervalMinutes: { type: [Number, String], default: 60, validate: ye },
    firstInterval: { type: [Number, String], default: 0, validate: ye },
    firstTime: { type: [Number, String, Object], validate: kn },
    intervalCount: { type: [Number, String], default: 24, validate: ye },
    intervalFormat: { type: Function, default: null },
    intervalStyle: { type: Function, default: null },
    showIntervalLabel: { type: Function, default: null },
  },
  "VCalendar-intervals",
);
function _t(e) {
  const t = Le(e),
    a = Lt(),
    n = V(() => parseInt(String(e.firstInterval || 0))),
    r = V(() => parseInt(String(e.intervalMinutes || 60))),
    s = V(() => parseInt(String(e.intervalCount || 24))),
    o = V(() => parseFloat(String(e.intervalHeight || 48))),
    p = V(() => tt(e.firstTime)),
    d = V(() => {
      const i = p.value;
      return i !== !1 && i >= 0 && i <= un ? i : n.value * r.value;
    }),
    y = V(() => s.value * o.value),
    w = V(() =>
      Se(
        t.parsedStart.value,
        t.parsedEnd.value,
        t.times.today,
        t.weekdaySkips.value,
        e.maxDays,
      ),
    ),
    E = V(() => {
      const i = w.value,
        l = d.value,
        v = r.value,
        b = s.value,
        I = t.times.now;
      return i.map((W) => Sn(W, l, v, b, I));
    }),
    O = V(() =>
      e.intervalFormat
        ? e.intervalFormat
        : ke(t.locale.current.value, (i, l) =>
            l
              ? i.minute === 0
                ? { timeZone: "UTC", hour: "numeric" }
                : { timeZone: "UTC", hour: "numeric", minute: "2-digit" }
              : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" },
          ),
    );
  function Y(i) {
    const l = E.value[0][0];
    return !(l.hour === i.hour && l.minute === i.minute);
  }
  function x(i) {}
  function R(i, l) {
    const v = X(l),
      b = i.currentTarget.getBoundingClientRect(),
      I = d.value,
      W = i,
      B = i,
      j = W.changedTouches || W.touches,
      u = ((j && j[0] ? j[0].clientY : B.clientY) - b.top) / o.value,
      g = Math.floor(u * r.value),
      D = I + g;
    return pt(v, D, t.times.now);
  }
  function k(i) {
    const l = X(i);
    return (
      (l.timeToY = A),
      (l.timeDelta = C),
      (l.minutesToPixels = T),
      (l.week = w.value),
      (l.intervalRange = [d.value, d.value + s.value * r.value]),
      l
    );
  }
  function S(i) {
    const l = A(i),
      v = a.value;
    return l === !1 || !v ? !1 : ((v.scrollTop = l), !0);
  }
  function T(i) {
    return (i / r.value) * o.value;
  }
  function A(i) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const v = l !== !1;
    let I = C(i, typeof l != "boolean" ? l : void 0);
    return (
      I === !1 ||
        ((I *= y.value), v && (I < 0 && (I = 0), I > y.value && (I = y.value))),
      I
    );
  }
  function C(i, l) {
    let v = tt(i);
    if (v === !1) return !1;
    const b = s.value * r.value;
    if (l && typeof i == "object" && "day" in i) {
      const W = L(i),
        B = L(l);
      W > B && (v += (W - B) * b);
    }
    const I = d.value;
    return (v - I) / b;
  }
  return {
    ...t,
    scrollAreaRef: a,
    parsedFirstInterval: n,
    parsedIntervalMinutes: r,
    parsedIntervalCount: s,
    parsedIntervalHeight: o,
    parsedFirstTime: p,
    firstMinute: d,
    bodyHeight: y,
    days: w,
    intervals: E,
    intervalFormatter: O,
    showIntervalLabelDefault: Y,
    intervalStyleDefault: x,
    getTimestampAtEvent: R,
    getSlotScope: k,
    scrollToTime: S,
    minutesToPixels: T,
    timeToY: A,
    timeDelta: C,
  };
}
function En(e, t) {
  const a = t.value,
    n = { passive: !t.modifiers?.active };
  window.addEventListener("resize", a, n),
    (e._onResize = Object(e._onResize)),
    (e._onResize[t.instance.$.uid] = { handler: a, options: n }),
    t.modifiers?.quiet || a();
}
function xn(e, t) {
  if (!e._onResize?.[t.instance.$.uid]) return;
  const { handler: a, options: n } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", a, n),
    delete e._onResize[t.instance.$.uid];
}
const Te = { mounted: En, unmounted: xn },
  pe = Be({
    name: "VCalendarDaily",
    directives: { vResize: Te },
    props: {
      color: String,
      shortWeekdays: { type: Boolean, default: !0 },
      shortIntervals: { type: Boolean, default: !0 },
      hideHeader: Boolean,
      ...Ce(),
      ...Dt(),
    },
    setup(e, t) {
      let { slots: a, attrs: n } = t;
      const r = $(0),
        s = $(),
        o = _t(e);
      function p() {
        ut(d);
      }
      function d() {
        r.value = y();
      }
      function y() {
        return o.scrollAreaRef.value && s.value
          ? o.scrollAreaRef.value.offsetWidth - s.value.offsetWidth
          : 0;
      }
      function w() {
        return _(
          "div",
          {
            class: "v-calendar-daily__head",
            style: { marginRight: r.value + "px" },
          },
          [E(), O()],
        );
      }
      function E() {
        const M = me(e.intervalWidth);
        return _(
          "div",
          { class: "v-calendar-daily__intervals-head", style: { width: M } },
          [a["interval-header"]?.()],
        );
      }
      function O() {
        return o.days.value.map(Y);
      }
      function Y(M, u) {
        const g = J(n, ":day", (D) => ({
          nativeEvent: D,
          ...o.getSlotScope(M),
        }));
        return _(
          "div",
          Z(
            {
              key: M.date,
              class: ["v-calendar-daily_head-day", o.getRelativeClasses(M)],
            },
            g,
          ),
          [R(M), k(M), x(M, u)],
        );
      }
      function x(M, u) {
        return a["day-header"]?.({ week: o.days.value, ...M, index: u }) ?? [];
      }
      function R(M) {
        const u = M.present ? e.color : void 0;
        return _(
          "div",
          Z(o.getColorProps({ text: u }), {
            class: "v-calendar-daily_head-weekday",
          }),
          [o.weekdayFormatter.value(M, e.shortWeekdays)],
        );
      }
      function k(M) {
        return _("div", { class: "v-calendar-daily_head-day-label" }, [
          a["day-label-header"]?.(M) ?? S(M),
        ]);
      }
      function S(M) {
        const u = J(n, ":date", (g) => ({ nativeEvent: g, ...M }));
        return P(
          ft,
          Z(
            {
              active: M.present,
              activeColor: e.color,
              variant: "outlined",
              baseVariant: "text",
              "onUpdate:active": ct,
            },
            u,
          ),
          { default: () => [o.dayFormatter.value(M, !1)] },
        );
      }
      function T() {
        return _("div", { class: "v-calendar-daily__body" }, [A()]);
      }
      function A() {
        return _(
          "div",
          { ref: o.scrollAreaRef, class: "v-calendar-daily__scroll-area" },
          [C()],
        );
      }
      function C() {
        return _(
          "div",
          {
            ref: s,
            class: "v-calendar-daily__pane",
            style: { height: me(o.bodyHeight.value) },
          },
          [i()],
        );
      }
      function i() {
        return _("div", { class: "v-calendar-daily__day-container" }, [
          W(),
          a.days?.() ?? l(),
        ]);
      }
      function l() {
        return o.days.value.map((M, u) => {
          const g = J(n, ":time", (D) => ({
            nativeEvent: D,
            ...o.getSlotScope(o.getTimestampAtEvent(D, M)),
          }));
          return _(
            "div",
            Z(
              {
                key: M.date,
                class: ["v-calendar-daily__day", o.getRelativeClasses(M)],
              },
              g,
            ),
            [b(u), v(M)],
          );
        });
      }
      function v(M) {
        return a["day-body"]?.(o.getSlotScope(M)) ?? [];
      }
      function b(M) {
        return o.intervals.value[M].map(I);
      }
      function I(M) {
        const u = me(e.intervalHeight),
          g = e.intervalStyle || o.intervalStyleDefault;
        return _(
          "div",
          {
            class: "v-calendar-daily__day-interval",
            key: M.time,
            style: He([{ height: u }, g(M)]),
          },
          [a.interval?.(o.getSlotScope(M))],
        );
      }
      function W() {
        const M = me(e.intervalWidth),
          u = J(n, ":interval", (g) => ({
            nativeEvent: g,
            ...o.getTimestampAtEvent(g, o.parsedStart.value),
          }));
        return _(
          "div",
          Z(
            { class: "v-calendar-daily__intervals-body", style: { width: M } },
            u,
          ),
          [B()],
        );
      }
      function B() {
        return o.intervals.value.length ? o.intervals.value[0].map(j) : null;
      }
      function j(M) {
        const u = me(e.intervalHeight),
          g = e.shortIntervals,
          c = (e.showIntervalLabel || o.showIntervalLabelDefault)(M)
            ? o.intervalFormatter.value(M, g)
            : void 0;
        return _(
          "div",
          {
            key: M.time,
            class: "v-calendar-daily__interval",
            style: { height: u },
          },
          [_("div", { class: "v-calendar-daily__interval-text" }, [c])],
        );
      }
      return (
        Oe(p),
        Ie(() =>
          _e(
            _(
              "div",
              {
                class: dt(["v-calendar-daily", n.class]),
                onDragstart: (M) => M.preventDefault(),
              },
              [e.hideHeader ? void 0 : w(), T()],
            ),
            [[Te, d, void 0, { quiet: !0 }]],
          ),
        ),
        { ...o, scrollPush: r, pane: s, init: p, onResize: d, getScrollPush: y }
      );
    },
  });
function Cn(e, t) {
  return typeof t == "function"
    ? t(e)
    : typeof t == "string" && typeof e == "object" && e
      ? e[t]
      : typeof e == "string"
        ? e
        : "";
}
function St(e, t) {
  return typeof e == "string"
    ? e.split(/\s*,\s/)
    : Array.isArray(e)
      ? e.map((a) => {
          if (typeof a == "string") return a;
          const n =
            typeof a.categoryName == "string" ? a.categoryName : Cn(a, t);
          return { ...a, categoryName: n };
        })
      : [];
}
const Mn = Be({
    name: "VCalendarCategory",
    props: {
      categories: { type: [Array, String], default: "" },
      categoryText: [String, Function],
      categoryForInvalid: { type: String, default: "" },
      ...Ce(),
      ...Dt(),
    },
    setup(e, t) {
      let { slots: a, attrs: n } = t;
      const r = _t(e),
        s = V(() => St(e.categories, e.categoryText));
      function o(k, S) {
        const T =
          typeof S == "object" && S && S.categoryName === e.categoryForInvalid
            ? null
            : S;
        return { ...k, category: T };
      }
      function p(k) {
        return _("div", { class: "v-calendar-category__columns" }, [
          s.value.map((S) => d(k, o(k, S))),
        ]);
      }
      function d(k, S) {
        const T =
            typeof S.category == "object"
              ? S.category.categoryName
              : S.category,
          A = J(n, ":dayCategory", () => o(r.getSlotScope(k) || k, S.category));
        return _("div", Z({ class: "v-calendar-category__column-header" }, A), [
          a.category?.(S) ?? y(T),
          a["day-header"]?.(S),
        ]);
      }
      function y(k) {
        return _("div", { class: "v-calendar-category__category" }, [
          k === null ? e.categoryForInvalid : k,
        ]);
      }
      function w() {
        const k = [];
        return (
          r.days.value.forEach((S, T) => {
            const A = new Array(s.value.length || 1);
            A.fill(S), k.push(...A.map((C, i) => E(C, T, i)));
          }),
          k
        );
      }
      function E(k, S, T) {
        const A = s.value[T],
          C = J(n, ":time", (i) => r.getSlotScope(r.getTimestampAtEvent(i, k)));
        return _(
          "div",
          Z(
            {
              key: k.date + "-" + T,
              class: ["v-calendar-daily__day", r.getRelativeClasses(k)],
            },
            C,
          ),
          [O(S, A), x(k, A)],
        );
      }
      function O(k, S) {
        return r.intervals.value[k].map((T) => Y(T, S));
      }
      function Y(k, S) {
        const T = me(e.intervalHeight),
          A = e.intervalStyle || r.intervalStyleDefault;
        return _(
          "div",
          {
            key: k.time,
            class: "v-calendar-daily__day-interval",
            style: He([{ height: T }, A({ ...k, category: S })]),
          },
          [a.interval?.(o(r.getSlotScope(k), S))],
        );
      }
      function x(k, S) {
        return _("div", { class: "v-calendar-category__columns" }, [R(k, S)]);
      }
      function R(k, S) {
        const T = J(n, ":timeCategory", (A) =>
          o(r.getSlotScope(r.getTimestampAtEvent(A, k)), S),
        );
        return _("div", Z({ class: "v-calendar-category__column" }, T), [
          a["day-body"]?.(o(r.getSlotScope(k), S)),
        ]);
      }
      return (
        Ie(() =>
          P(pe, Z({ class: ["v-calendar-daily", "v-calendar-category"] }, e), {
            ...a,
            days: w,
            "day-header": p,
          }),
        ),
        { ...r, parsedCategories: s }
      );
    },
  }),
  rt = Be({
    name: "VCalendarWeekly",
    props: {
      minWeeks: { validate: ye, default: 1 },
      monthFormat: Function,
      showWeek: Boolean,
      color: String,
      shortWeekdays: { type: Boolean, default: !0 },
      showMonthOnFirst: { type: Boolean, default: !0 },
      shortMonths: { type: Boolean, default: !0 },
      hideHeader: Boolean,
      ...Ce(),
    },
    setup(e, t) {
      let { slots: a, attrs: n } = t;
      const r = Le(e),
        s = qt(),
        o = V(() => parseInt(String(e.minWeeks))),
        p = V(() => {
          const i = o.value * r.parsedWeekdays.value.length,
            l = r.getStartOfWeek(r.parsedStart.value),
            v = r.getEndOfWeek(r.parsedEnd.value);
          return Se(
            l,
            v,
            r.times.today,
            r.weekdaySkips.value,
            Number.MAX_SAFE_INTEGER,
            i,
          );
        }),
        d = V(() => {
          const i = r.times.today,
            l = r.getStartOfWeek(i),
            v = r.getEndOfWeek(i);
          return Se(
            l,
            v,
            i,
            r.weekdaySkips.value,
            r.parsedWeekdays.value.length,
            r.parsedWeekdays.value.length,
          );
        }),
        y = V(() =>
          e.monthFormat
            ? e.monthFormat
            : ke(r.locale.current.value, (i, l) => ({
                timeZone: "UTC",
                month: l ? "short" : "long",
              })),
        );
      function w(i) {
        const l = L(i);
        return l < L(r.parsedStart.value) || l > L(r.parsedEnd.value);
      }
      function E() {
        return _("div", { class: "v-calendar-weekly__head", role: "row" }, [
          O(),
        ]);
      }
      function O() {
        const i = d.value.map(Y);
        return (
          e.showWeek &&
            i.unshift(
              _("div", { class: "v-calendar-weekly__head-weeknumber" }, null),
            ),
          i
        );
      }
      function Y(i, l) {
        const v = w(p.value[l]),
          b = i.present ? e.color : void 0;
        return _(
          "div",
          Z(r.getColorProps({ text: b }), {
            key: i.date,
            class: [
              "v-calendar-weekly__head-weekday",
              r.getRelativeClasses(i, v),
            ],
            role: "columnheader",
          }),
          [r.weekdayFormatter.value(i, e.shortWeekdays)],
        );
      }
      function x() {
        const i = p.value,
          l = r.parsedWeekdays.value.length,
          v = [];
        for (let b = 0; b < i.length; b += l)
          v.push(R(i.slice(b, b + l), k(i[b])));
        return v;
      }
      function R(i, l) {
        const v = i.map((b, I) => T(b, I, i));
        return (
          e.showWeek && v.unshift(S(l)),
          _(
            "div",
            { key: i[0].date, class: "v-calendar-weekly__week", role: "row" },
            [v],
          )
        );
      }
      function k(i) {
        return r.getWeekNumber(i);
      }
      function S(i) {
        return _("div", { class: "v-calendar-weekly__weeknumber" }, [
          _("small", null, [String(i)]),
        ]);
      }
      function T(i, l, v) {
        const b = w(i),
          I = J(n, ":day", (W) => ({ nativeEvent: W, ...i }));
        return _(
          "div",
          Z(
            {
              key: i.date,
              class: ["v-calendar-weekly__day", r.getRelativeClasses(i, b)],
              role: "cell",
            },
            I,
          ),
          [A(i), a.day?.({ outside: b, index: l, week: v, ...i })],
        );
      }
      function A(i) {
        return _("div", { class: "v-calendar-weekly__day-label" }, [
          a["day-label"]?.(i) ?? C(i),
        ]);
      }
      function C(i) {
        const l = i.day === 1 && e.showMonthOnFirst,
          v = J(n, ":date", (b) => ({ nativeEvent: b, ...i }));
        return P(
          ft,
          Z(
            {
              active: i.present,
              activeColor: e.color,
              variant: "outlined",
              baseVariant: "text",
              "onUpdate:active": ct,
            },
            v,
          ),
          {
            default: () => [
              l
                ? y.value(i, e.shortMonths) + " " + r.dayFormatter.value(i, !1)
                : r.dayFormatter.value(i, !1),
            ],
          },
        );
      }
      return (
        Ie(() =>
          _(
            "div",
            {
              class: dt(["v-calendar-weekly", s.themeClasses.value]),
              onDragstart: (i) => i.preventDefault(),
            },
            [e.hideHeader ? void 0 : E(), x()],
          ),
        ),
        { ...r, days: p, todayWeek: d, monthFormatter: y, isOutside: w }
      );
    },
  }),
  Fn = 864e5;
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const a = e.map((n) => ({
    event: n,
    columnCount: 0,
    column: 0,
    left: 0,
    width: 100,
  }));
  return (
    a.sort(
      (n, r) =>
        Math.max(t, n.event.startTimestampIdentifier) -
          Math.max(t, r.event.startTimestampIdentifier) ||
        r.event.endTimestampIdentifier - n.event.endTimestampIdentifier,
    ),
    a
  );
}
function ee(e, t, a, n) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0)
    ? !(e >= n || t <= a)
    : !(e > n || t < a);
}
function ot(e) {
  e.forEach((t) => {
    t.visuals.forEach((a) => {
      a.columnCount = e.length;
    });
  });
}
function It(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Et(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function xt(e, t) {
  return [
    Math.max(t, e.startTimestampIdentifier),
    Math.min(t + Fn, e.endTimestampIdentifier),
  ];
}
function Nn(e, t, a, n) {
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    let o = !1;
    if (ee(t, a, s.start, s.end, n))
      for (let p = 0; p < s.visuals.length; p++) {
        const d = s.visuals[p],
          [y, w] = n ? It(d.event) : Et(d.event);
        if (ee(t, a, y, w, n)) {
          o = !0;
          break;
        }
      }
    if (!o) return r;
  }
  return -1;
}
function Ct(e) {
  const t = {
    groups: [],
    min: -1,
    max: -1,
    reset: () => {
      (t.groups = []), (t.min = t.max = -1);
    },
    getVisuals: function (a, n, r) {
      let s =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      (a.weekday === e || s) && t.reset();
      const o = ie(a),
        p = Tt(n, o);
      return (
        p.forEach((d) => {
          const [y, w] = r ? It(d.event) : Et(d.event);
          t.groups.length > 0 &&
            !ee(y, w, t.min, t.max, r) &&
            (ot(t.groups), t.reset());
          let E = Nn(t.groups, y, w, r);
          E === -1 &&
            ((E = t.groups.length),
            t.groups.push({ start: y, end: w, visuals: [] }));
          const O = t.groups[E];
          O.visuals.push(d),
            (O.start = Math.min(O.start, y)),
            (O.end = Math.max(O.end, w)),
            (d.column = E),
            t.min === -1
              ? ((t.min = y), (t.max = w))
              : ((t.min = Math.min(t.min, y)), (t.max = Math.max(t.max, w)));
        }),
        ot(t.groups),
        r && t.reset(),
        p
      );
    },
  };
  return t;
}
const st = 100,
  Vn = (e, t, a) => {
    const n = Ct(t);
    return (r, s, o, p) => {
      const d = n.getVisuals(r, s, o, p);
      return (
        o &&
          d.forEach((y) => {
            (y.left = (y.column * st) / y.columnCount),
              (y.width = st / y.columnCount);
          }),
        d
      );
    };
  },
  we = 100,
  Rn = 5,
  On = 1.7,
  Wn = (e, t, a) => {
    const n = Ct(t);
    return (r, s, o, p) => {
      if (!o) return n.getVisuals(r, s, o, p);
      const d = ie(r),
        y = Tt(s, d),
        w = Ln(y, d);
      for (const E of w) {
        const O = [];
        for (const Y of E.visuals) {
          const x = qn(Y, d),
            R = Un(x, O);
          if (R === !1) {
            const k = Yn(x, O);
            k &&
              ((x.parent = k),
              (x.sibling = ee(x.start, x.end, k.start, De(k.start, a))),
              (x.index = k.index + 1),
              k.children.push(x));
          } else {
            const [k] = it(x, O, R - 1, R - 1),
              S = it(x, O, R + 1, R + O.length, !0);
            (x.children = S),
              (x.index = R),
              k &&
                ((x.parent = k),
                (x.sibling = ee(x.start, x.end, k.start, De(k.start, a))),
                k.children.push(x));
            for (const T of S)
              T.parent === k && (T.parent = x),
                T.index - x.index <= 1 &&
                  x.sibling &&
                  ee(x.start, De(x.start, a), T.start, T.end) &&
                  (T.sibling = !0);
          }
          O.push(x);
        }
        Hn(O, a);
      }
      return (
        y.sort(
          (E, O) =>
            E.left - O.left ||
            E.event.startTimestampIdentifier - O.event.startTimestampIdentifier,
        ),
        y
      );
    };
  };
function Hn(e, t) {
  for (const a of e) {
    const { visual: n, parent: r } = a,
      s = Mt(a) + 1,
      o = r ? r.visual.left : 0,
      p = we - o,
      d = Math.min(Rn, we / s),
      y = An(a, e),
      w = p / (s - a.index + 1),
      E = (p / (s - a.index + (a.sibling ? 1 : 0))) * y;
    r && (n.left = a.sibling ? o + w : o + d),
      (n.width = Pn(a, e, t) ? we - n.left : Math.min(we - n.left, E * On));
  }
}
function An(e, t) {
  if (!e.children.length) return 1;
  const a = e.index + t.length;
  return e.children.reduce((r, s) => Math.min(r, s.index), a) - e.index;
}
function Bn(e, t) {
  const a = [];
  for (const n of t) ee(e.start, e.end, n.start, n.end) && a.push(n.index);
  return a;
}
function Un(e, t) {
  const a = Bn(e, t);
  a.sort();
  for (let n = 0; n < a.length; n++) if (n < a[n]) return n;
  return !1;
}
function it(e, t, a, n) {
  let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  const s = [];
  for (const o of t)
    o.index >= a &&
      o.index <= n &&
      ee(e.start, e.end, o.start, o.end) &&
      s.push(o);
  if (r && s.length > 0) {
    const o = s.reduce((p, d) => Math.min(p, d.index), s[0].index);
    return s.filter((p) => p.index === o);
  }
  return s;
}
function Yn(e, t) {
  let a = null;
  for (const n of t)
    ee(e.start, e.end, n.start, n.end) &&
      (a === null || n.index > a.index) &&
      (a = n);
  return a;
}
function Pn(e, t, a) {
  for (const n of t)
    if (
      n !== e &&
      n.index > e.index &&
      ee(e.start, De(e.start, a), n.start, n.end)
    )
      return !1;
  return !0;
}
function Ln(e, t) {
  const a = [];
  for (const n of e) {
    const [r, s] = xt(n.event, t);
    let o = !1;
    for (const p of a)
      if (ee(r, s, p.start, p.end)) {
        p.visuals.push(n), (p.end = Math.max(p.end, s)), (o = !0);
        break;
      }
    o || a.push({ start: r, end: s, visuals: [n] });
  }
  return a;
}
function qn(e, t) {
  const [a, n] = xt(e.event, t);
  return {
    parent: null,
    sibling: !0,
    index: 0,
    visual: e,
    start: a,
    end: n,
    children: [],
  };
}
function Mt(e) {
  let t = e.index;
  for (const a of e.children) {
    const n = Mt(a);
    n > t && (t = n);
  }
  return t;
}
function De(e, t) {
  const a = e % 100,
    n = a + t,
    r = Math.floor(n / 60),
    s = n % 60;
  return e - a + r * 100 + s;
}
const Ft = { stack: Wn, column: Vn };
function $n(e, t, a, n) {
  let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
    s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
  const o = e[a],
    p = e[n],
    d = te(o, !0),
    y = p ? te(p, !0) : d,
    w = nt(o) ? at(d, r) : d,
    E = nt(p) ? at(y, r) : y,
    O = L(w),
    Y = ie(w),
    x = L(E),
    R = w.hasTime ? 0 : 2359,
    k = ie(E) + R,
    S = !w.hasTime;
  return {
    input: e,
    start: w,
    startIdentifier: O,
    startTimestampIdentifier: Y,
    end: E,
    endIdentifier: x,
    endTimestampIdentifier: k,
    allDay: S,
    index: t,
    category: s,
  };
}
function qe(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function zn(e, t, a) {
  if (a) {
    const n = Ve(X(t), a[0]),
      r = Ve(X(t), a[1]),
      s = e.startTimestampIdentifier < ie(r),
      o = e.endTimestampIdentifier > ie(n);
    return s && o;
  }
  return qe(e, L(t));
}
function jn(e, t) {
  return (
    e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date
  );
}
function lt(e, t, a, n) {
  return a === e.startIdentifier || (n === t.weekday && qe(e, a));
}
function Gn(e, t, a) {
  return t <= e.endIdentifier && a >= e.startIdentifier;
}
const Zn = 100,
  Xn = 95,
  Kn = Ae(
    {
      events: { type: Array, default: () => [] },
      eventStart: { type: String, default: "start" },
      eventEnd: { type: String, default: "end" },
      eventTimed: { type: [String, Function], default: "timed" },
      eventCategory: { type: [String, Function], default: "category" },
      eventHeight: { type: Number, default: 20 },
      eventColor: { type: [String, Function], default: "primary" },
      eventTextColor: { type: [String, Function] },
      eventName: { type: [String, Function], default: "name" },
      eventOverlapThreshold: { type: [String, Number], default: 60 },
      eventOverlapMode: {
        type: [String, Function],
        default: "stack",
        validate: (e) => e in Ft || typeof e == "function",
      },
      eventMore: { type: Boolean, default: !0 },
      eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" },
      eventRipple: { type: [Boolean, Object], default: null },
      eventMarginBottom: { type: Number, default: 1 },
    },
    "VCalendar-events",
  );
function Jn(e, t, a) {
  const n = Le(e),
    r = V(() => !Array.isArray(e.events) || e.events.length === 0),
    s = V(() => e.type === "category"),
    o = V(() =>
      typeof e.eventTimed == "function"
        ? e.eventTimed
        : (u) => !!u[e.eventTimed],
    ),
    p = V(() =>
      typeof e.eventCategory == "function"
        ? e.eventCategory
        : (u) => u[e.eventCategory],
    ),
    d = V(() =>
      e.events
        ? e.events.map((u, g) =>
            $n(
              u,
              g,
              e.eventStart || "",
              e.eventEnd || "",
              o.value(u),
              s.value ? p.value(u) : !1,
            ),
          )
        : [],
    ),
    y = V(() => parseInt(String(e.eventOverlapThreshold || 0))),
    w = V(() =>
      typeof e.eventTextColor == "function"
        ? e.eventTextColor
        : () => e.eventTextColor,
    ),
    E = V(() =>
      typeof e.eventName == "function"
        ? e.eventName
        : (u, g) => u.input[e.eventName] || "",
    ),
    O = V(() =>
      typeof e.eventOverlapMode == "function"
        ? e.eventOverlapMode
        : Ft[e.eventOverlapMode],
    ),
    Y = V(() => n.effectiveWeekdays.value);
  function x(u) {
    return typeof e.eventColor == "function"
      ? e.eventColor(u)
      : u.color || e.eventColor;
  }
  const R = $([]);
  function k() {
    if (r.value || !e.eventMore) return;
    const u = e.eventHeight || 0,
      g = S();
    for (const D in g) {
      const { parent: m, events: c, more: f } = g[D];
      if (!f) break;
      const h = m.getBoundingClientRect(),
        F = c.length - 1,
        N = c
          .map((H) => ({ event: H, bottom: H.getBoundingClientRect().bottom }))
          .sort((H, z) => H.bottom - z.bottom);
      let U = 0;
      for (let H = 0; H <= F; H++) {
        const z = N[H].bottom;
        (H === F ? z > h.bottom : z + u > h.bottom) &&
          ((N[H].event.style.display = "none"), U++);
      }
      U
        ? ((f.style.display = ""),
          (f.innerHTML = n.locale.t(e.eventMoreText, U)))
        : (f.style.display = "none");
    }
  }
  function S() {
    const u = {},
      g = R.value;
    return (
      !g ||
        !g.length ||
        g.forEach((D) => {
          const m = D.getAttribute("data-date");
          D.parentElement &&
            m &&
            (m in u ||
              (u[m] = { parent: D.parentElement, more: null, events: [] }),
            D.getAttribute("data-more")
              ? (u[m].more = D)
              : (u[m].events.push(D), (D.style.display = "")));
        }),
      u
    );
  }
  function T(u, g) {
    let { event: D } = u;
    const m = e.eventHeight || 0,
      c = e.eventMarginBottom || 0,
      f = L(g),
      h = g.week,
      F = f === D.startIdentifier;
    let N = f === D.endIdentifier,
      U = Xn;
    if (!s.value)
      for (let z = g.index + 1; z < h.length; z++) {
        const K = L(h[z]);
        if (D.endIdentifier >= K) (U += Zn), (N = N || K === D.endIdentifier);
        else {
          N = !0;
          break;
        }
      }
    return C(D, { eventParsed: D, day: g, start: F, end: N, timed: !1 }, !1, {
      class: ["v-event", { "v-event-start": F, "v-event-end": N }],
      style: { height: `${m}px`, width: `${U}%`, marginBottom: `${c}px` },
      "data-date": g.date,
    });
  }
  function A(u, g) {
    let { event: D, left: m, width: c } = u;
    const f = g.timeDelta(D.start, g),
      h = g.timeDelta(D.end, g);
    if (h === !1 || f === !1 || h < 0 || f >= 1 || jn(D, g)) return !1;
    const F = L(g),
      N = D.startIdentifier >= F,
      U = D.endIdentifier > F,
      H = g.timeToY(D.start, g),
      z = g.timeToY(D.end, g),
      K = Math.max(e.eventHeight || 0, z - H);
    return C(D, { eventParsed: D, day: g, start: N, end: U, timed: !0 }, !0, {
      class: "v-event-timed",
      style: { top: `${H}px`, height: `${K}px`, left: `${m}%`, width: `${c}%` },
    });
  }
  function C(u, g, D, m) {
    const c = t.event,
      f = w.value(u.input),
      h = x(u.input),
      F = u.start.hour < 12 && u.end.hour >= 12,
      N = Dn(u.start, u.end) <= y.value,
      U = (ne, be) =>
        n.getFormatter({
          timeZone: "UTC",
          hour: "numeric",
          minute: ne.minute > 0 ? "numeric" : void 0,
        })(ne, !0),
      H = () => U(u.start) + " - " + U(u.end),
      z = () => {
        const ne = E.value(u, D);
        if (u.start.hasTime)
          if (D) {
            const be = H(),
              ze = N ? ", " : _("br", null, null);
            return _("span", { class: "v-event-summary" }, [
              _("strong", null, [ne]),
              ze,
              be,
            ]);
          } else {
            const be = U(u.start);
            return _("span", { class: "v-event-summary" }, [
              _("strong", null, [be]),
              ue(" "),
              ne,
            ]);
          }
        return _("span", { class: "v-event-summary" }, [ne]);
      },
      K = {
        ...g,
        event: u.input,
        outside: g.day.outside,
        singline: N,
        overlapsNoon: F,
        formatTime: U,
        timeSummary: H,
        eventSummary: z,
      },
      $e = J(a, ":event", (ne) => ({ ...K, nativeEvent: ne }));
    return _e(
      _(
        "div",
        Z(n.getColorProps({ text: f, background: h }), $e, m, {
          ref_for: !0,
          ref: R,
        }),
        [c?.(K) ?? i(z)],
      ),
      [[Qe, e.eventRipple ?? !0]],
    );
  }
  function i(u) {
    return _("div", { class: "pl-1" }, [u()]);
  }
  function l(u) {
    const g = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return _(
      "div",
      { style: { height: `${g}px` }, "data-date": u.date, ref_for: !0, ref: R },
      null,
    );
  }
  function v(u) {
    const g = e.eventHeight || 0,
      D = e.eventMarginBottom || 0,
      m = J(a, ":more", (c) => ({ nativeEvent: c, ...u }));
    return _e(
      _(
        "div",
        Z(
          {
            class: ["v-event-more pl-1", { "v-outside": u.outside }],
            "data-date": u.date,
            "data-more": "1",
            style: {
              display: "none",
              height: `${g}px`,
              marginBottom: `${D}px`,
            },
            ref_for: !0,
            ref: R,
          },
          m,
        ),
        null,
      ),
      [[Qe, e.eventRipple ?? !0]],
    );
  }
  function b() {
    const u = n.days.value,
      g = L(u[0]),
      D = L(u[u.length - 1]);
    return d.value.filter((m) => Gn(m, g, D));
  }
  function I(u, g) {
    return (
      !s.value ||
      (typeof g == "object" &&
        g.categoryName &&
        g.categoryName === u.category) ||
      (typeof u.category == "string" && g === u.category) ||
      (typeof u.category != "string" && g === null)
    );
  }
  function W(u) {
    const g = L(u),
      D = Y.value[0];
    return d.value.filter((m) => lt(m, u, g, D));
  }
  function B(u) {
    const g = L(u),
      D = Y.value[0];
    return d.value.filter(
      (m) =>
        m.allDay && (s.value ? qe(m, g) : lt(m, u, g, D)) && I(m, u.category),
    );
  }
  function j(u) {
    return d.value.filter(
      (g) => !g.allDay && zn(g, u, u.intervalRange) && I(g, u.category),
    );
  }
  function M() {
    if (r.value) return { ...t };
    const u = O.value(d.value, Y.value[0], y.value),
      g = (m) => !!m,
      D = (m, c, f, h) => {
        const F = c(m),
          N = u(m, F, h, s.value);
        if (h) return N.map((H) => f(H, m)).filter(g);
        const U = [];
        return (
          N.forEach((H, z) => {
            for (; U.length < H.column; ) U.push(l(m));
            const K = f(H, m);
            K && U.push(K);
          }),
          U
        );
      };
    return {
      ...t,
      day: (m) => {
        let c = D(m, W, T, !1);
        if ((c && c.length > 0 && e.eventMore && c.push(v(m)), t.day)) {
          const f = t.day(m);
          f && (c = c ? c.concat(f) : f);
        }
        return c;
      },
      "day-header": (m) => {
        let c = D(m, B, T, !1);
        if (t["day-header"]) {
          const f = t["day-header"](m);
          f && (c = c ? c.concat(f) : f);
        }
        return c;
      },
      "day-body": (m) => {
        const c = D(m, j, A, !0);
        let f = [_("div", { class: "v-event-timed-container" }, [c])];
        if (t["day-body"]) {
          const h = t["day-body"](m);
          h && (f = f.concat(h));
        }
        return f;
      },
    };
  }
  return {
    ...n,
    noEvents: r,
    parsedEvents: d,
    parsedEventOverlapThreshold: y,
    eventTimedFunction: o,
    eventCategoryFunction: p,
    eventTextColorFunction: w,
    eventNameFunction: E,
    eventModeFunction: O,
    eventWeekdays: Y,
    categoryMode: s,
    eventColorFunction: x,
    eventsRef: R,
    updateEventVisibility: k,
    getEventsMap: S,
    genDayEvent: T,
    genTimedEvent: A,
    genEvent: C,
    genName: i,
    genPlaceholder: l,
    genMore: v,
    getVisibleEvents: b,
    isEventForCategory: I,
    getEventsForDay: W,
    getEventsForDayAll: B,
    getEventsForDayTimed: j,
    getScopedSlots: M,
  };
}
const fa = $t()({
  name: "VCalendar",
  directives: { vResize: Te },
  props: {
    modelValue: { type: [String, Number, Date], validate: ge },
    categoryDays: {
      type: [Number, String],
      default: 1,
      validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0,
    },
    categories: { type: [Array, String], default: "" },
    categoryText: { type: [String, Function] },
    maxDays: { type: Number, default: 7 },
    categoryHideDynamic: { type: Boolean },
    categoryShowAll: { type: Boolean },
    categoryForInvalid: { type: String, default: "" },
    ...Ce(),
    ...Kn(),
  },
  setup(e, t) {
    let { slots: a, attrs: n, emit: r } = t;
    const s = $(),
      o = Jn(e, a, n),
      p = $(null),
      d = $(null),
      y = V(() => parseInt(String(e.categoryDays)) || 1),
      w = V(() => St(e.categories, e.categoryText)),
      E = V(() => {
        const l = o.parsedValue.value;
        let v = null,
          b = e.maxDays,
          I = w.value,
          W = l,
          B = l;
        switch (e.type) {
          case "month":
            (v = rt), (W = gt(l)), (B = ht(l));
            break;
          case "week":
            (v = pe),
              (W = o.getStartOfWeek(l)),
              (B = o.getEndOfWeek(l)),
              (b = 7);
            break;
          case "day":
            (v = pe), (b = 1);
            break;
          case "4day":
            (v = pe), (B = de(X(B), se, 3)), Q(B), (b = 4);
            break;
          case "custom-weekly":
            (v = rt), (W = o.parsedStart.value || l), (B = o.parsedEnd.value);
            break;
          case "custom-daily":
            (v = pe), (W = o.parsedStart.value || l), (B = o.parsedEnd.value);
            break;
          case "category":
            const j = y.value;
            (v = Mn), (B = de(X(B), se, j)), Q(B), (b = j), (I = i(I));
            break;
          default:
            const M = e.type;
            throw new Error(`${M} is not a valid Calendar type`);
        }
        return { component: v, start: W, end: B, maxDays: b, categories: I };
      }),
      O = V(() => o.effectiveWeekdays.value),
      Y = V(() => e.type === "category"),
      x = V(() => o.getFormatter({ timeZone: "UTC", month: "long" })),
      R = V(() => o.getFormatter({ timeZone: "UTC", month: "short" })),
      k = V(() => {
        const { start: l, end: v } = E.value,
          b = l.year !== v.year,
          I = b || l.month !== v.month;
        return b
          ? R.value(l, !0) +
              " " +
              l.year +
              " - " +
              R.value(v, !0) +
              " " +
              v.year
          : I
            ? R.value(l, !0) + " - " + R.value(v, !0) + " " + v.year
            : x.value(l, !1) + " " + l.year;
      });
    function S() {
      const { start: l, end: v } = E.value;
      (!p.value ||
        !d.value ||
        l.date !== p.value.date ||
        v.date !== d.value.date) &&
        ((p.value = l), (d.value = v), r("change", { start: l, end: v }));
    }
    function T() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      const v = X(o.parsedValue.value),
        b = l > 0,
        I = b ? se : bt,
        W = b ? sn : Ee;
      let B = b ? l : -l;
      for (; --B >= 0; )
        switch (e.type) {
          case "month":
            (v.day = W), I(v);
            break;
          case "week":
            de(v, I, oe);
            break;
          case "day":
            de(v, I, 1);
            break;
          case "4day":
            de(v, I, 4);
            break;
          case "category":
            de(v, I, y.value);
            break;
        }
      xe(v),
        Q(v),
        fe(v, o.times.now),
        e.modelValue instanceof Date
          ? r("update:modelValue", Re(v))
          : typeof e.modelValue == "number"
            ? r("update:modelValue", Re(v).getTime())
            : r("update:modelValue", v.date),
        r("moved", v);
    }
    function A() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      T(l);
    }
    function C() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      T(-l);
    }
    function i(l) {
      if (!o.noEvents.value) {
        const v = l.reduce(
          (b, I, W) => (
            typeof I == "object" && I.categoryName
              ? (b[I.categoryName] = { index: W, count: 0 })
              : typeof I == "string" && (b[I] = { index: W, count: 0 }),
            b
          ),
          {},
        );
        if (!e.categoryHideDynamic || !e.categoryShowAll) {
          let b = l.length;
          o.parsedEvents.value.forEach((I) => {
            let W = I.category;
            typeof W != "string" && (W = e.categoryForInvalid),
              W &&
                (W in v
                  ? v[W].count++
                  : e.categoryHideDynamic || (v[W] = { index: b++, count: 1 }));
          });
        }
        if (!e.categoryShowAll)
          for (const b in v) v[b].count === 0 && delete v[b];
        l = l.filter((b) =>
          typeof b == "object" && b.categoryName
            ? v.hasOwnProperty(b.categoryName)
            : typeof b == "string"
              ? v.hasOwnProperty(b)
              : !1,
        );
      }
      return l;
    }
    return (
      We(E, S),
      Oe(() => {
        o.updateEventVisibility(), S();
      }),
      zt(() => {
        window.requestAnimationFrame(o.updateEventVisibility);
      }),
      Ie(() => {
        const {
          start: l,
          end: v,
          maxDays: b,
          component: I,
          categories: W,
        } = E.value;
        return _e(
          P(
            I,
            Z(
              {
                ref: s,
                class: [
                  "v-calendar",
                  { "v-calendar-events": !o.noEvents.value },
                ],
                role: "grid",
              },
              I.filterProps(e),
              {
                start: l.date,
                end: v.date,
                maxDays: b,
                weekdays: o.effectiveWeekdays.value,
                categories: W,
                "onClick:date": (B, j) => {
                  n["onUpdate:modelValue"] && r("update:modelValue", j.date);
                },
              },
            ),
            o.getScopedSlots(),
          ),
          [[Te, o.updateEventVisibility, void 0, { quiet: !0 }]],
        );
      }),
      Zt(
        {
          ...o,
          lastStart: p,
          lastEnd: d,
          parsedCategoryDays: y,
          renderProps: E,
          eventWeekdays: O,
          categoryMode: Y,
          title: k,
          monthLongFormatter: x,
          monthShortFormatter: R,
          parsedCategories: w,
          checkChange: S,
          move: T,
          next: A,
          prev: C,
          getCategoryList: i,
        },
        s,
      )
    );
  },
});
export { fa as V, ca as _ };
