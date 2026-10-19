---
generated_by: tools/sync_mastery.py
---

# Object Durability

Objects have a durability pool determined by two factors: **size** (physical dimensions) and **hardness** (material resilience). When an object takes damage, reduce its durability pool by the damage dealt minus its resistance (see [Materials and Resistance](#materials-and-resistance)). When the pool reaches 0, the object is destroyed or breached.

These rules apply to any object that doesn't have its own durability and resistances. Armor, shields, and other items with listed values use those instead.

**Durability = Size × Hardness × 2**

## Size

| Category | Value | Examples |
|:---|:---:|:---|
| Tiny | 1 | Paper, vial, coin, lock, small pouch |
| Small | 2 | Weapon, shield, chair, lantern |
| Medium | 4 | Suit of armor, door, chest, barrel |
| Large | 8 | Gate, wagon, wall section (10 ft) |
| Huge | 16 | Building wall, bridge section |
| Massive | 32 | Tower, ship hull |
| Colossal | 64 | Castle wall, fortress gate |

Each size category roughly doubles the previous.

## Hardness

| Category | Value | Examples |
|:---|:---:|:---|
| Fragile | 1 | Paper, glass, cloth, thin ceramic |
| Soft | 2 | Wood, leather, rope, bone |
| Firm | 4 | Dense wood, thick hide, packed earth |
| Solid | 7 | Stone, bronze, low-grade iron |
| Hard | 11 | Iron, steel |
| Reinforced | 16 | Tempered steel, thick mortared stone, composite |
| Fortified | 22 | Castle stone, masterwork alloys |

Hardness scales more aggressively than size: the gap between each level increases by 1.

## Durability Table

|  | Fragile (1) | Soft (2) | Firm (4) | Solid (7) | Hard (11) | Reinforced (16) | Fortified (22) |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Tiny (1)** | 2 | 4 | 8 | 14 | 22 | 32 | 44 |
| **Small (2)** | 4 | 8 | 16 | 28 | 44 | 64 | 88 |
| **Medium (4)** | 8 | 16 | 32 | 56 | 88 | 128 | 176 |
| **Large (8)** | 16 | 32 | 64 | 112 | 176 | 256 | 352 |
| **Huge (16)** | 32 | 64 | 128 | 224 | 352 | 512 | 704 |
| **Massive (32)** | 64 | 128 | 256 | 448 | 704 | 1024 | 1408 |
| **Colossal (64)** | 128 | 256 | 512 | 896 | 1408 | 2048 | 2816 |

## Reference Points

| Object | Size | Hardness | Durability |
|:---|:---|:---|:---:|
| Sheet of paper | Tiny | Fragile | 2 |
| Glass window | Small | Fragile | 4 |
| Steel lock | Tiny | Hard | 22 |
| Wooden door | Medium | Soft | 16 |
| Reinforced door | Medium | Firm | 32 |
| Steel sword | Small | Hard | 44 |
| Plate armor | Medium | Hard | 88 |
| Iron gate | Large | Hard | 176 |
| Stone wall (section) | Large | Solid | 112 |
| Ship hull | Massive | Firm | 256 |
| Castle wall | Colossal | Fortified | 2816 |

## Materials and Resistance

What an object is made of decides what can harm it. Each hit against an object is one of three kinds:

- **Weapons:** Cutting, Cleaving, Crushing, Piercing, and Puncturing.
- **Material magic:** Sea, Stone, Primal, and Profane.
- **Energy magic:** Fire, Sky, Sacred, and Void.

Against each kind, a material is **immune** (the hit does nothing), takes **full** damage, or **resists**. **Resistance is half the object's hardness value** (rounded down), subtracted from each hit.

| Material | Hardness | Weapons | Material magic | Energy magic |
|:---|:---|:---|:---|:---|
| Bone, horn | Soft | Full from Crushing; resists the rest | Resists | Resists |
| Bronze, copper, lead | Solid | Immune to Cutting, Piercing, and Puncturing; resists the rest | Resists | Resists |
| Glass, ceramic | Fragile | Full | Full | Resists |
| Gold | Solid | As other metals | Resists; immune to all acids | Resists |
| Iron, steel | Hard / Reinforced | Immune to Cutting, Piercing, and Puncturing; resists the rest | Resists | Resists |
| Leather, hide | Soft / Firm | Full from Cutting; resists the rest | Resists | Resists |
| Packed earth | Firm | Immune to Cutting, Piercing, and Puncturing; resists the rest | Full | Immune |
| Paper, cloth, rope | Fragile / Soft | Full | Full | Full |
| Stone, masonry | Solid to Fortified | Immune to Cutting, Piercing, and Puncturing; resists the rest | Resists | Resists |
| Wood | Soft / Firm | Immune to Piercing and Puncturing; full from Cleaving; resists the rest | Resists | Full from Fire; resists the rest |

**Acid** ignores the resistance of the material it eats (see *[Alchemy](../skills/trade/alchemy/index.md)*).

**Unusual cases are the GM's call:** heating stone with fire and then dousing it with water to crack it, extreme cold making iron brittle, or a spell whose effect plainly suits the material.

*Example: a steel lock (durability 22, hardness 11) resists 5 from each blow of a maul, ignores arrows entirely, and takes full damage from aqua fortis.*

## Scale Interaction

When a spell or effect targets an object, the spell's Scale determines how large a section is affected. A Personal-Scale Obliterate targeting a castle wall affects a single point; a Large-Scale Obliterate affects a 10 ft section. The durability values in the table assume the attacker's Scale matches the object's size. Mismatched Scale (small spell against large object) may reduce effectiveness at GM discretion.
