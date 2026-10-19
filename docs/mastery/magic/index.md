---
generated_by: tools/sync_mastery.py
---

# Magic

The capacity to work magic is rare, and even in those in whom it manifests, difficult to control and more difficult to master. Wielders of the various forms of magic will find that impulsivity and carelessness will quickly result in their swift departure from this world with as much verve as their enemies or allies. Moreover, the dangers of magic extend to those around them, making its use often distrusted or unlawful in civilized circles. Mishandling magic stains the body and soul of reckless casters, creating visible signs of the craft.

## Spells

A spell is a specific combination of a *form* and a *command* that produces a magical outcome. The form is the sphere of influence (fire, stone, void) and the command is the direction given within that sphere (to destroy, to protect, to transform). Beyond form and command, a spell's power is shaped by its reach, scale, duration, and conditions, all of which determine its cost in *[magan](#magan)*. Extending a spell beyond what the caster has practiced invites a *[miscast](#miscast)* chance that can produce dangerous and unpredictable effects.

A spell in Mastery is a specific configuration of form, command, and parameters. Obliterate Fire at close range, single target, instantaneous is one spell. Obliterate Fire at distant range, large area, instantaneous is a different spell. Both use the same form and command, but they are distinct spells with different magan costs and different levels of familiarity.

Cantrips are spells. An ability that spends magan without being cast from a form and a command, such as Imbue or a Spellcraft ability, is a magical ability, and it is a spell only if its text says so. Magical abilities count as magic for damage and resistance. Using one while you cast a spell leaves that spell intact, unless the ability is a defense.

## Spell Sources

Practitioners cast one of four types of magic based on their class: Priscan, Occult, Theurgic, or Telluric. The type of magic determines how the practitioner discovers and records spells and the attribute that governs the power of their magic.

Beyond the spells their class grants at training (see your class description), all casters learn new spells through a two-phase process: discovery in the field and encoding during downtime. You can learn and cast spells only in forms in which you have at least Untrained mastery. Spells must be sought out in the world; expanding one's repertoire requires finding magic and investing the time and resources to make it one's own.

The cost to encode a spell is universal across all traditions: the spell's magan cost squared, in silver shillings, plus one day of downtime per magan.

| Magan | Cost (ss) | Cost (gs) | Time |
|:---:|:---:|:---:|:---:|
| 1 | 1 ss | 0.05 gs | 1 day |
| 2 | 4 ss | 0.2 gs | 2 days |
| 3 | 9 ss | 0.45 gs | 3 days |
| 4 | 16 ss | 0.8 gs | 4 days |
| 5 | 25 ss | 1.25 gs | 5 days |
| 6 | 36 ss | 1.8 gs | 6 days |
| 8 | 64 ss | 3.2 gs | 8 days |
| 10 | 100 ss | 5 gs | 10 days |
| 15 | 225 ss | 11.25 gs | 15 days |
| 20 | 400 ss | 20 gs | 20 days |

### Discovery

Every source of magic (a holy site, a font, a sacred site, or occult writings and teachings) holds one or more forms, which the GM names. At the source, perform your tradition's practice and roll your casting attribute tier die + your mastery die in the source's form, then add your mastery level in that form. The result is the most magan you can take from the source: the GM chooses a spell in that form whose cost is no higher than the result. The encoding cost limits it further. You cannot learn a spell whose encoding cost you cannot pay, and paying less yields a lesser spell.

You can draw from the same source again each time your mastery in its form reaches a new tier.

### Development

You can develop a variation of a spell you already know, such as turning a close-range fire bolt into a larger fireball, through study, prayer, meditation, or practice. Name the variation: its magan sets the encoding cost and time, paid in full when the work begins. Development needs no discovery.

If the variation's magan exceeds your Form DC, make a trial at the midpoint of the work: your casting attribute tier die + your mastery die in the spell's form, against DC 2 + (magan − Form DC). On a failure, choose:

- *Abandon:* stop work. Half the remaining time and half the remaining cost are saved.
- *Commit:* finish the work and pay in full. The variation fails, but you have Dominance on your next attempt at the same variation.

### Occult Magic

*Bahador, Magus*

Occult magic is the magic of understanding, the practice of uncovering the hidden structure of reality in order to manipulate its facets and produce desired outcomes. Occult magic is derivative by nature, studying and systematizing the principles that underlie all other sources of magic. Occult casters pursue magic through study and intellectual rigor.

