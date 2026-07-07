const ironmanTrainingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ironman 70.3 Training Plan</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0e0e0f;
    --surface: #161618;
    --card: #1e1e21;
    --border: #2e2e33;
    --muted: #52525c;
    --text: #e8e8ec;
    --sub: #a0a0aa;
    --summer: #f97316;
    --fall: #6366f1;
    --spring: #22d3ee;
    --warn: #ef4444;
    --ok: #22c55e;
    --gold: #eab308;
  }

  body {
    background: var(--black);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    min-height: 100vh;
  }

  nav {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 32px;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--text);
    padding: 14px 0;
    white-space: nowrap;
  }
  .nav-logo span { color: var(--summer); }
  .nav-tabs {
    display: flex;
    gap: 2px;
    flex: 1;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .nav-tabs::-webkit-scrollbar { display: none; }
  .tab-btn {
    background: none;
    border: none;
    color: var(--muted);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 14px 16px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color .2s, border-color .2s;
    white-space: nowrap;
  }
  .tab-btn:hover { color: var(--text); }
  .tab-btn.active { color: var(--text); border-bottom-color: var(--summer); }

  main { padding: 28px 24px; max-width: 1100px; margin: 0 auto; }
  .section { display: none; }
  .section.active { display: block; }

  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
  }
  .card-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 17px;
    letter-spacing: 1.5px;
    margin-bottom: 14px;
    color: var(--text);
  }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .gap-16 { display: flex; flex-direction: column; gap: 16px; }

  .hero {
    background: linear-gradient(135deg, #1a1008 0%, #1a0a18 50%, #081018 100%);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .hero-left h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 42px;
    letter-spacing: 3px;
    line-height: 1;
    margin-bottom: 6px;
  }
  .hero-left p { color: var(--sub); font-size: 13px; }
  .hero-stats { display: flex; gap: 28px; }
  .stat-box { text-align: center; }
  .stat-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 28px;
    font-weight: 600;
    display: block;
    line-height: 1;
  }
  .stat-label { font-size: 11px; color: var(--sub); text-transform: uppercase; letter-spacing: 1px; }

  .phase-pill {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .8px;
    text-transform: uppercase;
  }
  .phase-summer { background: rgba(249,115,22,.15); color: var(--summer); border: 1px solid rgba(249,115,22,.3); }
  .phase-fall { background: rgba(99,102,241,.15); color: var(--fall); border: 1px solid rgba(99,102,241,.3); }
  .phase-spring { background: rgba(34,211,238,.15); color: var(--spring); border: 1px solid rgba(34,211,238,.3); }

  .week-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
  }
  .day-col { display: flex; flex-direction: column; gap: 6px; }
  .day-header {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--sub);
    text-align: center;
    padding: 6px 0;
    text-transform: uppercase;
  }
  .day-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 8px 6px;
    min-height: 56px;
    font-size: 11px;
    line-height: 1.4;
    color: var(--sub);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
  .day-block.gym { border-color: rgba(234,179,8,.3); background: rgba(234,179,8,.05); }
  .day-block.run { border-color: rgba(34,197,94,.3); background: rgba(34,197,94,.05); }
  .day-block.ride { border-color: rgba(99,102,241,.3); background: rgba(99,102,241,.05); }
  .day-block.swim { border-color: rgba(34,211,238,.3); background: rgba(34,211,238,.05); }
  .day-block.rest { opacity: .4; }
  .day-block .icon { font-size: 16px; }
  .day-block .label { color: var(--text); font-weight: 500; font-size: 11px; }
  .day-block .sub { color: var(--muted); font-size: 10px; }

  .pt-zone {
    background: var(--surface);
    border-left: 3px solid var(--warn);
    border-radius: 0 8px 8px 0;
    padding: 12px 14px;
    margin-bottom: 10px;
  }
  .pt-zone h4 { font-size: 13px; font-weight: 600; margin-bottom: 6px; color: var(--text); }
  .pt-zone ul { list-style: none; padding: 0; }
  .pt-zone ul li {
    padding: 4px 0;
    color: var(--sub);
    font-size: 12px;
    display: flex;
    align-items: baseline;
    gap: 7px;
  }
  .pt-zone ul li::before { content: "→"; color: var(--warn); font-size: 11px; flex-shrink: 0; }
  .ok-zone { border-left-color: var(--ok); }
  .ok-zone ul li::before { color: var(--ok); content: "✓"; }
  .gold-zone { border-left-color: var(--gold); }
  .gold-zone ul li::before { color: var(--gold); content: "⚡"; }

  .prog-bar-wrap { margin-bottom: 12px; }
  .prog-bar-label { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px; }
  .prog-bar-label span:first-child { color: var(--text); }
  .prog-bar-label span:last-child { color: var(--muted); font-family: 'JetBrains Mono', monospace; }
  .prog-bar { background: var(--border); height: 6px; border-radius: 3px; overflow: hidden; }
  .prog-bar-fill { height: 100%; border-radius: 3px; transition: width .6s ease; }

  .flag-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .flag-row:last-child { border-bottom: none; }
  .flag-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .dot-red { background: var(--warn); box-shadow: 0 0 6px var(--warn); }
  .dot-gold { background: var(--gold); box-shadow: 0 0 6px var(--gold); }
  .dot-green { background: var(--ok); box-shadow: 0 0 6px var(--ok); }
  .flag-name { font-weight: 500; font-size: 13px; min-width: 160px; }
  .flag-note { color: var(--sub); font-size: 12px; flex: 1; }
  .flag-status { font-size: 11px; font-weight: 600; white-space: nowrap; }

  .commute-banner {
    background: rgba(99,102,241,.08);
    border: 1px solid rgba(99,102,241,.25);
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .commute-icon { font-size: 28px; }
  .commute-text h3 { font-size: 14px; font-weight: 600; margin-bottom: 3px; }
  .commute-text p { font-size: 12px; color: var(--sub); }

  .timeline { position: relative; padding-left: 28px; }
  .timeline::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: var(--border);
  }
  .tl-item { position: relative; margin-bottom: 20px; }
  .tl-dot {
    position: absolute;
    left: -24px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid;
    background: var(--black);
  }
  .tl-dot.summer { border-color: var(--summer); }
  .tl-dot.fall { border-color: var(--fall); }
  .tl-dot.spring { border-color: var(--spring); }
  .tl-month { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted); margin-bottom: 3px; }
  .tl-title { font-weight: 600; font-size: 13px; margin-bottom: 4px; }
  .tl-body { font-size: 12px; color: var(--sub); }

  .vol-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 12px;
    margin: 3px;
  }
  .vol-chip .chip-icon { font-size: 14px; }

  @media (max-width: 680px) {
    .grid-2, .grid-3 { grid-template-columns: 1fr; }
    .hero { flex-direction: column; }
    .hero-stats { flex-wrap: wrap; gap: 16px; }
    .week-grid { grid-template-columns: repeat(7, 1fr); }
    .day-block { padding: 4px 2px; min-height: 48px; font-size: 10px; }
    .day-block .icon { font-size: 13px; }
    main { padding: 16px 12px; }
    nav { padding: 0 12px; }
  }
