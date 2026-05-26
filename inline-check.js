
const SESSIONS = [
  {
    id: 'A', name: 'PUSH â€” Piept / Umeri / Triceps', badge: 'Push', badgeClass: 'badge-push',
    duration: '55â€“65 min', rpe: '7â€“8',
    warmup: ['5 min ciclu uÈ™or / mers pe bandÄƒ', 'RotaÈ›ii umeri 2x15 (cu banda sau liber)', '2x10 Ã®mpingeri cu bara goalÄƒ (Bench Press)'],
    exercises: [
      { name: 'Bench Press', sets: '4x6â€“8', rpe: '8', rest: '2â€“3 min', notes: 'Compound principal â€” RIR 1â€“2, greutate serioasÄƒ' },
      { name: 'Incline DB Press', sets: '3x10â€“12', rpe: '7â€“8', rest: '90s', notes: 'Tempo 3-1 (3s coborÃ¢re, 1s sus) â€” RIR 1' },
      { name: 'Cable Fly', sets: '3x12â€“15', rpe: '7', rest: '60s', notes: 'Ultimul set DROP SET: -25% greutate, continui fÄƒrÄƒ pauzÄƒ' },
      { name: 'DB Shoulder Press', sets: '3x10â€“12', rpe: '7â€“8', rest: '90s', notes: 'RIR 1' },
      { name: 'Lateral Raises', sets: '4x15', rpe: '7', rest: '45s', notes: 'Ultimul set REST-PAUSE: failure â†’ 15s pauzÄƒ â†’ Ã®ncÄƒ 4â€“5 rep' },
      { name: 'Tricep Pushdowns (cablu)', sets: '3x12â€“15', rpe: '7', rest: '60s', notes: 'Ultimul set DROP SET: -25% greutate imediat' },
      { name: 'Face Pulls (cablu)', sets: '3x15', rpe: '6', rest: '60s', notes: 'SÄƒnÄƒtate umeri â€” nu sÄƒri! Controlat, nu bÄƒlÄƒngÄƒnit' },
      { name: 'ðŸƒ CARDIO â€” Steady State bandÄƒ', sets: '1x15â€“20 min', rpe: '5â€“6', rest: 'â€”', notes: 'Ritm confortabil â€” poÈ›i vorbi fÄƒrÄƒ sÄƒ gÃ¢fÃ¢i. Arde grÄƒsimea dupÄƒ antrenament' },
    ],
    cooldown: ['Stretching piept (uÈ™Äƒ/cablu) â€” 2x30s', 'Cross-body stretch umeri â€” 2x30s/parte', 'RespiraÈ›ii profunde 1 min']
  },
  {
    id: 'B', name: 'PULL â€” Spate / Biceps', badge: 'Pull', badgeClass: 'badge-pull',
    duration: '60â€“70 min', rpe: '7â€“8',
    warmup: ['5 min ciclu uÈ™or', 'Band pull-aparts 2x15', 'Activare scapularÄƒ â€” 2x10 shrugs'],
    exercises: [
      { name: 'Deadlift / RDL', sets: '4x5â€“6', rpe: '8', rest: '3 min', notes: 'Compound principal â€” RIR 1, coloana neutrÄƒ' },
      { name: 'Pull-Ups / Lat Pulldown', sets: '4x max/8â€“10', rpe: '8', rest: '90s', notes: 'Ultimele 2 seturi RIR 0 â€” mergi la failure controlat' },
      { name: 'Cable Row È™ezut', sets: '3x10â€“12', rpe: '7', rest: '75s', notes: 'Tempo 3-1 â€” 3s tragere Ã®napoi lentÄƒ, control total' },
      { name: 'DB Row unilateral', sets: '3x10â€“12', rpe: '7â€“8', rest: '75s', notes: 'RIR 1, full ROM â€” lasÄƒ umÄƒrul sÄƒ coboare jos' },
      { name: 'Face Pulls (cablu)', sets: '3x15', rpe: '6', rest: '60s', notes: 'Controlat â€” pentru sÄƒnÄƒtatea rotatorilor' },
      { name: 'EZ Bar Curl', sets: '3x10â€“12', rpe: '7', rest: '60s', notes: 'Ultimul set DROP SET: -25% greutate imediat' },
      { name: 'Hammer Curl', sets: '3x12', rpe: '7', rest: '60s', notes: 'RIR 1 â€” brahial È™i brahioradial' },
      { name: 'ðŸƒ CARDIO â€” Steady State bandÄƒ', sets: '1x15â€“20 min', rpe: '5â€“6', rest: 'â€”', notes: 'Ritm confortabil, steady state â€” nu sprint. Post-antrenament pentru oxidarea grÄƒsimilor' },
    ],
    cooldown: ['Stretching lat (agÄƒÈ›are + lean) â€” 2x30s', 'Stretching biceps â€” 30s/parte', 'Cat-cow 1 min']
  },
  {
    id: 'C', name: 'LEGS â€” Quad / Fesieri / Core', badge: 'Legs', badgeClass: 'badge-legs',
    duration: '65â€“75 min', rpe: '7â€“8',
    warmup: ['5 min ciclu / mers', 'Bodyweight squat 2x10 (deep, lent)', 'Glute bridges 2x15', 'Leg swings 10/parte'],
    exercises: [
      { name: 'Back Squat', sets: '4x6â€“8', rpe: '8', rest: '3 min', notes: 'Compound principal â€” RIR 1, greutate serioasÄƒ' },
      { name: 'Romanian Deadlift (RDL)', sets: '4x10â€“12', rpe: '7â€“8', rest: '90s', notes: 'Tempo 3-1 â€” 3s coborÃ¢re lentÄƒ, stretch ischio maxim' },
      { name: 'Leg Press', sets: '3x12â€“15', rpe: '7', rest: '75s', notes: 'Ultimul set DROP SET: -20% greutate, continui imediat' },
      { name: 'Leg Curl aparat', sets: '3x12â€“15', rpe: '7', rest: '60s', notes: 'Tempo 3-1 â€” RIR 1' },
      { name: 'Walking Lunges DB', sets: '3x12/picior', rpe: '7', rest: '75s', notes: 'RIR 1 â€” atletic È™i echilibru' },
      { name: 'Calf Raises', sets: '4x20', rpe: '7', rest: '45s', notes: 'Ultimul set REST-PAUSE: failure â†’ 15s â†’ Ã®ncÄƒ 6â€“8 rep' },
      { name: 'Plank / Ab Wheel', sets: '3x30â€“45s', rpe: '7', rest: '60s', notes: 'Coloana neutrÄƒ tot timpul' },
      { name: 'ðŸƒ CARDIO â€” Steady State bandÄƒ', sets: '1x15â€“20 min', rpe: '5â€“6', rest: 'â€”', notes: 'Steady state post-legs â€” merge perfect pentru recuperare activÄƒ È™i ardere grÄƒsimi' },
    ],
    cooldown: ['Stretching quad Ã®n stÃ¢nd â€” 2x30s/parte', 'Piriforme (figura 4) â€” 2x45s/parte', 'Hip flexor stretch â€” 30s/parte']
  },
  {
    id: 'D', name: 'UPPER â€” Hipertrofie', badge: 'Upper', badgeClass: 'badge-upper',
    duration: '55â€“65 min', rpe: '7',
    warmup: ['5 min ciclu uÈ™or', 'Band pull-aparts 2x15', 'RotaÈ›ii umeri + 2x10 DB curl uÈ™or'],
    exercises: [
      { name: 'Incline Bench Press', sets: '4x8â€“10', rpe: '7â€“8', rest: '2 min', notes: 'Tempo 3-1 â€” RIR 1' },
      { name: 'One-Arm DB Row', sets: '3x10/parte', rpe: '7', rest: '90s', notes: 'Unilateral â€” full ROM, lasÄƒ umÄƒrul sÄƒ coboare' },
      { name: 'DB Shoulder Press', sets: '3x10â€“12', rpe: '7', rest: '90s', notes: 'RIR 1' },
      { name: 'Cable Fly', sets: '3x12â€“15', rpe: '6â€“7', rest: '60s', notes: 'Ultimul set DROP SET: stretch maxim la capÄƒt, -25% imediat' },
      { name: 'Rope Pushdown', sets: '3x15', rpe: '6', rest: '60s', notes: 'Ultimul set DROP SET' },
      { name: 'EZ Bar Curl', sets: '3x12', rpe: '7', rest: '60s', notes: 'Tempo 3-1 pe coborÃ¢re' },
    ],
    cooldown: ['Stretching piept + umeri â€” 2x30s', 'Stretching triceps overhead â€” 30s/parte', 'Stretching biceps â€” 30s/parte']
  },
  {
    id: 'E', name: 'LEGS+ â€” Athletic & Fesieri', badge: 'Legs+', badgeClass: 'badge-legs',
    duration: '55â€“65 min', rpe: '6â€“7',
    warmup: ['5 min ciclu', 'Dinamice: lateral lunges, leg swings', 'Glute bridges 2x15 (activare)'],
    exercises: [
      { name: 'Front Squat / Goblet Squat', sets: '3x8', rpe: '7', rest: '2 min', notes: 'Mobilitate È™i quad â€” tempo 3-1' },
      { name: 'Hip Thrust (barÄƒ)', sets: '4x10â€“12', rpe: '7â€“8', rest: '2 min', notes: 'Fesieri â€” strÃ¢nge sus! RIR 1' },
      { name: 'Walking Lunges', sets: '3x12/picior', rpe: '7', rest: '90s', notes: 'Atletic È™i coordonare' },
      { name: 'Leg Extension', sets: '3x15', rpe: '6', rest: '60s', notes: 'Ultimul set DROP SET' },
      { name: 'Calf Raises (aparat/liber)', sets: '4x15â€“20', rpe: '7', rest: '60s', notes: 'Ultimul set REST-PAUSE' },
      { name: 'Pallof Press / Anti-rotaÈ›ie', sets: '3x10/parte', rpe: '6', rest: '60s', notes: 'Core antirotaÈ›ie' },
      { name: 'ðŸƒ CARDIO â€” Steady State bandÄƒ', sets: '1x15â€“20 min', rpe: '5â€“6', rest: 'â€”', notes: 'OpÈ›ional pe sesiunea E â€” dacÄƒ energia permite' },
    ],
    cooldown: ['Stretching complet lower body â€” 5 min', 'Piriforme + quad + hip flexor', 'RespiraÈ›ii profunde 1 min']
  }
];

const CALENDAR_DATA = [
  {
    label: 'S1 â€” BAZA', deload: false,
    days: [
      { day: 'Luni', session: 'A â€” Push', sessionIdx: 0 },
      { day: 'MarÈ›i', session: 'B â€” Pull', sessionIdx: 1 },
      { day: 'Miercuri', session: 'ODIHNÄ‚ / Mobilitate', sessionIdx: -1 },
      { day: 'Joi', session: 'C â€” Legs', sessionIdx: 2 },
      { day: 'Vineri', session: 'D â€” Upper', sessionIdx: 3 },
      { day: 'SÃ¢mbÄƒtÄƒ', session: 'E â€” Legs (opÈ›.)', sessionIdx: 4 },
      { day: 'DuminicÄƒ', session: 'ODIHNÄ‚ + Check-in', sessionIdx: -1 },
    ]
  },
  {
    label: 'S2 â€” ACUMULARE', deload: false,
    days: [
      { day: 'Luni', session: 'A â€” Push (+1 set)', sessionIdx: 0 },
      { day: 'MarÈ›i', session: 'B â€” Pull (+1 set)', sessionIdx: 1 },
      { day: 'Miercuri', session: 'ODIHNÄ‚ / Mobilitate', sessionIdx: -1 },
      { day: 'Joi', session: 'C â€” Legs (+1 set)', sessionIdx: 2 },
      { day: 'Vineri', session: 'D â€” Upper (+1 set)', sessionIdx: 3 },
      { day: 'SÃ¢mbÄƒtÄƒ', session: 'E â€” Legs (opÈ›.)', sessionIdx: 4 },
      { day: 'DuminicÄƒ', session: 'ODIHNÄ‚ + Check-in', sessionIdx: -1 },
    ]
  },
  {
    label: 'S3 â€” INTENSIFICARE', deload: false,
    days: [
      { day: 'Luni', session: 'A â€” Push (+kg)', sessionIdx: 0 },
      { day: 'MarÈ›i', session: 'B â€” Pull (+kg)', sessionIdx: 1 },
      { day: 'Miercuri', session: 'ODIHNÄ‚ / Mobilitate', sessionIdx: -1 },
      { day: 'Joi', session: 'C â€” Legs (+kg)', sessionIdx: 2 },
      { day: 'Vineri', session: 'D â€” Upper (+kg)', sessionIdx: 3 },
      { day: 'SÃ¢mbÄƒtÄƒ', session: 'E â€” Legs (opÈ›.)', sessionIdx: 4 },
      { day: 'DuminicÄƒ', session: 'ODIHNÄ‚ + Check-in', sessionIdx: -1 },
    ]
  },
  {
    label: 'S4 â€” DELOAD âš¡', deload: true,
    days: [
      { day: 'Luni', session: 'A â€” Push DELOAD', sessionIdx: 0 },
      { day: 'MarÈ›i', session: 'B â€” Pull DELOAD', sessionIdx: 1 },
      { day: 'Miercuri', session: 'ODIHNÄ‚ / Mobilitate extinsÄƒ', sessionIdx: -1 },
      { day: 'Joi', session: 'C â€” Legs DELOAD', sessionIdx: 2 },
      { day: 'Vineri', session: 'Mobilitate 30 min', sessionIdx: -1 },
      { day: 'SÃ¢mbÄƒtÄƒ', session: 'ODIHNÄ‚', sessionIdx: -1 },
      { day: 'DuminicÄƒ', session: 'Check-in final', sessionIdx: -1 },
    ]
  }
];

const PR_EXERCISES = [
  { name: 'Bench Press', icon: 'ðŸ‹ï¸' },
  { name: 'Back Squat', icon: 'ðŸ¦µ' },
  { name: 'Deadlift / RDL', icon: 'âš¡' },
  { name: 'Overhead Press', icon: 'ðŸ”' },
  { name: 'Barbell Row', icon: 'ðŸŽ¯' },
  { name: 'Pull-Ups (rep max)', icon: 'ðŸ’ª' },
];

// STATE
let state = {
  currentSession: 0,
  currentWeek: 0,
  checked: {},
  feeling: null,
  water: Array(8).fill(false),
  sleep: 0,
  rpe: null,
  achievements: [],
  prs: {},
  soreness: [],
  postSessionAI: null,
  readiness: { energy: 3, stress: 3, soreness: 2 },
  proteinLog: {},
  measurements: [],
  coachStyle: 'balanced',
  aiHistoryByWeek: {},
  localCoachHistory: {},
  weeklyAIReports: {},
  injuryLog: [],
  trainingGoals: [],
  mealEntries: [],
  foodProductCache: {},
  fullWeeklyReports: {},
  onboarding: null,
  programSettings: null,
  mealFavorites: [],
  reminders: null,
  importHistory: []
};

// Load from localStorage
try {
  const saved = localStorage.getItem('ironplan_state');
  if (saved) state = { ...state, ...JSON.parse(saved) };
} catch(e) {}

function save() {
  try { localStorage.setItem('ironplan_state', JSON.stringify(state)); } catch(e) {}
}

// ============ AUTO WEEK & SESSION DETECTION ============
const BLOCK_START = '2026-05-25'; // Data de start a blocului

// Schedule: zi sÄƒptÄƒmÃ¢nÄƒ (0=Dum,1=Lun,...,6=SÃ¢m) â†’ sessionIdx (-1=odihnÄƒ)
const DAY_SCHEDULE = {
  1: 0, // Luni â†’ Push
  2: 1, // MarÈ›i â†’ Pull
  3: -1, // Miercuri â†’ OdihnÄƒ
  4: 2, // Joi â†’ Legs
  5: 3, // Vineri â†’ Upper
  6: 4, // SÃ¢mbÄƒtÄƒ â†’ Legs+ (opÈ›ional)
  0: -1  // DuminicÄƒ â†’ OdihnÄƒ
};

function getAutoWeek() {
  const start = new Date(getBlockStartDateString());
  const today = new Date();
  start.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 0;
  const week = Math.min(3, Math.floor(diffDays / 7));
  return week;
}

function getAutoSession() {
  const day = new Date().getDay();
  const schedule = getUserSchedule();
  return schedule[day] !== undefined ? schedule[day] : -1;
}

function getWeekModifier(weekIdx) {
  const modifiers = [
    { label: 'S1 â€” BAZA', suffix: '', note: 'Stabilire pattern. RPE 7â€“8. GreutÄƒÈ›i de lucru.' },
    { label: 'S2 â€” ACUMULARE', suffix: '+1 set la compuse', note: '+1 set la Bench, Squat, Deadlift. AcelaÈ™i RPE.' },
    { label: 'S3 â€” INTENSIFICARE', suffix: '+2.5â€“5kg faÈ›Äƒ de S1', note: 'CreÈ™te greutatea. RPE 8â€“9. Cel mai greu punct.' },
    { label: 'S4 â€” DELOAD âš¡', suffix: 'â€“20% greutate, 3 seturi', note: 'Recuperare activÄƒ. RPE 5â€“6. Obligatoriu.' },
  ];
  return modifiers[weekIdx] || modifiers[0];
}

// Init
function init() {
  setDateDisplay();

  // Auto-detecteazÄƒ sÄƒptÄƒmÃ¢na
  const autoWeek = getAutoWeek();
  state.currentWeek = autoWeek;

  // Auto-detecteazÄƒ sesiunea zilei
  const autoSessionIdx = getAutoSession();
  const sessionToLoad = autoSessionIdx >= 0 ? autoSessionIdx : (state.currentSession || 0);

  loadSession(sessionToLoad, null);
  renderCalendar();
  renderPRGrid();
  renderAchievements();
  restoreWater();
  restoreSleep();
  restoreSoreness();
  if (state.rpe) updateRPE(state.rpe);
  updateWeekUI();
  restoreBodyProfile();
  renderWeightLog();
  renderStreak();
  renderRivalGrid();
  renderCountdown();
  renderSmartDashboard();
  renderLabDashboard();
  renderAdvancedCoachFeatures();
  // Init photo DB
  initPhotoDB().then(() => {
    renderProgressPhotos();
    renderPostWorkoutPhotos();
  }).catch(e => console.warn('Photo DB error:', e));
  document.querySelector('.nav-item').click();
  if (!state.onboarding || !state.onboarding.done) {
    setTimeout(() => openSetupOverlay(true), 500);
  }
}

function setDateDisplay() {
  const d = new Date();
  const opts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  document.getElementById('today-date-span').textContent = d.toLocaleDateString('ro-RO', opts);
}

function showSection_old_removed(id) {}

