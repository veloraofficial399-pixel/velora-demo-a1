import * as b from "react";
import * as P from "react/jsx-runtime";
import {
  motion as X,
  AnimatePresence as qp,
  useReducedMotion as Vg,
  useScroll as Mg,
  useTransform as Ig,
  useSpring as Bg,
} from "framer-motion";
import { toast as I_, Toaster as Z_ } from "sonner";
import Credit from "./Credit";

var I = {
  bismillah: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`,
  bismillahLatin: `In the name of Allah, the Most Gracious, the Most Merciful`,
  ayah: `And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.`,
  ayahRef: `Surah Ar-Rum 30:21`,
  bride: {
    name: `Afreen`,
    fullName: `Afreen Rasheed`,
    line: `Daughter of Mr. Abdul Rasheed & Mrs. Nadira`,
    blurb: `A lover of quiet moments, joyous celebrations and endless smiles.`,
    photo: `/wedding/bride.jpg`,
  },
  groom: {
    name: `Sameer`,
    fullName: `Sameer K A`,
    line: `Son of Mr. Basheer & Mrs. Zubaida`,
    blurb: `Kind-hearted, adventurous and ready to embark on life's finest journey.`,
    photo: `/wedding/groom.jpg`,
  },
  heroArt: `/wedding/hero.jpg`,
  introCover: `/wedding/ChatGPT%20Image%20Aug%2012%2C%202026%20at%2011_08_45%20PM.png`,
  introVideo: `/wedding/Continuous_wedding_invitation_an%E2%80%A6_202608122343.mp4`,
  dateISO: `2027-04-18T18:00:00+05:30`,
  endISO: `2027-04-18T22:00:00+05:30`,
  dateLabel: `Sunday, 18 April 2027`,
  timeLabel: `Reception: 6:00 PM – 10:00 PM`,
  venue: {
    name: `Mehar Convention Centre`,
    address: `Kakkanad, Kochi, Kerala 682030`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=Kakkanad%2C%20Kochi%2C%20Kerala`,
    preview: `/wedding/map.jpg`,
  },
  meta: {
    siteUrl: ``,
    title: `Afreen & Sameer — Wedding Reception Invitation | 18 Apr 2027`,
    description: `With love, we invite you to celebrate the Wedding Reception of Afreen & Sameer on Sunday, 18 April 2027 at Mehar Convention Centre, Kochi, Kerala.`,
    ogTitle: `Afreen & Sameer — Wedding Reception Invitation`,
    ogDescription: `With love, we invite you to celebrate the Wedding Reception of Afreen & Sameer on Sunday, 18 April 2027 at Mehar Convention Centre, Kochi, Kerala.`,
    ogImage: ``,
    ogImageAlt: `Afreen & Sameer Wedding Reception`,
    ogImageType: `image/jpeg`,
    ogSiteName: ``,
  },
  gallery: [
    `/wedding/gallery-1.jpg`,
    `/wedding/gallery-2.jpg`,
    `/wedding/gallery-3.jpg`,
    `/wedding/gallery-4.jpg`,
    `/wedding/gallery-5.jpg`,
    `/wedding/gallery-6.jpg`,
  ],
  closing: `Your duas and presence are the blessing we wish for. Come, share this joy with us, and help us begin forever, insha'Allah.`,
};
var Hg = (...e) =>
  e
    .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
    .join(` `)
    .trim();
var Ug = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
var Wg = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
    n ? n.toUpperCase() : t.toLowerCase(),
  );
