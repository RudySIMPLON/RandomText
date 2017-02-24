require('./bootstrap');

function init(){
	listeners();
	getParagraphs();
}

function listeners(){
	document.getElementById('nbrPara').oninput = displayValueParagraph;
	document.getElementById('nbrPara').onchange = getParagraphs;

	const sliderRangeSentences1 = document.getElementsByClassName('nbrSentences')[0];
	const sliderRangeSentences2 = document.getElementsByClassName('nbrSentences')[1];
	sliderRangeSentences1.oninput = displayValueSentences;
	sliderRangeSentences2.oninput = displayValueSentences;
	sliderRangeSentences1.onchange = getParagraphs;
	sliderRangeSentences2.onchange = getParagraphs;

	document.getElementById('check-p').onchange = makeHtmlReady;
}

function getSentenceRange(){
	return  [
	document.getElementById('nbrSentences').valueLow,
	document.getElementById('nbrSentences').valueHigh
	];
}

function getNbrParagraph(event){
	const nbrOfparagraphs = event? event.target.value : document.getElementById('nbrPara').value;
	return nbrOfparagraphs;
}

function displayValueParagraph(event){
	document.getElementById('valueParaSlider').innerText = event.target.value;
}
function displayValueSentences(event){
	document.getElementById('valueMinSentencesSlider').innerText = event.target.valueLow || getSentenceRange()[0];
	document.getElementById('valueMaxSentencesSlider').innerText = event.target.valueHigh || getSentenceRange()[1];
}

function getParagraphs(){
	const nbrOfparagraphs = getNbrParagraph();
	const rangeMinSentences = getSentenceRange()[0];
	const rangeMaxSentences = getSentenceRange()[1];
	$.get(window.location.href + `api/generateParagraphs/nbrParagraphs/${nbrOfparagraphs}/rangeOfSentences/
		${rangeMinSentences}/${rangeMaxSentences}`)
	.done(function(data){
		document.getElementById('textearea').value = data;
		document.getElementById('check-p').checked = false;
	});
}

function makeHtmlReady(event){
	if(!event.target.checked){
		getParagraphs();
	}else{
		const arrText = document.getElementById('textearea').value.split("\n");
		document.getElementById('textearea').value = arrText
		.filter((i)=>i !== "")
		.map((item)=>"<p>" + item + "</p>")
		.join("\n\n");
	}
}

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
	}
});

if(document.readyState != 'loading'){
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}