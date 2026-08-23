---
layout: doc
title: Earth
---

![Forks, Washington](../../server/earth-banner.png)

---

# {{ $frontmatter.title }}

CC Earth is a Geopolitical Towny survival server based on a 1:500 scale map of the actual Earth. Explore the world,
conquer custom structures, establish settlements, and work your way up to ruling a massive globe-spanning empire.

- 1:500 scale map of the Earth with real-life biomes
- Gold-based economy (earn money by mining gold and trading with others)
- Custom player chest shops

## How to Play

You can get started on CC Earth by creating a town using `/town create <name>`. This costs 64 gold ingots and will claim
a single 16x16 chunk where you are standing.

## Useful Commands

### General Commands

- `/map` : View a map of CC Earth
- `/history-wiki` : View a wiki of CC Earth's history

### Town Commands

- `/town` : View information about your town
- `/town create <name>` : Creates a new town
- `/town spawn` : Teleports you to the spawn location of your town
- `/town spawn <name>` : Teleports you to the spawn location of the specified town
- `/town claim` : Claims the chunk you are currently in for your town
    - The chunk must be adjacent to a chunk already claimed by your town
- `/town deposit <amount>` : Deposits the specified amount of gold into your town's bank account
- `/town withdraw <amount>` : Withdraws the specified amount of gold from your town's bank account
- `/town add <username>` : Invites a player to your town
- `/town kick <username>` : Kicks a player from your town
- `/town delete` : Deletes your town
- `/town list` : View a list of all towns on Earth

### Nation Commands

- `/nation` : View information about your nation
- `/nation join <name>` : Joins a nation
- `/nation create <name>` : Creates a new nation
- `/nation disband` : Disbands your nation
- `/nation invite <town>` : Invites a player to your nation
- `/nation kick <town>` : Kicks a player from your nation
- `/nation list` : View a list of all nations on Earth
- `/nation deposit <amount>` : Deposits the specified amount of gold into your nation's bank account
- `/nation withdraw <amount>` : Withdraws the specified amount of gold from your nation's bank account

### Chest Shop

WIP

### Block Locker

WIP

## Towny Prices

Listed below are the base prices for Towny.

|           Item           |  Price   |
|:------------------------:|:--------:|
|         New Town         | 64 gold  |
|        New Nation        | 320 gold |
|       Town Reclaim       | 256 gold |
|       Town Upkeep        |  8 gold  |
|      Nation Upkeep       | 16 gold  |
|  Purchasable Town Block  | 32 gold  |
|         Outpost          | 256 gold |
| Per Outpost Town Upkeep¹ | 4.0 gold | 

¹ Each outpost will increase the Town Upkeep by 4.0 gold.

## Town & Nation Levels

This section outlines the different levels that Towns and Nations can unlock on Earth. Advancing to a new level requires
a specific number of residents and will unlock additional features (such as Town Blocks or Outposts).

- Upkeep Modifier: This value multiplies the base upkeep cost. Upkeep only increases for Nations.
- Purchasable Town Blocks: This is the number of additional Town Blocks that can be purchased by the Town.

#### Town Levels

| Level | # of Residents | Upkeep Modifier | Purchasable Town Blocks |
|:-----:|:--------------:|:---------------:|:-----------------------:|
|   I   |       1        |       1.0       |           64            |
|  II   |       2        |       1.0       |           128           |
|  III  |       5        |       1.0       |           192           |
|  IV   |       10       |       1.0       |           256           |
|   V   |       15       |       1.0       |           320           |
|  VI   |       20       |       1.0       |           384           |
|  VII  |       25       |       1.0       |           448           |
| VIII  |       30       |       1.0       |           512           |
|  IX   |       35       |       1.0       |           576           |
|   X   |       40       |       1.0       |           640           |

#### Nation Levels

| Level | # of Residents | Upkeep Modifier | Bonus Town Blocks | Outpost Limit |
|:-----:|:--------------:|:---------------:|:-----------------:|:-------------:|
|   I   |       1        |       1.0       |        32         |       0       |
|  II   |       5        |       2.0       |        64         |       1       |
|  III  |       10       |       3.0       |        96         |       2       |
|  IV   |       15       |       4.0       |        128        |       3       |
|   V   |       20       |       5.0       |        160        |       4       |
|  VI   |       30       |       6.0       |        192        |       5       |
|  VII  |       40       |       7.0       |        224        |       5       |
| VIII  |       50       |       8.0       |        256        |       5       |
|  IX   |       60       |       9.0       |        288        |       5       |
|   X   |       70       |      10.0       |        320        |       5       |