var Gg = (e) => {
  let t = Wg(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Kg = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 2,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
};
var qg = (e) => {
  for (let t in e)
    if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  return !1;
};
var Jg = (0, b.forwardRef)(
  (
    {
      color: e = `currentColor`,
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = ``,
      children: a,
      iconNode: o,
      ...s
    },
    c,
  ) =>
    (0, b.createElement)(
      `svg`,
      {
        ref: c,
        ...Kg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Hg(`lucide`, i),
        ...(!a && !qg(s) && { "aria-hidden": `true` }),
        ...s,
      },
      [
        ...o.map(([e, t]) => (0, b.createElement)(e, t)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
var Yg = (e, t) => {
  let n = (0, b.forwardRef)(({ className: n, ...r }, i) =>
    (0, b.createElement)(Jg, {
      ref: i,
      iconNode: t,
      className: Hg(`lucide-${Ug(Gg(e))}`, `lucide-${e}`, n),
      ...r,
    }),
  );
  return ((n.displayName = Gg(e)), n);
};
var Xg = Yg(`calendar-plus`, [
  [`path`, { d: `M16 19h6`, key: `xwg31i` }],
  [`path`, { d: `M16 2v4`, key: `4m81vk` }],
  [`path`, { d: `M19 16v6`, key: `tddt3s` }],
  [
    `path`,
    {
      d: `M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5`,
      key: `1glfrc`,
    },
  ],
  [`path`, { d: `M3 10h18`, key: `8toen8` }],
  [`path`, { d: `M8 2v4`, key: `1cmpym` }],
]);
var Zg = Yg(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]);
var Qg = Yg(`clock`, [
  [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
]);
var $g = Yg(`heart`, [
  [
    `path`,
    {
      d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
      key: `mvr1a0`,
    },
  ],
]);
var e_ = Yg(`map-pin`, [
  [
    `path`,
    {
      d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
      key: `1r0f0z`,
    },
  ],
  [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
]);
var t_ = Yg(`navigation`, [
  [`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }],
]);
var n_ = Yg(`skip-forward`, [
  [`path`, { d: `M21 4v16`, key: `7j8fe9` }],
  [
    `path`,
    {
      d: `M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,
      key: `zs4d6`,
    },
  ],
]);
var r_ = Yg(`volume-2`, [
  [
    `path`,
    {
      d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
      key: `uqj9uw`,
    },
  ],
  [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
  [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
]);
var i_ = Yg(`volume-x`, [
  [
    `path`,
    {
      d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
      key: `uqj9uw`,
    },
  ],
  [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
  [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
]);
var a_ = Yg(`x`, [
  [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
  [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
]);
function o_({ className: e = `` }) {
  let t = Vg();
  return (0, P.jsx)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 overflow-hidden ${e}`,
    children: [
      {
        style: `left-[-20%] top-[-10%] h-[70vh] w-[70vh] bg-aurora-sky`,
        anim: { x: [0, 40, 0], y: [0, 30, 0] },
        duration: 18,
      },
      {
        style: `right-[-25%] top-[10%] h-[60vh] w-[60vh] bg-aurora-blossom`,
        anim: { x: [0, -35, 0], y: [0, 45, 0] },
        duration: 22,
      },
      {
        style: `left-[10%] bottom-[-25%] h-[65vh] w-[65vh] bg-aurora-meadow`,
        anim: { x: [0, 30, 0], y: [0, -35, 0] },
        duration: 26,
      },
      {
        style: `right-[5%] bottom-[-10%] h-[45vh] w-[45vh] bg-aurora-gold`,
        anim: { x: [0, -25, 0], y: [0, -20, 0] },
        duration: 30,
      },
    ].map((e, n) =>
      (0, P.jsx)(
        X.div,
        {
          className: `absolute rounded-full opacity-60 blur-[80px] ${e.style}`,
          animate: t ? {} : e.anim,
          transition: {
            duration: e.duration,
            repeat: 1 / 0,
            ease: `easeInOut`,
          },
        },
        n,
      ),
    ),
  });
}
function s_({ children: e, delay: t = 0, className: n = `` }) {
  let r = Vg();
  return (0, P.jsx)(X.div, {
    className: n,
    initial: !r && { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, amount: 0.25 },
    transition: { duration: 0.7, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
function c_({ className: e = `` }) {
  return (0, P.jsxs)(`div`, {
    "aria-hidden": !0,
    className: `flex items-center justify-center gap-3 text-gold ${e}`,
    children: [
      (0, P.jsx)(`span`, {
        className: `h-px w-14 bg-gradient-to-r from-transparent to-gold/60`,
      }),
      (0, P.jsxs)(`svg`, {
        width: `34`,
        height: `20`,
        viewBox: `0 0 34 20`,
        fill: `none`,
        children: [
          (0, P.jsx)(`path`, {
            d: `M17 3c2.6 0 4.4 1.9 4.4 4.2 0 2.7-2.4 4.6-4.4 6.8-2-2.2-4.4-4.1-4.4-6.8C12.6 4.9 14.4 3 17 3Z`,
            stroke: `currentColor`,
            strokeWidth: `1.1`,
          }),
          (0, P.jsx)(`path`, {
            d: `M3 10h7M24 10h7`,
            stroke: `currentColor`,
            strokeWidth: `1.1`,
            strokeLinecap: `round`,
          }),
          (0, P.jsx)(`circle`, {
            cx: `17`,
            cy: `17`,
            r: `1.4`,
            fill: `currentColor`,
          }),
        ],
      }),
      (0, P.jsx)(`span`, {
        className: `h-px w-14 bg-gradient-to-l from-transparent to-gold/60`,
      }),
    ],
  });
}
var l_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23b98b3f' stroke-width='0.9'%3E%3Crect x='24' y='24' width='72' height='72'/%3E%3Crect x='24' y='24' width='72' height='72' transform='rotate(45 60 60)'/%3E%3Ccircle cx='60' cy='60' r='36'/%3E%3Ccircle cx='60' cy='60' r='12'/%3E%3C/g%3E%3C/svg%3E")`;
function u_({ className: e = ``, opacity: t = 0.07, size: n = 120 }) {
  return (0, P.jsx)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 ${e}`,
    style: {
      backgroundImage: l_,
      backgroundSize: `${n}px ${n}px`,
      opacity: t,
      maskImage: `radial-gradient(120% 80% at 50% 50%, black, transparent 78%)`,
      WebkitMaskImage: `radial-gradient(120% 80% at 50% 50%, black, transparent 78%)`,
    },
  });
}
function d_({ className: e = `` }) {
  let t = (e) =>
    (0, P.jsx)(`span`, {
      "aria-hidden": !0,
      className: `pointer-events-none absolute h-6 w-6 border-gold/45 ${e}`,
    });
  return (0, P.jsxs)(`span`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 ${e}`,
    children: [
      t(`left-0 top-0 rounded-tl-2xl border-l border-t`),
      t(`right-0 top-0 rounded-tr-2xl border-r border-t`),
      t(`bottom-0 left-0 rounded-bl-2xl border-b border-l`),
      t(`bottom-0 right-0 rounded-br-2xl border-b border-r`),
    ],
  });
}
function f_({ flip: e = !1 }) {
  return (0, P.jsx)(`div`, {
    "aria-hidden": !0,
    className: `relative -mt-px h-16 w-full ${e ? `rotate-180` : ``}`,
    children: (0, P.jsxs)(`svg`, {
      viewBox: `0 0 800 120`,
      preserveAspectRatio: `none`,
      className: `h-full w-full text-gold/25`,
      fill: `none`,
      children: [
        (0, P.jsx)(`path`, {
          d: `M0 108h800V96c-40-4-70-16-104-26-30-9-52-4-80 4-24 7-42 2-60-8`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
        }),
        (0, P.jsx)(`path`, {
          d: `M0 120V92c46-2 78 8 112 18 34 10 62 6 96-4 40-12 76-8 112 6 30 12 58 12 88 2 34-11 66-16 100-8 38 9 72 22 112 20 32-2 58-10 80-18v32z`,
          fill: `currentColor`,
          opacity: `0.28`,
        }),
        (0, P.jsxs)(`g`, {
          stroke: `currentColor`,
          strokeWidth: `1.4`,
          opacity: `0.75`,
          children: [
            (0, P.jsx)(`path`, {
              d: `M362 96V72c0-16 14-26 30-26s30 10 30 26v24`,
            }),
            (0, P.jsx)(`path`, {
              d: `M392 46c10-8 12-16 0-24-12 8-10 16 0 24Z`,
            }),
            (0, P.jsx)(`path`, { d: `M348 96V64M436 96V64` }),
            (0, P.jsx)(`path`, {
              d: `M348 64c0-6 4-8 4-14M436 64c0-6-4-8-4-14`,
            }),
          ],
        }),
      ],
    }),
  });
}
function p_({ kicker: e, title: t, className: n = `` }) {
  return (0, P.jsxs)(s_, {
    className: `text-center ${n}`,
    children: [
      (0, P.jsx)(`p`, {
        className: `text-[0.62rem] uppercase tracking-[0.46em] text-muted-foreground`,
        children: e,
      }),
      (0, P.jsx)(`h2`, {
        className: `mt-3 font-display text-[2.6rem] leading-none text-gilded`,
        children: t,
      }),
      (0, P.jsx)(c_, { className: `mt-5` }),
    ],
  });
}
function m_({ start: e = !0 }) {
  let t = Vg(),
    n = (0, b.useRef)(null),
    { scrollYProgress: r } = Mg({
      target: n,
      offset: [`start start`, `end start`],
    }),
    i = Ig(r, [0, 1], [0, -90]),
    a = Ig(r, [0, 0.65], [1, 0]),
    o = Ig(r, [0, 1], [0, 60]),
    s = Ig(r, [0, 1], [1, 1.12]),
    c = (n) => ({
      initial: t ? {} : { opacity: 0, y: 20 },
      animate: e ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.9, delay: n, ease: [0.22, 1, 0.36, 1] },
    });
  return (0, P.jsxs)(`section`, {
    ref: n,
    className: `relative flex min-h-[100svh] flex-col overflow-hidden bg-sky-mist`,
    children: [
      (0, P.jsx)(o_, { className: `opacity-40` }),
      (0, P.jsx)(X.img, {
        src: I.heroArt,
        alt: `Illustration of the bride in a white hijab and the groom holding hands on a flowering meadow`,
        width: 1024,
        height: 1536,
        style: {
          y: t ? 0 : o,
          scale: t ? 1 : s,
          maskImage: `linear-gradient(to bottom, transparent 0%, black 26%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 26%)`,
        },
        initial: t ? {} : { opacity: 0, scale: 1.08 },
        animate: e ? { opacity: 1, scale: 1 } : {},
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
        className: `pointer-events-none absolute inset-x-0 bottom-0 h-[62%] w-full object-cover object-bottom`,
      }),
      (0, P.jsxs)(X.div, {
        style: { y: t ? 0 : i, opacity: t ? 1 : a },
        className: `relative z-10 mx-auto w-full max-w-md px-7 pt-[14vh] text-center flex flex-col items-center`,
        children: [
          (0, P.jsx)(X.p, {
            ...c(0.05),
            className: `font-display text-xl text-gold`,
            dir: `rtl`,
            lang: `ar`,
            children: I.bismillah,
          }),
          (0, P.jsx)(X.p, {
            ...c(0.15),
            className: `mt-5 text-[0.7rem] uppercase tracking-[0.42em] text-muted-foreground`,
            children: `Save the Date`,
          }),
          (0, P.jsxs)(X.h1, {
            ...c(0.3),
            className: `mt-5 font-display text-foreground`,
            children: [
              (0, P.jsx)(`span`, {
                className: `block text-5xl leading-tight`,
                children: I.bride.name,
              }),
              (0, P.jsx)(X.span, {
                className: `my-1 block text-3xl italic text-gold`,
                animate: t || !e ? {} : { scale: [1, 1.12, 1] },
                transition: { duration: 3.2, repeat: 1 / 0, ease: `easeInOut` },
                children: `&`,
              }),
              (0, P.jsx)(`span`, {
                className: `block text-5xl leading-tight`,
                children: I.groom.name,
              }),
            ],
          }),
          (0, P.jsx)(X.div, {
            ...c(0.45),
            children: (0, P.jsx)(c_, { className: `mt-6` }),
          }),
          (0, P.jsxs)(X.div, {
            ...c(0.6),
            className: `mt-6 inline-flex flex-col items-center gap-1.5 rounded-2xl border border-gold/40 bg-card/90 px-6 py-3.5 shadow-soft backdrop-blur-md`,
            children: [
              (0, P.jsx)(`p`, {
                className: `font-display text-base font-semibold tracking-[0.16em] uppercase text-foreground`,
                children: I.dateLabel,
              }),
              (0, P.jsx)(`div`, { className: `h-px w-10 bg-gold/30` }),
              (0, P.jsxs)(`p`, {
                className: `flex items-center justify-center gap-1.5 text-xs font-medium text-foreground/80`,
                children: [
                  (0, P.jsx)(e_, {
                    className: `h-3.5 w-3.5 text-gold shrink-0`,
                  }),
                  I.venue.name,
                  `, Kerala`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, P.jsx)(X.div, {
        "aria-hidden": !0,
        className: `absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-foreground/60`,
        animate: t ? {} : { y: [0, 8, 0] },
        transition: { duration: 2.2, repeat: 1 / 0, ease: `easeInOut` },
        children: (0, P.jsx)(Zg, { className: `h-5 w-5` }),
      }),
    ],
  });
}
function h_({
  photo: e,
  name: t,
  fullName: n,
  line: r,
  blurb: i,
  delay: a,
  from: o,
}) {
  let s = Vg();
  return (0, P.jsxs)(s_, {
    delay: a,
    className: `text-center`,
    children: [
      (0, P.jsxs)(X.div, {
        className: `relative mx-auto w-full max-w-[16rem]`,
        initial: !s && { x: o, rotate: o > 0 ? 4 : -4, opacity: 0 },
        whileInView: { x: 0, rotate: 0, opacity: 1 },
        viewport: { once: !0, amount: 0.4 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        whileHover: { scale: 1.03, rotate: o > 0 ? 1.2 : -1.2 },
        children: [
          (0, P.jsx)(X.div, {
            "aria-hidden": !0,
            className: `arch absolute -inset-3 bg-gradient-to-b from-blossom/50 via-sky/35 to-meadow/35 blur-lg`,
            animate: s ? {} : { scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] },
            transition: { duration: 6, repeat: 1 / 0, ease: `easeInOut` },
          }),
          (0, P.jsx)(`span`, {
            "aria-hidden": !0,
            className: `arch pointer-events-none absolute -inset-1 border border-gold/40`,
          }),
          (0, P.jsx)(`img`, {
            src: e,
            alt: `Portrait of ${n}`,
            loading: `lazy`,
            className: `arch relative aspect-[3/4] w-full object-cover shadow-soft ring-1 ring-gold/40`,
          }),
        ],
      }),
      (0, P.jsx)(`h3`, {
        className: `mt-6 font-display text-3xl text-foreground`,
        children: t,
      }),
      (0, P.jsx)(`p`, {
        className: `mt-1 text-xs uppercase tracking-[0.24em] text-gold`,
        children: n,
      }),
      (0, P.jsx)(`p`, {
        className: `mt-3 text-sm text-muted-foreground`,
        children: r,
      }),
      (0, P.jsx)(`p`, {
        className: `mx-auto mt-3 max-w-xs text-sm leading-relaxed text-foreground/70`,
        children: i,
      }),
    ],
  });
}
function g_() {
  let e = Vg();
  return (0, P.jsxs)(`section`, {
    className: `surface-parchment relative overflow-hidden px-6 py-20`,
    children: [
      (0, P.jsx)(u_, { opacity: 0.06 }),
      (0, P.jsxs)(`div`, {
        className: `relative mx-auto max-w-md`,
        children: [
          (0, P.jsx)(p_, {
            kicker: `Two hearts, one journey`,
            title: `The Couple`,
          }),
          (0, P.jsxs)(`div`, {
            className: `mt-12 space-y-14`,
            children: [
              (0, P.jsx)(h_, { ...I.bride, delay: 0.05, from: -40 }),
              (0, P.jsx)(X.div, {
                className: `text-center font-display text-4xl italic text-gold`,
                initial: !e && { scale: 0.6, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0, amount: 0.8 },
                transition: { type: `spring`, stiffness: 220, damping: 14 },
                children: `&`,
              }),
              (0, P.jsx)(h_, { ...I.groom, delay: 0.15, from: 40 }),
            ],
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `absolute inset-x-0 bottom-0`,
        children: (0, P.jsx)(f_, {}),
      }),
    ],
  });
}
var __ = new Date(I.dateISO).getTime();
function v_() {
  let e = Math.max(0, __ - Date.now());
  return {
    Days: Math.floor(e / 864e5),
    Hours: Math.floor(e / 36e5) % 24,
    Minutes: Math.floor(e / 6e4) % 60,
    Seconds: Math.floor(e / 1e3) % 60,
  };
}
function y_({ label: e, value: t }) {
  let n = String(t).padStart(2, `0`);
  return (0, P.jsxs)(X.div, {
    whileHover: { y: -3 },
    transition: { type: `spring`, stiffness: 280, damping: 20 },
    className: `gilded-card relative flex flex-col items-center overflow-hidden rounded-2xl px-2 py-5`,
    children: [
      (0, P.jsx)(d_, { className: `opacity-70` }),
      (0, P.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent`,
      }),
      (0, P.jsx)(`div`, {
        className: `relative h-10 w-full [perspective:400px]`,
        children: (0, P.jsx)(qp, {
          mode: `popLayout`,
          initial: !1,
          children: (0, P.jsx)(
            X.span,
            {
              initial: { rotateX: -80, y: 12, opacity: 0 },
              animate: { rotateX: 0, y: 0, opacity: 1 },
              exit: { rotateX: 80, y: -12, opacity: 0 },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              className: `absolute inset-0 flex items-center justify-center font-display text-3xl tabular-nums text-foreground`,
              children: n,
            },
            n,
          ),
        }),
      }),
      (0, P.jsx)(`span`, {
        className: `mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground`,
        children: e,
      }),
    ],
  });
}
function b_() {
  let [e, t] = (0, b.useState)(v_),
    [n, r] = (0, b.useState)(!1);
  return (
    (0, b.useEffect)(() => {
      r(!0);
      let e = setInterval(() => t(v_()), 1e3);
      return () => clearInterval(e);
    }, []),
    (0, P.jsxs)(`section`, {
      className: `surface-dawn relative overflow-hidden px-6 py-20`,
      children: [
        (0, P.jsx)(u_, { opacity: 0.08, size: 160 }),
        (0, P.jsxs)(`div`, {
          className: `relative mx-auto max-w-md`,
          children: [
            (0, P.jsx)(p_, {
              kicker: `Counting every moment`,
              title: `Until We Say Yes`,
            }),
            (0, P.jsx)(s_, {
              delay: 0.1,
              className: `mt-10 grid grid-cols-4 gap-3`,
              children: Object.entries(e).map(([e, t]) =>
                (0, P.jsx)(y_, { label: e, value: n ? t : 0 }, e),
              ),
            }),
            (0, P.jsx)(s_, {
              delay: 0.2,
              children: (0, P.jsx)(`p`, {
                className: `mt-8 text-center text-xs uppercase tracking-[0.32em] text-gold`,
                children: I.timeLabel,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function x_() {
  let [e, t] = (0, b.useState)(null),
    n = I.gallery;
  return (
    (0, b.useEffect)(() => {
      let r = (r) => {
        e !== null &&
          (r.key === `Escape` && t(null),
          r.key === `ArrowRight` && t((e) => ((e ?? 0) + 1) % n.length),
          r.key === `ArrowLeft` &&
            t((e) => ((e ?? 0) - 1 + n.length) % n.length));
      };
      return (
        window.addEventListener(`keydown`, r),
        () => window.removeEventListener(`keydown`, r)
      );
    }, [e, n.length]),
    (0, P.jsxs)(`section`, {
      className: `surface-parchment relative overflow-hidden px-6 py-20`,
      children: [
        (0, P.jsx)(u_, { opacity: 0.05, size: 200 }),
        (0, P.jsxs)(`div`, {
          className: `relative mx-auto max-w-md`,
          children: [
            (0, P.jsx)(p_, {
              kicker: `Moments before forever`,
              title: `Our Gallery`,
            }),
            (0, P.jsx)(`div`, {
              className: `mt-10 grid grid-cols-2 gap-3`,
              children: n.map((e, n) =>
                (0, P.jsx)(
                  s_,
                  {
                    delay: 0.05 * n,
                    className: n % 3 == 0 ? `col-span-2` : ``,
                    children: (0, P.jsxs)(X.button, {
                      type: `button`,
                      onClick: () => t(n),
                      whileTap: { scale: 0.97 },
                      className: `group relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-gold/30`,
                      "aria-label": `Open photograph ${n + 1}`,
                      children: [
                        (0, P.jsx)(X.img, {
                          layoutId: `photo-${n}`,
                          src: e,
                          alt: `Pre-wedding photograph ${n + 1}`,
                          loading: `lazy`,
                          className: `w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] ${n % 3 == 0 ? `aspect-[16/10]` : `aspect-[3/4]`}`,
                        }),
                        (0, P.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: `pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`,
                        }),
                        (0, P.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: `pointer-events-none absolute inset-2 rounded-xl border border-gold-foreground/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100`,
                        }),
                      ],
                    }),
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, P.jsx)(qp, {
          children:
            e !== null &&
            (0, P.jsxs)(X.div, {
              className: `fixed inset-0 z-[80] flex items-center justify-center bg-foreground/80 p-5 backdrop-blur-sm`,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => t(null),
              children: [
                (0, P.jsx)(
                  X.img,
                  {
                    layoutId: `photo-${e}`,
                    src: n[e],
                    alt: `Pre-wedding photograph ${e + 1}`,
                    drag: `x`,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.25,
                    onDragEnd: (e, r) => {
                      r.offset.x < -70
                        ? t((e) => ((e ?? 0) + 1) % n.length)
                        : r.offset.x > 70 &&
                          t((e) => ((e ?? 0) - 1 + n.length) % n.length);
                    },
                    onClick: (e) => e.stopPropagation(),
                    className: `max-h-[80vh] w-full max-w-md cursor-grab rounded-3xl object-contain shadow-soft active:cursor-grabbing`,
                  },
                  n[e],
                ),
                (0, P.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `Close photograph`,
                  onClick: () => t(null),
                  className: `absolute right-5 top-5 rounded-full bg-card/85 p-2.5 text-foreground shadow-soft`,
                  children: (0, P.jsx)(a_, { className: `h-5 w-5` }),
                }),
                (0, P.jsx)(`div`, {
                  className: `absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1.5`,
                  children: n.map((t, n) =>
                    (0, P.jsx)(
                      `span`,
                      {
                        className: `h-1.5 rounded-full transition-all ${n === e ? `w-5 bg-gold` : `w-1.5 bg-card/60`}`,
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
        }),
      ],
    })
  );
}
function ev(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function tv(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = ev(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : ev(e[t], null);
        }
      };
  };
}
function nv(...e) {
  return b.useCallback(tv(...e), e);
}
var rv = Object.defineProperty;
var iv = (e, t) => rv(e, `name`, { value: t, configurable: !0 });
function av(e) {
  let t = b.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (mv(r) && typeof vv == `function` && (r = vv(r._payload)),
      b.Children.forEach(r, (e) => {
        if (fv(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (mv(n) && typeof vv == `function` && (n = vv(n._payload)),
            (a = lv(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = b.cloneElement(a, void 0, s))
        : !o && b.Children.count(r) === 1 && b.isValidElement(r) && (a = r));
    let c = a ? dv(a) : void 0,
      l = nv(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? _v(e) : gv(e));
      return r;
    }
    let u = uv(i, a.props ?? {});
    return (a.type !== b.Fragment && (u.ref = n ? l : c), b.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
var ov = av(`Slot`);
var sv = Symbol.for(`radix.slottable`);
var lv = iv((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return b.isValidElement(t)
      ? b.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return b.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function uv(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function dv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function fv(e) {
  return (
    b.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === sv
  );
}
var pv = Symbol.for(`react.lazy`);
function mv(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === pv &&
    `_payload` in e &&
    hv(e._payload)
  );
}
function hv(e) {
  return typeof e == `object` && !!e && `then` in e;
}
var gv = iv(
  (e) =>
    `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  `createSlotError`,
);
var _v = iv(
  (e) =>
    `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  `createSlottableError`,
);
var vv = b.use;
function yv(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = yv(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function bv() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = yv(e)) && (r && (r += ` `), (r += t));
  return r;
}
var xv = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e);
var Sv = bv;
var Cv = (e, t) => (n) => {
  if (t?.variants == null) return Sv(e, n?.class, n?.className);
  let { variants: r, defaultVariants: i } = t,
    a = Object.keys(r).map((e) => {
      let t = n?.[e],
        a = i?.[e];
      if (t === null) return null;
      let o = xv(t) || xv(a);
      return r[e][o];
    }),
    o =
      n &&
      Object.entries(n).reduce((e, t) => {
        let [n, r] = t;
        return (r === void 0 || (e[n] = r), e);
      }, {});
  return Sv(
    e,
    a,
    t?.compoundVariants?.reduce((e, t) => {
      let { class: n, className: r, ...a } = t;
      return Object.entries(a).every((e) => {
        let [t, n] = e;
        return Array.isArray(n)
          ? n.includes({ ...i, ...o }[t])
          : { ...i, ...o }[t] === n;
      })
        ? [...e, n, r]
        : e;
    }, []),
    n?.class,
    n?.className,
  );
};
var wv = (e, t) => {
  let n = Array(e.length + t.length);
  for (let t = 0; t < e.length; t++) n[t] = e[t];
  for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
  return n;
};
var Tv = (e, t) => ({ classGroupId: e, validator: t });
var Ev = (e = new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n,
});
var Dv = `-`;
var Ov = [];
var kv = `arbitrary..`;
var Av = (e) => {
  let t = Nv(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  return {
    getClassGroupId: (e) => {
      if (e.startsWith(`[`) && e.endsWith(`]`)) return Mv(e);
      let n = e.split(Dv);
      return jv(n, +(n[0] === `` && n.length > 1), t);
    },
    getConflictingClassGroupIds: (e, t) => {
      if (t) {
        let t = r[e],
          i = n[e];
        return t ? (i ? wv(i, t) : t) : i || Ov;
      }
      return n[e] || Ov;
    },
  };
};
var jv = (e, t, n) => {
  if (e.length - t === 0) return n.classGroupId;
  let r = e[t],
    i = n.nextPart.get(r);
  if (i) {
    let n = jv(e, t + 1, i);
    if (n) return n;
  }
  let a = n.validators;
  if (a === null) return;
  let o = t === 0 ? e.join(Dv) : e.slice(t).join(Dv),
    s = a.length;
  for (let e = 0; e < s; e++) {
    let t = a[e];
    if (t.validator(o)) return t.classGroupId;
  }
};
var Mv = (e) =>
  e.slice(1, -1).indexOf(`:`) === -1
    ? void 0
    : (() => {
        let t = e.slice(1, -1),
          n = t.indexOf(`:`),
          r = t.slice(0, n);
        return r ? kv + r : void 0;
      })();
var Nv = (e) => {
  let { theme: t, classGroups: n } = e;
  return Pv(n, t);
};
var Pv = (e, t) => {
  let n = Ev();
  for (let r in e) {
    let i = e[r];
    Fv(i, n, r, t);
  }
  return n;
};
var Fv = (e, t, n, r) => {
  let i = e.length;
  for (let a = 0; a < i; a++) {
    let i = e[a];
    Iv(i, t, n, r);
  }
};
var Iv = (e, t, n, r) => {
  if (typeof e == `string`) {
    Lv(e, t, n);
    return;
  }
  if (typeof e == `function`) {
    Rv(e, t, n, r);
    return;
  }
  zv(e, t, n, r);
};
var Lv = (e, t, n) => {
  let r = e === `` ? t : Bv(t, e);
  r.classGroupId = n;
};
var Rv = (e, t, n, r) => {
  if (Vv(e)) {
    Fv(e(r), t, n, r);
    return;
  }
  (t.validators === null && (t.validators = []), t.validators.push(Tv(n, e)));
};
var zv = (e, t, n, r) => {
  let i = Object.entries(e),
    a = i.length;
  for (let e = 0; e < a; e++) {
    let [a, o] = i[e];
    Fv(o, Bv(t, a), n, r);
  }
};
var Bv = (e, t) => {
  let n = e,
    r = t.split(Dv),
    i = r.length;
  for (let e = 0; e < i; e++) {
    let t = r[e],
      i = n.nextPart.get(t);
    (i || ((i = Ev()), n.nextPart.set(t, i)), (n = i));
  }
  return n;
};
var Vv = (e) => `isThemeGetter` in e && e.isThemeGetter === !0;
var Hv = (e) => {
  if (e < 1) return { get: () => void 0, set: () => {} };
  let t = 0,
    n = Object.create(null),
    r = Object.create(null),
    i = (i, a) => {
      ((n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
    };
  return {
    get(e) {
      let t = n[e];
      if (t !== void 0) return t;
      if ((t = r[e]) !== void 0) return (i(e, t), t);
    },
    set(e, t) {
      e in n ? (n[e] = t) : i(e, t);
    },
  };
};
var Uv = `!`;
var Wv = `:`;
var Gv = [];
var Kv = (e, t, n, r, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: i,
});
var qv = (e) => {
  let { prefix: t, experimentalParseClassName: n } = e,
    r = (e) => {
      let t = [],
        n = 0,
        r = 0,
        i = 0,
        a,
        o = e.length;
      for (let s = 0; s < o; s++) {
        let o = e[s];
        if (n === 0 && r === 0) {
          if (o === Wv) {
            (t.push(e.slice(i, s)), (i = s + 1));
            continue;
          }
          if (o === `/`) {
            a = s;
            continue;
          }
        }
        o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--;
      }
      let s = t.length === 0 ? e : e.slice(i),
        c = s,
        l = !1;
      s.endsWith(Uv)
        ? ((c = s.slice(0, -1)), (l = !0))
        : s.startsWith(Uv) && ((c = s.slice(1)), (l = !0));
      let u = a && a > i ? a - i : void 0;
      return Kv(t, l, c, u);
    };
  if (t) {
    let e = t + Wv,
      n = r;
    r = (t) =>
      t.startsWith(e) ? n(t.slice(e.length)) : Kv(Gv, !1, t, void 0, !0);
  }
  if (n) {
    let e = r;
    r = (t) => n({ className: t, parseClassName: e });
  }
  return r;
};
var Jv = (e) => {
  let t = new Map();
  return (
    e.orderSensitiveModifiers.forEach((e, n) => {
      t.set(e, 1e6 + n);
    }),
    (e) => {
      let n = [],
        r = [];
      for (let i = 0; i < e.length; i++) {
        let a = e[i],
          o = a[0] === `[`,
          s = t.has(a);
        o || s
          ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
          : r.push(a);
      }
      return (r.length > 0 && (r.sort(), n.push(...r)), n);
    }
  );
};
var Yv = (e) => ({
  cache: Hv(e.cacheSize),
  parseClassName: qv(e),
  sortModifiers: Jv(e),
  postfixLookupClassGroupIds: Xv(e),
  ...Av(e),
});
var Xv = (e) => {
  let t = Object.create(null),
    n = e.postfixLookupClassGroups;
  if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
  return t;
};
var Zv = /\s+/;
var Qv = (e, t) => {
  let {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
      sortModifiers: a,
      postfixLookupClassGroupIds: o,
    } = t,
    s = [],
    c = e.trim().split(Zv),
    l = ``;
  for (let e = c.length - 1; e >= 0; --e) {
    let t = c[e],
      {
        isExternal: u,
        modifiers: d,
        hasImportantModifier: f,
        baseClassName: p,
        maybePostfixModifierPosition: m,
      } = n(t);
    if (u) {
      l = t + (l.length > 0 ? ` ` + l : l);
      continue;
    }
    let h = !!m,
      g;
    if (h) {
      g = r(p.substring(0, m));
      let e = g && o[g] ? r(p) : void 0;
      e && e !== g && ((g = e), (h = !1));
    } else g = r(p);
    if (!g) {
      if (!h) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      if (((g = r(p)), !g)) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      h = !1;
    }
    let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
      v = f ? _ + Uv : _,
      y = v + g;
    if (s.indexOf(y) > -1) continue;
    s.push(y);
    let b = i(g, h);
    for (let e = 0; e < b.length; ++e) {
      let t = b[e];
      s.push(v + t);
    }
    l = t + (l.length > 0 ? ` ` + l : l);
  }
  return l;
};
var $v = (...e) => {
  let t = 0,
    n,
    r,
    i = ``;
  for (; t < e.length;)
    (n = e[t++]) && (r = ey(n)) && (i && (i += ` `), (i += r));
  return i;
};
var ey = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ey(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
var ty = (e, ...t) => {
  let n,
    r,
    i,
    a,
    o = (o) => (
      (n = Yv(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    ),
    s = (e) => {
      let t = r(e);
      if (t) return t;
      let a = Qv(e, n);
      return (i(e, a), a);
    };
  return ((a = o), (...e) => a($v(...e)));
};
var ny = [];
var ry = (e) => {
  let t = (t) => t[e] || ny;
  return ((t.isThemeGetter = !0), t);
};
var iy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var ay = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var oy = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var sy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var cy =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var ly = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var uy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var dy =
  /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var fy = (e) => oy.test(e);
var Z = (e) => !!e && !Number.isNaN(Number(e));
var py = (e) => !!e && Number.isInteger(Number(e));
var my = (e) => e.endsWith(`%`) && Z(e.slice(0, -1));
var hy = (e) => sy.test(e);
var gy = () => !0;
var _y = (e) => cy.test(e) && !ly.test(e);
var vy = () => !1;
var yy = (e) => uy.test(e);
var by = (e) => dy.test(e);
var xy = (e) => !Q(e) && !$(e);
var Sy = (e) =>
  e.startsWith(`@container`) &&
  ((e[10] === `/` && e[11] !== void 0) ||
    (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
    (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10)));
var Cy = (e) => Ry(e, Hy, vy);
var Q = (e) => iy.test(e);
var wy = (e) => Ry(e, Uy, _y);
var Ty = (e) => Ry(e, Wy, Z);
var Ey = (e) => Ry(e, Ky, gy);
var Dy = (e) => Ry(e, Gy, vy);
var Oy = (e) => Ry(e, By, vy);
var ky = (e) => Ry(e, Vy, by);
var Ay = (e) => Ry(e, qy, yy);
var $ = (e) => ay.test(e);
var jy = (e) => zy(e, Uy);
var My = (e) => zy(e, Gy);
var Ny = (e) => zy(e, By);
var Py = (e) => zy(e, Hy);
var Fy = (e) => zy(e, Vy);
var Iy = (e) => zy(e, qy, !0);
var Ly = (e) => zy(e, Ky, !0);
var Ry = (e, t, n) => {
  let r = iy.exec(e);
  return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
};
var zy = (e, t, n = !1) => {
  let r = ay.exec(e);
  return r ? (r[1] ? t(r[1]) : n) : !1;
};
var By = (e) => e === `position` || e === `percentage`;
var Vy = (e) => e === `image` || e === `url`;
var Hy = (e) => e === `length` || e === `size` || e === `bg-size`;
var Uy = (e) => e === `length`;
var Wy = (e) => e === `number`;
var Gy = (e) => e === `family-name`;
var Ky = (e) => e === `number` || e === `weight`;
var qy = (e) => e === `shadow`;
var Jy = ty(() => {
  let e = ry(`color`),
    t = ry(`font`),
    n = ry(`text`),
    r = ry(`font-weight`),
    i = ry(`tracking`),
    a = ry(`leading`),
    o = ry(`breakpoint`),
    s = ry(`container`),
    c = ry(`spacing`),
    l = ry(`radius`),
    u = ry(`shadow`),
    d = ry(`inset-shadow`),
    f = ry(`text-shadow`),
    p = ry(`drop-shadow`),
    m = ry(`blur`),
    h = ry(`perspective`),
    g = ry(`aspect`),
    _ = ry(`ease`),
    v = ry(`animate`),
    y = () => [
      `auto`,
      `avoid`,
      `all`,
      `avoid-page`,
      `page`,
      `left`,
      `right`,
      `column`,
    ],
    b = () => [
      `center`,
      `top`,
      `bottom`,
      `left`,
      `right`,
      `top-left`,
      `left-top`,
      `top-right`,
      `right-top`,
      `bottom-right`,
      `right-bottom`,
      `bottom-left`,
      `left-bottom`,
    ],
    x = () => [...b(), $, Q],
    S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
    C = () => [`auto`, `contain`, `none`],
    w = () => [$, Q, c],
    T = () => [fy, `full`, `auto`, ...w()],
    ee = () => [py, `none`, `subgrid`, $, Q],
    te = () => [`auto`, { span: [`full`, py, $, Q] }, py, $, Q],
    E = () => [py, `auto`, $, Q],
    ne = () => [`auto`, `min`, `max`, `fr`, $, Q],
    re = () => [
      `start`,
      `end`,
      `center`,
      `between`,
      `around`,
      `evenly`,
      `stretch`,
      `baseline`,
      `center-safe`,
      `end-safe`,
    ],
    ie = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
    ae = () => [`auto`, ...w()],
    oe = () => [
      fy,
      `auto`,
      `full`,
      `dvw`,
      `dvh`,
      `lvw`,
      `lvh`,
      `svw`,
      `svh`,
      `min`,
      `max`,
      `fit`,
      ...w(),
    ],
    se = () => [
      fy,
      `screen`,
      `full`,
      `dvw`,
      `lvw`,
      `svw`,
      `min`,
      `max`,
      `fit`,
      ...w(),
    ],
    ce = () => [
      fy,
      `screen`,
      `full`,
      `lh`,
      `dvh`,
      `lvh`,
      `svh`,
      `min`,
      `max`,
      `fit`,
      ...w(),
    ],
    D = () => [e, $, Q],
    O = () => [...b(), Ny, Oy, { position: [$, Q] }],
    le = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
    ue = () => [`auto`, `cover`, `contain`, Py, Cy, { size: [$, Q] }],
    de = () => [my, jy, wy],
    fe = () => [``, `none`, `full`, l, $, Q],
    k = () => [``, Z, jy, wy],
    A = () => [`solid`, `dashed`, `dotted`, `double`],
    pe = () => [
      `normal`,
      `multiply`,
      `screen`,
      `overlay`,
      `darken`,
      `lighten`,
      `color-dodge`,
      `color-burn`,
      `hard-light`,
      `soft-light`,
      `difference`,
      `exclusion`,
      `hue`,
      `saturation`,
      `color`,
      `luminosity`,
    ],
    j = () => [Z, my, Ny, Oy],
    me = () => [``, `none`, m, $, Q],
    M = () => [`none`, Z, $, Q],
    he = () => [`none`, Z, $, Q],
    ge = () => [Z, $, Q],
    N = () => [fy, `full`, ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: [`spin`, `ping`, `pulse`, `bounce`],
      aspect: [`video`],
      blur: [hy],
      breakpoint: [hy],
      color: [gy],
      container: [hy],
      "drop-shadow": [hy],
      ease: [`in`, `out`, `in-out`],
      font: [xy],
      "font-weight": [
        `thin`,
        `extralight`,
        `light`,
        `normal`,
        `medium`,
        `semibold`,
        `bold`,
        `extrabold`,
        `black`,
      ],
      "inset-shadow": [hy],
      leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
      perspective: [
        `dramatic`,
        `near`,
        `normal`,
        `midrange`,
        `distant`,
        `none`,
      ],
      radius: [hy],
      shadow: [hy],
      spacing: [`px`, Z],
      text: [hy],
      "text-shadow": [hy],
      tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
    },
    classGroups: {
      aspect: [{ aspect: [`auto`, `square`, fy, Q, $, g] }],
      container: [`container`],
      "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
      "container-named": [Sy],
      columns: [{ columns: [Z, Q, $, s] }],
      "break-after": [{ "break-after": y() }],
      "break-before": [{ "break-before": y() }],
      "break-inside": [
        { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
      ],
      "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
      box: [{ box: [`border`, `content`] }],
      display: [
        `block`,
        `inline-block`,
        `inline`,
        `flex`,
        `inline-flex`,
        `table`,
        `inline-table`,
        `table-caption`,
        `table-cell`,
        `table-column`,
        `table-column-group`,
        `table-footer-group`,
        `table-header-group`,
        `table-row-group`,
        `table-row`,
        `flow-root`,
        `grid`,
        `inline-grid`,
        `contents`,
        `list-item`,
        `hidden`,
      ],
      sr: [`sr-only`, `not-sr-only`],
      float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
      clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
      isolation: [`isolate`, `isolation-auto`],
      "object-fit": [
        { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
      ],
      "object-position": [{ object: x() }],
      overflow: [{ overflow: S() }],
      "overflow-x": [{ "overflow-x": S() }],
      "overflow-y": [{ "overflow-y": S() }],
      overscroll: [{ overscroll: C() }],
      "overscroll-x": [{ "overscroll-x": C() }],
      "overscroll-y": [{ "overscroll-y": C() }],
      position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
      inset: [{ inset: T() }],
      "inset-x": [{ "inset-x": T() }],
      "inset-y": [{ "inset-y": T() }],
      start: [{ "inset-s": T(), start: T() }],
      end: [{ "inset-e": T(), end: T() }],
      "inset-bs": [{ "inset-bs": T() }],
      "inset-be": [{ "inset-be": T() }],
      top: [{ top: T() }],
      right: [{ right: T() }],
      bottom: [{ bottom: T() }],
      left: [{ left: T() }],
      visibility: [`visible`, `invisible`, `collapse`],
      z: [{ z: [py, `auto`, $, Q] }],
      basis: [{ basis: [fy, `full`, `auto`, s, ...w()] }],
      "flex-direction": [
        { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
      ],
      "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
      flex: [{ flex: [Z, fy, `auto`, `initial`, `none`, Q] }],
      grow: [{ grow: [``, Z, $, Q] }],
      shrink: [{ shrink: [``, Z, $, Q] }],
      order: [{ order: [py, `first`, `last`, `none`, $, Q] }],
      "grid-cols": [{ "grid-cols": ee() }],
      "col-start-end": [{ col: te() }],
      "col-start": [{ "col-start": E() }],
      "col-end": [{ "col-end": E() }],
      "grid-rows": [{ "grid-rows": ee() }],
      "row-start-end": [{ row: te() }],
      "row-start": [{ "row-start": E() }],
      "row-end": [{ "row-end": E() }],
      "grid-flow": [
        { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
      ],
      "auto-cols": [{ "auto-cols": ne() }],
      "auto-rows": [{ "auto-rows": ne() }],
      gap: [{ gap: w() }],
      "gap-x": [{ "gap-x": w() }],
      "gap-y": [{ "gap-y": w() }],
      "justify-content": [{ justify: [...re(), `normal`] }],
      "justify-items": [{ "justify-items": [...ie(), `normal`] }],
      "justify-self": [{ "justify-self": [`auto`, ...ie()] }],
      "align-content": [{ content: [`normal`, ...re()] }],
      "align-items": [{ items: [...ie(), { baseline: [``, `last`] }] }],
      "align-self": [{ self: [`auto`, ...ie(), { baseline: [``, `last`] }] }],
      "place-content": [{ "place-content": re() }],
      "place-items": [{ "place-items": [...ie(), `baseline`] }],
      "place-self": [{ "place-self": [`auto`, ...ie()] }],
      p: [{ p: w() }],
      px: [{ px: w() }],
      py: [{ py: w() }],
      ps: [{ ps: w() }],
      pe: [{ pe: w() }],
      pbs: [{ pbs: w() }],
      pbe: [{ pbe: w() }],
      pt: [{ pt: w() }],
      pr: [{ pr: w() }],
      pb: [{ pb: w() }],
      pl: [{ pl: w() }],
      m: [{ m: ae() }],
      mx: [{ mx: ae() }],
      my: [{ my: ae() }],
      ms: [{ ms: ae() }],
      me: [{ me: ae() }],
      mbs: [{ mbs: ae() }],
      mbe: [{ mbe: ae() }],
      mt: [{ mt: ae() }],
      mr: [{ mr: ae() }],
      mb: [{ mb: ae() }],
      ml: [{ ml: ae() }],
      "space-x": [{ "space-x": w() }],
      "space-x-reverse": [`space-x-reverse`],
      "space-y": [{ "space-y": w() }],
      "space-y-reverse": [`space-y-reverse`],
      size: [{ size: oe() }],
      "inline-size": [{ inline: [`auto`, ...se()] }],
      "min-inline-size": [{ "min-inline": [`auto`, ...se()] }],
      "max-inline-size": [{ "max-inline": [`none`, ...se()] }],
      "block-size": [{ block: [`auto`, ...ce()] }],
      "min-block-size": [{ "min-block": [`auto`, ...ce()] }],
      "max-block-size": [{ "max-block": [`none`, ...ce()] }],
      w: [{ w: [s, `screen`, ...oe()] }],
      "min-w": [{ "min-w": [s, `screen`, `none`, ...oe()] }],
      "max-w": [
        { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...oe()] },
      ],
      h: [{ h: [`screen`, `lh`, ...oe()] }],
      "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...oe()] }],
      "max-h": [{ "max-h": [`screen`, `lh`, ...oe()] }],
      "font-size": [{ text: [`base`, n, jy, wy] }],
      "font-smoothing": [`antialiased`, `subpixel-antialiased`],
      "font-style": [`italic`, `not-italic`],
      "font-weight": [{ font: [r, Ly, Ey] }],
      "font-stretch": [
        {
          "font-stretch": [
            `ultra-condensed`,
            `extra-condensed`,
            `condensed`,
            `semi-condensed`,
            `normal`,
            `semi-expanded`,
            `expanded`,
            `extra-expanded`,
            `ultra-expanded`,
            my,
            Q,
          ],
        },
      ],
      "font-family": [{ font: [My, Dy, t] }],
      "font-features": [{ "font-features": [Q] }],
      "fvn-normal": [`normal-nums`],
      "fvn-ordinal": [`ordinal`],
      "fvn-slashed-zero": [`slashed-zero`],
      "fvn-figure": [`lining-nums`, `oldstyle-nums`],
      "fvn-spacing": [`proportional-nums`, `tabular-nums`],
      "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
      tracking: [{ tracking: [i, $, Q] }],
      "line-clamp": [{ "line-clamp": [Z, `none`, $, Ty] }],
      leading: [{ leading: [a, ...w()] }],
      "list-image": [{ "list-image": [`none`, $, Q] }],
      "list-style-position": [{ list: [`inside`, `outside`] }],
      "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
      "text-alignment": [
        { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
      ],
      "placeholder-color": [{ placeholder: D() }],
      "text-color": [{ text: D() }],
      "text-decoration": [
        `underline`,
        `overline`,
        `line-through`,
        `no-underline`,
      ],
      "text-decoration-style": [{ decoration: [...A(), `wavy`] }],
      "text-decoration-thickness": [
        { decoration: [Z, `from-font`, `auto`, $, wy] },
      ],
      "text-decoration-color": [{ decoration: D() }],
      "underline-offset": [{ "underline-offset": [Z, `auto`, $, Q] }],
      "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
      "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
      "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
      indent: [{ indent: w() }],
      "tab-size": [{ tab: [py, $, Q] }],
      "vertical-align": [
        {
          align: [
            `baseline`,
            `top`,
            `middle`,
            `bottom`,
            `text-top`,
            `text-bottom`,
            `sub`,
            `super`,
            $,
            Q,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            `normal`,
            `nowrap`,
            `pre`,
            `pre-line`,
            `pre-wrap`,
            `break-spaces`,
          ],
        },
      ],
      break: [{ break: [`normal`, `words`, `all`, `keep`] }],
      wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
      hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
      content: [{ content: [`none`, $, Q] }],
      "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
      "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
      "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
      "bg-position": [{ bg: O() }],
      "bg-repeat": [{ bg: le() }],
      "bg-size": [{ bg: ue() }],
      "bg-image": [
        {
          bg: [
            `none`,
            {
              linear: [
                { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                py,
                $,
                Q,
              ],
              radial: [``, $, Q],
              conic: [py, $, Q],
            },
            Fy,
            ky,
          ],
        },
      ],
      "bg-color": [{ bg: D() }],
      "gradient-from-pos": [{ from: de() }],
      "gradient-via-pos": [{ via: de() }],
      "gradient-to-pos": [{ to: de() }],
      "gradient-from": [{ from: D() }],
      "gradient-via": [{ via: D() }],
      "gradient-to": [{ to: D() }],
      rounded: [{ rounded: fe() }],
      "rounded-s": [{ "rounded-s": fe() }],
      "rounded-e": [{ "rounded-e": fe() }],
      "rounded-t": [{ "rounded-t": fe() }],
      "rounded-r": [{ "rounded-r": fe() }],
      "rounded-b": [{ "rounded-b": fe() }],
      "rounded-l": [{ "rounded-l": fe() }],
      "rounded-ss": [{ "rounded-ss": fe() }],
      "rounded-se": [{ "rounded-se": fe() }],
      "rounded-ee": [{ "rounded-ee": fe() }],
      "rounded-es": [{ "rounded-es": fe() }],
      "rounded-tl": [{ "rounded-tl": fe() }],
      "rounded-tr": [{ "rounded-tr": fe() }],
      "rounded-br": [{ "rounded-br": fe() }],
      "rounded-bl": [{ "rounded-bl": fe() }],
      "border-w": [{ border: k() }],
      "border-w-x": [{ "border-x": k() }],
      "border-w-y": [{ "border-y": k() }],
      "border-w-s": [{ "border-s": k() }],
      "border-w-e": [{ "border-e": k() }],
      "border-w-bs": [{ "border-bs": k() }],
      "border-w-be": [{ "border-be": k() }],
      "border-w-t": [{ "border-t": k() }],
      "border-w-r": [{ "border-r": k() }],
      "border-w-b": [{ "border-b": k() }],
      "border-w-l": [{ "border-l": k() }],
      "divide-x": [{ "divide-x": k() }],
      "divide-x-reverse": [`divide-x-reverse`],
      "divide-y": [{ "divide-y": k() }],
      "divide-y-reverse": [`divide-y-reverse`],
      "border-style": [{ border: [...A(), `hidden`, `none`] }],
      "divide-style": [{ divide: [...A(), `hidden`, `none`] }],
      "border-color": [{ border: D() }],
      "border-color-x": [{ "border-x": D() }],
      "border-color-y": [{ "border-y": D() }],
      "border-color-s": [{ "border-s": D() }],
      "border-color-e": [{ "border-e": D() }],
      "border-color-bs": [{ "border-bs": D() }],
      "border-color-be": [{ "border-be": D() }],
      "border-color-t": [{ "border-t": D() }],
      "border-color-r": [{ "border-r": D() }],
      "border-color-b": [{ "border-b": D() }],
      "border-color-l": [{ "border-l": D() }],
      "divide-color": [{ divide: D() }],
      "outline-style": [{ outline: [...A(), `none`, `hidden`] }],
      "outline-offset": [{ "outline-offset": [Z, $, Q] }],
      "outline-w": [{ outline: [``, Z, jy, wy] }],
      "outline-color": [{ outline: D() }],
      shadow: [{ shadow: [``, `none`, u, Iy, Ay] }],
      "shadow-color": [{ shadow: D() }],
      "inset-shadow": [{ "inset-shadow": [`none`, d, Iy, Ay] }],
      "inset-shadow-color": [{ "inset-shadow": D() }],
      "ring-w": [{ ring: k() }],
      "ring-w-inset": [`ring-inset`],
      "ring-color": [{ ring: D() }],
      "ring-offset-w": [{ "ring-offset": [Z, wy] }],
      "ring-offset-color": [{ "ring-offset": D() }],
      "inset-ring-w": [{ "inset-ring": k() }],
      "inset-ring-color": [{ "inset-ring": D() }],
      "text-shadow": [{ "text-shadow": [`none`, f, Iy, Ay] }],
      "text-shadow-color": [{ "text-shadow": D() }],
      opacity: [{ opacity: [Z, $, Q] }],
      "mix-blend": [{ "mix-blend": [...pe(), `plus-darker`, `plus-lighter`] }],
      "bg-blend": [{ "bg-blend": pe() }],
      "mask-clip": [
        {
          "mask-clip": [
            `border`,
            `padding`,
            `content`,
            `fill`,
            `stroke`,
            `view`,
          ],
        },
        `mask-no-clip`,
      ],
      "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }],
      "mask-image-linear-pos": [{ "mask-linear": [Z] }],
      "mask-image-linear-from-pos": [{ "mask-linear-from": j() }],
      "mask-image-linear-to-pos": [{ "mask-linear-to": j() }],
      "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
      "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
      "mask-image-t-from-pos": [{ "mask-t-from": j() }],
      "mask-image-t-to-pos": [{ "mask-t-to": j() }],
      "mask-image-t-from-color": [{ "mask-t-from": D() }],
      "mask-image-t-to-color": [{ "mask-t-to": D() }],
      "mask-image-r-from-pos": [{ "mask-r-from": j() }],
      "mask-image-r-to-pos": [{ "mask-r-to": j() }],
      "mask-image-r-from-color": [{ "mask-r-from": D() }],
      "mask-image-r-to-color": [{ "mask-r-to": D() }],
      "mask-image-b-from-pos": [{ "mask-b-from": j() }],
      "mask-image-b-to-pos": [{ "mask-b-to": j() }],
      "mask-image-b-from-color": [{ "mask-b-from": D() }],
      "mask-image-b-to-color": [{ "mask-b-to": D() }],
      "mask-image-l-from-pos": [{ "mask-l-from": j() }],
      "mask-image-l-to-pos": [{ "mask-l-to": j() }],
      "mask-image-l-from-color": [{ "mask-l-from": D() }],
      "mask-image-l-to-color": [{ "mask-l-to": D() }],
      "mask-image-x-from-pos": [{ "mask-x-from": j() }],
      "mask-image-x-to-pos": [{ "mask-x-to": j() }],
      "mask-image-x-from-color": [{ "mask-x-from": D() }],
      "mask-image-x-to-color": [{ "mask-x-to": D() }],
      "mask-image-y-from-pos": [{ "mask-y-from": j() }],
      "mask-image-y-to-pos": [{ "mask-y-to": j() }],
      "mask-image-y-from-color": [{ "mask-y-from": D() }],
      "mask-image-y-to-color": [{ "mask-y-to": D() }],
      "mask-image-radial": [{ "mask-radial": [$, Q] }],
      "mask-image-radial-from-pos": [{ "mask-radial-from": j() }],
      "mask-image-radial-to-pos": [{ "mask-radial-to": j() }],
      "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
      "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
      "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
      "mask-image-radial-size": [
        {
          "mask-radial": [
            { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
          ],
        },
      ],
      "mask-image-radial-pos": [{ "mask-radial-at": b() }],
      "mask-image-conic-pos": [{ "mask-conic": [Z] }],
      "mask-image-conic-from-pos": [{ "mask-conic-from": j() }],
      "mask-image-conic-to-pos": [{ "mask-conic-to": j() }],
      "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
      "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
      "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
      "mask-origin": [
        {
          "mask-origin": [
            `border`,
            `padding`,
            `content`,
            `fill`,
            `stroke`,
            `view`,
          ],
        },
      ],
      "mask-position": [{ mask: O() }],
      "mask-repeat": [{ mask: le() }],
      "mask-size": [{ mask: ue() }],
      "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
      "mask-image": [{ mask: [`none`, $, Q] }],
      filter: [{ filter: [``, `none`, $, Q] }],
      blur: [{ blur: me() }],
      brightness: [{ brightness: [Z, $, Q] }],
      contrast: [{ contrast: [Z, $, Q] }],
      "drop-shadow": [{ "drop-shadow": [``, `none`, p, Iy, Ay] }],
      "drop-shadow-color": [{ "drop-shadow": D() }],
      grayscale: [{ grayscale: [``, Z, $, Q] }],
      "hue-rotate": [{ "hue-rotate": [Z, $, Q] }],
      invert: [{ invert: [``, Z, $, Q] }],
      saturate: [{ saturate: [Z, $, Q] }],
      sepia: [{ sepia: [``, Z, $, Q] }],
      "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
      "backdrop-blur": [{ "backdrop-blur": me() }],
      "backdrop-brightness": [{ "backdrop-brightness": [Z, $, Q] }],
      "backdrop-contrast": [{ "backdrop-contrast": [Z, $, Q] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [``, Z, $, Q] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Z, $, Q] }],
      "backdrop-invert": [{ "backdrop-invert": [``, Z, $, Q] }],
      "backdrop-opacity": [{ "backdrop-opacity": [Z, $, Q] }],
      "backdrop-saturate": [{ "backdrop-saturate": [Z, $, Q] }],
      "backdrop-sepia": [{ "backdrop-sepia": [``, Z, $, Q] }],
      "border-collapse": [{ border: [`collapse`, `separate`] }],
      "border-spacing": [{ "border-spacing": w() }],
      "border-spacing-x": [{ "border-spacing-x": w() }],
      "border-spacing-y": [{ "border-spacing-y": w() }],
      "table-layout": [{ table: [`auto`, `fixed`] }],
      caption: [{ caption: [`top`, `bottom`] }],
      transition: [
        {
          transition: [
            ``,
            `all`,
            `colors`,
            `opacity`,
            `shadow`,
            `transform`,
            `none`,
            $,
            Q,
          ],
        },
      ],
      "transition-behavior": [{ transition: [`normal`, `discrete`] }],
      duration: [{ duration: [Z, `initial`, $, Q] }],
      ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
      delay: [{ delay: [Z, $, Q] }],
      animate: [{ animate: [`none`, v, $, Q] }],
      backface: [{ backface: [`hidden`, `visible`] }],
      perspective: [{ perspective: [h, $, Q] }],
      "perspective-origin": [{ "perspective-origin": x() }],
      rotate: [{ rotate: M() }],
      "rotate-x": [{ "rotate-x": M() }],
      "rotate-y": [{ "rotate-y": M() }],
      "rotate-z": [{ "rotate-z": M() }],
      scale: [{ scale: he() }],
      "scale-x": [{ "scale-x": he() }],
      "scale-y": [{ "scale-y": he() }],
      "scale-z": [{ "scale-z": he() }],
      "scale-3d": [`scale-3d`],
      skew: [{ skew: ge() }],
      "skew-x": [{ "skew-x": ge() }],
      "skew-y": [{ "skew-y": ge() }],
      transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
      "transform-origin": [{ origin: x() }],
      "transform-style": [{ transform: [`3d`, `flat`] }],
      translate: [{ translate: N() }],
      "translate-x": [{ "translate-x": N() }],
      "translate-y": [{ "translate-y": N() }],
      "translate-z": [{ "translate-z": N() }],
      "translate-none": [`translate-none`],
      zoom: [{ zoom: [py, $, Q] }],
      accent: [{ accent: D() }],
      appearance: [{ appearance: [`none`, `auto`] }],
      "caret-color": [{ caret: D() }],
      "color-scheme": [
        {
          scheme: [
            `normal`,
            `dark`,
            `light`,
            `light-dark`,
            `only-dark`,
            `only-light`,
          ],
        },
      ],
      cursor: [
        {
          cursor: [
            `auto`,
            `default`,
            `pointer`,
            `wait`,
            `text`,
            `move`,
            `help`,
            `not-allowed`,
            `none`,
            `context-menu`,
            `progress`,
            `cell`,
            `crosshair`,
            `vertical-text`,
            `alias`,
            `copy`,
            `no-drop`,
            `grab`,
            `grabbing`,
            `all-scroll`,
            `col-resize`,
            `row-resize`,
            `n-resize`,
            `e-resize`,
            `s-resize`,
            `w-resize`,
            `ne-resize`,
            `nw-resize`,
            `se-resize`,
            `sw-resize`,
            `ew-resize`,
            `ns-resize`,
            `nesw-resize`,
            `nwse-resize`,
            `zoom-in`,
            `zoom-out`,
            $,
            Q,
          ],
        },
      ],
      "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
      "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
      resize: [{ resize: [`none`, ``, `y`, `x`] }],
      "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
      "scrollbar-thumb-color": [{ "scrollbar-thumb": D() }],
      "scrollbar-track-color": [{ "scrollbar-track": D() }],
      "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }],
      "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
      "scroll-m": [{ "scroll-m": w() }],
      "scroll-mx": [{ "scroll-mx": w() }],
      "scroll-my": [{ "scroll-my": w() }],
      "scroll-ms": [{ "scroll-ms": w() }],
      "scroll-me": [{ "scroll-me": w() }],
      "scroll-mbs": [{ "scroll-mbs": w() }],
      "scroll-mbe": [{ "scroll-mbe": w() }],
      "scroll-mt": [{ "scroll-mt": w() }],
      "scroll-mr": [{ "scroll-mr": w() }],
      "scroll-mb": [{ "scroll-mb": w() }],
      "scroll-ml": [{ "scroll-ml": w() }],
      "scroll-p": [{ "scroll-p": w() }],
      "scroll-px": [{ "scroll-px": w() }],
      "scroll-py": [{ "scroll-py": w() }],
      "scroll-ps": [{ "scroll-ps": w() }],
      "scroll-pe": [{ "scroll-pe": w() }],
      "scroll-pbs": [{ "scroll-pbs": w() }],
      "scroll-pbe": [{ "scroll-pbe": w() }],
      "scroll-pt": [{ "scroll-pt": w() }],
      "scroll-pr": [{ "scroll-pr": w() }],
      "scroll-pb": [{ "scroll-pb": w() }],
      "scroll-pl": [{ "scroll-pl": w() }],
      "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
      "snap-stop": [{ snap: [`normal`, `always`] }],
      "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
      "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
      touch: [{ touch: [`auto`, `none`, `manipulation`] }],
      "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
      "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
      "touch-pz": [`touch-pinch-zoom`],
      select: [{ select: [`none`, `text`, `all`, `auto`] }],
      "will-change": [
        { "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] },
      ],
      fill: [{ fill: [`none`, ...D()] }],
      "stroke-w": [{ stroke: [Z, jy, wy, Ty] }],
      stroke: [{ stroke: [`none`, ...D()] }],
      "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
    },
    conflictingClassGroups: {
      "container-named": [`container-type`],
      overflow: [`overflow-x`, `overflow-y`],
      overscroll: [`overscroll-x`, `overscroll-y`],
      inset: [
        `inset-x`,
        `inset-y`,
        `inset-bs`,
        `inset-be`,
        `start`,
        `end`,
        `top`,
        `right`,
        `bottom`,
        `left`,
      ],
      "inset-x": [`right`, `left`],
      "inset-y": [`top`, `bottom`],
      flex: [`basis`, `grow`, `shrink`],
      gap: [`gap-x`, `gap-y`],
      p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
      px: [`pr`, `pl`],
      py: [`pt`, `pb`],
      m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
      mx: [`mr`, `ml`],
      my: [`mt`, `mb`],
      size: [`w`, `h`],
      "font-size": [`leading`],
      "fvn-normal": [
        `fvn-ordinal`,
        `fvn-slashed-zero`,
        `fvn-figure`,
        `fvn-spacing`,
        `fvn-fraction`,
      ],
      "fvn-ordinal": [`fvn-normal`],
      "fvn-slashed-zero": [`fvn-normal`],
      "fvn-figure": [`fvn-normal`],
      "fvn-spacing": [`fvn-normal`],
      "fvn-fraction": [`fvn-normal`],
      "line-clamp": [`display`, `overflow`],
      rounded: [
        `rounded-s`,
        `rounded-e`,
        `rounded-t`,
        `rounded-r`,
        `rounded-b`,
        `rounded-l`,
        `rounded-ss`,
        `rounded-se`,
        `rounded-ee`,
        `rounded-es`,
        `rounded-tl`,
        `rounded-tr`,
        `rounded-br`,
        `rounded-bl`,
      ],
      "rounded-s": [`rounded-ss`, `rounded-es`],
      "rounded-e": [`rounded-se`, `rounded-ee`],
      "rounded-t": [`rounded-tl`, `rounded-tr`],
      "rounded-r": [`rounded-tr`, `rounded-br`],
      "rounded-b": [`rounded-br`, `rounded-bl`],
      "rounded-l": [`rounded-tl`, `rounded-bl`],
      "border-spacing": [`border-spacing-x`, `border-spacing-y`],
      "border-w": [
        `border-w-x`,
        `border-w-y`,
        `border-w-s`,
        `border-w-e`,
        `border-w-bs`,
        `border-w-be`,
        `border-w-t`,
        `border-w-r`,
        `border-w-b`,
        `border-w-l`,
      ],
      "border-w-x": [`border-w-r`, `border-w-l`],
      "border-w-y": [`border-w-t`, `border-w-b`],
      "border-color": [
        `border-color-x`,
        `border-color-y`,
        `border-color-s`,
        `border-color-e`,
        `border-color-bs`,
        `border-color-be`,
        `border-color-t`,
        `border-color-r`,
        `border-color-b`,
        `border-color-l`,
      ],
      "border-color-x": [`border-color-r`, `border-color-l`],
      "border-color-y": [`border-color-t`, `border-color-b`],
      translate: [`translate-x`, `translate-y`, `translate-none`],
      "translate-none": [
        `translate`,
        `translate-x`,
        `translate-y`,
        `translate-z`,
      ],
      "scroll-m": [
        `scroll-mx`,
        `scroll-my`,
        `scroll-ms`,
        `scroll-me`,
        `scroll-mbs`,
        `scroll-mbe`,
        `scroll-mt`,
        `scroll-mr`,
        `scroll-mb`,
        `scroll-ml`,
      ],
      "scroll-mx": [`scroll-mr`, `scroll-ml`],
      "scroll-my": [`scroll-mt`, `scroll-mb`],
      "scroll-p": [
        `scroll-px`,
        `scroll-py`,
        `scroll-ps`,
        `scroll-pe`,
        `scroll-pbs`,
        `scroll-pbe`,
        `scroll-pt`,
        `scroll-pr`,
        `scroll-pb`,
        `scroll-pl`,
      ],
      "scroll-px": [`scroll-pr`, `scroll-pl`],
      "scroll-py": [`scroll-pt`, `scroll-pb`],
      touch: [`touch-x`, `touch-y`, `touch-pz`],
      "touch-x": [`touch`],
      "touch-y": [`touch`],
      "touch-pz": [`touch`],
    },
    conflictingClassGroupModifiers: { "font-size": [`leading`] },
    postfixLookupClassGroups: [`container-type`],
    orderSensitiveModifiers: [
      `*`,
      `**`,
      `after`,
      `backdrop`,
      `before`,
      `details-content`,
      `file`,
      `first-letter`,
      `first-line`,
      `marker`,
      `placeholder`,
      `selection`,
    ],
  };
});
function Yy(...e) {
  return Jy(bv(e));
}
var Xy = Cv(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
        destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
        outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
        secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
        ghost: `hover:bg-accent hover:text-accent-foreground`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `h-9 px-4 py-2`,
        sm: `h-8 rounded-md px-3 text-xs`,
        lg: `h-10 rounded-md px-8`,
        icon: `h-9 w-9`,
      },
    },
    defaultVariants: { variant: `default`, size: `default` },
  },
);
var Zy = b.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
    (0, P.jsx)(r ? ov : `button`, {
      className: Yy(Xy({ variant: t, size: n, className: e })),
      ref: a,
      ...i,
    }),
);
function Qy(e) {
  return new Date(e).toISOString().replace(/[-:]/g, ``).split(`.`)[0] + `Z`;
}
function $y() {
  let e = Qy(I.dateISO),
    t = Qy(I.endISO),
    n = `${I.bride.name} & ${I.groom.name} — Wedding Reception`,
    r = `With love, we invite you to celebrate the Wedding Reception of ${I.bride.fullName} & ${I.groom.fullName}.\n\nDate: ${I.dateLabel}\nTime: ${I.timeLabel}\nVenue: ${I.venue.name}, ${I.venue.address}\nDirections: ${I.venue.mapsUrl}`,
    i = `${I.venue.name}, ${I.venue.address}`;
  return `https://calendar.google.com/calendar/render?${new URLSearchParams({ action: `TEMPLATE`, text: n, dates: `${e}/${t}`, details: r, location: i }).toString()}`;
}
function eb() {
  typeof window < `u` && window.open($y(), `_blank`, `noopener,noreferrer`);
}
function tb() {
  return (0, P.jsxs)(`section`, {
    className: `surface-dawn relative overflow-hidden px-6 py-20`,
    children: [
      (0, P.jsx)(u_, { opacity: 0.07, size: 140 }),
      (0, P.jsxs)(`div`, {
        className: `relative mx-auto max-w-md`,
        children: [
          (0, P.jsx)(p_, {
            kicker: `Join the celebration`,
            title: `Event Details`,
          }),
          (0, P.jsx)(s_, {
            delay: 0.08,
            className: `mt-10`,
            children: (0, P.jsxs)(X.div, {
              whileHover: { y: -4 },
              transition: { type: `spring`, stiffness: 260, damping: 22 },
              className: `gilded-card relative rounded-3xl p-7 text-center`,
              children: [
                (0, P.jsx)(d_, {}),
                (0, P.jsx)(`p`, {
                  className: `font-display text-3xl text-gilded`,
                  children: I.dateLabel,
                }),
                (0, P.jsxs)(`p`, {
                  className: `mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground`,
                  children: [
                    (0, P.jsx)(Qg, { className: `h-4 w-4 text-gold` }),
                    I.timeLabel,
                  ],
                }),
                (0, P.jsx)(`div`, { className: `my-5 h-px bg-gold/20` }),
                (0, P.jsxs)(`p`, {
                  className: `flex items-center justify-center gap-2 font-display text-xl text-foreground`,
                  children: [
                    (0, P.jsx)(e_, { className: `h-4 w-4 text-gold` }),
                    I.venue.name,
                  ],
                }),
                (0, P.jsx)(`p`, {
                  className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
                  children: I.venue.address,
                }),
                (0, P.jsx)(X.div, {
                  whileTap: { scale: 0.97 },
                  children: (0, P.jsxs)(Zy, {
                    onClick: () => {
                      (eb(),
                        I_.success(`Opening Google Calendar...`, {
                          description: `${I.dateLabel} · ${I.venue.name}`,
                        }));
                    },
                    size: `lg`,
                    className: `group relative mt-7 h-12 w-full overflow-hidden rounded-full bg-gold text-base font-medium text-gold-foreground shadow-soft hover:bg-gold/90`,
                    children: [
                      (0, P.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gold-foreground/25 transition-all duration-700 group-hover:left-[110%]`,
                      }),
                      (0, P.jsx)(Xg, { className: `mr-2 h-5 w-5` }),
                      `Add to Calendar`,
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, P.jsx)(s_, {
            delay: 0.16,
            className: `mt-6`,
            children: (0, P.jsxs)(X.div, {
              whileHover: { y: -4 },
              transition: { type: `spring`, stiffness: 260, damping: 22 },
              className: `gilded-card relative overflow-hidden rounded-3xl`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `relative`,
                  children: [
                    (0, P.jsx)(`img`, {
                      src: I.venue.preview,
                      alt: `Map preview of ${I.venue.name}`,
                      loading: `lazy`,
                      className: `h-44 w-full object-cover`,
                    }),
                    (0, P.jsx)(X.span, {
                      "aria-hidden": !0,
                      className: `absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blossom/40`,
                      animate: { scale: [1, 2.1], opacity: [0.6, 0] },
                      transition: {
                        duration: 2.2,
                        repeat: 1 / 0,
                        ease: `easeOut`,
                      },
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `p-5`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `font-display text-lg text-foreground`,
                      children: `Find your way`,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `mt-1 text-sm text-muted-foreground`,
                      children: `Valet parking available at the north gate.`,
                    }),
                    (0, P.jsx)(X.div, {
                      whileTap: { scale: 0.97 },
                      children: (0, P.jsx)(Zy, {
                        asChild: !0,
                        variant: `outline`,
                        size: `lg`,
                        className: `mt-4 h-12 w-full rounded-full border-gold/40 text-base text-foreground hover:bg-blossom/20`,
                        children: (0, P.jsxs)(`a`, {
                          href: I.venue.mapsUrl,
                          target: `_blank`,
                          rel: `noreferrer noopener`,
                          children: [
                            (0, P.jsx)(t_, {
                              className: `mr-2 h-5 w-5 text-gold`,
                            }),
                            `Get Directions`,
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `absolute inset-x-0 bottom-0`,
        children: (0, P.jsx)(f_, {}),
      }),
    ],
  });
}
var nb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none' stroke='%23b98b3f' stroke-width='1.1'%3E%3Crect x='30' y='30' width='100' height='100'/%3E%3Crect x='30' y='30' width='100' height='100' transform='rotate(45 80 80)'/%3E%3Ccircle cx='80' cy='80' r='50'/%3E%3Ccircle cx='80' cy='80' r='18'/%3E%3Cpath d='M0 80h160M80 0v160'/%3E%3C/g%3E%3C/svg%3E")`;
function rb() {
  return (0, P.jsxs)(`footer`, {
    className: `relative overflow-hidden bg-background px-6 py-24`,
    children: [
      (0, P.jsx)(o_, { className: `opacity-70` }),
      (0, P.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute inset-0 opacity-[0.22]`,
        style: { backgroundImage: nb, backgroundSize: `160px 160px` },
      }),
      (0, P.jsx)(`div`, { className: `absolute inset-0 bg-background/55` }),
      (0, P.jsxs)(`div`, {
        className: `relative z-10 mx-auto max-w-md text-center`,
        children: [
          (0, P.jsxs)(s_, {
            children: [
              (0, P.jsx)(c_, {}),
              (0, P.jsxs)(`p`, {
                className: `mt-8 font-display text-xl italic leading-relaxed text-foreground/90`,
                children: [`“`, I.ayah, `”`],
              }),
              (0, P.jsx)(`p`, {
                className: `mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-gold`,
                children: I.ayahRef,
              }),
              (0, P.jsx)(`p`, {
                className: `mt-8 font-display text-2xl leading-relaxed text-foreground`,
                children: I.closing,
              }),
            ],
          }),
          (0, P.jsxs)(s_, {
            delay: 0.12,
            children: [
              (0, P.jsxs)(`h2`, {
                className: `mt-10 font-display text-5xl text-gilded`,
                children: [
                  I.bride.name,
                  ` `,
                  (0, P.jsx)(`span`, {
                    className: `italic text-gold`,
                    children: `&`,
                  }),
                  ` `,
                  I.groom.name,
                ],
              }),
              (0, P.jsx)(`p`, {
                className: `mt-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground`,
                children: I.dateLabel,
              }),
            ],
          }),
          (0, P.jsx)(s_, {
            delay: 0.2,
            children: (0, P.jsxs)(`p`, {
              className: `mt-12 flex items-center justify-center gap-1.5 text-xs text-muted-foreground`,
              children: [
                `Made with `,
                (0, P.jsx)($g, {
                  className: `h-3.5 w-3.5 fill-blossom text-blossom`,
                }),
                ` for our loved ones`,
              ],
            }),
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `mt-3 text-[10px] uppercase tracking-[0.35em] opacity-70`,
        children: (0, P.jsx)(Credit, {}),
      }),
    ],
  });
}
function ib({ className: e = `` }) {
  return (0, P.jsxs)(`svg`, {
    "aria-hidden": !0,
    viewBox: `0 0 64 64`,
    className: `pointer-events-none absolute h-16 w-16 text-gold/70 ${e}`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1`,
    children: [
      (0, P.jsx)(`path`, { d: `M2 62V22C2 11 11 2 22 2h40` }),
      (0, P.jsx)(`path`, { d: `M8 62V24c0-9 7-16 16-16h38`, opacity: `0.55` }),
      (0, P.jsx)(`path`, { d: `M14 30c8 0 14-6 14-14`, opacity: `0.8` }),
      (0, P.jsx)(`circle`, {
        cx: `21`,
        cy: `21`,
        r: `2.4`,
        fill: `currentColor`,
        stroke: `none`,
      }),
      (0, P.jsx)(`path`, {
        d: `M28 16c5-4 11-4 16 0-5 4-11 4-16 0Z`,
        opacity: `0.9`,
      }),
      (0, P.jsx)(`path`, {
        d: `M16 28c-4 5-4 11 0 16 4-5 4-11 0-16Z`,
        opacity: `0.9`,
      }),
    ],
  });
}
function ab({ open: e, onOpen: t }) {
  let n = Vg(),
    [r, i] = (0, b.useState)(!1),
    [a, o] = (0, b.useState)(!1),
    [s, c] = (0, b.useState)(!1),
    l = (0, b.useRef)(null);
  (0, b.useEffect)(
    () => (
      (document.body.style.overflow = e ? `` : `hidden`),
      () => {
        document.body.style.overflow = ``;
      }
    ),
    [e],
  );
  let u = () => {
    if (n) {
      t();
      return;
    }
    i(!0);
  };
  (0, b.useEffect)(() => {
    if (r && l.current) {
      let e = l.current;
      e.muted = a;
      let t = e.play();
      t !== void 0 &&
        t.catch((e) => {
          console.warn(`Video play error:`, e);
        });
    }
  }, [r, a]);
  let d = () => {
    s ||
      (c(!0),
      setTimeout(() => {
        t();
      }, 600));
  };
  return (0, P.jsx)(qp, {
    children:
      !e &&
      (0, P.jsx)(
        X.div,
        {
          className: `fixed inset-0 z-[70] flex flex-col items-center justify-center overflow-hidden bg-black px-4`,
          initial: { opacity: 0 },
          animate: { opacity: +!s },
          exit: { opacity: 0, scale: 1.05, filter: `blur(12px)` },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          children: r
            ? (0, P.jsxs)(`div`, {
                className: `relative flex h-full w-full items-center justify-center`,
                children: [
                  (0, P.jsx)(`video`, {
                    ref: l,
                    src: I.introVideo,
                    playsInline: !0,
                    onEnded: d,
                    onError: () => d(),
                    className: `h-full w-full max-h-screen max-w-4xl object-contain shadow-2xl rounded-lg`,
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `absolute top-6 inset-x-6 z-20 flex items-center justify-between pointer-events-auto`,
                    children: [
                      (0, P.jsx)(`button`, {
                        type: `button`,
                        onClick: (e) => {
                          (e.stopPropagation(),
                            l.current && ((l.current.muted = !a), o(!a)));
                        },
                        className: `flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/80 hover:border-gold/50`,
                        "aria-label": a ? `Unmute audio` : `Mute audio`,
                        children: a
                          ? (0, P.jsxs)(P.Fragment, {
                              children: [
                                (0, P.jsx)(i_, {
                                  className: `h-4 w-4 text-gold`,
                                }),
                                (0, P.jsx)(`span`, { children: `Unmute` }),
                              ],
                            })
                          : (0, P.jsxs)(P.Fragment, {
                              children: [
                                (0, P.jsx)(r_, {
                                  className: `h-4 w-4 text-gold`,
                                }),
                                (0, P.jsx)(`span`, { children: `Sound On` }),
                              ],
                            }),
                      }),
                      (0, P.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                          s ||
                            (c(!0),
                            setTimeout(() => {
                              t();
                            }, 400));
                        },
                        className: `flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/80 hover:border-gold/50`,
                        "aria-label": `Skip video`,
                        children: [
                          (0, P.jsx)(`span`, { children: `Skip Intro` }),
                          (0, P.jsx)(n_, { className: `h-4 w-4 text-gold` }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, P.jsxs)(X.button, {
                type: `button`,
                onClick: u,
                "aria-label": `Click anywhere to play wedding invitation video`,
                className: `relative flex h-full w-full max-w-4xl flex-col items-center justify-between py-10 px-4 cursor-pointer outline-none group select-none overflow-hidden`,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1 },
                children: [
                  (0, P.jsx)(X.img, {
                    src: I.introCover,
                    alt: `Wedding Invitation Cover`,
                    className: `pointer-events-none absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.03] transition-transform duration-1000 ease-out group-hover:scale-[1.02]`,
                    initial: n ? {} : { scale: 1.08 },
                    animate: { scale: 1 },
                    transition: { duration: 3, ease: [0.22, 1, 0.36, 1] },
                  }),
                  (0, P.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/60`,
                  }),
                  (0, P.jsxs)(X.div, {
                    "aria-hidden": !0,
                    className: `pointer-events-none absolute inset-4 rounded-3xl border border-gold/45 shadow-2xl`,
                    initial: { opacity: 0, scale: 0.98 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.2, duration: 1.2 },
                    children: [
                      (0, P.jsx)(`span`, {
                        className: `absolute inset-[6px] rounded-[1.25rem] border border-gold/25`,
                      }),
                      (0, P.jsx)(ib, { className: `-left-1 -top-1` }),
                      (0, P.jsx)(ib, {
                        className: `-right-1 -top-1 scale-x-[-1]`,
                      }),
                      (0, P.jsx)(ib, {
                        className: `-bottom-1 -left-1 scale-y-[-1]`,
                      }),
                      (0, P.jsx)(ib, {
                        className: `-bottom-1 -right-1 scale-[-1]`,
                      }),
                    ],
                  }),
                  !n &&
                    Array.from({ length: 16 }, (e, t) =>
                      (0, P.jsx)(
                        X.span,
                        {
                          "aria-hidden": !0,
                          className: `pointer-events-none absolute rounded-full bg-gold/70 blur-[1px]`,
                          style: {
                            left: `${(t * 67) % 100}%`,
                            top: `${(t * 41) % 100}%`,
                            width: 3 + (t % 3),
                            height: 3 + (t % 3),
                          },
                          animate: { y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] },
                          transition: {
                            duration: 6 + (t % 4),
                            delay: (t * 0.5) % 5,
                            repeat: 1 / 0,
                            ease: `easeInOut`,
                          },
                        },
                        t,
                      ),
                    ),
                  (0, P.jsxs)(X.div, {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3, duration: 0.8 },
                    className: `relative z-10 flex flex-col items-center text-center mt-2`,
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `font-display text-2xl sm:text-4xl leading-relaxed text-gold drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]`,
                        dir: `rtl`,
                        lang: `ar`,
                        children: I.bismillah,
                      }),
                      (0, P.jsxs)(`span`, {
                        className: `mt-2 flex items-center gap-3 text-gold/80`,
                        children: [
                          (0, P.jsx)(`span`, {
                            className: `h-px w-14 bg-gradient-to-r from-transparent via-gold/80 to-transparent`,
                          }),
                          (0, P.jsx)(`svg`, {
                            width: `12`,
                            height: `12`,
                            viewBox: `0 0 16 16`,
                            fill: `none`,
                            "aria-hidden": !0,
                            className: `text-gold drop-shadow`,
                            children: (0, P.jsx)(`path`, {
                              d: `M8 1.5 9.6 6.4 14.5 8 9.6 9.6 8 14.5 6.4 9.6 1.5 8 6.4 6.4Z`,
                              stroke: `currentColor`,
                              strokeWidth: `1.2`,
                            }),
                          }),
                          (0, P.jsx)(`span`, {
                            className: `h-px w-14 bg-gradient-to-l from-transparent via-gold/80 to-transparent`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsx)(`div`, { className: `my-auto` }),
                  (0, P.jsxs)(X.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5, duration: 0.8 },
                    className: `relative z-10 flex flex-col items-center text-center mb-2`,
                    children: [
                      (0, P.jsxs)(`h2`, {
                        className: `font-display text-3xl sm:text-5xl font-bold tracking-wide text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)]`,
                        children: [
                          I.bride.name,
                          ` `,
                          (0, P.jsx)(`span`, {
                            className: `italic text-gold`,
                            children: `&`,
                          }),
                          ` `,
                          I.groom.name,
                        ],
                      }),
                      (0, P.jsx)(`p`, {
                        className: `mt-1 text-xs sm:text-sm font-medium uppercase tracking-[0.38em] text-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]`,
                        children: I.dateLabel,
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `mt-5 flex items-center gap-2.5 rounded-full border border-gold/60 bg-black/60 px-7 py-3 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:border-gold group-hover:bg-black/75 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]`,
                        children: [
                          (0, P.jsx)(`span`, {
                            className: `text-xs font-semibold uppercase tracking-[0.32em] text-white`,
                            children: `Tap to Open Invitation`,
                          }),
                          (0, P.jsx)(X.svg, {
                            width: `14`,
                            height: `14`,
                            viewBox: `0 0 18 10`,
                            fill: `none`,
                            "aria-hidden": !0,
                            className: `text-gold`,
                            animate: n ? {} : { y: [0, 3, 0] },
                            transition: {
                              duration: 1.5,
                              repeat: 1 / 0,
                              ease: `easeInOut`,
                            },
                            children: (0, P.jsx)(`path`, {
                              d: `M1 1l8 7 8-7`,
                              stroke: `currentColor`,
                              strokeWidth: `1.5`,
                              strokeLinecap: `round`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        },
        `intro-overlay`,
      ),
  });
}
function ob({ enabled: e }) {
  let [t, n] = (0, b.useState)(!1);
  (0, b.useEffect)(() => {
    let e = () => n(window.scrollY > window.innerHeight * 0.85);
    return (
      e(),
      window.addEventListener(`scroll`, e, { passive: !0 }),
      () => window.removeEventListener(`scroll`, e)
    );
  }, []);
  let r = [
    {
      icon: Xg,
      label: `Save date`,
      onClick: () => {
        (eb(),
          I_.success(`Opening Google Calendar...`, {
            description: I.dateLabel,
          }));
      },
    },
    { icon: t_, label: `Directions`, href: I.venue.mapsUrl },
  ];
  return (0, P.jsx)(qp, {
    children:
      e &&
      t &&
      (0, P.jsx)(X.div, {
        initial: { y: 90, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 90, opacity: 0 },
        transition: { type: `spring`, stiffness: 260, damping: 28 },
        className: `fixed inset-x-0 bottom-4 z-[58] flex justify-center px-6`,
        children: (0, P.jsx)(`div`, {
          className: `flex items-center gap-1 rounded-full border border-gold/30 bg-card/85 p-1.5 shadow-soft backdrop-blur-md`,
          children: r.map(({ icon: e, label: t, href: n, onClick: r }) => {
            let i = (0, P.jsxs)(X.span, {
              whileTap: { scale: 0.92 },
              className: `flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-blossom/25`,
              children: [(0, P.jsx)(e, { className: `h-4 w-4 text-gold` }), t],
            });
            return n
              ? (0, P.jsx)(
                  `a`,
                  {
                    href: n,
                    target: `_blank`,
                    rel: `noreferrer noopener`,
                    children: i,
                  },
                  t,
                )
              : (0, P.jsx)(
                  `button`,
                  { type: `button`, onClick: r, children: i },
                  t,
                );
          }),
        }),
      }),
  });
}
function sb() {
  let { scrollYProgress: e } = Mg(),
    t = Bg(e, { stiffness: 120, damping: 30, mass: 0.3 });
  return (0, P.jsx)(X.div, {
    "aria-hidden": !0,
    style: { scaleX: t },
    className: `fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blossom via-gold to-sky`,
  });
}
function cb({ count: e = 14 }) {
  let t = Vg(),
    n = (0, b.useMemo)(
      () =>
        Array.from({ length: e }, (e, t) => ({
          left: (t * 97) % 100,
          size: 7 + ((t * 13) % 9),
          delay: (t * 1.7) % 14,
          duration: 16 + ((t * 5) % 12),
          drift: ((t % 5) - 2) * 26,
          tone: t % 3,
        })),
      [e],
    );
  return t
    ? null
    : (0, P.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none fixed inset-0 z-[55] overflow-hidden`,
        children: n.map((e, t) =>
          (0, P.jsx)(
            X.span,
            {
              className: `absolute -top-8 block rounded-[100%_0_100%_0] ${e.tone === 0 ? `bg-blossom/70` : e.tone === 1 ? `bg-gold/40` : `bg-sky/50`}`,
              style: { left: `${e.left}%`, width: e.size, height: e.size },
              initial: { y: -40, opacity: 0 },
              animate: {
                y: [`-5vh`, `105vh`],
                x: [0, e.drift, -e.drift / 2, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.9, 0.9, 0],
              },
              transition: {
                duration: e.duration,
                delay: e.delay,
                repeat: 1 / 0,
                ease: `linear`,
              },
            },
            t,
          ),
        ),
      });
}
var lb = (e) => (0, P.jsx)(Z_, { className: `toaster group`, ...e });
function db() {
  let [e, t] = (0, b.useState)(!1);
  return (0, P.jsxs)(P.Fragment, {
    children: [
      (0, P.jsx)(ab, { open: e, onOpen: () => t(!0) }),
      (0, P.jsx)(sb, {}),
      (0, P.jsx)(cb, {}),
      (0, P.jsx)(ob, { enabled: e }),
      (0, P.jsxs)(`main`, {
        className: `mx-auto min-h-screen w-full max-w-2xl overflow-x-hidden bg-background`,
        children: [
          (0, P.jsx)(m_, { start: e }),
          (0, P.jsx)(g_, {}),
          (0, P.jsx)(b_, {}),
          (0, P.jsx)(x_, {}),
          (0, P.jsx)(tb, {}),
          (0, P.jsx)(rb, {}),
        ],
      }),
      (0, P.jsx)(lb, { position: `top-center` }),
    ],
  });
}
export default db;
