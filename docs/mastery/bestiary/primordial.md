---
generated_by: tools/sync_mastery.py
---

# Primordial

Primordial creatures are expressions of fundamental force — the bedrock laws of how reality works. The four elements (Fire, Sea, Sky, Stone) are the most visible Primordial forces, but any force that predates morality and consciousness can produce Primordial beings: binding, consequence, gravity, hunger.

Primordial creatures tend toward the impersonal and the ancient. They ARE a fundamental force given form, rather than beings merely connected to one.

**Builder notes:** This file covers all Primordial creatures: elementals (Autochthon), giants (Behemoth), and other fundamental-force creatures. Each creature's Form tag indicates which elemental/force magic interacts with it. Primordials can be connected to one or more of Fire, Sea, Sky, Stone — or to a non-elemental force.

**Classification package (all Primordials):**
- **Benefit:** Immune to [element] damage. (A fire elemental cannot be burned — it IS fire.)
- **Cost:** Impotence on trials vs [opposing element] damage. (Fire/Sea and Sky/Stone are opposing pairs.)
- **Connected to [element] magic.** (Casters need the creature's element Form for magical interaction beyond dealing damage. Critically: the element that can't damage the creature is the same element best positioned to control it.)

| Element | Damage Immunity | Vulnerability (Impotence vs damage) |
|:---|:---|:---|
| Fire | Fire | Sea |
| Sea | Sea | Fire |
| Sky | Sky | Stone |
| Stone | Stone | Sky |

These are free and inherited by every Primordial creature, including Minions. Elemental healing (healed by own element) is NOT part of the classification package — it costs an ability slot.

---

## Fire Elementals — Autochthon (Fire)

### Ember Sprite (Tier 3 Minion)

*Division 3, Tier 3, Minion. ½ Primordial Autochthon (Fire).*

A flickering mote of living flame, barely a foot tall. Individually harmless. In swarms, they set everything ablaze.

| Stat | Value |
|:---|:---|
| Attack | 1d2 (Touch, Fast) Fire |
| Health | 1 |
| Resistance | 3 (all mundane) |
| Physical / Mental | d2 / d2 |
| Trials | 1d2 + 1d4 |
| Defense | 1d2 + 3 + 1 (½sq) |
| AP | 2 |
| Speed | 9 (45 ft) fly |
| Footprint | ½ sq |
| Reach | 5 ft |

| Group | Heads | Health | Attack | Defense | Mob DC (Flame Touch) |
|:---|:---:|:---:|:---:|:---:|:---:|
| Cluster | 6 | 6 | 6d2 Fire | 6d2 + 4 | 5 |
| Brood | 12 | 12 | 12d2 Fire | 12d2 + 4 | 7 |
| Swarm | 16 | 16 | 16d2 Fire | 16d2 + 4 | 9 |

**Passive:**

***Autochthon (Fire)*** *(Classification, no slot).* Immune to Fire damage. Impotence on trials vs Sea damage. Connected to Fire magic. *(Classification package.)*

***Flame Touch*** *(Attack definition, no slot).* The ember sprite is pure fire. Its attacks deal Fire damage, avoided by an AGI trial [Cluster 5 / Brood 7 / Swarm 9] instead of a standard defense action.

**Mob:**

***Kindling*** *(Mob, no slot).* When the swarm deals damage, the target suffers [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning) 3.

> **Note:** Ember Sprites deal elemental damage that bypasses mundane armor — only Fire resistance reduces it, and defense is an AGI trial, not a weapon parry. A swarm of 16 forcing an AGI trial [9] with 16d2 Fire damage and Burning is devastating against low-level PCs with no Fire resistance. The counter is Fire resistance (magical) or Sea damage (classification vulnerability).

---

### Fire Elemental (Tier 2 Adept)

*Division 3, Tier 2, Adept. 1×1 Primordial Autochthon (Fire).*

A humanoid column of roaring flame, roughly 6 feet tall. It moves with purpose and strikes with waves of intense heat.

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (T2, d3) | 14 (T3, d4) | 9 (T2, d3) | 9 (T2, d3) | 3 (T1, d2) | 6 (T2, d3) | 12 (T3, d4) | 12 (T3, d4) |

