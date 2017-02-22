
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

const paragraphGenerator = {

 function init(){
 	console.log("init");
 	listeners();
 }

 function listeners(){
 	console.log("listen");
 }

 
}
if(document.readyState != 'loading'){
 	paragraphGenerator.init();
 } else {
 	document.addEventListener('DOMContentLoaded', paragraphGenerator.init);
 }