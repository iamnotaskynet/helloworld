import {JsonToHtml} from 'https://iamnotaskynet.github.io/helloworld/app/JsonToHtml.js';
import {ModelHtml} from 'https://iamnotaskynet.github.io/helloworld/app/model/web/html/ModelHtml.js';
let ControllerHtml = function() {

	let content = JsonToHtml(ModelHtml);

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelHtml);

}
export {ControllerHtml};
