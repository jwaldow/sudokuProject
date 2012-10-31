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
			<div class="group">
				<canvas class="square" id="11" width="50" height="50"> </canvas>
				<canvas class="square" id="12" width="50" height="50"> </canvas>
				<canvas class="square" id="13" width="50" height="50"> </canvas>
				<canvas class="square" id="14" width="50" height="50"> </canvas>
				<canvas class="square" id="15" width="50" height="50"> </canvas>
				<canvas class="square" id="16" width="50" height="50"> </canvas>
				<canvas class="square" id="17" width="50" height="50"> </canvas>
				<canvas class="square" id="18" width="50" height="50"> </canvas>
				<canvas class="square" id="19" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="21" width="50" height="50"> </canvas>
				<canvas class="square" id="22" width="50" height="50"> </canvas>
				<canvas class="square" id="23" width="50" height="50"> </canvas>
				<canvas class="square" id="24" width="50" height="50"> </canvas>
				<canvas class="square" id="25" width="50" height="50"> </canvas>
				<canvas class="square" id="26" width="50" height="50"> </canvas>
				<canvas class="square" id="27" width="50" height="50"> </canvas>
				<canvas class="square" id="28" width="50" height="50"> </canvas>
				<canvas class="square" id="29" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="31" width="50" height="50"> </canvas>
				<canvas class="square" id="32" width="50" height="50"> </canvas>
				<canvas class="square" id="33" width="50" height="50"> </canvas>
				<canvas class="square" id="34" width="50" height="50"> </canvas>
				<canvas class="square" id="35" width="50" height="50"> </canvas>
				<canvas class="square" id="36" width="50" height="50"> </canvas>
				<canvas class="square" id="37" width="50" height="50"> </canvas>
				<canvas class="square" id="38" width="50" height="50"> </canvas>
				<canvas class="square" id="39" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="41" width="50" height="50"> </canvas>
				<canvas class="square" id="42" width="50" height="50"> </canvas>
				<canvas class="square" id="43" width="50" height="50"> </canvas>
				<canvas class="square" id="44" width="50" height="50"> </canvas>
				<canvas class="square" id="45" width="50" height="50"> </canvas>
				<canvas class="square" id="46" width="50" height="50"> </canvas>
				<canvas class="square" id="47" width="50" height="50"> </canvas>
				<canvas class="square" id="48" width="50" height="50"> </canvas>
				<canvas class="square" id="49" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="51" width="50" height="50"> </canvas>
				<canvas class="square" id="52" width="50" height="50"> </canvas>
				<canvas class="square" id="53" width="50" height="50"> </canvas>
				<canvas class="square" id="54" width="50" height="50"> </canvas>
				<canvas class="square" id="55" width="50" height="50"> </canvas>
				<canvas class="square" id="56" width="50" height="50"> </canvas>
				<canvas class="square" id="57" width="50" height="50"> </canvas>
				<canvas class="square" id="58" width="50" height="50"> </canvas>
				<canvas class="square" id="59" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="61" width="50" height="50"> </canvas>
				<canvas class="square" id="62" width="50" height="50"> </canvas>
				<canvas class="square" id="63" width="50" height="50"> </canvas>
				<canvas class="square" id="64" width="50" height="50"> </canvas>
				<canvas class="square" id="65" width="50" height="50"> </canvas>
				<canvas class="square" id="66" width="50" height="50"> </canvas>
				<canvas class="square" id="67" width="50" height="50"> </canvas>
				<canvas class="square" id="68" width="50" height="50"> </canvas>
				<canvas class="square" id="69" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="71" width="50" height="50"> </canvas>
				<canvas class="square" id="72" width="50" height="50"> </canvas>
				<canvas class="square" id="73" width="50" height="50"> </canvas>
				<canvas class="square" id="74" width="50" height="50"> </canvas>
				<canvas class="square" id="75" width="50" height="50"> </canvas>
				<canvas class="square" id="76" width="50" height="50"> </canvas>
				<canvas class="square" id="77" width="50" height="50"> </canvas>
				<canvas class="square" id="78" width="50" height="50"> </canvas>
				<canvas class="square" id="79" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="81" width="50" height="50"> </canvas>
				<canvas class="square" id="82" width="50" height="50"> </canvas>
				<canvas class="square" id="83" width="50" height="50"> </canvas>
				<canvas class="square" id="84" width="50" height="50"> </canvas>
				<canvas class="square" id="85" width="50" height="50"> </canvas>
				<canvas class="square" id="86" width="50" height="50"> </canvas>
				<canvas class="square" id="87" width="50" height="50"> </canvas>
				<canvas class="square" id="88" width="50" height="50"> </canvas>
				<canvas class="square" id="89" width="50" height="50"> </canvas>
			</div>
			<div class="group">
				<canvas class="square" id="91" width="50" height="50"> </canvas>
				<canvas class="square" id="92" width="50" height="50"> </canvas>
				<canvas class="square" id="93" width="50" height="50"> </canvas>
				<canvas class="square" id="94" width="50" height="50"> </canvas>
				<canvas class="square" id="95" width="50" height="50"> </canvas>
				<canvas class="square" id="96" width="50" height="50"> </canvas>
				<canvas class="square" id="97" width="50" height="50"> </canvas>
				<canvas class="square" id="98" width="50" height="50"> </canvas>
				<canvas class="square" id="99" width="50" height="50"> </canvas>
			</div>
		</div>
	</div>
	<div id="controls">
		<button id="reset">Reset</button>
	</div>
</div>
</body>
</html>