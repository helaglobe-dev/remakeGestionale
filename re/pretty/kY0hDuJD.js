import { _ as R } from "./R_QikKiu.js";
import {
  E as A,
  u as P,
  r as s,
  G as c,
  x as $,
  z as t,
  J as w,
  K as V,
  B as u,
  C as f,
  N as D,
  M as y,
  L as o,
  y as g,
  D as b,
  A as F,
} from "./CYsiv7Qj.js";
import { _ as K } from "./DNHpBbj1.js";
import { u as S } from "./LKQL6vAN.js";
import { V as U } from "./MIubIMrV.js";
import { V as h } from "./B_W9U9Wp.js";
import { V as q } from "./CvNP7w2k.js";
import { V as k } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./DzPBUvYZ.js";
const I = { style: { margin: "auto", "max-width": "680px", width: "80%" } },
  J = { class: "mt-6 text-center" },
  O = { style: { display: "flex" }, class: "mt-4" },
  se = {
    __name: "login",
    setup(T) {
      S({ title: "Login", meta: [{ name: "description", content: "Login" }] });
      const { status: Z, signIn: C } = A(),
        v = P(),
        a = s(""),
        n = s(""),
        m = s(""),
        p = s(!1),
        i = s(!1),
        d = s(!1),
        z = c("snackbar"),
        B = s([
          (l) => !!l || "E-mail obbligatoria",
          (l) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              l,
            ) || "Email non valida",
        ]);
      c("config");
      function E() {
        p.value = !1;
      }
      const x = async () => {
        try {
          m.value = "";
          let l = { email: a.value, password: n.value },
            e = await C(l, { redirect: !1 });
          v.push("/");
        } catch (l) {
          console.log("ERROR:", l);
          let e = JSON.parse(l.data).errors.detail;
          z.value = { text: e, type: "danger", show: !0 };
        }
      };
      function L() {
        v.push("/lostpassword");
      }
      return (l, e) => {
        const N = R;
        return (
          g(),
          $("div", I, [
            e[11] ||
              (e[11] = t(
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
                  t("img", {
                    src: K,
                    style: {
                      "text-align": "center",
                      width: "auto",
                      margin: "6px auto",
                    },
                  }),
                ],
                -1,
              )),
            t("div", J, [
              e[6] ||
                (e[6] = t(
                  "h2",
                  { style: { "font-weight": "500" } },
                  "Login",
                  -1,
                )),
              e[7] || (e[7] = t("br", null, null, -1)),
              u(
                U,
                {
                  modelValue: o(i),
                  "onUpdate:modelValue":
                    e[3] || (e[3] = (r) => (y(i) ? (i.value = r) : null)),
                  ref: "form",
                  "lazy-validation": "",
                  onKeyup: D(x, ["native", "enter"]),
                },
                {
                  default: f(() => [
                    o(m) != ""
                      ? (g(),
                        w(
                          q,
                          {
                            key: 0,
                            outlined: "",
                            color: "error",
                            style: {
                              "border-radius": "12px",
                              "margin-bottom": "20px",
                            },
                          },
                          { default: f(() => [b(F(o(m)), 1)]), _: 1 },
                        ))
                      : V("", !0),
                    u(
                      k,
                      {
                        class: "mb-2",
                        style: { "max-width": "680px" },
                        label: "Email",
                        variant: "outlined",
                        "persistent-hint": "",
                        modelValue: o(a),
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (r) => (y(a) ? (a.value = r) : null)),
                        required: "",
                        rules: o(B),
                        "prepend-inner-icon": "mdi-email-outline",
                      },
                      null,
                      8,
                      ["modelValue", "rules"],
                    ),
                    u(
                      k,
                      {
                        class: "mb-2",
                        style: { "max-width": "680px" },
                        label: "Password",
                        modelValue: o(n),
                        "onUpdate:modelValue":
                          e[1] || (e[1] = (r) => (y(n) ? (n.value = r) : null)),
                        required: "",
                        variant: "outlined",
                        "prepend-inner-icon": o(d) ? "mdi-eye" : "mdi-eye-off",
                        type: o(d) ? "text" : "password",
                        "onClick:prependInner":
                          e[2] || (e[2] = (r) => (d.value = !o(d))),
                      },
                      null,
                      8,
                      ["modelValue", "prepend-inner-icon", "type"],
                    ),
                    t("div", { style: { float: "right" } }, [
                      t(
                        "span",
                        {
                          onClick: L,
                          style: {
                            cursor: "pointer",
                            "text-align": "right",
                            "font-size": "smaller",
                          },
                        },
                        "Password dimenticata?",
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
              e[8] || (e[8] = t("br", null, null, -1)),
              t("div", O, [
                u(
                  h,
                  { onClick: x, disabled: !o(i), style: { width: "100%" } },
                  {
                    default: f(() => [...(e[5] || (e[5] = [b("Login", -1)]))]),
                    _: 1,
                  },
                  8,
                  ["disabled"],
                ),
              ]),
              e[9] || (e[9] = t("br", null, null, -1)),
              e[10] || (e[10] = t("br", null, null, -1)),
              t(
                "a",
                {
                  onClick: e[4] || (e[4] = (r) => (p.value = !0)),
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
            o(p) ? (g(), w(N, { key: 0, onClose: E })) : V("", !0),
          ])
        );
      };
    },
  };
export { se as default };
