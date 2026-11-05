import { bh as a, bi as s, bj as r, aQ as u, bk as o } from "./CYsiv7Qj.js";
function i(e) {
  const t = e || s();
  return (
    t?.ssrContext?.head ||
    t?.runWithContext(() => {
      if (r()) return u(o);
    })
  );
}
function x(e, t = {}) {
  const n = i(t.nuxt);
  if (n) return a(e, { head: n, ...t });
}
export { x as u };