function loadSession(idx, btn) {
  state.currentSession = idx;
  save();
  const s = SESSIONS[idx];
  document.getElementById('today-name').textContent = s.name;
  document.getElementById('today-badge-card').textContent = s.badge;
  document.getElementById('today-badge-card').className = 'card-badge ' + s.badgeClass;

  if (btn) {
    document.querySelectorAll('.session-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.session-tab').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
  }

  // Warmup
  const wi = document.getElementById('warmup-items');
  wi.innerHTML = s.warmup.map((w, i) => `
    <div class="phase-item">
      <div class="phase-check ${state.checked['w-'+idx+'-'+i] ? 'checked' : ''}" onclick="togglePhaseCheck('w-${idx}-${i}',this)"></div>
      <span style="font-size:13px;">${w}</span>
    </div>`).join('');

  // Exercises - Hevy style
  const el = document.getElementById('exercise-list');
  el.innerHTML = s.exercises.map((ex, i) => {
    const rpeNum = parseInt(ex.rpe);
    const rpeClass = rpeNum >= 8 ? 'rpe-high' : rpeNum >= 7 ? 'rpe-med' : 'rpe-low';
    const done = state.checked['ex-'+idx+'-'+i];
    const isCardio = ex.name.includes('CARDIO');
    const logKey = `log-${idx}-${i}`;
    const savedSets = state.setLogs && state.setLogs[logKey] ? state.setLogs[logKey] : [];
    const defaultRestSecs = parseRestSeconds(ex.rest);
    const painConflict = !isCardio && exerciseConflictsWithPain(ex.name);
    const progression = !isCardio ? buildProgressionSuggestion(idx, i) : null;

    // AUTO-SUGGEST: find last session's data for this exercise
    const historyKey = `history-${ex.name.replace(/\s+/g,'-')}`;
    const exHistory = state.exHistory && state.exHistory[historyKey] ? state.exHistory[historyKey] : [];
    const lastSession = exHistory.length ? exHistory[exHistory.length - 1] : null;
    const suggestKg = progression ? progression.kg : '';
    const suggestReps = progression ? progression.reps : '';

    // Build saved set rows
    const setRowsHTML = savedSets.map((set, si) => `
      <div class="hevy-set-row completed-set" id="setRow-${idx}-${i}-${si}">
        <div class="hevy-set-num">${si+1}</div>
        <input class="hevy-set-input" type="number" value="${set.kg}" placeholder="kg" step="0.5"
               onchange="updateSetField('${logKey}',${si},'kg',this.value)">
        <input class="hevy-set-input" type="number" value="${set.reps}" placeholder="rep"
               onchange="updateSetField('${logKey}',${si},'reps',this.value)">
        <input class="hevy-set-input" type="number" value="${set.rpe}" placeholder="RPE" step="0.5" min="5" max="10"
               onchange="updateSetField('${logKey}',${si},'rpe',this.value)">
        <button class="hevy-set-done-btn set-done" onclick="undoSet('${logKey}',${si},${idx},${i})">âœ“</button>
      </div>`).join('');

    // One empty row for next set
    const nextSetNum = savedSets.length + 1;
    const lastKg = savedSets.length ? savedSets[savedSets.length-1].kg : (suggestKg || '');
    const lastReps = savedSets.length ? savedSets[savedSets.length-1].reps : (suggestReps || '');

    // HISTORY: last 5 sessions
    const historyHTML = exHistory.slice(-5).reverse().map((h, hi) => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:11px;">
        <span style="color:var(--muted);">${h.date}</span>
        <span style="color:var(--text);font-weight:600;">${h.maxKg}kg Ã— ${h.lastReps} rep</span>
        <span style="color:var(--muted);">RPE ${h.maxRpe||'â€”'}</span>
        <span style="color:${hi===0?'var(--gold)':'var(--muted)'};font-size:10px;">1RM ~${Math.round(h.maxKg*(1+h.lastReps/30))}kg</span>
      </div>`).join('');
    const bestSession = getBestHistorySession(exHistory);
    const historySummaryHTML = bestSession ? `
      <div class="coach-alert green" style="margin-bottom:8px;">
        Best: <strong>${bestSession.maxKg}kg x ${bestSession.lastReps}</strong> pe ${bestSession.date}. 1RM estimat ~${Math.round(bestSession.maxKg * (1 + bestSession.lastReps / 30))}kg.
      </div>` : '';

    // SUGGEST banner
    const suggestHTML = progression && !savedSets.length ? `
      <div style="background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.2);border-radius:6px;padding:7px 10px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <span style="font-size:11px;color:var(--gold);">Sugestie: <strong>${suggestKg}kg Ã— ${suggestReps} rep</strong> Â· ${escapeHTML(progression.reason)}</span>
        <button onclick="applySuggest(${idx},${i},${suggestKg},${suggestReps})" style="background:rgba(245,200,66,0.15);border:1px solid rgba(245,200,66,0.3);border-radius:4px;color:var(--gold);font-size:11px;padding:3px 8px;cursor:pointer;font-family:'DM Sans',sans-serif;">AplicÄƒ</button>
      </div>` : '';

    return `
    <div class="hevy-exercise-card" id="hevyCard-${idx}-${i}" style="${done?'opacity:0.55':''}">
      <div class="hevy-ex-header" onclick="toggleHevyCard(${idx},${i})">
        <div class="hevy-ex-check ${done ? 'done' : ''}" id="hevyCheck-${idx}-${i}"
             onclick="event.stopPropagation();toggleExCheck('ex-${idx}-${i}',this,${idx},${i})"></div>
        <div style="flex:1">
          <div class="hevy-ex-title">${ex.name}</div>
          <div class="hevy-ex-meta">
            <span class="ex-tag" style="margin-right:4px;">${ex.sets}</span>
            <span class="ex-tag ${rpeClass}" style="margin-right:4px;">RPE ${ex.rpe}</span>
            <span style="font-size:11px;color:var(--muted);">PauzÄƒ: ${ex.rest}</span>
            ${savedSets.length ? `<span style="margin-left:6px;font-size:11px;color:var(--green);font-weight:700;">${savedSets.length} set${savedSets.length>1?'uri':''} âœ“</span>` : ''}
            ${progression && !savedSets.length ? `<span style="margin-left:6px;font-size:11px;color:var(--gold);">${suggestKg}kg sugerat</span>` : ''}
          </div>
          ${ex.notes ? `<div style="font-size:11px;color:var(--muted);font-style:italic;margin-top:2px;">${ex.notes}</div>` : ''}
          ${painConflict ? `<div class="coach-alert red">Atentie: ai durere activa pe grupa asta. Lucreaza RPE 6-7 sau foloseste substitutie.</div>` : ''}
        </div>
        <div class="hevy-ex-expand" id="hevyArrow-${idx}-${i}">â–¾</div>
      </div>

      <div class="hevy-ex-body" id="hevyBody-${idx}-${i}">
        ${!isCardio ? `
        ${suggestHTML}

        ${exHistory.length ? `
        <div style="margin-bottom:10px;">
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);margin-bottom:4px;cursor:pointer;" onclick="toggleHistory('hist-${idx}-${i}')">ðŸ“‹ Istoric sesiuni anterioare â–¾</div>
          <div id="hist-${idx}-${i}" style="display:none;">${historySummaryHTML}${historyHTML}</div>
        </div>` : ''}

        <!-- FORM GUIDE -->
        <button class="alt-btn" onclick="toggleFormGuide(${idx},${i},'${ex.name.replace(/'/g,'')}')">ðŸ“‹ Ghid formÄƒ</button>
        <div class="form-guide" id="formGuide-${idx}-${i}"></div>

        <!-- TEMPO + SUPERSET buttons -->
        <div style="display:flex;gap:8px;margin:8px 0;flex-wrap:wrap;">
          ${ex.notes && ex.notes.includes('Tempo') ? `<button class="alt-btn" onclick="startTempoTimer('${ex.name}')">â± Tempo 3-1</button>` : ''}
          <button class="alt-btn" onclick="toggleSuperset(${idx},${i})">ðŸ”— Superset</button>
          <div id="supersetBadge-${idx}-${i}" style="display:none;" class="superset-badge">ðŸ”— Superset activ</div>
        </div>

        <div class="hevy-set-header">
          <div style="text-align:center;">Set</div>
          <div style="text-align:center;">kg</div>
          <div style="text-align:center;">Rep</div>
          <div style="text-align:center;font-size:9px;color:var(--muted);">RPE</div>
          <div></div>
        </div>
        <div id="hevySets-${idx}-${i}">
          ${setRowsHTML}
          <div class="hevy-set-row" id="newSetRow-${idx}-${i}">
            <div class="hevy-set-num">${nextSetNum}</div>
            <input class="hevy-set-input" type="number" id="new-kg-${idx}-${i}" placeholder="kg" step="0.5" value="${lastKg}" oninput="updateLiveRM(${idx},${i})">
            <input class="hevy-set-input" type="number" id="new-reps-${idx}-${i}" placeholder="rep" value="${lastReps}" oninput="updateLiveRM(${idx},${i})">
            <input class="hevy-set-input" type="number" id="new-rpe-${idx}-${i}" placeholder="â€”" step="0.5" min="5" max="10" style="opacity:0.55;">
            <button class="hevy-set-done-btn" style="opacity:0.3;cursor:default;">âœ“</button>
          </div>
        </div>

        <!-- SET TYPE -->
        <div style="display:flex;gap:6px;margin-top:8px;">
          <button id="st-normal-${idx}-${i}" onclick="selectSetType(${idx},${i},'normal',this)" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid var(--green);background:rgba(46,204,113,0.15);color:var(--green);font-size:11px;font-weight:700;cursor:pointer;">âœ“ Normal</button>
          <button id="st-failure-${idx}-${i}" onclick="selectSetType(${idx},${i},'failure',this)" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid var(--border);background:transparent;color:var(--muted);font-size:11px;font-weight:700;cursor:pointer;">ðŸ’€ Failure</button>
          <button id="st-drop-${idx}-${i}" onclick="selectSetType(${idx},${i},'dropset',this)" style="flex:1;padding:8px;border-radius:8px;border:1.5px solid var(--border);background:transparent;color:var(--muted);font-size:11px;font-weight:700;cursor:pointer;">â¬‡ Drop</button>
        </div>

        <!-- PREVIEW BANNER -->
        <div id="previewBanner-${idx}-${i}" style="display:none;margin-top:10px;padding:12px 16px;background:rgba(245,200,66,0.1);border:1.5px solid rgba(245,200,66,0.4);border-radius:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
            <div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);margin-bottom:3px;">Preview set ${nextSetNum}</div>
              <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;" id="previewText-${idx}-${i}">â€”</div>
            </div>
            <div style="display:flex;gap:8px;">
              <button onclick="cancelPreview(${idx},${i})" style="padding:8px 14px;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:8px;color:var(--muted);font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;">âœ• AnuleazÄƒ</button>
              <button id="confirmBtn-${idx}-${i}" onclick="confirmSet(${idx},${i})" style="padding:8px 18px;background:linear-gradient(135deg,#27AE60,#2ECC71);border:none;border-radius:8px;color:white;font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:1px;cursor:pointer;box-shadow:0 3px 12px rgba(46,204,113,0.3);">âœ“ CONFIRMÄ‚</button>
            </div>
          </div>
        </div>

        <div class="mini-action-row" style="margin-top:10px;">
          <button class="ai-quick-btn" onclick="repeatLastSet(${idx},${i})">Repeta ultimul set</button>
          ${painConflict ? `<button class="ai-quick-btn" onclick="showPainSubstitution(${idx},${i})">Substitutie safe</button>` : ''}
        </div>

        <!-- PREPARE BUTTON -->
        <button id="bigBtn-${idx}-${i}" onclick="prepareSet(${idx},${i})" style="width:100%;margin-top:10px;padding:16px;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;border-radius:14px;color:white;font-family:'Bebas Neue',sans-serif;font-size:24px;letter-spacing:2px;cursor:pointer;box-shadow:0 4px 20px rgba(233,69,96,0.3);transition:transform 0.1s;" ontouchstart="this.style.transform='scale(0.96)'" ontouchend="this.style.transform=''">PREGÄ‚TEÈ˜TE SET â†’</button>

        <!-- LIVE 1RM -->
        <div id="liveRM-${idx}-${i}" style="display:none;margin:6px 0;padding:6px 10px;background:rgba(52,152,219,0.08);border-radius:6px;font-size:12px;color:var(--blue);">
          1RM estimat: <strong id="liveRMval-${idx}-${i}">â€”</strong>
        </div>

        <button class="hevy-add-set-btn" onclick="addSetRow(${idx},${i})" style="margin-top:6px;">+ AdaugÄƒ set</button>

        <!-- PER-EXERCISE REST TIMER -->
        <div class="hevy-rest-bar" id="restBar-${idx}-${i}">
          <div>
            <div class="hevy-rest-count" id="restCount-${idx}-${i}">${ex.rest}</div>
            <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;">PauzÄƒ</div>
          </div>
          <div class="hevy-rest-progress">
            <div class="hevy-rest-label" id="restLabel-${idx}-${i}">SelecteazÄƒ durata:</div>
            <div class="hevy-rest-presets">
              <button class="hevy-rest-preset ${defaultRestSecs===30?'sel':''}" onclick="setExRestTimer(${idx},${i},30,this)">30s</button>
              <button class="hevy-rest-preset ${defaultRestSecs===45?'sel':''}" onclick="setExRestTimer(${idx},${i},45,this)">45s</button>
              <button class="hevy-rest-preset ${defaultRestSecs===60?'sel':''}" onclick="setExRestTimer(${idx},${i},60,this)">60s</button>
              <button class="hevy-rest-preset ${defaultRestSecs===75?'sel':''}" onclick="setExRestTimer(${idx},${i},75,this)">75s</button>
              <button class="hevy-rest-preset ${defaultRestSecs===90?'sel':''}" onclick="setExRestTimer(${idx},${i},90,this)">90s</button>
              <button class="hevy-rest-preset ${defaultRestSecs===120?'sel':''}" onclick="setExRestTimer(${idx},${i},120,this)">2min</button>
              <button class="hevy-rest-preset ${defaultRestSecs>=150?'sel':''}" onclick="setExRestTimer(${idx},${i},180,this)">3min</button>
            </div>
            <div class="hevy-rest-bar-fill-wrap" style="margin-top:6px;">
              <div class="hevy-rest-bar-fill" id="restFill-${idx}-${i}" style="width:100%"></div>
            </div>
          </div>
          <button class="hevy-rest-skip-btn" onclick="skipExRest(${idx},${i})">Skip â–¶</button>
        </div>
        ` : `<div style="padding:8px 0;font-size:13px;color:var(--muted);">ðŸƒ ${ex.sets} â€” ${ex.notes}</div>`}
      </div>
    </div>`;
  }).join('');

  // Cooldown
  const ci = document.getElementById('cooldown-items');
  ci.innerHTML = s.cooldown.map((c, i) => `
    <div class="phase-item">
      <div class="phase-check ${state.checked['c-'+idx+'-'+i] ? 'checked' : ''}" onclick="togglePhaseCheck('c-${idx}-${i}',this)"></div>
      <span style="font-size:13px;">${c}</span>
    </div>`).join('');

  updateProgress();
  if (photoDB) renderPostWorkoutPhotos();
}

function togglePhaseCheck(key, el) {
  state.checked[key] = !state.checked[key];
  el.classList.toggle('checked', state.checked[key]);
  save();
  updateProgress();
  refreshSmartIfVisible();
}

function toggleExCheck(key, checkEl, sessionIdx, exIdx) {
  state.checked[key] = !state.checked[key];
  const done = state.checked[key];
  checkEl.classList.toggle('done', done);
  // Update hevy card style
  const card = document.getElementById(`hevyCard-${sessionIdx}-${exIdx}`);
  if (card) card.style.opacity = done ? '0.55' : '1';
  save();
  updateProgress();
  refreshSmartIfVisible();
}

function updateProgress() {
  const idx = state.currentSession;
  const s = SESSIONS[idx];
  const total = s.warmup.length + s.exercises.length + s.cooldown.length;
  let done = 0;
  s.warmup.forEach((_, i) => { if (state.checked['w-'+idx+'-'+i]) done++; });
  s.exercises.forEach((_, i) => { if (state.checked['ex-'+idx+'-'+i]) done++; });
  s.cooldown.forEach((_, i) => { if (state.checked['c-'+idx+'-'+i]) done++; });

  const pct = Math.round((done / total) * 100);
  document.getElementById('today-progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct-text').textContent = pct + '%';
  document.getElementById('today-badge').textContent = done + '/' + total;

  // Ring
  const circumference = 220;
  const offset = circumference - (pct / 100 * circumference);
  document.getElementById('ringFill').style.strokeDashoffset = offset;
  document.getElementById('ringPct').textContent = pct + '%';
}

function saveCheck(el, key) {
  state.checked[key] = el.checked;
  save();
}

function setFeeling(type, btn) {
  state.feeling = type;
  save();
  document.querySelectorAll('.feeling-btn').forEach(b => b.className = 'feeling-btn');
  if (type === 'easy') btn.classList.add('active-easy');
  if (type === 'ok') btn.classList.add('active-ok');
  if (type === 'hard') btn.classList.add('active-hard');
}

function toggleWater(idx) {
  state.water[idx] = !state.water[idx];
  save();
  restoreWater();
}

function restoreWater() {
  const cups = document.querySelectorAll('.water-cup');
  let count = 0;
  cups.forEach((c, i) => {
    c.classList.toggle('filled', !!state.water[i]);
    if (state.water[i]) count++;
  });
  document.getElementById('waterStatus').textContent = count + ' / 8 pahare' + (count >= 8 ? ' âœ… Excelent!' : count >= 6 ? ' â€” Aproape!' : '');
}

function setSleep(h) {
  state.sleep = h;
  save();
  restoreSleep();
  refreshSmartIfVisible();
}

function restoreSleep() {
  document.querySelectorAll('.sleep-hour').forEach(el => {
    const h = parseInt(el.textContent);
    el.classList.toggle('filled', state.sleep > 0 && h <= state.sleep);
  });
  document.getElementById('sleepHoursDisplay').textContent = state.sleep ? state.sleep + 'h' : 'â€”';
  const pct = state.sleep ? Math.min(100, (state.sleep / 9) * 100) : 0;
  document.getElementById('sleep-fill').style.width = pct + '%';
  if (state.sleep) {
    const msg = state.sleep >= 8 ? 'âœ… Excelent! Recuperare optimÄƒ.' : state.sleep >= 7 ? 'ðŸ‘ Bun. ÃŽncearcÄƒ sÄƒ ajungi la 8h.' : 'âš ï¸ Sub target. PrioritizeazÄƒ somnul!';
    document.getElementById('sleep-status').textContent = msg;
  }
}

function updateRPE(val) {
  state.rpe = val;
  save();
  document.getElementById('rpeDisplay').textContent = 'RPE ' + val;
  const descs = {5:'UÈ™or â€” prea simplu, poate creÈ™ti',6:'Moderat uÈ™or â€” bun pentru deload',7:'Moderat â€” optim pentru acumulare',8:'Greu â€” 2 rep Ã®n rezervÄƒ, zona de progres',9:'Foarte greu â€” 1 rep rezervÄƒ, intensificare',10:'Maxim â€” nu este recomandat Ã®n acest program'};
  document.getElementById('rpe-desc').textContent = descs[val] || '';
  refreshSmartIfVisible();
}

function toggleSore(el) {
  const name = el.textContent.trim();
  if (!state.soreness) state.soreness = [];
  const active = !el.classList.contains('sore');
  el.classList.toggle('sore', active);
  if (active && !state.soreness.includes(name)) state.soreness.push(name);
  if (!active) state.soreness = state.soreness.filter(x => x !== name);
  save();
  refreshSmartIfVisible();
  refreshAdvancedIfVisible();
}

function restoreSoreness() {
  const sore = state.soreness || [];
  document.querySelectorAll('.muscle-btn').forEach(el => {
    el.classList.toggle('sore', sore.includes(el.textContent.trim()));
  });
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = CALENDAR_DATA.map(week => `
    <div class="week-col">
      <div class="week-label ${week.deload ? 'deload-label' : ''}">${week.label}</div>
      ${week.days.map(day => `
        <div class="day-card ${day.sessionIdx === -1 ? 'rest-day' : ''}" 
             onclick="${day.sessionIdx >= 0 ? `goToSession(${day.sessionIdx})` : ''}">
          <div class="day-name">${day.day}</div>
          <div class="day-session-name ${day.sessionIdx === -1 ? 'rest' : week.deload ? 'deload' : ''}">${day.session}</div>
        </div>`).join('')}
    </div>`).join('');
}

function goToSession(idx) {
  showSection('today');
  loadSession(idx, null);
  document.querySelector('.nav-item').classList.add('active');
  document.querySelectorAll('.nav-item')[0].classList.add('active');
}

function setWeek(w) {
  state.currentWeek = w;
  save();
  updateWeekUI();
}

function updateWeekUI() {
  const w = state.currentWeek;
  const dots = document.querySelectorAll('.week-dot');
  dots.forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i === w) d.classList.add('active');
    if (i < w) d.classList.add('done');
  });
  const mod = getWeekModifier(w);
  document.getElementById('currentWeekLabel').textContent = `${mod.label}`;
  document.getElementById('profile-week-display').textContent = `${w + 1} / 4`;

  // Update or create week banner in today section
  let banner = document.getElementById('week-auto-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'week-auto-banner';
    banner.style.cssText = 'margin-bottom:16px;padding:10px 16px;border-radius:8px;font-size:12px;display:flex;align-items:center;gap:10px;';
    const heroEl = document.querySelector('.today-hero');
    if (heroEl) heroEl.after(banner);
  }
  const colors = ['rgba(233,69,96,0.12)', 'rgba(245,200,66,0.1)', 'rgba(255,107,53,0.12)', 'rgba(46,204,113,0.1)'];
  const borders = ['rgba(233,69,96,0.3)', 'rgba(245,200,66,0.3)', 'rgba(255,107,53,0.3)', 'rgba(46,204,113,0.3)'];
  const textColors = ['var(--accent)', 'var(--gold)', 'var(--accent2)', 'var(--green)'];
  banner.style.background = colors[w];
  banner.style.border = `1px solid ${borders[w]}`;
  banner.innerHTML = `<span style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:${textColors[w]};">${mod.label}</span><span style="color:var(--muted);">â†’</span><span style="color:var(--text);">${mod.note}</span>`;

  // Auto-highlight today's session tab
  const autoIdx = getAutoSession();
  if (autoIdx >= 0) {
    document.querySelectorAll('.session-tab').forEach((t, i) => {
      t.classList.toggle('active', i === autoIdx);
    });
  }
}

function renderPRGrid() {
  const grid = document.getElementById('prGrid');
  grid.innerHTML = PR_EXERCISES.map(ex => `
    <div class="pr-card">
      <h4>${ex.icon} ${ex.name}</h4>
      <div class="pr-row">
        <div class="pr-label">SÄƒpt. 1</div>
        <input type="text" class="pr-input" placeholder="kg Ã— rep" 
               value="${(state.prs[ex.name+'_1'])||''}"
               onchange="savePR('${ex.name}_1',this.value)">
      </div>
      <div class="pr-row">
        <div class="pr-label">SÄƒpt. 2â€“3</div>
        <input type="text" class="pr-input" placeholder="kg Ã— rep"
               value="${(state.prs[ex.name+'_2'])||''}"
               onchange="savePR('${ex.name}_2',this.value)">
      </div>
      <div class="pr-row">
        <div class="pr-label">SÄƒpt. 4</div>
        <input type="text" class="pr-input" placeholder="kg Ã— rep"
               value="${(state.prs[ex.name+'_4'])||''}"
               onchange="savePR('${ex.name}_4',this.value)">
      </div>
    </div>`).join('');
}

function savePR(key, val) {
  state.prs[key] = val;
  save();
  renderRivalGrid();
  refreshSmartIfVisible();
}

function addAchievement() {
  const input = document.getElementById('achievementInput');
  const text = input.value.trim();
  if (!text) return;
  const a = { text, date: new Date().toLocaleDateString('ro-RO'), id: Date.now() };
  state.achievements.unshift(a);
  save();
  input.value = '';
  renderAchievements();
  refreshSmartIfVisible();
}

function renderAchievements() {
  const list = document.getElementById('achievementList');
  if (!state.achievements.length) {
    list.innerHTML = '<div style="font-size:13px;color:var(--muted);font-style:italic;">Nicio reuÈ™itÄƒ Ã®nregistratÄƒ Ã®ncÄƒ. Prima ta va fi prima azi.</div>';
    return;
  }
  list.innerHTML = state.achievements.map(a => `
    <div class="achievement-item">
      <span class="achievement-icon">ðŸ†</span>
      <div>
        <div style="font-weight:600;">${escapeHTML(a.text)}</div>
        <div style="font-size:11px;color:var(--muted);">${escapeHTML(a.date)}</div>
      </div>
      <button class="delete-btn" onclick="deleteAchievement(${a.id})">âœ•</button>
    </div>`).join('');
}

function deleteAchievement(id) {
  state.achievements = state.achievements.filter(a => a.id !== id);
  save();
  renderAchievements();
  refreshSmartIfVisible();
}

function submitCheckin() {
  const q1 = document.getElementById('checkin1').value.trim();
  const q2 = document.getElementById('checkin2').value.trim();
  const q3 = document.getElementById('checkin3').value.trim();

  let feedback = '';

  if (!q1 && !q2 && !q3) {
    feedback = 'Coach: CompleteazÄƒ cel puÈ›in o Ã®ntrebare pentru feedback. Seriozitatea cu care tratezi check-in-ul reflectÄƒ seriozitatea cu care tratezi progresul tÄƒu.';
  } else {
    const feedbacks = [];

    if (q1) feedbacks.push(`Ce a funcÈ›ionat: "${q1}" â€” Excelent. NoteazÄƒ asta È™i repetÄƒ. Progresul vine din a reproduce consecvent ce funcÈ›ioneazÄƒ.`);

    if (q2) {
      if (q2.toLowerCase().includes('somn') || q2.toLowerCase().includes('obosit')) {
        feedbacks.push('Somnul e factor limitant #1 Ã®n recuperare È™i compoziÈ›ie corporalÄƒ. ÃŽnainte de a adÄƒuga volum, fixeazÄƒ somnul. FÄƒrÄƒ 7h minim, nu creÈ™ti È™i nu arzi grÄƒsime eficient.');
      } else if (q2.toLowerCase().includes('mÃ¢ncat') || q2.toLowerCase().includes('nutritie') || q2.toLowerCase().includes('proteine')) {
        feedbacks.push('NutriÈ›ia e jumÄƒtate din rezultat. DacÄƒ ai greÈ™it cu mÃ¢ncatul, nu te pedepsi â€” reseteazÄƒ ziua urmÄƒtoare. O masÄƒ proastÄƒ nu stricÄƒ un bloc. Un pattern rÄƒu da.');
      } else if (q2.toLowerCase().includes('sÄƒrit') || q2.toLowerCase().includes('ratat') || q2.toLowerCase().includes('lipsit')) {
        feedbacks.push('Sesiunile sÄƒrite: dacÄƒ ai sub 80% prezenÈ›Äƒ sÄƒptÄƒmÃ¢na asta, nu creÈ™tem volumul. AnalizeazÄƒ de ce s-a Ã®ntÃ¢mplat È™i eliminÄƒ bariera pentru sÄƒptÄƒmÃ¢na viitoare. ConsistenÈ›a e singura strategie care funcÈ›ioneazÄƒ pe termen lung.');
      } else {
        feedbacks.push(`Ce nu a mers: "${q2}" â€” ÃŽÈ›i apreciez onestitatea. Identificarea problemei e primul pas. Acum acÈ›ionÄƒm.`);
      }
    }

    if (q3) feedbacks.push(`Ajustarea ta: "${q3}" â€” Asta e mentalitatea corectÄƒ. Un singur lucru concret e mai valoros decÃ¢t zece intenÈ›ii vagi. Èšine-mÄƒ la curent.`);

    feedbacks.push('ðŸ“Œ Regula sÄƒptÄƒmÃ¢nii viitoare: Apare. LucreazÄƒ la intensitatea corectÄƒ. MÄƒnÃ¢ncÄƒ suficiente proteine. Dormi. RepetÄƒ.');

    feedback = feedbacks.join('\n\n');
  }

  const fb = document.getElementById('coachingFeedback');
  document.getElementById('coachingFeedbackText').innerHTML = feedback.replace(/\n\n/g, '<br><br>');
  fb.classList.add('visible');
  fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============ BODY & CALORIES LOGIC ============

function recalcAll() {
  const age = parseFloat(document.getElementById('inp-age').value);
  const sex = document.getElementById('inp-sex').value;
  const height = parseFloat(document.getElementById('inp-height').value);
  const weight = parseFloat(document.getElementById('inp-weight').value);
  const target = parseFloat(document.getElementById('inp-target').value);
  const activity = parseFloat(document.getElementById('inp-activity').value);

  // Save inputs
  state.bodyProfile = { age, sex, height, weight, target, activity };
  save();

  if (!age || !sex || !height || !weight) return;

  document.getElementById('body-results').style.display = 'block';

  // Mifflin-St Jeor BMR
  let bmr;
  if (sex === 'M') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  const tdee = Math.round(bmr * activity);
  const deficit = 300;
  const targetCal = tdee - deficit;

  // Macros: 2g protein/kg, 0.9g fat/kg, rest carbs
  const proteinG = Math.round(weight * 2);
  const fatG = Math.round(weight * 0.9);
  const proteinKcal = proteinG * 4;
  const fatKcal = fatG * 9;
  const carbKcal = Math.max(0, targetCal - proteinKcal - fatKcal);
  const carbG = Math.round(carbKcal / 4);

  // BMI
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  const bmiLabel = bmi < 18.5 ? 'Subponderal' : bmi < 25 ? 'Normal âœ…' : bmi < 30 ? 'Supraponderal' : 'Obez';

  // Weeks to target
  let weeksText = 'â€”';
  if (target && target < weight) {
    const kgToLose = weight - target;
    const weeksEst = Math.round((kgToLose * 7700) / (deficit * 7));
    weeksText = weeksEst + ' sÄƒpt.';
  } else if (target && target > weight) {
    weeksText = 'Surplus necesar';
  }

  document.getElementById('res-bmr').textContent = Math.round(bmr);
  document.getElementById('res-tdee').textContent = tdee;
  document.getElementById('res-target-cal').textContent = targetCal;
  document.getElementById('res-deficit').textContent = 'â€“' + deficit;
  document.getElementById('res-protein').textContent = proteinG + 'g';
  document.getElementById('res-weeks').textContent = weeksText;

  document.getElementById('macro-protein').textContent = proteinG;
  document.getElementById('macro-carbs').textContent = carbG;
  document.getElementById('macro-fats').textContent = fatG;
  document.getElementById('macro-protein-kcal').textContent = proteinKcal + ' kcal';
  document.getElementById('macro-carbs-kcal').textContent = carbKcal + ' kcal';
  document.getElementById('macro-fats-kcal').textContent = fatKcal + ' kcal';

  const total = proteinKcal + carbKcal + fatKcal;
  document.getElementById('bar-protein').style.width = Math.round(proteinKcal/total*100) + '%';
  document.getElementById('bar-carbs').style.width = Math.round(carbKcal/total*100) + '%';
  document.getElementById('bar-fats').style.width = Math.round(fatKcal/total*100) + '%';

  document.getElementById('bmi-box').innerHTML = `<strong>IMC (BMI):</strong> ${bmi} â€” ${bmiLabel} &nbsp;|&nbsp; <strong>ApÄƒ zilnicÄƒ recomandatÄƒ:</strong> ${Math.round(weight * 37.5)} ml (~${Math.round(weight*37.5/250)} pahare)`;

  // Coach note
  let note = '';
  if (targetCal < 1400) {
    note = 'âš ï¸ Coach: Deficitul calculat ar duce caloriile prea jos. MÄƒnÃ¢ncÄƒ cel puÈ›in 1500 kcal/zi pentru a proteja masa muscularÄƒ. PrioritizeazÄƒ proteinele È™i ajusteazÄƒ cardio-ul Ã®n loc sÄƒ tai mai mult din mÃ¢ncare.';
  } else if (deficit > 500) {
    note = 'âš ï¸ Coach: Deficit mare detectat. Peste 500 kcal/zi riÈ™ti sÄƒ pierzi masÄƒ muscularÄƒ. RÄƒmÃ¢i la 200â€“350 kcal deficit È™i lasÄƒ antrenamentul sÄƒ facÄƒ restul.';
  } else {
    note = `âœ… Coach: EÈ™ti pe drumul corect. La ${targetCal} kcal/zi cu ${proteinG}g proteine, vei pierde grÄƒsime È™i pÄƒstra masa muscularÄƒ. CÃ¢ntÄƒreÈ™te-te de 2â€“3 ori pe sÄƒptÄƒmÃ¢nÄƒ dimineaÈ›a È™i urmÄƒreÈ™te media â€” nu ziua de azi.`;
  }
  document.getElementById('coach-cal-note').innerHTML = note;
}

function restoreBodyProfile() {
  if (!state.bodyProfile) return;
  const p = state.bodyProfile;
  if (p.age) document.getElementById('inp-age').value = p.age;
  if (p.sex) document.getElementById('inp-sex').value = p.sex;
  if (p.height) document.getElementById('inp-height').value = p.height;
  if (p.weight) document.getElementById('inp-weight').value = p.weight;
  if (p.target) document.getElementById('inp-target').value = p.target;
  if (p.activity) document.getElementById('inp-activity').value = p.activity;
  if (p.age && p.sex && p.height && p.weight) recalcAll();
}

// Weight log
function addWeightLog() {
  const dateVal = document.getElementById('log-date').value;
  const kg = parseFloat(document.getElementById('log-kg').value);
  const note = document.getElementById('log-note').value.trim();
  if (!dateVal || !kg) return;
  if (!state.weightLog) state.weightLog = [];
  state.weightLog.push({ date: dateVal, kg, note, id: Date.now() });
  state.weightLog.sort((a, b) => a.date.localeCompare(b.date));
  document.getElementById('log-kg').value = '';
  document.getElementById('log-note').value = '';
  save();
  renderWeightLog();
  // Auto-update current weight input
  document.getElementById('inp-weight').value = kg;
  recalcAll();
  refreshSmartIfVisible();
}

function deleteWeightLog(id) {
  state.weightLog = (state.weightLog || []).filter(e => e.id !== id);
  save();
  renderWeightLog();
  refreshSmartIfVisible();
}

function renderWeightLog() {
  const log = state.weightLog || [];
  const list = document.getElementById('weight-log-list');
  if (!log.length) {
    list.innerHTML = '<div style="font-size:13px;color:var(--muted);font-style:italic;">Nicio Ã®nregistrare Ã®ncÄƒ. AdaugÄƒ prima greutate de azi.</div>';
    document.getElementById('weight-chart-wrap').style.display = 'none';
    return;
  }

  // Chart
  document.getElementById('weight-chart-wrap').style.display = 'block';
  renderWeightChart(log);

  // Table
  const rows = [...log].reverse().map(e => {
    const d = new Date(e.date);
    const label = d.toLocaleDateString('ro-RO', { day:'2-digit', month:'short', year:'numeric' });
    return `<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:13px;">
      <span style="color:var(--muted);min-width:100px;">${label}</span>
      <span style="font-weight:700;font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--text);">${e.kg} kg</span>
      ${e.note ? `<span style="color:var(--muted);font-style:italic;font-size:12px;">${e.note}</span>` : ''}
      <button onclick="deleteWeightLog(${e.id})" class="delete-btn" style="margin-left:auto;">âœ•</button>
    </div>`;
  }).join('');

  // Trend delta
  let trendHTML = '';
  if (log.length >= 2) {
    const first = log[0].kg;
    const last = log[log.length-1].kg;
    const diff = (last - first).toFixed(1);
    const color = diff < 0 ? 'var(--green)' : diff > 0 ? 'var(--accent)' : 'var(--muted)';
    const arrow = diff < 0 ? 'â†“' : diff > 0 ? 'â†‘' : 'â†’';
    trendHTML = `<div style="margin-bottom:12px;padding:10px 14px;background:rgba(255,255,255,0.03);border-radius:8px;display:flex;gap:20px;flex-wrap:wrap;">
      <span style="font-size:12px;color:var(--muted);">Start: <strong style="color:var(--text)">${first} kg</strong></span>
      <span style="font-size:12px;color:var(--muted);">Actual: <strong style="color:var(--text)">${last} kg</strong></span>
      <span style="font-size:14px;font-weight:700;color:${color};">${arrow} ${Math.abs(diff)} kg faÈ›Äƒ de prima Ã®nregistrare</span>
    </div>`;
  }
  list.innerHTML = trendHTML + rows;
}

let weightChartInstance = null;
function renderWeightChart(log) {
  const canvas = document.getElementById('weightChart');
  const labels = log.map(e => { const d = new Date(e.date); return d.toLocaleDateString('ro-RO',{day:'2-digit',month:'short'}); });
  const data = log.map(e => e.kg);
  const avg7 = data.map((_, i) => {
    const slice = data.slice(Math.max(0, i - 6), i + 1);
    return Math.round((slice.reduce((a, b) => a + b, 0) / slice.length) * 10) / 10;
  });

  if (weightChartInstance) { weightChartInstance.destroy(); }

  const targetW = state.bodyProfile && state.bodyProfile.target ? state.bodyProfile.target : null;

  weightChartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Greutate (kg)',
          data,
          borderColor: '#E94560',
          backgroundColor: 'rgba(233,69,96,0.1)',
          tension: 0.4,
          pointBackgroundColor: '#E94560',
          pointRadius: 5,
          fill: true,
        },
        {
          label: 'Medie 7 zile',
          data: avg7,
          borderColor: '#F5C842',
          backgroundColor: 'transparent',
          borderDash: [5,4],
          tension: 0.35,
          pointRadius: 0,
          fill: false,
        },
        ...(targetW ? [{
          label: 'ÈšintÄƒ',
          data: Array(data.length).fill(targetW),
          borderColor: 'rgba(46,204,113,0.5)',
          borderDash: [6,4],
          pointRadius: 0,
          fill: false,
        }] : [])
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#6B6B8A', font: { size: 11 } } }
      },
      scales: {
        x: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

// Set today's date as default in log input
document.getElementById('log-date').value = new Date().toISOString().split('T')[0];

function applyManualTime() {
  const start = document.getElementById('manualStartTime').value;
  const end = document.getElementById('manualEndTime').value;
  const durEl = document.getElementById('manualDuration');
  if (!start || !end) { durEl.textContent = 'â€”'; return; }
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let totalMin = (eh * 60 + em) - (sh * 60 + sm);
  if (totalMin < 0) totalMin += 24 * 60;
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  durEl.textContent = h > 0 ? `${h}h${m}m` : `${m}min`;
}

function setManualSession() {
  const start = document.getElementById('manualStartTime').value;
  const end = document.getElementById('manualEndTime').value;
  if (!start || !end) { alert('Introduce ora de start È™i sfÃ¢rÈ™it.'); return; }

  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let totalMin = (eh * 60 + em) - (sh * 60 + sm);
  if (totalMin < 0) totalMin += 24 * 60;
  const totalSec = totalMin * 60;

  // Set session timer as if it started in the past
  sessionStartTime = Date.now() - totalSec * 1000;
  const bar = document.getElementById('sessionTimerBar');
  bar.classList.add('active');
  const s = SESSIONS[state.currentSession];
  document.getElementById('sessionTimerName').textContent = s.name;

  // Update display immediately
  const mm = Math.floor(totalMin).toString().padStart(2,'0');
  const ss = '00';
  document.getElementById('sessionElapsed').textContent = `${mm}:${ss}`;
  document.getElementById('sessionTimerSub').textContent = `${countAllSets()} seturi completate`;

  clearInterval(sessionTimerInterval);
  sessionTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    const m = Math.floor(elapsed / 60).toString().padStart(2,'0');
    const sec = (elapsed % 60).toString().padStart(2,'0');
    document.getElementById('sessionElapsed').textContent = `${m}:${sec}`;
    document.getElementById('sessionTimerSub').textContent = `${countAllSets()} seturi completate`;
  }, 1000);

  updateStreak();
  generatePostSessionAnalysis(false);
  alert(`âœ… Sesiune Ã®nregistratÄƒ: ${start} â†’ ${end} (${totalMin} minute). Analiza AI smart este gata.`);
}

// Set default times to now for convenience
(function setDefaultTimes() {
  const now = new Date();
  const hh = now.getHours().toString().padStart(2,'0');
  const mm = now.getMinutes().toString().padStart(2,'0');
  const endTime = `${hh}:${mm}`;
  const startH = now.getHours() - 1;
  const startTime = `${(startH < 0 ? 23 : startH).toString().padStart(2,'0')}:${mm}`;
  const startEl = document.getElementById('manualStartTime');
  const endEl = document.getElementById('manualEndTime');
  if (startEl) startEl.value = startTime;
  if (endEl) endEl.value = endTime;
  applyManualTime();
})();

function resetAllData() {
  if (!confirm('EÈ™ti sigur? Se vor È™terge TOATE datele â€” seturi, PR-uri, greutÄƒÈ›i, streak, notiÈ›e. Pozele rÄƒmÃ¢n.\n\nAceastÄƒ acÈ›iune nu poate fi anulatÄƒ.')) return;
  localStorage.removeItem('ironplan_state');
  // Reset IndexedDB stores (except photos)
  if (photoDB) {
    const tx = photoDB.transaction(['postworkout'], 'readwrite');
    tx.objectStore('postworkout').clear();
  }
  alert('Date resetate. AplicaÈ›ia se reÃ®ncarcÄƒ.');
  location.reload();
}

// ============ PHOTO STORAGE (IndexedDB) ============
let photoDB = null;
let currentPhotoTab = 'fata';

function initPhotoDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('IronPlanPhotos', 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('progress')) {
        db.createObjectStore('progress', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('postworkout')) {
        db.createObjectStore('postworkout', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = e => { photoDB = e.target.result; resolve(photoDB); };
    req.onerror = () => reject(req.error);
  });
}

function savePhotoDB(store, data) {
  return new Promise((resolve, reject) => {
    const tx = photoDB.transaction(store, 'readwrite');
    const req = tx.objectStore(store).add(data);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function getPhotosDB(store) {
  return new Promise((resolve, reject) => {
    const tx = photoDB.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function deletePhotoDB(store, id) {
  return new Promise((resolve, reject) => {
    const tx = photoDB.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ============ PROGRESS PHOTOS ============
function switchPhotoTab(category, btn) {
  currentPhotoTab = category;
  document.querySelectorAll('.photo-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProgressPhotos();
}

async function renderProgressPhotos() {
  if (!photoDB) return;
  const grid = document.getElementById('photoGrid');
  const all = await getPhotosDB('progress');
  const filtered = all.filter(p => p.category === currentPhotoTab);

  const categoryLabels = {
    'fata':'FaÈ›Äƒ','lateral-stanga':'Lateral stÃ¢nga','lateral-dreapta':'Lateral dreapta',
    'spate':'Spate','brate':'BraÈ›e','piept':'Piept','abdomen':'Abdomen','picioare':'Picioare'
  };

  let html = filtered.map(p => `
    <div class="photo-card" onclick="openLightbox('${p.data}','${p.category} â€” ${p.date}')">
      <img src="${p.data}" alt="progres">
      <div class="photo-card-info">
        <div class="photo-card-date">${p.date}</div>
        <div class="photo-card-label">S${p.week || '?'} â€” ${categoryLabels[p.category] || p.category}</div>
      </div>
      <button class="photo-card-delete" onclick="event.stopPropagation();deleteProgressPhoto(${p.id})">âœ•</button>
    </div>`).join('');

  // Add upload button
  html += `
    <label class="photo-upload-btn">
      <span class="upload-icon">ðŸ“·</span>
      <span>AdaugÄƒ pozÄƒ<br><span style="font-size:10px;opacity:0.6;">${categoryLabels[currentPhotoTab]}</span></span>
      <input type="file" accept="image/*" style="display:none;" onchange="handleProgressPhoto(this)">
    </label>`;

  grid.innerHTML = html;
}

async function handleProgressPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const base64 = await readFileAsBase64(input.files[0]);
  const today = new Date().toLocaleDateString('ro-RO', { day:'2-digit', month:'short', year:'numeric' });
  const week = getAutoWeek() + 1;
  await savePhotoDB('progress', { data: base64, category: currentPhotoTab, date: today, week, time: Date.now() });
  renderProgressPhotos();
  input.value = '';
}

async function deleteProgressPhoto(id) {
  if (!confirm('È˜tergi aceastÄƒ pozÄƒ?')) return;
  await deletePhotoDB('progress', id);
  renderProgressPhotos();
}

// ============ COMPARE ============
let compareVisible = false;
async function toggleCompare() {
  compareVisible = !compareVisible;
  const section = document.getElementById('compareSection');
  const btn = document.getElementById('compareBtn');
  section.style.display = compareVisible ? 'block' : 'none';
  btn.textContent = compareVisible ? 'âœ• ÃŽnchide comparaÈ›ie' : 'âš–ï¸ ComparÄƒ Ã®nainte / dupÄƒ';
  if (!compareVisible) return;

  const all = await getPhotosDB('progress');
  const filtered = all.filter(p => p.category === currentPhotoTab).sort((a,b) => a.time - b.time);
  const grid = document.getElementById('compareGrid');
  if (filtered.length < 2) {
    grid.innerHTML = '<div style="font-size:13px;color:var(--muted);font-style:italic;grid-column:span 2;">Ai nevoie de cel puÈ›in 2 poze Ã®n aceastÄƒ categorie pentru comparaÈ›ie.</div>';
    return;
  }
  const first = filtered[0];
  const last = filtered[filtered.length - 1];
  grid.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">ÃŽnainte â€” ${first.date}</div>
      <img src="${first.data}" style="width:100%;border-radius:10px;object-fit:cover;aspect-ratio:3/4;" onclick="openLightbox('${first.data}','ÃŽnainte â€” ${first.date}')">
    </div>
    <div style="text-align:center;">
      <div style="font-size:10px;color:var(--green);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">DupÄƒ â€” ${last.date}</div>
      <img src="${last.data}" style="width:100%;border-radius:10px;object-fit:cover;aspect-ratio:3/4;" onclick="openLightbox('${last.data}','DupÄƒ â€” ${last.date}')">
    </div>`;
}

// ============ POST WORKOUT PHOTOS ============
async function addPostWorkoutPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const base64 = await readFileAsBase64(input.files[0]);
  const s = SESSIONS[state.currentSession];
  const today = new Date().toLocaleDateString('ro-RO', { day:'2-digit', month:'short', year:'numeric' });
  await savePhotoDB('postworkout', { data: base64, session: s.name, date: today, week: getAutoWeek()+1, time: Date.now() });
  renderPostWorkoutPhotos();
  input.value = '';
}

async function renderPostWorkoutPhotos() {
  if (!photoDB) return;
  const grid = document.getElementById('postWorkoutGrid');
  if (!grid) return;
  const all = await getPhotosDB('postworkout');
  // Show last 6
  const recent = all.sort((a,b) => b.time - a.time).slice(0, 6);
  grid.innerHTML = recent.map(p => `
    <div class="post-photo-thumb" onclick="openLightbox('${p.data}','${p.session} â€” ${p.date}')">
      <img src="${p.data}" alt="">
      <button class="del-btn" onclick="event.stopPropagation();deletePostPhoto(${p.id})">âœ•</button>
    </div>`).join('');
}

async function deletePostPhoto(id) {
  await deletePhotoDB('postworkout', id);
  renderPostWorkoutPhotos();
}

// ============ LIGHTBOX ============
function openLightbox(src, info) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxInfo').textContent = info;
  document.getElementById('photoLightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('photoLightbox').classList.remove('active');
}

// ============ RUNDA 2 â€” STATISTICS ============

// ---- WEEKLY DASHBOARD ----
let weeklyVolumeChartInstance = null;

function renderWeeklyStats() {
  if (!state.setLogs) return;

  // Calculate total volume (kg x reps), total sets, sessions this week
  let totalVolume = 0, totalSets = 0;
  const sessionDays = new Set();

  Object.keys(state.setLogs).forEach(key => {
    const sets = state.setLogs[key];
    sets.forEach(s => {
      totalVolume += (s.kg || 0) * (s.reps || 0);
      totalSets++;
      if (s.time) {
        const d = new Date(s.time).toISOString().split('T')[0];
        sessionDays.add(d);
      }
    });
  });

  const avgRPE = state.rpe || 7;
  const streak = parseInt(document.getElementById('streakCount')?.textContent) || 0;

  const grid = document.getElementById('weeklyStatsGrid');
  if (!grid) return;
  grid.innerHTML = [
    { label: 'Volum total', value: totalVolume > 1000 ? `${(totalVolume/1000).toFixed(1)}t` : `${Math.round(totalVolume)}kg`, color: 'var(--accent)', icon: 'ðŸ‹ï¸' },
    { label: 'Seturi logat', value: totalSets, color: 'var(--blue)', icon: 'ðŸ“‹' },
    { label: 'Zile active', value: sessionDays.size, color: 'var(--green)', icon: 'ðŸ“…' },
    { label: 'Streak curent', value: `${streak}ðŸ”¥`, color: 'var(--gold)', icon: '' },
  ].map(s => `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);margin-bottom:4px;">${s.label}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:${s.color};">${s.value}</div>
    </div>`).join('');

  // Volume per day chart
  const days = [];
  const vols = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const label = d.toLocaleDateString('ro-RO', { weekday: 'short' });
    days.push(label);
    let vol = 0;
    Object.values(state.setLogs).forEach(sets => {
      sets.forEach(s => {
        if (s.time && new Date(s.time).toISOString().split('T')[0] === key) {
          vol += (s.kg || 0) * (s.reps || 0);
        }
      });
    });
    vols.push(Math.round(vol));
  }

  const canvas = document.getElementById('weeklyVolumeChart');
  if (!canvas) return;
  if (weeklyVolumeChartInstance) weeklyVolumeChartInstance.destroy();
  weeklyVolumeChartInstance = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [{
        label: 'Volum (kg)',
        data: vols,
        backgroundColor: vols.map((v, i) => i === 6 ? 'rgba(233,69,96,0.8)' : 'rgba(233,69,96,0.3)'),
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { display: false } },
        y: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

// ---- HEATMAP ----
function renderHeatmap() {
  const grid = document.getElementById('heatmapGrid');
  if (!grid) return;

  // Build set of active days from setLogs
  const activeDays = new Set();
  if (state.setLogs) {
    Object.values(state.setLogs).forEach(sets => {
      sets.forEach(s => {
        if (s.time) activeDays.add(new Date(s.time).toISOString().split('T')[0]);
      });
    });
  }
  // Also from streakDates
  if (state.streakDates) state.streakDates.forEach(d => activeDays.add(d));

  const today = new Date().toISOString().split('T')[0];
  const cells = [];
  for (let i = 27; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const isToday = key === today;
    const isActive = activeDays.has(key);
    const label = d.toLocaleDateString('ro-RO', { day: '2-digit', month: 'short' });
    const color = isToday ? 'var(--gold)' : isActive ? 'var(--green)' : 'rgba(255,255,255,0.06)';
    cells.push(`<div title="${label}" style="aspect-ratio:1;border-radius:4px;background:${color};transition:transform 0.15s;cursor:default;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"></div>`);
  }
  grid.innerHTML = cells.join('');
}

// ---- BODYFAT ----
let bodyfatChartInstance = null;

function renderBodyfat() {
  const grid = document.getElementById('bodyfatGrid');
  const empty = document.getElementById('bodyfatEmpty');
  const canvas = document.getElementById('bodyfatChart');
  if (!grid || !empty || !canvas) return;

  const p = state.bodyProfile;
  if (!p || !p.weight || !p.height) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    canvas.style.display = 'none';
    return;
  }

  // BMI-based bodyfat estimate (Deurenberg formula)
  const bmi = p.weight / Math.pow(p.height / 100, 2);
  const age = p.age || 25;
  const sexFactor = p.sex === 'F' ? 5.4 : 0;
  const bf = Math.round((1.2 * bmi + 0.23 * age - 10.8 * (p.sex === 'M' ? 1 : 0) - 5.4) * 10) / 10;
  const leanMass = Math.round(p.weight * (1 - bf / 100) * 10) / 10;
  const fatMass = Math.round(p.weight * bf / 100 * 10) / 10;

  const category = bf < 10 ? 'Atletic' : bf < 15 ? 'Fitness' : bf < 20 ? 'Acceptabil' : bf < 25 ? 'Mediu' : 'Peste medie';
  const catColor = bf < 10 ? 'var(--blue)' : bf < 15 ? 'var(--green)' : bf < 20 ? 'var(--gold)' : bf < 25 ? 'var(--accent2)' : 'var(--accent)';

  empty.style.display = 'none';
  canvas.style.display = 'block';

  grid.innerHTML = [
    { label: 'Bodyfat estimat', value: `${bf}%`, color: catColor },
    { label: 'Categorie', value: category, color: catColor },
    { label: 'MasÄƒ slabÄƒ', value: `${leanMass}kg`, color: 'var(--green)' },
    { label: 'MasÄƒ grasÄƒ', value: `${fatMass}kg`, color: 'var(--muted)' },
  ].map(s => `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);margin-bottom:4px;">${s.label}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:${s.color};">${s.value}</div>
    </div>`).join('');

  // Donut chart
  if (bodyfatChartInstance) bodyfatChartInstance.destroy();
  bodyfatChartInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['MasÄƒ slabÄƒ', 'MasÄƒ grasÄƒ'],
      datasets: [{ data: [leanMass, fatMass], backgroundColor: ['rgba(46,204,113,0.8)', 'rgba(233,69,96,0.5)'], borderWidth: 0 }]
    },
    options: {
      responsive: true, cutout: '70%',
      plugins: { legend: { labels: { color: '#6B6B8A', font: { size: 11 } } } }
    }
  });

  // Track BF over time using weight log
  if (state.weightLog && state.weightLog.length > 1) {
    // Show trend note
  }
}

// ---- PR PREDICTION ----
function renderPRPrediction() {
  const grid = document.getElementById('prPredictionGrid');
  const empty = document.getElementById('prPredictionEmpty');
  if (!grid || !empty) return;

  const exercises = [
    { name: 'Bench Press', sIdx: 0, eIdx: 0 },
    { name: 'Back Squat', sIdx: 2, eIdx: 0 },
    { name: 'Deadlift / RDL', sIdx: 1, eIdx: 0 },
    { name: 'Overhead Press', sIdx: 0, eIdx: 1 },
    { name: 'Incline Bench Press', sIdx: 3, eIdx: 0 },
  ];

  let hasData = false;
  const cards = exercises.map(ex => {
    const historyKey = `history-${ex.name.replace(/\s+/g,'-')}`;
    const history = state.exHistory && state.exHistory[historyKey] ? state.exHistory[historyKey] : [];
    if (history.length < 2) return null;
    hasData = true;

    const first = history[0];
    const last = history[history.length - 1];
    const progressPerSession = (last.maxKg - first.maxKg) / (history.length - 1);
    const currentRM = Math.round(last.maxKg * (1 + last.lastReps / 30));
    const prKg = state.prs && state.prs[`${ex.name}_1`] ? parseFloat(state.prs[`${ex.name}_1`]) : null;
    const currentPR = prKg ? Math.round(prKg * 1.3) : currentRM + 10; // Target = current + 10kg if no PR
    const kgNeeded = Math.max(0, currentPR - last.maxKg);
    const sessionsNeeded = progressPerSession > 0 ? Math.ceil(kgNeeded / progressPerSession) : '?';
    const daysNeeded = typeof sessionsNeeded === 'number' ? sessionsNeeded * 4 : null;

    const pct = Math.min(100, Math.round((last.maxKg / (currentPR || last.maxKg + 10)) * 100));

    return `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:16px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:10px;">ðŸŽ¯ ${ex.name}</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:11px;color:var(--muted);">Acum: <strong style="color:var(--text);">${last.maxKg}kg</strong></span>
        <span style="font-size:11px;color:var(--muted);">Target: <strong style="color:var(--gold);">${currentPR}kg</strong></span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:4px;height:6px;overflow:hidden;margin-bottom:8px;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--gold));border-radius:4px;transition:width 0.5s;"></div>
      </div>
      <div style="font-size:11px;color:var(--muted);">
        Progres: <strong style="color:var(--green);">+${progressPerSession.toFixed(1)}kg/sesiune</strong><br>
        Estimat Ã®n: <strong style="color:var(--accent2);">${daysNeeded ? `~${daysNeeded} zile` : 'date insuficiente'}</strong>
      </div>
    </div>`;
  }).filter(Boolean);

  if (!hasData) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = cards.join('');
  }
}

// ============ RUNDA 3 â€” GAMIFICATION & AI SMART ============

function escapeHTML(str) {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function dateKeyFromTime(time) {
  const d = time ? new Date(time) : new Date();
  return d.toISOString().split('T')[0];
}

function dateKeyDaysAgo(daysAgo) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

function calculateCurrentStreakValue() {
  if (!state.streakDates || !state.streakDates.length) return 0;
  const sorted = [...state.streakDates].sort();
  let streak = 1;
  for (let i = sorted.length - 1; i > 0; i--) {
    const d1 = new Date(sorted[i]);
    const d2 = new Date(sorted[i - 1]);
    const diff = (d1 - d2) / (1000 * 60 * 60 * 24);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

function collectTrainingMetrics() {
  const allSets = [];
  const setLogs = state.setLogs || {};

  Object.entries(setLogs).forEach(([key, sets]) => {
    const match = key.match(/^log-(\d+)-(\d+)$/);
    const sIdx = match ? parseInt(match[1]) : null;
    const eIdx = match ? parseInt(match[2]) : null;
    const ex = Number.isInteger(sIdx) && Number.isInteger(eIdx) ? SESSIONS[sIdx]?.exercises[eIdx] : null;
    (sets || []).forEach(set => {
      const kg = parseFloat(set.kg) || 0;
      const reps = parseInt(set.reps) || 0;
      if (!kg || !reps) return;
      const time = set.time || Date.now();
      allSets.push({
        key,
        sIdx,
        eIdx,
        exercise: ex ? ex.name : key,
        kg,
        reps,
        rpe: parseFloat(set.rpe) || 7,
        time,
        dateKey: dateKeyFromTime(time),
        volume: kg * reps,
        oneRM: kg * (1 + reps / 30)
      });
    });
  });

  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const last7 = allSets.filter(s => s.time >= weekAgo);
  const activeDaysSet = new Set(allSets.map(s => s.dateKey));
  const activeDays7Set = new Set(last7.map(s => s.dateKey));
  const totalVolume = allSets.reduce((sum, s) => sum + s.volume, 0);
  const volume7 = last7.reduce((sum, s) => sum + s.volume, 0);
  const avgRPE = allSets.length ? allSets.reduce((sum, s) => sum + s.rpe, 0) / allSets.length : (parseFloat(state.rpe) || 0);
  const avgRPE7 = last7.length ? last7.reduce((sum, s) => sum + s.rpe, 0) / last7.length : (parseFloat(state.rpe) || 0);
  const prCount = Object.values(state.prs || {}).filter(v => String(v || '').trim()).length;
  const completedExercises = Object.keys(state.checked || {}).filter(k => k.startsWith('ex-') && state.checked[k]).length;
  const sorenessCount = (state.soreness || []).length;
  const noRestLast4 = [0, 1, 2, 3].every(i => activeDaysSet.has(dateKeyDaysAgo(i)));
  const streak = calculateCurrentStreakValue();
  const xp = Math.round((allSets.length * 10) + (totalVolume / 80) + (activeDaysSet.size * 45) + (prCount * 60) + ((state.achievements || []).length * 50) + ((state.weightLog || []).length * 15));
  const level = Math.max(1, Math.floor(xp / 350) + 1);
  const topSet = allSets.length ? allSets.reduce((best, set) => set.oneRM > best.oneRM ? set : best, allSets[0]) : null;

  return {
    allSets,
    last7,
    totalSets: allSets.length,
    sets7: last7.length,
    totalVolume,
    volume7,
    activeDays: activeDaysSet.size,
    activeDays7: activeDays7Set.size,
    activeDaysSet,
    avgRPE,
    avgRPE7,
    prCount,
    completedExercises,
    sorenessCount,
    noRestLast4,
    streak,
    xp,
    level,
    topSet
  };
}

function formatVolume(v) {
  if (!v) return '0kg';
  if (v >= 10000) return `${(v / 1000).toFixed(0)}t`;
  if (v >= 1000) return `${(v / 1000).toFixed(1)}t`;
  return `${Math.round(v)}kg`;
}

function getOvertrainingStatus(metrics) {
  let score = 0;
  const reasons = [];

  if (state.sleep && state.sleep < 6) {
    score += 30;
    reasons.push(`${state.sleep}h somn`);
  } else if (state.sleep && state.sleep < 7) {
    score += 15;
    reasons.push('somn sub 7h');
  }

  if (metrics.avgRPE7 >= 8.8 || parseFloat(state.rpe) >= 9) {
    score += 25;
    reasons.push('RPE foarte ridicat');
  } else if (metrics.avgRPE7 >= 8) {
    score += 12;
    reasons.push('RPE susÈ›inut');
  }

  if (metrics.activeDays7 >= 5) {
    score += 18;
    reasons.push(`${metrics.activeDays7} zile active / 7`);
  }

  if (metrics.sets7 >= 75) {
    score += 22;
    reasons.push(`${metrics.sets7} seturi / 7 zile`);
  } else if (metrics.sets7 >= 50) {
    score += 10;
    reasons.push('volum sÄƒptÄƒmÃ¢nal mare');
  }

  if (metrics.sorenessCount >= 4) {
    score += 20;
    reasons.push(`${metrics.sorenessCount} grupe dureroase`);
  } else if (metrics.sorenessCount >= 2) {
    score += 10;
    reasons.push('DOMS prezent');
  }

  if (metrics.noRestLast4 && metrics.activeDays7 >= 4) {
    score += 15;
    reasons.push('4 zile active la rÃ¢nd');
  }

  score = Math.min(100, Math.round(score));
  const level = score >= 65 ? 'high' : score >= 35 ? 'watch' : 'ok';
  const config = {
    ok: {
      title: 'Verde',
      color: 'var(--green)',
      action: 'PoÈ›i continua planul. MenÈ›ine RPE-ul È›intÄƒ È™i logheazÄƒ somnul.'
    },
    watch: {
      title: 'AtenÈ›ie',
      color: 'var(--gold)',
      action: 'Èšine intensitatea sub control azi. PrioritizeazÄƒ Ã®ncÄƒlzirea, hidratarea È™i 7-8h somn.'
    },
    high: {
      title: 'Risc ridicat',
      color: 'var(--accent)',
      action: 'TransformÄƒ urmÄƒtoarea sesiune Ã®ntr-o zi uÈ™oarÄƒ: RPE 6-7, volum redus È™i somn prioritar.'
    }
  }[level];

  return { score, level, reasons, ...config };
}

function getSmartTrophies(metrics) {
  return [
    { id: 'first-set', icon: 'âœ…', name: 'Primul set', desc: 'Ai pornit jurnalul real de antrenament.', unlocked: metrics.totalSets >= 1 },
    { id: 'ten-sets', icon: 'ðŸ“‹', name: '10 seturi', desc: 'Volum suficient ca sÄƒ vezi primele trenduri.', unlocked: metrics.totalSets >= 10 },
    { id: 'volume-5t', icon: 'ðŸ‹ï¸', name: '5 tone', desc: 'Ai acumulat 5t volum total.', unlocked: metrics.totalVolume >= 5000 },
    { id: 'volume-20t', icon: 'ðŸ’¥', name: '20 tone', desc: 'BazÄƒ solidÄƒ de muncÄƒ Ã®n bloc.', unlocked: metrics.totalVolume >= 20000 },
    { id: 'streak-3', icon: 'ðŸ”¥', name: 'Streak 3', desc: 'Trei zile consecutive bifate.', unlocked: metrics.streak >= 3 },
    { id: 'active-week', icon: 'ðŸ“…', name: 'SÄƒptÄƒmÃ¢nÄƒ activÄƒ', desc: 'Cel puÈ›in 4 zile active Ã®n ultimele 7.', unlocked: metrics.activeDays7 >= 4 },
    { id: 'pr-hunter', icon: 'ðŸŽ¯', name: 'PR Hunter', desc: 'Ai Ã®nregistrat cel puÈ›in 3 PR-uri.', unlocked: metrics.prCount >= 3 },
    { id: 'recovery-pro', icon: 'ðŸŒ™', name: 'Recovery Pro', desc: 'Ai logat 8h+ somn.', unlocked: state.sleep >= 8 },
    { id: 'body-tracker', icon: 'âš–ï¸', name: 'Body Tracker', desc: 'Ai minimum 2 cÃ¢ntÄƒriri salvate.', unlocked: (state.weightLog || []).length >= 2 },
    { id: 'analyst', icon: 'ðŸ¤–', name: 'AI Analyst', desc: 'Ai generat analiza post-sesiune.', unlocked: !!state.postSessionAI }
  ];
}

function renderSmartDashboard() {
  const smartSection = document.getElementById('section-smart');
  if (!smartSection) return;
  const metrics = collectTrainingMetrics();
  renderSmartSummary(metrics);
  renderTrophyGrid(metrics);
  renderOvertrainingAlert(metrics);
  renderPostSessionAnalysis();
  renderPersonalLeaderboard(metrics);
}

function renderSmartSummary(metrics) {
  const grid = document.getElementById('smartSummaryGrid');
  if (!grid) return;
  const fatigue = getOvertrainingStatus(metrics);
  const nextLevelXP = metrics.level * 350;
  const currentLevelXP = (metrics.level - 1) * 350;
  const pct = Math.min(100, Math.round(((metrics.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100));
  const trophies = getSmartTrophies(metrics);
  const unlocked = trophies.filter(t => t.unlocked).length;

  grid.innerHTML = [
    { label: 'Nivel', value: `Lv. ${metrics.level}`, note: `${metrics.xp} XP total`, color: 'var(--accent)' },
    { label: 'XP spre nivel', value: `${pct}%`, note: `${Math.max(0, nextLevelXP - metrics.xp)} XP pÃ¢nÄƒ la Lv. ${metrics.level + 1}`, color: 'var(--gold)' },
    { label: 'Trofee', value: `${unlocked}/${trophies.length}`, note: `${trophies.length - unlocked} rÄƒmase`, color: 'var(--green)' },
    { label: 'Supraantrenament', value: `${fatigue.score}/100`, note: fatigue.title, color: fatigue.color }
  ].map(card => `
    <div class="smart-stat-card">
      <label>${card.label}</label>
      <div class="smart-stat-value" style="color:${card.color};">${card.value}</div>
      <div class="smart-stat-note">${card.note}</div>
    </div>
  `).join('');
}

function renderTrophyGrid(metrics) {
  const grid = document.getElementById('trophyGrid');
  const badge = document.getElementById('badgeProgress');
  if (!grid || !badge) return;
  const trophies = getSmartTrophies(metrics);
  const unlocked = trophies.filter(t => t.unlocked).length;
  badge.textContent = `${unlocked} / ${trophies.length}`;
  grid.innerHTML = trophies.map(t => `
    <div class="trophy-card ${t.unlocked ? '' : 'locked'}">
      <div class="trophy-icon">${t.unlocked ? t.icon : 'ðŸ”’'}</div>
      <div class="trophy-name">${t.name}</div>
      <div class="trophy-desc">${t.desc}</div>
      <div style="font-size:10px;color:${t.unlocked ? 'var(--green)' : 'var(--muted)'};text-transform:uppercase;letter-spacing:1px;margin-top:10px;">
        ${t.unlocked ? 'Deblocat' : 'Blocat'}
      </div>
    </div>
  `).join('');
}

function renderOvertrainingAlert(metrics) {
  const card = document.getElementById('overtrainingCard');
  if (!card) return;
  const status = getOvertrainingStatus(metrics);
  card.className = `card smart-alert ${status.level}`;
  const fillColor = status.level === 'high' ? 'var(--accent)' : status.level === 'watch' ? 'var(--gold)' : 'var(--green)';
  const reasonsHTML = status.reasons.length
    ? status.reasons.map(r => `<span class="smart-chip">${escapeHTML(r)}</span>`).join('')
    : '<span class="smart-chip">recuperare stabilÄƒ</span>';

  card.innerHTML = `
    <div class="card-header">
      <div>
        <div class="card-title" style="color:${status.color};">âš ï¸ AlertÄƒ supraantrenament: ${status.title}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">Scor risc ${status.score}/100</div>
      </div>
    </div>
    <div class="smart-meter">
      <div class="smart-meter-fill" style="width:${status.score}%;background:${fillColor};"></div>
    </div>
    <div style="font-size:13px;color:var(--text);line-height:1.7;">${status.action}</div>
    <div class="smart-chip-row">${reasonsHTML}</div>
  `;
}

function getSessionSets(sessionIdx) {
  const rows = [];
  Object.entries(state.setLogs || {}).forEach(([key, sets]) => {
    const match = key.match(/^log-(\d+)-(\d+)$/);
    if (!match) return;
    const sIdx = parseInt(match[1]);
    const eIdx = parseInt(match[2]);
    if (sIdx !== sessionIdx) return;
    const ex = SESSIONS[sIdx]?.exercises[eIdx];
    (sets || []).forEach(set => {
      const kg = parseFloat(set.kg) || 0;
      const reps = parseInt(set.reps) || 0;
      if (!kg || !reps) return;
      rows.push({
        exercise: ex ? ex.name : key,
        kg,
        reps,
        rpe: parseFloat(set.rpe) || 7,
        volume: kg * reps,
        oneRM: kg * (1 + reps / 30),
        time: set.time || Date.now()
      });
    });
  });
  return rows;
}

function buildPostSessionAnalysis() {
  const session = SESSIONS[state.currentSession];
  const metrics = collectTrainingMetrics();
  const sessionSets = getSessionSets(state.currentSession);
  const fatigue = getOvertrainingStatus(metrics);

  if (!sessionSets.length) {
    return {
      createdAt: Date.now(),
      session: session.name,
      verdict: 'Ai nevoie de date',
      summary: 'Nu am Ã®ncÄƒ seturi logate pentru sesiunea curentÄƒ. DupÄƒ 2-3 seturi, analiza devine utilÄƒ.',
      next: 'LogheazÄƒ greutate, repetÄƒri È™i RPE la exerciÈ›iile principale.',
      warning: fatigue.action
    };
  }

  const volume = sessionSets.reduce((sum, s) => sum + s.volume, 0);
  const avgRPE = sessionSets.reduce((sum, s) => sum + s.rpe, 0) / sessionSets.length;
  const topSet = sessionSets.reduce((best, set) => set.oneRM > best.oneRM ? set : best, sessionSets[0]);
  const topText = `${topSet.exercise}: ${topSet.kg}kg x ${topSet.reps} (~${Math.round(topSet.oneRM)}kg 1RM)`;
  const completed = SESSIONS[state.currentSession].exercises.filter((_, i) => state.checked[`ex-${state.currentSession}-${i}`]).length;
  const totalExercises = SESSIONS[state.currentSession].exercises.length;

  let verdict = 'Sesiune solidÄƒ';
  if (avgRPE >= 9 || fatigue.level === 'high') verdict = 'Sesiune grea, recupereazÄƒ';
  else if (avgRPE <= 7 && completed >= Math.ceil(totalExercises * 0.6)) verdict = 'Sesiune controlatÄƒ';
  else if (completed < Math.ceil(totalExercises * 0.4)) verdict = 'Sesiune parÈ›ialÄƒ';

  let next = 'MenÈ›ine greutÄƒÈ›ile È™i cautÄƒ +1 rep la primul exerciÈ›iu principal.';
  if (avgRPE <= 7.5 && fatigue.level === 'ok') next = 'PoÈ›i Ã®ncerca +2.5kg la primul compound data viitoare, dacÄƒ tehnica rÄƒmÃ¢ne curatÄƒ.';
  if (avgRPE >= 9 || fatigue.level === 'high') next = 'Data viitoare redu 1 set la compound sau pÄƒstreazÄƒ aceeaÈ™i greutate cu RPE maxim 8.';
  if (completed < Math.ceil(totalExercises * 0.4)) next = 'ÃŽnchide mai Ã®ntÃ¢i exerciÈ›iile principale, apoi accesoriile. ConsistenÈ›a bate perfecÈ›iunea.';

  return {
    createdAt: Date.now(),
    session: session.name,
    verdict,
    summary: `${sessionSets.length} seturi logate, ${formatVolume(volume)} volum, RPE mediu ${avgRPE.toFixed(1)}. Cel mai bun set: ${topText}.`,
    next,
    warning: fatigue.action
  };
}

function generatePostSessionAnalysis(manual) {
  state.postSessionAI = buildPostSessionAnalysis();
  save();
  renderPostSessionAnalysis();
  renderSmartDashboard();
  if (manual) {
    document.getElementById('postSessionAnalysis')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function renderPostSessionAnalysis() {
  const box = document.getElementById('postSessionAnalysis');
  if (!box) return;
  const a = state.postSessionAI;
  if (!a) {
    box.innerHTML = 'FinalizeazÄƒ o sesiune sau logheazÄƒ cÃ¢teva seturi ca sÄƒ aparÄƒ analiza.';
    return;
  }
  const date = new Date(a.createdAt).toLocaleString('ro-RO', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  box.innerHTML = `
    <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">${date} â€¢ ${escapeHTML(a.session)}</div>
    <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--accent);margin-bottom:8px;">${escapeHTML(a.verdict)}</div>
    <div><strong>AnalizÄƒ:</strong> ${escapeHTML(a.summary)}</div>
    <div style="margin-top:8px;"><strong>UrmÄƒtorul pas:</strong> ${escapeHTML(a.next)}</div>
    <div style="margin-top:8px;color:var(--muted);"><strong>Recuperare:</strong> ${escapeHTML(a.warning)}</div>
  `;
}

function parsePRKg(value) {
  const match = String(value || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

function buildPersonalLeaderboard() {
  const map = {};

  Object.entries(state.setLogs || {}).forEach(([key, sets]) => {
    const match = key.match(/^log-(\d+)-(\d+)$/);
    if (!match) return;
    const sIdx = parseInt(match[1]);
    const eIdx = parseInt(match[2]);
    const ex = SESSIONS[sIdx]?.exercises[eIdx];
    if (!ex || ex.name.includes('CARDIO')) return;
    if (!map[ex.name]) map[ex.name] = { name: ex.name, sets: 0, volume: 0, best1RM: 0, maxKg: 0, lastTime: 0 };
    (sets || []).forEach(set => {
      const kg = parseFloat(set.kg) || 0;
      const reps = parseInt(set.reps) || 0;
      if (!kg || !reps) return;
      const oneRM = kg * (1 + reps / 30);
      map[ex.name].sets++;
      map[ex.name].volume += kg * reps;
      map[ex.name].best1RM = Math.max(map[ex.name].best1RM, oneRM);
      map[ex.name].maxKg = Math.max(map[ex.name].maxKg, kg);
      map[ex.name].lastTime = Math.max(map[ex.name].lastTime, set.time || 0);
    });
  });

  Object.entries(state.prs || {}).forEach(([key, value]) => {
    const kg = parsePRKg(value);
    if (!kg) return;
    const name = key.replace(/_\d+$/, '');
    if (!map[name]) map[name] = { name, sets: 0, volume: 0, best1RM: 0, maxKg: 0, lastTime: 0 };
    map[name].best1RM = Math.max(map[name].best1RM, kg);
    map[name].maxKg = Math.max(map[name].maxKg, kg);
  });

  return Object.values(map)
    .map(item => ({
      ...item,
      score: (item.best1RM * 2) + (item.volume / 120) + (item.sets * 3)
    }))
    .filter(item => item.best1RM > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

function renderPersonalLeaderboard() {
  const grid = document.getElementById('leaderboardGrid');
  if (!grid) return;
  const leaders = buildPersonalLeaderboard();
  if (!leaders.length) {
    grid.innerHTML = '<div style="font-size:13px;color:var(--muted);font-style:italic;">LogheazÄƒ seturi sau PR-uri pentru leaderboard.</div>';
    return;
  }

  grid.innerHTML = leaders.map((item, idx) => `
    <div class="leaderboard-row">
      <div class="leaderboard-rank">#${idx + 1}</div>
      <div>
        <div class="leaderboard-title">${escapeHTML(item.name)}</div>
        <div class="leaderboard-meta">${item.sets} seturi â€¢ ${formatVolume(item.volume)} volum â€¢ max ${Math.round(item.maxKg * 10) / 10}kg</div>
      </div>
      <div class="leaderboard-score">${Math.round(item.best1RM)}kg</div>
    </div>
  `).join('');
}

function openPostSessionAnalysis() {
  if (!state.postSessionAI) generatePostSessionAnalysis(false);
  showSection('smart');
  setTimeout(() => document.getElementById('postSessionAnalysis')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
}

function refreshSmartIfVisible() {
  const section = document.getElementById('section-smart');
  if (section && section.classList.contains('active')) renderSmartDashboard();
}

// ============ SECTIUNI AVANSATE â€” ADVANCED APP ============
let focusExerciseIndex = 0;

function todayKey() {
  return new Date().toISOString().split('T')[0];
}

function roundToPlate(value) {
  return Math.round(value / 2.5) * 2.5;
}

function getCurrentExerciseOption() {
  const select = document.getElementById('warmupExerciseSelect');
  const value = select && select.value ? select.value : `${state.currentSession}-0`;
  const [sIdx, eIdx] = value.split('-').map(Number);
  return { sIdx, eIdx, exercise: SESSIONS[sIdx]?.exercises[eIdx] };
}

function getBestLoggedKg(sIdx, eIdx) {
  const logKey = `log-${sIdx}-${eIdx}`;
  const sets = state.setLogs && state.setLogs[logKey] ? state.setLogs[logKey] : [];
  const kgFromSets = sets.length ? Math.max(...sets.map(s => parseFloat(s.kg) || 0)) : 0;
  const ex = SESSIONS[sIdx]?.exercises[eIdx];
  const historyKey = ex ? `history-${ex.name.replace(/\s+/g,'-')}` : '';
  const history = historyKey && state.exHistory && state.exHistory[historyKey] ? state.exHistory[historyKey] : [];
  const kgFromHistory = history.length ? Math.max(...history.map(h => parseFloat(h.maxKg) || 0)) : 0;
  return Math.max(kgFromSets, kgFromHistory, 0);
}

function populateLabExerciseSelect() {
  const select = document.getElementById('warmupExerciseSelect');
  if (!select) return;
  const previous = select.value;
  select.innerHTML = SESSIONS[state.currentSession].exercises
    .map((ex, idx) => `<option value="${state.currentSession}-${idx}">${ex.name}</option>`)
    .join('');
  if ([...select.options].some(o => o.value === previous)) select.value = previous;
  const { sIdx, eIdx } = getCurrentExerciseOption();
  const best = getBestLoggedKg(sIdx, eIdx);
  const input = document.getElementById('warmupWorkKg');
  if (input && (!input.value || parseFloat(input.value) === 80) && best) input.value = best;
}

function syncToolExercise() {
  const { sIdx, eIdx } = getCurrentExerciseOption();
  const best = getBestLoggedKg(sIdx, eIdx);
  if (best) {
    const input = document.getElementById('warmupWorkKg');
    if (input) input.value = best;
    const plate = document.getElementById('plateTargetKg');
    if (plate) plate.value = best;
  }
  renderLabDashboard();
}

function renderLabDashboard() {
  const hasAdvancedSections = ['section-lab4', 'section-lab5', 'section-lab6', 'section-lab7']
    .some(id => document.getElementById(id));
  if (!hasAdvancedSections) return;
  populateLabExerciseSelect();
  restoreReadinessInputs();
  restoreProteinInput();
  restoreCoachStyle();
  if (!document.getElementById('measureDate')?.value) {
    const dateEl = document.getElementById('measureDate');
    if (dateEl) dateEl.value = todayKey();
  }
  renderPlateCalculator();
  renderWarmupSets();
  renderSubstitutions();
  renderReadiness();
  renderAdaptiveCoach();
  renderSmartDeload();
  renderPrAttemptRules();
  renderMeasurements();
  renderProteinTracker();
  renderWeeklyAIReport();
}

function renderPlateCalculator() {
  const target = parseFloat(document.getElementById('plateTargetKg')?.value || document.getElementById('warmupWorkKg')?.value) || 0;
  const bar = parseFloat(document.getElementById('plateBarKg')?.value) || 20;
  const el = document.getElementById('plateResult');
  if (!el) return;
  if (!target || target <= bar) {
    el.innerHTML = 'Introdu o greutate mai mare decÃ¢t bara.';
    return;
  }
  let side = (target - bar) / 2;
  const originalSide = side;
  const plates = [25, 20, 15, 10, 5, 2.5, 1.25];
  const used = [];
  plates.forEach(p => {
    while (side + 0.001 >= p) {
      used.push(p);
      side -= p;
    }
  });
  const loaded = bar + used.reduce((sum, p) => sum + p * 2, 0);
  const pills = used.length ? used.map(p => `<span class="plate-pill">${p}kg</span>`).join('') : '<span class="plate-pill">bara goalÄƒ</span>';
  const diff = Math.round((target - loaded) * 10) / 10;
  el.innerHTML = `
    <div><strong>Pe fiecare parte:</strong> ${pills}</div>
    <div style="margin-top:8px;color:var(--muted);">Total Ã®ncÄƒrcat: <strong>${loaded}kg</strong>${Math.abs(diff) ? ` â€¢ diferenÈ›Äƒ ${diff}kg` : ''}</div>
    <div style="font-size:11px;color:var(--muted);margin-top:6px;">NecesitÄƒ ${originalSide}kg per parte.</div>
  `;
}

function renderWarmupSets() {
  const kg = parseFloat(document.getElementById('warmupWorkKg')?.value) || 0;
  const result = document.getElementById('warmupResult');
  if (!result) return;
  if (!kg) {
    result.innerHTML = 'Introdu greutatea de lucru.';
    return;
  }
  const sets = [
    { pct: 0.4, reps: 8, note: 'tehnicÄƒ' },
    { pct: 0.55, reps: 5, note: 'ritm' },
    { pct: 0.7, reps: 3, note: 'activare' },
    { pct: 0.82, reps: 2, note: 'greu, dar curat' },
    { pct: 0.92, reps: 1, note: 'single pregÄƒtitor' },
  ].map((s, i) => ({ ...s, kg: Math.max(20, roundToPlate(kg * s.pct)), idx: i + 1 }));

  result.innerHTML = sets.map(s => `
    <div class="warmup-row">
      <div class="warmup-step">S${s.idx}</div>
      <div>${s.kg}kg Ã— ${s.reps} rep<br><span style="font-size:11px;color:var(--muted);">${s.note}</span></div>
      <button class="ai-quick-btn" onclick="document.getElementById('plateTargetKg').value=${s.kg};renderPlateCalculator();">discuri</button>
    </div>
  `).join('') + `<div style="font-size:11px;color:var(--muted);margin-top:8px;">Apoi intri Ã®n seturile de lucru la <strong style="color:var(--accent);">${kg}kg</strong>.</div>`;
}

function renderSubstitutions() {
  const result = document.getElementById('substitutionResult');
  if (!result) return;
  const { exercise } = getCurrentExerciseOption();
  const name = exercise ? exercise.name : '';
  const reason = document.getElementById('subReason')?.value || 'equipment';
  const lower = name.toLowerCase();
  let options = [];

  if (lower.includes('bench') || lower.includes('press') || lower.includes('fly')) {
    options = reason === 'shoulder'
      ? ['Machine Chest Press neutru', 'Push-up cu mÃ¢nere', 'Cable press cu prizÄƒ neutrÄƒ']
      : ['DB Press', 'Machine Press', 'Push-up Ã®ncÄƒrcat'];
  } else if (lower.includes('squat') || lower.includes('leg')) {
    options = reason === 'knee'
      ? ['Box Squat controlat', 'Leg Press ROM parÈ›ial', 'Goblet Squat lent']
      : ['Hack Squat', 'Goblet Squat', 'Bulgarian Split Squat'];
  } else if (lower.includes('deadlift') || lower.includes('rdl')) {
    options = reason === 'back'
      ? ['Hip Thrust', 'Leg Curl', 'Back Extension uÈ™or']
      : ['Trap Bar Deadlift', 'DB RDL', 'Cable Pull-through'];
  } else if (lower.includes('row') || lower.includes('pull')) {
    options = ['Chest-supported Row', 'Lat Pulldown', 'One-arm Cable Row'];
  } else {
    options = ['Varianta la aparat', 'Varianta cu gantere', 'Varianta la cablu'];
  }

  result.innerHTML = `
    <div><strong>${name || 'ExerciÈ›iu curent'}</strong></div>
    <div style="margin-top:8px;">${options.map(o => `â€¢ ${o}`).join('<br>')}</div>
    <div style="font-size:11px;color:var(--muted);margin-top:8px;">PÄƒstreazÄƒ acelaÈ™i pattern, RPE È™i numÄƒr de seturi.</div>
  `;
}

function restoreReadinessInputs() {
  const r = state.readiness || { energy: 3, stress: 3, soreness: 2 };
  if (document.getElementById('readyEnergy')) document.getElementById('readyEnergy').value = r.energy || 3;
  if (document.getElementById('readyStress')) document.getElementById('readyStress').value = r.stress || 3;
  if (document.getElementById('readySoreness')) document.getElementById('readySoreness').value = r.soreness || 2;
}

function saveReadinessInputs() {
  state.readiness = {
    energy: parseInt(document.getElementById('readyEnergy')?.value) || 3,
    stress: parseInt(document.getElementById('readyStress')?.value) || 3,
    soreness: parseInt(document.getElementById('readySoreness')?.value) || 2
  };
  save();
  renderReadiness();
  renderAdaptiveCoach();
  renderSmartDeload();
  renderPrAttemptRules();
  refreshAdvancedIfVisible();
}

function calculateReadiness() {
  const r = state.readiness || { energy: 3, stress: 3, soreness: 2 };
  const sleepBonus = state.sleep ? Math.max(-12, Math.min(14, (state.sleep - 6.5) * 7)) : 0;
  const energyScore = (r.energy || 3) * 10;
  const stressPenalty = (r.stress || 3) * 5;
  const sorenessPenalty = (r.soreness || 2) * 5 + ((state.soreness || []).length * 4);
  const rpePenalty = state.rpe && state.rpe >= 9 ? 12 : state.rpe && state.rpe >= 8 ? 6 : 0;
  return Math.max(0, Math.min(100, Math.round(50 + energyScore + sleepBonus - stressPenalty - sorenessPenalty - rpePenalty)));
}

function renderReadiness() {
  const el = document.getElementById('readinessResult');
  if (!el) return;
  const score = calculateReadiness();
  const label = score >= 75 ? 'gata de progres' : score >= 55 ? 'antreneazÄƒ controlat' : 'zi de conservare';
  const color = score >= 75 ? 'var(--green)' : score >= 55 ? 'var(--gold)' : 'var(--accent)';
  el.innerHTML = `
    <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:${color};line-height:1;">${score}/100</div>
    <div style="font-weight:800;margin-bottom:6px;">${label}</div>
    <div style="font-size:11px;color:var(--muted);">Include somn, energie, stres, dureri È™i RPE recent.</div>
  `;
}

function renderAdaptiveCoach() {
  const el = document.getElementById('adaptiveResult');
  if (!el) return;
  const score = calculateReadiness();
  const metrics = collectTrainingMetrics();
  const fatigue = getOvertrainingStatus(metrics);
  const kg = parseFloat(document.getElementById('warmupWorkKg')?.value) || 0;
  let cls = '';
  let title = 'CreÈ™te controlat';
  let text = kg ? `PoÈ›i Ã®ncerca ${kg + 2.5}kg sau +1 rep la primul set greu.` : 'PoÈ›i creÈ™te uÈ™or dacÄƒ tehnica e curatÄƒ.';

  if (score < 55 || fatigue.level === 'high') {
    cls = 'danger';
    title = 'Redu azi';
    text = 'Taie 1-2 seturi, pÄƒstreazÄƒ RPE 6-7 È™i nu urmÄƒri PR.';
  } else if (score < 75 || fatigue.level === 'watch') {
    cls = 'warn';
    title = 'MenÈ›ine';
    text = 'PÄƒstreazÄƒ greutatea, cautÄƒ execuÈ›ie curatÄƒ È™i opreÈ™te-te la RPE 8.';
  }

  el.innerHTML = `<div class="adapt-card ${cls}"><strong>${title}</strong><br>${text}</div>
    <div class="lab-result">Sesiunea curentÄƒ: <strong>${SESSIONS[state.currentSession].name}</strong></div>`;
}

function renderSmartDeload() {
  const el = document.getElementById('deloadResult');
  if (!el) return;
  const score = calculateReadiness();
  const fatigue = getOvertrainingStatus(collectTrainingMetrics());
  const week = getAutoWeek() + 1;
  const shouldDeload = fatigue.level === 'high' || score < 50 || (week >= 3 && fatigue.score >= 45);
  el.innerHTML = shouldDeload
    ? '<strong>Deload recomandat:</strong> redu volumul cu 30-50% pentru 2-4 zile. PÄƒstreazÄƒ miÈ™carea, nu intensitatea.'
    : '<strong>Deload nu e necesar acum:</strong> continuÄƒ planul È™i pÄƒstreazÄƒ ziua de odihnÄƒ realÄƒ.';
}

function renderPrAttemptRules() {
  const el = document.getElementById('prRulesResult');
  if (!el) return;
  const score = calculateReadiness();
  const fatigue = getOvertrainingStatus(collectTrainingMetrics());
  const { sIdx, eIdx, exercise } = getCurrentExerciseOption();
  const best = getBestLoggedKg(sIdx, eIdx);
  const work = parseFloat(document.getElementById('warmupWorkKg')?.value) || best;
  const allowed = score >= 78 && fatigue.level === 'ok' && state.sleep >= 7;
  el.innerHTML = allowed
    ? `<strong>PR attempt permis:</strong> la ${exercise?.name || 'exerciÈ›iul ales'}, Ã®ncearcÄƒ maxim +2.5kg peste ${work || best || 'greutatea curentÄƒ'}kg. OpreÈ™te dacÄƒ prima repetare se miÈ™cÄƒ lent.`
    : '<strong>FÄƒrÄƒ PR azi:</strong> ai nevoie de readiness 78+, somn 7h+ È™i risc verde. Azi construieÈ™ti, nu forÈ›ezi.';
}

function openFocusMode() {
  focusExerciseIndex = 0;
  renderFocusMode();
  document.getElementById('focusOverlay')?.classList.add('active');
}

function closeFocusMode() {
  document.getElementById('focusOverlay')?.classList.remove('active');
}

function renderFocusMode() {
  const s = SESSIONS[state.currentSession];
  const ex = s.exercises[focusExerciseIndex] || s.exercises[0];
  const best = getBestLoggedKg(state.currentSession, focusExerciseIndex);
  document.getElementById('focusSessionName').textContent = s.name;
  document.getElementById('focusExerciseName').textContent = ex.name;
  document.getElementById('focusMeta').innerHTML = `
    <span>${ex.sets}</span><span>RPE ${ex.rpe}</span><span>PauzÄƒ ${ex.rest}</span><span>${focusExerciseIndex + 1}/${s.exercises.length}</span>
  `;
  const suggestion = best ? `Ultima greutate bunÄƒ: <strong>${best}kg</strong>. Azi: ${calculateReadiness() >= 75 ? `poÈ›i testa ${best + 2.5}kg` : 'pÄƒstreazÄƒ È™i executÄƒ curat'}.` : 'LogheazÄƒ primul set ca sÄƒ aparÄƒ sugestii automate.';
  document.getElementById('focusSuggestion').innerHTML = `${suggestion}<br><span style="color:var(--muted);font-size:12px;">${ex.notes || ''}</span>`;
}

function focusNextExercise() {
  focusExerciseIndex = Math.min(SESSIONS[state.currentSession].exercises.length - 1, focusExerciseIndex + 1);
  renderFocusMode();
}

function focusPrevExercise() {
  focusExerciseIndex = Math.max(0, focusExerciseIndex - 1);
  renderFocusMode();
}

function focusStartRest() {
  const ex = SESSIONS[state.currentSession].exercises[focusExerciseIndex];
  startRestTimer(ex.rest, SESSIONS[state.currentSession].exercises[focusExerciseIndex + 1]?.name || 'Cooldown');
}

function addMeasurement() {
  const entry = {
    id: Date.now(),
    date: document.getElementById('measureDate').value || todayKey(),
    waist: parseFloat(document.getElementById('measureWaist').value) || null,
    chest: parseFloat(document.getElementById('measureChest').value) || null,
    arm: parseFloat(document.getElementById('measureArm').value) || null,
    thigh: parseFloat(document.getElementById('measureThigh').value) || null,
    hip: parseFloat(document.getElementById('measureHip').value) || null
  };
  if (!state.measurements) state.measurements = [];
  state.measurements.push(entry);
  state.measurements.sort((a, b) => a.date.localeCompare(b.date));
  save();
  ['measureWaist','measureChest','measureArm','measureThigh','measureHip'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderMeasurements();
}

function deleteMeasurement(id) {
  state.measurements = (state.measurements || []).filter(m => m.id !== id);
  save();
  renderMeasurements();
}

function renderMeasurements() {
  const el = document.getElementById('measurementList');
  if (!el) return;
  const list = state.measurements || [];
  if (!list.length) {
    el.innerHTML = 'Nicio mÄƒsurÄƒtoare Ã®ncÄƒ. NoteazÄƒ talia È™i 2-3 zone cheie o datÄƒ pe sÄƒptÄƒmÃ¢nÄƒ.';
    return;
  }
  const first = list[0];
  const last = list[list.length - 1];
  const waistDelta = first.waist && last.waist ? Math.round((last.waist - first.waist) * 10) / 10 : null;
  el.innerHTML = `${waistDelta !== null ? `<div style="margin-bottom:8px;">Talie: <strong>${waistDelta > 0 ? '+' : ''}${waistDelta}cm</strong> faÈ›Äƒ de prima mÄƒsurÄƒtoare.</div>` : ''}
    ${[...list].reverse().slice(0, 5).map(m => `
      <div style="display:flex;gap:10px;align-items:center;border-bottom:1px solid rgba(255,255,255,0.05);padding:7px 0;font-size:12px;">
        <strong>${m.date}</strong>
        <span>Talie ${m.waist || '-'}cm</span>
        <span>Piept ${m.chest || '-'}cm</span>
        <span>BraÈ› ${m.arm || '-'}cm</span>
        <button class="delete-btn" onclick="deleteMeasurement(${m.id})">Ã—</button>
      </div>`).join('')}`;
}

function restoreProteinInput() {
  const input = document.getElementById('proteinTodayInput');
  if (input) input.value = (state.proteinLog && state.proteinLog[todayKey()]) || '';
}

function saveProteinToday() {
  if (!state.proteinLog) state.proteinLog = {};
  state.proteinLog[todayKey()] = parseFloat(document.getElementById('proteinTodayInput')?.value) || 0;
  save();
  renderProteinTracker();
}

function renderProteinTracker() {
  const el = document.getElementById('proteinResult');
  if (!el) return;
  const grams = state.proteinLog && state.proteinLog[todayKey()] ? state.proteinLog[todayKey()] : 0;
  const weight = state.bodyProfile && state.bodyProfile.weight ? parseFloat(state.bodyProfile.weight) : 80;
  const target = Math.round(weight * 2);
  const pct = Math.min(100, Math.round(grams / target * 100));
  el.innerHTML = `
    <div style="font-family:'Bebas Neue',sans-serif;font-size:34px;color:var(--accent);">${grams || 0}g / ${target}g</div>
    <div class="smart-meter"><div class="smart-meter-fill" style="width:${pct}%;background:var(--green);"></div></div>
    <div style="font-size:11px;color:var(--muted);">${pct >= 100 ? 'Èšinta e atinsÄƒ.' : `Mai ai ${Math.max(0, target - grams)}g pÃ¢nÄƒ la È›intÄƒ.`}</div>
  `;
}

function exportIronPlanData() {
  const data = JSON.stringify({ exportedAt: new Date().toISOString(), state }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ironplan-backup-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  const el = document.getElementById('backupResult');
  if (el) el.innerHTML = '<strong>Export creat.</strong> PÄƒstreazÄƒ fiÈ™ierul JSON ca backup.';
}

function importIronPlanData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.state) throw new Error('LipseÈ™te cheia state');
      state = { ...state, ...parsed.state };
      save();
      alert('Backup importat. AplicaÈ›ia se reÃ®ncarcÄƒ.');
      location.reload();
    } catch (err) {
      alert('FiÈ™ier invalid pentru import.');
    }
  };
  reader.readAsText(file);
  input.value = '';
}

function restoreCoachStyle() {
  const select = document.getElementById('coachStyleSelect');
  if (select) select.value = state.coachStyle || 'balanced';
  renderCoachStyle();
}

function setCoachStyle(value) {
  state.coachStyle = value;
  save();
  renderCoachStyle();
}

function renderCoachStyle() {
  const el = document.getElementById('coachStyleResult');
  if (!el) return;
  const map = {
    balanced: 'Echilibrat: progres constant, feedback direct, fÄƒrÄƒ risc inutil.',
    aggressive: 'Agresiv: Ã®mpinge progresia cÃ¢nd readiness-ul e bun È™i datele susÈ›in asta.',
    conservative: 'Conservator: prioritate recuperare, tehnicÄƒ È™i longevitate.'
  };
  el.textContent = map[state.coachStyle || 'balanced'];
}

function getWeekKey() {
  const d = new Date();
  const first = new Date(d.getFullYear(), 0, 1);
  const days = Math.floor((d - first) / 86400000);
  return `${d.getFullYear()}-W${Math.ceil((days + first.getDay() + 1) / 7)}`;
}

function generateWeeklyAIReport() {
  const metrics = collectTrainingMetrics();
  const readiness = calculateReadiness();
  const fatigue = getOvertrainingStatus(metrics);
  const protein = state.proteinLog ? Object.values(state.proteinLog).filter(v => v > 0).length : 0;
  const style = state.coachStyle || 'balanced';
  let tone = style === 'aggressive' ? 'ÃŽmpinge progresia unde datele sunt verzi.' : style === 'conservative' ? 'PrioritizeazÄƒ recuperarea È™i tehnica.' : 'PÄƒstreazÄƒ progresia controlatÄƒ.';
  const report = `SÄƒptÄƒmÃ¢na asta ai ${metrics.sets7} seturi, ${formatVolume(metrics.volume7)} volum È™i ${metrics.activeDays7} zile active. Readiness: ${readiness}/100, risc: ${fatigue.title}. ${tone} Focus urmÄƒtor: ${readiness >= 75 && fatigue.level === 'ok' ? '+2.5kg sau +1 rep la compound' : readiness >= 55 ? 'menÈ›ine greutatea È™i curÄƒÈ›Äƒ execuÈ›ia' : 'redu volumul È™i recupereazÄƒ'}. Proteine logate Ã®n ${protein} zile.`;
  if (!state.weeklyAIReports) state.weeklyAIReports = {};
  state.weeklyAIReports[getWeekKey()] = { text: report, time: Date.now() };
  save();
  renderWeeklyAIReport();
}

function renderWeeklyAIReport() {
  const el = document.getElementById('weeklyAIReport');
  if (!el) return;
  const report = state.weeklyAIReports && state.weeklyAIReports[getWeekKey()];
  el.innerHTML = report ? escapeHTML(report.text) : 'ApasÄƒ â€œGenereazÄƒ raportâ€ pentru concluzia sÄƒptÄƒmÃ¢nii.';
}

function askLabCoach(question) {
  const readiness = calculateReadiness();
  const fatigue = getOvertrainingStatus(collectTrainingMetrics());
  let answer = '';
  if (question.includes('schimb')) {
    answer = readiness >= 75 && fatigue.level === 'ok' ? 'SchimbÄƒ doar un parametru: +2.5kg sau +1 rep, nu ambele.' : 'Nu schimba greutatea. Taie zgomotul: tehnicÄƒ, pauze corecte, somn.';
  } else if (question.includes('blocat')) {
    const leaders = buildPersonalLeaderboard();
    const low = leaders.length ? leaders[leaders.length - 1].name : 'Ã®ncÄƒ nu am destule date';
    answer = `Cel mai probabil punct blocat: ${low}. AdaugÄƒ 2 sesiuni cu log complet ca sÄƒ confirm.`;
  } else {
    answer = readiness >= 78 && fatigue.level === 'ok' && state.sleep >= 7 ? 'Da, dar doar +2.5kg È™i opreÈ™ti tentativa dacÄƒ viteza scade vizibil.' : 'Nu azi. Readiness sau recuperarea nu susÈ›in o tentativÄƒ bunÄƒ.';
  }
  const el = document.getElementById('quickCoachResult');
  if (el) el.innerHTML = `<strong>${escapeHTML(question)}</strong><br>${escapeHTML(answer)}`;
  if (!state.localCoachHistory) state.localCoachHistory = {};
  const key = getWeekKey();
  if (!state.localCoachHistory[key]) state.localCoachHistory[key] = [];
  state.localCoachHistory[key].push({ question, answer, time: Date.now() });
  save();
}

// ============ COACH PRO FEATURES ============
const ADVANCED_FEATURE_SECTION_IDS = ['nextplan', 'muscles', 'healthgoals', 'exlibrary', 'weeklyreport', 'mealbuilder', 'settings'];
let nextSuggestedSessionIdx = 0;

function ensureAdvancedState() {
  if (!state.injuryLog) state.injuryLog = [];
  if (!state.trainingGoals) state.trainingGoals = [];
  if (!state.mealEntries) state.mealEntries = [];
  if (!state.foodProductCache) state.foodProductCache = {};
  if (!state.fullWeeklyReports) state.fullWeeklyReports = {};
  if (!state.mealFavorites) state.mealFavorites = [];
  if (!state.importHistory) state.importHistory = [];
  if (!state.programSettings) state.programSettings = {
    objective: state.onboarding?.objective || 'definition',
    blockStart: state.onboarding?.blockStart || '2026-05-25',
    schedule: null,
    equipment: state.onboarding?.equipment || 'full'
  };
  if (!state.reminders) state.reminders = {
    enabled: false,
    workout: state.onboarding?.workoutTime || '18:30',
    protein: state.onboarding?.proteinTime || '21:00',
    weigh: state.onboarding?.weighTime || '08:00'
  };
}

function getBlockStartDateString() {
  return state.programSettings?.blockStart || state.onboarding?.blockStart || '2026-05-25';
}

function getUserSchedule() {
  return state.programSettings?.schedule || DAY_SCHEDULE;
}

function openSetupOverlay(force = false) {
  ensureAdvancedState();
  const overlay = document.getElementById('setupOverlay');
  if (!overlay) return;
  const data = state.onboarding || {};
  const p = state.bodyProfile || {};
  const settings = state.programSettings || {};
  document.getElementById('setupObjective').value = data.objective || settings.objective || 'definition';
  document.getElementById('setupLevel').value = data.level || 'intermediate';
  document.getElementById('setupWeight').value = p.weight || data.weight || '';
  document.getElementById('setupTargetWeight').value = p.target || data.targetWeight || '';
  document.getElementById('setupBlockStart').value = settings.blockStart || data.blockStart || '2026-05-25';
  document.getElementById('setupEquipment').value = data.equipment || settings.equipment || 'full';
  document.getElementById('setupWorkoutTime').value = state.reminders?.workout || data.workoutTime || '18:30';
  document.getElementById('setupProteinTime').value = state.reminders?.protein || data.proteinTime || '21:00';
  document.getElementById('setupWeighTime').value = state.reminders?.weigh || data.weighTime || '08:00';
  const selectedDays = data.days || Object.entries(getUserSchedule()).filter(([, v]) => v >= 0).map(([k]) => Number(k));
  document.querySelectorAll('#setupDays .setup-day').forEach(btn => {
    btn.classList.toggle('active', selectedDays.includes(Number(btn.dataset.day)));
  });
  overlay.classList.add('active');
  if (force) overlay.dataset.force = '1';
}

function closeSetupOverlay() {
  const overlay = document.getElementById('setupOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.dataset.force = '';
}

function toggleSetupDay(btn) {
  btn.classList.toggle('active');
}

function buildScheduleFromDays(days) {
  const order = [1, 2, 4, 5, 6, 3, 0];
  const sessionCycle = [0, 1, 2, 3, 4];
  const schedule = { 0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1, 6: -1 };
  let idx = 0;
  order.filter(day => days.includes(day)).forEach(day => {
    schedule[day] = sessionCycle[idx % sessionCycle.length];
    idx++;
  });
  return schedule;
}

function saveSetupOverlay() {
  ensureAdvancedState();
  const days = [...document.querySelectorAll('#setupDays .setup-day.active')].map(btn => Number(btn.dataset.day));
  const objective = document.getElementById('setupObjective')?.value || 'definition';
  const injuryArea = document.getElementById('setupInjuryArea')?.value || '';
  state.onboarding = {
    done: true,
    objective,
    level: document.getElementById('setupLevel')?.value || 'intermediate',
    equipment: document.getElementById('setupEquipment')?.value || 'full',
    days,
    blockStart: document.getElementById('setupBlockStart')?.value || '2026-05-25',
    workoutTime: document.getElementById('setupWorkoutTime')?.value || '18:30',
    proteinTime: document.getElementById('setupProteinTime')?.value || '21:00',
    weighTime: document.getElementById('setupWeighTime')?.value || '08:00'
  };
  state.programSettings = {
    objective,
    blockStart: state.onboarding.blockStart,
    schedule: buildScheduleFromDays(days),
    equipment: state.onboarding.equipment
  };
  if (!state.bodyProfile) state.bodyProfile = {};
  const weight = parseFloat(document.getElementById('setupWeight')?.value);
  const target = parseFloat(document.getElementById('setupTargetWeight')?.value);
  if (weight) state.bodyProfile.weight = weight;
  if (target) state.bodyProfile.target = target;
  state.reminders = {
    ...(state.reminders || {}),
    workout: state.onboarding.workoutTime,
    protein: state.onboarding.proteinTime,
    weigh: state.onboarding.weighTime
  };
  if (injuryArea) {
    state.injuryLog.push({ id: Date.now(), area: injuryArea, severity: 2, note: 'Din setup initial', date: todayKey(), time: Date.now() });
  }
  save();
  closeSetupOverlay();
  renderSettingsDashboard();
  renderAdvancedCoachFeatures();
  updateWeekUI();
  renderCountdown();
}

function renderSettingsDashboard() {
  ensureAdvancedState();
  const setupSummary = document.getElementById('setupSummary');
  const reminderBox = document.getElementById('reminderSettings');
  const objectiveBox = document.getElementById('objectiveProgramBox');
  const objective = getObjectiveSettings();
  const days = Object.entries(getUserSchedule()).filter(([, v]) => v >= 0).map(([day]) => ['Dum','Lun','Mar','Mie','Joi','Vin','Sam'][Number(day)]);
  if (setupSummary) {
    setupSummary.innerHTML = state.onboarding?.done
      ? `<strong>${escapeHTML(objective.label)}</strong><br>Zile: ${escapeHTML(days.join(', ') || 'neconfigurat')}<br>Start bloc: ${escapeHTML(getBlockStartDateString())}<br>Echipament: ${escapeHTML(state.programSettings?.equipment || 'full')}`
      : 'Setup-ul nu este complet. Il poti face in 60 secunde.';
  }
  if (objectiveBox) {
    objectiveBox.innerHTML = `<strong>${escapeHTML(objective.label)}:</strong> ${escapeHTML(objective.note)}<br><span style="color:var(--muted);font-size:12px;">Cardio: ${escapeHTML(objective.cardio)}. Pas greutate: ${objective.kgStep}kg.</span>`;
  }
  if (reminderBox) {
    const r = state.reminders || {};
    reminderBox.innerHTML = `
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:13px;">
        <input type="checkbox" ${r.enabled ? 'checked' : ''} onchange="setRemindersEnabled(this.checked)" style="accent-color:var(--accent);">
        Activeaza notificari cand aplicatia este deschisa
      </label>
      <div class="setup-grid">
        <div><label style="font-size:11px;color:var(--muted);display:block;margin-bottom:4px;">Antrenament</label><input class="pr-input" type="time" value="${escapeHTML(r.workout || '18:30')}" onchange="updateReminderTime('workout', this.value)"></div>
        <div><label style="font-size:11px;color:var(--muted);display:block;margin-bottom:4px;">Proteine</label><input class="pr-input" type="time" value="${escapeHTML(r.protein || '21:00')}" onchange="updateReminderTime('protein', this.value)"></div>
        <div><label style="font-size:11px;color:var(--muted);display:block;margin-bottom:4px;">Cantarire</label><input class="pr-input" type="time" value="${escapeHTML(r.weigh || '08:00')}" onchange="updateReminderTime('weigh', this.value)"></div>
      </div>
      <div style="font-size:11px;color:var(--muted);margin-top:8px;">Pentru notificari reale in fundal ar trebui push server; aici functioneaza cat timp PWA/browserul ruleaza.</div>`;
  }
}

const reminderTimers = {};

async function setRemindersEnabled(enabled) {
  ensureAdvancedState();
  state.reminders.enabled = !!enabled;
  if (enabled && 'Notification' in window && Notification.permission === 'default') {
    await Notification.requestPermission().catch(() => {});
  }
  save();
  scheduleDailyReminders();
  renderSettingsDashboard();
}

function updateReminderTime(key, value) {
  ensureAdvancedState();
  state.reminders[key] = value;
  save();
  scheduleDailyReminders();
}

function scheduleDailyReminders() {
  ensureAdvancedState();
  Object.values(reminderTimers).forEach(id => clearTimeout(id));
  Object.keys(reminderTimers).forEach(k => delete reminderTimers[k]);
  if (!state.reminders.enabled) return;
  [
    ['workout', 'IronPlan', 'Ai antrenament azi. Deschide Focus Mode si logheaza primul set.'],
    ['protein', 'Proteine', 'Verifica proteinele pe azi si completeaza jurnalul.'],
    ['weigh', 'Cantarire', 'Noteaza greutatea dimineata, in aceleasi conditii.']
  ].forEach(([key, title, body]) => {
    const time = state.reminders[key];
    if (!time) return;
    const [h, m] = time.split(':').map(Number);
    const target = new Date();
    target.setHours(h || 0, m || 0, 0, 0);
    if (target < new Date()) target.setDate(target.getDate() + 1);
    reminderTimers[key] = setTimeout(() => showReminder(title, body), target - new Date());
  });
}

function showReminder(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: 'icon-192.png' });
  } else {
    const banner = document.createElement('div');
    banner.className = 'welcome-banner visible';
    banner.style.display = 'block';
    banner.innerHTML = `<strong>${escapeHTML(title)}</strong><br>${escapeHTML(body)}`;
    document.querySelector('.main')?.prepend(banner);
    setTimeout(() => banner.remove(), 9000);
  }
  scheduleDailyReminders();
}

function parseCSV(text) {
  const rows = [];
  let row = [], cell = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i], next = text[i + 1];
    if (ch === '"' && inQuotes && next === '"') { cell += '"'; i++; continue; }
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === ',' && !inQuotes) { row.push(cell); cell = ''; continue; }
    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cell); cell = '';
      if (row.some(v => String(v).trim())) rows.push(row);
      row = [];
      continue;
    }
    cell += ch;
  }
  row.push(cell);
  if (row.some(v => String(v).trim())) rows.push(row);
  return rows;
}

function findHeader(headers, names) {
  const clean = headers.map(h => String(h || '').trim().toLowerCase());
  return clean.findIndex(h => names.some(n => h === n || h.includes(n)));
}

function normalizeExerciseName(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function findProgramExercise(name) {
  const needle = normalizeExerciseName(name);
  if (!needle) return null;
  let best = null;
  SESSIONS.forEach((session, sIdx) => session.exercises.forEach((ex, eIdx) => {
    const hay = normalizeExerciseName(ex.name);
    if (hay === needle || hay.includes(needle) || needle.includes(hay.split(' ')[0])) {
      if (!best || hay.length < normalizeExerciseName(best.ex.name).length) best = { sIdx, eIdx, ex };
    }
  }));
  return best;
}

function addImportedHistory(sIdx, eIdx, date, kg, reps, rpe) {
  const ex = SESSIONS[sIdx]?.exercises[eIdx];
  if (!ex) return;
  const historyKey = `history-${ex.name.replace(/\s+/g,'-')}`;
  if (!state.exHistory) state.exHistory = {};
  if (!state.exHistory[historyKey]) state.exHistory[historyKey] = [];
  const dateLabel = date ? new Date(date).toLocaleDateString('ro-RO', { day:'2-digit', month:'short' }) : todayKey();
  const list = state.exHistory[historyKey];
  const existing = list.find(h => h.date === dateLabel);
  if (existing) {
    if (estimateOneRM(kg, reps) > estimateOneRM(existing.maxKg, existing.lastReps)) {
      existing.maxKg = kg; existing.lastReps = reps; existing.maxRpe = rpe || existing.maxRpe;
    }
  } else {
    list.push({ date: dateLabel, maxKg: kg, lastReps: reps, maxRpe: rpe || 7 });
    if (list.length > 10) list.shift();
  }
}

function importWorkoutCSV(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const rows = parseCSV(e.target.result || '');
    const result = document.getElementById('csvImportResult');
    if (rows.length < 2) {
      if (result) result.textContent = 'CSV-ul nu are suficiente randuri.';
      input.value = '';
      return;
    }
    const headers = rows[0];
    const idxDate = findHeader(headers, ['date', 'data', 'start time']);
    const idxExercise = findHeader(headers, ['exercise name', 'exercise', 'exercitiu']);
    const idxKg = findHeader(headers, ['weight', 'kg', 'greutate']);
    const idxReps = findHeader(headers, ['reps', 'repetari']);
    const idxRpe = findHeader(headers, ['rpe']);
    let imported = 0, skipped = 0;
    if (!state.setLogs) state.setLogs = {};
    rows.slice(1).forEach(row => {
      const exerciseName = row[idxExercise];
      const match = findProgramExercise(exerciseName);
      const kg = parseFloat(String(row[idxKg] || '').replace(',', '.'));
      const reps = parseInt(row[idxReps]);
      if (!match || !kg || !reps) { skipped++; return; }
      const dateRaw = idxDate >= 0 ? row[idxDate] : '';
      const time = dateRaw ? new Date(dateRaw).getTime() || Date.now() : Date.now();
      const rpe = idxRpe >= 0 ? parseFloat(String(row[idxRpe] || '').replace(',', '.')) || 7 : 7;
      const key = `log-${match.sIdx}-${match.eIdx}`;
      if (!state.setLogs[key]) state.setLogs[key] = [];
      state.setLogs[key].push({ kg, reps, rpe, type: 'import', time });
      addImportedHistory(match.sIdx, match.eIdx, dateRaw, kg, reps, rpe);
      imported++;
    });
    state.importHistory.push({ file: file.name, imported, skipped, time: Date.now() });
    save();
    if (result) result.innerHTML = `<strong>${imported} seturi importate.</strong><br>${skipped} randuri sarite.`;
    renderAdvancedCoachFeatures();
    loadSession(state.currentSession || 0, null);
    input.value = '';
  };
  reader.readAsText(file);
}

function renderAdvancedCoachFeatures() {
  ensureAdvancedState();
  renderNextPlanDashboard();
  renderMuscleAnalysis();
  renderHealthGoals();
  renderExerciseLibrary();
  renderWeeklyReportDashboard();
  renderMealBuilder();
  renderSettingsDashboard();
  scheduleDailyReminders();
}

function renderAdvancedFeatureSection(id) {
  ensureAdvancedState();
  if (id === 'nextplan') renderNextPlanDashboard();
  if (id === 'muscles') renderMuscleAnalysis();
  if (id === 'healthgoals') renderHealthGoals();
  if (id === 'exlibrary') renderExerciseLibrary();
  if (id === 'weeklyreport') renderWeeklyReportDashboard();
  if (id === 'mealbuilder') renderMealBuilder();
  if (id === 'settings') renderSettingsDashboard();
}

function refreshAdvancedIfVisible() {
  const active = document.querySelector('.section.active');
  if (!active) return;
  const id = active.id.replace('section-', '');
  if (ADVANCED_FEATURE_SECTION_IDS.includes(id)) renderAdvancedFeatureSection(id);
}

function parseSetCount(setText) {
  const match = String(setText || '').match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function adjustSetText(setText, delta) {
  const count = parseSetCount(setText);
  if (!count) return setText;
  return String(setText).replace(/\d+/, Math.max(1, count + delta));
}

function getExerciseProfile(name) {
  const lower = String(name || '').toLowerCase();
  const base = {
    primary: ['General'],
    secondary: [],
    tip: 'ControleazÄƒ tempo-ul È™i pÄƒstreazÄƒ RPE-ul È›intÄƒ.',
    mistake: 'Greutate prea mare Ã®nainte ca tehnica sÄƒ fie stabilÄƒ.',
    substitutions: ['Varianta la aparat', 'Varianta cu gantere', 'Varianta la cablu']
  };

  if (lower.includes('cardio')) return {
    primary: ['Cardio'], secondary: [],
    tip: 'Èšine ritmul Ã®ntr-o zonÄƒ Ã®n care poÈ›i vorbi scurt.',
    mistake: 'Transformarea steady state-ului Ã®n sprint mascat.',
    substitutions: ['BicicletÄƒ', 'ElipticÄƒ', 'Mers Ã®nclinat']
  };
  if (lower.includes('bench') || lower.includes('press') || lower.includes('fly')) {
    if (lower.includes('shoulder')) return {
      primary: ['Umeri'], secondary: ['Triceps', 'Piept'],
      tip: 'Coaste jos, fesieri strÃ¢nÈ™i, Ã®mpinge vertical fÄƒrÄƒ arcuire excesivÄƒ.',
      mistake: 'CoborÃ¢re prea adÃ¢ncÄƒ sau cotul dus agresiv Ã®n spate.',
      substitutions: ['Machine Shoulder Press', 'Landmine Press', 'Arnold Press uÈ™or']
    };
    return {
      primary: ['Piept'], secondary: ['Umeri', 'Triceps'],
      tip: 'OmoplaÈ›ii retraÈ™i, coborÃ¢re controlatÄƒ, Ã®mpinge bara pe traseu repetabil.',
      mistake: 'SÄƒrit bara din piept sau coate deschise prea mult.',
      substitutions: ['DB Press', 'Machine Chest Press', 'Push-up Ã®ncÄƒrcat']
    };
  }
  if (lower.includes('lateral') || lower.includes('face pull')) return {
    primary: ['Umeri'], secondary: ['Spate'],
    tip: 'MiÈ™care lentÄƒ, fÄƒrÄƒ balans, pauzÄƒ scurtÄƒ sus.',
    mistake: 'Trapez dominant È™i repetÄƒri aruncate.',
    substitutions: ['Cable lateral raise', 'Reverse pec deck', 'Band face pull']
  };
  if (lower.includes('tricep') || lower.includes('pushdown')) return {
    primary: ['Triceps'], secondary: [],
    tip: 'Cot fix, extensie completÄƒ, control pe revenire.',
    mistake: 'Umerii intrÄƒ Ã®n miÈ™care È™i furÄƒ tensiunea.',
    substitutions: ['Rope Pushdown', 'Overhead cable extension', 'Close-grip push-up']
  };
  if (lower.includes('curl')) return {
    primary: ['Biceps'], secondary: [],
    tip: 'Èšine cotul stabil È™i coboarÄƒ lent.',
    mistake: 'Balans din È™old È™i jumÄƒtÄƒÈ›i de repetare.',
    substitutions: ['DB Curl', 'Cable Curl', 'Preacher Curl']
  };
  if (lower.includes('pull') || lower.includes('row')) return {
    primary: ['Spate'], secondary: ['Biceps', 'Umeri'],
    tip: 'Trage cu cotul, nu cu mÃ¢na. LasÄƒ scapula sÄƒ se miÈ™te controlat.',
    mistake: 'Tragere scurtÄƒ È™i lombar folosit ca arc.',
    substitutions: ['Chest-supported Row', 'Lat Pulldown', 'One-arm Cable Row']
  };
  if (lower.includes('deadlift') || lower.includes('rdl')) return {
    primary: ['Ischio', 'Fesieri'], secondary: ['Spate'],
    tip: 'Hinge din È™old, coloanÄƒ neutrÄƒ, bara aproape de corp.',
    mistake: 'Rotunjire lombarÄƒ sau genunchi care transformÄƒ miÈ™carea Ã®n squat.',
    substitutions: ['Hip Thrust', 'Leg Curl', 'Back Extension controlat']
  };
  if (lower.includes('squat') || lower.includes('leg press') || lower.includes('extension') || lower.includes('lunge')) return {
    primary: ['Quads', 'Fesieri'], secondary: ['Core'],
    tip: 'Genunchii urmÄƒresc vÃ¢rful piciorului, bracing Ã®nainte de coborÃ¢re.',
    mistake: 'AdÃ¢ncime compromisÄƒ È™i genunchi care cad spre interior.',
    substitutions: ['Hack Squat', 'Goblet Squat', 'Bulgarian Split Squat']
  };
  if (lower.includes('hip thrust')) return {
    primary: ['Fesieri'], secondary: ['Ischio'],
    tip: 'BÄƒrbie jos, coaste jos, blocare sus cu fesierii.',
    mistake: 'Hiperextensie lombarÄƒ Ã®n loc de extensie de È™old.',
    substitutions: ['Glute Bridge', 'Cable Pull-through', 'DB RDL']
  };
  if (lower.includes('leg curl')) return {
    primary: ['Ischio'], secondary: [],
    tip: 'StrÃ¢nge controlat È™i coboarÄƒ lent.',
    mistake: 'È˜oldurile se ridicÄƒ de pe aparat.',
    substitutions: ['Nordic Curl asistat', 'Slider Leg Curl', 'RDL uÈ™or']
  };
  if (lower.includes('calf')) return {
    primary: ['Gambe'], secondary: [],
    tip: 'PauzÄƒ jos È™i sus, amplitudine completÄƒ.',
    mistake: 'RepetÄƒri rapide doar pe jumÄƒtate de cursÄƒ.',
    substitutions: ['Standing Calf Raise', 'Seated Calf Raise', 'Single-leg Calf Raise']
  };
  if (lower.includes('plank') || lower.includes('ab') || lower.includes('pallof')) return {
    primary: ['Core'], secondary: [],
    tip: 'Coaste jos, pelvis neutru, respirÄƒ controlat.',
    mistake: 'Compensare lombarÄƒ cÃ¢nd oboseÈ™ti.',
    substitutions: ['Dead Bug', 'Cable Crunch', 'Side Plank']
  };
  return base;
}

function getAllProgramExercises() {
  const map = new Map();
  SESSIONS.forEach((session, sIdx) => {
    session.exercises.forEach((ex, eIdx) => {
      if (!map.has(ex.name)) map.set(ex.name, { ...ex, sIdx, eIdx, sessions: [session.badge] });
      else map.get(ex.name).sessions.push(session.badge);
    });
  });
  return [...map.values()];
}

function getNextTrainingSessionInfo() {
  const now = new Date();
  const schedule = getUserSchedule();
  for (let offset = 0; offset < 8; offset++) {
    const d = new Date(now);
    d.setDate(now.getDate() + offset);
    const idx = schedule[d.getDay()];
    if (idx >= 0) {
      const label = offset === 0 ? 'Azi' : offset === 1 ? 'MÃ¢ine' : d.toLocaleDateString('ro-RO', { weekday: 'long', day: '2-digit', month: 'short' });
      return { sessionIdx: idx, date: d, label };
    }
  }
  return { sessionIdx: state.currentSession || 0, date: now, label: 'UrmÄƒtoarea sesiune' };
}

function getPainMuscles() {
  const recentCutoff = Date.now() - 21 * 24 * 60 * 60 * 1000;
  const areas = (state.injuryLog || [])
    .filter(item => (item.time || 0) >= recentCutoff && (parseInt(item.severity) || 0) >= 2)
    .map(item => item.area);
  const sore = state.soreness || [];
  const map = {
    'UmÄƒr': ['Umeri', 'Piept', 'Triceps'],
    'Umar': ['Umeri', 'Piept', 'Triceps'],
    'Spate': ['Spate', 'Ischio', 'Fesieri'],
    'Genunchi': ['Quads', 'Fesieri'],
    'Cot': ['Biceps', 'Triceps'],
    'È˜old': ['Fesieri', 'Quads', 'Ischio'],
    'Sold': ['Fesieri', 'Quads', 'Ischio'],
    'GleznÄƒ': ['Quads', 'Gambe'],
    'Glezna': ['Quads', 'Gambe']
  };
  return [...new Set([...areas.flatMap(a => map[a] || []), ...sore])];
}

function exerciseConflictsWithPain(exName) {
  const profile = getExerciseProfile(exName);
  const painMuscles = getPainMuscles();
  return [...profile.primary, ...profile.secondary].some(m => painMuscles.includes(m));
}

function getPlanMode() {
  const readiness = calculateReadiness();
  const fatigue = getOvertrainingStatus(collectTrainingMetrics());
  const painCount = getPainMuscles().length;
  if (readiness < 50 || fatigue.level === 'high') return 'reduce';
  if (painCount >= 2) return 'protect';
  if (readiness >= 78 && fatigue.level === 'ok') return 'progress';
  return 'maintain';
}

function getSuggestedLoad(sIdx, eIdx, mode) {
  const best = getBestLoggedKg(sIdx, eIdx);
  const objective = getObjectiveSettings();
  if (!best) return 'logheazÄƒ primul set';
  if (mode === 'progress') return `${roundToPlate(best + objective.kgStep)}kg`;
  if (mode === 'reduce') return `${Math.max(20, roundToPlate(best * 0.9))}kg`;
  if (mode === 'protect') return `${Math.max(20, roundToPlate(best * 0.92))}kg`;
  return `${roundToPlate(best)}kg`;
}

function renderNextPlanDashboard() {
  const summary = document.getElementById('nextWorkoutSummary');
  const plan = document.getElementById('nextWorkoutPlan');
  const autoBox = document.getElementById('autoAdjustPlan');
  const badBox = document.getElementById('badDayPlan');
  if (!summary || !plan || !autoBox || !badBox) return;

  const next = getNextTrainingSessionInfo();
  nextSuggestedSessionIdx = next.sessionIdx;
  const session = SESSIONS[next.sessionIdx];
  const readiness = calculateReadiness();
  const fatigue = getOvertrainingStatus(collectTrainingMetrics());
  const mode = state.badDayMode === todayKey() ? 'reduce' : getPlanMode();
  const painMuscles = getPainMuscles();
  const objective = getObjectiveSettings();
  const modeLabel = mode === 'progress' ? 'Progres' : mode === 'reduce' ? 'Redus' : mode === 'protect' ? 'Protejat' : 'MenÈ›ine';
  const modeColor = mode === 'progress' ? 'var(--green)' : mode === 'reduce' ? 'var(--accent)' : mode === 'protect' ? 'var(--gold)' : 'var(--blue)';

  summary.innerHTML = [
    { label: 'Sesiune', value: session.badge, note: next.label, color: 'var(--accent)' },
    { label: 'Obiectiv', value: objective.label, note: objective.cardio, color: 'var(--blue)' },
    { label: 'Readiness', value: `${readiness}/100`, note: readiness >= 75 ? 'gata de progres' : readiness >= 55 ? 'controlat' : 'conservare', color: readiness >= 75 ? 'var(--green)' : readiness >= 55 ? 'var(--gold)' : 'var(--accent)' },
    { label: 'Mod azi', value: modeLabel, note: fatigue.title, color: modeColor },
    { label: 'AtenÈ›ie', value: painMuscles.length || 0, note: painMuscles.length ? painMuscles.slice(0, 3).join(', ') : 'fÄƒrÄƒ dureri active', color: painMuscles.length ? 'var(--gold)' : 'var(--green)' }
  ].map(card => `
    <div class="coach-metric">
      <label>${card.label}</label>
      <div class="coach-metric-value" style="color:${card.color};">${escapeHTML(card.value)}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:5px;">${escapeHTML(card.note)}</div>
    </div>`).join('');

  const rows = session.exercises.map((ex, i) => {
    const isCardio = ex.name.includes('CARDIO');
    const conflict = exerciseConflictsWithPain(ex.name);
    const setText = mode === 'reduce' ? adjustSetText(ex.sets, -1) : mode === 'protect' && conflict ? adjustSetText(ex.sets, -1) : ex.sets;
    const load = isCardio ? 'ritm confortabil' : getSuggestedLoad(next.sessionIdx, i, conflict ? 'protect' : mode);
    const profile = getExerciseProfile(ex.name);
    const note = conflict
      ? `Alege substituÈ›ie: ${profile.substitutions[0]}`
      : mode === 'progress' ? `CautÄƒ +1 rep sau +${objective.kgStep}kg, nu ambele.`
      : mode === 'reduce' ? 'RPE 6-7, opreÈ™te setul curat.'
      : 'Èšine forma repetabilÄƒ.';
    return `
      <div class="coach-row">
        <div>
          <div style="font-weight:800;font-size:13px;">${escapeHTML(ex.name)}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">${escapeHTML(setText)} â€¢ RPE ${escapeHTML(mode === 'reduce' ? '6-7' : ex.rpe)} â€¢ ${escapeHTML(note)}</div>
        </div>
        <span class="coach-pill ${conflict ? 'gold' : mode === 'progress' ? 'green' : mode === 'reduce' ? 'red' : ''}">${escapeHTML(load)}</span>
      </div>`;
  }).join('');
  plan.innerHTML = rows;

  const adjustText = mode === 'progress'
    ? `Readiness-ul permite progresie. Creste un singur parametru la primul compound: ${objective.kgStep}kg sau repetari.`
    : mode === 'reduce'
      ? 'Azi tai 25-35% din volum. PÄƒstreazÄƒ miÈ™carea, dar nu forÈ›a adaptarea.'
      : mode === 'protect'
        ? 'Durerile active cer substituÈ›ii È™i ROM controlat. Nu urmÄƒri PR la grupele afectate.'
        : 'MenÈ›ine planul. Obiectivul zilei este execuÈ›ie curatÄƒ È™i log complet.';
  autoBox.innerHTML = `<strong>${modeLabel}:</strong> ${escapeHTML(adjustText)}<br><span style="color:var(--muted);font-size:12px;">Status recuperare: ${escapeHTML(fatigue.action)}</span>`;

  const shortList = session.exercises.filter(ex => !ex.name.includes('CARDIO')).slice(0, 3).map((ex, idx) => {
    const load = getSuggestedLoad(next.sessionIdx, idx, 'reduce');
    return `${escapeHTML(ex.name)} â€” 2 seturi x 6-10, ${escapeHTML(load)}, RPE 6`;
  }).join('<br>');
  badBox.innerHTML = `<strong>25-35 min:</strong><br>${shortList}<br><span style="color:var(--muted);font-size:12px;">La final: 8-12 min mers Ã®nclinat sau cooldown uÈ™or.</span>`;
}

function goToSuggestedSession() {
  goToSession(nextSuggestedSessionIdx);
}

function activateBadDayMode() {
  state.badDayMode = todayKey();
  save();
  renderNextPlanDashboard();
}

const MUSCLE_TARGETS = {
  Piept: [10, 18],
  Spate: [12, 22],
  Umeri: [10, 18],
  Quads: [8, 16],
  Ischio: [8, 16],
  Fesieri: [8, 18],
  Biceps: [6, 14],
  Triceps: [6, 14],
  Core: [4, 10],
  Gambe: [4, 12]
};

function calculateMuscleStats() {
  const stats = {};
  Object.keys(MUSCLE_TARGETS).forEach(m => stats[m] = { sets: 0, volume: 0 });
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  let loggedSets = 0;

  Object.entries(state.setLogs || {}).forEach(([key, sets]) => {
    const match = key.match(/^log-(\d+)-(\d+)$/);
    if (!match) return;
    const sIdx = parseInt(match[1]);
    const eIdx = parseInt(match[2]);
    const ex = SESSIONS[sIdx]?.exercises[eIdx];
    if (!ex || ex.name.includes('CARDIO')) return;
    const profile = getExerciseProfile(ex.name);
    (sets || []).forEach(set => {
      if ((set.time || 0) < weekAgo) return;
      loggedSets++;
      const volume = (parseFloat(set.kg) || 0) * (parseInt(set.reps) || 0);
      profile.primary.forEach(m => {
        if (!stats[m]) stats[m] = { sets: 0, volume: 0 };
        stats[m].sets += 1;
        stats[m].volume += volume;
      });
      profile.secondary.forEach(m => {
        if (!stats[m]) stats[m] = { sets: 0, volume: 0 };
        stats[m].sets += 0.5;
        stats[m].volume += volume * 0.5;
      });
    });
  });

  if (!loggedSets) {
    CALENDAR_DATA[state.currentWeek || 0].days.forEach(day => {
      if (day.sessionIdx < 0) return;
      SESSIONS[day.sessionIdx].exercises.forEach(ex => {
        if (ex.name.includes('CARDIO')) return;
        const profile = getExerciseProfile(ex.name);
        const setCount = parseSetCount(ex.sets);
        profile.primary.forEach(m => {
          if (stats[m]) stats[m].sets += setCount;
        });
        profile.secondary.forEach(m => {
          if (stats[m]) stats[m].sets += setCount * 0.5;
        });
      });
    });
  }

  return { stats, source: loggedSets ? 'logat' : 'planificat', loggedSets };
}

function renderMuscleAnalysis() {
  const summary = document.getElementById('muscleSummaryGrid');
  const list = document.getElementById('muscleBalanceList');
  const advice = document.getElementById('muscleAdvice');
  if (!summary || !list || !advice) return;
  const { stats, source, loggedSets } = calculateMuscleStats();
  const entries = Object.entries(stats).filter(([, v]) => v.sets > 0).sort((a, b) => b[1].sets - a[1].sets);
  const totalSets = entries.reduce((sum, [, v]) => sum + v.sets, 0);
  const top = entries[0];
  const low = entries.filter(([m]) => MUSCLE_TARGETS[m]).sort((a, b) => a[1].sets - b[1].sets)[0];
  const alerts = entries.filter(([m, v]) => {
    const [min, max] = MUSCLE_TARGETS[m] || [0, 99];
    return v.sets < min || v.sets > max;
  });

  summary.innerHTML = [
    { label: 'SursÄƒ', value: source === 'logat' ? 'Log' : 'Plan', note: source === 'logat' ? `${loggedSets} seturi reale` : 'estimare din calendar', color: 'var(--blue)' },
    { label: 'Seturi grupe', value: Math.round(totalSets), note: 'ponderate cu secundare', color: 'var(--accent)' },
    { label: 'Top grupÄƒ', value: top ? top[0] : 'â€”', note: top ? `${top[1].sets.toFixed(1)} seturi` : 'date insuficiente', color: 'var(--green)' },
    { label: 'Alerte', value: alerts.length, note: alerts.length ? 'verificÄƒ echilibrul' : 'volum echilibrat', color: alerts.length ? 'var(--gold)' : 'var(--green)' }
  ].map(card => `
    <div class="coach-metric">
      <label>${card.label}</label>
      <div class="coach-metric-value" style="color:${card.color};">${escapeHTML(card.value)}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:5px;">${escapeHTML(card.note)}</div>
    </div>`).join('');

  list.innerHTML = entries.map(([muscle, data]) => {
    const [min, max] = MUSCLE_TARGETS[muscle] || [4, 16];
    const pct = Math.min(100, Math.round((data.sets / max) * 100));
    const cls = data.sets < min ? 'gold' : data.sets > max ? 'red' : 'green';
    const status = data.sets < min ? 'sub target' : data.sets > max ? 'prea mult' : 'ok';
    return `
      <div class="coach-row">
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <strong>${escapeHTML(muscle)}</strong>
            <span class="coach-pill ${cls}">${status}</span>
          </div>
          <div class="coach-progress"><div class="coach-progress-fill" style="width:${pct}%;"></div></div>
          <div style="font-size:11px;color:var(--muted);">${data.sets.toFixed(1)} seturi â€¢ ${formatVolume(data.volume)} volum â€¢ target ${min}-${max}</div>
        </div>
      </div>`;
  }).join('');

  const pushPullRatio = (stats.Piept.sets + stats.Umeri.sets + stats.Triceps.sets) / Math.max(1, stats.Spate.sets + stats.Biceps.sets);
  const lowerUpperRatio = (stats.Quads.sets + stats.Ischio.sets + stats.Fesieri.sets) / Math.max(1, stats.Piept.sets + stats.Spate.sets + stats.Umeri.sets);
  let text = 'Volumul aratÄƒ echilibrat. PÄƒstreazÄƒ progresia È™i logheazÄƒ seturile reale pentru feedback mai precis.';
  if (low && low[1].sets < (MUSCLE_TARGETS[low[0]]?.[0] || 0)) text = `${low[0]} este sub target. AdaugÄƒ 2-4 seturi uÈ™oare sau prioritizeazÄƒ exerciÈ›iile existente pentru grupa asta.`;
  if (pushPullRatio > 1.25) text += ' Ai mai mult push decÃ¢t pull: pune accent pe ramat / pulldown.';
  if (lowerUpperRatio < 0.7) text += ' Lower body pare sub upper: nu sÄƒri sesiunea de picioare.';
  advice.innerHTML = `<strong>Recomandare:</strong> ${escapeHTML(text)}`;
}

function addInjuryLog() {
  ensureAdvancedState();
  const area = document.getElementById('injuryArea')?.value || 'UmÄƒr';
  const severity = Math.max(1, Math.min(5, parseInt(document.getElementById('injurySeverity')?.value) || 2));
  const note = document.getElementById('injuryNote')?.value || '';
  state.injuryLog.push({ id: Date.now(), area, severity, note, date: todayKey(), time: Date.now() });
  save();
  const noteEl = document.getElementById('injuryNote');
  if (noteEl) noteEl.value = '';
  renderHealthGoals();
  renderNextPlanDashboard();
}

function deleteInjuryLog(id) {
  state.injuryLog = (state.injuryLog || []).filter(item => item.id !== id);
  save();
  renderHealthGoals();
  renderNextPlanDashboard();
}

function addTrainingGoal() {
  ensureAdvancedState();
  const title = document.getElementById('goalTitle')?.value.trim();
  const target = parseFloat(document.getElementById('goalTarget')?.value);
  const current = parseFloat(document.getElementById('goalCurrent')?.value) || 0;
  if (!title || !target) return;
  state.trainingGoals.push({
    id: Date.now(),
    title,
    type: document.getElementById('goalType')?.value || 'custom',
    target,
    current,
    start: current,
    deadline: document.getElementById('goalDeadline')?.value || '',
    createdAt: Date.now()
  });
  save();
  ['goalTitle', 'goalTarget', 'goalCurrent'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderHealthGoals();
}

function updateGoalProgress(id, value) {
  const goal = (state.trainingGoals || []).find(g => g.id === id);
  if (!goal) return;
  goal.current = parseFloat(value) || 0;
  save();
  renderHealthGoals();
}

function deleteTrainingGoal(id) {
  state.trainingGoals = (state.trainingGoals || []).filter(goal => goal.id !== id);
  save();
  renderHealthGoals();
}

function getGoalProgress(goal) {
  const start = Number.isFinite(goal.start) ? goal.start : goal.current;
  const target = parseFloat(goal.target) || 0;
  const current = parseFloat(goal.current) || 0;
  if (!target) return 0;
  if (target < start) return Math.max(0, Math.min(100, ((start - current) / Math.max(0.1, start - target)) * 100));
  return Math.max(0, Math.min(100, (current / target) * 100));
}

function renderHealthGoals() {
  const injuryList = document.getElementById('injuryList');
  const injuryAdvice = document.getElementById('injuryAdvice');
  const goalList = document.getElementById('goalList');
  if (!injuryList || !injuryAdvice || !goalList) return;
  ensureAdvancedState();

  const injuries = [...state.injuryLog].sort((a, b) => b.time - a.time).slice(0, 8);
  injuryList.innerHTML = injuries.length ? injuries.map(item => `
    <div class="coach-row">
      <div>
        <strong>${escapeHTML(item.area)}</strong>
        <span class="coach-pill ${item.severity >= 4 ? 'red' : item.severity >= 2 ? 'gold' : 'green'}">nivel ${item.severity}/5</span>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;">${escapeHTML(item.date)}${item.note ? ` â€¢ ${escapeHTML(item.note)}` : ''}</div>
      </div>
      <button class="delete-btn" onclick="deleteInjuryLog(${item.id})">Ã—</button>
    </div>`).join('') : '<div class="lab-result">Nu ai dureri logate. DacÄƒ apare ceva recurent, noteazÄƒ-l aici Ã®nainte sÄƒ devinÄƒ problemÄƒ.</div>';

  const painMuscles = getPainMuscles();
  injuryAdvice.innerHTML = painMuscles.length
    ? `<strong>Adaptare:</strong> evitÄƒ PR-uri pentru ${escapeHTML(painMuscles.join(', '))}. Alege variante la aparat/cablu È™i RPE 6-7 pÃ¢nÄƒ durerea scade.`
    : '<strong>Adaptare:</strong> fÄƒrÄƒ dureri active. PoÈ›i urma planul normal.';

  const goals = state.trainingGoals || [];
  goalList.innerHTML = goals.length ? goals.map(goal => {
    const pct = Math.round(getGoalProgress(goal));
    const daysLeft = goal.deadline ? Math.ceil((new Date(goal.deadline) - new Date()) / 86400000) : null;
    return `
      <div style="background:rgba(255,255,255,0.035);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:12px;margin-bottom:10px;">
        <div class="coach-row" style="padding:0;border-bottom:none;">
          <div>
            <strong>${escapeHTML(goal.title)}</strong>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">${escapeHTML(goal.type)} â€¢ È›intÄƒ ${goal.target}${daysLeft !== null ? ` â€¢ ${daysLeft >= 0 ? daysLeft + ' zile rÄƒmase' : 'deadline trecut'}` : ''}</div>
          </div>
          <button class="delete-btn" onclick="deleteTrainingGoal(${goal.id})">Ã—</button>
        </div>
        <div class="coach-progress"><div class="coach-progress-fill" style="width:${pct}%;"></div></div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;">
          <input class="pr-input" type="number" step="0.1" value="${goal.current}" onchange="updateGoalProgress(${goal.id}, this.value)">
          <span class="coach-pill ${pct >= 100 ? 'green' : pct >= 60 ? 'gold' : ''}">${pct}%</span>
        </div>
      </div>`;
  }).join('') : '<div class="lab-result">AdaugÄƒ un obiectiv concret: greutate pe barÄƒ, greutate corporalÄƒ sau consistenÈ›Äƒ sÄƒptÄƒmÃ¢nalÄƒ.</div>';
}

function renderExerciseLibrary() {
  const grid = document.getElementById('exerciseLibraryGrid');
  if (!grid) return;
  const search = (document.getElementById('exerciseSearchInput')?.value || '').toLowerCase();
  const muscle = document.getElementById('exerciseMuscleFilter')?.value || '';
  const exercises = getAllProgramExercises().filter(ex => {
    const profile = getExerciseProfile(ex.name);
    const haystack = `${ex.name} ${profile.primary.join(' ')} ${profile.secondary.join(' ')}`.toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesMuscle = !muscle || profile.primary.includes(muscle) || profile.secondary.includes(muscle);
    return matchesSearch && matchesMuscle;
  });

  grid.innerHTML = exercises.map(ex => {
    const profile = getExerciseProfile(ex.name);
    return `
      <div class="lab-panel">
        <h4>${escapeHTML(ex.name)}</h4>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          ${profile.primary.map(m => `<span class="coach-pill green">${escapeHTML(m)}</span>`).join('')}
          ${profile.secondary.map(m => `<span class="coach-pill">${escapeHTML(m)}</span>`).join('')}
        </div>
        <div class="lab-result">
          <strong>TehnicÄƒ:</strong> ${escapeHTML(profile.tip)}<br>
          <strong>GreÈ™ealÄƒ:</strong> ${escapeHTML(profile.mistake)}<br>
          <strong>SubstituÈ›ii:</strong> ${profile.substitutions.map(escapeHTML).join(', ')}
        </div>
        <div style="font-size:11px;color:var(--muted);margin-top:10px;">Apare Ã®n: ${escapeHTML([...new Set(ex.sessions)].join(', '))}</div>
      </div>`;
  }).join('') || '<div class="lab-result">Nu am gÄƒsit exerciÈ›ii pentru filtrul ales.</div>';
}

function buildFullWeeklyReport() {
  const metrics = collectTrainingMetrics();
  const fatigue = getOvertrainingStatus(metrics);
  const { stats } = calculateMuscleStats();
  const topMuscle = Object.entries(stats).sort((a, b) => b[1].sets - a[1].sets)[0];
  const goalsDone = (state.trainingGoals || []).filter(g => getGoalProgress(g) >= 100).length;
  const activePain = getPainMuscles();
  const proteinDays = state.proteinLog ? Object.values(state.proteinLog).filter(v => v > 0).length : 0;
  const latestWeight = state.weightLog && state.weightLog.length ? state.weightLog[state.weightLog.length - 1].kg : null;
  const topSet = metrics.topSet ? `${metrics.topSet.exercise}: ${metrics.topSet.kg}kg x ${metrics.topSet.reps}` : 'Ã®ncÄƒ nu existÄƒ set dominant';
  const focus = fatigue.level === 'high'
    ? 'recuperare, volum redus È™i somn'
    : metrics.activeDays7 >= 4 && metrics.sets7 >= 25
      ? 'progres controlat la compound-uri'
      : 'consistenÈ›Äƒ È™i log complet';
  const objective = getObjectiveSettings();
  const actions = [
    metrics.activeDays7 >= 4 ? 'Pastreaza frecventa actuala.' : 'Fixeaza minim 4 sesiuni sau redu planul la zilele reale disponibile.',
    fatigue.level === 'high' ? 'Taie 25-35% din seturi urmatoarele 3-5 zile.' : `Progresie: ${objective.kgStep}kg sau +1 rep la exercitiile curate.`,
    proteinDays >= 5 ? 'Proteinele sunt suficient de constante.' : 'Logheaza proteinele in cel putin 5 zile saptamana viitoare.'
  ];

  return {
    createdAt: Date.now(),
    text: `SÄƒptÄƒmÃ¢na asta ai ${metrics.sets7} seturi, ${formatVolume(metrics.volume7)} volum È™i ${metrics.activeDays7} zile active. Cel mai bun set: ${topSet}. Grupa dominantÄƒ: ${topMuscle ? `${topMuscle[0]} (${topMuscle[1].sets.toFixed(1)} seturi)` : 'date insuficiente'}. Status recuperare: ${fatigue.title}. ${activePain.length ? `AtenÈ›ie la ${activePain.join(', ')}.` : 'Nu ai dureri active majore.'} Proteine logate Ã®n ${proteinDays} zile${latestWeight ? `, greutate curentÄƒ ${latestWeight}kg` : ''}. Obiective finalizate: ${goalsDone}. Focus urmÄƒtor: ${focus}.`,
    actions
  };
}

function generateFullWeeklyReport() {
  ensureAdvancedState();
  state.fullWeeklyReports[getWeekKey()] = buildFullWeeklyReport();
  save();
  renderWeeklyReportDashboard();
}

function buildPRTimeline() {
  const events = [];
  const bestByExercise = {};
  const allSets = [];
  Object.entries(state.setLogs || {}).forEach(([key, sets]) => {
    const match = key.match(/^log-(\d+)-(\d+)$/);
    if (!match) return;
    const sIdx = parseInt(match[1]);
    const eIdx = parseInt(match[2]);
    const ex = SESSIONS[sIdx]?.exercises[eIdx];
    if (!ex || ex.name.includes('CARDIO')) return;
    (sets || []).forEach(set => {
      const kg = parseFloat(set.kg) || 0;
      const reps = parseInt(set.reps) || 0;
      if (!kg || !reps) return;
      allSets.push({ exercise: ex.name, kg, reps, time: set.time || Date.now(), oneRM: kg * (1 + reps / 30) });
    });
  });
  allSets.sort((a, b) => a.time - b.time).forEach(set => {
    const prev = bestByExercise[set.exercise] || 0;
    if (set.oneRM > prev + 0.25) {
      bestByExercise[set.exercise] = set.oneRM;
      events.push({ ...set, type: '1RM estimat' });
    }
  });
  Object.entries(state.prs || {}).forEach(([key, value]) => {
    const kg = parsePRKg(value);
    if (!kg) return;
    events.push({ exercise: key.replace(/_\d+$/, ''), kg, reps: 1, time: Date.now(), oneRM: kg, type: 'PR manual' });
  });
  return events.sort((a, b) => b.time - a.time).slice(0, 12);
}

function renderWeeklyReportDashboard() {
  const metricsBox = document.getElementById('weeklyReportMetrics');
  const reportBox = document.getElementById('weeklyReportBox');
  const timeline = document.getElementById('prTimelineList');
  if (!metricsBox || !reportBox || !timeline) return;
  ensureAdvancedState();
  const metrics = collectTrainingMetrics();
  const report = state.fullWeeklyReports[getWeekKey()];
  metricsBox.innerHTML = [
    { label: 'Seturi 7 zile', value: metrics.sets7, note: `${metrics.activeDays7} zile active`, color: 'var(--accent)' },
    { label: 'Volum', value: formatVolume(metrics.volume7), note: 'ultimele 7 zile', color: 'var(--green)' },
    { label: 'RPE mediu', value: metrics.avgRPE7 ? metrics.avgRPE7.toFixed(1) : 'â€”', note: 'din seturi logate', color: 'var(--gold)' },
    { label: 'PR-uri', value: buildPRTimeline().length, note: 'evenimente detectate', color: 'var(--blue)' }
  ].map(card => `
    <div class="coach-metric">
      <label>${card.label}</label>
      <div class="coach-metric-value" style="color:${card.color};">${escapeHTML(card.value)}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:5px;">${escapeHTML(card.note)}</div>
    </div>`).join('');

  reportBox.innerHTML = report
    ? `<div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">${new Date(report.createdAt).toLocaleString('ro-RO')}</div>
       <div style="line-height:1.7;margin-bottom:12px;">${escapeHTML(report.text)}</div>
       ${(report.actions || []).map((action, idx) => `<div class="coach-alert ${idx === 0 ? 'green' : idx === 1 ? '' : 'red'}">${idx + 1}. ${escapeHTML(action)}</div>`).join('')}`
    : 'ApasÄƒ â€œGenereazÄƒâ€ pentru raportul sÄƒptÄƒmÃ¢nal complet.';

  const events = buildPRTimeline();
  timeline.innerHTML = events.length ? events.map(ev => `
    <div class="coach-timeline-item">
      <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${new Date(ev.time).toLocaleDateString('ro-RO')} â€¢ ${escapeHTML(ev.type)}</div>
      <strong>${escapeHTML(ev.exercise)}</strong>
      <div style="font-size:12px;color:var(--muted);margin-top:4px;">${ev.kg}kg x ${ev.reps} â€¢ 1RM ~${Math.round(ev.oneRM)}kg</div>
    </div>`).join('') : '<div class="lab-result">LogheazÄƒ seturi sau PR-uri ca sÄƒ aparÄƒ timeline-ul.</div>';
}

let barcodeStream = null;
let barcodeScanTimer = null;
let activeBarcodeDetector = null;
let scannedFoodProduct = null;

function setBarcodeStatus(text, tone) {
  const el = document.getElementById('barcodeStatus');
  if (!el) return;
  el.textContent = text;
  el.style.borderColor = tone === 'ok' ? 'rgba(46,204,113,0.35)' : tone === 'warn' ? 'rgba(245,200,66,0.35)' : tone === 'bad' ? 'rgba(233,69,96,0.35)' : 'rgba(255,255,255,0.08)';
  el.style.color = tone === 'ok' ? 'var(--green)' : tone === 'warn' ? 'var(--gold)' : tone === 'bad' ? 'var(--accent)' : 'var(--text)';
}

function cleanBarcode(value) {
  return String(value || '').replace(/[^\d]/g, '').trim();
}

async function startBarcodeScanner() {
  const video = document.getElementById('barcodeVideo');
  if (!video) return;
  if (!window.isSecureContext) {
    setBarcodeStatus('Camera cere HTTPS sau localhost. ÃŽn PWA instalatÄƒ de pe GitHub Pages ar trebui sÄƒ meargÄƒ.', 'warn');
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    setBarcodeStatus('Browserul nu oferÄƒ acces la camerÄƒ aici. FoloseÈ™te codul manual.', 'bad');
    return;
  }
  if (!('BarcodeDetector' in window)) {
    setBarcodeStatus('Scanarea automatÄƒ nu e suportatÄƒ de browserul acesta. Introdu codul manual.', 'warn');
    return;
  }

  try {
    stopBarcodeScanner(false);
    const formats = await BarcodeDetector.getSupportedFormats().catch(() => []);
    const wanted = ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128'];
    const supported = wanted.filter(f => !formats.length || formats.includes(f));
    activeBarcodeDetector = new BarcodeDetector({ formats: supported.length ? supported : wanted });
    barcodeStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    });
    video.srcObject = barcodeStream;
    await video.play();
    setBarcodeStatus('Camera pornitÄƒ. Èšine codul de bare Ã®n chenar.', 'ok');
    barcodeScanTimer = window.setInterval(scanBarcodeFrame, 450);
  } catch (err) {
    setBarcodeStatus('Nu pot porni camera. VerificÄƒ permisiunea camerei sau introdu codul manual.', 'bad');
  }
}

function stopBarcodeScanner(updateStatus = true) {
  if (barcodeScanTimer) window.clearInterval(barcodeScanTimer);
  barcodeScanTimer = null;
  if (barcodeStream) {
    barcodeStream.getTracks().forEach(track => track.stop());
    barcodeStream = null;
  }
  const video = document.getElementById('barcodeVideo');
  if (video) video.srcObject = null;
  if (updateStatus) setBarcodeStatus('Scanner oprit.', '');
}

async function scanBarcodeFrame() {
  const video = document.getElementById('barcodeVideo');
  if (!video || !activeBarcodeDetector || video.readyState < 2) return;
  try {
    const codes = await activeBarcodeDetector.detect(video);
    const code = cleanBarcode(codes?.[0]?.rawValue);
    if (!code) return;
    const input = document.getElementById('barcodeInput');
    if (input) input.value = code;
    setBarcodeStatus(`Cod detectat: ${code}. Caut produsul...`, 'ok');
    stopBarcodeScanner(false);
    await lookupFoodByBarcode(code);
  } catch (err) {
    setBarcodeStatus('ÃŽncerc sÄƒ citesc codul. Èšine eticheta mai aproape È™i bine luminatÄƒ.', 'warn');
  }
}

async function lookupBarcodeFromInput() {
  const code = cleanBarcode(document.getElementById('barcodeInput')?.value);
  if (!code) {
    setBarcodeStatus('Introdu sau scaneazÄƒ un cod de bare valid.', 'warn');
    return;
  }
  await lookupFoodByBarcode(code);
}

async function lookupFoodByBarcode(barcode) {
  ensureAdvancedState();
  const box = document.getElementById('productLookupResult');
  if (!box) return;
  if (state.foodProductCache[barcode]) {
    renderScannedProduct(state.foodProductCache[barcode], true);
    setBarcodeStatus(`Produs gÄƒsit Ã®n cache: ${barcode}`, 'ok');
    return;
  }

  box.innerHTML = 'Caut produsul Ã®n Open Food Facts...';
  setBarcodeStatus(`Caut codul ${barcode}...`, '');
  try {
    const fields = 'code,product_name,brands,quantity,serving_size,serving_quantity,image_front_small_url,image_url,nutriments,nutriscore_grade,nova_group';
    const url = `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(barcode)}.json?fields=${fields}`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) throw new Error('network');
    const data = await response.json();
    if (!data || data.status === 0 || !data.product) {
      scannedFoodProduct = null;
      box.innerHTML = `<strong>Produs negÄƒsit.</strong><br><span style="color:var(--muted);font-size:12px;">Cod: ${escapeHTML(barcode)}. CompleteazÄƒ manual masa È™i o salvez Ã®n jurnal.</span>`;
      setBarcodeStatus('Produs negÄƒsit. ÃŽl poÈ›i adÄƒuga manual.', 'warn');
      return;
    }
    const product = normalizeOpenFoodProduct(data.product, barcode);
    state.foodProductCache[barcode] = product;
    save();
    renderScannedProduct(product, false);
    setBarcodeStatus('Produs gÄƒsit. Alege gramajul È™i adaugÄƒ-l Ã®n jurnal.', 'ok');
  } catch (err) {
    box.innerHTML = '<strong>Nu pot accesa baza de produse acum.</strong><br><span style="color:var(--muted);font-size:12px;">Probabil eÈ™ti offline sau conexiunea e blocatÄƒ. Produsele deja scanate rÄƒmÃ¢n disponibile din cache.</span>';
    setBarcodeStatus('Conexiune indisponibilÄƒ. FoloseÈ™te manual sau produse din cache.', 'bad');
  }
}

function normalizeOpenFoodProduct(product, barcode) {
  const n = product.nutriments || {};
  const per100 = {
    calories: parseFloat(n['energy-kcal_100g'] ?? n['energy-kcal']) || 0,
    protein: parseFloat(n.proteins_100g ?? n.proteins) || 0,
    carbs: parseFloat(n.carbohydrates_100g ?? n.carbohydrates) || 0,
    fats: parseFloat(n.fat_100g ?? n.fat) || 0,
    sugars: parseFloat(n.sugars_100g ?? n.sugars) || 0,
    salt: parseFloat(n.salt_100g ?? n.salt) || 0
  };
  const serving = parseFloat(product.serving_quantity) || parseFloat(String(product.serving_size || '').replace(',', '.')) || 100;
  return {
    barcode,
    name: product.product_name || `Produs ${barcode}`,
    brands: product.brands || '',
    quantity: product.quantity || '',
    servingGrams: serving,
    image: product.image_front_small_url || product.image_url || '',
    nutriscore: product.nutriscore_grade || '',
    nova: product.nova_group || '',
    per100
  };
}

function macrosForGrams(product, grams) {
  const factor = (parseFloat(grams) || 100) / 100;
  return {
    calories: Math.round((product.per100.calories || 0) * factor),
    protein: Math.round((product.per100.protein || 0) * factor * 10) / 10,
    carbs: Math.round((product.per100.carbs || 0) * factor * 10) / 10,
    fats: Math.round((product.per100.fats || 0) * factor * 10) / 10,
    sugars: Math.round((product.per100.sugars || 0) * factor * 10) / 10,
    salt: Math.round((product.per100.salt || 0) * factor * 100) / 100
  };
}

function renderScannedProduct(product, fromCache) {
  scannedFoodProduct = product;
  const grams = product.servingGrams || 100;
  const macros = macrosForGrams(product, grams);
  const box = document.getElementById('productLookupResult');
  if (!box) return;
  box.innerHTML = `
    <div class="product-result">
      ${product.image ? `<img src="${product.image}" alt="">` : '<div style="width:76px;height:76px;border-radius:8px;background:var(--bg3);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:24px;">ðŸ½</div>'}
      <div>
        <strong>${escapeHTML(product.name)}</strong>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;">${escapeHTML(product.brands || 'Brand necunoscut')}${product.quantity ? ` â€¢ ${escapeHTML(product.quantity)}` : ''}${fromCache ? ' â€¢ cache' : ''}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
          ${product.nutriscore ? `<span class="coach-pill green">Nutri ${escapeHTML(String(product.nutriscore).toUpperCase())}</span>` : ''}
          ${product.nova ? `<span class="coach-pill ${product.nova >= 4 ? 'red' : product.nova >= 3 ? 'gold' : 'green'}">NOVA ${escapeHTML(product.nova)}</span>` : ''}
          <span class="coach-pill">${escapeHTML(product.barcode)}</span>
        </div>
      </div>
    </div>
    <div class="coach-form-grid" style="margin-top:12px;">
      <div>
        <label style="font-size:11px;color:var(--muted);display:block;margin-bottom:4px;">Gramaj consumat</label>
        <input class="pr-input" id="productServingGrams" type="number" min="1" step="1" value="${grams}" oninput="refreshScannedProductMacros()">
      </div>
      <button class="add-btn" onclick="addScannedProductToMeals()">AdaugÄƒ Ã®n jurnal</button>
    </div>
    <div class="macro-mini-grid" id="scannedProductMacros">
      ${renderMacroMini(macros)}
    </div>`;
}

function renderMacroMini(macros) {
  return [
    ['kcal', macros.calories],
    ['proteine', `${macros.protein}g`],
    ['carbo', `${macros.carbs}g`],
    ['grÄƒsimi', `${macros.fats}g`]
  ].map(([label, value]) => `<div class="macro-mini"><label>${label}</label><strong>${value}</strong></div>`).join('');
}

function refreshScannedProductMacros() {
  if (!scannedFoodProduct) return;
  const grams = parseFloat(document.getElementById('productServingGrams')?.value) || scannedFoodProduct.servingGrams || 100;
  const el = document.getElementById('scannedProductMacros');
  if (el) el.innerHTML = renderMacroMini(macrosForGrams(scannedFoodProduct, grams));
}

function addScannedProductToMeals() {
  if (!scannedFoodProduct) return;
  ensureAdvancedState();
  const grams = parseFloat(document.getElementById('productServingGrams')?.value) || scannedFoodProduct.servingGrams || 100;
  const macros = macrosForGrams(scannedFoodProduct, grams);
  state.mealEntries.push({
    id: Date.now(),
    date: todayKey(),
    name: scannedFoodProduct.name,
    protein: macros.protein,
    carbs: macros.carbs,
    fats: macros.fats,
    calories: macros.calories,
    ingredients: [],
    barcode: scannedFoodProduct.barcode,
    grams,
    source: 'barcode'
  });
  save();
  syncProteinFromMeals();
  renderMealBuilder();
  setBarcodeStatus(`${scannedFoodProduct.name} adÄƒugat Ã®n jurnal.`, 'ok');
}

function collectMealInput() {
  const name = document.getElementById('mealName')?.value.trim();
  const protein = parseFloat(document.getElementById('mealProtein')?.value) || 0;
  const carbs = parseFloat(document.getElementById('mealCarbs')?.value) || 0;
  const fats = parseFloat(document.getElementById('mealFats')?.value) || 0;
  const caloriesInput = parseFloat(document.getElementById('mealCalories')?.value);
  const calories = caloriesInput || Math.round(protein * 4 + carbs * 4 + fats * 9);
  const ingredients = (document.getElementById('mealIngredients')?.value || '')
    .split(',')
    .map(x => x.trim())
    .filter(Boolean);
  return { name, protein, carbs, fats, calories, ingredients };
}

function fillMealInputs(meal) {
  const map = {
    mealName: meal.name || '',
    mealProtein: meal.protein || '',
    mealCarbs: meal.carbs || '',
    mealFats: meal.fats || '',
    mealCalories: meal.calories || '',
    mealIngredients: (meal.ingredients || []).join(', ')
  };
  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  });
}

function saveMealFavoriteFromInputs() {
  ensureAdvancedState();
  const meal = collectMealInput();
  if (!meal.name) return;
  const existing = state.mealFavorites.find(f => f.name.toLowerCase() === meal.name.toLowerCase());
  if (existing) Object.assign(existing, meal);
  else state.mealFavorites.unshift({ id: Date.now(), ...meal });
  if (state.mealFavorites.length > 12) state.mealFavorites.length = 12;
  save();
  renderMealBuilder();
}

function addFavoriteMeal(id) {
  ensureAdvancedState();
  const fav = (state.mealFavorites || []).find(f => f.id === id);
  if (!fav) return;
  state.mealEntries.push({ ...fav, id: Date.now(), date: todayKey(), source: 'favorite' });
  syncProteinFromMeals();
  save();
  renderMealBuilder();
}

function loadFavoriteMeal(id) {
  const fav = (state.mealFavorites || []).find(f => f.id === id);
  if (fav) fillMealInputs(fav);
}

function deleteMealFavorite(id) {
  state.mealFavorites = (state.mealFavorites || []).filter(f => f.id !== id);
  save();
  renderMealBuilder();
}

function addMealEntry() {
  ensureAdvancedState();
  const { name, protein, carbs, fats, calories, ingredients } = collectMealInput();
  if (!name) return;
  state.mealEntries.push({ id: Date.now(), date: todayKey(), name, protein, carbs, fats, calories, ingredients });
  save();
  ['mealName', 'mealProtein', 'mealCarbs', 'mealFats', 'mealCalories', 'mealIngredients'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  syncProteinFromMeals();
  renderMealBuilder();
}

function deleteMealEntry(id) {
  state.mealEntries = (state.mealEntries || []).filter(meal => meal.id !== id);
  save();
  syncProteinFromMeals();
  renderMealBuilder();
}

function repeatMealEntry(id) {
  const meal = (state.mealEntries || []).find(m => m.id === id);
  if (!meal) return;
  state.mealEntries.push({ ...meal, id: Date.now(), date: todayKey() });
  save();
  syncProteinFromMeals();
  renderMealBuilder();
}

function syncProteinFromMeals() {
  const today = todayKey();
  const protein = (state.mealEntries || [])
    .filter(meal => meal.date === today)
    .reduce((sum, meal) => sum + (parseFloat(meal.protein) || 0), 0);
  if (!state.proteinLog) state.proteinLog = {};
  state.proteinLog[today] = protein;
  save();
  renderProteinTracker();
}

function renderMealBuilder() {
  const totalsBox = document.getElementById('mealTotals');
  const list = document.getElementById('mealList');
  const shopping = document.getElementById('shoppingList');
  const favoritesBox = document.getElementById('mealFavoritesList');
  if (!totalsBox || !list || !shopping) return;
  ensureAdvancedState();
  const today = todayKey();
  const mealsToday = (state.mealEntries || []).filter(meal => meal.date === today);
  const totals = mealsToday.reduce((acc, meal) => {
    acc.protein += parseFloat(meal.protein) || 0;
    acc.carbs += parseFloat(meal.carbs) || 0;
    acc.fats += parseFloat(meal.fats) || 0;
    acc.calories += parseFloat(meal.calories) || 0;
    return acc;
  }, { protein: 0, carbs: 0, fats: 0, calories: 0 });
  const weight = state.bodyProfile && state.bodyProfile.weight ? parseFloat(state.bodyProfile.weight) : 80;
  const proteinTarget = Math.round(weight * 2);
  totalsBox.innerHTML = [
    { label: 'Proteine', value: `${Math.round(totals.protein)}g`, note: `${Math.max(0, proteinTarget - totals.protein).toFixed(0)}g rÄƒmase`, color: totals.protein >= proteinTarget ? 'var(--green)' : 'var(--accent)' },
    { label: 'Carbo', value: `${Math.round(totals.carbs)}g`, note: 'azi', color: 'var(--gold)' },
    { label: 'GrÄƒsimi', value: `${Math.round(totals.fats)}g`, note: 'azi', color: 'var(--blue)' },
    { label: 'Calorii', value: Math.round(totals.calories), note: `${mealsToday.length} mese`, color: 'var(--green)' }
  ].map(card => `
    <div class="coach-metric">
      <label>${card.label}</label>
      <div class="coach-metric-value" style="color:${card.color};">${escapeHTML(card.value)}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:5px;">${escapeHTML(card.note)}</div>
    </div>`).join('');

  list.innerHTML = (state.mealEntries || []).slice().reverse().slice(0, 10).map(meal => `
    <div class="coach-row">
      <div>
        <strong>${escapeHTML(meal.name)}</strong>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;">${escapeHTML(meal.date)}${meal.grams ? ` â€¢ ${meal.grams}g` : ''}${meal.barcode ? ` â€¢ cod ${escapeHTML(meal.barcode)}` : ''} â€¢ P ${meal.protein}g / C ${meal.carbs}g / F ${meal.fats}g â€¢ ${meal.calories} kcal</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;">
        <button class="ai-quick-btn" onclick="repeatMealEntry(${meal.id})">RepetÄƒ</button>
        <button class="delete-btn" onclick="deleteMealEntry(${meal.id})">Ã—</button>
      </div>
    </div>`).join('') || '<div class="lab-result">AdaugÄƒ prima masÄƒ ca sÄƒ vezi totalurile de azi.</div>';

  if (favoritesBox) {
    favoritesBox.innerHTML = (state.mealFavorites || []).length
      ? state.mealFavorites.map(fav => `
        <div style="display:flex;gap:6px;align-items:center;background:rgba(255,255,255,0.035);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:8px;">
          <button class="ai-quick-btn favorite-meal-btn" onclick="addFavoriteMeal(${fav.id})">${escapeHTML(fav.name)} Â· ${Math.round(fav.protein || 0)}g P</button>
          <button class="ai-quick-btn" onclick="loadFavoriteMeal(${fav.id})">Edit</button>
          <button class="delete-btn" onclick="deleteMealFavorite(${fav.id})">Ã—</button>
        </div>`).join('')
      : '<div class="lab-result">Salveaza mesele repetate ca favorite si le adaugi apoi dintr-un click.</div>';
  }

  const ingredients = [...new Set((state.mealEntries || [])
    .filter(meal => meal.date === today)
    .flatMap(meal => meal.ingredients || [])
    .map(x => x.toLowerCase()))];
  shopping.innerHTML = ingredients.length
    ? `<strong>ListÄƒ cumpÄƒrÄƒturi azi:</strong><br>${ingredients.map(x => `â€¢ ${escapeHTML(x)}`).join('<br>')}`
    : '<strong>ListÄƒ cumpÄƒrÄƒturi:</strong> adaugÄƒ ingrediente la mese ca sÄƒ aparÄƒ aici.';
}

// Show section override to render stats on demand
const _origShowSection = showSection;
function showSection(id, navEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const section = document.getElementById('section-' + id);
  if (!section) return;
  section.classList.add('active');
  const activeNav = navEl
    || (typeof event !== 'undefined' && event.currentTarget && event.currentTarget.classList?.contains('nav-item') ? event.currentTarget : null)
    || document.querySelector(`.nav-item[onclick*="showSection('${id}')"]`);
  if (activeNav) activeNav.classList.add('active');
  if (id === 'stats') {
    renderWeeklyStats();
    renderHeatmap();
    renderBodyfat();
    renderPRPrediction();
  }
  if (id === 'smart') renderSmartDashboard();
  if (['lab4', 'lab5', 'lab6', 'lab7'].includes(id)) renderLabDashboard();
  if (ADVANCED_FEATURE_SECTION_IDS.includes(id)) renderAdvancedFeatureSection(id);
}

// ============ RUNDA 1 FEATURES ============

function estimateOneRM(kg, reps) {
  const k = parseFloat(kg) || 0;
  const r = parseInt(reps) || 0;
  return k && r ? k * (1 + r / 30) : 0;
}

function parseRepRange(setText) {
  const text = String(setText || '').replace('â€“', '-');
  const range = text.match(/x\s*(\d+)\s*-\s*(\d+)/i);
  if (range) return { min: parseInt(range[1]), max: parseInt(range[2]) };
  const single = text.match(/x\s*(\d+)/i);
  if (single) return { min: parseInt(single[1]), max: parseInt(single[1]) };
  return { min: 8, max: 12 };
}

function getObjectiveSettings() {
  const objective = state.onboarding?.objective || state.programSettings?.objective || 'definition';
  const map = {
    definition: { label: 'Definire', kgStep: 2.5, repBias: 1, cardio: '15-25 min steady state', note: 'prioritate pe consistenta, proteine si volum controlat' },
    recomp: { label: 'Recompozitie', kgStep: 2.5, repBias: 1, cardio: '10-20 min dupa antrenament', note: 'progres lent, fara deficit agresiv' },
    muscle: { label: 'Masa musculara', kgStep: 2.5, repBias: 2, cardio: '8-12 min usor', note: 'adauga repetari inainte sa fortezi greutatea' },
    strength: { label: 'Forta', kgStep: 5, repBias: 0, cardio: 'minim, doar recuperare', note: 'progres mic pe bara si pauze mai lungi' }
  };
  return map[objective] || map.definition;
}

function getBestHistorySession(history) {
  return (history || []).reduce((best, item) => {
    if (!item) return best;
    const score = estimateOneRM(item.maxKg, item.lastReps);
    return !best || score > estimateOneRM(best.maxKg, best.lastReps) ? item : best;
  }, null);
}

function getLastLoggedSet(sIdx, eIdx) {
  const key = `log-${sIdx}-${eIdx}`;
  const sets = (state.setLogs && state.setLogs[key]) || [];
  return sets.length ? sets[sets.length - 1] : null;
}

function buildProgressionSuggestion(sIdx, eIdx) {
  const ex = SESSIONS[sIdx]?.exercises[eIdx];
  if (!ex || ex.name.includes('CARDIO')) return null;
  const lastSet = getLastLoggedSet(sIdx, eIdx);
  const historyKey = `history-${ex.name.replace(/\s+/g,'-')}`;
  const history = state.exHistory?.[historyKey] || [];
  const lastHistory = history.length ? history[history.length - 1] : null;
  const source = lastSet || (lastHistory ? { kg: lastHistory.maxKg, reps: lastHistory.lastReps, rpe: lastHistory.maxRpe } : null);
  if (!source || !source.kg || !source.reps) return null;

  const objective = getObjectiveSettings();
  const range = parseRepRange(ex.sets);
  const kg = parseFloat(source.kg) || 0;
  const reps = parseInt(source.reps) || range.min;
  const rpe = parseFloat(source.rpe || source.maxRpe || 7);
  let nextKg = kg;
  let nextReps = reps;
  let reason = 'mentine si cauta executie curata';

  if (rpe >= 9) {
    nextKg = Math.max(0, kg - (objective.kgStep === 5 ? 2.5 : 0));
    nextReps = Math.max(range.min, reps);
    reason = 'RPE mare: consolideaza, nu forta progresia';
  } else if (reps >= range.max && rpe <= 8.5) {
    nextKg = kg + objective.kgStep;
    nextReps = Math.max(range.min, range.min + objective.repBias);
    reason = `ai atins capatul intervalului; ${objective.note}`;
  } else if (rpe <= 8) {
    nextKg = kg;
    nextReps = Math.min(range.max, reps + Math.max(1, objective.repBias));
    reason = 'adauga repetari inainte de greutate';
  } else {
    reason = 'mentine greutatea si cauta aceleasi reps cu tehnica mai buna';
  }

  return {
    kg: Math.round(nextKg * 2) / 2,
    reps: Math.max(1, nextReps),
    reason,
    sourceKg: kg,
    sourceReps: reps,
    sourceRpe: rpe
  };
}

function repeatLastSet(sIdx, eIdx) {
  const last = getLastLoggedSet(sIdx, eIdx);
  if (!last) {
    const suggestion = buildProgressionSuggestion(sIdx, eIdx);
    if (suggestion) applySuggest(sIdx, eIdx, suggestion.kg, suggestion.reps);
    return;
  }
  const kgEl = document.getElementById(`new-kg-${sIdx}-${eIdx}`);
  const repEl = document.getElementById(`new-reps-${sIdx}-${eIdx}`);
  const rpeEl = document.getElementById(`new-rpe-${sIdx}-${eIdx}`);
  if (kgEl) kgEl.value = last.kg || '';
  if (repEl) repEl.value = last.reps || '';
  if (rpeEl) rpeEl.value = last.rpe || '';
  updateLiveRM(sIdx, eIdx);
  repEl?.focus();
}

function showPainSubstitution(sIdx, eIdx) {
  const ex = SESSIONS[sIdx]?.exercises[eIdx];
  if (!ex) return;
  const profile = getExerciseProfile(ex.name);
  const guide = document.getElementById(`formGuide-${sIdx}-${eIdx}`);
  if (!guide) return;
  guide.classList.add('open');
  guide.innerHTML = `<div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);margin-bottom:8px;">Substitutii safe</div>` +
    profile.substitutions.map((s, i) => `<div class="form-step"><span class="form-step-num">${i+1}</span><span>${escapeHTML(s)} Â· RPE 6-7, fara PR azi</span></div>`).join('');
}

function toggleHistory(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function applySuggest(sIdx, eIdx, kg, reps) {
  const kgEl = document.getElementById(`new-kg-${sIdx}-${eIdx}`);
  const repEl = document.getElementById(`new-reps-${sIdx}-${eIdx}`);
  if (kgEl) kgEl.value = kg;
  if (repEl) repEl.value = reps;
  updateLiveRM(sIdx, eIdx);
  kgEl?.focus();
}

function updateLiveRM(sIdx, eIdx) {
  const kg = parseFloat(document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.value);
  const reps = parseInt(document.getElementById(`new-reps-${sIdx}-${eIdx}`)?.value);
  const rmEl = document.getElementById(`liveRM-${sIdx}-${eIdx}`);
  const rmVal = document.getElementById(`liveRMval-${sIdx}-${eIdx}`);
  if (!rmEl || !rmVal) return;
  if (kg && reps) {
    const rm = Math.round(kg * (1 + reps / 30) * 10) / 10;
    rmEl.style.display = 'block';
    rmVal.textContent = `${rm}kg`;
  } else {
    rmEl.style.display = 'none';
  }
}

function saveExerciseHistory(sIdx, eIdx, sets) {
  if (!sets.length) return;
  const ex = SESSIONS[sIdx].exercises[eIdx];
  const historyKey = `history-${ex.name.replace(/\s+/g,'-')}`;
  if (!state.exHistory) state.exHistory = {};
  if (!state.exHistory[historyKey]) state.exHistory[historyKey] = [];
  const maxKg = Math.max(...sets.map(s => s.kg));
  const lastReps = sets[sets.length-1].reps;
  const maxRpe = Math.max(...sets.map(s => s.rpe || 7));
  const today = new Date().toLocaleDateString('ro-RO', { day:'2-digit', month:'short' });
  // Avoid duplicate for same day
  const last = state.exHistory[historyKey];
  if (last.length && last[last.length-1].date === today) {
    last[last.length-1] = { date: today, maxKg, lastReps, maxRpe };
  } else {
    last.push({ date: today, maxKg, lastReps, maxRpe });
    if (last.length > 10) last.shift(); // Keep last 10
  }
  save();
}

// COUNTDOWN to end of block
function renderCountdown() {
  const start = new Date(getBlockStartDateString());
  const end = new Date(start.getTime() + 28 * 24 * 60 * 60 * 1000);
  const now = new Date();
  const diffMs = end - now;
  const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const el = document.getElementById('blockCountdown');
  if (!el) return;
  if (diffDays === 0) { el.textContent = 'ðŸ Bloc finalizat!'; return; }
  el.textContent = `${diffDays} zile rÄƒmase`;
}

// ============ SESSION TIMER ============
let sessionTimerInterval = null;
let sessionStartTime = null;

function startSessionTimer() {
  if (sessionStartTime) return; // Already running
  sessionStartTime = Date.now();
  const bar = document.getElementById('sessionTimerBar');
  bar.classList.add('active');
  const s = SESSIONS[state.currentSession];
  document.getElementById('sessionTimerName').textContent = s.name;
  clearInterval(sessionTimerInterval);
  sessionTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    const m = Math.floor(elapsed / 60).toString().padStart(2,'0');
    const sec = (elapsed % 60).toString().padStart(2,'0');
    document.getElementById('sessionElapsed').textContent = `${m}:${sec}`;
    document.getElementById('sessionTimerSub').textContent = `${countAllSets()} seturi completate`;
  }, 1000);
}

function countAllSets() {
  if (!state.setLogs) return 0;
  return Object.values(state.setLogs).reduce((t, arr) => t + arr.length, 0);
}

function finishSession() {
  clearInterval(sessionTimerInterval);
  document.getElementById('sessionTimerBar').classList.remove('active');
  const elapsed = sessionStartTime ? Math.floor((Date.now() - sessionStartTime) / 1000) : 0;
  const m = Math.floor(elapsed / 60);
  const sec = elapsed % 60;
  updateStreak();
  generatePostSessionAnalysis(false);
  sessionStartTime = null;
  // Show summary
  alert(`âœ… Sesiune finalizatÄƒ!\nâ± DuratÄƒ: ${m}min ${sec}s\nðŸ’ª Seturi: ${countAllSets()}\n\nAnaliza AI smart este gata Ã®n Trofee & AI Smart.`);
}

// ============ HEVY CARD TOGGLE ============
function toggleHevyCard(sIdx, eIdx) {
  const body = document.getElementById(`hevyBody-${sIdx}-${eIdx}`);
  const arrow = document.getElementById(`hevyArrow-${sIdx}-${eIdx}`);
  const card = document.getElementById(`hevyCard-${sIdx}-${eIdx}`);
  const isOpen = body.classList.toggle('open');
  arrow.classList.toggle('open', isOpen);
  card.classList.toggle('active-ex', isOpen);
  if (isOpen) {
    setTimeout(() => {
      const inp = document.getElementById(`new-kg-${sIdx}-${eIdx}`);
      if (inp && !inp.value) inp.focus();
    }, 100);
  }
}

// ============ HEVY SET COMPLETION ============
// completeSet merged into new version below

function undoSet(logKey, setIdx, sIdx, eIdx) {
  if (!state.setLogs || !state.setLogs[logKey]) return;
  state.setLogs[logKey].splice(setIdx, 1);
  save();
  loadSession(sIdx, null);
  refreshSmartIfVisible();
  refreshAdvancedIfVisible();
}

function updateSetField(logKey, setIdx, field, val) {
  if (!state.setLogs || !state.setLogs[logKey]) return;
  state.setLogs[logKey][setIdx][field] = parseFloat(val) || 0;
  save();
  refreshSmartIfVisible();
  refreshAdvancedIfVisible();
}

function addSetRow(sIdx, eIdx) {
  document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.focus();
}

// ============ PER-EXERCISE REST TIMER ============
const exRestTimers = {};

function autoStartExRest(sIdx, eIdx, secs) {
  const bar = document.getElementById(`restBar-${sIdx}-${eIdx}`);
  if (!bar) return;
  bar.classList.add('active');
  bar.querySelectorAll('.hevy-rest-preset').forEach(b => {
    const bSecs = b.textContent === '2min' ? 120 : b.textContent === '3min' ? 180 : parseInt(b.textContent);
    b.classList.toggle('sel', bSecs === secs);
  });
  startExRestCountdown(sIdx, eIdx, secs);
}

function setExRestTimer(sIdx, eIdx, secs, btn) {
  const bar = document.getElementById(`restBar-${sIdx}-${eIdx}`);
  bar.classList.add('active');
  bar.querySelectorAll('.hevy-rest-preset').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  startExRestCountdown(sIdx, eIdx, secs);
}

function startExRestCountdown(sIdx, eIdx, totalSecs) {
  const key = `${sIdx}-${eIdx}`;
  if (exRestTimers[key]) clearInterval(exRestTimers[key]);
  let remaining = totalSecs;

  function tick() {
    const countEl = document.getElementById(`restCount-${sIdx}-${eIdx}`);
    const fillEl = document.getElementById(`restFill-${sIdx}-${eIdx}`);
    const labelEl = document.getElementById(`restLabel-${sIdx}-${eIdx}`);
    if (!countEl) { clearInterval(exRestTimers[key]); return; }

    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    countEl.textContent = m > 0 ? `${m}:${s.toString().padStart(2,'0')}` : `${remaining}s`;
    if (fillEl) {
      fillEl.style.width = `${(remaining / totalSecs) * 100}%`;
      const pct = remaining / totalSecs;
      fillEl.style.background = pct > 0.5 ? 'var(--green)' : pct > 0.25 ? 'var(--gold)' : 'var(--accent)';
    }
    if (labelEl) labelEl.textContent = remaining > 0 ? 'Pauza Ã®n curs...' : 'Pauza terminatÄƒ!';

    if (remaining <= 0) {
      clearInterval(exRestTimers[key]);
      if (countEl) countEl.textContent = 'â–¶ GO!';
      if (navigator.vibrate) navigator.vibrate([200,100,200]);
      setTimeout(() => {
        const bar = document.getElementById(`restBar-${sIdx}-${eIdx}`);
        if (bar) bar.classList.remove('active');
        document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.focus();
      }, 1500);
      return;
    }
    remaining--;
  }

  tick();
  exRestTimers[key] = setInterval(tick, 1000);
}

function skipExRest(sIdx, eIdx) {
  const key = `${sIdx}-${eIdx}`;
  if (exRestTimers[key]) clearInterval(exRestTimers[key]);
  const bar = document.getElementById(`restBar-${sIdx}-${eIdx}`);
  if (bar) bar.classList.remove('active');
  document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.focus();
}

// ============ OLD SET LOGGER (kept for compatibility) ============
function toggleLogger() {}
function saveSet() {}

// ============ REST TIMER ============
let timerInterval = null;
let timerTotal = 90;
let timerRemaining = 90;

function parseRestSeconds(restStr) {
  if (!restStr || restStr === 'â€”') return 60;
  if (restStr.includes('3 min')) return 180;
  if (restStr.includes('2â€“3 min')) return 150;
  if (restStr.includes('2 min')) return 120;
  if (restStr.includes('90s') || restStr.includes('90 s')) return 90;
  if (restStr.includes('75s')) return 75;
  if (restStr.includes('60s')) return 60;
  if (restStr.includes('45s')) return 45;
  const match = restStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 60;
}

function startRestTimer(restStr, nextExName) {
  const secs = parseRestSeconds(restStr);
  timerTotal = secs;
  timerRemaining = secs;
  document.getElementById('timerCount').textContent = secs;
  document.getElementById('timerNextEx').textContent = `UrmÄƒtor: ${nextExName || 'Cooldown'}`;
  document.getElementById('restTimerOverlay').classList.add('active');
  updateTimerRing();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerRemaining--;
    document.getElementById('timerCount').textContent = timerRemaining;
    updateTimerRing();
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timerCount').textContent = 'â–¶';
      // Vibrate if supported
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      setTimeout(closeTimer, 1500);
    }
  }, 1000);
}

