import { _ as Jt, V as et } from "./z75WVF1S.js";
import "./CE7JQOIN.js";
import {
  U as Wt,
  V as Gt,
  W as Xt,
  B as l,
  I as me,
  a3 as Yt,
  aB as Qt,
  r as i,
  G as Ue,
  o as je,
  J as b,
  y,
  C as o,
  z as c,
  D as v,
  L as u,
  M as De,
  n as Fe,
  E as dt,
  u as mt,
  F as Zt,
  x as W,
  K as k,
  A as V,
  N as _,
  k as tt,
  e as ea,
  a2 as at,
  P as Ce,
  a4 as ot,
  a$ as ta,
  O as aa,
  Q as oa,
  R as la,
  a1 as sa,
} from "./CYsiv7Qj.js";
import { $ as S } from "./BvG7V8Ak.js";
import { n as na, V as q, b as ra, a as E } from "./B_W9U9Wp.js";
import { V as Ie } from "./BqujDEEl.js";
import { V as pt } from "./Dlfzj7mx.js";
import { V as ia } from "./MIubIMrV.js";
import { V as Y, a as w } from "./Bj0ZT2dB.js";
import { V as J } from "./BrCrqdgZ.js";
import { V as lt } from "./CZzf1ihi.js";
import { V as le } from "./DCAzZvgN.js";
import { V as ua } from "./B51noTYL.js";
import { V as da } from "./ss-1h9Hv.js";
import { x as ma } from "./lVf1Haco.js";
import { b as pa } from "./DGlBNczJ.js";
import { u as ca } from "./LKQL6vAN.js";
import { V as va } from "./DmlkVGYz.js";
import { V as st, a as nt } from "./BToCrXXm.js";
import { V as rt } from "./B6Tli9r0.js";
import { V as it } from "./BSCDGDSX.js";
import { V as fa, a as ut, b as de, c as he, e as Ne } from "./CxBYvc7u.js";
import { V as ya } from "./Cv1q1CuH.js";
import { b as ga } from "./D3DeQzvF.js";
import "./ClyIuovc.js";
import "./sbneMOUU.js";
import "./B_hTT4u_.js";
import "./B5S3s6V6.js";
import "./Bhgh0dC5.js";
import "./DzPBUvYZ.js";
import "./BwyU5rju.js";
import "./92s3wAHG.js";
import "./fKsYyVgl.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const ba = Gt(
    { start: Boolean, end: Boolean, ...Qt(), ...na() },
    "VListItemAction",
  ),
  ka = Wt()({
    name: "VListItemAction",
    props: ba(),
    setup(N, P) {
      let { slots: U } = P;
      return (
        Xt(() =>
          l(
            N.tag,
            {
              class: Yt([
                "v-list-item-action",
                {
                  "v-list-item-action--start": N.start,
                  "v-list-item-action--end": N.end,
                },
                N.class,
              ]),
              style: me(N.style),
            },
            U,
          ),
        ),
        {}
      );
    },
  }),
  wa = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Va = { style: { display: "flex" } },
  xa = {
    __name: "DialogClosetask",
    props: { dialogclose: Boolean, task_id: Number },
    emits: ["close"],
    setup(N, { emit: P }) {
      const U = Fe(),
        x = i(!1),
        pe = P,
        A = N,
        F = i(""),
        O = Ue("snackbar"),
        I = async () => {
          F.value = "";
          let r = { task_id: A.task_id };
          await S(U.public.apiBaseurl + "task/completetask", {
            method: "POST",
            body: r,
          })
            .then(() => {
              (O.value = {
                text: "Task completato",
                type: "success",
                show: !0,
              }),
                T();
            })
            .catch((f) => {
              console.log("catcherr", f);
              let j = JSON.parse(f.data).errors.title;
              O.value = { text: j, type: "danger", show: !0 };
            });
        };
      function T() {
        pe("close");
      }
      return (
        je(async () => {
          x.value = !0;
        }),
        (r, f) => (
          y(),
          b(
            pt,
            {
              class: "modaldialog",
              onAfterLeave: T,
              modelValue: u(x),
              "onUpdate:modelValue":
                f[0] || (f[0] = (j) => (De(x) ? (x.value = j) : null)),
              width: "auto",
              style: { "max-width": "50%" },
              persistent: "",
            },
            {
              default: o(() => [
                c("div", wa, [
                  f[3] ||
                    (f[3] = c(
                      "h2",
                      { class: "pb-10 pageh2" },
                      "Completamento Task",
                      -1,
                    )),
                  f[4] ||
                    (f[4] = v(" Confermi il completamento del task? ", -1)),
                  f[5] || (f[5] = c("br", null, null, -1)),
                  f[6] || (f[6] = c("br", null, null, -1)),
                  c("div", Va, [
                    l(
                      q,
                      { class: "", onClick: T, color: "red" },
                      {
                        default: o(() => [
                          ...(f[1] || (f[1] = [v(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    l(Ie),
                    l(
                      q,
                      { onClick: I, color: "green" },
                      {
                        default: o(() => [
                          ...(f[2] || (f[2] = [v("Completa", -1)])),
                        ]),
                        _: 1,
                      },
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
  Ca = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  ha = { key: 0 },
  Da = { key: 1 },
  Ta = { class: "font-weight-bold bg-grey-lighten-4" },
  Ea = { class: "text-start" },
  Sa = { class: "font-weight-bold bg-grey-lighten-4" },
  qa = { class: "text-start" },
  Pa = { style: { display: "flex" } },
  Oa = {
    __name: "DialogViewTask",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      suppliers: Array,
      clone: Number,
      profiles: Array,
      users: Array,
      activities: Array,
    },
    emits: ["close"],
    setup(N, { emit: P }) {
      const { data: U } = dt(),
        x = Fe();
      mt(), Zt();
      const pe = P,
        A = N,
        F = i(0),
        O = i(!1),
        I = i(!1),
        T = Ue("snackbar"),
        r = i({ id: 0, openstatus: !0 }),
        f = i(0),
        j = i(""),
        L = i([]),
        ce = i(""),
        G = i(""),
        H = i(""),
        Q = [
          { title: "ID", key: "id", sortable: !0, width: 30 },
          { title: "Utente", key: "user", sortable: !0, align: "left" },
          { title: "N.Ore", key: "totore", sortable: !0, align: "left" },
          { title: "Inzio", key: "startdate", sortable: !0, align: "left" },
          { title: "Fine", key: "enddate", sortable: !0, align: "left" },
          {
            title: "Descrizione",
            key: "description",
            sortable: !0,
            align: "left",
          },
          { title: "Attività", key: "activity", sortable: !0, align: "left" },
        ],
        K = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
        ],
        se = [
          { label: "Costi Fissi", value: "F" },
          { label: "Costi Variabili", value: "V" },
          { label: "Costi Personale", value: "P" },
        ];
      function M() {
        pe("close");
      }
      const Te = async () => {
        if (A.idrec > 0) {
          const { data: R } = await S(
            x.public.apiBaseurl + "task/get/" + A.idrec,
            {
              onRequest({ request: a, options: n }) {},
              onRequestError({ request: a, options: n, error: D }) {
                console.log("Errore nella request:", D),
                  (T.value = {
                    text: "Errore: " + D,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: a, response: n, options: D }) {
                console.log(
                  "Errore nella response: " + n._data.error.messages[0],
                ),
                  (T.value = {
                    text: "Errore caricamento task",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: a, response: n, options: D }) {
                (ce.value = n._data.data.Project.name),
                  (G.value = n._data.data.Project.code),
                  (H.value = n._data.data.Project.ownersname.join(", ")),
                  (r.value = n._data.data.Task),
                  A.clone == 1 && ((r.value.id = 0), (r.value.code = "")),
                  (r.value.internalactivity = r.value.internalactivity == 1),
                  (r.value.userprofile_id =
                    r.value.userprofile_id == 0
                      ? null
                      : r.value.userprofile_id),
                  (r.value.user_id =
                    r.value.user_id == 0 ? null : r.value.user_id),
                  (r.value.esecutivo = r.value.esecutivo == 1),
                  (f.value = r.value.hours / 8);
              },
            },
          );
        } else r.value.status = "A";
      };
      function z(R) {
        const [a, n] = R.split(" "),
          [D, h, ne] = a.split("-"),
          [ve, Se, fe] = n.split(":");
        return `${ne}-${h}-${D} ${ve}:${Se}:${fe}`;
      }
      const Ee = async () => {
        if (A.idrec > 0) {
          const { data: R } = await S(
            x.public.apiBaseurl + "hour/gettaskhours/" + A.idrec,
            {
              onRequest({ request: a, options: n }) {},
              onRequestError({ request: a, options: n, error: D }) {
                console.log("Errore nella request:", D),
                  (T.value = {
                    text: "Errore: " + D,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: a, response: n, options: D }) {
                console.log(
                  "Errore nella response: " + n._data.error.messages[0],
                ),
                  (T.value = {
                    text: "Errore caricamento ore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: a, response: n, options: D }) {
                n._data.data.forEach((h) => {
                  (F.value = F.value + Z(h.Hour.startdate, h.Hour.enddate)),
                    L.value.push({
                      id: h.Hour.id,
                      user: h.User.firstname + " " + h.User.lastname,
                      startdate: z(h.Hour.startdate),
                      enddate: z(h.Hour.enddate),
                      description: h.Hour.description,
                      totore: Z(h.Hour.startdate, h.Hour.enddate),
                      activity: h.Activity ? h.Activity.name : "",
                    });
                });
              },
            },
          );
        }
      };
      function Z(R, a) {
        const n = new Date(R);
        return (new Date(a).getTime() - n.getTime()) / (1e3 * 60 * 60);
      }
      return (
        je(async () => {
          (O.value = !0), await Te(), await Ee();
        }),
        (R, a) => (
          y(),
          b(
            pt,
            {
              class: "modaldialog",
              onAfterLeave: M,
              modelValue: u(O),
              "onUpdate:modelValue":
                a[26] || (a[26] = (n) => (De(O) ? (O.value = n) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: o(() => [
                c("div", Ca, [
                  a[35] ||
                    (a[35] = c(
                      "h2",
                      { class: "pb-0 pageh2" },
                      "Dettagli Task",
                      -1,
                    )),
                  a[36] || (a[36] = c("b", null, "Progetto:", -1)),
                  v(" " + V(u(ce)) + " [" + V(u(G)) + "] ", 1),
                  u(H) != ""
                    ? (y(),
                      W("span", ha, [
                        a[27] ||
                          (a[27] = c(
                            "b",
                            null,
                            "Responsabile/i di progetto:",
                            -1,
                          )),
                        v(" " + V(u(H)), 1),
                      ]))
                    : k("", !0),
                  a[37] || (a[37] = c("br", null, null, -1)),
                  a[38] || (a[38] = c("br", null, null, -1)),
                  l(
                    ia,
                    {
                      modelValue: u(I),
                      "onUpdate:modelValue":
                        a[25] ||
                        (a[25] = (n) => (De(I) ? (I.value = n) : null)),
                      ref: "form",
                    },
                    {
                      default: o(() => [
                        l(Y, null, {
                          default: o(() => [
                            l(
                              w,
                              { cols: "12", sm: "4" },
                              {
                                default: o(() => [
                                  l(
                                    J,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        a[0] ||
                                        (a[0] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(r).shortname,
                                      "onUpdate:modelValue":
                                        a[1] ||
                                        (a[1] = (n) => (u(r).shortname = n)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome",
                                      readonly: "",
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
                              w,
                              { cols: "12", sm: "6" },
                              {
                                default: o(() => [
                                  l(
                                    J,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        a[2] ||
                                        (a[2] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(r).description,
                                      "onUpdate:modelValue":
                                        a[3] ||
                                        (a[3] = (n) => (u(r).description = n)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      readonly: "",
                                      label: "Descrizione",
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
                              w,
                              { cols: "12", md: "2" },
                              {
                                default: o(() => [
                                  l(
                                    lt,
                                    {
                                      color: "green",
                                      baseColor: "red",
                                      density: "compact",
                                      modelValue: u(r).esecutivo,
                                      "onUpdate:modelValue":
                                        a[4] ||
                                        (a[4] = (n) => (u(r).esecutivo = n)),
                                      readonly: "",
                                      label:
                                        "Esecutivo: " +
                                        (u(r).esecutivo == !0 ? "SI" : "NO"),
                                      "hide-details": "",
                                      inset: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "label"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            l(
                              w,
                              { cols: "12", sm: "3" },
                              {
                                default: o(() => [
                                  l(
                                    J,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        a[5] ||
                                        (a[5] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(r).startdate,
                                      "onUpdate:modelValue":
                                        a[6] ||
                                        (a[6] = (n) => (u(r).startdate = n)),
                                      "persistent-hint": "",
                                      readonly: "",
                                      label: "Inizio",
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
                              w,
                              { cols: "12", sm: "3" },
                              {
                                default: o(() => [
                                  l(
                                    J,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        a[7] ||
                                        (a[7] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(r).enddate,
                                      "onUpdate:modelValue":
                                        a[8] ||
                                        (a[8] = (n) => (u(r).enddate = n)),
                                      "persistent-hint": "",
                                      readonly: "",
                                      label: "Fine",
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
                              w,
                              { cols: "12", sm: "3" },
                              {
                                default: o(() => [
                                  l(
                                    J,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        a[9] ||
                                        (a[9] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(f),
                                      "onUpdate:modelValue":
                                        a[10] ||
                                        (a[10] = (n) =>
                                          De(f) ? (f.value = n) : null),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Giornate a budget",
                                      readonly: "",
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
                              w,
                              { cols: "12", md: "3" },
                              {
                                default: o(() => [
                                  l(
                                    le,
                                    {
                                      autocomplete: "off",
                                      density: "compact",
                                      modelValue: u(r).status,
                                      "onUpdate:modelValue":
                                        a[11] ||
                                        (a[11] = (n) => (u(r).status = n)),
                                      items: K,
                                      label: "Stato",
                                      variant: "outlined",
                                      "item-title": "name",
                                      "item-value": "code",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      readonly: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        l(Y, null, {
                          default: o(() => [
                            l(
                              w,
                              { cols: "12", md: "2" },
                              {
                                default: o(() => [
                                  l(
                                    lt,
                                    {
                                      color: "green",
                                      baseColor: "blue",
                                      modelValue: u(r).internalactivity,
                                      "onUpdate:modelValue":
                                        a[12] ||
                                        (a[12] = (n) =>
                                          (u(r).internalactivity = n)),
                                      label:
                                        "Task Interno: " +
                                        (u(r).internalactivity == !0
                                          ? "SI"
                                          : "NO"),
                                      "hide-details": "",
                                      inset: "",
                                      readonly: "",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "label"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            u(r).internalactivity == !0
                              ? (y(),
                                b(
                                  w,
                                  { key: 0, cols: "12", md: "4" },
                                  {
                                    default: o(() => [
                                      l(
                                        le,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: u(r).userprofile_id,
                                          "onUpdate:modelValue":
                                            a[13] ||
                                            (a[13] = (n) =>
                                              (u(r).userprofile_id = n)),
                                          items: A.profiles,
                                          "item-title": "name",
                                          "item-value": "id",
                                          label: "Profilo Professionale",
                                          variant: "outlined",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          readonly: "",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "items"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            u(r).internalactivity == !0
                              ? (y(),
                                b(
                                  w,
                                  { key: 1, cols: "12", md: "4" },
                                  {
                                    default: o(() => [
                                      l(
                                        le,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: u(r).user_id,
                                          "onUpdate:modelValue":
                                            a[14] ||
                                            (a[14] = (n) => (u(r).user_id = n)),
                                          items: A.users,
                                          "item-title": "name",
                                          "item-value": "id",
                                          label: "Assegnatario",
                                          variant: "outlined",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          readonly: "",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "items"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            R.project.type == "A"
                              ? (y(),
                                b(
                                  w,
                                  { key: 2, cols: "12", md: "2" },
                                  {
                                    default: o(() => [
                                      l(
                                        le,
                                        {
                                          density: "compact",
                                          autocomplete: "off",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          modelValue: u(r).type,
                                          "onUpdate:modelValue":
                                            a[15] ||
                                            (a[15] = (n) => (u(r).type = n)),
                                          items: se,
                                          label: "Tipo*",
                                          rules: R.textRules,
                                          readonly: "",
                                          variant: "outlined",
                                          "item-title": "label",
                                          "item-value": "value",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            u(r).internalactivity == !1
                              ? (y(),
                                b(
                                  w,
                                  { key: 3, cols: "12", md: "2" },
                                  {
                                    default: o(() => [
                                      l(
                                        le,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: u(r).supplier_id,
                                          "onUpdate:modelValue":
                                            a[16] ||
                                            (a[16] = (n) =>
                                              (u(r).supplier_id = n)),
                                          items: A.suppliers,
                                          "item-title": "name",
                                          "item-value": "id",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          label: "Fornitore",
                                          clearable: "",
                                          variant: "outlined",
                                          readonly: "",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "items"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            u(r).internalactivity == !1
                              ? (y(),
                                b(
                                  w,
                                  { key: 4, cols: "12", sm: "2" },
                                  {
                                    default: o(() => [
                                      l(
                                        J,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            a[17] ||
                                            (a[17] = _(
                                              (n) => n.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: u(r).genericsupplier,
                                          "onUpdate:modelValue":
                                            a[18] ||
                                            (a[18] = (n) =>
                                              (u(r).genericsupplier = n)),
                                          variant: "outlined",
                                          "persistent-hint": "",
                                          label: "Fornitore generico",
                                          readonly: "",
                                        },
                                        null,
                                        8,
                                        ["modelValue"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            u(r).internalactivity == !1
                              ? (y(),
                                b(
                                  w,
                                  { key: 5, cols: "12", sm: "2" },
                                  {
                                    default: o(() => [
                                      l(
                                        J,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            a[19] ||
                                            (a[19] = _(
                                              (n) => n.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: u(r).suppliercost,
                                          "onUpdate:modelValue":
                                            a[20] ||
                                            (a[20] = (n) =>
                                              (u(r).suppliercost = n)),
                                          variant: "outlined",
                                          "persistent-hint": "",
                                          label: "Costo fornitore",
                                          readonly: "",
                                        },
                                        null,
                                        8,
                                        ["modelValue"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                            u(r).internalactivity == !1
                              ? (y(),
                                b(
                                  w,
                                  { key: 6, cols: "12", sm: "2" },
                                  {
                                    default: o(() => [
                                      l(
                                        J,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            a[21] ||
                                            (a[21] = _(
                                              (n) => n.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: u(r).supplierprice,
                                          "onUpdate:modelValue":
                                            a[22] ||
                                            (a[22] = (n) =>
                                              (u(r).supplierprice = n)),
                                          variant: "outlined",
                                          "persistent-hint": "",
                                          readonly: "",
                                          label: "Prezzo fornitore al cliente",
                                        },
                                        null,
                                        8,
                                        ["modelValue"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : k("", !0),
                          ]),
                          _: 1,
                        }),
                        l(Y, null, {
                          default: o(() => [
                            l(
                              w,
                              { cols: "12", sm: "12" },
                              {
                                default: o(() => [
                                  l(
                                    ua,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        a[23] ||
                                        (a[23] = _(
                                          (n) => n.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: u(r).note,
                                      "onUpdate:modelValue":
                                        a[24] ||
                                        (a[24] = (n) => (u(r).note = n)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Note",
                                      readonly: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
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
                  u(L).length > 0
                    ? (y(),
                      W("div", Da, [
                        a[33] || (a[33] = c("h3", null, "Ore eseguite", -1)),
                        l(
                          da,
                          {
                            density: "compact",
                            items: u(L),
                            headers: Q,
                            search: u(j),
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
                            top: o(() => [...(a[28] || (a[28] = []))]),
                            "body.append": o(() => [
                              c("tr", Ta, [
                                a[29] ||
                                  (a[29] = c(
                                    "td",
                                    { colspan: "2" },
                                    "Totale ore",
                                    -1,
                                  )),
                                c("td", Ea, V(u(F)), 1),
                                a[30] ||
                                  (a[30] = c("td", { colspan: "4" }, null, -1)),
                              ]),
                              c("tr", Sa, [
                                a[31] ||
                                  (a[31] = c(
                                    "td",
                                    { colspan: "2" },
                                    "Totale giorni",
                                    -1,
                                  )),
                                c("td", qa, [
                                  c(
                                    "span",
                                    {
                                      style: me(
                                        u(f) - u(F) / 8 <= 0
                                          ? "color:red"
                                          : u(f) - u(F) / 8 <= 1
                                            ? "color:orange"
                                            : "color:green",
                                      ),
                                    },
                                    V(u(F) / 8),
                                    5,
                                  ),
                                  v("/" + V(u(f)), 1),
                                ]),
                                a[32] ||
                                  (a[32] = c("td", { colspan: "4" }, null, -1)),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["items", "search"],
                        ),
                      ]))
                    : k("", !0),
                  a[39] || (a[39] = c("br", null, null, -1)),
                  c("div", Pa, [
                    l(
                      q,
                      { class: "", onClick: M, color: "red" },
                      {
                        default: o(() => [
                          ...(a[34] || (a[34] = [v(" Chiudi ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    l(Ie),
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
  Aa = { class: "pl-10 pr-10" },
  Ra = { class: "divcenterpage" },
  $a = {
    key: 0,
    style: {
      position: "absolute",
      inset: "0",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "z-index": "10",
      background: "rgba(255,255,255,0.7)",
    },
  },
  Na = { key: 1 },
  Ua = { class: "v-event-draggable" },
  ja = ["onMousedown"],
  Fa = { class: "mb-4 text-high-emphasis opacity-60" },
  xo = {
    __name: "todolist",
    setup(N) {
      const P = i(null),
        U = i(null),
        x = Fe();
      mt();
      const { status: pe, signIn: A, signOut: F, data: O } = dt(),
        I = i([]),
        T = i(null),
        r = Ue("snackbar"),
        f = i(!1),
        j = i(!1),
        L = i(!1),
        ce = i(!1),
        G = i(""),
        H = i(""),
        Q = i([]),
        K = i([]);
      i(null), i(null), i(null), i(null), i(null), i(null), i("");
      const se = i("month"),
        M = i("month"),
        Te = i({
          month: "Mese",
          week: "Settimana",
          day: "Giorno",
          "4day": "4 Days",
        }),
        z = i(null),
        Ee = i(null),
        Z = i(!1);
      i(null), i(null), i(!1);
      const R = i(0),
        a = i(0),
        n = i(0),
        D = i([]);
      i([0]);
      const h = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
        ],
        ne = i([]),
        ve = i([]),
        Se = i(null),
        fe = i(0),
        ct = i(0),
        Me = [
          { code: "A", name: "Approvato / Siglato" },
          { code: "C", name: "Confermato – in attesa di contratto" },
          { code: "S", name: "Da sviluppare" },
          { code: "I", name: "In discussione" },
          { code: "L", name: "Lead" },
          { code: "H", name: "On Hold" },
          { code: "R", name: "Rifiutato" },
        ],
        ze = i([]),
        Be = i([]),
        _e = i([]),
        qe = i([]),
        Pe = i([]),
        Le = i([]),
        X = i(!1);
      i(!0);
      const ye = i(!0),
        He = i(null),
        re = i(!0),
        Ke = i([]),
        vt = tt(
          () =>
            Ke.value.filter((e) => {
              const s = new Date(e).getDay(),
                g = s === 0 || s === 6,
                t = ee.value.some((p) => p.date === e);
              return !g && !t;
            }).length * 8,
        ),
        Oe = i([]),
        ge = i([]),
        ft = i([]),
        yt = tt(() => {
          const m = Oe.value
              .map((d, s) => ge.value.reduce((g, t) => g + (t.data[s] || 0), 0))
              .reduce((d, s) => Math.max(d, s), 0),
            e = Math.max(9, Math.ceil(m) + 1);
          return {
            chart: {
              type: "bar",
              height: 300,
              stacked: !0,
              toolbar: { show: !1 },
            },
            xaxis: { categories: Oe.value },
            yaxis: {
              min: 0,
              max: e,
              tickAmount: e,
              forceNiceScale: !1,
              decimalsInFloat: 0,
              labels: { formatter: (d) => Math.round(d) },
            },
            fill: { opacity: 1 },
            colors: ["#9e9e9e", "#43a047", "#fb8c00", "#ff0000"],
            legend: {
              position: "top",
              offsetX: 0,
              offsetY: 0,
              fontSize: "16px",
              formatter: function (d, s) {
                const g = s.w.globals.series[s.seriesIndex].reduce(
                  (t, p) => t + (p || 0),
                  0,
                );
                return `${d}: ${g.toFixed(1)} h`;
              },
            },
            dataLabels: { enabled: !1 },
            annotations: {
              yaxis: [
                {
                  y: 8,
                  borderColor: "orange",
                  borderWidth: 2,
                  label: {
                    borderColor: "orange",
                    style: { color: "#fff", background: "orange" },
                    text: "8 ore",
                  },
                },
              ],
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  legend: { position: "bottom", offsetX: -10, offsetY: 0 },
                },
              },
            ],
          };
        });
      function Je(m, e, d) {
        const s = new Date(e),
          g = new Date(d),
          t = [],
          p = new Date(s);
        for (; p <= g; )
          t.push(new Date(p).toISOString().substring(0, 10)),
            p.setDate(p.getDate() + 1);
        const C = {},
          te = {};
        m.forEach(($) => {
          const ae = $.startdate.substring(0, 10),
            B = Number($._ore || 0);
          $.acttype === "F"
            ? (C[ae] = (C[ae] || 0) + B)
            : (te[ae] = (te[ae] || 0) + B);
        }),
          (Ke.value = t),
          (Oe.value = t.map(($) => {
            const [ae, B, oe] = $.split("-");
            return `${oe}/${B}`;
          }));
        const ke = [],
          ue = [],
          Xe = [],
          we = [],
          Lt = new Date().toISOString().substring(0, 10);
        t.forEach(($, ae) => {
          const B = C[$] || 0,
            oe = te[$] || 0,
            Ye = new Date($).getDay(),
            Qe = Ye === 0 || Ye === 6,
            Ze = ee.value.some((xe) => xe.date === $);
          let Ve = 0,
            $e = 0;
          if (Qe || Ze) (Ve = 0), ($e = oe);
          else {
            const xe = Math.max(0, 8 - B);
            (Ve = Math.min(oe, xe)), ($e = Math.max(0, oe - xe));
          }
          ke.push(Number(B.toFixed(2))),
            ue.push(Number(Ve.toFixed(2))),
            Xe.push(Number($e.toFixed(2)));
          const Ht = $ > Lt,
            Kt = B + oe;
          !Qe && !Ze && !Ht && Kt < 8
            ? we.push(Number((8 - B - Ve).toFixed(2)))
            : we.push(0);
        }),
          (ft.value = we),
          (ge.value = [
            { name: "Ferie/Permessi/Malattia", data: ke },
            { name: "Ore normali", data: ue },
            { name: "Straordinario", data: Xe },
            { name: "Mancanti", data: we },
          ]);
      }
      const gt = async ({ start: m, end: e }) => {
        await be(m.date, e.date);
      };
      ca({
        title: "To Do List",
        meta: [{ name: "description", content: "To Do List" }],
      });
      const ee = i([]),
        bt = async (m, e) => {
          let d = { start: "2000-01-01", end: "2075-12-31" };
          if (ee.value.length == 0)
            try {
              const { data: s, status: g } = await S(
                x.public.apiBaseurl + "holiday/isholidaydate/0",
                { method: "POST", body: d },
              );
              ee.value = s;
            } catch (s) {
              console.log(s);
              let g = JSON.parse(s.data).errors.title;
              return (
                console.log("catcherr", s.data),
                (r.value = { text: g, type: "danger", show: !0 }),
                !1
              );
            }
        },
        kt = async () => {
          await ie(), await be();
        };
      function wt(m, { date: e }) {
        Ae(), (He.value = e);
      }
      function Ae(m = null) {
        (R.value = m?.client_id),
          (n.value = m?.project_id),
          (a.value = m?.id),
          (f.value = !0);
      }
      function Vt(m) {
        (a.value = m.id), (j.value = !0);
      }
      function We(m) {
        (a.value = m.id), (L.value = !0);
      }
      const xt = async () => {
          (f.value = !1), (z.value = null), (X.value = !1);
        },
        Ct = async () => {
          (f.value = !1),
            (z.value = null),
            (X.value = !1),
            await ie(),
            await be(),
            U.value.checkChange();
        };
      function ht() {
        (L.value = !1), (z.value = null);
      }
      function Dt() {
        (j.value = !1), ie();
      }
      function Re() {
        ce.value = window.innerWidth <= 960;
      }
      function Ge(m, { date: e }) {
        (G.value = e), (se.value = "day");
      }
      function Tt(m, { date: e }) {
        (H.value = e), (M.value = "day");
      }
      function Et() {
        G.value = "";
      }
      function St() {
        H.value = "";
      }
      const qt = async ({ start: m, end: e }) => {
        await bt();
        let d = m.date,
          s = e.date;
        if (se.value == "month") {
          const g = new Date(m.date);
          g.setMonth(g.getMonth() - 1), (d = g.toISOString().substring(0, 10));
          const t = new Date(e.date);
          t.setMonth(t.getMonth() + 1), (s = t.toISOString().substring(0, 10));
        }
        await Ft(d, s), sa(() => {});
      };
      function Pt() {
        P.value.prev();
      }
      function Ot() {
        P.value.next();
      }
      function At() {
        U.value.prev();
      }
      function Rt() {
        U.value.next();
      }
      function $t(m, { event: e }) {
        if (typeof e.id == "string") return;
        We(e);
        const d = () => {
          (z.value = e),
            (Ee.value = m.target),
            requestAnimationFrame(() =>
              requestAnimationFrame(() => (Z.value = !0)),
            );
        };
        Z.value
          ? ((Z.value = !1),
            requestAnimationFrame(() => requestAnimationFrame(() => d())))
          : d(),
          m.stopPropagation();
      }
      function Nt(m, { event: e }) {
        typeof e.id != "string" &&
          e.clickable &&
          ((f.value = !0), (z.value = e), m.stopPropagation());
      }
      const Ut = async () => {
          await ie(), fe.value++;
        },
        ie = async () => {
          (re.value = !0), (D.value = []);
          let m = { project_id: T.value, onlymytask: ye.value };
          try {
            const { data: e, status: d } = await S(
              x.public.apiBaseurl + "task/getmytasks",
              { method: "POST", body: m },
            );
            e.forEach((s) => {
              D.value.push({
                color: s.Project.color,
                title:
                  "[" +
                  s.Project.code +
                  "] " +
                  s.Project.name +
                  " - " +
                  s.Task.shortname,
                headline: s.Task.description,
                action:
                  s.Task.hours / 8 +
                  " giornate allocate/" +
                  (s.Task.hours - s.Task.rhours) / 8 +
                  " residue",
                id: s.Task.id,
                client_id: s.Project.client_id,
                project_id: s.Task.project_id,
                enddate: s.Task.enddate,
                status: s.Task.status,
                user:
                  s.User.firstname != null
                    ? s.User.firstname + " " + s.User.lastname
                    : "",
                user_id: s.User.id,
              });
            }),
              (re.value = !1);
          } catch (e) {
            let d = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (r.value = { text: d, type: "danger", show: !0 });
            return;
          }
        },
        be = async (m = null, e = null) => {
          K.value = [];
          let d = { project_id: T.value, start: m, end: e };
          try {
            const { data: s, status: g } = await S(
              x.public.apiBaseurl + "hour/list",
              { method: "POST", body: d },
            );
            let t = [];
            ee.value.forEach((p) => {
              K.value.push({
                name: p.name,
                color: p.color,
                start: p.date,
                end: p.date,
                nomeover: p.name,
                id: "FCS" + p,
              });
            }),
              s.forEach((p) => {
                K.value.push({
                  name: p.task_name,
                  color: p.color,
                  start: p.startdate,
                  end: p.enddate,
                  id: p.id,
                  nomeover: p.nomeover,
                  clickable: !0,
                });
              }),
              K.value.forEach((p) => {
                const C = new Date(p.start),
                  ue = (new Date(p.end) - C) / (1e3 * 60 * 60);
                t[p.start.substr(0, 10)] = t[p.start.substr(0, 10)]
                  ? t[p.start.substr(0, 10)] + ue
                  : ue;
              }),
              Object.entries(t).forEach(([p, C]) => {
                C > 0 &&
                  K.value.push({
                    name: "TOT ORE: " + C.toFixed(2),
                    color:
                      C.toFixed(2) < 8
                        ? "red"
                        : C.toFixed(2) == 8
                          ? "green"
                          : "orange",
                    start: p,
                    end: null,
                    id: p,
                    clickable: !1,
                  });
              }),
              m &&
                e &&
                (T.value == null || T.value == 0
                  ? Je(s, m, e)
                  : await jt(m, e));
          } catch (s) {
            console.log(s);
            let g = JSON.parse(s.data).errors.title;
            console.log("catcherr", s.data),
              (r.value = { text: g, type: "danger", show: !0 });
            return;
          }
        },
        jt = async (m, e) => {
          try {
            const d = { start: m, end: e },
              { data: s } = await S(x.public.apiBaseurl + "hour/list", {
                method: "POST",
                body: d,
              });
            Je(s, m, e);
          } catch (d) {
            console.log(d);
            let s = JSON.parse(d.data).errors.title;
            r.value = { text: s, type: "danger", show: !0 };
          }
        },
        Ft = async (m, e) => {
          (re.value = !0), (Q.value = []);
          let d = { start: m, end: e, onlymytask: ye.value };
          try {
            const { data: s, status: g } = await S(
              x.public.apiBaseurl + "task/getscadenze",
              { method: "POST", body: d },
            );
            ee.value.forEach((t) => {
              Q.value.push({
                name: t.name,
                color: t.color,
                start: t.date,
                end: t.date,
                id: "FCE" + t,
                nomeover: t.name,
              });
            }),
              s.forEach((t) => {
                Q.value.push({
                  name: t.Task.shortname,
                  color: t.Task.color,
                  start: t.Task.enddate,
                  end: t.Task.enddate,
                  id: t.Task.id,
                  nomeover:
                    "[" +
                    t.Project.code +
                    "] " +
                    t.Project.name +
                    " - " +
                    t.Task.shortname,
                });
              }),
              (re.value = !1);
          } catch (s) {
            let g = JSON.parse(s.data).errors.title;
            console.log("catcherr", s.data),
              (r.value = { text: g, type: "danger", show: !0 });
            return;
          }
        },
        It = async () => {
          I.value = [];
          let m = {};
          try {
            const { data: e, status: d } = await S(
              x.public.apiBaseurl + "project/activelist",
              { method: "POST", body: m },
            );
            e.forEach((s) => {
              I.value.push({
                id: s.id,
                name: "[" + s.code + "] " + s.name,
                status: s.status,
              });
            });
          } catch (e) {
            console.log(e);
            let d = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (r.value = { text: d, type: "danger", show: !0 });
            return;
          }
        },
        Mt = async () => {
          (ne.value = []), (ve.value = []);
          const { data: m } = await S(x.public.apiBaseurl + "user/list", {
            onRequest({ request: e, options: d }) {},
            onRequestError({ request: e, options: d, error: s }) {
              console.log("Errore nella request:", s);
            },
            onResponseError({ request: e, response: d, options: s }) {
              r.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: d, options: s }) {
              d._data.data.forEach((t) => {
                (ve.value[t.id] =
                  "[" +
                  t.firstname.substr(0, 1) +
                  t.lastname.substr(0, 1) +
                  "]"),
                  ne.value.push({
                    id: t.id,
                    name: t.firstname + " " + t.lastname,
                  });
              });
            },
          });
        },
        zt = async () => {
          (_e.value = []), (qe.value = []);
          const { data: m } = await S(
            x.public.apiBaseurl + "userprofile/list",
            {
              onRequest({ request: e, options: d }) {},
              onRequestError({ request: e, options: d, error: s }) {
                console.log("Errore nella request:", s);
              },
              onResponseError({ request: e, response: d, options: s }) {
                r.value = {
                  text: "Errore caricamento profili professionali",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: d, options: s }) {
                d._data.data.forEach((t) => {
                  (_e.value[t.id] = "[" + t.code + "]"),
                    qe.value.push({
                      id: t.id,
                      name: t.profilename,
                      code: t.code,
                    });
                });
              },
            },
          );
        },
        Bt = async () => {
          Be.value = [];
          const { data: m } = await S(x.public.apiBaseurl + "supplier/list", {
            onRequest({ request: e, options: d }) {},
            onRequestError({ request: e, options: d, error: s }) {
              console.log("Errore nella request:", s);
            },
            onResponseError({ request: e, response: d, options: s }) {
              r.value = {
                text: "Errore caricamento fornitori",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: d, options: s }) {
              d._data.data.forEach((t) => {
                (Be.value[t.id] = t.name + " [" + t.codsup + "]"),
                  ze.value.push({ id: t.id, name: t.name, code: t.codsup });
              });
            },
          });
        },
        _t = async () => {
          (Pe.value = []), (Le.value = []);
          const { data: m } = await S(x.public.apiBaseurl + "activity/list", {
            onRequest({ request: e, options: d }) {},
            onRequestError({ request: e, options: d, error: s }) {
              console.log("Errore nella request:", s);
            },
            onResponseError({ request: e, response: d, options: s }) {
              r.value = {
                text: "Errore caricamento attività",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: e, response: d, options: s }) {
              d._data.data.forEach((t) => {
                (Le.value[t.Activity.id] =
                  "[" + t.Activity.acronimo + "] " + t.Activity.name),
                  Pe.value.push({ id: t.Activity.id, name: t.Activity.name });
              });
            },
          });
        };
      return (
        je(async () => {
          (Se.value = O.value.id),
            await Mt(),
            await zt(),
            await Bt(),
            await _t(),
            await It(),
            await ie(),
            await be(),
            Re(),
            window.addEventListener("resize", Re);
        }),
        ea(() => {
          window.removeEventListener("resize", Re);
        }),
        (m, e) => {
          const d = Jt,
            s = xa,
            g = Oa;
          return (
            y(),
            W("div", Aa, [
              c("div", Ra, [
                re.value
                  ? (y(),
                    W("div", $a, [
                      l(ra, { indeterminate: "", color: "primary" }),
                    ]))
                  : k("", !0),
                X.value
                  ? k("", !0)
                  : (y(),
                    W("div", Na, [
                      e[11] ||
                        (e[11] = c(
                          "h3",
                          { class: "mt-3" },
                          "Ore totali per giorno",
                          -1,
                        )),
                      c(
                        "h5",
                        null,
                        "Ore lavorabili nel periodo: " + V(u(vt)) + " h",
                        1,
                      ),
                      ge.value.length
                        ? (y(),
                          b(
                            u(ma),
                            {
                              key: 0,
                              type: "bar",
                              height: "300",
                              options: u(yt),
                              series: ge.value,
                            },
                            null,
                            8,
                            ["options", "series"],
                          ))
                        : k("", !0),
                    ])),
                l(
                  Y,
                  { class: "fill-height mt-4" },
                  {
                    default: o(() => [
                      l(
                        w,
                        { cols: "12", md: "6" },
                        {
                          default: o(() => [
                            l(
                              u(pa),
                              {
                                modelValue: X.value,
                                "onUpdate:modelValue":
                                  e[0] || (e[0] = (t) => (X.value = t)),
                                "on-label": "Scadenze Task",
                                "off-label": "Calendario Attività svolte",
                                class: "big-toggle2 mb-4",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                            at(
                              c(
                                "div",
                                null,
                                [
                                  l(
                                    st,
                                    { flat: "" },
                                    {
                                      default: o(() => [
                                        l(
                                          q,
                                          {
                                            class: "me-4",
                                            color: "grey-darken-2",
                                            variant: "outlined",
                                            onClick: Et,
                                          },
                                          {
                                            default: o(() => [
                                              ...(e[12] ||
                                                (e[12] = [v(" Oggi ", -1)])),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        l(
                                          q,
                                          {
                                            color: "grey-darken-2",
                                            size: "small",
                                            variant: "text",
                                            icon: "",
                                            onClick: Pt,
                                          },
                                          {
                                            default: o(() => [
                                              l(
                                                E,
                                                { size: "small" },
                                                {
                                                  default: o(() => [
                                                    ...(e[13] ||
                                                      (e[13] = [
                                                        v(
                                                          " mdi-chevron-left ",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        l(
                                          q,
                                          {
                                            color: "grey-darken-2",
                                            size: "small",
                                            variant: "text",
                                            icon: "",
                                            onClick: Ot,
                                          },
                                          {
                                            default: o(() => [
                                              l(
                                                E,
                                                { size: "small" },
                                                {
                                                  default: o(() => [
                                                    ...(e[14] ||
                                                      (e[14] = [
                                                        v(
                                                          " mdi-chevron-right ",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        P.value
                                          ? (y(),
                                            b(
                                              nt,
                                              {
                                                key: 0,
                                                style: {
                                                  "text-transform": "uppercase",
                                                },
                                              },
                                              {
                                                default: o(() => [
                                                  v(V(P.value.title), 1),
                                                ]),
                                                _: 1,
                                              },
                                            ))
                                          : k("", !0),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  l(
                                    Y,
                                    { class: "fill-height mt-10" },
                                    {
                                      default: o(() => [
                                        l(w, null, {
                                          default: o(() => [
                                            l(
                                              rt,
                                              { height: "100vh" },
                                              {
                                                default: o(() => [
                                                  (y(),
                                                  b(
                                                    et,
                                                    {
                                                      "first-day-of-week": 1,
                                                      ref_key: "calendar",
                                                      ref: P,
                                                      modelValue: G.value,
                                                      "onUpdate:modelValue":
                                                        e[1] ||
                                                        (e[1] = (t) =>
                                                          (G.value = t)),
                                                      "event-ripple": !1,
                                                      events: Q.value,
                                                      color: "primary",
                                                      weekdays: [
                                                        1, 2, 3, 4, 5, 6, 0,
                                                      ],
                                                      type: se.value,
                                                      onChange: qt,
                                                      key: fe.value,
                                                      "onClick:date": Ge,
                                                      "onClick:event": $t,
                                                      "onClick:more": Ge,
                                                      locale: "it",
                                                    },
                                                    {
                                                      event: o(
                                                        ({ event: t }) => [
                                                          l(
                                                            it,
                                                            {
                                                              location: "top",
                                                              "open-on-hover":
                                                                "",
                                                            },
                                                            {
                                                              activator: o(
                                                                ({
                                                                  props: p,
                                                                }) => [
                                                                  c(
                                                                    "div",
                                                                    Ce(p, {
                                                                      class:
                                                                        "calendar-event",
                                                                      style: {
                                                                        backgroundColor:
                                                                          t.color,
                                                                      },
                                                                    }),
                                                                    V(t.name),
                                                                    17,
                                                                  ),
                                                                ],
                                                              ),
                                                              default: o(() => [
                                                                c(
                                                                  "span",
                                                                  null,
                                                                  V(t.nomeover),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024,
                                                          ),
                                                        ],
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    [
                                                      "modelValue",
                                                      "events",
                                                      "type",
                                                    ],
                                                  )),
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
                                ],
                                512,
                              ),
                              [[ot, X.value]],
                            ),
                            at(
                              c(
                                "div",
                                null,
                                [
                                  l(
                                    st,
                                    { flat: "" },
                                    {
                                      default: o(() => [
                                        l(
                                          q,
                                          {
                                            class: "me-4",
                                            color: "grey-darken-2",
                                            variant: "outlined",
                                            onClick: St,
                                          },
                                          {
                                            default: o(() => [
                                              ...(e[15] ||
                                                (e[15] = [v(" Oggi ", -1)])),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        l(
                                          q,
                                          {
                                            color: "grey-darken-2",
                                            size: "small",
                                            variant: "text",
                                            icon: "",
                                            onClick: At,
                                          },
                                          {
                                            default: o(() => [
                                              l(
                                                E,
                                                { size: "small" },
                                                {
                                                  default: o(() => [
                                                    ...(e[16] ||
                                                      (e[16] = [
                                                        v(
                                                          " mdi-chevron-left ",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        l(
                                          q,
                                          {
                                            color: "grey-darken-2",
                                            size: "small",
                                            variant: "text",
                                            icon: "",
                                            onClick: Rt,
                                          },
                                          {
                                            default: o(() => [
                                              l(
                                                E,
                                                { size: "small" },
                                                {
                                                  default: o(() => [
                                                    ...(e[17] ||
                                                      (e[17] = [
                                                        v(
                                                          " mdi-chevron-right ",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                        P.value
                                          ? (y(),
                                            b(
                                              nt,
                                              {
                                                key: 0,
                                                style: {
                                                  "text-transform": "uppercase",
                                                },
                                              },
                                              {
                                                default: o(() => [
                                                  v(V(U.value.title), 1),
                                                ]),
                                                _: 1,
                                              },
                                            ))
                                          : k("", !0),
                                        l(
                                          fa,
                                          { location: "bottom end" },
                                          {
                                            activator: o(({ props: t }) => [
                                              l(
                                                q,
                                                Ce(
                                                  {
                                                    color: "grey-darken-2",
                                                    variant: "outlined",
                                                  },
                                                  t,
                                                ),
                                                {
                                                  default: o(() => [
                                                    c(
                                                      "span",
                                                      null,
                                                      V(Te.value[M.value]),
                                                      1,
                                                    ),
                                                    l(
                                                      E,
                                                      { end: "" },
                                                      {
                                                        default: o(() => [
                                                          ...(e[18] ||
                                                            (e[18] = [
                                                              v(
                                                                " mdi-menu-down ",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                16,
                                              ),
                                            ]),
                                            default: o(() => [
                                              l(ut, null, {
                                                default: o(() => [
                                                  l(
                                                    de,
                                                    {
                                                      onClick:
                                                        e[2] ||
                                                        (e[2] = (t) =>
                                                          (M.value = "day")),
                                                    },
                                                    {
                                                      default: o(() => [
                                                        l(he, null, {
                                                          default: o(() => [
                                                            ...(e[19] ||
                                                              (e[19] = [
                                                                v("Giorno", -1),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        }),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  l(
                                                    de,
                                                    {
                                                      onClick:
                                                        e[3] ||
                                                        (e[3] = (t) =>
                                                          (M.value = "week")),
                                                    },
                                                    {
                                                      default: o(() => [
                                                        l(he, null, {
                                                          default: o(() => [
                                                            ...(e[20] ||
                                                              (e[20] = [
                                                                v(
                                                                  "Settimana",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        }),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  l(
                                                    de,
                                                    {
                                                      onClick:
                                                        e[4] ||
                                                        (e[4] = (t) =>
                                                          (M.value = "month")),
                                                    },
                                                    {
                                                      default: o(() => [
                                                        l(he, null, {
                                                          default: o(() => [
                                                            ...(e[21] ||
                                                              (e[21] = [
                                                                v("Mese", -1),
                                                              ])),
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
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  l(
                                    Y,
                                    { class: "fill-height mt-10" },
                                    {
                                      default: o(() => [
                                        l(w, null, {
                                          default: o(() => [
                                            l(
                                              rt,
                                              { height: "100vh" },
                                              {
                                                default: o(() => [
                                                  (y(),
                                                  b(
                                                    et,
                                                    {
                                                      "first-day-of-week": 1,
                                                      "onClick:date": wt,
                                                      ref_key:
                                                        "calendarcalendar",
                                                      ref: U,
                                                      modelValue: H.value,
                                                      "onUpdate:modelValue":
                                                        e[5] ||
                                                        (e[5] = (t) =>
                                                          (H.value = t)),
                                                      "event-ripple": !1,
                                                      events: K.value,
                                                      color: "primary",
                                                      weekdays: [
                                                        1, 2, 3, 4, 5, 6, 0,
                                                      ],
                                                      type: M.value,
                                                      "onClick:event": Nt,
                                                      "onClick:more": Tt,
                                                      locale: "it",
                                                      key: ct.value,
                                                      onChange: gt,
                                                    },
                                                    {
                                                      event: o(
                                                        ({
                                                          event: t,
                                                          timed: p,
                                                          eventSummary: C,
                                                        }) => [
                                                          l(
                                                            it,
                                                            {
                                                              location: "top",
                                                              "open-on-hover":
                                                                "",
                                                            },
                                                            {
                                                              activator: o(
                                                                ({
                                                                  props: te,
                                                                }) => [
                                                                  c(
                                                                    "div",
                                                                    Ce(te, {
                                                                      class:
                                                                        "calendar-event",
                                                                      style: {
                                                                        backgroundColor:
                                                                          t.color,
                                                                      },
                                                                    }),
                                                                    [
                                                                      c(
                                                                        "div",
                                                                        Ua,
                                                                        [
                                                                          (y(),
                                                                          b(
                                                                            ta(
                                                                              C,
                                                                            ),
                                                                          )),
                                                                        ],
                                                                      ),
                                                                      p
                                                                        ? (y(),
                                                                          W(
                                                                            "div",
                                                                            {
                                                                              key: 0,
                                                                              class:
                                                                                "v-event-drag-bottom",
                                                                              onMousedown:
                                                                                aa(
                                                                                  (
                                                                                    ke,
                                                                                  ) =>
                                                                                    m.extendBottom(
                                                                                      t,
                                                                                    ),
                                                                                  [
                                                                                    "stop",
                                                                                  ],
                                                                                ),
                                                                            },
                                                                            null,
                                                                            40,
                                                                            ja,
                                                                          ))
                                                                        : k(
                                                                            "",
                                                                            !0,
                                                                          ),
                                                                    ],
                                                                    16,
                                                                  ),
                                                                ],
                                                              ),
                                                              default: o(() => [
                                                                c(
                                                                  "span",
                                                                  null,
                                                                  V(t.nomeover),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024,
                                                          ),
                                                        ],
                                                      ),
                                                      _: 1,
                                                    },
                                                    8,
                                                    [
                                                      "modelValue",
                                                      "events",
                                                      "type",
                                                    ],
                                                  )),
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
                                ],
                                512,
                              ),
                              [[ot, !X.value]],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      l(
                        w,
                        { cols: "12", md: "6" },
                        {
                          default: o(() => [
                            l(
                              Y,
                              { class: "" },
                              {
                                default: o(() => [
                                  l(
                                    w,
                                    { cols: "12", md: "12" },
                                    {
                                      default: o(() => [
                                        l(
                                          q,
                                          {
                                            class: "me-4",
                                            color: "green",
                                            onClick:
                                              e[6] || (e[6] = (t) => Ae()),
                                            style: { float: "right" },
                                          },
                                          {
                                            default: o(() => [
                                              l(E, null, {
                                                default: o(() => [
                                                  ...(e[22] ||
                                                    (e[22] = [
                                                      v("mdi-plus", -1),
                                                    ])),
                                                ]),
                                                _: 1,
                                              }),
                                              e[24] || (e[24] = v()),
                                              l(
                                                E,
                                                { class: "mr-1" },
                                                {
                                                  default: o(() => [
                                                    ...(e[23] ||
                                                      (e[23] = [
                                                        v(
                                                          "mdi-clock-outline",
                                                          -1,
                                                        ),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              e[25] ||
                                                (e[25] = v(
                                                  " Report mie ore ",
                                                  -1,
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
                              },
                            ),
                            e[41] ||
                              (e[41] = c("h3", null, "Assegnazioni", -1)),
                            l(
                              le,
                              {
                                autocomplete: "off",
                                class: "mb-0 mt-1",
                                modelValue: T.value,
                                "onUpdate:modelValue": [
                                  e[7] || (e[7] = (t) => (T.value = t)),
                                  e[8] || (e[8] = (t) => kt()),
                                ],
                                items: I.value,
                                "item-title": "name",
                                "item-value": "id",
                                required: "",
                                label: "Progetto",
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "compact",
                                clearable: "",
                                "hide-details": "",
                                "no-data-text": "Nessun risultato trovato",
                              },
                              {
                                item: o(({ props: t, item: p }) => [
                                  l(
                                    de,
                                    Ce(t, { class: "listaprogetti" }),
                                    {
                                      append: o(() => [
                                        l(
                                          ya,
                                          {
                                            label: "",
                                            color: "black",
                                            variant: "outlined",
                                            size: "small",
                                            class: "mr-2",
                                          },
                                          {
                                            default: o(() => [
                                              v(
                                                V(
                                                  Me.filter(
                                                    ({ code: C }) =>
                                                      C === p.raw.status,
                                                  )
                                                    .map(({ name: C }) => C)
                                                    .slice(0, 1)
                                                    .shift(),
                                                ),
                                                1,
                                              ),
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
                              ["modelValue", "items"],
                            ),
                            l(
                              va,
                              {
                                label: "Solo i miei task",
                                class: "mb-0 mt-0",
                                "hide-details": "",
                                modelValue: ye.value,
                                "onUpdate:modelValue":
                                  e[9] || (e[9] = (t) => (ye.value = t)),
                                onChange: e[10] || (e[10] = (t) => Ut()),
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                            l(ut, null, {
                              default: o(() => [
                                (y(!0),
                                W(
                                  oa,
                                  null,
                                  la(
                                    D.value,
                                    (t) => (
                                      y(),
                                      b(
                                        de,
                                        {
                                          style: me(
                                            t.status == "P"
                                              ? "border-bottom:1px solid lightgrey;opacity:0.5; cursor:default;"
                                              : "border-bottom:1px solid lightgrey;",
                                          ),
                                          key: t.id,
                                          value: t.id,
                                          class: "py-3",
                                        },
                                        {
                                          prepend: o(() => [
                                            l(
                                              ga,
                                              {
                                                color: t.color,
                                                class: "mr-4 border border-md",
                                              },
                                              {
                                                default: o(() => [
                                                  t.user_id != u(O).id
                                                    ? (y(),
                                                      b(
                                                        E,
                                                        { key: 0 },
                                                        {
                                                          default: o(() => [
                                                            ...(e[26] ||
                                                              (e[26] = [
                                                                v(
                                                                  "mdi-folder",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        },
                                                      ))
                                                    : (y(),
                                                      b(
                                                        E,
                                                        { key: 1 },
                                                        {
                                                          default: o(() => [
                                                            ...(e[27] ||
                                                              (e[27] = [
                                                                v(
                                                                  "mdi-folder-account",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ]),
                                                          _: 1,
                                                        },
                                                      )),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["color"],
                                            ),
                                          ]),
                                          append: o(({ isSelected: p }) => [
                                            l(
                                              ka,
                                              {
                                                class: "flex-column align-end",
                                              },
                                              {
                                                default: o(() => [
                                                  c(
                                                    "small",
                                                    Fa,
                                                    V(t.action),
                                                    1,
                                                  ),
                                                  l(Ie),
                                                  t.status != "P" &&
                                                  t.user_id == u(O).id
                                                    ? (y(),
                                                      b(
                                                        q,
                                                        {
                                                          key: 0,
                                                          onClick: (C) => Ae(t),
                                                          color: "green",
                                                        },
                                                        {
                                                          default: o(() => [
                                                            l(E, null, {
                                                              default: o(() => [
                                                                ...(e[35] ||
                                                                  (e[35] = [
                                                                    v(
                                                                      "mdi-plus",
                                                                      -1,
                                                                    ),
                                                                  ])),
                                                              ]),
                                                              _: 1,
                                                            }),
                                                            e[37] ||
                                                              (e[37] = v()),
                                                            l(
                                                              E,
                                                              { class: "mr-1" },
                                                              {
                                                                default: o(
                                                                  () => [
                                                                    ...(e[36] ||
                                                                      (e[36] = [
                                                                        v(
                                                                          "mdi-clock-outline",
                                                                          -1,
                                                                        ),
                                                                      ])),
                                                                  ],
                                                                ),
                                                                _: 1,
                                                              },
                                                            ),
                                                            e[38] ||
                                                              (e[38] = v(
                                                                " Report ore",
                                                                -1,
                                                              )),
                                                          ]),
                                                          _: 1,
                                                        },
                                                        8,
                                                        ["onClick"],
                                                      ))
                                                    : k("", !0),
                                                  t.status == "A" &&
                                                  t.user_id == u(O).id
                                                    ? (y(),
                                                      b(
                                                        q,
                                                        {
                                                          key: 1,
                                                          onClick: (C) => Vt(t),
                                                          class: "mt-2",
                                                          color: "blue",
                                                        },
                                                        {
                                                          default: o(() => [
                                                            l(E, null, {
                                                              default: o(() => [
                                                                ...(e[39] ||
                                                                  (e[39] = [
                                                                    v(
                                                                      "mdi-check",
                                                                      -1,
                                                                    ),
                                                                  ])),
                                                              ]),
                                                              _: 1,
                                                            }),
                                                            e[40] ||
                                                              (e[40] = v(
                                                                " Completa il task",
                                                                -1,
                                                              )),
                                                          ]),
                                                          _: 1,
                                                        },
                                                        8,
                                                        ["onClick"],
                                                      ))
                                                    : k("", !0),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                          ]),
                                          default: o(() => [
                                            l(
                                              he,
                                              { class: "text-wrap" },
                                              {
                                                default: o(() => [
                                                  l(
                                                    E,
                                                    {
                                                      onClick: (p) => We(t),
                                                      title: "Dettagli task",
                                                    },
                                                    {
                                                      default: o(() => [
                                                        ...(e[28] ||
                                                          (e[28] = [
                                                            v(
                                                              "mdi-information-outline",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                    8,
                                                    ["onClick"],
                                                  ),
                                                  v(" " + V(t.title), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                            l(
                                              Ne,
                                              {
                                                class:
                                                  "no-clamp mb-1 text-high-emphasis opacity-100",
                                              },
                                              {
                                                default: o(() => [
                                                  v(V(t.headline), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                            t.user != ""
                                              ? (y(),
                                                b(
                                                  Ne,
                                                  {
                                                    key: 0,
                                                    class:
                                                      "mb-1 text-high-emphasis opacity-100",
                                                  },
                                                  {
                                                    default: o(() => [
                                                      e[29] ||
                                                        (e[29] = c(
                                                          "b",
                                                          null,
                                                          "Assegnato:",
                                                          -1,
                                                        )),
                                                      v(" " + V(t.user), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ))
                                              : k("", !0),
                                            l(
                                              Ne,
                                              {
                                                class:
                                                  "text-high-emphasis opacity-100",
                                              },
                                              {
                                                default: o(() => [
                                                  e[30] ||
                                                    (e[30] = c(
                                                      "b",
                                                      null,
                                                      "Scadenza",
                                                      -1,
                                                    )),
                                                  e[31] ||
                                                    (e[31] = v(": ", -1)),
                                                  t.enddate != null
                                                    ? (y(),
                                                      W(
                                                        "span",
                                                        {
                                                          key: 0,
                                                          style: me(
                                                            new Date(
                                                              t.enddate,
                                                            ) <= new Date()
                                                              ? "color:red; font-weight:bold"
                                                              : new Date(
                                                                    t.enddate,
                                                                  ) <=
                                                                  new Date(
                                                                    new Date().setDate(
                                                                      new Date().getDate() +
                                                                        10,
                                                                    ),
                                                                  )
                                                                ? "color:orange; font-weight:bold"
                                                                : "",
                                                          ),
                                                        },
                                                        V(
                                                          new Date(
                                                            t.enddate,
                                                          ).toLocaleDateString(
                                                            "it-IT",
                                                          ),
                                                        ),
                                                        5,
                                                      ))
                                                    : k("", !0),
                                                  e[32] ||
                                                    (e[32] = v(" - ", -1)),
                                                  e[33] ||
                                                    (e[33] = c(
                                                      "b",
                                                      null,
                                                      "Stato",
                                                      -1,
                                                    )),
                                                  e[34] ||
                                                    (e[34] = v(": ", -1)),
                                                  c(
                                                    "span",
                                                    {
                                                      style: me(
                                                        t.status == "P"
                                                          ? "color:blue; font-weight:bold"
                                                          : "color:orange; font-weight:bold",
                                                      ),
                                                    },
                                                    V(
                                                      h
                                                        .filter(
                                                          ({ code: p }) =>
                                                            p === t.status,
                                                        )
                                                        .map(({ name: p }) => p)
                                                        .slice(0, 1)
                                                        .shift(),
                                                    ),
                                                    5,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["style", "value"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
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
                ),
              ]),
              f.value
                ? (y(),
                  b(
                    d,
                    {
                      key: 0,
                      seldate: He.value,
                      dialoginsmod: f.value,
                      attivita: z.value,
                      client_id: R.value,
                      task_id: a.value,
                      project_id: n.value,
                      onOnlyclosedialoginsmod: xt,
                      onClose: Ct,
                    },
                    null,
                    8,
                    [
                      "seldate",
                      "dialoginsmod",
                      "attivita",
                      "client_id",
                      "task_id",
                      "project_id",
                    ],
                  ))
                : k("", !0),
              j.value
                ? (y(),
                  b(
                    s,
                    {
                      key: 1,
                      dialogclose: j.value,
                      task_id: a.value,
                      onClose: Dt,
                    },
                    null,
                    8,
                    ["dialogclose", "task_id"],
                  ))
                : k("", !0),
              L.value
                ? (y(),
                  b(
                    g,
                    {
                      key: 2,
                      stati: Me,
                      suppliers: ze.value,
                      profiles: qe.value,
                      users: ne.value,
                      dialoginsmod: L.value,
                      idrec: a.value,
                      onClose: ht,
                      activities: Pe.value,
                    },
                    null,
                    8,
                    [
                      "suppliers",
                      "profiles",
                      "users",
                      "dialoginsmod",
                      "idrec",
                      "activities",
                    ],
                  ))
                : k("", !0),
            ])
          );
        }
      );
    },
  };
export { xo as default };
