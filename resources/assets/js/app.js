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

}

function getSentenceRange(){
	return  [
	document.getElementById('nbrSentences').valueLow,
	document.getElementById('nbrSentences').valueHigh
	];
}

function getNbrParagraph(event){
	const nbrOfparagraphs = event? event.target.value : '4';
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
	$.get(`/api/generateParagraphs/nbrParagraphs/${nbrOfparagraphs}/rangeOfSentences/
		${rangeMinSentences}/${rangeMaxSentences}`)
	.done(function(data){
		document.getElementById('textearea').value = data;
	});
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