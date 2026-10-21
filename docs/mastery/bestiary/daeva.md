---
generated_by: tools/sync_mastery.py
---

# Daeva

This file contains Daeva creatures — beings sustained by Profane magic. Most entries here are **Daeva Gestalt (Undead)** — mortals whose natural life cycle has been overwritten by Profane magic.

**Classification package (all Daeva):**
- **Benefit:** Immune to Profane damage. (Sustained by Profane magic — Profane energy is native to them.)
- **Cost:** Impotence on trials vs Sacred damage. (Profane nature is universally opposed to Sacred.)
- **Connected to Profane magic.** (Casters need Profane Form to charm, bind, banish, or otherwise magically interact beyond dealing damage.)

These are free and inherited by every Daeva creature, including Minions.

**Undead condition immunities (Gestalt):** [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") immunity are NOT free classification features. They are bundled as **Undead Resilience** (1 ability slot) — one concept (no living biology), one slot. This means a mindless undead Adept (2 slots) that takes Undead Resilience has one slot remaining. Higher-rank undead (Champion, Master) can afford the immunity AND have room for multiple combat abilities.

---

## Undead — Daeva Gestalt

---

## Skeletons (Tier 1)

Animated bones held together by Profane energy. No flesh, no muscle, no organs. Fast and fragile — they shatter when hit hard enough but their lack of soft tissue makes them resistant to piercing and cutting damage. They are mindless.

### Skeleton (Tier 1 Minion)

*Division 1, Tier 1, Minion. 1×1 Daeva Druj Gestalt, Undead (Profane).*

| Stat | Value |
|:---|:---|
| Attack | 1d2 (Rusted Shortsword, Fast, Single) Cutting |
| Health | 1 |
| Resistance | 1 (all mundane) |
| Physical / Mental | d2 / d2 |
| Trials | 1d2 + 1d2 |
| Defense | 1d2 + 1 |
| AP | 2 |
| Speed | 4 (20 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic. *(Classification package only — Minions have 0 ability slots.)*

| Group | Heads | Health | Attack | Defense | Mob DC |
|:---|:---:|:---:|:---:|:---:|:---:|
| Cluster | 6 | 6 | 6d2 | 6d2 + 1 | None |
| Brood | 12 | 12 | 12d2 | 12d2 + 1 | None |
| Swarm | 16 | 16 | 16d2 | 16d2 + 1 | None |

**Mob:**

***Grave Rust*** *(Mob, no slot).* When the group deals damage, the target suffers [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Decaying) 1.

> **Note:** Skeleton speed = 3 + 1 (T1 AGI) + 0 (1 sq) + 0 (biped) = 4. Minions have 0 ability slots, so no condition immunities.

---

### Skeleton Warrior (Tier 1 Adept)

*Division 2, Tier 1, Adept. 1×1 Daeva Druj Gestalt, Undead (Profane).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (T2, d3) | 6 (T2, d3) | 9 (T2, d3) | 8 (T2, d3) | 1 (T1, d2) | 1 (T1, d2) | 1 (T1, d2) | 4 (T1, d2) |

**Tier Budget:** 2+2+2+2+1+1+1+1 = 12. Budget for T1 Adept = 12. ✓

> **Note:** Mindless undead have minimal mental stats (all T1, scores 1-4). INT 1, WIS 1, CHA 1 reflects no thinking, no judgment, no personality. PER 4 represents basic sensory awareness — they can detect nearby living creatures, probably through Profane energy rather than sight.

**Armor:** Rotted Gambeson fragments (Padded Hauberk + Padded Greaves)

| Stat | Value |
|:---|:---|
| Attack (Rusted Backsword, Fast, Single) | d3 (DTD) + d3 (PHY) Cutting. Exploding. (Attribute: PHY) |
| Attack (Rusted Spear, Slow, Single) | d3 (DTD) + d3 (STR) Piercing. Exploding. (Attribute: STR) |
| Attack (Rusted Spear 2H, Moderate, Two-Handed) | d4 (DTD) + d4 (STR) Piercing. Exploding. (2H: +1 step. Attribute: STR) |
| Health | 2d3 + 1 (~5) |
| Durability | 18 |
| Resistance | Cut 1, Crush 3, Cleave 2, Pierce 3, Puncture 1 (rotted gambeson, 10 total) |
| Trials | 1d3 + Attribute TD |
| Defense | d3 (DTD) + d3 (PHY) + applicable resistance. (Attribute: PHY) |
| Defense (2H) | d2 (DTD) + d2 (STR) + applicable resistance. (2H: −1 step. Attribute: STR) |
| Guards | Mutable, Stable, Striking |
| AP | 2 |
| Speed | 5 (25 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic.

***Undead Resilience*** *(Ability slot 1).* Immune to [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."). No living biology — cannot be poisoned, diseased, or fatigued.

---

## Zombies (Tier 1-2)

Risen corpses animated by Profane magic. Unlike skeletons, zombies retain flesh, making them tougher but slower. They are mindless, driven by the will of their creator or by residual hunger.

### Zombie (Tier 1 Adept)

*Division 2, Tier 1, Adept. 1×1 Daeva Druj Gestalt, Undead (Profane).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 13 (T3, d4) | 3 (T1, d2) | 4 (T1, d2) | 13 (T3, d4) | 1 (T1, d2) | 1 (T1, d2) | 1 (T1, d2) | 1 (T1, d2) |

**Tier Budget:** 3+1+1+3+1+1+1+1 = 12. Budget for T1 Adept = 12. ✓

| Stat | Value |
|:---|:---|
| Attack (Slam, Slow) | d3 (DTD) + d4 (STR) Crushing. Exploding. (Attribute: STR) |
| Health | 13 + 2d4 + d3 (DTD) = 13 + 2d4 + d3 (~20) |
| Resistance | Budget 10: Cut 1, Cleave 1, Crush 3, Pierce 3, Puncture 1, Primal 1 |
| Trials | 1d3 + Attribute TD |
| Defense | d3 (DTD) + d2 (PHY) + applicable resistance. (Attribute: PHY) |
| AP | 2 |
| Speed | 4 (20 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic.

***Undead Resilience*** *(Ability slot 1).* Immune to [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."). No living biology — cannot be poisoned, diseased, or fatigued.

**Behavior:** The zombie does not defend. It spends both AP on slam attacks every round. No ranged attacks — kiting is the intended counterplay.

---

### Zombie Brute (Tier 2 Adept)

*Division 3, Tier 2, Adept. 1×1 Daeva Druj Gestalt, Undead (Profane).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 26 (T6, d10) | 3 (T1, d2) | 4 (T1, d2) | 26 (T6, d10) | 1 (T1, d2) | 1 (T1, d2) | 1 (T1, d2) | 1 (T1, d2) |

**Tier Budget:** 6+1+1+6+1+1+1+1 = 18. Budget for T2 Adept = 18. ✓

| Stat | Value |
|:---|:---|
| Attack (Slam, Slow) | d4 (DTD) + d10 (STR) Crushing. Exploding. (Attribute: STR) |
| Health | 26 + 3d10 + d4 (DTD) = 26 + 3d10 + d4 (~45) |
| Resistance | Budget 20: Cut 2, Cleave 2, Crush 5, Pierce 5, Puncture 2, Primal 4 |
| Trials | 1d3 + Attribute TD |
| Defense | d4 (DTD) + d2 (PHY) + applicable resistance. (Attribute: PHY) |
| AP | 2 |
| Speed | 4 (20 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic.

***Undead Resilience*** *(Ability slot 1).* Immune to [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."). No living biology — cannot be poisoned, diseased, or fatigued.

**Behavior:** The zombie brute does not defend. It spends both AP on slam attacks every round. No ranged attacks — kiting is the intended counterplay.

---

## Revenants (Tier 2-3)

Undead sustained by purpose — vengeance, duty, or a binding oath. Unlike zombies and skeletons, revenants retain their intelligence, personality, and combat skills from life. They are not mindless; they are driven. A revenant knows who it was and remembers how to fight. If its purpose is ever fulfilled, the revenant is destroyed — it has no reason to persist.

### Revenant Soldier (Tier 2 Champion)

*Division 5, Tier 2, Champion. 1×1 Daeva Druj Gestalt, Undead (Profane).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 16 (T4, d6) | 9 (T2, d3) | 14 (T3, d4) | 16 (T4, d6) | 8 (T2, d3) | 11 (T3, d4) | 3 (T1, d2) | 11 (T3, d4) |

**Tier Budget:** 4+2+3+4+2+3+1+3 = 22. Budget for T2 Champion = 22. ✓

> **Note:** STR and PHY swapped (2026-10-03) so the longsword and spear, both STR weapons, keep their d6.

**Armor:** Corroded Byrnie (Aketon + Chain Haubergeon + Chain Coif + Chain Chausses — missing sleeves/mittons)

| Stat | Value |
|:---|:---|
| Attack (Longsword, Slow, Single) | d8 (DTD) + d6 (STR) Cutting. Exploding. (Attribute: STR) |
| Attack (Longsword 2H, Moderate, Two-Handed) | d10 (DTD) + d8 (STR) Cutting. Exploding. (2H: +1 step. Attribute: STR) |
| Attack (Spear 1H, Slow, Single) | d8 (DTD) + d6 (STR) Piercing. Exploding. (Attribute: STR) |
| Attack (Spear 2H, Moderate, Two-Handed) | d10 (DTD) + d8 (STR) Piercing. Exploding. (2H: +1 step. Attribute: STR) |
| Attack (Spear, Slow, Heavy Thrown 20/40/60) | d8 (DTD) + d6 (STR) Piercing. Exploding. (Attribute: STR) |
| Health | 5d6 + 2 (~20) |
| Durability | 37 |
| Resistance | Cut 11, Crush 3, Cleave 5, Pierce 5, Puncture 7, Primal 4, Fire 3, Sky 2 (armor 31 + 9 magical = 40 total) |
| Trials | 1d6 + Attribute TD |
| Defense (1H) | d8 (DTD) + d6 (STR) + applicable resistance. (Attribute: STR) |
| Defense (2H) | d6 (DTD) + d4 (STR) + applicable resistance. (2H: −1 step. Attribute: STR) |
| Guards | Mutable, Stable, Striking |
| AP | 3 (max 2 attacks) |
| Speed | 5 (25 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic.

***Undead Resilience*** *(Ability slot 1).* Immune to [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."). No living biology — cannot be poisoned, diseased, or fatigued.

**Abilities:**

***Unyielding Advance*** *(1 AP, Movement. Ability slot 2).* The revenant moves up to its speed. This movement does not provoke attacks of opportunity. The revenant cannot be slowed, stopped, or redirected by non-magical means during this movement.

***Press*** *(1 AP, Reaction. Ability slot 3).* When the revenant's melee attack is defended and deals no damage, it immediately makes two longsword attacks with Inferiority against the same target.

***Riposte*** *(1 AP, Reaction. Ability slot 4).* When the revenant takes no damage from a melee attack, it can counter-attack with a bonus of +4 to the attack roll.

> **Note:** 4 ability slots (Champion budget 3-4). Slot 1 passive, slots 2-4 active. Identity: disciplined undead fighter — advances through the line (UA), pressures defenders relentlessly (Press), punishes attacks (Riposte).

> **Note:** Unyielding Advance reflects the revenant's unstoppable nature — it walks through the front line to reach its target. Non-magical effects (Trip, Hamstring, physical barriers) don't stop it. Magic CAN stop it — a Sacred barrier or Primal entanglement works. This makes the revenant terrifying for martials but manageable for casters with the right Forms.

---

### Revenant Knight (Tier 3 Master)

*Division 7, Tier 3, Master. 1×1 Daeva Druj Gestalt, Undead (Profane).*

**Attributes:**

| STR | AGI | PHY | END | INT | WIS | CHA | PER |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 21 (T5, d8) | 9 (T2, d3) | 21 (T5, d8) | 21 (T5, d8) | 12 (T3, d4) | 16 (T4, d6) | 6 (T2, d3) | 16 (T4, d6) |

**Tier Budget:** 5+2+5+5+3+4+2+4 = 30. Budget for T3 Master = 30. ✓

**Armor:** Corroded Brigandine (Aketon + Splinted Cuirass + Splinted Coif + Plate Sabatons + Plate Arm Harness)

| Stat | Value |
|:---|:---|
| Attack (Claymore, Slow, Two-Handed) | 2d6 + d10 Cleaving. Exploding. (2H: +1 step. Attribute: STR) |
| Health | 7d8 + 3 (~35) |
| Durability | 49 |
| Resistance | Cut 9, Crush 9, Cleave 9, Pierce 7, Puncture 6, Primal 7, Sea 5, Stone 6, Fire 6, Void 6, Sky 5 (armor 40 + 35 magical = 75 total) |
| Trials | 1d8 + Attribute TD |
| Defense (2H) | d10 + d6 + applicable resistance. (2H: −1 step. Attribute: STR) |
| Guards | Mutable, Stable, Striking, Ochs |
| AP | 3 (max 2 attacks) |
| Speed | 5 (25 ft) |
| Footprint | 1×1 (1 sq) |
| Reach | 5 ft |

**Passive:**

***Gestalt (Undead)*** *(Classification, no slot).* Does not breathe, eat, or sleep. Immune to Profane damage. Impotence on trials vs Sacred damage. Connected to Profane magic.

***Undead Resilience*** *(Ability slot 1).* Immune to [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."). No living biology — cannot be poisoned, diseased, or fatigued.

***Aura of Dread*** *(Passive. Ability slot 2).* Living creatures that enter the aura (30 ft) must succeed on a WIS trial [8] or advance [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") by 1 tier. A creature that succeeds is immune to the aura for the rest of the encounter. While a creature remains in the aura, its Demoralized does not deteriorate, including tiers from other sources. Once per turn, it can spend 1 AP on a WIS trial [8] to break the aura's hold; on success, Demoralized deteriorates normally even while it remains inside. Leaving the aura also ends the hold, and a creature that re-enters makes a new trial. This trial is Profane in nature.

**Abilities:**

***Command the Fallen*** *(2 AP, Action. Ability slot 3. 1/encounter).* All allied undead within 30 feet advance [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls.") by 1 tier. Persists until end of encounter.

***Swipe*** *(1 AP, Attack. Ability slot 4).* The revenant makes a claymore attack targeting up to 2 creatures within reach. Roll one attack with Inferiority and apply to both targets. Cleaving.

> **Note:** 4 ability slots (Master budget 3-4). Slots 1-2 passive, slots 3-4 active. Identity: undead commander — locks down the field with dread (Aura), empowers allies (Command), cleaves through groups (Swipe). The Knight fights beside its retinue; the Soldier fights alone.
