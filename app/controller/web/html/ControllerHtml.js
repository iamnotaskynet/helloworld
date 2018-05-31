import {JsonToHtml} from '/app/JsonToHtml.js';
import {ModelHtml} from '/app/model/web/html/ModelHtml.js';
let ControllerHtml = function() {

	let content = JsonToHtml(ModelHtml);

	return document.getElementById('level2').innerHTML = JsonToHtml(ModelHtml);

}
export {ControllerHtml};
