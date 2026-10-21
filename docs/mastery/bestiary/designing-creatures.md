---
generated_by: tools/sync_mastery.py
---

# Designing Creatures

## Ability Design

### Format and Basics

**Ability format:** `***Name*** *(AP cost, Action Type [Speed], Ability slot X).* Description.`

Speed tags in the ability header are optional. When present, they indicate the weapon's combat phase for GM reference. Abilities that are not tied to any weapon (spells, roars, special actions) omit the speed tag; they are available in any phase the creature is active in.

**Ability Speed Determination:**

Abilities fall into three categories for combat phase timing:

1. *Weapon-tied:* The ability references a specific weapon (Swipe uses Claw, Bash uses Club). It inherits that weapon's speed. Tag the speed in the ability header if helpful for GM reference.
2. *Non-weapon:* The ability is not tied to any attack (Roar, Thornwall, Rally Howl, spellcasting). Available in any phase the creature is active in. No speed tag.
3. *Multi-weapon:* The ability can be performed with different weapons (Charge with Bite or Claw). The speed is determined by the weapon chosen at the time of use. The ability description names the eligible weapons; the Phase Reference block shows which phases each option opens up.

Speed is a floor, not a lock. A Fast ability works in a Fast, Moderate, or Slow phase. A Moderate ability works in Moderate or Slow. A Slow ability only works in Slow.

**Ability DCs:** Division + 1.

