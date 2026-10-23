---
generated_by: tools/sync_mastery.py
---

# Trade

## Structure

Trade covers four professional disciplines: Healer, Alchemist, Blacksmith, and Scribe.

Trade uses Intelligence, or your tradition's attribute for Scribe. DCs are set by the GM.

<span id="trade-mastery-dc"></span>**Trade Mastery DC:** your mastery level in the discipline + Intelligence tier.

Each investment in Trade goes toward one discipline. You can pursue several disciplines by investing in Trade more than once; each advances on its own.

## Universal Trade Rules

### Trade Production

Crafting at or below your mastery tier always succeeds. There is no failure check — a tradesman with the skill and materials produces the item. The variable is speed. Mundane weapons, armor, and gear have no tier: anyone with the materials and a workspace can craft them, and time is the limit. Alchemy uses its own method instead (see *[Alchemy](alchemy/index.md)*).

Crafting requires at least Untrained mastery in the discipline, and a suitable workspace, such as a smithy or an alchemy lab, as the GM approves.

<span id="workshops"></span>**Workshops.** Working in an adequate workshop gives Dominance on crafting rolls, including the production rate roll and crafting trials. You can use a faction's workshop, rent one from a guild, or own one. Work in the field, away from a workshop, gets no Dominance. Some items can only be made in a workshop; the GM can rule a workshop inadequate, such as a forge in disrepair, in which case it still allows the work but gives no Dominance.

Materials cost 50% of the item's value. To determine your production rate, roll Intelligence tier die + Trade mastery die and cross-reference your roll with your mastery level on the Trade Production Rate table to find your sp/day output. Time to craft is item value ÷ production rate in days. Minimum craft time is 1 hour per item, maximum 8 working hours per day. If you do not wish to roll, you use the floor rate for your mastery level (the leftmost column value in your row).

#### Trade Production Rate (sp/day)

| Mastery | Roll 2+ | Roll 4+ | Roll 8+ | Roll 10+ | Roll 14+ | Roll 18+ | Roll 21+ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Untrained (d3)** | 2 | 4 | 10 | 20 | 40 | — | — |
| **Basic (d4)** | 4 | 10 | 20 | 40 | 60 | — | — |
| **Skilled (d6)** | 10 | 20 | 40 | 60 | 80 | 100 | — |
| **Expert (d8)** | 20 | 40 | 60 | 80 | 100 | 120 | — |
| **Master (d10)** | 40 | 60 | 80 | 100 | 120 | 160 | 200 |
| **Grand Master (d12)** | 60 | 80 | 100 | 120 | 160 | 200 | 240 |

<span id="example"></span>**Example:** A Grand Master Blacksmith (d12) with Intelligence Tier 7 (d12) crafting full plate armor (value 46 gn = 3,680 sp). Material cost: 23 gn (1,840 sp). Average roll of 13 lands in the Roll 10+ column = 120 sp/day. Time: 3,680 ÷ 120 ≈ 31 days. On a great roll of 18+: 200 sp/day ≈ 19 days. On a minimum roll: 60 sp/day ≈ 62 days.

### Automatic Use

Characters with Trade mastery at the appropriate tier can use items of that tier automatically — no roll required. Training assumes competence; an Expert blacksmith does not roll to repair common armor.

| Item Tier | Social Class | Use DC | Trade Mastery Required |
|-----------|-------------|--------|--------------------------|
| T1 | Serf | 3 | Untrained |
| T2 | Peasant | 4 | Untrained |
| T3 | Knight | 6 | Basic |
| T4 | Burgher | 8 | Skilled |
| T5 | Magnate | 10 | Expert |
| T6 | Noble | 12 | Master |
| T7 | Royal | 14 | Grand Master |

<span id="off-label-use"></span>**Off-Label Use:** If you lack the required Trade mastery, you may still attempt to use an item by rolling an attribute tier die + mastery die (1d2 for Unskilled) against the item's Use DC. On failure, the item is consumed or wasted. This applies to scrolls and to alchemical concoctions that must be applied or activated (see *[Alchemy](alchemy/index.md)*).

<span id="exception"></span>**Exception:** Thieves using the Use Scroll ability (Thievery) always roll regardless of DC, and the scroll is ruined on failure, because they are not trained spellcasters.

### Trade Income

A tradesperson's annual income is determined by the Trade Wage Chart below, expressed as a social class wage tier. The tier maps directly to the Wages by Social Class table, which provides daily, weekly, and annual income values. Modifiers (½, x2) multiply the base tier's values. For example, Serf x2 earns double the Serf tier's daily, weekly, and annual rates.