function updateTimerRing() {
  const circumference = 565;
  const pct = timerRemaining / timerTotal;
  const offset = circumference * (1 - pct);
  const fill = document.getElementById('timerFill');
  if (fill) fill.style.strokeDashoffset = offset;
  // Color: greenâ†’yellowâ†’red
  const color = pct > 0.5 ? 'var(--green)' : pct > 0.25 ? 'var(--gold)' : 'var(--accent)';
  if (fill) fill.style.stroke = color;
}

function skipTimer() { closeTimer(); }
function closeTimer() {
  clearInterval(timerInterval);
  document.getElementById('restTimerOverlay').classList.remove('active');
}

// ============ PRE-SESSION RITUAL ============
const QUOTES = [
  "Disciplina este alegerea dintre ce vrei acum È™i ce vrei cel mai mult.",
  "Nu te compara cu alÈ›ii. ComparÄƒ-te cu cine erai ieri.",
  "Orice set conteazÄƒ. Orice rep conteazÄƒ. Apare È™i lucreazÄƒ.",
  "Corpul realizeazÄƒ ceea ce mintea crede.",
  "Progresul nu e linear. Dar prezenÈ›a ta trebuie sÄƒ fie.",
  "Nu ai nevoie de motivaÈ›ie. Ai nevoie de disciplinÄƒ.",
  "Cel mai greu pas e primul. Restul e inerÈ›ie.",
  "Fiecare antrenament e o investiÈ›ie Ã®n versiunea viitoare a ta.",
];

