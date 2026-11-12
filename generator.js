/*
    CharacerDetails.html
    This file contains the fully loaded character details after the generator runs its course.
    It will display all of the necessary information required such as race, origin, equipment, and more.

    Teammembers that worked on this file:
    - Naseem: helper functions and main logic, Andrew Smith: character generation, integration, and page redirection
*/

import {classes as classArray, species as speciesArray, 
        backgrounds as backgroundArray, subSpecies, lifespan, 
        heightMinimum as heightMin, heightRange, primaryStats, 
        feats, cantrips, lvl1Spells, speciesTraits, 
        backgroundTools, itemChoices, 
        backgroundStartingItems, backgroundStartingGold,
        backgroundFeats, lel1ClassFeatures, coreClassTraits, classStartingEquipmentA, 
        classStartingEquipmentB, classStartingEquipmentC} from './gameData.js';
import {Character, item, weapon, armor} from './model.js';

//randomly selects a class index for the character
let numClasses = classArray.length;
//randomly selects a class for the character based on the class index
let classIndex = Math.floor(Math.random() * numClasses);


if (window.location.href.includes("Loading.html")) {
    console.log("Loading page detected");
    console.log("Starting loading timer and character generation");
    const newCharacter = generateRandomCharacter();
    console.log("Generated character:", newCharacter);
    localStorage.setItem("generatedCharacter", JSON.stringify(newCharacter));
    console.log("Saved generated character to localStorage");
    // The timer is scoped to this page load so stale storage cannot block a later redirect.
    setTimeout(() => {
        window.location.href = "CharacterDetails.html";
        console.log("Redirecting to CharacterDetails.html");
    }, 3000);
} 
else {
    console.log("Character details page detected");
    // We are already on the character details page, so generate a new character and store it in local storage.
    const newCharacter = generateRandomCharacter();
    console.log("Generated character:", newCharacter);
    localStorage.setItem("generatedCharacter", JSON.stringify(newCharacter));
}

function generateRandomCharacter() {
    let newCharacter = new Character("Default Name");
    newCharacter.class.className = generateClass();
    newCharacter.origin.background.name = generateBackground();
    newCharacter.origin.race.name = generateSpecies();
    if(hasSubSpecies(newCharacter.origin.race.name)) {
        newCharacter.origin.race.subrace = generateSubSpecies(newCharacter.origin.race.name);
    }
    newCharacter.physDetails.age = generateAge(newCharacter.origin.race.name);
    newCharacter.physDetails.height = generateHeight(newCharacter.origin.race.name);
    newCharacter.AbilityScores = generateAbilityScores(newCharacter.class.className, newCharacter.AbilityScores);
    newCharacter.languages = generateLanguages(newCharacter);
    generateClassFeatures(newCharacter);

    generateFeat(newCharacter);
    generateSpells(newCharacter);
    generateCantrips(newCharacter);

    generateitems(newCharacter);

    return newCharacter;
}

function generateClass() {
    //Randomly returns a single DnD character class from the class array
    return classArray[classIndex];
}

function generateBackground() {
    let numBackgrounds = backgroundArray.length;
    let backgroundIndex = Math.floor(Math.random() * numBackgrounds);
    return backgroundArray[backgroundIndex];
}

function generateSpecies() {
    let numSpecies = speciesArray.length;
    let speciesIndex = Math.floor(Math.random() * numSpecies);
    return speciesArray[speciesIndex];
}

function generateSubSpecies(modelSpecies) {
    if(hasSubSpecies(modelSpecies) == false) {
        return null;
    }

    let subSpeciesArray = subSpecies[modelSpecies.toLowerCase()];
    let numSubSpecies = subSpeciesArray.length;
    let subSpeciesIndex = Math.floor(Math.random() * numSubSpecies);
    return subSpeciesArray[subSpeciesIndex];
}

function hasSubSpecies(modelSpecies) {
    if(modelSpecies.toLowerCase() == "dragonborn") {
        return true;
    }
    else if(modelSpecies.toLowerCase() == "elf") {
        return true;
    }
    else if(modelSpecies.toLowerCase() == "gnome") {
        return true;
    }
    else if(modelSpecies.toLowerCase() == "goliath") {
        return true;
    }
    else if(modelSpecies.toLowerCase() == "halfling") {
        return true;
    }
    else if(modelSpecies.toLowerCase() == "tiefling") {
        return true;
    }
    else {
        return false;
    }
}

function generateAge(modelSpecies) {
    let speciesLifespan = lifespan[modelSpecies.toLowerCase()];
    let age = Math.floor(Math.random() * speciesLifespan);
    return age;
}

