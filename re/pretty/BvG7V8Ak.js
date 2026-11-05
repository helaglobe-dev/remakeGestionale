import { E as o } from "./CYsiv7Qj.js";
function u(r, e) {
  const { token: a } = o();
  let t = a.value;
  return $fetch(r, {
    ...e,
    headers: { Authorization: t ? `${t}` : "", ...e?.headers },
  });
}
export { u as $ };
