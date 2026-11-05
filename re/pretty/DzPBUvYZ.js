import { V as c, k as a } from "./CYsiv7Qj.js";
const r = c(
  {
    iconSize: [Number, String],
    iconSizes: {
      type: Array,
      default: () => [
        ["x-small", 10],
        ["small", 16],
        ["default", 24],
        ["large", 28],
        ["x-large", 32],
      ],
    },
  },
  "iconSize",
);
function S(i, n) {
  return {
    iconSize: a(() => {
      const o = new Map(i.iconSizes),
        e = i.iconSize ?? n() ?? "default";
      return o.has(e) ? o.get(e) : e;
    }),
  };
}
export { r as m, S as u };