**Tier Budget:** 2+3+2+2+1+2+3+3 = 18. Budget for T2 Adept = 18. ✓

> **Note:** Fire elementals are fast and perceptive (AGI T3, PER T3). CHA T3 reflects the force of will of a burning presence — fire dominates the space it occupies. INT stays T1 — fire doesn't reason.

| Stat | Value |
|:---|:---|
| Attack (Slam, Fast) | d4 (DTD) + d3 (PHY) Crushing. Exploding. (Attribute: PHY) |
| Health | 9 + 3d3 + d4 (DTD) = 9 + 3d3 + d4 (~16) |
| Resistance | Budget 20: Cut 4, Cleave 3, Crush 4, Pierce 3, Puncture 3, Primal 2, Sky 1 |
| Trials | 1d3 + Attribute TD |
| Defense | d4 (DTD) + d4 (AGI) + applicable resistance. (Attribute: AGI) |
| AP | 2 |
| Speed | 10 (50 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Autochthon (Fire)*** *(Classification, no slot).* Immune to Fire damage. Impotence on trials vs Sea damage. Connected to Fire magic. *(Classification package.)*

***Fire Aura*** *(Ability slot 1).* Creatures within 5 feet that enter the aura on their turn or end their turn within it take 2 Fire damage (flat, END Tier, no trial).

***Living Flame*** *(Ability slot 2).* If the fire elemental's Crushing damage deals damage to durability or health, the target takes 2 Fire damage (flat, END Tier). No explosions on the Fire portion.

---

### Inferno (Tier 3 Epic)

*Division 8, Tier 3, Epic. 2×2 Primordial Autochthon (Fire).*

A towering conflagration given will — a roaring pillar of flame 15 feet tall and 10 feet wide. It moves like a wildfire, consuming everything in its path. Encountered only in places of extreme heat — volcanic fields, forest fires, or summoned by powerful pyromancers.

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 22 (T5, d8) | 31 (T7, d12) | 22 (T5, d8) | 22 (T5, d8) | 4 (T1, d2) | 12 (T3, d4) | 16 (T4, d6) | 16 (T4, d6) |

**Tier Budget:** 5+7+5+5+1+3+4+4 = 34. Budget for T3 Epic = 36. Close (-2). ✓

> **Note:** AGI T7 is inhuman — fire is inhumanly fast. A wildfire outruns horses. STR T5 reflects the force of a firestorm ripping through structures. CHA T4 is the overwhelming presence of a conflagration. INT stays T1 — fire doesn't reason, but it has instinct (WIS T3), awareness (PER T4), and will (CHA T4).

| Stat | Value |
|:---|:---|
| Attack (Slam, Moderate) | 2d6 (DTD) + d8 (PHY) + 4 (4 sq) Crushing. Exploding. (Attribute: PHY) |
| Health | 22 + 12d8 + 2d6 (~79) |
| Resistance | Budget 90: Cut 12, Cleave 10, Crush 12, Pierce 12, Puncture 10, Sky 10, Stone 8, Primal 6, Sacred 5, Profane 3, Void 2 |
| Trials | 1d10 + Attribute TD |
| Defense | 2d6 (DTD) + d12 (AGI) + applicable resistance. (Attribute: AGI) |
| AP | 2/phase, active in Fast + Moderate (4 total, max 2 attacks/phase) |
| Speed | 14 (70 ft) |
| Footprint | 2×2 (4 sq) |
| Reach | 10 ft |

**Passive:**

***Autochthon (Fire)*** *(Classification, no slot).* Immune to Fire damage. Impotence on trials vs Sea damage. Connected to Fire magic. *(Classification package.)*

***Fire Aura*** *(Ability slot 1).* Creatures within 40 feet that enter the aura on their turn or end their turn within it take 5 Fire damage (flat, END Tier, no trial).

***Living Flame*** *(Ability slot 2).* If the Inferno's Crushing damage deals damage to durability or health, the target takes 5 Fire damage (flat, END Tier). No explosions on the Fire portion.

***Absorb Flame*** *(Ability slot 3).* When the Inferno takes Fire damage, it heals health equal to the damage dealt instead of taking damage.

**Abilities:**

***Wildfire*** *(2 AP, Movement. Ability slot 4).* The Inferno moves up to full speed in a straight line. This movement does not provoke attacks of opportunity. Each creature in its path must succeed on an AGI trial [9] or gain [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning) [5].

***Consume*** *(2 AP, Ranged 40 ft. Ability slot 5).* The target must succeed on an AGI trial [9] or take 2d6 (DTD) + d8 (END) Fire damage and advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier.

***Flare*** *(1 AP, Reaction. Ability slot 6).* When the Inferno takes Sea damage, it releases a burst of steam. All creatures within 10 feet must succeed on a PER trial [9] or advance [Concealed](../core/conditions.md#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") (Obscured) by 1 tier for 1 round.

**Phase Reference:**
- **Fast:** Wildfire, Consume, Flare (Reaction)
- **Moderate:** all above + Slam

> **Note:** 6 ability slots (Epic budget 5-6). Slots 1-3 passive, slots 4-6 active. Identity: overwhelming conflagration — passive fire pressure (Aura + Living Flame), heals from fire (Absorb Flame + Ember Sprite synergy), charges through lines (Wildfire), picks off isolated targets at range (Consume), punishes Sea damage exploitation (Flare). Flame Wave (AoE blast) cut for budget — in the ability pool for future use.

---

## Stone Elementals — Autochthon (Stone)

### Living Stone (Tier 2 Adept)

*Division 3, Tier 2, Adept. 1×1 Primordial Autochthon (Stone).*

A roughly humanoid figure of animated rock, standing about 5 feet tall. It moves slowly but strikes with the weight of the earth behind every blow. Living stones are often found as guardians in ancient places — tombs, mines, and mountain passes.

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 14 (T3, d4) | 3 (T1, d2) | 16 (T4, d6) | 14 (T3, d4) | 1 (T1, d2) | 6 (T2, d3) | 6 (T2, d3) | 6 (T2, d3) |

**Tier Budget:** 3+1+4+3+1+2+2+2 = 18. Budget for T2 Adept = 18. ✓

| Stat | Value |
|:---|:---|
| Attack (Slam, Slow) | d4 (DTD) + d6 (PHY) Crushing. Exploding. (Attribute: PHY) |
| Attack (Hurl Rock, Slow, Heavy Thrown 20/40/60) | d4 (DTD) + d4 (STR) Crushing. Exploding. (Attribute: STR) |
| Health | 14 + 3d4 + d4 (DTD) = 14 + 4d4 (~24) |
| Resistance | Budget 20: Cut 5, Cleave 4, Crush 1, Pierce 5, Puncture 5 |
| Trials | 1d3 + Attribute TD |
| Defense | d4 (DTD) + d6 (PHY) + applicable resistance. (Attribute: PHY) |
| AP | 2 |
| Speed | 4 (20 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Autochthon (Stone)*** *(Classification, no slot).* Immune to Stone damage. Impotence on trials vs Sky damage. Connected to Stone magic. *(Classification package.)*

**Abilities:**

***Hurl Rock*** *(1 AP, Attack. Ability slot 1).* The living stone makes a hurl rock attack with Inferiority. On a hit, the target advances [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") by 1 tier.

***Smash*** *(2 AP, Attack. Ability slot 2).* The living stone makes a slam attack. d4 + d6 + half STR score (7) Crushing. Must act in Slow phase. While preparing, enemies attacking it gain Superiority.

---

### Earth Guardian (Tier 3 Champion)

*Division 6, Tier 3, Champion. 2×1 Primordial Autochthon (Stone).*

A massive animated statue or stone construct, 8-10 feet tall and built like a wall. Earth guardians are found protecting ancient sites — temple entrances, crypt doors, mountain passes. They do not pursue — they guard.

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 26 (T6, d10) | 3 (T1, d2) | 22 (T5, d8) | 22 (T5, d8) | 3 (T1, d2) | 12 (T3, d4) | 16 (T4, d6) | 11 (T3, d4) |

**Tier Budget:** 6+1+5+5+1+3+4+3 = 28. Budget for T3 Champion = 28. ✓

> **Note:** Physical stats pushed hard — STR T6 reflects the weight of the earth behind every blow. CHA T4 is the willpower of something that has held its post for centuries. Controlling this creature with magic (targeting its weak INT T1) is far easier than overpowering it physically. That's the intended dynamic.

| Stat | Value |
|:---|:---|
| Attack (Slam, Slow) | d10 (DTD) + d10 (STR) + 2 (2 sq) Crushing. Exploding. (Attribute: STR) |
| Attack (Hurl Boulder, Slow, Heavy Thrown 30/60/90) | d10 (DTD) + d10 (STR) + 2 (2 sq) Crushing. Exploding. (Attribute: STR) |
| Health | 22 + 8d8 + d10 (~61) |
| Resistance | Budget 60: Cut 12, Cleave 10, Crush 2, Pierce 12, Puncture 10, Fire 6, Sea 6, Sky 2 |
| Trials | 1d6 + Attribute TD |
| Defense | d10 (DTD) + d8 (PHY) + applicable resistance. (Attribute: PHY) |
| AP | 3 (max 2 attacks) |
| Speed | 6 (30 ft) |
| Footprint | 2×1 (2 sq) |
| Reach | 10 ft |

**Passive:**

***Autochthon (Stone)*** *(Classification, no slot).* Immune to Stone damage. Impotence on trials vs Sky damage. Connected to Stone magic. *(Classification package.)*

**Abilities:**

***Absorb Stone*** *(1 AP, Action. Ability slot 1).* While standing on stone or earth, the earth guardian draws sustenance from its element, healing END TD (d8) health.

***Hurl Boulder*** *(1 AP, Attack. Ability slot 2).* The earth guardian makes a boulder attack with Impotence targeting all creatures in a 2×1 area at the impact point. Roll one attack and apply to all targets.

***Smash*** *(2 AP, Attack. Ability slot 3).* The earth guardian makes a slam attack. d10 + d10 + half STR score (13) + 2 (2 sq) Crushing. Must act in Slow phase. While preparing, enemies attacking it gain Superiority.

***Tremor*** *(2 AP, Action. Ability slot 4).* All creatures within 15 feet standing on stone or earth must succeed on an AGI trial [7] or be knocked prone.

---

## Sea — Autochthon (Sea)

### Undine (Tier 3 Epic)

*Division 8, Tier 3, Epic. 1×1 Primordial Autochthon (Sea).*

A water spirit of terrible beauty. The Undine appears as a flawless humanoid figure near bodies of water — rivers, deep lakes, coastal caves. It can take the appearance of any ancestry, and detecting the disguise requires a Perception trial [9] or physical contact (its skin is cold and wet). Once revealed, its true form is translucent and flowing — clearly inhuman.

Undines are ancient territorial predators. They are not malevolent — they simply do not distinguish between trespasser and prey. Villages within a day's travel of an Undine's water know the stories. The stories are always true.

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 11 (T3, d4) | 22 (T5, d8) | 16 (T4, d6) | 22 (T5, d8) | 12 (T3, d4) | 22 (T5, d8) | 31 (T7, d12) | 16 (T4, d6) |

**Tier Budget:** 3+5+4+5+3+5+7+4 = 36. Budget for T3 Epic = 36. ✓

> **Note:** CHA T7 is the Undine's primary weapon — inhumanly alluring, the same way the Inferno's AGI T7 is inhumanly fast. WIS T5 reflects deep intuitive cunning — it reads people, picks the weak-willed one. STR T3 and PHY T4 are deliberately low; this creature does not want to fight you physically. AGI T5 because water is fluid and hard to pin down.

| Stat | Value |
|:---|:---|
| Attack (Grasp, Fast) | 2d6 (DTD) + d6 (PHY) Crushing. Exploding. (Attribute: PHY) |
| Health | 22 + 8d8 + 2d6 (~65) |
| Resistance | Budget 90: Cut 12, Cleave 10, Crush 14, Pierce 12, Puncture 10, Sky 10, Stone 6, Primal 8, Sacred 4, Profane 2, Void 2 |
| Trials | 1d10 + Attribute TD |
| Defense | 2d6 (DTD) + d8 (AGI) + applicable resistance. (Attribute: AGI) |
| AP | 2/phase, active in Fast + Moderate (4 total, max 2 attacks/phase) |
| Speed | 8 (40 ft) land; 12 (60 ft) swim |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Autochthon (Sea)*** *(Classification, no slot).* Immune to Sea damage. Impotence on trials vs Fire damage. Connected to Sea magic. *(Classification package.)*

***Aquatic*** *(Passive. Ability slot 7).* In water, the Undine has Dominance on all attack and defense rolls. On land, it functions normally.

***Siren's Call*** *(Ability slot 1).* Sapient creatures that can hear the Undine and enter the aura (40 ft) must succeed on a WIS trial [9] or advance [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") by 1 tier. A creature that succeeds is immune to the aura for the rest of the encounter. While a creature remains in the aura, its Charmed does not deteriorate, including tiers from other sources. Once per turn, it can spend 1 AP on a WIS trial [9] to break the aura's hold; on success, Charmed deteriorates normally even while it remains inside. Leaving the aura also ends the hold, and a creature that re-enters makes a new trial.

***Absorb Water*** *(Ability slot 5).* When the Undine takes Sea damage, it heals health equal to the damage dealt instead of taking damage.

**Abilities:**

***Lure*** *(1 AP, Action. Ability slot 2. Range 60 ft).* The Undine beckons a single creature. The target must succeed on a WIS trial [9] or use its full movement on its next turn to move toward the Undine by the most direct route. If the target is already [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled."), advance Charmed by 1 tier.

***Riptide*** *(2 AP, Action. Ability slot 3. Range 30 ft).* All creatures within 30 feet must succeed on a STR trial [9] or be pulled 15 feet toward the nearest body of water (or toward the Undine if already in water).

***Drown*** *(2 AP, Action. Ability slot 4. Range 15 ft. Requires target in water).* The target must succeed on an END trial [9] or advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier. [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") from Siren's Call prevents the target from leaving water voluntarily.

***Mist Veil*** *(1 AP, Reaction. Ability slot 6).* When the Undine takes Fire damage, it releases a burst of steam. All creatures within 10 feet must succeed on a PER trial [9] or advance [Concealed](../core/conditions.md#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") (Obscured) by 1 tier for 1 round.

**Phase Reference:** All abilities are available in all active phases.

> **Note:** 6 ability slots (Epic budget 5-6). Slots 1, 5 passive; slots 2-4, 6 active. Identity: personality-driven apex predator. The kill loop: Siren's Call (passive charm aura) → Lure (pull specific targets toward water) → Riptide (drag groups into water) → Drown (kill in water). Absorb Water heals from Sea magic. Mist Veil punishes the correct counter (Fire). Counterplay: high WIS resists the charm loop, staying out of the water negates Drown, Fire is devastating (0 resistance + classification Impotence) but triggers Mist Veil. On land without Dominance the Undine is physically fragile.

---

## Giants — Behemoth (Stone)

Giants are Primordial Behemoths — massive beings of stone and earth given humanoid form. They are slow, ancient, and devastatingly strong. Connected to Stone magic.

### Ogre (Tier 3 Champion)

*Division 6, Tier 3, Champion. 2×1 Primordial Behemoth (Stone).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 36 (T8, 2d6) | 6 (T2, d3) | 31 (T7, d12) | 28 (T6, d10) | 4 (T1, d2) | 4 (T1, d2) | 3 (T1, d2) | 8 (T2, d3) |

| Stat | Value |
|:---|:---|
| Attack (Club 2H, Moderate) | d12 + 2d8 + 2 (Large) Crushing. Exploding. (2H: +1 step. Attribute: STR) |
| Attack (Club 1H, Slow, Single) | d10 + 2d6 + 2 (Large) Crushing. Exploding. (Attribute: STR) |
| Attack (Fist, Moderate) | d10 + 2d6 + 2 (Large) Crushing. Exploding. (Attribute: STR) |
| Attack (Bite, Moderate) | d10 + 2d6 + 2 (Large) Puncture. Exploding. (Attribute: STR) |
| Health | 28 + 8d10 + d10 (~77) |
| Resistance | Budget 60: Cut 8, Cleave 10, Crush 18, Pierce 12, Puncture 6, Primal 6 |
| Trials | 1d6 + Attribute TD |
| Defense (with Club) | d8 + d12 + applicable resistance. (2H: −1 step. Attribute: STR) |
| Defense (with Club 1H) | d10 + 2d6 + applicable resistance. (Attribute: STR) |
| Defense (unarmed) | d10 + d12 + applicable resistance. (Attribute: PHY) |
| AP | 3 (max 2 attacks) |
| Speed | 7 (35 ft) |
| Footprint | 2×1 (2 sq) |
| Reach | 10 ft |

**Passive:**

***Behemoth (Stone)*** *(Classification, no slot).* Immune to Stone damage. Impotence on trials vs Sky damage. Connected to Stone magic. *(Classification package.)*

**Abilities:**

***Grab*** *(1 AP, Action. Ability slot 1).* The ogre attempts to grab a creature within reach. The target must succeed on a STR trial [7] or advance [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") by 1 tier. Restricted does not deteriorate while held. Once per turn, the target can spend 1 AP on a STR trial [7] to break free; on success, the hold drops by 1 tier. An adjacent ally can spend 1 AP on its own turn to make the same trial for it. While grabbing, the ogre cannot make club attacks (one hand occupied).

***Bite*** *(1 AP, Attack. Ability slot 2).* The ogre makes a bite attack with Dominance against a [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") target.

***Hurl*** *(1 AP, Attack. Ability slot 3).* The ogre makes a fist attack with Inferiority, throwing a rock or creature (requires T2+ [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).")) up to 30 feet. Roll one attack and apply to both the thrown creature and the target at the impact point. On a hit, the target advances Restricted by 1 tier.

---

### Ettin (Tier 3 Epic)

*Division 8, Tier 3, Epic. 2×2 Primordial Behemoth (Stone).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 41 (T9, 2d8) | 6 (T2, d3) | 36 (T8, 2d6) | 36 (T8, 2d6) | 14 (T3, d4) | 12 (T3, d4) | 6 (T2, d3) | 12 (T3, d4) |

| Stat | Value |
|:---|:---|
| Attack (Club 1H, Moderate, Single) | 2d6 (DTD) + 2d8 (STR) + 4 (Massive) Crushing. Exploding. (Attribute: STR) |
| Attack (Club 2H, Moderate, Two-Handed) | 2d8 (DTD) + 2d10 (STR) + 4 (Massive) Crushing. Exploding. (2H: +1 step. Attribute: STR) |
| Attack (Rock, Slow, Thrown 30/60/90) | 2d6 (DTD) + 2d8 (STR) + 4 (Massive) Crushing. Exploding. (Attribute: STR) |
| Health | 36 + 26d6 (rolled, ~127) |
| Resistance | Budget 90: Cut 12, Cleave 14, Crush 25, Pierce 16, Puncture 9, Primal 7, Fire 7 |
| Trials | 1d10 + Attribute TD |
| Defense | 2d6 (DTD) + 2d8 (STR) + applicable resistance. (Attribute: STR) |
| Defense (2H) | d12 (DTD) + 2d6 (STR) + applicable resistance. (2H: −1 step. Attribute: STR) |
| AP | 2/phase, active in Moderate + Slow (4 total, max 2 attacks/phase) |
| Speed | 9 (45 ft) |
| Footprint | 2×2 (4 sq) |
| Reach | 10 ft |

**Passive:**

***Behemoth (Stone)*** *(Classification, no slot).* Immune to Stone damage. Impotence on trials vs Sky damage. Connected to Stone magic. *(Classification package.)*

***Three Heads*** *(Ability slots 1-2).* The Ettin cannot be flanked. It has awareness in all directions, gains +3 to Startle trials and Perception-based trials, and is immune to [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") and [Controlled](../core/conditions.md#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.").

***Giant's Grip*** *(Passive. Ability slot 6).* The Ettin wields Versatile weapons in one hand at their two-handed speed (Moderate), without the two-handed step. Its other hand stays free to hurl rocks.

**Abilities:**

***Bash*** *(1 AP, Attack. Ability slot 3).* The Ettin makes a club attack with Impotence. If damage is dealt, the target must succeed on a PER trial [9] or advance [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") by 1 tier.

***Cunning Feint*** *(1 AP, Action. Ability slot 4).* One head distracts a target within 10 feet. The target must succeed on a PER trial [9] or the Ettin's next attack against that target this round gains Superiority.

***Swipe*** *(1 AP, Attack. Ability slot 5).* The Ettin makes a club attack targeting up to 2 creatures within reach. Roll one attack with Inferiority and apply to both targets.

**Phase Reference:**
- **Moderate:** Club, Bash, Cunning Feint, Swipe
- **Slow:** all above + Rock

---

### Bergrisar (Tier 3 Epic)

*Division 8, Tier 3, Epic. 3×2 Primordial Behemoth (Stone).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 48 (T10, 2d10) | 4 (T1, d2) | 41 (T9, 2d8) | 41 (T9, 2d8) | 9 (T2, d3) | 12 (T3, d4) | 8 (T2, d3) | 9 (T2, d3) |

| Stat | Value |
|:---|:---|
| Attack (Fist, Moderate) | 2d6 (DTD) + 2d10 (STR) + 6 (Enormous) Crushing. Exploding. (Attribute: STR) |
| Attack (Boulder, Slow, Thrown 30/90/150) | 2d6 (DTD) + 2d10 (STR) + 6 (Enormous) Crushing. Exploding. (Attribute: STR) |
| Health | 41 + 14×2d8 + 2d6 (rolled, ~174) |
| Resistance | Budget 90: Cut 12, Cleave 14, Crush 26, Pierce 13, Puncture 10, Sea 5, Primal 5, Fire 5 |
| Trials | 1d10 + Attribute TD |
| Defense | 2d6 (DTD) + 2d8 (PHY) + applicable resistance. (Attribute: PHY) |
| AP | 2/phase, active in Moderate + Slow (4 total, max 2 attacks/phase) |
| Speed | 10 (50 ft) |
| Footprint | 3×2 (6 sq) |
| Reach | 15 ft |

**Passive:**

***Behemoth (Stone)*** *(Classification, no slot).* Immune to Stone damage. Impotence on trials vs Sky damage. Connected to Stone magic. *(Classification package.)*

**Abilities:**

***Stomp*** *(2 AP, Action. Ability slot 1).* The Bergrisar slams a foot down, fracturing the ground. All creatures within 20 feet must succeed on an AGI trial [9] or be knocked prone.

***Boulder Throw*** *(1 AP, Attack. Ability slot 2).* The Bergrisar makes a boulder attack with Impotence targeting all creatures in a 2×2 area at the impact point. Roll one attack and apply to all targets.

***Reconstitute*** *(1 AP, Action. Ability slot 3).* While standing on stone or earth, the Bergrisar heals END TD (2d8) health.

***Avalanche*** *(2 AP, Movement. Ability slot 4).* The Bergrisar moves up to full speed in a straight line. This movement does not provoke attacks of opportunity. Each creature in its path must succeed on a STR trial [9] or advance [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") by 1 tier.

***Swipe*** *(1 AP, Attack. Ability slot 5).* The Bergrisar makes a fist attack targeting up to 2 creatures within reach. Roll one attack with Inferiority and apply to both targets.

**Phase Reference:**
- **Moderate:** Fist, Stomp, Reconstitute, Avalanche, Swipe
- **Slow:** all above + Boulder Throw
