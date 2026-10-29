---
generated_by: tools/sync_mastery.py
---

# Designing Creatures

## Ability Design

### Format and Basics

<span id="ability-format"></span>**Ability format:** `***Name*** *(AP cost, Action Type [Speed], Ability slot X).* Description.`

Speed tags in the ability header are optional. When present, they indicate the weapon's combat phase for GM reference. Abilities that are not tied to any weapon (spells, roars, special actions) omit the speed tag; they are available in any phase the creature is active in.

<span id="ability-speed-determination"></span>**Ability Speed Determination:**

Abilities fall into three categories for combat phase timing:

1. *Weapon-tied:* The ability references a specific weapon (Swipe uses Claw, Bash uses Club). It inherits that weapon's speed. Tag the speed in the ability header if helpful for GM reference.
2. *Non-weapon:* The ability is not tied to any attack (Roar, Rally Howl, spellcasting). Available in any phase the creature is active in. No speed tag.
3. *Multi-weapon:* The ability can be performed with different weapons (Charge with Bite or Claw). The speed is determined by the weapon chosen at the time of use. The ability description names the eligible weapons; the Phase Reference block shows which phases each option opens up.

Speed is a floor, not a lock. A Fast ability works in a Fast, Moderate, or Slow phase. A Moderate ability works in Moderate or Slow. A Slow ability only works in Slow.

<span id="ability-dcs"></span>**Ability DCs:** Division + 1.

