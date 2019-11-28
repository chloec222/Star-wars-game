// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var princessLeia = {
  name: "Princess Leia",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var hanSolo = {
  name: "Han Solo",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var darthVadar = {
  name: "Darth Vadar",
  health: 180,
  baseAttack: 25,
  attack: 25
};

// ----- Helper Functions ----- //

// global object variables defined
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#princess-leia-character").children(".health").html(princessLeia.health);
  $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
  $("#han-solo-character").children(".health").html(hanSolo.health);
  $("#darth-vadar-character").children(".health").html(darthVadar.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function () {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Determine which character the user has clicked
  $("#princess-leia-character").on("click", function () {
    console.log("Princess Leia is selected");

    // User is choosing the character
    if (characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(princessLeia);
      characterSelected = true;

      // Display the chosen character
      $("#princess-leia-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if ($("#princess-leia-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(princessLeia);
        defenderSelected = true;

        // Add the character to the defender section
        $("#princess-leia-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if (characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(lukeSkywalker);
      characterSelected = true;

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if ($("#luke-skywalker-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(lukeSkywalker);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#han-solo-character").on("click", function () {
    console.log("Han Solo is selected");

    // User is choosing the character
    if (characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(hanSolo);
      characterSelected = true;

      // Display the chosen character
      $("#han-solo-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if ($("#han-solo-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(hanSolo);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#han-solo-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-vadar-character").on("click", function () {
    console.log("Darth Vadar is selected");

    // User is choosing the character
    if (characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(darthVadar);
      characterSelected = true;

      // Display the chosen character
      $("#darth-vadar-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if ($("#darth-vadar-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(darthVadar);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#darth-vadar-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function () {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You have been defeated.</p><p>The force is too weak within you.</p></p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>Well done Jedi Owl!</p><p>The force is strong with you.</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function () {
    console.log("Restart selected");

    resetGame();
  });

});

