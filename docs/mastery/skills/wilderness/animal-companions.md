---
generated_by: tools/sync_mastery.py
---

# Animal Companions

## Core Formulae

| Formula | Value |
|:---|:---|
| **Skill Mastery Die** | 1d2 (Unskilled) → 1d3 (Untrained) → 1d4 (Basic) → 1d6 (Skilled) → 1d8 (Expert) → 1d10 (Master) → 1d12 (GM) |
| **Health** | Two of each skill die up to the handler's mastery (2d2 + 2d3 + …); see *[Tier Dice Pools](../../characters/creating-a-character.md#tier-dice-pools)* |
| **Attack** | Skill Mastery Die + higher of STR or PHY die |
| **Defense** | Skill Mastery Die + AGI die + applicable resistance |
| **Trials** | Skill Mastery Die + Attribute Die |
| **Ability DC** | Higher of STR or PHY Tier + handler's Wilderness mastery level |
| **Speed** | 3 + AGI Tier + Size Modifier (see Size by Footprint) + 4 (quadruped) |
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
4. DCs for ability-based trials (higher of STR or PHY Tier + handler's Wilderness mastery level)
5. Attack rolls (Skill Mastery Die + STR or PHY)
6. Defense rolls (Skill Mastery Die + AGI die + resistance)
7. Trial dice (Skill Mastery Die + Attribute Die)

---

## Recruitment

At each Wilderness mastery level, the handler can recruit animals up to the corresponding native Division:

| Mastery Level | Max Native Division |
|:---|:---:|
| Untrained (2) | D2 (Dog, Giant Rat) |
| Basic (3) | D3 (Wolf, Boar) |
| Skilled (4) | D4 (Black Bear) |
| Expert (5) | D5 (War Boar, Widow, Constrictor) |
| Master (6) | D6 (Brown Bear) |
| Grand Master (7) | — (D6 is the maximum; Grand Master advances D6 or lower) |

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

| Mastery | Resistance | Barding |
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

| Mastery | Primary | Secondary |
|:---|:---|:---|
| Untrained | Guard, Attack, Recall | Barding |
| Basic | Intercept | Choice |
| Skilled | Scent Alert, Retrieve  | Choice |
| Expert | Protector | Choice |
| Master | Sentry | Choice |
| GM | Counterattack | Choice |

### Hunting (Sneaky)

| Mastery | Primary | Secondary |
|:---|:---|:---|
| Untrained | Track, Attack, Recall | Barding |
| Basic | Lunge | Choice |
| Skilled | Scent Search, Retrieve  | Choice |
| Expert | Pursuit | Choice |
| Master | Harry | Choice |
| GM | Coordinated Takedown | Choice|

<span id="hunting-birds"></span>**Hunting birds** replace *[Track](#track)* with *[Sight Track](#sight-track)* and *[Scent Search](#scent-search)* with *[Aerial Search](#aerial-search)*. All other Hunting abilities apply as written.

### Mount (Mobility)

| Mastery | Primary | Secondary |
|:---|:---|:---|
| Untrained | Recall, Calm | Barding |
| Basic | Attack, Wheel | Choice |
| Skilled | Caracole | Choice |
| Expert | Overrun | Choice |
| Master | Steady | Choice |
| GM | War Dance | Choice |

### War (Aggressive)

| Mastery | Primary | Secondary |
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

<span id="retrieve"></span>**Retrieve:** (Command) Fetch a designated object and return it to handler. This includes dropped or disarmed weapons, downed prey, or specific items within line of sight. The companion can retrieve items mid-combat as a 2 AP action. Birds can retrieve only what they can carry in flight: Tiny objects and light game.

<span id="recall"></span>**Recall:** (Command) The companion returns to the handler's position. The companion must be able to hear or see the handler.

#### Passive Choice Option

*Always active - Choose one per tier from Basic to Grand Master*

<span id="alert"></span>**Alert:** (Passive) Dominance on Startle trials.

<span id="avoid-death"></span>**Avoid Death:** (Passive) When an attack or spell would reduce the companion to 0 health, roll Endurance tier die and restore that amount of health. Once per rest.

<span id="brave"></span>**Brave:** (Passive) Dominance on trials to resist [Demoralized](../../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") conditions.

<span id="evasive"></span>**Evasive:** (Passive) Dominance on Agility trials to avoid traps and spells.

<span id="healthy"></span>**Healthy:** (Passive) Dominance on trials to resist [Tainted](../../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") conditions.

<span id="loyal"></span>**Loyal:** (Passive) Dominance on trials to resist [Charmed](../../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. The creature retains agency but its attitude toward the source is magically altered. Standard deterioration applies. Tiers: Lured, Beguiled, Enthralled.") condition.

<span id="stalwart"></span>**Stalwart:** (Passive) The companion gains an additional 2 health at each mastery level from this level forward and retroactively through Basic mastery (Max 10 health at GM).

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
| **Message** | Seeks out one recognized ally to deliver an item or message. Range: 1 mile per handler's Wilderness mastery level. |
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

## Dogs

Roll up a dog that is bought, found, or bred: its breed, its age, and its coat. Its breed sets its build, and its build sets its stat block: the Standard, Heavy, or Giant Dog (see *Creatures – Mortal Beasts*, Dogs). Any dog can be trained on any track. The breed tables list the dogs commonly kept for each kind of work.

<span id="builds"></span>**Builds.**

- <span id="standard"></span>**Standard:** small-to-medium dogs prized for agility, keen senses, and versatility. Quicker than larger dogs, and better in tight spaces. Spaniels, terriers, and smaller hounds.
- <span id="heavy"></span>**Heavy:** sturdy medium-to-large dogs that balance strength and agility, with good endurance. Shepherds, retrievers, and many working dogs.
- <span id="giant"></span>**Giant:** the largest and most powerful dogs, kept for strength, intimidation, or resilience. Mastiffs, wolfhounds, and mountain dogs.

### Breed

Roll 1d10 on the table for the work the dog is commonly kept for.

| d10 | Guard | Build | Hunting | Build | War | Build |
|:---:|:---|:---|:---|:---|:---|:---|
| 1 | Boxer | Heavy | Beagle | Standard | Alaunt | Heavy |
| 2 | Bullmastiff | Giant | Bloodhound | Heavy | Butcher's Dog | Heavy |
| 3 | Collie | Heavy | Cairn Terrier | Standard | Deerhound | Giant |
| 4 | Giant Schnauzer | Heavy | Fox Terrier | Standard | Great Shepherd | Heavy |
| 5 | Hovawart | Heavy | Foxhound | Heavy | Lion Dog | Giant |
| 6 | Mountain Dog | Giant | Pointer | Heavy | Mastiff | Giant |
| 7 | Red-Stocking | Heavy | Setter | Heavy | Molossus | Heavy |
| 8 | Sheepdog | Heavy | Spaniel | Standard | Mountain Dog | Giant |
| 9 | Shepherd | Standard | Springer Spaniel | Standard | Sheepdog | Heavy |
| 10 | Wooly Mastiff | Giant | Water Spaniel | Heavy | Wolfhound | Giant |

### Age

Roll 1d8 on the table for the dog's build.

| d8 | Age | Standard | Heavy | Giant |
|:---:|:---|:---:|:---:|:---:|
| 1–2 | Puppy | 2d6 months | 2d8 months | 2d12 months |
| 3–6 | Adult | 1d10 years | 1d6+1 years | 2d3 years |
| 7 | Senior | 1d4+8 years | 1d6+6 years | 1d4+5 years |
| 8 | Geriatric | 1d4+12 years | 1d4+11 years | 1d4+8 years |

### Coat

A dog's coat combines a base color, genetic modifiers such as dilution, and patterns or markings. Roll 2d8 for the coloring type, then roll on its table.

| 2d8 | Coloring Type | Next Table |
|:---:|:---|:---|
| 2–3 | Wild Pattern | Wild Pattern |
| 4–5 | Markings | Markings |
| 6–7 | Brindle | Brindle |
| 8–10 | Solid | Solid |
| 11–12 | Body Markings (Bi/Tricolor) | Body Markings |
| 13–14 | Tick and Roan | Tick and Roan |
| 15–16 | Merle | Merle |

<span id="wild-pattern"></span>**Wild Pattern.** Coats like those of wild canids, often with banded hairs or regional patterns such as saddles or countershading. These often give natural camouflage. Roll 1d4, then roll the base color on Solid.

| d4 | Pattern | Description |
|:---:|:---|:---|
| 1 | Agouti | Individual hairs show bands of alternating light and dark pigment, giving a grizzled or ticked look across the coat. |
| 2 | Jackal | Darker hairs along the back fade into lighter shades on the underside, muzzle, and legs, without distinct patches or spots. |
| 3 | Backed | A solid patch of darker color forms a distinct saddle or cape over the back, contrasting with lighter colors elsewhere. |
| 4 | Side-Striped | Vertical stripes of contrasting color run along the flanks. |

<span id="markings"></span>**Markings.** Distinct areas of color, often white or tan points, over the base coat on the face, chest, or legs, or as larger patches. Roll 1d12, then roll the base color on Solid.

| d12 | Marking | Description |
|:---:|:---|:---|
| 1 | Countershaded | The top of the dog (back, top of head and tail) is darker; the underside (belly, chest, throat, under the tail) is much lighter. |
| 2 | Urajiro | A form of countershading with pale reddish or whitish markings on the sides of the muzzle, cheeks, throat, chest, belly, and inside of the legs. |
| 3 | Nonself | White markings where the base color would normally be, often on the chest, toes, or tail tip. |
| 4 | Dark Mask | Dark pigment, usually black or liver, over the muzzle, sometimes reaching up around the eyes. |
| 5 | Saddle | A large patch of darker color (black, liver, or blue) over the back, distinct from the lighter base color. |
| 6 | Minimal White | Small, often irregular patches of white on the chest, toes, or tail tip. |
| 7 | Extreme White | Large areas of white over most of the body, leaving small patches of base color, often on the head or near the tail. |
| 8 | Mealy | Pale, mealy markings (off-white, pale tan, or greyish) around the muzzle, eyes, belly, and lower legs, often on brown or red coats. |
| 9 | Piebald | Irregular, often large patches of white on a colored background, the colored patches clearly defined. |
| 10 | Extreme Piebald | Like piebald, but white covers most of the body, leaving small isolated patches of color, sometimes only on the ears or head. |
| 11 | Spotted | Distinct, usually rounded spots of color on a white base coat, varying in size and spread. |
| 12 | Watermark | Subtle, wavy patterns within the coat, slightly lighter or darker than the fur around them, sometimes visible only in certain light. |

<span id="brindle"></span>**Brindle.** Subtle or bold "tiger stripes" of a darker color over a lighter base coat, or the reverse. Roll 1d12.

| d12 | Brindle | Description |
|:---:|:---|:---|
| 1 | Black Brindle (Reverse) | A dark base coat, often black or near-black, with lighter stripes such as fawn, red, or silver. |
| 2 | Red Brindle | Distinct black stripes over a reddish base coat. |
| 3 | Light Brindle | A pale base coat (cream or light fawn) with darker stripes, for a low-contrast brindle. |
| 4–5 | Brindle | The standard pattern: distinct black stripes over a fawn or brownish base coat. |
| 6–7 | Fawn Brindle | Distinct black stripes over a fawn (light yellowish-tan) base coat. |
| 8 | Dark Brindle | A dark base coat (deep red or mahogany) with black stripes, often very dark overall. |
| 9 | Silver Brindle | Distinct black stripes over a silvery-grey base coat. |
| 10 | Liver Brindle | Liver (brown) stripes over a lighter base coat, often fawn or cream. |
| 11 | Brindle and White | Any brindle combined with distinct patches of white, usually on the chest, feet, or face. |
| 12 | Gold Brindle | Distinct black stripes over a rich golden or yellow base coat. |

<span id="tick-and-roan"></span>**Tick and Roan.** Small spots of color (ticking) on white areas, or a fine mix of white and colored hairs (roaning), giving a mottled look. Roll 1d12.

| d12 | Tick or Roan | Description |
|:---:|:---|:---|
| 1–2 | Bluetick | Black ticking throughout a white coat, often giving an overall blueish look. |
| 3 | Diluted Bluetick | Like bluetick, but the ticking is diluted black (grey or blue) on white. |
| 4–5 | Redtick | Red or orange ticking throughout a white coat. |
| 6 | Diluted Redtick | Like redtick, but the ticking is diluted red (fawn or cream) on white. |
| 7–8 | Black and Tan Tick | A black and tan pattern whose white areas are ticked. |
| 9–10 | Blue Roan | A fine, close mix of black and white hairs, giving a blue-grey or steel coat. |
| 11 | Red Roan | A fine, close mix of red and white hairs, giving a pinkish or reddish-grey coat. |
| 12 | Liver Roan | A fine, close mix of liver and white hairs, giving a brownish-grey coat. |

<span id="body-markings"></span>**Body Markings (Bi/Tricolor).** Patches of two (bicolor) or three (tricolor) colors, often in specific, recognizable patterns. Roll 1d12.

| d12 | Body Markings | Description |
|:---:|:---|:---|
| 1 | Sable Tricolor | A sable coat (light hairs tipped with black) with distinct white markings and tan points. |
| 2 | Red/Sable Tricolor | A red or sable coat with distinct white markings and tan points. |
| 3 | Spotted Tricolor | A mostly white coat with separate spots of two other colors, commonly black and tan. Roll the spot colors on Solid. |
| 4 | Liver Tricolor | A liver (brown) coat with distinct white markings and tan points. |
| 5–6 | Black Tricolor | A black coat with distinct white markings and tan points. |
| 7–8 | Black and Tan | A mostly black coat with sharply defined tan markings on the eyebrows, muzzle, chest, and legs. |
| 9–10 | Liver and White | Distinct patches of liver on a white background. |
| 11–12 | Liver and Tan | A mostly liver coat with sharply defined tan markings. |

<span id="merle"></span>**Merle.** Mottled patches where the base color is randomly diluted, often in blue, red, or lilac shades, and sometimes affecting eye color. Roll 1d12.

| d12 | Merle | Description |
|:---:|:---|:---|
| 1 | Blue Merle | Black patches on a grey or blue-grey diluted background. |
| 2 | Red/Sable Merle | Red or sable patches on a lighter, diluted reddish or tan background. |
| 3 | Lilac Merle | Liver patches on a pale, diluted lilac or isabella background. |
| 4 | Light Merle | A paler merle, with little contrast between the patches and the background. |
| 5 | Tan and Red Merle | A red merle that also has distinct tan points. |
| 6 | Tweed Merle | Several shades within the patches or background, giving a complex, tweed-like look. |
| 7 | Harlequin | A mostly white coat with irregular, torn-edged patches of another color. Roll the patch color on Solid. |
| 8 | Sable Merle | Sable patches (light hairs tipped with black) on a diluted background. |
| 9 | Liver Merle | Liver patches on a lighter, diluted brownish or tan background. |
| 10 | Blue Merle and Tan | A blue merle that also has distinct tan points. |
| 11 | Agouti Merle | An agouti (banded) coat with merle over it, mixing mottling and banding. Roll the base color on Solid. |
| 12 | Double Merle | Large amounts of white with smaller, less distinct merle patches. Roll again on this table for the merle. |

<span id="solid"></span>**Solid.** Roll 1d20.

| d20 | Color | d20 | Color |
|:---:|:---|:---:|:---|
| 1 | Jet Black | 11 | Liver |
| 2 | White | 12 | Yellow |
| 3 | Gray | 13 | Seal Brown |
| 4 | Fawn | 14 | Fading Black |
| 5 | Lilac / Isabella | 15 | Silver |
| 6 | Red / Sable | 16 | Bronze |
| 7 | Red / Gold | 17 | Copper |
| 8 | Cream | 18 | Chestnut |
| 9 | Blue | 19 | Mahogany |
| 10 | Chocolate | 20 | Ivory |

## Horses

Roll up a horse that is bought, found, or bred: its sex, its type, its age, and its coat. Its type sets its stat block (see *Creatures – Mortal Beasts*).

<span id="stallions"></span>**Stallions** are uncastrated male horses. Powerful and aggressive, stallions need experienced handling. They are the natural choice for war horses, because their strength and drive suit them to combat, but they can be unpredictable, especially around other horses.

<span id="mares"></span>**Mares** are female horses. They tend to be more even-tempered than stallions but can be just as stubborn. They are reliable mounts for travel, work, and riding, and make up most of the horses used by merchants, messengers, and everyday riders. Mares are rarely chosen for war.

<span id="geldings"></span>**Geldings** are castrated male horses. They are calmer, steadier, and easier to train than stallions, which makes them ideal for everyday use, and most common riding horses are geldings. Geldings are never war horses: the gelding that makes them manageable also removes the aggression and drive combat needs.

### Sex and Type

Roll 1d12 for the horse's sex, then roll its type on the table for its sex.

| d12 | Sex | Type Table |
|:---:|:---|:---|
| 1–4 | Gelding | Geldings and Mares |
| 5–8 | Mare | Geldings and Mares |
| 9–12 | Stallion | Stallions |

<span id="geldings-and-mares"></span>**Geldings and Mares.** Roll 1d10.

| d10 | Type | Stat Block |
|:---:|:---|:---|
| 1–2 | Donkey or Mule | Pony / Donkey |
| 3–4 | Draft Horse | Draft Horse |
| 5–6 | Pony | Pony / Donkey |
| 7–10 | Riding Horse | Palfrey, Riding Horse |

<span id="stallions_1"></span>**Stallions.** Roll 1d12.

| d12 | Type | Stat Block |
|:---:|:---|:---|
| 1 | Wild Horse | An untrained Rouncey, Palfrey, Courser, or Destrier, chosen by the GM |
| 2–3 | Donkey or Mule | Pony / Donkey |
| 4–5 | Draft Horse | Draft Horse |
| 6–7 | Pony | Pony / Donkey |
| 8–9 | Riding Horse | Palfrey, Riding Horse |
| 10 | Light War Horse | Rouncey, Light War Horse |
| 11 | Medium War Horse | Courser, Medium War Horse |
| 12 | Heavy War Horse | Destrier, Heavy War Horse |

<span id="donkey-or-mule"></span>**Donkey or Mule.** Donkeys are small, sure-footed, and durable, often used for short hauls or travel through tight or unstable terrain. They are slow but steady, with a calm temperament. Mules, bred from a male donkey and a female horse, are larger and stronger, combining a donkey's endurance with a horse's size and gait.

<span id="draft-horse"></span>**Draft Horse.** Large, muscular horses bred for heavy labor. Not as fast as other horses, but unmatched in strength and endurance. They carry heavy loads, pull wagons, and can serve as mounts for larger riders, but they lack the agility for fast-paced combat.

<span id="pony"></span>**Pony.** Smaller than full-sized horses but often just as strong for their size. Ponies make excellent mounts for smaller riders, though they can be stubborn and challenging to handle.

<span id="riding-horse"></span>**Riding Horse.** The most common horse for travel, bred for speed, endurance, and reliability, and preferred by merchants, travelers, and messengers. Riding horses lack the strength of draft horses and the aggression of war horses, but they are well-rounded, dependable mounts.

<span id="light-war-horse"></span>**Light War Horse.** Trained for combat but faster and more maneuverable than heavier war horses. Well suited to skirmishers, scouts, and archers who need to stay mobile in battle.

<span id="medium-war-horse"></span>**Medium War Horse.** Balances speed and strength. Trained for battle and able to charge through enemy lines while keeping some mobility. Knights and cavalry often rely on these well-bred horses.

<span id="heavy-war-horse"></span>**Heavy War Horse.** The largest and most powerful war horse, bred to carry a heavily armored rider into the thick of combat. Fearless and aggressive, and bred to trample enemies underfoot. Slower than lighter breeds, but unmatched in raw power.

<span id="wild-horse"></span>**Wild Horse.** Untrained, unpredictable, and wary of people. A wild horse must be broken before it can be ridden, and even then it may resist commands or bolt under stress. Some have impressive stamina and spirit, but their untrained nature makes them a risky choice for anyone who needs a reliable mount.

### Age

Roll 1d8 on the table for the horse's sex. A foal is under a year old.

| d8 | Gelding | Years | Mare | Years | Stallion | Years |
|:---:|:---|:---:|:---|:---:|:---|:---:|
| 1 | Gelding Colt | 2d2 | Foal | under 1 | Foal | under 1 |
| 2 | Gelding Colt | 2d2 | Filly | 1d3+1 | Colt | 1d3+1 |
| 3–4 | Gelding | 2d8+2 | Dam | 3d6+2 | Stud | 3d6+2 |
| 5–6 | Gelding | 2d8+2 | Mare | 3d6 | Stallion | 3d6 |
| 7 | Aged | 8d4 | Aged | 8d4 | Aged | 8d4 |
| 8 | Crowbait | 10d4 | Nag | 10d4 | Crowbait | 10d4 |

### Coat

A horse's coat combines a base color, dilution, and patterns. Roll 1d20, then roll on the subtable if there is one.

<span id="patterns-and-grays-sit-over-another-coat"></span>**Patterns and grays sit over another coat.** When you roll a pattern, or a Fleabitten or Watermark Gray, roll this table again for the coat underneath. Keep rolling until you land on a coat that isn't a pattern. Every pattern you rolled along the way applies. If the same pattern comes up twice, roll that pattern table again.

| d20 | Coat | Next Table |
|:---:|:---|:---|
| 1 | Jet Black | — |
| 2 | Fading Black | — |
| 3 | Seal Brown | — |
| 4 | Brown | — |
| 5–6 | Bay | Bay |
| 7–8 | Chestnut | Chestnut |
| 9–10 | Gray | Gray |
| 11–12 | Dun Dilute | Dun Dilute |
| 13–14 | Cream Dilute | Cream Dilute |
| 15–16 | Champagne Dilute | Champagne Dilute |
| 17–18 | Silver Dilute | Silver Dilute |
| 19 | Dilute Combination | Dilute Combination |
| 20 | Pattern | Patterns |

<span id="jet-black"></span>**Jet Black.** A deep, glossy black coat without any fading or highlights. Rare and striking.

<span id="fading-black"></span>**Fading Black.** Appears black in winter but fades to brown or rusty tones in the sun. Often mistaken for brown.

<span id="seal-brown"></span>**Seal Brown.** Nearly black, with subtle reddish or mahogany highlights, especially around the flanks and muzzle.

<span id="brown"></span>**Brown.** A solid brown coat, typically uniform with no black points. Common among working horses.

<span id="bay"></span>**Bay.** A reddish-brown coat with black points (mane, tail, and legs). Variants range from pale copper to deep mahogany.

<span id="chestnut"></span>**Chestnut.** A reddish coat with no black points, ranging from pale sorrel to deep liver. The mane and tail usually match or are lighter.

<span id="gray"></span>**Gray.** Gray horses lighten with age. Coats may begin dark and slowly turn white or silver. Includes dapple, iron, and fleabitten variants.

<span id="dun-dilute"></span>**Dun Dilute.** A diluted coat with a distinct dorsal stripe, leg barring, and primitive markings. Usually dusty or muted in tone.

<span id="cream-dilute"></span>**Cream Dilute.** Cream dilution produces palominos, buckskins, and other light golden coats, often with blue or hazel eyes.

<span id="champagne-dilute"></span>**Champagne Dilute.** Soft gold, amber, or pinkish coats with freckled skin and light eyes. Foals are born bright and darken with age.

<span id="silver-dilute"></span>**Silver Dilute.** Mainly affects black pigment, lightening manes and tails to silver or white. Rare, and mostly seen on darker base coats.

<span id="dilute-combination"></span>**Dilute Combination.** Several dilutions together, producing rare, layered colors such as cream over dun or silver over grulla.

<span id="patterns"></span>**Patterns.** Color or markings over a base coat. Basic patterns are natural variations that subtly alter a coat. Pinto patterns are large, irregular patches of white. Appaloosa patterns are mottling, spots, and blankets of color, usually centered on the hindquarters. Other markings are rare or unusual features such as freckling, marbling, or lace-like patterns.

<span id="bay_1"></span>**Bay.** Roll 1d6.

| d6 | Bay |
|:---:|:---|
| 1 | Blood Bay |
| 2 | Copper Bay |
| 3 | Dark Bay |
| 4 | Faded Bay |
| 5 | Gold Bay |
| 6 | Mahogany Bay |

<span id="chestnut_1"></span>**Chestnut.** Roll 1d6.

| d6 | Chestnut |
|:---:|:---|
| 1 | Sorrel |
| 2 | Liver Chestnut |
| 3 | Cherry Chestnut |
| 4 | Golden Chestnut |
| 5 | Honey Chestnut |
| 6 | Black Chestnut |

<span id="gray_1"></span>**Gray.** Roll 1d10.

| d10 | Gray | Next Table |
|:---:|:---|:---|
| 1 | Gray | — |
| 2 | Dapple Gray | — |
| 3 | Rose Gray | — |
| 4 | Iron Gray | — |
| 5 | Dark Gray | — |
| 6 | Mulberry Gray | — |
| 7 | White Gray | — |
| 8 | Fleabitten Gray | Coat, for the color underneath |
| 9 | Watermark Gray | Coat, for the color underneath |
| 10 | Roan | Roan |

<span id="roan"></span>**Roan.** Roll 1d10.

| d10 | Roan |
|:---:|:---|
| 1–2 | Strawberry Roan |
| 3–4 | Blue Roan |
| 5–6 | Red Roan |
| 7–8 | Lilac Roan |
| 9–10 | Honey Roan |

<span id="dun-dilute_1"></span>**Dun Dilute.** Roll 1d20.

| d20 | Dun | d20 | Dun |
|:---:|:---|:---:|:---|
| 1–2 | Peach Dun | 15 | Slate Dun |
| 3–4 | Red Dun | 16 | Blue Dun |
| 5–6 | Copper Dun | 17 | Silver Dun |
| 7–8 | Bronze Dun | 18 | Coyote Dun |
| 9–10 | Liver Dun | 19 | Wolf Dun |
| 11–12 | Classic Dun | 20 | Olive Dun |
| 13–14 | Buttermilk Dun | | |

<span id="cream-dilute_1"></span>**Cream Dilute.** Roll 2d6.

| 2d6 | Cream |
|:---:|:---|
| 2 | Golden Palomino |
| 3 | Caramel Palomino |
| 4 | Cremello |
| 5 | Smoky Black |
| 6 | Smoky Cream |
| 7 | Buckskin |
| 8 | Buttermilk Buckskin |
| 9 | Golden Buckskin |
| 10 | Bronze Buckskin |
| 11 | Perlino |
| 12 | Black Buckskin |

<span id="champagne-dilute_1"></span>**Champagne Dilute.** Roll 1d10.

| d10 | Champagne |
|:---:|:---|
| 1–2 | Gold Champagne |
| 3–4 | Amber Champagne |
| 5–6 | Champagne Black |
| 7–8 | Sable Champagne |
| 9–10 | Dark Gold Champagne |

<span id="silver-dilute_1"></span>**Silver Dilute.** Roll 1d4.

| d4 | Silver |
|:---:|:---|
| 1 | Silver Dapple |
| 2 | Chocolate Silver |
| 3 | Red Silver |
| 4 | Blue Silver |

<span id="dilute-combination_1"></span>**Dilute Combination.** Roll 1d100.

| d100 | Combination | d100 | Combination |
|:---:|:---|:---:|:---|
| 1–5 | Yellow Dun | 52–55 | Silver Dapple Smoky Grulla |
| 6–10 | Cream Dun | 56–60 | Dunskin |
| 11–14 | Gold Cream | 61–65 | Dun Perlino |
| 15–18 | Ivory Champagne | 66–70 | Silver Buckskin |
| 19–22 | Gold Dun | 71–75 | Amber Cream |
| 23–26 | Smoky Black Dun | 76–80 | Amber Dun |
| 27–30 | Smoky Cream Grulla | 81–84 | Amber Silver |
| 31–34 | Silver Smoky Black | 85–88 | Brown Dunskin |
| 35–38 | Smoky Black Champagne | 89–92 | Sable Cream |
| 39–43 | Classic Dun Champagne | 93–96 | Sable Dun |
| 44–46 | Silver Dapple Grulla | 97–100 | Pearl |
| 47–51 | Classic Silver | | |

<span id="patterns_1"></span>**Patterns.** Roll 1d4 for the kind of pattern, then on its table.

| d4 | Pattern Type | Next Table |
|:---:|:---|:---|
| 1 | Basic | Basic Patterns |
| 2 | Pinto | Pinto Patterns |
| 3 | Appaloosa | Appaloosa Patterns |
| 4 | Other Markings | Other Markings |

<span id="basic-patterns"></span>**Basic Patterns.** Roll 2d4.

| 2d4 | Basic Pattern |
|:---:|:---|
| 2 | Rabicano |
| 3 | Sooty |
| 4 | Lemonsilla |
| 5 | Mealy |
| 6 | Flaxen |
| 7 | Brindle |
| 8 | Reverse Brindle |

<span id="pinto-patterns"></span>**Pinto Patterns.** Roll 1d10.

| d10 | Pinto Pattern |
|:---:|:---|
| 1 | Minimal Tobiano |
| 2 | Tobiano |
| 3 | Extreme Tobiano |
| 4 | Medicine Hat |
| 5 | Full Head Tobiano |
| 6 | Frame |
| 7 | Sabino |
| 8 | Splash White |
| 9 | Tovero |
| 10 | Roll once on Pinto Patterns and once on Appaloosa Patterns |

<span id="appaloosa-patterns"></span>**Appaloosa Patterns.** Roll 1d12.

| d12 | Appaloosa Pattern |
|:---:|:---|
| 1 | Minimal Blanket |
| 2 | Blanket |
| 3 | Extended Blanket |
| 4 | Leopard |
| 5 | Semi-Leopard |
| 6 | Marble |
| 7 | Frost |
| 8 | Snowflake |
| 9 | Snowcap |
| 10 | Ghost |
| 11 | Halo Spots |
| 12 | Roll once on Appaloosa Patterns and once on Pinto Patterns |

<span id="other-markings"></span>**Other Markings.** Roll 1d6.

| d6 | Other Marking |
|:---:|:---|
| 1 | Birdcatcher Spots |
| 2 | Chubari Spots |
| 3 | Grease Spots |
| 4 | Manchado |
| 5 | Lacing |
| 6 | Mosaic |

---

## General Rules

- Only 1 active companion per animal slot (Companion and Mount). Stable of animals allowed, but only one deployed per slot.
- Swapping stabled animals is GM discretion for downtime requirements.
- Companions always have 2 AP. Never 3.
- Commands within training are free. Beyond training requires Beast Lore (Wilderness) trial.
- Training track abilities must be physically executable with the animal. GM approval required.
- All archetypes receive Light barding proficiency at Untrained. War, Guard, and Mount may acquire Medium and Heavy proficiency through training advancement.
