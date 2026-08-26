/**
 * Cursor-following preview diagrams — one per project.
 * Each renders inside a 380 x 260 floating frame (24px padding),
 * so the working viewBox is 0 0 380 240.
 */

const INK = "#f5f3ee";
const DIM = "#a8a59c";
const FAINT = "#5c5a55";
const RULE = "#1f1e1c";
const FILL = "#161614";
const ACCENT = "#ff5a1f";
const GREEN = "#4ade80";
const MONO = "JetBrains Mono, monospace";

const svg = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 380 240",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

/** Sahayak — eight community modules over one grounded intelligence layer. */
function Sahayak() {
  const mods = ["FARM", "SEA", "CRAFT", "VEND", "GOVT", "A11Y", "EDU", "HEALTH"];
  return (
    <svg {...svg}>
      <text x={0} y={10} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        EIGHT COMMUNITIES
      </text>
      {mods.map((m, i) => (
        <g key={m} transform={`translate(${(i % 4) * 92}, ${20 + Math.floor(i / 4) * 34})`}>
          <rect width={84} height={26} rx={2} fill={FILL} stroke={RULE} />
          <text
            x={42}
            y={17}
            fontFamily={MONO}
            fontSize={9}
            fill={DIM}
            textAnchor="middle"
            letterSpacing="1"
          >
            {m}
          </text>
        </g>
      ))}

      <g transform="translate(190, 92)">
        <line x1={0} y1={0} x2={0} y2={22} stroke={RULE} strokeDasharray="3 3" />
        <circle r={2.5} cx={0} fill={ACCENT}>
          <animate attributeName="cy" values="0;22;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(0, 118)">
        <rect width={380} height={40} rx={2} fill={FILL} stroke={ACCENT} />
        <text x={14} y={17} fontFamily={MONO} fontSize={9} fill={ACCENT} letterSpacing="1.5">
          SHARED INTELLIGENCE LAYER
        </text>
        <text x={14} y={31} fontFamily={MONO} fontSize={10} fill={INK}>
          gemini · retrieval · live data
        </text>
        <text
          x={366}
          y={25}
          fontFamily={MONO}
          fontSize={9}
          fill={GREEN}
          textAnchor="end"
          letterSpacing="1"
        >
          ● grounded
        </text>
      </g>

      <g transform="translate(0, 170)">
        <rect width={182} height={34} rx={2} fill={FILL} stroke={RULE} />
        <text x={12} y={14} fontFamily={MONO} fontSize={8} fill={FAINT} letterSpacing="1.5">
          SOURCE FOUND
        </text>
        <text x={12} y={27} fontFamily={MONO} fontSize={10} fill={GREEN}>
          answer
        </text>
        <rect x={198} width={182} height={34} rx={2} fill={FILL} stroke={RULE} />
        <text x={210} y={14} fontFamily={MONO} fontSize={8} fill={FAINT} letterSpacing="1.5">
          NO SOURCE
        </text>
        <text x={210} y={27} fontFamily={MONO} fontSize={10} fill={ACCENT}>
          refuse
        </text>
      </g>

      <text x={0} y={228} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        MULTILINGUAL · OFFLINE-RESILIENT · NO HALLUCINATION
      </text>
    </svg>
  );
}

/** JanAI — plain-language question to a verified government scheme. */
function JanAI() {
  return (
    <svg {...svg}>
      <text x={0} y={10} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        CITIZEN · EN / हिंदी
      </text>

      <g transform="translate(0, 20)">
        <rect width={380} height={36} rx={2} fill={FILL} stroke={RULE} />
        <text x={12} y={23} fontFamily={MONO} fontSize={11} fill={INK}>
          &quot;क्या मुझे यह योजना मिल सकती है?&quot;
        </text>
        <rect x={352} y={12} width={2} height={13} fill={ACCENT}>
          <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
        </rect>
      </g>

      <g transform="translate(190, 60)">
        <line x1={0} y1={0} x2={0} y2={20} stroke={RULE} strokeDasharray="3 3" />
        <polygon points="-4,14 0,24 4,14" fill={ACCENT} />
      </g>

      <g transform="translate(0, 88)">
        <rect width={380} height={44} rx={2} fill={FILL} stroke={RULE} />
        <text x={12} y={17} fontFamily={MONO} fontSize={8} fill={FAINT} letterSpacing="1.5">
          ELIGIBILITY NAVIGATOR
        </text>
        {["age", "income", "state", "category"].map((k, i) => (
          <g key={k} transform={`translate(${12 + i * 90}, 26)`}>
            <rect width={78} height={12} rx={1} fill="#0a0a0a" stroke={RULE} />
            <rect width={78} height={12} rx={1} fill={ACCENT} opacity={0.14}>
              <animate
                attributeName="width"
                values="0;78"
                dur="1.6s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </rect>
            <text x={5} y={9} fontFamily={MONO} fontSize={7} fill={DIM} letterSpacing="1">
              {k.toUpperCase()}
            </text>
          </g>
        ))}
      </g>

      <g transform="translate(0, 146)">
        {[
          { n: "PM-KISAN", s: "eligible", c: GREEN },
          { n: "NSP Scholarship", s: "eligible", c: GREEN },
          { n: "PMAY-G", s: "check docs", c: ACCENT },
        ].map((r, i) => (
          <g key={r.n} transform={`translate(0, ${i * 24})`}>
            <rect width={380} height={20} rx={2} fill={FILL} stroke={RULE} />
            <text x={12} y={14} fontFamily={MONO} fontSize={9} fill={INK}>
              {r.n}
            </text>
            <text x={368} y={14} fontFamily={MONO} fontSize={8} fill={r.c} textAnchor="end">
              {r.s}
            </text>
          </g>
        ))}
      </g>

      <text x={0} y={230} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        VERIFIED .GOV.IN ONLY · NEVER GUARANTEES
      </text>
    </svg>
  );
}

