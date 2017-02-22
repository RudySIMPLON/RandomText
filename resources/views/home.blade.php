<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Lorem easy</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.css">
	<link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>

	<div class="titre">
	<h1 >Lorem Easy</h1>
	</div>

 <div class="background">
	<div class="head">

		<div class="Mot">
			<h3>nombre de mot</h3>
			<input type="range" name="nbrMot" id="nbrMot"  class="nbrMot"
			value="4" min="0" max="20">

		</div>
		<div class="Html">
			<div >
				<input type="checkbox" name="check-p" id="check-p" class="check-p">	
				
			</div>p <br><br>
			<div>
				<input type="checkbox" name="check-h2" id="check-h2" class="check-h2">	
			</div>
			h3
		</div>

		<div class="Paragraphe">
			<h3>nombre de Paragraphe</h3>

			<input type="range" name="nbrPara" id="nbrPara"  class="nbrPara"
			value="4" min="0" max="20">
			<span id="valueParaSlider">4</span>
		</div>
	</div>


	<div class="divTextarea">
		<textarea name="textearea"  id="textearea" cols="80" rows="10"></textarea>
	</div>

</div>

	<script src="{{mix('/js/app.js')}}"></script>
</body>

</html>