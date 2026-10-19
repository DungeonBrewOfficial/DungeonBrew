---
generated_by: tools/sync_mastery.py
---

# Conditions

Conditions are positive or negative status effects that can be applied to creatures. They fall into two categories: **Chained Conditions** (progressive effects with three tiers of escalating severity) and **Simple Conditions** (standalone effects with no tiers).

Unless stated otherwise, conditions deteriorate at a rate of 1 tier per round at the end of the turn of the creature or effect that inflicted them. This deterioration is automatic and does not require a trial.

A round is a round in every timescale. Effects at the end of a creature's turn or the end of a round in combat also happen at the end of each exploration round or travel round. End-of-turn or end-of-round trials precede associated damage or effects.

---

## General Rules

### Applying Conditions

The source ability (spell, creature feature, effect) specifies "advance [Condition] by [N] tier(s)." If the source allows a resistance trial, the target rolls the appropriate attribute trial against the source's DC. On failure, the condition advances by the specified amount. Maximum tier is always Tier 3.

### Trials and Actions

Trials to resist conditions do not require AP.

**Breaking free.** Once per turn, a creature held by a lasting source (a concentrated spell, a grab, an aura) can spend 1 AP to make a trial against the source's DC, using the condition's resistance attribute. On success, the source's hold drops by 1 tier. When the hold reaches 0, the creature is free of that source. A creature that is Paralyzed, Possessed, Dominated, Enthralled, Confused, or Bewildered cannot break free on its own. Conditions without a lasting source cannot be broken; they deteriorate normally. Some holds exceed a creature's ability to break them; its allies can counter the condition, dispel the spell, or take the caster down (a [Catatonic](#catatonic "Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected.") caster loses active concentration; damage breaks passive concentration).

**Assisted escape.** Once per round, an ally adjacent to a creature held in [Restricted](#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") can spend 1 AP on its own turn to make the break-free trial on the held creature's behalf, using the ally's Strength. On success, the hold drops by 1 tier. Each ally makes its own attempt; several allies can help in the same round.

### Stacking

Multiple sources of the same condition stack additively. A Knight's rallying cry that advances [Inspired](#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls.") by 1 tier and a Fili's song that advances Inspired by 1 tier result in Inspired Tier 2 on affected creatures. Different conditions stack freely.

**Lasting sources.** A lasting source holds the tiers it applied for as long as it lasts. Lasting sources are a spell under concentration, a creature holding a grab, an aura the target remains within, and any effect with a duration longer than one round.

- Tiers that no source holds deteriorate 1 tier per round, at the end of the turn of the creature or effect that last advanced the condition, down to the tiers still held.
- When a lasting source's duration ends, all the tiers it holds end with it at once.
- When a lasting source ends early, such as a caster losing concentration, the tiers it held deteriorate normally, unless the source says otherwise.
- Several lasting sources on the same condition each hold their own tiers.
- When a creature sheds tiers through a successful trial, a cure, or a countering condition, tiers that no source holds are removed first.

*Example:* A Cursed's concentration spell advances a goblin's [Impaired](#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") by 1 tier and holds it. A Magus's instantaneous spell and a familiar's Reserve each advance it by 1 more, for Impaired Tier 3. Next round it deteriorates to Tier 2, then to Tier 1, where the Cursed's spell holds it. If the Cursed loses concentration, the Impaired deteriorates normally. If the spell's duration ends, the Impaired ends with it.

### Positive and Negative Counter Mechanic

Positive conditions counter their paired negative conditions and vice versa, reducing each other tier-for-tier. The remainder stays as whichever side had higher tier. Applying a Tier 3 positive against a Tier 1 negative leaves the positive at Tier 2. Applying a Tier 2 negative against a Tier 1 positive leaves the negative at Tier 1.

Some positive conditions are paired against two negative conditions (dual-pairing). If only one of the paired negatives is present, normal tier-for-tier subtraction applies. If both paired negatives are present when the positive is applied, the positive reduces each negative by its tier equally, but the positive is fully consumed with no remainder.

*Example: A creature has [Tainted](#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") T2 and [Infected](#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased.") T1. [Fortified](#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn.") T2 is applied. Tainted drops by 2 (removed), Infected drops by 2 (removed), Fortified is consumed. If only Tainted T2 were present, Fortified T2 vs Tainted T2 would remove both (normal case).*

**Condition Pairings:**

| Positive | Negative | Pairing |
|----------|----------|---------|
| [Invigorated](#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls.") | [Exhausted](#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") | 1:1 |
| [Inspired](#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls.") | [Demoralized](#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") | 1:1 |
| [Clarity](#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC.") | [Disoriented](#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered.") | 1:1 |
| [Hastened](#hastened "Counters Impaired and Restricted (dual-paired). Sharpened reflexes, enhanced reaction speed, physical quickness. Too fast to pin down, too quick to stun. T1 — Quickened: Bonus +1 to physical rolls. Treat Agility tier as 1 higher. T2 — Alert: Bonus +2 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. T3 — Hasted: Bonus +3 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. +1 AP.") | [Impaired](#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."), [Restricted](#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") | 2:1 |
| [Fortified](#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn.") | [Tainted](#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased.") | 2:1 |
| [Warded](#warded "Counters Charmed and Controlled (dual-paired). Mental fortitude, magical resilience. The mind is shielded against influence and the body armored against magical harm. T1 — Buffered: Dominance on attribute trials. +1 resistance to magic damage. T2 — Shielded: Dominance on attribute trials. +2 resistance to magic damage. T3 — Impervious: Dominance on attribute trials. +3 resistance to magic damage.") | [Charmed](#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled."), [Controlled](#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.") | 2:1 |

---

## Chained Conditions

### Negative Conditions

#### Exhausted

*Endurance trial to resist*

Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound.

**Tier 1 — Weary:** Impotence on all rolls.

**Tier 2 — Fatigued:** Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials.

**Tier 3 — Depleted:** Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.

---

#### Impaired

*Perception trial to resist*

Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown.

**Tier 1 — Dazed:** Penalty -1 to all rolls. Must act in Slow phase.

**Tier 2 — Stunned:** Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase.

**Tier 3 — Paralyzed:** Cannot take any actions. Considered [Helpless](#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials.") and [Catatonic](#catatonic "Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected."). The creature is aware of its surroundings but unable to act or respond.

---

#### Restricted

*Strength trial to resist*

Grappling, binding, entanglement, or physical constraint. Tiers compound.

**Tier 1 — Grappled:** Cannot move. Penalty -1 to physical rolls.

**Tier 2 — Pinned:** Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls.

**Tier 3 — Restrained:** Cannot move or take any actions except attempts to resist. Considered [Helpless](#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials."). Can maintain concentration. Can cast spells without somatic components (+1 magan).

---

#### Demoralized

*Wisdom trial to resist*

Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound.

**Tier 1 — Shaken:** Inferiority on attack rolls and spell damage rolls. Cannot willingly advance toward the source of fear.

**Tier 2 — Frightened:** Inferiority on attack rolls, defense rolls, and spell damage rolls. Cannot willingly advance toward the source of fear.

**Tier 3 — Panicked:** Inferiority on attack rolls, defense rolls, and spell damage rolls. Must flee from the source of fear by the safest available route. If cornered, may defend but cannot attack or cast offensive spells.

---

#### Disoriented

*Intelligence trial to resist*

Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment.

**Tier 1 — Befuddled:** AP may only be spent on defense or on breaking free. The creature behaves defensively and cautiously, aware that something is wrong but unable to act on it.

**Tier 2 — Confused:** AP may only be spent on attacking the nearest creature (or moving to reach it). If multiple creatures are equidistant, determine target randomly. The creature lashes out violently and unpredictably with whatever offensive capability it has, including spells.

**Tier 3 — Bewildered:** AP may only be spent on movement. Roll 1d8 for direction. The creature wanders erratically, dissociated and unaware of its surroundings or safety. Considered [Catatonic](#catatonic "Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected.").

---

#### Tainted

*Endurance trial to resist*

Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound.

**Tier 1 — Dosed:** Penalty -1 to all rolls.

**Tier 2 — Blighted:** Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn.

**Tier 3 — Corrupted:** Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.

---

#### Infected

*Endurance trial to resist*

Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome.

**Tier 1 — Afflicted:** Rest is treated as 1 stage lower (Good Night's Rest becomes Wilderness Rest, Wilderness becomes Dungeon, Dungeon provides no benefit).

**Tier 2 — Sickened:** Rest is treated as 2 stages lower. Cannot recover health from meals or rations.

**Tier 3 — Diseased:** Cannot benefit from rest. Cannot recover health or magan except through magical healing.

---

#### Charmed

*Wisdom trial to resist*

Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered.

**Tier 1 — Lured:** The creature regards the source as a trusted ally and cannot willingly harm the source. The creature complies with requests that do not conflict with its deeply held beliefs, personality, or values, and that do not involve harming others, betraying companions, or endangering itself. Requests that cross those lines require a Wisdom trial.

**Tier 2 — Beguiled:** The creature regards the source as a trusted ally and cannot willingly harm the source. The creature's personality and values are dulled. The creature complies with requests even if they involve harming others or betraying companions. Requests that would directly endanger the creature require a Wisdom trial.

**Tier 3 — Enthralled:** The creature regards the source as a trusted ally and cannot willingly harm the source. The creature's identity is subsumed by devotion to the source. The creature complies with all requests except direct self-harm. Self-harm requires a Wisdom trial.

---

#### Controlled

*Charisma trial to resist*

Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies.

**Tier 1 — Compelled:** The controller directs 1 of the target's AP, issuing a simple command (one sentence). Limited to mundane actions: attack, move, defend, interact. The target retains 1 AP under their own control.

**Tier 2 — Possessed:** The controller directs both of the target's AP. May command mundane actions and familiar spells. The target has no agency during their turn.

**Tier 3 — Dominated:** The controller directs both of the target's AP with full access to the target's capabilities: class features, weapon maneuvers, modified spells (target rolls miscast with their own dice). Self-harm commands are permitted; before executing, the target may attempt a Charisma trial adding their Charisma tier as a bonus. On success, the target takes no action for the round.

---

### Positive Conditions

#### Invigorated

*Counters [Exhausted](#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") (1:1)*

Raw energy and vitality. Physical surge that graduates to total enhancement at peak.

**Tier 1 — Energized:** Dominance on physical rolls.

**Tier 2 — Empowered:** Dominance on physical rolls. Bonus +1 to physical rolls.

**Tier 3 — Tireless:** Dominance on all rolls. Bonus +2 to all rolls.

---

#### Inspired

*Counters [Demoralized](#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") (1:1)*

Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential.

**Tier 1 — Rallied:** Dominance on mental rolls.

**Tier 2 — Emboldened:** Dominance on mental rolls. Bonus +1 to attribute and mastery trials.

**Tier 3 — Fearless:** Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls.

---

#### Clarity

*Counters [Disoriented](#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered.") (1:1)*

Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill.

**Tier 1 — Focused:** Bonus +1 to mastery trials.

**Tier 2 — Lucid:** Bonus +1 to mastery trials. +1 Mastery DC.

**Tier 3 — Transcendent:** Bonus +1 to mastery trials. +2 Mastery DC.

---

#### Hastened

*Counters [Impaired](#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") and [Restricted](#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") (dual-paired)*

Sharpened reflexes, enhanced reaction speed, physical quickness. Too fast to pin down, too quick to stun.

**Tier 1 — Quickened:** Bonus +1 to physical rolls. Treat Agility tier as 1 higher.

**Tier 2 — Alert:** Bonus +2 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier.

**Tier 3 — Hasted:** Bonus +3 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. +1 AP.

---

#### Fortified

*Counters [Tainted](#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") and [Infected](#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased.") (dual-paired)*

Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination.

**Tier 1 — Girded:** +1 mundane and primal resistance.

**Tier 2 — Hardened:** +2 mundane and primal resistance. Recover 1 health at end of turn.

**Tier 3 — Robust:** +3 mundane and primal resistance. Recover 1 health at end of turn.

---

#### Warded

*Counters [Charmed](#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") and [Controlled](#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.") (dual-paired)*

Mental fortitude, magical resilience. The mind is shielded against influence and the body armored against magical harm.

**Tier 1 — Buffered:** Dominance on attribute trials. +1 resistance to magic damage.

**Tier 2 — Shielded:** Dominance on attribute trials. +2 resistance to magic damage.

**Tier 3 — Impervious:** Dominance on attribute trials. +3 resistance to magic damage.

---

### Neutral Conditions

#### Concealed

*Perception trial to detect*

Concealed measures how well others know where a creature is. It comes from two kinds of source:

- **Obscuring sources,** such as limited light, fog, and smoke, hide everyone in them alike. Attacking does not end this concealment, and it grants no attack benefits.
- **Hiding sources,** such as Sneaking, Vanish, and invisibility, hide one creature. A hiding creature gains the attack benefits below, and any attack it makes ends its Concealed once the attack resolves, unless its source says otherwise.

**Close quarters.** A creature within 5 feet of you is not Concealed from you, unless it is invisible or in absolute darkness.

**Searching.** You can spend 1 AP on a Perception trial against the source's DC: a hider's Stealth Mastery DC, a spell's DC, or a DC the GM sets for the scene. On a success, the creature's Concealed drops by 1 tier for you.

**Tier 1 — Obscured:** You can make out a shape. An attack against it from beyond 5 feet, with a ranged or reach weapon, requires an Aiming Trial with its DC increased by 2. A hiding creature is treated as flanking its target.

**Tier 2 — Shrouded:** You know the direction, not the place. The creature cannot be directly targeted. A hiding creature's attacks impose Inferiority on the target's defense.

**Tier 3 — Hidden:** You do not know where it is. The creature cannot be directly targeted. A hiding creature's attacks cannot be defended against.

#### Cover

Physical barrier between attacker and target

Cover is positional relative to the attacker. A creature can have cover from one direction and be fully exposed from another. Cover applies to ranged attacks and spell trials. Cover does not affect melee attacks. A creature in Total Cover must spend 1 AP to partially break cover to attack or cast a spell and is treated as being under Majority Cover during the Phase in which they act, resuming Total Cover at the end of their Phase.

**Tier 1 — Partial Cover:** The barrier obscures part of the creature's body (approximately 45 to 90 degrees from the barrier). Aiming Trial DC increases by 2. The creature gains +2 to trials against area of effect and single-target damage spells.

**Tier 2 — Majority Cover:** The creature is mostly behind the barrier (approximately 45 degrees or less from the barrier). Aiming Trial DC increases by 4. The creature gains +4 to trials against area of effect and single-target damage spells.

**Tier 3 — Total Cover:** The barrier is directly between the creature and the attacker. The creature cannot be targeted by ranged attacks or spells requiring line of sight. Area of effect spells that include the creature's space may still affect them, depending on the epicenter of the spell still affect them.

#### Unbound

Movement enhancement

**Tier 1 — Fleet:** +2 movement speed. You can jump as part of movement. You must begin and end movement on a surface with each AP.

**Tier 2 — Suspended:** Three-dimensional movement at half speed. One axis per AP (horizontal or vertical, not both). Water walking included. Requires concentration to maintain and move.

**Tier 3 — Soaring:** Three-dimensional movement at full speed in any direction. Immune to [Prone](#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."). Requires concentration to maintain and move.

---

## Simple Conditions

Simple conditions are standalone effects that do not chain. Unless stated otherwise, simple conditions are removed when the source effect ends or conditions for removal are met. Some are assigned a Tier which reflects their cost for the purposes of casting spells, which include them as conditions.

<span id="addicted"></span>**Addicted** (Optional). You depend on a substance, such as alcohol, opium, or mandrake, and need it to function. Your Dependence on it runs from 1 to 4. Each substance is tracked separately.

- *Becoming [Addicted](#addicted "(Optional). You depend on a substance, such as alcohol, opium, or mandrake, and need it to function. Your Dependence on it runs from 1 to 4. Each substance is tracked separately.").* When you use an Addictive substance frequently, you make its Addictive trial each time you use it. The GM judges what counts as frequent at the current timescale: days in an adventure, weeks or months in downtime. If you fail two trials in a row, you gain Addicted (Dependence 1), or your Dependence rises by 1 (maximum 4).
- *Withdrawal.* While you're without the substance, you have Penalty -1 on all trials. Each 24 hours you remain without it increases the penalty by 1, to a maximum equal to your Dependence. Taking the substance removes the penalty.
- *Recovery.* [Addicted](#addicted "(Optional). You depend on a substance, such as alcohol, opium, or mandrake, and need it to function. Your Dependence on it runs from 1 to 4. Each substance is tracked separately.") ends after a month without the substance. Taking it while abstaining restarts the month.

<span id="attrition"></span>**Attrition [T1]:** Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).

The parenthetical label identifies the damage type and narrative source:

| Label | Damage Type | Resistance |
|:---|:---|:---|
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Bleeding) | Mundane (untyped) | None |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning) | Fire | Fire |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Freezing) | Sea | Sea |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Corroding) | Sea | Sea |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Arcing) | Sky | Sky |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Fracturing) | Stone | Stone |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Withering) | Primal | Primal |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Decaying) | Profane | Profane |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Searing) | Sacred | Sacred |
| [Attrition](#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Unraveling) | Void | Void |

<span id="blinded"></span>**Blinded [T3]:** Cannot see. The creature treats all other creatures as [Concealed](#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority.

<span id="catatonic"></span>**Catatonic:** Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected.

<span id="deafened"></span>**Deafened [T1]:** Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial.

<span id="helpless"></span>**Helpless:** Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also [Catatonic](#catatonic "Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected.") auto-fails Strength trials.

<span id="injured"></span>**Injured:** Each untreated Injury applies a cumulative Penalty -1 to all rolls. Injuries do not deteriorate naturally without treatment.

<span id="prone"></span>**Prone [T2]:** Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.

<span id="unconscious"></span>**Unconscious:** Considered [Helpless](#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials.") and Catatonic. Unaware of surroundings and events.

## Insanity

**Insanity is an optional rule.** The GM chooses a setting:

- **Realistic:** a character gains an insanity on reaching 0 health, or on reaching Tier 3 of a mental condition (Panicked, Enthralled, Dominated, or Bewildered).
- **Brutal:** as Realistic, and also on a natural minimum on a trial against a mental condition ([Demoralized](#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked."), [Charmed](#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled."), [Controlled](#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated."), or [Disoriented](#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered.")), or on suffering a Trauma.
- **Deadly:** as Brutal, and also on taking health damage from a hit whose dice explode.

The Trauma and Insanity settings are chosen separately; a table can run Brutal Traumas with Realistic Insanity, or any other combination.

**Duration.** The first time a character is affected, roll on the Insanity table; the insanity lasts 8 hours. Each later instance, while the character is still affected, does not roll again: it extends the current insanity one step, from 8 hours to 1 day, then 1 week, then permanent.

**Severity.** The table rises in severity: results above 50 are the more debilitating. The Insane curse (Cursed) rolls twice, once on 1–50 and once on 51–100, and both results are permanent.

| d100 | Insanity |
|:---:|:---|
| 1–5 | **Simple Motor Tic.** You develop one or more compulsive sudden, brief, meaningless movements, such as eye blinking, head jerking, or shoulder shrugging. Motor tics can be of an endless variety and may include such movements as hand clapping, neck stretching, mouth movements, head, arm or leg jerks, and facial grimacing. You have Penalty -2 on Charisma trials that last more than 1 minute. |
| 6–8 | **Simple Phonic Tic.** You develop a compulsive sound or noise, with common vocal tics being throat clearing, sniffing, or grunting. You have Penalty -2 on Charisma trials that last more than 1 minute. |
| 9–13 | **Complex Motor Tic.** You develop a compulsive cluster of movements that appear coordinated, such as pulling at clothes, touching people or objects, imitating another person's actions, or making obscene or forbidden gestures. You have Penalty -2 on Charisma trials. |
| 14–16 | **Complex Phonic Tic.** You develop a compulsive complex sound or utterance. Roll 2d3-1 to determine which: (1) repeating words just spoken by someone else; (2) repeating your own words; (3) repeating words after reading them; (4) blurting obscene or taboo words; (5) compulsive shouting. You have Penalty -2 on Charisma trials. |
| 17–20 | **Object Obsession.** You become obsessed with one object in your possession as determined by your GM. If this object is not in your possession, you have Penalty -2 on all rolls until it is returned to you. |
| 21–24 | **Individual Obsession.** You become obsessed with one person you have encountered in the past. If you do not speak to this person at least once per day, you become irrational, irritated, and angry, with Penalty -2 on all rolls until you speak with them again. |
| 25–30 | **Disordered Passions.** You are plagued by uncontrollable episodes of crying, laughing, or other emotional displays. The emotion you display does not match the emotion you feel, such as laughing while angry, and one emotion can turn suddenly into another, such as sobbing in the middle of a fit of laughter. You have Penalty -2 on Charisma trials that rely on emotional appeal. Whenever you make a trial against an effect that alters your emotional state, roll 1d4 for the emotion you feel (1. Anger 2. Fear 3. Joy 4. Despair), then roll again for the emotion you display. |
| 31–36 | **Mild Suspicion.** You believe that you are being watched by someone or something, most likely a creature you have come into contact with before. You avoid interacting with people you do not already know and refuse to sleep in unfamiliar locations without extensive preparation. |
| 37–42 | **[Addicted](#addicted "(Optional). You depend on a substance, such as alcohol, opium, or mandrake, and need it to function. Your Dependence on it runs from 1 to 4. Each substance is tracked separately.").** You gain Addicted (Dependence 1) to a substance of the GM's choice. If you are already Addicted, your Dependence on one of those substances (GM's choice) rises by 1 instead; if it is already 4, roll again on this table. Later instances of this insanity raise your Dependence by 1 in addition to its duration. See Addicted. |
| 43–47 | **Liar.** You cannot tell the truth, no matter how hard you try. You feel compelled to exaggerate or bend the truth even in small ways to make whatever you say seem more interesting to other people. |
| 48–50 | **Egotist.** You are the center of your own reality and you are interested purely in satisfying your own needs. You are never happy with your position, your relationships, or the events surrounding you. You feel you deserve more than what you have and no one else is worthy of what they have. |
| 51–52 | **Vainglory.** You are the smartest, wisest, strongest, fastest, and most beautiful person you know. You ignore any conversation that doesn't involve your favorite subject: you. You live in an imaginary world in which you are the only real inhabitant and cannot understand or cope with other people. Your primary expectation is that others will treat you with the same admiration, love, and attention with which you treat yourself. |
| 53–57 | **Delusional.** You believe you have some special feature as determined by the GM. This feature can be anything from exceptional strength to the ability to breathe under water. While affected by this delusion, you behave in a manner consistent with the feature you have. If you roll this Insanity more than once, you are affected by another delusion. |
| 58–60 | **Irrational.** You do not use recognizable reason when making decisions, relying on your own peculiar vision of reality to determine the best course of action. In battle, you may decide to attack the creature with the smallest feet and on the next round decide to hold your action to belch in another creature's face. These decisions should appear to have no discernible rhyme or reason. |
| 61–65 | **Melancholy.** You believe that the worst will happen. You and your allies will die, and the world will crumble. You expect every plan to fail, and any plan to fix the failed plan to fail as well. You have Penalty -1 on all trials. |
| 66–70 | **Optimist.** You believe everything will work itself out in the end. No matter what happens, you will see your way through to victory and success in all things. You ignore obstacles and assume you will just figure things out. You have Penalty -2 on Startle trials. |
| 71–74 | **Phobia.** You have a crippling fear of something. Roll 1d4 for the type of phobia (1. Environmental 2. Creature 3. Medical 4. Situational); your GM determines the specific fear. While the object of your fear is in sight, you are [Demoralized](#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") at Tier 2 (Frightened) toward it, with no trial, and the condition does not deteriorate while it remains in sight. |
| 75–78 | **Misanthrope.** You have developed a hatred for your own people. As a result, you have no compassion for their well-being and, in some cases, actively attempt to thwart their attempts at success and happiness. |
| 79–80 | **Cannibal.** You have developed a taste for the flesh of your own kind. The specific reasons for this practice are yours alone, but, ultimately, you cannot help yourself. At least once per week you must dine on the flesh of your own people. If you don't, you must roll on this table again and become afflicted by that Insanity until you do. |
| 81–82 | **Anxiety.** You are plagued by a continuous feeling of worry. You feel irritable and restless and have trouble concentrating. Within your phase, you always act first, regardless of which side wins the initiative roll. You have Penalty -2 on trials that require calm or patience, such as crafting or stealth, as the GM determines. |
| 83–86 | **Exchanged Personality.** You have developed another identity to cope with the stress you are feeling. Your species remains the same, but you must randomly roll a new personality and motivation (Mastery Core Classes, Personality and Motivations). Each time you roll this Insanity, roll a new personality. Once per hour, randomly roll to determine which personality is present. |
| 87–88 | **Amnesia.** You have forgotten who you are. You cannot remember your friends, family, or acquaintances. You retain all of your skills and abilities, but everything else is a blur. |
| 89–92 | **Moderate Suspicion.** You are certain that others are out to get you and waver in your trust of those you have known for years. Only close family are free from your scrutiny, unless they have been absent for any period of time. You refuse food and drink if you did not see its preparation and sleep in a hidden location you reveal to no one. |
| 93–94 | **Severe Suspicion.** You trust no one. Even close family could be working for the enemy. You avoid communicating in common languages, even going so far as to create your own or not speak at all. You are convinced you are constantly being watched, and anyone who surprises you or whom you don't trust is usually met with violence. |
| 95–96 | **Battle-Haunted.** You have experienced or witnessed a terrifying event. You have Penalty -2 on Wisdom trials to resist [Demoralized](#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") when reminded of the event in any way and, instead of the normal effects of Demoralized Tier 2 (Frightened) or higher, you become enraged, attacking the nearest creature until you succeed on the trial. |
| 97–98 | **Masochist.** You revel in feeling pain. The sight of your own blood, the feeling of intense pain, or humiliation brings you gratification. If necessary, you will harm yourself, but it is a poor replacement for the real thing. You have +2 resistance to all mundane damage types and Penalty -2 on defense rolls. |
| 99–100 | **Cruelty.** You enjoy the pain of others. You derive pleasure from witnessing the suffering of other creatures. You will target anything from animals to people if needed. You go out of your way to see others harmed and will risk your own safety and well-being to see their pain. You have Bonus +2 on attack rolls against creatures that can feel pain, and Penalty -2 against creatures that cannot. |