</style>
</head>
<body>

<nav>
  <div class="nav-logo">70<span>.</span>3</div>
  <div class="nav-tabs">
    <button class="tab-btn active" onclick="showTab('overview')">Overview</button>
    <button class="tab-btn" onclick="showTab('summer')">🌞 Summer</button>
    <button class="tab-btn" onclick="showTab('fall')">🍂 Fall</button>
    <button class="tab-btn" onclick="showTab('spring')">🌿 Spring</button>
    <button class="tab-btn" onclick="showTab('rehab')">🩺 Rehab</button>
  </div>
</nav>

<main>

<div class="section active" id="tab-overview">

  <div class="hero">
    <div class="hero-left">
      <h1>Ironman <span style="color:var(--summer)">70.3</span></h1>
      <p>Full season training plan · 3-phase build · Rehab-integrated</p>
      <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
        <span class="phase-pill phase-summer">Summer</span>
        <span class="phase-pill phase-fall">Fall</span>
        <span class="phase-pill phase-spring">Spring</span>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-box">
        <span class="stat-num" style="color:var(--summer)">8</span>
        <span class="stat-label">Weeks Summer</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" style="color:var(--fall)">~16</span>
        <span class="stat-label">Weeks Fall</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" style="color:var(--spring)">~16</span>
        <span class="stat-label">Weeks Spring</span>
      </div>
      <div class="stat-box">
        <span class="stat-num">3</span>
        <span class="stat-label">Disciplines</span>
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div class="card-title">⚠ Active Concerns — Priority List</div>
    <div class="flag-row">
      <div class="flag-dot dot-red"></div>
      <div class="flag-name">Cervical (C-fiber) / Neck</div>
      <div class="flag-note">Tightness from shoulder dislocation; jaw + scalp symptoms. Highest priority — must stabilize before swimming & aero bike position.</div>
      <div class="flag-status" style="color:var(--warn)">BLOCK</div>
    </div>
    <div class="flag-row">
      <div class="flag-dot dot-red"></div>
      <div class="flag-name">Shoulder (Post-Dislocation)</div>
      <div class="flag-note">Capsule/rotator cuff tightness. Limits overhead & internal rotation needed for swim stroke and bike reach.</div>
      <div class="flag-status" style="color:var(--warn)">BLOCK</div>
    </div>
    <div class="flag-row">
      <div class="flag-dot dot-gold"></div>
      <div class="flag-name">Plantar / Foot Soreness</div>
      <div class="flag-note">Post-run soreness. New shoes in place; add foot strengthening + rolling protocol immediately.</div>
      <div class="flag-status" style="color:var(--gold)">MONITOR</div>
    </div>
    <div class="flag-row">
      <div class="flag-dot dot-gold"></div>
      <div class="flag-name">Lateral Knee Pain (ITB / LCL)</div>
      <div class="flag-note">Intermittent sides. Classic weak hip + tight TFL pattern. Hip strengthening is the fix.</div>
      <div class="flag-status" style="color:var(--gold)">MONITOR</div>
    </div>
    <div class="flag-row">
      <div class="flag-dot dot-gold"></div>
      <div class="flag-name">Medial / Posterior Calf</div>
      <div class="flag-note">Tibialis posterior + soleus weakness. Must strengthen to protect ankle and foot arch.</div>
      <div class="flag-status" style="color:var(--gold)">MONITOR</div>
    </div>
  </div>

  <div class="grid-2" style="margin-bottom:16px;">
    <div class="card">
      <div class="card-title">Body Readiness by Discipline</div>
      <div class="prog-bar-wrap">
        <div class="prog-bar-label"><span>🏃 Running</span><span>55%</span></div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:55%;background:var(--ok)"></div></div>
      </div>
      <div class="prog-bar-wrap">
        <div class="prog-bar-label"><span>🚴 Cycling</span><span>65%</span></div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:65%;background:var(--fall)"></div></div>
      </div>
      <div class="prog-bar-wrap">
        <div class="prog-bar-label"><span>🏊 Swimming</span><span>30%</span></div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:30%;background:var(--spring)"></div></div>
      </div>
      <div class="prog-bar-wrap">
        <div class="prog-bar-label"><span>🏋️ Strength</span><span>70%</span></div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:70%;background:var(--gold)"></div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Weekly Volume Snapshot (Summer)</div>
      <div style="margin-bottom:8px;">
        <div class="vol-chip"><span class="chip-icon">🚴</span> ~50 min/day commute (×5)</div>
        <div class="vol-chip"><span class="chip-icon">🏋️</span> 3× gym (Arnold split)</div>
        <div class="vol-chip"><span class="chip-icon">🏃</span> 2× short run + drills</div>
        <div class="vol-chip"><span class="chip-icon">🏃</span> 1× long run</div>
      </div>
      <div style="font-size:12px; color:var(--sub); padding: 10px; background:rgba(249,115,22,.05); border:1px solid rgba(249,115,22,.15); border-radius:8px;">
        ⚠ Commute miles (5 mi/day × 5) count as active recovery zone 1–2. Don't add extra ride volume on top in early weeks — let legs adapt.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Season Roadmap</div>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot summer"></div>
        <div class="tl-month">NOW → 8 WEEKS</div>
        <div class="tl-title"><span class="phase-pill phase-summer">Summer</span> Foundation + Rehab Activation</div>
        <div class="tl-body">Arnold split builds structural muscle. Running drills build neuromuscular foot/ankle pattern. Daily commute rides add aerobic base. PT work starts NOW on neck/shoulder complex and foot/knee. No swimming yet — protect shoulder.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot fall"></div>
        <div class="tl-month">FALL · ~16 WEEKS</div>
        <div class="tl-title"><span class="phase-pill phase-fall">Fall</span> Aerobic Engine + Bike Volume</div>
        <div class="tl-body">Shift to anterior/posterior full-body lifting. Introduce long rides + short rides. Continue long run progression. Shoulder must be cleared before fall ends — swim intro happens late fall / early spring.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot spring"></div>
        <div class="tl-month">SPRING · ~16 WEEKS</div>
        <div class="tl-title"><span class="phase-pill phase-spring">Spring</span> Race-Specific Build + Swim Integration</div>
        <div class="tl-body">All three disciplines active. 2 full-body gym days (maintenance). Swim technique focus early (2 short + 1 long/week — one short swim pairs with a gym day). Brick workouts (long ride → run) begin mid-spring. Taper 2–3 weeks before race.</div>
      </div>
    </div>
  </div>

