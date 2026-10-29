---
generated_by: tools/sync_mastery.py
---

# Creature Rules

## Core Concepts

### Tier

Tier represents the **game stage** — what level range of PCs the creature is appropriate for. Tier determines the base Tier Die (TD) used across the system.

<span id="tier-die-by-tier"></span>**Tier Die by Tier**

| Tier | TD |
|:---:|:---:|
| 1 | d2 |
| 2 | d3 |
| 3 | d4 |
| 4 | d6 |
| 5 | d8 |
| 6 | d10 |
| 7 | d12 |

### Rank

Rank represents the creature's **role and capability** — its place in an organizational hierarchy or its narrative function in an encounter.

<span id="rank-roles-and-trial-base-die"></span>**Rank Roles and Trial Base Die**

| Rank | Role | Trial Base Die |
|:---|:---|:---:|
| Minion | Disposable fodder. Dangerous in groups. | d2 |
| Adept | Individual threat. Lackey to a Leader. | d3 |
| Leader | Mini-boss. Supported by Adepts and Minions. | d4 |
| Champion | Right hand of the Master. Sent when the Leader fails. | d6 |
| Master | The actual boss. Most powerful in a hierarchy. | d8 |
| Epic | Solo monster. Dangerous and deadly in its own right. | d10 |
| Legendary | Force of nature. The Otso, the Amarok, the Erymanthian Boar. | d12 |

<span id="trials"></span>**Trials.** Adept and above roll the Trial Base Die + the tier die of the attribute the trial calls for (a STR trial adds the STR tier die, a WIS trial adds the WIS tier die). The rank die works like a PC's skill die; the attribute die gives each creature its own strengths and weak points. Minions have no attribute array, so they roll the Trial Base Die (d2) + the creature's Tier die for every trial. Startle trials follow their own rule (AGI and PER tier dice, per Combat, Startle and Ambush).

<span id="rank-as-narrative-role"></span>**Rank as Narrative Role:**
Minion through Master tells the story of an organization. The Minion is the regular thief, the Adept is the most dangerous thief in a skirmish, the Leader is the local crime boss, the Champion is the Guild Master's favorite assassin, and the Master is the Guild Master himself. Epic is the ronin thief kicked out of the guild that no one fucks with. Legendary is the forgotten thief everyone thinks is dead — and when he shows up, the lackeys in the room can't touch him.

### Motivation

