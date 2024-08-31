[![Foundry](https://img.shields.io/badge/Foundry%40CompatibleCore-v12-brightgreen)](https://foundryvtt.com/)
![GitHub All Releases](https://img.shields.io/github/downloads/sparkcity/fvtt-me5e/total)
![GitHub @Latest](https://img.shields.io/github/downloads/sparkcity/fvtt-me5e/latest/total)
[![DND5E](https://img.shields.io/badge/DnD5E-3.3.1-red)](https://gitlab.com/foundrynet/dnd5e)
![Static Badge](https://img.shields.io/badge/ME5E-1.4.4-blue)

# Content

- ME5E Content Compendiums
  - Backgrounds
  - Bestiary
  - Classes
  - Features
  - Items
  - Powers
  - Rules
  - Vehicles
  - Weapons

(NOTE: Races from ME5e are copyright infringing and will not be included in this module. Similarly, any potentially copyright infringing entries have been left out of the Bestiary and will not be added.)

# Acknowledgements and Attributions

## Acknowledgements

- Foundry VTT Community Discord, for helping with troubleshooting and questions
- Astrotech89, for forking the repo when I dropped it and carrying on to build a module compatible with ME5E 1.4.1. To use that version, please refer to his module.

## Attributions

- Icons are from [Game-icons.net](https://game-icons.net/).
  - Pistol gun icon by **John Colburn**
  - Sawed-off shotgun icon; Missile launcher icon; MP5 icon; Uzi icon; CPU icon; Silver bullet icon; Scout ship icon; Bracer icon; Greaves icon; Shoulder armor icon; Leather armor icon; Horizon road icon; Targeting icon; Hive mind icon; Land mine icon; Gravitation icon; Laser turret icon; Spaceship icon; Starfighter icon; Lunar module icon; Stun grenade icon; Machine gun magazine; Classical knowledge icon, Dragon shield icon; Cavalry icon by **Delapouite**
  - Battle gear icon; Barbute icon; Book aura icon; Autogun icon; Missile swarm icon; Rocket icon; Sinusoidal beam icon; Strafe icon; Tesla turret icon; Grenade icon; Riot shield icon; Double ringed orb icon; Paw print icon; Hound icon by **Lorc**
- Background is from [CharlVera on Pixabay](https://pixabay.com/illustrations/space-earth-gala-planet-universe-4634011/).
- Compendium content from ME5E v1.4.4. Copyrighted materials, names, or otherwise uniquely distinguishable words related to existing IPs have been omitted or changed in order to be compliant with copyright restrictions and not to infringe on any copyright. For full content, GMs and Players should refer to the website for ME5E.

# Notes

## By the Author

As a hobby project, development will take place as time allows. My focus will largely be making sure it stays compatible with Foundry core updates and Dungeons & Dragons system updates. I will add new features if possible when I have the time. Contributions are welcome from anyone interested in testing and adding features.

## Development

### Adding new icons

Most icons have been sourced from game-icons.net. Depending on the item and if they have varying rarities, the icons are downloaded with fill colors according to the rarity. Hex colors as follows:

- Common: #ffffff
- Uncommon: #7ed321
- Rare: #48baff
- Very Rare: #bd10e0
- Legendary (Spec): #d30707

### Compendium Tree Structure

```
ME5E Content
└───Backgrounds
└───Bestiary
└───Classes
└───Features
|   └───Background
|   └───Class
|   |   └───Adept
|   |   └───Engineer
|   |   └───Experiment
|   |   └───Explorer
|   |   └───Infiltrator
|   |   └───Musician
|   |   └───Sentinel
|   |   └───Soldier
|   |   └───Tracker
|   |   └───Vanguard
|   └───Racial
|   |   └───Ancient Species
|   |   |   └───1
|   |   └───Andromeda Species
|   |   |   └───1
|   |   |   └───2
|   |   └───Fringe Species
|   |   |   └───1
|   |   |   └───2
|   |   |   └───3
|   |   |   └───4
|   |   |   └───5
|   |   └───Milky Way Major Species
|   |   |   └───1
|   |   |   └───2
|   |   |   └───3
|   |   |   └───4
|   |   |   └───5
|   |   |   └───6
|   |   |   └───7
|   |   └───Milky Way Minor Species
|   |   |   └───1
|   |   |   └───2
|   |   |   └───3
|   |   |   └───4
|   └───Subclass
└───Items
|   └───Gear
|   |   └───Ammunition
|   |   └───Devices
|   |   └───Grenades
|   |   └───Programs
|   |   └───Shields
|   |   └───Tools
|   └───Mods
|   |   └───Armor
|   |   |   └───Arms
|   |   |   └───Chest
|   |   |   └───Head
|   |   |   └───Legs
|   |   └───Weapon
|   |   |   └───Ammo
|   |   |   └───Barrel
|   |   |   └───Body
|   |   |   └───Grip
|   |   |   └───Magazine
|   |   |   └───Strike
|   └───Template Items
└───Powers
└───Rules
└───Vehicles
|   └───Starships
|   └───Transports
└───Weapons
|   └───Assault Rifles
|   └───Heavy Pistols
|   └───Heavy Weapons
|   └───Melee
|   └───Shotguns
|   └───Sniper Rifles
|   └───SMGs
```
