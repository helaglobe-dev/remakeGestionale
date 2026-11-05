import { r as q } from "./QgNM3dor.js";
import {
  E as K,
  r as O,
  G as Q,
  u as W,
  o as X,
  e as Y,
  x as I,
  z as V,
  B as b,
  J as L,
  L as E,
  C as g,
  Q as P,
  R as Z,
  M as tt,
  n as et,
  y as T,
  D as k,
  A,
  I as R,
  K as rt,
} from "./CYsiv7Qj.js";
import { u as st } from "./LKQL6vAN.js";
import { $ as z } from "./BvG7V8Ak.js";
import { V as at } from "./ss-1h9Hv.js";
import { V as nt } from "./Dlfzj7mx.js";
import { a as B, V as F } from "./B_W9U9Wp.js";
import { a as M, c as H, d as U, V as G, b as it } from "./sbneMOUU.js";
import { V as ot } from "./BqujDEEl.js";
import "./92s3wAHG.js";
import "./Cv1q1CuH.js";
import "./BrCrqdgZ.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
import "./BwyU5rju.js";
import "./CBVsQd7J.js";
var _, J;
function lt() {
  if (J) return _;
  J = 1;
  function w(r) {
    return r.replace(/^\s+|\s+$/g, "");
  }
  var p = function () {
    (this.comments = []),
      (this.extractedComments = []),
      (this.headers = {}),
      (this.headerOrder = []),
      (this.items = []);
  };
  return (
    (p.prototype.save = function (r, i) {
      q.writeFile(r, this.toString(), i);
    }),
    (p.prototype.toString = function () {
      var r = [];
      this.comments &&
        this.comments.forEach(function (o) {
          r.push(("# " + o).trim());
        }),
        this.extractedComments &&
          this.extractedComments.forEach(function (o) {
            r.push(("#. " + o).trim());
          }),
        r.push('msgid ""'),
        r.push('msgstr ""');
      var i = this,
        l = [];
      this.headerOrder.forEach(function (o) {
        o in i.headers && l.push(o);
      });
      var d = Object.keys(this.headers);
      return (
        d.forEach(function (o) {
          l.indexOf(o) === -1 && l.push(o);
        }),
        l.forEach(function (o) {
          r.push('"' + o + ": " + i.headers[o] + '\\n"');
        }),
        r.push(""),
        this.items.forEach(function (o) {
          r.push(o.toString()), r.push("");
        }),
        r.join(`
`)
      );
    }),
    (p.load = function (r, i) {
      q.readFile(r, "utf-8", function (l, d) {
        if (l) return i(l);
        var o = p.parse(d);
        i(null, o);
      });
    }),
    (p.parse = function (r) {
      r = r.replace(
        /\r\n/g,
        `
`,
      );
      for (
        var i = new p(), l = r.split(/\n\n/), d = [];
        l[0] && (d.length === 0 || d[d.length - 1].indexOf('msgid ""') < 0);

      )
        l[0].match(/msgid\s+"[^"]/) ? d.push('msgid ""') : d.push(l.shift());
      d = d.join(`
`);
      var o = l
        .join(
          `
`,
        )
        .split(/\n/);
      (i.headers = {
        "Project-Id-Version": "",
        "Report-Msgid-Bugs-To": "",
        "POT-Creation-Date": "",
        "PO-Revision-Date": "",
        "Last-Translator": "",
        Language: "",
        "Language-Team": "",
        "Content-Type": "",
        "Content-Transfer-Encoding": "",
        "Plural-Forms": "",
      }),
        (i.headerOrder = []),
        d
          .split(/\n/)
          .reduce(function (t, h) {
            return (
              t.merge &&
                ((h = t.pop().slice(0, -1) + h.slice(1)), delete t.merge),
              /^".*"$/.test(h) && !/^".*\\n"$/.test(h) && (t.merge = !0),
              t.push(h),
              t
            );
          }, [])
          .forEach(function (t) {
            if (t.match(/^#\./))
              i.extractedComments.push(t.replace(/^#\.\s*/, ""));
            else if (t.match(/^#/)) i.comments.push(t.replace(/^#\s*/, ""));
            else if (t.match(/^"/)) {
              t = t.trim().replace(/^"/, "").replace(/\\n"$/, "");
              var h = t.split(/:/),
                N = h.shift().trim(),
                D = h.join(":").trim();
              (i.headers[N] = D), i.headerOrder.push(N);
            }
          });
      var x = p.parsePluralForms(i.headers["Plural-Forms"]),
        y = x.nplurals,
        e = new p.Item({ nplurals: y }),
        a = null,
        v = 0,
        m = 0,
        f = 0;
      function c() {
        e.msgid.length > 0 &&
          (m >= f && (e.obsolete = !0),
          (m = 0),
          (f = 0),
          i.items.push(e),
          (e = new p.Item({ nplurals: y })));
      }
      function u(t) {
        return (
          (t = w(t)),
          (t = t.replace(/^[^"]*"|"$/g, "")),
          (t = t.replace(
            /\\([abtnvfr'"\\?]|([0-7]{3})|x([0-9a-fA-F]{2}))/g,
            function (h, N, D, j) {
              if (D) return String.fromCharCode(parseInt(D, 8));
              if (j) return String.fromCharCode(parseInt(j, 16));
              switch (N) {
                case "a":
                  return "\x07";
                case "b":
                  return "\b";
                case "t":
                  return "	";
                case "n":
                  return `
`;
                case "v":
                  return "\v";
                case "f":
                  return "\f";
                case "r":
                  return "\r";
                default:
                  return N;
              }
            },
          )),
          t
        );
      }
      for (; o.length > 0; ) {
        var n = w(o.shift()),
          S = !1;
        if (
          (n.match(/^#\~/) && ((n = w(n.substring(2))), (S = !0)),
          n.match(/^#:/))
        )
          c(), e.references.push(w(n.replace(/^#:/, "")));
        else if (n.match(/^#,/)) {
          c();
          for (
            var $ = w(n.replace(/^#,/, "")).split(","), C = 0;
            C < $.length;
            C++
          )
            e.flags[$[C]] = !0;
        } else if (n.match(/^#($|\s+)/))
          c(), e.comments.push(w(n.replace(/^#($|\s+)/, "")));
        else if (n.match(/^#\./))
          c(), e.extractedComments.push(w(n.replace(/^#\./, "")));
        else if (n.match(/^msgid_plural/))
          (e.msgid_plural = u(n)), (a = "msgid_plural"), f++;
        else if (n.match(/^msgid/)) c(), (e.msgid = u(n)), (a = "msgid"), f++;
        else if (n.match(/^msgstr/)) {
          var s = n.match(/^msgstr\[(\d+)\]/);
          (v = s && s[1] ? parseInt(s[1]) : 0),
            (e.msgstr[v] = u(n)),
            (a = "msgstr"),
            f++;
        } else
          n.match(/^msgctxt/)
            ? (c(), (e.msgctxt = u(n)), (a = "msgctxt"), f++)
            : n.length > 0 &&
              (f++,
              a === "msgstr"
                ? (e.msgstr[v] += u(n))
                : a === "msgid"
                  ? (e.msgid += u(n))
                  : a === "msgid_plural"
                    ? (e.msgid_plural += u(n))
                    : a === "msgctxt" && (e.msgctxt += u(n)));
        S && m++;
      }
      return c(), i;
    }),
    (p.parsePluralForms = function (r) {
      var i = (r || "").split(";").reduce(function (l, d) {
        var o = d.trim(),
          x = o.indexOf("="),
          y = o.substring(0, x).trim(),
          e = o.substring(x + 1).trim();
        return (l[y] = e), l;
      }, {});
      return { nplurals: i.nplurals, plural: i.plural };
    }),
    (p.Item = function (r) {
      var i = r && r.nplurals;
      (this.msgid = ""),
        (this.msgctxt = null),
        (this.references = []),
        (this.msgid_plural = null),
        (this.msgstr = []),
        (this.comments = []),
        (this.extractedComments = []),
        (this.flags = {}),
        (this.obsolete = !1);
      var l = Number(i);
      this.nplurals = isNaN(l) ? 2 : l;
    }),
    (p.Item.prototype.toString = function () {
      var r = [],
        i = this,
        l = function (e) {
          return (
            (e = e.replace(/[\x07\b\t\v\f\r"\\]/g, function (a) {
              switch (a) {
                case "\x07":
                  return "\\a";
                case "\b":
                  return "\\b";
                case "	":
                  return "\\t";
                case "\v":
                  return "\\v";
                case "\f":
                  return "\\f";
                case "\r":
                  return "\\r";
                default:
                  return "\\" + a;
              }
            })),
            e
          );
        },
        d = function (e, a, v) {
          var m = [],
            f = a.split(/\n/),
            c = typeof v < "u" ? "[" + v + "]" : "";
          return (
            f.length > 1
              ? (m.push(e + c + ' ""'),
                f.forEach(function (u) {
                  m.push('"' + l(u) + '"');
                }))
              : m.push(e + c + ' "' + l(a) + '"'),
            m
          );
        },
        o = function (e, a, v) {
          for (var m = d(e, a, v), f = 1; f < m.length - 1; f++)
            m[f] = m[f].slice(0, -1) + '\\n"';
          return m;
        };
      this.comments.forEach(function (e) {
        r.push("# " + e);
      }),
        this.extractedComments.forEach(function (e) {
          r.push("#. " + e);
        }),
        this.references.forEach(function (e) {
          r.push("#: " + e);
        });
      var x = Object.keys(this.flags).filter(function (e) {
        return !!this.flags[e];
      }, this);
      x.length > 0 && r.push("#, " + x.join(","));
      var y = this.obsolete ? "#~ " : "";
      return (
        ["msgctxt", "msgid", "msgid_plural", "msgstr"].forEach(function (e) {
          var a = i[e];
          if (a != null) {
            var v = !1;
            if (
              (Array.isArray(a) &&
                (v = a.some(function (u) {
                  return u;
                })),
              Array.isArray(a) && a.length > 1)
            )
              a.forEach(function (u, n) {
                var S = o(e, u, n);
                r = r.concat(
                  y +
                    S.join(
                      `
` + y,
                    ),
                );
              });
            else if (i.msgid_plural && e === "msgstr" && !v)
              for (var m = 0; m < i.nplurals; m++)
                r = r.concat(y + d(e, "", m));
            else {
              var f = i.msgid_plural && Array.isArray(a) ? 0 : void 0;
              a = Array.isArray(a) ? a.join() : a;
              var c = o(e, a, f);
              r = r.concat(
                y +
                  c.join(
                    `
` + y,
                  ),
              );
            }
          }
        }),
        r.join(`
`)
      );
    }),
    (_ = p),
    _
  );
}
lt();
const ut = { class: "pl-10" },
  ft = { class: "divcenterpage" },
  mt = {
    key: 1,
    style: {
      "margin-left": "-30px !important",
      "margin-right": "10px !important",
    },
  },
  Ot = {
    __name: "notification-center",
    setup(w) {
      const p = et(),
        { status: r, signIn: i, signOut: l, data: d, getSession: o } = K(),
        x = O([]),
        y = O(""),
        e = Q("snackbar"),
        a = O(!1),
        v = W(),
        m = [
          { title: "Testo", key: "title", sortable: !0, align: "left" },
          { title: "Data e ora", key: "created", sortable: !0, align: "left" },
          { title: "Azioni", key: "actions", sortable: !1 },
        ];
      st({
        title: "Centro Notifiche",
        meta: [{ name: "description", content: "Centro Notifiche" }],
      });
      const f = () => {
          const { data: C } = z(
            p.public.apiBaseurl + "notification/getMyNotifications",
            {
              onRequest({ request: s, options: t }) {},
              onRequestError({ request: s, options: t, error: h }) {
                console.log("Errore nella request:", h);
              },
              onResponseError({ request: s, response: t, options: h }) {
                e.value = {
                  text: "Errore caricamento notifiche",
                  type: "danger",
                  show: !0,
                };
              },
              onResponse({ request: s, response: t, options: h }) {
                x.value = t._data.data;
              },
            },
          );
        },
        c = O(null),
        u = O(!1);
      async function n(C) {
        (c.value = C),
          (u.value = !0),
          C.readon ||
            (await z(p.public.apiBaseurl + "notification/markAsRead", {
              method: "POST",
              body: { id: C.id },
            }),
            f());
      }
      X(() => {
        S(), window.addEventListener("resize", S), f();
      });
      function S() {
        a.value = window.innerWidth <= 960;
      }
      Y(() => {
        window.removeEventListener("resize", S);
      });
      function $(C) {
        C && (v.push("/" + C), (u.value = !1));
      }
      return (C, s) => (
        T(),
        I(
          P,
          null,
          [
            V("div", ut, [
              V("div", ft, [
                s[8] || (s[8] = V("br", null, null, -1)),
                s[9] ||
                  (s[9] = V(
                    "h3",
                    {
                      class: "pb-4 pageh3",
                      style: { display: "inline", float: "left" },
                    },
                    "Notifiche",
                    -1,
                  )),
                s[10] ||
                  (s[10] = V("div", { style: { clear: "both" } }, null, -1)),
                E(a)
                  ? (T(),
                    I("div", mt, [
                      (T(!0),
                      I(
                        P,
                        null,
                        Z(
                          E(x),
                          (t) => (
                            T(),
                            L(
                              G,
                              { key: t.id, class: "mb-4" },
                              {
                                default: g(() => [
                                  b(
                                    M,
                                    null,
                                    {
                                      default: g(() => [
                                        V("p", null, [
                                          s[4] ||
                                            (s[4] = V(
                                              "strong",
                                              null,
                                              "Testo:",
                                              -1,
                                            )),
                                          s[5] || (s[5] = k()),
                                          V(
                                            "span",
                                            {
                                              style: R(
                                                t.readon
                                                  ? ""
                                                  : "font-weight: bold",
                                              ),
                                            },
                                            A(t.title),
                                            5,
                                          ),
                                        ]),
                                        V("p", null, [
                                          s[6] ||
                                            (s[6] = V(
                                              "strong",
                                              null,
                                              "Data e ora:",
                                              -1,
                                            )),
                                          k(" " + A(t.created), 1),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                  b(H),
                                  b(
                                    U,
                                    null,
                                    {
                                      default: g(() => [
                                        b(
                                          B,
                                          {
                                            class: "me-2",
                                            size: "small",
                                            onClick: (h) => n(t),
                                            color: t.readon ? "green" : "red",
                                            title: "Visualizza",
                                          },
                                          {
                                            default: g(() => [
                                              ...(s[7] ||
                                                (s[7] = [k("mdi-read", -1)])),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["onClick", "color"],
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 2,
                              },
                              1024,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : (T(),
                    L(
                      at,
                      { key: 0, items: E(x), headers: m, search: E(y) },
                      {
                        "item.title": g(({ item: t }) => [
                          V(
                            "p",
                            { style: R(t.readon ? "" : "font-weight: bold") },
                            A(t.title),
                            5,
                          ),
                        ]),
                        "item.created": g(({ item: t }) => [
                          k(
                            A(
                              new Date(t.created).toLocaleDateString("it-IT", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              }),
                            ),
                            1,
                          ),
                        ]),
                        "item.actions": g(({ item: t }) => [
                          b(
                            B,
                            {
                              class: "me-2",
                              size: "small",
                              onClick: (h) => n(t),
                              color: t.readon ? "green" : "red",
                              title: "Visualizza",
                            },
                            {
                              default: g(() => [
                                ...(s[3] || (s[3] = [k("mdi-read", -1)])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick", "color"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["items", "search"],
                    )),
              ]),
            ]),
            b(
              nt,
              {
                modelValue: E(u),
                "onUpdate:modelValue":
                  s[2] || (s[2] = (t) => (tt(u) ? (u.value = t) : null)),
                "max-width": "600",
              },
              {
                default: g(() => [
                  b(G, null, {
                    default: g(() => [
                      b(
                        M,
                        { class: "headline" },
                        { default: g(() => [k(A(E(c)?.title), 1)]), _: 1 },
                      ),
                      b(
                        it,
                        { class: "grey--text text--darken-1" },
                        {
                          default: g(() => [
                            k(
                              A(
                                new Date(E(c)?.created).toLocaleDateString(
                                  "it-IT",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                  },
                                ),
                              ),
                              1,
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      b(
                        H,
                        {
                          class: "ql-editor",
                          innerHTML:
                            E(c)?.content || "Dettagli completi della notifica",
                        },
                        null,
                        8,
                        ["innerHTML"],
                      ),
                      b(U, null, {
                        default: g(() => [
                          E(c)?.link
                            ? (T(),
                              L(
                                F,
                                {
                                  key: 0,
                                  color: "primary",
                                  class: "mb-4",
                                  onClick: s[0] || (s[0] = (t) => $(E(c).link)),
                                },
                                {
                                  default: g(() => [
                                    ...(s[11] || (s[11] = [k(" VAI ", -1)])),
                                  ]),
                                  _: 1,
                                },
                              ))
                            : rt("", !0),
                          b(ot),
                          b(
                            F,
                            {
                              color: "red",
                              onClick: s[1] || (s[1] = (t) => (u.value = !1)),
                            },
                            {
                              default: g(() => [
                                ...(s[12] || (s[12] = [k("Chiudi", -1)])),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            ),
          ],
          64,
        )
      );
    },
  };
export { Ot as default };
