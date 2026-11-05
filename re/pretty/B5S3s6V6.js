const l = 6048e5,
  h = 864e5,
  M = 6e4,
  d = 36e5,
  m = 1e3,
  u = Symbol.for("constructDateFrom");
function c(t, n) {
  return typeof t == "function"
    ? t(n)
    : t && typeof t == "object" && u in t
      ? t[u](n)
      : t instanceof Date
        ? new t.constructor(n)
        : new Date(n);
}
function r(t, n) {
  return c(n || t, t);
}
function f(t, n, s) {
  const e = r(t, s?.in);
  if (isNaN(n)) return c(t, NaN);
  if (!n) return e;
  const i = e.getDate(),
    o = c(t, e.getTime());
  o.setMonth(e.getMonth() + n + 1, 0);
  const a = o.getDate();
  return i >= a ? o : (e.setFullYear(o.getFullYear(), o.getMonth(), i), e);
}
function D(t, n) {
  const s = r(t, n?.in);
  return s.setDate(1), s.setHours(0, 0, 0, 0), s;
}
function F(t, n) {
  const s = r(t, n?.in),
    e = s.getFullYear();
  return s.setFullYear(e + 1, 0, 0), s.setHours(23, 59, 59, 999), s;
}
function g(t, n) {
  const s = r(t, n?.in);
  return s.setFullYear(s.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}
function y(t, n, s) {
  return f(t, -n, s);
}
export {
  g as a,
  y as b,
  c,
  f as d,
  F as e,
  h as f,
  l as g,
  M as h,
  m as i,
  d as m,
  D as s,
  r as t,
};