**Condition duration:** 1 round (default). Do not restate "lasts 1 round" in ability text — it is the system default. Conditions that persist longer or have non-standard behavior (e.g., [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") from Grab does not deteriorate) note this explicitly.

**Trial attribute:** A trial to resist a condition always uses that condition's attribute (Conditions), including holds and auras.

**Condition language:** Write "advance [Condition] by 1 tier" — never "gain Tier 1 [Condition]." Do not parenthetically name tier levels (no "(Shaken)", "(Grappled)"). Do not restate what the condition's modifiers do — that lives in the conditions document.

### AP Line Conventions

For creatures active in a single phase (Minion through Master), the AP line is a flat number: `AP | 2` or `AP | 3 (max 2 attacks)`.

When a single-phase creature has weapons at different speeds (e.g., Bite at Fast, Claw at Moderate), note both options: `AP | 2 (Fast or Moderate)` or `AP | 3 (max 2 attacks; Fast or Moderate)`. The GM chooses which phase the creature acts in based on which weapon it uses that round.

For Epic creatures, name the active phases: `AP | 2/phase, active in Fast + Moderate (4 total, max 2 attacks/phase)`.

For Legendary creatures: `AP | 2/phase, active in all 3 phases (6 total, max 2 attacks/phase)`.

### Phase Reference Block

Epic and Legendary stat blocks end the abilities section with a Phase Reference block. This is a GM cheat sheet listing what abilities are available in each active phase.

Format:

```
Phase Reference:

- [First Phase]: [abilities available]
- [Later Phase]: all above + [additional abilities]
```

Each phase includes all abilities from earlier phases (speed is a floor). Only note additions.

When all abilities use the same weapon and are available in all active phases, use a one-liner: `Phase Reference: All abilities use Bite (Fast) and are available in all active phases.`

Non-Epic creatures (Adept through Master) do not need Phase Reference blocks. Their single AP pool and the "(Fast or Moderate)" AP line notation provide sufficient clarity.

### Ability Language Conventions

Ability descriptions are mechanical text for GM use during play. Clarity and speed of parsing are the priorities.

**Species names:** Use the generic species name in ability descriptions ("the bear," "the cat," "the wolf"), not the subspecies ("the cave bear," "the mountain lion"). The stat block header already identifies the specific creature.

**Attack references:** Write "The [creature] makes a [weapon] attack with [modifier]" when an ability triggers an attack. This identifies the weapon (for speed inheritance and damage), the modifier (Dominance, Impotence, Inferiority), and reads as a clear instruction.

**Multi-target attacks:** "The [creature] makes a [weapon] attack targeting up to X creatures within reach. Roll one attack with [modifier] and apply to all targets."

**Grab pattern:** "The [creature] makes a [weapon] attack. In lieu of an attack roll, the target must succeed on a [ATTR] trial [DC] or advance [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") by 1 tier." This frames Grab as a weapon action (inheriting that weapon's speed) while replacing the attack roll with a trial.

**Trial abbreviations:** Always abbreviate attribute names in trial references: STR, AGI, PHY, END, INT, WIS, CHA, PER. Never spell them out in ability text.

**No flavor in mechanical text.** Cut adjectives that describe what the action looks like rather than what it does. "Wide claw attack" is "claw attack." "Massive boulder" is "boulder." The GM narrates flavor; the stat block provides mechanics.

**No em-dashes.** Use periods or semicolons for clause separation in ability text.

**Condition notation:** Write "advance [Condition] by 1 tier" or use the specific format for damage-over-time conditions (e.g., "gain [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning) [5]"). Never write "gain Tier 1 [Condition]." Do not parenthetically name tier levels.

### Ability Cost Axis

Every ability has a cost proportional to its effect. The cost is expressed through modifiers applied to the triggering attack roll:

| Cost | When to Apply |
|:---|:---|
| Impotence | Single target + single condition (standard), OR AoE + no condition |
| Inferiority | Single target + two effects (condition + knockback, condition + repositioning) |
| Forfeit positioning bonus | Ability requires specific positioning (flanking/behind) and the creature gives up that advantage to use it |
| No modifier (normal attack) | Ability requires a prior condition as a gate (e.g., target must be [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).")) |

**Exceptions:** 2 AP AoE abilities that apply conditions use a trial with no attack modifier — the 2 AP cost IS the gate.

### Condition Application Templates

Conditions are defined in Conditions. The stat block does not restate condition mechanics — it provides only the application method and relevant values.

**[Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (damage-over-time conditions):**
Format: `...the target must succeed on an END trial [DC] or gain Attrition (Bleeding).`

- Each instance deals damage equal to the source's relevant attribute tier at end of the afflicted creature's turn, then expires.
- Bleeding uses END trial to resist. Burning uses AGI trial to resist.
- See [Conditions](../core/conditions.md), [Attrition](../core/conditions.md#attrition), for damage type labels and applicable resistances.

**Venomous Bite (venom delivery on weapon hit):**
Format: `On a hit with a bite attack, with Impotence, if damage is dealt, the venom inflicts X Primal damage (END Tier). The target must succeed on a [condition's attribute] trial [DC] or advance [Condition] by 1 tier.`

- Damage must be dealt (venom needs to enter the body — armor blocks it)
- Primal damage = END Tier (flat value)
- Trial for a condition ([Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") for necrotic venoms: END; [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") for neurotoxins: PER)
- No custom durations. No secondary condition chains.

**Diseased Bite (disease delivery on weapon hit):**
Format: `On a hit with a bite attack, with Impotence, if health damage is dealt, the target must succeed on an END trial [DC] or advance Infected by 1 tier.`

- Same structure as Venomous Bite but no immediate Primal damage — disease is slower
- Requires health damage (not just durability damage)

### Grab and Finisher Pattern

Some creatures have a two-ability setup: a Grab that applies [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), then a Finisher that requires Restricted as a gate.

**Grab:** 1 AP, Action (not Attack — no attack roll). Target makes a STR trial to resist. [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") does not deteriorate while the creature holds it. Write the escape inline in every hold: "Once per turn, the target can spend 1 AP on a STR trial [DC] to break free; on success, the hold drops by 1 tier. An adjacent ally can spend 1 AP on its own turn to make the same trial for it." (Matches *[Conditions](../core/conditions.md)*, Breaking free and Assisted escape.)

**Finisher (Maul, Feed, Kill, Death Roll):** 1 AP, Attack. Requires [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") target (any tier unless specified). Attack with Dominance (or other bonus). The gate justifies the low AP cost and high damage.

**Exception — Feed (Monstrous Widow):** 1 AP, Action (not Attack). Requires [Helpless](../core/conditions.md#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials.") (T3 [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).")). No attack roll — bypasses armor entirely (parallel to Coup de Grace). Damage = DTD + END as Primal. High gate justifies extreme payoff.

### Hamstring Model

A positioning-dependent ability where the creature sacrifices its positioning advantage to apply a condition.

Format: `On a hit with a [weapon] attack from behind or flanking, forfeiting the flanking bonus, the target must succeed on a STR trial [DC] or advance Restricted by 1 tier.`

The cost is the forfeit — the creature gives up its flanking Dominance to attempt the condition. No Impotence or Inferiority modifier; the positioning sacrifice IS the cost.

### Disarm Model

The creature forfeits all damage to attempt a disabling effect.

Format: `On a hit with a [weapon] attack, in lieu of damage, the target must succeed on a STR or PHY trial [DC]. On failure, the target's weapon falls behind them out of reach.`

"In lieu of damage" means the creature deals zero damage on this attack regardless of the roll. The attack still hits (confirming the creature could have dealt damage), but the damage is traded for the effect. No Inferiority — the damage forfeit IS the cost.

### Dive/Flyby Model

A movement-attack that trades damage bonuses for tactical safety.

Format: `The [creature] swoops through a target's space, making a [weapon] attack during movement. Does not provoke attacks of opportunity.`

2 AP (Movement + Attack). No Dominance, no Superiority. The benefit is pure hit-and-run — the creature cannot be pinned down. For flying creatures whose identity is mobility over power.

### Charge (Creature Usage)

Creatures can use the Charge maneuver (2 AP, Move 15+ ft straight line, first melee attack gains Dominance). Countered by Set Spear vs Charge. Charge costs an ability slot.

Standardized creature language: "The [creature] moves at least 15 feet in a straight line and makes a [weapon(s)] attack with Dominance. Countered by Set Spear vs Charge." When the creature can Charge with multiple weapons, list the options: "a bite or claw attack."

**Trample variant:** Same as Charge (2 AP, Move+Attack) but trades Dominance for a STR trial; be knocked prone on hit. Used by large creatures (horses, bulls) whose mass applies the condition naturally. Countered by Set Spear.

### Roar/Fear (AoE Condition)

2 AP, Action. All creatures within range must succeed on a WIS trial [DC] or advance [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") by 1 tier.

Range scales by rank: Leader 10 ft, Champion 20 ft, Master 30 ft, Epic 40 ft, Legendary 50 ft.

**Degree-of-failure ("fail by 5 or more"):** Reserved for Epic and Legendary rank ONLY. At lower DCs, the minimum roll cannot fail by 5+, making the mechanic meaningless. When used, creatures that fail by 5+ advance by 2 tiers instead of 1.

### Aura Framework

Auras are passive supernatural effects that cost an ability slot. Three rules govern all auras:

**Size:** 10 ft × rank position (Leader = 10, Champion = 20, Master = 30, Epic = 40, Legendary = 50).

**Trigger:** Either first entry on the creature's turn OR end of turn in aura — not both. Choose one per aura.

**Behavior:** Damage auras deal flat damage (no trial). Condition auras require a trial when a creature enters; on failure, advance the condition by 1 tier. A creature that succeeds is immune to that aura for the rest of the encounter. **The hold:** while the creature remains inside, the condition does not deteriorate, including tiers added by other sources. **Breaking the hold:** once per turn, the creature can spend 1 AP on a trial against the aura's DC, using the condition's attribute; on success, the aura no longer holds it and the condition deteriorates normally even while it remains inside. Leaving the aura also ends the hold. A creature that leaves and later re-enters makes a new entry trial.

**Writing auras:** this is a building pattern. Each aura's stat block spells out the full procedure inline so the GM can run it without cross-referencing.

### Creature Maneuvers

A creature's weapon mastery level equals its rank, using the same mapping as spellcasting mastery.

| Rank | Mastery Level |
|:---|:---|
| Minion | Unskilled (1) |
| Adept | Untrained (2) |
| Leader | Basic (3) |
| Champion | Skilled (4) |
| Master | Expert (5) |
| Epic | Master (6) |
| Legendary | Grand Master (7) |

Creatures can use any PC maneuver they have the mastery level to access. If the creature uses a named PC maneuver, it follows that maneuver's rules exactly (trigger, cost, effect). Bonuses that reference mastery tier use the creature's rank-derived mastery tier (e.g., Riposte bonus = Sword Mastery Tier = mastery level number). DCs use Division + 1 (same as ability DCs), standing in for Mastery DC.

If a creature ability resembles a PC maneuver but differs mechanically, it gets a different name. The naming rule is absolute: same name means same rules.

**Barred maneuvers:** Cleave (mostly useless on stat blocks).

**Modified maneuvers:** Empty Fade is reworked for NPCs to preserve PC agency (PER trial to see through the feint). Set Spear follows the PC version: Reprisal when a creature moves into reach; Superiority applies specifically vs Charge.

**Maneuver-sourced abilities cost an ability slot** when written onto a stat block. Using a maneuver ad-hoc (like any creature Charging) does not cost a slot.

**Guards.** A creature that fights with a wielded melee weapon lists its guards in a **Guards** row. It can have any guard its weapon mastery level (its rank) allows; most need only the three Untrained guards. Minions have none. Like a character, it declares one guard at the start of each round.

### Creature Skills and Ambushes

**Creature skills.** Creatures don't track skills. A creature can attempt anything its nature plausibly allows: a bear climbs and a wolf does not, a thief lies and a zombie does not. Its Speed, Senses, and traits settle the edge cases. It rolls its trial dice: its rank die plus the tier die of the attribute the task calls for. When a PC resists it or sees through it, the DC is Division + 1. For skill counters, a creature counts as having mastery equal to its Division, up to Grand Master at Division 7 and above. A PC's counter discipline applies against a creature at that level; a creature never gains Dominance from a counter discipline, since its perception comes from its attributes and its Senses.

| Division | Counts as |
|:---:|:---|
| 1 | Unskilled |
| 2 | Untrained |
| 3 | Basic |
| 4 | Skilled |
| 5 | Expert |
| 6 | Master |
| 7–13 | Grand Master |

**Ambushes.** Any creature can set an ambush given time, cover, and a plan; its DC is Division + 1. For a group, use the Division of the creature leading the ambush. A creature with Ambusher needs none of that: in its element, it is always ready.

### 1/Encounter Abilities

Master rank and above can have ONE ability that exceeds standard duration, usable once per encounter.

**Deteriorating:** Starts at T3 of a buff condition, degrades by 1 tier per round. Creates a burst window — front-loaded power that fades. Example: Alpha Rally Howl (T3 [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), degrades 1/round).

**Persistent:** Applies at T1, lasts until end of encounter. Steady, unwavering. Example: Command Shout (T1 [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls.") for encounter).

These parallel Epic (4 AP budget) and Legendary (6 AP budget) power scaling.

### Passive Abilities

Passive abilities (condition immunities, triggered buffs, auras) cost the same slots as active abilities. Fewer tactical options is the tradeoff.

Examples: Undead [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Infected](../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."), and [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") immunity (1 slot), Grief Fury reactive buff (1 slot, triggers on ally death), Incorporeal (1 slot, Inferiority on attacks that deal mundane damage).

### Magic Damage on Weapons

Passive ability costing an ability slot. The physical damage type is the attack roll. If it gets through armor to durability or health, the target takes flat magic damage equal to an attribute tier (e.g., CHA Tier for Asura). No explosions on the magic portion. The magic damage type is separate from the physical damage type and is not part of the attack roll.

### Smite

Adds an attribute die to the attack roll. Against specific enemy types, the creature also gains Superiority (explosion range extends by 1 on all dice). Smite is not flat-score bonus damage — it is an extra die in the roll.

### Creature Healing

Active ability costing an ability slot. Tied to the creature's thematic attribute (CHA for Asura, END for natural regeneration types). Healing can be self-targeted (regen) or ally-targeted (Mend). Not free — always costs a slot.

---

## Creature Spellcasting

Natural magical creatures do not track magan. Their magic is innate, expressed as ability slots and costed in AP like any other creature ability. The AP economy is the resource gate. A creature with 3 AP and four abilities chooses what to do each round; the spell system's magan costs are irrelevant to the creature's own usage.

### Mastery Level

A creature's mastery level equals its rank.

| Rank | ML |
|:---|:---:|
| Minion | 1 |
| Adept | 2 |
| Leader | 3 |
| Champion | 4 |
| Master | 5 |
| Epic | 6 |
| Legendary | 7 |

### Casting Attribute

Creature casting attributes are determined by the creature's relationship to magic, not by mortal traditions.

**Numen (CHA).** Numen are sources of magic. Their power is self-referential — they tap into their own nature. Casting attribute is Charisma: force of self, metaphysical presence.

**Non-numen creatures (PER).** Non-numen magical creatures are sustained by the cycle but are not its source. They perceive magic in the world around them and shape it. Casting attribute is Perception: attunement to the magical world.

**Mortal NPC casters** use their tradition's attribute: Occult (INT), Priscan (PER), Telluric (WIS), Theurgic (CHA). Priscan and Theurgic are the mortal traditions closest to how creatures naturally access magic — Priscan mirrors non-numen perception, Theurgic mirrors numen presence. Occult and Telluric are uniquely mortal approaches with no creature equivalent.

### Spell Variables

| Variable | Derivation |
|:---|:---|
| ATD (Attribute Tier Die) | Casting attribute's tier die |
| Damage / Healing | DTD + ATD |
| Spell DC | Division + 1 (same as ability DCs) |
| Aura damage | Flat ML |
| Barrier durability | ML × 5 × duration multiplier |
| Ward resistance | ML × 2 |

### Spells as Abilities

Spells occupy ability slots and follow the same budget as non-magical abilities. Each spell costs 1 AP. Trial-based spells are Actions, not Attacks — they do not count against the max attacks per round limit. Power is balanced through the cost axis (Impotence, Inferiority, etc.), not through AP inflation.

### Stat Block Format

Creatures with magic include a Spellcasting line below their classification package:

`Spellcasting: Mastery Level [X] (Rank). ATD [die] ([attribute]). Spell DC [Y].`

### Magical vs Non-Magical Abilities

Spells are magical. Damage is mundane or magical by its type (magical types: Fire, Sea, Sky, Stone, Void, Profane, Sacred, Primal). An enchanted weapon still deals its weapon's mundane damage; anything magic adds to a hit, such as Imbue or an enchantment, is a separate portion of the hit with its own type. This is the test for effects that distinguish the two (e.g., Incorporeal gives Inferiority to mundane attacks; Unyielding Advance ignores non-magical means). A creature's natural attack is mundane unless it deals a magical damage type; an on-hit form rider (e.g., Living Flame, Flaming Blade) makes that portion of the hit magical.

Creature abilities carry no separate magic tag. A shapeshifted caster uses the creature's stat block as written (see *[Magic Mastery](../magic/index.md)*, [Shapeshifting](../magic/exorcism-enchantment-shapeshifting.md#shapeshifting)).

### Mortal NPC Casters

Mortal enemies who learned magic (a bandit mage, a cultist priest) use simplified magan pools listed in their stat block. Their spells are still ability slots, but the pool limits total casting per encounter. Format and formula TBD.

---

## Weapon Styles

Weapon style modifiers are baked into the stat block during creature building. The GM sees final numbers, not style rules.

| Style | Attack | Defense | Special |
|:---|:---|:---|:---|
| Two-Handed | +1 step | −1 step | — |
| Dual Wield | — | −1 step | +1 attack per phase the creature is active in |
| Shield | −1 step | +1 step | Can defend vs ranged |
| Single Weapon | — | — | — |
| Natural Weapon | — | — | — |

**Style steps.** A style step moves every die in the roll one rung on the die chart and is built into the written dice. It mirrors the PC weapon styles (a shield's Defense bonus, the two-handed extra die). It is not Dominance or Impotence: it does not count toward the one-instance limit, does not cancel, and real Dominance or Impotence applies on top of it. When a style no longer applies (a shield breaks or is removed, or an effect ignores it), undo its step.

**Two-Handed and Shield are mirrors.** One trades defense for offense, the other trades offense for defense. **Dual Wield** gets more attacks but worse defense. **Single and Natural** are the neutral baseline — no bonus, no penalty.

When building a creature, apply the style step to the relevant dice in the attack or defense line, then write the final dice into the stat block. The GM never needs to know the style rules — they just roll what's written.

**Dual Wield extra attacks.** A dual-wielding creature makes one off-hand strike per phase it is active in (Adept through Master: 1 per round; Epic: 2; Legendary: 3). Each off-hand strike costs no AP, uses the creature's attack line, and does not count against its max attacks.

**The Shield's −1 step applies to all attacks** while the shield is equipped, including thrown weapons. A creature wielding a shield and throwing a weapon still has the −1 step on the throw.

**Shields (NPCs).** A shield's listed Durability is its maximum. Its starting Durability is Tier × 25% of that maximum (rounded down), full from Tier 4. When a hit gets past defense and resistance, the damage passes through layers in order: shield, armor, then Health. Each layer absorbs damage up to its current Durability and passes the rest to the next. The GM decides whether the shield takes the hit; if not, the damage starts at the armor. A creature without armor still uses its shield, and damage passes from the shield straight to Health. When the shield's Durability reaches 0, it breaks: the NPC loses the Shield style's +1 step on defense and can no longer defend against ranged attacks. A held shield can be dropped freely, and the NPC can then use a different grip or pick up another shield. A strapped shield costs 1 AP to remove; until it is removed, the NPC stays in the shield grip with a broken shield and keeps the Shield style's −1 step on attack. A looted shield repairs to its maximum like armor.

| Tier | Kite (max 24) | Heater (max 18) | Targe (max 12) |
|:---:|:---:|:---:|:---:|
| 1 | 6 | 4 | 3 |
| 2 | 12 | 9 | 6 |
| 3 | 18 | 13 | 9 |
| 4+ | 24 | 18 | 12 |

Stat block line: `**Shield:** Damaged Kite (Durability 12 / 24)` (current / maximum; the descriptor is optional). The `Durability` row stays the armor's value.

**Stance switching:** Removing a strapped shield costs 1 AP. Changing grip on the same weapon (e.g., one-handed to two-handed) is free. Phase for the round is determined by the slower of the two styles involved.

**Exceptions.** Weapon attribute and speed follow the Weapon Mastery table. A creature that breaks the table does so through a named ability that occupies a slot and states the exception (e.g., the Ettin's Giant's Grip).

**Attribute tag.** Every Attack and Defense row except a minion's ends with `(Attribute: X)`, inside the row's style parenthetical when it has one: `(2H: −1 step. Attribute: STR)`. Keep style words (Shield, 2H, Two-Handed, Dual Wield, Single) to the row label and the step tag.

**No weapon-specific properties on monsters.** Weapon mastery properties (Breaker, Parrying, etc.) are tied to PC progression and do not apply to creature stat blocks. Exception possible for Epic/Legendary creatures. Monsters balance on Tier/Rank, not weapon mastery.
