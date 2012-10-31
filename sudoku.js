var selected = null;

window.onload = function() {
	for(i = 1; i < 10; i++) {
		for(j = 1; j < 10; j++) {
			var c = document.getElementById("row"+i+"_col"+j);
											
			c.onmouseover = pickSquare;						
			c.onmouseout = mouseOut;
			c.onclick = makeChoice;
			
			var ctx=c.getContext('2d');	
			ctx.fillStyle='#FFFFFF';
			ctx.fillRect(0, 0, 1000, 1000);									
		}
	}
}

function mouseOut(){
	var c = document.getElementById(this.id);
	var ctx=c.getContext('2d');	
	ctx.fillStyle='#FFFFFF';			
	ctx.fillRect(0, 0, 1000, 1000);	

	var ctx = selected.getContext('2d');	
	ctx.fillStyle='#FF0000';
	ctx.fillRect(0, 0, 1000, 1000);				
}

function makeChoice(){
	if(selected != null) {
		var ctx = selected.getContext('2d');	
		ctx.fillStyle='#FFFFFF';			
		ctx.fillRect(0, 0, 1000, 1000);
	}

	selected = document.getElementById(this.id);
	var ctx = selected.getContext('2d');	
	ctx.fillStyle='#FF0000';
	ctx.fillRect(0, 0, 1000, 1000);	
}

function pickSquare(){
	var c = document.getElementById(this.id);
	var ctx=c.getContext('2d');	
	ctx.fillStyle='#0278CC';
	ctx.fillRect(0, 0, 1000, 1000);	
}