function generateHeight(modelSpecies) {
    let speciesHeightMin = heightMin[modelSpecies.toLowerCase()];
    let speciesHeightRange = heightRange[modelSpecies.toLowerCase()];

    let height = (Math.random() * speciesHeightRange);
    height = Math.round(height * 100.0) / 100.0;
    height = height + speciesHeightMin;
    return height.toFixed(2); 
}

function generateAbilityScores(modelClass, modelAbilityScores) {

    const scores = new Array(6);
    for(let i = 0; i < scores.length; i++) {
        scores[i] = abilityScoreHelper();
    }
    let maxScore = -1;
    let maxIndex = -1;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > maxScore) {
            maxScore = scores[i];
            maxIndex = i;
        }
    }
    
    let primaryStat = primaryStats[modelClass.toLowerCase()].toLowerCase();
    modelAbilityScores[primaryStat] = maxScore;

    let i = 0;
    while(checkAbilityScoresInitilized(modelAbilityScores) == false && i < scores.length) {
        let randomStat = chooseRandomStatHelper();
        if(modelAbilityScores[randomStat] == 0 && i != maxIndex) {
            modelAbilityScores[randomStat] = scores[i];
            
        }
        i++;
        
    }

    return modelAbilityScores;
}

function checkAbilityScoresInitilized(modelAbilityScores) {
    let stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    for(let i = 0; i < stats.length; i++) {
        if(modelAbilityScores[stats[i]] <= 0) {
            return false;
        }
    }

    return true;
}

function chooseRandomStatHelper() {
    let stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    let chosenStat = stats[Math.floor(Math.random() * stats.length)];
    return chosenStat;
}

function abilityScoreHelper() {
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);
    let dice3 = Math.floor(Math.random() * 6);
    let dice4 = Math.floor(Math.random() * 6);

    let lowestRoll = Math.min(dice1, dice2, dice3, dice4);
    return (dice1 + dice2 + dice3 + dice4 - lowestRoll);
}

// Adds the character's class and background starting equipment and their starting gold.
function generateitems(character){

    // Fighters have three class equipment options; all other classes have two.
    const className = character.class.className.toLowerCase();
    let equipmentOption;

    if (className === "fighter") {
        equipmentOption = getCryptoSecureRandomIndex(3);
    } else {
        equipmentOption = getCryptoSecureRandomIndex(2);
    }

    let startingEquipment = [];
    switch (equipmentOption) {
        case 0:
            // Use classStartingEquipmentA for the character's class
            startingEquipment = classStartingEquipmentA[className]?.equipment || [];
            // If the class does not have a defined starting equipment option A, use an empty array

            //add the gold associated with the aption to character gold in backpack
            character.backpack.money += classStartingEquipmentA[className]?.gold || 0;
            break;
        case 1:
            // Use classStartingEquipmentB for the character's class
            startingEquipment = classStartingEquipmentB[className]?.equipment || [];
            // If the class does not have a defined starting equipment option B, use an empty array
            character.backpack.money += classStartingEquipmentB[className]?.gold || 0;
            break;
        case 2:
            // Use classStartingEquipmentC for the character's class
            startingEquipment = classStartingEquipmentC[className]?.equipment || [];
            // If the class does not have a defined starting equipment option C, use an empty array
            character.backpack.money += classStartingEquipmentC[className]?.gold || 0;
            break;
        default:
            startingEquipment = [];
            break;
    }

    // Store each selected class item as an item object in the character's equipment.
    for (const startingItem of startingEquipment) {
        character.backpack.equipment.push(new item(startingItem));
    }

    const backgroundItems = backgroundStartingItems[character.origin.background.name.toLowerCase()];

    // Replace choice-category entries with a concrete item; keep fixed items unchanged.
    for (const startingItem of backgroundItems) {

        const choices = itemChoices[startingItem];
        if (choices) {
            const selectedItem = choices[getCryptoSecureRandomIndex(choices.length)];
            character.backpack.inventory.push(new item(selectedItem));
        } else {
            character.backpack.inventory.push(new item(startingItem));
        }
    }
}

// Adds the feat assigned to the character's background and its starting gold.
function generateFeat(character){
    // Assign the feat associated with the character's background to the character's feats array
    const feat = backgroundFeats[character.origin.background.name.toLowerCase()];
    // Only add the background's feat and gold when a feat is defined for it.
    if (feat) {
        character.feats.push(feat);
        character.backpack.money += backgroundStartingGold[character.origin.background.name.toLowerCase()] || 0;
    }
}

