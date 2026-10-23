---
generated_by: tools/sync_mastery.py
---

# Combat

Mastery combat should feel different than other TTRPGs when it is run as intended. Combat is tactical, meaningful, and brutal. If you expect to survive a combat encounter, you need your allies, you need your equipment to be in good repair, and you need to be prepared with weapon options in addition to being skilled with the weapons you bring along. Being considerate of your surroundings, your options, and strategic in the execution of your actions can make the difference between life and death for you and your companions.

It is helpful to think of a combat round as individual decisions made by combatants and then observing how those decisions play out rather than a combat round as of series of consecutive decisions which each reacts to the decision that came before it. You have some limited ability to alter your decisions or react to events around you, and while changing direction can be helpful, it also can reduce your effectiveness overall.

---

## Time

Combat passes in rounds:

| Increment | Duration | Per |
|:---|:---:|:---:|
| Combat Round | 10 Seconds | 6 Rnds/Minute |

## Combat Flow

The flow of combat follows this structure:

1. Determine if Startle or Ambush is appropriate and roll.
2. <span id="declaration-phase"></span>**Declaration Phase.** At the start of each round, before initiative is rolled, all combatants make the following declarations. Players declare openly and may strategize. The GM commits privately for all enemies and NPCs.
    - <span id="weapon"></span>**Weapon**: Declare your equipped weapon and combat style. Combat style is how the weapon is being used: Shield, Single (1H), Two-Handed, or Dual Wield. If switching weapons or changing combat style this round, your phase is determined by the slowest weapon or style involved. Reactive weapon changes (dropping a broken shield, switching grip due to circumstances) can occur mid-round without declaration.
    - <span id="declaration-maneuvers"></span>**Declaration Maneuvers**: Declare any maneuver whose trigger is Declaration.
    - <span id="spells"></span>**Spells**: Declare any spell you intend to cast. The spell's casting speed counts toward your phase (see *[Initiative Phases](#initiative-phases)*).
    - <span id="guard"></span>**Guard**: Declare your guard, or a formation if you are trained in Tactics. A companion declares its stance.
    - <span id="abilities"></span>**Abilities**: Declare any ability you intend to use that has its own speed, or whose text says it must be declared. You cannot use such an ability in a round you did not declare it.
    - <span id="items"></span>**Items**: Declare any item you intend to use as your plan for the round. Its speed, given in its entry, counts toward your phase.
    - <span id="held-actions"></span>**Held Actions**: Declare that you are holding your action. You must specify one of the following:
        - *Hold to Phase*: Name a phase later than your declared phase. You act in that phase instead. You cannot hold to an earlier phase.
        - *Hold for Trigger*: Name a specific condition (e.g., "the archer breaks cover," "a creature enters this doorway"). Commit AP to the held action. If the trigger occurs during or after your natural phase, you act immediately. If the trigger occurs before your natural phase, you cannot react — your weapon is too slow. If the trigger never occurs, the committed AP are lost.
    - <span id="everything-else"></span>**Everything else**, such as attacks, defenses, movement, and reactions, needs no declaration. If you abandon something you declared, you cannot replace it with something you did not declare, unless an ability allows it or it is a quick item (see *[Interaction](#interaction)*).
3. Roll 1d6 to determine which side goes first (1-3 = PCs, 4-6 = Enemies).
4. Resolve Fast phase (winning side, then losing side).
5. Resolve Moderate phase (winning side, then losing side).
6. Resolve Slow phase (winning side, then losing side).
7. Next combat round begins. Applicable conditions are reduced or removed. Return to step 2.

## Action Points

All combatants have **2 Action Points (AP)** per round. These can be spent proactively during your turn or reactively in response to enemy actions.

### Action Costs

All basic actions cost **1 AP**:

- <span id="movement_1"></span>**Movement**: Move up to your movement speed
- <span id="attack_1"></span>**Attack**: Make one melee or ranged attack
- <span id="defense_1"></span>**Defense**: Defend against one incoming attack
- <span id="interaction_1"></span>**Interaction**: Use an item, open a door, etc.
- <span id="casting_1"></span>**Casting**: Cast a spell (may cost 1 or 2 AP depending on spell)

### Use It or Lose It

Unspent AP do not carry over to the next round. AP can be spent:

- <span id="proactively"></span>**Proactively** on your turn in your initiative phase
- <span id="reactively"></span>**Reactively** in response to enemy actions (defending, counterattacking, reprisal attacks)

If you end a round with unspent AP and no reactive triggers occurred, those AP are lost.

## Initiative Phases

Initiative is determined by weapon speed rather than random rolls. All weapons fall into three categories:

- <span id="fast"></span>**Fast**: Light weapons (daggers, shortbows, unarmed, etc.)
- <span id="moderate"></span>**Moderate**: Standard weapons (swords, maces, spears, etc.)
- <span id="slow"></span>**Slow**: Heavy weapons (mauls, greataxes, heavy crossbows, etc.)

Your phase is set by what you declare this round, not by what you hold. If you declare more than one thing with a speed, such as a weapon attack, a spell, an ability, or an item, you act in the slowest of their phases. A weapon you hold but do not declare an attack with does not count toward your phase. If you declare nothing else, your weapon sets your phase, whether or not you attack with it; with nothing in hand, you are Fast.

<span id="acting-faster-than-your-weapon"></span>**Acting Faster Than Your Weapon**: If your phase is faster than the weapon you hold, you cannot attack with it on your turn. You can still defend and make reprisal attacks with it.

<span id="spell-casting"></span>**Spell Casting**: Spells also have speeds, set by their magan cost (Flame Dart is Fast; Thunderclap, cast at distance over a large area, is Moderate). See [Magic Mastery](../magic/index.md), [Spell Speed](../magic/index.md#spell-speed).

<span id="weapon-switching"></span>**Weapon Switching**: Stowing a weapon costs 1 AP. Drawing a weapon costs 1 AP. A full weapon swap (stow old, draw new) costs 2 AP. Dropping a weapon is free, so dropping your current weapon and drawing a new one costs 1 AP, but your old weapon is on the ground. Phase determination for weapon switches is handled in the Declaration Phase (see [Combat Flow](#combat-flow), step 2).

<span id="shield-removal"></span>**Shield Removal**: Removing a strapped shield (Heater, Kite) costs 1 AP. A Targe is held, not strapped, and can be dropped freely like any held item. Once a shield is removed on your turn, you are in your new combat style for the remainder of the round.

<span id="unarmed"></span>**Unarmed**: Unarmed combatants are considered Fast unless otherwise specified.

## Startle and Ambush

At the start of combat, each creature that is unaware of an enemy, or unaware that combat is beginning, makes a Startle trial. A Startle trial combines how fast your body reacts with how fast your mind reacts: roll your Agility tier die and your Perception tier die. Unlike other sources of [Impaired](conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."), a Startle trial is not resisted with a Perception trial alone.

### Startle

When both sides are unaware of each other, the DC is 6. The GM adjusts it for weather, lighting, and any other aspect of the battlefield.

### Ambush

An ambush must be prepared so that one group of combatants is aware of the other before combat begins. The ambushers set the DC rather than a flat value. For PCs, laying an ambush is a group trial: the DC is the leader's Stealth Mastery DC, with any bonus from a Helper. See [General Rules](exploration-and-travel.md), [Group Trials](exploration-and-travel.md#group-trials). A creature sets the DC as the [Monster Manual](../bestiary/creature-rules.md) describes.

A character with Alertness (Danger Sense) may sense an ambush as it is sprung. A *Watchman*'s warning does not stop the ambush, but warned characters in Active roles do not take the −4 to their Startle trials. If the ambushers are spotted well before they strike, the GM decides whether an ambush happens at all.

### Results

- A failed Startle trial results in Tier 1 [Impaired](conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."): *Dazed*.
- A failed Startle trial by 3 or 4 results in Tier 2 [Impaired](conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."): *Stunned*.
- A failed Startle trial by 5+ results in Tier 3 [Impaired](conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."): *Paralyzed*.
- A creature affected by the *[Impaired](conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond.")* condition progresses to previous Tier at the start of each combat round until they are no longer afflicted.

## Additional Combat Rules

<span id="allies"></span>**Allies**: An **ally** is a creature on your side other than yourself. Effects that include you say "you and your allies."

<span id="flanking"></span>**Flanking**: If you are on one side of a target who is also being threatened on the other side, both you and your ally gain +2 to the attack. The flanking bonus applies to a maximum of one attack per AP spent. If you make multiple attacks with a single AP (such as dual-wielding), only the first of those attacks gains the flanking bonus.

<span id="engaged"></span>**Engaged**: If you attack a creature or take either *[Durability](#durability)* or *[Health](#health)* damage from a creature, you are *Engaged* with it until the beginning of your next turn.

### Damage Types

<span id="mundane"></span>**Mundane**: Cutting, Cleaving, Crushing, Piercing, and Puncturing damage.

<span id="magical"></span>**Magical**: Fire, Sea, Sky, Stone, Primal, Profane, Sacred, and Void.

- <span id="energy"></span>**Energy**: Fire, Sky, Sacred, Void
- <span id="material"></span>**Material**: Sea, Stone, Primal, Profane. Mundane damage is also material.

Damage is mundane or magical by its type. An enchanted weapon still deals its weapon's mundane damage; anything magic adds to a hit, such as Imbue or an enchantment, is a separate portion of the hit with its own type. Spells, and effects created by spells or magical abilities, are magical.

### Health Types

<span id="durability"></span>**Durability.** Durability is the amount of integrity that your armor has. The more that you are hit, the more quickly your armor deteriorates. Durability decreases when you take *[Mundane](#mundane)* or *Material Magic* damage minus any resistances it has. Armor at 0 durability is broken and gives no resistance.

<span id="health"></span>**Health**: Health is your physical well-being. It comes from two sources:

- <span id="endurance"></span>**Endurance.** For each Endurance tier up to your current tier, roll the corresponding tier die and add the result. Each time your Endurance tier increases, roll the new tier die and add it to your health. A character who starts at Endurance Tier 3 has 1d2 + 1d3 + 1d4.
- <span id="class"></span>**Class.** Every 3 levels, add the amount shown in your class table's Health column.

## Actions and Reactions

Your 2 AP can be spent as either **actions** (proactive) or **reactions** (reactive). Actions occur on your turn during your initiative phase. Reactions occur in response to enemy actions and are always **triggered** by specific circumstances.

### Attack

Refers to a single unarmed or weapon attack.

<span id="weapon-attack"></span>**Weapon attack:** an attack made with a manufactured weapon or a shield. Natural attacks (bites, claws, horns) and unarmed strikes are not weapon attacks.

- <span id="melee"></span>**Melee**: attacks automatically hit, unless the target spends AP to defend.
- <span id="ranged"></span>**Ranged**: attacks require an *[Aiming Trial](#aiming-trial)* to hit.
    - <span id="aiming-trial"></span>**Aiming Trial**: Roll your Perception tier die against DC 2. The DC increases by 1 for Moderate range, by 3 for Far range, and by 1 for each ally adjacent to the target, and [Cover](conditions.md#cover "Physical barrier between attacker and target Tiers: Partial Cover, Majority Cover, Total Cover.") and some maneuvers raise it further. A roll of 1 always misses, and a max roll on your tier die always hits.

<span id="attack-formulas"></span>**Attack Formulas**:

- *Melee/Thrown Attack*: STR or PHY Tier Die + WEA + Modifiers
- *Bow Attack*: PHY Tier Die + WEA + Modifiers
- *Crossbow Attack*: PER Tier Die + Fixed Weapon Dice + Modifiers

<span id="attack-rules"></span>**Attack Rules**:

- Attack dice explode on a max roll.
- Attacks always hit unless target chooses to defend.
- If target chooses to defend, and defense roll is equal to or greater than incoming attack roll, defense succeeds.

For weapon speeds, attack formulas, style modifiers, and maneuvers, see the [Weapon Mastery](../weapons/index.md) chapter.

### Defense

A **reaction** to defend against an incoming attack. Costs 1 AP.

- When an attack is announced against you, but before the roll is made, you must declare your intent to defend.
- If you have no remaining AP, you cannot defend.
- You can defend while wielding a melee weapon or nothing at all. The Tier Die used is based on the melee weapon you are wielding; if you have none, use STR or PHY.
- A shield counts as a weapon. A character holding only a shield is not unarmed.
- You cannot defend while wielding only a projectile weapon or sling unless a maneuver allows it.
- If you are unarmed, your defense against a weapon attack has Inferiority.
- You cannot make a ranged attack with a projectile weapon or sling while a hostile creature is within 5 feet of you. A crossbow that is already spanned is the exception: you can fire it, but you cannot span it again while a hostile creature is within 5 feet.
- If in the middle of casting a spell, you must interrupt the spell to defend.

<span id="defense-formula"></span>**Defense Formula**: STR or PHY Tier Die + Armor Resistance + Shield + Modifiers

<span id="defense-rules"></span>**Defense Rules**:

- Defense dice explode on a max roll.
- If defense roll is equal to or greater than incoming attack roll, defense succeeds.
- If the defense fails, the amount by which the attack roll exceeds your defense roll is applied to your armor's durability first, then to your health once durability is depleted.
- Must be wielding a shield to defend against ranged attacks, unless an ability allows it.
- Armor Resistance is the static resistance value of your equipped armor.

<span id="passive-defense"></span>**Passive Defense**: If you choose not to defend or have no AP remaining, incoming attack damage is applied directly against your Armor Resistance. Any damage that exceeds your armor resistance is applied to your armor's durability first, then to your health once durability is depleted.

### Triggered Reactions (All cost 1 AP)

<span id="counterattack"></span>**Counterattack**: If you successfully defend against an attack, you can spend 1 AP as a reaction to make a counterattack against your attacker.

<span id="reprisal-attack"></span>**Reprisal Attack**: If a creature moves out of your melee attack range, you can spend 1 AP as a reaction to make an attack against that creature.

<span id="movement-reaction"></span>**Movement Reaction**: You can spend 1 AP as a reaction to reposition on the battlefield or turn to face an approaching enemy. If you leave a creature's attack range, they can choose to make a reprisal attack against you.

Skills, abilities, and spells can grant other reactions, such as Bolster, Pretermit, or a counter (see *[Magic Mastery](../magic/index.md), [Duels](../magic/index.md#duels)*).

### Movement

<span id="speed"></span>**Speed.** Your speed is 3 + your Agility tier, minus 1 if you are Small. Each point of speed is one 5-foot square of movement for each AP you spend moving. Creatures add bonuses for size and for running, flying, or swimming (see *[Monster Manual](../bestiary/creature-rules.md)*, *[Speed](../bestiary/creature-rules.md#speed)*).

A single movement up to the creature's movement speed. Costs 1 AP.

- If you move less than your movement speed and take a different action, you must use another AP to move again.
- Movement can be used as an action, or taken as multiple actions. When taken multiple times in a row, each movement action after the first movement is increased by half (rounded down).
- Movement can be used as a reaction to change who you are facing, such as turning to face an approaching enemy so that they are not behind you.
- Movement can be used as a reaction to change position on the battlefield, but if you leave a creature's attack range, they can choose to make a reprisal attack against you.

### Terrain

- <span id="rugged-terrain"></span>**Rugged Terrain**: Mud, deep snow, sand, dense undergrowth, rubble, shallow water, thick brush.
    - Moving through Rugged terrain costs double movement.
- <span id="unstable-terrain"></span>**Unstable Terrain**: Ice, slick stone, mossy surfaces, wet ship decks, loose scree, rain-slicked slopes.
    - A creature moving through Unstable terrain must succeed on an Agility trial, as determined by the GM, or fall [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.").
- <span id="hazardous-terrain"></span>**Hazardous Terrain**: Fire, acid pools, caltrops, thorn thickets, boiling mud.
    - A creature in Hazardous terrain takes 1 damage of the appropriate type. The damage may be triggered by entering or ending a turn in the terrain (e.g., fire) or movement (e.g., caltrops). Specific hazards may impose additional effects at the GM's discretion.
- <span id="elevation"></span>**Elevation**: A creature with elevation over its target gains Dominance on attack and defense rolls against that target. A creature attacking a target with elevation has Impotence on attack and defense rolls against that target.

### Interaction

An interaction is any use of an item or retrieval of an object. Getting an item into your hand costs AP based on where it is; using it then costs whatever that item requires (drinking a potion is 1 AP; a scroll is 2 AP).

- <span id="quick-items"></span>**Quick Items** cost nothing to retrieve, so a quick item costs only its use (therefore, taking a vial of alum from your small pouch and using it to stop bleeding requires 1 AP). You can use a quick item you did not declare, even in place of something you did declare, as long as the item is no slower than your phase. A scroll is the exception: it is a spell, and it must be declared (see *Skill Mastery, [Reading Scrolls](../skills/trade/index.md#reading-scrolls)*).
- <span id="items-on-your-body"></span>**Items on your body** (a weapon in its sheath, or gear on a body slot or lashed outside a pack) cost 1 AP to draw.
- <span id="items-in-a-container"></span>**Items in a container** (a backpack, sack, chest, or saddlebag) cost 2 AP to retrieve. One retrieval gets everything you need from that container (therefore, to light a torch from your pack, you retrieve the torch and tinderbox for 2 AP, then light it with the tinderbox for 6 AP, requiring 8 AP total, about four rounds. This is why travelers keep a fire, a lantern, or slow match burning).
- Stowing an item requires 1 AP (therefore, stowing your backsword and drawing a rungu requires 2 AP).

### Casting

Refers to casting a spell. Costs vary by spell (typically 1 or 2 AP).

- You must choose the spell you are casting at the start of the round to determine your initiative phase.
- From the start of the round until your spell resolves, you are casting it. Most other actions, and some conditions, cost you the spell and its magan; see *[Magic Mastery](../magic/index.md), [Interrupted Casting](../magic/index.md#interrupted-casting)*. Because AP are spent when the spell resolves, you can still defend while casting, though the spell is lost.
- After the spell is cast, you can only cast another spell during the same round if the spell is a *reaction* and you have AP remaining. Only Fast spells (1-3 magan) can be cast as reactions, except counters, which are always reactions (see *Magic Mastery, [Duels](../magic/index.md#duels)*). A reaction spell is triggered by circumstances rather than declared at the start of the round (e.g., a defensive ward against an incoming attack, a magical counterattack after a successful defense). See [Magic Mastery](../magic/index.md) for full details.
- Material components in a Quick Item slot are drawn as part of casting. Any other component must already be in hand when you declare the spell; retrieving one from a container costs 2 AP.
- You can always cast a spell slower than the indicated casting speed without rolling a Miscast trial.

## Other Actions

| Action Type | AP Cost | Notes |
|:---|:---:|:---|
| Item, Catch | 1 | Reaction + Interaction |
| Item, Drop | 0 | Free action |
| Item, Pick Up | 1 | Action + Interaction |
| Item, Retrieve Stored | 2 | Action + Interaction |
| Item (to ally), Toss | 1 | Action + Interaction |
| Mount, Control Frightened | 1 | Action |
| Mount, Direct | 1 | Action + Movement |
| Mount or Dismount | 1 | Action + Movement |
| Open / Close Door | 1 | Action + Interaction |
| [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."), Fall | 1 | Action + Movement |
| [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."), Stand from | 1 | Action + Movement |
| Skill, Active | 1 | Action |
| Skill, Use Lore | 0 | Free action |
| Trial | 0 | Free action |
| Torch / Lamp, Extinguish | 1 | Action + Interaction |
| Torch / Lamp, Light | 1 | Action + Interaction |
| Torch / Lamp, Light (tinderbox) | 6 | Action + Interaction |
| Weapon, Stow | 1 | Action + Interaction |
| Weapon, Draw | 1 | Action + Interaction |
| Shield, Remove (strapped) | 1 | Action + Interaction |

*Lighting with a tinderbox (striking sparks into tinder and nursing a flame) takes 6 AP; the GM may adjust it by 2 AP for conditions. Lighting from an existing flame, or lighting a fuse or primed wick from slow match, is the 1 AP Light action.*

## Wounds, Injuries, and Trauma

### Wounds

A wound is reflected by a decrease in your health pool. When you take damage to your health, you have suffered a wound. Wounds can be healed with rest, food, a healer's Wound Kit, or magic.

### Injuries

When you reach 0 health, you suffer an Injury. Treating an Injury requires a healer's Injury Kit (Exploration Round) or magical healing.

### Traumas

Traumas are severe physical consequences: broken bones, collapsed lungs, internal bleeding. Traumas occur when you take health damage while at 0 health and fighting on. Each Trauma is rolled on the Trauma table. Treatment for traumas varies based on the severity.

#### Trauma Table

<span id="trauma-settings"></span>**Trauma settings (optional).** The GM chooses how often Traumas occur. Each setting includes those above it.

- <span id="realistic"></span>**Realistic:** a Trauma occurs when a character takes health damage while at 0 health and fighting on (see *[Fighting On](#fighting-on)*). This is the default rule.
- <span id="brutal"></span>**Brutal:** as Realistic, and a character also suffers a Trauma on reaching 0 health (in addition to the Injury), and on rolling a natural minimum on a trial to resist damage.
- <span id="deadly"></span>**Deadly:** as Brutal, and whenever a character takes health damage from a hit whose dice explode, they make an Endurance trial (Straightforward, 4) or suffer a Trauma.

The Trauma and Insanity settings are chosen separately; a table can run Brutal Traumas with Realistic Insanity, or any other combination.

Roll 1d100 for each Trauma. Each Trauma has a tier:

- <span id="minor"></span>**Minor:** heals within days, with rest or a single treatment.
- <span id="severe"></span>**Severe:** heals only over weeks of rest or repeated tending; some must be treated first (set, reset, or tended).
- <span id="grievous"></span>**Grievous:** heals only with magic, while Damage Age still reaches it ([Magic Mastery](../magic/index.md), [Restoring Traumas](../magic/index.md#restoring-traumas)). After that, it is permanent.

Days' rest means full days of downtime with no travel, combat, or work.

Healer treatments use *Treat Trauma* (Skill Mastery, Trade, [Healer Discipline](../skills/trade/index.md#healer-discipline)), rolled against the Trauma's tier: Minor 5, Severe 7, Grievous 9.

| d100 | Trauma | Tier | Mundane recovery |
|:---:|:---|:---:|:---|
| 1 | **Lose your left eye.** Penalty -1 on Perception trials that rely on sight and on ranged attack rolls. If you have no eyes left, you are [Blinded](conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority."). | Grievous | None |
| 2 | **Lose your right eye.** As left eye. | Grievous | None |
| 3–5 | **Close Call!** No Trauma. |  |  |
| 6 | **Lose your left hand.** You cannot hold anything with two hands, and you can hold only one object at a time. A hook or iron hand can lessen the effect. | Grievous | None |
| 7 | **Lose your right hand.** As left hand. | Grievous | None |
| 8–10 | **Close Call!** No Trauma. |  |  |
| 11 | **Lose your left foot.** Movement halved, and you need a cane, crutch, or prosthesis to move. When you move more than once in a round, make a Physique trial (Straightforward, 4) or fall [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."). Penalty -2 on trials to keep your balance. After a year with a prosthesis, or after gaining 5 character levels, you move normally. | Grievous | None |
| 12 | **Lose your right foot.** As left foot. | Grievous | None |
| 13–15 | **Close Call!** No Trauma. |  |  |
| 16 | **Punctured Lung.** You have 1 AP per round. If both lungs are punctured, you are suffocating: advance [Exhausted](conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier at the end of each of your turns. | Severe | Tend (Healer) + 30 days' rest |
| 17–18 | **Lose a finger.** Penalty -1 on trials using fine tools with that hand (does not stack). Roll 1d10 from the left little finger to find which. If a hand loses all its fingers, treat it as a lost hand. | Grievous | None |
| 19–20 | **Close Call!** No Trauma. |  |  |
| 21 | **Lose your left ear.** Penalty -1 on Perception trials that rely on hearing. Bonus +1 on Presence (Intimidation) trials. If you have no ears left, you are [Deafened](conditions.md#deafened "Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial."). | Grievous | None |
| 22 | **Lose your right ear.** As left ear. | Grievous | None |
| 23 | **Lose your nose.** Penalty -2 on Charisma trials and on Perception trials that rely on smell. Bonus +2 on Presence (Intimidation) trials. | Grievous | None |
| 24–25 | **Close Call!** No Trauma. |  |  |
| 26 | **Blurred Vision.** Penalty -1 on Perception trials that rely on sight and on ranged attack rolls. | Minor | 3 days' rest |
| 27 | **Break your left arm.** You cannot hold anything with two hands, and you can hold only one object at a time. | Severe | Set (Healer) + 30 days' rest |
| 28 | **Break your right arm.** As left arm. | Severe | Set (Healer) + 30 days' rest |
| 29–30 | **Close Call!** No Trauma. |  |  |
| 31 | **Break your left leg.** Movement halved, and you need a cane or crutch to move. When you move more than once in a round, you fall [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."). Penalty -1 on trials to keep your balance. | Severe | Set (Healer) + 30 days' rest |
| 32 | **Break your right leg.** As left leg. | Severe | Set (Healer) + 30 days' rest |
| 33 | **Ringing Ears.** Penalty -1 on Perception trials that rely on hearing. | Minor | 3 days' rest |
| 34–35 | **Close Call!** No Trauma. |  |  |
| 36–37 | **Limp.** Movement reduced by 1 (5 ft). When you move more than once in a round, make a Physique trial (Easy, 3) or fall [Prone](conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."). | Minor | 10 days' rest |
| 38 | **Teeth Knocked Out.** Penalty -1 on Charisma trials. Spells with verbal components require a miscast trial. A prosthesis removes the effect. | Grievous | Prosthesis |
| 39–40 | **Close Call!** No Trauma. |  |  |
| 41 | **Cracked Sternum.** You have 1 AP per round. Whenever you spend AP to attack or cast a spell, make an Endurance trial (Straightforward, 4); on failure, the AP is spent with no effect. | Severe | 10 days' rest |
| 42–43 | **Skull Fracture.** Whenever you spend AP to attack or cast a spell, make an Endurance trial (Straightforward, 4); on failure, the AP is spent with no effect. | Severe | 30 days' rest |
| 44–45 | **Close Call!** No Trauma. |  |  |
| 46–47 | **Left Leg Bruised to the Bone.** Penalty -1 on Strength and Physique trials that use your legs. | Minor | 3 days' rest |
| 48–49 | **Right Leg Bruised to the Bone.** As left leg. | Minor | 3 days' rest |
| 50 | **Left Arm Bruised to the Bone.** Penalty -1 on Strength and Physique trials that use your arms. | Minor | 3 days' rest |
| 51 | **Right Arm Bruised to the Bone.** As left arm. | Minor | 3 days' rest |
| 52–53 | **Close Call!** No Trauma. |  |  |
| 54–56 | **Left Shoulder Dislocated.** You cannot hold anything with two hands, and you can hold only one object at a time. | Minor | Reset (Healer) + 3 days' rest |
| 57–59 | **Right Shoulder Dislocated.** As left shoulder. | Minor | Reset (Healer) + 3 days' rest |
| 60–61 | **Close Call!** No Trauma. |  |  |
| 62–64 | **Broken Ribs.** Whenever you spend AP to attack or cast a spell, make an Endurance trial (Straightforward, 4); on failure, the AP is spent with no effect. | Severe | 10 days' rest |
| 65–66 | **Festering Wound.** The wound turns. Advance [Infected](conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased.") by 1 tier (interval 24 hours; Endurance DC equal to the inflicting creature's ability DC, Division + 1; for other sources, the GM sets it, default Tricky 5). While the wound remains, a successful trial holds the condition instead of reducing it. While you are Diseased, your maximum health drops by 1 every 24 hours; at 0, you die. | Severe | Tend daily (Healer), 10 successes |
| 67–70 | **Close Call!** No Trauma. |  |  |
| 71–73 | **Open Wound.** You lose 1 health every hour until the bleeding is stopped (Healer, one exploration round). | Minor | Stop the bleeding (Healer) |
| 74–76 | **Internal Injury.** Whenever you spend AP to attack or cast a spell, make an Endurance trial (Straightforward, 4); on failure, the AP is spent with no effect. | Severe | Tend daily (Healer), 10 successes |
| 77–80 | **Close Call!** No Trauma. |  |  |
| 81–82 | **Horrible Scar.** Penalty -2 on Charisma trials. Bonus +2 on Presence (Intimidation) trials. While Damage Age still reaches the wound, a successful Healer treatment (T3) reduces it to a Minor Scar. | Grievous | Healer, same day only |
| 83–85 | **Painful Scar.** In rain, sleet, hail, or snow, whenever you spend AP to attack or cast a spell, make an Endurance trial (Straightforward, 4); on failure, the AP is spent with no effect. While Damage Age still reaches the wound, a successful Healer treatment (T3) reduces it to a Minor Scar. | Grievous | Healer, same day only |
| 86–99 | **Minor Scar.** No mechanical effect. |  |  |
| 100 | **Broken Back.** You lose the use of your legs and cannot walk. | Grievous | None |

### Death

Reaching 0 Health

#### When you reach 0 health:

- You suffer an Injury (see *[Conditions](conditions.md)*).
- Your dying timer begins. You have a number of rounds equal to your Endurance tier before you die.
- Roll an Endurance trial against the health damage that reduced you to 0. Only the damage dealt to health counts toward this DC, not damage absorbed by armor resistance or durability. On a success, you may choose to remain conscious and continue fighting. On a failure, you fall unconscious.

#### Fighting On

If you succeed on the Endurance trial and choose to remain conscious at 0 health:

- Any health damage you take results in a Trauma.
- Each time you suffer a Trauma, roll an Endurance trial against the health damage taken. On a failure, you fall unconscious.
- Your dying timer continues to run. If the timer expires, you die regardless of whether you are still standing.

#### Going Down

- If you fail the Endurance trial or choose to fall unconscious:

- You are unconscious and cannot take actions.
- Your dying timer continues to run. If the timer expires, you die.

## Triage

Any character adjacent to a dying creature can spend 2 AP to stabilize them. No trial is required. Stabilization stops the dying timer. The creature remains unconscious at 0 health. Recovery requires medicine treatment (10 minutes) or healing magic.
