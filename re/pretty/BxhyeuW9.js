const fe = function (t) {
    return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
  },
  Ne = function (t, s) {
    const n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return t === 1 && fe(s) ? 29 : n[t];
  },
  Ae = function (t) {
    const s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return fe(t) && (s[1] = 29), s;
  },
  je = function (t, s) {
    switch (t.getDay()) {
      case 0:
        return s.sunday;
      case 1:
        return s.monday;
      case 2:
        return s.tuesday;
      case 3:
        return s.wednesday;
      case 4:
        return s.thursday;
      case 5:
        return s.friday;
      case 6:
        return s.saturday;
      default:
        return !1;
    }
  },
  Re = function (t, s) {
    const n = t.getTime();
    return s.some((e) => {
      let a = e.startDate,
        o = e.endDate;
      if (e.recurring) {
        const i = t.getFullYear();
        (a = new Date(i, e.startDate.getMonth(), e.startDate.getDate())),
          (o = new Date(i, e.endDate.getMonth(), e.endDate.getDate()));
      }
      return n >= a.getTime() && n <= o.getTime();
    });
  },
  We = function (t, s, n) {
    return !je(t, s) || Re(t, n);
  },
  xe = {
    monday: !0,
    tuesday: !0,
    wednesday: !0,
    thursday: !0,
    friday: !0,
    saturday: !1,
    sunday: !1,
  },
  ge = function (t, s, n) {
    let e = new Date();
    if (t.length <= 0) return n || e;
    e.setTime((n && n.getTime()) || t[0].getStart().getTime());
    for (let a = 0; a < t.length; a++)
      t[a].getStart().getTime() < e.getTime() &&
        e.setTime(t[a].getStart().getTime()),
        t[a].getPlanStart() &&
          t[a].getPlanStart().getTime() < e.getTime() &&
          e.setTime(t[a].getPlanStart().getTime());
    if (s == "day")
      for (e.setDate(e.getDate() - 1); e.getDay() % 7 != 1; )
        e.setDate(e.getDate() - 1);
    else if (s == "week")
      for (e.setDate(e.getDate() - 1); e.getDay() % 7 != 1; )
        e.setDate(e.getDate() - 1);
    else if (s == "month")
      for (e.setDate(e.getDate() - 15); e.getDate() > 1; )
        e.setDate(e.getDate() - 1);
    else if (s == "quarter")
      e.setDate(e.getDate() - 31),
        e.getMonth() == 0 || e.getMonth() == 1 || e.getMonth() == 2
          ? e.setFullYear(e.getFullYear(), 0, 1)
          : e.getMonth() == 3 || e.getMonth() == 4 || e.getMonth() == 5
            ? e.setFullYear(e.getFullYear(), 3, 1)
            : e.getMonth() == 6 || e.getMonth() == 7 || e.getMonth() == 8
              ? e.setFullYear(e.getFullYear(), 6, 1)
              : (e.getMonth() == 9 ||
                  e.getMonth() == 10 ||
                  e.getMonth() == 11) &&
                e.setFullYear(e.getFullYear(), 9, 1);
    else if (s == "hour")
      for (e.setHours(e.getHours() - 1); e.getHours() % 6 != 0; )
        e.setHours(e.getHours() - 1);
    return s == "hour" ? e.setMinutes(0, 0) : e.setHours(0, 0, 0), e;
  },
  me = function (t, s, n) {
    let e = new Date();
    if (t.length <= 0) return n || e;
    e.setTime((n && n.getTime()) || t[0].getEnd().getTime());
    for (let a = 0; a < t.length; a++)
      t[a].getEnd().getTime() > e.getTime() &&
        e.setTime(t[a].getEnd().getTime()),
        t[a].getPlanEnd() &&
          t[a].getPlanEnd().getTime() > e.getTime() &&
          e.setTime(t[a].getPlanEnd().getTime());
    if (s == "day")
      for (e.setDate(e.getDate() + 1); e.getDay() % 7 != 0; )
        e.setDate(e.getDate() + 1);
    else if (s == "week")
      for (e.setDate(e.getDate() + 1); e.getDay() % 7 != 0; )
        e.setDate(e.getDate() + 1);
    else if (s == "month") {
      for (; e.getDate() > 1; ) e.setDate(e.getDate() + 1);
      e.setDate(e.getDate() - 1);
    } else if (s == "quarter")
      e.getMonth() == 0 || e.getMonth() == 1 || e.getMonth() == 2
        ? e.setFullYear(e.getFullYear(), 2, 31)
        : e.getMonth() == 3 || e.getMonth() == 4 || e.getMonth() == 5
          ? e.setFullYear(e.getFullYear(), 5, 30)
          : e.getMonth() == 6 || e.getMonth() == 7 || e.getMonth() == 8
            ? e.setFullYear(e.getFullYear(), 8, 30)
            : (e.getMonth() == 9 || e.getMonth() == 10 || e.getMonth() == 11) &&
              e.setFullYear(e.getFullYear(), 11, 31);
    else if (s == "hour")
      for (
        e.getHours() == 0 && e.setDate(e.getDate() + 1),
          e.setHours(e.getHours() + 1);
        e.getHours() % 6 != 5;

      )
        e.setHours(e.getHours() + 1);
    return e;
  },
  le = function (t) {
    if (t instanceof Date) return t;
    {
      const s = new Date(t);
      if (s instanceof Date && !isNaN(s.valueOf())) return s;
    }
  },
  vt = function (t, s) {
    let n = new Date(),
      e = t.split(/[^0-9]/);
    if (t.length >= 10 && e.length >= 3) {
      for (; e.length < 5; ) e.push(0);
      switch (s) {
        case "mm/dd/yyyy":
          n = new Date(e[2], e[0] - 1, e[1], e[3], e[4]);
          break;
        case "dd/mm/yyyy":
          n = new Date(e[2], e[1] - 1, e[0], e[3], e[4]);
          break;
        case "yyyy-mm-dd":
          n = new Date(e[0], e[1] - 1, e[2], e[3], e[4]);
          break;
        case "yyyy-mm-dd HH:MI:SS":
          n = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5]);
          break;
      }
    }
    return n;
  },
  q = function (t, s, n) {
    if (!t) return;
    let e = "",
      a = t.getFullYear().toString().substring(2, 4),
      o = t.getMonth() + 1 + "",
      i = new Array(
        n.january,
        n.february,
        n.march,
        n.april,
        n.maylong,
        n.june,
        n.july,
        n.august,
        n.september,
        n.october,
        n.november,
        n.december,
      ),
      d = new Array(
        n.sunday,
        n.monday,
        n.tuesday,
        n.wednesday,
        n.thursday,
        n.friday,
        n.saturday,
      ),
      h = new Array(
        n.jan,
        n.feb,
        n.mar,
        n.apr,
        n.may,
        n.jun,
        n.jul,
        n.aug,
        n.sep,
        n.oct,
        n.nov,
        n.dec,
      ),
      f = new Array(n.sun, n.mon, n.tue, n.wed, n.thu, n.fri, n.sat);
    for (let u = 0; u < s.length; u++)
      switch (s[u]) {
        case "dd":
          t.getDate() < 10 && (e += "0");
        case "d":
          e += t.getDate();
          break;
        case "day":
          e += f[t.getDay()];
          break;
        case "DAY":
          e += d[t.getDay()];
          break;
        case "mm":
          parseInt(o, 10) < 10 && (e += "0");
        case "m":
          e += o;
          break;
        case "mon":
          e += h[t.getMonth()];
          break;
        case "month":
          e += i[t.getMonth()];
          break;
        case "yyyy":
          e += t.getFullYear();
          break;
        case "yy":
          e += a;
          break;
        case "qq":
          e += n.qtr;
        case "q":
          e += Math.floor(t.getMonth() / 3) + 1;
          break;
        case "hh":
          (t.getHours() % 12 == 0 ? 12 : t.getHours() % 12) < 10 && (e += "0");
        case "h":
          e += t.getHours() % 12 == 0 ? 12 : t.getHours() % 12;
          break;
        case "HH":
          t.getHours() < 10 && (e += "0");
        case "H":
          e += t.getHours();
          break;
        case "MI":
          t.getMinutes() < 10 && (e += "0");
        case "mi":
          e += t.getMinutes();
          break;
        case "SS":
          t.getSeconds() < 10 && (e += "0");
        case "ss":
          e += t.getSeconds();
          break;
        case "pm":
          e += t.getHours() < 12 ? "am" : "pm";
          break;
        case "PM":
          e += t.getHours() < 12 ? "AM" : "PM";
          break;
        case "ww":
          Dt(t) < 10 && (e += "0");
        case "w":
          e += Dt(t);
          break;
        case "week":
          let D = Dt(t),
            g = t.getFullYear(),
            p = t.getDay() == 0 ? 7 : t.getDay();
          D >= 52 && parseInt(o, 10) === 1 && g--,
            D == 1 && parseInt(o, 10) === 12 && g++,
            D < 10 && (D = parseInt("0" + D, 10)),
            (e += g + "-W" + D + "-" + p);
          break;
        default:
          n[s[u].toLowerCase()] ? (e += n[s[u].toLowerCase()]) : (e += s[u]);
          break;
      }
    return e;
  },
  j = function (t) {
    let s = "",
      n = "",
      e = new RegExp(`[/\\ -.,'":]`),
      a = new Array();
    for (let o = 0; o < t.length; o++)
      (n = t.charAt(o)),
        n.match(e) || o + 1 == t.length
          ? (o + 1 == t.length && !n.match(e) && (s += n),
            a.push(s),
            n.match(e) && a.push(n),
            (s = ""))
          : (s += n);
    return a;
  },
  Dt = function (t) {
    let s = 864e5,
      n = new Date(t.getFullYear(), 0, 4, 0, 0, 0),
      e = n.getDay() == 0 ? 6 : n.getDay() - 1,
      a = n.getTime() - e * s,
      i = new Date(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        0,
        0,
        0,
      ).getTime(),
      d = Math.round((i - a) / s),
      h = 99;
    return (
      (h = Math.ceil((d + 1) / 7)),
      h <= 0
        ? (h = Dt(new Date(t.getFullYear() - 1, 11, 31, 0, 0, 0)))
        : h == 53 &&
          new Date(t.getFullYear(), 0, 1, 0, 0, 0).getDay() != 4 &&
          new Date(t.getFullYear(), 11, 31, 0, 0, 0).getDay() != 4 &&
          (h = 1),
      h
    );
  },
  ve = [
    "pID",
    "pName",
    "pStart",
    "pEnd",
    "pClass",
    "pLink",
    "pMile",
    "pRes",
    "pComp",
    "pGroup",
    "pParent",
    "pOpen",
    "pDepend",
    "pCaption",
    "pNotes",
    "pGantt",
    "pCost",
    "pPlanStart",
    "pPlanEnd",
    "pPlanClass",
  ],
  ue = {
    pID: "id",
    pName: "name",
    pStart: "startdate",
    pEnd: "enddate",
    pLink: "link",
    pMile: "mile",
    pRes: "res",
    pDuration: "dur",
    pComp: "comp",
    pGroup: "group",
    pParent: "parent",
    pOpen: "open",
    pDepend: "depend",
    pCaption: "caption",
    pNotes: "notes",
    pCost: "cost",
    pPlanStart: "planstartdate",
    pPlanEnd: "planenddate",
    pPlanClass: "planclass",
  },
  Et = function (t, s = null) {
    let n;
    return (
      s || (s = document),
      document.getElementById && (n = document.getElementById(t)),
      n
    );
  },
  ye = function (t, s) {
    s ? s.setFormat(t) : alert("Chart undefined");
  },
  Ht = function (t) {
    for (let s = 0; s < t.childNodes.length; s++)
      "removeAttribute" in t.childNodes[s] &&
        t.childNodes[s].removeAttribute("id"),
        t.childNodes[s].hasChildNodes() && Ht(t.childNodes[s]);
  },
  Pt = function (t) {
    let s = new Array(
      "#text",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "div",
      "span",
      "img",
    );
    for (let n = 0; n < t.childNodes.length; n++)
      (s.join().toLowerCase() + ",").indexOf(
        t.childNodes[n].nodeName.toLowerCase() + ",",
      ) == -1 &&
        t.replaceChild(
          document.createTextNode(t.childNodes[n].outerHTML),
          t.childNodes[n],
        ),
        t.childNodes[n].hasChildNodes() && Pt(t.childNodes[n]);
  },
  Nt = function (t, s, n) {
    let e = t.getTooltipDelay() || 1500;
    s &&
      (s.delayTimeout = setTimeout(function () {
        Te(t, s, n);
      }, e));
  },
  At = function () {
    let t = 1;
    if (document.body.getBoundingClientRect) {
      let s = document.body.getBoundingClientRect(),
        n = s.right - s.left,
        e = document.body.offsetWidth;
      t = Math.round((n / e) * 100) / 100;
    }
    return t;
  },
  qe = function (t) {
    let s = new Date().getTime();
    alert(t + ": Elapsed time: " + (s - this.vBenchTime) / 1e3 + " seconds."),
      (this.vBenchTime = new Date().getTime());
  },
  pe = function () {
    let t = window.pageXOffset,
      s = window.pageYOffset;
    if (!("pageXOffset" in window)) {
      let n = At();
      (t = Math.round(document.documentElement.scrollLeft / n)),
        (s = Math.round(document.documentElement.scrollTop / n));
    }
    return { x: t, y: s };
  };
let kt;
const De = function () {
    if (kt) return kt;
    const t = document.createElement("div");
    (t.className = "gscrollbar-calculation-container"),
      document.body.appendChild(t);
    const s = document.createElement("div");
    return (
      t.appendChild(s),
      (kt = t.offsetWidth - s.offsetWidth),
      t.parentNode.removeChild(t),
      kt
    );
  },
  wt = function (t, s) {
    let n = Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      0,
      0,
    );
    return (
      Date.UTC(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), 0, 0) -
      n
    );
  },
  lt = function (t, s, n, e, a, o, i, d) {
    let p = new Date(t.getTime()),
      m = new Date(s.getTime()),
      T = 0;
    (m.getDate() === 18 && m.getMonth() === 9) ||
      (p.getDate() === 18 && p.getMonth() === 9) ||
      (m.getDate() === 20 && m.getMonth());
    let k;
    if (e == "day")
      if (o && i)
        if (d) {
          const v = Math.round((m.getTime() - p.getTime()) / 864e5);
          T = Math.ceil(v * (n + 3));
        } else {
          const v = Math.floor((m.getTime() - p.getTime()) / 864e5);
          T = Math.ceil(v * (n + 3));
        }
      else {
        let v = wt(p, m) / 36e5;
        T = Math.ceil((v / 24) * (n + 3) - 1);
      }
    else if (e == "week") {
      let v = wt(p, m) / 36e5;
      T = Math.ceil((v / 168) * (n + 3) - 1);
    } else if (e == "month") {
      let l =
        12 * (m.getFullYear() - p.getFullYear()) +
        (m.getMonth() - p.getMonth());
      (k = new Date(m.getTime())), k.setDate(p.getDate());
      let v = (m.getTime() - k.getTime()) / 864e5;
      T = Math.ceil(
        l * (n + 3) + v * (n / Ne(m.getMonth(), m.getFullYear())) - 1,
      );
    } else if (e == "quarter") {
      let l =
        12 * (m.getFullYear() - p.getFullYear()) +
        (m.getMonth() - p.getMonth());
      (k = new Date(m.getTime())), k.setDate(p.getDate());
      let v = (m.getTime() - k.getTime()) / 864e5;
      T = Math.ceil(l * ((n + 3) / 3) + v * (n / 90) - 1);
    } else if (e == "hour") {
      (k = new Date(m.getTime())), k.setMinutes(p.getMinutes(), 0);
      let l = (m.getTime() - k.getTime()) / 36e5,
        w = wt(p, m) / 36e5;
      T = Math.ceil(w * (n + 3) + l * n);
    }
    return T;
  },
  Tt = function () {
    return typeof document.all < "u" ? !("pageXOffset" in window) : !1;
  },
  Te = function (t, s, n) {
    t.getUseFade()
      ? (clearInterval(s.fadeInterval),
        (s.fadeInterval = setInterval(function () {
          jt(-1, s, 0);
        }, n)))
      : ((s.style.opacity = 0),
        (s.style.filter = "alpha(opacity=0)"),
        (s.style.visibility = "hidden"),
        s.vToolCont.setAttribute("showing", null));
  },
  jt = function (t, s, n) {
    let e = parseInt(s.getAttribute("fadeIncrement")),
      a = s.getAttribute("currentOpacity"),
      o = parseInt(a);
    if ((o != n && t == 1) || (o != 0 && t == -1)) {
      let i = e;
      n - o < e && t == 1 ? (i = n - o) : a < e && t == -1 && (i = o),
        (a = o + i * t),
        (s.style.opacity = a * 0.01),
        (s.style.filter = "alpha(opacity=" + a + ")"),
        s.setAttribute("currentOpacity", a);
    } else
      clearInterval(s.fadeInterval),
        t == -1 &&
          ((s.style.opacity = 0),
          (s.style.filter = "alpha(opacity=0)"),
          (s.style.visibility = "hidden"),
          s.vToolCont.setAttribute("showing", null));
  },
  ke = function (t) {
    t || (t = "default"), (t += "");
    let s = 5381;
    for (let n = 0; n < t.length; n++)
      t.charCodeAt && (s = (s << 5) + s + t.charCodeAt(n)), (s = s & s);
    return s >>> 0;
  },
  Ct = function (t) {
    return ke(t);
  },
  Ye = function (t) {
    const s = {};
    t.forEach((a) => {
      a.duration = new Date(a.pEnd).getTime() - new Date(a.pStart).getTime();
    }),
      t.forEach((a) => {
        s[a.pID] || (s[a.pID] = a),
          s[a.pParent] || (s[a.pParent] = { childrens: [] }),
          s[a.pID].childrens || (s[a.pID].childrens = []),
          s[a.pParent].childrens.push(a);
        let o = s[a.pParent].childrens[0].duration;
        s[a.pParent].childrens.forEach((i) => {
          i.duration > o && (o = i.duration);
        }),
          (s[a.pParent].duration = o);
      });
    const n = { 0: s[0] };
    let e = s[0];
    for (; e; )
      if (e.childrens.length > 0) {
        let a = e.childrens[0],
          o = a.duration;
        e.childrens.forEach((i) => {
          i.duration > o && ((a = i), (o = i.duration));
        }),
          (n[a.pID] = a),
          (e = a);
      } else e = null;
  };
