var board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"]
];
var turn = "x"
var moves = 0

var put = function(x, y){
  if (rulesPut(x, y)){
    board[y][x] = turn
    print()
    changeTurn()
    winCondition(0 , 0)
    moves++
  }else{
    console.log("error")
  }
}

var move = function(x, y, direction) {
  if (rules(x, y, direction)) {
    board[y][x] = "_"
    switch (direction) {
      case "derecha":
        board[y][x + 1] = turn
        break;
      case "izquierda":
        board[y][x - 1] = turn
        break;
      case "arriba":
        board[y - 1][x] = turn
        break;
      case "arriba derecha":
        board[y - 1][x + 1] = turn
        break;
      case "arriba izquierda":
        board[y - 1][x - 1] = turn
        break;
      case "abajo derecha":
        board[y + 1][x + 1] = turn
        break;
      case "abajo izquierda":
        board[y + 1][x - 1] = turn
        break;
      default:
        board[y + 1][x] = turn
    }
    print()
    changeTurn()
    winCondition(0 , 0)
  }else{
    console.log("error")
  }
}

var changeTurn = function(){
  turn = turn == "x" ? "o" : "x";
}

var rules = function(x, y, direction) {
  if (moves != 6){
    return false
  }
  if (turn != board[y][x]) {
    return false
  }
  if (board[y][x] == "_") {
    return false
  }
  if ((x < 0 || x > 2) || (y < 0 || y > 2)) {
    return false
  }
  if (direction != "arriba" &&
  direction != "abajo" &&
  direction != "derecha" &&
  direction != "izquierda" &&
  direction != "arriba derecha" &&
  direction != "arriba izquierda" &&
  direction != "abajo derecha" &&
  direction != "abajo izquierda") {
    return false
  } else if ((y == 0 && direction == "arriba") ||
    (y == 2 && direction == "abajo") ||
    (x == 0 && direction == "izquierda") ||
    (x == 2 && direction == "derecha")||
    ((x == 2 || y == 0) && direction == "arriba derecha") ||
    ((x == 0 || y == 0) && direction == "arriba izquierda") ||
    ((x == 2 || y == 2) && direction == "abajo derecha") ||
    ((x == 0 || y == 2) && direction == "abajo izquierda")) {
    return false
  } else if ((direction == "derecha" && board[y][x + 1] != "_") &&
    (direction == "izquierda" && board[y][x - 1] != "_") &&
    (direction == "arriba" && board[y - 1][x] != "_") &&
    (direction == "abajo" && board[y + 1][x] != "_")
    (direction == "arriba derecha" && board[y - 1][x + 1] != "_")
    (direction == "arriba izquierda" && board[y - 1][x - 1] != "_")
    (direction == "abajo drecha" && board[y + 1][x + 1] != "_")
    (direction == "abajo izquierda" && board[y + 1][x - 1] != "_")) {
    return false
  }
  return true
}
var rulesPut = function(x, y){
  if(moves == 6){
    return false
  }
  if((x < 0 || x > 2) || (y < 0 || y > 2)){
    return false
  }
  if(board[y][x] != "_"){
    return false
  }
  return true
}

var print = function() {
  console.log(board[0] + "\n" + board[1] + "\n" + board[2])
}


var winCondition = function(x, y){
  if(board[y][x] != turn){
    return false
  } else if(x == 2 || y == 2){
    return true
  }
  winCondition(x + 1 , y)
  winCondition(x , y + 1)
  winCondition(x + 1 , y + 1)
}
