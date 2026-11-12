// Wait until the HTML structure is completely loaded by the browser
        document.addEventListener("DOMContentLoaded", () => {
        // Retrieve the generated character from local storage
        const generatedCharacter = JSON.parse(localStorage.getItem("generatedCharacter"));

        if (generatedCharacter) {
            const character = generatedCharacter;
            console.log(character); // Your character object is back!
        }
        // Populate the character details in the HTML
        if (generatedCharacter) {
            // Populate the left section with character details
            document.querySelector("#left ul li:nth-child(1)").textContent = `Class: ${generatedCharacter.class.className}`;// Populate the class detail
            document.querySelector("#left ul li:nth-child(2)").textContent = `Race: ${generatedCharacter.origin.race.name}`;// Populate the race detail
            document.querySelector("#left ul li:nth-child(3)").textContent = `Background: ${generatedCharacter.origin.background.name}`;// Populate the background detail
            document.querySelector("#left ul li:nth-child(4)").textContent = `Subrace: ${generatedCharacter.origin.race.subrace || "N/A"}`;// Populate the subrace detail
            document.querySelector("#left ul li:nth-child(5)").textContent = `Age: ${generatedCharacter.physDetails.age}`;// Populate the age detail
            document.querySelector("#left ul li:nth-child(6)").textContent = `Height: ${generatedCharacter.physDetails.height}`;// Populate the height detail
            // Populate the right section with ability scores and other details
            document.querySelector("#right ul li:nth-child(1)").textContent = `Strength: ${generatedCharacter.AbilityScores.strength}`;// Populate the strength state
            document.querySelector("#right ul li:nth-child(2)").textContent = `Dexterity: ${generatedCharacter.AbilityScores.dexterity}`;// Populate the dexterity state
            document.querySelector("#right ul li:nth-child(3)").textContent = `Constitution: ${generatedCharacter.AbilityScores.constitution}`;// Populate the constitution state
            document.querySelector("#right ul li:nth-child(4)").textContent = `Intelligence: ${generatedCharacter.AbilityScores.intelligence}`;// Populate the intelligence state
            document.querySelector("#right ul li:nth-child(5)").textContent = `Wisdom: ${generatedCharacter.AbilityScores.wisdom}`;// Populate the wisdom state
            document.querySelector("#right ul li:nth-child(6)").textContent = `Charisma: ${generatedCharacter.AbilityScores.charisma}`;// Populate the charisma state
            // Populate the right section with feats, cantrips, and spells
            const feats = Array.isArray(generatedCharacter.feats) ? generatedCharacter.feats.join(", ") : "";
            document.querySelector("#right ul:nth-of-type(2) li:nth-child(1)").textContent = `Feats: ${feats || "N/A"}`;// Populate the feats detail
            const cantrips = Array.isArray(generatedCharacter.spellsAndCantrips.cantrips) ? generatedCharacter.spellsAndCantrips.cantrips.join(", ") : "";
            document.querySelector("#right ul:nth-of-type(2) li:nth-child(2)").textContent = `Cantrips: ${cantrips || "N/A"}`;// Populate the cantrips detail
            const spells = Array.isArray(generatedCharacter.spellsAndCantrips.spells) ? generatedCharacter.spellsAndCantrips.spells.join(", ") : "";
            document.querySelector("#right ul:nth-of-type(2) li:nth-child(3)").textContent = `Spells: ${spells || "N/A"}`;// Populate the spells detail            document.querySelector("#right ul:nth-of-type(3) li:nth-child(1)").textContent = `Starting Items: ${generatedCharacter.backpack.inventory || "N/A"}`;// Populate the starting items detail
            
            // Populates the starting items detail
            const startingItems = Array.isArray(generatedCharacter.backpack.inventory) ? generatedCharacter.backpack.inventory.map(item => item.name).join(", ") : "";
            document.querySelector("#right ul:nth-of-type(3) li:nth-child(1)").textContent = `Starting Items: ${startingItems || "N/A"}`;// Populate the starting items detail
            document.querySelector("#right ul:nth-of-type(3) li:nth-child(2)").textContent = `Starting Gold: ${generatedCharacter.backpack.money}`;// Populate the starting gold detail
        } else{
            console.error("No character data found in localStorage!");
        }
        // Add event listeners for the export buttons
        document.querySelector("#copyClipboard").addEventListener("click", () => {
            if (generatedCharacter) {
                // Copy the character JSON to the clipboard using the Clipboard API
                navigator.clipboard.writeText(JSON.stringify(generatedCharacter)).then(() => {
                    alert("Character copied to clipboard!");
                }).catch(err => { // Handle any errors that occur while copying to the clipboard
                    console.error("Failed to copy character: ", err);
                });
            } else {
                alert("No character data found to copy!");
            }
        });

        document.querySelector("#copyJSON").addEventListener("click", () => {
            if (generatedCharacter) {
                //Blob a special data type used to represent raw, unformatted binary data as a single entity
                //Here we create a new Blob containing the JSON string of the character, then create a temporary URL for it, and trigger a download.
                const blob = new Blob([JSON.stringify(generatedCharacter)], { type: "application/json" });// Create a new Blob containing the JSON string of the character
                const url = URL.createObjectURL(blob);// Create a temporary URL for the Blob
                const a = document.createElement("a");
                a.href = url;
                a.download = "character.json";
                a.click();
                URL.revokeObjectURL(url);// Clean up the temporary URL after triggering the download
            } else {
                alert("No character data found to export!");
            }
        });

        document.querySelector("#generateAgain").addEventListener("click", () => {// Redirect to the loading page to generate a new character
            window.location.href = "Loading.html";
        });
    });