import {
  d as f,
  s as u,
  o as d,
  b7 as i,
  b8 as b,
  h as m,
  x as h,
  aP as k,
} from "./CYsiv7Qj.js";
const p = Symbol.for("nuxt:client-only"),
  y = f({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, { slots: a, attrs: n }) {
      const t = u(!1);
      d(() => {
        t.value = !0;
      });
      const o = i();
      return (
        o && (o._nuxtClientOnly = !0),
        k(p, !0),
        () => {
          if (t.value) {
            const l = a.default?.();
            return l && l.length === 1 ? [b(l[0], n)] : l;
          }
          const c = a.fallback || a.placeholder;
          if (c) return m(c);
          const r = e.fallback || e.placeholder || "",
            s = e.fallbackTag || e.placeholderTag || "span";
          return h(s, n, r);
        }
      );
    },
  });
export { y as _ };
