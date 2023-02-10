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

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
};


for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    // call fight function with enemy-robot
    fight(enemyNames[i]);
}

var fight = function(enemyName) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 ) {
        // Ask to see if players wants to fight or skip
        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to fight, then run fight function
        if (promptFight === 'fight' || promptFight === "FIGHT") {
            // subtract the value of 'playerAttack' from the value of 'enemyHealth'
            // and use that result to updte the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " 
                + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
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
                window.alert(playerName + " has died!")
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left..")
            }
            
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from the playerMoney for skipping
                playerMoney = playerMoney - 2;
            // if no (false), ask question again by running fight() again
            } else {
                fight();
            }        
        } else {
            window.alert("You need to choose a valid option. Try again!");
        };
    };
};


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
};