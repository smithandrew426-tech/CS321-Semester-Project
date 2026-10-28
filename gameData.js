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

const cantrips = {
    bard: ["Blade Ward", 
           "Dancing Lights", "Friends", "Mage Hand", "Mending", "Message", 
           "Minor Illusion", "Prestidigitation", "Starry Wisp", "Thunderclap", "True Strike", "Viscous Mockery"],
    cleric: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy", 
             "Toll the Dead", "Word of Radiance"],
    druid: ["Druidcraft", "Elementalism", "Guidance", "Mending", "Message", "Poison Spray", "Produce Flame", 
            "Resistance", "Shillelagh", "Spare the Dying", "Starry Wisp", "Thron Whip", "Thuderclap"],
    sorcerer: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Elementalism", "Fire Bolt", 
               "Friends", "Light", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Poison Spray", 
               "Prestidigitation", "Ray of Frost", "Shocking Grasp", "Sorcerous Burst", "Thunderclap", "True Strike"],
    warlock: ["Blade Ward", "Chill Touch", "Eldritch Blast", "Frinds", "Mage Hand", "Mind Sliver", "Minor Illusion", "Poison Spray"], 
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
}
