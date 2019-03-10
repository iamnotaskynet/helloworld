import {JsonToHtml} from '/app/JsonToHtml.js';
import {ModelPhp} from '/app/model/web/php/ModelPhp.js';
let ControllerPhp = function() {


	// function getElementsFromJson(arr){
	// 	let str = "";
	// 	for (let i = 0; i < arr.length; i++) {
			
	// 		str += `<${arr[i].tag} class="${arr[i].class}" id="${arr[i].id}">${arr[i].innerHTM}</${arr[i].tag}>`;
	// 	}
	// 	return str;
	// }

	// let divContainer = getElementsFromJson(ModelPhp('php7'));
	// let divLeftItem = getElementsFromJson(ModelPhp('php7left'));
	// let divRightItem = getElementsFromJson(ModelPhp('php7right'));

	// let changeHTML = function() {
	// 	let element = document.getElementById('level2');
	// 	element.innerHTML = divContainer;
	// 	document.getElementById('level2').innerHTML = divLeftItem + divRightItem;
	// }

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelPhp);

}
export {ControllerPhp};
