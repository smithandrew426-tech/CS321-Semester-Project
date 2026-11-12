// gameData.js - all the static DnD stuff the generator pulls from
// note: object keys are lowercase so use .toLowerCase() when looking things up
// This file contains all the static data for the DnD character generator, such as classes, species, backgrounds, and more.
// Teammembers that worked on this file:
// Eman, Andrew Smith, Naseem 
// Names of the character classes available to the generator.
const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

// Level-one class features and the number of spells and cantrips each class receives.
const lel1ClassFeatures = {

    barbarian: {
        classFeatures: ["Rage", "Unarmored Defense, Weapon Mastery"],
        numOfCantrips: 0,
        numOfPreparedSpells: 0
    },
    bard: {
        classFeatures:["Bardic Inspiration", "Spellcasting"],
        numOfCantrips: 2,
        numOfPreparedSpells: 4
    },
    cleric: {
        classFeatures: ["Spellcasting", "Divine Domain"],
        numOfCantrips: 3,
        numOfPreparedSpells: 4
    },
    druid: {
        classFeatures: ["Druidic", "Spellcasting", "Primal Order"],
        numOfCantrips: 3,
        numOfPreparedSpells: 4
        
    },
    fighter: {
        classFeatures: ["Fighting Style", "Second Wind", "Weapon Mastery"],
        numOfCantrips: 0,
        numOfPreparedSpells: 0
    },
    monk: {
        classFeatures: ["Unarmored Defense", "Martial Arts"],
        numOfCantrips: 0,
        numOfPreparedSpells: 0
    },
    paladin: {
        classFeatures: ["Spellcasting", "Lay on Hands", "Weapon Mastery"],
        numOfCantrips: 0,
        numOfPreparedSpells: 2
    },
    ranger: {
        classFeatures: ["Favored Enemy", "Weapon Mastery", "Spellcasting"],
        numOfCantrips: 0,
        numOfPreparedSpells: 2
    },
    rogue: {
        classFeatures: ["Expertise", "Sneak Attack", "Thieves' Cant", "Weapon Mastery"],
        numOfCantrips: 0,
        numOfPreparedSpells: 0
    },
    sorcerer: {
        classFeatures: ["Spellcasting", "Innate Sorcery"],
        numOfCantrips: 4,
        numOfPreparedSpells: 2
    },
    warlock: {
        classFeatures: ["Eldritch Invocations", "Pact Magic"],
        numOfCantrips: 2,
        numOfPreparedSpells: 2
    },
    wizard: {
        classFeatures: ["Spellcasting", "Arcane Recovery", "Ritual Adept"],
        numOfCantrips: 3,
        numOfPreparedSpells: 4
    }
};

