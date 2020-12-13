<!DOCTYPE HTML>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>My Wendler 5/3/1 Workout</title>
			<meta name="title" content="My Wendler 5/3/1 Workout" />
			<meta name="keywords" content="" />
			<meta name="description" content="Today's Wendler Workout" />
			<meta http-equiv="content-type" content="text/html"/>
			<meta name="robots" content="index,follow" />
			<meta name="googlebot" content="index,follow" />
			<meta name="msnbot" content="index,follow" />
			<meta name="rating" content="GENERAL" />
			<meta name="distribution" content="GLOBAL" />
			<meta name="author" content="CapCys Web Development" />
			<meta name="revisit-after" content="7 Days" />
	    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
		  <link rel="icon" href="favicon.ico" type="image/x-icon">
	    <link rel="stylesheet" type="text/css" href="css/timer.css">
  </head>
  <body>
    <div>
      <input type="radio" id="easy" name="defaultTime" value="Easy" checked="true">
      <label for="easy">Easy</label>
      <input type="radio" id="hard" name="defaultTime" value="Hard">
      <label for="hard">Hard</label>
      <button id="applyDefaultTime" onclick="applyDefault()">Apply</button>
    </div><br />
    <div id="timeDisplay">00:00</div><br />
    <div>
      <button id="startingPistol">Start</button>
      <button id="reset">Reset</button>
    </div>
    <script src="js/timer.js"></script>
  </body>
</html>