function de(t, s) {
  for (; t; ) {
    if (t === s) return !0;
    t = t.parentElement;
  }
}
const we = function (t, s, n) {
    const e = document.documentElement,
      a = document.getElementsByTagName("body")[0];
    let o = 3,
      i = 5,
      d = 3,
      h = 15,
      f = t ? t.clientX : window.event.clientX,
      u = t ? t.clientY : window.event.clientY,
      D = e?.clientWidth || a?.clientWidth,
      g = e?.clientHeight || a?.clientHeight,
      p = f,
      m = u,
      T = screen.availWidth || window.innerWidth,
      k = screen.availHeight || window.innerHeight,
      l = parseInt(s.vTool.style.left),
      v = parseInt(s.vTool.style.top);
    if (navigator.appName.toLowerCase() == "microsoft internet explorer") {
      (f -= e?.clientLeft), (u -= e?.clientTop);
      let P = At();
      P != 1 && ((f = Math.round(f / P)), (u = Math.round(u / P)));
    }
    let w = pe();
    f - i - s.vTool.offsetWidth < 0
      ? f + h + s.vTool.offsetWidth > D
        ? (p = w.x)
        : (p = f + w.x + h)
      : (p = f + w.x - i - s.vTool.offsetWidth),
      u + d + s.vTool.offsetHeight > g
        ? u - o - s.vTool.offsetHeight < 0
          ? (m = w.y)
          : (m = u + w.y - o - s.vTool.offsetHeight)
        : (m = u + w.y + d);
    let S = Math.abs(l - p) > T || Math.abs(v - m) > k;
    s.getUseMove() && !S
      ? (clearInterval(s.vTool.moveInterval),
        (s.vTool.moveInterval = setInterval(function () {
          Se(p, m, s.vTool);
        }, n)))
      : ((s.vTool.style.left = p + "px"), (s.vTool.style.top = m + "px"));
  },
  Se = function (t, s, n, e) {
    let a = parseInt(n.getAttribute("moveSpeed")),
      o = parseInt(n.style.left),
      i = parseInt(n.style.top);
    n.style.visibility != "visible"
      ? ((n.style.left = t + "px"),
        (n.style.top = s + "px"),
        clearInterval(n.moveInterval))
      : t != o && s != i
        ? ((o += Math.ceil((t - o) / a)),
          (i += Math.ceil((s - i) / a)),
          (n.style.left = o + "px"),
          (n.style.top = i + "px"))
        : clearInterval(n.moveInterval);
  },
  be = (t, s = !0, n = !1) => {
    if (window.fetch) {
      const e = fetch(t);
      return s ? e.then((a) => a.json()) : e;
    } else
      return Be(t, n).then((e) => (s ? JSON.parse(e.response) : e.responseXML));
  },
  Be = (t, s = !1) =>
    new Promise((n, e) => {
      let a;
      s && ((a = new Date()), console.info("before jsonparse", a));
      let o;
      window.XMLHttpRequest
        ? (o = new XMLHttpRequest())
        : (o = new window.ActiveXObject("Microsoft.XMLHTTP")),
        o.open("GET", t, !0),
        o.send(null),
        (o.onload = function (i) {
          o.readyState === 4 &&
            (o.status === 200 || console.error(o.statusText),
            s && ((a = new Date()), console.info("before jsonparse", a)),
            n(o));
        }),
        (o.onerror = function (i) {
          e(o.statusText);
        });
    }),
  ze = (t, s, n = void 0) => {
    n === void 0 &&
      (n = `@media print {
        @page {
          size: ${t}mm ${s}mm;
        }
        /* set gantt container to the same width as the page */
        .gchartcontainer {
            width: ${t}mm;
        }
    };`);
    const e = document.querySelector(".gchartcontainer");
    e.insertAdjacentHTML("afterbegin", `<style>${n}</style>`),
      window.addEventListener(
        "afterprint",
        () => {
          e.removeChild(e.children[0]);
        },
        { once: !0 },
      ),
      window.print();
  },
  Me = function (t, s) {
    let n = s.getList();
    s.clearDependencies();
    for (let a = 0; a < n.length; a++)
      n[a].getID() == t &&
        (n[a].getOpen() == 1
          ? (n[a].setOpen(0),
            Rt(t, s),
            Tt()
              ? (n[a].getGroupSpan().innerText = "+")
              : (n[a].getGroupSpan().textContent = "+"))
          : (n[a].setOpen(1),
            Wt(t, 1, s),
            Tt()
              ? (n[a].getGroupSpan().innerText = "-")
              : (n[a].getGroupSpan().textContent = "-")));
    let e;
    if (
      (this.vDebug &&
        ((e = new Date()), console.info("after drawDependency", e)),
      s.DrawDependencies(this.vDebug),
      this.vDebug)
    ) {
      const a = new Date();
      console.info("after drawDependency", a, a.getTime() - e.getTime());
    }
  },
  Rt = function (t, s) {
    let n = s.getList(),
      e = 0;
    for (let a = 0; a < n.length; a++)
      n[a].getParent() == t &&
        ((e = n[a].getID()),
        n[a].getListChildRow() &&
          (n[a].getListChildRow().style.display = "none"),
        n[a].getChildRow() && (n[a].getChildRow().style.display = "none"),
        n[a].setVisible(0),
        n[a].getGroup() && Rt(e, s));
  },
  Wt = function (t, s, n) {
    let e = n.getList(),
      a = 0,
      o = "";
    for (let i = 0; i < e.length; i++)
      e[i].getParent() == t &&
        (e[i].getParItem() ||
          console.error(
            "Cant find parent on who event (maybe problems with Task ID and Parent Id mixes?)",
          ),
        e[i].getParItem().getGroupSpan() &&
          (Tt()
            ? (o = e[i].getParItem().getGroupSpan().innerText)
            : (o = e[i].getParItem().getGroupSpan().textContent)),
        (i = e.length));
    for (let i = 0; i < e.length; i++)
      if (e[i].getParent() == t) {
        let d = !1;
        (a = e[i].getID()),
          (s == 1 && o == "+") || o == "-"
            ? (d = !0)
            : e[i].getParItem() &&
              e[i].getParItem().getGroup() == 2 &&
              e[i].setVisible(1),
          d &&
            (e[i].getListChildRow() &&
              (e[i].getListChildRow().style.display = ""),
            e[i].getChildRow() && (e[i].getChildRow().style.display = ""),
            e[i].setVisible(1)),
          e[i].getGroup() && Wt(a, 0, n);
      }
  },
  Ue = function (t, s) {
    this.getUseRowHlt() &&
      ((t.className += " gitemhighlight"), (s.className += " gitemhighlight"));
  },
  Oe = function (t, s) {
    this.getUseRowHlt() &&
      ((t.className = t.className.replace(/(?:^|\s)gitemhighlight(?!\S)/g, "")),
      (s.className = s.className.replace(/(?:^|\s)gitemhighlight(?!\S)/g, "")));
  },
  St = function (t, s, n, e, a) {
    let o = t.getDivId() + "JSGanttToolTip",
      i = 500,
      d = 100,
      h = n.id;
    if (t.getUseToolTip()) {
      t.vTool == null &&
        ((t.vTool = document.createElement("div")),
        (t.vTool.id = o),
        (t.vTool.className = "JSGanttToolTip"),
        (t.vTool.vToolCont = document.createElement("div")),
        (t.vTool.vToolCont.id = o + "cont"),
        (t.vTool.vToolCont.className = "JSGanttToolTipcont"),
        t.vTool.vToolCont.setAttribute("showing", ""),
        t.vTool.appendChild(t.vTool.vToolCont),
        document.body.appendChild(t.vTool),
        (t.vTool.style.opacity = 0),
        t.vTool.setAttribute("currentOpacity", 0),
        t.vTool.setAttribute("fadeIncrement", 10),
        t.vTool.setAttribute("moveSpeed", 10),
        (t.vTool.style.filter = "alpha(opacity=0)"),
        (t.vTool.style.visibility = "hidden"),
        (t.vTool.style.left =
          Math.floor((s ? s.clientX : window.event.clientX) / 2) + "px"),
        (t.vTool.style.top =
          Math.floor((s ? s.clientY : window.event.clientY) / 2) + "px"),
        this.addListener(
          "mouseover",
          function () {
            clearTimeout(t.vTool.delayTimeout);
          },
          t.vTool,
        ),
        this.addListener(
          "mouseout",
          function () {
            Nt(t, t.vTool, a);
          },
          t.vTool,
        )),
        clearTimeout(t.vTool.delayTimeout);
      const f = n.innerHTML;
      t.vTool.vToolCont.getAttribute("content") !== f &&
        ((t.vTool.vToolCont.innerHTML = n.innerHTML),
        Ht(t.vTool.vToolCont),
        t.vTool.vToolCont.setAttribute("content", f)),
        (t.vTool.vToolCont.getAttribute("showing") != h ||
          t.vTool.style.visibility != "visible") &&
          (t.vTool.vToolCont.getAttribute("showing") != h &&
            t.vTool.vToolCont.setAttribute("showing", h),
          (t.vTool.style.visibility = "visible"),
          we(s, t, a),
          (t.vTool.style.width = e ? e + "px" : "auto"),
          !e && Tt() && (t.vTool.style.width = t.vTool.offsetWidth),
          t.vTool.offsetWidth > i && (t.vTool.style.width = i + "px")),
        t.getUseFade()
          ? (clearInterval(t.vTool.fadeInterval),
            (t.vTool.fadeInterval = setInterval(function () {
              jt(1, t.vTool, d);
            }, a)))
          : ((t.vTool.style.opacity = d * 0.01),
            (t.vTool.style.filter = "alpha(opacity=" + d + ")"));
    }
  },
  G = function (t, s, n) {
    return (
      n === String(n) && (n = Et(n)),
      n.addEventListener
        ? n.addEventListener(t, s, !1)
        : n.attachEvent
          ? n.attachEvent("on" + t, s)
          : !1
    );
  },
  _e = function (t, s, n) {
    return (
      n === String(n) && (n = Et(n)),
      n.removeEventListener
        ? n.removeEventListener(t, s, !1)
        : n.detachEvent
          ? n.attachEvent("on" + t, s)
          : !1
    );
  },
  It = function (t, s) {
    let n = new Map(t.map((a) => [a, !1]));
    function e(a) {
      if (!n.get(a.target))
        for (const o of t)
          o !== a.target && (n.set(o, !0), (o[s] = a.target[s]));
      n.set(a.target, !1);
    }
    for (const a of t) a.addEventListener("scroll", e);
  },
  Ft = function (t, s, n, e) {
    let a = !1;
    G(
      "mouseover",
      function (o) {
        if (a || !e) St(t, o, n, null, t.getTimer());
        else if (e) {
          a = !0;
          const i = e();
          St(t, o, n, null, t.getTimer()),
            i &&
              i.then &&
              i.then(() => {
                t.vTool.vToolCont.getAttribute("showing") === n.id &&
                  t.vTool.style.visibility === "visible" &&
                  St(t, o, n, null, t.getTimer());
              });
        }
      },
      s,
    ),
      G(
        "mouseout",
        function (o) {
          const i = o.relatedTarget;
          de(i, s) || (t.vTool && de(i, t.vTool)) || (a = !1),
            Nt(t, t.vTool, t.getTimer());
        },
        s,
      );
  },
  bt = function (t, s, n) {
    G(
      "mouseover",
      function () {
        t.mouseOver(s, n);
      },
      s,
    ),
      G(
        "mouseover",
        function () {
          t.mouseOver(s, n);
        },
        n,
      ),
      G(
        "mouseout",
        function () {
          t.mouseOut(s, n);
        },
        s,
      ),
      G(
        "mouseout",
        function () {
          t.mouseOut(s, n);
        },
        n,
      );
  },
  Le = function (t) {
    const s = t.getChartHead(),
      n = t.getChartBody();
    if (!s || !n) return;
    n.scrollHeight > n.clientHeight
      ? (s.style.width = `calc(100% - ${De()}px)`)
      : (s.style.width = "100%");
  },
  Ce = function (t, s, n) {
    G(
      "click",
      function () {
        Me(n, t), Le(t);
      },
      s,
    );
  },
  mt = function (t, s, n) {
    G(
      "click",
      function () {
        ye(s, t);
      },
      n,
    );
  },
  Ie = function (t) {
    G(
      "resize",
      function () {
        t.getChartHead().scrollLeft = t.getChartBody().scrollLeft;
      },
      window,
    ),
      G(
        "resize",
        function () {
          t.getListBody().scrollTop = t.getChartBody().scrollTop;
        },
        window,
      );
  },
  et = function (t, s, n, e) {
    G(
      "click",
      function (a) {
        a.target.classList.contains("gfoldercollapse") === !1 &&
          s[e] &&
          typeof s[e] == "function" &&
          s[e](n, a, t, e);
      },
      t,
    );
  },
  st = function (t, s, n, e, a, o, i = null, d = "blur") {
    const h = e[a];
    if (t.children[0] && t.children[0].children && t.children[0].children[0]) {
      const f = t.children[0].children[0].tagName;
      (f === "SELECT" || f === "INPUT" || f === "BUTTON") &&
        G(
          d,
          function (D) {
            if ((n && n(h, D), s[o] && typeof s[o] == "function")) {
              const g = s[o](e, h, D, t, Ve[o]);
              g && g.then ? g.then((p) => i()) : i();
            } else i();
          },
          t.children[0].children[0],
        );
    }
  },
  Je = function (t) {
    const s = document.querySelectorAll(".gtaskbarcontainer");
    for (let n = 0; n < s.length; n++) {
      const e = s[n];
      e.addEventListener("mouseover", (a) => {
        he(a, t);
      }),
        e.addEventListener("mouseout", (a) => {
          he(a, t);
        });
    }
  },
  he = function (t, s) {
    const e = t.currentTarget.getAttribute("id").split("_");
    let a = s && s.borderStyleHover !== void 0 ? s.hoverStyle : "groove";
    t.type === "mouseout" && (a = ""),
      e.length > 1 &&
        Array.from(document.querySelectorAll(`.gDepId${e[1]}`)).forEach((i) => {
          i.style.borderStyle = a;
        });
  },
  Ve = {
    taskname: "pName",
    res: "pRes",
    dur: "",
    comp: "pComp",
    start: "pStart",
    end: "pEnd",
    planstart: "pPlanStart",
    planend: "pPlanEnd",
    link: "pLink",
    cost: "pCost",
    mile: "pMile",
    group: "pGroup",
    parent: "pParent",
    open: "pOpen",
    depend: "pDepend",
    caption: "pCaption",
    note: "pNotes",
  },
  it = function (t, s, n = "text", e = null, a = null) {
    if ((e || (e = t), s))
      switch (n) {
        case "date":
          return (
            (e = e
              ? new Date(e.getTime() - e.getTimezoneOffset() * 6e4)
                  .toISOString()
                  .split("T")[0]
              : ""),
            `<input class="gantt-inputtable" type="date" value="${e}">`
          );
        case "resource":
          if (a) {
            const o = a.filter((i) => i.id == e || i.name == e);
            return (
              o && o.length > 0 ? (e = o[0].id) : a.push({ id: e, name: e }),
              "<select>" +
                a
                  .map(
                    (i) =>
                      `<option value="${i.id}" ${e == i.id ? "selected" : ""} >${i.name}</option>`,
                  )
                  .join("") +
                "</select>"
            );
          } else
            return `<input class="gantt-inputtable" type="text" value="${e || ""}">`;
        case "cost":
          return `<input class="gantt-inputtable" type="number" max="100" min="0" value="${e || ""}">`;
        default:
          return `<input class="gantt-inputtable" value="${e || ""}">`;
      }
    else return t;
  },
  r = function (
    t,
    s,
    n = null,
    e = null,
    a = null,
    o = null,
    i = null,
    d = null,
    h = null,
    f = null,
  ) {
    let u = t.appendChild(document.createElement(s));
    if (f)
      for (let D = 0; D + 1 < f.length; D += 2) u.setAttribute(f[D], f[D + 1]);
    return (
      n && (u.id = n),
      e && (u.className = e),
      o && (u.style.width = isNaN(o * 1) ? o : o + "px"),
      i && (u.style.left = isNaN(i * 1) ? i : i + "px"),
      a &&
        (a.indexOf && a.indexOf("<") === -1
          ? u.appendChild(document.createTextNode(a))
          : u.insertAdjacentHTML("beforeend", a)),
      d && (u.style.display = d),
      h && (u.colSpan = h),
      u
    );
  },
  Ke = function (t) {
    let s = this.getList();
    for (let n = 0; n < s.length; n++) if (s[n].getID() == t) return n;
    return -1;
  },
  Xe = function () {
    let t = this.getList(),
      s,
      n,
      e = Math.floor(this.getRowHeight() / 2);
    for (let a = 0; a < t.length; a++)
      t[a].getID(),
        (s = t[a].getBarDiv()),
        t[a].getTaskDiv(),
        t[a].getParItem() && t[a].getParItem().getGroup() == 2
          ? (n = t[a].getParItem().getChildRow())
          : (n = t[a].getChildRow()),
        s &&
          (t[a].setStartX(s.offsetLeft + 1),
          t[a].setStartY(n.offsetTop + s.offsetTop + e - 1),
          t[a].setEndX(s.offsetLeft + s.offsetWidth + 1),
          t[a].setEndY(n.offsetTop + s.offsetTop + e - 1));
  },
  Ge = function (t, s, n, e, a) {
    let o = Math.min(t, n),
      i = Math.min(s, e),
      d = Math.abs(n - t) + 1,
      h = Math.abs(e - s) + 1,
      f = document.createElement("div");
    return (
      (f.id = this.vDivId + "line" + this.vDepId++),
      (f.style.position = "absolute"),
      (f.style.overflow = "hidden"),
      (f.style.zIndex = "0"),
      (f.style.left = o + "px"),
      (f.style.top = i + "px"),
      (f.style.width = d + "px"),
      (f.style.height = h + "px"),
      (f.style.visibility = "visible"),
      d == 1 ? (f.className = "glinev") : (f.className = "glineh"),
      a && (f.className += " " + a),
      this.getLines().appendChild(f),
      this.vEvents.onLineDraw &&
        typeof this.vEvents.onLineDraw == "function" &&
        this.vEvents.onLineDraw(f),
      f
    );
  },
  $e = function (t) {
    let s = document.createDocumentFragment(),
      n = !1;
    for (let e = 0; e < this.vShowSelector.length && !n; e++)
      this.vShowSelector[e].toLowerCase() == t.toLowerCase() && (n = !0);
    if (n) {
      let e = r(
        s,
        "div",
        null,
        "gselector",
        this.vLangs[this.vLang].format + ":",
      );
      this.vFormatArr.join().toLowerCase().indexOf("hour") != -1 &&
        mt(
          this,
          "hour",
          r(
            e,
            "span",
            this.vDivId + "formathour" + t,
            "gformlabel" + (this.vFormat == "hour" ? " gselected" : ""),
            this.vLangs[this.vLang].hour,
          ),
        ),
        this.vFormatArr.join().toLowerCase().indexOf("day") != -1 &&
          mt(
            this,
            "day",
            r(
              e,
              "span",
              this.vDivId + "formatday" + t,
              "gformlabel" + (this.vFormat == "day" ? " gselected" : ""),
              this.vLangs[this.vLang].day,
            ),
          ),
        this.vFormatArr.join().toLowerCase().indexOf("week") != -1 &&
          mt(
            this,
            "week",
            r(
              e,
              "span",
              this.vDivId + "formatweek" + t,
              "gformlabel" + (this.vFormat == "week" ? " gselected" : ""),
              this.vLangs[this.vLang].week,
            ),
          ),
        this.vFormatArr.join().toLowerCase().indexOf("month") != -1 &&
          mt(
            this,
            "month",
            r(
              e,
              "span",
              this.vDivId + "formatmonth" + t,
              "gformlabel" + (this.vFormat == "month" ? " gselected" : ""),
              this.vLangs[this.vLang].month,
            ),
          ),
        this.vFormatArr.join().toLowerCase().indexOf("quarter") != -1 &&
          mt(
            this,
            "quarter",
            r(
              e,
              "span",
              this.vDivId + "formatquarter" + t,
              "gformlabel" + (this.vFormat == "quarter" ? " gselected" : ""),
              this.vLangs[this.vLang].quarter,
            ),
          );
    } else r(s, "div", null, "gselector");
    return s;
  },
  Qe = function (t, s, n) {
    let e, a;
    s ? (e = s) : (e = 400),
      n ? (a = n) : (a = 400),
      window.open(t, "newwin", "height=" + a + ",width=" + e);
  },
  Mt = function (t, s, n) {
    if (t.length < 2) return n;
    let e = n,
      a = new Array();
    for (let o = 0; o < t.length; o++) t[o].getParent() == s && a.push(t[o]);
    a.length > 0 &&
      a.sort(function (o, i) {
        let d = o.getStart().getTime() - i.getStart().getTime();
        return (
          d == 0 && (d = o.getEnd().getTime() - i.getEnd().getTime()),
          d == 0 ? o.getID() - i.getID() : d
        );
      });
    for (let o = 0; o < a.length; o++)
      for (let i = 0; i < t.length; i++)
        t[i].getID() == a[o].getID() &&
          (t[i].setSortIdx(e++), (e = Mt(t, t[i].getID(), e)));
    return e;
  },
  Ze = function (t) {
    const s = Object.assign({}, t);
    return (
      ve.forEach((n) => {
        delete s[n];
      }),
      new yt(
        t.pID,
        t.pName,
        t.pStart,
        t.pEnd,
        t.pClass,
        t.pLink,
        t.pMile,
        t.pRes,
        t.pComp,
        t.pGroup,
        t.pParent,
        t.pOpen,
        t.pDepend,
        t.pCaption,
        t.pNotes,
        t.pGantt,
        t.pCost,
        t.pPlanStart,
        t.pPlanEnd,
        t.pDuration,
        t.pBarText,
        t,
        t.pPlanClass,
      )
    );
  },
  yt = function (
    t,
    s,
    n,
    e,
    a,
    o,
    i,
    d,
    h,
    f,
    u,
    D,
    g,
    p,
    m,
    T,
    k = null,
    l = null,
    v = null,
    w = null,
    S = null,
    P = null,
    F = null,
  ) {
    let y = T || this,
      R = document.createTextNode(t).data,
      W = Ct(document.createTextNode(t).data),
      z = document.createTextNode(s).data,
      C = null,
      x = null,
      U = null,
      N = null,
      J = null,
      E = null,
      O = null,
      K = null,
      Y = document.createTextNode(a).data,
      I = document.createTextNode(F).data,
      _ = document.createTextNode(o).data,
      A = parseInt(document.createTextNode(i).data),
      V = document.createTextNode(d).data,
      $ = parseFloat(document.createTextNode(h).data),
      ot = parseInt(document.createTextNode(k).data),
      nt = parseInt(document.createTextNode(f).data),
      ut = P,
      B,
      dt = document.createTextNode(u).data;
    dt && dt !== "0" && (dt = Ct(dt).toString());
    let Pe = dt,
      Bt = nt == 2 ? 1 : parseInt(document.createTextNode(D).data),
      at = new Array(),
      ht = new Array(),
      zt = document.createTextNode(p).data,
      rt = w || "",
      Ut = S || "",
      Ot = 0,
      _t = 0,
      Jt = 0,
      Vt = 1,
      Kt = 0,
      Lt = !1,
      Xt,
      Gt,
      $t,
      Qt,
      ft,
      Zt = null,
      te = null,
      ee = null,
      ne = null,
      se = null,
      ae = null,
      ie = null,
      oe = null;
    if (
      ((ft = document.createElement("span")),
      (ft.className = "gTaskNotes"),
      m != null && ((ft.innerHTML = m), Pt(ft)),
      n != null &&
        n != "" &&
        ((C =
          n instanceof Date
            ? n
            : vt(document.createTextNode(n).data, y.getDateInputFormat())),
        (J = C)),
      e != null &&
        e != "" &&
        ((x =
          e instanceof Date
            ? e
            : vt(document.createTextNode(e).data, y.getDateInputFormat())),
        (E = x)),
      l != null &&
        l != "" &&
        ((U =
          l instanceof Date
            ? l
            : vt(document.createTextNode(l).data, y.getDateInputFormat())),
        (O = U)),
      v != null &&
        v != "" &&
        ((N =
          v instanceof Date
            ? v
            : vt(document.createTextNode(v).data, y.getDateInputFormat())),
        (K = N)),
      g != null)
    ) {
      let b = (g + "").split(","),
        Q = b.length;
      for (let H = 0; H < Q; H++)
        b[H].toUpperCase().endsWith("SS")
          ? ((at[H] = b[H].substring(0, b[H].length - 2)), (ht[H] = "SS"))
          : b[H].toUpperCase().endsWith("FF")
            ? ((at[H] = b[H].substring(0, b[H].length - 2)), (ht[H] = "FF"))
            : b[H].toUpperCase().endsWith("SF")
              ? ((at[H] = b[H].substring(0, b[H].length - 2)), (ht[H] = "SF"))
              : b[H].toUpperCase().endsWith("FS")
                ? ((at[H] = b[H].substring(0, b[H].length - 2)), (ht[H] = "FS"))
                : ((at[H] = b[H]), (ht[H] = "FS")),
          at[H] && (at[H] = Ct(at[H]).toString());
    }
    (this.getID = function () {
      return W;
    }),
      (this.getOriginalID = function () {
        return R;
      }),
      (this.getGantt = function () {
        return y;
      }),
      (this.getName = function () {
        return z;
      }),
      (this.getStart = function () {
        return C || U || new Date();
      }),
      (this.getStartVar = function () {
        return C;
      }),
      (this.getEnd = function () {
        if (x) return x;
        if (N) return N;
        if (C && rt) {
          let c = new Date(C);
          const b = rt.split(" "),
            Q = parseInt(b[0]);
          switch (b[1]) {
            case "hour":
              c.setMinutes(c.getMinutes() + Q * 60);
              break;
            case "day":
              c.setMinutes(c.getMinutes() + Q * 60 * 24);
              break;
            case "week":
              c.setMinutes(c.getMinutes() + Q * 60 * 24 * 7);
              break;
            case "month":
              c.setMonth(c.getMonth() + Q);
              break;
            case "quarter":
              c.setMonth(c.getMonth() + Q * 3);
              break;
          }
          return c;
        } else return new Date();
      }),
      (this.getEndVar = function () {
        return x;
      }),
      (this.getPlanStart = function () {
        return U || C;
      }),
      (this.getPlanClass = function () {
        return I && I !== "null" ? I : Y;
      }),
      (this.getPlanEnd = function () {
        return N || x;
      }),
      (this.getCost = function () {
        return ot;
      }),
      (this.getGroupMinStart = function () {
        return J;
      }),
      (this.getGroupMinEnd = function () {
        return E;
      }),
      (this.getGroupMinPlanStart = function () {
        return O;
      }),
      (this.getGroupMinPlanEnd = function () {
        return K;
      }),
      (this.getClass = function () {
        return Y;
      }),
      (this.getLink = function () {
        return _;
      }),
      (this.getMile = function () {
        return A;
      }),
      (this.getDepend = function () {
        return at || null;
      }),
      (this.getDataObject = function () {
        return ut;
      }),
      (this.getDepType = function () {
        return ht || null;
      }),
      (this.getCaption = function () {
        return zt || "";
      }),
      (this.getResource = function () {
        return V || " ";
      }),
      (this.getCompVal = function () {
        return $ || B || 0;
      }),
      (this.getCompStr = function () {
        return $ ? $ + "%" : B ? B + "%" : "";
      }),
      (this.getCompRestStr = function () {
        return $ ? 100 - $ + "%" : B ? 100 - B + "%" : "";
      }),
      (this.getNotes = function () {
        return ft;
      }),
      (this.getSortIdx = function () {
        return Kt;
      }),
      (this.getToDelete = function () {
        return Lt;
      }),
      (this.getDuration = function (c, b) {
        if (A) rt = "-";
        else if (rt) {
          let Q = null;
          switch (c) {
            case "week":
              Q = "day";
              break;
            case "month":
              Q = "week";
              break;
            case "quarter":
              Q = "month";
              break;
            default:
              Q = c;
              break;
          }
          let H = Number(rt) * 24,
            X = 0,
            tt;
          switch (Q) {
            case "hour":
              (X = Math.round(H)), (tt = X + " " + (X != 1 ? b.hrs : b.hr));
              break;
            case "day":
              (X = Math.round(H / 24)),
                (tt = X + " " + (X != 1 ? b.dys : b.dy));
              break;
            case "week":
              (X = Math.round(H / 24 / 7)),
                (tt = X + " " + (X != 1 ? b.wks : b.wk));
              break;
            case "month":
              (X = Math.round(H / 24 / 7 / 4.35)),
                (tt = X + " " + (X != 1 ? b.mths : b.mth));
              break;
            case "quarter":
              (X = Math.round(H / 24 / 7 / 13)),
                (tt = X + " " + (X != 1 ? b.qtrs : b.qtr));
              break;
          }
          return tt;
        } else {
          if (!x && !C && U && N)
            return re(c, b, this.getPlanStart(), this.getPlanEnd());
          rt = re(c, b, this.getStart(), this.getEnd());
        }
        return rt;
      });
    function re(c, b, Q, H, X) {
      let tt,
        pt = null;
      switch (c) {
        case "week":
          pt = "day";
          break;
        case "month":
          pt = "week";
          break;
        case "quarter":
          pt = "month";
          break;
        default:
          pt = c;
          break;
      }
      const gt = (H.getTime() - Q.getTime()) / 1e3 / 60 / 60;
      console.log(X, "hours:", gt);
      let Z;
      switch (pt) {
        case "hour":
          (Z = Math.round(gt)), (tt = Z + " " + (Z != 1 ? b.hrs : b.hr));
          break;
        case "day":
          (Z = Math.round(gt / 24)), (tt = Z + " " + (Z != 1 ? b.dys : b.dy));
          break;
        case "week":
          (Z = Math.round(gt / 24 / 7)),
            (tt = Z + " " + (Z != 1 ? b.wks : b.wk));
          break;
        case "month":
          (Z = Math.round(gt / 24 / 7 / 4.35)),
            (tt = Z + " " + (Z != 1 ? b.mths : b.mth));
          break;
        case "quarter":
          (Z = Math.round(gt / 24 / 7 / 13)),
            (tt = Z + " " + (Z != 1 ? b.qtrs : b.qtr));
          break;
      }
      return tt;
    }
    (this.getBarText = function () {
      return Ut;
    }),
      (this.getParent = function () {
        return Pe;
      }),
      (this.getGroup = function () {
        return nt;
      }),
      (this.getOpen = function () {
        return Bt;
      }),
      (this.getLevel = function () {
        return Ot;
      }),
      (this.getNumKids = function () {
        return _t;
      }),
      (this.getWeight = function () {
        return Jt;
      }),
      (this.getStartX = function () {
        return Xt;
      }),
      (this.getStartY = function () {
        return Gt;
      }),
      (this.getEndX = function () {
        return $t;
      }),
      (this.getEndY = function () {
        return Qt;
      }),
      (this.getVisible = function () {
        return Vt;
      }),
      (this.getParItem = function () {
        return Zt;
      }),
      (this.getCellDiv = function () {
        return te;
      }),
      (this.getBarDiv = function () {
        return ee;
      }),
      (this.getTaskDiv = function () {
        return ne;
      }),
      (this.getPlanTaskDiv = function () {
        return se;
      }),
      (this.getChildRow = function () {
        return ie;
      }),
      (this.getListChildRow = function () {
        return ae;
      }),
      (this.getGroupSpan = function () {
        return oe;
      }),
      (this.setName = function (c) {
        z = c;
      }),
      (this.setNotes = function (c) {
        ft = c;
      }),
      (this.setClass = function (c) {
        Y = c;
      }),
      (this.setPlanClass = function (c) {
        I = c;
      }),
      (this.setCost = function (c) {
        ot = c;
      }),
      (this.setResource = function (c) {
        V = c;
      }),
      (this.setDuration = function (c) {
        rt = c;
      }),
      (this.setDataObject = function (c) {
        ut = c;
      }),
      (this.setStart = function (c) {
        if (c instanceof Date) C = c;
        else {
          const b = new Date(c);
          b instanceof Date && !isNaN(b.valueOf()) && (C = b);
        }
      }),
      (this.setEnd = function (c) {
        if (c instanceof Date) x = c;
        else {
          const b = new Date(c);
          b instanceof Date && !isNaN(b.valueOf()) && (x = b);
        }
      }),
      (this.setPlanStart = function (c) {
        c instanceof Date ? (U = c) : (U = new Date(c));
      }),
      (this.setPlanEnd = function (c) {
        c instanceof Date ? (N = c) : (N = new Date(c));
      }),
      (this.setGroupMinStart = function (c) {
        c instanceof Date && (J = c);
      }),
      (this.setGroupMinEnd = function (c) {
        c instanceof Date && (E = c);
      }),
      (this.setLevel = function (c) {
        Ot = parseInt(document.createTextNode(c).data);
      }),
      (this.setNumKid = function (c) {
        _t = parseInt(document.createTextNode(c).data);
      }),
      (this.setWeight = function (c) {
        Jt = parseInt(document.createTextNode(c).data);
      }),
      (this.setCompVal = function (c) {
        B = parseFloat(document.createTextNode(c).data);
      }),
      (this.setComp = function (c) {
        $ = parseInt(document.createTextNode(c).data);
      }),
      (this.setStartX = function (c) {
        Xt = parseInt(document.createTextNode(c).data);
      }),
      (this.setStartY = function (c) {
        Gt = parseInt(document.createTextNode(c).data);
      }),
      (this.setEndX = function (c) {
        $t = parseInt(document.createTextNode(c).data);
      }),
      (this.setEndY = function (c) {
        Qt = parseInt(document.createTextNode(c).data);
      }),
      (this.setOpen = function (c) {
        Bt = parseInt(document.createTextNode(c).data);
      }),
      (this.setVisible = function (c) {
        Vt = parseInt(document.createTextNode(c).data);
      }),
      (this.setSortIdx = function (c) {
        Kt = parseInt(document.createTextNode(c).data);
      }),
      (this.setToDelete = function (c) {
        c ? (Lt = !0) : (Lt = !1);
      }),
      (this.setParItem = function (c) {
        c && (Zt = c);
      }),
      (this.setCellDiv = function (c) {
        (typeof HTMLDivElement != "function" || c instanceof HTMLDivElement) &&
          (te = c);
      }),
      (this.setGroup = function (c) {
        c === !0 || c === "true"
          ? (nt = 1)
          : c === !1 || c === "false"
            ? (nt = 0)
            : (nt = parseInt(document.createTextNode(c).data));
      }),
      (this.setBarText = function (c) {
        c && (Ut = c);
      }),
      (this.setBarDiv = function (c) {
        (typeof HTMLDivElement != "function" || c instanceof HTMLDivElement) &&
          (ee = c);
      }),
      (this.setTaskDiv = function (c) {
        (typeof HTMLDivElement != "function" || c instanceof HTMLDivElement) &&
          (ne = c);
      }),
      (this.setPlanTaskDiv = function (c) {
        (typeof HTMLDivElement != "function" || c instanceof HTMLDivElement) &&
          (se = c);
      }),
      (this.setChildRow = function (c) {
        (typeof HTMLTableRowElement != "function" ||
          c instanceof HTMLTableRowElement) &&
          (ie = c);
      }),
      (this.setListChildRow = function (c) {
        (typeof HTMLTableRowElement != "function" ||
          c instanceof HTMLTableRowElement) &&
          (ae = c);
      }),
      (this.setGroupSpan = function (c) {
        (typeof HTMLSpanElement != "function" ||
          c instanceof HTMLSpanElement) &&
          (oe = c);
      }),
      (this.getAllData = function () {
        return {
          pID: W,
          pName: z,
          pStart: C,
          pEnd: x,
          pPlanStart: U,
          pPlanEnd: N,
          pGroupMinStart: J,
          pGroupMinEnd: E,
          pClass: Y,
          pLink: _,
          pMile: A,
          pRes: V,
          pComp: $,
          pCost: ot,
          pGroup: nt,
          pDataObject: ut,
          pPlanClass: I,
        };
      });
  },
  tn = function (t, s = null) {
    let n,
      e = document.createDocumentFragment(),
      a = r(e, "div", null, "gTaskInfo");
    const o = (d) => {
      if (((a.innerHTML = ""), d)) {
        let h = t.getAllData();
        ve.forEach((f) => {
          let u;
          ue[f] && (u = this.vLangs[this.vLang][ue[f]]), u || (u = f);
          const D = h[f];
          (d = d.replace(`{{${f}}}`, D)),
            u
              ? (d = d.replace(`{{Lang:${f}}}`, u))
              : (d = d.replace(`{{Lang:${f}}}`, f));
        }),
          r(a, "span", null, "gTtTemplate", d);
      } else {
        if (
          (r(a, "span", null, "gTtTitle", t.getName()),
          this.vShowTaskInfoStartDate == 1 &&
            ((n = r(a, "div", null, "gTILine gTIsd")),
            r(
              n,
              "span",
              null,
              "gTaskLabel",
              this.vLangs[this.vLang].startdate + ": ",
            ),
            r(
              n,
              "span",
              null,
              "gTaskText",
              q(
                t.getStart(),
                this.vDateTaskDisplayFormat,
                this.vLangs[this.vLang],
              ),
            )),
          this.vShowTaskInfoEndDate == 1 &&
            ((n = r(a, "div", null, "gTILine gTIed")),
            r(
              n,
              "span",
              null,
              "gTaskLabel",
              this.vLangs[this.vLang].enddate + ": ",
            ),
            r(
              n,
              "span",
              null,
              "gTaskText",
              q(
                t.getEnd(),
                this.vDateTaskDisplayFormat,
                this.vLangs[this.vLang],
              ),
            )),
          this.vShowTaskInfoDur == 1 &&
            !t.getMile() &&
            ((n = r(a, "div", null, "gTILine gTId")),
            r(
              n,
              "span",
              null,
              "gTaskLabel",
              this.vLangs[this.vLang].dur + ": ",
            ),
            r(
              n,
              "span",
              null,
              "gTaskText",
              t.getDuration(this.vFormat, this.vLangs[this.vLang]),
            )),
          this.vShowTaskInfoComp == 1 &&
            ((n = r(a, "div", null, "gTILine gTIc")),
            r(
              n,
              "span",
              null,
              "gTaskLabel",
              this.vLangs[this.vLang].completion + ": ",
            ),
            r(n, "span", null, "gTaskText", t.getCompStr())),
          this.vShowTaskInfoRes == 1 &&
            ((n = r(a, "div", null, "gTILine gTIr")),
            r(
              n,
              "span",
              null,
              "gTaskLabel",
              this.vLangs[this.vLang].res + ": ",
            ),
            r(n, "span", null, "gTaskText", t.getResource())),
          this.vShowTaskInfoLink == 1 && t.getLink() != "")
        ) {
          n = r(a, "div", null, "gTILine gTIl");
          let h = r(n, "span", null, "gTaskLabel");
          (h = r(h, "a", null, "gTaskText", this.vLangs[this.vLang].moreinfo)),
            h.setAttribute("href", t.getLink());
        }
        this.vShowTaskInfoNotes == 1 &&
          ((n = r(a, "div", null, "gTILine gTIn")),
          r(
            n,
            "span",
            null,
            "gTaskLabel",
            this.vLangs[this.vLang].notes + ": ",
          ),
          t.getNotes() && n.appendChild(t.getNotes()));
      }
    };
    let i;
    return (
      typeof s == "function"
        ? (i = () => {
            const d = s(t);
            if (!d || typeof d == "string") o(d);
            else if (d.then)
              return (
                o(
                  this.vLangs[this.vLang].tooltipLoading ||
                    this.vLangs.en.tooltipLoading,
                ),
                d.then(o)
              );
          })
        : o(s),
      { component: e, callback: i }
    );
  },
  en = function (t) {
    let s = !1;
    for (let n = 0; n < this.vTaskList.length; n++)
      this.vTaskList[n].getID() == t.getID() &&
        ((n = this.vTaskList.length), (s = !0));
    s || (this.vTaskList.push(t), (this.vProcessNeeded = !0));
  },
  Fe = function (t) {
    return t.pGantt || (t.pGantt = this), this.AddTaskItem(Ze(t));
  },
  nn = function (t) {
    for (let s = 0; s < this.vTaskList.length; s++)
      this.vTaskList[s].getID() == t
        ? this.vTaskList[s].setToDelete(!0)
        : this.vTaskList[s].getParent() == t &&
          this.RemoveTaskItem(this.vTaskList[s].getID());
    this.vProcessNeeded = !0;
  },
  sn = function () {
    this.vTaskList.map((t) => this.RemoveTaskItem(t.getID())),
      (this.vProcessNeeded = !0);
  },
  xt = function (t, s, n, e, a, o, i = !1) {
    let d = null,
      h = null,
      f = null,
      u = null,
      D = a,
      g = null,
      p = 0,
      m = 0,
      T = 0,
      k = 0,
      l = 0,
      v = 0,
      w = 0,
      S = e,
      P = t,
      F = !1,
      y = 0;
    for (y = 0; y < t.length; y++)
      t[y].getToDelete() && (t.splice(y, 1), y--),
        y >= 0 && t[y].getID() == s && (g = t[y]);
    for (y = 0; y < t.length; y++)
      if (t[y].getParent() == s) {
        if (
          ((D = a),
          t[y].setParItem(g),
          t[y].setVisible(D),
          D == 1 && t[y].getOpen() == 0 && (D = 0),
          t[y].getMile() &&
            t[y].getParItem() &&
            t[y].getParItem().getGroup() == 2)
        ) {
          t.splice(y, 1), y--;
          continue;
        }
        t[y].setLevel(S),
          t[y].getGroup() &&
            (t[y].getParItem() &&
              t[y].getParItem().getGroup() == 2 &&
              t[y].setGroup(2),
            xt(P, t[y].getID(), y, S + 1, D, 0)),
          t[y].getStartVar() &&
            (m == 0 || t[y].getStartVar() < d) &&
            ((d = t[y].getStartVar()), (m = 1)),
          t[y].getEndVar() &&
            (T == 0 || t[y].getEndVar() > h) &&
            ((h = t[y].getEndVar()), (T = 1)),
          (k == 0 || t[y].getPlanStart() < f) &&
            ((f = t[y].getPlanStart()), (k = 1)),
          (l == 0 || t[y].getPlanEnd() > u) &&
            ((u = t[y].getPlanEnd()), (l = 1)),
          v++,
          (w += t[y].getEnd() - t[y].getStart() + 1),
          (p += t[y].getCompVal() * (t[y].getEnd() - t[y].getStart() + 1)),
          t[y].setSortIdx(y * t.length);
      }
    if (
      (n >= 0 &&
        (t[n].getGroupMinStart() != null &&
          t[n].getGroupMinStart() < d &&
          (d = t[n].getGroupMinStart()),
        t[n].getGroupMinEnd() != null &&
          t[n].getGroupMinEnd() > h &&
          (h = t[n].getGroupMinEnd()),
        d && t[n].setStart(d),
        h && t[n].setEnd(h),
        t[n].getGroupMinPlanStart() != null &&
          t[n].getGroupMinPlanStart() < f &&
          (f = t[n].getGroupMinPlanStart()),
        t[n].getGroupMinPlanEnd() != null &&
          t[n].getGroupMinPlanEnd() > u &&
          (u = t[n].getGroupMinPlanEnd()),
        f && t[n].setPlanStart(f),
        u && t[n].setPlanEnd(u),
        t[n].setNumKid(v),
        t[n].setWeight(w),
        t[n].setCompVal(Math.ceil(p / w))),
      s == 0 && o == 1)
    ) {
      let R;
      if (
        (i && ((R = new Date()), console.info("before afterTasks", R)),
        Mt(t, 0, 0),
        i)
      ) {
        const W = new Date();
        console.info("after afterTasks", W, W.getTime() - R.getTime());
      }
      t.sort(function (W, z) {
        return W.getSortIdx() - z.getSortIdx();
      });
    }
    if (s == 0 && o != 1) {
      for (y = 0; y < t.length; y++)
        if (t[y].getGroup() == 2) {
          F = !0;
          let R;
          if (
            (i && ((R = new Date()), console.info("before sortTasks", R)),
            Mt(t, t[y].getID(), t[y].getSortIdx() + 1),
            i)
          ) {
            const W = new Date();
            console.info("after sortTasks", W, W.getTime() - R.getTime());
          }
        }
      F == !0 &&
        t.sort(function (R, W) {
          return R.getSortIdx() - W.getSortIdx();
        });
    }
  },
  an = function (t, s) {
    return be(t, !1, !1).then((n) => {
      qt(s, n);
    });
  },
  on = function (t, s) {
    let n;
    typeof window.DOMParser < "u"
      ? (n = new window.DOMParser().parseFromString(t, "text/xml"))
      : typeof window.ActiveXObject < "u" &&
        new window.ActiveXObject("Microsoft.XMLDOM") &&
        ((n = new window.ActiveXObject("Microsoft.XMLDOM")),
        (n.async = "false"),
        n.loadXML(t)),
      qt(s, n);
  },
  ct = function (t, s) {
    let n;
    try {
      n = t.getElementsByTagName(s);
    } catch {}
    return n;
  },
  L = function (t, s, n, e) {
    let a;
    try {
      a = t.getElementsByTagName(s)[0].childNodes[0].nodeValue;
    } catch {
      typeof e < "u" && (a = e);
    }
    return (
      typeof a < "u" &&
        a != null &&
        (n == 1 ? (a *= 1) : n == 2 && (a = a.toString())),
      a
    );
  },
  qt = function (t, s) {
    let n = "",
      e,
      a = 0,
      o = 0,
      i = 0,
      d = 0,
      h = 0,
      f = 0,
      u = new Array(),
      D = new Array(),
      g = new Array(),
      p = new Array(),
      m = ct(s, "Project");
    if (
      (typeof m < "u" && m.length > 0 && (n = m[0].getAttribute("xmlns")),
      n == "http://schemas.microsoft.com/project")
    ) {
      t.setDateInputFormat("yyyy-mm-dd"),
        (e = ct(s, "Task")),
        typeof e > "u" ? (a = 0) : (a = e.length);
      let T = ct(s, "Resource");
      for (
        typeof T > "u" ? ((a = 0), (o = 0)) : (o = T.length), i = 0;
        i < o;
        i++
      ) {
        let l = L(T[i], "Name", 2, ""),
          v = L(T[i], "UID", 1, -1);
        l.length > 0 && v > 0 && (g[v] = l);
      }
      let k = ct(s, "Assignment");
      for (typeof k > "u" ? (d = 0) : (d = k.length), i = 0; i < d; i++) {
        let l,
          v = L(k[i], "ResourceUID", 1, -1);
        (l = L(k[i], "TaskUID", 1, -1)),
          l > 0 && (v > 0 && (D[l] = g[v]), (u[l] = k[i]));
      }
      for (i = 0; i < a; i++) {
        let l;
        l = L(e[i], "UID", 1, 0);
        let v;
        l != 0 && (v = L(e[i], "OutlineNumber", 2, "0")),
          l > 0 && (p[v] = l),
          l > f && (f = l);
      }
      for (i = 0; i < a; i++) {
        let l = L(e[i], "UID", 1, 0);
        if (l != 0) {
          let v = L(e[i], "Name", 2, "No Task Name"),
            w = L(e[i], "Start", 2, ""),
            S = L(e[i], "Finish", 2, ""),
            P = L(e[i], "PlanStart", 2, ""),
            F = L(e[i], "PlanFinish", 2, ""),
            y = L(e[i], "Duration", 2, ""),
            R = L(e[i], "HyperlinkAddress", 2, ""),
            W = L(e[i], "Milestone", 1, 0),
            z = L(e[i], "PercentWorkComplete", 1, 0),
            C = L(e[i], "Cost", 2, 0),
            x = L(e[i], "Summary", 1, 0),
            U = 0,
            N = L(e[i], "OutlineLevel", 1, 0),
            J;
          N > 1 &&
            ((J = L(e[i], "OutlineNumber", 2, "0")),
            (U = p[J.substr(0, J.lastIndexOf("."))]));
          let E;
          try {
            E = e[i].getElementsByTagName("Notes")[0].childNodes[1].nodeValue;
          } catch {
            E = "";
          }
          let O;
          typeof D[l] < "u" ? (O = D[l]) : (O = "");
          let K = ct(e[i], "PredecessorLink");
          typeof K > "u" ? (d = 0) : (d = K.length);
          let Y = "";
          for (h = 0; h < d; h++) {
            let B = L(K[h], "PredecessorUID", 1, -1),
              dt = L(K[h], "Type", 1, 1);
            if (B > 0)
              switch ((Y.length > 0 && (Y += ","), dt)) {
                case 0:
                  Y += B + "FF";
                  break;
                case 1:
                  Y += B + "FS";
                  break;
                case 2:
                  Y += B + "SF";
                  break;
                case 3:
                  Y += B + "SS";
                  break;
                default:
                  Y += B + "FS";
                  break;
              }
          }
          let I = 1,
            _ = "",
            A;
          x > 0
            ? (A = "ggroupblack")
            : W > 0
              ? (A = "gmilestone")
              : (A = "gtaskblue");
          let V = ct(u[l], "TimephasedData");
          typeof V > "u" ? (d = 0) : (d = V.length);
          let $ = w,
            ot = S,
            nt = !1,
            ut = Y.replace(/,*[0-9]+[FS]F/g, "");
          for (h = 0; h < d; h++) {
            let B = L(V[h], "Value", 2, "0");
            (B = "0" + B.replace(/\D/g, "")),
              (B *= 1),
              (B == 0 && !nt) || (h + 1 == d && x == 2)
                ? ((x = 2),
                  h + 1 == d && (ut = Y.replace(/,*[0-9]+[FS]S/g, "")),
                  f++,
                  (ot = L(V[h], h + 1 == d ? "Finish" : "Start", 2, "")),
                  t.AddTaskItem(
                    new yt(
                      f,
                      v,
                      $,
                      ot,
                      "gtaskblue",
                      R,
                      W,
                      O,
                      z,
                      0,
                      l,
                      I,
                      ut,
                      _,
                      E,
                      t,
                      C,
                      P,
                      F,
                      y,
                    ),
                  ),
                  (nt = !0),
                  (ut = ""))
                : B != 0 && nt && (($ = L(V[h], "Start", 2, "")), (nt = !1));
          }
          nt && (Y = ""),
            t.AddTaskItem(
              new yt(
                l,
                v,
                w,
                S,
                A,
                R,
                W,
                O,
                z,
                x,
                U,
                I,
                Y,
                _,
                E,
                t,
                C,
                P,
                F,
                y,
                void 0,
                void 0,
                A,
              ),
            );
        }
      }
    } else
      for (
        e = s.getElementsByTagName("task"), a = e.length, i = 0;
        i < a;
        i++
      ) {
        let T = L(e[i], "pID", 1, 0);
        if (T != 0) {
          let k = L(e[i], "pName", 2, "No Task Name"),
            l = L(e[i], "pStart", 2, ""),
            v = L(e[i], "pEnd", 2, ""),
            w = L(e[i], "pPlanStart", 2, ""),
            S = L(e[i], "pPlanEnd", 2, ""),
            P = L(e[i], "pDuration", 2, ""),
            F = L(e[i], "pLink", 2, ""),
            y = L(e[i], "pMile", 1, 0),
            R = L(e[i], "pComp", 1, 0),
            W = L(e[i], "pCost", 2, 0),
            z = L(e[i], "pGroup", 1, 0),
            C = L(e[i], "pParent", 1, 0),
            x = L(e[i], "pRes", 2, ""),
            U = L(e[i], "pOpen", 1, 1),
            N = L(e[i], "pDepend", 2, ""),
            J = L(e[i], "pCaption", 2, ""),
            E = L(e[i], "pNotes", 2, ""),
            O = L(e[i], "pClass", 2, ""),
            K = L(e[i], "pPlanClass", 2, "");
          typeof O > "u" &&
            (z > 0
              ? (O = "ggroupblack")
              : y > 0
                ? (O = "gmilestone")
                : (O = "gtaskblue")),
            typeof K > "u" && (K = O),
            t.AddTaskItem(
              new yt(
                T,
                k,
                l,
                v,
                O,
                F,
                y,
                x,
                R,
                z,
                C,
                U,
                N,
                J,
                E,
                t,
                W,
                w,
                S,
                P,
                void 0,
                void 0,
                K,
              ),
            );
        }
      }
  },
  rn = function () {
    let t =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
    for (let s = 0; s < this.vTaskList.length; s++) t += this.getXMLTask(s, !0);
    return (t += "</project>"), t;
  },
  ln = function (t, s) {
    let n = 0,
      e = -1,
      a = "",
      o = j(this.getDateInputFormat() + " HH:MI:SS");
    if (s === !0) e = t;
    else
      for (n = 0; n < this.vTaskList.length; n++)
        if (this.vTaskList[n].getID() == t) {
          e = n;
          break;
        }
    if (e >= 0 && e < this.vTaskList.length) {
      (a = "<task>"),
        (a += "<pID>" + this.vTaskList[e].getID() + "</pID>"),
        (a += "<pName>" + this.vTaskList[e].getName() + "</pName>"),
        (a +=
          "<pStart>" +
          q(this.vTaskList[e].getStart(), o, this.vLangs[this.vLang]) +
          "</pStart>"),
        (a +=
          "<pEnd>" +
          q(this.vTaskList[e].getEnd(), o, this.vLangs[this.vLang]) +
          "</pEnd>"),
        (a +=
          "<pPlanStart>" +
          q(this.vTaskList[e].getPlanStart(), o, this.vLangs[this.vLang]) +
          "</pPlanStart>"),
        (a +=
          "<pPlanEnd>" +
          q(this.vTaskList[e].getPlanEnd(), o, this.vLangs[this.vLang]) +
          "</pPlanEnd>"),
        (a += "<pDuration>" + this.vTaskList[e].getDuration() + "</pDuration>"),
        (a += "<pClass>" + this.vTaskList[e].getClass() + "</pClass>"),
        (a += "<pLink>" + this.vTaskList[e].getLink() + "</pLink>"),
        (a += "<pMile>" + this.vTaskList[e].getMile() + "</pMile>"),
        this.vTaskList[e].getResource() != " " &&
          (a += "<pRes>" + this.vTaskList[e].getResource() + "</pRes>"),
        (a += "<pComp>" + this.vTaskList[e].getCompVal() + "</pComp>"),
        (a += "<pCost>" + this.vTaskList[e].getCost() + "</pCost>"),
        (a += "<pGroup>" + this.vTaskList[e].getGroup() + "</pGroup>"),
        (a += "<pParent>" + this.vTaskList[e].getParent() + "</pParent>"),
        (a += "<pOpen>" + this.vTaskList[e].getOpen() + "</pOpen>"),
        (a += "<pDepend>");
      let i = this.vTaskList[e].getDepend();
      for (n = 0; n < i.length; n++)
        n > 0 && (a += ","),
          i[n] > 0 && (a += i[n] + this.vTaskList[e].getDepType()[n]);
      (a += "</pDepend>"),
        (a += "<pCaption>" + this.vTaskList[e].getCaption() + "</pCaption>");
      let d = document.createDocumentFragment(),
        h = r(d, "div", null, null, this.vTaskList[e].getNotes().innerHTML);
      (a += "<pNotes>" + h.innerHTML + "</pNotes>"),
        (a +=
          "<pPlanClass>" + this.vTaskList[e].getPlanClass() + "</pPlanClass>"),
        (a += "</task>");
    }
    return a;
  },
  un = {
    format: "التنسيق",
    hour: "ساعة",
    day: "يوم",
    week: "أسبوع",
    month: "شهر",
    quarter: "ربع",
    hours: "ساعات",
    days: "أيام",
    weeks: "أسابيع",
    months: "أشهر",
    quarters: "أرباع",
    hr: "س",
    dy: "يو",
    wk: "أ",
    mth: "ش",
    qtr: "ر",
    hrs: "س",
    dys: "ي",
    wks: "أ",
    mths: "ش",
    qtrs: "ر",
    res: "الموارد",
    dur: "المدة",
    comp: "% الإنجاز",
    completion: "الإنجاز",
    startdate: "تاريخ البدء",
    planstartdate: "تاريخ بدء الخطة",
    enddate: "تاريخ الانتهاء",
    planenddate: "تاريخ نهاية الخطة",
    cost: "التكلفة",
    moreinfo: "مزيد من المعلومات",
    nodata: "لم يتم العثور على مهام",
    notes: "ملاحظات",
    january: "يناير",
    february: "فبراير",
    march: "مارس",
    april: "أبريل",
    maylong: "مايو",
    june: "يونيو",
    july: "يوليو",
    august: "أغسطس",
    september: "سبتمبر",
    october: "أكتوبر",
    november: "نوفمبر",
    december: "ديسمبر",
    jan: "يناير",
    feb: "فبراير",
    mar: "مارس",
    apr: "أبريل",
    may: "مايو",
    jun: "يونيو",
    jul: "يوليو",
    aug: "أغسطس",
    sep: "سبتمبر",
    oct: "أكتوبر",
    nov: "نوفمبر",
    dec: "ديسمبر",
    sunday: "الأحد",
    monday: "الإثنين",
    tuesday: "الثلاثاء",
    wednesday: "الأربعاء",
    thursday: "الخميس",
    friday: "الجمعة",
    saturday: "السبت",
    sun: "الأحد",
    mon: "الإثنين",
    tue: "الثلاثاء",
    wed: "الأربعاء",
    thu: "الخميس",
    fri: "الجمعة",
    sat: "السبت",
    tooltipLoading: "جاري التحميل...",
  },
  dn = {
    january: "一月",
    february: "二月",
    march: "三月",
    april: "四月",
    maylong: "五月",
    june: "六月",
    july: "七月",
    august: "八月",
    september: "九月",
    october: "十月",
    november: "十一月",
    december: "十二月",
    jan: "一月",
    feb: "二月",
    mar: "三月",
    apr: "四月",
    may: "五月",
    jun: "六月",
    jul: "七月",
    aug: "八月",
    sep: "九月",
    oct: "十月",
    nov: "十一月",
    dec: "十二月",
    sunday: "星期日",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
    sun: "星期日",
    mon: "星期一",
    tue: "星期二",
    wed: "星期三",
    thu: "星期四",
    fri: "星期五",
    sat: "星期六",
    res: "资源",
    dur: "时长",
    comp: "完成度",
    completion: "完成",
    startdate: "起始日期",
    planstartdate: "计划起始日期",
    enddate: "截止日期",
    planenddate: "计划截止日期",
    cost: "成本",
    moreinfo: "更多信息",
    nodata: "No tasks found",
    notes: "备注",
    format: "格式",
    hour: "时",
    day: "日",
    week: "星期",
    month: "月",
    quarter: "季",
    hours: "小时",
    days: "天",
    weeks: "周",
    months: "月",
    quarters: "季",
    hr: "小时",
    dy: "天",
    wk: "周",
    mth: "月",
    qtr: "季",
    hrs: "小时",
    dys: "天",
    wks: "周",
    mths: "月",
    qtrs: "季",
  },
  hn = {
    january: "一月",
    february: "二月",
    march: "三月",
    april: "四月",
    maylong: "五月",
    june: "六月",
    july: "七月",
    august: "八月",
    september: "九月",
    october: "十月",
    november: "十一月",
    december: "十二月",
    jan: "一月",
    feb: "二月",
    mar: "三月",
    apr: "四月",
    may: "五月",
    jun: "六月",
    jul: "七月",
    aug: "八月",
    sep: "九月",
    oct: "十月",
    nov: "十一月",
    dec: "十二月",
    sunday: "星期日",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
    sun: "星期日",
    mon: "星期一",
    tue: "星期二",
    wed: "星期三",
    thu: "星期四",
    fri: "星期五",
    sat: "星期六",
    res: "資源",
    dur: "時程",
    comp: "達成率",
    completion: "達成",
    startdate: "起始日期",
    planstartdate: "計劃起始日期",
    enddate: "截止日期",
    planenddate: "計劃截止日期",
    cost: "成本",
    moreinfo: "更多資訊",
    nodata: "No tasks found",
    notes: "備註",
    format: "格式",
    hour: "時",
    day: "日",
    week: "星期",
    month: "月",
    quarter: "季",
    hours: "小時",
    days: "天",
    weeks: "週",
    months: "月",
    quarters: "季",
    hr: "小時",
    dy: "天",
    wk: "週",
    mth: "月",
    qtr: "季",
    hrs: "小時",
    dys: "天",
    wks: "週",
    mths: "月",
    qtrs: "季",
  },
  cn = {
    format: "Zobrazení",
    hour: "Hodina",
    day: "Den",
    week: "Týden",
    month: "Měsíc",
    quarter: "Kvartál",
    hours: "Hodiny",
    days: "Dni",
    weeks: "Týdny",
    months: "Měsíce",
    quarters: "Kvartály",
    hr: "Ho",
    dy: "Den",
    wk: "Tyd",
    mth: "Měs",
    qtr: "Kvar",
    hrs: "Ho",
    dys: "Dni",
    wks: "Tyd",
    mths: "Měs",
    qtrs: "Kvar",
    res: "Přiřazeno",
    dur: "Trvání",
    comp: "% Hotovo",
    completion: "Hotovo",
    startdate: "Start",
    planstartdate: "Plánovaný start",
    enddate: "Konec",
    planenddate: "Plánovaný konec",
    cost: "Náklady",
    moreinfo: "Více informací",
    nodata: "No tasks found",
    notes: "Poznámky",
    january: "Leden",
    february: "Únor",
    march: "Březen",
    april: "Duben",
    maylong: "Květen",
    june: "Červen",
    july: "Červenec",
    august: "Srpen",
    september: "Září",
    october: "Říjen",
    november: "Listopad",
    december: "Prosinec",
    jan: "Led",
    feb: "Úno",
    mar: "Bře",
    apr: "Dub",
    may: "Kvě",
    jun: "Čer",
    jul: "Čvc",
    aug: "Srp",
    sep: "Zář",
    oct: "Říj",
    nov: "Lis",
    dec: "Pro",
    sunday: "Neděle",
    monday: "Pondělí",
    tuesday: "Úterý",
    wednesday: "Středa",
    thursday: "Čtvrtek",
    friday: "Pátek",
    saturday: "Sobota",
    sun: "Ne",
    mon: "Po",
    tue: "Út",
    wed: "St",
    thu: "Čt",
    fri: "Pa",
    sat: "So",
    tooltipLoading: "Nahrávám...",
  },
  fn = {
    format: "Ansicht",
    hour: "Stunde",
    day: "Tag",
    week: "Woche",
    month: "Monat",
    quarter: "Quartal",
    hours: "Stunden",
    days: "Tage",
    weeks: "Wochen",
    months: "Monate",
    quarters: "Quartale",
    hr: "h",
    dy: "T",
    wk: "W",
    mth: "M",
    qtr: "Q",
    hrs: "Std",
    dys: "Tage",
    wks: "Wochen",
    mths: "Monate",
    qtrs: "Quartal",
    res: "Resource",
    dur: "Dauer",
    comp: "%Fertig",
    completion: "Fertigstellung",
    startdate: "Erste Buchu",
    planstartdate: "Erste Buchu Plan",
    enddate: "Letzte Buchung",
    planenddate: "Plan Letzte Buchung",
    cost: "Cost",
    moreinfo: "Weitere Infos",
    nodata: "No tasks found",
    notes: "Anmerkung",
    january: "Jänner",
    february: "Februar",
    march: "März",
    april: "April",
    maylong: "Mai",
    june: "Juni",
    july: "Juli",
    august: "August",
    september: "September",
    october: "Oktober",
    november: "November",
    december: "Dezember",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "Mai",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Okt",
    nov: "Nov",
    dec: "Dez",
    sunday: "Sonntag",
    monday: "Montag",
    tuesday: "Dienstag",
    wednesday: "Mittwoch",
    thursday: "Donnerstag",
    friday: "Freitag",
    saturday: "Samstag",
    sun: "So",
    mon: "Mo",
    tue: "Di",
    wed: "Mi",
    thu: "Do",
    fri: "Fr",
    sat: "Sa",
  },
  gn = {
    january: "Enero",
    february: "Febrero",
    march: "Marzo",
    april: "Abril",
    maylong: "Mayo",
    june: "Junio",
    july: "Julio",
    august: "Agosto",
    september: "Septiembre",
    october: "Octubre",
    november: "Noviembre",
    december: "Diciembre",
    jan: "Ene",
    feb: "Feb",
    mar: "Mar",
    apr: "Abr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Ago",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dic",
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sun: "	Dom",
    mon: "	Lun",
    tue: "	Mar",
    wed: "	Mie",
    thu: "	Jue",
    fri: "	Vie",
    sat: "	Sab",
    res: "Recurso",
    dur: "Duración",
    comp: "% Compl.",
    completion: "Completado",
    startdate: "Inicio",
    planstartdate: "Inicio Planificado",
    cost: "Coste",
    enddate: "Fin",
    planenddate: "Fin Planificado",
    moreinfo: "Más Información",
    nodata: "No tasks found",
    notes: "Notas",
    format: "Formato",
    hour: "Hora",
    day: "Día",
    week: "Semana",
    month: "Mes",
    quarter: "Trimestre",
    hours: "Horas",
    days: "Días",
    weeks: "Semanas",
    months: "Meses",
    quarters: "Trimestres",
    hr: "h",
    dy: "Día",
    wk: "Sem.",
    mth: "Mes",
    qtr: "Trim.",
    hrs: "h",
    dys: "Días",
    wks: "Sem.",
    mths: "Meses",
    qtrs: "Trim.",
    tooltipLoading: "Cargando...",
  },
  mn = {
    format: "Format",
    hour: "Hour",
    day: "Day",
    week: "Week",
    month: "Month",
    quarter: "Quarter",
    hours: "Hours",
    days: "Days",
    weeks: "Weeks",
    months: "Months",
    quarters: "Quarters",
    hr: "Hr",
    dy: "Day",
    wk: "Wk",
    mth: "Mth",
    qtr: "Qtr",
    hrs: "Hrs",
    dys: "Days",
    wks: "Wks",
    mths: "Mths",
    qtrs: "Qtrs",
    res: "Resource",
    dur: "Duration",
    comp: "% Comp.",
    completion: "Completion",
    startdate: "Start Date",
    planstartdate: "Plan Start Date",
    enddate: "End Date",
    planenddate: "Plan End Date",
    cost: "Cost",
    moreinfo: "More Information",
    nodata: "No tasks found",
    notes: "Notes",
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    maylong: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    tooltipLoading: "Loading...",
  },
  vn = {
    format: "Näkymä",
    hour: "Tunti",
    day: "Päivä",
    week: "Viikko",
    month: "Kuukausi",
    quarter: "Kvartaali",
    hours: "Tunnit",
    days: "Päivät",
    weeks: "Viikot",
    months: "Kuukaudet",
    quarters: "Kvartaalit",
    hr: "t",
    dy: "pv",
    wk: "vk",
    mth: "kk",
    qtr: "Q",
    hrs: "t:t",
    dys: "pv:t",
    wks: "vk:t",
    mths: "kk:t",
    qtrs: "Kvartaalit",
    res: "Henkilö",
    dur: "Kesto",
    comp: "% Valm.",
    completion: "Valmius",
    startdate: "Alkupäivä",
    planstartdate: "Suunniteltu alkupäivä",
    enddate: "Päättymispäivä",
    planenddate: "Suunniteltu päättymispäivä",
    cost: "Kustannus",
    moreinfo: "Lisätieto",
    nodata: "Tehtäviä ei löydy",
    notes: "Muistiinpanot",
    january: "Tammikuu",
    february: "Helmikuu",
    march: "Maaliskuu",
    april: "Huhtikuu",
    maylong: "Toukokuu",
    june: "Kesäkuu",
    july: "Heinäkuu",
    august: "Elokuu",
    september: "Syyskuu",
    october: "Lokakuu",
    november: "Marraskuu",
    december: "Joulukuu",
    jan: "Tammi",
    feb: "Helmi",
    mar: "Maalis",
    apr: "Huhti",
    may: "Touko",
    jun: "Kesä",
    jul: "Heinä",
    aug: "Elo",
    sep: "Syys",
    oct: "Loka",
    nov: "Marras",
    dec: "Joulu",
    sunday: "Sunnuntai",
    monday: "Maanantai",
    tuesday: "Tiista",
    wednesday: "Keskiviikko",
    thursday: "Torstai",
    friday: "Perjantai",
    saturday: "Lauantai",
    sun: "Su",
    mon: "Ma",
    tue: "Ti",
    wed: "Ke",
    thu: "To",
    fri: "Pe",
    sat: "La",
    tooltipLoading: "Ladataan...",
  },
  yn = {
    january: "Janvier",
    february: "Février",
    march: "Mars",
    april: "Avril",
    maylong: "Mai",
    june: "Juin",
    july: "Juillet",
    august: "Août",
    september: "Septembre",
    october: "Octobre",
    november: "Novembre",
    december: "Décembre",
    jan: "Janv",
    feb: "Févr",
    mar: "Mars",
    apr: "Avr",
    may: "Mai",
    jun: "Juin",
    jul: "Juil",
    aug: "Août",
    sep: "Sept",
    oct: "Oct",
    nov: "Nov",
    dec: "Déc",
    sunday: "Dimanche",
    monday: "Lundi",
    tuesday: "Mardi",
    wednesday: "Mercredi",
    thursday: "Jeudi",
    friday: "Vendredi",
    saturday: "Samedi",
    sun: "Dim",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Jeu",
    fri: "Ven",
    sat: "Sam",
    res: "Ressource",
    dur: "Durée",
    comp: "% Term.",
    completion: "Terminé",
    startdate: "Début",
    planstartdate: "Plan Début",
    enddate: "Fin",
    planenddate: "Plan Fin",
    cost: "Cost",
    moreinfo: "Plus d'informations",
    nodata: "No tasks found",
    notes: "Notes",
    format: "Format",
    hour: "Heure",
    day: "Jour",
    week: "Semaine",
    month: "Mois",
    quarter: "Trimestre",
    hours: "Heures",
    days: "Jours",
    weeks: "Semaines",
    months: "Mois",
    quarters: "Trimestres",
    hr: "h",
    dy: "j",
    wk: "sem",
    mth: "mois",
    qtr: "tri",
    hrs: "h",
    dys: "j",
    wks: "sem",
    mths: "mois",
    qtrs: "tri",
  },
  pn = {
    format: "תבנית",
    hour: "שעה",
    day: "יום",
    week: "שבוע",
    month: "חודש",
    quarter: "רבעון",
    hours: "שעות",
    days: "ימים",
    weeks: "שבועות",
    months: "חודשים",
    quarters: "רבעונים",
    hr: "שעה",
    dy: "יום",
    wk: "שבוע",
    mth: "חודש",
    qtr: "רבעון",
    hrs: "שעות",
    dys: "ימים",
    wks: "שבועות",
    mths: "חודשים",
    qtrs: "רבעונים",
    res: "משאב",
    dur: "משך",
    comp: "% השלמה",
    completion: "השלמה",
    startdate: "תאריך התחלה",
    planstartdate: "תאריך התחלה מתוכנן",
    enddate: "תאריך סיום",
    planenddate: "תאריך סיום מתוכנן",
    cost: "עלות",
    moreinfo: "מידע נוסף",
    nodata: "לא נמצאו משימות",
    notes: "הערות",
    january: "ינואר",
    february: "פברואר",
    march: "מרץ",
    april: "אפריל",
    maylong: "מאי",
    june: "יוני",
    july: "יולי",
    august: "אוגוסט",
    september: "ספטמבר",
    october: "אוקטובר",
    november: "נובמבר",
    december: "דצמבר",
    jan: "ינו",
    feb: "פבר",
    mar: "מרץ",
    apr: "אפר",
    may: "מאי",
    jun: "יוני",
    jul: "יולי",
    aug: "אוג",
    sep: "ספט",
    oct: "אוק",
    nov: "נוב",
    dec: "דצמ",
    sunday: "יום ראשון",
    monday: "יום שני",
    tuesday: "יום שלישי",
    wednesday: "יום רביעי",
    thursday: "الخميس",
    friday: "الجمعة",
    saturday: "السبت",
    sun: "الأحد",
    mon: "الإثنين",
    tue: "الثلاثاء",
    wed: "الأربعاء",
    thu: "الخميس",
    fri: "الجمعة",
    sat: "السبت",
    tooltipLoading: "جارٍ التحميل...",
  },
  Dn = {
    format: "Formato",
    hour: "Ora",
    day: "Giorno",
    week: "Settimana",
    month: "Mese",
    quarter: "Trimestre",
    hours: "Ore",
    days: "Giorni",
    weeks: "Mesi",
    months: "Settimane",
    quarters: "Trimestri",
    hr: "Ora",
    dy: "G",
    wk: "Sett.",
    mth: "Mese",
    qtr: "Trim.",
    hrs: "Ora",
    dys: "GG",
    wks: "Sett.",
    mths: "Mesi",
    qtrs: "Trim.",
    res: "Risorsa",
    dur: "Durata",
    comp: "% Compl.",
    completion: "Completamento",
    startdate: "Data inizio",
    planstartdate: "Piano data inizio",
    enddate: "Data fine",
    planenddate: "Piano data fine",
    cost: "Costo",
    moreinfo: "Più informazioni",
    nodata: "Nessun task trovato",
    notes: "Note",
    january: "Gennaio",
    february: "Febbraio",
    march: "Marzo",
    april: "Aprile",
    maylong: "Maggio",
    june: "Giugno",
    july: "Luglio",
    august: "Agosto",
    september: "Settembre",
    october: "Ottobre",
    november: "Novembre",
    december: "Dicembre",
    jan: "Gen",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "Mag",
    jun: "Giu",
    jul: "Lug",
    aug: "Ago",
    sep: "Set",
    oct: "Ott",
    nov: "Nov",
    dec: "Dic",
    sunday: "Domenica",
    monday: "Lunedì",
    tuesday: "Martedì",
    wednesday: "Mercoledì",
    thursday: "Giovedì",
    friday: "Venerdì",
    saturday: "Sabato",
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Gio",
    fri: "Ven",
    sat: "Sab",
    tooltipLoading: "Caricamento...",
  },
  Tn = {
    format: "Formátum",
    hour: "Óra",
    day: "Nap",
    week: "Hét",
    month: "Hónap",
    quarter: "Negyedév ",
    hours: "Órák",
    days: "Nap",
    weeks: "Hét",
    months: "Hónap",
    quarters: "Negyedév",
    hr: "Ó",
    dy: "Nap",
    wk: "Hét",
    mth: "Hó",
    qtr: "NÉ",
    hrs: "Óra",
    dys: "Nap",
    wks: "Hét",
    mths: "Hó",
    qtrs: "NÉ",
    res: "Erőforrás",
    dur: "Időtartam",
    comp: "% Kész",
    completion: "Elkészült",
    startdate: "Kezdés",
    planstartdate: "Tervezett kezdés",
    enddate: "Befejezés",
    planenddate: "Tervezett befejezés",
    cost: "Költség",
    moreinfo: "További információ",
    nodata: "No tasks found",
    notes: "Jegyzetek",
    january: "Január",
    february: "Február",
    march: "Március",
    april: "Április",
    maylong: "Május",
    june: "Június",
    july: "Július",
    august: "Augusztus",
    september: "Szeptember",
    october: "Október",
    november: "November",
    december: "December",
    jan: "Jan",
    feb: "Feb",
    mar: "Már",
    apr: "Ápr",
    may: "Máj",
    jun: "Jún",
    jul: "Júl",
    aug: "Aug",
    sep: "Szep",
    oct: "Okt",
    nov: "Nov",
    dec: "Dec",
    sunday: "Vasárnap",
    monday: "Hétfő",
    tuesday: "Kedd",
    wednesday: "Szerda",
    thursday: "Csütörtök",
    friday: "Péntek",
    saturday: "Szombat",
    sun: "Vas",
    mon: "Hé",
    tue: "Ke",
    wed: "Sze",
    thu: "Csü",
    fri: "Pén",
    sat: "Szo",
    tooltipLoading: "Belöltés...",
  },
  kn = {
    format: "Format",
    hour: "Jam",
    day: "Hari",
    week: "Minggu",
    month: "Bulan",
    quarter: "Kuartal",
    hours: "Jam",
    days: "Hari",
    weeks: "Minggu",
    months: "Bulan",
    quarters: "Kuartal",
    hr: "Jam",
    dy: "Hari",
    wk: "Min",
    mth: "Bln",
    qtr: "Krtl",
    hrs: "Jam",
    dys: "Hari",
    wks: "Min",
    mths: "Bln",
    qtrs: "Krtl",
    res: "Sumber Daya",
    dur: "Durasi",
    comp: "% Penyelesaian",
    completion: "Penyelesaian",
    startdate: "Tanggal Mulai",
    planstartdate: "Perencanaan Tanggal Mulai",
    enddate: "Tanggal Akhir",
    planenddate: "Perencanaan Tanggal Akhir",
    cost: "Biaya",
    moreinfo: "Informasi Lebih Lanjut",
    nodata: "No tasks found",
    notes: "Catatan",
    january: "Januari",
    february: "Februari",
    march: "Maret",
    april: "April",
    maylong: "Mei",
    june: "Juni",
    july: "Juli",
    august: "Agustus",
    september: "September",
    october: "Oktober",
    november: "November",
    december: "Desember",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "Mei",
    jun: "Jun",
    jul: "Jul",
    aug: "Agu",
    sep: "Sep",
    oct: "Okt",
    nov: "Nov",
    dec: "Des",
    sunday: "Minggu",
    monday: "Senin",
    tuesday: "Selasa",
    wednesday: "Rabu",
    thursday: "Kamis",
    friday: "Jumat",
    saturday: "Sabtu",
    sun: "Min",
    mon: "Sen",
    tue: "Sel",
    wed: "Rab",
    thu: "Kam",
    fri: "Jum",
    sat: "Sab",
  },
  wn = {
    format: "タイムライン表示",
    hour: "時",
    day: "日",
    week: "週",
    month: "月",
    quarter: "四半期",
    hours: "時間",
    days: "日間",
    weeks: "週間",
    months: "月間",
    quarters: "四半期",
    hr: "時",
    dy: "日",
    wk: "週",
    mth: "月",
    qtr: "四",
    hrs: "時間",
    dys: "日間",
    wks: "週間",
    mths: "月間",
    qtrs: "四半期",
    res: "リソース",
    dur: "期間",
    comp: "進捗率",
    completion: "進捗率",
    startdate: "開始日",
    planstartdate: "予定開始日",
    enddate: "期日",
    planenddate: "予定期日",
    cost: "コスト",
    moreinfo: "詳細",
    nodata: "No tasks found",
    notes: "ノート",
    january: "1月",
    february: "2月",
    march: "3月",
    april: "4月",
    maylong: "5月",
    june: "6月",
    july: "7月",
    august: "8月",
    september: "9月",
    october: "10月",
    november: "11月",
    december: "12月",
    jan: "1月",
    feb: "2月",
    mar: "3月",
    apr: "4月",
    may: "5月",
    jun: "6月",
    jul: "7月",
    aug: "8月",
    sep: "9月",
    oct: "10月",
    nov: "11月",
    dec: "12月",
    sunday: "日曜日",
    monday: "月曜日",
    tuesday: "火曜日",
    wednesday: "水曜日",
    thursday: "木曜日",
    friday: "金曜日",
    saturday: "土曜日",
    sun: "日",
    mon: "月",
    tue: "火",
    wed: "水",
    thu: "木",
    fri: "金",
    sat: "土",
    tooltipLoading: "ローディング中...",
  },
  Sn = {
    format: "구분",
    hour: "시",
    day: "일",
    week: "주",
    month: "월",
    quarter: "분기",
    hours: "시",
    days: "일",
    weeks: "주",
    months: "월",
    quarters: "분기",
    hr: "시",
    dy: "일",
    wk: "주",
    mth: "월",
    qtr: "분기",
    hrs: "시",
    dys: "일",
    wks: "주",
    mths: "월",
    qtrs: "분기",
    res: "이름",
    dur: "기간",
    comp: "% ",
    completion: "완료",
    startdate: "시작일자",
    planstartdate: "계획 시작일자",
    enddate: "종료일자",
    planenddate: "계획 종료일자",
    cost: "비용",
    moreinfo: "더 많은 정보",
    nodata: "No tasks found",
    notes: "비고",
    january: "1월",
    february: "2월",
    march: "3월",
    april: "4월",
    maylong: "5월",
    june: "6월",
    july: "7월",
    august: "8월",
    september: "9월",
    october: "10월",
    november: "11월",
    december: "12월",
    jan: "1",
    feb: "2",
    mar: "3",
    apr: "4",
    may: "5",
    jun: "6",
    jul: "7",
    aug: "8",
    sep: "9",
    oct: "10",
    nov: "11",
    dec: "12",
    sunday: "일요일",
    monday: "월요일",
    tuesday: "화요일",
    wednesday: "수요일",
    thursday: "목요일",
    friday: "금요일",
    saturday: "토요일",
    sun: "일",
    mon: "월",
    tue: "화",
    wed: "수",
    thu: "목",
    fri: "금",
    sat: "토",
    tooltipLoading: "로딩중...",
  },
  bn = {
    format: "Format",
    hour: "Uur",
    day: "Dag",
    week: "Week",
    month: "Maand",
    quarter: "Kwartaal",
    hours: "Uren",
    days: "Dagen",
    weeks: "Weken",
    months: "Maanden",
    quarters: "Kwartalen",
    hr: "uur",
    dy: "dag",
    wk: "wk",
    mth: "mnd",
    qtr: "kw",
    hrs: "uren",
    dys: "dagen",
    wks: "weken",
    mths: "maanden",
    qtrs: "kwartalen",
    res: "Resource",
    dur: "Doorlooptijd",
    comp: "% gereed",
    completion: "Gereed",
    startdate: "Startdatum",
    planstartdate: "Geplande startdatum",
    enddate: "Einddatum",
    planenddate: "Geplande einddatum",
    cost: "Kosten",
    moreinfo: "Meer informatie",
    nodata: "Geen taken gevonden",
    notes: "Notities",
    january: "januari",
    february: "februari",
    march: "maart",
    april: "april",
    maylong: "mei",
    june: "juni",
    july: "juli",
    august: "augustus",
    september: "september",
    october: "oktober",
    november: "november",
    december: "december",
    jan: "jan",
    feb: "feb",
    mar: "mrt",
    apr: "apr",
    may: "mei",
    jun: "jun",
    jul: "jul",
    aug: "aug",
    sep: "sep",
    oct: "okt",
    nov: "nov",
    dec: "dec",
    sunday: "zondag",
    monday: "maandag",
    tuesday: "dinsdag",
    wednesday: "woensdag",
    thursday: "donderdag",
    friday: "vrijdag",
    saturday: "zaterdag",
    sun: "zo",
    mon: "ma",
    tue: "di",
    wed: "wo",
    thu: "do",
    fri: "vr",
    sat: "za",
  },
  Mn = {
    format: "Format",
    hour: "Godzina",
    day: "Dzień",
    week: "Tydzień",
    month: "Miesiąc",
    quarter: "Kwartał",
    hours: "Godziny",
    days: "Dni",
    weeks: "Tygodni",
    months: "Miesięcy",
    quarters: "Kwartały",
    hr: "godz.",
    dy: "d.",
    wk: "tydz.",
    mth: "mies.",
    qtr: "kw.",
    hrs: "godz.",
    dys: "d.",
    wks: "tyg.",
    mths: "mies.",
    qtrs: "kw.",
    res: "Zasób",
    dur: "Czas trwania",
    comp: "% Komp.",
    completion: "Ukończenie",
    startdate: "Data Startu",
    planstartdate: "Planowana Data Startu",
    enddate: "Data Zakończenia",
    planenddate: "Planowana Data Zakończenia",
    cost: "Koszt",
    moreinfo: "Więcej Inormacji",
    nodata: "Nie znaleziono zadań",
    notes: "Dodatkowe Informacje",
    january: "Styczeń",
    february: "Luty",
    march: "Marzec",
    april: "Kwiecień",
    maylong: "Maj",
    june: "Czerwiec",
    july: "Lipiec",
    august: "Sierpień",
    september: "Wrzesień",
    october: "Październik",
    november: "Listopad",
    december: "Grudzień",
    jan: "St",
    feb: "Lut",
    mar: "Mar",
    apr: "Kw",
    may: "Maj",
    jun: "Cz",
    jul: "Lip",
    aug: "Sier",
    sep: "Wrz",
    oct: "Paź",
    nov: "Lis",
    dec: "Gr",
    sunday: "Niedziela",
    monday: "Poniedziałek",
    tuesday: "Wtorek",
    wednesday: "Środa",
    thursday: "Czwartek",
    friday: "Piątek",
    saturday: "Sobota",
    sun: "Nd",
    mon: "Pon",
    tue: "Wt",
    wed: "Śr",
    thu: "Czw",
    fri: "Pt",
    sat: "So",
    tooltipLoading: "Ładowanie...",
  },
  Ln = {
    hours: "Horas",
    days: "Dias",
    weeks: "Weeks",
    months: "Months",
    quarters: "Quarters",
    format: "Formato",
    hour: "Hora",
    day: "Dia",
    week: "Semana",
    month: "Mês",
    quarter: "Trimestre",
    hr: "hr",
    dy: "dia",
    wk: "sem.",
    mth: "mês",
    qtr: "qtr",
    hrs: "hrs",
    dys: "dias",
    wks: "sem.",
    mths: "meses",
    qtrs: "qtrs",
    completion: "Terminado",
    comp: "% Completado",
    moreinfo: "Mais informações",
    nodata: "Sem atividades",
    notes: "Notas",
    res: "Responsável",
    dur: "Duração",
    startdate: "Data inicial",
    planstartdate: "Plan Data inicial",
    enddate: "Data final",
    planenddate: "Plan Data final",
    cost: "Custo",
    jan: "Jan",
    feb: "Fev",
    mar: "Mar",
    apr: "Abr",
    may: "Mai",
    jun: "Jun",
    jul: "Jul",
    aug: "Ago",
    sep: "Set",
    oct: "Out",
    nov: "Nov",
    dec: "Dez",
    january: "Janeiro",
    february: "Fevereiro",
    march: "Março",
    april: "Abril",
    maylong: "Maio",
    june: "Junho",
    july: "Julho",
    august: "Agosto",
    september: "Setembro",
    october: "Outubro",
    november: "Novembro",
    december: "Dezembro",
    sun: "Dom",
    mon: "Seg",
    tue: "Ter",
    wed: "Qua",
    thu: "Qui",
    fri: "Sex",
    sat: "Sab",
  },
  Cn = {
    january: "Январь",
    february: "Февраль",
    march: "Март",
    april: "Апрель",
    maylong: "Май",
    june: "Июнь",
    july: "Июль",
    august: "Август",
    september: "Сентябрь",
    october: "Октябрь",
    november: "Ноябрь",
    december: "Декабрь",
    jan: "Янв",
    feb: "Фев",
    mar: "Мар",
    apr: "Апр",
    may: "Май",
    jun: "Июн",
    jul: "Июл",
    aug: "Авг",
    sep: "Сен",
    oct: "Окт",
    nov: "Ноя",
    dec: "Дек",
    sunday: "Воскресенье",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sun: "	Вс",
    mon: "	Пн",
    tue: "	Вт",
    wed: "	Ср",
    thu: "	Чт",
    fri: "	Пт",
    sat: "	Сб",
    res: "Ресурс",
    dur: "Длительность",
    comp: "% выполнения",
    completion: "Выполнено",
    startdate: "Нач. дата",
    planstartdate: "Plan Нач. дата",
    enddate: "Кон. дата",
    planenddate: "Plan Кон. дата",
    cost: "Cost",
    moreinfo: "Детали",
    nodata: "No tasks found",
    notes: "Заметки",
    format: "Формат",
    hour: "Час",
    day: "День",
    week: "Неделя",
    month: "Месяц",
    quarter: "Кварт",
    hours: "Часов",
    days: "Дней",
    weeks: "Недель",
    months: "Месяцев",
    quarters: "Кварталов",
    hr: "ч.",
    dy: "дн.",
    wk: "нед.",
    mth: "мес.",
    qtr: "кв.",
    hrs: "ч.",
    dys: "дн.",
    wks: "нед.",
    mths: "мес.",
    qtrs: "кв.",
    tooltipLoading: "Загрузка...",
  },
  In = {
    format: "Filter",
    hour: "Timme",
    day: "Dag",
    week: "Vecka",
    month: "Månad",
    quarter: "Kvartal",
    hours: "Timmar",
    days: "Dagar",
    weeks: "Veckor",
    months: "Månader",
    quarters: "Kvartal",
    hr: "Timme",
    dy: "Dag",
    wk: "Vecka",
    mth: "Månad",
    qtr: "Q",
    hrs: "Timmar",
    dys: "Dagar",
    wks: "Veckor",
    mths: "Månader",
    qtrs: "Q",
    res: "Resurs",
    dur: "Tidsåtgång",
    comp: "% klart",
    completion: "Klart",
    startdate: "Startdatum",
    planstartdate: "Planerad startdatum",
    enddate: "Slutdatum",
    planenddate: "Planerad slutdatum",
    cost: "Kostnad",
    moreinfo: "Mer Information",
    nodata: "No tasks found",
    notes: "Notes",
    january: "januari",
    february: "februari",
    march: "mars",
    april: "april",
    maylong: "maj",
    june: "juni",
    july: "juli",
    august: "augusti",
    september: "september",
    october: "oktober",
    november: "november",
    december: "december",
    jan: "jan",
    feb: "feb",
    mar: "mar",
    apr: "apr",
    may: "maj",
    jun: "jun",
    jul: "jul",
    aug: "aug",
    sep: "sep",
    oct: "okt",
    nov: "nov",
    dec: "dec",
    sunday: "söndag",
    monday: "måndag",
    tuesday: "tisdag",
    wednesday: "onsdag",
    thursday: "torsdag",
    friday: "fredag",
    saturday: "lördag",
    sun: "sön",
    mon: "mån",
    tue: "tis",
    wed: "ons",
    thu: "tor",
    fri: "fre",
    sat: "lör",
  },
  Fn = {
    format: "Biçim",
    hour: "Saat",
    day: "Gün",
    week: "Hafta",
    month: "Ay",
    quarter: "Çeyrek Yıl",
    hours: "Saat",
    days: "Gün",
    weeks: "Hafta",
    months: "Ay",
    quarters: "Çeyrek Yıl",
    hr: "Saat",
    dy: "Gün",
    wk: "Hft",
    mth: "Ay",
    qtr: "Çyrk",
    hrs: "Saat",
    dys: "Gün",
    wks: "Hft",
    mths: "Ay",
    qtrs: "Çyrk",
    res: "Kaynak",
    dur: "Süre",
    comp: "% Tamamlanma.",
    completion: "Tamamlanma",
    startdate: "Başlangıç Tarihi",
    planstartdate: "Plan Başlama Tarihi",
    enddate: "Bitiş Tarihi",
    planenddate: "Plan Bitiş Tarihi",
    cost: "Tutar",
    moreinfo: "Daha Fazla Bilgi",
    nodata: "No tasks found",
    notes: "Notlar",
    january: "Ocak",
    february: "Şubat",
    march: "Mart",
    april: "Nisan",
    maylong: "Mayıs",
    june: "Haziran",
    july: "Temmuz",
    august: "Ağustos",
    september: "Eylül",
    october: "Ekim",
    november: "Kasım",
    december: "Aralık",
    jan: "Oca",
    feb: "Şub",
    mar: "Mar",
    apr: "Nis",
    may: "May",
    jun: "Haz",
    jul: "Tem",
    aug: "Ağu",
    sep: "Eyl",
    oct: "Eki",
    nov: "Kas",
    dec: "Ara",
    sunday: "Pazar",
    monday: "Pazartesi",
    tuesday: "Salı",
    wednesday: "Çarşamba",
    thursday: "Perşembe",
    friday: "Cuma",
    saturday: "Cumartesi",
    sun: "Paz",
    mon: "Pzt",
    tue: "Sal",
    wed: "Çrş",
    thu: "Prş",
    fri: "Cum",
    sat: "Cmt",
  },
  En = {
    january: "Січень",
    february: "Лютий",
    march: "Березень",
    april: "Квітень",
    maylong: "Травень",
    june: "Червень",
    july: "Липень",
    august: "Серпень",
    september: "Вересень",
    october: "Жовтень",
    november: "Листопад",
    december: "Грудень",
    jan: "Січ",
    feb: "Лют",
    mar: "Бер",
    apr: "Кві",
    may: "Тра",
    jun: "Чер",
    jul: "Лип",
    aug: "Сер",
    sep: "Вер",
    oct: "Жов",
    nov: "Лис",
    dec: "Гру",
    sunday: "Неділя",
    monday: "Понеділок",
    tuesday: "Вівторок",
    wednesday: "Середа",
    thursday: "Четвер",
    friday: "П'ятниця",
    saturday: "Субота",
    sun: " Нд",
    mon: "Пн",
    tue: " Вт",
    wed: "Ср",
    thu: " Чт",
    fri: " Пт",
    sat: " Сб",
    res: "Ресурс",
    dur: "Тривалість",
    comp: "% виконання",
    completion: "Виконано",
    startdate: "Поч. дата",
    planstartdate: "План Поч. дата",
    enddate: "Кін. дата",
    planenddate: "План Кін. дата",
    cost: "Вартість",
    moreinfo: "Деталі",
    nodata: "Нічого не знайдено",
    notes: "Нотатки",
    format: "Формат",
    hour: "Година",
    day: "День",
    week: "Тиждень",
    month: "Місяць",
    quarter: "Кварт",
    hours: "Годин",
    days: "Днів",
    weeks: "Тижнів",
    months: "Місяців",
    quarters: "Кварталів",
    hr: "г.",
    dy: "дн.",
    wk: "тиж.",
    mth: "міс.",
    qtr: "кв.",
    hrs: "г.",
    dys: "дн.",
    wks: "тиж.",
    mths: "міс.",
    qtrs: "кв.",
    tooltipLoading: "Загрузка...",
  },
  ce = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ar: un,
        cn: hn,
        cs: cn,
        de: fn,
        en: mn,
        es: gn,
        fi: vn,
        fr: yn,
        he: pn,
        hu: Tn,
        id: kn,
        it: Dn,
        ja: wn,
        ko: Sn,
        nl: bn,
        pl: Mn,
        pt: Ln,
        ru: Cn,
        scn: dn,
        sv: In,
        tr: Fn,
        ua: En,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ee = [
    "vShowRes",
    "vShowDur",
    "vShowComp",
    "vShowStartDate",
    "vShowEndDate",
    "vShowPlanStartDate",
    "vShowPlanEndDate",
    "vShowCost",
    "vAdditionalHeaders",
    "vShowAddEntries",
  ],
  He = {
    vShowRes: "res",
    vShowDur: "dur",
    vShowComp: "comp",
    vShowStartDate: "startdate",
    vShowEndDate: "enddate",
    vShowPlanStartDate: "planstartdate",
    vShowPlanEndDate: "planenddate",
    vShowCost: "cost",
    vShowAddEntries: "addentries",
  },
  Hn = function (t, s, n, e, a, o, i, d, h, f, u, D, g, p) {
    let m;
    if (t === "vShowRes") {
      m = r(n, "td", null, "gres");
      const T = it(e[s].getResource(), a, "resource", e[s].getResource(), g);
      r(m, "div", null, null, T),
        st(
          m,
          o,
          (l, v) => l.setResource(v.target.value),
          e,
          s,
          "res",
          p,
          "change",
        ),
        et(m, i, e[s], "res");
    }
    if (t === "vShowDur") {
      m = r(n, "td", null, "gdur");
      const T = it(e[s].getDuration(f, u[D]), a, "text", e[s].getDuration());
      r(m, "div", null, null, T),
        st(m, o, (l, v) => l.setDuration(v.target.value), e, s, "dur", p),
        et(m, i, e[s], "dur");
    }
    if (t === "vShowComp") {
      m = r(n, "td", null, "gcomp");
      const T = it(e[s].getCompStr(), a, "percentage", e[s].getCompVal());
      r(m, "div", null, null, T),
        st(
          m,
          o,
          (l, v) => {
            l.setComp(v.target.value), l.setCompVal(v.target.value);
          },
          e,
          s,
          "comp",
          p,
        ),
        et(m, i, e[s], "comp");
    }
    if (t === "vShowStartDate") {
      m = r(n, "td", null, "gstartdate");
      const T = q(e[s].getStartVar(), d, u[D]),
        k = it(T, a, "date", e[s].getStartVar());
      r(m, "div", null, null, k),
        st(m, o, (v, w) => v.setStart(w.target.value), e, s, "start", p),
        et(m, i, e[s], "start");
    }
    if (t === "vShowEndDate") {
      m = r(n, "td", null, "genddate");
      const T = q(e[s].getEndVar(), d, u[D]),
        k = it(T, a, "date", e[s].getEndVar());
      r(m, "div", null, null, k),
        st(m, o, (v, w) => v.setEnd(w.target.value), e, s, "end", p),
        et(m, i, e[s], "end");
    }
    if (t === "vShowPlanStartDate") {
      m = r(n, "td", null, "gplanstartdate");
      const T = e[s].getPlanStart() ? q(e[s].getPlanStart(), d, u[D]) : "",
        k = it(T, a, "date", e[s].getPlanStart());
      r(m, "div", null, null, k),
        st(
          m,
          o,
          (v, w) => v.setPlanStart(w.target.value),
          e,
          s,
          "planstart",
          p,
        ),
        et(m, i, e[s], "planstart");
    }
    if (t === "vShowPlanEndDate") {
      m = r(n, "td", null, "gplanenddate");
      const T = e[s].getPlanEnd() ? q(e[s].getPlanEnd(), d, u[D]) : "",
        k = it(T, a, "date", e[s].getPlanEnd());
      r(m, "div", null, null, k),
        st(m, o, (v, w) => v.setPlanEnd(w.target.value), e, s, "planend", p),
        et(m, i, e[s], "planend");
    }
    if (t === "vShowCost") {
      m = r(n, "td", null, "gcost");
      const T = it(e[s].getCost(), a, "cost");
      r(m, "div", null, null, T),
        st(m, o, (l, v) => l.setCost(v.target.value), e, s, "cost", p),
        et(m, i, e[s], "cost");
    }
    if (t === "vAdditionalHeaders" && h)
      for (const T in h) {
        const k = h[T],
          l = k.class ? k.class : `gadditional-${T}`,
          v = e[s].getDataObject();
        (m = r(n, "td", null, `gadditional ${l}`)),
          r(m, "div", null, null, v ? v[T] : ""),
          et(m, i, e[s], `additional_${T}`);
      }
    t === "vShowAddEntries" &&
      ((m = r(n, "td", null, "gaddentries")),
      r(m, "div", null, null, "<button>+</button>"),
      st(
        m,
        o,
        (l, v) => {
          Fe({ vParent: l.getParent() });
        },
        e,
        s,
        "addentries",
        p.bind(this),
      ),
      et(m, i, e[s], "addentries"));
  },
  Pn = function (t, s, n) {
    if (t === "vAdditionalHeaders" && n)
      for (const e in n) {
        const a = n[e],
          o = a.class ? a.class : `gadditional-${e}`;
        r(s, "td", null, `gspanning gadditional ${o}`, " ");
      }
    else {
      const e = He[t];
      r(s, "td", null, `gspanning g${e}`, " ");
    }
  },
  Nn = function (t, s, n, e, a, o) {
    let i;
    if (t === "vAdditionalHeaders" && a)
      for (const d in a) {
        const h = a[d],
          f = h.translate ? n[e][h.translate] : h.title,
          u = h.class ? h.class : `gadditional-${d}`;
        i = r(s, "td", null, `gtaskheading gadditional ${u}`, f);
      }
    else {
      const d = He[t];
      (i = r(s, "td", null, `gtaskheading g${d}`, n[e][d])),
        et(i, o, { hader: !0, column: t }, d);
    }
  },
  An = function (t, s, n, e, a, o) {
    let i = 1,
      d = !1,
      h = 4,
      f = Math.floor(this.getRowHeight() / 2);
    switch ((e < s && (f *= -1), a)) {
      case "SF":
        (h *= -1), t - 10 <= n && s != e && (d = !0), (i = -1);
        break;
      case "SS":
        t < n ? (h *= -1) : (h = n - t - 2 * h);
        break;
      case "FF":
        t <= n && (h = n - t + 2 * h), (i = -1);
        break;
      default:
        t + 10 >= n && s != e && (d = !0);
        break;
    }
    d
      ? (this.sLine(t, s, t + h, s, o),
        this.sLine(t + h, s, t + h, e - f, o),
        this.sLine(t + h, e - f, n - h * 2, e - f, o),
        this.sLine(n - h * 2, e - f, n - h * 2, e, o),
        this.sLine(n - h * 2, e, n - 1 * i, e, o))
      : s != e
        ? (this.sLine(t, s, t + h, s, o),
          this.sLine(t + h, s, t + h, e, o),
          this.sLine(t + h, e, n - 1 * i, e, o))
        : this.sLine(t, s, n - 1 * i, e, o);
    let u = this.sLine(
      n,
      e,
      n - 3 - (i < 0 ? 1 : 0),
      e - 3 - (i < 0 ? 1 : 0),
      o + "Arw",
    );
    (u.style.width = "0px"), (u.style.height = "0px");
  },
  jn = function (t = !1) {
    if (this.getShowDeps() == 1) {
      this.CalcTaskXY(), this.clearDependencies();
      let a = this.getList();
      for (let o = 0; o < a.length; o++) {
        let i = a[o].getDepend(),
          d = a[o].getDepType(),
          h = i.length;
        if (h > 0 && a[o].getVisible() == 1)
          for (let f = 0; f < h; f++) {
            let u = this.getArrayLocationByID(i[f]);
            if (u >= 0 && a[u].getGroup() != 2 && a[u].getVisible() == 1) {
              t &&
                console.info("init drawDependency ", a[u].getID(), new Date());
              var s = "gDepId" + a[u].getID() + " gDepNextId" + a[o].getID(),
                n = a[u].getDataObject(),
                e = a[o].getDataObject();
              n &&
                n.pID &&
                e &&
                e.pID &&
                (s += " gDepDataId" + n.pID + " gDepNextDataId" + e.pID),
                d[f] == "SS"
                  ? this.drawDependency(
                      a[u].getStartX() - 1,
                      a[u].getStartY(),
                      a[o].getStartX() - 1,
                      a[o].getStartY(),
                      "SS",
                      s + " gDepSS",
                    )
                  : d[f] == "FF"
                    ? this.drawDependency(
                        a[u].getEndX(),
                        a[u].getEndY(),
                        a[o].getEndX(),
                        a[o].getEndY(),
                        "FF",
                        s + " gDepFF",
                      )
                    : d[f] == "SF"
                      ? this.drawDependency(
                          a[u].getStartX() - 1,
                          a[u].getStartY(),
                          a[o].getEndX(),
                          a[o].getEndY(),
                          "SF",
                          s + " gDepSF",
                        )
                      : d[f] == "FS" &&
                        this.drawDependency(
                          a[u].getEndX(),
                          a[u].getEndY(),
                          a[o].getStartX() - 1,
                          a[o].getStartY(),
                          "FS",
                          s + " gDepFS",
                        );
            }
          }
      }
    }
    this.vTodayPx >= 0 &&
      this.sLine(
        this.vTodayPx,
        0,
        this.vTodayPx,
        this.getChartTable().offsetHeight - 1,
        "gCurDate",
      );
  },
  Rn = function () {
    (this.setOptions = function (t) {
      const s = Object.keys(t);
      for (let n = 0; n < s.length; n++) {
        const e = s[n],
          a = t[e];
        e === "vResources" || e === "vColumnOrder"
          ? this["set" + e.substr(1)](a)
          : a instanceof Array
            ? this["set" + e.substr(1)].apply(this, a)
            : this["set" + e.substr(1)](a);
      }
    }),
      (this.setUseFade = function (t) {
        this.vUseFade = t;
      }),
      (this.setUseMove = function (t) {
        this.vUseMove = t;
      }),
      (this.setUseRowHlt = function (t) {
        this.vUseRowHlt = t;
      }),
      (this.setUseToolTip = function (t) {
        this.vUseToolTip = t;
      }),
      (this.setUseSort = function (t) {
        this.vUseSort = t;
      }),
      (this.setUseSingleCell = function (t) {
        this.vUseSingleCell = t * 1;
      }),
      (this.setFormatArr = function () {
        let t = "hour day week month quarter";
        this.vFormatArr = new Array();
        for (let s = 0, n = 0; s < arguments.length; s++)
          if (
            t.indexOf(arguments[s].toLowerCase()) != -1 &&
            arguments[s].length > 1
          ) {
            this.vFormatArr[n++] = arguments[s].toLowerCase();
            let e = new RegExp("(?:^|s)" + arguments[s] + "(?!S)", "g");
            t = t.replace(e, "");
          }
      }),
      (this.setShowRes = function (t) {
        this.vShowRes = t;
      }),
      (this.setShowDur = function (t) {
        this.vShowDur = t;
      }),
      (this.setShowComp = function (t) {
        this.vShowComp = t;
      }),
      (this.setShowStartDate = function (t) {
        this.vShowStartDate = t;
      }),
      (this.setShowEndDate = function (t) {
        this.vShowEndDate = t;
      }),
      (this.setShowPlanStartDate = function (t) {
        this.vShowPlanStartDate = t;
      }),
      (this.setShowPlanEndDate = function (t) {
        this.vShowPlanEndDate = t;
      }),
      (this.setShowCost = function (t) {
        this.vShowCost = t;
      }),
      (this.setShowAddEntries = function (t) {
        this.vShowAddEntries = t;
      }),
      (this.setShowTaskInfoRes = function (t) {
        this.vShowTaskInfoRes = t;
      }),
      (this.setShowTaskInfoDur = function (t) {
        this.vShowTaskInfoDur = t;
      }),
      (this.setShowTaskInfoComp = function (t) {
        this.vShowTaskInfoComp = t;
      }),
      (this.setShowTaskInfoStartDate = function (t) {
        this.vShowTaskInfoStartDate = t;
      }),
      (this.setShowTaskInfoEndDate = function (t) {
        this.vShowTaskInfoEndDate = t;
      }),
      (this.setShowTaskInfoNotes = function (t) {
        this.vShowTaskInfoNotes = t;
      }),
      (this.setShowTaskInfoLink = function (t) {
        this.vShowTaskInfoLink = t;
      }),
      (this.setShowEndWeekDate = function (t) {
        this.vShowEndWeekDate = t;
      }),
      (this.setShowWeekends = function (t) {
        this.vShowWeekends = t;
      }),
      (this.setShowSelector = function () {
        let t = "top bottom";
        this.vShowSelector = new Array();
        for (let s = 0, n = 0; s < arguments.length; s++)
          if (
            t.indexOf(arguments[s].toLowerCase()) != -1 &&
            arguments[s].length > 1
          ) {
            this.vShowSelector[n++] = arguments[s].toLowerCase();
            let e = new RegExp("(?:^|s)" + arguments[s] + "(?!S)", "g");
            t = t.replace(e, "");
          }
      }),
      (this.setShowDeps = function (t) {
        this.vShowDeps = t;
      }),
      (this.setDateInputFormat = function (t) {
        this.vDateInputFormat = t;
      }),
      (this.setDateTaskTableDisplayFormat = function (t) {
        this.vDateTaskTableDisplayFormat = j(t);
      }),
      (this.setDateTaskDisplayFormat = function (t) {
        this.vDateTaskDisplayFormat = j(t);
      }),
      (this.setHourMajorDateDisplayFormat = function (t) {
        this.vHourMajorDateDisplayFormat = j(t);
      }),
      (this.setHourMinorDateDisplayFormat = function (t) {
        this.vHourMinorDateDisplayFormat = j(t);
      }),
      (this.setDayMajorDateDisplayFormat = function (t) {
        this.vDayMajorDateDisplayFormat = j(t);
      }),
      (this.setDayMinorDateDisplayFormat = function (t) {
        this.vDayMinorDateDisplayFormat = j(t);
      }),
      (this.setWeekMajorDateDisplayFormat = function (t) {
        this.vWeekMajorDateDisplayFormat = j(t);
      }),
      (this.setWeekMinorDateDisplayFormat = function (t) {
        this.vWeekMinorDateDisplayFormat = j(t);
      }),
      (this.setMonthMajorDateDisplayFormat = function (t) {
        this.vMonthMajorDateDisplayFormat = j(t);
      }),
      (this.setMonthMinorDateDisplayFormat = function (t) {
        this.vMonthMinorDateDisplayFormat = j(t);
      }),
      (this.setQuarterMajorDateDisplayFormat = function (t) {
        this.vQuarterMajorDateDisplayFormat = j(t);
      }),
      (this.setQuarterMinorDateDisplayFormat = function (t) {
        this.vQuarterMinorDateDisplayFormat = j(t);
      }),
      (this.setCaptionType = function (t) {
        this.vCaptionType = t;
      }),
      (this.setFormat = function (t) {
        (this.vFormat = t), this.Draw();
      }),
      (this.setWorkingDays = function (t) {
        this.vWorkingDays = t;
      }),
      (this.setUseHolidaySystem = function (t) {
        return this.setUseHolidaySystem(t);
      }),
      (this.setAutoAdjustTaskDates = function (t) {
        return this.setAutoAdjustTaskDates(t);
      }),
      (this.setCustomWorkingDays = function (t) {
        return this.setCustomWorkingDays(t);
      }),
      (this.setWorkingDaysToWeekdays = function () {
        return this.setWorkingDaysToWeekdays();
      }),
      (this.addHoliday = function (t) {
        return this.addHoliday(t);
      }),
      (this.removeHoliday = function (t) {
        return this.removeHoliday(t);
      }),
      (this.clearHolidays = function () {
        return this.clearHolidays();
      }),
      (this.getHolidays = function () {
        return this.getHolidays();
      }),
      (this.addItalianHolidays = function (t) {
        return this.addItalianHolidays(t);
      }),
      (this.setMinGpLen = function (t) {
        this.vMinGpLen = t;
      }),
      (this.setScrollTo = function (t) {
        this.vScrollTo = t;
      }),
      (this.setHourColWidth = function (t) {
        this.vHourColWidth = t;
      }),
      (this.setDayColWidth = function (t) {
        this.vDayColWidth = t;
      }),
      (this.setWeekColWidth = function (t) {
        this.vWeekColWidth = t;
      }),
      (this.setMonthColWidth = function (t) {
        this.vMonthColWidth = t;
      }),
      (this.setQuarterColWidth = function (t) {
        this.vQuarterColWidth = t;
      }),
      (this.setRowHeight = function (t) {
        this.vRowHeight = t;
      }),
      (this.setLang = function (t) {
        this.vLangs[t] && (this.vLang = t);
      }),
      (this.setChartBody = function (t) {
        (typeof HTMLDivElement != "function" || t instanceof HTMLDivElement) &&
          (this.vChartBody = t);
      }),
      (this.setChartHead = function (t) {
        (typeof HTMLDivElement != "function" || t instanceof HTMLDivElement) &&
          (this.vChartHead = t);
      }),
      (this.setListBody = function (t) {
        (typeof HTMLDivElement != "function" || t instanceof HTMLDivElement) &&
          (this.vListBody = t);
      }),
      (this.setChartTable = function (t) {
        (typeof HTMLTableElement != "function" ||
          t instanceof HTMLTableElement) &&
          (this.vChartTable = t);
      }),
      (this.setLines = function (t) {
        (typeof HTMLDivElement != "function" || t instanceof HTMLDivElement) &&
          (this.vLines = t);
      }),
      (this.setLineOptions = function (t) {
        this.vLineOptions = t;
      }),
      (this.setTimer = function (t) {
        this.vTimer = t * 1;
      }),
      (this.setTooltipDelay = function (t) {
        this.vTooltipDelay = t * 1;
      }),
      (this.setTooltipTemplate = function (t) {
        this.vTooltipTemplate = t;
      }),
      (this.setMinDate = function (t) {
        this.vMinDate = t;
      }),
      (this.setMaxDate = function (t) {
        this.vMaxDate = t;
      }),
      (this.addLang = function (t, s) {
        if (!this.vLangs[t]) {
          this.vLangs[t] = new Object();
          for (let n in this.vLangs.en)
            this.vLangs[t][n] = s[n]
              ? document.createTextNode(s[n]).data
              : this.vLangs.en[n];
        }
      }),
      (this.setCustomLang = function (t) {
        this.vLangs[this.vLang] = new Object();
        for (var s in this.vLangs.en)
          this.vLangs[this.vLang][s] = t[s]
            ? document.createTextNode(t[s]).data
            : this.vLangs.en[s];
      }),
      (this.setTotalHeight = function (t) {
        this.vTotalHeight = t;
      }),
      (this.setEvents = function (t) {
        this.vEvents = t;
      }),
      (this.setEventsChange = function (t) {
        this.vEventsChange = t;
      }),
      (this.setEventClickRow = function (t) {
        this.vEventClickRow = t;
      }),
      (this.setEventClickCollapse = function (t) {
        this.vEventClickCollapse = t;
      }),
      (this.setResources = function (t) {
        this.vResources = t;
      }),
      (this.setAdditionalHeaders = function (t) {
        this.vAdditionalHeaders = t;
      }),
      (this.setColumnOrder = function (t) {
        this.vColumnOrder = t;
      }),
      (this.setEditable = function (t) {
        this.vEditable = t;
      }),
      (this.setDebug = function (t) {
        this.vDebug = t;
      }),
      (this.getDivId = function () {
        return this.vDivId;
      }),
      (this.getUseFade = function () {
        return this.vUseFade;
      }),
      (this.getUseMove = function () {
        return this.vUseMove;
      }),
      (this.getUseRowHlt = function () {
        return this.vUseRowHlt;
      }),
      (this.getUseToolTip = function () {
        return this.vUseToolTip;
      }),
      (this.getUseSort = function () {
        return this.vUseSort;
      }),
      (this.getUseSingleCell = function () {
        return this.vUseSingleCell;
      }),
      (this.getFormatArr = function () {
        return this.vFormatArr;
      }),
      (this.getShowRes = function () {
        return this.vShowRes;
      }),
      (this.getShowDur = function () {
        return this.vShowDur;
      }),
      (this.getShowComp = function () {
        return this.vShowComp;
      }),
      (this.getShowStartDate = function () {
        return this.vShowStartDate;
      }),
      (this.getShowEndDate = function () {
        return this.vShowEndDate;
      }),
      (this.getShowPlanStartDate = function () {
        return this.vShowPlanStartDate;
      }),
      (this.getShowPlanEndDate = function () {
        return this.vShowPlanEndDate;
      }),
      (this.getShowCost = function () {
        return this.vShowCost;
      }),
      (this.getShowAddEntries = function () {
        return this.vShowAddEntries;
      }),
      (this.getShowTaskInfoRes = function () {
        return this.vShowTaskInfoRes;
      }),
      (this.getShowTaskInfoDur = function () {
        return this.vShowTaskInfoDur;
      }),
      (this.getShowTaskInfoComp = function () {
        return this.vShowTaskInfoComp;
      }),
      (this.getShowTaskInfoStartDate = function () {
        return this.vShowTaskInfoStartDate;
      }),
      (this.getShowTaskInfoEndDate = function () {
        return this.vShowTaskInfoEndDate;
      }),
      (this.getShowTaskInfoNotes = function () {
        return this.vShowTaskInfoNotes;
      }),
      (this.getShowTaskInfoLink = function () {
        return this.vShowTaskInfoLink;
      }),
      (this.getShowEndWeekDate = function () {
        return this.vShowEndWeekDate;
      }),
      (this.getShowWeekends = function () {
        return this.vShowWeekends;
      }),
      (this.getShowSelector = function () {
        return this.vShowSelector;
      }),
      (this.getShowDeps = function () {
        return this.vShowDeps;
      }),
      (this.getDateInputFormat = function () {
        return this.vDateInputFormat;
      }),
      (this.getDateTaskTableDisplayFormat = function () {
        return this.vDateTaskTableDisplayFormat;
      }),
      (this.getDateTaskDisplayFormat = function () {
        return this.vDateTaskDisplayFormat;
      }),
      (this.getHourMajorDateDisplayFormat = function () {
        return this.vHourMajorDateDisplayFormat;
      }),
      (this.getHourMinorDateDisplayFormat = function () {
        return this.vHourMinorDateDisplayFormat;
      }),
      (this.getDayMajorDateDisplayFormat = function () {
        return this.vDayMajorDateDisplayFormat;
      }),
      (this.getDayMinorDateDisplayFormat = function () {
        return this.vDayMinorDateDisplayFormat;
      }),
      (this.getWeekMajorDateDisplayFormat = function () {
        return this.vWeekMajorDateDisplayFormat;
      }),
      (this.getWeekMinorDateDisplayFormat = function () {
        return this.vWeekMinorDateDisplayFormat;
      }),
      (this.getMonthMajorDateDisplayFormat = function () {
        return this.vMonthMajorDateDisplayFormat;
      }),
      (this.getMonthMinorDateDisplayFormat = function () {
        return this.vMonthMinorDateDisplayFormat;
      }),
      (this.getQuarterMajorDateDisplayFormat = function () {
        return this.vQuarterMajorDateDisplayFormat;
      }),
      (this.getQuarterMinorDateDisplayFormat = function () {
        return this.vQuarterMinorDateDisplayFormat;
      }),
      (this.getCaptionType = function () {
        return this.vCaptionType;
      }),
      (this.getMinGpLen = function () {
        return this.vMinGpLen;
      }),
      (this.getScrollTo = function () {
        return this.vScrollTo;
      }),
      (this.getHourColWidth = function () {
        return this.vHourColWidth;
      }),
      (this.getDayColWidth = function () {
        return this.vDayColWidth;
      }),
      (this.getWeekColWidth = function () {
        return this.vWeekColWidth;
      }),
      (this.getMonthColWidth = function () {
        return this.vMonthColWidth;
      }),
      (this.getQuarterColWidth = function () {
        return this.vQuarterColWidth;
      }),
      (this.getRowHeight = function () {
        return this.vRowHeight;
      }),
      (this.getChartBody = function () {
        return this.vChartBody;
      }),
      (this.getChartHead = function () {
        return this.vChartHead;
      }),
      (this.getListBody = function () {
        return this.vListBody;
      }),
      (this.getChartTable = function () {
        return this.vChartTable;
      }),
      (this.getLines = function () {
        return this.vLines;
      }),
      (this.getTimer = function () {
        return this.vTimer;
      }),
      (this.getMinDate = function () {
        return this.vMinDate;
      }),
      (this.getMaxDate = function () {
        return this.vMaxDate;
      }),
      (this.getTooltipDelay = function () {
        return this.vTooltipDelay;
      }),
      (this.getList = function () {
        return this.vTaskList;
      }),
      (this.getEventsClickCell = function () {
        return this.vEvents;
      }),
      (this.getEventsChange = function () {
        return this.vEventsChange;
      }),
      (this.getEventClickRow = function () {
        return this.vEventClickRow;
      }),
      (this.getEventClickCollapse = function () {
        return this.vEventClickCollapse;
      }),
      (this.getResources = function () {
        return this.vResources;
      }),
      (this.getAdditionalHeaders = function () {
        return this.vAdditionalHeaders;
      }),
      (this.getColumnOrder = function () {
        return this.vColumnOrder || Ee;
      });
  },
  Wn = function (t, s) {
    (this.vDiv = t),
      (this.vFormat = s),
      (this.vDivId = null),
      (this.vUseFade = 1),
      (this.vUseMove = 1),
      (this.vUseRowHlt = 1),
      (this.vUseToolTip = 1),
      (this.vUseSort = 1),
      (this.vUseSingleCell = 25e3),
      (this.vShowRes = 1),
      (this.vShowDur = 1),
      (this.vShowComp = 1),
      (this.vShowStartDate = 1),
      (this.vShowEndDate = 1),
      (this.vShowPlanStartDate = 0),
      (this.vShowPlanEndDate = 0),
      (this.vShowCost = 0),
      (this.vShowAddEntries = 0),
      (this.vShowEndWeekDate = 1),
      (this.vShowWeekends = 1),
      (this.vShowTaskInfoRes = 1),
      (this.vShowTaskInfoDur = 1),
      (this.vShowTaskInfoComp = 1),
      (this.vShowTaskInfoStartDate = 1),
      (this.vShowTaskInfoEndDate = 1),
      (this.vShowTaskInfoNotes = 1),
      (this.vShowTaskInfoLink = 0),
      (this.vShowDeps = 1),
      (this.vTotalHeight = void 0),
      (this.vWorkingDays = { 0: !0, 1: !0, 2: !0, 3: !0, 4: !0, 5: !0, 6: !0 }),
      (this.vHolidays = []),
      (this.vCustomWorkingDays = null),
      (this.vUseHolidaySystem = !1),
      (this.vAutoAdjustTaskDates = !1),
      (this.vEventClickCollapse = null),
      (this.vEventClickRow = null),
      (this.vEvents = {
        taskname: null,
        res: null,
        dur: null,
        comp: null,
        startdate: null,
        enddate: null,
        planstartdate: null,
        planenddate: null,
        cost: null,
        beforeDraw: null,
        afterDraw: null,
        beforeLineDraw: null,
        afterLineDraw: null,
        onLineDraw: null,
        onLineContainerHover: null,
      }),
      (this.vEventsChange = {
        taskname: null,
        res: null,
        dur: null,
        comp: null,
        startdate: null,
        enddate: null,
        planstartdate: null,
        planenddate: null,
        cost: null,
        line: null,
      }),
      (this.vResources = null),
      (this.vAdditionalHeaders = {}),
      (this.vColumnOrder = Ee),
      (this.vEditable = !1),
      (this.vDebug = !1),
      (this.vShowSelector = new Array("top")),
      (this.vDateInputFormat = "yyyy-mm-dd"),
      (this.vDateTaskTableDisplayFormat = j("dd/mm/yyyy")),
      (this.vDateTaskDisplayFormat = j("dd month yyyy")),
      (this.vHourMajorDateDisplayFormat = j("day dd month yyyy")),
      (this.vHourMinorDateDisplayFormat = j("HH")),
      (this.vDayMajorDateDisplayFormat = j("dd/mm/yyyy")),
      (this.vDayMinorDateDisplayFormat = j("dd")),
      (this.vWeekMajorDateDisplayFormat = j("yyyy")),
      (this.vWeekMinorDateDisplayFormat = j("dd/mm")),
      (this.vMonthMajorDateDisplayFormat = j("yyyy")),
      (this.vMonthMinorDateDisplayFormat = j("mon")),
      (this.vQuarterMajorDateDisplayFormat = j("yyyy")),
      (this.vQuarterMinorDateDisplayFormat = j("qq")),
      (this.vUseFullYear = j("dd/mm/yyyy")),
      this.vCaptionType,
      (this.vDepId = 1),
      (this.vTaskList = new Array()),
      (this.vFormatArr = new Array("hour", "day", "week", "month", "quarter")),
      (this.vProcessNeeded = !0),
      (this.vMinGpLen = 8),
      (this.vScrollTo = ""),
      (this.vHourColWidth = 18),
      (this.vDayColWidth = 18),
      (this.vWeekColWidth = 36),
      (this.vMonthColWidth = 36),
      (this.vQuarterColWidth = 18),
      (this.vRowHeight = 20),
      (this.vTodayPx = -1),
      (this.vLangs = ce),
      (this.vLang =
        navigator.language && navigator.language in ce
          ? navigator.language
          : "en"),
      (this.vChartBody = null),
      (this.vChartHead = null),
      (this.vListBody = null),
      (this.vChartTable = null),
      (this.vLines = null),
      (this.vTimer = 20),
      (this.vTooltipDelay = 1500),
      (this.vTooltipTemplate = null),
      (this.vMinDate = null),
      (this.vMaxDate = null),
      (this.includeGetSet = Rn.bind(this)),
      this.includeGetSet(),
      (this.mouseOver = Ue),
      (this.mouseOut = Oe),
      (this.addListener = G.bind(this)),
      (this.removeListener = _e.bind(this)),
      (this.createTaskInfo = tn),
      (this.AddTaskItem = function (n) {
        return en.call(this, n);
      }.bind(this)),
      (this.AddTaskItemObject = Fe),
      (this.RemoveTaskItem = nn),
      (this.ClearTasks = sn),
      (this.getXMLProject = rn),
      (this.getXMLTask = ln),
      (this.CalcTaskXY = Xe.bind(this)),
      (this.sLine = Ge.bind(this)),
      (this.drawDependency = An.bind(this)),
      (this.DrawDependencies = jn.bind(this)),
      (this.getArrayLocationByID = Ke.bind(this)),
      (this.drawSelector = $e.bind(this)),
      (this.printChart = ze.bind(this)),
      (this.getMonthDaysArray = function (n) {
        return Ae(n);
      }),
      (this.setUseHolidaySystem = function (n) {
        return (this.vUseHolidaySystem = n), this;
      }),
      (this.setAutoAdjustTaskDates = function (n) {
        return (this.vAutoAdjustTaskDates = n), this;
      }),
      (this.setCustomWorkingDays = function (n) {
        return (this.vCustomWorkingDays = n), this;
      }),
      (this.setWorkingDaysToWeekdays = function () {
        return (this.vCustomWorkingDays = xe), this;
      }),
      (this.addHoliday = function (n) {
        return (
          this.vHolidays || (this.vHolidays = []), this.vHolidays.push(n), this
        );
      }),
      (this.removeHoliday = function (n) {
        return (
          this.vHolidays &&
            (this.vHolidays = this.vHolidays.filter((e) => e.id !== n)),
          this
        );
      }),
      (this.clearHolidays = function () {
        return (this.vHolidays = []), this;
      }),
      (this.getHolidays = function () {
        return this.vHolidays || [];
      }),
      (this.addItalianHolidays = function (n) {
        return (
          [
            {
              id: "capodanno",
              name: "Capodanno",
              startDate: new Date(n, 0, 1),
              endDate: new Date(n, 0, 1),
              recurring: !0,
            },
            {
              id: "epifania",
              name: "Epifania",
              startDate: new Date(n, 0, 6),
              endDate: new Date(n, 0, 6),
              recurring: !0,
            },
            {
              id: "festa-liberazione",
              name: "Festa della Liberazione",
              startDate: new Date(n, 3, 25),
              endDate: new Date(n, 3, 25),
              recurring: !0,
            },
            {
              id: "festa-lavoro",
              name: "Festa del Lavoro",
              startDate: new Date(n, 4, 1),
              endDate: new Date(n, 4, 1),
              recurring: !0,
            },
            {
              id: "festa-repubblica",
              name: "Festa della Repubblica",
              startDate: new Date(n, 5, 2),
              endDate: new Date(n, 5, 2),
              recurring: !0,
            },
            {
              id: "ferragosto",
              name: "Ferragosto",
              startDate: new Date(n, 7, 15),
              endDate: new Date(n, 7, 15),
              recurring: !0,
            },
            {
              id: "ognissanti",
              name: "Ognissanti",
              startDate: new Date(n, 10, 1),
              endDate: new Date(n, 10, 1),
              recurring: !0,
            },
            {
              id: "immacolata",
              name: "Immacolata Concezione",
              startDate: new Date(n, 11, 8),
              endDate: new Date(n, 11, 8),
              recurring: !0,
            },
            {
              id: "natale",
              name: "Natale",
              startDate: new Date(n, 11, 25),
              endDate: new Date(n, 11, 25),
              recurring: !0,
            },
            {
              id: "santo-stefano",
              name: "Santo Stefano",
              startDate: new Date(n, 11, 26),
              endDate: new Date(n, 11, 26),
              recurring: !0,
            },
          ].forEach((a) => this.addHoliday(a)),
          this
        );
      }),
      (this.clearDependencies = function () {
        let n = this.getLines();
        for (
          this.vEventsChange.line &&
          typeof this.vEventsChange.line == "function" &&
          (this.removeListener("click", this.vEventsChange.line, n),
          this.addListener("click", this.vEventsChange.line, n));
          n.hasChildNodes();

        )
          n.removeChild(n.firstChild);
        this.vDepId = 1;
      }),
      (this.drawListHead = function (n) {
        let e = r(
          n,
          "div",
          this.vDivId + "glisthead",
          "glistlbl gcontainercol",
        );
        const a = e;
        this.setListBody(e);
        let o = r(e, "table", null, "gtasktableh"),
          i = r(o, "tbody"),
          d = r(i, "tr");
        return (
          r(d, "td", null, "gtasklist", " "),
          r(
            d,
            "td",
            null,
            "gspanning gtaskname",
            null,
            null,
            null,
            null,
            this.getColumnOrder().length + 1,
          ).appendChild(this.drawSelector("top")),
          (d = r(i, "tr")),
          r(d, "td", null, "gtasklist", " "),
          r(d, "td", null, "gtaskname", " "),
          this.getColumnOrder().forEach((f) => {
            (this[f] == 1 || f === "vAdditionalHeaders") &&
              Nn(
                f,
                d,
                this.vLangs,
                this.vLang,
                this.vAdditionalHeaders,
                this.vEvents,
              );
          }),
          a
        );
      }),
      (this.drawListBody = function (n) {
        let e = r(n, "div", null, "gtasktableouterwrapper"),
          a = r(e, "div", null, "gtasktablewrapper");
        a.style.width = `calc(100% + ${De()}px)`;
        let o = r(a, "table", null, "gtasktable"),
          i = r(o, "tbody"),
          d = 0;
        for (let u = 0; u < this.vTaskList.length; u++) {
          let D;
          this.vTaskList[u].getGroup() == 1
            ? (D = "ggroupitem")
            : (D = "glineitem a");
          let g = this.vTaskList[u].getID(),
            p,
            m;
          if (
            !(
              this.vTaskList[u].getParItem() &&
              this.vTaskList[u].getParItem().getGroup() == 2
            ) ||
            this.vTaskList[u].getGroup() == 2
          ) {
            this.vTaskList[u].getVisible() == 0
              ? (p = r(
                  i,
                  "tr",
                  this.vDivId + "child_" + g,
                  "gname " + D,
                  null,
                  null,
                  null,
                  "none",
                ))
              : (p = r(i, "tr", this.vDivId + "child_" + g, "gname " + D)),
              this.vTaskList[u].setListChildRow(p),
              r(p, "td", null, "gtasklist", " ");
            const T = this.vEditable ? "gtaskname gtaskeditable" : "gtaskname";
            m = r(p, "td", null, T);
            let k = "";
            for (let S = 1; S < this.vTaskList[u].getLevel(); S++) k += "    ";
            const l = this.vTaskList[u],
              v = this.vEventClickRow,
              w = this.vEventClickCollapse;
            if (
              (G(
                "click",
                function (S) {
                  S.target.classList.contains("gfoldercollapse") === !1
                    ? v && typeof v == "function" && v(l)
                    : w && typeof w == "function" && w(l);
                },
                p,
              ),
              this.vTaskList[u].getGroup() == 1)
            ) {
              let S = r(m, "div", null, null, k),
                P = r(
                  S,
                  "span",
                  this.vDivId + "group_" + g,
                  "gfoldercollapse",
                  this.vTaskList[u].getOpen() == 1 ? "-" : "+",
                );
              this.vTaskList[u].setGroupSpan(P), Ce(this, P, g);
              const F = document.createElement("span");
              (F.innerHTML = " " + this.vTaskList[u].getName()),
                S.appendChild(F);
              const y = (R, W) => R.setName(W.target.value);
              st(
                m,
                this.vEventsChange,
                y,
                this.vTaskList,
                u,
                "taskname",
                this.Draw.bind(this),
              ),
                et(S, this.vEvents, this.vTaskList[u], "taskname");
            } else {
              k += "    ";
              const S = it(this.vTaskList[u].getName(), this.vEditable, "text");
              r(m, "div", null, null, k + S);
              const P = (F, y) => F.setName(y.target.value);
              st(
                m,
                this.vEventsChange,
                P,
                this.vTaskList,
                u,
                "taskname",
                this.Draw.bind(this),
              ),
                et(m, this.vEvents, this.vTaskList[u], "taskname");
            }
            this.getColumnOrder().forEach((S) => {
              (this[S] == 1 || S === "vAdditionalHeaders") &&
                Hn(
                  S,
                  u,
                  p,
                  this.vTaskList,
                  this.vEditable,
                  this.vEventsChange,
                  this.vEvents,
                  this.vDateTaskTableDisplayFormat,
                  this.vAdditionalHeaders,
                  this.vFormat,
                  this.vLangs,
                  this.vLang,
                  this.vResources,
                  this.Draw.bind(this),
                );
            }),
              d++;
          }
        }
        if (this.vTaskList.length == 0) {
          let u = this.getColumnOrder().filter(
              (m) => this[m] == 1 || m === "vAdditionalHeaders",
            ).length,
            D = r(i, "tr", this.vDivId + "child_", "gname "),
            g = r(D, "td", null, "gtasknolist", "", null, null, null, u),
            p = document.createDocumentFragment();
          r(
            p,
            "div",
            null,
            "gtasknolist-label",
            this.vLangs[this.vLang].nodata + ".",
          ),
            g.appendChild(p);
        }
        let h = r(i, "tr");
        return (
          r(h, "td", null, "gtasklist", " "),
          r(h, "td", null, "gspanning gtaskname").appendChild(
            this.drawSelector("bottom"),
          ),
          this.getColumnOrder().forEach((u) => {
            (this[u] == 1 || u === "vAdditionalHeaders") &&
              Pn(u, h, this.vAdditionalHeaders);
          }),
          { vNumRows: d, vTmpContentTabWrapper: a }
        );
      }),
      (this.drawChartHead = function (n, e, a, o) {
        let i = document.createDocumentFragment(),
          d = r(
            i,
            "div",
            this.vDivId + "gcharthead",
            "gchartlbl gcontainercol",
          );
        const h = d;
        this.setChartHead(d);
        let f = r(d, "table", this.vDivId + "chartTableh", "gcharttableh"),
          u = r(f, "tbody"),
          D = r(u, "tr"),
          g = new Date();
        g.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
          this.vFormat == "hour" ? g.setHours(n.getHours()) : g.setHours(0),
          g.setMinutes(0),
          g.setSeconds(0),
          g.setMilliseconds(0);
        let p = 1;
        for (; g.getTime() <= e.getTime(); ) {
          let v = "gmajorheading",
            w = "";
          if (this.vFormat == "day") {
            let S = 7;
            this.vShowWeekends || ((v += " headweekends"), (S = 5));
            let P = r(D, "td", null, v, null, null, null, null, S);
            (w += q(
              g,
              this.vDayMajorDateDisplayFormat,
              this.vLangs[this.vLang],
            )),
              g.setDate(g.getDate() + 6),
              this.vShowEndWeekDate == 1 &&
                (w +=
                  " - " +
                  q(
                    g,
                    this.vDayMajorDateDisplayFormat,
                    this.vLangs[this.vLang],
                  )),
              r(P, "div", null, null, w, a * S),
              g.setDate(g.getDate() + 1);
          } else if (this.vFormat == "week") {
            const S = r(D, "td", null, v, null, a);
            r(
              S,
              "div",
              null,
              null,
              q(g, this.vWeekMajorDateDisplayFormat, this.vLangs[this.vLang]),
              a,
            ),
              g.setDate(g.getDate() + 7);
          } else if (this.vFormat == "month") {
            (p = 12 - g.getMonth()),
              g.getFullYear() == e.getFullYear() && (p -= 11 - e.getMonth());
            const S = r(D, "td", null, v, null, null, null, null, p);
            r(
              S,
              "div",
              null,
              null,
              q(g, this.vMonthMajorDateDisplayFormat, this.vLangs[this.vLang]),
              a * p,
            ),
              g.setFullYear(g.getFullYear() + 1, 0, 1);
          } else if (this.vFormat == "quarter") {
            (p = 4 - Math.floor(g.getMonth() / 3)),
              g.getFullYear() == e.getFullYear() &&
                (p -= 3 - Math.floor(e.getMonth() / 3));
            const S = r(D, "td", null, v, null, null, null, null, p);
            r(
              S,
              "div",
              null,
              null,
              q(
                g,
                this.vQuarterMajorDateDisplayFormat,
                this.vLangs[this.vLang],
              ),
              a * p,
            ),
              g.setFullYear(g.getFullYear() + 1, 0, 1);
          } else if (this.vFormat == "hour") {
            (p = 24 - g.getHours()),
              g.getFullYear() == e.getFullYear() &&
                g.getMonth() == e.getMonth() &&
                g.getDate() == e.getDate() &&
                (p -= 23 - e.getHours());
            const S = r(D, "td", null, v, null, null, null, null, p);
            r(
              S,
              "div",
              null,
              null,
              q(g, this.vHourMajorDateDisplayFormat, this.vLangs[this.vLang]),
              a * p,
            ),
              g.setHours(0),
              g.setDate(g.getDate() + 1);
          }
        }
        (D = r(u, "tr", null, "footerdays")),
          g.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
          this.vFormat == "hour" && g.setHours(n.getHours());
        let m = 0;
        for (; g.getTime() <= e.getTime(); ) {
          let v = "gminorheading";
          if (this.vFormat == "day") {
            if (g.getDay() % 6 == 0) {
              if (!this.vShowWeekends) {
                g.setDate(g.getDate() + 1);
                continue;
              }
              v += "wkend";
            }
            if (g <= e) {
              const w = r(D, "td", null, v),
                S = g.getFullYear(),
                P = String(g.getMonth() + 1).padStart(2, "0"),
                F = String(g.getDate()).padStart(2, "0");
              w.setAttribute("data-header-date", `${S}-${P}-${F}`),
                w.setAttribute("data-header-col", m.toString()),
                r(
                  w,
                  "div",
                  null,
                  null,
                  q(
                    g,
                    this.vDayMinorDateDisplayFormat,
                    this.vLangs[this.vLang],
                  ),
                  a,
                ),
                m++;
            }
            g.setDate(g.getDate() + 1);
          } else if (this.vFormat == "week") {
            if (g <= e) {
              const w = r(D, "td", null, v);
              r(
                w,
                "div",
                null,
                null,
                q(g, this.vWeekMinorDateDisplayFormat, this.vLangs[this.vLang]),
                a,
              ),
                m++;
            }
            g.setDate(g.getDate() + 7);
          } else if (this.vFormat == "month") {
            if (g <= e) {
              const w = r(D, "td", null, v);
              r(
                w,
                "div",
                null,
                null,
                q(
                  g,
                  this.vMonthMinorDateDisplayFormat,
                  this.vLangs[this.vLang],
                ),
                a,
              ),
                m++;
            }
            for (g.setDate(g.getDate() + 1); g.getDate() > 1; )
              g.setDate(g.getDate() + 1);
          } else if (this.vFormat == "quarter") {
            if (g <= e) {
              const w = r(D, "td", null, v);
              r(
                w,
                "div",
                null,
                null,
                q(
                  g,
                  this.vQuarterMinorDateDisplayFormat,
                  this.vLangs[this.vLang],
                ),
                a,
              ),
                m++;
            }
            for (g.setDate(g.getDate() + 81); g.getDate() > 1; )
              g.setDate(g.getDate() + 1);
          } else if (this.vFormat == "hour") {
            for (let w = g.getHours(); w < 24; w++)
              if ((g.setHours(w), g <= e)) {
                const S = r(D, "td", null, v);
                r(
                  S,
                  "div",
                  null,
                  null,
                  q(
                    g,
                    this.vHourMinorDateDisplayFormat,
                    this.vLangs[this.vLang],
                  ),
                  a,
                ),
                  m++;
              }
            g.setHours(0), g.setDate(g.getDate() + 1);
          }
        }
        const T = D;
        let k = m * (a + 3) + 1;
        this.vFormat === "day" && (k += 2), (f.style.width = k + "px");
        let l = !1;
        return (
          this.vUseSingleCell !== 0 && this.vUseSingleCell < m * o && (l = !0),
          r(d, "div", null, "rhscrpad", null, null, k + 1),
          (d = r(i, "div", null, "glabelfooter")),
          {
            gChartLbl: h,
            vTaskLeftPx: k,
            vSingleCell: l,
            vDateRow: T,
            vRightHeader: i,
            vNumCols: m,
          }
        );
      }),
      (this.drawCharBody = function (n, e, a, o, i, d, h, f, u, D) {
        let g = document.createDocumentFragment();
        const p = r(
          g,
          "div",
          this.vDivId + "gchartbody",
          "gchartgrid gcontainercol",
        );
        this.setChartBody(p);
        const m = r(
          p,
          "table",
          this.vDivId + "chartTable",
          "gcharttable",
          null,
          n,
        );
        this.setChartTable(m), r(p, "div", null, "rhscrpad", null, null, n + 1);
        const T = r(m, "tbody"),
          k = r(m, "tfoot");
        It([e, p], "scrollTop"),
          It([a, p], "scrollLeft"),
          It([e, o], "scrollLeft");
        let l = 0,
          v;
        for (
          this.vDebug &&
            ((v = new Date()), console.info("before tasks loop", v)),
            l = 0;
          l < this.vTaskList.length;
          l++
        ) {
          let S = this.vTaskList[l].getStart()
              ? this.vTaskList[l].getStart()
              : this.vTaskList[l].getPlanStart(),
            P = this.vTaskList[l].getEnd()
              ? this.vTaskList[l].getEnd()
              : this.vTaskList[l].getPlanEnd();
          const F = this.vUseHolidaySystem ? this.vCustomWorkingDays : null,
            y = this.vUseHolidaySystem ? this.vHolidays : null,
            R = lt(i, S, u, this.vFormat, this.vShowWeekends, F, y, !1),
            W = lt(S, P, u, this.vFormat, this.vShowWeekends, F, y, !0);
          let z, C;
          (z = this.vTaskList[l].getPlanStart()),
            (C = this.vTaskList[l].getPlanEnd());
          let x = 0,
            U = 0;
          z &&
            C &&
            ((x = lt(i, z, u, this.vFormat, this.vShowWeekends, F, y, !1)),
            (U = lt(z, C, u, this.vFormat, this.vShowWeekends, F, y, !0)));
          const N = this.vTaskList[l].getID();
          let J =
              this.vTaskList[l].getParItem() &&
              this.vTaskList[l].getParItem().getGroup() == 2,
            E = null,
            O = this.vTaskList[l],
            K = null,
            Y = l === 0 ? u : null;
          if (this.vTaskList[l].getMile() && !J) {
            let I = r(
              T,
              "tr",
              this.vDivId + "childrow_" + N,
              "gmileitem gmile" + this.vFormat,
              null,
              null,
              null,
              this.vTaskList[l].getVisible() == 0 ? "none" : null,
            );
            this.vTaskList[l].setChildRow(I),
              bt(this, this.vTaskList[l].getListChildRow(), I);
            const _ = r(
              I,
              "td",
              null,
              "gtaskcell gtaskcellmile",
              null,
              u,
              null,
              null,
              null,
            );
            (E = r(_, "div", null, "gtaskcelldiv", "  ")),
              (E = r(
                E,
                "div",
                this.vDivId + "bardiv_" + N,
                "gtaskbarcontainer",
                null,
                12,
                R + W - 6,
              )),
              this.vTaskList[l].setBarDiv(E);
            let A = r(
              E,
              "div",
              this.vDivId + "taskbar_" + N,
              this.vTaskList[l].getClass(),
              null,
              12,
            );
            this.vTaskList[l].setTaskDiv(A),
              this.vTaskList[l].getCompVal() < 100
                ? A.appendChild(document.createTextNode("◊"))
                : ((A = r(A, "div", null, "gmilediamond")),
                  r(A, "div", null, "gmdtop"),
                  r(A, "div", null, "gmdbottom")),
              (K = "gmilecaption"),
              !h && !J && this.drawColsChart(f, I, Y, i, d);
          } else {
            let I = W;
            if (this.vTaskList[l].getGroup()) {
              (I =
                I > this.vMinGpLen && I < this.vMinGpLen * 2
                  ? this.vMinGpLen * 2
                  : I),
                (I = I < this.vMinGpLen ? this.vMinGpLen : I);
              const _ = r(
                T,
                "tr",
                this.vDivId + "childrow_" + N,
                (this.vTaskList[l].getGroup() == 2
                  ? "glineitem gitem"
                  : "ggroupitem ggroup") + this.vFormat,
                null,
                null,
                null,
                this.vTaskList[l].getVisible() == 0 ? "none" : null,
              );
              this.vTaskList[l].setChildRow(_),
                bt(this, this.vTaskList[l].getListChildRow(), _);
              const A = r(
                _,
                "td",
                null,
                "gtaskcell gtaskcellbar",
                null,
                u,
                null,
                null,
              );
              if (
                ((E = r(A, "div", null, "gtaskcelldiv", "  ")),
                this.vTaskList[l].setCellDiv(E),
                this.vTaskList[l].getGroup() == 1)
              ) {
                (E = r(
                  E,
                  "div",
                  this.vDivId + "bardiv_" + N,
                  "gtaskbarcontainer",
                  null,
                  I,
                  R,
                )),
                  this.vTaskList[l].setBarDiv(E);
                const V = r(
                  E,
                  "div",
                  this.vDivId + "taskbar_" + N,
                  this.vTaskList[l].getClass(),
                  null,
                  I,
                );
                this.vTaskList[l].setTaskDiv(V),
                  r(
                    V,
                    "div",
                    this.vDivId + "complete_" + N,
                    this.vTaskList[l].getClass() + "complete",
                    null,
                    this.vTaskList[l].getCompStr(),
                  ),
                  r(
                    E,
                    "div",
                    null,
                    this.vTaskList[l].getClass() + "endpointleft",
                  ),
                  I >= this.vMinGpLen * 2 &&
                    r(
                      E,
                      "div",
                      null,
                      this.vTaskList[l].getClass() + "endpointright",
                    ),
                  (K = "ggroupcaption");
              }
              !h && !J && this.drawColsChart(f, _, Y, i, d);
            } else {
              I = I <= 0 ? 1 : I;
              let _, A;
              if (J) _ = E = this.vTaskList[l].getParItem().getCellDiv();
              else {
                var w = "";
                this.vTaskList[l].getEnd() &&
                  this.vTaskList[l].getPlanEnd() &&
                  this.vTaskList[l].getStart() &&
                  this.vTaskList[l].getPlanStart() &&
                  (Date.parse(this.vTaskList[l].getEnd()) !==
                    Date.parse(this.vTaskList[l].getPlanEnd()) ||
                    Date.parse(this.vTaskList[l].getStart()) !==
                      Date.parse(this.vTaskList[l].getPlanStart())) &&
                  (w = "gitemdifferent "),
                  (A = r(
                    T,
                    "tr",
                    this.vDivId + "childrow_" + N,
                    `glineitem ${w}gitem` + this.vFormat,
                    null,
                    null,
                    null,
                    this.vTaskList[l].getVisible() == 0 ? "none" : null,
                  )),
                  this.vTaskList[l].setChildRow(A),
                  bt(this, this.vTaskList[l].getListChildRow(), A);
                const $ = r(
                  A,
                  "td",
                  null,
                  "gtaskcell gtaskcellcolorbar",
                  null,
                  Y,
                  null,
                  null,
                );
                _ = E = r($, "div", null, "gtaskcelldiv", "  ");
              }
              (E = r(
                E,
                "div",
                this.vDivId + "bardiv_" + N,
                "gtaskbarcontainer",
                null,
                I,
                R,
              )),
                this.vTaskList[l].setBarDiv(E);
              let V;
              if (
                (this.vTaskList[l].getStartVar() &&
                  ((V = r(
                    E,
                    "div",
                    this.vDivId + "taskbar_" + N,
                    this.vTaskList[l].getClass(),
                    null,
                    I,
                  )),
                  this.vTaskList[l].getBarText() &&
                    r(
                      V,
                      "span",
                      this.vDivId + "tasktextbar_" + N,
                      "textbar",
                      this.vTaskList[l].getBarText(),
                      this.vTaskList[l].getCompRestStr(),
                    ),
                  this.vTaskList[l].setTaskDiv(V)),
                x && (x != R || U != W || !this.vTaskList[l].getStartVar()))
              ) {
                const $ = r(
                    _,
                    "div",
                    this.vDivId + "bardiv_" + N,
                    "gtaskbarcontainer gplan",
                    null,
                    U,
                    x,
                  ),
                  ot = r(
                    $,
                    "div",
                    this.vDivId + "taskbar_" + N,
                    this.vTaskList[l].getPlanClass() + " gplan",
                    null,
                    U,
                  );
                this.vTaskList[l].setPlanTaskDiv(ot);
              }
              V &&
                r(
                  V,
                  "div",
                  this.vDivId + "complete_" + N,
                  this.vTaskList[l].getClass() + "complete",
                  null,
                  this.vTaskList[l].getCompStr(),
                ),
                J && (O = this.vTaskList[l].getParItem()),
                (!J ||
                  (J &&
                    this.vTaskList[l].getParItem().getEnd() ==
                      this.vTaskList[l].getEnd())) &&
                  (K = "gcaption"),
                !h && !J && A && this.drawColsChart(f, A, Y, i, d);
            }
          }
          if (this.getCaptionType() && K !== null) {
            let I;
            switch (this.getCaptionType()) {
              case "Caption":
                I = O.getCaption();
                break;
              case "Resource":
                I = O.getResource();
                break;
              case "Duration":
                I = O.getDuration(this.vFormat, this.vLangs[this.vLang]);
                break;
              case "Complete":
                I = O.getCompStr();
                break;
            }
            r(E, "div", null, K, I, 120, K == "gmilecaption" ? 12 : 0);
          }
          if (this.vTaskList[l].getTaskDiv() && E) {
            const I = r(
                E,
                "div",
                this.vDivId + "tt" + N,
                null,
                null,
                null,
                null,
                "none",
              ),
              { component: _, callback: A } = this.createTaskInfo(
                this.vTaskList[l],
                this.vTooltipTemplate,
              );
            I.appendChild(_), Ft(this, this.vTaskList[l].getTaskDiv(), I, A);
          }
          if (this.vTaskList[l].getPlanTaskDiv() && E) {
            const I = r(
                E,
                "div",
                this.vDivId + "tt" + N,
                null,
                null,
                null,
                null,
                "none",
              ),
              { component: _, callback: A } = this.createTaskInfo(
                this.vTaskList[l],
                this.vTooltipTemplate,
              );
            I.appendChild(_),
              Ft(this, this.vTaskList[l].getPlanTaskDiv(), I, A);
          }
        }
        if (h) {
          const S = r(k, "tr"),
            P = r(S, "td", null, null, null, "100%"),
            F = r(P, "table", null, "gcharttableh", null, "100%");
          r(F, "tbody").appendChild(D.cloneNode(!0));
        } else k.appendChild(D.cloneNode(!0));
        return { vRightTable: g };
      }),
      (this.drawColsChart = function (n, e, a, o = null, i = null) {
        let d = null;
        if (
          this.vShowWeekends !== !1 &&
          o &&
          i &&
          (this.vFormat == "day" || this.vFormat == "week")
        ) {
          let h = new Date(o.getTime()),
            f = new Date(),
            u = 36e5;
          this.vFormat == "day"
            ? (u *= 24)
            : this.vFormat == "week" && (u *= 168),
            (d = Math.floor(wt(h, f) / u) - 1);
        }
        for (let h = 1; h < n; h++) {
          const f = new Date(o.getTime());
          this.vFormat == "day"
            ? f.setDate(o.getDate() + h)
            : this.vFormat == "week"
              ? f.setDate(o.getDate() + h * 7)
              : this.vFormat == "month" && f.setMonth(o.getMonth() + h);
          let u = "gtaskcell gtaskcellcols";
          (this.vFormat == "week" || this.vFormat == "day") &&
            h === d + 1 &&
            (u = "gtaskcellcurrent"),
            this.vFormat == "day" &&
              o &&
              (this.vCustomWorkingDays && this.vHolidays
                ? We(f, this.vCustomWorkingDays, this.vHolidays) &&
                  (u = "gtaskcellholiday")
                : this.vShowWeekends !== !1 &&
                  f.getDay() % 6 == 0 &&
                  (u = "gtaskcellwkend"));
          const D = r(e, "td", null, u, "  ", a),
            g = f.getFullYear(),
            p = String(f.getMonth() + 1).padStart(2, "0"),
            m = String(f.getDate()).padStart(2, "0"),
            T = `${g}-${p}-${m}`;
          D.setAttribute("data-date", T),
            D.setAttribute("data-col-index", h.toString());
        }
      }),
      (this.Draw = function () {
        let n = new Date(),
          e = new Date(),
          a = 0,
          o;
        this.vEvents && this.vEvents.beforeDraw && this.vEvents.beforeDraw(),
          this.vDebug && ((o = new Date()), console.info("before draw", o)),
          this.vProcessNeeded &&
            xt(this.vTaskList, 0, -1, 1, 1, this.getUseSort(), this.vDebug),
          (this.vProcessNeeded = !1),
          (e = ge(
            this.vTaskList,
            this.vFormat,
            this.getMinDate() && le(this.getMinDate()),
          )),
          (n = me(
            this.vTaskList,
            this.vFormat,
            this.getMaxDate() && le(this.getMaxDate()),
          )),
          this.vFormat == "day"
            ? (a = this.vDayColWidth)
            : this.vFormat == "week"
              ? (a = this.vWeekColWidth)
              : this.vFormat == "month"
                ? (a = this.vMonthColWidth)
                : this.vFormat == "quarter"
                  ? (a = this.vQuarterColWidth)
                  : this.vFormat == "hour" && (a = this.vHourColWidth);
        let i = document.createDocumentFragment();
        const d = this.drawListHead(i),
          { vNumRows: h, vTmpContentTabWrapper: f } = this.drawListBody(i),
          {
            gChartLbl: u,
            vTaskLeftPx: D,
            vSingleCell: g,
            vRightHeader: p,
            vDateRow: m,
            vNumCols: T,
          } = this.drawChartHead(e, n, a, h),
          { vRightTable: k } = this.drawCharBody(D, f, u, d, e, n, g, T, a, m);
        if (this.vDebug) {
          const F = new Date();
          console.info("after tasks loop", F, F.getTime() - o.getTime());
        }
        for (; this.vDiv.hasChildNodes(); )
          this.vDiv.removeChild(this.vDiv.firstChild);
        const l = r(this.vDiv, "div", null, "gchartcontainer");
        l.style.height = this.vTotalHeight;
        let v = r(l, "div", null, "gmain gmainleft");
        v.appendChild(i);
        let w = r(l, "div", null, "gmain gmainright");
        w.appendChild(p),
          w.appendChild(k),
          l.appendChild(v),
          l.appendChild(w),
          r(l, "div", null, "ggridfooter");
        const S = r(
          this.getChartBody(),
          "div",
          this.vDivId + "Lines",
          "glinediv",
        );
        if (
          (this.vEvents.onLineContainerHover &&
            typeof this.vEvents.onLineContainerHover == "function" &&
            (G("mouseover", this.vEvents.onLineContainerHover, S),
            G("mouseout", this.vEvents.onLineContainerHover, S)),
          (S.style.visibility = "hidden"),
          this.setLines(S),
          Ie(this),
          this.vScrollTo != "")
        ) {
          let F = new Date(e.getTime()),
            y = 0;
          this.vScrollTo.substr && this.vScrollTo.substr(0, 2) == "px"
            ? (y = parseInt(this.vScrollTo.substr(2)))
            : (this.vScrollTo === "today"
                ? (F = new Date())
                : this.vScrollTo instanceof Date
                  ? (F = this.vScrollTo)
                  : (F = vt(this.vScrollTo, this.getDateInputFormat())),
              this.vFormat == "hour"
                ? F.setMinutes(0, 0, 0)
                : F.setHours(0, 0, 0, 0),
              (y = lt(e, F, a, this.vFormat, this.vShowWeekends) - 30)),
            (this.getChartBody().scrollLeft = y);
        }
        e.getTime() <= new Date().getTime() &&
        n.getTime() >= new Date().getTime()
          ? (this.vTodayPx = lt(
              e,
              new Date(),
              a,
              this.vFormat,
              this.vShowWeekends,
            ))
          : (this.vTodayPx = -1);
        let P;
        if (
          (this.vDebug &&
            ((P = new Date()), console.info("before DrawDependencies", P)),
          this.vEvents &&
            typeof this.vEvents.beforeLineDraw == "function" &&
            this.vEvents.beforeLineDraw(),
          this.DrawDependencies(this.vDebug),
          Je(this.vLineOptions),
          this.vEvents &&
            typeof this.vEvents.afterLineDraw == "function" &&
            this.vEvents.afterLineDraw(),
          this.vDebug)
        ) {
          const F = new Date();
          console.info("after DrawDependencies", F, F.getTime() - P.getTime());
        }
        this.drawComplete(e, a, o);
      }),
      (this.drawComplete = function (n, e, a) {
        if (this.vDebug) {
          const o = new Date();
          console.info("after draw", o, o.getTime() - a.getTime());
        }
        Le(this),
          (this.chartRowDateToX = function (o) {
            return lt(n, o, e, this.vFormat, this.vShowWeekends);
          }),
          this.vEvents && this.vEvents.afterDraw && this.vEvents.afterDraw();
      }),
      this.vDiv &&
        this.vDiv.nodeName &&
        this.vDiv.nodeName.toLowerCase() == "div" &&
        (this.vDivId = this.vDiv.id);
  };
