// GAME States
// "WIN" - player robot has defeated all enemy-robots
//       * fight all enemy-robots
//       * defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// player info
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refillinf player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!")
        }

    }
};

// console.log(playerName, playerAttack, playerHealth);

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

// Enemy Info
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

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
var fight = function (enemy) {

    // repeat and execute as long as the enemy-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
        // Ask to see if player wants to fight or skip
        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!")
                // subtract money from playerMoney for skipping
                // use Math.max(0, varaibleName) to ensure that deducted values always stop at zero
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        // subtract the value of 'playerAttack' from the value of 'enemyHealth'
        // and use that result to updte the value in the 'enemyHealth' variable
        // use Math.max(0, varaibleName) to ensure that deducted values always stop at zero
        // enemyHealth = Math.max(0, enemyHealth - playerAttack);

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". "
            + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        // if the enemy-robot's health is zero or less, exit from the fight loop.
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth'
        // and use that result to update the value in the 'playerHealth' variable
        // use Math.max(0, varaibleName) to ensure that deducted values always stop at zero
        // playerHealth = Math.max(0, playerHealth - enemyAttack);

        // generate random damage value based on enemy's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has "
            + playerInfo.health + " health remaining."
        );

        // check player's health
        // if player-robot's health is zero or less, exit from the fight loop
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }; // end of while loop
}; // end of fight function

//function to start a new game
var startGame = function () {

    // reset player stats
    // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;

    // reset player stats
    playerInfo.reset();

    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {

        // if player is still alive, keep fighting
        //debugger;
        if (playerInfo.health > 0) {
            // let layer know what round they are in, remember that arrays start
            // at 0 so it needs to have 1 added to it 
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemyHealth before starting new fight
            // use Math.random() to get a random number but never 1 or 21
            // use Math.floor to round up each random number to the nearest whole number
            // we are adding 40 to ensure that enemyHealth is always at or above 40
            // enemyHealth = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);

            // use debugger to pause script from running and check 
            // what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function,
            // where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            // if player is till alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before moving onto the next round
                var storeConfirm = window.confirm("The fight is over, want to visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        // if player isn't alive, stop the game
        else {
            window.alert("You have lost your robot in the battle! GAME OVER!");
            break;
        }
    }
    // after the loop ends, player is either out of health or 
    // enemies to fight, so run the endGame function
    endGame();
}; // end of start game function

//function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //if yes, restart the game
        startGame();
    } else {
        //if no, end game
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}; // end of endGame function

// function to enter the shop between battles
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice. "
    );

    // use switch case to carry out action
    switch (shopOptionPrompt) {

        // if player picks refill and has money, add 20 to playerHealth and subtract 7 from playerMoney
        case "REFILL":
        case "refill":
            // if (playerInfo.money >= 7) {
            //     window.alert("Refilling player's health by 20 for 7 dollars.");

            //     // increase health and decrease money
            //     playerInfo.health = playerInfo.health + 20;
            //     playerInfo.money = playerInfo.money - 7;
            // } else {
            //     window.alert("You don't have enough money!");
            // }
            playerInfo.refillHealth();
            break;

        // if player picks UPGRADE and has money, add 6 to playerAttack and subtract 7 from playerMoney
        case "UPGRADE":
        case "upgrade":
            // if (playerInfo.money >= 7) {
            //     window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //     // increase attack and decrease money
            //     playerInfo.attack = playerInfo.attack + 6;
            //     playerInfo.money = playerInfo.money - 7;
            // } else {
            //     window.alert("You don't have enough money!");
            // }
            playerInfo.upgradeAttack();
            break;

        // if player picks LEAVE, exit the store
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;

        // if player did not pick a valid option, ask them to try again
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}; // end of shop function

// start the game when the page loads
startGame();