function openRitual() {
  const s = SESSIONS[state.currentSession];
  document.getElementById('ritualSessionName').textContent = s.name.split('â€”')[0].trim();
  document.getElementById('ritualQuote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById('ritualOverlay').classList.add('active');
}

function startRitual() {
  // Start countdown 3-2-1 then close
  let count = 3;
  document.querySelector('.start-session-btn').style.display = 'none';
  const countdownEl = document.createElement('div');
  countdownEl.style.cssText = 'font-family:Bebas Neue,sans-serif;font-size:120px;color:var(--accent);line-height:1;margin-bottom:32px;transition:all 0.3s;';
  countdownEl.textContent = count;
  document.querySelector('.ritual-quote').after(countdownEl);

  const tick = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
      countdownEl.style.transform = 'scale(1.2)';
      setTimeout(() => countdownEl.style.transform = 'scale(1)', 200);
      if (navigator.vibrate) navigator.vibrate(100);
    } else {
      clearInterval(tick);
      if (navigator.vibrate) navigator.vibrate([100,50,200]);
      countdownEl.textContent = 'â–¶';
      countdownEl.style.color = 'var(--green)';
      setTimeout(() => {
        closeRitual();
        updateStreak();
        startSessionTimer();
        countdownEl.remove();
        document.querySelector('.start-session-btn').style.display = '';
      }, 500);
    }
  }, 1000);
}