var xn = function (t, s, n, e) {
  function a(o) {
    return o instanceof n
      ? o
      : new n(function (i) {
          i(o);
        });
  }
  return new (n || (n = Promise))(function (o, i) {
    function d(u) {
      try {
        f(e.next(u));
      } catch (D) {
        i(D);
      }
    }
    function h(u) {
      try {
        f(e.throw(u));
      } catch (D) {
        i(D);
      }
    }
    function f(u) {
      u.done ? o(u.value) : a(u.value).then(d, h);
    }
    f((e = e.apply(t, s || [])).next());
  });
};
const qn = function (t, s, n = !1, e = !0) {
    return xn(this, void 0, void 0, function* () {
      const a = yield be(t, !0, !0);
      let o;
      if (
        (n && ((o = new Date()), console.info("before jsonparse", o)),
        Yt(s, a),
        this.vDebug)
      ) {
        const i = new Date();
        console.info("after addJSONTask", i, i.getTime() - o.getTime());
      }
      return e && s.Draw(), a;
    });
  },
  Yn = function (t, s) {
    Yt(s, JSON.parse(t));
  },
  Yt = function (t, s) {
    for (let n = 0; n < s.length; n++) {
      let e,
        a,
        o,
        i,
        d,
        h,
        f,
        u,
        D = "",
        g = 0,
        p = "",
        m,
        T = 0,
        k,
        l,
        v = "",
        w = "",
        S = "",
        P,
        F = "",
        y = "";
      const R = {};
      for (let W in s[n]) {
        let z = W,
          C = s[n][z];
        switch (z.toLowerCase()) {
          case "pid":
          case "id":
            e = C;
            break;
          case "pname":
          case "name":
            a = C;
            break;
          case "pstart":
          case "start":
            o = C;
            break;
          case "pend":
          case "end":
            i = C;
            break;
          case "pplanstart":
          case "planstart":
            d = C;
            break;
          case "pplanend":
          case "planend":
            h = C;
            break;
          case "pclass":
          case "class":
            f = C;
            break;
          case "pplanclass":
          case "planclass":
            u = C;
            break;
          case "plink":
          case "link":
            D = C;
            break;
          case "pmile":
          case "mile":
            g = C;
            break;
          case "pres":
          case "res":
            p = C;
            break;
          case "pcomp":
          case "comp":
            m = C;
            break;
          case "pgroup":
          case "group":
            T = C;
            break;
          case "pparent":
          case "parent":
            k = C;
            break;
          case "popen":
          case "open":
            l = C;
            break;
          case "pdepend":
          case "depend":
            v = C;
            break;
          case "pcaption":
          case "caption":
            w = C;
            break;
          case "pnotes":
          case "notes":
            S = C;
            break;
          case "pcost":
          case "cost":
            P = C;
            break;
          case "duration":
          case "pduration":
            F = C;
            break;
          case "bartext":
          case "pbartext":
            y = C;
            break;
          default:
            R[z.toLowerCase()] = C;
        }
      }
      t.AddTaskItem(
        new yt(
          e,
          a,
          o,
          i,
          f,
          D,
          g,
          p,
          m,
          T,
          k,
          l,
          v,
          w,
          S,
          t,
          P,
          d,
          h,
          F,
          y,
          R,
          u,
        ),
      );
    }
  };
