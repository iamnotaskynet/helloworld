"use strict";

function load() {
	document.getElementById('level0').innerHTML = getElementsFromJson(techsStacksArr);
}
window.onload = load;
//-------------------------------------------------------------------------Parsing JSON to HTML
//var data111 = {"tag":"h1", "class":'class=""', "onclick":"", "innerHTM":"Contenttext"};

function getElementsFromJson(arr){
	var str = "";
	for (var i = 0; i < arr.length; i++) { 
		str += getElementFromJson(arr[i]);
	}
	return str;
}

function getElementFromJson(data) {
	var element = `<${data.tag} class="${data.class}" onclick="${data.onclick}">${data.innerHTM}</${data.tag}>`;
	return element;
}


//-----------------------------------------------------------------------------------LEVEL0
var techsStacksArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel1('web')", "innerHTM":"WEB"},
	{"tag":"button", "class":"item", "onclick":"writeLevel1('server')", "innerHTM":"Server/Common"},
	{"tag":"button", "class":"item", "onclick":"writeLevel1('db')", "innerHTM":"DataBases"},
	{"tag":"button", "class":"item", "onclick":"writeLevel1('linux')", "innerHTM":"Linux"},
	{"tag":"button", "class":"item", "onclick":"writeLevel1('networks')", "innerHTM":"Networks"},
	{"tag":"button", "class":"item", "onclick":"writeLevel1('virt')", "innerHTM":"Virtualization"}
];

function writeLevel1(stack) {
	document.getElementById('level1').innerHTML = ""; // Will be here while content of page is pure

	switch (stack) {
		case 'web': 
			return document.getElementById('level1').innerHTML = getElementsFromJson(webHtmlArr);
			break;
		case 'server':
			return document.getElementById('level1').innerHTML = getElementsFromJson(serverHtmlArr);
			break;
		case 'db':
			return document.getElementById('level1').innerHTML = getElementsFromJson(dbHtmlArr);
			break;
		case 'linux':
			return document.getElementById('level1').innerHTML = getElementsFromJson(linuxHtmlArr);
			break;
		case 'networks':
			return document.getElementById('level1').innerHTML = getElementsFromJson(networksHtmlArr);
			break;
		case 'virt':
			return document.getElementById('level1').innerHTML = getElementsFromJson(virtHtmlArr);
			break;
		default:
			return document.getElementById('level1').innerHTML = "<h1>HTTP 404 Server is DOWN</h1>";
			break;
	}
}
//-----------------------------------------------------------------------------------LEVEL1

var webHtmlArr = [	
	{"tag":"button", "class":"item", "onclick":"writeLevel2('html5')", "innerHTM":"HTML5"}, //getString()
	{"tag":"button", "class":"item", "onclick":"writeLevel2('')", "innerHTM":"CSS3"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"ES6"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Android Java"}
];

var serverHtmlArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"NodeJS"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Python"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Java"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Csharp"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Cpp"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"C"}
];

var dbHtmlArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"SQL"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"MySQL"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Postgres"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"MongoDB"}
];

var linuxHtmlArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Bash"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Kernel"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Modern programs"}
];

var networksHtmlArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"TCP/IP"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"OSI"}
];// protocols tcp/ip model osi model

var virtHtmlArr = [
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Info"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"Virtual Box"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"VMWare"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"QEMU"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"lxc lxd"},
	{"tag":"button", "class":"item", "onclick":"writeLevel2()", "innerHTM":"docker"}
];

function writeLevel2(section) {
	document.getElementById('level2').innerHTML = ""; // Will be here while content of page is pure
	if (section == "html5") HTML5module.callChangeHTML();  
	else if (section == "elem") return document.getElementById('level2').innerHTML = getElementFromJson(data111); 
	else return document.getElementById('level2').innerHTML = "<h1>HTTP 404 Server is DOWN</h1>"
}










function itIsWorking() {
	console.log("IT IS WORKING");
}