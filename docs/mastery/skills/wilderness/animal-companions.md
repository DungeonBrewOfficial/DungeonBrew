---
generated_by: tools/sync_mastery.py
---

# Animal Companions

## Core Formulae

| Formula | Value |
|:---|:---|
| **Skill Mastery Die** | 1d2 (Unskilled) → 1d3 (Untrained) → 1d4 (Basic) → 1d6 (Skilled) → 1d8 (Expert) → 1d10 (Master) → 1d12 (GM) |
| **Health** | Two of each skill die up to the handler's mastery (2d2 + 2d3 + …) |
| **Attack** | Skill Mastery Die + higher of STR or PHY die |
| **Defense** | Skill Mastery Die + AGI die + applicable resistance |
| **Trials** | Skill Mastery Die + Attribute Die |
| **Ability DC** | Higher of STR or PHY Tier + Skill Mastery Tier |
| **Speed** | 3 + AGI Tier + Size Modifier (+2 if 2sq) + 4 (quadruped) |
| **AP** | Always 2 |

<span id="health-die-is-tied-to-the-handlers-mastery-not-the-animals-training-tiers"></span>**Health die is tied to the handler's mastery, not the animal's training tiers.** A bear recruited at Master immediately benefits from the full compounding health formula (2d2+2d3+2d4+2d6+2d8+2d10) because the handler's skill in caring for animals determines the creature's condition. Replacement animals also benefit immediately.

### What Transfers from Species Stat Block

1. Attribute array (tiers and scores)
2. Native abilities (Charge, Gore, Trample, etc.)
3. Damage Resistances
4. Senses (scotopic vision, scent, etc.)
5. Size/Footprint
6. Speed (recalculated if AGI changes)
7. Reach
8. Natural weapon types (bite = piercing, claws = slashing, etc.)
9. Classification and creature type (Mortal Beast)
10. Movement types (flying, swimming, burrowing, climbing)

### What Is Replaced by Mastery

1. Health pool (formula above)
2. Durability pool (based on equipped barding)
3. AP locked at 2
4. DCs for ability-based trials (higher of STR or PHY Tier + Skill Mastery Tier)
5. Attack rolls (Skill Mastery Die + STR or PHY)
6. Defense rolls (Skill Mastery Die + AGI die + resistance)
7. Trial dice (Skill Mastery Die + Attribute Die)

---

## Recruitment

At each Wilderness mastery tier, the handler can recruit animals up to the corresponding native Division:

| Skill Tier | Mastery | Max Native Division |
|:---:|:---|:---:|
| 2 | Untrained | D2 (Dog, Giant Rat) |
| 3 | Basic | D3 (Wolf, Boar) |
| 4 | Skilled | D4 (Black Bear) |
| 5 | Expert | D5 (War Boar, Widow, Constrictor) |
| 6 | Master | D6 (Brown Bear) |
| 7 | Grand Master | — (D6 is the maximum; Grand Master advances D6 or lower) |

Domestic animals (dogs, horses) are purchasable by anyone. Wild animals require Basic mastery or better.

<span id="pre-trained-dogs"></span>**Pre-trained dogs** are available for purchase at Guard, Hunting, and War (D4). These serve as ready-to-use companions for non-Wilderness players, shortcuts for Wilderness players, and GM encounter tools.

<span id="pre-trained-mounts"></span>**Pre-trained mounts** are available for purchase as Riding, Light War, Medium War, and Heavy War (D3, D4, D5, and D6). These serve as ready-to-use companions for non-Wilderness players, shortcuts for Wilderness players, and GM encounter tools.

---

## Training and Advancement

### First Advancement: Training Archetype

When an animal is first recruited, the handler chooses a training archetype: **War**, **Guard**, **Hunting**, or **Mount**. This determines the animal's tactical role, track abilities, and barding access.

### Advancement Per Tier

At Untrained, the companion gains its archetype, barding access, and archetype commands but no stat advancement. Starting at Basic, the companion gains at each tier:

- <span id="4-attribute-tiers"></span>**+4 attribute tiers**, distributed by the handler (no attribute may exceed T7)
- <span id="resistance"></span>**Resistance** (+8 per tier, distributable across damage types, no single type exceeds 20). A species' native resistance is fixed; only trained resistance is distributed. A native value above 20 is kept but cannot be raised.

| Tier | Resistance | Barding |
|:---:|:---:|:---|
| Untrained | — | Light Proficiency |
| Basic | +8 | — |
| Skilled | +8 | Medium |
| Expert | +8 | Medium / Heavy |
| Master | +8 | Medium / Heavy |
| GM | +8 | Medium / Heavy |

War, Guard, and Mount companions may exchange a tier's +8 resistance for the next barding proficiency (Medium first, then Heavy). Hunting companions are restricted to Light barding. See **Barding** under Universal abilities for details.

The handler's meaningful choices are species, archetype, attribute distribution, resistance distribution, barding proficiency (War, Guard, and Mount), and secondary ability picks (one per tier from the general pool).

### Training Depth by Native Division

Training depth is inversely proportional to native Division. Higher Division animals bring stronger native stat blocks but receive fewer advancements.

| Native Division | Training Depth | Advancements |
|:---:|:---:|:---:|
| D2 (Dog, Giant Rat) | Full (Untrained → GM) | 6 |
| D3 (Wolf, Boar) | Deep (Untrained → Master) | 5 |
| D4 (Black Bear) | Moderate (Untrained → Expert) | 4 |
| D5 (War Boar, Widow) | Shallow (Untrained → Skilled) | 3 |
| D6 (Brown Bear) | Minimal (Untrained → Basic) | 2 |

### Example: D2 Dog vs D6 Bear

<span id="d2-kennel-dog"></span>**D2 Kennel Dog (full training, heavy barding):**

- Trained attributes: ~12 + 20 (5 × 4) = 32
- Trained resistance: 10 native + 24 distributable (3 × +8, 2 tiers spent on barding proficiency), plus heavy barding resistance
- Full War track (6 primary abilities + 5 secondary choices across 6 tiers)
- Access to Light, Medium, or Heavy barding

<span id="d6-brown-bear"></span>**D6 Brown Bear (minimal training, light barding):**

- Trained attributes: ~28 + 4 (1 × 4) = 32
- Trained resistance: ~60 native + 8 distributable (1 × +8), plus light barding resistance
- War track (2 primary abilities + 1 secondary choice across 2 tiers only)
- Light barding only
- Native abilities (Maul, etc.) compensate for shallow training

The bear has higher total resistance. The dog has deeper training, more tactical versatility, and access to heavier barding. Barding resistance is mundane only — higher-division creatures' magical resistances are unaffected by barding. Both sit below hallmark companions in total resistance and tactical capability.

---

## Training Tracks

### Guard (Defensive)

| Tier | Primary | Secondary |
|:---|:---|:---|
| Untrained | Guard, Attack, Recall | Barding |
| Basic | Intercept | Choice |
| Skilled | Scent Alert, Retrieve  | Choice |
| Expert | Protector | Choice |
| Master | Sentry | Choice |
| GM | Counterattack | Choice |

### Hunting (Sneaky)

| Tier | Primary | Secondary |
|:---|:---|:---|
| Untrained | Track, Attack, Recall | Barding |
| Basic | Lunge | Choice |
| Skilled | Scent Search, Retrieve  | Choice |
| Expert | Pursuit | Choice |
| Master | Harry | Choice |
| GM | Coordinated Takedown | Choice|

<span id="hunting-birds"></span>**Hunting birds** replace *Track* with *Sight Track* and *Scent Search* with *Aerial Search*. All other Hunting abilities apply as written.

### Mount (Mobility)

| Tier | Primary | Secondary |
|:---|:---|:---|
| Untrained | Recall, Calm | Barding |
| Basic | Attack, Wheel | Choice |
| Skilled | Caracole | Choice |
| Expert | Overrun | Choice |
| Master | Steady | Choice |
| GM | War Dance | Choice |

