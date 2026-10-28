//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Model.js
// This file contains all the classes and their respective subclasses of the DnD 5.5e character generator
// Teammembers that worked on this file:
// - Andrew Smith 
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
/*Main Character Class for storing all the information about a character
/**********************************************************************/
export class Character{
  constructor(name) {

    this.name = name;
    this.HP = 0;
    this.class = {
      className: "",          // e.g., "Fighter"
      level: 1,
      hitDice: "",            // e.g., "1d10"
      classFeatures: []
        };

    this.origin = {
            race: {
                name: "",
                hasSubrace: 0, // 0 = no subrace, 1 = has subrace
                subrace: "",
                abilityScoreIncrease: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
                speciesTraits: [], // e.g., ["Darkvision", "Fey Ancestry"]
                speed: 0
            },
            background: {
                name: "",
                feats: [], // e.g., 
                toolProficiencies: [], // e.g., ["Alchemist's Supplies"]
                skillProficiencies: [], // e.g., ["Insight", "Religion"]
                abilityScoreIncrease: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0}
            },
        };

    // Combat & Vitals
    this.hp = { max: 0, current: 0 };
    this.armorClass = 10;      // Base AC calculated later from armor + dex
    this.proficiencyBonus = 2; // Level 1 default
    

    this.AbilityScores = {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0};
    this.savingThrowProficiencies = [];
    this.weaponMasteries = [];
    this.languages = [];

    this.spellsAndCantrips = {
            cantrips: [], // e.g., ["Light", "Mage Hand"]
            spells: [] // e.g., ["Fireball", "Mage Armor"]
        }
    
    
    this.traits = [];
    this.feats = [];
    this.physDetails = {height: 0, size: 0, age: 0, lifespan: 0, gender: ""};
    this.backpack = {equipment: [], money: 0, inventory: []};
  }
}
//The added constructors for item and its subclasses are in case we decided to also include a way for users to view their descriptions. 
//ex: They hover their mouse over an element in charcter details and a textbox appears showing additional details of the item.
//This is an "after MVP" feature idea

export class item {
    constructor(name) {
        this.name = name;
        this.description = "";
    }
}

export class weapons extends item {
    constructor(name, damage, damageType, properties) {
        super(name);
        this.damage = damage;
        this.damageType = damageType;
        this.properties = properties; // e.g., ["Light", "Finesse"]
    }
}

export class armor extends item {
    constructor(name, armorClass, armorType) {
        super(name);
        this.armorClass = armorClass;
        this.armorType = armorType; // e.g., "Light", "Medium", "Heavy"
    }
}
