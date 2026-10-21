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

Dominance moves each die one step to the right. Impotence moves each die one step to the left. A die at 4d12 cannot advance further, and a die at 1 cannot drop further.

*Example: A character with Attribute Tier 7 (d12) wielding a Grand Master two-handed weapon (2d10) makes an attack with Dominance. Their tier die becomes 2d6 and their weapon dice become 2d12.*

**Die Pools.** Each entry on the chart is a die pool; 1d8 is a pool of one die, 2d6 is a pool of two. Effects treat each pool as a unit.

- **Replacing.** An effect that replaces a die replaces one whole pool, and only a pool lower on the chart than the replacement. Properties tied to the replaced pool, such as a two-handed weapon's extra die, apply to the new pool.
- **Adding.** An effect that adds a die adds one die of the pool's own type. A two-handed weapon with a 2d6 pool rolls 3d6 and drops the lowest.

### Dice Mechanic Interactions

- **Attack**, **damage** (including spell damage), and **defense** dice explode on a maximum roll, except a d2, which never explodes. **Trial** dice do not explode.
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

### Important Trial Rules

You do not get to decide which actions call for a trial. Events or actions that result in trials are up to the GM. You cannot determine what the difficulty of the trial will be. Difficulty is up to the GM to decide. Most often there are degrees of success and failure, although an *Effortless* task likely always succeeds, and any task that is rolled for, regardless of modifiers, will fail on a natural minimum: every die showing 1. A natural minimum is an automatic failure, regardless of modifiers, and some abilities add further effects when it occurs. You do not get to decide what success looks like for your trial; that is up to the GM.

### Attribute Trials

Attribute trials are tests of raw capability without specialized training. You roll **2d[Attribute Tier Die]** against the target difficulty. An Endurance trial to resist poison, for example, would be 2d[Endurance Tier Die] against the DC of the poison. This is the same mechanic used to resist spells and weapon maneuvers: when something targets your raw attributes, you roll two of the appropriate tier die.

### Mastery Trials

Mastery trials involve specialized knowledge or training. You roll your attribute tier die + your mastery die and compare the total to the target difficulty. To succeed, your roll must meet or exceed the target.

Skill trials use this structure: Physique + Stealth for hiding, Charisma + Stealth for disguise, Intelligence + Thievery for picking a lock. The relevant attribute varies by skill and situation.

Miscast trials also use this structure: your casting attribute tier die + your form mastery die, rolled against a DC based on the magan cost of the spell. See the [Magic](../magic/index.md) chapter for the full miscast rules.

Even with no mastery investment (Unskilled), a mastery trial still uses a 1d2 as the mastery die rather than dropping to a pure attribute trial.

### Trial Difficulty

To succeed, your roll must be equal to or greater than the target difficulty. The difficulty is set by the GM, a spell, a maneuver, or the situation, so that Effortless tasks are a 2, Sophisticated tasks are an 11, and Impossible tasks are a 23. Any roll where every die shows 1 fails, so the lowest DC worth rolling against is 3. A task can be anything from understanding the contents of a book, to crafting a piece of armor, to climbing a wall.

It is important to remember that despite the upper range being 23, for much of the game, players will be rolling against numbers between 2 and 12, as their characters start with small dice and must slowly climb in experience to reach a point where the impossible is possible.

Nuance is always an important factor. The same task is not always of equal difficulty depending on background, experience, or class.

**Effortless (2).** Any routine task, such as walking down the street or eating a meal. There is no need to roll for this task.

**Easy (3).** Tasks that have a chance of failure if untrained or unfamiliar, but routine otherwise. This type of task would be apprentice-level tasks in most skilled professions. Similarly, a master blacksmith will not fail to heat the forge correctly and a tailor will not fail to take correct measurements for a garment. Take training or background into account. A character who has never held a smith's hammer or a pair of shears will likely treat these tasks as somewhere between *Difficult* and *Impossible*.

**Straightforward (4).** A task that is not complicated, but sometimes requires effort to complete. Digging a latrine, hauling supplies, or other forms of physical labor mostly require effort on the part of the worker, and taking shortcuts or being inattentive can result in difficulty or failure to adequately complete the task.

**Tricky (5).** Tasks that require some understanding of the steps involved and regardless of skill, there is always room for failure or mistakes. For particularly skilled individuals, these margins for error are usually accounted for by uncontrollable factors. Leaping across a 10-foot chasm only becomes *Tricky* when there is inclement weather or loose gravel affecting the leap or the landing.

**Difficult (7).** A task which results in failure most of the time for anyone of limited skill and has a measurable chance of failure even for masters of their craft. An apprentice trying to replicate their master's work is far more likely to fail than to succeed. A master might fail due to the volatility of the materials they are working with or because of less than ideal equipment or working conditions.