function closeRitual() {
  document.getElementById('ritualOverlay').classList.remove('active');
}

// ============ STREAK ============
function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (!state.streakDates) state.streakDates = [];
  if (!state.streakDates.includes(today)) {
    state.streakDates.push(today);
    save();
  }
  renderStreak();
  refreshSmartIfVisible();
}

function renderStreak() {
  if (!state.streakDates || !state.streakDates.length) {
    document.getElementById('streakCount').textContent = '0';
    return;
  }
  // Count consecutive days ending today or yesterday
  const sorted = [...state.streakDates].sort();
  let streak = 1;
  for (let i = sorted.length - 1; i > 0; i--) {
    const d1 = new Date(sorted[i]);
    const d2 = new Date(sorted[i-1]);
    const diff = (d1 - d2) / (1000*60*60*24);
    if (diff === 1) streak++;
    else break;
  }
  document.getElementById('streakCount').textContent = streak;
}

// ============ MOOD ============
function setMood(val, btn) {
  state.todayMood = val;
  save();
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ============ EXERCISE PROGRESS CHART ============
let exChartInstance = null;

function renderExerciseChart() {
  const val = document.getElementById('chartExSelect').value;
  if (!val) return;
  const [sIdx, eIdx] = val.split('-').map(Number);
  const logKey = `log-${sIdx}-${eIdx}`;
  const logs = state.setLogs && state.setLogs[logKey] ? state.setLogs[logKey] : [];

  const wrap = document.getElementById('exChartWrap');
  const empty = document.getElementById('exChartEmpty');

  if (!logs.length) {
    wrap.style.display = 'none';
    empty.style.display = 'block';
    empty.textContent = 'Niciun set logat Ã®ncÄƒ pentru acest exerciÈ›iu. ÃŽncepe sÄƒ loghezi din secÈ›iunea AstÄƒzi.';
    return;
  }

  wrap.style.display = 'block';
  empty.style.display = 'none';

  const labels = logs.map((_, i) => `Set ${i+1}`);
  const weights = logs.map(l => l.kg);
  const reps = logs.map(l => l.reps);
  // 1RM estimate: kg * (1 + reps/30)
  const oneRM = logs.map(l => Math.round(l.kg * (1 + l.reps / 30) * 10) / 10);

  if (exChartInstance) exChartInstance.destroy();

  const ctx = document.getElementById('exProgressChart');
  exChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Greutate (kg)',
          data: weights,
          borderColor: '#E94560',
          backgroundColor: 'rgba(233,69,96,0.1)',
          tension: 0.3, pointRadius: 5, fill: true,
          yAxisID: 'y'
        },
        {
          label: '1RM estimat',
          data: oneRM,
          borderColor: '#F5C842',
          borderDash: [5,3],
          tension: 0.3, pointRadius: 3, fill: false,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#6B6B8A', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#6B6B8A', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });

  // Stats
  const maxKg = Math.max(...weights);
  const maxRM = Math.max(...oneRM);
  const totalVol = logs.reduce((s, l) => s + l.kg * l.reps, 0);
  document.getElementById('exChartStats').innerHTML = `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;flex:1;min-width:100px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Max greutate</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--accent);">${maxKg}kg</div>
    </div>
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;flex:1;min-width:100px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">1RM estimat</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold);">${maxRM}kg</div>
    </div>
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;flex:1;min-width:100px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Seturi logat</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--text);">${logs.length}</div>
    </div>
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;flex:1;min-width:100px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Volum total</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--green);">${Math.round(totalVol)}kg</div>
    </div>`;
}

// ============ RIVAL MODE ============
const RIVAL_EXERCISES = [
  { name: 'Bench Press', key: 'Bench Press_1', icon: 'ðŸ‹ï¸' },
  { name: 'Back Squat', key: 'Back Squat_1', icon: 'ðŸ¦µ' },
  { name: 'Deadlift / RDL', key: 'Deadlift / RDL_1', icon: 'âš¡' },
  { name: 'Overhead Press', key: 'Overhead Press_1', icon: 'ðŸ”' },
  { name: 'Barbell Row', key: 'Barbell Row_1', icon: 'ðŸŽ¯' },
];

function renderRivalGrid() {
  const grid = document.getElementById('rivalGrid');
  if (!grid) return;

  grid.innerHTML = RIVAL_EXERCISES.map(ex => {
    const myPRStr = state.prs && state.prs[ex.key] ? state.prs[ex.key] : '';
    const myKg = myPRStr ? parseFloat(myPRStr) : null;
    const rivalKg = myKg ? Math.round(myKg * 1.1 * 2) / 2 : null;
    const diff = myKg && rivalKg ? (rivalKg - myKg).toFixed(1) : null;

    const myBar = myKg && rivalKg ? Math.round((myKg / rivalKg) * 100) : 0;

    return `<div style="background:var(--bg3);border:1px solid rgba(255,107,53,0.2);border-radius:10px;padding:14px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="font-size:18px;">${ex.icon}</span>
        <span style="font-weight:700;font-size:13px;">${ex.name}</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <div style="text-align:center;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Tu</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--text);">${myKg ? myKg+'kg' : 'â€”'}</div>
        </div>
        <div style="font-size:20px;align-self:center;color:var(--muted);">VS</div>
        <div style="text-align:center;">
          <div style="font-size:10px;color:var(--accent2);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Rival</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--accent2);">${rivalKg ? rivalKg+'kg' : 'â€”'}</div>
        </div>
      </div>
      ${myKg ? `
      <div style="background:rgba(255,255,255,0.06);border-radius:4px;height:6px;overflow:hidden;margin-bottom:6px;">
        <div style="height:100%;width:${myBar}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:4px;transition:width 0.5s;"></div>
      </div>
      <div style="font-size:11px;color:var(--muted);">ÃŽÈ›i lipsesc <strong style="color:var(--accent2);">${diff}kg</strong> sÄƒ Ã®l baÈ›i</div>
      ` : `<div style="font-size:11px;color:var(--muted);font-style:italic;">AdaugÄƒ PR-ul tÄƒu din secÈ›iunea de mai sus</div>`}
    </div>`;
  }).join('');
}

// ============ AI COACH ============
let aiHistory = (state.aiHistoryByWeek && state.aiHistoryByWeek[getWeekKey()]) ? state.aiHistoryByWeek[getWeekKey()] : [];

function buildContextForAI() {
  const s = SESSIONS[state.currentSession];
  const week = getAutoWeek();
  const mod = getWeekModifier(week);

  // Collect set logs summary
  let logSummary = '';
  if (state.setLogs) {
    Object.keys(state.setLogs).forEach(key => {
      const [sIdx, eIdx] = key.replace('log-','').split('-').map(Number);
      const ex = SESSIONS[sIdx]?.exercises[eIdx];
      if (ex && state.setLogs[key].length) {
        const sets = state.setLogs[key];
        const maxKg = Math.max(...sets.map(s => s.kg));
        logSummary += `${ex.name}: ${sets.length} seturi, max ${maxKg}kg. `;
      }
    });
  }

  // PR summary
  let prSummary = '';
  if (state.prs) {
    Object.keys(state.prs).forEach(k => {
      if (state.prs[k]) prSummary += `${k.replace('_1','').replace('_2','').replace('_4','')}: ${state.prs[k]}. `;
    });
  }

  // Weight log
  let weightSummary = '';
  if (state.weightLog && state.weightLog.length) {
    const last = state.weightLog[state.weightLog.length-1];
    const first = state.weightLog[0];
    weightSummary = `Greutate actualÄƒ: ${last.kg}kg (start: ${first.kg}kg, ${state.weightLog.length} Ã®nregistrÄƒri).`;
  }

  // Body profile
  let bodySummary = '';
  if (state.bodyProfile && state.bodyProfile.weight) {
    const p = state.bodyProfile;
    bodySummary = `Profil: ${p.age || '?'} ani, ${p.height || '?'}cm, ${p.weight || '?'}kg, sex: ${p.sex || '?'}.`;
  }

  // Streak
  const streak = document.getElementById('streakCount')?.textContent || '0';

  // Sleep & mood
  const sleep = state.sleep ? `${state.sleep}h somn azi.` : 'somn neÃ®nregistrat.';
  const mood = state.todayMood ? `Energie azi: ${state.todayMood}/5.` : '';
  const styleMap = {
    aggressive: 'Stil coach: agresiv, orientat spre progresie cÃ¢nd datele permit.',
    conservative: 'Stil coach: conservator, prioritate recuperare, tehnicÄƒ È™i risc redus.',
    balanced: 'Stil coach: echilibrat, progres constant fÄƒrÄƒ risc inutil.'
  };

  return `EÈ™ti un coach de forÈ›Äƒ È™i condiÈ›ionare de elitÄƒ, direct È™i motivant, fÄƒrÄƒ cuvinte Ã®n vÃ¢nt. 
RÄƒspunzi ÃŽNTOTDEAUNA Ã®n romÃ¢nÄƒ.
Datele atletului:
- Obiectiv: Tonifiere È™i definire muscularÄƒ
- Nivel: Intermediar
- SÄƒptÄƒmÃ¢na bloc: ${week+1}/4 (${mod.label})
- Sesiunea curentÄƒ: ${s.name}
- Streak antrenamente: ${streak} zile consecutive
- ${sleep} ${mood}
- ${bodySummary}
- ${weightSummary}
- Seturi logat: ${logSummary || 'Niciun set logat Ã®ncÄƒ.'}
- PR-uri: ${prSummary || 'NeÃ®nregistrate.'}
- Streak: ${streak} zile.
- ${styleMap[state.coachStyle || 'balanced']}

DÄƒ feedback specific, concis, acÈ›ionabil. Maxim 150 cuvinte. Nu repeta datele Ã®napoi. Du-te direct la concluzie È™i la ce trebuie fÄƒcut.`;
}

async function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addAIMessage('user', msg);
  await callAI(msg);
}

