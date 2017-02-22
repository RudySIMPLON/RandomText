
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 function init(){
 	listeners();
 	getParaphs()
 }

 function listeners(){
 	console.log("listen" );
 	console.log(document.getElementById('valueParaSlider'));
 	document.getElementById('nbrPara').onchange = getParaphs;
 	document.getElementById('nbrPara').oninput = displayValueParagraph;
 }

 function displayValueParagraph(event){
 	console.log('slider oninput',event.target.value);
 	document.getElementById('valueParaSlider').innerText = event.target.value;
 }

 function getParaphs(event){
 	const nbrOfparagraphs = event? event.target.value : '4';
 	$.get(`/api/generateParagraphs/paragraphs/${nbrOfparagraphs}`)
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