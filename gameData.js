// gameData.js - all the static DnD stuff the generator pulls from
// note: object keys are lowercase so use .toLowerCase() when looking things up
// This file contains all the static data for the DnD character generator, such as classes, species, backgrounds, and more.
// Teammembers that worked on this file:
// Eman, Andrew Smith, Naseem 
const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

const species = ["Aasimar", "Dragonborn", "Dwarf", "Elf", "Gnome", "Goliath", "Halfling", "Human", "Orc", "Tiefling"];

const backgrounds = ["Acolyte", "Artisan", "Charlatan", "Criminal", "Entertainer", "Farmer", "Guard", "Guide", "Hermit", "Merchant", "Noble", "Sage", "Sailor", "Scribe", "Soldier", "Wayfarer"];

const subSpecies = {
    dragonborn: ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"],
    elf: ["High", "Wood", "Drow"],
    gnome: ["Forest", "Rock"],
    goliath: ["Cloud's Jaunt", "Fire's Burn", "Frost's Chill", "Hill's Tumble", "Stone's Endurance", "Storm's Thunder"],
    halfling: ["Lightfoot", "Stout"],
    tiefling: ["Abyssal", "Chthonic", "Infernal"],
};

const lifespan = {
    aasimar: 160,
    dragonborn: 80,
    dwarf: 350,
    elf: 750,
    gnome: 425,
    goliath: 80,
    halfling: 150,
    human: 80,
    orc: 80,
    tiefling: 100
};

const heightMinimum = {
    aasimar: 4,
    dragonborn: 5,
    dwarf: 4,
    elf: 5,
    gnome: 3,
    goliath: 7,
    halfling: 2,
    human: 2,
    orc: 6,
    tiefling: 3
};

const heightRange = {
    aasimar: 3,
    dragonborn: 2,
    dwarf: 1,
    elf: 1,
    gnome: 1,
    goliath: 1,
    halfling: 1,
    human: 5,
    orc: 1,
    tiefling: 4
};

const primaryStats = {
    barbarian: "Strength",
    bard: "Charisma",
    cleric: "Wisdom",
    druid: "Wisdom",
    fighter: "Strength",
    monk: "Dexterity",
    paladin: "Strength",
    ranger: "Dexterity",
    rogue: "Dexterity",
    sorcerer: "Charisma",
    warlock: "Charisma", 
    wizard: "Intelligence"
};

// short descriptions for the details page, not the full rules
const feats = {
    "Alert": "Add your Proficiency Bonus to Initiative, and you can swap Initiative with an ally.",
    "Crafter": "Proficiency with three Artisan's Tools, a discount on goods, and faster crafting.",
    "Healer": "Use a Healer's Kit to heal allies, and reroll 1s on healing dice.",
    "Lucky": "Luck Points that give you Advantage, or give attackers Disadvantage.",
    "Magic Initiate (Cleric)": "Learn two Cleric cantrips and one level 1 Cleric spell.",
    "Magic Initiate (Druid)": "Learn two Druid cantrips and one level 1 Druid spell.",
    "Magic Initiate (Wizard)": "Learn two Wizard cantrips and one level 1 Wizard spell.",
    "Musician": "Proficiency with three instruments, and you can inspire allies after a rest.",
    "Savage Attacker": "Once per turn, roll weapon damage twice and use either result.",
    "Skilled": "Gain proficiency in any combination of three skills or tools.",
    "Tavern Brawler": "Stronger unarmed strikes; reroll 1s on them and push targets on a hit.",
    "Tough": "Your hit point maximum increases by 2 per level."
};

const cantrips = {
    bard: ["Blade Ward", 
           "Dancing Lights", "Friends", "Mage Hand", "Mending", "Message", 
           "Minor Illusion", "Prestidigitation", "Starry Wisp", "Thunderclap", "True Strike", "Vicious Mockery"],
    cleric: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy", 
             "Toll the Dead", "Word of Radiance"],
    druid: ["Druidcraft", "Elementalism", "Guidance", "Mending", "Message", "Poison Spray", "Produce Flame", 
            "Resistance", "Shillelagh", "Spare the Dying", "Starry Wisp", "Thorn Whip", "Thunderclap"],
    sorcerer: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Elementalism", "Fire Bolt", 
               "Friends", "Light", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Poison Spray", 
               "Prestidigitation", "Ray of Frost", "Shocking Grasp", "Sorcerous Burst", "Thunderclap", "True Strike"],
    warlock: ["Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Mind Sliver", "Minor Illusion", "Poison Spray"], 
    wizard: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Elementalism", "Fire Bolt", 
               "Friends", "Light", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Poison Spray", 
               "Prestidigitation", "Ray of Frost", "Shocking Grasp", "Sorcerous Burst", "Thunderclap", "Toll the Dead", "True Strike"]
}