function sendQuick(msg) {
  document.getElementById('aiInput').value = msg;
  sendAIMessage();
}

function addAIMessage(role, text) {
  const container = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = `ai-msg ${role === 'user' ? 'user' : 'coach'}`;
  const safeText = escapeHTML(text).replace(/\n/g, '<br>');
  div.innerHTML = `<div class="msg-label">${role === 'user' ? 'Tu' : 'Coach AI'}</div>${safeText}`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function addTypingIndicator() {
  const container = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg coach';
  div.id = 'aiTyping';
  div.innerHTML = `<div class="msg-label">Coach AI</div><div class="ai-typing"><span></span><span></span><span></span></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('aiTyping');
  if (el) el.remove();
}

function buildLocalCoachReply(userMsg) {
  const msg = String(userMsg || '').toLowerCase();
  const metrics = collectTrainingMetrics();
  const fatigue = getOvertrainingStatus(metrics);
  const readiness = calculateReadiness();
  const objective = getObjectiveSettings();
  const next = getNextTrainingSessionInfo();
  const session = SESSIONS[next.sessionIdx];
  if (msg.includes('greutate') || msg.includes('bench') || msg.includes('squat') || msg.includes('deadlift')) {
    const first = session.exercises.find(ex => !ex.name.includes('CARDIO'));
    const idx = session.exercises.indexOf(first);
    const suggestion = first ? buildProgressionSuggestion(next.sessionIdx, idx) : null;
    return suggestion
      ? `Pentru ${first.name}: incearca ${suggestion.kg}kg x ${suggestion.reps}. Motiv: ${suggestion.reason}. Daca prima serie sare peste RPE 8.5, ramai la greutatea veche.`
      : `Nu am destule seturi logate pentru o greutate precisa. La urmatoarea sesiune logheaza primul compound complet: kg, reps si RPE.`;
  }
  if (msg.includes('nutri') || msg.includes('mananc') || msg.includes('mÄƒnÃ¢nc') || msg.includes('proteine')) {
    const grams = state.proteinLog?.[todayKey()] || 0;
    const target = Math.round((state.bodyProfile?.weight || 80) * 2);
    return grams >= target
      ? `Proteinele sunt bine azi: ${Math.round(grams)}g / ${target}g. Pastreaza caloriile in linie cu obiectivul de ${objective.label.toLowerCase()}.`
      : `Mai ai aproximativ ${Math.max(0, target - grams)}g proteine pana la tinta. Alege o masa simpla: iaurt grecesc, carne slaba, oua sau shake.`;
  }
  if (msg.includes('recuper') || msg.includes('somn') || msg.includes('obose')) {
    return `Readiness ${readiness}/100, status: ${fatigue.title}. ${fatigue.level === 'high' ? 'Azi redu volumul si evita PR.' : 'Poti urma planul, dar opreste seturile cand tehnica se strica.'}`;
  }
  if (msg.includes('rival') || msg.includes('pr')) {
    return readiness >= 78 && fatigue.level === 'ok'
      ? `Ai voie la tentativa controlata: +${objective.kgStep}kg, o singura incercare, doar daca incalzirea se misca rapid.`
      : `Nu forta PR azi. Strange un set curat aproape de top si construieste tentativa pentru sesiunea urmatoare.`;
  }
  return `Concluzie: obiectivul tau curent este ${objective.label}. Urmatoarea sesiune: ${session.name}. Azi prioritatea este log complet, progres mic si tehnica repetabila. ${fatigue.level === 'high' ? 'Recuperarea cere volum redus.' : 'Daca prima serie e sub RPE 8, cauta +1 rep.'}`;
}

async function callAI(userMsg) {
  const btn = document.getElementById('aiSendBtn');
  btn.disabled = true;
  addTypingIndicator();

  aiHistory.push({ role: 'user', content: userMsg });
  if (!state.aiHistoryByWeek) state.aiHistoryByWeek = {};
  state.aiHistoryByWeek[getWeekKey()] = aiHistory;
  save();

  await new Promise(resolve => setTimeout(resolve, 450));
  const localReply = buildLocalCoachReply(userMsg);
  removeTypingIndicator();
  aiHistory.push({ role: 'assistant', content: localReply });
  state.aiHistoryByWeek[getWeekKey()] = aiHistory;
  save();
  addAIMessage('coach', localReply);
  btn.disabled = false;
  return;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: buildContextForAI(),
        messages: aiHistory
      })
    });

    const data = await response.json();
    removeTypingIndicator();

    if (data.content && data.content[0]) {
      const reply = data.content[0].text;
      aiHistory.push({ role: 'assistant', content: reply });
      state.aiHistoryByWeek[getWeekKey()] = aiHistory;
      save();
      addAIMessage('coach', reply);
    } else {
      addAIMessage('coach', 'Eroare de conexiune. VerificÄƒ internetul È™i Ã®ncearcÄƒ din nou.');
    }
  } catch(e) {
    removeTypingIndicator();
    addAIMessage('coach', 'Nu mÄƒ pot conecta acum. VerificÄƒ conexiunea la internet.');
  }

  btn.disabled = false;
}

// ============ PREPARE / CONFIRM SET FLOW ============
function prepareSet(sIdx, eIdx) {
  const kg = parseFloat(document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.value);
  const reps = parseInt(document.getElementById(`new-reps-${sIdx}-${eIdx}`)?.value);
  const rpe = parseFloat(document.getElementById(`new-rpe-${sIdx}-${eIdx}`)?.value) || null;
  const type = currentSetType[`${sIdx}-${eIdx}`] || 'normal';

  if (!kg) {
    const inp = document.getElementById(`new-kg-${sIdx}-${eIdx}`);
    if (inp) { inp.style.borderColor='var(--accent)'; inp.focus(); }
    return;
  }
  if (!reps) {
    const inp = document.getElementById(`new-reps-${sIdx}-${eIdx}`);
    if (inp) { inp.style.borderColor='var(--accent)'; inp.focus(); }
    return;
  }

  // Show preview banner
  const banner = document.getElementById(`previewBanner-${sIdx}-${eIdx}`);
  const previewText = document.getElementById(`previewText-${sIdx}-${eIdx}`);
  const bigBtn = document.getElementById(`bigBtn-${sIdx}-${eIdx}`);
  const typeLabels = { normal:'Normal', failure:'ðŸ’€ Failure', dropset:'â¬‡ Drop Set', drop:'â¬‡ Drop Set' };
  const rpeText = rpe ? ` Â· RPE ${rpe}` : '';
  const typeText = type !== 'normal' ? ` Â· ${typeLabels[type]}` : '';

  if (previewText) previewText.textContent = `${kg}kg Ã— ${reps} rep${rpeText}${typeText}`;
  if (banner) banner.style.display = 'block';
  if (bigBtn) { bigBtn.style.display = 'none'; }

  // Animate banner in
  if (banner) {
    banner.style.animation = 'none';
    banner.offsetHeight; // reflow
    banner.style.animation = 'slideIn 0.25s ease';
  }
}

function confirmSet(sIdx, eIdx) {
  const type = currentSetType[`${sIdx}-${eIdx}`] || 'normal';
  // Hide preview, show big button again
  const banner = document.getElementById(`previewBanner-${sIdx}-${eIdx}`);
  const bigBtn = document.getElementById(`bigBtn-${sIdx}-${eIdx}`);
  if (banner) banner.style.display = 'none';
  if (bigBtn) bigBtn.style.display = 'block';
  // Actually complete the set
  completeSet(sIdx, eIdx, type);
}

function cancelPreview(sIdx, eIdx) {
  const banner = document.getElementById(`previewBanner-${sIdx}-${eIdx}`);
  const bigBtn = document.getElementById(`bigBtn-${sIdx}-${eIdx}`);
  if (banner) banner.style.display = 'none';
  if (bigBtn) bigBtn.style.display = 'block';
  // Reset input borders
  const kgInp = document.getElementById(`new-kg-${sIdx}-${eIdx}`);
  const repInp = document.getElementById(`new-reps-${sIdx}-${eIdx}`);
  if (kgInp) kgInp.style.borderColor = '';
  if (repInp) repInp.style.borderColor = '';
}

// ============ NAV ACCORDION ============
function toggleNavGroup(id) {
  const group = document.getElementById(id);
  const header = group?.previousElementSibling;
  if (!group) return;
  const isCollapsed = group.classList.toggle('collapsed');
  if (header) header.classList.toggle('collapsed', isCollapsed);
}

// ============ DRAWER ============
function toggleDrawer() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('drawerOverlay');
  const b = document.getElementById('hamburgerBtn');
  const open = s.classList.toggle('open');
  o.classList.toggle('active', open);
  b.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeDrawer() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('active');
  document.getElementById('hamburgerBtn').classList.remove('open');
  document.body.style.overflow = '';
}
let _tx = 0;
document.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive:true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - _tx;
  if (_tx < 25 && dx > 55) toggleDrawer();
  if (dx < -55 && document.getElementById('sidebar').classList.contains('open')) closeDrawer();
}, { passive:true });

function syncTopbar() {
  const w = state.currentWeek || 0;
  document.querySelectorAll('.topbar-week-dot').forEach((d,i) => {
    d.classList.remove('active','done');
    if (i < w) d.classList.add('done');
    if (i === w) d.classList.add('active');
  });
  const streak = document.getElementById('streakCount')?.textContent || '0';
  const ts = document.getElementById('topbarStreak');
  if (ts) ts.textContent = streak + 'ðŸ”¥';
}

// ============ SHOW SECTION (final override) ============
function showSection(id, navEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = document.getElementById('section-' + id);
  if (!sec) return;
  sec.classList.add('active');

  const activeNav = navEl
    || (typeof event !== 'undefined' && event.currentTarget && event.currentTarget.classList?.contains('nav-item') ? event.currentTarget : null)
    || document.querySelector(`.nav-item[onclick*="showSection('${id}')"]`);
  if (activeNav) activeNav.classList.add('active');

  if (id === 'muscles') {
    if (document.getElementById('muscleSummaryGrid')) renderMuscleAnalysis();
    else { renderMuscleVolume(); renderCaloriesChart(); }
  }
  if (id === 'mealbuilder') renderMealBuilder();
  if (id === 'challenges') renderChallenges();
  if (id === 'fatigue') renderFatigueIndex();
  if (id === 'nextblock') renderBlockAnalysis();
  if (id === 'smart') renderSmartDashboard();
  if (['lab4', 'lab5', 'lab6', 'lab7'].includes(id)) renderLabDashboard();
  if (typeof ADVANCED_FEATURE_SECTION_IDS !== 'undefined' && ADVANCED_FEATURE_SECTION_IDS.includes(id)) renderAdvancedFeatureSection(id);
  if (id === 'stats') {
    typeof renderWeeklyStats === 'function' && renderWeeklyStats();
    typeof renderHeatmap === 'function' && renderHeatmap();
    typeof renderBodyfat === 'function' && renderBodyfat();
    typeof renderPRPrediction === 'function' && renderPRPrediction();
  }
  syncTopbar();
  if (window.innerWidth <= 900) closeDrawer();
}

// ============ SET TYPE ============
const currentSetType = {};
function selectSetType(sIdx, eIdx, type, btn) {
  currentSetType[`${sIdx}-${eIdx}`] = type;
  ['normal','failure','drop'].forEach(t => {
    const b = document.getElementById(`st-${t}-${sIdx}-${eIdx}`);
    if (b) { b.style.background='transparent'; b.style.color='var(--muted)'; b.style.borderColor='var(--border)'; }
  });
  const colors = { normal:['rgba(46,204,113,0.15)','var(--green)','var(--green)'], failure:['rgba(233,69,96,0.15)','var(--accent)','var(--accent)'], drop:['rgba(255,107,53,0.15)','var(--accent2)','var(--accent2)'] };
  const labels = { normal:'âœ“ SET COMPLET', failure:'ðŸ’€ FAILURE', drop:'â¬‡ DROP SET' };
  const bgGrads = { normal:'linear-gradient(135deg,#27AE60,#2ECC71)', failure:'linear-gradient(135deg,var(--accent),#C0392B)', drop:'linear-gradient(135deg,var(--accent2),#E67E22)' };
  if (btn) { btn.style.background=colors[type][0]; btn.style.color=colors[type][1]; btn.style.borderColor=colors[type][2]; }
  const big = document.getElementById(`bigBtn-${sIdx}-${eIdx}`);
  if (big) { big.style.background=bgGrads[type]; big.textContent=labels[type]; }
}

// Updated completeSet with set type
function completeSet(sIdx, eIdx, setType) {
  const kg = parseFloat(document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.value);
  const reps = parseInt(document.getElementById(`new-reps-${sIdx}-${eIdx}`)?.value);
  const rpe = parseFloat(document.getElementById(`new-rpe-${sIdx}-${eIdx}`)?.value) || 7;
  const type = setType || currentSetType[`${sIdx}-${eIdx}`] || 'normal';
  if (!kg || !reps) { document.getElementById(`new-kg-${sIdx}-${eIdx}`)?.focus(); return; }

  const logKey = `log-${sIdx}-${eIdx}`;
  if (!state.setLogs) state.setLogs = {};
  if (!state.setLogs[logKey]) state.setLogs[logKey] = [];
  state.setLogs[logKey].push({ kg, reps, rpe, type, time: Date.now() });
  save();

  const typeEmoji = { normal:'', failure:' ðŸ’€', dropset:' â¬‡', drop:' â¬‡' };
  const typeColor = { normal:'var(--green)', failure:'var(--accent)', dropset:'var(--accent2)', drop:'var(--accent2)' };
  const setsContainer = document.getElementById(`hevySets-${sIdx}-${eIdx}`);
  const newRow = document.getElementById(`newSetRow-${sIdx}-${eIdx}`);
  const setNum = state.setLogs[logKey].length;
  const completedRow = document.createElement('div');
  completedRow.className = 'hevy-set-row completed-set';
  completedRow.innerHTML = `
    <div class="hevy-set-num" style="color:${typeColor[type]||'var(--green)'}">${setNum}${typeEmoji[type]||''}</div>
    <input class="hevy-set-input" type="number" value="${kg}" step="0.5" onchange="updateSetField('${logKey}',${setNum-1},'kg',this.value)">
    <input class="hevy-set-input" type="number" value="${reps}" onchange="updateSetField('${logKey}',${setNum-1},'reps',this.value)">
    <input class="hevy-set-input" type="number" value="${rpe}" step="0.5" onchange="updateSetField('${logKey}',${setNum-1},'rpe',this.value)">
    <button class="hevy-set-done-btn set-done" onclick="undoSet('${logKey}',${setNum-1},${sIdx},${eIdx})">âœ“</button>`;
  setsContainer.insertBefore(completedRow, newRow);

  newRow.querySelector('.hevy-set-num').textContent = setNum + 1;
  document.getElementById(`new-kg-${sIdx}-${eIdx}`).value = kg;
  document.getElementById(`new-reps-${sIdx}-${eIdx}`).value = reps;
  document.getElementById(`new-rpe-${sIdx}-${eIdx}`).value = '';
  if (type === 'drop' || type === 'dropset') {
    document.getElementById(`new-kg-${sIdx}-${eIdx}`).value = Math.round(kg*0.8*2)/2;
    document.getElementById(`new-reps-${sIdx}-${eIdx}`).value = '';
  }

  const card = document.getElementById(`hevyCard-${sIdx}-${eIdx}`);
  let badge = card?.querySelector('.sets-done-badge');
  if (!badge && card) {
    badge = document.createElement('span');
    badge.className = 'sets-done-badge';
    badge.style.cssText = 'margin-left:6px;font-size:11px;color:var(--green);font-weight:700;';
    card.querySelector('.hevy-ex-meta')?.appendChild(badge);
  }
  if (badge) badge.textContent = `${setNum} set${setNum>1?'uri':''} âœ“`;

  updateProgress();
  const ex = SESSIONS[sIdx].exercises[eIdx];
  const restSecs = type === 'failure' ? Math.min(parseRestSeconds(ex.rest)+30,180) : parseRestSeconds(ex.rest);
  autoStartExRest && autoStartExRest(sIdx, eIdx, restSecs);
  if (!sessionStartTime) startSessionTimer && startSessionTimer();
  saveExerciseHistory && saveExerciseHistory(sIdx, eIdx, state.setLogs[logKey]);
  updateFatigueState(rpe);
  typeof refreshSmartIfVisible === 'function' && refreshSmartIfVisible();
  typeof refreshAdvancedIfVisible === 'function' && refreshAdvancedIfVisible();
}

// ============ TEMPO TIMER ============
let tempoInterval = null;
let tempoRunning = false;
let tempoRep = 1;
function startTempoTimer(exName) {
  document.getElementById('tempoExName').textContent = exName;
  document.getElementById('tempoRepCount').textContent = '1';
  document.getElementById('tempoOverlay').classList.add('active');
  tempoRep = 1;
  runTempoPhase('COBORÃ‚RE', 3);
}
function runTempoPhase(phase, secs) {
  clearInterval(tempoInterval);
  document.getElementById('tempoPhase').textContent = phase;
  document.getElementById('tempoCount').textContent = secs;
  const phaseColors = { 'COBORÃ‚RE':'var(--accent)', 'PAUZÄ‚':'var(--gold)', 'RIDICARE':'var(--green)' };
  document.getElementById('tempoCircle').style.borderColor = phaseColors[phase] || 'var(--accent)';
  let t = secs;
  tempoInterval = setInterval(() => {
    t--;
    document.getElementById('tempoCount').textContent = t;
    if (navigator.vibrate && t === 0) navigator.vibrate(100);
    if (t <= 0) {
      clearInterval(tempoInterval);
      if (phase === 'COBORÃ‚RE') { runTempoPhase('PAUZÄ‚', 1); }
      else if (phase === 'PAUZÄ‚') { runTempoPhase('RIDICARE', 1); }
      else {
        tempoRep++;
        document.getElementById('tempoRepCount').textContent = tempoRep;
        if (navigator.vibrate) navigator.vibrate([100,50,100]);
        setTimeout(() => runTempoPhase('COBORÃ‚RE', 3), 800);
      }
    }
  }, 1000);
}
function stopTempoTimer() {
  clearInterval(tempoInterval);
  document.getElementById('tempoOverlay').classList.remove('active');
}

// ============ FORM GUIDE ============
const FORM_GUIDES = {
  'Bench Press': ['CulcÄƒ-te pe bancÄƒ, picioarele plate pe podea','Priza uÈ™or mai latÄƒ decÃ¢t umerii','Retrage omoplaÈ›ii â€” spatele uÈ™or arcuit','CoboarÄƒ bara controlat la piept (3s)','ApasÄƒ bara vertical, nu spre faÈ›Äƒ','Nu ridica È™ezuta de pe bancÄƒ'],
  'Back Squat': ['Bara pe trapez, nu pe gÃ¢t','Picioarele la lÄƒÈ›imea umerilor, vÃ¢rfuri uÈ™or Ã®n afarÄƒ','InspirÄƒ adÃ¢nc, blocheazÄƒ core-ul','CoboarÄƒ ca È™i cÃ¢nd ai vrea sÄƒ stai pe scaun','Genunchii urmeazÄƒ direcÈ›ia degetelor','RidicÄƒ prin cÄƒlcÃ¢ie, nu prin vÃ¢rfuri'],
  'Deadlift / RDL': ['Bara lÃ¢ngÄƒ tibie, picioarele la lÄƒÈ›imea È™oldurilor','È˜olduri sus, coloana neutrÄƒ â€” nu curbatÄƒ','Priza dublÄƒ sau hook grip','ÃŽmpinge podeaua cu picioarele, nu trage cu spatele','Bara rÄƒmÃ¢ne aproape de corp pe toatÄƒ traiectoria','BlocheazÄƒ È™oldurile la final, nu hiper-extinde'],
  'Overhead Press': ['Priza la lÄƒÈ›imea umerilor, coatele uÈ™or Ã®n faÈ›Äƒ','Core activat, nu arci lombar','Bara porneÈ™te de la claviculÄƒ','Capul uÈ™or Ã®napoi pe trecerea barei','Extinde complet coatele sus','ControleazÄƒ coborÃ¢rea â€” nu cÄƒdea cu bara'],
  'Barbell Row': ['ÃŽndoaie-te la 45Â° sau paralel cu podeaua','Coloana neutrÄƒ â€” nu rotunjitÄƒ','Trage bara spre abdomenul inferior','Retrage omoplaÈ›ii la capÄƒt','Coatele aproape de corp','CoboarÄƒ controlat Ã®n 2-3 secunde'],
  'Bulgarian Split Squat': ['Piciorul din spate pe bancÄƒ â€” vÃ¢rful sau latul piciorului','Trunchiul uÈ™or Ã®nclinat Ã®nainte','CoboarÄƒ vertical â€” genunchiul din faÈ›Äƒ nu depÄƒÈ™eÈ™te vÃ¢rful','Greutatea pe cÄƒlcÃ¢iul din faÈ›Äƒ','Control maxim â€” miÈ™care lentÄƒ','Echilibru È™i stabilitate > greutate mare'],
};
function toggleFormGuide(sIdx, eIdx, exName) {
  const div = document.getElementById(`formGuide-${sIdx}-${eIdx}`);
  if (!div) return;
  const isOpen = div.classList.toggle('open');
  if (!isOpen) return;
  const steps = FORM_GUIDES[exName] || ['MiÈ™care controlatÄƒ','Coloana neutrÄƒ','RespiraÈ›ie corectÄƒ','ROM complet','FormÄƒ > greutate'];
  div.innerHTML = `<div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--blue);margin-bottom:8px;">Ghid formÄƒ: ${exName}</div>` +
    steps.map((s,i) => `<div class="form-step"><span class="form-step-num">${i+1}</span><span>${s}</span></div>`).join('');
}

