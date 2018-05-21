let ModelMain = function(arg) {

//----------------------------------------------------------------document-structure
	const bodyArr = [
		{"tag":"body", "class":"", "onclick":"", "innerHTM":"",}
	];

	const basicHeadersArr = [
		{"tag":"header", "class":"container", "onclick":"", "innerHTM":"", "id":"level0"}, //Technologies stacks/cluster appear here
		{"tag":"header", "class":"container", "onclick":"", "innerHTM":"", "id":"level1"}, //Submenu apperae here
		{"tag":"main", "class":"container", "onclick":"", "innerHTM":"", "id":"level2"} //Content appeare here 
	];

//-----------------------------------------------------------------------------------LEVEL0

	const techsStacksArr = [
		{"tag":"button", "class":"item", "id":"btn-web", "innerHTM":"WEB"},
		{"tag":"button", "class":"item", "id":"btn-android", "innerHTM":"Android"},
		{"tag":"button", "class":"item", "id":"btn-server", "innerHTM":"Server/Common"},
		{"tag":"button", "class":"item", "id":"btn-db", "innerHTM":"DataBases"},
		{"tag":"button", "class":"item", "id":"btn-linux", "innerHTM":"Linux"},
		{"tag":"button", "class":"item", "id":"btn-networks", "innerHTM":"Networks"},
		{"tag":"button", "class":"item", "id":"btn-virt", "innerHTM":"Virtualization"}
	];

//-----------------------------------------------------------------------------------LEVEL1
	

	const webHtmlArr = [	
		{"tag":"button", "class":"item", "id":"btn-html5", "innerHTM":"HTML5"}, //getString()
		{"tag":"button", "class":"item", "id":"btn-css3", "innerHTM":"CSS3"},
		{"tag":"button", "class":"item", "id":"btn-es6", "innerHTM":"ES6"}
		
	];

	const androidArr = [
		{"tag":"button", "class":"item", "id":"btn-android-java", "innerHTM":"Android Java"}
	];

	const serverHtmlArr = [
		{"tag":"button", "class":"item", "id":"btn-node-js", "innerHTM":"NodeJS"},
		{"tag":"button", "class":"item", "id":"btn-php", "innerHTM":"PHP"},
		{"tag":"button", "class":"item", "id":"btn-python", "innerHTM":"Python"},
		{"tag":"button", "class":"item", "id":"btn-java", "innerHTM":"Java"},
		{"tag":"button", "class":"item", "id":"btn-csharp", "innerHTM":"Csharp"},
		{"tag":"button", "class":"item", "id":"btn-cpp", "innerHTM":"Cpp"},
		{"tag":"button", "class":"item", "id":"btn-c", "innerHTM":"C"}
	];

	const dbHtmlArr = [
		{"tag":"button", "class":"item", "id":"btn-sql", "innerHTM":"SQL"},
		{"tag":"button", "class":"item", "id":"btn-mysql", "innerHTM":"MySQL"},
		{"tag":"button", "class":"item", "id":"btn-postgres", "innerHTM":"Postgres"},
		{"tag":"button", "class":"item", "id":"btn-mongodb", "innerHTM":"MongoDB"}
	];

	const linuxHtmlArr = [
		{"tag":"button", "class":"item", "id":"btn-bash", "innerHTM":"Bash"},
		{"tag":"button", "class":"item", "id":"btn-kernel", "innerHTM":"Kernel"},
		{"tag":"button", "class":"item", "id":"btn-modern-programs", "innerHTM":"Modern programs"}
	];

	const networksHtmlArr = [
		{"tag":"button", "class":"item", "id":"btn-tcp-ip", "innerHTM":"TCP/IP"},
		{"tag":"button", "class":"item", "id":"btn-osi", "innerHTM":"OSI"}
	];// protocols tcp/ip model osi model

	const virtHtmlArr = [
		{"tag":"button", "class":"item", "id":"btn-virtual-box", "innerHTM":"Virtual Box"},
		{"tag":"button", "class":"item", "id":"btn-vmware", "innerHTM":"VMWare"},
		{"tag":"button", "class":"item", "id":"btn-qemu", "innerHTM":"QEMU"},
		{"tag":"button", "class":"item", "id":"btn-lxc-lxd", "innerHTM":"lxc lxd"},
		{"tag":"button", "class":"item", "id":"btn-docker", "innerHTM":"docker"}
	];

	

	let getElements = function(wichTotake) {
		switch (wichTotake) {
			case 'body':
				return bodyArr;
				break;
			case 'basic':
				return basicHeadersArr;
				break;
			case 'tech':
				return techsStacksArr;
				break;
			case 'web':
				return webHtmlArr;
				break;
			case 'android':
				return androidArr;
				break;
			case 'server':
				return serverHtmlArr;
				break;
			case 'db':
				return dbHtmlArr;
				break;
			case 'linux':
				return linuxHtmlArr;
				break;
			case 'network':
				return networksHtmlArr;
				break;
			case 'virt':
				return virtHtmlArr;
				break;
			default:
				return "ERROR";
				break;
		}
	};

	return getElements(arg);

}
export {ModelMain};