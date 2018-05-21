import {ModelHtml} from 'https://iamnotaskynet.github.io/helloworld/app/model/web/html/ModelHtml.js';
let ControllerHtml = function() {


	function getElementsFromJson(arr){
		let str = "";
		for (let i = 0; i < arr.length; i++) { 
			str += `<${arr[i].tag} class="${arr[i].class}" id="${arr[i].id}">${arr[i].innerHTM}</${arr[i].tag}>`;
		}
		return str;
	}

	let divContainer = getElementsFromJson(ModelHtml('html5'));
	let divLeftItem = getElementsFromJson(ModelHtml('html5left'));
	let divRightItem = getElementsFromJson(ModelHtml('html5right'));

	let changeHTML = function() {
		let element = document.getElementById('level2');
		element.innerHTML = divContainer;
		document.getElementById('level2').innerHTML = divLeftItem + divRightItem;
	}


	return changeHTML();

}
export {ControllerHtml};