### War (Aggressive)

| Tier | Primary | Secondary |
|:---|:---|:---|
| Untrained | Attack, Recall | Barding |
| Basic | Kill | Choice |
| Skilled | Intimidate, Retrieve  | Choice |
| Expert | Battle Partner | Choice |
| Master | Aggressive | Choice |
| GM | Disarm | Choice |

### Universal

#### Barding

All companions receive Light barding proficiency at Untrained. War, Guard, and Mount companions may exchange a training tier's +8 resistance for the next barding weight class: Medium proficiency is available from Skilled onward, and Heavy proficiency (which requires Medium) is available from Expert onward. A companion can only acquire one proficiency per tier. Hunting companions are restricted to Light barding.

Proficiency grants access to all barding within that weight class. Medium proficiency allows Chain or Scale barding; Heavy proficiency allows Plate and Mail or Full Plate barding. See the [Equipment](../../equipment/gear-and-services.md) Reference for barding stats, costs, and individual piece details.

Companion barding does not include an aketon and does not grant attribute bonuses to resistance. The companion's distributable resistance pool serves this role instead.

Barding requires a body that can wear it. Birds cannot wear barding; a bird companion's barding proficiency has no effect.

#### Commands

*One free command each round in combat - Automatically granted as part of progression*

<span id="attack"></span>**Attack:** (Command) Engage designated target with natural weapon. Continue attacking until target is dead or given different command.

<span id="retrieve"></span>**Retrieve:** (Command) Fetch a designated object and return it to handler. This includes dropped or disarmed weapons, downed prey, or specific items within line of sight. The companion can retrieve items mid-combat as a 2 AP action. Birds can retrieve only what they can carry in flight: small objects and light game.

<span id="recall"></span>**Recall:** (Command) The companion returns to the handler's position. The companion must be able to hear or see the handler.

#### Passive Choice Option

*Always active - Choose one per tier from Basic to Grand Master*

<span id="alert"></span>**Alert:** (Passive) Dominance on Startle trials.

<span id="avoid-death"></span>**Avoid Death:** (Passive) When an attack or spell would reduce the companion to 0 health, roll Endurance tier die and restore that amount of health. Once per rest.

