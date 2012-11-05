var selected = null;

const CORRECT_VALUE = 0;
const IS_DEFAULT = 1;

//These colors aren't completely arbitrary. I used a color scheme designer so they go together nicely.
var	compGenNum = '#000000'; //Variable for when a number is generated by the computer.
var userGenNum = '#033E6B'; //User generated number.
var mouseHover = '#FFEC73';	//No comment needed.
var mouseClicked = '#FFDD00';
var emptyBG = '#EDEDED';
var default_value = 'lightgrey';

var sudokuAnswer = generateBoard(); //This is...the matrix.
var sudoku= generateUserBoard(sudokuAnswer);

window.onload = function() {
	for (i = 1; i < 10; i++) {
		for (j = 1; j < 10; j++) {
			var c = document.getElementById(getId(i, j));
			c.setAttribute("is_default", "false");
			c.onmouseover = mouseOver;
			c.onmouseout = mouseOut;
			c.onclick = onClickSquare;
			var ctx=c.getContext('2d');
			ctx.fillStyle=emptyBG;
			ctx.fillRect(0, 0, 300, 300);
			//sets up the pattern to draw the numbers
			if((i%3==j%5)||(((i*j)%2)==1)){
				//paintNumber(c);
				ctx.fillStyle=default_value;
				ctx.fillRect(0, 0, 300, 300);
				c.setAttribute("is_default", "true");
				c.setAttribute("value",paintNumber(c));
			}
			
		}
	}
}

function mouseOut(){
	var c = document.getElementById(this.id);
	var ctx=c.getContext('2d');
	if(c.getAttribute("is_default")!="true"){
		ctx.fillStyle=emptyBG;
		ctx.fillRect(0, 0, 300, 300);
		//paintNumber(c);

		if (selected != null) {
			var ctx = selected.getContext('2d');
			ctx.fillStyle=mouseClicked;
			ctx.fillRect(0, 0, 300, 300);
			paintNumber(selected);
		}
	}
}

function onClickSquare() {
	if (selected != null) {
		var ctx = selected.getContext('2d');
		ctx.fillStyle=emptyBG;
		ctx.fillRect(0, 0, 300, 300);
		paintNumber(selected);
	}

	selected = document.getElementById(this.id);
	alert("value "+selected.getAttribute("is_default"));
	var ctx = selected.getContext('2d');
	ctx.fillStyle=mouseClicked;
	ctx.fillRect(0, 0, 300, 300);
	paintNumber(selected);
}

function mouseOver(){
	var c = document.getElementById(this.id);
	if(c.getAttribute("is_default")!="true"){
		var ctx=c.getContext('2d');
		ctx.fillStyle=mouseHover;
		ctx.fillRect(0, 0, 300, 300);
		paintNumber(c);
	}
}

function getId(i, j) {
	return "row" + i + "_col" + j
}

//TODO
//called after square is selected, and number button (to be implented) or number on keyboard is pressed
//Easiest way to do this would be a keypress after the square is selected.
function setSquareNumber() {
	/*
	if move is over a default placed value then dont paint it
	else if move has no conflicts then paint number selected
	else if move has conflicts then highlight conflicting square
	
	NOTE: if user has entered a number before, it can be overridden.
	*/
}

//generate a complete 2d array of a valid board, and paint several starting numbers
function generateBoard() {

	//[row][column][Is computer generated]
	var guranteedGoodBoard=Array(
		Array(1,2,3,9,7,8,5,6,4),
	    Array(4,5,6,3,1,2,8,9,7),
	    Array(7,8,9,6,4,5,2,3,1),
	    Array(3,1,2,8,9,7,4,5,6),
	    Array(6,4,5,2,3,1,7,8,9),
	    Array(9,7,8,5,6,4,1,2,3),
	    Array(2,3,1,7,8,9,6,4,5),
	    Array(5,6,4,1,2,3,9,7,8),
	    Array(8,9,7,4,5,6,3,1,2)
	);

    var answerBoard = shuffle(guranteedGoodBoard,true);
	var newBoard = new Array(9);
	for(i = 0; i < 9; i++) {
		newBoard[i]=new Array(9);
		for(j = 0; j < 9; j++) {
			newBoard[i][j]=new Array(3);
			newBoard[i][j][CORRECT_VALUE] = answerBoard[i][j];
			newBoard[i][j][IS_DEFAULT] = true;
		}
	}
	for(j=0;j<9;j++){
		for(i=0;i<9;i++){
		}
	}
	return newBoard;
}

//TODO
//Replace some of the squares' values with blanks, change the third portion of the array [i][j][0] to "false" to indicate it's a user-entered square.
function generateUserBoard(board){
	return board;
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
	name=square.getAttribute('id');
	nameArray=name.split("_");
	name=sudoku[nameArray[0][3]-1][nameArray[1][3]-1][CORRECT_VALUE];

	var ctx=square.getContext('2d');
	ctx.textAlign = 'center';

	if(sudoku[nameArray[0][3]-1][nameArray[1][3]-1][IS_DEFAULT]){ //Computer generated = true
		ctx.font = 'Bold 100pt sans-serif';
		ctx.fillStyle=compGenNum;
		ctx.fillText(name,150,125);
	} else {
		ctx.font = 'Bold Italic 90pt sans-serif';
		ctx.fillStyle=userGenNum;
		ctx.fillText(name,150,120);
	}
	return name;
}

//TODO
//Returns a boolean value. True if the board is complete.
function isComplete() {
	/*
	SHOULD NOT check only against our solution. Possible solution could differ from ours. 
	JON LEWIS TODO: Research board uniqness. 
		DONE: Board solutions are unique. Needs only to check against our solution.
	*/
	return done;
}

function shuffle(array,callAgain){//Shuffles the puzzle. Put in "true" if calling from outside
	holderRow=new Array(9);
	for(i=0;i<3;i++)
		for(j=0;j<50;j++){
			n=Math.floor(Math.random() * 3);
			if(n!=0){
				for(k=0;k<9;k++){
					holderRow[k]=array[i*3+n][k];
					array[i*3+n][k]=array[i*3][k];
					array[i*3][k]=holderRow[k];
				} 
			} else {
				j--;
			}
		}
	if(callAgain==true){
		array=shuffleAgain(array);
	}
	return array;
}
function shuffleAgain(array){//Sub-function of shuffle. Flips rows for columns and shuffles again.
	newArray= new Array(9);
	for(i=0;i<9;i++){
		newArray[i]=new Array(9);
		for(j=0;j<9;j++){
			newArray[i][j]=array[j][i];
		}
	}
	newArray=shuffle(newArray,false);
	return newArray;
}