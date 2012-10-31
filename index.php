<!DOCTYPE html>
<html>
<head>
<title>Tic&dash;Tac&dash;Toe</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="style.css" type="text/css">
<!--<script type="text/javascript" src="sudoku.js"></script>-->
</head>
<body>
<div id="content">
	<h1>HTML5 Sudoku</h1>
	<div id="tictactoe_background">
		<div id="tictactoe_board">
			<?php 
			for($i=1; $i<10; $i++) {
				for($j=1; $j<10; $j++) { ?>
				<canvas class="square" id="<?php echo "row".$i."_col".$j; ?>"></canvas>
				<?php 
				}
			} ?>	
		</div>
	</div>
	<div id="controls">
		<button id="reset">Reset</button>
	</div>
</div>
</body>
</html>