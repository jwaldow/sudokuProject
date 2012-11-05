<!DOCTYPE html>
<html>
<head>
<title>Sudoku</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="style.css" type="text/css">
<script type="text/javascript" src="sudoku.js"></script>
</head>
<body>
<div id="content">
	<h1>HTML5 Sudoku</h1>
	<div id="background">
		<div id="board">
		<?php for($bigi=1; $bigi<10; $bigi+=3) { ?>
			<?php for($bigj=1; $bigj<10; $bigj+=3) { ?>
				<div class="blink" id="<?php echo "chunk_r".(floor($bigi/3)+1)."c".(floor($bigj/3)+1);?>"  width="160" height="160">
				<?php for($i=$bigi; $i<$bigi+3; $i++) { ?>
					<?php for($j=$bigj; $j<$bigj+3; $j++) { ?>
							<canvas class="square" id="<?php echo "row".$i."_col".$j; ?>" ></canvas>
					<?php } ?> <br />
				<?php } ?>	
				</div>
			<?php } ?>
		<?php } ?>
		</div>
	</div>
	<div id="controls">
		<!--<button id="reset" onClick="window.location.reload()">New Puzzle</button>-->
		<button id="reset">New Puzzle</button>
	</div>
</div>
</body>
</html>