import {JsonToHtml} from '/helloworld/app/JsonToHtml.js';
import {ModelHtml} from '/helloworld/app/model/web/html/ModelHtml.js';
let ControllerHtml = function() {

	let content = JsonToHtml(ModelHtml);

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelHtml);

}
export {ControllerHtml};
