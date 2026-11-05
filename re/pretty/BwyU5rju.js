import { c5 as s, bU as c } from "./CYsiv7Qj.js";
function o(r, n, l) {
  return Object.keys(r)
    .filter((e) => s(e) && e.endsWith(n))
    .reduce(
      (e, t) => ((e[t.slice(0, -n.length)] = (i) => c(r[t], i, l(i))), e),
      {},
    );
}
export { o as g };