</div>

<div class="section" id="tab-summer">

  <div class="commute-banner" style="margin-bottom:16px;">
    <div class="commute-icon">🚴</div>
    <div class="commute-text">
      <h3>Daily Commute — Built-In Training</h3>
      <p>5 miles round-trip × 5 days = ~25 mi/week of Zone 1–2 cycling. Keep it easy. This is free aerobic base, not a workout. Treat it as active warm-up/cool-down on gym days.</p>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div class="card-title">Sample Summer Week</div>
    <div class="week-grid">
      <div class="day-col">
        <div class="day-header">Mon</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Chest/Back</span>
          <span class="sub">Arnold A + 🚴 Commute</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Tue</div>
        <div class="day-block run">
          <span class="icon">🏃</span>
          <span class="label">Short Run</span>
          <span class="sub">Drills + 🚴 Commute</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Wed</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Shoulders/Arms</span>
          <span class="sub">Arnold B + 🚴 Commute</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Thu</div>
        <div class="day-block run">
          <span class="icon">🏃</span>
          <span class="label">Short Run</span>
          <span class="sub">Drills + 🚴 Commute</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Fri</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Legs/Core</span>
          <span class="sub">Arnold C + 🚴 Commute</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sat</div>
        <div class="day-block run">
          <span class="icon">🏃</span>
          <span class="label">Long Run</span>
          <span class="sub">Easy pace</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sun</div>
        <div class="day-block rest">
          <span class="icon">😴</span>
          <span class="label">Rest</span>
          <span class="sub">Walk / PT</span>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2" style="margin-bottom:16px;">
    <div class="card">
      <div class="card-title">Arnold Split — Injury-Modified</div>
      <div class="pt-zone ok-zone">
        <h4>Day A — Chest / Back</h4>
        <ul>
          <li>Incline DB press (avoid full overhead bar press — shoulder)</li>
          <li>Seated cable rows (scapular retraction cue)</li>
          <li>Chest-supported row (neck neutral, no strain)</li>
          <li>Cable fly — avoid deep stretch end range</li>
          <li>Face pulls 3×15 (mandatory for shoulder health)</li>
        </ul>
      </div>
      <div class="pt-zone ok-zone" style="margin-top:10px;">
        <h4>Day B — Shoulders / Arms</h4>
        <ul>
          <li>Landmine press instead of overhead press (shoulder-safe)</li>
          <li>Lateral raises — controlled, no jerking (neck load)</li>
          <li>Hammer curls, reverse curls (elbow stability)</li>
          <li>Tricep pushdowns — neutral wrist</li>
          <li>Band pull-aparts 2×20 (daily shoulder warmup)</li>
        </ul>
      </div>
      <div class="pt-zone ok-zone" style="margin-top:10px;">
        <h4>Day C — Legs / Core</h4>
        <ul>
          <li>Bulgarian split squat (single-leg, quad + glute drive)</li>
          <li>Romanian deadlift (hamstring + hip hinge pattern)</li>
          <li>Seated calf raises (soleus — the weak interior calf)</li>
          <li>Standing calf raises (eccentric focus, heel drop)</li>
          <li>Single-leg glute bridge (knee valgus correction)</li>
          <li>Copenhagen plank (hip adductor — knee support)</li>
          <li>Dead bug / Pallof press (core, no neck strain)</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Running — Drill Protocol</div>
      <div class="pt-zone gold-zone">
        <h4>Short Run Structure (30–40 min)</h4>
        <ul>
          <li>10 min easy warm-up jog (Zone 1)</li>
          <li>A-skips × 2×20m</li>
          <li>B-skips × 2×20m</li>
          <li>High knees × 2×20m</li>
          <li>Butt kicks × 2×20m</li>
          <li>Ankle stiffness drills (pogos, quick hops)</li>
          <li>20 min easy run (Zone 2, conversational)</li>
          <li>5 min cooldown + foot rolling (mandatory)</li>
        </ul>
      </div>
      <div class="pt-zone" style="margin-top:10px;">
        <h4>Long Run Progression (Sat)</h4>
        <ul>
          <li>Week 1–2: 45–50 min easy — assess foot response</li>
          <li>Week 3–4: 55–65 min, add 10% max</li>
          <li>Week 5–6: 70–80 min — introduce gentle tempo miles</li>
          <li>Week 7–8: 80–90 min or back off if any foot/knee flare</li>
          <li>Stop rule: lateral knee pain → end run, ice, assess</li>
        </ul>
      </div>
      <div class="pt-zone gold-zone" style="margin-top:10px;">
        <h4>Post-Run Non-Negotiables</h4>
        <ul>
          <li>Lacrosse ball foot roll — 2 min each foot</li>
          <li>Calf stretch + soleus stretch (bent knee)</li>
          <li>Clam shells 2×15 (glute med, knee protection)</li>
          <li>Elevate feet 10 min if significant soreness</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-title">8-Week Summer Progression</div>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; font-size:12px;">
        <thead>
          <tr style="border-bottom:1px solid var(--border);">
            <th style="text-align:left; padding:8px 10px; color:var(--muted); font-weight:500;">Week</th>
            <th style="text-align:left; padding:8px 10px; color:var(--muted); font-weight:500;">Focus</th>
            <th style="text-align:left; padding:8px 10px; color:var(--muted); font-weight:500;">Long Run</th>
            <th style="text-align:left; padding:8px 10px; color:var(--muted); font-weight:500;">PT Priority</th>
            <th style="text-align:left; padding:8px 10px; color:var(--muted); font-weight:500;">Commute</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W1</td>
            <td style="padding:8px 10px;">Establish patterns, assess pain points</td>
            <td style="padding:8px 10px;">45 min easy</td>
            <td style="padding:8px 10px;">Neck eval, foot rolling daily</td>
            <td style="padding:8px 10px;">Start easy, flat route</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W2</td>
            <td style="padding:8px 10px;">Reinforce + troubleshoot</td>
            <td style="padding:8px 10px;">50 min easy</td>
            <td style="padding:8px 10px;">Start neck PT exercises</td>
            <td style="padding:8px 10px;">Same easy pace</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W3</td>
            <td style="padding:8px 10px;">Volume build</td>
            <td style="padding:8px 10px;">60 min easy</td>
            <td style="padding:8px 10px;">Shoulder mobility work begins</td>
            <td style="padding:8px 10px;">Can vary terrain slightly</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W4</td>
            <td style="padding:8px 10px;"><strong style="color:var(--gold)">Deload</strong> — 60% volume</td>
            <td style="padding:8px 10px;">40 min recovery</td>
            <td style="padding:8px 10px;">Extra PT focus this week</td>
            <td style="padding:8px 10px;">Keep commuting</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W5</td>
            <td style="padding:8px 10px;">Reintroduce + tempo elements</td>
            <td style="padding:8px 10px;">70 min, some tempo</td>
            <td style="padding:8px 10px;">Assess neck progress</td>
            <td style="padding:8px 10px;">Normal</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W6</td>
            <td style="padding:8px 10px;">Peak summer volume</td>
            <td style="padding:8px 10px;">80 min</td>
            <td style="padding:8px 10px;">Shoulder: internal rotation work</td>
            <td style="padding:8px 10px;">Normal</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W7</td>
            <td style="padding:8px 10px;">Hold or push based on response</td>
            <td style="padding:8px 10px;">85 min</td>
            <td style="padding:8px 10px;">Continue neck + shoulder</td>
            <td style="padding:8px 10px;">Normal</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; font-family:'JetBrains Mono',mono; color:var(--summer);">W8</td>
            <td style="padding:8px 10px;"><strong style="color:var(--fall)">Transition deload</strong> → Fall prep</td>
            <td style="padding:8px 10px;">60 min easy</td>
            <td style="padding:8px 10px;">Full shoulder + neck assessment</td>
            <td style="padding:8px 10px;">Last commute week</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<div class="section" id="tab-fall">
  <div class="card" style="margin-bottom:16px;">
    <div class="card-title">Fall Phase Overview</div>
    <p style="color:var(--sub); font-size:13px; margin-bottom:16px;">Aerobic engine is the priority. Gym shifts to full-body anterior/posterior split to protect training volume for bike + run. Swim stays off until shoulder is cleared.</p>
    <div class="week-grid">
      <div class="day-col">
        <div class="day-header">Mon</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Anterior</span>
          <span class="sub">Full body</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Tue</div>
        <div class="day-block ride">
          <span class="icon">🚴</span>
          <span class="label">Short Ride</span>
          <span class="sub">Z2 / Spin</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Wed</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Posterior</span>
          <span class="sub">Full body</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Thu</div>
        <div class="day-block ride">
          <span class="icon">🚴</span>
          <span class="label">Short Ride</span>
          <span class="sub">Z2 intervals</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Fri</div>
        <div class="day-block rest">
          <span class="icon">🧘</span>
          <span class="label">Mobility</span>
          <span class="sub">PT work</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sat</div>
        <div class="day-block ride">
          <span class="icon">🚴</span>
          <span class="label">Long Ride</span>
          <span class="sub">Z2 build</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sun</div>
        <div class="day-block run">
          <span class="icon">🏃</span>
          <span class="label">Long Run</span>
          <span class="sub">Easy</span>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title">Anterior Day (Mon)</div>
      <div class="pt-zone ok-zone">
        <h4>Quad-dominant + Push</h4>
        <ul>
          <li>Goblet squat → Front squat progression</li>
          <li>Leg press (knee tracking cue)</li>
          <li>Landmine press or DB incline press</li>
          <li>Single-leg step-ups (eccentric focus)</li>
          <li>Core: dead bug, Pallof press</li>
          <li>Tibialis raises (anterior shin, foot health)</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Posterior Day (Wed)</div>
      <div class="pt-zone ok-zone">
        <h4>Hinge-dominant + Pull</h4>
        <ul>
          <li>Romanian deadlift (hip hinge, hamstring)</li>
          <li>Hip thrust (glute max — power for bike + run)</li>
          <li>Cable row / chest-supported row</li>
          <li>Nordic curl (eccentric hamstring — injury prevention)</li>
          <li>Face pulls + band pull-aparts (shoulder)</li>
          <li>Seated + standing calf raise superset</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="section" id="tab-spring">
  <div class="card" style="margin-bottom:16px;">
    <div class="card-title">Spring Phase Overview</div>
    <p style="color:var(--sub); font-size:13px; margin-bottom:16px;">All three disciplines online. 2 gym days (full body, maintenance focus). Saturday is the big day — long ride with brick run off the bike. Sunday long swim. One short swim doubles up on a gym day to keep the schedule manageable.</p>
    <div class="week-grid">
      <div class="day-col">
        <div class="day-header">Mon</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Gym A</span>
          <span class="sub">Full body ant.</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Tue</div>
        <div class="day-block gym">
          <span class="icon">🏋️</span>
          <span class="label">Gym B</span>
          <span class="sub">Full body post. + 🏊 easy swim</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Wed</div>
        <div class="day-block run">
          <span class="icon">🏃</span>
          <span class="label">Long Run</span>
          <span class="sub">Z2 build</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Thu</div>
        <div class="day-block swim">
          <span class="icon">🏊</span>
          <span class="label">Short Swim</span>
          <span class="sub">Drills / tech</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Fri</div>
        <div class="day-block rest">
          <span class="icon">🧘</span>
          <span class="label">Rest / PT</span>
          <span class="sub">Mobility</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sat</div>
        <div class="day-block ride">
          <span class="icon">🚴</span>
          <span class="label">Long Ride</span>
          <span class="sub">+ Brick run</span>
        </div>
      </div>
      <div class="day-col">
        <div class="day-header">Sun</div>
        <div class="day-block swim">
          <span class="icon">🏊</span>
          <span class="label">Long Swim</span>
          <span class="sub">Open water</span>
        </div>
      </div>
    </div>
    <div style="margin-top:12px; font-size:12px; color:var(--sub); padding:10px; background:rgba(34,211,238,.04); border:1px solid rgba(34,211,238,.15); border-radius:8px;">
      💡 <strong style="color:var(--text)">Tue overlap:</strong> Gym B (posterior) in the morning, easy short swim (~30 min technique) in the evening or lunch. Keep swim truly easy — it's skill work, not conditioning, so it won't compromise gym recovery. Thu short swim is the harder effort swim.
    </div>
  </div>

  <div class="card">
    <div class="card-title">Swim Entry — Shoulder-First Protocol</div>
    <div class="pt-zone">
      <h4>Before first swim session, confirm:</h4>
      <ul>
        <li>Full pain-free overhead reach (both arms)</li>
        <li>Internal rotation ≥ 60° (hand behind back test)</li>
        <li>No neck symptoms with cervical rotation</li>
        <li>PT clearance for freestyle stroke pattern</li>
      </ul>
    </div>
    <div class="pt-zone ok-zone" style="margin-top:10px;">
      <h4>Early Swim Drill Sequence</h4>
      <ul>
        <li>Catch-up drill (timing + stroke length)</li>
        <li>Fingertip drag (high elbow recovery)</li>
        <li>Side kick drill (body rotation)</li>
        <li>Bilateral breathing from day one (symmetry, neck load balance)</li>
        <li>Avoid head-up sighting early — neck strain risk</li>
      </ul>
    </div>
  </div>