/** Cognify — point forecast wrapped in a calibrated uncertainty band. */
function Cognify() {
  return (
    <svg {...svg}>
      <text x={0} y={10} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        DEMAND FORECAST · CONFORMAL INTERVAL
      </text>

      <g transform="translate(0, 20)">
        <rect width={380} height={118} rx={2} fill={FILL} stroke={RULE} />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={12}
            y1={20 + i * 26}
            x2={368}
            y2={20 + i * 26}
            stroke={RULE}
            strokeDasharray="2 4"
          />
        ))}
        {/* uncertainty band */}
        <path
          d="M12 74 C 70 60, 120 82, 176 54 C 232 30, 290 46, 368 22 L368 62 C 290 86, 232 70, 176 94 C 120 122, 70 100, 12 106 Z"
          fill={ACCENT}
          opacity={0.12}
        />
        {/* point forecast */}
        <path
          d="M12 90 C 70 80, 120 91, 176 74 C 232 58, 290 58, 368 42"
          stroke={ACCENT}
          strokeWidth={1.5}
          fill="none"
        />
        {/* observed history */}
        <path
          d="M12 96 C 44 88, 74 100, 104 86"
          stroke={INK}
          strokeWidth={1.5}
          fill="none"
        />
        <line x1={104} y1={14} x2={104} y2={106} stroke={FAINT} strokeDasharray="3 3" />
        <text x={110} y={22} fontFamily={MONO} fontSize={7} fill={FAINT} letterSpacing="1">
          NOW
        </text>
        <circle r={3} fill={ACCENT}>
          <animateMotion
            path="M12 90 C 70 80, 120 91, 176 74 C 232 58, 290 58, 368 42"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g transform="translate(0, 152)">
        {[
          { k: "RISK", v: "medium", c: ACCENT },
          { k: "COVERAGE", v: "90.4%", c: GREEN },
          { k: "REORDER", v: "+1,240", c: INK },
        ].map((c, i) => (
          <g key={c.k} transform={`translate(${i * 130}, 0)`}>
            <rect width={120} height={38} rx={2} fill={FILL} stroke={RULE} />
            <text x={10} y={15} fontFamily={MONO} fontSize={7} fill={FAINT} letterSpacing="1.5">
              {c.k}
            </text>
            <text x={10} y={30} fontFamily={MONO} fontSize={12} fill={c.c}>
              {c.v}
            </text>
          </g>
        ))}
      </g>

      <text x={0} y={230} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        XGBOOST · QUANTILE + SPLIT CONFORMAL · STREAMLIT
      </text>
    </svg>
  );
}