<span id="condition-duration"></span>**Condition duration:** 1 round (default). Do not restate "lasts 1 round" in ability text — it is the system default. Conditions that persist longer or have non-standard behavior (e.g., [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") from Grab does not deteriorate) note this explicitly.

<span id="trial-attribute"></span>**Trial attribute:** A trial to resist a condition always uses that condition's attribute (Conditions), including holds and auras.

<span id="condition-language"></span>**Condition language:** Write "advance [Condition] by 1 tier" — never "gain Tier 1 [Condition]." Do not parenthetically name tier levels (no "(Shaken)", "(Grappled)"). Do not restate what the condition's modifiers do — that lives in the conditions document.

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

<span id="species-names"></span>**Species names:** Use the generic species name in ability descriptions ("the bear," "the cat," "the wolf"), not the subspecies ("the cave bear," "the mountain lion"). The stat block header already identifies the specific creature.

<span id="attack-references"></span>**Attack references:** Write "The [creature] makes a [weapon] attack with [modifier]" when an ability triggers an attack. This identifies the weapon (for speed inheritance and damage), the modifier (Dominance, Impotence, Inferiority), and reads as a clear instruction.

<span id="multi-target-attacks"></span>**Multi-target attacks:** "The [creature] makes a [weapon] attack targeting up to X creatures within reach. Roll one attack with [modifier] and apply to all targets."

<span id="grab-pattern"></span>**Grab pattern:** "The [creature] makes a [weapon] attack. In lieu of an attack roll, the target must succeed on a [ATTR] trial [DC] or advance [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") by 1 tier." This frames Grab as a weapon action (inheriting that weapon's speed) while replacing the attack roll with a trial.

<span id="trial-abbreviations"></span>**Trial abbreviations:** Always abbreviate attribute names in trial references: STR, AGI, PHY, END, INT, WIS, CHA, PER. Never spell them out in ability text.

<span id="no-flavor-in-mechanical-text"></span>**No flavor in mechanical text.** Cut adjectives that describe what the action looks like rather than what it does. "Wide claw attack" is "claw attack." "Massive boulder" is "boulder." The GM narrates flavor; the stat block provides mechanics.

<span id="no-em-dashes"></span>**No em-dashes.** Use periods or semicolons for clause separation in ability text.

<span id="condition-notation"></span>**Condition notation:** Write "advance [Condition] by 1 tier" or use the specific format for damage-over-time conditions (e.g., "gain [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning) [5]"). Never write "gain Tier 1 [Condition]." Do not parenthetically name tier levels.

### Ability Cost Axis

Every ability has a cost proportional to its effect. The cost is expressed through modifiers applied to the triggering attack roll:

<span id="ability-cost-modifiers"></span>**Ability Cost Modifiers**

| Cost | When to Apply |
|:---|:---|
| Impotence | Single target + single condition (standard), OR AoE + no condition |
| Inferiority | Single target + two effects (condition + knockback, condition + repositioning) |
| Forfeit positioning bonus | Ability requires specific positioning (flanking/behind) and the creature gives up that advantage to use it |
| No modifier (normal attack) | Ability requires a prior condition as a gate (e.g., target must be [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).")) |

<span id="exceptions"></span>**Exceptions:** 2 AP AoE abilities that apply conditions use a trial with no attack modifier — the 2 AP cost IS the gate.

### Condition Application Templates

Conditions are defined in Conditions. The stat block does not restate condition mechanics — it provides only the application method and relevant values.

<span id="attrition"></span>**[Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (damage-over-time conditions):**
Format: `The [creature] makes a [weapon] attack with Impotence. If damage is dealt, the target must succeed on an END trial [DC] or gain Attrition (Bleeding) N ([Attribute] Tier).`

- Each instance deals damage equal to the source's relevant attribute tier at end of the afflicted creature's turn, then expires. Write the amount and the attribute it comes from on the stat block (wounds a creature deals with its own body use END), so the GM never has to work it out.
- Bleeding uses END trial to resist. Burning uses AGI trial to resist.
- See [Conditions](../core/conditions.md), [Attrition](../core/conditions.md#attrition), for damage type labels and applicable resistances.

<span id="venomous-bite"></span>**Venomous Bite (venom delivery on weapon hit):**
Format: `On a hit with a bite attack, with Impotence, if damage is dealt, the venom inflicts X Primal damage (END Tier). The target must succeed on a [condition's attribute] trial [DC] or advance [Condition] by 1 tier.`

- Damage must be dealt (venom needs to enter the body — armor blocks it)
- Primal damage = END Tier (flat value)
- Trial for a condition ([Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") for necrotic venoms: END; [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.") for neurotoxins: PER)
- No custom durations. No secondary condition chains.

<span id="diseased-bite"></span>**Diseased Bite (disease delivery on weapon hit):**
Format: `On a hit with a bite attack, with Impotence, if health damage is dealt, the target must succeed on an END trial [DC] or advance Infected by 1 tier.`

- Same structure as Venomous Bite but no immediate Primal damage — disease is slower
- Requires health damage (not just durability damage)

### Grab and Finisher Pattern

Some creatures have a two-ability setup: a Grab that applies [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), then a Finisher that requires Restricted as a gate.

<span id="grab"></span>**Grab:** 1 AP, Action (not Attack — no attack roll). Target makes a STR trial to resist. [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") does not deteriorate while the creature holds it. Write the escape inline in every hold: "Once per turn, the target can spend 1 AP on a STR trial [DC] to break free; on success, the hold drops by 1 tier. An adjacent ally can spend 1 AP on its own turn to make the same trial for it." (Matches *[Conditions](../core/conditions.md)*, [Breaking free](../core/conditions.md#breaking-free) and Assisted escape.)

<span id="finisher"></span>**Finisher (Maul, Feed, Kill, Death Roll):** 1 AP, Attack. Requires [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") target (any tier unless specified). Attack with Dominance (or other bonus). The gate justifies the low AP cost and high damage.

<span id="exception-feed"></span>**Exception — Feed (Monstrous Widow):** 1 AP, Action (not Attack). Requires [Helpless](../core/conditions.md#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials.") (T3 [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).")). No attack roll — bypasses armor entirely (parallel to Coup de Grace). Damage = DTD + END as Primal. High gate justifies extreme payoff.

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

<span id="overrun-variant"></span>**Overrun variant:** Same as Charge (2 AP, Move+Attack) but trades Dominance for a STR trial; be knocked prone on hit. Used by large creatures (horses, bulls) whose mass applies the condition naturally. Countered by Set Spear.

### Roar/Fear (AoE Condition)

2 AP, Action. All creatures within range must succeed on a WIS trial [DC] or advance [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") by 1 tier.

Range scales by rank: Leader 10 ft, Champion 20 ft, Master 30 ft, Epic 40 ft, Legendary 50 ft.

<span id="degree-of-failure"></span>**Degree-of-failure ("fail by 5 or more"):** Reserved for Epic and Legendary rank ONLY. At lower DCs, the minimum roll cannot fail by 5+, making the mechanic meaningless. When used, creatures that fail by 5+ advance by 2 tiers instead of 1.

### Aura Framework

Auras are passive supernatural effects that cost an ability slot. Three rules govern all auras:

<span id="size"></span>**Size:** 10 ft × rank position (Leader = 10, Champion = 20, Master = 30, Epic = 40, Legendary = 50).

<span id="trigger"></span>**Trigger:** Either first entry on the creature's turn OR end of turn in aura — not both. Choose one per aura.

<span id="behavior"></span>**Behavior:** Damage auras deal flat damage (no trial). Condition auras require a trial when a creature enters; on failure, advance the condition by 1 tier. A creature that succeeds is immune to that aura for the rest of the encounter. **The hold:** while the creature remains inside, the condition does not deteriorate, including tiers added by other sources. **Breaking the hold:** once per turn, the creature can spend 1 AP on a trial against the aura's DC, using the condition's attribute; on success, the aura no longer holds it and the condition deteriorates normally even while it remains inside. Leaving the aura also ends the hold. A creature that leaves and later re-enters makes a new entry trial.

<span id="writing-auras"></span>**Writing auras:** this is a building pattern. Each aura's stat block spells out the full procedure inline so the GM can run it without cross-referencing.

### Creature Maneuvers

If a creature uses a named PC maneuver, it follows that maneuver's rules exactly (trigger, cost, effect), using its mastery level from *[Creature Mastery](creature-rules.md#creature-mastery)*. DCs use Division + 1 (same as ability DCs), standing in for Mastery DC.

If a creature ability resembles a PC maneuver but differs mechanically, it gets a different name. The naming rule is absolute: same name means same rules.

<span id="barred-maneuvers"></span>**Barred maneuvers:** Cleave (mostly useless on stat blocks).

<span id="modified-maneuvers"></span>**Modified maneuvers:** Set Spear follows the PC version: Reprisal when a creature moves into reach; Superiority applies specifically vs Charge.

<span id="maneuver-sourced-abilities-cost-an-ability-slot"></span>**Maneuver-sourced abilities cost an ability slot** when written onto a stat block. Using a maneuver ad-hoc (like any creature Charging) does not cost a slot.

<span id="guards"></span>**Guards.** A creature that fights with a wielded melee weapon lists its guards in a **Guards** row. It can have any guard its role calls for; most need only the three Untrained guards. Minions have none. Like a character, it declares one guard at the start of each round.

### Creature Skills and Ambushes

<span id="creature-skills"></span>**Creature skills.** Creatures don't track skills. A creature can attempt anything its nature plausibly allows: a bear climbs and a wolf does not, a thief lies and a zombie does not. Its Speed, Senses, and traits settle the edge cases. It rolls its trial dice: its rank die plus the tier die of the attribute the task calls for. When a PC resists it or sees through it, the DC is Division + 1. A PC whose discipline counters the creature's skill may gain Dominance (see *[Creature Mastery](creature-rules.md#creature-mastery)*).

<span id="ambushes"></span>**Ambushes.** Any creature can set an ambush given time, cover, and a plan; its DC is Division + 1. For a group, use the Division of the creature leading the ambush. A creature with Ambusher needs none of that: in its element, it is always ready.

### 1/Encounter Abilities

Master rank and above have a signature: ONE ability that ties the creature to its people and exceeds one standard limit by one step (see [Rank Rules](creature-rules.md#rank-rules), Masters). Examples:

<span id="deteriorating"></span>**Deteriorating:** Starts at T3 of a buff condition, degrades by 1 tier per round. Creates a burst window: front-loaded power that fades. Example: the She-Wolf's Chorus (T3 [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), degrades 1/round).

<span id="persistent"></span>**Persistent:** Applies at T1, lasts until end of encounter. Steady, unwavering. Example: the Warlord's Command Shout (T1 [Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls.") for the encounter).

<span id="beyond-buffs"></span>**Beyond buffs:** the Magpie's Every Name at Once (every name it holds instead of one); the Black Goat's The Price (two tiers at once, to devotees and debtors); the Orc War Chief's Grief Fury (feeds on his people's deaths instead of strengthening them, rationed by the fight).

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

Some creatures cast spells: spells from the spell files, which can be countered, dispelled and interrupted like any other spell. Other creatures have innate magical abilities instead, such as auras, curses and the gifts of their nature. Those are abilities, not spells, and cannot be countered or dispelled. A stat block marks each spell as a spell.

### Channelers

A creature that draws its magic from a source it is bound to, such as its place, its patron, or its own kind, is a channeler. A channeler's spells are spells: they can be countered, dispelled and interrupted. A channeler pays no magan for them. Instead, each spell occupies an ability slot and costs the AP its speed requires, and its larger effects are limited by frequency (1/encounter, or a number of uses per day). A channeler casts only the spells on its stat block, at their listed parameters, and cannot change them or cast others. A channeler's spell header reads *Channeler* in place of a magan cost.

### Spellcasting

A creature that casts spells has the **Spellcasting** ability. It occupies one or more ability slots, and the share of the creature's slots it takes sets the creature's **weight**:

<span id="spellcasting-weight"></span>**Spellcasting Weight**

| Weight | Slots on Spellcasting | Martial ability and armor |
|:---|:---|:---|
| Expert | One slot among martial abilities | Hits very hard with weapons, supported by magic. Medium or heavy armor. |
| Master | About half its slots | Hits hard with weapons and with magic. Light or medium armor. |
| Grand Master | All or nearly all of its slots | Moderate martial ability at best. Hits very hard with magic. Light armor or none. |

Weight measures how much of a creature is magic, not how skilled it is. A Grand Master-weight Adept is entirely a caster, and a weak one.

### Casting Attribute

<span id="numen"></span>**Numen** cast with Charisma. **Non-numen creatures** cast with Perception. **Mortal practitioners** follow a tradition and use its attribute and forms: Occult (INT), Priscan (PER), Telluric (WIS), Theurgic (CHA).

### Magan

A caster's magan comes from the armor it gives up. Its Health uses the armored formula (see *Health*). Its full magan pool is 2 × (casting attribute score + average DTD − Creature Tier), and it keeps a share of that pool by weight, wearing armor for the rest:

<span id="magan-and-armor-by-weight"></span>**Magan and Armor by Weight**

| Weight | Magan | Armor |
|:---|:---|:---|
| Expert | ¼ of the pool | ¾ of its armor Durability |
| Master | ½ of the pool | ½ of its armor Durability |
| Grand Master | All of the pool | None |

<span id="non-mortal-practitioners"></span>**Non-mortal practitioners.** A practitioner that is not Mortal Folk and wears no armor uses the unarmored Health formula, and its natural resistance takes the place of armor: it keeps ¾ of its resistance budget at Expert weight, ½ at Master and none at Grand Master. Its magan pool and share are figured as above.

### Spell Numbers

A creature casts each spell on its stat block at the listed cost, speed, reach, scale and duration, with no miscast trial. A GM can also have a creature modify one of its spells, or cast a spell it does not know, as a PC can (*[Magic Mastery](../magic/index.md)*, [Known and Spontaneous Spells](../magic/index.md#known-and-spontaneous-spells)). The creature then makes the miscast trial, rolling its casting attribute tier die + DTD.

- <span id="damage-and-healing"></span>**Damage and healing:** casting attribute tier die + DTD.
- <span id="duels-and-miscast-trials"></span>**Duels and Miscast trials** (for example, from Interrupted Casting): casting attribute tier die + DTD.
- <span id="spell-dc"></span>**Spell DC:** Division + 1.
- <span id="wards-barriers-auras-constructs-and-summons"></span>**Wards, barriers, auras, constructs and summons:** the creature's mastery level is its form mastery level (see *[Creature Mastery](creature-rules.md#creature-mastery)*).

Creature casters follow the rules for Concentration, Interrupted Casting and Duels (*Magic Mastery*) as written.

### Protection

Mortal Folk have resistance only from what they wear and the spells they cast. A caster that expects a fight casts its protective spells before it begins, paying the magan from its pool; a caster taken by surprise has not.

- <span id="adepts"></span>**Adepts** are unprepared if caught off guard, and protected if they knew the fight was coming.
- <span id="leaders"></span>**Leaders** always have allies present and usually have their defenses in place.
- <span id="champions-and-above"></span>**Champions and above** always have armor, a companion or servant, or another source of protection on their stat block.

A Grand Master-weight caster of any rank needs a full defensive ability, such as a ward spell or a servant that takes blows for it. A spell that only punishes attackers is not a defense.

### Stat Block Format

The Spellcasting ability lists the casting attribute and its tier die, the spell dice, the Spell DC and the forms. The creature's Magan appears in its stat table. Each spell follows:

`***Name*** *(Spell: [Command] [Form]. [Cost] magan. [Speed]. [Concentration]).* [Reach], [Duration]. [Effect, with the creature's numbers filled in].`

### Magical vs Non-Magical Abilities

Spells are magical. Damage is mundane or magical by its type (magical types: Fire, Sea, Sky, Stone, Void, Profane, Sacred, Primal). An enchanted weapon still deals its weapon's mundane damage; anything magic adds to a hit, such as Imbue or an enchantment, is a separate portion of the hit with its own type. This is the test for effects that distinguish the two (e.g., Incorporeal gives Inferiority to mundane attacks; Unyielding Advance ignores non-magical means). A creature's natural attack is mundane unless it deals a magical damage type; an on-hit form rider (e.g., Living Flame, Flaming Blade) makes that portion of the hit magical.

Spells are marked "Spell" in their header; other creature abilities carry no magic tag. A shapeshifted caster uses the creature's stat block as written (see *[Magic Mastery](../magic/index.md)*, [Shapeshifting](../magic/exorcism-enchantment-shapeshifting.md#shapeshifting)).

---

## Weapon Styles

Weapon style modifiers are baked into the stat block during creature building. The GM sees final numbers, not style rules.

<span id="weapon-style-modifiers"></span>**Weapon Style Modifiers**

| Style | Attack | Defense | Special |
|:---|:---|:---|:---|
| Two-Handed | +1 step | −1 step | — |
| Dual Wield | — | −1 step | +1 attack per phase the creature is active in |
| Shield | −1 step | +1 step | Can defend vs ranged |
| Single Weapon | — | — | — |
| Natural Weapon | — | — | — |

<span id="style-steps"></span>**Style steps.** A style step moves every die in the roll one rung on the die chart and is built into the written dice. It mirrors the PC weapon styles (a shield's Defense bonus, the two-handed extra die). It is not Dominance or Impotence: it does not count toward the one-instance limit, does not cancel, and real Dominance or Impotence applies on top of it. When a style no longer applies (a shield breaks or is removed, or an effect ignores it), undo its step.

<span id="two-handed-and-shield-are-mirrors"></span>**Two-Handed and Shield are mirrors.** One trades defense for offense, the other trades offense for defense. **Dual Wield** gets more attacks but worse defense. **Single and Natural** are the neutral baseline — no bonus, no penalty.

When building a creature, apply the style step to the relevant dice in the attack or defense line, then write the final dice into the stat block. The GM never needs to know the style rules — they just roll what's written.

<span id="dual-wield-extra-attacks"></span>**Dual Wield extra attacks.** A dual-wielding creature makes one off-hand strike per phase it is active in (Adept through Master: 1 per round; Epic: 2; Legendary: 3). Each off-hand strike costs no AP, uses the creature's attack line, and does not count against its max attacks.

<span id="the-shields-1-step-applies-to-all-attacks"></span>**The Shield's −1 step applies to all attacks** while the shield is equipped, including thrown weapons. A creature wielding a shield and throwing a weapon still has the −1 step on the throw.

<span id="shields"></span>**Shields (NPCs).** A shield's listed Durability is its maximum. Its starting Durability is Tier × 25% of that maximum (rounded down), full from Tier 4. When a hit gets past defense and resistance, the damage passes through layers in order: shield, armor, then Health. Each layer absorbs damage up to its current Durability and passes the rest to the next. The GM decides whether the shield takes the hit; if not, the damage starts at the armor. A creature without armor still uses its shield, and damage passes from the shield straight to Health. When the shield's Durability reaches 0, it breaks: the NPC loses the Shield style's +1 step on defense and can no longer defend against ranged attacks. A held shield can be dropped freely, and the NPC can then use a different grip or pick up another shield. A strapped shield costs 1 AP to remove; until it is removed, the NPC stays in the shield grip with a broken shield and keeps the Shield style's −1 step on attack. A looted shield repairs to its maximum like armor.

<span id="starting-shield-durability-by-tier"></span>**Starting Shield Durability by Tier**

| Tier | Kite (max 24) | Heater (max 18) | Targe (max 12) |
|:---:|:---:|:---:|:---:|
| 1 | 6 | 4 | 3 |
| 2 | 12 | 9 | 6 |
| 3 | 18 | 13 | 9 |
| 4+ | 24 | 18 | 12 |

Stat block line: `**Shield:** Damaged Kite (Durability 12 / 24)` (current / maximum; the descriptor is optional). The `Durability` row stays the armor's value.

<span id="stance-switching"></span>**Stance switching:** Removing a strapped shield costs 1 AP. Changing grip on the same weapon (e.g., one-handed to two-handed) is free. Phase for the round is determined by the slower of the two styles involved.

<span id="exceptions_1"></span>**Exceptions.** Weapon attribute and speed follow the Weapon Mastery table. A creature that breaks the table does so through a named ability that occupies a slot and states the exception (e.g., the Ettin's Giant's Grip).

<span id="attribute-tag"></span>**Attribute tag.** Every Attack and Defense row except a minion's ends with `(Attribute: X)`, inside the row's style parenthetical when it has one: `(2H: −1 step. Attribute: STR)`. Keep style words (Shield, 2H, Two-Handed, Dual Wield, Single) to the row label and the step tag.

<span id="no-weapon-specific-properties-on-monsters"></span>**No weapon-specific properties on monsters.** Weapon mastery properties (Breaker, Parrying, etc.) are tied to PC progression and do not apply to creature stat blocks. Exception possible for Epic/Legendary creatures. Monsters balance on Tier/Rank, not weapon mastery.