**Intricate (9).** Tasks that require a multitude of complex steps to complete or require favorable conditions. An alchemist trying to brew a unique potion with incomplete instructions or a warrior mastering a particularly complicated maneuver with their weapon.

**Sophisticated (11).** A task that requires a master to have any reasonable hope of success. Evading a pack of wolves that has your scent or working with a material that you have only read about in books.

**Challenging (13).** Tasks that are crafted to present difficulty or naturally dangerous, such as climbing the sheer face of a mountain or picking a particularly well-crafted lock.

**Ambitious (15).** Tasks that bend or shape the threshold of what is considered normal or possible. Sneaking through a room of armed guards or discovering a new type of healing.

**Heroic (17).** A task that seems as though it should be impossible, and identifies the individual who accomplishes it as unique. Holding a door closed against a rampaging giant or evading the breath of a dragon.

**Unfathomable (19).** A task that defies belief; requires seeing or experiencing it first-hand, and even then, is thought to be a fluke. Successfully tossing a hat in the air with the intent and result of it sailing in the wind to land atop someone's head a hundred feet away.

**Immeasurable (21).** Tasks that seem ridiculous to think about and defy reason when reflected upon. Calming an aggressive, wild predator in the middle of its assault or resisting an immensely deadly poison.

**Impossible (23).** Tasks that result in failure a vast majority of the time, even for masters, and only marginally achievable given the right circumstances. Consider trying to escape a room engulfed in flame while coated in lamp oil without getting burned.

### Setting DCs

A DC comes from the task, using the Trial Difficulty scale above. Trial dice do not explode, though, so every trial has a highest possible result, and a DC above it cannot be met however lucky the roll. This table shows what characters can reach as they grow, so you can tell when a task is a real test for your group and when it is beyond them.

Each row shows a character at the highest mastery their level allows, rolling with an attribute of about the same tier.

| Level | Mastery | Attribute | Dice | Maximum | Even | Hard | Long Shot |
|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|
| 1–2 | Untrained | Tier 3 | d3 + d4 | 7 | 4 | 6 | 7 |
| 3–5 | Basic | Tier 3 | d4 + d4 | 8 | 5 | 6 | 8 |
| 6–9 | Skilled | Tier 4 | d6 + d6 | 12 | 7 | 9 | 11 |
| 10–14 | Expert | Tier 5 | d8 + d8 | 16 | 9 | 11 | 14 |
| 15–20 | Master | Tier 6 | d10 + d10 | 20 | 11 | 14 | 17 |
| 21+ | Grand Master | Tier 7 | d12 + d12 | 24 | 13 | 16 | 20 |
| Any | Unskilled | Tier 3 | d2 + d4 | 6 | 4 | 5 | 6 |

A *Heroic* task (17) is out of reach for anyone below level 15. Untrained characters top out around 6, so tasks at *Difficult* (7) and above belong to those who have trained for them.

### Mastery DC

When you use a spell, weapon maneuver, or skill ability that forces a target to resist, you set a static DC and the target rolls to beat it. This is the inverse of a trial: instead of you rolling against a difficulty, you *are* the difficulty.

**Mastery DC = Your Mastery Level + Your Attribute Tier**

Your mastery level in the relevant discipline (the form you are casting, the weapon type you are wielding, or the skill you are using) is numbered 1 through 7, matching the mastery tiers (Unskilled is 1, Grand Master is 7). Add your relevant attribute tier to determine the DC.

**Hallmark DCs.** Class abilities with their own DC (Song, Chantment, Puca, Agathion, Familiar, and similar) use their hallmark tier + an attribute tier, and so top out at 14 on their own. They are not Mastery DCs: effects that modify Mastery DC ([Clarity](conditions.md#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC."), guards) do not apply to them.

The target resists by making a trial with the appropriate attribute. If the roll meets or exceeds the DC, the target resists. A character rolls **2d[Tier Die]**: a character with a Tier 2 attribute rolls 2d3 (range 2 to 6, average 4), Tier 5 rolls 2d8 (average 9), Tier 7 rolls 2d12 (average 13). Creatures roll their own trial dice, set by their rank and attribute (see the [Monster Manual](../bestiary/creature-rules.md)). The effect is the same: weak targets are nearly defenseless against a high Mastery DC, while powerful ones resist more often than not.

The specific attribute used for resistance depends on the effect. A spell that seizes the target's will might call for a Charisma trial, while a weapon maneuver that knocks a target prone might call for a Strength or Agility trial. The effect specifies which attribute the target rolls.
