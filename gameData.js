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
}

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

const feats = {

};
