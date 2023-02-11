// GAME States
// "WIN" - player robot has defeated all enemy-robots
//       * fight all enemy-robtos
//       * defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// };

// for (var i = 0; i < enemyNames.length; i++) {
//     debugger;
//     // call fight function with enemy-robot
//     fight(enemyNames[i]);
// }

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0 ) {
        // Ask to see if players wants to fight or skip
        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + "has decided to skip this fight. Goodbye!")
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // subtract the value of 'playerAttack' from the value of 'enemyHealth'
        // and use that result to updte the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
         // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " 
            + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        // if the enemy-robot's health is zero or less, exit from the fight loop.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;
                
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left." );
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth'
        // and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(    
            enemyName + " attacked " + playerName + ". " + playerName + " now has "
            + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }; // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        // let layer know what round they are in, remember that arrays start
        // at 0 so it needs to have 1 added to it 
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check 
        // what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function,
        // where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    // if player isn't alive, stop the game
    } else {
        window.alert("You have lost your robot in the battle! GAME OVER!");
        break;
    }
}