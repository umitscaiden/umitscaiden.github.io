<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Register</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<h1>Register please</h1>
		<hr>
		Username: <span class="fixedfield" id="username"></span>
		<select id="letter-selection-un">
			<option value="a">a</option>
			<option value="b">b</option>
			<option value="c">c</option>
			<option value="d">d</option>
			<option value="e">e</option>
			<option value="f">f</option>
			<option value="g">g</option>
			<option value="h">h</option>
			<option value="i">i</option>
			<option value="j">j</option>
			<option value="k">k</option>
			<option value="l">l</option>
			<option value="m">m</option>
			<option value="n">n</option>
			<option value="o">o</option>
			<option value="p">p</option>
			<option value="q">q</option>
			<option value="r">r</option>
			<option value="s">s</option>
			<option value="t">t</option>
			<option value="u">u</option>
			<option value="v">v</option>
			<option value="w">w</option>
			<option value="x">x</option>
			<option value="y">y</option>
			<option value="z">z</option>
			<option value="0">0</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="-">-</option>
			<option value="_">_</option>
		</select>
		<button id="uname-insert-lc">Insert lowercase</button>
		<button id="uname-insert-uc">Insert uppercase</button>
		<button id="uname-clear">Clear</button>

		<br> <span class="hdivide">---</span> <br>

		Password: <span class="fixedfield" id="password"></span>
		<input type="text" id="pwd-charcode" placeholder="Insert charcode">
		<button id="pwd-insert">Insert character</button>
		<button id="pwd-clear">Clear</button>

		<br> <span class="hdivide">---</span> <br>
		Date of birth: <br>

		<input type="range" min="1900" max="2021" value="2000" id="dob-year">
		Year: <span id="dob-year-span">2000</span> <br>

		<input type="range" min="1" max="12" value="1" id="dob-month">
		Month: <span id="dob-month-span">1</span> <br>

		<input type="range" min="1" max="31" value="1" id="dob-day">
		Day: <span id="dob-day-span">1</span>

		<br> <span class="hdivide">---</span> <br>

		Phone number: <span class="fixedfield" id="phone">000 000 000</span>
		<table>
			<tr>
				<td> <button onclick="shuffle(1)">Shuffle digit 1</button> </td>
				<td> <button onclick="shuffle(2)">Shuffle digit 2</button> </td>
				<td> <button onclick="shuffle(3)">Shuffle digit 3</button> </td>
			</tr>

			<tr>
				<td> <button onclick="shuffle(4)">Shuffle digit 4</button> </td>
				<td> <button onclick="shuffle(5)">Shuffle digit 5</button> </td>
				<td> <button onclick="shuffle(6)">Shuffle digit 6</button> </td>
			</tr>

			<tr>
				<td> <button onclick="shuffle(7)">Shuffle digit 7</button> </td>
				<td> <button onclick="shuffle(8)">Shuffle digit 8</button> </td>
				<td> <button onclick="shuffle(9)">Shuffle digit 9</button> </td>
			</tr>
		</table>

		<br> <span class="hdivide">---</span> <br>

		Captcha: <button id="captcha">Solve captcha!</button> <span id="captcha-status">
			<i>Waiting for captha</i>
		</span>
		<span id="captcha-solved" style="font-weight: bold; display: none;">Captha solved!</span>
		<br>
		<img src="https://acegif.com/wp-content/uploads/firework-2.gif" alt="gif" id="captcha-img" style="display: none;">

		<br> <span class="hdivide">---</span> <br>

		<button id="register" disabled>REGISTER!</button>

		<script src="control.js"></script>
	</body>
</html>