// Core class statistics and proficiencies used when building a character.
const coreClassTraits = {
    barbarian: {
        hitDice: "1d12",
        savingThrowProficiencies: ["Strength", "Constitution"],
        skillProficiencies: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        weaponProficiencies: ["Simple Weapons", "Martial Weapons"],
        ArmorTraits: ["Light Armor", "Medium Armor", "Shields"],
    },
    bard: {
        hitDice: "1d8",
        savingThrowProficiencies: ["Dexterity", "Charisma"],
        skillProficiencies: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
        weaponProficiencies: ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
        ArmorTraits: ["Light Armor"],
    },
    cleric: {  
        hitDice: "1d8",
        savingThrowProficiencies: ["Wisdom", "Charisma"],
        skillProficiencies: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        weaponProficiencies: ["Simple Weapons"],
        ArmorTraits: ["Light Armor", "Medium Armor", "Shields"],
    },
    druid: {
        hitDice: "1d8",
        savingThrowProficiencies: ["Intelligence", "Wisdom"],
        skillProficiencies: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        weaponProficiencies: ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
        ArmorTraits: ["Light Armor", "Medium Armor"],
    },
    fighter: {
        hitDice: "1d10",
        savingThrowProficiencies: ["Strength", "Constitution"],
        skillProficiencies: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        weaponProficiencies: ["Simple Weapons", "Martial Weapons"],
        ArmorTraits: ["Light Armor", "Medium Armor", "Shields"],
    },
    monk: {
        hitDice: "1d8",
        savingThrowProficiencies: ["Dexterity", "Wisdom"],
        skillProficiencies: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        weaponProficiencies: ["Simple Weapons"],
        ArmorTraits: ["Light Armor"],
    },
    paladin: {
        hitDice: "1d10",
        savingThrowProficiencies: ["Strength", "Charisma"],
        skillProficiencies: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", ],
        weaponProficiencies: ["Simple Weapons", "Martial Weapons"],
        ArmorTraits: ["Light Armor", "Medium Armor"],
    },
    ranger: {
        hitDice: "1d10",
        savingThrowProficiencies: ["Strength", "Dexterity"],
        skillProficiencies: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        weaponProficiencies: ["Simple Weapons", "Martial Weapons"],
        ArmorTraits: ["Light Armor", "Medium Armor", "Shields"],
    },
    rogue: {
        hitDice: "1d8",
        savingThrowProficiencies: ["Dexterity", "Intelligence"],
        skillProficiencies: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        weaponProficiencies: ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
        ArmorTraits: ["Light Armor"],
    },
    sorcerer: {
        hitDice: "1d6",
        savingThrowProficiencies: ["Constitution", "Charisma"],
        skillProficiencies: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Wands"],
        ArmorTraits: ["Light Armor"],
    },
    warlock: {
        hitDice: "1d8",
        savingThrowProficiencies: ["Wisdom", "Charisma"],
        skillProficiencies: ["Arcana", "Diplomacy", "Intimidation", "Investigation", "Nature", "Religion"],
        weaponProficiencies: ["Simple Weapons"],
        ArmorTraits: ["Light Armor"],
    },
    wizard: {
        hitDice: "1d6",
        savingThrowProficiencies: ["Intelligence", "Wisdom"],
        skillProficiencies: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Wands"],
        ArmorTraits: ["Light Armor"],
    }
}

// Species available for randomly generated characters.
const species = ["Aasimar", "Dragonborn", "Dwarf", "Elf", "Gnome", "Goliath", "Halfling", "Human", "Orc", "Tiefling"];

// Backgrounds available for randomly generated characters.
const backgrounds = ["Acolyte", "Artisan", "Charlatan", "Criminal", "Entertainer", "Farmer", "Guard", "Guide", "Hermit", "Merchant", "Noble", "Sage", "Sailor", "Scribe", "Soldier", "Wayfarer"];

// Subspecies options keyed by the lowercase name of the species that has them.
const subSpecies = {
    dragonborn: ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"],
    elf: ["High", "Wood", "Drow"],
    gnome: ["Forest", "Rock"],
    goliath: ["Cloud's Jaunt", "Fire's Burn", "Frost's Chill", "Hill's Tumble", "Stone's Endurance", "Storm's Thunder"],
    halfling: ["Lightfoot", "Stout"],
    tiefling: ["Abyssal", "Chthonic", "Infernal"],
};

// Maximum age values used to randomly generate each species' age.
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

// Minimum height values, in feet, used to generate each species' height.
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

// Height ranges, in feet, added to each species' minimum height.
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

// Primary ability score associated with each class.
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

// Cantrips available to each spellcasting class.
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

// Level-one spells available to each spellcasting class.
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

// Ability score names used throughout character generation.
const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

// fighter, monk, paladin and ranger have 2 primary stats in the handbook
const secondaryPrimaryStats = {
    fighter: "Dexterity",
    monk: "Wisdom",
    paladin: "Charisma",
    ranger: "Wisdom"
};

// 4d6 drop lowest, 6 times
// Preset ability scores available when using the standard array method.
const standardArray = [15, 14, 13, 12, 10, 8];
// Dice parameters for rolling six ability scores using 4d6 and keeping the highest three.
const randomGeneration = { dice: 4, sides: 6, keepHighest: 3, times: 6 };

