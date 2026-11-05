import { V as S } from "./sbneMOUU.js";
import { V as m, a as c } from "./B_W9U9Wp.js";
import { V as z } from "./BqujDEEl.js";
import { V as B } from "./Dlfzj7mx.js";
import {
  r as a,
  o as b,
  J as x,
  y as u,
  C as o,
  B as n,
  L as s,
  D as r,
  x as y,
  P as g,
  A as v,
  S as D,
  M as N,
} from "./CYsiv7Qj.js";
const $ = {
  __name: "ConfirmDeleteDlg",
  props: {
    text: String,
    title: String,
    color: String,
    button: String,
    iconadelete: Boolean,
  },
  emits: ["delete", "close"],
  setup(k, { emit: C }) {
    const d = C,
      t = k,
      i = a(!1),
      p = a(!0),
      f = a(""),
      V = a("");
    return (
      b(() => {
        (f.value = t.title || "Conferma la cancellazione"),
          (V.value =
            t.text ||
            "Vuoi veramente confermare l'eliminazione? Il processo non è reversibile."),
          (p.value = t.iconadelete);
      }),
      (T, e) => (
        u(),
        x(
          B,
          {
            modelValue: s(i),
            "onUpdate:modelValue":
              e[2] || (e[2] = (l) => (N(i) ? (i.value = l) : null)),
            "max-width": "400",
            persistent: "",
          },
          {
            activator: o(({ props: l }) => [
              s(p)
                ? (u(),
                  y(
                    "span",
                    D(g({ key: 1 }, l)),
                    [
                      n(
                        c,
                        {
                          color: t.color,
                          title: t.button,
                          size: "large",
                          style: { "font-size": "30px" },
                        },
                        {
                          default: o(() => [
                            ...(e[4] || (e[4] = [r("mdi-delete-outline", -1)])),
                          ]),
                          _: 1,
                        },
                        8,
                        ["color", "title"],
                      ),
                      r(" " + v(t.button), 1),
                    ],
                    16,
                  ))
                : (u(),
                  x(
                    m,
                    g({ key: 0 }, l, { color: t.color }),
                    {
                      default: o(() => [
                        n(
                          c,
                          { size: "large" },
                          {
                            default: o(() => [
                              ...(e[3] ||
                                (e[3] = [r("mdi-delete-outline", -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        r(v(t.button), 1),
                      ]),
                      _: 1,
                    },
                    16,
                    ["color"],
                  )),
            ]),
            default: o(() => [
              n(
                S,
                {
                  "prepend-icon": "mdi-delete-outline",
                  text: s(V),
                  title: s(f),
                },
                {
                  actions: o(() => [
                    n(
                      m,
                      {
                        onClick:
                          e[0] ||
                          (e[0] = (l) => {
                            (i.value = !1), d("close");
                          }),
                      },
                      {
                        default: o(() => [
                          ...(e[5] || (e[5] = [r(" NO ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    n(z),
                    n(
                      m,
                      {
                        color: "red",
                        onClick:
                          e[1] ||
                          (e[1] = (l) => {
                            d("delete"), (i.value = !1);
                          }),
                      },
                      {
                        default: o(() => [
                          ...(e[6] || (e[6] = [r(" Elimina ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["text", "title"],
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
export { $ as _ };
