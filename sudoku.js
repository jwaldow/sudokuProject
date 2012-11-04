var selected = null;

var sudokuAnswer = generateBoard(true); //This is...the matrix.
var sudoku=sudokuAnswer;

window.onload = function() {
	for(i = 1; i < 10; i++) {
		for(j = 1; j < 10; j++) {
			var c = document.getElementById("row"+i+"_col"+j);
			
			c.onmouseover = pickSquare;
			c.onmouseout = mouseOut;
			c.onclick = makeChoice;
			
			var ctx=c.getContext('2d');
			ctx.fillStyle='#FFFFFF';
			ctx.fillRect(0, 0, 300, 300);
			paintNumber(c);
		}
	}
}

function mouseOut(){
	var c = document.getElementById(this.id);
	var ctx=c.getContext('2d');
	ctx.fillStyle='#FFFFFF';
	ctx.fillRect(0, 0, 300, 300);
	paintNumber(c);

	if(selected != null) {
		var ctx = selected.getContext('2d');
		ctx.fillStyle='#FF9999';
		ctx.fillRect(0, 0, 300, 300);
		paintNumber(selected);
	}
}

function makeChoice(){
	if(selected != null) {
		var ctx = selected.getContext('2d');
		ctx.fillStyle='#FFFFFF';
		ctx.fillRect(0, 0, 300, 300);
		paintNumber(selected);
	}

	selected = document.getElementById(this.id);
	var ctx = selected.getContext('2d');
	ctx.fillStyle='#FF9999';
	ctx.fillRect(0, 0, 300, 300);
	paintNumber(selected);
}

function pickSquare(){
	var c = document.getElementById(this.id);
	var ctx=c.getContext('2d');
	ctx.fillStyle='#9999FF';
	ctx.fillRect(0, 0, 300, 300);
	paintNumber(c);
}



//TODO
//called after square is selected, and number button (to be implented) or number on keyboard is pressed
function setSquareNumber() {
	/*
	if move is over a default placed value then dont paint it
	else if move has no conflicts then paint number selected
	else if move has conflicts then highlight conflicting square
	
	NOTE: if user has entered a number before, it can be overridden.
	*/
}

//TODO
//generate a complete 2d array of a valid board, and paint several starting numbers
function generateBoard(answerKey) {
	/*
	1. generate the 2D array
	2. paint numbers on random squares (or not-so-random)
	3. Paint the starting squares with faint transparent background (obviously different to user)
	*/
	var newBoard = new Array(9);
	for(i = 0; i < 9; i++) {
		newBoard[i] = new Array(9);
		for(j = 0; j < 9; j++) {
			newBoard[i][j] = new Array(2);
			newBoard[i][j][0]=i+""+j;
			newBoard[i][j][1]=((j%2)==1^i%2==1);
		}
	}
	return newBoard;
}

//TODO
//paints the square's number
function paintNumber(square) {
	/*
	square should be validated already, this should be a simple helper function. 
	*/
	//var c = document.getElementById(this.id);
	//Getting its location.
	//It's a stripper. Give it a dollar.

	//Apparently, "Your[my] stuff is purdy."
	name=square.getAttribute('id');
	nameArray=name.split("_");
	name=sudoku[nameArray[0][3]-1][nameArray[1][3]-1][0];

	var ctx=square.getContext('2d');
	ctx.font = 'Bold 100pt sans-serif';
	ctx.textAlign = 'center';

	if(sudoku[nameArray[0][3]-1][nameArray[1][3]-1][1]){
		ctx.fillStyle='#00FF00';
	} else {
		ctx.fillStyle='#111111';
	}

	ctx.fillText(name,150,125);
}

//TODO
//Returns a boolean value. True if the board is complete.
function isComplete() {
	/*
	SHOULD NOT check only against our solution. Possible solution could differ from ours. 
	JON LEWIS TODO: Research board uniqness. 
	*/
}

function arrayShuffle (array, random) { //Fisher-Yates algorithm.
  var i = array.length, j, swap;
  while (--i) {
    j = (random ? random() : Math.random()) * (i + 1) | 0;
    swap = array[i];
    array[i] = array[j];
    array[j] = swap;
  }
  return array;
}