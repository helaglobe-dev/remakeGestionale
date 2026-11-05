import {
  u as E,
  E as N,
  G as x,
  r as o,
  o as U,
  x as K,
  z as m,
  B as s,
  C as v,
  N as V,
  O,
  M as p,
  L as l,
  y as S,
  D as c,
  n as D,
} from "./CYsiv7Qj.js";
import { u as P } from "./LKQL6vAN.js";
import { $ as T } from "./BvG7V8Ak.js";
import { V as $ } from "./MIubIMrV.js";
import { V as b } from "./BrCrqdgZ.js";
import { V as w } from "./B_W9U9Wp.js";
import { V as q } from "./BqujDEEl.js";
const z = { class: "pl-10 pr-10" },
  A = { class: "divcenterpage" },
  F = { style: { display: "flex" } },
  _ = {
    __name: "profile",
    setup(G) {
      const C = E(),
        R = D(),
        { status: H, signIn: I, signOut: L, getSession: k, data: n } = N();
      x("user");
      const i = o(!1);
      o("");
      const g = o([(d) => !!d || "Campo obbligatorio"]),
        f = x("snackbar"),
        y = o(0),
        a = o(""),
        r = o(""),
        u = o("");
      P({
        title: "Profilo utente",
        meta: [{ name: "description", content: "Profilo utente" }],
      }),
        U(() => {
          B();
        });
      const B = () => {
          (y.value = n.value.id),
            (a.value = n.value.firstname),
            (r.value = n.value.lastname),
            (u.value = n.value.email);
        },
        M = async () => {
          let d = { id: y.value, firstname: a.value, lastname: r.value };
          try {
            const { data: e, status: t } = T(
              R.public.apiBaseurl + "user/profile",
              { method: "POST", body: d },
            );
            (f.value = {
              text: "Modifica profilo completata",
              type: "success",
              show: !0,
            }),
              k();
          } catch (e) {
            console.log("ERROR", e),
              e.response._data.error
                ? (f.value = {
                    text:
                      "Errore modifica profilo: " +
                      e.response._data.error.messages[0],
                    type: "danger",
                    show: !0,
                  })
                : (f.value = {
                    text:
                      "Errore modifica profilo: " +
                      e.response._data.detail[0].msg,
                    type: "danger",
                    show: !0,
                  });
          }
        };
      return (d, e) => (
        S(),
        K("div", z, [
          m("div", A, [
            e[11] ||
              (e[11] = m(
                "h3",
                { class: "pageh3 mt-8 mb-4" },
                "Modifica il profilo",
                -1,
              )),
            s(
              $,
              {
                modelValue: l(i),
                "onUpdate:modelValue":
                  e[6] || (e[6] = (t) => (p(i) ? (i.value = t) : null)),
                ref: "form",
                "lazy-validation": "",
                onKeydown:
                  e[7] ||
                  (e[7] = V(
                    O(() => {}, ["prevent"]),
                    ["enter"],
                  )),
              },
              {
                default: v(() => [
                  s(
                    b,
                    {
                      class: "mb-2",
                      onKeydown:
                        e[0] ||
                        (e[0] = V((t) => t.preventDefault(), ["enter"])),
                      modelValue: l(a),
                      "onUpdate:modelValue":
                        e[1] || (e[1] = (t) => (p(a) ? (a.value = t) : null)),
                      required: "",
                      rules: l(g),
                      variant: "outlined",
                      "persistent-hint": "",
                      label: "Nome",
                    },
                    null,
                    8,
                    ["modelValue", "rules"],
                  ),
                  s(
                    b,
                    {
                      class: "mb-2",
                      onKeydown:
                        e[2] ||
                        (e[2] = V((t) => t.preventDefault(), ["enter"])),
                      modelValue: l(r),
                      "onUpdate:modelValue":
                        e[3] || (e[3] = (t) => (p(r) ? (r.value = t) : null)),
                      required: "",
                      rules: l(g),
                      variant: "outlined",
                      "persistent-hint": "",
                      label: "Cognome",
                    },
                    null,
                    8,
                    ["modelValue", "rules"],
                  ),
                  s(
                    b,
                    {
                      class: "mb-2",
                      modelValue: l(u),
                      "onUpdate:modelValue":
                        e[4] || (e[4] = (t) => (p(u) ? (u.value = t) : null)),
                      variant: "outlined",
                      "persistent-hint": "",
                      label: "email",
                      disabled: "",
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                  e[10] || (e[10] = m("br", null, null, -1)),
                  m("div", F, [
                    s(
                      w,
                      {
                        class: "",
                        onClick: e[5] || (e[5] = (t) => l(C).push("/")),
                        color: "red",
                      },
                      {
                        default: v(() => [
                          ...(e[8] || (e[8] = [c("Annulla", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    s(q),
                    s(
                      w,
                      { onClick: M, disabled: !l(i), color: "green" },
                      {
                        default: v(() => [
                          ...(e[9] || (e[9] = [c("Modifica", -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disabled"],
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            ),
          ]),
        ])
      );
    },
  };
export { _ as default };
