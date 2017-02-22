<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>
	<header>Random texte</header>

	<div class="head">

		<div class="Mot">
			<h3>nombre de mot</h3>
			<input type="range" name="NbrMot" id="NbrMot"  class="NbrMot"
			value="4" min="0" max="20">

		</div>
		<div class="Html">
			<div >
				<input type="checkbox" name="check-p" id="check-p" class="check-p">	
				
			</div>p
			<div>
				<input type="checkbox"textearea name="check-h2" id="check-h2" class="check-h2">	
			</div>
			 h3
		</div>

		<div class="Paragraphe">
			<h3>nombre de Paragraphe</h3>
			<input type="range" name="NbrPara" id="NbrPara"  class="NbrPara"
			value="4" min="0" max="20">
		</div>
	</div>

	<div class="textarea">
		<textarea name="textearea" classe="textearea" id="textearea" cols="80" rows="10"></textarea>
	</div>


	<script scr="{mix('/js/app.js')}}"></script>
</body>

</html>