// background bonus is either +2/+1 or +1 to all three
const backgroundBonusOptions = [[2, 1], [1, 1, 1]];

// Ability score values mapped to their corresponding modifiers.
const abilityModifiers = {
    3: -4, 4: -3, 5: -3, 6: -2, 7: -2, 8: -1, 9: -1, 10: 0, 11: 0,
    12: 1, 13: 1, 14: 2, 15: 2, 16: 3, 17: 3, 18: 4, 19: 4, 20: 5
};

// Traits granted by each species, keyed by lowercase species name.
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

// Ability scores each background allows the character to increase.
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

// Feat granted by each background, keyed by lowercase background name.
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

// Lists of concrete items available when a background grants a choice category.
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

// Class starting equipment and gold for equipment option A.
const classStartingEquipmentA = {
    barbarian: { equipment: ["Greataxe", "4 Handaxes", "Explorer's Pack"], gold: 15 },
    bard: { equipment: ["Leather Armor", "2 Daggers", "Musical Instrument", "Entertainer's Pack"], gold: 19 },
    cleric: { equipment: ["Chain Shirt", "Shield", "Mace", "Holy Symbol", "Priest's Pack"], gold: 7 },
    druid: { equipment: ["Leather Armor", "Shield", "Sickle", "Druidic Focus (Quarterstaff)", "Explorer's Pack", "Herbalism Kit"], gold: 9 },
    fighter: { equipment: ["Chain Mail", "Greatsword", "Flail", "8 Javelins", "Dungeoneer's Pack"], gold: 4 },
    monk: { equipment: ["Spear", "5 Daggers", "Artisan's Tools or Musical Instrument", "Explorer's Pack"], gold: 11 },
    paladin: { equipment: ["Chain Mail", "Shield", "Longsword", "6 Javelins", "Holy Symbol", "Priest's Pack"], gold: 9 },
    ranger: { equipment: ["Studded Leather Armor", "Scimitar", "Shortsword", "Longbow", "20 Arrows", "Quiver", "Druidic Focus (Sprig of Mistletoe)", "Explorer's Pack"], gold: 7 },
    rogue: { equipment: ["Leather Armor", "2 Daggers", "Shortsword", "Shortbow", "20 Arrows", "Quiver", "Thieves' Tools", "Burglar's Pack"], gold: 8 },
    sorcerer: { equipment: ["Spear", "2 Daggers", "Arcane Focus (Crystal)", "Dungeoneer's Pack"], gold: 28 },
    warlock: { equipment: ["Leather Armor", "Sickle", "2 Daggers", "Arcane Focus (Orb)", "Book (Occult Lore)", "Scholar's Pack"], gold: 15 },
    wizard: { equipment: ["2 Daggers", "Arcane Focus (Quarterstaff)", "Robe", "Spellbook", "Scholar's Pack"], gold: 5 }
};

// Class starting equipment and gold for equipment option B.
const classStartingEquipmentB = {
    barbarian: { equipment: [], gold: 75 },
    bard: { equipment: [], gold: 90 },
    cleric: { equipment: [], gold: 110 },
    druid: { equipment: [], gold: 50 },
    fighter: { equipment: ["Studded Leather Armor", "Longsword", "2 Handaxes", "Dungeoneer's Pack"], gold: 11 },
    monk: { equipment: [], gold: 50 },
    paladin: { equipment: [], gold: 150 },
    ranger: { equipment: [], gold: 150 },
    rogue: { equipment: [], gold: 100 },
    sorcerer: { equipment: [], gold: 50 },
    warlock: { equipment: [], gold: 100 },
    wizard: { equipment: [], gold: 55 }
}

// Class starting equipment and gold for equipment option C.
const classStartingEquipmentC = {
    fighter: { equipment: [], gold: 155 }
}





// Items granted by each background, keyed by lowercase background name.
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

// Starting gold granted by each background.
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
    itemChoices, backgroundStartingItems, backgroundStartingGold,
    lel1ClassFeatures, coreClassTraits, classStartingEquipmentA, classStartingEquipmentB, classStartingEquipmentC
};