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
    this.name = "";
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
    this.spellsAndCantrips = {
            cantrips: [], // e.g., ["Light", "Mage Hand"]
            spells: [] // e.g., ["Fireball", "Mage Armor"]
        }
    this.AbilityScores = {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0};
    this.traits = [];
    this.feats = [];
    this.physDetails = {height: 0, size: 0, age: 0, lifespan: 0, gender: ""};
    this.backpack = {equipment: [], money: 0, inventory: []};
  }
}
//The added constructors for item and its subclasses are in case we decided to also include a way for users to view their descriptions. 
//ex: They hover their mouse over an element in charcter details and a textbox appears showing additional details of the item.
//This is an "after MVP" feature idea

//Items that the character can have in their inventories and equipement
export class item{
    //initial constructor for item class
    constructor(name) {
        this.name = name;
    }
    //constructor for item class with description for future use if needed
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

export class weapons extends item{
    //initial constructor for weapons class
    constructor(name, damage, damageType, properties) {
        super(name);
        this.damage = damage;
        this.damageType = damageType;
        this.properties = properties; // e.g., ["Light", "Finesse"]
    }
    //constructor for weapons class with description for future use if needed
    constructor(name, description, damage, damageType, properties) {
        super(name, description);
        this.damage = damage;
        this.damageType = damageType;
        this.properties = properties; // e.g., ["Light", "Finesse"]
    }
}

export class armor extends item{
    //initial constructor for armor class
    constructor(name, armorClass, armorType) {
        super(name);
        this.armorClass = armorClass;
        this.armorType = armorType; // e.g., "Light", "Medium", "Heavy"
    }
    //constructor for armor class with description for future use if needed
    constructor(name, description, armorClass, armorType) {
        super(name, description);
        this.armorClass = armorClass;
        this.armorType = armorType; // e.g., "Light", "Medium", "Heavy"
    }
}