<span id="brave"></span>**Brave:** (Passive) Dominance on trials to resist [Demoralized](../../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") conditions.

<span id="evasive"></span>**Evasive:** (Passive) Dominance on Agility trials to avoid traps and spells.

<span id="healthy"></span>**Healthy:** (Passive) Dominance on trials to resist [Tainted](../../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") conditions.

<span id="loyal"></span>**Loyal:** (Passive) Dominance on trials to resist [Charmed](../../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") condition.

<span id="stalwart"></span>**Stalwart:** (Passive) The companion gains an additional 2 health at each Mastery tier from this tier forward and retroactively through Basic mastery (Max 10 health at GM).

<span id="swift"></span>**Swift:** (Passive) The companion's base movement speed increases by 10 feet per round.

<span id="tumble"></span>**Tumble:** (Passive) When the companion drops, reduce the DC of its Falling trial by its Physique tier. When it falls, it has Dominance on its Falling trial. On landing, it can reposition to an adjacent space.

<span id="unfettered"></span>**Unfettered:** (Passive) Dominance on trials to resist [Restricted](../../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") conditions.

<span id="vault"></span>**Vault:** (Passive) The companion can leap over obstacles as part of movement without slowing. Jump distance up to movement speed.

<span id="vigorous"></span>**Vigorous:** (Passive) After a rest, the companion regains additional health equal to Endurance tier. Always reduce [Exhausted](../../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier when resting, regardless of rest quality or location.

#### Stance Option

*Must be stated at the start of the combat round - May be chosen in place of a Passive*

<span id="brace"></span>**Brace:** (Stance) The companion fights defensively, gaining Dominance on defense, but Impotence on attacks. Persists until given different command.

### Guard

#### Commands

*One free command each round in combat*

<span id="guard_1"></span>**Guard:** (Command) Hold designated position. Alert handler to creatures approaching within Perception range. Attack any non-friendly creature entering guarded area, OR focus on a designated creature and attack when a specified trigger condition is met

<span id="scent-alert"></span>**Scent Alert:** (Command) Handler commands companion to watch for intruders (requires Guard command active). While guarding, companion rolls Perception trials with Dominance against DCs set by the GM.

#### Reactions

*Must be declared before related action is rolled*

<span id="counterattack"></span>**Counterattack:** (1 AP | Reaction) When the handler is hit by a melee attack while the companion is within 5 feet, the companion can spend 1 AP as a reaction to make an attack against the creature that hit its handler.

<span id="intercept"></span>**Intercept:** (1 AP | Reaction) The companion swaps positions with a willing ally within 5 feet to become the target of an incoming attack.

<span id="protector"></span>**Protector:** (1 AP | Reaction) When the companion is within 5 feet of its handler or the attacker, it can spend 1 AP to add the handler's Skill Mastery Die to the handler's defense roll against melee attacks.

#### Stances

*Must be stated at the start of the combat round*

<span id="sentry"></span>**Sentry:** (Stance) The companion holds position and makes a bite attack against any enemy that enters within 5 feet. The companion cannot move, use other commands, or defend while in Sentry. Persists until given a different command.

### Hunting

#### Actions

*Must be declared before attack is rolled*

<span id="lunge"></span>**Lunge:** (1 AP | Attack) The companion extends its effective reach by 5 feet to strike a target, but has impotence on the attack.

#### Commands

*One free command each round in combat*

<span id="scent-search"></span>**Scent Search:** (Command) Handler commands companion to search an area (1 exploration round, 10 minutes). Companion rolls Perception trial vs DC set by GM. Detects scent-based threats only — creatures, organic poisons, recently walked paths. Cannot detect mechanical traps, magical traps, or anything with no scent.

<span id="track"></span>**Track:** (Command) Follow a scent trail. Companion rolls Perception trial vs DC based on trail age, weather, and terrain as determined by GM.

<span id="sight-track"></span>**Sight Track:** (Command; hunting birds, replaces Track) Follow quarry or a visible trail from the air. The bird rolls a Perception trial vs a DC based on the trail's age, weather, terrain, and cover, as determined by the GM. Dense forest canopy raises the DC; indoors or underground, the bird cannot track.

<span id="aerial-search"></span>**Aerial Search:** (Command; hunting birds, replaces Scent Search) The handler sends the bird to quarter an area from above (1 exploration round, 10 minutes). The bird rolls a Perception trial vs a DC set by the GM. Detects creatures, movement, and disturbances visible from the air. Cannot detect anything hidden under dense cover, indoors, underground, or leaving no visible sign.

#### Passives

*Always active*

<span id="coordinated-takedown"></span>**Coordinated Takedown:** (Passive) While flanking, the companion gains Dominance on attack rolls.

<span id="pursuit"></span>**Pursuit:** (Passive) When the companion hits a creature that moved during this round, the target rolls a Strength trial vs Ability DC or gains [Restricted](../../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") Tier 1.

#### Stances

*Must be stated at the start of the combat round*

<span id="harry"></span>**Harry:** (Stance) The companion moves freely without provoking Reprisal Attacks. As part of each movement, it can make one attack with Inferiority. The companion cannot use other commands while harrying. Persists until given a different command.

### War

#### Actions

*Must be declared before attack is rolled*

<span id="disarm"></span>**Disarm:** (1 AP | Attack) The companion forgoes damage in favor of disarming the target of its weapon. The target must succeed on a Strength or Physique trial against the companion's Ability DC.

<span id="kill"></span>**Kill:** (1 AP | Attack) The companion attacks a [Helpless](../../core/conditions.md#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials.") creature. The attack deals full damage and ignores all armor resistance.

#### Commands

*One free command each round in combat*

<span id="intimidate"></span>**Intimidate:** (Command) Handler gains Dominance on Presence trials for intimidation while companion is visible and threatening.

#### Reactions

*Must be declared before related action is rolled*

<span id="battle-partner"></span>**Battle Partner:** (1 AP | Reaction) When the companion is within 5 feet of its handler or the handler's melee target, it can spend 1 AP to add the handler's Skill Mastery Die to the handler's melee attack roll.

#### Stances

*Must be stated at the start of the combat round*

<span id="aggressive"></span>**Aggressive:** (Stance) The companion fights offensively, gaining Dominance on attacks, but Impotence on defense. Persists until given different command.

### Mount

#### Commands

*One free command each round in combat*

<span id="recall_1"></span>**Recall:** (Command) The companion returns to the handler's position. The companion must be able to hear or see the handler.

<span id="calm"></span>**Calm:** (Command) Mount only. The mount takes no other action this round. Degrade the mount's [Demoralized](../../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") condition by 1 tier.

<span id="attack_1"></span>**Attack:** (Command) Gained at Basic. Engage designated target with natural weapon. Continue attacking until target is dead or given different command.

#### Actions

*Must be declared before action is rolled*

<span id="wheel"></span>**Wheel:** (1 AP, Movement) The mount changes facing. Creatures adjacent to the mount's rear arc must succeed on a Strength trial against the mount's Ability DC or be pushed back 5 feet.

<span id="caracole"></span>**Caracole:** (1 AP mount, 1 AP rider. Movement + Attack) The mount moves up to its full speed. At any point during the movement, the rider makes a single weapon attack against a target. Neither the mount nor the rider provokes a Reprisal Attack from that target as they pass. A second pass may be made in the same round at the same cost, consuming all remaining AP from both mount and rider. Countered by Set Spear vs Charge.

<span id="overrun"></span>**Overrun:** (2 AP, Movement) The mount moves through spaces occupied by creatures of equal or smaller size. Each creature in the path is pushed 5 feet to the side. Creatures that fail a Strength trial against the mount's Ability DC also gain [Prone](../../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."). Countered by Set Spear vs Charge.

#### Stances

*Must be stated at the start of the combat round*

<span id="steady"></span>**Steady:** (Stance) While carrying a rider, the mount has Dominance and Superiority on defense rolls. The mount cannot attack while in Steady.

#### Passives

*Always active*

<span id="war-dance"></span>**War Dance:** (Passive) Once per round, while mounted, when your mount deals damage to a target, your next attack against that same target has Dominance.

---

## Tricks

One free trick per trained tier (Untrained through GM, limited by the animal's training depth). Available to any companion species. Tricks are utility and flavor - they never use ability slots.

| Trick | Description |
|:---|:---|
| **Message** | Seeks out one recognized ally to deliver an item or message. Range: 1 mile per handler's Wilderness mastery tier. |
| **Whistle** | Comes to handler's whistle within hearing distance. |
| **Stay** | Waits within 30 ft of designated position for up to 2d4 hours or until commanded. |
| **Fetch** | Fetches one predetermined item. Changeable once per week. |
| **Play Dead** | Feigns death for up to 1d4 hours or until commanded. |
| **Search** | Searches an area (10 minutes). Perception trial may locate visible or scented traps/objects. |

### Mount-Specific Tricks

| Trick | Description |
|:---|:---|
| **Bow** | Kneels for mounting when prompted. |
| **Lie Down** | Drops for cover/concealment when commanded, up to 1 minute. |
| **Trick Riding** | Rider gains bonus on mounted stunt trials. |

---

## General Rules

- Only 1 active companion per animal slot (Companion and Mount). Stable of animals allowed, but only one deployed per slot.
- Swapping stabled animals is GM discretion for downtime requirements.
- Companions always have 2 AP. Never 3.
- Commands within training are free. Beyond training requires Beast Lore (Wilderness) trial.
- Training track abilities must be physically executable with the animal. GM approval required.
- All archetypes receive Light barding proficiency at Untrained. War, Guard, and Mount may acquire Medium and Heavy proficiency through training advancement.
