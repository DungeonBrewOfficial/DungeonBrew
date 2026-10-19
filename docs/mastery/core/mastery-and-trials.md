---
generated_by: tools/sync_mastery.py
---

# Mastery & Trials

Mastery is a measure of your character's proficiency in three domains: weapons, magic, and skills. These three domains share the same progression, the same levels of mastery, the same costs, and the same rules for advancement. What differs is how each domain uses that proficiency. Weapons translate mastery into damage and maneuvers, magic into spell power and resistance, and skills into the trials you attempt and the abilities you unlock.

This chapter describes how mastery works. For the specifics of what each domain offers, such as weapon types and combat styles, spell forms and commands, or individual skill trees and their abilities, see the relevant chapters.

## Dice Mechanics

Several mechanics modify die rolls throughout the game. These apply across all mastery domains, whether in combat, magic, or skill trials.

**Superiority.** Expand the number your dice explode on by 1. A d4 that normally explodes on 4 now explodes on 3 or 4.

**Inferiority.** Your dice do not explode.

**Dominance.** All dice in the roll advance one step on the Die Progression Chart.

**Impotence.** All dice in the roll drop one step on the Die Progression Chart.

**Bonus.** Add a flat number to the roll total.

**Penalty.** Subtract a flat number from the roll total.

### Die Progression Chart

1 → 1d2 → 1d3 → 1d4 → 1d6 → 1d8 → 1d10 → 1d12 → 2d6 → 2d8 → 2d10 → 2d12 → 4d6 → 4d8 → 4d10 → 4d12

Dominance moves each die one step to the right. Impotence moves each die one step to the left. A die at 4d12 cannot advance further; a die at 0 cannot drop further.

*Example: A character with Attribute Tier 7 (d12) wielding a Grand Master two-handed weapon (2d10) makes an attack with Dominance. Their tier die becomes 2d6 and their weapon dice become 2d12.*

**Die Pools.** Each entry on the chart is a die pool; 1d8 is a pool of one die, 2d6 is a pool of two. Effects treat each pool as a unit.

- **Replacing.** An effect that replaces a die replaces one whole pool, and only a pool lower on the chart than the replacement. Properties tied to the replaced pool, such as a two-handed weapon's extra die, apply to the new pool.
- **Adding.** An effect that adds a die adds one die of the pool's own type. A two-handed weapon with a 2d6 pool rolls 3d6 and drops the lowest.

### Dice Mechanic Interactions

- **Attack**, **damage** (including spell damage), and **defense** dice explode on a maximum roll. **Trial** dice do not explode.
- **Dominance** and **Impotence** cancel each other out.
- **Superiority** and **Inferiority** cancel each other out.
- **Bonus** and **Penalty** modifiers combine. Bonuses and Penalties from different sources add together, but the same ability does not add to itself: if a creature is affected by more than one instance of the same ability, only one applies. An ability that states it stacks is an exception.
- Each creature can only be affected by one instance of **Dominance**, **Impotence**, **Superiority**, and **Inferiority** at a time.

---

## Mastery Levels

There are seven levels of mastery, from Unskilled to Grand Master. Each level has an associated mastery die, which is used whenever the rules call for a roll based on your proficiency, whether that is a skill trial, a miscast trial, or weapon damage.

| Mastery Level | Mastery Die |
|:---|:---:|
| Unskilled | 1d2 |
| Untrained | 1d3 |
| Basic | 1d4 |
| Skilled | 1d6 |
| Expert | 1d8 |
| Master | 1d10 |
| Grand Master | 1d12 |

**Unskilled** means you have no familiarity with the weapon, form, or skill in question. You have invested nothing.

**Untrained** means you have had minimal exposure. You may have practiced with a weapon once or twice, watched a spell being cast, or had a brief lesson. You know enough to attempt something, but not much more.

**Basic** means you have achieved a baseline understanding. You can wield the weapon without injuring yourself or your allies, cast the form reliably at simple parameters, or perform the skill under ordinary conditions.

**Skilled** means you are genuinely proficient. You employ your weapons effectively in battle, handle your forms with confidence, and perform your skills under pressure. To those still new to the long road of mastery, you are impressive, but you are still a novice compared to true masters.

**Expert** means you have become deadly in your domain. Veteran warriors are wary of your blade, your command of magic is formidable, and your skills impress even seasoned practitioners.

**Master** means your proficiency is exceptionally rare. Those who surpass you can be counted on one hand.

**Grand Master** means you have reached the pinnacle. Your name will spread far and wide, and you will attract those wishing to learn from you or to challenge your title. Only a handful of individuals in the world are your equal, though none could claim to be your better without proof.

## Mastery Points

Each level of mastery costs more points than the last — 1 point for Untrained, 2 more for Basic, 3 more for Skilled, and so on:

| Mastery Level | Cost to Advance | Cumulative Cost |
|:---|:---:|:---:|
| Unskilled | — | 0 |
| Untrained | 1 | 1 |
| Basic | 2 | 3 |
| Skilled | 3 | 6 |
| Expert | 4 | 10 |
| Master | 5 | 15 |
| Grand Master | 6 | 21 |

Reaching Grand Master in a single weapon type, magic form, or skill tree requires 21 points of investment.

### Spending Mastery Points

You may invest no more than 1 mastery point into any single weapon type, combat style, magic form, or skill tree per character level. This is true regardless of how many points you receive at that level. If your class grants you 3 weapon mastery points at level 12, you could invest 1 point each into three different weapon types, but you could not put all 3 into swords.

At first level, no mastery may exceed Untrained. If your class gives you 4 starting weapon mastery points, you can bring 4 weapon types or styles to Untrained, but you cannot advance any of them to Basic until level 2.

Because only 1 point can be invested per mastery per level, and Grand Master requires 21 cumulative points, the earliest any character can achieve Grand Mastery in anything is level 21.

### Mastery Point Progression

Each class has its own rate of mastery point acquisition for each domain, detailed in the class's level table. Some classes begin with more starting points than others, and many classes see their acquisition rate increase at higher levels. A Fighter, for example, accumulates weapon mastery points faster and starts with more than a Magus, while the reverse is true for spell mastery. Your class description is the authority for how many points you have at any given level.

There are four mastery progressions, named after the weapon mastery cap they correspond to: Grand Master (GM), Master (M), Expert (E), and Skilled (S). Each progression determines your starting points and how quickly you gain additional points as you level.

| Progression | Starting | Pts/Level | Accelerates |  Total by L30 |
|:---:|:---:|:---:|:---|:---:|
| GM | 4 | 1 | 2 at L6, 3 at L16, 4 at L26 | 78 |
| M | 3 | 1 | 2 at L11, 3 at L21 | 62 |
| E | 2 | 1 | 2 at L16, 3 at L26 | 51 |
| S | 1 | 1 | 2 at L21 | 40 |

Each class is assigned a progression for each mastery domain. A dash indicates the class has no access to that domain.

| Class | Weapon | Spell | Skill |
|:---|:---:|:---:|:---:|
| Avenger | M | E | E |
| Bahador | M | E | E |
| Cleric | E | GM | E |
| Cursed | S | GM | E |
| Druid | E | GM | E |
| Dwarf | GM | — | M |
| Fighter | GM | — | M |
| Fili | E | M | GM |
| Gnome | E | M | E |
| Gray Elf | M | GM | S |
| Halfling | M | — | GM |
| Knight | GM | — | M |
| Magus | S | GM | E |
| Orc | M | — | M |
| Paladin | M | E | E |
| Ranger | GM | — | GM |
| Sylvan Elf | GM | M | S |
| Thief | M | — | GM |

## Weapon Mastery

In addition to the mastery point rules described above, weapon mastery has two additional rules that do not apply to magic or skills.

### Weapon Mastery Caps

Your class determines the highest level of mastery you can achieve with any weapon type or combat style. For classes like the Magus, such primitive and mundane means of power are not a worthwhile pursuit, but for Fighters and Dwarves, who dedicate their lives to the martial skills of war, the rank of Grand Master is within their grasp.

| Maximum Weapon Mastery | Classes |
|:---|:---|
| Grand Master | Fighter, Knight, Ranger, Dwarf, Sylvan Elf |
| Master | Avenger, Bahador, Paladin, Thief, Orc, Gray Elf, Halfling |
| Expert | Cleric, Druid, Fili, Gnome |
| Skilled | Magus, Cursed |

This cap applies only to weapons. Magic forms and skill trees have no mastery ceiling. Any caster can reach Grand Master in a form, and any character can reach Grand Master in a skill they have access to. The only limit is the number of points your class provides. This asymmetry is intentional: the weapon cap preserves the dominance of martial classes in physical combat and helps to offset the inherent power of high-level magic.

### Free Combat Style

Some classes receive free combat style advancement as a benefit of their martial focus. Starting at level 2, each time you invest a point into a weapon type, you may invest one point for free into a combat style of your choice. For classes whose weapon mastery is capped at Master, this free style advancement is also capped at Master. Classes capped at Expert or Skilled do not receive free combat style advancement at all.

## Skill Mastery

Most skills are open to all classes. A small number of restrictions exist, and they are binary: you either have access to a skill or you do not. Knights and Paladins cannot learn Stealth or Thievery. Non-casters cannot learn Spellcraft. If you have access to a skill, you can advance it as high as your points allow, up to and including Grand Master.

