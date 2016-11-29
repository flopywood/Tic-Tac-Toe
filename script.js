$(document).ready(function(){
  // Default player to "X"
  var turn = "O";

  //Store winning formulae
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

  //Default programn
  var computersTurn = "X";

  //Keep track of program's turns
  var gameOn = false;

  //Keep track of program's turn so no loop
  var count = 0;

  //Change player according to input
  $("#turnX").click(function(){
    reset();
    turn = "X";
    computersTurn = "O";
    $("#turnX").addClass("btn-primary");
    $("#turnO").removeClass("btn-primary");
  });

  $("#turnO").click(function(){
    reset();
    turn = "O";
    computersTurn = "X";
    $("#turnO").addClass("btn-primary");
    $("#turnX").removeClass("btn-primary");
  });

  function computerTurn(){
    //Break while loop
    var taken = false;
    while(taken === false && count !== 5){
      //Create program's random turn
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === "#") {
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  function playerTurn(turn, id){
    var cellTaken = $("#"+id).text();
    if(cellTaken === "#"){
      count++;
      turns[id] = turn;
      $("#"+ id).text(turn);
      winningFormula(turns, turn);
      if (gameOn === false) {
        computerTurn();
        winningFormula(turns, computersTurn);
      }
    }
  }

  function winningFormula(turnArray, currentTurn){

    //horizontal winning combos
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }

    // vertical winning combos
    if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }

    //diagonal winning combos
    else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      $("#message").text("Player " + currentTurn + " wins!" + "Restarts in 3... 2... 1...").fadeIn("fast");
      window.setTimeout(reset, 3000);
    }
    else {
      gameOn = false;
    }
  }

  $(".cell").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });

  function reset(){
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".cell").text("#");
    gameOn = false;
    $("#message").text("");
  }





});