The income at each timescale is a ceiling, not a sum of smaller increments. A tradesperson cannot exceed their tier's weekly income by working more days, nor exceed their annual income by working more weeks.

To read the chart, find your mastery level. If your Intelligence tier die meets or exceeds the threshold in a sub-row (e.g., "+Int T3+"), use that row instead. The GM determines your market condition: Poor (village, frontier, or saturated market), Standard (functioning town), or Good (wealthy city, patronage, or exclusive contracts). Use the +WS column if you have a personal, dedicated workspace such as your own smithy or lab. Using a shared or hired workshop allows you to craft but does not qualify.

#### Trade Wage Chart (Annual Income by Social Class)

| Mastery | Poor | Poor+WS | Standard | Std+WS | Good | Good+WS |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Untrained** | ½ Serf | Serf | Serf | Serf x2 | Serf x2 | Laborer |
| **Untrained+Int T2+** | Serf | Serf x2 | Serf x2 | Laborer | Laborer | Peasant |
| **Basic** | Serf | Serf x2 | Serf x2 | Laborer | Laborer | Peasant |
| **Basic+Int T3+** | Serf x2 | Laborer | Laborer | Peasant | Peasant | Expert |
| **Skilled** | Serf x2 | Laborer | Laborer | Peasant | Peasant | Expert |
| **Skilled+Int T4+** | Laborer | Peasant | Peasant | Expert | Expert | Expert x2 |
| **Expert** | Laborer | Peasant | Peasant | Expert | Expert | Expert x2 |
| **Expert+Int T5+** | Peasant | Expert | Expert | Expert x2 | Expert x2 | Knight |
| **Master** | Peasant | Expert | Expert | Expert x2 | Expert x2 | Knight |
| **Master+Int T6+** | Expert | Expert x2 | Expert x2 | Knight | Knight | Burgher |
| **Grand Master** | Expert | Expert x2 | Expert x2 | Knight | Knight | Burgher |
| **GM+Int T7** | Expert x2 | Knight | Knight | Knight | Burgher | Lesser Noble |

## Healer Discipline

The Healer discipline covers treating wounds, injuries, traumas, poison, and disease. Every treatment uses up one kit (see *[Equipment](../../equipment/gear-and-services.md)*). A healer rolls Trade mastery die + Intelligence tier die.