## Spell Mastery

All casters have access to the four elemental forms: Fire, Sea, Sky, and Stone. Access to the entropic forms (Primal, Sacred, Profane, and Void) is determined by your class and is listed in your class description. Non-casters have no spell mastery and cannot cast spells.

As with skills, there is no mastery ceiling for magic forms. Any caster can theoretically reach Grand Master in a form. The difference between a Magus and an Avenger is the number of points they have to spend, not where those points can go. This means casters face a genuine choice between depth and breadth: you can pursue Grand Mastery in a small number of forms, or spread your points across many forms at lower levels of proficiency.

---

## Trials and Difficulty

From time to time you may attempt to recall information, perform a physical feat, resist an effect, or cast a spell under uncertain conditions. Whenever you attempt an action in which success is not certain, you must roll a trial.

### Attribute Trials

Attribute trials are tests of raw capability without specialized training. You roll **2d[Attribute Tier Die]** against the target difficulty. An Endurance trial to resist poison, for example, would be 2d[Endurance Tier Die] against the DC of the poison. This is the same mechanic used to resist spells and weapon maneuvers: when something targets your raw attributes, you roll two of the appropriate tier die.

### Mastery Trials

Mastery trials involve specialized knowledge or training. You roll your attribute tier die + your mastery die and compare the total to the target difficulty. To succeed, your roll must meet or exceed the target.

Skill trials use this structure: Physique + Stealth for hiding, Charisma + Stealth for disguise, Intelligence + Thievery for picking a lock. The relevant attribute varies by skill and situation.

Miscast trials also use this structure: your casting attribute tier die + your form mastery die, rolled against a DC based on the magan cost of the spell. See the [Magic](../magic/index.md) chapter for the full miscast rules.

Even with no mastery investment (Unskilled), a mastery trial still uses a 1d2 as the mastery die rather than dropping to a pure attribute trial.

### Trial Difficulty

Both attribute trials and mastery trials roll two dice against a target difficulty. The DC may be set by the GM, by a spell, by a maneuver, or by the situation. The following table gives a sense of the scale.

| Target Difficulty | Description |
|:---:|:---|
| 0 | Effortless |
| 2 | Easy |
| 4 | Straightforward |
| 6 | Tricky |
| 8 | Difficult |
| 9 | Intricate |
| 10 | Sophisticated |
| 12 | Challenging |
| 14 | Ambitious |
| 16 | Heroic |
| 18 | Unfathomable |
| 20 | Immeasurable |
| 21 | Impossible |

### Mastery DC

When you use a spell, weapon maneuver, or skill ability that forces a target to resist, you set a static DC and the target rolls to beat it. This is the inverse of a trial: instead of you rolling against a difficulty, you *are* the difficulty.

**Mastery DC = Your Mastery Level + Your Attribute Tier**

Your mastery level in the relevant discipline (the form you are casting, the weapon type you are wielding, or the skill you are using) is numbered 1 through 7, matching the mastery tiers (Unskilled is 1, Grand Master is 7). Add your relevant attribute tier to determine the DC. The maximum possible Mastery DC is 14.

**Hallmark DCs.** Class abilities with their own DC (Song, Chantment, Puca, Agathion, Familiar, and similar) use their hallmark tier + an attribute tier, and so top out at 14 on their own. They are not Mastery DCs: effects that modify Mastery DC ([Clarity](conditions.md#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC."), guards) do not apply to them.

The target resists by making a trial with the appropriate attribute. If the roll meets or exceeds the DC, the target resists. A character rolls **2d[Tier Die]**: a character with a Tier 2 attribute rolls 2d3 (range 2 to 6, average 4), Tier 5 rolls 2d8 (average 9), Tier 7 rolls 2d12 (average 13). Creatures roll their own trial dice, set by their rank and attribute (see the [Monster Manual](../bestiary/creature-rules.md)). The effect is the same: weak targets are nearly defenseless against a high Mastery DC, while powerful ones resist more often than not.

The specific attribute used for resistance depends on the effect. A spell that seizes the target's will might call for a Charisma trial, while a weapon maneuver that knocks a target prone might call for a Strength or Agility trial. The effect specifies which attribute the target rolls.

### Important Trial Rules

You do not get to decide which actions call for a trial. Events or actions that result in trials are up to the GM. You cannot determine what the difficulty of the trial will be. Difficulty is up to the GM to decide. Most often there are degrees of success and failure, although an *Effortless* task likely always succeeds, and any task that is rolled for, regardless of modifiers, will fail on a natural minimum: every die showing 1. A natural minimum is an automatic failure, regardless of modifiers, and some abilities add further effects when it occurs. You do not get to decide what success looks like for your trial; that is up to the GM.