// ============ SUPERSET ============
const supersets = {};
function toggleSuperset(sIdx, eIdx) {
  const key = `${sIdx}-${eIdx}`;
  supersets[key] = !supersets[key];
  const badge = document.getElementById(`supersetBadge-${sIdx}-${eIdx}`);
  if (badge) badge.style.display = supersets[key] ? 'inline-flex' : 'none';
}

// ============ MUSCLE VOLUME ============
const MUSCLE_MAP = {
  0: { 0:'Piept', 1:'Umeri', 2:'Piept', 3:'Umeri', 4:'Triceps', 5:'Umeri' },
  1: { 0:'Spate', 1:'Spate', 2:'Spate', 3:'Spate', 4:'Biceps', 5:'Biceps' },
  2: { 0:'Quads', 1:'Ischio', 2:'Quads', 3:'Ischio', 4:'Ischio', 5:'Core' },
  3: { 0:'Piept', 1:'Spate', 2:'Umeri', 3:'Piept', 4:'Triceps', 5:'Biceps' },
  4: { 0:'Quads', 1:'Fesieri', 2:'Quads', 3:'Quads', 4:'Gambe', 5:'Core' },
};
let muscleCaloriesChartInstance = null;

function renderMuscleVolume() {
  const grid = document.getElementById('muscleVolumeChart');
  if (!grid || !state.setLogs) return;
  const muscleSets = {};
  Object.keys(state.setLogs).forEach(key => {
    const [,sIdx,eIdx] = key.split('-').map(Number);
    const muscle = MUSCLE_MAP[sIdx]?.[eIdx] || 'Altele';
    muscleSets[muscle] = (muscleSets[muscle]||0) + state.setLogs[key].length;
  });
  const muscles = ['Piept','Spate','Quads','Ischio','Umeri','Fesieri','Biceps','Triceps','Core','Gambe'];
  const maxSets = Math.max(...muscles.map(m => muscleSets[m]||0), 16);
  grid.innerHTML = muscles.map(m => {
    const sets = muscleSets[m] || 0;
    const pct = Math.round((sets / maxSets) * 100);
    const color = sets >= 10 && sets <= 16 ? 'var(--green)' : sets > 16 ? 'var(--gold)' : sets > 0 ? 'var(--accent)' : 'var(--muted)';
    return `<div class="muscle-bar-row">
      <div class="muscle-bar-label">${m}</div>
      <div class="muscle-bar-wrap"><div class="muscle-bar-fill" style="width:${pct}%;background:${color};"></div></div>
      <div class="muscle-bar-val">${sets} set${sets!==1?'uri':''}</div>
    </div>`;
  }).join('');

  // Calories estimate
  const totalSets = Object.values(state.setLogs).reduce((t,s) => t+s.length, 0);
  const weight = state.bodyProfile?.weight || 80;
  const calPerSet = weight * 0.12;
  const totalCal = Math.round(totalSets * calPerSet);
  const calEl = document.getElementById('caloriesBurned');
  if (calEl) calEl.textContent = totalCal || 'â€”';
}

