import {JsonToHtml} from '/helloworld/app/JsonToHtml.js';

import {ModelMain} from '/helloworld/app/model/ModelMain.js';

//-----------------------------------------------------------------------For WEB button
import {ControllerHtml} from '/app/controller/web/html/ControllerHtml.js';
import {ControllerCss} from '/app/controller/web/css/ControllerCss.js';
import {ControllerJs} from '/app/controller/web/js/ControllerJs.js';
import {ControllerPhp} from '/app/controller/web/php/ControllerPhp.js';
//----------------------------------------------------------------------For COMMON button
import {ControllerPython} from '/app/controller/common/python/ControllerPython.js';


window.onload = load;
//------------------------------------------------------------------------------------LEVEL0
function load() {
	let headAndBody = '<html lang="en">' + writeHead() + JsonToHtml(ModelMain.body) + '</html>';
	document.write(headAndBody);

	level0EventsButtonClick();
};

//--------------------------------------HEAD TAG WRITE
function writeHead() {
	let headElement =`
<head>
	<meta charset="utf-8">
	<meta name="viewpoert" content="width=device-width, initial-scale=1.0" />
	<title>helloworld</title>
	<link rel="stylesheet" type="text/css" href="./styles/style.css">
	<link rel="stylesheet" type="text/css" href="./styles/codestyle.css">
	
	<script src="app/controller/ControllerMain.js" type="module" defer />
	<script type="text/javascript"> </script>
</head>
	`;
	return headElement;
};

//-----------------------------------------------------------------------------------LEVEL1
function writeLevel1(stack) {
	//console.log('in writeLevel1');
	document.getElementById('level1').innerHTML = ""; // Will be here while content of page is pure
	//let level1 = document.getElementById('level1').innerHTML;
	switch (stack) {
		case 'btn-web': 
			//console.log('in case of switch');
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.webArr);
			break;
		case 'btn-android': 
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.androidArr);
			break;
		case 'btn-server':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.serverArr);
			break;
		case 'btn-common':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.commonArr);
			break;
		case 'btn-db':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.dbArr);
			break;
		case 'btn-linux':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.linuxArr);
			break;
		case 'btn-networks':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.networksArr);
			break;
		case 'btn-virt':
			return document.getElementById('level1').innerHTML = JsonToHtml(ModelMain.virtArr);
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
	else if (section == "btn-css3") ControllerCss();
	else if (section == "btn-es6") ControllerJs();
	else if (section == "btn-php7") ControllerPhp();
	else if (section == "btn-python") ControllerPython();
	else return document.getElementById('level2').innerHTML = "<h1>HTTP 404 Server is DOWN</h1>"
};

//-----------------------------------------------------------------------------Events
function level0EventsButtonClick() {
	let listOfButtons = level0.getElementsByTagName("button");

	for(let iter = 0; iter < listOfButtons.length; iter++){
		let buttonId = listOfButtons.item(iter).id		
		document.getElementById(buttonId).addEventListener("click", function( event ) {
				//writing buttons on level1
				writeLevel1( buttonId); 
				//console.log( buttonId);
				document.getElementById('level2').innerHTML = "";
				//add events to buttons at level1 
				//after clicling buttons on level0
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
				//writing level2 content
				writeLevel2(buttonId);
		}, false);
	};
}
