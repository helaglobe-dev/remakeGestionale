import { _ as L } from "./R_QikKiu.js";
import {
  E as Z,
  u as h,
  F as q,
  r as s,
  k,
  G as D,
  o as F,
  x as K,
  z as r,
  J as y,
  K as g,
  B as c,
  C as x,
  N as M,
  O,
  M as b,
  L as t,
  y as f,
  D as $,
  A as T,
  n as U,
} from "./CYsiv7Qj.js";
import { _ as E } from "./DNHpBbj1.js";
import { z as J } from "./CE7JQOIN.js";
import { u as W } from "./LKQL6vAN.js";
import { $ as G } from "./BvG7V8Ak.js";
import { V as H } from "./MIubIMrV.js";
import { V as _, c as j } from "./B_W9U9Wp.js";
import { V as Q } from "./CvNP7w2k.js";
import { V as C } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./92s3wAHG.js";
import "./DzPBUvYZ.js";
const X = { style: { margin: "auto", "max-width": "680px", width: "80%" } },
  Y = { class: "mt-6 text-center" },
  ee = { style: { display: "flex" } },
  Ve = {
    __name: "resetpassword",
    setup(te) {
      W({
        title: "Imposta Password",
        meta: [{ name: "description", content: "Imposta Password" }],
      });
      const { status: oe, signIn: re } = Z(),
        z = U(),
        V = h(),
        A = q(),
        v = s(!1),
        n = s(""),
        l = s(""),
        w = s(""),
        i = s(!1),
        u = s(!1),
        d = s(!1),
        B = s([
          (o) => !!o || "Password obbligatoria",
          (o) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              o,
            ) ||
            `La Password deve contenere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
        ]),
        I = k(() => [
          (o) => !!o || " Password di conferma obbligatoria",
          (o) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              o,
            ) ||
            `La Password deve contenere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
          (o) => o === l.value || "Password di conferma non corrispondente",
        ]),
        P = D("snackbar");
      s(!1), s(!1);
      const p = k(() => {
          switch (J(l.value).score) {
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
        N = async () => {
          w.value = "";
          let o = {
            password: l.value,
            password_confirmation: n.value,
            code: A.query.code,
          };
          try {
            const { data: e, status: m } = await G(
              z.public.apiBaseurl + "user/reset_password",
              { method: "POST", body: o },
            );
            (P.value = {
              text: "Password Impostata corretamente",
              type: "success",
              show: !0,
            }),
              V.push("/login");
          } catch (e) {
            console.log(e);
            let m = JSON.parse(e.data).errors.title;
            console.log("catcherr", e.data),
              (P.value = { text: m, type: "danger", show: !0 });
            return;
          }
        };
      function R() {
        v.value = !1;
      }
      function S() {
        V.push("/login");
      }
      return (
        F(async () => {}),
        (o, e) => {
          const m = L;
          return (
            f(),
            K("div", X, [
              e[14] ||
                (e[14] = r(
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
                    r("img", {
                      src: E,
                      style: {
                        "text-align": "center",
                        width: "auto",
                        margin: "6px auto",
                      },
                    }),
                  ],
                  -1,
                )),
              r("div", Y, [
                e[8] ||
                  (e[8] = r(
                    "h2",
                    { style: { "font-size": "36px", "font-weight": "500" } },
                    "Scegli la tua nuova password",
                    -1,
                  )),
                e[9] || (e[9] = r("br", null, null, -1)),
                e[10] || (e[10] = r("br", null, null, -1)),
                c(
                  H,
                  {
                    modelValue: t(i),
                    "onUpdate:modelValue":
                      e[4] || (e[4] = (a) => (b(i) ? (i.value = a) : null)),
                    ref: "form",
                    "lazy-validation": "",
                    onKeydown:
                      e[5] ||
                      (e[5] = M(
                        O(() => {}, ["prevent"]),
                        ["enter"],
                      )),
                  },
                  {
                    default: x(() => [
                      t(w) != ""
                        ? (f(),
                          y(
                            Q,
                            {
                              key: 0,
                              outlined: "",
                              color: "error",
                              style: {
                                "border-radius": "12px",
                                "margin-bottom": "20px",
                              },
                            },
                            { default: x(() => [$(T(t(w)), 1)]), _: 1 },
                          ))
                        : g("", !0),
                      c(
                        C,
                        {
                          class: "mb-0",
                          variant: "outlined",
                          "persistent-hint": "",
                          label: "Password",
                          modelValue: t(l),
                          "onUpdate:modelValue":
                            e[0] ||
                            (e[0] = (a) => (b(l) ? (l.value = a) : null)),
                          required: "",
                          rules: t(B),
                          "prepend-inner-icon": t(u)
                            ? "mdi-eye"
                            : "mdi-eye-off",
                          type: t(u) ? "text" : "password",
                          "onClick:prependInner":
                            e[1] || (e[1] = (a) => (u.value = !t(u))),
                        },
                        null,
                        8,
                        ["modelValue", "rules", "prepend-inner-icon", "type"],
                      ),
                      t(p).value >= 0 && t(p).value <= 100
                        ? (f(),
                          y(
                            j,
                            {
                              key: 1,
                              class: "mb-3 mt-3",
                              color: t(p).color,
                              value: t(p).value,
                            },
                            null,
                            8,
                            ["color", "value"],
                          ))
                        : g("", !0),
                      c(
                        C,
                        {
                          class: "mb-0",
                          variant: "outlined",
                          "persistent-hint": "",
                          label: "Password di conferma",
                          modelValue: t(n),
                          "onUpdate:modelValue":
                            e[2] ||
                            (e[2] = (a) => (b(n) ? (n.value = a) : null)),
                          required: "",
                          rules: t(I),
                          "prepend-inner-icon": t(d)
                            ? "mdi-eye"
                            : "mdi-eye-off",
                          type: t(d) ? "text" : "password",
                          "onClick:prependInner":
                            e[3] || (e[3] = (a) => (d.value = !t(d))),
                        },
                        null,
                        8,
                        ["modelValue", "rules", "prepend-inner-icon", "type"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"],
                ),
                r("div", ee, [
                  c(
                    _,
                    { onClick: N, disabled: !t(i), style: { width: "100%" } },
                    {
                      default: x(() => [
                        ...(e[7] || (e[7] = [$("Scegli password", -1)])),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"],
                  ),
                ]),
                e[11] || (e[11] = r("br", null, null, -1)),
                e[12] || (e[12] = r("br", null, null, -1)),
                r(
                  "a",
                  {
                    onClick: e[6] || (e[6] = (a) => (v.value = !0)),
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
                e[13] || (e[13] = r("br", null, null, -1)),
                r("div", { style: { float: "right" } }, [
                  r(
                    "span",
                    {
                      onClick: S,
                      style: { cursor: "pointer", "text-align": "right" },
                    },
                    "Indietro",
                  ),
                ]),
              ]),
              t(v) ? (f(), y(m, { key: 0, onClose: R })) : g("", !0),
            ])
          );
        }
      );
    },
  };
export { Ve as default };
