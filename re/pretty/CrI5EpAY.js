import { _ as E } from "./R_QikKiu.js";
import {
  E as Z,
  u as q,
  F as D,
  r as a,
  k,
  x as F,
  z as r,
  J as g,
  K as y,
  B as n,
  C as w,
  N as I,
  O as K,
  M as b,
  L as t,
  y as v,
  D as P,
  A as S,
  n as T,
} from "./CYsiv7Qj.js";
import { _ as U } from "./DNHpBbj1.js";
import { z as M } from "./CE7JQOIN.js";
import { u as O } from "./LKQL6vAN.js";
import { V as W } from "./MIubIMrV.js";
import { V as H, c as J } from "./B_W9U9Wp.js";
import { V as _ } from "./CvNP7w2k.js";
import { V as C } from "./BrCrqdgZ.js";
import { V as j } from "./BqujDEEl.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./92s3wAHG.js";
import "./DzPBUvYZ.js";
const G = { style: { margin: "auto 20%", "max-width": "680px" } },
  Q = { class: "divlogin mt-6" },
  X = { style: { display: "flex" } },
  ye = {
    __name: "reset-password",
    setup(Y) {
      O({ title: "Login", meta: [{ name: "description", content: "Login" }] });
      const { status: h, signIn: ee } = Z(),
        R = T(),
        x = q(),
        $ = D(),
        c = a(!1),
        i = a(""),
        l = a(""),
        f = a(""),
        u = a(!1),
        d = a(!1),
        p = a(!1),
        z = a([
          (o) => !!o || "Password obbligatoria",
          (o) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              o,
            ) ||
            `La Password deve conte nere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
        ]),
        B = k(() => [
          (o) => !!o || "Confirm Password obbligatoria",
          (o) =>
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?])([a-zA-Z0-9\W]{8,})$/.test(
              o,
            ) ||
            `La Password deve conte nere almeno 8 caratteri, almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola e un carattere speciale tre i seguenti  !@#$%^&*()_+-=[]{};':"\\|,.<>/?`,
          (o) => o === l.value || "Password di conferma non corrispondente",
        ]),
        m = k(() => {
          switch (M(l.value).score) {
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
        A = async () => {
          f.value = "";
          let o = {
            password: l.value,
            password_confirmation: i.value,
            reset_password_token: $.query.token,
          };
          try {
            const { data: e, status: V } = await $fetch(
              R.public.apiBaseurl + "/reset_password",
              { method: "POST", body: o },
            );
            (sntext.value = "Password Recuperata corretamente"),
              (snbar.value = !0),
              (sncolor.value = "green"),
              x.push("/login");
          } catch (e) {
            console.log("ERR", e.response._data.error.messages[0]),
              (sntext.value =
                "Recovery Password Error: " +
                e.response._data.error.messages[0]),
              (snbar.value = !0),
              (sncolor.value = "red");
          }
        };
      function L() {
        c.value = !1;
      }
      function N() {
        x.push("/login");
      }
      return (o, e) => {
        const V = E;
        return (
          v(),
          F("div", G, [
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
                    src: U,
                    style: {
                      "text-align": "center",
                      width: "auto",
                      margin: "6px auto",
                    },
                  }),
                ],
                -1,
              )),
            r("div", Q, [
              e[8] ||
                (e[8] = r(
                  "h2",
                  { style: { "font-size": "36px", "font-weight": "500" } },
                  "Resetta la tua password",
                  -1,
                )),
              e[9] || (e[9] = r("br", null, null, -1)),
              e[10] || (e[10] = r("br", null, null, -1)),
              n(
                W,
                {
                  modelValue: t(u),
                  "onUpdate:modelValue":
                    e[4] || (e[4] = (s) => (b(u) ? (u.value = s) : null)),
                  ref: "form",
                  "lazy-validation": "",
                  onKeydown:
                    e[5] ||
                    (e[5] = I(
                      K(() => {}, ["prevent"]),
                      ["enter"],
                    )),
                },
                {
                  default: w(() => [
                    t(f) != ""
                      ? (v(),
                        g(
                          _,
                          {
                            key: 0,
                            outlined: "",
                            color: "error",
                            style: {
                              "border-radius": "12px",
                              "margin-bottom": "20px",
                            },
                          },
                          { default: w(() => [P(S(t(f)), 1)]), _: 1 },
                        ))
                      : y("", !0),
                    n(
                      C,
                      {
                        class: "mb-8",
                        variant: "outlined",
                        "persistent-hint": "",
                        label: "Password",
                        modelValue: t(l),
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (s) => (b(l) ? (l.value = s) : null)),
                        required: "",
                        rules: t(z),
                        "prepend-inner-icon": t(d) ? "mdi-eye" : "mdi-eye-off",
                        type: t(d) ? "text" : "password",
                        "onClick:prependInner":
                          e[1] || (e[1] = (s) => (d.value = !t(d))),
                      },
                      null,
                      8,
                      ["modelValue", "rules", "prepend-inner-icon", "type"],
                    ),
                    t(m).value >= 0 && t(m).value <= 100
                      ? (v(),
                        g(
                          J,
                          {
                            key: 1,
                            class: "mb-3 mt-3",
                            color: t(m).color,
                            value: t(m).value,
                          },
                          null,
                          8,
                          ["color", "value"],
                        ))
                      : y("", !0),
                    n(
                      C,
                      {
                        class: "mb-8",
                        variant: "outlined",
                        "persistent-hint": "",
                        label: "Password di conferma",
                        modelValue: t(i),
                        "onUpdate:modelValue":
                          e[2] || (e[2] = (s) => (b(i) ? (i.value = s) : null)),
                        required: "",
                        rules: t(B),
                        "prepend-inner-icon": t(p) ? "mdi-eye" : "mdi-eye-off",
                        type: t(p) ? "text" : "password",
                        "onClick:prependInner":
                          e[3] || (e[3] = (s) => (p.value = !t(p))),
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
              e[11] || (e[11] = r("br", null, null, -1)),
              r("div", X, [
                n(
                  H,
                  { onClick: A, disabled: !t(u) },
                  {
                    default: w(() => [
                      ...(e[7] || (e[7] = [P("Reset your password", -1)])),
                    ]),
                    _: 1,
                  },
                  8,
                  ["disabled"],
                ),
                n(j),
              ]),
              e[12] || (e[12] = r("br", null, null, -1)),
              e[13] || (e[13] = r("br", null, null, -1)),
              r(
                "a",
                {
                  onClick: e[6] || (e[6] = (s) => (c.value = !0)),
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
            ]),
            e[15] || (e[15] = r("br", null, null, -1)),
            e[16] || (e[16] = r("br", null, null, -1)),
            r("div", { style: { float: "right" } }, [
              r(
                "span",
                {
                  onClick: N,
                  style: { cursor: "pointer", "text-align": "right" },
                },
                "Back",
              ),
            ]),
            t(c) ? (v(), g(V, { key: 0, onClose: L })) : y("", !0),
          ])
        );
      };
    },
  };
export { ye as default };
