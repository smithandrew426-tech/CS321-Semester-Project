import {classes as classArray, species as speciesArray, 
        backgrounds as backgroundArray, subSpecies, lifespan, 
        heightMinimum as heightMin, heightRange, primaryStats} from './gameData.js';
import {Character, item, weapon, armor} from './model.js';

//randomly selects a class index for the character
let numClasses = classArray.length;
//randomly selects a class for the character based on the class index
let classIndex = Math.floor(Math.random() * numClasses);


if (window.location.href.includes("Loading.html")) {
    // Only run this IF we haven't already started a countdown timer
    if (!localStorage.getItem("loadingTimerStarted")) {
        //creates a variable to keep track if we already started making a character to prevent infinite loading
        localStorage.setItem("loadingTimerStarted", "true");

        // Generate the character ONCE right here
        const newCharacter = generateRandomCharacter(); 
        
        // Save it safely to the local webpage storage
        localStorage.setItem("generatedCharacter", JSON.stringify(newCharacter)); 

        // Wait 3 seconds, clear the timer flag, and redirect so that loading screen is displayed before showing character details
        setTimeout(() => {
            localStorage.removeItem("loadingTimerStarted");
            window.location.href = "CharacterDetails.html";
        }, 3000);
    }
} 
else {
    // We are already on the character details page, so generate a new character and store it in local storage.
    const newCharacter = generateRandomCharacter();
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
    return height; 
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