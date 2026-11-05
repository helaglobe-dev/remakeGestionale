import { _ as h } from "./R_QikKiu.js";
import {
  E as P,
  u as B,
  r as n,
  G as N,
  x as E,
  z as e,
  J as g,
  K as v,
  B as m,
  C as p,
  N as O,
  O as z,
  M as x,
  L as s,
  y as c,
  D as w,
  A,
  n as S,
} from "./CYsiv7Qj.js";
import { _ as q } from "./DNHpBbj1.js";
import { u as $ } from "./LKQL6vAN.js";
import { V as D } from "./MIubIMrV.js";
import { V as F } from "./B_W9U9Wp.js";
import { V as I } from "./CvNP7w2k.js";
import { V as J } from "./BrCrqdgZ.js";
import "./sbneMOUU.js";
import "./D3DeQzvF.js";
import "./BqujDEEl.js";
import "./Dlfzj7mx.js";
import "./fKsYyVgl.js";
import "./DzPBUvYZ.js";
const K = { style: { margin: "auto", "max-width": "680px", width: "80%" } },
  T = { class: "mt-6 text-center" },
  _ = { style: { display: "flex" } },
  it = {
    __name: "lostpassword",
    setup(L) {
      $({
        title: "Recupero Password",
        meta: [{ name: "description", content: "Recupero Password" }],
      });
      const { status: M, signIn: U } = P(),
        V = S(),
        b = B(),
        a = n(""),
        u = n(!1),
        f = N("snackbar"),
        d = n(""),
        i = n(!1),
        y = {
          required: (o) => !!o || "Field is required",
          email: (o) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              o,
            ) || "Invalid email",
        },
        R = async () => {
          d.value = "";
          let o = { email: a.value };
          try {
            const { data: t, status: r } = await $fetch(
              V.public.apiBaseurl + "user/sendemailrecoverypassword",
              { method: "POST", body: o },
            );
            f.value = {
              text: "Email di richiesta password inviata con successo",
              type: "success",
              show: !0,
            };
          } catch (t) {
            console.log("ERROR:", JSON.parse(t.data));
            let r = JSON.parse(t.data).errors.detail;
            console.log("ERROR1:", r),
              (f.value = { text: r, type: "danger", show: !0 });
          }
        };
      function k() {
        u.value = !1;
      }
      function C() {
        b.push("/login");
      }
      return (o, t) => {
        const r = h;
        return (
          c(),
          E("div", K, [
            t[10] ||
              (t[10] = e(
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
                  e("img", {
                    src: q,
                    style: {
                      "text-align": "center",
                      width: "auto",
                      margin: "6px auto",
                    },
                  }),
                ],
                -1,
              )),
            e("div", T, [
              t[5] ||
                (t[5] = e(
                  "h2",
                  { style: { "font-weight": "500" } },
                  "Richiedi la Password",
                  -1,
                )),
              t[6] || (t[6] = e("br", null, null, -1)),
              m(
                D,
                {
                  modelValue: s(i),
                  "onUpdate:modelValue":
                    t[1] || (t[1] = (l) => (x(i) ? (i.value = l) : null)),
                  ref: "form",
                  "lazy-validation": "",
                  onKeydown:
                    t[2] ||
                    (t[2] = O(
                      z(() => {}, ["prevent"]),
                      ["enter"],
                    )),
                },
                {
                  default: p(() => [
                    s(d) != ""
                      ? (c(),
                        g(
                          I,
                          {
                            key: 0,
                            outlined: "",
                            color: "error",
                            style: {
                              "border-radius": "12px",
                              "margin-bottom": "20px",
                            },
                          },
                          { default: p(() => [w(A(s(d)), 1)]), _: 1 },
                        ))
                      : v("", !0),
                    m(
                      J,
                      {
                        class: "mb-2",
                        style: { "max-width": "680px" },
                        label: "Email",
                        variant: "outlined",
                        "persistent-hint": "",
                        modelValue: s(a),
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (l) => (x(a) ? (a.value = l) : null)),
                        rules: [y.required, y.email],
                        required: "",
                        "prepend-inner-icon": "mdi-email-outline",
                      },
                      null,
                      8,
                      ["modelValue", "rules"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"],
              ),
              t[7] || (t[7] = e("br", null, null, -1)),
              e("div", _, [
                m(
                  F,
                  { onClick: R, disabled: !s(i), style: { width: "100%" } },
                  {
                    default: p(() => [
                      ...(t[4] || (t[4] = [w("Richiedi la Password", -1)])),
                    ]),
                    _: 1,
                  },
                  8,
                  ["disabled"],
                ),
              ]),
              t[8] || (t[8] = e("br", null, null, -1)),
              t[9] || (t[9] = e("br", null, null, -1)),
              e("div", null, [
                e(
                  "a",
                  {
                    onClick: t[3] || (t[3] = (l) => (u.value = !0)),
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
              e("div", { style: { float: "right", "margin-top": "30px" } }, [
                e(
                  "span",
                  {
                    onClick: C,
                    style: { cursor: "pointer", "text-align": "right" },
                  },
                  "Indietro",
                ),
              ]),
            ]),
            s(u) ? (c(), g(r, { key: 0, onClose: k })) : v("", !0),
          ])
        );
      };
    },
  };
export { it as default };
