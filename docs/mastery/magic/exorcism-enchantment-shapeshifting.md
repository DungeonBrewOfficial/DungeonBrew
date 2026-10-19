---
generated_by: tools/sync_mastery.py
---

# Exorcism, Enchantment & Shapeshifting

## Exorcise

Exorcise compels a being across a boundary. Invocation (summoning) and expulsion (banishing) are the same authority exercised in opposite directions.

### Connected Form

You must know the connected form for the creature's classification. A creature's connected forms are listed on its stat block; a creature may have more than one. Connected forms name a creature's nature. A creature that is an element (a fire elemental, a fire demon) is connected to it; the elements that compose every physical body create no connection.

| Classification | Connected Form |
|:---|:---|
| Asura | Sacred |
| Daeva | Profane |
| Fae | Primal |
| Morphon | Void |
| Mortal Folk | Void |
| Mortal Beast | Primal |
| Primordial | Matching element (Fire, Sea, Sky, Stone) |

A *gestalt* is a creature that has been transformed into a classification it did not originate in; it follows its gestalt classification. Undead (Daeva Gestalt) are connected to Profane. Lycanthropes (Fae Gestalt) are connected to Primal.

### Invocation (Summoning)

You open a gate. A creature crosses through. The creature is real; it existed somewhere in the world and was compelled to appear.

