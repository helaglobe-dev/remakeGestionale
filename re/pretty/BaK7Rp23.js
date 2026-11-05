import { _ as ue } from "./ClyIuovc.js";
import { _ as ce } from "./DjF9DnSE.js";
import {
  r as s,
  u as de,
  F as pe,
  E as me,
  G as ge,
  o as fe,
  e as ye,
  x as ve,
  z as c,
  B as i,
  J as y,
  K as h,
  C as a,
  L as l,
  n as be,
  y as g,
  M as L,
  N as $,
  O,
  A as f,
  D as p,
  P as we,
} from "./CYsiv7Qj.js";
import "./D16A7lth.js";
import { V as qe } from "./B_hTT4u_.js";
import { u as he } from "./LKQL6vAN.js";
import { $ as b } from "./BvG7V8Ak.js";
import { e as U } from "./DRW0ieNg.js";
import { V as ke, a as K } from "./Bj0ZT2dB.js";
import { V as Ee } from "./ss-1h9Hv.js";
import { i as De } from "./BIFx5Ami.js";
import { V as Y, a as V } from "./B_W9U9Wp.js";
import { V as _e, a as xe, b as j, c as A } from "./CxBYvc7u.js";
import { V as G } from "./Cv1q1CuH.js";
import { V as Ve } from "./BrCrqdgZ.js";
import { s as J, a as Ie, e as Re, b as H } from "./B5S3s6V6.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./MIubIMrV.js";
import "./DCAzZvgN.js";
import "./Da5kZyhM.js";
import "./hzFhMs-m.js";
import "./D-XDfEUK.js";
import "./B6Tli9r0.js";
import "./Bx6RXzqb.js";
import "./CZzf1ihi.js";
import "./B51noTYL.js";
import "./QgNM3dor.js";
import "./92s3wAHG.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
import "./CCBmAzgz.js";
const Se = { class: "pl-10 pr-10" },
  Ce = { class: "divcenterpage" },
  ze = ["onClick", "onKeyup"],
  Be = ["title"],
  Me = { class: "mt-4" },
  qt = {
    __name: "ficp",
    setup(je) {
      const w = s(
          localStorage.getItem("hgfiltroaidata") != "null" &&
            localStorage.getItem("hgfiltroaidata") != null
            ? localStorage
                .getItem("hgfiltroaidata")
                .split(",")
                .map((r) => new Date(r))
            : [
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() - 1,
                  new Date().getDate(),
                ),
                new Date(),
              ],
        ),
        W = s([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [J(new Date()), U(new Date())] },
          {
            label: "Mese precedente",
            value: [J(H(new Date(), 1)), U(H(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Ie(new Date()), Re(new Date())] },
        ]),
        v = be();
      de();
      const m = pe(),
        { status: Ae, signIn: Te, signOut: Ne, data: I } = me(),
        R = s([]),
        k = s(""),
        d = ge("snackbar"),
        E = s(!1),
        Q = s(0),
        T = s(0),
        X = s(!0);
      s(
        localStorage.getItem("hgfiltroaicliente") != "null" &&
          localStorage.getItem("hgfiltroaicliente") != null
          ? parseInt(localStorage.getItem("hgfiltroaicliente"))
          : null,
      ),
        s(
          localStorage.getItem("hgfiltroaiproject") != "null" &&
            localStorage.getItem("hgfiltroaiproject") != null
            ? parseInt(localStorage.getItem("hgfiltroaiproject"))
            : null,
        );
      const Z = s(!1),
        ee = [
          { title: "Cliente", key: "cliente", sortable: !0 },
          { title: "Progetto", key: "project_id", sortable: !1 },
          {
            title: "Numero F.",
            key: "invoicenumber",
            sortable: !0,
            align: "left",
          },
          { title: "Data F.", key: "invoicedate", sortable: !0, align: "left" },
          { title: "Totale", key: "total" },
          {
            title: "Data Scadenza",
            key: "paymentduedate",
            sortable: !0,
            align: "left",
          },
          { title: "Pagamento", key: "payed", sortable: !0, align: "left" },
          { title: "Banca", key: "bank_id" },
          { title: "Anticipo Bancario", key: "anticipobancario" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ],
        S = s([]),
        C = s([]),
        N = s([]),
        z = s([]),
        B = s([]),
        P = s([]),
        D = s([]);
      he({
        title: "Fatture Attive",
        meta: [{ name: "description", content: "Fatture Attive" }],
      });
      const te = ({ item: r }) => {
        const t = new Date(),
          n =
            t.getFullYear() +
            "-" +
            String(t.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(t.getDate()).padStart(2, "0");
        return r.payed == "N" && r.paymentduedate < n
          ? { class: "row-orange-ai" }
          : {};
      };
      function _(r) {
        (T.value = parseInt(r)), (E.value = !0);
      }
      const ae = async () => {
        (E.value = !1), await x();
      };
      s("");
      const oe = async (r) => {
          const { data: t } = await b(
            v.public.apiBaseurl + "invoice/activedelete/" + r,
            {
              onRequest({ request: n, options: o }) {},
              onRequestError({ request: n, options: o, error: e }) {
                console.log("Errore nella request:", e);
              },
              onResponseError({ request: n, response: o, options: e }) {
                d.value = {
                  text: "Errore cancellazione invoice",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: n, response: o, options: e }) {
                (d.value = {
                  text: "Fattura eliminata",
                  type: "success",
                  show: !0,
                }),
                  x();
              },
            },
          );
        },
        x = async () => {
          R.value = [];
          let r = w.value[0].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            t = w.value[1].toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            n = { from: r, to: t };
          try {
            const { data: o, status: e } = await b(
              v.public.apiBaseurl + "ficpassive/get_fic_fatture_passive",
              { method: "POST", body: n },
            );
            o.forEach((u) => {
              (u.cliente = D.value[u.cliente]), R.value.push(u);
            });
          } catch (o) {
            console.log(o);
            let e = JSON.parse(o.data).errors.title;
            console.log("catcherr", o.data),
              (d.value = { text: e, type: "danger", show: !0 });
            return;
          }
        },
        ne = () => {
          Q.value = I.value.id;
        };
      function M() {
        Z.value = window.innerWidth <= 960;
      }
      const re = async () => {
          (C.value = []), (S.value = []);
          const { data: r } = await b(v.public.apiBaseurl + "bank/list/", {
            onRequest({ request: t, options: n }) {},
            onRequestError({ request: t, options: n, error: o }) {
              console.log("Errore nella request:", o),
                (d.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: n, options: o }) {
              console.log(
                "Errore nella response: " + n._data.error.messages[0],
              ),
                (d.value = {
                  text: "Errore caricamento banche",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: n, options: o }) {
              n._data.data.forEach((e) => {
                S.value.push({ label: e.name, value: e.id }),
                  (C.value[e.id] = e.name);
              });
            },
          });
        },
        se = async () => {
          let r = [];
          (r.A = "Anticipo"),
            (r.I = "Intermedio"),
            (r.S = "Saldo"),
            (N.value = []);
          const { data: t } = await b(
            v.public.apiBaseurl + "invoice/tranchelist/",
            {
              onRequest({ request: n, options: o }) {},
              onRequestError({ request: n, options: o, error: e }) {
                console.log("Errore nella request:", e),
                  (d.value = {
                    text: "Errore: " + e,
                    type: "danger",
                    show: !0,
                  });
              },
              onResponseError({ request: n, response: o, options: e }) {
                console.log(
                  "Errore nella response: " + o._data.error.messages[0],
                ),
                  (d.value = {
                    text: "Errore caricamento banche",
                    type: "danger",
                    show: !0,
                  });
              },
              onResponse({ request: n, response: o, options: e }) {
                o._data.data.forEach((u) => {
                  let q =
                    r[u.type] +
                    " " +
                    new Date(u.previewdate).toLocaleDateString("it-IT", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    });
                  N.value[u.id] = q;
                });
              },
            },
          );
        },
        le = async () => {
          (z.value = []), (B.value = []);
          const { data: r } = await b(v.public.apiBaseurl + "project/list/", {
            onRequest({ request: t, options: n }) {},
            onRequestError({ request: t, options: n, error: o }) {
              console.log("Errore nella request:", o),
                (d.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: n, options: o }) {
              console.log(
                "Errore nella response: " + n._data.error.messages[0],
              ),
                (d.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: n, options: o }) {
              n._data.data.forEach((e) => {
                z.value.push({
                  label: "[" + e.code + "] " + e.name,
                  value: e.id,
                  paymenttype: e.paymenttype,
                }),
                  (B.value[e.id] = "[" + e.code + "] " + e.name);
              });
            },
          });
        },
        ie = async () => {
          (P.value = []), (D.value = []);
          const { data: r } = await b(v.public.apiBaseurl + "client/list/", {
            onRequest({ request: t, options: n }) {},
            onRequestError({ request: t, options: n, error: o }) {
              console.log("Errore nella request:", o),
                (d.value = { text: "Errore: " + o, type: "danger", show: !0 });
            },
            onResponseError({ request: t, response: n, options: o }) {
              console.log(
                "Errore nella response: " + n._data.error.messages[0],
              ),
                (d.value = {
                  text: "Errore caricamento progetto",
                  type: "danger",
                  show: !0,
                });
            },
            onResponse({ request: t, response: n, options: o }) {
              n._data.data.forEach((e) => {
                P.value.push({ label: e.name, value: e.id }),
                  (D.value[e.id] = e.name);
              });
            },
          });
        };
      return (
        fe(async () => {
          M(),
            window.addEventListener("resize", M),
            await se(),
            await le(),
            await ie(),
            await re(),
            ne(),
            await x(),
            m.query.id != null && _(m.query.id),
            m.query.trancheid != null &&
              m.query.projectid != null &&
              m.query.trancheid != 0 &&
              m.query.projectid != 0 &&
              m.query.trancheid != null &&
              m.query.projectid != null &&
              _(0);
        }),
        ye(() => {
          window.removeEventListener("resize", M);
        }),
        (r, t) => {
          const n = ue,
            o = ce;
          return (
            g(),
            ve("div", Se, [
              c("div", Ce, [
                t[13] || (t[13] = c("br", null, null, -1)),
                t[14] ||
                  (t[14] = c(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Sincronizzazione fatture passive con Fatture in Cloud",
                    -1,
                  )),
                t[15] ||
                  (t[15] = c("div", { style: { clear: "both" } }, null, -1)),
                i(
                  ke,
                  { "no-gutters": "" },
                  {
                    default: a(() => [
                      i(
                        K,
                        { cols: "12", sm: "12", md: "4" },
                        {
                          default: a(() => [
                            t[3] ||
                              (t[3] = c(
                                "small",
                                { style: { "font-weight": "bold" } },
                                "Data Scadenza",
                                -1,
                              )),
                            i(
                              l(qe),
                              {
                                modelValue: l(w),
                                "onUpdate:modelValue":
                                  t[0] ||
                                  (t[0] = (e) => (L(w) ? (w.value = e) : null)),
                                locale: "it",
                                range: "",
                                "multi-calendars": "",
                                "enable-time-picker": !1,
                                class: "pa-2 pl-0",
                                "format-locale": l(De),
                                format: "dd/M/yyyy",
                                "select-text": "Seleziona",
                                "cancel-text": "Annulla",
                                "preset-dates": l(W),
                                clearable: !1,
                              },
                              {
                                "preset-date-range-button": a(
                                  ({ label: e, value: u, presetDate: q }) => [
                                    c(
                                      "span",
                                      {
                                        role: "button",
                                        tabindex: 0,
                                        onClick: (F) => q(u),
                                        onKeyup: [
                                          $(
                                            O((F) => q(u), ["prevent"]),
                                            ["enter"],
                                          ),
                                          $(
                                            O((F) => q(u), ["prevent"]),
                                            ["space"],
                                          ),
                                        ],
                                      },
                                      f(e),
                                      41,
                                      ze,
                                    ),
                                  ],
                                ),
                                _: 1,
                              },
                              8,
                              ["modelValue", "format-locale", "preset-dates"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      i(
                        K,
                        { cols: "12", sm: "12", md: "1" },
                        {
                          default: a(() => [
                            i(
                              Y,
                              {
                                class: "ma-2 mt-8",
                                onClick: t[1] || (t[1] = (e) => x()),
                              },
                              {
                                default: a(() => [
                                  i(V, null, {
                                    default: a(() => [
                                      ...(t[4] ||
                                        (t[4] = [p("mdi-magnify", -1)])),
                                    ]),
                                    _: 1,
                                  }),
                                  t[5] || (t[5] = p("Cerca", -1)),
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
                i(
                  Ee,
                  {
                    density: "compact",
                    items: l(R),
                    headers: ee,
                    search: l(k),
                    "items-per-page": -1,
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
                    "row-props": te,
                  },
                  {
                    top: a(() => [
                      i(
                        Ve,
                        {
                          modelValue: l(k),
                          "onUpdate:modelValue":
                            t[2] ||
                            (t[2] = (e) => (L(k) ? (k.value = e) : null)),
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
                    "item.project_id": a(({ item: e }) => [
                      c("span", null, f(l(B)[e.project_id]), 1),
                    ]),
                    "item.total": a(({ item: e }) => [
                      c(
                        "span",
                        null,
                        f(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.total),
                        ),
                        1,
                      ),
                    ]),
                    "item.vat": a(({ item: e }) => [
                      c(
                        "span",
                        null,
                        f(
                          new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            useGrouping: !0,
                            currency: "EUR",
                          }).format(e.vat),
                        ),
                        1,
                      ),
                    ]),
                    "item.cliente": a(({ item: e }) => [
                      c("span", { title: e.id }, f(e.cliente), 9, Be),
                    ]),
                    "item.invoicedate": a(({ item: e }) => [
                      c(
                        "span",
                        null,
                        f(new Date(e.invoicedate).toLocaleDateString("it-IT")),
                        1,
                      ),
                    ]),
                    "item.paymentduedate": a(({ item: e }) => [
                      c(
                        "span",
                        null,
                        f(
                          new Date(e.paymentduedate).toLocaleDateString(
                            "it-IT",
                          ),
                        ),
                        1,
                      ),
                    ]),
                    "item.payed": a(({ item: e }) => [
                      e.payed == "P"
                        ? (g(),
                          y(
                            G,
                            {
                              key: 0,
                              label: "",
                              color: "green",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: a(() => [
                                ...(t[6] || (t[6] = [p(" Pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : h("", !0),
                      e.payed == "N"
                        ? (g(),
                          y(
                            G,
                            {
                              key: 1,
                              label: "",
                              color: "orange",
                              variant: "flat",
                              size: "small",
                            },
                            {
                              default: a(() => [
                                ...(t[7] || (t[7] = [p(" Non pagata ", -1)])),
                              ]),
                              _: 1,
                            },
                          ))
                        : h("", !0),
                    ]),
                    "item.bank_id": a(({ item: e }) => [
                      c("span", null, f(l(C)[e.bank_id]), 1),
                    ]),
                    "item.anticipobancario": a(({ item: e }) => [
                      c("span", null, [
                        e.anticipobancario == 1
                          ? (g(),
                            y(
                              V,
                              {
                                key: 0,
                                class: "me-2",
                                size: "large",
                                color: "red",
                                title: "Anticipo Bancario",
                              },
                              {
                                default: a(() => [
                                  ...(t[8] ||
                                    (t[8] = [p("mdi-check-bold", -1)])),
                                ]),
                                _: 1,
                              },
                            ))
                          : h("", !0),
                      ]),
                    ]),
                    "item.actions": a(({ item: e }) => [
                      i(
                        _e,
                        { "offset-y": "" },
                        {
                          activator: a(({ props: u }) => [
                            i(
                              Y,
                              we(
                                { icon: "mdi-dots-vertical", variant: "text" },
                                u,
                              ),
                              null,
                              16,
                            ),
                          ]),
                          default: a(() => [
                            c("div", Me, [
                              i(
                                xe,
                                {
                                  elevation: "0",
                                  class: "pa-2 menutop",
                                  "bg-color": "#fff",
                                  style: { border: "1px solid #ccc" },
                                },
                                {
                                  default: a(() => [
                                    l(I).hasinvoice == 1
                                      ? (g(),
                                        y(
                                          j,
                                          {
                                            key: 0,
                                            onClick: (u) => _(e.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              i(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(t[9] ||
                                                      (t[9] = [
                                                        p("mdi-pencil", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              i(
                                                A,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(t[10] ||
                                                      (t[10] = [
                                                        p("Modifica", -1),
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
                                      : (g(),
                                        y(
                                          j,
                                          {
                                            key: 1,
                                            onClick: (u) => _(e.id),
                                            dense: "",
                                            exact: "",
                                          },
                                          {
                                            prepend: a(() => [
                                              i(
                                                V,
                                                { style: { opacity: "1" } },
                                                {
                                                  default: a(() => [
                                                    ...(t[11] ||
                                                      (t[11] = [
                                                        p("mdi-eye", -1),
                                                      ])),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            default: a(() => [
                                              i(
                                                A,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    ...(t[12] ||
                                                      (t[12] = [
                                                        p("Visualizza", -1),
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
                                        )),
                                    l(I).hasinvoice == 1
                                      ? (g(),
                                        y(
                                          j,
                                          { key: 2, dense: "", exact: "" },
                                          {
                                            default: a(() => [
                                              i(
                                                A,
                                                {
                                                  style: {
                                                    "font-size": "14px",
                                                    cursor: "pointer",
                                                  },
                                                },
                                                {
                                                  default: a(() => [
                                                    i(
                                                      n,
                                                      {
                                                        button: "Elimina",
                                                        onDelete: (u) =>
                                                          oe(e.id),
                                                        iconadelete: l(X),
                                                        color: "red",
                                                        text: "Vuoi veramente eliminare  la fattura selezionata?",
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "onDelete",
                                                        "iconadelete",
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
                                        ))
                                      : h("", !0),
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
                l(E)
                  ? (g(),
                    y(
                      o,
                      {
                        key: 0,
                        aryclients: l(D),
                        projects: l(z),
                        banks: l(S),
                        dialoginsmod: l(E),
                        idrec: l(T),
                        onClose: ae,
                      },
                      null,
                      8,
                      [
                        "aryclients",
                        "projects",
                        "banks",
                        "dialoginsmod",
                        "idrec",
                      ],
                    ))
                  : h("", !0),
              ]),
            ])
          );
        }
      );
    },
  };
export { qt as default };