A practitioner of occult magic uses the Intelligence attribute to cast spells. To discover new spells, the caster studies occult writings and teachings: tomes, runic inscriptions, carved tablets, found grimoires, or the instruction of other practitioners. These teach principles rather than finished spells. The GM names the forms they cover, and each form is studied as its own source (see *[Discovery](#discovery)*). Scrolls are the exception: a scroll holds one fixed spell and is learned by casting it, which consumes the scroll (see *[Skill Mastery, Scribe: Reading Scrolls](../skills/index.md)*). The caster transcribes each spell into their grimoire using the Scribe discipline. See *Codex* in the Equipment chapter for grimoire specifications.

### Priscan Magic

*Cursed, Gray Elf, Gnome, Sylvan Elf*

Priscan magic is the magic of numen, also known as the magic of thought. Practitioners of priscan magic tap into the latent power of numen, beings who helped shape the world and whose magic persists in fonts of raw power throughout it, whether the numen themselves are dead, lost, diminished, or simply inattentive.

A practitioner of priscan magic uses the Perception attribute to cast spells. To discover new spells, the caster must sense and make contact with a font of priscan magic during exploration. The method of encoding and the anchor in which spells are stored vary by class: bound into objects, internalized through the bloodline, documented in a compendium, or inscribed on the skin. See your class description for details.

### Telluric Magic

*Druid, Fili*

Telluric magic is the magic of the world itself. At the point of creation, magic was imbued into all living things, and those who practice telluric magic tap into that source. This magic renews with the renewal of life and is accessed through direct communion with the natural world: experience, practice, and oral tradition.

A practitioner of telluric magic uses the Wisdom attribute to cast spells. To discover new spells, the caster must find a natural sacred site: a ley line, faerie circle, sacred grove, or similar place of power. The Druid takes a natural token from the site to anchor the memory. The Fili composes a linguistic fragment, an alliterative verse, a kenning, a mnemonic line that encodes the magical principle experienced at the font. During encoding, the caster internalizes the spell through repeated practice and meditation, making a sacrifice or offering to nature equal to the encoding cost.

Telluric casters carry their spells in memory alone. To the oral tradition, spoken knowledge is alive; writing embalms it, keeping it dead and denying it the cycle of decay and renewal. Spells pass from teacher to student, voice to voice, generation to generation. A telluric caster's repertoire travels wherever they go, bound to the mind. If a telluric caster dies untaught, their spells die with them.

### Theurgic Magic

*Avenger, Cleric, Paladin*

Theurgic magic is the magic granted by numen, powerful beings that helped to create the cosmos, the world, or various other planes of existence. They grant magic to followers who perform deeds in their name or further their cause. Theurgic magic is effectively endless, extending to the edges of the universe, but it reaches mortals only through devotion and service.

A practitioner of theurgic magic uses the Charisma attribute to cast spells. To discover new spells, the caster must find a holy site (a shrine, temple, roadside cross, ancient holy ground, or blessed spring) and offer a brief prayer, recording a fragment of the revelation in their prayer book. Different sites may offer different revelations, shaped by the nature of the site and the deity. During encoding, the caster returns to a holy site, makes a tithe equal to the encoding cost, and prays over the fragment until the full revelation is received and recorded.

## Magan

*Magan* is the term practitioners use to indicate their capacity to wield magical power. A practitioner without magan has drained themselves of their power. Depending on the location and training, practitioners refer to this power as *mana*, *vis*, *mægn*, or any number of similar terms. Casting a spell expends magan from the practitioner's pool, and more powerful spells cost more magan.

### Magan Pools

A practitioner's magan pool is determined by their maximum mastery potential. Each time a practitioner increases their casting attribute tier, they roll their casting attribute tier die and add the result to their total magan permanently.

| Maximum Mastery | Base Magan | Classes |
|:---|:---|:---|
| Expert | Tier + Total TD | Avenger, Bahador, Paladin |
| Master | ½ Score + Total TD | Fili, Gnome, Sylvan Elf |
| Grand Master | Score + Total TD | Cleric, Cursed, Druid, Gray Elf, Magus |

*Total TD = the cumulative total of all tier dice rolled when increasing the casting attribute tier.*

### Magan Recovery

Magan is recovered through rest and sustenance; see *[General Rules, Resting](../core/exploration-and-travel.md#resting)*.

---

## Forms

Every spell draws on a *form*, the sphere of influence that the spell commands. There are eight forms, divided into two categories. The four *[elemental forms](#elemental-forms)* represent the physical building blocks of the world. The four *[entropic forms](#entropic-forms)* represent the conceptual and spiritual domains.

All casters have access to the four elemental forms. Access to the entropic forms is determined by class.

### Elemental Forms

#### Fire

The form of fire encompasses the magic of flame, *destruction*, *transformation*, and *illumination*.

**Destruction.** Fire is the ultimate cleanser, capable of immolating any other type of matter. Spells in the fire form may be used to destroy physical objects.

**Transformation.** Fire is the philosophical and alchemical agent of metamorphosis. Spells in the fire form may be used to drive change through heat: melting, boiling, scorching, and burning living matter to ash.

**Illumination.** Fire is a source of light. Spells in the fire form are required to produce any type of illumination.

#### Sea

The form of sea is an unpredictable form of magic, ultimately associated with the *three states of water*, *cleansing and corrosion*, and *changeability*.

**Three States.** Sea is the magic of divergence, representing the three states of matter. Spells in the sea form may be used to create fog, rain, snow, ice, and flowing water, making its versatility remarkably effective.

**Cleansing and Corrosion.** Sea is the magic of solubility, breaking down materials into their most basic forms. Spells in the sea form may be used to clean but also to erode, and as such are used for purification as much as for corrosiveness.

**Changeability.** Sea is the philosophical notion of natural or unintended change. Spells in the sea form may create change, as water itself is necessary for change, shaping land, dousing fire, and feeding storms.

#### Sky

The form of sky is a tumultuous form of magic that encompasses the spectrum of both the gentle breeze and the raging storm, a means of *wind*, *storm*, and *movement*.

**Wind.** Sky is both an element of cooling reprieve and raging destruction. Spells in the sky form may be used to eliminate threats or to relocate them, spreading a fire, allowing flight, pulling an enemy to the ground, or removing the air from their lungs.

**Storm.** Sky is the destructive aspect of sky magic, the threat of thunder, lightning, and chaos. Spells in the sky form may be used to create deafening thunder, fire devastating bolts of lightning, or combine these elements with whipping winds to create utter chaos.

**Movement.** Sky is the philosophical notion of movement. Spells in the sky form may be used to increase or decrease mobility, allowing the air around creatures to aid or hinder them.

#### Stone

The form of stone is a passive and stable form of magic associated with confidence, endurance, and permanence, acting as a means of accessing *metal and mineral*, *structure*, and *solidity and granularity*.

**Metal and Mineral.** Stone is the magic of the world's core physicality in terms of metal and mineral. Spells in the stone form may be used to bolster or repair metalworks and stoneworks, and to transform unworked stone and metal into usable objects.

**Structure.** Stone is the physical foundation of material existence. Spells in the stone form may be used to reinforce physical integrity, fortifying walls, mending broken bones through the minerals that comprise them, or restoring the structural soundness of objects and creatures alike.

**Solidity and Granularity.** Stone is the philosophical notion of solidity and granularity. Spells in the stone form may be used to alter the state of an object in ways that represent its natural range, turning stone walls to sand or fusing metal links into a solid whole.

### Entropic Forms

#### Primal

The form of primal is the magic of living matter, connected to *living beings*, *organic growth*, and *the cycle of life*.

**Living Beings.** Primal is the domain of animated organic substance, matter in which the sacred spark and profane fuel are unified and active. Spells in the primal form may be used to affect living beings by altering their physicality, calling them for aid, or taking on their form.

**Organic Growth.** Primal is the relentless push of life to expand, take root, and endure. Spells in the primal form may be used to cultivate plant life as barriers, poisons, raw materials, or sustenance.

**The Cycle of Life.** Primal is the full arc from growth to decline, the understanding that both are necessary and neither is corruption. Spells in the primal form may be used to heal wounds, restore corrupted cycles, allow rot to continue from profane undeath, or encourage life in desolated barrens.

#### Profane

The form of profane is the magic of dead matter, connected to *inert material*, *the threshold of death*, and *disease and decay*.

**Inert Material.** Profane is the domain of organic material at rest: bone, ash, horn, shell, and all matter from which life has passed. Spells in the profane form may be used to create, shape, and manipulate dead material.

**The Threshold of Death.** Profane is the boundary where life ends and the cycle continues. Spells in the profane form may be used to animate the dead, hasten a living creature toward death, or manipulate the forces that govern the passage from life to stillness.

**Disease and Decay.** Profane is the return of all living things to the earth, the slow unwinding of what was once whole. Spells in the profane form may be used to inflict disease, accelerate decomposition, or weaken a creature's physical resilience.

#### Sacred

The form of sacred is the magic of vital energy, connected to *the animating impulse*, *radiation*, and *cosmic force*.

**The Animating Impulse.** Sacred is the energy that drives all living processes, the force that stirs matter into motion and sustains what already moves. Spells in the sacred form may be used to invigorate, sustain, accelerate, or overwhelm the vital processes of living creatures.

**Radiation.** Sacred is energy that emanates outward, radiant force that acts on everything it touches. Spells in the sacred form may be used to project force, create barriers of radiant energy, or bathe an area in sacred power, whether to nurture or to scour.

**Cosmic Force.** Sacred is the raw power of stellar transformation: the energy released when matter changes state. Spells in the sacred form may be used to channel this force as creation or destruction, healing or harm, depending on the caster's intent and control.

#### Void

The form of void is the magic of the space between what *is* and what is *perceived* or *experienced*. Void operates on consciousness, sensation, and the relationship between ideal form and physical reality, making it simultaneously the most subtle and the most reality-defying of all forms.

**Consciousness.** Void is the magic of the mind and the self. Spells in the void form may be used to alter a creature's sense of self, manipulate emotions, inject or suppress thoughts, or enchant another's will. Charms, emotional manipulation, and control effects are expressions of void reaching into the space where consciousness and will intersect.

**Perception.** Void is the magic of sensory experience and its manipulation. Spells in the void form may be used to create illusions, alter what a creature sees, hears, feels, smells, or tastes, or impose a false reality so convincing that it becomes nearly impossible to distinguish from the real. An illusion is void asserting a false form over reality.

**Form.** Void is the magic of the relationship between ideal form and physical reality. Spells in the void form may be used to give shape to the practitioner's will: an arrow, a wall, a blade, or whatever form the caster envisions to make their will present and tangible within the world.

### Material and Energy Forms

| | Energy | Material |
|:---|:---|:---|
| **Elemental** | Fire, Sky | Sea, Stone |
| **Entropic** | Sacred, Void | Primal, Profane |

Energy forms produce force. Material forms produce physical substance. This classification determines how spells interact with armor (see [Damage](#damage)) and how barriers interact with weapons (see [Barriers](#barriers)).

### Class Form Access

All casters have access to the four elemental forms: Fire, Sea, Sky, and Stone. Access to the entropic forms is determined by class and listed below.

| Class | Tradition | Primal | Profane | Sacred | Void | Total |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
| Avenger | Theurgic | | ✓ | | | 5 |
| Bahador | Occult | | | | ✓ | 5 |
| Cleric | Theurgic | | * | * | | 5 |
| Cursed | Priscan | | ✓ | | ✓ | 6 |
| Druid | Telluric | ✓ | | | | 5 |
| Fili | Telluric | ✓ | | | | 5 |
| Gnome | Priscan | * | | | * | 5 |
| Gray Elf | Priscan | ✓ | | ✓ | | 6 |
| Magus | Occult | † | † | † | † | 6 |
| Paladin | Theurgic | | | ✓ | | 5 |
| Sylvan Elf | Priscan | ✓ | | | | 5 |

\* Choose one. † Choose any two.

---

## Commands

The command is the direction given to the magic, the action that the spell takes within the chosen form. A command to destroy (*[obliterate](#obliterate)*) produces a fundamentally different outcome than a command to transform (*[transmute](#transmute)*), even within the same form. Understanding the commands allows a practitioner to find creative applications for their magic beyond the obvious. There are eight commands.

The command and form matrix is a reasoning framework, not a lookup table. Some combinations are intuitive (*obliterate fire* burns, *transmute stone* reshapes metal), while others are esoteric or narrow. The system provides the tools to reason about any combination; it does not prescribe every possible outcome. Different practitioners will find different solutions to the same problem depending on which forms and commands they bring to the table.

#### Divine

To divine is to discover. When you cast a divine spell, you seek to acquire information about your surroundings, a creature, an object, or a distant location. Divination reveals what is concealed or unknown.

A practitioner might divine the location of a hidden creature, identify the nature of an enchantment on a locked door, or scry on a distant enemy encampment. Detection is always scoped to the forms the caster knows, and broad detection requires multiple forms and multiple casts. You might use *divine* with *[void](#void)* to detect consciousness, *divine* with *[fire](#fire)* to sense heat and active fire magic, or *divine* with *[stone](#stone)* to assess the structural integrity of a wall.

#### Enchant

To enchant is to fix a spell upon a target. When you cast an enchant spell, you are binding a magical effect to a creature, object, or area. An enchantment and a curse are the same magical operation, differing only in intent.

Enchantment encompasses the full spectrum of imposed conditions. A fire enchantment may ignite a creature, a stone enchantment may burden or petrify, and a void enchantment may alter emotions, befriend, terrify, or subjugate. Physical conditions such as [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") (Burning), [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), or [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn.") affect the target's body and can be applied to any creature regardless of its nature. [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") and [Controlled](../core/conditions.md#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.") reach through the form to touch the target's volition, requiring a connection between the form and the creature's classification (see *Exorcise: Connected Form*). Charmed alters the creature's attitude toward the caster but leaves its agency intact; the creature still acts on its own abilities and judgment. Controlled suppresses the creature's agency entirely, making it a puppet the caster directs. Enchantment also governs the binding of permanent magical effects to objects and the temporary enchantment of weapons in combat. See *Enchant* below for item enchantment mechanics.

#### Evoke

To evoke is to summon. When you cast an evoke spell, you are relocating existing substance from one place to another. The summoned material genuinely leaves its point of origin.

The form determines what you can summon. A fire practitioner draws heat and flame from existing sources. A stone practitioner pulls earth and metal from the ground. A sea practitioner draws water from nearby bodies. A sky practitioner draws wind and air from the surrounding atmosphere. A void practitioner relocates consciousness: memories, thoughts, and sensory experience. A sacred practitioner draws life energy from holy sites or living creatures. A primal practitioner draws living matter from natural growth. A profane practitioner draws dead matter from remains and decay. You might use *evoke* with *[fire](#fire)* to draw warmth from a distant forge into your frozen hands, *evoke* with *[stone](#stone)* to pull a wall of rock up from the earth beneath you, or *evoke* with *[void](#void)* to extract a memory from a creature's mind.

#### Exorcise

To exorcise is to compel a being across a boundary, to invoke or to banish. Exorcism targets creatures with will, compelling them from one state or location to another. Beings with will can resist the compulsion.

A practitioner may invoke a spirit, calling it forth from beyond a boundary, or banish one, driving it away. The form determines which beings the practitioner can compel, following the same connections that govern [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") and [Controlled](../core/conditions.md#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.") (see *Exorcise: Connected Form*). See *Exorcise* below for full mechanics.

#### Formulate

To formulate is to create. When you cast a formulate spell, you are bringing something into existence from nothing. The practitioner shapes magan through a form, and what emerges depends on the form's classification.

Material forms (Stone, Sea, Primal, Profane) create physical substance with mass and durability. Energy forms (Fire, Sky, Sacred, Void) create force with resistance. Material creations can be touched, broken, and stood upon. Energy creations radiate, push, burn, or resist, but have no physical mass to destroy. Both are temporary; when the magan is spent, the creation reverts to nothing.

Formulation can produce anything within the form's domain, limited only by the practitioner's imagination and mastery. You might formulate stone into a bridge, fire into a torch, primal into a thicket of thorns, or void into a wall that resists passage.

#### Obliterate

To obliterate is to destroy. When you cast an obliterate spell, you seek to unmake a target: a creature, an object, a structure, or part of any of these. Obliteration is the primary source of direct magical damage.

The form determines the nature of the destruction. Fire burns, stone crushes, sea corrodes, sky shreds. A practitioner might hurl a bolt of fire at an enemy, shatter a stone wall, or corrode the hinges of a locked gate. Obliterate is also used to remove magical effects: dispelling enchantments, unraveling illusions, or banishing conjured constructs.

#### Preservate

To preservate is to protect. When you cast a preservate spell, you seek to defend, shield, or preserve a creature, object, or area from harm. Preservate is the primary defensive command.

Preservation manifests as barriers, wards, durability pools, or resistances depending on the form and the nature of the threat. A fire practitioner might raise a heat barrier against cold, a stone practitioner might harden a creature's skin against impact, or a sacred practitioner might ward against profane corruption. How a given form protects against a given threat is adjudicated by the GM: fire magic warding against cold is intuitive; fire magic warding against a blade requires a more creative justification.

#### Transmute

To transmute is to transform. When you cast a transmute spell, you are reshaping, altering, or converting existing material within the form's domain, or morphing one creature's form into another. Transmutation can restore damage, but it cannot undo aging or decay. Restoring a wounded body or a broken blade undoes what was done to the thing; the change persists because the thing returns to what it was. Reshaping, converting, or morphing imposes something foreign; the change reverts when the spell ends because the material resists being what it is not. Aging, erosion, and natural decay are not damage; transmutation cannot undo them.

A practitioner might use *transmute* with *[sacred](#sacred)* to mend wounded flesh (restoration; the healing persists), *transmute* with *[stone](#stone)* to repair a cracked blade (restoration; the repair persists), or *transmute* with *[primal](#primal)* to take on the form of a beast (transformation; reverts when the spell ends). Transmute is the primary command for healing and repair.

---

## Casting Spells

Every spell has a magan cost determined by four axes. The base cost of any spell is 1 magan. Reach and scale add to this base. Duration, condition tier, and effects multiply the result.

**Magan Cost = (Base + Reach + Scale) × Duration × Condition Tier × Effects**

A spell cast at a target it cannot affect fails, and its magan is spent. The GM adjudicates whether a target qualifies.

### Reach

How far away is the target or the point of effect?

| Category | Description | Modifier |
|:---|:---|:---:|
| Touch/Self | Physical contact or self-targeting | +0 |
| Close | Within 30 feet | +1 |
| Distant | Within 100 feet | +2 |
| Far | Line of sight | +4 |

Line of sight is the hard ceiling on spell range. You must be able to see your target.

### Scale

How large is the effect's footprint? Measured in squares (5 ft × 5 ft). Arrange your squares however makes sense for the fiction: line, sphere, cone, wall, or any other shape. The GM adjudicates edge cases.

| Category | Description | Modifier |
|:---|:---|:---:|
| Personal | 1 target or 1 square | +0 |
| Small | 2-4 squares (up to 2×2, roughly 10×10 ft) | +1 |
| Large | 5-9 squares (up to 3×3, roughly 15×15 ft) | +2 |
| Huge | 10-16 squares (up to 4×4, roughly 20×20 ft) | +3 |
| Epic | 17-25 squares (up to 5×5, roughly 25×25 ft) | +4 |

### Duration

How long does the effect last? All spells lasting beyond the current round require *[concentration](#concentration)* (see Concentration below).

| Category | Description | Multiplier |
|:---|:---|:---:|
| Instantaneous | This round | ×1 |
| Short | This encounter or scene | ×3 |
| Long | Half the adventuring day | ×5 |
| Extended | The adventuring day | ×8 |

The game operates on two timescales: combat time (1 round ≈ 10 seconds) and exploration time (1 round ≈ 10 minutes). Duration categories are tied to narrative units, and the GM determines when a scene or encounter ends. When the game shifts between timescales, spell durations compress accordingly. An instantaneous spell cast during exploration becomes one combat round if combat breaks out. A short-duration spell maps to the encounter. Long and extended spells persist across timescale transitions because they are paced to the adventuring day.

### Condition Tier

If the spell imposes a condition, the tier of the condition multiplies the cost. Higher-tier conditions are dramatically more powerful.

| Condition Tier | Chained | Simple | Multiplier |
|:---|:---|:---|:---:|
| Tier 1 | Lured, Compelled, Dazed, Shaken | [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any)."), [Deafened](../core/conditions.md#deafened "Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial.") | ×1 |
| Tier 2 | Beguiled, Possessed, Stunned, Frightened | [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.") | ×3 |
| Tier 3 | Enthralled, Dominated, Paralyzed, Panicked | [Blinded](../core/conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority.") | ×6 |

Simple conditions that can be imposed by spells are assigned a tier for costing purposes. [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") and [Deafened](../core/conditions.md#deafened "Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial.") are Tier 1. [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.") is Tier 2. [Blinded](../core/conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority.") is Tier 3. Simple conditions without a tier designation ([Helpless](../core/conditions.md#helpless "Cannot make defense rolls. Lose Agility contribution to armor resistance. Ranged attacks auto-hit. Auto-fail Agility and Physique trials. A creature that is also Catatonic auto-fails Strength trials."), [Catatonic](../core/conditions.md#catatonic "Cannot cast spells, cannot speak, cannot concentrate (automatically loses active concentration). Auto-fail mental attribute trials. Physical body unaffected."), [Unconscious](../core/conditions.md#unconscious "Considered Helpless and Catatonic. Unaware of surroundings and events."), [Injured](../core/conditions.md#injured "Each untreated Injury applies a cumulative Penalty -1 to all rolls. Injuries do not deteriorate naturally without treatment.")) cannot be imposed directly by spells.

You select the condition tier at the time of casting and pay the full cost at that tier. (Fili Song advances conditions over time; see the [Fili](../characters/human-classes/fili.md) class.)

Barriers and environmental effects (fog, dust, magical darkness) can produce [Cover](../core/conditions.md#cover "Physical barrier between attacker and target Tiers: Partial Cover, Majority Cover, Total Cover.") or [Concealed](../core/conditions.md#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") as properties of the terrain. Cover from a physical barrier is determined by geometry: how much of the target is behind the barrier relative to the attacker. Concealment from darkness, fog, smoke, or dust follows *[General Rules, Light and Visibility](../core/exploration-and-travel.md#light-and-visibility)*: magical darkness is ambient light or absolute darkness, and a fog or smoke spell is haze with a sight range the spell sets. A spell that produces a higher tier of Cover or Concealed on a specific target uses the condition tier multiplier above.

### Effect Stacking

A spell can combine multiple effects in a single casting. Each additional effect beyond the first adds ×1 to the Effects multiplier.

| Effects | Multiplier | Example |
|:---|:---:|:---|
| 1 effect | ×1 | Fire bolt (damage only) |
| 2 effects | ×2 | Fire bolt + burning (damage + condition) |
| 3 effects | ×3 | Fire + burning + exhausted (damage + 2 conditions) |
| 4+ effects | ×4+ | Each additional effect adds ×1 |

An effect is a damage roll, a healing or repair roll, or a condition application. A spell can include at most one damage roll. Healing and repair can be doubled (rolling ATD + MTD twice instead of once counts as 2 effects), but damage cannot; magic bypasses armor, and doubled damage output against health pools produces lethality disproportionate to the magan cost.

When a spell imposes multiple conditions, all conditions must be the same tier. The condition tier multiplier applies once.

**Combining commands.** Enchant is the only command that can be combined with another command in a single spell. The Effects multiplier prices the combination. Each condition imposed on an unwilling target is resolved with its own independent attribute trial (see [Resisting Spells](#resisting-spells)). [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") applied as a rider to a damage roll is the exception: if the damage lands, the Attrition applies with it, with no separate trial. Positive conditions on willing targets require no trial.

### Components

Every spell assumes you are using a focus, speaking verbal components, and performing somatic gestures. Omitting any of these adds +1 magan to the base cost (before multipliers).

| Component | Default | If Omitted |
|:---|:---:|:---:|
| Focus | Included (+0) | +1 magan |
| Verbal | Included (+0) | +1 magan |
| Somatic | Included (+0) | +1 magan |

**Focus.** An item that channels your power: a pectoral, a staff, a sprig of holly, a shrunken head. Requires one hand.

**Verbal.** Words spoken to give the spell substance. A gagged or silenced caster pays the +1 cost.

**Somatic.** Physical movements required to cast. Requires that the only items in your hands are your focus and/or material components. A restrained caster pays the +1 cost.

*Example: A close-range, instantaneous charm normally costs (1 + 1) × 1 × 1 = 2 magan. Casting it subtly, with no verbal or somatic components, costs (1 + 1 + 1 + 1) × 1 × 1 = 4 magan.*

A spell cast without verbal and somatic components cannot be seen as it is cast, so it cannot be countered until it resolves (see *[Duels](#duels)*).

### Material Components

Material components are consumed during casting to reduce the magan cost. The more valuable the material, the greater the reduction. Material components can bring expensive spells into reach.

| Component Tier | Magan Reduction |
|:---|:---:|
| Serf (S) | -1 |
| Peasant (P) | -2 |
| Knight (K) | -3 |
| Burgher (B) | -4 |
| Magnate (M) | -5 |
| Noble (N) | -6 |
| Royal (R) | -8 |

Only 1 material component can be used per spell and material components cannot reduce a spell's cost below 1 magan.

### Spell Speed

Spell speed is determined by the spell's magan cost before material component reductions.

| Magan Cost (Pre-Component) | Phase | AP Cost |
|:---|:---:|:---:|
| 1-3 | Fast | 1 |
| 4-6 | Moderate | 1 |
| 7-11 | Slow | 1 |
| 12+ | Slow | 2 |

You have 2 AP per round, which can be spent on any combination of casting, attacking, defending, or moving. Cheap spells act early in the round. Expensive spells act late, giving enemies and allies time to act first. Spells costing 12 or more magan consume your full round: 2 AP, both spent during the Slow phase.

**Reaction Casting.** Fast spells can be cast as reactions. A reaction spell is triggered by circumstances rather than declared at the start of the round: a Preservate ward in response to an incoming arrow, a Flame Dart as a magical counterattack after a successful defense. Reaction spells cost 1 AP and follow the same trigger framework as other combat reactions. Apart from counters, only Fast spells (1-3 magan) qualify; Moderate and Slow spells require too much preparation to cast reactively. A counter can always be cast as a reaction (see *[Duels](#duels)*).

### Example Costs

**Fire bolt** (instantaneous damage, close range, one target): (1 + 1 + 0) × 1 × 1 = **2 magan** (Fast)

**Fireball** (instantaneous damage, distant range, large area): (1 + 2 + 2) × 1 × 1 = **5 magan** (Moderate)

**Encounter charm (T1)** (close range, one target, short duration): (1 + 1 + 0) × 3 × 1 = **6 magan** (Moderate)

**Encounter control (T2)** (close range, one target, short duration): (1 + 1 + 0) × 3 × 3 = **18 magan** (Slow, 2 AP)

**One-round control (T2)** (close range, one target, instantaneous): (1 + 1 + 0) × 1 × 3 = **6 magan** (Moderate)

**Day-long stone bridge** (touch range, huge scale, extended): (1 + 0 + 3) × 8 × 1 = **32 magan** (Slow, 2 AP)

**Flame aura on self** (self range, small area, short duration): (1 + 0 + 1) × 3 × 1 = **6 magan** (Moderate)

**Fire bolt + burning rider** (instantaneous damage + Enchant trickle, close range, one target, 2 effects): (1 + 1 + 0) × 1 × 1 × 2 = **4 magan** (Moderate)

**Double healing touch** (2× healing output, touch range, one target, 2 effects): (1 + 0 + 0) × 1 × 1 × 2 = **2 magan** (Fast)

**Sustained damage + T1 condition** (close range, one target, short duration, 2 effects): (1 + 1 + 0) × 3 × 1 × 2 = **12 magan** (Slow, 2 AP)

---

## Spell Effects

Damage, healing, and repair all use the same output formula: your *attribute tier die* + your *mastery tier die* in the relevant form. Both dice explode on maximum rolls.

### Damage

Damage from energy forms bypasses armor and applies directly to health. Damage from material forms is applied to armor durability, ignoring mundane armor resistances. The target makes an attribute trial (see [Resisting Spells](#resisting-spells)). If the trial succeeds, the target takes no damage. If the trial fails, the target takes full damage. Specific resistances (from spells, enchanted items, or consumables) reduce damage by the indicated amount.

### Healing and Repair

To heal a creature, cast Transmute Sacred or Transmute Primal on it. To repair an object, cast Transmute Stone (metal) or Transmute Profane (dead organic material such as wood, leather, or bone). The target recovers health or integrity equal to your ATD + MTD. Healing cannot exceed the target's maximum health.

Healing and repair are permanent, but older damage is harder to restore. The cost increases with how long the damage has existed.

| Damage Age | Multiplier |
|:---|:---:|
| This round | ×1 |
| This encounter | ×3 |
| This half of the adventuring day | ×5 |
| The previous half of the adventuring day | ×8 |

The damage age multiplier replaces the duration multiplier in the cost formula. A touch, personal heal for a wound taken this round costs 1 magan. The same heal for a wound taken earlier in the encounter costs 3.

Damage age follows the current timescale: in combat, count combat rounds; while exploring, a wound healed within the same exploration round counts as *this round*. Outside combat, the GM determines damage age.

Damage older than the current adventuring day cannot be restored through magic. Out-of-combat recovery comes from supplies, medicine, rest, and repair kits.

#### Restoring Traumas

A Trauma (see *[Combat, Trauma Table](../core/combat.md#trauma-table)*) is restored with Transmute. Sacred and Primal can restore any Trauma. The elemental forms restore the Traumas of their own domain: Stone restores bone and teeth (broken limbs, ribs, sternum, skull, spine); Sea restores blood and fluids (open wounds, internal injuries); Sky restores breath (a punctured lung); Fire burns a wound clean (festering and open wounds). Only Sacred and Primal restore health.

The Trauma's tier takes the place of the condition tier in the cost formula:

| Trauma Tier | Multiplier |
|:---|:---:|
| Minor | ×1 |
| Severe | ×3 |
| Grievous | ×6 |

**Magan Cost = (Base + Reach + Scale) × Damage Age × Trauma Tier**

Each effect restores one Trauma. Restoring health in the same casting adds an effect. Restoration is permanent. Damage Age limits its reach: once a Trauma is older than the current adventuring day, magic can no longer restore it.

A lost part that has been recovered (a finger, hand, ear, nose, or tooth) is restored as Severe. Regrowing a part that is gone is Grievous.

Mundane treatment does not change the cost; the time it takes does. A Trauma treated by a Healer ages like any other.

*Example: A Cleric touches a fighter whose eye was lost this round: (1 + 0 + 0) × 1 × 6 = 6 magan (Moderate). After the fight, later in the same half of the day: (1 + 0 + 0) × 5 × 6 = 30 magan (Slow, 2 AP).*

#### Restoring the Mind

Insanity (see *[Conditions, Insanity](../core/conditions.md#insanity)*) is restored with Transmute in a form connected to the target (see *[Connected Form](exorcism-enchantment-shapeshifting.md#connected-form)*). Magic can undo only insanity gained during the current adventuring day: the insanity returns to the step it held at the start of the day, and if it began today, it is removed entirely. Steps reached on earlier days are beyond magic; the insanity runs its course from its original start. Dependence that an insanity added today (Insanity table, 37–42) is removed with it. Whether dependence gained from using a substance can be affected by magic is determined by the GM.

**Magan Cost = (Base + Reach + Scale) × Damage Age × Insanity Step**

Damage Age counts from the first instance today. The step is the highest reached today:

| Insanity Step | Multiplier |
|:---|:---:|
| 8 hours | ×1 |
| 1 day | ×3 |
| 1 week or permanent | ×6 |

A curse (such as the Cursed's Insane curse) is not insanity in this sense and cannot be restored.

### Protection

Each Preservate spell protects against one damage type, fixed when the spell is recorded: a specific magical form (fire, sea, sky, stone, primal, sacred, profane, void) or mundane damage. A form's natural ward protects against its own damage type. A practitioner can also ward against a different type (fire against sea, stone against mundane blades); the caster narrates how, and the GM confirms the justification. Casting a known ward against a different damage type is an improvised casting until that version is recorded as its own spell.

The mode of protection depends on the classification of the casting form and the targeted damage type. Mundane damage is material for purposes of classification. When both share a classification (both material or both energy), the spell produces a durability pool. When they differ, the spell produces flat resistance.

**Durability pool.** Your *form mastery level* × 5 × *duration multiplier*. The pool absorbs incoming damage of the targeted type before it reaches physical armor or health. When the pool is depleted, the spell ends.

| Mastery | Base (×5) | Instantaneous (×1) | Short (×3) | Long (×5) | Extended (×8) |
|:---|:---:|:---:|:---:|:---:|:---:|
| Unskilled (1) | 5 | 5 | 15 | 25 | 40 |
| Untrained (2) | 10 | 10 | 30 | 50 | 80 |
| Basic (3) | 15 | 15 | 45 | 75 | 120 |
| Skilled (4) | 20 | 20 | 60 | 100 | 160 |
| Expert (5) | 25 | 25 | 75 | 125 | 200 |
| Master (6) | 30 | 30 | 90 | 150 | 240 |
| Grand Master (7) | 35 | 35 | 105 | 175 | 280 |

**Flat resistance.** Your *form mastery level* × 2. Reduces each qualifying hit of the targeted type by the resistance value for the spell's duration. Range: 2 (Unskilled) to 14 (Grand Master).

Magical protection applies before armor. Any damage remaining after protection follows the normal rules for the spell's form.

### Barriers

Barriers are terrain created by Formulate or Transmute that reshape the battlefield. Where Protection absorbs damage on a creature, barriers create obstacles that block line of sight, force enemies to reposition, and impose costs on passage.

Formulate and Transmute barriers are temporary. Formulated creations revert to nothing when the spell ends (Magical Impermanence). Transmuted terrain reverts to its original shape when the spell ends (away from native state). Transmute always produces material barriers because it reshapes existing physical material.

#### Material Barriers

Material form barriers (Stone, Sea, Primal, Profane) create physical structures that block passage. A material barrier physically stops weapons, projectiles, and creatures, and provides the [Cover](../core/conditions.md#cover "Physical barrier between attacker and target Tiers: Partial Cover, Majority Cover, Total Cover.") condition to creatures behind it.

**Durability.** Pool = form mastery level × 5 × (1 + Scale modifier). Scale determines toughness because a larger barrier has more material to break through. Duration determines how long the barrier exists, not how tough it is.

| Mastery | Base (×5) | Personal (×1) | Small (×2) | Large (×3) | Huge (×4) | Epic (×5) |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Unskilled (1) | 5 | 5 | 10 | 15 | 20 | 25 |
| Untrained (2) | 10 | 10 | 20 | 30 | 40 | 50 |
| Basic (3) | 15 | 15 | 30 | 45 | 60 | 75 |
| Skilled (4) | 20 | 20 | 40 | 60 | 80 | 100 |
| Expert (5) | 25 | 25 | 50 | 75 | 100 | 125 |
| Master (6) | 30 | 30 | 60 | 90 | 120 | 150 |
| Grand Master (7) | 35 | 35 | 70 | 105 | 140 | 175 |

**[Cover](../core/conditions.md#cover "Physical barrier between attacker and target Tiers: Partial Cover, Majority Cover, Total Cover.").** Material barriers provide the Cover condition based on geometry. Cover is positional relative to the attacker; a creature can have Total Cover from one direction and be fully exposed from another. A Personal-scale barrier (a pillar or post) can provide Total Cover from a single attacker but does not block other angles. Larger barriers cover wider arcs or shield multiple creatures. The Cover tier (Partial, Majority, Total) depends on how much of the defender is behind the barrier relative to each attacker.

#### Energy Barriers

Energy form barriers (Fire, Sky, Sacred, Void) create force that resists passage. A creature beyond an energy barrier is [Concealed](../core/conditions.md#concealed "Perception trial to detect. Concealed measures how well others know where a creature is. It comes from two kinds of source: Tiers: Obscured, Shrouded, Hidden.") (Tier 1), and the barrier works the same in both directions. The caster can make the barrier transparent at no cost, or raise it to Tier 2 or Tier 3 using the condition tier multiplier (see *[Condition Tier](#condition-tier)*). A Tier 3 barrier blocks sight at any distance, including within 5 feet. A Void barrier can take any appearance, such as a brick wall.

**Resistance.** Form mastery level × 2. Range: 2 (Unskilled) to 14 (Grand Master). Attacks and projectiles directed through the barrier have their damage reduced by the resistance value. Scale determines the barrier's area, not its resistance.

**Passage.** A creature attempting to move through an energy barrier must succeed on a Strength trial against the spell DC. On success, the creature pushes through and takes damage equal to the resistance value. On failure, the creature's movement stops at the barrier's edge.

#### Dispersal

Paths to remove a barrier:

- *Magical destruction (Obliterate):* A Duel between the caster destroying the barrier and the caster who created it. The destroying caster's Scale should match the barrier's Scale to contest the whole structure.
- *Magical reshaping (Transmute):* A Duel to reshape a section of the barrier (e.g., opening a doorway). Cheaper than full destruction because only a portion is contested; a doorway is Personal Scale regardless of the wall's size. Material barriers only.
- *Physical force:* Attack the barrier with weapons or tools. Deplete the durability pool. When the pool reaches 0, the barrier is breached. Material barriers only.
- *Environmental:* Fog disperses in wind, ice melts in heat. GM-adjudicated based on the fiction.

### Dynamic Constructs

A formulated creation that can move and act on the battlefield. Where barriers are static terrain, dynamic constructs are directed by the caster as battlefield pieces. The caster shapes magan into a form with agency: a wolf of fire, a bear of stone, an eagle of sacred light, or any shape within the form's domain.

**Cost.** Dynamic constructs use the standard spell formula with a ×2 Effects multiplier: (Base + Reach + Scale) × Duration × 2.

**Power level.** The caster chooses the construct's power level when casting the spell. The power level cannot exceed the caster's mastery level in the form. The chosen level determines the construct's damage and durability (see Dynamic Construct Table below).

**Action economy.** A dynamic construct requires concentration to maintain. Each command to the construct costs 1 AP: move to a location, or attack an adjacent target. Moving and attacking in the same turn costs 2 AP. The construct does not act independently; if the caster spends no AP directing it, it does nothing.

**Damage.** The construct deals form damage determined by its power level (see Dynamic Construct Table). The construct must be adjacent to its target and the target may make an Agility Trial to avoid the damage. Energy construct damage bypasses armor. Material construct damage interacts with armor.

**Durability.** The construct's power level and scale determine its durability pool (see Dynamic Construct Table). Material constructs can be damaged by any source, including mundane weapons. Energy constructs can only be damaged by magic.

**Dynamic Construct Table**

| Power | Damage | Personal (E / M) | Small (E / M) | Large (E / M) | Huge (E / M) | Epic (E / M) |
|:---|:---|:---|:---|:---|:---|:---|
| 1 | 2d2 | 5 / 10 | 10 / 20 | 15 / 30 | 20 / 40 | 25 / 50 |
| 2 | 2d3 | 10 / 20 | 20 / 40 | 30 / 60 | 40 / 80 | 50 / 100 |
| 3 | 2d4 | 15 / 30 | 30 / 60 | 45 / 90 | 60 / 120 | 75 / 150 |
| 4 | 2d6 | 20 / 40 | 40 / 80 | 60 / 120 | 80 / 160 | 100 / 200 |
| 5 | 2d8 | 25 / 50 | 50 / 100 | 75 / 150 | 100 / 200 | 125 / 250 |
| 6 | 2d10 | 30 / 60 | 60 / 120 | 90 / 180 | 120 / 240 | 150 / 300 |
| 7 | 2d12 | 35 / 70 | 70 / 140 | 105 / 210 | 140 / 280 | 175 / 350 |

E = Energy (magic only). M = Material (any source).

**Dispersal.** Dynamic constructs follow the same dispersal rules as barriers. Material constructs can be destroyed by physical force (deplete the durability pool) or magical destruction (Obliterate duel). Energy constructs can only be destroyed by magical destruction.

### Conditions

Instantaneous condition spells impose the condition, which deteriorates normally. Short-duration condition spells last for the encounter and require concentration. Long and extended condition spells persist for their full duration with concentration.

When a spell sustaining a condition ends (duration expires, concentration dropped or broken), the condition begins standard deterioration at 1 tier per round.

**Resisted or broken.** When a target resists a sustained condition spell or breaks free of it, the spell stays in your concentration slot for its duration. On your turn, you can spend 1 AP to apply it again to the same target or to a new one within the spell's reach. The target makes a fresh trial to resist.

#### Form and Condition Access

Each form can deliver specific conditions through the Enchant command. The form determines which conditions a caster can impose; a caster without access to a form that delivers a given condition cannot impose that condition through Enchant.

**Elemental Forms**

| Form | Conditions |
|:---|:---|
| Fire | [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."), [Hastened](../core/conditions.md#hastened "Counters Impaired and Restricted (dual-paired). Sharpened reflexes, enhanced reaction speed, physical quickness. Too fast to pin down, too quick to stun. T1 — Quickened: Bonus +1 to physical rolls. Treat Agility tier as 1 higher. T2 — Alert: Bonus +2 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. T3 — Hasted: Bonus +3 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. +1 AP."), [Disoriented](../core/conditions.md#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered."), [Blinded](../core/conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority.") |
| Sea | [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn."), [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.") |
| Sky | [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."), [Hastened](../core/conditions.md#hastened "Counters Impaired and Restricted (dual-paired). Sharpened reflexes, enhanced reaction speed, physical quickness. Too fast to pin down, too quick to stun. T1 — Quickened: Bonus +1 to physical rolls. Treat Agility tier as 1 higher. T2 — Alert: Bonus +2 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. T3 — Hasted: Bonus +3 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. +1 AP."), [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers."), [Deafened](../core/conditions.md#deafened "Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial."), [Unbound](../core/conditions.md#unbound "Movement enhancement T1 — Fleet: +2 movement speed. You can jump as part of movement. You must begin and end movement on a surface with each AP. T2 — Suspended: Three-dimensional movement at half speed. One axis per AP (horizontal or vertical, not both). Water walking included. Requires concentration to maintain and move. T3 — Soaring: Three-dimensional movement at full speed in any direction. Immune to Prone. Requires concentration to maintain and move.") |
| Stone | [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn."), [Prone](../core/conditions.md#prone "Creature is on the ground. Standing costs 1 AP. Inferiority on attack and defense rolls. Enemies have Superiority on melee attacks against the prone creature. Enemies have Inferiority on ranged attacks against the prone creature. Movement reduced to 1 per AP. Cannot use weapon maneuvers.") |

**Entropic Forms**

| Form | Conditions |
|:---|:---|
| Primal | [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."), [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan)."), [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn.") |
| Profane | [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round."), [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked."), [Disoriented](../core/conditions.md#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered."), [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."), [Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls.") |
| Sacred | [Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), [Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls."), [Clarity](../core/conditions.md#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn."), [Warded](../core/conditions.md#warded "Counters Charmed and Controlled (dual-paired). Mental fortitude, magical resilience. The mind is shielded against influence and the body armored against magical harm. T1 — Buffered: Dominance on attribute trials. +1 resistance to magic damage. T2 — Shielded: Dominance on attribute trials. +2 resistance to magic damage. T3 — Impervious: Dominance on attribute trials. +3 resistance to magic damage."), [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked.") |
| Void | [Demoralized](../core/conditions.md#demoralized "Wisdom trial to resist. Fear directed at a specific source. While that source is in sight, the fear persists. While the source is out of sight, the creature makes the break-free trial at the end of each of its turns without spending AP. Tiers compound. Tiers: Shaken, Frightened, Panicked."), [Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls."), [Impaired](../core/conditions.md#impaired "Perception trial to resist. Stunning, disorientation, or delayed reflexes. Impaired from a failed Startle trial feeds into this chain. Tiers compound from T1 to T2; T3 transforms to total shutdown. T1 — Dazed: Penalty -1 to all rolls. Must act in Slow phase. T2 — Stunned: Penalty -2 to all rolls. Inferiority on attack rolls, defense rolls, and spell damage rolls. Must act in Slow phase. T3 — Paralyzed: Cannot take any actions. Considered Helpless and Catatonic. The creature is aware of its surroundings but unable to act or respond."), [Disoriented](../core/conditions.md#disoriented "Intelligence trial to resist. Confusion, mental fog, or inability to process surroundings and act coherently. No dice modifiers at any tier. Loss of control is the punishment. Tiers: Befuddled, Confused, Bewildered."), [Clarity](../core/conditions.md#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC."), [Warded](../core/conditions.md#warded "Counters Charmed and Controlled (dual-paired). Mental fortitude, magical resilience. The mind is shielded against influence and the body armored against magical harm. T1 — Buffered: Dominance on attribute trials. +1 resistance to magic damage. T2 — Shielded: Dominance on attribute trials. +2 resistance to magic damage. T3 — Impervious: Dominance on attribute trials. +3 resistance to magic damage.") |

[Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") and [Controlled](../core/conditions.md#controlled "Charisma trial to resist. Loss of bodily autonomy through magical domination or possession. Combat-timeframe condition. Standard deterioration applies. Tiers: Compelled, Possessed, Dominated.") use connected-form targeting. Each form can impose these conditions on creatures connected to that form (see [Exorcise](#exorcise): Connected Form). The form determines the target, not the condition itself.

Every form can impose [Attrition](../core/conditions.md#attrition "Persistent damage from a sustained effect. Applied by specific abilities, spells, or environmental hazards. Each instance deals damage equal to the source's relevant attribute tier at the end of the afflicted creature's turn. Each attack that applies Attrition creates a separate instance. All instances resolve at end of the afflicted creature's turn and then expire. Healing received before end of turn prevents the damage. Resistance of the corresponding damage type applies (if any).") of its own damage type as trickle damage (Attrition (Burning) for Fire, Attrition (Freezing) or Attrition (Corroding) for Sea, and so on; see *[Trickle Damage](#trickle-damage)*).

### Boons

Boons are beneficial effects that the target automatically receives.

**Condition boons** impose positive conditions ([Invigorated](../core/conditions.md#invigorated "Counters Exhausted (1:1). Raw energy and vitality. Physical surge that graduates to total enhancement at peak. T1 — Energized: Dominance on physical rolls. T2 — Empowered: Dominance on physical rolls. Bonus +1 to physical rolls. T3 — Tireless: Dominance on all rolls. Bonus +2 to all rolls."), [Inspired](../core/conditions.md#inspired "Counters Demoralized (1:1). Courage, conviction, mental resolve. Sharpened focus translates mental resolve into physical execution and explosive combat potential. T1 — Rallied: Dominance on mental rolls. T2 — Emboldened: Dominance on mental rolls. Bonus +1 to attribute and mastery trials. T3 — Fearless: Dominance on mental rolls. Bonus +2 to attribute and mastery trials. Superiority on attack, defense, and spell damage rolls."), [Clarity](../core/conditions.md#clarity "Counters Disoriented (1:1). Mental clarity, cognitive sharpness. Techniques are refined, harder to counter, and executed with greater skill. T1 — Focused: Bonus +1 to mastery trials. T2 — Lucid: Bonus +1 to mastery trials. +1 Mastery DC. T3 — Transcendent: Bonus +1 to mastery trials. +2 Mastery DC."), [Hastened](../core/conditions.md#hastened "Counters Impaired and Restricted (dual-paired). Sharpened reflexes, enhanced reaction speed, physical quickness. Too fast to pin down, too quick to stun. T1 — Quickened: Bonus +1 to physical rolls. Treat Agility tier as 1 higher. T2 — Alert: Bonus +2 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. T3 — Hasted: Bonus +3 to physical rolls. Treat Agility tier as 1 higher. Act one phase earlier. +1 AP."), [Fortified](../core/conditions.md#fortified "Counters Tainted and Infected (dual-paired). Bodily resilience, constitutional hardening. The body is toughened against physical harm and resistant to contamination. T1 — Girded: +1 mundane and primal resistance. T2 — Hardened: +2 mundane and primal resistance. Recover 1 health at end of turn. T3 — Robust: +3 mundane and primal resistance. Recover 1 health at end of turn."), [Warded](../core/conditions.md#warded "Counters Charmed and Controlled (dual-paired). Mental fortitude, magical resilience. The mind is shielded against influence and the body armored against magical harm. T1 — Buffered: Dominance on attribute trials. +1 resistance to magic damage. T2 — Shielded: Dominance on attribute trials. +2 resistance to magic damage. T3 — Impervious: Dominance on attribute trials. +3 resistance to magic damage.")) using the standard condition tier multiplier. See the conditions document for specific effects at each tier.

**Protection boons** create durability pools or flat resistance using the formulas above.

### Auras

Auras are concentration spells that deal flat damage equal to your *form mastery level* (1-7). You can center an aura on yourself, on a willing ally, or on an object; the bearer takes no damage from its own aura. The spell's Scale determines the kind of aura.

**Contact auras** (Personal scale) wreathe the bearer. A creature that hits the bearer with a melee attack takes the aura's damage.

**Area auras** (Small scale or larger) fill the radius. A creature within the radius at the end of its turn takes the aura's damage; a creature that moves out during its turn takes none. Area auras damage allies as well as enemies.

### Trickle Damage

Trickle damage is the Attrition condition: a recurring, flat damage effect. Each form and mundane source has its own label or labels (Attrition (Burning), Attrition (Freezing), Attrition (Bleeding), etc.). The damage value equals the source's relevant *attribute tier* (flat, 1-7). Trickle damage ticks at the end of the afflicted creature's turn. Resistance of the corresponding damage type applies; Attrition (Bleeding) is untyped and no resistance applies. See *[Conditions, Attrition](../core/conditions.md#attrition)* for the full label table.

**Applied by a hit.** When applied as a rider on an instantaneous spell or creature ability, it ticks once at the end of the target's turn, then expires. To reapply, the source must hit the target again.

**Sustained by a spell.** When sustained by a short or longer duration spell, it persists for the spell's duration. The target can break free (see *[Conditions, Breaking Free](../core/conditions.md)*). If the spell ends, the condition begins standard deterioration at 1 tier per round.

**Retargeting.** A resisted or broken trickle spell can be applied again; see [Conditions](../core/conditions.md), Resisted or broken.

---

## Concentration

All spells lasting beyond the current round require concentration. Concentration has two states: *active* and *passive*.

### Active Concentration

A concentration spell is active if it occupies your free concentration slot, if it was cast in your current round, or if you are spending AP to maintain it that round. Active spells are protected from breaking due to damage and persist until their duration expires or you drop them.

You can maintain up to three active concentration spells simultaneously: one free slot (no AP cost) and up to two paid slots (1 AP each to maintain).

### Passive Concentration

A concentration spell is passive if you are not maintaining it in your free slot and are not spending AP on it. Any damage to your health or durability breaks a passive concentration spell immediately. Hits fully mitigated by resistance (reduced to 0 damage) do not break passive concentration.

You can have any number of passive concentration spells running, limited only by your ability to cast them and your magan pool. They are fragile.

### Round-Start Declaration

Concentration is declared at the start of each round and is binding for that round. You declare which spell occupies your free concentration slot, which spells you are actively maintaining with AP, and any new spells you intend to cast. All participants declare their intended actions before initiative or action order is rolled.

When you cast a new concentration spell, the AP cost to cast it includes establishing concentration for that round. You do not pay additional AP on top of the casting cost. At the start of the following round, you choose where to place the spell: free slot (if available), paid active maintenance, or passive.

Your free concentration slot can be reassigned at the start of each round. When a spell leaves your free slot, it becomes passive unless you pay to maintain it actively.

**Scrolls.** A spell released from a scroll is concentrated on by the reader, as if they had cast it (see *[Skill Mastery, Scribe: Reading Scrolls](../skills/index.md)*).

### Interrupted Casting

You are casting a spell from the start of the round, when you declare it, until it resolves in your phase. Declaring a spell draws its magan; you spend its AP when it resolves.

A spell is interrupted and lost if, before it resolves, you:

- defend against an attack;
- cast another spell, including a reaction spell or a counter;
- take health damage and fail a Miscast trial against a DC equal to the health damage taken; or
- choose to stop casting.

Even a familiar spell, one cast at its recorded parameters, makes this trial, and you cannot coerce success on it. A lost spell's magan is spent. AP you have not spent remain available for movement and reactions.

Resisting a spell, and abilities that modify that trial, do not interrupt your casting. Pretermit (see *[Skill Mastery, Spellcraft](../skills/spellcraft.md)*) recovers part of a lost spell's magan.

---

## Resisting Spells

When a spell targets a creature, the target makes an attribute trial to resist. The resistance attribute is determined by what the spell is doing to the target, not by the command used to cast it. The same table applies to spells, traps, and creature abilities. See *[Mastery System](../core/mastery-and-trials.md)* for how mastery DC, attribute trials, and tier dice work.

| How does the target resist? | Attribute | Examples |
|:---|:---|:---|
| Resist an imposed condition | Condition's attribute | [Charmed](../core/conditions.md#charmed "Wisdom trial to resist. Magical or supernatural influence over disposition. Social condition. The creature retains agency but its attitude toward the source is magically altered. Tiers: Lured, Beguiled, Enthralled.") = Wisdom, [Restricted](../core/conditions.md#restricted "Strength trial to resist. Grappling, binding, entanglement, or physical constraint. Tiers compound. T1 — Grappled: Cannot move. Penalty -1 to physical rolls. T2 — Pinned: Cannot move. Penalty -2 to physical rolls. Inferiority on attack and defense rolls. T3 — Restrained: Cannot move or take any actions except attempts to resist. Considered Helpless. Can maintain concentration. Can cast spells without somatic components (+1 magan).") = Strength, [Tainted](../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn.") = Endurance |
| Dodge or react | Agility | Incoming projectile, area burst, falling debris |
| Break free | Strength | Magical restraint, barrier, having a weapon wrenched away |
| Resist bodily change | Physique | Polymorph, petrification, forced relocation |
| Endure physical destruction | Endurance | Poison, disease, physical destruction beyond dodging |
| Outthink mental intrusion | Intelligence | Mind reading, thought extraction, divination probing |
| See through influence | Wisdom | Charm, fear, emotional manipulation, altered disposition |
| Maintain sense of self | Charisma | Forced action, possession, domination, mental override, banishment |
| Perceive deception | Perception | Illusions, false conjurations, detecting scrying |
| Resist sensory overload | Perception | Blinding flash, deafening crack, clouded sight ([Blinded](../core/conditions.md#blinded "Cannot see. The creature treats all other creatures as Concealed (Tier 3). The creature may spend 1 AP and attempt a Perception trial (DC equal to the source of blindness) to make a single attack or defense roll with Impotence and Inferiority."), [Deafened](../core/conditions.md#deafened "Cannot hear. Auto-fail Perception trials related to hearing. Spells with verbal components require a Miscast trial.")) |

The GM determines which attribute applies based on the specific spell and situation. A fire bolt hurled across the room is dodged (Agility). A touch of death that unmakes flesh is endured (Endurance). A charm that sways the target's regard is seen through (Wisdom). The same command can call for different attributes depending on what the caster is doing with it.

---

## Known and Spontaneous Spells

Your familiarity with a spell determines how risky it is to cast. Familiarity is tracked by form + command pair at specific parameters (reach, scale, duration, condition tier).

### Familiar Casting

A spell you have formally recorded or bound through your tradition's encoding process is a *familiar* spell. Casting a familiar spell at its recorded parameters requires no miscast trial. You pay the magan cost and the spell succeeds.

### Modified Familiar Casting

You can modify a familiar spell by changing its parameters: more range, bigger area, longer duration. The same form and command, scaled up or down. You make a miscast trial, rolling your *casting attribute tier die* + *mastery tier die* against a DC equal to the change in magan cost between the base spell and the modified version, measured before material components (minimum DC 2). A change that leaves the cost the same, such as warding against a different damage type, is still a modification: DC 2.

*Example: You know Obliterate Fire as a close, personal, instantaneous bolt (2 magan). You want to scale it to a close, large, instantaneous burst (4 magan). The delta is 2, so you roll against DC 2.*

### New Casting

A form + command combination you have never practiced is a *new casting*. Even if you know Obliterate Fire and Enchant Void separately, Enchant Fire is a new combination. You make a miscast trial against the full pre-component magan cost of the spell.

*Example: You know Obliterate Fire and attempt Enchant Fire for the first time as a close, personal, short-duration spell (6 magan). You roll against DC 6.*

### Improvised Casting

Sometimes a player will attempt something a spell could plausibly accomplish but does not explicitly define. When this happens, the GM sets a miscast DC from the Trial Difficulty table (see *[Mastery System](../core/mastery-and-trials.md)*) based on how far the intended use deviates from the spell's design. The miscast trial and coerced success rules apply as normal.

### Miscast

The minimum miscast DC is 2. If you roll a natural minimum (every die showing 1), the trial always fails and cannot be coerced. Magic is dangerous.

If you fail a miscast trial, the spell fails and its magan is spent. You can choose to *coerce success*: advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier, and the spell succeeds despite the failed trial. See [Pushing Magic](#pushing-magic) below.

---

## Pushing Magic

A practitioner can push past the limits of their skill or their magan, at a cost to body and mind.

**Coerced success.** When you fail a miscast trial, you can choose to succeed anyway. Advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier.

**Overcasting.** When your magan pool cannot cover a spell's cost, you can cast it anyway: your pool drops to 0 and you advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier. This applies whether the pool is empty or merely short (2 magan left for a 3-magan spell). The spell is still subject to a miscast trial if applicable.

**Recovery.** When the encounter ends, [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") gained from pushing magic remains for 1 Exploration round per time you pushed magic today, then deteriorates normally.

---

## Optional Rule: Vitiation and Transformation

Tables that want wild magic and lasting consequences can add vitiation: pushing magic also stains the practitioner in the spell's form, producing unpredictable effects and, eventually, transformation. These rules are in development.

---

## Duels

When one practitioner actively counters a spell cast by another, a duel takes place.

**Countering.** To counter a spell, cast Obliterate in the same form as the spell, with Scale matching the target spell's Scale, the Reach needed to reach its caster, and Instantaneous duration. You pay its magan cost normally. A counter is always a reaction and costs 1 AP, whatever its magan cost. If you have at least Untrained mastery in a spell's form, you recognize that form when you see it cast.

You can counter a spell from the moment its casting can be seen until it resolves. A spell cast without verbal and somatic components cannot be seen until it resolves; if its duration is Instantaneous, it cannot be countered, and if it has a duration, it can only be dispelled. A countered spell's magan is spent.

**Resolution.** Both practitioners make a mastery trial: *casting attribute tier die* + *form mastery die* in the form of the original spell. Duelist adds the Spellcraft mastery die (see *[Skill Mastery, Spellcraft](../skills/spellcraft.md)*). On a tie, the spell is suspended. Both practitioners remain locked until there is a victor; each must spend 1 AP per round to sustain the duel. A practitioner who cannot or does not sustain the duel loses it.

Both practitioners are casting until the duel ends, and *[Interrupted Casting](#interrupted-casting)* applies to each. A practitioner whose casting is interrupted loses the duel.

The loser may advance [Exhausted](../core/conditions.md#exhausted "Endurance trial to resist. Fatigue from lack of rest, overexertion, or environmental strain. Affects body and mind equally. Tiers compound. T1 — Weary: Impotence on all rolls. T2 — Fatigued: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. T3 — Depleted: Impotence on all rolls. Inferiority on attack and defense rolls. All spells require miscast trials. Movement halved. 1 AP per round.") by 1 tier to force a tie; the duel continues. Pushing cannot turn a loss into a win.

**Victory.** The victor chooses one outcome:

- Dissipate the spell.
- Redirect the spell, unaltered, to a target or location of their choice.
- Reshape it into a familiar spell of the same form. Make a miscast trial against the difference in magan cost between the captured spell and the new spell (minimum DC 2); coerced success applies. If the new spell costs more, you pay the difference; if it costs less, the remainder is lost. You can instead reshape it into a modified familiar spell: the DC is the larger of its difference from the captured spell and its difference from the familiar spell, and the trial has Impotence.

### Dispelling

**Active caster.** To dispel a spell maintained by a present caster, use the duel system. You must cast using the same form. Contested roll; standard duel resolution.

**Abandoned spell.** To suppress an enchanted ward, trap, or other unattended magical effect, cast against the spell's native DC. Success suppresses the effect for the duration of your dispelling cast (instantaneous = 1 round, short = the scene, etc.). Permanent removal requires the enchanting system.

---

## Magical Impermanence

Formulated matter and transformed matter revert when the spell ends. Formulated water vanishes. Transmuted food becomes what it was before the spell. A reshaped stone wall returns to its original form. Duration determines how long the creation or transformation persists. Permanent creation requires the enchanting system.

Evoked matter is real. A relocated object is the genuine article, not a magical copy. When the spell ends, the object returns to where it was taken from. Anything done to the object while relocated is permanent: a stolen blade that is broken returns broken, and consumed food nourishes the one who ate it.

Energy transfers are permanent consequences. Fire damage causes real burns that persist after the spell ends. A formulated boulder that strikes someone deals real damage, even though the boulder vanishes afterward.

Formulated food and water provides no nourishment or hydration; it is magical matter and ceases to exist when the spell ends. Transmuted food reverts to its original substance. Magic cannot create provisions, but it can relocate them.

Healing and repair are permanent. Restoring a thing to what it was before the damage is not a transformation; it is undoing what was done.
