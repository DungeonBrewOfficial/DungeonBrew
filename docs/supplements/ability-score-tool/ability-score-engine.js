/* Ability Score Generator — engine
 * Implements the 13 methods of ability score generation described in
 * DungeonBrew's "Ability Score Options" supplement.
 *
 * No DOM here — only pure data, generators, and helpers. The UI lives in JSX.
 */
(function () {
  "use strict";

  // ---------- Constants ----------
  const ABILITIES = ["str", "dex", "con", "int", "wis", "cha"];
  const ABILITY_LABELS = {
    str: "Strength", dex: "Dexterity", con: "Constitution",
    int: "Intelligence", wis: "Wisdom", cha: "Charisma"
  };
  const ABILITY_SHORT = { str:"STR", dex:"DEX", con:"CON", int:"INT", wis:"WIS", cha:"CHA" };

  // ---------- PBE (Point-Buy Equivalent) ----------
  // Default point-buy cost table from Method I.
  // Extrapolated below 8 (linear) and above 18 (steeper) so we can score any output.
  const PB_COST = {
    3:-5, 4:-4, 5:-3, 6:-2, 7:-1, 8:0, 9:1, 10:2, 11:3, 12:4, 13:5,
    14:7, 15:9, 16:12, 17:15, 18:19,
    19:24, 20:30
  };
  const PB_COST_ALT = {
    3:-5, 4:-4, 5:-3, 6:-2, 7:-1, 8:0, 9:1, 10:2, 11:3, 12:4, 13:5,
    14:6, 15:8, 16:10, 17:13, 18:16,
    19:20, 20:25
  };

  // Tiers — these reflect total PBE for an entire array of six scores.
  const TIERS = [
    { id:"average",  label:"Average", min:9,  max:21, benchmark:15 },
    { id:"elite",    label:"Elite",   min:22, max:33, benchmark:27 },
    { id:"heroic",   label:"Heroic",  min:34, max:45, benchmark:39 },
    { id:"mythic",   label:"Mythic",  min:46, max:99, benchmark:51 }
  ];

  function modifier(score)        { return Math.floor((score - 10) / 2); }
  function sgn(n)                  { return (n >= 0 ? "+" : "") + n; }
  function costOf(score, alt)      { const T = alt ? PB_COST_ALT : PB_COST; return T[score] != null ? T[score] : (score - 8); }
  function pbeOfArray(scores, alt) { return scores.reduce((s, x) => s + costOf(x, alt), 0); }
  function tierOf(pbe) {
    for (const t of TIERS) if (pbe >= t.min && pbe <= t.max) return t;
    return pbe < 9 ? { id:"feeble", label:"Feeble", min:-Infinity, max:8, benchmark:0 } : TIERS[3];
  }
  function sumArray(scores) { return scores.reduce((s,x) => s+x, 0); }

  // ---------- RNG ----------
  function d(n)                { return 1 + Math.floor(Math.random() * n); }
  function rollDice(count, sides) {
    const a = [];
    for (let i = 0; i < count; i++) a.push(d(sides));
    return a;
  }
  function topN(dice, n) { return dice.slice().sort((a,b) => b-a).slice(0, n); }
  function bottomN(dice, n) { return dice.slice().sort((a,b) => a-b).slice(0, n); }
  function sumD(dice) { return dice.reduce((s,x) => s+x, 0); }

  // ---------- Method II — Standard Arrays ----------
  const STANDARD_ARRAYS = {
    average: [13, 12, 11, 10, 9, 8],
    elite:   [15, 14, 13, 12, 10, 8],
    heroic:  [17, 15, 14, 13, 11, 8],
    mythic:  [18, 16, 14, 14, 12, 10]
  };

  // ---------- Method III — Matrices ----------
  // 6x6 grids. Player selects an array — in order — from any row, column, or diagonal.
  // Each array can be used forward or reversed.
  const MATRICES = {
    average: [
      [ 9, 16,  7,  8, 10, 13],
      [15,  6, 16,  6,  9, 11],
      [11, 14, 11, 12,  8,  7],
      [10,  7, 10, 12, 13, 11],
      [10, 11, 11, 13, 11,  7],
      [ 8,  9,  8, 12, 12, 14]
    ],
    elite: [
      [11, 11,  9, 18, 11, 12],
      [ 7, 14, 17,  9, 13, 12],
      [12, 15,  8, 15, 13,  9],
      [18, 13, 10,  9, 11, 11],
      [10,  8, 17,  9, 15, 13],
      [14, 11, 11, 12,  9, 15]
    ],
    heroic: [
      [18, 18,  8, 12, 11, 11],
      [16, 14, 15,  6, 13, 14],
      [ 8, 18, 14, 14, 12, 12],
      [ 9,  7, 15, 14, 16, 17],
      [10,  8, 16, 18, 10, 16],
      [17, 13, 10, 14, 16,  8]
    ],
    mythic: [
      [14, 18,  9, 16, 16, 11],
      [16, 14, 18,  6, 16, 14],
      [11, 18, 14, 18,  8, 15],
      [15, 13, 13, 14, 14, 15],
      [12, 10, 15, 18, 14, 15],
      [16, 11, 15, 12, 16, 14]
    ]
  };

  function matrixSelect(matrix, kind, index, reversed) {
    // kind: 'row' | 'col' | 'diag' | 'antidiag'
    let arr = [];
    if (kind === "row")      for (let c = 0; c < 6; c++) arr.push(matrix[index][c]);
    if (kind === "col")      for (let r = 0; r < 6; r++) arr.push(matrix[r][index]);
    if (kind === "diag")     for (let i = 0; i < 6; i++) arr.push(matrix[i][i]);
    if (kind === "antidiag") for (let i = 0; i < 6; i++) arr.push(matrix[i][5 - i]);
    if (reversed) arr = arr.slice().reverse();
    return arr;
  }

  // ---------- Method VIII — Targeted Rolling ----------
  const CLASS_DICE = {
    Artificer: { str:3, dex:7, con:6, wis:5, int:8, cha:4 },
    Barbarian: { str:8, dex:6, con:7, wis:5, int:2, cha:4 },
    Bard:      { str:4, dex:7, con:5, wis:3, int:6, cha:8 },
    Cleric:    { str:6, dex:4, con:7, wis:8, int:3, cha:5 },
    Druid:     { str:3, dex:7, con:6, wis:8, int:6, cha:5 },
    Fighter:   { str:8, dex:6, con:7, wis:3, int:5, cha:4 },
    Monk:      { str:6, dex:7, con:5, wis:8, int:3, cha:4 },
    Paladin:   { str:7, dex:4, con:6, wis:5, int:3, cha:8 },
    Ranger:    { str:6, dex:7, con:5, wis:3, int:8, cha:4 },
    Rogue:     { str:4, dex:8, con:6, wis:3, int:7, cha:5 },
    Sorcerer:  { str:5, dex:7, con:6, wis:4, int:3, cha:8 },
    Warlock:   { str:5, dex:6, con:7, wis:3, int:4, cha:8 },
    Wizard:    { str:4, dex:5, con:6, wis:7, int:8, cha:3 }
  };

  // ---------- Method X — Dice Point Buy tables ----------
  const DPB_HEROIC = [
    { cost: 3, label: "18 flat",          roll: () => ({ value: 18, dice: [] }) },
    { cost: 2, label: "14 + 1d4",         roll: () => { const r = rollDice(1,4); return { value: 14 + sumD(r), dice: [{ kind:"flat", v:14 }, { kind:"d4", v:r[0] }] }; } },
    { cost: 1, label: "8 + 1d4 + 1d6",    roll: () => { const a=rollDice(1,4), b=rollDice(1,6); return { value: 8 + a[0] + b[0], dice:[{kind:"flat",v:8},{kind:"d4",v:a[0]},{kind:"d6",v:b[0]}] }; } },
    { cost: 0, label: "1d4 + 1d6 + 1d8",  roll: () => { const a=rollDice(1,4), b=rollDice(1,6), c=rollDice(1,8); return { value: a[0]+b[0]+c[0], dice:[{kind:"d4",v:a[0]},{kind:"d6",v:b[0]},{kind:"d8",v:c[0]}] }; } }
  ];
  const DPB_ELITE = [
    { cost: 3, label: "16 flat",          roll: () => ({ value: 16, dice: [] }) },
    { cost: 2, label: "12 + 1d4",         roll: () => { const r = rollDice(1,4); return { value: 12 + r[0], dice: [{kind:"flat",v:12},{kind:"d4",v:r[0]}] }; } },
    { cost: 1, label: "6 + 1d4 + 1d6",    roll: () => { const a=rollDice(1,4), b=rollDice(1,6); return { value: 6+a[0]+b[0], dice:[{kind:"flat",v:6},{kind:"d4",v:a[0]},{kind:"d6",v:b[0]}] }; } },
    { cost: 0, label: "2d6 + 1d4",        roll: () => { const a=rollDice(2,6), b=rollDice(1,4); return { value: sumD(a)+b[0], dice:[{kind:"d6",v:a[0]},{kind:"d6",v:a[1]},{kind:"d4",v:b[0]}] }; } }
  ];
  const DPB_AVERAGE = [
    { cost: 3, label: "12 + 1d4",         roll: () => { const r=rollDice(1,4); return { value: 12+r[0], dice:[{kind:"flat",v:12},{kind:"d4",v:r[0]}] }; } },
    { cost: 2, label: "8 + 2d4",          roll: () => { const r=rollDice(2,4); return { value: 8+sumD(r), dice:[{kind:"flat",v:8},{kind:"d4",v:r[0]},{kind:"d4",v:r[1]}] }; } },
    { cost: 1, label: "4 + 3d4",          roll: () => { const r=rollDice(3,4); return { value: 4+sumD(r), dice:[{kind:"flat",v:4},{kind:"d4",v:r[0]},{kind:"d4",v:r[1]},{kind:"d4",v:r[2]}] }; } },
    { cost: 0, label: "4d4",              roll: () => { const r=rollDice(4,4); return { value: sumD(r), dice: r.map(v => ({kind:"d4", v})) }; } }
  ];
  const DPB_VARIANTS = { heroic: DPB_HEROIC, elite: DPB_ELITE, average: DPB_AVERAGE };

  // ---------- Method XI — Table Roll matrix ----------
  // Rows are d6 result 1..6 (row), cols are d6 1..6 (col).
  const TABLE_ROLL = [
    [13, 12, 11, 10,  9,  8],
    [14, 13, 12, 11, 10,  9],
    [15, 14, 13, 12, 11, 10],
    [16, 15, 14, 13, 12, 11],
    [17, 16, 15, 14, 13, 12],
    [18, 17, 16, 15, 14, 13]
  ];

  // ---------- Method XII — Hand of Fate ----------
  const SUITS = ["♠","♥","♦","♣"];
  const RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const RANK_VALUE = { A:14, K:13, Q:12, J:11, "10":10, "9":9, "8":8, "7":7, "6":6, "5":5, "4":4, "3":3, "2":2 };

  function freshDeck() {
    const deck = [];
    for (const s of SUITS) for (const r of RANKS) deck.push({ rank: r, suit: s, value: RANK_VALUE[r] });
    return deck;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function dealHand(size) { return shuffle(freshDeck()).slice(0, size); }

  // Hand evaluators — return { score, kind, cards: [...] } when a 3-card or 2-card hand matches.
  function isStraightFlush(cs) {
    if (cs.length !== 3) return false;
    if (!cs.every(c => c.suit === cs[0].suit)) return false;
    return isStraightCards(cs);
  }
  function isStraightCards(cs) {
    const vals = cs.map(c => c.value).sort((a,b) => a-b);
    // Allow A,2,3 (low straight) AND Q,K,A (high straight via A=14 already)
    if (vals[2] - vals[0] === 2 && new Set(vals).size === 3) return true;
    // low straight: A treated as 1
    if (vals.includes(14) && vals.includes(2) && vals.includes(3)) return true;
    return false;
  }
  function isThreeKind(cs) { return cs.length === 3 && cs.every(c => c.value === cs[0].value); }
  function isStraight(cs)  { return cs.length === 3 && isStraightCards(cs); }
  function isFlush(cs)     { return cs.length === 3 && cs.every(c => c.suit === cs[0].suit); }
  function isPair(cs)      { return cs.length === 2 && cs[0].value === cs[1].value; }

  // Best possible partition of `hand` into six "ability hands".
  // Greedy: try strongest hand types first, with backtracking-lite via permutations.
  // Returns { hands: [{cards, kind, score}], leftovers }.
  function buildBestHands(hand) {
    // We'll do a randomized search to find a near-optimal partition (max total score).
    const TYPES = [
      { kind: "Straight Flush", size: 3, score: 18, test: isStraightFlush },
      { kind: "Three of a Kind", size: 3, score: 17, test: isThreeKind },
      { kind: "Straight", size: 3, score: 16, test: isStraight },
      { kind: "Flush", size: 3, score: 15, test: isFlush },
      { kind: "Pair", size: 2, score: 14, test: isPair }
    ];

    function findAllSubsets(cards, size, test) {
      const out = [];
      const n = cards.length;
      const idxs = Array.from({length: n}, (_,i) => i);
      const combos = (k, start, acc) => {
        if (acc.length === k) { const pick = acc.map(i => cards[i]); if (test(pick)) out.push(acc.slice()); return; }
        for (let i = start; i < n; i++) { acc.push(i); combos(k, i+1, acc); acc.pop(); }
      };
      combos(size, 0, []);
      return out;
    }

    let best = null;

    function search(cards, hands) {
      if (hands.length >= 6) {
        // remaining slots filled by high cards
        return { hands: hands.slice(), leftovers: cards.slice() };
      }
      if (cards.length === 0) return { hands: hands.slice(), leftovers: [] };

      // try each hand type (highest score first)
      for (const t of TYPES) {
        if (cards.length < t.size) continue;
        const matches = findAllSubsets(cards, t.size, t.test);
        for (const idxs of matches) {
          const picked = idxs.map(i => cards[i]);
          const rest = cards.filter((_, i) => !idxs.includes(i));
          hands.push({ kind: t.kind, score: t.score, cards: picked });
          const r = search(rest, hands);
          considerBest(r, cards.length);
          hands.pop();
        }
      }
      // also try "use the highest card as a high-card hand"
      if (hands.length < 6) {
        const sorted = cards.slice().sort((a,b) => b.value - a.value);
        const top = sorted[0];
        const rest = cards.filter(c => c !== top);
        hands.push({ kind: "High Card", score: top.value, cards: [top] });
        const r = search(rest, hands);
        considerBest(r, cards.length);
        hands.pop();
      }
      return best;
    }

    function considerBest(result, depth) {
      if (!result) return;
      const hands = result.hands.slice();
      const left = result.leftovers.slice();
      // pad to 6 hands using high cards from leftovers
      while (hands.length < 6 && left.length > 0) {
        left.sort((a,b) => b.value - a.value);
        const top = left.shift();
        hands.push({ kind: "High Card", score: top.value, cards: [top] });
      }
      if (hands.length < 6) return; // not enough cards
      const total = hands.reduce((s,h) => s+h.score, 0);
      if (!best || total > best._total) {
        best = { hands, leftovers: left, _total: total };
      }
    }

    // Cap search depth — for 9–13 card hands the combinatorics are fine,
    // but we bail early once we find a near-perfect partition.
    search(hand, []);
    if (!best) return { hands: [], leftovers: hand.slice() };
    return { hands: best.hands, leftovers: best.leftovers };
  }

  // ---------- Method generators ----------
  function genMethodV() {
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const r = rollDice(3, 6);
      sets.push({ dice: r, kept: r, score: sumD(r) });
    }
    return sets;
  }
  function genMethodVI() {
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const r = rollDice(4, 6);
      const sorted = r.slice().sort((a,b) => b-a);
      const kept = sorted.slice(0, 3);
      const lowest = sorted[3];
      sets.push({ dice: r, kept, dropped: [lowest], score: sumD(kept) });
    }
    return sets;
  }
  function genMethodVI_5d6() {
    // 5d6 drop two lowest
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const r = rollDice(5, 6);
      const sorted = r.slice().sort((a,b) => b-a);
      const kept = sorted.slice(0, 3);
      const dropped = sorted.slice(3);
      sets.push({ dice: r, kept, dropped, score: sumD(kept) });
    }
    return sets;
  }
  function genMethodVII(poolSize) {
    // returns an array of dice values, length = poolSize
    return rollDice(poolSize, 6);
  }
  function genMethodVIII(className) {
    const profile = CLASS_DICE[className];
    if (!profile) return null;
    const out = {};
    for (const ab of ABILITIES) {
      const count = profile[ab];
      const r = rollDice(count, 6);
      const sorted = r.slice().sort((a,b) => b-a);
      const kept = sorted.slice(0, 3);
      out[ab] = { dice: r, kept, score: sumD(kept) };
    }
    return out;
  }
  function genMethodVIII_swappable() {
    // 8d6, 7d6, 6d6, 5d6, 4d6, 3d6 — top 3 of each, then assign.
    const counts = [8, 7, 6, 5, 4, 3];
    return counts.map(c => {
      const r = rollDice(c, 6);
      const kept = r.slice().sort((a,b) => b-a).slice(0, 3);
      return { count: c, dice: r, kept, score: sumD(kept) };
    });
  }
  function genMethodIX() {
    // 3d6 starting, 4d6 drop lowest for potential.
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const a = rollDice(3, 6); const sa = sumD(a);
      const b = rollDice(4, 6); const sortedB = b.slice().sort((x,y) => y-x); const sb = sumD(sortedB.slice(0,3));
      const start = Math.min(sa, sb);
      const max = Math.max(sa, sb);
      sets.push({ d3: a, d4: b, start, max });
    }
    return sets;
  }
  function genMethodIX_alt() {
    // 4d6: lowest 3 are start, all 4 are max.
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const r = rollDice(4, 6);
      const sorted = r.slice().sort((a,b) => a-b);
      const start = sorted[0] + sorted[1] + sorted[2];
      const max = sumD(r);
      sets.push({ d4: r, start, max });
    }
    return sets;
  }
  function genMethodX(variant) {
    // variant is heroic|elite|average. Player picks options summing to 4 budget.
    // For an "auto" generation we evenly distribute the 4 points across rolls.
    // Returned: array of 6 with each item's variant choice already rolled.
    const tbl = DPB_VARIANTS[variant] || DPB_HEROIC;
    // default distribution: one 3-cost, one 1-cost, four 0-cost  → totals 4 spent
    const dist = [3, 1, 0, 0, 0, 0];
    return dist.map(c => {
      const opt = tbl.find(o => o.cost === c);
      const rolled = opt.roll();
      return { cost: c, label: opt.label, value: rolled.value, dice: rolled.dice };
    });
  }
  function genMethodXI(weighted) {
    const sets = [];
    for (let i = 0; i < 6; i++) {
      const row  = weighted ? Math.min(6, Math.max(1, d(6) + d(6) - 6)) : d(6); // weighted variant uses 2d6 mapped to 1..6 (we'll re-cap)
      // Use the supplement's literal weighted rule: 2d6 for row, 1d6 for col.
      // Convert 2..12 → row 1..6 by capping at 6 (the supplement doesn't fully specify;
      // we mimic 2d6 distribution by clamping).
      const rowFinal = weighted ? Math.min(6, Math.max(1, (d(6) + d(6)) - 5)) : d(6); // 2-12 → -3..7 → cap 1..6
      const col = d(6);
      const r = rowFinal - 1;
      const c = col - 1;
      sets.push({ row: rowFinal, col, score: TABLE_ROLL[r][c] });
    }
    return sets;
  }
  function genMethodXII(handSize) {
    const hand = dealHand(handSize);
    const built = buildBestHands(hand);
    return { hand, ...built };
  }
  function genMethodXIII(rerollLowest) {
    const sets = [];
    for (let i = 0; i < 6; i++) {
      let r = d(20);
      const dice = [r];
      if (rerollLowest && (r === 1 || r === 2)) { const r2 = d(20); dice.push(r2); r = r2; }
      sets.push({ rolls: dice, score: r });
    }
    return sets;
  }

  // ---------- Public API ----------
  window.AbilityScoreGen = {
    ABILITIES, ABILITY_LABELS, ABILITY_SHORT, TIERS,
    PB_COST, PB_COST_ALT, STANDARD_ARRAYS, MATRICES, TABLE_ROLL, CLASS_DICE,
    DPB_HEROIC, DPB_ELITE, DPB_AVERAGE, DPB_VARIANTS,
    SUITS, RANKS, RANK_VALUE,
    modifier, sgn, costOf, pbeOfArray, tierOf, sumArray,
    d, rollDice, topN, bottomN, sumD,
    matrixSelect,
    freshDeck, shuffle, dealHand, buildBestHands,
    genMethodV, genMethodVI, genMethodVI_5d6, genMethodVII,
    genMethodVIII, genMethodVIII_swappable,
    genMethodIX, genMethodIX_alt,
    genMethodX, genMethodXI, genMethodXII, genMethodXIII
  };
})();