function renderCaloriesChart() {
  const canvas = document.getElementById('caloriesChart');
  if (!canvas || !state.setLogs) return;
  const weight = state.bodyProfile?.weight || 80;
  const days = [];
  const cals = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().split('T')[0];
    days.push(d.toLocaleDateString('ro-RO',{weekday:'short'}));
    let sets = 0;
    Object.values(state.setLogs).forEach(arr => arr.forEach(s => {
      if (s.time && new Date(s.time).toISOString().split('T')[0]===key) sets++;
    }));
    cals.push(Math.round(sets * weight * 0.12));
  }
  if (muscleCaloriesChartInstance) muscleCaloriesChartInstance.destroy();
  muscleCaloriesChartInstance = new Chart(canvas, {
    type:'bar',
    data:{ labels:days, datasets:[{ label:'kcal estimate', data:cals, backgroundColor:'rgba(233,69,96,0.5)', borderRadius:6 }] },
    options:{ responsive:true, plugins:{legend:{display:false}}, scales:{ x:{ticks:{color:'#6B6B8A',font:{size:10}},grid:{display:false}}, y:{ticks:{color:'#6B6B8A',font:{size:10}},grid:{color:'rgba(255,255,255,0.04)'}} } }
  });
}

// ============ CHALLENGES ============
const DEFAULT_CHALLENGES = [
  { id:'c1', name:'10 antrenamente Ã®n 30 zile', type:'sessions', target:10, icon:'ðŸ‹ï¸' },
  { id:'c2', name:'Streak de 7 zile consecutive', type:'streak', target:7, icon:'ðŸ”¥' },
  { id:'c3', name:'Bate PR-ul la Bench Press', type:'pr', target:1, icon:'ðŸ†' },
  { id:'c4', name:'5 tone volum total Ã®n bloc', type:'volume', target:5000, icon:'ðŸ’ª' },
];

function renderChallenges() {
  const list = document.getElementById('challengesList');
  if (!list) return;
  if (!state.challenges) state.challenges = DEFAULT_CHALLENGES.map(c => ({...c, progress:0, completed:false}));
  // Update progress
  state.challenges.forEach(c => {
    if (c.completed) return;
    if (c.type === 'sessions') {
      const days = state.streakDates ? state.streakDates.length : 0;
      c.progress = Math.min(days, c.target);
    } else if (c.type === 'streak') {
      const streak = parseInt(document.getElementById('streakCount')?.textContent||'0');
      c.progress = Math.min(streak, c.target);
    } else if (c.type === 'volume') {
      let vol = 0;
      if (state.setLogs) Object.values(state.setLogs).forEach(sets => sets.forEach(s => vol += (s.kg||0)*(s.reps||0)));
      c.progress = Math.min(vol, c.target);
    } else if (c.type === 'pr') {
      const hasPR = state.prs && Object.values(state.prs).some(v => v);
      c.progress = hasPR ? 1 : 0;
    }
    if (c.progress >= c.target) c.completed = true;
  });
  save();
  list.innerHTML = state.challenges.map(c => {
    const pct = Math.min(100, Math.round((c.progress/c.target)*100));
    const cls = c.completed ? 'completed-challenge' : c.progress > 0 ? 'active-challenge' : '';
    return `<div class="challenge-card ${cls}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">${c.icon}</span><div><div style="font-weight:700;font-size:13px;">${c.name}</div><div style="font-size:11px;color:var(--muted);">${c.progress} / ${c.target} ${c.completed?'âœ…':''}</div></div></div>
        ${c.completed ? '<span style="color:var(--green);font-size:20px;">ðŸ†</span>' : `<span style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--gold);">${pct}%</span>`}
      </div>
      <div class="challenge-progress"><div class="challenge-fill" style="width:${pct}%;${c.completed?'background:var(--green);':''}"></div></div>
    </div>`;
  }).join('');
}

function addChallenge() {
  const name = document.getElementById('challName')?.value.trim();
  const target = parseFloat(document.getElementById('challTarget')?.value);
  const type = document.getElementById('challType')?.value;
  if (!name || !target) return;
  if (!state.challenges) state.challenges = [];
  state.challenges.push({ id:'custom-'+Date.now(), name, type, target, progress:0, completed:false, icon:'ðŸŽ¯' });
  save();
  renderChallenges();
  document.getElementById('challName').value = '';
  document.getElementById('challTarget').value = '';
}

// ============ FATIGUE INDEX ============
function updateFatigueState(rpe) {
  if (!state.fatigueLog) state.fatigueLog = [];
  state.fatigueLog.push({ rpe, time: Date.now() });
  if (state.fatigueLog.length > 30) state.fatigueLog.shift();
  save();
}

function renderFatigueIndex() {
  const numEl = document.getElementById('fatigueNum');
  const fillEl = document.getElementById('fatigueFill');
  const labelEl = document.getElementById('fatigueLabel');
  const advEl = document.getElementById('fatigueAdviceText');
  const bdEl = document.getElementById('fatigueBreakdown');
  if (!numEl) return;

  const log = state.fatigueLog || [];
  if (log.length < 3) { numEl.textContent='â€”'; labelEl.textContent='LogheazÄƒ mai multe seturi'; return; }

  const recent = log.slice(-15);
  const avgRPE = recent.reduce((s,r)=>s+r.rpe,0)/recent.length;
  // Sessions per week
  const sessionDays = new Set();
  if (state.setLogs) Object.values(state.setLogs).forEach(sets => sets.forEach(s => {
    if (s.time) sessionDays.add(new Date(s.time).toISOString().split('T')[0]);
  }));
  const freq = Math.min(sessionDays.size, 7);
  // Total volume
  let vol = 0;
  if (state.setLogs) Object.values(state.setLogs).forEach(sets => sets.forEach(s => vol += (s.kg||0)*(s.reps||0)));
  const volScore = Math.min(40, (vol/1000)*5);
  const rpeScore = Math.min(40, ((avgRPE-5)/4)*40);
  const freqScore = Math.min(20, (freq/7)*20);
  const fatigue = Math.round(volScore + rpeScore + freqScore);

  numEl.textContent = fatigue;
  if (fillEl) {
    fillEl.style.width = fatigue + '%';
    const color = fatigue < 40 ? 'var(--green)' : fatigue < 65 ? 'var(--gold)' : 'var(--accent)';
    fillEl.style.background = color;
    numEl.style.color = color;
  }
  const labels = { low:'Recuperat â€” PoÈ›i antrena intens', med:'Acumulare normalÄƒ â€” MonitorizeazÄƒ', high:'ObosealÄƒ ridicatÄƒ â€” Ia Ã®n considerare deload', vhigh:'SUPRAANTRENAMENT â€” Deload obligatoriu' };
  const key = fatigue < 40 ? 'low' : fatigue < 65 ? 'med' : fatigue < 85 ? 'high' : 'vhigh';
  if (labelEl) labelEl.textContent = labels[key];

  const advices = {
    low: 'Corpul tÄƒu e odihnit È™i pregÄƒtit. CreÈ™te greutÄƒÈ›ile cu 2.5â€“5kg la compuse.',
    med: 'ObosealÄƒ normalÄƒ de acumulare. MenÈ›ine volumul, nu adÄƒuga mai mult.',
    high: 'Semne de supraantrenament. Reduce volumul cu 30% sÄƒptÄƒmÃ¢na viitoare.',
    vhigh: 'Deload obligatoriu. 50% volum, RPE max 6. DacÄƒ ignori asta, riÈ™ti accidentare sau plafonare severÄƒ.'
  };
  if (advEl) advEl.textContent = advices[key];

  if (bdEl) bdEl.innerHTML = [
    { label:'RPE mediu', val:avgRPE.toFixed(1), color:'var(--accent)' },
    { label:'Zile active', val:freq, color:'var(--blue)' },
    { label:'Volum total', val:vol>1000?`${(vol/1000).toFixed(1)}t`:`${Math.round(vol)}kg`, color:'var(--gold)' },
  ].map(s=>`<div style="text-align:center;background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:12px;"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-bottom:4px;">${s.label}</div><div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:${s.color};">${s.val}</div></div>`).join('');
}

// ============ NEXT BLOCK / PERIODIZATION ============
function renderBlockAnalysis() {
  const el = document.getElementById('blockAnalysis');
  const recEl = document.getElementById('nextBlockRec');
  if (!el || !recEl) return;

  const hasData = state.exHistory && Object.keys(state.exHistory).length > 0;
  if (!hasData) { el.textContent = 'CompleteazÄƒ cel puÈ›in 2 sesiuni pentru analizÄƒ.'; recEl.innerHTML = ''; return; }

  let totalProgress = 0, exCount = 0;
  Object.values(state.exHistory).forEach(h => {
    if (h.length >= 2) {
      totalProgress += h[h.length-1].maxKg - h[0].maxKg;
      exCount++;
    }
  });
  const avgProgress = exCount ? (totalProgress/exCount).toFixed(1) : 0;
  const fatigueLog = state.fatigueLog || [];
  const avgRPE = fatigueLog.length ? (fatigueLog.slice(-10).reduce((s,r)=>s+r.rpe,0)/Math.min(fatigueLog.length,10)).toFixed(1) : 'â€”';

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
        <div style="font-size:10px;color:var(--muted);text-transform:uppercase;">Progres mediu</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--green);">+${avgProgress}kg</div>
        <div style="font-size:11px;color:var(--muted);">per exerciÈ›iu</div>
      </div>
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
        <div style="font-size:10px;color:var(--muted);text-transform:uppercase;">RPE mediu</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--accent);">${avgRPE}</div>
        <div style="font-size:11px;color:var(--muted);">din ${fatigueLog.length} seturi</div>
      </div>
    </div>`;

  // Recommendations
  const rpe = parseFloat(avgRPE);
  const prog = parseFloat(avgProgress);
  let recs = [];
  if (rpe < 7) recs.push({ icon:'â¬†', text:'RPE mediu scÄƒzut â€” creÈ™te intensitatea Ã®n blocul urmÄƒtor. AdaugÄƒ 5â€“10% greutate la compuse faÈ›Äƒ de startul blocului curent.', color:'var(--blue)' });
  else if (rpe > 8.5) recs.push({ icon:'â¬‡', text:'RPE mediu ridicat â€” reduce intensitatea la start. ÃŽncepe blocul urmÄƒtor cu â€“10% greutate È™i creÈ™te progresiv.', color:'var(--gold)' });
  else recs.push({ icon:'âœ“', text:'Intensitate optimÄƒ. MenÈ›ine aceeaÈ™i structurÄƒ Ã®n blocul urmÄƒtor cu +2.5â€“5kg la compuse.', color:'var(--green)' });
  if (prog > 5) recs.push({ icon:'ðŸš€', text:'Progres excelent â€” poÈ›i creÈ™te volumul cu 1 set per exerciÈ›iu principal Ã®n blocul urmÄƒtor.', color:'var(--green)' });
  else if (prog < 2) recs.push({ icon:'âš ï¸', text:'Progres mic â€” verificÄƒ nutriÈ›ia È™i somnul. Sau schimbÄƒ Rep Range: dacÄƒ ai lucrat 6-8 rep, Ã®ncearcÄƒ 4-6 Ã®n blocul urmÄƒtor.', color:'var(--accent)' });
  recEl.innerHTML = recs.map(r=>`<div style="border-left:3px solid ${r.color};background:rgba(255,255,255,0.03);border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:10px;display:flex;gap:10px;"><span style="font-size:18px;">${r.icon}</span><span style="font-size:13px;line-height:1.6;">${r.text}</span></div>`).join('');
}

function generateNextBlock() {
  alert('Blocul urmÄƒtor va fi generat pe baza analizei de mai sus. FuncÈ›ie completÄƒ disponibilÄƒ Ã®n versiunea urmÄƒtoare â€” momentan urmeazÄƒ recomandÄƒrile afiÈ™ate.');
}

// ============ WELCOME MESSAGE ============
function showWelcomeMessage() {
  const today = new Date().toLocaleDateString('ro-RO',{weekday:'long'});
  const s = SESSIONS[getAutoSession && getAutoSession() >= 0 ? getAutoSession() : 0];
  const streak = parseInt(document.getElementById('streakCount')?.textContent||'0');
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'BunÄƒ dimineaÈ›a' : hour < 18 ? 'BunÄƒ ziua' : 'BunÄƒ seara';
  const msgs = [
    `AstÄƒzi e ${today}. Sesiunea ta e <strong>${s?.name || 'Push'}</strong>. ${streak > 0 ? `Streak curent: ${streak} zile ðŸ”¥` : 'Prima zi â€” hai sÄƒ construim ceva.'}`,
    `${greeting}! ${s?.name || 'Push'} te aÈ™teaptÄƒ azi. Fiecare set conteazÄƒ.`,
    `Zi ${streak+1} din bloc. ${s?.name || 'Push'} â€” apare È™i lucreazÄƒ.`,
  ];
  const banner = document.getElementById('welcomeBanner');
  if (!banner) {
    const div = document.createElement('div');
    div.id = 'welcomeBanner';
    div.className = 'welcome-banner visible';
    div.innerHTML = `<div style="display:flex;gap:12px;align-items:flex-start;"><span style="font-size:24px;">ðŸ‘‹</span><div><div style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);margin-bottom:4px;">Coach AI</div><div style="font-size:13px;line-height:1.6;">${msgs[Math.floor(Math.random()*msgs.length)]}</div></div><button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;margin-left:auto;">âœ•</button></div>`;
    const hero = document.querySelector('.today-hero');
    if (hero) hero.before(div);
  }
}

// ============ NAV event fix
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const txt = this.textContent.replace(/\d+\/\d+/,'').trim().substring(0,22);
    const ts = document.getElementById('topbarSection');
    if (ts) ts.textContent = 'â€” ' + txt;
    closeDrawer();
  });
});

// Init RPE slider display
document.getElementById('rpeSlider').value = state.rpe || 7;

init();
syncTopbar();
showWelcomeMessage();
setTimeout(renderChallenges, 500);

// Register Service Worker for PWA/offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}