</div>

<div class="section" id="tab-rehab">

  <div style="background:rgba(239,68,68,.07); border:1px solid rgba(239,68,68,.25); border-radius:10px; padding:14px 18px; margin-bottom:16px; font-size:13px; color:var(--sub);">
    ⚕ <strong style="color:var(--text)">These are exercise frameworks, not medical prescriptions.</strong> Get a physio / sports medicine assessment — especially for the cervical issue. The C-fiber symptoms (jaw, scalp) suggest you need hands-on evaluation before any aggressive neck loading.
  </div>

  <div class="grid-2" style="margin-bottom:16px;">

    <div class="card">
      <div class="card-title" style="color:var(--warn)">🔴 Upper — Neck / Cervical</div>
      <div class="pt-zone">
        <h4>Daily (morning, 10 min)</h4>
        <ul>
          <li>Chin tucks — 3×10, neutral spine (deep cervical flexors)</li>
          <li>Cervical rotation — slow, 5 reps each side, no forcing</li>
          <li>Levator scapulae stretch — 30s each side</li>
          <li>Upper trap doorframe stretch</li>
          <li>Suboccipital release (fingertips at base of skull, gentle)</li>
        </ul>
      </div>
      <div class="pt-zone" style="margin-top:10px;">
        <h4>3× per week</h4>
        <ul>
          <li>Dead bug (deep core = cervical support)</li>
          <li>Wall angels — scapular control</li>
          <li>Thoracic extension over foam roller (T-spine mobility)</li>
          <li>Neck isometrics — 4 directions, 5s holds</li>
        </ul>
      </div>
      <div style="margin-top:10px; padding:10px; background:rgba(239,68,68,.05); border-radius:6px; font-size:12px; color:var(--sub);">
        Jaw/scalp symptoms likely from myofascial referral from cervicogenic tension + possible SCM tightness. Jaw stretches + no jaw clenching at night. Mention to physio.
      </div>
    </div>

    <div class="card">
      <div class="card-title" style="color:var(--warn)">🔴 Upper — Shoulder (Post-Dislocation)</div>
      <div class="pt-zone">
        <h4>Daily warmup (every session)</h4>
        <ul>
          <li>Band pull-aparts — 2×20 (rear delt, external rotators)</li>
          <li>Face pulls with rope — 2×15</li>
          <li>Shoulder CARs (controlled articular rotations)</li>
          <li>Sleeper stretch — 2×30s (posterior capsule)</li>
        </ul>
      </div>
      <div class="pt-zone" style="margin-top:10px;">
        <h4>3× per week (progressive)</h4>
        <ul>
          <li>External rotation with band — 3×15</li>
          <li>Side-lying ER with DB — 3×12</li>
          <li>Serratus anterior wall slides — 2×12</li>
          <li>Low row to hip (lat + lower trap)</li>
          <li>Supine shoulder IR (internal rotation graded)</li>
        </ul>
      </div>
      <div style="margin-top:10px; padding:10px; background:rgba(239,68,68,.05); border-radius:6px; font-size:12px; color:var(--sub);">
        Goal: restore full ROM + rotator cuff endurance before aero bike position and freestyle stroke. Rush this = re-dislocation risk.
      </div>
    </div>

    <div class="card">
      <div class="card-title" style="color:var(--gold)">🟡 Lower — Foot / Plantar / Calf Complex</div>
      <div class="pt-zone gold-zone">
        <h4>Daily (can do at desk)</h4>
        <ul>
          <li>Towel scrunches — 2×30s each foot (intrinsic foot muscles)</li>
          <li>Single-leg calf raise with eccentric lower — 3×12 (on step)</li>
          <li>Bent-knee calf raise — 3×12 (targets soleus = "weak interior calf")</li>
          <li>Foot rolling — 2 min each (lacrosse ball, not a foam roller)</li>
          <li>Big toe extension stretch (plantar fascia, arch)</li>
        </ul>
      </div>
      <div class="pt-zone gold-zone" style="margin-top:10px;">
        <h4>3× per week</h4>
        <ul>
          <li>Tibialis raises — stand with back to wall, raise toes 3×20</li>
          <li>Single-leg balance — 3×30s, progress to eyes closed</li>
          <li>Heel-to-toe walking 2×20m (arch neuromuscular control)</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-title" style="color:var(--gold)">🟡 Lower — Knee / ITB / Hip</div>
      <div class="pt-zone gold-zone">
        <h4>Every run day (pre + post)</h4>
        <ul>
          <li>Clam shells — 2×15 (glute medius, lateral knee stability)</li>
          <li>Side-lying hip abduction — 2×15</li>
          <li>Monster walks with band — 2×20 steps</li>
          <li>IT band foam roll — 60s each leg (pre-run only)</li>
          <li>Piriformis stretch — 30s each side</li>
        </ul>
      </div>
      <div class="pt-zone gold-zone" style="margin-top:10px;">
        <h4>3× per week (gym)</h4>
        <ul>
          <li>Single-leg glute bridge — 3×12 (glute max activation)</li>
          <li>Copenhagen adductor plank — 2×20s (medial knee support)</li>
          <li>Terminal knee extension with band (VMO activation)</li>
          <li>Step-downs — eccentric quads, 3×10 each leg</li>
        </ul>
      </div>
      <div style="margin-top:10px; padding:10px; background:rgba(234,179,8,.05); border-radius:6px; font-size:12px; color:var(--sub);">
        Lateral knee pain = almost always weak glute med + tight TFL. The hip work above will fix it over 4–6 weeks if consistent.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Daily Rehab Checklist</div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12px;">
      <div>
        <div style="color:var(--sub); font-weight:600; margin-bottom:8px; text-transform:uppercase; letter-spacing:.8px; font-size:11px;">Morning (10–15 min)</div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Chin tucks × 10</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Cervical rotation (slow)</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Band pull-aparts × 20</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Foot rolling (2 min each)</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Clam shells × 15</div></div>
      </div>
      <div>
        <div style="color:var(--sub); font-weight:600; margin-bottom:8px; text-transform:uppercase; letter-spacing:.8px; font-size:11px;">Post-Run / Post-Ride</div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Soleus stretch (bent knee) 30s</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Eccentric heel drop × 15</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Hip flexor stretch (saddle tightness)</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Thoracic extension on roller</div></div>
        <div class="flag-row"><div class="flag-dot dot-green"></div><div class="flag-note">Shoulder sleeper stretch</div></div>
      </div>
    </div>
  </div>

</div>

</main>

<script>
function showTab(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}
</script>
</body>
</html>`

function IronmanTrainingPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100vh', background: '#0e0e0f' }}>
      <iframe
        title="Ironman 70.3 Training Plan"
        srcDoc={ironmanTrainingHtml}
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </div>
  )
}

export default IronmanTrainingPage
