import {classes as classArray, species as speciesArray, backgrounds as backgroundArray, subSpecies, lifespan, heightMinimum as heightMin, heightRange, primaryStats} from './gameData.js';

function generateClass() {
    //Randomly returns a single DnD character class from the class array
    

    let numClasses = classArray.length;
    let classIndex = Math.floor(Math.random() * numClasses);
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
    const stats = {
        strength: -1,
        dexterity: -1,
        constitution: -1,
        intelligence: -1,
        wisdom: -1,
        charisma: -1
    };

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
    
    for(let i = 0; i < scores.length; i++) {

    }

    return stats;
}

function abilityScoreHelper() {
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);
    let dice3 = Math.floor(Math.random() * 6);
    let dice4 = Math.floor(Math.random() * 6);

    let lowestRoll = Math.min(dice1, dice2, dice3, dice4);
    return (dice1 + dice2 + dice3 + dice4 - lowestRoll);
}