<span id="tools"></span>**Tools.** Treating Wounds, Injuries, and Minor Traumas needs a Surgeon's Pocket Set. Treating Severe and Grievous Traumas needs a Surgeon's Chest. Without the tools a treatment needs, its roll has Impotence. In an infirmary or another adequate workshop, treatment rolls have Dominance (see *[Trade Production](#trade-production)*).

<span id="untrained-hands"></span>**Untrained hands.** Without at least Untrained Healer mastery, you roll before using a Wound Kit (against 3) or an Injury Kit (against 4). On a failure, the kit is wasted.

<span id="heal"></span>**Heal.** *1 Exploration Round. Wound Kit. Pocket Set.* The patient regains health equal to your roll. A patient can be Healed once per encounter in which they were wounded. Without a pocket set, the patient regains health equal to your Healer mastery level instead; it still counts as their Heal for the encounter.

<span id="triage"></span>**Triage.** *2 AP. Wound Kit. No tools.* Only during combat. The patient regains health equal to your Healer mastery level. A patient can be triaged once per encounter, and again each time they drop to 0 health. If the patient is conscious, you and the patient both spend your whole turn on it, with no attacks, defense, or movement. Triage does not count as the patient's Heal.

<span id="treat-injury"></span>**Treat Injury.** *1 Exploration Round. Injury Kit. Pocket Set.* Clears one Injury, with no roll. Without a pocket set, roll with Impotence against 4; on a failure, the kit is wasted.

<span id="treat-trauma"></span>**Treat Trauma.** *1 Exploration Round. Trauma Kit. Pocket Set or Chest.* Perform one treatment listed on the Trauma table (*[Combat](../../core/combat.md)*, [Trauma Table](../../core/combat.md#trauma-table)): stop the bleeding, reset a joint, set a bone, tend a wound, or revise a scar. Roll against the Trauma's tier: Minor 5, Severe 7, Grievous 9. On a failure, the kit is wasted, and you may try again. If you fail to set a bone by 5 or more, the bone is set badly: it still heals, but when it does, the patient gains a Minor Trauma (a Limp for a leg, or Arm Bruised to the Bone for an arm). Treatments that need several successes, such as tending daily for 10 successes, count one success per treatment.

<span id="treat-poison"></span>**Treat Poison.** *2 AP. Physic Kit. No tools.* Roll against the DC of the poison that caused the patient's [Tainted](../../core/conditions.md#tainted "Endurance trial to resist. Acute toxins, venom, or poisonous substances. Poison degrades body and mind. Tiers compound. T1 — Dosed: Penalty -1 to all rolls. T2 — Blighted: Penalty -2 to all rolls. Impotence on all rolls. Movement halved. Lose 1 health at end of turn. T3 — Corrupted: Penalty -3 to all rolls. Impotence on all rolls. Movement halved. Cannot take reactions. Lose 2 health at end of turn."). On a success, Tainted drops by 1 tier, or by 2 if you succeed by 5 or more.

<span id="treat-disease"></span>**Treat Disease.** *1 Exploration Round. Physic Kit. No tools.* Roll against the DC of the disease that caused the patient's [Infected](../../core/conditions.md#infected "Endurance trial to resist. Illness, disease, or supernatural contamination. Infected does not deteriorate naturally. At each incubation interval (determined by the disease), the creature makes an Endurance trial against the disease's DC. On success, the condition descends by 1 tier. On failure, the condition advances by 1 tier. If the condition descends below Tier 1, the disease is overcome. Tiers: Afflicted, Sickened, Diseased."). On a success, the patient has +2 on their next Infected trial.

<span id="use-medicine"></span>**Use Medicine.** You can apply medicines and counter-vials (see *[Alchemy](alchemy/index.md)*) using your Healer mastery in place of Alchemist mastery for Automatic Use. You cannot make them.

## Alchemist Discipline

The Alchemist discipline covers making and identifying alchemical concoctions: poisons, medicines, anodynes, tonics, incendiaries, and nostrums. Alchemy mechanics (categories and modifications, making concoctions, workspaces, prices, and using concoctions) are governed by *[Alchemy](alchemy/index.md)* and scale with your Alchemist mastery level.

<span id="identification"></span>**Identification:** When encountering an unknown concoction, roll Intelligence tier die + Trade mastery die against the concoction's DC. Identification takes one exploration round, and can also be done in camp as the *Sage* role. On success, you identify the substance and its effects. On failure, you cannot attempt to identify the same concoction again until your attribute tier or Trade mastery increases.

## Blacksmith Discipline

The Blacksmith discipline covers forging and repairing mundane weapons and armor, including bows, crossbows, and padded, leather, and hide armor.

<span id="repair-formula"></span>**Repair Formula:** (Trade mastery die + Intelligence tier die) × 4 = durability restored to armor or a shield per application. Each application takes one exploration round and consumes one repair kit. Cannot exceed maximum durability.

<span id="crafting"></span>**Crafting:** A blacksmith can craft any mundane weapon or armor for which they have the materials. Material cost is 50% of the item's value. Crafting time is determined by the Trade Production Rate table.

## Scribe Discipline

The Scribe discipline covers the creation of magical scrolls. It is open only to casters whose traditions write their magic down. Druids and Filis are bound by their oral tradition's prohibition against writing magic, and scribing is foreign to the Sylvan Elf's embodied relationship with magic.

You can only scribe scrolls from your own casting tradition (Theurgic, Occult, or Priscan based on your class).

<span id="scroll-creation"></span>**Scroll Creation:** You can only scribe scrolls for spells you already know (familiar Form + Command combinations). A scroll is an abridged version of a full spell, with the magical physics compressed and cast into the vellum so the spell is already prepared. Scrolls always cost 2 AP and are Slow to use, regardless of the spell's normal speed. A scroll is always 1 leaf of vellum, regardless of the spell's magan cost.

<span id="requirements"></span>**Requirements:**

- 1 leaf of vellum (purchased separately, 1 sp)
- magan² units of Scribe Supplies (consumed, 1 ss per unit)
- Time: 1 day per magan cost of the spell
- Scribe mastery gate based on magan cost (see table below)
- Trial required when magan cost exceeds the caster's Form DC (see [Scroll Crafting Trial](#scroll-crafting-trial) below)

<span id="scroll-cost-and-mastery-gates"></span>**Scroll Cost and Mastery Gates:**

| Magan | Cost | Time | Mastery Required | Classification |
|:---:|:---:|:---:|:---|:---|
| 1 | 1 ss | 1 day | Unskilled | Vestige |
| 2 | 4 ss | 2 days | Unskilled | Vestige |
| 3 | 9 ss | 3 days | Untrained | Distortion |
| 4 | 16 ss | 4 days | Untrained | Distortion |
| 5 | 25 ss | 5 days | Basic | Manifestation |
| 6 | 36 ss | 6 days | Basic | Manifestation |
| 7 | 49 ss | 7 days | Skilled | Incantation |
| 8 | 64 ss | 8 days | Skilled | Incantation |
| 9 | 81 ss | 9 days | Skilled | Incantation |
| 10 | 100 ss | 10 days | Expert | Invocation |
| 12 | 144 ss | 12 days | Expert | Invocation |
| 15 | 225 ss | 15 days | Expert | Invocation |
| 16 | 256 ss | 16 days | Master | Devastation |
| 18 | 324 ss | 18 days | Master | Devastation |
| 20 | 400 ss | 20 days | Master | Devastation |
| 21 | 441 ss | 21 days | Grand Master | Culmination |
| 25 | 625 ss | 25 days | Grand Master | Culmination |
| 30 | 900 ss | 30 days | Grand Master | Culmination |

Cost listed is for Scribe Supplies only (magan² units at 1 ss each). Add 1 sp for the leaf of vellum.

<span id="scroll-crafting-trial"></span>**Scroll Crafting Trial:**

When a scroll's magan cost exceeds the caster's DC for the spell's Form, the Scribe must pass a crafting trial. If the magan cost is equal to or less than the Form DC, no trial is required.

Trial DC = 2 + (magan cost - Form DC). The trial uses your tradition's attribute tier die, Intelligence, Charisma, or Perception, + Trade mastery die. Working in your study or another adequate workshop gives Dominance on the trial (see [Trade Production](#trade-production)).

The trial occurs at the midpoint of the crafting process (half the total days elapsed). On a success, the Scribe completes the scroll normally. On a failure, the Scribe recognizes the compression is failing and must choose:

*Abandon:* Stop work immediately. Half the remaining time and half the remaining Scribe Supplies are saved. The leaf of vellum is ruined.

*Commit:* Complete the full crafting time and expend all supplies. The scroll is ruined, but the Scribe gains +2 on their next attempt to create the exact same scroll (same spell, same magan cost). The +2 does not stack across multiple committed failures.

<span id="reading-scrolls"></span>**Reading Scrolls.** 2 AP. Slow. Declared. Reading a scroll is casting a spell with verbal and somatic components: you read it aloud, with the scroll in hand. It costs no magan, and if it is interrupted, the scroll is lost (see *[Magic Mastery](../../magic/index.md)*, [Interrupted Casting](../../magic/index.md#interrupted-casting)).

A scroll's tradition is plain to anyone with at least Untrained Scribe mastery. If the scroll is your own tradition and your Scribe mastery is at or above its tier, reading it needs no roll. Otherwise, you roll the scroll's tradition attribute tier die (Intelligence for Occult, Charisma for Theurgic, Perception for Priscan) + your Scribe mastery die against its Use DC. On a failure, the scroll is ruined. You can read a scroll of another tradition only if you have at least Untrained mastery in its Form.

- <span id="identifying"></span>**Identifying:** Outside combat, as the Sage role, you can identify a scroll to learn its spell. Make the same roll you would to read it; if reading it would need no roll, you succeed automatically. On a failure, you learn nothing, and you cannot try that scroll again until your Scribe mastery increases. You can read a scroll you have not identified, but you will not know what it does until it goes off.
- <span id="the-spell"></span>**The spell:** it uses the reach, scale, duration, DC, and dice the scribe chose when writing it, and it can't be coerced. A spell with a duration needs the reader's concentration (see *[Magic Mastery](../../magic/index.md)*, [Concentration](../../magic/index.md#concentration)).
- <span id="learning"></span>**Learning:** only Occult casters, the Bahador and Magus, can learn a spell from a scroll, and only in a Form in which they have at least Untrained mastery. They learn it by casting it, which consumes the scroll.
- <span id="tier-and-use-dc"></span>**Tier and Use DC:** a scroll's tier comes from its classification: Vestige is T1, Distortion T2, Manifestation T3, Incantation T4, Invocation T5, Devastation T6, and Culmination T7. A magan cost not listed in the table above uses the classification of the band it falls in. Its Use DC is that tier's Use DC on the Automatic Use table.

<span id="grimoire-transcription"></span>**Grimoire Transcription (Bahador/Magus):** Recording a spell in a grimoire follows the universal spell acquisition process: magan² units of Scribe Supplies consumed, 1 day per magan of downtime. The spell occupies 1 page per magan in the grimoire. No Scribe mastery gate is required; any Bahador or Magus can record spells they have discovered. The grimoire's alchemically treated vellum is already bound into the book and does not need to be purchased separately.