let M;
M || (M = {});
M.isIE = Tt;
M.TaskItem = yt;
M.GanttChart = Wn;
M.updateFlyingObj = we;
M.showToolTip = St;
M.stripIds = Ht;
M.stripUnwanted = Pt;
M.delayedHide = Nt;
M.hideToolTip = Te;
M.fadeToolTip = jt;
M.moveToolTip = Se;
M.getZoomFactor = At;
M.getOffset = lt;
M.getScrollPositions = pe;
M.processRows = xt;
M.sortTasks = Mt;
M.getMinDate = ge;
M.getMaxDate = me;
M.findObj = Et;
M.changeFormat = ye;
M.folder = Me;
M.hide = Rt;
M.show = Wt;
M.taskLink = Qe;
M.parseDateStr = vt;
M.formatDateStr = q;
M.parseDateFormatStr = j;
M.parseXML = an;
M.parseXMLString = on;
M.findXMLNode = ct;
M.getXMLNodeValue = L;
M.AddXMLTask = qt;
M.parseJSON = qn;
M.parseJSONString = Yn;
M.addJSONTask = Yt;
M.benchMark = qe;
M.getIsoWeek = Dt;
M.addListener = G;
M.addTooltipListeners = Ft;
M.addThisRowListeners = bt;
M.addFolderListeners = Ce;
M.addFormatListeners = mt;
M.addScrollListeners = Ie;
M.criticalPath = Ye;
M.hashString = ke;
const Bn = M,
  zn = M;
export { Bn as JSGantt, zn as default };
