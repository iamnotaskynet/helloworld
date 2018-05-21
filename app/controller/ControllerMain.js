import {ModelMain} from '/app/model/ModelMain.js';
import {ModelHtml} from '/app/model/web/html/ModelHtml.js';
import {ControllerHtml} from '/app/controller/web/html/ControllerHtml.js';

window.onload = load;
//------------------------------------------------------------------------------------LEVEL0
function load() {
	document.innerHTML = getElementsFromJson(ModelMain('body'));
	document.body.innerHTML = getElementsFromJson(ModelMain('basic'));
	document.getElementById('level0').innerHTML = getElementsFromJson(ModelMain('tech'));
	level0EventsButtonClick();
};


//-----------------------------------------------------------------------------------LEVEL1
function writeLevel1(stack) {
	//console.log('in writeLevel1');
	document.getElementById('level1').innerHTML = ""; // Will be here while content of page is pure
	//let level1 = document.getElementById('level1').innerHTML;
	switch (stack) {
		case 'btn-web': 
			//console.log('in case of switch');
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('web'));
			break;
		case 'btn-android': 
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('android'));
			break;
		case 'btn-server':
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('server'));
			break;
		case 'btn-db':
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('db'));
			break;
		case 'btn-linux':
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('linux'));
			break;
		case 'btn-networks':
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('network'));
			break;
		case 'btn-virt':
			return document.getElementById('level1').innerHTML = getElementsFromJson(ModelMain('virt'));
			break;
		default:
			return document.getElementById('level1').innerHTML = "<h1>HTTP 404 Server is DOWN</h1>";
			break;
	}

};
//-----------------------------------------------------------------------------------LEVEL2

function writeLevel2(section) {
	document.getElementById('level2').innerHTML = ""; // Will be here while content of page is pure
	if (section == "btn-html5") ControllerHtml();  
	else return document.getElementById('level2').innerHTML = "<h1>HTTP 404 Server is DOWN</h1>"
};

//-------------------------------------------------------------------------Parsing JSON to HTML

function getElementsFromJson(arr){
	let str = "";
	for (let i = 0; i < arr.length; i++) { 
		str += getElementFromJson(arr[i]);
	}
	return str;
};

function getElementFromJson(data) {
	let element;
	if (typeof data.id != "undefined" )
		element = `<${data.tag} class="${data.class}" id="${data.id}">${data.innerHTM}</${data.tag}>`;
	else element = `<${data.tag} class="${data.class}">${data.innerHTM}</${data.tag}>`;
	return element;
};

//--------------------------------------------------Events

function level0EventsButtonClick() {
	let listOfButtons = level0.getElementsByTagName("button");

	for(let iter = 0; iter < listOfButtons.length; iter++){
		let buttonId = listOfButtons.item(iter).id		
		document.getElementById(buttonId).addEventListener("click", function( event ) {
				writeLevel1( buttonId); 
				//console.log( buttonId);
				document.getElementById('level2').innerHTML = ""
				level1EventsButtonClick();
		}, false);
	};
	
}

function level1EventsButtonClick() {
	//console.log( "buttonId");
	let listOfButtons = level1.getElementsByTagName("button");

	for(let iter = 0; iter < listOfButtons.length; iter++){
		let buttonId = listOfButtons.item(iter).id		
		document.getElementById(buttonId).addEventListener("click", function( event ) {
				writeLevel2(buttonId); 
				//console.log( buttonId);
		}, false);
	};

}

