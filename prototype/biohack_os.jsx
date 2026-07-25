import { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Sun, Moon, Droplets, Clock, Star, Heart, Brain, Target, Activity, Dna, Leaf, Snowflake, Flame, Zap, Check, Lock, Send, TrendingUp, ChevronRight } from "lucide-react";

const ICON_MAP = { sun:Sun, moon:Moon, water:Droplets, clock:Clock, star:Star, heart:Heart, brain:Brain, target:Target, act:Activity, dna:Dna, leaf:Leaf, snow:Snowflake, flame:Flame, zap:Zap, trend:TrendingUp };

const LAYERS = [
  { id:1, name:"Survival basics", emoji:"🌱", color:"#1D9E75", days:7,
    habits:[
      {id:"l1a",name:"Wake at consistent time",icon:"sun"},
      {id:"l1b",name:"Drink 2.5 L water",icon:"water"},
      {id:"l1c",name:"10+ min morning sunlight",icon:"sun"},
      {id:"l1d",name:"7.5+ hours sleep",icon:"moon"},
      {id:"l1e",name:"Eat 2+ meals today",icon:"star"},
    ],
    proto:"Fix your wake time first — everything follows. Sunlight within 30 min sets your cortisol/melatonin cycle. At 46 kg, total calories matter more than diet quality right now.",
  },
  { id:2, name:"Structural foundation", emoji:"🏗️", color:"#378ADD", days:10,
    habits:[
      {id:"l2a",name:"20–30 min movement",icon:"act"},
      {id:"l2b",name:"Hit protein target (~75 g)",icon:"heart"},
      {id:"l2c",name:"Fixed meal timing",icon:"clock"},
      {id:"l2d",name:"Reels under 1 hour",icon:"zap"},
    ],
    proto:"Resistance training + adequate protein is the fastest lever for testosterone recovery. Meal timing regulates insulin and cortisol rhythm independently of what you eat.",
  },
  { id:3, name:"Micronutrient fix", emoji:"🧪", color:"#BA7517", days:14,
    habits:[
      {id:"l3a",name:"D3 + K2 with a meal",icon:"sun"},
      {id:"l3b",name:"Magnesium glycinate 300 mg",icon:"star"},
      {id:"l3c",name:"Isabgol or fiber source",icon:"leaf"},
      {id:"l3d",name:"Bloodwork done or booked",icon:"water"},
    ],
    proto:"D3 deficiency is near-universal for indoor Indians. Magnesium runs 300+ enzymatic reactions. Fix deficiencies before stacking performance supplements.",
  },
  { id:4, name:"Hormonal optimization", emoji:"⚡", color:"#D85A30", days:21,
    habits:[
      {id:"l4a",name:"Cold shower 60–90 sec",icon:"snow"},
      {id:"l4b",name:"KSM-66 ashwagandha 300 mg",icon:"leaf"},
      {id:"l4c",name:"No junk food today",icon:"star"},
      {id:"l4d",name:"Resistance training session",icon:"zap"},
    ],
    proto:"At 20, your testosterone potential is at its peak. Stop suppressing it with junk food and zero training. Compound lifts, cold exposure, and ashwagandha are the fastest legal drivers.",
  },
  { id:5, name:"Cognitive stack", emoji:"🧠", color:"#7F77DD", days:21,
    habits:[
      {id:"l5a",name:"L-Tyrosine 500 mg (AM, empty stomach)",icon:"zap"},
      {id:"l5b",name:"Creatine 5 g daily",icon:"target"},
      {id:"l5c",name:"2 hr deep work block",icon:"brain"},
      {id:"l5d",name:"10 min NSDR or yoga nidra",icon:"star"},
    ],
    proto:"L-Tyrosine + Creatine is the most evidence-backed cognitive stack. Creatine improves brain energy under sleep deprivation. Deep work trains attentional control like a muscle.",
  },
  { id:6, name:"Advanced biohacking", emoji:"🔬", color:"#0D7E89", days:30,
    habits:[
      {id:"l6a",name:"Track HRV or recovery score",icon:"act"},
      {id:"l6b",name:"Sauna or heat exposure 20–30 min",icon:"flame"},
      {id:"l6c",name:"Log glucose response to meals",icon:"trend"},
      {id:"l6d",name:"Red light or unfiltered sun 10 min",icon:"sun"},
    ],
    proto:"HRV is your single most actionable biometric — it tells you how hard to push that day. Without data, you're guessing. Sauna drives GH release and cardiovascular adaptation.",
  },
  { id:7, name:"Longevity mode", emoji:"⏳", color:"#9B3085", days:30,
    habits:[
      {id:"l7a",name:"NMN or NR supplement",icon:"dna"},
      {id:"l7b",name:"Zone 2 cardio 45 min",icon:"heart"},
      {id:"l7c",name:"20 min meditation",icon:"brain"},
      {id:"l7d",name:"Log sleep stages",icon:"moon"},
    ],
    proto:"Zone 2 cardio is the most evidence-backed longevity intervention — it builds mitochondrial density. NMN/NR support NAD+ for cellular repair at the molecular level.",
  },
  { id:8, name:"Frontier protocols", emoji:"🚀", color:"#D47B10", days:45,
    habits:[
      {id:"l8a",name:"18–24 hr extended fast",icon:"clock"},
      {id:"l8b",name:"Full biomarker panel done",icon:"act"},
      {id:"l8c",name:"Research peptide log entry",icon:"star"},
      {id:"l8d",name:"Ice bath 10–15 min",icon:"snow"},
    ],
    proto:"Experimental territory — document everything. Extended fasting activates autophagy (cellular cleanup). Peptides like BPC-157 require serious research before use.",
  },
];

