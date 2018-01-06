<?php
$description = 'Bartłomiej Fryz - Profesjonalne Tworzenie Stron, Sklepów i Aplikacji Internetowych. Ropczyce, Dębica, Rzeszów, Podkarpackie.';
$title = 'Bartłomiej Fryz - Profesjonalne Tworzenie Stron, Sklepów i Aplikacji Internetowych.';

if (isset($_GET['lang']) && $_GET['lang'] === 'en') {
    $description = 'Bartłomiej Fryz - Professional Creating of Websites, Webshops and Web Applications. Ropczyce, Dębica, Rzeszów, Podkarpackie.';
	$title = 'Bartłomiej Fryz - Professional Creating of Websites, Webshops and Web Applications.';
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<meta name="description"
		  content="<?= $description; ?>">
	<meta name="author" content="Bartłomiej Fryz">
	<title><?= $title; ?></title>

	<link href='//fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
	<link href='//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300'
		  rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/animate.css/animate.min.css"/>
	<link rel="stylesheet" href="css/responsiveslides/responsiveslides.css"/>
	<link rel="stylesheet" href="css/baron.css"/>
	<link rel="stylesheet" href="css/bootstrap.css"/>
	<link rel="stylesheet" href="css/main.css"/>
	<link rel="stylesheet" href="css/gallery.css"/>

	<link rel="stylesheet"
		  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
	<script defer src="js/fontawesome-all.min.js"></script>

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<script>
		document.createElement('video');
	</script>
	<![endif]-->
	<!--[if IE 9]>
	<script src="js/classList.min.js"></script><![endif]-->

	<noscript>
		<style>
			[data-simplebar] {
				overflow: auto;
			}
		</style>
	</noscript>
</head>
<body>
<div class="loading-wrapper animated">
	<div>
		<object data="img/loading.svg" type="image/svg+xml" width="250px" height="250px">
			Loading
		</object>
	</div>
</div>

<ul class="rslides">
	<li><img src="img/slide1.jpg" alt=""></li>
	<li><img src="img/slide2.jpg" alt=""></li>
	<li><img src="img/slide3.jpg" alt=""></li>
	<li><img src="img/slide4.jpg" alt=""></li>
</ul>

<?php
if (isset($_GET['lang']) && $_GET['lang'] === 'en') {
    echo file_get_contents('english.html');
} else {
    echo file_get_contents('polish.html');
}
?>

<script src="js/jquery/jquery-3.2.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.mousewheel.min.js"></script>
<script src="js/baron.min.js"></script>
<script src="js/responsiveslides/responsiveslides.min.js"></script>

<script src="js/main.js"></script>
<script src="js/gallery.js"></script>
</body>
</html>