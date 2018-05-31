const JsonToHtml = function(argument){

	function getElementsFromJson(arr){
		let str = "";
		for (let i = 0; i < arr.length; i++) { 
			str += getElementFromJson(arr[i]);
		}
		return str;
	};

	function getElementFromJson(data) {
		let element;
		if (typeof data.id != "undefined" ) {
			//element = `<${data.tag} class="${data.class}" id="${data.id}">${data.innerHTM}</${data.tag}>`;

			if (Array.isArray(data.innerHTM)) 
				element = `<${data.tag} class="${data.class}" id="${data.id}">${ getElementsFromJson(data.innerHTM)}</${data.tag}>`;
			else if (typeof data.innerHTM == "object" )
				element = `<${data.tag} class="${data.class}" id="${data.id}">${ getElementFromJson(data.innerHTM)}</${data.tag}>`;
			else element = `<${data.tag} class="${data.class}" id="${data.id}">${data.innerHTM}</${data.tag}>`;
		}
		else {
			if (Array.isArray(data.innerHTM)) 
				element = `<${data.tag} class="${data.class}">${ getElementsFromJson(data.innerHTM)}</${data.tag}>`;
			else if (typeof data.innerHTM == "object" )
				element = `<${data.tag} class="${data.class}">${ getElementFromJson(data.innerHTM)}</${data.tag}>`;
			else element = `<${data.tag} class="${data.class}">${data.innerHTM}</${data.tag}>`;
		}
		//else element = `<${data.tag} class="${data.class}">${data.innerHTM}</${data.tag}>`;
		//console.log(element);
		return element;
	};

	return getElementsFromJson(argument);

}

export {JsonToHtml};