const todayStr = () => new Date().toISOString().split("T")[0];
const getPastDays = (n) => Array.from({ length: n }, (_, i) => {
  const d = new Date(); d.setDate(d.getDate() - (n - 1 - i));
  return d.toISOString().split("T")[0];
});
const shortDate = (s) => s ? s.slice(5).replace("-", "/") : "";

function Ring({ pct, size = 90, stroke = 9, color }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${circ} ${circ}`} strokeDashoffset={off}
        strokeLinecap="round" style={{ transition: "stroke-dashoffset .5s ease" }} />
    </svg>
  );
}

function HIcon({ name, size = 14 }) {
  const I = ICON_MAP[name] || Star;
  return <I size={size} />;
}

const CHALLENGES = ["Low energy and motivation", "Can't stop scrolling", "Poor sleep quality", "No discipline — can't start", "All of the above"];
const TIMES = ["Under 30 min (minimum)", "30–60 min (realistic)", "1–2 hours (serious)", "2+ hours (all in)"];

export default function App() {
  const [screen, setScreen] = useState("onboard");
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState({ name: "", challenge: "", time: "" });
  const [user, setUser] = useState(null);
  const [layer, setLayer] = useState(1);
  const [log, setLog] = useState({});
  const [tab, setTab] = useState("today");
  const [msgs, setMsgs] = useState([]);
  const [aiInput, setAiInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const chatEnd = useRef(null);

  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const L = LAYERS[layer - 1];
  const today = todayStr();
  const todayDone = L.habits.filter(h => log[today]?.[h.id]).length;
  const todayPct = Math.round((todayDone / L.habits.length) * 100);
  const chartData = getPastDays(7).map(d => ({
    date: shortDate(d),
    pct: Math.round((L.habits.filter(h => log[d]?.[h.id]).length / L.habits.length) * 100),
  }));
  const weekAvg = Math.round(chartData.reduce((s, d) => s + d.pct, 0) / 7);
  const totalDays = Object.keys(log).length;

  const finishOnboard = () => {
    setUser({ name: draft.name.trim() || "User", challenge: draft.challenge, time: draft.time });
    setScreen("app");
  };

  const toggleHabit = (hid) => {
    const nl = { ...log, [today]: { ...(log[today] || {}), [hid]: !log[today]?.[hid] } };
    setLog(nl);
    checkUnlock(nl);
  };

  const checkUnlock = (nl) => {
    if (layer >= 8) return;
    const days = getPastDays(L.days);
    const filled = days.filter(d => nl[d]);
    if (filled.length < 3) return;
    const avg = filled.reduce((s, d) => {
      return s + L.habits.filter(h => nl[d]?.[h.id]).length / L.habits.length;
    }, 0) / filled.length;
    if (avg >= 0.8) setUnlocked(true);
  };

  const advanceLayer = () => {
    setLayer(prev => Math.min(prev + 1, 8));
    setUnlocked(false);
    setTab("today");
    setMsgs([]);
  };

  const sendMsg = async (msg) => {
    if (!msg.trim() || aiLoading) return;
    const done = L.habits.filter(h => log[today]?.[h.id]).length;
    const nm = [...msgs, { role: "user", content: msg }];
    setMsgs(nm); setAiInput(""); setAiLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6", max_tokens: 1000,
          system: `You are a no-fluff performance coach. User: ${user?.name || "User"}, 20yo male, 5'3", 46 kg, Pune India. Currently on Layer ${layer}: "${L.name}". Today: ${done}/${L.habits.length} habits done. Protocol: ${L.proto}. Be direct, evidence-based, specific. Max 100 words.`,
          messages: nm,
        }),
      });
      const data = await res.json();
      setMsgs([...nm, { role: "assistant", content: data.content[0].text }]);
    } catch {
      setMsgs([...nm, { role: "assistant", content: "Connection issue — try again." }]);
    }
    setAiLoading(false);
  };

  const QUICK_QS = [
    `What's the single most important habit for layer ${layer}?`,
    "Why am I not seeing results yet?",
    "Best time of day to take my supplements?",
    "How do I push through low motivation days?",
  ];

  const S = {
    wrap: { height: 600, display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "system-ui,-apple-system,sans-serif", fontSize: 13 },
    card: { background: "var(--surface-1)", border: ".5px solid var(--border)", borderRadius: 10 },
    btn: { background: "transparent", border: ".5px solid var(--border-strong)", borderRadius: "var(--radius)", padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: 13, color: "var(--text-secondary)", transition: "all .15s" },
    opt: { padding: "11px 14px", marginBottom: 8, borderRadius: "var(--radius)", cursor: "pointer", fontSize: 13, transition: "all .15s" },
    input: { width: "100%", background: "var(--surface-1)", border: ".5px solid var(--border)", borderRadius: "var(--radius)", padding: "10px 13px", fontFamily: "inherit", fontSize: 13, color: "var(--text-primary)", outline: "none", boxSizing: "border-box" },
  };

  // ONBOARD
  if (screen === "onboard") return (
    <div style={{ ...S.wrap, alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
      <style>{`@keyframes fi{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}} .fi{animation:fi .2s ease}`}</style>
      <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
        {[0,1,2].map(i => <div key={i} style={{ height: 3, width: i === step ? 24 : 14, borderRadius: 2, background: i <= step ? "#1D9E75" : "var(--border)", transition: "all .3s" }} />)}
      </div>
      <div style={{ width: "100%", maxWidth: 340 }}>
        {step === 0 && <div className="fi">
          <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Step 1 of 3</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)", marginBottom: 5 }}>What's your name?</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 18 }}>We'll build your personalised 8-layer upgrade path.</div>
          <input style={{ ...S.input, marginBottom: 14 }} value={draft.name} autoFocus
            onChange={e => setDraft({ ...draft, name: e.target.value })}
            onKeyDown={e => e.key === "Enter" && draft.name.trim() && setStep(1)}
            placeholder="Your name" />
          <button style={{ ...S.btn, width: "100%", fontWeight: 500, opacity: draft.name.trim() ? 1 : .45 }}
            onClick={() => draft.name.trim() && setStep(1)}>Continue →</button>
        </div>}
        {step === 1 && <div className="fi">
          <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Step 2 of 3</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)", marginBottom: 5 }}>Biggest challenge right now?</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>Be honest — this shapes your protocol.</div>
          {CHALLENGES.map(c => (
            <div key={c} style={{ ...S.opt, background: draft.challenge === c ? "#1D9E7514" : "var(--surface-1)", border: draft.challenge === c ? "1px solid #1D9E75" : ".5px solid var(--border)", color: draft.challenge === c ? "var(--text-primary)" : "var(--text-secondary)" }}
              onClick={() => setDraft({ ...draft, challenge: c })}>{c}</div>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button style={S.btn} onClick={() => setStep(0)}>← Back</button>
            <button style={{ ...S.btn, flex: 1, fontWeight: 500, opacity: draft.challenge ? 1 : .45 }} onClick={() => draft.challenge && setStep(2)}>Continue →</button>
          </div>
        </div>}
        {step === 2 && <div className="fi">
          <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Step 3 of 3</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)", marginBottom: 5 }}>Daily time available?</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>For habits and protocols combined.</div>
          {TIMES.map(t => (
            <div key={t} style={{ ...S.opt, background: draft.time === t ? "#1D9E7514" : "var(--surface-1)", border: draft.time === t ? "1px solid #1D9E75" : ".5px solid var(--border)", color: draft.time === t ? "var(--text-primary)" : "var(--text-secondary)" }}
              onClick={() => setDraft({ ...draft, time: t })}>{t}</div>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button style={S.btn} onClick={() => setStep(1)}>← Back</button>
            <button style={{ ...S.btn, flex: 1, fontWeight: 500, opacity: draft.time ? 1 : .45 }} onClick={() => draft.time && finishOnboard()}>Start protocol →</button>
          </div>
        </div>}
      </div>
    </div>
  );

  // UNLOCK SCREEN
  if (unlocked && layer < 8) {
    const nL = LAYERS[layer];
    return (
      <div style={{ ...S.wrap, alignItems: "center", justifyContent: "center", padding: 28, textAlign: "center" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>{nL.emoji}</div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Layer {layer} complete</div>
        <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)", marginBottom: 6 }}>{nL.name} unlocked</div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", maxWidth: 280, marginBottom: 20, lineHeight: 1.7 }}>You've held 80%+ consistency. You've earned the next level.</div>
        <div style={{ ...S.card, padding: 14, maxWidth: 300, marginBottom: 22, textAlign: "left" }}>
          <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 7 }}>Incoming protocol</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{nL.proto}</div>
        </div>
        <button style={{ ...S.btn, fontWeight: 500, borderColor: nL.color, color: nL.color }} onClick={advanceLayer}>Enter layer {layer + 1} →</button>
      </div>
    );
  }

  // MAIN APP
  return (
    <div style={S.wrap}>
      <style>{`@keyframes blink{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} @keyframes fi{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}} .fi{animation:fi .2s ease}`}</style>

      {/* Header */}
      <div style={{ padding: "11px 16px 8px", borderBottom: ".5px solid var(--border)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
          <div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1 }}>Biohack OS</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{user?.name}</div>
          </div>
          <div style={{ background: L.color + "18", border: `1px solid ${L.color}45`, borderRadius: 20, padding: "3px 10px", fontSize: 12, color: L.color, fontWeight: 500 }}>
            {L.emoji} Layer {layer}
          </div>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {LAYERS.map((l, i) => (
            <div key={l.id} style={{ flex: 1, height: 2, borderRadius: 1, background: i < layer - 1 ? l.color : i === layer - 1 ? l.color + "90" : "var(--border)", transition: "background .3s" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* TODAY */}
        {tab === "today" && (
          <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
            {/* Stats */}
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <div style={{ ...S.card, padding: 12, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: 96, flexShrink: 0 }}>
                <Ring pct={todayPct} color={L.color} />
                <div style={{ position: "absolute", textAlign: "center" }}>
                  <div style={{ fontSize: 17, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1 }}>{todayPct}%</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)" }}>today</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                <div style={{ ...S.card, padding: "8px 12px", flex: 1 }}>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 1 }}>7-day avg</div>
                  <div style={{ fontSize: 20, fontWeight: 500, color: weekAvg >= 80 ? "var(--text-success)" : "var(--text-primary)" }}>{weekAvg}%</div>
                </div>
                <div style={{ ...S.card, padding: "8px 12px", flex: 1 }}>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 1 }}>Done today</div>
                  <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)" }}>{todayDone}<span style={{ fontSize: 12, color: "var(--text-muted)" }}>/{L.habits.length}</span></div>
                </div>
              </div>
            </div>

            {/* Unlock bar */}
            <div style={{ ...S.card, padding: "11px 14px", marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1 }}>{layer < 8 ? `Layer ${layer + 1} unlock` : "Max layer"}</span>
                <span style={{ fontSize: 10, color: weekAvg >= 80 ? "var(--text-success)" : "var(--text-secondary)", fontWeight: 500 }}>{weekAvg >= 80 ? "✓ Eligible" : `${weekAvg} / 80% needed`}</span>
              </div>
              <div style={{ background: "var(--border)", borderRadius: 4, height: 4, overflow: "hidden" }}>
                <div style={{ background: weekAvg >= 80 ? "var(--fill-success)" : L.color, height: "100%", width: `${Math.min(weekAvg, 100)}%`, borderRadius: 4, transition: "width .5s ease" }} />
              </div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5 }}>Maintain 80%+ for {L.days} days to advance</div>
            </div>

            {/* Habits */}
            <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 9 }}>Today's habits</div>
            {L.habits.map(h => {
              const done = !!log[today]?.[h.id];
              return (
                <div key={h.id} onClick={() => toggleHabit(h.id)}
                  style={{ display: "flex", alignItems: "center", gap: 11, background: done ? L.color + "0D" : "var(--surface-1)", border: done ? `1px solid ${L.color}40` : ".5px solid var(--border)", borderRadius: 10, padding: "11px 13px", marginBottom: 7, cursor: "pointer", transition: "all .15s" }}>
                  <div style={{ width: 19, height: 19, borderRadius: 10, border: `1.5px solid ${done ? L.color : "var(--border-strong)"}`, background: done ? L.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s", flexShrink: 0 }}>
                    {done && <Check size={11} color="#fff" />}
                  </div>
                  <div style={{ flex: 1, fontSize: 13, color: done ? "var(--text-secondary)" : "var(--text-primary)", textDecoration: done ? "line-through" : "none", transition: "all .2s" }}>{h.name}</div>
                  <div style={{ color: "var(--text-muted)" }}><HIcon name={h.icon} size={14} /></div>
                </div>
              );
            })}

            {/* Protocol */}
            <div style={{ ...S.card, padding: "11px 14px", marginTop: 4 }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 7 }}>Layer protocol</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{L.proto}</div>
            </div>
          </div>
        )}

        {/* PROGRESS */}
        {tab === "progress" && (
          <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 13 }}>Progress</div>
            <div style={{ ...S.card, padding: "13px 12px 6px", marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>7-day completion</div>
              <ResponsiveContainer width="100%" height={110}>
                <BarChart data={chartData} barSize={22} margin={{ top: 0, right: 0, left: -24, bottom: 0 }}>
                  <XAxis dataKey="date" tick={{ fill: "var(--text-muted)", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "var(--surface-2)", border: ".5px solid var(--border)", borderRadius: 8, fontSize: 12, color: "var(--text-primary)" }} formatter={v => [`${v}%`, "Done"]} />
                  <Bar dataKey="pct" radius={[3, 3, 0, 0]}>
                    {chartData.map((d, i) => <Cell key={i} fill={d.pct >= 80 ? "#1D9E75" : d.pct > 0 ? L.color : "var(--border)"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
              {[["Layer", `${layer}/8`], ["7-day avg", `${weekAvg}%`], ["Days tracked", totalDays]].map(([label, val]) => (
                <div key={label} style={{ ...S.card, padding: "9px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 500, color: "var(--text-primary)" }}>{val}</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 9 }}>Upgrade path</div>
            {LAYERS.map((l, i) => {
              const isA = i === layer - 1, isD = i < layer - 1, isLk = i > layer - 1;
              return (
                <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 10, background: isA ? l.color + "0D" : "var(--surface-1)", border: isA ? `1px solid ${l.color}50` : ".5px solid var(--border)", borderRadius: 10, padding: "9px 12px", marginBottom: 6, opacity: isLk ? .45 : 1, transition: "all .2s" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: isD ? l.color + "20" : isA ? l.color + "15" : "var(--border)", border: `1.5px solid ${isD || isA ? l.color : "var(--border-strong)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>
                    {isD ? <Check size={12} color={l.color} /> : l.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: isA ? 500 : 400, color: isD ? "var(--text-secondary)" : isA ? "var(--text-primary)" : "var(--text-secondary)" }}>{l.id}. {l.name}</div>
                    <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 1 }}>{isD ? "Completed" : isA ? `Active — ${l.days}-day protocol` : `${l.days}-day protocol`}</div>
                  </div>
                  {isA && <span style={{ background: l.color + "20", color: l.color, fontSize: 9, borderRadius: 4, padding: "2px 6px", fontWeight: 500 }}>NOW</span>}
                  {isLk && <Lock size={12} color="var(--text-muted)" />}
                </div>
              );
            })}
          </div>
        )}

        {/* COACH */}
        {tab === "coach" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 14, overflow: "hidden" }}>
            <div style={{ flexShrink: 0, marginBottom: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>AI coach</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Layer {layer}: {L.name}</div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", marginBottom: 10, minHeight: 0 }}>
              {msgs.length === 0 && (
                <div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 9 }}>Quick questions</div>
                  {QUICK_QS.map(q => (
                    <div key={q} style={{ ...S.card, padding: "9px 13px", marginBottom: 7, cursor: "pointer", fontSize: 12, color: "var(--text-secondary)" }}
                      onClick={() => sendMsg(q)}>{q}</div>
                  ))}
                </div>
              )}
              {msgs.map((m, i) => (
                <div key={i} className="fi" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 9 }}>
                  <div style={{ maxWidth: "86%", background: m.role === "user" ? L.color : "var(--surface-1)", color: m.role === "user" ? "#fff" : "var(--text-primary)", borderRadius: 10, padding: "9px 13px", fontSize: 13, lineHeight: 1.6, border: m.role === "assistant" ? ".5px solid var(--border)" : "none" }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {aiLoading && (
                <div style={{ display: "flex", gap: 5, padding: "8px 13px", alignItems: "center" }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 3, background: L.color, animation: `blink 1s ease-in-out ${i * .2}s infinite` }} />)}
                </div>
              )}
              <div ref={chatEnd} />
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <input value={aiInput} onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMsg(aiInput)}
                placeholder="Ask your coach…"
                style={{ ...S.input, flex: 1 }} />
              <button onClick={() => sendMsg(aiInput)}
                style={{ ...S.btn, flexShrink: 0, padding: "0 14px", borderColor: aiInput.trim() && !aiLoading ? L.color : "var(--border)", color: aiInput.trim() && !aiLoading ? L.color : "var(--text-muted)" }}>
                <Send size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ borderTop: ".5px solid var(--border)", display: "flex", background: "var(--surface-1)", flexShrink: 0 }}>
        {[{ id: "today", Icon: Zap, label: "Today" }, { id: "progress", Icon: TrendingUp, label: "Progress" }, { id: "coach", Icon: Brain, label: "Coach" }].map(({ id, Icon, label }) => (
          <button key={id} onClick={() => setTab(id)}
            style={{ flex: 1, background: "transparent", border: "none", borderTop: tab === id ? `2px solid ${L.color}` : "2px solid transparent", padding: "9px 0 7px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, transition: "all .15s" }}>
            <Icon size={17} color={tab === id ? L.color : "var(--text-muted)"} />
            <span style={{ fontSize: 10, color: tab === id ? L.color : "var(--text-muted)", fontWeight: tab === id ? 500 : 400 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
