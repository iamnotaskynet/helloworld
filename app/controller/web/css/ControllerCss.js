import {JsonToHtml} from '/helloworld/app/JsonToHtml.js';
import {ModelCss} from '/helloworld/app/model/web/css/ModelCss.js';
let ControllerCss = function() {

	// let divContainer = JsonToHtml(ModelCss('css3'));
	// let divLeftItem1 = JsonToHtml(ModelCss('css3left1'));
	// let divRightItem1 = JsonToHtml(ModelCss('css3right1'));

	// let changeHTML = function() {
	// 	let element = document.getElementById('level2');
	// 	document.getElementById('level2').innerHTML = divContainer;
	// 	//document.getElementById('level2').innerHTML = divLeftItem1 + divRightItem1;
	// 	//document.getElementById('level2').innerHTML += divLeftItem1 + divRightItem1;
	// }

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelCss);

}
export {ControllerCss};