// Copies the level-one feature list for the character's class onto the character.
function generateClassFeatures(character){
    character.class.classFeatures = lel1ClassFeatures[character.class.className.toLowerCase()].classFeatures;
    console.log("Generated class features for " + character.class.className + ": ", character.class.classFeatures);
}

// Selects the character's class spells and adds a Magic Initiate spell when applicable.
function generateSpells(character){
    let characterSpells = [];
    const className = character.class.className.toLowerCase();
    const numOfPreparedSpells = lel1ClassFeatures[className].numOfPreparedSpells;

    console.log("Number of prepared spells for " + character.class.className + ": ", numOfPreparedSpells);
    // Non-spellcasting classes have no class spells to choose.
    if (numOfPreparedSpells > 0) {
        const availableSpells = lvl1Spells[className];
        console.log("Available spells for " + character.class.className + ": ", availableSpells);
        const shuffledSpells = selectRandomItems(availableSpells, numOfPreparedSpells);
        console.log("Shuffled spells for " + character.class.className + ": ", shuffledSpells);
        characterSpells = shuffledSpells;
    }

    const magicInitiateClass = getMagicInitiateClass(character);
    // Magic Initiate grants an additional spell from the feat's chosen class.
    if (magicInitiateClass) {
        const featSpells = lvl1Spells[magicInitiateClass];
        characterSpells.push(...selectRandomItems(featSpells, 1, characterSpells));
    }

    character.spellsAndCantrips.spells = characterSpells;
}

// Selects the character's class cantrips and adds Magic Initiate cantrips when applicable.
function generateCantrips(character){
    let characterCantrips = [];
    const className = character.class.className.toLowerCase();
    const numOfPreparedCantrips = lel1ClassFeatures[className].numOfCantrips;

    console.log("Number of prepared cantrips for " + character.class.className + ": ", numOfPreparedCantrips);
    // Classes with no cantrips skip the class cantrip selection.
    if (numOfPreparedCantrips > 0) {
        const availableCantrips = cantrips[className];
        console.log("Available cantrips for " + character.class.className + ": ", availableCantrips);
        const shuffledCantrips = selectRandomItems(availableCantrips, numOfPreparedCantrips);
        console.log("Shuffled cantrips for " + character.class.className + ": ", shuffledCantrips);
        characterCantrips = shuffledCantrips;
    }

    const magicInitiateClass = getMagicInitiateClass(character);
    // Add the two cantrips granted by Magic Initiate, avoiding duplicates.
    if (magicInitiateClass) {
        const featCantrips = cantrips[magicInitiateClass];
        characterCantrips.push(...selectRandomItems(featCantrips, 2, characterCantrips));
    }

    character.spellsAndCantrips.cantrips = characterCantrips;
}

// Returns the spellcasting class named by a Magic Initiate feat, or null if absent.
function getMagicInitiateClass(character) {
    const magicInitiateFeat = character.feats.find(feat => feat.startsWith("Magic Initiate ("));
    const match = magicInitiateFeat?.match(/^Magic Initiate \(([^)]+)\)$/);
    return match ? match[1].toLowerCase() : null;
}

// Returns up to count randomly ordered items, omitting any excluded items.
function selectRandomItems(items, count, excludedItems = []) {
    const candidates = items.filter(item => !excludedItems.includes(item));
    // Shuffle the filtered copy so selections are random without changing the source list.
    for (let i = candidates.length - 1; i > 0; i--) {
        const randomIndex = getCryptoSecureRandomIndex(i + 1);
        [candidates[i], candidates[randomIndex]] = [candidates[randomIndex], candidates[i]];
    }
    return candidates.slice(0, count);
}

//picks a random language for the character based on their race and background
function generateLanguages(character){
    let languages = [];
    const race = character.origin.race.name.toLowerCase();
    const background = character.origin.background.name.toLowerCase();

    // Add the default languages based on race
    if (race === "human") {
        languages.push("Common", "One extra language of your choice");
    } else if (race === "elf") {
        languages.push("Common", "Elvish");
    }
    
}

function getCryptoSecureRandomIndex(range) {
    // Create a typed array to hold a single 32-bit unsigned integer (4 bytes)
    const randomBuffer = new Uint32Array(1);
    
    // Populate the buffer with cryptographically secure random bytes from the OS
    window.crypto.getRandomValues(randomBuffer);
    
    // Extract the big random number (ranges from 0 to 4,294,967,295)
    const hugeRandomNumber = randomBuffer[0];
    
    // Use the modulo operator (%) to scale it perfectly down to our array's size
    return hugeRandomNumber % range;
}
