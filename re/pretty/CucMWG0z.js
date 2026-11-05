import { _ as T } from "./R_QikKiu.js";
import {
  E as Z,
  u as D,
  F,
  r as s,
  k as A,
  G as J,
  o as K,
  x as y,
  z as o,
  J as k,
  K as g,
  L as t,
  B as u,
  D as w,
  C as P,
  N as M,
  O as E,
  M as C,
  n as W,
  y as n,
  A as G,
} from "./CYsiv7Qj.js";
import { _ as H } from "./DNHpBbj1.js";
import { z as j } from "./CE7JQOIN.js";
import { u as Q } from "./LKQL6vAN.js";
import { $ as I } from "./BvG7V8Ak.js";
import { V as X } from "./MIubIMrV.js";
import { V as Y, c as _, b as ee } from "./B_W9U9Wp.js";
import { V as te } from "./CvNP7w2k.js";
import { V as N } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./92s3wAHG.js";
import "./DzPBUvYZ.js";
const re = { style: { margin: "auto", "max-width": "680px", width: "80%" } },
  oe = { key: 0, class: "mt-6 text-center" },
  se = { style: { display: "flex" } },
  ae = { key: 1, class: "mt-6 text-center" },
  ze = {
    __name: "confirmemailandsetpassword",
    setup(le) {
      Q({
        title: "Imposta Password",
        meta: [{ name: "description", content: "Imposta Password" }],
      });
      const { status: ne, signIn: ie } = Z(),
        $ = W(),
        z = D(),
        B = F(),
        b = s(!1),
        d = s(""),
        i = s(""),
        x = s(""),
        m = s(!1),
        p = s(!1),
        c = s(!1),
        R = s([
          (r) => !!r || "Password obbligatoria",
          (r) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              r,
            ) ||
            `La Password deve contenere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
        ]),
        L = A(() => [
          (r) => !!r || " Password di conferma obbligatoria",
          (r) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              r,
            ) ||
            `La Password deve contenere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
          (r) => r === i.value || "Password di conferma non corrispondente",
        ]),
        f = J("snackbar"),
        S = s(!1),
        V = s(!1),
        v = A(() => {
          switch (j(i.value).score) {
            case 4:
              return { color: "light-blue", value: 100 };
            case 3:
              return { color: "light-green", value: 75 };
            case 2:
              return { color: "yellow", value: 50 };
            case 1:
              return { color: "orange", value: 25 };
            default:
              return { color: "red", value: 5 };
          }
        }),
        O = async () => {
          x.value = "";
          let r = {
            password: i.value,
            password_confirmation: d.value,
            code: B.query.code,
          };
          try {
            const { data: e, status: l } = await I(
              $.public.apiBaseurl + "user/set_password",
              { method: "POST", body: r },
            );
            (f.value = {
              text: "Password Impostata corretamente",
              type: "success",
              show: !0,
            }),
              z.push("/login");
          } catch (e) {
            console.log(e);
            let l = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (f.value = { text: l, type: "danger", show: !0 });
            return;
          }
        },
        U = async () => {
          V.value = !1;
          let r = { code: B.query.code };
          try {
            const { data: e, status: l } = await I(
              $.public.apiBaseurl + "user/confirmuser",
              { method: "POST", body: r },
            );
            (f.value = {
              text: "Utente confermato corretamente",
              type: "success",
              show: !0,
            }),
              (S.value = !0);
          } catch (e) {
            (V.value = !0), console.log(e);
            let l = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (f.value = { text: l, type: "danger", show: !0 });
            return;
          }
        };
      function q() {
        b.value = !1;
      }
      function h() {
        z.push("/login");
      }
      return (
        K(async () => {
          await U();
        }),
        (r, e) => {
          const l = T;
          return (
            n(),
            y("div", re, [
              e[16] ||
                (e[16] = o(
                  "div",
                  {
                    style: {
                      margin: "auto",
                      "max-width": "680px",
                      width: "100%",
                      "text-align": "center",
                    },
                  },
                  [
                    o("img", {
                      src: H,
                      style: {
                        "text-align": "center",
                        width: "auto",
                        margin: "6px auto",
                      },
                    }),
                  ],
                  -1,
                )),
              t(S)
                ? (n(),
                  y("div", oe, [
                    e[8] ||
                      (e[8] = o(
                        "h2",
                        {
                          style: { "font-size": "36px", "font-weight": "500" },
                        },
                        [
                          w("Utente confermato"),
                          o("br"),
                          w("Scegli la tua password"),
                        ],
                        -1,
                      )),
                    e[9] || (e[9] = o("br", null, null, -1)),
                    e[10] || (e[10] = o("br", null, null, -1)),
                    u(
                      X,
                      {
                        modelValue: t(m),
                        "onUpdate:modelValue":
                          e[4] || (e[4] = (a) => (C(m) ? (m.value = a) : null)),
                        ref: "form",
                        "lazy-validation": "",
                        onKeydown:
                          e[5] ||
                          (e[5] = M(
                            E(() => {}, ["prevent"]),
                            ["enter"],
                          )),
                      },
                      {
                        default: P(() => [
                          t(x) != ""
                            ? (n(),
                              k(
                                te,
                                {
                                  key: 0,
                                  outlined: "",
                                  color: "error",
                                  style: {
                                    "border-radius": "12px",
                                    "margin-bottom": "20px",
                                  },
                                },
                                { default: P(() => [w(G(t(x)), 1)]), _: 1 },
                              ))
                            : g("", !0),
                          u(
                            N,
                            {
                              class: "mb-0",
                              variant: "outlined",
                              "persistent-hint": "",
                              label: "Password",
                              modelValue: t(i),
                              "onUpdate:modelValue":
                                e[0] ||
                                (e[0] = (a) => (C(i) ? (i.value = a) : null)),
                              required: "",
                              rules: t(R),
                              "prepend-inner-icon": t(p)
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              type: t(p) ? "text" : "password",
                              "onClick:prependInner":
                                e[1] || (e[1] = (a) => (p.value = !t(p))),
                            },
                            null,
                            8,
                            [
                              "modelValue",
                              "rules",
                              "prepend-inner-icon",
                              "type",
                            ],
                          ),
                          t(v).value >= 0 && t(v).value <= 100
                            ? (n(),
                              k(
                                _,
                                {
                                  key: 1,
                                  class: "mb-3 mt-3",
                                  color: t(v).color,
                                  value: t(v).value,
                                },
                                null,
                                8,
                                ["color", "value"],
                              ))
                            : g("", !0),
                          u(
                            N,
                            {
                              class: "mb-0",
                              variant: "outlined",
                              "persistent-hint": "",
                              label: "Password di conferma",
                              modelValue: t(d),
                              "onUpdate:modelValue":
                                e[2] ||
                                (e[2] = (a) => (C(d) ? (d.value = a) : null)),
                              required: "",
                              rules: t(L),
                              "prepend-inner-icon": t(c)
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              type: t(c) ? "text" : "password",
                              "onClick:prependInner":
                                e[3] || (e[3] = (a) => (c.value = !t(c))),
                            },
                            null,
                            8,
                            [
                              "modelValue",
                              "rules",
                              "prepend-inner-icon",
                              "type",
                            ],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"],
                    ),
                    o("div", se, [
                      u(
                        Y,
                        {
                          onClick: O,
                          disabled: !t(m),
                          style: { width: "100%" },
                        },
                        {
                          default: P(() => [
                            ...(e[7] || (e[7] = [w("Scegli password", -1)])),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"],
                      ),
                    ]),
                    e[11] || (e[11] = o("br", null, null, -1)),
                    e[12] || (e[12] = o("br", null, null, -1)),
                    o(
                      "a",
                      {
                        onClick: e[6] || (e[6] = (a) => (b.value = !0)),
                        style: {
                          color: "#241C18",
                          "font-size": "80%",
                          cursor: "pointer",
                          "text-decoration": "underline",
                          "text-align": "right",
                        },
                      },
                      "Privacy Policy",
                    ),
                    e[13] || (e[13] = o("br", null, null, -1)),
                    o("div", { style: { float: "right" } }, [
                      o(
                        "span",
                        {
                          onClick: h,
                          style: { cursor: "pointer", "text-align": "right" },
                        },
                        "Indietro",
                      ),
                    ]),
                  ]))
                : (n(),
                  y("div", ae, [
                    u(ee, {
                      size: 170,
                      width: 7,
                      color: "#00516e",
                      indeterminate: "",
                    }),
                    e[14] || (e[14] = o("br", null, null, -1)),
                    e[15] || (e[15] = o("br", null, null, -1)),
                    t(V)
                      ? (n(),
                        y(
                          "span",
                          {
                            key: 0,
                            onClick: h,
                            style: { cursor: "pointer", "text-align": "right" },
                          },
                          "Vai al login",
                        ))
                      : g("", !0),
                  ])),
              t(b) ? (n(), k(l, { key: 2, onClose: q })) : g("", !0),
            ])
          );
        }
      );
    },
  };
export { ze as default };
