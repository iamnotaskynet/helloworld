const ModelMain = { 
	"body":
	[

		{

			"tag":"body",
			"class":"", 
			"innerHTM": [
				{
					"tag":"header",
					"class":"flex-container", 
					"onclick":"", 
					"id":"level0", 
					"innerHTM":[
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-web", "innerHTM":"WEB"},
						{"tag":"span","class":"slashes","innerHTM":"/"},
						// {"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-android", "innerHTM":"Android"},
						// {"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-server", "innerHTM":"Server"},
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-common", "innerHTM":"Common"},
						{"tag":"span","class":"slashes","innerHTM":"/"},
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-db", "innerHTM":"DataBases"},
						{"tag":"span","class":"slashes","innerHTM":"/"},
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-linux", "innerHTM":"Linux"},
						{"tag":"span","class":"slashes","innerHTM":"/"},
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-networks", "innerHTM":"Networks"},
						{"tag":"span","class":"slashes","innerHTM":"/"},
						{"tag":"button", "class":"flex-item btn-lvl-0", "id":"btn-virt", "innerHTM":"Virtualization"}
					]
				}, 

				{"tag":"header", "class":"flex-container", "innerHTM":"", "id":"level1"}, //Submenu apperae here
				{"tag":"main", "class":"", "innerHTM":"", "id":"level2"} //Content appeare here 
			]

		}
	],

	"webArr" : 
	[	
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-html5", "innerHTM":"HTML5"}, //getString()
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-css3", "innerHTM":"CSS3"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-es6", "innerHTM":"ES6"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-php7", "innerHTM":"PHP7"}
		
	],

	// "androidArr" : 
	// [
	// 	{"tag":"button", "class":"flex-item", "id":"btn-android-java", "innerHTM":"Android Java"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-native-script", "innerHTM":"NativeScript"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-kivy-python", "innerHTM":"Kivy python"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-pybee", "innerHTM":"Pybee"}
	// ],

	// "serverArr" :
	// [
	// 	{"tag":"button", "class":"flex-item", "id":"btn-node-js", "innerHTM":"NodeJS"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-python", "innerHTM":"Python Django"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-java", "innerHTM":"Java Spring Hibernate"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-csharp", "innerHTM":"Csharp dotnet core"},
	// 	{"tag":"button", "class":"flex-item", "id":"btn-cpp", "innerHTM":"Cpp"}
	// ],

	"commonArr" :
	[
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-python", "innerHTM":"Python"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-java", "innerHTM":"Java"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-csharp", "innerHTM":"Csharp"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-rust", "innerHTM":"Rust"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-cpp", "innerHTM":"Cpp"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-c", "innerHTM":"C"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-swift", "innerHTM":"Swift"}
	],

	"dbArr" :
	[
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-sql", "innerHTM":"SQL"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-mysql", "innerHTM":"MySQL"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-postgres", "innerHTM":"Postgres"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-mongodb", "innerHTM":"MongoDB"}
	],

	"linuxArr" :
	[
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-git", "innerHTM":"git"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-bash", "innerHTM":"Bash"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-kernel", "innerHTM":"Kernel"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-modern-programs", "innerHTM":"Modern programs"}
	],

	"networksArr" :
	[
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-tcp-ip", "innerHTM":"TCP/IP"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-osi", "innerHTM":"OSI"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-protocols", "innerHTM":"protocols"}
	],

	"virtArr" :
	[
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-virtual-box", "innerHTM":"Virtual Box"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-vmware", "innerHTM":"VMWare"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-qemu", "innerHTM":"QEMU"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-lxc-lxd", "innerHTM":"lxc lxd"},
		{"tag":"button", "class":"flex-item btn-lvl-1", "id":"btn-docker", "innerHTM":"docker"}
	]

}
export {ModelMain};
