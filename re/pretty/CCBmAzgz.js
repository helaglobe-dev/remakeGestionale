import { s, o as t, aM as e, cb as n } from "./CYsiv7Qj.js";
function i() {
  const o = s(!1);
  return (
    t(() => {
      window.requestAnimationFrame(() => {
        o.value = !0;
      });
    }),
    {
      ssrBootStyles: e(() =>
        o.value ? void 0 : { transition: "none !important" },
      ),
      isBooted: n(o),
    }
  );
}
export { i as u };
