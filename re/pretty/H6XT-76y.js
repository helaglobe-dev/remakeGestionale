import { _ as ne } from "./ClyIuovc.js";
import {
  E as _,
  k as se,
  r as m,
  G as ee,
  o as te,
  J as oe,
  y as U,
  C as n,
  z as V,
  x as j,
  K as H,
  B as o,
  N as d,
  O as ie,
  M,
  L as a,
  a3 as re,
  D as w,
  n as ae,
  u as de,
  e as me,
  P as ue,
  A as Q,
} from "./CYsiv7Qj.js";
import { $ as L } from "./BvG7V8Ak.js";
import { V as pe } from "./MIubIMrV.js";
import { V as ce, a as r } from "./Bj0ZT2dB.js";
import { V as p } from "./BrCrqdgZ.js";
import { V as W } from "./61Go5SWW.js";
import { V as fe } from "./DCAzZvgN.js";
import { V as ve } from "./CZzf1ihi.js";
import { V as ye } from "./B51noTYL.js";
import { V as D, a as Z } from "./B_W9U9Wp.js";
import { V as Ve } from "./BqujDEEl.js";
import { V as be } from "./Dlfzj7mx.js";
import { x as T } from "./D16A7lth.js";
import { u as ge } from "./LKQL6vAN.js";
import { V as we } from "./ss-1h9Hv.js";
import { V as Ce, a as ke, b as Y, c as h } from "./CxBYvc7u.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./Cv1q1CuH.js";
import "./fKsYyVgl.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Se = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Pe = { key: 0, class: "pb-10 pageh2" },
  Ae = { key: 1, class: "pb-10 pageh2" },
  Re = { style: { display: "flex" } },
  xe = {
    __name: "DialogInsModSupplier",
    props: { dialoginsmod: Boolean, idrec: Number, supplierNames: Array },
    emits: ["close"],
    setup(z, { emit: q }) {
      const { data: J } = _(),
        F = ae(),
        X = q,
        B = z,
        x = se(() => {
          const u = l.value.name?.trim();
          return u ? !B.supplierNames.includes(u) : !1;
        }),
        C = m(!1),
        b = m(!1),
        g = ee("snackbar"),
        E = [
          { code: "A", name: "Azienda" },
          { code: "P", name: "Professionista" },
          { code: "C", name: "Clinico" },
        ],
        A = m("A"),
        l = m({ id: 0 }),
        I = [
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
        v = m(null),
        k = m([(u) => !!u || "Campo obbligatorio"]);
      m([
        (u) => !!u || "E-mail obbligatoria",
        (u) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            u,
          ) || "Email non valida",
      ]);
      const K = async () => {
        (l.value.type = A.value),
          v.value
            ? (l.value.province =
                typeof v.value == "object" ? v.value.code : v.value)
            : (l.value.province = null),
          (l.value.stopservice = l.value.stopservice == !0 ? 1 : 0);
        let u = { Supplier: l.value };
        await L(F.public.apiBaseurl + "supplier/createedit", {
          method: "POST",
          body: u,
        })
          .then(() => {
            B.idrec == 0
              ? (g.value = {
                  text: "Creazione fornitore completata",
                  type: "success",
                  show: !0,
                })
              : (g.value = {
                  text: "Modifica fornitore completata",
                  type: "success",
                  show: !0,
                }),
              N();
          })
          .catch((e) => {
            let t = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (g.value = { text: t, type: "danger", show: !0 });
          });
      };
      function N() {
        X("close");
      }
      const O = async () => {
        if (B.idrec > 0) {
          const { data: u } = await L(
            F.public.apiBaseurl + "supplier/get/" + B.idrec,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: S }) {
                console.log("Errore nella request:", S),
                  (g.value = {
                    text: "Errore: " + S,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: S }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (g.value = {
                    text: "Errore caricamento fornitore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: S }) {
                (l.value = t._data.data),
                  (l.value.stopservice = l.value.stopservice == 1),
                  (A.value = l.value.type),
                  (v.value = l.value.province
                    ? {
                        code: l.value.province,
                        name:
                          I.find((G) => G.code === l.value.province)?.name ||
                          l.value.province,
                      }
                    : null);
              },
            },
          );
        } else l.value.state = "Italia";
      };
      return (
        te(async () => {
          (C.value = !0), await O();
        }),
        (u, e) => (
          U(),
          oe(
            be,
            {
              class: "modaldialog",
              onAfterLeave: N,
              modelValue: a(C),
              "onUpdate:modelValue":
                e[37] || (e[37] = (t) => (M(C) ? (C.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: n(() => [
                V("div", Se, [
                  z.idrec == 0
                    ? (U(), j("h2", Pe, "Nuovo fornitore"))
                    : H("", !0),
                  z.idrec > 0
                    ? (U(), j("h2", Ae, "Modifica fornitore"))
                    : H("", !0),
                  o(
                    pe,
                    {
                      modelValue: a(b),
                      "onUpdate:modelValue":
                        e[35] || (e[35] = (t) => (M(b) ? (b.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[36] ||
                        (e[36] = d(
                          ie(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: n(() => [
                        o(ce, null, {
                          default: n(() => [
                            o(
                              r,
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).codsup,
                                      "onUpdate:modelValue":
                                        e[1] ||
                                        (e[1] = (t) => (a(l).codsup = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Codice fornitore",
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
                                      class: re({ "new-supplier": a(x) }),
                                      autocomplete: "off",
                                      onKeydown:
                                        e[2] ||
                                        (e[2] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).name,
                                      "onUpdate:modelValue":
                                        e[3] || (e[3] = (t) => (a(l).name = t)),
                                      items: z.supplierNames,
                                      required: "",
                                      rules: a(k),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": a(x)
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
                                    fe,
                                    {
                                      autocomplete: "off",
                                      class: "mt-0",
                                      modelValue: a(A),
                                      "onUpdate:modelValue":
                                        e[4] ||
                                        (e[4] = (t) =>
                                          M(A) ? (A.value = t) : null),
                                      items: E,
                                      "item-title": "name",
                                      "item-value": "code",
                                      label: "Tipo di fornitore",
                                      "persistent-hint": "",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      variant: "outlined",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[5] ||
                                        (e[5] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).piva,
                                      "onUpdate:modelValue":
                                        e[6] || (e[6] = (t) => (a(l).piva = t)),
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[7] ||
                                        (e[7] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).cf,
                                      "onUpdate:modelValue":
                                        e[8] || (e[8] = (t) => (a(l).cf = t)),
                                      required: "",
                                      rules: a(k),
                                      variant: "outlined",
                                      density: "compact",
                                      "persistent-hint": "",
                                      label: "Codice Fiscale*",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[9] ||
                                        (e[9] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).address,
                                      "onUpdate:modelValue":
                                        e[10] ||
                                        (e[10] = (t) => (a(l).address = t)),
                                      required: "",
                                      rules: a(k),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Indirizzo*",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[11] ||
                                        (e[11] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).zip,
                                      "onUpdate:modelValue":
                                        e[12] ||
                                        (e[12] = (t) => (a(l).zip = t)),
                                      required: "",
                                      rules: a(k),
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[13] ||
                                        (e[13] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).city,
                                      "onUpdate:modelValue":
                                        e[14] ||
                                        (e[14] = (t) => (a(l).city = t)),
                                      required: "",
                                      rules: a(k),
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
                                      modelValue: a(v),
                                      "onUpdate:modelValue":
                                        e[15] ||
                                        (e[15] = (t) =>
                                          M(v) ? (v.value = t) : null),
                                      items: I,
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[16] ||
                                        (e[16] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).state,
                                      "onUpdate:modelValue":
                                        e[17] ||
                                        (e[17] = (t) => (a(l).state = t)),
                                      required: "",
                                      rules: a(k),
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[18] ||
                                        (e[18] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).telephone,
                                      "onUpdate:modelValue":
                                        e[19] ||
                                        (e[19] = (t) => (a(l).telephone = t)),
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[20] ||
                                        (e[20] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).pec,
                                      "onUpdate:modelValue":
                                        e[21] ||
                                        (e[21] = (t) => (a(l).pec = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Pec",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[22] ||
                                        (e[22] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).companyemail,
                                      "onUpdate:modelValue":
                                        e[23] ||
                                        (e[23] = (t) =>
                                          (a(l).companyemail = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Email Aziendale",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[24] ||
                                        (e[24] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).invoiceemail,
                                      "onUpdate:modelValue":
                                        e[25] ||
                                        (e[25] = (t) =>
                                          (a(l).invoiceemail = t)),
                                      type: "email",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Email di fatturazione",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[26] ||
                                        (e[26] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).website,
                                      "onUpdate:modelValue":
                                        e[27] ||
                                        (e[27] = (t) => (a(l).website = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Sito web",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[28] ||
                                        (e[28] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).iban,
                                      "onUpdate:modelValue":
                                        e[29] ||
                                        (e[29] = (t) => (a(l).iban = t)),
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
                              { cols: "12", sm: "6", class: "pt-0 pb-0" },
                              {
                                default: n(() => [
                                  o(
                                    ve,
                                    {
                                      color: "red",
                                      baseColor: "green",
                                      density: "compact",
                                      modelValue: a(l).stopservice,
                                      "onUpdate:modelValue":
                                        e[30] ||
                                        (e[30] = (t) => (a(l).stopservice = t)),
                                      label: "Stopservice",
                                      "hide-details": "",
                                      inset: "",
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
                                    p,
                                    {
                                      class: "mt-0",
                                      autocomplete: "off",
                                      onKeydown:
                                        e[31] ||
                                        (e[31] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).contactperson,
                                      "onUpdate:modelValue":
                                        e[32] ||
                                        (e[32] = (t) =>
                                          (a(l).contactperson = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Persona di riferimento",
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
                                    ye,
                                    {
                                      class: "mt-0",
                                      onKeydown:
                                        e[33] ||
                                        (e[33] = d(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: a(l).notes,
                                      "onUpdate:modelValue":
                                        e[34] ||
                                        (e[34] = (t) => (a(l).notes = t)),
                                      variant: "outlined",
                                      density: "compact",
                                      "persistent-hint": "",
                                      label: "Note",
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
                  e[40] || (e[40] = V("br", null, null, -1)),
                  V("div", Re, [
                    o(
                      D,
                      { class: "", onClick: N, color: "red" },
                      {
                        default: n(() => [
                          ...(e[38] || (e[38] = [w(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    o(Ve),
                    o(
                      D,
                      { onClick: K, disabled: !a(b), color: "green" },
                      {
                        default: n(() => [
                          ...(e[39] || (e[39] = [w("Salva", -1)])),
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
  Ee = { class: "pl-10 pr-10" },
  Te = { class: "divcenterpage" },
  ze = { style: { display: "inline", float: "right", "margin-right": "20px" } },
  Be = ["title"],
  Ne = ["title"],
  Me = { class: "mt-4" },
  st = {
    __name: "suppliers",
    setup(z) {
      const q = ae(),
        J = de(),
        { status: F, signIn: X, signOut: B, data: x } = _(),
        C = m([]),
        b = m(""),
        g = ee("snackbar"),
        E = m(!1),
        A = m(0),
        l = m(0),
        I = m(!0),
        v = m([]);
      m(!1);
      const k = m(!1),
        K = [
          { title: "Codice", key: "codsup", sortable: !0, align: "left" },
          { title: "Rag. Sociale", key: "name", sortable: !0, align: "left" },
          { title: "Tipo", key: "type", sortable: !0, align: "left" },
          { title: "Piva", key: "piva", sortable: !0, align: "left" },
          { title: "Email", key: "email", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        N = [
          { title: "Id", key: "id" },
          { title: "Codice", key: "codsup" },
          { title: "Rag. Sociale", key: "name" },
          { title: "Tipo", key: "type" },
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
        ],
        O = { A: "Azienda", P: "Professionista", C: "Clinico" };
      ge({
        title: "Fornitori",
        meta: [{ name: "description", content: "Fornitori" }],
      });
      function u(R) {
        (l.value = parseInt(R)), (E.value = !0);
      }
      function e() {
        (E.value = !1), S();
      }
      function t(R) {
        const { data: s } = L(q.public.apiBaseurl + "supplier/delete/" + R, {
          onRequest({ request: c, options: f }) {},
          onRequestError({ request: c, options: f, error: i }) {
            console.log("Errore nella request:", i);
          },
          onResponseError({ request: c, response: f, options: i }) {
            g.value = {
              text: "Errore cancellazione utente",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: c, response: f, options: i }) {
            (g.value = {
              text: "Fornitore eliminato",
              type: "success",
              show: !0,
            }),
              S();
          },
        });
      }
      const S = () => {
          const { data: R } = L(q.public.apiBaseurl + "supplier/list", {
            onRequest({ request: s, options: c }) {},
            onRequestError({ request: s, options: c, error: f }) {
              console.log("Errore nella request:", f);
            },
            onResponseError({ request: s, response: c, options: f }) {
              g.value = {
                text: "Errore caricamento fornitori",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: s, response: c, options: f }) {
              (C.value = c._data.data),
                (v.value = c._data.data.map((i) => i.name));
            },
          });
        },
        G = () => {
          A.value = x.value.id;
        };
      function $() {
        k.value = window.innerWidth <= 960;
      }
      function le() {
        const R = C.value.map((i) => {
            const y = {};
            return (
              N.forEach((P) => {
                P.title == "Stop service"
                  ? (y[P.title] = i[P.key] == "1" ? "Si" : "No")
                  : P.title == "Status"
                    ? (y[P.title] = i[P.key] == "A" ? "Attivo" : "Eliminato")
                    : (y[P.title] = i[P.key] ?? "");
              }),
              y
            );
          }),
          s = T.utils.json_to_sheet(R),
          c = T.utils.decode_range(s["!ref"]);
        s["!cols"] = [
          { wch: 10 },
          { wch: 25 },
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
        ];
        for (let i = c.s.c; i <= c.e.c; i++) {
          const y = T.utils.encode_cell({ r: 0, c: i });
          s[y] && (s[y].s = { font: { bold: !0 } });
        }
        const f = T.utils.book_new();
        T.utils.book_append_sheet(f, s, "Fornitori"),
          T.writeFile(f, "export-fornitori.xlsx");
      }
      return (
        te(async () => {
          x.value.role != "A" && x.value.role != "S"
            ? J.push("/")
            : ($(), window.addEventListener("resize", $), G(), S());
        }),
        me(() => {
          window.removeEventListener("resize", $);
        }),
        (R, s) => {
          const c = ne,
            f = xe;
          return (
            U(),
            j("div", Ee, [
              V("div", Te, [
                s[9] || (s[9] = V("br", null, null, -1)),
                s[10] ||
                  (s[10] = V(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Fornitori",
                    -1,
                  )),
                V("div", ze, [
                  o(
                    D,
                    { onClick: s[0] || (s[0] = (i) => u(0)), color: "green" },
                    {
                      default: n(() => [
                        o(Z, null, {
                          default: n(() => [
                            ...(s[2] || (s[2] = [w("mdi-plus", -1)])),
                          ]),
                          _: 1,
                        }),
                        s[3] || (s[3] = w("Crea Fornitore", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                  s[6] || (s[6] = w()),
                  o(
                    D,
                    { class: "mr-3", color: "primary", onClick: le },
                    {
                      default: n(() => [
                        o(
                          Z,
                          { class: "mr-3" },
                          {
                            default: n(() => [
                              ...(s[4] || (s[4] = [w("mdi-export", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        s[5] || (s[5] = w(" XLS", -1)),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                s[11] ||
                  (s[11] = V("div", { style: { clear: "both" } }, null, -1)),
                o(
                  we,
                  {
                    density: "compact",
                    items: a(C),
                    headers: K,
                    search: a(b),
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
                        p,
                        {
                          modelValue: a(b),
                          "onUpdate:modelValue":
                            s[1] ||
                            (s[1] = (i) => (M(b) ? (b.value = i) : null)),
                          class: "pa-2",
                          variant: "outlined",
                          label: "Cerca",
                          density: "compact",
                          autocomplete: "off",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ]),
                    "item.name": n(({ item: i }) => [
                      V("span", { title: i.id }, Q(i.name), 9, Be),
                    ]),
                    "item.type": n(({ item: i }) => [
                      V("span", { title: i.id }, Q(O[i.type]), 9, Ne),
                    ]),
                    "item.actions": n(({ item: i }) => [
                      o(
                        Ce,
                        { "offset-y": "" },
                        {
                          activator: n(({ props: y }) => [
                            o(
                              D,
                              ue(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                y,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: n(() => [
                            V("div", Me, [
                              o(
                                ke,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: n(() => [
                                    o(
                                      Y,
                                      {
                                        onClick: (y) => u(i.id),
                                        dense: "",
                                        exact: "",
                                      },
                                      {
                                        prepend: n(() => [
                                          o(
                                            Z,
                                            { style: { opacity: "1" } },
                                            {
                                              default: n(() => [
                                                ...(s[7] ||
                                                  (s[7] = [
                                                    w("mdi-pencil", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        default: n(() => [
                                          o(
                                            h,
                                            { style: { "font-size": "14px" } },
                                            {
                                              default: n(() => [
                                                ...(s[8] ||
                                                  (s[8] = [w("Modifica", -1)])),
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
                                      Y,
                                      { dense: "", exact: "" },
                                      {
                                        default: n(() => [
                                          o(
                                            h,
                                            {
                                              style: {
                                                "font-size": "14px",
                                                cursor: "pointer",
                                              },
                                            },
                                            {
                                              default: n(() => [
                                                o(
                                                  c,
                                                  {
                                                    button: "Elimina",
                                                    onDelete: (y) => t(i.id),
                                                    iconadelete: a(I),
                                                    color: "red",
                                                    text:
                                                      "Vuoi veramente eliminare il fornitore " +
                                                      i.name +
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
                a(E)
                  ? (U(),
                    oe(
                      f,
                      {
                        key: 0,
                        dialoginsmod: a(E),
                        idrec: a(l),
                        onClose: e,
                        supplierNames: a(v),
                      },
                      null,
                      8,
                      ["dialoginsmod", "idrec", "supplierNames"],
                    ))
                  : H("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { st as default };