The summoned creature is independent and acts on its own will. Control requires a separate *[enchant](#enchant)* spell using the same connected form to impose [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") or [Controlled](../core/conditions.md#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated."): a second cast, a second magan cost, and a concentration slot.

**Magan cost:** (1 + Reach) × Tier. Minimum reach is close.

| Tier | Close | Distant | Far |
|:---:|:---:|:---:|:---:|
| 1 | 2 | 3 | 5 |
| 2 | 4 | 6 | 10 |
| 3 | 6 | 9 | 15 |
| 4 | 8 | 12 | 20 |
| 5 | 10 | 15 | 25 |
| 6 | 12 | 18 | 30 |
| 7 | 14 | 21 | 35 |

**Spell speed:** Follows standard rules (1-3 Fast, 4-6 Moderate, 7-11 Slow, 12+ Slow/2 AP).

**Tier.** Your form mastery level determines the tier ceiling (1:1). You choose which tier to summon at, from T1 up to your mastery cap. The chosen tier feeds into the cost formula.

**Rank.** Roll your casting attribute die, divide by 2, round up. The result determines the rank of the creature that appears.

| Attribute Die | Possible Ranks |
|:---:|:---|
| d2 | Minion |
| d3 | Minion, Adept |
| d4 | Minion, Adept |
| d6 | Minion, Adept, Leader |
| d8 | Minion through Champion |
| d10 | Minion through Master |
| d12 | Minion through Epic |

**Minion group size.** When the rank result is Minion, the raw die face before dividing determines group size. A raw result of 1 = 1d8 heads. A raw result of 2 = 2d8 heads.

**Specific creature.** The GM determines the specific creature within the rolled tier and rank, informed by the form (which classification answers) and the narrative context.

### Expulsion (Banishing)

You compel a creature to depart. The creature resists.

**Magan cost:** Same formula as invocation: (1 + Reach) × Tier. The tier is the creature's tier. Reach is the creature's current distance from you.

**Resistance.** The creature makes a Wisdom or Charisma trial (GM determines which is appropriate) against your spell DC. Success means the creature resists. Failure means the creature is compelled to depart.

---

## Enchant

Enchant puts magic into an object. In combat, the most common application is temporary weapon enchantment.

### Temporary Weapon Enchantment

Casting enchant on a weapon adds your *form mastery tier die* as typed damage on a successful hit. The damage type matches the form (enchant fire = fire damage, enchant sacred = sacred damage). The typed damage is a separate damage event from the physical attack. The attack itself remains mundane; only the added typed damage is magical. The typed damage bypasses armor and applies directly to health, subject to the target's resistance to that damage type.

**Magan cost.** Standard spell cost model. A typical combat enchantment at touch range, single target, short duration: (1 + 0 + 0) × 3 = 3 magan for the encounter.

**Concentration required.** The enchantment occupies a concentration slot for its duration.

**Damage scaling.** Form mastery tier die (Unskilled d2, Untrained d3, Basic d4, Skilled d6, Expert d8, Master d10, Grand Master d12).

**Locked type per cast.** The damage type is set when you cast the spell. Changing types requires dropping the spell and recasting: new AP, new magan, new casting time.

**Targeting.** You can enchant your own weapon or an ally's.

---

## Shapeshifting

Shapeshifting is a Transmute spell that transforms the target into a creature. The caster must know the connected form for the target creature's classification (see [Connected Form](#connected-form) table under Exorcise). Each form's Transmute governs its own classification.

Shapeshifting spells are learned by creature subtype. Shapeshift (Beasts) and Shapeshift (Plants) are separate spells. The spell produces a generic member of the creature type, not a specific individual. A caster who knows Shapeshift (Beasts) can become a wolf, but not a particular wolf they encountered last week. Attempting to replicate a specific individual is an improvised casting. Duration modifications follow the standard familiar and modified familiar casting rules. The creature's Division is chosen at casting, up to the Division cap, and is not a recorded parameter; casting a known shapeshift into a creature of a different Division needs no miscast trial.

### Cost

Shapeshifting uses the standard spell cost model with the creature's Division as a multiplier.

**Magan cost:** (1 + Reach + Scale) × Division × Duration.

A self-targeted transformation at short duration: (1 + 0 + 0) × Division × 3. A ranged transformation on an ally at close reach: (1 + 1 + 0) × Division × Duration.

| Division | Instantaneous (×1) | Short (×3) | Long (×5) | Extended (×8) |
|:---|:---:|:---:|:---:|:---:|
| D1 | 1 | 3 | 5 | 8 |
| D2 | 2 | 6 | 10 | 16 |
| D3 | 3 | 9 | 15 | 24 |
| D4 | 4 | 12 | 20 | 32 |
| D5 | 5 | 15 | 25 | 40 |
| D6 | 6 | 18 | 30 | 48 |
| D7 | 7 | 21 | 35 | 56 |
| D8 | 8 | 24 | 40 | 64 |
| D9 | 9 | 27 | 45 | 72 |
| D10 | 10 | 30 | 50 | 80 |
| D11 | 11 | 33 | 55 | 88 |
| D12 | 12 | 36 | 60 | 96 |
| D13 | 13 | 39 | 65 | 104 |

**Division cap:** The creature's Division cannot exceed twice the caster's form mastery level. A caster with mastery level 2 can access creatures up to D4. A Grand Master (ML 7) can access up to D13 (the full range) but at significant magan cost.

**Material components** can reduce the magan cost by up to 8, following standard material component rules.

**Concentration required.** The transformation occupies a concentration slot for its duration.

### Durability

The transformed creature has a durability pool that absorbs damage before it reaches the target's real health. The durability pool replaces the creature's health pool. The target's real health is unchanged underneath the form. The pool uses the same formula as the Preservate durability pool, with Division as the variable.

**Durability pool:** Division × 5 × Duration multiplier.

| Division | Base (×5) | Short (×3) | Long (×5) | Extended (×8) |
|:---|:---:|:---:|:---:|:---:|
| D1 | 5 | 15 | 25 | 40 |
| D2 | 10 | 30 | 50 | 80 |
| D3 | 15 | 45 | 75 | 120 |
| D4 | 20 | 60 | 100 | 160 |
| D5 | 25 | 75 | 125 | 200 |
| D6 | 30 | 90 | 150 | 240 |
| D7 | 35 | 105 | 175 | 280 |
| D8 | 40 | 120 | 200 | 320 |
| D9 | 45 | 135 | 225 | 360 |
| D10 | 50 | 150 | 250 | 400 |
| D11 | 55 | 165 | 275 | 440 |
| D12 | 60 | 180 | 300 | 480 |
| D13 | 65 | 195 | 325 | 520 |

The durability pool is unmodified by the creature's resistances. Damage hits the pool directly. When the pool is depleted, the form breaks and the target reverts. Excess damage overflows to the target's real health, where normal resistances and armor apply.

### The Creature Form

The form gives the target a new body. The target adopts all eight of the creature's attributes (STR, AGI, PHY, END, INT, WIS, CHA, PER), natural weapons, movement modes, size, reach, and speed. The target retains their identity, their knowledge, and their banked magan pool. The magan pool reflects the cost of the spell at the time of the transformation. The target's own spells are inaccessible during the transformation because the creature's body cannot perform the required somatic, verbal, and focal components.

Equipment worn by the target merges into the creature form for the duration. When the transformation ends, the equipment returns.

#### Abilities

The shapeshifted creature can use every ability in the creature's stat block, magical or not, using the creature's DCs and damage values. Abilities cost no magan; the spell's cost already includes them. Limits in the stat block apply to you: an ability usable once per encounter or once per day stays spent if the form ends and you cast it again.

#### Action Points

Action points remain at 2 regardless of the creature's rank.
