document.addEventListener("DOMContentLoaded", function() {
        console.log("Pokémon GO Profile Loaded");

        // Function to generate a random Player ID in the format #### #### ####
        function generatePlayerID() {
            let id = "";
            for (let i = 0; i < 3; i++) { // 3 groups of 4 digits
                id += Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
                if (i < 2) id += " "; // Add space between groups
            }
            return id;
        }

        // Assign the random Player ID to the profile
        document.querySelector(".profile-info p:nth-child(2)").innerHTML = `<strong>Player ID:</strong> ${generatePlayerID()}`;
    });

