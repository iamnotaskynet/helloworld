import {JsonToHtml} from '/helloworld/app/JsonToHtml.js';
import {ModelPython} from '/helloworld/app/model/common/python/ModelPython.js';
let ControllerPython = function() {


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

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelPython);

}
export {ControllerPython};