Every creature wants something. Before building its numbers, decide what drives it, using the same three scales as character Motivations ([Mastery Core Classes](../characters/creating-a-character.md), [Motivations](../characters/creating-a-character.md#motivations)):

- <span id="major"></span>**Major:** its nature, what it is. A hunter wants to hunt. A collector wants to collect. A false form wants to be real.
- <span id="moderate"></span>**Moderate:** its current arc. What it has been doing in this region, or to these people, over weeks or months.
- <span id="minor"></span>**Minor:** why it is here now. The scent it caught, the traveler it has its eye on.

Motivation decides behavior: when the creature fights, flees, talks, or bargains, and what would make it stop. Violence follows from motivation; it is not the default. A predator fights because hunting is what it is. A collector fights to keep what it has collected. Many creatures want something a party can give, refuse, or make not worth pursuing, and the fight comes when someone decides that killing it is simpler than understanding it.

### Division

Division = Tier + Rank offset (see **Division Offset by Rank**). Division is used for calculating challenge, XP, health die count, and the Division Tier Die (DTD) bonus applied to attacks, defense, and health for Adept and above.

<span id="division-offset-by-rank"></span>**Division Offset by Rank**

| Rank | Offset |
|:---|:---:|
| Minion | +0 |
| Adept | +1 |
| Leader | +2 |
| Champion | +3 |
| Master | +4 |
| Epic | +5 |
| Legendary | +6 |

### Division Tier Die (DTD) Table

Minions always use d2. For Adept and above, the DTD follows the die progression and doubles dice count when exceeding d12. DTD applies to attack, defense, and health.

<span id="division-tier-die-by-tier-and-rank"></span>**Division Tier Die by Tier and Rank**

| | Minion | Adept | Leader | Champion | Master | Epic | Legendary |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tier 1 | d2 | d3 | d4 | d6 | d8 | d10 | d12 |
| Tier 2 | d2 | d4 | d6 | d8 | d10 | d12 | 2d6 |
| Tier 3 | d2 | d6 | d8 | d10 | d12 | 2d6 | 2d8 |
| Tier 4 | d2 | d8 | d10 | d12 | 2d6 | 2d8 | 2d10 |
| Tier 5 | d2 | d10 | d12 | 2d6 | 2d8 | 2d10 | 2d12 |
| Tier 6 | d2 | d12 | 2d6 | 2d8 | 2d10 | 2d12 | 4d6 |
| Tier 7 | d2 | 2d6 | 2d8 | 2d10 | 2d12 | 4d6 | 4d8 |

Beyond d12, dice double in count and reset: 2d6 → 2d8 → 2d10 → 2d12 → 4d6 → 4d8. More dice = higher floor, more explosion chances, more consistent output.

### Creature Mastery

A creature has one mastery level, set by its Tier and rank on the Creature Mastery Level by Tier and Rank table below. It uses the same scale as a character's mastery, from Unskilled (1) to Grand Master (7), and it stands in for a character's weapon mastery, skill mastery, and form mastery wherever a rule reads the mastery *level*: as a bonus, a multiplier, a cap, or a comparison. A creature does not roll mastery dice. Where a character would roll a mastery die, a creature rolls its own dice: DTD for attacks and defense, its rank die for trials, and its casting die + DTD for spells. Its DCs are Division + 1.

When an effect refers to mastery, a creature's *[mastery trials](../core/mastery-and-trials.md#mastery-trials)* are the trials it makes to act (skill tasks, ambushes, miscast and duel rolls), not those it makes to resist. Its *[Mastery DC](../core/mastery-and-trials.md#mastery-dc)* is the DC of its abilities and spells (Division + 1).

<span id="creature-mastery-level-by-tier-and-rank"></span>**Creature Mastery Level by Tier and Rank**

| Tier | Minion | Adept | Leader | Champion | Master | Epic | Legendary |
|:---:|:---|:---|:---|:---|:---|:---|:---|
| 1 | Unskilled (1) | Untrained (2) | Untrained (2) | Untrained (2) | Basic (3) | Basic (3) | Basic (3) |
| 2 | Untrained (2) | Basic (3) | Basic (3) | Basic (3) | Skilled (4) | Skilled (4) | Skilled (4) |
| 3 | Basic (3) | Basic (3) | Skilled (4) | Skilled (4) | Expert (5) | Expert (5) | Expert (5) |
| 4 | Basic (3) | Skilled (4) | Expert (5) | Expert (5) | Expert (5) | Master (6) | Master (6) |
| 5 | Skilled (4) | Expert (5) | Master (6) | Master (6) | Master (6) | Master (6) | Master (6) |
| 6 | Skilled (4) | Expert (5) | Master (6) | Grand Master (7) | Grand Master (7) | Grand Master (7) | Grand Master (7) |
| 7 | Skilled (4) | Expert (5) | Master (6) | Grand Master (7) | Grand Master (7) | Grand Master (7) | Grand Master (7) |

#### Weapon Mastery

A creature's role grants its maneuvers and guards, the way a class hallmark grants a character abilities beyond their mastery: a thug ripostes because he is a thug. A maneuver bonus that reads mastery level uses the creature's mastery level: a Tier 2 Champion's Riposte bonus is +3.

#### Skill Mastery

Some disciplines counter a skill: *Alertness (Danger Sense) counters Sneaking.* When a PC resists a creature's skill with the discipline that counters it, compare the PC's mastery in that discipline to the creature's mastery level. If the PC's is equal or higher, the PC has Dominance on the trial. A creature never gains Dominance this way; its perception comes from its attributes and its Senses.

#### Form Mastery

A creature's mastery level is its form mastery level for every spell it casts. It sets:

- a ward's durability pool (form mastery level × 5 × duration multiplier) and flat resistance (× 2)
- a material barrier's durability (× 5 × (1 + Scale modifier)) and an energy barrier's resistance (× 2)
- an aura's damage (equal to the level)
- the highest power level of a dynamic construct
- the highest tier it can summon

### Attributes

Attributes are **independent of Tier and Rank**. They are intrinsic to the creature. A wolf has high Physique, Agility, and Perception regardless of its Tier. A goblin has low everything.

Every 5 points of an attribute score = 1 attribute Tier. You reach the next Tier when your Score reaches its threshold (a Score of 5 is Tier 2, a Score of 30 is Tier 7) — the same rule player characters use.

<span id="attribute-tier-by-score"></span>**Attribute Tier by Score**

| Attribute Tier | Score Range | Die | Notes |
|:---:|:---:|:---:|:---|
| 1 | 1-4 | d2 | |
| 2 | 5-9 | d3 | |
| 3 | 10-14 | d4 | |
| 4 | 15-19 | d6 | |
| 5 | 20-24 | d8 | |
| 6 | 25-29 | d10 | |
| 7 | 30-34 | d12 | Human ceiling |
| 8 | 35-39 | 2d6 | Inhuman |
| 9 | 40-44 | 2d8 | Inhuman |
| 10 | 45-49 | 2d10 | Inhuman |
| 11 | 50-54 | 2d12 | Inhuman |
| 12 | 55-59 | 4d6 | Inhuman |
| 13 | 60+ | 4d8 | Inhuman |

Tiers 1-7 are mortal range. Tier 8+ is for creatures that exceed mortal limits — giants, dragons, legendary beasts, and similar inhuman entities. The die progression follows the same pattern as the DTD table.

Eight attributes: Strength, Agility, Physique, Endurance, Intelligence, Wisdom, Charisma, Perception.

### Die Progression Chart

0 → 1 → 1d2 → 1d3 → 1d4 → 1d6 → 1d8 → 1d10 → 1d12 → 2d6 → 2d8 → 2d10 → 2d12

### Exploding Dice

Attack and defense dice explode on a max roll. **d2s never explode** — this is universal, not just for minions. In any roll containing a d2, only the non-d2 dice can explode.

---

## Creature Classification

Every creature has a classification tag on its stat block in the format: **Size, Classification Kingdom (Forms)**

Example: *1×1 Mortal Beast (Primal)* or *3×2 Primordial Behemoth (Stone)* or *1×1 Daeva Druj (Profane, Fire)*

### Classifications

<span id="classifications-and-primary-forms"></span>**Classifications and Primary Forms**

| Classification | Category | Primary Form |
|:---|:---|:---|
| Asura | Entropic | Sacred |
| Daeva | Entropic | Profane |
| Fae | Entropic | Primal |
| Eidos | Entropic | Void |
| Primordial | Elemental | Fire, Sea, Sky, Stone (or other fundamental force) |

### What Classification Does

Classification determines which **magic Form** connects to the creature. Any caster can throw fire at anything for damage, and most magic works on any creature regardless of its nature. Charming, controlling, summoning, banishing, shapeshifting into the creature, or restoring its mind requires the correct Form paired with the appropriate command (see *[Magic Mastery](../magic/index.md)*, [Connected Form](../magic/exorcism-enchantment-shapeshifting.md#connected-form)).

The **Forms listed in parentheses** on the stat block are the Forms that connect to the creature. Most creatures have one Form (their classification's primary). Some have two: a fire demon (Daeva Druj) is connected to both Profane and Fire. Mortal Beasts are the one kingdom whose connected form differs from their classification's: Primal instead of Void.

### Kingdoms

Each classification has kingdoms that provide further specificity. The kingdom is part of the stat block tag and may carry creature-specific or kingdom-specific features (condition immunities, special traits, etc.). These are noted in the creature's stat block, not as blanket classification rules.

<span id="kingdoms-by-classification"></span>**Kingdoms by Classification**

| Classification | Kingdoms |
|:---|:---|
| Asura | Amesha Spenta (numen), Yazata (non-numen) |
| Daeva | Div (numen), Druj (non-numen) |
| Fae | Dé (numen), Tuatha (peoples), Sídhe (place-bound spirits) |
| Eidos | Morphon: Akasha (numen), Sora (non-numen). Hylic, commonly called Mortal: Folk (sapient, Void), Beast (non-sapient, Primal). |
| Primordial | Protogenoi (numen), Autochthon (non-numen), Behemoth (massive) |

### Classification Package

Every classification carries one innate benefit and one innate cost. These are free — they do not come from the creature's ability slots or resistance budget. They are definitional: a fire elemental is immune to fire damage because it IS fire, not because it trained or evolved fire resistance.

<span id="benefit"></span>**Benefit:** Immune to [classification's primary damage type] damage.
<span id="cost"></span>**Cost:** Impotence on trials vs [opposing force] damage.

The vulnerability is strictly about resisting damage, not resisting control effects. A zombie has Impotence on trials against Sacred damage — not against Sacred Enthrallment. A Cherub has Impotence on trials against Profane damage — not against Profane domination.

<span id="classification-packages"></span>**Classification Packages**

| Classification | Damage Immunity | Vulnerability (Impotence vs damage) | Connected Form |
|:---|:---|:---|:---|
| Daeva | Profane | Sacred | Profane |
| Asura | Sacred | Profane | Sacred |
| Primordial (Fire) | Fire | Sea | Fire |
| Primordial (Sea) | Sea | Fire | Sea |
| Primordial (Sky) | Sky | Stone | Sky |
| Primordial (Stone) | Stone | Sky | Stone |
| Fae | Primal | Void | Primal |
| Eidos (Morphon) | Void | Primal | Void |
| Eidos (Mortal Folk) | None | None | Void |
| Eidos (Mortal Beast) | None | None | Primal |

A creature's Connected Form is the magic Form required to Charm, Control, summon, banish, or shapeshift into it, or to restore its mind (see [Magic Mastery](../magic/index.md), [Connected Form](../magic/exorcism-enchantment-shapeshifting.md#connected-form)). To summon an Asura requires Sacred magic. To charm Mortal Folk requires Void magic. Damage and all other magic of any Form work normally against any creature.

The classification package is the sole system for elemental and magical immunity/vulnerability. Do not add redundant passives (Elemental Body, Water Body, half-damage, etc.) that duplicate what the package already handles. Resistance budget handles mundane damage normally.

Minions inherit the classification package. It is the only classification feature they receive.

### Ability Slots

Every rank above Minion has a set number of ability slots (see [Rank Rules](#rank-rules)). Ability slots can hold active abilities (attacks, reactions, actions) OR passive features (condition immunities, resistances, special traits). This is an either/or — a condition immunity costs the same slot as a combat ability.

This creates meaningful tradeoffs. An undead Adept [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") immunity has no/fewer active abilities. It shambles forward and hits you. An undead Champion with 3+ slots can afford those same immunities and still have room for real combat abilities.

Passive features that occupy ability slots include: condition immunities, elemental healing (e.g., Absorb Flame), special resistances (e.g., Incorporeal: Inferiority on attacks that deal mundane damage), creature healing (e.g., Mend), and magic damage on weapons (e.g., Flaming Blade). These are creature-specific or kingdom-specific, not classification-wide. If it goes beyond the free classification package, it costs a slot.

<span id="slot-counts-are-guardrails"></span>**Slot counts are guardrails.** The counts in Rank Rules keep creatures consistent, and they loosen as rank rises. A creature can exceed its count when it needs to; its design notes record which guardrail it breaks and why.

<span id="free-traits"></span>**Free traits.** Senses and detection traits (e.g., Ambusher) do not occupy ability slots. Tag them `(no slot)`.

<span id="banes"></span>**Banes.** A weakness from a creature's lore (a ward it cannot cross, a substance that harms it, a rite that binds it) does not occupy an ability slot, at any rank including Minion. Tag it `(Bane, no slot)`.

### Cross-Domain Conditions

These are not kingdoms. They are statuses that can apply to any creature regardless of classification.

- <span id="numen"></span>**Numen** — patron status. Powerful enough to grant magic to devotees.
- <span id="gestalt"></span>**Gestalt** — transformed into a domain the creature did not originate from. Features specific to the Gestalt type are noted on the stat block.
    - <span id="undead"></span>**Undead (Daeva Gestalt):** a mortal whose natural life cycle has been overwritten by Profane magic.
    - <span id="lycanthrope"></span>**Lycanthrope (Fae Gestalt):** a mortal whose nature has turned Primal, giving it the shape of a beast.
    - <span id="bogle"></span>**Bogle (Morphon Gestalt):** a Morphon spirit in something else, such as an object, a beast, or a body.
- <span id="dragon"></span>**Dragon** — cross-domain form. Individual dragons belong to different classifications based on nature.

---

## Resistance

### Resistance Budget

Every creature has a resistance budget determined by **Tier × Rank × 5**, where Minion = 1, Adept = 2, Leader = 3, Champion = 4, Master = 5, Epic = 6, Legendary = 7.

<span id="resistance-budget-by-tier-and-rank"></span>**Resistance Budget by Tier and Rank**

| | Minion | Adept | Leader | Champion | Master | Epic | Legendary |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tier 1 | 5 | 10 | 15 | 20 | 25 | 30 | 35 |
| Tier 2 | 10 | 20 | 30 | 40 | 50 | 60 | 70 |
| Tier 3 | 15 | 30 | 45 | 60 | 75 | 90 | 105 |
| Tier 4 | 20 | 40 | 60 | 80 | 100 | 120 | 140 |
| Tier 5 | 25 | 50 | 75 | 100 | 125 | 150 | 175 |
| Tier 6 | 30 | 60 | 90 | 120 | 150 | 180 | 210 |
| Tier 7 | 35 | 70 | 105 | 140 | 175 | 210 | 245 |

### Damage Types

<span id="mundane"></span>**Mundane (5):** Cutting, Cleaving, Crushing, Piercing, Puncturing

<span id="magical"></span>**Magical (8):** Fire, Sea, Sky, Stone, Void, Profane, Sacred, Primal

Resistance points are distributed across damage types during creature building. Distribution creates the creature's identity — a knight dumps points into mundane resistance (armor), a fire elemental concentrates on fire (near immunity) but has almost no sea resistance. The budget forces meaningful weaknesses; no creature can be resistant to everything.

### Resistance by Rank

<span id="minions_1"></span>**Minions** spend their entire budget as flat Tier resistance across all 5 mundane types. No magical resistance.

<span id="adepts-and-above"></span>**Adepts and above** distribute resistance across damage types. For armored creatures, use piecemeal armor pieces from Equipment with resistance at or below the resistance budget (some creatures, like animals with barding, have base resistance that also is combined with armor resistance). Remaining budget (if any) can go to magical resistance or supplemental mundane resistance. For unarmored creatures (beasts, etc.), the full budget is distributed as natural resistance. Animals generally have high Crushing resistance (muscle/bone absorb blunt force) and lower Cutting resistance (blades slice through hide/flesh).

<span id="vulnerability"></span>**Vulnerability** (from classification package) is expressed as Impotence on trials vs the opposing damage type — not amplified damage, not negative resistance. A creature with 0 resistance to its opposing type takes unresisted damage AND has Impotence on trials against damage of that type. No negative resistance mechanic exists.

---

## Tier Budget

The tier budget is a guideline for total attribute tiers across all 8 attributes. It helps place creatures at the right rank and prevents over- or under-building. Creatures should fall within ~2 of the budget. The budget is a diagnostic, not a constraint — build the creature that feels right, then check where it lands.

<span id="tier-budget-by-tier-and-rank"></span>**Tier Budget by Tier and Rank**

| | Minion | Adept | Leader | Champion | Master | Epic | Legendary |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tier 1 | 8 | 12 | 14 | 16 | 18 | 20 | 24 |
| Tier 2 | 8 | 18 | 20 | 22 | 24 | 28 | 32 |
| Tier 3 | 8 | 24 | 26 | 28 | 30 | 36 | 40 |
| Tier 4 | 8 | 30 | 32 | 34 | 36 | 44 | 48 |
| Tier 5 | 8 | 36 | 38 | 40 | 42 | 52 | 56 |
| Tier 6 | 8 | 42 | 44 | 46 | 48 | 60 | 64 |
| Tier 7 | 8 | 48 | 50 | 52 | 54 | 68 | 72 |

Minions always total 8 (all T1). Mortal humanoids (humans, elves, etc.) cap individual attributes at T7. Non-humanoid creatures — beasts, giants, dragons, etc. — can exceed T7 per attribute, which naturally pushes their totals higher and into higher ranks. A bear is stronger than a human.

<span id="exceptional-attributes"></span>**Exceptional attributes:** Epic creatures should have at least one attribute at T5+. Legendary creatures should have at least one at T6+.

---

## Health

A creature reduced to 0 health dies. The GM may rule that a creature is captured, unconscious, or dying instead.

### Unarmored Health

<span id="health-endurance-score-dtd"></span>**Health = Endurance Score + (Division × Endurance TD) + DTD**

Size adds +2 Endurance dice per size step (i.e., per +2 in the size attack bonus column).

### Armored Health

<span id="health-creature-tier"></span>**Health = (Division × Endurance TD) + Creature Tier**

Size adds +2 Endurance dice per size step (i.e., per +2 in the size attack bonus column).

No DTD, no Endurance Score. The Endurance Score and DTD are traded for armor durability at a 2:1 ratio.

<span id="durability-2"></span>**Durability = 2 × (Endurance Score + average DTD − Creature Tier)**

This is twice the gap between the creature's unarmored and armored Health. The Division and size dice cancel out, so the result is always a whole number.

<span id="why-armor-trades-health-for-durability"></span>**Why armor trades Health for Durability.** Spells go directly to Health, and magan is finite. Weapons go through Durability first, and AP renews every round. An armored creature has low Health and high Durability: a caster can drop it quickly, while martials must grind through its armor. An unarmored creature has high Health: martials deal the damage, and casters spend several magan to make a dent. Armor decides which half of the party a creature is built to test. At higher Divisions the traded share of Health shrinks, so high-tier armored creatures survive a single spell while their Durability still taxes martials.

<span id="armor-selection"></span>**Armor selection.** Choose armor from Equipment that meets two conditions:

1. <span id="its-listed-durability-is-at-or-above-the-creatures-durability"></span>**Its listed Durability is at or above the creature's Durability.** The formula value is how much Durability the armor has left. The armor's Durability in the equipment table is its maximum when undamaged. *Example:* A gambeson has 46 Durability undamaged. The Guard's formula value is 19, so the Guard's gambeson has 19 of 46 Durability remaining. An optional descriptor (Worn, Battered, Corroded, Ragged, Scavenged) is a narrative label for that damage, with no fixed reduction of its own. A worn gambeson is a gambeson: the same item with the same resistance, currently below its maximum Durability. Looted NPC armor keeps its current Durability and can be repaired up to its maximum like any other armor.
2. <span id="its-resistance-is-at-or-below-the-creatures-resistance-budget"></span>**Its resistance is at or below the creature's resistance budget.** Remove pieces to bring it down (a byrnie without sleeves, barding without the crupper). Fill the rest of the budget with natural or magical resistance that fits the creature.

<span id="build-order"></span>**Build order.** Two approaches, depending on the creature:

- <span id="creature-first"></span>**Creature-first:** start from the base creature's natural resistance, then add armor to fill the budget (war dogs, war horses).
- <span id="armor-first"></span>**Armor-first:** choose the armor that fits the creature, then fill the rest of the budget to suit its nature (revenants, Warlord). A plain human carries almost no natural resistance, so the armor covers nearly all of the budget.

<span id="aketon"></span>**Aketon.** Optional for NPCs. Scavenged and ill-fitting armor is often worn without one. PCs require an aketon per the equipment rules.

---

## Attack

<span id="attack-dtd-attribute-td-size-bonus"></span>**Attack = DTD + Attribute TD + Size Bonus**

Wielded weapons use their category's attribute and speed from the Weapon Mastery table (Light weapons and bows PHY; Versatile, Heavy One-Handed, Two-Handed and Heavy Thrown STR; crossbows PER). Natural weapons use the higher of STR or PHY. Ranged attacks still require an Aiming Trial. Size bonus is determined by total squares occupied: ½sq = 0, 1sq = 0, 2sq = +2, 4sq = +4, 6sq = +6, 9+ = +8. Small creatures (½sq) receive no size penalty — their attributes already reflect their physical capability. Apply weapon style step (see [Weapon Styles](designing-creatures.md#weapon-styles)) during building, then write final dice into stat block. Attack dice explode on max roll (d2s never explode).

Phase is determined by the weapon and listed on the attack line. Abilities inherit phase from their triggering weapon.

---

## Defense

<span id="defense-dtd-attribute-td-applicable-resistance"></span>**Defense = DTD + Attribute TD (per weapon type) + applicable Resistance**

With a wielded weapon, defense uses that weapon's attribute. With natural weapons, defense uses the higher of AGI or PHY. A creature whose natural weapons serve different functions (the Constrictor's precision bite and power squeeze) may use the attribute that fits each; flag it in the stat block. Must have a melee weapon equipped (unarmed counts if proficient). Apply weapon style step (see [Weapon Styles](designing-creatures.md#weapon-styles)) during building, then write final dice into stat block. Defense dice explode on max roll (d2s never explode). Must spend 1 AP to defend. If not defended, damage applies to armor durability first, then health.

---

## Rank Rules

### Minions

Minions are d2 creatures. Everything they roll is d2, regardless of Tier, and d2s never explode.

<span id="minion-stats"></span>**Minion Stats**

| Stat | Value |
|:---|:---|
| Attack | 1d2 per head. Phase from weapon or attack type. |
| Health | 1 per head |
| Resistance | Creature Tier against each of the 5 mundane types. No magical resistance. |
| Attributes | Physical d2, Mental d2 |
| Trials | 1d2 + creature Tier Die (all trials) |
| Defense | 1d2 per head + Resistance |
| AP | 2 (shared across the group) |
| Abilities | One Mob trait (no slot), plus the classification package |

<span id="creature-tier-as-attribute-tier"></span>**Creature Tier as attribute tier.** Wherever a rule calls for a minion's attribute tier ([Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") damage, for example), use its Creature Tier.

<span id="groups"></span>**Groups.** A group of minions is one creature: one token, one set of 2 AP, one trial against any effect.

<span id="size_1"></span>**Size.** A group's footprint is its heads' footprints combined. The footprint sets the space the group occupies and its size for effects that check size. The group's size modifiers come from a single head: apply that creature's attack, defense and speed modifiers once to each roll or move. Minions never gain size Health dice; each head has 1 Health.

<span id="minion-group-bands"></span>**Minion Group Bands**

| Group | Heads | Band Bonus | Encounter Role |
|:---|:---:|:---:|:---|
| Cluster | 4-7 | +2 | Minor threat. Burns PC AP through volume. |
| Brood | 8-15 | +4 | Serious threat. Requires a tactical response. |
| Swarm | 16+ | +6 | Major threat. Can overwhelm experienced PCs. |

The band is read at the group's current heads: a Swarm cut to 15 heads is a Brood. Below 4 heads, the band bonus is +0. Group labels also set XP and encounter difficulty. Minions are rarely fielded alone; their traits compound with the other enemies on the field.

<span id="attack-and-defense"></span>**Attack and defense.** Each group attack rolls 1d2 per current head against one target, and the group's two attacks may target different creatures. Defense rolls 1d2 per current head, and Resistance is added once to the roll.

<span id="enveloping"></span>**Enveloping.** A group flanks a target when its heads occupy squares on opposite sides of that target. It gains the flanking bonus (+2) on its attacks against that target, one attack per AP, as normal. A group never occupies its target's square.

<span id="killing-heads"></span>**Killing heads.** Each head has 1 Health. When damage gets through:

- <span id="melee-attacks-and-spells"></span>**Melee attacks and spells** (at any range) remove one head per kept damage die. Dice added by explosions count; dropped dice do not. Heads removed cannot exceed the net damage dealt.
- <span id="ranged-weapon-attacks"></span>**Ranged weapon attacks** (projectile and thrown) remove one head per hit. An effect that hits several targets removes one head per target hit.
- <span id="attrition"></span>**[Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).")** removes one head per instance, whatever its damage.

<span id="firing-into-a-group"></span>**Firing into a group.** Aiming Trials against a minion group have their difficulty reduced by 2. A roll of 1 still misses.

<span id="area-effects"></span>**Area effects.** Any area of effect spell or ability that inflicts a condition (including auras and effects that reach every creature within a range) must include at least half of the group's current footprint to apply the condition to the group. Area of effect spells or abilities that inflict damage still inflict damage normally, regardless of how much of the group the area covers, as determined by the GM.

<span id="single-target-effects"></span>**Single-target effects.** An effect aimed at one creature applies only its damage to a group. Its conditions and forced movement have no effect.

<span id="a-group-of-one"></span>**A group of one.** A single minion is a creature like any other: Aiming Trials against it take no reduction, and effects aimed at it apply in full, including conditions and forced movement. The other group rules apply at any head count; the band bonus starts at 4.

<span id="mob-traits"></span>**Mob traits.** Every minion has one Mob trait, (no slot): what the mob does beyond its damage. A trait usually triggers when the group deals damage (venom, rot, bleeding). A trait whose effect reaches the senses (a sound, a sight, a smell) can trigger on presence instead: a creature that starts its turn within range of the group and can perceive it makes the trial. Mob trait DC = Creature Tier + band bonus.

- A Mob trait cannot advance a chained condition past the minion's Creature Tier. From Tier 3, the full chain is available.
- A simple condition of [T2] or higher unlocks one Tier above its bracket: [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.") at Tier 3, [Blinded](../core/conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority.") at Tier 4.

<span id="stat-block"></span>**Stat block.** Each minion lists its per-head stats, a band table (Cluster 6, Brood 12, Swarm 16 by default) giving Heads, Health, Attack, Defense and Mob DC, and its Mob trait with the DC written out for each band.

### Adepts

The Adept is the first creature that functions as an individual. It has full attributes, differentiated resistance, a signature ability, and real health.

<span id="adept-stats"></span>**Adept Stats**

| Stat | Value |
|:---|:---|
| Attack | DTD + Attribute TD (by weapon category; see [Attack](#attack)). Exploding. Phase from weapon speed (Fast/Moderate/Slow). |
| Health (unarmored) | Endurance Score + (Division × Endurance TD) + DTD + size bonus dice. |
| Health (armored) | (Division × Endurance TD) + Creature Tier + size bonus dice. No DTD, no END Score. Durability = 2 × (END Score + average DTD − Creature Tier). See [Armored Health](#armored-health) for armor selection. |
| Resistance | Distributed across damage types. Armored: from actual armor pieces and base creature resistance as applicable. Unarmored: from budget. |
| Attributes | Full attribute scores (independent of Tier/Rank) |
| Trials | 1d3 + Attribute TD (the attribute the trial calls for) |
| Defense | DTD + Attribute TD (per weapon type) + applicable Resistance |
| AP | 2 |
| Abilities | 1-2. Abilities reference their triggering weapon to inherit phase. |

### Leaders

Same stat formulas as Adepts, except:

<span id="leader-stats"></span>**Leader Stats**

| Stat | Value |
|:---|:---|
| Trials | 1d4 + Attribute TD |
| AP | 2 |
| Abilities | 2-3. Must include a buff ability. |

<span id="leader-buff"></span>**Leader Buff (2 AP, Action):** Apply Tier 1 positive condition ([Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn."), [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), etc.) to allies in range. Lasts 1 round. Can be reapplied each round to stack tiers (Tier 3 max after 3 consecutive rounds). The 2 AP cost means the Leader does nothing else that round. Counter-play: negative conditions cancel positive tier-for-tier, or pressure the Leader to force it to defend instead of buff.

### Champions

The Master's right hand, the hired gun called in for the hard job. Deadly one-on-one, but no match for a whole party. Its Master holds its leash. A Leader can call a Champion in but cannot command it: it chooses its own targets and its own fight, and may walk away or turn on its employer when the job stops suiting it. A Champion with no Master goes its own way; it may want nothing from the party at all and become a problem only when the party steps wrong. Killing a Champion's Master does not tame it; it unleashes it.

Same stat formulas as Adepts, except:

<span id="champion-stats"></span>**Champion Stats**

| Stat | Value |
|:---|:---|
| Trials | 1d6 + Attribute TD |
| AP | 3 (max 2 attacks) |
| Abilities | 3+. Personal lethality, including advanced maneuvers. |
| Attributes | At least 2-3 attributes at T3+ regardless of creature Tier. |

### Masters

Same stat formulas as Adepts, except:

<span id="master-stats"></span>**Master Stats**

| Stat | Value |
|:---|:---|
| Trials | 1d8 + Attribute TD |
| AP | 3 (max 2 attacks) |
| Abilities | 4. Personal combat + buff ability + signature ability. |

<span id="master-signature"></span>**Master signature (2 AP, Action):** Every Master has one ability that ties it to its people, strengthening them, drawing on them or acting through them, and that exceeds one standard limit by one step (the whole encounter at Tier 1 or Tier 3 deteriorating; two tiers at once; every eligible creature instead of one; or one size larger). It is used once per encounter, or limited by something the fight rations on its own. Buffs are the most common form, not the only one:

- <span id="deteriorating"></span>**Deteriorating:** Starts at T3 of a buff condition, degrades by 1 tier per round. Front-loaded burst that fades.
- <span id="persistent"></span>**Persistent:** Applies at T1, lasts until end of encounter. Steady, unwavering buff.

Standard Leader-style buffs (2 AP, 1-round duration, stackable) are also available — the 1/encounter ability is in addition to, not instead of.

### Epic

Same stat formulas as Adepts, except:

<span id="epic-stats"></span>**Epic Stats**

| Stat | Value |
|:---|:---|
| Health | Rolled. |
| Trials | 1d10 + Attribute TD |
| AP | 2 per phase, active in 2 of 3 phases (4 total, max 2 attacks/phase) |
| Abilities | Creature-specific. No prescriptive templates. |
| Attributes | T3-T4+ in combat-relevant attributes. |

### Legendary

Same stat formulas as Adepts, except:

<span id="legendary-stats"></span>**Legendary Stats**

| Stat | Value |
|:---|:---|
| Health | Rolled. |
| Trials | 1d12 + Attribute TD |
| AP | 2 per phase, active in all 3 phases (6 total, max 2 attacks/phase) |
| Abilities | Creature-specific and hand-crafted. |

### Rank Progression Summary

| Rank | AP | Max Attacks | Phases Active | Key Feature |
|:---|:---:|:---:|:---:|:---|
| Minion | 2 (shared) | 2 | 1 | d2 everything, group bands, Mob trait |
| Adept | 2 | 2 | 1 | Individual threat, real stats |
| Leader | 2 | 2 | 1 | Buffs allies (1 round duration, 2 AP) |
| Champion | 3 | 2 | 1 | Personal lethality, advanced maneuvers |
| Master | 3 | 2 | 1 | Power + command, signature ability |
| Epic | 4 (2/phase) | 2/phase | 2 of 3 | Solo viable, creature-specific abilities |
| Legendary | 6 (2/phase) | 2/phase | All 3 | Hand-crafted, degree-of-failure mechanics |

<span id="phase-ap"></span>**Phase AP (Epic and Legendary):** Rather than a single pool of AP per round, Epic and Legendary creatures get 2 AP per combat phase they are active in. This spreads their actions across the round, preventing alpha-strikes while giving them the total AP needed to compete with a full party. The party gets to act between phases, creating back-and-forth interplay.

---

## Size

Size is defined by two independent values on the stat block:

<span id="footprint"></span>**Footprint** — the grid squares the creature occupies (e.g., 1×1, 2×1, 3×2). Shape matters: a 4×1 giant snake and a 2×2 spider have the same total squares but different tactical profiles. The snake fits through a corridor the spider can't.

<span id="reach"></span>**Reach** — how far the creature threatens (5 ft default, increases with height/limb length). Noted per creature.

Total squares determine mechanical bonuses:

<span id="size-by-footprint"></span>**Size by Footprint**

| Size | Squares | Health Bonus Dice | Attack Bonus | Defense Bonus | Speed Modifier | Examples |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Small | ½ | — | — | +1 | -1 | Rats, snakes, redcaps; gnomes and halflings |
| Average | 1 | baseline | — | — | 0 | Humans, dwarves, wolves |
| Large | 2 | +2 | +2 | — | +2 | Horses (2×1), ogres (2×1), bears |
| Massive | 4 | +4 | +4 | — | +4 | Ettins (2×2), dire wolves (2×2) |
| Enormous | 6 | +6 | +6 | — | +6 | Bergrisar (3×2), young dragons |
| Immense | 9+ | +8 | +8 | — | +8 | Ancient dragons, krakens |

Small creatures (½sq) have no penalty to attack or health — their attributes already reflect their physical capability. The -1 speed is offset by +1 defense (small = harder to hit). Size attack bonus for larger creatures is flat (no extra dice, no explosion cascade). Size benefits (more health, more damage, more speed) are offset by tactical costs — larger footprints expose more sides for enemies to engage, stretching AP thin on defense. Larger creatures also have difficulty navigating tight spaces.

<span id="size-names"></span>**Size names.** Each row's name is used wherever a rule refers to size. "One size larger" means one row up the Size by Footprint table.

<span id="pcs"></span>**PCs.** Every PC occupies 1 square. Gnomes and halflings are Small; all other PCs are Average. PCs use their size for size checks (maneuver size limits, effects that name a size); the table's modifiers are for creatures, and PCs take their size effects from their own traits.

---

## Speed

<span id="speed-3-agi-tier-size-modifier-locomotion"></span>**Speed = 3 + AGI Tier + Size Modifier + Locomotion**

Each point of speed = 1 square = 5 feet per AP spent on movement. Consecutive movement actions increase speed by half (rounded down).

<span id="size-modifier"></span>**Size Modifier** comes from the Size table (based on total squares).

<span id="locomotion"></span>**Locomotion:** +4 for the creature's qualifying movement mode. The bonus is tied to the movement type, not the creature — a creature that qualifies for +4 in one mode does not automatically get it in another.

- <span id="quadruped"></span>**Quadruped (+4 land):** Creatures with 4+ legs built for running. Applies to wolves, horses, deer, cats, etc. Does NOT apply to belly-crawlers (crocodiles, lizards, turtles) — their legs are not built for speed.
- <span id="flying"></span>**Flying (+4 fly):** Creatures with wings. Applies to fly speed only. Birds on the ground use base speed (3 + Size) — AGI reflects aerial agility, not ground mobility. Most flyers don't need a land speed entry; if grounded, assume base 3 (15 ft).
- <span id="swimming"></span>**Swimming (+4 swim):** Aquatic creatures in water. Applies to swim speed only. A crocodile gets +4 swimming but not on land.
- <span id="burrowing"></span>**Burrowing:** Half of the creature's land speed.

Creatures with multiple qualifying modes calculate each separately. A dragon with functional running legs AND wings gets +4 to both land and fly speed. A crocodile gets +4 to swim but 0 to land.

When a creature has meaningfully different speeds, list both: `Speed | 11 (55 ft) Swim; 7 (35 ft) land`.

<span id="speed-examples"></span>**Speed Examples**

| Creature Example | Base | AGI | Size | Loco | Speed | Feet |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Goblin (T3 AGI, ½ sq) | 3 | 3 | -1 | 0 | 5 | 25 |
| Human (T2 AGI, 1 sq) | 3 | 2 | 0 | 0 | 5 | 25 |
| Wolf (T3 AGI, 1 sq, 4 legs) | 3 | 3 | 0 | +4 | 10 | 50 |
| Dire Wolf (T3 AGI, 2 sq, 4 legs) | 3 | 3 | +2 | +4 | 12 | 60 |
| Amarok (T2 AGI, 4 sq, 4 legs) | 3 | 2 | +4 | +4 | 13 | 65 |
| Ogre (T2 AGI, 2 sq) | 3 | 2 | +2 | 0 | 7 | 35 |
| Horse (T4 AGI, 2 sq, 4 legs) | 3 | 4 | +2 | +4 | 13 | 65 |
| Eagle, fly (T3 AGI, 1 sq, wings) | 3 | 3 | 0 | +4 | 10 | 50 |
| Eagle, land (grounded) | 3 | — | 0 | 0 | 3 | 15 |
| Crocodile, swim (T2 AGI, 2 sq) | 3 | 2 | +2 | +4 | 11 | 55 |
| Crocodile, land (belly-crawler) | 3 | 2 | +2 | 0 | 7 | 35 |

Outlier creatures (Quicklings, magically fast creatures, etc.) override the formula with a flat speed value.

<span id="senses"></span>**Senses:** Noted per creature on the stat block. Common senses include scotopic sight (within 200 ft, creatures in ambient light are not [Concealed](../core/conditions.md#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") from it; within 20 ft, neither are creatures in absolute darkness, seen in grayscale; while it stands in light, it loses the benefit in absolute darkness), crepuscular sight (within 200 ft, creatures in ambient light are not Concealed from it), scent (Dominance on smell-based PER trials), keen sight (Dominance on sight-based PER trials; raptors), seismic sense (vibration detection through ground/web).
