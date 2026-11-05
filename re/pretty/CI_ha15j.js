import { _ as ne } from "./ClyIuovc.js";
import {
  E as ee,
  k as ie,
  r as m,
  G as te,
  o as oe,
  J,
  y as R,
  C as n,
  z as g,
  x as M,
  K as G,
  B as o,
  N as d,
  O as se,
  M as D,
  L as l,
  a3 as re,
  D as V,
  n as ae,
  u as de,
  e as me,
  P as ue,
  A as H,
} from "./CYsiv7Qj.js";
import { $ } from "./BvG7V8Ak.js";
import { V as ce } from "./MIubIMrV.js";
import { V as pe, a as r } from "./Bj0ZT2dB.js";
import { V as u } from "./BrCrqdgZ.js";
import { V as W } from "./61Go5SWW.js";
import { V as Y } from "./CZzf1ihi.js";
import { V as fe } from "./DCAzZvgN.js";
import { V as ve } from "./B51noTYL.js";
import { V as q, a as O } from "./B_W9U9Wp.js";
import { V as ye } from "./BqujDEEl.js";
import { V as Ve } from "./Dlfzj7mx.js";
import { x as z } from "./D16A7lth.js";
import { u as be } from "./LKQL6vAN.js";
import { V as ge } from "./ss-1h9Hv.js";
import { V as we, a as Ce, b as h, c as _ } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./Cv1q1CuH.js";
import "./fKsYyVgl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const ke = {
    class: "mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Pe = { key: 0, class: "pb-10 pageh2" },
  Re = { key: 1, class: "pb-10 pageh2" },
  xe = { style: { display: "flex" } },
  Ee = {
    __name: "DialogInsModClient",
    props: { dialoginsmod: Boolean, idrec: Number, clientNames: Array },
    emits: ["close"],
    setup(B, { emit: L }) {
      const { data: X } = ee(),
        Z = ae(),
        Q = L,
        U = B,
        S = ie(() => {
          const c = a.value.name?.trim();
          return c ? !U.clientNames.includes(c) : !1;
        }),
        w = m(!1),
        C = m(!1),
        k = te("snackbar"),
        A = [
          { value: null, label: "Personalizzato" },
          { value: "0", label: "Data fattura" },
          { value: "30", label: "30 gg" },
          { value: "30fm", label: "30 gg f.m." },
          { value: "45", label: "45 gg" },
          { value: "60", label: "60 gg" },
          { value: "60fm", label: "60 gg f.m." },
          { value: "75", label: "75 gg" },
          { value: "90", label: "90 gg" },
          { value: "90fm", label: "90 gg f.m." },
          { value: "120", label: "120 gg" },
        ],
        x = m(null),
        a = m({ id: 0 }),
        K = [
          { code: "AG", name: "Agrigento" },
          { code: "AL", name: "Alessandria" },
          { code: "AN", name: "Ancona" },
          { code: "AO", name: "Aosta" },
          { code: "AR", name: "Arezzo" },
          { code: "AP", name: "Ascoli Piceno" },
          { code: "AT", name: "Asti" },
          { code: "AV", name: "Avellino" },
          { code: "BA", name: "Bari" },
          { code: "BT", name: "Barletta-Andria-Trani" },
          { code: "BL", name: "Belluno" },
          { code: "BN", name: "Benevento" },
          { code: "BG", name: "Bergamo" },
          { code: "BI", name: "Biella" },
          { code: "BO", name: "Bologna" },
          { code: "BZ", name: "Bolzano" },
          { code: "BS", name: "Brescia" },
          { code: "BR", name: "Brindisi" },
          { code: "CA", name: "Cagliari" },
          { code: "CL", name: "Caltanissetta" },
          { code: "CB", name: "Campobasso" },
          { code: "CE", name: "Caserta" },
          { code: "CT", name: "Catania" },
          { code: "CZ", name: "Catanzaro" },
          { code: "CH", name: "Chieti" },
          { code: "CO", name: "Como" },
          { code: "CS", name: "Cosenza" },
          { code: "CR", name: "Cremona" },
          { code: "KR", name: "Crotone" },
          { code: "CN", name: "Cuneo" },
          { code: "EN", name: "Enna" },
          { code: "FM", name: "Fermo" },
          { code: "FE", name: "Ferrara" },
          { code: "FI", name: "Firenze" },
          { code: "FG", name: "Foggia" },
          { code: "FC", name: "Forlì-Cesena" },
          { code: "FR", name: "Frosinone" },
          { code: "GE", name: "Genova" },
          { code: "GO", name: "Gorizia" },
          { code: "GR", name: "Grosseto" },
          { code: "IM", name: "Imperia" },
          { code: "IS", name: "Isernia" },
          { code: "AQ", name: "L’aquila" },
          { code: "SP", name: "La spezia" },
          { code: "LT", name: "Latina" },
          { code: "LE", name: "Lecce" },
          { code: "LC", name: "Lecco" },
          { code: "LI", name: "Livorno" },
          { code: "LO", name: "Lodi" },
          { code: "LU", name: "Lucca" },
          { code: "MC", name: "Macerata" },
          { code: "MN", name: "Mantova" },
          { code: "MS", name: "Massa-Carrara" },
          { code: "MT", name: "Matera" },
          { code: "ME", name: "Messina" },
          { code: "MI", name: "Milano" },
          { code: "MO", name: "Modena" },
          { code: "MB", name: "Monza e Brianza" },
          { code: "NA", name: "Napoli" },
          { code: "NO", name: "Novara" },
          { code: "NU", name: "Nuoro" },
          { code: "OR", name: "Oristano" },
          { code: "PD", name: "Padova" },
          { code: "PA", name: "Palermo" },
          { code: "PR", name: "Parma" },
          { code: "PV", name: "Pavia" },
          { code: "PG", name: "Perugia" },
          { code: "PU", name: "Pesaro e Urbino" },
          { code: "PE", name: "Pescara" },
          { code: "PC", name: "Piacenza" },
          { code: "PI", name: "Pisa" },
          { code: "PT", name: "Pistoia" },
          { code: "PN", name: "Pordenone" },
          { code: "PZ", name: "Potenza" },
          { code: "PO", name: "Prato" },
          { code: "RG", name: "Ragusa" },
          { code: "RA", name: "Ravenna" },
          { code: "RC", name: "Reggio Calabria" },
          { code: "RE", name: "Reggio Emilia" },
          { code: "RI", name: "Rieti" },
          { code: "RN", name: "Rimini" },
          { code: "RM", name: "Roma" },
          { code: "RO", name: "Rovigo" },
          { code: "SA", name: "Salerno" },
          { code: "SS", name: "Sassari" },
          { code: "SV", name: "Savona" },
          { code: "SI", name: "Siena" },
          { code: "SR", name: "Siracusa" },
          { code: "SO", name: "Sondrio" },
          { code: "SU", name: "Sud Sardegna" },
          { code: "TA", name: "Taranto" },
          { code: "TE", name: "Teramo" },
          { code: "TR", name: "Terni" },
          { code: "TO", name: "Torino" },
          { code: "TP", name: "Trapani" },
          { code: "TN", name: "Trento" },
          { code: "TV", name: "Treviso" },
          { code: "TS", name: "Trieste" },
          { code: "UD", name: "Udine" },
          { code: "VA", name: "Varese" },
          { code: "VE", name: "Venezia" },
          { code: "VB", name: "Verbano-Cusio-Ossola" },
          { code: "VC", name: "Vercelli" },
          { code: "VR", name: "Verona" },
          { code: "VV", name: "Vibo valentia" },
          { code: "VI", name: "Vicenza" },
          { code: "VT", name: "Viterbo" },
        ],
        b = m(null),
        P = m([(c) => !!c || "Campo obbligatorio"]);
      m([
        (c) => !!c || "E-mail obbligatoria",
        (c) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            c,
          ) || "Email non valida",
      ]);
      const j = async () => {
        (a.value.paymenttype = x.value),
          b.value
            ? (a.value.province =
                typeof b.value == "object" ? b.value.code : b.value)
            : (a.value.province = null),
          (a.value.stopservice = a.value.stopservice == !0 ? 1 : 0),
          (a.value.prioritario = a.value.prioritario == !0 ? 1 : 0);
        let c = { Client: a.value };
        await $(Z.public.apiBaseurl + "client/createedit", {
          method: "POST",
          body: c,
        })
          .then(() => {
            U.idrec == 0
              ? (k.value = {
                  text: "Creazione cliente completata",
                  type: "success",
                  show: !0,
                })
              : (k.value = {
                  text: "Modifica cliente completata",
                  type: "success",
                  show: !0,
                }),
              N();
          })
          .catch((e) => {
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (k.value = { text: t, type: "danger", show: !0 });
          });
      };
      function N() {
        Q("close");
      }
      const F = async () => {
        if (U.idrec > 0) {
          const { data: c } = await $(
            Z.public.apiBaseurl + "client/get/" + U.idrec,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: T }) {
                console.log("Errore nella request:", T),
                  (k.value = {
                    text: "Errore: " + T,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: T }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (k.value = {
                    text: "Errore caricamento cliente",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: T }) {
                (a.value = t._data.data),
                  (a.value.stopservice = a.value.stopservice == 1),
                  (a.value.prioritario = a.value.prioritario == 1),
                  (x.value = a.value.paymenttype),
                  (b.value = a.value.province
                    ? {
                        code: a.value.province,
                        name:
                          K.find((I) => I.code === a.value.province)?.name ||
                          a.value.province,
                      }
                    : null);
              },
            },
          );
        } else a.value.state = "Italia";
      };
      return (
        oe(async () => {
          (w.value = !0), await F();
        }),
        (c, e) => (
          R(),
          J(
            Ve,
            {
              class: "modaldialog",
              onAfterLeave: N,
              modelValue: l(w),
              "onUpdate:modelValue":
                e[38] || (e[38] = (t) => (D(w) ? (w.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: n(() => [
                g("div", ke, [
                  B.idrec == 0
                    ? (R(), M("h2", Pe, "Nuovo cliente"))
                    : G("", !0),
                  B.idrec > 0
                    ? (R(), M("h2", Re, "Modifica cliente"))
                    : G("", !0),
                  o(
                    ce,
                    {
                      modelValue: l(C),
                      "onUpdate:modelValue":
                        e[36] || (e[36] = (t) => (D(C) ? (C.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[37] ||
                        (e[37] = d(
                          se(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: n(() => [
                        o(pe, null, {
                          default: n(() => [
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).codcli,
                                      "onUpdate:modelValue":
                                        e[1] ||
                                        (e[1] = (t) => (l(a).codcli = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Codice cliente",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    W,
                                    {
                                      class: re({ "new-client": l(S) }),
                                      autocomplete: "off",
                                      onKeydown:
                                        e[2] ||
                                        (e[2] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).name,
                                      "onUpdate:modelValue":
                                        e[3] || (e[3] = (t) => (l(a).name = t)),
                                      items: B.clientNames,
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": l(S)
                                        ? "mdi-check-circle"
                                        : void 0,
                                      density: "compact",
                                      label: "Ragione sociale*",
                                      clearable: "",
                                    },
                                    null,
                                    8,
                                    [
                                      "class",
                                      "modelValue",
                                      "items",
                                      "rules",
                                      "prepend-inner-icon",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[4] ||
                                        (e[4] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).piva,
                                      "onUpdate:modelValue":
                                        e[5] || (e[5] = (t) => (l(a).piva = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Partita iva",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[6] ||
                                        (e[6] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).cf,
                                      "onUpdate:modelValue":
                                        e[7] || (e[7] = (t) => (l(a).cf = t)),
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Codice Fiscale*",
                                      density: "compact",
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
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[8] ||
                                        (e[8] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).address,
                                      "onUpdate:modelValue":
                                        e[9] ||
                                        (e[9] = (t) => (l(a).address = t)),
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Indirizzo*",
                                      density: "compact",
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
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[10] ||
                                        (e[10] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).zip,
                                      "onUpdate:modelValue":
                                        e[11] ||
                                        (e[11] = (t) => (l(a).zip = t)),
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Cap*",
                                      density: "compact",
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
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[12] ||
                                        (e[12] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).city,
                                      "onUpdate:modelValue":
                                        e[13] ||
                                        (e[13] = (t) => (l(a).city = t)),
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Città*",
                                      density: "compact",
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
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    W,
                                    {
                                      autocomplete: "off",
                                      class: "mt-0",
                                      modelValue: l(b),
                                      "onUpdate:modelValue":
                                        e[14] ||
                                        (e[14] = (t) =>
                                          D(b) ? (b.value = t) : null),
                                      items: K,
                                      "item-title": "name",
                                      "item-value": "code",
                                      label: "Provincia",
                                      "persistent-hint": "",
                                      "return-object": "",
                                      variant: "outlined",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      density: "compact",
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
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[15] ||
                                        (e[15] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).state,
                                      "onUpdate:modelValue":
                                        e[16] ||
                                        (e[16] = (t) => (l(a).state = t)),
                                      required: "",
                                      rules: l(P),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Stato*",
                                      density: "compact",
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
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[17] ||
                                        (e[17] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).telephone,
                                      "onUpdate:modelValue":
                                        e[18] ||
                                        (e[18] = (t) => (l(a).telephone = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Telefono",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[19] ||
                                        (e[19] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).pec,
                                      "onUpdate:modelValue":
                                        e[20] ||
                                        (e[20] = (t) => (l(a).pec = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Pec",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[21] ||
                                        (e[21] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).companyemail,
                                      "onUpdate:modelValue":
                                        e[22] ||
                                        (e[22] = (t) =>
                                          (l(a).companyemail = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Email Aziendale",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[23] ||
                                        (e[23] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).invoiceemail,
                                      "onUpdate:modelValue":
                                        e[24] ||
                                        (e[24] = (t) =>
                                          (l(a).invoiceemail = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Email di fatturazione",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[25] ||
                                        (e[25] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).website,
                                      "onUpdate:modelValue":
                                        e[26] ||
                                        (e[26] = (t) => (l(a).website = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Sito web",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[27] ||
                                        (e[27] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).iban,
                                      "onUpdate:modelValue":
                                        e[28] ||
                                        (e[28] = (t) => (l(a).iban = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "IBAN",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    Y,
                                    {
                                      color: "red",
                                      baseColor: "green",
                                      modelValue: l(a).stopservice,
                                      "onUpdate:modelValue":
                                        e[29] ||
                                        (e[29] = (t) => (l(a).stopservice = t)),
                                      label: "Stopservice",
                                      "hide-details": "",
                                      inset: "",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "3", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    Y,
                                    {
                                      color: "green",
                                      baseColor: "red",
                                      modelValue: l(a).prioritario,
                                      "onUpdate:modelValue":
                                        e[30] ||
                                        (e[30] = (t) => (l(a).prioritario = t)),
                                      label: "Cliente prioritario",
                                      "hide-details": "",
                                      inset: "",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    fe,
                                    {
                                      autocomplete: "off",
                                      class: "mt-0",
                                      modelValue: l(x),
                                      "onUpdate:modelValue":
                                        e[31] ||
                                        (e[31] = (t) =>
                                          D(x) ? (x.value = t) : null),
                                      items: A,
                                      "item-title": "label",
                                      "item-value": "value",
                                      label: "Termini di pagamento",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    u,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[32] ||
                                        (e[32] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).contactperson,
                                      "onUpdate:modelValue":
                                        e[33] ||
                                        (e[33] = (t) =>
                                          (l(a).contactperson = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Persona di riferimento",
                                      density: "compact",
                                    },
                                    null,
                                    8,
                                    ["modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            o(
                              r,
                              { cols: "12", sm: "12", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    ve,
                                    {
                                      class: "mt-0",
                                      onKeydown:
                                        e[34] ||
                                        (e[34] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(a).notes,
                                      "onUpdate:modelValue":
                                        e[35] ||
                                        (e[35] = (t) => (l(a).notes = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Note",
                                      density: "compact",
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
                  e[41] || (e[41] = g("br", null, null, -1)),
                  g("div", xe, [
                    o(
                      q,
                      { class: "", onClick: N, color: "red" },
                      {
                        default: n(() => [
                          ...(e[39] || (e[39] = [V(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(ye),
                    o(
                      q,
                      { onClick: j, disabled: !l(C), color: "green" },
                      {
                        default: n(() => [
                          ...(e[40] || (e[40] = [V("Salva", -1)])),
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
  Se = { class: "pl-10 pr-10" },
  Ae = { class: "divcenterpage" },
  Ne = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Te = ["title"],
  ze = { key: 0 },
  Be = { key: 1 },
  Ue = { class: "mt-4" },
  it = {
    __name: "clients",
    setup(B) {
      const L = ae(),
        X = de(),
        { status: Z, signIn: Q, signOut: U, data: S } = ee(),
        w = m([]),
        C = m(""),
        k = te("snackbar"),
        A = m(!1),
        x = m(0),
        a = m(0),
        K = m(!0);
      m(!1);
      const b = m(!1),
        P = [
          { title: "Rag. Sociale", key: "name", sortable: !0, align: "left" },
          { title: "Piva", key: "piva", sortable: !0, align: "left" },
          { title: "Email", key: "email", sortable: !0, align: "left" },
          {
            title: "Portafoglio attivo",
            key: "portafoglio",
            sortable: !0,
            align: "left",
          },
          { title: "Prog. attivi", key: "attivi", sortable: !0, align: "left" },
          { title: "Prog. in coda", key: "coda", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        j = [
          { title: "Id", key: "id" },
          { title: "Codice", key: "codcli" },
          { title: "Rag. Sociale", key: "name" },
          { title: "Piva", key: "piva" },
          { title: "CF", key: "cf" },
          { title: "SDI", key: "sdi" },
          { title: "PEC", key: "pec" },
          { title: "Indirizzo", key: "address" },
          { title: "CAP", key: "zip" },
          { title: "Città", key: "city" },
          { title: "Provincia", key: "province" },
          { title: "Stato", key: "state" },
          { title: "Telefono", key: "telephone" },
          { title: "Email", key: "email" },
          { title: "Email Aziendale", key: "companyemail" },
          { title: "Email fatture", key: "invoiceemail" },
          { title: "Sito web", key: "website" },
          { title: "Codice IBAN", key: "iban" },
          { title: "Note interne", key: "notes" },
          { title: "Stop service", key: "stopservice" },
          { title: "Status", key: "status" },
          { title: "Contatto", key: "contactperson" },
          { title: "Prioritario", key: "prioritario" },
          { title: "Portafoglio attivo", key: "portafoglio" },
          { title: "Progetti attivi", key: "attivi" },
          { title: "Progetti in coda", key: "coda" },
        ],
        N = m([]);
      be({
        title: "Clienti",
        meta: [{ name: "description", content: "Clienti" }],
      });
      function F(E) {
        (a.value = parseInt(E)), (A.value = !0);
      }
      function c() {
        (A.value = !1), t();
      }
      function e(E) {
        const { data: i } = $(L.public.apiBaseurl + "client/delete/" + E, {
          onRequest({ request: p, options: f }) {},
          onRequestError({ request: p, options: f, error: s }) {
            console.log("Errore nella request:", s);
          },
          onResponseError({ request: p, response: f, options: s }) {
            k.value = {
              text: "Errore cancellazione utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: p, response: f, options: s }) {
            (k.value = {
              text: "Cliente eliminato",
              type: "success",
              show: !0,
            }),
              t();
          },
        });
      }
      const t = () => {
          w.value = [];
          const { data: E } = $(L.public.apiBaseurl + "client/list", {
            onRequest({ request: i, options: p }) {},
            onRequestError({ request: i, options: p, error: f }) {
              console.log("Errore nella request:", f);
            },
            onResponseError({ request: i, response: p, options: f }) {
              k.value = {
                text: "Errore caricamento clienti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: i, response: p, options: f }) {
              (w.value = p._data.data),
                (N.value = p._data.data.map((s) => s.name));
            },
          });
        },
        T = () => {
          x.value = S.value.id;
        };
      function I() {
        b.value = window.innerWidth <= 960;
      }
      function le() {
        const E = w.value.map((s) => {
            const v = {};
            return (
              j.forEach((y) => {
                y.title == "Stop service" || y.title == "Prioritario"
                  ? (v[y.title] = s[y.key] == "1" ? "Si" : "No")
                  : y.title == "Status"
                    ? (v[y.title] = s[y.key] == "A" ? "Attivo" : "Eliminato")
                    : (v[y.title] = s[y.key] ?? "");
              }),
              v
            );
          }),
          i = z.utils.json_to_sheet(E),
          p = z.utils.decode_range(i["!ref"]);
        i["!cols"] = [
          { wch: 10 },
          { wch: 15 },
          { wch: 60 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 30 },
          { wch: 40 },
          { wch: 10 },
          { wch: 30 },
          { wch: 10 },
          { wch: 20 },
          { wch: 25 },
          { wch: 35 },
          { wch: 35 },
          { wch: 35 },
          { wch: 40 },
          { wch: 30 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 30 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
        ];
        for (let s = p.s.c; s <= p.e.c; s++) {
          const v = z.utils.encode_cell({ r: 0, c: s });
          i[v] && (i[v].s = { font: { bold: !0 } });
        }
        const f = z.utils.book_new();
        z.utils.book_append_sheet(f, i, "Clienti"),
          z.writeFile(f, "export-clienti.xlsx");
      }
      return (
        oe(async () => {
          S.value.role != "A" && S.value.role != "S"
            ? X.push("/")
            : (I(), window.addEventListener("resize", I), T(), t());
        }),
        me(() => {
          window.removeEventListener("resize", I);
        }),
        (E, i) => {
          const p = ne,
            f = Ee;
          return (
            R(),
            M("div", Se, [
              g("div", Ae, [
                i[11] || (i[11] = g("br", null, null, -1)),
                i[12] ||
                  (i[12] = g(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Clienti",
                    -1,
                  )),
                g("div", Ne, [
                  o(
                    q,
                    { onClick: i[0] || (i[0] = (s) => F(0)), color: "green" },
                    {
                      default: n(() => [
                        o(O, null, {
                          default: n(() => [
                            ...(i[2] || (i[2] = [V("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        i[3] || (i[3] = V("Crea Cliente", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  i[6] || (i[6] = V()),
                  o(
                    q,
                    { class: "mr-3", color: "primary", onClick: le },
                    {
                      default: n(() => [
                        o(
                          O,
                          { class: "mr-3" },
                          {
                            default: n(() => [
                              ...(i[4] || (i[4] = [V("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        i[5] || (i[5] = V(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                i[13] ||
                  (i[13] = g("div", { style: { clear: "both" } }, null, -1)),
                o(
                  ge,
                  {
                    density: "compact",
                    items: l(w),
                    headers: P,
                    search: l(C),
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
                    top: n(() => [
                      o(
                        u,
                        {
                          modelValue: l(C),
                          "onUpdate:modelValue":
                            i[1] ||
                            (i[1] = (s) => (D(C) ? (C.value = s) : null)),
                          class: "pa-2",
                          density: "compact",
                          variant: "outlined",
                          label: "Cerca",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.name": n(({ item: s }) => [
                      g("span", { title: s.id }, H(s.name), 9, Te),
                      i[8] || (i[8] = V()),
                      s.prioritario == 1
                        ? (R(),
                          J(
                            O,
                            { key: 0, title: "Prioritario" },
                            {
                              default: n(() => [
                                ...(i[7] ||
                                  (i[7] = [V("mdi-police-badge-outline", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : G("", !0),
                    ]),
                    "item.portafoglio": n(({ item: s }) => [
                      s.portafoglio != null
                        ? (R(),
                          M(
                            "span",
                            ze,
                            H(
                              new Intl.NumberFormat("it-IT", {
                                style: "currency",
                                useGrouping: !0,
                                currency: "EUR",
                              }).format(s.portafoglio),
                            ),
                            1,
                          ))
                        : (R(),
                          M(
                            "span",
                            Be,
                            H(
                              new Intl.NumberFormat("it-IT", {
                                style: "currency",
                                useGrouping: !0,
                                currency: "EUR",
                              }).format(0),
                            ),
                            1,
                          )),
                    ]),
                    "item.actions": n(({ item: s }) => [
                      o(
                        we,
                        { "offset-y": "" },
                        {
                          activator: n(({ props: v }) => [
                            o(
                              q,
                              ue(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                v,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: n(() => [
                            g("div", Ue, [
                              o(
                                Ce,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: n(() => [
                                    o(
                                      h,
                                      {
                                        onClick: (v) => F(s.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: n(() => [
                                          o(
                                            O,
                                            { style: { opacity: "1" } },
                                            {
                                              default: n(() => [
                                                ...(i[9] ||
                                                  (i[9] = [
                                                    V("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: n(() => [
                                          o(
                                            _,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: n(() => [
                                                ...(i[10] ||
                                                  (i[10] = [
                                                    V("Modifica", -1),
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
                                    o(
                                      h,
                                      { dense: "", exact: "" },
                                      {
                                        default: n(() => [
                                          o(
                                            _,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: n(() => [
                                                o(
                                                  p,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (v) => e(s.id),
                                                    iconadelete: l(K),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare il cliente " +
                                                      s.name +
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
                                            1024,
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
                  ["items", "search"],
                ),
                l(A)
                  ? (R(),
                    J(
                      f,
                      {
                        key: 0,
                        dialoginsmod: l(A),
                        clientNames: l(N),
                        idrec: l(a),
                        onClose: c,
                      },
                      null,
                      8,
                      ["dialoginsmod", "clientNames", "idrec"],
                    ))
                  : G("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { it as default };
