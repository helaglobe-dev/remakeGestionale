import {
  E as je,
  r as p,
  G as De,
  k as Ae,
  o as Re,
  J as y,
  y as c,
  C as n,
  D as f,
  z as U,
  B as a,
  A as Z,
  L as l,
  x as M,
  K as V,
  N as w,
  O as Ee,
  M as N,
  I as re,
  S as Me,
  T as Ye,
  Q as Ie,
  R as ze,
  n as Pe,
} from "./CYsiv7Qj.js";
import { $ as G } from "./BvG7V8Ak.js";
import { V as Ke } from "./MIubIMrV.js";
import { V as Y, a as u } from "./Bj0ZT2dB.js";
import { V as I } from "./BrCrqdgZ.js";
import { V as ue } from "./61Go5SWW.js";
import { V as Q } from "./DCAzZvgN.js";
import { V as H } from "./Da5kZyhM.js";
import { b as Fe } from "./CxBYvc7u.js";
import { V as h } from "./CZzf1ihi.js";
import { V as z } from "./Bx6RXzqb.js";
import { V as _ } from "./B51noTYL.js";
import { a as ie, V as S } from "./B_W9U9Wp.js";
import { V as ee } from "./BqujDEEl.js";
import { V as te } from "./Dlfzj7mx.js";
import { V as de, a as me, c as pe, d as ce } from "./sbneMOUU.js";
const Be = {
    class: "divlogin mt-6",
    style: {
      "background-color": "white",
      padding: "30px",
      "min-width": "300px",
      overflow: "auto",
    },
  },
  Te = { key: 0, class: "pb-10 pageh2" },
  Oe = { key: 1, class: "pb-10 pageh2" },
  $e = { key: 2, class: "pb-10 pageh2" },
  Le = { key: 3, class: "pb-10 pageh2" },
  Je = { class: "d-flex align-center ga-2" },
  Ge = { style: { display: "flex" } },
  it = {
    __name: "DialogInsModProject",
    props: {
      dialoginsmod: Boolean,
      idrec: Number,
      clients: Array,
      clone: Number,
      stati: Array,
      statiadmin: Array,
      statiuser: Array,
      users: Array,
    },
    emits: ["close"],
    setup(fe, { emit: ve }) {
      const { data: g } = je(),
        P = Pe(),
        ye = ve,
        s = fe,
        j = p(!0),
        Ve = p([
          { name: "Normale", code: "N" },
          { name: "Amministrativo", code: "A" },
          { name: "Ferie/Permessi/Malattia", code: "F" },
        ]),
        r = p(!1),
        K = p(!1),
        W = p([]),
        D = p([]),
        E = p(0),
        X = p([]),
        b = p(null),
        F = p(!1),
        B = p(!1),
        C = De("snackbar"),
        o = p({ id: 0, openstatus: !0, internalproject: !1, type: "N" }),
        v = p("S"),
        A = p(!1),
        R = p(!1),
        T = p([(d) => !!d || "Campo obbligatorio"]),
        le = p([
          (d) => (d != null && String(d).trim() !== "") || "Campo obbligatorio",
        ]),
        O = p(new Date().getMonth()),
        $ = p(new Date().getFullYear()),
        oe = () => ({ id: 0, sponsor: null, contractdate: null, note: null }),
        ge = Ae(() => s.users.filter((d) => !d.disabled)),
        k = p(Array.from({ length: 0 }, oe)),
        be = () => {
          k.value.push(oe());
        },
        we = (d) => {
          let e = { ...k.value[d] };
          k.value.push(e);
        },
        Ce = (d) => {
          k.value.splice(d, 1);
        };
      function L(d) {
        if (d != null && d != null) {
          const e = new Date(d);
          return (
            e.setMinutes(e.getMinutes() - e.getTimezoneOffset()),
            e.toISOString().split("T")[0]
          );
        } else return null;
      }
      const ke = async () => {
          X.value = [];
          const { data: d } = await G(
            P.public.apiBaseurl + "projectcolor/list",
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: m }) {
                console.log("Errore nella request:", m);
              },
              onResponseError({ request: e, response: t, options: m }) {
                C.value = {
                  text: "Errore caricamento colori",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: e, response: t, options: m }) {
                t._data.data.forEach((i) => {
                  let q = i.Projectcolor;
                  X.value.push({
                    name: q.id,
                    value: q.name != "" && q.name != null ? q.name : q.color,
                    color: q.color,
                  });
                });
              },
            },
          );
        },
        qe = async () => {
          const d = new Date(o.value.startdate),
            e = String(d.getMonth()).padStart(2, "0"),
            t = d.getFullYear();
          o.value.startdate != "" &&
            o.value.startdate != null &&
            (o.value.enddate == "" || o.value.enddate == null) &&
            ((O.value = e), ($.value = t));
        },
        xe = async () => {
          o.value.status != v.value && s.idrec > 0 && s.clone == 0
            ? (A.value = !0)
            : ae();
        },
        Ue = async () => {
          (A.value = !1), ae();
        },
        ae = async () => {
          typeof b.value == "string" ? (R.value = !0) : await ne();
        },
        Ne = async () => {
          (R.value = !1), await ne();
        },
        ne = async () => {
          j.value = !1;
          const d = Number(o.value.splitpercent) || 0,
            e = Number(o.value.splitpercent1) || 0;
          if (o.value.status == "I" && d + e !== 100) {
            (C.value = {
              text: "La somma delle due percentuali di split deve essere esattamente 100%.",
              type: "danger",
              show: !0,
            }),
              (j.value = !0);
            return;
          }
          for (const x of k.value) {
            if (typeof x.sponsor == "string") {
              alert(
                "Per favore seleziona uno sponsor esistente o cancella la riga sposnsor",
              ),
                (j.value = !0);
              return;
            }
            x.contractdate = L(x.contractdate);
          }
          let t = 0;
          s.clone == 1 || s.idrec == 0
            ? (t = 1)
            : (o.value.status != v.value && (t = 2),
              o.value.owners != D.value && (t = 3));
          let m = null,
            i = 0;
          typeof b.value == "string"
            ? ((m = b.value), (i = 1))
            : typeof b.value == "object" &&
              b.value !== null &&
              (m = b.value?.id),
            (o.value.status = v.value),
            (o.value.openstatus = o.value.openstatus == !0 ? "A" : "C"),
            (o.value.internalproject = o.value.internalproject == !0 ? 1 : 0),
            (o.value.client_id = m),
            (o.value.newcliente = i),
            (o.value.startdate = L(o.value?.startdate)),
            (o.value.enddate = L(o.value?.enddate)),
            (o.value.signaturedate = L(o.value?.signaturedate)),
            s.clone == 1 ? (o.value.cloneid = s.idrec) : (o.value.cloneid = 0);
          let q = {
            Project: o.value,
            Owners: D.value,
            clonetask: E.value == !0 ? 1 : 0,
            creastorico: t,
            sponsors: k.value,
          };
          try {
            const { data: x, status: se } = await G(
              P.public.apiBaseurl + "project/createedit",
              { method: "POST", body: q },
            );
            s.idrec == 0
              ? (C.value = {
                  text: "Creazione progetto completata",
                  type: "success",
                  show: !0,
                })
              : s.clone == 1
                ? (C.value = {
                    text: "Duplicazione progetto completata",
                    type: "success",
                    show: !0,
                  })
                : (C.value = {
                    text: "Modifica progetto completata",
                    type: "success",
                    show: !0,
                  }),
              (j.value = !0),
              J();
          } catch (x) {
            (o.value.openstatus = o.value.openstatus == "A"),
              (o.value.internalproject = o.value.internalproject == 1),
              console.log(x);
            let se = JSON.parse(x.data).errors.title;
            console.log("catcherr", x.data),
              (C.value = { text: se, type: "danger", show: !0 }),
              (j.value = !0);
            return;
          }
        };
      function J() {
        ye("close");
      }
      const Se = async () => {
        if (s.idrec > 0) {
          const { data: d } = await G(
            P.public.apiBaseurl + "project/get/" + s.idrec,
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: m }) {
                console.log("Errore nella request:", m),
                  (C.value = {
                    text: "Errore: " + m,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: m }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (C.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: m }) {
                (o.value = t._data.data),
                  s.clone == 1 && ((o.value.id = 0), (o.value.code = "")),
                  o.value.splitpercent == 0 &&
                    o.value.splitpercent1 == 0 &&
                    (o.value.splitpercent = 100),
                  o.value.splityear == 0 &&
                    o.value.splityear1 == 0 &&
                    ((o.value.splityear =
                      o.value.startdate != null
                        ? new Date(o.value.startdate).getFullYear()
                        : new Date().getFullYear()),
                    (o.value.splityear1 = o.value.splityear + 1)),
                  (o.value.openstatus = o.value.openstatus == "A"),
                  (o.value.internalproject = o.value.internalproject == 1),
                  s.idrec > 0 && s.clone == 0 && (v.value = o.value.status),
                  o.value.client_id != 0 &&
                    (b.value = {
                      id: o.value.client_id,
                      name: s.clients
                        .filter(({ id: i }) => i === o.value.client_id)
                        .map(({ name: i }) => i)
                        .slice(0, 1)
                        .shift(),
                    }),
                  (D.value = o.value.owners),
                  o.value.owners.forEach((i) => {
                    W.value.push(i);
                  }),
                  o.value.sponsors.forEach((i) => {
                    k.value.push({
                      id: i.Sponsor.id,
                      sponsor: i.Client.id,
                      contractdate: i.Sponsor.contractdate,
                      note: i.Sponsor.note,
                    });
                  });
              },
            },
          );
        }
        if (s.idrec == 0 || s.clone == 1) {
          const { data: d } = await G(
            P.public.apiBaseurl + "project/getNewProjectName",
            {
              onRequest({ request: e, options: t }) {},
              onRequestError({ request: e, options: t, error: m }) {
                console.log("Errore nella request:", m),
                  (C.value = {
                    text: "Errore: " + m,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: e, response: t, options: m }) {
                console.log(
                  "Errore nella response: " + t._data.error.messages[0],
                ),
                  (C.value = {
                    text: "Errore caricamento progetto",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: e, response: t, options: m }) {
                o.value.code = t._data.data[0];
              },
            },
          );
        }
      };
      return (
        Re(async () => {
          (F.value = !0),
            await ke(),
            await Se(),
            g.value.hasprojects == 1 && s.idrec == 0
              ? ((r.value = !0), (K.value = !0))
              : ((g.value.role == "S" ||
                  g.value.role == "A" ||
                  W.value.includes(g.value.id) == !0) &&
                  (r.value = !0),
                (g.value.role == "S" ||
                  g.value.role == "A" ||
                  W.value.includes(g.value.id) == !0) &&
                  (K.value = !0));
        }),
        (d, e) => (
          c(),
          y(
            te,
            {
              class: "modaldialog",
              onAfterLeave: J,
              modelValue: l(F),
              "onUpdate:modelValue":
                e[42] || (e[42] = (t) => (N(F) ? (F.value = t) : null)),
              width: "auto",
              style: { "max-width": "90%" },
              persistent: "",
            },
            {
              default: n(() => [
                f(Z(l(r)) + " ", 1),
                U("div", Be, [
                  s.idrec == 0
                    ? (c(), M("h2", Te, "Nuovo progetto"))
                    : V("", !0),
                  s.idrec > 0 && s.clone == 0 && l(r) == !0
                    ? (c(), M("h2", Oe, "Modifica Progetto"))
                    : V("", !0),
                  s.idrec > 0 && s.clone == 0 && l(r) == !1
                    ? (c(), M("h2", $e, "Visualizza Progetto"))
                    : V("", !0),
                  s.idrec > 0 && s.clone == 1
                    ? (c(), M("h2", Le, "Duplica Progetto"))
                    : V("", !0),
                  a(
                    Ke,
                    {
                      modelValue: l(B),
                      "onUpdate:modelValue":
                        e[34] || (e[34] = (t) => (N(B) ? (B.value = t) : null)),
                      ref: "form",
                      "lazy-validation": "",
                      onKeydown:
                        e[35] ||
                        (e[35] = w(
                          Ee(() => {}, ["prevent"]),
                          ["enter"],
                        )),
                    },
                    {
                      default: n(() => [
                        a(Y, null, {
                          default: n(() => [
                            a(
                              u,
                              { cols: "12", sm: "4" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      class: "",
                                      onKeydown:
                                        e[0] ||
                                        (e[0] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).code,
                                      "onUpdate:modelValue":
                                        e[1] || (e[1] = (t) => (l(o).code = t)),
                                      required: "",
                                      autocomplete: "off",
                                      rules: l(T),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Codice progetto*",
                                      disabled:
                                        s.idrec > 0 &&
                                        s.clone == 0 &&
                                        l(g).hasprojects != 1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "disabled"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", sm: "4" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      class: "",
                                      onKeydown:
                                        e[2] ||
                                        (e[2] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).name,
                                      "onUpdate:modelValue":
                                        e[3] || (e[3] = (t) => (l(o).name = t)),
                                      required: "",
                                      autocomplete: "off",
                                      rules: l(T),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome progetto*",
                                      density: "compact",
                                      readonly: l(r) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", sm: "4" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      class: "",
                                      onKeydown:
                                        e[4] ||
                                        (e[4] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).contractname,
                                      "onUpdate:modelValue":
                                        e[5] ||
                                        (e[5] = (t) => (l(o).contractname = t)),
                                      required: "",
                                      autocomplete: "off",
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      label: "Nome da contratto",
                                      density: "compact",
                                      readonly: l(r) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", sm: "6" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      class: "",
                                      onKeydown:
                                        e[6] ||
                                        (e[6] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).description,
                                      "onUpdate:modelValue":
                                        e[7] ||
                                        (e[7] = (t) => (l(o).description = t)),
                                      variant: "outlined",
                                      autocomplete: "off",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Descrizione progetto",
                                      readonly: l(r) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", sm: "6" },
                              {
                                default: n(() => [
                                  a(
                                    I,
                                    {
                                      class: "",
                                      onKeydown:
                                        e[8] ||
                                        (e[8] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).referent,
                                      "onUpdate:modelValue":
                                        e[9] ||
                                        (e[9] = (t) => (l(o).referent = t)),
                                      variant: "outlined",
                                      autocomplete: "off",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Referente progetto",
                                      readonly: l(r) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", md: "3" },
                              {
                                default: n(() => [
                                  a(
                                    ue,
                                    {
                                      class: "",
                                      modelValue: l(b),
                                      "onUpdate:modelValue":
                                        e[10] ||
                                        (e[10] = (t) =>
                                          N(b) ? (b.value = t) : null),
                                      items: s.clients,
                                      "item-title": "name",
                                      readonly: l(r) == !1,
                                      "item-value": "id",
                                      required: "",
                                      clearable: l(r) == !0,
                                      autocomplete: "off",
                                      label: "Cliente",
                                      "persistent-hint": "",
                                      "return-object": "",
                                      density: "compact",
                                      variant: "outlined",
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "items",
                                      "readonly",
                                      "clearable",
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", md: "3" },
                              {
                                default: n(() => [
                                  a(
                                    Q,
                                    {
                                      class: "",
                                      modelValue: l(D),
                                      "onUpdate:modelValue":
                                        e[11] ||
                                        (e[11] = (t) =>
                                          N(D) ? (D.value = t) : null),
                                      multiple: "",
                                      items:
                                        s.idrec == 0 ||
                                        (s.idrec > 0 && s.clone == 1)
                                          ? l(ge)
                                          : s.users,
                                      "item-title": "name",
                                      "item-value": "id",
                                      required: "",
                                      "item-props": (t) => ({
                                        disabled: t.disabled,
                                      }),
                                      readonly: l(K) == !1,
                                      density: "compact",
                                      label: "Responsabile di progetto",
                                      variant: "outlined",
                                      autocomplete: "off",
                                      "no-data-text":
                                        "Nessun risultato trovato",
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
                            a(
                              u,
                              {
                                cols: "12",
                                sm:
                                  s.idrec == 0 || (s.idrec > 0 && s.clone == 0)
                                    ? 3
                                    : 6,
                              },
                              {
                                default: n(() => [
                                  a(
                                    H,
                                    {
                                      variant: "outlined",
                                      onKeydown:
                                        e[12] ||
                                        (e[12] = w(
                                          (t) => t.preventDefault(),
                                          ["enter"],
                                        )),
                                      modelValue: l(o).startdate,
                                      "onUpdate:modelValue": [
                                        e[13] ||
                                          (e[13] = (t) => (l(o).startdate = t)),
                                        e[14] || (e[14] = (t) => qe()),
                                      ],
                                      required: "",
                                      readonly: l(r) == !1,
                                      "input-format": "dd/MM/YYYY",
                                      "persistent-hint": "",
                                      autocomplete: "off",
                                      density: "compact",
                                      label: "Inizio",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["sm"],
                            ),
                            s.idrec == 0 || (s.idrec > 0 && s.clone == 0)
                              ? (c(),
                                y(
                                  u,
                                  { key: 0, cols: "12", sm: "3" },
                                  {
                                    default: n(() => [
                                      a(
                                        H,
                                        {
                                          variant: "outlined",
                                          onKeydown:
                                            e[15] ||
                                            (e[15] = w(
                                              (t) => t.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: l(o).enddate,
                                          "onUpdate:modelValue":
                                            e[16] ||
                                            (e[16] = (t) => (l(o).enddate = t)),
                                          required: "",
                                          month: l(O),
                                          year: l($),
                                          autocomplete: "off",
                                          "input-format": "dd/MM/YYYY",
                                          density: "compact",
                                          readonly: l(r) == !1,
                                          "persistent-hint": "",
                                          label: "Fine",
                                        },
                                        null,
                                        8,
                                        [
                                          "modelValue",
                                          "month",
                                          "year",
                                          "readonly",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            a(
                              u,
                              { cols: "12", md: "2" },
                              {
                                default: n(() => [
                                  a(
                                    Q,
                                    {
                                      autocomplete: "off",
                                      modelValue: l(o).projectcolor_id,
                                      "onUpdate:modelValue":
                                        e[17] ||
                                        (e[17] = (t) =>
                                          (l(o).projectcolor_id = t)),
                                      items: l(X),
                                      "item-title": "value",
                                      "item-value": "name",
                                      label: "Colore",
                                      variant: "outlined",
                                      readonly: l(r) == !1,
                                      density: "compact",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                    },
                                    {
                                      item: n(({ props: t, item: m }) => [
                                        a(
                                          Fe,
                                          Me(Ye(t)),
                                          {
                                            prepend: n(() => [
                                              U(
                                                "div",
                                                {
                                                  class: "color-box",
                                                  style: re({
                                                    backgroundColor:
                                                      m.raw.color,
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
                                      selection: n(({ item: t }) => [
                                        U("div", Je, [
                                          U(
                                            "div",
                                            {
                                              class: "color-box",
                                              style: re({
                                                backgroundColor: t.raw.color,
                                              }),
                                            },
                                            null,
                                            4,
                                          ),
                                          U("span", null, Z(t.raw.value), 1),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue", "items", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", md: "2" },
                              {
                                default: n(() => [
                                  a(
                                    Q,
                                    {
                                      autocomplete: "off",
                                      class: "",
                                      modelValue: l(v),
                                      "onUpdate:modelValue":
                                        e[18] ||
                                        (e[18] = (t) =>
                                          N(v) ? (v.value = t) : null),
                                      items:
                                        l(g).role == "S"
                                          ? s.stati
                                          : s.idrec == 0
                                            ? s.statiuser
                                            : l(o).status == "A" ||
                                                l(o).status == "C"
                                              ? s.statiadmin
                                              : s.statiuser,
                                      "item-title": "name",
                                      "item-value": "code",
                                      required: "",
                                      label: "Stato",
                                      "persistent-hint": "",
                                      "item-props": (t) => ({
                                        disabled: t.disabled,
                                      }),
                                      readonly: l(r) == !1,
                                      density: "compact",
                                      variant: "outlined",
                                      "no-data-text":
                                        "Nessun risultato trovato",
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
                            l(v) == "A"
                              ? (c(),
                                y(
                                  u,
                                  { key: 1, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        H,
                                        {
                                          variant: "outlined",
                                          onKeydown:
                                            e[19] ||
                                            (e[19] = w(
                                              (t) => t.preventDefault(),
                                              ["enter"],
                                            )),
                                          modelValue: l(o).signaturedate,
                                          "onUpdate:modelValue":
                                            e[20] ||
                                            (e[20] = (t) =>
                                              (l(o).signaturedate = t)),
                                          required: "",
                                          month: l(O),
                                          year: l($),
                                          autocomplete: "off",
                                          "input-format": "dd/MM/YYYY",
                                          density: "compact",
                                          readonly: l(g).role != "S",
                                          "persistent-hint": "",
                                          label: "Data Firma Contratto",
                                        },
                                        null,
                                        8,
                                        [
                                          "modelValue",
                                          "month",
                                          "year",
                                          "readonly",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            a(
                              u,
                              { cols: "12", md: "2" },
                              {
                                default: n(() => [
                                  a(
                                    h,
                                    {
                                      color: "green",
                                      density: "compact",
                                      baseColor: "red",
                                      modelValue: l(o).internalproject,
                                      "onUpdate:modelValue":
                                        e[21] ||
                                        (e[21] = (t) =>
                                          (l(o).internalproject = t)),
                                      label:
                                        "Interno :" +
                                        (l(o).internalproject == !0
                                          ? "SI"
                                          : "NO"),
                                      "hide-details": "",
                                      inset: "",
                                      readonly: l(r) == !1,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "label", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              {
                                cols: "12",
                                md:
                                  l(o).status != "A" && l(o).status != "C"
                                    ? 2
                                    : 4,
                              },
                              {
                                default: n(() => [
                                  a(
                                    h,
                                    {
                                      color: "green",
                                      density: "compact",
                                      baseColor: "red",
                                      modelValue: l(o).openstatus,
                                      "onUpdate:modelValue":
                                        e[22] ||
                                        (e[22] = (t) => (l(o).openstatus = t)),
                                      label:
                                        "Aperto :" +
                                        (l(o).openstatus == !0 ? "SI" : "NO"),
                                      "hide-details": "",
                                      readonly: l(r) == !1,
                                      inset: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "label", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["md"],
                            ),
                            l(v) == "I"
                              ? (c(),
                                y(
                                  u,
                                  { key: 2, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        z,
                                        {
                                          density: "compact",
                                          modelValue: l(o).successpercent,
                                          "onUpdate:modelValue":
                                            e[23] ||
                                            (e[23] = (t) =>
                                              (l(o).successpercent = t)),
                                          required: "",
                                          variant: "outlined",
                                          min: 0,
                                          max: 99,
                                          autocomplete: "off",
                                          "persistent-hint": "",
                                          readonly: l(r) == !1,
                                          label: "Percentuale di successo",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                          ]),
                          _: 1,
                        }),
                        a(Y, null, {
                          default: n(() => [
                            a(
                              u,
                              { cols: "12", md: "3" },
                              {
                                default: n(() => [
                                  a(
                                    Q,
                                    {
                                      autocomplete: "off",
                                      class: "",
                                      modelValue: l(o).type,
                                      "onUpdate:modelValue":
                                        e[24] ||
                                        (e[24] = (t) => (l(o).type = t)),
                                      items: l(Ve),
                                      "item-title": "name",
                                      "item-value": "code",
                                      required: "",
                                      label: "Tipo progetto",
                                      "persistent-hint": "",
                                      readonly: l(g).role != "S",
                                      density: "compact",
                                      variant: "outlined",
                                      "no-data-text":
                                        "Nessun risultato trovato",
                                    },
                                    null,
                                    8,
                                    ["modelValue", "items", "readonly"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            l(v) == "I"
                              ? (c(),
                                y(
                                  u,
                                  { key: 0, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        z,
                                        {
                                          density: "compact",
                                          modelValue: l(o).splitpercent,
                                          "onUpdate:modelValue":
                                            e[25] ||
                                            (e[25] = (t) =>
                                              (l(o).splitpercent = t)),
                                          required: "",
                                          variant: "outlined",
                                          min: 0,
                                          max: 100,
                                          autocomplete: "off",
                                          "persistent-hint": "",
                                          rules: [
                                            ...l(le),
                                            (t) =>
                                              Number(l(o).splitpercent1) +
                                                Number(t) ===
                                                100 ||
                                              "La somma delle percentuali deve essere 100%",
                                          ],
                                          readonly: l(r) == !1,
                                          label: "Percentuale di split*",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            l(v) == "I"
                              ? (c(),
                                y(
                                  u,
                                  { key: 1, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        z,
                                        {
                                          density: "compact",
                                          modelValue: l(o).splityear,
                                          "onUpdate:modelValue":
                                            e[26] ||
                                            (e[26] = (t) =>
                                              (l(o).splityear = t)),
                                          required: "",
                                          variant: "outlined",
                                          rules: l(T),
                                          autocomplete: "off",
                                          "persistent-hint": "",
                                          readonly: l(r) == !1,
                                          label: "Anno*",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            l(v) == "I"
                              ? (c(),
                                y(
                                  u,
                                  { key: 2, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        z,
                                        {
                                          density: "compact",
                                          modelValue: l(o).splitpercent1,
                                          "onUpdate:modelValue":
                                            e[27] ||
                                            (e[27] = (t) =>
                                              (l(o).splitpercent1 = t)),
                                          required: "",
                                          variant: "outlined",
                                          min: 0,
                                          max: 100,
                                          rules: [
                                            ...l(le),
                                            (t) =>
                                              Number(l(o).splitpercent) +
                                                Number(t) ===
                                                100 ||
                                              "La somma delle percentuali deve essere 100%",
                                          ],
                                          autocomplete: "off",
                                          "persistent-hint": "",
                                          readonly: l(r) == !1,
                                          label: "Percentuale di split*",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            l(v) == "I"
                              ? (c(),
                                y(
                                  u,
                                  { key: 3, cols: "12", md: "2" },
                                  {
                                    default: n(() => [
                                      a(
                                        z,
                                        {
                                          density: "compact",
                                          modelValue: l(o).splityear1,
                                          "onUpdate:modelValue":
                                            e[28] ||
                                            (e[28] = (t) =>
                                              (l(o).splityear1 = t)),
                                          required: "",
                                          variant: "outlined",
                                          rules: l(T),
                                          autocomplete: "off",
                                          "persistent-hint": "",
                                          readonly: l(r) == !1,
                                          label: "Anno successivo*",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules", "readonly"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : V("", !0),
                            a(
                              u,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  a(
                                    _,
                                    {
                                      class: "",
                                      readonly: l(r) == !1,
                                      modelValue: l(o).noteaddendum,
                                      "onUpdate:modelValue":
                                        e[29] ||
                                        (e[29] = (t) =>
                                          (l(o).noteaddendum = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      rows: "2",
                                      label:
                                        "Note (addendum, info aggiuntive, ecc..) Visibili ne frontespizio progetto",
                                    },
                                    null,
                                    8,
                                    ["readonly", "modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              u,
                              { cols: "12", sm: "12" },
                              {
                                default: n(() => [
                                  a(
                                    _,
                                    {
                                      class: "",
                                      readonly: l(r) == !1,
                                      modelValue: l(o).note,
                                      "onUpdate:modelValue":
                                        e[30] ||
                                        (e[30] = (t) => (l(o).note = t)),
                                      variant: "outlined",
                                      "persistent-hint": "",
                                      density: "compact",
                                      label: "Note",
                                      rows: "2",
                                    },
                                    null,
                                    8,
                                    ["readonly", "modelValue"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        }),
                        e[45] || (e[45] = U("h5", null, "Sponsors", -1)),
                        (c(!0),
                        M(
                          Ie,
                          null,
                          ze(
                            l(k),
                            (t, m) => (
                              c(),
                              y(
                                Y,
                                { key: m, class: "mt-0" },
                                {
                                  default: n(() => [
                                    a(
                                      u,
                                      { cols: "12", sm: "3" },
                                      {
                                        default: n(() => [
                                          a(
                                            ue,
                                            {
                                              class: "",
                                              modelValue: t.sponsor,
                                              "onUpdate:modelValue": (i) =>
                                                (t.sponsor = i),
                                              items: s.clients,
                                              "item-title": "name",
                                              readonly: l(r) == !1,
                                              "item-value": "id",
                                              required: "",
                                              clearable: l(r) == !0,
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
                                              "readonly",
                                              "clearable",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    a(
                                      u,
                                      { cols: "12", sm: "3" },
                                      {
                                        default: n(() => [
                                          a(
                                            H,
                                            {
                                              variant: "outlined",
                                              onKeydown:
                                                e[31] ||
                                                (e[31] = w(
                                                  (i) => i.preventDefault(),
                                                  ["enter"],
                                                )),
                                              modelValue: t.contractdate,
                                              "onUpdate:modelValue": (i) =>
                                                (t.contractdate = i),
                                              required: "",
                                              month: l(O),
                                              year: l($),
                                              autocomplete: "off",
                                              "input-format": "dd/MM/YYYY",
                                              density: "compact",
                                              "persistent-hint": "",
                                              readonly: l(r) == !1,
                                              label: "Data Firma Contratto",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "month",
                                              "year",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    a(
                                      u,
                                      { cols: "12", sm: "5" },
                                      {
                                        default: n(() => [
                                          a(
                                            _,
                                            {
                                              rows: "2",
                                              onKeydown:
                                                e[32] ||
                                                (e[32] = w(
                                                  (i) => i.preventDefault(),
                                                  ["enter"],
                                                )),
                                              modelValue: t.note,
                                              "onUpdate:modelValue": (i) =>
                                                (t.note = i),
                                              autocomplete: "off",
                                              variant: "outlined",
                                              "persistent-hint": "",
                                              label:
                                                "Note (contratto, info aggiuntive, ecc..)",
                                              readonly: l(r) == !1,
                                              density: "compact",
                                            },
                                            null,
                                            8,
                                            [
                                              "modelValue",
                                              "onUpdate:modelValue",
                                              "readonly",
                                            ],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                    a(
                                      u,
                                      { cols: "1" },
                                      {
                                        default: n(() => [
                                          a(
                                            ie,
                                            {
                                              class: "mt-2 mr-3",
                                              color: "error",
                                              title: "Rimuovi Sponsor",
                                              onClick: (i) =>
                                                l(r) == !1 ? null : Ce(m),
                                            },
                                            {
                                              default: n(() => [
                                                ...(e[43] ||
                                                  (e[43] = [
                                                    f("mdi-delete", -1),
                                                  ])),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["onClick"],
                                          ),
                                          a(
                                            ie,
                                            {
                                              class: "mt-2",
                                              color: "black",
                                              title: "Duplica Sponsor",
                                              onClick: (i) =>
                                                l(r) == !1 ? null : we(m),
                                            },
                                            {
                                              default: n(() => [
                                                ...(e[44] ||
                                                  (e[44] = [
                                                    f("mdi-content-copy", -1),
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
                        l(r) == !0
                          ? (c(),
                            y(
                              Y,
                              { key: 0 },
                              {
                                default: n(() => [
                                  a(
                                    u,
                                    { class: "text-center" },
                                    {
                                      default: n(() => [
                                        a(S, {
                                          icon: "mdi-plus",
                                          color: "primary",
                                          title: "Aggiungi Sponsor",
                                          onClick: be,
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                            ))
                          : V("", !0),
                        s.idrec > 0 && s.clone == 1
                          ? (c(),
                            y(
                              Y,
                              { key: 1 },
                              {
                                default: n(() => [
                                  a(
                                    u,
                                    { cols: "12" },
                                    {
                                      default: n(() => [
                                        a(
                                          h,
                                          {
                                            color: "green",
                                            baseColor: "red",
                                            density: "compact",
                                            modelValue: l(E),
                                            "onUpdate:modelValue":
                                              e[33] ||
                                              (e[33] = (t) =>
                                                N(E) ? (E.value = t) : null),
                                            label:
                                              "Duplica anche i task :" +
                                              (l(E) == !0 ? "SI" : "NO"),
                                            "hide-details": "",
                                            inset: "",
                                            readonly: l(r) == !1,
                                          },
                                          null,
                                          8,
                                          ["modelValue", "label", "readonly"],
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ]),
                                _: 1,
                              },
                            ))
                          : V("", !0),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"],
                  ),
                  e[49] || (e[49] = U("br", null, null, -1)),
                  U("div", Ge, [
                    l(r) == !1
                      ? (c(),
                        y(
                          S,
                          { key: 0, class: "", onClick: J, color: "red" },
                          {
                            default: n(() => [
                              ...(e[46] || (e[46] = [f(" Chiudi ", -1)])),
                            ]),
                            _: 1,
                          },
                        ))
                      : (c(),
                        y(
                          S,
                          { key: 1, class: "", onClick: J, color: "red" },
                          {
                            default: n(() => [
                              ...(e[47] || (e[47] = [f(" Annulla ", -1)])),
                            ]),
                            _: 1,
                          },
                        )),
                    a(ee),
                    a(
                      S,
                      {
                        onClick: xe,
                        disabled: !l(B) || l(K) == !1 || !l(j),
                        color: "green",
                      },
                      {
                        default: n(() => [
                          ...(e[48] || (e[48] = [f("Salva", -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disabled"],
                    ),
                  ]),
                ]),
                a(
                  te,
                  {
                    modelValue: l(A),
                    "onUpdate:modelValue":
                      e[38] || (e[38] = (t) => (N(A) ? (A.value = t) : null)),
                    "max-width": "600",
                  },
                  {
                    default: n(() => [
                      a(de, null, {
                        default: n(() => [
                          a(
                            me,
                            { class: "headline" },
                            {
                              default: n(() => [
                                ...(e[50] ||
                                  (e[50] = [f("Modifica stato progetto", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          a(pe, null, {
                            default: n(() => [
                              ...(e[51] ||
                                (e[51] = [
                                  f(" Confermi il cambio stato progetto? ", -1),
                                ])),
                            ]),
                            _: 1,
                          }),
                          a(ce, null, {
                            default: n(() => [
                              a(
                                S,
                                {
                                  color: "orange",
                                  class: "mb-4",
                                  onClick:
                                    e[36] || (e[36] = (t) => (A.value = !1)),
                                },
                                {
                                  default: n(() => [
                                    ...(e[52] ||
                                      (e[52] = [f(" Annulla ", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              a(ee),
                              a(
                                S,
                                {
                                  color: "green",
                                  onClick: e[37] || (e[37] = (t) => Ue()),
                                },
                                {
                                  default: n(() => [
                                    ...(e[53] || (e[53] = [f("Conferma", -1)])),
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
                a(
                  te,
                  {
                    modelValue: l(R),
                    "onUpdate:modelValue":
                      e[41] || (e[41] = (t) => (N(R) ? (R.value = t) : null)),
                    "max-width": "600",
                  },
                  {
                    default: n(() => [
                      a(de, null, {
                        default: n(() => [
                          a(
                            me,
                            { class: "headline" },
                            {
                              default: n(() => [
                                ...(e[54] ||
                                  (e[54] = [f("Creazione nuovo cliente", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                          a(pe, null, {
                            default: n(() => [
                              f(
                                " Confermi la creazione del nuovo cliente " +
                                  Z(l(b)) +
                                  "? ",
                                1,
                              ),
                            ]),
                            _: 1,
                          }),
                          a(ce, null, {
                            default: n(() => [
                              a(
                                S,
                                {
                                  color: "orange",
                                  class: "mb-4",
                                  onClick:
                                    e[39] || (e[39] = (t) => (R.value = !1)),
                                },
                                {
                                  default: n(() => [
                                    ...(e[55] ||
                                      (e[55] = [f(" Annulla ", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ),
                              a(ee),
                              a(
                                S,
                                {
                                  color: "green",
                                  onClick: e[40] || (e[40] = (t) => Ne()),
                                },
                                {
                                  default: n(() => [
                                    ...(e[56] || (e[56] = [f("Conferma", -1)])),
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
  };
export { it as _ };
