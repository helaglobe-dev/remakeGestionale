const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./PpFccnDH.js",
      "./92s3wAHG.js",
      "./customParseFormat.QMB5xCzE.css",
    ]),
) => i.map((i) => d[i]);
import {
  E as Qn,
  r as V,
  G as Zn,
  o as qn,
  J as le,
  y as U,
  C as m,
  z as I,
  B as g,
  x as me,
  K as Z,
  L as d,
  N as Ne,
  I as Gt,
  A as z,
  S as Vd,
  T as Md,
  Q as ga,
  R as hs,
  D as k,
  M as Ve,
  n as jo,
  U as ol,
  V as rl,
  W as al,
  P as Nt,
  X as Ld,
  k as wo,
  Y as Fd,
  Z as $d,
  _ as fi,
  $ as Ud,
  a0 as oa,
  u as yr,
  F as Er,
  a1 as Po,
  O as sl,
  a2 as pn,
  a3 as wn,
  a4 as mn,
  a5 as sr,
  a6 as Rn,
  a7 as mt,
  a8 as Vr,
  a9 as ys,
  aa as jd,
  ab as il,
  ac as Kn,
  ad as Bd,
  ae as ll,
  af as Gd,
  ag as Gn,
  ah as ul,
  ai as pi,
  aj as Hd,
  ak as zd,
  al as Xd,
  am as Kd,
  an as Wd,
  ao as ha,
  ap as Yd,
  aq as Jd,
  ar as Qd,
  as as mi,
  e as Zd,
} from "./CYsiv7Qj.js";
import { _ as dl } from "./ClyIuovc.js";
import { _ as qd } from "./B3TT-sRk.js";
import { $ as De } from "./BvG7V8Ak.js";
import { V as Ge, a as ae } from "./Bj0ZT2dB.js";
import { V as et, a as vi, b as _d, m as ec } from "./BrCrqdgZ.js";
import { V as Ze } from "./DCAzZvgN.js";
import { V as Do } from "./Da5kZyhM.js";
import { b as dn, V as tc, a as gi, c as yn } from "./CxBYvc7u.js";
import { V as co } from "./CZzf1ihi.js";
import { V as Dt } from "./Bx6RXzqb.js";
import { V as io } from "./B51noTYL.js";
import { V as nc } from "./61Go5SWW.js";
import { V as Oe, f as oc, a as Se, b as rc, c as Mr } from "./B_W9U9Wp.js";
import { V as en } from "./BqujDEEl.js";
import { V as tn } from "./Dlfzj7mx.js";
import { V as Wn } from "./ss-1h9Hv.js";
import { V as _t } from "./BSCDGDSX.js";
import { V as hi } from "./Bhgh0dC5.js";
import { b as rs, m as ac, c as sc, d as ic, V as Bt } from "./Cv1q1CuH.js";
import { V as En, a as An, c as bn, d as er } from "./sbneMOUU.js";
import { d as Hn, c as cl } from "./PpFccnDH.js";
import { V as Es } from "./MIubIMrV.js";
import { x as Ft } from "./D16A7lth.js";
import { g as ya } from "./92s3wAHG.js";
import { b as lc } from "./DGlBNczJ.js";
import "./B_hTT4u_.js";
import { u as uc } from "./LKQL6vAN.js";
import { V as dc } from "./DmlkVGYz.js";
import { V as cc } from "./hzFhMs-m.js";
import { V as fc, a as yi, b as Ei, c as bi } from "./BDyySH-u.js";
import { V as pc } from "./CBVsQd7J.js";
import { s as Si, a as mc, e as vc, b as Ti } from "./B5S3s6V6.js";
import { e as Ii } from "./DRW0ieNg.js";
import "./D3DeQzvF.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./CCBmAzgz.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
import "./DzPBUvYZ.js";
import "./QgNM3dor.js";
const gc = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  hc = { class: "d-flex align-center ga-2" },
  yc = { style: { display: "flex" } },
  Ec = {
    __name: "DialogViewProjectHistory",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      clients: Array,
      stati: Array,
      users: Array,
      history: Object,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: n } = Qn(),
        a = jo(),
        r = t,
        s = e;
      V([]);
      const o = V([
          { name: "Normale", code: "N" },
          { name: "Amministrativo", code: "A" },
          { name: "Ferie/Permessi/Malattia", code: "F" },
        ]),
        u = V([]),
        l = V(!1),
        i = Zn("snackbar"),
        c = V(null);
      V([(E) => !!E || "Campo obbligatorio"]);
      function p() {
        r("close");
      }
      const y = async () => {
        u.value = [];
        const { data: E } = await De(
          a.public.apiBaseurl + "projectcolor/list",
          {
            onRequest({ request: v, options: h }) {},
            onRequestError({ request: v, options: h, error: b }) {
              console.log("Errore nella request:", b);
            },
            onResponseError({ request: v, response: h, options: b }) {
              i.value = {
                text: "Errore caricamento colori",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: v, response: h, options: b }) {
              h._data.data.forEach((S) => {
                let T = S.Projectcolor;
                u.value.push({ name: T.id, value: T.color });
              });
            },
          },
        );
      };
      return (
        qn(async () => {
          (l.value = !0),
            (c.value = s.history.Project),
            (c.value.openstatus = c.value.openstatus == "A"),
            (c.value.type = c.value.type ? c.value.type : "N"),
            await y();
        }),
        (E, v) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: p,
              modelValue: d(l),
              "onUpdate:modelValue":
                v[32] || (v[32] = (h) => (Ve(l) ? (l.value = h) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", gc, [
                  v[34] ||
                    (v[34] = I(
                      "h2",
                      { class: "pb-10 pageh2" },
                      "Dettagli progetto Storico",
                      -1,
                    )),
                  g(Ge, null, {
                    default: m(() => [
                      g(
                        ae,
                        { cols: "12", sm: "4" },
                        {
                          default: m(() => [
                            g(
                              et,
                              {
                                class: "",
                                onKeydown:
                                  v[0] ||
                                  (v[0] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).code,
                                "onUpdate:modelValue":
                                  v[1] || (v[1] = (h) => (d(c).code = h)),
                                required: "",
                                variant: "outlined",
                                "persistent-hint": "",
                                density: "compact",
                                label: "Codice progetto*",
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
                      g(
                        ae,
                        { cols: "12", sm: "4" },
                        {
                          default: m(() => [
                            g(
                              et,
                              {
                                class: "",
                                onKeydown:
                                  v[2] ||
                                  (v[2] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).name,
                                "onUpdate:modelValue":
                                  v[3] || (v[3] = (h) => (d(c).name = h)),
                                required: "",
                                variant: "outlined",
                                "persistent-hint": "",
                                label: "Nome progetto*",
                                density: "compact",
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
                      g(
                        ae,
                        { cols: "12", sm: "4" },
                        {
                          default: m(() => [
                            g(
                              et,
                              {
                                class: "",
                                onKeydown:
                                  v[4] ||
                                  (v[4] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).contractname,
                                "onUpdate:modelValue":
                                  v[5] ||
                                  (v[5] = (h) => (d(c).contractname = h)),
                                required: "",
                                autocomplete: "off",
                                variant: "outlined",
                                "persistent-hint": "",
                                label: "Nome da contratto",
                                density: "compact",
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
                      g(
                        ae,
                        { cols: "12", sm: "6" },
                        {
                          default: m(() => [
                            g(
                              et,
                              {
                                class: "",
                                onKeydown:
                                  v[6] ||
                                  (v[6] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).description,
                                "onUpdate:modelValue":
                                  v[7] ||
                                  (v[7] = (h) => (d(c).description = h)),
                                variant: "outlined",
                                "persistent-hint": "",
                                density: "compact",
                                readonly: "",
                                label: "Descrizione progetto",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", sm: "6" },
                        {
                          default: m(() => [
                            g(
                              et,
                              {
                                class: "",
                                onKeydown:
                                  v[8] ||
                                  (v[8] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).referent,
                                "onUpdate:modelValue":
                                  v[9] || (v[9] = (h) => (d(c).referent = h)),
                                variant: "outlined",
                                "persistent-hint": "",
                                density: "compact",
                                readonly: "",
                                label: "Referente progetto",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", md: "3" },
                        {
                          default: m(() => [
                            g(
                              Ze,
                              {
                                autocomplete: "off",
                                class: "",
                                modelValue: d(c).client_id,
                                "onUpdate:modelValue":
                                  v[10] ||
                                  (v[10] = (h) => (d(c).client_id = h)),
                                items: s.clients,
                                "item-title": "name",
                                "item-value": "id",
                                required: "",
                                "no-data-text": "Nessun risultato trovato",
                                label: "Cliente*",
                                "persistent-hint": "",
                                "return-object": "",
                                density: "compact",
                                readonly: "",
                                variant: "outlined",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", md: "3" },
                        {
                          default: m(() => [
                            g(
                              Ze,
                              {
                                autocomplete: "off",
                                class: "",
                                modelValue: d(c).owners,
                                "onUpdate:modelValue":
                                  v[11] || (v[11] = (h) => (d(c).owners = h)),
                                multiple: "",
                                items: s.users,
                                "item-title": "name",
                                "item-value": "id",
                                required: "",
                                "no-data-text": "Nessun risultato trovato",
                                density: "compact",
                                label: "Responsabile di progetto",
                                readonly: "",
                                variant: "outlined",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", sm: "3" },
                        {
                          default: m(() => [
                            g(
                              Do,
                              {
                                variant: "outlined",
                                onKeydown:
                                  v[12] ||
                                  (v[12] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).startdate,
                                "onUpdate:modelValue":
                                  v[13] ||
                                  (v[13] = (h) => (d(c).startdate = h)),
                                required: "",
                                "input-format": "dd/MM/YYYY",
                                "persistent-hint": "",
                                density: "compact",
                                readonly: "",
                                label: "Inizio*",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", sm: "3" },
                        {
                          default: m(() => [
                            g(
                              Do,
                              {
                                variant: "outlined",
                                onKeydown:
                                  v[14] ||
                                  (v[14] = Ne(
                                    (h) => h.preventDefault(),
                                    ["enter"],
                                  )),
                                modelValue: d(c).enddate,
                                "onUpdate:modelValue":
                                  v[15] || (v[15] = (h) => (d(c).enddate = h)),
                                required: "",
                                readonly: "",
                                density: "compact",
                                "persistent-hint": "",
                                label: "Fine*",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", md: "2" },
                        {
                          default: m(() => [
                            g(
                              Ze,
                              {
                                autocomplete: "off",
                                modelValue: d(c).projectcolor_id,
                                "onUpdate:modelValue":
                                  v[16] ||
                                  (v[16] = (h) => (d(c).projectcolor_id = h)),
                                items: d(u),
                                "item-title": "value",
                                "item-value": "name",
                                label: "Colore",
                                variant: "outlined",
                                readonly: "",
                                "no-data-text": "Nessun risultato trovato",
                                density: "compact",
                              },
                              {
                                item: m(({ props: h, item: b }) => [
                                  g(
                                    dn,
                                    Vd(Md(h)),
                                    {
                                      prepend: m(() => [
                                        I(
                                          "div",
                                          {
                                            class: "color-box",
                                            style: Gt({
                                              backgroundColor: b.raw.value,
                                            }),
                                          },
                                          null,
                                          4,
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1040,
                                  ),
                                ]),
                                selection: m(({ item: h }) => [
                                  I("div", hc, [
                                    I(
                                      "div",
                                      {
                                        class: "color-box",
                                        style: Gt({
                                          backgroundColor: h.raw.value,
                                        }),
                                      },
                                      null,
                                      4,
                                    ),
                                    I("span", null, z(h.raw.value), 1),
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", md: "2" },
                        {
                          default: m(() => [
                            g(
                              Ze,
                              {
                                autocomplete: "off",
                                class: "",
                                modelValue: d(c).status,
                                "onUpdate:modelValue":
                                  v[17] || (v[17] = (h) => (d(c).status = h)),
                                items: s.stati,
                                "item-title": "name",
                                "item-value": "code",
                                required: "",
                                "no-data-text": "Nessun risultato trovato",
                                label: "Stato*",
                                "persistent-hint": "",
                                readonly: "",
                                density: "compact",
                                variant: "outlined",
                              },
                              null,
                              8,
                              ["modelValue", "items"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      d(c).status == "A"
                        ? (U(),
                          le(
                            ae,
                            { key: 0, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Do,
                                  {
                                    variant: "outlined",
                                    onKeydown:
                                      v[18] ||
                                      (v[18] = Ne(
                                        (h) => h.preventDefault(),
                                        ["enter"],
                                      )),
                                    modelValue: d(c).signaturedate,
                                    "onUpdate:modelValue":
                                      v[19] ||
                                      (v[19] = (h) => (d(c).signaturedate = h)),
                                    "input-format": "dd/MM/YYYY",
                                    required: "",
                                    readonly: "",
                                    density: "compact",
                                    "persistent-hint": "",
                                    label: "Data Firma Contratto",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                      g(
                        ae,
                        { cols: "12", md: "2" },
                        {
                          default: m(() => [
                            g(
                              co,
                              {
                                color: "green",
                                baseColor: "red",
                                readonly: "",
                                modelValue: d(c).internalproject,
                                "onUpdate:modelValue":
                                  v[20] ||
                                  (v[20] = (h) => (d(c).internalproject = h)),
                                label:
                                  "Interno :" +
                                  (d(c).internalproject == !0 ? "SI" : "NO"),
                                "hide-details": "",
                                inset: "",
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
                      g(
                        ae,
                        {
                          cols: "12",
                          md:
                            d(c)?.status != "A" && d(c)?.status != "C" ? 2 : 4,
                        },
                        {
                          default: m(() => [
                            g(
                              co,
                              {
                                color: "green",
                                baseColor: "red",
                                modelValue: d(c).openstatus,
                                "onUpdate:modelValue":
                                  v[21] ||
                                  (v[21] = (h) => (d(c).openstatus = h)),
                                label:
                                  "Aperto :" +
                                  (d(c).openstatus == !0 ? "SI" : "NO"),
                                "hide-details": "",
                                density: "compact",
                                inset: "",
                                readonly: "",
                              },
                              null,
                              8,
                              ["modelValue", "label"],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["md"],
                      ),
                      d(c)?.status != "A" && d(c)?.status != "C"
                        ? (U(),
                          le(
                            ae,
                            { key: 1, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Dt,
                                  {
                                    density: "compact",
                                    modelValue: d(c).successpercent,
                                    "onUpdate:modelValue":
                                      v[22] ||
                                      (v[22] = (h) =>
                                        (d(c).successpercent = h)),
                                    required: "",
                                    variant: "outlined",
                                    min: 0,
                                    readonly: "",
                                    "persistent-hint": "",
                                    label: "Percentuale di successo",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                    ]),
                    _: 1,
                  }),
                  g(Ge, null, {
                    default: m(() => [
                      g(
                        ae,
                        { cols: "12", md: "3" },
                        {
                          default: m(() => [
                            g(
                              Ze,
                              {
                                autocomplete: "off",
                                class: "",
                                modelValue: d(c).type,
                                "onUpdate:modelValue":
                                  v[23] || (v[23] = (h) => (d(c).type = h)),
                                items: d(o),
                                "item-title": "name",
                                "item-value": "code",
                                required: "",
                                label: "Tipo progetto",
                                "persistent-hint": "",
                                readonly: "",
                                density: "compact",
                                variant: "outlined",
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
                      d(c).status == "I"
                        ? (U(),
                          le(
                            ae,
                            { key: 0, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Dt,
                                  {
                                    density: "compact",
                                    modelValue: d(c).splitpercent,
                                    "onUpdate:modelValue":
                                      v[24] ||
                                      (v[24] = (h) => (d(c).splitpercent = h)),
                                    required: "",
                                    variant: "outlined",
                                    min: 0,
                                    max: 100,
                                    autocomplete: "off",
                                    "persistent-hint": "",
                                    readonly: "",
                                    label: "Percentuale di split",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                      d(c).status == "I"
                        ? (U(),
                          le(
                            ae,
                            { key: 1, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Dt,
                                  {
                                    density: "compact",
                                    modelValue: d(c).splityear,
                                    "onUpdate:modelValue":
                                      v[25] ||
                                      (v[25] = (h) => (d(c).splityear = h)),
                                    required: "",
                                    variant: "outlined",
                                    autocomplete: "off",
                                    "persistent-hint": "",
                                    readonly: "",
                                    label: "Anno",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                      d(c).status == "I"
                        ? (U(),
                          le(
                            ae,
                            { key: 2, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Dt,
                                  {
                                    density: "compact",
                                    modelValue: d(c).splitpercent1,
                                    "onUpdate:modelValue":
                                      v[26] ||
                                      (v[26] = (h) => (d(c).splitpercent1 = h)),
                                    required: "",
                                    variant: "outlined",
                                    min: 0,
                                    max: 100,
                                    autocomplete: "off",
                                    "persistent-hint": "",
                                    readonly: "",
                                    label: "Percentuale di split",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                      d(c).status == "I"
                        ? (U(),
                          le(
                            ae,
                            { key: 3, cols: "12", md: "2" },
                            {
                              default: m(() => [
                                g(
                                  Dt,
                                  {
                                    density: "compact",
                                    modelValue: d(c).splityear1,
                                    "onUpdate:modelValue":
                                      v[27] ||
                                      (v[27] = (h) => (d(c).splityear1 = h)),
                                    required: "",
                                    variant: "outlined",
                                    autocomplete: "off",
                                    "persistent-hint": "",
                                    readonly: "",
                                    label: "Anno successivo",
                                  },
                                  null,
                                  8,
                                  ["modelValue"],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : Z("", !0),
                      g(
                        ae,
                        { cols: "12", sm: "12" },
                        {
                          default: m(() => [
                            g(
                              io,
                              {
                                class: "",
                                readonly: "",
                                modelValue: d(c).noteaddendum,
                                "onUpdate:modelValue":
                                  v[28] ||
                                  (v[28] = (h) => (d(c).noteaddendum = h)),
                                variant: "outlined",
                                "persistent-hint": "",
                                density: "compact",
                                label:
                                  "Note (addendum, info aggiuntive, ecc..) Visibili ne frontespizio progetto",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      g(
                        ae,
                        { cols: "12", sm: "12" },
                        {
                          default: m(() => [
                            g(
                              io,
                              {
                                class: "",
                                readonly: "",
                                modelValue: d(c).note,
                                "onUpdate:modelValue":
                                  v[29] || (v[29] = (h) => (d(c).note = h)),
                                variant: "outlined",
                                "persistent-hint": "",
                                density: "compact",
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
                  v[35] || (v[35] = I("h5", null, "Sponsors", -1)),
                  (U(!0),
                  me(
                    ga,
                    null,
                    hs(
                      d(c).sponsors,
                      (h, b) => (
                        U(),
                        le(
                          Ge,
                          { key: b, class: "mt-0" },
                          {
                            default: m(() => [
                              g(
                                ae,
                                { cols: "12", sm: "3" },
                                {
                                  default: m(() => [
                                    g(
                                      nc,
                                      {
                                        class: "",
                                        modelValue: h.Sponsor.client_id,
                                        "onUpdate:modelValue": (S) =>
                                          (h.Sponsor.client_id = S),
                                        items: s.clients,
                                        "item-title": "name",
                                        readonly: "",
                                        "item-value": "id",
                                        required: "",
                                        autocomplete: "off",
                                        label: "Sponsor",
                                        "persistent-hint": "",
                                        density: "compact",
                                        variant: "outlined",
                                        "return-object": !1,
                                      },
                                      null,
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
                              g(
                                ae,
                                { cols: "12", sm: "3" },
                                {
                                  default: m(() => [
                                    g(
                                      Do,
                                      {
                                        variant: "outlined",
                                        onKeydown:
                                          v[30] ||
                                          (v[30] = Ne(
                                            (S) => S.preventDefault(),
                                            ["enter"],
                                          )),
                                        modelValue: h.Sponsor.contractdate,
                                        "onUpdate:modelValue": (S) =>
                                          (h.Sponsor.contractdate = S),
                                        required: "",
                                        autocomplete: "off",
                                        "input-format": "dd/MM/YYYY",
                                        density: "compact",
                                        "persistent-hint": "",
                                        readonly: "",
                                        label: "Data Firma Contratto",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "onUpdate:modelValue"],
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                              g(
                                ae,
                                { cols: "12", sm: "6" },
                                {
                                  default: m(() => [
                                    g(
                                      io,
                                      {
                                        rows: "2",
                                        onKeydown:
                                          v[31] ||
                                          (v[31] = Ne(
                                            (S) => S.preventDefault(),
                                            ["enter"],
                                          )),
                                        modelValue: h.Sponsor.note,
                                        "onUpdate:modelValue": (S) =>
                                          (h.Sponsor.note = S),
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "persistent-hint": "",
                                        label:
                                          "Note (contratto, info aggiuntive, ecc..)",
                                        readonly: "",
                                        density: "compact",
                                      },
                                      null,
                                      8,
                                      ["modelValue", "onUpdate:modelValue"],
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
                        )
                      ),
                    ),
                    128,
                  )),
                  v[36] || (v[36] = I("br", null, null, -1)),
                  I("div", yc, [
                    g(
                      Oe,
                      { class: "", onClick: p, color: "red" },
                      {
                        default: m(() => [
                          ...(v[33] || (v[33] = [k(" Chiudi ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
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
  bc = rl(
    { ...ac({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) },
    "VRadio",
  ),
  tr = ol()({
    name: "VRadio",
    props: bc(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        al(() => {
          const a = rs.filterProps(e);
          return g(
            rs,
            Nt(a, {
              class: ["v-radio", e.class],
              style: e.style,
              type: "radio",
            }),
            n,
          );
        }),
        {}
      );
    },
  }),
  Sc = rl(
    {
      height: { type: [Number, String], default: "auto" },
      ...ec(),
      ...Ud(ic(), ["multiple"]),
      trueIcon: { type: fi, default: "$radioOn" },
      falseIcon: { type: fi, default: "$radioOff" },
      type: { type: String, default: "radio" },
    },
    "VRadioGroup",
  ),
  as = ol()({
    name: "VRadioGroup",
    inheritAttrs: !1,
    props: Sc(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
      let { attrs: n, slots: a } = t;
      const r = Ld(),
        s = wo(() => e.id || `radio-group-${r}`),
        o = Fd(e, "modelValue"),
        u = V();
      return (
        al(() => {
          const [l, i] = $d(n),
            c = vi.filterProps(e),
            p = rs.filterProps(e),
            y = a.label
              ? a.label({ label: e.label, props: { for: s.value } })
              : e.label;
          return g(
            vi,
            Nt(
              { ref: u, class: ["v-radio-group", e.class], style: e.style },
              l,
              c,
              {
                modelValue: o.value,
                "onUpdate:modelValue": (E) => (o.value = E),
                id: s.value,
              },
            ),
            {
              ...a,
              default: (E) => {
                let { id: v, messagesId: h, isDisabled: b, isReadonly: S } = E;
                return I(ga, null, [
                  y && g(_d, { id: v.value }, { default: () => [y] }),
                  g(
                    sc,
                    Nt(
                      p,
                      {
                        id: v.value,
                        "aria-describedby": h.value,
                        defaultsTarget: "VRadio",
                        trueIcon: e.trueIcon,
                        falseIcon: e.falseIcon,
                        type: e.type,
                        disabled: b.value,
                        readonly: S.value,
                        "aria-labelledby": y ? v.value : void 0,
                        multiple: !1,
                      },
                      i,
                      {
                        modelValue: o.value,
                        "onUpdate:modelValue": (T) => (o.value = T),
                      },
                    ),
                    a,
                  ),
                ]);
              },
            },
          );
        }),
        oc({}, u)
      );
    },
  }),
  Tc = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Ic = { key: 0 },
  Cc = { title: "Valore con i profili professionali assegnati attuali" },
  Oc = { key: 0 },
  xc = { key: 1 },
  Nc = { key: 0 },
  wc = { title: "Valore con i profili professionali assegnati attuali" },
  Dc = { key: 0 },
  Ac = { key: 1 },
  Pc = { key: 0 },
  Rc = { key: 1 },
  kc = { key: 0 },
  Vc = { key: 1 },
  Mc = { style: { display: "flex" } },
  Lc = {
    __name: "DialogInsModValueProject",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      clients: Array,
      clone: Number,
      stati: Array,
      users: Array,
      statoprogetto: String,
      caneditproject: Boolean,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: n } = Qn(),
        a = jo(),
        r = t,
        s = e,
        o = [
          1075, 1080, 1081, 1082, 1086, 1087, 1089, 1090, 1095, 1096, 1098,
          1101, 1106, 1107, 1110, 1111, 1113, 1114, 1190, 1196, 1236, 1239,
          1242, 1270, 1273, 1274, 1374, 1387,
        ],
        u = V(!1),
        l = Zn("snackbar"),
        i = V({ id: 0, openstatus: !0 }),
        c = V([]),
        p = V([]),
        y = [
          {
            title: "Prezzo",
            key: "totaleproposta",
            sortable: !0,
            align: "left",
          },
          {
            title: "Incremento",
            key: "incrementoproposta",
            sortable: !0,
            align: "left",
          },
          {
            title: "Sconto",
            key: "scontoproposta",
            sortable: !0,
            align: "left",
          },
          { title: "Costo", key: "costoproposta", sortable: !0, align: "left" },
          {
            title: "Costo Eff.",
            key: "costopropostareal",
            sortable: !0,
            align: "left",
          },
          {
            title: "Totale Prev",
            key: "_totaleprogetto",
            sortable: !0,
            align: "left",
          },
          {
            title: "Marg. Stimato",
            key: "_margineprogetto",
            sortable: !0,
            align: "left",
          },
          {
            title: "Marg. Attuale",
            key: "_margineprogettoreal",
            sortable: !0,
            align: "left",
          },
        ],
        E = V(!1);
      V(null);
      const v = V([]),
        h = V(null),
        b = V(null),
        S = V(""),
        T = V(""),
        $ = V(""),
        C = V(""),
        N = (G) => {
          (h.value = G.id),
            (S.value = G.incrementoproposta),
            (C.value = G.noteincremento);
        },
        D = (G) => {
          (b.value = G.id),
            (T.value = G.scontoproposta),
            ($.value = G.notesconto);
        },
        H = async (G) => {
          let A = {
            id: G.type == "Progetto" ? G.id.slice(1) : G.id,
            value: p.value[G.id],
            field: "tiposcontoproposta",
          };
          G.type == "Progetto"
            ? await De(a.public.apiBaseurl + "project/salvaCampo", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                })
            : await De(a.public.apiBaseurl + "changerequest/saveField", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                });
        };
      function j(G) {
        if (G.key === ".") {
          G.preventDefault();
          const A = G.target,
            w = A.selectionStart,
            se = A.selectionEnd,
            ke = A.value;
          (A.value = ke.substring(0, w) + "," + ke.substring(se)),
            A.setSelectionRange(w + 1, w + 1),
            A.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      const O = async (G) => {
          let A = {
            id: i.value.id,
            value: i.value.newtotaleproposta,
            field: "newtotaleproposta",
          };
          await De(a.public.apiBaseurl + "project/salvaCampo", {
            method: "POST",
            body: A,
          })
            .then(() => {
              (l.value = {
                text: "Salvataggio completato",
                type: "success",
                show: !0,
              }),
                ue();
            })
            .catch((w) => {
              let se = JSON.parse(w.data).errors.title;
              console.log("catcherr", w.data),
                (l.value = { text: se, type: "danger", show: !0 });
            });
        },
        Y = async (G) => {
          (G.incrementoproposta = S.value), (h.value = null);
          let A = {
            id: G.type == "Progetto" ? G.id.slice(1) : G.id,
            value: S.value,
            field: "incrementoproposta",
            note: C.value,
          };
          G.type == "Progetto"
            ? await De(a.public.apiBaseurl + "project/salvaCampo", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                })
            : await De(a.public.apiBaseurl + "changerequest/saveField", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                });
        },
        te = async (G) => {
          (G.scontoproposta = T.value), (b.value = null);
          let A = {
            id: G.type == "Progetto" ? G.id.slice(1) : G.id,
            value: T.value,
            field: "scontoproposta",
            note: $.value,
          };
          G.type == "Progetto"
            ? await De(a.public.apiBaseurl + "project/salvaCampo", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                })
            : await De(a.public.apiBaseurl + "changerequest/saveField", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                });
        },
        ne = async (G) => {
          let A = {
            id: G.type == "Progetto" ? G.id.slice(1) : G.id,
            value: c.value[G.id],
            field: "tipoincrementoproposta",
          };
          G.type == "Progetto"
            ? await De(a.public.apiBaseurl + "project/salvaCampo", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                })
            : await De(a.public.apiBaseurl + "changerequest/saveField", {
                method: "POST",
                body: A,
              })
                .then(() => {
                  (l.value = {
                    text: "Salvataggio completato",
                    type: "success",
                    show: !0,
                  }),
                    ue();
                })
                .catch((w) => {
                  let se = JSON.parse(w.data).errors.title;
                  console.log("catcherr", w.data),
                    (l.value = { text: se, type: "danger", show: !0 });
                });
        };
      function K() {
        r("close");
      }
      const X = async () => {
          v.value = [];
          const { data: G } = await De(
            a.public.apiBaseurl + "project/get/" + s.idrec,
            {
              onRequest({ request: A, options: w }) {},
              onRequestError({ request: A, options: w, error: se }) {
                console.log("Errore nella request:", se),
                  (l.value = {
                    text: "Errore: " + se,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: A, response: w, options: se }) {
                console.log(
                  "Errore nella response: " + w._data.error.messages[0],
                ),
                  (l.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: A, response: w, options: se }) {
                (i.value = w._data.data),
                  console.log("Response ricevuta:", i.value),
                  s.clone == 1 && ((i.value.id = 0), (i.value.code = "")),
                  (i.value.openstatus = i.value.openstatus == "A"),
                  v.value.push({
                    id: "P" + i.value.id,
                    name: i.value.name,
                    status: i.value.status,
                    totaleproposta: i.value.totaleproposta,
                    totalepropostamodified: i.value.totalepropostamodified,
                    incrementoproposta: i.value.incrementoproposta,
                    tipoincrementoproposta: i.value.tipoincrementoproposta,
                    scontoproposta: i.value.scontoproposta,
                    tiposcontoproposta: i.value.tiposcontoproposta,
                    notesconto: i.value.notesconto,
                    noteincremento: i.value.noteincremento,
                    costoproposta: i.value.costoproposta,
                    costopropostamodified: i.value.costopropostamodified,
                    costopropostareal: i.value.costopropostareal,
                    type: "Progetto",
                    _totaleprogetto: i.value._totaleprogetto,
                    _margineprogetto: i.value._margineprogetto,
                    _margineprogettoreal: i.value._margineprogettoreal,
                  }),
                  (p.value["P" + i.value.id] = i.value.tiposcontoproposta),
                  (c.value["P" + i.value.id] = i.value.tipoincrementoproposta);
              },
            },
          );
        },
        ue = async () => {
          await X();
        };
      return (
        qn(async () => {
          (u.value = !0),
            await X(),
            setTimeout(() => {
              document.querySelectorAll(".apririghe").forEach((G) => G.click());
            });
        }),
        (G, A) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: K,
              modelValue: d(u),
              "onUpdate:modelValue":
                A[11] || (A[11] = (w) => (Ve(u) ? (u.value = w) : null)),
              width: "auto",
              style: { "max-width": "95%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", Tc, [
                  A[34] ||
                    (A[34] = I(
                      "h2",
                      { class: "pb-0 pageh2" },
                      "Valori Economici",
                      -1,
                    )),
                  A[35] || (A[35] = I("b", null, "Stato progetto:", -1)),
                  k(" " + z(s.statoprogetto) + " ", 1),
                  A[36] || (A[36] = I("br", null, null, -1)),
                  A[37] || (A[37] = I("br", null, null, -1)),
                  g(
                    Wn,
                    {
                      density: "compact",
                      items: d(v),
                      headers: y,
                      "items-per-page": -1,
                      "show-group-by": "false",
                      "no-data-text": "Nessun elemento disponibile",
                      "item-value": "name",
                      "hide-default-footer": "",
                    },
                    {
                      "item.costoproposta": m(({ item: w }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(w.costoproposta),
                          ) + " ",
                          1,
                        ),
                        w.costopropostamodified != w.costoproposta &&
                        w.costopropostamodified != null &&
                        w.costopropostamodified != null &&
                        w.costopropostamodified != "" &&
                        (d(i).status == "A" ||
                          d(i).status == "C" ||
                          o.includes(d(i).id))
                          ? (U(),
                            me("div", Ic, [
                              I(
                                "small",
                                Cc,
                                "(" +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      style: "currency",
                                      useGrouping: !0,
                                      currency: "EUR",
                                    }).format(w.costopropostamodified),
                                  ) +
                                  ")",
                                1,
                              ),
                            ]))
                          : Z("", !0),
                      ]),
                      "item.costopropostareal": m(({ item: w }) => [
                        w.costopropostareal != null &&
                        w.costopropostareal != null &&
                        w.costopropostareal != ""
                          ? (U(),
                            me(
                              "span",
                              Oc,
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(w.costopropostareal),
                              ),
                              1,
                            ))
                          : (U(),
                            me(
                              "span",
                              xc,
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(0),
                              ),
                              1,
                            )),
                      ]),
                      "item.totaleproposta": m(({ item: w }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(w.totaleproposta),
                          ) + " ",
                          1,
                        ),
                        w.totalepropostamodified != w.totaleproposta &&
                        w.totalepropostamodified != null &&
                        w.totalepropostamodified != null &&
                        w.totalepropostamodified != "" &&
                        (d(i).status == "A" ||
                          d(i).status == "C" ||
                          o.includes(d(i).id))
                          ? (U(),
                            me("div", Nc, [
                              I(
                                "small",
                                wc,
                                "(" +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      style: "currency",
                                      useGrouping: !0,
                                      currency: "EUR",
                                    }).format(w.totalepropostamodified),
                                  ) +
                                  ")",
                                1,
                              ),
                            ]))
                          : Z("", !0),
                      ]),
                      "item._totaleprogetto": m(({ item: w }) => [
                        I(
                          "b",
                          null,
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(w._totaleprogetto),
                          ),
                          1,
                        ),
                      ]),
                      "item._margineprogetto": m(({ item: w }) => [
                        I(
                          "span",
                          {
                            style: Gt(
                              w._margineprogetto <= 0 ? "color:red" : "",
                            ),
                          },
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(w._margineprogetto),
                          ),
                          5,
                        ),
                      ]),
                      "item._margineprogettoreal": m(({ item: w }) => [
                        I(
                          "span",
                          {
                            style: Gt(
                              w._margineprogettoreal <= 0 ? "color:red" : "",
                            ),
                          },
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(w._margineprogettoreal),
                          ),
                          5,
                        ),
                      ]),
                      "item.scontoproposta": m(({ item: w }) => [
                        d(b) !== w.id
                          ? (U(),
                            me("div", Dc, [
                              k(
                                z(
                                  new Intl.NumberFormat("it-IT", {
                                    useGrouping: !0,
                                  }).format(w.scontoproposta),
                                ) + " ",
                                1,
                              ),
                              G.$props.caneditproject &&
                              w.status != "A" &&
                              w.status != "C"
                                ? (U(),
                                  le(
                                    Se,
                                    {
                                      key: 0,
                                      size: "18",
                                      class: "ml-1",
                                      onClick: (se) => D(w),
                                      style: { cursor: "pointer" },
                                    },
                                    {
                                      default: m(() => [
                                        ...(A[12] ||
                                          (A[12] = [k("mdi-pencil", -1)])),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"],
                                  ))
                                : Z("", !0),
                              w.notesconto != "" &&
                              w.notesconto != null &&
                              w.notesconto != null
                                ? (U(),
                                  le(
                                    _t,
                                    { key: 1, interactive: "" },
                                    {
                                      activator: m(({ props: se }) => [
                                        g(
                                          hi,
                                          Nt(
                                            { icon: "mdi-information-outline" },
                                            se,
                                          ),
                                          null,
                                          16,
                                        ),
                                      ]),
                                      default: m(() => [
                                        I("div", null, z(w.notesconto), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ))
                                : Z("", !0),
                            ]))
                          : (U(),
                            me("div", Ac, [
                              g(
                                Dt,
                                {
                                  class: "mt-2",
                                  modelValue: d(T),
                                  "onUpdate:modelValue":
                                    A[0] ||
                                    (A[0] = (se) =>
                                      Ve(T) ? (T.value = se) : null),
                                  density: "compact",
                                  variant: "outlined",
                                  autofocus: "",
                                  label: "Valore",
                                  autocomplete: "off",
                                  "hide-details": "",
                                  "decimal-separator": ",",
                                  onKeydown: j,
                                  precision: 2,
                                },
                                null,
                                8,
                                ["modelValue"],
                              ),
                              g(
                                io,
                                {
                                  class: "mt-2",
                                  modelValue: d($),
                                  "onUpdate:modelValue":
                                    A[1] ||
                                    (A[1] = (se) =>
                                      Ve($) ? ($.value = se) : null),
                                  density: "compact",
                                  variant: "outlined",
                                  autofocus: "",
                                  label: "Note",
                                  autocomplete: "off",
                                  "hide-details": "",
                                },
                                null,
                                8,
                                ["modelValue"],
                              ),
                              g(
                                Oe,
                                {
                                  icon: "mdi-check",
                                  size: "small",
                                  variant: "text",
                                  color: "success",
                                  onClick: (se) => te(w),
                                },
                                null,
                                8,
                                ["onClick"],
                              ),
                              g(Oe, {
                                icon: "mdi-close",
                                size: "small",
                                variant: "text",
                                color: "error",
                                onClick:
                                  A[2] || (A[2] = (se) => (b.value = null)),
                              }),
                            ])),
                        g(
                          as,
                          {
                            modelValue: d(p)[w.id],
                            "onUpdate:modelValue": [
                              (se) => (d(p)[w.id] = se),
                              (se) => H(w),
                            ],
                            inline: "",
                            "hide-details": "",
                            disabled:
                              !G.$props.caneditproject ||
                              w.status == "A" ||
                              w.status == "C",
                            class: "valueproject",
                          },
                          {
                            default: m(() => [
                              g(
                                tr,
                                {
                                  value: "V",
                                  style: { "margin-right": "10px" },
                                },
                                {
                                  label: m(() => [
                                    g(
                                      Se,
                                      { title: "Valore" },
                                      {
                                        default: m(() => [
                                          ...(A[13] ||
                                            (A[13] = [
                                              k("mdi-currency-eur", -1),
                                            ])),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(
                                tr,
                                { value: "P" },
                                {
                                  label: m(() => [
                                    g(
                                      Se,
                                      { title: "Percentuale" },
                                      {
                                        default: m(() => [
                                          ...(A[14] ||
                                            (A[14] = [k("mdi-percent", -1)])),
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
                          ["modelValue", "onUpdate:modelValue", "disabled"],
                        ),
                      ]),
                      "item.incrementoproposta": m(({ item: w }) => [
                        d(h) !== w.id
                          ? (U(),
                            me("div", Pc, [
                              k(
                                z(
                                  new Intl.NumberFormat("it-IT", {
                                    useGrouping: !0,
                                  }).format(w.incrementoproposta),
                                ) + " ",
                                1,
                              ),
                              G.$props.caneditproject &&
                              w.status != "A" &&
                              w.status != "C"
                                ? (U(),
                                  le(
                                    Se,
                                    {
                                      key: 0,
                                      size: "18",
                                      class: "ml-1",
                                      onClick: (se) => N(w),
                                      style: { cursor: "pointer" },
                                    },
                                    {
                                      default: m(() => [
                                        ...(A[15] ||
                                          (A[15] = [k("mdi-pencil", -1)])),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"],
                                  ))
                                : Z("", !0),
                              w.noteincremento != "" &&
                              w.noteincremento != null &&
                              w.noteincremento != null
                                ? (U(),
                                  le(
                                    _t,
                                    { key: 1, interactive: "" },
                                    {
                                      activator: m(({ props: se }) => [
                                        g(
                                          hi,
                                          Nt(
                                            { icon: "mdi-information-outline" },
                                            se,
                                          ),
                                          null,
                                          16,
                                        ),
                                      ]),
                                      default: m(() => [
                                        I("div", null, z(w.noteincremento), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ))
                                : Z("", !0),
                            ]))
                          : (U(),
                            me("div", Rc, [
                              g(
                                Dt,
                                {
                                  class: "mt-2",
                                  modelValue: d(S),
                                  "onUpdate:modelValue":
                                    A[3] ||
                                    (A[3] = (se) =>
                                      Ve(S) ? (S.value = se) : null),
                                  density: "compact",
                                  variant: "outlined",
                                  autofocus: "",
                                  label: "Valore",
                                  "decimal-separator": ",",
                                  onKeydown: j,
                                  precision: 2,
                                  autocomplete: "off",
                                  "hide-details": "",
                                },
                                null,
                                8,
                                ["modelValue"],
                              ),
                              g(
                                io,
                                {
                                  class: "mt-2",
                                  modelValue: d(C),
                                  "onUpdate:modelValue":
                                    A[4] ||
                                    (A[4] = (se) =>
                                      Ve(C) ? (C.value = se) : null),
                                  density: "compact",
                                  variant: "outlined",
                                  autofocus: "",
                                  label: "Note",
                                  autocomplete: "off",
                                  "hide-details": "",
                                },
                                null,
                                8,
                                ["modelValue"],
                              ),
                              g(
                                Oe,
                                {
                                  icon: "mdi-check",
                                  size: "small",
                                  variant: "text",
                                  color: "success",
                                  onClick: (se) => Y(w),
                                },
                                null,
                                8,
                                ["onClick"],
                              ),
                              g(Oe, {
                                icon: "mdi-close",
                                size: "small",
                                variant: "text",
                                color: "error",
                                onClick:
                                  A[5] || (A[5] = (se) => (h.value = null)),
                              }),
                            ])),
                        g(
                          as,
                          {
                            modelValue: d(c)[w.id],
                            "onUpdate:modelValue": [
                              (se) => (d(c)[w.id] = se),
                              (se) => ne(w),
                            ],
                            inline: "",
                            "hide-details": "",
                            disabled:
                              !G.$props.caneditproject ||
                              w.status == "A" ||
                              w.status == "C",
                            class: "valueproject",
                          },
                          {
                            default: m(() => [
                              g(
                                tr,
                                {
                                  value: "V",
                                  style: { "margin-right": "10px" },
                                },
                                {
                                  label: m(() => [
                                    g(
                                      Se,
                                      { title: "Valore" },
                                      {
                                        default: m(() => [
                                          ...(A[16] ||
                                            (A[16] = [
                                              k("mdi-currency-eur", -1),
                                            ])),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(
                                tr,
                                { value: "P" },
                                {
                                  label: m(() => [
                                    g(
                                      Se,
                                      { title: "Percentuale" },
                                      {
                                        default: m(() => [
                                          ...(A[17] ||
                                            (A[17] = [k("mdi-percent", -1)])),
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
                          ["modelValue", "onUpdate:modelValue", "disabled"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["items"],
                  ),
                  d(i).status == "A" || d(i).status == "C" || d(i).status == "R"
                    ? (U(),
                      le(
                        Ge,
                        { key: 0, class: "mt-4" },
                        {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", md: "2", class: "pa-4" },
                              {
                                default: m(() => [
                                  g(
                                    Dt,
                                    {
                                      class: "mt-2",
                                      modelValue: d(i).newtotaleproposta,
                                      "onUpdate:modelValue":
                                        A[6] ||
                                        (A[6] = (w) =>
                                          (d(i).newtotaleproposta = w)),
                                      density: "compact",
                                      variant: "outlined",
                                      autofocus: "",
                                      label: "Nuovo valore proposta",
                                      autocomplete: "off",
                                      "hide-details": "",
                                      "decimal-separator": ",",
                                      onKeydown: j,
                                      precision: 2,
                                      readonly: !G.$props.caneditproject,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", md: "2", class: "pa-4" },
                              {
                                default: m(() => [
                                  G.$props.caneditproject
                                    ? (U(),
                                      le(
                                        Oe,
                                        {
                                          key: 0,
                                          class: "mt-2",
                                          color: "success",
                                          onClick: A[7] || (A[7] = (w) => O()),
                                        },
                                        {
                                          default: m(() => [
                                            ...(A[18] ||
                                              (A[18] = [k("Salva", -1)])),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : Z("", !0),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ))
                    : Z("", !0),
                  g(
                    Ge,
                    { class: "mt-4" },
                    {
                      default: m(() => [
                        g(
                          ae,
                          { cols: "12", md: "12", class: "pa-4" },
                          {
                            default: m(() => [
                              g(
                                Ge,
                                {
                                  style: {
                                    border: "2px solid #5daaff",
                                    "border-radius": "10px",
                                    "background-color": "#5daaff4a",
                                  },
                                },
                                {
                                  default: m(() => [
                                    g(
                                      ae,
                                      { cols: "12", md: "12" },
                                      {
                                        default: m(() => [
                                          g(Ge, null, {
                                            default: m(() => [
                                              g(
                                                ae,
                                                {
                                                  cols: "12",
                                                  md: "6",
                                                  style: {
                                                    "font-size": "25px",
                                                  },
                                                },
                                                {
                                                  default: m(() => [
                                                    A[23] ||
                                                      (A[23] = I(
                                                        "b",
                                                        null,
                                                        "Totale Accettato",
                                                        -1,
                                                      )),
                                                    k(
                                                      ": " +
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(i).status ==
                                                              "A" ||
                                                              d(i).status == "C"
                                                              ? d(i)
                                                                  ._totaleprogetto
                                                              : 0,
                                                          ),
                                                        ),
                                                      1,
                                                    ),
                                                    A[24] ||
                                                      (A[24] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    d(i).newtotaleproposta != 0
                                                      ? (U(),
                                                        me("span", kc, [
                                                          A[19] ||
                                                            (A[19] = I(
                                                              "b",
                                                              null,
                                                              "Nuovo Totale Accettato",
                                                              -1,
                                                            )),
                                                          k(
                                                            ": " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  d(i).status ==
                                                                    "A" ||
                                                                    d(i)
                                                                      .status ==
                                                                      "C"
                                                                    ? d(i)
                                                                        .newtotaleproposta
                                                                    : 0,
                                                                ),
                                                              ),
                                                            1,
                                                          ),
                                                          A[20] ||
                                                            (A[20] = I(
                                                              "br",
                                                              null,
                                                              null,
                                                              -1,
                                                            )),
                                                        ]))
                                                      : Z("", !0),
                                                    A[25] ||
                                                      (A[25] = I(
                                                        "b",
                                                        null,
                                                        "Totale Accettato senza incrementi e sconto",
                                                        -1,
                                                      )),
                                                    k(
                                                      ": " +
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(i).status ==
                                                              "A" ||
                                                              d(i).status == "C"
                                                              ? d(i)
                                                                  .totaleproposta
                                                              : 0,
                                                          ),
                                                        ),
                                                      1,
                                                    ),
                                                    A[26] ||
                                                      (A[26] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    d(i)
                                                      .totalepropostamodified !=
                                                    0
                                                      ? (U(),
                                                        me("span", Vc, [
                                                          A[21] ||
                                                            (A[21] = I(
                                                              "b",
                                                              null,
                                                              "Totale Attuale senza incrementi e sconto",
                                                              -1,
                                                            )),
                                                          k(
                                                            ": " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  d(i).status ==
                                                                    "A" ||
                                                                    d(i)
                                                                      .status ==
                                                                      "C"
                                                                    ? d(i)
                                                                        .totalepropostamodified
                                                                    : 0,
                                                                ),
                                                              ),
                                                            1,
                                                          ),
                                                          A[22] ||
                                                            (A[22] = I(
                                                              "br",
                                                              null,
                                                              null,
                                                              -1,
                                                            )),
                                                        ]))
                                                      : Z("", !0),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              g(
                                                ae,
                                                {
                                                  cols: "12",
                                                  md: "6",
                                                  style: {
                                                    "font-size": "25px",
                                                  },
                                                },
                                                {
                                                  default: m(() => [
                                                    A[27] ||
                                                      (A[27] = I(
                                                        "b",
                                                        null,
                                                        "Margine Stimato",
                                                        -1,
                                                      )),
                                                    A[28] ||
                                                      (A[28] = k(": ", -1)),
                                                    I(
                                                      "span",
                                                      {
                                                        style: Gt(
                                                          (d(i).status == "A" ||
                                                          d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogetto
                                                            : 0) <= 0
                                                            ? "font-weight: 600;color: red;"
                                                            : "",
                                                        ),
                                                      },
                                                      z(
                                                        new Intl.NumberFormat(
                                                          "it-IT",
                                                          {
                                                            style: "currency",
                                                            useGrouping: !0,
                                                            currency: "EUR",
                                                          },
                                                        ).format(
                                                          d(i).status == "A" ||
                                                            d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogetto
                                                            : 0,
                                                        ),
                                                      ),
                                                      5,
                                                    ),
                                                    A[29] ||
                                                      (A[29] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    A[30] ||
                                                      (A[30] = I(
                                                        "b",
                                                        null,
                                                        "Margine Attuale",
                                                        -1,
                                                      )),
                                                    A[31] ||
                                                      (A[31] = k(": ", -1)),
                                                    I(
                                                      "span",
                                                      {
                                                        style: Gt(
                                                          (d(i).status == "A" ||
                                                          d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogettoreal
                                                            : 0) <= 0
                                                            ? "font-weight: 600;color: red;"
                                                            : "",
                                                        ),
                                                      },
                                                      z(
                                                        new Intl.NumberFormat(
                                                          "it-IT",
                                                          {
                                                            style: "currency",
                                                            useGrouping: !0,
                                                            currency: "EUR",
                                                          },
                                                        ).format(
                                                          d(i).status == "A" ||
                                                            d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogettoreal
                                                            : 0,
                                                        ),
                                                      ),
                                                      5,
                                                    ),
                                                    A[32] ||
                                                      (A[32] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
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
                  A[38] || (A[38] = I("br", null, null, -1)),
                  I("div", Mc, [
                    g(
                      Oe,
                      { class: "", onClick: K, color: "red" },
                      {
                        default: m(() => [
                          ...(A[33] || (A[33] = [k(" Chiudi ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
                  ]),
                ]),
                g(
                  tn,
                  {
                    modelValue: d(E),
                    "onUpdate:modelValue":
                      A[10] || (A[10] = (w) => (Ve(E) ? (E.value = w) : null)),
                    "max-width": "600",
                  },
                  {
                    default: m(() => [
                      g(En, null, {
                        default: m(() => [
                          g(
                            An,
                            { class: "headline" },
                            {
                              default: m(() => [
                                ...(A[39] ||
                                  (A[39] = [k("Modifica Stato CR", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          g(bn, null, {
                            default: m(() => [
                              ...(A[40] ||
                                (A[40] = [
                                  k(" Confermi la modifica dello stato? ", -1),
                                ])),
                            ]),
                            _: 1,
                          }),
                          g(er, null, {
                            default: m(() => [
                              g(
                                Oe,
                                {
                                  color: "orange",
                                  class: "mb-4",
                                  onClick:
                                    A[8] || (A[8] = (w) => (E.value = !1)),
                                },
                                {
                                  default: m(() => [
                                    ...(A[41] ||
                                      (A[41] = [k(" Annulla ", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(en),
                              g(
                                Oe,
                                {
                                  color: "green",
                                  onClick:
                                    A[9] || (A[9] = (w) => G.saveStatus()),
                                },
                                {
                                  default: m(() => [
                                    ...(A[42] || (A[42] = [k("Conferma", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"],
                ),
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
  Fc = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  $c = { key: 0 },
  Uc = { title: "Valore con i profili professionali assegnati attuali" },
  jc = { key: 0 },
  Bc = { key: 1 },
  Gc = { key: 0 },
  Hc = { title: "Valore con i profili professionali assegnati attuali" },
  zc = { key: 0 },
  Xc = { key: 1 },
  Kc = { style: { display: "flex" } },
  Wc = {
    __name: "DialogInsModValueHProject",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      clients: Array,
      clone: Number,
      stati: Array,
      users: Array,
      statoprogetto: String,
      history: Object,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: n } = Qn(),
        a = t,
        r = e,
        s = V("V"),
        o = V("V"),
        u = [
          1075, 1080, 1081, 1082, 1086, 1087, 1089, 1090, 1095, 1096, 1098,
          1101, 1106, 1107, 1110, 1111, 1113, 1114, 1190, 1196, 1236, 1239,
          1242, 1270, 1273, 1274, 1374, 1387,
        ],
        l = V(!1);
      Zn("snackbar");
      const i = V({ id: 0, openstatus: !0 }),
        c = V([]),
        p = V([]),
        y = [
          {
            title: "Prezzo",
            key: "totaleproposta",
            sortable: !0,
            align: "left",
          },
          {
            title: "Incremento",
            key: "incrementoproposta",
            sortable: !0,
            align: "left",
          },
          {
            title: "Sconto",
            key: "scontoproposta",
            sortable: !0,
            align: "left",
          },
          { title: "Costo", key: "costoproposta", sortable: !0, align: "left" },
          {
            title: "Costo Effettivo",
            key: "costopropostareal",
            sortable: !0,
            align: "left",
          },
          {
            title: "Totale Preventivato",
            key: "_totaleprogetto",
            sortable: !0,
            align: "left",
          },
          {
            title: "Margine Stimato",
            key: "_margineprogetto",
            sortable: !0,
            align: "left",
          },
          {
            title: "Margine Attuale",
            key: "_margineprogettoreal",
            sortable: !0,
            align: "left",
          },
        ];
      V([{ key: "type", order: "desc" }]);
      const E = V([]);
      function v() {
        a("close");
      }
      function h(b) {
        if (b.key === ".") {
          b.preventDefault();
          const S = b.target,
            T = S.selectionStart,
            $ = S.selectionEnd,
            C = S.value;
          (S.value = C.substring(0, T) + "," + C.substring($)),
            S.setSelectionRange(T + 1, T + 1),
            S.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      return (
        qn(async () => {
          (l.value = !0),
            (i.value = r.history.Project),
            (E.value = []),
            (i.value.openstatus = i.value.openstatus == "A"),
            E.value.push({
              id: "P" + i.value.id,
              name: i.value.name,
              status: i.value.status,
              totaleproposta: i.value.totaleproposta,
              totalepropostamodified: i.value.totalepropostamodified,
              incrementoproposta: i.value.incrementoproposta,
              tipoincrementoproposta: i.value.tipoincrementoproposta,
              scontoproposta: i.value.scontoproposta,
              tiposcontoproposta: i.value.tiposcontoproposta,
              costoproposta: i.value.costoproposta,
              costopropostamodified: i.value.costopropostamodified,
              costopropostareal: i.value.costopropostareal,
              type: "Progetto",
              _totaleprogetto: i.value._totaleprogetto,
              _margineprogetto: i.value._margineprogetto,
              _margineprogettoreal: i.value._margineprogettoreal,
            }),
            (p.value["P" + i.value.id] = o.value),
            (c.value["P" + i.value.id] = s.value),
            setTimeout(() => {
              document.querySelectorAll(".apririghe").forEach((b) => b.click());
            });
        }),
        (b, S) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: v,
              modelValue: d(l),
              "onUpdate:modelValue":
                S[1] || (S[1] = (T) => (Ve(l) ? (l.value = T) : null)),
              width: "auto",
              style: { "max-width": "95%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", Fc, [
                  S[21] ||
                    (S[21] = I(
                      "h2",
                      { class: "pb-10 pageh2" },
                      "Valori Economici Storico",
                      -1,
                    )),
                  S[22] || (S[22] = I("b", null, "Stato progetto:", -1)),
                  k(" " + z(r.statoprogetto) + " ", 1),
                  S[23] || (S[23] = I("br", null, null, -1)),
                  S[24] || (S[24] = I("br", null, null, -1)),
                  g(
                    Wn,
                    {
                      density: "compact",
                      items: d(E),
                      headers: y,
                      "items-per-page": -1,
                      "show-group-by": "false",
                      "no-data-text": "Nessun elemento disponibile",
                      "item-value": "name",
                      "hide-default-footer": "",
                    },
                    {
                      "item.costoproposta": m(({ item: T }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(T.costoproposta),
                          ) + " ",
                          1,
                        ),
                        T.costopropostamodified != T.costoproposta &&
                        T.costopropostamodified != null &&
                        T.costopropostamodified != null &&
                        T.costopropostamodified != "" &&
                        (d(i).status == "A" ||
                          d(i).status == "C" ||
                          u.includes(d(i).id))
                          ? (U(),
                            me("div", $c, [
                              I(
                                "small",
                                Uc,
                                "(" +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      style: "currency",
                                      useGrouping: !0,
                                      currency: "EUR",
                                    }).format(T.costopropostamodified),
                                  ) +
                                  ")",
                                1,
                              ),
                            ]))
                          : Z("", !0),
                      ]),
                      "item.costopropostareal": m(({ item: T }) => [
                        T.costopropostareal != null &&
                        T.costopropostareal != null &&
                        T.costopropostareal != ""
                          ? (U(),
                            me(
                              "span",
                              jc,
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(T.costopropostareal),
                              ),
                              1,
                            ))
                          : (U(),
                            me(
                              "span",
                              Bc,
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(0),
                              ),
                              1,
                            )),
                      ]),
                      "item.totaleproposta": m(({ item: T }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(T.totaleproposta),
                          ) + " ",
                          1,
                        ),
                        T.totalepropostamodified != T.totaleproposta &&
                        T.totalepropostamodified != null &&
                        T.totalepropostamodified != null &&
                        T.totalepropostamodified != "" &&
                        (d(i).status == "A" ||
                          d(i).status == "C" ||
                          u.includes(d(i).id))
                          ? (U(),
                            me("div", Gc, [
                              I(
                                "small",
                                Hc,
                                "(" +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      style: "currency",
                                      useGrouping: !0,
                                      currency: "EUR",
                                    }).format(T.totalepropostamodified),
                                  ) +
                                  ")",
                                1,
                              ),
                            ]))
                          : Z("", !0),
                      ]),
                      "item._totaleprogetto": m(({ item: T }) => [
                        I(
                          "b",
                          null,
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(T._totaleprogetto),
                          ),
                          1,
                        ),
                      ]),
                      "item._margineprogetto": m(({ item: T }) => [
                        I(
                          "span",
                          {
                            style: Gt(
                              T._margineprogetto <= 0 ? "color:red" : "",
                            ),
                          },
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(T._margineprogetto),
                          ),
                          5,
                        ),
                      ]),
                      "item._margineprogettoreal": m(({ item: T }) => [
                        I(
                          "span",
                          {
                            style: Gt(
                              T._margineprogettoreal <= 0 ? "color:red" : "",
                            ),
                          },
                          z(
                            new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              useGrouping: !0,
                              currency: "EUR",
                            }).format(T._margineprogettoreal),
                          ),
                          5,
                        ),
                      ]),
                      "item.scontoproposta": m(({ item: T }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              useGrouping: !0,
                            }).format(T.scontoproposta),
                          ) + " ",
                          1,
                        ),
                        T.tiposcontoproposta == "V"
                          ? (U(),
                            le(
                              Se,
                              { key: 0 },
                              {
                                default: m(() => [
                                  ...(S[2] ||
                                    (S[2] = [k("mdi-currency-eur", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : (U(),
                            le(
                              Se,
                              { key: 1 },
                              {
                                default: m(() => [
                                  ...(S[3] || (S[3] = [k("mdi-percent", -1)])),
                                ]),
                                _: 1,
                              },
                            )),
                      ]),
                      "item.incrementoproposta": m(({ item: T }) => [
                        k(
                          z(
                            new Intl.NumberFormat("it-IT", {
                              useGrouping: !0,
                            }).format(T.incrementoproposta),
                          ) + " ",
                          1,
                        ),
                        T.tipoincrementoproposta == "V"
                          ? (U(),
                            le(
                              Se,
                              { key: 0 },
                              {
                                default: m(() => [
                                  ...(S[4] ||
                                    (S[4] = [k("mdi-currency-eur", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : (U(),
                            le(
                              Se,
                              { key: 1 },
                              {
                                default: m(() => [
                                  ...(S[5] || (S[5] = [k("mdi-percent", -1)])),
                                ]),
                                _: 1,
                              },
                            )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["items"],
                  ),
                  d(i).status == "A" || d(i).status == "C" || d(i).status == "R"
                    ? (U(),
                      le(
                        Ge,
                        { key: 0, class: "mt-4" },
                        {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", md: "2", class: "pa-4" },
                              {
                                default: m(() => [
                                  g(
                                    Dt,
                                    {
                                      class: "mt-2",
                                      modelValue: d(i).newtotaleproposta,
                                      "onUpdate:modelValue":
                                        S[0] ||
                                        (S[0] = (T) =>
                                          (d(i).newtotaleproposta = T)),
                                      density: "compact",
                                      variant: "outlined",
                                      autofocus: "",
                                      label: "Nuovo valore proposta",
                                      autocomplete: "off",
                                      "hide-details": "",
                                      "decimal-separator": ",",
                                      onKeydown: h,
                                      precision: 2,
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
                        },
                      ))
                    : Z("", !0),
                  g(
                    Ge,
                    { class: "mt-4" },
                    {
                      default: m(() => [
                        g(
                          ae,
                          { cols: "12", md: "12", class: "pa-4" },
                          {
                            default: m(() => [
                              g(
                                Ge,
                                {
                                  style: {
                                    border: "2px solid #5daaff",
                                    "border-radius": "10px",
                                    "background-color": "#5daaff4a",
                                  },
                                },
                                {
                                  default: m(() => [
                                    g(
                                      ae,
                                      { cols: "12", md: "12" },
                                      {
                                        default: m(() => [
                                          g(Ge, null, {
                                            default: m(() => [
                                              g(
                                                ae,
                                                {
                                                  cols: "12",
                                                  md: "6",
                                                  style: {
                                                    "font-size": "25px",
                                                  },
                                                },
                                                {
                                                  default: m(() => [
                                                    S[10] ||
                                                      (S[10] = I(
                                                        "b",
                                                        null,
                                                        "Totale Accettato",
                                                        -1,
                                                      )),
                                                    k(
                                                      ": " +
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(i).status ==
                                                              "A" ||
                                                              d(i).status == "C"
                                                              ? d(i)
                                                                  ._totaleprogetto
                                                              : 0,
                                                          ),
                                                        ),
                                                      1,
                                                    ),
                                                    S[11] ||
                                                      (S[11] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    d(i).newtotaleproposta != 0
                                                      ? (U(),
                                                        me("span", zc, [
                                                          S[6] ||
                                                            (S[6] = I(
                                                              "b",
                                                              null,
                                                              "Nuovo Totale Accettato",
                                                              -1,
                                                            )),
                                                          k(
                                                            ": " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  d(i).status ==
                                                                    "A" ||
                                                                    d(i)
                                                                      .status ==
                                                                      "C"
                                                                    ? d(i)
                                                                        .newtotaleproposta
                                                                    : 0,
                                                                ),
                                                              ),
                                                            1,
                                                          ),
                                                          S[7] ||
                                                            (S[7] = I(
                                                              "br",
                                                              null,
                                                              null,
                                                              -1,
                                                            )),
                                                        ]))
                                                      : Z("", !0),
                                                    S[12] ||
                                                      (S[12] = I(
                                                        "b",
                                                        null,
                                                        "Totale Accettato senza incrementi e sconto",
                                                        -1,
                                                      )),
                                                    k(
                                                      ": " +
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(i).status ==
                                                              "A" ||
                                                              d(i).status == "C"
                                                              ? d(i)
                                                                  .totaleproposta
                                                              : 0,
                                                          ),
                                                        ),
                                                      1,
                                                    ),
                                                    S[13] ||
                                                      (S[13] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    d(i)
                                                      .totalepropostamodified !=
                                                    0
                                                      ? (U(),
                                                        me("span", Xc, [
                                                          S[8] ||
                                                            (S[8] = I(
                                                              "b",
                                                              null,
                                                              "Totale Attuale senza incrementi e sconto",
                                                              -1,
                                                            )),
                                                          k(
                                                            ": " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  d(i).status ==
                                                                    "A" ||
                                                                    d(i)
                                                                      .status ==
                                                                      "C"
                                                                    ? d(i)
                                                                        .totalepropostamodified
                                                                    : 0,
                                                                ),
                                                              ),
                                                            1,
                                                          ),
                                                          S[9] ||
                                                            (S[9] = I(
                                                              "br",
                                                              null,
                                                              null,
                                                              -1,
                                                            )),
                                                        ]))
                                                      : Z("", !0),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              g(
                                                ae,
                                                {
                                                  cols: "12",
                                                  md: "6",
                                                  style: {
                                                    "font-size": "25px",
                                                  },
                                                },
                                                {
                                                  default: m(() => [
                                                    S[14] ||
                                                      (S[14] = I(
                                                        "b",
                                                        null,
                                                        "Margine Stimato",
                                                        -1,
                                                      )),
                                                    S[15] ||
                                                      (S[15] = k(": ", -1)),
                                                    I(
                                                      "span",
                                                      {
                                                        style: Gt(
                                                          (d(i).status == "A" ||
                                                          d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogetto
                                                            : 0) <= 0
                                                            ? "font-weight: 600;color: red;"
                                                            : "",
                                                        ),
                                                      },
                                                      z(
                                                        new Intl.NumberFormat(
                                                          "it-IT",
                                                          {
                                                            style: "currency",
                                                            useGrouping: !0,
                                                            currency: "EUR",
                                                          },
                                                        ).format(
                                                          d(i).status == "A" ||
                                                            d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogetto
                                                            : 0,
                                                        ),
                                                      ),
                                                      5,
                                                    ),
                                                    S[16] ||
                                                      (S[16] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
                                                      )),
                                                    S[17] ||
                                                      (S[17] = I(
                                                        "b",
                                                        null,
                                                        "Margine Attuale",
                                                        -1,
                                                      )),
                                                    S[18] ||
                                                      (S[18] = k(": ", -1)),
                                                    I(
                                                      "span",
                                                      {
                                                        style: Gt(
                                                          (d(i).status == "A" ||
                                                          d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogettoreal
                                                            : 0) <= 0
                                                            ? "font-weight: 600;color: red;"
                                                            : "",
                                                        ),
                                                      },
                                                      z(
                                                        new Intl.NumberFormat(
                                                          "it-IT",
                                                          {
                                                            style: "currency",
                                                            useGrouping: !0,
                                                            currency: "EUR",
                                                          },
                                                        ).format(
                                                          d(i).status == "A" ||
                                                            d(i).status == "C"
                                                            ? d(i)
                                                                ._margineprogettoreal
                                                            : 0,
                                                        ),
                                                      ),
                                                      5,
                                                    ),
                                                    S[19] ||
                                                      (S[19] = I(
                                                        "br",
                                                        null,
                                                        null,
                                                        -1,
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
                  S[25] || (S[25] = I("br", null, null, -1)),
                  I("div", Kc, [
                    g(
                      Oe,
                      { class: "", onClick: v, color: "red" },
                      {
                        default: m(() => [
                          ...(S[20] || (S[20] = [k(" Chiudi ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
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
  fl = globalThis.setInterval,
  Yc = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Jc = { key: 0, class: "pb-10 pageh2" },
  Qc = { key: 1, class: "pb-10 pageh2" },
  Zc = { key: 2, class: "pb-10 pageh2" },
  qc = { key: 3, class: "pb-10 pageh2" },
  _c = { key: 4, class: "pb-10 pageh2" },
  ef = { style: { "font-size": "12px" } },
  tf = { style: { "font-size": "12px" } },
  nf = { key: 1 },
  of = { key: 5 },
  rf = { class: "font-weight-bold bg-grey-lighten-4" },
  af = { class: "text-start" },
  sf = { class: "font-weight-bold bg-grey-lighten-4" },
  lf = { class: "text-start" },
  uf = { style: { color: "red" } },
  df = { style: { display: "flex" } },
  Ci = "DD-MM-YYYY HH:mm",
  cf = {
    __name: "DialogInsModTask",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      suppliers: Array,
      clone: Number,
      project: Object,
      profiles: Array,
      users: Array,
      activities: Array,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      let n = null,
        a = null;
      (a = Promise.all([
        oa(() => import("./BxhyeuW9.js"), [], import.meta.url).then((q) => {
          n = q.default || q.JSGantt;
        }),
        oa(
          () => import("./PpFccnDH.js").then((q) => q.j),
          __vite__mapDeps([0, 1, 2]),
          import.meta.url,
        ),
      ])),
        Hn.locale("it");
      const r = V(null),
        s = V(null),
        { data: o } = Qn(),
        u = jo();
      yr();
      const l = Er(),
        i = t,
        c = e,
        p = V(!0),
        y = V(!1),
        E = V(!1),
        v = V(!1),
        h = Zn("snackbar"),
        b = V({ id: 0, openstatus: !0 }),
        S = V(0),
        T = V([]),
        $ = V(!1),
        C = V(""),
        N = V([]),
        D = [
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
        H = wo(() => c.users.filter((q) => !q.disabled)),
        j = V([(q) => !!q || "Campo obbligatorio"]),
        O = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
        ],
        Y = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
          { code: "D", name: "Eliminato", disabled: !0 },
        ],
        te = V(new Date().getMonth()),
        ne = V(new Date().getFullYear()),
        K = V([]);
      function X(q) {
        if (q.key === ".") {
          q.preventDefault();
          const x = q.target,
            F = x.selectionStart,
            ie = x.selectionEnd,
            _ = x.value;
          (x.value = _.substring(0, F) + "," + _.substring(ie)),
            x.setSelectionRange(F + 1, F + 1),
            x.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      function ue(q) {
        if (q != null && q != null) {
          const x = new Date(q);
          return (
            x.setMinutes(x.getMinutes() - x.getTimezoneOffset()),
            x.toISOString().split("T")[0]
          );
        } else return null;
      }
      const G = V(0),
        A = V(null),
        w = V(!1),
        se = V([]),
        ke = V([]),
        ge = V(null),
        Ee = V(!1),
        Be = V(""),
        je = V([]),
        He = [
          { label: "Costi Fissi", value: "F" },
          { label: "Costi Variabili", value: "V" },
          { label: "Costi Personale", value: "P" },
        ],
        Fe = async () => {
          if (((Be.value = ""), (p.value = !1), Ee.value == !0)) {
            if (S.value == 0 || S.value == 0) {
              (v.value = !1),
                (Be.value = "Inserire ore budget"),
                (p.value = !0);
              return;
            }
            if (
              A.value > 0 &&
              (b.value.userprofile_id == 0 || b.value.userprofile_id == null)
            ) {
              (v.value = !1),
                (Be.value = "Inserire profilo professionale"),
                (p.value = !0);
              return;
            }
          }
          (b.value.clone = c.clone),
            (b.value.project_id = c.clone == 2 ? ge.value.id : l.query.id),
            (b.value.startdate = ue(b.value?.startdate)),
            (b.value.enddate = ue(b.value?.enddate)),
            (b.value.user_id = A.value > 0 ? A.value : 0),
            (b.value.userprofile_id =
              b.value.userprofile_id != null ? b.value.userprofile_id : 0),
            (b.value.internalactivity = Ee.value == !0 ? 1 : 0),
            (b.value.esecutivo = b.value.esecutivo == !0 ? 1 : 0),
            (b.value.supplier_id =
              b.value.supplier_id == null ? 0 : b.value.supplier_id),
            (b.value.hours = S.value * 8);
          let q = { Task: b.value };
          await De(u.public.apiBaseurl + "task/createedit", {
            method: "POST",
            body: q,
          })
            .then(() => {
              c.idrec == 0
                ? (h.value = {
                    text: "Creazione task completata",
                    type: "success",
                    show: !0,
                  })
                : (h.value = {
                    text: "Modifica task completata",
                    type: "success",
                    show: !0,
                  }),
                (p.value = !0),
                St();
            })
            .catch((x) => {
              let F = JSON.parse(x.data).errors.title;
              console.log("catcherr", x.data),
                (h.value = { text: F, type: "danger", show: !0 }),
                (p.value = !0);
            });
        },
        Ue = async () => {
          (y.value = !1), ($.value = !1);
        },
        ut = async () => {
          qe();
          const q = new Date(b.value.startdate),
            x = String(q.getMonth()).padStart(2, "0"),
            F = q.getFullYear();
          b.value.startdate != "" &&
            b.value.startdate != null &&
            (b.value.enddate == "" || b.value.enddate == null) &&
            ((te.value = x), (ne.value = F));
        },
        qe = async () => {
          y.value == !0 && w == !0 && (await bt());
        },
        bt = async () => {
          (se.value = []), (K.value = []);
          let q = ue(b.value.startdate),
            x = ue(b.value.enddate),
            F = { user: A.value, from: q, to: x };
          try {
            const { data: ie, status: _ } = await De(
              u.public.apiBaseurl + "task/tempooccupatoutente",
              { method: "POST", body: F },
            );
            ie.forEach((ce) => {
              se.value.push(ce),
                K.value.push({
                  budgetday: ce.hours / 8,
                  status: ce.status,
                  completed: ce.status == "C",
                  notes: ce.note,
                  userId: ce.user_id,
                  myBeginDate:
                    new Date(ce.startdate).toLocaleDateString("es-CL") +
                    " 00:00",
                  myEndDate:
                    new Date(ce.enddate).toLocaleDateString("es-CL") + " 00:00",
                  rowClass: "task-warning",
                  ganttBarConfig: {
                    id: ce.id,
                    label: ce.nomevisualizzato,
                    immobile: !0,
                  },
                });
            });
          } catch (ie) {
            console.log(ie);
            let _ = JSON.parse(ie.data).errors.title;
            console.log("catcherr", ie.data),
              (h.value = { text: _, type: "danger", show: !0 });
            return;
          }
          It();
        };
      function St() {
        i("close");
      }
      function Tt() {
        Ee.value == !0 && (S.value == 0 || S.value == 0) && (v.value = !1);
      }
      function ze(q) {
        const [x, F] = q.split(" "),
          [ie, _, ce] = x.split("-"),
          [be, Te, at] = F.split(":");
        return `${ce}-${_}-${ie} ${be}:${Te}:${at}`;
      }
      const Me = async () => {
        if (c.idrec > 0) {
          const { data: q } = await De(
            u.public.apiBaseurl + "hour/gettaskhours/" + c.idrec,
            {
              onRequest({ request: x, options: F }) {},
              onRequestError({ request: x, options: F, error: ie }) {
                console.log("Errore nella request:", ie),
                  (h.value = {
                    text: "Errore: " + ie,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: x, response: F, options: ie }) {
                console.log(
                  "Errore nella response: " + F._data.error.messages[0],
                ),
                  (h.value = {
                    text: "Errore caricamento ore",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: x, response: F, options: ie }) {
                F._data.data.forEach((_) => {
                  (G.value = G.value + gt(_.Hour.startdate, _.Hour.enddate)),
                    N.value.push({
                      id: _.Hour.id,
                      user: _.User.firstname + " " + _.User.lastname,
                      startdate: ze(_.Hour.startdate),
                      enddate: ze(_.Hour.enddate),
                      description: _.Hour.description,
                      totore: gt(_.Hour.startdate, _.Hour.enddate),
                      activity: _.Activity.name,
                    });
                });
              },
            },
          );
        }
      };
      function gt(q, x) {
        const F = new Date(q);
        return (new Date(x).getTime() - F.getTime()) / (1e3 * 60 * 60);
      }
      const ht = async () => {
          if (c.idrec > 0) {
            const { data: q } = await De(
              u.public.apiBaseurl + "task/get/" + c.idrec,
              {
                onRequest({ request: x, options: F }) {},
                onRequestError({ request: x, options: F, error: ie }) {
                  console.log("Errore nella request:", ie),
                    (h.value = {
                      text: "Errore: " + ie,
                      type: "danger",
                      show: !0,
                    });
                },
                onResponseError({ request: x, response: F, options: ie }) {
                  console.log(
                    "Errore nella response: " + F._data.error.messages[0],
                  ),
                    (h.value = {
                      text: "Errore caricamento task",
                      type: "danger",
                      show: !0,
                    });
                },
                onResponse({ request: x, response: F, options: ie }) {
                  (b.value = F._data.data.Task),
                    (b.value.supplier_id =
                      b.value.supplier_id == 0 ? null : b.value.supplier_id),
                    (c.clone == 1 || c.clone == 2) &&
                      ((b.value.id = 0), (b.value.code = "")),
                    (b.value.esecutivo = b.value.esecutivo == 1),
                    (b.value.userprofile_id =
                      b.value.userprofile_id == 0
                        ? null
                        : b.value.userprofile_id),
                    (A.value = b.value.user_id == 0 ? null : b.value.user_id),
                    (Ee.value = b.value.internalactivity == 1),
                    (S.value = b.value.hours / 8);
                },
              },
            );
          } else (b.value.status = "A"), (Ee.value = !0);
        },
        Mt = async () => {
          ke.value = [];
          let q = {};
          try {
            const { data: x, status: F } = await De(
              u.public.apiBaseurl + "project/list",
              { method: "POST", body: q },
            );
            x.forEach((ie) => {
              ie.id != c.project.id && ke.value.push(ie);
            });
          } catch (x) {
            console.log(x);
            let F = JSON.parse(x.data).errors.title;
            console.log("catcherr", x.data),
              (h.value = { text: F, type: "danger", show: !0 });
            return;
          }
        };
      Hn.extend(cl);
      async function Lt() {
        if (!r.value) {
          console.warn("ganttContainer not available");
          return;
        }
        if ((a && (await a), !n)) {
          console.error("JSGantt not loaded");
          return;
        }
        (s.value = new n.GanttChart(r.value, "day")),
          s.value.setOptions({
            vAdditionalHeaders: { pBudgetday: { title: "Gg a Budget" } },
            vLang: "it",
            vFormatArr: ["day", "week", "month"],
          });
        try {
          s.value.setShowTaskInfoLink(1),
            s.value.setShowTaskInfoNotes(1),
            s.value.setShowTaskInfoStartDate(1),
            s.value.setShowTaskInfoEndDate(1),
            s.value.setShowTaskInfoDur(1),
            s.value.setShowTaskInfoComp(0),
            s.value.setShowTaskInfoRes(0),
            s.value.setShowRes(0),
            s.value.setShowDur(1),
            s.value.setShowComp(0),
            s.value.setShowStartDate(1),
            s.value.setShowEndDate(1),
            s.value.setUseToolTip(1),
            s.value.setUseFade(1),
            s.value.setUseMove(1),
            s.value.setUseRowHlt(1),
            s.value.setUseSort(0),
            s.value.setShowDeps(1),
            s.value.setDayColWidth(25),
            s.value.setRowHeight(25),
            s.value.setWeekColWidth(50),
            s.value.setMonthColWidth(50),
            typeof s.value.setTaskNameColWidth == "function"
              ? s.value.setTaskNameColWidth(320)
              : s.value.vTaskNameColWidth !== void 0 &&
                (s.value.vTaskNameColWidth = 320),
            typeof s.value.setDateInputFormat == "function" &&
              s.value.setDateInputFormat("dd/mm/yyyy"),
            typeof s.value.setDateDisplayFormat == "function" &&
              s.value.setDateDisplayFormat("dd/mm/yyyy"),
            typeof s.value.setDurationFormat == "function" &&
              s.value.setDurationFormat("days"),
            s.value.vFormat !== void 0 && (s.value.vFormat = "day"),
            s.value.vFormatArr !== void 0 &&
              (s.value.vFormatArr = ["Day", "Week", "Month"]);
          const q = s.value.Draw;
          s.value.Draw = function () {
            const x = q.call(this);
            return (
              setTimeout(() => {
                dt();
              }, 200),
              x
            );
          };
        } catch (q) {
          console.warn(
            "Some gantt configuration methods are not available:",
            q,
          );
        }
        zt();
      }
      function _n(q) {
        const x = [],
          F = new Map();
        for (let ie = 0; ie < q.length; ie++)
          F.set(q[ie].ganttBarConfig.id, ie + 1);
        for (let ie = 0; ie < q.length; ie++) {
          const _ = q[ie],
            ce = Hn(_.myBeginDate, Ci),
            be = Hn(_.myEndDate, Ci),
            Te = (x.value || []).find(
              (Xt) => Number(Xt.id) === _.ganttBarConfig.id,
            );
          (new Date(
            _.myEndDate.substr(6, 4),
            _.myEndDate.substr(3, 2),
            _.myEndDate.substr(0, 2),
          ) -
            new Date(
              _.myBeginDate.substr(6, 4),
              _.myBeginDate.substr(3, 2),
              _.myBeginDate.substr(0, 2),
            )) /
            864e5;
          const at = _.notes,
            vn = _.completed,
            xn = _.status,
            an = _.ganttBarConfig.isParent || !1,
            eo = _.ganttBarConfig.parentId || 0,
            go = (eo > 0 && F.get(eo)) || 0,
            Fa = be.diff(ce, "day") || 1;
          let gn = "",
            Ho = "";
          if (Te && Te.BillItemPrecedenceAsBlocked) {
            const Xt = Te.BillItemPrecedenceAsBlocked.map((Ct) => {
              const ho = Number(Ct.bill_item_blocker_id),
                zo = F.get(ho),
                $a = Ct.ptype || "FS";
              return zo ? { pId: zo, pType: $a } : null;
            }).filter((Ct) => Ct);
            Xt.length > 0 &&
              ((gn = Xt.map((Ct) => Ct.pId).join(",")),
              (Ho = Xt.map((Ct) => Ct.pType).join(",")));
          }
          const Nr = new Date(ce.year(), ce.month(), ce.date(), 12, 0, 0),
            wr = new Date(be.year(), be.month(), be.date(), 12, 0, 0);
          x.push({
            pID: ie + 1,
            pName:
              _.ganttBarConfig.label ||
              _.ganttBarConfig.articolo ||
              `Task ${ie + 1}`,
            pStart: Nr,
            pEnd: wr,
            pDuration: Fa,
            pClass:
              xn == "C"
                ? "gtaskgreen"
                : xn == "P"
                  ? "gtaskblue"
                  : "gtaskorange",
            pLink: "",
            pMile: 0,
            pRes: 0,
            pComp: vn ? 100 : 0,
            pGroup: an ? 1 : 0,
            pParent: go,
            pOpen: 1,
            pDepend: gn,
            pDepType: Ho,
            pCaption: "",
            pNotes: at,
            pBudgetday: _.budgetday,
            originalId: _.ganttBarConfig.id,
          });
        }
        return x;
      }
      async function It() {
        if ((($.value = !1), !s.value || !K.value || !n)) {
          console.warn("Missing dependencies:", {
            ganttChart: !!s.value,
            rowBarList: !!K.value,
            JSGantt: !!n,
          });
          return;
        }
        (s.value.vTaskList = []), s.value.Draw();
        const q = _n(K.value);
        for (const x of q)
          s.value.AddTaskItemObject({
            pID: x.pID,
            pName: x.pName,
            pStart: x.pStart,
            pEnd: x.pEnd,
            pDuration: x.pDuration,
            pClass: x.pClass,
            pLink: x.pLink,
            pMile: x.pMile,
            pRes: x.pRes,
            pComp: x.pComp,
            pGroup: x.pGroup,
            pParent: x.pParent,
            pOpen: x.pOpen,
            pDepend: x.pDepend,
            pDepType: x.pDepType,
            pCaption: x.pCaption,
            pNotes: x.pNotes,
            pBudgetday: x.pBudgetday,
            originalId: x.originalId,
          });
        if ((zt(), s.value.vTaskList.length === 0)) {
          (document.getElementById("gantt-chart2").innerHTML = ""),
            ($.value = !0);
          return;
        }
        s.value.Draw(), dt();
      }
      function dt() {
        if (s.value)
          try {
            if (typeof s.value.setClickTask == "function")
              s.value.setClickTask(Ke);
            else if (typeof s.value.setEvents == "function")
              try {
                s.value.setEvents({
                  taskClick: Ke,
                  onTaskClick: Ke,
                  rowClick: Ke,
                  onClick: Ke,
                });
              } catch {}
            else
              typeof s.value.setEventsClickRow == "function" &&
                s.value.setEventsClickRow(Ke);
            s.value.vEventClickRow = Ke;
          } catch (q) {
            console.warn("Could not set click handler, using DOM fallback:", q);
          }
      }
      function Ke(...q) {
        q[0].getAllData();
      }
      function Cn() {
        return {
          workingDaysMode: "weekdays",
          selectedItalianHolidays: [
            "natale",
            "stefano",
            "immacolata",
            "ferragosto",
            "capodanno",
            "epifania",
            "festa-liberazione",
            "festa-lavoro",
            "repubblica",
            "ognissanti",
          ],
          easterYears: [],
          customHolidays: [],
          easterEnabled: !0,
        };
      }
      function On(q) {
        switch (q.workingDaysMode) {
          case "all":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !0,
              sunday: !0,
            };
          case "custom":
            const F = q.workingDays || [];
            return {
              sunday: F.includes(0),
              monday: F.includes(1),
              tuesday: F.includes(2),
              wednesday: F.includes(3),
              thursday: F.includes(4),
              friday: F.includes(5),
              saturday: F.includes(6),
            };
          case "weekdays":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
          default:
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
        }
      }
      function zt() {
        if (!s.value) return;
        const q = Cn();
        s.value.setUseHolidaySystem(!0),
          typeof s.value.setAutoAdjustTaskDates == "function" &&
            s.value.setAutoAdjustTaskDates(!1);
        const x = On(q);
        s.value.setCustomWorkingDays(x),
          je.value.forEach((F) => {
            s.value.addHoliday({
              id: F.id,
              name: F.name,
              startDate: F.startDate,
              endDate: F.endDate,
              recurring: !1,
            });
          });
      }
      let P = null;
      function Zt() {
        if (!s.value) return;
        const q = s.value.vFormat;
        P !== null && P !== q && re(), (P = q);
      }
      let rn = null,
        M = null;
      function L() {
        rn && clearInterval(rn), (rn = fl(Zt, 1e3)), B();
      }
      function B() {
        M && M.disconnect(),
          Po(() => {
            const q = r.value;
            q &&
              ((M = new MutationObserver((x) => {
                x.forEach((F) => {
                  F.type === "childList" &&
                    F.target.id &&
                    F.target.id.includes("gantt") &&
                    re();
                });
              })),
              M.observe(q, { childList: !0, subtree: !0, attributes: !1 }));
          });
      }
      function re() {
        Po(() => {
          setTimeout(() => {
            dt();
          }, 300);
        });
      }
      const pe = async (q, x) => {
          q != null &&
            x != null &&
            (await he(q, x)).forEach((ie) => {
              je.value.push({
                id: ie.id,
                name: ie.name,
                startDate: new Date(ie.startDate),
                endDate: new Date(ie.endDate),
                recurring: ie.recurring,
              });
            });
        },
        he = async (q, x) => {
          let F = { start: q, end: x };
          try {
            const { data: ie, status: _ } = await De(
              u.public.apiBaseurl + "holiday/isholidaydate/1",
              { method: "POST", body: F },
            );
            return ie;
          } catch (ie) {
            console.log(ie);
            let _ = JSON.parse(ie.data).errors.title;
            return (
              console.log("catcherr", ie.data),
              (h.value = { text: _, type: "danger", show: !0 }),
              !1
            );
          }
        };
      return (
        qn(async () => {
          c.project.owners.forEach((q) => {
            T.value.push(q);
          }),
            c.clone == 2 && (await Mt()),
            await ht(),
            await pe(b.value.startdate, b.value.enddate),
            (o.value.role == "S" ||
              o.value.role == "A" ||
              T.value.includes(o.value.id) == !0) &&
              (w.value = !0),
            c.idrec > 0 && (w == !0 && (await bt()), await Me()),
            c.idrec == 0 &&
              (c.project.status == "A" || c.project.status == "C") &&
              (b.value.esecutivo = !0),
            (E.value = !0),
            Po(async () => {
              w == !0 && (await Lt(), It(), L());
            });
        }),
        (q, x) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: St,
              modelValue: d(E),
              "onUpdate:modelValue":
                x[40] || (x[40] = (F) => (Ve(E) ? (E.value = F) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", Yc, [
                  c.idrec == 0 ? (U(), me("h2", Jc, "Nuovo Task")) : Z("", !0),
                  c.idrec > 0 && c.clone == 0 && d(w) == !0
                    ? (U(), me("h2", Qc, "Modifica Task"))
                    : Z("", !0),
                  c.idrec > 0 && c.clone == 1
                    ? (U(), me("h2", Zc, "Duplica Task"))
                    : Z("", !0),
                  c.idrec > 0 && c.clone == 2
                    ? (U(), me("h2", qc, "Duplica Task su altro progetto"))
                    : Z("", !0),
                  c.idrec > 0 && c.clone == 0 && d(w) == !1
                    ? (U(), me("h2", _c, "Visualizza Task"))
                    : Z("", !0),
                  g(
                    Es,
                    {
                      modelValue: d(v),
                      "onUpdate:modelValue":
                        x[38] ||
                        (x[38] = (F) => (Ve(v) ? (v.value = F) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        x[39] ||
                        (x[39] = Ne(
                          sl(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: m(() => [
                        c.clone == 2
                          ? (U(),
                            le(
                              Ge,
                              { key: 0 },
                              {
                                default: m(() => [
                                  g(
                                    ae,
                                    { cols: "12", class: "mb-0" },
                                    {
                                      default: m(() => [
                                        g(
                                          Ze,
                                          {
                                            modelValue: d(ge),
                                            "onUpdate:modelValue":
                                              x[0] ||
                                              (x[0] = (F) =>
                                                Ve(ge) ? (ge.value = F) : null),
                                            items: d(ke),
                                            label: "Progetto*",
                                            rules: d(j),
                                            variant: "outlined",
                                            "item-title": "name",
                                            "item-value": "id",
                                            autocompelte: "off",
                                            density: "compact",
                                            "return-object": "",
                                            readonly: d(w) == !1,
                                            onKeydown:
                                              x[1] ||
                                              (x[1] = Ne(
                                                (F) => F.preventDefault(),
                                                ["enter"],
                                              )),
                                          },
                                          null,
                                          8,
                                          [
                                            "modelValue",
                                            "items",
                                            "rules",
                                            "readonly",
                                          ],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                            ))
                          : Z("", !0),
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", sm: "4" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        x[2] ||
                                        (x[2] = Ne(
                                          (F) => F.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(b).shortname,
                                      "onUpdate:modelValue":
                                        x[3] ||
                                        (x[3] = (F) => (d(b).shortname = F)),
                                      autocomplete: "off",
                                      required: "",
                                      rules: d(j),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      readonly: d(w) == !1,
                                      label: "Nome*",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", sm: "6" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        x[4] ||
                                        (x[4] = Ne(
                                          (F) => F.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(b).description,
                                      "onUpdate:modelValue":
                                        x[5] ||
                                        (x[5] = (F) => (d(b).description = F)),
                                      autocomplete: "off",
                                      required: "",
                                      variant: "outlined",
                                      readonly: d(w) == !1,
                                      "persistent-hint": "",
                                      label: "Descrizione",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", md: "2" },
                              {
                                default: m(() => [
                                  g(
                                    co,
                                    {
                                      color: "green",
                                      baseColor: "red",
                                      density: "compact",
                                      class: wn(d(w) == !1 ? "nodrp" : ""),
                                      modelValue: d(b).esecutivo,
                                      "onUpdate:modelValue":
                                        x[6] ||
                                        (x[6] = (F) => (d(b).esecutivo = F)),
                                      readonly: d(w) == !1,
                                      "hide-details": "",
                                      inset: "",
                                    },
                                    null,
                                    8,
                                    ["class", "modelValue", "readonly"],
                                  ),
                                  I(
                                    "span",
                                    ef,
                                    z(
                                      d(b).esecutivo == !0
                                        ? "Esecutivo: SI"
                                        : "Esecutivo: NO",
                                    ),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    Do,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        x[7] ||
                                        (x[7] = Ne(
                                          (F) => F.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(b).startdate,
                                      "onUpdate:modelValue": [
                                        x[8] ||
                                          (x[8] = (F) => (d(b).startdate = F)),
                                        x[9] || (x[9] = (F) => ut()),
                                      ],
                                      required: "",
                                      "input-format": "dd/MM/YYYY",
                                      rules:
                                        c.project.status == "A" ||
                                        c.project.status == "C"
                                          ? d(j)
                                          : [],
                                      readonly: d(w) == !1,
                                      "persistent-hint": "",
                                      autocomplete: "off",
                                      label:
                                        c.project.status == "A" ||
                                        c.project.status == "C"
                                          ? "Inizio*"
                                          : "Inizio",
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "rules",
                                      "readonly",
                                      "label",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    Do,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        x[10] ||
                                        (x[10] = Ne(
                                          (F) => F.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(b).enddate,
                                      "onUpdate:modelValue": [
                                        x[11] ||
                                          (x[11] = (F) => (d(b).enddate = F)),
                                        x[12] || (x[12] = (F) => qe()),
                                      ],
                                      required: "",
                                      readonly: d(w) == !1,
                                      autocomplete: "off",
                                      month: d(te),
                                      year: d(ne),
                                      rules:
                                        c.project.status == "A" ||
                                        c.project.status == "C"
                                          ? d(j)
                                          : [],
                                      "persistent-hint": "",
                                      "input-format": "dd/MM/YYYY",
                                      label:
                                        c.project.status == "A" ||
                                        c.project.status == "C"
                                          ? "Fine*"
                                          : "Fine",
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "readonly",
                                      "month",
                                      "year",
                                      "rules",
                                      "label",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    Dt,
                                    {
                                      class: wn(d(w) == !1 ? "nodrp" : ""),
                                      density: "compact",
                                      onKeydown: [
                                        x[13] ||
                                          (x[13] = Ne(
                                            (F) => F.preventDefault(),
                                            ["enter"],
                                          )),
                                        X,
                                      ],
                                      modelValue: d(S),
                                      "onUpdate:modelValue":
                                        x[14] ||
                                        (x[14] = (F) =>
                                          Ve(S) ? (S.value = F) : null),
                                      required: "",
                                      autocomplete: "off",
                                      rules: d(Ee) == !0 ? d(j) : [],
                                      variant: "outlined",
                                      min: 0,
                                      precision: 3,
                                      "decimal-separator": ",",
                                      "persistent-hint": "",
                                      readonly: d(w) == !1,
                                      label:
                                        d(Ee) == !0
                                          ? "Giornate a budget*"
                                          : "Giornate a budget",
                                    },
                                    null,
                                    8,
                                    [
                                      "class",
                                      "modelValue",
                                      "rules",
                                      "readonly",
                                      "label",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            g(
                              ae,
                              { cols: "12", md: "3" },
                              {
                                default: m(() => [
                                  g(
                                    Ze,
                                    {
                                      autocomplete: "off",
                                      density: "compact",
                                      modelValue: d(b).status,
                                      "onUpdate:modelValue":
                                        x[15] ||
                                        (x[15] = (F) => (d(b).status = F)),
                                      items: d(o).role == "S" ? Y : O,
                                      label: "Stato*",
                                      "item-props": (F) => ({
                                        disabled: F.disabled,
                                      }),
                                      variant: "outlined",
                                      readonly: d(w) == !1,
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                      "item-title": "name",
                                      "item-value": "code",
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "items",
                                      "item-props",
                                      "readonly",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", md: "1" },
                              {
                                default: m(() => [
                                  g(
                                    co,
                                    {
                                      color: "green",
                                      class: wn(
                                        d(w) == !1
                                          ? "nodrp small-switch"
                                          : "small-switch",
                                      ),
                                      baseColor: "blue",
                                      density: "compact",
                                      modelValue: d(Ee),
                                      "onUpdate:modelValue": [
                                        x[16] ||
                                          (x[16] = (F) =>
                                            Ve(Ee) ? (Ee.value = F) : null),
                                        x[17] || (x[17] = (F) => Tt()),
                                      ],
                                      "hide-details": "",
                                      readonly: d(w) == !1,
                                      inset: "",
                                    },
                                    null,
                                    8,
                                    ["class", "modelValue", "readonly"],
                                  ),
                                  I(
                                    "span",
                                    tf,
                                    z(d(Ee) == !0 ? "Interno" : "Esterno"),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            d(Ee) == !0
                              ? (U(),
                                le(
                                  ae,
                                  { key: 0, cols: "12", md: "4" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          modelValue: d(b).userprofile_id,
                                          "onUpdate:modelValue":
                                            x[18] ||
                                            (x[18] = (F) =>
                                              (d(b).userprofile_id = F)),
                                          items: c.profiles,
                                          "item-title": "name",
                                          "item-value": "id",
                                          clearable: d(w) == !0,
                                          "hide-details": "",
                                          readonly: d(w) == !1,
                                          label:
                                            d(A) > 0
                                              ? "Profilo Professionale*"
                                              : "Profilo Professionale",
                                          rules: d(A) > 0 ? d(j) : [],
                                          variant: "outlined",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                        },
                                        null,
                                        8,
                                        [
                                          "class",
                                          "modelValue",
                                          "items",
                                          "clearable",
                                          "readonly",
                                          "label",
                                          "rules",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                            d(Ee) == !0
                              ? (U(),
                                le(
                                  ae,
                                  { key: 1, cols: "12", md: d(A) ? 3 : 4 },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          modelValue: d(A),
                                          "onUpdate:modelValue": [
                                            x[19] ||
                                              (x[19] = (F) =>
                                                Ve(A) ? (A.value = F) : null),
                                            x[20] || (x[20] = (F) => Ue()),
                                          ],
                                          items:
                                            c.idrec == 0 ||
                                            (c.idrec > 0 && c.clone == 1) ||
                                            (c.idrec > 0 && c.clone == 2)
                                              ? d(H)
                                              : c.users,
                                          "item-title": "name",
                                          "item-value": "id",
                                          readonly: d(w) == !1,
                                          clearable: d(w) == !0,
                                          "hide-details": "",
                                          "item-props": (F) => ({
                                            disabled: F.disabled,
                                          }),
                                          rules:
                                            c.project.status == "A" ||
                                            c.project.status == "C"
                                              ? d(j)
                                              : [],
                                          label:
                                            c.project.status == "A" ||
                                            c.project.status == "C"
                                              ? "Assegnatario*"
                                              : "Assegnatario",
                                          variant: "outlined",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                        },
                                        null,
                                        8,
                                        [
                                          "class",
                                          "modelValue",
                                          "items",
                                          "readonly",
                                          "clearable",
                                          "item-props",
                                          "rules",
                                          "label",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["md"],
                                ))
                              : Z("", !0),
                            c.project.type == "A"
                              ? (U(),
                                le(
                                  ae,
                                  { key: 2, cols: "12", md: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          density: "compact",
                                          autocomplete: "off",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          modelValue: d(b).type,
                                          "onUpdate:modelValue":
                                            x[21] ||
                                            (x[21] = (F) => (d(b).type = F)),
                                          items: He,
                                          label: "Tipo*",
                                          rules: d(j),
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
                              : Z("", !0),
                            d(Ee) == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 3, cols: "12", md: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          modelValue: d(b).supplier_id,
                                          "onUpdate:modelValue":
                                            x[22] ||
                                            (x[22] = (F) =>
                                              (d(b).supplier_id = F)),
                                          items: c.suppliers,
                                          "item-title": "name",
                                          "item-value": "id",
                                          readonly: d(w) == !1,
                                          required: "",
                                          label: "Fornitore",
                                          clearable: d(w) == !0,
                                          variant: "outlined",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                        },
                                        null,
                                        8,
                                        [
                                          "class",
                                          "modelValue",
                                          "items",
                                          "readonly",
                                          "clearable",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                            d(Ee) == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 4, cols: "12", sm: "3" },
                                  {
                                    default: m(() => [
                                      g(
                                        et,
                                        {
                                          density: "compact",
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          onKeydown:
                                            x[23] ||
                                            (x[23] = Ne(
                                              (F) => F.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: d(b).genericsupplier,
                                          "onUpdate:modelValue":
                                            x[24] ||
                                            (x[24] = (F) =>
                                              (d(b).genericsupplier = F)),
                                          required: "",
                                          autocomplete: "off",
                                          variant: "outlined",
                                          readonly: d(w) == !1,
                                          "persistent-hint": "",
                                          label: "Fornitore generico",
                                        },
                                        null,
                                        8,
                                        ["class", "modelValue", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                            d(Ee) == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 5, cols: "12", sm: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Dt,
                                        {
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          precision: 2,
                                          density: "compact",
                                          onKeydown: [
                                            x[25] ||
                                              (x[25] = Ne(
                                                (F) => F.preventDefault(),
                                                ["enter"],
                                              )),
                                            X,
                                          ],
                                          modelValue: d(b).suppliercost,
                                          "onUpdate:modelValue":
                                            x[26] ||
                                            (x[26] = (F) =>
                                              (d(b).suppliercost = F)),
                                          autocomplete: "off",
                                          required: "",
                                          variant: "outlined",
                                          readonly: d(w) == !1,
                                          "decimal-separator": ",",
                                          "persistent-hint": "",
                                          label: "Costo fornitore",
                                        },
                                        null,
                                        8,
                                        ["class", "modelValue", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                            d(Ee) == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 6, cols: "12", sm: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Dt,
                                        {
                                          class: wn(d(w) == !1 ? "nodrp" : ""),
                                          density: "compact",
                                          onKeydown: [
                                            x[27] ||
                                              (x[27] = Ne(
                                                (F) => F.preventDefault(),
                                                ["enter"],
                                              )),
                                            X,
                                          ],
                                          modelValue: d(b).supplierprice,
                                          "onUpdate:modelValue":
                                            x[28] ||
                                            (x[28] = (F) =>
                                              (d(b).supplierprice = F)),
                                          required: "",
                                          autocomplete: "off",
                                          variant: "outlined",
                                          readonly: d(w) == !1,
                                          "persistent-hint": "",
                                          "decimal-separator": ",",
                                          precision: 2,
                                          label: "Prezzo fornitore al cliente",
                                        },
                                        null,
                                        8,
                                        ["class", "modelValue", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                          ]),
                          _: 1,
                        }),
                        pn(
                          g(
                            Ge,
                            null,
                            {
                              default: m(() => [
                                g(ae, null, {
                                  default: m(() => [
                                    pn(
                                      I(
                                        "h4",
                                        null,
                                        "Gantt Occupazione tempo",
                                        512,
                                      ),
                                      [[mn, d(y)]],
                                    ),
                                    pn(
                                      I(
                                        "div",
                                        {
                                          ref_key: "ganttContainer",
                                          ref: r,
                                          id: "gantt-chart2",
                                          style: {
                                            zoom: "1.3",
                                            width: "100%",
                                            height: "auto",
                                          },
                                        },
                                        null,
                                        512,
                                      ),
                                      [[mn, d(y)]],
                                    ),
                                    pn(
                                      I(
                                        "div",
                                        null,
                                        [
                                          x[44] ||
                                            (x[44] = I(
                                              "h5",
                                              null,
                                              "Legenda",
                                              -1,
                                            )),
                                          g(
                                            Bt,
                                            {
                                              label: "",
                                              color: "green",
                                              variant: "flat",
                                              class: "mr-2",
                                            },
                                            {
                                              default: m(() => [
                                                ...(x[41] ||
                                                  (x[41] = [
                                                    k("Stato Chiuso", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                          g(
                                            Bt,
                                            {
                                              label: "",
                                              color: "blue",
                                              variant: "flat",
                                              class: "mr-2",
                                            },
                                            {
                                              default: m(() => [
                                                ...(x[42] ||
                                                  (x[42] = [
                                                    k("Stato Completato", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                          g(
                                            Bt,
                                            {
                                              label: "",
                                              color: "orange",
                                              variant: "flat",
                                              class: "mr-2",
                                            },
                                            {
                                              default: m(() => [
                                                ...(x[43] ||
                                                  (x[43] = [
                                                    k("Stato Aperto", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ],
                                        512,
                                      ),
                                      [[mn, d(y) && !d($)]],
                                    ),
                                    pn(
                                      I(
                                        "div",
                                        null,
                                        "Nessuna occupazione in questo periodo",
                                        512,
                                      ),
                                      [[mn, d($) && d(A) > 0]],
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            },
                            512,
                          ),
                          [[mn, d(y) && d(Ee) == !0]],
                        ),
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", sm: "12" },
                              {
                                default: m(() => [
                                  g(
                                    io,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        x[29] ||
                                        (x[29] = Ne(
                                          (F) => F.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(b).note,
                                      "onUpdate:modelValue":
                                        x[30] ||
                                        (x[30] = (F) => (d(b).note = F)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Note",
                                      readonly: d(w) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        d(o).role == "S"
                          ? (U(),
                            me("div", nf, [
                              x[45] ||
                                (x[45] = I(
                                  "h4",
                                  { class: "mb-4" },
                                  "Valori Originali",
                                  -1,
                                )),
                              g(Ge, null, {
                                default: m(() => [
                                  g(
                                    ae,
                                    { cols: "12", md: "3" },
                                    {
                                      default: m(() => [
                                        g(
                                          Dt,
                                          {
                                            density: "compact",
                                            onKeydown: [
                                              x[31] ||
                                                (x[31] = Ne(
                                                  (F) => F.preventDefault(),
                                                  ["enter"],
                                                )),
                                              X,
                                            ],
                                            modelValue: d(b).originalhours,
                                            "onUpdate:modelValue":
                                              x[32] ||
                                              (x[32] = (F) =>
                                                (d(b).originalhours = F)),
                                            required: "",
                                            autocomplete: "off",
                                            variant: "outlined",
                                            min: 0,
                                            precision: 3,
                                            "persistent-hint": "",
                                            "decimal-separator": ",",
                                            label:
                                              "Ore originali (Ore attuali " +
                                              d(b).hours +
                                              ")",
                                          },
                                          null,
                                          8,
                                          ["modelValue", "label"],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  g(
                                    ae,
                                    { cols: "12", md: "3" },
                                    {
                                      default: m(() => [
                                        g(
                                          Ze,
                                          {
                                            autocomplete: "off",
                                            density: "compact",
                                            modelValue:
                                              d(b).originaluserprofile_id,
                                            "onUpdate:modelValue":
                                              x[33] ||
                                              (x[33] = (F) =>
                                                (d(b).originaluserprofile_id =
                                                  F)),
                                            items: c.profiles,
                                            "item-title": "name",
                                            "item-value": "id",
                                            clearable: !0,
                                            "hide-details": "",
                                            label:
                                              "Profilo Professionale Originale",
                                            variant: "outlined",
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
                                  g(
                                    ae,
                                    { cols: "12", md: "3" },
                                    {
                                      default: m(() => [
                                        g(
                                          Dt,
                                          {
                                            density: "compact",
                                            onKeydown: [
                                              x[34] ||
                                                (x[34] = Ne(
                                                  (F) => F.preventDefault(),
                                                  ["enter"],
                                                )),
                                              X,
                                            ],
                                            modelValue: d(b).originalcost,
                                            "onUpdate:modelValue":
                                              x[35] ||
                                              (x[35] = (F) =>
                                                (d(b).originalcost = F)),
                                            required: "",
                                            autocomplete: "off",
                                            variant: "outlined",
                                            min: 0,
                                            precision: 3,
                                            "decimal-separator": ",",
                                            "persistent-hint": "",
                                            label:
                                              "Costo originale (Costo attuale " +
                                              d(b).cost +
                                              ")",
                                          },
                                          null,
                                          8,
                                          ["modelValue", "label"],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  g(
                                    ae,
                                    { cols: "12", md: "3" },
                                    {
                                      default: m(() => [
                                        g(
                                          Dt,
                                          {
                                            density: "compact",
                                            onKeydown: [
                                              x[36] ||
                                                (x[36] = Ne(
                                                  (F) => F.preventDefault(),
                                                  ["enter"],
                                                )),
                                              X,
                                            ],
                                            modelValue: d(b).originalprice,
                                            "onUpdate:modelValue":
                                              x[37] ||
                                              (x[37] = (F) =>
                                                (d(b).originalprice = F)),
                                            required: "",
                                            autocomplete: "off",
                                            variant: "outlined",
                                            min: 0,
                                            precision: 3,
                                            "decimal-separator": ",",
                                            "persistent-hint": "",
                                            label:
                                              "Prezzo originale (Prezzo attuale " +
                                              d(b).price +
                                              ")",
                                          },
                                          null,
                                          8,
                                          ["modelValue", "label"],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]))
                          : Z("", !0),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"],
                  ),
                  d(N).length > 0 && c.idrec > 0 && c.clone == 0
                    ? (U(),
                      me("div", of, [
                        x[51] || (x[51] = I("h3", null, "Ore eseguite", -1)),
                        g(
                          Wn,
                          {
                            density: "compact",
                            items: d(N),
                            headers: D,
                            search: d(C),
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
                            top: m(() => [...(x[46] || (x[46] = []))]),
                            "body.append": m(() => [
                              I("tr", rf, [
                                x[47] ||
                                  (x[47] = I(
                                    "td",
                                    { colspan: "2" },
                                    "Totale ore",
                                    -1,
                                  )),
                                I("td", af, z(d(G)), 1),
                                x[48] ||
                                  (x[48] = I("td", { colspan: "4" }, null, -1)),
                              ]),
                              I("tr", sf, [
                                x[49] ||
                                  (x[49] = I(
                                    "td",
                                    { colspan: "2" },
                                    "Totale giorni",
                                    -1,
                                  )),
                                I("td", lf, [
                                  I(
                                    "span",
                                    {
                                      style: Gt(
                                        d(S) - d(G) / 8 <= 0
                                          ? "color:red"
                                          : d(S) - d(G) / 8 <= 1
                                            ? "color:orange"
                                            : "color:green",
                                      ),
                                    },
                                    z(d(G) / 8),
                                    5,
                                  ),
                                  k("/" + z(d(S)), 1),
                                ]),
                                x[50] ||
                                  (x[50] = I("td", { colspan: "4" }, null, -1)),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["items", "search"],
                        ),
                      ]))
                    : Z("", !0),
                  I("div", uf, z(d(Be)), 1),
                  x[54] || (x[54] = I("br", null, null, -1)),
                  I("div", df, [
                    g(
                      Oe,
                      { class: "", onClick: St, color: "red" },
                      {
                        default: m(() => [
                          ...(x[52] || (x[52] = [k(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
                    g(
                      Oe,
                      {
                        onClick: Fe,
                        disabled: !d(v) || d(v) == null || d(w) == !1 || !d(p),
                        color: "green",
                      },
                      {
                        default: m(() => [
                          ...(x[53] || (x[53] = [k("Salva", -1)])),
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
  ff = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  pf = { style: { "font-size": "12px" } },
  mf = { style: { display: "flex" } },
  vf = {
    __name: "DialogInsMultipleTask",
    props: {
      dialoginsmod: Boolean,
      suppliers: Array,
      project: Object,
      profiles: Array,
      users: Array,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const n = () => ({
          internalactivity: !0,
          type: "F",
          name: null,
          description: null,
          budgetday: 0,
          profile: null,
          supplier: null,
          genericsupplier: null,
          suppliercost: 0,
          supplierprice: 0,
        }),
        a = [
          { label: "Costi Fissi", value: "F" },
          { label: "Costi Variabili", value: "V" },
          { label: "Costi Personale", value: "P" },
        ],
        r = V(Array.from({ length: 1 }, n)),
        s = () => {
          r.value.push(n());
        },
        o = (N) => {
          let D = { ...r.value[N] };
          console.log(D), r.value.push(D);
        },
        u = (N) => {
          r.value.splice(N, 1);
        },
        l = V(!0),
        { data: i } = Qn(),
        c = jo();
      yr();
      const p = Er(),
        y = t,
        E = e,
        v = V(!1),
        h = V(!1),
        b = Zn("snackbar"),
        S = V([(N) => !!N || "Campo obbligatorio"]),
        T = async () => {
          l.value = !1;
          let N = { project_id: p.query.id, tasks: r.value };
          await De(c.public.apiBaseurl + "task/createmultiple", {
            method: "POST",
            body: N,
          })
            .then(() => {
              (b.value = {
                text: "Creazione tasks completata",
                type: "success",
                show: !0,
              }),
                (l.value = !0),
                $();
            })
            .catch((D) => {
              let H = JSON.parse(D.data).errors.title;
              console.log("catcherr", D.data),
                (b.value = { text: H, type: "danger", show: !0 }),
                (l.value = !0);
            });
        };
      function $() {
        y("close");
      }
      function C(N) {
        if (N.key === ".") {
          N.preventDefault();
          const D = N.target,
            H = D.selectionStart,
            j = D.selectionEnd,
            O = D.value;
          (D.value = O.substring(0, H) + "," + O.substring(j)),
            D.setSelectionRange(H + 1, H + 1),
            D.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      return (
        qn(async () => {
          v.value = !0;
        }),
        (N, D) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: $,
              modelValue: v.value,
              "onUpdate:modelValue": D[7] || (D[7] = (H) => (v.value = H)),
              width: "auto",
              style: { "max-width": "98%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", ff, [
                  D[12] ||
                    (D[12] = I(
                      "h2",
                      { vclass: "pb-10 pageh2" },
                      "Inserimento multiplo Task",
                      -1,
                    )),
                  g(
                    Es,
                    {
                      modelValue: h.value,
                      "onUpdate:modelValue":
                        D[6] || (D[6] = (H) => (h.value = H)),
                      ref: "form",
                      "lazy-validation": "",
                      onSubmit: sl(T, ["prevent"]),
                    },
                    {
                      default: m(() => [
                        (U(!0),
                        me(
                          ga,
                          null,
                          hs(
                            r.value,
                            (H, j) => (
                              U(),
                              le(
                                Ge,
                                { key: j, class: "mt-0" },
                                {
                                  default: m(() => [
                                    g(
                                      ae,
                                      { cols: "1" },
                                      {
                                        default: m(() => [
                                          g(
                                            co,
                                            {
                                              color: "green",
                                              baseColor: "blue",
                                              modelValue: H.internalactivity,
                                              "onUpdate:modelValue": (O) =>
                                                (H.internalactivity = O),
                                              "hide-details": "",
                                              inset: "",
                                              density: "compact",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                            ],
                                          ),
                                          I(
                                            "span",
                                            pf,
                                            z(
                                              H.internalactivity == !0
                                                ? "Interno"
                                                : "Esterno",
                                            ),
                                            1,
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    g(
                                      ae,
                                      { cols: "1" },
                                      {
                                        default: m(() => [
                                          g(
                                            Ze,
                                            {
                                              density: "compact",
                                              autocomplete: "off",
                                              "no-data-text":
                                                "Nessun risultato trovato",
                                              modelValue: H.type,
                                              "onUpdate:modelValue": (O) =>
                                                (H.type = O),
                                              items: a,
                                              label: "Tipo*",
                                              rules: S.value,
                                              variant: "outlined",
                                              "item-title": "label",
                                              "item-value": "value",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "rules",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    g(
                                      ae,
                                      { cols: "2" },
                                      {
                                        default: m(() => [
                                          g(
                                            et,
                                            {
                                              density: "compact",
                                              onKeydown:
                                                D[0] ||
                                                (D[0] = Ne(
                                                  (O) => O.preventDefault(),
                                                  ["enter"],
                                                )),
                                              modelValue: H.name,
                                              "onUpdate:modelValue": (O) =>
                                                (H.name = O),
                                              autocomplete: "off",
                                              required: "",
                                              rules: S.value,
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              label: `Nome* - Task ${j + 1}`,
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "rules",
                                              "label",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    g(
                                      ae,
                                      {
                                        cols: H.internalactivity == !0 ? 3 : 1,
                                      },
                                      {
                                        default: m(() => [
                                          g(
                                            et,
                                            {
                                              density: "compact",
                                              onKeydown:
                                                D[1] ||
                                                (D[1] = Ne(
                                                  (O) => O.preventDefault(),
                                                  ["enter"],
                                                )),
                                              modelValue: H.description,
                                              "onUpdate:modelValue": (O) =>
                                                (H.description = O),
                                              autocomplete: "off",
                                              required: "",
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              label: "Descrizione",
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
                                      ["cols"],
                                    ),
                                    H.internalactivity == !0
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 0, cols: "2" },
                                          {
                                            default: m(() => [
                                              g(
                                                Dt,
                                                {
                                                  density: "compact",
                                                  onKeydown: [
                                                    D[2] ||
                                                      (D[2] = Ne(
                                                        (O) =>
                                                          O.preventDefault(),
                                                        ["enter"],
                                                      )),
                                                    C,
                                                  ],
                                                  modelValue: H.budgetday,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.budgetday = O),
                                                  required: "",
                                                  autocomplete: "off",
                                                  rules: S.value,
                                                  variant: "outlined",
                                                  min: 0,
                                                  precision: 1,
                                                  "decimal-separator": ",",
                                                  "persistent-hint": "",
                                                  label: "Giornate a budget*",
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "onUpdate:modelValue",
                                                  "rules",
                                                ],
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024,
                                        ))
                                      : Z("", !0),
                                    H.internalactivity == !0
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 1, cols: "2" },
                                          {
                                            default: m(() => [
                                              g(
                                                Ze,
                                                {
                                                  autocomplete: "off",
                                                  density: "compact",
                                                  modelValue: H.profile,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.profile = O),
                                                  items: E.profiles,
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  clearable: !0,
                                                  "hide-details": "",
                                                  label:
                                                    "Profilo Professionale",
                                                  variant: "outlined",
                                                  "no-data-text":
                                                    "Nessun risultato trovato",
                                                },
                                                null,
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
                                        ))
                                      : Z("", !0),
                                    H.internalactivity == !1
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 2, cols: "12", md: "2" },
                                          {
                                            default: m(() => [
                                              g(
                                                Ze,
                                                {
                                                  autocomplete: "off",
                                                  density: "compact",
                                                  modelValue: H.supplier,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.supplier = O),
                                                  items: E.suppliers,
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  required: "",
                                                  label: "Fornitore",
                                                  clearable: !0,
                                                  variant: "outlined",
                                                  "no-data-text":
                                                    "Nessun risultato trovato",
                                                },
                                                null,
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
                                        ))
                                      : Z("", !0),
                                    H.internalactivity == !1
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 3, cols: "12", sm: "2" },
                                          {
                                            default: m(() => [
                                              g(
                                                et,
                                                {
                                                  density: "compact",
                                                  onKeydown:
                                                    D[3] ||
                                                    (D[3] = Ne(
                                                      (O) => O.preventDefault(),
                                                      ["enter"],
                                                    )),
                                                  modelValue: H.genericsupplier,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.genericsupplier = O),
                                                  required: "",
                                                  autocomplete: "off",
                                                  variant: "outlined",
                                                  "persistent-hint": "",
                                                  label: "Fornitore generico",
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
                                        ))
                                      : Z("", !0),
                                    H.internalactivity == !1
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 4, cols: "12", sm: "1" },
                                          {
                                            default: m(() => [
                                              g(
                                                et,
                                                {
                                                  precision: 2,
                                                  density: "compact",
                                                  onKeydown:
                                                    D[4] ||
                                                    (D[4] = Ne(
                                                      (O) => O.preventDefault(),
                                                      ["enter"],
                                                    )),
                                                  modelValue: H.suppliercost,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.suppliercost = O),
                                                  autocomplete: "off",
                                                  required: "",
                                                  variant: "outlined",
                                                  "persistent-hint": "",
                                                  label: "Costo fornitore",
                                                  type: "number",
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
                                        ))
                                      : Z("", !0),
                                    H.internalactivity == !1
                                      ? (U(),
                                        le(
                                          ae,
                                          { key: 5, cols: "12", sm: "1" },
                                          {
                                            default: m(() => [
                                              g(
                                                et,
                                                {
                                                  precision: 2,
                                                  density: "compact",
                                                  onKeydown:
                                                    D[5] ||
                                                    (D[5] = Ne(
                                                      (O) => O.preventDefault(),
                                                      ["enter"],
                                                    )),
                                                  modelValue: H.supplierprice,
                                                  "onUpdate:modelValue": (O) =>
                                                    (H.supplierprice = O),
                                                  required: "",
                                                  autocomplete: "off",
                                                  variant: "outlined",
                                                  "persistent-hint": "",
                                                  type: "number",
                                                  label:
                                                    "Prezzo fornitore al cliente",
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
                                        ))
                                      : Z("", !0),
                                    g(
                                      ae,
                                      { cols: "1" },
                                      {
                                        default: m(() => [
                                          g(
                                            Se,
                                            {
                                              class: "mt-2 mr-3",
                                              color: "error",
                                              title: "Rimuovi Riga",
                                              onClick: (O) => u(j),
                                            },
                                            {
                                              default: m(() => [
                                                ...(D[8] ||
                                                  (D[8] = [
                                                    k("mdi-delete", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["onClick"],
                                          ),
                                          g(
                                            Se,
                                            {
                                              class: "mt-2",
                                              color: "black",
                                              title: "Duplica Riga",
                                              onClick: (O) => o(j),
                                            },
                                            {
                                              default: m(() => [
                                                ...(D[9] ||
                                                  (D[9] = [
                                                    k("mdi-content-copy", -1),
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
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { class: "text-center" },
                              {
                                default: m(() => [
                                  g(Oe, {
                                    icon: "mdi-plus",
                                    color: "primary",
                                    title: "Aggiungi Riga",
                                    onClick: s,
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
                    8,
                    ["modelValue"],
                  ),
                  D[13] || (D[13] = I("br", null, null, -1)),
                  I("div", mf, [
                    g(
                      Oe,
                      { class: "", onClick: $, color: "red" },
                      {
                        default: m(() => [
                          ...(D[10] || (D[10] = [k(" Annulla ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
                    g(
                      Oe,
                      {
                        onClick: T,
                        disabled: !h.value || !l.value,
                        color: "green",
                      },
                      {
                        default: m(() => [
                          ...(D[11] || (D[11] = [k("Salva", -1)])),
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
  gf = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  hf = { key: 0 },
  yf = { class: "font-weight-bold bg-grey-lighten-4" },
  Ef = { class: "text-start" },
  bf = { class: "font-weight-bold bg-grey-lighten-4" },
  Sf = { class: "text-start" },
  Tf = { style: { display: "flex" } },
  If = {
    __name: "DialogViewHTask",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      suppliers: Array,
      clone: Number,
      project: Object,
      profiles: Array,
      users: Array,
      activities: Array,
      historytask: Object,
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: n } = Qn();
      yr(), Er();
      const a = t,
        r = e,
        s = V(0),
        o = V([]);
      V(null);
      const u = V(!1),
        l = V(!1);
      Zn("snackbar");
      const i = V({ id: 0, openstatus: !0 }),
        c = V(0),
        p = V(""),
        y = V([]),
        E = [
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
        v = [
          { label: "Costi Fissi", value: "F" },
          { label: "Costi Variabili", value: "V" },
          { label: "Costi Personale", value: "P" },
        ],
        h = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
        ];
      function b() {
        a("close");
      }
      function S($) {
        const [C, N] = $.split(" "),
          [D, H, j] = C.split("-"),
          [O, Y, te] = N.split(":");
        return `${j}-${H}-${D} ${O}:${Y}:${te}`;
      }
      function T($, C) {
        const N = new Date($);
        return (new Date(C).getTime() - N.getTime()) / (1e3 * 60 * 60);
      }
      return (
        qn(async () => {
          (u.value = !0),
            (i.value = r.historytask),
            (i.value.esecutivo = i.value.esecutivo == 1),
            (i.value.userprofile_id =
              i.value.userprofile_id == 0 ? null : i.value.userprofile_id),
            (i.value.user_id = i.value.user_id == 0 ? null : i.value.user_id),
            (i.value.activity_id =
              i.value.activity_id == 0 ? null : i.value.activity_id),
            (c.value = i.value.hours / 8),
            (i.value.internalactivity = i.value.internalactivity == 1),
            (o.value = i.value.activities_id),
            i.value.Hour[0].forEach(($) => {
              (s.value = s.value + T($.Hour.startdate, $.Hour.enddate)),
                y.value.push({
                  id: $.Hour.id,
                  user: $.User.firstname + " " + $.User.lastname,
                  startdate: S($.Hour.startdate),
                  enddate: S($.Hour.enddate),
                  description: $.Hour.description,
                  totore: T($.Hour.startdate, $.Hour.enddate),
                  activity: $.Activity ? $.Activity.name : "",
                });
            });
        }),
        ($, C) => (
          U(),
          le(
            tn,
            {
              class: "modaldialog",
              onAfterLeave: b,
              modelValue: d(u),
              "onUpdate:modelValue":
                C[26] || (C[26] = (N) => (Ve(u) ? (u.value = N) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: m(() => [
                I("div", gf, [
                  C[34] ||
                    (C[34] = I(
                      "h2",
                      { class: "pb-10 pageh2" },
                      "Dettagli Task",
                      -1,
                    )),
                  g(
                    Es,
                    {
                      modelValue: d(l),
                      "onUpdate:modelValue":
                        C[25] ||
                        (C[25] = (N) => (Ve(l) ? (l.value = N) : null)),
                      ref: "form",
                    },
                    {
                      default: m(() => [
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", sm: "4" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        C[0] ||
                                        (C[0] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(i).shortname,
                                      "onUpdate:modelValue":
                                        C[1] ||
                                        (C[1] = (N) => (d(i).shortname = N)),
                                      required: "",
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
                            g(
                              ae,
                              { cols: "12", sm: "6" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        C[2] ||
                                        (C[2] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(i).description,
                                      "onUpdate:modelValue":
                                        C[3] ||
                                        (C[3] = (N) => (d(i).description = N)),
                                      required: "",
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
                            g(
                              ae,
                              { cols: "12", md: "2" },
                              {
                                default: m(() => [
                                  g(
                                    co,
                                    {
                                      color: "green",
                                      baseColor: "red",
                                      density: "compact",
                                      modelValue: d(i).esecutivo,
                                      "onUpdate:modelValue":
                                        C[4] ||
                                        (C[4] = (N) => (d(i).esecutivo = N)),
                                      readonly: "",
                                      label:
                                        "Esecutivo: " +
                                        (d(i).esecutivo == !0 ? "SI" : "NO"),
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
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        C[5] ||
                                        (C[5] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(i).startdate,
                                      "onUpdate:modelValue":
                                        C[6] ||
                                        (C[6] = (N) => (d(i).startdate = N)),
                                      required: "",
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
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      variant: "outlined",
                                      onKeydown:
                                        C[7] ||
                                        (C[7] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(i).enddate,
                                      "onUpdate:modelValue":
                                        C[8] ||
                                        (C[8] = (N) => (d(i).enddate = N)),
                                      required: "",
                                      "input-format": "dd/MM/YYYY",
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
                            g(
                              ae,
                              { cols: "12", sm: "3" },
                              {
                                default: m(() => [
                                  g(
                                    et,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        C[9] ||
                                        (C[9] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(c),
                                      "onUpdate:modelValue":
                                        C[10] ||
                                        (C[10] = (N) =>
                                          Ve(c) ? (c.value = N) : null),
                                      required: "",
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
                            g(
                              ae,
                              { cols: "12", md: "3" },
                              {
                                default: m(() => [
                                  g(
                                    Ze,
                                    {
                                      autocomplete: "off",
                                      density: "compact",
                                      modelValue: d(i).status,
                                      "onUpdate:modelValue":
                                        C[11] ||
                                        (C[11] = (N) => (d(i).status = N)),
                                      items: h,
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
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", md: "2" },
                              {
                                default: m(() => [
                                  g(
                                    co,
                                    {
                                      color: "green",
                                      baseColor: "blue",
                                      modelValue: d(i).internalactivity,
                                      "onUpdate:modelValue":
                                        C[12] ||
                                        (C[12] = (N) =>
                                          (d(i).internalactivity = N)),
                                      label:
                                        "Task Interno: " +
                                        (d(i).internalactivity == !0
                                          ? "SI"
                                          : "NO"),
                                      "hide-details": "",
                                      inset: "",
                                      density: "compact",
                                      readonly: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "label"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            d(i).internalactivity == !0
                              ? (U(),
                                le(
                                  ae,
                                  { key: 0, cols: "12", md: "4" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: d(i).userprofile_id,
                                          "onUpdate:modelValue":
                                            C[13] ||
                                            (C[13] = (N) =>
                                              (d(i).userprofile_id = N)),
                                          items: r.profiles,
                                          "item-title": "name",
                                          "item-value": "id",
                                          required: "",
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
                              : Z("", !0),
                            d(i).internalactivity == !0
                              ? (U(),
                                le(
                                  ae,
                                  { key: 1, cols: "12", md: "4" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: d(i).user_id,
                                          "onUpdate:modelValue":
                                            C[14] ||
                                            (C[14] = (N) => (d(i).user_id = N)),
                                          items: r.users,
                                          "item-title": "name",
                                          "item-value": "id",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          required: "",
                                          label: "Assegnatario",
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
                              : Z("", !0),
                            e.project.type == "A"
                              ? (U(),
                                le(
                                  ae,
                                  { key: 2, cols: "12", md: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          density: "compact",
                                          autocomplete: "off",
                                          "no-data-text":
                                            "Nessun risultato trovato",
                                          modelValue: d(i).type,
                                          "onUpdate:modelValue":
                                            C[15] ||
                                            (C[15] = (N) => (d(i).type = N)),
                                          items: v,
                                          label: "Tipo*",
                                          rules: $.textRules,
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
                              : Z("", !0),
                            d(i).internalactivity == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 3, cols: "12", md: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        Ze,
                                        {
                                          autocomplete: "off",
                                          density: "compact",
                                          modelValue: d(i).supplier_id,
                                          "onUpdate:modelValue":
                                            C[16] ||
                                            (C[16] = (N) =>
                                              (d(i).supplier_id = N)),
                                          items: r.suppliers,
                                          "item-title": "name",
                                          "item-value": "id",
                                          required: "",
                                          label: "Fornitore",
                                          clearable: "",
                                          variant: "outlined",
                                          readonly: "",
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
                                ))
                              : Z("", !0),
                            d(i).internalactivity == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 4, cols: "12", sm: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        et,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            C[17] ||
                                            (C[17] = Ne(
                                              (N) => N.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: d(i).genericsupplier,
                                          "onUpdate:modelValue":
                                            C[18] ||
                                            (C[18] = (N) =>
                                              (d(i).genericsupplier = N)),
                                          required: "",
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
                              : Z("", !0),
                            d(i).internalactivity == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 5, cols: "12", sm: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        et,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            C[19] ||
                                            (C[19] = Ne(
                                              (N) => N.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: d(i).suppliercost,
                                          "onUpdate:modelValue":
                                            C[20] ||
                                            (C[20] = (N) =>
                                              (d(i).suppliercost = N)),
                                          required: "",
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
                              : Z("", !0),
                            d(i).internalactivity == !1
                              ? (U(),
                                le(
                                  ae,
                                  { key: 6, cols: "12", sm: "2" },
                                  {
                                    default: m(() => [
                                      g(
                                        et,
                                        {
                                          density: "compact",
                                          onKeydown:
                                            C[21] ||
                                            (C[21] = Ne(
                                              (N) => N.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: d(i).supplierprice,
                                          "onUpdate:modelValue":
                                            C[22] ||
                                            (C[22] = (N) =>
                                              (d(i).supplierprice = N)),
                                          required: "",
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
                              : Z("", !0),
                          ]),
                          _: 1,
                        }),
                        g(Ge, null, {
                          default: m(() => [
                            g(
                              ae,
                              { cols: "12", sm: "12" },
                              {
                                default: m(() => [
                                  g(
                                    io,
                                    {
                                      density: "compact",
                                      onKeydown:
                                        C[23] ||
                                        (C[23] = Ne(
                                          (N) => N.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: d(i).note,
                                      "onUpdate:modelValue":
                                        C[24] ||
                                        (C[24] = (N) => (d(i).note = N)),
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
                  d(y).length > 0
                    ? (U(),
                      me("div", hf, [
                        C[32] || (C[32] = I("h3", null, "Ore eseguite", -1)),
                        g(
                          Wn,
                          {
                            density: "compact",
                            items: d(y),
                            headers: E,
                            search: d(p),
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
                            top: m(() => [...(C[27] || (C[27] = []))]),
                            "body.append": m(() => [
                              I("tr", yf, [
                                C[28] ||
                                  (C[28] = I(
                                    "td",
                                    { colspan: "2" },
                                    "Totale ore",
                                    -1,
                                  )),
                                I("td", Ef, z(d(s)), 1),
                                C[29] ||
                                  (C[29] = I("td", { colspan: "4" }, null, -1)),
                              ]),
                              I("tr", bf, [
                                C[30] ||
                                  (C[30] = I(
                                    "td",
                                    { colspan: "2" },
                                    "Totale giorni",
                                    -1,
                                  )),
                                I("td", Sf, [
                                  I(
                                    "span",
                                    {
                                      style: Gt(
                                        d(c) - d(s) / 8 <= 0
                                          ? "color:red"
                                          : d(c) - d(s) / 8 <= 1
                                            ? "color:orange"
                                            : "color:green",
                                      ),
                                    },
                                    z(d(s) / 8),
                                    5,
                                  ),
                                  k("/" + z(d(c)), 1),
                                ]),
                                C[31] ||
                                  (C[31] = I("td", { colspan: "4" }, null, -1)),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["items", "search"],
                        ),
                      ]))
                    : Z("", !0),
                  C[35] || (C[35] = I("br", null, null, -1)),
                  I("div", Tf, [
                    g(
                      Oe,
                      { class: "", onClick: b, color: "red" },
                      {
                        default: m(() => [
                          ...(C[33] || (C[33] = [k(" Chiudi ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    g(en),
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
  Cf = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Of = ["title"],
  xf = { style: { display: "flex" } },
  Nf = {
    __name: "DialogViewHistory",
    props: { dialoginsmod: Boolean, caneditproject: Boolean, project: Object },
    emits: ["close"],
    setup(e, { emit: t }) {
      const { data: n } = Qn(),
        a = yr();
      Er();
      const r = jo(),
        s = t,
        o = e,
        u = V(!1);
      V(!1);
      const l = Zn("snackbar"),
        i = V(""),
        c = V([]),
        p = V(!0),
        y = V([]),
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
        v = [
          { title: "Data", key: "created", sortable: !0, align: "left" },
          {
            title: "Creato da",
            key: "created_by",
            sortable: !0,
            align: "left",
          },
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
          { title: "Azioni", key: "actions", sortable: !0, align: "left" },
        ],
        h = {
          C: "Creazione Progetto",
          P: "Pulsante",
          O: "Cambio Owner/s",
          S: "Cambio Stato",
        };
      function b() {
        s("close");
      }
      function S(N) {
        b(), a.push("/tasks?id=" + o.project.id + "&storico=" + N);
      }
      const T = () => {
          c.value = [];
          const { data: N } = De(
            r.public.apiBaseurl + "projecthistory/list/" + o.project.id,
            {
              onRequest({ request: D, options: H }) {},
              onRequestError({ request: D, options: H, error: j }) {
                console.log("Errore nella request:", j),
                  (l.value = {
                    text: "Errore: " + j,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: D, response: H, options: j }) {
                console.log(
                  "Errore nella response: " + H._data.error.messages[0],
                ),
                  (l.value = {
                    text: "Errore caricamento utente",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: D, response: H, options: j }) {
                H._data.data.forEach((O) => {
                  O.user_id == 0
                    ? (O.created_by = "Automatico")
                    : (O.created_by = y.value[O.user_id]),
                    (O.newvaluecoded =
                      O.type == "S"
                        ? E.filter(({ code: Y }) => Y === O.newvalue)
                            .map(({ name: Y }) => Y)
                            .slice(0, 1)
                            .shift()
                        : O.newvalue),
                    (O.oldvaluecoded =
                      O.type == "S"
                        ? E.filter(({ code: Y }) => Y === O.oldvalue)
                            .map(({ name: Y }) => Y)
                            .slice(0, 1)
                            .shift()
                        : O.oldvalue),
                    c.value.push(O);
                });
              },
            },
          );
        },
        $ = async () => {
          y.value = [];
          const { data: N } = await De(r.public.apiBaseurl + "user/list", {
            onRequest({ request: D, options: H }) {},
            onRequestError({ request: D, options: H, error: j }) {
              console.log("Errore nella request:", j);
            },
            onResponseError({ request: D, response: H, options: j }) {
              l.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: D, response: H, options: j }) {
              H._data.data.forEach((Y) => {
                y.value[Y.id] = "[" + Y.acronym + "]";
              });
            },
          });
        };
      function C(N) {
        const { data: D } = De(
          r.public.apiBaseurl + "projecthistory/delete/" + N,
          {
            onRequest({ request: H, options: j }) {},
            onRequestError({ request: H, options: j, error: O }) {
              console.log("Errore nella request:", O);
            },
            onResponseError({ request: H, response: j, options: O }) {
              l.value = {
                text: "Errore cancellazione storico progetto",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: H, response: j, options: O }) {
              (l.value = {
                text: "Storico progetto eliminato",
                type: "success",
                show: !0,
              }),
                T();
            },
          },
        );
      }
      return (
        qn(async () => {
          (u.value = !0), await $(), T();
        }),
        (N, D) => {
          const H = dl;
          return (
            U(),
            le(
              tn,
              {
                class: "modaldialog",
                onAfterLeave: b,
                modelValue: d(u),
                "onUpdate:modelValue":
                  D[0] || (D[0] = (j) => (Ve(u) ? (u.value = j) : null)),
                width: "auto",
                style: { "max-width": "800px", "min-width": "60%" },
                persistent: "",
              },
              {
                default: m(() => [
                  I("div", Cf, [
                    D[4] ||
                      (D[4] = I(
                        "h2",
                        { class: "pb-10 pageh2" },
                        "Storico progetto",
                        -1,
                      )),
                    g(
                      Wn,
                      {
                        density: "compact",
                        items: d(c),
                        headers: v,
                        search: d(i),
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
                        top: m(() => [...(D[1] || (D[1] = []))]),
                        "item.created": m(({ item: j }) => [
                          I(
                            "span",
                            { title: j.id },
                            z(new Date(j.created).toLocaleDateString("it-IT")) +
                              " " +
                              z(
                                new Date(j.created).toLocaleTimeString("it-IT"),
                              ),
                            9,
                            Of,
                          ),
                        ]),
                        "item.type": m(({ item: j }) => [k(z(h[j.type]), 1)]),
                        "item.actions": m(({ item: j }) => [
                          g(
                            Se,
                            {
                              class: "me-2",
                              size: "large",
                              onClick: (O) => S(j.id),
                            },
                            {
                              default: m(() => [
                                ...(D[2] || (D[2] = [k("mdi-eye", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"],
                          ),
                          o.caneditproject
                            ? (U(),
                              le(
                                H,
                                {
                                  key: 0,
                                  iconadelete: d(p),
                                  onDelete: (O) => C(j.id),
                                  color: "red",
                                  text: "Vuoi veramente eliminare questo  storico?",
                                },
                                null,
                                8,
                                ["iconadelete", "onDelete"],
                              ))
                            : Z("", !0),
                        ]),
                        _: 1,
                      },
                      8,
                      ["items", "search"],
                    ),
                    D[5] || (D[5] = I("br", null, null, -1)),
                    I("div", xf, [
                      g(
                        Oe,
                        { color: "red", class: "", onClick: b },
                        {
                          default: m(() => [
                            ...(D[3] || (D[3] = [k(" Chiudi ", -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                      g(en),
                    ]),
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
function Oi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function In(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Oi(Object(n), !0).forEach(function (a) {
          wf(e, a, n[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Oi(Object(n)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
          });
  }
  return e;
}
function Xr(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xr = function (t) {
          return typeof t;
        })
      : (Xr = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Xr(e)
  );
}
function wf(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function on() {
  return (
    (on =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }),
    on.apply(this, arguments)
  );
}
function Df(e, t) {
  if (e == null) return {};
  var n = {},
    a = Object.keys(e),
    r,
    s;
  for (s = 0; s < a.length; s++)
    (r = a[s]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Af(e, t) {
  if (e == null) return {};
  var n = Df(e, t),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (a = s[r]),
        !(t.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, a) &&
          (n[a] = e[a]);
  }
  return n;
}
function Pf(e) {
  return Rf(e) || kf(e) || Vf(e) || Mf();
}
function Rf(e) {
  if (Array.isArray(e)) return ss(e);
}
function kf(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Vf(e, t) {
  if (e) {
    if (typeof e == "string") return ss(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ss(e, t);
  }
}
function ss(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Mf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Lf = "1.14.0";
function kn(e) {
  if (typeof window < "u" && window.navigator)
    return !!navigator.userAgent.match(e);
}
var Ln = kn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  br = kn(/Edge/i),
  xi = kn(/firefox/i),
  ir = kn(/safari/i) && !kn(/chrome/i) && !kn(/android/i),
  pl = kn(/iP(ad|od|hone)/i),
  Ff = kn(/chrome/i) && kn(/android/i),
  ml = { capture: !1, passive: !1 };
function Re(e, t, n) {
  e.addEventListener(t, n, !Ln && ml);
}
function we(e, t, n) {
  e.removeEventListener(t, n, !Ln && ml);
}
function ra(e, t) {
  if (t) {
    if ((t[0] === ">" && (t = t.substring(1)), e))
      try {
        if (e.matches) return e.matches(t);
        if (e.msMatchesSelector) return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function $f(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function fn(e, t, n, a) {
  if (e) {
    n = n || document;
    do {
      if (
        (t != null &&
          (t[0] === ">" ? e.parentNode === n && ra(e, t) : ra(e, t))) ||
        (a && e === n)
      )
        return e;
      if (e === n) break;
    } while ((e = $f(e)));
  }
  return null;
}
var Ni = /\s+/g;
function _e(e, t, n) {
  if (e && t)
    if (e.classList) e.classList[n ? "add" : "remove"](t);
    else {
      var a = (" " + e.className + " ")
        .replace(Ni, " ")
        .replace(" " + t + " ", " ");
      e.className = (a + (n ? " " + t : "")).replace(Ni, " ");
    }
}
function ve(e, t, n) {
  var a = e && e.style;
  if (a) {
    if (n === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (n = document.defaultView.getComputedStyle(e, ""))
          : e.currentStyle && (n = e.currentStyle),
        t === void 0 ? n : n[t]
      );
    !(t in a) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t),
      (a[t] = n + (typeof n == "string" ? "" : "px"));
  }
}
function lo(e, t) {
  var n = "";
  if (typeof e == "string") n = e;
  else
    do {
      var a = ve(e, "transform");
      a && a !== "none" && (n = a + " " + n);
    } while (!t && (e = e.parentNode));
  var r =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return r && new r(n);
}
function vl(e, t, n) {
  if (e) {
    var a = e.getElementsByTagName(t),
      r = 0,
      s = a.length;
    if (n) for (; r < s; r++) n(a[r], r);
    return a;
  }
  return [];
}
function Tn() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Qe(e, t, n, a, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var s, o, u, l, i, c, p;
    if (
      (e !== window && e.parentNode && e !== Tn()
        ? ((s = e.getBoundingClientRect()),
          (o = s.top),
          (u = s.left),
          (l = s.bottom),
          (i = s.right),
          (c = s.height),
          (p = s.width))
        : ((o = 0),
          (u = 0),
          (l = window.innerHeight),
          (i = window.innerWidth),
          (c = window.innerHeight),
          (p = window.innerWidth)),
      (t || n) && e !== window && ((r = r || e.parentNode), !Ln))
    )
      do
        if (
          r &&
          r.getBoundingClientRect &&
          (ve(r, "transform") !== "none" ||
            (n && ve(r, "position") !== "static"))
        ) {
          var y = r.getBoundingClientRect();
          (o -= y.top + parseInt(ve(r, "border-top-width"))),
            (u -= y.left + parseInt(ve(r, "border-left-width"))),
            (l = o + s.height),
            (i = u + s.width);
          break;
        }
      while ((r = r.parentNode));
    if (a && e !== window) {
      var E = lo(r || e),
        v = E && E.a,
        h = E && E.d;
      E && ((o /= h), (u /= v), (p /= v), (c /= h), (l = o + c), (i = u + p));
    }
    return { top: o, left: u, bottom: l, right: i, width: p, height: c };
  }
}
function wi(e, t, n) {
  for (var a = zn(e, !0), r = Qe(e)[t]; a; ) {
    var s = Qe(a)[n],
      o = void 0;
    if (((o = r >= s), !o)) return a;
    if (a === Tn()) break;
    a = zn(a, !1);
  }
  return !1;
}
function ko(e, t, n, a) {
  for (var r = 0, s = 0, o = e.children; s < o.length; ) {
    if (
      o[s].style.display !== "none" &&
      o[s] !== ye.ghost &&
      (a || o[s] !== ye.dragged) &&
      fn(o[s], n.draggable, e, !1)
    ) {
      if (r === t) return o[s];
      r++;
    }
    s++;
  }
  return null;
}
function bs(e, t) {
  for (
    var n = e.lastElementChild;
    n && (n === ye.ghost || ve(n, "display") === "none" || (t && !ra(n, t)));

  )
    n = n.previousElementSibling;
  return n || null;
}
function ot(e, t) {
  var n = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    e.nodeName.toUpperCase() !== "TEMPLATE" &&
      e !== ye.clone &&
      (!t || ra(e, t)) &&
      n++;
  return n;
}
function Di(e) {
  var t = 0,
    n = 0,
    a = Tn();
  if (e)
    do {
      var r = lo(e),
        s = r.a,
        o = r.d;
      (t += e.scrollLeft * s), (n += e.scrollTop * o);
    } while (e !== a && (e = e.parentNode));
  return [t, n];
}
function Uf(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var a in t)
        if (t.hasOwnProperty(a) && t[a] === e[n][a]) return Number(n);
    }
  return -1;
}
function zn(e, t) {
  if (!e || !e.getBoundingClientRect) return Tn();
  var n = e,
    a = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = ve(n);
      if (
        (n.clientWidth < n.scrollWidth &&
          (r.overflowX == "auto" || r.overflowX == "scroll")) ||
        (n.clientHeight < n.scrollHeight &&
          (r.overflowY == "auto" || r.overflowY == "scroll"))
      ) {
        if (!n.getBoundingClientRect || n === document.body) return Tn();
        if (a || t) return n;
        a = !0;
      }
    }
  while ((n = n.parentNode));
  return Tn();
}
function jf(e, t) {
  if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Xa(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
var lr;
function gl(e, t) {
  return function () {
    if (!lr) {
      var n = arguments,
        a = this;
      n.length === 1 ? e.call(a, n[0]) : e.apply(a, n),
        (lr = setTimeout(function () {
          lr = void 0;
        }, t));
    }
  };
}
function Bf() {
  clearTimeout(lr), (lr = void 0);
}
function hl(e, t, n) {
  (e.scrollLeft += t), (e.scrollTop += n);
}
function Ss(e) {
  var t = window.Polymer,
    n = window.jQuery || window.Zepto;
  return t && t.dom
    ? t.dom(e).cloneNode(!0)
    : n
      ? n(e).clone(!0)[0]
      : e.cloneNode(!0);
}
function Ai(e, t) {
  ve(e, "position", "absolute"),
    ve(e, "top", t.top),
    ve(e, "left", t.left),
    ve(e, "width", t.width),
    ve(e, "height", t.height);
}
function Ka(e) {
  ve(e, "position", ""),
    ve(e, "top", ""),
    ve(e, "left", ""),
    ve(e, "width", ""),
    ve(e, "height", "");
}
var At = "Sortable" + new Date().getTime();
function Gf() {
  var e = [],
    t;
  return {
    captureAnimationState: function () {
      if (((e = []), !!this.options.animation)) {
        var a = [].slice.call(this.el.children);
        a.forEach(function (r) {
          if (!(ve(r, "display") === "none" || r === ye.ghost)) {
            e.push({ target: r, rect: Qe(r) });
            var s = In({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var o = lo(r, !0);
              o && ((s.top -= o.f), (s.left -= o.e));
            }
            r.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function (a) {
      e.push(a);
    },
    removeAnimationState: function (a) {
      e.splice(Uf(e, { target: a }), 1);
    },
    animateAll: function (a) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof a == "function" && a();
        return;
      }
      var s = !1,
        o = 0;
      e.forEach(function (u) {
        var l = 0,
          i = u.target,
          c = i.fromRect,
          p = Qe(i),
          y = i.prevFromRect,
          E = i.prevToRect,
          v = u.rect,
          h = lo(i, !0);
        h && ((p.top -= h.f), (p.left -= h.e)),
          (i.toRect = p),
          i.thisAnimationDuration &&
            Xa(y, p) &&
            !Xa(c, p) &&
            (v.top - p.top) / (v.left - p.left) ===
              (c.top - p.top) / (c.left - p.left) &&
            (l = zf(v, y, E, r.options)),
          Xa(p, c) ||
            ((i.prevFromRect = c),
            (i.prevToRect = p),
            l || (l = r.options.animation),
            r.animate(i, v, p, l)),
          l &&
            ((s = !0),
            (o = Math.max(o, l)),
            clearTimeout(i.animationResetTimer),
            (i.animationResetTimer = setTimeout(function () {
              (i.animationTime = 0),
                (i.prevFromRect = null),
                (i.fromRect = null),
                (i.prevToRect = null),
                (i.thisAnimationDuration = null);
            }, l)),
            (i.thisAnimationDuration = l));
      }),
        clearTimeout(t),
        s
          ? (t = setTimeout(function () {
              typeof a == "function" && a();
            }, o))
          : typeof a == "function" && a(),
        (e = []);
    },
    animate: function (a, r, s, o) {
      if (o) {
        ve(a, "transition", ""), ve(a, "transform", "");
        var u = lo(this.el),
          l = u && u.a,
          i = u && u.d,
          c = (r.left - s.left) / (l || 1),
          p = (r.top - s.top) / (i || 1);
        (a.animatingX = !!c),
          (a.animatingY = !!p),
          ve(a, "transform", "translate3d(" + c + "px," + p + "px,0)"),
          (this.forRepaintDummy = Hf(a)),
          ve(
            a,
            "transition",
            "transform " +
              o +
              "ms" +
              (this.options.easing ? " " + this.options.easing : ""),
          ),
          ve(a, "transform", "translate3d(0,0,0)"),
          typeof a.animated == "number" && clearTimeout(a.animated),
          (a.animated = setTimeout(function () {
            ve(a, "transition", ""),
              ve(a, "transform", ""),
              (a.animated = !1),
              (a.animatingX = !1),
              (a.animatingY = !1);
          }, o));
      }
    },
  };
}
function Hf(e) {
  return e.offsetWidth;
}
function zf(e, t, n, a) {
  return (
    (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
      Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2))) *
    a.animation
  );
}
var Io = [],
  Wa = { initializeByDefault: !0 },
  Sr = {
    mount: function (t) {
      for (var n in Wa) Wa.hasOwnProperty(n) && !(n in t) && (t[n] = Wa[n]);
      Io.forEach(function (a) {
        if (a.pluginName === t.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            t.pluginName,
            " more than once",
          );
      }),
        Io.push(t);
    },
    pluginEvent: function (t, n, a) {
      var r = this;
      (this.eventCanceled = !1),
        (a.cancel = function () {
          r.eventCanceled = !0;
        });
      var s = t + "Global";
      Io.forEach(function (o) {
        n[o.pluginName] &&
          (n[o.pluginName][s] && n[o.pluginName][s](In({ sortable: n }, a)),
          n.options[o.pluginName] &&
            n[o.pluginName][t] &&
            n[o.pluginName][t](In({ sortable: n }, a)));
      });
    },
    initializePlugins: function (t, n, a, r) {
      Io.forEach(function (u) {
        var l = u.pluginName;
        if (!(!t.options[l] && !u.initializeByDefault)) {
          var i = new u(t, n, t.options);
          (i.sortable = t),
            (i.options = t.options),
            (t[l] = i),
            on(a, i.defaults);
        }
      });
      for (var s in t.options)
        if (t.options.hasOwnProperty(s)) {
          var o = this.modifyOption(t, s, t.options[s]);
          typeof o < "u" && (t.options[s] = o);
        }
    },
    getEventProperties: function (t, n) {
      var a = {};
      return (
        Io.forEach(function (r) {
          typeof r.eventProperties == "function" &&
            on(a, r.eventProperties.call(n[r.pluginName], t));
        }),
        a
      );
    },
    modifyOption: function (t, n, a) {
      var r;
      return (
        Io.forEach(function (s) {
          t[s.pluginName] &&
            s.optionListeners &&
            typeof s.optionListeners[n] == "function" &&
            (r = s.optionListeners[n].call(t[s.pluginName], a));
        }),
        r
      );
    },
  };
function nr(e) {
  var t = e.sortable,
    n = e.rootEl,
    a = e.name,
    r = e.targetEl,
    s = e.cloneEl,
    o = e.toEl,
    u = e.fromEl,
    l = e.oldIndex,
    i = e.newIndex,
    c = e.oldDraggableIndex,
    p = e.newDraggableIndex,
    y = e.originalEvent,
    E = e.putSortable,
    v = e.extraEventProperties;
  if (((t = t || (n && n[At])), !!t)) {
    var h,
      b = t.options,
      S = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Ln && !br
      ? (h = new CustomEvent(a, { bubbles: !0, cancelable: !0 }))
      : ((h = document.createEvent("Event")), h.initEvent(a, !0, !0)),
      (h.to = o || n),
      (h.from = u || n),
      (h.item = r || n),
      (h.clone = s),
      (h.oldIndex = l),
      (h.newIndex = i),
      (h.oldDraggableIndex = c),
      (h.newDraggableIndex = p),
      (h.originalEvent = y),
      (h.pullMode = E ? E.lastPutMode : void 0);
    var T = In(In({}, v), Sr.getEventProperties(a, t));
    for (var $ in T) h[$] = T[$];
    n && n.dispatchEvent(h), b[S] && b[S].call(t, h);
  }
}
var Xf = ["evt"],
  $t = function (t, n) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = a.evt,
      s = Af(a, Xf);
    Sr.pluginEvent.bind(ye)(
      t,
      n,
      In(
        {
          dragEl: de,
          parentEl: tt,
          ghostEl: xe,
          rootEl: Ye,
          nextEl: ro,
          lastDownEl: Kr,
          cloneEl: nt,
          cloneHidden: Bn,
          dragStarted: or,
          putSortable: yt,
          activeSortable: ye.active,
          originalEvent: r,
          oldIndex: Ao,
          oldDraggableIndex: ur,
          newIndex: Yt,
          newDraggableIndex: Un,
          hideGhostForTarget: Sl,
          unhideGhostForTarget: Tl,
          cloneNowHidden: function () {
            Bn = !0;
          },
          cloneNowShown: function () {
            Bn = !1;
          },
          dispatchSortableEvent: function (u) {
            Rt({ sortable: n, name: u, originalEvent: r });
          },
        },
        s,
      ),
    );
  };
function Rt(e) {
  nr(
    In(
      {
        putSortable: yt,
        cloneEl: nt,
        targetEl: de,
        rootEl: Ye,
        oldIndex: Ao,
        oldDraggableIndex: ur,
        newIndex: Yt,
        newDraggableIndex: Un,
      },
      e,
    ),
  );
}
var de,
  tt,
  xe,
  Ye,
  ro,
  Kr,
  nt,
  Bn,
  Ao,
  Yt,
  ur,
  Un,
  Lr,
  yt,
  No = !1,
  aa = !1,
  sa = [],
  no,
  ln,
  Ya,
  Ja,
  Pi,
  Ri,
  or,
  Co,
  dr,
  cr = !1,
  Fr = !1,
  Wr,
  Ot,
  Qa = [],
  is = !1,
  ia = [],
  Ea = typeof document < "u",
  $r = pl,
  ki = br || Ln ? "cssFloat" : "float",
  Kf = Ea && !Ff && !pl && "draggable" in document.createElement("div"),
  yl = (function () {
    if (Ea) {
      if (Ln) return !1;
      var e = document.createElement("x");
      return (
        (e.style.cssText = "pointer-events:auto"),
        e.style.pointerEvents === "auto"
      );
    }
  })(),
  El = function (t, n) {
    var a = ve(t),
      r =
        parseInt(a.width) -
        parseInt(a.paddingLeft) -
        parseInt(a.paddingRight) -
        parseInt(a.borderLeftWidth) -
        parseInt(a.borderRightWidth),
      s = ko(t, 0, n),
      o = ko(t, 1, n),
      u = s && ve(s),
      l = o && ve(o),
      i = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + Qe(s).width,
      c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Qe(o).width;
    if (a.display === "flex")
      return a.flexDirection === "column" ||
        a.flexDirection === "column-reverse"
        ? "vertical"
        : "horizontal";
    if (a.display === "grid")
      return a.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (s && u.float && u.float !== "none") {
      var p = u.float === "left" ? "left" : "right";
      return o && (l.clear === "both" || l.clear === p)
        ? "vertical"
        : "horizontal";
    }
    return s &&
      (u.display === "block" ||
        u.display === "flex" ||
        u.display === "table" ||
        u.display === "grid" ||
        (i >= r && a[ki] === "none") ||
        (o && a[ki] === "none" && i + c > r))
      ? "vertical"
      : "horizontal";
  },
  Wf = function (t, n, a) {
    var r = a ? t.left : t.top,
      s = a ? t.right : t.bottom,
      o = a ? t.width : t.height,
      u = a ? n.left : n.top,
      l = a ? n.right : n.bottom,
      i = a ? n.width : n.height;
    return r === u || s === l || r + o / 2 === u + i / 2;
  },
  Yf = function (t, n) {
    var a;
    return (
      sa.some(function (r) {
        var s = r[At].options.emptyInsertThreshold;
        if (!(!s || bs(r))) {
          var o = Qe(r),
            u = t >= o.left - s && t <= o.right + s,
            l = n >= o.top - s && n <= o.bottom + s;
          if (u && l) return (a = r);
        }
      }),
      a
    );
  },
  bl = function (t) {
    function n(s, o) {
      return function (u, l, i, c) {
        var p =
          u.options.group.name &&
          l.options.group.name &&
          u.options.group.name === l.options.group.name;
        if (s == null && (o || p)) return !0;
        if (s == null || s === !1) return !1;
        if (o && s === "clone") return s;
        if (typeof s == "function") return n(s(u, l, i, c), o)(u, l, i, c);
        var y = (o ? u : l).options.group.name;
        return (
          s === !0 ||
          (typeof s == "string" && s === y) ||
          (s.join && s.indexOf(y) > -1)
        );
      };
    }
    var a = {},
      r = t.group;
    (!r || Xr(r) != "object") && (r = { name: r }),
      (a.name = r.name),
      (a.checkPull = n(r.pull, !0)),
      (a.checkPut = n(r.put)),
      (a.revertClone = r.revertClone),
      (t.group = a);
  },
  Sl = function () {
    !yl && xe && ve(xe, "display", "none");
  },
  Tl = function () {
    !yl && xe && ve(xe, "display", "");
  };
Ea &&
  document.addEventListener(
    "click",
    function (e) {
      if (aa)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (aa = !1),
          !1
        );
    },
    !0,
  );
var oo = function (t) {
    if (de) {
      t = t.touches ? t.touches[0] : t;
      var n = Yf(t.clientX, t.clientY);
      if (n) {
        var a = {};
        for (var r in t) t.hasOwnProperty(r) && (a[r] = t[r]);
        (a.target = a.rootEl = n),
          (a.preventDefault = void 0),
          (a.stopPropagation = void 0),
          n[At]._onDragOver(a);
      }
    }
  },
  Jf = function (t) {
    de && de.parentNode[At]._isOutsideThisEl(t.target);
  };
function ye(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e),
    );
  (this.el = e), (this.options = t = on({}, t)), (e[At] = this);
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return El(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (o, u) {
      o.setData("Text", u.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10,
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: ye.supportPointer !== !1 && "PointerEvent" in window && !ir,
    emptyInsertThreshold: 5,
  };
  Sr.initializePlugins(this, e, n);
  for (var a in n) !(a in t) && (t[a] = n[a]);
  bl(t);
  for (var r in this)
    r.charAt(0) === "_" &&
      typeof this[r] == "function" &&
      (this[r] = this[r].bind(this));
  (this.nativeDraggable = t.forceFallback ? !1 : Kf),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? Re(e, "pointerdown", this._onTapStart)
      : (Re(e, "mousedown", this._onTapStart),
        Re(e, "touchstart", this._onTapStart)),
    this.nativeDraggable && (Re(e, "dragover", this), Re(e, "dragenter", this)),
    sa.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    on(this, Gf());
}
ye.prototype = {
  constructor: ye,
  _isOutsideThisEl: function (t) {
    !this.el.contains(t) && t !== this.el && (Co = null);
  },
  _getDirection: function (t, n) {
    return typeof this.options.direction == "function"
      ? this.options.direction.call(this, t, n, de)
      : this.options.direction;
  },
  _onTapStart: function (t) {
    if (t.cancelable) {
      var n = this,
        a = this.el,
        r = this.options,
        s = r.preventOnFilter,
        o = t.type,
        u =
          (t.touches && t.touches[0]) ||
          (t.pointerType && t.pointerType === "touch" && t),
        l = (u || t).target,
        i =
          (t.target.shadowRoot &&
            ((t.path && t.path[0]) ||
              (t.composedPath && t.composedPath()[0]))) ||
          l,
        c = r.filter;
      if (
        (op(a),
        !de &&
          !(
            (/mousedown|pointerdown/.test(o) && t.button !== 0) ||
            r.disabled
          ) &&
          !i.isContentEditable &&
          !(
            !this.nativeDraggable &&
            ir &&
            l &&
            l.tagName.toUpperCase() === "SELECT"
          ) &&
          ((l = fn(l, r.draggable, a, !1)), !(l && l.animated) && Kr !== l))
      ) {
        if (((Ao = ot(l)), (ur = ot(l, r.draggable)), typeof c == "function")) {
          if (c.call(this, t, l, this)) {
            Rt({
              sortable: n,
              rootEl: i,
              name: "filter",
              targetEl: l,
              toEl: a,
              fromEl: a,
            }),
              $t("filter", n, { evt: t }),
              s && t.cancelable && t.preventDefault();
            return;
          }
        } else if (
          c &&
          ((c = c.split(",").some(function (p) {
            if (((p = fn(i, p.trim(), a, !1)), p))
              return (
                Rt({
                  sortable: n,
                  rootEl: p,
                  name: "filter",
                  targetEl: l,
                  fromEl: a,
                  toEl: a,
                }),
                $t("filter", n, { evt: t }),
                !0
              );
          })),
          c)
        ) {
          s && t.cancelable && t.preventDefault();
          return;
        }
        (r.handle && !fn(i, r.handle, a, !1)) ||
          this._prepareDragStart(t, u, l);
      }
    }
  },
  _prepareDragStart: function (t, n, a) {
    var r = this,
      s = r.el,
      o = r.options,
      u = s.ownerDocument,
      l;
    if (a && !de && a.parentNode === s) {
      var i = Qe(a);
      if (
        ((Ye = s),
        (de = a),
        (tt = de.parentNode),
        (ro = de.nextSibling),
        (Kr = a),
        (Lr = o.group),
        (ye.dragged = de),
        (no = {
          target: de,
          clientX: (n || t).clientX,
          clientY: (n || t).clientY,
        }),
        (Pi = no.clientX - i.left),
        (Ri = no.clientY - i.top),
        (this._lastX = (n || t).clientX),
        (this._lastY = (n || t).clientY),
        (de.style["will-change"] = "all"),
        (l = function () {
          if (($t("delayEnded", r, { evt: t }), ye.eventCanceled)) {
            r._onDrop();
            return;
          }
          r._disableDelayedDragEvents(),
            !xi && r.nativeDraggable && (de.draggable = !0),
            r._triggerDragStart(t, n),
            Rt({ sortable: r, name: "choose", originalEvent: t }),
            _e(de, o.chosenClass, !0);
        }),
        o.ignore.split(",").forEach(function (c) {
          vl(de, c.trim(), Za);
        }),
        Re(u, "dragover", oo),
        Re(u, "mousemove", oo),
        Re(u, "touchmove", oo),
        Re(u, "mouseup", r._onDrop),
        Re(u, "touchend", r._onDrop),
        Re(u, "touchcancel", r._onDrop),
        xi &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (de.draggable = !0)),
        $t("delayStart", this, { evt: t }),
        o.delay &&
          (!o.delayOnTouchOnly || n) &&
          (!this.nativeDraggable || !(br || Ln)))
      ) {
        if (ye.eventCanceled) {
          this._onDrop();
          return;
        }
        Re(u, "mouseup", r._disableDelayedDrag),
          Re(u, "touchend", r._disableDelayedDrag),
          Re(u, "touchcancel", r._disableDelayedDrag),
          Re(u, "mousemove", r._delayedDragTouchMoveHandler),
          Re(u, "touchmove", r._delayedDragTouchMoveHandler),
          o.supportPointer &&
            Re(u, "pointermove", r._delayedDragTouchMoveHandler),
          (r._dragStartTimer = setTimeout(l, o.delay));
      } else l();
    }
  },
  _delayedDragTouchMoveHandler: function (t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(
      Math.abs(n.clientX - this._lastX),
      Math.abs(n.clientY - this._lastY),
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1),
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    de && Za(de),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var t = this.el.ownerDocument;
    we(t, "mouseup", this._disableDelayedDrag),
      we(t, "touchend", this._disableDelayedDrag),
      we(t, "touchcancel", this._disableDelayedDrag),
      we(t, "mousemove", this._delayedDragTouchMoveHandler),
      we(t, "touchmove", this._delayedDragTouchMoveHandler),
      we(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (t, n) {
    (n = n || (t.pointerType == "touch" && t)),
      !this.nativeDraggable || n
        ? this.options.supportPointer
          ? Re(document, "pointermove", this._onTouchMove)
          : n
            ? Re(document, "touchmove", this._onTouchMove)
            : Re(document, "mousemove", this._onTouchMove)
        : (Re(de, "dragend", this), Re(Ye, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Yr(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (t, n) {
    if (((No = !1), Ye && de)) {
      $t("dragStarted", this, { evt: n }),
        this.nativeDraggable && Re(document, "dragover", Jf);
      var a = this.options;
      !t && _e(de, a.dragClass, !1),
        _e(de, a.ghostClass, !0),
        (ye.active = this),
        t && this._appendGhost(),
        Rt({ sortable: this, name: "start", originalEvent: n });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (ln) {
      (this._lastX = ln.clientX), (this._lastY = ln.clientY), Sl();
      for (
        var t = document.elementFromPoint(ln.clientX, ln.clientY), n = t;
        t &&
        t.shadowRoot &&
        ((t = t.shadowRoot.elementFromPoint(ln.clientX, ln.clientY)), t !== n);

      )
        n = t;
      if ((de.parentNode[At]._isOutsideThisEl(t), n))
        do {
          if (n[At]) {
            var a = void 0;
            if (
              ((a = n[At]._onDragOver({
                clientX: ln.clientX,
                clientY: ln.clientY,
                target: t,
                rootEl: n,
              })),
              a && !this.options.dragoverBubble)
            )
              break;
          }
          t = n;
        } while ((n = n.parentNode));
      Tl();
    }
  },
  _onTouchMove: function (t) {
    if (no) {
      var n = this.options,
        a = n.fallbackTolerance,
        r = n.fallbackOffset,
        s = t.touches ? t.touches[0] : t,
        o = xe && lo(xe, !0),
        u = xe && o && o.a,
        l = xe && o && o.d,
        i = $r && Ot && Di(Ot),
        c =
          (s.clientX - no.clientX + r.x) / (u || 1) +
          (i ? i[0] - Qa[0] : 0) / (u || 1),
        p =
          (s.clientY - no.clientY + r.y) / (l || 1) +
          (i ? i[1] - Qa[1] : 0) / (l || 1);
      if (!ye.active && !No) {
        if (
          a &&
          Math.max(
            Math.abs(s.clientX - this._lastX),
            Math.abs(s.clientY - this._lastY),
          ) < a
        )
          return;
        this._onDragStart(t, !0);
      }
      if (xe) {
        o
          ? ((o.e += c - (Ya || 0)), (o.f += p - (Ja || 0)))
          : (o = { a: 1, b: 0, c: 0, d: 1, e: c, f: p });
        var y = "matrix("
          .concat(o.a, ",")
          .concat(o.b, ",")
          .concat(o.c, ",")
          .concat(o.d, ",")
          .concat(o.e, ",")
          .concat(o.f, ")");
        ve(xe, "webkitTransform", y),
          ve(xe, "mozTransform", y),
          ve(xe, "msTransform", y),
          ve(xe, "transform", y),
          (Ya = c),
          (Ja = p),
          (ln = s);
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!xe) {
      var t = this.options.fallbackOnBody ? document.body : Ye,
        n = Qe(de, !0, $r, !0, t),
        a = this.options;
      if ($r) {
        for (
          Ot = t;
          ve(Ot, "position") === "static" &&
          ve(Ot, "transform") === "none" &&
          Ot !== document;

        )
          Ot = Ot.parentNode;
        Ot !== document.body && Ot !== document.documentElement
          ? (Ot === document && (Ot = Tn()),
            (n.top += Ot.scrollTop),
            (n.left += Ot.scrollLeft))
          : (Ot = Tn()),
          (Qa = Di(Ot));
      }
      (xe = de.cloneNode(!0)),
        _e(xe, a.ghostClass, !1),
        _e(xe, a.fallbackClass, !0),
        _e(xe, a.dragClass, !0),
        ve(xe, "transition", ""),
        ve(xe, "transform", ""),
        ve(xe, "box-sizing", "border-box"),
        ve(xe, "margin", 0),
        ve(xe, "top", n.top),
        ve(xe, "left", n.left),
        ve(xe, "width", n.width),
        ve(xe, "height", n.height),
        ve(xe, "opacity", "0.8"),
        ve(xe, "position", $r ? "absolute" : "fixed"),
        ve(xe, "zIndex", "100000"),
        ve(xe, "pointerEvents", "none"),
        (ye.ghost = xe),
        t.appendChild(xe),
        ve(
          xe,
          "transform-origin",
          (Pi / parseInt(xe.style.width)) * 100 +
            "% " +
            (Ri / parseInt(xe.style.height)) * 100 +
            "%",
        );
    }
  },
  _onDragStart: function (t, n) {
    var a = this,
      r = t.dataTransfer,
      s = a.options;
    if (($t("dragStart", this, { evt: t }), ye.eventCanceled)) {
      this._onDrop();
      return;
    }
    $t("setupClone", this),
      ye.eventCanceled ||
        ((nt = Ss(de)),
        (nt.draggable = !1),
        (nt.style["will-change"] = ""),
        this._hideClone(),
        _e(nt, this.options.chosenClass, !1),
        (ye.clone = nt)),
      (a.cloneId = Yr(function () {
        $t("clone", a),
          !ye.eventCanceled &&
            (a.options.removeCloneOnHide || Ye.insertBefore(nt, de),
            a._hideClone(),
            Rt({ sortable: a, name: "clone" }));
      })),
      !n && _e(de, s.dragClass, !0),
      n
        ? ((aa = !0), (a._loopId = setInterval(a._emulateDragOver, 50)))
        : (we(document, "mouseup", a._onDrop),
          we(document, "touchend", a._onDrop),
          we(document, "touchcancel", a._onDrop),
          r &&
            ((r.effectAllowed = "move"), s.setData && s.setData.call(a, r, de)),
          Re(document, "drop", a),
          ve(de, "transform", "translateZ(0)")),
      (No = !0),
      (a._dragStartId = Yr(a._dragStarted.bind(a, n, t))),
      Re(document, "selectstart", a),
      (or = !0),
      ir && ve(document.body, "user-select", "none");
  },
  _onDragOver: function (t) {
    var n = this.el,
      a = t.target,
      r,
      s,
      o,
      u = this.options,
      l = u.group,
      i = ye.active,
      c = Lr === l,
      p = u.sort,
      y = yt || i,
      E,
      v = this,
      h = !1;
    if (is) return;
    function b(w, se) {
      $t(
        w,
        v,
        In(
          {
            evt: t,
            isOwner: c,
            axis: E ? "vertical" : "horizontal",
            revert: o,
            dragRect: r,
            targetRect: s,
            canSort: p,
            fromSortable: y,
            target: a,
            completed: T,
            onMove: function (ge, Ee) {
              return Ur(Ye, n, de, r, ge, Qe(ge), t, Ee);
            },
            changed: $,
          },
          se,
        ),
      );
    }
    function S() {
      b("dragOverAnimationCapture"),
        v.captureAnimationState(),
        v !== y && y.captureAnimationState();
    }
    function T(w) {
      return (
        b("dragOverCompleted", { insertion: w }),
        w &&
          (c ? i._hideClone() : i._showClone(v),
          v !== y &&
            (_e(de, yt ? yt.options.ghostClass : i.options.ghostClass, !1),
            _e(de, u.ghostClass, !0)),
          yt !== v && v !== ye.active
            ? (yt = v)
            : v === ye.active && yt && (yt = null),
          y === v && (v._ignoreWhileAnimating = a),
          v.animateAll(function () {
            b("dragOverAnimationComplete"), (v._ignoreWhileAnimating = null);
          }),
          v !== y && (y.animateAll(), (y._ignoreWhileAnimating = null))),
        ((a === de && !de.animated) || (a === n && !a.animated)) && (Co = null),
        !u.dragoverBubble &&
          !t.rootEl &&
          a !== document &&
          (de.parentNode[At]._isOutsideThisEl(t.target), !w && oo(t)),
        !u.dragoverBubble && t.stopPropagation && t.stopPropagation(),
        (h = !0)
      );
    }
    function $() {
      (Yt = ot(de)),
        (Un = ot(de, u.draggable)),
        Rt({
          sortable: v,
          name: "change",
          toEl: n,
          newIndex: Yt,
          newDraggableIndex: Un,
          originalEvent: t,
        });
    }
    if (
      (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(),
      (a = fn(a, u.draggable, n, !0)),
      b("dragOver"),
      ye.eventCanceled)
    )
      return h;
    if (
      de.contains(t.target) ||
      (a.animated && a.animatingX && a.animatingY) ||
      v._ignoreWhileAnimating === a
    )
      return T(!1);
    if (
      ((aa = !1),
      i &&
        !u.disabled &&
        (c
          ? p || (o = tt !== Ye)
          : yt === this ||
            ((this.lastPutMode = Lr.checkPull(this, i, de, t)) &&
              l.checkPut(this, i, de, t))))
    ) {
      if (
        ((E = this._getDirection(t, a) === "vertical"),
        (r = Qe(de)),
        b("dragOverValid"),
        ye.eventCanceled)
      )
        return h;
      if (o)
        return (
          (tt = Ye),
          S(),
          this._hideClone(),
          b("revert"),
          ye.eventCanceled ||
            (ro ? Ye.insertBefore(de, ro) : Ye.appendChild(de)),
          T(!0)
        );
      var C = bs(n, u.draggable);
      if (!C || (_f(t, E, this) && !C.animated)) {
        if (C === de) return T(!1);
        if (
          (C && n === t.target && (a = C),
          a && (s = Qe(a)),
          Ur(Ye, n, de, r, a, s, t, !!a) !== !1)
        )
          return S(), n.appendChild(de), (tt = n), $(), T(!0);
      } else if (C && qf(t, E, this)) {
        var N = ko(n, 0, u, !0);
        if (N === de) return T(!1);
        if (((a = N), (s = Qe(a)), Ur(Ye, n, de, r, a, s, t, !1) !== !1))
          return S(), n.insertBefore(de, N), (tt = n), $(), T(!0);
      } else if (a.parentNode === n) {
        s = Qe(a);
        var D = 0,
          H,
          j = de.parentNode !== n,
          O = !Wf(
            (de.animated && de.toRect) || r,
            (a.animated && a.toRect) || s,
            E,
          ),
          Y = E ? "top" : "left",
          te = wi(a, "top", "top") || wi(de, "top", "top"),
          ne = te ? te.scrollTop : void 0;
        Co !== a && ((H = s[Y]), (cr = !1), (Fr = (!O && u.invertSwap) || j)),
          (D = ep(
            t,
            a,
            s,
            E,
            O ? 1 : u.swapThreshold,
            u.invertedSwapThreshold == null
              ? u.swapThreshold
              : u.invertedSwapThreshold,
            Fr,
            Co === a,
          ));
        var K;
        if (D !== 0) {
          var X = ot(de);
          do (X -= D), (K = tt.children[X]);
          while (K && (ve(K, "display") === "none" || K === xe));
        }
        if (D === 0 || K === a) return T(!1);
        (Co = a), (dr = D);
        var ue = a.nextElementSibling,
          G = !1;
        G = D === 1;
        var A = Ur(Ye, n, de, r, a, s, t, G);
        if (A !== !1)
          return (
            (A === 1 || A === -1) && (G = A === 1),
            (is = !0),
            setTimeout(Zf, 30),
            S(),
            G && !ue
              ? n.appendChild(de)
              : a.parentNode.insertBefore(de, G ? ue : a),
            te && hl(te, 0, ne - te.scrollTop),
            (tt = de.parentNode),
            H !== void 0 && !Fr && (Wr = Math.abs(H - Qe(a)[Y])),
            $(),
            T(!0)
          );
      }
      if (n.contains(de)) return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    we(document, "mousemove", this._onTouchMove),
      we(document, "touchmove", this._onTouchMove),
      we(document, "pointermove", this._onTouchMove),
      we(document, "dragover", oo),
      we(document, "mousemove", oo),
      we(document, "touchmove", oo);
  },
  _offUpEvents: function () {
    var t = this.el.ownerDocument;
    we(t, "mouseup", this._onDrop),
      we(t, "touchend", this._onDrop),
      we(t, "pointerup", this._onDrop),
      we(t, "touchcancel", this._onDrop),
      we(document, "selectstart", this);
  },
  _onDrop: function (t) {
    var n = this.el,
      a = this.options;
    if (
      ((Yt = ot(de)),
      (Un = ot(de, a.draggable)),
      $t("drop", this, { evt: t }),
      (tt = de && de.parentNode),
      (Yt = ot(de)),
      (Un = ot(de, a.draggable)),
      ye.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (No = !1),
      (Fr = !1),
      (cr = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      ls(this.cloneId),
      ls(this._dragStartId),
      this.nativeDraggable &&
        (we(document, "drop", this), we(n, "dragstart", this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      ir && ve(document.body, "user-select", ""),
      ve(de, "transform", ""),
      t &&
        (or &&
          (t.cancelable && t.preventDefault(),
          !a.dropBubble && t.stopPropagation()),
        xe && xe.parentNode && xe.parentNode.removeChild(xe),
        (Ye === tt || (yt && yt.lastPutMode !== "clone")) &&
          nt &&
          nt.parentNode &&
          nt.parentNode.removeChild(nt),
        de &&
          (this.nativeDraggable && we(de, "dragend", this),
          Za(de),
          (de.style["will-change"] = ""),
          or &&
            !No &&
            _e(de, yt ? yt.options.ghostClass : this.options.ghostClass, !1),
          _e(de, this.options.chosenClass, !1),
          Rt({
            sortable: this,
            name: "unchoose",
            toEl: tt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: t,
          }),
          Ye !== tt
            ? (Yt >= 0 &&
                (Rt({
                  rootEl: tt,
                  name: "add",
                  toEl: tt,
                  fromEl: Ye,
                  originalEvent: t,
                }),
                Rt({
                  sortable: this,
                  name: "remove",
                  toEl: tt,
                  originalEvent: t,
                }),
                Rt({
                  rootEl: tt,
                  name: "sort",
                  toEl: tt,
                  fromEl: Ye,
                  originalEvent: t,
                }),
                Rt({
                  sortable: this,
                  name: "sort",
                  toEl: tt,
                  originalEvent: t,
                })),
              yt && yt.save())
            : Yt !== Ao &&
              Yt >= 0 &&
              (Rt({
                sortable: this,
                name: "update",
                toEl: tt,
                originalEvent: t,
              }),
              Rt({ sortable: this, name: "sort", toEl: tt, originalEvent: t })),
          ye.active &&
            ((Yt == null || Yt === -1) && ((Yt = Ao), (Un = ur)),
            Rt({ sortable: this, name: "end", toEl: tt, originalEvent: t }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    $t("nulling", this),
      (Ye =
        de =
        tt =
        xe =
        ro =
        nt =
        Kr =
        Bn =
        no =
        ln =
        or =
        Yt =
        Un =
        Ao =
        ur =
        Co =
        dr =
        yt =
        Lr =
        ye.dragged =
        ye.ghost =
        ye.clone =
        ye.active =
          null),
      ia.forEach(function (t) {
        t.checked = !0;
      }),
      (ia.length = Ya = Ja = 0);
  },
  handleEvent: function (t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        de && (this._onDragOver(t), Qf(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (
      var t = [],
        n,
        a = this.el.children,
        r = 0,
        s = a.length,
        o = this.options;
      r < s;
      r++
    )
      (n = a[r]),
        fn(n, o.draggable, this.el, !1) &&
          t.push(n.getAttribute(o.dataIdAttr) || np(n));
    return t;
  },
  sort: function (t, n) {
    var a = {},
      r = this.el;
    this.toArray().forEach(function (s, o) {
      var u = r.children[o];
      fn(u, this.options.draggable, r, !1) && (a[s] = u);
    }, this),
      n && this.captureAnimationState(),
      t.forEach(function (s) {
        a[s] && (r.removeChild(a[s]), r.appendChild(a[s]));
      }),
      n && this.animateAll();
  },
  save: function () {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  closest: function (t, n) {
    return fn(t, n || this.options.draggable, this.el, !1);
  },
  option: function (t, n) {
    var a = this.options;
    if (n === void 0) return a[t];
    var r = Sr.modifyOption(this, t, n);
    typeof r < "u" ? (a[t] = r) : (a[t] = n), t === "group" && bl(a);
  },
  destroy: function () {
    $t("destroy", this);
    var t = this.el;
    (t[At] = null),
      we(t, "mousedown", this._onTapStart),
      we(t, "touchstart", this._onTapStart),
      we(t, "pointerdown", this._onTapStart),
      this.nativeDraggable &&
        (we(t, "dragover", this), we(t, "dragenter", this)),
      Array.prototype.forEach.call(
        t.querySelectorAll("[draggable]"),
        function (n) {
          n.removeAttribute("draggable");
        },
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      sa.splice(sa.indexOf(this.el), 1),
      (this.el = t = null);
  },
  _hideClone: function () {
    if (!Bn) {
      if (($t("hideClone", this), ye.eventCanceled)) return;
      ve(nt, "display", "none"),
        this.options.removeCloneOnHide &&
          nt.parentNode &&
          nt.parentNode.removeChild(nt),
        (Bn = !0);
    }
  },
  _showClone: function (t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Bn) {
      if (($t("showClone", this), ye.eventCanceled)) return;
      de.parentNode == Ye && !this.options.group.revertClone
        ? Ye.insertBefore(nt, de)
        : ro
          ? Ye.insertBefore(nt, ro)
          : Ye.appendChild(nt),
        this.options.group.revertClone && this.animate(de, nt),
        ve(nt, "display", ""),
        (Bn = !1);
    }
  },
};
function Qf(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"),
    e.cancelable && e.preventDefault();
}
function Ur(e, t, n, a, r, s, o, u) {
  var l,
    i = e[At],
    c = i.options.onMove,
    p;
  return (
    window.CustomEvent && !Ln && !br
      ? (l = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
      : ((l = document.createEvent("Event")), l.initEvent("move", !0, !0)),
    (l.to = t),
    (l.from = e),
    (l.dragged = n),
    (l.draggedRect = a),
    (l.related = r || t),
    (l.relatedRect = s || Qe(t)),
    (l.willInsertAfter = u),
    (l.originalEvent = o),
    e.dispatchEvent(l),
    c && (p = c.call(i, l, o)),
    p
  );
}
function Za(e) {
  e.draggable = !1;
}
function Zf() {
  is = !1;
}
function qf(e, t, n) {
  var a = Qe(ko(n.el, 0, n.options, !0)),
    r = 10;
  return t
    ? e.clientX < a.left - r || (e.clientY < a.top && e.clientX < a.right)
    : e.clientY < a.top - r || (e.clientY < a.bottom && e.clientX < a.left);
}
function _f(e, t, n) {
  var a = Qe(bs(n.el, n.options.draggable)),
    r = 10;
  return t
    ? e.clientX > a.right + r ||
        (e.clientX <= a.right && e.clientY > a.bottom && e.clientX >= a.left)
    : (e.clientX > a.right && e.clientY > a.top) ||
        (e.clientX <= a.right && e.clientY > a.bottom + r);
}
function ep(e, t, n, a, r, s, o, u) {
  var l = a ? e.clientY : e.clientX,
    i = a ? n.height : n.width,
    c = a ? n.top : n.left,
    p = a ? n.bottom : n.right,
    y = !1;
  if (!o) {
    if (u && Wr < i * r) {
      if (
        (!cr &&
          (dr === 1 ? l > c + (i * s) / 2 : l < p - (i * s) / 2) &&
          (cr = !0),
        cr)
      )
        y = !0;
      else if (dr === 1 ? l < c + Wr : l > p - Wr) return -dr;
    } else if (l > c + (i * (1 - r)) / 2 && l < p - (i * (1 - r)) / 2)
      return tp(t);
  }
  return (
    (y = y || o),
    y && (l < c + (i * s) / 2 || l > p - (i * s) / 2)
      ? l > c + i / 2
        ? 1
        : -1
      : 0
  );
}
function tp(e) {
  return ot(de) < ot(e) ? 1 : -1;
}
function np(e) {
  for (
    var t = e.tagName + e.className + e.src + e.href + e.textContent,
      n = t.length,
      a = 0;
    n--;

  )
    a += t.charCodeAt(n);
  return a.toString(36);
}
function op(e) {
  ia.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var a = t[n];
    a.checked && ia.push(a);
  }
}
function Yr(e) {
  return setTimeout(e, 0);
}
function ls(e) {
  return clearTimeout(e);
}
Ea &&
  Re(document, "touchmove", function (e) {
    (ye.active || No) && e.cancelable && e.preventDefault();
  });
ye.utils = {
  on: Re,
  off: we,
  css: ve,
  find: vl,
  is: function (t, n) {
    return !!fn(t, n, t, !1);
  },
  extend: jf,
  throttle: gl,
  closest: fn,
  toggleClass: _e,
  clone: Ss,
  index: ot,
  nextTick: Yr,
  cancelNextTick: ls,
  detectDirection: El,
  getChild: ko,
};
ye.get = function (e) {
  return e[At];
};
ye.mount = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]),
    t.forEach(function (a) {
      if (!a.prototype || !a.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
          {}.toString.call(a),
        );
      a.utils && (ye.utils = In(In({}, ye.utils), a.utils)), Sr.mount(a);
    });
};
ye.create = function (e, t) {
  return new ye(e, t);
};
ye.version = Lf;
var ft = [],
  rr,
  us,
  ds = !1,
  qa,
  _a,
  la,
  ar;
function rp() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0,
    };
    for (var t in this)
      t.charAt(0) === "_" &&
        typeof this[t] == "function" &&
        (this[t] = this[t].bind(this));
  }
  return (
    (e.prototype = {
      dragStarted: function (n) {
        var a = n.originalEvent;
        this.sortable.nativeDraggable
          ? Re(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
            ? Re(document, "pointermove", this._handleFallbackAutoScroll)
            : a.touches
              ? Re(document, "touchmove", this._handleFallbackAutoScroll)
              : Re(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (n) {
        var a = n.originalEvent;
        !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? we(document, "dragover", this._handleAutoScroll)
          : (we(document, "pointermove", this._handleFallbackAutoScroll),
            we(document, "touchmove", this._handleFallbackAutoScroll),
            we(document, "mousemove", this._handleFallbackAutoScroll)),
          Vi(),
          Jr(),
          Bf();
      },
      nulling: function () {
        (la = us = rr = ds = ar = qa = _a = null), (ft.length = 0);
      },
      _handleFallbackAutoScroll: function (n) {
        this._handleAutoScroll(n, !0);
      },
      _handleAutoScroll: function (n, a) {
        var r = this,
          s = (n.touches ? n.touches[0] : n).clientX,
          o = (n.touches ? n.touches[0] : n).clientY,
          u = document.elementFromPoint(s, o);
        if (
          ((la = n),
          a || this.options.forceAutoScrollFallback || br || Ln || ir)
        ) {
          es(n, this.options, u, a);
          var l = zn(u, !0);
          ds &&
            (!ar || s !== qa || o !== _a) &&
            (ar && Vi(),
            (ar = setInterval(function () {
              var i = zn(document.elementFromPoint(s, o), !0);
              i !== l && ((l = i), Jr()), es(n, r.options, i, a);
            }, 10)),
            (qa = s),
            (_a = o));
        } else {
          if (!this.options.bubbleScroll || zn(u, !0) === Tn()) {
            Jr();
            return;
          }
          es(n, this.options, zn(u, !1), !1);
        }
      },
    }),
    on(e, { pluginName: "scroll", initializeByDefault: !0 })
  );
}
function Jr() {
  ft.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (ft = []);
}
function Vi() {
  clearInterval(ar);
}
var es = gl(function (e, t, n, a) {
    if (t.scroll) {
      var r = (e.touches ? e.touches[0] : e).clientX,
        s = (e.touches ? e.touches[0] : e).clientY,
        o = t.scrollSensitivity,
        u = t.scrollSpeed,
        l = Tn(),
        i = !1,
        c;
      us !== n &&
        ((us = n),
        Jr(),
        (rr = t.scroll),
        (c = t.scrollFn),
        rr === !0 && (rr = zn(n, !0)));
      var p = 0,
        y = rr;
      do {
        var E = y,
          v = Qe(E),
          h = v.top,
          b = v.bottom,
          S = v.left,
          T = v.right,
          $ = v.width,
          C = v.height,
          N = void 0,
          D = void 0,
          H = E.scrollWidth,
          j = E.scrollHeight,
          O = ve(E),
          Y = E.scrollLeft,
          te = E.scrollTop;
        E === l
          ? ((N =
              $ < H &&
              (O.overflowX === "auto" ||
                O.overflowX === "scroll" ||
                O.overflowX === "visible")),
            (D =
              C < j &&
              (O.overflowY === "auto" ||
                O.overflowY === "scroll" ||
                O.overflowY === "visible")))
          : ((N =
              $ < H && (O.overflowX === "auto" || O.overflowX === "scroll")),
            (D =
              C < j && (O.overflowY === "auto" || O.overflowY === "scroll")));
        var ne =
            N &&
            (Math.abs(T - r) <= o && Y + $ < H) - (Math.abs(S - r) <= o && !!Y),
          K =
            D &&
            (Math.abs(b - s) <= o && te + C < j) -
              (Math.abs(h - s) <= o && !!te);
        if (!ft[p]) for (var X = 0; X <= p; X++) ft[X] || (ft[X] = {});
        (ft[p].vx != ne || ft[p].vy != K || ft[p].el !== E) &&
          ((ft[p].el = E),
          (ft[p].vx = ne),
          (ft[p].vy = K),
          clearInterval(ft[p].pid),
          (ne != 0 || K != 0) &&
            ((i = !0),
            (ft[p].pid = setInterval(
              function () {
                a && this.layer === 0 && ye.active._onTouchMove(la);
                var ue = ft[this.layer].vy ? ft[this.layer].vy * u : 0,
                  G = ft[this.layer].vx ? ft[this.layer].vx * u : 0;
                (typeof c == "function" &&
                  c.call(
                    ye.dragged.parentNode[At],
                    G,
                    ue,
                    e,
                    la,
                    ft[this.layer].el,
                  ) !== "continue") ||
                  hl(ft[this.layer].el, G, ue);
              }.bind({ layer: p }),
              24,
            )))),
          p++;
      } while (t.bubbleScroll && y !== l && (y = zn(y, !1)));
      ds = i;
    }
  }, 30),
  Il = function (t) {
    var n = t.originalEvent,
      a = t.putSortable,
      r = t.dragEl,
      s = t.activeSortable,
      o = t.dispatchSortableEvent,
      u = t.hideGhostForTarget,
      l = t.unhideGhostForTarget;
    if (n) {
      var i = a || s;
      u();
      var c =
          n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        p = document.elementFromPoint(c.clientX, c.clientY);
      l(),
        i &&
          !i.el.contains(p) &&
          (o("spill"), this.onSpill({ dragEl: r, putSortable: a }));
    }
  };
function Ts() {}
Ts.prototype = {
  startIndex: null,
  dragStart: function (t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function (t) {
    var n = t.dragEl,
      a = t.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var r = ko(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n),
      this.sortable.animateAll(),
      a && a.animateAll();
  },
  drop: Il,
};
on(Ts, { pluginName: "revertOnSpill" });
function Is() {}
Is.prototype = {
  onSpill: function (t) {
    var n = t.dragEl,
      a = t.putSortable,
      r = a || this.sortable;
    r.captureAnimationState(),
      n.parentNode && n.parentNode.removeChild(n),
      r.animateAll();
  },
  drop: Il,
};
on(Is, { pluginName: "removeOnSpill" });
var qt;
function ap() {
  function e() {
    this.defaults = { swapClass: "sortable-swap-highlight" };
  }
  return (
    (e.prototype = {
      dragStart: function (n) {
        var a = n.dragEl;
        qt = a;
      },
      dragOverValid: function (n) {
        var a = n.completed,
          r = n.target,
          s = n.onMove,
          o = n.activeSortable,
          u = n.changed,
          l = n.cancel;
        if (o.options.swap) {
          var i = this.sortable.el,
            c = this.options;
          if (r && r !== i) {
            var p = qt;
            s(r) !== !1 ? (_e(r, c.swapClass, !0), (qt = r)) : (qt = null),
              p && p !== qt && _e(p, c.swapClass, !1);
          }
          u(), a(!0), l();
        }
      },
      drop: function (n) {
        var a = n.activeSortable,
          r = n.putSortable,
          s = n.dragEl,
          o = r || this.sortable,
          u = this.options;
        qt && _e(qt, u.swapClass, !1),
          qt &&
            (u.swap || (r && r.options.swap)) &&
            s !== qt &&
            (o.captureAnimationState(),
            o !== a && a.captureAnimationState(),
            sp(s, qt),
            o.animateAll(),
            o !== a && a.animateAll());
      },
      nulling: function () {
        qt = null;
      },
    }),
    on(e, {
      pluginName: "swap",
      eventProperties: function () {
        return { swapItem: qt };
      },
    })
  );
}
function sp(e, t) {
  var n = e.parentNode,
    a = t.parentNode,
    r,
    s;
  !n ||
    !a ||
    n.isEqualNode(t) ||
    a.isEqualNode(e) ||
    ((r = ot(e)),
    (s = ot(t)),
    n.isEqualNode(a) && r < s && s++,
    n.insertBefore(t, n.children[r]),
    a.insertBefore(e, a.children[s]));
}
var Ie = [],
  Wt = [],
  Zo,
  un,
  qo = !1,
  Ut = !1,
  Oo = !1,
  Xe,
  _o,
  jr;
function ip() {
  function e(t) {
    for (var n in this)
      n.charAt(0) === "_" &&
        typeof this[n] == "function" &&
        (this[n] = this[n].bind(this));
    t.options.supportPointer
      ? Re(document, "pointerup", this._deselectMultiDrag)
      : (Re(document, "mouseup", this._deselectMultiDrag),
        Re(document, "touchend", this._deselectMultiDrag)),
      Re(document, "keydown", this._checkKeyDown),
      Re(document, "keyup", this._checkKeyUp),
      (this.defaults = {
        selectedClass: "sortable-selected",
        multiDragKey: null,
        setData: function (r, s) {
          var o = "";
          Ie.length && un === t
            ? Ie.forEach(function (u, l) {
                o += (l ? ", " : "") + u.textContent;
              })
            : (o = s.textContent),
            r.setData("Text", o);
        },
      });
  }
  return (
    (e.prototype = {
      multiDragKeyDown: !1,
      isMultiDrag: !1,
      delayStartGlobal: function (n) {
        var a = n.dragEl;
        Xe = a;
      },
      delayEnded: function () {
        this.isMultiDrag = ~Ie.indexOf(Xe);
      },
      setupClone: function (n) {
        var a = n.sortable,
          r = n.cancel;
        if (this.isMultiDrag) {
          for (var s = 0; s < Ie.length; s++)
            Wt.push(Ss(Ie[s])),
              (Wt[s].sortableIndex = Ie[s].sortableIndex),
              (Wt[s].draggable = !1),
              (Wt[s].style["will-change"] = ""),
              _e(Wt[s], this.options.selectedClass, !1),
              Ie[s] === Xe && _e(Wt[s], this.options.chosenClass, !1);
          a._hideClone(), r();
        }
      },
      clone: function (n) {
        var a = n.sortable,
          r = n.rootEl,
          s = n.dispatchSortableEvent,
          o = n.cancel;
        this.isMultiDrag &&
          (this.options.removeCloneOnHide ||
            (Ie.length && un === a && (Mi(!0, r), s("clone"), o())));
      },
      showClone: function (n) {
        var a = n.cloneNowShown,
          r = n.rootEl,
          s = n.cancel;
        this.isMultiDrag &&
          (Mi(!1, r),
          Wt.forEach(function (o) {
            ve(o, "display", "");
          }),
          a(),
          (jr = !1),
          s());
      },
      hideClone: function (n) {
        var a = this;
        n.sortable;
        var r = n.cloneNowHidden,
          s = n.cancel;
        this.isMultiDrag &&
          (Wt.forEach(function (o) {
            ve(o, "display", "none"),
              a.options.removeCloneOnHide &&
                o.parentNode &&
                o.parentNode.removeChild(o);
          }),
          r(),
          (jr = !0),
          s());
      },
      dragStartGlobal: function (n) {
        n.sortable,
          !this.isMultiDrag && un && un.multiDrag._deselectMultiDrag(),
          Ie.forEach(function (a) {
            a.sortableIndex = ot(a);
          }),
          (Ie = Ie.sort(function (a, r) {
            return a.sortableIndex - r.sortableIndex;
          })),
          (Oo = !0);
      },
      dragStarted: function (n) {
        var a = this,
          r = n.sortable;
        if (this.isMultiDrag) {
          if (
            this.options.sort &&
            (r.captureAnimationState(), this.options.animation)
          ) {
            Ie.forEach(function (o) {
              o !== Xe && ve(o, "position", "absolute");
            });
            var s = Qe(Xe, !1, !0, !0);
            Ie.forEach(function (o) {
              o !== Xe && Ai(o, s);
            }),
              (Ut = !0),
              (qo = !0);
          }
          r.animateAll(function () {
            (Ut = !1),
              (qo = !1),
              a.options.animation &&
                Ie.forEach(function (o) {
                  Ka(o);
                }),
              a.options.sort && Br();
          });
        }
      },
      dragOver: function (n) {
        var a = n.target,
          r = n.completed,
          s = n.cancel;
        Ut && ~Ie.indexOf(a) && (r(!1), s());
      },
      revert: function (n) {
        var a = n.fromSortable,
          r = n.rootEl,
          s = n.sortable,
          o = n.dragRect;
        Ie.length > 1 &&
          (Ie.forEach(function (u) {
            s.addAnimationState({ target: u, rect: Ut ? Qe(u) : o }),
              Ka(u),
              (u.fromRect = o),
              a.removeAnimationState(u);
          }),
          (Ut = !1),
          lp(!this.options.removeCloneOnHide, r));
      },
      dragOverCompleted: function (n) {
        var a = n.sortable,
          r = n.isOwner,
          s = n.insertion,
          o = n.activeSortable,
          u = n.parentEl,
          l = n.putSortable,
          i = this.options;
        if (s) {
          if (
            (r && o._hideClone(),
            (qo = !1),
            i.animation &&
              Ie.length > 1 &&
              (Ut || (!r && !o.options.sort && !l)))
          ) {
            var c = Qe(Xe, !1, !0, !0);
            Ie.forEach(function (y) {
              y !== Xe && (Ai(y, c), u.appendChild(y));
            }),
              (Ut = !0);
          }
          if (!r)
            if ((Ut || Br(), Ie.length > 1)) {
              var p = jr;
              o._showClone(a),
                o.options.animation &&
                  !jr &&
                  p &&
                  Wt.forEach(function (y) {
                    o.addAnimationState({ target: y, rect: _o }),
                      (y.fromRect = _o),
                      (y.thisAnimationDuration = null);
                  });
            } else o._showClone(a);
        }
      },
      dragOverAnimationCapture: function (n) {
        var a = n.dragRect,
          r = n.isOwner,
          s = n.activeSortable;
        if (
          (Ie.forEach(function (u) {
            u.thisAnimationDuration = null;
          }),
          s.options.animation && !r && s.multiDrag.isMultiDrag)
        ) {
          _o = on({}, a);
          var o = lo(Xe, !0);
          (_o.top -= o.f), (_o.left -= o.e);
        }
      },
      dragOverAnimationComplete: function () {
        Ut && ((Ut = !1), Br());
      },
      drop: function (n) {
        var a = n.originalEvent,
          r = n.rootEl,
          s = n.parentEl,
          o = n.sortable,
          u = n.dispatchSortableEvent,
          l = n.oldIndex,
          i = n.putSortable,
          c = i || this.sortable;
        if (a) {
          var p = this.options,
            y = s.children;
          if (!Oo)
            if (
              (p.multiDragKey &&
                !this.multiDragKeyDown &&
                this._deselectMultiDrag(),
              _e(Xe, p.selectedClass, !~Ie.indexOf(Xe)),
              ~Ie.indexOf(Xe))
            )
              Ie.splice(Ie.indexOf(Xe), 1),
                (Zo = null),
                nr({ sortable: o, rootEl: r, name: "deselect", targetEl: Xe });
            else {
              if (
                (Ie.push(Xe),
                nr({ sortable: o, rootEl: r, name: "select", targetEl: Xe }),
                a.shiftKey && Zo && o.el.contains(Zo))
              ) {
                var E = ot(Zo),
                  v = ot(Xe);
                if (~E && ~v && E !== v) {
                  var h, b;
                  for (
                    v > E ? ((b = E), (h = v)) : ((b = v), (h = E + 1));
                    b < h;
                    b++
                  )
                    ~Ie.indexOf(y[b]) ||
                      (_e(y[b], p.selectedClass, !0),
                      Ie.push(y[b]),
                      nr({
                        sortable: o,
                        rootEl: r,
                        name: "select",
                        targetEl: y[b],
                      }));
                }
              } else Zo = Xe;
              un = c;
            }
          if (Oo && this.isMultiDrag) {
            if (((Ut = !1), (s[At].options.sort || s !== r) && Ie.length > 1)) {
              var S = Qe(Xe),
                T = ot(Xe, ":not(." + this.options.selectedClass + ")");
              if (
                (!qo && p.animation && (Xe.thisAnimationDuration = null),
                c.captureAnimationState(),
                !qo &&
                  (p.animation &&
                    ((Xe.fromRect = S),
                    Ie.forEach(function (C) {
                      if (((C.thisAnimationDuration = null), C !== Xe)) {
                        var N = Ut ? Qe(C) : S;
                        (C.fromRect = N),
                          c.addAnimationState({ target: C, rect: N });
                      }
                    })),
                  Br(),
                  Ie.forEach(function (C) {
                    y[T] ? s.insertBefore(C, y[T]) : s.appendChild(C), T++;
                  }),
                  l === ot(Xe)))
              ) {
                var $ = !1;
                Ie.forEach(function (C) {
                  if (C.sortableIndex !== ot(C)) {
                    $ = !0;
                    return;
                  }
                }),
                  $ && u("update");
              }
              Ie.forEach(function (C) {
                Ka(C);
              }),
                c.animateAll();
            }
            un = c;
          }
          (r === s || (i && i.lastPutMode !== "clone")) &&
            Wt.forEach(function (C) {
              C.parentNode && C.parentNode.removeChild(C);
            });
        }
      },
      nullingGlobal: function () {
        (this.isMultiDrag = Oo = !1), (Wt.length = 0);
      },
      destroyGlobal: function () {
        this._deselectMultiDrag(),
          we(document, "pointerup", this._deselectMultiDrag),
          we(document, "mouseup", this._deselectMultiDrag),
          we(document, "touchend", this._deselectMultiDrag),
          we(document, "keydown", this._checkKeyDown),
          we(document, "keyup", this._checkKeyUp);
      },
      _deselectMultiDrag: function (n) {
        if (
          !(typeof Oo < "u" && Oo) &&
          un === this.sortable &&
          !(n && fn(n.target, this.options.draggable, this.sortable.el, !1)) &&
          !(n && n.button !== 0)
        )
          for (; Ie.length; ) {
            var a = Ie[0];
            _e(a, this.options.selectedClass, !1),
              Ie.shift(),
              nr({
                sortable: this.sortable,
                rootEl: this.sortable.el,
                name: "deselect",
                targetEl: a,
              });
          }
      },
      _checkKeyDown: function (n) {
        n.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
      },
      _checkKeyUp: function (n) {
        n.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
      },
    }),
    on(e, {
      pluginName: "multiDrag",
      utils: {
        select: function (n) {
          var a = n.parentNode[At];
          !a ||
            !a.options.multiDrag ||
            ~Ie.indexOf(n) ||
            (un && un !== a && (un.multiDrag._deselectMultiDrag(), (un = a)),
            _e(n, a.options.selectedClass, !0),
            Ie.push(n));
        },
        deselect: function (n) {
          var a = n.parentNode[At],
            r = Ie.indexOf(n);
          !a ||
            !a.options.multiDrag ||
            !~r ||
            (_e(n, a.options.selectedClass, !1), Ie.splice(r, 1));
        },
      },
      eventProperties: function () {
        var n = this,
          a = [],
          r = [];
        return (
          Ie.forEach(function (s) {
            a.push({ multiDragElement: s, index: s.sortableIndex });
            var o;
            Ut && s !== Xe
              ? (o = -1)
              : Ut
                ? (o = ot(s, ":not(." + n.options.selectedClass + ")"))
                : (o = ot(s)),
              r.push({ multiDragElement: s, index: o });
          }),
          {
            items: Pf(Ie),
            clones: [].concat(Wt),
            oldIndicies: a,
            newIndicies: r,
          }
        );
      },
      optionListeners: {
        multiDragKey: function (n) {
          return (
            (n = n.toLowerCase()),
            n === "ctrl"
              ? (n = "Control")
              : n.length > 1 && (n = n.charAt(0).toUpperCase() + n.substr(1)),
            n
          );
        },
      },
    })
  );
}
function lp(e, t) {
  Ie.forEach(function (n, a) {
    var r = t.children[n.sortableIndex + (e ? Number(a) : 0)];
    r ? t.insertBefore(n, r) : t.appendChild(n);
  });
}
function Mi(e, t) {
  Wt.forEach(function (n, a) {
    var r = t.children[n.sortableIndex + (e ? Number(a) : 0)];
    r ? t.insertBefore(n, r) : t.appendChild(n);
  });
}
function Br() {
  Ie.forEach(function (e) {
    e !== Xe && e.parentNode && e.parentNode.removeChild(e);
  });
}
ye.mount(new rp());
ye.mount(Is, Ts);
const up = Object.freeze(
  Object.defineProperty(
    { __proto__: null, MultiDrag: ip, Sortable: ye, Swap: ap, default: ye },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Qr = { exports: {} },
  ts = { exports: {} },
  ns = {};
const Vo = Symbol(""),
  Ro = Symbol(""),
  ba = Symbol(""),
  fr = Symbol(""),
  Cs = Symbol(""),
  Jn = Symbol(""),
  Os = Symbol(""),
  xs = Symbol(""),
  Sa = Symbol(""),
  Ta = Symbol(""),
  Bo = Symbol(""),
  Ia = Symbol(""),
  Ns = Symbol(""),
  Ca = Symbol(""),
  Oa = Symbol(""),
  xa = Symbol(""),
  Na = Symbol(""),
  wa = Symbol(""),
  Da = Symbol(""),
  ws = Symbol(""),
  Ds = Symbol(""),
  Tr = Symbol(""),
  pr = Symbol(""),
  Aa = Symbol(""),
  Pa = Symbol(""),
  Mo = Symbol(""),
  Go = Symbol(""),
  Ra = Symbol(""),
  ua = Symbol(""),
  Cl = Symbol(""),
  da = Symbol(""),
  mr = Symbol(""),
  Ol = Symbol(""),
  xl = Symbol(""),
  ka = Symbol(""),
  Nl = Symbol(""),
  wl = Symbol(""),
  Va = Symbol(""),
  As = Symbol(""),
  fo = {
    [Vo]: "Fragment",
    [Ro]: "Teleport",
    [ba]: "Suspense",
    [fr]: "KeepAlive",
    [Cs]: "BaseTransition",
    [Jn]: "openBlock",
    [Os]: "createBlock",
    [xs]: "createElementBlock",
    [Sa]: "createVNode",
    [Ta]: "createElementVNode",
    [Bo]: "createCommentVNode",
    [Ia]: "createTextVNode",
    [Ns]: "createStaticVNode",
    [Ca]: "resolveComponent",
    [Oa]: "resolveDynamicComponent",
    [xa]: "resolveDirective",
    [Na]: "resolveFilter",
    [wa]: "withDirectives",
    [Da]: "renderList",
    [ws]: "renderSlot",
    [Ds]: "createSlots",
    [Tr]: "toDisplayString",
    [pr]: "mergeProps",
    [Aa]: "normalizeClass",
    [Pa]: "normalizeStyle",
    [Mo]: "normalizeProps",
    [Go]: "guardReactiveProps",
    [Ra]: "toHandlers",
    [ua]: "camelize",
    [Cl]: "capitalize",
    [da]: "toHandlerKey",
    [mr]: "setBlockTracking",
    [Ol]: "pushScopeId",
    [xl]: "popScopeId",
    [ka]: "withCtx",
    [Nl]: "unref",
    [wl]: "isRef",
    [Va]: "withMemo",
    [As]: "isMemoSame",
  };
function Dl(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    fo[t] = e[t];
  });
}
const dp = { HTML: 0, 0: "HTML", SVG: 1, 1: "SVG", MATH_ML: 2, 2: "MATH_ML" },
  cp = {
    ROOT: 0,
    0: "ROOT",
    ELEMENT: 1,
    1: "ELEMENT",
    TEXT: 2,
    2: "TEXT",
    COMMENT: 3,
    3: "COMMENT",
    SIMPLE_EXPRESSION: 4,
    4: "SIMPLE_EXPRESSION",
    INTERPOLATION: 5,
    5: "INTERPOLATION",
    ATTRIBUTE: 6,
    6: "ATTRIBUTE",
    DIRECTIVE: 7,
    7: "DIRECTIVE",
    COMPOUND_EXPRESSION: 8,
    8: "COMPOUND_EXPRESSION",
    IF: 9,
    9: "IF",
    IF_BRANCH: 10,
    10: "IF_BRANCH",
    FOR: 11,
    11: "FOR",
    TEXT_CALL: 12,
    12: "TEXT_CALL",
    VNODE_CALL: 13,
    13: "VNODE_CALL",
    JS_CALL_EXPRESSION: 14,
    14: "JS_CALL_EXPRESSION",
    JS_OBJECT_EXPRESSION: 15,
    15: "JS_OBJECT_EXPRESSION",
    JS_PROPERTY: 16,
    16: "JS_PROPERTY",
    JS_ARRAY_EXPRESSION: 17,
    17: "JS_ARRAY_EXPRESSION",
    JS_FUNCTION_EXPRESSION: 18,
    18: "JS_FUNCTION_EXPRESSION",
    JS_CONDITIONAL_EXPRESSION: 19,
    19: "JS_CONDITIONAL_EXPRESSION",
    JS_CACHE_EXPRESSION: 20,
    20: "JS_CACHE_EXPRESSION",
    JS_BLOCK_STATEMENT: 21,
    21: "JS_BLOCK_STATEMENT",
    JS_TEMPLATE_LITERAL: 22,
    22: "JS_TEMPLATE_LITERAL",
    JS_IF_STATEMENT: 23,
    23: "JS_IF_STATEMENT",
    JS_ASSIGNMENT_EXPRESSION: 24,
    24: "JS_ASSIGNMENT_EXPRESSION",
    JS_SEQUENCE_EXPRESSION: 25,
    25: "JS_SEQUENCE_EXPRESSION",
    JS_RETURN_STATEMENT: 26,
    26: "JS_RETURN_STATEMENT",
  },
  fp = {
    ELEMENT: 0,
    0: "ELEMENT",
    COMPONENT: 1,
    1: "COMPONENT",
    SLOT: 2,
    2: "SLOT",
    TEMPLATE: 3,
    3: "TEMPLATE",
  },
  pp = {
    NOT_CONSTANT: 0,
    0: "NOT_CONSTANT",
    CAN_SKIP_PATCH: 1,
    1: "CAN_SKIP_PATCH",
    CAN_CACHE: 2,
    2: "CAN_CACHE",
    CAN_STRINGIFY: 3,
    3: "CAN_STRINGIFY",
  },
  vt = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
    source: "",
  };
function Al(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: vt,
  };
}
function Lo(e, t, n, a, r, s, o, u = !1, l = !1, i = !1, c = vt) {
  return (
    e &&
      (u ? (e.helper(Jn), e.helper(vo(e.inSSR, i))) : e.helper(mo(e.inSSR, i)),
      o && e.helper(wa)),
    {
      type: 13,
      tag: t,
      props: n,
      children: a,
      patchFlag: r,
      dynamicProps: s,
      directives: o,
      isBlock: u,
      disableTracking: l,
      isComponent: i,
      loc: c,
    }
  );
}
function Yn(e, t = vt) {
  return { type: 17, loc: t, elements: e };
}
function Qt(e, t = vt) {
  return { type: 15, loc: t, properties: e };
}
function lt(e, t) {
  return { type: 16, loc: vt, key: mt(e) ? Ce(e, !0) : e, value: t };
}
function Ce(e, t = !1, n = vt, a = 0) {
  return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : a };
}
function mp(e, t) {
  return { type: 5, loc: t, content: mt(e) ? Ce(e, !1, t) : e };
}
function nn(e, t = vt) {
  return { type: 8, loc: t, children: e };
}
function pt(e, t = [], n = vt) {
  return { type: 14, loc: n, callee: e, arguments: t };
}
function po(e, t = void 0, n = !1, a = !1, r = vt) {
  return { type: 18, params: e, returns: t, newline: n, isSlot: a, loc: r };
}
function ca(e, t, n, a = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: a,
    loc: vt,
  };
}
function Pl(e, t, n = !1, a = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: a,
    needArraySpread: !1,
    loc: vt,
  };
}
function Rl(e) {
  return { type: 21, body: e, loc: vt };
}
function vp(e) {
  return { type: 22, elements: e, loc: vt };
}
function gp(e, t, n) {
  return { type: 23, test: e, consequent: t, alternate: n, loc: vt };
}
function hp(e, t) {
  return { type: 24, left: e, right: t, loc: vt };
}
function yp(e) {
  return { type: 25, expressions: e, loc: vt };
}
function Ep(e) {
  return { type: 26, returns: e, loc: vt };
}
function mo(e, t) {
  return e || t ? Sa : Ta;
}
function vo(e, t) {
  return e || t ? Os : xs;
}
function Ma(e, { helper: t, removeHelper: n, inSSR: a }) {
  e.isBlock ||
    ((e.isBlock = !0), n(mo(a, e.isComponent)), t(Jn), t(vo(a, e.isComponent)));
}
const Li = new Uint8Array([123, 123]),
  Fi = new Uint8Array([125, 125]);
function $i(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Jt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function $n(e) {
  return e === 47 || e === 62 || Jt(e);
}
function fa(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
const xt = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]),
};
class bp {
  constructor(t, n) {
    (this.stack = t),
      (this.cbs = n),
      (this.state = 1),
      (this.buffer = ""),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.entityStart = 0),
      (this.baseState = 1),
      (this.inRCDATA = !1),
      (this.inXML = !1),
      (this.inVPre = !1),
      (this.newlines = []),
      (this.mode = 0),
      (this.delimiterOpen = Li),
      (this.delimiterClose = Fi),
      (this.delimiterIndex = -1),
      (this.currentSequence = void 0),
      (this.sequenceIndex = 0);
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    (this.state = 1),
      (this.mode = 0),
      (this.buffer = ""),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.baseState = 1),
      (this.inRCDATA = !1),
      (this.currentSequence = void 0),
      (this.newlines.length = 0),
      (this.delimiterOpen = Li),
      (this.delimiterClose = Fi);
  }
  getPos(t) {
    let n = 1,
      a = t + 1;
    for (let r = this.newlines.length - 1; r >= 0; r--) {
      const s = this.newlines[r];
      if (t > s) {
        (n = r + 2), (a = t - s);
        break;
      }
    }
    return { column: a, line: n, offset: t };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60
      ? (this.index > this.sectionStart &&
          this.cbs.ontext(this.sectionStart, this.index),
        (this.state = 5),
        (this.sectionStart = this.index))
      : !this.inVPre &&
        t === this.delimiterOpen[0] &&
        ((this.state = 2),
        (this.delimiterIndex = 0),
        this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n),
          (this.state = 3),
          (this.sectionStart = n);
      } else this.delimiterIndex++;
    else
      this.inRCDATA
        ? ((this.state = 32), this.stateInRCDATA(t))
        : ((this.state = 1), this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] &&
      ((this.state = 4),
      (this.delimiterIndex = 0),
      this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex]
      ? this.delimiterIndex === this.delimiterClose.length - 1
        ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1),
          this.inRCDATA ? (this.state = 32) : (this.state = 1),
          (this.sectionStart = this.index + 1))
        : this.delimiterIndex++
      : ((this.state = 3), this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? $n(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    (this.sequenceIndex = 0), (this.state = 6), this.stateInTagName(t);
  }
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Jt(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const a = this.index;
          (this.index = n),
            this.cbs.ontext(this.sectionStart, n),
            (this.index = a);
        }
        (this.sectionStart = n + 2),
          this.stateInClosingTagName(t),
          (this.inRCDATA = !1);
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex]
      ? (this.sequenceIndex += 1)
      : this.sequenceIndex === 0
        ? this.currentSequence === xt.TitleEnd ||
          (this.currentSequence === xt.TextareaEnd && !this.inSFCRoot)
          ? !this.inVPre &&
            t === this.delimiterOpen[0] &&
            ((this.state = 2),
            (this.delimiterIndex = 0),
            this.stateInterpolationOpen(t))
          : this.fastForwardTo(60) && (this.sequenceIndex = 1)
        : (this.sequenceIndex = +(t === 60));
  }
  stateCDATASequence(t) {
    t === xt.Cdata[this.sequenceIndex]
      ? ++this.sequenceIndex === xt.Cdata.length &&
        ((this.state = 28),
        (this.currentSequence = xt.CdataEnd),
        (this.sequenceIndex = 0),
        (this.sectionStart = this.index + 1))
      : ((this.sequenceIndex = 0),
        (this.state = 23),
        this.stateInDeclaration(t));
  }
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if ((n === 10 && this.newlines.push(this.index), n === t)) return !0;
    }
    return (this.index = this.buffer.length - 1), !1;
  }
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex]
      ? ++this.sequenceIndex === this.currentSequence.length &&
        (this.currentSequence === xt.CdataEnd
          ? this.cbs.oncdata(this.sectionStart, this.index - 2)
          : this.cbs.oncomment(this.sectionStart, this.index - 2),
        (this.sequenceIndex = 0),
        (this.sectionStart = this.index + 1),
        (this.state = 1))
      : this.sequenceIndex === 0
        ? this.fastForwardTo(this.currentSequence[0]) &&
          (this.sequenceIndex = 1)
        : t !== this.currentSequence[this.sequenceIndex - 1] &&
          (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), (this.state = 31);
  }
  enterRCDATA(t, n) {
    (this.inRCDATA = !0), (this.currentSequence = t), (this.sequenceIndex = n);
  }
  stateBeforeTagName(t) {
    t === 33
      ? ((this.state = 22), (this.sectionStart = this.index + 1))
      : t === 63
        ? ((this.state = 24), (this.sectionStart = this.index + 1))
        : $i(t)
          ? ((this.sectionStart = this.index),
            this.mode === 0
              ? (this.state = 6)
              : this.inSFCRoot
                ? (this.state = 34)
                : this.inXML
                  ? (this.state = 6)
                  : t === 116
                    ? (this.state = 30)
                    : (this.state = t === 115 ? 29 : 6))
          : t === 47
            ? (this.state = 8)
            : ((this.state = 1), this.stateText(t));
  }
  stateInTagName(t) {
    $n(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if ($n(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(fa("</" + n), 0),
        this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index),
      (this.sectionStart = -1),
      (this.state = 11),
      this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Jt(t) ||
      (t === 62
        ? ((this.state = 1), (this.sectionStart = this.index + 1))
        : ((this.state = $i(t) ? 9 : 27), (this.sectionStart = this.index)));
  }
  stateInClosingTagName(t) {
    (t === 62 || Jt(t)) &&
      (this.cbs.onclosetag(this.sectionStart, this.index),
      (this.sectionStart = -1),
      (this.state = 10),
      this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && ((this.state = 1), (this.sectionStart = this.index + 1));
  }
  stateBeforeAttrName(t) {
    t === 62
      ? (this.cbs.onopentagend(this.index),
        this.inRCDATA ? (this.state = 32) : (this.state = 1),
        (this.sectionStart = this.index + 1))
      : t === 47
        ? (this.state = 7)
        : t === 60 && this.peek() === 47
          ? (this.cbs.onopentagend(this.index),
            (this.state = 5),
            (this.sectionStart = this.index))
          : Jt(t) || this.handleAttrStart(t);
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45
      ? ((this.state = 13), (this.sectionStart = this.index))
      : t === 46 || t === 58 || t === 64 || t === 35
        ? (this.cbs.ondirname(this.index, this.index + 1),
          (this.state = 14),
          (this.sectionStart = this.index + 1))
        : ((this.state = 12), (this.sectionStart = this.index));
  }
  stateInSelfClosingTag(t) {
    t === 62
      ? (this.cbs.onselfclosingtag(this.index),
        (this.state = 1),
        (this.sectionStart = this.index + 1),
        (this.inRCDATA = !1))
      : Jt(t) || ((this.state = 11), this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    (t === 61 || $n(t)) &&
      (this.cbs.onattribname(this.sectionStart, this.index),
      this.handleAttrNameEnd(t));
  }
  stateInDirName(t) {
    t === 61 || $n(t)
      ? (this.cbs.ondirname(this.sectionStart, this.index),
        this.handleAttrNameEnd(t))
      : t === 58
        ? (this.cbs.ondirname(this.sectionStart, this.index),
          (this.state = 14),
          (this.sectionStart = this.index + 1))
        : t === 46 &&
          (this.cbs.ondirname(this.sectionStart, this.index),
          (this.state = 16),
          (this.sectionStart = this.index + 1));
  }
  stateInDirArg(t) {
    t === 61 || $n(t)
      ? (this.cbs.ondirarg(this.sectionStart, this.index),
        this.handleAttrNameEnd(t))
      : t === 91
        ? (this.state = 15)
        : t === 46 &&
          (this.cbs.ondirarg(this.sectionStart, this.index),
          (this.state = 16),
          (this.sectionStart = this.index + 1));
  }
  stateInDynamicDirArg(t) {
    t === 93
      ? (this.state = 14)
      : (t === 61 || $n(t)) &&
        (this.cbs.ondirarg(this.sectionStart, this.index + 1),
        this.handleAttrNameEnd(t));
  }
  stateInDirModifier(t) {
    t === 61 || $n(t)
      ? (this.cbs.ondirmodifier(this.sectionStart, this.index),
        this.handleAttrNameEnd(t))
      : t === 46 &&
        (this.cbs.ondirmodifier(this.sectionStart, this.index),
        (this.sectionStart = this.index + 1));
  }
  handleAttrNameEnd(t) {
    (this.sectionStart = this.index),
      (this.state = 17),
      this.cbs.onattribnameend(this.index),
      this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61
      ? (this.state = 18)
      : t === 47 || t === 62
        ? (this.cbs.onattribend(0, this.sectionStart),
          (this.sectionStart = -1),
          (this.state = 11),
          this.stateBeforeAttrName(t))
        : Jt(t) ||
          (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34
      ? ((this.state = 19), (this.sectionStart = this.index + 1))
      : t === 39
        ? ((this.state = 20), (this.sectionStart = this.index + 1))
        : Jt(t) ||
          ((this.sectionStart = this.index),
          (this.state = 21),
          this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) &&
      (this.cbs.onattribdata(this.sectionStart, this.index),
      (this.sectionStart = -1),
      this.cbs.onattribend(n === 34 ? 3 : 2, this.index + 1),
      (this.state = 11));
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Jt(t) || t === 62
      ? (this.cbs.onattribdata(this.sectionStart, this.index),
        (this.sectionStart = -1),
        this.cbs.onattribend(1, this.index),
        (this.state = 11),
        this.stateBeforeAttrName(t))
      : (t === 39 || t === 60 || t === 61 || t === 96) &&
        this.cbs.onerr(18, this.index);
  }
  stateBeforeDeclaration(t) {
    t === 91
      ? ((this.state = 26), (this.sequenceIndex = 0))
      : (this.state = t === 45 ? 25 : 23);
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) &&
      ((this.state = 1), (this.sectionStart = this.index + 1));
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) &&
      (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
      (this.state = 1),
      (this.sectionStart = this.index + 1));
  }
  stateBeforeComment(t) {
    t === 45
      ? ((this.state = 28),
        (this.currentSequence = xt.CommentEnd),
        (this.sequenceIndex = 2),
        (this.sectionStart = this.index + 1))
      : (this.state = 23);
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) &&
      (this.cbs.oncomment(this.sectionStart, this.index),
      (this.state = 1),
      (this.sectionStart = this.index + 1));
  }
  stateBeforeSpecialS(t) {
    t === xt.ScriptEnd[3]
      ? this.startSpecial(xt.ScriptEnd, 4)
      : t === xt.StyleEnd[3]
        ? this.startSpecial(xt.StyleEnd, 4)
        : ((this.state = 6), this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === xt.TitleEnd[3]
      ? this.startSpecial(xt.TitleEnd, 4)
      : t === xt.TextareaEnd[3]
        ? this.startSpecial(xt.TextareaEnd, 4)
        : ((this.state = 6), this.stateInTagName(t));
  }
  startEntity() {}
  stateInEntity() {}
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (
        (n === 10 && this.state !== 33 && this.newlines.push(this.index),
        this.state)
      ) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  cleanup() {
    this.sectionStart !== this.index &&
      (this.state === 1 || (this.state === 32 && this.sequenceIndex === 0)
        ? (this.cbs.ontext(this.sectionStart, this.index),
          (this.sectionStart = this.index))
        : (this.state === 19 || this.state === 20 || this.state === 21) &&
          (this.cbs.onattribdata(this.sectionStart, this.index),
          (this.sectionStart = this.index)));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t ||
      (this.state === 28
        ? this.currentSequence === xt.CdataEnd
          ? this.cbs.oncdata(this.sectionStart, t)
          : this.cbs.oncomment(this.sectionStart, t)
        : this.state === 6 ||
          this.state === 11 ||
          this.state === 18 ||
          this.state === 17 ||
          this.state === 12 ||
          this.state === 13 ||
          this.state === 14 ||
          this.state === 15 ||
          this.state === 16 ||
          this.state === 20 ||
          this.state === 19 ||
          this.state === 21 ||
          this.state === 9 ||
          this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {}
}
const Sp = {
    COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT",
    COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC",
    COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER",
    COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE",
    COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE",
    COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE",
    COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE",
    COMPILER_FILTERS: "COMPILER_FILTERS",
  },
  Tp = {
    COMPILER_IS_ON_ELEMENT: {
      message:
        'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
      link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",
    },
    COMPILER_V_BIND_SYNC: {
      message: (e) =>
        `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
      link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html",
    },
    COMPILER_V_BIND_OBJECT_ORDER: {
      message:
        'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
      link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html",
    },
    COMPILER_V_ON_NATIVE: {
      message:
        ".native modifier for v-on has been removed as is no longer necessary.",
      link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",
    },
    COMPILER_V_IF_V_FOR_PRECEDENCE: {
      message:
        "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
      link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",
    },
    COMPILER_NATIVE_TEMPLATE: {
      message:
        "<template> with no special directives will render as a native template element instead of its inner content in Vue 3.",
    },
    COMPILER_INLINE_TEMPLATE: {
      message: '"inline-template" has been removed in Vue 3.',
      link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",
    },
    COMPILER_FILTERS: {
      message:
        'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
      link: "https://v3-migration.vuejs.org/breaking-changes/filters.html",
    },
  };
function cs(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function uo(e, t) {
  const n = cs("MODE", t),
    a = cs(e, t);
  return n === 3 ? a === !0 : a !== !1;
}
function Fo(e, t, n, ...a) {
  return uo(e, t);
}
function Ip(e, t, n, ...a) {
  if (cs(e, t) === "suppress-warning") return;
  const { message: s, link: o } = Tp[e],
    u = `(deprecation ${e}) ${typeof s == "function" ? s(...a) : s}${
      o
        ? `
  Details: ${o}`
        : ""
    }`,
    l = new SyntaxError(u);
  (l.code = e), n && (l.loc = n), t.onWarn(l);
}
function Ps(e) {
  throw e;
}
function kl(e) {}
function We(e, t, n, a) {
  const r = `https://vuejs.org/error-reference/#compiler-${e}`,
    s = new SyntaxError(String(r));
  return (s.code = e), (s.loc = t), s;
}
const Cp = {
    ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0,
    0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
    CDATA_IN_HTML_CONTENT: 1,
    1: "CDATA_IN_HTML_CONTENT",
    DUPLICATE_ATTRIBUTE: 2,
    2: "DUPLICATE_ATTRIBUTE",
    END_TAG_WITH_ATTRIBUTES: 3,
    3: "END_TAG_WITH_ATTRIBUTES",
    END_TAG_WITH_TRAILING_SOLIDUS: 4,
    4: "END_TAG_WITH_TRAILING_SOLIDUS",
    EOF_BEFORE_TAG_NAME: 5,
    5: "EOF_BEFORE_TAG_NAME",
    EOF_IN_CDATA: 6,
    6: "EOF_IN_CDATA",
    EOF_IN_COMMENT: 7,
    7: "EOF_IN_COMMENT",
    EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8,
    8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
    EOF_IN_TAG: 9,
    9: "EOF_IN_TAG",
    INCORRECTLY_CLOSED_COMMENT: 10,
    10: "INCORRECTLY_CLOSED_COMMENT",
    INCORRECTLY_OPENED_COMMENT: 11,
    11: "INCORRECTLY_OPENED_COMMENT",
    INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12,
    12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
    MISSING_ATTRIBUTE_VALUE: 13,
    13: "MISSING_ATTRIBUTE_VALUE",
    MISSING_END_TAG_NAME: 14,
    14: "MISSING_END_TAG_NAME",
    MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15,
    15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
    NESTED_COMMENT: 16,
    16: "NESTED_COMMENT",
    UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17,
    17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
    UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18,
    18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
    UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19,
    19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
    UNEXPECTED_NULL_CHARACTER: 20,
    20: "UNEXPECTED_NULL_CHARACTER",
    UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21,
    21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
    UNEXPECTED_SOLIDUS_IN_TAG: 22,
    22: "UNEXPECTED_SOLIDUS_IN_TAG",
    X_INVALID_END_TAG: 23,
    23: "X_INVALID_END_TAG",
    X_MISSING_END_TAG: 24,
    24: "X_MISSING_END_TAG",
    X_MISSING_INTERPOLATION_END: 25,
    25: "X_MISSING_INTERPOLATION_END",
    X_MISSING_DIRECTIVE_NAME: 26,
    26: "X_MISSING_DIRECTIVE_NAME",
    X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27,
    27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
    X_V_IF_NO_EXPRESSION: 28,
    28: "X_V_IF_NO_EXPRESSION",
    X_V_IF_SAME_KEY: 29,
    29: "X_V_IF_SAME_KEY",
    X_V_ELSE_NO_ADJACENT_IF: 30,
    30: "X_V_ELSE_NO_ADJACENT_IF",
    X_V_FOR_NO_EXPRESSION: 31,
    31: "X_V_FOR_NO_EXPRESSION",
    X_V_FOR_MALFORMED_EXPRESSION: 32,
    32: "X_V_FOR_MALFORMED_EXPRESSION",
    X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33,
    33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
    X_V_BIND_NO_EXPRESSION: 34,
    34: "X_V_BIND_NO_EXPRESSION",
    X_V_ON_NO_EXPRESSION: 35,
    35: "X_V_ON_NO_EXPRESSION",
    X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36,
    36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
    X_V_SLOT_MIXED_SLOT_USAGE: 37,
    37: "X_V_SLOT_MIXED_SLOT_USAGE",
    X_V_SLOT_DUPLICATE_SLOT_NAMES: 38,
    38: "X_V_SLOT_DUPLICATE_SLOT_NAMES",
    X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39,
    39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
    X_V_SLOT_MISPLACED: 40,
    40: "X_V_SLOT_MISPLACED",
    X_V_MODEL_NO_EXPRESSION: 41,
    41: "X_V_MODEL_NO_EXPRESSION",
    X_V_MODEL_MALFORMED_EXPRESSION: 42,
    42: "X_V_MODEL_MALFORMED_EXPRESSION",
    X_V_MODEL_ON_SCOPE_VARIABLE: 43,
    43: "X_V_MODEL_ON_SCOPE_VARIABLE",
    X_V_MODEL_ON_PROPS: 44,
    44: "X_V_MODEL_ON_PROPS",
    X_INVALID_EXPRESSION: 45,
    45: "X_INVALID_EXPRESSION",
    X_KEEP_ALIVE_INVALID_CHILDREN: 46,
    46: "X_KEEP_ALIVE_INVALID_CHILDREN",
    X_PREFIX_ID_NOT_SUPPORTED: 47,
    47: "X_PREFIX_ID_NOT_SUPPORTED",
    X_MODULE_MODE_NOT_SUPPORTED: 48,
    48: "X_MODULE_MODE_NOT_SUPPORTED",
    X_CACHE_HANDLER_NOT_SUPPORTED: 49,
    49: "X_CACHE_HANDLER_NOT_SUPPORTED",
    X_SCOPE_ID_NOT_SUPPORTED: 50,
    50: "X_SCOPE_ID_NOT_SUPPORTED",
    X_VNODE_HOOKS: 51,
    51: "X_VNODE_HOOKS",
    X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52,
    52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
    __EXTEND_POINT__: 53,
    53: "__EXTEND_POINT__",
  },
  Op = {
    0: "Illegal comment.",
    1: "CDATA section is allowed only in XML context.",
    2: "Duplicate attribute.",
    3: "End tag cannot have attributes.",
    4: "Illegal '/' in tags.",
    5: "Unexpected EOF in tag.",
    6: "Unexpected EOF in CDATA section.",
    7: "Unexpected EOF in comment.",
    8: "Unexpected EOF in script.",
    9: "Unexpected EOF in tag.",
    10: "Incorrectly closed comment.",
    11: "Incorrectly opened comment.",
    12: "Illegal tag name. Use '&lt;' to print '<'.",
    13: "Attribute value was expected.",
    14: "End tag name was expected.",
    15: "Whitespace was expected.",
    16: "Unexpected '<!--' in comment.",
    17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    19: "Attribute name cannot start with '='.",
    21: "'<?' is allowed only in XML context.",
    20: "Unexpected null character.",
    22: "Illegal '/' in tags.",
    23: "Invalid end tag.",
    24: "Element is missing end tag.",
    25: "Interpolation end sign was not found.",
    27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    26: "Legal directive name was expected.",
    28: "v-if/v-else-if is missing expression.",
    29: "v-if/else branches must use unique keys.",
    30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
    31: "v-for is missing expression.",
    32: "v-for has invalid expression.",
    33: "<template v-for> key should be placed on the <template> tag.",
    34: "v-bind is missing expression.",
    52: "v-bind with same-name shorthand only allows static argument.",
    35: "v-on is missing expression.",
    36: "Unexpected custom directive on <slot> outlet.",
    37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
    38: "Duplicate slot names found. ",
    39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
    40: "v-slot can only be used on components or <template> tags.",
    41: "v-model is missing expression.",
    42: "v-model value must be a valid JavaScript member expression.",
    43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
    44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
    45: "Error parsing JavaScript expression: ",
    46: "<KeepAlive> expects exactly one child component.",
    51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
    47: '"prefixIdentifiers" option is not supported in this build of compiler.',
    48: "ES module mode is not supported in this build of compiler.",
    49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
    50: '"scopeId" option is only supported in module mode.',
    53: "",
  };
function xp(e, t, n = !1, a = [], r = Object.create(null)) {}
function Np(e, t, n) {
  return !1;
}
function wp(e, t) {
  if (e && (e.type === "ObjectProperty" || e.type === "ArrayPattern")) {
    let n = t.length;
    for (; n--; ) {
      const a = t[n];
      if (a.type === "AssignmentExpression") return !0;
      if (a.type !== "ObjectProperty" && !a.type.endsWith("Pattern")) break;
    }
  }
  return !1;
}
function Dp(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (n.type === "NewExpression") return !0;
    if (n.type !== "MemberExpression") break;
  }
  return !1;
}
function Ap(e, t) {
  for (const n of e.params) for (const a of Sn(n)) t(a);
}
function Vl(e, t) {
  const n = e.type === "SwitchCase" ? e.consequent : e.body;
  for (const a of n)
    if (a.type === "VariableDeclaration") {
      if (a.declare) continue;
      for (const r of a.declarations) for (const s of Sn(r.id)) t(s);
    } else if (
      a.type === "FunctionDeclaration" ||
      a.type === "ClassDeclaration"
    ) {
      if (a.declare || !a.id) continue;
      t(a.id);
    } else Pp(a) ? Rp(a, !0, t) : a.type === "SwitchStatement" && kp(a, !0, t);
}
function Pp(e) {
  return (
    e.type === "ForOfStatement" ||
    e.type === "ForInStatement" ||
    e.type === "ForStatement"
  );
}
function Rp(e, t, n) {
  const a = e.type === "ForStatement" ? e.init : e.left;
  if (a && a.type === "VariableDeclaration" && (a.kind === "var" ? t : !t))
    for (const r of a.declarations) for (const s of Sn(r.id)) n(s);
}
function kp(e, t, n) {
  for (const a of e.cases) {
    for (const r of a.consequent)
      if (r.type === "VariableDeclaration" && (r.kind === "var" ? t : !t))
        for (const s of r.declarations) for (const o of Sn(s.id)) n(o);
    Vl(a, n);
  }
}
function Sn(e, t = []) {
  switch (e.type) {
    case "Identifier":
      t.push(e);
      break;
    case "MemberExpression":
      let n = e;
      for (; n.type === "MemberExpression"; ) n = n.object;
      t.push(n);
      break;
    case "ObjectPattern":
      for (const a of e.properties)
        a.type === "RestElement" ? Sn(a.argument, t) : Sn(a.value, t);
      break;
    case "ArrayPattern":
      e.elements.forEach((a) => {
        a && Sn(a, t);
      });
      break;
    case "RestElement":
      Sn(e.argument, t);
      break;
    case "AssignmentPattern":
      Sn(e.left, t);
      break;
  }
  return t;
}
const Vp = (e) => /Function(?:Expression|Declaration)$|Method$/.test(e.type),
  Ml = (e) =>
    e &&
    (e.type === "ObjectProperty" || e.type === "ObjectMethod") &&
    !e.computed,
  Mp = (e, t) => Ml(t) && t.key === e,
  Ll = [
    "TSAsExpression",
    "TSTypeAssertion",
    "TSNonNullExpression",
    "TSInstantiationExpression",
    "TSSatisfiesExpression",
  ];
function Fl(e) {
  return Ll.includes(e.type) ? Fl(e.expression) : e;
}
const Vt = (e) => e.type === 4 && e.isStatic;
function Rs(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Ro;
    case "Suspense":
    case "suspense":
      return ba;
    case "KeepAlive":
    case "keep-alive":
      return fr;
    case "BaseTransition":
    case "base-transition":
      return Cs;
  }
}
const Lp = /^$|^\d|[^\$\w\xA0-\uFFFF]/,
  Ir = (e) => !Lp.test(e),
  ks = /[A-Za-z_$\xA0-\uFFFF]/,
  Fp = /[\.\?\w$\xA0-\uFFFF]/,
  $p = /\s+[.[]\s*|\s*[.[]\s+/g,
  $l = (e) => (e.type === 4 ? e.content : e.loc.source),
  Ul = (e) => {
    const t = $l(e)
      .trim()
      .replace($p, (u) => u.trim());
    let n = 0,
      a = [],
      r = 0,
      s = 0,
      o = null;
    for (let u = 0; u < t.length; u++) {
      const l = t.charAt(u);
      switch (n) {
        case 0:
          if (l === "[") a.push(n), (n = 1), r++;
          else if (l === "(") a.push(n), (n = 2), s++;
          else if (!(u === 0 ? ks : Fp).test(l)) return !1;
          break;
        case 1:
          l === "'" || l === '"' || l === "`"
            ? (a.push(n), (n = 3), (o = l))
            : l === "["
              ? r++
              : l === "]" && (--r || (n = a.pop()));
          break;
        case 2:
          if (l === "'" || l === '"' || l === "`") a.push(n), (n = 3), (o = l);
          else if (l === "(") s++;
          else if (l === ")") {
            if (u === t.length - 1) return !1;
            --s || (n = a.pop());
          }
          break;
        case 3:
          l === o && ((n = a.pop()), (o = null));
          break;
      }
    }
    return !r && !s;
  },
  Up = sr,
  Vs = Ul,
  jp =
    /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,
  jl = (e) => jp.test($l(e)),
  Bp = sr,
  Bl = jl;
function Gp(e, t, n = t.length) {
  return Gl({ offset: e.offset, line: e.line, column: e.column }, t, n);
}
function Gl(e, t, n = t.length) {
  let a = 0,
    r = -1;
  for (let s = 0; s < n; s++) t.charCodeAt(s) === 10 && (a++, (r = s));
  return (
    (e.offset += n),
    (e.line += a),
    (e.column = r === -1 ? e.column + n : n - r),
    e
  );
}
function Hp(e, t) {
  if (!e) throw new Error(t || "unexpected compiler condition");
}
function kt(e, t, n = !1) {
  for (let a = 0; a < e.props.length; a++) {
    const r = e.props[a];
    if (r.type === 7 && (n || r.exp) && (mt(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function Cr(e, t, n = !1, a = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r];
    if (s.type === 6) {
      if (n) continue;
      if (s.name === t && (s.value || a)) return s;
    } else if (s.name === "bind" && (s.exp || a) && Xn(s.arg, t)) return s;
  }
}
function Xn(e, t) {
  return !!(e && Vt(e) && e.content === t);
}
function Hl(e) {
  return e.props.some(
    (t) =>
      t.type === 7 &&
      t.name === "bind" &&
      (!t.arg || t.arg.type !== 4 || !t.arg.isStatic),
  );
}
function Zr(e) {
  return e.type === 5 || e.type === 2;
}
function fs(e) {
  return e.type === 7 && e.name === "pre";
}
function Ms(e) {
  return e.type === 7 && e.name === "slot";
}
function $o(e) {
  return e.type === 1 && e.tagType === 3;
}
function vr(e) {
  return e.type === 1 && e.tagType === 2;
}
const zp = new Set([Mo, Go]);
function zl(e, t = []) {
  if (e && !mt(e) && e.type === 14) {
    const n = e.callee;
    if (!mt(n) && zp.has(n)) return zl(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function gr(e, t, n) {
  let a,
    r = e.type === 13 ? e.props : e.arguments[2],
    s = [],
    o;
  if (r && !mt(r) && r.type === 14) {
    const u = zl(r);
    (r = u[0]), (s = u[1]), (o = s[s.length - 1]);
  }
  if (r == null || mt(r)) a = Qt([t]);
  else if (r.type === 14) {
    const u = r.arguments[0];
    !mt(u) && u.type === 15
      ? Ui(t, u) || u.properties.unshift(t)
      : r.callee === Ra
        ? (a = pt(n.helper(pr), [Qt([t]), r]))
        : r.arguments.unshift(Qt([t])),
      !a && (a = r);
  } else
    r.type === 15
      ? (Ui(t, r) || r.properties.unshift(t), (a = r))
      : ((a = pt(n.helper(pr), [Qt([t]), r])),
        o && o.callee === Go && (o = s[s.length - 2]));
  e.type === 13
    ? o
      ? (o.arguments[0] = a)
      : (e.props = a)
    : o
      ? (o.arguments[0] = a)
      : (e.arguments[2] = a);
}
function Ui(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const a = e.key.content;
    n = t.properties.some((r) => r.key.type === 4 && r.key.content === a);
  }
  return n;
}
function Uo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, a) => (n === "-" ? "_" : e.charCodeAt(a).toString()))}`;
}
function cn(e, t) {
  if (!e || Object.keys(t).length === 0) return !1;
  switch (e.type) {
    case 1:
      for (let n = 0; n < e.props.length; n++) {
        const a = e.props[n];
        if (a.type === 7 && (cn(a.arg, t) || cn(a.exp, t))) return !0;
      }
      return e.children.some((n) => cn(n, t));
    case 11:
      return cn(e.source, t) ? !0 : e.children.some((n) => cn(n, t));
    case 9:
      return e.branches.some((n) => cn(n, t));
    case 10:
      return cn(e.condition, t) ? !0 : e.children.some((n) => cn(n, t));
    case 4:
      return !e.isStatic && Ir(e.content) && !!t[e.content];
    case 8:
      return e.children.some((n) => ll(n) && cn(n, t));
    case 5:
    case 12:
      return cn(e.content, t);
    case 2:
    case 3:
    case 20:
      return !1;
    default:
      return !1;
  }
}
function Xl(e) {
  return e.type === 14 && e.callee === Va ? e.arguments[1].returns : e;
}
const Kl = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,
  Wl = {
    parseMode: "base",
    ns: 0,
    delimiters: ["{{", "}}"],
    getNamespace: () => 0,
    isVoidTag: Vr,
    isPreTag: Vr,
    isIgnoreNewlineTag: Vr,
    isCustomElement: Vr,
    onError: Ps,
    onWarn: kl,
    comments: !1,
    prefixIdentifiers: !1,
  };
let $e = Wl,
  hr = null,
  Vn = "",
  wt = null,
  Pe = null,
  jt = "",
  Pn = -1,
  ao = -1,
  Ls = 0,
  jn = !1,
  ps = null;
const Je = [],
  rt = new bp(Je, {
    onerr: Dn,
    ontext(e, t) {
      Gr(Et(e, t), e, t);
    },
    ontextentity(e, t, n) {
      Gr(e, t, n);
    },
    oninterpolation(e, t) {
      if (jn) return Gr(Et(e, t), e, t);
      let n = e + rt.delimiterOpen.length,
        a = t - rt.delimiterClose.length;
      for (; Jt(Vn.charCodeAt(n)); ) n++;
      for (; Jt(Vn.charCodeAt(a - 1)); ) a--;
      let r = Et(n, a);
      r.includes("&") && (r = $e.decodeEntities(r, !1)),
        ms({ type: 5, content: _r(r, !1, it(n, a)), loc: it(e, t) });
    },
    onopentagname(e, t) {
      const n = Et(e, t);
      wt = {
        type: 1,
        tag: n,
        ns: $e.getNamespace(n, Je[0], $e.ns),
        tagType: 0,
        props: [],
        children: [],
        loc: it(e - 1, t),
        codegenNode: void 0,
      };
    },
    onopentagend(e) {
      Bi(e);
    },
    onclosetag(e, t) {
      const n = Et(e, t);
      if (!$e.isVoidTag(n)) {
        let a = !1;
        for (let r = 0; r < Je.length; r++)
          if (Je[r].tag.toLowerCase() === n.toLowerCase()) {
            (a = !0), r > 0 && Dn(24, Je[0].loc.start.offset);
            for (let o = 0; o <= r; o++) {
              const u = Je.shift();
              qr(u, t, o < r);
            }
            break;
          }
        a || Dn(23, Yl(e, 60));
      }
    },
    onselfclosingtag(e) {
      const t = wt.tag;
      (wt.isSelfClosing = !0),
        Bi(e),
        Je[0] && Je[0].tag === t && qr(Je.shift(), e);
    },
    onattribname(e, t) {
      Pe = {
        type: 6,
        name: Et(e, t),
        nameLoc: it(e, t),
        value: void 0,
        loc: it(e),
      };
    },
    ondirname(e, t) {
      const n = Et(e, t),
        a =
          n === "." || n === ":"
            ? "bind"
            : n === "@"
              ? "on"
              : n === "#"
                ? "slot"
                : n.slice(2);
      if ((!jn && a === "" && Dn(26, e), jn || a === ""))
        Pe = { type: 6, name: n, nameLoc: it(e, t), value: void 0, loc: it(e) };
      else if (
        ((Pe = {
          type: 7,
          name: a,
          rawName: n,
          exp: void 0,
          arg: void 0,
          modifiers: n === "." ? [Ce("prop")] : [],
          loc: it(e),
        }),
        a === "pre")
      ) {
        (jn = rt.inVPre = !0), (ps = wt);
        const r = wt.props;
        for (let s = 0; s < r.length; s++) r[s].type === 7 && (r[s] = tm(r[s]));
      }
    },
    ondirarg(e, t) {
      if (e === t) return;
      const n = Et(e, t);
      if (jn && !fs(Pe)) (Pe.name += n), so(Pe.nameLoc, t);
      else {
        const a = n[0] !== "[";
        Pe.arg = _r(a ? n : n.slice(1, -1), a, it(e, t), a ? 3 : 0);
      }
    },
    ondirmodifier(e, t) {
      const n = Et(e, t);
      if (jn && !fs(Pe)) (Pe.name += "." + n), so(Pe.nameLoc, t);
      else if (Pe.name === "slot") {
        const a = Pe.arg;
        a && ((a.content += "." + n), so(a.loc, t));
      } else {
        const a = Ce(n, !0, it(e, t));
        Pe.modifiers.push(a);
      }
    },
    onattribdata(e, t) {
      (jt += Et(e, t)), Pn < 0 && (Pn = e), (ao = t);
    },
    onattribentity(e, t, n) {
      (jt += e), Pn < 0 && (Pn = t), (ao = n);
    },
    onattribnameend(e) {
      const t = Pe.loc.start.offset,
        n = Et(t, e);
      Pe.type === 7 && (Pe.rawName = n),
        wt.props.some((a) => (a.type === 7 ? a.rawName : a.name) === n) &&
          Dn(2, t);
    },
    onattribend(e, t) {
      if (wt && Pe) {
        if ((so(Pe.loc, t), e !== 0))
          if (
            (jt.includes("&") && (jt = $e.decodeEntities(jt, !0)),
            Pe.type === 6)
          )
            Pe.name === "class" && (jt = Ql(jt).trim()),
              e === 1 && !jt && Dn(13, t),
              (Pe.value = {
                type: 2,
                content: jt,
                loc: e === 1 ? it(Pn, ao) : it(Pn - 1, ao + 1),
              }),
              rt.inSFCRoot &&
                wt.tag === "template" &&
                Pe.name === "lang" &&
                jt &&
                jt !== "html" &&
                rt.enterRCDATA(fa("</template"), 0);
          else {
            let n = 0;
            (Pe.exp = _r(jt, !1, it(Pn, ao), 0, n)),
              Pe.name === "for" && (Pe.forParseResult = Kp(Pe.exp));
            let a = -1;
            Pe.name === "bind" &&
              (a = Pe.modifiers.findIndex((r) => r.content === "sync")) > -1 &&
              Fo("COMPILER_V_BIND_SYNC", $e, Pe.loc, Pe.arg.loc.source) &&
              ((Pe.name = "model"), Pe.modifiers.splice(a, 1));
          }
        (Pe.type !== 7 || Pe.name !== "pre") && wt.props.push(Pe);
      }
      (jt = ""), (Pn = ao = -1);
    },
    oncomment(e, t) {
      $e.comments && ms({ type: 3, content: Et(e, t), loc: it(e - 4, t + 3) });
    },
    onend() {
      const e = Vn.length;
      for (let t = 0; t < Je.length; t++)
        qr(Je[t], e - 1), Dn(24, Je[t].loc.start.offset);
    },
    oncdata(e, t) {
      Je[0].ns !== 0 ? Gr(Et(e, t), e, t) : Dn(1, e - 9);
    },
    onprocessinginstruction(e) {
      (Je[0] ? Je[0].ns : $e.ns) === 0 && Dn(21, e - 1);
    },
  }),
  ji = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
  Xp = /^\(|\)$/g;
function Kp(e) {
  const t = e.loc,
    n = e.content,
    a = n.match(Kl);
  if (!a) return;
  const [, r, s] = a,
    o = (p, y, E = !1) => {
      const v = t.start.offset + y,
        h = v + p.length;
      return _r(p, !1, it(v, h), 0, E ? 1 : 0);
    },
    u = {
      source: o(s.trim(), n.indexOf(s, r.length)),
      value: void 0,
      key: void 0,
      index: void 0,
      finalized: !1,
    };
  let l = r.trim().replace(Xp, "").trim();
  const i = r.indexOf(l),
    c = l.match(ji);
  if (c) {
    l = l.replace(ji, "").trim();
    const p = c[1].trim();
    let y;
    if (
      (p && ((y = n.indexOf(p, i + l.length)), (u.key = o(p, y, !0))), c[2])
    ) {
      const E = c[2].trim();
      E &&
        (u.index = o(E, n.indexOf(E, u.key ? y + p.length : i + l.length), !0));
    }
  }
  return l && (u.value = o(l, i, !0)), u;
}
function Et(e, t) {
  return Vn.slice(e, t);
}
function Bi(e) {
  rt.inSFCRoot && (wt.innerLoc = it(e + 1, e + 1)), ms(wt);
  const { tag: t, ns: n } = wt;
  n === 0 && $e.isPreTag(t) && Ls++,
    $e.isVoidTag(t)
      ? qr(wt, e)
      : (Je.unshift(wt), (n === 1 || n === 2) && (rt.inXML = !0)),
    (wt = null);
}
function Gr(e, t, n) {
  {
    const s = Je[0] && Je[0].tag;
    s !== "script" &&
      s !== "style" &&
      e.includes("&") &&
      (e = $e.decodeEntities(e, !1));
  }
  const a = Je[0] || hr,
    r = a.children[a.children.length - 1];
  r && r.type === 2
    ? ((r.content += e), so(r.loc, n))
    : a.children.push({ type: 2, content: e, loc: it(t, n) });
}
function qr(e, t, n = !1) {
  n ? so(e.loc, Yl(t, 60)) : so(e.loc, Wp(t, 62) + 1),
    rt.inSFCRoot &&
      (e.children.length
        ? (e.innerLoc.end = Rn({}, e.children[e.children.length - 1].loc.end))
        : (e.innerLoc.end = Rn({}, e.innerLoc.start)),
      (e.innerLoc.source = Et(e.innerLoc.start.offset, e.innerLoc.end.offset)));
  const { tag: a, ns: r, children: s } = e;
  if (
    (jn ||
      (a === "slot"
        ? (e.tagType = 2)
        : Gi(e)
          ? (e.tagType = 3)
          : Jp(e) && (e.tagType = 1)),
    rt.inRCDATA || (e.children = Jl(s)),
    r === 0 && $e.isIgnoreNewlineTag(a))
  ) {
    const o = s[0];
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""));
  }
  r === 0 && $e.isPreTag(a) && Ls--,
    ps === e && ((jn = rt.inVPre = !1), (ps = null)),
    rt.inXML && (Je[0] ? Je[0].ns : $e.ns) === 0 && (rt.inXML = !1);
  {
    const o = e.props;
    if (
      !rt.inSFCRoot &&
      uo("COMPILER_NATIVE_TEMPLATE", $e) &&
      e.tag === "template" &&
      !Gi(e)
    ) {
      const l = Je[0] || hr,
        i = l.children.indexOf(e);
      l.children.splice(i, 1, ...e.children);
    }
    const u = o.find((l) => l.type === 6 && l.name === "inline-template");
    u &&
      Fo("COMPILER_INLINE_TEMPLATE", $e, u.loc) &&
      e.children.length &&
      (u.value = {
        type: 2,
        content: Et(
          e.children[0].loc.start.offset,
          e.children[e.children.length - 1].loc.end.offset,
        ),
        loc: u.loc,
      });
  }
}
function Wp(e, t) {
  let n = e;
  for (; Vn.charCodeAt(n) !== t && n < Vn.length - 1; ) n++;
  return n;
}
function Yl(e, t) {
  let n = e;
  for (; Vn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Yp = new Set(["if", "else", "else-if", "for", "slot"]);
function Gi({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Yp.has(t[n].name)) return !0;
  }
  return !1;
}
function Jp({ tag: e, props: t }) {
  if ($e.isCustomElement(e)) return !1;
  if (
    e === "component" ||
    Qp(e.charCodeAt(0)) ||
    Rs(e) ||
    ($e.isBuiltInComponent && $e.isBuiltInComponent(e)) ||
    ($e.isNativeTag && !$e.isNativeTag(e))
  )
    return !0;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (a.type === 6) {
      if (a.name === "is" && a.value) {
        if (a.value.content.startsWith("vue:")) return !0;
        if (Fo("COMPILER_IS_ON_ELEMENT", $e, a.loc)) return !0;
      }
    } else if (
      a.name === "bind" &&
      Xn(a.arg, "is") &&
      Fo("COMPILER_IS_ON_ELEMENT", $e, a.loc)
    )
      return !0;
  }
  return !1;
}
function Qp(e) {
  return e > 64 && e < 91;
}
const Zp = /\r\n/g;
function Jl(e) {
  const t = $e.whitespace !== "preserve";
  let n = !1;
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    if (r.type === 2)
      if (Ls)
        r.content = r.content.replace(
          Zp,
          `
`,
        );
      else if (qp(r.content)) {
        const s = e[a - 1] && e[a - 1].type,
          o = e[a + 1] && e[a + 1].type;
        !s ||
        !o ||
        (t &&
          ((s === 3 && (o === 3 || o === 1)) ||
            (s === 1 && (o === 3 || (o === 1 && _p(r.content))))))
          ? ((n = !0), (e[a] = null))
          : (r.content = " ");
      } else t && (r.content = Ql(r.content));
  }
  return n ? e.filter(Boolean) : e;
}
function qp(e) {
  for (let t = 0; t < e.length; t++) if (!Jt(e.charCodeAt(t))) return !1;
  return !0;
}
function _p(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13) return !0;
  }
  return !1;
}
function Ql(e) {
  let t = "",
    n = !1;
  for (let a = 0; a < e.length; a++)
    Jt(e.charCodeAt(a)) ? n || ((t += " "), (n = !0)) : ((t += e[a]), (n = !1));
  return t;
}
function ms(e) {
  (Je[0] || hr).children.push(e);
}
function it(e, t) {
  return {
    start: rt.getPos(e),
    end: t == null ? t : rt.getPos(t),
    source: t == null ? t : Et(e, t),
  };
}
function em(e) {
  return it(e.start.offset, e.end.offset);
}
function so(e, t) {
  (e.end = rt.getPos(t)), (e.source = Et(e.start.offset, t));
}
function tm(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: it(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
    value: void 0,
    loc: e.loc,
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset &&
      (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++),
      (t.value = { type: 2, content: e.exp.content, loc: n });
  }
  return t;
}
function _r(e, t = !1, n, a = 0, r = 0) {
  return Ce(e, t, n, a);
}
function Dn(e, t, n) {
  $e.onError(We(e, it(t, t)));
}
function nm() {
  rt.reset(),
    (wt = null),
    (Pe = null),
    (jt = ""),
    (Pn = -1),
    (ao = -1),
    (Je.length = 0);
}
function Fs(e, t) {
  if ((nm(), (Vn = e), ($e = Rn({}, Wl)), t)) {
    let r;
    for (r in t) t[r] != null && ($e[r] = t[r]);
  }
  (rt.mode = $e.parseMode === "html" ? 1 : $e.parseMode === "sfc" ? 2 : 0),
    (rt.inXML = $e.ns === 1 || $e.ns === 2);
  const n = t && t.delimiters;
  n && ((rt.delimiterOpen = fa(n[0])), (rt.delimiterClose = fa(n[1])));
  const a = (hr = Al([], e));
  return (
    rt.parse(Vn),
    (a.loc = it(0, e.length)),
    (a.children = Jl(a.children)),
    (hr = null),
    a
  );
}
function om(e, t) {
  ea(e, void 0, t, !!Zl(e));
}
function Zl(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !vr(t[0]) ? t[0] : null;
}
function ea(e, t, n, a = !1, r = !1) {
  const { children: s } = e,
    o = [];
  for (let c = 0; c < s.length; c++) {
    const p = s[c];
    if (p.type === 1 && p.tagType === 0) {
      const y = a ? 0 : Ht(p, n);
      if (y > 0) {
        if (y >= 2) {
          (p.codegenNode.patchFlag = -1), o.push(p);
          continue;
        }
      } else {
        const E = p.codegenNode;
        if (E.type === 13) {
          const v = E.patchFlag;
          if ((v === void 0 || v === 512 || v === 1) && _l(p, n) >= 2) {
            const h = eu(p);
            h && (E.props = n.hoist(h));
          }
          E.dynamicProps && (E.dynamicProps = n.hoist(E.dynamicProps));
        }
      }
    } else if (p.type === 12 && (a ? 0 : Ht(p, n)) >= 2) {
      p.codegenNode.type === 14 &&
        p.codegenNode.arguments.length > 0 &&
        p.codegenNode.arguments.push("-1"),
        o.push(p);
      continue;
    }
    if (p.type === 1) {
      const y = p.tagType === 1;
      y && n.scopes.vSlot++, ea(p, e, n, !1, r), y && n.scopes.vSlot--;
    } else if (p.type === 11) ea(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let y = 0; y < p.branches.length; y++)
        ea(p.branches[y], e, n, p.branches[y].children.length === 1, r);
  }
  let u = !1;
  if (o.length === s.length && e.type === 1) {
    if (
      e.tagType === 0 &&
      e.codegenNode &&
      e.codegenNode.type === 13 &&
      Gn(e.codegenNode.children)
    )
      (e.codegenNode.children = l(Yn(e.codegenNode.children))), (u = !0);
    else if (
      e.tagType === 1 &&
      e.codegenNode &&
      e.codegenNode.type === 13 &&
      e.codegenNode.children &&
      !Gn(e.codegenNode.children) &&
      e.codegenNode.children.type === 15
    ) {
      const c = i(e.codegenNode, "default");
      c && ((c.returns = l(Yn(c.returns))), (u = !0));
    } else if (
      e.tagType === 3 &&
      t &&
      t.type === 1 &&
      t.tagType === 1 &&
      t.codegenNode &&
      t.codegenNode.type === 13 &&
      t.codegenNode.children &&
      !Gn(t.codegenNode.children) &&
      t.codegenNode.children.type === 15
    ) {
      const c = kt(e, "slot", !0),
        p = c && c.arg && i(t.codegenNode, c.arg);
      p && ((p.returns = l(Yn(p.returns))), (u = !0));
    }
  }
  if (!u) for (const c of o) c.codegenNode = n.cache(c.codegenNode);
  function l(c) {
    const p = n.cache(c);
    return (p.needArraySpread = !0), p;
  }
  function i(c, p) {
    if (c.children && !Gn(c.children) && c.children.type === 15) {
      const y = c.children.properties.find(
        (E) => E.key === p || E.key.content === p,
      );
      return y && y.value;
    }
  }
  o.length && n.transformHoist && n.transformHoist(s, n, e);
}
function Ht(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0) return 0;
      const a = n.get(e);
      if (a !== void 0) return a;
      const r = e.codegenNode;
      if (
        r.type !== 13 ||
        (r.isBlock &&
          e.tag !== "svg" &&
          e.tag !== "foreignObject" &&
          e.tag !== "math")
      )
        return 0;
      if (r.patchFlag === void 0) {
        let o = 3;
        const u = _l(e, t);
        if (u === 0) return n.set(e, 0), 0;
        u < o && (o = u);
        for (let l = 0; l < e.children.length; l++) {
          const i = Ht(e.children[l], t);
          if (i === 0) return n.set(e, 0), 0;
          i < o && (o = i);
        }
        if (o > 1)
          for (let l = 0; l < e.props.length; l++) {
            const i = e.props[l];
            if (i.type === 7 && i.name === "bind" && i.exp) {
              const c = Ht(i.exp, t);
              if (c === 0) return n.set(e, 0), 0;
              c < o && (o = c);
            }
          }
        if (r.isBlock) {
          for (let l = 0; l < e.props.length; l++)
            if (e.props[l].type === 7) return n.set(e, 0), 0;
          t.removeHelper(Jn),
            t.removeHelper(vo(t.inSSR, r.isComponent)),
            (r.isBlock = !1),
            t.helper(mo(t.inSSR, r.isComponent));
        }
        return n.set(e, o), o;
      } else return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return Ht(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let o = 0; o < e.children.length; o++) {
        const u = e.children[o];
        if (mt(u) || ys(u)) continue;
        const l = Ht(u, t);
        if (l === 0) return 0;
        l < s && (s = l);
      }
      return s;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const rm = new Set([Aa, Pa, Mo, Go]);
function ql(e, t) {
  if (e.type === 14 && !mt(e.callee) && rm.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4) return Ht(n, t);
    if (n.type === 14) return ql(n, t);
  }
  return 0;
}
function _l(e, t) {
  let n = 3;
  const a = eu(e);
  if (a && a.type === 15) {
    const { properties: r } = a;
    for (let s = 0; s < r.length; s++) {
      const { key: o, value: u } = r[s],
        l = Ht(o, t);
      if (l === 0) return l;
      l < n && (n = l);
      let i;
      if (
        (u.type === 4
          ? (i = Ht(u, t))
          : u.type === 14
            ? (i = ql(u, t))
            : (i = 0),
        i === 0)
      )
        return i;
      i < n && (n = i);
    }
  }
  return n;
}
function eu(e) {
  const t = e.codegenNode;
  if (t.type === 13) return t.props;
}
function tu(
  e,
  {
    filename: t = "",
    prefixIdentifiers: n = !1,
    hoistStatic: a = !1,
    hmr: r = !1,
    cacheHandlers: s = !1,
    nodeTransforms: o = [],
    directiveTransforms: u = {},
    transformHoist: l = null,
    isBuiltInComponent: i = sr,
    isCustomElement: c = sr,
    expressionPlugins: p = [],
    scopeId: y = null,
    slotted: E = !0,
    ssr: v = !1,
    inSSR: h = !1,
    ssrCssVars: b = "",
    bindingMetadata: S = Bd,
    inline: T = !1,
    isTS: $ = !1,
    onError: C = Ps,
    onWarn: N = kl,
    compatConfig: D,
  },
) {
  const H = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
    j = {
      filename: t,
      selfName: H && il(Kn(H[1])),
      prefixIdentifiers: n,
      hoistStatic: a,
      hmr: r,
      cacheHandlers: s,
      nodeTransforms: o,
      directiveTransforms: u,
      transformHoist: l,
      isBuiltInComponent: i,
      isCustomElement: c,
      expressionPlugins: p,
      scopeId: y,
      slotted: E,
      ssr: v,
      inSSR: h,
      ssrCssVars: b,
      bindingMetadata: S,
      inline: T,
      isTS: $,
      onError: C,
      onWarn: N,
      compatConfig: D,
      root: e,
      helpers: new Map(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      cached: [],
      constantCache: new WeakMap(),
      temps: 0,
      identifiers: Object.create(null),
      scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
      parent: null,
      grandParent: null,
      currentNode: e,
      childIndex: 0,
      inVOnce: !1,
      helper(O) {
        const Y = j.helpers.get(O) || 0;
        return j.helpers.set(O, Y + 1), O;
      },
      removeHelper(O) {
        const Y = j.helpers.get(O);
        if (Y) {
          const te = Y - 1;
          te ? j.helpers.set(O, te) : j.helpers.delete(O);
        }
      },
      helperString(O) {
        return `_${fo[j.helper(O)]}`;
      },
      replaceNode(O) {
        j.parent.children[j.childIndex] = j.currentNode = O;
      },
      removeNode(O) {
        const Y = j.parent.children,
          te = O ? Y.indexOf(O) : j.currentNode ? j.childIndex : -1;
        !O || O === j.currentNode
          ? ((j.currentNode = null), j.onNodeRemoved())
          : j.childIndex > te && (j.childIndex--, j.onNodeRemoved()),
          j.parent.children.splice(te, 1);
      },
      onNodeRemoved: sr,
      addIdentifiers(O) {},
      removeIdentifiers(O) {},
      hoist(O) {
        mt(O) && (O = Ce(O)), j.hoists.push(O);
        const Y = Ce(`_hoisted_${j.hoists.length}`, !1, O.loc, 2);
        return (Y.hoisted = O), Y;
      },
      cache(O, Y = !1, te = !1) {
        const ne = Pl(j.cached.length, O, Y, te);
        return j.cached.push(ne), ne;
      },
    };
  return (j.filters = new Set()), j;
}
function nu(e, t) {
  const n = tu(e, t);
  Or(e, n),
    t.hoistStatic && om(e, n),
    t.ssr || am(e, n),
    (e.helpers = new Set([...n.helpers.keys()])),
    (e.components = [...n.components]),
    (e.directives = [...n.directives]),
    (e.imports = n.imports),
    (e.hoists = n.hoists),
    (e.temps = n.temps),
    (e.cached = n.cached),
    (e.transformed = !0),
    (e.filters = [...n.filters]);
}
function am(e, t) {
  const { helper: n } = t,
    { children: a } = e;
  if (a.length === 1) {
    const r = Zl(e);
    if (r && r.codegenNode) {
      const s = r.codegenNode;
      s.type === 13 && Ma(s, t), (e.codegenNode = s);
    } else e.codegenNode = a[0];
  } else if (a.length > 1) {
    let r = 64;
    e.codegenNode = Lo(
      t,
      n(Vo),
      void 0,
      e.children,
      r,
      void 0,
      void 0,
      !0,
      void 0,
      !1,
    );
  }
}
function sm(e, t) {
  let n = 0;
  const a = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const r = e.children[n];
    mt(r) ||
      ((t.grandParent = t.parent),
      (t.parent = e),
      (t.childIndex = n),
      (t.onNodeRemoved = a),
      Or(r, t));
  }
}
function Or(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t,
    a = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s](e, t);
    if ((o && (Gn(o) ? a.push(...o) : a.push(o)), t.currentNode))
      e = t.currentNode;
    else return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Bo);
      break;
    case 5:
      t.ssr || t.helper(Tr);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++) Or(e.branches[s], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      sm(e, t);
      break;
  }
  t.currentNode = e;
  let r = a.length;
  for (; r--; ) a[r]();
}
function $s(e, t) {
  const n = mt(e) ? (a) => a === e : (a) => e.test(a);
  return (a, r) => {
    if (a.type === 1) {
      const { props: s } = a;
      if (a.tagType === 3 && s.some(Ms)) return;
      const o = [];
      for (let u = 0; u < s.length; u++) {
        const l = s[u];
        if (l.type === 7 && n(l.name)) {
          s.splice(u, 1), u--;
          const i = t(a, l, r);
          i && o.push(i);
        }
      }
      return o;
    }
  };
}
const La = "/*@__PURE__*/",
  ou = (e) => `${fo[e]}: _${fo[e]}`;
function im(
  e,
  {
    mode: t = "function",
    prefixIdentifiers: n = t === "module",
    sourceMap: a = !1,
    filename: r = "template.vue.html",
    scopeId: s = null,
    optimizeImports: o = !1,
    runtimeGlobalName: u = "Vue",
    runtimeModuleName: l = "vue",
    ssrRuntimeModuleName: i = "vue/server-renderer",
    ssr: c = !1,
    isTS: p = !1,
    inSSR: y = !1,
  },
) {
  const E = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: a,
    filename: r,
    scopeId: s,
    optimizeImports: o,
    runtimeGlobalName: u,
    runtimeModuleName: l,
    ssrRuntimeModuleName: i,
    ssr: c,
    isTS: p,
    inSSR: y,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(h) {
      return `_${fo[h]}`;
    },
    push(h, b = -2, S) {
      E.code += h;
    },
    indent() {
      v(++E.indentLevel);
    },
    deindent(h = !1) {
      h ? --E.indentLevel : v(--E.indentLevel);
    },
    newline() {
      v(E.indentLevel);
    },
  };
  function v(h) {
    E.push(
      `
` + "  ".repeat(h),
      0,
    );
  }
  return E;
}
function ru(e, t = {}) {
  const n = im(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
      mode: a,
      push: r,
      prefixIdentifiers: s,
      indent: o,
      deindent: u,
      newline: l,
      scopeId: i,
      ssr: c,
    } = n,
    p = Array.from(e.helpers),
    y = p.length > 0,
    E = !s && a !== "module";
  lm(e, n);
  const h = c ? "ssrRender" : "render",
    S = (c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(
      ", ",
    );
  if (
    (r(`function ${h}(${S}) {`),
    o(),
    E &&
      (r("with (_ctx) {"),
      o(),
      y &&
        (r(
          `const { ${p.map(ou).join(", ")} } = _Vue
`,
          -1,
        ),
        l())),
    e.components.length &&
      (os(e.components, "component", n),
      (e.directives.length || e.temps > 0) && l()),
    e.directives.length &&
      (os(e.directives, "directive", n), e.temps > 0 && l()),
    e.filters && e.filters.length && (l(), os(e.filters, "filter", n), l()),
    e.temps > 0)
  ) {
    r("let ");
    for (let T = 0; T < e.temps; T++) r(`${T > 0 ? ", " : ""}_temp${T}`);
  }
  return (
    (e.components.length || e.directives.length || e.temps) &&
      (r(
        `
`,
        0,
      ),
      l()),
    c || r("return "),
    e.codegenNode ? Pt(e.codegenNode, n) : r("null"),
    E && (u(), r("}")),
    u(),
    r("}"),
    { ast: e, code: n.code, preamble: "", map: n.map ? n.map.toJSON() : void 0 }
  );
}
function lm(e, t) {
  const {
      ssr: n,
      prefixIdentifiers: a,
      push: r,
      newline: s,
      runtimeModuleName: o,
      runtimeGlobalName: u,
      ssrRuntimeModuleName: l,
    } = t,
    i = u,
    c = Array.from(e.helpers);
  if (
    c.length > 0 &&
    (r(
      `const _Vue = ${i}
`,
      -1,
    ),
    e.hoists.length)
  ) {
    const p = [Sa, Ta, Bo, Ia, Ns]
      .filter((y) => c.includes(y))
      .map(ou)
      .join(", ");
    r(
      `const { ${p} } = _Vue
`,
      -1,
    );
  }
  um(e.hoists, t), s(), r("return ");
}
function os(e, t, { helper: n, push: a, newline: r, isTS: s }) {
  const o = n(t === "filter" ? Na : t === "component" ? Ca : xa);
  for (let u = 0; u < e.length; u++) {
    let l = e[u];
    const i = l.endsWith("__self");
    i && (l = l.slice(0, -6)),
      a(
        `const ${Uo(l, t)} = ${o}(${JSON.stringify(l)}${i ? ", true" : ""})${s ? "!" : ""}`,
      ),
      u < e.length - 1 && r();
  }
}
function um(e, t) {
  if (!e.length) return;
  t.pure = !0;
  const { push: n, newline: a } = t;
  a();
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    s && (n(`const _hoisted_${r + 1} = `), Pt(s, t), a());
  }
  t.pure = !1;
}
function Us(e, t) {
  const n = e.length > 3 || !1;
  t.push("["), n && t.indent(), xr(e, t, n), n && t.deindent(), t.push("]");
}
function xr(e, t, n = !1, a = !0) {
  const { push: r, newline: s } = t;
  for (let o = 0; o < e.length; o++) {
    const u = e[o];
    mt(u) ? r(u, -3) : Gn(u) ? Us(u, t) : Pt(u, t),
      o < e.length - 1 && (n ? (a && r(","), s()) : a && r(", "));
  }
}
function Pt(e, t) {
  if (mt(e)) {
    t.push(e, -3);
    return;
  }
  if (ys(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      Pt(e.codegenNode, t);
      break;
    case 2:
      dm(e, t);
      break;
    case 4:
      au(e, t);
      break;
    case 5:
      cm(e, t);
      break;
    case 12:
      Pt(e.codegenNode, t);
      break;
    case 8:
      su(e, t);
      break;
    case 3:
      pm(e, t);
      break;
    case 13:
      mm(e, t);
      break;
    case 14:
      gm(e, t);
      break;
    case 15:
      hm(e, t);
      break;
    case 17:
      ym(e, t);
      break;
    case 18:
      Em(e, t);
      break;
    case 19:
      bm(e, t);
      break;
    case 20:
      Sm(e, t);
      break;
    case 21:
      xr(e.body, t, !0, !1);
      break;
  }
}
function dm(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function au(e, t) {
  const { content: n, isStatic: a } = e;
  t.push(a ? JSON.stringify(n) : n, -3, e);
}
function cm(e, t) {
  const { push: n, helper: a, pure: r } = t;
  r && n(La), n(`${a(Tr)}(`), Pt(e.content, t), n(")");
}
function su(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const a = e.children[n];
    mt(a) ? t.push(a, -3) : Pt(a, t);
  }
}
function fm(e, t) {
  const { push: n } = t;
  if (e.type === 8) n("["), su(e, t), n("]");
  else if (e.isStatic) {
    const a = Ir(e.content) ? e.content : JSON.stringify(e.content);
    n(a, -2, e);
  } else n(`[${e.content}]`, -3, e);
}
function pm(e, t) {
  const { push: n, helper: a, pure: r } = t;
  r && n(La), n(`${a(Bo)}(${JSON.stringify(e.content)})`, -3, e);
}
function mm(e, t) {
  const { push: n, helper: a, pure: r } = t,
    {
      tag: s,
      props: o,
      children: u,
      patchFlag: l,
      dynamicProps: i,
      directives: c,
      isBlock: p,
      disableTracking: y,
      isComponent: E,
    } = e;
  let v;
  l && (v = String(l)),
    c && n(a(wa) + "("),
    p && n(`(${a(Jn)}(${y ? "true" : ""}), `),
    r && n(La);
  const h = p ? vo(t.inSSR, E) : mo(t.inSSR, E);
  n(a(h) + "(", -2, e),
    xr(vm([s, o, u, v, i]), t),
    n(")"),
    p && n(")"),
    c && (n(", "), Pt(c, t), n(")"));
}
function vm(e) {
  let t = e.length;
  for (; t-- && e[t] == null; );
  return e.slice(0, t + 1).map((n) => n || "null");
}
function gm(e, t) {
  const { push: n, helper: a, pure: r } = t,
    s = mt(e.callee) ? e.callee : a(e.callee);
  r && n(La), n(s + "(", -2, e), xr(e.arguments, t), n(")");
}
function hm(e, t) {
  const { push: n, indent: a, deindent: r, newline: s } = t,
    { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const u = o.length > 1 || !1;
  n(u ? "{" : "{ "), u && a();
  for (let l = 0; l < o.length; l++) {
    const { key: i, value: c } = o[l];
    fm(i, t), n(": "), Pt(c, t), l < o.length - 1 && (n(","), s());
  }
  u && r(), n(u ? "}" : " }");
}
function ym(e, t) {
  Us(e.elements, t);
}
function Em(e, t) {
  const { push: n, indent: a, deindent: r } = t,
    { params: s, returns: o, body: u, newline: l, isSlot: i } = e;
  i && n(`_${fo[ka]}(`),
    n("(", -2, e),
    Gn(s) ? xr(s, t) : s && Pt(s, t),
    n(") => "),
    (l || u) && (n("{"), a()),
    o ? (l && n("return "), Gn(o) ? Us(o, t) : Pt(o, t)) : u && Pt(u, t),
    (l || u) && (r(), n("}")),
    i && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function bm(e, t) {
  const { test: n, consequent: a, alternate: r, newline: s } = e,
    { push: o, indent: u, deindent: l, newline: i } = t;
  if (n.type === 4) {
    const p = !Ir(n.content);
    p && o("("), au(n, t), p && o(")");
  } else o("("), Pt(n, t), o(")");
  s && u(),
    t.indentLevel++,
    s || o(" "),
    o("? "),
    Pt(a, t),
    t.indentLevel--,
    s && i(),
    s || o(" "),
    o(": ");
  const c = r.type === 19;
  c || t.indentLevel++, Pt(r, t), c || t.indentLevel--, s && l(!0);
}
function Sm(e, t) {
  const { push: n, helper: a, indent: r, deindent: s, newline: o } = t,
    { needPauseTracking: u, needArraySpread: l } = e;
  l && n("[...("),
    n(`_cache[${e.index}] || (`),
    u &&
      (r(), n(`${a(mr)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")),
    n(`_cache[${e.index}] = `),
    Pt(e.value, t),
    u &&
      (n(`).cacheIndex = ${e.index},`),
      o(),
      n(`${a(mr)}(1),`),
      o(),
      n(`_cache[${e.index}]`),
      s()),
    n(")"),
    l && n(")]");
}
new RegExp(
  "\\b" +
    "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield"
      .split(",")
      .join("\\b|\\b") +
    "\\b",
);
const Tm = (e, t) => {
  if (e.type === 5) e.content = ta(e.content, t);
  else if (e.type === 1) {
    const n = kt(e, "memo");
    for (let a = 0; a < e.props.length; a++) {
      const r = e.props[a];
      if (r.type === 7 && r.name !== "for") {
        const s = r.exp,
          o = r.arg;
        s &&
          s.type === 4 &&
          !(r.name === "on" && o) &&
          !(n && o && o.type === 4 && o.content === "key") &&
          (r.exp = ta(s, t, r.name === "slot")),
          o && o.type === 4 && !o.isStatic && (r.arg = ta(o, t));
      }
    }
  }
};
function ta(e, t, n = !1, a = !1, r = Object.create(t.identifiers)) {
  return e;
}
function iu(e) {
  return mt(e) ? e : e.type === 4 ? e.content : e.children.map(iu).join("");
}
const Im = $s(/^(?:if|else|else-if)$/, (e, t, n) =>
  lu(e, t, n, (a, r, s) => {
    const o = n.parent.children;
    let u = o.indexOf(a),
      l = 0;
    for (; u-- >= 0; ) {
      const i = o[u];
      i && i.type === 9 && (l += i.branches.length);
    }
    return () => {
      if (s) a.codegenNode = zi(r, l, n);
      else {
        const i = Cm(a.codegenNode);
        i.alternate = zi(r, l + a.branches.length - 1, n);
      }
    };
  }),
);
function lu(e, t, n, a) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc;
    n.onError(We(28, t.loc)), (t.exp = Ce("true", !1, r));
  }
  if (t.name === "if") {
    const r = Hi(e, t),
      s = { type: 9, loc: em(e.loc), branches: [r] };
    if ((n.replaceNode(s), a)) return a(s, r, !0);
  } else {
    const r = n.parent.children;
    let s = r.indexOf(e);
    for (; s-- >= -1; ) {
      const o = r[s];
      if (o && o.type === 3) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 9) {
        (t.name === "else-if" || t.name === "else") &&
          o.branches[o.branches.length - 1].condition === void 0 &&
          n.onError(We(30, e.loc)),
          n.removeNode();
        const u = Hi(e, t);
        o.branches.push(u);
        const l = a && a(o, u, !1);
        Or(u, n), l && l(), (n.currentNode = null);
      } else n.onError(We(30, e.loc));
      break;
    }
  }
}
function Hi(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !kt(e, "for") ? e.children : [e],
    userKey: Cr(e, "key"),
    isTemplateIf: n,
  };
}
function zi(e, t, n) {
  return e.condition
    ? ca(e.condition, Xi(e, t, n), pt(n.helper(Bo), ['""', "true"]))
    : Xi(e, t, n);
}
function Xi(e, t, n) {
  const { helper: a } = n,
    r = lt("key", Ce(`${t}`, !1, vt, 2)),
    { children: s } = e,
    o = s[0];
  if (s.length !== 1 || o.type !== 1)
    if (s.length === 1 && o.type === 11) {
      const l = o.codegenNode;
      return gr(l, r, n), l;
    } else
      return Lo(n, a(Vo), Qt([r]), s, 64, void 0, void 0, !0, !1, !1, e.loc);
  else {
    const l = o.codegenNode,
      i = Xl(l);
    return i.type === 13 && Ma(i, n), gr(i, r, n), l;
  }
}
function Cm(e) {
  for (;;)
    if (e.type === 19)
      if (e.alternate.type === 19) e = e.alternate;
      else return e;
    else e.type === 20 && (e = e.value);
}
const Om = $s("for", (e, t, n) => {
  const { helper: a, removeHelper: r } = n;
  return uu(e, t, n, (s) => {
    const o = pt(a(Da), [s.source]),
      u = $o(e),
      l = kt(e, "memo"),
      i = Cr(e, "key", !1, !0);
    i && i.type;
    let c =
      i &&
      (i.type === 6 ? (i.value ? Ce(i.value.content, !0) : void 0) : i.exp);
    const p = i && c ? lt("key", c) : null,
      y = s.source.type === 4 && s.source.constType > 0,
      E = y ? 64 : i ? 128 : 256;
    return (
      (s.codegenNode = Lo(
        n,
        a(Vo),
        void 0,
        o,
        E,
        void 0,
        void 0,
        !0,
        !y,
        !1,
        e.loc,
      )),
      () => {
        let v;
        const { children: h } = s,
          b = h.length !== 1 || h[0].type !== 1,
          S = vr(e)
            ? e
            : u && e.children.length === 1 && vr(e.children[0])
              ? e.children[0]
              : null;
        if (
          (S
            ? ((v = S.codegenNode), u && p && gr(v, p, n))
            : b
              ? (v = Lo(
                  n,
                  a(Vo),
                  p ? Qt([p]) : void 0,
                  e.children,
                  64,
                  void 0,
                  void 0,
                  !0,
                  void 0,
                  !1,
                ))
              : ((v = h[0].codegenNode),
                u && p && gr(v, p, n),
                v.isBlock !== !y &&
                  (v.isBlock
                    ? (r(Jn), r(vo(n.inSSR, v.isComponent)))
                    : r(mo(n.inSSR, v.isComponent))),
                (v.isBlock = !y),
                v.isBlock
                  ? (a(Jn), a(vo(n.inSSR, v.isComponent)))
                  : a(mo(n.inSSR, v.isComponent))),
          l)
        ) {
          const T = po(pa(s.parseResult, [Ce("_cached")]));
          (T.body = Rl([
            nn(["const _memo = (", l.exp, ")"]),
            nn([
              "if (_cached",
              ...(c ? [" && _cached.key === ", c] : []),
              ` && ${n.helperString(As)}(_cached, _memo)) return _cached`,
            ]),
            nn(["const _item = ", v]),
            Ce("_item.memo = _memo"),
            Ce("return _item"),
          ])),
            o.arguments.push(T, Ce("_cache"), Ce(String(n.cached.length))),
            n.cached.push(null);
        } else o.arguments.push(po(pa(s.parseResult), v, !0));
      }
    );
  });
});
function uu(e, t, n, a) {
  if (!t.exp) {
    n.onError(We(31, t.loc));
    return;
  }
  const r = t.forParseResult;
  if (!r) {
    n.onError(We(32, t.loc));
    return;
  }
  js(r);
  const { addIdentifiers: s, removeIdentifiers: o, scopes: u } = n,
    { source: l, value: i, key: c, index: p } = r,
    y = {
      type: 11,
      loc: t.loc,
      source: l,
      valueAlias: i,
      keyAlias: c,
      objectIndexAlias: p,
      parseResult: r,
      children: $o(e) ? e.children : [e],
    };
  n.replaceNode(y), u.vFor++;
  const E = a && a(y);
  return () => {
    u.vFor--, E && E();
  };
}
function js(e, t) {
  e.finalized || (e.finalized = !0);
}
function pa({ value: e, key: t, index: n }, a = []) {
  return xm([e, t, n, ...a]);
}
function xm(e) {
  let t = e.length;
  for (; t-- && !e[t]; );
  return e.slice(0, t + 1).map((n, a) => n || Ce("_".repeat(a + 1), !1));
}
const Ki = Ce("undefined", !1),
  du = (e, t) => {
    if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
      const n = kt(e, "slot");
      if (n)
        return (
          n.exp,
          t.scopes.vSlot++,
          () => {
            t.scopes.vSlot--;
          }
        );
    }
  },
  Nm = (e, t) => {
    let n;
    if ($o(e) && e.props.some(Ms) && (n = kt(e, "for"))) {
      const a = n.forParseResult;
      if (a) {
        js(a);
        const { value: r, key: s, index: o } = a,
          { addIdentifiers: u, removeIdentifiers: l } = t;
        return (
          r && u(r),
          s && u(s),
          o && u(o),
          () => {
            r && l(r), s && l(s), o && l(o);
          }
        );
      }
    }
  },
  wm = (e, t, n, a) => po(e, n, !1, !0, n.length ? n[0].loc : a);
function cu(e, t, n = wm) {
  t.helper(ka);
  const { children: a, loc: r } = e,
    s = [],
    o = [];
  let u = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const l = kt(e, "slot", !0);
  if (l) {
    const { arg: b, exp: S } = l;
    b && !Vt(b) && (u = !0),
      s.push(lt(b || Ce("default", !0), n(S, void 0, a, r)));
  }
  let i = !1,
    c = !1;
  const p = [],
    y = new Set();
  let E = 0;
  for (let b = 0; b < a.length; b++) {
    const S = a[b];
    let T;
    if (!$o(S) || !(T = kt(S, "slot", !0))) {
      S.type !== 3 && p.push(S);
      continue;
    }
    if (l) {
      t.onError(We(37, T.loc));
      break;
    }
    i = !0;
    const { children: $, loc: C } = S,
      { arg: N = Ce("default", !0), exp: D, loc: H } = T;
    let j;
    Vt(N) ? (j = N ? N.content : "default") : (u = !0);
    const O = kt(S, "for"),
      Y = n(D, O, $, C);
    let te, ne;
    if ((te = kt(S, "if"))) (u = !0), o.push(ca(te.exp, Hr(N, Y, E++), Ki));
    else if ((ne = kt(S, /^else(?:-if)?$/, !0))) {
      let K = b,
        X;
      for (; K-- && ((X = a[K]), !(X.type !== 3 && vs(X))); );
      if (X && $o(X) && kt(X, /^(?:else-)?if$/)) {
        let ue = o[o.length - 1];
        for (; ue.alternate.type === 19; ) ue = ue.alternate;
        ue.alternate = ne.exp ? ca(ne.exp, Hr(N, Y, E++), Ki) : Hr(N, Y, E++);
      } else t.onError(We(30, ne.loc));
    } else if (O) {
      u = !0;
      const K = O.forParseResult;
      K
        ? (js(K), o.push(pt(t.helper(Da), [K.source, po(pa(K), Hr(N, Y), !0)])))
        : t.onError(We(32, O.loc));
    } else {
      if (j) {
        if (y.has(j)) {
          t.onError(We(38, H));
          continue;
        }
        y.add(j), j === "default" && (c = !0);
      }
      s.push(lt(N, Y));
    }
  }
  if (!l) {
    const b = (S, T) => {
      const $ = n(S, void 0, T, r);
      return t.compatConfig && ($.isNonScopedSlot = !0), lt("default", $);
    };
    i
      ? p.length &&
        p.some((S) => vs(S)) &&
        (c ? t.onError(We(39, p[0].loc)) : s.push(b(void 0, p)))
      : s.push(b(void 0, a));
  }
  const v = u ? 2 : na(e.children) ? 3 : 1;
  let h = Qt(s.concat(lt("_", Ce(v + "", !1))), r);
  return (
    o.length && (h = pt(t.helper(Ds), [h, Yn(o)])),
    { slots: h, hasDynamicSlots: u }
  );
}
function Hr(e, t, n) {
  const a = [lt("name", e), lt("fn", t)];
  return n != null && a.push(lt("key", Ce(String(n), !0))), Qt(a);
}
function na(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || na(n.children)) return !0;
        break;
      case 9:
        if (na(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (na(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function vs(e) {
  return e.type !== 2 && e.type !== 12
    ? !0
    : e.type === 2
      ? !!e.content.trim()
      : vs(e.content);
}
const fu = new WeakMap(),
  pu = (e, t) =>
    function () {
      if (
        ((e = t.currentNode),
        !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
      )
        return;
      const { tag: a, props: r } = e,
        s = e.tagType === 1;
      let o = s ? mu(e, t) : `"${a}"`;
      const u = ll(o) && o.callee === Oa;
      let l,
        i,
        c = 0,
        p,
        y,
        E,
        v =
          u ||
          o === Ro ||
          o === ba ||
          (!s && (a === "svg" || a === "foreignObject" || a === "math"));
      if (r.length > 0) {
        const h = Bs(e, t, void 0, s, u);
        (l = h.props), (c = h.patchFlag), (y = h.dynamicPropNames);
        const b = h.directives;
        (E = b && b.length ? Yn(b.map((S) => vu(S, t))) : void 0),
          h.shouldUseBlock && (v = !0);
      }
      if (e.children.length > 0)
        if ((o === fr && ((v = !0), (c |= 1024)), s && o !== Ro && o !== fr)) {
          const { slots: b, hasDynamicSlots: S } = cu(e, t);
          (i = b), S && (c |= 1024);
        } else if (e.children.length === 1 && o !== Ro) {
          const b = e.children[0],
            S = b.type,
            T = S === 5 || S === 8;
          T && Ht(b, t) === 0 && (c |= 1),
            T || S === 2 ? (i = b) : (i = e.children);
        } else i = e.children;
      y && y.length && (p = Am(y)),
        (e.codegenNode = Lo(
          t,
          o,
          l,
          i,
          c === 0 ? void 0 : c,
          p,
          E,
          !!v,
          !1,
          s,
          e.loc,
        ));
    };
function mu(e, t, n = !1) {
  let { tag: a } = e;
  const r = gs(a),
    s = Cr(e, "is", !1, !0);
  if (s)
    if (r || uo("COMPILER_IS_ON_ELEMENT", t)) {
      let u;
      if (
        (s.type === 6
          ? (u = s.value && Ce(s.value.content, !0))
          : ((u = s.exp), u || (u = Ce("is", !1, s.arg.loc))),
        u)
      )
        return pt(t.helper(Oa), [u]);
    } else
      s.type === 6 &&
        s.value.content.startsWith("vue:") &&
        (a = s.value.content.slice(4));
  const o = Rs(a) || t.isBuiltInComponent(a);
  return o
    ? (n || t.helper(o), o)
    : (t.helper(Ca), t.components.add(a), Uo(a, "component"));
}
function Bs(e, t, n = e.props, a, r, s = !1) {
  const { tag: o, loc: u, children: l } = e;
  let i = [];
  const c = [],
    p = [],
    y = l.length > 0;
  let E = !1,
    v = 0,
    h = !1,
    b = !1,
    S = !1,
    T = !1,
    $ = !1,
    C = !1;
  const N = [],
    D = (Y) => {
      i.length && (c.push(Qt(Wi(i), u)), (i = [])), Y && c.push(Y);
    },
    H = () => {
      t.scopes.vFor > 0 && i.push(lt(Ce("ref_for", !0), Ce("true")));
    },
    j = ({ key: Y, value: te }) => {
      if (Vt(Y)) {
        const ne = Y.content,
          K = ul(ne);
        if (
          (K &&
            (!a || r) &&
            ne.toLowerCase() !== "onclick" &&
            ne !== "onUpdate:modelValue" &&
            !pi(ne) &&
            (T = !0),
          K && pi(ne) && (C = !0),
          K && te.type === 14 && (te = te.arguments[0]),
          te.type === 20 || ((te.type === 4 || te.type === 8) && Ht(te, t) > 0))
        )
          return;
        ne === "ref"
          ? (h = !0)
          : ne === "class"
            ? (b = !0)
            : ne === "style"
              ? (S = !0)
              : ne !== "key" && !N.includes(ne) && N.push(ne),
          a &&
            (ne === "class" || ne === "style") &&
            !N.includes(ne) &&
            N.push(ne);
      } else $ = !0;
    };
  for (let Y = 0; Y < n.length; Y++) {
    const te = n[Y];
    if (te.type === 6) {
      const { loc: ne, name: K, nameLoc: X, value: ue } = te;
      let G = !0;
      if (
        (K === "ref" && ((h = !0), H()),
        K === "is" &&
          (gs(o) ||
            (ue && ue.content.startsWith("vue:")) ||
            uo("COMPILER_IS_ON_ELEMENT", t)))
      )
        continue;
      i.push(lt(Ce(K, !0, X), Ce(ue ? ue.content : "", G, ue ? ue.loc : ne)));
    } else {
      const { name: ne, arg: K, exp: X, loc: ue, modifiers: G } = te,
        A = ne === "bind",
        w = ne === "on";
      if (ne === "slot") {
        a || t.onError(We(40, ue));
        continue;
      }
      if (
        ne === "once" ||
        ne === "memo" ||
        ne === "is" ||
        (A && Xn(K, "is") && (gs(o) || uo("COMPILER_IS_ON_ELEMENT", t))) ||
        (w && s)
      )
        continue;
      if (
        (((A && Xn(K, "key")) || (w && y && Xn(K, "vue:before-update"))) &&
          (E = !0),
        A && Xn(K, "ref") && H(),
        !K && (A || w))
      ) {
        if ((($ = !0), X))
          if (A) {
            if ((D(), uo("COMPILER_V_BIND_OBJECT_ORDER", t))) {
              c.unshift(X);
              continue;
            }
            H(), D(), c.push(X);
          } else
            D({
              type: 14,
              loc: ue,
              callee: t.helper(Ra),
              arguments: a ? [X] : [X, "true"],
            });
        else t.onError(We(A ? 34 : 35, ue));
        continue;
      }
      A && G.some((ke) => ke.content === "prop") && (v |= 32);
      const se = t.directiveTransforms[ne];
      if (se) {
        const { props: ke, needRuntime: ge } = se(te, e, t);
        !s && ke.forEach(j),
          w && K && !Vt(K) ? D(Qt(ke, u)) : i.push(...ke),
          ge && (p.push(te), ys(ge) && fu.set(te, ge));
      } else jd(ne) || (p.push(te), y && (E = !0));
    }
  }
  let O;
  if (
    (c.length
      ? (D(), c.length > 1 ? (O = pt(t.helper(pr), c, u)) : (O = c[0]))
      : i.length && (O = Qt(Wi(i), u)),
    $
      ? (v |= 16)
      : (b && !a && (v |= 2),
        S && !a && (v |= 4),
        N.length && (v |= 8),
        T && (v |= 32)),
    !E && (v === 0 || v === 32) && (h || C || p.length > 0) && (v |= 512),
    !t.inSSR && O)
  )
    switch (O.type) {
      case 15:
        let Y = -1,
          te = -1,
          ne = !1;
        for (let ue = 0; ue < O.properties.length; ue++) {
          const G = O.properties[ue].key;
          Vt(G)
            ? G.content === "class"
              ? (Y = ue)
              : G.content === "style" && (te = ue)
            : G.isHandlerKey || (ne = !0);
        }
        const K = O.properties[Y],
          X = O.properties[te];
        ne
          ? (O = pt(t.helper(Mo), [O]))
          : (K && !Vt(K.value) && (K.value = pt(t.helper(Aa), [K.value])),
            X &&
              (S ||
                (X.value.type === 4 && X.value.content.trim()[0] === "[") ||
                X.value.type === 17) &&
              (X.value = pt(t.helper(Pa), [X.value])));
        break;
      case 14:
        break;
      default:
        O = pt(t.helper(Mo), [pt(t.helper(Go), [O])]);
        break;
    }
  return {
    props: O,
    directives: p,
    patchFlag: v,
    dynamicPropNames: N,
    shouldUseBlock: E,
  };
}
function Wi(e) {
  const t = new Map(),
    n = [];
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const s = r.key.content,
      o = t.get(s);
    o
      ? (s === "style" || s === "class" || ul(s)) && Dm(o, r)
      : (t.set(s, r), n.push(r));
  }
  return n;
}
function Dm(e, t) {
  e.value.type === 17
    ? e.value.elements.push(t.value)
    : (e.value = Yn([e.value, t.value], e.loc));
}
function vu(e, t) {
  const n = [],
    a = fu.get(e);
  a
    ? n.push(t.helperString(a))
    : (t.helper(xa), t.directives.add(e.name), n.push(Uo(e.name, "directive")));
  const { loc: r } = e;
  if (
    (e.exp && n.push(e.exp),
    e.arg && (e.exp || n.push("void 0"), n.push(e.arg)),
    Object.keys(e.modifiers).length)
  ) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const s = Ce("true", !1, r);
    n.push(
      Qt(
        e.modifiers.map((o) => lt(o, s)),
        r,
      ),
    );
  }
  return Yn(n, e.loc);
}
function Am(e) {
  let t = "[";
  for (let n = 0, a = e.length; n < a; n++)
    (t += JSON.stringify(e[n])), n < a - 1 && (t += ", ");
  return t + "]";
}
function gs(e) {
  return e === "component" || e === "Component";
}
const Pm = (e, t) => {
  if (vr(e)) {
    const { children: n, loc: a } = e,
      { slotName: r, slotProps: s } = gu(e, t),
      o = [
        t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
        r,
        "{}",
        "undefined",
        "true",
      ];
    let u = 2;
    s && ((o[2] = s), (u = 3)),
      n.length && ((o[3] = po([], n, !1, !1, a)), (u = 4)),
      t.scopeId && !t.slotted && (u = 5),
      o.splice(u),
      (e.codegenNode = pt(t.helper(ws), o, a));
  }
};
function gu(e, t) {
  let n = '"default"',
    a;
  const r = [];
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 6)
      o.value &&
        (o.name === "name"
          ? (n = JSON.stringify(o.value.content))
          : ((o.name = Kn(o.name)), r.push(o)));
    else if (o.name === "bind" && Xn(o.arg, "name")) {
      if (o.exp) n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const u = Kn(o.arg.content);
        n = o.exp = Ce(u, !1, o.arg.loc);
      }
    } else
      o.name === "bind" &&
        o.arg &&
        Vt(o.arg) &&
        (o.arg.content = Kn(o.arg.content)),
        r.push(o);
  }
  if (r.length > 0) {
    const { props: s, directives: o } = Bs(e, t, r, !1, !1);
    (a = s), o.length && t.onError(We(36, o[0].loc));
  }
  return { slotName: n, slotProps: a };
}
const Gs = (e, t, n, a) => {
    const { loc: r, modifiers: s, arg: o } = e;
    !e.exp && !s.length && n.onError(We(35, r));
    let u;
    if (o.type === 4)
      if (o.isStatic) {
        let p = o.content;
        p.startsWith("vue:") && (p = `vnode-${p.slice(4)}`);
        const y =
          t.tagType !== 0 || p.startsWith("vnode") || !/[A-Z]/.test(p)
            ? Gd(Kn(p))
            : `on:${p}`;
        u = Ce(y, !0, o.loc);
      } else u = nn([`${n.helperString(da)}(`, o, ")"]);
    else
      (u = o),
        u.children.unshift(`${n.helperString(da)}(`),
        u.children.push(")");
    let l = e.exp;
    l && !l.content.trim() && (l = void 0);
    let i = n.cacheHandlers && !l && !n.inVOnce;
    if (l) {
      const p = Vs(l),
        y = !(p || Bl(l)),
        E = l.content.includes(";");
      (y || (i && p)) &&
        (l = nn([
          `${y ? "$event" : "(...args)"} => ${E ? "{" : "("}`,
          l,
          E ? "}" : ")",
        ]));
    }
    let c = { props: [lt(u, l || Ce("() => {}", !1, r))] };
    return (
      a && (c = a(c)),
      i && (c.props[0].value = n.cache(c.props[0].value)),
      c.props.forEach((p) => (p.key.isHandlerKey = !0)),
      c
    );
  },
  hu = (e, t, n) => {
    const { modifiers: a, loc: r } = e,
      s = e.arg;
    let { exp: o } = e;
    return (
      o && o.type === 4 && !o.content.trim() && (o = void 0),
      s.type !== 4
        ? (s.children.unshift("("), s.children.push(') || ""'))
        : s.isStatic || (s.content = s.content ? `${s.content} || ""` : '""'),
      a.some((u) => u.content === "camel") &&
        (s.type === 4
          ? s.isStatic
            ? (s.content = Kn(s.content))
            : (s.content = `${n.helperString(ua)}(${s.content})`)
          : (s.children.unshift(`${n.helperString(ua)}(`),
            s.children.push(")"))),
      n.inSSR ||
        (a.some((u) => u.content === "prop") && Yi(s, "."),
        a.some((u) => u.content === "attr") && Yi(s, "^")),
      { props: [lt(s, o)] }
    );
  },
  Yi = (e, t) => {
    e.type === 4
      ? e.isStatic
        ? (e.content = t + e.content)
        : (e.content = `\`${t}\${${e.content}}\``)
      : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
  },
  Rm = (e, t) => {
    if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
      return () => {
        const n = e.children;
        let a,
          r = !1;
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          if (Zr(o)) {
            r = !0;
            for (let u = s + 1; u < n.length; u++) {
              const l = n[u];
              if (Zr(l))
                a || (a = n[s] = nn([o], o.loc)),
                  a.children.push(" + ", l),
                  n.splice(u, 1),
                  u--;
              else {
                a = void 0;
                break;
              }
            }
          }
        }
        if (
          !(
            !r ||
            (n.length === 1 &&
              (e.type === 0 ||
                (e.type === 1 &&
                  e.tagType === 0 &&
                  !e.props.find(
                    (s) => s.type === 7 && !t.directiveTransforms[s.name],
                  ) &&
                  e.tag !== "template")))
          )
        )
          for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (Zr(o) || o.type === 8) {
              const u = [];
              (o.type !== 2 || o.content !== " ") && u.push(o),
                !t.ssr && Ht(o, t) === 0 && u.push("1"),
                (n[s] = {
                  type: 12,
                  content: o,
                  loc: o.loc,
                  codegenNode: pt(t.helper(Ia), u),
                });
            }
          }
      };
  },
  Ji = new WeakSet(),
  km = (e, t) => {
    if (e.type === 1 && kt(e, "once", !0))
      return Ji.has(e) || t.inVOnce || t.inSSR
        ? void 0
        : (Ji.add(e),
          (t.inVOnce = !0),
          t.helper(mr),
          () => {
            t.inVOnce = !1;
            const n = t.currentNode;
            n.codegenNode && (n.codegenNode = t.cache(n.codegenNode, !0, !0));
          });
  },
  Hs = (e, t, n) => {
    const { exp: a, arg: r } = e;
    if (!a) return n.onError(We(41, e.loc)), zr();
    const s = a.loc.source.trim(),
      o = a.type === 4 ? a.content : s,
      u = n.bindingMetadata[s];
    if (u === "props" || u === "props-aliased")
      return n.onError(We(44, a.loc)), zr();
    if (!o.trim() || !Vs(a)) return n.onError(We(42, a.loc)), zr();
    const l = r || Ce("modelValue", !0),
      i = r
        ? Vt(r)
          ? `onUpdate:${Kn(r.content)}`
          : nn(['"onUpdate:" + ', r])
        : "onUpdate:modelValue";
    let c;
    const p = n.isTS ? "($event: any)" : "$event";
    c = nn([`${p} => ((`, a, ") = $event)"]);
    const y = [lt(l, e.exp), lt(i, c)];
    if (e.modifiers.length && t.tagType === 1) {
      const E = e.modifiers
          .map((h) => h.content)
          .map((h) => (Ir(h) ? h : JSON.stringify(h)) + ": true")
          .join(", "),
        v = r
          ? Vt(r)
            ? `${r.content}Modifiers`
            : nn([r, ' + "Modifiers"'])
          : "modelModifiers";
      y.push(lt(v, Ce(`{ ${E} }`, !1, e.loc, 2)));
    }
    return zr(y);
  };
function zr(e = []) {
  return { props: e };
}
const Vm = /[\w).+\-_$\]]/,
  Mm = (e, t) => {
    uo("COMPILER_FILTERS", t) &&
      (e.type === 5
        ? ma(e.content, t)
        : e.type === 1 &&
          e.props.forEach((n) => {
            n.type === 7 && n.name !== "for" && n.exp && ma(n.exp, t);
          }));
  };
function ma(e, t) {
  if (e.type === 4) Qi(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const a = e.children[n];
      typeof a == "object" &&
        (a.type === 4
          ? Qi(a, t)
          : a.type === 8
            ? ma(e, t)
            : a.type === 5 && ma(a.content, t));
    }
}
function Qi(e, t) {
  const n = e.content;
  let a = !1,
    r = !1,
    s = !1,
    o = !1,
    u = 0,
    l = 0,
    i = 0,
    c = 0,
    p,
    y,
    E,
    v,
    h = [];
  for (E = 0; E < n.length; E++)
    if (((y = p), (p = n.charCodeAt(E)), a)) p === 39 && y !== 92 && (a = !1);
    else if (r) p === 34 && y !== 92 && (r = !1);
    else if (s) p === 96 && y !== 92 && (s = !1);
    else if (o) p === 47 && y !== 92 && (o = !1);
    else if (
      p === 124 &&
      n.charCodeAt(E + 1) !== 124 &&
      n.charCodeAt(E - 1) !== 124 &&
      !u &&
      !l &&
      !i
    )
      v === void 0 ? ((c = E + 1), (v = n.slice(0, E).trim())) : b();
    else {
      switch (p) {
        case 34:
          r = !0;
          break;
        case 39:
          a = !0;
          break;
        case 96:
          s = !0;
          break;
        case 40:
          i++;
          break;
        case 41:
          i--;
          break;
        case 91:
          l++;
          break;
        case 93:
          l--;
          break;
        case 123:
          u++;
          break;
        case 125:
          u--;
          break;
      }
      if (p === 47) {
        let S = E - 1,
          T;
        for (; S >= 0 && ((T = n.charAt(S)), T === " "); S--);
        (!T || !Vm.test(T)) && (o = !0);
      }
    }
  v === void 0 ? (v = n.slice(0, E).trim()) : c !== 0 && b();
  function b() {
    h.push(n.slice(c, E).trim()), (c = E + 1);
  }
  if (h.length) {
    for (E = 0; E < h.length; E++) v = Lm(v, h[E], t);
    (e.content = v), (e.ast = void 0);
  }
}
function Lm(e, t, n) {
  n.helper(Na);
  const a = t.indexOf("(");
  if (a < 0) return n.filters.add(t), `${Uo(t, "filter")}(${e})`;
  {
    const r = t.slice(0, a),
      s = t.slice(a + 1);
    return (
      n.filters.add(r), `${Uo(r, "filter")}(${e}${s !== ")" ? "," + s : s}`
    );
  }
}
const Zi = new WeakSet(),
  Fm = (e, t) => {
    if (e.type === 1) {
      const n = kt(e, "memo");
      return !n || Zi.has(e) || t.inSSR
        ? void 0
        : (Zi.add(e),
          () => {
            const a = e.codegenNode || t.currentNode.codegenNode;
            a &&
              a.type === 13 &&
              (e.tagType !== 1 && Ma(a, t),
              (e.codegenNode = pt(t.helper(Va), [
                n.exp,
                po(void 0, a),
                "_cache",
                String(t.cached.length),
              ])),
              t.cached.push(null));
          });
    }
  },
  yu = (e, t) => {
    if (e.type === 1) {
      for (const n of e.props)
        if (
          n.type === 7 &&
          n.name === "bind" &&
          (!n.exp || (n.exp.type === 4 && !n.exp.content.trim())) &&
          n.arg
        ) {
          const a = n.arg;
          if (a.type !== 4 || !a.isStatic)
            t.onError(We(52, a.loc)), (n.exp = Ce("", !0, a.loc));
          else {
            const r = Kn(a.content);
            (ks.test(r[0]) || r[0] === "-") && (n.exp = Ce(r, !1, a.loc));
          }
        }
    }
  };
function Eu(e) {
  return [
    [yu, km, Im, Fm, Om, Mm, Pm, pu, du, Rm],
    { on: Gs, bind: hu, model: Hs },
  ];
}
function bu(e, t = {}) {
  const n = t.onError || Ps,
    a = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(We(47)) : a && n(We(48));
  const r = !1;
  t.cacheHandlers && n(We(49)), t.scopeId && !a && n(We(50));
  const s = Rn({}, t, { prefixIdentifiers: r }),
    o = mt(e) ? Fs(e, s) : e,
    [u, l] = Eu();
  return (
    nu(
      o,
      Rn({}, s, {
        nodeTransforms: [...u, ...(t.nodeTransforms || [])],
        directiveTransforms: Rn({}, l, t.directiveTransforms || {}),
      }),
    ),
    ru(o, s)
  );
}
const $m = {
    DATA: "data",
    PROPS: "props",
    PROPS_ALIASED: "props-aliased",
    SETUP_LET: "setup-let",
    SETUP_CONST: "setup-const",
    SETUP_REACTIVE_CONST: "setup-reactive-const",
    SETUP_MAYBE_REF: "setup-maybe-ref",
    SETUP_REF: "setup-ref",
    OPTIONS: "options",
    LITERAL_CONST: "literal-const",
  },
  Su = () => ({ props: [] });
const zs = Symbol(""),
  Xs = Symbol(""),
  Ks = Symbol(""),
  Ws = Symbol(""),
  va = Symbol(""),
  Ys = Symbol(""),
  Js = Symbol(""),
  Qs = Symbol(""),
  Zs = Symbol(""),
  qs = Symbol("");
Dl({
  [zs]: "vModelRadio",
  [Xs]: "vModelCheckbox",
  [Ks]: "vModelText",
  [Ws]: "vModelSelect",
  [va]: "vModelDynamic",
  [Ys]: "withModifiers",
  [Js]: "withKeys",
  [Qs]: "vShow",
  [Zs]: "Transition",
  [qs]: "TransitionGroup",
});
let xo;
function Um(e, t = !1) {
  return (
    xo || (xo = document.createElement("div")),
    t
      ? ((xo.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`),
        xo.children[0].getAttribute("foo"))
      : ((xo.innerHTML = e), xo.textContent)
  );
}
const _s = {
    parseMode: "html",
    isVoidTag: Kd,
    isNativeTag: (e) => Hd(e) || zd(e) || Xd(e),
    isPreTag: (e) => e === "pre",
    isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
    decodeEntities: Um,
    isBuiltInComponent: (e) => {
      if (e === "Transition" || e === "transition") return Zs;
      if (e === "TransitionGroup" || e === "transition-group") return qs;
    },
    getNamespace(e, t, n) {
      let a = t ? t.ns : n;
      if (t && a === 2)
        if (t.tag === "annotation-xml") {
          if (e === "svg") return 1;
          t.props.some(
            (r) =>
              r.type === 6 &&
              r.name === "encoding" &&
              r.value != null &&
              (r.value.content === "text/html" ||
                r.value.content === "application/xhtml+xml"),
          ) && (a = 0);
        } else
          /^m(?:[ions]|text)$/.test(t.tag) &&
            e !== "mglyph" &&
            e !== "malignmark" &&
            (a = 0);
      else
        t &&
          a === 1 &&
          (t.tag === "foreignObject" ||
            t.tag === "desc" ||
            t.tag === "title") &&
          (a = 0);
      if (a === 0) {
        if (e === "svg") return 1;
        if (e === "math") return 2;
      }
      return a;
    },
  },
  Tu = (e) => {
    e.type === 1 &&
      e.props.forEach((t, n) => {
        t.type === 6 &&
          t.name === "style" &&
          t.value &&
          (e.props[n] = {
            type: 7,
            name: "bind",
            arg: Ce("style", !0, t.loc),
            exp: jm(t.value.content, t.loc),
            modifiers: [],
            loc: t.loc,
          });
      });
  },
  jm = (e, t) => {
    const n = Wd(e);
    return Ce(JSON.stringify(n), !1, t, 3);
  };
function Mn(e, t) {
  return We(e, t);
}
const Bm = {
    X_V_HTML_NO_EXPRESSION: 53,
    53: "X_V_HTML_NO_EXPRESSION",
    X_V_HTML_WITH_CHILDREN: 54,
    54: "X_V_HTML_WITH_CHILDREN",
    X_V_TEXT_NO_EXPRESSION: 55,
    55: "X_V_TEXT_NO_EXPRESSION",
    X_V_TEXT_WITH_CHILDREN: 56,
    56: "X_V_TEXT_WITH_CHILDREN",
    X_V_MODEL_ON_INVALID_ELEMENT: 57,
    57: "X_V_MODEL_ON_INVALID_ELEMENT",
    X_V_MODEL_ARG_ON_ELEMENT: 58,
    58: "X_V_MODEL_ARG_ON_ELEMENT",
    X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59,
    59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
    X_V_MODEL_UNNECESSARY_VALUE: 60,
    60: "X_V_MODEL_UNNECESSARY_VALUE",
    X_V_SHOW_NO_EXPRESSION: 61,
    61: "X_V_SHOW_NO_EXPRESSION",
    X_TRANSITION_INVALID_CHILDREN: 62,
    62: "X_TRANSITION_INVALID_CHILDREN",
    X_IGNORED_SIDE_EFFECT_TAG: 63,
    63: "X_IGNORED_SIDE_EFFECT_TAG",
    __EXTEND_POINT__: 64,
    64: "__EXTEND_POINT__",
  },
  Gm = {
    53: "v-html is missing expression.",
    54: "v-html will override element children.",
    55: "v-text is missing expression.",
    56: "v-text will override element children.",
    57: "v-model can only be used on <input>, <textarea> and <select> elements.",
    58: "v-model argument is not supported on plain elements.",
    59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
    60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
    61: "v-show is missing expression.",
    62: "<Transition> expects exactly one child element or component.",
    63: "Tags with side effect (<script> and <style>) are ignored in client component templates.",
  },
  Hm = (e, t, n) => {
    const { exp: a, loc: r } = e;
    return (
      a || n.onError(Mn(53, r)),
      t.children.length && (n.onError(Mn(54, r)), (t.children.length = 0)),
      { props: [lt(Ce("innerHTML", !0, r), a || Ce("", !0))] }
    );
  },
  zm = (e, t, n) => {
    const { exp: a, loc: r } = e;
    return (
      a || n.onError(Mn(55, r)),
      t.children.length && (n.onError(Mn(56, r)), (t.children.length = 0)),
      {
        props: [
          lt(
            Ce("textContent", !0),
            a
              ? Ht(a, n) > 0
                ? a
                : pt(n.helperString(Tr), [a], r)
              : Ce("", !0),
          ),
        ],
      }
    );
  },
  Xm = (e, t, n) => {
    const a = Hs(e, t, n);
    if (!a.props.length || t.tagType === 1) return a;
    e.arg && n.onError(Mn(58, e.arg.loc));
    const { tag: r } = t,
      s = n.isCustomElement(r);
    if (r === "input" || r === "textarea" || r === "select" || s) {
      let o = Ks,
        u = !1;
      if (r === "input" || s) {
        const l = Cr(t, "type");
        if (l) {
          if (l.type === 7) o = va;
          else if (l.value)
            switch (l.value.content) {
              case "radio":
                o = zs;
                break;
              case "checkbox":
                o = Xs;
                break;
              case "file":
                (u = !0), n.onError(Mn(59, e.loc));
                break;
            }
        } else Hl(t) && (o = va);
      } else r === "select" && (o = Ws);
      u || (a.needRuntime = n.helper(o));
    } else n.onError(Mn(57, e.loc));
    return (
      (a.props = a.props.filter(
        (o) => !(o.key.type === 4 && o.key.content === "modelValue"),
      )),
      a
    );
  },
  Km = ha("passive,once,capture"),
  Wm = ha("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
  Ym = ha("left,right"),
  Iu = ha("onkeyup,onkeydown,onkeypress"),
  Jm = (e, t, n, a) => {
    const r = [],
      s = [],
      o = [];
    for (let u = 0; u < t.length; u++) {
      const l = t[u].content;
      (l === "native" && Fo("COMPILER_V_ON_NATIVE", n)) || Km(l)
        ? o.push(l)
        : Ym(l)
          ? Vt(e)
            ? Iu(e.content.toLowerCase())
              ? r.push(l)
              : s.push(l)
            : (r.push(l), s.push(l))
          : Wm(l)
            ? s.push(l)
            : r.push(l);
    }
    return { keyModifiers: r, nonKeyModifiers: s, eventOptionModifiers: o };
  },
  qi = (e, t) =>
    Vt(e) && e.content.toLowerCase() === "onclick"
      ? Ce(t, !0)
      : e.type !== 4
        ? nn(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"])
        : e,
  Qm = (e, t, n) =>
    Gs(e, t, n, (a) => {
      const { modifiers: r } = e;
      if (!r.length) return a;
      let { key: s, value: o } = a.props[0];
      const {
        keyModifiers: u,
        nonKeyModifiers: l,
        eventOptionModifiers: i,
      } = Jm(s, r, n, e.loc);
      if (
        (l.includes("right") && (s = qi(s, "onContextmenu")),
        l.includes("middle") && (s = qi(s, "onMouseup")),
        l.length && (o = pt(n.helper(Ys), [o, JSON.stringify(l)])),
        u.length &&
          (!Vt(s) || Iu(s.content.toLowerCase())) &&
          (o = pt(n.helper(Js), [o, JSON.stringify(u)])),
        i.length)
      ) {
        const c = i.map(il).join("");
        s = Vt(s) ? Ce(`${s.content}${c}`, !0) : nn(["(", s, `) + "${c}"`]);
      }
      return { props: [lt(s, o)] };
    }),
  Zm = (e, t, n) => {
    const { exp: a, loc: r } = e;
    return a || n.onError(Mn(61, r)), { props: [], needRuntime: n.helper(Qs) };
  },
  qm = (e, t) => {
    e.type === 1 &&
      e.tagType === 0 &&
      (e.tag === "script" || e.tag === "style") &&
      t.removeNode();
  },
  Cu = [Tu],
  Ou = { cloak: Su, html: Hm, text: zm, model: Xm, on: Qm, show: Zm };
function _m(e, t = {}) {
  return bu(
    e,
    Rn({}, _s, t, {
      nodeTransforms: [qm, ...Cu, ...(t.nodeTransforms || [])],
      directiveTransforms: Rn({}, Ou, t.directiveTransforms || {}),
      transformHoist: null,
    }),
  );
}
function ev(e, t = {}) {
  return Fs(e, Rn({}, _s, t));
}
const tv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BASE_TRANSITION: Cs,
        BindingTypes: $m,
        CAMELIZE: ua,
        CAPITALIZE: Cl,
        CREATE_BLOCK: Os,
        CREATE_COMMENT: Bo,
        CREATE_ELEMENT_BLOCK: xs,
        CREATE_ELEMENT_VNODE: Ta,
        CREATE_SLOTS: Ds,
        CREATE_STATIC: Ns,
        CREATE_TEXT: Ia,
        CREATE_VNODE: Sa,
        CompilerDeprecationTypes: Sp,
        ConstantTypes: pp,
        DOMDirectiveTransforms: Ou,
        DOMErrorCodes: Bm,
        DOMErrorMessages: Gm,
        DOMNodeTransforms: Cu,
        ElementTypes: fp,
        ErrorCodes: Cp,
        FRAGMENT: Vo,
        GUARD_REACTIVE_PROPS: Go,
        IS_MEMO_SAME: As,
        IS_REF: wl,
        KEEP_ALIVE: fr,
        MERGE_PROPS: pr,
        NORMALIZE_CLASS: Aa,
        NORMALIZE_PROPS: Mo,
        NORMALIZE_STYLE: Pa,
        Namespaces: dp,
        NodeTypes: cp,
        OPEN_BLOCK: Jn,
        POP_SCOPE_ID: xl,
        PUSH_SCOPE_ID: Ol,
        RENDER_LIST: Da,
        RENDER_SLOT: ws,
        RESOLVE_COMPONENT: Ca,
        RESOLVE_DIRECTIVE: xa,
        RESOLVE_DYNAMIC_COMPONENT: Oa,
        RESOLVE_FILTER: Na,
        SET_BLOCK_TRACKING: mr,
        SUSPENSE: ba,
        TELEPORT: Ro,
        TO_DISPLAY_STRING: Tr,
        TO_HANDLERS: Ra,
        TO_HANDLER_KEY: da,
        TRANSITION: Zs,
        TRANSITION_GROUP: qs,
        TS_NODE_TYPES: Ll,
        UNREF: Nl,
        V_MODEL_CHECKBOX: Xs,
        V_MODEL_DYNAMIC: va,
        V_MODEL_RADIO: zs,
        V_MODEL_SELECT: Ws,
        V_MODEL_TEXT: Ks,
        V_ON_WITH_KEYS: Js,
        V_ON_WITH_MODIFIERS: Ys,
        V_SHOW: Qs,
        WITH_CTX: ka,
        WITH_DIRECTIVES: wa,
        WITH_MEMO: Va,
        advancePositionWithClone: Gp,
        advancePositionWithMutation: Gl,
        assert: Hp,
        baseCompile: bu,
        baseParse: Fs,
        buildDirectiveArgs: vu,
        buildProps: Bs,
        buildSlots: cu,
        checkCompatEnabled: Fo,
        compile: _m,
        convertToBlock: Ma,
        createArrayExpression: Yn,
        createAssignmentExpression: hp,
        createBlockStatement: Rl,
        createCacheExpression: Pl,
        createCallExpression: pt,
        createCompilerError: We,
        createCompoundExpression: nn,
        createConditionalExpression: ca,
        createDOMCompilerError: Mn,
        createForLoopParams: pa,
        createFunctionExpression: po,
        createIfStatement: gp,
        createInterpolation: mp,
        createObjectExpression: Qt,
        createObjectProperty: lt,
        createReturnStatement: Ep,
        createRoot: Al,
        createSequenceExpression: yp,
        createSimpleExpression: Ce,
        createStructuralDirectiveTransform: $s,
        createTemplateLiteral: vp,
        createTransformContext: tu,
        createVNodeCall: Lo,
        errorMessages: Op,
        extractIdentifiers: Sn,
        findDir: kt,
        findProp: Cr,
        forAliasRE: Kl,
        generate: ru,
        generateCodeFrame: Yd,
        getBaseTransformPreset: Eu,
        getConstantType: Ht,
        getMemoedVNodeCall: Xl,
        getVNodeBlockHelper: vo,
        getVNodeHelper: mo,
        hasDynamicKeyVBind: Hl,
        hasScopeRef: cn,
        helperNameMap: fo,
        injectProp: gr,
        isCoreComponent: Rs,
        isFnExpression: Bl,
        isFnExpressionBrowser: jl,
        isFnExpressionNode: Bp,
        isFunctionType: Vp,
        isInDestructureAssignment: wp,
        isInNewExpression: Dp,
        isMemberExpression: Vs,
        isMemberExpressionBrowser: Ul,
        isMemberExpressionNode: Up,
        isReferencedIdentifier: Np,
        isSimpleIdentifier: Ir,
        isSlotOutlet: vr,
        isStaticArgOf: Xn,
        isStaticExp: Vt,
        isStaticProperty: Ml,
        isStaticPropertyKey: Mp,
        isTemplateNode: $o,
        isText: Zr,
        isVPre: fs,
        isVSlot: Ms,
        locStub: vt,
        noopDirectiveTransform: Su,
        parse: ev,
        parserOptions: _s,
        processExpression: ta,
        processFor: uu,
        processIf: lu,
        processSlotOutlet: gu,
        registerRuntimeHelpers: Dl,
        resolveComponentType: mu,
        stringifyExpression: iu,
        toValidAssetId: Uo,
        trackSlotScopes: du,
        trackVForSlotScopes: Nm,
        transform: nu,
        transformBind: hu,
        transformElement: pu,
        transformExpression: Tm,
        transformModel: Hs,
        transformOn: Gs,
        transformStyle: Tu,
        transformVBindShorthand: yu,
        traverseNode: Or,
        unwrapTSNode: Fl,
        validFirstIdentCharRE: ks,
        walkBlockDeclarations: Vl,
        walkFunctionParams: Ap,
        walkIdentifiers: xp,
        warnDeprecation: Ip,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nv = ya(tv),
  ov = ya(Jd),
  rv = ya(Qd);
var _i;
function av() {
  return (
    _i ||
      ((_i = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = nv,
          n = ov,
          a = rv;
        function r(l) {
          var i = Object.create(null);
          if (l) for (var c in l) i[c] = l[c];
          return (i.default = l), Object.freeze(i);
        }
        var s = r(n);
        const o = Object.create(null);
        function u(l, i) {
          if (!a.isString(l))
            if (l.nodeType) l = l.innerHTML;
            else return a.NOOP;
          const c = a.genCacheKey(l, i),
            p = o[c];
          if (p) return p;
          if (l[0] === "#") {
            const h = document.querySelector(l);
            l = h ? h.innerHTML : "";
          }
          const y = a.extend(
            { hoistStatic: !0, onError: void 0, onWarn: a.NOOP },
            i,
          );
          !y.isCustomElement &&
            typeof customElements < "u" &&
            (y.isCustomElement = (h) => !!customElements.get(h));
          const { code: E } = t.compile(l, y),
            v = new Function("Vue", E)(s);
          return (v._rc = !0), (o[c] = v);
        }
        n.registerRuntimeCompiler(u),
          (e.compile = u),
          Object.keys(n).forEach(function (l) {
            l !== "default" &&
              !Object.prototype.hasOwnProperty.call(e, l) &&
              (e[l] = n[l]);
          });
      })(ns)),
    ns
  );
}
var el;
function sv() {
  return el || ((el = 1), (ts.exports = av())), ts.exports;
}
const iv = ya(up);
var lv = Qr.exports,
  tl;
function uv() {
  return (
    tl ||
      ((tl = 1),
      (function (e, t) {
        (function (a, r) {
          e.exports = r(sv(), iv);
        })(typeof self < "u" ? self : lv, function (n, a) {
          return (function (r) {
            var s = {};
            function o(u) {
              if (s[u]) return s[u].exports;
              var l = (s[u] = { i: u, l: !1, exports: {} });
              return (
                r[u].call(l.exports, l, l.exports, o), (l.l = !0), l.exports
              );
            }
            return (
              (o.m = r),
              (o.c = s),
              (o.d = function (u, l, i) {
                o.o(u, l) ||
                  Object.defineProperty(u, l, { enumerable: !0, get: i });
              }),
              (o.r = function (u) {
                typeof Symbol < "u" &&
                  Symbol.toStringTag &&
                  Object.defineProperty(u, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(u, "__esModule", { value: !0 });
              }),
              (o.t = function (u, l) {
                if (
                  (l & 1 && (u = o(u)),
                  l & 8 || (l & 4 && typeof u == "object" && u && u.__esModule))
                )
                  return u;
                var i = Object.create(null);
                if (
                  (o.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: u,
                  }),
                  l & 2 && typeof u != "string")
                )
                  for (var c in u)
                    o.d(
                      i,
                      c,
                      function (p) {
                        return u[p];
                      }.bind(null, c),
                    );
                return i;
              }),
              (o.n = function (u) {
                var l =
                  u && u.__esModule
                    ? function () {
                        return u.default;
                      }
                    : function () {
                        return u;
                      };
                return o.d(l, "a", l), l;
              }),
              (o.o = function (u, l) {
                return Object.prototype.hasOwnProperty.call(u, l);
              }),
              (o.p = ""),
              o((o.s = "fb15"))
            );
          })({
            "00ee": function (r, s, o) {
              var u = o("b622"),
                l = u("toStringTag"),
                i = {};
              (i[l] = "z"), (r.exports = String(i) === "[object z]");
            },
            "0366": function (r, s, o) {
              var u = o("1c0b");
              r.exports = function (l, i, c) {
                if ((u(l), i === void 0)) return l;
                switch (c) {
                  case 0:
                    return function () {
                      return l.call(i);
                    };
                  case 1:
                    return function (p) {
                      return l.call(i, p);
                    };
                  case 2:
                    return function (p, y) {
                      return l.call(i, p, y);
                    };
                  case 3:
                    return function (p, y, E) {
                      return l.call(i, p, y, E);
                    };
                }
                return function () {
                  return l.apply(i, arguments);
                };
              };
            },
            "057f": function (r, s, o) {
              var u = o("fc6a"),
                l = o("241c").f,
                i = {}.toString,
                c =
                  typeof window == "object" &&
                  window &&
                  Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window)
                    : [],
                p = function (y) {
                  try {
                    return l(y);
                  } catch {
                    return c.slice();
                  }
                };
              r.exports.f = function (E) {
                return c && i.call(E) == "[object Window]" ? p(E) : l(u(E));
              };
            },
            "06cf": function (r, s, o) {
              var u = o("83ab"),
                l = o("d1e7"),
                i = o("5c6c"),
                c = o("fc6a"),
                p = o("c04e"),
                y = o("5135"),
                E = o("0cfb"),
                v = Object.getOwnPropertyDescriptor;
              s.f = u
                ? v
                : function (b, S) {
                    if (((b = c(b)), (S = p(S, !0)), E))
                      try {
                        return v(b, S);
                      } catch {}
                    if (y(b, S)) return i(!l.f.call(b, S), b[S]);
                  };
            },
            "0cfb": function (r, s, o) {
              var u = o("83ab"),
                l = o("d039"),
                i = o("cc12");
              r.exports =
                !u &&
                !l(function () {
                  return (
                    Object.defineProperty(i("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a != 7
                  );
                });
            },
            "13d5": function (r, s, o) {
              var u = o("23e7"),
                l = o("d58f").left,
                i = o("a640"),
                c = o("ae40"),
                p = i("reduce"),
                y = c("reduce", { 1: 0 });
              u(
                { target: "Array", proto: !0, forced: !p || !y },
                {
                  reduce: function (v) {
                    return l(
                      this,
                      v,
                      arguments.length,
                      arguments.length > 1 ? arguments[1] : void 0,
                    );
                  },
                },
              );
            },
            "14c3": function (r, s, o) {
              var u = o("c6b6"),
                l = o("9263");
              r.exports = function (i, c) {
                var p = i.exec;
                if (typeof p == "function") {
                  var y = p.call(i, c);
                  if (typeof y != "object")
                    throw TypeError(
                      "RegExp exec method returned something other than an Object or null",
                    );
                  return y;
                }
                if (u(i) !== "RegExp")
                  throw TypeError(
                    "RegExp#exec called on incompatible receiver",
                  );
                return l.call(i, c);
              };
            },
            "159b": function (r, s, o) {
              var u = o("da84"),
                l = o("fdbc"),
                i = o("17c2"),
                c = o("9112");
              for (var p in l) {
                var y = u[p],
                  E = y && y.prototype;
                if (E && E.forEach !== i)
                  try {
                    c(E, "forEach", i);
                  } catch {
                    E.forEach = i;
                  }
              }
            },
            "17c2": function (r, s, o) {
              var u = o("b727").forEach,
                l = o("a640"),
                i = o("ae40"),
                c = l("forEach"),
                p = i("forEach");
              r.exports =
                !c || !p
                  ? function (E) {
                      return u(
                        this,
                        E,
                        arguments.length > 1 ? arguments[1] : void 0,
                      );
                    }
                  : [].forEach;
            },
            "1be4": function (r, s, o) {
              var u = o("d066");
              r.exports = u("document", "documentElement");
            },
            "1c0b": function (r, s) {
              r.exports = function (o) {
                if (typeof o != "function")
                  throw TypeError(String(o) + " is not a function");
                return o;
              };
            },
            "1c7e": function (r, s, o) {
              var u = o("b622"),
                l = u("iterator"),
                i = !1;
              try {
                var c = 0,
                  p = {
                    next: function () {
                      return { done: !!c++ };
                    },
                    return: function () {
                      i = !0;
                    },
                  };
                (p[l] = function () {
                  return this;
                }),
                  Array.from(p, function () {
                    throw 2;
                  });
              } catch {}
              r.exports = function (y, E) {
                if (!E && !i) return !1;
                var v = !1;
                try {
                  var h = {};
                  (h[l] = function () {
                    return {
                      next: function () {
                        return { done: (v = !0) };
                      },
                    };
                  }),
                    y(h);
                } catch {}
                return v;
              };
            },
            "1d80": function (r, s) {
              r.exports = function (o) {
                if (o == null) throw TypeError("Can't call method on " + o);
                return o;
              };
            },
            "1dde": function (r, s, o) {
              var u = o("d039"),
                l = o("b622"),
                i = o("2d00"),
                c = l("species");
              r.exports = function (p) {
                return (
                  i >= 51 ||
                  !u(function () {
                    var y = [],
                      E = (y.constructor = {});
                    return (
                      (E[c] = function () {
                        return { foo: 1 };
                      }),
                      y[p](Boolean).foo !== 1
                    );
                  })
                );
              };
            },
            "23cb": function (r, s, o) {
              var u = o("a691"),
                l = Math.max,
                i = Math.min;
              r.exports = function (c, p) {
                var y = u(c);
                return y < 0 ? l(y + p, 0) : i(y, p);
              };
            },
            "23e7": function (r, s, o) {
              var u = o("da84"),
                l = o("06cf").f,
                i = o("9112"),
                c = o("6eeb"),
                p = o("ce4e"),
                y = o("e893"),
                E = o("94ca");
              r.exports = function (v, h) {
                var b = v.target,
                  S = v.global,
                  T = v.stat,
                  $,
                  C,
                  N,
                  D,
                  H,
                  j;
                if (
                  (S
                    ? (C = u)
                    : T
                      ? (C = u[b] || p(b, {}))
                      : (C = (u[b] || {}).prototype),
                  C)
                )
                  for (N in h) {
                    if (
                      ((H = h[N]),
                      v.noTargetGet
                        ? ((j = l(C, N)), (D = j && j.value))
                        : (D = C[N]),
                      ($ = E(S ? N : b + (T ? "." : "#") + N, v.forced)),
                      !$ && D !== void 0)
                    ) {
                      if (typeof H == typeof D) continue;
                      y(H, D);
                    }
                    (v.sham || (D && D.sham)) && i(H, "sham", !0),
                      c(C, N, H, v);
                  }
              };
            },
            "241c": function (r, s, o) {
              var u = o("ca84"),
                l = o("7839"),
                i = l.concat("length", "prototype");
              s.f =
                Object.getOwnPropertyNames ||
                function (p) {
                  return u(p, i);
                };
            },
            "25f0": function (r, s, o) {
              var u = o("6eeb"),
                l = o("825a"),
                i = o("d039"),
                c = o("ad6d"),
                p = "toString",
                y = RegExp.prototype,
                E = y[p],
                v = i(function () {
                  return E.call({ source: "a", flags: "b" }) != "/a/b";
                }),
                h = E.name != p;
              (v || h) &&
                u(
                  RegExp.prototype,
                  p,
                  function () {
                    var S = l(this),
                      T = String(S.source),
                      $ = S.flags,
                      C = String(
                        $ === void 0 && S instanceof RegExp && !("flags" in y)
                          ? c.call(S)
                          : $,
                      );
                    return "/" + T + "/" + C;
                  },
                  { unsafe: !0 },
                );
            },
            "2ca0": function (r, s, o) {
              var u = o("23e7"),
                l = o("06cf").f,
                i = o("50c4"),
                c = o("5a34"),
                p = o("1d80"),
                y = o("ab13"),
                E = o("c430"),
                v = "".startsWith,
                h = Math.min,
                b = y("startsWith"),
                S =
                  !E &&
                  !b &&
                  !!(function () {
                    var T = l(String.prototype, "startsWith");
                    return T && !T.writable;
                  })();
              u(
                { target: "String", proto: !0, forced: !S && !b },
                {
                  startsWith: function ($) {
                    var C = String(p(this));
                    c($);
                    var N = i(
                        h(
                          arguments.length > 1 ? arguments[1] : void 0,
                          C.length,
                        ),
                      ),
                      D = String($);
                    return v ? v.call(C, D, N) : C.slice(N, N + D.length) === D;
                  },
                },
              );
            },
            "2d00": function (r, s, o) {
              var u = o("da84"),
                l = o("342f"),
                i = u.process,
                c = i && i.versions,
                p = c && c.v8,
                y,
                E;
              p
                ? ((y = p.split(".")), (E = y[0] + y[1]))
                : l &&
                  ((y = l.match(/Edge\/(\d+)/)),
                  (!y || y[1] >= 74) &&
                    ((y = l.match(/Chrome\/(\d+)/)), y && (E = y[1]))),
                (r.exports = E && +E);
            },
            "342f": function (r, s, o) {
              var u = o("d066");
              r.exports = u("navigator", "userAgent") || "";
            },
            "35a1": function (r, s, o) {
              var u = o("f5df"),
                l = o("3f8c"),
                i = o("b622"),
                c = i("iterator");
              r.exports = function (p) {
                if (p != null) return p[c] || p["@@iterator"] || l[u(p)];
              };
            },
            "37e8": function (r, s, o) {
              var u = o("83ab"),
                l = o("9bf2"),
                i = o("825a"),
                c = o("df75");
              r.exports = u
                ? Object.defineProperties
                : function (y, E) {
                    i(y);
                    for (var v = c(E), h = v.length, b = 0, S; h > b; )
                      l.f(y, (S = v[b++]), E[S]);
                    return y;
                  };
            },
            "3bbe": function (r, s, o) {
              var u = o("861d");
              r.exports = function (l) {
                if (!u(l) && l !== null)
                  throw TypeError("Can't set " + String(l) + " as a prototype");
                return l;
              };
            },
            "3ca3": function (r, s, o) {
              var u = o("6547").charAt,
                l = o("69f3"),
                i = o("7dd0"),
                c = "String Iterator",
                p = l.set,
                y = l.getterFor(c);
              i(
                String,
                "String",
                function (E) {
                  p(this, { type: c, string: String(E), index: 0 });
                },
                function () {
                  var v = y(this),
                    h = v.string,
                    b = v.index,
                    S;
                  return b >= h.length
                    ? { value: void 0, done: !0 }
                    : ((S = u(h, b)),
                      (v.index += S.length),
                      { value: S, done: !1 });
                },
              );
            },
            "3f8c": function (r, s) {
              r.exports = {};
            },
            4160: function (r, s, o) {
              var u = o("23e7"),
                l = o("17c2");
              u(
                { target: "Array", proto: !0, forced: [].forEach != l },
                { forEach: l },
              );
            },
            "428f": function (r, s, o) {
              var u = o("da84");
              r.exports = u;
            },
            "44ad": function (r, s, o) {
              var u = o("d039"),
                l = o("c6b6"),
                i = "".split;
              r.exports = u(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (c) {
                    return l(c) == "String" ? i.call(c, "") : Object(c);
                  }
                : Object;
            },
            "44d2": function (r, s, o) {
              var u = o("b622"),
                l = o("7c73"),
                i = o("9bf2"),
                c = u("unscopables"),
                p = Array.prototype;
              p[c] == null && i.f(p, c, { configurable: !0, value: l(null) }),
                (r.exports = function (y) {
                  p[c][y] = !0;
                });
            },
            "44e7": function (r, s, o) {
              var u = o("861d"),
                l = o("c6b6"),
                i = o("b622"),
                c = i("match");
              r.exports = function (p) {
                var y;
                return u(p) && ((y = p[c]) !== void 0 ? !!y : l(p) == "RegExp");
              };
            },
            4930: function (r, s, o) {
              var u = o("d039");
              r.exports =
                !!Object.getOwnPropertySymbols &&
                !u(function () {
                  return !String(Symbol());
                });
            },
            "4d64": function (r, s, o) {
              var u = o("fc6a"),
                l = o("50c4"),
                i = o("23cb"),
                c = function (p) {
                  return function (y, E, v) {
                    var h = u(y),
                      b = l(h.length),
                      S = i(v, b),
                      T;
                    if (p && E != E) {
                      for (; b > S; ) if (((T = h[S++]), T != T)) return !0;
                    } else
                      for (; b > S; S++)
                        if ((p || S in h) && h[S] === E) return p || S || 0;
                    return !p && -1;
                  };
                };
              r.exports = { includes: c(!0), indexOf: c(!1) };
            },
            "4de4": function (r, s, o) {
              var u = o("23e7"),
                l = o("b727").filter,
                i = o("1dde"),
                c = o("ae40"),
                p = i("filter"),
                y = c("filter");
              u(
                { target: "Array", proto: !0, forced: !p || !y },
                {
                  filter: function (v) {
                    return l(
                      this,
                      v,
                      arguments.length > 1 ? arguments[1] : void 0,
                    );
                  },
                },
              );
            },
            "4df4": function (r, s, o) {
              var u = o("0366"),
                l = o("7b0b"),
                i = o("9bdd"),
                c = o("e95a"),
                p = o("50c4"),
                y = o("8418"),
                E = o("35a1");
              r.exports = function (h) {
                var b = l(h),
                  S = typeof this == "function" ? this : Array,
                  T = arguments.length,
                  $ = T > 1 ? arguments[1] : void 0,
                  C = $ !== void 0,
                  N = E(b),
                  D = 0,
                  H,
                  j,
                  O,
                  Y,
                  te,
                  ne;
                if (
                  (C && ($ = u($, T > 2 ? arguments[2] : void 0, 2)),
                  N != null && !(S == Array && c(N)))
                )
                  for (
                    Y = N.call(b), te = Y.next, j = new S();
                    !(O = te.call(Y)).done;
                    D++
                  )
                    (ne = C ? i(Y, $, [O.value, D], !0) : O.value), y(j, D, ne);
                else
                  for (H = p(b.length), j = new S(H); H > D; D++)
                    (ne = C ? $(b[D], D) : b[D]), y(j, D, ne);
                return (j.length = D), j;
              };
            },
            "4fad": function (r, s, o) {
              var u = o("23e7"),
                l = o("6f53").entries;
              u(
                { target: "Object", stat: !0 },
                {
                  entries: function (c) {
                    return l(c);
                  },
                },
              );
            },
            "50c4": function (r, s, o) {
              var u = o("a691"),
                l = Math.min;
              r.exports = function (i) {
                return i > 0 ? l(u(i), 9007199254740991) : 0;
              };
            },
            5135: function (r, s) {
              var o = {}.hasOwnProperty;
              r.exports = function (u, l) {
                return o.call(u, l);
              };
            },
            5319: function (r, s, o) {
              var u = o("d784"),
                l = o("825a"),
                i = o("7b0b"),
                c = o("50c4"),
                p = o("a691"),
                y = o("1d80"),
                E = o("8aa5"),
                v = o("14c3"),
                h = Math.max,
                b = Math.min,
                S = Math.floor,
                T = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                $ = /\$([$&'`]|\d\d?)/g,
                C = function (N) {
                  return N === void 0 ? N : String(N);
                };
              u("replace", 2, function (N, D, H, j) {
                var O = j.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                  Y = j.REPLACE_KEEPS_$0,
                  te = O ? "$" : "$0";
                return [
                  function (X, ue) {
                    var G = y(this),
                      A = X?.[N];
                    return A !== void 0
                      ? A.call(X, G, ue)
                      : D.call(String(G), X, ue);
                  },
                  function (K, X) {
                    if (
                      (!O && Y) ||
                      (typeof X == "string" && X.indexOf(te) === -1)
                    ) {
                      var ue = H(D, K, this, X);
                      if (ue.done) return ue.value;
                    }
                    var G = l(K),
                      A = String(this),
                      w = typeof X == "function";
                    w || (X = String(X));
                    var se = G.global;
                    if (se) {
                      var ke = G.unicode;
                      G.lastIndex = 0;
                    }
                    for (var ge = []; ; ) {
                      var Ee = v(G, A);
                      if (Ee === null || (ge.push(Ee), !se)) break;
                      var Be = String(Ee[0]);
                      Be === "" && (G.lastIndex = E(A, c(G.lastIndex), ke));
                    }
                    for (var je = "", He = 0, Fe = 0; Fe < ge.length; Fe++) {
                      Ee = ge[Fe];
                      for (
                        var Ue = String(Ee[0]),
                          ut = h(b(p(Ee.index), A.length), 0),
                          qe = [],
                          bt = 1;
                        bt < Ee.length;
                        bt++
                      )
                        qe.push(C(Ee[bt]));
                      var St = Ee.groups;
                      if (w) {
                        var Tt = [Ue].concat(qe, ut, A);
                        St !== void 0 && Tt.push(St);
                        var ze = String(X.apply(void 0, Tt));
                      } else ze = ne(Ue, A, ut, qe, St, X);
                      ut >= He &&
                        ((je += A.slice(He, ut) + ze), (He = ut + Ue.length));
                    }
                    return je + A.slice(He);
                  },
                ];
                function ne(K, X, ue, G, A, w) {
                  var se = ue + K.length,
                    ke = G.length,
                    ge = $;
                  return (
                    A !== void 0 && ((A = i(A)), (ge = T)),
                    D.call(w, ge, function (Ee, Be) {
                      var je;
                      switch (Be.charAt(0)) {
                        case "$":
                          return "$";
                        case "&":
                          return K;
                        case "`":
                          return X.slice(0, ue);
                        case "'":
                          return X.slice(se);
                        case "<":
                          je = A[Be.slice(1, -1)];
                          break;
                        default:
                          var He = +Be;
                          if (He === 0) return Ee;
                          if (He > ke) {
                            var Fe = S(He / 10);
                            return Fe === 0
                              ? Ee
                              : Fe <= ke
                                ? G[Fe - 1] === void 0
                                  ? Be.charAt(1)
                                  : G[Fe - 1] + Be.charAt(1)
                                : Ee;
                          }
                          je = G[He - 1];
                      }
                      return je === void 0 ? "" : je;
                    })
                  );
                }
              });
            },
            5692: function (r, s, o) {
              var u = o("c430"),
                l = o("c6cd");
              (r.exports = function (i, c) {
                return l[i] || (l[i] = c !== void 0 ? c : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: u ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
              });
            },
            "56ef": function (r, s, o) {
              var u = o("d066"),
                l = o("241c"),
                i = o("7418"),
                c = o("825a");
              r.exports =
                u("Reflect", "ownKeys") ||
                function (y) {
                  var E = l.f(c(y)),
                    v = i.f;
                  return v ? E.concat(v(y)) : E;
                };
            },
            "5a34": function (r, s, o) {
              var u = o("44e7");
              r.exports = function (l) {
                if (u(l))
                  throw TypeError(
                    "The method doesn't accept regular expressions",
                  );
                return l;
              };
            },
            "5c6c": function (r, s) {
              r.exports = function (o, u) {
                return {
                  enumerable: !(o & 1),
                  configurable: !(o & 2),
                  writable: !(o & 4),
                  value: u,
                };
              };
            },
            "5db7": function (r, s, o) {
              var u = o("23e7"),
                l = o("a2bf"),
                i = o("7b0b"),
                c = o("50c4"),
                p = o("1c0b"),
                y = o("65f0");
              u(
                { target: "Array", proto: !0 },
                {
                  flatMap: function (v) {
                    var h = i(this),
                      b = c(h.length),
                      S;
                    return (
                      p(v),
                      (S = y(h, 0)),
                      (S.length = l(
                        S,
                        h,
                        h,
                        b,
                        0,
                        1,
                        v,
                        arguments.length > 1 ? arguments[1] : void 0,
                      )),
                      S
                    );
                  },
                },
              );
            },
            6547: function (r, s, o) {
              var u = o("a691"),
                l = o("1d80"),
                i = function (c) {
                  return function (p, y) {
                    var E = String(l(p)),
                      v = u(y),
                      h = E.length,
                      b,
                      S;
                    return v < 0 || v >= h
                      ? c
                        ? ""
                        : void 0
                      : ((b = E.charCodeAt(v)),
                        b < 55296 ||
                        b > 56319 ||
                        v + 1 === h ||
                        (S = E.charCodeAt(v + 1)) < 56320 ||
                        S > 57343
                          ? c
                            ? E.charAt(v)
                            : b
                          : c
                            ? E.slice(v, v + 2)
                            : ((b - 55296) << 10) + (S - 56320) + 65536);
                  };
                };
              r.exports = { codeAt: i(!1), charAt: i(!0) };
            },
            "65f0": function (r, s, o) {
              var u = o("861d"),
                l = o("e8b5"),
                i = o("b622"),
                c = i("species");
              r.exports = function (p, y) {
                var E;
                return (
                  l(p) &&
                    ((E = p.constructor),
                    typeof E == "function" && (E === Array || l(E.prototype))
                      ? (E = void 0)
                      : u(E) && ((E = E[c]), E === null && (E = void 0))),
                  new (E === void 0 ? Array : E)(y === 0 ? 0 : y)
                );
              };
            },
            "69f3": function (r, s, o) {
              var u = o("7f9a"),
                l = o("da84"),
                i = o("861d"),
                c = o("9112"),
                p = o("5135"),
                y = o("f772"),
                E = o("d012"),
                v = l.WeakMap,
                h,
                b,
                S,
                T = function (O) {
                  return S(O) ? b(O) : h(O, {});
                },
                $ = function (O) {
                  return function (Y) {
                    var te;
                    if (!i(Y) || (te = b(Y)).type !== O)
                      throw TypeError(
                        "Incompatible receiver, " + O + " required",
                      );
                    return te;
                  };
                };
              if (u) {
                var C = new v(),
                  N = C.get,
                  D = C.has,
                  H = C.set;
                (h = function (O, Y) {
                  return H.call(C, O, Y), Y;
                }),
                  (b = function (O) {
                    return N.call(C, O) || {};
                  }),
                  (S = function (O) {
                    return D.call(C, O);
                  });
              } else {
                var j = y("state");
                (E[j] = !0),
                  (h = function (O, Y) {
                    return c(O, j, Y), Y;
                  }),
                  (b = function (O) {
                    return p(O, j) ? O[j] : {};
                  }),
                  (S = function (O) {
                    return p(O, j);
                  });
              }
              r.exports = { set: h, get: b, has: S, enforce: T, getterFor: $ };
            },
            "6eeb": function (r, s, o) {
              var u = o("da84"),
                l = o("9112"),
                i = o("5135"),
                c = o("ce4e"),
                p = o("8925"),
                y = o("69f3"),
                E = y.get,
                v = y.enforce,
                h = String(String).split("String");
              (r.exports = function (b, S, T, $) {
                var C = $ ? !!$.unsafe : !1,
                  N = $ ? !!$.enumerable : !1,
                  D = $ ? !!$.noTargetGet : !1;
                if (
                  (typeof T == "function" &&
                    (typeof S == "string" && !i(T, "name") && l(T, "name", S),
                    (v(T).source = h.join(typeof S == "string" ? S : ""))),
                  b === u)
                ) {
                  N ? (b[S] = T) : c(S, T);
                  return;
                } else C ? !D && b[S] && (N = !0) : delete b[S];
                N ? (b[S] = T) : l(b, S, T);
              })(Function.prototype, "toString", function () {
                return (typeof this == "function" && E(this).source) || p(this);
              });
            },
            "6f53": function (r, s, o) {
              var u = o("83ab"),
                l = o("df75"),
                i = o("fc6a"),
                c = o("d1e7").f,
                p = function (y) {
                  return function (E) {
                    for (
                      var v = i(E), h = l(v), b = h.length, S = 0, T = [], $;
                      b > S;

                    )
                      ($ = h[S++]),
                        (!u || c.call(v, $)) && T.push(y ? [$, v[$]] : v[$]);
                    return T;
                  };
                };
              r.exports = { entries: p(!0), values: p(!1) };
            },
            "73d9": function (r, s, o) {
              var u = o("44d2");
              u("flatMap");
            },
            7418: function (r, s) {
              s.f = Object.getOwnPropertySymbols;
            },
            "746f": function (r, s, o) {
              var u = o("428f"),
                l = o("5135"),
                i = o("e538"),
                c = o("9bf2").f;
              r.exports = function (p) {
                var y = u.Symbol || (u.Symbol = {});
                l(y, p) || c(y, p, { value: i.f(p) });
              };
            },
            7839: function (r, s) {
              r.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ];
            },
            "7b0b": function (r, s, o) {
              var u = o("1d80");
              r.exports = function (l) {
                return Object(u(l));
              };
            },
            "7c73": function (r, s, o) {
              var u = o("825a"),
                l = o("37e8"),
                i = o("7839"),
                c = o("d012"),
                p = o("1be4"),
                y = o("cc12"),
                E = o("f772"),
                v = ">",
                h = "<",
                b = "prototype",
                S = "script",
                T = E("IE_PROTO"),
                $ = function () {},
                C = function (O) {
                  return h + S + v + O + h + "/" + S + v;
                },
                N = function (O) {
                  O.write(C("")), O.close();
                  var Y = O.parentWindow.Object;
                  return (O = null), Y;
                },
                D = function () {
                  var O = y("iframe"),
                    Y = "java" + S + ":",
                    te;
                  return (
                    (O.style.display = "none"),
                    p.appendChild(O),
                    (O.src = String(Y)),
                    (te = O.contentWindow.document),
                    te.open(),
                    te.write(C("document.F=Object")),
                    te.close(),
                    te.F
                  );
                },
                H,
                j = function () {
                  try {
                    H = document.domain && new ActiveXObject("htmlfile");
                  } catch {}
                  j = H ? N(H) : D();
                  for (var O = i.length; O--; ) delete j[b][i[O]];
                  return j();
                };
              (c[T] = !0),
                (r.exports =
                  Object.create ||
                  function (Y, te) {
                    var ne;
                    return (
                      Y !== null
                        ? (($[b] = u(Y)),
                          (ne = new $()),
                          ($[b] = null),
                          (ne[T] = Y))
                        : (ne = j()),
                      te === void 0 ? ne : l(ne, te)
                    );
                  });
            },
            "7dd0": function (r, s, o) {
              var u = o("23e7"),
                l = o("9ed3"),
                i = o("e163"),
                c = o("d2bb"),
                p = o("d44e"),
                y = o("9112"),
                E = o("6eeb"),
                v = o("b622"),
                h = o("c430"),
                b = o("3f8c"),
                S = o("ae93"),
                T = S.IteratorPrototype,
                $ = S.BUGGY_SAFARI_ITERATORS,
                C = v("iterator"),
                N = "keys",
                D = "values",
                H = "entries",
                j = function () {
                  return this;
                };
              r.exports = function (O, Y, te, ne, K, X, ue) {
                l(te, Y, ne);
                var G = function (Fe) {
                    if (Fe === K && ge) return ge;
                    if (!$ && Fe in se) return se[Fe];
                    switch (Fe) {
                      case N:
                        return function () {
                          return new te(this, Fe);
                        };
                      case D:
                        return function () {
                          return new te(this, Fe);
                        };
                      case H:
                        return function () {
                          return new te(this, Fe);
                        };
                    }
                    return function () {
                      return new te(this);
                    };
                  },
                  A = Y + " Iterator",
                  w = !1,
                  se = O.prototype,
                  ke = se[C] || se["@@iterator"] || (K && se[K]),
                  ge = (!$ && ke) || G(K),
                  Ee = (Y == "Array" && se.entries) || ke,
                  Be,
                  je,
                  He;
                if (
                  (Ee &&
                    ((Be = i(Ee.call(new O()))),
                    T !== Object.prototype &&
                      Be.next &&
                      (!h &&
                        i(Be) !== T &&
                        (c
                          ? c(Be, T)
                          : typeof Be[C] != "function" && y(Be, C, j)),
                      p(Be, A, !0, !0),
                      h && (b[A] = j))),
                  K == D &&
                    ke &&
                    ke.name !== D &&
                    ((w = !0),
                    (ge = function () {
                      return ke.call(this);
                    })),
                  (!h || ue) && se[C] !== ge && y(se, C, ge),
                  (b[Y] = ge),
                  K)
                )
                  if (
                    ((je = {
                      values: G(D),
                      keys: X ? ge : G(N),
                      entries: G(H),
                    }),
                    ue)
                  )
                    for (He in je) ($ || w || !(He in se)) && E(se, He, je[He]);
                  else u({ target: Y, proto: !0, forced: $ || w }, je);
                return je;
              };
            },
            "7f9a": function (r, s, o) {
              var u = o("da84"),
                l = o("8925"),
                i = u.WeakMap;
              r.exports = typeof i == "function" && /native code/.test(l(i));
            },
            "825a": function (r, s, o) {
              var u = o("861d");
              r.exports = function (l) {
                if (!u(l)) throw TypeError(String(l) + " is not an object");
                return l;
              };
            },
            "83ab": function (r, s, o) {
              var u = o("d039");
              r.exports = !u(function () {
                return (
                  Object.defineProperty({}, 1, {
                    get: function () {
                      return 7;
                    },
                  })[1] != 7
                );
              });
            },
            8418: function (r, s, o) {
              var u = o("c04e"),
                l = o("9bf2"),
                i = o("5c6c");
              r.exports = function (c, p, y) {
                var E = u(p);
                E in c ? l.f(c, E, i(0, y)) : (c[E] = y);
              };
            },
            "861d": function (r, s) {
              r.exports = function (o) {
                return typeof o == "object"
                  ? o !== null
                  : typeof o == "function";
              };
            },
            8875: function (r, s, o) {
              var u, l, i;
              (function (c, p) {
                (l = []),
                  (u = p),
                  (i = typeof u == "function" ? u.apply(s, l) : u),
                  i !== void 0 && (r.exports = i);
              })(typeof self < "u" ? self : this, function () {
                function c() {
                  var p = Object.getOwnPropertyDescriptor(
                    document,
                    "currentScript",
                  );
                  if (
                    (!p &&
                      "currentScript" in document &&
                      document.currentScript) ||
                    (p && p.get !== c && document.currentScript)
                  )
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (H) {
                    var y = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                      E = /@([^@]*):(\d+):(\d+)\s*$/gi,
                      v = y.exec(H.stack) || E.exec(H.stack),
                      h = (v && v[1]) || !1,
                      b = (v && v[2]) || !1,
                      S = document.location.href.replace(
                        document.location.hash,
                        "",
                      ),
                      T,
                      $,
                      C,
                      N = document.getElementsByTagName("script");
                    h === S &&
                      ((T = document.documentElement.outerHTML),
                      ($ = new RegExp(
                        "(?:[^\\n]+?\\n){0," +
                          (b - 2) +
                          "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                        "i",
                      )),
                      (C = T.replace($, "$1").trim()));
                    for (var D = 0; D < N.length; D++)
                      if (
                        N[D].readyState === "interactive" ||
                        N[D].src === h ||
                        (h === S &&
                          N[D].innerHTML &&
                          N[D].innerHTML.trim() === C)
                      )
                        return N[D];
                    return null;
                  }
                }
                return c;
              });
            },
            8925: function (r, s, o) {
              var u = o("c6cd"),
                l = Function.toString;
              typeof u.inspectSource != "function" &&
                (u.inspectSource = function (i) {
                  return l.call(i);
                }),
                (r.exports = u.inspectSource);
            },
            "8aa5": function (r, s, o) {
              var u = o("6547").charAt;
              r.exports = function (l, i, c) {
                return i + (c ? u(l, i).length : 1);
              };
            },
            "8bbf": function (r, s) {
              r.exports = n;
            },
            "90e3": function (r, s) {
              var o = 0,
                u = Math.random();
              r.exports = function (l) {
                return (
                  "Symbol(" +
                  String(l === void 0 ? "" : l) +
                  ")_" +
                  (++o + u).toString(36)
                );
              };
            },
            9112: function (r, s, o) {
              var u = o("83ab"),
                l = o("9bf2"),
                i = o("5c6c");
              r.exports = u
                ? function (c, p, y) {
                    return l.f(c, p, i(1, y));
                  }
                : function (c, p, y) {
                    return (c[p] = y), c;
                  };
            },
            9263: function (r, s, o) {
              var u = o("ad6d"),
                l = o("9f7f"),
                i = RegExp.prototype.exec,
                c = String.prototype.replace,
                p = i,
                y = (function () {
                  var b = /a/,
                    S = /b*/g;
                  return (
                    i.call(b, "a"),
                    i.call(S, "a"),
                    b.lastIndex !== 0 || S.lastIndex !== 0
                  );
                })(),
                E = l.UNSUPPORTED_Y || l.BROKEN_CARET,
                v = /()??/.exec("")[1] !== void 0,
                h = y || v || E;
              h &&
                (p = function (S) {
                  var T = this,
                    $,
                    C,
                    N,
                    D,
                    H = E && T.sticky,
                    j = u.call(T),
                    O = T.source,
                    Y = 0,
                    te = S;
                  return (
                    H &&
                      ((j = j.replace("y", "")),
                      j.indexOf("g") === -1 && (j += "g"),
                      (te = String(S).slice(T.lastIndex)),
                      T.lastIndex > 0 &&
                        (!T.multiline ||
                          (T.multiline &&
                            S[T.lastIndex - 1] !==
                              `
`)) &&
                        ((O = "(?: " + O + ")"), (te = " " + te), Y++),
                      (C = new RegExp("^(?:" + O + ")", j))),
                    v && (C = new RegExp("^" + O + "$(?!\\s)", j)),
                    y && ($ = T.lastIndex),
                    (N = i.call(H ? C : T, te)),
                    H
                      ? N
                        ? ((N.input = N.input.slice(Y)),
                          (N[0] = N[0].slice(Y)),
                          (N.index = T.lastIndex),
                          (T.lastIndex += N[0].length))
                        : (T.lastIndex = 0)
                      : y &&
                        N &&
                        (T.lastIndex = T.global ? N.index + N[0].length : $),
                    v &&
                      N &&
                      N.length > 1 &&
                      c.call(N[0], C, function () {
                        for (D = 1; D < arguments.length - 2; D++)
                          arguments[D] === void 0 && (N[D] = void 0);
                      }),
                    N
                  );
                }),
                (r.exports = p);
            },
            "94ca": function (r, s, o) {
              var u = o("d039"),
                l = /#|\.prototype\./,
                i = function (v, h) {
                  var b = p[c(v)];
                  return b == E
                    ? !0
                    : b == y
                      ? !1
                      : typeof h == "function"
                        ? u(h)
                        : !!h;
                },
                c = (i.normalize = function (v) {
                  return String(v).replace(l, ".").toLowerCase();
                }),
                p = (i.data = {}),
                y = (i.NATIVE = "N"),
                E = (i.POLYFILL = "P");
              r.exports = i;
            },
            "99af": function (r, s, o) {
              var u = o("23e7"),
                l = o("d039"),
                i = o("e8b5"),
                c = o("861d"),
                p = o("7b0b"),
                y = o("50c4"),
                E = o("8418"),
                v = o("65f0"),
                h = o("1dde"),
                b = o("b622"),
                S = o("2d00"),
                T = b("isConcatSpreadable"),
                $ = 9007199254740991,
                C = "Maximum allowed index exceeded",
                N =
                  S >= 51 ||
                  !l(function () {
                    var O = [];
                    return (O[T] = !1), O.concat()[0] !== O;
                  }),
                D = h("concat"),
                H = function (O) {
                  if (!c(O)) return !1;
                  var Y = O[T];
                  return Y !== void 0 ? !!Y : i(O);
                },
                j = !N || !D;
              u(
                { target: "Array", proto: !0, forced: j },
                {
                  concat: function (Y) {
                    var te = p(this),
                      ne = v(te, 0),
                      K = 0,
                      X,
                      ue,
                      G,
                      A,
                      w;
                    for (X = -1, G = arguments.length; X < G; X++)
                      if (((w = X === -1 ? te : arguments[X]), H(w))) {
                        if (((A = y(w.length)), K + A > $)) throw TypeError(C);
                        for (ue = 0; ue < A; ue++, K++)
                          ue in w && E(ne, K, w[ue]);
                      } else {
                        if (K >= $) throw TypeError(C);
                        E(ne, K++, w);
                      }
                    return (ne.length = K), ne;
                  },
                },
              );
            },
            "9bdd": function (r, s, o) {
              var u = o("825a");
              r.exports = function (l, i, c, p) {
                try {
                  return p ? i(u(c)[0], c[1]) : i(c);
                } catch (E) {
                  var y = l.return;
                  throw (y !== void 0 && u(y.call(l)), E);
                }
              };
            },
            "9bf2": function (r, s, o) {
              var u = o("83ab"),
                l = o("0cfb"),
                i = o("825a"),
                c = o("c04e"),
                p = Object.defineProperty;
              s.f = u
                ? p
                : function (E, v, h) {
                    if ((i(E), (v = c(v, !0)), i(h), l))
                      try {
                        return p(E, v, h);
                      } catch {}
                    if ("get" in h || "set" in h)
                      throw TypeError("Accessors not supported");
                    return "value" in h && (E[v] = h.value), E;
                  };
            },
            "9ed3": function (r, s, o) {
              var u = o("ae93").IteratorPrototype,
                l = o("7c73"),
                i = o("5c6c"),
                c = o("d44e"),
                p = o("3f8c"),
                y = function () {
                  return this;
                };
              r.exports = function (E, v, h) {
                var b = v + " Iterator";
                return (
                  (E.prototype = l(u, { next: i(1, h) })),
                  c(E, b, !1, !0),
                  (p[b] = y),
                  E
                );
              };
            },
            "9f7f": function (r, s, o) {
              var u = o("d039");
              function l(i, c) {
                return RegExp(i, c);
              }
              (s.UNSUPPORTED_Y = u(function () {
                var i = l("a", "y");
                return (i.lastIndex = 2), i.exec("abcd") != null;
              })),
                (s.BROKEN_CARET = u(function () {
                  var i = l("^r", "gy");
                  return (i.lastIndex = 2), i.exec("str") != null;
                }));
            },
            a2bf: function (r, s, o) {
              var u = o("e8b5"),
                l = o("50c4"),
                i = o("0366"),
                c = function (p, y, E, v, h, b, S, T) {
                  for (var $ = h, C = 0, N = S ? i(S, T, 3) : !1, D; C < v; ) {
                    if (C in E) {
                      if (((D = N ? N(E[C], C, y) : E[C]), b > 0 && u(D)))
                        $ = c(p, y, D, l(D.length), $, b - 1) - 1;
                      else {
                        if ($ >= 9007199254740991)
                          throw TypeError("Exceed the acceptable array length");
                        p[$] = D;
                      }
                      $++;
                    }
                    C++;
                  }
                  return $;
                };
              r.exports = c;
            },
            a352: function (r, s) {
              r.exports = a;
            },
            a434: function (r, s, o) {
              var u = o("23e7"),
                l = o("23cb"),
                i = o("a691"),
                c = o("50c4"),
                p = o("7b0b"),
                y = o("65f0"),
                E = o("8418"),
                v = o("1dde"),
                h = o("ae40"),
                b = v("splice"),
                S = h("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
                T = Math.max,
                $ = Math.min,
                C = 9007199254740991,
                N = "Maximum allowed length exceeded";
              u(
                { target: "Array", proto: !0, forced: !b || !S },
                {
                  splice: function (H, j) {
                    var O = p(this),
                      Y = c(O.length),
                      te = l(H, Y),
                      ne = arguments.length,
                      K,
                      X,
                      ue,
                      G,
                      A,
                      w;
                    if (
                      (ne === 0
                        ? (K = X = 0)
                        : ne === 1
                          ? ((K = 0), (X = Y - te))
                          : ((K = ne - 2), (X = $(T(i(j), 0), Y - te))),
                      Y + K - X > C)
                    )
                      throw TypeError(N);
                    for (ue = y(O, X), G = 0; G < X; G++)
                      (A = te + G), A in O && E(ue, G, O[A]);
                    if (((ue.length = X), K < X)) {
                      for (G = te; G < Y - X; G++)
                        (A = G + X),
                          (w = G + K),
                          A in O ? (O[w] = O[A]) : delete O[w];
                      for (G = Y; G > Y - X + K; G--) delete O[G - 1];
                    } else if (K > X)
                      for (G = Y - X; G > te; G--)
                        (A = G + X - 1),
                          (w = G + K - 1),
                          A in O ? (O[w] = O[A]) : delete O[w];
                    for (G = 0; G < K; G++) O[G + te] = arguments[G + 2];
                    return (O.length = Y - X + K), ue;
                  },
                },
              );
            },
            a4d3: function (r, s, o) {
              var u = o("23e7"),
                l = o("da84"),
                i = o("d066"),
                c = o("c430"),
                p = o("83ab"),
                y = o("4930"),
                E = o("fdbf"),
                v = o("d039"),
                h = o("5135"),
                b = o("e8b5"),
                S = o("861d"),
                T = o("825a"),
                $ = o("7b0b"),
                C = o("fc6a"),
                N = o("c04e"),
                D = o("5c6c"),
                H = o("7c73"),
                j = o("df75"),
                O = o("241c"),
                Y = o("057f"),
                te = o("7418"),
                ne = o("06cf"),
                K = o("9bf2"),
                X = o("d1e7"),
                ue = o("9112"),
                G = o("6eeb"),
                A = o("5692"),
                w = o("f772"),
                se = o("d012"),
                ke = o("90e3"),
                ge = o("b622"),
                Ee = o("e538"),
                Be = o("746f"),
                je = o("d44e"),
                He = o("69f3"),
                Fe = o("b727").forEach,
                Ue = w("hidden"),
                ut = "Symbol",
                qe = "prototype",
                bt = ge("toPrimitive"),
                St = He.set,
                Tt = He.getterFor(ut),
                ze = Object[qe],
                Me = l.Symbol,
                gt = i("JSON", "stringify"),
                ht = ne.f,
                Mt = K.f,
                Lt = Y.f,
                _n = X.f,
                It = A("symbols"),
                dt = A("op-symbols"),
                Ke = A("string-to-symbol-registry"),
                Cn = A("symbol-to-string-registry"),
                On = A("wks"),
                zt = l.QObject,
                P = !zt || !zt[qe] || !zt[qe].findChild,
                Zt =
                  p &&
                  v(function () {
                    return (
                      H(
                        Mt({}, "a", {
                          get: function () {
                            return Mt(this, "a", { value: 7 }).a;
                          },
                        }),
                      ).a != 7
                    );
                  })
                    ? function (ie, _, ce) {
                        var be = ht(ze, _);
                        be && delete ze[_],
                          Mt(ie, _, ce),
                          be && ie !== ze && Mt(ze, _, be);
                      }
                    : Mt,
                rn = function (ie, _) {
                  var ce = (It[ie] = H(Me[qe]));
                  return (
                    St(ce, { type: ut, tag: ie, description: _ }),
                    p || (ce.description = _),
                    ce
                  );
                },
                M = E
                  ? function (ie) {
                      return typeof ie == "symbol";
                    }
                  : function (ie) {
                      return Object(ie) instanceof Me;
                    },
                L = function (_, ce, be) {
                  _ === ze && L(dt, ce, be), T(_);
                  var Te = N(ce, !0);
                  return (
                    T(be),
                    h(It, Te)
                      ? (be.enumerable
                          ? (h(_, Ue) && _[Ue][Te] && (_[Ue][Te] = !1),
                            (be = H(be, { enumerable: D(0, !1) })))
                          : (h(_, Ue) || Mt(_, Ue, D(1, {})), (_[Ue][Te] = !0)),
                        Zt(_, Te, be))
                      : Mt(_, Te, be)
                  );
                },
                B = function (_, ce) {
                  T(_);
                  var be = C(ce),
                    Te = j(be).concat(x(be));
                  return (
                    Fe(Te, function (at) {
                      (!p || pe.call(be, at)) && L(_, at, be[at]);
                    }),
                    _
                  );
                },
                re = function (_, ce) {
                  return ce === void 0 ? H(_) : B(H(_), ce);
                },
                pe = function (_) {
                  var ce = N(_, !0),
                    be = _n.call(this, ce);
                  return this === ze && h(It, ce) && !h(dt, ce)
                    ? !1
                    : be ||
                        !h(this, ce) ||
                        !h(It, ce) ||
                        (h(this, Ue) && this[Ue][ce])
                      ? be
                      : !0;
                },
                he = function (_, ce) {
                  var be = C(_),
                    Te = N(ce, !0);
                  if (!(be === ze && h(It, Te) && !h(dt, Te))) {
                    var at = ht(be, Te);
                    return (
                      at &&
                        h(It, Te) &&
                        !(h(be, Ue) && be[Ue][Te]) &&
                        (at.enumerable = !0),
                      at
                    );
                  }
                },
                q = function (_) {
                  var ce = Lt(C(_)),
                    be = [];
                  return (
                    Fe(ce, function (Te) {
                      !h(It, Te) && !h(se, Te) && be.push(Te);
                    }),
                    be
                  );
                },
                x = function (_) {
                  var ce = _ === ze,
                    be = Lt(ce ? dt : C(_)),
                    Te = [];
                  return (
                    Fe(be, function (at) {
                      h(It, at) && (!ce || h(ze, at)) && Te.push(It[at]);
                    }),
                    Te
                  );
                };
              if (
                (y ||
                  ((Me = function () {
                    if (this instanceof Me)
                      throw TypeError("Symbol is not a constructor");
                    var _ =
                        !arguments.length || arguments[0] === void 0
                          ? void 0
                          : String(arguments[0]),
                      ce = ke(_),
                      be = function (Te) {
                        this === ze && be.call(dt, Te),
                          h(this, Ue) && h(this[Ue], ce) && (this[Ue][ce] = !1),
                          Zt(this, ce, D(1, Te));
                      };
                    return (
                      p && P && Zt(ze, ce, { configurable: !0, set: be }),
                      rn(ce, _)
                    );
                  }),
                  G(Me[qe], "toString", function () {
                    return Tt(this).tag;
                  }),
                  G(Me, "withoutSetter", function (ie) {
                    return rn(ke(ie), ie);
                  }),
                  (X.f = pe),
                  (K.f = L),
                  (ne.f = he),
                  (O.f = Y.f = q),
                  (te.f = x),
                  (Ee.f = function (ie) {
                    return rn(ge(ie), ie);
                  }),
                  p &&
                    (Mt(Me[qe], "description", {
                      configurable: !0,
                      get: function () {
                        return Tt(this).description;
                      },
                    }),
                    c || G(ze, "propertyIsEnumerable", pe, { unsafe: !0 }))),
                u(
                  { global: !0, wrap: !0, forced: !y, sham: !y },
                  { Symbol: Me },
                ),
                Fe(j(On), function (ie) {
                  Be(ie);
                }),
                u(
                  { target: ut, stat: !0, forced: !y },
                  {
                    for: function (ie) {
                      var _ = String(ie);
                      if (h(Ke, _)) return Ke[_];
                      var ce = Me(_);
                      return (Ke[_] = ce), (Cn[ce] = _), ce;
                    },
                    keyFor: function (_) {
                      if (!M(_)) throw TypeError(_ + " is not a symbol");
                      if (h(Cn, _)) return Cn[_];
                    },
                    useSetter: function () {
                      P = !0;
                    },
                    useSimple: function () {
                      P = !1;
                    },
                  },
                ),
                u(
                  { target: "Object", stat: !0, forced: !y, sham: !p },
                  {
                    create: re,
                    defineProperty: L,
                    defineProperties: B,
                    getOwnPropertyDescriptor: he,
                  },
                ),
                u(
                  { target: "Object", stat: !0, forced: !y },
                  { getOwnPropertyNames: q, getOwnPropertySymbols: x },
                ),
                u(
                  {
                    target: "Object",
                    stat: !0,
                    forced: v(function () {
                      te.f(1);
                    }),
                  },
                  {
                    getOwnPropertySymbols: function (_) {
                      return te.f($(_));
                    },
                  },
                ),
                gt)
              ) {
                var F =
                  !y ||
                  v(function () {
                    var ie = Me();
                    return (
                      gt([ie]) != "[null]" ||
                      gt({ a: ie }) != "{}" ||
                      gt(Object(ie)) != "{}"
                    );
                  });
                u(
                  { target: "JSON", stat: !0, forced: F },
                  {
                    stringify: function (_, ce, be) {
                      for (var Te = [_], at = 1, vn; arguments.length > at; )
                        Te.push(arguments[at++]);
                      if (((vn = ce), !((!S(ce) && _ === void 0) || M(_))))
                        return (
                          b(ce) ||
                            (ce = function (xn, an) {
                              if (
                                (typeof vn == "function" &&
                                  (an = vn.call(this, xn, an)),
                                !M(an))
                              )
                                return an;
                            }),
                          (Te[1] = ce),
                          gt.apply(null, Te)
                        );
                    },
                  },
                );
              }
              Me[qe][bt] || ue(Me[qe], bt, Me[qe].valueOf),
                je(Me, ut),
                (se[Ue] = !0);
            },
            a630: function (r, s, o) {
              var u = o("23e7"),
                l = o("4df4"),
                i = o("1c7e"),
                c = !i(function (p) {
                  Array.from(p);
                });
              u({ target: "Array", stat: !0, forced: c }, { from: l });
            },
            a640: function (r, s, o) {
              var u = o("d039");
              r.exports = function (l, i) {
                var c = [][l];
                return (
                  !!c &&
                  u(function () {
                    c.call(
                      null,
                      i ||
                        function () {
                          throw 1;
                        },
                      1,
                    );
                  })
                );
              };
            },
            a691: function (r, s) {
              var o = Math.ceil,
                u = Math.floor;
              r.exports = function (l) {
                return isNaN((l = +l)) ? 0 : (l > 0 ? u : o)(l);
              };
            },
            ab13: function (r, s, o) {
              var u = o("b622"),
                l = u("match");
              r.exports = function (i) {
                var c = /./;
                try {
                  "/./"[i](c);
                } catch {
                  try {
                    return (c[l] = !1), "/./"[i](c);
                  } catch {}
                }
                return !1;
              };
            },
            ac1f: function (r, s, o) {
              var u = o("23e7"),
                l = o("9263");
              u(
                { target: "RegExp", proto: !0, forced: /./.exec !== l },
                { exec: l },
              );
            },
            ad6d: function (r, s, o) {
              var u = o("825a");
              r.exports = function () {
                var l = u(this),
                  i = "";
                return (
                  l.global && (i += "g"),
                  l.ignoreCase && (i += "i"),
                  l.multiline && (i += "m"),
                  l.dotAll && (i += "s"),
                  l.unicode && (i += "u"),
                  l.sticky && (i += "y"),
                  i
                );
              };
            },
            ae40: function (r, s, o) {
              var u = o("83ab"),
                l = o("d039"),
                i = o("5135"),
                c = Object.defineProperty,
                p = {},
                y = function (E) {
                  throw E;
                };
              r.exports = function (E, v) {
                if (i(p, E)) return p[E];
                v || (v = {});
                var h = [][E],
                  b = i(v, "ACCESSORS") ? v.ACCESSORS : !1,
                  S = i(v, 0) ? v[0] : y,
                  T = i(v, 1) ? v[1] : void 0;
                return (p[E] =
                  !!h &&
                  !l(function () {
                    if (b && !u) return !0;
                    var $ = { length: -1 };
                    b ? c($, 1, { enumerable: !0, get: y }) : ($[1] = 1),
                      h.call($, S, T);
                  }));
              };
            },
            ae93: function (r, s, o) {
              var u = o("e163"),
                l = o("9112"),
                i = o("5135"),
                c = o("b622"),
                p = o("c430"),
                y = c("iterator"),
                E = !1,
                v = function () {
                  return this;
                },
                h,
                b,
                S;
              [].keys &&
                ((S = [].keys()),
                "next" in S
                  ? ((b = u(u(S))), b !== Object.prototype && (h = b))
                  : (E = !0)),
                h == null && (h = {}),
                !p && !i(h, y) && l(h, y, v),
                (r.exports = {
                  IteratorPrototype: h,
                  BUGGY_SAFARI_ITERATORS: E,
                });
            },
            b041: function (r, s, o) {
              var u = o("00ee"),
                l = o("f5df");
              r.exports = u
                ? {}.toString
                : function () {
                    return "[object " + l(this) + "]";
                  };
            },
            b0c0: function (r, s, o) {
              var u = o("83ab"),
                l = o("9bf2").f,
                i = Function.prototype,
                c = i.toString,
                p = /^\s*function ([^ (]*)/,
                y = "name";
              u &&
                !(y in i) &&
                l(i, y, {
                  configurable: !0,
                  get: function () {
                    try {
                      return c.call(this).match(p)[1];
                    } catch {
                      return "";
                    }
                  },
                });
            },
            b622: function (r, s, o) {
              var u = o("da84"),
                l = o("5692"),
                i = o("5135"),
                c = o("90e3"),
                p = o("4930"),
                y = o("fdbf"),
                E = l("wks"),
                v = u.Symbol,
                h = y ? v : (v && v.withoutSetter) || c;
              r.exports = function (b) {
                return (
                  i(E, b) ||
                    (p && i(v, b) ? (E[b] = v[b]) : (E[b] = h("Symbol." + b))),
                  E[b]
                );
              };
            },
            b64b: function (r, s, o) {
              var u = o("23e7"),
                l = o("7b0b"),
                i = o("df75"),
                c = o("d039"),
                p = c(function () {
                  i(1);
                });
              u(
                { target: "Object", stat: !0, forced: p },
                {
                  keys: function (E) {
                    return i(l(E));
                  },
                },
              );
            },
            b727: function (r, s, o) {
              var u = o("0366"),
                l = o("44ad"),
                i = o("7b0b"),
                c = o("50c4"),
                p = o("65f0"),
                y = [].push,
                E = function (v) {
                  var h = v == 1,
                    b = v == 2,
                    S = v == 3,
                    T = v == 4,
                    $ = v == 6,
                    C = v == 5 || $;
                  return function (N, D, H, j) {
                    for (
                      var O = i(N),
                        Y = l(O),
                        te = u(D, H, 3),
                        ne = c(Y.length),
                        K = 0,
                        X = j || p,
                        ue = h ? X(N, ne) : b ? X(N, 0) : void 0,
                        G,
                        A;
                      ne > K;
                      K++
                    )
                      if ((C || K in Y) && ((G = Y[K]), (A = te(G, K, O)), v)) {
                        if (h) ue[K] = A;
                        else if (A)
                          switch (v) {
                            case 3:
                              return !0;
                            case 5:
                              return G;
                            case 6:
                              return K;
                            case 2:
                              y.call(ue, G);
                          }
                        else if (T) return !1;
                      }
                    return $ ? -1 : S || T ? T : ue;
                  };
                };
              r.exports = {
                forEach: E(0),
                map: E(1),
                filter: E(2),
                some: E(3),
                every: E(4),
                find: E(5),
                findIndex: E(6),
              };
            },
            c04e: function (r, s, o) {
              var u = o("861d");
              r.exports = function (l, i) {
                if (!u(l)) return l;
                var c, p;
                if (
                  (i &&
                    typeof (c = l.toString) == "function" &&
                    !u((p = c.call(l)))) ||
                  (typeof (c = l.valueOf) == "function" &&
                    !u((p = c.call(l)))) ||
                  (!i &&
                    typeof (c = l.toString) == "function" &&
                    !u((p = c.call(l))))
                )
                  return p;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            c430: function (r, s) {
              r.exports = !1;
            },
            c6b6: function (r, s) {
              var o = {}.toString;
              r.exports = function (u) {
                return o.call(u).slice(8, -1);
              };
            },
            c6cd: function (r, s, o) {
              var u = o("da84"),
                l = o("ce4e"),
                i = "__core-js_shared__",
                c = u[i] || l(i, {});
              r.exports = c;
            },
            c740: function (r, s, o) {
              var u = o("23e7"),
                l = o("b727").findIndex,
                i = o("44d2"),
                c = o("ae40"),
                p = "findIndex",
                y = !0,
                E = c(p);
              p in [] &&
                Array(1)[p](function () {
                  y = !1;
                }),
                u(
                  { target: "Array", proto: !0, forced: y || !E },
                  {
                    findIndex: function (h) {
                      return l(
                        this,
                        h,
                        arguments.length > 1 ? arguments[1] : void 0,
                      );
                    },
                  },
                ),
                i(p);
            },
            c8ba: function (r, s) {
              var o;
              o = (function () {
                return this;
              })();
              try {
                o = o || new Function("return this")();
              } catch {
                typeof window == "object" && (o = window);
              }
              r.exports = o;
            },
            c975: function (r, s, o) {
              var u = o("23e7"),
                l = o("4d64").indexOf,
                i = o("a640"),
                c = o("ae40"),
                p = [].indexOf,
                y = !!p && 1 / [1].indexOf(1, -0) < 0,
                E = i("indexOf"),
                v = c("indexOf", { ACCESSORS: !0, 1: 0 });
              u(
                { target: "Array", proto: !0, forced: y || !E || !v },
                {
                  indexOf: function (b) {
                    return y
                      ? p.apply(this, arguments) || 0
                      : l(
                          this,
                          b,
                          arguments.length > 1 ? arguments[1] : void 0,
                        );
                  },
                },
              );
            },
            ca84: function (r, s, o) {
              var u = o("5135"),
                l = o("fc6a"),
                i = o("4d64").indexOf,
                c = o("d012");
              r.exports = function (p, y) {
                var E = l(p),
                  v = 0,
                  h = [],
                  b;
                for (b in E) !u(c, b) && u(E, b) && h.push(b);
                for (; y.length > v; )
                  u(E, (b = y[v++])) && (~i(h, b) || h.push(b));
                return h;
              };
            },
            caad: function (r, s, o) {
              var u = o("23e7"),
                l = o("4d64").includes,
                i = o("44d2"),
                c = o("ae40"),
                p = c("indexOf", { ACCESSORS: !0, 1: 0 });
              u(
                { target: "Array", proto: !0, forced: !p },
                {
                  includes: function (E) {
                    return l(
                      this,
                      E,
                      arguments.length > 1 ? arguments[1] : void 0,
                    );
                  },
                },
              ),
                i("includes");
            },
            cc12: function (r, s, o) {
              var u = o("da84"),
                l = o("861d"),
                i = u.document,
                c = l(i) && l(i.createElement);
              r.exports = function (p) {
                return c ? i.createElement(p) : {};
              };
            },
            ce4e: function (r, s, o) {
              var u = o("da84"),
                l = o("9112");
              r.exports = function (i, c) {
                try {
                  l(u, i, c);
                } catch {
                  u[i] = c;
                }
                return c;
              };
            },
            d012: function (r, s) {
              r.exports = {};
            },
            d039: function (r, s) {
              r.exports = function (o) {
                try {
                  return !!o();
                } catch {
                  return !0;
                }
              };
            },
            d066: function (r, s, o) {
              var u = o("428f"),
                l = o("da84"),
                i = function (c) {
                  return typeof c == "function" ? c : void 0;
                };
              r.exports = function (c, p) {
                return arguments.length < 2
                  ? i(u[c]) || i(l[c])
                  : (u[c] && u[c][p]) || (l[c] && l[c][p]);
              };
            },
            d1e7: function (r, s, o) {
              var u = {}.propertyIsEnumerable,
                l = Object.getOwnPropertyDescriptor,
                i = l && !u.call({ 1: 2 }, 1);
              s.f = i
                ? function (p) {
                    var y = l(this, p);
                    return !!y && y.enumerable;
                  }
                : u;
            },
            d28b: function (r, s, o) {
              var u = o("746f");
              u("iterator");
            },
            d2bb: function (r, s, o) {
              var u = o("825a"),
                l = o("3bbe");
              r.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                  ? (function () {
                      var i = !1,
                        c = {},
                        p;
                      try {
                        (p = Object.getOwnPropertyDescriptor(
                          Object.prototype,
                          "__proto__",
                        ).set),
                          p.call(c, []),
                          (i = c instanceof Array);
                      } catch {}
                      return function (E, v) {
                        return (
                          u(E), l(v), i ? p.call(E, v) : (E.__proto__ = v), E
                        );
                      };
                    })()
                  : void 0);
            },
            d3b7: function (r, s, o) {
              var u = o("00ee"),
                l = o("6eeb"),
                i = o("b041");
              u || l(Object.prototype, "toString", i, { unsafe: !0 });
            },
            d44e: function (r, s, o) {
              var u = o("9bf2").f,
                l = o("5135"),
                i = o("b622"),
                c = i("toStringTag");
              r.exports = function (p, y, E) {
                p &&
                  !l((p = E ? p : p.prototype), c) &&
                  u(p, c, { configurable: !0, value: y });
              };
            },
            d58f: function (r, s, o) {
              var u = o("1c0b"),
                l = o("7b0b"),
                i = o("44ad"),
                c = o("50c4"),
                p = function (y) {
                  return function (E, v, h, b) {
                    u(v);
                    var S = l(E),
                      T = i(S),
                      $ = c(S.length),
                      C = y ? $ - 1 : 0,
                      N = y ? -1 : 1;
                    if (h < 2)
                      for (;;) {
                        if (C in T) {
                          (b = T[C]), (C += N);
                          break;
                        }
                        if (((C += N), y ? C < 0 : $ <= C))
                          throw TypeError(
                            "Reduce of empty array with no initial value",
                          );
                      }
                    for (; y ? C >= 0 : $ > C; C += N)
                      C in T && (b = v(b, T[C], C, S));
                    return b;
                  };
                };
              r.exports = { left: p(!1), right: p(!0) };
            },
            d784: function (r, s, o) {
              o("ac1f");
              var u = o("6eeb"),
                l = o("d039"),
                i = o("b622"),
                c = o("9263"),
                p = o("9112"),
                y = i("species"),
                E = !l(function () {
                  var T = /./;
                  return (
                    (T.exec = function () {
                      var $ = [];
                      return ($.groups = { a: "7" }), $;
                    }),
                    "".replace(T, "$<a>") !== "7"
                  );
                }),
                v = (function () {
                  return "a".replace(/./, "$0") === "$0";
                })(),
                h = i("replace"),
                b = (function () {
                  return /./[h] ? /./[h]("a", "$0") === "" : !1;
                })(),
                S = !l(function () {
                  var T = /(?:)/,
                    $ = T.exec;
                  T.exec = function () {
                    return $.apply(this, arguments);
                  };
                  var C = "ab".split(T);
                  return C.length !== 2 || C[0] !== "a" || C[1] !== "b";
                });
              r.exports = function (T, $, C, N) {
                var D = i(T),
                  H = !l(function () {
                    var K = {};
                    return (
                      (K[D] = function () {
                        return 7;
                      }),
                      ""[T](K) != 7
                    );
                  }),
                  j =
                    H &&
                    !l(function () {
                      var K = !1,
                        X = /a/;
                      return (
                        T === "split" &&
                          ((X = {}),
                          (X.constructor = {}),
                          (X.constructor[y] = function () {
                            return X;
                          }),
                          (X.flags = ""),
                          (X[D] = /./[D])),
                        (X.exec = function () {
                          return (K = !0), null;
                        }),
                        X[D](""),
                        !K
                      );
                    });
                if (
                  !H ||
                  !j ||
                  (T === "replace" && !(E && v && !b)) ||
                  (T === "split" && !S)
                ) {
                  var O = /./[D],
                    Y = C(
                      D,
                      ""[T],
                      function (K, X, ue, G, A) {
                        return X.exec === c
                          ? H && !A
                            ? { done: !0, value: O.call(X, ue, G) }
                            : { done: !0, value: K.call(ue, X, G) }
                          : { done: !1 };
                      },
                      {
                        REPLACE_KEEPS_$0: v,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: b,
                      },
                    ),
                    te = Y[0],
                    ne = Y[1];
                  u(String.prototype, T, te),
                    u(
                      RegExp.prototype,
                      D,
                      $ == 2
                        ? function (K, X) {
                            return ne.call(K, this, X);
                          }
                        : function (K) {
                            return ne.call(K, this);
                          },
                    );
                }
                N && p(RegExp.prototype[D], "sham", !0);
              };
            },
            d81d: function (r, s, o) {
              var u = o("23e7"),
                l = o("b727").map,
                i = o("1dde"),
                c = o("ae40"),
                p = i("map"),
                y = c("map");
              u(
                { target: "Array", proto: !0, forced: !p || !y },
                {
                  map: function (v) {
                    return l(
                      this,
                      v,
                      arguments.length > 1 ? arguments[1] : void 0,
                    );
                  },
                },
              );
            },
            da84: function (r, s, o) {
              (function (u) {
                var l = function (i) {
                  return i && i.Math == Math && i;
                };
                r.exports =
                  l(typeof globalThis == "object" && globalThis) ||
                  l(typeof window == "object" && window) ||
                  l(typeof self == "object" && self) ||
                  l(typeof u == "object" && u) ||
                  Function("return this")();
              }).call(this, o("c8ba"));
            },
            dbb4: function (r, s, o) {
              var u = o("23e7"),
                l = o("83ab"),
                i = o("56ef"),
                c = o("fc6a"),
                p = o("06cf"),
                y = o("8418");
              u(
                { target: "Object", stat: !0, sham: !l },
                {
                  getOwnPropertyDescriptors: function (v) {
                    for (
                      var h = c(v), b = p.f, S = i(h), T = {}, $ = 0, C, N;
                      S.length > $;

                    )
                      (N = b(h, (C = S[$++]))), N !== void 0 && y(T, C, N);
                    return T;
                  },
                },
              );
            },
            dbf1: function (r, s, o) {
              (function (u) {
                o.d(s, "a", function () {
                  return i;
                });
                function l() {
                  return typeof window < "u" ? window.console : u.console;
                }
                var i = l();
              }).call(this, o("c8ba"));
            },
            ddb0: function (r, s, o) {
              var u = o("da84"),
                l = o("fdbc"),
                i = o("e260"),
                c = o("9112"),
                p = o("b622"),
                y = p("iterator"),
                E = p("toStringTag"),
                v = i.values;
              for (var h in l) {
                var b = u[h],
                  S = b && b.prototype;
                if (S) {
                  if (S[y] !== v)
                    try {
                      c(S, y, v);
                    } catch {
                      S[y] = v;
                    }
                  if ((S[E] || c(S, E, h), l[h])) {
                    for (var T in i)
                      if (S[T] !== i[T])
                        try {
                          c(S, T, i[T]);
                        } catch {
                          S[T] = i[T];
                        }
                  }
                }
              }
            },
            df75: function (r, s, o) {
              var u = o("ca84"),
                l = o("7839");
              r.exports =
                Object.keys ||
                function (c) {
                  return u(c, l);
                };
            },
            e01a: function (r, s, o) {
              var u = o("23e7"),
                l = o("83ab"),
                i = o("da84"),
                c = o("5135"),
                p = o("861d"),
                y = o("9bf2").f,
                E = o("e893"),
                v = i.Symbol;
              if (
                l &&
                typeof v == "function" &&
                (!("description" in v.prototype) || v().description !== void 0)
              ) {
                var h = {},
                  b = function () {
                    var D =
                        arguments.length < 1 || arguments[0] === void 0
                          ? void 0
                          : String(arguments[0]),
                      H =
                        this instanceof b
                          ? new v(D)
                          : D === void 0
                            ? v()
                            : v(D);
                    return D === "" && (h[H] = !0), H;
                  };
                E(b, v);
                var S = (b.prototype = v.prototype);
                S.constructor = b;
                var T = S.toString,
                  $ = String(v("test")) == "Symbol(test)",
                  C = /^Symbol\((.*)\)[^)]+$/;
                y(S, "description", {
                  configurable: !0,
                  get: function () {
                    var D = p(this) ? this.valueOf() : this,
                      H = T.call(D);
                    if (c(h, D)) return "";
                    var j = $ ? H.slice(7, -1) : H.replace(C, "$1");
                    return j === "" ? void 0 : j;
                  },
                }),
                  u({ global: !0, forced: !0 }, { Symbol: b });
              }
            },
            e163: function (r, s, o) {
              var u = o("5135"),
                l = o("7b0b"),
                i = o("f772"),
                c = o("e177"),
                p = i("IE_PROTO"),
                y = Object.prototype;
              r.exports = c
                ? Object.getPrototypeOf
                : function (E) {
                    return (
                      (E = l(E)),
                      u(E, p)
                        ? E[p]
                        : typeof E.constructor == "function" &&
                            E instanceof E.constructor
                          ? E.constructor.prototype
                          : E instanceof Object
                            ? y
                            : null
                    );
                  };
            },
            e177: function (r, s, o) {
              var u = o("d039");
              r.exports = !u(function () {
                function l() {}
                return (
                  (l.prototype.constructor = null),
                  Object.getPrototypeOf(new l()) !== l.prototype
                );
              });
            },
            e260: function (r, s, o) {
              var u = o("fc6a"),
                l = o("44d2"),
                i = o("3f8c"),
                c = o("69f3"),
                p = o("7dd0"),
                y = "Array Iterator",
                E = c.set,
                v = c.getterFor(y);
              (r.exports = p(
                Array,
                "Array",
                function (h, b) {
                  E(this, { type: y, target: u(h), index: 0, kind: b });
                },
                function () {
                  var h = v(this),
                    b = h.target,
                    S = h.kind,
                    T = h.index++;
                  return !b || T >= b.length
                    ? ((h.target = void 0), { value: void 0, done: !0 })
                    : S == "keys"
                      ? { value: T, done: !1 }
                      : S == "values"
                        ? { value: b[T], done: !1 }
                        : { value: [T, b[T]], done: !1 };
                },
                "values",
              )),
                (i.Arguments = i.Array),
                l("keys"),
                l("values"),
                l("entries");
            },
            e439: function (r, s, o) {
              var u = o("23e7"),
                l = o("d039"),
                i = o("fc6a"),
                c = o("06cf").f,
                p = o("83ab"),
                y = l(function () {
                  c(1);
                }),
                E = !p || y;
              u(
                { target: "Object", stat: !0, forced: E, sham: !p },
                {
                  getOwnPropertyDescriptor: function (h, b) {
                    return c(i(h), b);
                  },
                },
              );
            },
            e538: function (r, s, o) {
              var u = o("b622");
              s.f = u;
            },
            e893: function (r, s, o) {
              var u = o("5135"),
                l = o("56ef"),
                i = o("06cf"),
                c = o("9bf2");
              r.exports = function (p, y) {
                for (var E = l(y), v = c.f, h = i.f, b = 0; b < E.length; b++) {
                  var S = E[b];
                  u(p, S) || v(p, S, h(y, S));
                }
              };
            },
            e8b5: function (r, s, o) {
              var u = o("c6b6");
              r.exports =
                Array.isArray ||
                function (i) {
                  return u(i) == "Array";
                };
            },
            e95a: function (r, s, o) {
              var u = o("b622"),
                l = o("3f8c"),
                i = u("iterator"),
                c = Array.prototype;
              r.exports = function (p) {
                return p !== void 0 && (l.Array === p || c[i] === p);
              };
            },
            f5df: function (r, s, o) {
              var u = o("00ee"),
                l = o("c6b6"),
                i = o("b622"),
                c = i("toStringTag"),
                p =
                  l(
                    (function () {
                      return arguments;
                    })(),
                  ) == "Arguments",
                y = function (E, v) {
                  try {
                    return E[v];
                  } catch {}
                };
              r.exports = u
                ? l
                : function (E) {
                    var v, h, b;
                    return E === void 0
                      ? "Undefined"
                      : E === null
                        ? "Null"
                        : typeof (h = y((v = Object(E)), c)) == "string"
                          ? h
                          : p
                            ? l(v)
                            : (b = l(v)) == "Object" &&
                                typeof v.callee == "function"
                              ? "Arguments"
                              : b;
                  };
            },
            f772: function (r, s, o) {
              var u = o("5692"),
                l = o("90e3"),
                i = u("keys");
              r.exports = function (c) {
                return i[c] || (i[c] = l(c));
              };
            },
            fb15: function (r, s, o) {
              if ((o.r(s), typeof window < "u")) {
                var u = window.document.currentScript;
                {
                  var l = o("8875");
                  (u = l()),
                    "currentScript" in document ||
                      Object.defineProperty(document, "currentScript", {
                        get: l,
                      });
                }
                var i = u && u.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                i && (o.p = i[1]);
              }
              o("99af"),
                o("4de4"),
                o("4160"),
                o("c975"),
                o("d81d"),
                o("a434"),
                o("159b"),
                o("a4d3"),
                o("e439"),
                o("dbb4"),
                o("b64b");
              function c(M, L, B) {
                return (
                  L in M
                    ? Object.defineProperty(M, L, {
                        value: B,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (M[L] = B),
                  M
                );
              }
              function p(M, L) {
                var B = Object.keys(M);
                if (Object.getOwnPropertySymbols) {
                  var re = Object.getOwnPropertySymbols(M);
                  L &&
                    (re = re.filter(function (pe) {
                      return Object.getOwnPropertyDescriptor(M, pe).enumerable;
                    })),
                    B.push.apply(B, re);
                }
                return B;
              }
              function y(M) {
                for (var L = 1; L < arguments.length; L++) {
                  var B = arguments[L] != null ? arguments[L] : {};
                  L % 2
                    ? p(Object(B), !0).forEach(function (re) {
                        c(M, re, B[re]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          M,
                          Object.getOwnPropertyDescriptors(B),
                        )
                      : p(Object(B)).forEach(function (re) {
                          Object.defineProperty(
                            M,
                            re,
                            Object.getOwnPropertyDescriptor(B, re),
                          );
                        });
                }
                return M;
              }
              function E(M) {
                if (Array.isArray(M)) return M;
              }
              o("e01a"), o("d28b"), o("e260"), o("d3b7"), o("3ca3"), o("ddb0");
              function v(M, L) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(M)))) {
                  var B = [],
                    re = !0,
                    pe = !1,
                    he = void 0;
                  try {
                    for (
                      var q = M[Symbol.iterator](), x;
                      !(re = (x = q.next()).done) &&
                      (B.push(x.value), !(L && B.length === L));
                      re = !0
                    );
                  } catch (F) {
                    (pe = !0), (he = F);
                  } finally {
                    try {
                      !re && q.return != null && q.return();
                    } finally {
                      if (pe) throw he;
                    }
                  }
                  return B;
                }
              }
              o("a630"), o("fb6a"), o("b0c0"), o("25f0");
              function h(M, L) {
                (L == null || L > M.length) && (L = M.length);
                for (var B = 0, re = new Array(L); B < L; B++) re[B] = M[B];
                return re;
              }
              function b(M, L) {
                if (M) {
                  if (typeof M == "string") return h(M, L);
                  var B = Object.prototype.toString.call(M).slice(8, -1);
                  if (
                    (B === "Object" &&
                      M.constructor &&
                      (B = M.constructor.name),
                    B === "Map" || B === "Set")
                  )
                    return Array.from(M);
                  if (
                    B === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)
                  )
                    return h(M, L);
                }
              }
              function S() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function T(M, L) {
                return E(M) || v(M, L) || b(M, L) || S();
              }
              function $(M) {
                if (Array.isArray(M)) return h(M);
              }
              function C(M) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(M))
                  return Array.from(M);
              }
              function N() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function D(M) {
                return $(M) || C(M) || b(M) || N();
              }
              var H = o("a352"),
                j = o.n(H);
              function O(M) {
                M.parentElement !== null && M.parentElement.removeChild(M);
              }
              function Y(M, L, B) {
                var re =
                  B === 0 ? M.children[0] : M.children[B - 1].nextSibling;
                M.insertBefore(L, re);
              }
              var te = o("dbf1");
              o("13d5"), o("4fad"), o("ac1f"), o("5319");
              function ne(M) {
                var L = Object.create(null);
                return function (re) {
                  var pe = L[re];
                  return pe || (L[re] = M(re));
                };
              }
              var K = /-(\w)/g,
                X = ne(function (M) {
                  return M.replace(K, function (L, B) {
                    return B.toUpperCase();
                  });
                });
              o("5db7"), o("73d9");
              var ue = ["Start", "Add", "Remove", "Update", "End"],
                G = ["Choose", "Unchoose", "Sort", "Filter", "Clone"],
                A = ["Move"],
                w = [A, ue, G]
                  .flatMap(function (M) {
                    return M;
                  })
                  .map(function (M) {
                    return "on".concat(M);
                  }),
                se = { manage: A, manageAndEmit: ue, emit: G };
              function ke(M) {
                return w.indexOf(M) !== -1;
              }
              o("caad"), o("2ca0");
              var ge = [
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "math",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rb",
                "rp",
                "rt",
                "rtc",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "slot",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "svg",
                "table",
                "tbody",
                "td",
                "template",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
              ];
              function Ee(M) {
                return ge.includes(M);
              }
              function Be(M) {
                return ["transition-group", "TransitionGroup"].includes(M);
              }
              function je(M) {
                return (
                  ["id", "class", "role", "style"].includes(M) ||
                  M.startsWith("data-") ||
                  M.startsWith("aria-") ||
                  M.startsWith("on")
                );
              }
              function He(M) {
                return M.reduce(function (L, B) {
                  var re = T(B, 2),
                    pe = re[0],
                    he = re[1];
                  return (L[pe] = he), L;
                }, {});
              }
              function Fe(M) {
                var L = M.$attrs,
                  B = M.componentData,
                  re = B === void 0 ? {} : B,
                  pe = He(
                    Object.entries(L).filter(function (he) {
                      var q = T(he, 2),
                        x = q[0];
                      return q[1], je(x);
                    }),
                  );
                return y(y({}, pe), re);
              }
              function Ue(M) {
                var L = M.$attrs,
                  B = M.callBackBuilder,
                  re = He(ut(L));
                Object.entries(B).forEach(function (he) {
                  var q = T(he, 2),
                    x = q[0],
                    F = q[1];
                  se[x].forEach(function (ie) {
                    re["on".concat(ie)] = F(ie);
                  });
                });
                var pe = "[data-draggable]".concat(re.draggable || "");
                return y(y({}, re), {}, { draggable: pe });
              }
              function ut(M) {
                return Object.entries(M)
                  .filter(function (L) {
                    var B = T(L, 2),
                      re = B[0];
                    return B[1], !je(re);
                  })
                  .map(function (L) {
                    var B = T(L, 2),
                      re = B[0],
                      pe = B[1];
                    return [X(re), pe];
                  })
                  .filter(function (L) {
                    var B = T(L, 2),
                      re = B[0];
                    return B[1], !ke(re);
                  });
              }
              o("c740");
              function qe(M, L) {
                if (!(M instanceof L))
                  throw new TypeError("Cannot call a class as a function");
              }
              function bt(M, L) {
                for (var B = 0; B < L.length; B++) {
                  var re = L[B];
                  (re.enumerable = re.enumerable || !1),
                    (re.configurable = !0),
                    "value" in re && (re.writable = !0),
                    Object.defineProperty(M, re.key, re);
                }
              }
              function St(M, L, B) {
                return L && bt(M.prototype, L), M;
              }
              var Tt = function (L) {
                  var B = L.el;
                  return B;
                },
                ze = function (L, B) {
                  return (L.__draggable_context = B);
                },
                Me = function (L) {
                  return L.__draggable_context;
                },
                gt = (function () {
                  function M(L) {
                    var B = L.nodes,
                      re = B.header,
                      pe = B.default,
                      he = B.footer,
                      q = L.root,
                      x = L.realList;
                    qe(this, M),
                      (this.defaultNodes = pe),
                      (this.children = [].concat(D(re), D(pe), D(he))),
                      (this.externalComponent = q.externalComponent),
                      (this.rootTransition = q.transition),
                      (this.tag = q.tag),
                      (this.realList = x);
                  }
                  return (
                    St(M, [
                      {
                        key: "render",
                        value: function (B, re) {
                          var pe = this.tag,
                            he = this.children,
                            q = this._isRootComponent,
                            x = q
                              ? {
                                  default: function () {
                                    return he;
                                  },
                                }
                              : he;
                          return B(pe, re, x);
                        },
                      },
                      {
                        key: "updated",
                        value: function () {
                          var B = this.defaultNodes,
                            re = this.realList;
                          B.forEach(function (pe, he) {
                            ze(Tt(pe), { element: re[he], index: he });
                          });
                        },
                      },
                      {
                        key: "getUnderlyingVm",
                        value: function (B) {
                          return Me(B);
                        },
                      },
                      {
                        key: "getVmIndexFromDomIndex",
                        value: function (B, re) {
                          var pe = this.defaultNodes,
                            he = pe.length,
                            q = re.children,
                            x = q.item(B);
                          if (x === null) return he;
                          var F = Me(x);
                          if (F) return F.index;
                          if (he === 0) return 0;
                          var ie = Tt(pe[0]),
                            _ = D(q).findIndex(function (ce) {
                              return ce === ie;
                            });
                          return B < _ ? 0 : he;
                        },
                      },
                      {
                        key: "_isRootComponent",
                        get: function () {
                          return this.externalComponent || this.rootTransition;
                        },
                      },
                    ]),
                    M
                  );
                })(),
                ht = o("8bbf");
              function Mt(M, L) {
                var B = M[L];
                return B ? B() : [];
              }
              function Lt(M) {
                var L = M.$slots,
                  B = M.realList,
                  re = M.getKey,
                  pe = B || [],
                  he = ["header", "footer"].map(function (ce) {
                    return Mt(L, ce);
                  }),
                  q = T(he, 2),
                  x = q[0],
                  F = q[1],
                  ie = L.item;
                if (!ie)
                  throw new Error("draggable element must have an item slot");
                var _ = pe.flatMap(function (ce, be) {
                  return ie({ element: ce, index: be }).map(function (Te) {
                    return (
                      (Te.key = re(ce)),
                      (Te.props = y(
                        y({}, Te.props || {}),
                        {},
                        { "data-draggable": !0 },
                      )),
                      Te
                    );
                  });
                });
                if (_.length !== pe.length)
                  throw new Error("Item slot must have only one child");
                return { header: x, footer: F, default: _ };
              }
              function _n(M) {
                var L = Be(M),
                  B = !Ee(M) && !L;
                return {
                  transition: L,
                  externalComponent: B,
                  tag: B
                    ? Object(ht.resolveComponent)(M)
                    : L
                      ? ht.TransitionGroup
                      : M,
                };
              }
              function It(M) {
                var L = M.$slots,
                  B = M.tag,
                  re = M.realList,
                  pe = M.getKey,
                  he = Lt({ $slots: L, realList: re, getKey: pe }),
                  q = _n(B);
                return new gt({ nodes: he, root: q, realList: re });
              }
              function dt(M, L) {
                var B = this;
                Object(ht.nextTick)(function () {
                  return B.$emit(M.toLowerCase(), L);
                });
              }
              function Ke(M) {
                var L = this;
                return function (B, re) {
                  if (L.realList !== null) return L["onDrag".concat(M)](B, re);
                };
              }
              function Cn(M) {
                var L = this,
                  B = Ke.call(this, M);
                return function (re, pe) {
                  B.call(L, re, pe), dt.call(L, M, re);
                };
              }
              var On = null,
                zt = {
                  list: { type: Array, required: !1, default: null },
                  modelValue: { type: Array, required: !1, default: null },
                  itemKey: { type: [String, Function], required: !0 },
                  clone: {
                    type: Function,
                    default: function (L) {
                      return L;
                    },
                  },
                  tag: { type: String, default: "div" },
                  move: { type: Function, default: null },
                  componentData: { type: Object, required: !1, default: null },
                },
                P = ["update:modelValue", "change"].concat(
                  D(
                    []
                      .concat(D(se.manageAndEmit), D(se.emit))
                      .map(function (M) {
                        return M.toLowerCase();
                      }),
                  ),
                ),
                Zt = Object(ht.defineComponent)({
                  name: "draggable",
                  inheritAttrs: !1,
                  props: zt,
                  emits: P,
                  data: function () {
                    return { error: !1 };
                  },
                  render: function () {
                    try {
                      this.error = !1;
                      var L = this.$slots,
                        B = this.$attrs,
                        re = this.tag,
                        pe = this.componentData,
                        he = this.realList,
                        q = this.getKey,
                        x = It({ $slots: L, tag: re, realList: he, getKey: q });
                      this.componentStructure = x;
                      var F = Fe({ $attrs: B, componentData: pe });
                      return x.render(ht.h, F);
                    } catch (ie) {
                      return (
                        (this.error = !0),
                        Object(ht.h)(
                          "pre",
                          { style: { color: "red" } },
                          ie.stack,
                        )
                      );
                    }
                  },
                  created: function () {
                    this.list !== null &&
                      this.modelValue !== null &&
                      te.a.error(
                        "modelValue and list props are mutually exclusive! Please set one or another.",
                      );
                  },
                  mounted: function () {
                    var L = this;
                    if (!this.error) {
                      var B = this.$attrs,
                        re = this.$el,
                        pe = this.componentStructure;
                      pe.updated();
                      var he = Ue({
                          $attrs: B,
                          callBackBuilder: {
                            manageAndEmit: function (F) {
                              return Cn.call(L, F);
                            },
                            emit: function (F) {
                              return dt.bind(L, F);
                            },
                            manage: function (F) {
                              return Ke.call(L, F);
                            },
                          },
                        }),
                        q = re.nodeType === 1 ? re : re.parentElement;
                      (this._sortable = new j.a(q, he)),
                        (this.targetDomElement = q),
                        (q.__draggable_component__ = this);
                    }
                  },
                  updated: function () {
                    this.componentStructure.updated();
                  },
                  beforeUnmount: function () {
                    this._sortable !== void 0 && this._sortable.destroy();
                  },
                  computed: {
                    realList: function () {
                      var L = this.list;
                      return L || this.modelValue;
                    },
                    getKey: function () {
                      var L = this.itemKey;
                      return typeof L == "function"
                        ? L
                        : function (B) {
                            return B[L];
                          };
                    },
                  },
                  watch: {
                    $attrs: {
                      handler: function (L) {
                        var B = this._sortable;
                        B &&
                          ut(L).forEach(function (re) {
                            var pe = T(re, 2),
                              he = pe[0],
                              q = pe[1];
                            B.option(he, q);
                          });
                      },
                      deep: !0,
                    },
                  },
                  methods: {
                    getUnderlyingVm: function (L) {
                      return this.componentStructure.getUnderlyingVm(L) || null;
                    },
                    getUnderlyingPotencialDraggableComponent: function (L) {
                      return L.__draggable_component__;
                    },
                    emitChanges: function (L) {
                      var B = this;
                      Object(ht.nextTick)(function () {
                        return B.$emit("change", L);
                      });
                    },
                    alterList: function (L) {
                      if (this.list) {
                        L(this.list);
                        return;
                      }
                      var B = D(this.modelValue);
                      L(B), this.$emit("update:modelValue", B);
                    },
                    spliceList: function () {
                      var L = arguments,
                        B = function (pe) {
                          return pe.splice.apply(pe, D(L));
                        };
                      this.alterList(B);
                    },
                    updatePosition: function (L, B) {
                      var re = function (he) {
                        return he.splice(B, 0, he.splice(L, 1)[0]);
                      };
                      this.alterList(re);
                    },
                    getRelatedContextFromMoveEvent: function (L) {
                      var B = L.to,
                        re = L.related,
                        pe = this.getUnderlyingPotencialDraggableComponent(B);
                      if (!pe) return { component: pe };
                      var he = pe.realList,
                        q = { list: he, component: pe };
                      if (B !== re && he) {
                        var x = pe.getUnderlyingVm(re) || {};
                        return y(y({}, x), q);
                      }
                      return q;
                    },
                    getVmIndexFromDomIndex: function (L) {
                      return this.componentStructure.getVmIndexFromDomIndex(
                        L,
                        this.targetDomElement,
                      );
                    },
                    onDragStart: function (L) {
                      (this.context = this.getUnderlyingVm(L.item)),
                        (L.item._underlying_vm_ = this.clone(
                          this.context.element,
                        )),
                        (On = L.item);
                    },
                    onDragAdd: function (L) {
                      var B = L.item._underlying_vm_;
                      if (B !== void 0) {
                        O(L.item);
                        var re = this.getVmIndexFromDomIndex(L.newIndex);
                        this.spliceList(re, 0, B);
                        var pe = { element: B, newIndex: re };
                        this.emitChanges({ added: pe });
                      }
                    },
                    onDragRemove: function (L) {
                      if (
                        (Y(this.$el, L.item, L.oldIndex),
                        L.pullMode === "clone")
                      ) {
                        O(L.clone);
                        return;
                      }
                      var B = this.context,
                        re = B.index,
                        pe = B.element;
                      this.spliceList(re, 1);
                      var he = { element: pe, oldIndex: re };
                      this.emitChanges({ removed: he });
                    },
                    onDragUpdate: function (L) {
                      O(L.item), Y(L.from, L.item, L.oldIndex);
                      var B = this.context.index,
                        re = this.getVmIndexFromDomIndex(L.newIndex);
                      this.updatePosition(B, re);
                      var pe = {
                        element: this.context.element,
                        oldIndex: B,
                        newIndex: re,
                      };
                      this.emitChanges({ moved: pe });
                    },
                    computeFutureIndex: function (L, B) {
                      if (!L.element) return 0;
                      var re = D(B.to.children).filter(function (x) {
                          return x.style.display !== "none";
                        }),
                        pe = re.indexOf(B.related),
                        he = L.component.getVmIndexFromDomIndex(pe),
                        q = re.indexOf(On) !== -1;
                      return q || !B.willInsertAfter ? he : he + 1;
                    },
                    onDragMove: function (L, B) {
                      var re = this.move,
                        pe = this.realList;
                      if (!re || !pe) return !0;
                      var he = this.getRelatedContextFromMoveEvent(L),
                        q = this.computeFutureIndex(he, L),
                        x = y(y({}, this.context), {}, { futureIndex: q }),
                        F = y(
                          y({}, L),
                          {},
                          { relatedContext: he, draggedContext: x },
                        );
                      return re(F, B);
                    },
                    onDragEnd: function () {
                      On = null;
                    },
                  },
                }),
                rn = Zt;
              s.default = rn;
            },
            fb6a: function (r, s, o) {
              var u = o("23e7"),
                l = o("861d"),
                i = o("e8b5"),
                c = o("23cb"),
                p = o("50c4"),
                y = o("fc6a"),
                E = o("8418"),
                v = o("b622"),
                h = o("1dde"),
                b = o("ae40"),
                S = h("slice"),
                T = b("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
                $ = v("species"),
                C = [].slice,
                N = Math.max;
              u(
                { target: "Array", proto: !0, forced: !S || !T },
                {
                  slice: function (H, j) {
                    var O = y(this),
                      Y = p(O.length),
                      te = c(H, Y),
                      ne = c(j === void 0 ? Y : j, Y),
                      K,
                      X,
                      ue;
                    if (
                      i(O) &&
                      ((K = O.constructor),
                      typeof K == "function" && (K === Array || i(K.prototype))
                        ? (K = void 0)
                        : l(K) && ((K = K[$]), K === null && (K = void 0)),
                      K === Array || K === void 0)
                    )
                      return C.call(O, te, ne);
                    for (
                      X = new (K === void 0 ? Array : K)(N(ne - te, 0)), ue = 0;
                      te < ne;
                      te++, ue++
                    )
                      te in O && E(X, ue, O[te]);
                    return (X.length = ue), X;
                  },
                },
              );
            },
            fc6a: function (r, s, o) {
              var u = o("44ad"),
                l = o("1d80");
              r.exports = function (i) {
                return u(l(i));
              };
            },
            fdbc: function (r, s) {
              r.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
              };
            },
            fdbf: function (r, s, o) {
              var u = o("4930");
              r.exports =
                u && !Symbol.sham && typeof Symbol.iterator == "symbol";
            },
          }).default;
        });
      })(Qr)),
    Qr.exports
  );
}
uv();
const dv = { class: "pl-10 pr-10" },
  cv = { class: "divcenterpage" },
  fv = { key: 0, style: { "font-weight": "bold" } },
  pv = {
    style: { float: "right", display: "inline-block", "margin-right": "10px" },
  },
  mv = { key: 0, style: { "font-size": "20px" } },
  vv = { key: 1, style: { "font-size": "20px" } },
  gv = { key: 1, style: { "font-size": "20px" } },
  hv = { key: 0 },
  yv = { key: 0 },
  Ev = { key: 1 },
  bv = { key: 0 },
  Sv = { key: 1 },
  Tv = { class: "mb-1", style: { float: "left" } },
  Iv = { key: 0 },
  Cv = { key: 1 },
  Ov = { key: 0, class: "mb-1", style: { float: "left" } },
  xv = { key: 1, class: "mb-1", style: { float: "left" } },
  Nv = { key: 2, class: "mb-1", style: { float: "left" } },
  wv = { key: 3, class: "mb-1", style: { float: "left" } },
  Dv = { key: 4, class: "mb-1", style: { float: "left" } },
  Av = { key: 5, class: "mb-1", style: { float: "left" } },
  Pv = { key: 6, class: "mb-1", style: { float: "left" } },
  Rv = { key: 0, class: "mb-1", style: { float: "left" } },
  kv = { key: 1, class: "mb-1", style: { float: "left" } },
  Vv = { key: 2, class: "mb-1", style: { float: "left" } },
  Mv = { key: 3, class: "mb-1", style: { float: "left" } },
  Lv = { key: 0 },
  Fv = { key: 1 },
  $v = { key: 0 },
  Uv = { key: 1 },
  jv = { key: 0 },
  Bv = { key: 1 },
  Gv = { class: "text-green-darken-3 text-h4 font-weight-bold" },
  Hv = { class: "text-h6 text-medium-emphasis font-weight-regular" },
  zv = { class: "d-flex justify-space-between py-3" },
  Xv = {
    class: "text-green-darken-3 font-weight-medium",
    style: { "font-size": "1.5rem" },
  },
  Kv = { class: "text-medium-emphasis", style: { "font-size": "1.5rem" } },
  Wv = { key: 0, class: "text-red-darken-3 text-h4 font-weight-bold" },
  Yv = { key: 1, class: "text-red-darken-3 text-h4 font-weight-bold" },
  Jv = { class: "text-h6 text-medium-emphasis font-weight-regular" },
  Qv = { class: "d-flex justify-space-between py-3" },
  Zv = {
    class: "text-red-darken-3 font-weight-medium",
    style: { "font-size": "1.5rem" },
  },
  qv = { class: "text-medium-emphasis", style: { "font-size": "1.5rem" } },
  _v = { class: "text-orange-darken-3 text-h4 font-weight-bold" },
  eg = { style: { "line-height": "20px", height: "32px" } },
  tg = { class: "text-h6 text-medium-emphasis font-weight-regular" },
  ng = { class: "d-flex justify-space-between py-3" },
  og = {
    class: "text-orange-darken-3 font-weight-medium",
    style: { "font-size": "1.5rem" },
  },
  rg = { class: "text-medium-emphasis", style: { "font-size": "1.5rem" } },
  ag = { class: "text-blue text-h5 font-weight-bold" },
  sg = { style: { "font-size": "20px", "line-height": "30px" } },
  ig = { class: "text-h6 text-medium-emphasis font-weight-regular" },
  lg = { class: "d-flex justify-space-between py-3" },
  ug = {
    class: "text-blue font-weight-medium",
    style: { "font-size": "1.5rem" },
  },
  dg = { class: "text-medium-emphasis", style: { "font-size": "1.5rem" } },
  cg = { style: { float: "right" } },
  fg = {
    key: 0,
    style: { display: "inline", float: "right", "margin-right": "20px" },
  },
  pg = {
    key: 1,
    style: { display: "inline", float: "right", "margin-right": "20px" },
  },
  mg = { style: { display: "flex", "align-items": "center" } },
  vg = ["title"],
  gg = { key: 0 },
  hg = { key: 1 },
  yg = { class: "mt-4" },
  Eg = { key: 0, class: "pa-2 bg-grey-lighten-4" },
  bg = { class: "pa-2 bg-grey-lighten-4" },
  Sg = { class: "pa-2 bg-grey-lighten-4" },
  Tg = { class: "pa-2 bg-grey-lighten-4" },
  Ig = { style: { "text-align": "center" }, class: "mt-8" },
  Cg = { class: "text-left" },
  Og = { class: "text-left" },
  xg = { class: "text-left" },
  Ng = { class: "text-left" },
  wg = { class: "text-left" },
  Dg = { class: "text-left" },
  Ag = { class: "text-left" },
  Pg = { class: "text-left" },
  Rg = { key: 0, style: { color: "green" } },
  kg = { key: 1, style: { color: "orange" } },
  Vg = { key: 2, style: { color: "red" } },
  nl = "DD-MM-YYYY HH:mm",
  Ih = {
    __name: "tasks",
    setup(e) {
      let t = null,
        n = null;
      (n = Promise.all([
        oa(() => import("./BxhyeuW9.js"), [], import.meta.url).then((J) => {
          t = J.default || J.JSGantt;
        }),
        oa(
          () => import("./PpFccnDH.js").then((J) => J.j),
          __vite__mapDeps([0, 1, 2]),
          import.meta.url,
        ),
      ])),
        Hn.locale("it");
      const a = V(null),
        r = V(null),
        s = V([]),
        o = V(0),
        u = V(0),
        l = V(0),
        i = V(0),
        c = V(0),
        p = V(0),
        y = V(0),
        E = V(0),
        v = V(0),
        h = V(["dati"]),
        b = V(!0),
        S = V(!0),
        T = V([]),
        $ = wo(() =>
          s.value.some((J) => J.hashours !== 1 && J.haspinvoice !== 1),
        ),
        C = wo(() => s.value.filter((J) => J.internalactivity != 1).length > 1),
        N = wo(() => s.value.some((J) => J.status !== "C")),
        D = [
          { title: "Cliente", key: "Client.name" },
          { title: "Data contratto", key: "Sponsor.contractdate" },
          { title: "Note", key: "Sponsor.note" },
        ],
        H = [
          { title: "Sponsor", key: "sponsor" },
          { title: "Totale", key: "total", align: "end" },
          { title: "Data prevista emissione fattura", key: "previewdate" },
          { title: "Fattura emessa", key: "emessa", align: "center" },
          { title: "Data fattura", key: "invoicedate" },
        ],
        j = V([{ key: "#", order: "asc" }]),
        O = V(null),
        Y = V([]),
        te = V(!1);
      V([
        new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate(),
        ),
        new Date(),
      ]),
        V([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [Si(new Date()), Ii(new Date())] },
          {
            label: "Mese precedente",
            value: [Si(Ti(new Date(), 1)), Ii(Ti(new Date(), 1))],
          },
          { label: "Anno corrente", value: [mc(new Date()), vc(new Date())] },
        ]);
      const ne = jo(),
        K = yr(),
        X = Er(),
        { status: ue, signIn: G, signOut: A, data: w } = Qn(),
        se = V([]),
        ke = V(""),
        ge = Zn("snackbar"),
        Ee = V(0),
        Be = V(0),
        je = V([]),
        He = V(!1),
        Fe = V(!1),
        Ue = V(!1),
        ut = V(!1),
        qe = V(!1),
        bt = V(!1),
        St = V(!1),
        Tt = V(!1),
        ze = V(!1),
        Me = V(!1),
        gt = V(0),
        ht = V(0),
        Mt = V(!0),
        Lt = V([]),
        _n = {
          A: "#157244",
          C: "#6bc498",
          S: "orange",
          I: "#9eefea",
          L: "#dddddd",
          H: "#994eb7",
          R: "red",
          D: "darkred",
        },
        It = (J) => _n[J] || "grey",
        dt = V(0),
        Ke = [
          { code: "A", name: "Approvato / Siglato" },
          { code: "C", name: "Confermato – in attesa di contratto" },
          { code: "S", name: "Da sviluppare" },
          { code: "I", name: "In discussione" },
          { code: "L", name: "Lead" },
          { code: "H", name: "On Hold" },
          { code: "R", name: "Rifiutato" },
          { code: "D", name: "Eliminato" },
        ],
        Cn = [
          { code: "A", name: "Approvato / Siglato", disabled: !0 },
          { code: "C", name: "Confermato – in attesa di contratto" },
        ],
        On = [
          { code: "A", name: "Approvato / Siglato", disabled: !0 },
          { code: "C", name: "Confermato – in attesa di contratto" },
          { code: "S", name: "Da sviluppare" },
          { code: "I", name: "In discussione" },
          { code: "L", name: "Lead" },
          { code: "H", name: "On Hold" },
          { code: "R", name: "Rifiutato" },
          { code: "D", name: "Eliminato" },
        ],
        zt = V(null);
      V([]), V([]);
      const P = V({ id: 0, openstatus: !0 }),
        Zt = V(0),
        rn = [
          { code: 0, name: "Tutti" },
          { code: 1, name: "Interno" },
          { code: 2, name: "Esterno" },
        ],
        M = V([]),
        L = V([]),
        B = V([]),
        re = V([]),
        pe = V([]),
        he = V([]),
        q = V(0),
        x = [
          { code: "A", name: "Aperto" },
          { code: "C", name: "Chiuso" },
          { code: "P", name: "Completato" },
        ],
        F = V(null),
        ie = V(""),
        _ = V(0),
        ce = V(0),
        be = V(0),
        Te = V([]),
        at = V([]),
        vn = V([]),
        xn = V([]),
        an = V([]);
      V(null), V([]);
      const eo = V(""),
        go = V(!1),
        Fa = V(!1),
        gn = V(0),
        Ho = V(0),
        Nr = V(0),
        wr = V(0),
        Xt = V(0),
        Ct = V(0),
        ho = V(!1),
        zo = V([]),
        $a = [
          1075, 1080, 1081, 1082, 1086, 1087, 1089, 1090, 1095, 1096, 1098,
          1101, 1106, 1107, 1110, 1111, 1113, 1114, 1190, 1196, 1236, 1239,
          1242, 1270, 1273, 1274, 1374, 1387,
        ],
        xu = wo(() => [
          { title: "#", key: "idproj", sortable: !1, width: 30 },
          { title: "Nome", key: "shortname", sortable: !0, align: "left" },
          ...(P.value.type === "A"
            ? [{ title: "Tipo", key: "type", sortable: !0, align: "left" }]
            : []),
          { title: "Stato", key: "status", sortable: !0, align: "left" },
          { title: "CR", key: "iscr", sortable: !0, align: "left" },
          { title: "Esecutivo", key: "esecutivo", sortable: !0, align: "left" },
          { title: "Gg. Budget", key: "hours", sortable: !0, align: "left" },
          { title: "Ore lavorate", key: "nhours" },
          { title: "Costo", key: "cost" },
          { title: "Prezzo", key: "price" },
          { title: "Inizio", key: "startdate", sortable: !0, align: "left" },
          { title: "Fine", key: "enddate", sortable: !0, align: "left" },
          {
            title: "Prof. Profess.",
            key: "userprofiles",
            sortable: !0,
            align: "left",
          },
          { title: "Assegnatario", key: "users", sortable: !0, align: "left" },
          { title: "", key: "actions", sortable: !1 },
        ]),
        ei = [
          { title: "Nome", key: "shortname" },
          { title: "Tipo", key: "type" },
          { title: "Interno", key: "interno" },
          { title: "Stato", key: "st" },
          { title: "CR", key: "iscr" },
          { title: "Esecutivo", key: "esec" },
          { title: "Descrizione", key: "description" },
          { title: "Giorni Budget", key: "hours" },
          { title: "Ore Budget", key: "hours" },
          { title: "Ore Lavorate", key: "nhours" },
          { title: "Inizio", key: "startdate" },
          { title: "Fine", key: "enddate" },
          { title: "Prof. Profess.", key: "userprofiles" },
          { title: "Assegnatario", key: "users" },
          { title: "Fornitore", key: "supplier" },
          { title: "Prezzo", key: "price" },
          { title: "Costo", key: "cost" },
          { title: "Costo Effettivo", key: "realcost" },
        ],
        Nu = [
          { title: "ID", key: "id" },
          { title: "Colore", key: "color" },
          { title: "Codice", key: "code" },
          { title: "Nome", key: "name" },
          { title: "Nome a contratto", key: "contractname" },
          { title: "Descrizione", key: "description" },
          { title: "Inizio", key: "startdate" },
          { title: "Fine", key: "enddate" },
          { title: "Codice", key: "code" },
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
        Xo = V(!1),
        Ko = V(!1),
        wu = V(null),
        Dr = V(!1),
        Le = V(!1),
        Wo = V(null),
        Du = V(null),
        Ar = V(null),
        Ua = V(null),
        Yo = V([]),
        yo = V(!1),
        Eo = V(!1),
        Nn = V(null);
      uc({ title: "Task", meta: [{ name: "description", content: "Task" }] });
      const Au = ({ item: J }) =>
        J.ismodified == 1
          ? { class: "row-ok-task" }
          : J.internalactivity == 0
            ? { class: "row-external" }
            : {};
      function Pu() {
        K.push("/tasks?id=" + X.query.id);
      }
      function Ru() {
        K.push("/activeinvoices?id=" + X.query.id);
      }
      function ku() {
        K.push("/passiveinvoices?id=" + X.query.id);
      }
      function Vu() {
        K.push("/paymenttranches?id=" + X.query.id);
      }
      const Pr = V({});
      let ti = null;
      function Mu(J) {
        return Pr.value[J.id] !== void 0 ? Pr.value[J.id] : J.idproj;
      }
      function Lu(J, f) {
        (Pr.value[J.id] = f),
          clearTimeout(ti),
          (ti = setTimeout(() => {
            Fu(J, f);
          }, 800));
      }
      function Fu(J, f) {
        let W = parseInt(f);
        delete Pr.value[J.id],
          (isNaN(W) || W < 1) && (W = 1),
          W > se.value.length && (W = se.value.length);
        const oe = se.value.findIndex((Q) => Q.id === J.id);
        if (oe === -1) return;
        const ee = W - 1;
        if (oe === ee) return;
        const [fe] = se.value.splice(oe, 1);
        se.value.splice(ee, 0, fe), ni(), $u();
      }
      function ni() {
        se.value.forEach((J, f) => {
          J.idproj = f + 1;
        });
      }
      async function $u() {
        let f = { newOrder: se.value.map((W) => W.id), project: X.query.id };
        try {
          await De(ne.public.apiBaseurl + "task/updateordertask", {
            method: "POST",
            body: f,
          }),
            (ge.value = {
              text: "Ordine aggiornato",
              type: "success",
              show: !0,
            });
        } catch (W) {
          let oe = JSON.parse(W.data).errors.title;
          ge.value = { text: oe, type: "danger", show: !0 };
        }
      }
      const Jo = V([]);
      function Uu() {
        yo.value = !0;
        let J = [];
        s.value.forEach((f) => {
          f.internalactivity != 1 && J.push(f.id);
        });
        for (let f = 0; f < J.length; f++) {
          const W = J[f],
            oe = se.value.find((ee) => ee.id === W);
          oe &&
            Jo.value.push({
              id: oe.id,
              nome: oe.shortname,
              costo: oe.cost,
              prezzo: oe.price,
              giorni: oe.hours,
              startdate: oe.startdate,
              enddate: oe.enddate,
            });
        }
      }
      function ju() {
        (yo.value = !1), (Jo.value = []), (Nn.value = null);
      }
      const Bu = () => {
        Eo.value = !0;
      };
      function Gu() {
        Eo.value = !1;
      }
      const Hu = async () => {
          let J = [];
          console.log(s.value),
            s.value.forEach((W) => {
              W.status != "C" && J.push(W.id);
            });
          let f = { selectedclosetask: J, project_id: X.query.id };
          try {
            const { data: W, status: oe } = await De(
              ne.public.apiBaseurl + "task/closeall",
              { method: "POST", body: f },
            );
            (ge.value = {
              text: "Task chiusi con successo",
              type: "success",
              show: !0,
            }),
              (Eo.value = !1),
              (s.value = []),
              hn(),
              sn();
          } catch (W) {
            let oe = JSON.parse(W.data).errors.title;
            console.log("catcherr", W.data),
              (ge.value = { text: oe, type: "danger", show: !0 });
            return;
          }
        },
        zu = async () => {
          if (Nn.value == null) {
            ge.value = {
              text: "Seleziona un task principale",
              type: "danger",
              show: !0,
            };
            return;
          }
          Nn.value = parseInt(Nn.value);
          let J = {
            selectedmergetask: Jo.value,
            selectedmergetaskid: Nn.value,
            project_id: X.query.id,
          };
          try {
            const { data: f, status: W } = await De(
              ne.public.apiBaseurl + "task/mergefp",
              { method: "POST", body: J },
            );
            (ge.value = {
              text: "Fatture passivie Task unite con successo",
              type: "success",
              show: !0,
            }),
              (yo.value = !1),
              (Jo.value = []),
              (Nn.value = null),
              (s.value = []),
              hn(),
              sn();
          } catch (f) {
            let W = JSON.parse(f.data).errors.title;
            console.log("catcherr", f.data),
              (ge.value = { text: W, type: "danger", show: !0 });
            return;
          }
        },
        Xu = async () => {
          (Te.value = []), (at.value = []), (vn.value = []);
          const { data: J } = await De(ne.public.apiBaseurl + "activity/list", {
            onRequest({ request: f, options: W }) {},
            onRequestError({ request: f, options: W, error: oe }) {
              console.log("Errore nella request:", oe);
            },
            onResponseError({ request: f, response: W, options: oe }) {
              ge.value = {
                text: "Errore caricamento attività",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: f, response: W, options: oe }) {
              W._data.data.forEach((fe) => {
                (at.value[fe.Activity.id] =
                  "[" + fe.Activity.acronimo + "] " + fe.Activity.name),
                  (vn.value[fe.Activity.id] = fe.Activity.name),
                  Te.value.push({
                    id: fe.Activity.id,
                    name: "[" + fe.Activity.acronimo + "] " + fe.Activity.name,
                  });
              });
            },
          });
        },
        Ku = async () => {
          Yo.value = [];
          const { data: J } = await De(
            ne.public.apiBaseurl + "invoice/tranchelist/" + X.query.id,
            {
              onRequest({ request: f, options: W }) {},
              onRequestError({ request: f, options: W, error: oe }) {
                console.log("Errore nella request:", oe),
                  (ge.value = {
                    text: "Errore: " + oe,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: f, response: W, options: oe }) {
                console.log(
                  "Errore nella response: " + W._data.error.messages[0],
                ),
                  (ge.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: f, response: W, options: oe }) {
                Yo.value = W._data.data;
              },
            },
          );
        },
        Wu = async () => {
          (B.value = []), (he.value = []);
          const { data: J } = await De(ne.public.apiBaseurl + "user/list", {
            onRequest({ request: f, options: W }) {},
            onRequestError({ request: f, options: W, error: oe }) {
              console.log("Errore nella request:", oe);
            },
            onResponseError({ request: f, response: W, options: oe }) {
              ge.value = {
                text: "Errore caricamento utenti",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: f, response: W, options: oe }) {
              W._data.data.forEach((fe) => {
                (he.value[fe.id] = "[" + fe._sigla + "]"),
                  B.value.push({
                    id: fe.id,
                    name: fe.firstname + " " + fe.lastname,
                    disabled: fe.activeuser != 1,
                  });
              });
            },
          });
        },
        Yu = async () => {
          (M.value = []), (L.value = []);
          const { data: J } = await De(
            ne.public.apiBaseurl + "userprofile/list",
            {
              onRequest({ request: f, options: W }) {},
              onRequestError({ request: f, options: W, error: oe }) {
                console.log("Errore nella request:", oe);
              },
              onResponseError({ request: f, response: W, options: oe }) {
                ge.value = {
                  text: "Errore caricamento profili professionali",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: f, response: W, options: oe }) {
                W._data.data.forEach((fe) => {
                  (M.value[fe.id] = "[" + fe.code + "]"),
                    L.value.push({
                      id: fe.id,
                      name: fe.profilename,
                      code: fe.code,
                    });
                });
              },
            },
          );
        },
        Ju = async () => {
          pe.value = [];
          const { data: J } = await De(ne.public.apiBaseurl + "supplier/list", {
            onRequest({ request: f, options: W }) {},
            onRequestError({ request: f, options: W, error: oe }) {
              console.log("Errore nella request:", oe);
            },
            onResponseError({ request: f, response: W, options: oe }) {
              ge.value = {
                text: "Errore caricamento fornitori",
                type: "danger",
                show: !0,
              };
            },
            onResponse({ request: f, response: W, options: oe }) {
              W._data.data.forEach((fe) => {
                (pe.value[fe.id] = fe.name + " [" + fe.codsup + "]"),
                  re.value.push({ id: fe.id, name: fe.name, code: fe.codsup });
              });
            },
          });
        },
        Qu = async () => {
          const { data: J } = await De(
            ne.public.apiBaseurl +
              "projecthistory/saveprojecthistory/" +
              X.query.id,
            {
              onRequest({ request: f, options: W }) {},
              onRequestError({ request: f, options: W, error: oe }) {
                console.log("Errore nella request:", oe);
              },
              onResponseError({ request: f, response: W, options: oe }) {
                ge.value = {
                  text: "Errore salvataggio storico",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: f, response: W, options: oe }) {
                ge.value = {
                  text: "Salvataggio storico correttamente avvenuto",
                  type: "success",
                  show: !0,
                };
              },
            },
          );
        },
        Zu = async () => {
          let J = [];
          s.value.forEach((W) => {
            W.hashours !== 1 && W.haspinvoice !== 1 && J.push(W.id);
          });
          let f = { selecteditemtable: J };
          try {
            const { data: W, status: oe } = await De(
              ne.public.apiBaseurl + "task/deleteall",
              { method: "POST", body: f },
            );
            (ge.value = { text: "Task eliminati", type: "success", show: !0 }),
              (s.value = []),
              hn(),
              sn();
          } catch (W) {
            let oe = JSON.parse(W.data).errors.title;
            console.log("catcherr", W.data),
              (ge.value = { text: oe, type: "danger", show: !0 });
            return;
          }
        },
        hn = async () => {
          (be.value = 0),
            (ce.value = 0),
            (_.value = 0),
            (u.value = 0),
            (l.value = 0),
            (i.value = 0),
            (c.value = 0),
            (p.value = 0),
            (y.value = 0),
            (E.value = 0),
            (v.value = 0);
          const { data: J } = await De(
            ne.public.apiBaseurl + "project/get/" + X.query.id,
            {
              onRequest({ request: f, options: W }) {},
              onRequestError({ request: f, options: W, error: oe }) {
                console.log("Errore nella request:", oe),
                  (ge.value = {
                    text: "Errore: " + oe,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: f, response: W, options: oe }) {
                console.log(
                  "Errore nella response: " + W._data.error.messages[0],
                ),
                  (ge.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: f, response: W, options: oe }) {
                P.value = W._data.data;
                let ee = {
                  code: P.value.status,
                  name: Ke.filter(({ code: fe }) => fe === P.value.status)
                    .map(({ name: fe }) => fe)
                    .slice(0, 1)
                    .shift(),
                };
                (ie.value = ee.name),
                  (Y.value = P.value.sponsors),
                  (zt.value = {
                    id: P.value.client_id,
                    name: Lt.value
                      .filter(({ id: fe }) => fe === P.value.client_id)
                      .map(({ name: fe }) => fe)
                      .slice(0, 1)
                      .shift(),
                  }),
                  (be.value = P.value.nopentasks),
                  (eo.value = P.value.ownersname.join(", ")),
                  (ce.value = P.value.nclosetasks),
                  (_.value = P.value.ntasks),
                  (Ee.value =
                    new Date() > new Date(P.value.enddate)
                      ? 0
                      : bo(new Date(), new Date(P.value.enddate))),
                  (Be.value =
                    (bo(new Date(P.value.startdate), new Date()) * 100) /
                    bo(new Date(P.value.startdate), new Date(P.value.enddate))),
                  (gn.value = P.value._totaleprogetto),
                  (Ho.value = P.value._totaleprogettomodified),
                  (Nr.value = gn.value - P.value.costoproposta),
                  (wr.value = gn.value - P.value.costopropostareal),
                  P.value.owners.forEach((fe) => {
                    je.value.push(fe);
                  }),
                  (u.value =
                    P.value._totaleprogettomodified != 0
                      ? P.value._totaleprogettomodified
                      : P.value._totaleprogetto),
                  (l.value = P.value.ricavi),
                  (i.value = P.value.costipresunti),
                  (c.value = P.value.costi),
                  (p.value = P.value.primomarg),
                  (y.value = P.value.margprog),
                  (E.value = P.value.margcomm),
                  (v.value = P.value.margpercent);
              },
            },
          );
        },
        oi = async () => {
          (be.value = 0), (ce.value = 0), (_.value = 0), (se.value = []);
          const { data: J } = await De(
            ne.public.apiBaseurl + "projecthistory/get/" + X.query.storico,
            {
              onRequest({ request: f, options: W }) {},
              onRequestError({ request: f, options: W, error: oe }) {
                console.log("Errore nella request:", oe),
                  (ge.value = {
                    text: "Errore: " + oe,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: f, response: W, options: oe }) {
                console.log(
                  "Errore nella response: " + W._data.error.messages[0],
                ),
                  (ge.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: f, response: W, options: oe }) {
                (Du.value = W._data.data.Projecthistory),
                  (Ar.value = W._data.data.Projecthistory.created),
                  (Wo.value = JSON.parse(W._data.data.Projecthistory.history)),
                  (P.value = Wo.value.Project),
                  (P.value.statuscoded = Ke.filter(
                    ({ code: Q }) => Q === P.value.status,
                  )
                    .map(({ name: Q }) => Q)
                    .slice(0, 1)
                    .shift()),
                  (P.value.openstatuscoded =
                    P.value.openstatus == "A" ? "Si" : "No"),
                  (P.value.internalproject =
                    P.value.internalproject == 1 ? "Si" : "No"),
                  (P.value.tipoincrementoproposta =
                    P.value.tipoincrementoproposta == "V"
                      ? "Valore"
                      : "Percentuale"),
                  (P.value.tiposcontoproposta =
                    P.value.tiposcontoproposta == "V"
                      ? "Valore"
                      : "Percentuale"),
                  (P.value.tipoincrementoproposta =
                    P.value.tipoincrementoproposta == "V"
                      ? "Valore"
                      : "Percentuale"),
                  (P.value.tipoincrementopropostacr =
                    P.value.tipoincrementopropostacr == "V"
                      ? "Valore"
                      : "Percentuale"),
                  (P.value.tiposcontopropostacr =
                    P.value.tiposcontopropostacr == "V"
                      ? "Valore"
                      : "Percentuale"),
                  (P.value.startdate =
                    P.value.startdate != null ? P.value.startdate : ""),
                  (P.value.enddate =
                    P.value.enddate != null ? P.value.enddate : ""),
                  (P.value.ownername = P.value.ownersname.join(", ")),
                  (T.value = []),
                  (Xt.value = 0),
                  (o.value = 0),
                  (Ct.value = 0);
                let ee = 1;
                Wo.value.Task.forEach((Q) => {
                  (Q.Task.Hour = Q.Hours),
                    Q.Hours.forEach((Kt) => {
                      Kt.length > 0 &&
                        Kt.forEach((To) => {
                          o.value = o.value + To.Hour._ore;
                        });
                    }),
                    (Xt.value = Xt.value + Q.Task.hours / 8),
                    Q.Task.internalactivity == 1 &&
                      (Ct.value = Ct.value + Q.Task.hours / 8),
                    (Q.Task.userprofiles = M.value[Q.Task.userprofile_id]),
                    (Q.Task.users = he.value[Q.Task.user_id]),
                    (Q.Task.changerequest_status = Q.Changerequest.status),
                    (Q.Task.changerequest_name = Q.Changerequest.name),
                    (Q.Task.changerequest_id = Q.Changerequest.id);
                  let st = "",
                    Ae = [];
                  Q.Activity != null &&
                    (Q.Activity.forEach((Kt) => {
                      (st = st + vn.value[Kt.id] + ", "), Ae.push(Kt.id);
                    }),
                    (Q.Task.activities = st.substring(0, st.length - 2)),
                    (Q.Task.activities_id = Ae)),
                    Q.Task.startdate != null &&
                      Q.Task.enddate != null &&
                      T.value.push({
                        budgetday: Q.Task.hours / 8,
                        status: Q.Task.status,
                        completed: Q.Task.status == "C",
                        notes: Q.Task.note,
                        userId: Q.Task.user_id,
                        myBeginDate:
                          new Date(Q.Task.startdate).toLocaleDateString(
                            "es-CL",
                          ) + " 00:00",
                        myEndDate:
                          new Date(Q.Task.enddate).toLocaleDateString("es-CL") +
                          " 00:00",
                        rowClass: "task-warning",
                        ganttBarConfig: {
                          id: Q.Task.id,
                          label: Q.Task.shortname,
                          immobile: !0,
                        },
                      }),
                    (Q.Task.startdate =
                      Q.Task.startdate != null ? Q.Task.startdate : ""),
                    (Q.Task.enddate =
                      Q.Task.enddate != null ? Q.Task.enddate : ""),
                    (Q.Task.idproj = ee),
                    (Q.Task.supplier =
                      Q.Task.internalactivity == 0
                        ? Q.Task.supplier_id != 0
                          ? pe.value[Q.Task.supplier_id]
                          : Q.Task.genericsupplier
                        : ""),
                    (Q.Task.interno =
                      Q.Task.internalactivity == 1 ? "Si" : "No"),
                    (Q.Task.esec = Q.Task.esecutivo == 1 ? "Si" : "No"),
                    (Q.Task.st = x
                      .filter(({ code: Kt }) => Kt === Q.Task.status)
                      .map(({ name: Kt }) => Kt)
                      .slice(0, 1)
                      .shift()),
                    (Q.Task.supplier_name = Q.Supplier.name),
                    se.value.push(Q.Task),
                    ee++;
                }),
                  Rr(),
                  (o.value = o.value / 8);
                let fe = {
                  code: P.value.status,
                  name: Ke.filter(({ code: Q }) => Q === P.value.status)
                    .map(({ name: Q }) => Q)
                    .slice(0, 1)
                    .shift(),
                };
                (ie.value = fe.name),
                  (zt.value = {
                    id: P.value.client_id,
                    name: Lt.value
                      .filter(({ id: Q }) => Q === P.value.client_id)
                      .map(({ name: Q }) => Q)
                      .slice(0, 1)
                      .shift(),
                  }),
                  (eo.value = P.value.ownersname.join(", ")),
                  (be.value = P.value.nopentasks),
                  (ce.value = P.value.nclosetasks),
                  (_.value = P.value.ntasks),
                  (Ee.value =
                    new Date() > new Date(P.value.enddate)
                      ? 0
                      : bo(new Date(), new Date(P.value.enddate))),
                  (Be.value =
                    (bo(new Date(P.value.startdate), new Date()) * 100) /
                    bo(new Date(P.value.startdate), new Date(P.value.enddate))),
                  (gn.value = P.value._totaleprogetto),
                  (Ho.value = P.value._totaleprogettomodified),
                  (Nr.value = gn.value - P.value.costoproposta),
                  (wr.value = gn.value - P.value.costopropostareal);
              },
            },
          );
        };
      function bo(J, f) {
        const W = J.getTime(),
          oe = f.getTime(),
          ee = Math.abs(oe - W),
          fe = 1e3 * 60 * 60 * 24;
        return Math.floor(ee / fe);
      }
      function qu(J, f) {
        (gt.value = parseInt(J)), (dt.value = f), (He.value = !0);
      }
      function _u() {
        (He.value = !1), (dt.value = 0), hn(), si(), sn();
      }
      function ed() {
        Fe.value = !0;
      }
      function td() {
        Fe.value = !1;
      }
      function nd(J, f) {
        (gt.value = parseInt(J)), (dt.value = f), (Ue.value = !0);
      }
      function od(J, f) {
        (gt.value = parseInt(J)), (ut.value = !0);
      }
      function rd() {
        Dr.value = !0;
      }
      function ad() {
        K.push("/economics?id=" + P.value.id);
      }
      function sd() {
        Dr.value = !1;
      }
      const id = async () => {
          ut.value = !1;
        },
        ld = async () => {
          (Ue.value = !1), (dt.value = 0), await hn(), await sn();
        };
      function ud(J) {
        (Ua.value = J), (ht.value = parseInt(J.id)), (St.value = !0);
      }
      function dd(J) {
        (Ua.value = null), (St.value = !1);
      }
      function cd() {
        bt.value = !0;
      }
      const fd = async () => {
        (bt.value = !1), await hn(), await sn();
      };
      function So(J, f) {
        (ht.value = parseInt(J)), (q.value = f), (qe.value = !0);
      }
      const pd = async () => {
        (qe.value = !1), (q.value = 0), await hn(), await sn(), await Rr();
      };
      function ri(J) {
        const { data: f } = De(ne.public.apiBaseurl + "task/delete/" + J, {
          onRequest({ request: W, options: oe }) {},
          onRequestError({ request: W, options: oe, error: ee }) {
            console.log("Errore nella request:", ee);
          },
          onResponseError({ request: W, response: oe, options: ee }) {
            ge.value = {
              text: "Errore cancellazione progetto",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: W, response: oe, options: ee }) {
            (ge.value = { text: "Task eliminato", type: "success", show: !0 }),
              hn(),
              sn();
          },
        });
      }
      function ai(J) {
        const f = Ft.utils.decode_range(J["!ref"]);
        for (let W = f.s.c; W <= f.e.c; W++) {
          const oe = Ft.utils.encode_cell({ r: 0, c: W });
          J[oe] && (J[oe].s = { font: { bold: !0 } });
        }
      }
      function md() {
        const J = Ft.utils.book_new();
        let f = [];
        f.push(P.value);
        const W = f.map((Q) => {
            const st = {};
            return (
              Nu.forEach((Ae) => {
                Ae.title == "Inizio" || Ae.title == "Fine"
                  ? (st[Ae.title] =
                      Q[Ae.key] && Q[Ae.key] !== "0000-00-00"
                        ? new Date(Q[Ae.key]).toLocaleDateString("it-IT")
                        : "")
                  : (st[Ae.title] = Q[Ae.key] ?? "");
              }),
              st
            );
          }),
          oe = Ft.utils.json_to_sheet(W);
        (oe["!cols"] = [
          { wch: 10 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 40 },
          { wch: 40 },
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
        ]),
          ai(oe),
          Ft.utils.book_append_sheet(J, oe, "ProjectStorico");
        const ee = se.value.map((Q) => {
            const st = {};
            return (
              ei.forEach((Ae) => {
                Ae.title == "Giorni Budget"
                  ? (st[Ae.title] = Q[Ae.key] ? Number(Q[Ae.key] / 8) : "")
                  : Ae.title == "Ore Budget" || Ae.title == "Ore Lavorate"
                    ? (st[Ae.title] = Q[Ae.key] ? Q[Ae.key] : "")
                    : Ae.title == "Inizio" || Ae.title == "Fine"
                      ? (st[Ae.title] =
                          Q[Ae.key] && Q[Ae.key] !== "0000-00-00"
                            ? new Date(Q[Ae.key]).toLocaleDateString("it-IT")
                            : "")
                      : Ae.title == "CR"
                        ? (st[Ae.title] = Q[Ae.key] == 1 ? "Sì" : "No")
                        : (st[Ae.title] = Q[Ae.key] ?? "");
              }),
              st
            );
          }),
          fe = Ft.utils.json_to_sheet(ee);
        (fe["!cols"] = [
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
        ]),
          ai(fe),
          Ft.utils.book_append_sheet(J, fe, "Tasks"),
          Ft.writeFile(
            J,
            "export-storico-" + P.value.code + "-" + Ar.value + ".xlsx",
          );
      }
      function vd() {
        const J = se.value.map((ee) => {
            const fe = {};
            return (
              ei.forEach((Q) => {
                Q.title == "Giorni Budget"
                  ? (fe[Q.title] = ee[Q.key] ? Number(ee[Q.key] / 8) : "")
                  : Q.title == "Ore Budget" || Q.title == "Ore Lavorate"
                    ? (fe[Q.title] = ee[Q.key] ? ee[Q.key] : "")
                    : Q.title == "Inizio" || Q.title == "Fine"
                      ? (fe[Q.title] =
                          ee[Q.key] && ee[Q.key] !== "0000-00-00"
                            ? new Date(ee[Q.key]).toLocaleDateString("it-IT")
                            : "")
                      : Q.title == "CR"
                        ? (fe[Q.title] = ee[Q.key] == 1 ? "Sì" : "No")
                        : (fe[Q.title] = ee[Q.key] ?? "");
              }),
              fe
            );
          }),
          f = Ft.utils.json_to_sheet(J),
          W = Ft.utils.decode_range(f["!ref"]);
        f["!cols"] = [
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
          { wch: 60 },
          { wch: 15 },
          { wch: 15 },
          { wch: 15 },
        ];
        for (let ee = W.s.c; ee <= W.e.c; ee++) {
          const fe = Ft.utils.encode_cell({ r: 0, c: ee });
          f[fe] && (f[fe].s = { font: { bold: !0 } });
        }
        const oe = Ft.utils.book_new();
        Ft.utils.book_append_sheet(oe, f, "Tasks"),
          Ft.writeFile(oe, "export-tasks-" + P.value.code + ".xlsx");
      }
      const sn = async () => {
        (se.value = []),
          (T.value = []),
          (Xt.value = 0),
          (Ct.value = 0),
          (o.value = 0);
        let J = {
          alsodeleted: ho.value == !1 ? 0 : 1,
          project_id: X.query.id,
          statotask: F.value,
          users: an.value,
          userprofiles: xn.value,
          changerequest: wu.value,
          intest: Zt.value,
        };
        try {
          const { data: f, status: W } = await De(
            ne.public.apiBaseurl + "task/completelist",
            { method: "POST", body: J },
          );
          let oe = 1;
          f.forEach((ee) => {
            (Xt.value = Xt.value + ee.Task.hours / 8),
              (o.value = o.value + ee.Task.nhours / 8),
              ee.Task.internalactivity == 1 &&
                (Ct.value = Ct.value + ee.Task.hours / 8),
              (ee.Task.userprofiles = M.value[ee.Userprofile.id]),
              (ee.Task.users = he.value[ee.User.id]),
              (ee.Task.shortname =
                ee.Task.status == "D"
                  ? ee.Task.shortname + " [Eliminato]"
                  : ee.Task.shortname),
              (ee.Task.changerequest_status = ee.Changerequest.status),
              (ee.Task.changerequest_name = ee.Changerequest.name),
              (ee.Task.changerequest_id = ee.Changerequest.id);
            let fe = "";
            ee.TaskActivity.forEach((Q) => {
              fe = fe + vn.value[Q.activity_id] + ", ";
            }),
              (ee.Task.activities = fe.substring(0, fe.length - 2)),
              ee.Task.startdate != null &&
                ee.Task.enddate != null &&
                T.value.push({
                  budgetday: ee.Task.hours / 8,
                  status: ee.Task.status,
                  completed: ee.Task.status == "C",
                  notes: ee.Task.note,
                  userId: ee.Task.user_id,
                  myBeginDate:
                    new Date(ee.Task.startdate).toLocaleDateString("es-CL") +
                    " 00:00",
                  myEndDate:
                    new Date(ee.Task.enddate).toLocaleDateString("es-CL") +
                    " 00:00",
                  rowClass: "task-warning",
                  ganttBarConfig: {
                    id: ee.Task.id,
                    label: ee.Task.shortname,
                    immobile: !0,
                  },
                }),
              (ee.Task.idproj = oe),
              (ee.Task.supplier =
                ee.Task.internalactivity == 0
                  ? ee.Task.supplier_id != 0
                    ? pe.value[ee.Task.supplier_id]
                    : ee.Task.genericsupplier
                  : ""),
              (ee.Task.interno = ee.Task.internalactivity == 1 ? "Si" : "No"),
              (ee.Task.esec = ee.Task.esecutivo == 1 ? "Si" : "No"),
              (ee.Task.st = x
                .filter(({ code: Q }) => Q === ee.Task.status)
                .map(({ name: Q }) => Q)
                .slice(0, 1)
                .shift()),
              (ee.Task.supplier_name = ee.Supplier.name),
              se.value.push(ee.Task),
              oe++;
          });
        } catch (f) {
          console.log(f);
          let W = JSON.parse(f.data).errors.title;
          console.log("catcherr", f.data),
            (ge.value = { text: W, type: "danger", show: !0 });
          return;
        }
        Rr();
      };
      function ja() {
        Fa.value = window.innerWidth <= 960;
      }
      const si = async () => {
        const { data: J } = await De(ne.public.apiBaseurl + "client/list", {
          onRequest({ request: f, options: W }) {},
          onRequestError({ request: f, options: W, error: oe }) {
            console.log("Errore nella request:", oe);
          },
          onResponseError({ request: f, response: W, options: oe }) {
            ge.value = {
              text: "Errore caricamento clienti",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: f, response: W, options: oe }) {
            Lt.value = W._data.data;
          },
        });
      };
      function gd(J) {
        (O.value = J), (Xo.value = !0);
      }
      function hd() {
        (O.value = null), (Xo.value = !1);
      }
      function yd() {
        Ko.value = !0;
      }
      function Ed() {
        Ko.value = !1;
      }
      Hn.extend(cl);
      async function bd() {
        if (!a.value) {
          console.warn("ganttContainer not available");
          return;
        }
        if ((n && (await n), !t)) {
          console.error("JSGantt not loaded");
          return;
        }
        (r.value = new t.GanttChart(a.value, "day")),
          r.value.setOptions({
            vAdditionalHeaders: { pBudgetday: { title: "Gg a Budget" } },
            vLang: "it",
            vFormatArr: ["day", "week", "month"],
          });
        try {
          r.value.setShowTaskInfoLink(1),
            r.value.setShowTaskInfoNotes(1),
            r.value.setShowTaskInfoStartDate(1),
            r.value.setShowTaskInfoEndDate(1),
            r.value.setShowTaskInfoDur(1),
            r.value.setShowTaskInfoComp(0),
            r.value.setShowTaskInfoRes(1),
            r.value.setShowRes(1),
            r.value.setShowDur(1),
            r.value.setShowComp(0),
            r.value.setShowStartDate(1),
            r.value.setShowEndDate(1),
            r.value.setUseToolTip(1),
            r.value.setUseFade(1),
            r.value.setUseMove(1),
            r.value.setUseRowHlt(1),
            r.value.setUseSort(0),
            r.value.setShowDeps(1),
            r.value.setDayColWidth(25),
            r.value.setRowHeight(25),
            r.value.setWeekColWidth(50),
            r.value.setMonthColWidth(50),
            typeof r.value.setTaskNameColWidth == "function"
              ? r.value.setTaskNameColWidth(320)
              : r.value.vTaskNameColWidth !== void 0 &&
                (r.value.vTaskNameColWidth = 320),
            typeof r.value.setDateInputFormat == "function" &&
              r.value.setDateInputFormat("dd/mm/yyyy"),
            typeof r.value.setDateDisplayFormat == "function" &&
              r.value.setDateDisplayFormat("dd/mm/yyyy"),
            typeof r.value.setDurationFormat == "function" &&
              r.value.setDurationFormat("days"),
            r.value.vFormat !== void 0 && (r.value.vFormat = "day"),
            r.value.vFormatArr !== void 0 &&
              (r.value.vFormatArr = ["Day", "Week", "Month"]);
          const J = r.value.Draw;
          r.value.Draw = function () {
            const f = J.call(this);
            return (
              setTimeout(() => {
                Ba();
              }, 200),
              f
            );
          };
        } catch (J) {
          console.warn(
            "Some gantt configuration methods are not available:",
            J,
          );
        }
        ii();
      }
      function Sd(J) {
        const f = [],
          W = new Map();
        for (let oe = 0; oe < J.length; oe++)
          W.set(J[oe].ganttBarConfig.id, oe + 1);
        for (let oe = 0; oe < J.length; oe++) {
          const ee = J[oe],
            fe = Hn(ee.myBeginDate, nl),
            Q = Hn(ee.myEndDate, nl),
            st = (f.value || []).find(
              (Qo) => Number(Qo.id) === ee.ganttBarConfig.id,
            );
          (new Date(
            ee.myEndDate.substr(6, 4),
            ee.myEndDate.substr(3, 2),
            ee.myEndDate.substr(0, 2),
          ) -
            new Date(
              ee.myBeginDate.substr(6, 4),
              ee.myBeginDate.substr(3, 2),
              ee.myBeginDate.substr(0, 2),
            )) /
            864e5;
          const Ae = ee.notes,
            Kt = ee.completed,
            To = ee.status,
            R = ee.ganttBarConfig.isParent || !1,
            ct = ee.ganttBarConfig.parentId || 0,
            wd = (ct > 0 && W.get(ct)) || 0,
            Dd = Q.diff(fe, "day") || 1;
          let ui = "",
            di = "";
          if (st && st.BillItemPrecedenceAsBlocked) {
            const Qo = st.BillItemPrecedenceAsBlocked.map((Fn) => {
              const Rd = Number(Fn.bill_item_blocker_id),
                ci = W.get(Rd),
                kd = Fn.ptype || "FS";
              return ci ? { pId: ci, pType: kd } : null;
            }).filter((Fn) => Fn);
            Qo.length > 0 &&
              ((ui = Qo.map((Fn) => Fn.pId).join(",")),
              (di = Qo.map((Fn) => Fn.pType).join(",")));
          }
          const Ad = new Date(fe.year(), fe.month(), fe.date(), 12, 0, 0),
            Pd = new Date(Q.year(), Q.month(), Q.date(), 12, 0, 0);
          f.push({
            pID: oe + 1,
            pName:
              ee.ganttBarConfig.label ||
              ee.ganttBarConfig.articolo ||
              `Task ${oe + 1}`,
            pStart: Ad,
            pEnd: Pd,
            pDuration: Dd,
            pClass:
              To == "C"
                ? "gtaskgreen"
                : To == "P"
                  ? "gtaskblue"
                  : "gtaskorange",
            pLink: "",
            pMile: 0,
            pRes: he.value[ee.userId] != null ? he.value[ee.userId] : "-",
            pComp: Kt ? 100 : 0,
            pGroup: R ? 1 : 0,
            pParent: wd,
            pOpen: 1,
            pDepend: ui,
            pDepType: di,
            pCaption: "",
            pNotes: Ae,
            pBudgetday: ee.budgetday,
            originalId: ee.ganttBarConfig.id,
          });
        }
        return f;
      }
      async function Rr() {
        if (((go.value = !1), !r.value || !T.value || !t)) {
          console.warn("Missing dependencies:", {
            ganttChart: !!r.value,
            rowBarList: !!T.value,
            JSGantt: !!t,
          });
          return;
        }
        (r.value.vTaskList = []), r.value.Draw();
        const J = Sd(T.value);
        for (const f of J)
          r.value.AddTaskItemObject({
            pID: f.pID,
            pName: f.pName,
            pStart: f.pStart,
            pEnd: f.pEnd,
            pDuration: f.pDuration,
            pClass: f.pClass,
            pLink: f.pLink,
            pMile: f.pMile,
            pRes: f.pRes,
            pComp: f.pComp,
            pGroup: f.pGroup,
            pParent: f.pParent,
            pOpen: f.pOpen,
            pDepend: f.pDepend,
            pDepType: f.pDepType,
            pCaption: f.pCaption,
            pNotes: f.pNotes,
            pBudgetday: f.pBudgetday,
            originalId: f.originalId,
          });
        if ((ii(), r.value.vTaskList.length === 0)) {
          (document.getElementById("gantt-chart").innerHTML = ""),
            (go.value = !0);
          return;
        }
        r.value.Draw(), Ba();
      }
      function Ba() {
        if (r.value)
          try {
            if (typeof r.value.setClickTask == "function")
              r.value.setClickTask(to);
            else if (typeof r.value.setEvents == "function")
              try {
                r.value.setEvents({
                  taskClick: to,
                  onTaskClick: to,
                  rowClick: to,
                  onClick: to,
                });
              } catch {}
            else
              typeof r.value.setEventsClickRow == "function" &&
                r.value.setEventsClickRow(to);
            r.value.vEventClickRow = to;
          } catch (J) {
            console.warn("Could not set click handler, using DOM fallback:", J);
          }
      }
      function to(...J) {
        const f = J[0].getAllData();
        So(f.pDataObject.originalId, 0);
      }
      function Td() {
        return {
          workingDaysMode: "weekdays",
          selectedItalianHolidays: [
            "natale",
            "stefano",
            "immacolata",
            "ferragosto",
            "capodanno",
            "epifania",
            "festa-liberazione",
            "festa-lavoro",
            "repubblica",
            "ognissanti",
          ],
          easterYears: [],
          customHolidays: [],
          easterEnabled: !0,
        };
      }
      function Id(J) {
        switch (J.workingDaysMode) {
          case "all":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !0,
              sunday: !0,
            };
          case "custom":
            const W = J.workingDays || [];
            return {
              sunday: W.includes(0),
              monday: W.includes(1),
              tuesday: W.includes(2),
              wednesday: W.includes(3),
              thursday: W.includes(4),
              friday: W.includes(5),
              saturday: W.includes(6),
            };
          case "weekdays":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
          default:
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
        }
      }
      function ii() {
        if (!r.value) return;
        const J = Td();
        r.value.setUseHolidaySystem(!0),
          typeof r.value.setAutoAdjustTaskDates == "function" &&
            r.value.setAutoAdjustTaskDates(!1);
        const f = Id(J);
        r.value.setCustomWorkingDays(f),
          zo.value.forEach((W) => {
            r.value.addHoliday({
              id: W.id,
              name: W.name,
              startDate: W.startDate,
              endDate: W.endDate,
              recurring: !1,
            });
          });
      }
      let Ga = null;
      function Cd() {
        if (!r.value) return;
        const J = r.value.vFormat;
        Ga !== null && Ga !== J && li(), (Ga = J);
      }
      let Ha = null,
        kr = null;
      function Od() {
        Ha && clearInterval(Ha), (Ha = fl(Cd, 1e3)), xd();
      }
      function xd() {
        kr && kr.disconnect(),
          Po(() => {
            const J = a.value;
            J &&
              ((kr = new MutationObserver((f) => {
                f.forEach((W) => {
                  W.type === "childList" &&
                    W.target.id &&
                    W.target.id.includes("gantt") &&
                    li();
                });
              })),
              kr.observe(J, { childList: !0, subtree: !0, attributes: !1 }));
          });
      }
      function li() {
        Po(() => {
          setTimeout(() => {
            Ba();
          }, 300);
        });
      }
      mi(j, (J, f) => {
        (!f.length && J.length) || (J.length && f.length)
          ? (S.value = !1)
          : J.length || (S.value = !0);
      });
      const za = async (J, f) => {
          (await Nd(J, f)).forEach((oe) => {
            zo.value.push({
              id: oe.id,
              name: oe.name,
              startDate: new Date(oe.startDate),
              endDate: new Date(oe.endDate),
              recurring: oe.recurring,
            });
          });
        },
        Nd = async (J, f) => {
          let W = { start: J, end: f };
          try {
            const { data: oe, status: ee } = await De(
              ne.public.apiBaseurl + "holiday/isholidaydate/1/1",
              { method: "POST", body: W },
            );
            return oe;
          } catch (oe) {
            console.log(oe);
            let ee = JSON.parse(oe.data).errors.title;
            return (
              console.log("catcherr", oe.data),
              (ge.value = { text: ee, type: "danger", show: !0 }),
              !1
            );
          }
        };
      return (
        qn(async () => {
          (b.value = !0),
            await si(),
            X.query.storico
              ? ((Le.value = !0), await oi(X.query.storico))
              : ((Le.value = !1), await hn()),
            await za(P.value.startdate, P.value.enddate),
            Po(async () => {
              await bd(), Rr(), Od();
            }),
            ja(),
            window.addEventListener("resize", ja),
            await Yu(),
            await Xu(),
            await Wu(),
            await Ju(),
            X.query.storico ||
              (await sn(),
              (je.value.includes(w.value.id) == !0 ||
                w.value.role == "S" ||
                w.value.role == "A" ||
                w.value.hasinvoice == 1) &&
                ((ze.value = !0), await Ku()),
              (w.value.role == "S" ||
                ((w.value.role == "A" || je.value.includes(w.value.id) == !0) &&
                  P.value.status != "D")) &&
                (Tt.value = !0),
              (w.value.role == "S" ||
                ((w.value.role == "A" || je.value.includes(w.value.id) == !0) &&
                  P.value.status != "D")) &&
                (Me.value = !0),
              (b.value = !1));
          const J = document.querySelector(".v-data-table tbody");
          ye.create(J, {
            handle: ".drag-handle",
            animation: 150,
            ghostClass: "drag-ghost",
            onEnd: async (f) => {
              const W = se.value.splice(f.oldIndex, 1)[0];
              se.value.splice(f.newIndex, 0, W), ni();
              let ee = {
                newOrder: se.value.map((fe) => fe.id),
                project: X.query.id,
              };
              try {
                const { data: fe, status: Q } = await De(
                  ne.public.apiBaseurl + "task/updateordertask",
                  { method: "POST", body: ee },
                );
              } catch (fe) {
                let Q = JSON.parse(fe.data).errors.title;
                console.log("catcherr", fe.data),
                  (ge.value = { text: Q, type: "danger", show: !0 });
                return;
              }
            },
          });
        }),
        Zd(() => {
          window.removeEventListener("resize", ja);
        }),
        mi(
          () => X.query,
          async (J, f) => {
            J.storico
              ? ((Le.value = !0),
                await oi(X.query.storico),
                await za(P.value.startdate, P.value.enddate))
              : ((Le.value = !1),
                await hn(),
                await za(P.value.startdate, P.value.enddate),
                await sn(),
                (je.value.includes(w.value.id) == !0 ||
                  w.value.role == "S" ||
                  w.value.role == "A" ||
                  w.value.hasinvoice == 1) &&
                  (ze.value = !0),
                (w.value.role == "S" ||
                  ((w.value.role == "A" ||
                    je.value.includes(w.value.id) == !0) &&
                    P.value.status != "D")) &&
                  (Tt.value = !0),
                (w.value.role == "S" ||
                  ((w.value.role == "A" ||
                    je.value.includes(w.value.id) == !0) &&
                    P.value.status != "D")) &&
                  (Me.value = !0));
          },
        ),
        (J, f) => {
          const W = dl,
            oe = qd,
            ee = Ec,
            fe = Lc,
            Q = Wc,
            st = cf,
            Ae = vf,
            Kt = If,
            To = Nf;
          return (
            U(),
            me("div", dv, [
              pn(
                I(
                  "div",
                  cv,
                  [
                    f[144] || (f[144] = I("br", null, null, -1)),
                    g(
                      En,
                      { rounded: !1, elevation: "8", color: "#f7f7f9" },
                      {
                        default: m(() => [
                          g(
                            An,
                            { class: "text-h5" },
                            {
                              default: m(() => [
                                d(Le)
                                  ? (U(),
                                    me("span", fv, [
                                      k(
                                        "Storico del " +
                                          z(
                                            new Date(d(Ar)).toLocaleDateString(
                                              "it-it",
                                            ),
                                          ) +
                                          " " +
                                          z(
                                            new Date(d(Ar)).toLocaleTimeString(
                                              "it-it",
                                            ),
                                          ),
                                        1,
                                      ),
                                      f[38] ||
                                        (f[38] = I("br", null, null, -1)),
                                    ]))
                                  : Z("", !0),
                                g(
                                  Bt,
                                  {
                                    color: d(P).color,
                                    variant: "elevated",
                                    label: "",
                                    size: "x-large",
                                    class: "pa-3 mr-3",
                                  },
                                  {
                                    default: m(() => [k(z(d(P).code), 1)]),
                                    _: 1,
                                  },
                                  8,
                                  ["color"],
                                ),
                                k(z(d(P).name) + " ", 1),
                                I("div", pv, [
                                  d(P).startdate != null && d(P).startdate != ""
                                    ? (U(),
                                      me(
                                        "span",
                                        mv,
                                        "INIZIO: " +
                                          z(
                                            new Date(
                                              d(P).startdate,
                                            ).toLocaleDateString("it-IT"),
                                          ),
                                        1,
                                      ))
                                    : Z("", !0),
                                  f[39] || (f[39] = k()),
                                  d(P).enddate != null && d(P).enddate != ""
                                    ? (U(),
                                      me("span", vv, [
                                        d(Ee) < 30
                                          ? (U(),
                                            le(
                                              cc,
                                              {
                                                key: 0,
                                                width: "20",
                                                floating: "",
                                                icon: "mdi-alert-outline",
                                                color:
                                                  d(Ee) < 15
                                                    ? "red"
                                                    : d(Ee) < 30
                                                      ? "orange"
                                                      : "",
                                              },
                                              {
                                                default: m(() => [
                                                  k(
                                                    " - FINE: " +
                                                      z(
                                                        new Date(
                                                          d(P).enddate,
                                                        ).toLocaleDateString(
                                                          "it-IT",
                                                        ),
                                                      ),
                                                    1,
                                                  ),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ["color"],
                                            ))
                                          : (U(),
                                            me(
                                              "span",
                                              gv,
                                              " - FINE: " +
                                                z(
                                                  new Date(
                                                    d(P).enddate,
                                                  ).toLocaleDateString("it-IT"),
                                                ),
                                              1,
                                            )),
                                      ]))
                                    : Z("", !0),
                                ]),
                              ]),
                              _: 1,
                            },
                          ),
                          g(bn, null, {
                            default: m(() => [
                              g(
                                Ge,
                                { class: "mt-2" },
                                {
                                  default: m(() => [
                                    g(ae, null, {
                                      default: m(() => [
                                        f[46] ||
                                          (f[46] = I(
                                            "b",
                                            null,
                                            "DESCRIZIONE:",
                                            -1,
                                          )),
                                        k(" " + z(d(P).description), 1),
                                        f[47] ||
                                          (f[47] = I("br", null, null, -1)),
                                        d(zt) != null
                                          ? (U(),
                                            me("span", hv, [
                                              f[42] ||
                                                (f[42] = I(
                                                  "b",
                                                  null,
                                                  "CLIENTE:",
                                                  -1,
                                                )),
                                              k(" " + z(d(zt).name) + " ", 1),
                                              d(P).referent
                                                ? (U(),
                                                  me("span", yv, [
                                                    f[40] ||
                                                      (f[40] = k(" | ", -1)),
                                                    f[41] ||
                                                      (f[41] = I(
                                                        "b",
                                                        null,
                                                        "Referente:",
                                                        -1,
                                                      )),
                                                    k(
                                                      " " + z(d(P).referent),
                                                      1,
                                                    ),
                                                  ]))
                                                : Z("", !0),
                                              f[43] ||
                                                (f[43] = I(
                                                  "br",
                                                  null,
                                                  null,
                                                  -1,
                                                )),
                                            ]))
                                          : Z("", !0),
                                        d(eo) != ""
                                          ? (U(),
                                            me("span", Ev, [
                                              f[44] ||
                                                (f[44] = I(
                                                  "b",
                                                  null,
                                                  "RESPONSABILE/I DI PROGETTO:",
                                                  -1,
                                                )),
                                              k(" " + z(d(eo)), 1),
                                              f[45] ||
                                                (f[45] = I(
                                                  "br",
                                                  null,
                                                  null,
                                                  -1,
                                                )),
                                            ]))
                                          : Z("", !0),
                                      ]),
                                      _: 1,
                                    }),
                                    g(
                                      ae,
                                      { style: { "text-align": "right" } },
                                      {
                                        default: m(() => [
                                          g(
                                            Bt,
                                            {
                                              class: "mb-1",
                                              color: It(d(P).status),
                                              variant: "elevated",
                                              label: "",
                                            },
                                            {
                                              default: m(() => [
                                                k(z(d(ie)), 1),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["color"],
                                          ),
                                          f[51] ||
                                            (f[51] = I("br", null, null, -1)),
                                          d(P).noteaddendum
                                            ? (U(),
                                              me("span", bv, [
                                                f[48] ||
                                                  (f[48] = I(
                                                    "b",
                                                    null,
                                                    "INFO AGGIUNTIVE:",
                                                    -1,
                                                  )),
                                                k(
                                                  " " + z(d(P).noteaddendum),
                                                  1,
                                                ),
                                                f[49] ||
                                                  (f[49] = I(
                                                    "br",
                                                    null,
                                                    null,
                                                    -1,
                                                  )),
                                              ]))
                                            : Z("", !0),
                                          d(P).signaturedate != null &&
                                          d(P).signaturedate != "" &&
                                          d(P).status == "A"
                                            ? (U(),
                                              me("span", Sv, [
                                                f[50] ||
                                                  (f[50] = I(
                                                    "b",
                                                    null,
                                                    "FIRMA CONTRATTO:",
                                                    -1,
                                                  )),
                                                k(
                                                  " " +
                                                    z(
                                                      new Date(
                                                        d(P).signaturedate,
                                                      ).toLocaleDateString(
                                                        "it-IT",
                                                      ),
                                                    ),
                                                  1,
                                                ),
                                              ]))
                                            : Z("", !0),
                                          f[52] ||
                                            (f[52] = I("br", null, null, -1)),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(Ge, null, {
                                default: m(() => [
                                  g(ae, null, {
                                    default: m(() => [
                                      I("div", Tv, [
                                        d(Le)
                                          ? (U(),
                                            le(
                                              Oe,
                                              {
                                                key: 1,
                                                onClick:
                                                  f[1] ||
                                                  (f[1] = (R) =>
                                                    ed(d(P).id, 0)),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Visualizza",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[57] ||
                                                          (f[57] = [
                                                            k("mdi-eye", -1),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[58] ||
                                                    (f[58] = k(
                                                      " Visualizza ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ))
                                          : (U(),
                                            le(
                                              Oe,
                                              {
                                                key: 0,
                                                onClick:
                                                  f[0] ||
                                                  (f[0] = (R) =>
                                                    qu(d(P).id, 0)),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Modifica",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  d(Me) == !0
                                                    ? (U(),
                                                      me("span", Iv, [
                                                        g(
                                                          Se,
                                                          { size: "x-large" },
                                                          {
                                                            default: m(() => [
                                                              ...(f[53] ||
                                                                (f[53] = [
                                                                  k(
                                                                    "mdi-pencil",
                                                                    -1,
                                                                  ),
                                                                ])),
                                                            ]),
                                                            _: 1,
                                                          },
                                                        ),
                                                        f[54] ||
                                                          (f[54] = k(
                                                            " Modifica",
                                                            -1,
                                                          )),
                                                      ]))
                                                    : (U(),
                                                      me("span", Cv, [
                                                        g(
                                                          Se,
                                                          { size: "x-large" },
                                                          {
                                                            default: m(() => [
                                                              ...(f[55] ||
                                                                (f[55] = [
                                                                  k(
                                                                    "mdi-eye",
                                                                    -1,
                                                                  ),
                                                                ])),
                                                            ]),
                                                            _: 1,
                                                          },
                                                        ),
                                                        f[56] ||
                                                          (f[56] = k(
                                                            " Visualizza",
                                                            -1,
                                                          )),
                                                      ])),
                                                ]),
                                                _: 1,
                                              },
                                            )),
                                      ]),
                                      d(Le)
                                        ? Z("", !0)
                                        : (U(),
                                          me("div", Ov, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[2] ||
                                                  (f[2] = (R) =>
                                                    nd(d(P).id, 0)),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Valori Economici",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[59] ||
                                                          (f[59] = [
                                                            k(
                                                              "mdi-currency-eur",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[60] ||
                                                    (f[60] = k(
                                                      " Valori Economici ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ])),
                                      d(Le)
                                        ? (U(),
                                          me("div", xv, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[3] ||
                                                  (f[3] = (R) =>
                                                    od(d(P).id, 0)),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Valori Economici",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[61] ||
                                                          (f[61] = [
                                                            k(
                                                              "mdi-currency-eur",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[62] ||
                                                    (f[62] = k(
                                                      " Valori Economici ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]))
                                        : Z("", !0),
                                      !d(Le) && d(Tt) == !0
                                        ? (U(),
                                          me("div", Nv, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[4] || (f[4] = (R) => Qu()),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Crea storico",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[63] ||
                                                          (f[63] = [
                                                            k(
                                                              "mdi-history",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[64] ||
                                                    (f[64] = k(
                                                      " Crea storico ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]))
                                        : Z("", !0),
                                      d(Le)
                                        ? Z("", !0)
                                        : (U(),
                                          me("div", wv, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[5] || (f[5] = (R) => rd()),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Visualizza storico",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[65] ||
                                                          (f[65] = [
                                                            k(
                                                              "mdi-clipboard-text-clock-outline",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[66] ||
                                                    (f[66] = k(
                                                      " Visualizza storico ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ])),
                                      d(Le)
                                        ? Z("", !0)
                                        : (U(),
                                          me("div", Dv, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[6] || (f[6] = (R) => ad()),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Riepilogo Economics",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    {
                                                      size: "x-large",
                                                      class: "mr-2",
                                                    },
                                                    {
                                                      default: m(() => [
                                                        ...(f[67] ||
                                                          (f[67] = [
                                                            k(
                                                              "mdi-monitor-dashboard",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[68] ||
                                                    (f[68] = k(
                                                      " Riepilogo Economics ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ])),
                                      d(Le)
                                        ? (U(),
                                          me("div", Av, [
                                            g(
                                              Oe,
                                              {
                                                onClick:
                                                  f[7] || (f[7] = (R) => Pu()),
                                                class: "ms-2",
                                                size: "small",
                                                text: "Torna al progetto",
                                                variant: "outlined",
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { size: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[69] ||
                                                          (f[69] = [
                                                            k(
                                                              "mdi-arrow-left",
                                                              -1,
                                                            ),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[70] ||
                                                    (f[70] = k(
                                                      " Torna al progetto ",
                                                      -1,
                                                    )),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]))
                                        : Z("", !0),
                                      d(Le)
                                        ? (U(),
                                          me("div", Pv, [
                                            g(
                                              Oe,
                                              {
                                                class: "ms-2",
                                                size: "small",
                                                text: "Esporta",
                                                variant: "outlined",
                                                onClick: md,
                                              },
                                              {
                                                default: m(() => [
                                                  g(
                                                    Se,
                                                    { class: "x-large" },
                                                    {
                                                      default: m(() => [
                                                        ...(f[71] ||
                                                          (f[71] = [
                                                            k("mdi-export", -1),
                                                          ])),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ),
                                                  f[72] ||
                                                    (f[72] = k(" XLS", -1)),
                                                ]),
                                                _: 1,
                                              },
                                            ),
                                          ]))
                                        : Z("", !0),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }),
                              g(
                                Ge,
                                { class: "mt-0" },
                                {
                                  default: m(() => [
                                    g(ae, null, {
                                      default: m(() => [
                                        d(ze) && !d(Le)
                                          ? (U(),
                                            me("div", Rv, [
                                              g(
                                                Oe,
                                                {
                                                  onClick:
                                                    f[8] ||
                                                    (f[8] = (R) => Ru()),
                                                  class: "ms-2",
                                                  size: "small",
                                                  text: "Fatture Attive",
                                                  variant: "outlined",
                                                },
                                                {
                                                  default: m(() => [
                                                    g(
                                                      Se,
                                                      { size: "x-large" },
                                                      {
                                                        default: m(() => [
                                                          ...(f[73] ||
                                                            (f[73] = [
                                                              k(
                                                                "mdi-invoice-text-plus-outline",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                    f[74] ||
                                                      (f[74] = k(
                                                        " Fatture Attive ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]))
                                          : Z("", !0),
                                        d(ze) && !d(Le)
                                          ? (U(),
                                            me("div", kv, [
                                              g(
                                                Oe,
                                                {
                                                  onClick:
                                                    f[9] ||
                                                    (f[9] = (R) => ku()),
                                                  class: "ms-2",
                                                  size: "small",
                                                  text: "Fatture Passive",
                                                  variant: "outlined",
                                                },
                                                {
                                                  default: m(() => [
                                                    g(
                                                      Se,
                                                      { size: "x-large" },
                                                      {
                                                        default: m(() => [
                                                          ...(f[75] ||
                                                            (f[75] = [
                                                              k(
                                                                "mdi-invoice-text-minus-outline",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                    f[76] ||
                                                      (f[76] = k(
                                                        " Fatture Passive ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]))
                                          : Z("", !0),
                                        d(ze) && !d(Le)
                                          ? (U(),
                                            me("div", Vv, [
                                              g(
                                                Oe,
                                                {
                                                  onClick:
                                                    f[10] ||
                                                    (f[10] = (R) => Vu()),
                                                  class: "ms-2",
                                                  size: "small",
                                                  text: "Pagamenti",
                                                  variant: "outlined",
                                                },
                                                {
                                                  default: m(() => [
                                                    g(
                                                      Se,
                                                      { size: "x-large" },
                                                      {
                                                        default: m(() => [
                                                          ...(f[77] ||
                                                            (f[77] = [
                                                              k(
                                                                "mdi-invoice-text-clock-outline",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                    f[78] ||
                                                      (f[78] = k(
                                                        "Tranches Pagamento ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]))
                                          : Z("", !0),
                                        d(w)?.viewkpi == 1 &&
                                        !d(Le) &&
                                        d(P).type != "F"
                                          ? (U(),
                                            me("div", Mv, [
                                              g(
                                                Oe,
                                                {
                                                  onClick:
                                                    f[11] ||
                                                    (f[11] = (R) => yd()),
                                                  class: "ms-2",
                                                  size: "small",
                                                  text: "Kpi di Progetto",
                                                  variant: "outlined",
                                                },
                                                {
                                                  default: m(() => [
                                                    g(
                                                      Se,
                                                      { size: "x-large" },
                                                      {
                                                        default: m(() => [
                                                          ...(f[79] ||
                                                            (f[79] = [
                                                              k(
                                                                "mdi-chart-line",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                    f[80] ||
                                                      (f[80] = k(
                                                        "Kpi di Progetto ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]))
                                          : Z("", !0),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(Ge, null, {
                                default: m(() => [
                                  g(ae, null, {
                                    default: m(() => [
                                      g(
                                        fc,
                                        {
                                          modelValue: d(h),
                                          "onUpdate:modelValue":
                                            f[12] ||
                                            (f[12] = (R) =>
                                              Ve(h) ? (h.value = R) : null),
                                          multiple: "",
                                          rounded: "0",
                                          class: "no-radius",
                                        },
                                        {
                                          default: m(() => [
                                            d(Y).length > 0 && !d(Le)
                                              ? (U(),
                                                le(
                                                  yi,
                                                  {
                                                    key: 0,
                                                    value: "sponsor",
                                                    rounded: "0",
                                                    class: "no-radius",
                                                  },
                                                  {
                                                    default: m(() => [
                                                      g(Ei, null, {
                                                        default: m(() => [
                                                          k(
                                                            "SPONSOR (" +
                                                              z(d(Y).length) +
                                                              ")",
                                                            1,
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                      g(bi, null, {
                                                        default: m(() => [
                                                          g(
                                                            Wn,
                                                            {
                                                              headers: D,
                                                              items: d(Y),
                                                              "item-value":
                                                                "Sponsor.id",
                                                              density:
                                                                "compact",
                                                              "hide-default-footer":
                                                                "",
                                                              "items-per-page":
                                                                -1,
                                                            },
                                                            {
                                                              "item.Sponsor.contractdate":
                                                                m(
                                                                  ({
                                                                    item: R,
                                                                  }) => [
                                                                    R.Sponsor
                                                                      .contractdate !==
                                                                      null &&
                                                                    R.Sponsor
                                                                      .contractdate !==
                                                                      ""
                                                                      ? (U(),
                                                                        me(
                                                                          "span",
                                                                          Lv,
                                                                          z(
                                                                            new Date(
                                                                              R.Sponsor.contractdate,
                                                                            ).toLocaleDateString(
                                                                              "it-IT",
                                                                            ),
                                                                          ),
                                                                          1,
                                                                        ))
                                                                      : (U(),
                                                                        me(
                                                                          "span",
                                                                          Fv,
                                                                          "-",
                                                                        )),
                                                                  ],
                                                                ),
                                                              "item.Sponsor.note":
                                                                m(
                                                                  ({
                                                                    item: R,
                                                                  }) => [
                                                                    R.Sponsor
                                                                      .note
                                                                      ? (U(),
                                                                        me(
                                                                          "span",
                                                                          $v,
                                                                          z(
                                                                            R
                                                                              .Sponsor
                                                                              .note,
                                                                          ),
                                                                          1,
                                                                        ))
                                                                      : (U(),
                                                                        me(
                                                                          "span",
                                                                          Uv,
                                                                          "-",
                                                                        )),
                                                                  ],
                                                                ),
                                                              _: 1,
                                                            },
                                                            8,
                                                            ["items"],
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ))
                                              : Z("", !0),
                                            d(Yo).length > 0 &&
                                            d(ze) == !0 &&
                                            !d(Le)
                                              ? (U(),
                                                le(
                                                  yi,
                                                  {
                                                    key: 1,
                                                    value: "tranche",
                                                    rounded: "0",
                                                    class: "no-radius",
                                                  },
                                                  {
                                                    default: m(() => [
                                                      g(Ei, null, {
                                                        default: m(() => [
                                                          k(
                                                            "TRANCHES (" +
                                                              z(d(Yo).length) +
                                                              ")",
                                                            1,
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                      g(bi, null, {
                                                        default: m(() => [
                                                          g(
                                                            Wn,
                                                            {
                                                              headers: H,
                                                              items: d(Yo),
                                                              "item-value":
                                                                "id",
                                                              density:
                                                                "compact",
                                                              "hide-default-footer":
                                                                "",
                                                              "items-per-page":
                                                                -1,
                                                            },
                                                            {
                                                              "item.sponsor": m(
                                                                ({
                                                                  item: R,
                                                                }) => [
                                                                  R.sponsor_id !=
                                                                  0
                                                                    ? (U(),
                                                                      me(
                                                                        "span",
                                                                        jv,
                                                                        z(
                                                                          d(
                                                                            Y,
                                                                          ).find(
                                                                            (
                                                                              ct,
                                                                            ) =>
                                                                              ct
                                                                                .Sponsor
                                                                                .client_id ===
                                                                              R.sponsor,
                                                                          )
                                                                            ?.Client
                                                                            .name ||
                                                                            "-",
                                                                        ),
                                                                        1,
                                                                      ))
                                                                    : (U(),
                                                                      me(
                                                                        "span",
                                                                        Bv,
                                                                        "-",
                                                                      )),
                                                                ],
                                                              ),
                                                              "item.total": m(
                                                                ({
                                                                  item: R,
                                                                }) => [
                                                                  k(
                                                                    z(
                                                                      new Intl.NumberFormat(
                                                                        "it-IT",
                                                                        {
                                                                          style:
                                                                            "currency",
                                                                          useGrouping:
                                                                            !0,
                                                                          currency:
                                                                            "EUR",
                                                                        },
                                                                      ).format(
                                                                        Number(
                                                                          R.total,
                                                                        ),
                                                                      ),
                                                                    ),
                                                                    1,
                                                                  ),
                                                                ],
                                                              ),
                                                              "item.previewdate":
                                                                m(
                                                                  ({
                                                                    item: R,
                                                                  }) => [
                                                                    k(
                                                                      z(
                                                                        R.previewdate
                                                                          ? new Date(
                                                                              R.previewdate,
                                                                            ).toLocaleDateString(
                                                                              "it-IT",
                                                                            )
                                                                          : "-",
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                              "item.emessa": m(
                                                                ({
                                                                  item: R,
                                                                }) => [
                                                                  g(
                                                                    Bt,
                                                                    {
                                                                      label: "",
                                                                      color:
                                                                        R.emessa ==
                                                                        1
                                                                          ? "success"
                                                                          : "warning",
                                                                      size: "small",
                                                                      variant:
                                                                        "flat",
                                                                    },
                                                                    {
                                                                      default:
                                                                        m(
                                                                          () => [
                                                                            k(
                                                                              z(
                                                                                R.emessa ==
                                                                                  1
                                                                                  ? "SI"
                                                                                  : "NO",
                                                                              ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["color"],
                                                                  ),
                                                                ],
                                                              ),
                                                              "item.invoicedate":
                                                                m(
                                                                  ({
                                                                    item: R,
                                                                  }) => [
                                                                    k(
                                                                      z(
                                                                        R.invoicedate
                                                                          ? new Date(
                                                                              R.invoicedate,
                                                                            ).toLocaleDateString(
                                                                              "it-IT",
                                                                            )
                                                                          : "-",
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                              _: 1,
                                                            },
                                                            8,
                                                            ["items"],
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ))
                                              : Z("", !0),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["modelValue"],
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                    ),
                    g(
                      Ge,
                      { class: "mt-3 mb-3" },
                      {
                        default: m(() => [
                          d(P).enddate != null
                            ? (U(),
                              le(
                                ae,
                                {
                                  key: 0,
                                  cols:
                                    d(P).status == "A" || d(P).status == "C"
                                      ? 3
                                      : 4,
                                  class: "d-flex",
                                },
                                {
                                  default: m(() => [
                                    g(
                                      En,
                                      { class: "flex-grow-1", elevation: "8" },
                                      {
                                        default: m(() => [
                                          g(
                                            An,
                                            { class: "text-overline" },
                                            {
                                              default: m(() => [
                                                f[81] ||
                                                  (f[81] = k(
                                                    " Giorni rimanenti ",
                                                    -1,
                                                  )),
                                                I("div", Gv, z(d(Ee)), 1),
                                                I(
                                                  "div",
                                                  Hv,
                                                  " Scadenza: " +
                                                    z(
                                                      new Date(
                                                        d(P).enddate,
                                                      ).toLocaleDateString(
                                                        "it-IT",
                                                      ),
                                                    ),
                                                  1,
                                                ),
                                                f[82] ||
                                                  (f[82] = I(
                                                    "br",
                                                    {
                                                      style: {
                                                        "line-height": "10px",
                                                      },
                                                    },
                                                    null,
                                                    -1,
                                                  )),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                          f[83] ||
                                            (f[83] = I("br", null, null, -1)),
                                          g(
                                            bn,
                                            {
                                              style: { "padding-top": "20px" },
                                            },
                                            {
                                              default: m(() => [
                                                g(
                                                  Mr,
                                                  {
                                                    color: "green-darken-3",
                                                    height: "22",
                                                    "model-value": d(Be),
                                                    rounded: "lg",
                                                  },
                                                  null,
                                                  8,
                                                  ["model-value"],
                                                ),
                                                I("div", zv, [
                                                  I(
                                                    "span",
                                                    Xv,
                                                    z(
                                                      new Date(
                                                        d(P).startdate,
                                                      ).toLocaleDateString(
                                                        "it-IT",
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                  I(
                                                    "span",
                                                    Kv,
                                                    z(
                                                      new Date(
                                                        d(P).enddate,
                                                      ).toLocaleDateString(
                                                        "it-IT",
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                ]),
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
                                ["cols"],
                              ))
                            : Z("", !0),
                          d(P).status == "A" || d(P).status == "C"
                            ? (U(),
                              le(
                                ae,
                                {
                                  key: 1,
                                  cols: d(P).enddate != null ? 3 : 4,
                                  class: "d-flex",
                                },
                                {
                                  default: m(() => [
                                    g(
                                      En,
                                      { class: "flex-grow-1", elevation: "8" },
                                      {
                                        default: m(() => [
                                          g(
                                            An,
                                            { class: "text-overline" },
                                            {
                                              default: m(() => [
                                                f[84] ||
                                                  (f[84] = k(
                                                    " Progresso Task ",
                                                    -1,
                                                  )),
                                                d(_) != 0
                                                  ? (U(),
                                                    me(
                                                      "div",
                                                      Wv,
                                                      z(
                                                        new Intl.NumberFormat(
                                                          "it-IT",
                                                          {
                                                            maximumFractionDigits: 2,
                                                          },
                                                        ).format(
                                                          (parseInt(d(ce)) *
                                                            100) /
                                                            parseInt(d(_)),
                                                        ),
                                                      ) + " %",
                                                      1,
                                                    ))
                                                  : (U(), me("div", Yv, "0 %")),
                                                I(
                                                  "div",
                                                  Jv,
                                                  z(d(be)) + " rimanenti ",
                                                  1,
                                                ),
                                                f[85] ||
                                                  (f[85] = I(
                                                    "br",
                                                    {
                                                      style: {
                                                        "line-height": "10px",
                                                      },
                                                    },
                                                    null,
                                                    -1,
                                                  )),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                          f[86] ||
                                            (f[86] = I("br", null, null, -1)),
                                          g(
                                            bn,
                                            {
                                              style: { "padding-top": "20px" },
                                            },
                                            {
                                              default: m(() => [
                                                g(
                                                  Mr,
                                                  {
                                                    color: "red-darken-3",
                                                    height: "22",
                                                    "model-value":
                                                      (d(ce) * 100) / d(_),
                                                    rounded: "lg",
                                                  },
                                                  null,
                                                  8,
                                                  ["model-value"],
                                                ),
                                                I("div", Qv, [
                                                  I(
                                                    "span",
                                                    Zv,
                                                    z(d(ce)) + " chiusi ",
                                                    1,
                                                  ),
                                                  I(
                                                    "span",
                                                    qv,
                                                    z(d(_)) + " totali ",
                                                    1,
                                                  ),
                                                ]),
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
                                ["cols"],
                              ))
                            : Z("", !0),
                          g(
                            ae,
                            {
                              cols:
                                d(P).enddate != null
                                  ? d(P).status == "A" || d(P).status == "C"
                                    ? 3
                                    : 4
                                  : d(P).status == "A" || d(P).status == "C"
                                    ? 4
                                    : 6,
                              class: "d-flex",
                            },
                            {
                              default: m(() => [
                                g(
                                  En,
                                  { class: "flex-grow-1", elevation: "8" },
                                  {
                                    default: m(() => [
                                      g(
                                        An,
                                        { class: "text-overline" },
                                        {
                                          default: m(() => [
                                            f[91] ||
                                              (f[91] = k(
                                                " Costo Stimato ",
                                                -1,
                                              )),
                                            I("div", _v, [
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      I(
                                                        "span",
                                                        Nt(R, {
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                        }),
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            Number(
                                                              d(P)
                                                                .costoproposta,
                                                            ),
                                                          ),
                                                        ),
                                                        17,
                                                      ),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[87] ||
                                                      (f[87] = I(
                                                        "div",
                                                        null,
                                                        " Costo proposta ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              I("div", eg, [
                                                d(P).costopropostamodified !=
                                                  d(P).costoproposta &&
                                                d(P).costopropostamodified !=
                                                  null &&
                                                d(P).costopropostamodified !=
                                                  null &&
                                                d(P).costopropostamodified !=
                                                  "" &&
                                                (d(P).status == "A" ||
                                                  d(P).status == "C" ||
                                                  $a.includes(d(P).id))
                                                  ? (U(),
                                                    le(
                                                      _t,
                                                      {
                                                        key: 0,
                                                        interactive: "",
                                                      },
                                                      {
                                                        activator: m(
                                                          ({ props: R }) => [
                                                            I(
                                                              "span",
                                                              Nt(
                                                                {
                                                                  style: {
                                                                    "font-size":
                                                                      "20px",
                                                                    "line-height":
                                                                      "30px",
                                                                    cursor:
                                                                      "pointer",
                                                                  },
                                                                },
                                                                R,
                                                              ),
                                                              "(" +
                                                                z(
                                                                  new Intl.NumberFormat(
                                                                    "it-IT",
                                                                    {
                                                                      style:
                                                                        "currency",
                                                                      useGrouping:
                                                                        !0,
                                                                      currency:
                                                                        "EUR",
                                                                    },
                                                                  ).format(
                                                                    d(P)
                                                                      .costopropostamodified,
                                                                  ),
                                                                ) +
                                                                ")",
                                                              17,
                                                            ),
                                                          ],
                                                        ),
                                                        default: m(() => [
                                                          f[88] ||
                                                            (f[88] = I(
                                                              "div",
                                                              null,
                                                              [
                                                                k(
                                                                  " Costo proposta con le modifiche in corso in base",
                                                                ),
                                                                I("br"),
                                                                k(
                                                                  "alle assegnazioni dei profili professionali e alle giornate di lavoro ",
                                                                ),
                                                              ],
                                                              -1,
                                                            )),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ))
                                                  : Z("", !0),
                                              ]),
                                            ]),
                                            I("div", tg, [
                                              f[89] ||
                                                (f[89] = I(
                                                  "b",
                                                  null,
                                                  "Costo attuale",
                                                  -1,
                                                )),
                                              f[90] ||
                                                (f[90] = I(
                                                  "br",
                                                  null,
                                                  null,
                                                  -1,
                                                )),
                                              k(
                                                " " +
                                                  z(
                                                    new Intl.NumberFormat(
                                                      "it-IT",
                                                      {
                                                        style: "currency",
                                                        useGrouping: !0,
                                                        currency: "EUR",
                                                      },
                                                    ).format(
                                                      d(P).costopropostareal,
                                                    ),
                                                  ) +
                                                  " costo attuale ",
                                                1,
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      g(bn, null, {
                                        default: m(() => [
                                          g(
                                            Mr,
                                            {
                                              color: "orange-darken-3",
                                              height: "22",
                                              "model-value":
                                                (d(P).costopropostareal * 100) /
                                                d(P).costoproposta,
                                              rounded: "lg",
                                            },
                                            null,
                                            8,
                                            ["model-value"],
                                          ),
                                          I("div", ng, [
                                            I(
                                              "span",
                                              og,
                                              z(
                                                new Intl.NumberFormat("it-IT", {
                                                  style: "currency",
                                                  useGrouping: !0,
                                                  currency: "EUR",
                                                }).format(
                                                  d(P).costopropostareal,
                                                ),
                                              ),
                                              1,
                                            ),
                                            I(
                                              "span",
                                              rg,
                                              z(
                                                new Intl.NumberFormat("it-IT", {
                                                  style: "currency",
                                                  useGrouping: !0,
                                                  currency: "EUR",
                                                }).format(d(P).costoproposta),
                                              ),
                                              1,
                                            ),
                                          ]),
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
                            ["cols"],
                          ),
                          g(
                            ae,
                            {
                              cols:
                                d(P).enddate != null
                                  ? d(P).status == "A" || d(P).status == "C"
                                    ? 3
                                    : 4
                                  : d(P).status == "A" || d(P).status == "C"
                                    ? 4
                                    : 6,
                              class: "d-flex",
                            },
                            {
                              default: m(() => [
                                g(
                                  En,
                                  { class: "flex-grow-1", elevation: "8" },
                                  {
                                    default: m(() => [
                                      g(
                                        An,
                                        { class: "text-overline" },
                                        {
                                          default: m(() => [
                                            f[101] ||
                                              (f[101] = k(" Preventivo ", -1)),
                                            I("div", ag, [
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      I(
                                                        "span",
                                                        Nt(R, {
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                        }),
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            Number(d(gn)),
                                                          ),
                                                        ),
                                                        17,
                                                      ),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[92] ||
                                                      (f[92] = I(
                                                        "div",
                                                        null,
                                                        " Totale preventivo compreso di arrotondamenti (incrementi e sconti) ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              d(P).newtotaleproposta &&
                                              d(P).newtotaleproposta != 0
                                                ? (U(),
                                                  le(
                                                    _t,
                                                    { key: 0, interactive: "" },
                                                    {
                                                      activator: m(
                                                        ({ props: R }) => [
                                                          I(
                                                            "span",
                                                            Nt(R, {
                                                              style: {
                                                                cursor:
                                                                  "pointer",
                                                                float: "right",
                                                              },
                                                            }),
                                                            z(
                                                              new Intl.NumberFormat(
                                                                "it-IT",
                                                                {
                                                                  style:
                                                                    "currency",
                                                                  useGrouping:
                                                                    !0,
                                                                  currency:
                                                                    "EUR",
                                                                },
                                                              ).format(
                                                                Number(
                                                                  d(P)
                                                                    .newtotaleproposta,
                                                                ),
                                                              ),
                                                            ),
                                                            17,
                                                          ),
                                                        ],
                                                      ),
                                                      default: m(() => [
                                                        f[93] ||
                                                          (f[93] = I(
                                                            "div",
                                                            null,
                                                            " Nuovo Totale preventivo approvato dal cliente ",
                                                            -1,
                                                          )),
                                                      ]),
                                                      _: 1,
                                                    },
                                                  ))
                                                : Z("", !0),
                                              I("div", sg, [
                                                g(
                                                  _t,
                                                  { interactive: "" },
                                                  {
                                                    activator: m(
                                                      ({ props: R }) => [
                                                        I(
                                                          "span",
                                                          Nt(R, {
                                                            style: {
                                                              cursor: "pointer",
                                                            },
                                                          }),
                                                          z(
                                                            new Intl.NumberFormat(
                                                              "it-IT",
                                                              {
                                                                style:
                                                                  "currency",
                                                                useGrouping: !0,
                                                                currency: "EUR",
                                                              },
                                                            ).format(
                                                              d(P)
                                                                .totaleproposta,
                                                            ),
                                                          ),
                                                          17,
                                                        ),
                                                      ],
                                                    ),
                                                    default: m(() => [
                                                      f[94] ||
                                                        (f[94] = I(
                                                          "div",
                                                          null,
                                                          " Totale preventivo senza arrotondamenti (incrementi e sconti) ",
                                                          -1,
                                                        )),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                g(
                                                  _t,
                                                  { interactive: "" },
                                                  {
                                                    activator: m(
                                                      ({ props: R }) => [
                                                        d(P)
                                                          .totalepropostamodified !=
                                                          d(P).totaleproposta &&
                                                        d(P)
                                                          .totalepropostamodified !=
                                                          null &&
                                                        d(P)
                                                          .totalepropostamodified !=
                                                          null &&
                                                        d(P)
                                                          .totalepropostamodified !=
                                                          ""
                                                          ? (U(),
                                                            me(
                                                              "span",
                                                              Nt(
                                                                { key: 0 },
                                                                R,
                                                                {
                                                                  style: {
                                                                    cursor:
                                                                      "pointer",
                                                                  },
                                                                },
                                                              ),
                                                              " (" +
                                                                z(
                                                                  new Intl.NumberFormat(
                                                                    "it-IT",
                                                                    {
                                                                      style:
                                                                        "currency",
                                                                      useGrouping:
                                                                        !0,
                                                                      currency:
                                                                        "EUR",
                                                                    },
                                                                  ).format(
                                                                    d(P)
                                                                      .totalepropostamodified,
                                                                  ),
                                                                ) +
                                                                ")",
                                                              17,
                                                            ))
                                                          : Z("", !0),
                                                      ],
                                                    ),
                                                    default: m(() => [
                                                      f[95] ||
                                                        (f[95] = I(
                                                          "div",
                                                          null,
                                                          [
                                                            k(
                                                              " Totale preventivo senza arrotondamenti con le modifiche in corso in base",
                                                            ),
                                                            I("br"),
                                                            k(
                                                              "alle assegnazioni dei profili professionali e alle giornate di lavoro ",
                                                            ),
                                                          ],
                                                          -1,
                                                        )),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                f[96] ||
                                                  (f[96] = I(
                                                    "span",
                                                    { class: "text-h6" },
                                                    null,
                                                    -1,
                                                  )),
                                              ]),
                                            ]),
                                            I("div", ig, [
                                              f[99] ||
                                                (f[99] = I(
                                                  "b",
                                                  null,
                                                  "Margine",
                                                  -1,
                                                )),
                                              f[100] ||
                                                (f[100] = I(
                                                  "br",
                                                  null,
                                                  null,
                                                  -1,
                                                )),
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      I(
                                                        "span",
                                                        Nt(R, {
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                        }),
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(P)
                                                              ._margineprogetto,
                                                          ),
                                                        ),
                                                        17,
                                                      ),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[97] ||
                                                      (f[97] = I(
                                                        "div",
                                                        null,
                                                        " Margine stimato (Totale accettato dal cliente - Costo stimato) ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      d(P)
                                                        ._margineprogettomodified !=
                                                      d(P)._margineprogetto
                                                        ? (U(),
                                                          me(
                                                            "span",
                                                            Nt({ key: 0 }, R, {
                                                              style: {
                                                                cursor:
                                                                  "pointer",
                                                              },
                                                            }),
                                                            " (" +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  d(P)
                                                                    ._margineprogettomodified,
                                                                ),
                                                              ) +
                                                              " )",
                                                            17,
                                                          ))
                                                        : Z("", !0),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[98] ||
                                                      (f[98] = I(
                                                        "div",
                                                        null,
                                                        " Margine con modifiche in corso (Totale accettato dal cliente - Costo con modifiche in corso) ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                      ),
                                      g(bn, null, {
                                        default: m(() => [
                                          g(
                                            Mr,
                                            {
                                              color: "blue",
                                              height: "22",
                                              "model-value":
                                                (d(P)._margineprogettoreal *
                                                  100) /
                                                d(P)._margineprogetto,
                                              rounded: "lg",
                                            },
                                            null,
                                            8,
                                            ["model-value"],
                                          ),
                                          I("div", lg, [
                                            I("span", ug, [
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      d(P)
                                                        ._margineprogettomodified !=
                                                      d(P)._margineprogetto
                                                        ? (U(),
                                                          me(
                                                            "span",
                                                            Nt({ key: 0 }, R, {
                                                              style: {
                                                                cursor:
                                                                  "pointer",
                                                              },
                                                            }),
                                                            z(
                                                              new Intl.NumberFormat(
                                                                "it-IT",
                                                                {
                                                                  style:
                                                                    "currency",
                                                                  useGrouping:
                                                                    !0,
                                                                  currency:
                                                                    "EUR",
                                                                },
                                                              ).format(
                                                                d(P)
                                                                  ._margineprogettoreal,
                                                              ),
                                                            ),
                                                            17,
                                                          ))
                                                        : Z("", !0),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[102] ||
                                                      (f[102] = I(
                                                        "div",
                                                        null,
                                                        " Margine reale: Totale accettato dal cliente - Costo reale (ore imputate) ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            I("span", dg, [
                                              g(
                                                _t,
                                                { interactive: "" },
                                                {
                                                  activator: m(
                                                    ({ props: R }) => [
                                                      I(
                                                        "span",
                                                        Nt(R, {
                                                          style: {
                                                            cursor: "pointer",
                                                          },
                                                        }),
                                                        z(
                                                          new Intl.NumberFormat(
                                                            "it-IT",
                                                            {
                                                              style: "currency",
                                                              useGrouping: !0,
                                                              currency: "EUR",
                                                            },
                                                          ).format(
                                                            d(P)
                                                              ._margineprogetto,
                                                          ),
                                                        ),
                                                        17,
                                                      ),
                                                    ],
                                                  ),
                                                  default: m(() => [
                                                    f[103] ||
                                                      (f[103] = I(
                                                        "div",
                                                        null,
                                                        " Margine stimato (Totale accettato dal cliente - Costo stimato) ",
                                                        -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                          ]),
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
                            ["cols"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    f[145] ||
                      (f[145] = I(
                        "div",
                        { style: { float: "left" } },
                        [I("h2", null, "Task")],
                        -1,
                      )),
                    I("div", cg, [
                      g(Se, null, {
                        default: m(() => [
                          ...(f[104] || (f[104] = [k("mdi-table", -1)])),
                        ]),
                        _: 1,
                      }),
                      f[108] || (f[108] = k("/", -1)),
                      g(Se, null, {
                        default: m(() => [
                          ...(f[105] || (f[105] = [k("mdi-chart-gantt", -1)])),
                        ]),
                        _: 1,
                      }),
                      g(
                        d(lc),
                        {
                          modelValue: d(te),
                          "onUpdate:modelValue":
                            f[13] ||
                            (f[13] = (R) => (Ve(te) ? (te.value = R) : null)),
                          "on-label": "Gantt",
                          "off-label": "Tabella",
                          class: "big-toggle mb-4",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                      d(Le)
                        ? Z("", !0)
                        : (U(),
                          le(
                            Oe,
                            {
                              key: 0,
                              class: "ml-2",
                              color: "primary",
                              onClick: vd,
                            },
                            {
                              default: m(() => [
                                g(
                                  Se,
                                  { class: "mr-3" },
                                  {
                                    default: m(() => [
                                      ...(f[106] ||
                                        (f[106] = [k("mdi-export", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                f[107] || (f[107] = k(" XLS", -1)),
                              ]),
                              _: 1,
                            },
                          )),
                    ]),
                    !d(Le) && d(Me) == !0
                      ? (U(),
                        me("div", fg, [
                          g(
                            Oe,
                            {
                              onClick: f[14] || (f[14] = (R) => So(0, 0)),
                              color: "green",
                            },
                            {
                              default: m(() => [
                                g(Se, null, {
                                  default: m(() => [
                                    ...(f[109] ||
                                      (f[109] = [k("mdi-plus", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                f[110] || (f[110] = k("Crea Task", -1)),
                              ]),
                              _: 1,
                            },
                          ),
                        ]))
                      : Z("", !0),
                    !d(Le) && d(Me) == !0
                      ? (U(),
                        me("div", pg, [
                          g(
                            Oe,
                            {
                              onClick: f[15] || (f[15] = (R) => cd()),
                              color: "green",
                            },
                            {
                              default: m(() => [
                                g(Se, null, {
                                  default: m(() => [
                                    ...(f[111] ||
                                      (f[111] = [k("mdi-plus", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                f[112] ||
                                  (f[112] = k("Crea Task Multipli", -1)),
                              ]),
                              _: 1,
                            },
                          ),
                        ]))
                      : Z("", !0),
                    f[146] ||
                      (f[146] = I(
                        "div",
                        { style: { clear: "both" } },
                        null,
                        -1,
                      )),
                    d(Le)
                      ? Z("", !0)
                      : (U(),
                        le(
                          Ge,
                          { key: 2, "no-gutters": "" },
                          {
                            default: m(() => [
                              g(
                                ae,
                                {
                                  cols: "12",
                                  sm: "12",
                                  md: d(w).role == "S" ? 3 : 4,
                                },
                                {
                                  default: m(() => [
                                    g(
                                      Ze,
                                      {
                                        class: "ma-2",
                                        density: "compact",
                                        multiple: "",
                                        modelValue: d(xn),
                                        "onUpdate:modelValue":
                                          f[16] ||
                                          (f[16] = (R) =>
                                            Ve(xn) ? (xn.value = R) : null),
                                        items: d(L),
                                        autocomplete: "off",
                                        label: "Profili Professionali",
                                        variant: "outlined",
                                        "item-title": "name",
                                        "item-value": "code",
                                        "return-object": "",
                                        clearable: "",
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
                                8,
                                ["md"],
                              ),
                              g(
                                ae,
                                { cols: "12", sm: "12", md: "3" },
                                {
                                  default: m(() => [
                                    g(
                                      Ze,
                                      {
                                        class: "ma-2",
                                        density: "compact",
                                        multiple: "",
                                        modelValue: d(an),
                                        "onUpdate:modelValue":
                                          f[17] ||
                                          (f[17] = (R) =>
                                            Ve(an) ? (an.value = R) : null),
                                        items: d(B),
                                        autocomplete: "off",
                                        label: "Assegnatari",
                                        variant: "outlined",
                                        "item-title": "name",
                                        "item-value": "id",
                                        "return-object": "",
                                        clearable: "",
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
                              g(
                                ae,
                                { cols: "12", sm: "12", md: "2" },
                                {
                                  default: m(() => [
                                    g(
                                      Ze,
                                      {
                                        class: "ma-2",
                                        density: "compact",
                                        modelValue: d(Zt),
                                        "onUpdate:modelValue":
                                          f[18] ||
                                          (f[18] = (R) =>
                                            Ve(Zt) ? (Zt.value = R) : null),
                                        items: rn,
                                        label: "Esterno/Interno",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "name",
                                        "item-value": "code",
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(
                                ae,
                                { cols: "12", sm: "12", md: "2" },
                                {
                                  default: m(() => [
                                    g(
                                      Ze,
                                      {
                                        class: "ma-2",
                                        density: "compact",
                                        modelValue: d(F),
                                        "onUpdate:modelValue":
                                          f[19] ||
                                          (f[19] = (R) =>
                                            Ve(F) ? (F.value = R) : null),
                                        items: x,
                                        label: "Stato",
                                        autocomplete: "off",
                                        variant: "outlined",
                                        "item-title": "name",
                                        "item-value": "code",
                                        clearable: "",
                                        "no-data-text":
                                          "Nessun risultato trovato",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(
                                ae,
                                { cols: "12", sm: "12", md: "1" },
                                {
                                  default: m(() => [
                                    g(
                                      dc,
                                      {
                                        modelValue: d(ho),
                                        "onUpdate:modelValue":
                                          f[20] ||
                                          (f[20] = (R) =>
                                            Ve(ho) ? (ho.value = R) : null),
                                        class: "ml-4",
                                        variant: "outlined",
                                        label: "Eliminati",
                                      },
                                      null,
                                      8,
                                      ["modelValue"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(
                                ae,
                                { cols: "12", sm: "12", md: "1" },
                                {
                                  default: m(() => [
                                    g(
                                      Oe,
                                      {
                                        class: "ma-2",
                                        onClick: f[21] || (f[21] = (R) => sn()),
                                      },
                                      {
                                        default: m(() => [
                                          g(Se, null, {
                                            default: m(() => [
                                              ...(f[113] ||
                                                (f[113] = [
                                                  k("mdi-magnify", -1),
                                                ])),
                                            ]),
                                            _: 1,
                                          }),
                                          f[114] || (f[114] = k("Cerca", -1)),
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
                        )),
                    pn(
                      I(
                        "div",
                        {
                          ref_key: "ganttContainer",
                          ref: a,
                          id: "gantt-chart",
                          style: { zoom: "1.3", width: "100%", height: "auto" },
                        },
                        null,
                        512,
                      ),
                      [[mn, d(te)]],
                    ),
                    pn(
                      I(
                        "div",
                        null,
                        [
                          f[118] || (f[118] = I("h5", null, "Legenda", -1)),
                          g(
                            Bt,
                            {
                              label: "",
                              color: "green",
                              variant: "flat",
                              class: "mr-2",
                            },
                            {
                              default: m(() => [
                                ...(f[115] ||
                                  (f[115] = [k("Stato Chiuso", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          g(
                            Bt,
                            {
                              label: "",
                              color: "blue",
                              variant: "flat",
                              class: "mr-2",
                            },
                            {
                              default: m(() => [
                                ...(f[116] ||
                                  (f[116] = [k("Stato Completato", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          g(
                            Bt,
                            {
                              label: "",
                              color: "orange",
                              variant: "flat",
                              class: "mr-2",
                            },
                            {
                              default: m(() => [
                                ...(f[117] ||
                                  (f[117] = [k("Stato Aperto", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                        ],
                        512,
                      ),
                      [[mn, d(te) && !d(go)]],
                    ),
                    pn(I("div", null, "Nessun task presente", 512), [
                      [mn, d(te) && d(go)],
                    ]),
                    pn(
                      g(
                        Wn,
                        {
                          "show-select": !d(Le),
                          density: "compact",
                          items: d(se),
                          headers: d(xu),
                          search: d(ke),
                          "items-per-page": -1,
                          "sort-by": d(j),
                          "onUpdate:sortBy":
                            f[25] ||
                            (f[25] = (R) => (Ve(j) ? (j.value = R) : null)),
                          "hide-default-footer": "",
                          modelValue: d(s),
                          "onUpdate:modelValue":
                            f[26] ||
                            (f[26] = (R) => (Ve(s) ? (s.value = R) : null)),
                          "row-props": Au,
                          "return-object": "",
                        },
                        {
                          top: m(() => [
                            g(
                              et,
                              {
                                density: "compact",
                                modelValue: d(ke),
                                "onUpdate:modelValue":
                                  f[22] ||
                                  (f[22] = (R) =>
                                    Ve(ke) ? (ke.value = R) : null),
                                class: "pa-2",
                                variant: "outlined",
                                label: "Cerca",
                                autocomplete: "off",
                              },
                              null,
                              8,
                              ["modelValue"],
                            ),
                          ]),
                          "item.idproj": m(({ item: R }) => [
                            g(
                              et,
                              {
                                "model-value": Mu(R),
                                "onUpdate:modelValue": (ct) => Lu(R, ct),
                                type: "number",
                                density: "compact",
                                "hide-details": "",
                                variant: "outlined",
                                style: { width: "70px" },
                                min: "1",
                                max: d(se).length,
                              },
                              null,
                              8,
                              ["model-value", "onUpdate:modelValue", "max"],
                            ),
                          ]),
                          "item.type": m(({ item: R }) => [
                            R.type == "F" || R.type == "P" || R.type == "V"
                              ? (U(),
                                le(
                                  Bt,
                                  {
                                    key: 0,
                                    color:
                                      R.type == "F"
                                        ? "purple"
                                        : R.type == "P"
                                          ? "blue"
                                          : R.type == "V"
                                            ? "orange"
                                            : "",
                                    variant: "elevated",
                                    label: "",
                                    size: "x-small",
                                    class: "mr-3",
                                  },
                                  {
                                    default: m(() => [
                                      k(
                                        z(
                                          R.type == "F"
                                            ? "Fisso"
                                            : R.type == "P"
                                              ? "Personale"
                                              : R.type == "V"
                                                ? "Variabile"
                                                : "",
                                        ),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["color"],
                                ))
                              : Z("", !0),
                          ]),
                          "item.shortname": m(({ item: R }) => [
                            I("div", mg, [
                              d(S)
                                ? (U(),
                                  le(
                                    Se,
                                    {
                                      key: 0,
                                      class: "drag-handle mr-2",
                                      style: { cursor: "grab" },
                                    },
                                    {
                                      default: m(() => [
                                        ...(f[119] ||
                                          (f[119] = [k(" mdi-drag ", -1)])),
                                      ]),
                                      _: 1,
                                    },
                                  ))
                                : Z("", !0),
                              I(
                                "div",
                                {
                                  style: Gt(
                                    R.status == "D" ? "color:red;" : "",
                                  ),
                                },
                                [
                                  R.internalactivity == 0
                                    ? (U(),
                                      le(
                                        Bt,
                                        {
                                          key: 0,
                                          color: "#00506e",
                                          variant: "elevated",
                                          label: "",
                                          size: "x-small",
                                          class: "mr-3",
                                        },
                                        {
                                          default: m(() => [
                                            ...(f[120] ||
                                              (f[120] = [k(" EXT ", -1)])),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : Z("", !0),
                                  I(
                                    "span",
                                    { title: R.supplier_name },
                                    z(R.shortname),
                                    9,
                                    vg,
                                  ),
                                ],
                                4,
                              ),
                            ]),
                          ]),
                          "item.startdate": m(({ item: R }) => [
                            I(
                              "span",
                              null,
                              z(
                                R.startdate &&
                                  R.startdate != null &&
                                  R.startdate != "null"
                                  ? new Date(R.startdate).toLocaleDateString(
                                      "it-IT",
                                    )
                                  : "",
                              ),
                              1,
                            ),
                          ]),
                          "item.enddate": m(({ item: R }) => [
                            I(
                              "span",
                              null,
                              z(
                                R.enddate &&
                                  R.enddate != null &&
                                  R.enddate != "null"
                                  ? new Date(R.enddate).toLocaleDateString(
                                      "it-IT",
                                    )
                                  : "",
                              ),
                              1,
                            ),
                          ]),
                          "item.hours": m(({ item: R }) => [
                            I(
                              "span",
                              null,
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  useGrouping: !0,
                                }).format(R.hours / 8),
                              ),
                              1,
                            ),
                          ]),
                          "item.nhours": m(({ item: R }) => [
                            R.nhours
                              ? (U(),
                                me(
                                  "span",
                                  gg,
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      useGrouping: !0,
                                    }).format(R.nhours),
                                  ) + " h",
                                  1,
                                ))
                              : (U(), me("span", hg, "0 h")),
                          ]),
                          "item.status": m(({ item: R }) => [
                            I(
                              "span",
                              {
                                style: Gt(
                                  R.status == "A"
                                    ? "color:orange"
                                    : R.status == "P"
                                      ? "color:#2196F3"
                                      : "color:green",
                                ),
                              },
                              z(
                                x
                                  .filter(({ code: ct }) => ct === R.status)
                                  .map(({ name: ct }) => ct)
                                  .slice(0, 1)
                                  .shift(),
                              ),
                              5,
                            ),
                          ]),
                          "item.iscr": m(({ item: R }) => [
                            R.iscr == 1
                              ? (U(),
                                le(
                                  Se,
                                  {
                                    key: 0,
                                    class: "me-2",
                                    size: "large",
                                    color: "green",
                                    title: "CR",
                                  },
                                  {
                                    default: m(() => [
                                      ...(f[121] ||
                                        (f[121] = [k("mdi-check-bold", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                          ]),
                          "item.price": m(({ item: R }) => [
                            k(
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(R.price),
                              ),
                              1,
                            ),
                          ]),
                          "item.cost": m(({ item: R }) => [
                            k(
                              z(
                                new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  useGrouping: !0,
                                  currency: "EUR",
                                }).format(R.cost),
                              ),
                              1,
                            ),
                          ]),
                          "item.changerequest_id": m(({ item: R }) => [
                            R.changerequest_id > 0 &&
                            R.changerequest_status == "R"
                              ? (U(),
                                le(
                                  Bt,
                                  {
                                    key: 0,
                                    label: "",
                                    color: "red",
                                    tonal: "",
                                    size: "small",
                                    class: "mr-2",
                                  },
                                  {
                                    default: m(() => [
                                      k(z(R.changerequest_name), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ))
                              : Z("", !0),
                            R.changerequest_id > 0 &&
                            R.changerequest_status == "A"
                              ? (U(),
                                le(
                                  Bt,
                                  {
                                    key: 1,
                                    label: "",
                                    color: "green",
                                    tonal: "",
                                    size: "small",
                                    class: "mr-2",
                                  },
                                  {
                                    default: m(() => [
                                      k(z(R.changerequest_name), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ))
                              : Z("", !0),
                            R.changerequest_id > 0 &&
                            R.changerequest_status == "P"
                              ? (U(),
                                le(
                                  Bt,
                                  {
                                    key: 2,
                                    label: "",
                                    color: "orange",
                                    tonal: "",
                                    size: "small",
                                    class: "mr-2",
                                  },
                                  {
                                    default: m(() => [
                                      k(z(R.changerequest_name), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ))
                              : Z("", !0),
                          ]),
                          "item.esecutivo": m(({ item: R }) => [
                            R.esecutivo == 1
                              ? (U(),
                                le(
                                  Se,
                                  {
                                    key: 0,
                                    class: "me-2",
                                    size: "large",
                                    color: "green",
                                    title: "Esecutivo",
                                  },
                                  {
                                    default: m(() => [
                                      ...(f[122] ||
                                        (f[122] = [k("mdi-check-bold", -1)])),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : Z("", !0),
                          ]),
                          "item.supplier_id": m(({ item: R }) => [
                            k(z(d(pe)[R.supplier_id]), 1),
                          ]),
                          "item.userprofile_id": m(({ item: R }) => [
                            k(z(d(M)[R.userprofile_id]), 1),
                          ]),
                          "item.actions": m(({ item: R }) => [
                            g(
                              tc,
                              { "offset-y": "" },
                              {
                                activator: m(({ props: ct }) => [
                                  g(
                                    Oe,
                                    Nt(
                                      {
                                        icon: "mdi-dots-vertical",
                                        variant: "text",
                                      },
                                      ct,
                                    ),
                                    null,
                                    16,
                                  ),
                                ]),
                                default: m(() => [
                                  I("div", yg, [
                                    g(
                                      gi,
                                      {
                                        elevation: "0",
                                        class: "pa-2 menutop",
                                        "bg-color": "#fff",
                                        style: { border: "1px solid #ccc" },
                                      },
                                      {
                                        default: m(() => [
                                          R.note != null && R.note != ""
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 0,
                                                  onClick: (ct) => gd(R.note),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[123] ||
                                                            (f[123] = [
                                                              k(
                                                                "mdi-information-outline",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[124] ||
                                                            (f[124] = [
                                                              k("Info", -1),
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
                                            : Z("", !0),
                                          R.originaluserprofile_id != 0 &&
                                          R.userprofile_id != 0
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 1,
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[125] ||
                                                            (f[125] = [
                                                              k(
                                                                "mdi-account-clock-outline",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                        title:
                                                          "Profilo professionale originario al momento della conferma del progetto",
                                                      },
                                                      {
                                                        default: m(() => [
                                                          k(
                                                            z(
                                                              d(M)[
                                                                R
                                                                  .originaluserprofile_id
                                                              ],
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
                                                1024,
                                              ))
                                            : Z("", !0),
                                          !d(Le) && d(Me) == !0
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 2,
                                                  onClick: (ct) => So(R.id, 0),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[126] ||
                                                            (f[126] = [
                                                              k(
                                                                "mdi-pencil",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[127] ||
                                                            (f[127] = [
                                                              k("Modifica", -1),
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
                                            : Z("", !0),
                                          !d(Le) && d(Me) == !1
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 3,
                                                  onClick: (ct) => So(R.id, 0),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[128] ||
                                                            (f[128] = [
                                                              k("mdi-eye", -1),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[129] ||
                                                            (f[129] = [
                                                              k(
                                                                "Visualizza",
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
                                                8,
                                                ["onClick"],
                                              ))
                                            : Z("", !0),
                                          d(Le)
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 4,
                                                  onClick: (ct) => ud(R),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[130] ||
                                                            (f[130] = [
                                                              k("mdi-eye", -1),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[131] ||
                                                            (f[131] = [
                                                              k(
                                                                "Visualizza",
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
                                                8,
                                                ["onClick"],
                                              ))
                                            : Z("", !0),
                                          !d(Le) && d(Me) == !0
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 5,
                                                  onClick: (ct) => So(R.id, 1),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[132] ||
                                                            (f[132] = [
                                                              k(
                                                                "mdi-content-copy",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[133] ||
                                                            (f[133] = [
                                                              k("Duplica", -1),
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
                                            : Z("", !0),
                                          !d(Le) && d(Me) == !0
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 6,
                                                  onClick: (ct) => So(R.id, 2),
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      Se,
                                                      {
                                                        style: { opacity: "1" },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[134] ||
                                                            (f[134] = [
                                                              k(
                                                                "mdi-content-duplicate",
                                                                -1,
                                                              ),
                                                            ])),
                                                        ]),
                                                        _: 1,
                                                      },
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                        },
                                                      },
                                                      {
                                                        default: m(() => [
                                                          ...(f[135] ||
                                                            (f[135] = [
                                                              k(
                                                                "Duplica su progetto",
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
                                                8,
                                                ["onClick"],
                                              ))
                                            : Z("", !0),
                                          !d(Le) &&
                                          d(Me) == !0 &&
                                          R.status != "D" &&
                                          R.hashours == 0 &&
                                          R.haspinvoice == 0
                                            ? (U(),
                                              le(
                                                dn,
                                                {
                                                  key: 7,
                                                  dense: "",
                                                  exact: "",
                                                },
                                                {
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      {
                                                        style: {
                                                          "font-size": "14px",
                                                          cursor: "pointer",
                                                        },
                                                        onClick: (ct) =>
                                                          ri(R.id),
                                                      },
                                                      {
                                                        default: m(() => [
                                                          !d(Le) && d(Me) == !0
                                                            ? (U(),
                                                              le(
                                                                W,
                                                                {
                                                                  key: 0,
                                                                  button:
                                                                    "Elimina",
                                                                  onDelete: (
                                                                    ct,
                                                                  ) => ri(R.id),
                                                                  iconadelete:
                                                                    d(Mt),
                                                                  color: "red",
                                                                  text:
                                                                    "Vuoi veramente eliminare il task " +
                                                                    R.shortname +
                                                                    "?",
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "onDelete",
                                                                  "iconadelete",
                                                                  "text",
                                                                ],
                                                              ))
                                                            : Z("", !0),
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
                                            : Z("", !0),
                                          g(
                                            dn,
                                            { dense: "", exact: "" },
                                            {
                                              prepend: m(() => [
                                                g(
                                                  Se,
                                                  { style: { opacity: "1" } },
                                                  {
                                                    default: m(() => [
                                                      ...(f[136] ||
                                                        (f[136] = [
                                                          k(
                                                            "mdi-identifier",
                                                            -1,
                                                          ),
                                                        ])),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                              ]),
                                              default: m(() => [
                                                g(
                                                  yn,
                                                  {
                                                    style: {
                                                      "font-size": "14px",
                                                    },
                                                  },
                                                  {
                                                    default: m(() => [
                                                      k(z(R.id), 1),
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
                          bottom: m(() => [
                            !d(Le) && d(Me) == !0 && (d($) || d(C) || d(N))
                              ? (U(),
                                me("div", Eg, [
                                  d($)
                                    ? (U(),
                                      le(W, {
                                        key: 0,
                                        iconadelete: !1,
                                        onDelete: Zu,
                                        color: "red",
                                        text: "Vuoi veramente eliminare i task selezionati? Verranno eliminati solo i task che non hanno ore imputate o fatture associate",
                                        button: "Elimina Task selezionati",
                                      }))
                                    : Z("", !0),
                                  d(C)
                                    ? (U(),
                                      le(
                                        Oe,
                                        {
                                          key: 1,
                                          class: "ml-2",
                                          color: "orange",
                                          onClick:
                                            f[23] || (f[23] = (R) => Uu()),
                                        },
                                        {
                                          default: m(() => [
                                            g(Se, null, {
                                              default: m(() => [
                                                ...(f[137] ||
                                                  (f[137] = [
                                                    k(
                                                      "mdi-table-merge-cells",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                            f[138] ||
                                              (f[138] = k(
                                                " Unisci Task selezionati",
                                                -1,
                                              )),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : Z("", !0),
                                  d(N)
                                    ? (U(),
                                      le(
                                        Oe,
                                        {
                                          key: 2,
                                          class: "ml-2",
                                          color: "purple",
                                          onClick:
                                            f[24] || (f[24] = (R) => Bu()),
                                        },
                                        {
                                          default: m(() => [
                                            g(Se, null, {
                                              default: m(() => [
                                                ...(f[139] ||
                                                  (f[139] = [
                                                    k(
                                                      "mdi-close-box-outline",
                                                      -1,
                                                    ),
                                                  ])),
                                              ]),
                                              _: 1,
                                            }),
                                            f[140] ||
                                              (f[140] = k(
                                                " Chiudi Task selezionati",
                                                -1,
                                              )),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : Z("", !0),
                                ]))
                              : Z("", !0),
                            I("div", bg, [
                              f[141] ||
                                (f[141] = I(
                                  "b",
                                  null,
                                  "Totale task progetto",
                                  -1,
                                )),
                              k(
                                ": " +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      useGrouping: !0,
                                    }).format(d(_)),
                                  ),
                                1,
                              ),
                            ]),
                            I("div", Sg, [
                              f[142] ||
                                (f[142] = I(
                                  "b",
                                  null,
                                  "Totale giorni a budget",
                                  -1,
                                )),
                              k(
                                ": " +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      useGrouping: !0,
                                    }).format(d(Xt)),
                                  ) +
                                  " (" +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      useGrouping: !0,
                                    }).format(d(Ct)),
                                  ) +
                                  " interni) ",
                                1,
                              ),
                            ]),
                            I("div", Tg, [
                              f[143] ||
                                (f[143] = I(
                                  "b",
                                  null,
                                  "Totale giorni lavorati",
                                  -1,
                                )),
                              k(
                                ": " +
                                  z(
                                    new Intl.NumberFormat("it-IT", {
                                      useGrouping: !0,
                                    }).format(d(o)),
                                  ),
                                1,
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        [
                          "show-select",
                          "items",
                          "headers",
                          "search",
                          "sort-by",
                          "modelValue",
                        ],
                      ),
                      [[mn, !d(te)]],
                    ),
                  ],
                  512,
                ),
                [[mn, !d(b)]],
              ),
              pn(
                I(
                  "div",
                  Ig,
                  [
                    g(
                      rc,
                      { indeterminate: "", color: d(P).color, size: "180" },
                      null,
                      8,
                      ["color"],
                    ),
                  ],
                  512,
                ),
                [[mn, d(b)]],
              ),
              d(He)
                ? (U(),
                  le(
                    oe,
                    {
                      key: 0,
                      stati: Ke,
                      statiadmin: Cn,
                      statiuser: On,
                      clone: d(dt),
                      clients: d(Lt),
                      users: d(B),
                      dialoginsmod: d(He),
                      idrec: d(gt),
                      onClose: _u,
                    },
                    null,
                    8,
                    ["clone", "clients", "users", "dialoginsmod", "idrec"],
                  ))
                : Z("", !0),
              d(Fe)
                ? (U(),
                  le(
                    ee,
                    {
                      key: 1,
                      stati: Ke,
                      clients: d(Lt),
                      users: d(B),
                      dialoginsmod: d(Fe),
                      idrec: d(gt),
                      onClose: td,
                      history: d(Wo),
                    },
                    null,
                    8,
                    ["clients", "users", "dialoginsmod", "idrec", "history"],
                  ))
                : Z("", !0),
              d(Ue)
                ? (U(),
                  le(
                    fe,
                    {
                      key: 2,
                      caneditproject: d(Tt),
                      stati: Ke,
                      clone: d(dt),
                      clients: d(Lt),
                      users: d(B),
                      dialoginsmod: d(Ue),
                      idrec: d(gt),
                      onClose: ld,
                      statoprogetto: d(ie),
                    },
                    null,
                    8,
                    [
                      "caneditproject",
                      "clone",
                      "clients",
                      "users",
                      "dialoginsmod",
                      "idrec",
                      "statoprogetto",
                    ],
                  ))
                : Z("", !0),
              d(ut)
                ? (U(),
                  le(
                    Q,
                    {
                      key: 3,
                      stati: Ke,
                      clone: d(dt),
                      clients: d(Lt),
                      users: d(B),
                      dialoginsmod: d(ut),
                      idrec: d(gt),
                      onClose: id,
                      statoprogetto: d(ie),
                      history: d(Wo),
                    },
                    null,
                    8,
                    [
                      "clone",
                      "clients",
                      "users",
                      "dialoginsmod",
                      "idrec",
                      "statoprogetto",
                      "history",
                    ],
                  ))
                : Z("", !0),
              d(qe)
                ? (U(),
                  le(
                    st,
                    {
                      key: 4,
                      stati: Ke,
                      clone: d(q),
                      suppliers: d(re),
                      profiles: d(L),
                      users: d(B),
                      dialoginsmod: d(qe),
                      idrec: d(ht),
                      project: d(P),
                      onClose: pd,
                      activities: d(Te),
                    },
                    null,
                    8,
                    [
                      "clone",
                      "suppliers",
                      "profiles",
                      "users",
                      "dialoginsmod",
                      "idrec",
                      "project",
                      "activities",
                    ],
                  ))
                : Z("", !0),
              d(bt)
                ? (U(),
                  le(
                    Ae,
                    {
                      key: 5,
                      stati: Ke,
                      suppliers: d(re),
                      profiles: d(L),
                      users: d(B),
                      dialoginsmod: d(bt),
                      project: d(P),
                      onClose: fd,
                      activities: d(Te),
                    },
                    null,
                    8,
                    [
                      "suppliers",
                      "profiles",
                      "users",
                      "dialoginsmod",
                      "project",
                      "activities",
                    ],
                  ))
                : Z("", !0),
              d(St)
                ? (U(),
                  le(
                    Kt,
                    {
                      key: 6,
                      stati: Ke,
                      clone: d(q),
                      suppliers: d(re),
                      profiles: d(L),
                      users: d(B),
                      dialoginsmod: d(St),
                      idrec: d(ht),
                      project: d(P),
                      onClose: dd,
                      historytask: d(Ua),
                      activities: d(Te),
                    },
                    null,
                    8,
                    [
                      "clone",
                      "suppliers",
                      "profiles",
                      "users",
                      "dialoginsmod",
                      "idrec",
                      "project",
                      "historytask",
                      "activities",
                    ],
                  ))
                : Z("", !0),
              d(Dr)
                ? (U(),
                  le(
                    To,
                    {
                      key: 7,
                      caneditproject: d(Tt),
                      dialogvisualizzastorico: d(Dr),
                      project: d(P),
                      onClose: sd,
                    },
                    null,
                    8,
                    ["caneditproject", "dialogvisualizzastorico", "project"],
                  ))
                : Z("", !0),
              g(
                tn,
                {
                  modelValue: d(Eo),
                  "onUpdate:modelValue":
                    f[29] || (f[29] = (R) => (Ve(Eo) ? (Eo.value = R) : null)),
                  "max-width": "600px",
                  persistent: "",
                },
                {
                  default: m(() => [
                    g(
                      En,
                      { class: "pa-2" },
                      {
                        default: m(() => [
                          g(An, null, {
                            default: m(() => [
                              ...(f[147] ||
                                (f[147] = [
                                  k(" Chiusura Task selezionati ", -1),
                                ])),
                            ]),
                            _: 1,
                          }),
                          g(bn, null, {
                            default: m(() => [
                              ...(f[148] ||
                                (f[148] = [
                                  I(
                                    "b",
                                    null,
                                    "Sei sicuro di voler chiudere questi task?",
                                    -1,
                                  ),
                                ])),
                            ]),
                            _: 1,
                          }),
                          g(er, null, {
                            default: m(() => [
                              g(
                                Oe,
                                {
                                  color: "#A5161E",
                                  onClick: f[27] || (f[27] = (R) => Gu()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[149] ||
                                      (f[149] = [k("Annulla", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(en),
                              g(
                                Oe,
                                {
                                  color: "green",
                                  onClick: f[28] || (f[28] = (R) => Hu()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[150] ||
                                      (f[150] = [k("Chiudi Task", -1)])),
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
              g(
                tn,
                {
                  modelValue: d(yo),
                  "onUpdate:modelValue":
                    f[33] || (f[33] = (R) => (Ve(yo) ? (yo.value = R) : null)),
                  "max-width": "600px",
                  persistent: "",
                },
                {
                  default: m(() => [
                    g(
                      En,
                      { class: "pa-2" },
                      {
                        default: m(() => [
                          g(An, null, {
                            default: m(() => [
                              ...(f[151] ||
                                (f[151] = [
                                  k(" Unisci Task selezionati ", -1),
                                ])),
                            ]),
                            _: 1,
                          }),
                          g(bn, null, {
                            default: m(() => [
                              f[152] ||
                                (f[152] = I(
                                  "b",
                                  null,
                                  "Quale task vuoi mantenere come principale?",
                                  -1,
                                )),
                              f[153] ||
                                (f[153] = k(
                                  " Tutte le fatture passive imputate sugli altri task selezionati verranno unite a questo e i task verranno successivamente eliminati. ",
                                  -1,
                                )),
                              g(
                                as,
                                {
                                  modelValue: d(Nn),
                                  "onUpdate:modelValue":
                                    f[30] ||
                                    (f[30] = (R) =>
                                      Ve(Nn) ? (Nn.value = R) : null),
                                },
                                {
                                  default: m(() => [
                                    g(gi, null, {
                                      default: m(() => [
                                        (U(!0),
                                        me(
                                          ga,
                                          null,
                                          hs(
                                            d(Jo),
                                            (R) => (
                                              U(),
                                              le(
                                                dn,
                                                { key: R.id },
                                                {
                                                  prepend: m(() => [
                                                    g(
                                                      tr,
                                                      { value: R.id },
                                                      null,
                                                      8,
                                                      ["value"],
                                                    ),
                                                  ]),
                                                  default: m(() => [
                                                    g(
                                                      yn,
                                                      null,
                                                      {
                                                        default: m(() => [
                                                          I(
                                                            "b",
                                                            null,
                                                            z(R.nome),
                                                            1,
                                                          ),
                                                          k(
                                                            " - Costo: " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  R.costo,
                                                                ),
                                                              ) +
                                                              "- Prezzo: " +
                                                              z(
                                                                new Intl.NumberFormat(
                                                                  "it-IT",
                                                                  {
                                                                    style:
                                                                      "currency",
                                                                    useGrouping:
                                                                      !0,
                                                                    currency:
                                                                      "EUR",
                                                                  },
                                                                ).format(
                                                                  R.prezzo,
                                                                ),
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
                                                1024,
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
                                8,
                                ["modelValue"],
                              ),
                            ]),
                            _: 1,
                          }),
                          g(er, null, {
                            default: m(() => [
                              g(
                                Oe,
                                {
                                  color: "#A5161E",
                                  onClick: f[31] || (f[31] = (R) => ju()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[154] || (f[154] = [k("Chiudi", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              g(en),
                              g(
                                Oe,
                                {
                                  color: "green",
                                  onClick: f[32] || (f[32] = (R) => zu()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[155] || (f[155] = [k("Unisci", -1)])),
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
              g(
                tn,
                {
                  modelValue: d(Ko),
                  "onUpdate:modelValue":
                    f[35] || (f[35] = (R) => (Ve(Ko) ? (Ko.value = R) : null)),
                  "max-width": "800",
                  persistent: "",
                },
                {
                  default: m(() => [
                    g(
                      En,
                      { class: "pa-2" },
                      {
                        default: m(() => [
                          g(
                            An,
                            {
                              class: "pb-0 pageh3",
                              style: { display: "inline", float: "left" },
                            },
                            {
                              default: m(() => [
                                ...(f[156] ||
                                  (f[156] = [
                                    k(
                                      "Calcoli economici e KPI di Progetto",
                                      -1,
                                    ),
                                  ])),
                              ]),
                              _: 1,
                            },
                          ),
                          g(bn, null, {
                            default: m(() => [
                              g(
                                pc,
                                { striped: "even" },
                                {
                                  default: m(() => [
                                    I("tbody", null, [
                                      I("tr", null, [
                                        f[157] ||
                                          (f[157] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Ricavi presunti ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          Cg,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(u)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[158] ||
                                          (f[158] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Ricavi ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          Og,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(l)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[159] ||
                                          (f[159] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Costi presunti ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          xg,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(i)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[160] ||
                                          (f[160] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Costi ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          Ng,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(c)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[161] ||
                                          (f[161] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Primo Margine ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          wg,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(p)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[162] ||
                                          (f[162] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Margine di Progetto ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          Dg,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(y)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[163] ||
                                          (f[163] = I(
                                            "td",
                                            { class: "text-left" },
                                            " Margine Commerciale ",
                                            -1,
                                          )),
                                        I(
                                          "td",
                                          Ag,
                                          z(
                                            new Intl.NumberFormat("it-IT", {
                                              style: "currency",
                                              useGrouping: !0,
                                              currency: "EUR",
                                            }).format(d(E)),
                                          ),
                                          1,
                                        ),
                                      ]),
                                      I("tr", null, [
                                        f[164] ||
                                          (f[164] = I(
                                            "td",
                                            { class: "text-left" },
                                            " % di Margine ",
                                            -1,
                                          )),
                                        I("td", Pg, [
                                          d(v) >= 65
                                            ? (U(),
                                              me(
                                                "span",
                                                Rg,
                                                z(
                                                  new Intl.NumberFormat(
                                                    "it-IT",
                                                    {
                                                      maximumFractionDigits: 2,
                                                    },
                                                  ).format(d(v)),
                                                ) + " %",
                                                1,
                                              ))
                                            : Z("", !0),
                                          d(v) >= 31 && d(v) < 65
                                            ? (U(),
                                              me(
                                                "span",
                                                kg,
                                                z(
                                                  new Intl.NumberFormat(
                                                    "it-IT",
                                                    {
                                                      maximumFractionDigits: 2,
                                                    },
                                                  ).format(d(v)),
                                                ) + " %",
                                                1,
                                              ))
                                            : Z("", !0),
                                          d(v) < 31
                                            ? (U(),
                                              me(
                                                "span",
                                                Vg,
                                                z(
                                                  new Intl.NumberFormat(
                                                    "it-IT",
                                                    {
                                                      maximumFractionDigits: 2,
                                                    },
                                                  ).format(d(v)),
                                                ) + " %",
                                                1,
                                              ))
                                            : Z("", !0),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                              ),
                              f[165] ||
                                (f[165] = I(
                                  "div",
                                  {
                                    class:
                                      "d-flex flex-wrap ga-4 align-center mt-2",
                                  },
                                  [
                                    I("div", { class: "d-flex align-center" }, [
                                      I("div", {
                                        class: "legend-box bg-green",
                                      }),
                                      I("span", { class: "ml-2" }, [
                                        I("b", null, "> 65%"),
                                        k(" Progetto in salute."),
                                      ]),
                                    ]),
                                    I("div", { class: "d-flex align-center" }, [
                                      I("div", {
                                        class: "legend-box bg-amber",
                                      }),
                                      I("span", { class: "ml-2" }, [
                                        I("b", null, "31% - 64%"),
                                        k(
                                          " Performance accettabile ma da monitorare: il progetto si sta avvicinando a una situazione critica.",
                                        ),
                                      ]),
                                    ]),
                                    I("div", { class: "d-flex align-center" }, [
                                      I("div", { class: "legend-box bg-red" }),
                                      I("span", { class: "ml-2" }, [
                                        I("b", null, "< 30%"),
                                        k(
                                          " Progetto in perdita o a forte rischio: richiede intervento immediato.",
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  -1,
                                )),
                            ]),
                            _: 1,
                          }),
                          g(er, null, {
                            default: m(() => [
                              g(en),
                              g(
                                Oe,
                                {
                                  color: "#A5161E",
                                  onClick: f[34] || (f[34] = (R) => Ed()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[166] || (f[166] = [k("Chiudi", -1)])),
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
              g(
                tn,
                {
                  modelValue: d(Xo),
                  "onUpdate:modelValue":
                    f[37] || (f[37] = (R) => (Ve(Xo) ? (Xo.value = R) : null)),
                  "max-width": "400",
                  persistent: "",
                },
                {
                  default: m(() => [
                    g(
                      En,
                      { class: "pa-2" },
                      {
                        default: m(() => [
                          g(bn, null, {
                            default: m(() => [k(z(d(O)), 1)]),
                            _: 1,
                          }),
                          g(er, null, {
                            default: m(() => [
                              g(en),
                              g(
                                Oe,
                                {
                                  color: "#A5161E",
                                  onClick: f[36] || (f[36] = (R) => hd()),
                                },
                                {
                                  default: m(() => [
                                    ...(f[167] || (f[167] = [k("Chiudi", -1)])),
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
export { Ih as default };