/** Civic Sense — a pin on a map becomes a tracked, resolved issue. */
function Civic() {
  return (
    <svg {...svg}>
      <text x={0} y={10} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        REPORT → TRACK → RESOLVE
      </text>

      <g transform="translate(0, 20)">
        <rect width={196} height={118} rx={2} fill={FILL} stroke={RULE} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={i * 33 + 16} y1={1} x2={i * 33 + 16} y2={117} stroke={RULE} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={`h${i}`} x1={1} y1={i * 30 + 14} x2={195} y2={i * 30 + 14} stroke={RULE} />
        ))}
        <path d="M20 96 L70 60 L128 78 L184 40" stroke={FAINT} strokeWidth={1.2} fill="none" />
        {[
          { x: 58, y: 44, c: ACCENT },
          { x: 118, y: 82, c: GREEN },
          { x: 150, y: 52, c: DIM },
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${p.y})`}>
            <circle r={4} fill={p.c} />
            <circle r={4} fill="none" stroke={p.c} opacity={0.5}>
              <animate
                attributeName="r"
                values="4;13"
                dur="2.2s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0"
                dur="2.2s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
        <text x={10} y={110} fontFamily={MONO} fontSize={8} fill={DIM} letterSpacing="1">
          LEAFLET · POSTGIS
        </text>
      </g>

      <g transform="translate(208, 20)">
        <rect width={172} height={118} rx={2} fill={FILL} stroke={RULE} />
        <text x={12} y={17} fontFamily={MONO} fontSize={8} fill={FAINT} letterSpacing="1.5">
          ADMIN DASHBOARD
        </text>
        {[
          { s: "pending", w: 132, c: ACCENT },
          { s: "in progress", w: 88, c: DIM },
          { s: "resolved", w: 148, c: GREEN },
        ].map((r, i) => (
          <g key={r.s} transform={`translate(12, ${30 + i * 28})`}>
            <text x={0} y={8} fontFamily={MONO} fontSize={8} fill={DIM}>
              {r.s}
            </text>
            <rect y={13} width={148} height={3} rx={1.5} fill="#0a0a0a" />
            <rect y={13} width={r.w} height={3} rx={1.5} fill={r.c}>
              <animate
                attributeName="width"
                values={`0;${r.w}`}
                dur="1.8s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </g>

      <g transform="translate(0, 152)">
        {["PHOTO", "GEO-PIN", "UPVOTE", "STATUS"].map((t, i) => (
          <g key={t} transform={`translate(${i * 96}, 0)`}>
            <rect width={88} height={34} rx={2} fill={FILL} stroke={RULE} />
            <text
              x={44}
              y={21}
              fontFamily={MONO}
              fontSize={9}
              fill={DIM}
              textAnchor="middle"
              letterSpacing="1"
            >
              {t}
            </text>
          </g>
        ))}
      </g>

      <text x={0} y={230} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        REACT · FASTAPI · SUPABASE · POSTGIS
      </text>
    </svg>
  );
}

/** Portfolio — the editorial grid and its performance budget. */
function Portfolio() {
  return (
    <svg {...svg}>
      <text x={0} y={10} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        ~/PORTFOLIO · BUILD
      </text>

      <g transform="translate(0, 20)">
        <rect width={380} height={118} rx={2} fill={FILL} stroke={RULE} />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={i * 76 + 76}
            y1={1}
            x2={i * 76 + 76}
            y2={117}
            stroke={RULE}
            strokeDasharray="2 5"
          />
        ))}
        <rect x={16} y={20} width={190} height={26} rx={1} fill={ACCENT} opacity={0.16} />
        <text x={22} y={39} fontFamily="Georgia, serif" fontSize={22} fill={INK} fontStyle="italic">
          Achyuta
        </text>
        <rect x={16} y={56} width={120} height={3} rx={1.5} fill={FAINT} />
        <rect x={16} y={66} width={168} height={3} rx={1.5} fill={RULE} />
        <rect x={16} y={76} width={140} height={3} rx={1.5} fill={RULE} />

        <g transform="translate(232, 20)">
          <rect width={132} height={78} rx={2} fill="#0a0a0a" stroke={RULE} />
          <text x={10} y={16} fontFamily={MONO} fontSize={7} fill={FAINT} letterSpacing="1.5">
            LIGHTHOUSE
          </text>
          <circle cx={40} cy={48} r={20} stroke={RULE} strokeWidth={3} fill="none" />
          <circle
            cx={40}
            cy={48}
            r={20}
            stroke={GREEN}
            strokeWidth={3}
            fill="none"
            strokeDasharray="126"
            strokeDashoffset={8}
            transform="rotate(-90 40 48)"
            strokeLinecap="round"
          />
          <text
            x={40}
            y={52}
            fontFamily={MONO}
            fontSize={13}
            fill={GREEN}
            textAnchor="middle"
          >
            100
          </text>
          <text x={72} y={40} fontFamily={MONO} fontSize={8} fill={DIM}>
            perf
          </text>
          <text x={72} y={53} fontFamily={MONO} fontSize={8} fill={DIM}>
            a11y
          </text>
          <text x={72} y={66} fontFamily={MONO} fontSize={8} fill={DIM}>
            seo
          </text>
        </g>
      </g>

      <g transform="translate(0, 152)">
        {[
          { k: "INP", v: "< 50ms", c: GREEN },
          { k: "JS SHIPPED", v: "0 libs", c: ACCENT },
          { k: "FONTS", v: "3 subset", c: INK },
        ].map((c, i) => (
          <g key={c.k} transform={`translate(${i * 130}, 0)`}>
            <rect width={120} height={38} rx={2} fill={FILL} stroke={RULE} />
            <text x={10} y={15} fontFamily={MONO} fontSize={7} fill={FAINT} letterSpacing="1.5">
              {c.k}
            </text>
            <text x={10} y={30} fontFamily={MONO} fontSize={12} fill={c.c}>
              {c.v}
            </text>
          </g>
        ))}
      </g>

      <text x={0} y={230} fontFamily={MONO} fontSize={9} fill={FAINT} letterSpacing="2">
        NEXT.JS · TYPESCRIPT · VANILLA CSS · VERCEL
      </text>
    </svg>
  );
}

export const previews: Record<string, () => React.JSX.Element> = {
  sahayak: Sahayak,
  janai: JanAI,
  cognify: Cognify,
  civic: Civic,
  portfolio: Portfolio,
};
