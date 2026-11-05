import {
  G as V,
  r as i,
  F as b,
  as as g,
  n as y,
  J as k,
  y as _,
  C as t,
  B as o,
  L as s,
  z as x,
  A as w,
  D as B,
  b9 as v,
  cs as h,
} from "./CYsiv7Qj.js";
import { u as C } from "./LKQL6vAN.js";
import { V as R, a as S } from "./Bd9VYqRx.js";
import { V as j, a as z } from "./B_W9U9Wp.js";
import "./CCBmAzgz.js";
import "./fKsYyVgl.js";
const L = { class: "capitalizepar", style: { display: "inline-block" } },
  $ = {
    __name: "service",
    setup(N) {
      const e = V("snackbar", () => ({ text: null, type: "success" })),
        p = i(2e3);
      b();
      const l = y(),
        u = i(!1);
      g(
        () => e.value.text,
        (r, a) => {
          u.value = e.value.text != "";
        },
      ),
        C({});
      const d = {
          name: "Helaproject",
          short_name: "Helaproject",
          start_url: window.location.href || "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#000000",
          icons: [
            {
              src: l.public.backendurl + "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: l.public.backendurl + "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
          ],
        },
        m = new Blob([JSON.stringify(d)], {
          type: "application/manifest+json",
        }),
        f = URL.createObjectURL(m),
        n = document.createElement("link");
      return (
        (n.rel = "manifest"),
        (n.href = f),
        document.head.appendChild(n),
        (r, a) => (
          _(),
          k(h, null, {
            default: t(() => [
              o(
                R,
                {
                  vertical: "",
                  color:
                    s(e).type == "danger"
                      ? "red"
                      : s(e).type == "success"
                        ? "green"
                        : "orange",
                  top: "",
                  modelValue: s(e).show,
                  "onUpdate:modelValue":
                    a[1] || (a[1] = (c) => (s(e).show = c)),
                  timeout: s(p),
                },
                {
                  actions: t(() => [
                    o(
                      j,
                      {
                        color: "#1B1B1B",
                        onClick: a[0] || (a[0] = (c) => (e.value = !1)),
                      },
                      {
                        default: t(() => [
                          o(
                            z,
                            { class: "navicon" },
                            {
                              default: t(() => [
                                ...(a[2] || (a[2] = [B("mdi-close", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  default: t(() => [x("span", L, w(s(e).text), 1)]),
                  _: 1,
                },
                8,
                ["color", "modelValue", "timeout"],
              ),
              o(
                S,
                { class: "colorscuro", id: "service" },
                { default: t(() => [v(r.$slots, "default")]), _: 3 },
              ),
            ]),
            _: 3,
          })
        )
      );
    },
  };
export { $ as default };
