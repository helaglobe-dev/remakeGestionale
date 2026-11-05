import {
  g as d,
  t as v,
  B as k,
  u as C,
  _ as P,
  $ as h,
  h as S,
  n as g,
  d as y,
  a0 as V,
  a1 as B,
  m as b,
  A as z,
  z as R,
} from "./B_W9U9Wp.js";
import {
  U as T,
  V as f,
  b2 as p,
  W as D,
  B as E,
  I as L,
  a3 as x,
  b5 as A,
  aB as F,
} from "./CYsiv7Qj.js";
const I = f(
    {
      color: String,
      ...R(),
      ...F(),
      ...z(),
      ...b(),
      ...B(),
      ...V(),
      ...y(),
      ...g(),
      ...A(),
    },
    "VSheet",
  ),
  W = T()({
    name: "VSheet",
    props: I(),
    setup(e, s) {
      let { slots: a } = s;
      const { themeClasses: o } = p(e),
        { backgroundColorClasses: t, backgroundColorStyles: n } = d(
          () => e.color,
        ),
        { borderClasses: l } = v(e),
        { dimensionStyles: r } = k(e),
        { elevationClasses: m } = C(e),
        { locationStyles: u } = P(e),
        { positionClasses: i } = h(e),
        { roundedClasses: c } = S(e);
      return (
        D(() =>
          E(
            e.tag,
            {
              class: x([
                "v-sheet",
                o.value,
                t.value,
                l.value,
                m.value,
                i.value,
                c.value,
                e.class,
              ]),
              style: L([n.value, r.value, u.value, e.style]),
            },
            a,
          ),
        ),
        {}
      );
    },
  });
export { W as V, I as m };
