
window.onload = function(){


	//Create 9 canvases for the 9 squares in the game
	for(i=0;i<81;i++){
		var c = document.createElement("canvas");
		//sets the row of the square (starts from 1)
		c.setAttribute('row', (Math.floor(i/9)+1));
		//sets the col of the grid (starts from 1)
		c.setAttribute('col', ((i%9)+1));
		c.setAttribute('id','outerCanvas'+(i+1));			
		c.setAttribute('width',50);					
		c.setAttribute('height',50);
		c.className = i;
										
		
		c.onmouseover = pickSquare;						
		c.onmouseout = mouseOut;
		c.onclick = makeChoice;
		
		document.getElementById("tictactoe_board").appendChild(c);		
		//Make some HTML5 modifications to each canvas
		var ctx=c.getContext('2d');	
		ctx.fillStyle='#FFFFFF';							
		if ( c.getAttribute('col') == '4' || c.getAttribute('col') == '7'){
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(5, 5, 50, 50);
            } else {
             	ctx.fillRect(5, 0, 50, 50);
           	
            }
		} else if (c.getAttribute('col') == '1'){								
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(0, 5, 50, 50);
            } else {
            	ctx.fillRect(0, 0, 50, 50);
            }
		} else {
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(2, 5, 50, 50);
            } else {
             	ctx.fillRect(2, 0, 50, 50);
           	
            }
		}
	}
	

}



function mouseOut(){

		var c = document.getElementById(this.id);
		var ctx=c.getContext('2d');	
		ctx.fillStyle='#FFFFFF';							
		if ( c.getAttribute('col') == '4' || c.getAttribute('col') == '7'){
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(5, 5, 50, 50);
            } else {
             	ctx.fillRect(5, 0, 50, 50);
           	
            }
		} else if (c.getAttribute('col') == '1'){								
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(0, 5, 50, 50);
            } else {
            	ctx.fillRect(0, 0, 50, 50);
            }
		} else {
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(2, 5, 50, 50);
            } else {
             	ctx.fillRect(2, 0, 50, 50);
           	
            }
		}
}



function makeChoice(){

}

function pickSquare(){

		var c = document.getElementById(this.id);
		var ctx=c.getContext('2d');	
		ctx.fillStyle='#0278CC';							
		if ( c.getAttribute('col') == '4' || c.getAttribute('col') == '7'){
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(5, 5, 50, 50);
            } else {
             	ctx.fillRect(5, 0, 50, 50);
           	
            }
		} else if (c.getAttribute('col') == '1'){								
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(0, 5, 50, 50);
            } else {
            	ctx.fillRect(0, 0, 50, 50);
            }
		} else {
			if (c.getAttribute('row') == '4' || c.getAttribute('row') == '7'){
            	ctx.fillRect(2, 5, 50, 50);
            } else {
             	ctx.fillRect(2, 0, 50, 50);
           	
            }
		}
}

