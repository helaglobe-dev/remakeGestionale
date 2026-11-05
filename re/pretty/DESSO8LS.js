const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./PpFccnDH.js",
      "./92s3wAHG.js",
      "./customParseFormat.QMB5xCzE.css",
    ]),
) => i.map((i) => d[i]);
import {
  a0 as q,
  r as u,
  u as ge,
  E as we,
  G as ye,
  o as ke,
  a1 as he,
  e as Ce,
  x as be,
  z as p,
  B as i,
  a2 as U,
  C as d,
  a4 as j,
  L as c,
  n as Se,
  y as Te,
  M as J,
  N as K,
  O as Q,
  A as Ee,
  D as S,
} from "./CYsiv7Qj.js";
import { d as B, c as Ie } from "./PpFccnDH.js";
import { V as Me } from "./B_hTT4u_.js";
import { u as Be } from "./LKQL6vAN.js";
import { $ as X } from "./BvG7V8Ak.js";
import { V as Ae, a as N } from "./Bj0ZT2dB.js";
import { V as R } from "./Cv1q1CuH.js";
import { V as $e } from "./DCAzZvgN.js";
import { V as He, a as Fe } from "./B_W9U9Wp.js";
import { s as Z, a as Le, e as Ve, b as ee } from "./B5S3s6V6.js";
import { e as te } from "./DRW0ieNg.js";
import { i as Ne } from "./BIFx5Ami.js";
import "./92s3wAHG.js";
import "./BrCrqdgZ.js";
import "./CxBYvc7u.js";
import "./CCBmAzgz.js";
import "./D3DeQzvF.js";
import "./fKsYyVgl.js";
const Re = { class: "pl-10 pr-10" },
  Oe = { class: "divcenterpage" },
  _e = ["onClick", "onKeyup"],
  ae = "DD-MM-YYYY HH:mm",
  ut = {
    __name: "worksgant",
    setup(ze) {
      let g = null,
        A = null;
      (A = Promise.all([
        q(() => import("./BxhyeuW9.js"), [], import.meta.url).then((n) => {
          g = n.default || n.JSGantt;
        }),
        q(
          () => import("./PpFccnDH.js").then((n) => n.j),
          __vite__mapDeps([0, 1, 2]),
          import.meta.url,
        ),
      ])),
        B.locale("it");
      const $ = u(null),
        t = u(null),
        w = u([
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            new Date().getDate(),
          ),
          new Date(),
        ]),
        ne = u([
          { label: "Oggi", value: [new Date(), new Date()] },
          { label: "Mese corrente", value: [Z(new Date()), te(new Date())] },
          {
            label: "Mese precedente",
            value: [Z(ee(new Date(), 1)), te(ee(new Date(), 1))],
          },
          { label: "Anno corrente", value: [Le(new Date()), Ve(new Date())] },
        ]),
        O = Se();
      ge();
      const { status: Ge, signIn: Pe, signOut: xe, data: We } = we(),
        _ = ye("snackbar"),
        se = u(!0),
        T = u(!1),
        E = u([]),
        oe = u(!1),
        D = u(null),
        y = u([]);
      Be({
        title: "Carichi di lavoro",
        meta: [{ name: "description", content: "Carichi di lavoro" }],
      });
      function H() {
        oe.value = window.innerWidth <= 960;
      }
      const I = async () => {
        y.value = [];
        let n = w.value[0].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          e = w.value[1].toLocaleDateString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          s = { user: D.value, from: n, to: e };
        try {
          const { data: l, status: a } = await X(
            O.public.apiBaseurl + "task/tempooccupatoutente",
            { method: "POST", body: s },
          );
          l.forEach((o) => {
            y.value.push({
              budgetday: o.hours / 8,
              status: o.status,
              completed: o.status == "C",
              notes: o.note,
              userId: o.user_id,
              myBeginDate:
                new Date(o.startdate).toLocaleDateString("es-CL") + " 00:00",
              myEndDate:
                new Date(o.enddate).toLocaleDateString("es-CL") + " 00:00",
              rowClass: "task-warning",
              ganttBarConfig: {
                id: o.id,
                label: o.nomevisualizzato,
                immobile: !0,
              },
            });
          });
        } catch (l) {
          console.log(l);
          let a = JSON.parse(l.data).errors.title;
          console.log("catcherr", l.data),
            (_.value = { text: a, type: "danger", show: !0 });
          return;
        }
        z();
      };
      B.extend(Ie);
      async function le() {
        if (!$.value) {
          console.warn("ganttContainer not available");
          return;
        }
        if ((A && (await A), !g)) {
          console.error("JSGantt not loaded");
          return;
        }
        (t.value = new g.GanttChart($.value, "day")),
          t.value.setOptions({
            vAdditionalHeaders: { pBudgetday: { title: "Gg a Budget" } },
            vLang: "it",
            vFormatArr: ["day", "week", "month"],
          });
        try {
          t.value.setShowTaskInfoLink(1),
            t.value.setShowTaskInfoNotes(1),
            t.value.setShowTaskInfoStartDate(1),
            t.value.setShowTaskInfoEndDate(1),
            t.value.setShowTaskInfoDur(1),
            t.value.setShowTaskInfoComp(0),
            t.value.setShowTaskInfoRes(0),
            t.value.setShowRes(0),
            t.value.setShowDur(1),
            t.value.setShowComp(0),
            t.value.setShowStartDate(1),
            t.value.setShowEndDate(1),
            t.value.setUseToolTip(1),
            t.value.setUseFade(1),
            t.value.setUseMove(1),
            t.value.setUseRowHlt(1),
            t.value.setUseSort(0),
            t.value.setShowDeps(1),
            t.value.setDayColWidth(25),
            t.value.setRowHeight(25),
            t.value.setWeekColWidth(50),
            t.value.setMonthColWidth(50),
            typeof t.value.setTaskNameColWidth == "function"
              ? t.value.setTaskNameColWidth(320)
              : t.value.vTaskNameColWidth !== void 0 &&
                (t.value.vTaskNameColWidth = 320),
            typeof t.value.setDateInputFormat == "function" &&
              t.value.setDateInputFormat("dd/mm/yyyy"),
            typeof t.value.setDateDisplayFormat == "function" &&
              t.value.setDateDisplayFormat("dd/mm/yyyy"),
            typeof t.value.setDurationFormat == "function" &&
              t.value.setDurationFormat("days"),
            t.value.vFormat !== void 0 && (t.value.vFormat = "day"),
            t.value.vFormatArr !== void 0 &&
              (t.value.vFormatArr = ["Day", "Week", "Month"]);
          const n = t.value.Draw;
          t.value.Draw = function () {
            const e = n.call(this);
            return (
              setTimeout(() => {
                G();
              }, 200),
              e
            );
          };
        } catch (n) {
          console.warn(
            "Some gantt configuration methods are not available:",
            n,
          );
        }
        P();
      }
      function re(n) {
        const e = [],
          s = new Map();
        for (let l = 0; l < n.length; l++) s.set(n[l].ganttBarConfig.id, l + 1);
        for (let l = 0; l < n.length; l++) {
          const a = n[l],
            o = B(a.myBeginDate, ae),
            r = B(a.myEndDate, ae),
            k = (e.value || []).find(
              (b) => Number(b.id) === a.ganttBarConfig.id,
            );
          (new Date(
            a.myEndDate.substr(6, 4),
            a.myEndDate.substr(3, 2),
            a.myEndDate.substr(0, 2),
          ) -
            new Date(
              a.myBeginDate.substr(6, 4),
              a.myBeginDate.substr(3, 2),
              a.myBeginDate.substr(0, 2),
            )) /
            864e5;
          const v = a.notes,
            F = a.completed,
            M = a.status,
            h = a.ganttBarConfig.isParent || !1,
            C = a.ganttBarConfig.parentId || 0,
            L = (C > 0 && s.get(C)) || 0,
            V = r.diff(o, "day") || 1;
          let x = "",
            W = "";
          if (k && k.BillItemPrecedenceAsBlocked) {
            const b = k.BillItemPrecedenceAsBlocked.map((f) => {
              const De = Number(f.bill_item_blocker_id),
                Y = s.get(De),
                ve = f.ptype || "FS";
              return Y ? { pId: Y, pType: ve } : null;
            }).filter((f) => f);
            b.length > 0 &&
              ((x = b.map((f) => f.pId).join(",")),
              (W = b.map((f) => f.pType).join(",")));
          }
          const fe = new Date(o.year(), o.month(), o.date(), 12, 0, 0),
            me = new Date(r.year(), r.month(), r.date(), 12, 0, 0);
          e.push({
            pID: l + 1,
            pName:
              a.ganttBarConfig.label ||
              a.ganttBarConfig.articolo ||
              `Task ${l + 1}`,
            pStart: fe,
            pEnd: me,
            pDuration: V,
            pClass:
              M == "C" ? "gtaskgreen" : M == "P" ? "gtaskblue" : "gtaskorange",
            pLink: "",
            pMile: 0,
            pRes: "-",
            pComp: F ? 100 : 0,
            pGroup: h ? 1 : 0,
            pParent: L,
            pOpen: 1,
            pDepend: x,
            pDepType: W,
            pCaption: "",
            pNotes: v,
            pBudgetday: a.budgetday,
            originalId: a.ganttBarConfig.id,
          });
        }
        return e;
      }
      async function z() {
        if (((T.value = !1), !t.value || !y.value || !g)) {
          console.warn("Missing dependencies:", {
            ganttChart: !!t.value,
            rowBarList: !!y.value,
            JSGantt: !!g,
          });
          return;
        }
        (t.value.vTaskList = []), t.value.Draw();
        const n = re(y.value);
        for (const e of n)
          t.value.AddTaskItemObject({
            pID: e.pID,
            pName: e.pName,
            pStart: e.pStart,
            pEnd: e.pEnd,
            pDuration: e.pDuration,
            pClass: e.pClass,
            pLink: e.pLink,
            pMile: e.pMile,
            pRes: e.pRes,
            pComp: e.pComp,
            pGroup: e.pGroup,
            pParent: e.pParent,
            pOpen: e.pOpen,
            pDepend: e.pDepend,
            pDepType: e.pDepType,
            pCaption: e.pCaption,
            pNotes: e.pNotes,
            pBudgetday: e.pBudgetday,
            originalId: e.originalId,
          });
        if ((P(), t.value.vTaskList.length === 0)) {
          (document.getElementById("gantt-chart2").innerHTML = ""),
            (T.value = !0);
          return;
        }
        t.value.Draw(), G();
      }
      function G() {
        if (t.value)
          try {
            if (typeof t.value.setClickTask == "function")
              t.value.setClickTask(m);
            else if (typeof t.value.setEvents == "function")
              try {
                t.value.setEvents({
                  taskClick: m,
                  onTaskClick: m,
                  rowClick: m,
                  onClick: m,
                });
              } catch {}
            else
              typeof t.value.setEventsClickRow == "function" &&
                t.value.setEventsClickRow(m);
            t.value.vEventClickRow = m;
          } catch (n) {
            console.warn("Could not set click handler, using DOM fallback:", n);
          }
      }
      function m(...n) {
        n[0].getAllData();
      }
      function ie() {
        return {
          workingDaysMode: "weekdays",
          selectedItalianHolidays: [
            "natale",
            "stefano",
            "immacolata",
            "ferragosto",
            "capodanno",
            "epifania",
            "festa-liberazione",
            "festa-lavoro",
            "repubblica",
            "ognissanti",
          ],
          easterYears: [],
          customHolidays: [],
          easterEnabled: !0,
        };
      }
      function ue(n) {
        switch (n.workingDaysMode) {
          case "all":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !0,
              sunday: !0,
            };
          case "custom":
            const s = n.workingDays || [];
            return {
              sunday: s.includes(0),
              monday: s.includes(1),
              tuesday: s.includes(2),
              wednesday: s.includes(3),
              thursday: s.includes(4),
              friday: s.includes(5),
              saturday: s.includes(6),
            };
          case "weekdays":
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
          default:
            return {
              monday: !0,
              tuesday: !0,
              wednesday: !0,
              thursday: !0,
              friday: !0,
              saturday: !1,
              sunday: !1,
            };
        }
      }
      function de(n) {
        const e = n % 19,
          s = Math.floor(n / 100),
          l = n % 100,
          a = Math.floor(s / 4),
          o = s % 4,
          r = Math.floor((s + 8) / 25),
          k = Math.floor((s - r + 1) / 3),
          v = (19 * e + s - a - k + 15) % 30,
          F = Math.floor(l / 4),
          M = l % 4,
          h = (32 + 2 * o + 2 * F - v - M) % 7,
          C = Math.floor((e + 11 * v + 22 * h) / 451),
          L = Math.floor((v + h - 7 * C + 114) / 31),
          V = ((v + h - 7 * C + 114) % 31) + 1;
        return new Date(n, L - 1, V);
      }
      function P() {
        if (!t.value) return;
        const n = ie();
        t.value.setUseHolidaySystem(!0),
          typeof t.value.setAutoAdjustTaskDates == "function" &&
            t.value.setAutoAdjustTaskDates(!1);
        const e = ue(n);
        t.value.setCustomWorkingDays(e), t.value.clearHolidays();
        const s = new Date().getFullYear(),
          l = new Set([s, s - 1, s + 1]);
        n.easterYears?.length > 0 && n.easterYears.forEach((a) => l.add(a)),
          l.forEach((a) => {
            n.selectedItalianHolidays?.length > 0 &&
              n.selectedItalianHolidays.forEach((o) => {
                const r = ce(o, a);
                r && t.value.addHoliday(r);
              });
            {
              const o = de(a);
              t.value.addHoliday({
                id: `pasqua-${a}`,
                name: "Pasqua",
                startDate: o,
                endDate: o,
                recurring: !1,
              });
              const r = new Date(o.getTime() + 1440 * 60 * 1e3);
              t.value.addHoliday({
                id: `lunedi-angelo-${a}`,
                name: "Lunedì dell'Angelo",
                startDate: r,
                endDate: r,
                recurring: !1,
              });
            }
          }),
          n.customHolidays?.length > 0 &&
            n.customHolidays.forEach((a) => {
              a.date && ((a.startDate = a.date), (a.endDate = a.date));
              let o = new Date(a.startDate),
                r = new Date(a.endDate);
              o.setHours(0, 0, 0, 0),
                r.setHours(23, 59, 59, 999),
                t.value.addHoliday({
                  id: a.id || `custom-${Date.now()}-${Math.random()}`,
                  name: a.name,
                  startDate: o,
                  endDate: r,
                  recurring: a.recurring || !1,
                });
            });
      }
      function ce(n, e) {
        return (
          {
            capodanno: {
              id: `capodanno-${e}`,
              name: "Capodanno",
              startDate: new Date(e, 0, 1),
              endDate: new Date(e, 0, 1),
              recurring: !1,
            },
            epifania: {
              id: `epifania-${e}`,
              name: "Epifania",
              startDate: new Date(e, 0, 6),
              endDate: new Date(e, 0, 6),
              recurring: !1,
            },
            "festa-liberazione": {
              id: `festa-liberazione-${e}`,
              name: "Festa della Liberazione",
              startDate: new Date(e, 3, 25),
              endDate: new Date(e, 3, 25),
              recurring: !1,
            },
            "festa-lavoro": {
              id: `festa-lavoro-${e}`,
              name: "Festa del Lavoro",
              startDate: new Date(e, 4, 1),
              endDate: new Date(e, 4, 1),
              recurring: !1,
            },
            repubblica: {
              id: `repubblica-${e}`,
              name: "Festa della Repubblica",
              startDate: new Date(e, 5, 2),
              endDate: new Date(e, 5, 2),
              recurring: !1,
            },
            "festa-repubblica": {
              id: `festa-repubblica-${e}`,
              name: "Festa della Repubblica",
              startDate: new Date(e, 5, 2),
              endDate: new Date(e, 5, 2),
              recurring: !1,
            },
            ferragosto: {
              id: `ferragosto-${e}`,
              name: "Ferragosto",
              startDate: new Date(e, 7, 15),
              endDate: new Date(e, 7, 15),
              recurring: !1,
            },
            ognissanti: {
              id: `ognissanti-${e}`,
              name: "Ognissanti",
              startDate: new Date(e, 10, 1),
              endDate: new Date(e, 10, 1),
              recurring: !1,
            },
            immacolata: {
              id: `immacolata-${e}`,
              name: "Immacolata Concezione",
              startDate: new Date(e, 11, 8),
              endDate: new Date(e, 11, 8),
              recurring: !1,
            },
            natale: {
              id: `natale-${e}`,
              name: "Natale",
              startDate: new Date(e, 11, 25),
              endDate: new Date(e, 11, 25),
              recurring: !1,
            },
            stefano: {
              id: `stefano-${e}`,
              name: "Santo Stefano",
              startDate: new Date(e, 11, 26),
              endDate: new Date(e, 11, 26),
              recurring: !1,
            },
            "santo-stefano": {
              id: `santo-stefano-${e}`,
              name: "Santo Stefano",
              startDate: new Date(e, 11, 26),
              endDate: new Date(e, 11, 26),
              recurring: !1,
            },
          }[n] || null
        );
      }
      const pe = async () => {
        E.value = [];
        const { data: n } = await X(O.public.apiBaseurl + "user/list", {
          onRequest({ request: e, options: s }) {},
          onRequestError({ request: e, options: s, error: l }) {
            console.log("Errore nella request:", l);
          },
          onResponseError({ request: e, response: s, options: l }) {
            _.value = {
              text: "Errore caricamento utenti",
              type: "danger",
              show: !0,
            };
          },
          onResponse({ request: e, response: s, options: l }) {
            s._data.data.forEach((o) => {
              E.value.push({ id: o.id, name: o.firstname + " " + o.lastname });
            });
          },
        });
      };
      return (
        ke(async () => {
          H(),
            window.addEventListener("resize", H),
            await pe(),
            (D.value = E.value[0].id),
            he(async () => {
              await le(), z();
            }),
            await I();
        }),
        Ce(() => {
          window.removeEventListener("resize", H);
        }),
        (n, e) => (
          Te(),
          be("div", Re, [
            p("div", Oe, [
              e[11] || (e[11] = p("br", null, null, -1)),
              e[12] ||
                (e[12] = p(
                  "h3",
                  {
                    class: "pb-4 pageh3",
                    style: { display: "inline", float: "left" },
                  },
                  "Carichi di lavoro",
                  -1,
                )),
              e[13] ||
                (e[13] = p("div", { style: { clear: "both" } }, null, -1)),
              i(
                Ae,
                { "no-gutters": "" },
                {
                  default: d(() => [
                    i(
                      N,
                      { cols: "12", sm: "12", md: "9" },
                      {
                        default: d(() => [
                          i(
                            $e,
                            {
                              autocomplete: "off",
                              class: "ma-2",
                              density: "compact",
                              modelValue: c(D),
                              "onUpdate:modelValue": [
                                e[0] ||
                                  (e[0] = (s) => (J(D) ? (D.value = s) : null)),
                                e[1] || (e[1] = (s) => I()),
                              ],
                              items: c(E),
                              label: "Dipendente",
                              variant: "outlined",
                              "item-title": "name",
                              "item-value": "id",
                              clearable: "",
                              multiple: "",
                              chips: "",
                              "no-data-text": "Nessun risultato trovato",
                            },
                            null,
                            8,
                            ["modelValue", "items"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      N,
                      { cols: "12", sm: "12", md: "3" },
                      {
                        default: d(() => [
                          i(
                            c(Me),
                            {
                              modelValue: c(w),
                              "onUpdate:modelValue": [
                                e[2] ||
                                  (e[2] = (s) => (J(w) ? (w.value = s) : null)),
                                e[3] || (e[3] = (s) => I()),
                              ],
                              locale: "it",
                              range: "",
                              "multi-calendars": "",
                              "enable-time-picker": !1,
                              class: "pa-2 pl-0",
                              "format-locale": c(Ne),
                              format: "dd/M/yyyy",
                              "select-text": "Seleziona",
                              "cancel-text": "Annulla",
                              "preset-dates": c(ne),
                              clearable: !1,
                            },
                            {
                              "preset-date-range-button": d(
                                ({ label: s, value: l, presetDate: a }) => [
                                  p(
                                    "span",
                                    {
                                      role: "button",
                                      tabindex: 0,
                                      onClick: (o) => a(l),
                                      onKeyup: [
                                        K(
                                          Q((o) => a(l), ["prevent"]),
                                          ["enter"],
                                        ),
                                        K(
                                          Q((o) => a(l), ["prevent"]),
                                          ["space"],
                                        ),
                                      ],
                                    },
                                    Ee(s),
                                    41,
                                    _e,
                                  ),
                                ],
                              ),
                              _: 1,
                            },
                            8,
                            ["modelValue", "format-locale", "preset-dates"],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      N,
                      { cols: "12", sm: "12", md: "2" },
                      {
                        default: d(() => [
                          i(
                            He,
                            {
                              class: "ma-2",
                              onClick: e[4] || (e[4] = (s) => I()),
                            },
                            {
                              default: d(() => [
                                i(Fe, null, {
                                  default: d(() => [
                                    ...(e[5] ||
                                      (e[5] = [S("mdi-magnify", -1)])),
                                  ]),
                                  _: 1,
                                }),
                                e[6] || (e[6] = S("Cerca", -1)),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              p(
                "div",
                {
                  ref_key: "ganttContainer",
                  ref: $,
                  id: "gantt-chart2",
                  style: { zoom: "1.3", width: "100%", height: "auto" },
                },
                null,
                512,
              ),
              U(
                p(
                  "div",
                  null,
                  [
                    e[10] || (e[10] = p("h5", null, "Legenda", -1)),
                    i(
                      R,
                      {
                        label: "",
                        color: "green",
                        variant: "flat",
                        class: "mr-2",
                      },
                      {
                        default: d(() => [
                          ...(e[7] || (e[7] = [S("Stato Chiuso", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      R,
                      {
                        label: "",
                        color: "blue",
                        variant: "flat",
                        class: "mr-2",
                      },
                      {
                        default: d(() => [
                          ...(e[8] || (e[8] = [S("Stato Completato", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                    i(
                      R,
                      {
                        label: "",
                        color: "orange",
                        variant: "flat",
                        class: "mr-2",
                      },
                      {
                        default: d(() => [
                          ...(e[9] || (e[9] = [S("Stato Aperto", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  512,
                ),
                [[j, c(se) && !c(T)]],
              ),
              U(p("div", null, "Nessuna occupazione in questo periodo", 512), [
                [j, c(T) && c(D) > 0],
              ]),
            ]),
          ])
        )
      );
    },
  };
export { ut as default };