const lvl1Spells = {
    bard: ["Animal Friendship", "Bane", "Charm Person", "Color Spray", "Command", "Comprehend Languages", "Cure Wounds", "Detect Magic", 
           "Disguise Self", "Dissonant Whispers", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", 
           "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Tasha's Hideous Laughter", "Thunderwave", "Unseen Servant"],
    cleric: ["Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", 
             "Guiding Light", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Purify Food and Drink", "Sanctuary", "Shield of Faith"],
    druid: ["Animal Friendship", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Entangle", 
            "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Ice Knife", "Jump", "Longstrider", "Protection from Evil and Good", "Purify Food and Drink", 
            "Speak with Animals", "Thunderwave"],
    paladin: ["Bless", "Command", "Compelled Duel", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Divine Favor", "Divine Smite", 
              "Heroism", "Protection from Evil and Good", "Purify Food and Drink", "Searing Smite", "Shield of Faith", "Thunderous Smite", "Wrathful Smite"],
    ranger: ["Alarm", "Animal Friendship", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Ensnaring Strike", "Entangle", "Fog Cloud", "Goodberry", 
             "Hail of Thorns", "Hunter's Mark", "Jump", "Longstrider", "Speak with Animals"],
    sorcerer: ["Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", 
               "Feather Fall", "Fog Cloud", "Grease", "Ice Knife", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Thunderwave", 
               "Witch Bolt"],
    warlock: ["Armor of Agathys", "Arms of Hadar", "Bane", "Charm Person", "Comprehend Languages", "Detect Magic", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", 
              "Protection from Evil and Good", "Speak with Animals", "Tasha's Hideous Laughter", "Unseen Servant", "Witch Bolt"], 
    wizard: ["Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", 
             "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Ice Knife", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", 
             "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"]
};


// ---- stuff from the handbook index doc ----

const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

// fighter, monk, paladin and ranger have 2 primary stats in the handbook
const secondaryPrimaryStats = {
    fighter: "Dexterity",
    monk: "Wisdom",
    paladin: "Charisma",
    ranger: "Wisdom"
};

// 4d6 drop lowest, 6 times
const standardArray = [15, 14, 13, 12, 10, 8];
const randomGeneration = { dice: 4, sides: 6, keepHighest: 3, times: 6 };

// background bonus is either +2/+1 or +1 to all three
const backgroundBonusOptions = [[2, 1], [1, 1, 1]];

const abilityModifiers = {
    3: -4, 4: -3, 5: -3, 6: -2, 7: -2, 8: -1, 9: -1, 10: 0, 11: 0,
    12: 1, 13: 1, 14: 2, 15: 2, 16: 3, 17: 3, 18: 4, 19: 4, 20: 5
};

const speciesTraits = {
    aasimar: ["Celestial Resistance", "Darkvision", "Healing Hands", "Light Bearer", "Celestial Revelation"],
    dragonborn: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance", "Darkvision", "Draconic Flight"],
    dwarf: ["Darkvision", "Dwarven Resilience", "Dwarven Toughness", "Stonecunning"],
    elf: ["Darkvision", "Elven Lineage", "Fey Ancestry", "Keen Senses", "Trance"],
    gnome: ["Darkvision", "Gnomish Cunning", "Gnomish Lineage"],
    goliath: ["Giant Ancestry", "Large Form", "Powerful Build"],
    halfling: ["Brave", "Halfling Nimbleness", "Luck", "Naturally Stealthy"],
    human: ["Resourceful", "Skillful", "Versatile"],
    orc: ["Adrenaline Rush", "Darkvision", "Relentless Endurance"],
    tiefling: ["Darkvision", "Fiendish Legacy", "Otherworldly Presence"]
};

// humans and tieflings can be medium or small
const speciesSize = {
    aasimar: ["Medium"],
    dragonborn: ["Medium"],
    dwarf: ["Medium"],
    elf: ["Medium"],
    gnome: ["Small"],
    goliath: ["Medium"],
    halfling: ["Small"],
    human: ["Medium", "Small"],
    orc: ["Medium"],
    tiefling: ["Medium", "Small"]
};

const backgroundAbilityScores = {
    acolyte: ["Intelligence", "Wisdom", "Charisma"],
    artisan: ["Strength", "Dexterity", "Intelligence"],
    charlatan: ["Dexterity", "Constitution", "Charisma"],
    criminal: ["Dexterity", "Constitution", "Intelligence"],
    entertainer: ["Strength", "Dexterity", "Charisma"],
    farmer: ["Strength", "Constitution", "Wisdom"],
    guard: ["Strength", "Intelligence", "Wisdom"],
    guide: ["Dexterity", "Constitution", "Wisdom"],
    hermit: ["Constitution", "Wisdom", "Charisma"],
    merchant: ["Constitution", "Intelligence", "Charisma"],
    noble: ["Strength", "Intelligence", "Charisma"],
    sage: ["Constitution", "Intelligence", "Wisdom"],
    sailor: ["Strength", "Dexterity", "Wisdom"],
    scribe: ["Dexterity", "Intelligence", "Wisdom"],
    soldier: ["Strength", "Dexterity", "Constitution"],
    wayfarer: ["Dexterity", "Wisdom", "Charisma"]
};

const backgroundFeats = {
    acolyte: "Magic Initiate (Cleric)",
    artisan: "Crafter",
    charlatan: "Skilled",
    criminal: "Alert",
    entertainer: "Musician",
    farmer: "Tough",
    guard: "Alert",
    guide: "Magic Initiate (Druid)",
    hermit: "Healer",
    merchant: "Lucky",
    noble: "Skilled",
    sage: "Magic Initiate (Wizard)",
    sailor: "Tavern Brawler",
    scribe: "Skilled",
    soldier: "Savage Attacker",
    wayfarer: "Lucky"
};

// gaming set / instrument / artisan's tools -> pick one from itemChoices
const backgroundTools = {
    acolyte: "Calligrapher's Supplies",
    artisan: "Artisan's Tools",
    charlatan: "Forgery Kit",
    criminal: "Thieves' Tools",
    entertainer: "Musical Instrument",
    farmer: "Carpenter's Tools",
    guard: "Gaming Set",
    guide: "Cartographer's Tools",
    hermit: "Herbalism Kit",
    merchant: "Navigator's Tools",
    noble: "Gaming Set",
    sage: "Calligrapher's Supplies",
    sailor: "Navigator's Tools",
    scribe: "Calligrapher's Supplies",
    soldier: "Gaming Set",
    wayfarer: "Thieves' Tools"
};

const itemChoices = {
    "Artisan's Tools": ["Alchemist's Supplies", "Brewer's Supplies", "Calligrapher's Supplies",
        "Carpenter's Tools", "Cartographer's Tools", "Cobbler's Tools", "Cook's Utensils",
        "Glassblower's Tools", "Jeweler's Tools", "Leatherworker's Tools", "Mason's Tools",
        "Painter's Supplies", "Potter's Tools", "Smith's Tools", "Tinker's Tools",
        "Weaver's Tools", "Woodcarver's Tools"],
    "Gaming Set": ["Dice", "Dragonchess", "Playing Cards", "Three-Dragon Ante"],
    "Musical Instrument": ["Bagpipes", "Drum", "Dulcimer", "Flute", "Horn", "Lute", "Lyre",
        "Pan Flute", "Shawm", "Viol"]
};

// starting items = option A from the handbook, gold is in GP
const classStartingItems = {
    barbarian: ["Greataxe", "4 Handaxes", "Explorer's Pack"],
    bard: ["Leather Armor", "2 Daggers", "Musical Instrument", "Entertainer's Pack"],
    cleric: ["Chain Shirt", "Shield", "Mace", "Holy Symbol", "Priest's Pack"],
    druid: ["Leather Armor", "Shield", "Sickle", "Druidic Focus (Quarterstaff)", "Explorer's Pack", "Herbalism Kit"],
    fighter: ["Chain Mail", "Greatsword", "Flail", "8 Javelins", "Dungeoneer's Pack"],
    monk: ["Spear", "5 Daggers", "Artisan's Tools or Musical Instrument", "Explorer's Pack"],
    paladin: ["Chain Mail", "Shield", "Longsword", "6 Javelins", "Holy Symbol", "Priest's Pack"],
    ranger: ["Studded Leather Armor", "Scimitar", "Shortsword", "Longbow", "20 Arrows", "Quiver",
             "Druidic Focus (Sprig of Mistletoe)", "Explorer's Pack"],
    rogue: ["Leather Armor", "2 Daggers", "Shortsword", "Shortbow", "20 Arrows", "Quiver",
            "Thieves' Tools", "Burglar's Pack"],
    sorcerer: ["Spear", "2 Daggers", "Arcane Focus (Crystal)", "Dungeoneer's Pack"],
    warlock: ["Leather Armor", "Sickle", "2 Daggers", "Arcane Focus (Orb)", "Book (Occult Lore)", "Scholar's Pack"],
    wizard: ["2 Daggers", "Arcane Focus (Quarterstaff)", "Robe", "Spellbook", "Scholar's Pack"]
};

const classStartingGold = {
    barbarian: 15, bard: 19, cleric: 7, druid: 9, fighter: 4, monk: 11,
    paladin: 9, ranger: 7, rogue: 8, sorcerer: 28, warlock: 15, wizard: 5
};

const backgroundStartingItems = {
    acolyte: ["Calligrapher's Supplies", "Book (Prayers)", "Holy Symbol", "Parchment (10 sheets)", "Robe"],
    artisan: ["Artisan's Tools", "2 Pouches", "Traveler's Clothes"],
    charlatan: ["Forgery Kit", "Costume", "Fine Clothes"],
    criminal: ["2 Daggers", "Thieves' Tools", "Crowbar", "2 Pouches", "Traveler's Clothes"],
    entertainer: ["Musical Instrument", "2 Costumes", "Mirror", "Perfume", "Traveler's Clothes"],
    farmer: ["Sickle", "Carpenter's Tools", "Healer's Kit", "Iron Pot", "Shovel", "Traveler's Clothes"],
    guard: ["Spear", "Light Crossbow", "20 Bolts", "Gaming Set", "Hooded Lantern", "Manacles", "Quiver", "Traveler's Clothes"],
    guide: ["Shortbow", "20 Arrows", "Cartographer's Tools", "Bedroll", "Quiver", "Tent", "Traveler's Clothes"],
    hermit: ["Quarterstaff", "Herbalism Kit", "Bedroll", "Book (Philosophy)", "Lamp", "Oil (3 flasks)", "Traveler's Clothes"],
    merchant: ["Navigator's Tools", "2 Pouches", "Traveler's Clothes"],
    noble: ["Gaming Set", "Fine Clothes", "Perfume"],
    sage: ["Quarterstaff", "Calligrapher's Supplies", "Book (History)", "Parchment (8 sheets)", "Robe"],
    sailor: ["Dagger", "Navigator's Tools", "Rope", "Traveler's Clothes"],
    scribe: ["Calligrapher's Supplies", "Fine Clothes", "Lamp", "Oil (3 flasks)", "Parchment (12 sheets)"],
    soldier: ["Spear", "Shortbow", "20 Arrows", "Gaming Set", "Healer's Kit", "Quiver", "Traveler's Clothes"],
    wayfarer: ["2 Daggers", "Thieves' Tools", "Gaming Set", "Bedroll", "2 Pouches", "Traveler's Clothes"]
};

const backgroundStartingGold = {
    acolyte: 8, artisan: 32, charlatan: 15, criminal: 16, entertainer: 11, farmer: 30,
    guard: 12, guide: 3, hermit: 16, merchant: 22, noble: 29, sage: 8,
    sailor: 20, scribe: 23, soldier: 14, wayfarer: 16
};


export {
    classes, species, backgrounds, subSpecies, lifespan, heightMinimum, heightRange,
    primaryStats, secondaryPrimaryStats, feats, cantrips, lvl1Spells,
    abilities, standardArray, randomGeneration, backgroundBonusOptions, abilityModifiers,
    speciesTraits, speciesSize, backgroundAbilityScores, backgroundFeats, backgroundTools,
    itemChoices, classStartingItems, classStartingGold, backgroundStartingItems, backgroundStartingGold
};